import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";


export class ApiSearchRepository extends Repository {
  private userDebug = console.debug;//debug("tiktok:user");


  constructor(private client: ApiClient ) {
    super();
  }

 
  async getTopSearch(obj) {
    // {"keyword":"machine","search_source":"switch_tab","device_type":"web_h264","offset":24,"search_id":"20241117153225E10E238C5483A044A921","web_search_code":"{\"tiktok\":{\"client_params_x\":{\"search_engine\":{\"ies_mt_user_live_video_card_use_libra\":1,\"mt_search_general_user_live_card\":1}},\"search_server\":{}}}"}
      let params = Object.assign( {
         ...this.client.state.defaultHttpParams,
          WebIdLastTime:Math.floor(Date.now() / 1000),
          "count": 30,
          "offset": "12",
          "search_source":"switch_tab",
          "device_type":"web_h264",
          "keyword": "machine",
          "search_id": "",
          "web_search_code": JSON.stringify({"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}})
      },obj);
      const urlNew = this.client.signer.sign("https://www.douyin.com/api/search/general/full/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F130.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&device_type=web_h264&focus_state=true&from_page=search&history_len=10&is_fullscreen=false&is_page_visible=true&keyword=machine&odinId=7028939348067795974&offset=24&os=windows&priority_region=US&referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&region=US&root_referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&screen_height=1080&screen_width=1920&search_id=20241117153225E10E238C5483A044A921&search_source=switch_tab&tz_name=Asia%2FShanghai&user_is_login=true&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=zh-Hant-TW",params);
      console.info(urlNew,"urlNew--------------");
      
      const headers = {
          ...this.client.state.defaultHeaders,
          referer: "https://www.douyin.com/"
          // "x-tt-params": xTTParams,
      };
      
      const response = await this.client.request.send(urlNew,headers);
      return response;
  }
  async getUserSearch(obj) {
    // {"keyword":"machine","cursor":50,"search_id":"20241117153830B1D07D20F0B8BF3F505E","web_search_code":"{\"tiktok\":{\"client_params_x\":{\"search_engine\":{\"ies_mt_user_live_video_card_use_libra\":1,\"mt_search_general_user_live_card\":1}},\"search_server\":{}}}"}
      let params = Object.assign( {
         ...this.client.state.defaultHttpParams,
          WebIdLastTime:Math.floor(Date.now() / 1000),
          "cursor": 40,
          "keyword": "machine",
          "search_id": "",
          "web_search_code": JSON.stringify({"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}})
      },obj);
      const urlNew = this.client.signer.sign("https://www.douyin.com/api/search/user/full/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F130.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&cursor=10&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&focus_state=true&from_page=search&history_len=6&is_fullscreen=false&is_page_visible=true&keyword=machine&odinId=7028939348067795974&os=windows&priority_region=US&referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&region=US&root_referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&screen_height=1080&screen_width=1920&search_id=20241117153830B1D07D20F0B8BF3F505E&tz_name=Asia%2FShanghai&user_is_login=true&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=zh-Hant-TW",params);
      console.info(urlNew,"urlNew--------------");
      
      const headers = {
          ...this.client.state.defaultHeaders,
          referer: "https://www.douyin.com/"
          // "x-tt-params": xTTParams,
      };
      
      const response = await this.client.request.send(urlNew,headers);
      return response;
  }
  async getVideoSearch(obj) {
    // {"keyword":"machine","offset":12,"count":20,"search_id":"2024111715371393F6FC77F1C8BB43E42A","web_search_code":"{\"tiktok\":{\"client_params_x\":{\"search_engine\":{\"ies_mt_user_live_video_card_use_libra\":1,\"mt_search_general_user_live_card\":1}},\"search_server\":{}}}"}
      let params = Object.assign( {
         ...this.client.state.defaultHttpParams,
          WebIdLastTime:Math.floor(Date.now() / 1000),
          "count": 30,
          "offset": "12",
          "keyword": "machine",
          "search_id": "",
          "web_search_code": JSON.stringify({"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}})
      },obj);
      const urlNew = this.client.signer.sign("https://www.douyin.com/api/search/item/full/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F130.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=20&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&focus_state=true&from_page=search&history_len=4&is_fullscreen=false&is_page_visible=true&keyword=machine&odinId=7028939348067795974&offset=0&os=windows&priority_region=US&referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&region=US&root_referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&user_is_login=true&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=zh-Hant-TW",params);
      console.info(urlNew,"urlNew--------------");
      
      const headers = {
          ...this.client.state.defaultHeaders,
          referer: "https://www.douyin.com/"
          // "x-tt-params": xTTParams,
      };
      
      const response = await this.client.request.send(urlNew,headers);
      return response;
  }


  async getLiveSearch(obj) {
    // {"keyword":"machine","device_type":"web_h264","offset":12,"count":20,"search_id":"20241117155634438F42727EDD9B458807","web_search_code":"{\"tiktok\":{\"client_params_x\":{\"search_engine\":{\"ies_mt_user_live_video_card_use_libra\":1,\"mt_search_general_user_live_card\":1}},\"search_server\":{}}}"}
      let params = Object.assign( {
        ...this.client.state.defaultHttpParams,
        WebIdLastTime:Math.floor(Date.now() / 1000),
        "keyword": "machine",
        "device_type":"web_h264",
        "count": 20,
        "offset": 12,
        "search_id": "",
        "web_search_code": JSON.stringify({"tiktok":{"client_params_x":{"search_engine":{"ies_mt_user_live_video_card_use_libra":1,"mt_search_general_user_live_card":1}},"search_server":{}}})
    },obj);
    const urlNew = this.client.signer.sign("https://www.douyin.com/api/search/live/full/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F130.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=20&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&device_type=web_h264&focus_state=false&from_page=search&history_len=9&is_fullscreen=false&is_page_visible=true&keyword=machine&odinId=7028939348067795974&offset=24&os=windows&priority_region=US&referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&region=US&root_referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&screen_height=1080&screen_width=1920&search_id=20241117155634438F42727EDD9B458807&tz_name=Asia%2FShanghai&user_is_login=true&web_search_code=%7B%22tiktok%22%3A%7B%22client_params_x%22%3A%7B%22search_engine%22%3A%7B%22ies_mt_user_live_video_card_use_libra%22%3A1%2C%22mt_search_general_user_live_card%22%3A1%7D%7D%2C%22search_server%22%3A%7B%7D%7D%7D&webcast_language=zh-Hant-TW",params);
    console.info(urlNew,"urlNew--------------");
    
    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/"
        // "x-tt-params": xTTParams,
    };
    
    const response = await this.client.request.send(urlNew,headers);
    return response;
  }





//   getSugList(e) {
//     const t = Object.assign(Object.assign({}, e), {
//         aid: 1988
//     });
//     return this.fetch.get("/api/search/user/preview/", {
//         query: t,
//         baseUrlType: 2
//     })
// }

async getGeneralSugList(obj) {
    let params = Object.assign( {
          ...this.client.state.defaultHttpParams,
          WebIdLastTime:Math.floor(Date.now() / 1000),
          "keyword": "machine",
          "app_language":"zh-Hant",
          "aid":1988
      },obj);
      const urlNew = this.client.signer.sign("https://www.douyin.com/api/search/general/preview/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F130.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&focus_state=true&from_page=search&history_len=10&is_fullscreen=false&is_page_visible=true&keyword=machine&odinId=7028939348067795974&os=windows&priority_region=US&referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&region=US&root_referer=https%3A%2F%2Fwww.baidu.com%2Fs%3Fie%3DUTF-8%26wd%3Dtiktok.com&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&user_is_login=true&webcast_language=zh-Hant-TW",params);
      console.info(urlNew,"urlNew--------------");

      const headers = {
          ...this.client.state.defaultHeaders,
          referer: "https://www.douyin.com/"
          // "x-tt-params": xTTParams,
      };

      const response = await this.client.request.send(urlNew,headers);
      return response;
}

// getMobileGeneralSugList(e) {
//     const t = Object.assign(Object.assign({}, e), {
//         aid: 1988
//     });
//     return this.fetch.get("/api/search/general/sug/", {
//         query: t,
//         baseUrlType: 2
//     })
// }


async getHashtags(keyword) {
  let params = Object.assign( {
        ...this.client.state.defaultHttpParams,
        WebIdLastTime:Math.floor(Date.now() / 1000),
        "keyword": keyword,
        "app_language":"en"
    },{});
    const urlNew = this.client.signer.sign("https://www.douyin.com/api/upload/challenge/sug/?keyword=x&app_language=en&aid=1988",params);
    console.info(urlNew,"urlNew--------------");

    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/"
        // "x-tt-params": xTTParams,
    };

    const response = await this.client.request.send(urlNew,headers);
    return response;
}


async getMusicLibraryListBySearch(keyword) {
  let body = Object.assign( {
        ...this.client.state.defaultHttpParams,
        "page_num": 1,
        "page_size": 8,
        "keyword": keyword
    },{});
    const urlNew = "https://www.douyin.com/tiktok/v1/creator/music/unlimited/search/list/?aid=1988";//this.client.signer.sign("https://www.douyin.com/api/upload/challenge/sug/?keyword=x&app_language=en&aid=1988",params);
    console.info(urlNew,"urlNew--------------");

    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/"
        // "x-tt-params": xTTParams,
    };

    const response = await this.client.request.send(urlNew,headers,"POST",undefined,body);
    return response;
}

// https://www.douyin.com/tiktokstudio/sound-library?from=creator_center
async getMusicLibraryListByFilter(obj) {
    let body = Object.assign( {"page_num":1,"page_size":8,"source":1,"order_by":1,"filter_config":[{"filter_type":2,"filter_values":[150,151,152,153,154,155,156,157,158,159,160,161,162,163,199]},{"filter_type":1,"filter_values":[1]},{"filter_type":3,"filter_values":[102]}]},{});
    const urlNew = "https://www.douyin.com/tiktok/v1/creator/music/unlimited/search/list/?aid=1988";//this.client.signer.sign("https://www.douyin.com/api/upload/challenge/sug/?keyword=x&app_language=en&aid=1988",params);
    console.info(urlNew,"urlNew--------------");

    const headers = {
        ...this.client.state.defaultHeaders,
        referer: "https://www.douyin.com/"
        // "x-tt-params": xTTParams,
    };

    const response = await this.client.request.send(urlNew,headers,"POST",undefined,body);
    return response;
}

/**
 * 
 * @param e 
 * @returns 
 */
async getChallengeList(e) {
  let params = Object.assign( {
      ...this.client.state.defaultHttpParams,
      "challengeID": "5873",
      "language": "zh-Hant-TW",
      "cursor": "60",
      "aid": 1988,
      "count": 30,
      "coverFormat": 2
  },e);
  const urlNew = this.client.signer.sign("https://www.douyin.com/api/challenge/item_list/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F130.0.0.0%20Safari%2F537.36&challengeID=5873&channel=tiktok_web&cookie_enabled=true&count=30&coverFormat=2&cursor=60&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&focus_state=false&from_page=hashtag&history_len=3&is_fullscreen=false&is_page_visible=true&language=zh-Hant-TW&odinId=7028939348067795974&os=windows&priority_region=US&referer=&region=SG&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&user_is_login=true&verifyFp=verify_m3mu9hnz_kUrkqeiK_hE6T_4ENO_A0Aq_lysDvAxWwklW&webcast_language=zh-Hant-TW",params);
  console.info(urlNew,"urlNew--------------");

  const headers = {
      ...this.client.state.defaultHeaders,
      referer: "https://www.douyin.com/"
      // "x-tt-params": xTTParams,
  };

  const response = await this.client.request.send(urlNew,headers);
  return response;
  

}










}
