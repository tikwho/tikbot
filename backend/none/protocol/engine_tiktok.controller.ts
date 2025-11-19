import { Controller, Body, Post, UseGuards, Get, Request, Headers,HttpException, HttpStatus, Query, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

import { EngineRepository } from './engine.repository';
import { EngineService } from './engine.service';
import { createPayload, deletePayload, editPayload, messagePayload, EngineIndexPayload } from './engine.payload';
import { XtokenGuard } from 'src/common/guards/xtoken.guard';

@UseGuards(XtokenGuard)
@Controller('/api/engine1/tiktok')
@ApiTags('挂机bot_tiktok')
export class EngineTiktokController {
 
  constructor(
    private readonly engineSevice:EngineService,
  ){}

  @Post('create')
  @ApiResponse({ description: '创建挂机bot，获取登录二维码'})
  async engineCreate(@Headers('x-token') token: string,@Body() body: createPayload, @Request() request) {
    let engine = await this.engineSevice.repository.save({
      username:body.username,
      proxy_ip:body.proxy_ip,
      type:"tiktok",
      team_id:request.user.team_id,
      owner_id:request.user.id
    } )
    
  }

  @Post('update')
  @ApiResponse({ description: '修改bot参数:raw_data:{webhook:"https://example.net/webhook",scopes:["message","account_status],notice_url:"企微群机器人地址"}'})
  async engineEdit(@Headers('x-token') token: string,@Body() body: editPayload, @Request() request) {
    let engine = await this.engineSevice.repository.createOrUpdate(body)
    return engine;
  }

  @Get('status')
  @ApiResponse({ description: '获取挂机bot状态'})
  async engineStatus(@Headers('x-token') token: string,@Body() body: any, @Request() request , @Headers() headers ) {
    // body.team_id = request.user.team_id;
    // body.owner_id = request.user.id;
    let engine = await this.engineSevice.getStatus( token,"tiktok" )
    return engine;
  }

  @Post('send')
  @ApiResponse({ description: '发送消息：{"to":"tiktok uid","content":"How you doing?","msg_id":"ABCDABCD1234","ext":{ext其它参数}} 针对图片content可传对象'})
  async engineSend(@Headers('x-token') token: string,@Body() body: messagePayload, @Request() request , @Headers() headers ) {

    // let newmsg = await this.engineSevice.sendMessage(token,{
    //   id:body.msg_id,
    //   context:body.content,
    //   ext:body.ext,
    //   to:body.to
    // });
    let newmsg = await this.engineSevice.sendMessage(body.id,{"source":3,"serverId":"7356234247784367617","type":7,"ext":{"im_callback_status_code":"0","s:mode":"0","s:client_message_id":"06976192-7a20-48e4-8782-81dd480f8b58","source_aid":"1180"},"conversationId":"0:1:6940517328601924613:7028939348067795974","content":"{\"type\":0,\"mention_users\":[],\"aweType\":700,\"richTextInfos\":[],\"text\":\"hi\"}","sender":"6940517328601924613","createdAt":"2024-04-10T13:45:55.487Z","serverStatus":0,"conversationShortId":"7310120299335631121","conversationBizType":1,"version":{"low":0,"high":0,"unsigned":false},"secSender":"MS4wLjABAAAABuzW9Er_W7H3liQYmuYgquwG_YLvvFeVOtY2Be_e1p6HlBn09M-tKn18F01znsWs","isOffline":false,"scene":"","contentPb":{}});
    return {id:body.msg_id,state:0};
  }
  
  @Post('delete')
  @ApiResponse({ description: '删除bot退出登录'})
  async delete(@Headers('x-token') token: string,@Body() body: deletePayload, @Request() request , @Headers() headers ) {
    let newmsg = await this.engineSevice.stopBot(request.user.id,body.id);
    return "ok";
  }


}

