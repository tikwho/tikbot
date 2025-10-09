import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('metrics')
@UseGuards(JwtAuthGuard)
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @Get('system')
  async getSystemMetrics() {
    return await this.metricsService.getSystemMetrics();
  }

  @Get('agent')
  async getAgentMetrics(
    @Query('agentId') agentId: string,
    @Query('days') days: number = 7,
  ) {
    return await this.metricsService.getAgentMetrics(agentId, days);
  }

  @Get('team')
  async getTeamMetrics(
    @Query('teamId') teamId: string,
    @Query('days') days: number = 7,
  ) {
    return await this.metricsService.getTeamMetrics(teamId, days);
  }

  @Get('messages')
  async getMessageMetrics(@Query('hours') hours: number = 24) {
    return await this.metricsService.getMessageMetrics(hours);
  }
}