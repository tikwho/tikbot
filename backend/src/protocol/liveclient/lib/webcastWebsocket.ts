
import Config from './webcastConfig';
import * as WebSocket from 'ws';
import { ClientOptions } from 'ws';
import { deserializeWebsocketMessage, serializeMessage } from './webcastProtobuf';
import { EventEmitter } from 'events';

export default class WebcastWebsocket extends EventEmitter {
    private pingInterval: NodeJS.Timeout | null;
    private wsParams: any;
    private wsUrlWithParams: string;
    private connection: WebSocket | null;

    constructor(wsUrl: string, cookieJar: any, clientParams: any, wsParams: any, customHeaders: any, websocketOptions: ClientOptions) {
        super();
        this.pingInterval = null;
        this.wsParams = { ...clientParams, ...wsParams };
        this.wsUrlWithParams = `${wsUrl}?${new URLSearchParams(this.wsParams)}`;
        const wsHeaders = {
            // Cookie: "sessionid=2472c515b59287998906bfc5bb089f7b;sessionid_ss=2472c515b59287998906bfc5bb089f7b;sid_tt=2472c515b59287998906bfc5bb089f7b;",//
            // Cookie: cookieJar.getCookieString(),
            ...(customHeaders || {}),
        };
        // console.info(this.wsUrlWithParams, {
        //     ...websocketOptions,
        //     headers: wsHeaders
        // },"-------------");
        this.connection = new WebSocket(this.wsUrlWithParams, {
            ...websocketOptions,
            headers: wsHeaders
        });

        this.handleEvents();
    }

    private handleEvents() {
        if (!this.connection) return;

        this.connection.on('open', () => {
            this.pingInterval = setInterval(() => this.sendPing(), 10000);
        });

        this.connection.on('message', (data) => {
            this.handleMessage(data);
        });

        this.connection.on('close', () => {
            if (this.pingInterval) clearInterval(this.pingInterval);
        });
    }

    private async handleMessage(data: WebSocket.Data) {
        try {
            let decodedContainer = await deserializeWebsocketMessage(data as Buffer);

            if (decodedContainer.id > 0) {
                this.sendAck(decodedContainer.id);
            }

            if (typeof decodedContainer.webcastResponse === 'object') {
                this.emit('webcastResponse', decodedContainer.webcastResponse);
            }
        } catch (err) {
            this.emit('messageDecodingFailed', err);
        }
    }

    private sendPing() {
        if (this.connection && this.connection.readyState === WebSocket.OPEN) {
            this.connection.send(Buffer.from('3A026862', 'hex'));
        }
    }

    private sendAck(id: number) {
        if (this.connection && this.connection.readyState === WebSocket.OPEN) {
            let ackMsg = serializeMessage('WebcastWebsocketAck', { type: 'ack', id });
            this.connection.send(ackMsg);
        }
    }


}