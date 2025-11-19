import { Controller, Body, Post, UseGuards, Get, Request, Headers,HttpException, HttpStatus, Query, Param, NotFoundException, Put, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/roles';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { EngineRepository } from './engine.repository';
import { EngineService } from './engine.service';
import { createPayload, deletePayload, editPayload, messagePayload, EngineIndexPayload } from './engine.payload';
import { XtokenGuard } from 'src/common/guards/xtoken.guard';

@UseGuards(XtokenGuard)
@Controller('/api/engine1/whatsapp')
@ApiTags('挂机bot')
export class EngineController {
 
  constructor(
    private readonly engineSevice:EngineService,
  ){}


  @Post('create')
  @ApiResponse({ description: '创建挂机bot，获取登录二维码'})
  async engineCreate(@Headers('x-token') token: string,@Body() body: createPayload, @Request() request) {
    let engine = await this.engineSevice.repository.save({
      username:body.username,
      proxy_ip:body.proxy_ip,
      type:"whatsapp",
      team_id:request.user.team_id,
      owner_id:request.user.id
    } )
    let result = await this.engineSevice.resolveTransferTask( request.user.id , {type:"login",data:engine });
    return Object.assign(result,{bot:engine});
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
    let engine = await this.engineSevice.getStatus( token,"whatsapp" )
    return engine;
  }

  @Post('send')
  @ApiResponse({ description: '发送消息：{"to":"whatsapp号码","content":"How you doing?","msg_id":"ABCDABCD1234","ext":{"stanza_id":"3EB06F9067F80BAB89FF","participant":"12345@s.whatsapp.net"}} 如果没有提供Id，则将生成一个随机Id。ContextInfo是可选的，在回复某些消息时使用。StanzaId是我们正在回复的消息id和该消息的参与者。如果发送新消息，则可以完全提交ContextInfo。'})
  async engineSend(@Headers('x-token') token: string,@Body() body: messagePayload, @Request() request , @Headers() headers ) {

    // let newmsg = await this.engineSevice.sendMessage(token,{
    //   id:body.msg_id,
    //   context:body.content,
    //   ext:body.ext,
    //   to:body.to
    // });
    let newmsg = await this.engineSevice.sendMessage(body.id,{"id":"true_8615285127275@c.us_3EB033E7A722E0AAF6A721","viewed":false,"body":"hi","type":"chat","subtype":null,"t":1715271918,"from":"8615086002627@c.us","to":"8615285127275@c.us","ack":1,"isNewMsg":true,"star":false,"kicNotified":false,"streamingSidecar":null,"waveform":null,"scanLengths":null,"scansSidecar":null,"isFromTemplate":false,"pollInvalidated":false,"isSentCagPollCreation":false,"latestEditMsgKey":null,"latestEditSenderTimestampMs":null,"mentionedJidList":[],"groupMentions":[],"hydratedButtons":null,"isEventCanceled":false,"eventInvalidated":false,"isVcardOverMmsDocument":false,"isForwarded":false,"labels":[],"hasReaction":false,"disappearingModeInitiator":"chat","disappearingModeTrigger":"chat_settings","productHeaderImageRejected":false,"lastPlaybackProgress":0,"isDynamicReplyButtonsMsg":false,"dynamicReplyButtons":null,"isCarouselCard":false,"parentMsgId":null,"isMdHistoryMsg":false,"stickerSentTs":0,"isAvatar":false,"lastUpdateFromServerTs":0,"invokedBotWid":null,"botResponseTargetId":null,"botPluginType":null,"botPluginReferenceIndex":null,"botPluginSearchProvider":null,"botPluginSearchUrl":null,"botPluginSearchQuery":null,"botPluginMaybeParent":false,"botReelPluginThumbnailCdnUrl":null,"botMsgBodyType":null,"requiresDirectConnection":null,"bizContentPlaceholderType":null,"hostedBizEncStateMismatch":false,"senderOrRecipientAccountTypeHosted":false,"placeholderCreatedWhenAccountIsHosted":false,"chatId":"8615285127275@c.us","fromMe":true,"sender":{"id":"8615086002627@c.us","name":"hexin","shortName":"hexin","type":"in","isBusiness":true,"isEnterprise":false,"isSmb":false,"labels":[],"isContactSyncCompleted":0,"forcedBusinessUpdateFromServer":true,"textStatusLastUpdateTime":-1,"syncToAddressbook":true,"isUser":true,"profilePicThumbObj":{"eurl":"https://pps.whatsapp.net/v/t61.24694-24/415772926_1427381608126983_2187986780707068340_n.jpg?ccb=11-4&oh=01_Q5AaIBiXSfJjocZSYKMX6HOyK8nScPnz0HrJ9Y25XkIgWJop&oe=664A10DD&_nc_sid=e6ed6c&_nc_cat=103","id":"8615086002627@c.us","img":"https://media-iad3-2.cdn.whatsapp.net/v/t61.24694-24/415772926_1427381608126983_2187986780707068340_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaIPwED5JM6i0_TMrXp7J4kOO7556wQV_JvWbu2K_QO3Dm&oe=664A10DD&_nc_sid=e6ed6c&_nc_cat=103","imgFull":"https://media-iad3-2.cdn.whatsapp.net/v/t61.24694-24/415772926_1427381608126983_2187986780707068340_n.jpg?ccb=11-4&oh=01_Q5AaIBiXSfJjocZSYKMX6HOyK8nScPnz0HrJ9Y25XkIgWJop&oe=664A10DD&_nc_sid=e6ed6c&_nc_cat=103","tag":"1705307014"},"msgs":null},"timestamp":1715271918,"content":"hi","chat":{},"mediaData":{},"replyButtons":null,"buttons":null,"isGroupMsg":false,"groupInfo":null});
    return {id:body.msg_id,state:0};
  }

  @Post('delete')
  @ApiResponse({ description: '删除bot退出登录'})
  async delete(@Headers('x-token') token: string,@Body() body: deletePayload, @Request() request , @Headers() headers ) {
    let newmsg = await this.engineSevice.stopBot(token,body.id);
    return "ok";
  }



}


