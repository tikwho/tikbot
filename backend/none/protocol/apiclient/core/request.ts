import axios from 'axios';
// import { ProxyAgent } from 'proxy-agent';
const { HttpsProxyAgent } = require('https-proxy-agent');
import { ApiClient  } from "..";

export class Request {
  
  constructor(private client: ApiClient ) {

  }

  async send(url, headers, method = 'GET',params?:any, data?:any,responseType?:string,fullRespose?:boolean) {
      if(headers && headers["Content-Type"] && headers["Content-Type"].indexOf("urlencoded")>-1 && "object"==typeof data){
        const params = new URLSearchParams();
        Object.keys(data).forEach(key => params.append(key, data[key]));
        data = params;
      }
      const options:any = {
          method: method,
          url: url,
          headers: headers,
          params,
          data,
          timeout: 8000,
          responseType: responseType||'json' // 默认处理为 JSON，您可以根据需要更改
      };

      if (headers) {
        let ckHeader = Object.keys(headers).find(item=>item.toLowerCase()=="cookie");
        if(ckHeader){headers[ckHeader] = this.client.state.getCookieString();}
      }
      if(method.toLowerCase()=="post"){
        headers["x-secsdk-csrf-token"]  = await this.client.state.getCsrfToken();
      } //postcsrf

      // // 如果设置了代理
      // if (this.client.autoBot.proxy_url&&this.client.autoBot.proxy_url.length) {
      //     let proxyUrl = this.client.autoBot.proxy_url;
      //     if(process.env.pm_id&&this.client.autoBot.proxy_url.match(/(192\.168|127\.0\.0\.1|localhost)/)){
      //       // let proxyUrls = ["http://base-proxy:24000","http://base-v2raya1:20171","http://base-v2raya2:20171","http://base-v2raya3:20171","http://base-v2raya4:20171","http://base-v2raya5:20171","http://base-v2raya6:20171"].sort((a,b)=>{return Math.random()-0.5;})
      //       let proxyUrls = ["http://base-proxy:24000","http://base-v2raya9:20171"].sort((a,b)=>{return Math.random()-0.5;})
      //       proxyUrl = proxyUrls[0];
      //     } //服務器环境

      //     const agent = new HttpsProxyAgent(proxyUrl);
      //     options.httpsAgent = agent;
      //     options.httpAgent = agent;
      // }
      
        let proxyUrl = this.client.autoBot.proxy_url;
        if(process.env.pm_id){
          // let proxyUrls = ["http://base-proxy:24000","http://base-v2raya1:20171","http://base-v2raya2:20171","http://base-v2raya3:20171","http://base-v2raya4:20171","http://base-v2raya5:20171","http://base-v2raya6:20171"].sort((a,b)=>{return Math.random()-0.5;})
          if(!proxyUrl?.length||proxyUrl.match(/(192\.168|127\.0\.0\.1|localhost)/)){
            // let proxyUrls = ["http://base-proxy:24000","http://base-v2raya9:20171"].sort((a,b)=>{return Math.random()-0.5;})
            let proxyUrls = ["http://base-v2raya1:20171","http://base-v2raya9:20171"].sort((a,b)=>{return Math.random()-0.5;})
            proxyUrl = proxyUrls[0];
          }
        } //服務器环境

        if(proxyUrl?.length){
          const agent = new HttpsProxyAgent(proxyUrl);
          options.httpsAgent = agent;
          options.httpAgent = agent;
        }


      // console.info(options.url,options.data,"options--------------");
      try {
          const response = await axios(options);//.catch((err) =>{})

          console.info(response,"response--------------");
          //处理服务器端设置新值的要求
          let newheaders = response.headers;
          if (newheaders&&newheaders["set-cookie"]) {
              this.client.state.processSetCookieHeader(newheaders["set-cookie"]);
              // console.log("new cookie", this.client.state.MSTOKEN);
          }
          if (newheaders&&newheaders["x-ware-csrf-token"]) {
              this.client.state.csrftoken = newheaders["x-ware-csrf-token"].split(",")[1];
              console.log(this.client.state.csrftoken);
          }

          if(fullRespose){ return response; }
          return response.data; // 直接返回解析后的数据
      } catch (error) {
          // 在这里处理错误
          console.error('dyapi Error', error);
          // if (error.response) {
          //     // 请求已发出，服务器以状态代码响应
          //     console.error(error.response.data);
          //     console.error(error.response.status);
          //     console.error(error.response.headers);
          // } else if (error.request) {
          //     // 请求已发出，但未收到响应
          //     console.error(error.request);
          // } else {
          //     // 发生了其他错误
          //     console.error('Error', error.message);
          // }
          return null;
          // throw error;
      }


  }












  // /**
  //    * 发送请求
  //    * @param {String} url
  //    * @param {String} method
  //    * @param {Object} headers
  //    * @param {Any} data
  //    * @param {String} responseType JSON,STRING,BUFFER
  //    * @returns
  //    */
  //  async sendV1(url, method, headers, data, responseType = "JSON") {
  //   console.debug(`%c[${(/* @__PURE__ */ new Date()).toISOString().replace(/T/, " ").replace(/\..+/, "")}]`, "color:#1890FF", `${method}`, url);
  //   return new Promise((resolve, reject) => {
  //     const uri = URL.parse(url, true);
  //     const options = {
  //       hostname: uri.hostname,
  //       port: uri.port,
  //       path: uri.path,
  //       // + uri.search
  //       method: method.toUpperCase(),
  //       agent: new ProxyAgent({getProxyForUrl: url => this.client.autoBot.proxy_url })
  //     };
  //     const requestor = uri.protocol === "https:" ? https : http;
  //     const result = [];
  //     const request = requestor.request(options, (res) => {
  //       res.on("data", (buffer) => {
  //         result.push(buffer);
  //       });
  //       res.on("end", () => {
  //         try {
  //           if (res.headers["x-buyin-sec-verify-code"] || res.headers["x-whale-throughput-abort-data"] || res.headers["bdturing-verify"]) {
  //             let verify = res.headers["x-buyin-sec-verify-code"];
  //             if (!verify) {
  //               verify = res.headers["x-whale-throughput-abort-data"];
  //             }
  //             if (!verify) {
  //               verify = res.headers["bdturing-verify"];
  //             }
  //             resolve({
  //               code: 9001,
  //               msg: "需要滑块验证",
  //               verify,
  //               headers: res.headers,
  //               status: res.statusCode
  //             });
  //             return;
  //           }
  //           if (res.headers["set-cookie"]) {
  //             const cookies = res.headers["set-cookie"];
  //             cookies.forEach((cookie) => {
  //               if (cookie.includes("msToken")) {
  //                 this.MSTOKEN = cookie.split(";")[0];
  //                 console.log("new cookie", this.MSTOKEN);
  //               }
  //             });
  //           }
  //           const buffer = Buffer.concat(result);
  //           if (buffer.length > 0) {
  //             if (responseType.toUpperCase() === "STRING") {
  //               resolve({
  //                 code: 0,
  //                 msg: "ok",
  //                 response: buffer.toString(),
  //                 headers: res.headers,
  //                 status: res.statusCode
  //               });
  //             } else if (responseType.toUpperCase() === "JSON") {
  //               resolve({
  //                 code: 0,
  //                 msg: "ok",
  //                 response: JSON.parse(buffer.toString()),
  //                 headers: res.headers,
  //                 status: res.statusCode
  //               });
  //             } else {
  //               resolve({
  //                 code: 0,
  //                 msg: "ok",
  //                 response: buffer,
  //                 headers: res.headers,
  //                 status: res.statusCode
  //               });
  //             }
  //           } else {
  //             resolve({
  //               code: -1009,
  //               msg: "接口返回数据为空",
  //               headers: res.headers,
  //               status: res.statusCode
  //             });
  //           }
  //         } catch (error) {
  //           resolve({
  //             code: -999,
  //             msg: `请求异常：${error.message}`,
  //             headers: res.headers,
  //             status: res.statusCode
  //           });
  //         }
  //       });
  //       res.on("error", (error) => {
  //         console.warn("request failed->", error);
  //         resolve({
  //           code: -999,
  //           msg: `响应异常：${error.message}`,
  //           headers: res.headers,
  //           status: res.statusCode
  //         });
  //       });
  //     });
  //     if (headers) {
  //       const keys = Object.keys(headers);
  //       for (let i = 0; i < keys.length; i++) {
  //         const key = keys[i];
  //         if (key.toUpperCase() === "COOKIE") {
  //           if (this.client.state.verifyFp) {
  //             let cookie = headers[key].replace(/(;?)s_v_web_id=(.*?);/g, "") + `;s_v_web_id=${this.client.state.verifyFp};`;
  //             if (this.MSTOKEN) {
  //               cookie = cookie.replace(/(;?)msToken=(.*?);/g, "") + `;msToken=${this.MSTOKEN};`;
  //             }
  //             request.setHeader("cookie", cookie);
  //             continue;
  //           } else {
  //             if (this.MSTOKEN) {
  //               const cookie = headers[key].replace(/(;?)msToken=(.*?);/g, "") + `;msToken=${this.MSTOKEN};`;
  //               request.setHeader("cookie", cookie);
  //               continue;
  //             }
  //           }
  //         }
  //         request.setHeader(key, headers[key]);
  //       }
  //     }
  //     if (this.client.state.verifyFp && request.hasHeader("cookie") === false) {
  //       request.setHeader("cookie", `s_v_web_id=${this.client.state.verifyFp};`);
  //     }
  //     if (request.hasHeader("user-agent") === false) {
  //       request.setHeader("user-agent", this.client.state.webUserAgent);
  //     }
  //     if (request.hasHeader("referer") === false) {
  //       request.setHeader("referer", "https://www.tiktok.con/");
  //     }
  //     if (data) {
  //       if (request.hasHeader("content-type") === false) {
  //         request.setHeader("content-type", "application/json");
  //       }
  //       request.write(data);
  //     }
  //     request.on("error", (error) => {
  //       resolve({
  //         code: -990,
  //         msg: `响应异常：${error.message}`
  //       });
  //     });
  //     request.end();
  //   });
  // }

  // async send(url: string, headers: any, method: Method = "GET") {
  //   if (this.client.proxy) {
  //     this.defaults.agent = {
  //       http2: new http2.proxies.Http2OverHttp({
  //         proxyOptions: {
  //           url: this.client.proxy,
  //         },
  //       }),
  //       http: new HttpProxyAgent({
  //         keepAlive: true,
  //         keepAliveMsecs: 1000,
  //         maxSockets: 256,
  //         maxFreeSockets: 256,
  //         scheduling: "lifo",
  //         proxy: this.client.proxy,
  //       }),
  //       https: new HttpsProxyAgent({
  //         keepAlive: true,
  //         keepAliveMsecs: 1000,
  //         maxSockets: 256,
  //         maxFreeSockets: 256,
  //         scheduling: "lifo",
  //         proxy: this.client.proxy,
  //       }),
  //     };
  //   }
  //   try {
  //     const res = await got(url, {
  //       ...this.defaults,
  //       headers: headers,
  //       method: method,
  //     });
  //     console.info(res,"res-------------------------------------")
  //     return res;
  //   } catch (error: any) {
  //     if (error instanceof HTTPError) {
  //       if (error.response.statusCode === 404 && url.includes("tiktok.com/@")) {
  //         throw new UserNotfoundError();
  //       }

  //       throw new TikTokHttpError(error.message);
  //     }

  //     if (error instanceof RequestError) {
  //       throw new NetworkError(error.message);
  //     }

  //     throw error;
  //   }
  // }
}
