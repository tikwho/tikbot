
// Import necessary libraries
const crypto = require('crypto');

function intOverflow(val) {
    const maxint = 2147483647;
    if (val < -maxint - 1 || val > maxint) {
        val = (val + (maxint + 1)) % (2 * (maxint + 1)) - maxint - 1;
    }
    return val;
}

function unsignedRightShift(n, i) {
    if (n < 0) {
        n = new Uint32Array([n])[0];
    }
    if (i < 0) {
        return -intOverflow(n << Math.abs(i));
    }
    return intOverflow(n >>> i);
}

function decode(string) {
    const map = {
        48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5,
        54: 6, 55: 7, 56: 8, 57: 9, 97: 10, 98: 11,
        99: 12, 100: 13, 101: 14, 102: 15
    };
    let arr = [];
    for (let i = 0; i < 32; i += 2) {
        arr.push((map[string.charCodeAt(i)] << 4) | map[string.charCodeAt(i + 1)]);
    }
    return arr;
}

function md5Array(arr) {
    const hash = crypto.createHash('md5');
    hash.update(Buffer.from(arr));
    return hash.digest('hex');
}

function md5String(s) {
    const hash = crypto.createHash('md5');
    hash.update(s);
    return hash.digest('hex');
}

function md5Buffer(buffer) {
    const hash = crypto.createHash('md5');
    hash.update(buffer);  // Assuming buffer is an instance of Buffer
    return hash.digest('hex');  // Returns the hash as a string of hexadecimal digits
}

function encodeWithKey(key, data) {
    let result = Array(256).fill().map((_, i) => i);
    let temp = 0;
    for (let i = 0; i < 256; i++) {
        temp = (temp + result[i] + key[i % key.length]) % 256;
        [result[i], result[temp]] = [result[temp], result[i]];
    }
    let output = "";
    let j = 0, k = 0;
    for (let i = 0; i < data.length; i++) {
        j = (j + 1) % 256;
        k = (k + result[j]) % 256;
        [result[j], result[k]] = [result[k], result[j]];
        output += String.fromCharCode(data.charCodeAt(i) ^ result[(result[j] + result[k]) % 256]);
    }
    return output;
}

function base64Encode(string) {
    return Buffer.from(string).toString('base64');
}

function b64Encode(string, keyTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=") {
    let output = "";
    let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    let i = 0;

    while (i < string.length) {
        chr1 = string.charCodeAt(i++);
        chr2 = string.charCodeAt(i++);
        chr3 = string.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output += keyTable.charAt(enc1) + keyTable.charAt(enc2) +
                  keyTable.charAt(enc3) + keyTable.charAt(enc4);
    }

    return output;
}

function calNumList(numList) {
    const newNumList = [];
    const indices = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    indices.forEach(index => {
        newNumList.push(numList[index - 1]);
    });
    return newNumList;
}

function obscureFunction(...args) {
    const result = [];
    const indices = [0, 10, 2, 11, 4, 12, 6, 13, 8, 14, 9, 15, 7, 16, 5, 17, 3, 18, 1];
    indices.forEach(index => {
        result[index] = args[index];
    });
    return String.fromCharCode(...result);
}

function encodeWithBizarreLogic(inputString) {
    return "\u0002ÿ" + inputString;
}

function calculateXbogus(params, data, userAgent) {
    const s0 = md5(data); // Replace with actual MD5 functions
    const s1 = md5(params);
    const s0_1 = md5(decode(s0)); // Define `decode` function
    const s1_1 = md5(decode(s1));
    const d = encodeWithKey([0, 1, 12], userAgent); // Define `encodeWithKey`
    const uaStr = b64Encode(d); // Define `b64Encode`
    const uaStrMd5 = md5(uaStr);
    const timestamp = Math.floor(Date.now() / 1000);
    const canvas = 536919696;
    const saltList = [timestamp, canvas, 64, 0, 1, 12, ...decode(s1_1).slice(-2), ...decode(s0_1).slice(-2), ...decode(uaStrMd5).slice(-2)];
    [24, 16, 8, 0].forEach(shift => {
        saltList.push(saltList[0] >> shift & 255);
        saltList.push(saltList[1] >> shift & 255);
    });
    let temp = 64;
    saltList.slice(3).forEach(x => temp ^= x);
    saltList.push(temp, 255);
    const numList = calNumList(saltList);
    const shortStr2 = encodeWithKey([255], obscureFunction(...numList));
    const shortStr3 = encodeWithBizarreLogic(shortStr2);
    const xb = b64Encode(shortStr3, "Dkdpgh4ZKsQB80/Mfvw36XI1R25-WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe");
    return xb;
}

function randomK(num) {
    const possible = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < num; i++) {
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return result;
}

function random32() {
    let result = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx';
    const hexChars = '0123456789abcdef';
    return result.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return hexChars[v];
    });
}

function int32(i) {
    return i & 0xFFFFFFFF;
}

function fixk(k) {
    while (k.length < 4) {
        k += '\0';
    }
    return k;
}

function mx(sum, y, z, p, e, k) {
    const tmp1 = ((z >>> 5) ^ (y << 2)) + ((y >>> 3) ^ (z << 4));
    const tmp2 = (sum ^ y) + (k[p & 3 ^ e] ^ z);
    return tmp1 ^ tmp2;
}

function toBinaryString(v, includeLength) {
    let length = v.length;
    let n = length << 2;
    if (includeLength) {
        const m = v[length - 1];
        n -= 4;
        if (m < n - 3 || m > n) {
            return null;
        }
        n = m;
    }
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(
            String.fromCharCode(v[i] & 0xFF, (v[i] >> 8) & 0xFF, (v[i] >> 16) & 0xFF, (v[i] >> 24) & 0xFF)
        );
    }
    const resultStr = result.join('');
    if (includeLength) {
        return resultStr.substring(0, n);
    }
    return resultStr;
}

function encryptUint32Array(v, k) {
    const DELTA = 0x9E3779B9;
    let length = v.length;
    let n = length - 1;
    let y, z, sum = 0, e, p, q;
    z = v[n];
    for (q = 6 + Math.floor(52 / length); q > 0; q--) {
        sum = int32(sum + DELTA);
        e = sum >>> 2 & 3;
        for (p = 0; p < n; p++) {
            y = v[p + 1];
            v[p] = int32(v[p] + mx(sum, y, z, p, e, k));
            z = v[p];
        }
        y = v[0];
        v[n] = int32(v[n] + mx(sum, y, z, n, e, k));
        z = v[n];
    }
    return v;
}

function decryptUint32Array(v, k) {
    const DELTA = 0x9E3779B9;
    let length = v.length;
    let n = length - 1;
    let y, z, sum, e, p;
    y = v[0];
    sum = int32((6 + Math.floor(52 / length)) * DELTA);
    while (sum !== 0) {
        e = sum >>> 2 & 3;
        for (p = n; p > 0; p--) {
            z = v[p - 1];
            v[p] = int32(v[p] - mx(sum, y, z, p, e, k));
            y = v[p];
        }
        z = v[n];
        v[0] = int32(v[0] - mx(sum, y, z, 0, e, k));
        y = v[0];
        sum = int32(sum - DELTA);
    }
    return v;
}

function utf8DecodeShortString(bs, n) {
    const charCodes = [];
    let i = 0;
    let off = 0;
    const len_ = bs.length;
    while (i < n && off < len_) {
        const unit = bs.charCodeAt(off++);
        if (unit < 0x80) {
            charCodes.push(unit);
        } else if (0xC2 <= unit && unit < 0xE0 && off < len_) {
            charCodes.push(((unit & 0x1F) << 6) | (bs.charCodeAt(off++) & 0x3F));
        } else if (0xE0 <= unit && unit < 0xF0 && off + 1 < len_) {
            charCodes.push(
                ((unit & 0x0F) << 12) |
                ((bs.charCodeAt(off++) & 0x3F) << 6) |
                (bs.charCodeAt(off++) & 0x3F)
            );
        } else if (0xF0 <= unit && unit < 0xF8 && off + 2 < len_) {
            const rune = (
                ((unit & 0x07) << 18) |
                ((bs.charCodeAt(off++) & 0x3F) << 12) |
                ((bs.charCodeAt(off++) & 0x3F) << 6) |
                (bs.charCodeAt(off++) & 0x3F)
            ) - 0x10000;
            if (0 <= rune && rune <= 0xFFFFF) {
                charCodes.push(
                    ((rune >> 10) & 0x03FF) | 0xD800,
                    (rune & 0x03FF) | 0xDC00
                );
            } else {
                throw new Error(`Character outside valid Unicode range: 0x${rune.toString(16)}`);
            }
        } else {
            throw new Error(`Bad UTF-8 encoding 0x${unit.toString(16)}`);
        }
        i++;
    }
    return String.fromCharCode(...charCodes);
}


function utf8DecodeLongString(bs, n) {
    let buf = [];
    let charCodes = new Array(0x8000).fill(0);
    let i = 0;
    let off = 0;
    const lenBs = bs.length;
    while (i < n && off < lenBs) {
        let unit = bs.charCodeAt(off++);
        let divide = unit >> 4;
        if (divide < 8) {
            charCodes[i] = unit;
        } else if (divide === 12 || divide === 13) {
            if (off < lenBs) {
                charCodes[i] = ((unit & 0x1F) << 6) | (bs.charCodeAt(off++) & 0x3F);
            } else {
                throw new Error('Unfinished UTF-8 octet sequence');
            }
        } else if (divide === 14) {
            if (off + 1 < lenBs) {
                charCodes[i] = ((unit & 0x0F) << 12) | ((bs.charCodeAt(off) & 0x3F) << 6) | (bs.charCodeAt(off + 1) & 0x3F);
                off += 2;
            } else {
                throw new Error('Unfinished UTF-8 octet sequence');
            }
        } else if (divide === 15) {
            if (off + 2 < lenBs) {
                let rune = (((unit & 0x07) << 18) | ((bs.charCodeAt(off) & 0x3F) << 12) | ((bs.charCodeAt(off + 1) & 0x3F) << 6) | (bs.charCodeAt(off + 2) & 0x3F)) - 0x10000;
                off += 3;
                if (0 <= rune && rune <= 0xFFFFF) {
                    charCodes[i] = ((rune >> 10) & 0x03FF) | 0xD800;
                    i++;
                    charCodes[i] = (rune & 0x03FF) | 0xDC00;
                } else {
                    throw new Error(`Character outside valid Unicode range: 0x${rune.toString(16)}`);
                }
            } else {
                throw new Error('Unfinished UTF-8 octet sequence');
            }
        } else {
            throw new Error(`Bad UTF-8 encoding 0x${unit.toString(16)}`);
        }
        if (i >= 0x7FFF - 1) {
            let size = i + 1;
            charCodes = charCodes.slice(0, size);
            buf.push(String.fromCharCode(...charCodes));
            n -= size;
            i = -1;
        }
        i++;
    }
    if (i > 0) {
        charCodes = charCodes.slice(0, i);
        buf.push(String.fromCharCode(...charCodes));
    }
    return buf.join('');
}

function utf8Decode(bs, n = bs.length) {
    if (n === 0) {
        return '';
    }
    if (n < 0x7FFF && bs.match(/^[\x00-\x7F]*$/)) {
        return bs.substring(0, n);
    }
    return utf8DecodeLongString(bs, n);
}

function decrypt(data, key) {
    if (!data) {
        return data;
    }
    key = utf8Encode(key);
    return utf8Decode(toBinaryString(decryptUint32Array(toUint32Array(data, false), fixk(toUint32Array(key, false))), true));
}

function encrypt(data, key) {
    if (!data) {
        return data;
    }
    data = utf8Encode(data);
    key = utf8Encode(key);
    return toBinaryString(encryptUint32Array(toUint32Array(data, true), fixk(toUint32Array(key, false))), false);
}

function strData(x, y) {
    let b = Array.from({length: 256}, (_, i) => i);
    let c = 0;
    let d = "";
    for (let i = 0; i < 256; i++) {
        c = (c + b[i] + x.charCodeAt(i % x.length)) % 256;
        let a = b[i];
        b[i] = b[c];
        b[c] = a;
    }
    let e = 0;
    for (let i = 0; i < y.length; i++) {
        e = (e + 1) % 256;
        c = (c + b[e]) % 256;
        let a = b[e];
        b[e] = b[c];
        b[c] = a;
        d += String.fromCharCode(y.charCodeAt(i) ^ b[(b[e] + b[c]) % 256]);
    }
    return d;
}

function bytesToString(bytes, alphabet = 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe=', pad = '=') {
    let result = '';
    let chunk;
    for (let i = 0; i < bytes.length; i += 3) {
        chunk = (bytes.charCodeAt(i) << 16) | (bytes.charCodeAt(i + 1) << 8) | (bytes.charCodeAt(i + 2));
        result += alphabet[(chunk >> 18) & 0x3F] + alphabet[(chunk >> 12) & 0x3F] + alphabet[(chunk >> 6) & 0x3F] + alphabet[chunk & 0x3F];
    }
    let mod = bytes.length % 3;
    if (mod === 1) {
        chunk = bytes.charCodeAt(bytes.length - 1) << 16;
        result += alphabet[(chunk >> 18) & 0x3F] + alphabet[(chunk >> 12) & 0x3F] + pad + pad;
    } else if (mod === 2) {
        chunk = (bytes.charCodeAt(bytes.length - 2) << 16) | (bytes.charCodeAt(bytes.length - 1) << 8);
        result += alphabet[(chunk >> 18) & 0x3F] + alphabet[(chunk >> 12) & 0x3F] + alphabet[(chunk >> 6) & 0x3F] + pad;
    }
    return result;
}

function bool01(x) {
    if (x === null || x === undefined) {
        return '';
    } else if (typeof x === 'boolean') {
        return x ? '1' : '0';
    } else {
        return x;
    }
}

function fromCharCode(valueTyp) {
    let unc = '';
    valueTyp.forEach(c => {
        unc += String.fromCharCode(c & 0xffff);
    });
    return unc;
}

function utf8Encode(str) {
    let buf = [];
    for (let i = 0; i < str.length; i++) {
        const codeUnit = str.charCodeAt(i);
        if (codeUnit < 0x80) {
            buf.push(str.charAt(i));
        } else if (codeUnit < 0x800) {
            buf.push(String.fromCharCode(0xC0 | (codeUnit >> 6)));
            buf.push(String.fromCharCode(0x80 | (codeUnit & 0x3F)));
        } else if (codeUnit < 0xD800 || codeUnit > 0xDFFF) {
            buf.push(String.fromCharCode(0xE0 | (codeUnit >> 12)));
            buf.push(String.fromCharCode(0x80 | ((codeUnit >> 6) & 0x3F)));
            buf.push(String.fromCharCode(0x80 | (codeUnit & 0x3F)));
        } else {
            if (i + 1 < str.length) {
                const nextCodeUnit = str.charCodeAt(i + 1);
                if (codeUnit < 0xDC00 && 0xDC00 <= nextCodeUnit && nextCodeUnit <= 0xDFFF) {
                    const rune = (((codeUnit & 0x03FF) << 10) | (nextCodeUnit & 0x03FF)) + 0x10000;
                    buf.push(String.fromCharCode(0xF0 | ((rune >> 18) & 0x3F)));
                    buf.push(String.fromCharCode(0x80 | ((rune >> 12) & 0x3F)));
                    buf.push(String.fromCharCode(0x80 | ((rune >> 6) & 0x3F)));
                    buf.push(String.fromCharCode(0x80 | (rune & 0x3F)));
                    i++;
                    continue;
                }
            }
            throw new Error('Malformed string');
        }
    }
    return buf.join('');
}

function toUint32Array(bs, includeLength) {
    const length = bs.length;
    let n = length >> 2;
    if (length & 3) {
        n++;
    }
    const v = new Array(includeLength ? n + 1 : n).fill(0);
    for (let i = 0; i < length; i++) {
        v[i >> 2] |= bs.charCodeAt(i) << ((i & 3) << 3);
    }
    if (includeLength) {
        v[n] = length;
    }
    return v;
}

function bytes2string1(a, b = "", c = false) {
    const d = b || 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe';
    let e = c ? '' : '=';
    let g = '';
    let h = 0;
    while (h + 3 <= a.length) {
        let f = (a.charCodeAt(h) << 16) | (a.charCodeAt(h + 1) << 8) | a.charCodeAt(h + 2);
        g += d[(16515072 & f) >> 18] + d[(258048 & f) >> 12] + d[(4032 & f) >> 6] + d[63 & f];
        h += 3;
    }
    if (a.length - h > 0) {
        let f = (255 & a.charCodeAt(h)) << 16;
        if (a.length > h + 1) {
            f |= (255 & a.charCodeAt(h + 1)) << 8;
        }
        g += d[(16515072 & f) >> 18] + d[(258048 & f) >> 12];
        g += a.length > h + 1 ? d[(4032 & f) >> 6] : e;
        g += e;
    }
    return g;
}

function douyinXxbgQEncrypt(obj, obj2 = null) {
    if (obj2) {
        let j = 0;
        for (let i = 0; i < obj.length; i++) {
            if (obj[j]['p']) {
                obj[j]['r'] = obj2[j];
                j++;
            }
        }
    }
    let tempText = '';
    obj.forEach(arg => {
        tempText += bool01(arg['r']) + '^^';
    });
    tempText += String(Date.now());
    let salt = random32();
    let tempNum = Math.floor(salt.charCodeAt(3) / 8) + salt.charCodeAt(3) % 8;
    let key = salt.substring(4, 4 + tempNum);
    let encryptedByte = encrypt(tempText, key) + salt;  // Ensure 'encrypt' function is defined appropriately
    return bytes2string1(encryptedByte, 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe==');
}

function tiktokMssdkEncode(value) {
    const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.";
    let k = randomK(4);  // Ensure 'randomK' function is defined to generate random strings
    let q = encrypt(value, k);  // Ensure 'encrypt' function is defined appropriately
    return k + bytes2string1(q, b64);
}

function encryptStrData(text) {
    let keyNum = Math.floor(Math.random() * (256 - 200 + 1)) + 200;
    let temp = fromCharCode([65, keyNum]) + strData(fromCharCode([keyNum]), text);  // Ensure 'strData' function is defined to perform string manipulation
    return bytesToString(temp);  // Ensure 'bytesToString' function is defined to convert bytes to a string
}

// Example helper functions you might need:
function random32() {
    const hexChars = '0123456789abcdef';
    return Array.from({length: 32}, () => hexChars[Math.floor(Math.random() * hexChars.length)]).join('');
}

function bytesToString(bytes) {
    const alphabet = 'Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe';
    let result = '';
    for (let i = 0; i < bytes.length; i += 3) {
        const chunk = (bytes.charCodeAt(i) << 16) | (bytes.charCodeAt(i + 1) << 8) | bytes.charCodeAt(i + 2);
        result += alphabet.charAt((chunk >> 18) & 0x3f) + alphabet.charAt((chunk >> 12) & 0x3f) + alphabet.charAt((chunk >> 6) & 0x3f) + alphabet.charAt(chunk & 0x3f);
    }
    return result;
}

function randomK(length) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({length: length}, () => possible[Math.floor(Math.random() * possible.length)]).join('');
}

function encrypt(data, key) {
    return Buffer.from(data).toString('base64');
}
