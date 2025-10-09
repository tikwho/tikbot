import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './entities/agent.entity';
import { AgentPresence } from 'shared/types';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent)
    private agentRepository: Repository<Agent>,
  ) {}

  async create(agentData: Partial<Agent>): Promise<Agent> {
    const agent = this.agentRepository.create(agentData);
    return await this.agentRepository.save(agent);
  }

  async findByUserId(userId: string): Promise<Agent | null> {
    return await this.agentRepository.findOne({
      where: { user_id: userId },
      relations: ['user', 'team'],
    });
  }

  async findById(id: string): Promise<Agent> {
    const agent = await this.agentRepository.findOne({
      where: { id },
      relations: ['user', 'team'],
    });

    if (!agent) {
      throw new NotFoundException('Agent not found');
    }

    return agent;
  }

  async updatePresence(agentId: string, presence: AgentPresence): Promise<void> {
    await this.agentRepository.update(agentId, {
      presence,
      last_seen_at: new Date(),
    });
  }

  async updateLoad(agentId: string, loadChange: number): Promise<void> {
    const agent = await this.findById(agentId);
    const newLoad = Math.max(0, agent.current_load + loadChange);
    
    await this.agentRepository.update(agentId, {
      current_load: newLoad,
    });
  }

  async getTeamAgents(teamId: string): Promise<Agent[]> {
    return await this.agentRepository.find({
      where: { team_id: teamId },
      relations: ['user'],
    });
  }

  async getOnlineAgents(teamId: string): Promise<Agent[]> {
    return await this.agentRepository.find({
      where: { 
        team_id: teamId,
        presence: AgentPresence.ONLINE,
      },
      relations: ['user'],
    });
  }
}