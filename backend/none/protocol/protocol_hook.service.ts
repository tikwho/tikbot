import * as querystring from 'querystring';
import * as http from 'http';
import moment = require('moment');
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { Utils } from 'src/common/utils';
import { ProtocolEntity } from './protocol.entity';
import { ProtocolService } from './protocol.service';
import { CacheService } from 'src/common/utils_cache';
import { AutoReplyService } from '../autoreply';
import { UserBlacklistService } from './blacklist/user_blacklist.service';

@Injectable()
export class ProtocolHookService {

  constructor( 

    public readonly cacheService:CacheService,
    public readonly autoReplyService:AutoReplyService,
    public readonly userBlacklistService:UserBlacklistService,
  ){ }

  //獲取名單
  async getBlacklist(team_id:string ,isrefresh?:boolean){
    let ctag = "dy_blacklist_"+team_id;
    let nlist = await this.cacheService.get(ctag);
    if(!nlist||isrefresh){
      let list = await this.userBlacklistService.repository.find({where:{team_id,state:1}});
      nlist = {};
      list.forEach(item=>{nlist[item.uid]=item;});
      this.cacheService.set(ctag,nlist,60);
    }
    return nlist;
  }


  async getRules(category:string , team_id:string ){
    let ctag = "ruls_"+team_id+category;
    let list = await this.cacheService.get(ctag);
    if(!list){
      list = await this.autoReplyService.repository.find({where:{team_id,category,state:1}});
      this.cacheService.set(ctag,list,30);
    }
    return list;
  }

  // https://developer.open-protocol.com/docs/resource/zh-CN/dop/develop/openapi/interaction-management/private-message/private-msg-webhook

  async messageAutoReply(message:any , rules:any ) {
    // let rules = await this.cacheAutoReply(owner_id,1);
    // console.info(rules,message.content,"match rules-----------------------");
    let {event , to_user_id , from_user_id , content} = message;
    let matchRule = null;
    let matchReason = "";
    //循环规则
    for(let index in rules){
      if(matchRule){break;}
      let rule = rules[index];
      matchReason = "匹配规则"+rule.title+"\n：";
      //群组消息默认不回复
      let  conversationBizType = event.indexOf("im_group")>-1 ? 2 : 1 ;
      if((!rule.rules.bizTypes&&conversationBizType==2) || (rule.rules.bizTypes&&rule.rules.bizTypes.indexOf(conversationBizType)==-1)){
        continue;
      }

      //只有@的
      if(conversationBizType==2 && !rule.rules.groupalluser ){
        try{
          let ump = content.user_infos.find(u=>{return u.open_id==to_user_id;});
          if(content.text.indexOf("@"+ump.nick_name)==-1){continue;}
        }catch(e){
          continue;
        }
      }

      //如果是自己的文字消息,追加消息
      if( ["im_send_msg","im_group_send_msg"].indexOf(event)>-1 && !rule.rules.isself ){
        continue;
      }

      //循环规则中的匹配类型
      let specifs = "string"==typeof rule.rules.specif ? [rule.rules.specif]:rule.rules.specif;
      for(let i in specifs){
        let specif = specifs[i];

        //任意内容
        if(specif=="any"){
          matchReason +="任意内容";
          matchRule = rule;break;
        }
        //进入消息框
        else if(event=="im_enter_direct_msg" && specif=="im_enter"){
          matchReason +="进入消息页";
          matchRule = rule;break;
        }
        //字符类型消息和自动回复模板
        if(content.message_type=="text" ){

          let text = content.text;
          //如果任意词
          if(specif=="keywordall"){
            matchReason += "任意词";
            matchRule = rule;break;
          }

          //如果是全匹配
          if(specif=="keywordfull" && rule.rules.keywords.indexOf(text)>-1){
            matchReason += text;
            matchRule = rule;break;
          }
          //如果是模糊匹配
          if(specif=="keywordany" ){
            let keyword = rule.rules.keywords.find(keyword=>{
              return text.indexOf(keyword)>-1;
            });
            matchReason += keyword;
            if(keyword){
              matchRule = rule;break;
            }
          }
          //如果是网址
          if(specif=="website" ){
            if(text.indexOf("http")>-1){
              matchReason += "网址";
              matchRule = rule;break;
            }
          }
        }
        // "{"aweType":100140,"active_users":[{"uid":298721941396039,"sec_uid":"MS4wLjABAAAABCGUU2ydIGkgTv3ibfs61yxIYwceVPUqLhWJYdNz6Ag","nickname":"星力量旅游定制"}],"passive_users":[{"uid":111223877420,"sec_uid":"MS4wLjABAAAA-RcWVFQu_OJcu4WQxFHgO5P8wQyIdbuzKaK9oJgNIfA","nickname":"数字人➕本地生活服务"}],"locale_resources":[{"lang":"zh-Hans","text":"{0}邀请了{1}加入群聊，新成员可查看历史消息"}],"group_create_type":"","remove_user_type":null,"template":null}"
        // else if( [1001].indexOf(message.type)>-1){
        //   let _c = JSON.parse(message.content)||{};
        //   if(_c["locale_resources"]&&_c["locale_resources"][0]["text"].indexOf("加入群聊")>-1 && specif=="newjoin"){
        //     matchReason += "邀请新人消息";
        //     matchRule = rule;break;
        //   }
        // }
        else if( content.message_type=="image"){
          if(specif=="image"){
            matchReason += "图片消息";
            matchRule = rule;break;
          }
        }

        else if( content.message_type=="video"){
          if(specif=="video"){
            matchReason += "视频消息";
            matchRule = rule;break;
          }
        }
        // else if( [25].indexOf(message.type)>-1 && specif=="cardaccount"){
        //   matchReason += "个人名片消息";
        //   matchRule = rule;break;
        // }

      }
    }

    if(!matchRule){return null;}

    //该规则单用户触发频率
    let blist = await this.getBlacklist( matchRule.team_id );
    let nolimitinterval = false;
    if(event.indexOf("receive_msg")>-1 && blist[from_user_id]){
      if(!blist[from_user_id].iswhite){ //黑名单用户
        return null;
      }
      else{ //白名单用户
        nolimitinterval = true;
      }
    }
    if( !nolimitinterval && matchRule.rules.limitinterval ){
      let ltag = "rul_limitinterval"+from_user_id+matchRule.id;
      if(await this.cacheService.get(ltag)){
        return null;
      }
      this.cacheService.set(ltag,1,parseInt(matchRule.rules.limitinterval));
    }

    matchRule.matchReason = matchReason;
    return matchRule;
  }



  // async messageCheckUser(message:any , team_id:string) {
  //       let {event , to_user_id , from_user_id , content} = message;
    
  //       //字符类型消息和自动回复模板
  //       if(content.message_type=="text" ){

  //         let text = content.text;
  //         let ww = "阳光乐园";
  //         let bw = "ni稍等";
  //         //如果白名单
  //         if(text.indexOf(ww)==0){
  //           let user =  content.user_infos.find(item=>{return item.open_id==from_user_id;});
  //           await this.userBlacklistService.repository.createOrUpdate({uid:from_user_id,state:1,name:user.nick_name,avatar:user.avatar,remark:text.replace(ww,""),iswhite:1,team_id:team_id});
  //           await this.getBlacklist(team_id,true);
  //           return "设置白名单完成";
  //         }
  //         else if(text.indexOf(bw)==0){
  //           let user =  content.user_infos.find(item=>{return item.open_id==from_user_id;});
  //           await this.userBlacklistService.repository.createOrUpdate({uid:from_user_id,state:1,name:user.nick_name,avatar:user.avatar,remark:text.replace(ww,""),iswhite:0,team_id:team_id});
  //           await this.getBlacklist(team_id,true);
  //         }
  //       }
  //       return null;
  // }












}
