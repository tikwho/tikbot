import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RedisService } from '../redis/redis.service';
import { AgentsService } from '../agents/agents.service';
import { ConversationLockService } from '../conversations/services/conversation-lock.service';
import { AgentPresence } from 'shared/types';

interface AuthenticatedSocket extends Socket {
  userId: string;
  agentId: string;
  teamId: string;
}

@WebSocketGateway({
  cors: {
    origin: true,
    credentials: true,
  },
  namespace: '/ws',
})
@Injectable()
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private connectedAgents = new Map<string, AuthenticatedSocket>();

  constructor(
    private jwtService: JwtService,
    private redisService: RedisService,
    private agentsService: AgentsService,
    private lockService: ConversationLockService,
  ) {}

  async handleConnection(client: Socket) {
    try {
      const token = client.handshake.auth.token || client.handshake.headers.authorization?.replace('Bearer ', '');
      
      if (!token) {
        client.disconnect();
        return;
      }

      const payload = this.jwtService.verify(token);
      const agent = await this.agentsService.findByUserId(payload.sub);
      
      if (!agent) {
        client.disconnect();
        return;
      }

      const authenticatedClient = client as AuthenticatedSocket;
      authenticatedClient.userId = payload.sub;
      authenticatedClient.agentId = agent.id;
      authenticatedClient.teamId = agent.team_id;

      // 加入团队房间
      await client.join(`team:${agent.team_id}`);
      await client.join(`agent:${agent.id}`);

      // 记录连接
      this.connectedAgents.set(agent.id, authenticatedClient);

      // 更新坐席在线状态
      await this.agentsService.updatePresence(agent.id, AgentPresence.ONLINE);

      // 通知团队成员
      this.server.to(`team:${agent.team_id}`).emit('agent_online', {
        agentId: agent.id,
        timestamp: new Date(),
      });

      console.log(`Agent ${agent.id} connected`);
    } catch (error) {
      console.error('WebSocket connection error:', error);
      client.disconnect();
    }
  }

  async handleDisconnect(client: AuthenticatedSocket) {
    if (client.agentId) {
      // 移除连接记录
      this.connectedAgents.delete(client.agentId);

      // 更新坐席离线状态
      await this.agentsService.updatePresence(client.agentId, AgentPresence.OFFLINE);

      // 通知团队成员
      this.server.to(`team:${client.teamId}`).emit('agent_offline', {
        agentId: client.agentId,
        timestamp: new Date(),
      });

      console.log(`Agent ${client.agentId} disconnected`);
    }
  }

  @SubscribeMessage('join_conversation')
  async handleJoinConversation(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { conversationId: string },
  ) {
    await client.join(`conversation:${data.conversationId}`);
    
    // 尝试获取会话锁
    const lock = await this.lockService.acquireLock(data.conversationId, client.agentId);
    
    if (lock) {
      client.emit('conversation_locked', {
        conversationId: data.conversationId,
        lockId: lock.lockId,
        expiresAt: lock.expiresAt,
      });

      // 通知其他坐席会话已被锁定
      client.to(`conversation:${data.conversationId}`).emit('conversation_lock_changed', {
        conversationId: data.conversationId,
        lockedBy: client.agentId,
        timestamp: new Date(),
      });
    } else {
      // 获取当前锁信息
      const lockInfo = await this.lockService.getLockInfo(data.conversationId);
      client.emit('conversation_lock_failed', {
        conversationId: data.conversationId,
        lockedBy: lockInfo?.agentId,
        expiresAt: lockInfo?.expiresAt,
      });
    }
  }

  @SubscribeMessage('leave_conversation')
  async handleLeaveConversation(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { conversationId: string; lockId?: string },
  ) {
    await client.leave(`conversation:${data.conversationId}`);
    
    // 释放会话锁
    if (data.lockId) {
      const released = await this.lockService.releaseLock(data.conversationId, data.lockId);
      
      if (released) {
        client.to(`conversation:${data.conversationId}`).emit('conversation_unlocked', {
          conversationId: data.conversationId,
          timestamp: new Date(),
        });
      }
    }
  }

  @SubscribeMessage('typing_start')
  async handleTypingStart(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { conversationId: string },
  ) {
    // 设置 typing 状态
    await this.redisService.set(
      `typing:${data.conversationId}:${client.agentId}`,
      { agentId: client.agentId, startedAt: new Date() },
      5 // 5秒过期
    );

    // 通知其他坐席
    client.to(`conversation:${data.conversationId}`).emit('typing_start', {
      conversationId: data.conversationId,
      agentId: client.agentId,
      timestamp: new Date(),
    });
  }

  @SubscribeMessage('typing_stop')
  async handleTypingStop(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { conversationId: string },
  ) {
    // 清除 typing 状态
    await this.redisService.del(`typing:${data.conversationId}:${client.agentId}`);

    // 通知其他坐席
    client.to(`conversation:${data.conversationId}`).emit('typing_stop', {
      conversationId: data.conversationId,
      agentId: client.agentId,
      timestamp: new Date(),
    });
  }

  @SubscribeMessage('update_presence')
  async handleUpdatePresence(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: { presence: AgentPresence },
  ) {
    await this.agentsService.updatePresence(client.agentId, data.presence);
    
    // 通知团队成员
    this.server.to(`team:${client.teamId}`).emit('agent_presence_changed', {
      agentId: client.agentId,
      presence: data.presence,
      timestamp: new Date(),
    });
  }

  // 服务端推送消息的方法
  async notifyNewMessage(conversationId: string, message: any) {
    this.server.to(`conversation:${conversationId}`).emit('new_message', {
      conversationId,
      message,
      timestamp: new Date(),
    });
  }

  async notifyConversationAssigned(agentId: string, conversation: any) {
    const client = this.connectedAgents.get(agentId);
    if (client) {
      client.emit('conversation_assigned', {
        conversation,
        timestamp: new Date(),
      });
    }
  }

  async notifyQueueUpdate(teamId: string, queueStats: any) {
    this.server.to(`team:${teamId}`).emit('queue_update', {
      stats: queueStats,
      timestamp: new Date(),
    });
  }

  async notifyOutboundResult(conversationId: string, result: any) {
    this.server.to(`conversation:${conversationId}`).emit('outbound_result', {
      conversationId,
      result,
      timestamp: new Date(),
    });
  }

  // 获取在线坐席
  getOnlineAgents(): string[] {
    return Array.from(this.connectedAgents.keys());
  }

  // 检查坐席是否在线
  isAgentOnline(agentId: string): boolean {
    return this.connectedAgents.has(agentId);
  }
}
