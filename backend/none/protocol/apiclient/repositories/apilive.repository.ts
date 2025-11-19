import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";


export class ApiliveRepository extends Repository {
  private userDebug = console.debug;//debug("tiktok:user");

  constructor(private client: ApiClient ) {
    super();
  }


  
  //////////////////////////////////////////////////////////////////////////////////////////////////
  /**
   * 进入直播间
   * @param target 
   * @returns 
   */
  async enterRoom(target:any){
    const headers = {
        ...this.client.state.defaultHeaders,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        referer: "https://www.douyin.com/live"
    };
    let params = {
      ...this.client.state.defaultHttpParams,
      device_type: "web_h264"
    }

    let data = Object.assign({
      enter_source: "recommend-live_cover",
      room_id: "7315428809531706119"
    },target);
    
    const url = this.client.signer.sign( `https://webcast.tiktok.com/webcast/room/enter/` , params );
    const response = await this.client.request.send(url, headers,"post" , undefined ,data );
    return response;
  
  }


  /**
   * 发送消息
   * @param target 
   * @returns 
   */
  async sendChat(target:any){
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/live"
    };
    let params = Object.assign({
      ...this.client.state.defaultHttpParams,
      "room_id":"7315428809531706119",
      "content":"hi~",
      "emotes_with_index":""
    },target);
    
    const url = this.client.signer.sign( `https://webcast.tiktok.com/webcast/room/chat/` , params );
    const response = await this.client.request.send(url, headers,"post"  );
    return response;
  
  }


  // https://webcast.tiktok.com/webcast/gift/send/?aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=6&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=BH&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=6QYlNM-wX7qP4wPhCumDLZkI1y3lcZzTiAS8yR5y5tbOx41lx3X3qIWjr1j39WzQhdwiTFMFEAvEsNxNdm_72OSr5BxqEzs2iCNKBrBBRTxMulMs64NrzfkVJMRCfh9yIq15hMt8XfTUV0igXw==&X-Bogus=DFSzswVuCHnSHIoEtNhrNU9WcBr2&_signature=_02B4Z6wo00001t7EZ0wAAIDC3sRnTW08m.bexGPAANJB8f
  async sendGift(target:any){
    const headers = {
      ...this.client.state.defaultHeaders,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      referer: "https://www.douyin.com/live"
  };
  let params = {
    ...this.client.state.defaultHttpParams,
  }

  let data = Object.assign({
      count: 1,
      enter_from: "live_detail_",
      gift_id: "6064",
      is_opted_in_host: false,
      is_subscription: false,
      room_id: "7315440174710688520",
      send_scene: 1,
      send_type: 1,
      to_user_id: "7309595278587659271",
  },target);
  
  const url = this.client.signer.sign( `https://webcast.tiktok.com/webcast/gift/send/` , params );
  const response = await this.client.request.send(url, headers,"post" , undefined ,data );
  return response;


  }
  


  // https://webcast.tiktok.com/webcast/ranklist/online_audience/?aid=1988&anchor_id=7309595278587659271&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&device_id=7241163383020848646&device_platform=web_pc&focus_state=true&from_page=user&history_len=6&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=RO&referer=&region=BH&room_id=7315440174710688520&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&webcast_language=zh-Hans&msToken=ENa-78EscqKbtZ1yVoTwpBP3zIyXVxlbnCtCKbdJCRH6mZyyI0ZCMn9OCyiCVOAzrbEyFT-jbv37nUdxO7ddaDIVkPclTZ8HfEgwUdQduMoOwHy6XvOPugfZXLtUc0dZfy3YdmNh5HvuQJUbRA==&X-Bogus=DFSzswVuyszAN9oEtNhnO09WcBnk&_signature=_02B4Z6wo00001tlgjjQAAIDC2WCON-fqobrZYIqAANPq00
  

  /**
   * 钻石数量
   * @param target 
   * @returns 
   */
  async onlineAudience(target:any){
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/live"
    };
    let params = Object.assign({
      ...this.client.state.defaultHttpParams,
      "room_id":"7315428809531706119",
      anchor_id: "7309595278587659271"
    },target);
    
    const url = this.client.signer.sign( `https://webcast.tiktok.com/webcast/ranklist/online_audience/` , params );
    const response = await this.client.request.send(url, headers,"get"  );
    return response;
  
  }




  /**
   * 钻石数量
   * @param target 
   * @returns 
   */
   async authorInfo(target?:any){
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/live"
    };
    let params = Object.assign({
      ...this.client.state.defaultHttpParams,
      aid: 1988,
    },target);
    
    const url = this.client.signer.sign( `https://webcast.tiktok.com/webcast/room/create_info/` , params );
    const response = await this.client.request.send(url, headers,"get"  );


  //   fetch("https://mssdk-sg.tiktok.com/web/report?msToken=ADqW9ZENfshjy_tW3NnBskCT0gUSvdYP7hD9WKaHQKNYMxbr1iwy-8vUy695SvArNv0E9p0S60uK89G5MtTsMwaMLFK7jNTToBXSTmu-kjPDlJlsLG5MTx3DBetJ-4OHNhLophxf_lCOHADZ80sn3w==&X-Bogus=DFSzswVuftm36xbWtfh9yOLZzYJp", {
  //   "headers": {
  //     "accept": "*/*",
  //     "accept-language": "en-US,en;q=0.9",
  //     "content-type": "text/plain;charset=UTF-8",
  //     "sec-fetch-dest": "empty",
  //     "sec-fetch-mode": "cors",
  //     "sec-fetch-site": "same-site",
  //     "cookie": "store-idc=alisg; tt-target-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; store-country-code-src=uid; store-country-code=cn; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; odin_tt=f673eb55dbb5ee50498abc276b6c32be6d0033c07d9aa675da98279bf7429354b898b52b4459e65d562e887835ee36dc08e74cadc3f556227af68315d76384e10513ad6827aa50ddfda05f1a0e838efe; ak_bmsc=4E731ABCB978E2C996D5745931726CC1~000000000000000000000000000000~YAAQBzvUF230ijSRAQAA3hHCNRgcKmjOSeGskPtOWPERp4rsFyBy1CxAf4cZWiSr9EToIRTNOt7qS/qXNSYvQMugnl4GrfB9zfe18Mn/Min5HP12fpuJuttQ4EVzMgl/rcWIu9nIhsTHiMbB+qlk+AZpLIhn1aEg5UTpgDbb7yBzgfhq7qJ4N9Lax1N17zeMoHCHuYN8FJoxtKujOM0whkq2vE/wGtXm6wtqS4jsF0XkYvwmrw9VRMkZ7J9P4PxDYdHnSatyRV3ZsUWU+0cCxc2UPj8GH9hI7vS9N+gd/nY+WfC681U6yk8oMMjywEstxPX8aP4MvDi/7pfBEXA0WzSAUiKhx6oCnumDBsaGJGhT17X0Kzw6mlLOHod009Qf02kS+2JRjvtZOg==; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1723183798%7Ca7ef0b37042d48951f2811d7ea0fe1296fbd53aa7defb4b41f78867c40f1b321; msToken=ADqW9ZENfshjy_tW3NnBskCT0gUSvdYP7hD9WKaHQKNYMxbr1iwy-8vUy695SvArNv0E9p0S60uK89G5MtTsMwaMLFK7jNTToBXSTmu-kjPDlJlsLG5MTx3DBetJ-4OHNhLophxf_lCOHADZ80sn3w==",
  //     "Referer": "https://www.douyin.com/",
  //     "Referrer-Policy": "strict-origin-when-cross-origin"
  //   },
  //   "body": "{\"magic\":538969122,\"version\":1,\"dataType\":8,\"strData\":\"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\",\"tspFromClient\":1723183805926}",
  //   "method": "POST"
  // });

    return response;
  
  }


  /**
   * 推荐直播
   * @param target 
   * @returns 
   */
     async feedLive(target?:any){
      const headers = {
          ...this.client.state.defaultHeaders,
          referer: "https://www.douyin.com/live"
      };
      let params = Object.assign({
        ...this.client.state.defaultHttpParams,
      },{"max_time":0,"hidden_banner":true,"channel_id":42,"req_from":"pc_web_side_follow_default","content_type":1,"device_type":"web_h264"},target);
      
      const url = this.client.signer.sign( `https://webcast.us.tiktok.com/webcast/feed/` , params );
      const response = await this.client.request.send(url, headers,"get"  );
  
      return response;
    
    }



  async following(target?:any){
    const headers = {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "tt-ticket-guard-client-data": "eyJ0c19zaWduIjoidHMuMS4yMWVhZTdmMTBlOTIzOTFkZGI0YjhkM3JmZmYyYzc0MDMwYjVmODczNzk2MTAxZDBkOWIwMTI3NTkyMjg1NDE2MGU3MGI0YmRhODJjMTM4MzZlNWNmYTE4Mzk0ZDcwMjQwZjhhZjE2MzFmMTY1YWU5NjAxMjJlZWZmZDQ1MzNkZCIsInJlcV9jb250ZW50IjoidGlja2V0LHBhdGgsdGltZXN0YW1wIiwicmVxX3NpZ24iOiJNRVlDSVFDQ3d6K3AyU2JVbVpIK0xjZkhkVDZoUzd6d2pnS0d1WWtCdzlHd2dkRjRod0loQUxickFyWWQ5YU1GTTFnVVYzYXdjY01kdEJpK09wYk9MbDZnMS9LNFZzYksiLCJ0aW1lc3RhbXAiOjE3MjM1Mzg5OTh9",
        "tt-ticket-guard-iteration-version": "0",
        "tt-ticket-guard-public-key": "BKgrXX1qJuouMkiNfdTV2vG/IIRXl4/rb8xpc3T+qK8STjK/uXkp5tT5AMSPju1pYNIj5IQ+O9OlGMN1r9PsOfc=",
        "tt-ticket-guard-version": "2",
        "tt-ticket-guard-web-version": "1",
        'Cookie': 'ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws5B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; ak_bmsc=00916105E508FD9EFAD1BADC7FC8229E~000000000000000000000000000000~YAAQRHd+aMlz3nGRAQAAx25SehijnSb30PVww+7C7wN335o0WJrmFUqYNkjnn2+PMJ0D2N4tT1e4lX4pVuMfOiXWwFW66rydUHSFLlxCl9rJXDsqj0qHfv4+Wpj3M0kq0wnwg62w5KdV+OYz1VZthHwX7xbPm5hqmh/DubRaW45KhReGDRQAMcsZnZOrp0TXxN2Wzog4qAX9fvptdpFlCleZOIr35kQIYQkH0b7jXyNly7zzgqinIhILM9WfDvuYOvN27J4d4QBkRjGdR+PbbGrbXPzZtlfjY15pnhIlFPb0zsxz9Il6N8JUAHd3vx2qpZMeInkuFvp2eodM2LSX7kjzxei8FdxyGvTRWOVuX0vcJwVEMKbLppLzBVXtxj29J+CVTXAeZesNXg==; store-country-code=cn; store-country-code-src=uid; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; store-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt-target-idc=alisg; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; bm_sv=D0A1D725930B6FE3748B26164A56E9EE~YAAQXnd+aJWne3eRAQAA9T9behhBIQHRQFyrflYFK9RFWI1uJbR6iOZIVJajxDVkWEFCoOdBGEc4ZN0nNNV/3gt96kUNPqnxrp2mIifsMU9QbMPcQxvlfOMSDBaxNNmtU9r9Hxh+vE4a3sZxfCDV6FFRHiOPb91rz1zMWeif5oFfl78BKpRVok/NoG5H9ueEHRDoyaBzghpoAxVCzJkNiczD7ht2hvhh6AD6Itv9XICZtFUmQqaMcFf5oqkRe6vY~1; odin_tt=2ecfd1615f7f16802e03229bb30231163081729e04f89acec0ee5eba805703c3db1f9ddeb53a844856a6e344b85a3eb6b0725252166bdeb8a9ea155668eb6f902650ce66c03dbe92d6d181e32fc7cf43; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1724334725%7C3bc5fdd2680f76629b9ff3a0377a77ceb7527669eee1239b4ca773c882601b7c; csrf_session_id=fd7f1a78c151113577d69c17f7e015ac; msToken=5IhaOKvGGJc5W77NUyzOy-nh3X8qDQ_mptryHGjyvw3gwcDmtXTeBStW3FCPuj3hu4czrDZDluMocepDt1qO8MY2qCMDnExwjw45TCRZVikX7MDmEhuktC4fJK9QznOrdYAvJWBZhRZRlp7BH0nwctg=; msToken=9MD1WZzOsH37ByCI5rTyePeiyeD7SI5lmSkvIF9xzDPGVdRJx06jmyKw22g6EyHalFTrh8-owSIreML-ve-ikjzXvfchyb1h7dqOP1aVgJzknygYepzXiVG6IsWV9CskiEoLq1s9tgFpMI4f-CsTOpA=', 
        "x-secsdk-csrf-token": "000100000001de291dd45cffdd200d14f06c4c632a3f26936dea795668d6d9b5701830dc9a8017ee11667f6dac52,fd7f1a78c151113577d69c17f7e015ac",
        ...this.client.state.defaultHeaders,
    };
    let params = Object.assign({
      // ...this._defaultApiParams,
    'aid': '1988', 
    'app_language': 'en', 
    'app_name': 'tiktok_web', 
    'browser_language': 'en-US', 
    'browser_name': 'Mozilla', 
    'browser_online': 'true', 
    'browser_platform': 'Win32', 
    'browser_version': '5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F121.0.0.0%20Safari%2F537.36', 
    'channel': 'tiktok_web', 
    'cookie_enabled': 'true', 
    'data_collection_enabled': 'true', 
    'device_id': this.client.state.genNumber(19), 
    'device_platform': 'web_pc', 
    'focus_state': 'true', 
    'from_page': 'user', 
    'history_len': '4', 
    'is_fullscreen': 'false', 
    'is_page_visible': 'true', 
    'os': 'windows', 
    'priority_region': 'US', 
    'referer': 'https%3A%2F%2Fwww.douyin.com%2Fforyou', 
    'region': 'US', 
    'root_referer': 'https%3A%2F%2Fwww.douyin.com%2Fforyou', 
    'screen_height': '1080', 
    'screen_width': '1920', 
    'tz_name': 'America%2FNew_York', 
    'user_is_login': 'true', 
    'verifyFp': this.client.state.getCookieByName("verifyFp")||'verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ', 
    'webcast_language': 'en', 
    'msToken': this.client.state.getCookieByName("msToken"), 
    });

    const qs = require('qs');
    let bodyStr = qs.stringify({
      'current_room_id': '7405929741997427499',
      'follow_type': '1',
      'to_user_id': '7306820949604336683' 
    });

    let baseHost = `https://webcast.tiktok.com/`;
    if(this.client.state.genRegion()=="us"){
      baseHost = `https://webcast.us.tiktok.com/`
    }
    console.info(this.client.state.genRegion(),baseHost ,"baseHost --------");
    const url = this.client.signer.sign( `${baseHost}webcast/user/relation/update/` , params ,  headers["user-agent"], bodyStr  );
    // let url = "https://webcast.tiktok.com/webcast/user/relation/update/?aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&data_collection_enabled=true&device_id=7314138184412317214&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=MY&referer=https%3A%2F%2Fwww.douyin.com%2F%40ybsbrodie&region=US&root_referer=https%3A%2F%2Fwww.douyin.com%2Fbusiness-suite%2Fmessages%3Ffrom%3Dhomepage%26lang%3Den&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&user_is_login=true&verifyFp=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ&webcast_language=en&msToken=zoyxKLHdKb3IVvQn-deXVgXm7KlQRfrQSlm7hcPQWTQKDNlMGTcZLnG2dWOmu3QAuL2JBkDVnOQbt5bkIS9mB9X7ZRc6B9CuFRPGn6DQr4tJ3ejMdXxdBmkDjVXeN85MLFfDKHEM9KkUi09SOdY_o-Q=&X-Bogus=DFSzswVu0L6014oEtfe5I5LZzYrW&_signature=_02B4Z6wo00001MOvuwAAAIDBEcLDwn08E4TDr7-AAFZW81"
    const response = await this.client.request.send(url, headers,"post",undefined,bodyStr  );
    // console.error(url,"url------------");

    return response;
  }











}



// this.checkRoomAlive = e=>this.fetch.get("/webcast/room/check_alive/", {
//   query: e,
//   baseUrlType: 4
// }),
// this.getRoomInfo = e=>this.fetch.get("/webcast/room/info/", {
//   query: e,
//   baseUrlType: 4
// }),
// this.getTopicTagsAndGameTags = ()=>this.fetch.get("/webcast/room/hashtag/list/", {
//   baseUrlType: 4
// }),
// this.sendLiveChat = e=>this.fetch.post("/webcast/room/chat/", {
//   query: e,
//   baseUrlType: 4,
//   headers: {
//       "Content-Type": r.zv.FORM_ENCODE
//   }
// }).pipe((0,
// a.$)()),
// this.sendLiveEmoteChat = e=>this.fetch.post("/webcast/room/emote_chat/", {
//   query: e,
//   baseUrlType: 4,
//   headers: {
//       "Content-Type": r.zv.FORM_ENCODE
//   }
// }).pipe((0,
// a.$)())










// async following(target?:any){
//   const headers = {
//       ...this.client.state.defaultHeaders,
//       "accept": "*/*",
//       "accept-language": "en-US,en;q=0.9",
//       "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//       "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//       "sec-ch-ua-mobile": "?0",
//       "sec-ch-ua-platform": "\"Windows\"",
//       "sec-fetch-dest": "empty",
//       "sec-fetch-mode": "cors",
//       "sec-fetch-site": "same-site",
//       // "tt-ticket-guard-client-data": "eyJ0c19zaWduIjoidHMuMS4yMWVhZTdmMTBlOTIzOTFkZGI0YjhkM2JmZmYyYzc0MDMwYjVmODczNzk2MTAxZDBkOWIwMTI3NTkyMjg1NDE2MGU3MGI0YmRhODJjMTM4MzZlNWNmYTE4Mzk0ZDcwMjQwZjhhZjE2MzFmMTY1YWU5NjAxMjJlZWZmZDQ1MzNkZCIsInJlcV9jb250ZW50IjoidGlja2V0LHBhdGgsdGltZXN0YW1wIiwicmVxX3NpZ24iOiJNRVlDSVFDQ3d6K3AyU2JVbVpIK0xjZkhkVDZoUzd6d2pnS0d1WWtCdzlHd2dkRjRod0loQUxickFyWWQ5YU1GTTFnVVYzYXdjY01kdEJpK09wYk9MbDZnMS9LNFZzYksiLCJ0aW1lc3RhbXAiOjE3MjM1Mzg5OTh9",
//       "tt-ticket-guard-iteration-version": "0",
//       // "tt-ticket-guard-public-key": "BKgrXX1qJuouMkiNfdTV2vG/IIRXl4/rb8xpc3T+qK8STjK/uXkp5tT6AMSPju1pYNIj5IQ+O9OlGMN1r9PsOfc=",
//       "tt-ticket-guard-version": "2",
//       "tt-ticket-guard-web-version": "1",
//       // 'Cookie': 'ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; ak_bmsc=00916105E508FD9EFAD1BADC7FC8229E~000000000000000000000000000000~YAAQRHd+aMlz3nGRAQAAx25SehijnSb30PVww+7C7wN335o0WJrmFUqYNkjnn2+PMJ0D2N4tT1e4lX4pVuMfOiXWwFW66rydUHSFLlxCl9rJXDsqj0qHfv4+Wpj3M0kq0wnwg62w5KdV+OYz1VZthHwX7xbPm5hqmh/DubRaW45KhReGDRQAMcsZnZOrp0TXxN2Wzog4qAX9fvptdpFlCleZOIr35kQIYQkH0b7jXyNly7zzgqinIhILM9WfDvuYOvN27J4d4QBkRjGdR+PbbGrbXPzZtlfjY15pnhIlFPb0zsxz9Il6N8JUAHd3vx2qpZMeInkuFvp2eodM2LSX7kjzxei8FdxyGvTRWOVuX0vcJwVEMKbLppLzBVXtxj29J+CVTXAeZesNXg==; store-country-code=cn; store-country-code-src=uid; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; store-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt-target-idc=alisg; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; bm_sv=D0A1D725930B6FE3748B26164A56E9EE~YAAQXnd+aJWne3eRAQAA9T9behhBIQHRQFyrflYFK9RFWI1uJbR6iOZIVJajxDVkWEFCoOdBGEc4ZN0nNNV/3gt96kUNPqnxrp2mIifsMU9QbMPcQxvlfOMSDBaxNNmtU9r9Hxh+vE4a3sZxfCDV6FFRHiOPb91rz1zMWeif5oFfl78BKpRVok/NoG5H9ueEHRDoyaBzghpoAxVCzJkNiczD7ht2hvhh6AD6Itv9XICZtFUmQqaMcFf5oqkRe6vY~1; odin_tt=2ecfd1615f7f16802e03229bb30231163081729e04f89acec0ee5eba805703c3db1f9ddeb53a844856a6e344b85a3eb6b0725252166bdeb8a9ea155668eb6f902650ce66c03dbe92d6d181e32fc7cf43; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1724334725%7C3bc5fdd2680f76629b9ff3a0377a77ceb7527669eee1239b4ca773c882601b7c; csrf_session_id=fd7f1a78c151113577d69c17f7e015ac; msToken=5IhaOKvGGJc5W77NUyzOy-nh3X8qDQ_mptryHGjyvw3gwcDmtXTeBStW3FCPuj3hu4czrDZDluMocepDt1qO8MY2qCMDnExwjw45TCRZVikX7MDmEhuktC4fJK9QznOrdYAvJWBZhRZRlp7BH0nwctg=; msToken=9MD1WZzOsH37ByCI5rTyePeiyeD7SI5lmSkvIF9xzDPGVdRJx06jmyKw22g6EyHalFTrh8-owSIreML-ve-ikjzXvfchyb1h7dqOP1aVgJzknygYepzXiVG6IsWV9CskiEoLq1s9tgFpMI4f-CsTOpA=', 
//       // "x-secsdk-csrf-token": "000100000001de291dd45cffdd200d14f06c4c632a3f26936dea795668d6d9b4701830dc9a8017ee11667f6dac52,fd7f1a78c151113577d69c17f7e015ac",
//       // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',

//       // 'Accept': '*/*', 
//       // 'Accept-Encoding': 'gzip, deflate, br', 
//       // 'Accept-Language': 'en-US,en;q=0.9', 
//       // 'Content-Length': '80', 
//       // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 
//       // 'Cookie': 'ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; ak_bmsc=00916105E508FD9EFAD1BADC7FC8229E~000000000000000000000000000000~YAAQRHd+aMlz3nGRAQAAx25SehijnSb30PVww+7C7wN335o0WJrmFUqYNkjnn2+PMJ0D2N4tT1e4lX4pVuMfOiXWwFW66rydUHSFLlxCl9rJXDsqj0qHfv4+Wpj3M0kq0wnwg62w5KdV+OYz1VZthHwX7xbPm5hqmh/DubRaW45KhReGDRQAMcsZnZOrp0TXxN2Wzog4qAX9fvptdpFlCleZOIr35kQIYQkH0b7jXyNly7zzgqinIhILM9WfDvuYOvN27J4d4QBkRjGdR+PbbGrbXPzZtlfjY15pnhIlFPb0zsxz9Il6N8JUAHd3vx2qpZMeInkuFvp2eodM2LSX7kjzxei8FdxyGvTRWOVuX0vcJwVEMKbLppLzBVXtxj29J+CVTXAeZesNXg==; store-country-code=cn; store-country-code-src=uid; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; store-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt-target-idc=alisg; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; bm_sv=D0A1D725930B6FE3748B26164A56E9EE~YAAQXnd+aJWne3eRAQAA9T9behhBIQHRQFyrflYFK9RFWI1uJbR6iOZIVJajxDVkWEFCoOdBGEc4ZN0nNNV/3gt96kUNPqnxrp2mIifsMU9QbMPcQxvlfOMSDBaxNNmtU9r9Hxh+vE4a3sZxfCDV6FFRHiOPb91rz1zMWeif5oFfl78BKpRVok/NoG5H9ueEHRDoyaBzghpoAxVCzJkNiczD7ht2hvhh6AD6Itv9XICZtFUmQqaMcFf5oqkRe6vY~1; odin_tt=2ecfd1615f7f16802e03229bb30231163081729e04f89acec0ee5eba805703c3db1f9ddeb53a844856a6e344b85a3eb6b0725252166bdeb8a9ea155668eb6f902650ce66c03dbe92d6d181e32fc7cf43; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1724334725%7C3bc5fdd2680f76629b9ff3a0377a77ceb7527669eee1239b4ca773c882601b7c; csrf_session_id=fd7f1a78c151113577d69c17f7e015ac; msToken=5IhaOKvGGJc5W77NUyzOy-nh3X8qDQ_mptryHGjyvw3gwcDmtXTeBStW3FCPuj3hu4czrDZDluMocepDt1qO8MY2qCMDnExwjw45TCRZVikX7MDmEhuktC4fJK9QznOrdYAvJWBZhRZRlp7BH0nwctg=; msToken=9MD1WZzOsH37ByCI5rTyePeiyeD7SI5lmSkvIF9xzDPGVdRJx06jmyKw22g6EyHalFTrh8-owSIreML-ve-ikjzXvfchyb1h7dqOP1aVgJzknygYepzXiVG6IsWV9CskiEoLq1s9tgFpMI4f-CsTOpA=', 
//       // 'Origin': 'https://www.douyin.com', 
//       // 'Referer': 'https://www.douyin.com/', 
//       // 'Sec-Fetch-Dest': 'empty', 
//       // 'Sec-Fetch-Mode': 'cors', 
//       // 'Sec-Fetch-Site': 'same-site', 
//       // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
//   };
//   let params = Object.assign({
//     // ...this._defaultApiParams,
//     'aid': '1988', 
//   'app_language': 'en', 
//   'app_name': 'tiktok_web', 
//   'browser_language': 'en-US', 
//   'browser_name': 'Mozilla', 
//   'browser_online': 'true', 
//   'browser_platform': 'Win32', 
//   'browser_version': '5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F121.0.0.0%20Safari%2F537.36', 
//   'channel': 'tiktok_web', 
//   'cookie_enabled': 'true', 
//   'data_collection_enabled': 'true', 
//   'device_id': '7314138184412317214', 
//   'device_platform': 'web_pc', 
//   'focus_state': 'true', 
//   'from_page': 'user', 
//   'history_len': '4', 
//   'is_fullscreen': 'false', 
//   'is_page_visible': 'true', 
//   'os': 'windows', 
//   'priority_region': 'SG', 
//   'referer': 'https%3A%2F%2Fwww.douyin.com%2Fforyou', 
//   'region': 'US', 
//   'root_referer': 'https%3A%2F%2Fwww.douyin.com%2Fforyou', 
//   'screen_height': '1080', 
//   'screen_width': '1920', 
//   'tz_name': 'Asia%2FShanghai', 
//   'user_is_login': 'true', 
//   'verifyFp': 'verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ', 
//   'webcast_language': 'en', 
//   'msToken': 'BfLdyLB3_T4EiOZs3-hrBtQJuRkRIxs-1_BQW5Oket9tMtWWpaBrVmKoTRgoSrmyhEJgQK26PtHHExy0ZSFTBCF391o9g8gAPD7Uo5pFyIyfyet8onhMKRtec0fwSsVyL3EoZY_VpFLn1NPzggyuxoY=', 
//   // 'X-Bogus': 'DFSzswVuWR0fYhbWt1/Z2QLZzYju', 
//   // '_signature': '_02B4Z6wo00001W7smiwAAIDAvIHi7ckIDFVu7J6AAD2Aa3', 
//   'Content-Type': 'application/x-www-form-urlencoded', 
//   // 'Cookie': 'msToken=9MD1WZzOsH37ByCI5rTyePeiyeD7SI5lmSkvIF9xzDPGVdRJx06jmyKw22g6EyHalFTrh8-owSIreML-ve-ikjzXvfchyb1h7dqOP1aVgJzknygYepzXiVG6IsWV9CskiEoLq1s9tgFpMI4f-CsTOpA='
//   });

//   // let bodyStr:any =  new URLSearchParams(Object.assign({
//   //     current_room_id:"7402534414233733919",
//   //     follow_type:"1",
//   //     to_user_id:"7366824696803951658"
//   //   },target)).toString();
//   // let  bodyStr = {
//   //       current_room_id:"7405943896713333520",
//   //       follow_type:"1",
//   //       to_user_id:"7379577983629935634"
//   //     };//"current_room_id=7405943896713333520&follow_type=1&to_user_id=7379577983629935634"

//   const qs = require('qs');
//   let bodyStr = qs.stringify({
//     'current_room_id': '7405929741997427499',
//     'follow_type': '0',
//     'to_user_id': '7306820949604336683' 
//   });

//   console.info(bodyStr,"bodyStr--------");

// //   if (contentType === "data") {
// //     bodyStr = new URLSearchParams(body).toString();
// // } else if (contentType === "json") {
// //     bodyStr = JSON.stringify(body).replace(/ /g, "");
// // }else{
// //     bodyStr = body;
// // }
  
//   const url = this.client.signer.sign( `https://webcast.tiktok.com/webcast/user/relation/update/` , params ,  headers["user-agent"], bodyStr  );
//   // let url = "https://webcast.tiktok.com/webcast/user/relation/update/?aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&data_collection_enabled=true&device_id=7314138184412317214&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=MY&referer=https%3A%2F%2Fwww.douyin.com%2F%40ybsbrodie&region=US&root_referer=https%3A%2F%2Fwww.douyin.com%2Fbusiness-suite%2Fmessages%3Ffrom%3Dhomepage%26lang%3Den&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&user_is_login=true&verifyFp=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ&webcast_language=en&msToken=zoyxKLHdKb3IVvQn-deXVgXm7KlQRfrQSlm7hcPQWTQKDNlMGTcZLnG2dWOmu3QAuL2JBkDVnOQbt5bkIS9mB9X7ZRc6B9CuFRPGn6DQr4tJ3ejMdXxdBmkDjVXeN85MLFfDKHEM9KkUi09SOdY_o-Q=&X-Bogus=DFSzswVu0L6014oEtfe5I5LZzYrW&_signature=_02B4Z6wo00001MOvuwAAAIDBEcLDwn08E4TDr7-AAFZW81"
//   // const response = await this.client.request.send(url, headers,"post",undefined,bodyStr  );
//   console.error(url,"url------------");
//   const response = await this.client.request.send(url,
//    headers,"post",undefined,bodyStr ,'text' );



//   return response;
// //   fetch("https://webcast.tiktok.com/webcast/user/relation/update/?aid=1988&app_language=en&app_name=tiktok_web&browser_language=en-US&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&data_collection_enabled=true&device_id=7314138184412317214&device_platform=web_pc&focus_state=true&from_page=user&history_len=9&is_fullscreen=false&is_page_visible=true&os=windows&priority_region=MY&referer=https%3A%2F%2Fwww.douyin.com%2F%40ybsbrodie&region=US&root_referer=https%3A%2F%2Fwww.douyin.com%2Fbusiness-suite%2Fmessages%3Ffrom%3Dhomepage%26lang%3Den&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&user_is_login=true&verifyFp=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ&webcast_language=en&msToken=zoyxKLHdKb3IVvQn-deXVgXm7KlQRfrQSlm7hcPQWTQKDNlMGTcZLnG2dWOmu3QAuL2JBkDVnOQbt5bkIS9mB9X7ZRc6B9CuFRPGn6DQr4tJ3ejMdXxdBmkDjVXeN85MLFfDKHEM9KkUi09SOdY_o-Q=&X-Bogus=DFSzswVu0L6014oEtfe5I5LZzYrW&_signature=_02B4Z6wo00001MOvuwAAAIDBEcLDwn08E4TDr7-AAFZW81", {
// //   "headers": {
//     // "accept": "*/*",
//     // "accept-language": "en-US,en;q=0.9",
//     // "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     // "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//     // "sec-ch-ua-mobile": "?0",
//     // "sec-ch-ua-platform": "\"Windows\"",
//     // "sec-fetch-dest": "empty",
//     // "sec-fetch-mode": "cors",
//     // "sec-fetch-site": "same-site",
//     // "tt-ticket-guard-client-data": "eyJ0c19zaWduIjoidHMuMS4yMWVhZTdmMTBlOTIzOTFkZGI0YjhkM2JmZmYyYzc0MDMwYjVmODczNzk2MTAxZDBkOWIwMTI3NTkyMjg1NDE2MGU3MGI0YmRhODJjMTM4MzZlNWNmYTE4Mzk0ZDcwMjQwZjhhZjE2MzFmMTY1YWU5NjAxMjJlZWZmZDQ1MzNkZCIsInJlcV9jb250ZW50IjoidGlja2V0LHBhdGgsdGltZXN0YW1wIiwicmVxX3NpZ24iOiJNRVlDSVFDQ3d6K3AyU2JVbVpIK0xjZkhkVDZoUzd6d2pnS0d1WWtCdzlHd2dkRjRod0loQUxickFyWWQ5YU1GTTFnVVYzYXdjY01kdEJpK09wYk9MbDZnMS9LNFZzYksiLCJ0aW1lc3RhbXAiOjE3MjM1Mzg5OTh9",
//     // "tt-ticket-guard-iteration-version": "0",
//     // "tt-ticket-guard-public-key": "BKgrXX1qJuouMkiNfdTV2vG/IIRXl4/rb8xpc3T+qK8STjK/uXkp5tT6AMSPju1pYNIj5IQ+O9OlGMN1r9PsOfc=",
//     // "tt-ticket-guard-version": "2",
//     // "tt-ticket-guard-web-version": "1",
//     // "x-secsdk-csrf-token": "00010000000177503891f93664691312b2f4a4ded06aa8c3509446a3214db92ef1322a592d7117eb3d8f62536fe8,41d0dcafe16186bdb4679d9714aa4fd6",
// //     "cookie": "ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; store-country-code=cn; store-country-code-src=uid; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; store-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt-target-idc=alisg; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; odin_tt=effe8e4009f92c019a37d37e36bdd6c26fe84500737ff390438d07b750d83eb7a78ff3830ed95c9f3676bc30edc65af0756df3fec7c361766b55703a8b66ea0311ed3e440f991a8a6d077314cfa68fca; ak_bmsc=C9AC1BFCE38E666DA8BCD74F99388625~000000000000000000000000000000~YAAQChICF8pBB0eRAQAAOcTrShgF4cUgMCwl3d9puiKwY7nBPKZJTrpLN0EC83pBLbT+kKWIwJMq1M/xBPp1Lg3qn+gGqayiV5NBOe4i9K64lFrVju1ZADKcwIFtSudIjJ+4tiRrSG0u87B7H4fi4NzHIc+Y3msP9J2hqSMY8z8h+1G8SqepAYyJv0n1qHKNaMpg5Q7FbusGBZOd3/75d5kJGWxaXlSVqr34F39ATAe7uv8qhehDgZ2RGfpaegZB86a2nfa2SQ6b+5BWnRMC2xIzBfAw1XDnFvbW/lkHCz5xBo11e7wwTiSIUWgrLYWBNT05iKyb7Otd938QQEv5r6gf2sdJbpIns96IZ2vNECpKjBTOO0sMReSLiT33lAUUU+dsOZ3V9EA=; bm_sv=2E7962FB155867669D85C8BB64EF8F67~YAAQChICFzdCB0eRAQAAt+frShjBwT7ITS38xbKbDyPz8Zj1LeYvE5zUCvsEY8Anfkrbuhzjpg5FkPdTgDUmZVH9Udcx/itgb0FncL3rzebz2AQ5K5WDAEOJefL26iTGtB6EtjVLgvdFTx016E0CP0LxVkqwhBZ1PXtN+TVWTrtZLVXBMDrCYkPrWJ92tWWXQE3UL9ZsY0aW5D4CcIGoFrKbk8Y1tRy4D2VrOKf4UdDKeLTRMfNE+eHNskPRQgMm~1; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1723538953%7Cbde40b6cb678c276910b340fbf4e22cb265279e7e99854770a44fa33dcbd9e78; csrf_session_id=41d0dcafe16186bdb4679d9714aa4fd6; msToken=nrYPvd1Z0mUk0wm2BO_l9psJ0tj6CZ34K1FSgA3XrRBnY-y684KxWe2nfpvaC5mg0WxnCOKgY5FXgYSoMqNIFZbaahy3Ytpo_Jox1xqEECYGMDUDlAmvNn8PfHRSR8j7V5GRNHuwuaZ4RiJrJzcx_n8=",
// //     "Referer": "https://www.douyin.com/",
// //     "Referrer-Policy": "strict-origin-when-cross-origin"
// //   },
// //   "body": "current_room_id=7402534414233733919&follow_type=1&to_user_id=7366824696803951658",
// //   "method": "POST"
// // });
// }
