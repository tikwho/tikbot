/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.im_proto = (function() {

    /**
     * Namespace im_proto.
     * @exports im_proto
     * @namespace
     */
    var im_proto = {};

    im_proto.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof im_proto
         * @interface IRequest
         * @property {number|null} [cmd] Request cmd
         * @property {number|Long|null} [sequence_id] Request sequence_id
         * @property {string|null} [sdk_version] Request sdk_version
         * @property {string|null} [token] Request token
         * @property {number|null} [refer] Request refer
         * @property {number|null} [inbox_type] Request inbox_type
         * @property {string|null} [build_number] Request build_number
         * @property {im_proto.IRequestBody|null} [body] Request body
         * @property {string|null} [device_id] Request device_id
         * @property {string|null} [channel] Request channel
         * @property {string|null} [device_platform] Request device_platform
         * @property {string|null} [device_type] Request device_type
         * @property {string|null} [os_version] Request os_version
         * @property {string|null} [version_code] Request version_code
         * @property {Object.<string,string>|null} [headers] Request headers
         * @property {number|null} [config_id] Request config_id
         * @property {im_proto.ITokenInfo|null} [token_info] Request token_info
         * @property {number|null} [auth_type] Request auth_type
         * @property {im_proto.IMsgTrace|null} [msg_trace] Request msg_trace
         * @property {number|null} [retry_count] Request retry_count
         */

        /**
         * Constructs a new Request.
         * @memberof im_proto
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {im_proto.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            this.headers = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request cmd.
         * @member {number} cmd
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.cmd = 0;

        /**
         * Request sequence_id.
         * @member {number|Long} sequence_id
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.sequence_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Request sdk_version.
         * @member {string} sdk_version
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.sdk_version = "";

        /**
         * Request token.
         * @member {string} token
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.token = "";

        /**
         * Request refer.
         * @member {number} refer
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.refer = 0;

        /**
         * Request inbox_type.
         * @member {number} inbox_type
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.inbox_type = 0;

        /**
         * Request build_number.
         * @member {string} build_number
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.build_number = "";

        /**
         * Request body.
         * @member {im_proto.IRequestBody|null|undefined} body
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.body = null;

        /**
         * Request device_id.
         * @member {string} device_id
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.device_id = "";

        /**
         * Request channel.
         * @member {string} channel
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.channel = "";

        /**
         * Request device_platform.
         * @member {string} device_platform
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.device_platform = "";

        /**
         * Request device_type.
         * @member {string} device_type
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.device_type = "";

        /**
         * Request os_version.
         * @member {string} os_version
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.os_version = "";

        /**
         * Request version_code.
         * @member {string} version_code
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.version_code = "";

        /**
         * Request headers.
         * @member {Object.<string,string>} headers
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.headers = $util.emptyObject;

        /**
         * Request config_id.
         * @member {number} config_id
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.config_id = 0;

        /**
         * Request token_info.
         * @member {im_proto.ITokenInfo|null|undefined} token_info
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.token_info = null;

        /**
         * Request auth_type.
         * @member {number} auth_type
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.auth_type = 0;

        /**
         * Request msg_trace.
         * @member {im_proto.IMsgTrace|null|undefined} msg_trace
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.msg_trace = null;

        /**
         * Request retry_count.
         * @member {number} retry_count
         * @memberof im_proto.Request
         * @instance
         */
        Request.prototype.retry_count = 0;

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof im_proto.Request
         * @static
         * @param {im_proto.IRequest=} [properties] Properties to set
         * @returns {im_proto.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link im_proto.Request.verify|verify} messages.
         * @function encode
         * @memberof im_proto.Request
         * @static
         * @param {im_proto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.sequence_id != null && Object.hasOwnProperty.call(message, "sequence_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sequence_id);
            if (message.sdk_version != null && Object.hasOwnProperty.call(message, "sdk_version"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sdk_version);
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.token);
            if (message.refer != null && Object.hasOwnProperty.call(message, "refer"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.refer);
            if (message.inbox_type != null && Object.hasOwnProperty.call(message, "inbox_type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.inbox_type);
            if (message.build_number != null && Object.hasOwnProperty.call(message, "build_number"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.build_number);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                $root.im_proto.RequestBody.encode(message.body, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.device_id != null && Object.hasOwnProperty.call(message, "device_id"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.device_id);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.channel);
            if (message.device_platform != null && Object.hasOwnProperty.call(message, "device_platform"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.device_platform);
            if (message.device_type != null && Object.hasOwnProperty.call(message, "device_type"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.device_type);
            if (message.os_version != null && Object.hasOwnProperty.call(message, "os_version"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.os_version);
            if (message.version_code != null && Object.hasOwnProperty.call(message, "version_code"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.version_code);
            if (message.headers != null && Object.hasOwnProperty.call(message, "headers"))
                for (var keys = Object.keys(message.headers), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 15, wireType 2 =*/122).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.headers[keys[i]]).ldelim();
            if (message.config_id != null && Object.hasOwnProperty.call(message, "config_id"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.config_id);
            if (message.token_info != null && Object.hasOwnProperty.call(message, "token_info"))
                $root.im_proto.TokenInfo.encode(message.token_info, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.auth_type != null && Object.hasOwnProperty.call(message, "auth_type"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.auth_type);
            if (message.msg_trace != null && Object.hasOwnProperty.call(message, "msg_trace"))
                $root.im_proto.MsgTrace.encode(message.msg_trace, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.retry_count != null && Object.hasOwnProperty.call(message, "retry_count"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.retry_count);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link im_proto.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.Request
         * @static
         * @param {im_proto.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.Request(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.sequence_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.sdk_version = reader.string();
                        break;
                    }
                case 4: {
                        message.token = reader.string();
                        break;
                    }
                case 5: {
                        message.refer = reader.int32();
                        break;
                    }
                case 6: {
                        message.inbox_type = reader.int32();
                        break;
                    }
                case 7: {
                        message.build_number = reader.string();
                        break;
                    }
                case 8: {
                        message.body = $root.im_proto.RequestBody.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.device_id = reader.string();
                        break;
                    }
                case 10: {
                        message.channel = reader.string();
                        break;
                    }
                case 11: {
                        message.device_platform = reader.string();
                        break;
                    }
                case 12: {
                        message.device_type = reader.string();
                        break;
                    }
                case 13: {
                        message.os_version = reader.string();
                        break;
                    }
                case 14: {
                        message.version_code = reader.string();
                        break;
                    }
                case 15: {
                        if (message.headers === $util.emptyObject)
                            message.headers = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.headers[key] = value;
                        break;
                    }
                case 16: {
                        message.config_id = reader.int32();
                        break;
                    }
                case 17: {
                        message.token_info = $root.im_proto.TokenInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.auth_type = reader.int32();
                        break;
                    }
                case 19: {
                        message.msg_trace = $root.im_proto.MsgTrace.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.retry_count = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof im_proto.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.sequence_id != null && message.hasOwnProperty("sequence_id"))
                if (!$util.isInteger(message.sequence_id) && !(message.sequence_id && $util.isInteger(message.sequence_id.low) && $util.isInteger(message.sequence_id.high)))
                    return "sequence_id: integer|Long expected";
            if (message.sdk_version != null && message.hasOwnProperty("sdk_version"))
                if (!$util.isString(message.sdk_version))
                    return "sdk_version: string expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.refer != null && message.hasOwnProperty("refer"))
                if (!$util.isInteger(message.refer))
                    return "refer: integer expected";
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                if (!$util.isInteger(message.inbox_type))
                    return "inbox_type: integer expected";
            if (message.build_number != null && message.hasOwnProperty("build_number"))
                if (!$util.isString(message.build_number))
                    return "build_number: string expected";
            if (message.body != null && message.hasOwnProperty("body")) {
                var error = $root.im_proto.RequestBody.verify(message.body);
                if (error)
                    return "body." + error;
            }
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                if (!$util.isString(message.device_id))
                    return "device_id: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            if (message.device_platform != null && message.hasOwnProperty("device_platform"))
                if (!$util.isString(message.device_platform))
                    return "device_platform: string expected";
            if (message.device_type != null && message.hasOwnProperty("device_type"))
                if (!$util.isString(message.device_type))
                    return "device_type: string expected";
            if (message.os_version != null && message.hasOwnProperty("os_version"))
                if (!$util.isString(message.os_version))
                    return "os_version: string expected";
            if (message.version_code != null && message.hasOwnProperty("version_code"))
                if (!$util.isString(message.version_code))
                    return "version_code: string expected";
            if (message.headers != null && message.hasOwnProperty("headers")) {
                if (!$util.isObject(message.headers))
                    return "headers: object expected";
                var key = Object.keys(message.headers);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.headers[key[i]]))
                        return "headers: string{k:string} expected";
            }
            if (message.config_id != null && message.hasOwnProperty("config_id"))
                if (!$util.isInteger(message.config_id))
                    return "config_id: integer expected";
            if (message.token_info != null && message.hasOwnProperty("token_info")) {
                var error = $root.im_proto.TokenInfo.verify(message.token_info);
                if (error)
                    return "token_info." + error;
            }
            if (message.auth_type != null && message.hasOwnProperty("auth_type"))
                if (!$util.isInteger(message.auth_type))
                    return "auth_type: integer expected";
            if (message.msg_trace != null && message.hasOwnProperty("msg_trace")) {
                var error = $root.im_proto.MsgTrace.verify(message.msg_trace);
                if (error)
                    return "msg_trace." + error;
            }
            if (message.retry_count != null && message.hasOwnProperty("retry_count"))
                if (!$util.isInteger(message.retry_count))
                    return "retry_count: integer expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.Request)
                return object;
            var message = new $root.im_proto.Request();
            if (object.cmd != null)
                message.cmd = object.cmd | 0;
            if (object.sequence_id != null)
                if ($util.Long)
                    (message.sequence_id = $util.Long.fromValue(object.sequence_id)).unsigned = false;
                else if (typeof object.sequence_id === "string")
                    message.sequence_id = parseInt(object.sequence_id, 10);
                else if (typeof object.sequence_id === "number")
                    message.sequence_id = object.sequence_id;
                else if (typeof object.sequence_id === "object")
                    message.sequence_id = new $util.LongBits(object.sequence_id.low >>> 0, object.sequence_id.high >>> 0).toNumber();
            if (object.sdk_version != null)
                message.sdk_version = String(object.sdk_version);
            if (object.token != null)
                message.token = String(object.token);
            if (object.refer != null)
                message.refer = object.refer | 0;
            if (object.inbox_type != null)
                message.inbox_type = object.inbox_type | 0;
            if (object.build_number != null)
                message.build_number = String(object.build_number);
            if (object.body != null) {
                if (typeof object.body !== "object")
                    throw TypeError(".im_proto.Request.body: object expected");
                message.body = $root.im_proto.RequestBody.fromObject(object.body);
            }
            if (object.device_id != null)
                message.device_id = String(object.device_id);
            if (object.channel != null)
                message.channel = String(object.channel);
            if (object.device_platform != null)
                message.device_platform = String(object.device_platform);
            if (object.device_type != null)
                message.device_type = String(object.device_type);
            if (object.os_version != null)
                message.os_version = String(object.os_version);
            if (object.version_code != null)
                message.version_code = String(object.version_code);
            if (object.headers) {
                if (typeof object.headers !== "object")
                    throw TypeError(".im_proto.Request.headers: object expected");
                message.headers = {};
                for (var keys = Object.keys(object.headers), i = 0; i < keys.length; ++i)
                    message.headers[keys[i]] = String(object.headers[keys[i]]);
            }
            if (object.config_id != null)
                message.config_id = object.config_id | 0;
            if (object.token_info != null) {
                if (typeof object.token_info !== "object")
                    throw TypeError(".im_proto.Request.token_info: object expected");
                message.token_info = $root.im_proto.TokenInfo.fromObject(object.token_info);
            }
            if (object.auth_type != null)
                message.auth_type = object.auth_type | 0;
            if (object.msg_trace != null) {
                if (typeof object.msg_trace !== "object")
                    throw TypeError(".im_proto.Request.msg_trace: object expected");
                message.msg_trace = $root.im_proto.MsgTrace.fromObject(object.msg_trace);
            }
            if (object.retry_count != null)
                message.retry_count = object.retry_count | 0;
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.Request
         * @static
         * @param {im_proto.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.headers = {};
            if (options.defaults) {
                object.cmd = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sequence_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequence_id = options.longs === String ? "0" : 0;
                object.sdk_version = "";
                object.token = "";
                object.refer = 0;
                object.inbox_type = 0;
                object.build_number = "";
                object.body = null;
                object.device_id = "";
                object.channel = "";
                object.device_platform = "";
                object.device_type = "";
                object.os_version = "";
                object.version_code = "";
                object.config_id = 0;
                object.token_info = null;
                object.auth_type = 0;
                object.msg_trace = null;
                object.retry_count = 0;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.sequence_id != null && message.hasOwnProperty("sequence_id"))
                if (typeof message.sequence_id === "number")
                    object.sequence_id = options.longs === String ? String(message.sequence_id) : message.sequence_id;
                else
                    object.sequence_id = options.longs === String ? $util.Long.prototype.toString.call(message.sequence_id) : options.longs === Number ? new $util.LongBits(message.sequence_id.low >>> 0, message.sequence_id.high >>> 0).toNumber() : message.sequence_id;
            if (message.sdk_version != null && message.hasOwnProperty("sdk_version"))
                object.sdk_version = message.sdk_version;
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.refer != null && message.hasOwnProperty("refer"))
                object.refer = message.refer;
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                object.inbox_type = message.inbox_type;
            if (message.build_number != null && message.hasOwnProperty("build_number"))
                object.build_number = message.build_number;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = $root.im_proto.RequestBody.toObject(message.body, options);
            if (message.device_id != null && message.hasOwnProperty("device_id"))
                object.device_id = message.device_id;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.device_platform != null && message.hasOwnProperty("device_platform"))
                object.device_platform = message.device_platform;
            if (message.device_type != null && message.hasOwnProperty("device_type"))
                object.device_type = message.device_type;
            if (message.os_version != null && message.hasOwnProperty("os_version"))
                object.os_version = message.os_version;
            if (message.version_code != null && message.hasOwnProperty("version_code"))
                object.version_code = message.version_code;
            var keys2;
            if (message.headers && (keys2 = Object.keys(message.headers)).length) {
                object.headers = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.headers[keys2[j]] = message.headers[keys2[j]];
            }
            if (message.config_id != null && message.hasOwnProperty("config_id"))
                object.config_id = message.config_id;
            if (message.token_info != null && message.hasOwnProperty("token_info"))
                object.token_info = $root.im_proto.TokenInfo.toObject(message.token_info, options);
            if (message.auth_type != null && message.hasOwnProperty("auth_type"))
                object.auth_type = message.auth_type;
            if (message.msg_trace != null && message.hasOwnProperty("msg_trace"))
                object.msg_trace = $root.im_proto.MsgTrace.toObject(message.msg_trace, options);
            if (message.retry_count != null && message.hasOwnProperty("retry_count"))
                object.retry_count = message.retry_count;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof im_proto.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Request
         * @function getTypeUrl
         * @memberof im_proto.Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.Request";
        };

        return Request;
    })();

    im_proto.TokenInfo = (function() {

        /**
         * Properties of a TokenInfo.
         * @memberof im_proto
         * @interface ITokenInfo
         * @property {number|null} [mark_id] TokenInfo mark_id
         * @property {number|null} [type] TokenInfo type
         * @property {number|null} [app_id] TokenInfo app_id
         * @property {number|Long|null} [user_id] TokenInfo user_id
         * @property {number|Long|null} [timestamp] TokenInfo timestamp
         * @property {number|null} [app_id_without_hook] TokenInfo app_id_without_hook
         * @property {number|Long|null} [user_id_without_hook] TokenInfo user_id_without_hook
         */

        /**
         * Constructs a new TokenInfo.
         * @memberof im_proto
         * @classdesc Represents a TokenInfo.
         * @implements ITokenInfo
         * @constructor
         * @param {im_proto.ITokenInfo=} [properties] Properties to set
         */
        function TokenInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TokenInfo mark_id.
         * @member {number} mark_id
         * @memberof im_proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.mark_id = 0;

        /**
         * TokenInfo type.
         * @member {number} type
         * @memberof im_proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.type = 0;

        /**
         * TokenInfo app_id.
         * @member {number} app_id
         * @memberof im_proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.app_id = 0;

        /**
         * TokenInfo user_id.
         * @member {number|Long} user_id
         * @memberof im_proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TokenInfo timestamp.
         * @member {number|Long} timestamp
         * @memberof im_proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * TokenInfo app_id_without_hook.
         * @member {number} app_id_without_hook
         * @memberof im_proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.app_id_without_hook = 0;

        /**
         * TokenInfo user_id_without_hook.
         * @member {number|Long} user_id_without_hook
         * @memberof im_proto.TokenInfo
         * @instance
         */
        TokenInfo.prototype.user_id_without_hook = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new TokenInfo instance using the specified properties.
         * @function create
         * @memberof im_proto.TokenInfo
         * @static
         * @param {im_proto.ITokenInfo=} [properties] Properties to set
         * @returns {im_proto.TokenInfo} TokenInfo instance
         */
        TokenInfo.create = function create(properties) {
            return new TokenInfo(properties);
        };

        /**
         * Encodes the specified TokenInfo message. Does not implicitly {@link im_proto.TokenInfo.verify|verify} messages.
         * @function encode
         * @memberof im_proto.TokenInfo
         * @static
         * @param {im_proto.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mark_id != null && Object.hasOwnProperty.call(message, "mark_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mark_id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.app_id != null && Object.hasOwnProperty.call(message, "app_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.app_id);
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.user_id);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
            if (message.app_id_without_hook != null && Object.hasOwnProperty.call(message, "app_id_without_hook"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.app_id_without_hook);
            if (message.user_id_without_hook != null && Object.hasOwnProperty.call(message, "user_id_without_hook"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.user_id_without_hook);
            return writer;
        };

        /**
         * Encodes the specified TokenInfo message, length delimited. Does not implicitly {@link im_proto.TokenInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.TokenInfo
         * @static
         * @param {im_proto.ITokenInfo} message TokenInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TokenInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.TokenInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.mark_id = reader.int32();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.app_id = reader.int32();
                        break;
                    }
                case 4: {
                        message.user_id = reader.int64();
                        break;
                    }
                case 5: {
                        message.timestamp = reader.int64();
                        break;
                    }
                case 6: {
                        message.app_id_without_hook = reader.int32();
                        break;
                    }
                case 7: {
                        message.user_id_without_hook = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TokenInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.TokenInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.TokenInfo} TokenInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TokenInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TokenInfo message.
         * @function verify
         * @memberof im_proto.TokenInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TokenInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mark_id != null && message.hasOwnProperty("mark_id"))
                if (!$util.isInteger(message.mark_id))
                    return "mark_id: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                if (!$util.isInteger(message.app_id))
                    return "app_id: integer expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id) && !(message.user_id && $util.isInteger(message.user_id.low) && $util.isInteger(message.user_id.high)))
                    return "user_id: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.app_id_without_hook != null && message.hasOwnProperty("app_id_without_hook"))
                if (!$util.isInteger(message.app_id_without_hook))
                    return "app_id_without_hook: integer expected";
            if (message.user_id_without_hook != null && message.hasOwnProperty("user_id_without_hook"))
                if (!$util.isInteger(message.user_id_without_hook) && !(message.user_id_without_hook && $util.isInteger(message.user_id_without_hook.low) && $util.isInteger(message.user_id_without_hook.high)))
                    return "user_id_without_hook: integer|Long expected";
            return null;
        };

        /**
         * Creates a TokenInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.TokenInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.TokenInfo} TokenInfo
         */
        TokenInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.TokenInfo)
                return object;
            var message = new $root.im_proto.TokenInfo();
            if (object.mark_id != null)
                message.mark_id = object.mark_id | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.app_id != null)
                message.app_id = object.app_id | 0;
            if (object.user_id != null)
                if ($util.Long)
                    (message.user_id = $util.Long.fromValue(object.user_id)).unsigned = false;
                else if (typeof object.user_id === "string")
                    message.user_id = parseInt(object.user_id, 10);
                else if (typeof object.user_id === "number")
                    message.user_id = object.user_id;
                else if (typeof object.user_id === "object")
                    message.user_id = new $util.LongBits(object.user_id.low >>> 0, object.user_id.high >>> 0).toNumber();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.app_id_without_hook != null)
                message.app_id_without_hook = object.app_id_without_hook | 0;
            if (object.user_id_without_hook != null)
                if ($util.Long)
                    (message.user_id_without_hook = $util.Long.fromValue(object.user_id_without_hook)).unsigned = false;
                else if (typeof object.user_id_without_hook === "string")
                    message.user_id_without_hook = parseInt(object.user_id_without_hook, 10);
                else if (typeof object.user_id_without_hook === "number")
                    message.user_id_without_hook = object.user_id_without_hook;
                else if (typeof object.user_id_without_hook === "object")
                    message.user_id_without_hook = new $util.LongBits(object.user_id_without_hook.low >>> 0, object.user_id_without_hook.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a TokenInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.TokenInfo
         * @static
         * @param {im_proto.TokenInfo} message TokenInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TokenInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mark_id = 0;
                object.type = 0;
                object.app_id = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.user_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.user_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.app_id_without_hook = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.user_id_without_hook = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.user_id_without_hook = options.longs === String ? "0" : 0;
            }
            if (message.mark_id != null && message.hasOwnProperty("mark_id"))
                object.mark_id = message.mark_id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.app_id != null && message.hasOwnProperty("app_id"))
                object.app_id = message.app_id;
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (typeof message.user_id === "number")
                    object.user_id = options.longs === String ? String(message.user_id) : message.user_id;
                else
                    object.user_id = options.longs === String ? $util.Long.prototype.toString.call(message.user_id) : options.longs === Number ? new $util.LongBits(message.user_id.low >>> 0, message.user_id.high >>> 0).toNumber() : message.user_id;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.app_id_without_hook != null && message.hasOwnProperty("app_id_without_hook"))
                object.app_id_without_hook = message.app_id_without_hook;
            if (message.user_id_without_hook != null && message.hasOwnProperty("user_id_without_hook"))
                if (typeof message.user_id_without_hook === "number")
                    object.user_id_without_hook = options.longs === String ? String(message.user_id_without_hook) : message.user_id_without_hook;
                else
                    object.user_id_without_hook = options.longs === String ? $util.Long.prototype.toString.call(message.user_id_without_hook) : options.longs === Number ? new $util.LongBits(message.user_id_without_hook.low >>> 0, message.user_id_without_hook.high >>> 0).toNumber() : message.user_id_without_hook;
            return object;
        };

        /**
         * Converts this TokenInfo to JSON.
         * @function toJSON
         * @memberof im_proto.TokenInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TokenInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TokenInfo
         * @function getTypeUrl
         * @memberof im_proto.TokenInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TokenInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.TokenInfo";
        };

        return TokenInfo;
    })();

    im_proto.MsgTrace = (function() {

        /**
         * Properties of a MsgTrace.
         * @memberof im_proto
         * @interface IMsgTrace
         * @property {Object.<string,number|Long>|null} [metrics] MsgTrace metrics
         * @property {number|null} [path] MsgTrace path
         */

        /**
         * Constructs a new MsgTrace.
         * @memberof im_proto
         * @classdesc Represents a MsgTrace.
         * @implements IMsgTrace
         * @constructor
         * @param {im_proto.IMsgTrace=} [properties] Properties to set
         */
        function MsgTrace(properties) {
            this.metrics = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgTrace metrics.
         * @member {Object.<string,number|Long>} metrics
         * @memberof im_proto.MsgTrace
         * @instance
         */
        MsgTrace.prototype.metrics = $util.emptyObject;

        /**
         * MsgTrace path.
         * @member {number} path
         * @memberof im_proto.MsgTrace
         * @instance
         */
        MsgTrace.prototype.path = 0;

        /**
         * Creates a new MsgTrace instance using the specified properties.
         * @function create
         * @memberof im_proto.MsgTrace
         * @static
         * @param {im_proto.IMsgTrace=} [properties] Properties to set
         * @returns {im_proto.MsgTrace} MsgTrace instance
         */
        MsgTrace.create = function create(properties) {
            return new MsgTrace(properties);
        };

        /**
         * Encodes the specified MsgTrace message. Does not implicitly {@link im_proto.MsgTrace.verify|verify} messages.
         * @function encode
         * @memberof im_proto.MsgTrace
         * @static
         * @param {im_proto.IMsgTrace} message MsgTrace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgTrace.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.metrics != null && Object.hasOwnProperty.call(message, "metrics"))
                for (var keys = Object.keys(message.metrics), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.metrics[keys[i]]).ldelim();
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.path);
            return writer;
        };

        /**
         * Encodes the specified MsgTrace message, length delimited. Does not implicitly {@link im_proto.MsgTrace.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.MsgTrace
         * @static
         * @param {im_proto.IMsgTrace} message MsgTrace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgTrace.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgTrace message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.MsgTrace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.MsgTrace} MsgTrace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgTrace.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.MsgTrace(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.metrics === $util.emptyObject)
                            message.metrics = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int64();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.metrics[key] = value;
                        break;
                    }
                case 2: {
                        message.path = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgTrace message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.MsgTrace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.MsgTrace} MsgTrace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgTrace.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgTrace message.
         * @function verify
         * @memberof im_proto.MsgTrace
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgTrace.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.metrics != null && message.hasOwnProperty("metrics")) {
                if (!$util.isObject(message.metrics))
                    return "metrics: object expected";
                var key = Object.keys(message.metrics);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "metrics: integer key{k:int32} expected";
                    if (!$util.isInteger(message.metrics[key[i]]) && !(message.metrics[key[i]] && $util.isInteger(message.metrics[key[i]].low) && $util.isInteger(message.metrics[key[i]].high)))
                        return "metrics: integer|Long{k:int32} expected";
                }
            }
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isInteger(message.path))
                    return "path: integer expected";
            return null;
        };

        /**
         * Creates a MsgTrace message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.MsgTrace
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.MsgTrace} MsgTrace
         */
        MsgTrace.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.MsgTrace)
                return object;
            var message = new $root.im_proto.MsgTrace();
            if (object.metrics) {
                if (typeof object.metrics !== "object")
                    throw TypeError(".im_proto.MsgTrace.metrics: object expected");
                message.metrics = {};
                for (var keys = Object.keys(object.metrics), i = 0; i < keys.length; ++i)
                    if ($util.Long)
                        (message.metrics[keys[i]] = $util.Long.fromValue(object.metrics[keys[i]])).unsigned = false;
                    else if (typeof object.metrics[keys[i]] === "string")
                        message.metrics[keys[i]] = parseInt(object.metrics[keys[i]], 10);
                    else if (typeof object.metrics[keys[i]] === "number")
                        message.metrics[keys[i]] = object.metrics[keys[i]];
                    else if (typeof object.metrics[keys[i]] === "object")
                        message.metrics[keys[i]] = new $util.LongBits(object.metrics[keys[i]].low >>> 0, object.metrics[keys[i]].high >>> 0).toNumber();
            }
            if (object.path != null)
                message.path = object.path | 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgTrace message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.MsgTrace
         * @static
         * @param {im_proto.MsgTrace} message MsgTrace
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgTrace.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.metrics = {};
            if (options.defaults)
                object.path = 0;
            var keys2;
            if (message.metrics && (keys2 = Object.keys(message.metrics)).length) {
                object.metrics = {};
                for (var j = 0; j < keys2.length; ++j)
                    if (typeof message.metrics[keys2[j]] === "number")
                        object.metrics[keys2[j]] = options.longs === String ? String(message.metrics[keys2[j]]) : message.metrics[keys2[j]];
                    else
                        object.metrics[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.metrics[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.metrics[keys2[j]].low >>> 0, message.metrics[keys2[j]].high >>> 0).toNumber() : message.metrics[keys2[j]];
            }
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            return object;
        };

        /**
         * Converts this MsgTrace to JSON.
         * @function toJSON
         * @memberof im_proto.MsgTrace
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgTrace.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgTrace
         * @function getTypeUrl
         * @memberof im_proto.MsgTrace
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgTrace.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.MsgTrace";
        };

        return MsgTrace;
    })();

    im_proto.RequestBody = (function() {

        /**
         * Properties of a RequestBody.
         * @memberof im_proto
         * @interface IRequestBody
         * @property {im_proto.ISendMessageRequestBody|null} [send_message_body] RequestBody send_message_body
         * @property {im_proto.ICreateConversationV2RequestBody|null} [create_conversation_v2_body] RequestBody create_conversation_v2_body
         * @property {im_proto.IGetStrangerConversationListRequestBody|null} [get_stranger_conversation_body] RequestBody get_stranger_conversation_body
         * @property {im_proto.IGetUserConversationListRequestBody|null} [get_conversation_list_body] RequestBody get_conversation_list_body
         */

        /**
         * Constructs a new RequestBody.
         * @memberof im_proto
         * @classdesc Represents a RequestBody.
         * @implements IRequestBody
         * @constructor
         * @param {im_proto.IRequestBody=} [properties] Properties to set
         */
        function RequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestBody send_message_body.
         * @member {im_proto.ISendMessageRequestBody|null|undefined} send_message_body
         * @memberof im_proto.RequestBody
         * @instance
         */
        RequestBody.prototype.send_message_body = null;

        /**
         * RequestBody create_conversation_v2_body.
         * @member {im_proto.ICreateConversationV2RequestBody|null|undefined} create_conversation_v2_body
         * @memberof im_proto.RequestBody
         * @instance
         */
        RequestBody.prototype.create_conversation_v2_body = null;

        /**
         * RequestBody get_stranger_conversation_body.
         * @member {im_proto.IGetStrangerConversationListRequestBody|null|undefined} get_stranger_conversation_body
         * @memberof im_proto.RequestBody
         * @instance
         */
        RequestBody.prototype.get_stranger_conversation_body = null;

        /**
         * RequestBody get_conversation_list_body.
         * @member {im_proto.IGetUserConversationListRequestBody|null|undefined} get_conversation_list_body
         * @memberof im_proto.RequestBody
         * @instance
         */
        RequestBody.prototype.get_conversation_list_body = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * RequestBody body.
         * @member {"send_message_body"|"create_conversation_v2_body"|"get_stranger_conversation_body"|"get_conversation_list_body"|undefined} body
         * @memberof im_proto.RequestBody
         * @instance
         */
        Object.defineProperty(RequestBody.prototype, "body", {
            get: $util.oneOfGetter($oneOfFields = ["send_message_body", "create_conversation_v2_body", "get_stranger_conversation_body", "get_conversation_list_body"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RequestBody instance using the specified properties.
         * @function create
         * @memberof im_proto.RequestBody
         * @static
         * @param {im_proto.IRequestBody=} [properties] Properties to set
         * @returns {im_proto.RequestBody} RequestBody instance
         */
        RequestBody.create = function create(properties) {
            return new RequestBody(properties);
        };

        /**
         * Encodes the specified RequestBody message. Does not implicitly {@link im_proto.RequestBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.RequestBody
         * @static
         * @param {im_proto.IRequestBody} message RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.send_message_body != null && Object.hasOwnProperty.call(message, "send_message_body"))
                $root.im_proto.SendMessageRequestBody.encode(message.send_message_body, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.create_conversation_v2_body != null && Object.hasOwnProperty.call(message, "create_conversation_v2_body"))
                $root.im_proto.CreateConversationV2RequestBody.encode(message.create_conversation_v2_body, writer.uint32(/* id 609, wireType 2 =*/4874).fork()).ldelim();
            if (message.get_stranger_conversation_body != null && Object.hasOwnProperty.call(message, "get_stranger_conversation_body"))
                $root.im_proto.GetStrangerConversationListRequestBody.encode(message.get_stranger_conversation_body, writer.uint32(/* id 1000, wireType 2 =*/8002).fork()).ldelim();
            if (message.get_conversation_list_body != null && Object.hasOwnProperty.call(message, "get_conversation_list_body"))
                $root.im_proto.GetUserConversationListRequestBody.encode(message.get_conversation_list_body, writer.uint32(/* id 2006, wireType 2 =*/16050).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RequestBody message, length delimited. Does not implicitly {@link im_proto.RequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.RequestBody
         * @static
         * @param {im_proto.IRequestBody} message RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.RequestBody} RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.RequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 100: {
                        message.send_message_body = $root.im_proto.SendMessageRequestBody.decode(reader, reader.uint32());
                        break;
                    }
                case 609: {
                        message.create_conversation_v2_body = $root.im_proto.CreateConversationV2RequestBody.decode(reader, reader.uint32());
                        break;
                    }
                case 1000: {
                        message.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListRequestBody.decode(reader, reader.uint32());
                        break;
                    }
                case 2006: {
                        message.get_conversation_list_body = $root.im_proto.GetUserConversationListRequestBody.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.RequestBody} RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestBody message.
         * @function verify
         * @memberof im_proto.RequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.send_message_body != null && message.hasOwnProperty("send_message_body")) {
                properties.body = 1;
                {
                    var error = $root.im_proto.SendMessageRequestBody.verify(message.send_message_body);
                    if (error)
                        return "send_message_body." + error;
                }
            }
            if (message.create_conversation_v2_body != null && message.hasOwnProperty("create_conversation_v2_body")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.im_proto.CreateConversationV2RequestBody.verify(message.create_conversation_v2_body);
                    if (error)
                        return "create_conversation_v2_body." + error;
                }
            }
            if (message.get_stranger_conversation_body != null && message.hasOwnProperty("get_stranger_conversation_body")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.im_proto.GetStrangerConversationListRequestBody.verify(message.get_stranger_conversation_body);
                    if (error)
                        return "get_stranger_conversation_body." + error;
                }
            }
            if (message.get_conversation_list_body != null && message.hasOwnProperty("get_conversation_list_body")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.im_proto.GetUserConversationListRequestBody.verify(message.get_conversation_list_body);
                    if (error)
                        return "get_conversation_list_body." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.RequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.RequestBody} RequestBody
         */
        RequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.RequestBody)
                return object;
            var message = new $root.im_proto.RequestBody();
            if (object.send_message_body != null) {
                if (typeof object.send_message_body !== "object")
                    throw TypeError(".im_proto.RequestBody.send_message_body: object expected");
                message.send_message_body = $root.im_proto.SendMessageRequestBody.fromObject(object.send_message_body);
            }
            if (object.create_conversation_v2_body != null) {
                if (typeof object.create_conversation_v2_body !== "object")
                    throw TypeError(".im_proto.RequestBody.create_conversation_v2_body: object expected");
                message.create_conversation_v2_body = $root.im_proto.CreateConversationV2RequestBody.fromObject(object.create_conversation_v2_body);
            }
            if (object.get_stranger_conversation_body != null) {
                if (typeof object.get_stranger_conversation_body !== "object")
                    throw TypeError(".im_proto.RequestBody.get_stranger_conversation_body: object expected");
                message.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListRequestBody.fromObject(object.get_stranger_conversation_body);
            }
            if (object.get_conversation_list_body != null) {
                if (typeof object.get_conversation_list_body !== "object")
                    throw TypeError(".im_proto.RequestBody.get_conversation_list_body: object expected");
                message.get_conversation_list_body = $root.im_proto.GetUserConversationListRequestBody.fromObject(object.get_conversation_list_body);
            }
            return message;
        };

        /**
         * Creates a plain object from a RequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.RequestBody
         * @static
         * @param {im_proto.RequestBody} message RequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.send_message_body != null && message.hasOwnProperty("send_message_body")) {
                object.send_message_body = $root.im_proto.SendMessageRequestBody.toObject(message.send_message_body, options);
                if (options.oneofs)
                    object.body = "send_message_body";
            }
            if (message.create_conversation_v2_body != null && message.hasOwnProperty("create_conversation_v2_body")) {
                object.create_conversation_v2_body = $root.im_proto.CreateConversationV2RequestBody.toObject(message.create_conversation_v2_body, options);
                if (options.oneofs)
                    object.body = "create_conversation_v2_body";
            }
            if (message.get_stranger_conversation_body != null && message.hasOwnProperty("get_stranger_conversation_body")) {
                object.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListRequestBody.toObject(message.get_stranger_conversation_body, options);
                if (options.oneofs)
                    object.body = "get_stranger_conversation_body";
            }
            if (message.get_conversation_list_body != null && message.hasOwnProperty("get_conversation_list_body")) {
                object.get_conversation_list_body = $root.im_proto.GetUserConversationListRequestBody.toObject(message.get_conversation_list_body, options);
                if (options.oneofs)
                    object.body = "get_conversation_list_body";
            }
            return object;
        };

        /**
         * Converts this RequestBody to JSON.
         * @function toJSON
         * @memberof im_proto.RequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RequestBody
         * @function getTypeUrl
         * @memberof im_proto.RequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.RequestBody";
        };

        return RequestBody;
    })();

    im_proto.SendMessageRequestBody = (function() {

        /**
         * Properties of a SendMessageRequestBody.
         * @memberof im_proto
         * @interface ISendMessageRequestBody
         * @property {string|null} [conversation_id] SendMessageRequestBody conversation_id
         * @property {number|null} [conversation_type] SendMessageRequestBody conversation_type
         * @property {number|Long|null} [conversation_short_id] SendMessageRequestBody conversation_short_id
         * @property {string|null} [content] SendMessageRequestBody content
         * @property {Object.<string,string>|null} [ext] SendMessageRequestBody ext
         * @property {number|null} [message_type] SendMessageRequestBody message_type
         * @property {string|null} [ticket] SendMessageRequestBody ticket
         * @property {string|null} [client_message_id] SendMessageRequestBody client_message_id
         * @property {Array.<number|Long>|null} [mentioned_users] SendMessageRequestBody mentioned_users
         * @property {boolean|null} [ignore_badge_count] SendMessageRequestBody ignore_badge_count
         * @property {im_proto.IReferencedMessageInfo|null} [ref_msg_info] SendMessageRequestBody ref_msg_info
         * @property {Object.<string,string>|null} [client_ext] SendMessageRequestBody client_ext
         * @property {im_proto.IMessageContent|null} [content_pb] SendMessageRequestBody content_pb
         * @property {string|null} [scene] SendMessageRequestBody scene
         */

        /**
         * Constructs a new SendMessageRequestBody.
         * @memberof im_proto
         * @classdesc Represents a SendMessageRequestBody.
         * @implements ISendMessageRequestBody
         * @constructor
         * @param {im_proto.ISendMessageRequestBody=} [properties] Properties to set
         */
        function SendMessageRequestBody(properties) {
            this.ext = {};
            this.mentioned_users = [];
            this.client_ext = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessageRequestBody conversation_id.
         * @member {string} conversation_id
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.conversation_id = "";

        /**
         * SendMessageRequestBody conversation_type.
         * @member {number} conversation_type
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.conversation_type = 0;

        /**
         * SendMessageRequestBody conversation_short_id.
         * @member {number|Long} conversation_short_id
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SendMessageRequestBody content.
         * @member {string} content
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.content = "";

        /**
         * SendMessageRequestBody ext.
         * @member {Object.<string,string>} ext
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.ext = $util.emptyObject;

        /**
         * SendMessageRequestBody message_type.
         * @member {number} message_type
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.message_type = 0;

        /**
         * SendMessageRequestBody ticket.
         * @member {string} ticket
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.ticket = "";

        /**
         * SendMessageRequestBody client_message_id.
         * @member {string} client_message_id
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.client_message_id = "";

        /**
         * SendMessageRequestBody mentioned_users.
         * @member {Array.<number|Long>} mentioned_users
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.mentioned_users = $util.emptyArray;

        /**
         * SendMessageRequestBody ignore_badge_count.
         * @member {boolean} ignore_badge_count
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.ignore_badge_count = false;

        /**
         * SendMessageRequestBody ref_msg_info.
         * @member {im_proto.IReferencedMessageInfo|null|undefined} ref_msg_info
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.ref_msg_info = null;

        /**
         * SendMessageRequestBody client_ext.
         * @member {Object.<string,string>} client_ext
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.client_ext = $util.emptyObject;

        /**
         * SendMessageRequestBody content_pb.
         * @member {im_proto.IMessageContent|null|undefined} content_pb
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.content_pb = null;

        /**
         * SendMessageRequestBody scene.
         * @member {string} scene
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         */
        SendMessageRequestBody.prototype.scene = "";

        /**
         * Creates a new SendMessageRequestBody instance using the specified properties.
         * @function create
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {im_proto.ISendMessageRequestBody=} [properties] Properties to set
         * @returns {im_proto.SendMessageRequestBody} SendMessageRequestBody instance
         */
        SendMessageRequestBody.create = function create(properties) {
            return new SendMessageRequestBody(properties);
        };

        /**
         * Encodes the specified SendMessageRequestBody message. Does not implicitly {@link im_proto.SendMessageRequestBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {im_proto.ISendMessageRequestBody} message SendMessageRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversation_id);
            if (message.conversation_type != null && Object.hasOwnProperty.call(message, "conversation_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.conversation_type);
            if (message.conversation_short_id != null && Object.hasOwnProperty.call(message, "conversation_short_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.conversation_short_id);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                for (var keys = Object.keys(message.ext), i = 0; i < keys.length; ++i)
                    try {
                        writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.ext[keys[i]]).ldelim();
                    } catch (error) {
                        
                    }
            if (message.message_type != null && Object.hasOwnProperty.call(message, "message_type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.message_type);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ticket);
            if (message.client_message_id != null && Object.hasOwnProperty.call(message, "client_message_id"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.client_message_id);
            if (message.mentioned_users != null && message.mentioned_users.length) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork();
                for (var i = 0; i < message.mentioned_users.length; ++i)
                    writer.int64(message.mentioned_users[i]);
                writer.ldelim();
            }
            if (message.ignore_badge_count != null && Object.hasOwnProperty.call(message, "ignore_badge_count"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.ignore_badge_count);
            if (message.ref_msg_info != null && Object.hasOwnProperty.call(message, "ref_msg_info"))
                $root.im_proto.ReferencedMessageInfo.encode(message.ref_msg_info, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.client_ext != null && Object.hasOwnProperty.call(message, "client_ext"))
                for (var keys = Object.keys(message.client_ext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.client_ext[keys[i]]).ldelim();
            if (message.content_pb != null && Object.hasOwnProperty.call(message, "content_pb"))
                $root.im_proto.MessageContent.encode(message.content_pb, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.scene != null && Object.hasOwnProperty.call(message, "scene"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.scene);
            return writer;
        };

        /**
         * Encodes the specified SendMessageRequestBody message, length delimited. Does not implicitly {@link im_proto.SendMessageRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {im_proto.ISendMessageRequestBody} message SendMessageRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.SendMessageRequestBody} SendMessageRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageRequestBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.SendMessageRequestBody(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_id = reader.string();
                        break;
                    }
                case 2: {
                        message.conversation_type = reader.int32();
                        break;
                    }
                case 3: {
                        message.conversation_short_id = reader.int64();
                        break;
                    }
                case 4: {
                        message.content = reader.string();
                        break;
                    }
                case 5: {
                        if (message.ext === $util.emptyObject)
                            message.ext = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ext[key] = value;
                        break;
                    }
                case 6: {
                        message.message_type = reader.int32();
                        break;
                    }
                case 7: {
                        message.ticket = reader.string();
                        break;
                    }
                case 8: {
                        message.client_message_id = reader.string();
                        break;
                    }
                case 9: {
                        if (!(message.mentioned_users && message.mentioned_users.length))
                            message.mentioned_users = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.mentioned_users.push(reader.int64());
                        } else
                            message.mentioned_users.push(reader.int64());
                        break;
                    }
                case 10: {
                        message.ignore_badge_count = reader.bool();
                        break;
                    }
                case 11: {
                        message.ref_msg_info = $root.im_proto.ReferencedMessageInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        if (message.client_ext === $util.emptyObject)
                            message.client_ext = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.client_ext[key] = value;
                        break;
                    }
                case 13: {
                        message.content_pb = $root.im_proto.MessageContent.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.scene = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMessageRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.SendMessageRequestBody} SendMessageRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessageRequestBody message.
         * @function verify
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessageRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                if (!$util.isString(message.conversation_id))
                    return "conversation_id: string expected";
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                if (!$util.isInteger(message.conversation_type))
                    return "conversation_type: integer expected";
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (!$util.isInteger(message.conversation_short_id) && !(message.conversation_short_id && $util.isInteger(message.conversation_short_id.low) && $util.isInteger(message.conversation_short_id.high)))
                    return "conversation_short_id: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.ext != null && message.hasOwnProperty("ext")) {
                if (!$util.isObject(message.ext))
                    return "ext: object expected";
                var key = Object.keys(message.ext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.ext[key[i]]))
                        return "ext: string{k:string} expected";
            }
            if (message.message_type != null && message.hasOwnProperty("message_type"))
                if (!$util.isInteger(message.message_type))
                    return "message_type: integer expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            if (message.client_message_id != null && message.hasOwnProperty("client_message_id"))
                if (!$util.isString(message.client_message_id))
                    return "client_message_id: string expected";
            if (message.mentioned_users != null && message.hasOwnProperty("mentioned_users")) {
                if (!Array.isArray(message.mentioned_users))
                    return "mentioned_users: array expected";
                for (var i = 0; i < message.mentioned_users.length; ++i)
                    if (!$util.isInteger(message.mentioned_users[i]) && !(message.mentioned_users[i] && $util.isInteger(message.mentioned_users[i].low) && $util.isInteger(message.mentioned_users[i].high)))
                        return "mentioned_users: integer|Long[] expected";
            }
            if (message.ignore_badge_count != null && message.hasOwnProperty("ignore_badge_count"))
                if (typeof message.ignore_badge_count !== "boolean")
                    return "ignore_badge_count: boolean expected";
            if (message.ref_msg_info != null && message.hasOwnProperty("ref_msg_info")) {
                var error = $root.im_proto.ReferencedMessageInfo.verify(message.ref_msg_info);
                if (error)
                    return "ref_msg_info." + error;
            }
            if (message.client_ext != null && message.hasOwnProperty("client_ext")) {
                if (!$util.isObject(message.client_ext))
                    return "client_ext: object expected";
                var key = Object.keys(message.client_ext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.client_ext[key[i]]))
                        return "client_ext: string{k:string} expected";
            }
            if (message.content_pb != null && message.hasOwnProperty("content_pb")) {
                var error = $root.im_proto.MessageContent.verify(message.content_pb);
                if (error)
                    return "content_pb." + error;
            }
            if (message.scene != null && message.hasOwnProperty("scene"))
                if (!$util.isString(message.scene))
                    return "scene: string expected";
            return null;
        };

        /**
         * Creates a SendMessageRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.SendMessageRequestBody} SendMessageRequestBody
         */
        SendMessageRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.SendMessageRequestBody)
                return object;
            var message = new $root.im_proto.SendMessageRequestBody();
            if (object.conversation_id != null)
                message.conversation_id = String(object.conversation_id);
            if (object.conversation_type != null)
                message.conversation_type = object.conversation_type | 0;
            if (object.conversation_short_id != null)
                if ($util.Long)
                    (message.conversation_short_id = $util.Long.fromValue(object.conversation_short_id)).unsigned = false;
                else if (typeof object.conversation_short_id === "string")
                    message.conversation_short_id = parseInt(object.conversation_short_id, 10);
                else if (typeof object.conversation_short_id === "number")
                    message.conversation_short_id = object.conversation_short_id;
                else if (typeof object.conversation_short_id === "object")
                    message.conversation_short_id = new $util.LongBits(object.conversation_short_id.low >>> 0, object.conversation_short_id.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            if (object.ext) {
                if (typeof object.ext !== "object")
                    throw TypeError(".im_proto.SendMessageRequestBody.ext: object expected");
                message.ext = {};
                for (var keys = Object.keys(object.ext), i = 0; i < keys.length; ++i)
                    message.ext[keys[i]] = String(object.ext[keys[i]]);
            }
            if (object.message_type != null)
                message.message_type = object.message_type | 0;
            if (object.ticket != null)
                message.ticket = String(object.ticket);
            if (object.client_message_id != null)
                message.client_message_id = String(object.client_message_id);
            if (object.mentioned_users) {
                if (!Array.isArray(object.mentioned_users))
                    throw TypeError(".im_proto.SendMessageRequestBody.mentioned_users: array expected");
                message.mentioned_users = [];
                for (var i = 0; i < object.mentioned_users.length; ++i)
                    if ($util.Long)
                        (message.mentioned_users[i] = $util.Long.fromValue(object.mentioned_users[i])).unsigned = false;
                    else if (typeof object.mentioned_users[i] === "string")
                        message.mentioned_users[i] = parseInt(object.mentioned_users[i], 10);
                    else if (typeof object.mentioned_users[i] === "number")
                        message.mentioned_users[i] = object.mentioned_users[i];
                    else if (typeof object.mentioned_users[i] === "object")
                        message.mentioned_users[i] = new $util.LongBits(object.mentioned_users[i].low >>> 0, object.mentioned_users[i].high >>> 0).toNumber();
            }
            if (object.ignore_badge_count != null)
                message.ignore_badge_count = Boolean(object.ignore_badge_count);
            if (object.ref_msg_info != null) {
                if (typeof object.ref_msg_info !== "object")
                    throw TypeError(".im_proto.SendMessageRequestBody.ref_msg_info: object expected");
                message.ref_msg_info = $root.im_proto.ReferencedMessageInfo.fromObject(object.ref_msg_info);
            }
            if (object.client_ext) {
                if (typeof object.client_ext !== "object")
                    throw TypeError(".im_proto.SendMessageRequestBody.client_ext: object expected");
                message.client_ext = {};
                for (var keys = Object.keys(object.client_ext), i = 0; i < keys.length; ++i)
                    message.client_ext[keys[i]] = String(object.client_ext[keys[i]]);
            }
            if (object.content_pb != null) {
                if (typeof object.content_pb !== "object")
                    throw TypeError(".im_proto.SendMessageRequestBody.content_pb: object expected");
                message.content_pb = $root.im_proto.MessageContent.fromObject(object.content_pb);
            }
            if (object.scene != null)
                message.scene = String(object.scene);
            return message;
        };

        /**
         * Creates a plain object from a SendMessageRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {im_proto.SendMessageRequestBody} message SendMessageRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessageRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mentioned_users = [];
            if (options.objects || options.defaults) {
                object.ext = {};
                object.client_ext = {};
            }
            if (options.defaults) {
                object.conversation_id = "";
                object.conversation_type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.conversation_short_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.conversation_short_id = options.longs === String ? "0" : 0;
                object.content = "";
                object.message_type = 0;
                object.ticket = "";
                object.client_message_id = "";
                object.ignore_badge_count = false;
                object.ref_msg_info = null;
                object.content_pb = null;
                object.scene = "";
            }
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                object.conversation_id = message.conversation_id;
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                object.conversation_type = message.conversation_type;
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (typeof message.conversation_short_id === "number")
                    object.conversation_short_id = options.longs === String ? String(message.conversation_short_id) : message.conversation_short_id;
                else
                    object.conversation_short_id = options.longs === String ? $util.Long.prototype.toString.call(message.conversation_short_id) : options.longs === Number ? new $util.LongBits(message.conversation_short_id.low >>> 0, message.conversation_short_id.high >>> 0).toNumber() : message.conversation_short_id;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            var keys2;
            if (message.ext && (keys2 = Object.keys(message.ext)).length) {
                object.ext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.ext[keys2[j]] = message.ext[keys2[j]];
            }
            if (message.message_type != null && message.hasOwnProperty("message_type"))
                object.message_type = message.message_type;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
            if (message.client_message_id != null && message.hasOwnProperty("client_message_id"))
                object.client_message_id = message.client_message_id;
            if (message.mentioned_users && message.mentioned_users.length) {
                object.mentioned_users = [];
                for (var j = 0; j < message.mentioned_users.length; ++j)
                    if (typeof message.mentioned_users[j] === "number")
                        object.mentioned_users[j] = options.longs === String ? String(message.mentioned_users[j]) : message.mentioned_users[j];
                    else
                        object.mentioned_users[j] = options.longs === String ? $util.Long.prototype.toString.call(message.mentioned_users[j]) : options.longs === Number ? new $util.LongBits(message.mentioned_users[j].low >>> 0, message.mentioned_users[j].high >>> 0).toNumber() : message.mentioned_users[j];
            }
            if (message.ignore_badge_count != null && message.hasOwnProperty("ignore_badge_count"))
                object.ignore_badge_count = message.ignore_badge_count;
            if (message.ref_msg_info != null && message.hasOwnProperty("ref_msg_info"))
                object.ref_msg_info = $root.im_proto.ReferencedMessageInfo.toObject(message.ref_msg_info, options);
            if (message.client_ext && (keys2 = Object.keys(message.client_ext)).length) {
                object.client_ext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.client_ext[keys2[j]] = message.client_ext[keys2[j]];
            }
            if (message.content_pb != null && message.hasOwnProperty("content_pb"))
                object.content_pb = $root.im_proto.MessageContent.toObject(message.content_pb, options);
            if (message.scene != null && message.hasOwnProperty("scene"))
                object.scene = message.scene;
            return object;
        };

        /**
         * Converts this SendMessageRequestBody to JSON.
         * @function toJSON
         * @memberof im_proto.SendMessageRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendMessageRequestBody
         * @function getTypeUrl
         * @memberof im_proto.SendMessageRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendMessageRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.SendMessageRequestBody";
        };

        return SendMessageRequestBody;
    })();

    im_proto.CommonMsgCard = (function() {

        /**
         * Properties of a CommonMsgCard.
         * @memberof im_proto
         * @interface ICommonMsgCard
         * @property {Object.<string,im_proto.IBaseText>|null} [text_map] CommonMsgCard text_map
         * @property {Object.<string,im_proto.IBaseImage>|null} [image_map] CommonMsgCard image_map
         * @property {Object.<string,im_proto.ILinkInfo>|null} [link_map] CommonMsgCard link_map
         * @property {Object.<string,im_proto.IButton>|null} [button_map] CommonMsgCard button_map
         * @property {Object.<string,im_proto.IBaseVideo>|null} [video_map] CommonMsgCard video_map
         * @property {Object.<string,im_proto.IBaseUser>|null} [user_map] CommonMsgCard user_map
         * @property {im_proto.IFallbackInfo|null} [fallback_info] CommonMsgCard fallback_info
         * @property {im_proto.IPreviewHint|null} [preview_hint] CommonMsgCard preview_hint
         * @property {Object.<string,im_proto.IBaseImage>|null} [business_image_map] CommonMsgCard business_image_map
         * @property {Object.<string,im_proto.IBaseVideo>|null} [business_video_map] CommonMsgCard business_video_map
         * @property {Object.<string,im_proto.IBaseUser>|null} [business_user_map] CommonMsgCard business_user_map
         * @property {Uint8Array|null} [extra_content] CommonMsgCard extra_content
         * @property {im_proto.IBaseReq|null} [req_base] CommonMsgCard req_base
         * @property {im_proto.IBaseResp|null} [resp_base] CommonMsgCard resp_base
         */

        /**
         * Constructs a new CommonMsgCard.
         * @memberof im_proto
         * @classdesc Represents a CommonMsgCard.
         * @implements ICommonMsgCard
         * @constructor
         * @param {im_proto.ICommonMsgCard=} [properties] Properties to set
         */
        function CommonMsgCard(properties) {
            this.text_map = {};
            this.image_map = {};
            this.link_map = {};
            this.button_map = {};
            this.video_map = {};
            this.user_map = {};
            this.business_image_map = {};
            this.business_video_map = {};
            this.business_user_map = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonMsgCard text_map.
         * @member {Object.<string,im_proto.IBaseText>} text_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.text_map = $util.emptyObject;

        /**
         * CommonMsgCard image_map.
         * @member {Object.<string,im_proto.IBaseImage>} image_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.image_map = $util.emptyObject;

        /**
         * CommonMsgCard link_map.
         * @member {Object.<string,im_proto.ILinkInfo>} link_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.link_map = $util.emptyObject;

        /**
         * CommonMsgCard button_map.
         * @member {Object.<string,im_proto.IButton>} button_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.button_map = $util.emptyObject;

        /**
         * CommonMsgCard video_map.
         * @member {Object.<string,im_proto.IBaseVideo>} video_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.video_map = $util.emptyObject;

        /**
         * CommonMsgCard user_map.
         * @member {Object.<string,im_proto.IBaseUser>} user_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.user_map = $util.emptyObject;

        /**
         * CommonMsgCard fallback_info.
         * @member {im_proto.IFallbackInfo|null|undefined} fallback_info
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.fallback_info = null;

        /**
         * CommonMsgCard preview_hint.
         * @member {im_proto.IPreviewHint|null|undefined} preview_hint
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.preview_hint = null;

        /**
         * CommonMsgCard business_image_map.
         * @member {Object.<string,im_proto.IBaseImage>} business_image_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.business_image_map = $util.emptyObject;

        /**
         * CommonMsgCard business_video_map.
         * @member {Object.<string,im_proto.IBaseVideo>} business_video_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.business_video_map = $util.emptyObject;

        /**
         * CommonMsgCard business_user_map.
         * @member {Object.<string,im_proto.IBaseUser>} business_user_map
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.business_user_map = $util.emptyObject;

        /**
         * CommonMsgCard extra_content.
         * @member {Uint8Array} extra_content
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.extra_content = $util.newBuffer([]);

        /**
         * CommonMsgCard req_base.
         * @member {im_proto.IBaseReq|null|undefined} req_base
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.req_base = null;

        /**
         * CommonMsgCard resp_base.
         * @member {im_proto.IBaseResp|null|undefined} resp_base
         * @memberof im_proto.CommonMsgCard
         * @instance
         */
        CommonMsgCard.prototype.resp_base = null;

        /**
         * Creates a new CommonMsgCard instance using the specified properties.
         * @function create
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {im_proto.ICommonMsgCard=} [properties] Properties to set
         * @returns {im_proto.CommonMsgCard} CommonMsgCard instance
         */
        CommonMsgCard.create = function create(properties) {
            return new CommonMsgCard(properties);
        };

        /**
         * Encodes the specified CommonMsgCard message. Does not implicitly {@link im_proto.CommonMsgCard.verify|verify} messages.
         * @function encode
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {im_proto.ICommonMsgCard} message CommonMsgCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonMsgCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text_map != null && Object.hasOwnProperty.call(message, "text_map"))
                for (var keys = Object.keys(message.text_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.BaseText.encode(message.text_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.image_map != null && Object.hasOwnProperty.call(message, "image_map"))
                for (var keys = Object.keys(message.image_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.BaseImage.encode(message.image_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.link_map != null && Object.hasOwnProperty.call(message, "link_map"))
                for (var keys = Object.keys(message.link_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.LinkInfo.encode(message.link_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.button_map != null && Object.hasOwnProperty.call(message, "button_map"))
                for (var keys = Object.keys(message.button_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.Button.encode(message.button_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.video_map != null && Object.hasOwnProperty.call(message, "video_map"))
                for (var keys = Object.keys(message.video_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.BaseVideo.encode(message.video_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.user_map != null && Object.hasOwnProperty.call(message, "user_map"))
                for (var keys = Object.keys(message.user_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.BaseUser.encode(message.user_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.fallback_info != null && Object.hasOwnProperty.call(message, "fallback_info"))
                $root.im_proto.FallbackInfo.encode(message.fallback_info, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.preview_hint != null && Object.hasOwnProperty.call(message, "preview_hint"))
                $root.im_proto.PreviewHint.encode(message.preview_hint, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.business_image_map != null && Object.hasOwnProperty.call(message, "business_image_map"))
                for (var keys = Object.keys(message.business_image_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 100, wireType 2 =*/802).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.BaseImage.encode(message.business_image_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.business_video_map != null && Object.hasOwnProperty.call(message, "business_video_map"))
                for (var keys = Object.keys(message.business_video_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 101, wireType 2 =*/810).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.BaseVideo.encode(message.business_video_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.business_user_map != null && Object.hasOwnProperty.call(message, "business_user_map"))
                for (var keys = Object.keys(message.business_user_map), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 102, wireType 2 =*/818).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.im_proto.BaseUser.encode(message.business_user_map[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.extra_content != null && Object.hasOwnProperty.call(message, "extra_content"))
                writer.uint32(/* id 200, wireType 2 =*/1602).bytes(message.extra_content);
            if (message.req_base != null && Object.hasOwnProperty.call(message, "req_base"))
                $root.im_proto.BaseReq.encode(message.req_base, writer.uint32(/* id 201, wireType 2 =*/1610).fork()).ldelim();
            if (message.resp_base != null && Object.hasOwnProperty.call(message, "resp_base"))
                $root.im_proto.BaseResp.encode(message.resp_base, writer.uint32(/* id 202, wireType 2 =*/1618).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CommonMsgCard message, length delimited. Does not implicitly {@link im_proto.CommonMsgCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {im_proto.ICommonMsgCard} message CommonMsgCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonMsgCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonMsgCard message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.CommonMsgCard} CommonMsgCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonMsgCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.CommonMsgCard(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.text_map === $util.emptyObject)
                            message.text_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.BaseText.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.text_map[key] = value;
                        break;
                    }
                case 2: {
                        if (message.image_map === $util.emptyObject)
                            message.image_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.BaseImage.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.image_map[key] = value;
                        break;
                    }
                case 3: {
                        if (message.link_map === $util.emptyObject)
                            message.link_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.LinkInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.link_map[key] = value;
                        break;
                    }
                case 4: {
                        if (message.button_map === $util.emptyObject)
                            message.button_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.Button.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.button_map[key] = value;
                        break;
                    }
                case 5: {
                        if (message.video_map === $util.emptyObject)
                            message.video_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.BaseVideo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.video_map[key] = value;
                        break;
                    }
                case 6: {
                        if (message.user_map === $util.emptyObject)
                            message.user_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.BaseUser.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.user_map[key] = value;
                        break;
                    }
                case 7: {
                        message.fallback_info = $root.im_proto.FallbackInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.preview_hint = $root.im_proto.PreviewHint.decode(reader, reader.uint32());
                        break;
                    }
                case 100: {
                        if (message.business_image_map === $util.emptyObject)
                            message.business_image_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.BaseImage.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.business_image_map[key] = value;
                        break;
                    }
                case 101: {
                        if (message.business_video_map === $util.emptyObject)
                            message.business_video_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.BaseVideo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.business_video_map[key] = value;
                        break;
                    }
                case 102: {
                        if (message.business_user_map === $util.emptyObject)
                            message.business_user_map = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = $root.im_proto.BaseUser.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.business_user_map[key] = value;
                        break;
                    }
                case 200: {
                        message.extra_content = reader.bytes();
                        break;
                    }
                case 201: {
                        message.req_base = $root.im_proto.BaseReq.decode(reader, reader.uint32());
                        break;
                    }
                case 202: {
                        message.resp_base = $root.im_proto.BaseResp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonMsgCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.CommonMsgCard} CommonMsgCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonMsgCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonMsgCard message.
         * @function verify
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonMsgCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text_map != null && message.hasOwnProperty("text_map")) {
                if (!$util.isObject(message.text_map))
                    return "text_map: object expected";
                var key = Object.keys(message.text_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.BaseText.verify(message.text_map[key[i]]);
                    if (error)
                        return "text_map." + error;
                }
            }
            if (message.image_map != null && message.hasOwnProperty("image_map")) {
                if (!$util.isObject(message.image_map))
                    return "image_map: object expected";
                var key = Object.keys(message.image_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.BaseImage.verify(message.image_map[key[i]]);
                    if (error)
                        return "image_map." + error;
                }
            }
            if (message.link_map != null && message.hasOwnProperty("link_map")) {
                if (!$util.isObject(message.link_map))
                    return "link_map: object expected";
                var key = Object.keys(message.link_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.LinkInfo.verify(message.link_map[key[i]]);
                    if (error)
                        return "link_map." + error;
                }
            }
            if (message.button_map != null && message.hasOwnProperty("button_map")) {
                if (!$util.isObject(message.button_map))
                    return "button_map: object expected";
                var key = Object.keys(message.button_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.Button.verify(message.button_map[key[i]]);
                    if (error)
                        return "button_map." + error;
                }
            }
            if (message.video_map != null && message.hasOwnProperty("video_map")) {
                if (!$util.isObject(message.video_map))
                    return "video_map: object expected";
                var key = Object.keys(message.video_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.BaseVideo.verify(message.video_map[key[i]]);
                    if (error)
                        return "video_map." + error;
                }
            }
            if (message.user_map != null && message.hasOwnProperty("user_map")) {
                if (!$util.isObject(message.user_map))
                    return "user_map: object expected";
                var key = Object.keys(message.user_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.BaseUser.verify(message.user_map[key[i]]);
                    if (error)
                        return "user_map." + error;
                }
            }
            if (message.fallback_info != null && message.hasOwnProperty("fallback_info")) {
                var error = $root.im_proto.FallbackInfo.verify(message.fallback_info);
                if (error)
                    return "fallback_info." + error;
            }
            if (message.preview_hint != null && message.hasOwnProperty("preview_hint")) {
                var error = $root.im_proto.PreviewHint.verify(message.preview_hint);
                if (error)
                    return "preview_hint." + error;
            }
            if (message.business_image_map != null && message.hasOwnProperty("business_image_map")) {
                if (!$util.isObject(message.business_image_map))
                    return "business_image_map: object expected";
                var key = Object.keys(message.business_image_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.BaseImage.verify(message.business_image_map[key[i]]);
                    if (error)
                        return "business_image_map." + error;
                }
            }
            if (message.business_video_map != null && message.hasOwnProperty("business_video_map")) {
                if (!$util.isObject(message.business_video_map))
                    return "business_video_map: object expected";
                var key = Object.keys(message.business_video_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.BaseVideo.verify(message.business_video_map[key[i]]);
                    if (error)
                        return "business_video_map." + error;
                }
            }
            if (message.business_user_map != null && message.hasOwnProperty("business_user_map")) {
                if (!$util.isObject(message.business_user_map))
                    return "business_user_map: object expected";
                var key = Object.keys(message.business_user_map);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.im_proto.BaseUser.verify(message.business_user_map[key[i]]);
                    if (error)
                        return "business_user_map." + error;
                }
            }
            if (message.extra_content != null && message.hasOwnProperty("extra_content"))
                if (!(message.extra_content && typeof message.extra_content.length === "number" || $util.isString(message.extra_content)))
                    return "extra_content: buffer expected";
            if (message.req_base != null && message.hasOwnProperty("req_base")) {
                var error = $root.im_proto.BaseReq.verify(message.req_base);
                if (error)
                    return "req_base." + error;
            }
            if (message.resp_base != null && message.hasOwnProperty("resp_base")) {
                var error = $root.im_proto.BaseResp.verify(message.resp_base);
                if (error)
                    return "resp_base." + error;
            }
            return null;
        };

        /**
         * Creates a CommonMsgCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.CommonMsgCard} CommonMsgCard
         */
        CommonMsgCard.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.CommonMsgCard)
                return object;
            var message = new $root.im_proto.CommonMsgCard();
            if (object.text_map) {
                if (typeof object.text_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.text_map: object expected");
                message.text_map = {};
                for (var keys = Object.keys(object.text_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.text_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.text_map: object expected");
                    message.text_map[keys[i]] = $root.im_proto.BaseText.fromObject(object.text_map[keys[i]]);
                }
            }
            if (object.image_map) {
                if (typeof object.image_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.image_map: object expected");
                message.image_map = {};
                for (var keys = Object.keys(object.image_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.image_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.image_map: object expected");
                    message.image_map[keys[i]] = $root.im_proto.BaseImage.fromObject(object.image_map[keys[i]]);
                }
            }
            if (object.link_map) {
                if (typeof object.link_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.link_map: object expected");
                message.link_map = {};
                for (var keys = Object.keys(object.link_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.link_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.link_map: object expected");
                    message.link_map[keys[i]] = $root.im_proto.LinkInfo.fromObject(object.link_map[keys[i]]);
                }
            }
            if (object.button_map) {
                if (typeof object.button_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.button_map: object expected");
                message.button_map = {};
                for (var keys = Object.keys(object.button_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.button_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.button_map: object expected");
                    message.button_map[keys[i]] = $root.im_proto.Button.fromObject(object.button_map[keys[i]]);
                }
            }
            if (object.video_map) {
                if (typeof object.video_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.video_map: object expected");
                message.video_map = {};
                for (var keys = Object.keys(object.video_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.video_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.video_map: object expected");
                    message.video_map[keys[i]] = $root.im_proto.BaseVideo.fromObject(object.video_map[keys[i]]);
                }
            }
            if (object.user_map) {
                if (typeof object.user_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.user_map: object expected");
                message.user_map = {};
                for (var keys = Object.keys(object.user_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.user_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.user_map: object expected");
                    message.user_map[keys[i]] = $root.im_proto.BaseUser.fromObject(object.user_map[keys[i]]);
                }
            }
            if (object.fallback_info != null) {
                if (typeof object.fallback_info !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.fallback_info: object expected");
                message.fallback_info = $root.im_proto.FallbackInfo.fromObject(object.fallback_info);
            }
            if (object.preview_hint != null) {
                if (typeof object.preview_hint !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.preview_hint: object expected");
                message.preview_hint = $root.im_proto.PreviewHint.fromObject(object.preview_hint);
            }
            if (object.business_image_map) {
                if (typeof object.business_image_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.business_image_map: object expected");
                message.business_image_map = {};
                for (var keys = Object.keys(object.business_image_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.business_image_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.business_image_map: object expected");
                    message.business_image_map[keys[i]] = $root.im_proto.BaseImage.fromObject(object.business_image_map[keys[i]]);
                }
            }
            if (object.business_video_map) {
                if (typeof object.business_video_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.business_video_map: object expected");
                message.business_video_map = {};
                for (var keys = Object.keys(object.business_video_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.business_video_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.business_video_map: object expected");
                    message.business_video_map[keys[i]] = $root.im_proto.BaseVideo.fromObject(object.business_video_map[keys[i]]);
                }
            }
            if (object.business_user_map) {
                if (typeof object.business_user_map !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.business_user_map: object expected");
                message.business_user_map = {};
                for (var keys = Object.keys(object.business_user_map), i = 0; i < keys.length; ++i) {
                    if (typeof object.business_user_map[keys[i]] !== "object")
                        throw TypeError(".im_proto.CommonMsgCard.business_user_map: object expected");
                    message.business_user_map[keys[i]] = $root.im_proto.BaseUser.fromObject(object.business_user_map[keys[i]]);
                }
            }
            if (object.extra_content != null)
                if (typeof object.extra_content === "string")
                    $util.base64.decode(object.extra_content, message.extra_content = $util.newBuffer($util.base64.length(object.extra_content)), 0);
                else if (object.extra_content.length >= 0)
                    message.extra_content = object.extra_content;
            if (object.req_base != null) {
                if (typeof object.req_base !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.req_base: object expected");
                message.req_base = $root.im_proto.BaseReq.fromObject(object.req_base);
            }
            if (object.resp_base != null) {
                if (typeof object.resp_base !== "object")
                    throw TypeError(".im_proto.CommonMsgCard.resp_base: object expected");
                message.resp_base = $root.im_proto.BaseResp.fromObject(object.resp_base);
            }
            return message;
        };

        /**
         * Creates a plain object from a CommonMsgCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {im_proto.CommonMsgCard} message CommonMsgCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonMsgCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.text_map = {};
                object.image_map = {};
                object.link_map = {};
                object.button_map = {};
                object.video_map = {};
                object.user_map = {};
                object.business_image_map = {};
                object.business_video_map = {};
                object.business_user_map = {};
            }
            if (options.defaults) {
                object.fallback_info = null;
                object.preview_hint = null;
                if (options.bytes === String)
                    object.extra_content = "";
                else {
                    object.extra_content = [];
                    if (options.bytes !== Array)
                        object.extra_content = $util.newBuffer(object.extra_content);
                }
                object.req_base = null;
                object.resp_base = null;
            }
            var keys2;
            if (message.text_map && (keys2 = Object.keys(message.text_map)).length) {
                object.text_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.text_map[keys2[j]] = $root.im_proto.BaseText.toObject(message.text_map[keys2[j]], options);
            }
            if (message.image_map && (keys2 = Object.keys(message.image_map)).length) {
                object.image_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.image_map[keys2[j]] = $root.im_proto.BaseImage.toObject(message.image_map[keys2[j]], options);
            }
            if (message.link_map && (keys2 = Object.keys(message.link_map)).length) {
                object.link_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.link_map[keys2[j]] = $root.im_proto.LinkInfo.toObject(message.link_map[keys2[j]], options);
            }
            if (message.button_map && (keys2 = Object.keys(message.button_map)).length) {
                object.button_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.button_map[keys2[j]] = $root.im_proto.Button.toObject(message.button_map[keys2[j]], options);
            }
            if (message.video_map && (keys2 = Object.keys(message.video_map)).length) {
                object.video_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.video_map[keys2[j]] = $root.im_proto.BaseVideo.toObject(message.video_map[keys2[j]], options);
            }
            if (message.user_map && (keys2 = Object.keys(message.user_map)).length) {
                object.user_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.user_map[keys2[j]] = $root.im_proto.BaseUser.toObject(message.user_map[keys2[j]], options);
            }
            if (message.fallback_info != null && message.hasOwnProperty("fallback_info"))
                object.fallback_info = $root.im_proto.FallbackInfo.toObject(message.fallback_info, options);
            if (message.preview_hint != null && message.hasOwnProperty("preview_hint"))
                object.preview_hint = $root.im_proto.PreviewHint.toObject(message.preview_hint, options);
            if (message.business_image_map && (keys2 = Object.keys(message.business_image_map)).length) {
                object.business_image_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.business_image_map[keys2[j]] = $root.im_proto.BaseImage.toObject(message.business_image_map[keys2[j]], options);
            }
            if (message.business_video_map && (keys2 = Object.keys(message.business_video_map)).length) {
                object.business_video_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.business_video_map[keys2[j]] = $root.im_proto.BaseVideo.toObject(message.business_video_map[keys2[j]], options);
            }
            if (message.business_user_map && (keys2 = Object.keys(message.business_user_map)).length) {
                object.business_user_map = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.business_user_map[keys2[j]] = $root.im_proto.BaseUser.toObject(message.business_user_map[keys2[j]], options);
            }
            if (message.extra_content != null && message.hasOwnProperty("extra_content"))
                object.extra_content = options.bytes === String ? $util.base64.encode(message.extra_content, 0, message.extra_content.length) : options.bytes === Array ? Array.prototype.slice.call(message.extra_content) : message.extra_content;
            if (message.req_base != null && message.hasOwnProperty("req_base"))
                object.req_base = $root.im_proto.BaseReq.toObject(message.req_base, options);
            if (message.resp_base != null && message.hasOwnProperty("resp_base"))
                object.resp_base = $root.im_proto.BaseResp.toObject(message.resp_base, options);
            return object;
        };

        /**
         * Converts this CommonMsgCard to JSON.
         * @function toJSON
         * @memberof im_proto.CommonMsgCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonMsgCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CommonMsgCard
         * @function getTypeUrl
         * @memberof im_proto.CommonMsgCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CommonMsgCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.CommonMsgCard";
        };

        return CommonMsgCard;
    })();

    im_proto.MessageContent = (function() {

        /**
         * Properties of a MessageContent.
         * @memberof im_proto
         * @interface IMessageContent
         * @property {im_proto.IImageCard|null} [image_card] MessageContent image_card
         * @property {im_proto.IPictureCard|null} [picture_card] MessageContent picture_card
         * @property {im_proto.IVideoCard|null} [video_card] MessageContent video_card
         * @property {im_proto.IInfoCard|null} [info_card] MessageContent info_card
         * @property {im_proto.IStickerCard|null} [sticker_card] MessageContent sticker_card
         * @property {im_proto.ICommonMsgCard|null} [common_msg_card] MessageContent common_msg_card
         * @property {im_proto.IDynamicCard|null} [dynamic_card] MessageContent dynamic_card
         */

        /**
         * Constructs a new MessageContent.
         * @memberof im_proto
         * @classdesc Represents a MessageContent.
         * @implements IMessageContent
         * @constructor
         * @param {im_proto.IMessageContent=} [properties] Properties to set
         */
        function MessageContent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageContent image_card.
         * @member {im_proto.IImageCard|null|undefined} image_card
         * @memberof im_proto.MessageContent
         * @instance
         */
        MessageContent.prototype.image_card = null;

        /**
         * MessageContent picture_card.
         * @member {im_proto.IPictureCard|null|undefined} picture_card
         * @memberof im_proto.MessageContent
         * @instance
         */
        MessageContent.prototype.picture_card = null;

        /**
         * MessageContent video_card.
         * @member {im_proto.IVideoCard|null|undefined} video_card
         * @memberof im_proto.MessageContent
         * @instance
         */
        MessageContent.prototype.video_card = null;

        /**
         * MessageContent info_card.
         * @member {im_proto.IInfoCard|null|undefined} info_card
         * @memberof im_proto.MessageContent
         * @instance
         */
        MessageContent.prototype.info_card = null;

        /**
         * MessageContent sticker_card.
         * @member {im_proto.IStickerCard|null|undefined} sticker_card
         * @memberof im_proto.MessageContent
         * @instance
         */
        MessageContent.prototype.sticker_card = null;

        /**
         * MessageContent common_msg_card.
         * @member {im_proto.ICommonMsgCard|null|undefined} common_msg_card
         * @memberof im_proto.MessageContent
         * @instance
         */
        MessageContent.prototype.common_msg_card = null;

        /**
         * MessageContent dynamic_card.
         * @member {im_proto.IDynamicCard|null|undefined} dynamic_card
         * @memberof im_proto.MessageContent
         * @instance
         */
        MessageContent.prototype.dynamic_card = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * MessageContent content.
         * @member {"image_card"|"picture_card"|"video_card"|"info_card"|"sticker_card"|"common_msg_card"|"dynamic_card"|undefined} content
         * @memberof im_proto.MessageContent
         * @instance
         */
        Object.defineProperty(MessageContent.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["image_card", "picture_card", "video_card", "info_card", "sticker_card", "common_msg_card", "dynamic_card"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MessageContent instance using the specified properties.
         * @function create
         * @memberof im_proto.MessageContent
         * @static
         * @param {im_proto.IMessageContent=} [properties] Properties to set
         * @returns {im_proto.MessageContent} MessageContent instance
         */
        MessageContent.create = function create(properties) {
            return new MessageContent(properties);
        };

        /**
         * Encodes the specified MessageContent message. Does not implicitly {@link im_proto.MessageContent.verify|verify} messages.
         * @function encode
         * @memberof im_proto.MessageContent
         * @static
         * @param {im_proto.IMessageContent} message MessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.image_card != null && Object.hasOwnProperty.call(message, "image_card"))
                $root.im_proto.ImageCard.encode(message.image_card, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.picture_card != null && Object.hasOwnProperty.call(message, "picture_card"))
                $root.im_proto.PictureCard.encode(message.picture_card, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.video_card != null && Object.hasOwnProperty.call(message, "video_card"))
                $root.im_proto.VideoCard.encode(message.video_card, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.info_card != null && Object.hasOwnProperty.call(message, "info_card"))
                $root.im_proto.InfoCard.encode(message.info_card, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.sticker_card != null && Object.hasOwnProperty.call(message, "sticker_card"))
                $root.im_proto.StickerCard.encode(message.sticker_card, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.common_msg_card != null && Object.hasOwnProperty.call(message, "common_msg_card"))
                $root.im_proto.CommonMsgCard.encode(message.common_msg_card, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.dynamic_card != null && Object.hasOwnProperty.call(message, "dynamic_card"))
                $root.im_proto.DynamicCard.encode(message.dynamic_card, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessageContent message, length delimited. Does not implicitly {@link im_proto.MessageContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.MessageContent
         * @static
         * @param {im_proto.IMessageContent} message MessageContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageContent message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.MessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.MessageContent} MessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.MessageContent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.image_card = $root.im_proto.ImageCard.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.picture_card = $root.im_proto.PictureCard.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.video_card = $root.im_proto.VideoCard.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.info_card = $root.im_proto.InfoCard.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.sticker_card = $root.im_proto.StickerCard.decode(reader, reader.uint32());
                        break;
                    }
                case 100: {
                        message.common_msg_card = $root.im_proto.CommonMsgCard.decode(reader, reader.uint32());
                        break;
                    }
                case 101: {
                        message.dynamic_card = $root.im_proto.DynamicCard.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.MessageContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.MessageContent} MessageContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageContent message.
         * @function verify
         * @memberof im_proto.MessageContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.image_card != null && message.hasOwnProperty("image_card")) {
                properties.content = 1;
                {
                    var error = $root.im_proto.ImageCard.verify(message.image_card);
                    if (error)
                        return "image_card." + error;
                }
            }
            if (message.picture_card != null && message.hasOwnProperty("picture_card")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.im_proto.PictureCard.verify(message.picture_card);
                    if (error)
                        return "picture_card." + error;
                }
            }
            if (message.video_card != null && message.hasOwnProperty("video_card")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.im_proto.VideoCard.verify(message.video_card);
                    if (error)
                        return "video_card." + error;
                }
            }
            if (message.info_card != null && message.hasOwnProperty("info_card")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.im_proto.InfoCard.verify(message.info_card);
                    if (error)
                        return "info_card." + error;
                }
            }
            if (message.sticker_card != null && message.hasOwnProperty("sticker_card")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.im_proto.StickerCard.verify(message.sticker_card);
                    if (error)
                        return "sticker_card." + error;
                }
            }
            if (message.common_msg_card != null && message.hasOwnProperty("common_msg_card")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.im_proto.CommonMsgCard.verify(message.common_msg_card);
                    if (error)
                        return "common_msg_card." + error;
                }
            }
            if (message.dynamic_card != null && message.hasOwnProperty("dynamic_card")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.im_proto.DynamicCard.verify(message.dynamic_card);
                    if (error)
                        return "dynamic_card." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MessageContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.MessageContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.MessageContent} MessageContent
         */
        MessageContent.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.MessageContent)
                return object;
            var message = new $root.im_proto.MessageContent();
            if (object.image_card != null) {
                if (typeof object.image_card !== "object")
                    throw TypeError(".im_proto.MessageContent.image_card: object expected");
                message.image_card = $root.im_proto.ImageCard.fromObject(object.image_card);
            }
            if (object.picture_card != null) {
                if (typeof object.picture_card !== "object")
                    throw TypeError(".im_proto.MessageContent.picture_card: object expected");
                message.picture_card = $root.im_proto.PictureCard.fromObject(object.picture_card);
            }
            if (object.video_card != null) {
                if (typeof object.video_card !== "object")
                    throw TypeError(".im_proto.MessageContent.video_card: object expected");
                message.video_card = $root.im_proto.VideoCard.fromObject(object.video_card);
            }
            if (object.info_card != null) {
                if (typeof object.info_card !== "object")
                    throw TypeError(".im_proto.MessageContent.info_card: object expected");
                message.info_card = $root.im_proto.InfoCard.fromObject(object.info_card);
            }
            if (object.sticker_card != null) {
                if (typeof object.sticker_card !== "object")
                    throw TypeError(".im_proto.MessageContent.sticker_card: object expected");
                message.sticker_card = $root.im_proto.StickerCard.fromObject(object.sticker_card);
            }
            if (object.common_msg_card != null) {
                if (typeof object.common_msg_card !== "object")
                    throw TypeError(".im_proto.MessageContent.common_msg_card: object expected");
                message.common_msg_card = $root.im_proto.CommonMsgCard.fromObject(object.common_msg_card);
            }
            if (object.dynamic_card != null) {
                if (typeof object.dynamic_card !== "object")
                    throw TypeError(".im_proto.MessageContent.dynamic_card: object expected");
                message.dynamic_card = $root.im_proto.DynamicCard.fromObject(object.dynamic_card);
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.MessageContent
         * @static
         * @param {im_proto.MessageContent} message MessageContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.image_card != null && message.hasOwnProperty("image_card")) {
                object.image_card = $root.im_proto.ImageCard.toObject(message.image_card, options);
                if (options.oneofs)
                    object.content = "image_card";
            }
            if (message.picture_card != null && message.hasOwnProperty("picture_card")) {
                object.picture_card = $root.im_proto.PictureCard.toObject(message.picture_card, options);
                if (options.oneofs)
                    object.content = "picture_card";
            }
            if (message.video_card != null && message.hasOwnProperty("video_card")) {
                object.video_card = $root.im_proto.VideoCard.toObject(message.video_card, options);
                if (options.oneofs)
                    object.content = "video_card";
            }
            if (message.info_card != null && message.hasOwnProperty("info_card")) {
                object.info_card = $root.im_proto.InfoCard.toObject(message.info_card, options);
                if (options.oneofs)
                    object.content = "info_card";
            }
            if (message.sticker_card != null && message.hasOwnProperty("sticker_card")) {
                object.sticker_card = $root.im_proto.StickerCard.toObject(message.sticker_card, options);
                if (options.oneofs)
                    object.content = "sticker_card";
            }
            if (message.common_msg_card != null && message.hasOwnProperty("common_msg_card")) {
                object.common_msg_card = $root.im_proto.CommonMsgCard.toObject(message.common_msg_card, options);
                if (options.oneofs)
                    object.content = "common_msg_card";
            }
            if (message.dynamic_card != null && message.hasOwnProperty("dynamic_card")) {
                object.dynamic_card = $root.im_proto.DynamicCard.toObject(message.dynamic_card, options);
                if (options.oneofs)
                    object.content = "dynamic_card";
            }
            return object;
        };

        /**
         * Converts this MessageContent to JSON.
         * @function toJSON
         * @memberof im_proto.MessageContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageContent
         * @function getTypeUrl
         * @memberof im_proto.MessageContent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.MessageContent";
        };

        return MessageContent;
    })();

    im_proto.ReferencedMessageInfo = (function() {

        /**
         * Properties of a ReferencedMessageInfo.
         * @memberof im_proto
         * @interface IReferencedMessageInfo
         * @property {number|Long|null} [referenced_message_id] ReferencedMessageInfo referenced_message_id
         * @property {string|null} [hint] ReferencedMessageInfo hint
         * @property {number|Long|null} [root_message_id] ReferencedMessageInfo root_message_id
         * @property {number|Long|null} [root_message_conv_index] ReferencedMessageInfo root_message_conv_index
         */

        /**
         * Constructs a new ReferencedMessageInfo.
         * @memberof im_proto
         * @classdesc Represents a ReferencedMessageInfo.
         * @implements IReferencedMessageInfo
         * @constructor
         * @param {im_proto.IReferencedMessageInfo=} [properties] Properties to set
         */
        function ReferencedMessageInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReferencedMessageInfo referenced_message_id.
         * @member {number|Long} referenced_message_id
         * @memberof im_proto.ReferencedMessageInfo
         * @instance
         */
        ReferencedMessageInfo.prototype.referenced_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReferencedMessageInfo hint.
         * @member {string} hint
         * @memberof im_proto.ReferencedMessageInfo
         * @instance
         */
        ReferencedMessageInfo.prototype.hint = "";

        /**
         * ReferencedMessageInfo root_message_id.
         * @member {number|Long} root_message_id
         * @memberof im_proto.ReferencedMessageInfo
         * @instance
         */
        ReferencedMessageInfo.prototype.root_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReferencedMessageInfo root_message_conv_index.
         * @member {number|Long} root_message_conv_index
         * @memberof im_proto.ReferencedMessageInfo
         * @instance
         */
        ReferencedMessageInfo.prototype.root_message_conv_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReferencedMessageInfo instance using the specified properties.
         * @function create
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {im_proto.IReferencedMessageInfo=} [properties] Properties to set
         * @returns {im_proto.ReferencedMessageInfo} ReferencedMessageInfo instance
         */
        ReferencedMessageInfo.create = function create(properties) {
            return new ReferencedMessageInfo(properties);
        };

        /**
         * Encodes the specified ReferencedMessageInfo message. Does not implicitly {@link im_proto.ReferencedMessageInfo.verify|verify} messages.
         * @function encode
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {im_proto.IReferencedMessageInfo} message ReferencedMessageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReferencedMessageInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.referenced_message_id != null && Object.hasOwnProperty.call(message, "referenced_message_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.referenced_message_id);
            if (message.hint != null && Object.hasOwnProperty.call(message, "hint"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.hint);
            if (message.root_message_id != null && Object.hasOwnProperty.call(message, "root_message_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.root_message_id);
            if (message.root_message_conv_index != null && Object.hasOwnProperty.call(message, "root_message_conv_index"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.root_message_conv_index);
            return writer;
        };

        /**
         * Encodes the specified ReferencedMessageInfo message, length delimited. Does not implicitly {@link im_proto.ReferencedMessageInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {im_proto.IReferencedMessageInfo} message ReferencedMessageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReferencedMessageInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReferencedMessageInfo message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.ReferencedMessageInfo} ReferencedMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReferencedMessageInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.ReferencedMessageInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.referenced_message_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.hint = reader.string();
                        break;
                    }
                case 3: {
                        message.root_message_id = reader.int64();
                        break;
                    }
                case 4: {
                        message.root_message_conv_index = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReferencedMessageInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.ReferencedMessageInfo} ReferencedMessageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReferencedMessageInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReferencedMessageInfo message.
         * @function verify
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReferencedMessageInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.referenced_message_id != null && message.hasOwnProperty("referenced_message_id"))
                if (!$util.isInteger(message.referenced_message_id) && !(message.referenced_message_id && $util.isInteger(message.referenced_message_id.low) && $util.isInteger(message.referenced_message_id.high)))
                    return "referenced_message_id: integer|Long expected";
            if (message.hint != null && message.hasOwnProperty("hint"))
                if (!$util.isString(message.hint))
                    return "hint: string expected";
            if (message.root_message_id != null && message.hasOwnProperty("root_message_id"))
                if (!$util.isInteger(message.root_message_id) && !(message.root_message_id && $util.isInteger(message.root_message_id.low) && $util.isInteger(message.root_message_id.high)))
                    return "root_message_id: integer|Long expected";
            if (message.root_message_conv_index != null && message.hasOwnProperty("root_message_conv_index"))
                if (!$util.isInteger(message.root_message_conv_index) && !(message.root_message_conv_index && $util.isInteger(message.root_message_conv_index.low) && $util.isInteger(message.root_message_conv_index.high)))
                    return "root_message_conv_index: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReferencedMessageInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.ReferencedMessageInfo} ReferencedMessageInfo
         */
        ReferencedMessageInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.ReferencedMessageInfo)
                return object;
            var message = new $root.im_proto.ReferencedMessageInfo();
            if (object.referenced_message_id != null)
                if ($util.Long)
                    (message.referenced_message_id = $util.Long.fromValue(object.referenced_message_id)).unsigned = false;
                else if (typeof object.referenced_message_id === "string")
                    message.referenced_message_id = parseInt(object.referenced_message_id, 10);
                else if (typeof object.referenced_message_id === "number")
                    message.referenced_message_id = object.referenced_message_id;
                else if (typeof object.referenced_message_id === "object")
                    message.referenced_message_id = new $util.LongBits(object.referenced_message_id.low >>> 0, object.referenced_message_id.high >>> 0).toNumber();
            if (object.hint != null)
                message.hint = String(object.hint);
            if (object.root_message_id != null)
                if ($util.Long)
                    (message.root_message_id = $util.Long.fromValue(object.root_message_id)).unsigned = false;
                else if (typeof object.root_message_id === "string")
                    message.root_message_id = parseInt(object.root_message_id, 10);
                else if (typeof object.root_message_id === "number")
                    message.root_message_id = object.root_message_id;
                else if (typeof object.root_message_id === "object")
                    message.root_message_id = new $util.LongBits(object.root_message_id.low >>> 0, object.root_message_id.high >>> 0).toNumber();
            if (object.root_message_conv_index != null)
                if ($util.Long)
                    (message.root_message_conv_index = $util.Long.fromValue(object.root_message_conv_index)).unsigned = false;
                else if (typeof object.root_message_conv_index === "string")
                    message.root_message_conv_index = parseInt(object.root_message_conv_index, 10);
                else if (typeof object.root_message_conv_index === "number")
                    message.root_message_conv_index = object.root_message_conv_index;
                else if (typeof object.root_message_conv_index === "object")
                    message.root_message_conv_index = new $util.LongBits(object.root_message_conv_index.low >>> 0, object.root_message_conv_index.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReferencedMessageInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {im_proto.ReferencedMessageInfo} message ReferencedMessageInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReferencedMessageInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.referenced_message_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.referenced_message_id = options.longs === String ? "0" : 0;
                object.hint = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.root_message_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.root_message_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.root_message_conv_index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.root_message_conv_index = options.longs === String ? "0" : 0;
            }
            if (message.referenced_message_id != null && message.hasOwnProperty("referenced_message_id"))
                if (typeof message.referenced_message_id === "number")
                    object.referenced_message_id = options.longs === String ? String(message.referenced_message_id) : message.referenced_message_id;
                else
                    object.referenced_message_id = options.longs === String ? $util.Long.prototype.toString.call(message.referenced_message_id) : options.longs === Number ? new $util.LongBits(message.referenced_message_id.low >>> 0, message.referenced_message_id.high >>> 0).toNumber() : message.referenced_message_id;
            if (message.hint != null && message.hasOwnProperty("hint"))
                object.hint = message.hint;
            if (message.root_message_id != null && message.hasOwnProperty("root_message_id"))
                if (typeof message.root_message_id === "number")
                    object.root_message_id = options.longs === String ? String(message.root_message_id) : message.root_message_id;
                else
                    object.root_message_id = options.longs === String ? $util.Long.prototype.toString.call(message.root_message_id) : options.longs === Number ? new $util.LongBits(message.root_message_id.low >>> 0, message.root_message_id.high >>> 0).toNumber() : message.root_message_id;
            if (message.root_message_conv_index != null && message.hasOwnProperty("root_message_conv_index"))
                if (typeof message.root_message_conv_index === "number")
                    object.root_message_conv_index = options.longs === String ? String(message.root_message_conv_index) : message.root_message_conv_index;
                else
                    object.root_message_conv_index = options.longs === String ? $util.Long.prototype.toString.call(message.root_message_conv_index) : options.longs === Number ? new $util.LongBits(message.root_message_conv_index.low >>> 0, message.root_message_conv_index.high >>> 0).toNumber() : message.root_message_conv_index;
            return object;
        };

        /**
         * Converts this ReferencedMessageInfo to JSON.
         * @function toJSON
         * @memberof im_proto.ReferencedMessageInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReferencedMessageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReferencedMessageInfo
         * @function getTypeUrl
         * @memberof im_proto.ReferencedMessageInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReferencedMessageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.ReferencedMessageInfo";
        };

        return ReferencedMessageInfo;
    })();

    im_proto.ImageCard = (function() {

        /**
         * Properties of an ImageCard.
         * @memberof im_proto
         * @interface IImageCard
         */

        /**
         * Constructs a new ImageCard.
         * @memberof im_proto
         * @classdesc Represents an ImageCard.
         * @implements IImageCard
         * @constructor
         * @param {im_proto.IImageCard=} [properties] Properties to set
         */
        function ImageCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ImageCard instance using the specified properties.
         * @function create
         * @memberof im_proto.ImageCard
         * @static
         * @param {im_proto.IImageCard=} [properties] Properties to set
         * @returns {im_proto.ImageCard} ImageCard instance
         */
        ImageCard.create = function create(properties) {
            return new ImageCard(properties);
        };

        /**
         * Encodes the specified ImageCard message. Does not implicitly {@link im_proto.ImageCard.verify|verify} messages.
         * @function encode
         * @memberof im_proto.ImageCard
         * @static
         * @param {im_proto.IImageCard} message ImageCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ImageCard message, length delimited. Does not implicitly {@link im_proto.ImageCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.ImageCard
         * @static
         * @param {im_proto.IImageCard} message ImageCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ImageCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ImageCard message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.ImageCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.ImageCard} ImageCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.ImageCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ImageCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.ImageCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.ImageCard} ImageCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ImageCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ImageCard message.
         * @function verify
         * @memberof im_proto.ImageCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ImageCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an ImageCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.ImageCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.ImageCard} ImageCard
         */
        ImageCard.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.ImageCard)
                return object;
            return new $root.im_proto.ImageCard();
        };

        /**
         * Creates a plain object from an ImageCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.ImageCard
         * @static
         * @param {im_proto.ImageCard} message ImageCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ImageCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ImageCard to JSON.
         * @function toJSON
         * @memberof im_proto.ImageCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ImageCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ImageCard
         * @function getTypeUrl
         * @memberof im_proto.ImageCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ImageCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.ImageCard";
        };

        return ImageCard;
    })();

    im_proto.PictureCard = (function() {

        /**
         * Properties of a PictureCard.
         * @memberof im_proto
         * @interface IPictureCard
         */

        /**
         * Constructs a new PictureCard.
         * @memberof im_proto
         * @classdesc Represents a PictureCard.
         * @implements IPictureCard
         * @constructor
         * @param {im_proto.IPictureCard=} [properties] Properties to set
         */
        function PictureCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PictureCard instance using the specified properties.
         * @function create
         * @memberof im_proto.PictureCard
         * @static
         * @param {im_proto.IPictureCard=} [properties] Properties to set
         * @returns {im_proto.PictureCard} PictureCard instance
         */
        PictureCard.create = function create(properties) {
            return new PictureCard(properties);
        };

        /**
         * Encodes the specified PictureCard message. Does not implicitly {@link im_proto.PictureCard.verify|verify} messages.
         * @function encode
         * @memberof im_proto.PictureCard
         * @static
         * @param {im_proto.IPictureCard} message PictureCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PictureCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PictureCard message, length delimited. Does not implicitly {@link im_proto.PictureCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.PictureCard
         * @static
         * @param {im_proto.IPictureCard} message PictureCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PictureCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PictureCard message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.PictureCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.PictureCard} PictureCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PictureCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.PictureCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PictureCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.PictureCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.PictureCard} PictureCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PictureCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PictureCard message.
         * @function verify
         * @memberof im_proto.PictureCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PictureCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PictureCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.PictureCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.PictureCard} PictureCard
         */
        PictureCard.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.PictureCard)
                return object;
            return new $root.im_proto.PictureCard();
        };

        /**
         * Creates a plain object from a PictureCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.PictureCard
         * @static
         * @param {im_proto.PictureCard} message PictureCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PictureCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PictureCard to JSON.
         * @function toJSON
         * @memberof im_proto.PictureCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PictureCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PictureCard
         * @function getTypeUrl
         * @memberof im_proto.PictureCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PictureCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.PictureCard";
        };

        return PictureCard;
    })();

    im_proto.VideoCard = (function() {

        /**
         * Properties of a VideoCard.
         * @memberof im_proto
         * @interface IVideoCard
         */

        /**
         * Constructs a new VideoCard.
         * @memberof im_proto
         * @classdesc Represents a VideoCard.
         * @implements IVideoCard
         * @constructor
         * @param {im_proto.IVideoCard=} [properties] Properties to set
         */
        function VideoCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new VideoCard instance using the specified properties.
         * @function create
         * @memberof im_proto.VideoCard
         * @static
         * @param {im_proto.IVideoCard=} [properties] Properties to set
         * @returns {im_proto.VideoCard} VideoCard instance
         */
        VideoCard.create = function create(properties) {
            return new VideoCard(properties);
        };

        /**
         * Encodes the specified VideoCard message. Does not implicitly {@link im_proto.VideoCard.verify|verify} messages.
         * @function encode
         * @memberof im_proto.VideoCard
         * @static
         * @param {im_proto.IVideoCard} message VideoCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified VideoCard message, length delimited. Does not implicitly {@link im_proto.VideoCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.VideoCard
         * @static
         * @param {im_proto.IVideoCard} message VideoCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoCard message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.VideoCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.VideoCard} VideoCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.VideoCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VideoCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.VideoCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.VideoCard} VideoCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoCard message.
         * @function verify
         * @memberof im_proto.VideoCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a VideoCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.VideoCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.VideoCard} VideoCard
         */
        VideoCard.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.VideoCard)
                return object;
            return new $root.im_proto.VideoCard();
        };

        /**
         * Creates a plain object from a VideoCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.VideoCard
         * @static
         * @param {im_proto.VideoCard} message VideoCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this VideoCard to JSON.
         * @function toJSON
         * @memberof im_proto.VideoCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VideoCard
         * @function getTypeUrl
         * @memberof im_proto.VideoCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VideoCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.VideoCard";
        };

        return VideoCard;
    })();

    im_proto.InfoCard = (function() {

        /**
         * Properties of an InfoCard.
         * @memberof im_proto
         * @interface IInfoCard
         * @property {im_proto.IInfoCardTitle|null} [title] InfoCard title
         * @property {im_proto.IInfoCardContent|null} [content] InfoCard content
         * @property {im_proto.IBaseVideo|null} [video] InfoCard video
         * @property {im_proto.ILinkInfo|null} [link_info] InfoCard link_info
         * @property {im_proto.IBaseReq|null} [req_base] InfoCard req_base
         * @property {im_proto.IBaseResp|null} [resp_base] InfoCard resp_base
         */

        /**
         * Constructs a new InfoCard.
         * @memberof im_proto
         * @classdesc Represents an InfoCard.
         * @implements IInfoCard
         * @constructor
         * @param {im_proto.IInfoCard=} [properties] Properties to set
         */
        function InfoCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InfoCard title.
         * @member {im_proto.IInfoCardTitle|null|undefined} title
         * @memberof im_proto.InfoCard
         * @instance
         */
        InfoCard.prototype.title = null;

        /**
         * InfoCard content.
         * @member {im_proto.IInfoCardContent|null|undefined} content
         * @memberof im_proto.InfoCard
         * @instance
         */
        InfoCard.prototype.content = null;

        /**
         * InfoCard video.
         * @member {im_proto.IBaseVideo|null|undefined} video
         * @memberof im_proto.InfoCard
         * @instance
         */
        InfoCard.prototype.video = null;

        /**
         * InfoCard link_info.
         * @member {im_proto.ILinkInfo|null|undefined} link_info
         * @memberof im_proto.InfoCard
         * @instance
         */
        InfoCard.prototype.link_info = null;

        /**
         * InfoCard req_base.
         * @member {im_proto.IBaseReq|null|undefined} req_base
         * @memberof im_proto.InfoCard
         * @instance
         */
        InfoCard.prototype.req_base = null;

        /**
         * InfoCard resp_base.
         * @member {im_proto.IBaseResp|null|undefined} resp_base
         * @memberof im_proto.InfoCard
         * @instance
         */
        InfoCard.prototype.resp_base = null;

        /**
         * Creates a new InfoCard instance using the specified properties.
         * @function create
         * @memberof im_proto.InfoCard
         * @static
         * @param {im_proto.IInfoCard=} [properties] Properties to set
         * @returns {im_proto.InfoCard} InfoCard instance
         */
        InfoCard.create = function create(properties) {
            return new InfoCard(properties);
        };

        /**
         * Encodes the specified InfoCard message. Does not implicitly {@link im_proto.InfoCard.verify|verify} messages.
         * @function encode
         * @memberof im_proto.InfoCard
         * @static
         * @param {im_proto.IInfoCard} message InfoCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.im_proto.InfoCardTitle.encode(message.title, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                $root.im_proto.InfoCardContent.encode(message.content, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                $root.im_proto.BaseVideo.encode(message.video, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.link_info != null && Object.hasOwnProperty.call(message, "link_info"))
                $root.im_proto.LinkInfo.encode(message.link_info, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.req_base != null && Object.hasOwnProperty.call(message, "req_base"))
                $root.im_proto.BaseReq.encode(message.req_base, writer.uint32(/* id 200, wireType 2 =*/1602).fork()).ldelim();
            if (message.resp_base != null && Object.hasOwnProperty.call(message, "resp_base"))
                $root.im_proto.BaseResp.encode(message.resp_base, writer.uint32(/* id 201, wireType 2 =*/1610).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InfoCard message, length delimited. Does not implicitly {@link im_proto.InfoCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.InfoCard
         * @static
         * @param {im_proto.IInfoCard} message InfoCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InfoCard message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.InfoCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.InfoCard} InfoCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.InfoCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.title = $root.im_proto.InfoCardTitle.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.content = $root.im_proto.InfoCardContent.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.video = $root.im_proto.BaseVideo.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.link_info = $root.im_proto.LinkInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 200: {
                        message.req_base = $root.im_proto.BaseReq.decode(reader, reader.uint32());
                        break;
                    }
                case 201: {
                        message.resp_base = $root.im_proto.BaseResp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InfoCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.InfoCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.InfoCard} InfoCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InfoCard message.
         * @function verify
         * @memberof im_proto.InfoCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InfoCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                var error = $root.im_proto.InfoCardTitle.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.content != null && message.hasOwnProperty("content")) {
                var error = $root.im_proto.InfoCardContent.verify(message.content);
                if (error)
                    return "content." + error;
            }
            if (message.video != null && message.hasOwnProperty("video")) {
                var error = $root.im_proto.BaseVideo.verify(message.video);
                if (error)
                    return "video." + error;
            }
            if (message.link_info != null && message.hasOwnProperty("link_info")) {
                var error = $root.im_proto.LinkInfo.verify(message.link_info);
                if (error)
                    return "link_info." + error;
            }
            if (message.req_base != null && message.hasOwnProperty("req_base")) {
                var error = $root.im_proto.BaseReq.verify(message.req_base);
                if (error)
                    return "req_base." + error;
            }
            if (message.resp_base != null && message.hasOwnProperty("resp_base")) {
                var error = $root.im_proto.BaseResp.verify(message.resp_base);
                if (error)
                    return "resp_base." + error;
            }
            return null;
        };

        /**
         * Creates an InfoCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.InfoCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.InfoCard} InfoCard
         */
        InfoCard.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.InfoCard)
                return object;
            var message = new $root.im_proto.InfoCard();
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".im_proto.InfoCard.title: object expected");
                message.title = $root.im_proto.InfoCardTitle.fromObject(object.title);
            }
            if (object.content != null) {
                if (typeof object.content !== "object")
                    throw TypeError(".im_proto.InfoCard.content: object expected");
                message.content = $root.im_proto.InfoCardContent.fromObject(object.content);
            }
            if (object.video != null) {
                if (typeof object.video !== "object")
                    throw TypeError(".im_proto.InfoCard.video: object expected");
                message.video = $root.im_proto.BaseVideo.fromObject(object.video);
            }
            if (object.link_info != null) {
                if (typeof object.link_info !== "object")
                    throw TypeError(".im_proto.InfoCard.link_info: object expected");
                message.link_info = $root.im_proto.LinkInfo.fromObject(object.link_info);
            }
            if (object.req_base != null) {
                if (typeof object.req_base !== "object")
                    throw TypeError(".im_proto.InfoCard.req_base: object expected");
                message.req_base = $root.im_proto.BaseReq.fromObject(object.req_base);
            }
            if (object.resp_base != null) {
                if (typeof object.resp_base !== "object")
                    throw TypeError(".im_proto.InfoCard.resp_base: object expected");
                message.resp_base = $root.im_proto.BaseResp.fromObject(object.resp_base);
            }
            return message;
        };

        /**
         * Creates a plain object from an InfoCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.InfoCard
         * @static
         * @param {im_proto.InfoCard} message InfoCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InfoCard.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = null;
                object.content = null;
                object.video = null;
                object.link_info = null;
                object.req_base = null;
                object.resp_base = null;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.im_proto.InfoCardTitle.toObject(message.title, options);
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = $root.im_proto.InfoCardContent.toObject(message.content, options);
            if (message.video != null && message.hasOwnProperty("video"))
                object.video = $root.im_proto.BaseVideo.toObject(message.video, options);
            if (message.link_info != null && message.hasOwnProperty("link_info"))
                object.link_info = $root.im_proto.LinkInfo.toObject(message.link_info, options);
            if (message.req_base != null && message.hasOwnProperty("req_base"))
                object.req_base = $root.im_proto.BaseReq.toObject(message.req_base, options);
            if (message.resp_base != null && message.hasOwnProperty("resp_base"))
                object.resp_base = $root.im_proto.BaseResp.toObject(message.resp_base, options);
            return object;
        };

        /**
         * Converts this InfoCard to JSON.
         * @function toJSON
         * @memberof im_proto.InfoCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InfoCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InfoCard
         * @function getTypeUrl
         * @memberof im_proto.InfoCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InfoCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.InfoCard";
        };

        return InfoCard;
    })();

    im_proto.StickerCard = (function() {

        /**
         * Properties of a StickerCard.
         * @memberof im_proto
         * @interface IStickerCard
         */

        /**
         * Constructs a new StickerCard.
         * @memberof im_proto
         * @classdesc Represents a StickerCard.
         * @implements IStickerCard
         * @constructor
         * @param {im_proto.IStickerCard=} [properties] Properties to set
         */
        function StickerCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new StickerCard instance using the specified properties.
         * @function create
         * @memberof im_proto.StickerCard
         * @static
         * @param {im_proto.IStickerCard=} [properties] Properties to set
         * @returns {im_proto.StickerCard} StickerCard instance
         */
        StickerCard.create = function create(properties) {
            return new StickerCard(properties);
        };

        /**
         * Encodes the specified StickerCard message. Does not implicitly {@link im_proto.StickerCard.verify|verify} messages.
         * @function encode
         * @memberof im_proto.StickerCard
         * @static
         * @param {im_proto.IStickerCard} message StickerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StickerCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified StickerCard message, length delimited. Does not implicitly {@link im_proto.StickerCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.StickerCard
         * @static
         * @param {im_proto.IStickerCard} message StickerCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StickerCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StickerCard message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.StickerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.StickerCard} StickerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StickerCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.StickerCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StickerCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.StickerCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.StickerCard} StickerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StickerCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StickerCard message.
         * @function verify
         * @memberof im_proto.StickerCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StickerCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a StickerCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.StickerCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.StickerCard} StickerCard
         */
        StickerCard.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.StickerCard)
                return object;
            return new $root.im_proto.StickerCard();
        };

        /**
         * Creates a plain object from a StickerCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.StickerCard
         * @static
         * @param {im_proto.StickerCard} message StickerCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StickerCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this StickerCard to JSON.
         * @function toJSON
         * @memberof im_proto.StickerCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StickerCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StickerCard
         * @function getTypeUrl
         * @memberof im_proto.StickerCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StickerCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.StickerCard";
        };

        return StickerCard;
    })();

    im_proto.DynamicCard = (function() {

        /**
         * Properties of a DynamicCard.
         * @memberof im_proto
         * @interface IDynamicCard
         */

        /**
         * Constructs a new DynamicCard.
         * @memberof im_proto
         * @classdesc Represents a DynamicCard.
         * @implements IDynamicCard
         * @constructor
         * @param {im_proto.IDynamicCard=} [properties] Properties to set
         */
        function DynamicCard(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DynamicCard instance using the specified properties.
         * @function create
         * @memberof im_proto.DynamicCard
         * @static
         * @param {im_proto.IDynamicCard=} [properties] Properties to set
         * @returns {im_proto.DynamicCard} DynamicCard instance
         */
        DynamicCard.create = function create(properties) {
            return new DynamicCard(properties);
        };

        /**
         * Encodes the specified DynamicCard message. Does not implicitly {@link im_proto.DynamicCard.verify|verify} messages.
         * @function encode
         * @memberof im_proto.DynamicCard
         * @static
         * @param {im_proto.IDynamicCard} message DynamicCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicCard.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DynamicCard message, length delimited. Does not implicitly {@link im_proto.DynamicCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.DynamicCard
         * @static
         * @param {im_proto.IDynamicCard} message DynamicCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DynamicCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DynamicCard message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.DynamicCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.DynamicCard} DynamicCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.DynamicCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DynamicCard message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.DynamicCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.DynamicCard} DynamicCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DynamicCard.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DynamicCard message.
         * @function verify
         * @memberof im_proto.DynamicCard
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DynamicCard.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DynamicCard message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.DynamicCard
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.DynamicCard} DynamicCard
         */
        DynamicCard.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.DynamicCard)
                return object;
            return new $root.im_proto.DynamicCard();
        };

        /**
         * Creates a plain object from a DynamicCard message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.DynamicCard
         * @static
         * @param {im_proto.DynamicCard} message DynamicCard
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DynamicCard.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DynamicCard to JSON.
         * @function toJSON
         * @memberof im_proto.DynamicCard
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DynamicCard.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DynamicCard
         * @function getTypeUrl
         * @memberof im_proto.DynamicCard
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DynamicCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.DynamicCard";
        };

        return DynamicCard;
    })();

    im_proto.InfoCardTitle = (function() {

        /**
         * Properties of an InfoCardTitle.
         * @memberof im_proto
         * @interface IInfoCardTitle
         * @property {im_proto.IBaseText|null} [title] InfoCardTitle title
         * @property {im_proto.IBaseImage|null} [image] InfoCardTitle image
         */

        /**
         * Constructs a new InfoCardTitle.
         * @memberof im_proto
         * @classdesc Represents an InfoCardTitle.
         * @implements IInfoCardTitle
         * @constructor
         * @param {im_proto.IInfoCardTitle=} [properties] Properties to set
         */
        function InfoCardTitle(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InfoCardTitle title.
         * @member {im_proto.IBaseText|null|undefined} title
         * @memberof im_proto.InfoCardTitle
         * @instance
         */
        InfoCardTitle.prototype.title = null;

        /**
         * InfoCardTitle image.
         * @member {im_proto.IBaseImage|null|undefined} image
         * @memberof im_proto.InfoCardTitle
         * @instance
         */
        InfoCardTitle.prototype.image = null;

        /**
         * Creates a new InfoCardTitle instance using the specified properties.
         * @function create
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {im_proto.IInfoCardTitle=} [properties] Properties to set
         * @returns {im_proto.InfoCardTitle} InfoCardTitle instance
         */
        InfoCardTitle.create = function create(properties) {
            return new InfoCardTitle(properties);
        };

        /**
         * Encodes the specified InfoCardTitle message. Does not implicitly {@link im_proto.InfoCardTitle.verify|verify} messages.
         * @function encode
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {im_proto.IInfoCardTitle} message InfoCardTitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoCardTitle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                $root.im_proto.BaseText.encode(message.title, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                $root.im_proto.BaseImage.encode(message.image, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InfoCardTitle message, length delimited. Does not implicitly {@link im_proto.InfoCardTitle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {im_proto.IInfoCardTitle} message InfoCardTitle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoCardTitle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InfoCardTitle message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.InfoCardTitle} InfoCardTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoCardTitle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.InfoCardTitle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.title = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.image = $root.im_proto.BaseImage.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InfoCardTitle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.InfoCardTitle} InfoCardTitle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoCardTitle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InfoCardTitle message.
         * @function verify
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InfoCardTitle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title")) {
                var error = $root.im_proto.BaseText.verify(message.title);
                if (error)
                    return "title." + error;
            }
            if (message.image != null && message.hasOwnProperty("image")) {
                var error = $root.im_proto.BaseImage.verify(message.image);
                if (error)
                    return "image." + error;
            }
            return null;
        };

        /**
         * Creates an InfoCardTitle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.InfoCardTitle} InfoCardTitle
         */
        InfoCardTitle.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.InfoCardTitle)
                return object;
            var message = new $root.im_proto.InfoCardTitle();
            if (object.title != null) {
                if (typeof object.title !== "object")
                    throw TypeError(".im_proto.InfoCardTitle.title: object expected");
                message.title = $root.im_proto.BaseText.fromObject(object.title);
            }
            if (object.image != null) {
                if (typeof object.image !== "object")
                    throw TypeError(".im_proto.InfoCardTitle.image: object expected");
                message.image = $root.im_proto.BaseImage.fromObject(object.image);
            }
            return message;
        };

        /**
         * Creates a plain object from an InfoCardTitle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {im_proto.InfoCardTitle} message InfoCardTitle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InfoCardTitle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = null;
                object.image = null;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = $root.im_proto.BaseText.toObject(message.title, options);
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = $root.im_proto.BaseImage.toObject(message.image, options);
            return object;
        };

        /**
         * Converts this InfoCardTitle to JSON.
         * @function toJSON
         * @memberof im_proto.InfoCardTitle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InfoCardTitle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InfoCardTitle
         * @function getTypeUrl
         * @memberof im_proto.InfoCardTitle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InfoCardTitle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.InfoCardTitle";
        };

        return InfoCardTitle;
    })();

    im_proto.InfoCardContent = (function() {

        /**
         * Properties of an InfoCardContent.
         * @memberof im_proto
         * @interface IInfoCardContent
         * @property {im_proto.IBaseText|null} [description] InfoCardContent description
         * @property {Array.<im_proto.IBaseText>|null} [contents] InfoCardContent contents
         */

        /**
         * Constructs a new InfoCardContent.
         * @memberof im_proto
         * @classdesc Represents an InfoCardContent.
         * @implements IInfoCardContent
         * @constructor
         * @param {im_proto.IInfoCardContent=} [properties] Properties to set
         */
        function InfoCardContent(properties) {
            this.contents = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InfoCardContent description.
         * @member {im_proto.IBaseText|null|undefined} description
         * @memberof im_proto.InfoCardContent
         * @instance
         */
        InfoCardContent.prototype.description = null;

        /**
         * InfoCardContent contents.
         * @member {Array.<im_proto.IBaseText>} contents
         * @memberof im_proto.InfoCardContent
         * @instance
         */
        InfoCardContent.prototype.contents = $util.emptyArray;

        /**
         * Creates a new InfoCardContent instance using the specified properties.
         * @function create
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {im_proto.IInfoCardContent=} [properties] Properties to set
         * @returns {im_proto.InfoCardContent} InfoCardContent instance
         */
        InfoCardContent.create = function create(properties) {
            return new InfoCardContent(properties);
        };

        /**
         * Encodes the specified InfoCardContent message. Does not implicitly {@link im_proto.InfoCardContent.verify|verify} messages.
         * @function encode
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {im_proto.IInfoCardContent} message InfoCardContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoCardContent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.im_proto.BaseText.encode(message.description, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.contents != null && message.contents.length)
                for (var i = 0; i < message.contents.length; ++i)
                    $root.im_proto.BaseText.encode(message.contents[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InfoCardContent message, length delimited. Does not implicitly {@link im_proto.InfoCardContent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {im_proto.IInfoCardContent} message InfoCardContent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InfoCardContent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InfoCardContent message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.InfoCardContent} InfoCardContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoCardContent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.InfoCardContent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.description = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.contents && message.contents.length))
                            message.contents = [];
                        message.contents.push($root.im_proto.BaseText.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InfoCardContent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.InfoCardContent} InfoCardContent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InfoCardContent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InfoCardContent message.
         * @function verify
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InfoCardContent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.description != null && message.hasOwnProperty("description")) {
                var error = $root.im_proto.BaseText.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.contents != null && message.hasOwnProperty("contents")) {
                if (!Array.isArray(message.contents))
                    return "contents: array expected";
                for (var i = 0; i < message.contents.length; ++i) {
                    var error = $root.im_proto.BaseText.verify(message.contents[i]);
                    if (error)
                        return "contents." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InfoCardContent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.InfoCardContent} InfoCardContent
         */
        InfoCardContent.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.InfoCardContent)
                return object;
            var message = new $root.im_proto.InfoCardContent();
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".im_proto.InfoCardContent.description: object expected");
                message.description = $root.im_proto.BaseText.fromObject(object.description);
            }
            if (object.contents) {
                if (!Array.isArray(object.contents))
                    throw TypeError(".im_proto.InfoCardContent.contents: array expected");
                message.contents = [];
                for (var i = 0; i < object.contents.length; ++i) {
                    if (typeof object.contents[i] !== "object")
                        throw TypeError(".im_proto.InfoCardContent.contents: object expected");
                    message.contents[i] = $root.im_proto.BaseText.fromObject(object.contents[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an InfoCardContent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {im_proto.InfoCardContent} message InfoCardContent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InfoCardContent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.contents = [];
            if (options.defaults)
                object.description = null;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.im_proto.BaseText.toObject(message.description, options);
            if (message.contents && message.contents.length) {
                object.contents = [];
                for (var j = 0; j < message.contents.length; ++j)
                    object.contents[j] = $root.im_proto.BaseText.toObject(message.contents[j], options);
            }
            return object;
        };

        /**
         * Converts this InfoCardContent to JSON.
         * @function toJSON
         * @memberof im_proto.InfoCardContent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InfoCardContent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for InfoCardContent
         * @function getTypeUrl
         * @memberof im_proto.InfoCardContent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InfoCardContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.InfoCardContent";
        };

        return InfoCardContent;
    })();

    im_proto.BaseText = (function() {

        /**
         * Properties of a BaseText.
         * @memberof im_proto
         * @interface IBaseText
         * @property {string|null} [text] BaseText text
         */

        /**
         * Constructs a new BaseText.
         * @memberof im_proto
         * @classdesc Represents a BaseText.
         * @implements IBaseText
         * @constructor
         * @param {im_proto.IBaseText=} [properties] Properties to set
         */
        function BaseText(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseText text.
         * @member {string} text
         * @memberof im_proto.BaseText
         * @instance
         */
        BaseText.prototype.text = "";

        /**
         * Creates a new BaseText instance using the specified properties.
         * @function create
         * @memberof im_proto.BaseText
         * @static
         * @param {im_proto.IBaseText=} [properties] Properties to set
         * @returns {im_proto.BaseText} BaseText instance
         */
        BaseText.create = function create(properties) {
            return new BaseText(properties);
        };

        /**
         * Encodes the specified BaseText message. Does not implicitly {@link im_proto.BaseText.verify|verify} messages.
         * @function encode
         * @memberof im_proto.BaseText
         * @static
         * @param {im_proto.IBaseText} message BaseText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseText.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified BaseText message, length delimited. Does not implicitly {@link im_proto.BaseText.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.BaseText
         * @static
         * @param {im_proto.IBaseText} message BaseText message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseText.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseText message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.BaseText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.BaseText} BaseText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseText.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.BaseText();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.text = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseText message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.BaseText
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.BaseText} BaseText
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseText.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseText message.
         * @function verify
         * @memberof im_proto.BaseText
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseText.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            return null;
        };

        /**
         * Creates a BaseText message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.BaseText
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.BaseText} BaseText
         */
        BaseText.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.BaseText)
                return object;
            var message = new $root.im_proto.BaseText();
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from a BaseText message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.BaseText
         * @static
         * @param {im_proto.BaseText} message BaseText
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseText.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.text = "";
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            return object;
        };

        /**
         * Converts this BaseText to JSON.
         * @function toJSON
         * @memberof im_proto.BaseText
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseText.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseText
         * @function getTypeUrl
         * @memberof im_proto.BaseText
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseText.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.BaseText";
        };

        return BaseText;
    })();

    im_proto.BaseImage = (function() {

        /**
         * Properties of a BaseImage.
         * @memberof im_proto
         * @interface IBaseImage
         * @property {string|null} [image_id] BaseImage image_id
         * @property {Array.<string>|null} [url_list] BaseImage url_list
         * @property {string|null} [display_name] BaseImage display_name
         * @property {string|null} [decrypt_key] BaseImage decrypt_key
         * @property {number|null} [fallback_icon_type] BaseImage fallback_icon_type
         */

        /**
         * Constructs a new BaseImage.
         * @memberof im_proto
         * @classdesc Represents a BaseImage.
         * @implements IBaseImage
         * @constructor
         * @param {im_proto.IBaseImage=} [properties] Properties to set
         */
        function BaseImage(properties) {
            this.url_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseImage image_id.
         * @member {string} image_id
         * @memberof im_proto.BaseImage
         * @instance
         */
        BaseImage.prototype.image_id = "";

        /**
         * BaseImage url_list.
         * @member {Array.<string>} url_list
         * @memberof im_proto.BaseImage
         * @instance
         */
        BaseImage.prototype.url_list = $util.emptyArray;

        /**
         * BaseImage display_name.
         * @member {string} display_name
         * @memberof im_proto.BaseImage
         * @instance
         */
        BaseImage.prototype.display_name = "";

        /**
         * BaseImage decrypt_key.
         * @member {string} decrypt_key
         * @memberof im_proto.BaseImage
         * @instance
         */
        BaseImage.prototype.decrypt_key = "";

        /**
         * BaseImage fallback_icon_type.
         * @member {number} fallback_icon_type
         * @memberof im_proto.BaseImage
         * @instance
         */
        BaseImage.prototype.fallback_icon_type = 0;

        /**
         * Creates a new BaseImage instance using the specified properties.
         * @function create
         * @memberof im_proto.BaseImage
         * @static
         * @param {im_proto.IBaseImage=} [properties] Properties to set
         * @returns {im_proto.BaseImage} BaseImage instance
         */
        BaseImage.create = function create(properties) {
            return new BaseImage(properties);
        };

        /**
         * Encodes the specified BaseImage message. Does not implicitly {@link im_proto.BaseImage.verify|verify} messages.
         * @function encode
         * @memberof im_proto.BaseImage
         * @static
         * @param {im_proto.IBaseImage} message BaseImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseImage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.image_id != null && Object.hasOwnProperty.call(message, "image_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.image_id);
            if (message.url_list != null && message.url_list.length)
                for (var i = 0; i < message.url_list.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url_list[i]);
            if (message.display_name != null && Object.hasOwnProperty.call(message, "display_name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.display_name);
            if (message.decrypt_key != null && Object.hasOwnProperty.call(message, "decrypt_key"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.decrypt_key);
            if (message.fallback_icon_type != null && Object.hasOwnProperty.call(message, "fallback_icon_type"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.fallback_icon_type);
            return writer;
        };

        /**
         * Encodes the specified BaseImage message, length delimited. Does not implicitly {@link im_proto.BaseImage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.BaseImage
         * @static
         * @param {im_proto.IBaseImage} message BaseImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseImage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseImage message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.BaseImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.BaseImage} BaseImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseImage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.BaseImage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.image_id = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.url_list && message.url_list.length))
                            message.url_list = [];
                        message.url_list.push(reader.string());
                        break;
                    }
                case 4: {
                        message.display_name = reader.string();
                        break;
                    }
                case 6: {
                        message.decrypt_key = reader.string();
                        break;
                    }
                case 7: {
                        message.fallback_icon_type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseImage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.BaseImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.BaseImage} BaseImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseImage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseImage message.
         * @function verify
         * @memberof im_proto.BaseImage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseImage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.image_id != null && message.hasOwnProperty("image_id"))
                if (!$util.isString(message.image_id))
                    return "image_id: string expected";
            if (message.url_list != null && message.hasOwnProperty("url_list")) {
                if (!Array.isArray(message.url_list))
                    return "url_list: array expected";
                for (var i = 0; i < message.url_list.length; ++i)
                    if (!$util.isString(message.url_list[i]))
                        return "url_list: string[] expected";
            }
            if (message.display_name != null && message.hasOwnProperty("display_name"))
                if (!$util.isString(message.display_name))
                    return "display_name: string expected";
            if (message.decrypt_key != null && message.hasOwnProperty("decrypt_key"))
                if (!$util.isString(message.decrypt_key))
                    return "decrypt_key: string expected";
            if (message.fallback_icon_type != null && message.hasOwnProperty("fallback_icon_type"))
                if (!$util.isInteger(message.fallback_icon_type))
                    return "fallback_icon_type: integer expected";
            return null;
        };

        /**
         * Creates a BaseImage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.BaseImage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.BaseImage} BaseImage
         */
        BaseImage.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.BaseImage)
                return object;
            var message = new $root.im_proto.BaseImage();
            if (object.image_id != null)
                message.image_id = String(object.image_id);
            if (object.url_list) {
                if (!Array.isArray(object.url_list))
                    throw TypeError(".im_proto.BaseImage.url_list: array expected");
                message.url_list = [];
                for (var i = 0; i < object.url_list.length; ++i)
                    message.url_list[i] = String(object.url_list[i]);
            }
            if (object.display_name != null)
                message.display_name = String(object.display_name);
            if (object.decrypt_key != null)
                message.decrypt_key = String(object.decrypt_key);
            if (object.fallback_icon_type != null)
                message.fallback_icon_type = object.fallback_icon_type | 0;
            return message;
        };

        /**
         * Creates a plain object from a BaseImage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.BaseImage
         * @static
         * @param {im_proto.BaseImage} message BaseImage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseImage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.url_list = [];
            if (options.defaults) {
                object.image_id = "";
                object.display_name = "";
                object.decrypt_key = "";
                object.fallback_icon_type = 0;
            }
            if (message.image_id != null && message.hasOwnProperty("image_id"))
                object.image_id = message.image_id;
            if (message.url_list && message.url_list.length) {
                object.url_list = [];
                for (var j = 0; j < message.url_list.length; ++j)
                    object.url_list[j] = message.url_list[j];
            }
            if (message.display_name != null && message.hasOwnProperty("display_name"))
                object.display_name = message.display_name;
            if (message.decrypt_key != null && message.hasOwnProperty("decrypt_key"))
                object.decrypt_key = message.decrypt_key;
            if (message.fallback_icon_type != null && message.hasOwnProperty("fallback_icon_type"))
                object.fallback_icon_type = message.fallback_icon_type;
            return object;
        };

        /**
         * Converts this BaseImage to JSON.
         * @function toJSON
         * @memberof im_proto.BaseImage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseImage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseImage
         * @function getTypeUrl
         * @memberof im_proto.BaseImage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.BaseImage";
        };

        return BaseImage;
    })();

    im_proto.LinkInfo = (function() {

        /**
         * Properties of a LinkInfo.
         * @memberof im_proto
         * @interface ILinkInfo
         * @property {Array.<string>|null} [url_list] LinkInfo url_list
         * @property {number|null} [action_type] LinkInfo action_type
         */

        /**
         * Constructs a new LinkInfo.
         * @memberof im_proto
         * @classdesc Represents a LinkInfo.
         * @implements ILinkInfo
         * @constructor
         * @param {im_proto.ILinkInfo=} [properties] Properties to set
         */
        function LinkInfo(properties) {
            this.url_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LinkInfo url_list.
         * @member {Array.<string>} url_list
         * @memberof im_proto.LinkInfo
         * @instance
         */
        LinkInfo.prototype.url_list = $util.emptyArray;

        /**
         * LinkInfo action_type.
         * @member {number} action_type
         * @memberof im_proto.LinkInfo
         * @instance
         */
        LinkInfo.prototype.action_type = 0;

        /**
         * Creates a new LinkInfo instance using the specified properties.
         * @function create
         * @memberof im_proto.LinkInfo
         * @static
         * @param {im_proto.ILinkInfo=} [properties] Properties to set
         * @returns {im_proto.LinkInfo} LinkInfo instance
         */
        LinkInfo.create = function create(properties) {
            return new LinkInfo(properties);
        };

        /**
         * Encodes the specified LinkInfo message. Does not implicitly {@link im_proto.LinkInfo.verify|verify} messages.
         * @function encode
         * @memberof im_proto.LinkInfo
         * @static
         * @param {im_proto.ILinkInfo} message LinkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url_list != null && message.url_list.length)
                for (var i = 0; i < message.url_list.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.url_list[i]);
            if (message.action_type != null && Object.hasOwnProperty.call(message, "action_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action_type);
            return writer;
        };

        /**
         * Encodes the specified LinkInfo message, length delimited. Does not implicitly {@link im_proto.LinkInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.LinkInfo
         * @static
         * @param {im_proto.ILinkInfo} message LinkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LinkInfo message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.LinkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.LinkInfo} LinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.LinkInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.url_list && message.url_list.length))
                            message.url_list = [];
                        message.url_list.push(reader.string());
                        break;
                    }
                case 2: {
                        message.action_type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LinkInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.LinkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.LinkInfo} LinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LinkInfo message.
         * @function verify
         * @memberof im_proto.LinkInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LinkInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url_list != null && message.hasOwnProperty("url_list")) {
                if (!Array.isArray(message.url_list))
                    return "url_list: array expected";
                for (var i = 0; i < message.url_list.length; ++i)
                    if (!$util.isString(message.url_list[i]))
                        return "url_list: string[] expected";
            }
            if (message.action_type != null && message.hasOwnProperty("action_type"))
                if (!$util.isInteger(message.action_type))
                    return "action_type: integer expected";
            return null;
        };

        /**
         * Creates a LinkInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.LinkInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.LinkInfo} LinkInfo
         */
        LinkInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.LinkInfo)
                return object;
            var message = new $root.im_proto.LinkInfo();
            if (object.url_list) {
                if (!Array.isArray(object.url_list))
                    throw TypeError(".im_proto.LinkInfo.url_list: array expected");
                message.url_list = [];
                for (var i = 0; i < object.url_list.length; ++i)
                    message.url_list[i] = String(object.url_list[i]);
            }
            if (object.action_type != null)
                message.action_type = object.action_type | 0;
            return message;
        };

        /**
         * Creates a plain object from a LinkInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.LinkInfo
         * @static
         * @param {im_proto.LinkInfo} message LinkInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LinkInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.url_list = [];
            if (options.defaults)
                object.action_type = 0;
            if (message.url_list && message.url_list.length) {
                object.url_list = [];
                for (var j = 0; j < message.url_list.length; ++j)
                    object.url_list[j] = message.url_list[j];
            }
            if (message.action_type != null && message.hasOwnProperty("action_type"))
                object.action_type = message.action_type;
            return object;
        };

        /**
         * Converts this LinkInfo to JSON.
         * @function toJSON
         * @memberof im_proto.LinkInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LinkInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LinkInfo
         * @function getTypeUrl
         * @memberof im_proto.LinkInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LinkInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.LinkInfo";
        };

        return LinkInfo;
    })();

    im_proto.Button = (function() {

        /**
         * Properties of a Button.
         * @memberof im_proto
         * @interface IButton
         * @property {im_proto.IBaseText|null} [text] Button text
         * @property {im_proto.ILinkInfo|null} [link_info] Button link_info
         */

        /**
         * Constructs a new Button.
         * @memberof im_proto
         * @classdesc Represents a Button.
         * @implements IButton
         * @constructor
         * @param {im_proto.IButton=} [properties] Properties to set
         */
        function Button(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Button text.
         * @member {im_proto.IBaseText|null|undefined} text
         * @memberof im_proto.Button
         * @instance
         */
        Button.prototype.text = null;

        /**
         * Button link_info.
         * @member {im_proto.ILinkInfo|null|undefined} link_info
         * @memberof im_proto.Button
         * @instance
         */
        Button.prototype.link_info = null;

        /**
         * Creates a new Button instance using the specified properties.
         * @function create
         * @memberof im_proto.Button
         * @static
         * @param {im_proto.IButton=} [properties] Properties to set
         * @returns {im_proto.Button} Button instance
         */
        Button.create = function create(properties) {
            return new Button(properties);
        };

        /**
         * Encodes the specified Button message. Does not implicitly {@link im_proto.Button.verify|verify} messages.
         * @function encode
         * @memberof im_proto.Button
         * @static
         * @param {im_proto.IButton} message Button message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Button.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                $root.im_proto.BaseText.encode(message.text, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.link_info != null && Object.hasOwnProperty.call(message, "link_info"))
                $root.im_proto.LinkInfo.encode(message.link_info, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Button message, length delimited. Does not implicitly {@link im_proto.Button.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.Button
         * @static
         * @param {im_proto.IButton} message Button message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Button.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Button message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.Button
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.Button} Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Button.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.Button();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.text = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.link_info = $root.im_proto.LinkInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Button message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.Button
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.Button} Button
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Button.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Button message.
         * @function verify
         * @memberof im_proto.Button
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Button.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.text != null && message.hasOwnProperty("text")) {
                var error = $root.im_proto.BaseText.verify(message.text);
                if (error)
                    return "text." + error;
            }
            if (message.link_info != null && message.hasOwnProperty("link_info")) {
                var error = $root.im_proto.LinkInfo.verify(message.link_info);
                if (error)
                    return "link_info." + error;
            }
            return null;
        };

        /**
         * Creates a Button message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.Button
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.Button} Button
         */
        Button.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.Button)
                return object;
            var message = new $root.im_proto.Button();
            if (object.text != null) {
                if (typeof object.text !== "object")
                    throw TypeError(".im_proto.Button.text: object expected");
                message.text = $root.im_proto.BaseText.fromObject(object.text);
            }
            if (object.link_info != null) {
                if (typeof object.link_info !== "object")
                    throw TypeError(".im_proto.Button.link_info: object expected");
                message.link_info = $root.im_proto.LinkInfo.fromObject(object.link_info);
            }
            return message;
        };

        /**
         * Creates a plain object from a Button message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.Button
         * @static
         * @param {im_proto.Button} message Button
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Button.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.text = null;
                object.link_info = null;
            }
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = $root.im_proto.BaseText.toObject(message.text, options);
            if (message.link_info != null && message.hasOwnProperty("link_info"))
                object.link_info = $root.im_proto.LinkInfo.toObject(message.link_info, options);
            return object;
        };

        /**
         * Converts this Button to JSON.
         * @function toJSON
         * @memberof im_proto.Button
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Button.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Button
         * @function getTypeUrl
         * @memberof im_proto.Button
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Button.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.Button";
        };

        return Button;
    })();

    im_proto.BaseVideo = (function() {

        /**
         * Properties of a BaseVideo.
         * @memberof im_proto
         * @interface IBaseVideo
         * @property {string|null} [video_id] BaseVideo video_id
         * @property {number|null} [video_type] BaseVideo video_type
         * @property {im_proto.IBaseImage|null} [cover] BaseVideo cover
         * @property {string|null} [video_model] BaseVideo video_model
         * @property {im_proto.ILinkInfo|null} [linkInfo] BaseVideo linkInfo
         */

        /**
         * Constructs a new BaseVideo.
         * @memberof im_proto
         * @classdesc Represents a BaseVideo.
         * @implements IBaseVideo
         * @constructor
         * @param {im_proto.IBaseVideo=} [properties] Properties to set
         */
        function BaseVideo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseVideo video_id.
         * @member {string} video_id
         * @memberof im_proto.BaseVideo
         * @instance
         */
        BaseVideo.prototype.video_id = "";

        /**
         * BaseVideo video_type.
         * @member {number} video_type
         * @memberof im_proto.BaseVideo
         * @instance
         */
        BaseVideo.prototype.video_type = 0;

        /**
         * BaseVideo cover.
         * @member {im_proto.IBaseImage|null|undefined} cover
         * @memberof im_proto.BaseVideo
         * @instance
         */
        BaseVideo.prototype.cover = null;

        /**
         * BaseVideo video_model.
         * @member {string} video_model
         * @memberof im_proto.BaseVideo
         * @instance
         */
        BaseVideo.prototype.video_model = "";

        /**
         * BaseVideo linkInfo.
         * @member {im_proto.ILinkInfo|null|undefined} linkInfo
         * @memberof im_proto.BaseVideo
         * @instance
         */
        BaseVideo.prototype.linkInfo = null;

        /**
         * Creates a new BaseVideo instance using the specified properties.
         * @function create
         * @memberof im_proto.BaseVideo
         * @static
         * @param {im_proto.IBaseVideo=} [properties] Properties to set
         * @returns {im_proto.BaseVideo} BaseVideo instance
         */
        BaseVideo.create = function create(properties) {
            return new BaseVideo(properties);
        };

        /**
         * Encodes the specified BaseVideo message. Does not implicitly {@link im_proto.BaseVideo.verify|verify} messages.
         * @function encode
         * @memberof im_proto.BaseVideo
         * @static
         * @param {im_proto.IBaseVideo} message BaseVideo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseVideo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.video_id != null && Object.hasOwnProperty.call(message, "video_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.video_id);
            if (message.video_type != null && Object.hasOwnProperty.call(message, "video_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.video_type);
            if (message.cover != null && Object.hasOwnProperty.call(message, "cover"))
                $root.im_proto.BaseImage.encode(message.cover, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.video_model != null && Object.hasOwnProperty.call(message, "video_model"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.video_model);
            if (message.linkInfo != null && Object.hasOwnProperty.call(message, "linkInfo"))
                $root.im_proto.LinkInfo.encode(message.linkInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BaseVideo message, length delimited. Does not implicitly {@link im_proto.BaseVideo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.BaseVideo
         * @static
         * @param {im_proto.IBaseVideo} message BaseVideo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseVideo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseVideo message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.BaseVideo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.BaseVideo} BaseVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseVideo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.BaseVideo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.video_id = reader.string();
                        break;
                    }
                case 2: {
                        message.video_type = reader.int32();
                        break;
                    }
                case 3: {
                        message.cover = $root.im_proto.BaseImage.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.video_model = reader.string();
                        break;
                    }
                case 5: {
                        message.linkInfo = $root.im_proto.LinkInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseVideo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.BaseVideo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.BaseVideo} BaseVideo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseVideo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseVideo message.
         * @function verify
         * @memberof im_proto.BaseVideo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseVideo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.video_id != null && message.hasOwnProperty("video_id"))
                if (!$util.isString(message.video_id))
                    return "video_id: string expected";
            if (message.video_type != null && message.hasOwnProperty("video_type"))
                if (!$util.isInteger(message.video_type))
                    return "video_type: integer expected";
            if (message.cover != null && message.hasOwnProperty("cover")) {
                var error = $root.im_proto.BaseImage.verify(message.cover);
                if (error)
                    return "cover." + error;
            }
            if (message.video_model != null && message.hasOwnProperty("video_model"))
                if (!$util.isString(message.video_model))
                    return "video_model: string expected";
            if (message.linkInfo != null && message.hasOwnProperty("linkInfo")) {
                var error = $root.im_proto.LinkInfo.verify(message.linkInfo);
                if (error)
                    return "linkInfo." + error;
            }
            return null;
        };

        /**
         * Creates a BaseVideo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.BaseVideo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.BaseVideo} BaseVideo
         */
        BaseVideo.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.BaseVideo)
                return object;
            var message = new $root.im_proto.BaseVideo();
            if (object.video_id != null)
                message.video_id = String(object.video_id);
            if (object.video_type != null)
                message.video_type = object.video_type | 0;
            if (object.cover != null) {
                if (typeof object.cover !== "object")
                    throw TypeError(".im_proto.BaseVideo.cover: object expected");
                message.cover = $root.im_proto.BaseImage.fromObject(object.cover);
            }
            if (object.video_model != null)
                message.video_model = String(object.video_model);
            if (object.linkInfo != null) {
                if (typeof object.linkInfo !== "object")
                    throw TypeError(".im_proto.BaseVideo.linkInfo: object expected");
                message.linkInfo = $root.im_proto.LinkInfo.fromObject(object.linkInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a BaseVideo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.BaseVideo
         * @static
         * @param {im_proto.BaseVideo} message BaseVideo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseVideo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.video_id = "";
                object.video_type = 0;
                object.cover = null;
                object.video_model = "";
                object.linkInfo = null;
            }
            if (message.video_id != null && message.hasOwnProperty("video_id"))
                object.video_id = message.video_id;
            if (message.video_type != null && message.hasOwnProperty("video_type"))
                object.video_type = message.video_type;
            if (message.cover != null && message.hasOwnProperty("cover"))
                object.cover = $root.im_proto.BaseImage.toObject(message.cover, options);
            if (message.video_model != null && message.hasOwnProperty("video_model"))
                object.video_model = message.video_model;
            if (message.linkInfo != null && message.hasOwnProperty("linkInfo"))
                object.linkInfo = $root.im_proto.LinkInfo.toObject(message.linkInfo, options);
            return object;
        };

        /**
         * Converts this BaseVideo to JSON.
         * @function toJSON
         * @memberof im_proto.BaseVideo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseVideo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseVideo
         * @function getTypeUrl
         * @memberof im_proto.BaseVideo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseVideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.BaseVideo";
        };

        return BaseVideo;
    })();

    im_proto.BaseUser = (function() {

        /**
         * Properties of a BaseUser.
         * @memberof im_proto
         * @interface IBaseUser
         * @property {number|Long|null} [user_id] BaseUser user_id
         * @property {im_proto.IBaseText|null} [nickname] BaseUser nickname
         * @property {im_proto.IBaseText|null} [description] BaseUser description
         * @property {im_proto.IBaseImage|null} [avatar] BaseUser avatar
         * @property {im_proto.ILinkInfo|null} [link_info] BaseUser link_info
         * @property {im_proto.IBaseText|null} [username] BaseUser username
         * @property {number|null} [follower_count] BaseUser follower_count
         * @property {boolean|null} [is_verify] BaseUser is_verify
         */

        /**
         * Constructs a new BaseUser.
         * @memberof im_proto
         * @classdesc Represents a BaseUser.
         * @implements IBaseUser
         * @constructor
         * @param {im_proto.IBaseUser=} [properties] Properties to set
         */
        function BaseUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseUser user_id.
         * @member {number|Long} user_id
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BaseUser nickname.
         * @member {im_proto.IBaseText|null|undefined} nickname
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.nickname = null;

        /**
         * BaseUser description.
         * @member {im_proto.IBaseText|null|undefined} description
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.description = null;

        /**
         * BaseUser avatar.
         * @member {im_proto.IBaseImage|null|undefined} avatar
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.avatar = null;

        /**
         * BaseUser link_info.
         * @member {im_proto.ILinkInfo|null|undefined} link_info
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.link_info = null;

        /**
         * BaseUser username.
         * @member {im_proto.IBaseText|null|undefined} username
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.username = null;

        /**
         * BaseUser follower_count.
         * @member {number} follower_count
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.follower_count = 0;

        /**
         * BaseUser is_verify.
         * @member {boolean} is_verify
         * @memberof im_proto.BaseUser
         * @instance
         */
        BaseUser.prototype.is_verify = false;

        /**
         * Creates a new BaseUser instance using the specified properties.
         * @function create
         * @memberof im_proto.BaseUser
         * @static
         * @param {im_proto.IBaseUser=} [properties] Properties to set
         * @returns {im_proto.BaseUser} BaseUser instance
         */
        BaseUser.create = function create(properties) {
            return new BaseUser(properties);
        };

        /**
         * Encodes the specified BaseUser message. Does not implicitly {@link im_proto.BaseUser.verify|verify} messages.
         * @function encode
         * @memberof im_proto.BaseUser
         * @static
         * @param {im_proto.IBaseUser} message BaseUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.user_id);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                $root.im_proto.BaseText.encode(message.nickname, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                $root.im_proto.BaseText.encode(message.description, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                $root.im_proto.BaseImage.encode(message.avatar, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.link_info != null && Object.hasOwnProperty.call(message, "link_info"))
                $root.im_proto.LinkInfo.encode(message.link_info, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                $root.im_proto.BaseText.encode(message.username, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.follower_count != null && Object.hasOwnProperty.call(message, "follower_count"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.follower_count);
            if (message.is_verify != null && Object.hasOwnProperty.call(message, "is_verify"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is_verify);
            return writer;
        };

        /**
         * Encodes the specified BaseUser message, length delimited. Does not implicitly {@link im_proto.BaseUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.BaseUser
         * @static
         * @param {im_proto.IBaseUser} message BaseUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseUser message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.BaseUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.BaseUser} BaseUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.BaseUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.nickname = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.description = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.avatar = $root.im_proto.BaseImage.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.link_info = $root.im_proto.LinkInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.username = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.follower_count = reader.int32();
                        break;
                    }
                case 8: {
                        message.is_verify = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.BaseUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.BaseUser} BaseUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseUser message.
         * @function verify
         * @memberof im_proto.BaseUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id) && !(message.user_id && $util.isInteger(message.user_id.low) && $util.isInteger(message.user_id.high)))
                    return "user_id: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname")) {
                var error = $root.im_proto.BaseText.verify(message.nickname);
                if (error)
                    return "nickname." + error;
            }
            if (message.description != null && message.hasOwnProperty("description")) {
                var error = $root.im_proto.BaseText.verify(message.description);
                if (error)
                    return "description." + error;
            }
            if (message.avatar != null && message.hasOwnProperty("avatar")) {
                var error = $root.im_proto.BaseImage.verify(message.avatar);
                if (error)
                    return "avatar." + error;
            }
            if (message.link_info != null && message.hasOwnProperty("link_info")) {
                var error = $root.im_proto.LinkInfo.verify(message.link_info);
                if (error)
                    return "link_info." + error;
            }
            if (message.username != null && message.hasOwnProperty("username")) {
                var error = $root.im_proto.BaseText.verify(message.username);
                if (error)
                    return "username." + error;
            }
            if (message.follower_count != null && message.hasOwnProperty("follower_count"))
                if (!$util.isInteger(message.follower_count))
                    return "follower_count: integer expected";
            if (message.is_verify != null && message.hasOwnProperty("is_verify"))
                if (typeof message.is_verify !== "boolean")
                    return "is_verify: boolean expected";
            return null;
        };

        /**
         * Creates a BaseUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.BaseUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.BaseUser} BaseUser
         */
        BaseUser.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.BaseUser)
                return object;
            var message = new $root.im_proto.BaseUser();
            if (object.user_id != null)
                if ($util.Long)
                    (message.user_id = $util.Long.fromValue(object.user_id)).unsigned = false;
                else if (typeof object.user_id === "string")
                    message.user_id = parseInt(object.user_id, 10);
                else if (typeof object.user_id === "number")
                    message.user_id = object.user_id;
                else if (typeof object.user_id === "object")
                    message.user_id = new $util.LongBits(object.user_id.low >>> 0, object.user_id.high >>> 0).toNumber();
            if (object.nickname != null) {
                if (typeof object.nickname !== "object")
                    throw TypeError(".im_proto.BaseUser.nickname: object expected");
                message.nickname = $root.im_proto.BaseText.fromObject(object.nickname);
            }
            if (object.description != null) {
                if (typeof object.description !== "object")
                    throw TypeError(".im_proto.BaseUser.description: object expected");
                message.description = $root.im_proto.BaseText.fromObject(object.description);
            }
            if (object.avatar != null) {
                if (typeof object.avatar !== "object")
                    throw TypeError(".im_proto.BaseUser.avatar: object expected");
                message.avatar = $root.im_proto.BaseImage.fromObject(object.avatar);
            }
            if (object.link_info != null) {
                if (typeof object.link_info !== "object")
                    throw TypeError(".im_proto.BaseUser.link_info: object expected");
                message.link_info = $root.im_proto.LinkInfo.fromObject(object.link_info);
            }
            if (object.username != null) {
                if (typeof object.username !== "object")
                    throw TypeError(".im_proto.BaseUser.username: object expected");
                message.username = $root.im_proto.BaseText.fromObject(object.username);
            }
            if (object.follower_count != null)
                message.follower_count = object.follower_count | 0;
            if (object.is_verify != null)
                message.is_verify = Boolean(object.is_verify);
            return message;
        };

        /**
         * Creates a plain object from a BaseUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.BaseUser
         * @static
         * @param {im_proto.BaseUser} message BaseUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.user_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.user_id = options.longs === String ? "0" : 0;
                object.nickname = null;
                object.description = null;
                object.avatar = null;
                object.link_info = null;
                object.username = null;
                object.follower_count = 0;
                object.is_verify = false;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (typeof message.user_id === "number")
                    object.user_id = options.longs === String ? String(message.user_id) : message.user_id;
                else
                    object.user_id = options.longs === String ? $util.Long.prototype.toString.call(message.user_id) : options.longs === Number ? new $util.LongBits(message.user_id.low >>> 0, message.user_id.high >>> 0).toNumber() : message.user_id;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = $root.im_proto.BaseText.toObject(message.nickname, options);
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = $root.im_proto.BaseText.toObject(message.description, options);
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = $root.im_proto.BaseImage.toObject(message.avatar, options);
            if (message.link_info != null && message.hasOwnProperty("link_info"))
                object.link_info = $root.im_proto.LinkInfo.toObject(message.link_info, options);
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = $root.im_proto.BaseText.toObject(message.username, options);
            if (message.follower_count != null && message.hasOwnProperty("follower_count"))
                object.follower_count = message.follower_count;
            if (message.is_verify != null && message.hasOwnProperty("is_verify"))
                object.is_verify = message.is_verify;
            return object;
        };

        /**
         * Converts this BaseUser to JSON.
         * @function toJSON
         * @memberof im_proto.BaseUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseUser
         * @function getTypeUrl
         * @memberof im_proto.BaseUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.BaseUser";
        };

        return BaseUser;
    })();

    im_proto.FallbackInfo = (function() {

        /**
         * Properties of a FallbackInfo.
         * @memberof im_proto
         * @interface IFallbackInfo
         * @property {im_proto.IBaseImage|null} [image] FallbackInfo image
         * @property {im_proto.IBaseText|null} [text] FallbackInfo text
         * @property {im_proto.ILinkInfo|null} [link_info] FallbackInfo link_info
         */

        /**
         * Constructs a new FallbackInfo.
         * @memberof im_proto
         * @classdesc Represents a FallbackInfo.
         * @implements IFallbackInfo
         * @constructor
         * @param {im_proto.IFallbackInfo=} [properties] Properties to set
         */
        function FallbackInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FallbackInfo image.
         * @member {im_proto.IBaseImage|null|undefined} image
         * @memberof im_proto.FallbackInfo
         * @instance
         */
        FallbackInfo.prototype.image = null;

        /**
         * FallbackInfo text.
         * @member {im_proto.IBaseText|null|undefined} text
         * @memberof im_proto.FallbackInfo
         * @instance
         */
        FallbackInfo.prototype.text = null;

        /**
         * FallbackInfo link_info.
         * @member {im_proto.ILinkInfo|null|undefined} link_info
         * @memberof im_proto.FallbackInfo
         * @instance
         */
        FallbackInfo.prototype.link_info = null;

        /**
         * Creates a new FallbackInfo instance using the specified properties.
         * @function create
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {im_proto.IFallbackInfo=} [properties] Properties to set
         * @returns {im_proto.FallbackInfo} FallbackInfo instance
         */
        FallbackInfo.create = function create(properties) {
            return new FallbackInfo(properties);
        };

        /**
         * Encodes the specified FallbackInfo message. Does not implicitly {@link im_proto.FallbackInfo.verify|verify} messages.
         * @function encode
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {im_proto.IFallbackInfo} message FallbackInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FallbackInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                $root.im_proto.BaseImage.encode(message.image, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                $root.im_proto.BaseText.encode(message.text, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.link_info != null && Object.hasOwnProperty.call(message, "link_info"))
                $root.im_proto.LinkInfo.encode(message.link_info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FallbackInfo message, length delimited. Does not implicitly {@link im_proto.FallbackInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {im_proto.IFallbackInfo} message FallbackInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FallbackInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FallbackInfo message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.FallbackInfo} FallbackInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FallbackInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.FallbackInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.image = $root.im_proto.BaseImage.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.text = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.link_info = $root.im_proto.LinkInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FallbackInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.FallbackInfo} FallbackInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FallbackInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FallbackInfo message.
         * @function verify
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FallbackInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.image != null && message.hasOwnProperty("image")) {
                var error = $root.im_proto.BaseImage.verify(message.image);
                if (error)
                    return "image." + error;
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                var error = $root.im_proto.BaseText.verify(message.text);
                if (error)
                    return "text." + error;
            }
            if (message.link_info != null && message.hasOwnProperty("link_info")) {
                var error = $root.im_proto.LinkInfo.verify(message.link_info);
                if (error)
                    return "link_info." + error;
            }
            return null;
        };

        /**
         * Creates a FallbackInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.FallbackInfo} FallbackInfo
         */
        FallbackInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.FallbackInfo)
                return object;
            var message = new $root.im_proto.FallbackInfo();
            if (object.image != null) {
                if (typeof object.image !== "object")
                    throw TypeError(".im_proto.FallbackInfo.image: object expected");
                message.image = $root.im_proto.BaseImage.fromObject(object.image);
            }
            if (object.text != null) {
                if (typeof object.text !== "object")
                    throw TypeError(".im_proto.FallbackInfo.text: object expected");
                message.text = $root.im_proto.BaseText.fromObject(object.text);
            }
            if (object.link_info != null) {
                if (typeof object.link_info !== "object")
                    throw TypeError(".im_proto.FallbackInfo.link_info: object expected");
                message.link_info = $root.im_proto.LinkInfo.fromObject(object.link_info);
            }
            return message;
        };

        /**
         * Creates a plain object from a FallbackInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {im_proto.FallbackInfo} message FallbackInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FallbackInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.image = null;
                object.text = null;
                object.link_info = null;
            }
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = $root.im_proto.BaseImage.toObject(message.image, options);
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = $root.im_proto.BaseText.toObject(message.text, options);
            if (message.link_info != null && message.hasOwnProperty("link_info"))
                object.link_info = $root.im_proto.LinkInfo.toObject(message.link_info, options);
            return object;
        };

        /**
         * Converts this FallbackInfo to JSON.
         * @function toJSON
         * @memberof im_proto.FallbackInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FallbackInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FallbackInfo
         * @function getTypeUrl
         * @memberof im_proto.FallbackInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FallbackInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.FallbackInfo";
        };

        return FallbackInfo;
    })();

    im_proto.PreviewHint = (function() {

        /**
         * Properties of a PreviewHint.
         * @memberof im_proto
         * @interface IPreviewHint
         * @property {im_proto.IBaseText|null} [sender_preview_text] PreviewHint sender_preview_text
         * @property {im_proto.IBaseText|null} [receiver_preview_text] PreviewHint receiver_preview_text
         * @property {im_proto.IBaseText|null} [quote_preview_text] PreviewHint quote_preview_text
         */

        /**
         * Constructs a new PreviewHint.
         * @memberof im_proto
         * @classdesc Represents a PreviewHint.
         * @implements IPreviewHint
         * @constructor
         * @param {im_proto.IPreviewHint=} [properties] Properties to set
         */
        function PreviewHint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreviewHint sender_preview_text.
         * @member {im_proto.IBaseText|null|undefined} sender_preview_text
         * @memberof im_proto.PreviewHint
         * @instance
         */
        PreviewHint.prototype.sender_preview_text = null;

        /**
         * PreviewHint receiver_preview_text.
         * @member {im_proto.IBaseText|null|undefined} receiver_preview_text
         * @memberof im_proto.PreviewHint
         * @instance
         */
        PreviewHint.prototype.receiver_preview_text = null;

        /**
         * PreviewHint quote_preview_text.
         * @member {im_proto.IBaseText|null|undefined} quote_preview_text
         * @memberof im_proto.PreviewHint
         * @instance
         */
        PreviewHint.prototype.quote_preview_text = null;

        /**
         * Creates a new PreviewHint instance using the specified properties.
         * @function create
         * @memberof im_proto.PreviewHint
         * @static
         * @param {im_proto.IPreviewHint=} [properties] Properties to set
         * @returns {im_proto.PreviewHint} PreviewHint instance
         */
        PreviewHint.create = function create(properties) {
            return new PreviewHint(properties);
        };

        /**
         * Encodes the specified PreviewHint message. Does not implicitly {@link im_proto.PreviewHint.verify|verify} messages.
         * @function encode
         * @memberof im_proto.PreviewHint
         * @static
         * @param {im_proto.IPreviewHint} message PreviewHint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreviewHint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sender_preview_text != null && Object.hasOwnProperty.call(message, "sender_preview_text"))
                $root.im_proto.BaseText.encode(message.sender_preview_text, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.receiver_preview_text != null && Object.hasOwnProperty.call(message, "receiver_preview_text"))
                $root.im_proto.BaseText.encode(message.receiver_preview_text, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.quote_preview_text != null && Object.hasOwnProperty.call(message, "quote_preview_text"))
                $root.im_proto.BaseText.encode(message.quote_preview_text, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PreviewHint message, length delimited. Does not implicitly {@link im_proto.PreviewHint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.PreviewHint
         * @static
         * @param {im_proto.IPreviewHint} message PreviewHint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreviewHint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreviewHint message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.PreviewHint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.PreviewHint} PreviewHint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreviewHint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.PreviewHint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sender_preview_text = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.receiver_preview_text = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.quote_preview_text = $root.im_proto.BaseText.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PreviewHint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.PreviewHint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.PreviewHint} PreviewHint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreviewHint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreviewHint message.
         * @function verify
         * @memberof im_proto.PreviewHint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreviewHint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sender_preview_text != null && message.hasOwnProperty("sender_preview_text")) {
                var error = $root.im_proto.BaseText.verify(message.sender_preview_text);
                if (error)
                    return "sender_preview_text." + error;
            }
            if (message.receiver_preview_text != null && message.hasOwnProperty("receiver_preview_text")) {
                var error = $root.im_proto.BaseText.verify(message.receiver_preview_text);
                if (error)
                    return "receiver_preview_text." + error;
            }
            if (message.quote_preview_text != null && message.hasOwnProperty("quote_preview_text")) {
                var error = $root.im_proto.BaseText.verify(message.quote_preview_text);
                if (error)
                    return "quote_preview_text." + error;
            }
            return null;
        };

        /**
         * Creates a PreviewHint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.PreviewHint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.PreviewHint} PreviewHint
         */
        PreviewHint.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.PreviewHint)
                return object;
            var message = new $root.im_proto.PreviewHint();
            if (object.sender_preview_text != null) {
                if (typeof object.sender_preview_text !== "object")
                    throw TypeError(".im_proto.PreviewHint.sender_preview_text: object expected");
                message.sender_preview_text = $root.im_proto.BaseText.fromObject(object.sender_preview_text);
            }
            if (object.receiver_preview_text != null) {
                if (typeof object.receiver_preview_text !== "object")
                    throw TypeError(".im_proto.PreviewHint.receiver_preview_text: object expected");
                message.receiver_preview_text = $root.im_proto.BaseText.fromObject(object.receiver_preview_text);
            }
            if (object.quote_preview_text != null) {
                if (typeof object.quote_preview_text !== "object")
                    throw TypeError(".im_proto.PreviewHint.quote_preview_text: object expected");
                message.quote_preview_text = $root.im_proto.BaseText.fromObject(object.quote_preview_text);
            }
            return message;
        };

        /**
         * Creates a plain object from a PreviewHint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.PreviewHint
         * @static
         * @param {im_proto.PreviewHint} message PreviewHint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreviewHint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sender_preview_text = null;
                object.receiver_preview_text = null;
                object.quote_preview_text = null;
            }
            if (message.sender_preview_text != null && message.hasOwnProperty("sender_preview_text"))
                object.sender_preview_text = $root.im_proto.BaseText.toObject(message.sender_preview_text, options);
            if (message.receiver_preview_text != null && message.hasOwnProperty("receiver_preview_text"))
                object.receiver_preview_text = $root.im_proto.BaseText.toObject(message.receiver_preview_text, options);
            if (message.quote_preview_text != null && message.hasOwnProperty("quote_preview_text"))
                object.quote_preview_text = $root.im_proto.BaseText.toObject(message.quote_preview_text, options);
            return object;
        };

        /**
         * Converts this PreviewHint to JSON.
         * @function toJSON
         * @memberof im_proto.PreviewHint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreviewHint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PreviewHint
         * @function getTypeUrl
         * @memberof im_proto.PreviewHint
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PreviewHint.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.PreviewHint";
        };

        return PreviewHint;
    })();

    im_proto.BaseReq = (function() {

        /**
         * Properties of a BaseReq.
         * @memberof im_proto
         * @interface IBaseReq
         */

        /**
         * Constructs a new BaseReq.
         * @memberof im_proto
         * @classdesc Represents a BaseReq.
         * @implements IBaseReq
         * @constructor
         * @param {im_proto.IBaseReq=} [properties] Properties to set
         */
        function BaseReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new BaseReq instance using the specified properties.
         * @function create
         * @memberof im_proto.BaseReq
         * @static
         * @param {im_proto.IBaseReq=} [properties] Properties to set
         * @returns {im_proto.BaseReq} BaseReq instance
         */
        BaseReq.create = function create(properties) {
            return new BaseReq(properties);
        };

        /**
         * Encodes the specified BaseReq message. Does not implicitly {@link im_proto.BaseReq.verify|verify} messages.
         * @function encode
         * @memberof im_proto.BaseReq
         * @static
         * @param {im_proto.IBaseReq} message BaseReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified BaseReq message, length delimited. Does not implicitly {@link im_proto.BaseReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.BaseReq
         * @static
         * @param {im_proto.IBaseReq} message BaseReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseReq message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.BaseReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.BaseReq} BaseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.BaseReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.BaseReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.BaseReq} BaseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseReq message.
         * @function verify
         * @memberof im_proto.BaseReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a BaseReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.BaseReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.BaseReq} BaseReq
         */
        BaseReq.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.BaseReq)
                return object;
            return new $root.im_proto.BaseReq();
        };

        /**
         * Creates a plain object from a BaseReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.BaseReq
         * @static
         * @param {im_proto.BaseReq} message BaseReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this BaseReq to JSON.
         * @function toJSON
         * @memberof im_proto.BaseReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseReq
         * @function getTypeUrl
         * @memberof im_proto.BaseReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.BaseReq";
        };

        return BaseReq;
    })();

    im_proto.BaseResp = (function() {

        /**
         * Properties of a BaseResp.
         * @memberof im_proto
         * @interface IBaseResp
         * @property {Array.<string>|null} [context_menu] BaseResp context_menu
         * @property {number|Long|null} [min_version] BaseResp min_version
         * @property {Object.<string,string>|null} [extra] BaseResp extra
         */

        /**
         * Constructs a new BaseResp.
         * @memberof im_proto
         * @classdesc Represents a BaseResp.
         * @implements IBaseResp
         * @constructor
         * @param {im_proto.IBaseResp=} [properties] Properties to set
         */
        function BaseResp(properties) {
            this.context_menu = [];
            this.extra = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseResp context_menu.
         * @member {Array.<string>} context_menu
         * @memberof im_proto.BaseResp
         * @instance
         */
        BaseResp.prototype.context_menu = $util.emptyArray;

        /**
         * BaseResp min_version.
         * @member {number|Long} min_version
         * @memberof im_proto.BaseResp
         * @instance
         */
        BaseResp.prototype.min_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BaseResp extra.
         * @member {Object.<string,string>} extra
         * @memberof im_proto.BaseResp
         * @instance
         */
        BaseResp.prototype.extra = $util.emptyObject;

        /**
         * Creates a new BaseResp instance using the specified properties.
         * @function create
         * @memberof im_proto.BaseResp
         * @static
         * @param {im_proto.IBaseResp=} [properties] Properties to set
         * @returns {im_proto.BaseResp} BaseResp instance
         */
        BaseResp.create = function create(properties) {
            return new BaseResp(properties);
        };

        /**
         * Encodes the specified BaseResp message. Does not implicitly {@link im_proto.BaseResp.verify|verify} messages.
         * @function encode
         * @memberof im_proto.BaseResp
         * @static
         * @param {im_proto.IBaseResp} message BaseResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.context_menu != null && message.context_menu.length)
                for (var i = 0; i < message.context_menu.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.context_menu[i]);
            if (message.min_version != null && Object.hasOwnProperty.call(message, "min_version"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.min_version);
            if (message.extra != null && Object.hasOwnProperty.call(message, "extra"))
                for (var keys = Object.keys(message.extra), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.extra[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BaseResp message, length delimited. Does not implicitly {@link im_proto.BaseResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.BaseResp
         * @static
         * @param {im_proto.IBaseResp} message BaseResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseResp message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.BaseResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.BaseResp} BaseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.BaseResp(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.context_menu && message.context_menu.length))
                            message.context_menu = [];
                        message.context_menu.push(reader.string());
                        break;
                    }
                case 3: {
                        message.min_version = reader.int64();
                        break;
                    }
                case 4: {
                        if (message.extra === $util.emptyObject)
                            message.extra = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.extra[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BaseResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.BaseResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.BaseResp} BaseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseResp message.
         * @function verify
         * @memberof im_proto.BaseResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.context_menu != null && message.hasOwnProperty("context_menu")) {
                if (!Array.isArray(message.context_menu))
                    return "context_menu: array expected";
                for (var i = 0; i < message.context_menu.length; ++i)
                    if (!$util.isString(message.context_menu[i]))
                        return "context_menu: string[] expected";
            }
            if (message.min_version != null && message.hasOwnProperty("min_version"))
                if (!$util.isInteger(message.min_version) && !(message.min_version && $util.isInteger(message.min_version.low) && $util.isInteger(message.min_version.high)))
                    return "min_version: integer|Long expected";
            if (message.extra != null && message.hasOwnProperty("extra")) {
                if (!$util.isObject(message.extra))
                    return "extra: object expected";
                var key = Object.keys(message.extra);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.extra[key[i]]))
                        return "extra: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a BaseResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.BaseResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.BaseResp} BaseResp
         */
        BaseResp.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.BaseResp)
                return object;
            var message = new $root.im_proto.BaseResp();
            if (object.context_menu) {
                if (!Array.isArray(object.context_menu))
                    throw TypeError(".im_proto.BaseResp.context_menu: array expected");
                message.context_menu = [];
                for (var i = 0; i < object.context_menu.length; ++i)
                    message.context_menu[i] = String(object.context_menu[i]);
            }
            if (object.min_version != null)
                if ($util.Long)
                    (message.min_version = $util.Long.fromValue(object.min_version)).unsigned = false;
                else if (typeof object.min_version === "string")
                    message.min_version = parseInt(object.min_version, 10);
                else if (typeof object.min_version === "number")
                    message.min_version = object.min_version;
                else if (typeof object.min_version === "object")
                    message.min_version = new $util.LongBits(object.min_version.low >>> 0, object.min_version.high >>> 0).toNumber();
            if (object.extra) {
                if (typeof object.extra !== "object")
                    throw TypeError(".im_proto.BaseResp.extra: object expected");
                message.extra = {};
                for (var keys = Object.keys(object.extra), i = 0; i < keys.length; ++i)
                    message.extra[keys[i]] = String(object.extra[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a BaseResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.BaseResp
         * @static
         * @param {im_proto.BaseResp} message BaseResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.context_menu = [];
            if (options.objects || options.defaults)
                object.extra = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.min_version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.min_version = options.longs === String ? "0" : 0;
            if (message.context_menu && message.context_menu.length) {
                object.context_menu = [];
                for (var j = 0; j < message.context_menu.length; ++j)
                    object.context_menu[j] = message.context_menu[j];
            }
            if (message.min_version != null && message.hasOwnProperty("min_version"))
                if (typeof message.min_version === "number")
                    object.min_version = options.longs === String ? String(message.min_version) : message.min_version;
                else
                    object.min_version = options.longs === String ? $util.Long.prototype.toString.call(message.min_version) : options.longs === Number ? new $util.LongBits(message.min_version.low >>> 0, message.min_version.high >>> 0).toNumber() : message.min_version;
            var keys2;
            if (message.extra && (keys2 = Object.keys(message.extra)).length) {
                object.extra = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.extra[keys2[j]] = message.extra[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this BaseResp to JSON.
         * @function toJSON
         * @memberof im_proto.BaseResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BaseResp
         * @function getTypeUrl
         * @memberof im_proto.BaseResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BaseResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.BaseResp";
        };

        return BaseResp;
    })();

    im_proto.CreateConversationV2RequestBody = (function() {

        /**
         * Properties of a CreateConversationV2RequestBody.
         * @memberof im_proto
         * @interface ICreateConversationV2RequestBody
         * @property {number|null} [conversation_type] CreateConversationV2RequestBody conversation_type
         * @property {Array.<number|Long>|null} [participants] CreateConversationV2RequestBody participants
         * @property {boolean|null} [persistent] CreateConversationV2RequestBody persistent
         * @property {string|null} [idempotent_id] CreateConversationV2RequestBody idempotent_id
         * @property {string|null} [name] CreateConversationV2RequestBody name
         * @property {string|null} [avatar_url] CreateConversationV2RequestBody avatar_url
         * @property {string|null} [description] CreateConversationV2RequestBody description
         * @property {Object.<string,string>|null} [biz_ext] CreateConversationV2RequestBody biz_ext
         * @property {string|null} [biz] CreateConversationV2RequestBody biz
         * @property {string|null} [channel] CreateConversationV2RequestBody channel
         */

        /**
         * Constructs a new CreateConversationV2RequestBody.
         * @memberof im_proto
         * @classdesc Represents a CreateConversationV2RequestBody.
         * @implements ICreateConversationV2RequestBody
         * @constructor
         * @param {im_proto.ICreateConversationV2RequestBody=} [properties] Properties to set
         */
        function CreateConversationV2RequestBody(properties) {
            this.participants = [];
            this.biz_ext = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateConversationV2RequestBody conversation_type.
         * @member {number} conversation_type
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.conversation_type = 0;

        /**
         * CreateConversationV2RequestBody participants.
         * @member {Array.<number|Long>} participants
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.participants = $util.emptyArray;

        /**
         * CreateConversationV2RequestBody persistent.
         * @member {boolean} persistent
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.persistent = false;

        /**
         * CreateConversationV2RequestBody idempotent_id.
         * @member {string} idempotent_id
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.idempotent_id = "";

        /**
         * CreateConversationV2RequestBody name.
         * @member {string} name
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.name = "";

        /**
         * CreateConversationV2RequestBody avatar_url.
         * @member {string} avatar_url
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.avatar_url = "";

        /**
         * CreateConversationV2RequestBody description.
         * @member {string} description
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.description = "";

        /**
         * CreateConversationV2RequestBody biz_ext.
         * @member {Object.<string,string>} biz_ext
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.biz_ext = $util.emptyObject;

        /**
         * CreateConversationV2RequestBody biz.
         * @member {string} biz
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.biz = "";

        /**
         * CreateConversationV2RequestBody channel.
         * @member {string} channel
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         */
        CreateConversationV2RequestBody.prototype.channel = "";

        /**
         * Creates a new CreateConversationV2RequestBody instance using the specified properties.
         * @function create
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {im_proto.ICreateConversationV2RequestBody=} [properties] Properties to set
         * @returns {im_proto.CreateConversationV2RequestBody} CreateConversationV2RequestBody instance
         */
        CreateConversationV2RequestBody.create = function create(properties) {
            return new CreateConversationV2RequestBody(properties);
        };

        /**
         * Encodes the specified CreateConversationV2RequestBody message. Does not implicitly {@link im_proto.CreateConversationV2RequestBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {im_proto.ICreateConversationV2RequestBody} message CreateConversationV2RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateConversationV2RequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_type != null && Object.hasOwnProperty.call(message, "conversation_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.conversation_type);
            if (message.participants != null && message.participants.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.participants.length; ++i)
                    writer.int64(message.participants[i]);
                writer.ldelim();
            }
            if (message.persistent != null && Object.hasOwnProperty.call(message, "persistent"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.persistent);
            if (message.idempotent_id != null && Object.hasOwnProperty.call(message, "idempotent_id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.idempotent_id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
            if (message.avatar_url != null && Object.hasOwnProperty.call(message, "avatar_url"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.avatar_url);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.description);
            if (message.biz_ext != null && Object.hasOwnProperty.call(message, "biz_ext"))
                for (var keys = Object.keys(message.biz_ext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.biz_ext[keys[i]]).ldelim();
            if (message.biz != null && Object.hasOwnProperty.call(message, "biz"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.biz);
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.channel);
            return writer;
        };

        /**
         * Encodes the specified CreateConversationV2RequestBody message, length delimited. Does not implicitly {@link im_proto.CreateConversationV2RequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {im_proto.ICreateConversationV2RequestBody} message CreateConversationV2RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateConversationV2RequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateConversationV2RequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.CreateConversationV2RequestBody} CreateConversationV2RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateConversationV2RequestBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.CreateConversationV2RequestBody(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_type = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.participants && message.participants.length))
                            message.participants = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.participants.push(reader.int64());
                        } else
                            message.participants.push(reader.int64());
                        break;
                    }
                case 3: {
                        message.persistent = reader.bool();
                        break;
                    }
                case 4: {
                        message.idempotent_id = reader.string();
                        break;
                    }
                case 6: {
                        message.name = reader.string();
                        break;
                    }
                case 7: {
                        message.avatar_url = reader.string();
                        break;
                    }
                case 8: {
                        message.description = reader.string();
                        break;
                    }
                case 11: {
                        if (message.biz_ext === $util.emptyObject)
                            message.biz_ext = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.biz_ext[key] = value;
                        break;
                    }
                case 12: {
                        message.biz = reader.string();
                        break;
                    }
                case 13: {
                        message.channel = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateConversationV2RequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.CreateConversationV2RequestBody} CreateConversationV2RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateConversationV2RequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateConversationV2RequestBody message.
         * @function verify
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateConversationV2RequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                if (!$util.isInteger(message.conversation_type))
                    return "conversation_type: integer expected";
            if (message.participants != null && message.hasOwnProperty("participants")) {
                if (!Array.isArray(message.participants))
                    return "participants: array expected";
                for (var i = 0; i < message.participants.length; ++i)
                    if (!$util.isInteger(message.participants[i]) && !(message.participants[i] && $util.isInteger(message.participants[i].low) && $util.isInteger(message.participants[i].high)))
                        return "participants: integer|Long[] expected";
            }
            if (message.persistent != null && message.hasOwnProperty("persistent"))
                if (typeof message.persistent !== "boolean")
                    return "persistent: boolean expected";
            if (message.idempotent_id != null && message.hasOwnProperty("idempotent_id"))
                if (!$util.isString(message.idempotent_id))
                    return "idempotent_id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.avatar_url != null && message.hasOwnProperty("avatar_url"))
                if (!$util.isString(message.avatar_url))
                    return "avatar_url: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.biz_ext != null && message.hasOwnProperty("biz_ext")) {
                if (!$util.isObject(message.biz_ext))
                    return "biz_ext: object expected";
                var key = Object.keys(message.biz_ext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.biz_ext[key[i]]))
                        return "biz_ext: string{k:string} expected";
            }
            if (message.biz != null && message.hasOwnProperty("biz"))
                if (!$util.isString(message.biz))
                    return "biz: string expected";
            if (message.channel != null && message.hasOwnProperty("channel"))
                if (!$util.isString(message.channel))
                    return "channel: string expected";
            return null;
        };

        /**
         * Creates a CreateConversationV2RequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.CreateConversationV2RequestBody} CreateConversationV2RequestBody
         */
        CreateConversationV2RequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.CreateConversationV2RequestBody)
                return object;
            var message = new $root.im_proto.CreateConversationV2RequestBody();
            if (object.conversation_type != null)
                message.conversation_type = object.conversation_type | 0;
            if (object.participants) {
                if (!Array.isArray(object.participants))
                    throw TypeError(".im_proto.CreateConversationV2RequestBody.participants: array expected");
                message.participants = [];
                for (var i = 0; i < object.participants.length; ++i)
                    if ($util.Long)
                        (message.participants[i] = $util.Long.fromValue(object.participants[i])).unsigned = false;
                    else if (typeof object.participants[i] === "string")
                        message.participants[i] = parseInt(object.participants[i], 10);
                    else if (typeof object.participants[i] === "number")
                        message.participants[i] = object.participants[i];
                    else if (typeof object.participants[i] === "object")
                        message.participants[i] = new $util.LongBits(object.participants[i].low >>> 0, object.participants[i].high >>> 0).toNumber();
            }
            if (object.persistent != null)
                message.persistent = Boolean(object.persistent);
            if (object.idempotent_id != null)
                message.idempotent_id = String(object.idempotent_id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.avatar_url != null)
                message.avatar_url = String(object.avatar_url);
            if (object.description != null)
                message.description = String(object.description);
            if (object.biz_ext) {
                if (typeof object.biz_ext !== "object")
                    throw TypeError(".im_proto.CreateConversationV2RequestBody.biz_ext: object expected");
                message.biz_ext = {};
                for (var keys = Object.keys(object.biz_ext), i = 0; i < keys.length; ++i)
                    message.biz_ext[keys[i]] = String(object.biz_ext[keys[i]]);
            }
            if (object.biz != null)
                message.biz = String(object.biz);
            if (object.channel != null)
                message.channel = String(object.channel);
            return message;
        };

        /**
         * Creates a plain object from a CreateConversationV2RequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {im_proto.CreateConversationV2RequestBody} message CreateConversationV2RequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateConversationV2RequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.participants = [];
            if (options.objects || options.defaults)
                object.biz_ext = {};
            if (options.defaults) {
                object.conversation_type = 0;
                object.persistent = false;
                object.idempotent_id = "";
                object.name = "";
                object.avatar_url = "";
                object.description = "";
                object.biz = "";
                object.channel = "";
            }
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                object.conversation_type = message.conversation_type;
            if (message.participants && message.participants.length) {
                object.participants = [];
                for (var j = 0; j < message.participants.length; ++j)
                    if (typeof message.participants[j] === "number")
                        object.participants[j] = options.longs === String ? String(message.participants[j]) : message.participants[j];
                    else
                        object.participants[j] = options.longs === String ? $util.Long.prototype.toString.call(message.participants[j]) : options.longs === Number ? new $util.LongBits(message.participants[j].low >>> 0, message.participants[j].high >>> 0).toNumber() : message.participants[j];
            }
            if (message.persistent != null && message.hasOwnProperty("persistent"))
                object.persistent = message.persistent;
            if (message.idempotent_id != null && message.hasOwnProperty("idempotent_id"))
                object.idempotent_id = message.idempotent_id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.avatar_url != null && message.hasOwnProperty("avatar_url"))
                object.avatar_url = message.avatar_url;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            var keys2;
            if (message.biz_ext && (keys2 = Object.keys(message.biz_ext)).length) {
                object.biz_ext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.biz_ext[keys2[j]] = message.biz_ext[keys2[j]];
            }
            if (message.biz != null && message.hasOwnProperty("biz"))
                object.biz = message.biz;
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            return object;
        };

        /**
         * Converts this CreateConversationV2RequestBody to JSON.
         * @function toJSON
         * @memberof im_proto.CreateConversationV2RequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateConversationV2RequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateConversationV2RequestBody
         * @function getTypeUrl
         * @memberof im_proto.CreateConversationV2RequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateConversationV2RequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.CreateConversationV2RequestBody";
        };

        return CreateConversationV2RequestBody;
    })();

    im_proto.GetConversationInfoV2RequestBody = (function() {

        /**
         * Properties of a GetConversationInfoV2RequestBody.
         * @memberof im_proto
         * @interface IGetConversationInfoV2RequestBody
         * @property {string|null} [conversation_id] GetConversationInfoV2RequestBody conversation_id
         * @property {number|Long|null} [conversation_short_id] GetConversationInfoV2RequestBody conversation_short_id
         * @property {number|null} [conversation_type] GetConversationInfoV2RequestBody conversation_type
         */

        /**
         * Constructs a new GetConversationInfoV2RequestBody.
         * @memberof im_proto
         * @classdesc Represents a GetConversationInfoV2RequestBody.
         * @implements IGetConversationInfoV2RequestBody
         * @constructor
         * @param {im_proto.IGetConversationInfoV2RequestBody=} [properties] Properties to set
         */
        function GetConversationInfoV2RequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetConversationInfoV2RequestBody conversation_id.
         * @member {string} conversation_id
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @instance
         */
        GetConversationInfoV2RequestBody.prototype.conversation_id = "";

        /**
         * GetConversationInfoV2RequestBody conversation_short_id.
         * @member {number|Long} conversation_short_id
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @instance
         */
        GetConversationInfoV2RequestBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetConversationInfoV2RequestBody conversation_type.
         * @member {number} conversation_type
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @instance
         */
        GetConversationInfoV2RequestBody.prototype.conversation_type = 0;

        /**
         * Creates a new GetConversationInfoV2RequestBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {im_proto.IGetConversationInfoV2RequestBody=} [properties] Properties to set
         * @returns {im_proto.GetConversationInfoV2RequestBody} GetConversationInfoV2RequestBody instance
         */
        GetConversationInfoV2RequestBody.create = function create(properties) {
            return new GetConversationInfoV2RequestBody(properties);
        };

        /**
         * Encodes the specified GetConversationInfoV2RequestBody message. Does not implicitly {@link im_proto.GetConversationInfoV2RequestBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {im_proto.IGetConversationInfoV2RequestBody} message GetConversationInfoV2RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoV2RequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversation_id);
            if (message.conversation_short_id != null && Object.hasOwnProperty.call(message, "conversation_short_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.conversation_short_id);
            if (message.conversation_type != null && Object.hasOwnProperty.call(message, "conversation_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.conversation_type);
            return writer;
        };

        /**
         * Encodes the specified GetConversationInfoV2RequestBody message, length delimited. Does not implicitly {@link im_proto.GetConversationInfoV2RequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {im_proto.IGetConversationInfoV2RequestBody} message GetConversationInfoV2RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoV2RequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConversationInfoV2RequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetConversationInfoV2RequestBody} GetConversationInfoV2RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoV2RequestBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetConversationInfoV2RequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_id = reader.string();
                        break;
                    }
                case 2: {
                        message.conversation_short_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.conversation_type = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConversationInfoV2RequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetConversationInfoV2RequestBody} GetConversationInfoV2RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoV2RequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConversationInfoV2RequestBody message.
         * @function verify
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConversationInfoV2RequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                if (!$util.isString(message.conversation_id))
                    return "conversation_id: string expected";
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (!$util.isInteger(message.conversation_short_id) && !(message.conversation_short_id && $util.isInteger(message.conversation_short_id.low) && $util.isInteger(message.conversation_short_id.high)))
                    return "conversation_short_id: integer|Long expected";
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                if (!$util.isInteger(message.conversation_type))
                    return "conversation_type: integer expected";
            return null;
        };

        /**
         * Creates a GetConversationInfoV2RequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetConversationInfoV2RequestBody} GetConversationInfoV2RequestBody
         */
        GetConversationInfoV2RequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetConversationInfoV2RequestBody)
                return object;
            var message = new $root.im_proto.GetConversationInfoV2RequestBody();
            if (object.conversation_id != null)
                message.conversation_id = String(object.conversation_id);
            if (object.conversation_short_id != null)
                if ($util.Long)
                    (message.conversation_short_id = $util.Long.fromValue(object.conversation_short_id)).unsigned = false;
                else if (typeof object.conversation_short_id === "string")
                    message.conversation_short_id = parseInt(object.conversation_short_id, 10);
                else if (typeof object.conversation_short_id === "number")
                    message.conversation_short_id = object.conversation_short_id;
                else if (typeof object.conversation_short_id === "object")
                    message.conversation_short_id = new $util.LongBits(object.conversation_short_id.low >>> 0, object.conversation_short_id.high >>> 0).toNumber();
            if (object.conversation_type != null)
                message.conversation_type = object.conversation_type | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetConversationInfoV2RequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {im_proto.GetConversationInfoV2RequestBody} message GetConversationInfoV2RequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConversationInfoV2RequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.conversation_id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.conversation_short_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.conversation_short_id = options.longs === String ? "0" : 0;
                object.conversation_type = 0;
            }
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                object.conversation_id = message.conversation_id;
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (typeof message.conversation_short_id === "number")
                    object.conversation_short_id = options.longs === String ? String(message.conversation_short_id) : message.conversation_short_id;
                else
                    object.conversation_short_id = options.longs === String ? $util.Long.prototype.toString.call(message.conversation_short_id) : options.longs === Number ? new $util.LongBits(message.conversation_short_id.low >>> 0, message.conversation_short_id.high >>> 0).toNumber() : message.conversation_short_id;
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                object.conversation_type = message.conversation_type;
            return object;
        };

        /**
         * Converts this GetConversationInfoV2RequestBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConversationInfoV2RequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetConversationInfoV2RequestBody
         * @function getTypeUrl
         * @memberof im_proto.GetConversationInfoV2RequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetConversationInfoV2RequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetConversationInfoV2RequestBody";
        };

        return GetConversationInfoV2RequestBody;
    })();

    im_proto.GetConversationInfoListV2RequestBody = (function() {

        /**
         * Properties of a GetConversationInfoListV2RequestBody.
         * @memberof im_proto
         * @interface IGetConversationInfoListV2RequestBody
         * @property {Array.<im_proto.IGetConversationInfoV2RequestBody>|null} [conversation_info_list] GetConversationInfoListV2RequestBody conversation_info_list
         */

        /**
         * Constructs a new GetConversationInfoListV2RequestBody.
         * @memberof im_proto
         * @classdesc Represents a GetConversationInfoListV2RequestBody.
         * @implements IGetConversationInfoListV2RequestBody
         * @constructor
         * @param {im_proto.IGetConversationInfoListV2RequestBody=} [properties] Properties to set
         */
        function GetConversationInfoListV2RequestBody(properties) {
            this.conversation_info_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetConversationInfoListV2RequestBody conversation_info_list.
         * @member {Array.<im_proto.IGetConversationInfoV2RequestBody>} conversation_info_list
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @instance
         */
        GetConversationInfoListV2RequestBody.prototype.conversation_info_list = $util.emptyArray;

        /**
         * Creates a new GetConversationInfoListV2RequestBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {im_proto.IGetConversationInfoListV2RequestBody=} [properties] Properties to set
         * @returns {im_proto.GetConversationInfoListV2RequestBody} GetConversationInfoListV2RequestBody instance
         */
        GetConversationInfoListV2RequestBody.create = function create(properties) {
            return new GetConversationInfoListV2RequestBody(properties);
        };

        /**
         * Encodes the specified GetConversationInfoListV2RequestBody message. Does not implicitly {@link im_proto.GetConversationInfoListV2RequestBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {im_proto.IGetConversationInfoListV2RequestBody} message GetConversationInfoListV2RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoListV2RequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_info_list != null && message.conversation_info_list.length)
                for (var i = 0; i < message.conversation_info_list.length; ++i)
                    $root.im_proto.GetConversationInfoV2RequestBody.encode(message.conversation_info_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetConversationInfoListV2RequestBody message, length delimited. Does not implicitly {@link im_proto.GetConversationInfoListV2RequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {im_proto.IGetConversationInfoListV2RequestBody} message GetConversationInfoListV2RequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoListV2RequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConversationInfoListV2RequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetConversationInfoListV2RequestBody} GetConversationInfoListV2RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoListV2RequestBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetConversationInfoListV2RequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.conversation_info_list && message.conversation_info_list.length))
                            message.conversation_info_list = [];
                        message.conversation_info_list.push($root.im_proto.GetConversationInfoV2RequestBody.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConversationInfoListV2RequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetConversationInfoListV2RequestBody} GetConversationInfoListV2RequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoListV2RequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConversationInfoListV2RequestBody message.
         * @function verify
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConversationInfoListV2RequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_info_list != null && message.hasOwnProperty("conversation_info_list")) {
                if (!Array.isArray(message.conversation_info_list))
                    return "conversation_info_list: array expected";
                for (var i = 0; i < message.conversation_info_list.length; ++i) {
                    var error = $root.im_proto.GetConversationInfoV2RequestBody.verify(message.conversation_info_list[i]);
                    if (error)
                        return "conversation_info_list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetConversationInfoListV2RequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetConversationInfoListV2RequestBody} GetConversationInfoListV2RequestBody
         */
        GetConversationInfoListV2RequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetConversationInfoListV2RequestBody)
                return object;
            var message = new $root.im_proto.GetConversationInfoListV2RequestBody();
            if (object.conversation_info_list) {
                if (!Array.isArray(object.conversation_info_list))
                    throw TypeError(".im_proto.GetConversationInfoListV2RequestBody.conversation_info_list: array expected");
                message.conversation_info_list = [];
                for (var i = 0; i < object.conversation_info_list.length; ++i) {
                    if (typeof object.conversation_info_list[i] !== "object")
                        throw TypeError(".im_proto.GetConversationInfoListV2RequestBody.conversation_info_list: object expected");
                    message.conversation_info_list[i] = $root.im_proto.GetConversationInfoV2RequestBody.fromObject(object.conversation_info_list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetConversationInfoListV2RequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {im_proto.GetConversationInfoListV2RequestBody} message GetConversationInfoListV2RequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConversationInfoListV2RequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.conversation_info_list = [];
            if (message.conversation_info_list && message.conversation_info_list.length) {
                object.conversation_info_list = [];
                for (var j = 0; j < message.conversation_info_list.length; ++j)
                    object.conversation_info_list[j] = $root.im_proto.GetConversationInfoV2RequestBody.toObject(message.conversation_info_list[j], options);
            }
            return object;
        };

        /**
         * Converts this GetConversationInfoListV2RequestBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConversationInfoListV2RequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetConversationInfoListV2RequestBody
         * @function getTypeUrl
         * @memberof im_proto.GetConversationInfoListV2RequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetConversationInfoListV2RequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetConversationInfoListV2RequestBody";
        };

        return GetConversationInfoListV2RequestBody;
    })();

    im_proto.GetStrangerConversationListRequestBody = (function() {

        /**
         * Properties of a GetStrangerConversationListRequestBody.
         * @memberof im_proto
         * @interface IGetStrangerConversationListRequestBody
         * @property {number|Long|null} [cursor] GetStrangerConversationListRequestBody cursor
         * @property {number|Long|null} [count] GetStrangerConversationListRequestBody count
         * @property {boolean|null} [show_total_unread] GetStrangerConversationListRequestBody show_total_unread
         * @property {string|null} [biz_info] GetStrangerConversationListRequestBody biz_info
         */

        /**
         * Constructs a new GetStrangerConversationListRequestBody.
         * @memberof im_proto
         * @classdesc Represents a GetStrangerConversationListRequestBody.
         * @implements IGetStrangerConversationListRequestBody
         * @constructor
         * @param {im_proto.IGetStrangerConversationListRequestBody=} [properties] Properties to set
         */
        function GetStrangerConversationListRequestBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetStrangerConversationListRequestBody cursor.
         * @member {number|Long} cursor
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @instance
         */
        GetStrangerConversationListRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetStrangerConversationListRequestBody count.
         * @member {number|Long} count
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @instance
         */
        GetStrangerConversationListRequestBody.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetStrangerConversationListRequestBody show_total_unread.
         * @member {boolean} show_total_unread
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @instance
         */
        GetStrangerConversationListRequestBody.prototype.show_total_unread = false;

        /**
         * GetStrangerConversationListRequestBody biz_info.
         * @member {string} biz_info
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @instance
         */
        GetStrangerConversationListRequestBody.prototype.biz_info = "";

        /**
         * Creates a new GetStrangerConversationListRequestBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {im_proto.IGetStrangerConversationListRequestBody=} [properties] Properties to set
         * @returns {im_proto.GetStrangerConversationListRequestBody} GetStrangerConversationListRequestBody instance
         */
        GetStrangerConversationListRequestBody.create = function create(properties) {
            return new GetStrangerConversationListRequestBody(properties);
        };

        /**
         * Encodes the specified GetStrangerConversationListRequestBody message. Does not implicitly {@link im_proto.GetStrangerConversationListRequestBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {im_proto.IGetStrangerConversationListRequestBody} message GetStrangerConversationListRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrangerConversationListRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.cursor);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.count);
            if (message.show_total_unread != null && Object.hasOwnProperty.call(message, "show_total_unread"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.show_total_unread);
            if (message.biz_info != null && Object.hasOwnProperty.call(message, "biz_info"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.biz_info);
            return writer;
        };

        /**
         * Encodes the specified GetStrangerConversationListRequestBody message, length delimited. Does not implicitly {@link im_proto.GetStrangerConversationListRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {im_proto.IGetStrangerConversationListRequestBody} message GetStrangerConversationListRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrangerConversationListRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStrangerConversationListRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetStrangerConversationListRequestBody} GetStrangerConversationListRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrangerConversationListRequestBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetStrangerConversationListRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cursor = reader.int64();
                        break;
                    }
                case 2: {
                        message.count = reader.int64();
                        break;
                    }
                case 3: {
                        message.show_total_unread = reader.bool();
                        break;
                    }
                case 4: {
                        message.biz_info = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStrangerConversationListRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetStrangerConversationListRequestBody} GetStrangerConversationListRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrangerConversationListRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStrangerConversationListRequestBody message.
         * @function verify
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStrangerConversationListRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (!$util.isInteger(message.cursor) && !(message.cursor && $util.isInteger(message.cursor.low) && $util.isInteger(message.cursor.high)))
                    return "cursor: integer|Long expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count) && !(message.count && $util.isInteger(message.count.low) && $util.isInteger(message.count.high)))
                    return "count: integer|Long expected";
            if (message.show_total_unread != null && message.hasOwnProperty("show_total_unread"))
                if (typeof message.show_total_unread !== "boolean")
                    return "show_total_unread: boolean expected";
            if (message.biz_info != null && message.hasOwnProperty("biz_info"))
                if (!$util.isString(message.biz_info))
                    return "biz_info: string expected";
            return null;
        };

        /**
         * Creates a GetStrangerConversationListRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetStrangerConversationListRequestBody} GetStrangerConversationListRequestBody
         */
        GetStrangerConversationListRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetStrangerConversationListRequestBody)
                return object;
            var message = new $root.im_proto.GetStrangerConversationListRequestBody();
            if (object.cursor != null)
                if ($util.Long)
                    (message.cursor = $util.Long.fromValue(object.cursor)).unsigned = false;
                else if (typeof object.cursor === "string")
                    message.cursor = parseInt(object.cursor, 10);
                else if (typeof object.cursor === "number")
                    message.cursor = object.cursor;
                else if (typeof object.cursor === "object")
                    message.cursor = new $util.LongBits(object.cursor.low >>> 0, object.cursor.high >>> 0).toNumber();
            if (object.count != null)
                if ($util.Long)
                    (message.count = $util.Long.fromValue(object.count)).unsigned = false;
                else if (typeof object.count === "string")
                    message.count = parseInt(object.count, 10);
                else if (typeof object.count === "number")
                    message.count = object.count;
                else if (typeof object.count === "object")
                    message.count = new $util.LongBits(object.count.low >>> 0, object.count.high >>> 0).toNumber();
            if (object.show_total_unread != null)
                message.show_total_unread = Boolean(object.show_total_unread);
            if (object.biz_info != null)
                message.biz_info = String(object.biz_info);
            return message;
        };

        /**
         * Creates a plain object from a GetStrangerConversationListRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {im_proto.GetStrangerConversationListRequestBody} message GetStrangerConversationListRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStrangerConversationListRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.cursor = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cursor = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.count = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.count = options.longs === String ? "0" : 0;
                object.show_total_unread = false;
                object.biz_info = "";
            }
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (typeof message.cursor === "number")
                    object.cursor = options.longs === String ? String(message.cursor) : message.cursor;
                else
                    object.cursor = options.longs === String ? $util.Long.prototype.toString.call(message.cursor) : options.longs === Number ? new $util.LongBits(message.cursor.low >>> 0, message.cursor.high >>> 0).toNumber() : message.cursor;
            if (message.count != null && message.hasOwnProperty("count"))
                if (typeof message.count === "number")
                    object.count = options.longs === String ? String(message.count) : message.count;
                else
                    object.count = options.longs === String ? $util.Long.prototype.toString.call(message.count) : options.longs === Number ? new $util.LongBits(message.count.low >>> 0, message.count.high >>> 0).toNumber() : message.count;
            if (message.show_total_unread != null && message.hasOwnProperty("show_total_unread"))
                object.show_total_unread = message.show_total_unread;
            if (message.biz_info != null && message.hasOwnProperty("biz_info"))
                object.biz_info = message.biz_info;
            return object;
        };

        /**
         * Converts this GetStrangerConversationListRequestBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStrangerConversationListRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetStrangerConversationListRequestBody
         * @function getTypeUrl
         * @memberof im_proto.GetStrangerConversationListRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetStrangerConversationListRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetStrangerConversationListRequestBody";
        };

        return GetStrangerConversationListRequestBody;
    })();

    im_proto.GetUserConversationListRequestBody = (function() {

        /**
         * Properties of a GetUserConversationListRequestBody.
         * @memberof im_proto
         * @interface IGetUserConversationListRequestBody
         * @property {number|null} [sort_type] GetUserConversationListRequestBody sort_type
         * @property {number|Long|null} [cursor] GetUserConversationListRequestBody cursor
         * @property {number|null} [con_type] GetUserConversationListRequestBody con_type
         * @property {number|Long|null} [limit] GetUserConversationListRequestBody limit
         * @property {number|null} [include_role] GetUserConversationListRequestBody include_role
         * @property {number|null} [exclude_role] GetUserConversationListRequestBody exclude_role
         * @property {boolean|null} [include_removed_group] GetUserConversationListRequestBody include_removed_group
         * @property {boolean|null} [with_cold] GetUserConversationListRequestBody with_cold
         * @property {number|null} [customed_con_type] GetUserConversationListRequestBody customed_con_type
         * @property {Array.<number>|null} [include_multiple_roles] GetUserConversationListRequestBody include_multiple_roles
         */

        /**
         * Constructs a new GetUserConversationListRequestBody.
         * @memberof im_proto
         * @classdesc Represents a GetUserConversationListRequestBody.
         * @implements IGetUserConversationListRequestBody
         * @constructor
         * @param {im_proto.IGetUserConversationListRequestBody=} [properties] Properties to set
         */
        function GetUserConversationListRequestBody(properties) {
            this.include_multiple_roles = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserConversationListRequestBody sort_type.
         * @member {number} sort_type
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.sort_type = 0;

        /**
         * GetUserConversationListRequestBody cursor.
         * @member {number|Long} cursor
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetUserConversationListRequestBody con_type.
         * @member {number} con_type
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.con_type = 0;

        /**
         * GetUserConversationListRequestBody limit.
         * @member {number|Long} limit
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.limit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetUserConversationListRequestBody include_role.
         * @member {number} include_role
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.include_role = 0;

        /**
         * GetUserConversationListRequestBody exclude_role.
         * @member {number} exclude_role
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.exclude_role = 0;

        /**
         * GetUserConversationListRequestBody include_removed_group.
         * @member {boolean} include_removed_group
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.include_removed_group = false;

        /**
         * GetUserConversationListRequestBody with_cold.
         * @member {boolean} with_cold
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.with_cold = false;

        /**
         * GetUserConversationListRequestBody customed_con_type.
         * @member {number} customed_con_type
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.customed_con_type = 0;

        /**
         * GetUserConversationListRequestBody include_multiple_roles.
         * @member {Array.<number>} include_multiple_roles
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         */
        GetUserConversationListRequestBody.prototype.include_multiple_roles = $util.emptyArray;

        /**
         * Creates a new GetUserConversationListRequestBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {im_proto.IGetUserConversationListRequestBody=} [properties] Properties to set
         * @returns {im_proto.GetUserConversationListRequestBody} GetUserConversationListRequestBody instance
         */
        GetUserConversationListRequestBody.create = function create(properties) {
            return new GetUserConversationListRequestBody(properties);
        };

        /**
         * Encodes the specified GetUserConversationListRequestBody message. Does not implicitly {@link im_proto.GetUserConversationListRequestBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {im_proto.IGetUserConversationListRequestBody} message GetUserConversationListRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserConversationListRequestBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sort_type != null && Object.hasOwnProperty.call(message, "sort_type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sort_type);
            if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.cursor);
            if (message.con_type != null && Object.hasOwnProperty.call(message, "con_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.con_type);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.limit);
            if (message.include_role != null && Object.hasOwnProperty.call(message, "include_role"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.include_role);
            if (message.exclude_role != null && Object.hasOwnProperty.call(message, "exclude_role"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.exclude_role);
            if (message.include_removed_group != null && Object.hasOwnProperty.call(message, "include_removed_group"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.include_removed_group);
            if (message.with_cold != null && Object.hasOwnProperty.call(message, "with_cold"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.with_cold);
            if (message.customed_con_type != null && Object.hasOwnProperty.call(message, "customed_con_type"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.customed_con_type);
            if (message.include_multiple_roles != null && message.include_multiple_roles.length) {
                writer.uint32(/* id 10, wireType 2 =*/82).fork();
                for (var i = 0; i < message.include_multiple_roles.length; ++i)
                    writer.int32(message.include_multiple_roles[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified GetUserConversationListRequestBody message, length delimited. Does not implicitly {@link im_proto.GetUserConversationListRequestBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {im_proto.IGetUserConversationListRequestBody} message GetUserConversationListRequestBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserConversationListRequestBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserConversationListRequestBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetUserConversationListRequestBody} GetUserConversationListRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserConversationListRequestBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetUserConversationListRequestBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sort_type = reader.int32();
                        break;
                    }
                case 2: {
                        message.cursor = reader.int64();
                        break;
                    }
                case 3: {
                        message.con_type = reader.int32();
                        break;
                    }
                case 4: {
                        message.limit = reader.int64();
                        break;
                    }
                case 5: {
                        message.include_role = reader.int32();
                        break;
                    }
                case 6: {
                        message.exclude_role = reader.int32();
                        break;
                    }
                case 7: {
                        message.include_removed_group = reader.bool();
                        break;
                    }
                case 8: {
                        message.with_cold = reader.bool();
                        break;
                    }
                case 9: {
                        message.customed_con_type = reader.int32();
                        break;
                    }
                case 10: {
                        if (!(message.include_multiple_roles && message.include_multiple_roles.length))
                            message.include_multiple_roles = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.include_multiple_roles.push(reader.int32());
                        } else
                            message.include_multiple_roles.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserConversationListRequestBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetUserConversationListRequestBody} GetUserConversationListRequestBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserConversationListRequestBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserConversationListRequestBody message.
         * @function verify
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserConversationListRequestBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sort_type != null && message.hasOwnProperty("sort_type"))
                if (!$util.isInteger(message.sort_type))
                    return "sort_type: integer expected";
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (!$util.isInteger(message.cursor) && !(message.cursor && $util.isInteger(message.cursor.low) && $util.isInteger(message.cursor.high)))
                    return "cursor: integer|Long expected";
            if (message.con_type != null && message.hasOwnProperty("con_type"))
                if (!$util.isInteger(message.con_type))
                    return "con_type: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit) && !(message.limit && $util.isInteger(message.limit.low) && $util.isInteger(message.limit.high)))
                    return "limit: integer|Long expected";
            if (message.include_role != null && message.hasOwnProperty("include_role"))
                if (!$util.isInteger(message.include_role))
                    return "include_role: integer expected";
            if (message.exclude_role != null && message.hasOwnProperty("exclude_role"))
                if (!$util.isInteger(message.exclude_role))
                    return "exclude_role: integer expected";
            if (message.include_removed_group != null && message.hasOwnProperty("include_removed_group"))
                if (typeof message.include_removed_group !== "boolean")
                    return "include_removed_group: boolean expected";
            if (message.with_cold != null && message.hasOwnProperty("with_cold"))
                if (typeof message.with_cold !== "boolean")
                    return "with_cold: boolean expected";
            if (message.customed_con_type != null && message.hasOwnProperty("customed_con_type"))
                if (!$util.isInteger(message.customed_con_type))
                    return "customed_con_type: integer expected";
            if (message.include_multiple_roles != null && message.hasOwnProperty("include_multiple_roles")) {
                if (!Array.isArray(message.include_multiple_roles))
                    return "include_multiple_roles: array expected";
                for (var i = 0; i < message.include_multiple_roles.length; ++i)
                    if (!$util.isInteger(message.include_multiple_roles[i]))
                        return "include_multiple_roles: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a GetUserConversationListRequestBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetUserConversationListRequestBody} GetUserConversationListRequestBody
         */
        GetUserConversationListRequestBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetUserConversationListRequestBody)
                return object;
            var message = new $root.im_proto.GetUserConversationListRequestBody();
            if (object.sort_type != null)
                message.sort_type = object.sort_type | 0;
            if (object.cursor != null)
                if ($util.Long)
                    (message.cursor = $util.Long.fromValue(object.cursor)).unsigned = false;
                else if (typeof object.cursor === "string")
                    message.cursor = parseInt(object.cursor, 10);
                else if (typeof object.cursor === "number")
                    message.cursor = object.cursor;
                else if (typeof object.cursor === "object")
                    message.cursor = new $util.LongBits(object.cursor.low >>> 0, object.cursor.high >>> 0).toNumber();
            if (object.con_type != null)
                message.con_type = object.con_type | 0;
            if (object.limit != null)
                if ($util.Long)
                    (message.limit = $util.Long.fromValue(object.limit)).unsigned = false;
                else if (typeof object.limit === "string")
                    message.limit = parseInt(object.limit, 10);
                else if (typeof object.limit === "number")
                    message.limit = object.limit;
                else if (typeof object.limit === "object")
                    message.limit = new $util.LongBits(object.limit.low >>> 0, object.limit.high >>> 0).toNumber();
            if (object.include_role != null)
                message.include_role = object.include_role | 0;
            if (object.exclude_role != null)
                message.exclude_role = object.exclude_role | 0;
            if (object.include_removed_group != null)
                message.include_removed_group = Boolean(object.include_removed_group);
            if (object.with_cold != null)
                message.with_cold = Boolean(object.with_cold);
            if (object.customed_con_type != null)
                message.customed_con_type = object.customed_con_type | 0;
            if (object.include_multiple_roles) {
                if (!Array.isArray(object.include_multiple_roles))
                    throw TypeError(".im_proto.GetUserConversationListRequestBody.include_multiple_roles: array expected");
                message.include_multiple_roles = [];
                for (var i = 0; i < object.include_multiple_roles.length; ++i)
                    message.include_multiple_roles[i] = object.include_multiple_roles[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserConversationListRequestBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {im_proto.GetUserConversationListRequestBody} message GetUserConversationListRequestBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserConversationListRequestBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.include_multiple_roles = [];
            if (options.defaults) {
                object.sort_type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.cursor = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cursor = options.longs === String ? "0" : 0;
                object.con_type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.limit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.limit = options.longs === String ? "0" : 0;
                object.include_role = 0;
                object.exclude_role = 0;
                object.include_removed_group = false;
                object.with_cold = false;
                object.customed_con_type = 0;
            }
            if (message.sort_type != null && message.hasOwnProperty("sort_type"))
                object.sort_type = message.sort_type;
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (typeof message.cursor === "number")
                    object.cursor = options.longs === String ? String(message.cursor) : message.cursor;
                else
                    object.cursor = options.longs === String ? $util.Long.prototype.toString.call(message.cursor) : options.longs === Number ? new $util.LongBits(message.cursor.low >>> 0, message.cursor.high >>> 0).toNumber() : message.cursor;
            if (message.con_type != null && message.hasOwnProperty("con_type"))
                object.con_type = message.con_type;
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (typeof message.limit === "number")
                    object.limit = options.longs === String ? String(message.limit) : message.limit;
                else
                    object.limit = options.longs === String ? $util.Long.prototype.toString.call(message.limit) : options.longs === Number ? new $util.LongBits(message.limit.low >>> 0, message.limit.high >>> 0).toNumber() : message.limit;
            if (message.include_role != null && message.hasOwnProperty("include_role"))
                object.include_role = message.include_role;
            if (message.exclude_role != null && message.hasOwnProperty("exclude_role"))
                object.exclude_role = message.exclude_role;
            if (message.include_removed_group != null && message.hasOwnProperty("include_removed_group"))
                object.include_removed_group = message.include_removed_group;
            if (message.with_cold != null && message.hasOwnProperty("with_cold"))
                object.with_cold = message.with_cold;
            if (message.customed_con_type != null && message.hasOwnProperty("customed_con_type"))
                object.customed_con_type = message.customed_con_type;
            if (message.include_multiple_roles && message.include_multiple_roles.length) {
                object.include_multiple_roles = [];
                for (var j = 0; j < message.include_multiple_roles.length; ++j)
                    object.include_multiple_roles[j] = message.include_multiple_roles[j];
            }
            return object;
        };

        /**
         * Converts this GetUserConversationListRequestBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetUserConversationListRequestBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserConversationListRequestBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserConversationListRequestBody
         * @function getTypeUrl
         * @memberof im_proto.GetUserConversationListRequestBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserConversationListRequestBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetUserConversationListRequestBody";
        };

        return GetUserConversationListRequestBody;
    })();

    im_proto.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof im_proto
         * @interface IResponse
         * @property {number|null} [cmd] Response cmd
         * @property {number|Long|null} [sequence_id] Response sequence_id
         * @property {number|null} [status_code] Response status_code
         * @property {string|null} [error_desc] Response error_desc
         * @property {number|null} [inbox_type] Response inbox_type
         * @property {im_proto.IResponseBody|null} [body] Response body
         * @property {string|null} [log_id] Response log_id
         * @property {Object.<string,string>|null} [headers] Response headers
         * @property {number|Long|null} [start_time_stamp] Response start_time_stamp
         * @property {number|Long|null} [request_arrived_time] Response request_arrived_time
         * @property {number|Long|null} [server_execution_end_time] Response server_execution_end_time
         * @property {number|null} [retry_count] Response retry_count
         * @property {number|Long|null} [server_start_time] Response server_start_time
         */

        /**
         * Constructs a new Response.
         * @memberof im_proto
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {im_proto.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            this.headers = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response cmd.
         * @member {number} cmd
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.cmd = 0;

        /**
         * Response sequence_id.
         * @member {number|Long} sequence_id
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.sequence_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response status_code.
         * @member {number} status_code
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.status_code = 0;

        /**
         * Response error_desc.
         * @member {string} error_desc
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.error_desc = "";

        /**
         * Response inbox_type.
         * @member {number} inbox_type
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.inbox_type = 0;

        /**
         * Response body.
         * @member {im_proto.IResponseBody|null|undefined} body
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.body = null;

        /**
         * Response log_id.
         * @member {string} log_id
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.log_id = "";

        /**
         * Response headers.
         * @member {Object.<string,string>} headers
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.headers = $util.emptyObject;

        /**
         * Response start_time_stamp.
         * @member {number|Long} start_time_stamp
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.start_time_stamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response request_arrived_time.
         * @member {number|Long} request_arrived_time
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.request_arrived_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response server_execution_end_time.
         * @member {number|Long} server_execution_end_time
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.server_execution_end_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Response retry_count.
         * @member {number} retry_count
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.retry_count = 0;

        /**
         * Response server_start_time.
         * @member {number|Long} server_start_time
         * @memberof im_proto.Response
         * @instance
         */
        Response.prototype.server_start_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof im_proto.Response
         * @static
         * @param {im_proto.IResponse=} [properties] Properties to set
         * @returns {im_proto.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link im_proto.Response.verify|verify} messages.
         * @function encode
         * @memberof im_proto.Response
         * @static
         * @param {im_proto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cmd);
            if (message.sequence_id != null && Object.hasOwnProperty.call(message, "sequence_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sequence_id);
            if (message.status_code != null && Object.hasOwnProperty.call(message, "status_code"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status_code);
            if (message.error_desc != null && Object.hasOwnProperty.call(message, "error_desc"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.error_desc);
            if (message.inbox_type != null && Object.hasOwnProperty.call(message, "inbox_type"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.inbox_type);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                $root.im_proto.ResponseBody.encode(message.body, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.log_id != null && Object.hasOwnProperty.call(message, "log_id"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.log_id);
            if (message.headers != null && Object.hasOwnProperty.call(message, "headers"))
                for (var keys = Object.keys(message.headers), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.headers[keys[i]]).ldelim();
            if (message.start_time_stamp != null && Object.hasOwnProperty.call(message, "start_time_stamp"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.start_time_stamp);
            if (message.request_arrived_time != null && Object.hasOwnProperty.call(message, "request_arrived_time"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.request_arrived_time);
            if (message.server_execution_end_time != null && Object.hasOwnProperty.call(message, "server_execution_end_time"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.server_execution_end_time);
            if (message.retry_count != null && Object.hasOwnProperty.call(message, "retry_count"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.retry_count);
            if (message.server_start_time != null && Object.hasOwnProperty.call(message, "server_start_time"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.server_start_time);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link im_proto.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.Response
         * @static
         * @param {im_proto.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.Response(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.sequence_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.status_code = reader.int32();
                        break;
                    }
                case 4: {
                        message.error_desc = reader.string();
                        break;
                    }
                case 5: {
                        message.inbox_type = reader.int32();
                        break;
                    }
                case 6: {
                        message.body = $root.im_proto.ResponseBody.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.log_id = reader.string();
                        break;
                    }
                case 8: {
                        if (message.headers === $util.emptyObject)
                            message.headers = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.headers[key] = value;
                        break;
                    }
                case 9: {
                        message.start_time_stamp = reader.int64();
                        break;
                    }
                case 10: {
                        message.request_arrived_time = reader.int64();
                        break;
                    }
                case 11: {
                        message.server_execution_end_time = reader.int64();
                        break;
                    }
                case 12: {
                        message.retry_count = reader.int32();
                        break;
                    }
                case 13: {
                        message.server_start_time = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof im_proto.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                if (!$util.isInteger(message.cmd))
                    return "cmd: integer expected";
            if (message.sequence_id != null && message.hasOwnProperty("sequence_id"))
                if (!$util.isInteger(message.sequence_id) && !(message.sequence_id && $util.isInteger(message.sequence_id.low) && $util.isInteger(message.sequence_id.high)))
                    return "sequence_id: integer|Long expected";
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                if (!$util.isInteger(message.status_code))
                    return "status_code: integer expected";
            if (message.error_desc != null && message.hasOwnProperty("error_desc"))
                if (!$util.isString(message.error_desc))
                    return "error_desc: string expected";
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                if (!$util.isInteger(message.inbox_type))
                    return "inbox_type: integer expected";
            if (message.body != null && message.hasOwnProperty("body")) {
                var error = $root.im_proto.ResponseBody.verify(message.body);
                if (error)
                    return "body." + error;
            }
            if (message.log_id != null && message.hasOwnProperty("log_id"))
                if (!$util.isString(message.log_id))
                    return "log_id: string expected";
            if (message.headers != null && message.hasOwnProperty("headers")) {
                if (!$util.isObject(message.headers))
                    return "headers: object expected";
                var key = Object.keys(message.headers);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.headers[key[i]]))
                        return "headers: string{k:string} expected";
            }
            if (message.start_time_stamp != null && message.hasOwnProperty("start_time_stamp"))
                if (!$util.isInteger(message.start_time_stamp) && !(message.start_time_stamp && $util.isInteger(message.start_time_stamp.low) && $util.isInteger(message.start_time_stamp.high)))
                    return "start_time_stamp: integer|Long expected";
            if (message.request_arrived_time != null && message.hasOwnProperty("request_arrived_time"))
                if (!$util.isInteger(message.request_arrived_time) && !(message.request_arrived_time && $util.isInteger(message.request_arrived_time.low) && $util.isInteger(message.request_arrived_time.high)))
                    return "request_arrived_time: integer|Long expected";
            if (message.server_execution_end_time != null && message.hasOwnProperty("server_execution_end_time"))
                if (!$util.isInteger(message.server_execution_end_time) && !(message.server_execution_end_time && $util.isInteger(message.server_execution_end_time.low) && $util.isInteger(message.server_execution_end_time.high)))
                    return "server_execution_end_time: integer|Long expected";
            if (message.retry_count != null && message.hasOwnProperty("retry_count"))
                if (!$util.isInteger(message.retry_count))
                    return "retry_count: integer expected";
            if (message.server_start_time != null && message.hasOwnProperty("server_start_time"))
                if (!$util.isInteger(message.server_start_time) && !(message.server_start_time && $util.isInteger(message.server_start_time.low) && $util.isInteger(message.server_start_time.high)))
                    return "server_start_time: integer|Long expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.Response)
                return object;
            var message = new $root.im_proto.Response();
            if (object.cmd != null)
                message.cmd = object.cmd | 0;
            if (object.sequence_id != null)
                if ($util.Long)
                    (message.sequence_id = $util.Long.fromValue(object.sequence_id)).unsigned = false;
                else if (typeof object.sequence_id === "string")
                    message.sequence_id = parseInt(object.sequence_id, 10);
                else if (typeof object.sequence_id === "number")
                    message.sequence_id = object.sequence_id;
                else if (typeof object.sequence_id === "object")
                    message.sequence_id = new $util.LongBits(object.sequence_id.low >>> 0, object.sequence_id.high >>> 0).toNumber();
            if (object.status_code != null)
                message.status_code = object.status_code | 0;
            if (object.error_desc != null)
                message.error_desc = String(object.error_desc);
            if (object.inbox_type != null)
                message.inbox_type = object.inbox_type | 0;
            if (object.body != null) {
                if (typeof object.body !== "object")
                    throw TypeError(".im_proto.Response.body: object expected");
                message.body = $root.im_proto.ResponseBody.fromObject(object.body);
            }
            if (object.log_id != null)
                message.log_id = String(object.log_id);
            if (object.headers) {
                if (typeof object.headers !== "object")
                    throw TypeError(".im_proto.Response.headers: object expected");
                message.headers = {};
                for (var keys = Object.keys(object.headers), i = 0; i < keys.length; ++i)
                    message.headers[keys[i]] = String(object.headers[keys[i]]);
            }
            if (object.start_time_stamp != null)
                if ($util.Long)
                    (message.start_time_stamp = $util.Long.fromValue(object.start_time_stamp)).unsigned = false;
                else if (typeof object.start_time_stamp === "string")
                    message.start_time_stamp = parseInt(object.start_time_stamp, 10);
                else if (typeof object.start_time_stamp === "number")
                    message.start_time_stamp = object.start_time_stamp;
                else if (typeof object.start_time_stamp === "object")
                    message.start_time_stamp = new $util.LongBits(object.start_time_stamp.low >>> 0, object.start_time_stamp.high >>> 0).toNumber();
            if (object.request_arrived_time != null)
                if ($util.Long)
                    (message.request_arrived_time = $util.Long.fromValue(object.request_arrived_time)).unsigned = false;
                else if (typeof object.request_arrived_time === "string")
                    message.request_arrived_time = parseInt(object.request_arrived_time, 10);
                else if (typeof object.request_arrived_time === "number")
                    message.request_arrived_time = object.request_arrived_time;
                else if (typeof object.request_arrived_time === "object")
                    message.request_arrived_time = new $util.LongBits(object.request_arrived_time.low >>> 0, object.request_arrived_time.high >>> 0).toNumber();
            if (object.server_execution_end_time != null)
                if ($util.Long)
                    (message.server_execution_end_time = $util.Long.fromValue(object.server_execution_end_time)).unsigned = false;
                else if (typeof object.server_execution_end_time === "string")
                    message.server_execution_end_time = parseInt(object.server_execution_end_time, 10);
                else if (typeof object.server_execution_end_time === "number")
                    message.server_execution_end_time = object.server_execution_end_time;
                else if (typeof object.server_execution_end_time === "object")
                    message.server_execution_end_time = new $util.LongBits(object.server_execution_end_time.low >>> 0, object.server_execution_end_time.high >>> 0).toNumber();
            if (object.retry_count != null)
                message.retry_count = object.retry_count | 0;
            if (object.server_start_time != null)
                if ($util.Long)
                    (message.server_start_time = $util.Long.fromValue(object.server_start_time)).unsigned = false;
                else if (typeof object.server_start_time === "string")
                    message.server_start_time = parseInt(object.server_start_time, 10);
                else if (typeof object.server_start_time === "number")
                    message.server_start_time = object.server_start_time;
                else if (typeof object.server_start_time === "object")
                    message.server_start_time = new $util.LongBits(object.server_start_time.low >>> 0, object.server_start_time.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.Response
         * @static
         * @param {im_proto.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.headers = {};
            if (options.defaults) {
                object.cmd = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sequence_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequence_id = options.longs === String ? "0" : 0;
                object.status_code = 0;
                object.error_desc = "";
                object.inbox_type = 0;
                object.body = null;
                object.log_id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.start_time_stamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start_time_stamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.request_arrived_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.request_arrived_time = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.server_execution_end_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.server_execution_end_time = options.longs === String ? "0" : 0;
                object.retry_count = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.server_start_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.server_start_time = options.longs === String ? "0" : 0;
            }
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.sequence_id != null && message.hasOwnProperty("sequence_id"))
                if (typeof message.sequence_id === "number")
                    object.sequence_id = options.longs === String ? String(message.sequence_id) : message.sequence_id;
                else
                    object.sequence_id = options.longs === String ? $util.Long.prototype.toString.call(message.sequence_id) : options.longs === Number ? new $util.LongBits(message.sequence_id.low >>> 0, message.sequence_id.high >>> 0).toNumber() : message.sequence_id;
            if (message.status_code != null && message.hasOwnProperty("status_code"))
                object.status_code = message.status_code;
            if (message.error_desc != null && message.hasOwnProperty("error_desc"))
                object.error_desc = message.error_desc;
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                object.inbox_type = message.inbox_type;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = $root.im_proto.ResponseBody.toObject(message.body, options);
            if (message.log_id != null && message.hasOwnProperty("log_id"))
                object.log_id = message.log_id;
            var keys2;
            if (message.headers && (keys2 = Object.keys(message.headers)).length) {
                object.headers = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.headers[keys2[j]] = message.headers[keys2[j]];
            }
            if (message.start_time_stamp != null && message.hasOwnProperty("start_time_stamp"))
                if (typeof message.start_time_stamp === "number")
                    object.start_time_stamp = options.longs === String ? String(message.start_time_stamp) : message.start_time_stamp;
                else
                    object.start_time_stamp = options.longs === String ? $util.Long.prototype.toString.call(message.start_time_stamp) : options.longs === Number ? new $util.LongBits(message.start_time_stamp.low >>> 0, message.start_time_stamp.high >>> 0).toNumber() : message.start_time_stamp;
            if (message.request_arrived_time != null && message.hasOwnProperty("request_arrived_time"))
                if (typeof message.request_arrived_time === "number")
                    object.request_arrived_time = options.longs === String ? String(message.request_arrived_time) : message.request_arrived_time;
                else
                    object.request_arrived_time = options.longs === String ? $util.Long.prototype.toString.call(message.request_arrived_time) : options.longs === Number ? new $util.LongBits(message.request_arrived_time.low >>> 0, message.request_arrived_time.high >>> 0).toNumber() : message.request_arrived_time;
            if (message.server_execution_end_time != null && message.hasOwnProperty("server_execution_end_time"))
                if (typeof message.server_execution_end_time === "number")
                    object.server_execution_end_time = options.longs === String ? String(message.server_execution_end_time) : message.server_execution_end_time;
                else
                    object.server_execution_end_time = options.longs === String ? $util.Long.prototype.toString.call(message.server_execution_end_time) : options.longs === Number ? new $util.LongBits(message.server_execution_end_time.low >>> 0, message.server_execution_end_time.high >>> 0).toNumber() : message.server_execution_end_time;
            if (message.retry_count != null && message.hasOwnProperty("retry_count"))
                object.retry_count = message.retry_count;
            if (message.server_start_time != null && message.hasOwnProperty("server_start_time"))
                if (typeof message.server_start_time === "number")
                    object.server_start_time = options.longs === String ? String(message.server_start_time) : message.server_start_time;
                else
                    object.server_start_time = options.longs === String ? $util.Long.prototype.toString.call(message.server_start_time) : options.longs === Number ? new $util.LongBits(message.server_start_time.low >>> 0, message.server_start_time.high >>> 0).toNumber() : message.server_start_time;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof im_proto.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof im_proto.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.Response";
        };

        return Response;
    })();

    im_proto.ResponseBody = (function() {

        /**
         * Properties of a ResponseBody.
         * @memberof im_proto
         * @interface IResponseBody
         * @property {im_proto.ISendMessageResponseBody|null} [send_message_body] ResponseBody send_message_body
         * @property {im_proto.ICreateConversationV2ResponseBody|null} [create_conversation_v2_body] ResponseBody create_conversation_v2_body
         * @property {im_proto.IGetConversationInfoListV2ResponseBody|null} [get_conversation_info_list_v2_body] ResponseBody get_conversation_info_list_v2_body
         * @property {im_proto.IGetStrangerConversationListResponseBody|null} [get_stranger_conversation_body] ResponseBody get_stranger_conversation_body
         * @property {im_proto.IGetUserConversationListResponseBody|null} [get_conversation_list_body] ResponseBody get_conversation_list_body
         */

        /**
         * Constructs a new ResponseBody.
         * @memberof im_proto
         * @classdesc Represents a ResponseBody.
         * @implements IResponseBody
         * @constructor
         * @param {im_proto.IResponseBody=} [properties] Properties to set
         */
        function ResponseBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ResponseBody send_message_body.
         * @member {im_proto.ISendMessageResponseBody|null|undefined} send_message_body
         * @memberof im_proto.ResponseBody
         * @instance
         */
        ResponseBody.prototype.send_message_body = null;

        /**
         * ResponseBody create_conversation_v2_body.
         * @member {im_proto.ICreateConversationV2ResponseBody|null|undefined} create_conversation_v2_body
         * @memberof im_proto.ResponseBody
         * @instance
         */
        ResponseBody.prototype.create_conversation_v2_body = null;

        /**
         * ResponseBody get_conversation_info_list_v2_body.
         * @member {im_proto.IGetConversationInfoListV2ResponseBody|null|undefined} get_conversation_info_list_v2_body
         * @memberof im_proto.ResponseBody
         * @instance
         */
        ResponseBody.prototype.get_conversation_info_list_v2_body = null;

        /**
         * ResponseBody get_stranger_conversation_body.
         * @member {im_proto.IGetStrangerConversationListResponseBody|null|undefined} get_stranger_conversation_body
         * @memberof im_proto.ResponseBody
         * @instance
         */
        ResponseBody.prototype.get_stranger_conversation_body = null;

        /**
         * ResponseBody get_conversation_list_body.
         * @member {im_proto.IGetUserConversationListResponseBody|null|undefined} get_conversation_list_body
         * @memberof im_proto.ResponseBody
         * @instance
         */
        ResponseBody.prototype.get_conversation_list_body = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ResponseBody body.
         * @member {"send_message_body"|"create_conversation_v2_body"|"get_conversation_info_list_v2_body"|"get_stranger_conversation_body"|"get_conversation_list_body"|undefined} body
         * @memberof im_proto.ResponseBody
         * @instance
         */
        Object.defineProperty(ResponseBody.prototype, "body", {
            get: $util.oneOfGetter($oneOfFields = ["send_message_body", "create_conversation_v2_body", "get_conversation_info_list_v2_body", "get_stranger_conversation_body", "get_conversation_list_body"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ResponseBody instance using the specified properties.
         * @function create
         * @memberof im_proto.ResponseBody
         * @static
         * @param {im_proto.IResponseBody=} [properties] Properties to set
         * @returns {im_proto.ResponseBody} ResponseBody instance
         */
        ResponseBody.create = function create(properties) {
            return new ResponseBody(properties);
        };

        /**
         * Encodes the specified ResponseBody message. Does not implicitly {@link im_proto.ResponseBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.ResponseBody
         * @static
         * @param {im_proto.IResponseBody} message ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.send_message_body != null && Object.hasOwnProperty.call(message, "send_message_body"))
                $root.im_proto.SendMessageResponseBody.encode(message.send_message_body, writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message.create_conversation_v2_body != null && Object.hasOwnProperty.call(message, "create_conversation_v2_body"))
                $root.im_proto.CreateConversationV2ResponseBody.encode(message.create_conversation_v2_body, writer.uint32(/* id 609, wireType 2 =*/4874).fork()).ldelim();
            if (message.get_conversation_info_list_v2_body != null && Object.hasOwnProperty.call(message, "get_conversation_info_list_v2_body"))
                $root.im_proto.GetConversationInfoListV2ResponseBody.encode(message.get_conversation_info_list_v2_body, writer.uint32(/* id 610, wireType 2 =*/4882).fork()).ldelim();
            if (message.get_stranger_conversation_body != null && Object.hasOwnProperty.call(message, "get_stranger_conversation_body"))
                $root.im_proto.GetStrangerConversationListResponseBody.encode(message.get_stranger_conversation_body, writer.uint32(/* id 1000, wireType 2 =*/8002).fork()).ldelim();
            if (message.get_conversation_list_body != null && Object.hasOwnProperty.call(message, "get_conversation_list_body"))
                $root.im_proto.GetUserConversationListResponseBody.encode(message.get_conversation_list_body, writer.uint32(/* id 2006, wireType 2 =*/16050).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ResponseBody message, length delimited. Does not implicitly {@link im_proto.ResponseBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.ResponseBody
         * @static
         * @param {im_proto.IResponseBody} message ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ResponseBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.ResponseBody} ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.ResponseBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 100: {
                        message.send_message_body = $root.im_proto.SendMessageResponseBody.decode(reader, reader.uint32());
                        break;
                    }
                case 609: {
                        message.create_conversation_v2_body = $root.im_proto.CreateConversationV2ResponseBody.decode(reader, reader.uint32());
                        break;
                    }
                case 610: {
                        message.get_conversation_info_list_v2_body = $root.im_proto.GetConversationInfoListV2ResponseBody.decode(reader, reader.uint32());
                        break;
                    }
                case 1000: {
                        message.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListResponseBody.decode(reader, reader.uint32());
                        break;
                    }
                case 2006: {
                        message.get_conversation_list_body = $root.im_proto.GetUserConversationListResponseBody.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ResponseBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.ResponseBody} ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ResponseBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ResponseBody message.
         * @function verify
         * @memberof im_proto.ResponseBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ResponseBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.send_message_body != null && message.hasOwnProperty("send_message_body")) {
                properties.body = 1;
                {
                    var error = $root.im_proto.SendMessageResponseBody.verify(message.send_message_body);
                    if (error)
                        return "send_message_body." + error;
                }
            }
            if (message.create_conversation_v2_body != null && message.hasOwnProperty("create_conversation_v2_body")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.im_proto.CreateConversationV2ResponseBody.verify(message.create_conversation_v2_body);
                    if (error)
                        return "create_conversation_v2_body." + error;
                }
            }
            if (message.get_conversation_info_list_v2_body != null && message.hasOwnProperty("get_conversation_info_list_v2_body")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.im_proto.GetConversationInfoListV2ResponseBody.verify(message.get_conversation_info_list_v2_body);
                    if (error)
                        return "get_conversation_info_list_v2_body." + error;
                }
            }
            if (message.get_stranger_conversation_body != null && message.hasOwnProperty("get_stranger_conversation_body")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.im_proto.GetStrangerConversationListResponseBody.verify(message.get_stranger_conversation_body);
                    if (error)
                        return "get_stranger_conversation_body." + error;
                }
            }
            if (message.get_conversation_list_body != null && message.hasOwnProperty("get_conversation_list_body")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.im_proto.GetUserConversationListResponseBody.verify(message.get_conversation_list_body);
                    if (error)
                        return "get_conversation_list_body." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ResponseBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.ResponseBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.ResponseBody} ResponseBody
         */
        ResponseBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.ResponseBody)
                return object;
            var message = new $root.im_proto.ResponseBody();
            if (object.send_message_body != null) {
                if (typeof object.send_message_body !== "object")
                    throw TypeError(".im_proto.ResponseBody.send_message_body: object expected");
                message.send_message_body = $root.im_proto.SendMessageResponseBody.fromObject(object.send_message_body);
            }
            if (object.create_conversation_v2_body != null) {
                if (typeof object.create_conversation_v2_body !== "object")
                    throw TypeError(".im_proto.ResponseBody.create_conversation_v2_body: object expected");
                message.create_conversation_v2_body = $root.im_proto.CreateConversationV2ResponseBody.fromObject(object.create_conversation_v2_body);
            }
            if (object.get_conversation_info_list_v2_body != null) {
                if (typeof object.get_conversation_info_list_v2_body !== "object")
                    throw TypeError(".im_proto.ResponseBody.get_conversation_info_list_v2_body: object expected");
                message.get_conversation_info_list_v2_body = $root.im_proto.GetConversationInfoListV2ResponseBody.fromObject(object.get_conversation_info_list_v2_body);
            }
            if (object.get_stranger_conversation_body != null) {
                if (typeof object.get_stranger_conversation_body !== "object")
                    throw TypeError(".im_proto.ResponseBody.get_stranger_conversation_body: object expected");
                message.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListResponseBody.fromObject(object.get_stranger_conversation_body);
            }
            if (object.get_conversation_list_body != null) {
                if (typeof object.get_conversation_list_body !== "object")
                    throw TypeError(".im_proto.ResponseBody.get_conversation_list_body: object expected");
                message.get_conversation_list_body = $root.im_proto.GetUserConversationListResponseBody.fromObject(object.get_conversation_list_body);
            }
            return message;
        };

        /**
         * Creates a plain object from a ResponseBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.ResponseBody
         * @static
         * @param {im_proto.ResponseBody} message ResponseBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ResponseBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.send_message_body != null && message.hasOwnProperty("send_message_body")) {
                object.send_message_body = $root.im_proto.SendMessageResponseBody.toObject(message.send_message_body, options);
                if (options.oneofs)
                    object.body = "send_message_body";
            }
            if (message.create_conversation_v2_body != null && message.hasOwnProperty("create_conversation_v2_body")) {
                object.create_conversation_v2_body = $root.im_proto.CreateConversationV2ResponseBody.toObject(message.create_conversation_v2_body, options);
                if (options.oneofs)
                    object.body = "create_conversation_v2_body";
            }
            if (message.get_conversation_info_list_v2_body != null && message.hasOwnProperty("get_conversation_info_list_v2_body")) {
                object.get_conversation_info_list_v2_body = $root.im_proto.GetConversationInfoListV2ResponseBody.toObject(message.get_conversation_info_list_v2_body, options);
                if (options.oneofs)
                    object.body = "get_conversation_info_list_v2_body";
            }
            if (message.get_stranger_conversation_body != null && message.hasOwnProperty("get_stranger_conversation_body")) {
                object.get_stranger_conversation_body = $root.im_proto.GetStrangerConversationListResponseBody.toObject(message.get_stranger_conversation_body, options);
                if (options.oneofs)
                    object.body = "get_stranger_conversation_body";
            }
            if (message.get_conversation_list_body != null && message.hasOwnProperty("get_conversation_list_body")) {
                object.get_conversation_list_body = $root.im_proto.GetUserConversationListResponseBody.toObject(message.get_conversation_list_body, options);
                if (options.oneofs)
                    object.body = "get_conversation_list_body";
            }
            return object;
        };

        /**
         * Converts this ResponseBody to JSON.
         * @function toJSON
         * @memberof im_proto.ResponseBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ResponseBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ResponseBody
         * @function getTypeUrl
         * @memberof im_proto.ResponseBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ResponseBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.ResponseBody";
        };

        return ResponseBody;
    })();

    im_proto.SendMessageResponseBody = (function() {

        /**
         * Properties of a SendMessageResponseBody.
         * @memberof im_proto
         * @interface ISendMessageResponseBody
         * @property {number|Long|null} [server_message_id] SendMessageResponseBody server_message_id
         * @property {string|null} [extra_info] SendMessageResponseBody extra_info
         * @property {number|null} [status] SendMessageResponseBody status
         * @property {string|null} [client_message_id] SendMessageResponseBody client_message_id
         * @property {number|Long|null} [check_code] SendMessageResponseBody check_code
         * @property {string|null} [check_message] SendMessageResponseBody check_message
         * @property {string|null} [filtered_content] SendMessageResponseBody filtered_content
         * @property {boolean|null} [is_async_send] SendMessageResponseBody is_async_send
         * @property {string|null} [new_ticket] SendMessageResponseBody new_ticket
         * @property {im_proto.IConversationInfoV2|null} [conversation] SendMessageResponseBody conversation
         * @property {number|null} [inboxPageCategory] SendMessageResponseBody inboxPageCategory
         * @property {number|null} [filter_reason] SendMessageResponseBody filter_reason
         */

        /**
         * Constructs a new SendMessageResponseBody.
         * @memberof im_proto
         * @classdesc Represents a SendMessageResponseBody.
         * @implements ISendMessageResponseBody
         * @constructor
         * @param {im_proto.ISendMessageResponseBody=} [properties] Properties to set
         */
        function SendMessageResponseBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendMessageResponseBody server_message_id.
         * @member {number|Long} server_message_id
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.server_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SendMessageResponseBody extra_info.
         * @member {string} extra_info
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.extra_info = "";

        /**
         * SendMessageResponseBody status.
         * @member {number} status
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.status = 0;

        /**
         * SendMessageResponseBody client_message_id.
         * @member {string} client_message_id
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.client_message_id = "";

        /**
         * SendMessageResponseBody check_code.
         * @member {number|Long} check_code
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SendMessageResponseBody check_message.
         * @member {string} check_message
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.check_message = "";

        /**
         * SendMessageResponseBody filtered_content.
         * @member {string} filtered_content
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.filtered_content = "";

        /**
         * SendMessageResponseBody is_async_send.
         * @member {boolean} is_async_send
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.is_async_send = false;

        /**
         * SendMessageResponseBody new_ticket.
         * @member {string} new_ticket
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.new_ticket = "";

        /**
         * SendMessageResponseBody conversation.
         * @member {im_proto.IConversationInfoV2|null|undefined} conversation
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.conversation = null;

        /**
         * SendMessageResponseBody inboxPageCategory.
         * @member {number} inboxPageCategory
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.inboxPageCategory = 0;

        /**
         * SendMessageResponseBody filter_reason.
         * @member {number} filter_reason
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         */
        SendMessageResponseBody.prototype.filter_reason = 0;

        /**
         * Creates a new SendMessageResponseBody instance using the specified properties.
         * @function create
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {im_proto.ISendMessageResponseBody=} [properties] Properties to set
         * @returns {im_proto.SendMessageResponseBody} SendMessageResponseBody instance
         */
        SendMessageResponseBody.create = function create(properties) {
            return new SendMessageResponseBody(properties);
        };

        /**
         * Encodes the specified SendMessageResponseBody message. Does not implicitly {@link im_proto.SendMessageResponseBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {im_proto.ISendMessageResponseBody} message SendMessageResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponseBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server_message_id != null && Object.hasOwnProperty.call(message, "server_message_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.server_message_id);
            if (message.extra_info != null && Object.hasOwnProperty.call(message, "extra_info"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.extra_info);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
            if (message.client_message_id != null && Object.hasOwnProperty.call(message, "client_message_id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.client_message_id);
            if (message.check_code != null && Object.hasOwnProperty.call(message, "check_code"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.check_code);
            if (message.check_message != null && Object.hasOwnProperty.call(message, "check_message"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.check_message);
            if (message.filtered_content != null && Object.hasOwnProperty.call(message, "filtered_content"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.filtered_content);
            if (message.is_async_send != null && Object.hasOwnProperty.call(message, "is_async_send"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is_async_send);
            if (message.new_ticket != null && Object.hasOwnProperty.call(message, "new_ticket"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.new_ticket);
            if (message.conversation != null && Object.hasOwnProperty.call(message, "conversation"))
                $root.im_proto.ConversationInfoV2.encode(message.conversation, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.inboxPageCategory != null && Object.hasOwnProperty.call(message, "inboxPageCategory"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.inboxPageCategory);
            if (message.filter_reason != null && Object.hasOwnProperty.call(message, "filter_reason"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.filter_reason);
            return writer;
        };

        /**
         * Encodes the specified SendMessageResponseBody message, length delimited. Does not implicitly {@link im_proto.SendMessageResponseBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {im_proto.ISendMessageResponseBody} message SendMessageResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendMessageResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendMessageResponseBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.SendMessageResponseBody} SendMessageResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponseBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.SendMessageResponseBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.server_message_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.extra_info = reader.string();
                        break;
                    }
                case 3: {
                        message.status = reader.int32();
                        break;
                    }
                case 4: {
                        message.client_message_id = reader.string();
                        break;
                    }
                case 5: {
                        message.check_code = reader.int64();
                        break;
                    }
                case 6: {
                        message.check_message = reader.string();
                        break;
                    }
                case 7: {
                        message.filtered_content = reader.string();
                        break;
                    }
                case 8: {
                        message.is_async_send = reader.bool();
                        break;
                    }
                case 9: {
                        message.new_ticket = reader.string();
                        break;
                    }
                case 10: {
                        message.conversation = $root.im_proto.ConversationInfoV2.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.inboxPageCategory = reader.int32();
                        break;
                    }
                case 13: {
                        message.filter_reason = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SendMessageResponseBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.SendMessageResponseBody} SendMessageResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendMessageResponseBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendMessageResponseBody message.
         * @function verify
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendMessageResponseBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.server_message_id != null && message.hasOwnProperty("server_message_id"))
                if (!$util.isInteger(message.server_message_id) && !(message.server_message_id && $util.isInteger(message.server_message_id.low) && $util.isInteger(message.server_message_id.high)))
                    return "server_message_id: integer|Long expected";
            if (message.extra_info != null && message.hasOwnProperty("extra_info"))
                if (!$util.isString(message.extra_info))
                    return "extra_info: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.client_message_id != null && message.hasOwnProperty("client_message_id"))
                if (!$util.isString(message.client_message_id))
                    return "client_message_id: string expected";
            if (message.check_code != null && message.hasOwnProperty("check_code"))
                if (!$util.isInteger(message.check_code) && !(message.check_code && $util.isInteger(message.check_code.low) && $util.isInteger(message.check_code.high)))
                    return "check_code: integer|Long expected";
            if (message.check_message != null && message.hasOwnProperty("check_message"))
                if (!$util.isString(message.check_message))
                    return "check_message: string expected";
            if (message.filtered_content != null && message.hasOwnProperty("filtered_content"))
                if (!$util.isString(message.filtered_content))
                    return "filtered_content: string expected";
            if (message.is_async_send != null && message.hasOwnProperty("is_async_send"))
                if (typeof message.is_async_send !== "boolean")
                    return "is_async_send: boolean expected";
            if (message.new_ticket != null && message.hasOwnProperty("new_ticket"))
                if (!$util.isString(message.new_ticket))
                    return "new_ticket: string expected";
            if (message.conversation != null && message.hasOwnProperty("conversation")) {
                var error = $root.im_proto.ConversationInfoV2.verify(message.conversation);
                if (error)
                    return "conversation." + error;
            }
            if (message.inboxPageCategory != null && message.hasOwnProperty("inboxPageCategory"))
                if (!$util.isInteger(message.inboxPageCategory))
                    return "inboxPageCategory: integer expected";
            if (message.filter_reason != null && message.hasOwnProperty("filter_reason"))
                if (!$util.isInteger(message.filter_reason))
                    return "filter_reason: integer expected";
            return null;
        };

        /**
         * Creates a SendMessageResponseBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.SendMessageResponseBody} SendMessageResponseBody
         */
        SendMessageResponseBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.SendMessageResponseBody)
                return object;
            var message = new $root.im_proto.SendMessageResponseBody();
            if (object.server_message_id != null)
                if ($util.Long)
                    (message.server_message_id = $util.Long.fromValue(object.server_message_id)).unsigned = false;
                else if (typeof object.server_message_id === "string")
                    message.server_message_id = parseInt(object.server_message_id, 10);
                else if (typeof object.server_message_id === "number")
                    message.server_message_id = object.server_message_id;
                else if (typeof object.server_message_id === "object")
                    message.server_message_id = new $util.LongBits(object.server_message_id.low >>> 0, object.server_message_id.high >>> 0).toNumber();
            if (object.extra_info != null)
                message.extra_info = String(object.extra_info);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.client_message_id != null)
                message.client_message_id = String(object.client_message_id);
            if (object.check_code != null)
                if ($util.Long)
                    (message.check_code = $util.Long.fromValue(object.check_code)).unsigned = false;
                else if (typeof object.check_code === "string")
                    message.check_code = parseInt(object.check_code, 10);
                else if (typeof object.check_code === "number")
                    message.check_code = object.check_code;
                else if (typeof object.check_code === "object")
                    message.check_code = new $util.LongBits(object.check_code.low >>> 0, object.check_code.high >>> 0).toNumber();
            if (object.check_message != null)
                message.check_message = String(object.check_message);
            if (object.filtered_content != null)
                message.filtered_content = String(object.filtered_content);
            if (object.is_async_send != null)
                message.is_async_send = Boolean(object.is_async_send);
            if (object.new_ticket != null)
                message.new_ticket = String(object.new_ticket);
            if (object.conversation != null) {
                if (typeof object.conversation !== "object")
                    throw TypeError(".im_proto.SendMessageResponseBody.conversation: object expected");
                message.conversation = $root.im_proto.ConversationInfoV2.fromObject(object.conversation);
            }
            if (object.inboxPageCategory != null)
                message.inboxPageCategory = object.inboxPageCategory | 0;
            if (object.filter_reason != null)
                message.filter_reason = object.filter_reason | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendMessageResponseBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {im_proto.SendMessageResponseBody} message SendMessageResponseBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendMessageResponseBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.server_message_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.server_message_id = options.longs === String ? "0" : 0;
                object.extra_info = "";
                object.status = 0;
                object.client_message_id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.check_code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.check_code = options.longs === String ? "0" : 0;
                object.check_message = "";
                object.filtered_content = "";
                object.is_async_send = false;
                object.new_ticket = "";
                object.conversation = null;
                object.inboxPageCategory = 0;
                object.filter_reason = 0;
            }
            if (message.server_message_id != null && message.hasOwnProperty("server_message_id"))
                if (typeof message.server_message_id === "number")
                    object.server_message_id = options.longs === String ? String(message.server_message_id) : message.server_message_id;
                else
                    object.server_message_id = options.longs === String ? $util.Long.prototype.toString.call(message.server_message_id) : options.longs === Number ? new $util.LongBits(message.server_message_id.low >>> 0, message.server_message_id.high >>> 0).toNumber() : message.server_message_id;
            if (message.extra_info != null && message.hasOwnProperty("extra_info"))
                object.extra_info = message.extra_info;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.client_message_id != null && message.hasOwnProperty("client_message_id"))
                object.client_message_id = message.client_message_id;
            if (message.check_code != null && message.hasOwnProperty("check_code"))
                if (typeof message.check_code === "number")
                    object.check_code = options.longs === String ? String(message.check_code) : message.check_code;
                else
                    object.check_code = options.longs === String ? $util.Long.prototype.toString.call(message.check_code) : options.longs === Number ? new $util.LongBits(message.check_code.low >>> 0, message.check_code.high >>> 0).toNumber() : message.check_code;
            if (message.check_message != null && message.hasOwnProperty("check_message"))
                object.check_message = message.check_message;
            if (message.filtered_content != null && message.hasOwnProperty("filtered_content"))
                object.filtered_content = message.filtered_content;
            if (message.is_async_send != null && message.hasOwnProperty("is_async_send"))
                object.is_async_send = message.is_async_send;
            if (message.new_ticket != null && message.hasOwnProperty("new_ticket"))
                object.new_ticket = message.new_ticket;
            if (message.conversation != null && message.hasOwnProperty("conversation"))
                object.conversation = $root.im_proto.ConversationInfoV2.toObject(message.conversation, options);
            if (message.inboxPageCategory != null && message.hasOwnProperty("inboxPageCategory"))
                object.inboxPageCategory = message.inboxPageCategory;
            if (message.filter_reason != null && message.hasOwnProperty("filter_reason"))
                object.filter_reason = message.filter_reason;
            return object;
        };

        /**
         * Converts this SendMessageResponseBody to JSON.
         * @function toJSON
         * @memberof im_proto.SendMessageResponseBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendMessageResponseBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendMessageResponseBody
         * @function getTypeUrl
         * @memberof im_proto.SendMessageResponseBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendMessageResponseBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.SendMessageResponseBody";
        };

        return SendMessageResponseBody;
    })();

    im_proto.CreateConversationV2ResponseBody = (function() {

        /**
         * Properties of a CreateConversationV2ResponseBody.
         * @memberof im_proto
         * @interface ICreateConversationV2ResponseBody
         * @property {im_proto.IConversationInfoV2|null} [conversation] CreateConversationV2ResponseBody conversation
         * @property {number|Long|null} [check_code] CreateConversationV2ResponseBody check_code
         * @property {string|null} [check_message] CreateConversationV2ResponseBody check_message
         * @property {string|null} [extra_info] CreateConversationV2ResponseBody extra_info
         * @property {number|null} [status] CreateConversationV2ResponseBody status
         */

        /**
         * Constructs a new CreateConversationV2ResponseBody.
         * @memberof im_proto
         * @classdesc Represents a CreateConversationV2ResponseBody.
         * @implements ICreateConversationV2ResponseBody
         * @constructor
         * @param {im_proto.ICreateConversationV2ResponseBody=} [properties] Properties to set
         */
        function CreateConversationV2ResponseBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateConversationV2ResponseBody conversation.
         * @member {im_proto.IConversationInfoV2|null|undefined} conversation
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @instance
         */
        CreateConversationV2ResponseBody.prototype.conversation = null;

        /**
         * CreateConversationV2ResponseBody check_code.
         * @member {number|Long} check_code
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @instance
         */
        CreateConversationV2ResponseBody.prototype.check_code = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateConversationV2ResponseBody check_message.
         * @member {string} check_message
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @instance
         */
        CreateConversationV2ResponseBody.prototype.check_message = "";

        /**
         * CreateConversationV2ResponseBody extra_info.
         * @member {string} extra_info
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @instance
         */
        CreateConversationV2ResponseBody.prototype.extra_info = "";

        /**
         * CreateConversationV2ResponseBody status.
         * @member {number} status
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @instance
         */
        CreateConversationV2ResponseBody.prototype.status = 0;

        /**
         * Creates a new CreateConversationV2ResponseBody instance using the specified properties.
         * @function create
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {im_proto.ICreateConversationV2ResponseBody=} [properties] Properties to set
         * @returns {im_proto.CreateConversationV2ResponseBody} CreateConversationV2ResponseBody instance
         */
        CreateConversationV2ResponseBody.create = function create(properties) {
            return new CreateConversationV2ResponseBody(properties);
        };

        /**
         * Encodes the specified CreateConversationV2ResponseBody message. Does not implicitly {@link im_proto.CreateConversationV2ResponseBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {im_proto.ICreateConversationV2ResponseBody} message CreateConversationV2ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateConversationV2ResponseBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation != null && Object.hasOwnProperty.call(message, "conversation"))
                $root.im_proto.ConversationInfoV2.encode(message.conversation, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.check_code != null && Object.hasOwnProperty.call(message, "check_code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.check_code);
            if (message.check_message != null && Object.hasOwnProperty.call(message, "check_message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.check_message);
            if (message.extra_info != null && Object.hasOwnProperty.call(message, "extra_info"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.extra_info);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified CreateConversationV2ResponseBody message, length delimited. Does not implicitly {@link im_proto.CreateConversationV2ResponseBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {im_proto.ICreateConversationV2ResponseBody} message CreateConversationV2ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateConversationV2ResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateConversationV2ResponseBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.CreateConversationV2ResponseBody} CreateConversationV2ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateConversationV2ResponseBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.CreateConversationV2ResponseBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation = $root.im_proto.ConversationInfoV2.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.check_code = reader.int64();
                        break;
                    }
                case 3: {
                        message.check_message = reader.string();
                        break;
                    }
                case 4: {
                        message.extra_info = reader.string();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateConversationV2ResponseBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.CreateConversationV2ResponseBody} CreateConversationV2ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateConversationV2ResponseBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateConversationV2ResponseBody message.
         * @function verify
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateConversationV2ResponseBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation != null && message.hasOwnProperty("conversation")) {
                var error = $root.im_proto.ConversationInfoV2.verify(message.conversation);
                if (error)
                    return "conversation." + error;
            }
            if (message.check_code != null && message.hasOwnProperty("check_code"))
                if (!$util.isInteger(message.check_code) && !(message.check_code && $util.isInteger(message.check_code.low) && $util.isInteger(message.check_code.high)))
                    return "check_code: integer|Long expected";
            if (message.check_message != null && message.hasOwnProperty("check_message"))
                if (!$util.isString(message.check_message))
                    return "check_message: string expected";
            if (message.extra_info != null && message.hasOwnProperty("extra_info"))
                if (!$util.isString(message.extra_info))
                    return "extra_info: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a CreateConversationV2ResponseBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.CreateConversationV2ResponseBody} CreateConversationV2ResponseBody
         */
        CreateConversationV2ResponseBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.CreateConversationV2ResponseBody)
                return object;
            var message = new $root.im_proto.CreateConversationV2ResponseBody();
            if (object.conversation != null) {
                if (typeof object.conversation !== "object")
                    throw TypeError(".im_proto.CreateConversationV2ResponseBody.conversation: object expected");
                message.conversation = $root.im_proto.ConversationInfoV2.fromObject(object.conversation);
            }
            if (object.check_code != null)
                if ($util.Long)
                    (message.check_code = $util.Long.fromValue(object.check_code)).unsigned = false;
                else if (typeof object.check_code === "string")
                    message.check_code = parseInt(object.check_code, 10);
                else if (typeof object.check_code === "number")
                    message.check_code = object.check_code;
                else if (typeof object.check_code === "object")
                    message.check_code = new $util.LongBits(object.check_code.low >>> 0, object.check_code.high >>> 0).toNumber();
            if (object.check_message != null)
                message.check_message = String(object.check_message);
            if (object.extra_info != null)
                message.extra_info = String(object.extra_info);
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateConversationV2ResponseBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {im_proto.CreateConversationV2ResponseBody} message CreateConversationV2ResponseBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateConversationV2ResponseBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.conversation = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.check_code = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.check_code = options.longs === String ? "0" : 0;
                object.check_message = "";
                object.extra_info = "";
                object.status = 0;
            }
            if (message.conversation != null && message.hasOwnProperty("conversation"))
                object.conversation = $root.im_proto.ConversationInfoV2.toObject(message.conversation, options);
            if (message.check_code != null && message.hasOwnProperty("check_code"))
                if (typeof message.check_code === "number")
                    object.check_code = options.longs === String ? String(message.check_code) : message.check_code;
                else
                    object.check_code = options.longs === String ? $util.Long.prototype.toString.call(message.check_code) : options.longs === Number ? new $util.LongBits(message.check_code.low >>> 0, message.check_code.high >>> 0).toNumber() : message.check_code;
            if (message.check_message != null && message.hasOwnProperty("check_message"))
                object.check_message = message.check_message;
            if (message.extra_info != null && message.hasOwnProperty("extra_info"))
                object.extra_info = message.extra_info;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this CreateConversationV2ResponseBody to JSON.
         * @function toJSON
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateConversationV2ResponseBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateConversationV2ResponseBody
         * @function getTypeUrl
         * @memberof im_proto.CreateConversationV2ResponseBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateConversationV2ResponseBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.CreateConversationV2ResponseBody";
        };

        return CreateConversationV2ResponseBody;
    })();

    im_proto.ConversationCoreInfo = (function() {

        /**
         * Properties of a ConversationCoreInfo.
         * @memberof im_proto
         * @interface IConversationCoreInfo
         * @property {string|null} [conversation_id] ConversationCoreInfo conversation_id
         * @property {number|Long|null} [conversation_short_id] ConversationCoreInfo conversation_short_id
         * @property {number|null} [conversation_type] ConversationCoreInfo conversation_type
         * @property {number|Long|null} [info_version] ConversationCoreInfo info_version
         * @property {string|null} [name] ConversationCoreInfo name
         * @property {string|null} [desc] ConversationCoreInfo desc
         * @property {string|null} [icon] ConversationCoreInfo icon
         * @property {number|null} [inbox_type] ConversationCoreInfo inbox_type
         * @property {string|null} [notice] ConversationCoreInfo notice
         * @property {Object.<string,string>|null} [ext] ConversationCoreInfo ext
         * @property {number|Long|null} [owner] ConversationCoreInfo owner
         * @property {string|null} [sec_owner] ConversationCoreInfo sec_owner
         * @property {number|null} [block_status] ConversationCoreInfo block_status
         * @property {boolean|null} [block_normal_only] ConversationCoreInfo block_normal_only
         * @property {number|null} [mode] ConversationCoreInfo mode
         * @property {number|Long|null} [creator_uid] ConversationCoreInfo creator_uid
         */

        /**
         * Constructs a new ConversationCoreInfo.
         * @memberof im_proto
         * @classdesc Represents a ConversationCoreInfo.
         * @implements IConversationCoreInfo
         * @constructor
         * @param {im_proto.IConversationCoreInfo=} [properties] Properties to set
         */
        function ConversationCoreInfo(properties) {
            this.ext = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConversationCoreInfo conversation_id.
         * @member {string} conversation_id
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.conversation_id = "";

        /**
         * ConversationCoreInfo conversation_short_id.
         * @member {number|Long} conversation_short_id
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConversationCoreInfo conversation_type.
         * @member {number} conversation_type
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.conversation_type = 0;

        /**
         * ConversationCoreInfo info_version.
         * @member {number|Long} info_version
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.info_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConversationCoreInfo name.
         * @member {string} name
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.name = "";

        /**
         * ConversationCoreInfo desc.
         * @member {string} desc
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.desc = "";

        /**
         * ConversationCoreInfo icon.
         * @member {string} icon
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.icon = "";

        /**
         * ConversationCoreInfo inbox_type.
         * @member {number} inbox_type
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.inbox_type = 0;

        /**
         * ConversationCoreInfo notice.
         * @member {string} notice
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.notice = "";

        /**
         * ConversationCoreInfo ext.
         * @member {Object.<string,string>} ext
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.ext = $util.emptyObject;

        /**
         * ConversationCoreInfo owner.
         * @member {number|Long} owner
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.owner = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConversationCoreInfo sec_owner.
         * @member {string} sec_owner
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.sec_owner = "";

        /**
         * ConversationCoreInfo block_status.
         * @member {number} block_status
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.block_status = 0;

        /**
         * ConversationCoreInfo block_normal_only.
         * @member {boolean} block_normal_only
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.block_normal_only = false;

        /**
         * ConversationCoreInfo mode.
         * @member {number} mode
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.mode = 0;

        /**
         * ConversationCoreInfo creator_uid.
         * @member {number|Long} creator_uid
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         */
        ConversationCoreInfo.prototype.creator_uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ConversationCoreInfo instance using the specified properties.
         * @function create
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {im_proto.IConversationCoreInfo=} [properties] Properties to set
         * @returns {im_proto.ConversationCoreInfo} ConversationCoreInfo instance
         */
        ConversationCoreInfo.create = function create(properties) {
            return new ConversationCoreInfo(properties);
        };

        /**
         * Encodes the specified ConversationCoreInfo message. Does not implicitly {@link im_proto.ConversationCoreInfo.verify|verify} messages.
         * @function encode
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {im_proto.IConversationCoreInfo} message ConversationCoreInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationCoreInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversation_id);
            if (message.conversation_short_id != null && Object.hasOwnProperty.call(message, "conversation_short_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.conversation_short_id);
            if (message.conversation_type != null && Object.hasOwnProperty.call(message, "conversation_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.conversation_type);
            if (message.info_version != null && Object.hasOwnProperty.call(message, "info_version"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.info_version);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.desc);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.icon);
            if (message.inbox_type != null && Object.hasOwnProperty.call(message, "inbox_type"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.inbox_type);
            if (message.notice != null && Object.hasOwnProperty.call(message, "notice"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.notice);
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                for (var keys = Object.keys(message.ext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.ext[keys[i]]).ldelim();
            if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.owner);
            if (message.sec_owner != null && Object.hasOwnProperty.call(message, "sec_owner"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.sec_owner);
            if (message.block_status != null && Object.hasOwnProperty.call(message, "block_status"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.block_status);
            if (message.block_normal_only != null && Object.hasOwnProperty.call(message, "block_normal_only"))
                writer.uint32(/* id 15, wireType 0 =*/120).bool(message.block_normal_only);
            if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.mode);
            if (message.creator_uid != null && Object.hasOwnProperty.call(message, "creator_uid"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.creator_uid);
            return writer;
        };

        /**
         * Encodes the specified ConversationCoreInfo message, length delimited. Does not implicitly {@link im_proto.ConversationCoreInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {im_proto.IConversationCoreInfo} message ConversationCoreInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationCoreInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConversationCoreInfo message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.ConversationCoreInfo} ConversationCoreInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationCoreInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.ConversationCoreInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_id = reader.string();
                        break;
                    }
                case 2: {
                        message.conversation_short_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.conversation_type = reader.int32();
                        break;
                    }
                case 4: {
                        message.info_version = reader.int64();
                        break;
                    }
                case 5: {
                        message.name = reader.string();
                        break;
                    }
                case 6: {
                        message.desc = reader.string();
                        break;
                    }
                case 7: {
                        message.icon = reader.string();
                        break;
                    }
                case 8: {
                        message.inbox_type = reader.int32();
                        break;
                    }
                case 9: {
                        message.notice = reader.string();
                        break;
                    }
                case 11: {
                        if (message.ext === $util.emptyObject)
                            message.ext = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ext[key] = value;
                        break;
                    }
                case 12: {
                        message.owner = reader.int64();
                        break;
                    }
                case 13: {
                        message.sec_owner = reader.string();
                        break;
                    }
                case 14: {
                        message.block_status = reader.int32();
                        break;
                    }
                case 15: {
                        message.block_normal_only = reader.bool();
                        break;
                    }
                case 16: {
                        message.mode = reader.int32();
                        break;
                    }
                case 17: {
                        message.creator_uid = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConversationCoreInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.ConversationCoreInfo} ConversationCoreInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationCoreInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConversationCoreInfo message.
         * @function verify
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConversationCoreInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                if (!$util.isString(message.conversation_id))
                    return "conversation_id: string expected";
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (!$util.isInteger(message.conversation_short_id) && !(message.conversation_short_id && $util.isInteger(message.conversation_short_id.low) && $util.isInteger(message.conversation_short_id.high)))
                    return "conversation_short_id: integer|Long expected";
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                if (!$util.isInteger(message.conversation_type))
                    return "conversation_type: integer expected";
            if (message.info_version != null && message.hasOwnProperty("info_version"))
                if (!$util.isInteger(message.info_version) && !(message.info_version && $util.isInteger(message.info_version.low) && $util.isInteger(message.info_version.high)))
                    return "info_version: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                if (!$util.isInteger(message.inbox_type))
                    return "inbox_type: integer expected";
            if (message.notice != null && message.hasOwnProperty("notice"))
                if (!$util.isString(message.notice))
                    return "notice: string expected";
            if (message.ext != null && message.hasOwnProperty("ext")) {
                if (!$util.isObject(message.ext))
                    return "ext: object expected";
                var key = Object.keys(message.ext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.ext[key[i]]))
                        return "ext: string{k:string} expected";
            }
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (!$util.isInteger(message.owner) && !(message.owner && $util.isInteger(message.owner.low) && $util.isInteger(message.owner.high)))
                    return "owner: integer|Long expected";
            if (message.sec_owner != null && message.hasOwnProperty("sec_owner"))
                if (!$util.isString(message.sec_owner))
                    return "sec_owner: string expected";
            if (message.block_status != null && message.hasOwnProperty("block_status"))
                if (!$util.isInteger(message.block_status))
                    return "block_status: integer expected";
            if (message.block_normal_only != null && message.hasOwnProperty("block_normal_only"))
                if (typeof message.block_normal_only !== "boolean")
                    return "block_normal_only: boolean expected";
            if (message.mode != null && message.hasOwnProperty("mode"))
                if (!$util.isInteger(message.mode))
                    return "mode: integer expected";
            if (message.creator_uid != null && message.hasOwnProperty("creator_uid"))
                if (!$util.isInteger(message.creator_uid) && !(message.creator_uid && $util.isInteger(message.creator_uid.low) && $util.isInteger(message.creator_uid.high)))
                    return "creator_uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a ConversationCoreInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.ConversationCoreInfo} ConversationCoreInfo
         */
        ConversationCoreInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.ConversationCoreInfo)
                return object;
            var message = new $root.im_proto.ConversationCoreInfo();
            if (object.conversation_id != null)
                message.conversation_id = String(object.conversation_id);
            if (object.conversation_short_id != null)
                if ($util.Long)
                    (message.conversation_short_id = $util.Long.fromValue(object.conversation_short_id)).unsigned = false;
                else if (typeof object.conversation_short_id === "string")
                    message.conversation_short_id = parseInt(object.conversation_short_id, 10);
                else if (typeof object.conversation_short_id === "number")
                    message.conversation_short_id = object.conversation_short_id;
                else if (typeof object.conversation_short_id === "object")
                    message.conversation_short_id = new $util.LongBits(object.conversation_short_id.low >>> 0, object.conversation_short_id.high >>> 0).toNumber();
            if (object.conversation_type != null)
                message.conversation_type = object.conversation_type | 0;
            if (object.info_version != null)
                if ($util.Long)
                    (message.info_version = $util.Long.fromValue(object.info_version)).unsigned = false;
                else if (typeof object.info_version === "string")
                    message.info_version = parseInt(object.info_version, 10);
                else if (typeof object.info_version === "number")
                    message.info_version = object.info_version;
                else if (typeof object.info_version === "object")
                    message.info_version = new $util.LongBits(object.info_version.low >>> 0, object.info_version.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.inbox_type != null)
                message.inbox_type = object.inbox_type | 0;
            if (object.notice != null)
                message.notice = String(object.notice);
            if (object.ext) {
                if (typeof object.ext !== "object")
                    throw TypeError(".im_proto.ConversationCoreInfo.ext: object expected");
                message.ext = {};
                for (var keys = Object.keys(object.ext), i = 0; i < keys.length; ++i)
                    message.ext[keys[i]] = String(object.ext[keys[i]]);
            }
            if (object.owner != null)
                if ($util.Long)
                    (message.owner = $util.Long.fromValue(object.owner)).unsigned = false;
                else if (typeof object.owner === "string")
                    message.owner = parseInt(object.owner, 10);
                else if (typeof object.owner === "number")
                    message.owner = object.owner;
                else if (typeof object.owner === "object")
                    message.owner = new $util.LongBits(object.owner.low >>> 0, object.owner.high >>> 0).toNumber();
            if (object.sec_owner != null)
                message.sec_owner = String(object.sec_owner);
            if (object.block_status != null)
                message.block_status = object.block_status | 0;
            if (object.block_normal_only != null)
                message.block_normal_only = Boolean(object.block_normal_only);
            if (object.mode != null)
                message.mode = object.mode | 0;
            if (object.creator_uid != null)
                if ($util.Long)
                    (message.creator_uid = $util.Long.fromValue(object.creator_uid)).unsigned = false;
                else if (typeof object.creator_uid === "string")
                    message.creator_uid = parseInt(object.creator_uid, 10);
                else if (typeof object.creator_uid === "number")
                    message.creator_uid = object.creator_uid;
                else if (typeof object.creator_uid === "object")
                    message.creator_uid = new $util.LongBits(object.creator_uid.low >>> 0, object.creator_uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ConversationCoreInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {im_proto.ConversationCoreInfo} message ConversationCoreInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConversationCoreInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.ext = {};
            if (options.defaults) {
                object.conversation_id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.conversation_short_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.conversation_short_id = options.longs === String ? "0" : 0;
                object.conversation_type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.info_version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.info_version = options.longs === String ? "0" : 0;
                object.name = "";
                object.desc = "";
                object.icon = "";
                object.inbox_type = 0;
                object.notice = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.owner = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.owner = options.longs === String ? "0" : 0;
                object.sec_owner = "";
                object.block_status = 0;
                object.block_normal_only = false;
                object.mode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.creator_uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.creator_uid = options.longs === String ? "0" : 0;
            }
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                object.conversation_id = message.conversation_id;
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (typeof message.conversation_short_id === "number")
                    object.conversation_short_id = options.longs === String ? String(message.conversation_short_id) : message.conversation_short_id;
                else
                    object.conversation_short_id = options.longs === String ? $util.Long.prototype.toString.call(message.conversation_short_id) : options.longs === Number ? new $util.LongBits(message.conversation_short_id.low >>> 0, message.conversation_short_id.high >>> 0).toNumber() : message.conversation_short_id;
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                object.conversation_type = message.conversation_type;
            if (message.info_version != null && message.hasOwnProperty("info_version"))
                if (typeof message.info_version === "number")
                    object.info_version = options.longs === String ? String(message.info_version) : message.info_version;
                else
                    object.info_version = options.longs === String ? $util.Long.prototype.toString.call(message.info_version) : options.longs === Number ? new $util.LongBits(message.info_version.low >>> 0, message.info_version.high >>> 0).toNumber() : message.info_version;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                object.inbox_type = message.inbox_type;
            if (message.notice != null && message.hasOwnProperty("notice"))
                object.notice = message.notice;
            var keys2;
            if (message.ext && (keys2 = Object.keys(message.ext)).length) {
                object.ext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.ext[keys2[j]] = message.ext[keys2[j]];
            }
            if (message.owner != null && message.hasOwnProperty("owner"))
                if (typeof message.owner === "number")
                    object.owner = options.longs === String ? String(message.owner) : message.owner;
                else
                    object.owner = options.longs === String ? $util.Long.prototype.toString.call(message.owner) : options.longs === Number ? new $util.LongBits(message.owner.low >>> 0, message.owner.high >>> 0).toNumber() : message.owner;
            if (message.sec_owner != null && message.hasOwnProperty("sec_owner"))
                object.sec_owner = message.sec_owner;
            if (message.block_status != null && message.hasOwnProperty("block_status"))
                object.block_status = message.block_status;
            if (message.block_normal_only != null && message.hasOwnProperty("block_normal_only"))
                object.block_normal_only = message.block_normal_only;
            if (message.mode != null && message.hasOwnProperty("mode"))
                object.mode = message.mode;
            if (message.creator_uid != null && message.hasOwnProperty("creator_uid"))
                if (typeof message.creator_uid === "number")
                    object.creator_uid = options.longs === String ? String(message.creator_uid) : message.creator_uid;
                else
                    object.creator_uid = options.longs === String ? $util.Long.prototype.toString.call(message.creator_uid) : options.longs === Number ? new $util.LongBits(message.creator_uid.low >>> 0, message.creator_uid.high >>> 0).toNumber() : message.creator_uid;
            return object;
        };

        /**
         * Converts this ConversationCoreInfo to JSON.
         * @function toJSON
         * @memberof im_proto.ConversationCoreInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConversationCoreInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConversationCoreInfo
         * @function getTypeUrl
         * @memberof im_proto.ConversationCoreInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConversationCoreInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.ConversationCoreInfo";
        };

        return ConversationCoreInfo;
    })();

    im_proto.Participant = (function() {

        /**
         * Properties of a Participant.
         * @memberof im_proto
         * @interface IParticipant
         * @property {number|Long|null} [user_id] Participant user_id
         * @property {number|Long|null} [sort_order] Participant sort_order
         * @property {number|null} [role] Participant role
         * @property {string|null} [alias] Participant alias
         * @property {string|null} [sec_uid] Participant sec_uid
         * @property {number|null} [blocked] Participant blocked
         * @property {number|Long|null} [left_block_time] Participant left_block_time
         * @property {Object.<string,string>|null} [ext] Participant ext
         */

        /**
         * Constructs a new Participant.
         * @memberof im_proto
         * @classdesc Represents a Participant.
         * @implements IParticipant
         * @constructor
         * @param {im_proto.IParticipant=} [properties] Properties to set
         */
        function Participant(properties) {
            this.ext = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Participant user_id.
         * @member {number|Long} user_id
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.user_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Participant sort_order.
         * @member {number|Long} sort_order
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.sort_order = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Participant role.
         * @member {number} role
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.role = 0;

        /**
         * Participant alias.
         * @member {string} alias
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.alias = "";

        /**
         * Participant sec_uid.
         * @member {string} sec_uid
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.sec_uid = "";

        /**
         * Participant blocked.
         * @member {number} blocked
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.blocked = 0;

        /**
         * Participant left_block_time.
         * @member {number|Long} left_block_time
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.left_block_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Participant ext.
         * @member {Object.<string,string>} ext
         * @memberof im_proto.Participant
         * @instance
         */
        Participant.prototype.ext = $util.emptyObject;

        /**
         * Creates a new Participant instance using the specified properties.
         * @function create
         * @memberof im_proto.Participant
         * @static
         * @param {im_proto.IParticipant=} [properties] Properties to set
         * @returns {im_proto.Participant} Participant instance
         */
        Participant.create = function create(properties) {
            return new Participant(properties);
        };

        /**
         * Encodes the specified Participant message. Does not implicitly {@link im_proto.Participant.verify|verify} messages.
         * @function encode
         * @memberof im_proto.Participant
         * @static
         * @param {im_proto.IParticipant} message Participant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Participant.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user_id != null && Object.hasOwnProperty.call(message, "user_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.user_id);
            if (message.sort_order != null && Object.hasOwnProperty.call(message, "sort_order"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sort_order);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.role);
            if (message.alias != null && Object.hasOwnProperty.call(message, "alias"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.alias);
            if (message.sec_uid != null && Object.hasOwnProperty.call(message, "sec_uid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sec_uid);
            if (message.blocked != null && Object.hasOwnProperty.call(message, "blocked"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.blocked);
            if (message.left_block_time != null && Object.hasOwnProperty.call(message, "left_block_time"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.left_block_time);
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                for (var keys = Object.keys(message.ext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.ext[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Participant message, length delimited. Does not implicitly {@link im_proto.Participant.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.Participant
         * @static
         * @param {im_proto.IParticipant} message Participant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Participant.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Participant message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.Participant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.Participant} Participant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Participant.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.Participant(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.sort_order = reader.int64();
                        break;
                    }
                case 3: {
                        message.role = reader.int32();
                        break;
                    }
                case 4: {
                        message.alias = reader.string();
                        break;
                    }
                case 5: {
                        message.sec_uid = reader.string();
                        break;
                    }
                case 6: {
                        message.blocked = reader.int32();
                        break;
                    }
                case 7: {
                        message.left_block_time = reader.int64();
                        break;
                    }
                case 8: {
                        if (message.ext === $util.emptyObject)
                            message.ext = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ext[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Participant message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.Participant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.Participant} Participant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Participant.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Participant message.
         * @function verify
         * @memberof im_proto.Participant
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Participant.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (!$util.isInteger(message.user_id) && !(message.user_id && $util.isInteger(message.user_id.low) && $util.isInteger(message.user_id.high)))
                    return "user_id: integer|Long expected";
            if (message.sort_order != null && message.hasOwnProperty("sort_order"))
                if (!$util.isInteger(message.sort_order) && !(message.sort_order && $util.isInteger(message.sort_order.low) && $util.isInteger(message.sort_order.high)))
                    return "sort_order: integer|Long expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isInteger(message.role))
                    return "role: integer expected";
            if (message.alias != null && message.hasOwnProperty("alias"))
                if (!$util.isString(message.alias))
                    return "alias: string expected";
            if (message.sec_uid != null && message.hasOwnProperty("sec_uid"))
                if (!$util.isString(message.sec_uid))
                    return "sec_uid: string expected";
            if (message.blocked != null && message.hasOwnProperty("blocked"))
                if (!$util.isInteger(message.blocked))
                    return "blocked: integer expected";
            if (message.left_block_time != null && message.hasOwnProperty("left_block_time"))
                if (!$util.isInteger(message.left_block_time) && !(message.left_block_time && $util.isInteger(message.left_block_time.low) && $util.isInteger(message.left_block_time.high)))
                    return "left_block_time: integer|Long expected";
            if (message.ext != null && message.hasOwnProperty("ext")) {
                if (!$util.isObject(message.ext))
                    return "ext: object expected";
                var key = Object.keys(message.ext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.ext[key[i]]))
                        return "ext: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a Participant message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.Participant
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.Participant} Participant
         */
        Participant.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.Participant)
                return object;
            var message = new $root.im_proto.Participant();
            if (object.user_id != null)
                if ($util.Long)
                    (message.user_id = $util.Long.fromValue(object.user_id)).unsigned = false;
                else if (typeof object.user_id === "string")
                    message.user_id = parseInt(object.user_id, 10);
                else if (typeof object.user_id === "number")
                    message.user_id = object.user_id;
                else if (typeof object.user_id === "object")
                    message.user_id = new $util.LongBits(object.user_id.low >>> 0, object.user_id.high >>> 0).toNumber();
            if (object.sort_order != null)
                if ($util.Long)
                    (message.sort_order = $util.Long.fromValue(object.sort_order)).unsigned = false;
                else if (typeof object.sort_order === "string")
                    message.sort_order = parseInt(object.sort_order, 10);
                else if (typeof object.sort_order === "number")
                    message.sort_order = object.sort_order;
                else if (typeof object.sort_order === "object")
                    message.sort_order = new $util.LongBits(object.sort_order.low >>> 0, object.sort_order.high >>> 0).toNumber();
            if (object.role != null)
                message.role = object.role | 0;
            if (object.alias != null)
                message.alias = String(object.alias);
            if (object.sec_uid != null)
                message.sec_uid = String(object.sec_uid);
            if (object.blocked != null)
                message.blocked = object.blocked | 0;
            if (object.left_block_time != null)
                if ($util.Long)
                    (message.left_block_time = $util.Long.fromValue(object.left_block_time)).unsigned = false;
                else if (typeof object.left_block_time === "string")
                    message.left_block_time = parseInt(object.left_block_time, 10);
                else if (typeof object.left_block_time === "number")
                    message.left_block_time = object.left_block_time;
                else if (typeof object.left_block_time === "object")
                    message.left_block_time = new $util.LongBits(object.left_block_time.low >>> 0, object.left_block_time.high >>> 0).toNumber();
            if (object.ext) {
                if (typeof object.ext !== "object")
                    throw TypeError(".im_proto.Participant.ext: object expected");
                message.ext = {};
                for (var keys = Object.keys(object.ext), i = 0; i < keys.length; ++i)
                    message.ext[keys[i]] = String(object.ext[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Participant message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.Participant
         * @static
         * @param {im_proto.Participant} message Participant
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Participant.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.ext = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.user_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.user_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sort_order = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sort_order = options.longs === String ? "0" : 0;
                object.role = 0;
                object.alias = "";
                object.sec_uid = "";
                object.blocked = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.left_block_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.left_block_time = options.longs === String ? "0" : 0;
            }
            if (message.user_id != null && message.hasOwnProperty("user_id"))
                if (typeof message.user_id === "number")
                    object.user_id = options.longs === String ? String(message.user_id) : message.user_id;
                else
                    object.user_id = options.longs === String ? $util.Long.prototype.toString.call(message.user_id) : options.longs === Number ? new $util.LongBits(message.user_id.low >>> 0, message.user_id.high >>> 0).toNumber() : message.user_id;
            if (message.sort_order != null && message.hasOwnProperty("sort_order"))
                if (typeof message.sort_order === "number")
                    object.sort_order = options.longs === String ? String(message.sort_order) : message.sort_order;
                else
                    object.sort_order = options.longs === String ? $util.Long.prototype.toString.call(message.sort_order) : options.longs === Number ? new $util.LongBits(message.sort_order.low >>> 0, message.sort_order.high >>> 0).toNumber() : message.sort_order;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = message.role;
            if (message.alias != null && message.hasOwnProperty("alias"))
                object.alias = message.alias;
            if (message.sec_uid != null && message.hasOwnProperty("sec_uid"))
                object.sec_uid = message.sec_uid;
            if (message.blocked != null && message.hasOwnProperty("blocked"))
                object.blocked = message.blocked;
            if (message.left_block_time != null && message.hasOwnProperty("left_block_time"))
                if (typeof message.left_block_time === "number")
                    object.left_block_time = options.longs === String ? String(message.left_block_time) : message.left_block_time;
                else
                    object.left_block_time = options.longs === String ? $util.Long.prototype.toString.call(message.left_block_time) : options.longs === Number ? new $util.LongBits(message.left_block_time.low >>> 0, message.left_block_time.high >>> 0).toNumber() : message.left_block_time;
            var keys2;
            if (message.ext && (keys2 = Object.keys(message.ext)).length) {
                object.ext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.ext[keys2[j]] = message.ext[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Participant to JSON.
         * @function toJSON
         * @memberof im_proto.Participant
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Participant.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Participant
         * @function getTypeUrl
         * @memberof im_proto.Participant
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Participant.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.Participant";
        };

        return Participant;
    })();

    im_proto.ParticipantsPage = (function() {

        /**
         * Properties of a ParticipantsPage.
         * @memberof im_proto
         * @interface IParticipantsPage
         * @property {Array.<im_proto.IParticipant>|null} [participants] ParticipantsPage participants
         * @property {boolean|null} [has_more] ParticipantsPage has_more
         * @property {number|Long|null} [cursor] ParticipantsPage cursor
         */

        /**
         * Constructs a new ParticipantsPage.
         * @memberof im_proto
         * @classdesc Represents a ParticipantsPage.
         * @implements IParticipantsPage
         * @constructor
         * @param {im_proto.IParticipantsPage=} [properties] Properties to set
         */
        function ParticipantsPage(properties) {
            this.participants = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParticipantsPage participants.
         * @member {Array.<im_proto.IParticipant>} participants
         * @memberof im_proto.ParticipantsPage
         * @instance
         */
        ParticipantsPage.prototype.participants = $util.emptyArray;

        /**
         * ParticipantsPage has_more.
         * @member {boolean} has_more
         * @memberof im_proto.ParticipantsPage
         * @instance
         */
        ParticipantsPage.prototype.has_more = false;

        /**
         * ParticipantsPage cursor.
         * @member {number|Long} cursor
         * @memberof im_proto.ParticipantsPage
         * @instance
         */
        ParticipantsPage.prototype.cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ParticipantsPage instance using the specified properties.
         * @function create
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {im_proto.IParticipantsPage=} [properties] Properties to set
         * @returns {im_proto.ParticipantsPage} ParticipantsPage instance
         */
        ParticipantsPage.create = function create(properties) {
            return new ParticipantsPage(properties);
        };

        /**
         * Encodes the specified ParticipantsPage message. Does not implicitly {@link im_proto.ParticipantsPage.verify|verify} messages.
         * @function encode
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {im_proto.IParticipantsPage} message ParticipantsPage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParticipantsPage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.participants != null && message.participants.length)
                for (var i = 0; i < message.participants.length; ++i)
                    $root.im_proto.Participant.encode(message.participants[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.has_more != null && Object.hasOwnProperty.call(message, "has_more"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.has_more);
            if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.cursor);
            return writer;
        };

        /**
         * Encodes the specified ParticipantsPage message, length delimited. Does not implicitly {@link im_proto.ParticipantsPage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {im_proto.IParticipantsPage} message ParticipantsPage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParticipantsPage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParticipantsPage message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.ParticipantsPage} ParticipantsPage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParticipantsPage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.ParticipantsPage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.participants && message.participants.length))
                            message.participants = [];
                        message.participants.push($root.im_proto.Participant.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.has_more = reader.bool();
                        break;
                    }
                case 3: {
                        message.cursor = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ParticipantsPage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.ParticipantsPage} ParticipantsPage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParticipantsPage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParticipantsPage message.
         * @function verify
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParticipantsPage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.participants != null && message.hasOwnProperty("participants")) {
                if (!Array.isArray(message.participants))
                    return "participants: array expected";
                for (var i = 0; i < message.participants.length; ++i) {
                    var error = $root.im_proto.Participant.verify(message.participants[i]);
                    if (error)
                        return "participants." + error;
                }
            }
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                if (typeof message.has_more !== "boolean")
                    return "has_more: boolean expected";
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (!$util.isInteger(message.cursor) && !(message.cursor && $util.isInteger(message.cursor.low) && $util.isInteger(message.cursor.high)))
                    return "cursor: integer|Long expected";
            return null;
        };

        /**
         * Creates a ParticipantsPage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.ParticipantsPage} ParticipantsPage
         */
        ParticipantsPage.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.ParticipantsPage)
                return object;
            var message = new $root.im_proto.ParticipantsPage();
            if (object.participants) {
                if (!Array.isArray(object.participants))
                    throw TypeError(".im_proto.ParticipantsPage.participants: array expected");
                message.participants = [];
                for (var i = 0; i < object.participants.length; ++i) {
                    if (typeof object.participants[i] !== "object")
                        throw TypeError(".im_proto.ParticipantsPage.participants: object expected");
                    message.participants[i] = $root.im_proto.Participant.fromObject(object.participants[i]);
                }
            }
            if (object.has_more != null)
                message.has_more = Boolean(object.has_more);
            if (object.cursor != null)
                if ($util.Long)
                    (message.cursor = $util.Long.fromValue(object.cursor)).unsigned = false;
                else if (typeof object.cursor === "string")
                    message.cursor = parseInt(object.cursor, 10);
                else if (typeof object.cursor === "number")
                    message.cursor = object.cursor;
                else if (typeof object.cursor === "object")
                    message.cursor = new $util.LongBits(object.cursor.low >>> 0, object.cursor.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ParticipantsPage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {im_proto.ParticipantsPage} message ParticipantsPage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParticipantsPage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.participants = [];
            if (options.defaults) {
                object.has_more = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.cursor = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cursor = options.longs === String ? "0" : 0;
            }
            if (message.participants && message.participants.length) {
                object.participants = [];
                for (var j = 0; j < message.participants.length; ++j)
                    object.participants[j] = $root.im_proto.Participant.toObject(message.participants[j], options);
            }
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                object.has_more = message.has_more;
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (typeof message.cursor === "number")
                    object.cursor = options.longs === String ? String(message.cursor) : message.cursor;
                else
                    object.cursor = options.longs === String ? $util.Long.prototype.toString.call(message.cursor) : options.longs === Number ? new $util.LongBits(message.cursor.low >>> 0, message.cursor.high >>> 0).toNumber() : message.cursor;
            return object;
        };

        /**
         * Converts this ParticipantsPage to JSON.
         * @function toJSON
         * @memberof im_proto.ParticipantsPage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParticipantsPage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ParticipantsPage
         * @function getTypeUrl
         * @memberof im_proto.ParticipantsPage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ParticipantsPage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.ParticipantsPage";
        };

        return ParticipantsPage;
    })();

    im_proto.ConversationInfoV2 = (function() {

        /**
         * Properties of a ConversationInfoV2.
         * @memberof im_proto
         * @interface IConversationInfoV2
         * @property {string|null} [conversation_id] ConversationInfoV2 conversation_id
         * @property {number|Long|null} [conversation_short_id] ConversationInfoV2 conversation_short_id
         * @property {number|null} [conversation_type] ConversationInfoV2 conversation_type
         * @property {string|null} [ticket] ConversationInfoV2 ticket
         * @property {im_proto.IParticipantsPage|null} [first_page_participants] ConversationInfoV2 first_page_participants
         * @property {number|null} [participants_count] ConversationInfoV2 participants_count
         * @property {boolean|null} [is_participant] ConversationInfoV2 is_participant
         * @property {number|null} [inbox_type] ConversationInfoV2 inbox_type
         * @property {number|null} [badge_count] ConversationInfoV2 badge_count
         * @property {number|null} [badge_count_v2] ConversationInfoV2 badge_count_v2
         * @property {number|Long|null} [conversation_rank_version] ConversationInfoV2 conversation_rank_version
         * @property {im_proto.IParticipant|null} [user_info] ConversationInfoV2 user_info
         * @property {im_proto.IConversationCoreInfo|null} [conversation_core_info] ConversationInfoV2 conversation_core_info
         */

        /**
         * Constructs a new ConversationInfoV2.
         * @memberof im_proto
         * @classdesc Represents a ConversationInfoV2.
         * @implements IConversationInfoV2
         * @constructor
         * @param {im_proto.IConversationInfoV2=} [properties] Properties to set
         */
        function ConversationInfoV2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConversationInfoV2 conversation_id.
         * @member {string} conversation_id
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.conversation_id = "";

        /**
         * ConversationInfoV2 conversation_short_id.
         * @member {number|Long} conversation_short_id
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConversationInfoV2 conversation_type.
         * @member {number} conversation_type
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.conversation_type = 0;

        /**
         * ConversationInfoV2 ticket.
         * @member {string} ticket
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.ticket = "";

        /**
         * ConversationInfoV2 first_page_participants.
         * @member {im_proto.IParticipantsPage|null|undefined} first_page_participants
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.first_page_participants = null;

        /**
         * ConversationInfoV2 participants_count.
         * @member {number} participants_count
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.participants_count = 0;

        /**
         * ConversationInfoV2 is_participant.
         * @member {boolean} is_participant
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.is_participant = false;

        /**
         * ConversationInfoV2 inbox_type.
         * @member {number} inbox_type
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.inbox_type = 0;

        /**
         * ConversationInfoV2 badge_count.
         * @member {number} badge_count
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.badge_count = 0;

        /**
         * ConversationInfoV2 badge_count_v2.
         * @member {number} badge_count_v2
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.badge_count_v2 = 0;

        /**
         * ConversationInfoV2 conversation_rank_version.
         * @member {number|Long} conversation_rank_version
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.conversation_rank_version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConversationInfoV2 user_info.
         * @member {im_proto.IParticipant|null|undefined} user_info
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.user_info = null;

        /**
         * ConversationInfoV2 conversation_core_info.
         * @member {im_proto.IConversationCoreInfo|null|undefined} conversation_core_info
         * @memberof im_proto.ConversationInfoV2
         * @instance
         */
        ConversationInfoV2.prototype.conversation_core_info = null;

        /**
         * Creates a new ConversationInfoV2 instance using the specified properties.
         * @function create
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {im_proto.IConversationInfoV2=} [properties] Properties to set
         * @returns {im_proto.ConversationInfoV2} ConversationInfoV2 instance
         */
        ConversationInfoV2.create = function create(properties) {
            return new ConversationInfoV2(properties);
        };

        /**
         * Encodes the specified ConversationInfoV2 message. Does not implicitly {@link im_proto.ConversationInfoV2.verify|verify} messages.
         * @function encode
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {im_proto.IConversationInfoV2} message ConversationInfoV2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationInfoV2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversation_id);
            if (message.conversation_short_id != null && Object.hasOwnProperty.call(message, "conversation_short_id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.conversation_short_id);
            if (message.conversation_type != null && Object.hasOwnProperty.call(message, "conversation_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.conversation_type);
            if (message.ticket != null && Object.hasOwnProperty.call(message, "ticket"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ticket);
            if (message.first_page_participants != null && Object.hasOwnProperty.call(message, "first_page_participants"))
                $root.im_proto.ParticipantsPage.encode(message.first_page_participants, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.participants_count != null && Object.hasOwnProperty.call(message, "participants_count"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.participants_count);
            if (message.is_participant != null && Object.hasOwnProperty.call(message, "is_participant"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.is_participant);
            if (message.inbox_type != null && Object.hasOwnProperty.call(message, "inbox_type"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.inbox_type);
            if (message.badge_count != null && Object.hasOwnProperty.call(message, "badge_count"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.badge_count);
            if (message.badge_count_v2 != null && Object.hasOwnProperty.call(message, "badge_count_v2"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.badge_count_v2);
            if (message.conversation_rank_version != null && Object.hasOwnProperty.call(message, "conversation_rank_version"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.conversation_rank_version);
            if (message.user_info != null && Object.hasOwnProperty.call(message, "user_info"))
                $root.im_proto.Participant.encode(message.user_info, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.conversation_core_info != null && Object.hasOwnProperty.call(message, "conversation_core_info"))
                $root.im_proto.ConversationCoreInfo.encode(message.conversation_core_info, writer.uint32(/* id 50, wireType 2 =*/402).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ConversationInfoV2 message, length delimited. Does not implicitly {@link im_proto.ConversationInfoV2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {im_proto.IConversationInfoV2} message ConversationInfoV2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConversationInfoV2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConversationInfoV2 message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.ConversationInfoV2} ConversationInfoV2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationInfoV2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.ConversationInfoV2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_id = reader.string();
                        break;
                    }
                case 2: {
                        message.conversation_short_id = reader.int64();
                        break;
                    }
                case 3: {
                        message.conversation_type = reader.int32();
                        break;
                    }
                case 4: {
                        message.ticket = reader.string();
                        break;
                    }
                case 6: {
                        message.first_page_participants = $root.im_proto.ParticipantsPage.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.participants_count = reader.int32();
                        break;
                    }
                case 8: {
                        message.is_participant = reader.bool();
                        break;
                    }
                case 9: {
                        message.inbox_type = reader.int32();
                        break;
                    }
                case 10: {
                        message.badge_count = reader.int32();
                        break;
                    }
                case 11: {
                        message.badge_count_v2 = reader.int32();
                        break;
                    }
                case 12: {
                        message.conversation_rank_version = reader.int64();
                        break;
                    }
                case 20: {
                        message.user_info = $root.im_proto.Participant.decode(reader, reader.uint32());
                        break;
                    }
                case 50: {
                        message.conversation_core_info = $root.im_proto.ConversationCoreInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ConversationInfoV2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.ConversationInfoV2} ConversationInfoV2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConversationInfoV2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConversationInfoV2 message.
         * @function verify
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConversationInfoV2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                if (!$util.isString(message.conversation_id))
                    return "conversation_id: string expected";
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (!$util.isInteger(message.conversation_short_id) && !(message.conversation_short_id && $util.isInteger(message.conversation_short_id.low) && $util.isInteger(message.conversation_short_id.high)))
                    return "conversation_short_id: integer|Long expected";
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                if (!$util.isInteger(message.conversation_type))
                    return "conversation_type: integer expected";
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                if (!$util.isString(message.ticket))
                    return "ticket: string expected";
            if (message.first_page_participants != null && message.hasOwnProperty("first_page_participants")) {
                var error = $root.im_proto.ParticipantsPage.verify(message.first_page_participants);
                if (error)
                    return "first_page_participants." + error;
            }
            if (message.participants_count != null && message.hasOwnProperty("participants_count"))
                if (!$util.isInteger(message.participants_count))
                    return "participants_count: integer expected";
            if (message.is_participant != null && message.hasOwnProperty("is_participant"))
                if (typeof message.is_participant !== "boolean")
                    return "is_participant: boolean expected";
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                if (!$util.isInteger(message.inbox_type))
                    return "inbox_type: integer expected";
            if (message.badge_count != null && message.hasOwnProperty("badge_count"))
                if (!$util.isInteger(message.badge_count))
                    return "badge_count: integer expected";
            if (message.badge_count_v2 != null && message.hasOwnProperty("badge_count_v2"))
                if (!$util.isInteger(message.badge_count_v2))
                    return "badge_count_v2: integer expected";
            if (message.conversation_rank_version != null && message.hasOwnProperty("conversation_rank_version"))
                if (!$util.isInteger(message.conversation_rank_version) && !(message.conversation_rank_version && $util.isInteger(message.conversation_rank_version.low) && $util.isInteger(message.conversation_rank_version.high)))
                    return "conversation_rank_version: integer|Long expected";
            if (message.user_info != null && message.hasOwnProperty("user_info")) {
                var error = $root.im_proto.Participant.verify(message.user_info);
                if (error)
                    return "user_info." + error;
            }
            if (message.conversation_core_info != null && message.hasOwnProperty("conversation_core_info")) {
                var error = $root.im_proto.ConversationCoreInfo.verify(message.conversation_core_info);
                if (error)
                    return "conversation_core_info." + error;
            }
            return null;
        };

        /**
         * Creates a ConversationInfoV2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.ConversationInfoV2} ConversationInfoV2
         */
        ConversationInfoV2.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.ConversationInfoV2)
                return object;
            var message = new $root.im_proto.ConversationInfoV2();
            if (object.conversation_id != null)
                message.conversation_id = String(object.conversation_id);
            if (object.conversation_short_id != null)
                if ($util.Long)
                    (message.conversation_short_id = $util.Long.fromValue(object.conversation_short_id)).unsigned = false;
                else if (typeof object.conversation_short_id === "string")
                    message.conversation_short_id = parseInt(object.conversation_short_id, 10);
                else if (typeof object.conversation_short_id === "number")
                    message.conversation_short_id = object.conversation_short_id;
                else if (typeof object.conversation_short_id === "object")
                    message.conversation_short_id = new $util.LongBits(object.conversation_short_id.low >>> 0, object.conversation_short_id.high >>> 0).toNumber();
            if (object.conversation_type != null)
                message.conversation_type = object.conversation_type | 0;
            if (object.ticket != null)
                message.ticket = String(object.ticket);
            if (object.first_page_participants != null) {
                if (typeof object.first_page_participants !== "object")
                    throw TypeError(".im_proto.ConversationInfoV2.first_page_participants: object expected");
                message.first_page_participants = $root.im_proto.ParticipantsPage.fromObject(object.first_page_participants);
            }
            if (object.participants_count != null)
                message.participants_count = object.participants_count | 0;
            if (object.is_participant != null)
                message.is_participant = Boolean(object.is_participant);
            if (object.inbox_type != null)
                message.inbox_type = object.inbox_type | 0;
            if (object.badge_count != null)
                message.badge_count = object.badge_count | 0;
            if (object.badge_count_v2 != null)
                message.badge_count_v2 = object.badge_count_v2 | 0;
            if (object.conversation_rank_version != null)
                if ($util.Long)
                    (message.conversation_rank_version = $util.Long.fromValue(object.conversation_rank_version)).unsigned = false;
                else if (typeof object.conversation_rank_version === "string")
                    message.conversation_rank_version = parseInt(object.conversation_rank_version, 10);
                else if (typeof object.conversation_rank_version === "number")
                    message.conversation_rank_version = object.conversation_rank_version;
                else if (typeof object.conversation_rank_version === "object")
                    message.conversation_rank_version = new $util.LongBits(object.conversation_rank_version.low >>> 0, object.conversation_rank_version.high >>> 0).toNumber();
            if (object.user_info != null) {
                if (typeof object.user_info !== "object")
                    throw TypeError(".im_proto.ConversationInfoV2.user_info: object expected");
                message.user_info = $root.im_proto.Participant.fromObject(object.user_info);
            }
            if (object.conversation_core_info != null) {
                if (typeof object.conversation_core_info !== "object")
                    throw TypeError(".im_proto.ConversationInfoV2.conversation_core_info: object expected");
                message.conversation_core_info = $root.im_proto.ConversationCoreInfo.fromObject(object.conversation_core_info);
            }
            return message;
        };

        /**
         * Creates a plain object from a ConversationInfoV2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {im_proto.ConversationInfoV2} message ConversationInfoV2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConversationInfoV2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.conversation_id = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.conversation_short_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.conversation_short_id = options.longs === String ? "0" : 0;
                object.conversation_type = 0;
                object.ticket = "";
                object.first_page_participants = null;
                object.participants_count = 0;
                object.is_participant = false;
                object.inbox_type = 0;
                object.badge_count = 0;
                object.badge_count_v2 = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.conversation_rank_version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.conversation_rank_version = options.longs === String ? "0" : 0;
                object.user_info = null;
                object.conversation_core_info = null;
            }
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                object.conversation_id = message.conversation_id;
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (typeof message.conversation_short_id === "number")
                    object.conversation_short_id = options.longs === String ? String(message.conversation_short_id) : message.conversation_short_id;
                else
                    object.conversation_short_id = options.longs === String ? $util.Long.prototype.toString.call(message.conversation_short_id) : options.longs === Number ? new $util.LongBits(message.conversation_short_id.low >>> 0, message.conversation_short_id.high >>> 0).toNumber() : message.conversation_short_id;
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                object.conversation_type = message.conversation_type;
            if (message.ticket != null && message.hasOwnProperty("ticket"))
                object.ticket = message.ticket;
            if (message.first_page_participants != null && message.hasOwnProperty("first_page_participants"))
                object.first_page_participants = $root.im_proto.ParticipantsPage.toObject(message.first_page_participants, options);
            if (message.participants_count != null && message.hasOwnProperty("participants_count"))
                object.participants_count = message.participants_count;
            if (message.is_participant != null && message.hasOwnProperty("is_participant"))
                object.is_participant = message.is_participant;
            if (message.inbox_type != null && message.hasOwnProperty("inbox_type"))
                object.inbox_type = message.inbox_type;
            if (message.badge_count != null && message.hasOwnProperty("badge_count"))
                object.badge_count = message.badge_count;
            if (message.badge_count_v2 != null && message.hasOwnProperty("badge_count_v2"))
                object.badge_count_v2 = message.badge_count_v2;
            if (message.conversation_rank_version != null && message.hasOwnProperty("conversation_rank_version"))
                if (typeof message.conversation_rank_version === "number")
                    object.conversation_rank_version = options.longs === String ? String(message.conversation_rank_version) : message.conversation_rank_version;
                else
                    object.conversation_rank_version = options.longs === String ? $util.Long.prototype.toString.call(message.conversation_rank_version) : options.longs === Number ? new $util.LongBits(message.conversation_rank_version.low >>> 0, message.conversation_rank_version.high >>> 0).toNumber() : message.conversation_rank_version;
            if (message.user_info != null && message.hasOwnProperty("user_info"))
                object.user_info = $root.im_proto.Participant.toObject(message.user_info, options);
            if (message.conversation_core_info != null && message.hasOwnProperty("conversation_core_info"))
                object.conversation_core_info = $root.im_proto.ConversationCoreInfo.toObject(message.conversation_core_info, options);
            return object;
        };

        /**
         * Converts this ConversationInfoV2 to JSON.
         * @function toJSON
         * @memberof im_proto.ConversationInfoV2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConversationInfoV2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConversationInfoV2
         * @function getTypeUrl
         * @memberof im_proto.ConversationInfoV2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConversationInfoV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.ConversationInfoV2";
        };

        return ConversationInfoV2;
    })();

    im_proto.GetConversationInfoV2ResponseBody = (function() {

        /**
         * Properties of a GetConversationInfoV2ResponseBody.
         * @memberof im_proto
         * @interface IGetConversationInfoV2ResponseBody
         * @property {im_proto.IConversationInfoV2|null} [conversation_info] GetConversationInfoV2ResponseBody conversation_info
         */

        /**
         * Constructs a new GetConversationInfoV2ResponseBody.
         * @memberof im_proto
         * @classdesc Represents a GetConversationInfoV2ResponseBody.
         * @implements IGetConversationInfoV2ResponseBody
         * @constructor
         * @param {im_proto.IGetConversationInfoV2ResponseBody=} [properties] Properties to set
         */
        function GetConversationInfoV2ResponseBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetConversationInfoV2ResponseBody conversation_info.
         * @member {im_proto.IConversationInfoV2|null|undefined} conversation_info
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @instance
         */
        GetConversationInfoV2ResponseBody.prototype.conversation_info = null;

        /**
         * Creates a new GetConversationInfoV2ResponseBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {im_proto.IGetConversationInfoV2ResponseBody=} [properties] Properties to set
         * @returns {im_proto.GetConversationInfoV2ResponseBody} GetConversationInfoV2ResponseBody instance
         */
        GetConversationInfoV2ResponseBody.create = function create(properties) {
            return new GetConversationInfoV2ResponseBody(properties);
        };

        /**
         * Encodes the specified GetConversationInfoV2ResponseBody message. Does not implicitly {@link im_proto.GetConversationInfoV2ResponseBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {im_proto.IGetConversationInfoV2ResponseBody} message GetConversationInfoV2ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoV2ResponseBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_info != null && Object.hasOwnProperty.call(message, "conversation_info"))
                $root.im_proto.ConversationInfoV2.encode(message.conversation_info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetConversationInfoV2ResponseBody message, length delimited. Does not implicitly {@link im_proto.GetConversationInfoV2ResponseBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {im_proto.IGetConversationInfoV2ResponseBody} message GetConversationInfoV2ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoV2ResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConversationInfoV2ResponseBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetConversationInfoV2ResponseBody} GetConversationInfoV2ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoV2ResponseBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetConversationInfoV2ResponseBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_info = $root.im_proto.ConversationInfoV2.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConversationInfoV2ResponseBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetConversationInfoV2ResponseBody} GetConversationInfoV2ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoV2ResponseBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConversationInfoV2ResponseBody message.
         * @function verify
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConversationInfoV2ResponseBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_info != null && message.hasOwnProperty("conversation_info")) {
                var error = $root.im_proto.ConversationInfoV2.verify(message.conversation_info);
                if (error)
                    return "conversation_info." + error;
            }
            return null;
        };

        /**
         * Creates a GetConversationInfoV2ResponseBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetConversationInfoV2ResponseBody} GetConversationInfoV2ResponseBody
         */
        GetConversationInfoV2ResponseBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetConversationInfoV2ResponseBody)
                return object;
            var message = new $root.im_proto.GetConversationInfoV2ResponseBody();
            if (object.conversation_info != null) {
                if (typeof object.conversation_info !== "object")
                    throw TypeError(".im_proto.GetConversationInfoV2ResponseBody.conversation_info: object expected");
                message.conversation_info = $root.im_proto.ConversationInfoV2.fromObject(object.conversation_info);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetConversationInfoV2ResponseBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {im_proto.GetConversationInfoV2ResponseBody} message GetConversationInfoV2ResponseBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConversationInfoV2ResponseBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.conversation_info = null;
            if (message.conversation_info != null && message.hasOwnProperty("conversation_info"))
                object.conversation_info = $root.im_proto.ConversationInfoV2.toObject(message.conversation_info, options);
            return object;
        };

        /**
         * Converts this GetConversationInfoV2ResponseBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConversationInfoV2ResponseBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetConversationInfoV2ResponseBody
         * @function getTypeUrl
         * @memberof im_proto.GetConversationInfoV2ResponseBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetConversationInfoV2ResponseBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetConversationInfoV2ResponseBody";
        };

        return GetConversationInfoV2ResponseBody;
    })();

    im_proto.PropertyItemList = (function() {

        /**
         * Properties of a PropertyItemList.
         * @memberof im_proto
         * @interface IPropertyItemList
         */

        /**
         * Constructs a new PropertyItemList.
         * @memberof im_proto
         * @classdesc Represents a PropertyItemList.
         * @implements IPropertyItemList
         * @constructor
         * @param {im_proto.IPropertyItemList=} [properties] Properties to set
         */
        function PropertyItemList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PropertyItemList instance using the specified properties.
         * @function create
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {im_proto.IPropertyItemList=} [properties] Properties to set
         * @returns {im_proto.PropertyItemList} PropertyItemList instance
         */
        PropertyItemList.create = function create(properties) {
            return new PropertyItemList(properties);
        };

        /**
         * Encodes the specified PropertyItemList message. Does not implicitly {@link im_proto.PropertyItemList.verify|verify} messages.
         * @function encode
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {im_proto.IPropertyItemList} message PropertyItemList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyItemList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PropertyItemList message, length delimited. Does not implicitly {@link im_proto.PropertyItemList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {im_proto.IPropertyItemList} message PropertyItemList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PropertyItemList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PropertyItemList message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.PropertyItemList} PropertyItemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyItemList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.PropertyItemList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PropertyItemList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.PropertyItemList} PropertyItemList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PropertyItemList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PropertyItemList message.
         * @function verify
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PropertyItemList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PropertyItemList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.PropertyItemList} PropertyItemList
         */
        PropertyItemList.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.PropertyItemList)
                return object;
            return new $root.im_proto.PropertyItemList();
        };

        /**
         * Creates a plain object from a PropertyItemList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {im_proto.PropertyItemList} message PropertyItemList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PropertyItemList.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PropertyItemList to JSON.
         * @function toJSON
         * @memberof im_proto.PropertyItemList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PropertyItemList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PropertyItemList
         * @function getTypeUrl
         * @memberof im_proto.PropertyItemList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PropertyItemList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.PropertyItemList";
        };

        return PropertyItemList;
    })();

    im_proto.ReferenceInfo = (function() {

        /**
         * Properties of a ReferenceInfo.
         * @memberof im_proto
         * @interface IReferenceInfo
         * @property {number|Long|null} [referenced_message_id] ReferenceInfo referenced_message_id
         * @property {string|null} [hint] ReferenceInfo hint
         * @property {number|Long|null} [ref_message_type] ReferenceInfo ref_message_type
         * @property {number|null} [referenced_message_status] ReferenceInfo referenced_message_status
         * @property {number|Long|null} [root_message_id] ReferenceInfo root_message_id
         * @property {number|Long|null} [root_message_conv_index] ReferenceInfo root_message_conv_index
         * @property {number|Long|null} [sender] ReferenceInfo sender
         */

        /**
         * Constructs a new ReferenceInfo.
         * @memberof im_proto
         * @classdesc Represents a ReferenceInfo.
         * @implements IReferenceInfo
         * @constructor
         * @param {im_proto.IReferenceInfo=} [properties] Properties to set
         */
        function ReferenceInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReferenceInfo referenced_message_id.
         * @member {number|Long} referenced_message_id
         * @memberof im_proto.ReferenceInfo
         * @instance
         */
        ReferenceInfo.prototype.referenced_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReferenceInfo hint.
         * @member {string} hint
         * @memberof im_proto.ReferenceInfo
         * @instance
         */
        ReferenceInfo.prototype.hint = "";

        /**
         * ReferenceInfo ref_message_type.
         * @member {number|Long} ref_message_type
         * @memberof im_proto.ReferenceInfo
         * @instance
         */
        ReferenceInfo.prototype.ref_message_type = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReferenceInfo referenced_message_status.
         * @member {number} referenced_message_status
         * @memberof im_proto.ReferenceInfo
         * @instance
         */
        ReferenceInfo.prototype.referenced_message_status = 0;

        /**
         * ReferenceInfo root_message_id.
         * @member {number|Long} root_message_id
         * @memberof im_proto.ReferenceInfo
         * @instance
         */
        ReferenceInfo.prototype.root_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReferenceInfo root_message_conv_index.
         * @member {number|Long} root_message_conv_index
         * @memberof im_proto.ReferenceInfo
         * @instance
         */
        ReferenceInfo.prototype.root_message_conv_index = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReferenceInfo sender.
         * @member {number|Long} sender
         * @memberof im_proto.ReferenceInfo
         * @instance
         */
        ReferenceInfo.prototype.sender = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReferenceInfo instance using the specified properties.
         * @function create
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {im_proto.IReferenceInfo=} [properties] Properties to set
         * @returns {im_proto.ReferenceInfo} ReferenceInfo instance
         */
        ReferenceInfo.create = function create(properties) {
            return new ReferenceInfo(properties);
        };

        /**
         * Encodes the specified ReferenceInfo message. Does not implicitly {@link im_proto.ReferenceInfo.verify|verify} messages.
         * @function encode
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {im_proto.IReferenceInfo} message ReferenceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReferenceInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.referenced_message_id != null && Object.hasOwnProperty.call(message, "referenced_message_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.referenced_message_id);
            if (message.hint != null && Object.hasOwnProperty.call(message, "hint"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.hint);
            if (message.ref_message_type != null && Object.hasOwnProperty.call(message, "ref_message_type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.ref_message_type);
            if (message.referenced_message_status != null && Object.hasOwnProperty.call(message, "referenced_message_status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.referenced_message_status);
            if (message.root_message_id != null && Object.hasOwnProperty.call(message, "root_message_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.root_message_id);
            if (message.root_message_conv_index != null && Object.hasOwnProperty.call(message, "root_message_conv_index"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.root_message_conv_index);
            if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sender);
            return writer;
        };

        /**
         * Encodes the specified ReferenceInfo message, length delimited. Does not implicitly {@link im_proto.ReferenceInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {im_proto.IReferenceInfo} message ReferenceInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReferenceInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReferenceInfo message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.ReferenceInfo} ReferenceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReferenceInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.ReferenceInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.referenced_message_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.hint = reader.string();
                        break;
                    }
                case 3: {
                        message.ref_message_type = reader.int64();
                        break;
                    }
                case 4: {
                        message.referenced_message_status = reader.int32();
                        break;
                    }
                case 5: {
                        message.root_message_id = reader.int64();
                        break;
                    }
                case 6: {
                        message.root_message_conv_index = reader.int64();
                        break;
                    }
                case 7: {
                        message.sender = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReferenceInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.ReferenceInfo} ReferenceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReferenceInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReferenceInfo message.
         * @function verify
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReferenceInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.referenced_message_id != null && message.hasOwnProperty("referenced_message_id"))
                if (!$util.isInteger(message.referenced_message_id) && !(message.referenced_message_id && $util.isInteger(message.referenced_message_id.low) && $util.isInteger(message.referenced_message_id.high)))
                    return "referenced_message_id: integer|Long expected";
            if (message.hint != null && message.hasOwnProperty("hint"))
                if (!$util.isString(message.hint))
                    return "hint: string expected";
            if (message.ref_message_type != null && message.hasOwnProperty("ref_message_type"))
                if (!$util.isInteger(message.ref_message_type) && !(message.ref_message_type && $util.isInteger(message.ref_message_type.low) && $util.isInteger(message.ref_message_type.high)))
                    return "ref_message_type: integer|Long expected";
            if (message.referenced_message_status != null && message.hasOwnProperty("referenced_message_status"))
                if (!$util.isInteger(message.referenced_message_status))
                    return "referenced_message_status: integer expected";
            if (message.root_message_id != null && message.hasOwnProperty("root_message_id"))
                if (!$util.isInteger(message.root_message_id) && !(message.root_message_id && $util.isInteger(message.root_message_id.low) && $util.isInteger(message.root_message_id.high)))
                    return "root_message_id: integer|Long expected";
            if (message.root_message_conv_index != null && message.hasOwnProperty("root_message_conv_index"))
                if (!$util.isInteger(message.root_message_conv_index) && !(message.root_message_conv_index && $util.isInteger(message.root_message_conv_index.low) && $util.isInteger(message.root_message_conv_index.high)))
                    return "root_message_conv_index: integer|Long expected";
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (!$util.isInteger(message.sender) && !(message.sender && $util.isInteger(message.sender.low) && $util.isInteger(message.sender.high)))
                    return "sender: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReferenceInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.ReferenceInfo} ReferenceInfo
         */
        ReferenceInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.ReferenceInfo)
                return object;
            var message = new $root.im_proto.ReferenceInfo();
            if (object.referenced_message_id != null)
                if ($util.Long)
                    (message.referenced_message_id = $util.Long.fromValue(object.referenced_message_id)).unsigned = false;
                else if (typeof object.referenced_message_id === "string")
                    message.referenced_message_id = parseInt(object.referenced_message_id, 10);
                else if (typeof object.referenced_message_id === "number")
                    message.referenced_message_id = object.referenced_message_id;
                else if (typeof object.referenced_message_id === "object")
                    message.referenced_message_id = new $util.LongBits(object.referenced_message_id.low >>> 0, object.referenced_message_id.high >>> 0).toNumber();
            if (object.hint != null)
                message.hint = String(object.hint);
            if (object.ref_message_type != null)
                if ($util.Long)
                    (message.ref_message_type = $util.Long.fromValue(object.ref_message_type)).unsigned = false;
                else if (typeof object.ref_message_type === "string")
                    message.ref_message_type = parseInt(object.ref_message_type, 10);
                else if (typeof object.ref_message_type === "number")
                    message.ref_message_type = object.ref_message_type;
                else if (typeof object.ref_message_type === "object")
                    message.ref_message_type = new $util.LongBits(object.ref_message_type.low >>> 0, object.ref_message_type.high >>> 0).toNumber();
            if (object.referenced_message_status != null)
                message.referenced_message_status = object.referenced_message_status | 0;
            if (object.root_message_id != null)
                if ($util.Long)
                    (message.root_message_id = $util.Long.fromValue(object.root_message_id)).unsigned = false;
                else if (typeof object.root_message_id === "string")
                    message.root_message_id = parseInt(object.root_message_id, 10);
                else if (typeof object.root_message_id === "number")
                    message.root_message_id = object.root_message_id;
                else if (typeof object.root_message_id === "object")
                    message.root_message_id = new $util.LongBits(object.root_message_id.low >>> 0, object.root_message_id.high >>> 0).toNumber();
            if (object.root_message_conv_index != null)
                if ($util.Long)
                    (message.root_message_conv_index = $util.Long.fromValue(object.root_message_conv_index)).unsigned = false;
                else if (typeof object.root_message_conv_index === "string")
                    message.root_message_conv_index = parseInt(object.root_message_conv_index, 10);
                else if (typeof object.root_message_conv_index === "number")
                    message.root_message_conv_index = object.root_message_conv_index;
                else if (typeof object.root_message_conv_index === "object")
                    message.root_message_conv_index = new $util.LongBits(object.root_message_conv_index.low >>> 0, object.root_message_conv_index.high >>> 0).toNumber();
            if (object.sender != null)
                if ($util.Long)
                    (message.sender = $util.Long.fromValue(object.sender)).unsigned = false;
                else if (typeof object.sender === "string")
                    message.sender = parseInt(object.sender, 10);
                else if (typeof object.sender === "number")
                    message.sender = object.sender;
                else if (typeof object.sender === "object")
                    message.sender = new $util.LongBits(object.sender.low >>> 0, object.sender.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReferenceInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {im_proto.ReferenceInfo} message ReferenceInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReferenceInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.referenced_message_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.referenced_message_id = options.longs === String ? "0" : 0;
                object.hint = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ref_message_type = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ref_message_type = options.longs === String ? "0" : 0;
                object.referenced_message_status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.root_message_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.root_message_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.root_message_conv_index = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.root_message_conv_index = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sender = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sender = options.longs === String ? "0" : 0;
            }
            if (message.referenced_message_id != null && message.hasOwnProperty("referenced_message_id"))
                if (typeof message.referenced_message_id === "number")
                    object.referenced_message_id = options.longs === String ? String(message.referenced_message_id) : message.referenced_message_id;
                else
                    object.referenced_message_id = options.longs === String ? $util.Long.prototype.toString.call(message.referenced_message_id) : options.longs === Number ? new $util.LongBits(message.referenced_message_id.low >>> 0, message.referenced_message_id.high >>> 0).toNumber() : message.referenced_message_id;
            if (message.hint != null && message.hasOwnProperty("hint"))
                object.hint = message.hint;
            if (message.ref_message_type != null && message.hasOwnProperty("ref_message_type"))
                if (typeof message.ref_message_type === "number")
                    object.ref_message_type = options.longs === String ? String(message.ref_message_type) : message.ref_message_type;
                else
                    object.ref_message_type = options.longs === String ? $util.Long.prototype.toString.call(message.ref_message_type) : options.longs === Number ? new $util.LongBits(message.ref_message_type.low >>> 0, message.ref_message_type.high >>> 0).toNumber() : message.ref_message_type;
            if (message.referenced_message_status != null && message.hasOwnProperty("referenced_message_status"))
                object.referenced_message_status = message.referenced_message_status;
            if (message.root_message_id != null && message.hasOwnProperty("root_message_id"))
                if (typeof message.root_message_id === "number")
                    object.root_message_id = options.longs === String ? String(message.root_message_id) : message.root_message_id;
                else
                    object.root_message_id = options.longs === String ? $util.Long.prototype.toString.call(message.root_message_id) : options.longs === Number ? new $util.LongBits(message.root_message_id.low >>> 0, message.root_message_id.high >>> 0).toNumber() : message.root_message_id;
            if (message.root_message_conv_index != null && message.hasOwnProperty("root_message_conv_index"))
                if (typeof message.root_message_conv_index === "number")
                    object.root_message_conv_index = options.longs === String ? String(message.root_message_conv_index) : message.root_message_conv_index;
                else
                    object.root_message_conv_index = options.longs === String ? $util.Long.prototype.toString.call(message.root_message_conv_index) : options.longs === Number ? new $util.LongBits(message.root_message_conv_index.low >>> 0, message.root_message_conv_index.high >>> 0).toNumber() : message.root_message_conv_index;
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (typeof message.sender === "number")
                    object.sender = options.longs === String ? String(message.sender) : message.sender;
                else
                    object.sender = options.longs === String ? $util.Long.prototype.toString.call(message.sender) : options.longs === Number ? new $util.LongBits(message.sender.low >>> 0, message.sender.high >>> 0).toNumber() : message.sender;
            return object;
        };

        /**
         * Converts this ReferenceInfo to JSON.
         * @function toJSON
         * @memberof im_proto.ReferenceInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReferenceInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReferenceInfo
         * @function getTypeUrl
         * @memberof im_proto.ReferenceInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReferenceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.ReferenceInfo";
        };

        return ReferenceInfo;
    })();

    im_proto.MessageBody = (function() {

        /**
         * Properties of a MessageBody.
         * @memberof im_proto
         * @interface IMessageBody
         * @property {string|null} [conversation_id] MessageBody conversation_id
         * @property {number|null} [conversation_type] MessageBody conversation_type
         * @property {number|Long|null} [server_message_id] MessageBody server_message_id
         * @property {number|Long|null} [index_in_conversation] MessageBody index_in_conversation
         * @property {number|Long|null} [conversation_short_id] MessageBody conversation_short_id
         * @property {number|null} [message_type] MessageBody message_type
         * @property {number|Long|null} [sender] MessageBody sender
         * @property {string|null} [content] MessageBody content
         * @property {Object.<string,string>|null} [ext] MessageBody ext
         * @property {number|Long|null} [create_time] MessageBody create_time
         * @property {number|Long|null} [version] MessageBody version
         * @property {number|null} [status] MessageBody status
         * @property {number|Long|null} [order_in_conversation] MessageBody order_in_conversation
         * @property {string|null} [sec_sender] MessageBody sec_sender
         * @property {Object.<string,string>|null} [user_profile] MessageBody user_profile
         * @property {number|Long|null} [index_in_conversation_v2] MessageBody index_in_conversation_v2
         * @property {im_proto.IReferenceInfo|null} [reference_info] MessageBody reference_info
         * @property {number|Long|null} [index_in_conversation_v1] MessageBody index_in_conversation_v1
         * @property {Uint8Array|null} [content_pb] MessageBody content_pb
         * @property {string|null} [scene] MessageBody scene
         * @property {number|null} [conv_rank_update_rule] MessageBody conv_rank_update_rule
         */

        /**
         * Constructs a new MessageBody.
         * @memberof im_proto
         * @classdesc Represents a MessageBody.
         * @implements IMessageBody
         * @constructor
         * @param {im_proto.IMessageBody=} [properties] Properties to set
         */
        function MessageBody(properties) {
            this.ext = {};
            this.user_profile = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageBody conversation_id.
         * @member {string} conversation_id
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.conversation_id = "";

        /**
         * MessageBody conversation_type.
         * @member {number} conversation_type
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.conversation_type = 0;

        /**
         * MessageBody server_message_id.
         * @member {number|Long} server_message_id
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.server_message_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody index_in_conversation.
         * @member {number|Long} index_in_conversation
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.index_in_conversation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody conversation_short_id.
         * @member {number|Long} conversation_short_id
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody message_type.
         * @member {number} message_type
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.message_type = 0;

        /**
         * MessageBody sender.
         * @member {number|Long} sender
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.sender = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody content.
         * @member {string} content
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.content = "";

        /**
         * MessageBody ext.
         * @member {Object.<string,string>} ext
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.ext = $util.emptyObject;

        /**
         * MessageBody create_time.
         * @member {number|Long} create_time
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.create_time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody version.
         * @member {number|Long} version
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody status.
         * @member {number} status
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.status = 0;

        /**
         * MessageBody order_in_conversation.
         * @member {number|Long} order_in_conversation
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.order_in_conversation = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody sec_sender.
         * @member {string} sec_sender
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.sec_sender = "";

        /**
         * MessageBody user_profile.
         * @member {Object.<string,string>} user_profile
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.user_profile = $util.emptyObject;

        /**
         * MessageBody index_in_conversation_v2.
         * @member {number|Long} index_in_conversation_v2
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.index_in_conversation_v2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody reference_info.
         * @member {im_proto.IReferenceInfo|null|undefined} reference_info
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.reference_info = null;

        /**
         * MessageBody index_in_conversation_v1.
         * @member {number|Long} index_in_conversation_v1
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.index_in_conversation_v1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody content_pb.
         * @member {Uint8Array} content_pb
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.content_pb = $util.newBuffer([]);

        /**
         * MessageBody scene.
         * @member {string} scene
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.scene = "";

        /**
         * MessageBody conv_rank_update_rule.
         * @member {number} conv_rank_update_rule
         * @memberof im_proto.MessageBody
         * @instance
         */
        MessageBody.prototype.conv_rank_update_rule = 0;

        /**
         * Creates a new MessageBody instance using the specified properties.
         * @function create
         * @memberof im_proto.MessageBody
         * @static
         * @param {im_proto.IMessageBody=} [properties] Properties to set
         * @returns {im_proto.MessageBody} MessageBody instance
         */
        MessageBody.create = function create(properties) {
            return new MessageBody(properties);
        };

        /**
         * Encodes the specified MessageBody message. Does not implicitly {@link im_proto.MessageBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.MessageBody
         * @static
         * @param {im_proto.IMessageBody} message MessageBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversation_id);
            if (message.conversation_type != null && Object.hasOwnProperty.call(message, "conversation_type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.conversation_type);
            if (message.server_message_id != null && Object.hasOwnProperty.call(message, "server_message_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.server_message_id);
            if (message.index_in_conversation != null && Object.hasOwnProperty.call(message, "index_in_conversation"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.index_in_conversation);
            if (message.conversation_short_id != null && Object.hasOwnProperty.call(message, "conversation_short_id"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.conversation_short_id);
            if (message.message_type != null && Object.hasOwnProperty.call(message, "message_type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.message_type);
            if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sender);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.content);
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                for (var keys = Object.keys(message.ext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.ext[keys[i]]).ldelim();
            if (message.create_time != null && Object.hasOwnProperty.call(message, "create_time"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.create_time);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.version);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.status);
            if (message.order_in_conversation != null && Object.hasOwnProperty.call(message, "order_in_conversation"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.order_in_conversation);
            if (message.sec_sender != null && Object.hasOwnProperty.call(message, "sec_sender"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.sec_sender);
            if (message.user_profile != null && Object.hasOwnProperty.call(message, "user_profile"))
                for (var keys = Object.keys(message.user_profile), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 16, wireType 2 =*/130).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.user_profile[keys[i]]).ldelim();
            if (message.index_in_conversation_v2 != null && Object.hasOwnProperty.call(message, "index_in_conversation_v2"))
                writer.uint32(/* id 17, wireType 0 =*/136).int64(message.index_in_conversation_v2);
            if (message.reference_info != null && Object.hasOwnProperty.call(message, "reference_info"))
                $root.im_proto.ReferenceInfo.encode(message.reference_info, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.index_in_conversation_v1 != null && Object.hasOwnProperty.call(message, "index_in_conversation_v1"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.index_in_conversation_v1);
            if (message.content_pb != null && Object.hasOwnProperty.call(message, "content_pb"))
                writer.uint32(/* id 20, wireType 2 =*/162).bytes(message.content_pb);
            if (message.scene != null && Object.hasOwnProperty.call(message, "scene"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.scene);
            if (message.conv_rank_update_rule != null && Object.hasOwnProperty.call(message, "conv_rank_update_rule"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.conv_rank_update_rule);
            return writer;
        };

        /**
         * Encodes the specified MessageBody message, length delimited. Does not implicitly {@link im_proto.MessageBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.MessageBody
         * @static
         * @param {im_proto.IMessageBody} message MessageBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.MessageBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.MessageBody} MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.MessageBody(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_id = reader.string();
                        break;
                    }
                case 2: {
                        message.conversation_type = reader.int32();
                        break;
                    }
                case 3: {
                        message.server_message_id = reader.int64();
                        break;
                    }
                case 4: {
                        message.index_in_conversation = reader.int64();
                        break;
                    }
                case 5: {
                        message.conversation_short_id = reader.int64();
                        break;
                    }
                case 6: {
                        message.message_type = reader.int32();
                        break;
                    }
                case 7: {
                        message.sender = reader.int64();
                        break;
                    }
                case 8: {
                        message.content = reader.string();
                        break;
                    }
                case 9: {
                        if (message.ext === $util.emptyObject)
                            message.ext = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ext[key] = value;
                        break;
                    }
                case 10: {
                        message.create_time = reader.int64();
                        break;
                    }
                case 11: {
                        message.version = reader.int64();
                        break;
                    }
                case 12: {
                        message.status = reader.int32();
                        break;
                    }
                case 13: {
                        message.order_in_conversation = reader.int64();
                        break;
                    }
                case 14: {
                        message.sec_sender = reader.string();
                        break;
                    }
                case 16: {
                        if (message.user_profile === $util.emptyObject)
                            message.user_profile = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.user_profile[key] = value;
                        break;
                    }
                case 17: {
                        message.index_in_conversation_v2 = reader.int64();
                        break;
                    }
                case 18: {
                        message.reference_info = $root.im_proto.ReferenceInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.index_in_conversation_v1 = reader.int64();
                        break;
                    }
                case 20: {
                        message.content_pb = reader.bytes();
                        break;
                    }
                case 21: {
                        message.scene = reader.string();
                        break;
                    }
                case 22: {
                        message.conv_rank_update_rule = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.MessageBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.MessageBody} MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageBody message.
         * @function verify
         * @memberof im_proto.MessageBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                if (!$util.isString(message.conversation_id))
                    return "conversation_id: string expected";
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                if (!$util.isInteger(message.conversation_type))
                    return "conversation_type: integer expected";
            if (message.server_message_id != null && message.hasOwnProperty("server_message_id"))
                if (!$util.isInteger(message.server_message_id) && !(message.server_message_id && $util.isInteger(message.server_message_id.low) && $util.isInteger(message.server_message_id.high)))
                    return "server_message_id: integer|Long expected";
            if (message.index_in_conversation != null && message.hasOwnProperty("index_in_conversation"))
                if (!$util.isInteger(message.index_in_conversation) && !(message.index_in_conversation && $util.isInteger(message.index_in_conversation.low) && $util.isInteger(message.index_in_conversation.high)))
                    return "index_in_conversation: integer|Long expected";
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (!$util.isInteger(message.conversation_short_id) && !(message.conversation_short_id && $util.isInteger(message.conversation_short_id.low) && $util.isInteger(message.conversation_short_id.high)))
                    return "conversation_short_id: integer|Long expected";
            if (message.message_type != null && message.hasOwnProperty("message_type"))
                if (!$util.isInteger(message.message_type))
                    return "message_type: integer expected";
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (!$util.isInteger(message.sender) && !(message.sender && $util.isInteger(message.sender.low) && $util.isInteger(message.sender.high)))
                    return "sender: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.ext != null && message.hasOwnProperty("ext")) {
                if (!$util.isObject(message.ext))
                    return "ext: object expected";
                var key = Object.keys(message.ext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.ext[key[i]]))
                        return "ext: string{k:string} expected";
            }
            if (message.create_time != null && message.hasOwnProperty("create_time"))
                if (!$util.isInteger(message.create_time) && !(message.create_time && $util.isInteger(message.create_time.low) && $util.isInteger(message.create_time.high)))
                    return "create_time: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.order_in_conversation != null && message.hasOwnProperty("order_in_conversation"))
                if (!$util.isInteger(message.order_in_conversation) && !(message.order_in_conversation && $util.isInteger(message.order_in_conversation.low) && $util.isInteger(message.order_in_conversation.high)))
                    return "order_in_conversation: integer|Long expected";
            if (message.sec_sender != null && message.hasOwnProperty("sec_sender"))
                if (!$util.isString(message.sec_sender))
                    return "sec_sender: string expected";
            if (message.user_profile != null && message.hasOwnProperty("user_profile")) {
                if (!$util.isObject(message.user_profile))
                    return "user_profile: object expected";
                var key = Object.keys(message.user_profile);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.user_profile[key[i]]))
                        return "user_profile: string{k:string} expected";
            }
            if (message.index_in_conversation_v2 != null && message.hasOwnProperty("index_in_conversation_v2"))
                if (!$util.isInteger(message.index_in_conversation_v2) && !(message.index_in_conversation_v2 && $util.isInteger(message.index_in_conversation_v2.low) && $util.isInteger(message.index_in_conversation_v2.high)))
                    return "index_in_conversation_v2: integer|Long expected";
            if (message.reference_info != null && message.hasOwnProperty("reference_info")) {
                var error = $root.im_proto.ReferenceInfo.verify(message.reference_info);
                if (error)
                    return "reference_info." + error;
            }
            if (message.index_in_conversation_v1 != null && message.hasOwnProperty("index_in_conversation_v1"))
                if (!$util.isInteger(message.index_in_conversation_v1) && !(message.index_in_conversation_v1 && $util.isInteger(message.index_in_conversation_v1.low) && $util.isInteger(message.index_in_conversation_v1.high)))
                    return "index_in_conversation_v1: integer|Long expected";
            if (message.content_pb != null && message.hasOwnProperty("content_pb"))
                if (!(message.content_pb && typeof message.content_pb.length === "number" || $util.isString(message.content_pb)))
                    return "content_pb: buffer expected";
            if (message.scene != null && message.hasOwnProperty("scene"))
                if (!$util.isString(message.scene))
                    return "scene: string expected";
            if (message.conv_rank_update_rule != null && message.hasOwnProperty("conv_rank_update_rule"))
                if (!$util.isInteger(message.conv_rank_update_rule))
                    return "conv_rank_update_rule: integer expected";
            return null;
        };

        /**
         * Creates a MessageBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.MessageBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.MessageBody} MessageBody
         */
        MessageBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.MessageBody)
                return object;
            var message = new $root.im_proto.MessageBody();
            if (object.conversation_id != null)
                message.conversation_id = String(object.conversation_id);
            if (object.conversation_type != null)
                message.conversation_type = object.conversation_type | 0;
            if (object.server_message_id != null)
                if ($util.Long)
                    (message.server_message_id = $util.Long.fromValue(object.server_message_id)).unsigned = false;
                else if (typeof object.server_message_id === "string")
                    message.server_message_id = parseInt(object.server_message_id, 10);
                else if (typeof object.server_message_id === "number")
                    message.server_message_id = object.server_message_id;
                else if (typeof object.server_message_id === "object")
                    message.server_message_id = new $util.LongBits(object.server_message_id.low >>> 0, object.server_message_id.high >>> 0).toNumber();
            if (object.index_in_conversation != null)
                if ($util.Long)
                    (message.index_in_conversation = $util.Long.fromValue(object.index_in_conversation)).unsigned = false;
                else if (typeof object.index_in_conversation === "string")
                    message.index_in_conversation = parseInt(object.index_in_conversation, 10);
                else if (typeof object.index_in_conversation === "number")
                    message.index_in_conversation = object.index_in_conversation;
                else if (typeof object.index_in_conversation === "object")
                    message.index_in_conversation = new $util.LongBits(object.index_in_conversation.low >>> 0, object.index_in_conversation.high >>> 0).toNumber();
            if (object.conversation_short_id != null)
                if ($util.Long)
                    (message.conversation_short_id = $util.Long.fromValue(object.conversation_short_id)).unsigned = false;
                else if (typeof object.conversation_short_id === "string")
                    message.conversation_short_id = parseInt(object.conversation_short_id, 10);
                else if (typeof object.conversation_short_id === "number")
                    message.conversation_short_id = object.conversation_short_id;
                else if (typeof object.conversation_short_id === "object")
                    message.conversation_short_id = new $util.LongBits(object.conversation_short_id.low >>> 0, object.conversation_short_id.high >>> 0).toNumber();
            if (object.message_type != null)
                message.message_type = object.message_type | 0;
            if (object.sender != null)
                if ($util.Long)
                    (message.sender = $util.Long.fromValue(object.sender)).unsigned = false;
                else if (typeof object.sender === "string")
                    message.sender = parseInt(object.sender, 10);
                else if (typeof object.sender === "number")
                    message.sender = object.sender;
                else if (typeof object.sender === "object")
                    message.sender = new $util.LongBits(object.sender.low >>> 0, object.sender.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            if (object.ext) {
                if (typeof object.ext !== "object")
                    throw TypeError(".im_proto.MessageBody.ext: object expected");
                message.ext = {};
                for (var keys = Object.keys(object.ext), i = 0; i < keys.length; ++i)
                    message.ext[keys[i]] = String(object.ext[keys[i]]);
            }
            if (object.create_time != null)
                if ($util.Long)
                    (message.create_time = $util.Long.fromValue(object.create_time)).unsigned = false;
                else if (typeof object.create_time === "string")
                    message.create_time = parseInt(object.create_time, 10);
                else if (typeof object.create_time === "number")
                    message.create_time = object.create_time;
                else if (typeof object.create_time === "object")
                    message.create_time = new $util.LongBits(object.create_time.low >>> 0, object.create_time.high >>> 0).toNumber();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.order_in_conversation != null)
                if ($util.Long)
                    (message.order_in_conversation = $util.Long.fromValue(object.order_in_conversation)).unsigned = false;
                else if (typeof object.order_in_conversation === "string")
                    message.order_in_conversation = parseInt(object.order_in_conversation, 10);
                else if (typeof object.order_in_conversation === "number")
                    message.order_in_conversation = object.order_in_conversation;
                else if (typeof object.order_in_conversation === "object")
                    message.order_in_conversation = new $util.LongBits(object.order_in_conversation.low >>> 0, object.order_in_conversation.high >>> 0).toNumber();
            if (object.sec_sender != null)
                message.sec_sender = String(object.sec_sender);
            if (object.user_profile) {
                if (typeof object.user_profile !== "object")
                    throw TypeError(".im_proto.MessageBody.user_profile: object expected");
                message.user_profile = {};
                for (var keys = Object.keys(object.user_profile), i = 0; i < keys.length; ++i)
                    message.user_profile[keys[i]] = String(object.user_profile[keys[i]]);
            }
            if (object.index_in_conversation_v2 != null)
                if ($util.Long)
                    (message.index_in_conversation_v2 = $util.Long.fromValue(object.index_in_conversation_v2)).unsigned = false;
                else if (typeof object.index_in_conversation_v2 === "string")
                    message.index_in_conversation_v2 = parseInt(object.index_in_conversation_v2, 10);
                else if (typeof object.index_in_conversation_v2 === "number")
                    message.index_in_conversation_v2 = object.index_in_conversation_v2;
                else if (typeof object.index_in_conversation_v2 === "object")
                    message.index_in_conversation_v2 = new $util.LongBits(object.index_in_conversation_v2.low >>> 0, object.index_in_conversation_v2.high >>> 0).toNumber();
            if (object.reference_info != null) {
                if (typeof object.reference_info !== "object")
                    throw TypeError(".im_proto.MessageBody.reference_info: object expected");
                message.reference_info = $root.im_proto.ReferenceInfo.fromObject(object.reference_info);
            }
            if (object.index_in_conversation_v1 != null)
                if ($util.Long)
                    (message.index_in_conversation_v1 = $util.Long.fromValue(object.index_in_conversation_v1)).unsigned = false;
                else if (typeof object.index_in_conversation_v1 === "string")
                    message.index_in_conversation_v1 = parseInt(object.index_in_conversation_v1, 10);
                else if (typeof object.index_in_conversation_v1 === "number")
                    message.index_in_conversation_v1 = object.index_in_conversation_v1;
                else if (typeof object.index_in_conversation_v1 === "object")
                    message.index_in_conversation_v1 = new $util.LongBits(object.index_in_conversation_v1.low >>> 0, object.index_in_conversation_v1.high >>> 0).toNumber();
            if (object.content_pb != null)
                if (typeof object.content_pb === "string")
                    $util.base64.decode(object.content_pb, message.content_pb = $util.newBuffer($util.base64.length(object.content_pb)), 0);
                else if (object.content_pb.length >= 0)
                    message.content_pb = object.content_pb;
            if (object.scene != null)
                message.scene = String(object.scene);
            if (object.conv_rank_update_rule != null)
                message.conv_rank_update_rule = object.conv_rank_update_rule | 0;
            return message;
        };

        /**
         * Creates a plain object from a MessageBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.MessageBody
         * @static
         * @param {im_proto.MessageBody} message MessageBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.ext = {};
                object.user_profile = {};
            }
            if (options.defaults) {
                object.conversation_id = "";
                object.conversation_type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.server_message_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.server_message_id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.index_in_conversation = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.index_in_conversation = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.conversation_short_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.conversation_short_id = options.longs === String ? "0" : 0;
                object.message_type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sender = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sender = options.longs === String ? "0" : 0;
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.create_time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.create_time = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.status = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.order_in_conversation = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.order_in_conversation = options.longs === String ? "0" : 0;
                object.sec_sender = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.index_in_conversation_v2 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.index_in_conversation_v2 = options.longs === String ? "0" : 0;
                object.reference_info = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.index_in_conversation_v1 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.index_in_conversation_v1 = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.content_pb = "";
                else {
                    object.content_pb = [];
                    if (options.bytes !== Array)
                        object.content_pb = $util.newBuffer(object.content_pb);
                }
                object.scene = "";
                object.conv_rank_update_rule = 0;
            }
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                object.conversation_id = message.conversation_id;
            if (message.conversation_type != null && message.hasOwnProperty("conversation_type"))
                object.conversation_type = message.conversation_type;
            if (message.server_message_id != null && message.hasOwnProperty("server_message_id"))
                if (typeof message.server_message_id === "number")
                    object.server_message_id = options.longs === String ? String(message.server_message_id) : message.server_message_id;
                else
                    object.server_message_id = options.longs === String ? $util.Long.prototype.toString.call(message.server_message_id) : options.longs === Number ? new $util.LongBits(message.server_message_id.low >>> 0, message.server_message_id.high >>> 0).toNumber() : message.server_message_id;
            if (message.index_in_conversation != null && message.hasOwnProperty("index_in_conversation"))
                if (typeof message.index_in_conversation === "number")
                    object.index_in_conversation = options.longs === String ? String(message.index_in_conversation) : message.index_in_conversation;
                else
                    object.index_in_conversation = options.longs === String ? $util.Long.prototype.toString.call(message.index_in_conversation) : options.longs === Number ? new $util.LongBits(message.index_in_conversation.low >>> 0, message.index_in_conversation.high >>> 0).toNumber() : message.index_in_conversation;
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (typeof message.conversation_short_id === "number")
                    object.conversation_short_id = options.longs === String ? String(message.conversation_short_id) : message.conversation_short_id;
                else
                    object.conversation_short_id = options.longs === String ? $util.Long.prototype.toString.call(message.conversation_short_id) : options.longs === Number ? new $util.LongBits(message.conversation_short_id.low >>> 0, message.conversation_short_id.high >>> 0).toNumber() : message.conversation_short_id;
            if (message.message_type != null && message.hasOwnProperty("message_type"))
                object.message_type = message.message_type;
            if (message.sender != null && message.hasOwnProperty("sender"))
                if (typeof message.sender === "number")
                    object.sender = options.longs === String ? String(message.sender) : message.sender;
                else
                    object.sender = options.longs === String ? $util.Long.prototype.toString.call(message.sender) : options.longs === Number ? new $util.LongBits(message.sender.low >>> 0, message.sender.high >>> 0).toNumber() : message.sender;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            var keys2;
            if (message.ext && (keys2 = Object.keys(message.ext)).length) {
                object.ext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.ext[keys2[j]] = message.ext[keys2[j]];
            }
            if (message.create_time != null && message.hasOwnProperty("create_time"))
                if (typeof message.create_time === "number")
                    object.create_time = options.longs === String ? String(message.create_time) : message.create_time;
                else
                    object.create_time = options.longs === String ? $util.Long.prototype.toString.call(message.create_time) : options.longs === Number ? new $util.LongBits(message.create_time.low >>> 0, message.create_time.high >>> 0).toNumber() : message.create_time;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.order_in_conversation != null && message.hasOwnProperty("order_in_conversation"))
                if (typeof message.order_in_conversation === "number")
                    object.order_in_conversation = options.longs === String ? String(message.order_in_conversation) : message.order_in_conversation;
                else
                    object.order_in_conversation = options.longs === String ? $util.Long.prototype.toString.call(message.order_in_conversation) : options.longs === Number ? new $util.LongBits(message.order_in_conversation.low >>> 0, message.order_in_conversation.high >>> 0).toNumber() : message.order_in_conversation;
            if (message.sec_sender != null && message.hasOwnProperty("sec_sender"))
                object.sec_sender = message.sec_sender;
            if (message.user_profile && (keys2 = Object.keys(message.user_profile)).length) {
                object.user_profile = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.user_profile[keys2[j]] = message.user_profile[keys2[j]];
            }
            if (message.index_in_conversation_v2 != null && message.hasOwnProperty("index_in_conversation_v2"))
                if (typeof message.index_in_conversation_v2 === "number")
                    object.index_in_conversation_v2 = options.longs === String ? String(message.index_in_conversation_v2) : message.index_in_conversation_v2;
                else
                    object.index_in_conversation_v2 = options.longs === String ? $util.Long.prototype.toString.call(message.index_in_conversation_v2) : options.longs === Number ? new $util.LongBits(message.index_in_conversation_v2.low >>> 0, message.index_in_conversation_v2.high >>> 0).toNumber() : message.index_in_conversation_v2;
            if (message.reference_info != null && message.hasOwnProperty("reference_info"))
                object.reference_info = $root.im_proto.ReferenceInfo.toObject(message.reference_info, options);
            if (message.index_in_conversation_v1 != null && message.hasOwnProperty("index_in_conversation_v1"))
                if (typeof message.index_in_conversation_v1 === "number")
                    object.index_in_conversation_v1 = options.longs === String ? String(message.index_in_conversation_v1) : message.index_in_conversation_v1;
                else
                    object.index_in_conversation_v1 = options.longs === String ? $util.Long.prototype.toString.call(message.index_in_conversation_v1) : options.longs === Number ? new $util.LongBits(message.index_in_conversation_v1.low >>> 0, message.index_in_conversation_v1.high >>> 0).toNumber() : message.index_in_conversation_v1;
            if (message.content_pb != null && message.hasOwnProperty("content_pb"))
                object.content_pb = options.bytes === String ? $util.base64.encode(message.content_pb, 0, message.content_pb.length) : options.bytes === Array ? Array.prototype.slice.call(message.content_pb) : message.content_pb;
            if (message.scene != null && message.hasOwnProperty("scene"))
                object.scene = message.scene;
            if (message.conv_rank_update_rule != null && message.hasOwnProperty("conv_rank_update_rule"))
                object.conv_rank_update_rule = message.conv_rank_update_rule;
            return object;
        };

        /**
         * Converts this MessageBody to JSON.
         * @function toJSON
         * @memberof im_proto.MessageBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageBody
         * @function getTypeUrl
         * @memberof im_proto.MessageBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.MessageBody";
        };

        return MessageBody;
    })();

    im_proto.StrangerConversation = (function() {

        /**
         * Properties of a StrangerConversation.
         * @memberof im_proto
         * @interface IStrangerConversation
         * @property {number|Long|null} [conversation_short_id] StrangerConversation conversation_short_id
         * @property {number|null} [unread] StrangerConversation unread
         * @property {im_proto.IMessageBody|null} [last_message] StrangerConversation last_message
         * @property {string|null} [conversation_id] StrangerConversation conversation_id
         * @property {Array.<im_proto.IParticipant>|null} [participants] StrangerConversation participants
         * @property {number|null} [badge_count] StrangerConversation badge_count
         * @property {Object.<string,string>|null} [ext] StrangerConversation ext
         */

        /**
         * Constructs a new StrangerConversation.
         * @memberof im_proto
         * @classdesc Represents a StrangerConversation.
         * @implements IStrangerConversation
         * @constructor
         * @param {im_proto.IStrangerConversation=} [properties] Properties to set
         */
        function StrangerConversation(properties) {
            this.participants = [];
            this.ext = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrangerConversation conversation_short_id.
         * @member {number|Long} conversation_short_id
         * @memberof im_proto.StrangerConversation
         * @instance
         */
        StrangerConversation.prototype.conversation_short_id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StrangerConversation unread.
         * @member {number} unread
         * @memberof im_proto.StrangerConversation
         * @instance
         */
        StrangerConversation.prototype.unread = 0;

        /**
         * StrangerConversation last_message.
         * @member {im_proto.IMessageBody|null|undefined} last_message
         * @memberof im_proto.StrangerConversation
         * @instance
         */
        StrangerConversation.prototype.last_message = null;

        /**
         * StrangerConversation conversation_id.
         * @member {string} conversation_id
         * @memberof im_proto.StrangerConversation
         * @instance
         */
        StrangerConversation.prototype.conversation_id = "";

        /**
         * StrangerConversation participants.
         * @member {Array.<im_proto.IParticipant>} participants
         * @memberof im_proto.StrangerConversation
         * @instance
         */
        StrangerConversation.prototype.participants = $util.emptyArray;

        /**
         * StrangerConversation badge_count.
         * @member {number} badge_count
         * @memberof im_proto.StrangerConversation
         * @instance
         */
        StrangerConversation.prototype.badge_count = 0;

        /**
         * StrangerConversation ext.
         * @member {Object.<string,string>} ext
         * @memberof im_proto.StrangerConversation
         * @instance
         */
        StrangerConversation.prototype.ext = $util.emptyObject;

        /**
         * Creates a new StrangerConversation instance using the specified properties.
         * @function create
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {im_proto.IStrangerConversation=} [properties] Properties to set
         * @returns {im_proto.StrangerConversation} StrangerConversation instance
         */
        StrangerConversation.create = function create(properties) {
            return new StrangerConversation(properties);
        };

        /**
         * Encodes the specified StrangerConversation message. Does not implicitly {@link im_proto.StrangerConversation.verify|verify} messages.
         * @function encode
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {im_proto.IStrangerConversation} message StrangerConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrangerConversation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_short_id != null && Object.hasOwnProperty.call(message, "conversation_short_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.conversation_short_id);
            if (message.unread != null && Object.hasOwnProperty.call(message, "unread"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unread);
            if (message.last_message != null && Object.hasOwnProperty.call(message, "last_message"))
                $root.im_proto.MessageBody.encode(message.last_message, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.conversation_id != null && Object.hasOwnProperty.call(message, "conversation_id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.conversation_id);
            if (message.participants != null && message.participants.length)
                for (var i = 0; i < message.participants.length; ++i)
                    $root.im_proto.Participant.encode(message.participants[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.badge_count != null && Object.hasOwnProperty.call(message, "badge_count"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.badge_count);
            if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
                for (var keys = Object.keys(message.ext), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.ext[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StrangerConversation message, length delimited. Does not implicitly {@link im_proto.StrangerConversation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {im_proto.IStrangerConversation} message StrangerConversation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrangerConversation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrangerConversation message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.StrangerConversation} StrangerConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrangerConversation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.StrangerConversation(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.conversation_short_id = reader.int64();
                        break;
                    }
                case 2: {
                        message.unread = reader.int32();
                        break;
                    }
                case 3: {
                        message.last_message = $root.im_proto.MessageBody.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.conversation_id = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.participants && message.participants.length))
                            message.participants = [];
                        message.participants.push($root.im_proto.Participant.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.badge_count = reader.int32();
                        break;
                    }
                case 7: {
                        if (message.ext === $util.emptyObject)
                            message.ext = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ext[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StrangerConversation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.StrangerConversation} StrangerConversation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrangerConversation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrangerConversation message.
         * @function verify
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrangerConversation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (!$util.isInteger(message.conversation_short_id) && !(message.conversation_short_id && $util.isInteger(message.conversation_short_id.low) && $util.isInteger(message.conversation_short_id.high)))
                    return "conversation_short_id: integer|Long expected";
            if (message.unread != null && message.hasOwnProperty("unread"))
                if (!$util.isInteger(message.unread))
                    return "unread: integer expected";
            if (message.last_message != null && message.hasOwnProperty("last_message")) {
                var error = $root.im_proto.MessageBody.verify(message.last_message);
                if (error)
                    return "last_message." + error;
            }
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                if (!$util.isString(message.conversation_id))
                    return "conversation_id: string expected";
            if (message.participants != null && message.hasOwnProperty("participants")) {
                if (!Array.isArray(message.participants))
                    return "participants: array expected";
                for (var i = 0; i < message.participants.length; ++i) {
                    var error = $root.im_proto.Participant.verify(message.participants[i]);
                    if (error)
                        return "participants." + error;
                }
            }
            if (message.badge_count != null && message.hasOwnProperty("badge_count"))
                if (!$util.isInteger(message.badge_count))
                    return "badge_count: integer expected";
            if (message.ext != null && message.hasOwnProperty("ext")) {
                if (!$util.isObject(message.ext))
                    return "ext: object expected";
                var key = Object.keys(message.ext);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.ext[key[i]]))
                        return "ext: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a StrangerConversation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.StrangerConversation} StrangerConversation
         */
        StrangerConversation.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.StrangerConversation)
                return object;
            var message = new $root.im_proto.StrangerConversation();
            if (object.conversation_short_id != null)
                if ($util.Long)
                    (message.conversation_short_id = $util.Long.fromValue(object.conversation_short_id)).unsigned = false;
                else if (typeof object.conversation_short_id === "string")
                    message.conversation_short_id = parseInt(object.conversation_short_id, 10);
                else if (typeof object.conversation_short_id === "number")
                    message.conversation_short_id = object.conversation_short_id;
                else if (typeof object.conversation_short_id === "object")
                    message.conversation_short_id = new $util.LongBits(object.conversation_short_id.low >>> 0, object.conversation_short_id.high >>> 0).toNumber();
            if (object.unread != null)
                message.unread = object.unread | 0;
            if (object.last_message != null) {
                if (typeof object.last_message !== "object")
                    throw TypeError(".im_proto.StrangerConversation.last_message: object expected");
                message.last_message = $root.im_proto.MessageBody.fromObject(object.last_message);
            }
            if (object.conversation_id != null)
                message.conversation_id = String(object.conversation_id);
            if (object.participants) {
                if (!Array.isArray(object.participants))
                    throw TypeError(".im_proto.StrangerConversation.participants: array expected");
                message.participants = [];
                for (var i = 0; i < object.participants.length; ++i) {
                    if (typeof object.participants[i] !== "object")
                        throw TypeError(".im_proto.StrangerConversation.participants: object expected");
                    message.participants[i] = $root.im_proto.Participant.fromObject(object.participants[i]);
                }
            }
            if (object.badge_count != null)
                message.badge_count = object.badge_count | 0;
            if (object.ext) {
                if (typeof object.ext !== "object")
                    throw TypeError(".im_proto.StrangerConversation.ext: object expected");
                message.ext = {};
                for (var keys = Object.keys(object.ext), i = 0; i < keys.length; ++i)
                    message.ext[keys[i]] = String(object.ext[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a StrangerConversation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {im_proto.StrangerConversation} message StrangerConversation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrangerConversation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.participants = [];
            if (options.objects || options.defaults)
                object.ext = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.conversation_short_id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.conversation_short_id = options.longs === String ? "0" : 0;
                object.unread = 0;
                object.last_message = null;
                object.conversation_id = "";
                object.badge_count = 0;
            }
            if (message.conversation_short_id != null && message.hasOwnProperty("conversation_short_id"))
                if (typeof message.conversation_short_id === "number")
                    object.conversation_short_id = options.longs === String ? String(message.conversation_short_id) : message.conversation_short_id;
                else
                    object.conversation_short_id = options.longs === String ? $util.Long.prototype.toString.call(message.conversation_short_id) : options.longs === Number ? new $util.LongBits(message.conversation_short_id.low >>> 0, message.conversation_short_id.high >>> 0).toNumber() : message.conversation_short_id;
            if (message.unread != null && message.hasOwnProperty("unread"))
                object.unread = message.unread;
            if (message.last_message != null && message.hasOwnProperty("last_message"))
                object.last_message = $root.im_proto.MessageBody.toObject(message.last_message, options);
            if (message.conversation_id != null && message.hasOwnProperty("conversation_id"))
                object.conversation_id = message.conversation_id;
            if (message.participants && message.participants.length) {
                object.participants = [];
                for (var j = 0; j < message.participants.length; ++j)
                    object.participants[j] = $root.im_proto.Participant.toObject(message.participants[j], options);
            }
            if (message.badge_count != null && message.hasOwnProperty("badge_count"))
                object.badge_count = message.badge_count;
            var keys2;
            if (message.ext && (keys2 = Object.keys(message.ext)).length) {
                object.ext = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.ext[keys2[j]] = message.ext[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this StrangerConversation to JSON.
         * @function toJSON
         * @memberof im_proto.StrangerConversation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrangerConversation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StrangerConversation
         * @function getTypeUrl
         * @memberof im_proto.StrangerConversation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StrangerConversation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.StrangerConversation";
        };

        return StrangerConversation;
    })();

    im_proto.GetStrangerConversationListResponseBody = (function() {

        /**
         * Properties of a GetStrangerConversationListResponseBody.
         * @memberof im_proto
         * @interface IGetStrangerConversationListResponseBody
         * @property {number|Long|null} [next_cursor] GetStrangerConversationListResponseBody next_cursor
         * @property {boolean|null} [has_more] GetStrangerConversationListResponseBody has_more
         * @property {number|null} [total_unread] GetStrangerConversationListResponseBody total_unread
         * @property {Array.<im_proto.IStrangerConversation>|null} [conversation_list] GetStrangerConversationListResponseBody conversation_list
         */

        /**
         * Constructs a new GetStrangerConversationListResponseBody.
         * @memberof im_proto
         * @classdesc Represents a GetStrangerConversationListResponseBody.
         * @implements IGetStrangerConversationListResponseBody
         * @constructor
         * @param {im_proto.IGetStrangerConversationListResponseBody=} [properties] Properties to set
         */
        function GetStrangerConversationListResponseBody(properties) {
            this.conversation_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetStrangerConversationListResponseBody next_cursor.
         * @member {number|Long} next_cursor
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @instance
         */
        GetStrangerConversationListResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetStrangerConversationListResponseBody has_more.
         * @member {boolean} has_more
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @instance
         */
        GetStrangerConversationListResponseBody.prototype.has_more = false;

        /**
         * GetStrangerConversationListResponseBody total_unread.
         * @member {number} total_unread
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @instance
         */
        GetStrangerConversationListResponseBody.prototype.total_unread = 0;

        /**
         * GetStrangerConversationListResponseBody conversation_list.
         * @member {Array.<im_proto.IStrangerConversation>} conversation_list
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @instance
         */
        GetStrangerConversationListResponseBody.prototype.conversation_list = $util.emptyArray;

        /**
         * Creates a new GetStrangerConversationListResponseBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {im_proto.IGetStrangerConversationListResponseBody=} [properties] Properties to set
         * @returns {im_proto.GetStrangerConversationListResponseBody} GetStrangerConversationListResponseBody instance
         */
        GetStrangerConversationListResponseBody.create = function create(properties) {
            return new GetStrangerConversationListResponseBody(properties);
        };

        /**
         * Encodes the specified GetStrangerConversationListResponseBody message. Does not implicitly {@link im_proto.GetStrangerConversationListResponseBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {im_proto.IGetStrangerConversationListResponseBody} message GetStrangerConversationListResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrangerConversationListResponseBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.next_cursor != null && Object.hasOwnProperty.call(message, "next_cursor"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.next_cursor);
            if (message.has_more != null && Object.hasOwnProperty.call(message, "has_more"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.has_more);
            if (message.total_unread != null && Object.hasOwnProperty.call(message, "total_unread"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.total_unread);
            if (message.conversation_list != null && message.conversation_list.length)
                for (var i = 0; i < message.conversation_list.length; ++i)
                    $root.im_proto.StrangerConversation.encode(message.conversation_list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetStrangerConversationListResponseBody message, length delimited. Does not implicitly {@link im_proto.GetStrangerConversationListResponseBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {im_proto.IGetStrangerConversationListResponseBody} message GetStrangerConversationListResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStrangerConversationListResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStrangerConversationListResponseBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetStrangerConversationListResponseBody} GetStrangerConversationListResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrangerConversationListResponseBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetStrangerConversationListResponseBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.next_cursor = reader.int64();
                        break;
                    }
                case 2: {
                        message.has_more = reader.bool();
                        break;
                    }
                case 3: {
                        message.total_unread = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.conversation_list && message.conversation_list.length))
                            message.conversation_list = [];
                        message.conversation_list.push($root.im_proto.StrangerConversation.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStrangerConversationListResponseBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetStrangerConversationListResponseBody} GetStrangerConversationListResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStrangerConversationListResponseBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStrangerConversationListResponseBody message.
         * @function verify
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStrangerConversationListResponseBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.next_cursor != null && message.hasOwnProperty("next_cursor"))
                if (!$util.isInteger(message.next_cursor) && !(message.next_cursor && $util.isInteger(message.next_cursor.low) && $util.isInteger(message.next_cursor.high)))
                    return "next_cursor: integer|Long expected";
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                if (typeof message.has_more !== "boolean")
                    return "has_more: boolean expected";
            if (message.total_unread != null && message.hasOwnProperty("total_unread"))
                if (!$util.isInteger(message.total_unread))
                    return "total_unread: integer expected";
            if (message.conversation_list != null && message.hasOwnProperty("conversation_list")) {
                if (!Array.isArray(message.conversation_list))
                    return "conversation_list: array expected";
                for (var i = 0; i < message.conversation_list.length; ++i) {
                    var error = $root.im_proto.StrangerConversation.verify(message.conversation_list[i]);
                    if (error)
                        return "conversation_list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetStrangerConversationListResponseBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetStrangerConversationListResponseBody} GetStrangerConversationListResponseBody
         */
        GetStrangerConversationListResponseBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetStrangerConversationListResponseBody)
                return object;
            var message = new $root.im_proto.GetStrangerConversationListResponseBody();
            if (object.next_cursor != null)
                if ($util.Long)
                    (message.next_cursor = $util.Long.fromValue(object.next_cursor)).unsigned = false;
                else if (typeof object.next_cursor === "string")
                    message.next_cursor = parseInt(object.next_cursor, 10);
                else if (typeof object.next_cursor === "number")
                    message.next_cursor = object.next_cursor;
                else if (typeof object.next_cursor === "object")
                    message.next_cursor = new $util.LongBits(object.next_cursor.low >>> 0, object.next_cursor.high >>> 0).toNumber();
            if (object.has_more != null)
                message.has_more = Boolean(object.has_more);
            if (object.total_unread != null)
                message.total_unread = object.total_unread | 0;
            if (object.conversation_list) {
                if (!Array.isArray(object.conversation_list))
                    throw TypeError(".im_proto.GetStrangerConversationListResponseBody.conversation_list: array expected");
                message.conversation_list = [];
                for (var i = 0; i < object.conversation_list.length; ++i) {
                    if (typeof object.conversation_list[i] !== "object")
                        throw TypeError(".im_proto.GetStrangerConversationListResponseBody.conversation_list: object expected");
                    message.conversation_list[i] = $root.im_proto.StrangerConversation.fromObject(object.conversation_list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetStrangerConversationListResponseBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {im_proto.GetStrangerConversationListResponseBody} message GetStrangerConversationListResponseBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStrangerConversationListResponseBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.conversation_list = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.next_cursor = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.next_cursor = options.longs === String ? "0" : 0;
                object.has_more = false;
                object.total_unread = 0;
            }
            if (message.next_cursor != null && message.hasOwnProperty("next_cursor"))
                if (typeof message.next_cursor === "number")
                    object.next_cursor = options.longs === String ? String(message.next_cursor) : message.next_cursor;
                else
                    object.next_cursor = options.longs === String ? $util.Long.prototype.toString.call(message.next_cursor) : options.longs === Number ? new $util.LongBits(message.next_cursor.low >>> 0, message.next_cursor.high >>> 0).toNumber() : message.next_cursor;
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                object.has_more = message.has_more;
            if (message.total_unread != null && message.hasOwnProperty("total_unread"))
                object.total_unread = message.total_unread;
            if (message.conversation_list && message.conversation_list.length) {
                object.conversation_list = [];
                for (var j = 0; j < message.conversation_list.length; ++j)
                    object.conversation_list[j] = $root.im_proto.StrangerConversation.toObject(message.conversation_list[j], options);
            }
            return object;
        };

        /**
         * Converts this GetStrangerConversationListResponseBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStrangerConversationListResponseBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetStrangerConversationListResponseBody
         * @function getTypeUrl
         * @memberof im_proto.GetStrangerConversationListResponseBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetStrangerConversationListResponseBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetStrangerConversationListResponseBody";
        };

        return GetStrangerConversationListResponseBody;
    })();

    im_proto.GetConversationInfoListV2ResponseBody = (function() {

        /**
         * Properties of a GetConversationInfoListV2ResponseBody.
         * @memberof im_proto
         * @interface IGetConversationInfoListV2ResponseBody
         * @property {Array.<im_proto.IConversationInfoV2>|null} [conversation_info_list] GetConversationInfoListV2ResponseBody conversation_info_list
         */

        /**
         * Constructs a new GetConversationInfoListV2ResponseBody.
         * @memberof im_proto
         * @classdesc Represents a GetConversationInfoListV2ResponseBody.
         * @implements IGetConversationInfoListV2ResponseBody
         * @constructor
         * @param {im_proto.IGetConversationInfoListV2ResponseBody=} [properties] Properties to set
         */
        function GetConversationInfoListV2ResponseBody(properties) {
            this.conversation_info_list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetConversationInfoListV2ResponseBody conversation_info_list.
         * @member {Array.<im_proto.IConversationInfoV2>} conversation_info_list
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @instance
         */
        GetConversationInfoListV2ResponseBody.prototype.conversation_info_list = $util.emptyArray;

        /**
         * Creates a new GetConversationInfoListV2ResponseBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {im_proto.IGetConversationInfoListV2ResponseBody=} [properties] Properties to set
         * @returns {im_proto.GetConversationInfoListV2ResponseBody} GetConversationInfoListV2ResponseBody instance
         */
        GetConversationInfoListV2ResponseBody.create = function create(properties) {
            return new GetConversationInfoListV2ResponseBody(properties);
        };

        /**
         * Encodes the specified GetConversationInfoListV2ResponseBody message. Does not implicitly {@link im_proto.GetConversationInfoListV2ResponseBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {im_proto.IGetConversationInfoListV2ResponseBody} message GetConversationInfoListV2ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoListV2ResponseBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.conversation_info_list != null && message.conversation_info_list.length)
                for (var i = 0; i < message.conversation_info_list.length; ++i)
                    $root.im_proto.ConversationInfoV2.encode(message.conversation_info_list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetConversationInfoListV2ResponseBody message, length delimited. Does not implicitly {@link im_proto.GetConversationInfoListV2ResponseBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {im_proto.IGetConversationInfoListV2ResponseBody} message GetConversationInfoListV2ResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetConversationInfoListV2ResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetConversationInfoListV2ResponseBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetConversationInfoListV2ResponseBody} GetConversationInfoListV2ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoListV2ResponseBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetConversationInfoListV2ResponseBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.conversation_info_list && message.conversation_info_list.length))
                            message.conversation_info_list = [];
                        message.conversation_info_list.push($root.im_proto.ConversationInfoV2.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetConversationInfoListV2ResponseBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetConversationInfoListV2ResponseBody} GetConversationInfoListV2ResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetConversationInfoListV2ResponseBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetConversationInfoListV2ResponseBody message.
         * @function verify
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetConversationInfoListV2ResponseBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.conversation_info_list != null && message.hasOwnProperty("conversation_info_list")) {
                if (!Array.isArray(message.conversation_info_list))
                    return "conversation_info_list: array expected";
                for (var i = 0; i < message.conversation_info_list.length; ++i) {
                    var error = $root.im_proto.ConversationInfoV2.verify(message.conversation_info_list[i]);
                    if (error)
                        return "conversation_info_list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetConversationInfoListV2ResponseBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetConversationInfoListV2ResponseBody} GetConversationInfoListV2ResponseBody
         */
        GetConversationInfoListV2ResponseBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetConversationInfoListV2ResponseBody)
                return object;
            var message = new $root.im_proto.GetConversationInfoListV2ResponseBody();
            if (object.conversation_info_list) {
                if (!Array.isArray(object.conversation_info_list))
                    throw TypeError(".im_proto.GetConversationInfoListV2ResponseBody.conversation_info_list: array expected");
                message.conversation_info_list = [];
                for (var i = 0; i < object.conversation_info_list.length; ++i) {
                    if (typeof object.conversation_info_list[i] !== "object")
                        throw TypeError(".im_proto.GetConversationInfoListV2ResponseBody.conversation_info_list: object expected");
                    message.conversation_info_list[i] = $root.im_proto.ConversationInfoV2.fromObject(object.conversation_info_list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetConversationInfoListV2ResponseBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {im_proto.GetConversationInfoListV2ResponseBody} message GetConversationInfoListV2ResponseBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetConversationInfoListV2ResponseBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.conversation_info_list = [];
            if (message.conversation_info_list && message.conversation_info_list.length) {
                object.conversation_info_list = [];
                for (var j = 0; j < message.conversation_info_list.length; ++j)
                    object.conversation_info_list[j] = $root.im_proto.ConversationInfoV2.toObject(message.conversation_info_list[j], options);
            }
            return object;
        };

        /**
         * Converts this GetConversationInfoListV2ResponseBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetConversationInfoListV2ResponseBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetConversationInfoListV2ResponseBody
         * @function getTypeUrl
         * @memberof im_proto.GetConversationInfoListV2ResponseBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetConversationInfoListV2ResponseBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetConversationInfoListV2ResponseBody";
        };

        return GetConversationInfoListV2ResponseBody;
    })();

    im_proto.GetUserConversationListResponseBody = (function() {

        /**
         * Properties of a GetUserConversationListResponseBody.
         * @memberof im_proto
         * @interface IGetUserConversationListResponseBody
         * @property {Array.<im_proto.IConversationInfoV2>|null} [list] GetUserConversationListResponseBody list
         * @property {boolean|null} [has_more] GetUserConversationListResponseBody has_more
         * @property {number|Long|null} [next_cursor] GetUserConversationListResponseBody next_cursor
         */

        /**
         * Constructs a new GetUserConversationListResponseBody.
         * @memberof im_proto
         * @classdesc Represents a GetUserConversationListResponseBody.
         * @implements IGetUserConversationListResponseBody
         * @constructor
         * @param {im_proto.IGetUserConversationListResponseBody=} [properties] Properties to set
         */
        function GetUserConversationListResponseBody(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserConversationListResponseBody list.
         * @member {Array.<im_proto.IConversationInfoV2>} list
         * @memberof im_proto.GetUserConversationListResponseBody
         * @instance
         */
        GetUserConversationListResponseBody.prototype.list = $util.emptyArray;

        /**
         * GetUserConversationListResponseBody has_more.
         * @member {boolean} has_more
         * @memberof im_proto.GetUserConversationListResponseBody
         * @instance
         */
        GetUserConversationListResponseBody.prototype.has_more = false;

        /**
         * GetUserConversationListResponseBody next_cursor.
         * @member {number|Long} next_cursor
         * @memberof im_proto.GetUserConversationListResponseBody
         * @instance
         */
        GetUserConversationListResponseBody.prototype.next_cursor = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetUserConversationListResponseBody instance using the specified properties.
         * @function create
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {im_proto.IGetUserConversationListResponseBody=} [properties] Properties to set
         * @returns {im_proto.GetUserConversationListResponseBody} GetUserConversationListResponseBody instance
         */
        GetUserConversationListResponseBody.create = function create(properties) {
            return new GetUserConversationListResponseBody(properties);
        };

        /**
         * Encodes the specified GetUserConversationListResponseBody message. Does not implicitly {@link im_proto.GetUserConversationListResponseBody.verify|verify} messages.
         * @function encode
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {im_proto.IGetUserConversationListResponseBody} message GetUserConversationListResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserConversationListResponseBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.im_proto.ConversationInfoV2.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.has_more != null && Object.hasOwnProperty.call(message, "has_more"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.has_more);
            if (message.next_cursor != null && Object.hasOwnProperty.call(message, "next_cursor"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.next_cursor);
            return writer;
        };

        /**
         * Encodes the specified GetUserConversationListResponseBody message, length delimited. Does not implicitly {@link im_proto.GetUserConversationListResponseBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {im_proto.IGetUserConversationListResponseBody} message GetUserConversationListResponseBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserConversationListResponseBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserConversationListResponseBody message from the specified reader or buffer.
         * @function decode
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {im_proto.GetUserConversationListResponseBody} GetUserConversationListResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserConversationListResponseBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.im_proto.GetUserConversationListResponseBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.im_proto.ConversationInfoV2.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.has_more = reader.bool();
                        break;
                    }
                case 3: {
                        message.next_cursor = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserConversationListResponseBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {im_proto.GetUserConversationListResponseBody} GetUserConversationListResponseBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserConversationListResponseBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserConversationListResponseBody message.
         * @function verify
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserConversationListResponseBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.im_proto.ConversationInfoV2.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                if (typeof message.has_more !== "boolean")
                    return "has_more: boolean expected";
            if (message.next_cursor != null && message.hasOwnProperty("next_cursor"))
                if (!$util.isInteger(message.next_cursor) && !(message.next_cursor && $util.isInteger(message.next_cursor.low) && $util.isInteger(message.next_cursor.high)))
                    return "next_cursor: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetUserConversationListResponseBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {im_proto.GetUserConversationListResponseBody} GetUserConversationListResponseBody
         */
        GetUserConversationListResponseBody.fromObject = function fromObject(object) {
            if (object instanceof $root.im_proto.GetUserConversationListResponseBody)
                return object;
            var message = new $root.im_proto.GetUserConversationListResponseBody();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".im_proto.GetUserConversationListResponseBody.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".im_proto.GetUserConversationListResponseBody.list: object expected");
                    message.list[i] = $root.im_proto.ConversationInfoV2.fromObject(object.list[i]);
                }
            }
            if (object.has_more != null)
                message.has_more = Boolean(object.has_more);
            if (object.next_cursor != null)
                if ($util.Long)
                    (message.next_cursor = $util.Long.fromValue(object.next_cursor)).unsigned = false;
                else if (typeof object.next_cursor === "string")
                    message.next_cursor = parseInt(object.next_cursor, 10);
                else if (typeof object.next_cursor === "number")
                    message.next_cursor = object.next_cursor;
                else if (typeof object.next_cursor === "object")
                    message.next_cursor = new $util.LongBits(object.next_cursor.low >>> 0, object.next_cursor.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a GetUserConversationListResponseBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {im_proto.GetUserConversationListResponseBody} message GetUserConversationListResponseBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserConversationListResponseBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.has_more = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.next_cursor = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.next_cursor = options.longs === String ? "0" : 0;
            }
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.im_proto.ConversationInfoV2.toObject(message.list[j], options);
            }
            if (message.has_more != null && message.hasOwnProperty("has_more"))
                object.has_more = message.has_more;
            if (message.next_cursor != null && message.hasOwnProperty("next_cursor"))
                if (typeof message.next_cursor === "number")
                    object.next_cursor = options.longs === String ? String(message.next_cursor) : message.next_cursor;
                else
                    object.next_cursor = options.longs === String ? $util.Long.prototype.toString.call(message.next_cursor) : options.longs === Number ? new $util.LongBits(message.next_cursor.low >>> 0, message.next_cursor.high >>> 0).toNumber() : message.next_cursor;
            return object;
        };

        /**
         * Converts this GetUserConversationListResponseBody to JSON.
         * @function toJSON
         * @memberof im_proto.GetUserConversationListResponseBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserConversationListResponseBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserConversationListResponseBody
         * @function getTypeUrl
         * @memberof im_proto.GetUserConversationListResponseBody
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserConversationListResponseBody.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/im_proto.GetUserConversationListResponseBody";
        };

        return GetUserConversationListResponseBody;
    })();

    return im_proto;
})();

module.exports = $root;
