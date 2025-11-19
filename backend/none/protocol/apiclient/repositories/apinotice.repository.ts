import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";
import { Utils } from "../../botclient/utils";


export class ApiNoticeRepository extends Repository {
  private userDebug = console.debug;//debug("tiktok:user");

  private _defaultApiParams = {
    aid: "1988",
    cookie_enabled: true,
    screen_width: 0,
    screen_height: 0,
    browser_language: "",
    browser_platform: "",
    browser_name: "",
    browser_version: "",
    browser_online: "",
    timezone_name: "Europe/London",
  };

  constructor(private client: ApiClient ) {
    super();
  }


  async getNoticeList(scenes:string|string[]="follower",min_time?: any,is_mark_read?:boolean){

    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/fyp"
    };
    let sceneDescs = {
      "system":611,
      "all":500,//所有事件
      "follower":7,
      "comment":2,
      "liked":3,//喜欢
      "at":6,//被提及
    }

    if("string"==typeof scenes){scenes = [scenes];}
    let group_list = scenes.map(item=>{
        return {"count":20,"is_mark_read":is_mark_read?1:0,"group":sceneDescs[item],"max_time":0,"min_time":min_time||0};
    });

    let params = {
      group_list:JSON.stringify(group_list),
      history_len:2
    };

    // const url = this.client.signer.sign( `https://www.douyin.com/api/im/multi_user/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=message&history_len=4&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&uids=${uids}&webcast_language=zh-Hans` );
    const url = this.client.signer.sign( `https://www.douyin.com/api/notice/multi/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=fyp&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans` , params );
    const response = await this.client.request.send(url, headers );
    return response;

  }
 
  /**
   * 关注用户
   * @param target 
   * @returns 
   */
  async followerUser(target:any){
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/"
    };
    let params = Object.assign({
      sec_user_id:"MS4wLjABAAAAwJwGrIbEjUF8X6kfMmQFat9MlF2_uALMdUF1o_nlxqKM3zc4m99wRnmE6JdGoDxB",
      user_id:6951670821157979142,
      type:1,
    },target);
    
// https://www.douyin.com/api/commit/follow/user/?WebIdLastTime=1685964750&action_type=1&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&channel_id=0&cookie_enabled=true&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from=18&fromWeb=1&from_page=fyp&from_pre=0&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=BH&screen_height=1080&screen_width=1920&sec_user_id=MS4wLjABAAAAwJwGrIbEjUF8X6kfMmQFat9MlF2_uALMdUF1o_nlxqKM3zc4m99wRnmE6JdGoDxB&type=1&tz_name=Asia%2FShanghai&user_id=6951670821157979142&webcast_language=zh-Hans&msToken=m_SAfkV9fqLP95xPXAmm0eC1XaHrtC62VzlSqDfYVpAzztgOI17aU0KnoiPHamlRajjQ2ODKMTwFcV8Iqf2fzoCaPQQ3qfOA6XBqE14adVvZxSo5YXFNCotlGqV8mgriGucwzFgwrT-lQcCv_w==&X-Bogus=DFSzswVYpfTANG//tNWndU9WcBrc&_signature=_02B4Z6wo00001ocCJOQAAIDChwIk5i1ah6KHAiBAAMRP92
    const url = this.client.signer.sign( `https://www.douyin.com/api/commit/follow/user/?WebIdLastTime=1685964750&action_type=1&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&channel_id=0&cookie_enabled=true&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from=18&fromWeb=1&from_page=fyp&from_pre=0&history_len=2&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans` , params );
    const response = await this.client.request.send(url, headers );
    return response;
  
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 
// https://www.douyin.com/api/comment/publish/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&aweme_id=7003347566930726150&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=video&history_len=3&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=https%3A%2F%2Fwww.douyin.com%2Fbusiness-suite%2Fcomments%3Fcomment_id%3D7003347782526944001%26from%3Dhomepage%26video_id%3D7003347566930726150&region=BH&reply_id=7003347782526944001&reply_to_reply_id=0&root_referer=https%3A%2F%2Fwww.douyin.com%2Fbusiness-suite%2Fcomments%3Fcomment_id%3D7003347782526944001%26from%3Dhomepage%26video_id%3D7003347566930726150&screen_height=1080&screen_width=1920&text=hi~%40wter24%20&text_extra=%5B%7B%22user_id%22%3A%226950230275910517765%22%2C%22type%22%3A3%2C%22start%22%3A3%2C%22end%22%3A10%7D%5D&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=upu2omMtqSj6c4LMK3Hzg4PLHax7SQ6PKv_w2Ua7v2lqz3w5cg7vgs-JzDGJbxEv8fvFl6CfJ_EmP2NeZJARL5l2IZlyMr3YFHg04bYsPyGidVhAUdXlomrwoFbuLGCMqWBy6VI=&X-Bogus=DFSzswVLFfzANcLLtNd0xU9WcBnr&_signature=_02B4Z6wo00001QFyBkQAAIDBAXIGR-Ds-G0BcgLAACXb29

  /**
   * 回复评论
   * @param target 
   * @returns 
   */
   async commentReply(target:any){
    const headers = {
        ...this.client.state.defaultHeaders,
        "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
        referer: "https://www.douyin.com/"
    };
    let params = {

    };
    let body = Object.assign({
      aweme_id:"",
      // reply_id:0,//"7003347782526944001",
      // reply_to_reply_id:0,
      comment_send_celltime:72411,
      comment_video_celltime:-34836,
      one_level_comment_rank:-1,
      paste_edit_method:"non_paste",
      text: "hello~", 
      text_extra: "",//JSON.stringify([{"user_id":"6950230275910517765","type":3,"start":3,"end":10}])
    },target);
    
    const url = this.client.signer.sign( `https://www.douyin.com/aweme/v1/web/comment/publish?device_platform=webapp&aid=6383&channel=channel_pc_web&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh&browser_platform=Win32&browser_name=Chrome&browser_version=131.0.0.0&browser_online=true&engine_name=Blink&engine_version=131.0.0.0&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&webid=7441112481865434635&app_name=aweme&enter_from=recommend&previous_page=recommend&round_trip_time=200` , params , undefined,[0, 1, 8] );
    const response = await this.client.request.send(url, headers,"post",undefined, body );
    return response;
  
  }

    /**
   * 删除评论
   * @param target 
   * @returns 
   */
     async commentDelete(target:any){
      const headers = {
          ...this.client.state.defaultHeaders,
          referer: "https://www.douyin.com/"
      };
      let params = Object.assign({
        cid:"7003347782526944001",
      },target);
      
      const url = this.client.signer.sign( `https://www.douyin.com/aweme/v1/web/comment/delete/?app_name=aweme&enter_from=discover&previous_page=discover&device_platform=webapp&aid=6383&channel=channel_pc_web&pc_client_type=1&pc_libra_divert=Windows&update_version_code=170400&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh&browser_platform=Win32&browser_name=Chrome&browser_version=131.0.0.0&browser_online=true&engine_name=Blink&engine_version=131.0.0.0&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7441112481865434635&uifid=c4a29131752d59acb78af076c3dbdd52744118e38e80b4b96439ef1e20799db0016dfa2ff14641e67add83c3e2fd4f7d9cfedbbe2dc05ad2cd3295d82e9b414ca104bbe0a3d1acd6cb59ffe4fdcc76b3c60e80773def549bc50a1fb7e3c1e79a57c1da5feadeb261113a139bf276fbd38668bf39623ebd11694ab5bb0c309ef18ecbe067cade047969bf2845a0e9e215be04e5bbdc670832118bda67bab4a558` , params );
      const response = await this.client.request.send(url, headers,"post"  );
      return response;
    
    }

        /**
   * 删除评论
   * @param target 
   * @returns 
   */
    async commentLike(target:any){
        const headers = {
            ...this.client.state.defaultHeaders,
            referer: "https://www.douyin.com/"
        };
        let params = Object.assign({
          aweme_id:"7003347566930726150",
          cid: "",
          digg_type: 2
        },target);
        
        const url = this.client.signer.sign( `https://www.douyin.com/aweme/v1/web/comment/digg/?app_name=aweme&enter_from=discover&previous_page=discover&device_platform=webapp&aid=6383&channel=channel_pc_web&pc_client_type=1&pc_libra_divert=Windows&update_version_code=170400&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh&browser_platform=Win32&browser_name=Chrome&browser_version=131.0.0.0&browser_online=true&engine_name=Blink&engine_version=131.0.0.0&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7441112481865434635&uifid=c4a29131752d59acb78af076c3dbdd52744118e38e80b4b96439ef1e20799db0016dfa2ff14641e67add83c3e2fd4f7d9cfedbbe2dc05ad2cd3295d82e9b414ca104bbe0a3d1acd6cb59ffe4fdcc76b3c60e80773def549bc50a1fb7e3c1e79a57c1da5feadeb261113a139bf276fbd38668bf39623ebd11694ab5bb0c309ef18ecbe067cade047969bf2845a0e9e215be04e5bbdc670832118bda67bab4a558` , params );
        const response = await this.client.request.send(url, headers,"post" );
        return response;
  
  }
  
  

// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // 粉丝列表
// // https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=67&screen_height=1080&screen_width=1920&secUid=MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=U7ik1kk9D60L8vKxGyCdVtameivieRvODugBwfhJd4JztKGNuQvaS6UAAAfc2n8ei1UV8-AbaY6IyuF271Ey8sKJD9H0AC_-nltCEyB3sdqNB2ERsmQS3wSowg3Q0Np883AhPXklLO6bOTzI&X-Bogus=DFSzswVuurUANx/ItupvQ09WcBnf&_signature=_02B4Z6wo00001UcX8IgAAIDBRxfwiVpyFzVHF.QAADS17d
// //关注
// // https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=21&screen_height=1080&screen_width=1920&secUid=MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=mK6b-kMvM2o7Vsev1s8PJp_OpvZ3jdzqr5aqZRATh1kRxQPDNdCAQdOg4FwgOQwI4jlwmSVUa7al53YtiX2mV_-fTeoaaSuv_jz-ID_v2_4mrn6y49G3NcZWuN3jnQfwdbn4B1yeZxGZcpfA&X-Bogus=DFSzswVut9zANx/ItupvNz9WcBjm&_signature=_02B4Z6wo000018S9bxQAAIDDxL1vFOnBXWPEvWuAAJRkdb
// // 推荐
// // https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=151&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=AJtvC7NPg72F3ob9Uwx_Jm3XWXzIakuwkABXOBBc1K9to95BSVMcJfeI4CXcLFAFsWo40UdLeil9TMCNCZ9uImgGQWsb9zy3HSDfauMmGb6B6qY6HW_yclFKK1jp0P7_RTEmyLC7WfWXlhS4&X-Bogus=DFSzswVulGkANx/Itupwk09WcBr6&_signature=_02B4Z6wo00001.R0HOQAAIDD9HQc5gcbwgP0dBhAAJhy74
// // 好友
// // https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=150&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=AJtvC7NPg72F3ob9Uwx_Jm3XWXzIakuwkABXOBBc1K9to95BSVMcJfeI4CXcLFAFsWo40UdLeil9TMCNCZ9uImgGQWsb9zy3HSDfauMmGb6B6qY6HW_yclFKK1jp0P7_RTEmyLC7WfWXlhS4&X-Bogus=DFSzswVuDgzANx/Itupwg09WcBJL&_signature=_02B4Z6wo00001T2Ce2AAAIDBPYJ7YOKZHMU9gn.AACoXd7

// async listUser(e:any,scene:string="follower"){
//   const headers = {
//       ...this.client.state.defaultHeaders,
//       referer: "https://www.douyin.com/"
//   };
//   let sceneDescs = {
//     "follower":67,
//     "following":21,
//     "recommand":151,
//     "friend":150,
//   }
//   // let minCursor=0,sec_uid="MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh"; keyword=xin&
//   let { minCursor, secUid } = e;
//   const url = this.client.signer.sign( `https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=user&history_len=3&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=${minCursor}&os=windows&priority_region=RO&referer=&region=US&scene=${sceneDescs[scene]}&screen_height=1080&screen_width=1920&secUid=${secUid}&tz_name=Asia/Shanghai&webcast_language=zh-Hans` );
//   console.info(url,"url--------------");
//   const response = await this.client.request.send(url, headers );
//   return Utils.ObjCamelToSnake(response);

// }


//   //////////////////////////////////////////////////////////////////////////////////////////////////


//   public async userInfo(
//     uid: string,
//     // secUid: string,
//     // count: number,
//     // cursor: number
//   ) {
//     const deviceId = this.client.helper.generateDeviceId();

//     let url = new URL(
//       `https://www.douyin.com/api/user/detail/?${qs.stringify({
//         ...this._defaultApiParams,
//         // secUid: secUid,
//         WebIdLastTime: "1685964750",
//         aid: 1988,
//         app_language: "zh-Hans",
//         app_name: "tiktok_web",
//         browser_language: "zh-CN",
//         browser_name: "Mozilla",
//         browser_online: true,
//         browser_platform: "Win32",
//         browser_version: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
//         channel: "tiktok_web",
//         cookie_enabled: true,
//         device_id: "7241163383020848646",
//         device_platform: "web_pc",
//         focus_state: true,
//         from_page: "user",
//         history_len: 3,
//         is_fullscreen: false,
//         is_page_visible: true,
//         os: "windows",
//         priority_region: "RO",
//         referer: "",
//         region: "US",
//         screen_height: 1080,
//         screen_width: 1920,
//         tz_name: "Asia/Shanghai",
//         webcast_language: "zh-Hans",
//         language: 'zh-Hans', 
//         userId: '6948680389724570630',
//         msToken: "PvJEnezF7dR3hz8pJX95bnhjZ_GOeJCVmxUaAs9lQaIPzx70dr1ThsHNBTYnyCIJxh7vaWVDeOfISsTghiSS5Y-jz3j8CnMHDBHRv5M-LYNv7IV1ZNamiKM0i01TIK0L0B_PcEB66dCmw2-XxsaUyw=="
//       })}`
//     );

//     const signature = this.client.signer.sign(url.toString());

//     url.searchParams.append("_signature", signature);

//     this.userDebug(`Generated signed url ${url.toString()}`);

//     const bogus = this.client.signer.xbogus(url.searchParams.toString());

//     url.searchParams.append("X-bogus", bogus);

//     this.userDebug(`Generated bogus url ${url}`);

//     const xTTParams = this.client.signer.xttparams(url.searchParams.toString());
//     console.info(url.toString());
//     const response = await this.client.request.send(url.toString(), {
//       ...this.client.state.defaultHeaders,
//       "x-tt-params": xTTParams,
//     });

//     return response;

//   }

//   /**
//    * Get user videos
//    *
//    * @param id
//    * @param secUid
//    * @param count
//    * @param cursor
//    * @returns
//    */
//   public async videos(
//     id: number,
//     secUid: string,
//     count: number,
//     cursor: number
//   ) {
//     // const deviceId = this.client.helper.generateDeviceId();

//     // let url = new URL(
//     //   `https://m.tiktok.com/api/post/item_list/?${qs.stringify({
//     //     ...this._defaultApiParams,
//     //     id: id,
//     //     secUid: secUid,
//     //     count: count,
//     //     cursor: cursor,
//     //     device_id: deviceId,
//     //     history_len: this.client.helper.getRandomInt(1, 5),
//     //   })}`
//     // );

//     // const signature = this.client.signer.sign(url.toString());

//     // url.searchParams.append("_signature", signature);

//     // this.userDebug(`Generated signed url ${url.toString()}`);

//     // const bogus = this.client.signer.bogus(url.searchParams.toString());

//     // url.searchParams.append("X-bogus", bogus);

//     // this.userDebug(`Generated bogus url ${url}`);

//     const xTTParams = this.client.signer.xttparams(
//       qs.stringify({
//         ...this._defaultApiParams,
//         secUid: secUid,
//         cursor: cursor,
//         count: count,
//         is_encryption: 1,
//       })
//     );

//     const response = await this.client.request.send(
//       "https://www.douyin.com/api/post/item_list/?aid=1988&app_language=en&app_name=tiktok_web&battery_info=1&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F107.0.0.0%20Safari%2F537.36%20Edg%2F107.0.1418.35&channel=tiktok_web&cookie_enabled=true&device_id=7002566096994190854&device_platform=web_pc&focus_state=false&from_page=user&history_len=3&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=https%3A%2F%2Fexportcomments.com%2F&region=RO&root_referer=https%3A%2F%2Fexportcomments.com%2F&screen_height=1440&screen_width=2560&tz_name=Europe%2FBucharest&verifyFp=verify_lacphy8d_z2ux9idt_xdmu_4gKb_9nng_NNTTTvsFS8ao&webcast_language=en&msToken=7UfjxOYL5mVC8QFOKQRhmLR3pCjoxewuwxtfFIcPweqC05Q6C_qjW-5Ba6_fE5-fkZc0wkLSWaaesA4CZ0LAqRrXSL8b88jGvEjbZPwLIPnHeyQq6VifzyKf5oGCQNw_W4Xq12Q-8KCuyiKGLOw=&X-Bogus=DFSzswVL-XGANHVWS0OnS2XyYJUm&_signature=_02B4Z6wo00001Pf0DlwAAIDB1FUg8jgaqOz39ArAAF6Z72",
//       {
//         ...this.client.state.defaultHeaders,
//         "x-tt-params": xTTParams,
//       }
//     );

//     const responseBody = JSON.parse(response);

//     // if (responseBody.statusCode === 0 && responseBody.itemList) {
//     //   return responseBody;
//     // }
//     return responseBody;

//     // throw new GenericError("Generic API error happened.");
//   }

//   /**
//    * Get user liked videos
//    *
//    * @param id
//    * @param secUid
//    * @param count
//    * @param cursor
//    * @returns
//    */
//   public async liked(
//     id: number,
//     secUid: string,
//     count: number,
//     cursor: number
//   ) {
//     const deviceId = this.client.helper.generateDeviceId();

//     let url = new URL(
//       `https://m.tiktok.com/api/favorite/item_list/?${qs.stringify({
//         ...this._defaultApiParams,
//         id: id,
//         secUid: secUid,
//         count: count,
//         cursor: cursor,
//         device_id: deviceId,
//         history_len: this.client.helper.getRandomInt(1, 5),
//       })}`
//     );

//     const signature = this.client.signer.sign(url.toString());

//     url.searchParams.append("_signature", signature);

//     this.userDebug(`Generated signed url ${url.toString()}`);

//     const bogus = this.client.signer.xbogus(url.searchParams.toString());

//     url.searchParams.append("X-bogus", bogus);

//     this.userDebug(`Generated bogus url ${url}`);

//     const xTTParams = this.client.signer.xttparams(url.searchParams.toString());

//     const response = await this.client.request.send(url.toString(), {
//       ...this.client.state.defaultHeaders,
//       "x-tt-params": xTTParams,
//     });

//     const responseBody = JSON.parse(response.body);

//     if (responseBody.statusCode === 0 && responseBody.itemList) {
//       return responseBody;
//     }

//   }





















//   /**
//    * Parse TikTok response and return sigi_state
//    *
//    * @param content
//    * @returns
//    */
//   private async parseHtmlContent(content: string) {
//     if (content.includes("SIGI_STATE")) {
//       const rawVideoMetadata = content
//         .split('<script id="SIGI_STATE" type="application/json">')[1]
//         .split("</script>")[0];

//       return {
//         sigiState: true,
//         data: rawVideoMetadata,
//       };
//     }

//     if (content.includes("__UNIVERSAL_DATA_FOR_REHYDRATION__")) {
//       const rawVideoMetadata = content
//         .split(
//           '<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">'
//         )[1]
//         .split("</script>")[0];

//       return {
//         sigiState: false,
//         data: rawVideoMetadata,
//       };
//     }
//   }

}
