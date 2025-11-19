import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";
import { Utils } from "../../botclient/utils";


export class UserRepository extends Repository {
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

  /**
   * @returns
   */
  public async info(
    username: string,
    tolower?: boolean,
  ): Promise<any> {
    let user = username.match(/[A-Za-z]/) ? await this.getUserInfoBySecUid(username) : await this.getUserInfoByUid(username);
    console.info(user,"user-----------");
    return {userInfo:user};
  }


  async getUserInfoByUid(
    uid: string,
  ) {
    let params = {
        // "language": "zh-Hant-TW",
        // "appType": "t",
        // "uniqueId": unique_id,
        // "secUid": ""
    };
    const urlNew = this.client.signer.sign(`https://imdesktop.douyin.com/aweme/v1/web/user/profile/scene/?aid=339757&user_id=${uid}&scene=5`,params);
    
    const headers = {
        ...this.client.state.defaultHeaders,
        "content-type": "application/x-www-form-urlencoded",
        referer: "https://imdesktop.douyin.com"
    };
    
    const response = await this.client.request.send(urlNew,headers);
    return response;
  }

  async getUserInfoBySecUid(
    sec_uid: string,
  ) {
    let params = {
        // "language": "zh-Hant-TW",
        // "appType": "t",
        // "uniqueId": unique_id,
        // "secUid": ""
    };
    const urlNew = this.client.signer.sign(`https://imdesktop.douyin.com/aweme/v1/web/user/profile/other/?device_id=${Math.floor(Math.random()*1e6)}&version_code=170400&version_name=17.4.0&aid=6383&channel=channel_pc_web&sec_user_id=${sec_uid}`,params);
    
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com",
    };
    
    const response = await this.client.request.send(urlNew,headers);
    return response;
  }


    /**
   * Get user videos
   *
   * @param secUid
   * @param count
   * @param cursor
   * @returns
   */
     public async getUserInfo(
      unique_id: string,
    ) {
      let params = {
          "language": "zh-Hant-TW",
          "appType": "t",
          "uniqueId": unique_id,
          "secUid": ""
      };
      const urlNew = this.client.signer.sign("https://www.douyin.com/api/user/detail/?WebIdLastTime=0&aid=1988&appType=t&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F129.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&data_collection_enabled=true&device_id=7417310230043182597&device_platform=web_pc&focus_state=true&from_page=user&history_len=4&is_fullscreen=false&is_page_visible=true&language=zh-Hant-TW&odinId=7028939348067795974&os=windows&priority_region=MY&referer=&region=MY&screen_height=1080&screen_width=1920&secUid=&tz_name=Asia%2FShanghai&uniqueId=alby_firdaus1&user_is_login=true&webcast_language=zh-Hant-TW",params);
      
      const headers = {
          ...this.client.state.defaultHeaders,
          referer: "https://www.douyin.com/"
          // "x-tt-params": xTTParams,
      };
      
      const response = await this.client.request.send(urlNew,headers);
      return response;
    }


  /**
   * Get user videos
   *
   * @param secUid
   * @param count
   * @param cursor
   * @returns
   */
   public async getUserPostList(
    secUid: string,
    count: number,
    cursor: number
  ) {
    let params = {
        WebIdLastTime:Math.floor(Date.now() / 1000),
        "secUid": secUid,
      //   "aid": 1988,
        "count": count||30,
        "cursor": cursor||"0",
      //   "region": "US",
      //   "language": "zh-Hant-TW",
      //   "coverFormat": 2,
      //   "post_item_list_request_type": 0,
      //   "needPinnedItemIds": true
    };
    const urlNew = this.client.signer.sign("https://www.douyin.com/api/post/item_list/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F129.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=35&coverFormat=2&cursor=0&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&focus_state=true&from_page=user&history_len=2&is_fullscreen=false&is_page_visible=true&language=zh-Hant-TW&odinId=7028939348067795974&os=windows&priority_region=MY&referer=&region=BR&screen_height=1080&screen_width=1920&secUid=MS4wLjABAAAAHomAlK8CSwmVnkUVAvwTP1NEcBc4ZvryiImawF54zOgvUaXlLROFWLwITKZw5T7D&tz_name=America%2FLos_Angeles&user_is_login=true&verifyFp=verify_m1tfkkgj_mVR7lHcM_4XcS_4VjL_980D_2drZO9DEFd3u&webcast_language=zh-Hant-TW&msToken=BWhlQzVBBChu4Ro4SZReaJNkVP4dlXyF9dS7y9kfJitM6qCU3So1rdN_CB5yH0wZ-Q56dKQwNkHLyhGeoNZFhs9mGVLEUA1gb5O1eV-cjIpuCReqXiUBrHMDzKREh-L-1Uy7Jj56Tcl_RXYQTwxuF1Ay7A==",params);
    console.info(urlNew,"urlNew--------------");
    
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/"
        // "x-tt-params": xTTParams,
    };
    
    const response = await this.client.request.send(urlNew,headers);
    return response;

    // let params = {
    //   'WebIdLastTime': '1727626359',
    //   'aid': '1988',
    //   'app_language': 'zh-Hant-TW',
    //   'app_name': 'tiktok_web',
    //   'browser_language': 'zh',
    //   'browser_name': 'Mozilla',
    //   'browser_online': 'true',
    //   'browser_platform': 'Win32',
    //   'browser_version': '5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F129.0.0.0%20Safari%2F537.36',
    //   'channel': 'tiktok_web',
    //   'cookie_enabled': 'true',
    //   'count': '30',
    //   'coverFormat': '2',
    //   'cursor': cursor||"0",
    //   'data_collection_enabled': 'false',
    //   'device_id': '7420098649458017797',
    //   'device_platform': 'web_pc',
    //   'focus_state': 'true',
    //   'from_page': 'user',
    //   'history_len': '2',
    //   'is_fullscreen': 'false',
    //   'is_page_visible': 'true',
    //   'language': 'zh-Hant-TW',
    //   'needPinnedItemIds': 'true',
    //   'odinId': '7420098636190942213',
    //   'os': 'windows',
    //   'post_item_list_request_type': '0',
    //   'priority_region': '',
    //   'referer': '',
    //   'region': 'US',
    //   'screen_height': '1080',
    //   'screen_width': '1920',
    //   'secUid': secUid||'MS4wLjABAAAAHomAlK8CSwmVnkUVAvwTP1NEcBc4ZvryiImawF54zOgvUaXlLROFWLwITKZw5T7D',
    //   'tz_name': 'America%2FLos_Angeles',
    //   'user_is_login': 'false',
    //   'webcast_language': 'zh-Hant-TW'
    // }

    // const headers = {
    //     ...this.client.state.defaultHeaders,
    //     referer: "https://www.douyin.com/"
    //     // "x-tt-params": xTTParams,
    // };

    // const response = await this.client.request.send('https://www.douyin.com/api/repost/item_list/',headers,"get",params);
    // return response;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* @param username
   * @returns
   */
  public async self(): Promise<any> {
    // const url = `https://www.douyin.com/messages?lang=en-US`;
    // const { data: response, headers } = await this.client.request.send(url, this.client.state.defaultHeaders, undefined, undefined, undefined, "text", true);
    // return response;
    // const url = `https://www.douyin.com/api/ba/business/suite/permission/list/`;
    // const { data: response, headers } = await this.client.request.send(url, this.client.state.defaultHeaders, undefined, undefined, undefined, "text", true);
    // return response;
    fetch("https://www.douyin.com/api/user/detail/self/?lang=en&language=en&msToken=qnRTl5Lol1ITdFnO0K32a9kI2Vyc4aEgUXmMLMNf6I8UT_x_g1XKyALI8blsDoP22VNXiJKeHX_eRJhVhhDAWij2oGhohlgzsM3CKVIHr_qUB_eBDJXwXGmZ9jCVYBtzXbX1rJpISLYLnMk7S5e3O9J7&X-Bogus=DFSzswSOWgkANaI6tfg3UQLZzYj5&_signature=_02B4Z6wo00001IFEPQgAAIDBUylFyoVtZwiBRDGAAEbp65", {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-secsdk-csrf-token": "000100000001269348aed421353556ce7248be227842b8b3941d01b92799789d7a2b2b838d1117ea030291f19e06",
        "cookie": "passport_fe_beating_status=true; store-idc=alisg; tt-target-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tiktok_webapp_theme=light; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; store-country-code-src=uid; store-country-code=cn; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; perf_feed_cache={%22expireTimestamp%22:1723345200000%2C%22itemIds%22:[%227400710354789092616%22%2C%227369782468855008519%22%2C%227398352637172649223%22]}; delay_guest_mode_vid=0; csrf_session_id=dcf9f2cae7a4ee973e6aca31f07a4163; csrfToken=aVcQrIwG-kjLJ6TE1HskDPP20ro2VzEsyk3g; odin_tt=f673eb55dbb5ee50498abc276b6c32be6d0033c07d9aa675da98279bf7429354b898b52b4459e65d562e887835ee36dc08e74cadc3f556227af68315d76384e10513ad6827aa50ddfda05f1a0e838efe; tiktok_webapp_theme_source=light; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1723187061%7C15ff2882d1d7f001f6737fa12a073654be01af7837b76794ddb8f1cb04b5fd44; ak_bmsc=BE58F56680EA0F3C2B5A5CFA8B52860E~000000000000000000000000000000~YAAQHjvUF587VQWRAQAAiRJQNhij3hhxwO/u9xr5waY0WjbYaU19+NOYTmVp26GmpgW76U1Zru4wwke5MYR919A7NF3bKPZjZvvklGG0JFOKUwNSQ3/kL+HA2IRh82PLVphSa0kzs9eD6ufU7QYb4n3f9hDOAPLiADDcuN36/5hrx+OP6A1YrsI/kyjLagX7td2E32aoWF+nxYr2DgLGKCEoBvO7Osz7x6JQuhxy969q9Sw7P0o9LeaO39sEZ5oy8hBHApvglkjHPRhlOE4AO1bOVzb2HOyP8ht0RwCw/6NYdMvmVBMfPv6wyxK7vJ8oXi0QI3xrZN0wE5oIrCvIpXiNr9suRhco0vpKbCEHNes5UxNrwMZV8PBWMFrp31dFaUJbXtxMg+2X",
        "Referer": "https://www.douyin.com/business-suite/messages?from=homepage&lang=en",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    });
      
  }



  async getImProfiles(uids){
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/message"
    };

    // const url = this.client.signer.sign( `https://www.douyin.com/api/im/multi_user/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=message&history_len=4&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&uids=${uids}&webcast_language=zh-Hans` );
    let url = `https://www.douyin.com/tiktok/v1/im/user/profile/?aid=1988`
    const response = await this.client.request.send(url, headers,"GET",{user_ids: Array.isArray(uids)?uids:[uids]} );
    // return response;
    return response.users;
    
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * 获取用户自己的身份信息
   * {
      extra: {
        fatal_item_ids: [],
        logid: '2023120804343483F11C7D892AB80583B8',
        now: 1702010075000
      },
      log_pb: { impr_id: '2023120804343483F11C7D892AB80583B8' },
      status_code: 0,
      status_msg: '',
      user: {
        avatar_larger: { uri: '' },
        avatar_medium: { uri: '' },
        avatar_thumb: { uri: '' },
        bulk_upload_enable: false,
        comment_setting: 0,
        duet_setting: 0,
        geofencing_enabled: false,
        geofencing_regions: [ '' ],
        longvideo_permission: true,
        max_video_duration_in_sec: 600,
        nickname: 'starpower060',
        playlist_enable: false,
        private_account: false,
        schedule_enable: true,
        schedule_storage: false,
        sound_exemption: { longvideo: false },
        stitch_setting: 0,
        uid: '6948680389724570630',
        unique_id: 'starpower060'
      }
    }
   * @returns 
   */
  async getCreatorUserInfo(toSnake?:boolean){
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/"
    };

    // const url = this.client.signer.sign( "https://www.douyin.com/api/v1/user/profile/upload/?aid=1988" );
    const url = this.client.signer.sign( "https://www.douyin.com/api/user/detail/self/?aid=1988" );

    // const headers = {
    //     ...this.client.state.defaultHeaders,
    //     referer: "https://www.douyin.com/messages?lang=zh-Hans&scene=business"
    // };

    // const url = this.client.signer.sign( `https://www.douyin.com/passport/web/account/info/?WebIdLastTime=1702020339&aid=1459&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=message&history_len=3&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=US&referer=&region=US&root_referer=https%3A%2F%2Fwww.douyin.com%2Fexplore&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&verifyFp=verify_lpway9zj_GefW3mqA_cdsdadadad&webcast_language=zh-Hans` );
    const response = await this.client.request.send(url, headers );
    let userInfo = response?.userInfo;
    return toSnake?Utils.ObjCamelToSnake(userInfo):userInfo;

  }

    // https://www.douyin.com/api/im/multi_user/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=message&history_len=4&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&uids=7028939348067795974&webcast_language=zh-Hans&msToken=SH9_zEeivtzxXUyt29DXMMF0LiLbv8hcAqihjI-YHh7QlReb-bWOJ7q59s02kAE4TCyQvT3nUhTq05KVRdZajZEG7zPWyBxgg55QgBVkleScllpaCDJZp1ZJ6f4Ln79TLi3xRndoTPTWYNtw&X-Bogus=DFSzswSOqJiANaI6tuyMct9WcBJE&_signature=_02B4Z6wo00001K0ihUgAAIDArSKFSEE7SXitIoHAAE4277

  async getImUsers(uids: string[]|string){
    if("string"!=typeof uids){uids = uids.join(";");}
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/message"
    };

    const url = this.client.signer.sign( `https://www.douyin.com/api/im/multi_user/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=message&history_len=4&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&uids=${uids}&webcast_language=zh-Hans` );
    const response = await this.client.request.send(url, headers );
    return response;

  }

///////////////////////////////////////////////////////////////////////////////////////////////////////
// 粉丝列表
// https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=67&screen_height=1080&screen_width=1920&secUid=MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=U7ik1kk9D60L8vKxGyCdVtameivieRvODugBwfhJd4JztKGNuQvaS6UAAAfc2n8ei1UV8-AbaY6IyuF271Ey8sKJD9H0AC_-nltCEyB3sdqNB2ERsmQS3wSowg3Q0Np883AhPXklLO6bOTzI&X-Bogus=DFSzswVuurUANx/ItupvQ09WcBnf&_signature=_02B4Z6wo00001UcX8IgAAIDBRxfwiVpyFzVHF.QAADS17d
//关注
// https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=21&screen_height=1080&screen_width=1920&secUid=MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=mK6b-kMvM2o7Vsev1s8PJp_OpvZ3jdzqr5aqZRATh1kRxQPDNdCAQdOg4FwgOQwI4jlwmSVUa7al53YtiX2mV_-fTeoaaSuv_jz-ID_v2_4mrn6y49G3NcZWuN3jnQfwdbn4B1yeZxGZcpfA&X-Bogus=DFSzswVut9zANx/ItupvNz9WcBjm&_signature=_02B4Z6wo000018S9bxQAAIDDxL1vFOnBXWPEvWuAAJRkdb
// 推荐
// https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=151&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=AJtvC7NPg72F3ob9Uwx_Jm3XWXzIakuwkABXOBBc1K9to95BSVMcJfeI4CXcLFAFsWo40UdLeil9TMCNCZ9uImgGQWsb9zy3HSDfauMmGb6B6qY6HW_yclFKK1jp0P7_RTEmyLC7WfWXlhS4&X-Bogus=DFSzswVulGkANx/Itupwk09WcBr6&_signature=_02B4Z6wo00001.R0HOQAAIDD9HQc5gcbwgP0dBhAAJhy74
// 好友
// https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=0&os=windows&priority_region=RO&referer=&region=US&scene=150&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=AJtvC7NPg72F3ob9Uwx_Jm3XWXzIakuwkABXOBBc1K9to95BSVMcJfeI4CXcLFAFsWo40UdLeil9TMCNCZ9uImgGQWsb9zy3HSDfauMmGb6B6qY6HW_yclFKK1jp0P7_RTEmyLC7WfWXlhS4&X-Bogus=DFSzswVuDgzANx/Itupwg09WcBJL&_signature=_02B4Z6wo00001T2Ce2AAAIDBPYJ7YOKZHMU9gn.AACoXd7

async listUser(e:any,scene:string="follower"){
  const headers = {
      ...this.client.state.defaultHeaders,
      referer: "https://www.douyin.com/"
  };
  let sceneDescs = {
    "follower":67,
    "following":21,
    "recommand":151,
    "friend":150,
  }
  // let minCursor=0,sec_uid="MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh";
  let { minCursor, secUid } = e;
  const url = this.client.signer.sign( `https://www.douyin.com/api/user/list/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&channel=tiktok_web&cookie_enabled=true&count=30&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=user&history_len=3&is_fullscreen=false&is_page_visible=true&maxCursor=0&minCursor=${minCursor}&os=windows&priority_region=RO&referer=&region=US&scene=${sceneDescs[scene]}&screen_height=1080&screen_width=1920&secUid=${secUid}&tz_name=Asia/Shanghai&webcast_language=zh-Hans` );
  const response = await this.client.request.send(url, headers );
  console.info(response,"response---------");
  return Utils.ObjCamelToSnake(response);

}

//搜索 
// https://www.douyin.com/api/search/user/full/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&channel=tiktok_web&cookie_enabled=true&cursor=0&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=search&history_len=9&is_fullscreen=false&is_page_visible=true&keyword=nsioo007&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&tz_name=Asia/Shanghai&verifyFp=verify_lq16gk0u_UiHO7CnO_GQOb_4DmO_A3y6_nEs9ZkLeSh7e&web_search_code={"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}}&webcast_language=zh-Hans&msToken=x4LW_bfl99YsJJEMGUOgSwx4zADU8EakfH0oRjn5d-90dhfU437bM0KjJ3mRvYw9M9k59hsU1Nye1A8AHPD7UWcVulFngLWEJ_N33_8RdOIr05ZnW_2iOAoXqF4gZ3noH7rdxe1va1D_9lWR&X-Bogus=DFSzswVYRLvANG//tu/QD09WcBnA&_signature=_02B4Z6wo00001lkPxfAAAIDCWQ.F84-vrXpZD8FAAPNDd7
// https://www.douyin.com/api/search/user/full/?WebIdLastTime=1685964750&aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36&channel=tiktok_web&cookie_enabled=true&cursor=10&device_id=7241163383020848646&device_platform=web_pc&focus_state=false&from_page=search&history_len=9&is_fullscreen=false&is_page_visible=true&keyword=nsioo007&os=windows&priority_region=RO&referer=&region=US&screen_height=1080&screen_width=1920&search_id=2023121118011974E473BF8A65B3115535&tz_name=Asia/Shanghai&verifyFp=verify_lq16gk0u_UiHO7CnO_GQOb_4DmO_A3y6_nEs9ZkLeSh7e&web_search_code={"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}}&webcast_language=zh-Hans&msToken=W174iyEAWKZqObST9AWf9HAZ_G3A4DRgMWDfK1z21zA20L8CsCLTJ_Cu2-f48TmrAVdY3EIpUNUs23u_X0AZ_8Y61Dfaux2Bd0c5VEIH1OkflF_mO9HTKL0kZx5hUtSyQd1WOj1v7oCg0DCB&X-Bogus=DFSzswVuRg2AN9oEtu/Qnt9WcBnh&_signature=_02B4Z6wo00001K6Yv0gAAIDArpi.SNnTm1SumLvAAE7W15
async searchUser(e:any){
  const headers = {
      ...this.client.state.defaultHeaders,
      referer: "https://www.douyin.com/"
  };

  const url = this.client.signer.sign( `https://www.douyin.com/api/search/user/full/?&search_id=${e.search_id}&web_search_code={"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}}` );

  // const headers = {
  //     ...this.client.state.defaultHeaders,
  //     referer: "https://www.douyin.com/messages?lang=zh-Hans&scene=business"
  // };

  // const url = this.client.signer.sign( `https://www.douyin.com/passport/web/account/info/?WebIdLastTime=1702020339&aid=1459&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F119.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=${this.client.helper.generateDeviceId()}&device_platform=web_pc&focus_state=true&from_page=message&history_len=3&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=US&referer=&region=US&root_referer=https%3A%2F%2Fwww.douyin.com%2Fexplore&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&verifyFp=verify_lpway9zj_GefW3mqA_cdsdadadad&webcast_language=zh-Hans` );
  const response = await this.client.request.send(url, headers );
  return Utils.ObjCamelToSnake(response);

}

  //////////////////////////////////////////////////////////////////////////////////////////////////


  public async userInfo(
    uid: string,
    // secUid: string,
    // count: number,
    // cursor: number
  ) {
    const deviceId = this.client.helper.generateDeviceId();

    let url = new URL(
      `https://www.douyin.com/api/user/detail/?${qs.stringify({
        ...this._defaultApiParams,
        // secUid: secUid,
        WebIdLastTime: "1685964750",
        aid: 1988,
        app_language: "zh-Hans",
        app_name: "tiktok_web",
        browser_language: "zh-CN",
        browser_name: "Mozilla",
        browser_online: true,
        browser_platform: "Win32",
        browser_version: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        channel: "tiktok_web",
        cookie_enabled: true,
        device_id: "7241163383020848646",
        device_platform: "web_pc",
        focus_state: true,
        from_page: "user",
        history_len: 3,
        is_fullscreen: false,
        is_page_visible: true,
        os: "windows",
        priority_region: "RO",
        referer: "",
        region: "US",
        screen_height: 1080,
        screen_width: 1920,
        tz_name: "Asia/Shanghai",
        webcast_language: "zh-Hans",
        language: 'zh-Hans', 
        userId: '6948680389724570630',
        msToken: "PvJEnezF7dR3hz8pJX95bnhjZ_GOeJCVmxUaAs9lQaIPzx70dr1ThsHNBTYnyCIJxh7vaWVDeOfISsTghiSS5Y-jz3j8CnMHDBHRv5M-LYNv7IV1ZNamiKM0i01TIK0L0B_PcEB66dCmw2-XxsaUyw=="
      })}`
    );

    const urlNew = this.client.signer.sign(url.toString());
    const xTTParams = this.client.signer.xttparams(url.searchParams.toString());
    console.info(url.toString());
    const response = await this.client.request.send(urlNew, {
      ...this.client.state.defaultHeaders,
      "x-tt-params": xTTParams,
    });

    return response;

  }

  /**
   * Get user liked videos
   *
   * @param id
   * @param secUid
   * @param count
   * @param cursor
   * @returns
   */
  public async liked(
    id: number,
    secUid: string,
    count: number,
    cursor: number
  ) {
    const deviceId = this.client.helper.generateDeviceId();

    let url = new URL(
      `https://m.tiktok.com/api/favorite/item_list/?${qs.stringify({
        ...this._defaultApiParams,
        id: id,
        secUid: secUid,
        count: count,
        cursor: cursor,
        device_id: deviceId,
        history_len: this.client.helper.getRandomInt(1, 5),
      })}`
    );

    const urlNew = this.client.signer.sign(url.toString());

    // url.searchParams.append("_signature", signature);

    // this.userDebug(`Generated signed url ${url.toString()}`);

    // const bogus = this.client.signer.xbogus(url.searchParams.toString());

    // url.searchParams.append("X-bogus", bogus);

    // this.userDebug(`Generated bogus url ${url}`);

    const xTTParams = this.client.signer.xttparams(url.searchParams.toString());

    const response = await this.client.request.send(urlNew, {
      ...this.client.state.defaultHeaders,
      "x-tt-params": xTTParams,
    });

    const responseBody = JSON.parse(response.body);

    if (responseBody.statusCode === 0 && responseBody.itemList) {
      return responseBody;
    }

  }





















  /**
   * Parse TikTok response and return sigi_state
   *
   * @param content
   * @returns
   */
  private async parseHtmlContent(content: string) {
    if (content.includes("SIGI_STATE")) {
      const rawVideoMetadata = content
        .split('<script id="SIGI_STATE" type="application/json">')[1]
        .split("</script>")[0];

      return {
        sigiState: true,
        data: rawVideoMetadata,
      };
    }

    if (content.includes("__UNIVERSAL_DATA_FOR_REHYDRATION__")) {
      const rawVideoMetadata = content
        .split(
          '<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__" type="application/json">'
        )[1]
        .split("</script>")[0];

      return {
        sigiState: false,
        data: rawVideoMetadata,
      };
    }
  }
}
