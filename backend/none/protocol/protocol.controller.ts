import { Controller, Body, Post, UseGuards, Get, Request, HttpException, HttpStatus, Query, Param, NotFoundException, Put, Delete, Redirect } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/roles';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { ProtocolRepository } from './protocol.repository';
import { ProtocolService } from './protocol.service';
import { ProtocolIndexPayload, ProtocolInfoPayload, ProtocolLogInfoPayload } from './payload';
import { UsersService } from '../user';
import { ConversationEntity, ConversationRepository } from '../conversation';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('/api/protocol')
@ApiTags('抖音账号管理')
export class ProtocolController {
 
  constructor(
    private readonly protocolSevice:ProtocolService,
    private readonly usersService:UsersService,
  ){}

  // @Roles('team_myaccount')
  // @Post('/oauth_link')
  // @ApiResponse({ description: '授权链接'})
  // async getOauthUrl(@Query() query: any , @Body() body: any , @Request() request) {
  //   let scopes = query.scopes || ["user_info","im.direct_message","im.group_message","im.recall_message","tool.image.upload"];//"im.message_card","im.microapp_card","video.list.bind","item.comment",
  //   let RedirectUrl = query.redirect_uri || "https://d.ptlive.cn/account/acprotocol/auth/callback?tenantId="+request.user.team_id+"&ownerId="+request.user.id;
  //   let url = "https://open.protocol.com/platform/oauth/connect/?response_type=code&client_key="+this.protocolSevice.dyapp.client_key+"&scope="+scopes.join(",")+"&redirect_uri="+encodeURIComponent(RedirectUrl);
  //   return url;
  // }

  @Roles('team_myaccount')
  @Get('/category')
  @ApiResponse({ description: '获取分组'})
  async getCategoryList(@Query() query: any , @Body() body: any , @Request() request) {
    return await this.protocolSevice.repository.getCategory(request.user.team_id);
  }

  @Roles('team_protocol')
  @Get('/index')
  @ApiResponse({ description: '获取账号列表'})
  async getProtocol(@Query() query: ProtocolIndexPayload , @Body() body: any , @Request() request) {
    const protocols = await this.protocolSevice.repository.getPageList( request.user.id , query.current , query.size, query.type?[query.type]:null , query.keyword, query.autologin );
    return {list:protocols[0] ,count:protocols[1]  };
  }

  @Roles('team_protocol')
  @Get('/list')
  @ApiResponse({ description: '获取该客服的所有列表'})
  async getProtocolList(@Query() query: ProtocolIndexPayload , @Body() body: any , @Request() request) {
    const protocols = await this.protocolSevice.repository.getListStaff( request.user.id ,undefined,undefined, query.type?[query.type]:null , query.autologin, query.current , query.size,query.keyword  );
    return protocols;
  }
  


  @Roles('team_protocol')
  @Post('create')
  @ApiResponse({ description: '新增账号'})
  async protocolCreate(@Body() body: any, @Request() request) {
    body.team_id = request.user.team_id;
    body.owner_id = request.user.id;
    if(!body.id){body.id = body.uid;}
    if(!body.nickname){body.nickname = body.raw.nickname;}
    // await this.protocolSevice.checkCanCreate(request.user.team_id,body.id);
    let protocol = await this.protocolSevice.repository.createOrUpdate( body   );
    return protocol;
  }

  @Roles('team_protocol')
  @Get('info/:id')
  @ApiResponse({ description: '获取单个账号信息'})
  async getProtocolById(@Param("id") id:string, @Request() request , @Query() query: ProtocolInfoPayload ,  @Body() body: any ) {//@Param('id') id: string,
    let protocol = await this.protocolSevice.repository.findOne({where: {id:id,team_id:request.user.team_id} });
    if(!protocol){ throw new NotFoundException("账号不存在或未授权"); }

    // let extPage = await this.protocolSevice.puppeteerPagesService.repository.findOne(protocol.page_id);
    return protocol;
  }

  @Roles('team_protocol')
  @Put(':id')
  @ApiResponse({ description: '添加或编辑账号'})
  async updateProtocol(@Param("id") id:string, @Request() request , @Body() body: any) {
    let protocol = await this.protocolSevice.repository.createOrUpdate(  body , id||body.id )
    if(protocol.autologin_switch){
      this.protocolSevice.switchBot(protocol);
    }
    return protocol;
  }

  @Roles('team_protocol')
  @Delete(":id")
  @ApiResponse({ description: '删除账号'})
  async delteObj(@Param("id") id:string, @Request() request , @Body() body: any) {
    this.protocolSevice.repository.deleteByIds(  [id] );
    return true;
  }

  // @Roles('team_protocol')
  // @Post('updatedevice')
  // @ApiResponse({ description: '升级账号'})
  // async updateDevice( @Request() request , @Body() body: any) {
  //   let protocol = await this.protocolSevice.updateDevice(  body.id , body.ip )
  //   return protocol;
  // }

  // @Roles('team_protocol')
  // @Put('info/:id')
  // @ApiResponse({ description: '编辑账号资料'})
  // async updateProtocolInfo(@Param("id") id:string, @Request() request , @Body() body: any) {
  //   // id = id||body.id;
  //   // let protocol = await this.protocolSevice.repository.findOneOrFail(id);
  //   // if(!protocol.did){throw new Error("未授权无法修改资料");}

  //   // let allCols = ["nickname","bio_url","signature"];
  //   // let raw:any = {};
  //   // for(let i in allCols){
  //   //   let col = allCols[i];
  //   //   if( body[col] && body[col].length && body[col]!= protocol.raw[col]){
  //   //     raw[col] = body[col];
  //   //     protocol.raw[col] = body[col];
  //   //   }
  //   // }
  //   // //如果有区别
  //   // if(!Object.values(raw).length){ throw new Error("没有变更资料");}

  //   // body.raw = protocol.raw;
  //   // raw.uid = protocol.uid;
  //   // let result = await this.protocolSevice.updateInfoByCloud(raw);
  //   // if([8].indexOf(result.status_code)>-1){ throw new Error("修改失败");}

  //   // protocol = await this.protocolSevice.repository.createOrUpdate(  body ,id )
  //   // return protocol;
  // }


}
