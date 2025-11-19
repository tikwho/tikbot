import * as querystring from 'querystring';
import * as http from 'http';
import moment = require('moment');
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { ProtocolRepository } from './protocol.repository';
import { Utils } from 'src/common/utils';
import { CacheService } from 'src/common/utils_cache';
// import { ProtocolEntity } from './protocol.entity';
// import { ProtocolHookService } from './protocol_hook.service';
// import { async } from 'rxjs';
// // import { UserBlacklistService } from './blacklist/user_blacklist.service';
// import { ProtocolUserService } from './user/protocol_user.service';
// import { UserTeamController } from '../user/user_team.controller';
// import { UserTeamService } from '../user/user_team.service';
// import BotClient from './botclient/botclient';
import AutoBot from './AutoBot';
import { AutoReplyService } from '../autoreply';
import { WebsocketService } from 'src/websocket/websocket.service';
// import { TikTokClient } from "./apiclient";
import  axios from "axios";
import { SqlRepository } from './sqlrepository';
import { Timeout } from '@nestjs/schedule';
import { ApiClient } from './apiclient';
import { setInterval } from 'timers';

@Injectable()
export class ProtocolService {

  bots:any={};
  
  constructor( 
    public readonly repository:ProtocolRepository,
    public readonly cacheService:CacheService,
    // public readonly protocolHookService:ProtocolHookService,
    // public readonly protocolUserService:ProtocolUserService,
    // public readonly userBlacklistService:UserBlacklistService,
    // private readonly userTeamService:UserTeamService,

    public readonly autoReplyService:AutoReplyService,

    public readonly websocketService:WebsocketService,
    
  ){
    
    // this.initBot();

    this.sqlRepository = new SqlRepository();

  }

  
  sqlRepository:SqlRepository;
  async test(){
    // let res = await this.sqlRepository.sqliteAccountRawRepository.find(); //.sqliteMessageRepository.find();
    // console.info(res);
    // return res;

    // let entity = await this.repository.findOne({where:{autologin:1,type:"ttshop"}});
    let entity = await this.repository.findOne({where:{type:"ttshop"}});
    const autoBot = await this.initEntityBot(entity);
    return await autoBot.apiClient.apiauthor.searchList();
    // return await autoBot.apiClient.user.getCreatorUserInfo();

    // return await autoBot.apiClient.user.listUser({
    //   minCursor:0,
    //   secUid:"MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh"
    // },"followering");

  }

  /**
   * 获取一个bot实列
   * @param id 
   * @returns 
   */
  async getOneBot(id?:string){
    if(id || Object.keys(this.bots).length==0){
      let entitys = id ? await this.repository.find({where:{id,type:"tiktok"}}) : await this.repository.createQueryBuilder('protocol').take(20).orderBy("random()").getMany();
      for(let entity of entitys){
        await this.initEntityBot(entity);
      }
    }
    if(id){return this.bots[id];}
    return Object.values(this.bots).sort((a,b)=>{return Math.random()-0.5;})[0];
  }

  /**
   * 循环初始化
   */
  private apiBots:any={};
  async getApiBot(id?:string,proxys?:any):Promise<ApiClient>{
    const _this = this;
    if(!this.apiBots[id]){
      let entity = await this.repository.findOne({where:{id:id||"6940517328601924613"}});
      // console.info( entity," entity-----------");
      let apiClient = new ApiClient({
        ...entity,
        entity,
        // cookie: "ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; store-country-code=cn; store-country-code-src=uid; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; store-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt-target-idc=alisg; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; odin_tt=effe8e4009f92c019a37d37e36bdd6c26fe84500737ff390438d07b750d83eb7a78ff3830ed95c9f3676bc30edc65af0756df3fec7c361766b55703a8b66ea0311ed3e440f991a8a6d077314cfa68fca; ak_bmsc=DAEF95B5567E37882A0DC683D842C607~000000000000000000000000000000~YAAQyxAjF4A+JEiRAQAA/WqQSRiuFvsGm9DlUu+MXpZZIQ+iDE/sr6giMxIqj4TKGdpoZp5Trv/zUUbR902S5VWeJZlLEhfGlORmE4Jyy/yjpP5YlaEx0yVE03zfOKLTZ7Z7iLpL6sIpPiMM9+4lrBJFKpIZGY0xcuzqQMbYcegK7BR7qavk4y7ts8wvoORabiwpkx6+3jZzueE3fCouKLzusQ1jGDdhl40Sx5svQTW6KNEnQvW0k55ucfPLS/NtLY3uO/WQmS6EfDGTRzlb4aVuTwhd+zIKxuKl5pcvCxAK0Q2Yyn2Dl/qWlWDF9GUEiuP8t4cp/Ek+bJX8b70ijC18hRti+W4iFaIq1f6HpSmFQ0pqvKqMf8WiEFz3KR7U1x5ieKUhM+Y=; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1723516089%7Cf258fb72da7c8cc2465b3e1246586531cff3ed258e46ce72fbdf94f96cb9b27e; bm_sv=778E4D2101F526897B524E1050C9B240~YAAQyxAjF5Y+JEiRAQAAJ5OQSRj/wlAeY5IwUe1ftkF/2gdrsrJX1ZmQ2yx3h6NvE0U15oy/wKQ4Detf7rceMDgIx+16jQaAyoXZrBezifZva8ZILDGYxC+cg3A+aqseWXQRAwhQuDo5/EyPZPo0oktYPUhaPePs9hSrEcwwcHhsEzbnbCW8hdtnHMhZoTva9BtebtLlbtXt3qcvAz3UHI7YWQ6gdVwziI2sfrYIIuDKsLIYzQJs8sOZlkyIMSse~1; msToken=95ua30b0eq9FPGQVqtDnfLMT2bO8n02lt69Ev6HWI_a7yWv3Hck1lGpEarqDl8LOEAMnXOnZVF1CAKUZhUYas-gN2qoj4xO7XxDv2psvsxGyUq3F0wRL_YF3GuW_d-9aSXLQoCvBfL9WYiRjhEaLrd-L",
        cookie: entity.cookies_str ,
        proxy_url:entity.proxy_ip
      });
      this.apiBots[id] = apiClient;
    }

    this.apiBots[id].proxys = proxys;

    // http://api.proxy.ip2world.com/getProxyIp?num=5&regions=sg&lb=1&return_type=json&protocol=http
    // 获取IP地址，使用地区进行
    // const setProxy = async ()=>{
    //     let proxys = _this.apiBots[id].proxys;
    //     proxys = Array.isArray(proxys)?proxys:[proxys];
    //     try {
    //         let {data:plist} = await Utils.req("http://api.proxy.ip2world.com/getProxyIp?num=5&lb=1&return_type=json&protocol=http",{region:proxys.join(",")});
    //         let proxyUrl = `http://${plist[0].ip}:${plist[0].port}`;
    //         _this.apiBots[id].autoBot.proxy_url = proxyUrl;
    //     } catch (error) {
    //       console.error("获取代理失败-----",error);
    //     }
    // }
    // if(proxys&&proxys.length){
    //   setProxy();
    //   this.apiBots[id].proxysInterval = setInterval(setProxy,3*60*1000);
    // }

    await this.apiBots[id].checkMsToken();

    // return apiClient.apimessage.sendMessage("7373510022464209926",["hi~"]);
    // return apiClient.apimessage.sendMessage("7028939348067795974",["hi api"]);
    // return apiClient.apilive.following({to_user_id:"100002597448630272"});
    // return apiClient.apimessage.sendMessage("6951670821157979142",["hi you"]);
    return this.apiBots[id];

  }


  /**
   * 循环初始化
   */
  // @Timeout(1000)
  async initBot(){

    // let entitys = await this.repository.find({where:{autologin:1}});
    // let entitys = await this.repository.find({where:{id:"6940517328601924613"}});
    // for( let entity of entitys ){
    //   this.initEntityBot(entity);
    // }

    // let entity = await this.repository.findOne({where:{id:"7028939348067795974"}});
    // console.info( entity," entity-----------");
    // let apiClient = new ApiClient({
    //   ...entity,
    //   cookie: entity.cookies_str ,
    //   proxy_url:entity.proxy_ip
    // });

    // return apiClient.apimessage.sendMessage("6940517328601924613",["hi~"]);

    // let entity = await this.repository.findOne({where:{id:"6940517328601924613"}});

    // const U = require('long');
    // let participants = ["7349896061421585450","7309095191317906475 "];
    // participants = participants.map(item=>{return "string"==typeof item ? U.fromValue(item): item;});
    // return participants;

    // let entity = await this.repository.findOne({where:{id:"7349896061421585450"}});
    let entity = await this.repository.findOne();
    console.info( entity," entity-----------");
    let apiClient = new ApiClient({
      ...entity,
      cookie: "SEARCH_RESULT_LIST_TYPE=%22single%22; ttwid=1%7CzCpDQv2Wkmgd91uMdaszMLL_YQl6uyUgHB3M2NYZZQM%7C1732519030%7C1a618597840276324a1a5004b94605b459934679f37601be7d2471d347a597c8; fpk1=U2FsdGVkX19vuHu7s/AxHWcMaCzLGkSnBA3a2eTy5PePD5xsm3lRw5sP9vXr6/lNQHlr9cHrMeMyHi2HoXmTnQ==; fpk2=f51bb482c660d0eeadd1f058058a2b35; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%2C%22isForcePopClose%22%3A1%7D; bd_ticket_guard_client_web_domain=2; passport_csrf_token=c73843b85619a85ec5dfd34603cc7459; passport_csrf_token_default=c73843b85619a85ec5dfd34603cc7459; s_v_web_id=verify_m3wp4i2j_vVySUiB1_hGUc_4rBl_Arq8_DCliU7vltz0Y; passport_mfa_token=CjVdNeDqLp%2BbjPayYVSIfNmsylA65m3%2FbvxhypW%2Bi68Fw2bzmpVyjF8E60P1GDzq3s5ChzzVCRpKCjyln0a5epHEtVJ%2BlGN5vIgLJWUT3M9TMpSlrEmB8H%2F8AKZ2NJrEVG1M0cquqUxjOHF0xQ5jdhBaAe5cn8wQrbTiDRj2sdFsIAIiAQMNrqsA; d_ticket=a9bbe02a22fe17effe017ca60f2ec785942b3; passport_assist_user=Cj03MAz3FF8yUuhZm-4jZoDrlIIPdUqQPRDTFyWAv7zsiHaP2JiA6LqSzPSq7mhCHsWZy3E0SvU5qrJOuabcGkoKPIQ1Of-bQcmZXGaoirtmASKoR8nKDyeY_jiYte-fnGOyRkEoIF96YmEGXsRp8yy0-xfRaMMnlP8yz7cbPBCwtOINGImv1lQgASIBA7I6ZnY%3D; n_mh=3F0D_PzYxkhaHiA5TKVBrjX3IWYMRC9jtWDasqifuKU; sso_uid_tt=aded9c89cd12ac3fcdae3e7400f04258; sso_uid_tt_ss=aded9c89cd12ac3fcdae3e7400f04258; toutiao_sso_user=32a70162f6a234dd599bd3f80b12b4b6; toutiao_sso_user_ss=32a70162f6a234dd599bd3f80b12b4b6; sid_ucp_sso_v1=1.0.0-KGYwODA2NzZkMGY2MmYxZjBmZWM0OWVkMGM1NDhiYTkzOGE0N2YwNDcKHwj12busiAMQtcmQugYY7zEgDDDk_JneBTgGQPQHSAYaAmxmIiAzMmE3MDE2MmY2YTIzNGRkNTk5YmQzZjgwYjEyYjRiNg; ssid_ucp_sso_v1=1.0.0-KGYwODA2NzZkMGY2MmYxZjBmZWM0OWVkMGM1NDhiYTkzOGE0N2YwNDcKHwj12busiAMQtcmQugYY7zEgDDDk_JneBTgGQPQHSAYaAmxmIiAzMmE3MDE2MmY2YTIzNGRkNTk5YmQzZjgwYjEyYjRiNg; login_time=1732519094735; passport_auth_status=5a66a71c29649b1e4f49cae41e6ae19b%2C; passport_auth_status_ss=5a66a71c29649b1e4f49cae41e6ae19b%2C; uid_tt=ae3ab2d7cb29b1e88b5f15819b4abf40; uid_tt_ss=ae3ab2d7cb29b1e88b5f15819b4abf40; sid_tt=bb9423fedf6ad245447bcb4b0475d81b; sessionid=bb9423fedf6ad245447bcb4b0475d81b; sessionid_ss=bb9423fedf6ad245447bcb4b0475d81b; is_staff_user=false; UIFID=c4a29131752d59acb78af076c3dbdd52744118e38e80b4b96439ef1e20799db0016dfa2ff14641e67add83c3e2fd4f7d9cfedbbe2dc05ad2cd3295d82e9b414ca104bbe0a3d1acd6cb59ffe4fdcc76b3c60e80773def549bc50a1fb7e3c1e79a57c1da5feadeb261113a139bf276fbd38668bf39623ebd11694ab5bb0c309ef18ecbe067cade047969bf2845a0e9e215be04e5bbdc670832118bda67bab4a558; download_guide=%221%2F20241125%2F0%22; SelfTabRedDotControl=%5B%7B%22id%22%3A%227308273696076990498%22%2C%22u%22%3A7%2C%22c%22%3A0%7D%5D; _bd_ticket_crypt_doamin=2; _bd_ticket_crypt_cookie=7181df7851fc2c20429329170a08bb4b; __security_server_data_status=1; sid_guard=bb9423fedf6ad245447bcb4b0475d81b%7C1732519105%7C5183991%7CFri%2C+24-Jan-2025+07%3A18%3A16+GMT; sid_ucp_v1=1.0.0-KGZiZmU0NTA2Y2FmYjA1N2VmMGNhZGVlMjQ1ZWU5ZTc4NDEzNmI2MDEKGQj12busiAMQwcmQugYY7zEgDDgGQPQHSAQaAmhsIiBiYjk0MjNmZWRmNmFkMjQ1NDQ3YmNiNGIwNDc1ZDgxYg; ssid_ucp_v1=1.0.0-KGZiZmU0NTA2Y2FmYjA1N2VmMGNhZGVlMjQ1ZWU5ZTc4NDEzNmI2MDEKGQj12busiAMQwcmQugYY7zEgDDgGQPQHSAQaAmhsIiBiYjk0MjNmZWRmNmFkMjQ1NDQ3YmNiNGIwNDc1ZDgxYg; is_dash_user=0; publish_badge_show_info=%220%2C0%2C0%2C1732519108557%22; pwa2=%220%7C0%7C3%7C0%22; dy_swidth=1920; dy_sheight=1080; store-region=cn-gz; store-region-src=uid; volume_info=%7B%22isUserMute%22%3Afalse%2C%22isMute%22%3Afalse%2C%22volume%22%3A0.5%7D; xgplayer_device_id=7155890550; xgplayer_user_id=451484700237; FOLLOW_NUMBER_YELLOW_POINT_INFO=%22MS4wLjABAAAAOBtUkW6oIgMRrDkTEesl8335vttM8tQFEdvNVc0tNJQ%2F1732550400000%2F0%2F1732546585587%2F0%22; __ac_nonce=06746904d009bfdee3600; __ac_signature=_02B4Z6wo00f018xjdvAAAIDD9HBGdUbNa-PMQ3JAAJRnbc; douyin.com; xg_device_score=7.658235294117647; device_web_cpu_core=8; device_web_memory_size=8; architecture=amd64; IsDouyinActive=true; stream_recommend_feed_params=%22%7B%5C%22cookie_enabled%5C%22%3Atrue%2C%5C%22screen_width%5C%22%3A1920%2C%5C%22screen_height%5C%22%3A1080%2C%5C%22browser_online%5C%22%3Atrue%2C%5C%22cpu_core_num%5C%22%3A8%2C%5C%22device_memory%5C%22%3A8%2C%5C%22downlink%5C%22%3A10%2C%5C%22effective_type%5C%22%3A%5C%224g%5C%22%2C%5C%22round_trip_time%5C%22%3A200%7D%22; strategyABtestKey=%221732677711.297%22; FOLLOW_LIVE_POINT_INFO=%22MS4wLjABAAAAOBtUkW6oIgMRrDkTEesl8335vttM8tQFEdvNVc0tNJQ%2F1732723200000%2F0%2F1732677711578%2F0%22; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCTGVJU0JtVkFiQkdBeFM0cisrMjVFK2x5YW4wZkdpdHpxVndJWDVVQk5ncjRJc2RPMS9xZ3E0eWd5NGxWdFNjeUxuUnFoRGdTbjJ4SU5LMjd1UjNZNmc9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoyfQ%3D%3D; biz_trace_id=06b27839; passport_fe_beating_status=true; stream_player_status_params=%22%7B%5C%22is_auto_play%5C%22%3A0%2C%5C%22is_full_screen%5C%22%3A0%2C%5C%22is_full_webscreen%5C%22%3A0%2C%5C%22is_mute%5C%22%3A0%2C%5C%22is_speed%5C%22%3A1%2C%5C%22is_visible%5C%22%3A1%7D%22; home_can_add_dy_2_desktop=%221%22; csrf_session_id=6f0ea5ac16bdc75fff02ac55dd95fd0f; odin_tt=bdcd998768e789eea8f597987bbd773730225c464daf7bf93b03d7748329831a07a11041d5bb557d56cd60e1c19b7b87",
      // cookie: entity.cookies_str ,
      proxy_url:entity.proxy_ip
    });

    // return apiClient.apimessage.sendMessage("7373510022464209926",["hi~"]);
    // return apiClient.apimessage.sendMessage("7028939348067795974",["hi api"]);
    // let res =  await apiClient.apimessage.imapi.GetStrangerConversation();
    // let res =  await apiClient.apimessage.imapi.GetConversationListV2();
    // let res =  await apiClient.apimessage.imapi.CreateConversation("6742571568961160193");
    // console.info(res,"!------------");
    // return res;
    // await apiClient.checkMsToken();
    // return apiClient.apilive.following({to_user_id:"6843241253649761282"});
    // return apiClient.apimessage.sendMessage("6951670821157979142","hi you");
    // return await apiClient.apilive.feedLive();
    // return await apiClient.user.getUserPostList("MS4wLjABAAAAjO4Y6mWAKDgSonhm5aUoXYWbIce3MTwxhtGvZXPl6gpaG1ZXGbaYs-1em3d8WbHh",35,0);//'7349896061421585450'
    return await apiClient.apinotice.commentReply({aweme_id:"7438806592402902298"});

    // return await apiClient.apinotice.commentReply({
    //   aweme_id:"7419483717242047762",
    //   reply_id:0,//"7003347782526944001",
    //   reply_to_reply_id:0,
    //   text: "hello~", 
    //   text_extra: "",//JSON.stringify([{"user_id":"6950230275910517765","type":3,"start":3,"end":10}])
    // })


    // const botClient = new AutoBot(entity);
    // botClient.start(entity.cookies_str);

  }

  /**
   * 初始化单个
   * @param entity 
   */
  async initEntityBot(entity:any){``
    let notice_url = entity.notice_url;
    // if(!notice_url){
    //   let UserTeamEntity = await this.userTeamService.getByIdCache(entity.team_id);
    //   notice_url = UserTeamEntity.auth_token;
    // }
    const autoBot = this.bots[entity.id] || (new AutoBot(entity,notice_url,"http://127.0.0.1:7890",this));
    autoBot.setAccountEntity(entity);
    // autoBot.start();
    this.bots[entity.id] = autoBot;

    return autoBot;

    // return await autoBot.apiClient.user.listUser({
    //   minCursor:0,
    //   secUid:"MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh"
    // },"followering");
    // autoBot.message();
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

  /**
   * 获取规则
   * @param entity
   * @returns 
   */
   async getRules(entity,type=1){
    let rules = await this.autoReplyService.cacheAutoReply(entity.team_id,type,entity.category);
    return rules;
  }

  getState(){
      return {code:2};
  }
  
  // hook钩子
  async eventHook(data,bot){
    
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 手动切换机器人状态
   * @param entity 
   * @returns 
   */
  async switchBot(entity:any){
    if(entity.autologin){
      await this.initEntityBot(entity);
    }else{
      if(this.bots[entity.id]){
        await this.bots[entity.id].stop();
        // delete this.bots[entity.id];
      }
    }
    return true;
  }



async douyinAweme(url) {
    try {
        // Following the redirect and getting the final URL
        const response = await axios.get(url, {
            maxRedirects: 0, 
            validateStatus: null
        });
        const loc = response.headers.location;

        // Extracting the ID
        let idMatch = loc.match(/[0-9]+/);
        if (!idMatch) {
            idMatch = url.match(/[0-9]+/);
        }
        const id = idMatch ? idMatch[0] : null;
        
        // Prepare data for the request
        const data = {
            url: `https://www.douyin.com/aweme/v1/web/aweme/detail/?aweme_id=${id}&aid=1128&version_name=23.5.0&device_platform=android&os_version=2333`,
            user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'
        };

        // Send request to the third-party API
        const tiktokResponse = await axios.post('https://tiktok.iculture.cc/X-Bogus', data, {
            headers: { 'Content-Type': 'application/json' }
        });
        const apiUrl = tiktokResponse.data.param;

        // Generate a random msToken
        const msToken = Math.random().toString(36).slice(2, 109);

        // Make the final request
        const finalResponse = await axios.get(apiUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
                'Referer': 'https://www.douyin.com/',
                'Cookie': `msToken=${msToken};odin_tt=...`
            }
        });
        console.info(finalResponse);
        const videoData = finalResponse.data.aweme_detail;
        const videoUrl = videoData.video.play_addr.url_list[0];

        if (!videoUrl) {
            return { code: 201, msg: '解析失败' };
        }

        // Construct the response object
        return {
            code: 200,
            msg: '解析成功',
            data: {
                // ...construct the data object based on videoData...
            }
        };
    } catch (error) {
        console.error('Error:', error);
        return { code: 500, msg: '内部服务器错误' };
    }
}








}

    // dyapp = {
    //   client_key:"awkw69fh280dzk43",
    //   client_secret:"1b36d95e450a957f136672ff0f143d6e",
    // }

    // /**
    //  * 缓存获取实体
    //  */
    // cacheList:Record<string, any>={};
    // async getById(id:string,noCache?:boolean) {
    //   let entity = null;
    //   if(!noCache ){
    //     let entityInfo = await this.cacheService.get( "protocol_info_"+id );
    //     entity = ProtocolEntity.create(entityInfo);
    //   }
    //   if(!entity || !entity.id ){
    //     entity = await this.repository.findOne(id);
    //     await this.cacheService.set( "protocol_info_"+id , entity , 60 );
    //   }
    //   // console.info(entity,"4---");
    //   return entity;
    // }
  
  //   // async req(url:string,requestData?:any,type?:string,postData?:any){
  //   //   let headers = {};
  //   //   let access_token = null;//this.cacheService.get("");
  //   //   let result = await Utils.req(url,requestData,type,Object.assign({},{access_token},postData),true,headers) as any;
  //   //   console.info(result);
  //   //   return result;
  //   // }

  //   // https://developer.open-protocol.com/docs/resource/zh-CN/dop/develop/openapi/account-permission/get-access-token
  //   // https://developer.open-protocol.com/docs/resource/zh-CN/dop/develop/openapi/account-management/get-account-open-info
  //   async getAt(code:string,tenantId?:string,owner_id?:string){
  //     let result = await Utils.req("https://open.protocol.com/oauth/access_token/",{
  //         "grant_type": "authorization_code",
  //         "client_key": this.dyapp.client_key,
  //         "client_secret": this.dyapp.client_secret,
  //         "code": code
  //     }) as any;
  //     console.info(result);
      
  //     let data = result.data;
  //     let entity = await this.repository.createOrUpdate({id:data.open_id,raw:data,team_id:tenantId,owner_id});
  //     return await this.refrehNick(entity);
  //     // console.info(entity);
  //     // return result;
  //   }

  //   async getCt(noCache?:boolean){
  //     let entity = null;
  //     let ctag = "protocol_client_token";
  //     if(!noCache ){
  //       entity = await this.cacheService.get( ctag );
  //     }
  //     if(!entity){
          
  //       let result = await Utils.req("https://open.protocol.com/oauth/client_token/",{
  //           "grant_type": "client_credential",
  //           "client_key": this.dyapp.client_key,
  //           "client_secret": this.dyapp.client_secret,
  //       }) as any;
  //       console.info(result);
  //       entity = result.data;
  //       await this.cacheService.set( ctag , entity , 7200 );
  //     }
  //     return Object.assign({},this.dyapp,entity);
  //   }

  //   /**
  //    * 刷新昵称
  //    * @param entity 
  //    * @returns 
  //    */
  //   async refrehNick(entity:any){
  //     let {data} = await entity.req("https://open.protocol.com/oauth/userinfo/",{
  //         "open_id": entity.id
  //     }) as any;
  //     entity.avatar = data.avatar;
  //     entity.nickname = data.nickname;
  //     entity.raw_data = data;
  //     entity.save();
  //     console.info(data);
  //     return entity;
  //   }

  //   /**
  //  * 上传文件
  //  * https://developer.open-protocol.com/docs/resource/zh-CN/dop/develop/openapi/interaction-management/business-tool/image-upload
  //  * https://developer.open-protocol.com/docs/resource/zh-CN/dop/develop/openapi/interaction-management/business-tool/image-upload
  //  * @param fileUrl 
  //  * @returns 
  //  */
  // async updateFile(fileUrl:string) {
  //   let ct = await this.getCt();

  //   if(fileUrl.indexOf("http")==-1){fileUrl = "https:"+fileUrl;}
  //   const fs = require("fs");
  //   const that = this;
  //   const utag = "dyup_"+ct.client_key+fileUrl;
  //   let cache:any = await that.cacheService.get(utag);
  //   if(cache){return cache;}

  //   const Promise = require("bluebird");
  //   const bhttp = require("bhttp");
  //   console.info(encodeURI(fileUrl),fileUrl);
  //   return new Promise(async (resolve, reject) => {
  //     // console.info({headers:{"access-token": ct.access_token ,"Content-Type":"multipart/form-data" } , forceMultipart:true , timeout: 5000 });
  //     Promise.try(function() {
  //       return bhttp.get(encodeURI(fileUrl), {stream: true, timeout: 3000});
  //     }).then(async function(response) {
  //       return bhttp.post("https://open.protocol.com/tool/imagex/client_upload/", {
  //         image: response,
  //       },{headers:{"access-token": ct.access_token ,"Content-Type":"multipart/form-data" } , forceMultipart:true , timeout: 5000 });
  //     })
  //     .then(function(response) {
  //       // console.log(response.body,response);
  //       console.log("Response from hosting service:", response.body.toString());
  //       that.cacheService.set(utag,response.body);
  //       resolve(response.body);
  //     }).catch(e=>{
  //       console.error("===========",e);
  //     });
  //   });

  
  // }

    
  //   // https://developer.open-protocol.com/docs/resource/zh-CN/dop/develop/openapi/interaction-management/private-message/send-msg
    
  //   /**
  //    * 回复消息
  //    * @param entity 
  //    * @param body 
  //    * @param content 
  //    * @returns 
  //    */
  //   async replyMsg(entity:any, body:any , content:any){
  //     let msg = {
  //         "open_id": body.from_user_id,
  //         "conversation_id":body.content.conversation_short_id,
  //         "msg_id":body.content.server_message_id,
  //         "to_user_id": body.from_user_id,
  //         "scene":["im_b2b_direct_message","im_enter_direct_msg"].indexOf(body.event)>-1?body.event:undefined,
  //         "content": content,
  //     };
  //     console.info(msg,"entity---------------");
  //     let {data} = await entity.req("https://open.protocol.com/im/send/msg/",msg,undefined,{open_id:entity.id}) as any;
  //     console.info(data);
  //     return data;
  //   }

  //   async sendMsg(entity:any,msg:any){
  //     console.info(msg,"entity---------------");
  //     let {data} = await entity.req("https://open.protocol.com/im/send/msg/",msg,undefined,{open_id:entity.id}) as any;
  //   //   {
  //   //     "msg_type": 2,
  //   //     "text": {
  //   //         "text": "文本消息1"
  //   //     },
  //   //     "applet_card": {
  //   //         "card_template_id": "@9VwNxuKKBZ03MXG7M8ooWM771FjUAMW/BqhMlDebEmyyzJD7cZENrR868oDbX9xx",
  //   //         "path": "api/apiPage/apiPage",
  //   //         "query": "{\"key1\":\"val1\",\"key2\":\"val2\"}",
  //   //         "app_id": "tt3ergjdge84gdwksb"
  //   //     },
  //   //     "image": {
  //   //         "media_id": "@sssssssss"
  //   //     }
  //   // }

  //     console.info(data);
  //     return data;
  //   }


  //   // 事件管理
  //   // https://developer.open-protocol.com/docs/resource/zh-CN/dop/develop/openapi/interaction-management/private-message/private-msg-webhook

  //   // /**
  //   //  * 修改账号
  //   //  * @returns 
  //   //  */
  //   //  async updateInfoByCloud(info:any){
  //   //   let result = await Utils.req(this.baseApi+"/tiktok/v3/account/edit", info ) as any;
  //   //   return result;
  //   // }

  //   // /**
  //   //  * 检查账号是否录入
  //   //  * @param team_id 
  //   //  * @param id 
  //   //  * @returns 
  //   //  */
  //   // async checkCanCreate(team_id:string,id:string){
  //   //   let protocol = await this.repository.findOne({where:{id:id}});
  //   //   if(!protocol){
  //   //     let {order} = await this.orderService.getOrderByItem(team_id);
  //   //     let oldCount = await this.repository.count({where:{team_id:id}});
  //   //     if(oldCount>=order.limit){throw new Error("当前套餐限定"+order.limit+",请联系管理员增加账号限制");}
  //   //   }
  //   //   return true;
  //   // }
    







  // const { fork } = require('child_process');

  // const childProcesses = [];
  
  // for (let i = 0; i < 5; i++) {
  //     // 创建子进程并执行相同的脚本
  //     const childProcess = fork('path/to/your/script.js', [/* 传递给脚本的参数 */]);
  
  //     // 可以监听子进程的事件
  //     childProcess.on('message', (message) => {
  //         console.log(`Message from child ${i}:`, message);
  //     });
  
  //     childProcess.on('exit', (code) => {
  //         console.log(`Child ${i} exited with code ${code}`);
  //     });
  
  //     childProcesses.push(childProcess);
  // }
  
  // // 可以向子进程发送消息
  // childProcesses.forEach((child, index) => {
  //     child.send(`Message to child ${index}`);
  // });
  






// }




















// async updateFile(entity:any,fileUrl:string) {
//   if(fileUrl.indexOf("http")==-1){fileUrl = "https:"+fileUrl;}
//   const fs = require("fs");
//   const that = this;
//   const utag = "dyup_"+entity.id+fileUrl;
//   // return await that.getToken();
//   let cache:any = await that.cacheService.get(utag);
//   // if(cache){return cache;}

//   const Promise = require("bluebird");
//   const bhttp = require("bhttp");
//   console.info(encodeURI(fileUrl),fileUrl);
//   return new Promise(async (resolve, reject) => {
//     console.info({headers:{"access-token": entity.raw.access_token ,"Content-Type":"multipart/form-data" } , forceMultipart:true , timeout: 5000 });
//     // Promise.try(function() {
//     //   return bhttp.get(encodeURI(fileUrl), {stream: true, timeout: 3000});
//     // }).then(async function(response) {
//     //   return bhttp.post("https://open.protocol.com/tool/imagex/client_upload/", {
//     //     image: response,
//     //   },{headers:{"access-token": entity.raw.access_token ,"Content-Type":"multipart/form-data" } , forceMultipart:true , timeout: 5000 });
//     // })
//     Promise.try(async function() {
//       const response = await bhttp.get(encodeURI(fileUrl), { stream: true, timeout: 3000 });
//       return bhttp.post("https://open.protocol.com/tool/imagex/client_upload/", {
//         image: response,
//       }, {
//         headers: {
//           'access-token': entity.raw.access_token,
//           'Content-Type': 'multipart/form-data',
//         },
//         forceMultipart: true,
//         timeout: 5000,
//       });
//     })
//     .then(function(response) {
//       // console.log(response.body,response);
//       console.log("Response from hosting service:", response.body.toString());
//       that.cacheService.set(utag,response.body);
//       resolve(response.body);
//     }).catch(e=>{
//       console.error("===========",e);
//     });
//   });


// }