import * as querystring from 'querystring';
import * as http from 'http';
import moment = require('moment');
import { Injectable, ForbiddenException } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { ProtocolUserRepository } from './protocol_user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProtocolUserEntity } from './protocol_user.entity';
import { Utils } from 'src/common/utils';

@Injectable()
export class ProtocolUserService {

  constructor( 
    private readonly logger: LoggerService ,
    public readonly repository:ProtocolUserRepository,
  ){ }
    
    /**
     * 消息记录
     * @param message 
     * @param team_id 
     * @returns 
     */
    async addRecord(message:any,team_id?:string,formInfo?:any){
      let {event,from_user_id,to_user_id,content} = message;
      let userinfo = message.sender_info;
      console.info("----------------addRecord",message);
      
      console.info(userinfo.avatar);
      let fam = userinfo.avatar.match(/_(\w+)\./);
      let data = {
        team_id:team_id,
        id:team_id+userinfo.uid,
        name:userinfo.nickname,
        avatar:userinfo.avatar,
        avatar_uri:fam?fam[1]:null,
        dy_open_id:userinfo.uid,
        //传到raw中
        event:{fid:formInfo.id, fname:formInfo.nickname, fr:message.text||""},
      }
      console.info(data);
      return await this.repository.createOrUpdate(data);
    }


}
