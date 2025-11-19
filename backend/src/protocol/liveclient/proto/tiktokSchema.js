/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.TikTok = (function() {

    /**
     * Namespace TikTok.
     * @exports TikTok
     * @namespace
     */
    var TikTok = {};

    TikTok.WebcastResponse = (function() {

        /**
         * Properties of a WebcastResponse.
         * @memberof TikTok
         * @interface IWebcastResponse
         * @property {Array.<TikTok.IMessage>|null} [messages] WebcastResponse messages
         * @property {string|null} [cursor] WebcastResponse cursor
         * @property {number|null} [fetchInterval] WebcastResponse fetchInterval
         * @property {number|Long|null} [serverTimestamp] WebcastResponse serverTimestamp
         * @property {string|null} [internalExt] WebcastResponse internalExt
         * @property {number|null} [fetchType] WebcastResponse fetchType
         * @property {Array.<TikTok.IWebsocketParam>|null} [wsParams] WebcastResponse wsParams
         * @property {number|null} [heartbeatDuration] WebcastResponse heartbeatDuration
         * @property {boolean|null} [needAck] WebcastResponse needAck
         * @property {string|null} [wsUrl] WebcastResponse wsUrl
         */

        /**
         * Constructs a new WebcastResponse.
         * @memberof TikTok
         * @classdesc Represents a WebcastResponse.
         * @implements IWebcastResponse
         * @constructor
         * @param {TikTok.IWebcastResponse=} [properties] Properties to set
         */
        function WebcastResponse(properties) {
            this.messages = [];
            this.wsParams = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastResponse messages.
         * @member {Array.<TikTok.IMessage>} messages
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.messages = $util.emptyArray;

        /**
         * WebcastResponse cursor.
         * @member {string} cursor
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.cursor = "";

        /**
         * WebcastResponse fetchInterval.
         * @member {number} fetchInterval
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.fetchInterval = 0;

        /**
         * WebcastResponse serverTimestamp.
         * @member {number|Long} serverTimestamp
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.serverTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WebcastResponse internalExt.
         * @member {string} internalExt
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.internalExt = "";

        /**
         * WebcastResponse fetchType.
         * @member {number} fetchType
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.fetchType = 0;

        /**
         * WebcastResponse wsParams.
         * @member {Array.<TikTok.IWebsocketParam>} wsParams
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.wsParams = $util.emptyArray;

        /**
         * WebcastResponse heartbeatDuration.
         * @member {number} heartbeatDuration
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.heartbeatDuration = 0;

        /**
         * WebcastResponse needAck.
         * @member {boolean} needAck
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.needAck = false;

        /**
         * WebcastResponse wsUrl.
         * @member {string} wsUrl
         * @memberof TikTok.WebcastResponse
         * @instance
         */
        WebcastResponse.prototype.wsUrl = "";

        /**
         * Creates a new WebcastResponse instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {TikTok.IWebcastResponse=} [properties] Properties to set
         * @returns {TikTok.WebcastResponse} WebcastResponse instance
         */
        WebcastResponse.create = function create(properties) {
            return new WebcastResponse(properties);
        };

        /**
         * Encodes the specified WebcastResponse message. Does not implicitly {@link TikTok.WebcastResponse.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {TikTok.IWebcastResponse} message WebcastResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.TikTok.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cursor != null && Object.hasOwnProperty.call(message, "cursor"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cursor);
            if (message.fetchInterval != null && Object.hasOwnProperty.call(message, "fetchInterval"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fetchInterval);
            if (message.serverTimestamp != null && Object.hasOwnProperty.call(message, "serverTimestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.serverTimestamp);
            if (message.internalExt != null && Object.hasOwnProperty.call(message, "internalExt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.internalExt);
            if (message.fetchType != null && Object.hasOwnProperty.call(message, "fetchType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.fetchType);
            if (message.wsParams != null && message.wsParams.length)
                for (var i = 0; i < message.wsParams.length; ++i)
                    $root.TikTok.WebsocketParam.encode(message.wsParams[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.heartbeatDuration != null && Object.hasOwnProperty.call(message, "heartbeatDuration"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.heartbeatDuration);
            if (message.needAck != null && Object.hasOwnProperty.call(message, "needAck"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.needAck);
            if (message.wsUrl != null && Object.hasOwnProperty.call(message, "wsUrl"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.wsUrl);
            return writer;
        };

        /**
         * Encodes the specified WebcastResponse message, length delimited. Does not implicitly {@link TikTok.WebcastResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {TikTok.IWebcastResponse} message WebcastResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastResponse message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastResponse} WebcastResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.TikTok.Message.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.cursor = reader.string();
                        break;
                    }
                case 3: {
                        message.fetchInterval = reader.int32();
                        break;
                    }
                case 4: {
                        message.serverTimestamp = reader.int64();
                        break;
                    }
                case 5: {
                        message.internalExt = reader.string();
                        break;
                    }
                case 6: {
                        message.fetchType = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.wsParams && message.wsParams.length))
                            message.wsParams = [];
                        message.wsParams.push($root.TikTok.WebsocketParam.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.heartbeatDuration = reader.int32();
                        break;
                    }
                case 9: {
                        message.needAck = reader.bool();
                        break;
                    }
                case 10: {
                        message.wsUrl = reader.string();
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
         * Decodes a WebcastResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastResponse} WebcastResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastResponse message.
         * @function verify
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.TikTok.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                if (!$util.isString(message.cursor))
                    return "cursor: string expected";
            if (message.fetchInterval != null && message.hasOwnProperty("fetchInterval"))
                if (!$util.isInteger(message.fetchInterval))
                    return "fetchInterval: integer expected";
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                if (!$util.isInteger(message.serverTimestamp) && !(message.serverTimestamp && $util.isInteger(message.serverTimestamp.low) && $util.isInteger(message.serverTimestamp.high)))
                    return "serverTimestamp: integer|Long expected";
            if (message.internalExt != null && message.hasOwnProperty("internalExt"))
                if (!$util.isString(message.internalExt))
                    return "internalExt: string expected";
            if (message.fetchType != null && message.hasOwnProperty("fetchType"))
                if (!$util.isInteger(message.fetchType))
                    return "fetchType: integer expected";
            if (message.wsParams != null && message.hasOwnProperty("wsParams")) {
                if (!Array.isArray(message.wsParams))
                    return "wsParams: array expected";
                for (var i = 0; i < message.wsParams.length; ++i) {
                    var error = $root.TikTok.WebsocketParam.verify(message.wsParams[i]);
                    if (error)
                        return "wsParams." + error;
                }
            }
            if (message.heartbeatDuration != null && message.hasOwnProperty("heartbeatDuration"))
                if (!$util.isInteger(message.heartbeatDuration))
                    return "heartbeatDuration: integer expected";
            if (message.needAck != null && message.hasOwnProperty("needAck"))
                if (typeof message.needAck !== "boolean")
                    return "needAck: boolean expected";
            if (message.wsUrl != null && message.hasOwnProperty("wsUrl"))
                if (!$util.isString(message.wsUrl))
                    return "wsUrl: string expected";
            return null;
        };

        /**
         * Creates a WebcastResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastResponse} WebcastResponse
         */
        WebcastResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastResponse)
                return object;
            var message = new $root.TikTok.WebcastResponse();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".TikTok.WebcastResponse.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".TikTok.WebcastResponse.messages: object expected");
                    message.messages[i] = $root.TikTok.Message.fromObject(object.messages[i]);
                }
            }
            if (object.cursor != null)
                message.cursor = String(object.cursor);
            if (object.fetchInterval != null)
                message.fetchInterval = object.fetchInterval | 0;
            if (object.serverTimestamp != null)
                if ($util.Long)
                    (message.serverTimestamp = $util.Long.fromValue(object.serverTimestamp)).unsigned = false;
                else if (typeof object.serverTimestamp === "string")
                    message.serverTimestamp = parseInt(object.serverTimestamp, 10);
                else if (typeof object.serverTimestamp === "number")
                    message.serverTimestamp = object.serverTimestamp;
                else if (typeof object.serverTimestamp === "object")
                    message.serverTimestamp = new $util.LongBits(object.serverTimestamp.low >>> 0, object.serverTimestamp.high >>> 0).toNumber();
            if (object.internalExt != null)
                message.internalExt = String(object.internalExt);
            if (object.fetchType != null)
                message.fetchType = object.fetchType | 0;
            if (object.wsParams) {
                if (!Array.isArray(object.wsParams))
                    throw TypeError(".TikTok.WebcastResponse.wsParams: array expected");
                message.wsParams = [];
                for (var i = 0; i < object.wsParams.length; ++i) {
                    if (typeof object.wsParams[i] !== "object")
                        throw TypeError(".TikTok.WebcastResponse.wsParams: object expected");
                    message.wsParams[i] = $root.TikTok.WebsocketParam.fromObject(object.wsParams[i]);
                }
            }
            if (object.heartbeatDuration != null)
                message.heartbeatDuration = object.heartbeatDuration | 0;
            if (object.needAck != null)
                message.needAck = Boolean(object.needAck);
            if (object.wsUrl != null)
                message.wsUrl = String(object.wsUrl);
            return message;
        };

        /**
         * Creates a plain object from a WebcastResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {TikTok.WebcastResponse} message WebcastResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.messages = [];
                object.wsParams = [];
            }
            if (options.defaults) {
                object.cursor = "";
                object.fetchInterval = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.serverTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.serverTimestamp = options.longs === String ? "0" : 0;
                object.internalExt = "";
                object.fetchType = 0;
                object.heartbeatDuration = 0;
                object.needAck = false;
                object.wsUrl = "";
            }
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.TikTok.Message.toObject(message.messages[j], options);
            }
            if (message.cursor != null && message.hasOwnProperty("cursor"))
                object.cursor = message.cursor;
            if (message.fetchInterval != null && message.hasOwnProperty("fetchInterval"))
                object.fetchInterval = message.fetchInterval;
            if (message.serverTimestamp != null && message.hasOwnProperty("serverTimestamp"))
                if (typeof message.serverTimestamp === "number")
                    object.serverTimestamp = options.longs === String ? String(message.serverTimestamp) : message.serverTimestamp;
                else
                    object.serverTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.serverTimestamp) : options.longs === Number ? new $util.LongBits(message.serverTimestamp.low >>> 0, message.serverTimestamp.high >>> 0).toNumber() : message.serverTimestamp;
            if (message.internalExt != null && message.hasOwnProperty("internalExt"))
                object.internalExt = message.internalExt;
            if (message.fetchType != null && message.hasOwnProperty("fetchType"))
                object.fetchType = message.fetchType;
            if (message.wsParams && message.wsParams.length) {
                object.wsParams = [];
                for (var j = 0; j < message.wsParams.length; ++j)
                    object.wsParams[j] = $root.TikTok.WebsocketParam.toObject(message.wsParams[j], options);
            }
            if (message.heartbeatDuration != null && message.hasOwnProperty("heartbeatDuration"))
                object.heartbeatDuration = message.heartbeatDuration;
            if (message.needAck != null && message.hasOwnProperty("needAck"))
                object.needAck = message.needAck;
            if (message.wsUrl != null && message.hasOwnProperty("wsUrl"))
                object.wsUrl = message.wsUrl;
            return object;
        };

        /**
         * Converts this WebcastResponse to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastResponse
         * @function getTypeUrl
         * @memberof TikTok.WebcastResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastResponse";
        };

        return WebcastResponse;
    })();

    TikTok.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof TikTok
         * @interface IMessage
         * @property {string|null} [type] Message type
         * @property {Uint8Array|null} [binary] Message binary
         */

        /**
         * Constructs a new Message.
         * @memberof TikTok
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {TikTok.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message type.
         * @member {string} type
         * @memberof TikTok.Message
         * @instance
         */
        Message.prototype.type = "";

        /**
         * Message binary.
         * @member {Uint8Array} binary
         * @memberof TikTok.Message
         * @instance
         */
        Message.prototype.binary = $util.newBuffer([]);

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof TikTok.Message
         * @static
         * @param {TikTok.IMessage=} [properties] Properties to set
         * @returns {TikTok.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link TikTok.Message.verify|verify} messages.
         * @function encode
         * @memberof TikTok.Message
         * @static
         * @param {TikTok.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.binary != null && Object.hasOwnProperty.call(message, "binary"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.binary);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link TikTok.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.Message
         * @static
         * @param {TikTok.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.binary = reader.bytes();
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
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof TikTok.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.binary != null && message.hasOwnProperty("binary"))
                if (!(message.binary && typeof message.binary.length === "number" || $util.isString(message.binary)))
                    return "binary: buffer expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.Message)
                return object;
            var message = new $root.TikTok.Message();
            if (object.type != null)
                message.type = String(object.type);
            if (object.binary != null)
                if (typeof object.binary === "string")
                    $util.base64.decode(object.binary, message.binary = $util.newBuffer($util.base64.length(object.binary)), 0);
                else if (object.binary.length >= 0)
                    message.binary = object.binary;
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.Message
         * @static
         * @param {TikTok.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                if (options.bytes === String)
                    object.binary = "";
                else {
                    object.binary = [];
                    if (options.bytes !== Array)
                        object.binary = $util.newBuffer(object.binary);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.binary != null && message.hasOwnProperty("binary"))
                object.binary = options.bytes === String ? $util.base64.encode(message.binary, 0, message.binary.length) : options.bytes === Array ? Array.prototype.slice.call(message.binary) : message.binary;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof TikTok.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof TikTok.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.Message";
        };

        return Message;
    })();

    TikTok.WebsocketParam = (function() {

        /**
         * Properties of a WebsocketParam.
         * @memberof TikTok
         * @interface IWebsocketParam
         * @property {string|null} [name] WebsocketParam name
         * @property {string|null} [value] WebsocketParam value
         */

        /**
         * Constructs a new WebsocketParam.
         * @memberof TikTok
         * @classdesc Represents a WebsocketParam.
         * @implements IWebsocketParam
         * @constructor
         * @param {TikTok.IWebsocketParam=} [properties] Properties to set
         */
        function WebsocketParam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebsocketParam name.
         * @member {string} name
         * @memberof TikTok.WebsocketParam
         * @instance
         */
        WebsocketParam.prototype.name = "";

        /**
         * WebsocketParam value.
         * @member {string} value
         * @memberof TikTok.WebsocketParam
         * @instance
         */
        WebsocketParam.prototype.value = "";

        /**
         * Creates a new WebsocketParam instance using the specified properties.
         * @function create
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {TikTok.IWebsocketParam=} [properties] Properties to set
         * @returns {TikTok.WebsocketParam} WebsocketParam instance
         */
        WebsocketParam.create = function create(properties) {
            return new WebsocketParam(properties);
        };

        /**
         * Encodes the specified WebsocketParam message. Does not implicitly {@link TikTok.WebsocketParam.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {TikTok.IWebsocketParam} message WebsocketParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebsocketParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified WebsocketParam message, length delimited. Does not implicitly {@link TikTok.WebsocketParam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {TikTok.IWebsocketParam} message WebsocketParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebsocketParam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebsocketParam message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebsocketParam} WebsocketParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebsocketParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebsocketParam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
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
         * Decodes a WebsocketParam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebsocketParam} WebsocketParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebsocketParam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebsocketParam message.
         * @function verify
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebsocketParam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates a WebsocketParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebsocketParam} WebsocketParam
         */
        WebsocketParam.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebsocketParam)
                return object;
            var message = new $root.TikTok.WebsocketParam();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from a WebsocketParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {TikTok.WebsocketParam} message WebsocketParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebsocketParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.value = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this WebsocketParam to JSON.
         * @function toJSON
         * @memberof TikTok.WebsocketParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebsocketParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebsocketParam
         * @function getTypeUrl
         * @memberof TikTok.WebsocketParam
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebsocketParam.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebsocketParam";
        };

        return WebsocketParam;
    })();

    TikTok.WebcastControlMessage = (function() {

        /**
         * Properties of a WebcastControlMessage.
         * @memberof TikTok
         * @interface IWebcastControlMessage
         * @property {number|null} [action] WebcastControlMessage action
         */

        /**
         * Constructs a new WebcastControlMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastControlMessage.
         * @implements IWebcastControlMessage
         * @constructor
         * @param {TikTok.IWebcastControlMessage=} [properties] Properties to set
         */
        function WebcastControlMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastControlMessage action.
         * @member {number} action
         * @memberof TikTok.WebcastControlMessage
         * @instance
         */
        WebcastControlMessage.prototype.action = 0;

        /**
         * Creates a new WebcastControlMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {TikTok.IWebcastControlMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastControlMessage} WebcastControlMessage instance
         */
        WebcastControlMessage.create = function create(properties) {
            return new WebcastControlMessage(properties);
        };

        /**
         * Encodes the specified WebcastControlMessage message. Does not implicitly {@link TikTok.WebcastControlMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {TikTok.IWebcastControlMessage} message WebcastControlMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastControlMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.action);
            return writer;
        };

        /**
         * Encodes the specified WebcastControlMessage message, length delimited. Does not implicitly {@link TikTok.WebcastControlMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {TikTok.IWebcastControlMessage} message WebcastControlMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastControlMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastControlMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastControlMessage} WebcastControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastControlMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastControlMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.action = reader.int32();
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
         * Decodes a WebcastControlMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastControlMessage} WebcastControlMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastControlMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastControlMessage message.
         * @function verify
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastControlMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isInteger(message.action))
                    return "action: integer expected";
            return null;
        };

        /**
         * Creates a WebcastControlMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastControlMessage} WebcastControlMessage
         */
        WebcastControlMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastControlMessage)
                return object;
            var message = new $root.TikTok.WebcastControlMessage();
            if (object.action != null)
                message.action = object.action | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastControlMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {TikTok.WebcastControlMessage} message WebcastControlMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastControlMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.action = 0;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this WebcastControlMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastControlMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastControlMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastControlMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastControlMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastControlMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastControlMessage";
        };

        return WebcastControlMessage;
    })();

    TikTok.WebcastRoomUserSeqMessage = (function() {

        /**
         * Properties of a WebcastRoomUserSeqMessage.
         * @memberof TikTok
         * @interface IWebcastRoomUserSeqMessage
         * @property {Array.<TikTok.ITopUser>|null} [topViewers] WebcastRoomUserSeqMessage topViewers
         * @property {number|null} [viewerCount] WebcastRoomUserSeqMessage viewerCount
         */

        /**
         * Constructs a new WebcastRoomUserSeqMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastRoomUserSeqMessage.
         * @implements IWebcastRoomUserSeqMessage
         * @constructor
         * @param {TikTok.IWebcastRoomUserSeqMessage=} [properties] Properties to set
         */
        function WebcastRoomUserSeqMessage(properties) {
            this.topViewers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastRoomUserSeqMessage topViewers.
         * @member {Array.<TikTok.ITopUser>} topViewers
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @instance
         */
        WebcastRoomUserSeqMessage.prototype.topViewers = $util.emptyArray;

        /**
         * WebcastRoomUserSeqMessage viewerCount.
         * @member {number} viewerCount
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @instance
         */
        WebcastRoomUserSeqMessage.prototype.viewerCount = 0;

        /**
         * Creates a new WebcastRoomUserSeqMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {TikTok.IWebcastRoomUserSeqMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastRoomUserSeqMessage} WebcastRoomUserSeqMessage instance
         */
        WebcastRoomUserSeqMessage.create = function create(properties) {
            return new WebcastRoomUserSeqMessage(properties);
        };

        /**
         * Encodes the specified WebcastRoomUserSeqMessage message. Does not implicitly {@link TikTok.WebcastRoomUserSeqMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {TikTok.IWebcastRoomUserSeqMessage} message WebcastRoomUserSeqMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastRoomUserSeqMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.topViewers != null && message.topViewers.length)
                for (var i = 0; i < message.topViewers.length; ++i)
                    $root.TikTok.TopUser.encode(message.topViewers[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.viewerCount != null && Object.hasOwnProperty.call(message, "viewerCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.viewerCount);
            return writer;
        };

        /**
         * Encodes the specified WebcastRoomUserSeqMessage message, length delimited. Does not implicitly {@link TikTok.WebcastRoomUserSeqMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {TikTok.IWebcastRoomUserSeqMessage} message WebcastRoomUserSeqMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastRoomUserSeqMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastRoomUserSeqMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastRoomUserSeqMessage} WebcastRoomUserSeqMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastRoomUserSeqMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastRoomUserSeqMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (!(message.topViewers && message.topViewers.length))
                            message.topViewers = [];
                        message.topViewers.push($root.TikTok.TopUser.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.viewerCount = reader.int32();
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
         * Decodes a WebcastRoomUserSeqMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastRoomUserSeqMessage} WebcastRoomUserSeqMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastRoomUserSeqMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastRoomUserSeqMessage message.
         * @function verify
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastRoomUserSeqMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.topViewers != null && message.hasOwnProperty("topViewers")) {
                if (!Array.isArray(message.topViewers))
                    return "topViewers: array expected";
                for (var i = 0; i < message.topViewers.length; ++i) {
                    var error = $root.TikTok.TopUser.verify(message.topViewers[i]);
                    if (error)
                        return "topViewers." + error;
                }
            }
            if (message.viewerCount != null && message.hasOwnProperty("viewerCount"))
                if (!$util.isInteger(message.viewerCount))
                    return "viewerCount: integer expected";
            return null;
        };

        /**
         * Creates a WebcastRoomUserSeqMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastRoomUserSeqMessage} WebcastRoomUserSeqMessage
         */
        WebcastRoomUserSeqMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastRoomUserSeqMessage)
                return object;
            var message = new $root.TikTok.WebcastRoomUserSeqMessage();
            if (object.topViewers) {
                if (!Array.isArray(object.topViewers))
                    throw TypeError(".TikTok.WebcastRoomUserSeqMessage.topViewers: array expected");
                message.topViewers = [];
                for (var i = 0; i < object.topViewers.length; ++i) {
                    if (typeof object.topViewers[i] !== "object")
                        throw TypeError(".TikTok.WebcastRoomUserSeqMessage.topViewers: object expected");
                    message.topViewers[i] = $root.TikTok.TopUser.fromObject(object.topViewers[i]);
                }
            }
            if (object.viewerCount != null)
                message.viewerCount = object.viewerCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastRoomUserSeqMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {TikTok.WebcastRoomUserSeqMessage} message WebcastRoomUserSeqMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastRoomUserSeqMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.topViewers = [];
            if (options.defaults)
                object.viewerCount = 0;
            if (message.topViewers && message.topViewers.length) {
                object.topViewers = [];
                for (var j = 0; j < message.topViewers.length; ++j)
                    object.topViewers[j] = $root.TikTok.TopUser.toObject(message.topViewers[j], options);
            }
            if (message.viewerCount != null && message.hasOwnProperty("viewerCount"))
                object.viewerCount = message.viewerCount;
            return object;
        };

        /**
         * Converts this WebcastRoomUserSeqMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastRoomUserSeqMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastRoomUserSeqMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastRoomUserSeqMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastRoomUserSeqMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastRoomUserSeqMessage";
        };

        return WebcastRoomUserSeqMessage;
    })();

    TikTok.TopUser = (function() {

        /**
         * Properties of a TopUser.
         * @memberof TikTok
         * @interface ITopUser
         * @property {number|Long|null} [coinCount] TopUser coinCount
         * @property {TikTok.IUser|null} [user] TopUser user
         */

        /**
         * Constructs a new TopUser.
         * @memberof TikTok
         * @classdesc Represents a TopUser.
         * @implements ITopUser
         * @constructor
         * @param {TikTok.ITopUser=} [properties] Properties to set
         */
        function TopUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TopUser coinCount.
         * @member {number|Long} coinCount
         * @memberof TikTok.TopUser
         * @instance
         */
        TopUser.prototype.coinCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TopUser user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.TopUser
         * @instance
         */
        TopUser.prototype.user = null;

        /**
         * Creates a new TopUser instance using the specified properties.
         * @function create
         * @memberof TikTok.TopUser
         * @static
         * @param {TikTok.ITopUser=} [properties] Properties to set
         * @returns {TikTok.TopUser} TopUser instance
         */
        TopUser.create = function create(properties) {
            return new TopUser(properties);
        };

        /**
         * Encodes the specified TopUser message. Does not implicitly {@link TikTok.TopUser.verify|verify} messages.
         * @function encode
         * @memberof TikTok.TopUser
         * @static
         * @param {TikTok.ITopUser} message TopUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coinCount != null && Object.hasOwnProperty.call(message, "coinCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.coinCount);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TopUser message, length delimited. Does not implicitly {@link TikTok.TopUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.TopUser
         * @static
         * @param {TikTok.ITopUser} message TopUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TopUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TopUser message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.TopUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.TopUser} TopUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.TopUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.coinCount = reader.uint64();
                        break;
                    }
                case 2: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
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
         * Decodes a TopUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.TopUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.TopUser} TopUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TopUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TopUser message.
         * @function verify
         * @memberof TikTok.TopUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TopUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coinCount != null && message.hasOwnProperty("coinCount"))
                if (!$util.isInteger(message.coinCount) && !(message.coinCount && $util.isInteger(message.coinCount.low) && $util.isInteger(message.coinCount.high)))
                    return "coinCount: integer|Long expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a TopUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.TopUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.TopUser} TopUser
         */
        TopUser.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.TopUser)
                return object;
            var message = new $root.TikTok.TopUser();
            if (object.coinCount != null)
                if ($util.Long)
                    (message.coinCount = $util.Long.fromValue(object.coinCount)).unsigned = true;
                else if (typeof object.coinCount === "string")
                    message.coinCount = parseInt(object.coinCount, 10);
                else if (typeof object.coinCount === "number")
                    message.coinCount = object.coinCount;
                else if (typeof object.coinCount === "object")
                    message.coinCount = new $util.LongBits(object.coinCount.low >>> 0, object.coinCount.high >>> 0).toNumber(true);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.TopUser.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a TopUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.TopUser
         * @static
         * @param {TikTok.TopUser} message TopUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TopUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.coinCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.coinCount = options.longs === String ? "0" : 0;
                object.user = null;
            }
            if (message.coinCount != null && message.hasOwnProperty("coinCount"))
                if (typeof message.coinCount === "number")
                    object.coinCount = options.longs === String ? String(message.coinCount) : message.coinCount;
                else
                    object.coinCount = options.longs === String ? $util.Long.prototype.toString.call(message.coinCount) : options.longs === Number ? new $util.LongBits(message.coinCount.low >>> 0, message.coinCount.high >>> 0).toNumber(true) : message.coinCount;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this TopUser to JSON.
         * @function toJSON
         * @memberof TikTok.TopUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TopUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TopUser
         * @function getTypeUrl
         * @memberof TikTok.TopUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TopUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.TopUser";
        };

        return TopUser;
    })();

    TikTok.WebcastChatMessage = (function() {

        /**
         * Properties of a WebcastChatMessage.
         * @memberof TikTok
         * @interface IWebcastChatMessage
         * @property {TikTok.IWebcastMessageEvent|null} [event] WebcastChatMessage event
         * @property {TikTok.IUser|null} [user] WebcastChatMessage user
         * @property {string|null} [comment] WebcastChatMessage comment
         * @property {Array.<TikTok.IWebcastSubEmote>|null} [emotes] WebcastChatMessage emotes
         */

        /**
         * Constructs a new WebcastChatMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastChatMessage.
         * @implements IWebcastChatMessage
         * @constructor
         * @param {TikTok.IWebcastChatMessage=} [properties] Properties to set
         */
        function WebcastChatMessage(properties) {
            this.emotes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastChatMessage event.
         * @member {TikTok.IWebcastMessageEvent|null|undefined} event
         * @memberof TikTok.WebcastChatMessage
         * @instance
         */
        WebcastChatMessage.prototype.event = null;

        /**
         * WebcastChatMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastChatMessage
         * @instance
         */
        WebcastChatMessage.prototype.user = null;

        /**
         * WebcastChatMessage comment.
         * @member {string} comment
         * @memberof TikTok.WebcastChatMessage
         * @instance
         */
        WebcastChatMessage.prototype.comment = "";

        /**
         * WebcastChatMessage emotes.
         * @member {Array.<TikTok.IWebcastSubEmote>} emotes
         * @memberof TikTok.WebcastChatMessage
         * @instance
         */
        WebcastChatMessage.prototype.emotes = $util.emptyArray;

        /**
         * Creates a new WebcastChatMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {TikTok.IWebcastChatMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastChatMessage} WebcastChatMessage instance
         */
        WebcastChatMessage.create = function create(properties) {
            return new WebcastChatMessage(properties);
        };

        /**
         * Encodes the specified WebcastChatMessage message. Does not implicitly {@link TikTok.WebcastChatMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {TikTok.IWebcastChatMessage} message WebcastChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.TikTok.WebcastMessageEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.comment);
            if (message.emotes != null && message.emotes.length)
                for (var i = 0; i < message.emotes.length; ++i)
                    $root.TikTok.WebcastSubEmote.encode(message.emotes[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastChatMessage message, length delimited. Does not implicitly {@link TikTok.WebcastChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {TikTok.IWebcastChatMessage} message WebcastChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastChatMessage} WebcastChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.event = $root.TikTok.WebcastMessageEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.comment = reader.string();
                        break;
                    }
                case 13: {
                        if (!(message.emotes && message.emotes.length))
                            message.emotes = [];
                        message.emotes.push($root.TikTok.WebcastSubEmote.decode(reader, reader.uint32()));
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
         * Decodes a WebcastChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastChatMessage} WebcastChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastChatMessage message.
         * @function verify
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                var error = $root.TikTok.WebcastMessageEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.emotes != null && message.hasOwnProperty("emotes")) {
                if (!Array.isArray(message.emotes))
                    return "emotes: array expected";
                for (var i = 0; i < message.emotes.length; ++i) {
                    var error = $root.TikTok.WebcastSubEmote.verify(message.emotes[i]);
                    if (error)
                        return "emotes." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WebcastChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastChatMessage} WebcastChatMessage
         */
        WebcastChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastChatMessage)
                return object;
            var message = new $root.TikTok.WebcastChatMessage();
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".TikTok.WebcastChatMessage.event: object expected");
                message.event = $root.TikTok.WebcastMessageEvent.fromObject(object.event);
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastChatMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.emotes) {
                if (!Array.isArray(object.emotes))
                    throw TypeError(".TikTok.WebcastChatMessage.emotes: array expected");
                message.emotes = [];
                for (var i = 0; i < object.emotes.length; ++i) {
                    if (typeof object.emotes[i] !== "object")
                        throw TypeError(".TikTok.WebcastChatMessage.emotes: object expected");
                    message.emotes[i] = $root.TikTok.WebcastSubEmote.fromObject(object.emotes[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {TikTok.WebcastChatMessage} message WebcastChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.emotes = [];
            if (options.defaults) {
                object.event = null;
                object.user = null;
                object.comment = "";
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.TikTok.WebcastMessageEvent.toObject(message.event, options);
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.emotes && message.emotes.length) {
                object.emotes = [];
                for (var j = 0; j < message.emotes.length; ++j)
                    object.emotes[j] = $root.TikTok.WebcastSubEmote.toObject(message.emotes[j], options);
            }
            return object;
        };

        /**
         * Converts this WebcastChatMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastChatMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastChatMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastChatMessage";
        };

        return WebcastChatMessage;
    })();

    TikTok.WebcastEmoteChatMessage = (function() {

        /**
         * Properties of a WebcastEmoteChatMessage.
         * @memberof TikTok
         * @interface IWebcastEmoteChatMessage
         * @property {TikTok.IUser|null} [user] WebcastEmoteChatMessage user
         * @property {TikTok.IEmoteDetails|null} [emote] WebcastEmoteChatMessage emote
         */

        /**
         * Constructs a new WebcastEmoteChatMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastEmoteChatMessage.
         * @implements IWebcastEmoteChatMessage
         * @constructor
         * @param {TikTok.IWebcastEmoteChatMessage=} [properties] Properties to set
         */
        function WebcastEmoteChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastEmoteChatMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastEmoteChatMessage
         * @instance
         */
        WebcastEmoteChatMessage.prototype.user = null;

        /**
         * WebcastEmoteChatMessage emote.
         * @member {TikTok.IEmoteDetails|null|undefined} emote
         * @memberof TikTok.WebcastEmoteChatMessage
         * @instance
         */
        WebcastEmoteChatMessage.prototype.emote = null;

        /**
         * Creates a new WebcastEmoteChatMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {TikTok.IWebcastEmoteChatMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastEmoteChatMessage} WebcastEmoteChatMessage instance
         */
        WebcastEmoteChatMessage.create = function create(properties) {
            return new WebcastEmoteChatMessage(properties);
        };

        /**
         * Encodes the specified WebcastEmoteChatMessage message. Does not implicitly {@link TikTok.WebcastEmoteChatMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {TikTok.IWebcastEmoteChatMessage} message WebcastEmoteChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastEmoteChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.emote != null && Object.hasOwnProperty.call(message, "emote"))
                $root.TikTok.EmoteDetails.encode(message.emote, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastEmoteChatMessage message, length delimited. Does not implicitly {@link TikTok.WebcastEmoteChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {TikTok.IWebcastEmoteChatMessage} message WebcastEmoteChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastEmoteChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastEmoteChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastEmoteChatMessage} WebcastEmoteChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastEmoteChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastEmoteChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.emote = $root.TikTok.EmoteDetails.decode(reader, reader.uint32());
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
         * Decodes a WebcastEmoteChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastEmoteChatMessage} WebcastEmoteChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastEmoteChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastEmoteChatMessage message.
         * @function verify
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastEmoteChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.emote != null && message.hasOwnProperty("emote")) {
                var error = $root.TikTok.EmoteDetails.verify(message.emote);
                if (error)
                    return "emote." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastEmoteChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastEmoteChatMessage} WebcastEmoteChatMessage
         */
        WebcastEmoteChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastEmoteChatMessage)
                return object;
            var message = new $root.TikTok.WebcastEmoteChatMessage();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastEmoteChatMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            if (object.emote != null) {
                if (typeof object.emote !== "object")
                    throw TypeError(".TikTok.WebcastEmoteChatMessage.emote: object expected");
                message.emote = $root.TikTok.EmoteDetails.fromObject(object.emote);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastEmoteChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {TikTok.WebcastEmoteChatMessage} message WebcastEmoteChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastEmoteChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = null;
                object.emote = null;
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            if (message.emote != null && message.hasOwnProperty("emote"))
                object.emote = $root.TikTok.EmoteDetails.toObject(message.emote, options);
            return object;
        };

        /**
         * Converts this WebcastEmoteChatMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastEmoteChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastEmoteChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastEmoteChatMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastEmoteChatMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastEmoteChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastEmoteChatMessage";
        };

        return WebcastEmoteChatMessage;
    })();

    TikTok.WebcastSubEmote = (function() {

        /**
         * Properties of a WebcastSubEmote.
         * @memberof TikTok
         * @interface IWebcastSubEmote
         * @property {number|null} [placeInComment] WebcastSubEmote placeInComment
         * @property {TikTok.IEmoteDetails|null} [emote] WebcastSubEmote emote
         */

        /**
         * Constructs a new WebcastSubEmote.
         * @memberof TikTok
         * @classdesc Represents a WebcastSubEmote.
         * @implements IWebcastSubEmote
         * @constructor
         * @param {TikTok.IWebcastSubEmote=} [properties] Properties to set
         */
        function WebcastSubEmote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastSubEmote placeInComment.
         * @member {number} placeInComment
         * @memberof TikTok.WebcastSubEmote
         * @instance
         */
        WebcastSubEmote.prototype.placeInComment = 0;

        /**
         * WebcastSubEmote emote.
         * @member {TikTok.IEmoteDetails|null|undefined} emote
         * @memberof TikTok.WebcastSubEmote
         * @instance
         */
        WebcastSubEmote.prototype.emote = null;

        /**
         * Creates a new WebcastSubEmote instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {TikTok.IWebcastSubEmote=} [properties] Properties to set
         * @returns {TikTok.WebcastSubEmote} WebcastSubEmote instance
         */
        WebcastSubEmote.create = function create(properties) {
            return new WebcastSubEmote(properties);
        };

        /**
         * Encodes the specified WebcastSubEmote message. Does not implicitly {@link TikTok.WebcastSubEmote.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {TikTok.IWebcastSubEmote} message WebcastSubEmote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastSubEmote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.placeInComment != null && Object.hasOwnProperty.call(message, "placeInComment"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.placeInComment);
            if (message.emote != null && Object.hasOwnProperty.call(message, "emote"))
                $root.TikTok.EmoteDetails.encode(message.emote, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastSubEmote message, length delimited. Does not implicitly {@link TikTok.WebcastSubEmote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {TikTok.IWebcastSubEmote} message WebcastSubEmote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastSubEmote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastSubEmote message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastSubEmote} WebcastSubEmote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastSubEmote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastSubEmote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.placeInComment = reader.int32();
                        break;
                    }
                case 2: {
                        message.emote = $root.TikTok.EmoteDetails.decode(reader, reader.uint32());
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
         * Decodes a WebcastSubEmote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastSubEmote} WebcastSubEmote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastSubEmote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastSubEmote message.
         * @function verify
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastSubEmote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.placeInComment != null && message.hasOwnProperty("placeInComment"))
                if (!$util.isInteger(message.placeInComment))
                    return "placeInComment: integer expected";
            if (message.emote != null && message.hasOwnProperty("emote")) {
                var error = $root.TikTok.EmoteDetails.verify(message.emote);
                if (error)
                    return "emote." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastSubEmote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastSubEmote} WebcastSubEmote
         */
        WebcastSubEmote.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastSubEmote)
                return object;
            var message = new $root.TikTok.WebcastSubEmote();
            if (object.placeInComment != null)
                message.placeInComment = object.placeInComment | 0;
            if (object.emote != null) {
                if (typeof object.emote !== "object")
                    throw TypeError(".TikTok.WebcastSubEmote.emote: object expected");
                message.emote = $root.TikTok.EmoteDetails.fromObject(object.emote);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastSubEmote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {TikTok.WebcastSubEmote} message WebcastSubEmote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastSubEmote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.placeInComment = 0;
                object.emote = null;
            }
            if (message.placeInComment != null && message.hasOwnProperty("placeInComment"))
                object.placeInComment = message.placeInComment;
            if (message.emote != null && message.hasOwnProperty("emote"))
                object.emote = $root.TikTok.EmoteDetails.toObject(message.emote, options);
            return object;
        };

        /**
         * Converts this WebcastSubEmote to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastSubEmote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastSubEmote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastSubEmote
         * @function getTypeUrl
         * @memberof TikTok.WebcastSubEmote
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastSubEmote.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastSubEmote";
        };

        return WebcastSubEmote;
    })();

    TikTok.WebcastMemberMessage = (function() {

        /**
         * Properties of a WebcastMemberMessage.
         * @memberof TikTok
         * @interface IWebcastMemberMessage
         * @property {TikTok.IWebcastMessageEvent|null} [event] WebcastMemberMessage event
         * @property {TikTok.IUser|null} [user] WebcastMemberMessage user
         * @property {number|null} [actionId] WebcastMemberMessage actionId
         */

        /**
         * Constructs a new WebcastMemberMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastMemberMessage.
         * @implements IWebcastMemberMessage
         * @constructor
         * @param {TikTok.IWebcastMemberMessage=} [properties] Properties to set
         */
        function WebcastMemberMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastMemberMessage event.
         * @member {TikTok.IWebcastMessageEvent|null|undefined} event
         * @memberof TikTok.WebcastMemberMessage
         * @instance
         */
        WebcastMemberMessage.prototype.event = null;

        /**
         * WebcastMemberMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastMemberMessage
         * @instance
         */
        WebcastMemberMessage.prototype.user = null;

        /**
         * WebcastMemberMessage actionId.
         * @member {number} actionId
         * @memberof TikTok.WebcastMemberMessage
         * @instance
         */
        WebcastMemberMessage.prototype.actionId = 0;

        /**
         * Creates a new WebcastMemberMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {TikTok.IWebcastMemberMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastMemberMessage} WebcastMemberMessage instance
         */
        WebcastMemberMessage.create = function create(properties) {
            return new WebcastMemberMessage(properties);
        };

        /**
         * Encodes the specified WebcastMemberMessage message. Does not implicitly {@link TikTok.WebcastMemberMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {TikTok.IWebcastMemberMessage} message WebcastMemberMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastMemberMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.TikTok.WebcastMessageEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.actionId != null && Object.hasOwnProperty.call(message, "actionId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.actionId);
            return writer;
        };

        /**
         * Encodes the specified WebcastMemberMessage message, length delimited. Does not implicitly {@link TikTok.WebcastMemberMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {TikTok.IWebcastMemberMessage} message WebcastMemberMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastMemberMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastMemberMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastMemberMessage} WebcastMemberMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastMemberMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastMemberMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.event = $root.TikTok.WebcastMessageEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.actionId = reader.int32();
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
         * Decodes a WebcastMemberMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastMemberMessage} WebcastMemberMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastMemberMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastMemberMessage message.
         * @function verify
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastMemberMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                var error = $root.TikTok.WebcastMessageEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                if (!$util.isInteger(message.actionId))
                    return "actionId: integer expected";
            return null;
        };

        /**
         * Creates a WebcastMemberMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastMemberMessage} WebcastMemberMessage
         */
        WebcastMemberMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastMemberMessage)
                return object;
            var message = new $root.TikTok.WebcastMemberMessage();
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".TikTok.WebcastMemberMessage.event: object expected");
                message.event = $root.TikTok.WebcastMessageEvent.fromObject(object.event);
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastMemberMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            if (object.actionId != null)
                message.actionId = object.actionId | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastMemberMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {TikTok.WebcastMemberMessage} message WebcastMemberMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastMemberMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = null;
                object.user = null;
                object.actionId = 0;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.TikTok.WebcastMessageEvent.toObject(message.event, options);
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            if (message.actionId != null && message.hasOwnProperty("actionId"))
                object.actionId = message.actionId;
            return object;
        };

        /**
         * Converts this WebcastMemberMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastMemberMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastMemberMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastMemberMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastMemberMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastMemberMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastMemberMessage";
        };

        return WebcastMemberMessage;
    })();

    TikTok.WebcastGiftMessage = (function() {

        /**
         * Properties of a WebcastGiftMessage.
         * @memberof TikTok
         * @interface IWebcastGiftMessage
         * @property {TikTok.IWebcastMessageEvent|null} [event] WebcastGiftMessage event
         * @property {number|null} [giftId] WebcastGiftMessage giftId
         * @property {number|null} [repeatCount] WebcastGiftMessage repeatCount
         * @property {TikTok.IUser|null} [user] WebcastGiftMessage user
         * @property {number|null} [repeatEnd] WebcastGiftMessage repeatEnd
         * @property {number|Long|null} [groupId] WebcastGiftMessage groupId
         * @property {TikTok.IWebcastGiftMessageGiftDetails|null} [giftDetails] WebcastGiftMessage giftDetails
         * @property {string|null} [monitorExtra] WebcastGiftMessage monitorExtra
         * @property {TikTok.IWebcastGiftMessageGiftExtra|null} [giftExtra] WebcastGiftMessage giftExtra
         */

        /**
         * Constructs a new WebcastGiftMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastGiftMessage.
         * @implements IWebcastGiftMessage
         * @constructor
         * @param {TikTok.IWebcastGiftMessage=} [properties] Properties to set
         */
        function WebcastGiftMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastGiftMessage event.
         * @member {TikTok.IWebcastMessageEvent|null|undefined} event
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.event = null;

        /**
         * WebcastGiftMessage giftId.
         * @member {number} giftId
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.giftId = 0;

        /**
         * WebcastGiftMessage repeatCount.
         * @member {number} repeatCount
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.repeatCount = 0;

        /**
         * WebcastGiftMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.user = null;

        /**
         * WebcastGiftMessage repeatEnd.
         * @member {number} repeatEnd
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.repeatEnd = 0;

        /**
         * WebcastGiftMessage groupId.
         * @member {number|Long} groupId
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.groupId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastGiftMessage giftDetails.
         * @member {TikTok.IWebcastGiftMessageGiftDetails|null|undefined} giftDetails
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.giftDetails = null;

        /**
         * WebcastGiftMessage monitorExtra.
         * @member {string} monitorExtra
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.monitorExtra = "";

        /**
         * WebcastGiftMessage giftExtra.
         * @member {TikTok.IWebcastGiftMessageGiftExtra|null|undefined} giftExtra
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         */
        WebcastGiftMessage.prototype.giftExtra = null;

        /**
         * Creates a new WebcastGiftMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {TikTok.IWebcastGiftMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastGiftMessage} WebcastGiftMessage instance
         */
        WebcastGiftMessage.create = function create(properties) {
            return new WebcastGiftMessage(properties);
        };

        /**
         * Encodes the specified WebcastGiftMessage message. Does not implicitly {@link TikTok.WebcastGiftMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {TikTok.IWebcastGiftMessage} message WebcastGiftMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.TikTok.WebcastMessageEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.giftId != null && Object.hasOwnProperty.call(message, "giftId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.giftId);
            if (message.repeatCount != null && Object.hasOwnProperty.call(message, "repeatCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.repeatCount);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.repeatEnd != null && Object.hasOwnProperty.call(message, "repeatEnd"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.repeatEnd);
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.groupId);
            if (message.giftDetails != null && Object.hasOwnProperty.call(message, "giftDetails"))
                $root.TikTok.WebcastGiftMessageGiftDetails.encode(message.giftDetails, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.monitorExtra != null && Object.hasOwnProperty.call(message, "monitorExtra"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.monitorExtra);
            if (message.giftExtra != null && Object.hasOwnProperty.call(message, "giftExtra"))
                $root.TikTok.WebcastGiftMessageGiftExtra.encode(message.giftExtra, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastGiftMessage message, length delimited. Does not implicitly {@link TikTok.WebcastGiftMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {TikTok.IWebcastGiftMessage} message WebcastGiftMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastGiftMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastGiftMessage} WebcastGiftMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastGiftMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.event = $root.TikTok.WebcastMessageEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.giftId = reader.int32();
                        break;
                    }
                case 5: {
                        message.repeatCount = reader.int32();
                        break;
                    }
                case 7: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.repeatEnd = reader.int32();
                        break;
                    }
                case 11: {
                        message.groupId = reader.uint64();
                        break;
                    }
                case 15: {
                        message.giftDetails = $root.TikTok.WebcastGiftMessageGiftDetails.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.monitorExtra = reader.string();
                        break;
                    }
                case 23: {
                        message.giftExtra = $root.TikTok.WebcastGiftMessageGiftExtra.decode(reader, reader.uint32());
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
         * Decodes a WebcastGiftMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastGiftMessage} WebcastGiftMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastGiftMessage message.
         * @function verify
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastGiftMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                var error = $root.TikTok.WebcastMessageEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.giftId != null && message.hasOwnProperty("giftId"))
                if (!$util.isInteger(message.giftId))
                    return "giftId: integer expected";
            if (message.repeatCount != null && message.hasOwnProperty("repeatCount"))
                if (!$util.isInteger(message.repeatCount))
                    return "repeatCount: integer expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.repeatEnd != null && message.hasOwnProperty("repeatEnd"))
                if (!$util.isInteger(message.repeatEnd))
                    return "repeatEnd: integer expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId) && !(message.groupId && $util.isInteger(message.groupId.low) && $util.isInteger(message.groupId.high)))
                    return "groupId: integer|Long expected";
            if (message.giftDetails != null && message.hasOwnProperty("giftDetails")) {
                var error = $root.TikTok.WebcastGiftMessageGiftDetails.verify(message.giftDetails);
                if (error)
                    return "giftDetails." + error;
            }
            if (message.monitorExtra != null && message.hasOwnProperty("monitorExtra"))
                if (!$util.isString(message.monitorExtra))
                    return "monitorExtra: string expected";
            if (message.giftExtra != null && message.hasOwnProperty("giftExtra")) {
                var error = $root.TikTok.WebcastGiftMessageGiftExtra.verify(message.giftExtra);
                if (error)
                    return "giftExtra." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastGiftMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastGiftMessage} WebcastGiftMessage
         */
        WebcastGiftMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastGiftMessage)
                return object;
            var message = new $root.TikTok.WebcastGiftMessage();
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".TikTok.WebcastGiftMessage.event: object expected");
                message.event = $root.TikTok.WebcastMessageEvent.fromObject(object.event);
            }
            if (object.giftId != null)
                message.giftId = object.giftId | 0;
            if (object.repeatCount != null)
                message.repeatCount = object.repeatCount | 0;
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastGiftMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            if (object.repeatEnd != null)
                message.repeatEnd = object.repeatEnd | 0;
            if (object.groupId != null)
                if ($util.Long)
                    (message.groupId = $util.Long.fromValue(object.groupId)).unsigned = true;
                else if (typeof object.groupId === "string")
                    message.groupId = parseInt(object.groupId, 10);
                else if (typeof object.groupId === "number")
                    message.groupId = object.groupId;
                else if (typeof object.groupId === "object")
                    message.groupId = new $util.LongBits(object.groupId.low >>> 0, object.groupId.high >>> 0).toNumber(true);
            if (object.giftDetails != null) {
                if (typeof object.giftDetails !== "object")
                    throw TypeError(".TikTok.WebcastGiftMessage.giftDetails: object expected");
                message.giftDetails = $root.TikTok.WebcastGiftMessageGiftDetails.fromObject(object.giftDetails);
            }
            if (object.monitorExtra != null)
                message.monitorExtra = String(object.monitorExtra);
            if (object.giftExtra != null) {
                if (typeof object.giftExtra !== "object")
                    throw TypeError(".TikTok.WebcastGiftMessage.giftExtra: object expected");
                message.giftExtra = $root.TikTok.WebcastGiftMessageGiftExtra.fromObject(object.giftExtra);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastGiftMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {TikTok.WebcastGiftMessage} message WebcastGiftMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastGiftMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = null;
                object.giftId = 0;
                object.repeatCount = 0;
                object.user = null;
                object.repeatEnd = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.groupId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.groupId = options.longs === String ? "0" : 0;
                object.giftDetails = null;
                object.monitorExtra = "";
                object.giftExtra = null;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.TikTok.WebcastMessageEvent.toObject(message.event, options);
            if (message.giftId != null && message.hasOwnProperty("giftId"))
                object.giftId = message.giftId;
            if (message.repeatCount != null && message.hasOwnProperty("repeatCount"))
                object.repeatCount = message.repeatCount;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            if (message.repeatEnd != null && message.hasOwnProperty("repeatEnd"))
                object.repeatEnd = message.repeatEnd;
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (typeof message.groupId === "number")
                    object.groupId = options.longs === String ? String(message.groupId) : message.groupId;
                else
                    object.groupId = options.longs === String ? $util.Long.prototype.toString.call(message.groupId) : options.longs === Number ? new $util.LongBits(message.groupId.low >>> 0, message.groupId.high >>> 0).toNumber(true) : message.groupId;
            if (message.giftDetails != null && message.hasOwnProperty("giftDetails"))
                object.giftDetails = $root.TikTok.WebcastGiftMessageGiftDetails.toObject(message.giftDetails, options);
            if (message.monitorExtra != null && message.hasOwnProperty("monitorExtra"))
                object.monitorExtra = message.monitorExtra;
            if (message.giftExtra != null && message.hasOwnProperty("giftExtra"))
                object.giftExtra = $root.TikTok.WebcastGiftMessageGiftExtra.toObject(message.giftExtra, options);
            return object;
        };

        /**
         * Converts this WebcastGiftMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastGiftMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastGiftMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastGiftMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastGiftMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastGiftMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastGiftMessage";
        };

        return WebcastGiftMessage;
    })();

    TikTok.WebcastGiftMessageGiftDetails = (function() {

        /**
         * Properties of a WebcastGiftMessageGiftDetails.
         * @memberof TikTok
         * @interface IWebcastGiftMessageGiftDetails
         * @property {TikTok.IWebcastGiftMessageGiftImage|null} [giftImage] WebcastGiftMessageGiftDetails giftImage
         * @property {string|null} [giftName] WebcastGiftMessageGiftDetails giftName
         * @property {string|null} [describe] WebcastGiftMessageGiftDetails describe
         * @property {number|null} [giftType] WebcastGiftMessageGiftDetails giftType
         * @property {number|null} [diamondCount] WebcastGiftMessageGiftDetails diamondCount
         */

        /**
         * Constructs a new WebcastGiftMessageGiftDetails.
         * @memberof TikTok
         * @classdesc Represents a WebcastGiftMessageGiftDetails.
         * @implements IWebcastGiftMessageGiftDetails
         * @constructor
         * @param {TikTok.IWebcastGiftMessageGiftDetails=} [properties] Properties to set
         */
        function WebcastGiftMessageGiftDetails(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastGiftMessageGiftDetails giftImage.
         * @member {TikTok.IWebcastGiftMessageGiftImage|null|undefined} giftImage
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @instance
         */
        WebcastGiftMessageGiftDetails.prototype.giftImage = null;

        /**
         * WebcastGiftMessageGiftDetails giftName.
         * @member {string} giftName
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @instance
         */
        WebcastGiftMessageGiftDetails.prototype.giftName = "";

        /**
         * WebcastGiftMessageGiftDetails describe.
         * @member {string} describe
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @instance
         */
        WebcastGiftMessageGiftDetails.prototype.describe = "";

        /**
         * WebcastGiftMessageGiftDetails giftType.
         * @member {number} giftType
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @instance
         */
        WebcastGiftMessageGiftDetails.prototype.giftType = 0;

        /**
         * WebcastGiftMessageGiftDetails diamondCount.
         * @member {number} diamondCount
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @instance
         */
        WebcastGiftMessageGiftDetails.prototype.diamondCount = 0;

        /**
         * Creates a new WebcastGiftMessageGiftDetails instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftDetails=} [properties] Properties to set
         * @returns {TikTok.WebcastGiftMessageGiftDetails} WebcastGiftMessageGiftDetails instance
         */
        WebcastGiftMessageGiftDetails.create = function create(properties) {
            return new WebcastGiftMessageGiftDetails(properties);
        };

        /**
         * Encodes the specified WebcastGiftMessageGiftDetails message. Does not implicitly {@link TikTok.WebcastGiftMessageGiftDetails.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftDetails} message WebcastGiftMessageGiftDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessageGiftDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.giftImage != null && Object.hasOwnProperty.call(message, "giftImage"))
                $root.TikTok.WebcastGiftMessageGiftImage.encode(message.giftImage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.describe != null && Object.hasOwnProperty.call(message, "describe"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.describe);
            if (message.giftType != null && Object.hasOwnProperty.call(message, "giftType"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.giftType);
            if (message.diamondCount != null && Object.hasOwnProperty.call(message, "diamondCount"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.diamondCount);
            if (message.giftName != null && Object.hasOwnProperty.call(message, "giftName"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.giftName);
            return writer;
        };

        /**
         * Encodes the specified WebcastGiftMessageGiftDetails message, length delimited. Does not implicitly {@link TikTok.WebcastGiftMessageGiftDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftDetails} message WebcastGiftMessageGiftDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessageGiftDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastGiftMessageGiftDetails message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastGiftMessageGiftDetails} WebcastGiftMessageGiftDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessageGiftDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastGiftMessageGiftDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.giftImage = $root.TikTok.WebcastGiftMessageGiftImage.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.giftName = reader.string();
                        break;
                    }
                case 2: {
                        message.describe = reader.string();
                        break;
                    }
                case 11: {
                        message.giftType = reader.int32();
                        break;
                    }
                case 12: {
                        message.diamondCount = reader.int32();
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
         * Decodes a WebcastGiftMessageGiftDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastGiftMessageGiftDetails} WebcastGiftMessageGiftDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessageGiftDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastGiftMessageGiftDetails message.
         * @function verify
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastGiftMessageGiftDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.giftImage != null && message.hasOwnProperty("giftImage")) {
                var error = $root.TikTok.WebcastGiftMessageGiftImage.verify(message.giftImage);
                if (error)
                    return "giftImage." + error;
            }
            if (message.giftName != null && message.hasOwnProperty("giftName"))
                if (!$util.isString(message.giftName))
                    return "giftName: string expected";
            if (message.describe != null && message.hasOwnProperty("describe"))
                if (!$util.isString(message.describe))
                    return "describe: string expected";
            if (message.giftType != null && message.hasOwnProperty("giftType"))
                if (!$util.isInteger(message.giftType))
                    return "giftType: integer expected";
            if (message.diamondCount != null && message.hasOwnProperty("diamondCount"))
                if (!$util.isInteger(message.diamondCount))
                    return "diamondCount: integer expected";
            return null;
        };

        /**
         * Creates a WebcastGiftMessageGiftDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastGiftMessageGiftDetails} WebcastGiftMessageGiftDetails
         */
        WebcastGiftMessageGiftDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastGiftMessageGiftDetails)
                return object;
            var message = new $root.TikTok.WebcastGiftMessageGiftDetails();
            if (object.giftImage != null) {
                if (typeof object.giftImage !== "object")
                    throw TypeError(".TikTok.WebcastGiftMessageGiftDetails.giftImage: object expected");
                message.giftImage = $root.TikTok.WebcastGiftMessageGiftImage.fromObject(object.giftImage);
            }
            if (object.giftName != null)
                message.giftName = String(object.giftName);
            if (object.describe != null)
                message.describe = String(object.describe);
            if (object.giftType != null)
                message.giftType = object.giftType | 0;
            if (object.diamondCount != null)
                message.diamondCount = object.diamondCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastGiftMessageGiftDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {TikTok.WebcastGiftMessageGiftDetails} message WebcastGiftMessageGiftDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastGiftMessageGiftDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.giftImage = null;
                object.describe = "";
                object.giftType = 0;
                object.diamondCount = 0;
                object.giftName = "";
            }
            if (message.giftImage != null && message.hasOwnProperty("giftImage"))
                object.giftImage = $root.TikTok.WebcastGiftMessageGiftImage.toObject(message.giftImage, options);
            if (message.describe != null && message.hasOwnProperty("describe"))
                object.describe = message.describe;
            if (message.giftType != null && message.hasOwnProperty("giftType"))
                object.giftType = message.giftType;
            if (message.diamondCount != null && message.hasOwnProperty("diamondCount"))
                object.diamondCount = message.diamondCount;
            if (message.giftName != null && message.hasOwnProperty("giftName"))
                object.giftName = message.giftName;
            return object;
        };

        /**
         * Converts this WebcastGiftMessageGiftDetails to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastGiftMessageGiftDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastGiftMessageGiftDetails
         * @function getTypeUrl
         * @memberof TikTok.WebcastGiftMessageGiftDetails
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastGiftMessageGiftDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastGiftMessageGiftDetails";
        };

        return WebcastGiftMessageGiftDetails;
    })();

    TikTok.WebcastGiftMessageGiftExtra = (function() {

        /**
         * Properties of a WebcastGiftMessageGiftExtra.
         * @memberof TikTok
         * @interface IWebcastGiftMessageGiftExtra
         * @property {number|Long|null} [timestamp] WebcastGiftMessageGiftExtra timestamp
         * @property {number|Long|null} [receiverUserId] WebcastGiftMessageGiftExtra receiverUserId
         */

        /**
         * Constructs a new WebcastGiftMessageGiftExtra.
         * @memberof TikTok
         * @classdesc Represents a WebcastGiftMessageGiftExtra.
         * @implements IWebcastGiftMessageGiftExtra
         * @constructor
         * @param {TikTok.IWebcastGiftMessageGiftExtra=} [properties] Properties to set
         */
        function WebcastGiftMessageGiftExtra(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastGiftMessageGiftExtra timestamp.
         * @member {number|Long} timestamp
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @instance
         */
        WebcastGiftMessageGiftExtra.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastGiftMessageGiftExtra receiverUserId.
         * @member {number|Long} receiverUserId
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @instance
         */
        WebcastGiftMessageGiftExtra.prototype.receiverUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new WebcastGiftMessageGiftExtra instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftExtra=} [properties] Properties to set
         * @returns {TikTok.WebcastGiftMessageGiftExtra} WebcastGiftMessageGiftExtra instance
         */
        WebcastGiftMessageGiftExtra.create = function create(properties) {
            return new WebcastGiftMessageGiftExtra(properties);
        };

        /**
         * Encodes the specified WebcastGiftMessageGiftExtra message. Does not implicitly {@link TikTok.WebcastGiftMessageGiftExtra.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftExtra} message WebcastGiftMessageGiftExtra message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessageGiftExtra.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.timestamp);
            if (message.receiverUserId != null && Object.hasOwnProperty.call(message, "receiverUserId"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.receiverUserId);
            return writer;
        };

        /**
         * Encodes the specified WebcastGiftMessageGiftExtra message, length delimited. Does not implicitly {@link TikTok.WebcastGiftMessageGiftExtra.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftExtra} message WebcastGiftMessageGiftExtra message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessageGiftExtra.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastGiftMessageGiftExtra message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastGiftMessageGiftExtra} WebcastGiftMessageGiftExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessageGiftExtra.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastGiftMessageGiftExtra();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 6: {
                        message.timestamp = reader.uint64();
                        break;
                    }
                case 8: {
                        message.receiverUserId = reader.uint64();
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
         * Decodes a WebcastGiftMessageGiftExtra message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastGiftMessageGiftExtra} WebcastGiftMessageGiftExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessageGiftExtra.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastGiftMessageGiftExtra message.
         * @function verify
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastGiftMessageGiftExtra.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.receiverUserId != null && message.hasOwnProperty("receiverUserId"))
                if (!$util.isInteger(message.receiverUserId) && !(message.receiverUserId && $util.isInteger(message.receiverUserId.low) && $util.isInteger(message.receiverUserId.high)))
                    return "receiverUserId: integer|Long expected";
            return null;
        };

        /**
         * Creates a WebcastGiftMessageGiftExtra message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastGiftMessageGiftExtra} WebcastGiftMessageGiftExtra
         */
        WebcastGiftMessageGiftExtra.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastGiftMessageGiftExtra)
                return object;
            var message = new $root.TikTok.WebcastGiftMessageGiftExtra();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.receiverUserId != null)
                if ($util.Long)
                    (message.receiverUserId = $util.Long.fromValue(object.receiverUserId)).unsigned = true;
                else if (typeof object.receiverUserId === "string")
                    message.receiverUserId = parseInt(object.receiverUserId, 10);
                else if (typeof object.receiverUserId === "number")
                    message.receiverUserId = object.receiverUserId;
                else if (typeof object.receiverUserId === "object")
                    message.receiverUserId = new $util.LongBits(object.receiverUserId.low >>> 0, object.receiverUserId.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a WebcastGiftMessageGiftExtra message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {TikTok.WebcastGiftMessageGiftExtra} message WebcastGiftMessageGiftExtra
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastGiftMessageGiftExtra.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.receiverUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiverUserId = options.longs === String ? "0" : 0;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            if (message.receiverUserId != null && message.hasOwnProperty("receiverUserId"))
                if (typeof message.receiverUserId === "number")
                    object.receiverUserId = options.longs === String ? String(message.receiverUserId) : message.receiverUserId;
                else
                    object.receiverUserId = options.longs === String ? $util.Long.prototype.toString.call(message.receiverUserId) : options.longs === Number ? new $util.LongBits(message.receiverUserId.low >>> 0, message.receiverUserId.high >>> 0).toNumber(true) : message.receiverUserId;
            return object;
        };

        /**
         * Converts this WebcastGiftMessageGiftExtra to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastGiftMessageGiftExtra.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastGiftMessageGiftExtra
         * @function getTypeUrl
         * @memberof TikTok.WebcastGiftMessageGiftExtra
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastGiftMessageGiftExtra.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastGiftMessageGiftExtra";
        };

        return WebcastGiftMessageGiftExtra;
    })();

    TikTok.WebcastGiftMessageGiftImage = (function() {

        /**
         * Properties of a WebcastGiftMessageGiftImage.
         * @memberof TikTok
         * @interface IWebcastGiftMessageGiftImage
         * @property {string|null} [giftPictureUrl] WebcastGiftMessageGiftImage giftPictureUrl
         */

        /**
         * Constructs a new WebcastGiftMessageGiftImage.
         * @memberof TikTok
         * @classdesc Represents a WebcastGiftMessageGiftImage.
         * @implements IWebcastGiftMessageGiftImage
         * @constructor
         * @param {TikTok.IWebcastGiftMessageGiftImage=} [properties] Properties to set
         */
        function WebcastGiftMessageGiftImage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastGiftMessageGiftImage giftPictureUrl.
         * @member {string} giftPictureUrl
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @instance
         */
        WebcastGiftMessageGiftImage.prototype.giftPictureUrl = "";

        /**
         * Creates a new WebcastGiftMessageGiftImage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftImage=} [properties] Properties to set
         * @returns {TikTok.WebcastGiftMessageGiftImage} WebcastGiftMessageGiftImage instance
         */
        WebcastGiftMessageGiftImage.create = function create(properties) {
            return new WebcastGiftMessageGiftImage(properties);
        };

        /**
         * Encodes the specified WebcastGiftMessageGiftImage message. Does not implicitly {@link TikTok.WebcastGiftMessageGiftImage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftImage} message WebcastGiftMessageGiftImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessageGiftImage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.giftPictureUrl != null && Object.hasOwnProperty.call(message, "giftPictureUrl"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.giftPictureUrl);
            return writer;
        };

        /**
         * Encodes the specified WebcastGiftMessageGiftImage message, length delimited. Does not implicitly {@link TikTok.WebcastGiftMessageGiftImage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {TikTok.IWebcastGiftMessageGiftImage} message WebcastGiftMessageGiftImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastGiftMessageGiftImage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastGiftMessageGiftImage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastGiftMessageGiftImage} WebcastGiftMessageGiftImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessageGiftImage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastGiftMessageGiftImage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.giftPictureUrl = reader.string();
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
         * Decodes a WebcastGiftMessageGiftImage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastGiftMessageGiftImage} WebcastGiftMessageGiftImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastGiftMessageGiftImage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastGiftMessageGiftImage message.
         * @function verify
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastGiftMessageGiftImage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.giftPictureUrl != null && message.hasOwnProperty("giftPictureUrl"))
                if (!$util.isString(message.giftPictureUrl))
                    return "giftPictureUrl: string expected";
            return null;
        };

        /**
         * Creates a WebcastGiftMessageGiftImage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastGiftMessageGiftImage} WebcastGiftMessageGiftImage
         */
        WebcastGiftMessageGiftImage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastGiftMessageGiftImage)
                return object;
            var message = new $root.TikTok.WebcastGiftMessageGiftImage();
            if (object.giftPictureUrl != null)
                message.giftPictureUrl = String(object.giftPictureUrl);
            return message;
        };

        /**
         * Creates a plain object from a WebcastGiftMessageGiftImage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {TikTok.WebcastGiftMessageGiftImage} message WebcastGiftMessageGiftImage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastGiftMessageGiftImage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.giftPictureUrl = "";
            if (message.giftPictureUrl != null && message.hasOwnProperty("giftPictureUrl"))
                object.giftPictureUrl = message.giftPictureUrl;
            return object;
        };

        /**
         * Converts this WebcastGiftMessageGiftImage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastGiftMessageGiftImage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastGiftMessageGiftImage
         * @function getTypeUrl
         * @memberof TikTok.WebcastGiftMessageGiftImage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastGiftMessageGiftImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastGiftMessageGiftImage";
        };

        return WebcastGiftMessageGiftImage;
    })();

    TikTok.WebcastLinkMicBattle = (function() {

        /**
         * Properties of a WebcastLinkMicBattle.
         * @memberof TikTok
         * @interface IWebcastLinkMicBattle
         * @property {Array.<TikTok.IWebcastLinkMicBattleItems>|null} [battleUsers] WebcastLinkMicBattle battleUsers
         */

        /**
         * Constructs a new WebcastLinkMicBattle.
         * @memberof TikTok
         * @classdesc Represents a WebcastLinkMicBattle.
         * @implements IWebcastLinkMicBattle
         * @constructor
         * @param {TikTok.IWebcastLinkMicBattle=} [properties] Properties to set
         */
        function WebcastLinkMicBattle(properties) {
            this.battleUsers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLinkMicBattle battleUsers.
         * @member {Array.<TikTok.IWebcastLinkMicBattleItems>} battleUsers
         * @memberof TikTok.WebcastLinkMicBattle
         * @instance
         */
        WebcastLinkMicBattle.prototype.battleUsers = $util.emptyArray;

        /**
         * Creates a new WebcastLinkMicBattle instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {TikTok.IWebcastLinkMicBattle=} [properties] Properties to set
         * @returns {TikTok.WebcastLinkMicBattle} WebcastLinkMicBattle instance
         */
        WebcastLinkMicBattle.create = function create(properties) {
            return new WebcastLinkMicBattle(properties);
        };

        /**
         * Encodes the specified WebcastLinkMicBattle message. Does not implicitly {@link TikTok.WebcastLinkMicBattle.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {TikTok.IWebcastLinkMicBattle} message WebcastLinkMicBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicBattle.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleUsers != null && message.battleUsers.length)
                for (var i = 0; i < message.battleUsers.length; ++i)
                    $root.TikTok.WebcastLinkMicBattleItems.encode(message.battleUsers[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastLinkMicBattle message, length delimited. Does not implicitly {@link TikTok.WebcastLinkMicBattle.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {TikTok.IWebcastLinkMicBattle} message WebcastLinkMicBattle message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicBattle.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLinkMicBattle message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLinkMicBattle} WebcastLinkMicBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicBattle.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLinkMicBattle();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10: {
                        if (!(message.battleUsers && message.battleUsers.length))
                            message.battleUsers = [];
                        message.battleUsers.push($root.TikTok.WebcastLinkMicBattleItems.decode(reader, reader.uint32()));
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
         * Decodes a WebcastLinkMicBattle message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLinkMicBattle} WebcastLinkMicBattle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicBattle.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLinkMicBattle message.
         * @function verify
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLinkMicBattle.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleUsers != null && message.hasOwnProperty("battleUsers")) {
                if (!Array.isArray(message.battleUsers))
                    return "battleUsers: array expected";
                for (var i = 0; i < message.battleUsers.length; ++i) {
                    var error = $root.TikTok.WebcastLinkMicBattleItems.verify(message.battleUsers[i]);
                    if (error)
                        return "battleUsers." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WebcastLinkMicBattle message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLinkMicBattle} WebcastLinkMicBattle
         */
        WebcastLinkMicBattle.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLinkMicBattle)
                return object;
            var message = new $root.TikTok.WebcastLinkMicBattle();
            if (object.battleUsers) {
                if (!Array.isArray(object.battleUsers))
                    throw TypeError(".TikTok.WebcastLinkMicBattle.battleUsers: array expected");
                message.battleUsers = [];
                for (var i = 0; i < object.battleUsers.length; ++i) {
                    if (typeof object.battleUsers[i] !== "object")
                        throw TypeError(".TikTok.WebcastLinkMicBattle.battleUsers: object expected");
                    message.battleUsers[i] = $root.TikTok.WebcastLinkMicBattleItems.fromObject(object.battleUsers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastLinkMicBattle message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {TikTok.WebcastLinkMicBattle} message WebcastLinkMicBattle
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLinkMicBattle.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.battleUsers = [];
            if (message.battleUsers && message.battleUsers.length) {
                object.battleUsers = [];
                for (var j = 0; j < message.battleUsers.length; ++j)
                    object.battleUsers[j] = $root.TikTok.WebcastLinkMicBattleItems.toObject(message.battleUsers[j], options);
            }
            return object;
        };

        /**
         * Converts this WebcastLinkMicBattle to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLinkMicBattle
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLinkMicBattle.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLinkMicBattle
         * @function getTypeUrl
         * @memberof TikTok.WebcastLinkMicBattle
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLinkMicBattle.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLinkMicBattle";
        };

        return WebcastLinkMicBattle;
    })();

    TikTok.WebcastLinkMicBattleItems = (function() {

        /**
         * Properties of a WebcastLinkMicBattleItems.
         * @memberof TikTok
         * @interface IWebcastLinkMicBattleItems
         * @property {TikTok.IWebcastLinkMicBattleGroup|null} [battleGroup] WebcastLinkMicBattleItems battleGroup
         */

        /**
         * Constructs a new WebcastLinkMicBattleItems.
         * @memberof TikTok
         * @classdesc Represents a WebcastLinkMicBattleItems.
         * @implements IWebcastLinkMicBattleItems
         * @constructor
         * @param {TikTok.IWebcastLinkMicBattleItems=} [properties] Properties to set
         */
        function WebcastLinkMicBattleItems(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLinkMicBattleItems battleGroup.
         * @member {TikTok.IWebcastLinkMicBattleGroup|null|undefined} battleGroup
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @instance
         */
        WebcastLinkMicBattleItems.prototype.battleGroup = null;

        /**
         * Creates a new WebcastLinkMicBattleItems instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {TikTok.IWebcastLinkMicBattleItems=} [properties] Properties to set
         * @returns {TikTok.WebcastLinkMicBattleItems} WebcastLinkMicBattleItems instance
         */
        WebcastLinkMicBattleItems.create = function create(properties) {
            return new WebcastLinkMicBattleItems(properties);
        };

        /**
         * Encodes the specified WebcastLinkMicBattleItems message. Does not implicitly {@link TikTok.WebcastLinkMicBattleItems.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {TikTok.IWebcastLinkMicBattleItems} message WebcastLinkMicBattleItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicBattleItems.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleGroup != null && Object.hasOwnProperty.call(message, "battleGroup"))
                $root.TikTok.WebcastLinkMicBattleGroup.encode(message.battleGroup, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastLinkMicBattleItems message, length delimited. Does not implicitly {@link TikTok.WebcastLinkMicBattleItems.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {TikTok.IWebcastLinkMicBattleItems} message WebcastLinkMicBattleItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicBattleItems.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLinkMicBattleItems message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLinkMicBattleItems} WebcastLinkMicBattleItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicBattleItems.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLinkMicBattleItems();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.battleGroup = $root.TikTok.WebcastLinkMicBattleGroup.decode(reader, reader.uint32());
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
         * Decodes a WebcastLinkMicBattleItems message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLinkMicBattleItems} WebcastLinkMicBattleItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicBattleItems.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLinkMicBattleItems message.
         * @function verify
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLinkMicBattleItems.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleGroup != null && message.hasOwnProperty("battleGroup")) {
                var error = $root.TikTok.WebcastLinkMicBattleGroup.verify(message.battleGroup);
                if (error)
                    return "battleGroup." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastLinkMicBattleItems message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLinkMicBattleItems} WebcastLinkMicBattleItems
         */
        WebcastLinkMicBattleItems.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLinkMicBattleItems)
                return object;
            var message = new $root.TikTok.WebcastLinkMicBattleItems();
            if (object.battleGroup != null) {
                if (typeof object.battleGroup !== "object")
                    throw TypeError(".TikTok.WebcastLinkMicBattleItems.battleGroup: object expected");
                message.battleGroup = $root.TikTok.WebcastLinkMicBattleGroup.fromObject(object.battleGroup);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastLinkMicBattleItems message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {TikTok.WebcastLinkMicBattleItems} message WebcastLinkMicBattleItems
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLinkMicBattleItems.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.battleGroup = null;
            if (message.battleGroup != null && message.hasOwnProperty("battleGroup"))
                object.battleGroup = $root.TikTok.WebcastLinkMicBattleGroup.toObject(message.battleGroup, options);
            return object;
        };

        /**
         * Converts this WebcastLinkMicBattleItems to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLinkMicBattleItems.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLinkMicBattleItems
         * @function getTypeUrl
         * @memberof TikTok.WebcastLinkMicBattleItems
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLinkMicBattleItems.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLinkMicBattleItems";
        };

        return WebcastLinkMicBattleItems;
    })();

    TikTok.WebcastLinkMicBattleGroup = (function() {

        /**
         * Properties of a WebcastLinkMicBattleGroup.
         * @memberof TikTok
         * @interface IWebcastLinkMicBattleGroup
         * @property {TikTok.ILinkUser|null} [user] WebcastLinkMicBattleGroup user
         */

        /**
         * Constructs a new WebcastLinkMicBattleGroup.
         * @memberof TikTok
         * @classdesc Represents a WebcastLinkMicBattleGroup.
         * @implements IWebcastLinkMicBattleGroup
         * @constructor
         * @param {TikTok.IWebcastLinkMicBattleGroup=} [properties] Properties to set
         */
        function WebcastLinkMicBattleGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLinkMicBattleGroup user.
         * @member {TikTok.ILinkUser|null|undefined} user
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @instance
         */
        WebcastLinkMicBattleGroup.prototype.user = null;

        /**
         * Creates a new WebcastLinkMicBattleGroup instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {TikTok.IWebcastLinkMicBattleGroup=} [properties] Properties to set
         * @returns {TikTok.WebcastLinkMicBattleGroup} WebcastLinkMicBattleGroup instance
         */
        WebcastLinkMicBattleGroup.create = function create(properties) {
            return new WebcastLinkMicBattleGroup(properties);
        };

        /**
         * Encodes the specified WebcastLinkMicBattleGroup message. Does not implicitly {@link TikTok.WebcastLinkMicBattleGroup.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {TikTok.IWebcastLinkMicBattleGroup} message WebcastLinkMicBattleGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicBattleGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.LinkUser.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastLinkMicBattleGroup message, length delimited. Does not implicitly {@link TikTok.WebcastLinkMicBattleGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {TikTok.IWebcastLinkMicBattleGroup} message WebcastLinkMicBattleGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicBattleGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLinkMicBattleGroup message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLinkMicBattleGroup} WebcastLinkMicBattleGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicBattleGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLinkMicBattleGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.TikTok.LinkUser.decode(reader, reader.uint32());
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
         * Decodes a WebcastLinkMicBattleGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLinkMicBattleGroup} WebcastLinkMicBattleGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicBattleGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLinkMicBattleGroup message.
         * @function verify
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLinkMicBattleGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.LinkUser.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastLinkMicBattleGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLinkMicBattleGroup} WebcastLinkMicBattleGroup
         */
        WebcastLinkMicBattleGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLinkMicBattleGroup)
                return object;
            var message = new $root.TikTok.WebcastLinkMicBattleGroup();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastLinkMicBattleGroup.user: object expected");
                message.user = $root.TikTok.LinkUser.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastLinkMicBattleGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {TikTok.WebcastLinkMicBattleGroup} message WebcastLinkMicBattleGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLinkMicBattleGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.LinkUser.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this WebcastLinkMicBattleGroup to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLinkMicBattleGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLinkMicBattleGroup
         * @function getTypeUrl
         * @memberof TikTok.WebcastLinkMicBattleGroup
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLinkMicBattleGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLinkMicBattleGroup";
        };

        return WebcastLinkMicBattleGroup;
    })();

    TikTok.WebcastLinkMicArmies = (function() {

        /**
         * Properties of a WebcastLinkMicArmies.
         * @memberof TikTok
         * @interface IWebcastLinkMicArmies
         * @property {Array.<TikTok.IWebcastLinkMicArmiesItems>|null} [battleItems] WebcastLinkMicArmies battleItems
         * @property {number|null} [battleStatus] WebcastLinkMicArmies battleStatus
         */

        /**
         * Constructs a new WebcastLinkMicArmies.
         * @memberof TikTok
         * @classdesc Represents a WebcastLinkMicArmies.
         * @implements IWebcastLinkMicArmies
         * @constructor
         * @param {TikTok.IWebcastLinkMicArmies=} [properties] Properties to set
         */
        function WebcastLinkMicArmies(properties) {
            this.battleItems = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLinkMicArmies battleItems.
         * @member {Array.<TikTok.IWebcastLinkMicArmiesItems>} battleItems
         * @memberof TikTok.WebcastLinkMicArmies
         * @instance
         */
        WebcastLinkMicArmies.prototype.battleItems = $util.emptyArray;

        /**
         * WebcastLinkMicArmies battleStatus.
         * @member {number} battleStatus
         * @memberof TikTok.WebcastLinkMicArmies
         * @instance
         */
        WebcastLinkMicArmies.prototype.battleStatus = 0;

        /**
         * Creates a new WebcastLinkMicArmies instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {TikTok.IWebcastLinkMicArmies=} [properties] Properties to set
         * @returns {TikTok.WebcastLinkMicArmies} WebcastLinkMicArmies instance
         */
        WebcastLinkMicArmies.create = function create(properties) {
            return new WebcastLinkMicArmies(properties);
        };

        /**
         * Encodes the specified WebcastLinkMicArmies message. Does not implicitly {@link TikTok.WebcastLinkMicArmies.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {TikTok.IWebcastLinkMicArmies} message WebcastLinkMicArmies message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicArmies.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.battleItems != null && message.battleItems.length)
                for (var i = 0; i < message.battleItems.length; ++i)
                    $root.TikTok.WebcastLinkMicArmiesItems.encode(message.battleItems[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.battleStatus != null && Object.hasOwnProperty.call(message, "battleStatus"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.battleStatus);
            return writer;
        };

        /**
         * Encodes the specified WebcastLinkMicArmies message, length delimited. Does not implicitly {@link TikTok.WebcastLinkMicArmies.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {TikTok.IWebcastLinkMicArmies} message WebcastLinkMicArmies message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicArmies.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLinkMicArmies message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLinkMicArmies} WebcastLinkMicArmies
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicArmies.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLinkMicArmies();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        if (!(message.battleItems && message.battleItems.length))
                            message.battleItems = [];
                        message.battleItems.push($root.TikTok.WebcastLinkMicArmiesItems.decode(reader, reader.uint32()));
                        break;
                    }
                case 7: {
                        message.battleStatus = reader.int32();
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
         * Decodes a WebcastLinkMicArmies message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLinkMicArmies} WebcastLinkMicArmies
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicArmies.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLinkMicArmies message.
         * @function verify
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLinkMicArmies.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.battleItems != null && message.hasOwnProperty("battleItems")) {
                if (!Array.isArray(message.battleItems))
                    return "battleItems: array expected";
                for (var i = 0; i < message.battleItems.length; ++i) {
                    var error = $root.TikTok.WebcastLinkMicArmiesItems.verify(message.battleItems[i]);
                    if (error)
                        return "battleItems." + error;
                }
            }
            if (message.battleStatus != null && message.hasOwnProperty("battleStatus"))
                if (!$util.isInteger(message.battleStatus))
                    return "battleStatus: integer expected";
            return null;
        };

        /**
         * Creates a WebcastLinkMicArmies message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLinkMicArmies} WebcastLinkMicArmies
         */
        WebcastLinkMicArmies.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLinkMicArmies)
                return object;
            var message = new $root.TikTok.WebcastLinkMicArmies();
            if (object.battleItems) {
                if (!Array.isArray(object.battleItems))
                    throw TypeError(".TikTok.WebcastLinkMicArmies.battleItems: array expected");
                message.battleItems = [];
                for (var i = 0; i < object.battleItems.length; ++i) {
                    if (typeof object.battleItems[i] !== "object")
                        throw TypeError(".TikTok.WebcastLinkMicArmies.battleItems: object expected");
                    message.battleItems[i] = $root.TikTok.WebcastLinkMicArmiesItems.fromObject(object.battleItems[i]);
                }
            }
            if (object.battleStatus != null)
                message.battleStatus = object.battleStatus | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastLinkMicArmies message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {TikTok.WebcastLinkMicArmies} message WebcastLinkMicArmies
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLinkMicArmies.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.battleItems = [];
            if (options.defaults)
                object.battleStatus = 0;
            if (message.battleItems && message.battleItems.length) {
                object.battleItems = [];
                for (var j = 0; j < message.battleItems.length; ++j)
                    object.battleItems[j] = $root.TikTok.WebcastLinkMicArmiesItems.toObject(message.battleItems[j], options);
            }
            if (message.battleStatus != null && message.hasOwnProperty("battleStatus"))
                object.battleStatus = message.battleStatus;
            return object;
        };

        /**
         * Converts this WebcastLinkMicArmies to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLinkMicArmies
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLinkMicArmies.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLinkMicArmies
         * @function getTypeUrl
         * @memberof TikTok.WebcastLinkMicArmies
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLinkMicArmies.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLinkMicArmies";
        };

        return WebcastLinkMicArmies;
    })();

    TikTok.WebcastLinkMicArmiesItems = (function() {

        /**
         * Properties of a WebcastLinkMicArmiesItems.
         * @memberof TikTok
         * @interface IWebcastLinkMicArmiesItems
         * @property {number|Long|null} [hostUserId] WebcastLinkMicArmiesItems hostUserId
         * @property {Array.<TikTok.IWebcastLinkMicArmiesGroup>|null} [battleGroups] WebcastLinkMicArmiesItems battleGroups
         */

        /**
         * Constructs a new WebcastLinkMicArmiesItems.
         * @memberof TikTok
         * @classdesc Represents a WebcastLinkMicArmiesItems.
         * @implements IWebcastLinkMicArmiesItems
         * @constructor
         * @param {TikTok.IWebcastLinkMicArmiesItems=} [properties] Properties to set
         */
        function WebcastLinkMicArmiesItems(properties) {
            this.battleGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLinkMicArmiesItems hostUserId.
         * @member {number|Long} hostUserId
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @instance
         */
        WebcastLinkMicArmiesItems.prototype.hostUserId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastLinkMicArmiesItems battleGroups.
         * @member {Array.<TikTok.IWebcastLinkMicArmiesGroup>} battleGroups
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @instance
         */
        WebcastLinkMicArmiesItems.prototype.battleGroups = $util.emptyArray;

        /**
         * Creates a new WebcastLinkMicArmiesItems instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {TikTok.IWebcastLinkMicArmiesItems=} [properties] Properties to set
         * @returns {TikTok.WebcastLinkMicArmiesItems} WebcastLinkMicArmiesItems instance
         */
        WebcastLinkMicArmiesItems.create = function create(properties) {
            return new WebcastLinkMicArmiesItems(properties);
        };

        /**
         * Encodes the specified WebcastLinkMicArmiesItems message. Does not implicitly {@link TikTok.WebcastLinkMicArmiesItems.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {TikTok.IWebcastLinkMicArmiesItems} message WebcastLinkMicArmiesItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicArmiesItems.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hostUserId != null && Object.hasOwnProperty.call(message, "hostUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.hostUserId);
            if (message.battleGroups != null && message.battleGroups.length)
                for (var i = 0; i < message.battleGroups.length; ++i)
                    $root.TikTok.WebcastLinkMicArmiesGroup.encode(message.battleGroups[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastLinkMicArmiesItems message, length delimited. Does not implicitly {@link TikTok.WebcastLinkMicArmiesItems.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {TikTok.IWebcastLinkMicArmiesItems} message WebcastLinkMicArmiesItems message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicArmiesItems.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLinkMicArmiesItems message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLinkMicArmiesItems} WebcastLinkMicArmiesItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicArmiesItems.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLinkMicArmiesItems();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hostUserId = reader.uint64();
                        break;
                    }
                case 2: {
                        if (!(message.battleGroups && message.battleGroups.length))
                            message.battleGroups = [];
                        message.battleGroups.push($root.TikTok.WebcastLinkMicArmiesGroup.decode(reader, reader.uint32()));
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
         * Decodes a WebcastLinkMicArmiesItems message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLinkMicArmiesItems} WebcastLinkMicArmiesItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicArmiesItems.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLinkMicArmiesItems message.
         * @function verify
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLinkMicArmiesItems.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
                if (!$util.isInteger(message.hostUserId) && !(message.hostUserId && $util.isInteger(message.hostUserId.low) && $util.isInteger(message.hostUserId.high)))
                    return "hostUserId: integer|Long expected";
            if (message.battleGroups != null && message.hasOwnProperty("battleGroups")) {
                if (!Array.isArray(message.battleGroups))
                    return "battleGroups: array expected";
                for (var i = 0; i < message.battleGroups.length; ++i) {
                    var error = $root.TikTok.WebcastLinkMicArmiesGroup.verify(message.battleGroups[i]);
                    if (error)
                        return "battleGroups." + error;
                }
            }
            return null;
        };

        /**
         * Creates a WebcastLinkMicArmiesItems message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLinkMicArmiesItems} WebcastLinkMicArmiesItems
         */
        WebcastLinkMicArmiesItems.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLinkMicArmiesItems)
                return object;
            var message = new $root.TikTok.WebcastLinkMicArmiesItems();
            if (object.hostUserId != null)
                if ($util.Long)
                    (message.hostUserId = $util.Long.fromValue(object.hostUserId)).unsigned = true;
                else if (typeof object.hostUserId === "string")
                    message.hostUserId = parseInt(object.hostUserId, 10);
                else if (typeof object.hostUserId === "number")
                    message.hostUserId = object.hostUserId;
                else if (typeof object.hostUserId === "object")
                    message.hostUserId = new $util.LongBits(object.hostUserId.low >>> 0, object.hostUserId.high >>> 0).toNumber(true);
            if (object.battleGroups) {
                if (!Array.isArray(object.battleGroups))
                    throw TypeError(".TikTok.WebcastLinkMicArmiesItems.battleGroups: array expected");
                message.battleGroups = [];
                for (var i = 0; i < object.battleGroups.length; ++i) {
                    if (typeof object.battleGroups[i] !== "object")
                        throw TypeError(".TikTok.WebcastLinkMicArmiesItems.battleGroups: object expected");
                    message.battleGroups[i] = $root.TikTok.WebcastLinkMicArmiesGroup.fromObject(object.battleGroups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastLinkMicArmiesItems message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {TikTok.WebcastLinkMicArmiesItems} message WebcastLinkMicArmiesItems
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLinkMicArmiesItems.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.battleGroups = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.hostUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.hostUserId = options.longs === String ? "0" : 0;
            if (message.hostUserId != null && message.hasOwnProperty("hostUserId"))
                if (typeof message.hostUserId === "number")
                    object.hostUserId = options.longs === String ? String(message.hostUserId) : message.hostUserId;
                else
                    object.hostUserId = options.longs === String ? $util.Long.prototype.toString.call(message.hostUserId) : options.longs === Number ? new $util.LongBits(message.hostUserId.low >>> 0, message.hostUserId.high >>> 0).toNumber(true) : message.hostUserId;
            if (message.battleGroups && message.battleGroups.length) {
                object.battleGroups = [];
                for (var j = 0; j < message.battleGroups.length; ++j)
                    object.battleGroups[j] = $root.TikTok.WebcastLinkMicArmiesGroup.toObject(message.battleGroups[j], options);
            }
            return object;
        };

        /**
         * Converts this WebcastLinkMicArmiesItems to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLinkMicArmiesItems.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLinkMicArmiesItems
         * @function getTypeUrl
         * @memberof TikTok.WebcastLinkMicArmiesItems
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLinkMicArmiesItems.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLinkMicArmiesItems";
        };

        return WebcastLinkMicArmiesItems;
    })();

    TikTok.WebcastLinkMicArmiesGroup = (function() {

        /**
         * Properties of a WebcastLinkMicArmiesGroup.
         * @memberof TikTok
         * @interface IWebcastLinkMicArmiesGroup
         * @property {Array.<TikTok.IUser>|null} [users] WebcastLinkMicArmiesGroup users
         * @property {number|null} [points] WebcastLinkMicArmiesGroup points
         */

        /**
         * Constructs a new WebcastLinkMicArmiesGroup.
         * @memberof TikTok
         * @classdesc Represents a WebcastLinkMicArmiesGroup.
         * @implements IWebcastLinkMicArmiesGroup
         * @constructor
         * @param {TikTok.IWebcastLinkMicArmiesGroup=} [properties] Properties to set
         */
        function WebcastLinkMicArmiesGroup(properties) {
            this.users = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLinkMicArmiesGroup users.
         * @member {Array.<TikTok.IUser>} users
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @instance
         */
        WebcastLinkMicArmiesGroup.prototype.users = $util.emptyArray;

        /**
         * WebcastLinkMicArmiesGroup points.
         * @member {number} points
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @instance
         */
        WebcastLinkMicArmiesGroup.prototype.points = 0;

        /**
         * Creates a new WebcastLinkMicArmiesGroup instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {TikTok.IWebcastLinkMicArmiesGroup=} [properties] Properties to set
         * @returns {TikTok.WebcastLinkMicArmiesGroup} WebcastLinkMicArmiesGroup instance
         */
        WebcastLinkMicArmiesGroup.create = function create(properties) {
            return new WebcastLinkMicArmiesGroup(properties);
        };

        /**
         * Encodes the specified WebcastLinkMicArmiesGroup message. Does not implicitly {@link TikTok.WebcastLinkMicArmiesGroup.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {TikTok.IWebcastLinkMicArmiesGroup} message WebcastLinkMicArmiesGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicArmiesGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.users != null && message.users.length)
                for (var i = 0; i < message.users.length; ++i)
                    $root.TikTok.User.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.points != null && Object.hasOwnProperty.call(message, "points"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.points);
            return writer;
        };

        /**
         * Encodes the specified WebcastLinkMicArmiesGroup message, length delimited. Does not implicitly {@link TikTok.WebcastLinkMicArmiesGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {TikTok.IWebcastLinkMicArmiesGroup} message WebcastLinkMicArmiesGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLinkMicArmiesGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLinkMicArmiesGroup message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLinkMicArmiesGroup} WebcastLinkMicArmiesGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicArmiesGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLinkMicArmiesGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.users && message.users.length))
                            message.users = [];
                        message.users.push($root.TikTok.User.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.points = reader.int32();
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
         * Decodes a WebcastLinkMicArmiesGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLinkMicArmiesGroup} WebcastLinkMicArmiesGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLinkMicArmiesGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLinkMicArmiesGroup message.
         * @function verify
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLinkMicArmiesGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.users != null && message.hasOwnProperty("users")) {
                if (!Array.isArray(message.users))
                    return "users: array expected";
                for (var i = 0; i < message.users.length; ++i) {
                    var error = $root.TikTok.User.verify(message.users[i]);
                    if (error)
                        return "users." + error;
                }
            }
            if (message.points != null && message.hasOwnProperty("points"))
                if (!$util.isInteger(message.points))
                    return "points: integer expected";
            return null;
        };

        /**
         * Creates a WebcastLinkMicArmiesGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLinkMicArmiesGroup} WebcastLinkMicArmiesGroup
         */
        WebcastLinkMicArmiesGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLinkMicArmiesGroup)
                return object;
            var message = new $root.TikTok.WebcastLinkMicArmiesGroup();
            if (object.users) {
                if (!Array.isArray(object.users))
                    throw TypeError(".TikTok.WebcastLinkMicArmiesGroup.users: array expected");
                message.users = [];
                for (var i = 0; i < object.users.length; ++i) {
                    if (typeof object.users[i] !== "object")
                        throw TypeError(".TikTok.WebcastLinkMicArmiesGroup.users: object expected");
                    message.users[i] = $root.TikTok.User.fromObject(object.users[i]);
                }
            }
            if (object.points != null)
                message.points = object.points | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastLinkMicArmiesGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {TikTok.WebcastLinkMicArmiesGroup} message WebcastLinkMicArmiesGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLinkMicArmiesGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.users = [];
            if (options.defaults)
                object.points = 0;
            if (message.users && message.users.length) {
                object.users = [];
                for (var j = 0; j < message.users.length; ++j)
                    object.users[j] = $root.TikTok.User.toObject(message.users[j], options);
            }
            if (message.points != null && message.hasOwnProperty("points"))
                object.points = message.points;
            return object;
        };

        /**
         * Converts this WebcastLinkMicArmiesGroup to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLinkMicArmiesGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLinkMicArmiesGroup
         * @function getTypeUrl
         * @memberof TikTok.WebcastLinkMicArmiesGroup
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLinkMicArmiesGroup.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLinkMicArmiesGroup";
        };

        return WebcastLinkMicArmiesGroup;
    })();

    TikTok.WebcastSocialMessage = (function() {

        /**
         * Properties of a WebcastSocialMessage.
         * @memberof TikTok
         * @interface IWebcastSocialMessage
         * @property {TikTok.IWebcastMessageEvent|null} [event] WebcastSocialMessage event
         * @property {TikTok.IUser|null} [user] WebcastSocialMessage user
         */

        /**
         * Constructs a new WebcastSocialMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastSocialMessage.
         * @implements IWebcastSocialMessage
         * @constructor
         * @param {TikTok.IWebcastSocialMessage=} [properties] Properties to set
         */
        function WebcastSocialMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastSocialMessage event.
         * @member {TikTok.IWebcastMessageEvent|null|undefined} event
         * @memberof TikTok.WebcastSocialMessage
         * @instance
         */
        WebcastSocialMessage.prototype.event = null;

        /**
         * WebcastSocialMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastSocialMessage
         * @instance
         */
        WebcastSocialMessage.prototype.user = null;

        /**
         * Creates a new WebcastSocialMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {TikTok.IWebcastSocialMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastSocialMessage} WebcastSocialMessage instance
         */
        WebcastSocialMessage.create = function create(properties) {
            return new WebcastSocialMessage(properties);
        };

        /**
         * Encodes the specified WebcastSocialMessage message. Does not implicitly {@link TikTok.WebcastSocialMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {TikTok.IWebcastSocialMessage} message WebcastSocialMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastSocialMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.TikTok.WebcastMessageEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastSocialMessage message, length delimited. Does not implicitly {@link TikTok.WebcastSocialMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {TikTok.IWebcastSocialMessage} message WebcastSocialMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastSocialMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastSocialMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastSocialMessage} WebcastSocialMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastSocialMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastSocialMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.event = $root.TikTok.WebcastMessageEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
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
         * Decodes a WebcastSocialMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastSocialMessage} WebcastSocialMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastSocialMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastSocialMessage message.
         * @function verify
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastSocialMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                var error = $root.TikTok.WebcastMessageEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastSocialMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastSocialMessage} WebcastSocialMessage
         */
        WebcastSocialMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastSocialMessage)
                return object;
            var message = new $root.TikTok.WebcastSocialMessage();
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".TikTok.WebcastSocialMessage.event: object expected");
                message.event = $root.TikTok.WebcastMessageEvent.fromObject(object.event);
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastSocialMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastSocialMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {TikTok.WebcastSocialMessage} message WebcastSocialMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastSocialMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = null;
                object.user = null;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.TikTok.WebcastMessageEvent.toObject(message.event, options);
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this WebcastSocialMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastSocialMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastSocialMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastSocialMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastSocialMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastSocialMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastSocialMessage";
        };

        return WebcastSocialMessage;
    })();

    TikTok.WebcastLikeMessage = (function() {

        /**
         * Properties of a WebcastLikeMessage.
         * @memberof TikTok
         * @interface IWebcastLikeMessage
         * @property {TikTok.IWebcastMessageEvent|null} [event] WebcastLikeMessage event
         * @property {TikTok.IUser|null} [user] WebcastLikeMessage user
         * @property {number|null} [likeCount] WebcastLikeMessage likeCount
         * @property {number|null} [totalLikeCount] WebcastLikeMessage totalLikeCount
         */

        /**
         * Constructs a new WebcastLikeMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastLikeMessage.
         * @implements IWebcastLikeMessage
         * @constructor
         * @param {TikTok.IWebcastLikeMessage=} [properties] Properties to set
         */
        function WebcastLikeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLikeMessage event.
         * @member {TikTok.IWebcastMessageEvent|null|undefined} event
         * @memberof TikTok.WebcastLikeMessage
         * @instance
         */
        WebcastLikeMessage.prototype.event = null;

        /**
         * WebcastLikeMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastLikeMessage
         * @instance
         */
        WebcastLikeMessage.prototype.user = null;

        /**
         * WebcastLikeMessage likeCount.
         * @member {number} likeCount
         * @memberof TikTok.WebcastLikeMessage
         * @instance
         */
        WebcastLikeMessage.prototype.likeCount = 0;

        /**
         * WebcastLikeMessage totalLikeCount.
         * @member {number} totalLikeCount
         * @memberof TikTok.WebcastLikeMessage
         * @instance
         */
        WebcastLikeMessage.prototype.totalLikeCount = 0;

        /**
         * Creates a new WebcastLikeMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {TikTok.IWebcastLikeMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastLikeMessage} WebcastLikeMessage instance
         */
        WebcastLikeMessage.create = function create(properties) {
            return new WebcastLikeMessage(properties);
        };

        /**
         * Encodes the specified WebcastLikeMessage message. Does not implicitly {@link TikTok.WebcastLikeMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {TikTok.IWebcastLikeMessage} message WebcastLikeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLikeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.TikTok.WebcastMessageEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.likeCount != null && Object.hasOwnProperty.call(message, "likeCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.likeCount);
            if (message.totalLikeCount != null && Object.hasOwnProperty.call(message, "totalLikeCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.totalLikeCount);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastLikeMessage message, length delimited. Does not implicitly {@link TikTok.WebcastLikeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {TikTok.IWebcastLikeMessage} message WebcastLikeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLikeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLikeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLikeMessage} WebcastLikeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLikeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLikeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.event = $root.TikTok.WebcastMessageEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.likeCount = reader.int32();
                        break;
                    }
                case 3: {
                        message.totalLikeCount = reader.int32();
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
         * Decodes a WebcastLikeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLikeMessage} WebcastLikeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLikeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLikeMessage message.
         * @function verify
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLikeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                var error = $root.TikTok.WebcastMessageEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.likeCount != null && message.hasOwnProperty("likeCount"))
                if (!$util.isInteger(message.likeCount))
                    return "likeCount: integer expected";
            if (message.totalLikeCount != null && message.hasOwnProperty("totalLikeCount"))
                if (!$util.isInteger(message.totalLikeCount))
                    return "totalLikeCount: integer expected";
            return null;
        };

        /**
         * Creates a WebcastLikeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLikeMessage} WebcastLikeMessage
         */
        WebcastLikeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLikeMessage)
                return object;
            var message = new $root.TikTok.WebcastLikeMessage();
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".TikTok.WebcastLikeMessage.event: object expected");
                message.event = $root.TikTok.WebcastMessageEvent.fromObject(object.event);
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastLikeMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            if (object.likeCount != null)
                message.likeCount = object.likeCount | 0;
            if (object.totalLikeCount != null)
                message.totalLikeCount = object.totalLikeCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastLikeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {TikTok.WebcastLikeMessage} message WebcastLikeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLikeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = null;
                object.likeCount = 0;
                object.totalLikeCount = 0;
                object.user = null;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.TikTok.WebcastMessageEvent.toObject(message.event, options);
            if (message.likeCount != null && message.hasOwnProperty("likeCount"))
                object.likeCount = message.likeCount;
            if (message.totalLikeCount != null && message.hasOwnProperty("totalLikeCount"))
                object.totalLikeCount = message.totalLikeCount;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this WebcastLikeMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLikeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLikeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLikeMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastLikeMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLikeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLikeMessage";
        };

        return WebcastLikeMessage;
    })();

    TikTok.WebcastQuestionNewMessage = (function() {

        /**
         * Properties of a WebcastQuestionNewMessage.
         * @memberof TikTok
         * @interface IWebcastQuestionNewMessage
         * @property {TikTok.IQuestionDetails|null} [questionDetails] WebcastQuestionNewMessage questionDetails
         */

        /**
         * Constructs a new WebcastQuestionNewMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastQuestionNewMessage.
         * @implements IWebcastQuestionNewMessage
         * @constructor
         * @param {TikTok.IWebcastQuestionNewMessage=} [properties] Properties to set
         */
        function WebcastQuestionNewMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastQuestionNewMessage questionDetails.
         * @member {TikTok.IQuestionDetails|null|undefined} questionDetails
         * @memberof TikTok.WebcastQuestionNewMessage
         * @instance
         */
        WebcastQuestionNewMessage.prototype.questionDetails = null;

        /**
         * Creates a new WebcastQuestionNewMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {TikTok.IWebcastQuestionNewMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastQuestionNewMessage} WebcastQuestionNewMessage instance
         */
        WebcastQuestionNewMessage.create = function create(properties) {
            return new WebcastQuestionNewMessage(properties);
        };

        /**
         * Encodes the specified WebcastQuestionNewMessage message. Does not implicitly {@link TikTok.WebcastQuestionNewMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {TikTok.IWebcastQuestionNewMessage} message WebcastQuestionNewMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastQuestionNewMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.questionDetails != null && Object.hasOwnProperty.call(message, "questionDetails"))
                $root.TikTok.QuestionDetails.encode(message.questionDetails, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastQuestionNewMessage message, length delimited. Does not implicitly {@link TikTok.WebcastQuestionNewMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {TikTok.IWebcastQuestionNewMessage} message WebcastQuestionNewMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastQuestionNewMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastQuestionNewMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastQuestionNewMessage} WebcastQuestionNewMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastQuestionNewMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastQuestionNewMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.questionDetails = $root.TikTok.QuestionDetails.decode(reader, reader.uint32());
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
         * Decodes a WebcastQuestionNewMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastQuestionNewMessage} WebcastQuestionNewMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastQuestionNewMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastQuestionNewMessage message.
         * @function verify
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastQuestionNewMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.questionDetails != null && message.hasOwnProperty("questionDetails")) {
                var error = $root.TikTok.QuestionDetails.verify(message.questionDetails);
                if (error)
                    return "questionDetails." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastQuestionNewMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastQuestionNewMessage} WebcastQuestionNewMessage
         */
        WebcastQuestionNewMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastQuestionNewMessage)
                return object;
            var message = new $root.TikTok.WebcastQuestionNewMessage();
            if (object.questionDetails != null) {
                if (typeof object.questionDetails !== "object")
                    throw TypeError(".TikTok.WebcastQuestionNewMessage.questionDetails: object expected");
                message.questionDetails = $root.TikTok.QuestionDetails.fromObject(object.questionDetails);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastQuestionNewMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {TikTok.WebcastQuestionNewMessage} message WebcastQuestionNewMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastQuestionNewMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.questionDetails = null;
            if (message.questionDetails != null && message.hasOwnProperty("questionDetails"))
                object.questionDetails = $root.TikTok.QuestionDetails.toObject(message.questionDetails, options);
            return object;
        };

        /**
         * Converts this WebcastQuestionNewMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastQuestionNewMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastQuestionNewMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastQuestionNewMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastQuestionNewMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastQuestionNewMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastQuestionNewMessage";
        };

        return WebcastQuestionNewMessage;
    })();

    TikTok.QuestionDetails = (function() {

        /**
         * Properties of a QuestionDetails.
         * @memberof TikTok
         * @interface IQuestionDetails
         * @property {string|null} [questionText] QuestionDetails questionText
         * @property {TikTok.IUser|null} [user] QuestionDetails user
         */

        /**
         * Constructs a new QuestionDetails.
         * @memberof TikTok
         * @classdesc Represents a QuestionDetails.
         * @implements IQuestionDetails
         * @constructor
         * @param {TikTok.IQuestionDetails=} [properties] Properties to set
         */
        function QuestionDetails(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuestionDetails questionText.
         * @member {string} questionText
         * @memberof TikTok.QuestionDetails
         * @instance
         */
        QuestionDetails.prototype.questionText = "";

        /**
         * QuestionDetails user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.QuestionDetails
         * @instance
         */
        QuestionDetails.prototype.user = null;

        /**
         * Creates a new QuestionDetails instance using the specified properties.
         * @function create
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {TikTok.IQuestionDetails=} [properties] Properties to set
         * @returns {TikTok.QuestionDetails} QuestionDetails instance
         */
        QuestionDetails.create = function create(properties) {
            return new QuestionDetails(properties);
        };

        /**
         * Encodes the specified QuestionDetails message. Does not implicitly {@link TikTok.QuestionDetails.verify|verify} messages.
         * @function encode
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {TikTok.IQuestionDetails} message QuestionDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.questionText != null && Object.hasOwnProperty.call(message, "questionText"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.questionText);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified QuestionDetails message, length delimited. Does not implicitly {@link TikTok.QuestionDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {TikTok.IQuestionDetails} message QuestionDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuestionDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuestionDetails message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.QuestionDetails} QuestionDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.QuestionDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.questionText = reader.string();
                        break;
                    }
                case 5: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
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
         * Decodes a QuestionDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.QuestionDetails} QuestionDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuestionDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuestionDetails message.
         * @function verify
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuestionDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.questionText != null && message.hasOwnProperty("questionText"))
                if (!$util.isString(message.questionText))
                    return "questionText: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a QuestionDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.QuestionDetails} QuestionDetails
         */
        QuestionDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.QuestionDetails)
                return object;
            var message = new $root.TikTok.QuestionDetails();
            if (object.questionText != null)
                message.questionText = String(object.questionText);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.QuestionDetails.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a QuestionDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {TikTok.QuestionDetails} message QuestionDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuestionDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.questionText = "";
                object.user = null;
            }
            if (message.questionText != null && message.hasOwnProperty("questionText"))
                object.questionText = message.questionText;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this QuestionDetails to JSON.
         * @function toJSON
         * @memberof TikTok.QuestionDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuestionDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for QuestionDetails
         * @function getTypeUrl
         * @memberof TikTok.QuestionDetails
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        QuestionDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.QuestionDetails";
        };

        return QuestionDetails;
    })();

    TikTok.WebcastMessageEvent = (function() {

        /**
         * Properties of a WebcastMessageEvent.
         * @memberof TikTok
         * @interface IWebcastMessageEvent
         * @property {number|Long|null} [msgId] WebcastMessageEvent msgId
         * @property {number|Long|null} [createTime] WebcastMessageEvent createTime
         * @property {TikTok.IWebcastMessageEventDetails|null} [eventDetails] WebcastMessageEvent eventDetails
         */

        /**
         * Constructs a new WebcastMessageEvent.
         * @memberof TikTok
         * @classdesc Represents a WebcastMessageEvent.
         * @implements IWebcastMessageEvent
         * @constructor
         * @param {TikTok.IWebcastMessageEvent=} [properties] Properties to set
         */
        function WebcastMessageEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastMessageEvent msgId.
         * @member {number|Long} msgId
         * @memberof TikTok.WebcastMessageEvent
         * @instance
         */
        WebcastMessageEvent.prototype.msgId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastMessageEvent createTime.
         * @member {number|Long} createTime
         * @memberof TikTok.WebcastMessageEvent
         * @instance
         */
        WebcastMessageEvent.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastMessageEvent eventDetails.
         * @member {TikTok.IWebcastMessageEventDetails|null|undefined} eventDetails
         * @memberof TikTok.WebcastMessageEvent
         * @instance
         */
        WebcastMessageEvent.prototype.eventDetails = null;

        /**
         * Creates a new WebcastMessageEvent instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {TikTok.IWebcastMessageEvent=} [properties] Properties to set
         * @returns {TikTok.WebcastMessageEvent} WebcastMessageEvent instance
         */
        WebcastMessageEvent.create = function create(properties) {
            return new WebcastMessageEvent(properties);
        };

        /**
         * Encodes the specified WebcastMessageEvent message. Does not implicitly {@link TikTok.WebcastMessageEvent.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {TikTok.IWebcastMessageEvent} message WebcastMessageEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastMessageEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.msgId);
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.createTime);
            if (message.eventDetails != null && Object.hasOwnProperty.call(message, "eventDetails"))
                $root.TikTok.WebcastMessageEventDetails.encode(message.eventDetails, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastMessageEvent message, length delimited. Does not implicitly {@link TikTok.WebcastMessageEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {TikTok.IWebcastMessageEvent} message WebcastMessageEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastMessageEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastMessageEvent message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastMessageEvent} WebcastMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastMessageEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastMessageEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.msgId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.createTime = reader.uint64();
                        break;
                    }
                case 8: {
                        message.eventDetails = $root.TikTok.WebcastMessageEventDetails.decode(reader, reader.uint32());
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
         * Decodes a WebcastMessageEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastMessageEvent} WebcastMessageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastMessageEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastMessageEvent message.
         * @function verify
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastMessageEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isInteger(message.msgId) && !(message.msgId && $util.isInteger(message.msgId.low) && $util.isInteger(message.msgId.high)))
                    return "msgId: integer|Long expected";
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.eventDetails != null && message.hasOwnProperty("eventDetails")) {
                var error = $root.TikTok.WebcastMessageEventDetails.verify(message.eventDetails);
                if (error)
                    return "eventDetails." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastMessageEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastMessageEvent} WebcastMessageEvent
         */
        WebcastMessageEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastMessageEvent)
                return object;
            var message = new $root.TikTok.WebcastMessageEvent();
            if (object.msgId != null)
                if ($util.Long)
                    (message.msgId = $util.Long.fromValue(object.msgId)).unsigned = true;
                else if (typeof object.msgId === "string")
                    message.msgId = parseInt(object.msgId, 10);
                else if (typeof object.msgId === "number")
                    message.msgId = object.msgId;
                else if (typeof object.msgId === "object")
                    message.msgId = new $util.LongBits(object.msgId.low >>> 0, object.msgId.high >>> 0).toNumber(true);
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = true;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber(true);
            if (object.eventDetails != null) {
                if (typeof object.eventDetails !== "object")
                    throw TypeError(".TikTok.WebcastMessageEvent.eventDetails: object expected");
                message.eventDetails = $root.TikTok.WebcastMessageEventDetails.fromObject(object.eventDetails);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastMessageEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {TikTok.WebcastMessageEvent} message WebcastMessageEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastMessageEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.msgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.msgId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                object.eventDetails = null;
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (typeof message.msgId === "number")
                    object.msgId = options.longs === String ? String(message.msgId) : message.msgId;
                else
                    object.msgId = options.longs === String ? $util.Long.prototype.toString.call(message.msgId) : options.longs === Number ? new $util.LongBits(message.msgId.low >>> 0, message.msgId.high >>> 0).toNumber(true) : message.msgId;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber(true) : message.createTime;
            if (message.eventDetails != null && message.hasOwnProperty("eventDetails"))
                object.eventDetails = $root.TikTok.WebcastMessageEventDetails.toObject(message.eventDetails, options);
            return object;
        };

        /**
         * Converts this WebcastMessageEvent to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastMessageEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastMessageEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastMessageEvent
         * @function getTypeUrl
         * @memberof TikTok.WebcastMessageEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastMessageEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastMessageEvent";
        };

        return WebcastMessageEvent;
    })();

    TikTok.WebcastMessageEventDetails = (function() {

        /**
         * Properties of a WebcastMessageEventDetails.
         * @memberof TikTok
         * @interface IWebcastMessageEventDetails
         * @property {string|null} [displayType] WebcastMessageEventDetails displayType
         * @property {string|null} [label] WebcastMessageEventDetails label
         */

        /**
         * Constructs a new WebcastMessageEventDetails.
         * @memberof TikTok
         * @classdesc Represents a WebcastMessageEventDetails.
         * @implements IWebcastMessageEventDetails
         * @constructor
         * @param {TikTok.IWebcastMessageEventDetails=} [properties] Properties to set
         */
        function WebcastMessageEventDetails(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastMessageEventDetails displayType.
         * @member {string} displayType
         * @memberof TikTok.WebcastMessageEventDetails
         * @instance
         */
        WebcastMessageEventDetails.prototype.displayType = "";

        /**
         * WebcastMessageEventDetails label.
         * @member {string} label
         * @memberof TikTok.WebcastMessageEventDetails
         * @instance
         */
        WebcastMessageEventDetails.prototype.label = "";

        /**
         * Creates a new WebcastMessageEventDetails instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {TikTok.IWebcastMessageEventDetails=} [properties] Properties to set
         * @returns {TikTok.WebcastMessageEventDetails} WebcastMessageEventDetails instance
         */
        WebcastMessageEventDetails.create = function create(properties) {
            return new WebcastMessageEventDetails(properties);
        };

        /**
         * Encodes the specified WebcastMessageEventDetails message. Does not implicitly {@link TikTok.WebcastMessageEventDetails.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {TikTok.IWebcastMessageEventDetails} message WebcastMessageEventDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastMessageEventDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayType != null && Object.hasOwnProperty.call(message, "displayType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayType);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            return writer;
        };

        /**
         * Encodes the specified WebcastMessageEventDetails message, length delimited. Does not implicitly {@link TikTok.WebcastMessageEventDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {TikTok.IWebcastMessageEventDetails} message WebcastMessageEventDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastMessageEventDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastMessageEventDetails message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastMessageEventDetails} WebcastMessageEventDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastMessageEventDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastMessageEventDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.displayType = reader.string();
                        break;
                    }
                case 2: {
                        message.label = reader.string();
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
         * Decodes a WebcastMessageEventDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastMessageEventDetails} WebcastMessageEventDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastMessageEventDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastMessageEventDetails message.
         * @function verify
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastMessageEventDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.displayType != null && message.hasOwnProperty("displayType"))
                if (!$util.isString(message.displayType))
                    return "displayType: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            return null;
        };

        /**
         * Creates a WebcastMessageEventDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastMessageEventDetails} WebcastMessageEventDetails
         */
        WebcastMessageEventDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastMessageEventDetails)
                return object;
            var message = new $root.TikTok.WebcastMessageEventDetails();
            if (object.displayType != null)
                message.displayType = String(object.displayType);
            if (object.label != null)
                message.label = String(object.label);
            return message;
        };

        /**
         * Creates a plain object from a WebcastMessageEventDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {TikTok.WebcastMessageEventDetails} message WebcastMessageEventDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastMessageEventDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.displayType = "";
                object.label = "";
            }
            if (message.displayType != null && message.hasOwnProperty("displayType"))
                object.displayType = message.displayType;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            return object;
        };

        /**
         * Converts this WebcastMessageEventDetails to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastMessageEventDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastMessageEventDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastMessageEventDetails
         * @function getTypeUrl
         * @memberof TikTok.WebcastMessageEventDetails
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastMessageEventDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastMessageEventDetails";
        };

        return WebcastMessageEventDetails;
    })();

    TikTok.WebcastLiveIntroMessage = (function() {

        /**
         * Properties of a WebcastLiveIntroMessage.
         * @memberof TikTok
         * @interface IWebcastLiveIntroMessage
         * @property {number|Long|null} [id] WebcastLiveIntroMessage id
         * @property {string|null} [description] WebcastLiveIntroMessage description
         * @property {TikTok.IUser|null} [user] WebcastLiveIntroMessage user
         */

        /**
         * Constructs a new WebcastLiveIntroMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastLiveIntroMessage.
         * @implements IWebcastLiveIntroMessage
         * @constructor
         * @param {TikTok.IWebcastLiveIntroMessage=} [properties] Properties to set
         */
        function WebcastLiveIntroMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastLiveIntroMessage id.
         * @member {number|Long} id
         * @memberof TikTok.WebcastLiveIntroMessage
         * @instance
         */
        WebcastLiveIntroMessage.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastLiveIntroMessage description.
         * @member {string} description
         * @memberof TikTok.WebcastLiveIntroMessage
         * @instance
         */
        WebcastLiveIntroMessage.prototype.description = "";

        /**
         * WebcastLiveIntroMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastLiveIntroMessage
         * @instance
         */
        WebcastLiveIntroMessage.prototype.user = null;

        /**
         * Creates a new WebcastLiveIntroMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {TikTok.IWebcastLiveIntroMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastLiveIntroMessage} WebcastLiveIntroMessage instance
         */
        WebcastLiveIntroMessage.create = function create(properties) {
            return new WebcastLiveIntroMessage(properties);
        };

        /**
         * Encodes the specified WebcastLiveIntroMessage message. Does not implicitly {@link TikTok.WebcastLiveIntroMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {TikTok.IWebcastLiveIntroMessage} message WebcastLiveIntroMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLiveIntroMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.id);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastLiveIntroMessage message, length delimited. Does not implicitly {@link TikTok.WebcastLiveIntroMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {TikTok.IWebcastLiveIntroMessage} message WebcastLiveIntroMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastLiveIntroMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastLiveIntroMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastLiveIntroMessage} WebcastLiveIntroMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLiveIntroMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastLiveIntroMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.id = reader.uint64();
                        break;
                    }
                case 4: {
                        message.description = reader.string();
                        break;
                    }
                case 5: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
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
         * Decodes a WebcastLiveIntroMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastLiveIntroMessage} WebcastLiveIntroMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastLiveIntroMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastLiveIntroMessage message.
         * @function verify
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastLiveIntroMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastLiveIntroMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastLiveIntroMessage} WebcastLiveIntroMessage
         */
        WebcastLiveIntroMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastLiveIntroMessage)
                return object;
            var message = new $root.TikTok.WebcastLiveIntroMessage();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.description != null)
                message.description = String(object.description);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastLiveIntroMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastLiveIntroMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {TikTok.WebcastLiveIntroMessage} message WebcastLiveIntroMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastLiveIntroMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.description = "";
                object.user = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this WebcastLiveIntroMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastLiveIntroMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastLiveIntroMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastLiveIntroMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastLiveIntroMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastLiveIntroMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastLiveIntroMessage";
        };

        return WebcastLiveIntroMessage;
    })();

    TikTok.SystemMessage = (function() {

        /**
         * Properties of a SystemMessage.
         * @memberof TikTok
         * @interface ISystemMessage
         * @property {string|null} [description] SystemMessage description
         */

        /**
         * Constructs a new SystemMessage.
         * @memberof TikTok
         * @classdesc Represents a SystemMessage.
         * @implements ISystemMessage
         * @constructor
         * @param {TikTok.ISystemMessage=} [properties] Properties to set
         */
        function SystemMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SystemMessage description.
         * @member {string} description
         * @memberof TikTok.SystemMessage
         * @instance
         */
        SystemMessage.prototype.description = "";

        /**
         * Creates a new SystemMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.SystemMessage
         * @static
         * @param {TikTok.ISystemMessage=} [properties] Properties to set
         * @returns {TikTok.SystemMessage} SystemMessage instance
         */
        SystemMessage.create = function create(properties) {
            return new SystemMessage(properties);
        };

        /**
         * Encodes the specified SystemMessage message. Does not implicitly {@link TikTok.SystemMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.SystemMessage
         * @static
         * @param {TikTok.ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified SystemMessage message, length delimited. Does not implicitly {@link TikTok.SystemMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.SystemMessage
         * @static
         * @param {TikTok.ISystemMessage} message SystemMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SystemMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SystemMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.SystemMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.description = reader.string();
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
         * Decodes a SystemMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.SystemMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.SystemMessage} SystemMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SystemMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SystemMessage message.
         * @function verify
         * @memberof TikTok.SystemMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SystemMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a SystemMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.SystemMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.SystemMessage} SystemMessage
         */
        SystemMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.SystemMessage)
                return object;
            var message = new $root.TikTok.SystemMessage();
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a SystemMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.SystemMessage
         * @static
         * @param {TikTok.SystemMessage} message SystemMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SystemMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.description = "";
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this SystemMessage to JSON.
         * @function toJSON
         * @memberof TikTok.SystemMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SystemMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SystemMessage
         * @function getTypeUrl
         * @memberof TikTok.SystemMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SystemMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.SystemMessage";
        };

        return SystemMessage;
    })();

    TikTok.WebcastInRoomBannerMessage = (function() {

        /**
         * Properties of a WebcastInRoomBannerMessage.
         * @memberof TikTok
         * @interface IWebcastInRoomBannerMessage
         * @property {string|null} [data] WebcastInRoomBannerMessage data
         */

        /**
         * Constructs a new WebcastInRoomBannerMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastInRoomBannerMessage.
         * @implements IWebcastInRoomBannerMessage
         * @constructor
         * @param {TikTok.IWebcastInRoomBannerMessage=} [properties] Properties to set
         */
        function WebcastInRoomBannerMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastInRoomBannerMessage data.
         * @member {string} data
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @instance
         */
        WebcastInRoomBannerMessage.prototype.data = "";

        /**
         * Creates a new WebcastInRoomBannerMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {TikTok.IWebcastInRoomBannerMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastInRoomBannerMessage} WebcastInRoomBannerMessage instance
         */
        WebcastInRoomBannerMessage.create = function create(properties) {
            return new WebcastInRoomBannerMessage(properties);
        };

        /**
         * Encodes the specified WebcastInRoomBannerMessage message. Does not implicitly {@link TikTok.WebcastInRoomBannerMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {TikTok.IWebcastInRoomBannerMessage} message WebcastInRoomBannerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastInRoomBannerMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified WebcastInRoomBannerMessage message, length delimited. Does not implicitly {@link TikTok.WebcastInRoomBannerMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {TikTok.IWebcastInRoomBannerMessage} message WebcastInRoomBannerMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastInRoomBannerMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastInRoomBannerMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastInRoomBannerMessage} WebcastInRoomBannerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastInRoomBannerMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastInRoomBannerMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.data = reader.string();
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
         * Decodes a WebcastInRoomBannerMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastInRoomBannerMessage} WebcastInRoomBannerMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastInRoomBannerMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastInRoomBannerMessage message.
         * @function verify
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastInRoomBannerMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };

        /**
         * Creates a WebcastInRoomBannerMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastInRoomBannerMessage} WebcastInRoomBannerMessage
         */
        WebcastInRoomBannerMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastInRoomBannerMessage)
                return object;
            var message = new $root.TikTok.WebcastInRoomBannerMessage();
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a WebcastInRoomBannerMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {TikTok.WebcastInRoomBannerMessage} message WebcastInRoomBannerMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastInRoomBannerMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.data = "";
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this WebcastInRoomBannerMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastInRoomBannerMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastInRoomBannerMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastInRoomBannerMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastInRoomBannerMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastInRoomBannerMessage";
        };

        return WebcastInRoomBannerMessage;
    })();

    TikTok.RankItem = (function() {

        /**
         * Properties of a RankItem.
         * @memberof TikTok
         * @interface IRankItem
         * @property {string|null} [colour] RankItem colour
         * @property {number|Long|null} [id] RankItem id
         */

        /**
         * Constructs a new RankItem.
         * @memberof TikTok
         * @classdesc Represents a RankItem.
         * @implements IRankItem
         * @constructor
         * @param {TikTok.IRankItem=} [properties] Properties to set
         */
        function RankItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankItem colour.
         * @member {string} colour
         * @memberof TikTok.RankItem
         * @instance
         */
        RankItem.prototype.colour = "";

        /**
         * RankItem id.
         * @member {number|Long} id
         * @memberof TikTok.RankItem
         * @instance
         */
        RankItem.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RankItem instance using the specified properties.
         * @function create
         * @memberof TikTok.RankItem
         * @static
         * @param {TikTok.IRankItem=} [properties] Properties to set
         * @returns {TikTok.RankItem} RankItem instance
         */
        RankItem.create = function create(properties) {
            return new RankItem(properties);
        };

        /**
         * Encodes the specified RankItem message. Does not implicitly {@link TikTok.RankItem.verify|verify} messages.
         * @function encode
         * @memberof TikTok.RankItem
         * @static
         * @param {TikTok.IRankItem} message RankItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.colour != null && Object.hasOwnProperty.call(message, "colour"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.colour);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.id);
            return writer;
        };

        /**
         * Encodes the specified RankItem message, length delimited. Does not implicitly {@link TikTok.RankItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.RankItem
         * @static
         * @param {TikTok.IRankItem} message RankItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankItem message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.RankItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.RankItem} RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.RankItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.colour = reader.string();
                        break;
                    }
                case 4: {
                        message.id = reader.uint64();
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
         * Decodes a RankItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.RankItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.RankItem} RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankItem message.
         * @function verify
         * @memberof TikTok.RankItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.colour != null && message.hasOwnProperty("colour"))
                if (!$util.isString(message.colour))
                    return "colour: string expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates a RankItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.RankItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.RankItem} RankItem
         */
        RankItem.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.RankItem)
                return object;
            var message = new $root.TikTok.RankItem();
            if (object.colour != null)
                message.colour = String(object.colour);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RankItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.RankItem
         * @static
         * @param {TikTok.RankItem} message RankItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.colour = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            }
            if (message.colour != null && message.hasOwnProperty("colour"))
                object.colour = message.colour;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            return object;
        };

        /**
         * Converts this RankItem to JSON.
         * @function toJSON
         * @memberof TikTok.RankItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RankItem
         * @function getTypeUrl
         * @memberof TikTok.RankItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RankItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.RankItem";
        };

        return RankItem;
    })();

    TikTok.WeeklyRanking = (function() {

        /**
         * Properties of a WeeklyRanking.
         * @memberof TikTok
         * @interface IWeeklyRanking
         * @property {string|null} [type] WeeklyRanking type
         * @property {string|null} [label] WeeklyRanking label
         * @property {TikTok.IRankItem|null} [rank] WeeklyRanking rank
         */

        /**
         * Constructs a new WeeklyRanking.
         * @memberof TikTok
         * @classdesc Represents a WeeklyRanking.
         * @implements IWeeklyRanking
         * @constructor
         * @param {TikTok.IWeeklyRanking=} [properties] Properties to set
         */
        function WeeklyRanking(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WeeklyRanking type.
         * @member {string} type
         * @memberof TikTok.WeeklyRanking
         * @instance
         */
        WeeklyRanking.prototype.type = "";

        /**
         * WeeklyRanking label.
         * @member {string} label
         * @memberof TikTok.WeeklyRanking
         * @instance
         */
        WeeklyRanking.prototype.label = "";

        /**
         * WeeklyRanking rank.
         * @member {TikTok.IRankItem|null|undefined} rank
         * @memberof TikTok.WeeklyRanking
         * @instance
         */
        WeeklyRanking.prototype.rank = null;

        /**
         * Creates a new WeeklyRanking instance using the specified properties.
         * @function create
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {TikTok.IWeeklyRanking=} [properties] Properties to set
         * @returns {TikTok.WeeklyRanking} WeeklyRanking instance
         */
        WeeklyRanking.create = function create(properties) {
            return new WeeklyRanking(properties);
        };

        /**
         * Encodes the specified WeeklyRanking message. Does not implicitly {@link TikTok.WeeklyRanking.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {TikTok.IWeeklyRanking} message WeeklyRanking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyRanking.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
            if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                $root.TikTok.RankItem.encode(message.rank, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WeeklyRanking message, length delimited. Does not implicitly {@link TikTok.WeeklyRanking.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {TikTok.IWeeklyRanking} message WeeklyRanking message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WeeklyRanking.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WeeklyRanking message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WeeklyRanking} WeeklyRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyRanking.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WeeklyRanking();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.string();
                        break;
                    }
                case 2: {
                        message.label = reader.string();
                        break;
                    }
                case 3: {
                        message.rank = $root.TikTok.RankItem.decode(reader, reader.uint32());
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
         * Decodes a WeeklyRanking message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WeeklyRanking} WeeklyRanking
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WeeklyRanking.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WeeklyRanking message.
         * @function verify
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WeeklyRanking.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.label != null && message.hasOwnProperty("label"))
                if (!$util.isString(message.label))
                    return "label: string expected";
            if (message.rank != null && message.hasOwnProperty("rank")) {
                var error = $root.TikTok.RankItem.verify(message.rank);
                if (error)
                    return "rank." + error;
            }
            return null;
        };

        /**
         * Creates a WeeklyRanking message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WeeklyRanking} WeeklyRanking
         */
        WeeklyRanking.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WeeklyRanking)
                return object;
            var message = new $root.TikTok.WeeklyRanking();
            if (object.type != null)
                message.type = String(object.type);
            if (object.label != null)
                message.label = String(object.label);
            if (object.rank != null) {
                if (typeof object.rank !== "object")
                    throw TypeError(".TikTok.WeeklyRanking.rank: object expected");
                message.rank = $root.TikTok.RankItem.fromObject(object.rank);
            }
            return message;
        };

        /**
         * Creates a plain object from a WeeklyRanking message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {TikTok.WeeklyRanking} message WeeklyRanking
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WeeklyRanking.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.label = "";
                object.rank = null;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = message.label;
            if (message.rank != null && message.hasOwnProperty("rank"))
                object.rank = $root.TikTok.RankItem.toObject(message.rank, options);
            return object;
        };

        /**
         * Converts this WeeklyRanking to JSON.
         * @function toJSON
         * @memberof TikTok.WeeklyRanking
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WeeklyRanking.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WeeklyRanking
         * @function getTypeUrl
         * @memberof TikTok.WeeklyRanking
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WeeklyRanking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WeeklyRanking";
        };

        return WeeklyRanking;
    })();

    TikTok.RankContainer = (function() {

        /**
         * Properties of a RankContainer.
         * @memberof TikTok
         * @interface IRankContainer
         * @property {TikTok.IWeeklyRanking|null} [rankings] RankContainer rankings
         */

        /**
         * Constructs a new RankContainer.
         * @memberof TikTok
         * @classdesc Represents a RankContainer.
         * @implements IRankContainer
         * @constructor
         * @param {TikTok.IRankContainer=} [properties] Properties to set
         */
        function RankContainer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankContainer rankings.
         * @member {TikTok.IWeeklyRanking|null|undefined} rankings
         * @memberof TikTok.RankContainer
         * @instance
         */
        RankContainer.prototype.rankings = null;

        /**
         * Creates a new RankContainer instance using the specified properties.
         * @function create
         * @memberof TikTok.RankContainer
         * @static
         * @param {TikTok.IRankContainer=} [properties] Properties to set
         * @returns {TikTok.RankContainer} RankContainer instance
         */
        RankContainer.create = function create(properties) {
            return new RankContainer(properties);
        };

        /**
         * Encodes the specified RankContainer message. Does not implicitly {@link TikTok.RankContainer.verify|verify} messages.
         * @function encode
         * @memberof TikTok.RankContainer
         * @static
         * @param {TikTok.IRankContainer} message RankContainer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankContainer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rankings != null && Object.hasOwnProperty.call(message, "rankings"))
                $root.TikTok.WeeklyRanking.encode(message.rankings, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RankContainer message, length delimited. Does not implicitly {@link TikTok.RankContainer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.RankContainer
         * @static
         * @param {TikTok.IRankContainer} message RankContainer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankContainer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankContainer message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.RankContainer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.RankContainer} RankContainer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankContainer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.RankContainer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4: {
                        message.rankings = $root.TikTok.WeeklyRanking.decode(reader, reader.uint32());
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
         * Decodes a RankContainer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.RankContainer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.RankContainer} RankContainer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankContainer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankContainer message.
         * @function verify
         * @memberof TikTok.RankContainer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankContainer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.rankings != null && message.hasOwnProperty("rankings")) {
                var error = $root.TikTok.WeeklyRanking.verify(message.rankings);
                if (error)
                    return "rankings." + error;
            }
            return null;
        };

        /**
         * Creates a RankContainer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.RankContainer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.RankContainer} RankContainer
         */
        RankContainer.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.RankContainer)
                return object;
            var message = new $root.TikTok.RankContainer();
            if (object.rankings != null) {
                if (typeof object.rankings !== "object")
                    throw TypeError(".TikTok.RankContainer.rankings: object expected");
                message.rankings = $root.TikTok.WeeklyRanking.fromObject(object.rankings);
            }
            return message;
        };

        /**
         * Creates a plain object from a RankContainer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.RankContainer
         * @static
         * @param {TikTok.RankContainer} message RankContainer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankContainer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.rankings = null;
            if (message.rankings != null && message.hasOwnProperty("rankings"))
                object.rankings = $root.TikTok.WeeklyRanking.toObject(message.rankings, options);
            return object;
        };

        /**
         * Converts this RankContainer to JSON.
         * @function toJSON
         * @memberof TikTok.RankContainer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankContainer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RankContainer
         * @function getTypeUrl
         * @memberof TikTok.RankContainer
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RankContainer.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.RankContainer";
        };

        return RankContainer;
    })();

    TikTok.WebcastHourlyRankMessage = (function() {

        /**
         * Properties of a WebcastHourlyRankMessage.
         * @memberof TikTok
         * @interface IWebcastHourlyRankMessage
         * @property {TikTok.IRankContainer|null} [data] WebcastHourlyRankMessage data
         */

        /**
         * Constructs a new WebcastHourlyRankMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastHourlyRankMessage.
         * @implements IWebcastHourlyRankMessage
         * @constructor
         * @param {TikTok.IWebcastHourlyRankMessage=} [properties] Properties to set
         */
        function WebcastHourlyRankMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastHourlyRankMessage data.
         * @member {TikTok.IRankContainer|null|undefined} data
         * @memberof TikTok.WebcastHourlyRankMessage
         * @instance
         */
        WebcastHourlyRankMessage.prototype.data = null;

        /**
         * Creates a new WebcastHourlyRankMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {TikTok.IWebcastHourlyRankMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastHourlyRankMessage} WebcastHourlyRankMessage instance
         */
        WebcastHourlyRankMessage.create = function create(properties) {
            return new WebcastHourlyRankMessage(properties);
        };

        /**
         * Encodes the specified WebcastHourlyRankMessage message. Does not implicitly {@link TikTok.WebcastHourlyRankMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {TikTok.IWebcastHourlyRankMessage} message WebcastHourlyRankMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastHourlyRankMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.TikTok.RankContainer.encode(message.data, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastHourlyRankMessage message, length delimited. Does not implicitly {@link TikTok.WebcastHourlyRankMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {TikTok.IWebcastHourlyRankMessage} message WebcastHourlyRankMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastHourlyRankMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastHourlyRankMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastHourlyRankMessage} WebcastHourlyRankMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastHourlyRankMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastHourlyRankMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.data = $root.TikTok.RankContainer.decode(reader, reader.uint32());
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
         * Decodes a WebcastHourlyRankMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastHourlyRankMessage} WebcastHourlyRankMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastHourlyRankMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastHourlyRankMessage message.
         * @function verify
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastHourlyRankMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.TikTok.RankContainer.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastHourlyRankMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastHourlyRankMessage} WebcastHourlyRankMessage
         */
        WebcastHourlyRankMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastHourlyRankMessage)
                return object;
            var message = new $root.TikTok.WebcastHourlyRankMessage();
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".TikTok.WebcastHourlyRankMessage.data: object expected");
                message.data = $root.TikTok.RankContainer.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastHourlyRankMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {TikTok.WebcastHourlyRankMessage} message WebcastHourlyRankMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastHourlyRankMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.data = null;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.TikTok.RankContainer.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this WebcastHourlyRankMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastHourlyRankMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastHourlyRankMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastHourlyRankMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastHourlyRankMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastHourlyRankMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastHourlyRankMessage";
        };

        return WebcastHourlyRankMessage;
    })();

    TikTok.EmoteDetails = (function() {

        /**
         * Properties of an EmoteDetails.
         * @memberof TikTok
         * @interface IEmoteDetails
         * @property {string|null} [emoteId] EmoteDetails emoteId
         * @property {TikTok.IEmoteImage|null} [image] EmoteDetails image
         */

        /**
         * Constructs a new EmoteDetails.
         * @memberof TikTok
         * @classdesc Represents an EmoteDetails.
         * @implements IEmoteDetails
         * @constructor
         * @param {TikTok.IEmoteDetails=} [properties] Properties to set
         */
        function EmoteDetails(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EmoteDetails emoteId.
         * @member {string} emoteId
         * @memberof TikTok.EmoteDetails
         * @instance
         */
        EmoteDetails.prototype.emoteId = "";

        /**
         * EmoteDetails image.
         * @member {TikTok.IEmoteImage|null|undefined} image
         * @memberof TikTok.EmoteDetails
         * @instance
         */
        EmoteDetails.prototype.image = null;

        /**
         * Creates a new EmoteDetails instance using the specified properties.
         * @function create
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {TikTok.IEmoteDetails=} [properties] Properties to set
         * @returns {TikTok.EmoteDetails} EmoteDetails instance
         */
        EmoteDetails.create = function create(properties) {
            return new EmoteDetails(properties);
        };

        /**
         * Encodes the specified EmoteDetails message. Does not implicitly {@link TikTok.EmoteDetails.verify|verify} messages.
         * @function encode
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {TikTok.IEmoteDetails} message EmoteDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmoteDetails.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.emoteId != null && Object.hasOwnProperty.call(message, "emoteId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.emoteId);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                $root.TikTok.EmoteImage.encode(message.image, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EmoteDetails message, length delimited. Does not implicitly {@link TikTok.EmoteDetails.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {TikTok.IEmoteDetails} message EmoteDetails message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmoteDetails.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmoteDetails message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.EmoteDetails} EmoteDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmoteDetails.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.EmoteDetails();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.emoteId = reader.string();
                        break;
                    }
                case 2: {
                        message.image = $root.TikTok.EmoteImage.decode(reader, reader.uint32());
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
         * Decodes an EmoteDetails message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.EmoteDetails} EmoteDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmoteDetails.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmoteDetails message.
         * @function verify
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmoteDetails.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.emoteId != null && message.hasOwnProperty("emoteId"))
                if (!$util.isString(message.emoteId))
                    return "emoteId: string expected";
            if (message.image != null && message.hasOwnProperty("image")) {
                var error = $root.TikTok.EmoteImage.verify(message.image);
                if (error)
                    return "image." + error;
            }
            return null;
        };

        /**
         * Creates an EmoteDetails message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.EmoteDetails} EmoteDetails
         */
        EmoteDetails.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.EmoteDetails)
                return object;
            var message = new $root.TikTok.EmoteDetails();
            if (object.emoteId != null)
                message.emoteId = String(object.emoteId);
            if (object.image != null) {
                if (typeof object.image !== "object")
                    throw TypeError(".TikTok.EmoteDetails.image: object expected");
                message.image = $root.TikTok.EmoteImage.fromObject(object.image);
            }
            return message;
        };

        /**
         * Creates a plain object from an EmoteDetails message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {TikTok.EmoteDetails} message EmoteDetails
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmoteDetails.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.emoteId = "";
                object.image = null;
            }
            if (message.emoteId != null && message.hasOwnProperty("emoteId"))
                object.emoteId = message.emoteId;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = $root.TikTok.EmoteImage.toObject(message.image, options);
            return object;
        };

        /**
         * Converts this EmoteDetails to JSON.
         * @function toJSON
         * @memberof TikTok.EmoteDetails
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmoteDetails.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EmoteDetails
         * @function getTypeUrl
         * @memberof TikTok.EmoteDetails
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EmoteDetails.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.EmoteDetails";
        };

        return EmoteDetails;
    })();

    TikTok.EmoteImage = (function() {

        /**
         * Properties of an EmoteImage.
         * @memberof TikTok
         * @interface IEmoteImage
         * @property {string|null} [imageUrl] EmoteImage imageUrl
         */

        /**
         * Constructs a new EmoteImage.
         * @memberof TikTok
         * @classdesc Represents an EmoteImage.
         * @implements IEmoteImage
         * @constructor
         * @param {TikTok.IEmoteImage=} [properties] Properties to set
         */
        function EmoteImage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EmoteImage imageUrl.
         * @member {string} imageUrl
         * @memberof TikTok.EmoteImage
         * @instance
         */
        EmoteImage.prototype.imageUrl = "";

        /**
         * Creates a new EmoteImage instance using the specified properties.
         * @function create
         * @memberof TikTok.EmoteImage
         * @static
         * @param {TikTok.IEmoteImage=} [properties] Properties to set
         * @returns {TikTok.EmoteImage} EmoteImage instance
         */
        EmoteImage.create = function create(properties) {
            return new EmoteImage(properties);
        };

        /**
         * Encodes the specified EmoteImage message. Does not implicitly {@link TikTok.EmoteImage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.EmoteImage
         * @static
         * @param {TikTok.IEmoteImage} message EmoteImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmoteImage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imageUrl);
            return writer;
        };

        /**
         * Encodes the specified EmoteImage message, length delimited. Does not implicitly {@link TikTok.EmoteImage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.EmoteImage
         * @static
         * @param {TikTok.IEmoteImage} message EmoteImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EmoteImage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EmoteImage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.EmoteImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.EmoteImage} EmoteImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmoteImage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.EmoteImage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.imageUrl = reader.string();
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
         * Decodes an EmoteImage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.EmoteImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.EmoteImage} EmoteImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EmoteImage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EmoteImage message.
         * @function verify
         * @memberof TikTok.EmoteImage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EmoteImage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                if (!$util.isString(message.imageUrl))
                    return "imageUrl: string expected";
            return null;
        };

        /**
         * Creates an EmoteImage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.EmoteImage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.EmoteImage} EmoteImage
         */
        EmoteImage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.EmoteImage)
                return object;
            var message = new $root.TikTok.EmoteImage();
            if (object.imageUrl != null)
                message.imageUrl = String(object.imageUrl);
            return message;
        };

        /**
         * Creates a plain object from an EmoteImage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.EmoteImage
         * @static
         * @param {TikTok.EmoteImage} message EmoteImage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EmoteImage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.imageUrl = "";
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl"))
                object.imageUrl = message.imageUrl;
            return object;
        };

        /**
         * Converts this EmoteImage to JSON.
         * @function toJSON
         * @memberof TikTok.EmoteImage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EmoteImage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EmoteImage
         * @function getTypeUrl
         * @memberof TikTok.EmoteImage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EmoteImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.EmoteImage";
        };

        return EmoteImage;
    })();

    TikTok.WebcastEnvelopeMessage = (function() {

        /**
         * Properties of a WebcastEnvelopeMessage.
         * @memberof TikTok
         * @interface IWebcastEnvelopeMessage
         * @property {TikTok.ITreasureBoxData|null} [treasureBoxData] WebcastEnvelopeMessage treasureBoxData
         * @property {TikTok.ITreasureBoxUser|null} [treasureBoxUser] WebcastEnvelopeMessage treasureBoxUser
         */

        /**
         * Constructs a new WebcastEnvelopeMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastEnvelopeMessage.
         * @implements IWebcastEnvelopeMessage
         * @constructor
         * @param {TikTok.IWebcastEnvelopeMessage=} [properties] Properties to set
         */
        function WebcastEnvelopeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastEnvelopeMessage treasureBoxData.
         * @member {TikTok.ITreasureBoxData|null|undefined} treasureBoxData
         * @memberof TikTok.WebcastEnvelopeMessage
         * @instance
         */
        WebcastEnvelopeMessage.prototype.treasureBoxData = null;

        /**
         * WebcastEnvelopeMessage treasureBoxUser.
         * @member {TikTok.ITreasureBoxUser|null|undefined} treasureBoxUser
         * @memberof TikTok.WebcastEnvelopeMessage
         * @instance
         */
        WebcastEnvelopeMessage.prototype.treasureBoxUser = null;

        /**
         * Creates a new WebcastEnvelopeMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {TikTok.IWebcastEnvelopeMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastEnvelopeMessage} WebcastEnvelopeMessage instance
         */
        WebcastEnvelopeMessage.create = function create(properties) {
            return new WebcastEnvelopeMessage(properties);
        };

        /**
         * Encodes the specified WebcastEnvelopeMessage message. Does not implicitly {@link TikTok.WebcastEnvelopeMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {TikTok.IWebcastEnvelopeMessage} message WebcastEnvelopeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastEnvelopeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.treasureBoxUser != null && Object.hasOwnProperty.call(message, "treasureBoxUser"))
                $root.TikTok.TreasureBoxUser.encode(message.treasureBoxUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.treasureBoxData != null && Object.hasOwnProperty.call(message, "treasureBoxData"))
                $root.TikTok.TreasureBoxData.encode(message.treasureBoxData, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified WebcastEnvelopeMessage message, length delimited. Does not implicitly {@link TikTok.WebcastEnvelopeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {TikTok.IWebcastEnvelopeMessage} message WebcastEnvelopeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastEnvelopeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastEnvelopeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastEnvelopeMessage} WebcastEnvelopeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastEnvelopeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastEnvelopeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.treasureBoxData = $root.TikTok.TreasureBoxData.decode(reader, reader.uint32());
                        break;
                    }
                case 1: {
                        message.treasureBoxUser = $root.TikTok.TreasureBoxUser.decode(reader, reader.uint32());
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
         * Decodes a WebcastEnvelopeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastEnvelopeMessage} WebcastEnvelopeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastEnvelopeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastEnvelopeMessage message.
         * @function verify
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastEnvelopeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.treasureBoxData != null && message.hasOwnProperty("treasureBoxData")) {
                var error = $root.TikTok.TreasureBoxData.verify(message.treasureBoxData);
                if (error)
                    return "treasureBoxData." + error;
            }
            if (message.treasureBoxUser != null && message.hasOwnProperty("treasureBoxUser")) {
                var error = $root.TikTok.TreasureBoxUser.verify(message.treasureBoxUser);
                if (error)
                    return "treasureBoxUser." + error;
            }
            return null;
        };

        /**
         * Creates a WebcastEnvelopeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastEnvelopeMessage} WebcastEnvelopeMessage
         */
        WebcastEnvelopeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastEnvelopeMessage)
                return object;
            var message = new $root.TikTok.WebcastEnvelopeMessage();
            if (object.treasureBoxData != null) {
                if (typeof object.treasureBoxData !== "object")
                    throw TypeError(".TikTok.WebcastEnvelopeMessage.treasureBoxData: object expected");
                message.treasureBoxData = $root.TikTok.TreasureBoxData.fromObject(object.treasureBoxData);
            }
            if (object.treasureBoxUser != null) {
                if (typeof object.treasureBoxUser !== "object")
                    throw TypeError(".TikTok.WebcastEnvelopeMessage.treasureBoxUser: object expected");
                message.treasureBoxUser = $root.TikTok.TreasureBoxUser.fromObject(object.treasureBoxUser);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebcastEnvelopeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {TikTok.WebcastEnvelopeMessage} message WebcastEnvelopeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastEnvelopeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.treasureBoxUser = null;
                object.treasureBoxData = null;
            }
            if (message.treasureBoxUser != null && message.hasOwnProperty("treasureBoxUser"))
                object.treasureBoxUser = $root.TikTok.TreasureBoxUser.toObject(message.treasureBoxUser, options);
            if (message.treasureBoxData != null && message.hasOwnProperty("treasureBoxData"))
                object.treasureBoxData = $root.TikTok.TreasureBoxData.toObject(message.treasureBoxData, options);
            return object;
        };

        /**
         * Converts this WebcastEnvelopeMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastEnvelopeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastEnvelopeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastEnvelopeMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastEnvelopeMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastEnvelopeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastEnvelopeMessage";
        };

        return WebcastEnvelopeMessage;
    })();

    TikTok.TreasureBoxUser = (function() {

        /**
         * Properties of a TreasureBoxUser.
         * @memberof TikTok
         * @interface ITreasureBoxUser
         * @property {TikTok.ITreasureBoxUser2|null} [user2] TreasureBoxUser user2
         */

        /**
         * Constructs a new TreasureBoxUser.
         * @memberof TikTok
         * @classdesc Represents a TreasureBoxUser.
         * @implements ITreasureBoxUser
         * @constructor
         * @param {TikTok.ITreasureBoxUser=} [properties] Properties to set
         */
        function TreasureBoxUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TreasureBoxUser user2.
         * @member {TikTok.ITreasureBoxUser2|null|undefined} user2
         * @memberof TikTok.TreasureBoxUser
         * @instance
         */
        TreasureBoxUser.prototype.user2 = null;

        /**
         * Creates a new TreasureBoxUser instance using the specified properties.
         * @function create
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {TikTok.ITreasureBoxUser=} [properties] Properties to set
         * @returns {TikTok.TreasureBoxUser} TreasureBoxUser instance
         */
        TreasureBoxUser.create = function create(properties) {
            return new TreasureBoxUser(properties);
        };

        /**
         * Encodes the specified TreasureBoxUser message. Does not implicitly {@link TikTok.TreasureBoxUser.verify|verify} messages.
         * @function encode
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {TikTok.ITreasureBoxUser} message TreasureBoxUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user2 != null && Object.hasOwnProperty.call(message, "user2"))
                $root.TikTok.TreasureBoxUser2.encode(message.user2, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TreasureBoxUser message, length delimited. Does not implicitly {@link TikTok.TreasureBoxUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {TikTok.ITreasureBoxUser} message TreasureBoxUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TreasureBoxUser message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.TreasureBoxUser} TreasureBoxUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.TreasureBoxUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 8: {
                        message.user2 = $root.TikTok.TreasureBoxUser2.decode(reader, reader.uint32());
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
         * Decodes a TreasureBoxUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.TreasureBoxUser} TreasureBoxUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TreasureBoxUser message.
         * @function verify
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TreasureBoxUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user2 != null && message.hasOwnProperty("user2")) {
                var error = $root.TikTok.TreasureBoxUser2.verify(message.user2);
                if (error)
                    return "user2." + error;
            }
            return null;
        };

        /**
         * Creates a TreasureBoxUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.TreasureBoxUser} TreasureBoxUser
         */
        TreasureBoxUser.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.TreasureBoxUser)
                return object;
            var message = new $root.TikTok.TreasureBoxUser();
            if (object.user2 != null) {
                if (typeof object.user2 !== "object")
                    throw TypeError(".TikTok.TreasureBoxUser.user2: object expected");
                message.user2 = $root.TikTok.TreasureBoxUser2.fromObject(object.user2);
            }
            return message;
        };

        /**
         * Creates a plain object from a TreasureBoxUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {TikTok.TreasureBoxUser} message TreasureBoxUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TreasureBoxUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user2 = null;
            if (message.user2 != null && message.hasOwnProperty("user2"))
                object.user2 = $root.TikTok.TreasureBoxUser2.toObject(message.user2, options);
            return object;
        };

        /**
         * Converts this TreasureBoxUser to JSON.
         * @function toJSON
         * @memberof TikTok.TreasureBoxUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TreasureBoxUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TreasureBoxUser
         * @function getTypeUrl
         * @memberof TikTok.TreasureBoxUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TreasureBoxUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.TreasureBoxUser";
        };

        return TreasureBoxUser;
    })();

    TikTok.TreasureBoxUser2 = (function() {

        /**
         * Properties of a TreasureBoxUser2.
         * @memberof TikTok
         * @interface ITreasureBoxUser2
         * @property {Array.<TikTok.ITreasureBoxUser3>|null} [user3] TreasureBoxUser2 user3
         */

        /**
         * Constructs a new TreasureBoxUser2.
         * @memberof TikTok
         * @classdesc Represents a TreasureBoxUser2.
         * @implements ITreasureBoxUser2
         * @constructor
         * @param {TikTok.ITreasureBoxUser2=} [properties] Properties to set
         */
        function TreasureBoxUser2(properties) {
            this.user3 = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TreasureBoxUser2 user3.
         * @member {Array.<TikTok.ITreasureBoxUser3>} user3
         * @memberof TikTok.TreasureBoxUser2
         * @instance
         */
        TreasureBoxUser2.prototype.user3 = $util.emptyArray;

        /**
         * Creates a new TreasureBoxUser2 instance using the specified properties.
         * @function create
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {TikTok.ITreasureBoxUser2=} [properties] Properties to set
         * @returns {TikTok.TreasureBoxUser2} TreasureBoxUser2 instance
         */
        TreasureBoxUser2.create = function create(properties) {
            return new TreasureBoxUser2(properties);
        };

        /**
         * Encodes the specified TreasureBoxUser2 message. Does not implicitly {@link TikTok.TreasureBoxUser2.verify|verify} messages.
         * @function encode
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {TikTok.ITreasureBoxUser2} message TreasureBoxUser2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user3 != null && message.user3.length)
                for (var i = 0; i < message.user3.length; ++i)
                    $root.TikTok.TreasureBoxUser3.encode(message.user3[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TreasureBoxUser2 message, length delimited. Does not implicitly {@link TikTok.TreasureBoxUser2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {TikTok.ITreasureBoxUser2} message TreasureBoxUser2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TreasureBoxUser2 message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.TreasureBoxUser2} TreasureBoxUser2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.TreasureBoxUser2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4: {
                        if (!(message.user3 && message.user3.length))
                            message.user3 = [];
                        message.user3.push($root.TikTok.TreasureBoxUser3.decode(reader, reader.uint32()));
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
         * Decodes a TreasureBoxUser2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.TreasureBoxUser2} TreasureBoxUser2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TreasureBoxUser2 message.
         * @function verify
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TreasureBoxUser2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user3 != null && message.hasOwnProperty("user3")) {
                if (!Array.isArray(message.user3))
                    return "user3: array expected";
                for (var i = 0; i < message.user3.length; ++i) {
                    var error = $root.TikTok.TreasureBoxUser3.verify(message.user3[i]);
                    if (error)
                        return "user3." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TreasureBoxUser2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.TreasureBoxUser2} TreasureBoxUser2
         */
        TreasureBoxUser2.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.TreasureBoxUser2)
                return object;
            var message = new $root.TikTok.TreasureBoxUser2();
            if (object.user3) {
                if (!Array.isArray(object.user3))
                    throw TypeError(".TikTok.TreasureBoxUser2.user3: array expected");
                message.user3 = [];
                for (var i = 0; i < object.user3.length; ++i) {
                    if (typeof object.user3[i] !== "object")
                        throw TypeError(".TikTok.TreasureBoxUser2.user3: object expected");
                    message.user3[i] = $root.TikTok.TreasureBoxUser3.fromObject(object.user3[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TreasureBoxUser2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {TikTok.TreasureBoxUser2} message TreasureBoxUser2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TreasureBoxUser2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.user3 = [];
            if (message.user3 && message.user3.length) {
                object.user3 = [];
                for (var j = 0; j < message.user3.length; ++j)
                    object.user3[j] = $root.TikTok.TreasureBoxUser3.toObject(message.user3[j], options);
            }
            return object;
        };

        /**
         * Converts this TreasureBoxUser2 to JSON.
         * @function toJSON
         * @memberof TikTok.TreasureBoxUser2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TreasureBoxUser2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TreasureBoxUser2
         * @function getTypeUrl
         * @memberof TikTok.TreasureBoxUser2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TreasureBoxUser2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.TreasureBoxUser2";
        };

        return TreasureBoxUser2;
    })();

    TikTok.TreasureBoxUser3 = (function() {

        /**
         * Properties of a TreasureBoxUser3.
         * @memberof TikTok
         * @interface ITreasureBoxUser3
         * @property {TikTok.ITreasureBoxUser4|null} [user4] TreasureBoxUser3 user4
         */

        /**
         * Constructs a new TreasureBoxUser3.
         * @memberof TikTok
         * @classdesc Represents a TreasureBoxUser3.
         * @implements ITreasureBoxUser3
         * @constructor
         * @param {TikTok.ITreasureBoxUser3=} [properties] Properties to set
         */
        function TreasureBoxUser3(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TreasureBoxUser3 user4.
         * @member {TikTok.ITreasureBoxUser4|null|undefined} user4
         * @memberof TikTok.TreasureBoxUser3
         * @instance
         */
        TreasureBoxUser3.prototype.user4 = null;

        /**
         * Creates a new TreasureBoxUser3 instance using the specified properties.
         * @function create
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {TikTok.ITreasureBoxUser3=} [properties] Properties to set
         * @returns {TikTok.TreasureBoxUser3} TreasureBoxUser3 instance
         */
        TreasureBoxUser3.create = function create(properties) {
            return new TreasureBoxUser3(properties);
        };

        /**
         * Encodes the specified TreasureBoxUser3 message. Does not implicitly {@link TikTok.TreasureBoxUser3.verify|verify} messages.
         * @function encode
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {TikTok.ITreasureBoxUser3} message TreasureBoxUser3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user4 != null && Object.hasOwnProperty.call(message, "user4"))
                $root.TikTok.TreasureBoxUser4.encode(message.user4, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TreasureBoxUser3 message, length delimited. Does not implicitly {@link TikTok.TreasureBoxUser3.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {TikTok.ITreasureBoxUser3} message TreasureBoxUser3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser3.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TreasureBoxUser3 message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.TreasureBoxUser3} TreasureBoxUser3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.TreasureBoxUser3();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 21: {
                        message.user4 = $root.TikTok.TreasureBoxUser4.decode(reader, reader.uint32());
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
         * Decodes a TreasureBoxUser3 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.TreasureBoxUser3} TreasureBoxUser3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser3.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TreasureBoxUser3 message.
         * @function verify
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TreasureBoxUser3.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user4 != null && message.hasOwnProperty("user4")) {
                var error = $root.TikTok.TreasureBoxUser4.verify(message.user4);
                if (error)
                    return "user4." + error;
            }
            return null;
        };

        /**
         * Creates a TreasureBoxUser3 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.TreasureBoxUser3} TreasureBoxUser3
         */
        TreasureBoxUser3.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.TreasureBoxUser3)
                return object;
            var message = new $root.TikTok.TreasureBoxUser3();
            if (object.user4 != null) {
                if (typeof object.user4 !== "object")
                    throw TypeError(".TikTok.TreasureBoxUser3.user4: object expected");
                message.user4 = $root.TikTok.TreasureBoxUser4.fromObject(object.user4);
            }
            return message;
        };

        /**
         * Creates a plain object from a TreasureBoxUser3 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {TikTok.TreasureBoxUser3} message TreasureBoxUser3
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TreasureBoxUser3.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user4 = null;
            if (message.user4 != null && message.hasOwnProperty("user4"))
                object.user4 = $root.TikTok.TreasureBoxUser4.toObject(message.user4, options);
            return object;
        };

        /**
         * Converts this TreasureBoxUser3 to JSON.
         * @function toJSON
         * @memberof TikTok.TreasureBoxUser3
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TreasureBoxUser3.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TreasureBoxUser3
         * @function getTypeUrl
         * @memberof TikTok.TreasureBoxUser3
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TreasureBoxUser3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.TreasureBoxUser3";
        };

        return TreasureBoxUser3;
    })();

    TikTok.TreasureBoxUser4 = (function() {

        /**
         * Properties of a TreasureBoxUser4.
         * @memberof TikTok
         * @interface ITreasureBoxUser4
         * @property {TikTok.IUser|null} [user] TreasureBoxUser4 user
         */

        /**
         * Constructs a new TreasureBoxUser4.
         * @memberof TikTok
         * @classdesc Represents a TreasureBoxUser4.
         * @implements ITreasureBoxUser4
         * @constructor
         * @param {TikTok.ITreasureBoxUser4=} [properties] Properties to set
         */
        function TreasureBoxUser4(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TreasureBoxUser4 user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.TreasureBoxUser4
         * @instance
         */
        TreasureBoxUser4.prototype.user = null;

        /**
         * Creates a new TreasureBoxUser4 instance using the specified properties.
         * @function create
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {TikTok.ITreasureBoxUser4=} [properties] Properties to set
         * @returns {TikTok.TreasureBoxUser4} TreasureBoxUser4 instance
         */
        TreasureBoxUser4.create = function create(properties) {
            return new TreasureBoxUser4(properties);
        };

        /**
         * Encodes the specified TreasureBoxUser4 message. Does not implicitly {@link TikTok.TreasureBoxUser4.verify|verify} messages.
         * @function encode
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {TikTok.ITreasureBoxUser4} message TreasureBoxUser4 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser4.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TreasureBoxUser4 message, length delimited. Does not implicitly {@link TikTok.TreasureBoxUser4.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {TikTok.ITreasureBoxUser4} message TreasureBoxUser4 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxUser4.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TreasureBoxUser4 message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.TreasureBoxUser4} TreasureBoxUser4
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser4.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.TreasureBoxUser4();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
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
         * Decodes a TreasureBoxUser4 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.TreasureBoxUser4} TreasureBoxUser4
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxUser4.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TreasureBoxUser4 message.
         * @function verify
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TreasureBoxUser4.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a TreasureBoxUser4 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.TreasureBoxUser4} TreasureBoxUser4
         */
        TreasureBoxUser4.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.TreasureBoxUser4)
                return object;
            var message = new $root.TikTok.TreasureBoxUser4();
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.TreasureBoxUser4.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a TreasureBoxUser4 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {TikTok.TreasureBoxUser4} message TreasureBoxUser4
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TreasureBoxUser4.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.user = null;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this TreasureBoxUser4 to JSON.
         * @function toJSON
         * @memberof TikTok.TreasureBoxUser4
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TreasureBoxUser4.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TreasureBoxUser4
         * @function getTypeUrl
         * @memberof TikTok.TreasureBoxUser4
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TreasureBoxUser4.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.TreasureBoxUser4";
        };

        return TreasureBoxUser4;
    })();

    TikTok.TreasureBoxData = (function() {

        /**
         * Properties of a TreasureBoxData.
         * @memberof TikTok
         * @interface ITreasureBoxData
         * @property {number|null} [coins] TreasureBoxData coins
         * @property {number|null} [canOpen] TreasureBoxData canOpen
         * @property {number|Long|null} [timestamp] TreasureBoxData timestamp
         */

        /**
         * Constructs a new TreasureBoxData.
         * @memberof TikTok
         * @classdesc Represents a TreasureBoxData.
         * @implements ITreasureBoxData
         * @constructor
         * @param {TikTok.ITreasureBoxData=} [properties] Properties to set
         */
        function TreasureBoxData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TreasureBoxData coins.
         * @member {number} coins
         * @memberof TikTok.TreasureBoxData
         * @instance
         */
        TreasureBoxData.prototype.coins = 0;

        /**
         * TreasureBoxData canOpen.
         * @member {number} canOpen
         * @memberof TikTok.TreasureBoxData
         * @instance
         */
        TreasureBoxData.prototype.canOpen = 0;

        /**
         * TreasureBoxData timestamp.
         * @member {number|Long} timestamp
         * @memberof TikTok.TreasureBoxData
         * @instance
         */
        TreasureBoxData.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TreasureBoxData instance using the specified properties.
         * @function create
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {TikTok.ITreasureBoxData=} [properties] Properties to set
         * @returns {TikTok.TreasureBoxData} TreasureBoxData instance
         */
        TreasureBoxData.create = function create(properties) {
            return new TreasureBoxData(properties);
        };

        /**
         * Encodes the specified TreasureBoxData message. Does not implicitly {@link TikTok.TreasureBoxData.verify|verify} messages.
         * @function encode
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {TikTok.ITreasureBoxData} message TreasureBoxData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coins != null && Object.hasOwnProperty.call(message, "coins"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.coins);
            if (message.canOpen != null && Object.hasOwnProperty.call(message, "canOpen"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.canOpen);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified TreasureBoxData message, length delimited. Does not implicitly {@link TikTok.TreasureBoxData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {TikTok.ITreasureBoxData} message TreasureBoxData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TreasureBoxData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TreasureBoxData message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.TreasureBoxData} TreasureBoxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.TreasureBoxData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 5: {
                        message.coins = reader.uint32();
                        break;
                    }
                case 6: {
                        message.canOpen = reader.uint32();
                        break;
                    }
                case 7: {
                        message.timestamp = reader.uint64();
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
         * Decodes a TreasureBoxData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.TreasureBoxData} TreasureBoxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TreasureBoxData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TreasureBoxData message.
         * @function verify
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TreasureBoxData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coins != null && message.hasOwnProperty("coins"))
                if (!$util.isInteger(message.coins))
                    return "coins: integer expected";
            if (message.canOpen != null && message.hasOwnProperty("canOpen"))
                if (!$util.isInteger(message.canOpen))
                    return "canOpen: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a TreasureBoxData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.TreasureBoxData} TreasureBoxData
         */
        TreasureBoxData.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.TreasureBoxData)
                return object;
            var message = new $root.TikTok.TreasureBoxData();
            if (object.coins != null)
                message.coins = object.coins >>> 0;
            if (object.canOpen != null)
                message.canOpen = object.canOpen >>> 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a TreasureBoxData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {TikTok.TreasureBoxData} message TreasureBoxData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TreasureBoxData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.coins = 0;
                object.canOpen = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.coins != null && message.hasOwnProperty("coins"))
                object.coins = message.coins;
            if (message.canOpen != null && message.hasOwnProperty("canOpen"))
                object.canOpen = message.canOpen;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            return object;
        };

        /**
         * Converts this TreasureBoxData to JSON.
         * @function toJSON
         * @memberof TikTok.TreasureBoxData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TreasureBoxData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for TreasureBoxData
         * @function getTypeUrl
         * @memberof TikTok.TreasureBoxData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TreasureBoxData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.TreasureBoxData";
        };

        return TreasureBoxData;
    })();

    TikTok.WebcastSubNotifyMessage = (function() {

        /**
         * Properties of a WebcastSubNotifyMessage.
         * @memberof TikTok
         * @interface IWebcastSubNotifyMessage
         * @property {TikTok.IWebcastMessageEvent|null} [event] WebcastSubNotifyMessage event
         * @property {TikTok.IUser|null} [user] WebcastSubNotifyMessage user
         * @property {number|null} [exhibitionType] WebcastSubNotifyMessage exhibitionType
         * @property {number|null} [subMonth] WebcastSubNotifyMessage subMonth
         * @property {number|null} [subscribeType] WebcastSubNotifyMessage subscribeType
         * @property {number|null} [oldSubscribeStatus] WebcastSubNotifyMessage oldSubscribeStatus
         * @property {number|null} [subscribingStatus] WebcastSubNotifyMessage subscribingStatus
         */

        /**
         * Constructs a new WebcastSubNotifyMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastSubNotifyMessage.
         * @implements IWebcastSubNotifyMessage
         * @constructor
         * @param {TikTok.IWebcastSubNotifyMessage=} [properties] Properties to set
         */
        function WebcastSubNotifyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastSubNotifyMessage event.
         * @member {TikTok.IWebcastMessageEvent|null|undefined} event
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         */
        WebcastSubNotifyMessage.prototype.event = null;

        /**
         * WebcastSubNotifyMessage user.
         * @member {TikTok.IUser|null|undefined} user
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         */
        WebcastSubNotifyMessage.prototype.user = null;

        /**
         * WebcastSubNotifyMessage exhibitionType.
         * @member {number} exhibitionType
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         */
        WebcastSubNotifyMessage.prototype.exhibitionType = 0;

        /**
         * WebcastSubNotifyMessage subMonth.
         * @member {number} subMonth
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         */
        WebcastSubNotifyMessage.prototype.subMonth = 0;

        /**
         * WebcastSubNotifyMessage subscribeType.
         * @member {number} subscribeType
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         */
        WebcastSubNotifyMessage.prototype.subscribeType = 0;

        /**
         * WebcastSubNotifyMessage oldSubscribeStatus.
         * @member {number} oldSubscribeStatus
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         */
        WebcastSubNotifyMessage.prototype.oldSubscribeStatus = 0;

        /**
         * WebcastSubNotifyMessage subscribingStatus.
         * @member {number} subscribingStatus
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         */
        WebcastSubNotifyMessage.prototype.subscribingStatus = 0;

        /**
         * Creates a new WebcastSubNotifyMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {TikTok.IWebcastSubNotifyMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastSubNotifyMessage} WebcastSubNotifyMessage instance
         */
        WebcastSubNotifyMessage.create = function create(properties) {
            return new WebcastSubNotifyMessage(properties);
        };

        /**
         * Encodes the specified WebcastSubNotifyMessage message. Does not implicitly {@link TikTok.WebcastSubNotifyMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {TikTok.IWebcastSubNotifyMessage} message WebcastSubNotifyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastSubNotifyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.TikTok.WebcastMessageEvent.encode(message.event, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.TikTok.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.exhibitionType != null && Object.hasOwnProperty.call(message, "exhibitionType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.exhibitionType);
            if (message.subMonth != null && Object.hasOwnProperty.call(message, "subMonth"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.subMonth);
            if (message.subscribeType != null && Object.hasOwnProperty.call(message, "subscribeType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.subscribeType);
            if (message.oldSubscribeStatus != null && Object.hasOwnProperty.call(message, "oldSubscribeStatus"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.oldSubscribeStatus);
            if (message.subscribingStatus != null && Object.hasOwnProperty.call(message, "subscribingStatus"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.subscribingStatus);
            return writer;
        };

        /**
         * Encodes the specified WebcastSubNotifyMessage message, length delimited. Does not implicitly {@link TikTok.WebcastSubNotifyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {TikTok.IWebcastSubNotifyMessage} message WebcastSubNotifyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastSubNotifyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastSubNotifyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastSubNotifyMessage} WebcastSubNotifyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastSubNotifyMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastSubNotifyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.event = $root.TikTok.WebcastMessageEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.user = $root.TikTok.User.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.exhibitionType = reader.int32();
                        break;
                    }
                case 4: {
                        message.subMonth = reader.int32();
                        break;
                    }
                case 5: {
                        message.subscribeType = reader.int32();
                        break;
                    }
                case 6: {
                        message.oldSubscribeStatus = reader.int32();
                        break;
                    }
                case 8: {
                        message.subscribingStatus = reader.int32();
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
         * Decodes a WebcastSubNotifyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastSubNotifyMessage} WebcastSubNotifyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastSubNotifyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastSubNotifyMessage message.
         * @function verify
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastSubNotifyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                var error = $root.TikTok.WebcastMessageEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.TikTok.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.exhibitionType != null && message.hasOwnProperty("exhibitionType"))
                if (!$util.isInteger(message.exhibitionType))
                    return "exhibitionType: integer expected";
            if (message.subMonth != null && message.hasOwnProperty("subMonth"))
                if (!$util.isInteger(message.subMonth))
                    return "subMonth: integer expected";
            if (message.subscribeType != null && message.hasOwnProperty("subscribeType"))
                if (!$util.isInteger(message.subscribeType))
                    return "subscribeType: integer expected";
            if (message.oldSubscribeStatus != null && message.hasOwnProperty("oldSubscribeStatus"))
                if (!$util.isInteger(message.oldSubscribeStatus))
                    return "oldSubscribeStatus: integer expected";
            if (message.subscribingStatus != null && message.hasOwnProperty("subscribingStatus"))
                if (!$util.isInteger(message.subscribingStatus))
                    return "subscribingStatus: integer expected";
            return null;
        };

        /**
         * Creates a WebcastSubNotifyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastSubNotifyMessage} WebcastSubNotifyMessage
         */
        WebcastSubNotifyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastSubNotifyMessage)
                return object;
            var message = new $root.TikTok.WebcastSubNotifyMessage();
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".TikTok.WebcastSubNotifyMessage.event: object expected");
                message.event = $root.TikTok.WebcastMessageEvent.fromObject(object.event);
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".TikTok.WebcastSubNotifyMessage.user: object expected");
                message.user = $root.TikTok.User.fromObject(object.user);
            }
            if (object.exhibitionType != null)
                message.exhibitionType = object.exhibitionType | 0;
            if (object.subMonth != null)
                message.subMonth = object.subMonth | 0;
            if (object.subscribeType != null)
                message.subscribeType = object.subscribeType | 0;
            if (object.oldSubscribeStatus != null)
                message.oldSubscribeStatus = object.oldSubscribeStatus | 0;
            if (object.subscribingStatus != null)
                message.subscribingStatus = object.subscribingStatus | 0;
            return message;
        };

        /**
         * Creates a plain object from a WebcastSubNotifyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {TikTok.WebcastSubNotifyMessage} message WebcastSubNotifyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastSubNotifyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.event = null;
                object.user = null;
                object.exhibitionType = 0;
                object.subMonth = 0;
                object.subscribeType = 0;
                object.oldSubscribeStatus = 0;
                object.subscribingStatus = 0;
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.TikTok.WebcastMessageEvent.toObject(message.event, options);
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.TikTok.User.toObject(message.user, options);
            if (message.exhibitionType != null && message.hasOwnProperty("exhibitionType"))
                object.exhibitionType = message.exhibitionType;
            if (message.subMonth != null && message.hasOwnProperty("subMonth"))
                object.subMonth = message.subMonth;
            if (message.subscribeType != null && message.hasOwnProperty("subscribeType"))
                object.subscribeType = message.subscribeType;
            if (message.oldSubscribeStatus != null && message.hasOwnProperty("oldSubscribeStatus"))
                object.oldSubscribeStatus = message.oldSubscribeStatus;
            if (message.subscribingStatus != null && message.hasOwnProperty("subscribingStatus"))
                object.subscribingStatus = message.subscribingStatus;
            return object;
        };

        /**
         * Converts this WebcastSubNotifyMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastSubNotifyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastSubNotifyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastSubNotifyMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastSubNotifyMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastSubNotifyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastSubNotifyMessage";
        };

        return WebcastSubNotifyMessage;
    })();

    TikTok.User = (function() {

        /**
         * Properties of a User.
         * @memberof TikTok
         * @interface IUser
         * @property {number|Long|null} [userId] User userId
         * @property {string|null} [nickname] User nickname
         * @property {TikTok.IProfilePicture|null} [profilePicture] User profilePicture
         * @property {string|null} [uniqueId] User uniqueId
         * @property {string|null} [secUid] User secUid
         * @property {TikTok.ISubscribeInfo|null} [subscribeInfo] User subscribeInfo
         * @property {Array.<TikTok.IBadgeStruct>|null} [badgeList] User badgeList
         * @property {TikTok.IFansClubInfo|null} [fansClubInfo] User fansClubInfo
         * @property {number|Long|null} [createTime] User createTime
         * @property {string|null} [bioDescription] User bioDescription
         * @property {TikTok.IFollowInfo|null} [followInfo] User followInfo
         */

        /**
         * Constructs a new User.
         * @memberof TikTok
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {TikTok.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.badgeList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User userId.
         * @member {number|Long} userId
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * User profilePicture.
         * @member {TikTok.IProfilePicture|null|undefined} profilePicture
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.profilePicture = null;

        /**
         * User uniqueId.
         * @member {string} uniqueId
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.uniqueId = "";

        /**
         * User secUid.
         * @member {string} secUid
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.secUid = "";

        /**
         * User subscribeInfo.
         * @member {TikTok.ISubscribeInfo|null|undefined} subscribeInfo
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.subscribeInfo = null;

        /**
         * User badgeList.
         * @member {Array.<TikTok.IBadgeStruct>} badgeList
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.badgeList = $util.emptyArray;

        /**
         * User fansClubInfo.
         * @member {TikTok.IFansClubInfo|null|undefined} fansClubInfo
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.fansClubInfo = null;

        /**
         * User createTime.
         * @member {number|Long} createTime
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.createTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * User bioDescription.
         * @member {string} bioDescription
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.bioDescription = "";

        /**
         * User followInfo.
         * @member {TikTok.IFollowInfo|null|undefined} followInfo
         * @memberof TikTok.User
         * @instance
         */
        User.prototype.followInfo = null;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof TikTok.User
         * @static
         * @param {TikTok.IUser=} [properties] Properties to set
         * @returns {TikTok.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link TikTok.User.verify|verify} messages.
         * @function encode
         * @memberof TikTok.User
         * @static
         * @param {TikTok.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            if (message.bioDescription != null && Object.hasOwnProperty.call(message, "bioDescription"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.bioDescription);
            if (message.profilePicture != null && Object.hasOwnProperty.call(message, "profilePicture"))
                $root.TikTok.ProfilePicture.encode(message.profilePicture, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.createTime != null && Object.hasOwnProperty.call(message, "createTime"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.createTime);
            if (message.followInfo != null && Object.hasOwnProperty.call(message, "followInfo"))
                $root.TikTok.FollowInfo.encode(message.followInfo, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.uniqueId != null && Object.hasOwnProperty.call(message, "uniqueId"))
                writer.uint32(/* id 38, wireType 2 =*/306).string(message.uniqueId);
            if (message.secUid != null && Object.hasOwnProperty.call(message, "secUid"))
                writer.uint32(/* id 46, wireType 2 =*/370).string(message.secUid);
            if (message.subscribeInfo != null && Object.hasOwnProperty.call(message, "subscribeInfo"))
                $root.TikTok.SubscribeInfo.encode(message.subscribeInfo, writer.uint32(/* id 63, wireType 2 =*/506).fork()).ldelim();
            if (message.badgeList != null && message.badgeList.length)
                for (var i = 0; i < message.badgeList.length; ++i)
                    $root.TikTok.BadgeStruct.encode(message.badgeList[i], writer.uint32(/* id 64, wireType 2 =*/514).fork()).ldelim();
            if (message.fansClubInfo != null && Object.hasOwnProperty.call(message, "fansClubInfo"))
                $root.TikTok.FansClubInfo.encode(message.fansClubInfo, writer.uint32(/* id 66, wireType 2 =*/530).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link TikTok.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.User
         * @static
         * @param {TikTok.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.nickname = reader.string();
                        break;
                    }
                case 9: {
                        message.profilePicture = $root.TikTok.ProfilePicture.decode(reader, reader.uint32());
                        break;
                    }
                case 38: {
                        message.uniqueId = reader.string();
                        break;
                    }
                case 46: {
                        message.secUid = reader.string();
                        break;
                    }
                case 63: {
                        message.subscribeInfo = $root.TikTok.SubscribeInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 64: {
                        if (!(message.badgeList && message.badgeList.length))
                            message.badgeList = [];
                        message.badgeList.push($root.TikTok.BadgeStruct.decode(reader, reader.uint32()));
                        break;
                    }
                case 66: {
                        message.fansClubInfo = $root.TikTok.FansClubInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.createTime = reader.uint64();
                        break;
                    }
                case 5: {
                        message.bioDescription = reader.string();
                        break;
                    }
                case 22: {
                        message.followInfo = $root.TikTok.FollowInfo.decode(reader, reader.uint32());
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
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof TikTok.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.profilePicture != null && message.hasOwnProperty("profilePicture")) {
                var error = $root.TikTok.ProfilePicture.verify(message.profilePicture);
                if (error)
                    return "profilePicture." + error;
            }
            if (message.uniqueId != null && message.hasOwnProperty("uniqueId"))
                if (!$util.isString(message.uniqueId))
                    return "uniqueId: string expected";
            if (message.secUid != null && message.hasOwnProperty("secUid"))
                if (!$util.isString(message.secUid))
                    return "secUid: string expected";
            if (message.subscribeInfo != null && message.hasOwnProperty("subscribeInfo")) {
                var error = $root.TikTok.SubscribeInfo.verify(message.subscribeInfo);
                if (error)
                    return "subscribeInfo." + error;
            }
            if (message.badgeList != null && message.hasOwnProperty("badgeList")) {
                if (!Array.isArray(message.badgeList))
                    return "badgeList: array expected";
                for (var i = 0; i < message.badgeList.length; ++i) {
                    var error = $root.TikTok.BadgeStruct.verify(message.badgeList[i]);
                    if (error)
                        return "badgeList." + error;
                }
            }
            if (message.fansClubInfo != null && message.hasOwnProperty("fansClubInfo")) {
                var error = $root.TikTok.FansClubInfo.verify(message.fansClubInfo);
                if (error)
                    return "fansClubInfo." + error;
            }
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (!$util.isInteger(message.createTime) && !(message.createTime && $util.isInteger(message.createTime.low) && $util.isInteger(message.createTime.high)))
                    return "createTime: integer|Long expected";
            if (message.bioDescription != null && message.hasOwnProperty("bioDescription"))
                if (!$util.isString(message.bioDescription))
                    return "bioDescription: string expected";
            if (message.followInfo != null && message.hasOwnProperty("followInfo")) {
                var error = $root.TikTok.FollowInfo.verify(message.followInfo);
                if (error)
                    return "followInfo." + error;
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.User)
                return object;
            var message = new $root.TikTok.User();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.profilePicture != null) {
                if (typeof object.profilePicture !== "object")
                    throw TypeError(".TikTok.User.profilePicture: object expected");
                message.profilePicture = $root.TikTok.ProfilePicture.fromObject(object.profilePicture);
            }
            if (object.uniqueId != null)
                message.uniqueId = String(object.uniqueId);
            if (object.secUid != null)
                message.secUid = String(object.secUid);
            if (object.subscribeInfo != null) {
                if (typeof object.subscribeInfo !== "object")
                    throw TypeError(".TikTok.User.subscribeInfo: object expected");
                message.subscribeInfo = $root.TikTok.SubscribeInfo.fromObject(object.subscribeInfo);
            }
            if (object.badgeList) {
                if (!Array.isArray(object.badgeList))
                    throw TypeError(".TikTok.User.badgeList: array expected");
                message.badgeList = [];
                for (var i = 0; i < object.badgeList.length; ++i) {
                    if (typeof object.badgeList[i] !== "object")
                        throw TypeError(".TikTok.User.badgeList: object expected");
                    message.badgeList[i] = $root.TikTok.BadgeStruct.fromObject(object.badgeList[i]);
                }
            }
            if (object.fansClubInfo != null) {
                if (typeof object.fansClubInfo !== "object")
                    throw TypeError(".TikTok.User.fansClubInfo: object expected");
                message.fansClubInfo = $root.TikTok.FansClubInfo.fromObject(object.fansClubInfo);
            }
            if (object.createTime != null)
                if ($util.Long)
                    (message.createTime = $util.Long.fromValue(object.createTime)).unsigned = true;
                else if (typeof object.createTime === "string")
                    message.createTime = parseInt(object.createTime, 10);
                else if (typeof object.createTime === "number")
                    message.createTime = object.createTime;
                else if (typeof object.createTime === "object")
                    message.createTime = new $util.LongBits(object.createTime.low >>> 0, object.createTime.high >>> 0).toNumber(true);
            if (object.bioDescription != null)
                message.bioDescription = String(object.bioDescription);
            if (object.followInfo != null) {
                if (typeof object.followInfo !== "object")
                    throw TypeError(".TikTok.User.followInfo: object expected");
                message.followInfo = $root.TikTok.FollowInfo.fromObject(object.followInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.User
         * @static
         * @param {TikTok.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.badgeList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.bioDescription = "";
                object.profilePicture = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.createTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createTime = options.longs === String ? "0" : 0;
                object.followInfo = null;
                object.uniqueId = "";
                object.secUid = "";
                object.subscribeInfo = null;
                object.fansClubInfo = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.bioDescription != null && message.hasOwnProperty("bioDescription"))
                object.bioDescription = message.bioDescription;
            if (message.profilePicture != null && message.hasOwnProperty("profilePicture"))
                object.profilePicture = $root.TikTok.ProfilePicture.toObject(message.profilePicture, options);
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                if (typeof message.createTime === "number")
                    object.createTime = options.longs === String ? String(message.createTime) : message.createTime;
                else
                    object.createTime = options.longs === String ? $util.Long.prototype.toString.call(message.createTime) : options.longs === Number ? new $util.LongBits(message.createTime.low >>> 0, message.createTime.high >>> 0).toNumber(true) : message.createTime;
            if (message.followInfo != null && message.hasOwnProperty("followInfo"))
                object.followInfo = $root.TikTok.FollowInfo.toObject(message.followInfo, options);
            if (message.uniqueId != null && message.hasOwnProperty("uniqueId"))
                object.uniqueId = message.uniqueId;
            if (message.secUid != null && message.hasOwnProperty("secUid"))
                object.secUid = message.secUid;
            if (message.subscribeInfo != null && message.hasOwnProperty("subscribeInfo"))
                object.subscribeInfo = $root.TikTok.SubscribeInfo.toObject(message.subscribeInfo, options);
            if (message.badgeList && message.badgeList.length) {
                object.badgeList = [];
                for (var j = 0; j < message.badgeList.length; ++j)
                    object.badgeList[j] = $root.TikTok.BadgeStruct.toObject(message.badgeList[j], options);
            }
            if (message.fansClubInfo != null && message.hasOwnProperty("fansClubInfo"))
                object.fansClubInfo = $root.TikTok.FansClubInfo.toObject(message.fansClubInfo, options);
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof TikTok.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof TikTok.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.User";
        };

        return User;
    })();

    TikTok.FollowInfo = (function() {

        /**
         * Properties of a FollowInfo.
         * @memberof TikTok
         * @interface IFollowInfo
         * @property {number|null} [followingCount] FollowInfo followingCount
         * @property {number|null} [followerCount] FollowInfo followerCount
         * @property {number|null} [followStatus] FollowInfo followStatus
         * @property {number|null} [pushStatus] FollowInfo pushStatus
         */

        /**
         * Constructs a new FollowInfo.
         * @memberof TikTok
         * @classdesc Represents a FollowInfo.
         * @implements IFollowInfo
         * @constructor
         * @param {TikTok.IFollowInfo=} [properties] Properties to set
         */
        function FollowInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FollowInfo followingCount.
         * @member {number} followingCount
         * @memberof TikTok.FollowInfo
         * @instance
         */
        FollowInfo.prototype.followingCount = 0;

        /**
         * FollowInfo followerCount.
         * @member {number} followerCount
         * @memberof TikTok.FollowInfo
         * @instance
         */
        FollowInfo.prototype.followerCount = 0;

        /**
         * FollowInfo followStatus.
         * @member {number} followStatus
         * @memberof TikTok.FollowInfo
         * @instance
         */
        FollowInfo.prototype.followStatus = 0;

        /**
         * FollowInfo pushStatus.
         * @member {number} pushStatus
         * @memberof TikTok.FollowInfo
         * @instance
         */
        FollowInfo.prototype.pushStatus = 0;

        /**
         * Creates a new FollowInfo instance using the specified properties.
         * @function create
         * @memberof TikTok.FollowInfo
         * @static
         * @param {TikTok.IFollowInfo=} [properties] Properties to set
         * @returns {TikTok.FollowInfo} FollowInfo instance
         */
        FollowInfo.create = function create(properties) {
            return new FollowInfo(properties);
        };

        /**
         * Encodes the specified FollowInfo message. Does not implicitly {@link TikTok.FollowInfo.verify|verify} messages.
         * @function encode
         * @memberof TikTok.FollowInfo
         * @static
         * @param {TikTok.IFollowInfo} message FollowInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FollowInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.followingCount != null && Object.hasOwnProperty.call(message, "followingCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.followingCount);
            if (message.followerCount != null && Object.hasOwnProperty.call(message, "followerCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.followerCount);
            if (message.followStatus != null && Object.hasOwnProperty.call(message, "followStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.followStatus);
            if (message.pushStatus != null && Object.hasOwnProperty.call(message, "pushStatus"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pushStatus);
            return writer;
        };

        /**
         * Encodes the specified FollowInfo message, length delimited. Does not implicitly {@link TikTok.FollowInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.FollowInfo
         * @static
         * @param {TikTok.IFollowInfo} message FollowInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FollowInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FollowInfo message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.FollowInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.FollowInfo} FollowInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FollowInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.FollowInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.followingCount = reader.int32();
                        break;
                    }
                case 2: {
                        message.followerCount = reader.int32();
                        break;
                    }
                case 3: {
                        message.followStatus = reader.int32();
                        break;
                    }
                case 4: {
                        message.pushStatus = reader.int32();
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
         * Decodes a FollowInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.FollowInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.FollowInfo} FollowInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FollowInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FollowInfo message.
         * @function verify
         * @memberof TikTok.FollowInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FollowInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.followingCount != null && message.hasOwnProperty("followingCount"))
                if (!$util.isInteger(message.followingCount))
                    return "followingCount: integer expected";
            if (message.followerCount != null && message.hasOwnProperty("followerCount"))
                if (!$util.isInteger(message.followerCount))
                    return "followerCount: integer expected";
            if (message.followStatus != null && message.hasOwnProperty("followStatus"))
                if (!$util.isInteger(message.followStatus))
                    return "followStatus: integer expected";
            if (message.pushStatus != null && message.hasOwnProperty("pushStatus"))
                if (!$util.isInteger(message.pushStatus))
                    return "pushStatus: integer expected";
            return null;
        };

        /**
         * Creates a FollowInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.FollowInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.FollowInfo} FollowInfo
         */
        FollowInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.FollowInfo)
                return object;
            var message = new $root.TikTok.FollowInfo();
            if (object.followingCount != null)
                message.followingCount = object.followingCount | 0;
            if (object.followerCount != null)
                message.followerCount = object.followerCount | 0;
            if (object.followStatus != null)
                message.followStatus = object.followStatus | 0;
            if (object.pushStatus != null)
                message.pushStatus = object.pushStatus | 0;
            return message;
        };

        /**
         * Creates a plain object from a FollowInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.FollowInfo
         * @static
         * @param {TikTok.FollowInfo} message FollowInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FollowInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.followingCount = 0;
                object.followerCount = 0;
                object.followStatus = 0;
                object.pushStatus = 0;
            }
            if (message.followingCount != null && message.hasOwnProperty("followingCount"))
                object.followingCount = message.followingCount;
            if (message.followerCount != null && message.hasOwnProperty("followerCount"))
                object.followerCount = message.followerCount;
            if (message.followStatus != null && message.hasOwnProperty("followStatus"))
                object.followStatus = message.followStatus;
            if (message.pushStatus != null && message.hasOwnProperty("pushStatus"))
                object.pushStatus = message.pushStatus;
            return object;
        };

        /**
         * Converts this FollowInfo to JSON.
         * @function toJSON
         * @memberof TikTok.FollowInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FollowInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FollowInfo
         * @function getTypeUrl
         * @memberof TikTok.FollowInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FollowInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.FollowInfo";
        };

        return FollowInfo;
    })();

    TikTok.LinkUser = (function() {

        /**
         * Properties of a LinkUser.
         * @memberof TikTok
         * @interface ILinkUser
         * @property {number|Long|null} [userId] LinkUser userId
         * @property {string|null} [nickname] LinkUser nickname
         * @property {TikTok.IProfilePicture|null} [profilePicture] LinkUser profilePicture
         * @property {string|null} [uniqueId] LinkUser uniqueId
         */

        /**
         * Constructs a new LinkUser.
         * @memberof TikTok
         * @classdesc Represents a LinkUser.
         * @implements ILinkUser
         * @constructor
         * @param {TikTok.ILinkUser=} [properties] Properties to set
         */
        function LinkUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LinkUser userId.
         * @member {number|Long} userId
         * @memberof TikTok.LinkUser
         * @instance
         */
        LinkUser.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LinkUser nickname.
         * @member {string} nickname
         * @memberof TikTok.LinkUser
         * @instance
         */
        LinkUser.prototype.nickname = "";

        /**
         * LinkUser profilePicture.
         * @member {TikTok.IProfilePicture|null|undefined} profilePicture
         * @memberof TikTok.LinkUser
         * @instance
         */
        LinkUser.prototype.profilePicture = null;

        /**
         * LinkUser uniqueId.
         * @member {string} uniqueId
         * @memberof TikTok.LinkUser
         * @instance
         */
        LinkUser.prototype.uniqueId = "";

        /**
         * Creates a new LinkUser instance using the specified properties.
         * @function create
         * @memberof TikTok.LinkUser
         * @static
         * @param {TikTok.ILinkUser=} [properties] Properties to set
         * @returns {TikTok.LinkUser} LinkUser instance
         */
        LinkUser.create = function create(properties) {
            return new LinkUser(properties);
        };

        /**
         * Encodes the specified LinkUser message. Does not implicitly {@link TikTok.LinkUser.verify|verify} messages.
         * @function encode
         * @memberof TikTok.LinkUser
         * @static
         * @param {TikTok.ILinkUser} message LinkUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
            if (message.profilePicture != null && Object.hasOwnProperty.call(message, "profilePicture"))
                $root.TikTok.ProfilePicture.encode(message.profilePicture, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.uniqueId != null && Object.hasOwnProperty.call(message, "uniqueId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.uniqueId);
            return writer;
        };

        /**
         * Encodes the specified LinkUser message, length delimited. Does not implicitly {@link TikTok.LinkUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.LinkUser
         * @static
         * @param {TikTok.ILinkUser} message LinkUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LinkUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LinkUser message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.LinkUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.LinkUser} LinkUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkUser.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.LinkUser();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.nickname = reader.string();
                        break;
                    }
                case 3: {
                        message.profilePicture = $root.TikTok.ProfilePicture.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.uniqueId = reader.string();
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
         * Decodes a LinkUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.LinkUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.LinkUser} LinkUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LinkUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LinkUser message.
         * @function verify
         * @memberof TikTok.LinkUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LinkUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.profilePicture != null && message.hasOwnProperty("profilePicture")) {
                var error = $root.TikTok.ProfilePicture.verify(message.profilePicture);
                if (error)
                    return "profilePicture." + error;
            }
            if (message.uniqueId != null && message.hasOwnProperty("uniqueId"))
                if (!$util.isString(message.uniqueId))
                    return "uniqueId: string expected";
            return null;
        };

        /**
         * Creates a LinkUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.LinkUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.LinkUser} LinkUser
         */
        LinkUser.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.LinkUser)
                return object;
            var message = new $root.TikTok.LinkUser();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.profilePicture != null) {
                if (typeof object.profilePicture !== "object")
                    throw TypeError(".TikTok.LinkUser.profilePicture: object expected");
                message.profilePicture = $root.TikTok.ProfilePicture.fromObject(object.profilePicture);
            }
            if (object.uniqueId != null)
                message.uniqueId = String(object.uniqueId);
            return message;
        };

        /**
         * Creates a plain object from a LinkUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.LinkUser
         * @static
         * @param {TikTok.LinkUser} message LinkUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LinkUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.profilePicture = null;
                object.uniqueId = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.profilePicture != null && message.hasOwnProperty("profilePicture"))
                object.profilePicture = $root.TikTok.ProfilePicture.toObject(message.profilePicture, options);
            if (message.uniqueId != null && message.hasOwnProperty("uniqueId"))
                object.uniqueId = message.uniqueId;
            return object;
        };

        /**
         * Converts this LinkUser to JSON.
         * @function toJSON
         * @memberof TikTok.LinkUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LinkUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LinkUser
         * @function getTypeUrl
         * @memberof TikTok.LinkUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LinkUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.LinkUser";
        };

        return LinkUser;
    })();

    TikTok.ProfilePicture = (function() {

        /**
         * Properties of a ProfilePicture.
         * @memberof TikTok
         * @interface IProfilePicture
         * @property {Array.<string>|null} [urls] ProfilePicture urls
         */

        /**
         * Constructs a new ProfilePicture.
         * @memberof TikTok
         * @classdesc Represents a ProfilePicture.
         * @implements IProfilePicture
         * @constructor
         * @param {TikTok.IProfilePicture=} [properties] Properties to set
         */
        function ProfilePicture(properties) {
            this.urls = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProfilePicture urls.
         * @member {Array.<string>} urls
         * @memberof TikTok.ProfilePicture
         * @instance
         */
        ProfilePicture.prototype.urls = $util.emptyArray;

        /**
         * Creates a new ProfilePicture instance using the specified properties.
         * @function create
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {TikTok.IProfilePicture=} [properties] Properties to set
         * @returns {TikTok.ProfilePicture} ProfilePicture instance
         */
        ProfilePicture.create = function create(properties) {
            return new ProfilePicture(properties);
        };

        /**
         * Encodes the specified ProfilePicture message. Does not implicitly {@link TikTok.ProfilePicture.verify|verify} messages.
         * @function encode
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {TikTok.IProfilePicture} message ProfilePicture message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfilePicture.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.urls != null && message.urls.length)
                for (var i = 0; i < message.urls.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.urls[i]);
            return writer;
        };

        /**
         * Encodes the specified ProfilePicture message, length delimited. Does not implicitly {@link TikTok.ProfilePicture.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {TikTok.IProfilePicture} message ProfilePicture message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProfilePicture.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProfilePicture message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.ProfilePicture} ProfilePicture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfilePicture.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.ProfilePicture();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.urls && message.urls.length))
                            message.urls = [];
                        message.urls.push(reader.string());
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
         * Decodes a ProfilePicture message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.ProfilePicture} ProfilePicture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProfilePicture.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProfilePicture message.
         * @function verify
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProfilePicture.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.urls != null && message.hasOwnProperty("urls")) {
                if (!Array.isArray(message.urls))
                    return "urls: array expected";
                for (var i = 0; i < message.urls.length; ++i)
                    if (!$util.isString(message.urls[i]))
                        return "urls: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ProfilePicture message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.ProfilePicture} ProfilePicture
         */
        ProfilePicture.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.ProfilePicture)
                return object;
            var message = new $root.TikTok.ProfilePicture();
            if (object.urls) {
                if (!Array.isArray(object.urls))
                    throw TypeError(".TikTok.ProfilePicture.urls: array expected");
                message.urls = [];
                for (var i = 0; i < object.urls.length; ++i)
                    message.urls[i] = String(object.urls[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProfilePicture message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {TikTok.ProfilePicture} message ProfilePicture
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProfilePicture.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.urls = [];
            if (message.urls && message.urls.length) {
                object.urls = [];
                for (var j = 0; j < message.urls.length; ++j)
                    object.urls[j] = message.urls[j];
            }
            return object;
        };

        /**
         * Converts this ProfilePicture to JSON.
         * @function toJSON
         * @memberof TikTok.ProfilePicture
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProfilePicture.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProfilePicture
         * @function getTypeUrl
         * @memberof TikTok.ProfilePicture
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProfilePicture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.ProfilePicture";
        };

        return ProfilePicture;
    })();

    TikTok.PrivilegeLogExtra = (function() {

        /**
         * Properties of a PrivilegeLogExtra.
         * @memberof TikTok
         * @interface IPrivilegeLogExtra
         * @property {string|null} [privilegeId] PrivilegeLogExtra privilegeId
         * @property {string|null} [level] PrivilegeLogExtra level
         */

        /**
         * Constructs a new PrivilegeLogExtra.
         * @memberof TikTok
         * @classdesc Represents a PrivilegeLogExtra.
         * @implements IPrivilegeLogExtra
         * @constructor
         * @param {TikTok.IPrivilegeLogExtra=} [properties] Properties to set
         */
        function PrivilegeLogExtra(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivilegeLogExtra privilegeId.
         * @member {string} privilegeId
         * @memberof TikTok.PrivilegeLogExtra
         * @instance
         */
        PrivilegeLogExtra.prototype.privilegeId = "";

        /**
         * PrivilegeLogExtra level.
         * @member {string} level
         * @memberof TikTok.PrivilegeLogExtra
         * @instance
         */
        PrivilegeLogExtra.prototype.level = "";

        /**
         * Creates a new PrivilegeLogExtra instance using the specified properties.
         * @function create
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {TikTok.IPrivilegeLogExtra=} [properties] Properties to set
         * @returns {TikTok.PrivilegeLogExtra} PrivilegeLogExtra instance
         */
        PrivilegeLogExtra.create = function create(properties) {
            return new PrivilegeLogExtra(properties);
        };

        /**
         * Encodes the specified PrivilegeLogExtra message. Does not implicitly {@link TikTok.PrivilegeLogExtra.verify|verify} messages.
         * @function encode
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {TikTok.IPrivilegeLogExtra} message PrivilegeLogExtra message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivilegeLogExtra.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.privilegeId != null && Object.hasOwnProperty.call(message, "privilegeId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.privilegeId);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.level);
            return writer;
        };

        /**
         * Encodes the specified PrivilegeLogExtra message, length delimited. Does not implicitly {@link TikTok.PrivilegeLogExtra.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {TikTok.IPrivilegeLogExtra} message PrivilegeLogExtra message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivilegeLogExtra.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivilegeLogExtra message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.PrivilegeLogExtra} PrivilegeLogExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivilegeLogExtra.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.PrivilegeLogExtra();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.privilegeId = reader.string();
                        break;
                    }
                case 5: {
                        message.level = reader.string();
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
         * Decodes a PrivilegeLogExtra message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.PrivilegeLogExtra} PrivilegeLogExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivilegeLogExtra.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivilegeLogExtra message.
         * @function verify
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivilegeLogExtra.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.privilegeId != null && message.hasOwnProperty("privilegeId"))
                if (!$util.isString(message.privilegeId))
                    return "privilegeId: string expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isString(message.level))
                    return "level: string expected";
            return null;
        };

        /**
         * Creates a PrivilegeLogExtra message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.PrivilegeLogExtra} PrivilegeLogExtra
         */
        PrivilegeLogExtra.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.PrivilegeLogExtra)
                return object;
            var message = new $root.TikTok.PrivilegeLogExtra();
            if (object.privilegeId != null)
                message.privilegeId = String(object.privilegeId);
            if (object.level != null)
                message.level = String(object.level);
            return message;
        };

        /**
         * Creates a plain object from a PrivilegeLogExtra message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {TikTok.PrivilegeLogExtra} message PrivilegeLogExtra
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivilegeLogExtra.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.privilegeId = "";
                object.level = "";
            }
            if (message.privilegeId != null && message.hasOwnProperty("privilegeId"))
                object.privilegeId = message.privilegeId;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            return object;
        };

        /**
         * Converts this PrivilegeLogExtra to JSON.
         * @function toJSON
         * @memberof TikTok.PrivilegeLogExtra
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrivilegeLogExtra.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrivilegeLogExtra
         * @function getTypeUrl
         * @memberof TikTok.PrivilegeLogExtra
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrivilegeLogExtra.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.PrivilegeLogExtra";
        };

        return PrivilegeLogExtra;
    })();

    TikTok.UserBadge = (function() {

        /**
         * Properties of a UserBadge.
         * @memberof TikTok
         * @interface IUserBadge
         * @property {string|null} [type] UserBadge type
         * @property {string|null} [name] UserBadge name
         */

        /**
         * Constructs a new UserBadge.
         * @memberof TikTok
         * @classdesc Represents a UserBadge.
         * @implements IUserBadge
         * @constructor
         * @param {TikTok.IUserBadge=} [properties] Properties to set
         */
        function UserBadge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserBadge type.
         * @member {string} type
         * @memberof TikTok.UserBadge
         * @instance
         */
        UserBadge.prototype.type = "";

        /**
         * UserBadge name.
         * @member {string} name
         * @memberof TikTok.UserBadge
         * @instance
         */
        UserBadge.prototype.name = "";

        /**
         * Creates a new UserBadge instance using the specified properties.
         * @function create
         * @memberof TikTok.UserBadge
         * @static
         * @param {TikTok.IUserBadge=} [properties] Properties to set
         * @returns {TikTok.UserBadge} UserBadge instance
         */
        UserBadge.create = function create(properties) {
            return new UserBadge(properties);
        };

        /**
         * Encodes the specified UserBadge message. Does not implicitly {@link TikTok.UserBadge.verify|verify} messages.
         * @function encode
         * @memberof TikTok.UserBadge
         * @static
         * @param {TikTok.IUserBadge} message UserBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBadge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified UserBadge message, length delimited. Does not implicitly {@link TikTok.UserBadge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.UserBadge
         * @static
         * @param {TikTok.IUserBadge} message UserBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserBadge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserBadge message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.UserBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.UserBadge} UserBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBadge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.UserBadge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.type = reader.string();
                        break;
                    }
                case 3: {
                        message.name = reader.string();
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
         * Decodes a UserBadge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.UserBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.UserBadge} UserBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserBadge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserBadge message.
         * @function verify
         * @memberof TikTok.UserBadge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserBadge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a UserBadge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.UserBadge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.UserBadge} UserBadge
         */
        UserBadge.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.UserBadge)
                return object;
            var message = new $root.TikTok.UserBadge();
            if (object.type != null)
                message.type = String(object.type);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a UserBadge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.UserBadge
         * @static
         * @param {TikTok.UserBadge} message UserBadge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserBadge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.name = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this UserBadge to JSON.
         * @function toJSON
         * @memberof TikTok.UserBadge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserBadge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserBadge
         * @function getTypeUrl
         * @memberof TikTok.UserBadge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.UserBadge";
        };

        return UserBadge;
    })();

    TikTok.UserImageBadge = (function() {

        /**
         * Properties of a UserImageBadge.
         * @memberof TikTok
         * @interface IUserImageBadge
         * @property {number|null} [displayType] UserImageBadge displayType
         * @property {TikTok.IUserImageBadgeImage|null} [image] UserImageBadge image
         */

        /**
         * Constructs a new UserImageBadge.
         * @memberof TikTok
         * @classdesc Represents a UserImageBadge.
         * @implements IUserImageBadge
         * @constructor
         * @param {TikTok.IUserImageBadge=} [properties] Properties to set
         */
        function UserImageBadge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserImageBadge displayType.
         * @member {number} displayType
         * @memberof TikTok.UserImageBadge
         * @instance
         */
        UserImageBadge.prototype.displayType = 0;

        /**
         * UserImageBadge image.
         * @member {TikTok.IUserImageBadgeImage|null|undefined} image
         * @memberof TikTok.UserImageBadge
         * @instance
         */
        UserImageBadge.prototype.image = null;

        /**
         * Creates a new UserImageBadge instance using the specified properties.
         * @function create
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {TikTok.IUserImageBadge=} [properties] Properties to set
         * @returns {TikTok.UserImageBadge} UserImageBadge instance
         */
        UserImageBadge.create = function create(properties) {
            return new UserImageBadge(properties);
        };

        /**
         * Encodes the specified UserImageBadge message. Does not implicitly {@link TikTok.UserImageBadge.verify|verify} messages.
         * @function encode
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {TikTok.IUserImageBadge} message UserImageBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserImageBadge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayType != null && Object.hasOwnProperty.call(message, "displayType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.displayType);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                $root.TikTok.UserImageBadgeImage.encode(message.image, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserImageBadge message, length delimited. Does not implicitly {@link TikTok.UserImageBadge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {TikTok.IUserImageBadge} message UserImageBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserImageBadge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserImageBadge message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.UserImageBadge} UserImageBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserImageBadge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.UserImageBadge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.displayType = reader.int32();
                        break;
                    }
                case 2: {
                        message.image = $root.TikTok.UserImageBadgeImage.decode(reader, reader.uint32());
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
         * Decodes a UserImageBadge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.UserImageBadge} UserImageBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserImageBadge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserImageBadge message.
         * @function verify
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserImageBadge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.displayType != null && message.hasOwnProperty("displayType"))
                if (!$util.isInteger(message.displayType))
                    return "displayType: integer expected";
            if (message.image != null && message.hasOwnProperty("image")) {
                var error = $root.TikTok.UserImageBadgeImage.verify(message.image);
                if (error)
                    return "image." + error;
            }
            return null;
        };

        /**
         * Creates a UserImageBadge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.UserImageBadge} UserImageBadge
         */
        UserImageBadge.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.UserImageBadge)
                return object;
            var message = new $root.TikTok.UserImageBadge();
            if (object.displayType != null)
                message.displayType = object.displayType | 0;
            if (object.image != null) {
                if (typeof object.image !== "object")
                    throw TypeError(".TikTok.UserImageBadge.image: object expected");
                message.image = $root.TikTok.UserImageBadgeImage.fromObject(object.image);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserImageBadge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {TikTok.UserImageBadge} message UserImageBadge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserImageBadge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.displayType = 0;
                object.image = null;
            }
            if (message.displayType != null && message.hasOwnProperty("displayType"))
                object.displayType = message.displayType;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = $root.TikTok.UserImageBadgeImage.toObject(message.image, options);
            return object;
        };

        /**
         * Converts this UserImageBadge to JSON.
         * @function toJSON
         * @memberof TikTok.UserImageBadge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserImageBadge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserImageBadge
         * @function getTypeUrl
         * @memberof TikTok.UserImageBadge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserImageBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.UserImageBadge";
        };

        return UserImageBadge;
    })();

    TikTok.UserImageBadgeImage = (function() {

        /**
         * Properties of a UserImageBadgeImage.
         * @memberof TikTok
         * @interface IUserImageBadgeImage
         * @property {string|null} [url] UserImageBadgeImage url
         */

        /**
         * Constructs a new UserImageBadgeImage.
         * @memberof TikTok
         * @classdesc Represents a UserImageBadgeImage.
         * @implements IUserImageBadgeImage
         * @constructor
         * @param {TikTok.IUserImageBadgeImage=} [properties] Properties to set
         */
        function UserImageBadgeImage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserImageBadgeImage url.
         * @member {string} url
         * @memberof TikTok.UserImageBadgeImage
         * @instance
         */
        UserImageBadgeImage.prototype.url = "";

        /**
         * Creates a new UserImageBadgeImage instance using the specified properties.
         * @function create
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {TikTok.IUserImageBadgeImage=} [properties] Properties to set
         * @returns {TikTok.UserImageBadgeImage} UserImageBadgeImage instance
         */
        UserImageBadgeImage.create = function create(properties) {
            return new UserImageBadgeImage(properties);
        };

        /**
         * Encodes the specified UserImageBadgeImage message. Does not implicitly {@link TikTok.UserImageBadgeImage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {TikTok.IUserImageBadgeImage} message UserImageBadgeImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserImageBadgeImage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified UserImageBadgeImage message, length delimited. Does not implicitly {@link TikTok.UserImageBadgeImage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {TikTok.IUserImageBadgeImage} message UserImageBadgeImage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserImageBadgeImage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserImageBadgeImage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.UserImageBadgeImage} UserImageBadgeImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserImageBadgeImage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.UserImageBadgeImage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.url = reader.string();
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
         * Decodes a UserImageBadgeImage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.UserImageBadgeImage} UserImageBadgeImage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserImageBadgeImage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserImageBadgeImage message.
         * @function verify
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserImageBadgeImage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a UserImageBadgeImage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.UserImageBadgeImage} UserImageBadgeImage
         */
        UserImageBadgeImage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.UserImageBadgeImage)
                return object;
            var message = new $root.TikTok.UserImageBadgeImage();
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a UserImageBadgeImage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {TikTok.UserImageBadgeImage} message UserImageBadgeImage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserImageBadgeImage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.url = "";
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this UserImageBadgeImage to JSON.
         * @function toJSON
         * @memberof TikTok.UserImageBadgeImage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserImageBadgeImage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserImageBadgeImage
         * @function getTypeUrl
         * @memberof TikTok.UserImageBadgeImage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserImageBadgeImage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.UserImageBadgeImage";
        };

        return UserImageBadgeImage;
    })();

    TikTok.WebcastWebsocketMessage = (function() {

        /**
         * Properties of a WebcastWebsocketMessage.
         * @memberof TikTok
         * @interface IWebcastWebsocketMessage
         * @property {number|Long|null} [id] WebcastWebsocketMessage id
         * @property {string|null} [type] WebcastWebsocketMessage type
         * @property {Uint8Array|null} [binary] WebcastWebsocketMessage binary
         */

        /**
         * Constructs a new WebcastWebsocketMessage.
         * @memberof TikTok
         * @classdesc Represents a WebcastWebsocketMessage.
         * @implements IWebcastWebsocketMessage
         * @constructor
         * @param {TikTok.IWebcastWebsocketMessage=} [properties] Properties to set
         */
        function WebcastWebsocketMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastWebsocketMessage id.
         * @member {number|Long} id
         * @memberof TikTok.WebcastWebsocketMessage
         * @instance
         */
        WebcastWebsocketMessage.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastWebsocketMessage type.
         * @member {string} type
         * @memberof TikTok.WebcastWebsocketMessage
         * @instance
         */
        WebcastWebsocketMessage.prototype.type = "";

        /**
         * WebcastWebsocketMessage binary.
         * @member {Uint8Array} binary
         * @memberof TikTok.WebcastWebsocketMessage
         * @instance
         */
        WebcastWebsocketMessage.prototype.binary = $util.newBuffer([]);

        /**
         * Creates a new WebcastWebsocketMessage instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {TikTok.IWebcastWebsocketMessage=} [properties] Properties to set
         * @returns {TikTok.WebcastWebsocketMessage} WebcastWebsocketMessage instance
         */
        WebcastWebsocketMessage.create = function create(properties) {
            return new WebcastWebsocketMessage(properties);
        };

        /**
         * Encodes the specified WebcastWebsocketMessage message. Does not implicitly {@link TikTok.WebcastWebsocketMessage.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {TikTok.IWebcastWebsocketMessage} message WebcastWebsocketMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastWebsocketMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.type);
            if (message.binary != null && Object.hasOwnProperty.call(message, "binary"))
                writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.binary);
            return writer;
        };

        /**
         * Encodes the specified WebcastWebsocketMessage message, length delimited. Does not implicitly {@link TikTok.WebcastWebsocketMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {TikTok.IWebcastWebsocketMessage} message WebcastWebsocketMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastWebsocketMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastWebsocketMessage message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastWebsocketMessage} WebcastWebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastWebsocketMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastWebsocketMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.id = reader.uint64();
                        break;
                    }
                case 7: {
                        message.type = reader.string();
                        break;
                    }
                case 8: {
                        message.binary = reader.bytes();
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
         * Decodes a WebcastWebsocketMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastWebsocketMessage} WebcastWebsocketMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastWebsocketMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastWebsocketMessage message.
         * @function verify
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastWebsocketMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.binary != null && message.hasOwnProperty("binary"))
                if (!(message.binary && typeof message.binary.length === "number" || $util.isString(message.binary)))
                    return "binary: buffer expected";
            return null;
        };

        /**
         * Creates a WebcastWebsocketMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastWebsocketMessage} WebcastWebsocketMessage
         */
        WebcastWebsocketMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastWebsocketMessage)
                return object;
            var message = new $root.TikTok.WebcastWebsocketMessage();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.type != null)
                message.type = String(object.type);
            if (object.binary != null)
                if (typeof object.binary === "string")
                    $util.base64.decode(object.binary, message.binary = $util.newBuffer($util.base64.length(object.binary)), 0);
                else if (object.binary.length >= 0)
                    message.binary = object.binary;
            return message;
        };

        /**
         * Creates a plain object from a WebcastWebsocketMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {TikTok.WebcastWebsocketMessage} message WebcastWebsocketMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastWebsocketMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.type = "";
                if (options.bytes === String)
                    object.binary = "";
                else {
                    object.binary = [];
                    if (options.bytes !== Array)
                        object.binary = $util.newBuffer(object.binary);
                }
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.binary != null && message.hasOwnProperty("binary"))
                object.binary = options.bytes === String ? $util.base64.encode(message.binary, 0, message.binary.length) : options.bytes === Array ? Array.prototype.slice.call(message.binary) : message.binary;
            return object;
        };

        /**
         * Converts this WebcastWebsocketMessage to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastWebsocketMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastWebsocketMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastWebsocketMessage
         * @function getTypeUrl
         * @memberof TikTok.WebcastWebsocketMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastWebsocketMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastWebsocketMessage";
        };

        return WebcastWebsocketMessage;
    })();

    TikTok.WebcastWebsocketAck = (function() {

        /**
         * Properties of a WebcastWebsocketAck.
         * @memberof TikTok
         * @interface IWebcastWebsocketAck
         * @property {number|Long|null} [id] WebcastWebsocketAck id
         * @property {string|null} [type] WebcastWebsocketAck type
         */

        /**
         * Constructs a new WebcastWebsocketAck.
         * @memberof TikTok
         * @classdesc Represents a WebcastWebsocketAck.
         * @implements IWebcastWebsocketAck
         * @constructor
         * @param {TikTok.IWebcastWebsocketAck=} [properties] Properties to set
         */
        function WebcastWebsocketAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebcastWebsocketAck id.
         * @member {number|Long} id
         * @memberof TikTok.WebcastWebsocketAck
         * @instance
         */
        WebcastWebsocketAck.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WebcastWebsocketAck type.
         * @member {string} type
         * @memberof TikTok.WebcastWebsocketAck
         * @instance
         */
        WebcastWebsocketAck.prototype.type = "";

        /**
         * Creates a new WebcastWebsocketAck instance using the specified properties.
         * @function create
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {TikTok.IWebcastWebsocketAck=} [properties] Properties to set
         * @returns {TikTok.WebcastWebsocketAck} WebcastWebsocketAck instance
         */
        WebcastWebsocketAck.create = function create(properties) {
            return new WebcastWebsocketAck(properties);
        };

        /**
         * Encodes the specified WebcastWebsocketAck message. Does not implicitly {@link TikTok.WebcastWebsocketAck.verify|verify} messages.
         * @function encode
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {TikTok.IWebcastWebsocketAck} message WebcastWebsocketAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastWebsocketAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.id);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified WebcastWebsocketAck message, length delimited. Does not implicitly {@link TikTok.WebcastWebsocketAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {TikTok.IWebcastWebsocketAck} message WebcastWebsocketAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebcastWebsocketAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebcastWebsocketAck message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.WebcastWebsocketAck} WebcastWebsocketAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastWebsocketAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.WebcastWebsocketAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.id = reader.uint64();
                        break;
                    }
                case 7: {
                        message.type = reader.string();
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
         * Decodes a WebcastWebsocketAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.WebcastWebsocketAck} WebcastWebsocketAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebcastWebsocketAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebcastWebsocketAck message.
         * @function verify
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebcastWebsocketAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates a WebcastWebsocketAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.WebcastWebsocketAck} WebcastWebsocketAck
         */
        WebcastWebsocketAck.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.WebcastWebsocketAck)
                return object;
            var message = new $root.TikTok.WebcastWebsocketAck();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from a WebcastWebsocketAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {TikTok.WebcastWebsocketAck} message WebcastWebsocketAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebcastWebsocketAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.type = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this WebcastWebsocketAck to JSON.
         * @function toJSON
         * @memberof TikTok.WebcastWebsocketAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebcastWebsocketAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WebcastWebsocketAck
         * @function getTypeUrl
         * @memberof TikTok.WebcastWebsocketAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WebcastWebsocketAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.WebcastWebsocketAck";
        };

        return WebcastWebsocketAck;
    })();

    TikTok.Image = (function() {

        /**
         * Properties of an Image.
         * @memberof TikTok
         * @interface IImage
         * @property {Array.<string>|null} [url] Image url
         * @property {string|null} [extras] Image extras
         * @property {boolean|null} [isAnimated] Image isAnimated
         */

        /**
         * Constructs a new Image.
         * @memberof TikTok
         * @classdesc Represents an Image.
         * @implements IImage
         * @constructor
         * @param {TikTok.IImage=} [properties] Properties to set
         */
        function Image(properties) {
            this.url = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Image url.
         * @member {Array.<string>} url
         * @memberof TikTok.Image
         * @instance
         */
        Image.prototype.url = $util.emptyArray;

        /**
         * Image extras.
         * @member {string} extras
         * @memberof TikTok.Image
         * @instance
         */
        Image.prototype.extras = "";

        /**
         * Image isAnimated.
         * @member {boolean} isAnimated
         * @memberof TikTok.Image
         * @instance
         */
        Image.prototype.isAnimated = false;

        /**
         * Creates a new Image instance using the specified properties.
         * @function create
         * @memberof TikTok.Image
         * @static
         * @param {TikTok.IImage=} [properties] Properties to set
         * @returns {TikTok.Image} Image instance
         */
        Image.create = function create(properties) {
            return new Image(properties);
        };

        /**
         * Encodes the specified Image message. Does not implicitly {@link TikTok.Image.verify|verify} messages.
         * @function encode
         * @memberof TikTok.Image
         * @static
         * @param {TikTok.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.url != null && message.url.length)
                for (var i = 0; i < message.url.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.url[i]);
            if (message.extras != null && Object.hasOwnProperty.call(message, "extras"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.extras);
            if (message.isAnimated != null && Object.hasOwnProperty.call(message, "isAnimated"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isAnimated);
            return writer;
        };

        /**
         * Encodes the specified Image message, length delimited. Does not implicitly {@link TikTok.Image.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.Image
         * @static
         * @param {TikTok.IImage} message Image message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Image.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Image message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.Image();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.url && message.url.length))
                            message.url = [];
                        message.url.push(reader.string());
                        break;
                    }
                case 2: {
                        message.extras = reader.string();
                        break;
                    }
                case 9: {
                        message.isAnimated = reader.bool();
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
         * Decodes an Image message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.Image
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.Image} Image
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Image.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Image message.
         * @function verify
         * @memberof TikTok.Image
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Image.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.url != null && message.hasOwnProperty("url")) {
                if (!Array.isArray(message.url))
                    return "url: array expected";
                for (var i = 0; i < message.url.length; ++i)
                    if (!$util.isString(message.url[i]))
                        return "url: string[] expected";
            }
            if (message.extras != null && message.hasOwnProperty("extras"))
                if (!$util.isString(message.extras))
                    return "extras: string expected";
            if (message.isAnimated != null && message.hasOwnProperty("isAnimated"))
                if (typeof message.isAnimated !== "boolean")
                    return "isAnimated: boolean expected";
            return null;
        };

        /**
         * Creates an Image message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.Image
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.Image} Image
         */
        Image.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.Image)
                return object;
            var message = new $root.TikTok.Image();
            if (object.url) {
                if (!Array.isArray(object.url))
                    throw TypeError(".TikTok.Image.url: array expected");
                message.url = [];
                for (var i = 0; i < object.url.length; ++i)
                    message.url[i] = String(object.url[i]);
            }
            if (object.extras != null)
                message.extras = String(object.extras);
            if (object.isAnimated != null)
                message.isAnimated = Boolean(object.isAnimated);
            return message;
        };

        /**
         * Creates a plain object from an Image message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.Image
         * @static
         * @param {TikTok.Image} message Image
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Image.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.url = [];
            if (options.defaults) {
                object.extras = "";
                object.isAnimated = false;
            }
            if (message.url && message.url.length) {
                object.url = [];
                for (var j = 0; j < message.url.length; ++j)
                    object.url[j] = message.url[j];
            }
            if (message.extras != null && message.hasOwnProperty("extras"))
                object.extras = message.extras;
            if (message.isAnimated != null && message.hasOwnProperty("isAnimated"))
                object.isAnimated = message.isAnimated;
            return object;
        };

        /**
         * Converts this Image to JSON.
         * @function toJSON
         * @memberof TikTok.Image
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Image.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Image
         * @function getTypeUrl
         * @memberof TikTok.Image
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Image.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.Image";
        };

        return Image;
    })();

    TikTok.BadgeStruct = (function() {

        /**
         * Properties of a BadgeStruct.
         * @memberof TikTok
         * @interface IBadgeStruct
         * @property {TikTok.BadgeStruct.DisplayType|null} [displayType] BadgeStruct displayType
         * @property {TikTok.BadgeStruct.PriorityType|null} [priorityType] BadgeStruct priorityType
         * @property {number|null} [sceneType] BadgeStruct sceneType
         * @property {TikTok.BadgeStruct.Position|null} [position] BadgeStruct position
         * @property {boolean|null} [displayStatus] BadgeStruct displayStatus
         * @property {string|null} [greyedByClient] BadgeStruct greyedByClient
         * @property {TikTok.BadgeStruct.ExhibitionType|null} [exhibitionType] BadgeStruct exhibitionType
         * @property {string|null} [openweburl] BadgeStruct openweburl
         * @property {boolean|null} [display] BadgeStruct display
         * @property {TikTok.IPrivilegeLogExtra|null} [privilegeLogExtra] BadgeStruct privilegeLogExtra
         * @property {boolean|null} [isCustomized] BadgeStruct isCustomized
         * @property {TikTok.BadgeStruct.IImageBadge|null} [image] BadgeStruct image
         * @property {TikTok.BadgeStruct.ITextBadge|null} [text] BadgeStruct text
         * @property {TikTok.BadgeStruct.IStringBadge|null} [str] BadgeStruct str
         * @property {TikTok.BadgeStruct.ICombineBadge|null} [combine] BadgeStruct combine
         */

        /**
         * Constructs a new BadgeStruct.
         * @memberof TikTok
         * @classdesc Represents a BadgeStruct.
         * @implements IBadgeStruct
         * @constructor
         * @param {TikTok.IBadgeStruct=} [properties] Properties to set
         */
        function BadgeStruct(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BadgeStruct displayType.
         * @member {TikTok.BadgeStruct.DisplayType} displayType
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.displayType = 0;

        /**
         * BadgeStruct priorityType.
         * @member {TikTok.BadgeStruct.PriorityType} priorityType
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.priorityType = 0;

        /**
         * BadgeStruct sceneType.
         * @member {number} sceneType
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.sceneType = 0;

        /**
         * BadgeStruct position.
         * @member {TikTok.BadgeStruct.Position} position
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.position = 0;

        /**
         * BadgeStruct displayStatus.
         * @member {boolean} displayStatus
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.displayStatus = false;

        /**
         * BadgeStruct greyedByClient.
         * @member {string} greyedByClient
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.greyedByClient = "";

        /**
         * BadgeStruct exhibitionType.
         * @member {TikTok.BadgeStruct.ExhibitionType} exhibitionType
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.exhibitionType = 0;

        /**
         * BadgeStruct openweburl.
         * @member {string} openweburl
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.openweburl = "";

        /**
         * BadgeStruct display.
         * @member {boolean} display
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.display = false;

        /**
         * BadgeStruct privilegeLogExtra.
         * @member {TikTok.IPrivilegeLogExtra|null|undefined} privilegeLogExtra
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.privilegeLogExtra = null;

        /**
         * BadgeStruct isCustomized.
         * @member {boolean} isCustomized
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.isCustomized = false;

        /**
         * BadgeStruct image.
         * @member {TikTok.BadgeStruct.IImageBadge|null|undefined} image
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.image = null;

        /**
         * BadgeStruct text.
         * @member {TikTok.BadgeStruct.ITextBadge|null|undefined} text
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.text = null;

        /**
         * BadgeStruct str.
         * @member {TikTok.BadgeStruct.IStringBadge|null|undefined} str
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.str = null;

        /**
         * BadgeStruct combine.
         * @member {TikTok.BadgeStruct.ICombineBadge|null|undefined} combine
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        BadgeStruct.prototype.combine = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * BadgeStruct badgeType.
         * @member {"image"|"text"|"str"|"combine"|undefined} badgeType
         * @memberof TikTok.BadgeStruct
         * @instance
         */
        Object.defineProperty(BadgeStruct.prototype, "badgeType", {
            get: $util.oneOfGetter($oneOfFields = ["image", "text", "str", "combine"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BadgeStruct instance using the specified properties.
         * @function create
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {TikTok.IBadgeStruct=} [properties] Properties to set
         * @returns {TikTok.BadgeStruct} BadgeStruct instance
         */
        BadgeStruct.create = function create(properties) {
            return new BadgeStruct(properties);
        };

        /**
         * Encodes the specified BadgeStruct message. Does not implicitly {@link TikTok.BadgeStruct.verify|verify} messages.
         * @function encode
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {TikTok.IBadgeStruct} message BadgeStruct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BadgeStruct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.displayType != null && Object.hasOwnProperty.call(message, "displayType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.displayType);
            if (message.priorityType != null && Object.hasOwnProperty.call(message, "priorityType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.priorityType);
            if (message.sceneType != null && Object.hasOwnProperty.call(message, "sceneType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sceneType);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.position);
            if (message.displayStatus != null && Object.hasOwnProperty.call(message, "displayStatus"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.displayStatus);
            if (message.greyedByClient != null && Object.hasOwnProperty.call(message, "greyedByClient"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.greyedByClient);
            if (message.exhibitionType != null && Object.hasOwnProperty.call(message, "exhibitionType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.exhibitionType);
            if (message.openweburl != null && Object.hasOwnProperty.call(message, "openweburl"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.openweburl);
            if (message.display != null && Object.hasOwnProperty.call(message, "display"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.display);
            if (message.privilegeLogExtra != null && Object.hasOwnProperty.call(message, "privilegeLogExtra"))
                $root.TikTok.PrivilegeLogExtra.encode(message.privilegeLogExtra, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                $root.TikTok.BadgeStruct.ImageBadge.encode(message.image, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                $root.TikTok.BadgeStruct.TextBadge.encode(message.text, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                $root.TikTok.BadgeStruct.StringBadge.encode(message.str, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.combine != null && Object.hasOwnProperty.call(message, "combine"))
                $root.TikTok.BadgeStruct.CombineBadge.encode(message.combine, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.isCustomized != null && Object.hasOwnProperty.call(message, "isCustomized"))
                writer.uint32(/* id 24, wireType 0 =*/192).bool(message.isCustomized);
            return writer;
        };

        /**
         * Encodes the specified BadgeStruct message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {TikTok.IBadgeStruct} message BadgeStruct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BadgeStruct.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BadgeStruct message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.BadgeStruct} BadgeStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BadgeStruct.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.displayType = reader.int32();
                        break;
                    }
                case 2: {
                        message.priorityType = reader.int32();
                        break;
                    }
                case 3: {
                        message.sceneType = reader.int32();
                        break;
                    }
                case 4: {
                        message.position = reader.int32();
                        break;
                    }
                case 5: {
                        message.displayStatus = reader.bool();
                        break;
                    }
                case 6: {
                        message.greyedByClient = reader.string();
                        break;
                    }
                case 7: {
                        message.exhibitionType = reader.int32();
                        break;
                    }
                case 10: {
                        message.openweburl = reader.string();
                        break;
                    }
                case 11: {
                        message.display = reader.bool();
                        break;
                    }
                case 12: {
                        message.privilegeLogExtra = $root.TikTok.PrivilegeLogExtra.decode(reader, reader.uint32());
                        break;
                    }
                case 24: {
                        message.isCustomized = reader.bool();
                        break;
                    }
                case 20: {
                        message.image = $root.TikTok.BadgeStruct.ImageBadge.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.text = $root.TikTok.BadgeStruct.TextBadge.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.str = $root.TikTok.BadgeStruct.StringBadge.decode(reader, reader.uint32());
                        break;
                    }
                case 23: {
                        message.combine = $root.TikTok.BadgeStruct.CombineBadge.decode(reader, reader.uint32());
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
         * Decodes a BadgeStruct message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.BadgeStruct} BadgeStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BadgeStruct.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BadgeStruct message.
         * @function verify
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BadgeStruct.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.displayType != null && message.hasOwnProperty("displayType"))
                switch (message.displayType) {
                default:
                    return "displayType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.priorityType != null && message.hasOwnProperty("priorityType"))
                switch (message.priorityType) {
                default:
                    return "priorityType: enum value expected";
                case 0:
                case 10:
                case 20:
                case 30:
                case 40:
                case 50:
                    break;
                }
            if (message.sceneType != null && message.hasOwnProperty("sceneType"))
                if (!$util.isInteger(message.sceneType))
                    return "sceneType: integer expected";
            if (message.position != null && message.hasOwnProperty("position"))
                switch (message.position) {
                default:
                    return "position: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.displayStatus != null && message.hasOwnProperty("displayStatus"))
                if (typeof message.displayStatus !== "boolean")
                    return "displayStatus: boolean expected";
            if (message.greyedByClient != null && message.hasOwnProperty("greyedByClient"))
                if (!$util.isString(message.greyedByClient))
                    return "greyedByClient: string expected";
            if (message.exhibitionType != null && message.hasOwnProperty("exhibitionType"))
                switch (message.exhibitionType) {
                default:
                    return "exhibitionType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.openweburl != null && message.hasOwnProperty("openweburl"))
                if (!$util.isString(message.openweburl))
                    return "openweburl: string expected";
            if (message.display != null && message.hasOwnProperty("display"))
                if (typeof message.display !== "boolean")
                    return "display: boolean expected";
            if (message.privilegeLogExtra != null && message.hasOwnProperty("privilegeLogExtra")) {
                var error = $root.TikTok.PrivilegeLogExtra.verify(message.privilegeLogExtra);
                if (error)
                    return "privilegeLogExtra." + error;
            }
            if (message.isCustomized != null && message.hasOwnProperty("isCustomized"))
                if (typeof message.isCustomized !== "boolean")
                    return "isCustomized: boolean expected";
            if (message.image != null && message.hasOwnProperty("image")) {
                properties.badgeType = 1;
                {
                    var error = $root.TikTok.BadgeStruct.ImageBadge.verify(message.image);
                    if (error)
                        return "image." + error;
                }
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                if (properties.badgeType === 1)
                    return "badgeType: multiple values";
                properties.badgeType = 1;
                {
                    var error = $root.TikTok.BadgeStruct.TextBadge.verify(message.text);
                    if (error)
                        return "text." + error;
                }
            }
            if (message.str != null && message.hasOwnProperty("str")) {
                if (properties.badgeType === 1)
                    return "badgeType: multiple values";
                properties.badgeType = 1;
                {
                    var error = $root.TikTok.BadgeStruct.StringBadge.verify(message.str);
                    if (error)
                        return "str." + error;
                }
            }
            if (message.combine != null && message.hasOwnProperty("combine")) {
                if (properties.badgeType === 1)
                    return "badgeType: multiple values";
                properties.badgeType = 1;
                {
                    var error = $root.TikTok.BadgeStruct.CombineBadge.verify(message.combine);
                    if (error)
                        return "combine." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BadgeStruct message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.BadgeStruct} BadgeStruct
         */
        BadgeStruct.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.BadgeStruct)
                return object;
            var message = new $root.TikTok.BadgeStruct();
            switch (object.displayType) {
            default:
                if (typeof object.displayType === "number") {
                    message.displayType = object.displayType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.displayType = 0;
                break;
            case "IMAGE":
            case 1:
                message.displayType = 1;
                break;
            case "TEXT":
            case 2:
                message.displayType = 2;
                break;
            case "STRING":
            case 3:
                message.displayType = 3;
                break;
            case "COMBINE":
            case 4:
                message.displayType = 4;
                break;
            }
            switch (object.priorityType) {
            default:
                if (typeof object.priorityType === "number") {
                    message.priorityType = object.priorityType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.priorityType = 0;
                break;
            case "STRONG_RELATION":
            case 10:
                message.priorityType = 10;
                break;
            case "PLATFORM":
            case 20:
                message.priorityType = 20;
                break;
            case "RELATION":
            case 30:
                message.priorityType = 30;
                break;
            case "ACTIVITY":
            case 40:
                message.priorityType = 40;
                break;
            case "RANKLIST":
            case 50:
                message.priorityType = 50;
                break;
            }
            if (object.sceneType != null)
                message.sceneType = object.sceneType | 0;
            switch (object.position) {
            default:
                if (typeof object.position === "number") {
                    message.position = object.position;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.position = 0;
                break;
            case "LEFT":
            case 1:
                message.position = 1;
                break;
            case "RIGHT":
            case 2:
                message.position = 2;
                break;
            }
            if (object.displayStatus != null)
                message.displayStatus = Boolean(object.displayStatus);
            if (object.greyedByClient != null)
                message.greyedByClient = String(object.greyedByClient);
            switch (object.exhibitionType) {
            default:
                if (typeof object.exhibitionType === "number") {
                    message.exhibitionType = object.exhibitionType;
                    break;
                }
                break;
            case "BADGE":
            case 0:
                message.exhibitionType = 0;
                break;
            case "IDENTITY_LABEL":
            case 1:
                message.exhibitionType = 1;
                break;
            }
            if (object.openweburl != null)
                message.openweburl = String(object.openweburl);
            if (object.display != null)
                message.display = Boolean(object.display);
            if (object.privilegeLogExtra != null) {
                if (typeof object.privilegeLogExtra !== "object")
                    throw TypeError(".TikTok.BadgeStruct.privilegeLogExtra: object expected");
                message.privilegeLogExtra = $root.TikTok.PrivilegeLogExtra.fromObject(object.privilegeLogExtra);
            }
            if (object.isCustomized != null)
                message.isCustomized = Boolean(object.isCustomized);
            if (object.image != null) {
                if (typeof object.image !== "object")
                    throw TypeError(".TikTok.BadgeStruct.image: object expected");
                message.image = $root.TikTok.BadgeStruct.ImageBadge.fromObject(object.image);
            }
            if (object.text != null) {
                if (typeof object.text !== "object")
                    throw TypeError(".TikTok.BadgeStruct.text: object expected");
                message.text = $root.TikTok.BadgeStruct.TextBadge.fromObject(object.text);
            }
            if (object.str != null) {
                if (typeof object.str !== "object")
                    throw TypeError(".TikTok.BadgeStruct.str: object expected");
                message.str = $root.TikTok.BadgeStruct.StringBadge.fromObject(object.str);
            }
            if (object.combine != null) {
                if (typeof object.combine !== "object")
                    throw TypeError(".TikTok.BadgeStruct.combine: object expected");
                message.combine = $root.TikTok.BadgeStruct.CombineBadge.fromObject(object.combine);
            }
            return message;
        };

        /**
         * Creates a plain object from a BadgeStruct message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {TikTok.BadgeStruct} message BadgeStruct
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BadgeStruct.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.displayType = options.enums === String ? "UNKNOWN" : 0;
                object.priorityType = options.enums === String ? "UNKNOWN" : 0;
                object.sceneType = 0;
                object.position = options.enums === String ? "UNKNOWN" : 0;
                object.displayStatus = false;
                object.greyedByClient = "";
                object.exhibitionType = options.enums === String ? "BADGE" : 0;
                object.openweburl = "";
                object.display = false;
                object.privilegeLogExtra = null;
                object.isCustomized = false;
            }
            if (message.displayType != null && message.hasOwnProperty("displayType"))
                object.displayType = options.enums === String ? $root.TikTok.BadgeStruct.DisplayType[message.displayType] === undefined ? message.displayType : $root.TikTok.BadgeStruct.DisplayType[message.displayType] : message.displayType;
            if (message.priorityType != null && message.hasOwnProperty("priorityType"))
                object.priorityType = options.enums === String ? $root.TikTok.BadgeStruct.PriorityType[message.priorityType] === undefined ? message.priorityType : $root.TikTok.BadgeStruct.PriorityType[message.priorityType] : message.priorityType;
            if (message.sceneType != null && message.hasOwnProperty("sceneType"))
                object.sceneType = message.sceneType;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = options.enums === String ? $root.TikTok.BadgeStruct.Position[message.position] === undefined ? message.position : $root.TikTok.BadgeStruct.Position[message.position] : message.position;
            if (message.displayStatus != null && message.hasOwnProperty("displayStatus"))
                object.displayStatus = message.displayStatus;
            if (message.greyedByClient != null && message.hasOwnProperty("greyedByClient"))
                object.greyedByClient = message.greyedByClient;
            if (message.exhibitionType != null && message.hasOwnProperty("exhibitionType"))
                object.exhibitionType = options.enums === String ? $root.TikTok.BadgeStruct.ExhibitionType[message.exhibitionType] === undefined ? message.exhibitionType : $root.TikTok.BadgeStruct.ExhibitionType[message.exhibitionType] : message.exhibitionType;
            if (message.openweburl != null && message.hasOwnProperty("openweburl"))
                object.openweburl = message.openweburl;
            if (message.display != null && message.hasOwnProperty("display"))
                object.display = message.display;
            if (message.privilegeLogExtra != null && message.hasOwnProperty("privilegeLogExtra"))
                object.privilegeLogExtra = $root.TikTok.PrivilegeLogExtra.toObject(message.privilegeLogExtra, options);
            if (message.image != null && message.hasOwnProperty("image")) {
                object.image = $root.TikTok.BadgeStruct.ImageBadge.toObject(message.image, options);
                if (options.oneofs)
                    object.badgeType = "image";
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = $root.TikTok.BadgeStruct.TextBadge.toObject(message.text, options);
                if (options.oneofs)
                    object.badgeType = "text";
            }
            if (message.str != null && message.hasOwnProperty("str")) {
                object.str = $root.TikTok.BadgeStruct.StringBadge.toObject(message.str, options);
                if (options.oneofs)
                    object.badgeType = "str";
            }
            if (message.combine != null && message.hasOwnProperty("combine")) {
                object.combine = $root.TikTok.BadgeStruct.CombineBadge.toObject(message.combine, options);
                if (options.oneofs)
                    object.badgeType = "combine";
            }
            if (message.isCustomized != null && message.hasOwnProperty("isCustomized"))
                object.isCustomized = message.isCustomized;
            return object;
        };

        /**
         * Converts this BadgeStruct to JSON.
         * @function toJSON
         * @memberof TikTok.BadgeStruct
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BadgeStruct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BadgeStruct
         * @function getTypeUrl
         * @memberof TikTok.BadgeStruct
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BadgeStruct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.BadgeStruct";
        };

        BadgeStruct.CombineBadge = (function() {

            /**
             * Properties of a CombineBadge.
             * @memberof TikTok.BadgeStruct
             * @interface ICombineBadge
             * @property {TikTok.IImage|null} [icon] CombineBadge icon
             * @property {TikTok.BadgeStruct.ITextBadge|null} [text] CombineBadge text
             * @property {string|null} [str] CombineBadge str
             * @property {TikTok.BadgeStruct.IProfileCardPanel|null} [profileCardPanel] CombineBadge profileCardPanel
             * @property {TikTok.BadgeStruct.ICombineBadgeBackground|null} [background] CombineBadge background
             * @property {TikTok.BadgeStruct.ICombineBadgeBackground|null} [backgroundDarkMode] CombineBadge backgroundDarkMode
             * @property {boolean|null} [iconAutoMirrored] CombineBadge iconAutoMirrored
             * @property {boolean|null} [backgroundAutoMirrored] CombineBadge backgroundAutoMirrored
             * @property {number|null} [publicScreenShowStyle] CombineBadge publicScreenShowStyle
             * @property {number|null} [personalCardShowStyle] CombineBadge personalCardShowStyle
             * @property {number|null} [ranklistOnlineAudienceShowStyle] CombineBadge ranklistOnlineAudienceShowStyle
             * @property {number|null} [multiGuestShowStyle] CombineBadge multiGuestShowStyle
             */

            /**
             * Constructs a new CombineBadge.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a CombineBadge.
             * @implements ICombineBadge
             * @constructor
             * @param {TikTok.BadgeStruct.ICombineBadge=} [properties] Properties to set
             */
            function CombineBadge(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CombineBadge icon.
             * @member {TikTok.IImage|null|undefined} icon
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.icon = null;

            /**
             * CombineBadge text.
             * @member {TikTok.BadgeStruct.ITextBadge|null|undefined} text
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.text = null;

            /**
             * CombineBadge str.
             * @member {string} str
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.str = "";

            /**
             * CombineBadge profileCardPanel.
             * @member {TikTok.BadgeStruct.IProfileCardPanel|null|undefined} profileCardPanel
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.profileCardPanel = null;

            /**
             * CombineBadge background.
             * @member {TikTok.BadgeStruct.ICombineBadgeBackground|null|undefined} background
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.background = null;

            /**
             * CombineBadge backgroundDarkMode.
             * @member {TikTok.BadgeStruct.ICombineBadgeBackground|null|undefined} backgroundDarkMode
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.backgroundDarkMode = null;

            /**
             * CombineBadge iconAutoMirrored.
             * @member {boolean} iconAutoMirrored
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.iconAutoMirrored = false;

            /**
             * CombineBadge backgroundAutoMirrored.
             * @member {boolean} backgroundAutoMirrored
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.backgroundAutoMirrored = false;

            /**
             * CombineBadge publicScreenShowStyle.
             * @member {number} publicScreenShowStyle
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.publicScreenShowStyle = 0;

            /**
             * CombineBadge personalCardShowStyle.
             * @member {number} personalCardShowStyle
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.personalCardShowStyle = 0;

            /**
             * CombineBadge ranklistOnlineAudienceShowStyle.
             * @member {number} ranklistOnlineAudienceShowStyle
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.ranklistOnlineAudienceShowStyle = 0;

            /**
             * CombineBadge multiGuestShowStyle.
             * @member {number} multiGuestShowStyle
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             */
            CombineBadge.prototype.multiGuestShowStyle = 0;

            /**
             * Creates a new CombineBadge instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {TikTok.BadgeStruct.ICombineBadge=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.CombineBadge} CombineBadge instance
             */
            CombineBadge.create = function create(properties) {
                return new CombineBadge(properties);
            };

            /**
             * Encodes the specified CombineBadge message. Does not implicitly {@link TikTok.BadgeStruct.CombineBadge.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {TikTok.BadgeStruct.ICombineBadge} message CombineBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CombineBadge.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                    $root.TikTok.Image.encode(message.icon, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    $root.TikTok.BadgeStruct.TextBadge.encode(message.text, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.str);
                if (message.profileCardPanel != null && Object.hasOwnProperty.call(message, "profileCardPanel"))
                    $root.TikTok.BadgeStruct.ProfileCardPanel.encode(message.profileCardPanel, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.background != null && Object.hasOwnProperty.call(message, "background"))
                    $root.TikTok.BadgeStruct.CombineBadgeBackground.encode(message.background, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.backgroundDarkMode != null && Object.hasOwnProperty.call(message, "backgroundDarkMode"))
                    $root.TikTok.BadgeStruct.CombineBadgeBackground.encode(message.backgroundDarkMode, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.iconAutoMirrored != null && Object.hasOwnProperty.call(message, "iconAutoMirrored"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.iconAutoMirrored);
                if (message.backgroundAutoMirrored != null && Object.hasOwnProperty.call(message, "backgroundAutoMirrored"))
                    writer.uint32(/* id 14, wireType 0 =*/112).bool(message.backgroundAutoMirrored);
                if (message.publicScreenShowStyle != null && Object.hasOwnProperty.call(message, "publicScreenShowStyle"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.publicScreenShowStyle);
                if (message.personalCardShowStyle != null && Object.hasOwnProperty.call(message, "personalCardShowStyle"))
                    writer.uint32(/* id 16, wireType 0 =*/128).int32(message.personalCardShowStyle);
                if (message.ranklistOnlineAudienceShowStyle != null && Object.hasOwnProperty.call(message, "ranklistOnlineAudienceShowStyle"))
                    writer.uint32(/* id 17, wireType 0 =*/136).int32(message.ranklistOnlineAudienceShowStyle);
                if (message.multiGuestShowStyle != null && Object.hasOwnProperty.call(message, "multiGuestShowStyle"))
                    writer.uint32(/* id 18, wireType 0 =*/144).int32(message.multiGuestShowStyle);
                return writer;
            };

            /**
             * Encodes the specified CombineBadge message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.CombineBadge.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {TikTok.BadgeStruct.ICombineBadge} message CombineBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CombineBadge.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CombineBadge message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.CombineBadge} CombineBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CombineBadge.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.CombineBadge();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.icon = $root.TikTok.Image.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.text = $root.TikTok.BadgeStruct.TextBadge.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.str = reader.string();
                            break;
                        }
                    case 7: {
                            message.profileCardPanel = $root.TikTok.BadgeStruct.ProfileCardPanel.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.backgroundDarkMode = $root.TikTok.BadgeStruct.CombineBadgeBackground.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.iconAutoMirrored = reader.bool();
                            break;
                        }
                    case 14: {
                            message.backgroundAutoMirrored = reader.bool();
                            break;
                        }
                    case 15: {
                            message.publicScreenShowStyle = reader.int32();
                            break;
                        }
                    case 16: {
                            message.personalCardShowStyle = reader.int32();
                            break;
                        }
                    case 17: {
                            message.ranklistOnlineAudienceShowStyle = reader.int32();
                            break;
                        }
                    case 18: {
                            message.multiGuestShowStyle = reader.int32();
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
             * Decodes a CombineBadge message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.CombineBadge} CombineBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CombineBadge.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CombineBadge message.
             * @function verify
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CombineBadge.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.icon != null && message.hasOwnProperty("icon")) {
                    var error = $root.TikTok.Image.verify(message.icon);
                    if (error)
                        return "icon." + error;
                }
                if (message.text != null && message.hasOwnProperty("text")) {
                    var error = $root.TikTok.BadgeStruct.TextBadge.verify(message.text);
                    if (error)
                        return "text." + error;
                }
                if (message.str != null && message.hasOwnProperty("str"))
                    if (!$util.isString(message.str))
                        return "str: string expected";
                if (message.profileCardPanel != null && message.hasOwnProperty("profileCardPanel")) {
                    var error = $root.TikTok.BadgeStruct.ProfileCardPanel.verify(message.profileCardPanel);
                    if (error)
                        return "profileCardPanel." + error;
                }
                if (message.background != null && message.hasOwnProperty("background")) {
                    var error = $root.TikTok.BadgeStruct.CombineBadgeBackground.verify(message.background);
                    if (error)
                        return "background." + error;
                }
                if (message.backgroundDarkMode != null && message.hasOwnProperty("backgroundDarkMode")) {
                    var error = $root.TikTok.BadgeStruct.CombineBadgeBackground.verify(message.backgroundDarkMode);
                    if (error)
                        return "backgroundDarkMode." + error;
                }
                if (message.iconAutoMirrored != null && message.hasOwnProperty("iconAutoMirrored"))
                    if (typeof message.iconAutoMirrored !== "boolean")
                        return "iconAutoMirrored: boolean expected";
                if (message.backgroundAutoMirrored != null && message.hasOwnProperty("backgroundAutoMirrored"))
                    if (typeof message.backgroundAutoMirrored !== "boolean")
                        return "backgroundAutoMirrored: boolean expected";
                if (message.publicScreenShowStyle != null && message.hasOwnProperty("publicScreenShowStyle"))
                    if (!$util.isInteger(message.publicScreenShowStyle))
                        return "publicScreenShowStyle: integer expected";
                if (message.personalCardShowStyle != null && message.hasOwnProperty("personalCardShowStyle"))
                    if (!$util.isInteger(message.personalCardShowStyle))
                        return "personalCardShowStyle: integer expected";
                if (message.ranklistOnlineAudienceShowStyle != null && message.hasOwnProperty("ranklistOnlineAudienceShowStyle"))
                    if (!$util.isInteger(message.ranklistOnlineAudienceShowStyle))
                        return "ranklistOnlineAudienceShowStyle: integer expected";
                if (message.multiGuestShowStyle != null && message.hasOwnProperty("multiGuestShowStyle"))
                    if (!$util.isInteger(message.multiGuestShowStyle))
                        return "multiGuestShowStyle: integer expected";
                return null;
            };

            /**
             * Creates a CombineBadge message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.CombineBadge} CombineBadge
             */
            CombineBadge.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.CombineBadge)
                    return object;
                var message = new $root.TikTok.BadgeStruct.CombineBadge();
                if (object.icon != null) {
                    if (typeof object.icon !== "object")
                        throw TypeError(".TikTok.BadgeStruct.CombineBadge.icon: object expected");
                    message.icon = $root.TikTok.Image.fromObject(object.icon);
                }
                if (object.text != null) {
                    if (typeof object.text !== "object")
                        throw TypeError(".TikTok.BadgeStruct.CombineBadge.text: object expected");
                    message.text = $root.TikTok.BadgeStruct.TextBadge.fromObject(object.text);
                }
                if (object.str != null)
                    message.str = String(object.str);
                if (object.profileCardPanel != null) {
                    if (typeof object.profileCardPanel !== "object")
                        throw TypeError(".TikTok.BadgeStruct.CombineBadge.profileCardPanel: object expected");
                    message.profileCardPanel = $root.TikTok.BadgeStruct.ProfileCardPanel.fromObject(object.profileCardPanel);
                }
                if (object.background != null) {
                    if (typeof object.background !== "object")
                        throw TypeError(".TikTok.BadgeStruct.CombineBadge.background: object expected");
                    message.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.fromObject(object.background);
                }
                if (object.backgroundDarkMode != null) {
                    if (typeof object.backgroundDarkMode !== "object")
                        throw TypeError(".TikTok.BadgeStruct.CombineBadge.backgroundDarkMode: object expected");
                    message.backgroundDarkMode = $root.TikTok.BadgeStruct.CombineBadgeBackground.fromObject(object.backgroundDarkMode);
                }
                if (object.iconAutoMirrored != null)
                    message.iconAutoMirrored = Boolean(object.iconAutoMirrored);
                if (object.backgroundAutoMirrored != null)
                    message.backgroundAutoMirrored = Boolean(object.backgroundAutoMirrored);
                if (object.publicScreenShowStyle != null)
                    message.publicScreenShowStyle = object.publicScreenShowStyle | 0;
                if (object.personalCardShowStyle != null)
                    message.personalCardShowStyle = object.personalCardShowStyle | 0;
                if (object.ranklistOnlineAudienceShowStyle != null)
                    message.ranklistOnlineAudienceShowStyle = object.ranklistOnlineAudienceShowStyle | 0;
                if (object.multiGuestShowStyle != null)
                    message.multiGuestShowStyle = object.multiGuestShowStyle | 0;
                return message;
            };

            /**
             * Creates a plain object from a CombineBadge message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {TikTok.BadgeStruct.CombineBadge} message CombineBadge
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CombineBadge.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.icon = null;
                    object.text = null;
                    object.str = "";
                    object.profileCardPanel = null;
                    object.background = null;
                    object.backgroundDarkMode = null;
                    object.iconAutoMirrored = false;
                    object.backgroundAutoMirrored = false;
                    object.publicScreenShowStyle = 0;
                    object.personalCardShowStyle = 0;
                    object.ranklistOnlineAudienceShowStyle = 0;
                    object.multiGuestShowStyle = 0;
                }
                if (message.icon != null && message.hasOwnProperty("icon"))
                    object.icon = $root.TikTok.Image.toObject(message.icon, options);
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = $root.TikTok.BadgeStruct.TextBadge.toObject(message.text, options);
                if (message.str != null && message.hasOwnProperty("str"))
                    object.str = message.str;
                if (message.profileCardPanel != null && message.hasOwnProperty("profileCardPanel"))
                    object.profileCardPanel = $root.TikTok.BadgeStruct.ProfileCardPanel.toObject(message.profileCardPanel, options);
                if (message.background != null && message.hasOwnProperty("background"))
                    object.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.toObject(message.background, options);
                if (message.backgroundDarkMode != null && message.hasOwnProperty("backgroundDarkMode"))
                    object.backgroundDarkMode = $root.TikTok.BadgeStruct.CombineBadgeBackground.toObject(message.backgroundDarkMode, options);
                if (message.iconAutoMirrored != null && message.hasOwnProperty("iconAutoMirrored"))
                    object.iconAutoMirrored = message.iconAutoMirrored;
                if (message.backgroundAutoMirrored != null && message.hasOwnProperty("backgroundAutoMirrored"))
                    object.backgroundAutoMirrored = message.backgroundAutoMirrored;
                if (message.publicScreenShowStyle != null && message.hasOwnProperty("publicScreenShowStyle"))
                    object.publicScreenShowStyle = message.publicScreenShowStyle;
                if (message.personalCardShowStyle != null && message.hasOwnProperty("personalCardShowStyle"))
                    object.personalCardShowStyle = message.personalCardShowStyle;
                if (message.ranklistOnlineAudienceShowStyle != null && message.hasOwnProperty("ranklistOnlineAudienceShowStyle"))
                    object.ranklistOnlineAudienceShowStyle = message.ranklistOnlineAudienceShowStyle;
                if (message.multiGuestShowStyle != null && message.hasOwnProperty("multiGuestShowStyle"))
                    object.multiGuestShowStyle = message.multiGuestShowStyle;
                return object;
            };

            /**
             * Converts this CombineBadge to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CombineBadge.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CombineBadge
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.CombineBadge
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CombineBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.CombineBadge";
            };

            return CombineBadge;
        })();

        BadgeStruct.ProfileCardPanel = (function() {

            /**
             * Properties of a ProfileCardPanel.
             * @memberof TikTok.BadgeStruct
             * @interface IProfileCardPanel
             * @property {boolean|null} [useNewProfileCardStyle] ProfileCardPanel useNewProfileCardStyle
             * @property {TikTok.BadgeStruct.IProjectionConfig|null} [projectionConfig] ProfileCardPanel projectionConfig
             * @property {TikTok.BadgeStruct.IProfileContent|null} [profileContent] ProfileCardPanel profileContent
             */

            /**
             * Constructs a new ProfileCardPanel.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a ProfileCardPanel.
             * @implements IProfileCardPanel
             * @constructor
             * @param {TikTok.BadgeStruct.IProfileCardPanel=} [properties] Properties to set
             */
            function ProfileCardPanel(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProfileCardPanel useNewProfileCardStyle.
             * @member {boolean} useNewProfileCardStyle
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @instance
             */
            ProfileCardPanel.prototype.useNewProfileCardStyle = false;

            /**
             * ProfileCardPanel projectionConfig.
             * @member {TikTok.BadgeStruct.IProjectionConfig|null|undefined} projectionConfig
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @instance
             */
            ProfileCardPanel.prototype.projectionConfig = null;

            /**
             * ProfileCardPanel profileContent.
             * @member {TikTok.BadgeStruct.IProfileContent|null|undefined} profileContent
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @instance
             */
            ProfileCardPanel.prototype.profileContent = null;

            /**
             * Creates a new ProfileCardPanel instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {TikTok.BadgeStruct.IProfileCardPanel=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.ProfileCardPanel} ProfileCardPanel instance
             */
            ProfileCardPanel.create = function create(properties) {
                return new ProfileCardPanel(properties);
            };

            /**
             * Encodes the specified ProfileCardPanel message. Does not implicitly {@link TikTok.BadgeStruct.ProfileCardPanel.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {TikTok.BadgeStruct.IProfileCardPanel} message ProfileCardPanel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProfileCardPanel.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.useNewProfileCardStyle != null && Object.hasOwnProperty.call(message, "useNewProfileCardStyle"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.useNewProfileCardStyle);
                if (message.projectionConfig != null && Object.hasOwnProperty.call(message, "projectionConfig"))
                    $root.TikTok.BadgeStruct.ProjectionConfig.encode(message.projectionConfig, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.profileContent != null && Object.hasOwnProperty.call(message, "profileContent"))
                    $root.TikTok.BadgeStruct.ProfileContent.encode(message.profileContent, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ProfileCardPanel message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.ProfileCardPanel.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {TikTok.BadgeStruct.IProfileCardPanel} message ProfileCardPanel message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProfileCardPanel.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProfileCardPanel message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.ProfileCardPanel} ProfileCardPanel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProfileCardPanel.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.ProfileCardPanel();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.useNewProfileCardStyle = reader.bool();
                            break;
                        }
                    case 3: {
                            message.projectionConfig = $root.TikTok.BadgeStruct.ProjectionConfig.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.profileContent = $root.TikTok.BadgeStruct.ProfileContent.decode(reader, reader.uint32());
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
             * Decodes a ProfileCardPanel message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.ProfileCardPanel} ProfileCardPanel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProfileCardPanel.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProfileCardPanel message.
             * @function verify
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProfileCardPanel.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.useNewProfileCardStyle != null && message.hasOwnProperty("useNewProfileCardStyle"))
                    if (typeof message.useNewProfileCardStyle !== "boolean")
                        return "useNewProfileCardStyle: boolean expected";
                if (message.projectionConfig != null && message.hasOwnProperty("projectionConfig")) {
                    var error = $root.TikTok.BadgeStruct.ProjectionConfig.verify(message.projectionConfig);
                    if (error)
                        return "projectionConfig." + error;
                }
                if (message.profileContent != null && message.hasOwnProperty("profileContent")) {
                    var error = $root.TikTok.BadgeStruct.ProfileContent.verify(message.profileContent);
                    if (error)
                        return "profileContent." + error;
                }
                return null;
            };

            /**
             * Creates a ProfileCardPanel message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.ProfileCardPanel} ProfileCardPanel
             */
            ProfileCardPanel.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.ProfileCardPanel)
                    return object;
                var message = new $root.TikTok.BadgeStruct.ProfileCardPanel();
                if (object.useNewProfileCardStyle != null)
                    message.useNewProfileCardStyle = Boolean(object.useNewProfileCardStyle);
                if (object.projectionConfig != null) {
                    if (typeof object.projectionConfig !== "object")
                        throw TypeError(".TikTok.BadgeStruct.ProfileCardPanel.projectionConfig: object expected");
                    message.projectionConfig = $root.TikTok.BadgeStruct.ProjectionConfig.fromObject(object.projectionConfig);
                }
                if (object.profileContent != null) {
                    if (typeof object.profileContent !== "object")
                        throw TypeError(".TikTok.BadgeStruct.ProfileCardPanel.profileContent: object expected");
                    message.profileContent = $root.TikTok.BadgeStruct.ProfileContent.fromObject(object.profileContent);
                }
                return message;
            };

            /**
             * Creates a plain object from a ProfileCardPanel message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {TikTok.BadgeStruct.ProfileCardPanel} message ProfileCardPanel
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProfileCardPanel.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.useNewProfileCardStyle = false;
                    object.projectionConfig = null;
                    object.profileContent = null;
                }
                if (message.useNewProfileCardStyle != null && message.hasOwnProperty("useNewProfileCardStyle"))
                    object.useNewProfileCardStyle = message.useNewProfileCardStyle;
                if (message.projectionConfig != null && message.hasOwnProperty("projectionConfig"))
                    object.projectionConfig = $root.TikTok.BadgeStruct.ProjectionConfig.toObject(message.projectionConfig, options);
                if (message.profileContent != null && message.hasOwnProperty("profileContent"))
                    object.profileContent = $root.TikTok.BadgeStruct.ProfileContent.toObject(message.profileContent, options);
                return object;
            };

            /**
             * Converts this ProfileCardPanel to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProfileCardPanel.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ProfileCardPanel
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.ProfileCardPanel
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ProfileCardPanel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.ProfileCardPanel";
            };

            return ProfileCardPanel;
        })();

        BadgeStruct.ProjectionConfig = (function() {

            /**
             * Properties of a ProjectionConfig.
             * @memberof TikTok.BadgeStruct
             * @interface IProjectionConfig
             * @property {boolean|null} [useProjection] ProjectionConfig useProjection
             * @property {TikTok.IImage|null} [icon] ProjectionConfig icon
             */

            /**
             * Constructs a new ProjectionConfig.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a ProjectionConfig.
             * @implements IProjectionConfig
             * @constructor
             * @param {TikTok.BadgeStruct.IProjectionConfig=} [properties] Properties to set
             */
            function ProjectionConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProjectionConfig useProjection.
             * @member {boolean} useProjection
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @instance
             */
            ProjectionConfig.prototype.useProjection = false;

            /**
             * ProjectionConfig icon.
             * @member {TikTok.IImage|null|undefined} icon
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @instance
             */
            ProjectionConfig.prototype.icon = null;

            /**
             * Creates a new ProjectionConfig instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {TikTok.BadgeStruct.IProjectionConfig=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.ProjectionConfig} ProjectionConfig instance
             */
            ProjectionConfig.create = function create(properties) {
                return new ProjectionConfig(properties);
            };

            /**
             * Encodes the specified ProjectionConfig message. Does not implicitly {@link TikTok.BadgeStruct.ProjectionConfig.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {TikTok.BadgeStruct.IProjectionConfig} message ProjectionConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProjectionConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.useProjection != null && Object.hasOwnProperty.call(message, "useProjection"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.useProjection);
                if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                    $root.TikTok.Image.encode(message.icon, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ProjectionConfig message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.ProjectionConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {TikTok.BadgeStruct.IProjectionConfig} message ProjectionConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProjectionConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProjectionConfig message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.ProjectionConfig} ProjectionConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProjectionConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.ProjectionConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.useProjection = reader.bool();
                            break;
                        }
                    case 2: {
                            message.icon = $root.TikTok.Image.decode(reader, reader.uint32());
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
             * Decodes a ProjectionConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.ProjectionConfig} ProjectionConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProjectionConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProjectionConfig message.
             * @function verify
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProjectionConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.useProjection != null && message.hasOwnProperty("useProjection"))
                    if (typeof message.useProjection !== "boolean")
                        return "useProjection: boolean expected";
                if (message.icon != null && message.hasOwnProperty("icon")) {
                    var error = $root.TikTok.Image.verify(message.icon);
                    if (error)
                        return "icon." + error;
                }
                return null;
            };

            /**
             * Creates a ProjectionConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.ProjectionConfig} ProjectionConfig
             */
            ProjectionConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.ProjectionConfig)
                    return object;
                var message = new $root.TikTok.BadgeStruct.ProjectionConfig();
                if (object.useProjection != null)
                    message.useProjection = Boolean(object.useProjection);
                if (object.icon != null) {
                    if (typeof object.icon !== "object")
                        throw TypeError(".TikTok.BadgeStruct.ProjectionConfig.icon: object expected");
                    message.icon = $root.TikTok.Image.fromObject(object.icon);
                }
                return message;
            };

            /**
             * Creates a plain object from a ProjectionConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {TikTok.BadgeStruct.ProjectionConfig} message ProjectionConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProjectionConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.useProjection = false;
                    object.icon = null;
                }
                if (message.useProjection != null && message.hasOwnProperty("useProjection"))
                    object.useProjection = message.useProjection;
                if (message.icon != null && message.hasOwnProperty("icon"))
                    object.icon = $root.TikTok.Image.toObject(message.icon, options);
                return object;
            };

            /**
             * Converts this ProjectionConfig to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProjectionConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ProjectionConfig
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.ProjectionConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ProjectionConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.ProjectionConfig";
            };

            return ProjectionConfig;
        })();

        BadgeStruct.ProfileContent = (function() {

            /**
             * Properties of a ProfileContent.
             * @memberof TikTok.BadgeStruct
             * @interface IProfileContent
             * @property {boolean|null} [useContent] ProfileContent useContent
             * @property {Array.<TikTok.BadgeStruct.IIconConfig>|null} [iconList] ProfileContent iconList
             * @property {TikTok.BadgeStruct.INumberConfig|null} [numberConfig] ProfileContent numberConfig
             */

            /**
             * Constructs a new ProfileContent.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a ProfileContent.
             * @implements IProfileContent
             * @constructor
             * @param {TikTok.BadgeStruct.IProfileContent=} [properties] Properties to set
             */
            function ProfileContent(properties) {
                this.iconList = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ProfileContent useContent.
             * @member {boolean} useContent
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @instance
             */
            ProfileContent.prototype.useContent = false;

            /**
             * ProfileContent iconList.
             * @member {Array.<TikTok.BadgeStruct.IIconConfig>} iconList
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @instance
             */
            ProfileContent.prototype.iconList = $util.emptyArray;

            /**
             * ProfileContent numberConfig.
             * @member {TikTok.BadgeStruct.INumberConfig|null|undefined} numberConfig
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @instance
             */
            ProfileContent.prototype.numberConfig = null;

            /**
             * Creates a new ProfileContent instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {TikTok.BadgeStruct.IProfileContent=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.ProfileContent} ProfileContent instance
             */
            ProfileContent.create = function create(properties) {
                return new ProfileContent(properties);
            };

            /**
             * Encodes the specified ProfileContent message. Does not implicitly {@link TikTok.BadgeStruct.ProfileContent.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {TikTok.BadgeStruct.IProfileContent} message ProfileContent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProfileContent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.useContent != null && Object.hasOwnProperty.call(message, "useContent"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.useContent);
                if (message.iconList != null && message.iconList.length)
                    for (var i = 0; i < message.iconList.length; ++i)
                        $root.TikTok.BadgeStruct.IconConfig.encode(message.iconList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.numberConfig != null && Object.hasOwnProperty.call(message, "numberConfig"))
                    $root.TikTok.BadgeStruct.NumberConfig.encode(message.numberConfig, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ProfileContent message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.ProfileContent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {TikTok.BadgeStruct.IProfileContent} message ProfileContent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ProfileContent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ProfileContent message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.ProfileContent} ProfileContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProfileContent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.ProfileContent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.useContent = reader.bool();
                            break;
                        }
                    case 2: {
                            if (!(message.iconList && message.iconList.length))
                                message.iconList = [];
                            message.iconList.push($root.TikTok.BadgeStruct.IconConfig.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            message.numberConfig = $root.TikTok.BadgeStruct.NumberConfig.decode(reader, reader.uint32());
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
             * Decodes a ProfileContent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.ProfileContent} ProfileContent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ProfileContent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ProfileContent message.
             * @function verify
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ProfileContent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.useContent != null && message.hasOwnProperty("useContent"))
                    if (typeof message.useContent !== "boolean")
                        return "useContent: boolean expected";
                if (message.iconList != null && message.hasOwnProperty("iconList")) {
                    if (!Array.isArray(message.iconList))
                        return "iconList: array expected";
                    for (var i = 0; i < message.iconList.length; ++i) {
                        var error = $root.TikTok.BadgeStruct.IconConfig.verify(message.iconList[i]);
                        if (error)
                            return "iconList." + error;
                    }
                }
                if (message.numberConfig != null && message.hasOwnProperty("numberConfig")) {
                    var error = $root.TikTok.BadgeStruct.NumberConfig.verify(message.numberConfig);
                    if (error)
                        return "numberConfig." + error;
                }
                return null;
            };

            /**
             * Creates a ProfileContent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.ProfileContent} ProfileContent
             */
            ProfileContent.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.ProfileContent)
                    return object;
                var message = new $root.TikTok.BadgeStruct.ProfileContent();
                if (object.useContent != null)
                    message.useContent = Boolean(object.useContent);
                if (object.iconList) {
                    if (!Array.isArray(object.iconList))
                        throw TypeError(".TikTok.BadgeStruct.ProfileContent.iconList: array expected");
                    message.iconList = [];
                    for (var i = 0; i < object.iconList.length; ++i) {
                        if (typeof object.iconList[i] !== "object")
                            throw TypeError(".TikTok.BadgeStruct.ProfileContent.iconList: object expected");
                        message.iconList[i] = $root.TikTok.BadgeStruct.IconConfig.fromObject(object.iconList[i]);
                    }
                }
                if (object.numberConfig != null) {
                    if (typeof object.numberConfig !== "object")
                        throw TypeError(".TikTok.BadgeStruct.ProfileContent.numberConfig: object expected");
                    message.numberConfig = $root.TikTok.BadgeStruct.NumberConfig.fromObject(object.numberConfig);
                }
                return message;
            };

            /**
             * Creates a plain object from a ProfileContent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {TikTok.BadgeStruct.ProfileContent} message ProfileContent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ProfileContent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.iconList = [];
                if (options.defaults) {
                    object.useContent = false;
                    object.numberConfig = null;
                }
                if (message.useContent != null && message.hasOwnProperty("useContent"))
                    object.useContent = message.useContent;
                if (message.iconList && message.iconList.length) {
                    object.iconList = [];
                    for (var j = 0; j < message.iconList.length; ++j)
                        object.iconList[j] = $root.TikTok.BadgeStruct.IconConfig.toObject(message.iconList[j], options);
                }
                if (message.numberConfig != null && message.hasOwnProperty("numberConfig"))
                    object.numberConfig = $root.TikTok.BadgeStruct.NumberConfig.toObject(message.numberConfig, options);
                return object;
            };

            /**
             * Converts this ProfileContent to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ProfileContent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ProfileContent
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.ProfileContent
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ProfileContent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.ProfileContent";
            };

            return ProfileContent;
        })();

        BadgeStruct.NumberConfig = (function() {

            /**
             * Properties of a NumberConfig.
             * @memberof TikTok.BadgeStruct
             * @interface INumberConfig
             * @property {number|Long|null} [number] NumberConfig number
             * @property {TikTok.BadgeStruct.ICombineBadgeBackground|null} [background] NumberConfig background
             */

            /**
             * Constructs a new NumberConfig.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a NumberConfig.
             * @implements INumberConfig
             * @constructor
             * @param {TikTok.BadgeStruct.INumberConfig=} [properties] Properties to set
             */
            function NumberConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NumberConfig number.
             * @member {number|Long} number
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @instance
             */
            NumberConfig.prototype.number = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * NumberConfig background.
             * @member {TikTok.BadgeStruct.ICombineBadgeBackground|null|undefined} background
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @instance
             */
            NumberConfig.prototype.background = null;

            /**
             * Creates a new NumberConfig instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {TikTok.BadgeStruct.INumberConfig=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.NumberConfig} NumberConfig instance
             */
            NumberConfig.create = function create(properties) {
                return new NumberConfig(properties);
            };

            /**
             * Encodes the specified NumberConfig message. Does not implicitly {@link TikTok.BadgeStruct.NumberConfig.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {TikTok.BadgeStruct.INumberConfig} message NumberConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NumberConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.number);
                if (message.background != null && Object.hasOwnProperty.call(message, "background"))
                    $root.TikTok.BadgeStruct.CombineBadgeBackground.encode(message.background, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NumberConfig message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.NumberConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {TikTok.BadgeStruct.INumberConfig} message NumberConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NumberConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NumberConfig message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.NumberConfig} NumberConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NumberConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.NumberConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.number = reader.int64();
                            break;
                        }
                    case 3: {
                            message.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.decode(reader, reader.uint32());
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
             * Decodes a NumberConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.NumberConfig} NumberConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NumberConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NumberConfig message.
             * @function verify
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NumberConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.number != null && message.hasOwnProperty("number"))
                    if (!$util.isInteger(message.number) && !(message.number && $util.isInteger(message.number.low) && $util.isInteger(message.number.high)))
                        return "number: integer|Long expected";
                if (message.background != null && message.hasOwnProperty("background")) {
                    var error = $root.TikTok.BadgeStruct.CombineBadgeBackground.verify(message.background);
                    if (error)
                        return "background." + error;
                }
                return null;
            };

            /**
             * Creates a NumberConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.NumberConfig} NumberConfig
             */
            NumberConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.NumberConfig)
                    return object;
                var message = new $root.TikTok.BadgeStruct.NumberConfig();
                if (object.number != null)
                    if ($util.Long)
                        (message.number = $util.Long.fromValue(object.number)).unsigned = false;
                    else if (typeof object.number === "string")
                        message.number = parseInt(object.number, 10);
                    else if (typeof object.number === "number")
                        message.number = object.number;
                    else if (typeof object.number === "object")
                        message.number = new $util.LongBits(object.number.low >>> 0, object.number.high >>> 0).toNumber();
                if (object.background != null) {
                    if (typeof object.background !== "object")
                        throw TypeError(".TikTok.BadgeStruct.NumberConfig.background: object expected");
                    message.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.fromObject(object.background);
                }
                return message;
            };

            /**
             * Creates a plain object from a NumberConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {TikTok.BadgeStruct.NumberConfig} message NumberConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NumberConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.number = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.number = options.longs === String ? "0" : 0;
                    object.background = null;
                }
                if (message.number != null && message.hasOwnProperty("number"))
                    if (typeof message.number === "number")
                        object.number = options.longs === String ? String(message.number) : message.number;
                    else
                        object.number = options.longs === String ? $util.Long.prototype.toString.call(message.number) : options.longs === Number ? new $util.LongBits(message.number.low >>> 0, message.number.high >>> 0).toNumber() : message.number;
                if (message.background != null && message.hasOwnProperty("background"))
                    object.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.toObject(message.background, options);
                return object;
            };

            /**
             * Converts this NumberConfig to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NumberConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NumberConfig
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.NumberConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NumberConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.NumberConfig";
            };

            return NumberConfig;
        })();

        BadgeStruct.CombineBadgeBackground = (function() {

            /**
             * Properties of a CombineBadgeBackground.
             * @memberof TikTok.BadgeStruct
             * @interface ICombineBadgeBackground
             * @property {TikTok.IImage|null} [image] CombineBadgeBackground image
             * @property {string|null} [backgroundColorCode] CombineBadgeBackground backgroundColorCode
             * @property {string|null} [borderColorCode] CombineBadgeBackground borderColorCode
             */

            /**
             * Constructs a new CombineBadgeBackground.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a CombineBadgeBackground.
             * @implements ICombineBadgeBackground
             * @constructor
             * @param {TikTok.BadgeStruct.ICombineBadgeBackground=} [properties] Properties to set
             */
            function CombineBadgeBackground(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CombineBadgeBackground image.
             * @member {TikTok.IImage|null|undefined} image
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @instance
             */
            CombineBadgeBackground.prototype.image = null;

            /**
             * CombineBadgeBackground backgroundColorCode.
             * @member {string} backgroundColorCode
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @instance
             */
            CombineBadgeBackground.prototype.backgroundColorCode = "";

            /**
             * CombineBadgeBackground borderColorCode.
             * @member {string} borderColorCode
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @instance
             */
            CombineBadgeBackground.prototype.borderColorCode = "";

            /**
             * Creates a new CombineBadgeBackground instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {TikTok.BadgeStruct.ICombineBadgeBackground=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.CombineBadgeBackground} CombineBadgeBackground instance
             */
            CombineBadgeBackground.create = function create(properties) {
                return new CombineBadgeBackground(properties);
            };

            /**
             * Encodes the specified CombineBadgeBackground message. Does not implicitly {@link TikTok.BadgeStruct.CombineBadgeBackground.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {TikTok.BadgeStruct.ICombineBadgeBackground} message CombineBadgeBackground message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CombineBadgeBackground.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    $root.TikTok.Image.encode(message.image, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.backgroundColorCode != null && Object.hasOwnProperty.call(message, "backgroundColorCode"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.backgroundColorCode);
                if (message.borderColorCode != null && Object.hasOwnProperty.call(message, "borderColorCode"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.borderColorCode);
                return writer;
            };

            /**
             * Encodes the specified CombineBadgeBackground message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.CombineBadgeBackground.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {TikTok.BadgeStruct.ICombineBadgeBackground} message CombineBadgeBackground message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CombineBadgeBackground.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CombineBadgeBackground message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.CombineBadgeBackground} CombineBadgeBackground
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CombineBadgeBackground.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.CombineBadgeBackground();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.image = $root.TikTok.Image.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.backgroundColorCode = reader.string();
                            break;
                        }
                    case 3: {
                            message.borderColorCode = reader.string();
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
             * Decodes a CombineBadgeBackground message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.CombineBadgeBackground} CombineBadgeBackground
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CombineBadgeBackground.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CombineBadgeBackground message.
             * @function verify
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CombineBadgeBackground.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.image != null && message.hasOwnProperty("image")) {
                    var error = $root.TikTok.Image.verify(message.image);
                    if (error)
                        return "image." + error;
                }
                if (message.backgroundColorCode != null && message.hasOwnProperty("backgroundColorCode"))
                    if (!$util.isString(message.backgroundColorCode))
                        return "backgroundColorCode: string expected";
                if (message.borderColorCode != null && message.hasOwnProperty("borderColorCode"))
                    if (!$util.isString(message.borderColorCode))
                        return "borderColorCode: string expected";
                return null;
            };

            /**
             * Creates a CombineBadgeBackground message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.CombineBadgeBackground} CombineBadgeBackground
             */
            CombineBadgeBackground.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.CombineBadgeBackground)
                    return object;
                var message = new $root.TikTok.BadgeStruct.CombineBadgeBackground();
                if (object.image != null) {
                    if (typeof object.image !== "object")
                        throw TypeError(".TikTok.BadgeStruct.CombineBadgeBackground.image: object expected");
                    message.image = $root.TikTok.Image.fromObject(object.image);
                }
                if (object.backgroundColorCode != null)
                    message.backgroundColorCode = String(object.backgroundColorCode);
                if (object.borderColorCode != null)
                    message.borderColorCode = String(object.borderColorCode);
                return message;
            };

            /**
             * Creates a plain object from a CombineBadgeBackground message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {TikTok.BadgeStruct.CombineBadgeBackground} message CombineBadgeBackground
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CombineBadgeBackground.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.image = null;
                    object.backgroundColorCode = "";
                    object.borderColorCode = "";
                }
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = $root.TikTok.Image.toObject(message.image, options);
                if (message.backgroundColorCode != null && message.hasOwnProperty("backgroundColorCode"))
                    object.backgroundColorCode = message.backgroundColorCode;
                if (message.borderColorCode != null && message.hasOwnProperty("borderColorCode"))
                    object.borderColorCode = message.borderColorCode;
                return object;
            };

            /**
             * Converts this CombineBadgeBackground to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CombineBadgeBackground.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CombineBadgeBackground
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.CombineBadgeBackground
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CombineBadgeBackground.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.CombineBadgeBackground";
            };

            return CombineBadgeBackground;
        })();

        BadgeStruct.ImageBadge = (function() {

            /**
             * Properties of an ImageBadge.
             * @memberof TikTok.BadgeStruct
             * @interface IImageBadge
             * @property {TikTok.IImage|null} [image] ImageBadge image
             */

            /**
             * Constructs a new ImageBadge.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents an ImageBadge.
             * @implements IImageBadge
             * @constructor
             * @param {TikTok.BadgeStruct.IImageBadge=} [properties] Properties to set
             */
            function ImageBadge(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ImageBadge image.
             * @member {TikTok.IImage|null|undefined} image
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @instance
             */
            ImageBadge.prototype.image = null;

            /**
             * Creates a new ImageBadge instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {TikTok.BadgeStruct.IImageBadge=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.ImageBadge} ImageBadge instance
             */
            ImageBadge.create = function create(properties) {
                return new ImageBadge(properties);
            };

            /**
             * Encodes the specified ImageBadge message. Does not implicitly {@link TikTok.BadgeStruct.ImageBadge.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {TikTok.BadgeStruct.IImageBadge} message ImageBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ImageBadge.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    $root.TikTok.Image.encode(message.image, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ImageBadge message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.ImageBadge.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {TikTok.BadgeStruct.IImageBadge} message ImageBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ImageBadge.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ImageBadge message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.ImageBadge} ImageBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ImageBadge.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.ImageBadge();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.image = $root.TikTok.Image.decode(reader, reader.uint32());
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
             * Decodes an ImageBadge message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.ImageBadge} ImageBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ImageBadge.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ImageBadge message.
             * @function verify
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ImageBadge.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.image != null && message.hasOwnProperty("image")) {
                    var error = $root.TikTok.Image.verify(message.image);
                    if (error)
                        return "image." + error;
                }
                return null;
            };

            /**
             * Creates an ImageBadge message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.ImageBadge} ImageBadge
             */
            ImageBadge.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.ImageBadge)
                    return object;
                var message = new $root.TikTok.BadgeStruct.ImageBadge();
                if (object.image != null) {
                    if (typeof object.image !== "object")
                        throw TypeError(".TikTok.BadgeStruct.ImageBadge.image: object expected");
                    message.image = $root.TikTok.Image.fromObject(object.image);
                }
                return message;
            };

            /**
             * Creates a plain object from an ImageBadge message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {TikTok.BadgeStruct.ImageBadge} message ImageBadge
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ImageBadge.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.image = null;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = $root.TikTok.Image.toObject(message.image, options);
                return object;
            };

            /**
             * Converts this ImageBadge to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ImageBadge.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ImageBadge
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.ImageBadge
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ImageBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.ImageBadge";
            };

            return ImageBadge;
        })();

        BadgeStruct.TextBadge = (function() {

            /**
             * Properties of a TextBadge.
             * @memberof TikTok.BadgeStruct
             * @interface ITextBadge
             * @property {string|null} [defaultPattern] TextBadge defaultPattern
             */

            /**
             * Constructs a new TextBadge.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a TextBadge.
             * @implements ITextBadge
             * @constructor
             * @param {TikTok.BadgeStruct.ITextBadge=} [properties] Properties to set
             */
            function TextBadge(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TextBadge defaultPattern.
             * @member {string} defaultPattern
             * @memberof TikTok.BadgeStruct.TextBadge
             * @instance
             */
            TextBadge.prototype.defaultPattern = "";

            /**
             * Creates a new TextBadge instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {TikTok.BadgeStruct.ITextBadge=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.TextBadge} TextBadge instance
             */
            TextBadge.create = function create(properties) {
                return new TextBadge(properties);
            };

            /**
             * Encodes the specified TextBadge message. Does not implicitly {@link TikTok.BadgeStruct.TextBadge.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {TikTok.BadgeStruct.ITextBadge} message TextBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextBadge.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.defaultPattern != null && Object.hasOwnProperty.call(message, "defaultPattern"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.defaultPattern);
                return writer;
            };

            /**
             * Encodes the specified TextBadge message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.TextBadge.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {TikTok.BadgeStruct.ITextBadge} message TextBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TextBadge.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TextBadge message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.TextBadge} TextBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextBadge.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.TextBadge();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 3: {
                            message.defaultPattern = reader.string();
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
             * Decodes a TextBadge message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.TextBadge} TextBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TextBadge.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TextBadge message.
             * @function verify
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TextBadge.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.defaultPattern != null && message.hasOwnProperty("defaultPattern"))
                    if (!$util.isString(message.defaultPattern))
                        return "defaultPattern: string expected";
                return null;
            };

            /**
             * Creates a TextBadge message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.TextBadge} TextBadge
             */
            TextBadge.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.TextBadge)
                    return object;
                var message = new $root.TikTok.BadgeStruct.TextBadge();
                if (object.defaultPattern != null)
                    message.defaultPattern = String(object.defaultPattern);
                return message;
            };

            /**
             * Creates a plain object from a TextBadge message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {TikTok.BadgeStruct.TextBadge} message TextBadge
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TextBadge.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.defaultPattern = "";
                if (message.defaultPattern != null && message.hasOwnProperty("defaultPattern"))
                    object.defaultPattern = message.defaultPattern;
                return object;
            };

            /**
             * Converts this TextBadge to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.TextBadge
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TextBadge.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TextBadge
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.TextBadge
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TextBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.TextBadge";
            };

            return TextBadge;
        })();

        BadgeStruct.IconConfig = (function() {

            /**
             * Properties of an IconConfig.
             * @memberof TikTok.BadgeStruct
             * @interface IIconConfig
             * @property {TikTok.IImage|null} [icon] IconConfig icon
             * @property {TikTok.BadgeStruct.ICombineBadgeBackground|null} [background] IconConfig background
             */

            /**
             * Constructs a new IconConfig.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents an IconConfig.
             * @implements IIconConfig
             * @constructor
             * @param {TikTok.BadgeStruct.IIconConfig=} [properties] Properties to set
             */
            function IconConfig(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * IconConfig icon.
             * @member {TikTok.IImage|null|undefined} icon
             * @memberof TikTok.BadgeStruct.IconConfig
             * @instance
             */
            IconConfig.prototype.icon = null;

            /**
             * IconConfig background.
             * @member {TikTok.BadgeStruct.ICombineBadgeBackground|null|undefined} background
             * @memberof TikTok.BadgeStruct.IconConfig
             * @instance
             */
            IconConfig.prototype.background = null;

            /**
             * Creates a new IconConfig instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {TikTok.BadgeStruct.IIconConfig=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.IconConfig} IconConfig instance
             */
            IconConfig.create = function create(properties) {
                return new IconConfig(properties);
            };

            /**
             * Encodes the specified IconConfig message. Does not implicitly {@link TikTok.BadgeStruct.IconConfig.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {TikTok.BadgeStruct.IIconConfig} message IconConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IconConfig.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                    $root.TikTok.Image.encode(message.icon, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.background != null && Object.hasOwnProperty.call(message, "background"))
                    $root.TikTok.BadgeStruct.CombineBadgeBackground.encode(message.background, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified IconConfig message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.IconConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {TikTok.BadgeStruct.IIconConfig} message IconConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            IconConfig.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an IconConfig message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.IconConfig} IconConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IconConfig.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.IconConfig();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.icon = $root.TikTok.Image.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.decode(reader, reader.uint32());
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
             * Decodes an IconConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.IconConfig} IconConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            IconConfig.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an IconConfig message.
             * @function verify
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            IconConfig.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.icon != null && message.hasOwnProperty("icon")) {
                    var error = $root.TikTok.Image.verify(message.icon);
                    if (error)
                        return "icon." + error;
                }
                if (message.background != null && message.hasOwnProperty("background")) {
                    var error = $root.TikTok.BadgeStruct.CombineBadgeBackground.verify(message.background);
                    if (error)
                        return "background." + error;
                }
                return null;
            };

            /**
             * Creates an IconConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.IconConfig} IconConfig
             */
            IconConfig.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.IconConfig)
                    return object;
                var message = new $root.TikTok.BadgeStruct.IconConfig();
                if (object.icon != null) {
                    if (typeof object.icon !== "object")
                        throw TypeError(".TikTok.BadgeStruct.IconConfig.icon: object expected");
                    message.icon = $root.TikTok.Image.fromObject(object.icon);
                }
                if (object.background != null) {
                    if (typeof object.background !== "object")
                        throw TypeError(".TikTok.BadgeStruct.IconConfig.background: object expected");
                    message.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.fromObject(object.background);
                }
                return message;
            };

            /**
             * Creates a plain object from an IconConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {TikTok.BadgeStruct.IconConfig} message IconConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            IconConfig.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.icon = null;
                    object.background = null;
                }
                if (message.icon != null && message.hasOwnProperty("icon"))
                    object.icon = $root.TikTok.Image.toObject(message.icon, options);
                if (message.background != null && message.hasOwnProperty("background"))
                    object.background = $root.TikTok.BadgeStruct.CombineBadgeBackground.toObject(message.background, options);
                return object;
            };

            /**
             * Converts this IconConfig to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.IconConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            IconConfig.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for IconConfig
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.IconConfig
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            IconConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.IconConfig";
            };

            return IconConfig;
        })();

        BadgeStruct.StringBadge = (function() {

            /**
             * Properties of a StringBadge.
             * @memberof TikTok.BadgeStruct
             * @interface IStringBadge
             * @property {string|null} [str] StringBadge str
             */

            /**
             * Constructs a new StringBadge.
             * @memberof TikTok.BadgeStruct
             * @classdesc Represents a StringBadge.
             * @implements IStringBadge
             * @constructor
             * @param {TikTok.BadgeStruct.IStringBadge=} [properties] Properties to set
             */
            function StringBadge(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringBadge str.
             * @member {string} str
             * @memberof TikTok.BadgeStruct.StringBadge
             * @instance
             */
            StringBadge.prototype.str = "";

            /**
             * Creates a new StringBadge instance using the specified properties.
             * @function create
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {TikTok.BadgeStruct.IStringBadge=} [properties] Properties to set
             * @returns {TikTok.BadgeStruct.StringBadge} StringBadge instance
             */
            StringBadge.create = function create(properties) {
                return new StringBadge(properties);
            };

            /**
             * Encodes the specified StringBadge message. Does not implicitly {@link TikTok.BadgeStruct.StringBadge.verify|verify} messages.
             * @function encode
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {TikTok.BadgeStruct.IStringBadge} message StringBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringBadge.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.str != null && Object.hasOwnProperty.call(message, "str"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.str);
                return writer;
            };

            /**
             * Encodes the specified StringBadge message, length delimited. Does not implicitly {@link TikTok.BadgeStruct.StringBadge.verify|verify} messages.
             * @function encodeDelimited
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {TikTok.BadgeStruct.IStringBadge} message StringBadge message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringBadge.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringBadge message from the specified reader or buffer.
             * @function decode
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {TikTok.BadgeStruct.StringBadge} StringBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringBadge.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.BadgeStruct.StringBadge();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2: {
                            message.str = reader.string();
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
             * Decodes a StringBadge message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {TikTok.BadgeStruct.StringBadge} StringBadge
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringBadge.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringBadge message.
             * @function verify
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringBadge.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.str != null && message.hasOwnProperty("str"))
                    if (!$util.isString(message.str))
                        return "str: string expected";
                return null;
            };

            /**
             * Creates a StringBadge message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {TikTok.BadgeStruct.StringBadge} StringBadge
             */
            StringBadge.fromObject = function fromObject(object) {
                if (object instanceof $root.TikTok.BadgeStruct.StringBadge)
                    return object;
                var message = new $root.TikTok.BadgeStruct.StringBadge();
                if (object.str != null)
                    message.str = String(object.str);
                return message;
            };

            /**
             * Creates a plain object from a StringBadge message. Also converts values to other types if specified.
             * @function toObject
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {TikTok.BadgeStruct.StringBadge} message StringBadge
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringBadge.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.str = "";
                if (message.str != null && message.hasOwnProperty("str"))
                    object.str = message.str;
                return object;
            };

            /**
             * Converts this StringBadge to JSON.
             * @function toJSON
             * @memberof TikTok.BadgeStruct.StringBadge
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringBadge.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StringBadge
             * @function getTypeUrl
             * @memberof TikTok.BadgeStruct.StringBadge
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StringBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/TikTok.BadgeStruct.StringBadge";
            };

            return StringBadge;
        })();

        /**
         * DisplayType enum.
         * @name TikTok.BadgeStruct.DisplayType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} IMAGE=1 IMAGE value
         * @property {number} TEXT=2 TEXT value
         * @property {number} STRING=3 STRING value
         * @property {number} COMBINE=4 COMBINE value
         */
        BadgeStruct.DisplayType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "IMAGE"] = 1;
            values[valuesById[2] = "TEXT"] = 2;
            values[valuesById[3] = "STRING"] = 3;
            values[valuesById[4] = "COMBINE"] = 4;
            return values;
        })();

        /**
         * PriorityType enum.
         * @name TikTok.BadgeStruct.PriorityType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} STRONG_RELATION=10 STRONG_RELATION value
         * @property {number} PLATFORM=20 PLATFORM value
         * @property {number} RELATION=30 RELATION value
         * @property {number} ACTIVITY=40 ACTIVITY value
         * @property {number} RANKLIST=50 RANKLIST value
         */
        BadgeStruct.PriorityType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[10] = "STRONG_RELATION"] = 10;
            values[valuesById[20] = "PLATFORM"] = 20;
            values[valuesById[30] = "RELATION"] = 30;
            values[valuesById[40] = "ACTIVITY"] = 40;
            values[valuesById[50] = "RANKLIST"] = 50;
            return values;
        })();

        /**
         * ExhibitionType enum.
         * @name TikTok.BadgeStruct.ExhibitionType
         * @enum {number}
         * @property {number} BADGE=0 BADGE value
         * @property {number} IDENTITY_LABEL=1 IDENTITY_LABEL value
         */
        BadgeStruct.ExhibitionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BADGE"] = 0;
            values[valuesById[1] = "IDENTITY_LABEL"] = 1;
            return values;
        })();

        /**
         * Position enum.
         * @name TikTok.BadgeStruct.Position
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} LEFT=1 LEFT value
         * @property {number} RIGHT=2 RIGHT value
         */
        BadgeStruct.Position = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LEFT"] = 1;
            values[valuesById[2] = "RIGHT"] = 2;
            return values;
        })();

        /**
         * HorizontalPaddingRule enum.
         * @name TikTok.BadgeStruct.HorizontalPaddingRule
         * @enum {number}
         * @property {number} USE_MIDDLE_AND_WIDTH=0 USE_MIDDLE_AND_WIDTH value
         * @property {number} USE_LEFT_AND_MIDDLE_AND_RIGHT=1 USE_LEFT_AND_MIDDLE_AND_RIGHT value
         */
        BadgeStruct.HorizontalPaddingRule = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "USE_MIDDLE_AND_WIDTH"] = 0;
            values[valuesById[1] = "USE_LEFT_AND_MIDDLE_AND_RIGHT"] = 1;
            return values;
        })();

        /**
         * VerticalPaddingRule enum.
         * @name TikTok.BadgeStruct.VerticalPaddingRule
         * @enum {number}
         * @property {number} USE_DEFAULT=0 USE_DEFAULT value
         * @property {number} USE_TOP_AND_BOTTOM=1 USE_TOP_AND_BOTTOM value
         */
        BadgeStruct.VerticalPaddingRule = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "USE_DEFAULT"] = 0;
            values[valuesById[1] = "USE_TOP_AND_BOTTOM"] = 1;
            return values;
        })();

        /**
         * BadgeTextPosition enum.
         * @name TikTok.BadgeStruct.BadgeTextPosition
         * @enum {number}
         * @property {number} BADGETEXTPOSITION_UNKNOWN=0 BADGETEXTPOSITION_UNKNOWN value
         * @property {number} BADGETEXTPOSITION_RIGHT=1 BADGETEXTPOSITION_RIGHT value
         * @property {number} BADGETEXTPOSITION_BELOW=2 BADGETEXTPOSITION_BELOW value
         */
        BadgeStruct.BadgeTextPosition = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BADGETEXTPOSITION_UNKNOWN"] = 0;
            values[valuesById[1] = "BADGETEXTPOSITION_RIGHT"] = 1;
            values[valuesById[2] = "BADGETEXTPOSITION_BELOW"] = 2;
            return values;
        })();

        return BadgeStruct;
    })();

    TikTok.SubscribeBadge = (function() {

        /**
         * Properties of a SubscribeBadge.
         * @memberof TikTok
         * @interface ISubscribeBadge
         * @property {TikTok.IImage|null} [originImg] SubscribeBadge originImg
         * @property {TikTok.IImage|null} [previewImg] SubscribeBadge previewImg
         * @property {boolean|null} [isCustomized] SubscribeBadge isCustomized
         */

        /**
         * Constructs a new SubscribeBadge.
         * @memberof TikTok
         * @classdesc Represents a SubscribeBadge.
         * @implements ISubscribeBadge
         * @constructor
         * @param {TikTok.ISubscribeBadge=} [properties] Properties to set
         */
        function SubscribeBadge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscribeBadge originImg.
         * @member {TikTok.IImage|null|undefined} originImg
         * @memberof TikTok.SubscribeBadge
         * @instance
         */
        SubscribeBadge.prototype.originImg = null;

        /**
         * SubscribeBadge previewImg.
         * @member {TikTok.IImage|null|undefined} previewImg
         * @memberof TikTok.SubscribeBadge
         * @instance
         */
        SubscribeBadge.prototype.previewImg = null;

        /**
         * SubscribeBadge isCustomized.
         * @member {boolean} isCustomized
         * @memberof TikTok.SubscribeBadge
         * @instance
         */
        SubscribeBadge.prototype.isCustomized = false;

        /**
         * Creates a new SubscribeBadge instance using the specified properties.
         * @function create
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {TikTok.ISubscribeBadge=} [properties] Properties to set
         * @returns {TikTok.SubscribeBadge} SubscribeBadge instance
         */
        SubscribeBadge.create = function create(properties) {
            return new SubscribeBadge(properties);
        };

        /**
         * Encodes the specified SubscribeBadge message. Does not implicitly {@link TikTok.SubscribeBadge.verify|verify} messages.
         * @function encode
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {TikTok.ISubscribeBadge} message SubscribeBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeBadge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.originImg != null && Object.hasOwnProperty.call(message, "originImg"))
                $root.TikTok.Image.encode(message.originImg, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.previewImg != null && Object.hasOwnProperty.call(message, "previewImg"))
                $root.TikTok.Image.encode(message.previewImg, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isCustomized != null && Object.hasOwnProperty.call(message, "isCustomized"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isCustomized);
            return writer;
        };

        /**
         * Encodes the specified SubscribeBadge message, length delimited. Does not implicitly {@link TikTok.SubscribeBadge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {TikTok.ISubscribeBadge} message SubscribeBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeBadge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscribeBadge message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.SubscribeBadge} SubscribeBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeBadge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.SubscribeBadge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3: {
                        message.originImg = $root.TikTok.Image.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.previewImg = $root.TikTok.Image.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.isCustomized = reader.bool();
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
         * Decodes a SubscribeBadge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.SubscribeBadge} SubscribeBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeBadge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscribeBadge message.
         * @function verify
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscribeBadge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.originImg != null && message.hasOwnProperty("originImg")) {
                var error = $root.TikTok.Image.verify(message.originImg);
                if (error)
                    return "originImg." + error;
            }
            if (message.previewImg != null && message.hasOwnProperty("previewImg")) {
                var error = $root.TikTok.Image.verify(message.previewImg);
                if (error)
                    return "previewImg." + error;
            }
            if (message.isCustomized != null && message.hasOwnProperty("isCustomized"))
                if (typeof message.isCustomized !== "boolean")
                    return "isCustomized: boolean expected";
            return null;
        };

        /**
         * Creates a SubscribeBadge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.SubscribeBadge} SubscribeBadge
         */
        SubscribeBadge.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.SubscribeBadge)
                return object;
            var message = new $root.TikTok.SubscribeBadge();
            if (object.originImg != null) {
                if (typeof object.originImg !== "object")
                    throw TypeError(".TikTok.SubscribeBadge.originImg: object expected");
                message.originImg = $root.TikTok.Image.fromObject(object.originImg);
            }
            if (object.previewImg != null) {
                if (typeof object.previewImg !== "object")
                    throw TypeError(".TikTok.SubscribeBadge.previewImg: object expected");
                message.previewImg = $root.TikTok.Image.fromObject(object.previewImg);
            }
            if (object.isCustomized != null)
                message.isCustomized = Boolean(object.isCustomized);
            return message;
        };

        /**
         * Creates a plain object from a SubscribeBadge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {TikTok.SubscribeBadge} message SubscribeBadge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscribeBadge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.originImg = null;
                object.previewImg = null;
                object.isCustomized = false;
            }
            if (message.originImg != null && message.hasOwnProperty("originImg"))
                object.originImg = $root.TikTok.Image.toObject(message.originImg, options);
            if (message.previewImg != null && message.hasOwnProperty("previewImg"))
                object.previewImg = $root.TikTok.Image.toObject(message.previewImg, options);
            if (message.isCustomized != null && message.hasOwnProperty("isCustomized"))
                object.isCustomized = message.isCustomized;
            return object;
        };

        /**
         * Converts this SubscribeBadge to JSON.
         * @function toJSON
         * @memberof TikTok.SubscribeBadge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscribeBadge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubscribeBadge
         * @function getTypeUrl
         * @memberof TikTok.SubscribeBadge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubscribeBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.SubscribeBadge";
        };

        return SubscribeBadge;
    })();

    TikTok.SubscribeInfo = (function() {

        /**
         * Properties of a SubscribeInfo.
         * @memberof TikTok
         * @interface ISubscribeInfo
         * @property {boolean|null} [qualification] SubscribeInfo qualification
         * @property {boolean|null} [isSubscribe] SubscribeInfo isSubscribe
         * @property {TikTok.ISubscribeBadge|null} [badge] SubscribeInfo badge
         * @property {boolean|null} [enableSubscription] SubscribeInfo enableSubscription
         * @property {number|Long|null} [subscriberCount] SubscribeInfo subscriberCount
         * @property {boolean|null} [isInGracePeriod] SubscribeInfo isInGracePeriod
         * @property {boolean|null} [isSubscribedToAnchor] SubscribeInfo isSubscribedToAnchor
         * @property {boolean|null} [userGiftSubAuth] SubscribeInfo userGiftSubAuth
         * @property {boolean|null} [anchorGiftSubAuth] SubscribeInfo anchorGiftSubAuth
         */

        /**
         * Constructs a new SubscribeInfo.
         * @memberof TikTok
         * @classdesc Represents a SubscribeInfo.
         * @implements ISubscribeInfo
         * @constructor
         * @param {TikTok.ISubscribeInfo=} [properties] Properties to set
         */
        function SubscribeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscribeInfo qualification.
         * @member {boolean} qualification
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.qualification = false;

        /**
         * SubscribeInfo isSubscribe.
         * @member {boolean} isSubscribe
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.isSubscribe = false;

        /**
         * SubscribeInfo badge.
         * @member {TikTok.ISubscribeBadge|null|undefined} badge
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.badge = null;

        /**
         * SubscribeInfo enableSubscription.
         * @member {boolean} enableSubscription
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.enableSubscription = false;

        /**
         * SubscribeInfo subscriberCount.
         * @member {number|Long} subscriberCount
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.subscriberCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SubscribeInfo isInGracePeriod.
         * @member {boolean} isInGracePeriod
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.isInGracePeriod = false;

        /**
         * SubscribeInfo isSubscribedToAnchor.
         * @member {boolean} isSubscribedToAnchor
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.isSubscribedToAnchor = false;

        /**
         * SubscribeInfo userGiftSubAuth.
         * @member {boolean} userGiftSubAuth
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.userGiftSubAuth = false;

        /**
         * SubscribeInfo anchorGiftSubAuth.
         * @member {boolean} anchorGiftSubAuth
         * @memberof TikTok.SubscribeInfo
         * @instance
         */
        SubscribeInfo.prototype.anchorGiftSubAuth = false;

        /**
         * Creates a new SubscribeInfo instance using the specified properties.
         * @function create
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {TikTok.ISubscribeInfo=} [properties] Properties to set
         * @returns {TikTok.SubscribeInfo} SubscribeInfo instance
         */
        SubscribeInfo.create = function create(properties) {
            return new SubscribeInfo(properties);
        };

        /**
         * Encodes the specified SubscribeInfo message. Does not implicitly {@link TikTok.SubscribeInfo.verify|verify} messages.
         * @function encode
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {TikTok.ISubscribeInfo} message SubscribeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.qualification != null && Object.hasOwnProperty.call(message, "qualification"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.qualification);
            if (message.isSubscribe != null && Object.hasOwnProperty.call(message, "isSubscribe"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isSubscribe);
            if (message.badge != null && Object.hasOwnProperty.call(message, "badge"))
                $root.TikTok.SubscribeBadge.encode(message.badge, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.enableSubscription != null && Object.hasOwnProperty.call(message, "enableSubscription"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.enableSubscription);
            if (message.subscriberCount != null && Object.hasOwnProperty.call(message, "subscriberCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.subscriberCount);
            if (message.isInGracePeriod != null && Object.hasOwnProperty.call(message, "isInGracePeriod"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isInGracePeriod);
            if (message.isSubscribedToAnchor != null && Object.hasOwnProperty.call(message, "isSubscribedToAnchor"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.isSubscribedToAnchor);
            if (message.userGiftSubAuth != null && Object.hasOwnProperty.call(message, "userGiftSubAuth"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.userGiftSubAuth);
            if (message.anchorGiftSubAuth != null && Object.hasOwnProperty.call(message, "anchorGiftSubAuth"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.anchorGiftSubAuth);
            return writer;
        };

        /**
         * Encodes the specified SubscribeInfo message, length delimited. Does not implicitly {@link TikTok.SubscribeInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {TikTok.ISubscribeInfo} message SubscribeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscribeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.SubscribeInfo} SubscribeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.SubscribeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.qualification = reader.bool();
                        break;
                    }
                case 2: {
                        message.isSubscribe = reader.bool();
                        break;
                    }
                case 3: {
                        message.badge = $root.TikTok.SubscribeBadge.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.enableSubscription = reader.bool();
                        break;
                    }
                case 5: {
                        message.subscriberCount = reader.int64();
                        break;
                    }
                case 6: {
                        message.isInGracePeriod = reader.bool();
                        break;
                    }
                case 7: {
                        message.isSubscribedToAnchor = reader.bool();
                        break;
                    }
                case 9: {
                        message.userGiftSubAuth = reader.bool();
                        break;
                    }
                case 10: {
                        message.anchorGiftSubAuth = reader.bool();
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
         * Decodes a SubscribeInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.SubscribeInfo} SubscribeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscribeInfo message.
         * @function verify
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscribeInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.qualification != null && message.hasOwnProperty("qualification"))
                if (typeof message.qualification !== "boolean")
                    return "qualification: boolean expected";
            if (message.isSubscribe != null && message.hasOwnProperty("isSubscribe"))
                if (typeof message.isSubscribe !== "boolean")
                    return "isSubscribe: boolean expected";
            if (message.badge != null && message.hasOwnProperty("badge")) {
                var error = $root.TikTok.SubscribeBadge.verify(message.badge);
                if (error)
                    return "badge." + error;
            }
            if (message.enableSubscription != null && message.hasOwnProperty("enableSubscription"))
                if (typeof message.enableSubscription !== "boolean")
                    return "enableSubscription: boolean expected";
            if (message.subscriberCount != null && message.hasOwnProperty("subscriberCount"))
                if (!$util.isInteger(message.subscriberCount) && !(message.subscriberCount && $util.isInteger(message.subscriberCount.low) && $util.isInteger(message.subscriberCount.high)))
                    return "subscriberCount: integer|Long expected";
            if (message.isInGracePeriod != null && message.hasOwnProperty("isInGracePeriod"))
                if (typeof message.isInGracePeriod !== "boolean")
                    return "isInGracePeriod: boolean expected";
            if (message.isSubscribedToAnchor != null && message.hasOwnProperty("isSubscribedToAnchor"))
                if (typeof message.isSubscribedToAnchor !== "boolean")
                    return "isSubscribedToAnchor: boolean expected";
            if (message.userGiftSubAuth != null && message.hasOwnProperty("userGiftSubAuth"))
                if (typeof message.userGiftSubAuth !== "boolean")
                    return "userGiftSubAuth: boolean expected";
            if (message.anchorGiftSubAuth != null && message.hasOwnProperty("anchorGiftSubAuth"))
                if (typeof message.anchorGiftSubAuth !== "boolean")
                    return "anchorGiftSubAuth: boolean expected";
            return null;
        };

        /**
         * Creates a SubscribeInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.SubscribeInfo} SubscribeInfo
         */
        SubscribeInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.SubscribeInfo)
                return object;
            var message = new $root.TikTok.SubscribeInfo();
            if (object.qualification != null)
                message.qualification = Boolean(object.qualification);
            if (object.isSubscribe != null)
                message.isSubscribe = Boolean(object.isSubscribe);
            if (object.badge != null) {
                if (typeof object.badge !== "object")
                    throw TypeError(".TikTok.SubscribeInfo.badge: object expected");
                message.badge = $root.TikTok.SubscribeBadge.fromObject(object.badge);
            }
            if (object.enableSubscription != null)
                message.enableSubscription = Boolean(object.enableSubscription);
            if (object.subscriberCount != null)
                if ($util.Long)
                    (message.subscriberCount = $util.Long.fromValue(object.subscriberCount)).unsigned = false;
                else if (typeof object.subscriberCount === "string")
                    message.subscriberCount = parseInt(object.subscriberCount, 10);
                else if (typeof object.subscriberCount === "number")
                    message.subscriberCount = object.subscriberCount;
                else if (typeof object.subscriberCount === "object")
                    message.subscriberCount = new $util.LongBits(object.subscriberCount.low >>> 0, object.subscriberCount.high >>> 0).toNumber();
            if (object.isInGracePeriod != null)
                message.isInGracePeriod = Boolean(object.isInGracePeriod);
            if (object.isSubscribedToAnchor != null)
                message.isSubscribedToAnchor = Boolean(object.isSubscribedToAnchor);
            if (object.userGiftSubAuth != null)
                message.userGiftSubAuth = Boolean(object.userGiftSubAuth);
            if (object.anchorGiftSubAuth != null)
                message.anchorGiftSubAuth = Boolean(object.anchorGiftSubAuth);
            return message;
        };

        /**
         * Creates a plain object from a SubscribeInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {TikTok.SubscribeInfo} message SubscribeInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscribeInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.qualification = false;
                object.isSubscribe = false;
                object.badge = null;
                object.enableSubscription = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.subscriberCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.subscriberCount = options.longs === String ? "0" : 0;
                object.isInGracePeriod = false;
                object.isSubscribedToAnchor = false;
                object.userGiftSubAuth = false;
                object.anchorGiftSubAuth = false;
            }
            if (message.qualification != null && message.hasOwnProperty("qualification"))
                object.qualification = message.qualification;
            if (message.isSubscribe != null && message.hasOwnProperty("isSubscribe"))
                object.isSubscribe = message.isSubscribe;
            if (message.badge != null && message.hasOwnProperty("badge"))
                object.badge = $root.TikTok.SubscribeBadge.toObject(message.badge, options);
            if (message.enableSubscription != null && message.hasOwnProperty("enableSubscription"))
                object.enableSubscription = message.enableSubscription;
            if (message.subscriberCount != null && message.hasOwnProperty("subscriberCount"))
                if (typeof message.subscriberCount === "number")
                    object.subscriberCount = options.longs === String ? String(message.subscriberCount) : message.subscriberCount;
                else
                    object.subscriberCount = options.longs === String ? $util.Long.prototype.toString.call(message.subscriberCount) : options.longs === Number ? new $util.LongBits(message.subscriberCount.low >>> 0, message.subscriberCount.high >>> 0).toNumber() : message.subscriberCount;
            if (message.isInGracePeriod != null && message.hasOwnProperty("isInGracePeriod"))
                object.isInGracePeriod = message.isInGracePeriod;
            if (message.isSubscribedToAnchor != null && message.hasOwnProperty("isSubscribedToAnchor"))
                object.isSubscribedToAnchor = message.isSubscribedToAnchor;
            if (message.userGiftSubAuth != null && message.hasOwnProperty("userGiftSubAuth"))
                object.userGiftSubAuth = message.userGiftSubAuth;
            if (message.anchorGiftSubAuth != null && message.hasOwnProperty("anchorGiftSubAuth"))
                object.anchorGiftSubAuth = message.anchorGiftSubAuth;
            return object;
        };

        /**
         * Converts this SubscribeInfo to JSON.
         * @function toJSON
         * @memberof TikTok.SubscribeInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscribeInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubscribeInfo
         * @function getTypeUrl
         * @memberof TikTok.SubscribeInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubscribeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.SubscribeInfo";
        };

        return SubscribeInfo;
    })();

    TikTok.FansClub = (function() {

        /**
         * Properties of a FansClub.
         * @memberof TikTok
         * @interface IFansClub
         * @property {string|null} [clubName] FansClub clubName
         * @property {number|Long|null} [clubId] FansClub clubId
         * @property {number|Long|null} [sinceTimestamp] FansClub sinceTimestamp
         * @property {boolean|null} [isActive] FansClub isActive
         */

        /**
         * Constructs a new FansClub.
         * @memberof TikTok
         * @classdesc Represents a FansClub.
         * @implements IFansClub
         * @constructor
         * @param {TikTok.IFansClub=} [properties] Properties to set
         */
        function FansClub(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FansClub clubName.
         * @member {string} clubName
         * @memberof TikTok.FansClub
         * @instance
         */
        FansClub.prototype.clubName = "";

        /**
         * FansClub clubId.
         * @member {number|Long} clubId
         * @memberof TikTok.FansClub
         * @instance
         */
        FansClub.prototype.clubId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FansClub sinceTimestamp.
         * @member {number|Long} sinceTimestamp
         * @memberof TikTok.FansClub
         * @instance
         */
        FansClub.prototype.sinceTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FansClub isActive.
         * @member {boolean} isActive
         * @memberof TikTok.FansClub
         * @instance
         */
        FansClub.prototype.isActive = false;

        /**
         * Creates a new FansClub instance using the specified properties.
         * @function create
         * @memberof TikTok.FansClub
         * @static
         * @param {TikTok.IFansClub=} [properties] Properties to set
         * @returns {TikTok.FansClub} FansClub instance
         */
        FansClub.create = function create(properties) {
            return new FansClub(properties);
        };

        /**
         * Encodes the specified FansClub message. Does not implicitly {@link TikTok.FansClub.verify|verify} messages.
         * @function encode
         * @memberof TikTok.FansClub
         * @static
         * @param {TikTok.IFansClub} message FansClub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FansClub.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clubName != null && Object.hasOwnProperty.call(message, "clubName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clubName);
            if (message.clubId != null && Object.hasOwnProperty.call(message, "clubId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.clubId);
            if (message.sinceTimestamp != null && Object.hasOwnProperty.call(message, "sinceTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.sinceTimestamp);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isActive);
            return writer;
        };

        /**
         * Encodes the specified FansClub message, length delimited. Does not implicitly {@link TikTok.FansClub.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.FansClub
         * @static
         * @param {TikTok.IFansClub} message FansClub message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FansClub.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FansClub message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.FansClub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.FansClub} FansClub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FansClub.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.FansClub();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.clubName = reader.string();
                        break;
                    }
                case 2: {
                        message.clubId = reader.int64();
                        break;
                    }
                case 3: {
                        message.sinceTimestamp = reader.int64();
                        break;
                    }
                case 4: {
                        message.isActive = reader.bool();
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
         * Decodes a FansClub message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.FansClub
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.FansClub} FansClub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FansClub.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FansClub message.
         * @function verify
         * @memberof TikTok.FansClub
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FansClub.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                if (!$util.isString(message.clubName))
                    return "clubName: string expected";
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (!$util.isInteger(message.clubId) && !(message.clubId && $util.isInteger(message.clubId.low) && $util.isInteger(message.clubId.high)))
                    return "clubId: integer|Long expected";
            if (message.sinceTimestamp != null && message.hasOwnProperty("sinceTimestamp"))
                if (!$util.isInteger(message.sinceTimestamp) && !(message.sinceTimestamp && $util.isInteger(message.sinceTimestamp.low) && $util.isInteger(message.sinceTimestamp.high)))
                    return "sinceTimestamp: integer|Long expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            return null;
        };

        /**
         * Creates a FansClub message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.FansClub
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.FansClub} FansClub
         */
        FansClub.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.FansClub)
                return object;
            var message = new $root.TikTok.FansClub();
            if (object.clubName != null)
                message.clubName = String(object.clubName);
            if (object.clubId != null)
                if ($util.Long)
                    (message.clubId = $util.Long.fromValue(object.clubId)).unsigned = false;
                else if (typeof object.clubId === "string")
                    message.clubId = parseInt(object.clubId, 10);
                else if (typeof object.clubId === "number")
                    message.clubId = object.clubId;
                else if (typeof object.clubId === "object")
                    message.clubId = new $util.LongBits(object.clubId.low >>> 0, object.clubId.high >>> 0).toNumber();
            if (object.sinceTimestamp != null)
                if ($util.Long)
                    (message.sinceTimestamp = $util.Long.fromValue(object.sinceTimestamp)).unsigned = false;
                else if (typeof object.sinceTimestamp === "string")
                    message.sinceTimestamp = parseInt(object.sinceTimestamp, 10);
                else if (typeof object.sinceTimestamp === "number")
                    message.sinceTimestamp = object.sinceTimestamp;
                else if (typeof object.sinceTimestamp === "object")
                    message.sinceTimestamp = new $util.LongBits(object.sinceTimestamp.low >>> 0, object.sinceTimestamp.high >>> 0).toNumber();
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            return message;
        };

        /**
         * Creates a plain object from a FansClub message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.FansClub
         * @static
         * @param {TikTok.FansClub} message FansClub
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FansClub.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.clubName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.clubId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clubId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sinceTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sinceTimestamp = options.longs === String ? "0" : 0;
                object.isActive = false;
            }
            if (message.clubName != null && message.hasOwnProperty("clubName"))
                object.clubName = message.clubName;
            if (message.clubId != null && message.hasOwnProperty("clubId"))
                if (typeof message.clubId === "number")
                    object.clubId = options.longs === String ? String(message.clubId) : message.clubId;
                else
                    object.clubId = options.longs === String ? $util.Long.prototype.toString.call(message.clubId) : options.longs === Number ? new $util.LongBits(message.clubId.low >>> 0, message.clubId.high >>> 0).toNumber() : message.clubId;
            if (message.sinceTimestamp != null && message.hasOwnProperty("sinceTimestamp"))
                if (typeof message.sinceTimestamp === "number")
                    object.sinceTimestamp = options.longs === String ? String(message.sinceTimestamp) : message.sinceTimestamp;
                else
                    object.sinceTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.sinceTimestamp) : options.longs === Number ? new $util.LongBits(message.sinceTimestamp.low >>> 0, message.sinceTimestamp.high >>> 0).toNumber() : message.sinceTimestamp;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            return object;
        };

        /**
         * Converts this FansClub to JSON.
         * @function toJSON
         * @memberof TikTok.FansClub
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FansClub.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FansClub
         * @function getTypeUrl
         * @memberof TikTok.FansClub
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FansClub.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.FansClub";
        };

        return FansClub;
    })();

    TikTok.FansClubInfo = (function() {

        /**
         * Properties of a FansClubInfo.
         * @memberof TikTok
         * @interface IFansClubInfo
         * @property {boolean|null} [useNewProfileCardStyle] FansClubInfo useNewProfileCardStyle
         * @property {TikTok.IBadgeStruct|null} [badgeStruct] FansClubInfo badgeStruct
         */

        /**
         * Constructs a new FansClubInfo.
         * @memberof TikTok
         * @classdesc Represents a FansClubInfo.
         * @implements IFansClubInfo
         * @constructor
         * @param {TikTok.IFansClubInfo=} [properties] Properties to set
         */
        function FansClubInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FansClubInfo useNewProfileCardStyle.
         * @member {boolean} useNewProfileCardStyle
         * @memberof TikTok.FansClubInfo
         * @instance
         */
        FansClubInfo.prototype.useNewProfileCardStyle = false;

        /**
         * FansClubInfo badgeStruct.
         * @member {TikTok.IBadgeStruct|null|undefined} badgeStruct
         * @memberof TikTok.FansClubInfo
         * @instance
         */
        FansClubInfo.prototype.badgeStruct = null;

        /**
         * Creates a new FansClubInfo instance using the specified properties.
         * @function create
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {TikTok.IFansClubInfo=} [properties] Properties to set
         * @returns {TikTok.FansClubInfo} FansClubInfo instance
         */
        FansClubInfo.create = function create(properties) {
            return new FansClubInfo(properties);
        };

        /**
         * Encodes the specified FansClubInfo message. Does not implicitly {@link TikTok.FansClubInfo.verify|verify} messages.
         * @function encode
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {TikTok.IFansClubInfo} message FansClubInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FansClubInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.useNewProfileCardStyle != null && Object.hasOwnProperty.call(message, "useNewProfileCardStyle"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.useNewProfileCardStyle);
            if (message.badgeStruct != null && Object.hasOwnProperty.call(message, "badgeStruct"))
                $root.TikTok.BadgeStruct.encode(message.badgeStruct, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FansClubInfo message, length delimited. Does not implicitly {@link TikTok.FansClubInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {TikTok.IFansClubInfo} message FansClubInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FansClubInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FansClubInfo message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.FansClubInfo} FansClubInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FansClubInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.FansClubInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.useNewProfileCardStyle = reader.bool();
                        break;
                    }
                case 10: {
                        message.badgeStruct = $root.TikTok.BadgeStruct.decode(reader, reader.uint32());
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
         * Decodes a FansClubInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.FansClubInfo} FansClubInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FansClubInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FansClubInfo message.
         * @function verify
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FansClubInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.useNewProfileCardStyle != null && message.hasOwnProperty("useNewProfileCardStyle"))
                if (typeof message.useNewProfileCardStyle !== "boolean")
                    return "useNewProfileCardStyle: boolean expected";
            if (message.badgeStruct != null && message.hasOwnProperty("badgeStruct")) {
                var error = $root.TikTok.BadgeStruct.verify(message.badgeStruct);
                if (error)
                    return "badgeStruct." + error;
            }
            return null;
        };

        /**
         * Creates a FansClubInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.FansClubInfo} FansClubInfo
         */
        FansClubInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.FansClubInfo)
                return object;
            var message = new $root.TikTok.FansClubInfo();
            if (object.useNewProfileCardStyle != null)
                message.useNewProfileCardStyle = Boolean(object.useNewProfileCardStyle);
            if (object.badgeStruct != null) {
                if (typeof object.badgeStruct !== "object")
                    throw TypeError(".TikTok.FansClubInfo.badgeStruct: object expected");
                message.badgeStruct = $root.TikTok.BadgeStruct.fromObject(object.badgeStruct);
            }
            return message;
        };

        /**
         * Creates a plain object from a FansClubInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {TikTok.FansClubInfo} message FansClubInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FansClubInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.useNewProfileCardStyle = false;
                object.badgeStruct = null;
            }
            if (message.useNewProfileCardStyle != null && message.hasOwnProperty("useNewProfileCardStyle"))
                object.useNewProfileCardStyle = message.useNewProfileCardStyle;
            if (message.badgeStruct != null && message.hasOwnProperty("badgeStruct"))
                object.badgeStruct = $root.TikTok.BadgeStruct.toObject(message.badgeStruct, options);
            return object;
        };

        /**
         * Converts this FansClubInfo to JSON.
         * @function toJSON
         * @memberof TikTok.FansClubInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FansClubInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FansClubInfo
         * @function getTypeUrl
         * @memberof TikTok.FansClubInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FansClubInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.FansClubInfo";
        };

        return FansClubInfo;
    })();

    TikTok.PayGrade = (function() {

        /**
         * Properties of a PayGrade.
         * @memberof TikTok
         * @interface IPayGrade
         * @property {number|null} [level] PayGrade level
         * @property {number|Long|null} [experience] PayGrade experience
         */

        /**
         * Constructs a new PayGrade.
         * @memberof TikTok
         * @classdesc Represents a PayGrade.
         * @implements IPayGrade
         * @constructor
         * @param {TikTok.IPayGrade=} [properties] Properties to set
         */
        function PayGrade(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PayGrade level.
         * @member {number} level
         * @memberof TikTok.PayGrade
         * @instance
         */
        PayGrade.prototype.level = 0;

        /**
         * PayGrade experience.
         * @member {number|Long} experience
         * @memberof TikTok.PayGrade
         * @instance
         */
        PayGrade.prototype.experience = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PayGrade instance using the specified properties.
         * @function create
         * @memberof TikTok.PayGrade
         * @static
         * @param {TikTok.IPayGrade=} [properties] Properties to set
         * @returns {TikTok.PayGrade} PayGrade instance
         */
        PayGrade.create = function create(properties) {
            return new PayGrade(properties);
        };

        /**
         * Encodes the specified PayGrade message. Does not implicitly {@link TikTok.PayGrade.verify|verify} messages.
         * @function encode
         * @memberof TikTok.PayGrade
         * @static
         * @param {TikTok.IPayGrade} message PayGrade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayGrade.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
            if (message.experience != null && Object.hasOwnProperty.call(message, "experience"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.experience);
            return writer;
        };

        /**
         * Encodes the specified PayGrade message, length delimited. Does not implicitly {@link TikTok.PayGrade.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.PayGrade
         * @static
         * @param {TikTok.IPayGrade} message PayGrade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PayGrade.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PayGrade message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.PayGrade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.PayGrade} PayGrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayGrade.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.PayGrade();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.level = reader.int32();
                        break;
                    }
                case 2: {
                        message.experience = reader.int64();
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
         * Decodes a PayGrade message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.PayGrade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.PayGrade} PayGrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PayGrade.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PayGrade message.
         * @function verify
         * @memberof TikTok.PayGrade
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PayGrade.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.experience != null && message.hasOwnProperty("experience"))
                if (!$util.isInteger(message.experience) && !(message.experience && $util.isInteger(message.experience.low) && $util.isInteger(message.experience.high)))
                    return "experience: integer|Long expected";
            return null;
        };

        /**
         * Creates a PayGrade message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.PayGrade
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.PayGrade} PayGrade
         */
        PayGrade.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.PayGrade)
                return object;
            var message = new $root.TikTok.PayGrade();
            if (object.level != null)
                message.level = object.level | 0;
            if (object.experience != null)
                if ($util.Long)
                    (message.experience = $util.Long.fromValue(object.experience)).unsigned = false;
                else if (typeof object.experience === "string")
                    message.experience = parseInt(object.experience, 10);
                else if (typeof object.experience === "number")
                    message.experience = object.experience;
                else if (typeof object.experience === "object")
                    message.experience = new $util.LongBits(object.experience.low >>> 0, object.experience.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PayGrade message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.PayGrade
         * @static
         * @param {TikTok.PayGrade} message PayGrade
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PayGrade.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.experience = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.experience = options.longs === String ? "0" : 0;
            }
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.experience != null && message.hasOwnProperty("experience"))
                if (typeof message.experience === "number")
                    object.experience = options.longs === String ? String(message.experience) : message.experience;
                else
                    object.experience = options.longs === String ? $util.Long.prototype.toString.call(message.experience) : options.longs === Number ? new $util.LongBits(message.experience.low >>> 0, message.experience.high >>> 0).toNumber() : message.experience;
            return object;
        };

        /**
         * Converts this PayGrade to JSON.
         * @function toJSON
         * @memberof TikTok.PayGrade
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PayGrade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PayGrade
         * @function getTypeUrl
         * @memberof TikTok.PayGrade
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PayGrade.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.PayGrade";
        };

        return PayGrade;
    })();

    TikTok.UserAttr = (function() {

        /**
         * Properties of a UserAttr.
         * @memberof TikTok
         * @interface IUserAttr
         * @property {boolean|null} [isVIP] UserAttr isVIP
         * @property {boolean|null} [isPremium] UserAttr isPremium
         */

        /**
         * Constructs a new UserAttr.
         * @memberof TikTok
         * @classdesc Represents a UserAttr.
         * @implements IUserAttr
         * @constructor
         * @param {TikTok.IUserAttr=} [properties] Properties to set
         */
        function UserAttr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAttr isVIP.
         * @member {boolean} isVIP
         * @memberof TikTok.UserAttr
         * @instance
         */
        UserAttr.prototype.isVIP = false;

        /**
         * UserAttr isPremium.
         * @member {boolean} isPremium
         * @memberof TikTok.UserAttr
         * @instance
         */
        UserAttr.prototype.isPremium = false;

        /**
         * Creates a new UserAttr instance using the specified properties.
         * @function create
         * @memberof TikTok.UserAttr
         * @static
         * @param {TikTok.IUserAttr=} [properties] Properties to set
         * @returns {TikTok.UserAttr} UserAttr instance
         */
        UserAttr.create = function create(properties) {
            return new UserAttr(properties);
        };

        /**
         * Encodes the specified UserAttr message. Does not implicitly {@link TikTok.UserAttr.verify|verify} messages.
         * @function encode
         * @memberof TikTok.UserAttr
         * @static
         * @param {TikTok.IUserAttr} message UserAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAttr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isVIP != null && Object.hasOwnProperty.call(message, "isVIP"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isVIP);
            if (message.isPremium != null && Object.hasOwnProperty.call(message, "isPremium"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isPremium);
            return writer;
        };

        /**
         * Encodes the specified UserAttr message, length delimited. Does not implicitly {@link TikTok.UserAttr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.UserAttr
         * @static
         * @param {TikTok.IUserAttr} message UserAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAttr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAttr message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.UserAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.UserAttr} UserAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAttr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.UserAttr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.isVIP = reader.bool();
                        break;
                    }
                case 2: {
                        message.isPremium = reader.bool();
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
         * Decodes a UserAttr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.UserAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.UserAttr} UserAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAttr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAttr message.
         * @function verify
         * @memberof TikTok.UserAttr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAttr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isVIP != null && message.hasOwnProperty("isVIP"))
                if (typeof message.isVIP !== "boolean")
                    return "isVIP: boolean expected";
            if (message.isPremium != null && message.hasOwnProperty("isPremium"))
                if (typeof message.isPremium !== "boolean")
                    return "isPremium: boolean expected";
            return null;
        };

        /**
         * Creates a UserAttr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.UserAttr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.UserAttr} UserAttr
         */
        UserAttr.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.UserAttr)
                return object;
            var message = new $root.TikTok.UserAttr();
            if (object.isVIP != null)
                message.isVIP = Boolean(object.isVIP);
            if (object.isPremium != null)
                message.isPremium = Boolean(object.isPremium);
            return message;
        };

        /**
         * Creates a plain object from a UserAttr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.UserAttr
         * @static
         * @param {TikTok.UserAttr} message UserAttr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAttr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isVIP = false;
                object.isPremium = false;
            }
            if (message.isVIP != null && message.hasOwnProperty("isVIP"))
                object.isVIP = message.isVIP;
            if (message.isPremium != null && message.hasOwnProperty("isPremium"))
                object.isPremium = message.isPremium;
            return object;
        };

        /**
         * Converts this UserAttr to JSON.
         * @function toJSON
         * @memberof TikTok.UserAttr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAttr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserAttr
         * @function getTypeUrl
         * @memberof TikTok.UserAttr
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserAttr.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.UserAttr";
        };

        return UserAttr;
    })();

    TikTok.AnchorInfo = (function() {

        /**
         * Properties of an AnchorInfo.
         * @memberof TikTok
         * @interface IAnchorInfo
         * @property {number|null} [anchorLevel] AnchorInfo anchorLevel
         * @property {number|Long|null} [starPoints] AnchorInfo starPoints
         */

        /**
         * Constructs a new AnchorInfo.
         * @memberof TikTok
         * @classdesc Represents an AnchorInfo.
         * @implements IAnchorInfo
         * @constructor
         * @param {TikTok.IAnchorInfo=} [properties] Properties to set
         */
        function AnchorInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnchorInfo anchorLevel.
         * @member {number} anchorLevel
         * @memberof TikTok.AnchorInfo
         * @instance
         */
        AnchorInfo.prototype.anchorLevel = 0;

        /**
         * AnchorInfo starPoints.
         * @member {number|Long} starPoints
         * @memberof TikTok.AnchorInfo
         * @instance
         */
        AnchorInfo.prototype.starPoints = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AnchorInfo instance using the specified properties.
         * @function create
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {TikTok.IAnchorInfo=} [properties] Properties to set
         * @returns {TikTok.AnchorInfo} AnchorInfo instance
         */
        AnchorInfo.create = function create(properties) {
            return new AnchorInfo(properties);
        };

        /**
         * Encodes the specified AnchorInfo message. Does not implicitly {@link TikTok.AnchorInfo.verify|verify} messages.
         * @function encode
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {TikTok.IAnchorInfo} message AnchorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnchorInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.anchorLevel != null && Object.hasOwnProperty.call(message, "anchorLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.anchorLevel);
            if (message.starPoints != null && Object.hasOwnProperty.call(message, "starPoints"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.starPoints);
            return writer;
        };

        /**
         * Encodes the specified AnchorInfo message, length delimited. Does not implicitly {@link TikTok.AnchorInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {TikTok.IAnchorInfo} message AnchorInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnchorInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnchorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.AnchorInfo} AnchorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnchorInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.AnchorInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.anchorLevel = reader.int32();
                        break;
                    }
                case 2: {
                        message.starPoints = reader.int64();
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
         * Decodes an AnchorInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.AnchorInfo} AnchorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnchorInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnchorInfo message.
         * @function verify
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnchorInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.anchorLevel != null && message.hasOwnProperty("anchorLevel"))
                if (!$util.isInteger(message.anchorLevel))
                    return "anchorLevel: integer expected";
            if (message.starPoints != null && message.hasOwnProperty("starPoints"))
                if (!$util.isInteger(message.starPoints) && !(message.starPoints && $util.isInteger(message.starPoints.low) && $util.isInteger(message.starPoints.high)))
                    return "starPoints: integer|Long expected";
            return null;
        };

        /**
         * Creates an AnchorInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.AnchorInfo} AnchorInfo
         */
        AnchorInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.AnchorInfo)
                return object;
            var message = new $root.TikTok.AnchorInfo();
            if (object.anchorLevel != null)
                message.anchorLevel = object.anchorLevel | 0;
            if (object.starPoints != null)
                if ($util.Long)
                    (message.starPoints = $util.Long.fromValue(object.starPoints)).unsigned = false;
                else if (typeof object.starPoints === "string")
                    message.starPoints = parseInt(object.starPoints, 10);
                else if (typeof object.starPoints === "number")
                    message.starPoints = object.starPoints;
                else if (typeof object.starPoints === "object")
                    message.starPoints = new $util.LongBits(object.starPoints.low >>> 0, object.starPoints.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AnchorInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {TikTok.AnchorInfo} message AnchorInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnchorInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.anchorLevel = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.starPoints = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.starPoints = options.longs === String ? "0" : 0;
            }
            if (message.anchorLevel != null && message.hasOwnProperty("anchorLevel"))
                object.anchorLevel = message.anchorLevel;
            if (message.starPoints != null && message.hasOwnProperty("starPoints"))
                if (typeof message.starPoints === "number")
                    object.starPoints = options.longs === String ? String(message.starPoints) : message.starPoints;
                else
                    object.starPoints = options.longs === String ? $util.Long.prototype.toString.call(message.starPoints) : options.longs === Number ? new $util.LongBits(message.starPoints.low >>> 0, message.starPoints.high >>> 0).toNumber() : message.starPoints;
            return object;
        };

        /**
         * Converts this AnchorInfo to JSON.
         * @function toJSON
         * @memberof TikTok.AnchorInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnchorInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AnchorInfo
         * @function getTypeUrl
         * @memberof TikTok.AnchorInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AnchorInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.AnchorInfo";
        };

        return AnchorInfo;
    })();

    TikTok.AnchorLevel = (function() {

        /**
         * Properties of an AnchorLevel.
         * @memberof TikTok
         * @interface IAnchorLevel
         * @property {number|null} [level] AnchorLevel level
         * @property {number|Long|null} [points] AnchorLevel points
         */

        /**
         * Constructs a new AnchorLevel.
         * @memberof TikTok
         * @classdesc Represents an AnchorLevel.
         * @implements IAnchorLevel
         * @constructor
         * @param {TikTok.IAnchorLevel=} [properties] Properties to set
         */
        function AnchorLevel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnchorLevel level.
         * @member {number} level
         * @memberof TikTok.AnchorLevel
         * @instance
         */
        AnchorLevel.prototype.level = 0;

        /**
         * AnchorLevel points.
         * @member {number|Long} points
         * @memberof TikTok.AnchorLevel
         * @instance
         */
        AnchorLevel.prototype.points = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AnchorLevel instance using the specified properties.
         * @function create
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {TikTok.IAnchorLevel=} [properties] Properties to set
         * @returns {TikTok.AnchorLevel} AnchorLevel instance
         */
        AnchorLevel.create = function create(properties) {
            return new AnchorLevel(properties);
        };

        /**
         * Encodes the specified AnchorLevel message. Does not implicitly {@link TikTok.AnchorLevel.verify|verify} messages.
         * @function encode
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {TikTok.IAnchorLevel} message AnchorLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnchorLevel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
            if (message.points != null && Object.hasOwnProperty.call(message, "points"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.points);
            return writer;
        };

        /**
         * Encodes the specified AnchorLevel message, length delimited. Does not implicitly {@link TikTok.AnchorLevel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {TikTok.IAnchorLevel} message AnchorLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnchorLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnchorLevel message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.AnchorLevel} AnchorLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnchorLevel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.AnchorLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.level = reader.int32();
                        break;
                    }
                case 2: {
                        message.points = reader.int64();
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
         * Decodes an AnchorLevel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.AnchorLevel} AnchorLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnchorLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnchorLevel message.
         * @function verify
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnchorLevel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.points != null && message.hasOwnProperty("points"))
                if (!$util.isInteger(message.points) && !(message.points && $util.isInteger(message.points.low) && $util.isInteger(message.points.high)))
                    return "points: integer|Long expected";
            return null;
        };

        /**
         * Creates an AnchorLevel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.AnchorLevel} AnchorLevel
         */
        AnchorLevel.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.AnchorLevel)
                return object;
            var message = new $root.TikTok.AnchorLevel();
            if (object.level != null)
                message.level = object.level | 0;
            if (object.points != null)
                if ($util.Long)
                    (message.points = $util.Long.fromValue(object.points)).unsigned = false;
                else if (typeof object.points === "string")
                    message.points = parseInt(object.points, 10);
                else if (typeof object.points === "number")
                    message.points = object.points;
                else if (typeof object.points === "object")
                    message.points = new $util.LongBits(object.points.low >>> 0, object.points.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AnchorLevel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {TikTok.AnchorLevel} message AnchorLevel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnchorLevel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.level = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.points = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.points = options.longs === String ? "0" : 0;
            }
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.points != null && message.hasOwnProperty("points"))
                if (typeof message.points === "number")
                    object.points = options.longs === String ? String(message.points) : message.points;
                else
                    object.points = options.longs === String ? $util.Long.prototype.toString.call(message.points) : options.longs === Number ? new $util.LongBits(message.points.low >>> 0, message.points.high >>> 0).toNumber() : message.points;
            return object;
        };

        /**
         * Converts this AnchorLevel to JSON.
         * @function toJSON
         * @memberof TikTok.AnchorLevel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnchorLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AnchorLevel
         * @function getTypeUrl
         * @memberof TikTok.AnchorLevel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AnchorLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.AnchorLevel";
        };

        return AnchorLevel;
    })();

    TikTok.AuthorStats = (function() {

        /**
         * Properties of an AuthorStats.
         * @memberof TikTok
         * @interface IAuthorStats
         * @property {number|Long|null} [postCount] AuthorStats postCount
         * @property {number|Long|null} [likeCount] AuthorStats likeCount
         */

        /**
         * Constructs a new AuthorStats.
         * @memberof TikTok
         * @classdesc Represents an AuthorStats.
         * @implements IAuthorStats
         * @constructor
         * @param {TikTok.IAuthorStats=} [properties] Properties to set
         */
        function AuthorStats(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthorStats postCount.
         * @member {number|Long} postCount
         * @memberof TikTok.AuthorStats
         * @instance
         */
        AuthorStats.prototype.postCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AuthorStats likeCount.
         * @member {number|Long} likeCount
         * @memberof TikTok.AuthorStats
         * @instance
         */
        AuthorStats.prototype.likeCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AuthorStats instance using the specified properties.
         * @function create
         * @memberof TikTok.AuthorStats
         * @static
         * @param {TikTok.IAuthorStats=} [properties] Properties to set
         * @returns {TikTok.AuthorStats} AuthorStats instance
         */
        AuthorStats.create = function create(properties) {
            return new AuthorStats(properties);
        };

        /**
         * Encodes the specified AuthorStats message. Does not implicitly {@link TikTok.AuthorStats.verify|verify} messages.
         * @function encode
         * @memberof TikTok.AuthorStats
         * @static
         * @param {TikTok.IAuthorStats} message AuthorStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorStats.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.postCount != null && Object.hasOwnProperty.call(message, "postCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.postCount);
            if (message.likeCount != null && Object.hasOwnProperty.call(message, "likeCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.likeCount);
            return writer;
        };

        /**
         * Encodes the specified AuthorStats message, length delimited. Does not implicitly {@link TikTok.AuthorStats.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.AuthorStats
         * @static
         * @param {TikTok.IAuthorStats} message AuthorStats message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthorStats.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthorStats message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.AuthorStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.AuthorStats} AuthorStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorStats.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.AuthorStats();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.postCount = reader.int64();
                        break;
                    }
                case 2: {
                        message.likeCount = reader.int64();
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
         * Decodes an AuthorStats message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.AuthorStats
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.AuthorStats} AuthorStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthorStats.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthorStats message.
         * @function verify
         * @memberof TikTok.AuthorStats
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthorStats.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.postCount != null && message.hasOwnProperty("postCount"))
                if (!$util.isInteger(message.postCount) && !(message.postCount && $util.isInteger(message.postCount.low) && $util.isInteger(message.postCount.high)))
                    return "postCount: integer|Long expected";
            if (message.likeCount != null && message.hasOwnProperty("likeCount"))
                if (!$util.isInteger(message.likeCount) && !(message.likeCount && $util.isInteger(message.likeCount.low) && $util.isInteger(message.likeCount.high)))
                    return "likeCount: integer|Long expected";
            return null;
        };

        /**
         * Creates an AuthorStats message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.AuthorStats
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.AuthorStats} AuthorStats
         */
        AuthorStats.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.AuthorStats)
                return object;
            var message = new $root.TikTok.AuthorStats();
            if (object.postCount != null)
                if ($util.Long)
                    (message.postCount = $util.Long.fromValue(object.postCount)).unsigned = false;
                else if (typeof object.postCount === "string")
                    message.postCount = parseInt(object.postCount, 10);
                else if (typeof object.postCount === "number")
                    message.postCount = object.postCount;
                else if (typeof object.postCount === "object")
                    message.postCount = new $util.LongBits(object.postCount.low >>> 0, object.postCount.high >>> 0).toNumber();
            if (object.likeCount != null)
                if ($util.Long)
                    (message.likeCount = $util.Long.fromValue(object.likeCount)).unsigned = false;
                else if (typeof object.likeCount === "string")
                    message.likeCount = parseInt(object.likeCount, 10);
                else if (typeof object.likeCount === "number")
                    message.likeCount = object.likeCount;
                else if (typeof object.likeCount === "object")
                    message.likeCount = new $util.LongBits(object.likeCount.low >>> 0, object.likeCount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AuthorStats message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.AuthorStats
         * @static
         * @param {TikTok.AuthorStats} message AuthorStats
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthorStats.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.postCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.postCount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.likeCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.likeCount = options.longs === String ? "0" : 0;
            }
            if (message.postCount != null && message.hasOwnProperty("postCount"))
                if (typeof message.postCount === "number")
                    object.postCount = options.longs === String ? String(message.postCount) : message.postCount;
                else
                    object.postCount = options.longs === String ? $util.Long.prototype.toString.call(message.postCount) : options.longs === Number ? new $util.LongBits(message.postCount.low >>> 0, message.postCount.high >>> 0).toNumber() : message.postCount;
            if (message.likeCount != null && message.hasOwnProperty("likeCount"))
                if (typeof message.likeCount === "number")
                    object.likeCount = options.longs === String ? String(message.likeCount) : message.likeCount;
                else
                    object.likeCount = options.longs === String ? $util.Long.prototype.toString.call(message.likeCount) : options.longs === Number ? new $util.LongBits(message.likeCount.low >>> 0, message.likeCount.high >>> 0).toNumber() : message.likeCount;
            return object;
        };

        /**
         * Converts this AuthorStats to JSON.
         * @function toJSON
         * @memberof TikTok.AuthorStats
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthorStats.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AuthorStats
         * @function getTypeUrl
         * @memberof TikTok.AuthorStats
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AuthorStats.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.AuthorStats";
        };

        return AuthorStats;
    })();

    TikTok.LevelBadge = (function() {

        /**
         * Properties of a LevelBadge.
         * @memberof TikTok
         * @interface ILevelBadge
         * @property {number|null} [id] LevelBadge id
         * @property {string|null} [description] LevelBadge description
         */

        /**
         * Constructs a new LevelBadge.
         * @memberof TikTok
         * @classdesc Represents a LevelBadge.
         * @implements ILevelBadge
         * @constructor
         * @param {TikTok.ILevelBadge=} [properties] Properties to set
         */
        function LevelBadge(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LevelBadge id.
         * @member {number} id
         * @memberof TikTok.LevelBadge
         * @instance
         */
        LevelBadge.prototype.id = 0;

        /**
         * LevelBadge description.
         * @member {string} description
         * @memberof TikTok.LevelBadge
         * @instance
         */
        LevelBadge.prototype.description = "";

        /**
         * Creates a new LevelBadge instance using the specified properties.
         * @function create
         * @memberof TikTok.LevelBadge
         * @static
         * @param {TikTok.ILevelBadge=} [properties] Properties to set
         * @returns {TikTok.LevelBadge} LevelBadge instance
         */
        LevelBadge.create = function create(properties) {
            return new LevelBadge(properties);
        };

        /**
         * Encodes the specified LevelBadge message. Does not implicitly {@link TikTok.LevelBadge.verify|verify} messages.
         * @function encode
         * @memberof TikTok.LevelBadge
         * @static
         * @param {TikTok.ILevelBadge} message LevelBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelBadge.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified LevelBadge message, length delimited. Does not implicitly {@link TikTok.LevelBadge.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.LevelBadge
         * @static
         * @param {TikTok.ILevelBadge} message LevelBadge message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelBadge.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LevelBadge message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.LevelBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.LevelBadge} LevelBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelBadge.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.LevelBadge();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.description = reader.string();
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
         * Decodes a LevelBadge message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.LevelBadge
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.LevelBadge} LevelBadge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelBadge.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LevelBadge message.
         * @function verify
         * @memberof TikTok.LevelBadge
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LevelBadge.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a LevelBadge message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.LevelBadge
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.LevelBadge} LevelBadge
         */
        LevelBadge.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.LevelBadge)
                return object;
            var message = new $root.TikTok.LevelBadge();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a LevelBadge message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.LevelBadge
         * @static
         * @param {TikTok.LevelBadge} message LevelBadge
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LevelBadge.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.description = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this LevelBadge to JSON.
         * @function toJSON
         * @memberof TikTok.LevelBadge
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LevelBadge.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LevelBadge
         * @function getTypeUrl
         * @memberof TikTok.LevelBadge
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LevelBadge.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.LevelBadge";
        };

        return LevelBadge;
    })();

    TikTok.SubLevel = (function() {

        /**
         * Properties of a SubLevel.
         * @memberof TikTok
         * @interface ISubLevel
         * @property {number|null} [level] SubLevel level
         * @property {string|null} [desc] SubLevel desc
         * @property {number|null} [monthLimit] SubLevel monthLimit
         * @property {TikTok.ILevelBadge|null} [badge] SubLevel badge
         * @property {TikTok.IBadgeStruct|null} [badgeStruct] SubLevel badgeStruct
         */

        /**
         * Constructs a new SubLevel.
         * @memberof TikTok
         * @classdesc Represents a SubLevel.
         * @implements ISubLevel
         * @constructor
         * @param {TikTok.ISubLevel=} [properties] Properties to set
         */
        function SubLevel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubLevel level.
         * @member {number} level
         * @memberof TikTok.SubLevel
         * @instance
         */
        SubLevel.prototype.level = 0;

        /**
         * SubLevel desc.
         * @member {string} desc
         * @memberof TikTok.SubLevel
         * @instance
         */
        SubLevel.prototype.desc = "";

        /**
         * SubLevel monthLimit.
         * @member {number} monthLimit
         * @memberof TikTok.SubLevel
         * @instance
         */
        SubLevel.prototype.monthLimit = 0;

        /**
         * SubLevel badge.
         * @member {TikTok.ILevelBadge|null|undefined} badge
         * @memberof TikTok.SubLevel
         * @instance
         */
        SubLevel.prototype.badge = null;

        /**
         * SubLevel badgeStruct.
         * @member {TikTok.IBadgeStruct|null|undefined} badgeStruct
         * @memberof TikTok.SubLevel
         * @instance
         */
        SubLevel.prototype.badgeStruct = null;

        /**
         * Creates a new SubLevel instance using the specified properties.
         * @function create
         * @memberof TikTok.SubLevel
         * @static
         * @param {TikTok.ISubLevel=} [properties] Properties to set
         * @returns {TikTok.SubLevel} SubLevel instance
         */
        SubLevel.create = function create(properties) {
            return new SubLevel(properties);
        };

        /**
         * Encodes the specified SubLevel message. Does not implicitly {@link TikTok.SubLevel.verify|verify} messages.
         * @function encode
         * @memberof TikTok.SubLevel
         * @static
         * @param {TikTok.ISubLevel} message SubLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubLevel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
            if (message.desc != null && Object.hasOwnProperty.call(message, "desc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.desc);
            if (message.monthLimit != null && Object.hasOwnProperty.call(message, "monthLimit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.monthLimit);
            if (message.badge != null && Object.hasOwnProperty.call(message, "badge"))
                $root.TikTok.LevelBadge.encode(message.badge, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.badgeStruct != null && Object.hasOwnProperty.call(message, "badgeStruct"))
                $root.TikTok.BadgeStruct.encode(message.badgeStruct, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SubLevel message, length delimited. Does not implicitly {@link TikTok.SubLevel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TikTok.SubLevel
         * @static
         * @param {TikTok.ISubLevel} message SubLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubLevel message from the specified reader or buffer.
         * @function decode
         * @memberof TikTok.SubLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TikTok.SubLevel} SubLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubLevel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TikTok.SubLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.level = reader.int32();
                        break;
                    }
                case 2: {
                        message.desc = reader.string();
                        break;
                    }
                case 3: {
                        message.monthLimit = reader.int32();
                        break;
                    }
                case 4: {
                        message.badge = $root.TikTok.LevelBadge.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.badgeStruct = $root.TikTok.BadgeStruct.decode(reader, reader.uint32());
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
         * Decodes a SubLevel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TikTok.SubLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TikTok.SubLevel} SubLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubLevel message.
         * @function verify
         * @memberof TikTok.SubLevel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubLevel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.desc != null && message.hasOwnProperty("desc"))
                if (!$util.isString(message.desc))
                    return "desc: string expected";
            if (message.monthLimit != null && message.hasOwnProperty("monthLimit"))
                if (!$util.isInteger(message.monthLimit))
                    return "monthLimit: integer expected";
            if (message.badge != null && message.hasOwnProperty("badge")) {
                var error = $root.TikTok.LevelBadge.verify(message.badge);
                if (error)
                    return "badge." + error;
            }
            if (message.badgeStruct != null && message.hasOwnProperty("badgeStruct")) {
                var error = $root.TikTok.BadgeStruct.verify(message.badgeStruct);
                if (error)
                    return "badgeStruct." + error;
            }
            return null;
        };

        /**
         * Creates a SubLevel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TikTok.SubLevel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TikTok.SubLevel} SubLevel
         */
        SubLevel.fromObject = function fromObject(object) {
            if (object instanceof $root.TikTok.SubLevel)
                return object;
            var message = new $root.TikTok.SubLevel();
            if (object.level != null)
                message.level = object.level | 0;
            if (object.desc != null)
                message.desc = String(object.desc);
            if (object.monthLimit != null)
                message.monthLimit = object.monthLimit | 0;
            if (object.badge != null) {
                if (typeof object.badge !== "object")
                    throw TypeError(".TikTok.SubLevel.badge: object expected");
                message.badge = $root.TikTok.LevelBadge.fromObject(object.badge);
            }
            if (object.badgeStruct != null) {
                if (typeof object.badgeStruct !== "object")
                    throw TypeError(".TikTok.SubLevel.badgeStruct: object expected");
                message.badgeStruct = $root.TikTok.BadgeStruct.fromObject(object.badgeStruct);
            }
            return message;
        };

        /**
         * Creates a plain object from a SubLevel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TikTok.SubLevel
         * @static
         * @param {TikTok.SubLevel} message SubLevel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubLevel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.level = 0;
                object.desc = "";
                object.monthLimit = 0;
                object.badge = null;
                object.badgeStruct = null;
            }
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.desc != null && message.hasOwnProperty("desc"))
                object.desc = message.desc;
            if (message.monthLimit != null && message.hasOwnProperty("monthLimit"))
                object.monthLimit = message.monthLimit;
            if (message.badge != null && message.hasOwnProperty("badge"))
                object.badge = $root.TikTok.LevelBadge.toObject(message.badge, options);
            if (message.badgeStruct != null && message.hasOwnProperty("badgeStruct"))
                object.badgeStruct = $root.TikTok.BadgeStruct.toObject(message.badgeStruct, options);
            return object;
        };

        /**
         * Converts this SubLevel to JSON.
         * @function toJSON
         * @memberof TikTok.SubLevel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SubLevel
         * @function getTypeUrl
         * @memberof TikTok.SubLevel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SubLevel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TikTok.SubLevel";
        };

        return SubLevel;
    })();

    return TikTok;
})();

module.exports = $root;
