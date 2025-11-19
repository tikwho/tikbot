import * as moment from 'moment';
import * as crypto from 'crypto';
import axios from 'axios';
const querystring = require('querystring');

export class Utils {


  /**
   * 请求
   * @param url 
   * @param requestData 
   * @param type 
   * @param postData 
   * @returns 
   */
  static async req(url: string, requestData?: any, type?: string, postData?: any) {
    try {
      const response = await axios({
        method: type || 'GET',
        url: url,
        params: requestData,
        headers: {
          'Content-Type': 'application/json',
        },
        data: postData
      });
  
      console.log(response.data); // 请求成功的处理逻辑
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 格式化时间戳
   * @param value 
   * @param formatStr 
   */
  static formatTime( value?: string|number|Date , formatStr?:string ) {
      let dateN
      if(typeof value == "number" ){
        dateN = moment( value*1000 );
      }
      // else if(typeof value == "string"  ){
      //   let valueInt = parseInt(value);
      //   dateN = moment( valueInt*1000 );
      // }
      else{
        dateN = moment( value );
      }
      return dateN.format( formatStr || 'YYYY-MM-DD HH:mm:ss');
  }

  static afterAddTime( value: number , unit?:any , date?:Date) {
    // var date=new Date();     //1. js获取当前时间
    // var min=date.getMinutes();  //2. 获取当前分钟
    // date.setMinutes(min+10);
    return moment(date).add( value||1,  unit||'days').toDate();
}

/**
 * 随机字符
 * @param len 
 */
static randStr( len: number ) {
  let $chars = 'abcdefghijklmnopqrstuvwxyz1234567890';    /****默认去掉了容易混淆的字符ABCDEFGHJKMNPQRSTWXYZ oOLl,9gq,Vv,Uu,I1****/
  let maxPos = $chars.length;
  let str = '';
  for ( let i = 0; i < len; i++ ) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
}

  /**
    * 异步延迟
    * @param {number} time 延迟的时间,单位毫秒
    */
  static sleep(time = 0) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, time);
    })
  };


  static toMd5(str) {
      return crypto.createHash('md5').update(str).digest('hex');
  }

  static genUUID(){
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0,
              v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  }

  /**
   * 驼峰转下划线
   * @param obj 
   * @returns 
   */
  static ObjCamelToSnake(obj):any{
    if(!obj){return obj;}
    function camelToSnake(str) {
        return str.replace(/[\w]([A-Z])/g, function(m) {
            return m[0] + "_" + m[1];
        }).toLowerCase();
    }
    
    function keysToSnake(obj) {
        if(!obj){return obj;}
        const newObj = {};
        Object.keys(obj).forEach((key) => {
            newObj[camelToSnake(key)] = "object"==typeof obj[key] ? keysToSnake(obj[key]) : obj[key];
        });
        return newObj;
    }
    return keysToSnake(obj);
  }

    /**
   * 下划线转驼峰
   * @param obj 
   * @returns 
   */
     static ObjSnakeToCamel(obj):any{
      if(!obj){return obj;}
      function snakeToCamel(str) {
        return str.replace(/(_\w)/g, function(m) {
            return m[1].toUpperCase();
        });
    }
      
      function keysToCamel(obj) {
          const newObj = {};
          Object.keys(obj).forEach((key) => {
              newObj[snakeToCamel(key)] = "object"==typeof obj[key] ? keysToCamel(obj[key]):obj[key];
          });
          return newObj;
      }
      return keysToCamel(obj);
    }

    /**
     * 将long对象复制一份
     * @param {*} object 
     * @param {*} replacer 
     * @returns 
     */
  static decycle(object, replacer?:any) {
  
    var objects = new WeakMap();     // object to path mappings

    return (function derez(value, path) {

  // The derez function recurses through the object, producing the deep copy.

            var old_path;   // The path of an earlier occurance of value
            var nu;         // The new object or array

  // If a replacer function was provided, then call it to get a replacement value.

            if (replacer !== undefined) {
                value = replacer(value);
            }

  // typeof null === "object", so go on if this value is really an object but not
  // one of the weird builtin objects.

            if (
                typeof value === "object"
                && value !== null
                && !(value instanceof Boolean)
                && !(value instanceof Date)
                && !(value instanceof Number)
                && !(value instanceof RegExp)
                && !(value instanceof String)
            ) {

  // If the value is an object or array, look to see if we have already
  // encountered it. If so, return a {"$ref":PATH} object. This uses an
  // ES6 WeakMap.

                old_path = objects.get(value);
                if (old_path !== undefined) {
                    return {$ref: old_path};
                }

  // Otherwise, accumulate the unique value and its path.

                objects.set(value, path);

  // If it is an array, replicate the array.

                if (Array.isArray(value)) {
                    nu = [];
                    value.forEach(function (element, i) {
                        nu[i] = derez(element, path + "[" + i + "]");
                    });
                } else {

  // If it is an object, replicate the object.

                    nu = {};
                    Object.keys(value).forEach(function (name) {
                      if(value[name] && "undefined" != typeof value[name].high && value[name].low){
                        if(name.match(/count/i)){
                          nu[name+"_num"] = Number(value[name]);
                        }else{
                          nu[name+"_str"] = String(value[name]);
                        }
                      }
                        nu[name] = derez(
                            value[name],
                            path + "[" + JSON.stringify(name) + "]"
                        );
                    });
                }
                return nu;
            }
            return value;
        }(object, "$"));
    }

}
