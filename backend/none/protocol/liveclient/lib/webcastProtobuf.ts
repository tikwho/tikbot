const protobufjs = require('protobufjs');
const util = require('node:util');
const zlib = require('node:zlib');
const unzip = util.promisify(zlib.unzip);

// https://github.com/protobufjs/protobuf.js
// npm i -g protobufjs-cli

// pbjs -t static-module -w commonjs -o compiled.js tiktokSchema.proto
// pbts -o tiktokSchema.d.ts tiktokSchema.js

// const tiktokSchema = require('../proto/tiktokSchema.js');
import {TikTok}  from "../proto/tiktokSchema.js";
console.info(TikTok,"TikTok------------");

// let tiktokSchemaPath = require.resolve('../proto/tiktokSchema.proto');
// let tiktokSchema = null;


// // Load & cache schema
// function loadTikTokSchema() {
//     if (!tiktokSchema) {
//         tiktokSchema = protobufjs.loadSync(tiktokSchemaPath);
//     }
// }

export let config = {
    skipMessageTypes: [],
};

export function serializeMessage(protoName, obj) {
    // loadTikTokSchema();
    // return tiktokSchema.lookupType(`TikTok.${protoName}`).encode(obj).finish();
    return TikTok[protoName].encode(obj).finish();
}

export function deserializeMessage(protoName, binaryMessage) {
    // loadTikTokSchema();
    // var webcastData = tiktokSchema.lookupType(`TikTok.${protoName}`).decode(binaryMessage);
    let webcastData = TikTok[protoName].decode(binaryMessage);
    if (protoName === 'WebcastResponse' && Array.isArray(webcastData.messages)) {
        // Contains different object structures depending on the type field
        webcastData.messages.forEach((message) => {
            if (config.skipMessageTypes.includes(message.type)) {
                return;
            }

            switch (message.type) {
                case 'WebcastControlMessage':
                case 'WebcastRoomUserSeqMessage':
                case 'WebcastChatMessage':
                case 'WebcastMemberMessage':
                case 'WebcastGiftMessage':
                case 'WebcastSocialMessage':
                case 'WebcastLikeMessage':
                case 'WebcastQuestionNewMessage':
                case 'WebcastLinkMicBattle':
                case 'WebcastLinkMicArmies':
                case 'WebcastLiveIntroMessage':
                case 'WebcastEmoteChatMessage':
                case 'WebcastEnvelopeMessage':
                case 'WebcastSubNotifyMessage':
                    // message.decodedData = tiktokSchema.lookupType(`TikTok.${message.type}`).decode(message.binary);
                    message.decodedData =TikTok[message.type].decode(message.binary);
                    break;
            }
        });
    }

    // console.info(webcastData,"webcastData-------------");
    return webcastData;
}

export async function deserializeWebsocketMessage(binaryMessage) {
    // Websocket messages are in an container which contains additional data
    // Message type 'msg' represents a normal WebcastResponse
    let decodedWebsocketMessage = deserializeMessage('WebcastWebsocketMessage', binaryMessage);
    if (decodedWebsocketMessage.type === 'msg') {
        let binary = decodedWebsocketMessage.binary;

        // Decompress binary (if gzip compressed)
        // https://www.rfc-editor.org/rfc/rfc1950.html
        if (binary && binary.length > 2 && binary[0] === 0x1f && binary[1] === 0x8b && binary[2] === 0x08) {
            decodedWebsocketMessage.binary = await unzip(binary);
        }

        decodedWebsocketMessage.webcastResponse = deserializeMessage('WebcastResponse', decodedWebsocketMessage.binary);
    }

    return decodedWebsocketMessage;
}

// export default {
//     serializeMessage,
//     deserializeMessage,
//     deserializeWebsocketMessage,
//     config,
// };
