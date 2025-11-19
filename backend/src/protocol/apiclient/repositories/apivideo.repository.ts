import * as qs from "qs";
import debug from "debug";
import { ApiClient  } from "..";
import { Repository } from "../core/repository";



// const axios = require('axios');
const axios1 = require('axios');
const { HttpsProxyAgent } = require('https-proxy-agent');

const agent = process.env.NODE_ENV == "development" ? new HttpsProxyAgent("http://127.0.0.1:7890",{rejectUnauthorized: false}) : undefined;
const axios = axios1.create({
    httpsAgent:agent,
    httpAgent:agent,
});

const fs = require('fs');
const crc32 = require('crc-32');
const https = require('https');
const crypto = require('crypto');


const sign = (key, msg, type = null) => {
    const hmac = crypto.createHmac('sha256', key, { encoding: 'utf8' });
    hmac.update(msg, 'utf8');
    const hash = hmac.digest();
    return type ? hash.toString(type) : hash;
};


function getSigningKey(secretAccessKey, dateStamp, regionName, serviceName) {
    let kDate = sign(('AWS4' + secretAccessKey ), dateStamp);
    // console.info(kDate.toString(),"kdata");
    let kRegion = sign(kDate, regionName);
    let kService = sign(kRegion, serviceName);
    let kSigning = sign(kService, 'aws4_request');
    return kSigning;
}
// url顺序也有关
function signaturer(access_key, secret_key, request_parameters, headers, method = "GET", payload = '', region = "US-TTP", service = "vod" , awsReq='aws4_request' ) {
    const dateStamp = headers['x-amz-date'];
    let signingKey = getSigningKey(secret_key, dateStamp.substr(0, 8), region , service);
    console.info(signingKey.toString("hex"),"signingKey"); // console.info(signingKey.toString(),"signingKey");

    const canonicalUri = '/top/v1';
    const canonicalQueryString = sortQs(request_parameters); //url顺序也有关

    // "x-amz-"才参与计算
    let newHeaders = {};
    for (const key in headers) { if(key.startsWith('x-amz-')){newHeaders[key] = headers[key];}}
    headers = newHeaders;

    const canonicalHeaders = Object.keys(headers).sort(function(e, t) {
                                return e[0].toLowerCase() < t[0].toLowerCase() ? -1 : 1
                            }).map(key => key.toLowerCase() + ':' + headers[key]).join('\n') + '\n';
    const signedHeaders = Object.keys(headers).map(key => key.toLowerCase()).sort().join(';');
    const payloadHash = headers["x-amz-content-sha256"] || crypto.createHash('sha256').update(payload).digest('hex');

    let canonicalString = [method.toUpperCase(), canonicalUri , canonicalQueryString , canonicalHeaders,signedHeaders, payloadHash ].join("\n");
    // console.info(JSON.stringify({canonicalString}),"11111111-----------");
    let t = [];
    t.push("AWS4-HMAC-SHA256"),
        t.push(dateStamp),
        t.push([dateStamp.substr(0, 8), region , service , awsReq].join("/")),
        t.push(crypto.createHash('sha256').update(canonicalString).digest('hex'));
    let stringToSign = t.join("\n")
    // console.info(JSON.stringify({stringToSign}));
    return sign(signingKey,stringToSign,'hex');
}


function generateUUID() {
    const bytes = crypto.randomBytes(16);
    // Adjust certain bits according to RFC 4122, section 4.4 as follows:
    // - Set the four most significant bits of the 7th byte to 0100'B, so the high nibble is '4'
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    // - Set the two most significant bits of the 9th byte to 10'B, so it matches the pattern '8', '9', 'A', or 'B'
    bytes[8] = (bytes[8] & 0x3f) | 0x80;

    // Convert to hexadecimal format and insert dashes
    const uuid = bytes.toString('hex').replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
    return uuid;
}

function getCreationId(length=21) {
    // const length = 21;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let creationId = '';
    for (let i = 0; i < length; i++) {
        creationId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return creationId;
}

//用于排序url，与加密相关
function sortQs(queryString){
    const params = new URLSearchParams(queryString);
    const paramObject = {};
    
    for (const [key, value] of params.entries()) {
      paramObject[key] = value;
    }

    const l = (t)=>{
        try {
            return encodeURIComponent(t).replace(/[^A-Za-z0-9_.~\-%]+/g, escape).replace(/[*]/g, (function(t) {
                    return "%".concat(t.charCodeAt(0).toString(16).toUpperCase())
                }
            ))
        } catch (err) {
            return "";
        }
    }
    return Object.keys(paramObject).sort().map((function(t) {
        let n = paramObject[t];
        if (null != n) {
            let r = l(t);
            if (r){
                return Array.isArray(n) ? "".concat(r, "=").concat(n.map(l).sort().join("&".concat(r, "="))) : "".concat(r, "=").concat(l(n))
            }
        }
    }
    )).filter((function(e) { return e;})).join("&");
}

async function getTagsExtra(title, tags, users, session, urlPrefix) {
    let textExtra = [];
    // Handle tags
    for (let tag of tags) {
        const url = `https://www.douyin.com/api/upload/challenge/sug/`;
        const params = { keyword: tag };
        try {
            const response = await session.get(url, { params });
            let verifiedTag = tag;
            if (response.data && response.data.sug_list && response.data.sug_list.length > 0) {
                verifiedTag = response.data.sug_list[0].cha_name;
            }
            title += ` #${verifiedTag}`;
            textExtra.push({
                start: title.length - verifiedTag.length - 1,
                end: title.length,
                user_id: "",
                type: 1,
                hashtag_name: verifiedTag
            });
        } catch (error) {
            console.error(`Failed to verify tag: ${tag}`, error);
            return false;
        }
    }
    // Handle users
    for (let user of users) {
        const url = `https://${urlPrefix}.tiktok.com/api/upload/search/user/`;
        const params = { keyword: user };
        try {
            const response = await session.get(url, { params });
            let verifiedUser = user;
            let verifiedUserId = "";
            if (response.data && response.data.user_list && response.data.user_list.length > 0) {
                verifiedUser = response.data.user_list[0].user_info.unique_id;
                verifiedUserId = response.data.user_list[0].user_info.uid;
            }
            title += ` @${verifiedUser}`;
            textExtra.push({
                start: title.length - verifiedUser.length - 1,
                end: title.length,
                user_id: verifiedUserId,
                type: 0,
                hashtag_name: verifiedUser
            });
        } catch (error) {
            console.error(`Failed to verify user: ${user}`, error);
            return false;
        }
    }
    return { title, textExtra };
}

// async function uploadChunksAndFinalize(videoPath, uploadHost, storeUri, videoAuth, uploadId, accessKey, secretKey, sessionToken) {
async function uploadToTikTok(videoPath, cookies,uploadRegion="US-TTP") {
        const videoContent = "string"==typeof videoPath ? fs.readFileSync(videoPath) : videoPath;//fs.createReadStream(videoPath)
        const fileSize = videoContent.length;

        cookies = cookies || 'install_id=117020032804426;ttreq=1$6c14f21d7f37be0dd4d5240caf0f15465af5de99;store-region-src=uid;passport_csrf_token=5ec9659855f6c9912ea07801fe3c7742;passport_csrf_token_default=5ec9659855f6c9912ea07801fe3c7742;msToken=eZeqn_FITtK5XMJd7BsUbRnc5OclZuGjDef4_B88z4M9MU30xQb5hpGqrc5cd-Yzw9F3xO_iMndK7xAmcjEKN5pCqD5Gxq11J7wiB7nB;d_ticket=787a93559a2ebf059b3fa1f2677746975993c;multi_sids=105319951605%3A1deb5e6e1f32b7d6f7a7c941aaea901b%7C298721941396039%3Aea15b6df029b8ad80732b5df6041a4e9%7C60274218744%3Ac74ede8b791bb32fa4686a393a14421a%7C3861956188448014%3Ac2ab9c8982bae81aad003e66d4f415d9;odin_tt=c71106a5399bbddb07643d1157e2ede1032d782abf51c8247542c8e2ef00bf203e93ec5b23d1f9ae755486694da9c17b17cdaf1e5c3dcf1c04b3862883b8a52e36eb697a5f29cb56364aa1c53c9bfe26;passport_assist_user=CkF1QyNmPd0YoHA37HjsRp_Y2q4J9GmGDJF38eFmdh2Yy8cmr8yqEdEG5HMTvhdptZfIKidhwS74luhFdWewnp0pJBpKCjwcG6MAtoiLl75uyWYFZ94h-IjEB988uBoa98VUdEM1pTR5KfOvDeUhpD5ScbB_nEBi_LtviFGN4tJEWj4QsevKDRiJr9ZUIAEiAQN15wbo;n_mh=Ugx7Ma-I1WHf3l_-ksDso1yduzgpX1dVR_hobvY0SgA;sid_guard=c2ab9c8982bae81aad003e66d4f415d9%7C1709348575%7C5184000%7CWed%2C+01-May-2024+03%3A02%3A55+GMT;uid_tt=302e4516c22badbc362168be9ccc7731;uid_tt_ss=302e4516c22badbc362168be9ccc7731;sid_tt=c2ab9c8982bae81aad003e66d4f415d9;sessionid=c2ab9c8982bae81aad003e66d4f415d9;sessionid_ss=c2ab9c8982bae81aad003e66d4f415d9;store-region=cn-gz';//'ssid_ucp_v1=1.0.0-KDFlMGY3YTAzZTdlOTliNzZmOTA3ZTIwNTFkMjU1NmIxMTc4MzIzNjcKGQj12busiAMQtsmKrwYY7zEgDDgGQPQHSAQaAmhsIiAxZDhkYzVhYjY1M2NjZDAwNWJmYTFmNjI1NDA4ZjA1ZA; sid_ucp_v1=1.0.0-KDFlMGY3YTAzZTdlOTliNzZmOTA3ZTIwNTFkMjU1NmIxMTc4MzIzNjcKGQj12busiAMQtsmKrwYY7zEgDDgGQPQHSAQaAmhsIiAxZDhkYzVhYjY1M2NjZDAwNWJmYTFmNjI1NDA4ZjA1ZA; sessionid_ss=1d8dc5ab653ccd005bfa1f625408f05d; sessionid=1d8dc5ab653ccd005bfa1f625408f05d; sid_tt=1d8dc5ab653ccd005bfa1f625408f05d; uid_tt=817fffb0b5109ff141747462d950d99c; ssid_ucp_sso_v1=1.0.0-KDVhNjJkNzE5YWJkZmZiY2YxMjllZDE4MGI3YjJhZDg3OWEwMzA1NWIKHQj12busiAMQtcmKrwYY7zEgDDDk_JneBTgGQPQHGgJsZiIgMGUwYTVmZTlmNjE5OGU3OGE0NjNmMDQ4MTMwMGJmYTE; passport_auth_status_ss=56e9bf7caf526b3f34a23dba2425c62b%2Cf0044da49a38f69854f4e0ee717e3085; passport_auth_status=56e9bf7caf526b3f34a23dba2425c62b%2Cf0044da49a38f69854f4e0ee717e3085; sid_ucp_sso_v1=1.0.0-KDVhNjJkNzE5YWJkZmZiY2YxMjllZDE4MGI3YjJhZDg3OWEwMzA1NWIKHQj12busiAMQtcmKrwYY7zEgDDDk_JneBTgGQPQHGgJsZiIgMGUwYTVmZTlmNjE5OGU3OGE0NjNmMDQ4MTMwMGJmYTE; uid_tt_ss=817fffb0b5109ff141747462d950d99c; passport_assist_user=Cj3lojFyzRsoGXUILkgs1f3Zy7Dol8dFLhusJXuftG_OTjNAR2drSR9lvnJiuU-29o1iPT3LEJuufH81F0OnGkoKPL8Oa4g8-HQI6HrxPt2Rbai5G8cSE21FkfozHsOaq4W4M0ubUqsOncnSyZYcLT4fTGXkeFOsObEfaxxYRRDo6coNGImv1lQgASIBA8RBI24%3D; toutiao_sso_user_ss=0e0a5fe9f6198e78a463f0481300bfa1; __security_server_data_status=1; publish_badge_show_info=%220%2C0%2C0%2C1709017325612%22; bd_ticket_guard_client_web_domain=2; passport_csrf_token_default=6ce2008139d3549b948f3ddc086818a6; theme=%22dark%22; sid_guard=1d8dc5ab653ccd005bfa1f625408f05d%7C1709352118%7C5184001%7CWed%2C+01-May-2024+04%3A01%3A59+GMT; passport_csrf_token=6ce2008139d3549b948f3ddc086818a6; toutiao_sso_user=0e0a5fe9f6198e78a463f0481300bfa1; _bd_ticket_crypt_doamin=2; sso_uid_tt=dca10b73112bbd190d263e00f43a8da9; SEARCH_RESULT_LIST_TYPE=%22single%22; FORCE_LOGIN=%7B%22videoConsumedRemainSeconds%22%3A180%2C%22isForcePopClose%22%3A1%7D; sso_uid_tt_ss=dca10b73112bbd190d263e00f43a8da9; n_mh=3F0D_PzYxkhaHiA5TKVBrjX3IWYMRC9jtWDasqifuKU; home_can_add_dy_2_desktop=%221%22; IsDouyinActive=false; csrf_session_id=9f419ac024b7c0298009d1760a55fdb5; ttwid=1%7CFuXoUzLZpcGP6NzvJwwwgX9m5L5yTRIO9M6YB4oH8Bo%7C1709352185%7C5783841fb78ea8d6a8ccab4ef096d66bc3e6c1c03b82bf3f17ed108793165bca; bd_ticket_guard_client_data=eyJiZC10aWNrZXQtZ3VhcmQtdmVyc2lvbiI6MiwiYmQtdGlja2V0LWd1YXJkLWl0ZXJhdGlvbi12ZXJzaW9uIjoxLCJiZC10aWNrZXQtZ3VhcmQtcmVlLXB1YmxpYy1rZXkiOiJCQktLazJSWDJFaXZ1N0NtOXJ0dWVaVEVBS3VLTS9ha3RyeEE0TGFGeGtKaFF0M0hqR0U0cWc0MU5XQVoxcnNQV0JhTEVtWHhGeE1HcGtXS1MrWDRmTzQ9IiwiYmQtdGlja2V0LWd1YXJkLXdlYi12ZXJzaW9uIjoxfQ%3D%3D; passport_fe_beating_status=true; msToken=-55NtIUVOSXHK3cqt53SfXxv3JECzGNv8xlmS6yO-kSNscDbIEh2VrZLg1z4j3ndBKRr3YZjrEpItIuK7X-OuE0j1M0r3TLM3u3KuOILjJMJn-Y8jZUCfOasHdpWyc8=; ttcid=4cb41ae370e74d16a68d12098c71d65539; tt_scid=3iydb64DSSDxj.6F8gkNsxefJkPOshrQOvQE29qpnwt08NDlsa-HBmKgNcG1r2HHae00; msToken=DWQl5j2WB_D6FCQPOjI_GnA_aNbUUTkPeYeHoQgYcRojmjnLn6o7uNrVL63GRiQw0fSVVcZ_kfkISRICAV7JKSj3BSiS4HYgRYRJ2tBQoh-kh4PEUNZuQuHkosyjqag=; s_v_web_id=lt9k60x4_IXEwGd6o_jvyU_4QrY_9ata_rvb2UieVYK1R; odin_tt=d34c1c8400a653a115e6613f14694ef859c23ff8636c5ec5fbb4e30ef1d7ed5bac8d713a136e0569591e901fb4b7cef1'
        let res1 = await axios({"url":"https://www.douyin.com/api/v1/video/upload/auth/?aid=1988", 
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                // "x-secsdk-csrf-token": "000100000001a0809dcf65abe44893574ca29cebf9b12ecaed6ae70031a1f00ba1b8c180446b17b8d6c1a3d8d91e",
                "cookie": cookies,
                "Referer": "https://www.douyin.com/tiktokstudio/upload?from=upload",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
        });
        console.info(res1,"res1--------------");
        const {access_key_id:accessKey,secret_acess_key:secretKey,session_token:sessionToken} = res1.data.video_token_v5;//audio_token_v5
        console.log({accessKey,secretKey,sessionToken},"获取秘钥---------");

        // ##1 获取vid 
        // const requestParameters = `Action=ApplyUploadInner&FileSize=${fileSize}&FileType=video&IsInner=1&SpaceName=aweme&Version=2020-11-19&app_id=2906&s=${Math.random().toString(36).substr(2)}&user_id=105319951600`;
        const requestParameters = `Action=ApplyUploadInner&Version=2020-11-19&SpaceName=tiktok&FileType=video&IsInner=1&ClientBestHosts=tos19-up-useast5.tiktokcdn-us.com%2Ctos16-up-useast5.tiktokcdn-us.com&FileSize=${fileSize}&X-Amz-Expires=604800&s=${ getCreationId(11).toLowerCase()}&device_platform=web`;
        const t = new Date();
        const amzDate = t.toISOString().replace(/[:-]|\.\d{3}/g, '');
        const dateStamp = amzDate.substring(0, 8);
        let headers = {
            'x-amz-date': amzDate,
            'x-amz-security-token': sessionToken,
        };

        const signature = signaturer(accessKey, secretKey, requestParameters, headers, 'GET', '', uploadRegion, 'vod');
        const authorizationHeader = `AWS4-HMAC-SHA256 Credential=${accessKey}/${dateStamp}/${uploadRegion}/vod/aws4_request, SignedHeaders=x-amz-date;x-amz-security-token, Signature=${signature}`;

        headers['Authorization'] = authorizationHeader;
        console.info(`https://www.douyin.com/top/v1?${requestParameters}`, { headers });
        let response = await axios.get(`https://www.douyin.com/top/v1?${requestParameters}`, { headers });
        console.info(JSON.stringify(response.data),"申请上传---------");
        if (response.status !== 200) throw new Error('Failed to get upload URL');
        const { UploadNodes: [{ Vid, UploadHost,SessionKey: NodeSessionKey , StoreInfos: [{ StoreUri, Auth:videoAuth }] }] } = response.data.Result.InnerUploadAddress;
        // const { UploadHost,SessionKey: NodeSessionKey , StoreInfos: [{ StoreUri, Auth:videoAuth }] } = response.data.Result.InnerUploadAddress.UploadNodes[0];
        
        const uploadId = generateUUID();
        const chunkSize = 3145728; // 3MB per chunk
        let responseUpload;
        console.info(fileSize,"fileSize---------");
        if(fileSize>chunkSize){
            let chunks = [];
            for (let i = 0; i < fileSize; i += chunkSize) {
                chunks.push(videoContent.slice(i, i + chunkSize));
            }
            // 2 Upload each chunk
            let crcs = [],promiseAll=[];
            for (let i = 0; i < chunks.length; i++) {
                let chunk = chunks[i];
                let crc = (crc32.buf(chunk) >>> 0).toString(16);
                crcs.push(crc);

                let url = `https://${UploadHost}/upload/v1/${StoreUri}?uploadid=${uploadId}&part_number=${i+1}&phase=transfer&part_offset=${i*chunkSize}`;

                let headers2 = {
                    "Authorization": videoAuth,
                    "Content-Type": "application/octet-stream",
                    "Content-Disposition": 'attachment; filename="undefined"',
                    "x-logical-part-mode":"logical_part",
                    "Content-Crc32": crc
                };
        
                // console.info(JSON.stringify([url, { headers: headers2 }]),`上传分块${i+1}--------\n`);
                let response = axios.post(url, chunk, { headers: headers2 });

                console.info(url,`上传分块${i+1}--------\n`);
                promiseAll.push(response);
                
            }
            const responses = await Promise.all(promiseAll);
            // console.info(JSON.stringify(response.data),`上传分块${i+1}--------\n`);
            responses.forEach((response, index) => {
                console.log(`Response ${index + 1}:`, response.data);
            });


            // return;
            // 3 Finalize upload 合并分块及获得vid
            let url3 = `https://${UploadHost}/upload/v1/${StoreUri}?uploadmode=part&phase=finish&uploadid=${uploadId}`;
            let headers3 = {
                    "Authorization": videoAuth,
                    "origin": "https://www.douyin.com/",
                    "Content-Type": "text/plain;charset=UTF-8",

                    "x-logical-part-mode":"logical_part",
                    // "x-storage-u":7028939348067795974,//user_id
                    "x-upload-with-postupload":1
                };
                let data3 = crcs.map((crc, i) => `${i+1}:${crc}`).join(',');
                responseUpload = await axios.post(url3, {
                parts_crc:data3,
                post_upload_param:{
                        functions: [],
                        session_key: NodeSessionKey,
                        sts2_secret:secretKey,
                        sts2_token:sessionToken
                    }
                }, { headers: headers3 });
                console.info(JSON.stringify(responseUpload.data),"合并分块--------\n");
        }else{
            let url4 = `https://${UploadHost}/upload/v1/${StoreUri}`;
                const FormData = require('form-data');
                const formData = new FormData();
                formData.append('file', videoContent, {
                    filename: "blob",
                    // "Content-Type": "application/octet-stream",
                    contentType: 'video/mp4', 
                });
                formData.append('post_upload_req', JSON.stringify({
                    functions: [],
                    session_key: NodeSessionKey,
                    sts2_secret:secretKey,
                    sts2_token:sessionToken
                }));

                const formHeaders = formData.getHeaders();
                let headers4 = {
                        ...formHeaders,
                        "Authorization": videoAuth,
                        "origin": "https://www.douyin.com/",
                        "content-crc32": (crc32.buf(videoContent) >>> 0).toString(16) ,
                        "x-logical-part-mode":"logical_part",
                        // "x-storage-u":7028939348067795974,//user_id
                        "x-upload-with-postupload":1
                    };

                    console.info(formData);
                    console.info(headers4);
                    responseUpload = await axios.post(url4,formData, { headers: headers4 });
                console.info(JSON.stringify(responseUpload.data),"直接上传不分块--------\n");
        }
        
        if (responseUpload.status !== 200) {
            throw new Error('Failed to finalize upload');
        }
        return Vid;
        // {"code":2000,"apiversion":"v1","message":"Success","data":{"file_info":{"hash":"","key":"tos-useast5-v-0068-tx/ogDWYE0g8InO0FkCoSlfhqnmfEU0BVgY2nI0AD"},"post_upload_resp":{"request_id":"20241118142912D66CBA8320714A04828A","results":[{"vid":"v12025gd0000cstkud7og65q62qk4kd0","video_meta":{"Uri":"tos-useast5-v-0068-tx/ogDWYE0g8InO0FkCoSlfhqnmfEU0BVgY2nI0AD","Height":720,"Width":1280,"OriginHeight":720,"OriginWidth":1280,"Duration":67.291,"Bitrate":1270570,"Md5":"77d476e64a3af5a21b3b1b054f631f8a","Format":"MP4","Size":10687249,"FileType":"video","Codec":"h264"}}],"multi_callback_args":[""],"plugin_results":[null]}}}
    }



export class ApiVideoRepository extends Repository {
  private userDebug = console.debug;//debug("tiktok:user");


  constructor(private client: ApiClient ) {
    super();
  }

 
  async uploadVideo(path) {
    let uploadRegion = await this.client.state.getConfig("upload_region");
    return await uploadToTikTok(path,this.client.state.getCookieString(),uploadRegion);
  }


  async postVideo(obj) {
    // https://www.douyin.com/api/v1/post_schedule/ack/?ack_type=2&aid=1988

  
      let params = Object.assign( {
            // ...this.client.state.defaultHttpParams,
            // WebIdLastTime:Math.floor(Date.now() / 1000),
            msToken:this.client.state.getCookieByName("msToken"),
        },{});
      let body = Object.assign( {
         
      },obj);
      if(!body?.post_common_info?.creation_id){
        body.post_common_info.creation_id = getCreationId();
      }//补全
        const urlNew = this.client.signer.sign("https://www.douyin.com/tiktok/web/project/post/v1/?app_name=tiktok_web&channel=tiktok_web&device_platform=web&tz_name=Asia%2FShanghai&aid=1988",params,undefined,body);
        // const urlNew = 'https://www.douyin.com/tiktok/web/project/post/v1/?app_name=tiktok_web&channel=tiktok_web&device_platform=web&tz_name=Asia%2FShanghai&aid=1988&msToken=vttSC0V0WY_esXdLrtv26DF7aql3HQhIc0ezFSlDHZtBljATnCrWVhKaGTMHlv2wvDVRpfLfCADZ9SxaITLi73mXnoxCi_ZIZDsMTlu7OR4GF0NcSmyIJw49-bNxhCIhRtE5CAbX60ofipdfpuijS2aly3SN';
        console.info(urlNew,"urlNew--------------");
  
        const headers = {
            ...this.client.state.defaultHeaders,
            referer:"https://www.douyin.com/tiktokstudio/upload?from=upload",
            // "x-tt-params": xTTParams,
        };
  
        const response = await this.client.request.send(urlNew,headers,"POST",undefined,body);
        return response;
  }



  async getCommentList(obj) {
      // https://www.douyin.com/@jolenxbudol/video/7353920865848888582
      let params = Object.assign( {
            ...this.client.state.defaultHttpParams,
            WebIdLastTime:Math.floor(Date.now() / 1000),
            "aweme_id": "7353920865848888582",
            "cursor": 20,
            "is_non_personalized": false,
            "count": 20,
            "aid": 1988,
            "app_language": "en-US",
            "device_platform": "web_pc",
            "current_region": "US",
            "fromWeb": 1,
            "enter_from": "tiktok_web"
       },obj);
        const urlNew = this.client.signer.sign("https://www.douyin.com/aweme/v1/web/comment/list/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7417888394417540363&cursor=20&count=20&item_type=0&insert_ids=&whale_cut_token=&cut_version=1&rcFT=&update_version_code=170400&pc_client_type=1&pc_libra_divert=Windows&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh&browser_platform=Win32&browser_name=Chrome&browser_version=131.0.0.0&browser_online=true&engine_name=Blink&engine_version=131.0.0.0&os_name=Windows&os_version=10&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7441112481865434635&uifid=c4a29131752d59acb78af076c3dbdd52744118e38e80b4b96439ef1e20799db0016dfa2ff14641e67add83c3e2fd4f7d9cfedbbe2dc05ad2cd3295d82e9b414ca104bbe0a3d1acd6cb59ffe4fdcc76b3c60e80773def549bc50a1fb7e3c1e79a57c1da5feadeb261113a139bf276fbd38668bf39623ebd11694ab5bb0c309ef18ecbe067cade047969bf2845a0e9e215be04e5bbdc670832118bda67bab4a558&msToken=Xfrdcez4eNK7NKcAd773dYOiWXSgrLUJKXrCgxzmOSq3Yvw-3YYM4tCKu9NCVvDNKgh2lNurCpWXVim2olchFumCh7_-7zYHsEV9sw1IxoGCrPD7yrA7QOlWPFMsI_75WlFKIW2Zt79CffWToEi26V8Rstu1Nh6otPDJJCnWXRjiRgHf6kI6LZbx&a_bogus=xvsjkH6LmZ5ccd%2FtYKYxeANlhFxANTSyDMT2SwoTeNFzbXUP3mNEhrbRjoLSv3pgoWMzw%2FZHqf0lTDncMtXwZq9kFmpkumGyLs5VIX0LgqwpGeimENbqCzYFzwMNU5Tq-%2FV4iAh62UGqgfdAkqQL%2Fplj7%2FuK5c8BBpOjkZubY9sgZMyADpnePQbdTXPt0rVb&verifyFp=verify_m3wp4i2j_vVySUiB1_hGUc_4rBl_Arq8_DCliU7vltz0Y&fp=verify_m3wp4i2j_vVySUiB1_hGUc_4rBl_Arq8_DCliU7vltz0Y",params);
        console.info(urlNew,"urlNew--------------");
  
        const headers = {
            ...this.client.state.defaultHeaders,
            referer:"https://www.douyin.com/",
            // "x-tt-params": xTTParams,
        };
  
        const response = await this.client.request.send(urlNew,headers);
        return response;
  }




//   https://www.douyin.com/tiktokstudio/analytics

async AnalyticsInsightV2(obj) {
    // https://www.douyin.com/@jolenxbudol/video/7353920865848888582
    let params = Object.assign( {
          ...this.client.state.defaultHttpParams,
          WebIdLastTime:Math.floor(Date.now() / 1000),
        "aid": 1988,
        "tz_offset": 28800,
        "app_language": "zh-Hant-TW",
        // type_requests: [{"insigh_type":"follower_num_history","days":5,"end_days":0},{"insigh_type":"follower_num","days":5,"end_d ays":0},{"insigh_type":"net_follower_history","days":5,"end_days":0}],
        // "type_requests": "[{\"insigh_type\":\"video_info\",\"aweme_id\":\"\"},{\"insigh_type\":\"item_search_terms\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_traffic_source_percent_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_retention_rate_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_info\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_view_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_total_duration_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_per_duration_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_finish_rate_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_new_follower_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"photo_viewed\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_total_duration_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_new_followers\",\"aweme_id\":\"\"},{\"insigh_type\":\"photo_retention_rate_history_7d\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_vv_history_7d\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_vv_history_48_hours\",\"aweme_id\":\"\"}]",
        // "type_requests": [{"insigh_type":"unique_viewer","end_days":1,"days":7},{"insigh_type":"unique_viewer_num","range":1},{"insigh_type":"unique_viewer_num_before","range":1},{"insigh_type":"returning_viewer","end_days":1,"days":7},{"insigh_type":"new_viewer","end_days":1,"days":7},{"insigh_type":"new_viewer_num","range":1},{"insigh_type":"new_viewer_num_before","range":1},{"insigh_type":"viewer_active_history_days","days":7,"end_days":1},{"insigh_type":"viewer_active_history_hours","days":8,"end_days":1},{"insigh_type":"viewer_gender_percent","range":1},{"insigh_type":"unique_viewer_num","range":1},{"insigh_type":"top10_other_creators_recommendation"},{"insigh_type":"top10_other_videos_recommendation"},{"insigh_type":"viewer_age_distribution","range":1},{"insigh_type":"unique_viewer_num","range":1},{"insigh_type":"viewer_country_city_percent","range":1}]
        "type_requests": "[{\"insigh_type\":\"unique_viewer\",\"end_days\":1,\"days\":7},{\"insigh_type\":\"unique_viewer_num\",\"range\":1},{\"insigh_type\":\"unique_viewer_num_before\",\"range\":1},{\"insigh_type\":\"returning_viewer\",\"end_days\":1,\"days\":7},{\"insigh_type\":\"new_viewer\",\"end_days\":1,\"days\":7},{\"insigh_type\":\"new_viewer_num\",\"range\":1},{\"insigh_type\":\"new_viewer_num_before\",\"range\":1},{\"insigh_type\":\"viewer_active_history_days\",\"days\":7,\"end_days\":1},{\"insigh_type\":\"viewer_active_history_hours\",\"days\":8,\"end_days\":1},{\"insigh_type\":\"viewer_gender_percent\",\"range\":1},{\"insigh_type\":\"unique_viewer_num\",\"range\":1},{\"insigh_type\":\"top10_other_creators_recommendation\"},{\"insigh_type\":\"top10_other_videos_recommendation\"},{\"insigh_type\":\"viewer_age_distribution\",\"range\":1},{\"insigh_type\":\"unique_viewer_num\",\"range\":1},{\"insigh_type\":\"viewer_country_city_percent\",\"range\":1}]", 
        // "type_requests": "[{\"insigh_type\":\"video_info\",\"aweme_id\":\"\"},{\"insigh_type\":\"item_search_terms\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_traffic_source_percent_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_retention_rate_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_info\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_view_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_total_duration_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_per_duration_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_finish_rate_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_new_follower_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"photo_viewed\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_total_duration_realtime\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_new_followers\",\"aweme_id\":\"\"},{\"insigh_type\":\"photo_retention_rate_history_7d\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_vv_history_7d\",\"aweme_id\":\"\"},{\"insigh_type\":\"video_vv_history_48_hours\",\"aweme_id\":\"\"}]",
        // "type_requests":"[{\\"insigh_type\\":\\"incentive_vv\\",\\"prevCycleStartDays\\":16,\\"days\\":16,\\"end_days\\":1}]"
        // "type_requests":"[{\\"insigh_type\\":\\"vv_history\\",\\"days\\":16,\\"end_days\\":1},{\\"insigh_type\\":\\"pv_history\\",\\"days\\":16,\\"end_days\\":1},{\\"insigh_type\\":\\"like_history\\",\\"days\\":16,\\"end_days\\":1},{\\"insigh_type\\":\\"comment_history\\",\\"days\\":16,\\"end_days\\":1},{\\"insigh_type\\":\\"share_history\\",\\"days\\":16,\\"end_days\\":1},{\\"insigh_type\\":\\"follower_num_history\\",\\"days\\":16,\\"end_days\\":1},{\\"insigh_type\\":\\"reached_audience_history\\",\\"days\\":16,\\"end_days\\":1}]",
        // "type_requests":"[{\\"insigh_type\\":\\"vv_traffic_source\\",\\"days\\":7,\\"end_days\\":1}]",
        // "type_requests":"[{\\"insigh_type\\":\\"user_search_terms\\",\\"range\\":1}]",
        // "type_requests":"[{\\"insigh_type\\":\\"incentive_vv\\",\\"prevCycleStartDays\\":16,\\"days\\":16,\\"end_days\\":1}]",
    },obj);
      const urlNew = this.client.signer.sign("https://www.douyin.com/aweme/v2/data/insight/?locale=zh-Hant-TW&aid=1988&priority_region=US&region=US&tz_name=Asia%2FShanghai&app_name=tiktok_creator_center&app_language=zh-Hant-TW&device_platform=web_pc&channel=tiktok_web&device_id=7420098649458017797&os=win&screen_width=1920&screen_height=1080&browser_language=zh&browser_platform=Win32&browser_name=Mozilla&browser_version=5.0+(Windows+NT+10.0%3B+Win64%3B+x64)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F131.0.0.0+Safari%2F537.36&tz_offset=28800&type_requests=[%7B%22insigh_type%22:%22unique_viewer%22,%22end_days%22:1,%22days%22:7%7D,%7B%22insigh_type%22:%22unique_viewer_num%22,%22range%22:1%7D,%7B%22insigh_type%22:%22unique_viewer_num_before%22,%22range%22:1%7D,%7B%22insigh_type%22:%22returning_viewer%22,%22end_days%22:1,%22days%22:7%7D,%7B%22insigh_type%22:%22new_viewer%22,%22end_days%22:1,%22days%22:7%7D,%7B%22insigh_type%22:%22new_viewer_num%22,%22range%22:1%7D,%7B%22insigh_type%22:%22new_viewer_num_before%22,%22range%22:1%7D,%7B%22insigh_type%22:%22viewer_active_history_days%22,%22days%22:7,%22end_days%22:1%7D,%7B%22insigh_type%22:%22viewer_active_history_hours%22,%22days%22:8,%22end_days%22:1%7D,%7B%22insigh_type%22:%22viewer_gender_percent%22,%22range%22:1%7D,%7B%22insigh_type%22:%22unique_viewer_num%22,%22range%22:1%7D,%7B%22insigh_type%22:%22top10_other_creators_recommendation%22%7D,%7B%22insigh_type%22:%22top10_other_videos_recommendation%22%7D,%7B%22insigh_type%22:%22viewer_age_distribution%22,%22range%22:1%7D,%7B%22insigh_type%22:%22unique_viewer_num%22,%22range%22:1%7D,%7B%22insigh_type%22:%22viewer_country_city_percent%22,%22range%22:1%7D]",params);
      console.info(urlNew,"urlNew--------------");

      const headers = {
          ...this.client.state.defaultHeaders,
          referer:"https://www.douyin.com/",
          // "x-tt-params": xTTParams,
      };

      const response = await this.client.request.send(urlNew,headers);
      return response;
}


async getUserPostList(obj) {
    let params = Object.assign( {
        ...this.client.state.defaultHttpParams,
        WebIdLastTime:Math.floor(Date.now() / 1000),
        "secUid": "MS4wLjABAAAASSOUgco2xzmGTsWS8ywyyzts_KLvO04TD-LwCGefOzuUF7LkpuVx10lzlp3HNOoI",
        "aid": 1988,
        "count": 16,
        "cursor": "0",
        "region": "US",
        "language": "zh-Hant-TW",
        "coverFormat": 2,
        "post_item_list_request_type": 0,
        "needPinnedItemIds": true
  },obj);
    const urlNew = this.client.signer.sign("https://www.douyin.com/api/post/item_list/?WebIdLastTime=1727968085&aid=1988&app_language=zh-Hant-TW&app_name=tiktok_web&browser_language=zh&browser_name=Mozilla&browser_online=true&browser_platform=Win32&browser_version=5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F131.0.0.0%20Safari%2F537.36&channel=tiktok_web&cookie_enabled=true&count=35&coverFormat=2&cursor=0&data_collection_enabled=true&device_id=7420098649458017797&device_platform=web_pc&focus_state=true&from_page=user&history_len=1&is_fullscreen=false&is_page_visible=true&language=zh-Hant-TW&odinId=7028939348067795974&os=windows&priority_region=US&referer=https%3A%2F%2Fwww.douyin.com%2Ftiktokstudio%2Fanalytics&region=US&root_referer=https%3A%2F%2Fwww.douyin.com%2Ftiktokstudio%2Fanalytics&screen_height=1080&screen_width=1920&secUid=MS4wLjABAAAASSOUgco2xzmGTsWS8ywyyzts_KLvO04TD-LwCGefOzuUF7LkpuVx10lzlp3HNOoI&tz_name=Asia%2FShanghai&user_is_login=true&verifyFp=verify_m3r67f0a_b8X96VwA_tcFS_4tUo_9lYm_J6sZI33iSiNW&webcast_language=zh-Hant-TW&msToken=vVPyMZQVBGSPKmjruIqGo11PHHeAuuW-mi8IF6KBKxk6T56kCibOtXk4gFVCa4NgWokKDTZd1hh_r8_VreLqTe-qVDP9ubf0-lyM3GscBx0jUgSpXj_rv_Ar_0HUahtKhU_84tlbR0bRuny5X127N20V32kL",params);
    console.info(urlNew,"urlNew--------------");

    const headers = {
        ...this.client.state.defaultHeaders,
        referer:"https://www.douyin.com/",
        // "x-tt-params": xTTParams,
    };

    const response = await this.client.request.send(urlNew,headers);
    return response;
}










}


