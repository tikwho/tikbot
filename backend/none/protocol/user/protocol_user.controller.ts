import { Controller, Body, Post, UseGuards, Get, Request, HttpException, HttpStatus, Query, ForbiddenException, Put, Delete, Param, NotFoundException } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/roles';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { ProtocolUserRepository } from './protocol_user.repository';
import { ProtocolUserService } from './protocol_user.service';
import { ProtocolService } from '../protocol.service';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('/api/protocol/user')
@ApiTags('智能卡片')
export class ProtocolUserController {
 
  constructor(
    private readonly protocolUserSevice:ProtocolUserService,
    private readonly protocolSevice:ProtocolService,
  ){}


  @Roles('team_autoreply')
  @Get('/index')
  @ApiResponse({ description: '获取列表'})
  async getAutoReplyList(@Query() query: any , @Body() body: any , @Request() request) {
    console.info(query.sort,query);
    const autoreplyList = await this.protocolUserSevice.repository.getPageList( request.user.team_id, query.current ,query.sort?JSON.parse(query.sort):{} ,query.keywords , query.size);
    return {list:autoreplyList[0] ,count:autoreplyList[1]  };
  }

  // @Roles('team_autoreply')
  // @Post('create')
  // @ApiResponse({ description: '新增回复'})
  // async autoreplyUpdate(@Body() body: any, @Request() request) {
  //   console.log(body);
  //   body.team_id = request.user.team_id;
  //   body.owner_id = request.user.id;
  //   let autoreply = await this.protocolUserSevice.createOrUpdate( body   )
  //   // this.protocolUserSevice.cacheAutoReply(request.user.id,body.type,true);
  //   return autoreply;
  // }

  @Roles('team_autoreply')
  @Get(':id')
  @ApiResponse({ description: '获取单个'})
  async getAutoReplyById(@Param("id") id:string, @Request() request,  @Body() body: any ) {//@Param('id') id: string,
    const entity = await this.protocolUserSevice.repository.findOne(id);
    // this.protocolUserSevice.repository.createOrUpdate({
    //     id: '3135425919598430',
    //     ip: '112.1.58.112',
    //     linkcard_id: 'd32346db-706c-45db-939a-3ed905f142e9'
    //   });
    if(!entity){ throw new NotFoundException("该账号没有记录"); }

    // let extPage = await this.autoreplySevice.puppeteerPagesService.repository.findOne(autoreply.page_id);
    return entity;
  }

  // @Roles('team_autoreply')
  // @Post('edit/:id')
  // @ApiResponse({ description: '编辑'})
  // async updateAutoReply(@Param("id") id:string, @Request() request , @Body() body: any) {
  //   // if(body.team_id!=request.user.team_id){throw new ForbiddenException(); }
  //   let autoreply = await this.protocolUserSevice.createOrUpdate(  body );
  //   return autoreply;
  // }

  @Roles('team_autoreply')
  @Post('batch_delete')
  @ApiResponse({ description: '批量删除'})
  async deleteAutoReply(@Request() request , @Body() body: any) {
    // if(body.team_id!=request.user.team_id){throw new ForbiddenException(); }
    // let entity = await this.protocolUserSevice.repository.findOne( body.ids[0]);
    // if(entity.team_id!=request.user.team_id){throw new ForbiddenException(); }
    await this.protocolUserSevice.repository.deleteByIds(  body.ids,request.user.team_id );
    return true;
  }

  @Roles('team_autoreply')
  @Delete(":id")
  @ApiResponse({ description: '删除策略'})
  async delteObj(@Param("id") id:string, @Request() request , @Body() body: any) {
    console.log([id]);
    let entity = await this.protocolUserSevice.repository.findOne(id);
    // if(entity.team_id!=request.user.team_id){throw new ForbiddenException(); }
    this.protocolUserSevice.repository.deleteByIds(  [id] , request.user.team_id );
    return true;
  }


}

