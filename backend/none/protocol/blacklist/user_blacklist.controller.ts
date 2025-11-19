import { Controller, Body, Post, UseGuards, Get, Request, HttpException, HttpStatus, Query, ForbiddenException, Put, Delete, Param, NotFoundException } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/roles';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { UserBlacklistService } from './user_blacklist.service';
import { ids } from 'webpack';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('/api/dyblacklist')
@ApiTags('智能卡片')
export class UserBlacklistController {
 
  constructor(
    private readonly userBlacklistSevice:UserBlacklistService
  ){}


  @Roles('team_autoreply')
  @Get('/index')
  @ApiResponse({ description: '获取列表'})
  async getIndex(@Query() query: any , @Body() body: any , @Request() request) {
    const autoreplyList = await this.userBlacklistSevice.repository.getPageList( request.user.team_id, query.current ,query.types ,query.keyword , query.size);
    return {list:autoreplyList[0] ,count:autoreplyList[1]  };
  }
  
  @Roles('team_autoreply')
  @Get('/list')
  @ApiResponse({ description: '获取所有列表'})
  async getList(@Query() query: any , @Body() body: any , @Request() request) {
    let list = await this.userBlacklistSevice.repository.find({team_id:request.user.team_id,state:1});
    let newlist = {};
    list.forEach(item=>{newlist[item.uid] = item.type;});
    return {list: newlist };
  }

  @Roles('team_autoreply')
  @Post('create')
  @ApiResponse({ description: '新增'})
  async autoreplyUpdate(@Body() body: any, @Request() request) {
    console.log(body);
    body.team_id = request.blacklist.team_id;
    body.owner_id = request.blacklist.id;
    let autoreply = await this.userBlacklistSevice.repository.createOrUpdate( body   )
    // this.userBlacklistSevice.cacheAutoReply(request.blacklist.id,body.type,true);
    return autoreply;
  }

  @Roles('team_autoreply')
  @Post('batch_delete')
  @ApiResponse({ description: '批量删除'})
  async deleteAutoReply(@Request() request , @Body() body: any) {
    // if(body.team_id!=request.user.team_id){throw new ForbiddenException(); }
    // let entity = await this.userBlacklistSevice.repository.findOne( body.ids[0]);
    // if(entity.team_id!=request.user.team_id){throw new ForbiddenException(); }
    await this.userBlacklistSevice.repository.deleteByIds(  body.ids );
    return true;
  }


  // @Roles('team_autoreply')
  // @Get(':id')
  // @ApiResponse({ description: '获取单个'})
  // async getAutoReplyById(@Param("id") id:string, @Request() request,  @Body() body: any ) {//@Param('id') id: string,
  //   const entity = await this.userBlacklistSevice.repository.findOne(id);
  //   if(!entity){ throw new NotFoundException("账号不存在或未授权"); }

  //   // let extPage = await this.autoreplySevice.puppeteerPagesService.repository.findOne(autoreply.page_id);
  //   return entity;
  // }

  @Roles('team_autoreply')
  @Post('edit/:id')
  @ApiResponse({ description: '编辑'})
  async updateAutoReply(@Param("id") id:string, @Request() request , @Body() body: any) {
    let autoreply = await this.userBlacklistSevice.repository.createOrUpdate(  body );
    return autoreply;
  }



}

