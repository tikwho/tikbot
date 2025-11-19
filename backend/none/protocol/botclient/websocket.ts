// const WebSocket = require('ws');
import * as WebSocket from 'ws';
import { ProxyAgent } from 'proxy-agent';

export class CustomWebSocket {
    public client: WebSocket;
    private startAt: number | null;
    private strangerTimer: NodeJS.Timer | null;
    private listers:any = {};
    public lastArgs:any = [];

    constructor() {
        this.startAt = null;
        this.strangerTimer = null;
        // return this;
    }

    // Initialize WebSocket connection and set a timer
    async start(url: string, cookies: string, protocols: string[],proxy_url?:string, l?: number): Promise<any> {
        const _this = this;
        _this.lastArgs = [url, cookies, protocols,proxy_url, l];

        const agent = proxy_url&&proxy_url.length?new ProxyAgent({getProxyForUrl: url => proxy_url}):undefined;
        return new Promise<any>((resolve, reject) => {
            _this.client = new WebSocket(url, protocols ,{
                headers: {
                    "Sec-Websocket-Version": "13",
                    "Sec-Websocket-Extensions": "permessage-deflate; client_max_window_bits",
                    // "Sec-Websocket-Key":"4wWl88qj18/02JJL1/3+Vw==",
                    'Sec-Websocket-Protocol': protocols.includes("pbbp2") ? "pbbp2" : "arraybuffer",
                    "cookie":cookies,
                    "Origin":"https://www.douyin.com",
                    'User-Agent': "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) douyin/2.7.0 Chrome/104.0.5112.102 Electron/20.1.0-tt.4.release.douyin.103 TTElectron/20.1.0-tt.4.release.douyin.103 Safari/537.36 awemePcClient/2.7.0 buildId/10817787 osName/Windows"
                },
                agent
            });
            // _this.client.binaryType = modes.includes("pbbp2") ? "pbbp2" : "arraybuffer";
            _this.client.onopen = (): void => {
                console.log("WebSocket connection established");
                _this.startAt = Date.now();
                _this.strangerTimer = setInterval(_this.getStrangerMessages.bind(_this), l * 1000);
                _this.client.onmessage = _this.messageHandler.bind(_this);
                _this.client.onclose = _this.downtimeHandler.bind(_this);
                return resolve(_this);
            };

            _this.client.on('error', function handleError(error) {
                // 这里捕获和处理WebSocket错误
                console.error('WebSocket发生错误:', error);
                _this.stop();
              });
        });
    }

    // Method to fetch messages, implementation depends on the requirements
    private getStrangerMessages(): void {
        // Implement message fetching logic here
    }

    // Message handling method
    private messageHandler(messageEvent: MessageEvent): void {
        // Handle incoming message
        // console.log("Received message:", messageEvent.data);
        const messageHandler = this.listers["message"];
        if(messageHandler){
            messageHandler(messageEvent.data);
        }
    }

    // Downtime handling method
    private downtimeHandler(event: CloseEvent): void {
        // Handle WebSocket downtime
        console.log("WebSocket closed:", event);
        const downtimeHandler = this.listers["downtime"];
        if(downtimeHandler){
            downtimeHandler();
        }

        const _this = this;
        if(this.startAt){
            // 非手动断开尝试重新连接
            setTimeout(() => {
                console.log("Attempting to reconnect...");
                _this.start(_this.lastArgs[0],_this.lastArgs[1],_this.lastArgs[2],_this.lastArgs[3],_this.lastArgs[4]);
            }, 1000*5);
        }

    }

    // Close WebSocket connection and clear the timer
    stop(): void {
        if (this.strangerTimer) {
            clearInterval(this.strangerTimer);
        }
        if(this.client){
            this.client.close();
        }

        this.startAt = null;
        this.strangerTimer = null;
    }

    // Send a message
    send(data: string | ArrayBuffer | Blob | ArrayBufferView): void {
        // console.info(this.lastArgs[0],this.client._url,"------------sendws");
        if(!this.client){throw new Error("WebSocket client 未连接.");}
        this.client.send(data);
    }

    // add event listeners
    on(eventType: string, handler?: () => void): void {
        this.listers[eventType] = handler;
        // if(this.client){
        //     if (eventType === "message") {
        //         this.client.onmessage = handler;
        //     } else if (eventType === "downtime") {
        //         this.client.onclose = handler;
        //     }
        // }
    }
    // Remove event listeners
    off(eventType: string, handler?: () => void): void {
        delete this.listers[eventType];
        // if(this.client){
        //     if (eventType === "message") {
        //         this.client.onmessage = null;
        //     } else if (eventType === "downtime") {
        //         this.client.onclose = null;
        //     }
        // }
    }
}