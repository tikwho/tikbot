import { State } from "./core/state";
import { Request } from "./core/request";
import { HelperService, SignerService } from "./services";

import { ApiNoticeRepository, ApiotherRepository, ApiSearchRepository, ApiVideoRepository, UserRepository } from "./repositories";
import { ApiliveRepository } from "./repositories/apilive.repository";
import { ApiAuthorRepository } from "./repositories/apiauthor.repository";
import { ApiMessageRepository } from "./repositories/apimessage.repository";

interface AutoBotClass {
  cookie:string,
  proxy_url?:string,
  id?:string,
  entity?:any
}
export class ApiClient {

  autoBot:AutoBotClass;//上一级的实例
  

  public state:State;
  public helper:HelperService;
  public signer:SignerService;
  public request:Request;
  public user:UserRepository;
  public apinotice:ApiNoticeRepository;
  public apiother:ApiotherRepository;
  public apilive:ApiliveRepository;
  public apiauthor:ApiAuthorRepository;
  public apimessage:ApiMessageRepository;
  public apivideo:ApiVideoRepository;
  public apisearch: ApiSearchRepository;
  
  constructor(autoBot:AutoBotClass) {
    this.autoBot = autoBot;
    // console.info(this.autoBot,"this.autoBot---------");

    this.state = new State(this);
    this.helper = new HelperService();
    this.signer = new SignerService(this);
    this.request = new Request(this);
    this.user = new UserRepository(this);
    this.apinotice = new ApiNoticeRepository(this);
    this.apivideo = new ApiVideoRepository(this);
    this.apiother = new ApiotherRepository(this);
    this.apilive = new ApiliveRepository(this);
    this.apiauthor = new ApiAuthorRepository(this);
    this.apimessage = new ApiMessageRepository(this);
    this.apisearch = new ApiSearchRepository(this);

  }

  /**
   * 保存ck
   * @returns 
   */
  async saveToken(){
    if(!this.autoBot.entity){return;}
    this.autoBot.entity.cookies_str = await this.state.getCookieString();
    this.autoBot.entity.save();
  }

  async checkMsToken(){
    if(!this.state.getCookieByName('msToken')){
      await this.apilive.authorInfo();
      this.saveToken();
    }
  }


  // public state = new State(this);
  // public helper = new HelperService();
  // public signer = new SignerService(this);
  // public request = new Request(this);
  // public user = new UserRepository(this);
  // public apinotice = new ApiNoticeRepository(this);
  // public apiother = new ApiotherRepository(this);
  // public apilive = new ApiliveRepository(this);
  // public apiauthor = new ApiAuthorRepository(this);

  // public apimessage = new ApiMessageRepository(this);
}
