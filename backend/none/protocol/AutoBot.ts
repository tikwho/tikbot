import { truncate } from 'fs';
import moment = require('moment');
import { userInfo } from 'os';
import { v4 as uuidv4 } from 'uuid';
import { Utils } from './botclient/utils';
import BotClient from './botclient';
// import { ProtocolService } from './protocol.service';
// const xe = require('./botclient/DyApi.js');
import { ApiClient } from "./apiclient";
import { SqlRepository } from './sqlrepository';
import { In } from 'typeorm';
import { LiveClient } from './liveclient/liveclient';
import { urlencoded } from 'express';
// import { LiveClient } from './liveclient/liveclient';


interface UserInfo {
    uid: string;
    sec_uid: string;
    nickname: string;
    avatar?: string;
    signature: string;
    age?: number;
    awemes?: number;
    following?: number;
    follower?: number;
    unique_id: string;
    commerce?: boolean;
    location?: string;
    special?: string;
    enterprise?: string;
    celebrity?: string;
    region?:  string;
    following_visibility?:number;//1是直接发送消息
    follow_status?:number;//0是未关注 2是好友
    language?:string;
}

interface Message {
    conversation_short_id_async?: any;
    sec_sender?: string;
    sender?: string;
    type: number;
    content?: any;
    raw?: any;
    text?:string,
    conversation_type?: number;
    conversation_short_id: string;
    sender_info?: UserInfo;
    uuid?: string;
    result?: any[];
    polymerics?: string;
    message_id?:string;
    client_id?:string;
}

//通知消息的封装
export class NoticeMessage implements Message {
    private conversation_short_id_cache;
    constructor(private notice:any,private autoBot: AutoBot ) {

    }
    public get text(){
        let {comment , follow } = this.notice;
        if(comment){
            return comment.comment.text;
        }
        else if(follow){
            return this.sender_info.unique_id+" follow you";
        }
    }
    //原始内容
    public get raw(){
        return this.notice;
    }

    public get type(){
        return this.notice.type; //31comment
    }

    public get sender_info(){
        return this.notice?.follow?.from_user || this.notice?.comment?.comment?.user;
    }
  
    public get conversation_short_id() {
      if(this.conversation_short_id_cache)return this.conversation_short_id_cache;
    }

    
    public async conversation_short_id_async() {
        if(!this.conversation_short_id_cache){
            this.conversation_short_id_cache = (await this.autoBot.getConversation(this.sender_info.uid))?.conversation_short_id;
        }
        return this.conversation_short_id_cache;
      }
}


// Define other necessary interfaces...

export default class AutoBot {
    client: BotClient;
    frequencys: Record<string, any>;
    polymerics: Record<string, any>;
    messages:any=[];
    running: boolean;
    // protocolSevice:ProtocolService;
    qwbot_url:string;

    public accountEntity:any;
    public parent:{
        getRules:any,
        getState:any,
        eventHook:any,
        getRequestApi:any,
    };//可修改的自动回复规则
    public apiClient:ApiClient;//请求接口
    public sqlRepository:SqlRepository;//sqlite数据查询
    public proxy_url:string;
    public cookie:string;
    room_id: string;
    

    constructor(accountEntity:any,qwurl?:string,proxy_url?:string,parent?:any){
        const _this = this;

        this.frequencys = {};
        this.polymerics = {};
        
        // this.proxy_url = process.env.pm_id ? "http://base-v2raya1:20171" : proxy_url;
        this.proxy_url = proxy_url;

        this.parent = parent;
        this.accountEntity = accountEntity;
        this.setAccountEntity(accountEntity);
        // this.protocolSevice = protocolSevice;
        this.qwbot_url = qwurl;
        // this.getUserInfo();

        console.info(this.accountEntity,this.accountEntity.cookies_str)
        this.apiClient = new ApiClient(this);
        // console.info(this.client,"初始化完成");

        this.sqlRepository = new SqlRepository();
        //sqlite数据查询
        console.info(process.env.NODE_ENV,"process.env.NODE_ENV");


        if(0||process.env.NODE_ENV == "production"){
            setInterval(function(){ _this.syncNoticeList(); },30*1000);
            this.syncNoticeList();
        }

        // 
        // for(let a of ["abc_jewelry_party"]){
        //     console.info(a,"http://127.0.0.1:10809",this.accountEntity.cookies_str);
        //     let liveClient = new LiveClient(this,a,"http://127.0.0.1:7890",this.accountEntity.cookies_str);
        // }
        // setTimeout(async() => {
        //     // let liveClient = new LiveClient("linchitphyo88","http://127.0.0.1:10809",'tiktok_webapp_theme=light; d_ticket=0d885d5c752af68c8456c5a22408f25aeb519; uid_tt=76a5f625a0c5505bf242e550a6e496955039894bbed567cd2ae77ab1b972674d; uid_tt_ss=76a5f625a0c5505bf242e550a6e496955039894bbed567cd2ae77ab1b972674d; sid_tt=2472c515b59287998906bfc5bb089f7a; sessionid=2472c515b59287998906bfc5bb089f7a; sessionid_ss=2472c515b59287998906bfc5bb089f7a; store-country-code-src=uid; tt-target-idc=alisg; tt-target-idc-sign=fs9TdLSwEHKRaSIRZoWiSBCCLxH8oECye9E9NUriTpcak7JPor1FuE5dBOAXCwj8NKwSIcbV_eMNjCiBgc9_Qwvo3urrcoT-F1nTqMOIlsF0seo4elNhIuF77gDfZdVg0npldHQ86jZqeYJK2s3BvjAhwBZ7xYu_BW_oFp-ZWg1rPXMdPJl9hfBM4r-6Wvqwq4eG40qXOzhj3ZlOPUlWr_wDqgoTAswwUzs2FPYgQcI9pMvOZhyRJXUe_SWPegAo-NRNVKCYju3Vuu5Q1G2jFx0eqYfzX-0_fdFzxtUH-cR5givk3nMx40V2P2Ezwg8SLfuPmrAWS5xbuV20qyvcMQ_0VUGqX4QkBBgWFUb51RtTsuSlgoAn7-qmqqZAw9bao6wtloiFtSdVLs9R5AKQXPgW1g7p7vuRF4WmjNtX2cnne6EKs-weQqWOef4AX7PZH-7XaTi4GPzFXQR3u4JD-5VCgOT_2si87s4VCvMZi8JJNPgvkYu-zGDmjg1Kga6B; tt_chain_token=5epz12CJ9yZMMIdTnMeDEA==; _ttp=2R45wx2Eva9z9Y7NRYNpdN7tkas; living_user_id=612062423366; sid_guard=2472c515b59287998906bfc5bb089f7a%7C1699768115%7C15552000%7CFri%2C+10-May-2024+05%3A48%3A35+GMT; sid_ucp_v1=1.0.0-KDA5ZDVmMWIwMjQyNGE4Y2VjYzBlZjU1MmQ4YjA4ZmY1NTllYjM2NDcKIAiGiIb6-v-qt2AQs87BqgYYswsgDDD62bqDBjgCQPEHEAMaAm15IiAyNDcyYzUxNWI1OTI4Nzk5ODkwNmJmYzViYjA4OWY3YQ; ssid_ucp_v1=1.0.0-KDA5ZDVmMWIwMjQyNGE4Y2VjYzBlZjU1MmQ4YjA4ZmY1NTllYjM2NDcKIAiGiIb6-v-qt2AQs87BqgYYswsgDDD62bqDBjgCQPEHEAMaAm15IiAyNDcyYzUxNWI1OTI4Nzk5ODkwNmJmYzViYjA4OWY3YQ; store-idc=alisg; store-country-code=cn; i18next=en; __tea_cache_tokens_1988={%22web_id%22:%227315052361952445954%22%2C%22user_unique_id%22:%227241163383020848646%22%2C%22timestamp%22:1703168367010%2C%22_type_%22:%22default%22}; tt_csrf_token=CCKKotpR-UacVxzndTlFKZ8Yfk7p4hg_gbsY; perf_feed_cache={%22expireTimestamp%22:1703473200000%2C%22itemIds%22:[%227301333251304475906%22%2C%227309283725563448618%22%2C%227287627955805687072%22]}; csrfToken=Q3j8PR34-CfOy5PJ_a1i_T_poRhlLEz8dK5U; passport_fe_beating_status=false; odin_tt=ade6122be840e32ab1d8efef73eb4a7fdfc2db1e5794d22dd94db2d2b7aa6587572eca0c05d93c2b51833fd01776e31e34e7b833473b3bef2c0b459bf13094871e96c7563b147dc106b4894762da86a6; msToken=boMCHg2JvHgZCiWehFmI1C0XlySGS2ZfkWwO9h6XF-Of_z5HSs41GfDS2CeqdB6qj6qutZ9o5-PlCdIGA38ro-hqbC24MNo2Xofvp0mpeM27UuA6l5FvO1bXMVifh3TOg2ssy1GdMpMZ3blK; msToken=s5kkjCcxorIRYRDmaHqmaFDSx83Tq_pcu-r6UGpJ2oq88p6kUld1mCAeb27iAfw95ByKgFqzBWICyVxOS4cwPonpPpqQMoaeDHxW3ah9FD-ojhUGt6Br; ttwid=1%7CE3xpa0wcyad67e_xQHqvSIk-nfZU5WHM0U4ml_eS5OE%7C1703346349%7Cc9799f9c162740c87c6e281750e157bf2e145485f5658b4888d9b6a65e319fa1');
        //     let liveClient = new LiveClient("ferrone0302","http://127.0.0.1:10809",this.accountEntity.cookies_str);
        //     // // liveClient.sendMessage("hi~"); 
        //     // console.info(await this.apiClient.apilive.enterRoom({room_id:"7315440174710688520"}));
        //     // let res = await this.apiClient.apilive.sendChat({
        //     //     "room_id":"7315440174710688520",
        //     //     "content":"hi~",
        //     //     "emotes_with_index":""
        //     // });
        //     // console.info(res,"res-------------------live");
        // }, 5*1000);

        // setTimeout(async() => {
        //     let res = await this.apiClient.apivideo.getGeneralSugList({keyword:"hot"});
        //     console.info(res,"res-------------------live");
        // }, 5*1000);
        
    }

    //封装事件回调
    async eventHook(data){
        this.parent.eventHook(data,this);
    }

    async setAccountEntity(accountEntity){
        this.accountEntity = accountEntity;
        this.cookie  = this.accountEntity.cookies_str;
        if(this.accountEntity.proxy_ip&&this.accountEntity.proxy_ip.length){
            this.proxy_url = process.env.pm_id ? "http://base-v2raya1:20171" : this.accountEntity.proxy_ip;
        }
        // this.apiClient.state.proxy_url = this.accountEntity.proxy_url;
    }

    // async test(){
    //     const u = await this.apiClient.user.getCreatorUserInfo();
    //     console.info(u,"u-------------------------------------------");
    // }

    //发送直播聊天
    async sendLiveChat(data:any){
                // console.info();
        let { room_id } = data;
        if(this.room_id != room_id ){
            await this.apiClient.apilive.enterRoom({room_id:room_id})
        }
        let res = await this.apiClient.apilive.sendChat(data||{
            "room_id":"7315440174710688520",
            "content":"hi~",
            "emotes_with_index":""
        });
        console.info(res,"res-------------------live");
        return res;
    }
    //评论//////////////////////////////////////////////////////////////////////////////////////////    
    async syncNoticeList(){
        let noticeRules = await this.parent.getRules(this.accountEntity,[2,3]); //获取规则，有规则才获取通知
        // let { notice_lists } = await this.apiClient.apinotice.getNoticeList(["follower","comment"], `${(Date.now()-60*10)}000` );

        (async()=>{
                let rules2 = noticeRules.filter(item=>{return [2].indexOf(item.type)>-1;});
                console.info(noticeRules,rules2);
                if(rules2&&rules2.length){
                    let { notice_lists } = await this.apiClient.apinotice.getNoticeList(["comment"], `${(Date.now()/1000-60*60*12)}000` );
                    console.info("同步通知列表",JSON.stringify( notice_lists ));
                    if(!notice_lists||!notice_lists.length||!notice_lists[0]?.notice_list?.length){return;}
                    let notice_list = notice_lists[0]?.notice_list||[];
                    let handledList = await this.sqlRepository.sqliteAutoreplyRecordRepository.find({where:{id:In(notice_list.map(item=>item.nid_str))}});
                    for (let notice of notice_list) {
                        if(((Date.now()/1000 - notice.create_time))>60*60*12){console.info(notice,"超过12小时忽略");continue;}
                        let notice_message = new NoticeMessage(notice,this);
                        if( handledList.find(item=>item.id==notice.nid_str) ){console.info(notice,"已处理过忽略");continue;}
                        let rule = await this.noticeAutoReply(notice,rules2);
                        let replayres = [];
                        try {
                            replayres = await this.reply(notice_message,rule);
                        } catch (error) {}

                        let user = notice_message.sender_info;
                        this.sqlRepository.sqliteAutoreplyRecordRepository.createOrUpdate({
                            id:notice.nid_str,
                            type:2,
                            username:user.nickname,
                            user_id: user.sec_uid,
                            from_id: this.accountEntity.id,
                            content: notice_message.text,
                            content_hand: replayres?.map(item=>item.text).join("|"),
                            match_reason: rule?.matchReason,
                            content_raw: notice,
                            // handle_raw: string;
                            team_id: this.accountEntity.team_id,
                            owner_id: this.accountEntity.owner_id,
                        });
                    }
                }else{
                    console.info("无评论规则");
                }

        })();
       
        (async()=>{
            let rules3 = noticeRules.filter(item=>{return [3].indexOf(item.type)>-1;});
            if(rules3&&rules3.length){
                let { notice_lists } = await this.apiClient.apinotice.getNoticeList(["follower"], `${(Date.now()/1000-60*60*12)}000` );
                console.info("同步关注列表",JSON.stringify( notice_lists ));
                if(!notice_lists||!notice_lists.length||!notice_lists[0].notice_list.length){return;}
                let notice_list = notice_lists[0]?.notice_list||[];
                let handledList = await this.sqlRepository.sqliteAutoreplyRecordRepository.find({where:{id:In(notice_list.map(item=>item.nid_str))}});
                console.info(handledList,"已处理============");
                for (let notice of notice_list) {
                    if(((Date.now()/1000 - notice.create_time))>60*60*12){console.info(notice,"超过12小时忽略");continue;}
                    let notice_message = new NoticeMessage(notice,this);
                    if( handledList.find(item=>item.id==notice.nid_str) ){console.info(notice,"已处理过忽略");continue;}
                    let rule = await this.noticeAutoReply(notice,rules3);
                    let replayres = [];
                    try {
                        replayres = await this.reply(notice_message,rule);
                    } catch (error) {}
                    console.info(replayres,"replayres------------------");

                    let user = notice_message.sender_info;
                    this.sqlRepository.sqliteAutoreplyRecordRepository.createOrUpdate({
                        id:notice.nid_str,
                        type:3,
                        // username:user.unique_id,
                        // user_id: user.uid,
                        username:user.nickname,
                        user_id: user.sec_uid,
                        from_id: this.accountEntity.id,
                        content: notice_message.text,
                        content_hand: replayres?.map(item=>item.text).join("|"),
                        match_reason: rule?.matchReason,
                        content_raw: notice,
                        // handle_raw: string;
                        team_id: this.accountEntity.team_id,
                        owner_id: this.accountEntity.owner_id,
                    });
                }
            }else{
                console.info("无关注规则");
            }
        })();
    }

    async noticeAutoReply(notice:any,rules:any) {
        // console.error(rules,"1----------------------------");
        let matchRule = null;
        let matchReason = "";
        //循环规则
        for(let index in rules){
          if(matchRule){break;}
          let rule = rules[index];
          matchReason = "匹配规则"+rule.title+"\n：";
          //循环规则中的匹配类型
          let specifs = "string"==typeof rule.rules.specif ? [rule.rules.specif]:rule.rules.specif;
          for(let i in specifs){
            let specif = specifs[i];
             let { comment , follow} = notice;
             if(rule.expsec && notice.create_time && ((Date.now()/1000 - notice.create_time))>rule.expsec){
                    console.info(notice,"超过有效秒");break;
             }
            //  console.error("2----------------------------");
             if(comment){
                
                //任意内容
                if(specif=="any"){
                    matchReason +="任意内容";
                    matchRule = rule;break;
                }
                let text = comment.comment.text;
                 //任意文字消息
                 if(specif=="keywordall" ){
                    matchReason += text;
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
                // //如果是网址
                // if(specif=="website" ){
                //     if(text.indexOf("http")>-1){
                //     matchReason += "网址";
                //     matchRule = rule;break;
                //     }
                // }
             }
             else if(follow){
                let {unique_id,sec_uid,uid} = follow.from_user;
                if(specif=="any"){
                    matchReason +="任何人关注";
                    matchRule = rule;break;
                }else{
                    if(specif=="lang" && rule.rules.langs.length){
                        let user = await this.getUserInfo(uid);
                        if(rule.rules.langs.toLowerCase().replace(/(\s|#|;)/g,"|").split("|").indexOf(user.language)>-1){
                            matchReason += "lang:"+user.language;
                            matchRule = rule;break;
                        }
                    }
                    if(specif=="region" && rule.rules.regions.length){
                        let user = await this.getUserInfo(uid);
                        if(rule.rules.regions.toUpperCase().replace(/(\s|#|;)/g,"|").split("|").indexOf(user.region)>-1){
                            matchReason += "lang:"+user.region;
                            matchRule = rule;break;
                        }
                    }
                }
             }
    
          }
        }
        if(!matchRule){return null;}
        (matchRule as any).matchReason = matchReason;
        console.info(matchRule,"matchRule-----------------------");
        return matchRule;
      }

      //评论end//////////////////////////////////////////////////////////////////////////////////////////


    /**
     * 发送消息
     */
    async sendMessage(uid:string,message_list,ignore_nfollower?:boolean){
        message_list =  message_list  instanceof Array ?message_list:[message_list];
        let {conversation_short_id} = await this.getConversation(uid);
        let resList = [];
        for(let message of message_list){
            if(ignore_nfollower){
                let user = await this.getUserInfo(uid);
                if(user.following_visibility==2){
                    console.info("该用户需互关，不发送消息~");
                    resList.push({code:401,errormsg:uid+"用户需互关"});
                    continue;
                }
            }
            let res = "string"==typeof message? (await this.client.SendTextMessage(conversation_short_id,message)): (await this.client.SendRawMessage(conversation_short_id,message));
            console.info(res,"发送消息结果~");
            resList.push(res);
        }
        return message_list.length==1?resList[0]:resList;
    }
    
      
    //会话相关//////////////////////////////////////////////////////////////////////////////////////////
    async getConversation(uid:string) {
        let entity = await this.sqlRepository.sqliteConversationRepository.findOne({where:{ participant_id:uid, from_id:this.accountEntity.id },order:{updated_at:"DESC"}});//
        console.info(entity,"entity----------------------c");
        // return;
        let conversation;
        if( entity ){
            let { code , data } = (await this.client.GetConversationInfo(entity.shortid));
            console.info(code,data,entity.shortid);
            if(code==0){
                conversation = Utils.decycle(data);
            }
        }

        if( !conversation ){
            let { code , data } = (await this.client.CreateConversation(uid,1,this.accountEntity.uid));
            if(code==0){
                conversation = await this.saveConversations(data);
                conversation = data;
            }
        }
        return conversation ? Utils.decycle(conversation) : {};
      }

    //统一保存会话数据
    async saveConversations(t,obj?:any){
            let participant = t.first_page_participants.participants.find(item=>item.user_id_str!=this.accountEntity.id);
            if(!participant||!participant.user_id_str){console.info(t.first_page_participants.participants,"t.first_page_participants.participants--");return;}
            let sender_id = participant.user_id_str;
            let sender_info:any = {};
            try {
                sender_info = await this.getUserInfo(sender_id)
            } catch (error) {}

            let conversation = await this.sqlRepository.sqliteConversationRepository.createOrUpdate(Object.assign({
                id:t.conversation_id,
                shortid:t.conversation_short_id_str,
                avatar:sender_info.avatar,
                chatname:sender_info.nickname ||sender_info.unique_id || sender_info.uid,
                lang:sender_info.language?sender_info.language.substring(0,2):undefined,
                // remark: sender_info.unique_id,
                // ext:t.ext,
                // unread:0,
                from_id:this.accountEntity.id,
                participant_id:sender_id,
                team_id:this.accountEntity.team_id,
                owner_id:this.accountEntity.owner_id,
            },obj||{}),undefined,["lang"]);
            // console.info(entity,"save message -1111111111111113");

            return conversation;
    }
    async syncConversationList(){

        try { //使用初始化
            const res = await this.client.GetMessagesByUserInitV2({cursor:0});//,limit:50
            // let res = this.apiClient.helper.decycle(messageList);
            console.info("同步v2消息列表",JSON.stringify( res ));
            for(let t of res.data.messages){
                t = this.messageFormate(t);
                let entity = await this.sqlRepository.sqliteMessageRepository.createOrUpdate({
                    id:t.server_message_id_str,
                    conversation_id:t.conversation_id,
                    type:t.type,
                    content:t.text,
                    content_raw:t.content,
                    ext:t.ext,
                    sender_id:t.sender_str,
                    from_id:this.accountEntity.id,
                    // updated_at:new Date(),
                    team_id:this.accountEntity.team_id,
                    owner_id:this.accountEntity.owner_id,
                });
            }
            for(let t of res.data.conversations){
                await this.saveConversations(t);
            }
            if(!res.data.conversations.length){throw new Error("未同步重试");}
            
        } catch (error) { // 报错时只同步最近会话列表
            let {data} = await this.client.GetConversationList();
            console.info("同步会话列表",JSON.stringify( data ));
            for(let t of data?.conversation_list){
                await this.saveConversations(t);
            }
            // this.eventHook({type:"conversation-event",data:{type:"update_conversation",data:conversation}});
        }
        this.eventHook({type:"conversation-event",data:{type:"update_conversation_info",data:[]}}); 
    }

    //会话相关end//////////////////////////////////////////////////////////////////////////////////////////

    // 发送企微通知
    // https://developer.work.weixin.qq.com/document/path/91770#%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B%E5%8F%8A%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F
    async qwbotSend(str:string,notice_url?:string){
        console.info("发送企微消息", str);
        if (!notice_url) {
            notice_url = this.qwbot_url;
        }
		if(!notice_url){return;}
		if(str.length){
		  if(notice_url.indexOf("open.feishu.cn")>-1){
			let u = {
				  msg_type: 'text',
				  content: {
					  text: str+" \nform:"+"aibot"
				  }
			  };
			return await fetch(notice_url, {"headers": {'Content-Type': 'application/json'}, "body": JSON.stringify(u),"method": "POST"});
		  }else{
			let u = {
			  msgtype: "markdown",
			  markdown: {
				content: str+" \nform:"+"aibot"
			  }
			};
			// return await Utils.req(notice_url, {} ,"POST", u)
			return await fetch(notice_url, {"headers": {}, "body": JSON.stringify(u),"method": "POST"});	
		  }

		}
    }

    async start(): Promise<void> {
        if (this.client) {
            this.client.stop();
        }
        this.debug("正在启动机器人...");
        this.client = new BotClient(this);
        console.info(this.client,"start調用");
        const n = await this.client.start();
        if (n.code === 0) {
            this.log("机器人启动成功");
            this.running = true;
            this.syncConversationList();
        }
        else {
            this.log(`机器人启动失败：${n.msg}`,undefined,true);
            this.stop();
            // this.client = undefined;
            this.running = false;
            return;
        }
        this.client.on("downtime", () => {
            this.log("机器人下线",undefined,true);
            this.running = false;
            // this.stop();
            // this.client = undefined;
        });
        this.client.on("message", this.message.bind(this));
        this.client.on("cmd_more", this.cmd_more.bind(this));

        // const _this = this;
        // setInterval(function(){
        //     _this.dyApiNew
        // },1000);
    }

    /**
     * 返回用户信息
     * @returns 
     */
    async getUserInfo(uid:string,isselfSend?:boolean):Promise<UserInfo>{
        // let cache = await this.protocolSevice.cacheService.get("test_");
        // console.info(cache);
        // let n1=cache.n,t=cache.t;
        try {
            // console.info(t.sender_str);
            //查询protocolUserService 获得用户原始信息，created_at在一天内的有效
            let user = await this.sqlRepository.sqliteAccountRawRepository.getRawById(uid);//{where:{id:t.sender.toString() }}
            // console.info(user,t.sender_str); 
            // return;
            if(0 && !user ){
                try {
                    let {result} = await this.parent.getRequestApi("getAccountRawObj")(uid);
                    console.info(result,"result----------");
                    user = await this.sqlRepository.sqliteAccountRawRepository.createOrUpdate(result);
                } catch (error) {}
            }

            if( !isselfSend && (!user || moment(new Date()).diff( user.updated_at , 'hours') >24*30)){
                let {userInfo} = await this.apiClient.user.info(uid);//t.sec_sender, 
                let n = Utils.ObjCamelToSnake(userInfo);//t.sec_sender, 
                user = await this.sqlRepository.sqliteAccountRawRepository.createOrUpdate(Object.assign({},n,{
                    id:n.uid||n.id,
                    raw:n
                }));

                // this.eventHook({type:"accountraw_new",data:user});
            }
            
            // this.eventHook({type:"accountraw_new",data:user});
            let n = user.raw as any;
            const r: UserInfo = {
                uid: n.uid||n.id,
                sec_uid: n.sec_uid,
                nickname: n.nickname,
                avatar: n.avatar_medium?.url_list?n.avatar_medium?.url_list[0]:n.avatar_medium,
                signature: n.signature,
                awemes: n.aweme_count,
                following: n.following_count,
                follower: n.follower_count,
                unique_id: n.unique_id&&n.unique_id!="undefined"?n.unique_id:null,

                // region: n.region,
                // following_visibility: n.following_visibility,
                // language: n.language,
    
                // age: n.user_age,
                // commerce: n.with_commerce_entry,
                // location: n.ip_location,
                // special: n.special_state_info,
                enterprise: n.enterprise_verify_reason,
                celebrity: n.custom_verify
            };
            return r;
        } catch (error) {
            console.error(error,"raw_user");
        }
    }

    async cmd_more(payload?:any): Promise<void> {
        console.info(JSON.stringify(payload),"cmd_more---------------------");
        if(payload.body?.get_conversation_list_body){
            let {conversation_list , has_more , next_cursor } = payload.body.get_conversation_list_body;

            // let conversation = await this.sqlRepository.sqliteConversationRepository.createOrUpdate({
            //     id:t.conversation_id,
            //     shortid:t.conversation_short_id_str,
            //     avatar:t.sender_info.avatar,
            //     chatname:t.sender_info.username,
            //     remark:t.sender_info.nickname+(t.sender_info.username&&t.sender_info.username.length?"("+t.sender_info.username+")":""),
            //     // ext:t.ext,
            //     unread:1,
            //     from_id:this.accountEntity.id,
            //     participant_id:t.sender_info.uid,
            //     team_id:this.accountEntity.team_id,
            //     owner_id:this.accountEntity.owner_id,
            // });
            // // console.info(entity,"save message -1111111111111113");
            // this.eventHook({type:"conversation-event",data:{type:"update_conversation",data:conversation}});
        }
        else if(payload.body?.get_stranger_conversation_body){
            let {conversations , total_unread} = payload.body?.get_stranger_conversation_body;
            // console.info(payload);
        }
    }
    messageFormate(t?:any){
        try {
            t.content = JSON.parse(t.content);
        } catch (error) {}
        t.type = t.type || t.message_type;

        switch (t.type) {
            case 7:
                t.text = t.content.text;
                break;
            case 5:
                t.media = {
                    aweType: t.content.aweType,
                    image_id: t.content.image_id,
                    image_type: t.content.image_type,
                    height: t.content.height,
                    width: t.content.width,
                    url: {
                        uri: t.content.url.uri,
                        url_list: t.content.url.url_list
                    }
                }, t.text = "[大表情]";
                break;
            case 17:
                t.text = "[语音]";
                break;
            case 27:
                t.text = "[图片]";
                break;
            case 91:
                t.text = "[仅看一次相片]";
                break;
            case 502:
                t.text = `[位置信息]${t.content.poi_address}`;
                break;
            case 77:
                t.text = `[抖音作品（图片）]https://www.douyin.com/video/${t.content.itemId}`;
                break;
            case 8:
                t.text = `[作品（视频）]https://www.tiktok.com/@${t.content.uid}/video/${t.content.itemId}`;
                break;
            case 43:
                t.text = `[商品]${t.content.product_title}`;
                break;
            case 88:
                t.text = "[商品卡片]";
                break;
            case 26:
                t.text = `[链接]${t.content.link_url}`;
                break;
            case 1021:
                t.text = `[直播间]https://www.tiktok.com/@${t.content.room_owner_id}`;
                break;
            case 50007:
                t.text = "加入群聊";
                break;
            case 50008:
                t.text = "退出群聊";
                break;
            case 50009:
                t.text = "修改了群昵称";
                break;
            default:
                t.text = "[未知消息类型]";
                break
        }
        return t;
    }
    async message(t?:any): Promise<void> {
        try {
            const isselfSend = this.accountEntity.id==t.sender_str;

            t.sender_info  = await this.getUserInfo(t.sender_str,isselfSend) as any;
            if(!t.sender_info && isselfSend){return;}

            // if(this.accountEntity.id==t.sender_str){return;}
            // this.client.SendTextMessage(t.conversation_short_id, "hi~"+Date.now());
            // this.client.SendLinkMessage(t.conversation_short_id,"欢迎咨询","http://case-cdn.oceanplayable.com/obj/union-fe/playable/1e77b96a4d00fbc62884d4cc24bbd093/j.html#209a9517-d9df-45ec-ac76-37739839dd6e","https://ucs.damus.host/cdn/clipvideo/cover/10884_10884256x256png.png","");
            t = this.messageFormate(t);
           
            // //做事件记录
            // this.protocolSevice.protocolUserService.addRecord(t,this.accountEntity.team_id,this.accountEntity);
            // console.info("1111111111111111");
            (async()=>{
                try {
                    console.info(t)
                    //同步会话
                    let convUpdate = {
                        id:t.conversation_id,
                        shortid:t.conversation_short_id_str,
                        msg_text:t.text,
                        unread:isselfSend?0:1,
                        active_at:new Date(),
                    };
                    let conversation = await this.sqlRepository.sqliteConversationRepository.findOne({where:{id:t.conversation_id}});
                    if(conversation){
                        conversation = await this.sqlRepository.sqliteConversationRepository.createOrUpdate(convUpdate,conversation);
                    }else{
                        let{ code , data } = (await this.client.GetConversationInfo(t.conversation_short_id));
                        if(code==0){
                            conversation = await this.saveConversations(Utils.decycle(data),convUpdate);
                        }
                    }
                    this.eventHook({type:"conversation-event",data:{type:"update_conversation",data:conversation}});
                    //end同步会话

                    let entity = await this.sqlRepository.sqliteMessageRepository.createOrUpdate({
                        id:t.message_id_str,
                        conversation_id:t.conversation_id,
                        content:t.text,
                        type:t.type,
                        content_raw:t.content,
                        ext:t.ext,
                        sender_id:t.sender_str,
                        from_id:this.accountEntity.id,
                        // updated_at:new Date(),
                        team_id:this.accountEntity.team_id,
                        owner_id:this.accountEntity.owner_id,
                    });
                    // console.info(entity,"save message -1111111111111113");
                    this.eventHook({type:"message_new",data:entity});
                } catch (error) {
                    console.error(error,"保存失败");
                }
            })(); //保存消息
    
            t.uuid = uuidv4();
            this.msglog(t);

            if (isselfSend) {
                return console.info("自己发送的消息，不自动回复");
            }

            if(this.parent.getState().code==0){
                return console.info("人工接管中");
            }
            let rule = await this.automation(t);
            if(rule){
               ( async()=>{
                    let replayres = [];
                    try {
                        replayres = await this.reply(t, rule)
                    } catch (error) {}
                    //记录自动回复
                    this.sqlRepository.sqliteAutoreplyRecordRepository.createOrUpdate({
                        id:t.message_id_str,
                        type:1,
                        // username:t.sender_info.unique_id,
                        // user_id: t.sender_str,

                        username:t.sender_info.nickname,
                        user_id: t.sender_info.sec_uid,

                        from_id: this.accountEntity.id,
                        content: t.text,
                        content_hand: replayres?.map(item=>item.text).join("|"),
                        match_reason: rule?.matchReason,
                        // content_raw: notice,
                        // handle_raw: string;
                        team_id: this.accountEntity.team_id,
                        owner_id: this.accountEntity.owner_id,
                    });
               })();
            }  
        } catch (error) {
            console.error(error,"autobot message handle错误");
        }
        
    }
    async automation(message: any): Promise<any> {
        const t = message;
        const _this = this;
        // 获取规则
        let rules = await this.parent.getRules(this.accountEntity,1);//await this.protocolSevice.autoReplyService.cacheAutoReply(this.accountEntity.team_id,1,this.accountEntity.category);
        // console.info(rules , "this.parent.getRules");
        message.type === 88 && (message.type = 110);
        message.result = [];

        let from_user_id = message.sender_str;

        let matchRule = null;
        let matchReason = "";
        //循环规则
        for(let index in rules){
            if(matchRule){break;}
            let rule = rules[index];
            matchReason = "匹配规则"+rule.title+"\n：";
            //群组消息默认不回复
            if((!rule.rules.bizTypes&&message.conversation_type==2) || (rule.rules.bizTypes&&rule.rules.bizTypes.indexOf(message.conversation_type)==-1)){
                continue;
            }

            // //只有@的
            // if (t.conversation_type === 2 && r.conversation_id !== "0" && r.conversation_id !== t.conversation_short_id.toString()) return false;
            // if(message.conversationBizType==2 && !rule.rules.groupalluser ){
            //     try{
            //         let nickname = window.SSR_RENDER_DATA&&window.SSR_RENDER_DATA[1].user.info.nickname||"";
            //         if(message.content.indexOf("@"+nickname)==-1){continue;}
            //     }catch(e){
            //         continue;
            //     }
            // }

            // //如果是自己的文字消息,追加消息
            // if( _type == "receive-self-message" && !rule.rules.isself ){
            //     continue;
            // }

            if(rules.shield_iparea)  {
                let uip = message.ip_location.replace("IP属地：", "");
                if((rules.shield_iparea+"").split("#").every(S => uip.includes(S))){
                    message.result.push({
                        type: "location",
                        code: -100,
                        msg: `用户信息（${uip}）不符合条件`
                    })
                    return null;
                }
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
                    //字符类型消息和自动回复模板
                    if(message.type==7 || message.type==770 ){

                        let text = message.content.text;
                        //任意文字消息
                        if(specif=="keywordall" ){
                            matchReason += text;
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
                    // else if( [1001,5007].indexOf(message.type)>-1){
                    //     let _c = message.content;
                    //     if(_c["locale_resources"]&&_c["locale_resources"][0]["text"].indexOf("加入群聊")>-1 && specif=="newjoin"){
                    //         matchReason += "邀请新人消息";
                    //         matchRule = rule;break;
                    //     }
                    // }
                    else if( [5007].indexOf(message.type)>-1){
                        matchReason += "邀请新人消息";
                        matchRule = rule;break;
                    }
                    else if( [27].indexOf(message.type)>-1 && specif=="image"){
                        matchReason += "图片消息";
                        matchRule = rule;break;
                    }

                    else if( [8].indexOf(message.type)>-1 && specif=="cardvideo"){
                        matchReason += "视频消息";
                        matchRule = rule;break;
                    }
                    else if( [25].indexOf(message.type)>-1 && specif=="cardaccount"){
                        matchReason += "个人名片消息";
                        matchRule = rule;break;
                    }
                    else if( [17].indexOf(message.type)>-1 && specif=="audio"){
                        matchReason += "语音";
                        matchRule = rule;break;
                    }
                    else if( [80,110].indexOf(message.type)>-1 && specif=="cardproduct"){
                        matchReason += "商品";
                        matchRule = rule;break;
                    }
                    else if( [502].indexOf(message.type)>-1 && specif=="location"){
                        matchReason += "定位";
                        matchRule = rule;break;
                    }
                    else if( [5].indexOf(message.type)>-1 && specif=="emoji"){
                        matchReason += "表情信息";
                        matchRule = rule;break;
                    }

            }
        }
        console.info(matchRule,"matchRule-------------");
        if(!matchRule){return null;}

        //该规则单用户触发频率
        // let nolimitinterval = false;
        // let blist = await this.protocolSevice.userBlacklistService.getBlacklist( matchRule.team_id );
        // console.info(blist[from_user_id],from_user_id);
        // if( blist[from_user_id]){
        //     if(!blist[from_user_id].iswhite){ //黑名单用户
        //         return null;
        //     }
        //     else{ //白名单用户
        //         nolimitinterval = true;
        //     }
        // }
        // if( !nolimitinterval && matchRule.rules.limitinterval ){
        //     let ltag = "dyrule_limitinterval"+from_user_id+matchRule.id;
        //     if(await this.protocolSevice.cacheService.get(ltag)){
        //         return null;
        //     }
        //     this.protocolSevice.cacheService.set(ltag,1,parseInt(matchRule.rules.limitinterval));
        // }

        const limitinterval = matchRule.rules.limitinterval;
        //频率限制 frequency
        if (limitinterval > 0) {
            const ctag = `${t.conversation_id}_${matchRule.id}`;
            // console.info(ctag,t.conversation_id,"-----------------------------!");
            if (_this.frequencys[ctag] && (Date.now() - _this.frequencys[ctag]) < limitinterval * 1000) {
                message.result.push({
                    type: "frequency",
                    code: 0,
                    msg: "频率限制已过滤"
                });
                return null;
            }
            _this.frequencys[ctag] = Date.now();
        }
        return matchRule;
        // const c = matchRule;
        // //频率限制 frequency
        // if (c.frequency > 0) {
        //     const d = `${t.conversation_short_id}_${c.id}`;
        //     if (_this.frequencys[d] && Date.now() - _this.frequencys[d] < c.frequency * 1000 * 60) {
        //         t.result.push({
        //             type: "frequency",
        //             code: 0,
        //             msg: "频率限制已过滤"
        //         });
        //         return;
        //     }
        //     _this.frequencys[d] = Date.now()
        // }
        // //入群消息
        // if (t.type === 50007) {
        //     const d = `${t.conversation_short_id}_${c.id}`;
        //     if (c.polymeric_minutes > 0 && _this.polymerics[`${d}_minutes`] === void 0 && (t.polymerics = d, _this.polymerics[`${d}_minutes`] = setTimeout(async () => {
        //         await _this.reply(t, c), delete _this.polymerics[`${d}_minutes`], delete _this.polymerics[`${d}_people`]
        //     }, c.polymeric_minutes * 1e3 * 60)), c.polymeric_people > 1 && (t.polymerics = d, _this.polymerics[`${d}_people`] = (_this.polymerics[`${d}_people`] || 0) + 1, _this.polymerics[`${d}_people`] >= c.polymeric_people)) {
        //         delete _this.polymerics[`${d}_people`], _this.polymerics[`${d}_minutes`] && (clearTimeout(_this.polymerics[`${d}_minutes`]), delete _this.polymerics[`${d}_minutes`]), await _this.reply(t, c);
        //         return;
        //     }
        //     if (_this.polymerics[`${d}_minutes`] || _this.polymerics[`${d}_people`]) {
        //         t.polymerics = d, t.result = [{
        //             type: "polymeric",
        //             code: 0,
        //             msg: "聚合入群消息，等待执行"
        //         }];
        //         return;
        //     }
        // }
        // await _this.reply(t, c)
        
        // // 设置频率限制
        // if (t.result.length > 0) {
        //     const r = this.messages.find(c => c.uuid === t.uuid);
        //     r && (r.result = t.result, r.polymerics = t.polymerics)
        // }
    }

    // async automation(t: Message): Promise<void> {
    //     const _this = this;
    //     let rules = [];
    //     t.type === 88 && (t.type = 110), t.result = [];
    //     const n = rules.filter(r => {
    //         if (r.message_type === 0 && [50007, 50008, 50009].includes(t.type)){
    //             return false;
    //         }
    //         if (r.status && r.conversation_type === t.conversation_type && (r.message_type === 0 || r.message_type === t.type)) {
    //             if (t.conversation_type === 2 && r.conversation_id !== "0" && r.conversation_id !== t.conversation_short_id.toString()) return false;
    //             if (r.conditions && r.conditions.length > 0)
    //                 for (let c = 0; c < r.conditions.length; c++) {
    //                     const d = r.conditions[c];
    //                     if (t.type === 7 && d.key === "include-message") {
    //                         if (d.value.split(",")
    //                             .every(S => t.content.text.includes(S) !== d.judge)) return t.result.push({
    //                             type: "message",
    //                             code: -100,
    //                             msg: "用户信息（message）不符合条件"
    //                         }), !1;
    //                         continue
    //                     }
    //                     const k = d.key.replace("include-", "")
    //                         .replace("compare-", "")
    //                         .replace("equal-", "");
    //                     let b = t.sender_info[k];
    //                     if (b && d.ignore && d.ignore.includes(b) && (b = null), b == null) {
    //                         if (d.required) return t.result.push({
    //                             type: k,
    //                             code: -100,
    //                             msg: `用户隐私（${k}）已跳过`
    //                         }), !1;
    //                         console.log(`用户资料获取失败，但未开启跳过->${k}`);
    //                         continue
    //                     }
    //                     if (d.key.startsWith("include-")) {
    //                         const v = d.value.split(",");
    //                         if (k === "location" && b && (b = b.replace("IP属地：", "")), v.every(S => b.includes(S) !== d.judge)) return t.result.push({
    //                             type: k,
    //                             code: -100,
    //                             msg: `用户信息（${k}）不符合条件`
    //                         }), !1
    //                     }
    //                     if (d.key.startsWith("compare-")) {
    //                         if (b = Number.parseFloat(b), Number.isNaN(b)) return t.result.push({
    //                             type: k,
    //                             code: -100,
    //                             msg: `用户信息（${k}）-> ${b}为非数字`
    //                         }), !1;
    //                         if (d.compare === "=" && b !== d.value) return t.result.push({
    //                             type: k,
    //                             code: -100,
    //                             msg: `用户信息（${k}）不符合条件`
    //                         }), !1;
    //                         if (d.compare === ">" && b < d.value) return t.result.push({
    //                             type: k,
    //                             code: -100,
    //                             msg: `用户信息（${k}）不符合条件`
    //                         }), !1;
    //                         if (d.compare === "<" && b > d.value) return t.result.push({
    //                             type: k,
    //                             code: -100,
    //                             msg: `用户信息（${k}）不符合条件`
    //                         }), !1
    //                     }
    //                     if (d.key.startsWith("equal-") && (k === "special" && (b = b !== void 0), (k === "enterprise" || k === "celebrity") && (b = b !== ""), b !== d.value)) return t.result.push({
    //                         type: k,
    //                         code: -100,
    //                         msg: `用户信息（${k}）不符合条件`
    //                     }), !1
    //                 }
    //             if (t.type === 7 && r.condition && r.condition.length > 0) {
    //                 let c = !1;
    //                 if (r.condition.forEach(d => {
    //                     d.type === 1 && t.content.text === d.value && (c = !0), d.type === 0 && t.content.text.indexOf(d.value) > -1 && (c = !0)
    //                 }), c) return !0
    //             }
    //             return !0
    //         }
    //         return !1
    //     });

    //     if (n.length > 0){
    //         for (let r = 0; r < n.length; r++) {
    //             const c = n[r];
    //             //频率限制 frequency
    //             if (c.frequency > 0) {
    //                 const d = `${t.conversation_short_id}_${c.id}`;
    //                 if (_this.frequencys[d] && Date.now() - _this.frequencys[d] < c.frequency * 1e3 * 60) {
    //                     t.result.push({
    //                         type: "frequency",
    //                         code: 0,
    //                         msg: "频率限制已过滤"
    //                     });
    //                     continue
    //                 }
    //                 _this.frequencys[d] = Date.now()
    //             }
    //             //入群消息
    //             if (t.type === 50007) {
    //                 const d = `${t.conversation_short_id}_${c.id}`;
    //                 if (c.polymeric_minutes > 0 && _this.polymerics[`${d}_minutes`] === void 0 && (t.polymerics = d, _this.polymerics[`${d}_minutes`] = setTimeout(async () => {
    //                     await _this.reply(t, c), delete _this.polymerics[`${d}_minutes`], delete _this.polymerics[`${d}_people`]
    //                 }, c.polymeric_minutes * 1e3 * 60)), c.polymeric_people > 1 && (t.polymerics = d, _this.polymerics[`${d}_people`] = (_this.polymerics[`${d}_people`] || 0) + 1, _this.polymerics[`${d}_people`] >= c.polymeric_people)) {
    //                     delete _this.polymerics[`${d}_people`], _this.polymerics[`${d}_minutes`] && (clearTimeout(_this.polymerics[`${d}_minutes`]), delete _this.polymerics[`${d}_minutes`]), await _this.reply(t, c);
    //                     continue
    //                 }
    //                 if (_this.polymerics[`${d}_minutes`] || _this.polymerics[`${d}_people`]) {
    //                     t.polymerics = d, t.result = [{
    //                         type: "polymeric",
    //                         code: 0,
    //                         msg: "聚合入群消息，等待执行"
    //                     }];
    //                     continue
    //                 }
    //             }
    //             await _this.reply(t, c)
    //         }
    //     }
            
    //     if (t.result.length > 0) {
    //         const r = this.messages.find(c => c.uuid === t.uuid);
    //         r && (r.result = t.result, r.polymerics = t.polymerics)
    //     }
    // }
    private sendCardCount:number=0;
    async reply(msg: Message, rule: any): Promise<any> {
        const _this = this;
        const n = rule;
        let r = [].concat(rule.hand_types).sort(it=>it=="reply"?1:-1);
        const c = rule.random, d = [];
        for (let k =0; k<r.length; k++) {
            let b = "object" == typeof r[k] ? r[k] : {
              type: r[k],
              value: n.hand_rules
            };


            // console.info(b,this.parent.getState().code,"-reply------------2");
            if(["qwnotice","hookapi"].indexOf(b.type)>-1){
                if(this.parent.getState().code==0){
                    console.info("当前模式全手工");
                    continue;
                }
            }
            else if(rule.type>1){//评论2关注3
                if(this.parent.getState().code<=1){
                    console.info("当前评论关注仅通知");
                    continue;
                }
            }
            else if(rule.type==1){//私信
                if(this.parent.getState().code<=2){
                    console.info("当前私信仅通知");
                    continue;
                }
            }

            // 随机延时
            if(k>0 && rule.rules.delay){
                let randomSec = Math.floor(Math.random() * ((rule.rules.delay[1]||1) - rule.rules.delay[0] + 1)) + rule.rules.delay[0];
                await Utils.sleep(randomSec*1000);
            }

            if(b.type === "qwnotice"){
                let v= `
>消息内容：<font color="comment">${msg.text}</font>
>发送用户：<font color="comment">${msg.sender_info.unique_id}</font>`;
                _this.qwbotSend(`**<font color="warning">消息通知</font>** - ${moment().format("YYYY-MM-DD HH:mm:ss")}${v}`, b.value.qwnotice&&b.value.qwnotice.indexOf("http")>-1?b.value.qwnotice:undefined )
            }
            if(b.type === "hookapi"){
                try {
                    const response = await Utils.req(b.value.hookapi, { source: "aistaffdy" }, "post", Object.assign({}, msg));
                    let messageList = response.data;
                    for (let ittm of messageList) {
                      if ("string" == typeof ittm && ittm.length) {
                        ittm = {
                          type: "reply",
                          value: {
                            replyWords: ittm
                          }
                        };
                      }
                      if (ittm) {
                        r.push(ittm);
                      }
                    }
                  } catch (error) {
                    console.error(error, "-========");
                  }
            }

            if (b.type === "delay") {
                const v = b.value.max * 1e3,
                    S = b.value.min * 1e3,
                    C = Number.parseInt((Math.random() * (v - S))+"") + S;
                // this.messages.find(V => V.uuid === t.uuid)
                //     .delay = C, await Utils.sleep(C)
                await Utils.sleep(C)
            }
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (b.type === "followback") { //回关 
                let senderInfo = msg.sender_info;
                if(msg.sender_info.follow_status>0){
                    d.push({
                        type: "followback",
                        type_desc: "回关",
                        code: 101,
                        msg: "已经关注过"
                    });
                    // await Utils.sleep(1e3);
                    continue;
                }
                console.info(msg,"========================followback",);
                const v = await _this.apiClient.apinotice.followerUser({
                    sec_user_id:senderInfo.sec_uid,
                    user_id:senderInfo.uid,
                    type:1,
                  });
                d.push({
                    type: "followback",
                    type_desc: "回关",
                    code: v.code,
                    msg: v.msg
                });
                // await Utils.sleep(1e3);
            }
            if (b.type === "comment_reply") { //回复评论
                     console.info(msg,"========================comment_reply",);
                    let comment = msg.raw.comment.comment;
                    let extras = [];
                    for(let nick in b.value.atusers){
                      let user = b.value.atusers[nick];
                      let s = b.value.text.indexOf(nick);
                      if(s>-1){extras.push({"user_id":user.uid,"type":0,"start":s-1,"end":s+nick.length});}
                    }

                    const v = await _this.apiClient.apinotice.commentReply({
                        aweme_id:comment.aweme_id,
                        reply_id:comment.cid,
                        reply_to_reply_id:comment.reply_id,
                        text:b.value.replyWords, 
                        text_extra: extras.length?JSON.stringify(extras):"",//
                      });
                    d.push({
                        type: "comment_reply",
                        type_desc: "评论回复",
                        code: v.code,
                        msg: v.msg
                    });
                    // await Utils.sleep(1e3);
            }
            
            if (b.type === "comment_delete") { //回复评论
                console.info(msg,"========================comment_delete",);
                const v = await _this.apiClient.apinotice.commentDelete({
                    cid:msg.raw.comment.comment.cid
                  });
                d.push({
                    type: "comment_delete",
                    type_desc: "评论删除",
                    code: v.code,
                    msg: v.msg
                });
                // await Utils.sleep(1e3);
            }
            
            if (b.type === "comment_digg") { //回复评论
                console.info(msg,"========================comment_digg",);
                const v = await _this.apiClient.apinotice.commentLike({
                    aweme_id:msg.raw.comment.comment.aweme_id,
                    cid: msg.raw.comment.comment.cid,
                    digg_type: 1
                    });
                d.push({
                    type: "comment_digg",
                    type_desc: "评论点赞",
                    code: v.code,
                    msg: v.msg
                });
                // await Utils.sleep(1e3);
            }
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (b.type === "reply") {
                console.info( b.value,"========================reply",);
                if(msg?.conversation_short_id_async){await msg.conversation_short_id_async();}
                console.info( b.value,"========================reply1",);
                let replyMsg = [];
                if(b.value.replyWords){
                    let rw = b.value.replyWords+"";
                    if(rw.match(/\{加数.*?\}/)){ //替换描点
                        let rwat = rw.match(/\{加数.*?\}/);
                        let startNum = parseInt(rwat[0].replace("{加数:",""));
                        this.sendCardCount+=1
                        rw = rw.replace(rwat[0],(startNum+this.sendCardCount)+"");
                    }else if(rw.match(/^http/)){ //替换描点
                        rw = rw+(rw.includes('?')?'&_=' + Date.now():'?_=' + Date.now());
                    }
                    rw.split("{换行}").reverse().forEach(rwi=>{
                        if(rwi.match(/^http/)){ //替换描点
                        rwi = rwi+(rwi.includes('?')?'&_=' + Date.now():'?_=' + Date.now());
                        }
                        replyMsg.unshift(rwi);
                    });
                }
                
                console.info(replyMsg,"========================reply3",);
                for (let rwi = 0; rwi < replyMsg.length; rwi++) {
                    console.info("========================text", replyMsg[rwi]);
                    if (replyMsg[rwi].includes && replyMsg[rwi].includes("{@}") && !(msg.sender_info.nickname)) {
                     await Utils.sleep(2 * 1000);
                    }
                    if (replyMsg[rwi].includes("{@}") && (msg.sender_info.nickname)) {
                      let attag = `@${msg.sender_info.nickname} `;
                      let mraw = {
                        "length": attag.length || 4,
                        "location": replyMsg[rwi].indexOf("{@}")
                      };
                      const v = await this.client.SendRawMessage(msg.conversation_short_id, {
                        type: 7,
                        content: {
                          "aweType": 700,
                          "richTextInfos": [
                            Object.assign({ "info": {
                              "uid": msg.sender_info.uid
                            }, "infoType": 1 }, mraw),
                            Object.assign({ "info": {
                              "font_weight": 2
                            }, "infoType": 2 }, mraw)
                          ],
                          "text": replyMsg[rwi].replace("{@}", attag)
                        }
                      });
                      d.push({
                        type: "text",
                        type_desc: "\u6587\u5B57\u6D88\u606F",
                        code: v.code,
                        msg: v.msg
                      });
                    } else {
                      const v = await this.client.SendTextMessage(msg.conversation_short_id, replyMsg[rwi].replace("{@}", ""));
                      d.push({
                        type: "text",
                        type_desc: "\u6587\u5B57\u6D88\u606F",
                        code: v.code,
                        msg: v.msg
                      });
                    }
                  }
            }

            if (b.type === "collectmessage") { //收藏的消息
                if(msg?.conversation_short_id_async){await msg.conversation_short_id_async();}
                let replyMsg = b.value.collectmessage;
                for(let rwi=0;rwi<replyMsg.length;rwi++){
                    let msg2 = replyMsg[rwi];
                    console.info(msg2,"========================collectmessage",);
                    const v = await _this.client.SendRawMessage(msg.conversation_short_id, {...msg2,content:msg2.content_raw} );
                    d.push({
                        type: "collectmessage",
                        type_desc: "收藏消息",
                        code: v.code,
                        msg: v.msg
                    });
                    // await Utils.sleep(1e3);
                }
            }
            // if (b.type === "rich"){
            //     if (b.value.text && b.value.content && b.value.uid) {
            //         const v = b.value.content.indexOf(b.value.text);
            //         if (v === -1) {
            //             d.push({
            //                 type: "rich",
            //                 code: -404,
            //                 msg: "超链文字不在消息内容中"
            //             });
            //             continue
            //         }
            //         const S = [{
            //                 info: {
            //                     uid: b.value.uid
            //                 },
            //                 infoType: 1,
            //                 length: b.value.text.length,
            //                 location: v
            //             }, {
            //                 info: {
            //                     font_weight: 2
            //                 },
            //                 infoType: 2,
            //                 length: b.value.text.length,
            //                 location: v
            //             }],
            //             C = await _this.client.SendTextMessage(t.conversation_short_id, b.value.content, S, [b.value.uid]);
            //         d.push({
            //             type: "rich",
            //             code: C.code,
            //             msg: C.msg
            //         }), await Utils.sleep(1e3)
            //     } else d.push({
            //         type: "rich",
            //         code: -404,
            //         msg: "动作缺少必填信息"
            //     });
            // }
                
            if (b.type === "image"){
                if(msg?.conversation_short_id_async){await msg.conversation_short_id_async();}
                for (let v = 0; v < b.value.reply_images.length; v++) {
                    const S = b.value.reply_images[v],
                        C = await _this.client.SendImageMessage(msg.conversation_short_id, S);
                    d.push({
                        type: "image",
                        code: C.code,
                        msg: C.msg
                    });
                    // await Utils.sleep(1e3);
                }
            }    
            // if (b.type === "video") {
            //     const v = await _this.client.SendVideoMessage(t.conversation_short_id, b.value);
            //     d.push({
            //         type: "video",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
            // if (b.type === "emoji") {
            //     const v = await _this.client.SendEmojiMessage(t.conversation_short_id, b.value);
            //     d.push({
            //         type: "emoji",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
            // if (b.type === "linkcard") {
            //     let linkcard = await this.protocolSevice.linkcardService.getByCache(b.value.linkcard_id);
            //     const v = await _this.client.SendLinkMessage(t.conversation_short_id, linkcard.name, linkcard.jumpLink(), linkcard.fullCover(), linkcard.desc);
            //     d.push({
            //         type: "url",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }

            if (b.type === "url") {
                if(msg?.conversation_short_id_async){await msg.conversation_short_id_async();}
                let burl = b.value.url_url;
                // if(burl.startsWith('http')){
                //     burl = `sslocal://webview/?url=`+urlencoded(burl);
                // }
                const v = await _this.client.SendLinkMessage(msg.conversation_short_id, b.value.url_title, burl, b.value.url_cover, b.value.url_desc);
                d.push({
                    type: "url",
                    code: v.code,
                    msg: v.msg
                });
                // await Utils.sleep(1e3);
            }

            // if (b.type === "invitation") {
            //     const v = await _this.client.InviteMembers(b.value, [t.sender]);
            //     d.push({
            //         type: "invitation",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
            // if (b.type === "invitationcard") {
            //     const v = await _this.client.SendInviteMessage(b.value, [t.sender]);
            //     d.push({
            //         type: "invitationcard",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
            if (b.type === "remove") {
                const v = await _this.client.RemoveMembers(msg.conversation_short_id, [msg.sender_info.uid]);
                d.push({
                    type: "remove",
                    code: v.code,
                    msg: v.msg
                });
                // await Utils.sleep(1e3);
            }
            // if (b.type === "silence") {
            //     const v = await _this.client.SilenceMember(t.conversation_short_id, !0, t.sender, b.value);
            //     d.push({
            //         type: "silence",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
            // if (b.type === "recall") {
            //     const v = await _this.client.RecallMessage(t.conversation_short_id, t.message_id);
            //     d.push({
            //         type: "recall",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
            // if (b.type === "setlike") {
            //     const v = await _this.client.SetMessageProperty(t.conversation_short_id, t.message_id, t.client_id);
            //     d.push({
            //         type: "setlike",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
            // if (b.type === "textatall") {
            //     const v = [{
            //             info: {
            //                 mention_label: "1"
            //             },
            //             infoType: 4,
            //             length: 5,
            //             location: 0
            //         }, {
            //             info: {
            //                 font_weight: 2
            //             },
            //             infoType: 2,
            //             length: 5,
            //             location: 0
            //         }],
            //         S = await _this.client.SendTextMessage(t.conversation_short_id, `@所有人 ${b.value}`, v, [0]);
            //     d.push({
            //         type: "textatall",
            //         code: S.code,
            //         msg: S.msg
            //     }), await Utils.sleep(1e3)
            // }
            // if (b.type === "leave") {
            //     const v = await _this.client.LeaveGroup(t.conversation_short_id);
            //     d.push({
            //         type: "leave",
            //         code: v.code,
            //         msg: v.msg
            //     }), await Utils.sleep(1e3)
            // }
        }
        //发送结果统计
        let wsmsg = [];
        if (d.length > 0) {
            // if(d.some(v => v.code === 7821 || v.code === 7823) && n.silence){
            //     await _this.client.LeaveGroup(t.conversation_short_id);
            // }

            d.forEach(S => {wsmsg.push({text:"处理"+(S.type_desc||S.type)+(S.code !== 0?"失败":"成功"),raw:S});});
            // _this.log(wsmsg);


            // const b = d.some(v => v.code !== 0) || false;
            // if (t.polymerics) {
            //     const v = this.messages.filter(S => S.polymerics === t.polymerics || S.uuid === t.uuid);
            //     v.length > 0 && v.forEach(S => {
            //         S.result = d, S.delay = void 0, S.error = b
            //     })
            // } else {
            //     const v = this.messages.find(S => S.uuid === t.uuid);
            //     v && (v.result = d, v.delay = void 0, v.error = b)
            // }
            let v = "";
            d.forEach(S => {
                S.code > 0 && (v += `
>操作类型：<font color="comment">${S.type_desc||S.type}</font>
>错误代码：<font color="comment">${S.code}</font>`)
            });
            if (v.length > 0 ) {
                _this.qwbotSend(`**<font color="warning">异常通知</font>** - ${moment().format("YYYY-MM-DD HH:mm:ss")}${v}`)
            }
        }
        return wsmsg;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /**
   * 评论自动回复规则
   * @param commentNotice 仅传入消息通知中的commment.comment部分
   * @param owner_id 
   */
   async commentAutoReply(commentNotice:any) {
    let rules = await this.parent.getRules(this.accountEntity,2);

    console.info(rules,"rules2-----------------------");
    let matchRule = null;
    let matchReason = "";
    //循环规则
    for(let index in rules){
      if(matchRule){break;}
      let rule = rules[index];
      matchReason = "匹配规则"+rule.title+"\n：";
      //循环规则中的匹配类型
      let specifs = "string"==typeof rule.rules.specif ? [rule.rules.specif]:rule.rules.specif;
      for(let i in specifs){
        let specif = specifs[i];

          //任意内容
          if(specif=="any"){
            matchReason +="任意内容";
            matchRule = rule;break;
          }
          let text = commentNotice.text.replace(/(^\s*)|(\s*$)/g, "");
          //如果是全匹配
          if(specif=="keywordfull" && rule.rules.keywords.indexOf(text)>-1){
            matchReason += "完全匹配"+text;
            matchRule = rule;break;
          }
          //如果是模糊匹配
          if(specif=="keywordany" ){
            let keyword = rule.rules.keywords.find(keyword=>{
              return text.indexOf(keyword)>-1;
            });
            matchReason += "匹配关键词:"+keyword;
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
    }
    if(!matchRule){return null;}
    (matchRule as any).matchReason = matchReason;
    return matchRule;
  }


  /**
   * 消息自动回复规则
   * @param followNotice 
   * @param owner_id 
   */
   async followAutoReply(followNotice:any) {
    let rules = await this.parent.getRules(this.accountEntity,3);

    let matchRule = null;
    let matchReason = "";
    //循环规则
    for(let index in rules){
      if(matchRule){break;}
      let rule = rules[index];
      matchReason = "匹配规则"+rule.title+"\n";

      matchReason +="任意内容";
      matchRule = rule;break;
    }

    if(!matchRule){return null;}
    (matchRule as any).matchReason = matchReason;
    return matchRule;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    stop(): void {
        this.running = false;
        if (this.client) {
            this.client.stop();
            this.log("主动停止机器人");
        }
    }

    debug(t: string): void {
        // Assuming l is defined elsewhere...
        this.messages.push({
            conversation_type: 0,
            text: t,
            create_time: new Date().toLocaleTimeString()
        });
    }

    //消息记录 暂未启用
    msglog(t: any): void {

        // if (this.messages.length > 1000) {
        //     this.messages.shift();
        // }

        let message = {
            ...t,
            create_time: t.create_time ? new Date(t.create_time).toLocaleTimeString() : new Date().toLocaleTimeString()
        };
        // this.messages.push(message);
        
        this.log(message);
    }

    log(t: any,sendInfo?:any,qwnotice?:boolean): void {
        const _this = this;
        let msgs;
        // {text:,raw:}
        if("object"==typeof t){
            msgs = JSON.parse(JSON.stringify(t));
        }else{
            msgs = {text:t};
        }
        if(!Array.isArray(msgs)){ msgs=[msgs]; }

        msgs.every(s=>{
            s.sender = s.sender_info || sendInfo || { nickname :"bot"+_this.accountEntity.nickname};
            s.create_time = s.create_time || new Date().toLocaleTimeString();
            s.fid = _this.accountEntity.id;

            
            // 企微通知
            if(qwnotice){
                this.qwbotSend(s.text);
            }

            this.eventHook({type:"log_event",data:s});
        });

        // //通知前端websocket
        // this.protocolSevice.websocketService.sendMessageToClients(this.protocolSevice.websocketService.getDesktopClients(this.accountEntity.team_id),{type:"botlog",raw:msgs});
        
    }

    clear(): void {
        // Assuming l is defined elsewhere...
        this.messages = [];
    }
}
