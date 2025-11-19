const { HttpsProxyAgent } = require('https-proxy-agent');
import { WebcastPushConnection } from "./index";
// const { WebcastPushConnection } = require('./index.js');
import { SqlRepository } from '../sqlrepository';

// https://github.com/zerodytrash/TikTok-Live-Connector/blob/main/src/lib/tiktokHttpClient.js
export class LiveClient{
    tiktokLiveConnection:any;
    liveowner:string;
    
    public parent:{
        eventLiveHook:any,
    };//可修改的自动回复规则
    sqlRepository: SqlRepository;

    constructor(parent:any,tiktokUsername:string,proxy_url?:string,cookie?:string){
            // proxy_url="http://192.168.0.101:7890";
            this.parent = parent;
            // console.info(cookie,"cookie--------------");
            this.liveowner = tiktokUsername;
            this.sqlRepository = new SqlRepository();

            const agent = proxy_url?.length ? new HttpsProxyAgent(proxy_url) : undefined;
            
            // Create a new wrapper object and pass the username
            let tiktokLiveConnection:WebcastPushConnection = new WebcastPushConnection(tiktokUsername, {
                // sessionId: '2472c515b59287998906bfc5bb089f7a',
                processInitialData: true,
                enableExtendedGiftInfo: true,
                enableWebsocketUpgrade: true,
                enableRequestPolling:false,//停止http请求
                requestPollingIntervalMs: 2000,
                clientParams: {
                    "app_language": "en-US",
                    "device_platform": "web"
                },
                requestHeaders: {
                    "Cookie": cookie
                },
                requestOptions: {
                    httpAgent: agent,// proxy_url?(  new ProxyAgent({getProxyForUrl: url => proxy_url }) ):undefined,
                    httpsAgent: agent,// proxy_url?(  new ProxyAgent({getProxyForUrl: url => proxy_url }) ):undefined,
                    timeout: 15000
                },
                websocketHeaders: {
                    "Cookie": cookie
                },
                websocketOptions: {
                    agent:  agent,// proxy_url?(  new ProxyAgent({getProxyForUrl: url => proxy_url }) ):undefined,
                    // timeout: 100000
                }
            });

            // Connect to the chat (await can be used as well )
            tiktokLiveConnection.connect().then(state => {
                console.info(`Connected to roomId ${state.roomId}`);
            }).catch(err => {
                console.error('Failed to connect', err);
            })

            // // Connect to the chat (await can be used as well )
            // let liveRoomId = "7315812715139189510";
            // // let wsUrl = `wss://webcast3-ws-web-lq.douyin.com/webcast/im/push/v2/?app_name=douyin_web&version_code=180800&webcast_sdk_version=1.3.0&update_version_code=1.3.0&compress=gzip&internal_ext=internal_src:dim|wss_push_room_id:${liveRoomId}|wss_push_did:7188358506633528844|dim_log_id:20230521093022204E5B327EF20D5CDFC6|fetch_time:1684632622323|seq:1|wss_info:0-1684632622323-0-0|wrds_kvs:WebcastRoomRankMessage-1684632106402346965_WebcastRoomStatsMessage-1684632616357153318&cursor=t-1684632622323_r-1_d-1_u-1_h-1&host=https://live.douyin.com&aid=6383&live_id=1&did_rule=3&debug=false&maxCacheMessageNumber=20&endpoint=live_pc&support_wrds=1&im_path=/webcast/im/fetch/&user_unique_id=7188358506633528844&device_platform=web&cookie_enabled=true&screen_width=1440&screen_height=900&browser_language=zh&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0%20(Macintosh;%20Intel%20Mac%20OS%20X%2010_15_7)%20AppleWebKit/537.36%20(KHTML,%20like%20Gecko)%20Chrome/113.0.0.0%20Safari/537.36&browser_online=true&tz_name=Asia/Shanghai&identity=audience&room_id={_liveRoomId}&heartbeatDuration=0&signature=00000000`;
            // // wss://webcast16-ws-alisg.tiktok.com/webcast/im/push/?aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&compress=gzip&cookie_enabled=true&cursor=1703346364565_7315816927140553992_1_1_0_0&debug=false&device_platform=web&heartbeatDuration=0&host=https%3A%2F%2Fwebcast.tiktok.com&identity=audience&imprp=u6C8F_b3cURAGACQAAAAAAAABlCQI&internal_ext=fetch_time%3A1703346364565%7Cstart_time%3A1703346360956%7Cack_ids%3A%2C%2C7315816771393440542_d68%2C7315816893661776671_d68%2C7315816916131285778_d6a%2C7315816311350168362_d68%2C7315816874154461982_d68%2C7315816311350201130_d6a%2C7315816871495928607_d6a%2C7315816656104901406_d6a%2C7315816672504662815_d6a%2C7315816905347025707_d6c%2C7315816878130678559_d6c%2C7315816543857904415_d6c%2C7315816741924899615_d6c%2C7315816877979470623_d6c%2C7315816889576819486_d6c%2C7315816768281283359_d6c%2C7315816643803138858_d6e%2C7315816910296369963_d6e%7Cflag%3A1%7Cseq%3A1%7Cnext_cursor%3A1703346364565_7315816927140553992_1_1_0_0%7Cwss_info%3A0-1703346364566-0-0&live_id=12&room_id=7315805075451005739&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&update_version_code=1.3.0&version_code=270000&webcast_sdk_version=1.3.0
            // let wsUrl = `wss://webcast16-ws-alisg.tiktok.com/webcast/im/push/?aid=1988&app_language=zh-Hans&app_name=tiktok_web&browser_language=zh-CN&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F120.0.0.0%20Safari%2F537.36&compress=gzip&cookie_enabled=true&cursor=1703346364565_7315816927140553992_1_1_0_0&debug=false&device_platform=web&heartbeatDuration=0&host=https%3A%2F%2Fwebcast.tiktok.com&identity=audience&imprp=u6C8F_b3cURAGACQAAAAAAAABlCQI&internal_ext=fetch_time%3A1703346364565%7Cstart_time%3A1703346360956%7Cack_ids%3A%2C%2C7315816771393440542_d68%2C7315816893661776671_d68%2C7315816916131285778_d6a%2C7315816311350168362_d68%2C7315816874154461982_d68%2C7315816311350201130_d6a%2C7315816871495928607_d6a%2C7315816656104901406_d6a%2C7315816672504662815_d6a%2C7315816905347025707_d6c%2C7315816878130678559_d6c%2C7315816543857904415_d6c%2C7315816741924899615_d6c%2C7315816877979470623_d6c%2C7315816889576819486_d6c%2C7315816768281283359_d6c%2C7315816643803138858_d6e%2C7315816910296369963_d6e%7Cflag%3A1%7Cseq%3A1%7Cnext_cursor%3A1703346364565_7315816927140553992_1_1_0_0%7Cwss_info%3A0-1703346364566-0-0&live_id=12&room_id=wss_push_room_id:${liveRoomId}&screen_height=1080&screen_width=1920&tz_name=Asia%2FShanghai&update_version_code=1.3.0&version_code=270000&webcast_sdk_version=1.3.0`;
            // console.info(wsUrl);
            // tiktokLiveConnection.setupWebsocket(wsUrl,undefined,liveRoomId).then(state => {
            //     console.info(`Connected to roomId ${liveRoomId}`);
            // }).catch(err => {
            //     console.error('Failed to connect', err);
            // })

            ///////////////////////////////////////////////////////////////////////////////
            // https://github.com/zerodytrash/TikTok-Live-Connector/tree/main
            tiktokLiveConnection.on('connected', state => {
                console.log('Hurray! Connected!', state);
            })
            // 连接断开时触发
            tiktokLiveConnection.on('disconnected', () => {
                console.log('Disconnected :(');
            })
            //错误
            tiktokLiveConnection.on('error', err => {
                console.error('Error!', err);
            })
            
            // streamEnd 当直播被主播终止时触发。也会触发该disconnected事件。
            tiktokLiveConnection.on('streamEnd', (actionId) => {
                if (actionId === 3) {
                    console.log('Stream ended by user');
                }
                if (actionId === 4) {
                    console.log('Stream ended by platform moderator (ban)');
                }
            })

            tiktokLiveConnection.on('all', ({event,data}) => {
                // console.log(`${event} (${JSON.stringify(data)}`);
                this.saveEvent(event,data);
            })

            // Define the events that you want to handle
            // In this case we listen to chat messages (comments)
            tiktokLiveConnection.on('chat', data => {
                console.log(`${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);
            })
            // 每次统计消息到达时触发。该消息当前包含观看者计数和顶级礼物赠送者列表。
            tiktokLiveConnection.on('roomUser', data => {
                console.log(`Viewer Count: ${data.viewerCount}`);
            })
            // 当观众向主播发送点赞时触发。对于拥有大量观众的直播，此事件并不总是由 TikTok 触发。
            tiktokLiveConnection.on('like', data => {
                console.log(`${data.uniqueId} sent ${data.likeCount} likes, total likes: ${data.totalLikeCount}`);
            })
            // 每次有人分享直播或关注主持人时都会触发。
            tiktokLiveConnection.on('social', data => {
                console.log('social event data:', data);
            })
            // 每次订阅者发送表情（贴纸）时都会触发。
            tiktokLiveConnection.on('emote', data => {
                console.log('emote received', data);
            })
            // 每当有人发送宝箱时触发。
            tiktokLiveConnection.on('envelope', data => {
                console.log('envelope received', data);
            })

            // 每当有人通过问题功能提出新问题时就会触发。
            tiktokLiveConnection.on('questionNew', data => {
                console.log(`${data.uniqueId} asks ${data.questionText}`);
            })
            // 每次战斗开始时触发。
            tiktokLiveConnection.on('linkMicBattle', (data) => {
                console.log(`New Battle: ${data.battleUsers[0].uniqueId} VS ${data.battleUsers[1].uniqueId}`);
            })

            // 每当战斗参与者获得积分时触发。包含当前的战斗状况以及支援该团体的军队。
            tiktokLiveConnection.on('linkMicArmies', (data) => {
                console.log('linkMicArmies', data);
            })

            // 当出现实时介绍消息时触发。
            tiktokLiveConnection.on('liveIntro', (msg) => {
                console.log(msg);
            })

            // 当用户创建订阅时触发。
            tiktokLiveConnection.on('subscribe', (data) => {
                console.log(data.uniqueId, "subscribed!");
            })

            // 这些事件基于消息事件。
            tiktokLiveConnection.on('follow', (data) => {
                console.log(data.uniqueId, "followed!");
            })
            // 当用户共享流时触发。根据social事件。
            tiktokLiveConnection.on('share', (data) => {
                console.log(data.uniqueId, "shared the stream!");
            })

            // And here we receive gifts sent to the streamer
            tiktokLiveConnection.on('gift', data => {
                console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
            })

            this.tiktokLiveConnection = tiktokLiveConnection;
    }

    //发送消息
    async sendMessage(text: string,mlist?:string[]){
        let atstr = "";
        mlist.forEach(item=>{atstr += `@${item} `;});
        return await this.tiktokLiveConnection.sendMessage(`@${atstr} ${text}`);
        // this.tiktokLiveConnection.sendMessage(`@${atstr} ${text}`).catch(err => console.error(err));
    }
    //系统消息liveowner
    async getRoomInfo(force){
        if(!this.tiktokLiveConnection.roomInfo || force){
            await this.tiktokLiveConnection.getRoomInfo();
        }
        let live = this.tiktokLiveConnection.roomInfo;
        let liveroom = {
			id:live.id_str,
			title:live.title,
			cover:live.cover.url_list[0],
			avatar:live.owner.avatar_large.url_list[0],
			username:live.owner.display_id,
			
			owner:live.owner,//{sec_uid,nickname,display_id,id_str,bio_description}
			stream_url:live.stream_url.flv_pull_url.FULL_HD1,
            share_url:live.share_url,
            stats:live.stats,
			live:live,
		};
        return liveroom;
    }

    public async stop(){
        this.tiktokLiveConnection.disconnect();
        console.info(this.liveowner,"disconnect=============");
    }

    async saveEvent(event:string,data:any){
        let {msgId,uniqueId,profilePictureUrl,userId,nickname,createTime,comment,label} = data;
		let item = {
            id:msgId,
			type:event,
            liveowner:this.liveowner,
            room_id:this.tiktokLiveConnection.roomId || this.tiktokLiveConnection.roomInfo.id_str,
            uid:userId,
            avatar:profilePictureUrl,
            username:uniqueId,
			content: (label+"").replace("{0:user}",uniqueId),
			raw:data,
            created_at:new Date(parseInt(createTime)),
		}
        if(event=="member"){
			item.content = uniqueId+" joined";
		}
		if(event=="like"){
			item.content = uniqueId+" like "+data.totalLikeCount;
		}
		if(event=="chat"){
			item.content = uniqueId+" say: "+data.comment;
		}
		
        try {
            this.parent.eventLiveHook(event, item ,this.liveowner);
        } catch (error) {}

		if(msgId){
            try {
                this.sqlRepository.sqliteLiveRecordsRepository.createOrUpdate(item);
            } catch (error) {
                // console.error(error,"---------------");
            }
        }

    }



}