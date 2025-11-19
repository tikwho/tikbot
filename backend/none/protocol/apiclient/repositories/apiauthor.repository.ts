import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";
import { Utils } from "../../botclient/utils";


export class ApiAuthorRepository extends Repository {
  private userDebug = console.debug;//debug("tiktok:user");
  private _defaultApiParams = {
    user_language:"en",
    aid:4331,
    app_name:"i18n_ecom_alliance",
    device_id:0,
    device_platform:"web",
    cookie_enabled:true,
    screen_width:1920,
    screen_height:1080,
    browser_language:"en-US",
    browser_platform:"Win32",
    browser_name:"Mozilla",
    browser_version:"5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F120.0.0.0+Safari%2F537.36",
    browser_online:true,
    timezone_name:"America%2FChicago",
    shop_region:"ID",
  }

  constructor(private client: ApiClient ) {
    super();
  }

  getHost(region:string="ID"){
    let host = 'https://affiliate.tiktok.com';
    if(region&&region.toLowerCase()=='us'){
      host = 'https://affiliate-us.tiktok.com';
    }
    else if(region&&region.toLowerCase()=='id'){
      host = 'https://affiliate-id.tokopedia.com';
    }
    return host;
  }

  // 作者搜索弹框
  async suggestList(target?: any,region?:string){

    const headers = {
        ...this.client.state.defaultHeaders,
        'Referer': `${this.getHost(region)}/connection/creator?enter_from=affiliate_find_creators`, 
        'Content-Type': 'application/json'
    };
    let data =    {
      "request": Object.assign({"query":"umi_ras","sug_scene":1,"size":20},target)
    };

    let params = {
      ...this._defaultApiParams,
      shop_region:region||"ID",
    }

    const url = this.client.signer.sign( `${this.getHost(region)}/api/v1/insights/affiliate/creator/search/suggestions` , params );
    const response = await this.client.request.send(url, headers , "POST" , undefined , JSON.stringify(data));
    console.info(response);
    return response;

  }

  async searchList(target?: any,region?:string){

    const headers = {
        ...this.client.state.defaultHeaders,
        'Referer': `${this.getHost(region)}/connection/creator?enter_from=affiliate_find_creators`, 
        'Content-Type': 'application/json'
    };
    // let data =    Object.assign({
    //   "request": {
    //     "follower_genders": [],
    //     "follower_age_groups": [],
    //     "managed_by_agency": [],
    //     "pagination": {
    //       "size": 20,
    //       "page": 1,
    //       "search_key": ""
    //     },
    //     "creator_score_range": [],
    //     "content_preference_range": [],
    //     "creator_product_categories": [
    //     ],
    //     "algorithm": 1,
    //     "query": "l",
    //     "query_type": 1
    //   }
    // },target);
    let data =    {
      "request": Object.assign({
            "follower_genders": [],
            "follower_age_groups": [],
            "managed_by_agency": [],
            "pagination": {
                "size": 20,
                "page": 0,
                "search_key": ""
            },
            "creator_score_range": [],
            "content_preference_range": [],
            "algorithm": 3,//Avg. video views
            "query": ""
        },target)
    };

    let params = {
      ...this._defaultApiParams,
      shop_region:region||"ID",
    }

    const url = this.client.signer.sign( `${this.getHost(region)}/api/v1/oec/affiliate/creator/marketplace/search` , params );
    const response = await this.client.request.send(url, headers , "POST" , undefined , JSON.stringify(data));
    console.info(response);
    return response;

  }

  async findList(target?: any,region?:string){

    const headers = {
        ...this.client.state.defaultHeaders,
        'Referer': `${this.getHost(region)}/connection/creator?enter_from=affiliate_find_creators`, 
        'Content-Type': 'application/json'
    };
    let data = Object.assign({
        "query": "",
        "pagination": {
            "size": 20,
            "page": 0
        },
        "query_type": 1,
        "filter_params": {
            "category_list": [
                {
                    "string_list": [
                      
                    ]
                }
            ],
            "follower_size_groups": [
                2
            ]
        },
        "algorithm": 20
    },target);

    let params = {
      ...this._defaultApiParams,
      shop_region:region||"US",
    }

    const url = this.client.signer.sign( `${this.getHost(region)}/api/v1/oec/affiliate/creator/marketplace/find` , params );
    const response = await this.client.request.send(url, headers , "POST" , undefined , JSON.stringify(data));
    console.info(response);
    return response;

  }

  async contactTypes(target?: any,region?:string){
    const headers = {
        ...this.client.state.defaultHeaders,
        'Referer': `${this.getHost(region)}/connection/creator?enter_from=affiliate_find_creators`, 
        'Content-Type': 'application/json'
    };

    let params = Object.assign({
      ...this._defaultApiParams,
      creator_oecuid: "7495209079832939506",
      scene: 10,
      shop_id: "7495480409071847518",
      shop_region:region||"ID",
    },target);

    const url = this.client.signer.sign( `${this.getHost(region)}/api_sens/v1/affiliate/cmp/contact_types` , params );
    const response = await this.client.request.send(url, headers );
    return response;

  }

  async contactDetail(target?: any,region?:string){
    const headers = {
        ...this.client.state.defaultHeaders,
        'Referer': `${this.getHost(region)}/connection/creator?enter_from=affiliate_find_creators`, 
        'Content-Type': 'application/json'
    };

    let params = Object.assign({
      ...this._defaultApiParams,
      creator_oecuid: "7495209079832939506",
      scene: 10,
      shop_id: "7495480409071847518",
      shop_region:region||"ID",
    },target);

    const url = this.client.signer.sign( `${this.getHost(region)}/api_sens/v1/affiliate/cmp/contact` , params );
    const response = await this.client.request.send(url, headers );
    return response;

  }

 

}
