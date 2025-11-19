import { Controller, Body, Post, UseGuards, Get, Request, HttpException, HttpStatus, Query, Param, NotFoundException, Put, Delete, Redirect, All } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/roles';
import { RolesGuard } from 'src/common/guards/roles.guard';

import { ProtocolRepository } from './protocol.repository';
import { ProtocolService } from './protocol.service';
import { ProtocolIndexPayload, ProtocolInfoPayload, ProtocolLogInfoPayload } from './payload';
import { UsersService } from '../user';
import { ConversationEntity, ConversationRepository } from '../conversation';

// @UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('/api/protocol')
@ApiTags('抖音账号管理公共接口')
export class ProtocolPController {
 
  constructor(
    private readonly protocolSevice:ProtocolService,
    private readonly protocolRepository:ProtocolRepository,
    private readonly usersService:UsersService,
  ){}

  @Roles('team_myaccount')
  @Get('test')
  @ApiResponse({ description: '授权链接'})
  async getTest(@Query() query: any , @Body() body: any , @Request() request) {
//     let result = await this.protocolSevice.test();//.getAt(query.code,query.tenantId,query.ownerId);
//     return result;
//   }

//  @Roles('team_myaccount')
//   @Get('initBot')
//   @ApiResponse({ description: '授权链接'})
//   async getInit(@Query() query: any , @Body() body: any , @Request() request) {

    let result = await this.protocolSevice.initBot();//.getAt(query.code,query.tenantId,query.ownerId);
    return result;
  }

//   @Roles('team_myaccount')
//   @Get('account/acprotocol/auth/callback')
//   @ApiResponse({ description: '授权链接'})
//   async getOauthCall(@Query() query: any , @Body() body: any , @Request() request) {
//     let result = await this.protocolSevice.getAt(query.code,query.tenantId,query.ownerId);
//     console.info(query,body,"授权回调---------------");
//     return result.nickname+"授权完成,现在可以关闭该窗口了";
//   }
  
//   @Roles('team_myaccount')
//   @All('/protocol/protal/webhook')
//   @ApiResponse({ description: '消息回调'})
//   async getHook(@Query() query: any , @Body() body: any , @Request() request) {
//     if("string"==typeof body.content){body.content = JSON.parse(body.content);}
//     console.info(query,body,JSON.stringify(body),"消息回调---------------");
//     let entity = await this.protocolSevice.getById(body.event.indexOf("send")>-1?body.from_user_id:body.to_user_id);
//     if(!entity){return;}
//     //记录消息
//     console.info(entity);
//     try {
//       this.protocolSevice.protocolUserService.addRecord(body,entity.team_id);
//     } catch (error) {
//       console.error(error,this.protocolSevice);
//     }
//     if(!entity.auto_state){return;}
//     // console.info(entity,"entity---------------");
//     let checkRes = await this.protocolSevice.protocolHookService.messageCheckUser(body,entity.team_id);
//     if(checkRes!==null){
//       if(checkRes){
//         await this.protocolSevice.replyMsg(entity,body,{ 
//           "msg_type": 1,
//           "text": {
//               "text": checkRes
//           }
//       });
//       }
//       return;
//     }
//     let rules = await this.protocolSevice.protocolHookService.getRules(entity.category,entity.team_id);
//     let rule = await this.protocolSevice.protocolHookService.messageAutoReply(body,rules);
//     if(!rule){return;}
//     try {
//       if(rule.hand_rules.replyWords){
//         let replylist = rule.hand_rules.replyWords.split("{换行}");
//         let result = null;
//         for(let i in replylist){
//           let reply = replylist[i].replace(/^(\n|\s)/,"");
//           result = await this.protocolSevice.replyMsg(entity,body,{ 
//               "msg_type": 1,
//               "text": {
//                   "text": reply
//               }
//           });
//           console.info(result,"回复消息------------------");
//         }
//       }

//       if(rule.hand_rules.reply_images){
//         let replylist = rule.hand_rules.reply_images;
//         let result = null;
//         for(let i in replylist){
//           let reply = replylist[i];
//           let media = await this.protocolSevice.updateFile( reply.url );
//           result = await this.protocolSevice.replyMsg(entity,body,{ 
//               "msg_type": 2,
//               "image": {
//                   "media_id": media.image_id
//               }
//           });
//           console.info(result,media,"回复图片消息------------------");
//         }
//       }
//       return "success";
//     } catch (error) {
//       console.error(error);
//     }
    
//   }
  

}
