import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";
import {Imapi} from "../imapi";

export class ApiMessageRepository extends Repository {
  // private userDebug = console.debug;//debug("tiktok:user");


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

  public imapi:Imapi;
  constructor(private client: ApiClient ) {
    super();
    this.imapi = new Imapi(this.client);
  }


  async sendMessage(uid:string,messageItem:any){
    // return await this.imapi.SendMessage({"conversation_id":"0:1:6806020411274331142:7349896061421585450","conversation_short_id":'7410063104137249054',"conversation_type":1,"ticket":"deprecated"},{
    //   type: 7,
    //   content: JSON.stringify({"aweType":0,"text":"💰25% commission + free samples + cash bonuses\nHi. Your videos are just too funny! I'm Lynn from the official Light US store and we'd like to work with you to promote our product Star Ambient Light\nif you're interested, send me your Whats.App to talk more!"})
    // });;
    // return console.info(await this.imapi.GetStrangerConversation() );
    // return console.info(await this.imapi.GetConversationListV2());
    let {code,data:conversation} = await this.imapi.CreateConversation(uid);
    if(!conversation){return {code:503,message:"无发创建会话"};}
    let messageRaw = Object.assign( {} , 
      "string" == typeof messageItem ?{
        type: 7,
        content: {"aweType":0,"text":messageItem}
      }:messageItem);
      if("object"==typeof messageRaw.content){
        // if(messageRaw.type==26){messageRaw.content = Object.assign({"aweType":0,"awe_type":0,"createdAt":Date.now(),"desc":"","disable_forward":false,"disable_recall":false,"is_card":false,"msgHint":"","prev_id":0,"root_id":0},messageRaw.content);}
        messageRaw.content = JSON.stringify(messageRaw.content);
      }
      let sendRes = await this.imapi.SendMessage(conversation.conversation_id,messageRaw);
      // this.imapi.SendMessage({"conversation_id":"0:1:6940517328601924613:7028939348067795974","conversation_short_id":'7310120299335631121',"conversation_type":1,"ticket":"deprecated"},messageRaw);
      // {code,msg,data}
      console.info(sendRes,"sendres--------");
      return sendRes;
}



  public async sendApi(url: any, body: any , params?: any , newheaders?:any,){
    const headers = {
        ...this.client.state.defaultHeaders,
        "accept": "application/x-protobuf",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-protobuf",
        ...newheaders,
    };

    url = this.client.signer.sign( url.indexOf("http")>-1?url:"https://im-api-sg.tiktok.com"+url , params ); 
    let res = await this.client.request.send(url, headers, "POST",undefined, body , 'arraybuffer');
    console.info(res,"res----------");
    return res;
    
  }



  /**
   * 获取ttwid
   * @returns
   */
   public async getTtwid(){
    const f = {
            region: "us",
            aid: 1768,
            needFid: !1,
            service: "www.douyin.com",
            migrate_info: {
                ticket: "",
                source: "node"
            },
            cbUrlProtocol: "https",
            union: !0
        };
        const headers = {
            ...this.client.state.defaultHeaders,
            "Content-Type": "application/json"
        };
        let u = await this.client.request.send("https://www.douyin.com/ttwid/union/register/", headers, "POST",undefined, f, "JSON");
    if (u.headers["set-cookie"]) {
        const _ = this.client.helper.getCookieValue(u.headers["set-cookie"],"ttwid");
        if(_)return _;
    }
    return "1|E3xpa0wcyad67e_xQHqvSIk-nfZU5WHM0U4ml_eS5OE|1702020414|693148c77d365aa0003fc287f406598eaa84a658059185776671982cb28e9e58"
}
  //////////////////////////////////////////////////////////////////////////////////////////////////



}

















  // public async sendMessage(uid:string,messagelist:any){
  //     messagelist = Array.isArray(messagelist)?messagelist:[messagelist];
  //     let ress = [];
  //     let {code,data:conversation} = await this.imapi.CreateConversation(uid);
  //     if(!conversation){return [{code:404,message:"无发创建会话"}];}
  //     for(let messageItem of messagelist){
  //       let messageRaw = Object.assign( {} , 
  //         "string" == typeof messageItem ?{
  //           type: 7,
  //           content: {"aweType":0,"text":messageItem}
  //         }:messageItem);
  //         if("object"==typeof messageRaw.content){
  //           // if(messageRaw.type==26){messageRaw.content = Object.assign({"aweType":0,"awe_type":0,"createdAt":Date.now(),"desc":"","disable_forward":false,"disable_recall":false,"is_card":false,"msgHint":"","prev_id":0,"root_id":0},messageRaw.content);}
  //           messageRaw.content = JSON.stringify(messageRaw.content);
  //         }
  //         let sendRes = await this.imapi.SendMessage(conversation.conversation_id,messageRaw);
  //         // this.imapi.SendMessage({"conversation_id":"0:1:6940517328601924613:7028939348067795974","conversation_short_id":'7310120299335631121',"conversation_type":1,"ticket":"deprecated"},messageRaw);
  //         // {code,msg,data}
  //         console.info(sendRes,"sendres--------");
  //         ress.push(sendRes);
  //     }
  //     return ress;
  // }
