import { Controller, Body, Post, UseGuards, Get, Request, HttpException, HttpStatus, Query, ForbiddenException, Put, Delete, Param, NotFoundException } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/roles';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { ProtocolUserRepository } from './protocol_user.repository';
import { ProtocolUserService } from './protocol_user.service';

// @UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('/api/protocol_user')
@ApiTags('智能卡片')
export class ProtocolUserPublicController {
 
  constructor(
    private readonly linkcardUserSevice:ProtocolUserService
  ){}




  @Roles('team_autoreply')
  @Post('save')
  @ApiResponse({ description: '新增'})
  async autoreplyUpdate(@Body() body: any, @Request() request) {
    let autoreply = await this.linkcardUserSevice.repository.createOrUpdate( {id:body.id,name:body.name,mobile:body.mobile}   )
    return autoreply;
  }



}

