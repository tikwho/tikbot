import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";


export class ApiotherRepository extends Repository {
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
