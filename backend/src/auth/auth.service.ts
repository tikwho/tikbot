import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AgentsService } from '../agents/agents.service';
import { TeamsService } from '../teams/teams.service';
import { User } from '../users/entities/user.entity';
import { UserRole, AgentPresence } from 'shared/types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private agentsService: AgentsService,
    private teamsService: TeamsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    
    if (user && await this.usersService.validatePassword(user, password)) {
      const { password_hash, ...result } = user;
      return result;
    }
    
    return null;
  }

  async login(user: User) {
    // 获取用户的坐席信息
    const agent = await this.agentsService.findByUserId(user.id);
    
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
      tenantId: user.tenant_id,
      teamId: user.team_id,
      agentId: agent?.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        tenantId: user.tenant_id,
        teamId: user.team_id,
        agentId: agent?.id,
      },
    };
  }

  async validateToken(token: string): Promise<any> {
    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async refreshToken(user: User) {
    return this.login(user);
  }

  async register(registerDto: { 
    email: string; 
    password: string; 
    name: string; 
    tenant_name: string 
  }) {
    // 检查邮箱是否已存在
    const existingUser = await this.usersService.findByEmail(registerDto.email);
    if (existingUser) {
      throw new ConflictException('邮箱已被注册');
    }

    // 创建团队
    const team = await this.teamsService.create({
      name: registerDto.tenant_name,
      description: `${registerDto.tenant_name}的客服团队`,
    });

    // 创建用户
    const user = await this.usersService.create({
      email: registerDto.email,
      password: registerDto.password,
      name: registerDto.name,
      role: UserRole.ADMIN, // 注册用户默认为管理员
      tenant_id: team.id,
      team_id: team.id,
    });

    // 创建坐席
    await this.agentsService.create({
      user_id: user.id,
      team_id: team.id,
      presence: AgentPresence.ONLINE,
    });

    return user;
  }
}