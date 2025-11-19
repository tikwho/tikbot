import { ApiClient } from "..";

export class State {
  constructor(private client: ApiClient ) {
    // console.info(this.client.autoBot,"this.client.autoBot.cookie----------");
    this.cookies = this.parseCookie(this.client.autoBot.cookie);
  }
  
  private _webUserAgent =
  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"; //signe中定义的ua一致

  private _mobileUserAgent =
    "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1";

  //html
  private _defaultHttpHeaders: any = {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "zh-CN,zh;q=0.9",
    "sec-ch-ua":
    '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": this._webUserAgent,
  };

  //api
  private _defaultHeaders: any = {
    accept: "application/json, text/plain, */*",
    "accept-encoding": "gzip",
    "accept-language": "zh-CN,zh;q=0.9",
    referer: "https://www.douyin.com/",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "none",
    "sec-gpc": "1",
    "Cookie":"tiktok_webapp_theme=light;store-idc=alisg; store-country-code=us;store-country-code-src=uid; tt-target-idc=alisg;_tt_enable_cookie=1;",
    "user-agent": this._webUserAgent,
  };

  public set mobileUserAgent(mobileUserAgent: string) {
    this._mobileUserAgent = mobileUserAgent;
  }

  public get mobileUserAgent() {
    return this._mobileUserAgent;
  }

  public set webUserAgent(webUserAgent: string) {
    this._webUserAgent = webUserAgent;
  }

  public get webUserAgent() {
    return this._webUserAgent;
  }

  public set defaultHeaders(headers: any) {
    this._defaultHeaders = headers;
  }

  public get defaultHeaders() {
    let headers = Object.assign({},this._defaultHeaders);
    headers.cookie = this.getCookieString();
    console.info(headers.cookie,"headers.cookie-------------");
    return headers;
  }

  public set defaultNoAuthHeaders(headers: any) {
    this._defaultHeaders = headers;
  }

  public get defaultNoAuthHeaders() {
    return this._defaultHeaders;
  }

  public set defaultHttpHeaders(headers: any) {
    this._defaultHttpHeaders = headers;
  }

  public get defaultHttpHeaders() {
    let headers = Object.assign({},this._defaultHttpHeaders);
    headers.cookie = this.getCookieString();
    return headers;
  }

  public get defaultHttpParams(){
    let _defaultApiParams = {
      aid: 1988,
      app_language:"zh-Hans",
      app_name: "tiktok_web",
      browser_language: "zh-CN",
      browser_name: "Mozilla",
      browser_online: true,
      browser_platform: "Win32",
      browser_version: this._webUserAgent,
      channel: "tiktok_web",
      cookie_enabled: true,
      device_id: this.genNumber(16,"7241"),//7241163383021848646,
      device_platform: "web_pc",
      focus_state: true,
      from_page: "user",
      history_len: 7,
      is_fullscreen: false,
      is_page_visible: true,
      os: "windows",
      priority_region: "US",
      referer: "https://www.douyin.com/",
      region: "US",
      root_referer: "https://www.douyin.com/",
      screen_height: 1080,
      screen_width: 1920,
      tz_name: "America/New_York",
      webcast_language: "zh-Hans",
    }
    return _defaultApiParams;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  // //cookie中verifyfp值
  // public verifyFp:string=undefined;
  
  private cookies:any={};

  /**
     * parse cookies string to object
     * @param {string} str  multi-cookie string
     * @returns {Object} parsed cookie object
     */
   private  parseCookie(cookieString) {
    const cookieArray = cookieString.split(';');
    const cookieObject = {};

    cookieArray.forEach(cookie => {
        const [key] = cookie.split('=').map(item => item.trim());
        const value = cookie.substring(cookie.indexOf("=")+1).trim();
        if (key && value !== undefined) {
            cookieObject[key] = value;
        }
    });
    this.cookies = cookieObject;
    return cookieObject;
}

    public processSetCookieHeader(setCookieHeaders) {
      setCookieHeaders = Array.isArray(setCookieHeaders)?setCookieHeaders:[setCookieHeaders];
      for(let setCookieHeader of setCookieHeaders){
        console.info(setCookieHeader,"setCookieHeader---------------");
        const nameValuePart = setCookieHeader.split(';')[0];
        const parts = nameValuePart.split('=');
        const cookieName = parts.shift();
        const cookieValue = parts.join('=');
        if (typeof cookieName === 'string' && cookieName !== '' && typeof cookieValue === 'string') {
            // this.cookies[decodeURIComponent(cookieName)] = decodeURIComponent(cookieValue);
            this.cookies[decodeURIComponent(cookieName)] = cookieValue;
        }
      }
    }

    public getCookieByName(cookieName) {
        return this.cookies[decodeURIComponent(cookieName)];
    }

    public getCookieString() {
        let cookieString = '';
        for (const cookieName in this.cookies) {
            cookieString += encodeURIComponent(cookieName) + '=' + this.cookies[cookieName] + '; ';
        }
        return cookieString;
    }


    genNumber(length,prefix="7314") {
      let number = prefix.toString();
      const remainingLength = length - number.length;
  
      for (let i = 0; i < remainingLength; i++) {
          number += Math.floor(Math.random() * 10); // 生成一个 0 到 9 的随机数字
      }
  
      return number;
  }

  genRegion() {
      let region = this.getCookieByName("store-country-code");
      return region;
  }

  ckconfig;
  async getConfig(type){
      if(!this.ckconfig){
        let configres = await this.client.request.send("https://www.douyin.com/api/v1/web-cookie-privacy/config?locale=en&appId=1988&theme=default&tea=1",this.defaultHttpHeaders);
        this.ckconfig = configres.body;
      }
      let regions1 = {
        sg: {
            region: "ap-singapore-1",
            imageHost: "https://imagex-ap-singapore-1.bytevcloudapi.com",
            imageXServiceId: "0oet5r4bc6"
        },
        va: {
            region: "us-east-1",
            imageHost: "https://imagex-us-east-1.bytevcloudapi.com",
            imageXServiceId: "gqiynnofju"
        },
        gcp: {
            region: "gcp",
            imageHost: "https://imagex-upload-i18n.tiktokv.com",
            imageXServiceId: "fn6yqaj0iz"
        },
        "eu-ttp": {
            region: "gcp",
            imageHost: "https://imagex-upload-i18n.tiktokv.com",
            imageXServiceId: "fn6yqaj0iz"
        },
        "us-ttp": {
            region: "US-TTP",
            imageHost: "https://api16-normal-useast5.tiktokv.us/top/v1",
            imageXServiceId: "0coofgyr5i"
        }
    }

    if(type=="upload_region"){
      console.info(this.ckconfig,this.ckconfig.tea.channel);
      return regions1[this.ckconfig.tea.channel]?.region || "US-TTP";
    }
  }

  public csrftoken:string;
  async getCsrfToken(){
    if(!this.csrftoken){
      await this.client.request.send("https://www.douyin.com/aweme/v1/web/im/user/active/update/",{
        ...this.defaultHeaders,
        "x-secsdk-csrf-request":1,
        "x-secsdk-csrf-version":"1.2.22",
        "Referer": "https://www.douyin.com/discover"
      },"HEAD");
    }
    return this.csrftoken;
}



  


}
