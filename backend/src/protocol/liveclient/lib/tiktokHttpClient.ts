import axios from 'axios';
// import TikTokCookieJar from './tiktokCookieJar';
import { deserializeMessage } from './webcastProtobuf';
// import { signWebcastRequest } from './tiktokSignatureProvider';

import Config from './webcastConfig';
import { SignerService } from './signer.service';
import TikTokCookieJar from './tiktokCookieJar';
const querystring = require('querystring');

export default class TikTokHttpClient {
    axiosInstance: any;
    cookieJar: any;
    signerService: SignerService;
    constructor(customHeaders, axiosOptions, sessionId) {
        const { Cookie } = customHeaders || {};

        // if (Cookie) {
        //     delete customHeaders['Cookie'];
        // }

        this.axiosInstance = axios.create({
            timeout: 15000,
            headers: {
                ...Config.DEFAULT_REQUEST_HEADERS,
                ...customHeaders,
            },
            ...(axiosOptions || {}),
        });

        this.cookieJar = new TikTokCookieJar(this.axiosInstance);

        if (Cookie) {
            Cookie.split('; ').forEach((v) => this.cookieJar.processSetCookieHeader(v));
        }

        // if (sessionId) {
        //     this.setSessionId(sessionId);
        // }

        this.signerService = new SignerService();
    }

    get(url, responseType?:string) {
        return this.axiosInstance.get(url, { responseType });
    }

    post(url, params, data, responseType) {
        return this.axiosInstance.post(url, data, { params, responseType });
    }
    
    // setSessionId(sessionId) {
    //     this.cookieJar.setCookie('sessionid', sessionId);
    //     this.cookieJar.setCookie('sessionid_ss', sessionId);
    //     this.cookieJar.setCookie('sid_tt', sessionId);
    // }

    async buildUrl(host, path, params, sign) {
        // let fullUrl = `${host}${path}?${new URLSearchParams(params || {})}`;
        // let fullUrl = `${host}${path}?${querystring.stringify(params || {})}`;
        // let paramstr = [];
        // for(let key in params){paramstr.push(`${key}=${encodeURIComponent(params[key])}`);}
        // let fullUrl = `${host}${path}?${paramstr.join('&')}`;
        // console.info(fullUrl,"fullUrl--------1"); 
        let fullUrl;
        if (1||sign) {
            // fullUrl = await signWebcastRequest(fullUrl, this.axiosInstance.defaults.headers, this.cookieJar);
            fullUrl = await this.signerService.sign(`${host}${path}?`, params);
        }
        else {
            fullUrl = `${host}${path}?${new URLSearchParams(params || {})}`;
        }
        return fullUrl;
    }

    async getMainPage(path) {
        let response = await this.get(`${Config.TIKTOK_URL_WEB}${path}`);
        return response.data;
    }

    async getDeserializedObjectFromWebcastApi(path, params, schemaName, shouldSign) {
        let url = await this.buildUrl(Config.TIKTOK_URL_WEBCAST, path, params, shouldSign);
        // let response = await this.get(url+"&msToken=sxroDgWCv0ARuzG5BHypFhFZX-Xcb0dXli_diCiORLrDKzgh5Otdbc53F3EnUIyxDl0rK-ZD9jqQ3pLWQ3DbYXRCwLuAYiSQXGhJa4KAJ87QekoPK7_HsBkmcf5XZ5RSZbxvkA==", 'arraybuffer');
        // console.info(url);
        let response = await this.get(url, 'arraybuffer');
        // console.info(response,"!----------------");
        return deserializeMessage(schemaName, response.data);
    }

    async getJsonObjectFromWebcastApi(path, params, shouldSign) {
        let url = await this.buildUrl(Config.TIKTOK_URL_WEBCAST, path, params, shouldSign);
        let response = await this.get(url, 'json');
        return response.data;
    }

    async postFormDataToWebcastApi(path, params, formData) {
        let url = await this.buildUrl(Config.TIKTOK_URL_WEBCAST, path, params, 1);
        if("object"==typeof formData){
            // let _data = Object.assign({},formData);
            // formData = new FormData();
            // Object.keys(_data).forEach(key => {formData.append(key, _data[key]);});
            formData = querystring.stringify(formData);
        }
        let response = await this.post(url, undefined , formData, 'json');
        return response.data;
    }

    async getJsonObjectFromTiktokApi(path, params, shouldSign) {
        let url = await this.buildUrl(Config.TIKTOK_URL_WEB, path, params, shouldSign);
        let response = await this.get(url, 'json');
        return response.data;
    }
}