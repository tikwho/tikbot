const protobufjs = require('protobufjs');
const util = require('node:util');
const zlib = require('node:zlib');
const unzip = util.promisify(zlib.unzip);
const U = require('long');
import axios from 'axios';

import { ApiClient } from "../index";
// https://github.com/protobufjs/protobuf.js
// npm i -g protobufjs-cli

// pbjs -t static-module -w commonjs -o compiled.js tiktokSchema.proto
// pbts -o tiktokSchema.d.ts tiktokSchema.js

import {im_proto}  from "./tiktokSchema.js";
import { Utils } from "./utils";
// console.info(im_proto,"TikTok------------");
export class Imapi{
    private conversations:any[]=[];
    private sequence_id=10100;
    constructor(private client: ApiClient ){

    }

    encode(data) {
        let t = im_proto.Request.encode(data).finish();
        
        // console.info(JSON.stringify(im_proto.Request.decode(t)),"b----------------------------------");
        return t;
        // return new Uint8Array(t);
    }
    async decode(binary) {
        if (!(binary instanceof Uint8Array)) {
            binary = new Uint8Array(binary);
        }

        if (binary && binary.length > 2 && binary[0] === 0x1f && binary[1] === 0x8b && binary[2] === 0x08) {
            binary = await unzip(binary);
        }
        const b = im_proto.Response.decode(binary);
        return b;
    }

    apiEnds:any = {
        100: "v1/message/send",
        200: "v1/message/get_by_user",
        203: "v2/message/get_by_user_init",
        206: "v1/message/v1/message/get_by_conversation_search",
        300: "v1/conversation/get_list",
        301: "v1/message/get_by_conversation",
        400: "v1/account/online",
        401: "v1/account/offline",
        410: "v1/client/user_action",
        411: "v1/client/input_status",
        603: "v1/conversation/delete",
        608: "v2/conversation/get_info",
        609: "v2/conversation/create",
        610: "v2/conversation/get_info_list",
        611: "v2/conversation/get_by_favorite",
        612: "v2/conversation/get_by_top",
        614: "v1/conversation/dissolve",
        605: "v1/conversation/participants_list",
        650: "v1/conversation/add_participants",
        651: "v1/conversation/remove_participants",
        652: "v1/conversation/leave",
        654: "v1/conversation/mget_participants",
        655: "v1/conversation/update_participant",
        701: "v1/message/delete",
        702: "v1/message/recall",
        705: "v1/message/set_property",
        902: "v1/conversation/set_core_info",
        904: "v1/conversation/upsert_core_ext_info",
        921: "v1/conversation/set_setting_info",
        922: "v1/conversation/upsert_settings_ext",
        1001: "v1/stranger/get_conversation_list",
        1002: "v1/stranger/get_messages",
        1003: "v1/stranger/delete_message",
        1004: "v1/stranger/delete_conversation",
        1005: "v1/stranger/delete_all_conversations",
        1006: "v1/stranger/mark_read_conversation",
        1007: "v1/stranger/mark_read_all_conversations",
        2e3: "v3/conversation/get_read_index",
        2001: "v3/conversation/get_min_index",
        2002: "v3/conversation/mark_read",
        2003: "tiktok/v1/im/upload_config",
        2004: "v1/media/get_urls",
        2006: "v1/conversation/list",
        2007: "v1/broadcast/send_message",
        2008: "v1/broadcast/recv_message",
        2009: "v1/broadcast/user_counter",
        2011: "v1/voip/create",
        2012: "v1/voip/call",
        2013: "v1/voip/update",
        2014: "v1/channel/heartbeat",
        2015: "v1/profile/get_info",
        2016: "v1/client/report_metrics",
        2017: "v1/config/get",
        2022: "v1/conversation/get_audit",
        2023: "v1/conversation/update_audit",
        // [d.IMCMD.GET_MESSAGE_BY_INIT]: "v1/message/get_message_by_init",
        // [d.IMCMD.MODIFY_MESSAGE_EXT]: "v1/message/modify_ext",
        // [d.IMCMD.UNREAD_COUNT_REPORT]: "v1/client/unread_count",
        // [d.IMCMD.SEND_MESSAGE_P2P]: "v1/send_message/p2p",
        // [d.IMCMD.BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX]: "v1/conversation/batch_get_conversation_participants_readindex",
        // [d.IMCMD.GET_CONVERSATIONS_CHECKINFO]: "v1/conversation/get_checkinfo",
        // [d.IMCMD.GET_MESSAGES_CHECKINFO_IN_CONVERSATION]: "v1/message/get_checkinfo",
        // [d.IMCMD.MARK_MESSAGE]: "v1/message/mark",
        // [d.IMCMD.PULL_MARK_MESSAGE]: "v1/message/pull_mark",
        // [d.IMCMD.GET_CONVERSATION_CORE_INFO]: "v1/conversation/get_core_info",
        // [d.IMCMD.GET_UNREAD_COUNT]: "v1/client/get_unread_count",
        // [d.IMCMD.BLOCK_MEMBERS]: "v1/conversation/block_member",
        // [d.IMCMD.BLOCK_CONVERSATION]: "v1/conversation/block_conversation",
        // [d.IMCMD.CHECK_IN_BLOCKLIST]: "v1/blocklist/check",
        // [d.IMCMD.SET_BLOCKLIST]: "v1/blocklist/set",
        // [d.IMCMD.GET_BLOCKLIST]: "v1/blocklist/get",
        // [d.IMCMD.GET_TICKET]: "v1/conversation/get_ticket",
        // [d.IMCMD.BATCH_UNMARK_MESSAGE]: "v1/message/batch_unmark",
        // [d.IMCMD.MARK_MSG_UNREAD_COUNT_REPORT]: "v1/message/report_mark_count",
        // [d.IMCMD.MARK_MSG_GET_UNREAD_COUNT]: "v1/message/get_mark_count",
        // [d.IMCMD.GET_MESSAGE_INFO_BY_SERVER_ID]: "v1/message/get_by_id",
        // [d.IMCMD.CLIENT_BATCH_ACK]: "v1/client/batch_ack",
        // [d.IMCMD.GET_MESSAGES]: "v1/message/get",
        // [d.IMCMD.ACK_MESSAGE]: "v1/message/ack",
        // [d.IMCMD.GET_MEDIA_UPLOAD_CONFIG]: "v1/media/upload_config",
        // [d.IMCMD.GET_MEDIA_STATUS]: "v1/media/get_status"
    };
    async create(cmd:number,body){
        // const t = xe.encode(e).finish();
       this.sequence_id +=1;
        //{"headers":{"aid":"1988","app_name":"tiktok_web","channel":"web","device_platform":"web_pc","device_id":"7407727825401300523","region":"SG","priority_region":"US","os":"windows","referer":"https://www.douyin.com/@7024673706285548591","root_referer":"","cookie_enabled":"true","screen_width":"1920","screen_height":"1080","browser_language":"en-US","browser_platform":"Win32","browser_name":"Mozilla","browser_version":"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36","browser_online":"true","verifyFp":"verify_m0c59qsj_YWrTqJl0_Lwe2_4hqW_8XpL_mCGmjqAXMVlI","app_language":"en","webcast_language":"en","tz_name":"Asia/Shanghai","is_page_visible":"true","focus_state":"true","is_fullscreen":"false","history_len":"2","user_is_login":"true","data_collection_enabled":"true","from_appID":"1988","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36","Web-Sdk-Ms-Token":"JJ-CkBJCo0NR5YL6N7IteQvxmtYsAU8T1fED-v0aLEnN22fQin_z36wCK5Cw3i9nUyysBOv5T0xsORuogvO9U-pb5hT-LcD-Fq837UqQuFAav6sCg_55qXxcx6_ZJdIutAvQeTOZIR12"},"body":{"send_message_body":{"conversation_id":"0:1:7024673706285548591:7349896061421585450","conversation_short_id":{"low":1590346015,"high":1725284904,"unsigned":false},"conversation_type":1,"content":"{\"aweType\":0,\"text\":\"hi~\"}","mentioned_users":[],"client_message_id":"b997ec57-e7bb-4856-a64a-5a7296d6df6f","ticket":"deprecated","message_type":7,"ext":{"s:mentioned_users":"","s:client_message_id":"b997ec57-e7bb-4856-a64a-5a7296d6df6f"},"send_media_list":[]}},"cmd":100,"sequence_id":{"low":10123,"high":0,"unsigned":false},"refer":3,"token":"","device_id":"7407727825401300523","sdk_version":"1.2.0","build_number":"655de92:Detached: 655de9218246c1e09fa73dcb926ab51d80563d71","inbox_type":0,"device_platform":"web","auth_type":1}
        let region = this.client.state.genRegion();
        let data = {
            "headers": {
                "aid": "1988",
                "app_name": "tiktok_web",
                "channel": "web",
                "device_platform": "web_pc",
                "device_id": this.client.state.genNumber(15),
                "region": region?.toUpperCase()|| "US",
                "priority_region": region?.toUpperCase()||"US",
                "os": "windows",
                "referer": "https://www.douyin.com/messages?allow_label=true&lang=en&scene=business",
                "root_referer": "",
                "cookie_enabled": "true",
                "screen_width": "1920",
                "screen_height": "1080",
                "browser_language": "en-US",
                "browser_platform": "Win32",
                "browser_name": "Mozilla",
                "browser_version": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                "browser_online": "true",
                "verifyFp": this.client.state.getCookieByName('verifyFp')||"verify_m0c59qsj_YWrTqJl0_Lwe2_4hqW_8XpL_mCGmjqAXMVlI",
                "app_language": "en",
                "webcast_language": "en",
                "tz_name": "Asia/Shanghai",
                "is_page_visible": "true",
                "focus_state": "true",
                "is_fullscreen": "false",
                "history_len": "2",
                "user_is_login": "true",
                "data_collection_enabled": "true",
                "from_appID": "1988",
                "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
                "Web-Sdk-Ms-Token": this.client.state.getCookieByName('msToken')
            },
            "body": body,
            "cmd": cmd,
            "sequence_id": U.fromNumber(this.sequence_id),
            "refer": 3,
            "token": "",
            "device_id": this.client.state.genNumber(15),
            "sdk_version": "1.2.0",
            "build_number": "655de92:Detached: 655de9218246c1e09fa73dcb926ab51d80563d71",
            "inbox_type": 0,
            "device_platform": "web",
            "auth_type": 1
        };
        
        console.info(JSON.stringify(data),"!------------- --- ------------------");
        return this.encode(data);
    }

    async req(url,buffer){
        // btoa(String.fromCharCode.apply(null, new Uint8Array( Re(e).buffer)))
        // let base64 = 'CGQQr04aBTEuMS4zIgAoAzAAOhs3OTlkYWM5OnJlbGVhc2UtMjAyNDA4MDUtMTdC0AOiBswDCiswOjE6Njk0MDUxNzMyODYwMTkyNDYxMzo3MDI4OTM5MzQ4MDY3Nzk1OTc0EAEYkYKX2uf1sLllIhl7ImF3ZVR5cGUiOjAsInRleHQiOiI1NiJ9KhUKEXM6bWVudGlvbmVkX3VzZXJzEgAqOwoTczpjbGllbnRfbWVzc2FnZV9pZBIkNzU2Yjk3NGMtMGQ3NC00OWFhLWJjN2EtYmZiOGEyMDFmYWMzKhIKCnNvdXJjZV9haWQSBDExODAqIgoUYTpiMmNfZnJvbV91c2VyX3RhZ3MSCnsiYmEiOlsxXX0qFgoNczppc19zdHJhbmdlchIFZmFsc2UqFgoSYTpiMmNfdG9fdXNlcl90YWdzEgAqHAoXaW1fY2FsbGJhY2tfc3RhdHVzX2NvZGUSATAqGAoUYTpyZWNlaXZlcl91c2VyX3RhZ3MSACoRCglzOmJpel9haWQSBDExODAqCwoGczptb2RlEgEwKhQKCmNoYXRfc2NlbmUSBm5vcm1hbCoYChJhOnNlbmRlcl91c2VyX3RhZ3MSAmJhMAc6CmRlcHJlY2F0ZWRCJDc1NmI5NzRjLTBkNzQtNDlhYS1iYzdhLWJmYjhhMjAxZmFjM0oTNzMxNDEzODE4NDQxMjMxNzIxNFoDd2VielIKB3JlZmVyZXISR2h0dHBzOi8vd3d3LnRpa3Rvay5jb20vbWVzc2FnZXM/YWxsb3dfbGFiZWw9dHJ1ZSZsYW5nPWVuJnNjZW5lPWJ1c2luZXNzehIKCmZyb21fYXBwSUQSBDE5ODh6EgoMYXBwX2xhbmd1YWdlEgJlbnoWCghhcHBfbmFtZRIKdGlrdG9rX3dlYnoOCgdjaGFubmVsEgN3ZWJ6fQoKdXNlcl9hZ2VudBJvTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyMC4wLjAuMCBTYWZhcmkvNTM3LjM2eq0BChBXZWItU2RrLU1zLVRva2VuEpgBZkdWei0wVTJMdHdIbDJKblZKQVlLVDJneE1MZTRDbUFfRTRod1pEOHpwUGpmcC1YOExUNXM5SFVkUXFhZEg1LTBQQ0hHdkYycXlDc1ZSSjIyazJhRk5PZzJCMFNfdUJnRnhsVlhkbktSTmJua2JqS3ZUaG9kQVRGUU9kLUZQQkJzRjFWalREMlM5S1ZVanpfcGdCMVctLTKQAQE='

        // buffer = Buffer.from(base64, 'base64');
        // console.info(JSON.stringify(im_proto.Request.decode(buffer)),"buffer----------------------------------");

        // let baseHost = `https://im-api.tiktok.com/`;
        let baseHost = `https://im-api-sg.tiktok.com/`;
        if(this.client.state.genRegion()=="us"){
          baseHost = `https://im-api.us.tiktok.com/`
        }

        // url = this.client.signer.sign( `https://im-api.us.tiktok.com/${url}?aid=1988&version_code=1.0.0&app_name=tiktok_web&device_platform=web_pc&msToken=${this.client.state.getCookieByName('msToken')}`,undefined,undefined,"im");
        // url = this.client.signer.sign( `https://im-api-va.tiktok.com/${url}?aid=1988&version_code=1.0.0&app_name=tiktok_web&device_platform=web_pc&msToken=${this.client.state.getCookieByName('msToken')}`,undefined,undefined,"im" );
        // url = this.client.signer.sign( `https://im-api-sg.tiktok.com/${url}?aid=1988&version_code=1.0.0&app_name=tiktok_web&device_platform=web_pc&msToken=${this.client.state.getCookieByName('msToken')}`,undefined,undefined, buffer,"im");
        url = this.client.signer.sign( `${baseHost}${url}?aid=1988&version_code=1.0.0&app_name=tiktok_web&device_platform=web_pc&msToken=${this.client.state.getCookieByName('msToken')}`,undefined,undefined, buffer,"im");
        // url = "https://im-api-sg.tiktok.com/v1/message/send?aid=1988&version_code=1.0.0&app_name=tiktok_web&device_platform=web_pc&msToken=iaFdU5di2QylyQOvcwaIl695pj54XEv6BpQuH9aMnGIDdH5qDqhgV9MbBXXa9vZ_N1vaD0OG7nOR0d-M-0dtfYkZks_pF9_B2BT8gIzMLFkPaLH0y7y9AzHxJq2kFz1eq6I47wsRLO16kbB4AN_pmM5D&X-Bogus=DFSzswVYMvttns//tfeDDM9WX7Jx";
        console.info(url,"url-------------");
        let res = await this.client.request.send(url, {...this.client.state.defaultHeaders,'Content-Type':"application/x-protobuf",Accept:"application/x-protobuf"}, "POST",undefined, buffer , 'arraybuffer');
        let result = await this.decode(res);
        console.info(result,"result-----------"); 
        return result;



    //   let res = await axios("https://im-api-sg.tiktok.com/v1/message/send?aid=1988&version_code=1.0.0&app_name=tiktok_web&device_platform=web_pc&msToken=pXRQAc-F6hLj3TQreke3Tug_gfvU0Xw-Ppj_VVGfLLxiO259SSIN9n2u8YrG9bl8nSJwMbKtXl3-RIILItmuc2XWuiE67EEiiX9TSrzwtos5WUILw4Hk55Q3SBhMWbkOmWlmMOf_8ySH&X-Bogus=DFSzswVLvM3mFc-ctfQBB5LZzYnO", {
    //     "headers": {
    //       "accept": "application/x-protobuf",
    //       "accept-language": "en-US,en;q=0.9",
    //       "content-type": "application/x-protobuf",
    //       "sec-fetch-dest": "empty",
    //       "sec-fetch-mode": "cors",
    //       "sec-fetch-site": "same-site",
    //       "tt-ticket-guard-client-data": "eyJ0c19zaWduIjoidHMuMS44ZDFlNzQyM2VlMWM3MDZjYWU2NDQzNDQ5NGI1Y2ZhYjNmNmU5YWRhNGQyNWJjMzQ0ODJjNjdhZTUyMDEyZDM4MGU3MGI0YmRhODJjMTM4MzZlNWNmYTE4Mzk0ZDcwMjQwZjhhZjE2MzFmMTY1YWU5NjAxMjJlZWZmZDQ1MzNkZCIsInJlcV9jb250ZW50IjoidGlja2V0LHBhdGgsdGltZXN0YW1wIiwicmVxX3NpZ24iOiJNRVVDSUdOSFdDaElZU0p5ejVIWER4Q2pSOGEySmRueDZDcFZXRHJVaUxMSGRTYllBaUVBbnpodVVKKzdJSHBHbWNhc1c1UXJmVDlNdGVKbWJyQVMzM214SlZ4cUVqQT0iLCJ0aW1lc3RhbXAiOjE3MjMyMjM2OTh9",
    //       "tt-ticket-guard-iteration-version": "0",
    //       "tt-ticket-guard-public-key": "BA5EhAoWPtnkLa8keGvKmHHEL3RSTiDpArk84wsTUreVm8RG3bslYX/Dlig7GfHQuBQpNAgbEP2uodYhIEnzNnY=",
    //       "tt-ticket-guard-version": "2",
    //       "tt-ticket-guard-web-version": "1",
    //       "cookie": "ssid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; sid_ucp_v1=1.0.0-KGU3ZjJmYjA2OWJkNjQwM2U0N2VjMzI5ZTJkYzliMjVmOTYxNmVmYjUKGgiFiIvGzvfqqGAQ96bWtQYYsws4B0D0B0gEEAMaA3NnMSIgZmRmZTc4ZGViYTA0OWEyNDIxYmI2ZTBjNGFmMzVkZDQ; sessionid=fdfe78deba049a2421bb6e0c4af35dd4; tt_chain_token=QwnYBxbbbkSftXFd0JKc5A==; sid_tt=fdfe78deba049a2421bb6e0c4af35dd4; s_v_web_id=verify_lqbrr7jy_fWm4NZKY_TbBG_4XJF_8xh0_ZvyWCzuiI7BQ; sessionid_ss=fdfe78deba049a2421bb6e0c4af35dd4; store-country-code=cn; store-country-code-src=uid; sid_guard=fdfe78deba049a2421bb6e0c4af35dd4%7C1723175799%7C15552000%7CWed%2C+05-Feb-2025+03%3A56%3A39+GMT; uid_tt_ss=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt_csrf_token=KGLsKC8U-i7YqR1odNORcyQ8kPKe9ErDUxdw; store-idc=alisg; tt-target-idc=alisg; uid_tt=90c5f9e8434ae0dda58bb6930b44810c7f7e962a694495145838522ea8465d9d; tt-target-idc-sign=N_g5bTGveP_dF5n5AkMOV-fqmKFX0gj7Vpr8GcdHvoSc8rcgnvf65UWbND9XteTk-b9PK3uCqIPWPMOufqY-fCofVivsPJbJoxa3jwWUYxtTmyZvuB3b36Ip4JJ9cOTnTcIDjpw9midrfBF2NiBbI5sFBLllfURMhrngzlpwqvugqz2lb8vvPAldQair-JCgcd-mCinhERh2hzAINM141oEteXjCTd2vQMjdBy-7yzSaaeaYDxIv4aOOPIN-z-8XQU4A7SCnQQ6F40lvLhODqiKbrBGTumjHOzMNtSQPXcR9WoXQ2Qw7b7B-I3Pg_lLGbtF085X2Nm_wkEmwqBV8qkFkfhGuh_lpKBz6SoJzCH2mfMpU9LONqtfH7zzKdMVRVGBTGPMEDSrjR6f-FYcUP9iC29XifXJVg1dSG443AneeTjRyVdXfp5Z0jps1CWKjATuRvcTWorNZmhDk00FtCUGsR4XiXM4J7VAyY1FfJ5Vtgb8DUKSgb-tCMTxJnSPH; ak_bmsc=5886A0162FD1D36BDE3A29B559680801~000000000000000000000000000000~YAAQDjvUFzfPWgWRAQAAZI4gOBgpefw0KYAzYGLjTqvB0BiL30Djy3FSSO+ReQ7aVlF9rYGSkjRExRA6oiTksAIih15WzO2d7vNql2GrjpYYoRvQuVVxBKTfXd+/vf+ojQskoqhRZxphUo2x39X8fskTzW34rFn99myWe0ZDE9z/tR1AaBTBWrAIR5TkamgHaL9BT+kfFYCBzU4OUGn7IkB3m25NtXNoZN89FVWRRhPrew6kgyGWMjjSGaKFTm25zqezDFCzTUkkB4VY8J6qhzbEeYnAIrLdb0V3upBhGaFzV7jXBwNMX6S4AFqj6twUt0Pj37J3X+qQbRlbaCebMiN+sNA35LN2iKH9ZVEXeW6HLo+rmJ8pB8ZZfalrvr7cquISy1KrkVrSZw==; bm_sv=57A33F520365C71EED4477655FADF383~YAAQDjvUF0bPWgWRAQAA2TghOBj85vR7EZFdSHJ9PnPYjuR9o1t5bO0VhJxNiDJR3BjV9HQy0ia8xSPDKRHK32SzggaNR1RzwQbV6yXij5MzsqGvaOWW48aMUb6RtQc5B4yBGIEvKkmRd2O2RRdJPdQ9zfGrKmvuREooWrC/rUYQZtKwNvKOyrl4Nm2I4UTpzserNxYvBq8pcfbax1OtQmBaYXbWAcaWKhKe+iKJLrcZNfXmtnljlq7xjmnf0fj2~1; ttwid=1%7C4OPFuXRKD_H-qyRbQQ0F0FUIoQbnqWRvc4DVOyFs5Ps%7C1723223591%7C19bb6f2d08202f44426ba4a80db9248486d66600844de3cfd0e0c99dcf87d4dc; odin_tt=6eaabb81fdeb4c4c97eb30c4fe96cfbe7473e230bae90e65280ca733efa7bdab5125cc9a8786d03f918e54aa9263636d4b3f55f2a01c7485c8caad6ed7d0a9135fc26f9a845c19cdc8863b46ba3cfb35; msToken=pXRQAc-F6hLj3TQreke3Tug_gfvU0Xw-Ppj_VVGfLLxiO259SSIN9n2u8YrG9bl8nSJwMbKtXl3-RIILItmuc2XWuiE67EEiiX9TSrzwtos5WUILw4Hk55Q3SBhMWbkOmWlmMOf_8ySH",
    //       "Referer": "https://www.douyin.com/",
    //       "Referrer-Policy": "strict-origin-when-cross-origin",
    //       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
    //       },
    //     "data": buffer,
    //     "method": "POST",
    //     responseType:"arraybuffer",
    //     });
    //     console.info(res,"result-----------"); 

    //     let result = await this.decode(res.data);
    //     console.info(result,"result-----------"); 
    //     return result;
    }



     //会话相关//////////////////////////////////////////////////////////////////////////////////////////
    //l是U.fromString(l)后的uid值 
    async CreateConversation(uid, type = 1,participants=[]) {
        uid = uid.trim();
        let conv = (Object.values(this.conversations) as any).find(e => {
            return e.conversation_type== type && e.first_page_participants.participants.find(e => e.user_id == U.fromValue(uid) );
        });
        if (conv) return {
            code: 0,
            msg: "ok",
            data: conv
        };

        //请求服务器获得
        let convInfo = await this.GetConversationInfo(uid);
        if(!convInfo.code){ return convInfo;}

        if("string"==typeof participants){participants=[participants];}
        participants.push(this.client.autoBot.id);
        if(uid){participants.push(uid);}
        if(participants.length<2){ throw new Error("参与者不足2"); }
        const payload = await this.create(609,{
            create_conversation_v2_body:{
                conversation_type: type,
                participants: participants.map(item=>{return "string"==typeof item ? U.fromValue(item): item;}),
                // avatar_url: undefined,
                // biz:undefined,
                // biz_ext:undefined,
                // channel:undefined,
                // description:undefined,
                // idempotent_id:undefined,
                // name:undefined,
                // persistent:undefined,
                inboxType:0
            }
        });
        // {"type":1,"participants":[{"low":262915118,"high":1691944504,"unsigned":false},{"low":-1354660858,"high":1617865727,"unsigned":false}],"inboxType":0}
        try {
            const {status_code, error_desc, inbox_type,body,log_id, headers} = await this.req("v2/conversation/create", payload );
            console.info(body,"CreateConversation s-------------");
            if(status_code === 0){
                conv =body.create_conversation_v2_body.conversation;
                this.conversations[conv.conversation_id] = conv;
                return {code: 0, msg: "ok",data: Utils.decycle(conv) }
            }
            return { code: status_code, msg: error_desc}
        } catch (s) {
            console.error(s,"创建会话失败---------------- -");
            return {code: -1000, msg: s.message}
        }
    }
    
    async SendMessage(conversation, message) {
        // return await this.req("v1/message/send", null );
        let { conversation_id, conversation_short_id,ticket } = conversation.conversation_id?conversation:this.conversations[conversation];
        const t = Utils.genUUID();
        try {
            const payload = await this.create(100,{send_message_body:{
                conversation_id: conversation_id,
                conversation_type: conversation_id.includes(":") ? 1 : 2,
                conversation_short_id: typeof conversation_short_id == "string" ? U.fromString(conversation_short_id) : conversation_short_id,
                ext:{
                    "s:mentioned_users":"",
                    "s:client_message_id": `${t}`,
                    // "a:b2c_to_user_tags": "",
                    // "s:is_stranger": "false",
                    // "chat_scene": "normal",
                    // "im_callback_status_code": "0",
                    // "a:b2c_from_user_tags": "{\"ba\":[1]}",
                    // "a:receiver_user_tags": "",
                    // "s:mode": "0",
                    // "a:sender_user_tags": "ba",
                    // "source_aid": "1180",
                    // "s:biz_aid": "1180"
                },
                
                // [
                //         {
                //         key: "s:mentioned_users",
                //         value: ""
                //     }, 
                //     {
                //         key: "s:client_message_id",
                //         value: `${t}`
                //     }
                // ],
                // content: typeof content == "string" ? content : JSON.stringify(content),
                // mentioned_users: o||[]
                // message_type: e,
                ticket: ticket,
                client_message_id: `${t}`,
                message_type:message.type,
                send_media_list:[],
                mentioned_users: [],
                ...message,
            }});
            console.info( payload ," r ----------");
            const {status_code, error_desc, inbox_type,body,log_id, headers} = await this.req("v1/message/send", payload );
            if (!status_code) {
                let errorMsg = null;
                try {
                    let cm = body.send_message_body.check_message ? JSON.parse(body.send_message_body.check_message) : null;
                    errorMsg = cm.status_msg.msg_content.tips;
                } catch (error) {}
                return {
                    code: 0,
                    msg: errorMsg||"ok",
                    data: body.send_message_body
                }
            } else {
                return {
                    code: status_code,
                    msg: error_desc
                }
            }
        } catch (r) {
            console.info(r,"发送失败");
            return {
                code: -1e3,
                msg: r.message
            }
        }
    }

    async GetStrangerConversation(count = 20) {
        const payload = await this.create(1001,{
            get_stranger_conversation_body:{
                cursor: 0,
                count,
                show_total_unread: !0
            }
        });
        try {
            const {status_code, error_desc, inbox_type,body,log_id, headers} = await this.req(this.apiEnds[1001], payload );
            console.info(body,"body.get_stranger_conversation_body--------------");
            if(!status_code){
                for(let con of (body.get_stranger_conversation_body.conversation_list||[])){ this.conversations[con.conversation_id] = con;}
                return {
                    code: 0,
                    msg: "ok",
                    body,
                    data: Utils.decycle(body)
                };
            }else{
                return {
                    code: status_code,
                    msg: error_desc
                }
            }
        } catch (e) {
            return {
                code: -999,
                msg: e.message
            }
        }
    }

    async GetConversationInfo(l) {//
        l = l.indexOf(":")>-1?l:`"0:1:${this.client.autoBot.id}:${l}`;
        const u = typeof l == "string" ? U.fromString(l) : l;
        const conv = (Object.values(this.conversations) as any).find(e => e.conversation_short_id === u||e.conversation_id==l);
        if (conv) return {
            code: 0,
            msg: "ok",
            data: conv
        };

        const payload = await this.create(610,{
            get_conversation_info_list_v2_body:{
                conversation_info_list: [{
                    conversation_short_id: u
                }],
                inboxType: 0
            }
        });
        try {
            const {status_code, error_desc, inbox_type,body,log_id, headers} = await this.req(this.apiEnds[1001], payload );
            console.info(body,"body.conversation_info--------------");
            if(!status_code){
                for(let con of (body.get_conversation_info_list_v2_body.conversation_info_list||[])){ this.conversations[con.conversation_id] = con;}
                return {
                    code: 0,
                    msg: "ok",
                    data: Utils.decycle(body)
                };
            }else{
                return {
                    code: status_code,
                    msg: error_desc
                }
            }
        } catch (e) {
            return {
                code: -999,
                msg: e.message
            }
        }
    }


    async GetConversationListV2() {
        try {
            const payload = await this.create(2006,{
                get_conversation_list_body:{
                    sort_type: 1,
                    cursor: 0,
                    conversation_type: 2,
                    limit: 20
                }
            });
            const {status_code, error_desc, inbox_type,body,log_id, headers} = await this.req(this.apiEnds[2006], payload );
            console.info(body.get_conversation_list_body,"body.get_conversation_list_body--------------");
            if(!status_code){
                for(let con of (body.get_conversation_list_body.list||[])){ this.conversations[con.conversation_id] = con;}
                return {
                    code: 0,
                    msg: "ok",
                    data: Utils.decycle(body)
                };
            }else{
                return {
                    code: status_code,
                    msg: error_desc
                }
            }
        } catch (e) {
            return {
                code: -999,
                msg: e.message
            }
        }
    }


    GetTicket(e) {
        // return (0,
        // o.__awaiter)(this, void 0, void 0, (function*() {
        //     const t = u.RequestBody.create({
        //         get_ticket_body: {
        //             ticket_type: p.ticketType,
        //             conversation_type: e.conversationType,
        //             conversation_short_id: e.shortId,
        //             to_id: e.toId,
        //             ext: e.ext
        //         }
        //     });
        //     return (yield this.send(t, u.IMCMD.GET_TICKET, {
        //         inboxType: e.inboxType
        //     })).get_ticket_body
        // }
        // ))
    }
















}











// {
//     "create_conversation_v2_body": {
//         "conversation_type": 1,
//         "participants": [
//             {
//                 "low": -389889019,
//                 "high": 1615965116,
//                 "unsigned": false
//             },
//             {
//                 "low": -2067594234,
//                 "high": 1716779084,
//                 "unsigned": false
//             }
//         ]
//     }
// }





// {
//     fpID: "9",
//     aID: "1459",
//     accessKey: lt()(`9e1bd35ec9db7b8d846de66ed140b1ad9${d}f8a69f1719916z`).toString(),
//     ttwID: window.decodeURIComponent(null != n ? n : ""),
//     url: c,
//     payloadEncoding: {
//         encoding: "",
//         force: !0
//     },
//     payloadType: {
//         type: "application/json",
//         force: !0
//     },
//     enableTransformTextPayload: !0,
//     headers: Object.assign(Object.assign({}, i), {
//         from_appID: "1988",
//         app_language: a,
//         app_name: "tiktok_web",
//         channel: "web",
//         user_agent: navigator.userAgent,
//         "Web-Sdk-Ms-Token": o
//     }),
//     whalethisueryParams: {
//         aid: "1988",
//         version_code: "1.0.0",
//         app_name: "tiktok_web",
//         device_platform: "web_pc"
//     },
//     "Web-Sdk-Ms-Token": o
// }