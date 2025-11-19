const U = require('long');
import * as z from "./proto.js";
import { v4 as uuidv4 } from 'uuid';
import * as H from "moment";
import { CustomWebSocket } from "./websocket";
import AutoBot from "../AutoBot";
import { Utils } from "./utils.js";
import { async } from "rxjs";

// import {Long as U} from 'long';
// const z = require('./proto.js');
// import * as DouToolsAPI from "./doutools.js";
// import * as API from "./plugin.js";
// import { le } from "./DyApi.js";

// import * as le from "./DyApi";
// import * as API from "./api";

// import { DyApiNew } from "./DyApiNew";

/////////////////////////////////////////////
interface BasicRequest {
    sequence_id: number;
    log_id: any; // Replace 'any' with a specific type
    service: number;
    method: number;
    headers: { key: string; value: string }[];
    payload_type: string;
    payload: any; // Replace 'any' with a specific type
  }
  
  interface Package {
    seqId: number;
    resolve: Function; // Use more specific types if possible
    reject: Function;
    createTime: Date;
  }
  
  const M = {
    aid: 6383,
    fpid: 9,
    inbox_type: 0,
    sdk_version: "0.0.0",
    build_number: "76d6fcf:Detached: 76d6fcf342314178db975b343634c6c9084476a4",
    accsskey: "",
    uid: "",
    platform: "douyin_pc"
  };

//   const M = {
//     aid: 1180,
//     fpid: 9,
//     inbox_type: 0,
//     sdk_version: "0.0.0",
//     build_number: 'f59aa4a:fix/upgrade-uploader',
//     accsskey: "",
//     uid: "",
//     platform: "iphone"
//   };
  
  const Q = {
    sequence_id: 10000,
    packages: [] as Package[],
    conversations: {},
    images: []
  };
  
  const Io = (f: any): number => { // Replace 'any' with a specific type
    const l = ++Q.sequence_id;
    f.sequence_id = l;
    // f.payload.sequence_id = U.fromString(l);
    f.payload.sequence_id = l;
    return l;
  };
  
  const No = (f: Uint8Array, l: Uint8Array, u: number = 0, _: number = f.length - u): number => {
    var s = u = u || 0,
        e = _ = _ || f.length - u,
        o = 0;
    for (s = u, e = _; s < e;) {
        var t = f[s++],
            n = t >> 4;
        if (n > 0) {
            for (var r = n + 240; r === 255;) n += r = f[s++];
            for (var c = s + n; s < c;) l[o++] = f[s++];
            if (s === e) return o
        }
        var d = f[s++] | f[s++] << 8;
        if (d === 0 || d > o) return -(s - 2);
        for (var k = 15 & t, b = k + 240; b === 255;) k += b = f[s++];
        for (var v = o - d, S = o + k + 4; o < S;) l[o++] = l[v++]
    }
    return o
  };
  


// const MessageType = {
// 	Text: 7,
// 	Emoji: 5,
// 	Voice: 17,
// 	Image: 27,
// 	FlashImage: 91,
// 	Video: 30,
// 	Location: 502,
// 	DouyinImage: 77,
// 	DouyinVideo: 8,
// 	DynamicCard: 110,
// 	Link: 26,
// 	Goods: 88
// };

const MessageType = {
	Text: 7,
	Emoji: 5,//及gif
	Voice: 17,
	Image: 27,
	FlashImage: 91,
	Video: 30,
	Location: 502,
	DouyinImage: 77,
	DouyinVideo: 8,
	DynamicCard: 25,//名片
	Link: 26,
	Comment: 40,//评论
	Goods: 43,//商品
	Live: 1021,//直播间
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let botClientInf;//实列
class BotClient {
    private events: { [key: string]: Function[] };
    private messageTypes: any[]; // 根据实际情况替换
    private message_ids: string[];
    private startAt: number;
    private strangerTimer: NodeJS.Timer | undefined;
    private uid: string;
    private accsskey:string;
    // private sec_uid: string;
    
    ws:any;


    
    autoBot:AutoBot;//上一级的实例

    constructor( autoBot:AutoBot ) {
        this.autoBot = autoBot;
        this.uid = this.autoBot.accountEntity.uid;

        this.events = {};
        this.messageTypes = Object.values(MessageType);
        this.message_ids = [];
        this.ws = new CustomWebSocket();
        console.info(this.ws,this.ws.on,"this.ws-----------------");
        // this.ws.on("message", this.messageHandler.bind(this));
        // this.ws.on("downtime", this.downtimeHandler.bind(this));

        botClientInf = this;
    }

    on(event: string, handler: Function): void {
        this.events[event] = this.events[event] || [];
        this.events[event].push(handler);
    }

    emit(event: string, ...args: any[]): void {
        const _this = this;
        this.events[event]?.forEach(handler => {
            try {
                args = Utils.decycle(args);
                handler(...args);
            } catch (error) {
                console.log("触发事件失败：", error.message);
            }
        });
    }

    off(event: string, handler: Function): void {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(h => h !== handler);
        }
    }

    createBody(f: any, l?: string): BasicRequest{ // Replace 'any' with a specific type
        const u = z.RequestBasic.create({
            sequence_id: 0,
            // seqid: U.fromNumber(10015),
            logid: U.fromNumber(new Date().getTime()),
            service: 5,
            method: 1,
            headers: [
                { "key": "session_aid", "value": "6383" },
                { "key": "session_did", "value": "0" },
                { "key": "app_name", "value": "douyin_pc" },
                { "key": "priority_region", "value": "cn" },
                { "key": "user_agent", "value": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
                { "key": "cookie_enabled", "value": "true" },
                { "key": "browser_language", "value": "zh-CN" },
                { "key": "browser_platform", "value": "Win32" },
                { "key": "browser_name", "value": "Mozilla" },
                { "key": "browser_version", "value": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" },
                { "key": "browser_online", "value": "true" },
                { "key": "screen_width", "value": "1920" },
                { "key": "screen_height", "value": "1080" },
                { "key": "referer", "value": "https://www.douyin.com/" },
                { "key": "timezone_name", "value": "Asia/Shanghai" },
                { "key": "deviceId", "value": "0" },
                { "key": "webid", "value": "7442195915086005769" },
                { "key": "fp", "value": "verify_m40vaajn_TtguYuTI_0qXj_4Pmv_BVez_JXpPERHIp159" },
                { "key": "is-retry", "value": "0" }
            ],
            payload_type: "pb",
            payload: {
                cmd: f,
                sequence_id: 0,
                sdk_version: M.sdk_version,
                token: this.accsskey,
                refer: 3,
                inbox_type: M.inbox_type,
                build_number: M.build_number,
                body: {},
                device_id: `${this.uid}`,
                device_platform: M.platform,
                // auth_type: 1,
                "auth_type": 4,
                // JSON.stringify(this.ctx.option);
                "sdk_cert": "cHViLkJDZ1JackFOaURkbDl3a05HQ2pyV3lGeXdkVkhsMGdxS21MbGJVWm5LWjN2Z2N4NTUwajMwMS9zbm5hSTBlUnVMSm8zY0V2SVViMldNaEFhYnJzLzk1WT0=",
                "ts_sign": "ts.2.2293a4feaa4aaca9d3be6f020d4d1f592ef89d3f6c9389f22fd2baa2f2a850edc4fbe87d2319cf05318624ceda14911ca406dedbebeddb2e30fce8d4fa02575d",
                // this.resolve(a.Uk.SecurityProxy).sign(o.join("&")) ["content={\\"mention_users\\":[],\\"aweType\\":700,\\"richTextInfos\\":[],\\"text\\":\\"1\\"}","conversation_id=0:1:105319951605:105319951605","conversation_short_id=6895560494514438663"].
                "reuqest_sign": "MEQCIEfKLdWyMl7b4UvuO/1rGDzTXtZvwfVk9InKwFQU3hKKAiBIb/EXGb9t5Vsh03PuWE7IJ2ZwUqg60CmneNdyjFUPqQ==",
                headers: [{
                    key: "session_aid",
                    value: `${M.aid}`
                }, {
                    key: "session_did",
                    value: "0"
                }, {
                    key: "app_name",
                    value: M.platform
                }, {
                    key: "priority_region",
                    value: "cn"
                }, {
                    key: "user_agent",
                    value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
                }, {
                    key: "cookie_enabled",
                    value: "true"
                }, {
                    key: "browser_language",
                    value: "zh-CN"
                }, {
                    key: "browser_platform",
                    value: "Win32"
                }, {
                    key: "browser_name",
                    value: "Mozilla"
                }, {
                    key: "browser_version",
                    value: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
                }, {
                    key: "browser_online",
                    value: "true"
                }, {
                    key: "screen_width",
                    value: "3440"
                }, {
                    key: "screen_height",
                    value: "1440"
                }, {
                    key: "referer",
                    value: ""
                }, {
                    key: "timezone_name",
                    value: "Asia/Singapore"
                }, {
                    key: "deviceId",
                    value: "0"
                }, {
                    key: "webid",
                    value: "0"
                }],
                biz: "douyin",
                access: "douyin_main"
            }
        });
        return l && u.headers.push({
            key: "X-Bogus",
            value: l
        }), u
      }

    async getStrangerMessages() {
        const l = await this.GetStrangerConversation(10);
        console.info(l);
        l.code === 0 && (l.data||[]).forEach(u => {
            u.messages && u.messages.forEach(async _ => {
                const s = _.server_message_id.toString();
                _.create_time.toNumber() > this.startAt && !this.message_ids.includes(s) && (this.message_ids.push(s), await this.triggerMessage(_))
            })
        })
    }
    private handleMsgIds = {};
    async triggerMessage(l) {
        var u;
        if (l != null) {
            const server_msgid = l.server_message_id.toString();
            if(this.handleMsgIds[server_msgid]){return;}
            this.handleMsgIds[server_msgid] = true;
            // console.info(server_msgid,this.handleMsgIds[server_msgid],Date.now(),"server_msgid消息2-----------");

            // console.info(l,"发送消息-----------");
            if (l.conversation_type === 2 && l.message_type === 50001 && l.content && l.content.length > 16) {
                const _ = JSON.parse(l.content);
                if (_.command_type === 7) {
                    const s = await this.GetConversationInfo(l.conversation_short_id),
                        e = {
                            create_time: H(l.create_time.toNumber())
                                .format("YYYY-MM-DD HH:mm:ss"),
                            conversation_id: l.conversation_id,
                            conversation_short_id: l.conversation_short_id,
                            conversation_type: l.conversation_type,
                            message_id: l.server_message_id
                        } as any;
                    if (s.code === 0 ? e.group_info = {
                        name: s.data.conversation_core_info.name,
                        avatar: s.data.conversation_core_info.icon,
                        notice: s.data.conversation_core_info.notice,
                        sec_owner: s.data.conversation_core_info.sec_owner,
                        owner: s.data.conversation_core_info.owner
                    } : e.group_info = {
                        name: "未知群",
                        avatar: "",
                        notice: "",
                        sec_owner: "",
                        owner: ""
                    }, _.added_participant.length > 0)
                        for (let o = 0; o < _.added_participant.length; o++) {
                            const t = _.added_participant[o];
                            e.type = 50007, e.sender = t, e.sec_sender = l.sender === t ? l.sec_sender : "", this.emit("message", {
                                ...e
                            })
                        }
                    if (_.removed_participant.length > 0)
                        for (let o = 0; o < _.removed_participant.length; o++) {
                            const t = _.removed_participant[o];
                            e.type = 50008, e.sender = t, e.sec_sender = l.sender === t ? l.sec_sender : "", this.emit("message", {
                                ...e
                            })
                        }
                    return
                }
            }
            // if (l.sec_sender !== this.sec_uid && this.messageTypes.includes(l.message_type)) {
            if (this.messageTypes.includes(l.message_type)) {
                    const _ = {
                    type: l.message_type,
                    sender: l.sender,
                    sec_sender: l.sec_sender,
                    create_time: H(l.create_time.toNumber())
                        .format("YYYY-MM-DD HH:mm:ss"),
                    conversation_id: l.conversation_id,
                    conversation_short_id: l.conversation_short_id,
                    conversation_type: l.conversation_type,
                    content: l.content ? JSON.parse(l.content) : {},
                    message_id: l.server_message_id,
                    client_id: (u = l.ext.find(s => s.key === "s:client_message_id")) == null ? void 0 : u.value
                } as any;
                if (l.conversation_type === 2) {
                    const s = await this.GetConversationInfo(l.conversation_short_id);
                    s.code === 0 ? _.group_info = {
                        name: s.data.conversation_core_info.name,
                        avatar: s.data.conversation_core_info.icon,
                        notice: s.data.conversation_core_info.notice,
                        sec_owner: s.data.conversation_core_info.sec_owner,
                        owner: s.data.conversation_core_info.owner
                    } : _.group_info = {
                        name: "未知群",
                        avatar: "",
                        notice: "",
                        sec_owner: "",
                        owner: ""
                    }
                }
                this.emit("message", _)
            } else console.log("未知消息", l)
        }
    }
    async messageHandler(l) {
        const u = Buffer.from(l, "binary"),
            _ = z.ResponseBasic.decode(u);
        // console.error(_.payload_encoding,_.payload_type,"_.payload_encoding");
        if (_.payload_encoding === "__lz4") {
            const s = new Uint8Array(_.payload.length * 10),
                e = No(_.payload, s);
            _.payload = s.slice(0, e)
        }
        if (_ && _.payload_type === "text/json") {
            const s = new TextDecoder()
                .decode(_.payload);
            console.log("message json ->", s);
            return
        }

        try {
            _.payload = z.ResponseBasic.Response.decode(_.payload);
            // console.log(_.payload,"pb新消息----------")
            const s = Q.packages.findIndex(e => e.seqId === _.payload.sequence_id);
            if (s > -1) {
                Q.packages[s].resolve(_);
                return
            }
            if (_.payload.body.new_message_notify){
                try {
                    const e = _.payload.body.new_message_notify.message;
                    await this.triggerMessage(e)
                } catch (e) {
                    console.log("消息处理失败：", e.message)
                }
            }else{
                this.emit("cmd_more", _.payload)
            }
        } catch (error) {
            // console.log(_.payload,error,"message pb error")
            // try {
            //     const s1 = new Uint8Array(_.payload.length * 10),
            //     e = No(_.payload, s1);
            //     _.payload = s1.slice(0, e)
            //     console.error(_.payload,"s1.slice(0, e)");
            // } catch (error) {}
            // try {
            //     const s2 = new TextDecoder()
            //     .decode(_.payload);
            //     console.error(s2,"s132.slice(0, e)");
            // } catch (error) {}
        }
    }
    async downtimeHandler() {
        this.emit("downtime")
    }
    async start() {
        console.info(this.autoBot,this.autoBot.apiClient);
        // const u = await this.autoBot.apiClient.user.getCreatorUserInfo(true);

        // console.info(u,"u-------------------------------------------");
        // if (u.user){
        //     this.uid = u.user.uid||u.user.id, this.sec_uid = u.user.sec_uid, M.uid = `${this.uid}`;
        // }
        // // if (u.data){
        // //     this.uid = u.data.uid, this.sec_uid = u.data.sec_uid, M.uid = `${u.data.uid}`;
        // // }
        // else {
        //     return console.log("登录失败：", u.msg), {
        //         code: u.code,
        //         msg: `登录失败：${u.msg}`
        //     };
        // }

        // this.cookie = "d_ticket=0d885d5c752af68c8456c5a22408f25aeb519; uid_tt=76a5f625a0c5505bf242e550a6e496955039894bbed567cd2ae77ab1b972674d; uid_tt_ss=76a5f625a0c5505bf242e550a6e496955039894bbed567cd2ae77ab1b972674d; sid_tt=2472c515b59287998906bfc5bb089f7a; sessionid=2472c515b59287998906bfc5bb089f7a; sessionid_ss=2472c515b59287998906bfc5bb089f7a; store-country-code-src=uid; tt-target-idc=alisg; tt-target-idc-sign=fs9TdLSwEHKRaSIRZoWiSBCCLxH8oECye9E9NUriTpcak7JPor1FuE5dBOAXCwj8NKwSIcbV_eMNjCiBgc9_Qwvo3urrcoT-F1nTqMOIlsF0seo4elNhIuF77gDfZdVg0npldHQ86jZqeYJK2s3BvjAhwBZ7xYu_BW_oFp-ZWg1rPXMdPJl9hfBM4r-6Wvqwq4eG40qXOzhj3ZlOPUlWr_wDqgoTAswwUzs2FPYgQcI9pMvOZhyRJXUe_SWPegAo-NRNVKCYju3Vuu5Q1G2jFx0eqYfzX-0_fdFzxtUH-cR5givk3nMx40V2P2Ezwg8SLfuPmrAWS5xbuV20qyvcMQ_0VUGqX4QkBBgWFUb51RtTsuSlgoAn7-qmqqZAw9bao6wtloiFtSdVLs9R5AKQXPgW1g7p7vuRF4WmjNtX2cnne6EKs-weQqWOef4AX7PZH-7XaTi4GPzFXQR3u4JD-5VCgOT_2si87s4VCvMZi8JJNPgvkYu-zGDmjg1Kga6B; tt_chain_token=5epz12CJ9yZMMIdTnMeDEA==; _ttp=2R45wx2Eva9z9Y7NRYNpdN7tkas; store-idc=alisg; passport_csrf_token=3cfcf40361e3f75cad306401d38bf566; passport_csrf_token_default=3cfcf40361e3f75cad306401d38bf566; store-country-code=cn; sid_guard=2472c515b59287998906bfc5bb089f7a%7C1699768115%7C15552000%7CFri%2C+10-May-2024+05%3A48%3A35+GMT; sid_ucp_v1=1.0.0-KDA5ZDVmMWIwMjQyNGE4Y2VjYzBlZjU1MmQ4YjA4ZmY1NTllYjM2NDcKIAiGiIb6-v-qt2AQs87BqgYYswsgDDD62bqDBjgCQPEHEAMaAm15IiAyNDcyYzUxNWI1OTI4Nzk5ODkwNmJmYzViYjA4OWY3YQ; ssid_ucp_v1=1.0.0-KDA5ZDVmMWIwMjQyNGE4Y2VjYzBlZjU1MmQ4YjA4ZmY1NTllYjM2NDcKIAiGiIb6-v-qt2AQs87BqgYYswsgDDD62bqDBjgCQPEHEAMaAm15IiAyNDcyYzUxNWI1OTI4Nzk5ODkwNmJmYzViYjA4OWY3YQ; tt_csrf_token=M7Cx8ZzY--vrTPafGwd-mcdZJipGsBKGN66E; ttwid=1%7CE3xpa0wcyad67e_xQHqvSIk-nfZU5WHM0U4ml_eS5OE%7C1701617838%7Cabc86428cc691d545c8f8ffac7d54a14104e85f95425b330640f141d2348f9ad; odin_tt=7392dc4de26658727f52aed7634e119dddc01b9dba043abcbca57c84812fc3ff572e2726e7006ecee1efab55aa5aa4710719f0c475256e00c2c6173f0f8b390acaaefb717ebd39e72a2cb37c37faf3ff; msToken=NNlnSkjWUa0LCNJJCM2BljmV2in9zmPFeXX2m5Td38tiMY1rctH7lAqaUqo1VJwZOgM27YOm3u4JJFCR8diVubZYuERKgSgiV9e9lkL1h65DM5DThS-pQBFkXRYao9e-GisDS0Ci39rLQafXDw==",
        // this.uid = "6948680389724570630", this.sec_uid = "MS4wLjABAAAAFFx45kBliCVWYcNDTeDqb4VroMbKGvrOdthfFbszi9_MpcBMHtWA763VK49zGpOh", M.uid = `${this.uid}`

        // access_key: u()(`${this.option.fpId + this.option.appKey + this.option.deviceId}f8a69f1719916z`)
        this.accsskey = Utils.toMd5(`${M.fpid}e1bd35ec9db7b8d846de66ed140b1ad9${this.uid}f8a69f1719916z`);
        // const _ = (this.autoBot.accountEntity.imFrontier||'wss://frontier-pc.douyin.com/ws/v2')+`?aid=${M.aid}&fpid=${M.fpid}&device_id=${this.uid}&access_key=${this.accsskey}&device_platform=${M.platform}`;//&ttwid=${await this.autoBot.apiClient.apiother.getTtwid()}`;
        // const _ = `wss://frontier-im.douyin.com/ws/v2?device_platform=web&version_code=fws_1.0.0&access_key=${this.accsskey}&fpid=${M.fpid}&aid=${M.aid}&device_id=${this.uid}&device_platform=${M.platform}&xsack=0&xaack=0&xsqos=0&qos_sdk_version=2&conn_tag=aweme_pc_web`;
        const _ = `wss://frontier-im.douyin.com/ws/v2?access_key=${this.accsskey}&fpid=${M.fpid}&aid=${M.aid}&device_id=${this.uid}&device_platform=${M.platform}`;

        console.info(_);

        let connectRes = await this.ws.start(_, this.autoBot.cookie , ["binary", "base64", "pbbp2"],this.autoBot.proxy_url);
        if(connectRes){
            this.ws.on("message", this.messageHandler.bind(this));
            this.ws.on("downtime", this.downtimeHandler.bind(this));
            this.startAt = Date.now();
            this.strangerTimer = setInterval(this.getStrangerMessages.bind(this), 1000 * 60);
            return {
                code: 0,
                msg: "连接成功"
            };
        }else{
            return {
                code: 1,
                msg: "websocket登录失败"
            }
        }
    }
    stop() {
        this.events = {}, clearInterval(this.strangerTimer), this.ws.off("message", this.messageHandler), this.ws.off("downtime", this.downtimeHandler), this.ws.stop()
    }
    //发送ws消息
    async sendWs(f: BasicRequest): Promise<any>{ // Replace 'any' with specific return type
            const l = Io(f),
            u = new Promise((s, reject) => {
                setTimeout(() => {
                    Q.packages.findIndex(o => o.seqId === l), reject("请求超时，请检查网络是否正常")
                }, 5e3)
            }),
            _ = new Promise((resolve, reject) => {
                try {
                    console.error(JSON.stringify(f.payload),"发送参数");
                    const o = Buffer.from(z.RequestBasic.encode(f)
                        .finish(), "binary");
                    Q.packages.push({
                        seqId: l,
                        resolve: resolve,
                        reject: reject,
                        createTime: new Date
                    })
                    ,this.ws.send(o)
                } catch (o) {
                    reject(o)
                }
            });
            return Promise.race([_, u])
    }
    //获取消息相关////////////////////////////////////////////////////////////////////////////////////////// 
    //获取用户消息
    async GetMessagesByUserInitV2(e:any) {
        const _ = this.createBody(203);
        // '{"inboxType":0,"cursor":{"low":0,"high":0,"unsigned":false}}'
        _.payload.body.messages_per_user_init_v2_body = {
            cursor: e.cursor||U.fromValue(`0`),
            init_sub_type: e.initSubType,
            conv_limit: e.convLimit,
            msg_limit: e.msgLimit
        };

        try {
            const s = await this.sendWs(_);
            if(s.payload.status_code === 0){
                for(let con of (s.payload.body.messages_per_user_init_v2_body?.conversations||[])){
                    Q.conversations[con.conversation_id] = con;
                }
                return {
                    code: 0,
                    msg: "ok",
                    data: Utils.decycle(s.payload.body.messages_per_user_init_v2_body)
                };
            }else{
                return {
                    code: s.payload.status_code,
                    msg: s.payload.error_desc
                };
            }
        } catch (s) {
            return {
                code: -1e3,
                msg: s.message
            }
        }
    }

    async getMessagesByConversation(e:any) {
        const _ = this.createBody(301);
        // anchorIndex是时间戳
        // {"conversationId":"0:1:6948680389724570630:7028939348067795974","conversationShortId":{"low":1946255659,"high":1701707687,"unsigned":false},"conversationType":1,"anchorIndex":{"low":427495711,"high":396281,"unsigned":false},"direction":1,"limit":20,"inboxType":0}
        _.payload.body.messages_in_conversation_body = {
            conversation_id: e.conversationId,
            conversation_short_id: e.conversationShortId,
            conversation_type: e.conversationType,
            anchor_index: e.anchorIndex ||U.fromValue(`${Date.now()-60*60*12}000`),
            limit: e.limit,
            direction: e.direction
        };
        try {
            const s = await this.sendWs(_);
            return s.payload.status_code === 0 ? {
                code: 0,
                msg: "ok",
                data: s.payload.body.messages_per_user_body
            } : {
                code: s.payload.status_code,
                msg: s.payload.error_desc
            }
        } catch (s) {
            return {
                code: -1e3,
                msg: s.message
            }
        }
    }

    // async GetMessagesByUser(e:any) {
    //     const _ = this.createBody(200);
    //     _.payload.body.messages_per_user_body = {
    //         cursor: e.cursor||U.fromValue(`${Date.now()-60*60*24}000`),
    //         limit: e.limit
    //     };
    //     try {
    //         const s = await this.sendWs(_);
    //         return s.payload.status_code === 0 ? {
    //             code: 0,
    //             msg: "ok",
    //             data: s.payload.body.messages_per_user_body
    //         } : {
    //             code: s.payload.status_code,
    //             msg: s.payload.error_desc
    //         }
    //     } catch (s) {
    //         return {
    //             code: -1e3,
    //             msg: s.message
    //         }
    //     }
    // }
     //获取消息相关end ////////////////////////////////////////////////////////////////////////////////////////// 

    //会话相关//////////////////////////////////////////////////////////////////////////////////////////
    //l是U.fromString(l)后的uid值 
    async CreateConversation(uid, type = 1,participants=[]) {
        let conv = (Object.values(Q.conversations) as any).find(e => {
            return e.conversation_type== type && e.first_page_participants.participants.find(e => e.user_id == U.fromString(uid) );
        });
        if (conv) return {
            code: 0,
            msg: "ok",
            data: conv
        };

        if("string"==typeof participants){participants=[participants];}
        if(participants.length<2){participants.push(uid);}
        if(participants.length<2){ throw new Error("参与者不足2"); }
        console.info(participants,"participants----------");
        const _ = this.createBody(609);
        // {"type":1,"participants":[{"low":262915118,"high":1691944504,"unsigned":false},{"low":-1354660858,"high":1617865727,"unsigned":false}],"inboxType":0}
        _.payload.body.create_conversation_v2_body = {
            conversation_type: type,
            participants: participants.map(item=>{return "string"==typeof item ? U.fromString(item): item;}),
            avatar_url: undefined,
            biz:undefined,
            biz_ext:undefined,
            channel:undefined,
            description:undefined,
            idempotent_id:undefined,
            name:undefined,
            persistent:undefined,
            inboxType:0
        };
        try {
            const s = await this.sendWs(_);
            console.info(s,"CreateConversation s-------------");
            if(s.payload.status_code === 0){
                conv = s.payload.body.create_conversation_v2_body.conversation;
                Q.conversations[conv.conversation_id] = conv;
                return {
                    code: 0,
                    msg: "ok",
                    data: Utils.decycle(conv)
                }
            }
            return {
                code: s.payload.status_code,
                msg: s.payload.error_desc
            }
        } catch (s) {
            console.error(s,"CreateConversation sE-------------");
            return {
                code: -1e3,
                msg: s.message
            }
        }
    }
    
    async GetStrangerConversation(l = 1) {
        const u = this.createBody(1001);
        u.payload.body.get_stranger_conversation_body = {
            cursor: 0,
            count: l,
            show_total_unread: !0
        };
        try {
            const _ = await this.sendWs(u);
            if(_.payload.status_code){
                for(let con of (_.payload.body.get_stranger_conversation_body.conversations||[])){ Q.conversations[con.conversation_id] = con;}
                return {
                    code: 0,
                    msg: "ok",
                    data: Utils.decycle(_.payload.body.get_stranger_conversation_body.conversations)
                };
            }else{
                return {
                    code: _.payload.status_code,
                    msg: _.payload.error_desc
                }
            }
        } catch (_) {
            return {
                code: -999,
                msg: _.message
            }
        }
    }
    //通过conversation_short_id 获得会话ID
    async GetConversationInfo(l) {//
        
        // console.info(this.ws.lastArgs[0],this.ws.client._url,"------------sendws clent2");

        const u = typeof l == "string" ? U.fromString(l) : l,
            _ = (Object.values(Q.conversations) as any).find(e => e.conversation_short_id === u||e.conversation_id==l);
        if (_) return {
            code: 0,
            msg: "ok",
            data: _
        };
        const s = this.createBody(610);
        s.payload.body.get_conversation_info_list_v2_body = {
            conversations: [{
                conversation_short_id: u
            }]
        };
        try {
            const e = await this.sendWs(s);
            if(e.payload.status_code === 0){
                // console.info(e,"GetConversationInfo---------");
                for(let con of (e.payload.body.get_conversation_info_list_v2_body.conversations||[])){
                    Q.conversations[con.conversation_id] = con;
                }
                return {
                    code: 0,
                    msg: "ok",
                    data: e.payload.body.get_conversation_info_list_v2_body.conversations[0] //因使用过多，所以不格式化，使用时格式化
                };
            }else{
                return  {
                    code: e.payload.status_code,
                    msg: e.payload.error_desc
                }
            }
        } catch (e) {
            return {
                code: -1e3,
                msg: e.message
            }
        }
    }
    async GetConversationList() {
        const _ = this.createBody(2006);
        _.payload.body.get_conversation_list_body = {
            sort_type: 1,
            cursor: 0,
            conversation_type: 1,
            limit: 10
        };
        try {
            const s = await this.sendWs(_);
            if(s.payload.status_code === 0){
                for(let con of (s.payload.body.get_conversation_list_body?.conversation_list||[])){
                    Q.conversations[con.conversation_id] = con;
                }
                return {
                    code: 0,
                    msg: "ok",
                    data: Utils.decycle(s.payload.body.get_conversation_list_body)
                };
            }else{
                return {
                    code: s.payload.status_code,
                    msg: s.payload.error_desc
                }
            }
        } catch (s) {
            return {
                code: -1e3,
                msg: s.message
            }
        }
    }

    
    //会话相关end//////////////////////////////////////////////////////////////////////////////////////////

    // async GetConversationListV2() {
    //     try {
    //         const l = z.RequestBasic.Request.create({
    //             cmd: 2006,
    //             sequence_id: 0,
    //             sdk_version: M.sdk_version,
    //             token: "",
    //             refer: 3,
    //             inbox_type: M.inbox_type,
    //             build_number: M.build_number,
    //             body: {},
    //             device_id: `${this.uid}`,
    //             device_platform: M.platform,
    //             // auth_type: 1,
    //             headers: [{
    //                 key: "session_aid",
    //                 value: `${M.aid}`
    //             }, {
    //                 key: "session_did",
    //                 value: "0"
    //             }, {
    //                 key: "app_name",
    //                 value: M.platform
    //             }, {
    //                 key: "priority_region",
    //                 value: "cn"
    //             }, {
    //                 key: "user_agent",
    //                 value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
    //             }, {
    //                 key: "cookie_enabled",
    //                 value: "true"
    //             }, {
    //                 key: "browser_language",
    //                 value: "zh-CN"
    //             }, {
    //                 key: "browser_platform",
    //                 value: "Win32"
    //             }, {
    //                 key: "browser_name",
    //                 value: "Mozilla"
    //             }, {
    //                 key: "browser_version",
    //                 value: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
    //             }, {
    //                 key: "browser_online",
    //                 value: "true"
    //             }, {
    //                 key: "screen_width",
    //                 value: "3440"
    //             }, {
    //                 key: "screen_height",
    //                 value: "1440"
    //             }, {
    //                 key: "referer",
    //                 value: ""
    //             }, {
    //                 key: "timezone_name",
    //                 value: "Asia/Singapore"
    //             }, {
    //                 key: "deviceId",
    //                 value: "0"
    //             }, {
    //                 key: "webid",
    //                 value: "0"
    //             }],
    //             auth_type: 4,
    //             biz: "douyin_web",
    //             access: "web_sdk",
    //             sdk_cert: "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNFekNDQWJxZ0F3SUJBZ0lVYytFV1M1ZlE1Y3NoeVZ0VUYxWFlxV2VSU3Fzd0NnWUlLb1pJemowRUF3SXcKTVRFTE1Ba0dBMVVFQmhNQ1EwNHhJakFnQmdOVkJBTU1HWFJwWTJ0bGRGOW5kV0Z5WkY5allWOWxZMlJ6WVY4eQpOVFl3SGhjTk1qTXdOREUwTVRZd05ERTNXaGNOTXpNd05ERTFNREF3TkRFM1dqQW5NUXN3Q1FZRFZRUUdFd0pEClRqRVlNQllHQTFVRUF3d1BZbVJmZEdsamEyVjBYMmQxWVhKa01Ga3dFd1lIS29aSXpqMENBUVlJS29aSXpqMEQKQVFjRFFnQUVjOHVwUTg4ejZtQ3NCT2RRUzh0RDI4TXdJWGxkY0Q0MEU5RUo0dTZjYmJLY0lra3cvR3pFaUJldgoveWM1WVJPRDJHbkdmcDRxR2R6OHV5RVo5ZmNQWmFPQnVUQ0J0akFPQmdOVkhROEJBZjhFQkFNQ0JhQXdNUVlEClZSMGxCQ293S0FZSUt3WUJCUVVIQXdFR0NDc0dBUVVGQndNQ0JnZ3JCZ0VGQlFjREF3WUlLd1lCQlFVSEF3UXcKS1FZRFZSME9CQ0lFSUg3ZVQwWVIvcDFIUW04VjZlUlNBUU1TM1VQZkJOT29GV3dTNzlrRHdwWkJNQ3NHQTFVZApJd1FrTUNLQUlES2xaK3FPWkVnU2pjeE9UVUI3Y3hTYlIyMVRlcVRSZ05kNWxKZDdJa2VETUJrR0ExVWRFUVFTCk1CQ0NEbmQzZHk1a2IzVjVhVzR1WTI5dE1Bb0dDQ3FHU000OUJBTUNBMGNBTUVRQ0lEVllSeUlzK1BCdXNDUjMKYkpXYi9NcmpUZk1RazY2T2FYalJSemptbWtOV0FpQjhhVncwUzUrNm1KQXV6WU5nYzV4Tzd4Um1QWnhwN1lHdwpTaGJQdEpWSzRnPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo="
    //         });
    //         l.body.get_conversation_list_body = {
    //             sort_type: 1,
    //             cursor: 0,
    //             conversation_type: 2,
    //             limit: 10
    //         };
    //         const u = Buffer.from(z.RequestBasic.Request.encode(l)
    //                 .finish(), "binary"),
    //             _ = {
    //                 accept: "application/x-protobuf",
    //                 "content-type": "application/x-protobuf",
    //                 referer: "https://www.tiktok.com",
    //                 "user-agent": this.autoBot.apiClient.state.webUserAgent,
    //                 cookie: this.autoBot.cookie,
    //                 // "X-Tt-Token": "需要扫码登录获取，抖音聊天客户端"
    //             },
    //             s = await this.autoBot.apiClient.request.send("https://www.tiktok.com/v1/conversation/list", _ , "POST",undefined, u, "BUFFER"),
    //             e = Array.prototype.map.call(new Uint8Array(u), o => ("00" + o.toString(16))
    //                 .slice(-2))
    //             .join("");
    //             console.log("data", e, s instanceof Uint8Array)
    //         if ( s instanceof Uint8Array) {
    //             console.log("response", Array.prototype.map.call(new Uint8Array(s), t => ("00" + t.toString(16))
    //                     .slice(-2))
    //                 .join(""));
    //             const o = z.ResponseBasic.Response.decode(s);
    //             return console.log(o), o.status_code === 0 ? {
    //                 code: 0,
    //                 msg: "ok",
    //                 data: o.body.get_conversation_list_body
    //             } : {
    //                 code: o.status_code,
    //                 msg: o.error_desc
    //             }
    //         } else return {
    //             code: s.code,
    //             msg: s.msg
    //         }
    //     } catch (l) {
    //         return {
    //             code: -999,
    //             msg: l.message
    //         }
    //     }
    // }
    // conversation_id , conversation_short_id, ticket,content,type,mentioned_users
    async SendMessage(l, u, _, s, e = 7, o = []) {
        console.info(this.ws.lastArgs[0],this.ws.client._url,"------------sendws clent");
        const t = Utils.genUUID(),
            n = this.createBody(100);
        n.payload.body.send_message_body = z.RequestBasic.Request.SendMessageRequestBody.create({
            conversation_id: l,
            conversation_type: l.includes(":") ? 1 : 2,
            conversation_short_id: typeof u == "string" ? U.fromString(u) : u,
            content: typeof s == "string" ? s : JSON.stringify(s),
            ext: [{
                key: "s:mentioned_users",
                value: ""
            }, {
                key: "s:client_message_id",
                value: `${t}`
            }, {
                key: "s:stime",
                value: `${Date.now()}`
            }],
            message_type: e,
            ticket: _,
            client_message_id: `${t}`,
            mentioned_users: o||[]
        });
        try {
            
            console.info( n ," r ----------");
            const r = await this.sendWs(n);
            // const r = await this.sendByHttp(n);
            console.error(r,"r-----------");
            if (r.payload.status_code === 0) {
                const c = r.payload.body.send_message_body.checkMessage ? JSON.parse(r.payload.body.send_message_body.checkMessage) : null;
                return c && c.status_code && c.status_code !== 0 ? {
                    code: c.status_code,
                    msg: `错误代码：${c.status_code}`,
                    data: r.payload.body.send_message_body
                } : {
                    code: 0,
                    msg: "ok",
                    data: r.payload.body.send_message_body
                }
            } else return {
                code: r.payload.status_code,
                msg: r.payload.error_desc
            }
        } catch (r) {
            console.info(r,"发送失败");
            return {
                code: -1e3,
                msg: r.message
            }
        }
    }
    async SendTextMessage(l, u, _ = [], s = []) {
        const e = await this.GetConversationInfo(l);
        if (e.code === 0) {
            const {
                conversation_id: o,
                conversation_short_id: t,
                ticket: n
            } = e.data, r = s.map(d => typeof d == "string" ? U.fromString(d) : d);
            return await this.SendMessage(o, t, n, {
                mention_users: [],
                aweType: 700,
                richTextInfos: _||[],
                text: u
            }, 7, r)
        } else return e
    }
    async SendRawMessage(conversation_short_id, msg , mentioned_users = []) {
        // console.info(conversation_short_id, msg , mentioned_users,"SendRawMessage-----");
        const e = await this.GetConversationInfo(conversation_short_id);
        if (e.code === 0) {
            const {
                conversation_id: o,
                conversation_short_id: t,
                ticket: n
            } = e.data, r = mentioned_users.map(d => typeof d == "string" ? U.fromString(d) : d);
            return await this.SendMessage(o, t, n, msg.content , msg.type , r)
        } else return e
    }
    async SendImageMessage(l, u) {
        if (typeof u == "string") {
            const s = Q.images.find(e => e.url === u);
            if (s) u = s.data;
            else {
                // const e = await Ae.uploadImage(u, this.cookie);
                // if (e.code === 0) Q.images.push({
                //     url: u,
                //     data: e.data
                // }), u = e.data;
                // else return e
            }
        }
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e,
                ticket: o
            } = _.data;
            return await this.SendMessage(s, e, o, {
                resource_url: {
                    oid: u.Encryption.Uri,
                    skey: u.Encryption.SecretKey,
                    data_size: u.Encryption.Extra.img_size,
                    md5: u.Encryption.Extra.encryption_md5
                },
                cover_height: Number(u.Encryption.Extra.img_height),
                cover_width: Number(u.Encryption.Extra.img_width),
                check_pics: [],
                md5: u.Encryption.SourceMd5,
                from_gallery: 1,
                aweType: 2702
            }, 27)
        } else return _
    }
    async SendVideoMessage(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e,
                ticket: o
            } = _.data;
            return await this.SendMessage(s, e, o, {
                aweType: 800,
                content_title: u.desc,
                cover_height: 1920,
                cover_width: 1080,
                itemId: u.aweme_id,
                cover_url: {
                    url_list: u.cover.url_list,
                    uri: u.cover.uri
                },
                content_thumb: {
                    url_list: u.author.avatar.url_list,
                    uri: u.author.avatar.uri
                },
                uid: u.author.uid
            }, 8)
        } else return _
    }
    async SendEmojiMessage(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e,
                ticket: o
            } = _.data;
            return await this.SendMessage(s, e, o, u, 5)
        } else return console.log("GetConversationInfo", l, _), _
    }
    async SendLinkMessage(l, u, _, s, e) {
        const o = await this.GetConversationInfo(l);
        if (o.code === 0) {
            const {
                conversation_id: t,
                conversation_short_id: n,
                ticket: r
            } = o.data;
            return await this.SendMessage(t, n, r, {
                "activity_slogan": "",
                "aweType": 2602,
                "awe_type": 2602,
                "bg_url": "",
                "big_pic_url": "",
                "cover_url": s || "https://cos2.wmlhust.wang/agentImg/qr_jxX91qGt294UtMud8xk7Va0KDj5JnE33_1745555955_v1y.png",
                "desc": e,
                "disable_forward": true,
                "disable_recall": true,
                "im_extra": {
                  "disable_recall": true,
                  "forbid_group_chat": false,
                  "forbid_multi_select": false,
                  "share_source": 0
                },
                "is_card": true,
                "link_url": _,
                "link_url_v2": _,
                "link_url_v2_version": "1",
                "micro_app_info": {},
                "push_detail": "[消息卡片]",
                "scene_type": "",
                "text": "",
                "title": u || "点这里咨询",
                "ui_extra": {
                  "bg_color_type": 0,
                  "desc_color": "FFf20505",
                  "title_color": "FF040404"
                }
            }, 26);
        } else return o
    }
    async SendInviteMessage(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e,
                ticket: o
            } = _.data;
            return await this.SendMessage(s, e, o, {
                forbidden_actions: 29,
                type_desc: "群聊邀请",
                event: {
                    event_name: "group_chat_click_invite",
                    param: {
                        conversation_id: u,
                        from_im_uid: this.uid
                    }
                },
                aweme_invite_card: {
                    conversation_id: u
                }
            }, 58)
        } else return _
    }
    async SendShopMessage(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e,
                ticket: o
            } = _.data;
            return await this.SendMessage(s, e, o, {
                avatar: {
                    height: 0,
                    data_size: 0,
                    url_list: ["https://p6-item.ecombdimg.com/img/tos-cn-i-6vegkygxbk/18d8637edb0644bfbbd5a02ea7ba2b03~tplv-5mmsx3fupr-re_cp:192:192:q100.jpeg"],
                    width: 0
                },
                ecom_share_track_params: '{"shop_id":"99457717","is_ec_shopping":"1","share_action_type":"click","enter_from":"store_page","from_user_id":"2850362956720067","secuid":"MS4wLjABAAAA_tJXDcDph1QWkvb_qtwXOY17BiYLEhG2LDohnvoMndG55Lq_UCBXRpP_FJFz7E-g"}',
                entrance_location: "message",
                name: "旺达数码店",
                sec_shop_id: "EBKOgWUm",
                aweType: 6400
            }, 64)
        } else return _
    }
    async SendGoodsMessage(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e,
                ticket: o
            } = _.data;
            return await this.SendMessage(s, e, o, {
                aweType: 8802,
                id: "16876877481397050845566917476615",
                description: "[商品卡片]",
                push_detail: "[商品卡片]",
                schema: "sslocal://microapp?app_id=tta6454158b1a15a1b0b&bdp_card_id=lc4613a10e508d6b83&bdp_group_id=ecom&bdpsum=5e963d1&one_card_query=%7B%22cardType%22%3A%22goods_card%22%2C%22cid%22%3A%220%3A1%3A62911320595%3A2850362956720067%22%2C%22goodId%22%3A%223584935512135357296%22%2C%22id%22%3A%2216876877481397050845566917476615%22%2C%22targetId%22%3A%2262911320595%22%2C%22userId%22%3A%222850362956720067%22%7D&scene=0&tech_type=11&token=3527692983999485&version=v2&version_type=current",
                height: "80",
                width: "263"
            }, 88)
        } else return _
    }
    async JoinGroup(l) {
        const u = this.createBody(650);
        u.payload.headers = [{
            key: "aid",
            value: "1128"
        }, {
            key: "app_name",
            value: "aweme"
        }], u.payload.body.conversation_add_participants_body = z.RequestBasic.Request.AddConversationParticipantsRequest.create({
            conversation_id: l,
            conversation_type: 2,
            conversation_short_id: typeof l == "string" ? U.fromString(l) : l,
            participants: [U.fromString(M.uid)],
            ext: [{
                key: "invitation",
                value: `{"invitee":{"source_app_id":1128},"invitor":{"im_user_id":${this.uid}},"source_type":14}`
            }, {
                key: "client_ab_param",
                value: '{"group_reserve_v2_ab":"2"}'
            }]
        });
        try {
            const _ = await this.sendWs(u);
            if (_.payload.status_code === 0) {
                if (_.payload.body.conversation_add_participants_body.status === 0) return {
                    code: 0,
                    msg: "ok",
                    data: _.payload.body.conversation_add_participants_body
                }; {
                    const s = JSON.parse(_.payload.body.conversation_add_participants_body.check_message);
                    return {
                        code: s.status_code,
                        msg: s.status_msg
                    }
                }
            } else return {
                code: _.payload.status_code,
                msg: _.payload.error_desc
            }
        } catch (_) {
            return {
                code: -1e3,
                msg: _.message
            }
        }
    }
    async LeaveGroup(l) {
        const u = await this.GetConversationInfo(l);
        if (u.code === 0) {
            const {
                conversation_id: _,
                conversation_short_id: s,
                ticket: e
            } = u.data, o = this.createBody(652);
            o.payload.body.leave_conversation_body = z.RequestBasic.Request.ConversationLeaveRequestBody.create({
                conversation_id: _,
                conversation_type: _.includes(":") ? 1 : 2,
                conversation_short_id: typeof s == "string" ? U.fromString(s) : s
            });
            try {
                const t = await this.sendWs(o);
                return t.payload.status_code === 0 ? {
                    code: 0,
                    msg: "ok",
                    data: {}
                } : {
                    code: t.payload.status_code,
                    msg: t.payload.error_desc
                }
            } catch (t) {
                return console.log("error", t), {
                    code: -1e3,
                    msg: t.message
                }
            }
        } else return u
    }
    async InviteMembers(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e
            } = _.data, o = this.createBody(650);
            o.payload.body.conversation_add_participants_body = z.RequestBasic.Request.AddConversationParticipantsRequest.create({
                conversation_id: s,
                conversation_type: 2,
                conversation_short_id: typeof e == "string" ? U.fromString(e) : e,
                participants: u,
                ext: [{
                    key: "invitation",
                    value: `{"invitee":{"source_app_id":339757},"invitor":{"im_user_id":${this.uid}},"source_type":6}`
                }]
            });
            try {
                const t = await this.sendWs(o);
                return t.payload.status_code === 0 ? {
                    code: 0,
                    msg: "ok",
                    data: t.payload.body.conversation_add_participants_body
                } : {
                    code: t.payload.status_code,
                    msg: t.payload.error_desc
                }
            } catch (t) {
                return {
                    code: -1e3,
                    msg: t.message
                }
            }
        } else return _
    }
    async RemoveMembers(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e
            } = _.data, o = this.createBody(651);
            o.payload.body.conversation_remove_participants_body = z.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.create({
                conversation_id: s,
                conversation_type: 2,
                conversation_short_id: typeof e == "string" ? U.fromString(e) : e,
                participants: u
            });
            try {
                const t = await this.sendWs(o);
                return t.payload.status_code === 0 ? {
                    code: 0,
                    msg: "ok",
                    data: t.payload.body.conversation_remove_participants_body
                } : {
                    code: t.payload.status_code,
                    msg: t.payload.error_desc
                }
            } catch (t) {
                return {
                    code: -1e3,
                    msg: t.message
                }
            }
        } else return _
    }
    async SilenceMember(l, u, _, s) {
        const e = await this.GetConversationInfo(l);
        if (e.code === 0) {
            const {
                conversation_id: o,
                conversation_short_id: t
            } = e.data, n = this.createBody(2019);
            n.payload.body.block_members_body = z.RequestBasic.Request.BlockMembersRequestBody.create({
                block_status: u,
                conversation_id: o,
                conversation_type: 2,
                conversation_short_id: typeof t == "string" ? U.fromString(t) : t,
                block_time: [{
                    key: _,
                    value: s
                }]
            });
            try {
                const r = await this.sendWs(n);
                return r.payload.status_code === 0 ? {
                    code: 0,
                    msg: "ok",
                    data: r.payload.body.block_members_body
                } : {
                    code: r.payload.status_code,
                    msg: r.payload.error_desc
                }
            } catch (r) {
                return {
                    code: -1e3,
                    msg: r.message
                }
            }
        } else return e
    }
    async RecallMessage(l, u) {
        const _ = await this.GetConversationInfo(l);
        if (_.code === 0) {
            const {
                conversation_id: s,
                conversation_short_id: e
            } = _.data, o = this.createBody(702);
            o.payload.body.recall_message_body = z.RequestBasic.Request.RecallMessageRequestBody.create({
                conversation_id: s,
                conversation_type: 2,
                conversation_short_id: typeof e == "string" ? U.fromString(e) : e,
                server_message_id: u
            });
            try {
                const t = await this.sendWs(o);
                return t.payload.status_code === 0 ? {
                    code: 0,
                    msg: "ok",
                    data: t.payload.body.recall_message_body
                } : {
                    code: t.payload.status_code,
                    msg: t.payload.error_desc
                }
            } catch (t) {
                return {
                    code: -1e3,
                    msg: t.message
                }
            }
        } else return _
    }
    async SetMessageProperty(l, u, _) {
        const s = await this.GetConversationInfo(l);
        if (s.code === 0) {
            const {
                conversation_id: e,
                conversation_short_id: o,
                ticket: t
            } = s.data, n = this.createBody(705);
            n.payload.body.modify_message_property_body = z.RequestBasic.Request.ModifyMessagePropertyRequestBody.create({
                property_list: {
                    conversation_id: e,
                    conversation_type: e.includes(":") ? 1 : 2,
                    conversation_short_id: typeof o == "string" ? U.fromString(o) : o,
                    server_message_id: u,
                    client_message_id: _ || uuidv4(),
                    modify_property_content: [{
                        operation: 0,
                        key: "e:love",
                        value: '{"emoji_data":{"icon_url":"https://p6.douyinpic.com/aweme-client-static-resource/single_msg_emoji_love_1588747335.png~tplv-obj.image","me_text":"","text":"❤️"},"type":1}',
                        idempotent_id: `${this.uid}`
                    }]
                },
                ticket: t
            });
            try {
                const r = await this.sendWs(n);
                return r.payload.status_code === 0 ? {
                    code: 0,
                    msg: "ok",
                    data: r.payload.body.modify_message_property_body
                } : {
                    code: r.payload.status_code,
                    msg: r.payload.error_desc
                }
            } catch (r) {
                return console.log("error", r), {
                    code: -1e3,
                    msg: r.message
                }
            }
        } else return s
    }
    // async UploadImage(l) {
    //     return await Ae.uploadImage(l, this.cookie)
    // }
}

export default BotClient;
