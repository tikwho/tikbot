import * as querystring from 'querystring';
import * as http from 'http';
import moment = require('moment');
import { Injectable, ForbiddenException, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { EngineRepository } from './engine.repository';
// import { ConversationService } from '../conversation';
import { Utils } from 'src/common/utils';
import { WebsocketService } from 'src/websocket/websocket.service';

@Injectable()
export class EngineService {

  constructor( 
    public readonly repository:EngineRepository,

    // @Inject(forwardRef(() => ConversationService))
    // public readonly conversationService:ConversationService,

    @Inject(forwardRef(() => WebsocketService))
    private readonly websocketService: WebsocketService,
    ) {
  
        // // 监听设备WEBSOCK消息 end
        // this.websocketService.addClientMessageListener(async (client: any, data?: any) => {
        //   console.info("message records============= ",data);
        
        //   if (data.type == "send_message_reply" ) {
        
        //     console.info("send_message_reply",data.data);
        
        //   }
        //   else if (data.type == "transfer_task_result") { //带tid任务请求响应
        //     let {tid,data:cdata} =  data.data;
        //     this.TransferTaskResultList[tid](cdata);
        //     this.TransferTaskResultList[tid] = undefined;
        //   }

        // });
        // // 监听设备WEBSOCK消息 end

     }

  /**
   * 带标识id的请求结果
   */
  TransferTaskResultList:any = {};
  async resolveTransferTask(sendTo:string,data?:any,randId?:string){
    return new Promise(async (resolve, reject) => {
      let tid = Utils.md5str(sendTo+JSON.stringify({data})+(randId||""));
      this.TransferTaskResultList[tid]=resolve;

      let clientList = this.websocketService.getTransferClientsList(sendTo)
      this.websocketService.sendMessageToClients(clientList[0],data);

      setTimeout(async function(){
        if(!this.TransferTaskResultList[tid]){return;}
        this.TransferTaskResultList[tid] = undefined;
        reject("未响应");
      },29*1000);
    });
  }

  /**
   * 获取bot列表状态
   * @param token 
   */
  async getStatus( token:string , type:"tiktok"|"whatsapp" ){
    let list = await this.repository.find({where:{owner_id:token,type}});
    for(let i in list){
      let item = list[i];
      (item as any).online = 1;//await this.conversationService.getStatus(item.conversation_id);
    }
    return list;
  }


  /**
   * 发送消息
   * @param bot_id 
   * @param message 
   * @returns 
   */
  async sendMessage(bot_id:string,message:any){
    let bot = await this.repository.findOne({where:{id:bot_id}});
    if(!bot) throw new NotFoundException("bot not found");
    // let conversation = await this.conversationService.getConversation(bot.conversation_id);
    // if(!conversation) throw new NotFoundException("conversation not found");
    // let result = await this.conversationService.sendMessage(conversation.id,message);
    // return result;

    return await Utils.req(bot.raw_data.webhook,{},"POST",{type:"message",bot_id,data:message});
  }


  /**
   * 删除退出登录
   * @param token 
   * @param bot_id 
   * @returns 
   */
  async stopBot(token,bot_id:string){
    await this.repository.delete({id:bot_id,owner_id:token});
    return;
  }









}
