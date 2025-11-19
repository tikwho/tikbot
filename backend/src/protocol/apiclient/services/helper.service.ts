export class HelperService {
  /**
   * Find cookie by name in array of cookies
   *
   * @param cookies
   * @param name
   * @returns
   */
  getCookieValue(cookies: string[] | undefined, name: string) {
    let cookieValue = null;
    if (cookies) {
      cookies.forEach((cookie) => {
        const splitCookie = cookie.split(";");

        if (splitCookie) {
          const cookieKv = splitCookie[0].split("=");

          if (cookieKv) {
            if (cookieKv[0] === name) {
              cookieValue = cookieKv[1];
            }
          }
        }
      });
    }

    return cookieValue;
  }

 getCookieStrObj(cookies: string ) {
    console.error(cookies,"cookies操作结果------------");
    const l = {};
    try {
      cookies.split(";").forEach(u => {
            const _ = /(.*?)=([^;]+)/,
                s = u.match(_);
            s && (l[s[1]] = s[2])
        })
    } catch {}
    return l
}

  /**
   * Generates random number between given range
   *
   * @param min - starting number
   * @param max - ending number
   * @returns random number between min and max
   */
  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateCsrfToken(): string {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /**
   * Generates device id
   *
   * @returns device id
   */
  generateDeviceId(): number {
    let numbers: number[] = [];

    this.range(19).forEach(() => {
      numbers.push(this.choose(this.range(10)));
    });

    return parseInt(numbers.join(""));
  }

  /**
   * Returns given length of array
   *
   * @param number
   * @returns array of given number series
   */
  range(number: number) {
    return Array.from(Array(number).keys());
  }

  /**
   * Randomly selects a number from given array of numbers
   *
   * @param choices
   * @returns number
   */
  choose(choices: number[]) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  /**
     * 将long对象复制一份
     * @param {*} object 
     * @param {*} replacer 
     * @returns 
     */
   decycle(object, replacer?:any) {
  
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
