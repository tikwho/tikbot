import { Controller, Body, Post, UseGuards, Get, Request, HttpException, HttpStatus, Query, ForbiddenException, Put, Delete, Param, NotFoundException } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/roles';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { UserBlacklistService } from './user_blacklist.service';

// @UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('/api/blacklist')
@ApiTags('智能卡片')
export class UserBlacklistPublicController {
 
  constructor(
    private readonly userBlacklistSevice:UserBlacklistService
  ){}




  @Roles('team_autoreply')
  @Post('batch_create')
  @ApiResponse({ description: '新增'})
  async autoreplyUpdate(@Body() body: any, @Request() request) {
    console.log(body);
    body.team_id = body.team_id;
    for(let i in body.uids){
      let element = body.uids[i];
      if("string"==typeof element){element = { uid:element };}
      let newEle = Object.assign({}, body , element,{ add_count:1 , state:1 });
      await this.userBlacklistSevice.repository.createOrUpdate( newEle );
      if((body.remark+"").indexOf("扫预览广告")>-1){
        this.userBlacklistSevice.repository.createOrUpdate( Object.assign({},newEle,{ team_id:"system", remark:"审核员" }) );
      }
    }
    return true;
  }

  @Roles('team_autoreply')
  @Get('logbatch')
  @ApiResponse({ description: '编辑'})
  async updateAutoReply(@Param("id") id:string, @Request() request , @Query() query: any) {
    console.info(request.headers["referer"], query.f,query, request.ip);
    // if(body.team_id!=request.blacklist.team_id){throw new ForbiddenException(); }
    // let autoreply = await this.userBlacklistSevice.createOrUpdate(  body );
    // return autoreply;
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

  // @Roles('team_autoreply')
  // @Post('edit/:id')
  // @ApiResponse({ description: '编辑'})
  // async updateAutoReply(@Param("id") id:string, @Request() request , @Body() body: any) {
  //   // if(body.team_id!=request.blacklist.team_id){throw new ForbiddenException(); }
  //   let autoreply = await this.userBlacklistSevice.createOrUpdate(  body );
  //   return autoreply;
  // }



}

