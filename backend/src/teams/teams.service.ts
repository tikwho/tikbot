import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async create(teamData: Partial<Team>): Promise<Team> {
    // ensure required tenant_id exists; auto-generate if missing
    if (!teamData.tenant_id) {
      teamData.tenant_id = randomUUID();
    }
    const team = this.teamRepository.create(teamData);
    return await this.teamRepository.save(team);
  }

  async findById(id: string): Promise<Team> {
    const team = await this.teamRepository.findOne({
      where: { id },
      relations: ['members', 'agents', 'conversations'],
    });

    if (!team) {
      throw new NotFoundException('Team not found');
    }

    return team;
  }

  async findByTenant(tenantId: string): Promise<Team[]> {
    return await this.teamRepository.find({
      where: { tenant_id: tenantId },
      relations: ['members', 'agents'],
    });
  }

  async update(id: string, updateData: Partial<Team>): Promise<Team> {
    await this.teamRepository.update(id, updateData);
    return await this.findById(id);
  }
}