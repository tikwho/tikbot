(self.webpackChunkdouyin_web = self.webpackChunkdouyin_web || []).push([[3486], {
    61959: function(_, O, P) {
        "use strict";
        P.d(O, {
            b: function() {
                return M
            }
        });
        var j = P(57332);
        P(35766);
        var R = P(88048)
          , B = P(90915)
          , x = P(70213)
          , C = P(3524);
        P(96438),
        P(30626);
        var T = P(65402)
          , E = P(60911);
        class M extends T.v {
            constructor() {
                super(...arguments),
                this.name = "MetricsPlugin",
                this.ignoreMethods = ["getStrangerTotalUnread", "getLocalStrangerConversation", "checkRtcRequirements", "parseContent", "unreadCountReport", "getMessageReferencedInfo", "initAdapter", "getConversationParticipants", "broadcastGetConversation", "getConversationMessages", "createMessage", "createTextMessage", "createFileMessage", "sendMessage", "getMessageReadReceipt", "createConversation", "getConversationOnline", "getConversationListOnline", "getStrangerPreview", "emojify", "randomEmoji", "getAllEmoji", "constructor", "getUserCursor", "setUserCursor", "init", "getConversation", "getConversationList", "dispose", "intervalFunc", "receivePacket", "messageFilter", "sendMessageObject", "tickerUpdate", "prepareHistoryForInbox", "prepareToken", "clearCache", "resolve", "getContext", "processInitMessage", "processInitConversation", "patchMessage", "clientAck", "handleBadgeCount", "calcBadgeCount", "processPushMessage"]
            }
            beforeHook(_, O) {
                if (this.ctx.option.aspectBefore)
                    return this.ctx.option.aspectBefore({
                        name: _,
                        params: O
                    })
            }
            afterHook(_, O, P, j) {
                let R = this.resolve(C.Uk.Monitor).emitDuration(x.U.BizApiInvoke + x.U.SuccessSuffix, P, {
                    name: _
                });
                this.ctx.option.aspectAfter && this.ctx.option.aspectAfter({
                    name: _,
                    params: O,
                    duration: R,
                    result: j
                })
            }
            errorHook(_, O, P, j) {
                let B = this.resolve(C.Uk.Monitor).emitDuration(x.U.BizApiInvoke + x.U.ErrorSuffix, j, {
                    name: _,
                    error: P.type ? `${P.type}:${R.NI[P.type]}` : "unknown"
                });
                if (this.ctx.option.aspectError) {
                    let j = this.ctx.option.aspectError({
                        name: _,
                        params: O,
                        duration: B,
                        error: P
                    });
                    if (void 0 !== j)
                        return !!j
                }
                return !0
            }
            wrapMetricsAsync(_, O) {
                let P = 0;
                return R=>(0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    try {
                        let j = this.beforeHook(_, R);
                        if (!1 === j)
                            return;
                        P = x.u.performanceNow();
                        let B = yield O.call(this.instance, R);
                        return this.afterHook(_, R, P, B),
                        B
                    } catch (j) {
                        let O = this.errorHook(_, R, j, P);
                        if (O)
                            throw j
                    }
                })
            }
            getFuncs() {
                let _ = []
                  , {instance: O} = this
                  , P = Object.getOwnPropertyNames(O);
                _ = _.concat(P);
                let j = Object.getPrototypeOf(O)
                  , R = Object.getOwnPropertyNames(j);
                _ = _.concat(R);
                let B = Object.getOwnPropertyNames(Object.getPrototypeOf(j));
                return (_ = _.concat(B)).filter(_=>"function" == typeof this.instance[_] && !this.ignoreMethods.includes(_) && !_.startsWith("__internal"))
            }
            install() {
                this.register(C.Uk.MetricsPlugin, this),
                this.ctx.option.monitor = this.unifyMonitorConfig();
                let _ = this.instance
                  , O = this.getFuncs();
                for (let P of O) {
                    let O = _[P];
                    B.Y.ctxDebug(this.ctx, `wrapping metrics for ${P}`),
                    _[P] = this.wrapMetricsAsync(P, O)
                }
                this.subscribeTrackerEvent()
            }
            receivePacket(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {})
            }
            subscribeTrackerEvent() {
                this.resolve(C.Uk.EventBus).subscribe(R.c5.Error, _=>{
                    this.resolve(C.Uk.Monitor).emitTracker(E.W.Exception, {
                        error_stack: _.stack
                    })
                }
                ),
                this.resolve(C.Uk.EventBus).subscribe(R.c5.InitFinish, _=>{
                    let O = this.instance.getConversationList()
                      , P = O.map(_=>_.getMessageList().length).reduce((_,O)=>_ + O, 0);
                    this.resolve(C.Uk.Monitor).emitTracker(E.W.InitHandler, {
                        conv_count: O.length,
                        total_msg_count: P,
                        is_success: "1"
                    })
                }
                )
            }
            unifyMonitorConfig() {
                let _ = this.ctx.option.monitor;
                return Array.isArray(_) ? _ : (void 0 !== _ ? this.ctx.option.monitor = [_] : this.ctx.option.monitor = [],
                this.ctx.option.monitor)
            }
        }
    },
    96038: function(_, O, P) {
        "use strict";
        P.d(O, {
            a: function() {
                return B
            }
        }),
        P(35766);
        var j = P(88048)
          , R = P(90915);
        P(96438),
        P(30626);
        class B {
            constructor(_) {
                this.errorTypeBlacklist = [j.NI.NetworkError],
                this.slardar = _
            }
            emitError(_, O) {
                "function" == typeof this.slardar.captureException && (this.errorTypeBlacklist.includes(_.type) || this.slardar.captureException(_, Object.assign(Object.assign({}, O), {
                    type: `${_.type}:${j.NI[_.type]}`,
                    msg: _.msg,
                    logid: _.logid,
                    args: _.args
                })))
            }
            emitNetwork(_, O, P) {
                void 0 !== O && 0 !== O.status_code && this.slardar.sendLog({
                    level: "error",
                    content: `Response Error:${O.status_code}, cmd: ${O.cmd} msg: ${O.error_desc}, logid: ${O.log_id}`,
                    extra: Object.assign({
                        cmd: `${O.cmd}`
                    }, P)
                })
            }
            emitEvent(_, O, P) {}
            emitLog(_, O) {
                if (_ === R.h.debug)
                    return;
                let P = {};
                O.forEach((_,O)=>{
                    P[O] = _
                }
                ),
                this.slardar.sendLog({
                    level: R.h[_],
                    content: O.join(","),
                    extra: Object.assign({}, P)
                })
            }
            emitTracker(_, O) {
                this.slardar.sendLog({
                    level: "debug",
                    content: _,
                    extra: O
                })
            }
            emitMetrics(_, O={}, P={}) {}
        }
    },
    71166: function(_, O, P) {
        "use strict";
        P.d(O, {
            Dp: function() {
                return x
            },
            Cu: function() {
                return T
            },
            af: function() {
                return B
            }
        }),
        P(35766);
        var j = P(70213);
        P(96438),
        P(30626);
        class R {
            constructor(_=[], O) {
                this.metricsToReport = [],
                this.sampleRate = {},
                this.call = _=>{
                    if (!this.metricsToReport.includes(_))
                        return !1;
                    let O = this.sampleRate[_]
                      , P = this.sampleRate[R.globalSampleRate]
                      , j = Math.random();
                    return void 0 !== O ? j < O : void 0 === P || j < P
                }
                ,
                this.metricsToReport = _,
                O && (this.sampleRate = O)
            }
        }
        function B(_) {
            let O = _.startsWith("imsdk") ? _ : `imsdk_${_}`;
            return O.replace(/\./g, "_")
        }
        R.globalSampleRate = "__globalSampleRate";
        let x = [j.U.CreateConversation, j.U.SendMessage, j.U.ReceiveMessage, j.U.WsConnect, j.U.NetworkRequest].map(_=>B(_))
          , C = {
            [B(j.U.NetworkRequest)]: .05,
            [R.globalSampleRate]: 1
        };
        class T {
            constructor(_, O) {
                var P, j;
                this.sampleCallback = ()=>!0,
                this.collector = _,
                (null == O ? void 0 : O.sampleCallback) ? this.sampleCallback = O.sampleCallback : this.sampleCallback = new R(null !== (P = null == O ? void 0 : O.metricsToReport) && void 0 !== P ? P : x,null !== (j = null == O ? void 0 : O.sampleRate) && void 0 !== j ? j : C).call
            }
            emitCounter(_, O, P) {}
            emitDuration(_, O, P) {}
            emitError(_) {}
            emitNetwork(_, O, P) {}
            emitEvent(_, O, P) {}
            emitLog(_, O) {}
            emitTracker(_, O) {}
            emitMetrics(_, O, P) {
                var j;
                let R = B(_);
                (null === (j = this.sampleCallback) || void 0 === j ? void 0 : j.call(this, R)) && this.collector.event(R, Object.assign(Object.assign({}, O), P))
            }
        }
        T.globalSampleRate = R.globalSampleRate
    },
    78996: function(_, O, P) {
        "use strict";
        var j, R, B, x;
        P.d(O, {
            I: function() {
                return R
            }
        }),
        function(_) {
            _.Image = "image",
            _.Video = "video",
            _.Audio = "audio",
            _.CommonFile = "object"
        }(j || (j = {})),
        function(_) {
            _.Uri = "s:file_ext_key_uri",
            _.Type = "s:file_ext_key_type",
            _.AppId = "s:file_ext_key_source_app_id",
            _.NeedEncrypt = "s:file_ext_key_need_encrypt",
            _.EncryptUri = "s:file_ext_key_encrypt_uri",
            _.Vid = "s:file_ext_key_vid",
            _.FileName = "s:file_ext_key_file_name",
            _.ImgHeight = "s:file_ext_key_original_height",
            _.ImgWidth = "s:file_ext_key_original_width",
            _.ImgThumbHeight = "s:file_ext_key_thumb_height",
            _.ImgThumbWidth = "s:file_ext_key_thumb_width",
            _.ImgThumbUrl = "s:file_ext_key_thumb_url",
            _.ImgPreviewUrl = "s:file_ext_key_preview_url",
            _.ImgPreviewHeight = "s:file_ext_key_preview_height",
            _.ImgPreviewWidth = "s:file_ext_key_preview_width",
            _.ImgPreviewEncryptUrl = "s:file_ext_key_preview_encrypt_url",
            _.ImgThumbEncryptUrl = "s:file_ext_key_thumb_encrypt_url",
            _.ImgUseImageX = "s:file_ext_key_use_imagex",
            _.ImgSuffix = "s:file_ext_key_img_suffix",
            _.VideoCoverUri = "s:file_ext_key_video_cover_uri",
            _.VideoCoverUrl = "s:file_ext_key_video_cover_url",
            _.VideoDuration = "s:file_ext_key_video_duration",
            _.VideoWidth = "s:file_ext_key_video_width",
            _.VideoHeight = "s:file_ext_key_video_height",
            _.AudioDuration = "s:file_ext_key_audio_duration"
        }(R || (R = {})),
        function(_) {
            _.Image = "file_ext_value_type_image",
            _.Video = "file_ext_value_type_video",
            _.Audio = "file_ext_value_type_audio",
            _.Object = "file_ext_value_type_object",
            _.File = "file_ext_value_type_file"
        }(B || (B = {})),
        function(_) {
            _.Obj = "tplv-obj",
            _.Resize = "tplv-resize"
        }(x || (x = {}))
    },
    53940: function(_, O, P) {
        "use strict";
        P.d(O, {
            m: function() {
                return M
            }
        });
        var j = P(21921)
          , R = P(35766)
          , B = P.n(R);
        j.util.Long = B(),
        j.configure();
        let x = j.Reader
          , C = j.Writer
          , T = j.util
          , E = j.roots.default || (j.roots.default = {})
          , M = E.im_proto = (()=>{
            let _ = {};
            return _.Frame = function() {
                function _(_) {
                    if (this.headers = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.seqid = T.Long ? T.Long.fromBits(0, 0, !0) : 0,
                _.prototype.logid = T.Long ? T.Long.fromBits(0, 0, !0) : 0,
                _.prototype.service = 0,
                _.prototype.method = 0,
                _.prototype.headers = T.emptyArray,
                _.prototype.payload_encoding = "",
                _.prototype.payload_type = "",
                _.prototype.payload = T.newBuffer([]),
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).uint64(_.seqid),
                    O.uint32(16).uint64(_.logid),
                    O.uint32(24).int32(_.service),
                    O.uint32(32).int32(_.method),
                    null != _.headers && _.headers.length)
                        for (var P = 0; P < _.headers.length; ++P)
                            E.im_proto.Frame.ExtendedEntry.encode(_.headers[P], O.uint32(42).fork()).ldelim();
                    return null != _.payload_encoding && Object.hasOwnProperty.call(_, "payload_encoding") && O.uint32(50).string(_.payload_encoding),
                    null != _.payload_type && Object.hasOwnProperty.call(_, "payload_type") && O.uint32(58).string(_.payload_type),
                    null != _.payload && Object.hasOwnProperty.call(_, "payload") && O.uint32(66).bytes(_.payload),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.Frame; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.seqid = _.uint64();
                            break;
                        case 2:
                            j.logid = _.uint64();
                            break;
                        case 3:
                            j.service = _.int32();
                            break;
                        case 4:
                            j.method = _.int32();
                            break;
                        case 5:
                            j.headers && j.headers.length || (j.headers = []),
                            j.headers.push(E.im_proto.Frame.ExtendedEntry.decode(_, _.uint32()));
                            break;
                        case 6:
                            j.payload_encoding = _.string();
                            break;
                        case 7:
                            j.payload_type = _.string();
                            break;
                        case 8:
                            j.payload = _.bytes();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("seqid"))
                        throw T.ProtocolError("missing required 'seqid'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("logid"))
                        throw T.ProtocolError("missing required 'logid'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("service"))
                        throw T.ProtocolError("missing required 'service'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("method"))
                        throw T.ProtocolError("missing required 'method'", {
                            instance: j
                        });
                    return j
                }
                ,
                _.ExtendedEntry = function() {
                    function _(_) {
                        if (_)
                            for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                                null != _[O[P]] && (this[O[P]] = _[O[P]])
                    }
                    return _.prototype.key = "",
                    _.prototype.value = "",
                    _.create = function(O) {
                        return new _(O)
                    }
                    ,
                    _.encode = function(_, O) {
                        return O || (O = C.create()),
                        O.uint32(10).string(_.key),
                        O.uint32(18).string(_.value),
                        O
                    }
                    ,
                    _.decode = function(_, O) {
                        _ instanceof x || (_ = x.create(_));
                        for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.Frame.ExtendedEntry; _.pos < P; ) {
                            var R = _.uint32();
                            switch (R >>> 3) {
                            case 1:
                                j.key = _.string();
                                break;
                            case 2:
                                j.value = _.string();
                                break;
                            default:
                                _.skipType(7 & R)
                            }
                        }
                        if (!j.hasOwnProperty("key"))
                            throw T.ProtocolError("missing required 'key'", {
                                instance: j
                            });
                        if (!j.hasOwnProperty("value"))
                            throw T.ProtocolError("missing required 'value'", {
                                instance: j
                            });
                        return j
                    }
                    ,
                    _
                }(),
                _
            }(),
            _.IMCMD = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[100] = "SEND_MESSAGE"] = 100,
                O[_[200] = "GET_MESSAGES_BY_USER"] = 200,
                O[_[203] = "GET_MESSAGES_BY_USER_INIT_V2"] = 203,
                O[_[211] = "GET_MESSAGE_INFO_BY_SERVER_ID"] = 211,
                O[_[301] = "GET_MESSAGES_BY_CONVERSATION"] = 301,
                O[_[302] = "GET_MESSAGES_CHECKINFO_IN_CONVERSATION"] = 302,
                O[_[410] = "SEND_USER_ACTION"] = 410,
                O[_[411] = "SEND_INPUT_STATUS"] = 411,
                O[_[500] = "NEW_MSG_NOTIFY"] = 500,
                O[_[504] = "NEW_P2P_MSG_NOTIFY"] = 504,
                O[_[505] = "NEW_BROADCAST_MSG_NOTIFY"] = 505,
                O[_[603] = "MARK_CONVERSATION_DELETE"] = 603,
                O[_[609] = "CREATE_CONVERSATION_V2"] = 609,
                O[_[610] = "GET_CONVERSATION_INFO_LIST_V2"] = 610,
                O[_[611] = "GET_CONVERSATION_INFO_LIST_BY_FAVORITE_V2"] = 611,
                O[_[612] = "GET_CONVERSATION_INFO_LIST_BY_TOP_V2"] = 612,
                O[_[614] = "DISSOLVE_CONVERSATION"] = 614,
                O[_[615] = "GET_CONVERSATIONS_CHECKINFO"] = 615,
                O[_[605] = "CONVERSATION_PARTICIPANTS_LIST"] = 605,
                O[_[650] = "ADD_CONVERSATION_PARTICIPANTS"] = 650,
                O[_[651] = "REMOVE_CONVERSATION_PARTICIPANTS"] = 651,
                O[_[652] = "LEAVE_CONVERSATION"] = 652,
                O[_[654] = "MGET_CONVERSATION_PARTICIPANTS"] = 654,
                O[_[655] = "UPDATE_CONVERSATION_PARTICIPANT"] = 655,
                O[_[701] = "DELETE_MESSAGE"] = 701,
                O[_[702] = "RECALL_MESSAGE"] = 702,
                O[_[705] = "SET_MESSAGE_PROPERTY"] = 705,
                O[_[901] = "GET_CONVERSATION_CORE_INFO"] = 901,
                O[_[902] = "SET_CONVERSATION_CORE_INFO"] = 902,
                O[_[904] = "UPSERT_CONVERSATION_CORE_EXT_INFO"] = 904,
                O[_[921] = "SET_CONVERSATION_SETTING_INFO"] = 921,
                O[_[922] = "UPSERT_CONVERSATION_SETTING_EXT_INFO"] = 922,
                O[_[1001] = "GET_STRANGER_CONVERSATION_LIST"] = 1001,
                O[_[1002] = "GET_STRANGER_MESSAGES_IN_CONVERSATION"] = 1002,
                O[_[1003] = "DELETE_STRANGER_MESSAGE"] = 1003,
                O[_[1004] = "DELETE_STRANGER_CONVERSATION"] = 1004,
                O[_[1005] = "DELETE_ALL_STRANGER_CONVERSATIONS"] = 1005,
                O[_[1006] = "MARK_STRANGER_CONVERSATION_READ"] = 1006,
                O[_[1007] = "MARK_ALL_STRANGER_CONVERSATIONS_READ"] = 1007,
                O[_[1099] = "STRANGER_NEW_MSG_NOTIFY"] = 1099,
                O[_[2e3] = "GET_CONVERSATION_PARTICIPANTS_READ_INDEX_V3"] = 2e3,
                O[_[2001] = "GET_CONVERSATION_PARTICIPANTS_MIN_INDEX_V3"] = 2001,
                O[_[2002] = "MARK_CONVERSATION_READ_V3"] = 2002,
                O[_[2003] = "GET_MEDIA_UPLOAD_TOKEN"] = 2003,
                O[_[2004] = "GET_MEDIA_URLS"] = 2004,
                O[_[2005] = "GET_TICKET"] = 2005,
                O[_[2006] = "GET_USER_CONVERSATION_LIST"] = 2006,
                O[_[2007] = "BROADCAST_SEND_MESSAGE"] = 2007,
                O[_[2008] = "BROADCAST_RECV_MESSAGE"] = 2008,
                O[_[2009] = "BROADCAST_USER_COUNTER"] = 2009,
                O[_[2010] = "CLIENT_ACK"] = 2010,
                O[_[2011] = "CREATE_VOIP"] = 2011,
                O[_[2012] = "CALL_VOIP"] = 2012,
                O[_[2013] = "UPDATE_VOIP"] = 2013,
                O[_[2014] = "HEARTBEAT_CHANNEL"] = 2014,
                O[_[2015] = "PROFILE_GET_INFO"] = 2015,
                O[_[2016] = "REPORT_CLIENT_METRICS"] = 2016,
                O[_[2017] = "GET_CONFIGS"] = 2017,
                O[_[2021] = "MODIFY_MESSAGE_EXT"] = 2021,
                O[_[2018] = "UNREAD_COUNT_REPORT"] = 2018,
                O[_[2019] = "BLOCK_MEMBERS"] = 2019,
                O[_[2020] = "BLOCK_CONVERSATION"] = 2020,
                O[_[2030] = "GET_UNREAD_COUNT"] = 2030,
                O[_[2031] = "SEND_MESSAGE_P2P"] = 2031,
                O[_[2032] = "GET_BLOCKLIST"] = 2032,
                O[_[2033] = "SET_BLOCKLIST"] = 2033,
                O[_[2034] = "CHECK_IN_BLOCKLIST"] = 2034,
                O[_[2036] = "MARK_MESSAGE"] = 2036,
                O[_[2037] = "PULL_MARK_MESSAGE"] = 2037,
                O[_[2038] = "BATCH_GAT_CONVERSATION_PARTICIPANTS_READINDEX"] = 2038,
                O[_[2043] = "GET_MESSAGE_BY_INIT"] = 2043,
                O[_[2048] = "GET_USER_MESSAGE"] = 2048,
                O[_[2054] = "MARK_MSG_UNREAD_COUNT_REPORT"] = 2054,
                O[_[2055] = "MARK_MSG_GET_UNREAD_COUNT"] = 2055,
                O[_[2056] = "BATCH_UNMARK_MESSAGE"] = 2056,
                O[_[2057] = "CLIENT_BATCH_ACK"] = 2057,
                O[_[2059] = "AUDIO_RECOGNITION"] = 2059,
                O[_[2105] = "BATCH_MARK_CONVERSATION_READ_V3"] = 2105,
                O[_[2200] = "GET_TAG_META_INFO"] = 2200,
                O[_[2201] = "SET_CONVERSATION_TAG"] = 2201,
                O[_[2202] = "MANAGE_TAG_META_INFO"] = 2202,
                O[_[2203] = "GET_CONVERSATIONS_BY_TAG"] = 2203,
                O
            }(),
            _.StatusCode = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "OK"] = 0,
                O[_[1] = "INVALID_TOKEN"] = 1,
                O[_[100] = "EXPIRED_TOKEN"] = 100,
                O[_[2] = "INVALID_TICKET"] = 2,
                O[_[4] = "INVALID_REQUEST"] = 4,
                O[_[5] = "INVALID_CMD"] = 5,
                O[_[6] = "SERVER_ERR"] = 6,
                O[_[11] = "USER_FORBIDDEN"] = 11,
                O[_[500] = "INTERNAL_ERROR"] = 500,
                O[_[15] = "MESSAGE_TARGET_CONVERSATION_NOT_EXIST"] = 15,
                O[_[16] = "DEGRADATION_ERROR"] = 16,
                O[_[17] = "RECALL_TIMEOUT"] = 17,
                O[_[19] = "CALLBACK_DENY"] = 19,
                O
            }(),
            _.SendMessageStatus = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "SEND_SUCCEED"] = 0,
                O[_[1] = "USER_NOT_IN_CONVERSATION"] = 1,
                O[_[2] = "CHECK_CONV_NOT_PASS"] = 2,
                O[_[3] = "CHECK_MSG_NOT_PASS"] = 3,
                O[_[4] = "CHECK_MSG_NOT_PASS_BUT_SELF_VISIBLE"] = 4,
                O
            }(),
            _.Refer = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "ANDROID"] = 1,
                O[_[2] = "IOS"] = 2,
                O[_[3] = "PC"] = 3,
                O[_[4] = "SERVER"] = 4,
                O
            }(),
            _.ConversationType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "ONE_TO_ONE_CHAT"] = 1,
                O[_[2] = "GROUP_CHAT"] = 2,
                O[_[3] = "LIVE_CHAT"] = 3,
                O[_[4] = "BROADCAST_CHAT"] = 4,
                O
            }(),
            _.MessageType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "LEGACY_MESSAGE_TYPE_SYSTEM"] = 1,
                O[_[2] = "LEGACY_MESSAGE_TYPE_IMAGE"] = 2,
                O[_[3] = "LEGACY_MESSAGE_TYPE_AUDIO"] = 3,
                O[_[4] = "LEGACY_MESSAGE_TYPE_VIDEO"] = 4,
                O[_[5] = "LEGACY_MESSAGE_TYPE_EMOJI"] = 5,
                O[_[6] = "LEGACY_MESSAGE_TYPE_FILE"] = 6,
                O[_[7] = "LEGACY_MESSAGE_TYPE_TEXT"] = 7,
                O[_[8] = "LEGACY_MESSAGE_TYPE_USER_CARD"] = 8,
                O[_[9] = "LEGACY_MESSAGE_TYPE_TOAST"] = 9,
                O[_[10] = "LEGACY_MESSAGE_TYPE_GROUP_CARD"] = 10,
                O[_[10001] = "MESSAGE_TYPE_TEXT"] = 10001,
                O[_[10002] = "MESSAGE_TYPE_STICKER"] = 10002,
                O[_[10003] = "MESSAGE_TYPE_IMAGE"] = 10003,
                O[_[10004] = "MESSAGE_TYPE_VIDEO"] = 10004,
                O[_[10005] = "MESSAGE_TYPE_FILE"] = 10005,
                O[_[10006] = "MESSAGE_TYPE_AUDIO"] = 10006,
                O[_[10007] = "MESSAGE_TYPE_LOCATION"] = 10007,
                O[_[10008] = "MESSAGE_TYPE_SYSTEM"] = 10008,
                O[_[10009] = "MESSAGE_TYPE_LINK"] = 10009,
                O[_[50001] = "MESSAGE_TYPE_COMMAND"] = 50001,
                O[_[50002] = "MESSAGE_TYPE_UPDATE_MESSAGE_EXT"] = 50002,
                O[_[50010] = "MESSAGE_TYPE_MODE_CHANGE"] = 50010,
                O[_[50003] = "MESSAGE_TYPE_UPDATE_MIN_INDEX"] = 50003,
                O[_[50004] = "MESSAGE_TYPE_USER_ACTION"] = 50004,
                O[_[50005] = "MESSAGE_TYPE_CONVERSATION_DESTROY"] = 50005,
                O[_[50011] = "MESSAGE_TYPE_BLOCK_COMMAND"] = 50011,
                O[_[50012] = "MESSAGE_TYPE_MARK_COMMAND"] = 50012,
                O[_[50013] = "MESSAGE_TYPE_READ_COMMAND"] = 50013,
                O[_[50016] = "MESSAGE_TYPE_BATCH_UNMARK_COMMAND"] = 50016,
                O[_[50022] = "MESSAGE_TYPE_NOTIFY_USER_CUSTOM_CONVERSATION_TAG_UPDATE_COMMAND"] = 50022,
                O[_[60001] = "MESSAGE_TYPE_NOTIFY_COMMAND"] = 60001,
                O[_[70001] = "MESSAGE_TYPE_MESSAGE_PROPERTY"] = 70001,
                O[_[70002] = "MESSAGE_TYPE_UPDATE_MESSAGE_PROPERTY"] = 70002,
                O[_[80001] = "MESSAGE_TYPE_VOIP_COMMAND"] = 80001,
                O[_[80002] = "MESSAGE_TYPE_VOIP_CARD_COMMAND"] = 80002,
                O[_[80003] = "MESSAGE_TYPE_VOIP_SINGLE_CHAT_STATUS_COMMAND"] = 80003,
                O[_[80004] = "MESSAGE_TYPE_VOIP_CALLEE_LIST_UPDATE_NOTIFY"] = 80004,
                O
            }(),
            _.GroupRole = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "ORDINARY"] = 0,
                O[_[1] = "OWNER"] = 1,
                O[_[2] = "MANAGER"] = 2,
                O[_[3] = "VISITOR"] = 3,
                O
            }(),
            _.TicketType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "TICKET_TYPE_APP"] = 1,
                O[_[2] = "TICKET_TYPE_PC"] = 2,
                O[_[3] = "TICKET_TYPE_WEB"] = 3,
                O
            }(),
            _.MuteMessageType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[50] = "TYPE_PART_MUTE"] = 50,
                O
            }(),
            _.MuteBadgeCountInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.message_type = 50,
                _.prototype.badge_count = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O.uint32(8).int32(_.message_type),
                    O.uint32(16).int32(_.badge_count),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MuteBadgeCountInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.message_type = _.int32();
                            break;
                        case 2:
                            j.badge_count = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("message_type"))
                        throw T.ProtocolError("missing required 'message_type'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("badge_count"))
                        throw T.ProtocolError("missing required 'badge_count'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.PropertyItem = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.uid = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sec_uid = "",
                _.prototype.create_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.idempotent_id = "",
                _.prototype.value = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.uid && Object.hasOwnProperty.call(_, "uid") && O.uint32(8).int64(_.uid),
                    null != _.sec_uid && Object.hasOwnProperty.call(_, "sec_uid") && O.uint32(18).string(_.sec_uid),
                    null != _.create_time && Object.hasOwnProperty.call(_, "create_time") && O.uint32(24).int64(_.create_time),
                    null != _.idempotent_id && Object.hasOwnProperty.call(_, "idempotent_id") && O.uint32(34).string(_.idempotent_id),
                    null != _.value && Object.hasOwnProperty.call(_, "value") && O.uint32(42).string(_.value),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.PropertyItem; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.uid = _.int64();
                            break;
                        case 2:
                            j.sec_uid = _.string();
                            break;
                        case 3:
                            j.create_time = _.int64();
                            break;
                        case 4:
                            j.idempotent_id = _.string();
                            break;
                        case 5:
                            j.value = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.PropertyItemList = function() {
                function _(_) {
                    if (this.Items = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.Items = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.Items && _.Items.length)
                        for (var P = 0; P < _.Items.length; ++P)
                            E.im_proto.PropertyItem.encode(_.Items[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.PropertyItemList; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.Items && j.Items.length || (j.Items = []),
                        j.Items.push(E.im_proto.PropertyItem.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessageBody = function() {
                function _(_) {
                    if (this.ext = {},
                    this.property_list = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.index_in_conversation = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.message_type = 0,
                _.prototype.sender = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.content = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.create_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.status = 0,
                _.prototype.order_in_conversation = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sec_sender = "",
                _.prototype.property_list = T.emptyObject,
                _.prototype.index_in_conversation_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.reference_info = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(24).int64(_.server_message_id),
                    null != _.index_in_conversation && Object.hasOwnProperty.call(_, "index_in_conversation") && O.uint32(32).int64(_.index_in_conversation),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(40).int64(_.conversation_short_id),
                    null != _.message_type && Object.hasOwnProperty.call(_, "message_type") && O.uint32(48).int32(_.message_type),
                    null != _.sender && Object.hasOwnProperty.call(_, "sender") && O.uint32(56).int64(_.sender),
                    null != _.content && Object.hasOwnProperty.call(_, "content") && O.uint32(66).string(_.content),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(74).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    if (null != _.create_time && Object.hasOwnProperty.call(_, "create_time") && O.uint32(80).int64(_.create_time),
                    null != _.version && Object.hasOwnProperty.call(_, "version") && O.uint32(88).int64(_.version),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(96).int32(_.status),
                    null != _.order_in_conversation && Object.hasOwnProperty.call(_, "order_in_conversation") && O.uint32(104).int64(_.order_in_conversation),
                    null != _.sec_sender && Object.hasOwnProperty.call(_, "sec_sender") && O.uint32(114).string(_.sec_sender),
                    null != _.property_list && Object.hasOwnProperty.call(_, "property_list"))
                        for (var P = Object.keys(_.property_list), j = 0; j < P.length; ++j)
                            O.uint32(122).fork().uint32(10).string(P[j]),
                            E.im_proto.PropertyItemList.encode(_.property_list[P[j]], O.uint32(18).fork()).ldelim().ldelim();
                    return null != _.index_in_conversation_v2 && Object.hasOwnProperty.call(_, "index_in_conversation_v2") && O.uint32(136).int64(_.index_in_conversation_v2),
                    null != _.reference_info && Object.hasOwnProperty.call(_, "reference_info") && E.im_proto.ReferenceInfo.encode(_.reference_info, O.uint32(146).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.MessageBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_type = _.int32();
                            break;
                        case 3:
                            B.server_message_id = _.int64();
                            break;
                        case 4:
                            B.index_in_conversation = _.int64();
                            break;
                        case 5:
                            B.conversation_short_id = _.int64();
                            break;
                        case 6:
                            B.message_type = _.int32();
                            break;
                        case 7:
                            B.sender = _.int64();
                            break;
                        case 8:
                            B.content = _.string();
                            break;
                        case 9:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 10:
                            B.create_time = _.int64();
                            break;
                        case 11:
                            B.version = _.int64();
                            break;
                        case 12:
                            B.status = _.int32();
                            break;
                        case 13:
                            B.order_in_conversation = _.int64();
                            break;
                        case 14:
                            B.sec_sender = _.string();
                            break;
                        case 15:
                            B.property_list === T.emptyObject && (B.property_list = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = null; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = E.im_proto.PropertyItemList.decode(_, _.uint32());
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.property_list[P] = j;
                            break;
                        case 17:
                            B.index_in_conversation_v2 = _.int64();
                            break;
                        case 18:
                            B.reference_info = E.im_proto.ReferenceInfo.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.ReferenceInfo = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.referenced_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.hint = "",
                _.prototype.ref_message_type = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.referenced_message_status = 0,
                _.prototype.root_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.root_message_conv_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.referenced_message_id),
                    O.uint32(18).string(_.hint),
                    O.uint32(24).int64(_.ref_message_type),
                    O.uint32(32).int32(_.referenced_message_status),
                    null != _.root_message_id && Object.hasOwnProperty.call(_, "root_message_id") && O.uint32(40).int64(_.root_message_id),
                    null != _.root_message_conv_index && Object.hasOwnProperty.call(_, "root_message_conv_index") && O.uint32(48).int64(_.root_message_conv_index),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(58).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ReferenceInfo; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.referenced_message_id = _.int64();
                            break;
                        case 2:
                            B.hint = _.string();
                            break;
                        case 3:
                            B.ref_message_type = _.int64();
                            break;
                        case 4:
                            B.referenced_message_status = _.int32();
                            break;
                        case 5:
                            B.root_message_id = _.int64();
                            break;
                        case 6:
                            B.root_message_conv_index = _.int64();
                            break;
                        case 7:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    if (!B.hasOwnProperty("referenced_message_id"))
                        throw T.ProtocolError("missing required 'referenced_message_id'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("hint"))
                        throw T.ProtocolError("missing required 'hint'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("ref_message_type"))
                        throw T.ProtocolError("missing required 'ref_message_type'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("referenced_message_status"))
                        throw T.ProtocolError("missing required 'referenced_message_status'", {
                            instance: B
                        });
                    return B
                }
                ,
                _
            }(),
            _.ParticipantRole = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "PARTICIPANT_ROLE_NORMAL"] = 0,
                O[_[1] = "PARTICIPANT_ROLE_OWNER"] = 1,
                O[_[2] = "PARTICIPANT_ROLE_ADMIN"] = 2,
                O[_[3] = "PARTICIPANT_ROLE_VISITOR"] = 3,
                O
            }(),
            _.Participant = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.user_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sort_order = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.role = 0,
                _.prototype.alias = "",
                _.prototype.sec_uid = "",
                _.prototype.blocked = 0,
                _.prototype.left_block_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.user_id && Object.hasOwnProperty.call(_, "user_id") && O.uint32(8).int64(_.user_id),
                    null != _.sort_order && Object.hasOwnProperty.call(_, "sort_order") && O.uint32(16).int64(_.sort_order),
                    null != _.role && Object.hasOwnProperty.call(_, "role") && O.uint32(24).int32(_.role),
                    null != _.alias && Object.hasOwnProperty.call(_, "alias") && O.uint32(34).string(_.alias),
                    null != _.sec_uid && Object.hasOwnProperty.call(_, "sec_uid") && O.uint32(42).string(_.sec_uid),
                    null != _.blocked && Object.hasOwnProperty.call(_, "blocked") && O.uint32(48).int32(_.blocked),
                    null != _.left_block_time && Object.hasOwnProperty.call(_, "left_block_time") && O.uint32(56).int64(_.left_block_time),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(66).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.Participant; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.user_id = _.int64();
                            break;
                        case 2:
                            B.sort_order = _.int64();
                            break;
                        case 3:
                            B.role = _.int32();
                            break;
                        case 4:
                            B.alias = _.string();
                            break;
                        case 5:
                            B.sec_uid = _.string();
                            break;
                        case 6:
                            B.blocked = _.int32();
                            break;
                        case 7:
                            B.left_block_time = _.int64();
                            break;
                        case 8:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.ParticipantsPage = function() {
                function _(_) {
                    if (this.participants = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.participants = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.participants && _.participants.length)
                        for (var P = 0; P < _.participants.length; ++P)
                            E.im_proto.Participant.encode(_.participants[P], O.uint32(10).fork()).ldelim();
                    return null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(24).int64(_.cursor),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ParticipantsPage; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.participants && j.participants.length || (j.participants = []),
                            j.participants.push(E.im_proto.Participant.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.cursor = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationInfoV2 = function() {
                function _(_) {
                    if (this.mute_badge_count_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.ticket = "",
                _.prototype.first_page_participants = null,
                _.prototype.participants_count = 0,
                _.prototype.is_participant = !1,
                _.prototype.inbox_type = 0,
                _.prototype.badge_count = 0,
                _.prototype.mute_badge_count_infos = T.emptyArray,
                _.prototype.user_info = null,
                _.prototype.conversation_core_info = null,
                _.prototype.conversation_setting_info = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.ticket && Object.hasOwnProperty.call(_, "ticket") && O.uint32(34).string(_.ticket),
                    null != _.first_page_participants && Object.hasOwnProperty.call(_, "first_page_participants") && E.im_proto.ParticipantsPage.encode(_.first_page_participants, O.uint32(50).fork()).ldelim(),
                    null != _.participants_count && Object.hasOwnProperty.call(_, "participants_count") && O.uint32(56).int32(_.participants_count),
                    null != _.is_participant && Object.hasOwnProperty.call(_, "is_participant") && O.uint32(64).bool(_.is_participant),
                    null != _.inbox_type && Object.hasOwnProperty.call(_, "inbox_type") && O.uint32(72).int32(_.inbox_type),
                    null != _.badge_count && Object.hasOwnProperty.call(_, "badge_count") && O.uint32(80).int32(_.badge_count),
                    null != _.mute_badge_count_infos && _.mute_badge_count_infos.length)
                        for (var P = 0; P < _.mute_badge_count_infos.length; ++P)
                            E.im_proto.MuteBadgeCountInfo.encode(_.mute_badge_count_infos[P], O.uint32(90).fork()).ldelim();
                    return null != _.user_info && Object.hasOwnProperty.call(_, "user_info") && E.im_proto.Participant.encode(_.user_info, O.uint32(162).fork()).ldelim(),
                    null != _.conversation_core_info && Object.hasOwnProperty.call(_, "conversation_core_info") && E.im_proto.ConversationCoreInfo.encode(_.conversation_core_info, O.uint32(402).fork()).ldelim(),
                    null != _.conversation_setting_info && Object.hasOwnProperty.call(_, "conversation_setting_info") && E.im_proto.ConversationSettingInfo.encode(_.conversation_setting_info, O.uint32(410).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationInfoV2; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.ticket = _.string();
                            break;
                        case 6:
                            j.first_page_participants = E.im_proto.ParticipantsPage.decode(_, _.uint32());
                            break;
                        case 7:
                            j.participants_count = _.int32();
                            break;
                        case 8:
                            j.is_participant = _.bool();
                            break;
                        case 9:
                            j.inbox_type = _.int32();
                            break;
                        case 10:
                            j.badge_count = _.int32();
                            break;
                        case 11:
                            j.mute_badge_count_infos && j.mute_badge_count_infos.length || (j.mute_badge_count_infos = []),
                            j.mute_badge_count_infos.push(E.im_proto.MuteBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        case 20:
                            j.user_info = E.im_proto.Participant.decode(_, _.uint32());
                            break;
                        case 50:
                            j.conversation_core_info = E.im_proto.ConversationCoreInfo.decode(_, _.uint32());
                            break;
                        case 51:
                            j.conversation_setting_info = E.im_proto.ConversationSettingInfo.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationCoreInfo = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.info_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.name = "",
                _.prototype.desc = "",
                _.prototype.icon = "",
                _.prototype.inbox_type = 0,
                _.prototype.notice = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.owner = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sec_owner = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.info_version && Object.hasOwnProperty.call(_, "info_version") && O.uint32(32).int64(_.info_version),
                    null != _.name && Object.hasOwnProperty.call(_, "name") && O.uint32(42).string(_.name),
                    null != _.desc && Object.hasOwnProperty.call(_, "desc") && O.uint32(50).string(_.desc),
                    null != _.icon && Object.hasOwnProperty.call(_, "icon") && O.uint32(58).string(_.icon),
                    null != _.inbox_type && Object.hasOwnProperty.call(_, "inbox_type") && O.uint32(64).int32(_.inbox_type),
                    null != _.notice && Object.hasOwnProperty.call(_, "notice") && O.uint32(74).string(_.notice),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(90).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return null != _.owner && Object.hasOwnProperty.call(_, "owner") && O.uint32(96).int64(_.owner),
                    null != _.sec_owner && Object.hasOwnProperty.call(_, "sec_owner") && O.uint32(106).string(_.sec_owner),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ConversationCoreInfo; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.info_version = _.int64();
                            break;
                        case 5:
                            B.name = _.string();
                            break;
                        case 6:
                            B.desc = _.string();
                            break;
                        case 7:
                            B.icon = _.string();
                            break;
                        case 8:
                            B.inbox_type = _.int32();
                            break;
                        case 9:
                            B.notice = _.string();
                            break;
                        case 11:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 12:
                            B.owner = _.int64();
                            break;
                        case 13:
                            B.sec_owner = _.string();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.ConversationSettingInfo = function() {
                function _(_) {
                    if (this.ext = {},
                    this.mute_read_badge_count_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.min_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.mute = 0,
                _.prototype.stick_on_top = 0,
                _.prototype.inbox_type = 0,
                _.prototype.ext = T.emptyObject,
                _.prototype.setting_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.favorite = 0,
                _.prototype.set_top_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.set_favorite_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_index_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.min_index_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_badge_count = 0,
                _.prototype.mute_read_badge_count_infos = T.emptyArray,
                _.prototype.push_status = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.min_index && Object.hasOwnProperty.call(_, "min_index") && O.uint32(32).int64(_.min_index),
                    null != _.read_index && Object.hasOwnProperty.call(_, "read_index") && O.uint32(40).int64(_.read_index),
                    null != _.mute && Object.hasOwnProperty.call(_, "mute") && O.uint32(48).int32(_.mute),
                    null != _.stick_on_top && Object.hasOwnProperty.call(_, "stick_on_top") && O.uint32(56).int32(_.stick_on_top),
                    null != _.inbox_type && Object.hasOwnProperty.call(_, "inbox_type") && O.uint32(64).int32(_.inbox_type),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(74).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    if (null != _.setting_version && Object.hasOwnProperty.call(_, "setting_version") && O.uint32(80).int64(_.setting_version),
                    null != _.favorite && Object.hasOwnProperty.call(_, "favorite") && O.uint32(88).int32(_.favorite),
                    null != _.set_top_time && Object.hasOwnProperty.call(_, "set_top_time") && O.uint32(96).int64(_.set_top_time),
                    null != _.set_favorite_time && Object.hasOwnProperty.call(_, "set_favorite_time") && O.uint32(104).int64(_.set_favorite_time),
                    null != _.read_index_v2 && Object.hasOwnProperty.call(_, "read_index_v2") && O.uint32(112).int64(_.read_index_v2),
                    null != _.min_index_v2 && Object.hasOwnProperty.call(_, "min_index_v2") && O.uint32(120).int64(_.min_index_v2),
                    null != _.read_badge_count && Object.hasOwnProperty.call(_, "read_badge_count") && O.uint32(128).int32(_.read_badge_count),
                    null != _.mute_read_badge_count_infos && _.mute_read_badge_count_infos.length)
                        for (var j = 0; j < _.mute_read_badge_count_infos.length; ++j)
                            E.im_proto.MuteReadBadgeCountInfo.encode(_.mute_read_badge_count_infos[j], O.uint32(138).fork()).ldelim();
                    return null != _.push_status && Object.hasOwnProperty.call(_, "push_status") && O.uint32(240).int32(_.push_status),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ConversationSettingInfo; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.min_index = _.int64();
                            break;
                        case 5:
                            B.read_index = _.int64();
                            break;
                        case 6:
                            B.mute = _.int32();
                            break;
                        case 7:
                            B.stick_on_top = _.int32();
                            break;
                        case 8:
                            B.inbox_type = _.int32();
                            break;
                        case 9:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 10:
                            B.setting_version = _.int64();
                            break;
                        case 11:
                            B.favorite = _.int32();
                            break;
                        case 12:
                            B.set_top_time = _.int64();
                            break;
                        case 13:
                            B.set_favorite_time = _.int64();
                            break;
                        case 14:
                            B.read_index_v2 = _.int64();
                            break;
                        case 15:
                            B.min_index_v2 = _.int64();
                            break;
                        case 16:
                            B.read_badge_count = _.int32();
                            break;
                        case 17:
                            B.mute_read_badge_count_infos && B.mute_read_badge_count_infos.length || (B.mute_read_badge_count_infos = []),
                            B.mute_read_badge_count_infos.push(E.im_proto.MuteReadBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        case 30:
                            B.push_status = _.int32();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.MessagesPerUserRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = 50,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(8).int64(_.cursor),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(16).int32(_.limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessagesPerUserRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.cursor = _.int64();
                            break;
                        case 2:
                            j.limit = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessagesPerUserResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    this.conversation_badge_count = [],
                    this.hasmore_message_conv_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.has_more = !1,
                _.prototype.next_interval = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.next_conversation_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_badge_count = T.emptyArray,
                _.prototype.next_cmd_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.hasmore_message_conv_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    if (null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(16).int64(_.next_cursor),
                    null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(24).bool(_.has_more),
                    null != _.next_interval && Object.hasOwnProperty.call(_, "next_interval") && O.uint32(32).int64(_.next_interval),
                    null != _.next_conversation_version && Object.hasOwnProperty.call(_, "next_conversation_version") && O.uint32(40).int64(_.next_conversation_version),
                    null != _.conversation_badge_count && _.conversation_badge_count.length)
                        for (var P = 0; P < _.conversation_badge_count.length; ++P)
                            E.im_proto.ConversationBadgeCountInfo.encode(_.conversation_badge_count[P], O.uint32(50).fork()).ldelim();
                    if (null != _.next_cmd_index && Object.hasOwnProperty.call(_, "next_cmd_index") && O.uint32(56).int64(_.next_cmd_index),
                    null != _.hasmore_message_conv_list && _.hasmore_message_conv_list.length)
                        for (var P = 0; P < _.hasmore_message_conv_list.length; ++P)
                            O.uint32(64).int64(_.hasmore_message_conv_list[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessagesPerUserResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.next_cursor = _.int64();
                            break;
                        case 3:
                            j.has_more = _.bool();
                            break;
                        case 4:
                            j.next_interval = _.int64();
                            break;
                        case 5:
                            j.next_conversation_version = _.int64();
                            break;
                        case 6:
                            j.conversation_badge_count && j.conversation_badge_count.length || (j.conversation_badge_count = []),
                            j.conversation_badge_count.push(E.im_proto.ConversationBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        case 7:
                            j.next_cmd_index = _.int64();
                            break;
                        case 8:
                            if (j.hasmore_message_conv_list && j.hasmore_message_conv_list.length || (j.hasmore_message_conv_list = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.hasmore_message_conv_list.push(_.int64());
                            else
                                j.hasmore_message_conv_list.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationBadgeCountInfo = function() {
                function _(_) {
                    if (this.mute_badge_count_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.badge_count = 0,
                _.prototype.conversation_index_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_id = "",
                _.prototype.mute_badge_count_infos = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.conversation_short_id),
                    O.uint32(16).int32(_.badge_count),
                    O.uint32(24).int64(_.conversation_index_v2),
                    O.uint32(34).string(_.conversation_id),
                    null != _.mute_badge_count_infos && _.mute_badge_count_infos.length)
                        for (var P = 0; P < _.mute_badge_count_infos.length; ++P)
                            E.im_proto.MuteBadgeCountInfo.encode(_.mute_badge_count_infos[P], O.uint32(42).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationBadgeCountInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.badge_count = _.int32();
                            break;
                        case 3:
                            j.conversation_index_v2 = _.int64();
                            break;
                        case 4:
                            j.conversation_id = _.string();
                            break;
                        case 5:
                            j.mute_badge_count_infos && j.mute_badge_count_infos.length || (j.mute_badge_count_infos = []),
                            j.mute_badge_count_infos.push(E.im_proto.MuteBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("conversation_short_id"))
                        throw T.ProtocolError("missing required 'conversation_short_id'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("badge_count"))
                        throw T.ProtocolError("missing required 'badge_count'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("conversation_index_v2"))
                        throw T.ProtocolError("missing required 'conversation_index_v2'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("conversation_id"))
                        throw T.ProtocolError("missing required 'conversation_id'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.MessagesPerUserInitV2RequestBody = function() {
                function _(_) {
                    if (this.biz_tag_ids = [],
                    this.user_custom_tag_ids = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.new_user = 0,
                _.prototype.init_sub_type = 0,
                _.prototype.conv_limit = 0,
                _.prototype.msg_limit = 0,
                _.prototype.biz_tag_ids = T.emptyArray,
                _.prototype.user_custom_tag_ids = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(8).int64(_.cursor),
                    null != _.new_user && Object.hasOwnProperty.call(_, "new_user") && O.uint32(16).int32(_.new_user),
                    null != _.init_sub_type && Object.hasOwnProperty.call(_, "init_sub_type") && O.uint32(24).int32(_.init_sub_type),
                    null != _.conv_limit && Object.hasOwnProperty.call(_, "conv_limit") && O.uint32(32).int32(_.conv_limit),
                    null != _.msg_limit && Object.hasOwnProperty.call(_, "msg_limit") && O.uint32(40).int32(_.msg_limit),
                    null != _.biz_tag_ids && _.biz_tag_ids.length)
                        for (var P = 0; P < _.biz_tag_ids.length; ++P)
                            O.uint32(56).int64(_.biz_tag_ids[P]);
                    if (null != _.user_custom_tag_ids && _.user_custom_tag_ids.length)
                        for (var P = 0; P < _.user_custom_tag_ids.length; ++P)
                            O.uint32(64).int64(_.user_custom_tag_ids[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessagesPerUserInitV2RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.cursor = _.int64();
                            break;
                        case 2:
                            j.new_user = _.int32();
                            break;
                        case 3:
                            j.init_sub_type = _.int32();
                            break;
                        case 4:
                            j.conv_limit = _.int32();
                            break;
                        case 5:
                            j.msg_limit = _.int32();
                            break;
                        case 7:
                            if (j.biz_tag_ids && j.biz_tag_ids.length || (j.biz_tag_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.biz_tag_ids.push(_.int64());
                            else
                                j.biz_tag_ids.push(_.int64());
                            break;
                        case 8:
                            if (j.user_custom_tag_ids && j.user_custom_tag_ids.length || (j.user_custom_tag_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.user_custom_tag_ids.push(_.int64());
                            else
                                j.user_custom_tag_ids.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessagesPerUserInitV2ResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    this.conversations = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.prototype.conversations = T.emptyArray,
                _.prototype.per_user_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.has_more = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    if (null != _.conversations && _.conversations.length)
                        for (var P = 0; P < _.conversations.length; ++P)
                            E.im_proto.ConversationInfoV2.encode(_.conversations[P], O.uint32(18).fork()).ldelim();
                    return null != _.per_user_cursor && Object.hasOwnProperty.call(_, "per_user_cursor") && O.uint32(24).int64(_.per_user_cursor),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(32).int64(_.next_cursor),
                    null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(40).bool(_.has_more),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessagesPerUserInitV2ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.conversations && j.conversations.length || (j.conversations = []),
                            j.conversations.push(E.im_proto.ConversationInfoV2.decode(_, _.uint32()));
                            break;
                        case 3:
                            j.per_user_cursor = _.int64();
                            break;
                        case 4:
                            j.next_cursor = _.int64();
                            break;
                        case 5:
                            j.has_more = _.bool();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessageDirection = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "OLDER"] = 1,
                O[_[2] = "NEWER"] = 2,
                O[_[3] = "FROM_LATEST"] = 3,
                O
            }(),
            _.MessagesInConversationRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.direction = 1,
                _.prototype.anchor_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = 50,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.direction && Object.hasOwnProperty.call(_, "direction") && O.uint32(32).int32(_.direction),
                    null != _.anchor_index && Object.hasOwnProperty.call(_, "anchor_index") && O.uint32(40).int64(_.anchor_index),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(48).int32(_.limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessagesInConversationRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            j.direction = _.int32();
                            break;
                        case 5:
                            j.anchor_index = _.int64();
                            break;
                        case 6:
                            j.limit = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessagesInConversationResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.has_more = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    return null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(16).int64(_.next_cursor),
                    null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(24).bool(_.has_more),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessagesInConversationResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.next_cursor = _.int64();
                            break;
                        case 3:
                            j.has_more = _.bool();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.CreateConversationV2RequestBody = function() {
                function _(_) {
                    if (this.participants = [],
                    this.biz_ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_type = 0,
                _.prototype.participants = T.emptyArray,
                _.prototype.persistent = !1,
                _.prototype.idempotent_id = "",
                _.prototype.name = "",
                _.prototype.avatar_url = "",
                _.prototype.description = "",
                _.prototype.biz_ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(8).int32(_.conversation_type),
                    null != _.participants && _.participants.length)
                        for (var P = 0; P < _.participants.length; ++P)
                            O.uint32(16).int64(_.participants[P]);
                    if (null != _.persistent && Object.hasOwnProperty.call(_, "persistent") && O.uint32(24).bool(_.persistent),
                    null != _.idempotent_id && Object.hasOwnProperty.call(_, "idempotent_id") && O.uint32(34).string(_.idempotent_id),
                    null != _.name && Object.hasOwnProperty.call(_, "name") && O.uint32(50).string(_.name),
                    null != _.avatar_url && Object.hasOwnProperty.call(_, "avatar_url") && O.uint32(58).string(_.avatar_url),
                    null != _.description && Object.hasOwnProperty.call(_, "description") && O.uint32(66).string(_.description),
                    null != _.biz_ext && Object.hasOwnProperty.call(_, "biz_ext"))
                        for (var j = Object.keys(_.biz_ext), P = 0; P < j.length; ++P)
                            O.uint32(90).fork().uint32(10).string(j[P]).uint32(18).string(_.biz_ext[j[P]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.CreateConversationV2RequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_type = _.int32();
                            break;
                        case 2:
                            if (B.participants && B.participants.length || (B.participants = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.participants.push(_.int64());
                            else
                                B.participants.push(_.int64());
                            break;
                        case 3:
                            B.persistent = _.bool();
                            break;
                        case 4:
                            B.idempotent_id = _.string();
                            break;
                        case 6:
                            B.name = _.string();
                            break;
                        case 7:
                            B.avatar_url = _.string();
                            break;
                        case 8:
                            B.description = _.string();
                            break;
                        case 11:
                            B.biz_ext === T.emptyObject && (B.biz_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.biz_ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.CreateConversationV2ResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation = null,
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.extra_info = "",
                _.prototype.status = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation && Object.hasOwnProperty.call(_, "conversation") && E.im_proto.ConversationInfoV2.encode(_.conversation, O.uint32(10).fork()).ldelim(),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(16).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(26).string(_.check_message),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(34).string(_.extra_info),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(40).int32(_.status),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.CreateConversationV2ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation = E.im_proto.ConversationInfoV2.decode(_, _.uint32());
                            break;
                        case 2:
                            j.check_code = _.int64();
                            break;
                        case 3:
                            j.check_message = _.string();
                            break;
                        case 4:
                            j.extra_info = _.string();
                            break;
                        case 5:
                            j.status = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.UserActionType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "ENTER_CONVERSATION"] = 1,
                O[_[2] = "EXIT_CONVERSATION"] = 2,
                O
            }(),
            _.SendUserActionRequestBody = function() {
                function _(_) {
                    if (this.extra = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.action_type = 1,
                _.prototype.extra = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.action_type && Object.hasOwnProperty.call(_, "action_type") && O.uint32(32).int32(_.action_type),
                    null != _.extra && Object.hasOwnProperty.call(_, "extra"))
                        for (var P = Object.keys(_.extra), j = 0; j < P.length; ++j)
                            O.uint32(42).fork().uint32(10).string(P[j]).uint32(18).string(_.extra[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.SendUserActionRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_type = _.int32();
                            break;
                        case 3:
                            B.conversation_short_id = _.int64();
                            break;
                        case 4:
                            B.action_type = _.int32();
                            break;
                        case 5:
                            B.extra === T.emptyObject && (B.extra = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.extra[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.InputStatus = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[3] = "TYPING"] = 3,
                O[_[4] = "CLEAR_INPUT"] = 4,
                O
            }(),
            _.SendInputStatusRequestBody = function() {
                function _(_) {
                    if (this.extra = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.status = 3,
                _.prototype.extra = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(32).int32(_.status),
                    null != _.extra && Object.hasOwnProperty.call(_, "extra"))
                        for (var P = Object.keys(_.extra), j = 0; j < P.length; ++j)
                            O.uint32(42).fork().uint32(10).string(P[j]).uint32(18).string(_.extra[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.SendInputStatusRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_type = _.int32();
                            break;
                        case 3:
                            B.conversation_short_id = _.int64();
                            break;
                        case 4:
                            B.status = _.int32();
                            break;
                        case 5:
                            B.extra === T.emptyObject && (B.extra = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.extra[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.DeleteConversationRequestBody = function() {
                function _(_) {
                    if (this.mute_badge_count_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.last_message_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.badge_count = 0,
                _.prototype.mute_badge_count_infos = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.last_message_index && Object.hasOwnProperty.call(_, "last_message_index") && O.uint32(32).int64(_.last_message_index),
                    null != _.badge_count && Object.hasOwnProperty.call(_, "badge_count") && O.uint32(48).int32(_.badge_count),
                    null != _.mute_badge_count_infos && _.mute_badge_count_infos.length)
                        for (var P = 0; P < _.mute_badge_count_infos.length; ++P)
                            E.im_proto.MuteBadgeCountInfo.encode(_.mute_badge_count_infos[P], O.uint32(58).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.DeleteConversationRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.last_message_index = _.int64();
                            break;
                        case 6:
                            j.badge_count = _.int32();
                            break;
                        case 7:
                            j.mute_badge_count_infos && j.mute_badge_count_infos.length || (j.mute_badge_count_infos = []),
                            j.mute_badge_count_infos.push(E.im_proto.MuteBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.DissolveConversationRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.DissolveConversationRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.DeleteMessageRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.message_id && Object.hasOwnProperty.call(_, "message_id") && O.uint32(32).int64(_.message_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.DeleteMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.message_id = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MarkConversationReadRequestBody = function() {
                function _(_) {
                    if (this.mute_read_badge_count_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.read_message_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conv_unread_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.total_unread_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_message_index_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_badge_count = 0,
                _.prototype.mute_read_badge_count_infos = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.read_message_index && Object.hasOwnProperty.call(_, "read_message_index") && O.uint32(32).int64(_.read_message_index),
                    null != _.conv_unread_count && Object.hasOwnProperty.call(_, "conv_unread_count") && O.uint32(40).int64(_.conv_unread_count),
                    null != _.total_unread_count && Object.hasOwnProperty.call(_, "total_unread_count") && O.uint32(48).int64(_.total_unread_count),
                    null != _.read_message_index_v2 && Object.hasOwnProperty.call(_, "read_message_index_v2") && O.uint32(56).int64(_.read_message_index_v2),
                    null != _.read_badge_count && Object.hasOwnProperty.call(_, "read_badge_count") && O.uint32(64).int32(_.read_badge_count),
                    null != _.mute_read_badge_count_infos && _.mute_read_badge_count_infos.length)
                        for (var P = 0; P < _.mute_read_badge_count_infos.length; ++P)
                            E.im_proto.MuteReadBadgeCountInfo.encode(_.mute_read_badge_count_infos[P], O.uint32(90).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MarkConversationReadRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.read_message_index = _.int64();
                            break;
                        case 5:
                            j.conv_unread_count = _.int64();
                            break;
                        case 6:
                            j.total_unread_count = _.int64();
                            break;
                        case 7:
                            j.read_message_index_v2 = _.int64();
                            break;
                        case 8:
                            j.read_badge_count = _.int32();
                            break;
                        case 11:
                            j.mute_read_badge_count_infos && j.mute_read_badge_count_infos.length || (j.mute_read_badge_count_infos = []),
                            j.mute_read_badge_count_infos.push(E.im_proto.MuteReadBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MuteReadBadgeCountInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.message_type = 50,
                _.prototype.read_badge_count = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O.uint32(8).int32(_.message_type),
                    O.uint32(16).int32(_.read_badge_count),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MuteReadBadgeCountInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.message_type = _.int32();
                            break;
                        case 2:
                            j.read_badge_count = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("message_type"))
                        throw T.ProtocolError("missing required 'message_type'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("read_badge_count"))
                        throw T.ProtocolError("missing required 'read_badge_count'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.BatchMarkConversationReadRequestBody = function() {
                function _(_) {
                    if (this.mark_read_requests = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.mark_read_requests = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.mark_read_requests && _.mark_read_requests.length)
                        for (var P = 0; P < _.mark_read_requests.length; ++P)
                            E.im_proto.MarkConversationReadRequestBody.encode(_.mark_read_requests[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BatchMarkConversationReadRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.mark_read_requests && j.mark_read_requests.length || (j.mark_read_requests = []),
                        j.mark_read_requests.push(E.im_proto.MarkConversationReadRequestBody.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.BatchMarkConversationReadResponseBody = function() {
                function _(_) {
                    if (this.failed_requests = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.failed_requests = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.failed_requests && _.failed_requests.length)
                        for (var P = 0; P < _.failed_requests.length; ++P)
                            E.im_proto.MarkConversationReadRequestBody.encode(_.failed_requests[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BatchMarkConversationReadResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.failed_requests && j.failed_requests.length || (j.failed_requests = []),
                        j.failed_requests.push(E.im_proto.MarkConversationReadRequestBody.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationParticipantsReadIndexV3RequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.conversation_id = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(26).string(_.conversation_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationParticipantsReadIndexV3RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_id = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationParticipantsReadIndexV3ResponseBody = function() {
                function _(_) {
                    if (this.indexes = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.indexes = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.indexes && _.indexes.length)
                        for (var P = 0; P < _.indexes.length; ++P)
                            E.im_proto.ParticipantReadIndex.encode(_.indexes[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationParticipantsReadIndexV3ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.indexes && j.indexes.length || (j.indexes = []),
                        j.indexes.push(E.im_proto.ParticipantReadIndex.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ParticipantReadIndex = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.user_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sec_uid = "",
                _.prototype.index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.index_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.index_min = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.user_id && Object.hasOwnProperty.call(_, "user_id") && O.uint32(8).int64(_.user_id),
                    null != _.sec_uid && Object.hasOwnProperty.call(_, "sec_uid") && O.uint32(18).string(_.sec_uid),
                    null != _.index && Object.hasOwnProperty.call(_, "index") && O.uint32(24).int64(_.index),
                    null != _.index_v2 && Object.hasOwnProperty.call(_, "index_v2") && O.uint32(32).int64(_.index_v2),
                    null != _.index_min && Object.hasOwnProperty.call(_, "index_min") && O.uint32(40).int64(_.index_min),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ParticipantReadIndex; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.user_id = _.int64();
                            break;
                        case 2:
                            j.sec_uid = _.string();
                            break;
                        case 3:
                            j.index = _.int64();
                            break;
                        case 4:
                            j.index_v2 = _.int64();
                            break;
                        case 5:
                            j.index_min = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BatchGetConversationParticipantsReadIndexRequestBody = function() {
                function _(_) {
                    if (this.conversation_id = [],
                    this.conversation_short_id = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = T.emptyArray,
                _.prototype.conversation_short_id = T.emptyArray,
                _.prototype.request_from = "",
                _.prototype.min_index_required = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && _.conversation_id.length)
                        for (var P = 0; P < _.conversation_id.length; ++P)
                            O.uint32(10).string(_.conversation_id[P]);
                    if (null != _.conversation_short_id && _.conversation_short_id.length)
                        for (var P = 0; P < _.conversation_short_id.length; ++P)
                            O.uint32(16).int64(_.conversation_short_id[P]);
                    return null != _.request_from && Object.hasOwnProperty.call(_, "request_from") && O.uint32(26).string(_.request_from),
                    null != _.min_index_required && Object.hasOwnProperty.call(_, "min_index_required") && O.uint32(32).bool(_.min_index_required),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BatchGetConversationParticipantsReadIndexRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id && j.conversation_id.length || (j.conversation_id = []),
                            j.conversation_id.push(_.string());
                            break;
                        case 2:
                            if (j.conversation_short_id && j.conversation_short_id.length || (j.conversation_short_id = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.conversation_short_id.push(_.int64());
                            else
                                j.conversation_short_id.push(_.int64());
                            break;
                        case 3:
                            j.request_from = _.string();
                            break;
                        case 4:
                            j.min_index_required = _.bool();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BatchGetConversationParticipantsReadIndexResponseBody = function() {
                function _(_) {
                    if (this.conversationParticipantsReadIndex = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversationParticipantsReadIndex = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversationParticipantsReadIndex && _.conversationParticipantsReadIndex.length)
                        for (var P = 0; P < _.conversationParticipantsReadIndex.length; ++P)
                            E.im_proto.ConversationParticipantReadIndex.encode(_.conversationParticipantsReadIndex[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BatchGetConversationParticipantsReadIndexResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.conversationParticipantsReadIndex && j.conversationParticipantsReadIndex.length || (j.conversationParticipantsReadIndex = []),
                        j.conversationParticipantsReadIndex.push(E.im_proto.ConversationParticipantReadIndex.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationParticipantReadIndex = function() {
                function _(_) {
                    if (this.participantReadIndex = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.participantReadIndex = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.participantReadIndex && _.participantReadIndex.length)
                        for (var P = 0; P < _.participantReadIndex.length; ++P)
                            E.im_proto.ParticipantReadIndex.encode(_.participantReadIndex[P], O.uint32(26).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationParticipantReadIndex; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.participantReadIndex && j.participantReadIndex.length || (j.participantReadIndex = []),
                            j.participantReadIndex.push(E.im_proto.ParticipantReadIndex.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationParticipantsMinIndexV3RequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.conversation_id = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(26).string(_.conversation_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationParticipantsMinIndexV3RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_id = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationParticipantsMinIndexV3ResponseBody = function() {
                function _(_) {
                    if (this.indexes = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.indexes = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.indexes && _.indexes.length)
                        for (var P = 0; P < _.indexes.length; ++P)
                            E.im_proto.ParticipantMinIndex.encode(_.indexes[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationParticipantsMinIndexV3ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.indexes && j.indexes.length || (j.indexes = []),
                        j.indexes.push(E.im_proto.ParticipantMinIndex.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ParticipantMinIndex = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.user_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sec_uid = "",
                _.prototype.index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.user_id && Object.hasOwnProperty.call(_, "user_id") && O.uint32(8).int64(_.user_id),
                    null != _.sec_uid && Object.hasOwnProperty.call(_, "sec_uid") && O.uint32(18).string(_.sec_uid),
                    null != _.index && Object.hasOwnProperty.call(_, "index") && O.uint32(24).int64(_.index),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ParticipantMinIndex; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.user_id = _.int64();
                            break;
                        case 2:
                            j.sec_uid = _.string();
                            break;
                        case 3:
                            j.index = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.SendMessageRequestBody = function() {
                function _(_) {
                    if (this.ext = {},
                    this.mentioned_users = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.content = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.message_type = 0,
                _.prototype.ticket = "",
                _.prototype.client_message_id = "",
                _.prototype.mentioned_users = T.emptyArray,
                _.prototype.ignore_badge_count = !1,
                _.prototype.ref_msg_info = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.content && Object.hasOwnProperty.call(_, "content") && O.uint32(34).string(_.content),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(42).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    if (null != _.message_type && Object.hasOwnProperty.call(_, "message_type") && O.uint32(48).int32(_.message_type),
                    null != _.ticket && Object.hasOwnProperty.call(_, "ticket") && O.uint32(58).string(_.ticket),
                    null != _.client_message_id && Object.hasOwnProperty.call(_, "client_message_id") && O.uint32(66).string(_.client_message_id),
                    null != _.mentioned_users && _.mentioned_users.length)
                        for (var j = 0; j < _.mentioned_users.length; ++j)
                            O.uint32(72).int64(_.mentioned_users[j]);
                    return null != _.ignore_badge_count && Object.hasOwnProperty.call(_, "ignore_badge_count") && O.uint32(80).bool(_.ignore_badge_count),
                    null != _.ref_msg_info && Object.hasOwnProperty.call(_, "ref_msg_info") && E.im_proto.ReferencedMessageInfo.encode(_.ref_msg_info, O.uint32(90).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.SendMessageRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_type = _.int32();
                            break;
                        case 3:
                            B.conversation_short_id = _.int64();
                            break;
                        case 4:
                            B.content = _.string();
                            break;
                        case 5:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 6:
                            B.message_type = _.int32();
                            break;
                        case 7:
                            B.ticket = _.string();
                            break;
                        case 8:
                            B.client_message_id = _.string();
                            break;
                        case 9:
                            if (B.mentioned_users && B.mentioned_users.length || (B.mentioned_users = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.mentioned_users.push(_.int64());
                            else
                                B.mentioned_users.push(_.int64());
                            break;
                        case 10:
                            B.ignore_badge_count = _.bool();
                            break;
                        case 11:
                            B.ref_msg_info = E.im_proto.ReferencedMessageInfo.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.ReferencedMessageInfo = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.referenced_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.hint = "",
                _.prototype.root_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.root_message_conv_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.referenced_message_id),
                    O.uint32(18).string(_.hint),
                    null != _.root_message_id && Object.hasOwnProperty.call(_, "root_message_id") && O.uint32(24).int64(_.root_message_id),
                    null != _.root_message_conv_index && Object.hasOwnProperty.call(_, "root_message_conv_index") && O.uint32(32).int64(_.root_message_conv_index),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(42).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ReferencedMessageInfo; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.referenced_message_id = _.int64();
                            break;
                        case 2:
                            B.hint = _.string();
                            break;
                        case 3:
                            B.root_message_id = _.int64();
                            break;
                        case 4:
                            B.root_message_conv_index = _.int64();
                            break;
                        case 5:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    if (!B.hasOwnProperty("referenced_message_id"))
                        throw T.ProtocolError("missing required 'referenced_message_id'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("hint"))
                        throw T.ProtocolError("missing required 'hint'", {
                            instance: B
                        });
                    return B
                }
                ,
                _
            }(),
            _.SendMessageResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.extra_info = "",
                _.prototype.status = 0,
                _.prototype.client_message_id = "",
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(8).int64(_.server_message_id),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(18).string(_.extra_info),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(24).int32(_.status),
                    null != _.client_message_id && Object.hasOwnProperty.call(_, "client_message_id") && O.uint32(34).string(_.client_message_id),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(40).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(50).string(_.check_message),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SendMessageResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.server_message_id = _.int64();
                            break;
                        case 2:
                            j.extra_info = _.string();
                            break;
                        case 3:
                            j.status = _.int32();
                            break;
                        case 4:
                            j.client_message_id = _.string();
                            break;
                        case 5:
                            j.check_code = _.int64();
                            break;
                        case 6:
                            j.check_message = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.NewMessageNotifyType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "PER_USER"] = 1,
                O[_[2] = "PER_CONVERSATION"] = 2,
                O
            }(),
            _.MsgTracePath = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "FROM_UNKNOWN"] = 0,
                O[_[1] = "FROM_FRONTIER"] = 1,
                O[_[2] = "FROM_HTTP"] = 2,
                O[_[3] = "FROM_SERVER"] = 3,
                O
            }(),
            _.MsgTrace = function() {
                function _(_) {
                    if (this.metrics = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.metrics = T.emptyObject,
                _.prototype.path = 0,
                _.prototype.connStatus = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.metrics && Object.hasOwnProperty.call(_, "metrics"))
                        for (var P = Object.keys(_.metrics), j = 0; j < P.length; ++j)
                            O.uint32(10).fork().uint32(8).int32(P[j]).uint32(16).int64(_.metrics[P[j]]).ldelim();
                    return null != _.path && Object.hasOwnProperty.call(_, "path") && O.uint32(16).int32(_.path),
                    null != _.connStatus && Object.hasOwnProperty.call(_, "connStatus") && O.uint32(24).int32(_.connStatus),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.MsgTrace; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.metrics === T.emptyObject && (B.metrics = {});
                            var M = _.uint32() + _.pos;
                            for (P = 0,
                            j = 0; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.int32();
                                    break;
                                case 2:
                                    j = _.int64();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.metrics[P] = j;
                            break;
                        case 2:
                            B.path = _.int32();
                            break;
                        case 3:
                            B.connStatus = _.int32();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.NewMessageNotify = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.notify_type = 1,
                _.prototype.message = null,
                _.prototype.previous_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.index_in_conversation = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.index_in_conversation_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.previous_conversation_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.cmd_message_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.badge_count = 0,
                _.prototype.trace = null,
                _.prototype.ref_msg_info = null,
                _.prototype.previous_msg_index_in_conv = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.readconv_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.pre_readconv_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.mute_badge_count_info = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(18).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.notify_type && Object.hasOwnProperty.call(_, "notify_type") && O.uint32(32).int32(_.notify_type),
                    null != _.message && Object.hasOwnProperty.call(_, "message") && E.im_proto.MessageBody.encode(_.message, O.uint32(42).fork()).ldelim(),
                    null != _.previous_cursor && Object.hasOwnProperty.call(_, "previous_cursor") && O.uint32(48).int64(_.previous_cursor),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(56).int64(_.next_cursor),
                    null != _.index_in_conversation && Object.hasOwnProperty.call(_, "index_in_conversation") && O.uint32(64).int64(_.index_in_conversation),
                    null != _.index_in_conversation_v2 && Object.hasOwnProperty.call(_, "index_in_conversation_v2") && O.uint32(72).int64(_.index_in_conversation_v2),
                    null != _.conversation_version && Object.hasOwnProperty.call(_, "conversation_version") && O.uint32(80).int64(_.conversation_version),
                    null != _.previous_conversation_version && Object.hasOwnProperty.call(_, "previous_conversation_version") && O.uint32(88).int64(_.previous_conversation_version),
                    null != _.cmd_message_index && Object.hasOwnProperty.call(_, "cmd_message_index") && O.uint32(96).int64(_.cmd_message_index),
                    null != _.badge_count && Object.hasOwnProperty.call(_, "badge_count") && O.uint32(104).int32(_.badge_count),
                    null != _.trace && Object.hasOwnProperty.call(_, "trace") && E.im_proto.MsgTrace.encode(_.trace, O.uint32(114).fork()).ldelim(),
                    null != _.ref_msg_info && Object.hasOwnProperty.call(_, "ref_msg_info") && E.im_proto.ReferenceInfo.encode(_.ref_msg_info, O.uint32(122).fork()).ldelim(),
                    null != _.previous_msg_index_in_conv && Object.hasOwnProperty.call(_, "previous_msg_index_in_conv") && O.uint32(128).int64(_.previous_msg_index_in_conv),
                    null != _.readconv_version && Object.hasOwnProperty.call(_, "readconv_version") && O.uint32(136).int64(_.readconv_version),
                    null != _.pre_readconv_version && Object.hasOwnProperty.call(_, "pre_readconv_version") && O.uint32(144).int64(_.pre_readconv_version),
                    null != _.mute_badge_count_info && Object.hasOwnProperty.call(_, "mute_badge_count_info") && E.im_proto.MuteBadgeCountInfo.encode(_.mute_badge_count_info, O.uint32(154).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.NewMessageNotify; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 2:
                            j.conversation_id = _.string();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.notify_type = _.int32();
                            break;
                        case 5:
                            j.message = E.im_proto.MessageBody.decode(_, _.uint32());
                            break;
                        case 6:
                            j.previous_cursor = _.int64();
                            break;
                        case 7:
                            j.next_cursor = _.int64();
                            break;
                        case 8:
                            j.index_in_conversation = _.int64();
                            break;
                        case 9:
                            j.index_in_conversation_v2 = _.int64();
                            break;
                        case 10:
                            j.conversation_version = _.int64();
                            break;
                        case 11:
                            j.previous_conversation_version = _.int64();
                            break;
                        case 12:
                            j.cmd_message_index = _.int64();
                            break;
                        case 13:
                            j.badge_count = _.int32();
                            break;
                        case 14:
                            j.trace = E.im_proto.MsgTrace.decode(_, _.uint32());
                            break;
                        case 15:
                            j.ref_msg_info = E.im_proto.ReferenceInfo.decode(_, _.uint32());
                            break;
                        case 16:
                            j.previous_msg_index_in_conv = _.int64();
                            break;
                        case 17:
                            j.readconv_version = _.int64();
                            break;
                        case 18:
                            j.pre_readconv_version = _.int64();
                            break;
                        case 19:
                            j.mute_badge_count_info = E.im_proto.MuteBadgeCountInfo.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationsPerUserByFavoriteV2RequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = 500,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(8).int64(_.cursor),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(16).int32(_.limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationsPerUserByFavoriteV2RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.cursor = _.int64();
                            break;
                        case 2:
                            j.limit = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationsPerUserByTopV2RequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = 500,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(8).int64(_.cursor),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(16).int32(_.limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationsPerUserByTopV2RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.cursor = _.int64();
                            break;
                        case 2:
                            j.limit = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationInfoV2RequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationInfoV2RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationInfoListV2RequestBody = function() {
                function _(_) {
                    if (this.conversation_info_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_info_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_info_list && _.conversation_info_list.length)
                        for (var P = 0; P < _.conversation_info_list.length; ++P)
                            E.im_proto.GetConversationInfoV2RequestBody.encode(_.conversation_info_list[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationInfoListV2RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.conversation_info_list && j.conversation_info_list.length || (j.conversation_info_list = []),
                        j.conversation_info_list.push(E.im_proto.GetConversationInfoV2RequestBody.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationInfoListV2ResponseBody = function() {
                function _(_) {
                    if (this.conversation_info_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_info_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_info_list && _.conversation_info_list.length)
                        for (var P = 0; P < _.conversation_info_list.length; ++P)
                            E.im_proto.ConversationInfoV2.encode(_.conversation_info_list[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationInfoListV2ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.conversation_info_list && j.conversation_info_list.length || (j.conversation_info_list = []),
                        j.conversation_info_list.push(E.im_proto.ConversationInfoV2.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationInfoListByFavoriteV2ResponseBody = function() {
                function _(_) {
                    if (this.conversation_info_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_info_list = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_info_list && _.conversation_info_list.length)
                        for (var P = 0; P < _.conversation_info_list.length; ++P)
                            E.im_proto.ConversationInfoV2.encode(_.conversation_info_list[P], O.uint32(10).fork()).ldelim();
                    return null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(24).int64(_.next_cursor),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationInfoListByFavoriteV2ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_info_list && j.conversation_info_list.length || (j.conversation_info_list = []),
                            j.conversation_info_list.push(E.im_proto.ConversationInfoV2.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cursor = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationInfoListByTopV2ResponseBody = function() {
                function _(_) {
                    if (this.conversation_info_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_info_list = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_info_list && _.conversation_info_list.length)
                        for (var P = 0; P < _.conversation_info_list.length; ++P)
                            E.im_proto.ConversationInfoV2.encode(_.conversation_info_list[P], O.uint32(10).fork()).ldelim();
                    return null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(24).int64(_.next_cursor),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationInfoListByTopV2ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_info_list && j.conversation_info_list.length || (j.conversation_info_list = []),
                            j.conversation_info_list.push(E.im_proto.ConversationInfoV2.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cursor = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.RecallMessageRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(32).int64(_.server_message_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.RecallMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.server_message_id = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationAddParticipantsRequestBody = function() {
                function _(_) {
                    if (this.participants = [],
                    this.biz_ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.participants = T.emptyArray,
                _.prototype.biz_ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.participants && _.participants.length)
                        for (var P = 0; P < _.participants.length; ++P)
                            O.uint32(32).int64(_.participants[P]);
                    if (null != _.biz_ext && Object.hasOwnProperty.call(_, "biz_ext"))
                        for (var j = Object.keys(_.biz_ext), P = 0; P < j.length; ++P)
                            O.uint32(42).fork().uint32(10).string(j[P]).uint32(18).string(_.biz_ext[j[P]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ConversationAddParticipantsRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            if (B.participants && B.participants.length || (B.participants = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.participants.push(_.int64());
                            else
                                B.participants.push(_.int64());
                            break;
                        case 5:
                            B.biz_ext === T.emptyObject && (B.biz_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.biz_ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.SecUidPair = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.uid = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sec_uid = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.uid && Object.hasOwnProperty.call(_, "uid") && O.uint32(8).int64(_.uid),
                    null != _.sec_uid && Object.hasOwnProperty.call(_, "sec_uid") && O.uint32(18).string(_.sec_uid),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SecUidPair; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.uid = _.int64();
                            break;
                        case 2:
                            j.sec_uid = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationAddParticipantsResponseBody = function() {
                function _(_) {
                    if (this.success_participants = [],
                    this.failed_participants = [],
                    this.sec_success_participants = [],
                    this.sec_failed_participants = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.success_participants = T.emptyArray,
                _.prototype.failed_participants = T.emptyArray,
                _.prototype.status = 0,
                _.prototype.extra_info = "",
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.sec_success_participants = T.emptyArray,
                _.prototype.sec_failed_participants = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.success_participants && _.success_participants.length)
                        for (var P = 0; P < _.success_participants.length; ++P)
                            O.uint32(8).int64(_.success_participants[P]);
                    if (null != _.failed_participants && _.failed_participants.length)
                        for (var P = 0; P < _.failed_participants.length; ++P)
                            O.uint32(16).int64(_.failed_participants[P]);
                    if (null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(24).int32(_.status),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(34).string(_.extra_info),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(40).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(50).string(_.check_message),
                    null != _.sec_success_participants && _.sec_success_participants.length)
                        for (var P = 0; P < _.sec_success_participants.length; ++P)
                            E.im_proto.SecUidPair.encode(_.sec_success_participants[P], O.uint32(58).fork()).ldelim();
                    if (null != _.sec_failed_participants && _.sec_failed_participants.length)
                        for (var P = 0; P < _.sec_failed_participants.length; ++P)
                            E.im_proto.SecUidPair.encode(_.sec_failed_participants[P], O.uint32(66).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationAddParticipantsResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            if (j.success_participants && j.success_participants.length || (j.success_participants = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.success_participants.push(_.int64());
                            else
                                j.success_participants.push(_.int64());
                            break;
                        case 2:
                            if (j.failed_participants && j.failed_participants.length || (j.failed_participants = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_participants.push(_.int64());
                            else
                                j.failed_participants.push(_.int64());
                            break;
                        case 3:
                            j.status = _.int32();
                            break;
                        case 4:
                            j.extra_info = _.string();
                            break;
                        case 5:
                            j.check_code = _.int64();
                            break;
                        case 6:
                            j.check_message = _.string();
                            break;
                        case 7:
                            j.sec_success_participants && j.sec_success_participants.length || (j.sec_success_participants = []),
                            j.sec_success_participants.push(E.im_proto.SecUidPair.decode(_, _.uint32()));
                            break;
                        case 8:
                            j.sec_failed_participants && j.sec_failed_participants.length || (j.sec_failed_participants = []),
                            j.sec_failed_participants.push(E.im_proto.SecUidPair.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationRemoveParticipantsRequestBody = function() {
                function _(_) {
                    if (this.participants = [],
                    this.biz_ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.participants = T.emptyArray,
                _.prototype.biz_ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.participants && _.participants.length)
                        for (var P = 0; P < _.participants.length; ++P)
                            O.uint32(32).int64(_.participants[P]);
                    if (null != _.biz_ext && Object.hasOwnProperty.call(_, "biz_ext"))
                        for (var j = Object.keys(_.biz_ext), P = 0; P < j.length; ++P)
                            O.uint32(42).fork().uint32(10).string(j[P]).uint32(18).string(_.biz_ext[j[P]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ConversationRemoveParticipantsRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            if (B.participants && B.participants.length || (B.participants = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.participants.push(_.int64());
                            else
                                B.participants.push(_.int64());
                            break;
                        case 5:
                            B.biz_ext === T.emptyObject && (B.biz_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.biz_ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.ConversationRemoveParticipantsResponseBody = function() {
                function _(_) {
                    if (this.failed_participants = [],
                    this.failed_sec_participants = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.failed_participants = T.emptyArray,
                _.prototype.status = 0,
                _.prototype.extra_info = "",
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.failed_sec_participants = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.failed_participants && _.failed_participants.length)
                        for (var P = 0; P < _.failed_participants.length; ++P)
                            O.uint32(8).int64(_.failed_participants[P]);
                    if (null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(16).int32(_.status),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(26).string(_.extra_info),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(32).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(42).string(_.check_message),
                    null != _.failed_sec_participants && _.failed_sec_participants.length)
                        for (var P = 0; P < _.failed_sec_participants.length; ++P)
                            E.im_proto.SecUidPair.encode(_.failed_sec_participants[P], O.uint32(50).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationRemoveParticipantsResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            if (j.failed_participants && j.failed_participants.length || (j.failed_participants = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_participants.push(_.int64());
                            else
                                j.failed_participants.push(_.int64());
                            break;
                        case 2:
                            j.status = _.int32();
                            break;
                        case 3:
                            j.extra_info = _.string();
                            break;
                        case 4:
                            j.check_code = _.int64();
                            break;
                        case 5:
                            j.check_message = _.string();
                            break;
                        case 6:
                            j.failed_sec_participants && j.failed_sec_participants.length || (j.failed_sec_participants = []),
                            j.failed_sec_participants.push(E.im_proto.SecUidPair.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationLeaveRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationLeaveRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationParticipantsListRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = 100,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(32).int64(_.cursor),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(40).int32(_.limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationParticipantsListRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.cursor = _.int64();
                            break;
                        case 5:
                            j.limit = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationParticipantsListResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.participants_page = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.participants_page && Object.hasOwnProperty.call(_, "participants_page") && E.im_proto.ParticipantsPage.encode(_.participants_page, O.uint32(10).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationParticipantsListResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.participants_page = E.im_proto.ParticipantsPage.decode(_, _.uint32()) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.MgetConversationParticipantsRequestBody = function() {
                function _(_) {
                    if (this.participants = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.participants = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.participants && _.participants.length)
                        for (var P = 0; P < _.participants.length; ++P)
                            O.uint32(32).int64(_.participants[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MgetConversationParticipantsRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            if (j.participants && j.participants.length || (j.participants = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.participants.push(_.int64());
                            else
                                j.participants.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MgetConversationParticipantsResponseBody = function() {
                function _(_) {
                    if (this.participants = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.participants = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.participants && _.participants.length)
                        for (var P = 0; P < _.participants.length; ++P)
                            E.im_proto.Participant.encode(_.participants[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MgetConversationParticipantsResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.participants && j.participants.length || (j.participants = []),
                        j.participants.push(E.im_proto.Participant.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.UpdateConversationParticipantRequestBody = function() {
                function _(_) {
                    if (this.biz_ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.user_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.role = 0,
                _.prototype.alias = "",
                _.prototype.is_alias_set = !1,
                _.prototype.biz_ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.user_id && Object.hasOwnProperty.call(_, "user_id") && O.uint32(32).int64(_.user_id),
                    null != _.role && Object.hasOwnProperty.call(_, "role") && O.uint32(40).int32(_.role),
                    null != _.alias && Object.hasOwnProperty.call(_, "alias") && O.uint32(50).string(_.alias),
                    null != _.is_alias_set && Object.hasOwnProperty.call(_, "is_alias_set") && O.uint32(56).bool(_.is_alias_set),
                    null != _.biz_ext && Object.hasOwnProperty.call(_, "biz_ext"))
                        for (var P = Object.keys(_.biz_ext), j = 0; j < P.length; ++j)
                            O.uint32(90).fork().uint32(10).string(P[j]).uint32(18).string(_.biz_ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.UpdateConversationParticipantRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.user_id = _.int64();
                            break;
                        case 5:
                            B.role = _.int32();
                            break;
                        case 6:
                            B.alias = _.string();
                            break;
                        case 7:
                            B.is_alias_set = _.bool();
                            break;
                        case 11:
                            B.biz_ext === T.emptyObject && (B.biz_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.biz_ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.UpdateConversationParticipantResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.participant = null,
                _.prototype.status = 0,
                _.prototype.extra_info = "",
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.participant && Object.hasOwnProperty.call(_, "participant") && E.im_proto.Participant.encode(_.participant, O.uint32(10).fork()).ldelim(),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(16).int32(_.status),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(26).string(_.extra_info),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(32).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(42).string(_.check_message),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.UpdateConversationParticipantResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.participant = E.im_proto.Participant.decode(_, _.uint32());
                            break;
                        case 2:
                            j.status = _.int32();
                            break;
                        case 3:
                            j.extra_info = _.string();
                            break;
                        case 4:
                            j.check_code = _.int64();
                            break;
                        case 5:
                            j.check_message = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationCoreInfoRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationCoreInfoRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationCoreInfoResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_core_info = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_core_info && Object.hasOwnProperty.call(_, "conversation_core_info") && E.im_proto.ConversationCoreInfo.encode(_.conversation_core_info, O.uint32(10).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationCoreInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.conversation_core_info = E.im_proto.ConversationCoreInfo.decode(_, _.uint32()) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.SetConversationCoreInfoRequestBody = function() {
                function _(_) {
                    if (this.ext = {},
                    this.biz_ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.name = "",
                _.prototype.desc = "",
                _.prototype.icon = "",
                _.prototype.notice = "",
                _.prototype.is_name_set = !1,
                _.prototype.is_desc_set = !1,
                _.prototype.is_icon_set = !1,
                _.prototype.is_notice_set = !1,
                _.prototype.ext = T.emptyObject,
                _.prototype.biz_ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.name && Object.hasOwnProperty.call(_, "name") && O.uint32(34).string(_.name),
                    null != _.desc && Object.hasOwnProperty.call(_, "desc") && O.uint32(42).string(_.desc),
                    null != _.icon && Object.hasOwnProperty.call(_, "icon") && O.uint32(50).string(_.icon),
                    null != _.notice && Object.hasOwnProperty.call(_, "notice") && O.uint32(58).string(_.notice),
                    null != _.is_name_set && Object.hasOwnProperty.call(_, "is_name_set") && O.uint32(64).bool(_.is_name_set),
                    null != _.is_desc_set && Object.hasOwnProperty.call(_, "is_desc_set") && O.uint32(72).bool(_.is_desc_set),
                    null != _.is_icon_set && Object.hasOwnProperty.call(_, "is_icon_set") && O.uint32(80).bool(_.is_icon_set),
                    null != _.is_notice_set && Object.hasOwnProperty.call(_, "is_notice_set") && O.uint32(88).bool(_.is_notice_set),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(98).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    if (null != _.biz_ext && Object.hasOwnProperty.call(_, "biz_ext"))
                        for (var P = Object.keys(_.biz_ext), j = 0; j < P.length; ++j)
                            O.uint32(186).fork().uint32(10).string(P[j]).uint32(18).string(_.biz_ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.SetConversationCoreInfoRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.name = _.string();
                            break;
                        case 5:
                            B.desc = _.string();
                            break;
                        case 6:
                            B.icon = _.string();
                            break;
                        case 7:
                            B.notice = _.string();
                            break;
                        case 8:
                            B.is_name_set = _.bool();
                            break;
                        case 9:
                            B.is_desc_set = _.bool();
                            break;
                        case 10:
                            B.is_icon_set = _.bool();
                            break;
                        case 11:
                            B.is_notice_set = _.bool();
                            break;
                        case 12:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 23:
                            B.biz_ext === T.emptyObject && (B.biz_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.biz_ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.SetConversationCoreInfoResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_core_info = null,
                _.prototype.status = 0,
                _.prototype.extra_info = "",
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_core_info && Object.hasOwnProperty.call(_, "conversation_core_info") && E.im_proto.ConversationCoreInfo.encode(_.conversation_core_info, O.uint32(10).fork()).ldelim(),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(16).int32(_.status),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(26).string(_.extra_info),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(32).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(42).string(_.check_message),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SetConversationCoreInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_core_info = E.im_proto.ConversationCoreInfo.decode(_, _.uint32());
                            break;
                        case 2:
                            j.status = _.int32();
                            break;
                        case 3:
                            j.extra_info = _.string();
                            break;
                        case 4:
                            j.check_code = _.int64();
                            break;
                        case 5:
                            j.check_message = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.UpsertConversationCoreExtInfoRequestBody = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(34).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.UpsertConversationCoreExtInfoRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.UpsertConversationCoreExtInfoResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.core_info = null,
                _.prototype.status = 0,
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.extra_info = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.core_info && Object.hasOwnProperty.call(_, "core_info") && E.im_proto.ConversationCoreInfo.encode(_.core_info, O.uint32(10).fork()).ldelim(),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(16).int32(_.status),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(24).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(34).string(_.check_message),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(42).string(_.extra_info),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.UpsertConversationCoreExtInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.core_info = E.im_proto.ConversationCoreInfo.decode(_, _.uint32());
                            break;
                        case 2:
                            j.status = _.int32();
                            break;
                        case 3:
                            j.check_code = _.int64();
                            break;
                        case 4:
                            j.check_message = _.string();
                            break;
                        case 5:
                            j.extra_info = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.SetConversationSettingInfoRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.set_stick_on_top = !1,
                _.prototype.set_mute = !1,
                _.prototype.set_favorite = !1,
                _.prototype.push_status = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.set_stick_on_top && Object.hasOwnProperty.call(_, "set_stick_on_top") && O.uint32(32).bool(_.set_stick_on_top),
                    null != _.set_mute && Object.hasOwnProperty.call(_, "set_mute") && O.uint32(40).bool(_.set_mute),
                    null != _.set_favorite && Object.hasOwnProperty.call(_, "set_favorite") && O.uint32(48).bool(_.set_favorite),
                    null != _.push_status && Object.hasOwnProperty.call(_, "push_status") && O.uint32(56).int32(_.push_status),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SetConversationSettingInfoRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.set_stick_on_top = _.bool();
                            break;
                        case 5:
                            j.set_mute = _.bool();
                            break;
                        case 6:
                            j.set_favorite = _.bool();
                            break;
                        case 7:
                            j.push_status = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.SetConversationSettingInfoResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.setting_info = null,
                _.prototype.status = 0,
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.extra_info = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.setting_info && Object.hasOwnProperty.call(_, "setting_info") && E.im_proto.ConversationSettingInfo.encode(_.setting_info, O.uint32(10).fork()).ldelim(),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(16).int32(_.status),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(24).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(34).string(_.check_message),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(42).string(_.extra_info),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SetConversationSettingInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.setting_info = E.im_proto.ConversationSettingInfo.decode(_, _.uint32());
                            break;
                        case 2:
                            j.status = _.int32();
                            break;
                        case 3:
                            j.check_code = _.int64();
                            break;
                        case 4:
                            j.check_message = _.string();
                            break;
                        case 5:
                            j.extra_info = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.UpsertConversationSettingExtInfoRequestBody = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(34).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.UpsertConversationSettingExtInfoRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_short_id = _.int64();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.UpsertConversationSettingExtInfoResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.setting_info = null,
                _.prototype.status = 0,
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.extra_info = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.setting_info && Object.hasOwnProperty.call(_, "setting_info") && E.im_proto.ConversationSettingInfo.encode(_.setting_info, O.uint32(10).fork()).ldelim(),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(16).int32(_.status),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(24).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(34).string(_.check_message),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(42).string(_.extra_info),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.UpsertConversationSettingExtInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.setting_info = E.im_proto.ConversationSettingInfo.decode(_, _.uint32());
                            break;
                        case 2:
                            j.status = _.int32();
                            break;
                        case 3:
                            j.check_code = _.int64();
                            break;
                        case 4:
                            j.check_message = _.string();
                            break;
                        case 5:
                            j.extra_info = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.StrangerConversation = function() {
                function _(_) {
                    if (this.participants = [],
                    this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.unread = 0,
                _.prototype.last_message = null,
                _.prototype.conversation_id = "",
                _.prototype.participants = T.emptyArray,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    null != _.unread && Object.hasOwnProperty.call(_, "unread") && O.uint32(16).int32(_.unread),
                    null != _.last_message && Object.hasOwnProperty.call(_, "last_message") && E.im_proto.MessageBody.encode(_.last_message, O.uint32(26).fork()).ldelim(),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(34).string(_.conversation_id),
                    null != _.participants && _.participants.length)
                        for (var P = 0; P < _.participants.length; ++P)
                            E.im_proto.Participant.encode(_.participants[P], O.uint32(42).fork()).ldelim();
                    if (null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var j = Object.keys(_.ext), P = 0; P < j.length; ++P)
                            O.uint32(58).fork().uint32(10).string(j[P]).uint32(18).string(_.ext[j[P]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.StrangerConversation; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_short_id = _.int64();
                            break;
                        case 2:
                            B.unread = _.int32();
                            break;
                        case 3:
                            B.last_message = E.im_proto.MessageBody.decode(_, _.uint32());
                            break;
                        case 4:
                            B.conversation_id = _.string();
                            break;
                        case 5:
                            B.participants && B.participants.length || (B.participants = []),
                            B.participants.push(E.im_proto.Participant.decode(_, _.uint32()));
                            break;
                        case 7:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.GetStrangerConversationListRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.count = T.Long ? T.Long.fromBits(50, 0, !1) : 50,
                _.prototype.show_total_unread = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(8).int64(_.cursor),
                    null != _.count && Object.hasOwnProperty.call(_, "count") && O.uint32(16).int64(_.count),
                    null != _.show_total_unread && Object.hasOwnProperty.call(_, "show_total_unread") && O.uint32(24).bool(_.show_total_unread),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetStrangerConversationListRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.cursor = _.int64();
                            break;
                        case 2:
                            j.count = _.int64();
                            break;
                        case 3:
                            j.show_total_unread = _.bool();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetStrangerConversationListResponseBody = function() {
                function _(_) {
                    if (this.conversation_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.has_more = !1,
                _.prototype.total_unread = 0,
                _.prototype.conversation_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(8).int64(_.next_cursor),
                    null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.total_unread && Object.hasOwnProperty.call(_, "total_unread") && O.uint32(24).int32(_.total_unread),
                    null != _.conversation_list && _.conversation_list.length)
                        for (var P = 0; P < _.conversation_list.length; ++P)
                            E.im_proto.StrangerConversation.encode(_.conversation_list[P], O.uint32(34).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetStrangerConversationListResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.next_cursor = _.int64();
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.total_unread = _.int32();
                            break;
                        case 4:
                            j.conversation_list && j.conversation_list.length || (j.conversation_list = []),
                            j.conversation_list.push(E.im_proto.StrangerConversation.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetStrangerMessagesRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.reset_unread_count = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    null != _.reset_unread_count && Object.hasOwnProperty.call(_, "reset_unread_count") && O.uint32(16).bool(_.reset_unread_count),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetStrangerMessagesRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.reset_unread_count = _.bool();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetStrangerMessagesResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(26).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetStrangerMessagesResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 3 ? (j.messages && j.messages.length || (j.messages = []),
                        j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.DeleteStrangerMessageRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(8).int64(_.server_message_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.DeleteStrangerMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.server_message_id = _.int64();
                            break;
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.DeleteStrangerConversationRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.DeleteStrangerConversationRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.conversation_short_id = _.int64() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.DeleteStrangerAllConversationRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.DeleteStrangerAllConversationRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.MarkStrangerConversationReadRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MarkStrangerConversationReadRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.conversation_short_id = _.int64() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.MarkStrangerAllConversationReadRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MarkStrangerAllConversationReadRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.OPERATION_TYPE = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "ADD_PROPERTY_ITEM"] = 0,
                O[_[1] = "REMOVE_PROPERTY_ITEM"] = 1,
                O[_[2] = "SET_PROPERTY"] = 2,
                O[_[3] = "DEL_PROPERTY"] = 3,
                O
            }(),
            _.ModifyPropertyContent = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.operation = 0,
                _.prototype.key = "",
                _.prototype.value = "",
                _.prototype.idempotent_id = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.operation && Object.hasOwnProperty.call(_, "operation") && O.uint32(8).int32(_.operation),
                    null != _.key && Object.hasOwnProperty.call(_, "key") && O.uint32(18).string(_.key),
                    null != _.value && Object.hasOwnProperty.call(_, "value") && O.uint32(26).string(_.value),
                    null != _.idempotent_id && Object.hasOwnProperty.call(_, "idempotent_id") && O.uint32(34).string(_.idempotent_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ModifyPropertyContent; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.operation = _.int32();
                            break;
                        case 2:
                            j.key = _.string();
                            break;
                        case 3:
                            j.value = _.string();
                            break;
                        case 4:
                            j.idempotent_id = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ModifyPropertyBody = function() {
                function _(_) {
                    if (this.modify_property_content = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.client_message_id = "",
                _.prototype.modify_property_content = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(32).int64(_.server_message_id),
                    null != _.client_message_id && Object.hasOwnProperty.call(_, "client_message_id") && O.uint32(42).string(_.client_message_id),
                    null != _.modify_property_content && _.modify_property_content.length)
                        for (var P = 0; P < _.modify_property_content.length; ++P)
                            E.im_proto.ModifyPropertyContent.encode(_.modify_property_content[P], O.uint32(50).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ModifyPropertyBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            j.server_message_id = _.int64();
                            break;
                        case 5:
                            j.client_message_id = _.string();
                            break;
                        case 6:
                            j.modify_property_content && j.modify_property_content.length || (j.modify_property_content = []),
                            j.modify_property_content.push(E.im_proto.ModifyPropertyContent.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ModifyMessagePropertyRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.property_list = null,
                _.prototype.ticket = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.property_list && Object.hasOwnProperty.call(_, "property_list") && E.im_proto.ModifyPropertyBody.encode(_.property_list, O.uint32(10).fork()).ldelim(),
                    null != _.ticket && Object.hasOwnProperty.call(_, "ticket") && O.uint32(18).string(_.ticket),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ModifyMessagePropertyRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.property_list = E.im_proto.ModifyPropertyBody.decode(_, _.uint32());
                            break;
                        case 2:
                            j.ticket = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ModifyMessagePropertyStatus = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "MODIFY_PROPERTY_SUCCESS"] = 0,
                O[_[1] = "MODIFY_PROPERTY_REPEAT_REQUEST"] = 1,
                O[_[2] = "MODIFY_PROPERTY_INVALID_LENGTH"] = 2,
                O[_[3] = "MODIFY_PROPERTY_INVALID_REQUEST"] = 3,
                O[_[4] = "MODIFY_PROPERTY_CALLBACK_ERROR"] = 4,
                O[_[500] = "MODIFY_PROPERTY_INTERNAL_ERROR"] = 500,
                O
            }(),
            _.ModifyMessagePropertyResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.status = 0,
                _.prototype.version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(8).int32(_.status),
                    null != _.version && Object.hasOwnProperty.call(_, "version") && O.uint32(16).int64(_.version),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ModifyMessagePropertyResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.status = _.int32();
                            break;
                        case 2:
                            j.version = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MediaType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "IMG"] = 1,
                O[_[2] = "VIDEO"] = 2,
                O[_[3] = "AUDIO"] = 3,
                O[_[4] = "FILE"] = 4,
                O[_[10] = "OTHER"] = 10,
                O
            }(),
            _.MediaTokenType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "VSDK"] = 1,
                O[_[2] = "IMAGEX"] = 2,
                O[_[3] = "VSDK_V5"] = 3,
                O[_[4] = "IMAGEX_V5"] = 4,
                O
            }(),
            _.GetUploadTokenRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.vsdk_version = "",
                _.prototype.token_type = 1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.vsdk_version && Object.hasOwnProperty.call(_, "vsdk_version") && O.uint32(10).string(_.vsdk_version),
                    null != _.token_type && Object.hasOwnProperty.call(_, "token_type") && O.uint32(16).int32(_.token_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetUploadTokenRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.vsdk_version = _.string();
                            break;
                        case 2:
                            j.token_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetUploadTokenResponseBody = function() {
                function _(_) {
                    if (this.hosts = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.access_key = "",
                _.prototype.hosts = T.emptyArray,
                _.prototype.token = "",
                _.prototype.token_type = 1,
                _.prototype.secret_access_key = "",
                _.prototype.space_name = "",
                _.prototype.service_id = "",
                _.prototype.expire_time = "",
                _.prototype.current_time = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.access_key && Object.hasOwnProperty.call(_, "access_key") && O.uint32(10).string(_.access_key),
                    null != _.hosts && _.hosts.length)
                        for (var P = 0; P < _.hosts.length; ++P)
                            O.uint32(18).string(_.hosts[P]);
                    return null != _.token && Object.hasOwnProperty.call(_, "token") && O.uint32(26).string(_.token),
                    null != _.token_type && Object.hasOwnProperty.call(_, "token_type") && O.uint32(32).int32(_.token_type),
                    null != _.secret_access_key && Object.hasOwnProperty.call(_, "secret_access_key") && O.uint32(42).string(_.secret_access_key),
                    null != _.space_name && Object.hasOwnProperty.call(_, "space_name") && O.uint32(50).string(_.space_name),
                    null != _.service_id && Object.hasOwnProperty.call(_, "service_id") && O.uint32(58).string(_.service_id),
                    null != _.expire_time && Object.hasOwnProperty.call(_, "expire_time") && O.uint32(66).string(_.expire_time),
                    null != _.current_time && Object.hasOwnProperty.call(_, "current_time") && O.uint32(74).string(_.current_time),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetUploadTokenResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.access_key = _.string();
                            break;
                        case 2:
                            j.hosts && j.hosts.length || (j.hosts = []),
                            j.hosts.push(_.string());
                            break;
                        case 3:
                            j.token = _.string();
                            break;
                        case 4:
                            j.token_type = _.int32();
                            break;
                        case 5:
                            j.secret_access_key = _.string();
                            break;
                        case 6:
                            j.space_name = _.string();
                            break;
                        case 7:
                            j.service_id = _.string();
                            break;
                        case 8:
                            j.expire_time = _.string();
                            break;
                        case 9:
                            j.current_time = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ImgOption = function() {
                function _(_) {
                    if (this.params = [],
                    this.urls = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tplv = "",
                _.prototype.params = T.emptyArray,
                _.prototype.format = "",
                _.prototype.urls = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.tplv && Object.hasOwnProperty.call(_, "tplv") && O.uint32(10).string(_.tplv),
                    null != _.params && _.params.length)
                        for (var P = 0; P < _.params.length; ++P)
                            O.uint32(18).string(_.params[P]);
                    if (null != _.format && Object.hasOwnProperty.call(_, "format") && O.uint32(26).string(_.format),
                    null != _.urls && _.urls.length)
                        for (var P = 0; P < _.urls.length; ++P)
                            O.uint32(802).string(_.urls[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ImgOption; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.tplv = _.string();
                            break;
                        case 2:
                            j.params && j.params.length || (j.params = []),
                            j.params.push(_.string());
                            break;
                        case 3:
                            j.format = _.string();
                            break;
                        case 100:
                            j.urls && j.urls.length || (j.urls = []),
                            j.urls.push(_.string());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.VideoOption = function() {
                function _(_) {
                    if (this.urls = [],
                    this.cover_urls = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.vid = "",
                _.prototype.cover_uri = "",
                _.prototype.urls = T.emptyArray,
                _.prototype.cover_urls = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.vid && Object.hasOwnProperty.call(_, "vid") && O.uint32(10).string(_.vid),
                    null != _.cover_uri && Object.hasOwnProperty.call(_, "cover_uri") && O.uint32(18).string(_.cover_uri),
                    null != _.urls && _.urls.length)
                        for (var P = 0; P < _.urls.length; ++P)
                            O.uint32(802).string(_.urls[P]);
                    if (null != _.cover_urls && _.cover_urls.length)
                        for (var P = 0; P < _.cover_urls.length; ++P)
                            O.uint32(810).string(_.cover_urls[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.VideoOption; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.vid = _.string();
                            break;
                        case 2:
                            j.cover_uri = _.string();
                            break;
                        case 100:
                            j.urls && j.urls.length || (j.urls = []),
                            j.urls.push(_.string());
                            break;
                        case 101:
                            j.cover_urls && j.cover_urls.length || (j.cover_urls = []),
                            j.cover_urls.push(_.string());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.AudioOption = function() {
                function _(_) {
                    if (this.urls = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.vid = "",
                _.prototype.urls = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.vid && Object.hasOwnProperty.call(_, "vid") && O.uint32(10).string(_.vid),
                    null != _.urls && _.urls.length)
                        for (var P = 0; P < _.urls.length; ++P)
                            O.uint32(802).string(_.urls[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.AudioOption; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.vid = _.string();
                            break;
                        case 100:
                            j.urls && j.urls.length || (j.urls = []),
                            j.urls.push(_.string());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.FileOption = function() {
                function _(_) {
                    if (this.urls = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.urls = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.urls && _.urls.length)
                        for (var P = 0; P < _.urls.length; ++P)
                            O.uint32(802).string(_.urls[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.FileOption; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 100 ? (j.urls && j.urls.length || (j.urls = []),
                        j.urls.push(_.string())) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ReadURLFrom = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "URL_VSDK"] = 1,
                O[_[2] = "URL_IMAGEX"] = 2,
                O
            }(),
            _.GetMediaUrlsRequestBody = function() {
                function _(_) {
                    if (this.img_options = [],
                    this.video_options = [],
                    this.audio_options = [],
                    this.file_options = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.source_appid = 0,
                _.prototype.uri = "",
                _.prototype.media_type = 0,
                _.prototype.encrypted = !1,
                _.prototype.img_options = T.emptyArray,
                _.prototype.video_options = T.emptyArray,
                _.prototype.audio_options = T.emptyArray,
                _.prototype.file_options = T.emptyArray,
                _.prototype.encrypted_uri = "",
                _.prototype.read_url_from = 1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.source_appid && Object.hasOwnProperty.call(_, "source_appid") && O.uint32(8).int32(_.source_appid),
                    null != _.uri && Object.hasOwnProperty.call(_, "uri") && O.uint32(18).string(_.uri),
                    null != _.media_type && Object.hasOwnProperty.call(_, "media_type") && O.uint32(24).int32(_.media_type),
                    null != _.encrypted && Object.hasOwnProperty.call(_, "encrypted") && O.uint32(32).bool(_.encrypted),
                    null != _.img_options && _.img_options.length)
                        for (var P = 0; P < _.img_options.length; ++P)
                            E.im_proto.ImgOption.encode(_.img_options[P], O.uint32(42).fork()).ldelim();
                    if (null != _.video_options && _.video_options.length)
                        for (var P = 0; P < _.video_options.length; ++P)
                            E.im_proto.VideoOption.encode(_.video_options[P], O.uint32(50).fork()).ldelim();
                    if (null != _.audio_options && _.audio_options.length)
                        for (var P = 0; P < _.audio_options.length; ++P)
                            E.im_proto.AudioOption.encode(_.audio_options[P], O.uint32(58).fork()).ldelim();
                    if (null != _.file_options && _.file_options.length)
                        for (var P = 0; P < _.file_options.length; ++P)
                            E.im_proto.FileOption.encode(_.file_options[P], O.uint32(66).fork()).ldelim();
                    return null != _.encrypted_uri && Object.hasOwnProperty.call(_, "encrypted_uri") && O.uint32(74).string(_.encrypted_uri),
                    null != _.read_url_from && Object.hasOwnProperty.call(_, "read_url_from") && O.uint32(80).int32(_.read_url_from),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetMediaUrlsRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.source_appid = _.int32();
                            break;
                        case 2:
                            j.uri = _.string();
                            break;
                        case 3:
                            j.media_type = _.int32();
                            break;
                        case 4:
                            j.encrypted = _.bool();
                            break;
                        case 5:
                            j.img_options && j.img_options.length || (j.img_options = []),
                            j.img_options.push(E.im_proto.ImgOption.decode(_, _.uint32()));
                            break;
                        case 6:
                            j.video_options && j.video_options.length || (j.video_options = []),
                            j.video_options.push(E.im_proto.VideoOption.decode(_, _.uint32()));
                            break;
                        case 7:
                            j.audio_options && j.audio_options.length || (j.audio_options = []),
                            j.audio_options.push(E.im_proto.AudioOption.decode(_, _.uint32()));
                            break;
                        case 8:
                            j.file_options && j.file_options.length || (j.file_options = []),
                            j.file_options.push(E.im_proto.FileOption.decode(_, _.uint32()));
                            break;
                        case 9:
                            j.encrypted_uri = _.string();
                            break;
                        case 10:
                            j.read_url_from = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetMediaUrlsResponseBody = function() {
                function _(_) {
                    if (this.img_options = [],
                    this.video_options = [],
                    this.audio_options = [],
                    this.file_options = [],
                    this.encrypted_urls = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.uri = "",
                _.prototype.media_type = 0,
                _.prototype.img_options = T.emptyArray,
                _.prototype.video_options = T.emptyArray,
                _.prototype.audio_options = T.emptyArray,
                _.prototype.file_options = T.emptyArray,
                _.prototype.encrypted_urls = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.uri && Object.hasOwnProperty.call(_, "uri") && O.uint32(10).string(_.uri),
                    null != _.media_type && Object.hasOwnProperty.call(_, "media_type") && O.uint32(16).int32(_.media_type),
                    null != _.img_options && _.img_options.length)
                        for (var P = 0; P < _.img_options.length; ++P)
                            E.im_proto.ImgOption.encode(_.img_options[P], O.uint32(26).fork()).ldelim();
                    if (null != _.video_options && _.video_options.length)
                        for (var P = 0; P < _.video_options.length; ++P)
                            E.im_proto.VideoOption.encode(_.video_options[P], O.uint32(34).fork()).ldelim();
                    if (null != _.audio_options && _.audio_options.length)
                        for (var P = 0; P < _.audio_options.length; ++P)
                            E.im_proto.AudioOption.encode(_.audio_options[P], O.uint32(42).fork()).ldelim();
                    if (null != _.file_options && _.file_options.length)
                        for (var P = 0; P < _.file_options.length; ++P)
                            E.im_proto.FileOption.encode(_.file_options[P], O.uint32(50).fork()).ldelim();
                    if (null != _.encrypted_urls && _.encrypted_urls.length)
                        for (var P = 0; P < _.encrypted_urls.length; ++P)
                            O.uint32(58).string(_.encrypted_urls[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetMediaUrlsResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.uri = _.string();
                            break;
                        case 2:
                            j.media_type = _.int32();
                            break;
                        case 3:
                            j.img_options && j.img_options.length || (j.img_options = []),
                            j.img_options.push(E.im_proto.ImgOption.decode(_, _.uint32()));
                            break;
                        case 4:
                            j.video_options && j.video_options.length || (j.video_options = []),
                            j.video_options.push(E.im_proto.VideoOption.decode(_, _.uint32()));
                            break;
                        case 5:
                            j.audio_options && j.audio_options.length || (j.audio_options = []),
                            j.audio_options.push(E.im_proto.AudioOption.decode(_, _.uint32()));
                            break;
                        case 6:
                            j.file_options && j.file_options.length || (j.file_options = []),
                            j.file_options.push(E.im_proto.FileOption.decode(_, _.uint32()));
                            break;
                        case 7:
                            j.encrypted_urls && j.encrypted_urls.length || (j.encrypted_urls = []),
                            j.encrypted_urls.push(_.string());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetTicketRequestBody = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.ticket_type = 1,
                _.prototype.conversation_type = 1,
                _.prototype.to_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.ticket_type && Object.hasOwnProperty.call(_, "ticket_type") && O.uint32(8).int32(_.ticket_type),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.to_id && Object.hasOwnProperty.call(_, "to_id") && O.uint32(32).int64(_.to_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(40).int64(_.conversation_short_id),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(82).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.GetTicketRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.ticket_type = _.int32();
                            break;
                        case 2:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.to_id = _.int64();
                            break;
                        case 5:
                            B.conversation_short_id = _.int64();
                            break;
                        case 10:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.GetTicketResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.ticket = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.ticket && Object.hasOwnProperty.call(_, "ticket") && O.uint32(10).string(_.ticket),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetTicketResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.ticket = _.string() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.SortType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[1] = "JOIN_TIME"] = 1,
                O[_[2] = "CREATED_TIME"] = 2,
                O[_[3] = "GROUP_NAME"] = 3,
                O[_[4] = "ACTIVE_TIME"] = 4,
                O
            }(),
            _.GetUserConversationListRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.sort_type = 1,
                _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.con_type = 1,
                _.prototype.limit = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.include_role = 0,
                _.prototype.exclude_role = 0,
                _.prototype.with_cold = !1,
                _.prototype.push_status = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.sort_type && Object.hasOwnProperty.call(_, "sort_type") && O.uint32(8).int32(_.sort_type),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(16).int64(_.cursor),
                    null != _.con_type && Object.hasOwnProperty.call(_, "con_type") && O.uint32(24).int32(_.con_type),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(32).int64(_.limit),
                    null != _.include_role && Object.hasOwnProperty.call(_, "include_role") && O.uint32(40).int32(_.include_role),
                    null != _.exclude_role && Object.hasOwnProperty.call(_, "exclude_role") && O.uint32(48).int32(_.exclude_role),
                    null != _.with_cold && Object.hasOwnProperty.call(_, "with_cold") && O.uint32(64).bool(_.with_cold),
                    null != _.push_status && Object.hasOwnProperty.call(_, "push_status") && O.uint32(80).int32(_.push_status),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetUserConversationListRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.sort_type = _.int32();
                            break;
                        case 2:
                            j.cursor = _.int64();
                            break;
                        case 3:
                            j.con_type = _.int32();
                            break;
                        case 4:
                            j.limit = _.int64();
                            break;
                        case 5:
                            j.include_role = _.int32();
                            break;
                        case 6:
                            j.exclude_role = _.int32();
                            break;
                        case 8:
                            j.with_cold = _.bool();
                            break;
                        case 10:
                            j.push_status = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetUserConversationListResponseBody = function() {
                function _(_) {
                    if (this.list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.list = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.list && _.list.length)
                        for (var P = 0; P < _.list.length; ++P)
                            E.im_proto.ConversationInfoV2.encode(_.list[P], O.uint32(10).fork()).ldelim();
                    return null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(24).int64(_.next_cursor),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetUserConversationListResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.list && j.list.length || (j.list = []),
                            j.list.push(E.im_proto.ConversationInfoV2.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cursor = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ModifyMessageExtRequestBody = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ticket = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.is_edited = !1,
                _.prototype.content = "",
                _.prototype.conversation_type = 0,
                _.prototype.message_type = 0,
                _.prototype.conversation_id = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.conversation_short_id),
                    O.uint32(16).int64(_.message_id),
                    O.uint32(26).string(_.ticket),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(34).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return null != _.is_edited && Object.hasOwnProperty.call(_, "is_edited") && O.uint32(40).bool(_.is_edited),
                    null != _.content && Object.hasOwnProperty.call(_, "content") && O.uint32(50).string(_.content),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(56).int32(_.conversation_type),
                    null != _.message_type && Object.hasOwnProperty.call(_, "message_type") && O.uint32(64).int32(_.message_type),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(74).string(_.conversation_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ModifyMessageExtRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_short_id = _.int64();
                            break;
                        case 2:
                            B.message_id = _.int64();
                            break;
                        case 3:
                            B.ticket = _.string();
                            break;
                        case 4:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 5:
                            B.is_edited = _.bool();
                            break;
                        case 6:
                            B.content = _.string();
                            break;
                        case 7:
                            B.conversation_type = _.int32();
                            break;
                        case 8:
                            B.message_type = _.int32();
                            break;
                        case 9:
                            B.conversation_id = _.string();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    if (!B.hasOwnProperty("conversation_short_id"))
                        throw T.ProtocolError("missing required 'conversation_short_id'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("message_id"))
                        throw T.ProtocolError("missing required 'message_id'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("ticket"))
                        throw T.ProtocolError("missing required 'ticket'", {
                            instance: B
                        });
                    return B
                }
                ,
                _
            }(),
            _.ModifyMessageExtResponseBody = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.ext = T.emptyObject,
                _.prototype.version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(10).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return null != _.version && Object.hasOwnProperty.call(_, "version") && O.uint32(16).int64(_.version),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ModifyMessageExtResponseBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 2:
                            B.version = _.int64();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.RequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.send_message_body = null,
                _.prototype.messages_per_user_body = null,
                _.prototype.messages_per_user_init_v2_body = null,
                _.prototype.get_message_by_id_body = null,
                _.prototype.messages_in_conversation_body = null,
                _.prototype.get_messages_checkinfo_in_conversation_body = null,
                _.prototype.send_user_action_body = null,
                _.prototype.send_input_status_body = null,
                _.prototype.delete_conversation_body = null,
                _.prototype.mark_conversation_read_body = null,
                _.prototype.conversation_participants_body = null,
                _.prototype.batch_mark_read_body = null,
                _.prototype.dissolve_conversation_body = null,
                _.prototype.create_conversation_v2_body = null,
                _.prototype.get_conversation_info_list_v2_body = null,
                _.prototype.get_conversation_info_list_by_favorite_v2_body = null,
                _.prototype.get_conversation_info_list_by_top_v2_body = null,
                _.prototype.conversation_add_participants_body = null,
                _.prototype.conversation_remove_participants_body = null,
                _.prototype.leave_conversation_body = null,
                _.prototype.mget_conversation_participants_body = null,
                _.prototype.update_conversation_participant_body = null,
                _.prototype.delete_message_body = null,
                _.prototype.recall_message_body = null,
                _.prototype.modify_message_property_body = null,
                _.prototype.audio_recognition_body = null,
                _.prototype.get_conversation_core_info_body = null,
                _.prototype.set_conversation_core_info_body = null,
                _.prototype.upsert_conversation_core_ext_info_body = null,
                _.prototype.set_conversation_setting_info_body = null,
                _.prototype.upsert_conversation_setting_ext_info_body = null,
                _.prototype.get_stranger_conversation_body = null,
                _.prototype.get_stranger_messages_body = null,
                _.prototype.delete_stranger_message_body = null,
                _.prototype.delete_stranger_conversation_body = null,
                _.prototype.delete_stranger_all_conversation_body = null,
                _.prototype.mark_stranger_conversation_read_body = null,
                _.prototype.mark_stranger_all_conversation_read_body = null,
                _.prototype.participants_read_index_body = null,
                _.prototype.participants_min_index_body = null,
                _.prototype.get_upload_token_body = null,
                _.prototype.get_media_urls_body = null,
                _.prototype.get_ticket_body = null,
                _.prototype.get_conversation_list_body = null,
                _.prototype.broadcast_send_message_body = null,
                _.prototype.broadcast_recv_message_body = null,
                _.prototype.broadcast_user_counter_body = null,
                _.prototype.client_ack_body = null,
                _.prototype.create_voip_body = null,
                _.prototype.call_voip_body = null,
                _.prototype.update_voip_body = null,
                _.prototype.channel_heartbeat_body = null,
                _.prototype.profile_get_info = null,
                _.prototype.report_client_metrics_body = null,
                _.prototype.get_configs_body = null,
                _.prototype.modify_message_ext_body = null,
                _.prototype.unread_count_report_body = null,
                _.prototype.block_members_body = null,
                _.prototype.block_conversation_body = null,
                _.prototype.get_unread_count_body = null,
                _.prototype.send_message_p2p_body = null,
                _.prototype.get_blocklist_body = null,
                _.prototype.set_blocklist_body = null,
                _.prototype.check_in_blocklist_body = null,
                _.prototype.mark_message_body = null,
                _.prototype.pull_mark_message_body = null,
                _.prototype.batch_get_conversation_participants_readindex = null,
                _.prototype.message_by_init = null,
                _.prototype.get_user_message = null,
                _.prototype.mark_msg_unread_count_report = null,
                _.prototype.mark_msg_get_unread_count = null,
                _.prototype.batch_unmark_message = null,
                _.prototype.client_batch_ack_body = null,
                _.prototype.get_tag_meta_info_body = null,
                _.prototype.set_conversation_tag_body = null,
                _.prototype.manage_tag_meta_info_body = null,
                _.prototype.get_conversations_by_tag_body = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.send_message_body && Object.hasOwnProperty.call(_, "send_message_body") && E.im_proto.SendMessageRequestBody.encode(_.send_message_body, O.uint32(802).fork()).ldelim(),
                    null != _.messages_per_user_body && Object.hasOwnProperty.call(_, "messages_per_user_body") && E.im_proto.MessagesPerUserRequestBody.encode(_.messages_per_user_body, O.uint32(1602).fork()).ldelim(),
                    null != _.messages_per_user_init_v2_body && Object.hasOwnProperty.call(_, "messages_per_user_init_v2_body") && E.im_proto.MessagesPerUserInitV2RequestBody.encode(_.messages_per_user_init_v2_body, O.uint32(1626).fork()).ldelim(),
                    null != _.get_message_by_id_body && Object.hasOwnProperty.call(_, "get_message_by_id_body") && E.im_proto.GetMessageByIdRequestBody.encode(_.get_message_by_id_body, O.uint32(1690).fork()).ldelim(),
                    null != _.messages_in_conversation_body && Object.hasOwnProperty.call(_, "messages_in_conversation_body") && E.im_proto.MessagesInConversationRequestBody.encode(_.messages_in_conversation_body, O.uint32(2410).fork()).ldelim(),
                    null != _.get_messages_checkinfo_in_conversation_body && Object.hasOwnProperty.call(_, "get_messages_checkinfo_in_conversation_body") && E.im_proto.GetMessagesCheckInfoInConversationRequestBody.encode(_.get_messages_checkinfo_in_conversation_body, O.uint32(2418).fork()).ldelim(),
                    null != _.send_user_action_body && Object.hasOwnProperty.call(_, "send_user_action_body") && E.im_proto.SendUserActionRequestBody.encode(_.send_user_action_body, O.uint32(3282).fork()).ldelim(),
                    null != _.send_input_status_body && Object.hasOwnProperty.call(_, "send_input_status_body") && E.im_proto.SendInputStatusRequestBody.encode(_.send_input_status_body, O.uint32(3290).fork()).ldelim(),
                    null != _.delete_conversation_body && Object.hasOwnProperty.call(_, "delete_conversation_body") && E.im_proto.DeleteConversationRequestBody.encode(_.delete_conversation_body, O.uint32(4826).fork()).ldelim(),
                    null != _.mark_conversation_read_body && Object.hasOwnProperty.call(_, "mark_conversation_read_body") && E.im_proto.MarkConversationReadRequestBody.encode(_.mark_conversation_read_body, O.uint32(4834).fork()).ldelim(),
                    null != _.conversation_participants_body && Object.hasOwnProperty.call(_, "conversation_participants_body") && E.im_proto.ConversationParticipantsListRequestBody.encode(_.conversation_participants_body, O.uint32(4842).fork()).ldelim(),
                    null != _.create_conversation_v2_body && Object.hasOwnProperty.call(_, "create_conversation_v2_body") && E.im_proto.CreateConversationV2RequestBody.encode(_.create_conversation_v2_body, O.uint32(4874).fork()).ldelim(),
                    null != _.get_conversation_info_list_v2_body && Object.hasOwnProperty.call(_, "get_conversation_info_list_v2_body") && E.im_proto.GetConversationInfoListV2RequestBody.encode(_.get_conversation_info_list_v2_body, O.uint32(4882).fork()).ldelim(),
                    null != _.get_conversation_info_list_by_favorite_v2_body && Object.hasOwnProperty.call(_, "get_conversation_info_list_by_favorite_v2_body") && E.im_proto.ConversationsPerUserByFavoriteV2RequestBody.encode(_.get_conversation_info_list_by_favorite_v2_body, O.uint32(4890).fork()).ldelim(),
                    null != _.get_conversation_info_list_by_top_v2_body && Object.hasOwnProperty.call(_, "get_conversation_info_list_by_top_v2_body") && E.im_proto.ConversationsPerUserByTopV2RequestBody.encode(_.get_conversation_info_list_by_top_v2_body, O.uint32(4898).fork()).ldelim(),
                    null != _.batch_mark_read_body && Object.hasOwnProperty.call(_, "batch_mark_read_body") && E.im_proto.BatchMarkConversationReadRequestBody.encode(_.batch_mark_read_body, O.uint32(4906).fork()).ldelim(),
                    null != _.dissolve_conversation_body && Object.hasOwnProperty.call(_, "dissolve_conversation_body") && E.im_proto.DissolveConversationRequestBody.encode(_.dissolve_conversation_body, O.uint32(4914).fork()).ldelim(),
                    null != _.conversation_add_participants_body && Object.hasOwnProperty.call(_, "conversation_add_participants_body") && E.im_proto.ConversationAddParticipantsRequestBody.encode(_.conversation_add_participants_body, O.uint32(5202).fork()).ldelim(),
                    null != _.conversation_remove_participants_body && Object.hasOwnProperty.call(_, "conversation_remove_participants_body") && E.im_proto.ConversationRemoveParticipantsRequestBody.encode(_.conversation_remove_participants_body, O.uint32(5210).fork()).ldelim(),
                    null != _.leave_conversation_body && Object.hasOwnProperty.call(_, "leave_conversation_body") && E.im_proto.ConversationLeaveRequestBody.encode(_.leave_conversation_body, O.uint32(5218).fork()).ldelim(),
                    null != _.mget_conversation_participants_body && Object.hasOwnProperty.call(_, "mget_conversation_participants_body") && E.im_proto.MgetConversationParticipantsRequestBody.encode(_.mget_conversation_participants_body, O.uint32(5234).fork()).ldelim(),
                    null != _.update_conversation_participant_body && Object.hasOwnProperty.call(_, "update_conversation_participant_body") && E.im_proto.UpdateConversationParticipantRequestBody.encode(_.update_conversation_participant_body, O.uint32(5242).fork()).ldelim(),
                    null != _.delete_message_body && Object.hasOwnProperty.call(_, "delete_message_body") && E.im_proto.DeleteMessageRequestBody.encode(_.delete_message_body, O.uint32(5610).fork()).ldelim(),
                    null != _.recall_message_body && Object.hasOwnProperty.call(_, "recall_message_body") && E.im_proto.RecallMessageRequestBody.encode(_.recall_message_body, O.uint32(5618).fork()).ldelim(),
                    null != _.modify_message_property_body && Object.hasOwnProperty.call(_, "modify_message_property_body") && E.im_proto.ModifyMessagePropertyRequestBody.encode(_.modify_message_property_body, O.uint32(5642).fork()).ldelim(),
                    null != _.get_conversation_core_info_body && Object.hasOwnProperty.call(_, "get_conversation_core_info_body") && E.im_proto.GetConversationCoreInfoRequestBody.encode(_.get_conversation_core_info_body, O.uint32(7210).fork()).ldelim(),
                    null != _.set_conversation_core_info_body && Object.hasOwnProperty.call(_, "set_conversation_core_info_body") && E.im_proto.SetConversationCoreInfoRequestBody.encode(_.set_conversation_core_info_body, O.uint32(7218).fork()).ldelim(),
                    null != _.upsert_conversation_core_ext_info_body && Object.hasOwnProperty.call(_, "upsert_conversation_core_ext_info_body") && E.im_proto.UpsertConversationCoreExtInfoRequestBody.encode(_.upsert_conversation_core_ext_info_body, O.uint32(7234).fork()).ldelim(),
                    null != _.set_conversation_setting_info_body && Object.hasOwnProperty.call(_, "set_conversation_setting_info_body") && E.im_proto.SetConversationSettingInfoRequestBody.encode(_.set_conversation_setting_info_body, O.uint32(7370).fork()).ldelim(),
                    null != _.upsert_conversation_setting_ext_info_body && Object.hasOwnProperty.call(_, "upsert_conversation_setting_ext_info_body") && E.im_proto.UpsertConversationSettingExtInfoRequestBody.encode(_.upsert_conversation_setting_ext_info_body, O.uint32(7378).fork()).ldelim(),
                    null != _.get_stranger_conversation_body && Object.hasOwnProperty.call(_, "get_stranger_conversation_body") && E.im_proto.GetStrangerConversationListRequestBody.encode(_.get_stranger_conversation_body, O.uint32(8002).fork()).ldelim(),
                    null != _.get_stranger_messages_body && Object.hasOwnProperty.call(_, "get_stranger_messages_body") && E.im_proto.GetStrangerMessagesRequestBody.encode(_.get_stranger_messages_body, O.uint32(8010).fork()).ldelim(),
                    null != _.delete_stranger_message_body && Object.hasOwnProperty.call(_, "delete_stranger_message_body") && E.im_proto.DeleteStrangerMessageRequestBody.encode(_.delete_stranger_message_body, O.uint32(8018).fork()).ldelim(),
                    null != _.delete_stranger_conversation_body && Object.hasOwnProperty.call(_, "delete_stranger_conversation_body") && E.im_proto.DeleteStrangerConversationRequestBody.encode(_.delete_stranger_conversation_body, O.uint32(8026).fork()).ldelim(),
                    null != _.delete_stranger_all_conversation_body && Object.hasOwnProperty.call(_, "delete_stranger_all_conversation_body") && E.im_proto.DeleteStrangerAllConversationRequestBody.encode(_.delete_stranger_all_conversation_body, O.uint32(8034).fork()).ldelim(),
                    null != _.mark_stranger_conversation_read_body && Object.hasOwnProperty.call(_, "mark_stranger_conversation_read_body") && E.im_proto.MarkStrangerConversationReadRequestBody.encode(_.mark_stranger_conversation_read_body, O.uint32(8042).fork()).ldelim(),
                    null != _.mark_stranger_all_conversation_read_body && Object.hasOwnProperty.call(_, "mark_stranger_all_conversation_read_body") && E.im_proto.MarkStrangerAllConversationReadRequestBody.encode(_.mark_stranger_all_conversation_read_body, O.uint32(8050).fork()).ldelim(),
                    null != _.participants_read_index_body && Object.hasOwnProperty.call(_, "participants_read_index_body") && E.im_proto.GetConversationParticipantsReadIndexV3RequestBody.encode(_.participants_read_index_body, O.uint32(16002).fork()).ldelim(),
                    null != _.participants_min_index_body && Object.hasOwnProperty.call(_, "participants_min_index_body") && E.im_proto.GetConversationParticipantsMinIndexV3RequestBody.encode(_.participants_min_index_body, O.uint32(16010).fork()).ldelim(),
                    null != _.get_upload_token_body && Object.hasOwnProperty.call(_, "get_upload_token_body") && E.im_proto.GetUploadTokenRequestBody.encode(_.get_upload_token_body, O.uint32(16026).fork()).ldelim(),
                    null != _.get_media_urls_body && Object.hasOwnProperty.call(_, "get_media_urls_body") && E.im_proto.GetMediaUrlsRequestBody.encode(_.get_media_urls_body, O.uint32(16034).fork()).ldelim(),
                    null != _.get_ticket_body && Object.hasOwnProperty.call(_, "get_ticket_body") && E.im_proto.GetTicketRequestBody.encode(_.get_ticket_body, O.uint32(16042).fork()).ldelim(),
                    null != _.get_conversation_list_body && Object.hasOwnProperty.call(_, "get_conversation_list_body") && E.im_proto.GetUserConversationListRequestBody.encode(_.get_conversation_list_body, O.uint32(16050).fork()).ldelim(),
                    null != _.broadcast_send_message_body && Object.hasOwnProperty.call(_, "broadcast_send_message_body") && E.im_proto.BroadcastSendMessageRequestBody.encode(_.broadcast_send_message_body, O.uint32(16058).fork()).ldelim(),
                    null != _.broadcast_recv_message_body && Object.hasOwnProperty.call(_, "broadcast_recv_message_body") && E.im_proto.BroadcastRecvMessageRequestBody.encode(_.broadcast_recv_message_body, O.uint32(16066).fork()).ldelim(),
                    null != _.broadcast_user_counter_body && Object.hasOwnProperty.call(_, "broadcast_user_counter_body") && E.im_proto.BroadcastUserCounterRequestBody.encode(_.broadcast_user_counter_body, O.uint32(16074).fork()).ldelim(),
                    null != _.client_ack_body && Object.hasOwnProperty.call(_, "client_ack_body") && E.im_proto.ClientACKRequestBody.encode(_.client_ack_body, O.uint32(16082).fork()).ldelim(),
                    null != _.create_voip_body && Object.hasOwnProperty.call(_, "create_voip_body") && E.im_proto.CreateVoipRequestBody.encode(_.create_voip_body, O.uint32(16090).fork()).ldelim(),
                    null != _.call_voip_body && Object.hasOwnProperty.call(_, "call_voip_body") && E.im_proto.CallVoipRequestBody.encode(_.call_voip_body, O.uint32(16098).fork()).ldelim(),
                    null != _.update_voip_body && Object.hasOwnProperty.call(_, "update_voip_body") && E.im_proto.UpdateVoipRequestBody.encode(_.update_voip_body, O.uint32(16106).fork()).ldelim(),
                    null != _.channel_heartbeat_body && Object.hasOwnProperty.call(_, "channel_heartbeat_body") && E.im_proto.ChannelHeartBeatRequestBody.encode(_.channel_heartbeat_body, O.uint32(16114).fork()).ldelim(),
                    null != _.profile_get_info && Object.hasOwnProperty.call(_, "profile_get_info") && E.im_proto.ProfileGetInfoRequestBody.encode(_.profile_get_info, O.uint32(16122).fork()).ldelim(),
                    null != _.report_client_metrics_body && Object.hasOwnProperty.call(_, "report_client_metrics_body") && E.im_proto.ReportClientMetricsRequestBody.encode(_.report_client_metrics_body, O.uint32(16130).fork()).ldelim(),
                    null != _.get_configs_body && Object.hasOwnProperty.call(_, "get_configs_body") && E.im_proto.GetConfigsRequestBody.encode(_.get_configs_body, O.uint32(16138).fork()).ldelim(),
                    null != _.unread_count_report_body && Object.hasOwnProperty.call(_, "unread_count_report_body") && E.im_proto.UnReadCountReportRequestBody.encode(_.unread_count_report_body, O.uint32(16146).fork()).ldelim(),
                    null != _.block_members_body && Object.hasOwnProperty.call(_, "block_members_body") && E.im_proto.BlockMembersRequestBody.encode(_.block_members_body, O.uint32(16154).fork()).ldelim(),
                    null != _.block_conversation_body && Object.hasOwnProperty.call(_, "block_conversation_body") && E.im_proto.BlockConversationRequestBody.encode(_.block_conversation_body, O.uint32(16162).fork()).ldelim(),
                    null != _.modify_message_ext_body && Object.hasOwnProperty.call(_, "modify_message_ext_body") && E.im_proto.ModifyMessageExtRequestBody.encode(_.modify_message_ext_body, O.uint32(16170).fork()).ldelim(),
                    null != _.get_unread_count_body && Object.hasOwnProperty.call(_, "get_unread_count_body") && E.im_proto.GetUnreadCountRequestBody.encode(_.get_unread_count_body, O.uint32(16242).fork()).ldelim(),
                    null != _.send_message_p2p_body && Object.hasOwnProperty.call(_, "send_message_p2p_body") && E.im_proto.SendMessageP2PRequestBody.encode(_.send_message_p2p_body, O.uint32(16250).fork()).ldelim(),
                    null != _.get_blocklist_body && Object.hasOwnProperty.call(_, "get_blocklist_body") && E.im_proto.GetBlockListRequestBody.encode(_.get_blocklist_body, O.uint32(16258).fork()).ldelim(),
                    null != _.set_blocklist_body && Object.hasOwnProperty.call(_, "set_blocklist_body") && E.im_proto.SetBlocklistRequestBody.encode(_.set_blocklist_body, O.uint32(16266).fork()).ldelim(),
                    null != _.check_in_blocklist_body && Object.hasOwnProperty.call(_, "check_in_blocklist_body") && E.im_proto.CheckInBlockListRequestBody.encode(_.check_in_blocklist_body, O.uint32(16274).fork()).ldelim(),
                    null != _.mark_message_body && Object.hasOwnProperty.call(_, "mark_message_body") && E.im_proto.MarkMessageRequestBody.encode(_.mark_message_body, O.uint32(16290).fork()).ldelim(),
                    null != _.pull_mark_message_body && Object.hasOwnProperty.call(_, "pull_mark_message_body") && E.im_proto.PullMarkMessageRequestBody.encode(_.pull_mark_message_body, O.uint32(16298).fork()).ldelim(),
                    null != _.batch_get_conversation_participants_readindex && Object.hasOwnProperty.call(_, "batch_get_conversation_participants_readindex") && E.im_proto.BatchGetConversationParticipantsReadIndexRequestBody.encode(_.batch_get_conversation_participants_readindex, O.uint32(16306).fork()).ldelim(),
                    null != _.message_by_init && Object.hasOwnProperty.call(_, "message_by_init") && E.im_proto.MessageByInitRequestBody.encode(_.message_by_init, O.uint32(16346).fork()).ldelim(),
                    null != _.get_user_message && Object.hasOwnProperty.call(_, "get_user_message") && E.im_proto.GetUserMessageRequestBody.encode(_.get_user_message, O.uint32(16386).fork()).ldelim(),
                    null != _.mark_msg_unread_count_report && Object.hasOwnProperty.call(_, "mark_msg_unread_count_report") && E.im_proto.MarkMsgUnreadCountReportRequestBody.encode(_.mark_msg_unread_count_report, O.uint32(16434).fork()).ldelim(),
                    null != _.mark_msg_get_unread_count && Object.hasOwnProperty.call(_, "mark_msg_get_unread_count") && E.im_proto.MarkMsgGetUnreadCountRequestBody.encode(_.mark_msg_get_unread_count, O.uint32(16442).fork()).ldelim(),
                    null != _.batch_unmark_message && Object.hasOwnProperty.call(_, "batch_unmark_message") && E.im_proto.BatchUnmarkMessageRequestBody.encode(_.batch_unmark_message, O.uint32(16450).fork()).ldelim(),
                    null != _.client_batch_ack_body && Object.hasOwnProperty.call(_, "client_batch_ack_body") && E.im_proto.ClientBatchACKRequestBody.encode(_.client_batch_ack_body, O.uint32(16458).fork()).ldelim(),
                    null != _.audio_recognition_body && Object.hasOwnProperty.call(_, "audio_recognition_body") && E.im_proto.AudioRecognitionRequestBody.encode(_.audio_recognition_body, O.uint32(16474).fork()).ldelim(),
                    null != _.get_tag_meta_info_body && Object.hasOwnProperty.call(_, "get_tag_meta_info_body") && E.im_proto.GetTagMetaInfoRequestBody.encode(_.get_tag_meta_info_body, O.uint32(17602).fork()).ldelim(),
                    null != _.set_conversation_tag_body && Object.hasOwnProperty.call(_, "set_conversation_tag_body") && E.im_proto.SetConversationTagRequestBody.encode(_.set_conversation_tag_body, O.uint32(17610).fork()).ldelim(),
                    null != _.manage_tag_meta_info_body && Object.hasOwnProperty.call(_, "manage_tag_meta_info_body") && E.im_proto.ManageTagMetaInfoRequestBody.encode(_.manage_tag_meta_info_body, O.uint32(17618).fork()).ldelim(),
                    null != _.get_conversations_by_tag_body && Object.hasOwnProperty.call(_, "get_conversations_by_tag_body") && E.im_proto.GetConversationsByTagRequestBody.encode(_.get_conversations_by_tag_body, O.uint32(17626).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.RequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 100:
                            j.send_message_body = E.im_proto.SendMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 200:
                            j.messages_per_user_body = E.im_proto.MessagesPerUserRequestBody.decode(_, _.uint32());
                            break;
                        case 203:
                            j.messages_per_user_init_v2_body = E.im_proto.MessagesPerUserInitV2RequestBody.decode(_, _.uint32());
                            break;
                        case 211:
                            j.get_message_by_id_body = E.im_proto.GetMessageByIdRequestBody.decode(_, _.uint32());
                            break;
                        case 301:
                            j.messages_in_conversation_body = E.im_proto.MessagesInConversationRequestBody.decode(_, _.uint32());
                            break;
                        case 302:
                            j.get_messages_checkinfo_in_conversation_body = E.im_proto.GetMessagesCheckInfoInConversationRequestBody.decode(_, _.uint32());
                            break;
                        case 410:
                            j.send_user_action_body = E.im_proto.SendUserActionRequestBody.decode(_, _.uint32());
                            break;
                        case 411:
                            j.send_input_status_body = E.im_proto.SendInputStatusRequestBody.decode(_, _.uint32());
                            break;
                        case 603:
                            j.delete_conversation_body = E.im_proto.DeleteConversationRequestBody.decode(_, _.uint32());
                            break;
                        case 604:
                            j.mark_conversation_read_body = E.im_proto.MarkConversationReadRequestBody.decode(_, _.uint32());
                            break;
                        case 605:
                            j.conversation_participants_body = E.im_proto.ConversationParticipantsListRequestBody.decode(_, _.uint32());
                            break;
                        case 613:
                            j.batch_mark_read_body = E.im_proto.BatchMarkConversationReadRequestBody.decode(_, _.uint32());
                            break;
                        case 614:
                            j.dissolve_conversation_body = E.im_proto.DissolveConversationRequestBody.decode(_, _.uint32());
                            break;
                        case 609:
                            j.create_conversation_v2_body = E.im_proto.CreateConversationV2RequestBody.decode(_, _.uint32());
                            break;
                        case 610:
                            j.get_conversation_info_list_v2_body = E.im_proto.GetConversationInfoListV2RequestBody.decode(_, _.uint32());
                            break;
                        case 611:
                            j.get_conversation_info_list_by_favorite_v2_body = E.im_proto.ConversationsPerUserByFavoriteV2RequestBody.decode(_, _.uint32());
                            break;
                        case 612:
                            j.get_conversation_info_list_by_top_v2_body = E.im_proto.ConversationsPerUserByTopV2RequestBody.decode(_, _.uint32());
                            break;
                        case 650:
                            j.conversation_add_participants_body = E.im_proto.ConversationAddParticipantsRequestBody.decode(_, _.uint32());
                            break;
                        case 651:
                            j.conversation_remove_participants_body = E.im_proto.ConversationRemoveParticipantsRequestBody.decode(_, _.uint32());
                            break;
                        case 652:
                            j.leave_conversation_body = E.im_proto.ConversationLeaveRequestBody.decode(_, _.uint32());
                            break;
                        case 654:
                            j.mget_conversation_participants_body = E.im_proto.MgetConversationParticipantsRequestBody.decode(_, _.uint32());
                            break;
                        case 655:
                            j.update_conversation_participant_body = E.im_proto.UpdateConversationParticipantRequestBody.decode(_, _.uint32());
                            break;
                        case 701:
                            j.delete_message_body = E.im_proto.DeleteMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 702:
                            j.recall_message_body = E.im_proto.RecallMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 705:
                            j.modify_message_property_body = E.im_proto.ModifyMessagePropertyRequestBody.decode(_, _.uint32());
                            break;
                        case 2059:
                            j.audio_recognition_body = E.im_proto.AudioRecognitionRequestBody.decode(_, _.uint32());
                            break;
                        case 901:
                            j.get_conversation_core_info_body = E.im_proto.GetConversationCoreInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 902:
                            j.set_conversation_core_info_body = E.im_proto.SetConversationCoreInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 904:
                            j.upsert_conversation_core_ext_info_body = E.im_proto.UpsertConversationCoreExtInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 921:
                            j.set_conversation_setting_info_body = E.im_proto.SetConversationSettingInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 922:
                            j.upsert_conversation_setting_ext_info_body = E.im_proto.UpsertConversationSettingExtInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 1e3:
                            j.get_stranger_conversation_body = E.im_proto.GetStrangerConversationListRequestBody.decode(_, _.uint32());
                            break;
                        case 1001:
                            j.get_stranger_messages_body = E.im_proto.GetStrangerMessagesRequestBody.decode(_, _.uint32());
                            break;
                        case 1002:
                            j.delete_stranger_message_body = E.im_proto.DeleteStrangerMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 1003:
                            j.delete_stranger_conversation_body = E.im_proto.DeleteStrangerConversationRequestBody.decode(_, _.uint32());
                            break;
                        case 1004:
                            j.delete_stranger_all_conversation_body = E.im_proto.DeleteStrangerAllConversationRequestBody.decode(_, _.uint32());
                            break;
                        case 1005:
                            j.mark_stranger_conversation_read_body = E.im_proto.MarkStrangerConversationReadRequestBody.decode(_, _.uint32());
                            break;
                        case 1006:
                            j.mark_stranger_all_conversation_read_body = E.im_proto.MarkStrangerAllConversationReadRequestBody.decode(_, _.uint32());
                            break;
                        case 2e3:
                            j.participants_read_index_body = E.im_proto.GetConversationParticipantsReadIndexV3RequestBody.decode(_, _.uint32());
                            break;
                        case 2001:
                            j.participants_min_index_body = E.im_proto.GetConversationParticipantsMinIndexV3RequestBody.decode(_, _.uint32());
                            break;
                        case 2003:
                            j.get_upload_token_body = E.im_proto.GetUploadTokenRequestBody.decode(_, _.uint32());
                            break;
                        case 2004:
                            j.get_media_urls_body = E.im_proto.GetMediaUrlsRequestBody.decode(_, _.uint32());
                            break;
                        case 2005:
                            j.get_ticket_body = E.im_proto.GetTicketRequestBody.decode(_, _.uint32());
                            break;
                        case 2006:
                            j.get_conversation_list_body = E.im_proto.GetUserConversationListRequestBody.decode(_, _.uint32());
                            break;
                        case 2007:
                            j.broadcast_send_message_body = E.im_proto.BroadcastSendMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 2008:
                            j.broadcast_recv_message_body = E.im_proto.BroadcastRecvMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 2009:
                            j.broadcast_user_counter_body = E.im_proto.BroadcastUserCounterRequestBody.decode(_, _.uint32());
                            break;
                        case 2010:
                            j.client_ack_body = E.im_proto.ClientACKRequestBody.decode(_, _.uint32());
                            break;
                        case 2011:
                            j.create_voip_body = E.im_proto.CreateVoipRequestBody.decode(_, _.uint32());
                            break;
                        case 2012:
                            j.call_voip_body = E.im_proto.CallVoipRequestBody.decode(_, _.uint32());
                            break;
                        case 2013:
                            j.update_voip_body = E.im_proto.UpdateVoipRequestBody.decode(_, _.uint32());
                            break;
                        case 2014:
                            j.channel_heartbeat_body = E.im_proto.ChannelHeartBeatRequestBody.decode(_, _.uint32());
                            break;
                        case 2015:
                            j.profile_get_info = E.im_proto.ProfileGetInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 2016:
                            j.report_client_metrics_body = E.im_proto.ReportClientMetricsRequestBody.decode(_, _.uint32());
                            break;
                        case 2017:
                            j.get_configs_body = E.im_proto.GetConfigsRequestBody.decode(_, _.uint32());
                            break;
                        case 2021:
                            j.modify_message_ext_body = E.im_proto.ModifyMessageExtRequestBody.decode(_, _.uint32());
                            break;
                        case 2018:
                            j.unread_count_report_body = E.im_proto.UnReadCountReportRequestBody.decode(_, _.uint32());
                            break;
                        case 2019:
                            j.block_members_body = E.im_proto.BlockMembersRequestBody.decode(_, _.uint32());
                            break;
                        case 2020:
                            j.block_conversation_body = E.im_proto.BlockConversationRequestBody.decode(_, _.uint32());
                            break;
                        case 2030:
                            j.get_unread_count_body = E.im_proto.GetUnreadCountRequestBody.decode(_, _.uint32());
                            break;
                        case 2031:
                            j.send_message_p2p_body = E.im_proto.SendMessageP2PRequestBody.decode(_, _.uint32());
                            break;
                        case 2032:
                            j.get_blocklist_body = E.im_proto.GetBlockListRequestBody.decode(_, _.uint32());
                            break;
                        case 2033:
                            j.set_blocklist_body = E.im_proto.SetBlocklistRequestBody.decode(_, _.uint32());
                            break;
                        case 2034:
                            j.check_in_blocklist_body = E.im_proto.CheckInBlockListRequestBody.decode(_, _.uint32());
                            break;
                        case 2036:
                            j.mark_message_body = E.im_proto.MarkMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 2037:
                            j.pull_mark_message_body = E.im_proto.PullMarkMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 2038:
                            j.batch_get_conversation_participants_readindex = E.im_proto.BatchGetConversationParticipantsReadIndexRequestBody.decode(_, _.uint32());
                            break;
                        case 2043:
                            j.message_by_init = E.im_proto.MessageByInitRequestBody.decode(_, _.uint32());
                            break;
                        case 2048:
                            j.get_user_message = E.im_proto.GetUserMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 2054:
                            j.mark_msg_unread_count_report = E.im_proto.MarkMsgUnreadCountReportRequestBody.decode(_, _.uint32());
                            break;
                        case 2055:
                            j.mark_msg_get_unread_count = E.im_proto.MarkMsgGetUnreadCountRequestBody.decode(_, _.uint32());
                            break;
                        case 2056:
                            j.batch_unmark_message = E.im_proto.BatchUnmarkMessageRequestBody.decode(_, _.uint32());
                            break;
                        case 2057:
                            j.client_batch_ack_body = E.im_proto.ClientBatchACKRequestBody.decode(_, _.uint32());
                            break;
                        case 2200:
                            j.get_tag_meta_info_body = E.im_proto.GetTagMetaInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 2201:
                            j.set_conversation_tag_body = E.im_proto.SetConversationTagRequestBody.decode(_, _.uint32());
                            break;
                        case 2202:
                            j.manage_tag_meta_info_body = E.im_proto.ManageTagMetaInfoRequestBody.decode(_, _.uint32());
                            break;
                        case 2203:
                            j.get_conversations_by_tag_body = E.im_proto.GetConversationsByTagRequestBody.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.Request = function() {
                function _(_) {
                    if (this.headers = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cmd = 0,
                _.prototype.sequence_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sdk_version = "",
                _.prototype.token = "",
                _.prototype.refer = 1,
                _.prototype.inbox_type = 0,
                _.prototype.build_number = "",
                _.prototype.body = null,
                _.prototype.device_id = "",
                _.prototype.channel = "",
                _.prototype.device_platform = "",
                _.prototype.device_type = "",
                _.prototype.os_version = "",
                _.prototype.version_code = "",
                _.prototype.headers = T.emptyObject,
                _.prototype.config_id = 0,
                _.prototype.token_info = null,
                _.prototype.auth_type = 0,
                _.prototype.biz = "",
                _.prototype.access = "",
                _.prototype.ts_sign = "",
                _.prototype.sdk_cert = "",
                _.prototype.reuqest_sign = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.cmd && Object.hasOwnProperty.call(_, "cmd") && O.uint32(8).int32(_.cmd),
                    null != _.sequence_id && Object.hasOwnProperty.call(_, "sequence_id") && O.uint32(16).int64(_.sequence_id),
                    null != _.sdk_version && Object.hasOwnProperty.call(_, "sdk_version") && O.uint32(26).string(_.sdk_version),
                    null != _.token && Object.hasOwnProperty.call(_, "token") && O.uint32(34).string(_.token),
                    null != _.refer && Object.hasOwnProperty.call(_, "refer") && O.uint32(40).int32(_.refer),
                    null != _.inbox_type && Object.hasOwnProperty.call(_, "inbox_type") && O.uint32(48).int32(_.inbox_type),
                    null != _.build_number && Object.hasOwnProperty.call(_, "build_number") && O.uint32(58).string(_.build_number),
                    null != _.body && Object.hasOwnProperty.call(_, "body") && E.im_proto.RequestBody.encode(_.body, O.uint32(66).fork()).ldelim(),
                    null != _.device_id && Object.hasOwnProperty.call(_, "device_id") && O.uint32(74).string(_.device_id),
                    null != _.channel && Object.hasOwnProperty.call(_, "channel") && O.uint32(82).string(_.channel),
                    null != _.device_platform && Object.hasOwnProperty.call(_, "device_platform") && O.uint32(90).string(_.device_platform),
                    null != _.device_type && Object.hasOwnProperty.call(_, "device_type") && O.uint32(98).string(_.device_type),
                    null != _.os_version && Object.hasOwnProperty.call(_, "os_version") && O.uint32(106).string(_.os_version),
                    null != _.version_code && Object.hasOwnProperty.call(_, "version_code") && O.uint32(114).string(_.version_code),
                    null != _.headers && Object.hasOwnProperty.call(_, "headers"))
                        for (var P = Object.keys(_.headers), j = 0; j < P.length; ++j)
                            O.uint32(122).fork().uint32(10).string(P[j]).uint32(18).string(_.headers[P[j]]).ldelim();
                    return null != _.config_id && Object.hasOwnProperty.call(_, "config_id") && O.uint32(128).int32(_.config_id),
                    null != _.token_info && Object.hasOwnProperty.call(_, "token_info") && E.im_proto.TokenInfo.encode(_.token_info, O.uint32(138).fork()).ldelim(),
                    null != _.auth_type && Object.hasOwnProperty.call(_, "auth_type") && O.uint32(144).int32(_.auth_type),
                    null != _.biz && Object.hasOwnProperty.call(_, "biz") && O.uint32(170).string(_.biz),
                    null != _.access && Object.hasOwnProperty.call(_, "access") && O.uint32(178).string(_.access),
                    null != _.ts_sign && Object.hasOwnProperty.call(_, "ts_sign") && O.uint32(186).string(_.ts_sign),
                    null != _.sdk_cert && Object.hasOwnProperty.call(_, "sdk_cert") && O.uint32(194).string(_.sdk_cert),
                    null != _.reuqest_sign && Object.hasOwnProperty.call(_, "reuqest_sign") && O.uint32(202).string(_.reuqest_sign),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.Request; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.cmd = _.int32();
                            break;
                        case 2:
                            B.sequence_id = _.int64();
                            break;
                        case 3:
                            B.sdk_version = _.string();
                            break;
                        case 4:
                            B.token = _.string();
                            break;
                        case 5:
                            B.refer = _.int32();
                            break;
                        case 6:
                            B.inbox_type = _.int32();
                            break;
                        case 7:
                            B.build_number = _.string();
                            break;
                        case 8:
                            B.body = E.im_proto.RequestBody.decode(_, _.uint32());
                            break;
                        case 9:
                            B.device_id = _.string();
                            break;
                        case 10:
                            B.channel = _.string();
                            break;
                        case 11:
                            B.device_platform = _.string();
                            break;
                        case 12:
                            B.device_type = _.string();
                            break;
                        case 13:
                            B.os_version = _.string();
                            break;
                        case 14:
                            B.version_code = _.string();
                            break;
                        case 15:
                            B.headers === T.emptyObject && (B.headers = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.headers[P] = j;
                            break;
                        case 16:
                            B.config_id = _.int32();
                            break;
                        case 17:
                            B.token_info = E.im_proto.TokenInfo.decode(_, _.uint32());
                            break;
                        case 18:
                            B.auth_type = _.int32();
                            break;
                        case 21:
                            B.biz = _.string();
                            break;
                        case 22:
                            B.access = _.string();
                            break;
                        case 23:
                            B.ts_sign = _.string();
                            break;
                        case 24:
                            B.sdk_cert = _.string();
                            break;
                        case 25:
                            B.reuqest_sign = _.string();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.AuthType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "UNKNOWN_AUTH"] = 0,
                O[_[1] = "SESSION_AUTH"] = 1,
                O[_[2] = "TOKEN_AUTH"] = 2,
                O[_[3] = "CERT_AUTH"] = 3,
                O[_[4] = "PASSPORT_CERT_AUTH"] = 4,
                O
            }(),
            _.TokenType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "DEFAULT_TOKEN"] = 0,
                O[_[1] = "APP_TOKEN"] = 1,
                O[_[2] = "SERVER_TOKEN"] = 2,
                O
            }(),
            _.TokenInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.mark_id = 0,
                _.prototype.type = 0,
                _.prototype.app_id = 0,
                _.prototype.user_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.timestamp = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.mark_id && Object.hasOwnProperty.call(_, "mark_id") && O.uint32(8).int32(_.mark_id),
                    null != _.type && Object.hasOwnProperty.call(_, "type") && O.uint32(16).int32(_.type),
                    null != _.app_id && Object.hasOwnProperty.call(_, "app_id") && O.uint32(24).int32(_.app_id),
                    null != _.user_id && Object.hasOwnProperty.call(_, "user_id") && O.uint32(32).int64(_.user_id),
                    null != _.timestamp && Object.hasOwnProperty.call(_, "timestamp") && O.uint32(40).int64(_.timestamp),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.TokenInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.mark_id = _.int32();
                            break;
                        case 2:
                            j.type = _.int32();
                            break;
                        case 3:
                            j.app_id = _.int32();
                            break;
                        case 4:
                            j.user_id = _.int64();
                            break;
                        case 5:
                            j.timestamp = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.SendType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "BY_CONVERSATION"] = 0,
                O[_[1] = "BY_USER"] = 1,
                O
            }(),
            _.NewP2PMessageNotify = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.send_type = 0,
                _.prototype.sender = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.sec_sender = "",
                _.prototype.conversation_id = "",
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.message_type = 0,
                _.prototype.content = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.create_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.send_type && Object.hasOwnProperty.call(_, "send_type") && O.uint32(8).int32(_.send_type),
                    null != _.sender && Object.hasOwnProperty.call(_, "sender") && O.uint32(16).int64(_.sender),
                    null != _.sec_sender && Object.hasOwnProperty.call(_, "sec_sender") && O.uint32(26).string(_.sec_sender),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(34).string(_.conversation_id),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(40).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(48).int32(_.conversation_type),
                    null != _.message_type && Object.hasOwnProperty.call(_, "message_type") && O.uint32(56).int32(_.message_type),
                    null != _.content && Object.hasOwnProperty.call(_, "content") && O.uint32(66).string(_.content),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(74).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return null != _.create_time && Object.hasOwnProperty.call(_, "create_time") && O.uint32(80).int64(_.create_time),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.NewP2PMessageNotify; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.send_type = _.int32();
                            break;
                        case 2:
                            B.sender = _.int64();
                            break;
                        case 3:
                            B.sec_sender = _.string();
                            break;
                        case 4:
                            B.conversation_id = _.string();
                            break;
                        case 5:
                            B.conversation_short_id = _.int64();
                            break;
                        case 6:
                            B.conversation_type = _.int32();
                            break;
                        case 7:
                            B.message_type = _.int32();
                            break;
                        case 8:
                            B.content = _.string();
                            break;
                        case 9:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 10:
                            B.create_time = _.int64();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.MessageInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.status = 0,
                _.prototype.body = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(8).int32(_.status),
                    null != _.body && Object.hasOwnProperty.call(_, "body") && E.im_proto.MessageBody.encode(_.body, O.uint32(18).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessageInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.status = _.int32();
                            break;
                        case 2:
                            j.body = E.im_proto.MessageBody.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetMessageByIdRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(32).int64(_.server_message_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetMessageByIdRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            j.server_message_id = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetMessageByIdResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.msg_info = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.msg_info && Object.hasOwnProperty.call(_, "msg_info") && E.im_proto.MessageInfo.encode(_.msg_info, O.uint32(10).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetMessageByIdResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.msg_info = E.im_proto.MessageInfo.decode(_, _.uint32()) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.send_message_body = null,
                _.prototype.messages_per_user_body = null,
                _.prototype.messages_per_user_init_v2_body = null,
                _.prototype.get_message_by_id_body = null,
                _.prototype.messages_in_conversation_body = null,
                _.prototype.get_messages_checkinfo_in_conversation_body = null,
                _.prototype.has_new_message_notify = null,
                _.prototype.has_new_p2p_message_notify = null,
                _.prototype.get_conversations_checkinfo_body = null,
                _.prototype.create_conversation_v2_body = null,
                _.prototype.get_conversation_info_list_v2_body = null,
                _.prototype.get_conversation_info_list_by_favorite_v2_body = null,
                _.prototype.get_conversation_info_list_by_top_v2_body = null,
                _.prototype.conversation_participants_body = null,
                _.prototype.conversation_add_participants_body = null,
                _.prototype.conversation_remove_participants_body = null,
                _.prototype.mget_conversation_participants_body = null,
                _.prototype.update_conversation_participant_body = null,
                _.prototype.modify_message_property_body = null,
                _.prototype.audio_recognition_body = null,
                _.prototype.get_conversation_core_info_body = null,
                _.prototype.set_conversation_core_info_body = null,
                _.prototype.upsert_conversation_core_ext_info_body = null,
                _.prototype.set_conversation_setting_info_body = null,
                _.prototype.upsert_conversation_setting_ext_info_body = null,
                _.prototype.get_stranger_conversation_body = null,
                _.prototype.get_stranger_messages_body = null,
                _.prototype.participants_read_index_body = null,
                _.prototype.participants_min_index_body = null,
                _.prototype.get_upload_token_body = null,
                _.prototype.get_media_urls_body = null,
                _.prototype.batch_get_conversation_participants_readindex = null,
                _.prototype.get_ticket_body = null,
                _.prototype.get_conversation_list_body = null,
                _.prototype.broadcast_send_message_body = null,
                _.prototype.broadcast_recv_message_body = null,
                _.prototype.broadcast_user_counter_body = null,
                _.prototype.create_voip_body = null,
                _.prototype.call_voip_body = null,
                _.prototype.update_voip_body = null,
                _.prototype.profile_get_info = null,
                _.prototype.get_configs_body = null,
                _.prototype.unread_count_report_body = null,
                _.prototype.block_members_body = null,
                _.prototype.modify_message_ext_body = null,
                _.prototype.get_unread_count_body = null,
                _.prototype.send_message_p2p_body = null,
                _.prototype.get_blocklist_body = null,
                _.prototype.set_blocklist_body = null,
                _.prototype.check_in_blocklist_body = null,
                _.prototype.mark_message_body = null,
                _.prototype.pull_mark_message_body = null,
                _.prototype.message_by_init = null,
                _.prototype.get_user_message = null,
                _.prototype.mark_msg_unread_count_report = null,
                _.prototype.mark_msg_get_unread_count = null,
                _.prototype.batch_unmark_message = null,
                _.prototype.get_tag_meta_info_body = null,
                _.prototype.set_conversation_tag_body = null,
                _.prototype.manage_tag_meta_info_body = null,
                _.prototype.get_conversations_by_tag_body = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.send_message_body && Object.hasOwnProperty.call(_, "send_message_body") && E.im_proto.SendMessageResponseBody.encode(_.send_message_body, O.uint32(802).fork()).ldelim(),
                    null != _.messages_per_user_body && Object.hasOwnProperty.call(_, "messages_per_user_body") && E.im_proto.MessagesPerUserResponseBody.encode(_.messages_per_user_body, O.uint32(1602).fork()).ldelim(),
                    null != _.messages_per_user_init_v2_body && Object.hasOwnProperty.call(_, "messages_per_user_init_v2_body") && E.im_proto.MessagesPerUserInitV2ResponseBody.encode(_.messages_per_user_init_v2_body, O.uint32(1626).fork()).ldelim(),
                    null != _.get_message_by_id_body && Object.hasOwnProperty.call(_, "get_message_by_id_body") && E.im_proto.GetMessageByIdResponseBody.encode(_.get_message_by_id_body, O.uint32(1690).fork()).ldelim(),
                    null != _.messages_in_conversation_body && Object.hasOwnProperty.call(_, "messages_in_conversation_body") && E.im_proto.MessagesInConversationResponseBody.encode(_.messages_in_conversation_body, O.uint32(2410).fork()).ldelim(),
                    null != _.get_messages_checkinfo_in_conversation_body && Object.hasOwnProperty.call(_, "get_messages_checkinfo_in_conversation_body") && E.im_proto.GetMessagesCheckInfoInConversationResponseBody.encode(_.get_messages_checkinfo_in_conversation_body, O.uint32(2418).fork()).ldelim(),
                    null != _.has_new_message_notify && Object.hasOwnProperty.call(_, "has_new_message_notify") && E.im_proto.NewMessageNotify.encode(_.has_new_message_notify, O.uint32(4002).fork()).ldelim(),
                    null != _.has_new_p2p_message_notify && Object.hasOwnProperty.call(_, "has_new_p2p_message_notify") && E.im_proto.NewP2PMessageNotify.encode(_.has_new_p2p_message_notify, O.uint32(4034).fork()).ldelim(),
                    null != _.conversation_participants_body && Object.hasOwnProperty.call(_, "conversation_participants_body") && E.im_proto.ConversationParticipantsListResponseBody.encode(_.conversation_participants_body, O.uint32(4842).fork()).ldelim(),
                    null != _.create_conversation_v2_body && Object.hasOwnProperty.call(_, "create_conversation_v2_body") && E.im_proto.CreateConversationV2ResponseBody.encode(_.create_conversation_v2_body, O.uint32(4874).fork()).ldelim(),
                    null != _.get_conversation_info_list_v2_body && Object.hasOwnProperty.call(_, "get_conversation_info_list_v2_body") && E.im_proto.GetConversationInfoListV2ResponseBody.encode(_.get_conversation_info_list_v2_body, O.uint32(4882).fork()).ldelim(),
                    null != _.get_conversation_info_list_by_favorite_v2_body && Object.hasOwnProperty.call(_, "get_conversation_info_list_by_favorite_v2_body") && E.im_proto.GetConversationInfoListByFavoriteV2ResponseBody.encode(_.get_conversation_info_list_by_favorite_v2_body, O.uint32(4890).fork()).ldelim(),
                    null != _.get_conversation_info_list_by_top_v2_body && Object.hasOwnProperty.call(_, "get_conversation_info_list_by_top_v2_body") && E.im_proto.GetConversationInfoListByTopV2ResponseBody.encode(_.get_conversation_info_list_by_top_v2_body, O.uint32(4898).fork()).ldelim(),
                    null != _.get_conversations_checkinfo_body && Object.hasOwnProperty.call(_, "get_conversations_checkinfo_body") && E.im_proto.GetConversationsCheckInfoResponseBody.encode(_.get_conversations_checkinfo_body, O.uint32(4922).fork()).ldelim(),
                    null != _.conversation_add_participants_body && Object.hasOwnProperty.call(_, "conversation_add_participants_body") && E.im_proto.ConversationAddParticipantsResponseBody.encode(_.conversation_add_participants_body, O.uint32(5202).fork()).ldelim(),
                    null != _.conversation_remove_participants_body && Object.hasOwnProperty.call(_, "conversation_remove_participants_body") && E.im_proto.ConversationRemoveParticipantsResponseBody.encode(_.conversation_remove_participants_body, O.uint32(5210).fork()).ldelim(),
                    null != _.mget_conversation_participants_body && Object.hasOwnProperty.call(_, "mget_conversation_participants_body") && E.im_proto.MgetConversationParticipantsResponseBody.encode(_.mget_conversation_participants_body, O.uint32(5234).fork()).ldelim(),
                    null != _.update_conversation_participant_body && Object.hasOwnProperty.call(_, "update_conversation_participant_body") && E.im_proto.UpdateConversationParticipantResponseBody.encode(_.update_conversation_participant_body, O.uint32(5242).fork()).ldelim(),
                    null != _.modify_message_property_body && Object.hasOwnProperty.call(_, "modify_message_property_body") && E.im_proto.ModifyMessagePropertyResponseBody.encode(_.modify_message_property_body, O.uint32(5642).fork()).ldelim(),
                    null != _.get_conversation_core_info_body && Object.hasOwnProperty.call(_, "get_conversation_core_info_body") && E.im_proto.GetConversationCoreInfoResponseBody.encode(_.get_conversation_core_info_body, O.uint32(7210).fork()).ldelim(),
                    null != _.set_conversation_core_info_body && Object.hasOwnProperty.call(_, "set_conversation_core_info_body") && E.im_proto.SetConversationCoreInfoResponseBody.encode(_.set_conversation_core_info_body, O.uint32(7218).fork()).ldelim(),
                    null != _.upsert_conversation_core_ext_info_body && Object.hasOwnProperty.call(_, "upsert_conversation_core_ext_info_body") && E.im_proto.UpsertConversationCoreExtInfoResponseBody.encode(_.upsert_conversation_core_ext_info_body, O.uint32(7234).fork()).ldelim(),
                    null != _.set_conversation_setting_info_body && Object.hasOwnProperty.call(_, "set_conversation_setting_info_body") && E.im_proto.SetConversationSettingInfoResponseBody.encode(_.set_conversation_setting_info_body, O.uint32(7370).fork()).ldelim(),
                    null != _.upsert_conversation_setting_ext_info_body && Object.hasOwnProperty.call(_, "upsert_conversation_setting_ext_info_body") && E.im_proto.UpsertConversationSettingExtInfoResponseBody.encode(_.upsert_conversation_setting_ext_info_body, O.uint32(7378).fork()).ldelim(),
                    null != _.get_stranger_conversation_body && Object.hasOwnProperty.call(_, "get_stranger_conversation_body") && E.im_proto.GetStrangerConversationListResponseBody.encode(_.get_stranger_conversation_body, O.uint32(8002).fork()).ldelim(),
                    null != _.get_stranger_messages_body && Object.hasOwnProperty.call(_, "get_stranger_messages_body") && E.im_proto.GetStrangerMessagesResponseBody.encode(_.get_stranger_messages_body, O.uint32(8010).fork()).ldelim(),
                    null != _.participants_read_index_body && Object.hasOwnProperty.call(_, "participants_read_index_body") && E.im_proto.GetConversationParticipantsReadIndexV3ResponseBody.encode(_.participants_read_index_body, O.uint32(16002).fork()).ldelim(),
                    null != _.participants_min_index_body && Object.hasOwnProperty.call(_, "participants_min_index_body") && E.im_proto.GetConversationParticipantsMinIndexV3ResponseBody.encode(_.participants_min_index_body, O.uint32(16010).fork()).ldelim(),
                    null != _.get_upload_token_body && Object.hasOwnProperty.call(_, "get_upload_token_body") && E.im_proto.GetUploadTokenResponseBody.encode(_.get_upload_token_body, O.uint32(16026).fork()).ldelim(),
                    null != _.get_media_urls_body && Object.hasOwnProperty.call(_, "get_media_urls_body") && E.im_proto.GetMediaUrlsResponseBody.encode(_.get_media_urls_body, O.uint32(16034).fork()).ldelim(),
                    null != _.get_ticket_body && Object.hasOwnProperty.call(_, "get_ticket_body") && E.im_proto.GetTicketResponseBody.encode(_.get_ticket_body, O.uint32(16042).fork()).ldelim(),
                    null != _.get_conversation_list_body && Object.hasOwnProperty.call(_, "get_conversation_list_body") && E.im_proto.GetUserConversationListResponseBody.encode(_.get_conversation_list_body, O.uint32(16050).fork()).ldelim(),
                    null != _.broadcast_send_message_body && Object.hasOwnProperty.call(_, "broadcast_send_message_body") && E.im_proto.BroadcastSendMessageResponseBody.encode(_.broadcast_send_message_body, O.uint32(16058).fork()).ldelim(),
                    null != _.broadcast_recv_message_body && Object.hasOwnProperty.call(_, "broadcast_recv_message_body") && E.im_proto.BroadcastRecvMessageResponseBody.encode(_.broadcast_recv_message_body, O.uint32(16066).fork()).ldelim(),
                    null != _.broadcast_user_counter_body && Object.hasOwnProperty.call(_, "broadcast_user_counter_body") && E.im_proto.BroadcastUserCounterResponseBody.encode(_.broadcast_user_counter_body, O.uint32(16074).fork()).ldelim(),
                    null != _.create_voip_body && Object.hasOwnProperty.call(_, "create_voip_body") && E.im_proto.CreateVoipResponseBody.encode(_.create_voip_body, O.uint32(16090).fork()).ldelim(),
                    null != _.call_voip_body && Object.hasOwnProperty.call(_, "call_voip_body") && E.im_proto.CallVoipResponseBody.encode(_.call_voip_body, O.uint32(16098).fork()).ldelim(),
                    null != _.update_voip_body && Object.hasOwnProperty.call(_, "update_voip_body") && E.im_proto.UpdateVoipResponseBody.encode(_.update_voip_body, O.uint32(16106).fork()).ldelim(),
                    null != _.profile_get_info && Object.hasOwnProperty.call(_, "profile_get_info") && E.im_proto.ProfileGetInfoResponseBody.encode(_.profile_get_info, O.uint32(16122).fork()).ldelim(),
                    null != _.get_configs_body && Object.hasOwnProperty.call(_, "get_configs_body") && E.im_proto.GetConfigsResponseBody.encode(_.get_configs_body, O.uint32(16138).fork()).ldelim(),
                    null != _.unread_count_report_body && Object.hasOwnProperty.call(_, "unread_count_report_body") && E.im_proto.UnReadCountReportResponseBody.encode(_.unread_count_report_body, O.uint32(16146).fork()).ldelim(),
                    null != _.block_members_body && Object.hasOwnProperty.call(_, "block_members_body") && E.im_proto.BlockMembersResponseBody.encode(_.block_members_body, O.uint32(16154).fork()).ldelim(),
                    null != _.modify_message_ext_body && Object.hasOwnProperty.call(_, "modify_message_ext_body") && E.im_proto.ModifyMessageExtResponseBody.encode(_.modify_message_ext_body, O.uint32(16170).fork()).ldelim(),
                    null != _.get_unread_count_body && Object.hasOwnProperty.call(_, "get_unread_count_body") && E.im_proto.GetUnreadCountResponseBody.encode(_.get_unread_count_body, O.uint32(16242).fork()).ldelim(),
                    null != _.send_message_p2p_body && Object.hasOwnProperty.call(_, "send_message_p2p_body") && E.im_proto.SendMessageP2PResponseBody.encode(_.send_message_p2p_body, O.uint32(16250).fork()).ldelim(),
                    null != _.get_blocklist_body && Object.hasOwnProperty.call(_, "get_blocklist_body") && E.im_proto.GetBlockListResponseBody.encode(_.get_blocklist_body, O.uint32(16258).fork()).ldelim(),
                    null != _.set_blocklist_body && Object.hasOwnProperty.call(_, "set_blocklist_body") && E.im_proto.SetBlocklistResponseBody.encode(_.set_blocklist_body, O.uint32(16266).fork()).ldelim(),
                    null != _.check_in_blocklist_body && Object.hasOwnProperty.call(_, "check_in_blocklist_body") && E.im_proto.CheckInBlockListResponseBody.encode(_.check_in_blocklist_body, O.uint32(16274).fork()).ldelim(),
                    null != _.mark_message_body && Object.hasOwnProperty.call(_, "mark_message_body") && E.im_proto.MarkMessageResponseBody.encode(_.mark_message_body, O.uint32(16290).fork()).ldelim(),
                    null != _.pull_mark_message_body && Object.hasOwnProperty.call(_, "pull_mark_message_body") && E.im_proto.PullMarkMessageResponseBody.encode(_.pull_mark_message_body, O.uint32(16298).fork()).ldelim(),
                    null != _.batch_get_conversation_participants_readindex && Object.hasOwnProperty.call(_, "batch_get_conversation_participants_readindex") && E.im_proto.BatchGetConversationParticipantsReadIndexResponseBody.encode(_.batch_get_conversation_participants_readindex, O.uint32(16306).fork()).ldelim(),
                    null != _.message_by_init && Object.hasOwnProperty.call(_, "message_by_init") && E.im_proto.MessageByInitResponseBody.encode(_.message_by_init, O.uint32(16346).fork()).ldelim(),
                    null != _.get_user_message && Object.hasOwnProperty.call(_, "get_user_message") && E.im_proto.GetUserMessageResponseBody.encode(_.get_user_message, O.uint32(16386).fork()).ldelim(),
                    null != _.mark_msg_unread_count_report && Object.hasOwnProperty.call(_, "mark_msg_unread_count_report") && E.im_proto.MarkMsgUnreadCountReportResponseBody.encode(_.mark_msg_unread_count_report, O.uint32(16434).fork()).ldelim(),
                    null != _.mark_msg_get_unread_count && Object.hasOwnProperty.call(_, "mark_msg_get_unread_count") && E.im_proto.MarkMsgGetUnreadCountResponseBody.encode(_.mark_msg_get_unread_count, O.uint32(16442).fork()).ldelim(),
                    null != _.batch_unmark_message && Object.hasOwnProperty.call(_, "batch_unmark_message") && E.im_proto.BatchUnmarkMessageResponseBody.encode(_.batch_unmark_message, O.uint32(16450).fork()).ldelim(),
                    null != _.audio_recognition_body && Object.hasOwnProperty.call(_, "audio_recognition_body") && E.im_proto.AudioRecognitionResponseBody.encode(_.audio_recognition_body, O.uint32(16474).fork()).ldelim(),
                    null != _.get_tag_meta_info_body && Object.hasOwnProperty.call(_, "get_tag_meta_info_body") && E.im_proto.GetTagMetaInfoResponseBody.encode(_.get_tag_meta_info_body, O.uint32(17602).fork()).ldelim(),
                    null != _.set_conversation_tag_body && Object.hasOwnProperty.call(_, "set_conversation_tag_body") && E.im_proto.SetConversationTagResponseBody.encode(_.set_conversation_tag_body, O.uint32(17610).fork()).ldelim(),
                    null != _.manage_tag_meta_info_body && Object.hasOwnProperty.call(_, "manage_tag_meta_info_body") && E.im_proto.ManageTagMetaInfoResponseBody.encode(_.manage_tag_meta_info_body, O.uint32(17618).fork()).ldelim(),
                    null != _.get_conversations_by_tag_body && Object.hasOwnProperty.call(_, "get_conversations_by_tag_body") && E.im_proto.GetConversationsByTagResponseBody.encode(_.get_conversations_by_tag_body, O.uint32(17626).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 100:
                            j.send_message_body = E.im_proto.SendMessageResponseBody.decode(_, _.uint32());
                            break;
                        case 200:
                            j.messages_per_user_body = E.im_proto.MessagesPerUserResponseBody.decode(_, _.uint32());
                            break;
                        case 203:
                            j.messages_per_user_init_v2_body = E.im_proto.MessagesPerUserInitV2ResponseBody.decode(_, _.uint32());
                            break;
                        case 211:
                            j.get_message_by_id_body = E.im_proto.GetMessageByIdResponseBody.decode(_, _.uint32());
                            break;
                        case 301:
                            j.messages_in_conversation_body = E.im_proto.MessagesInConversationResponseBody.decode(_, _.uint32());
                            break;
                        case 302:
                            j.get_messages_checkinfo_in_conversation_body = E.im_proto.GetMessagesCheckInfoInConversationResponseBody.decode(_, _.uint32());
                            break;
                        case 500:
                            j.has_new_message_notify = E.im_proto.NewMessageNotify.decode(_, _.uint32());
                            break;
                        case 504:
                            j.has_new_p2p_message_notify = E.im_proto.NewP2PMessageNotify.decode(_, _.uint32());
                            break;
                        case 615:
                            j.get_conversations_checkinfo_body = E.im_proto.GetConversationsCheckInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 609:
                            j.create_conversation_v2_body = E.im_proto.CreateConversationV2ResponseBody.decode(_, _.uint32());
                            break;
                        case 610:
                            j.get_conversation_info_list_v2_body = E.im_proto.GetConversationInfoListV2ResponseBody.decode(_, _.uint32());
                            break;
                        case 611:
                            j.get_conversation_info_list_by_favorite_v2_body = E.im_proto.GetConversationInfoListByFavoriteV2ResponseBody.decode(_, _.uint32());
                            break;
                        case 612:
                            j.get_conversation_info_list_by_top_v2_body = E.im_proto.GetConversationInfoListByTopV2ResponseBody.decode(_, _.uint32());
                            break;
                        case 605:
                            j.conversation_participants_body = E.im_proto.ConversationParticipantsListResponseBody.decode(_, _.uint32());
                            break;
                        case 650:
                            j.conversation_add_participants_body = E.im_proto.ConversationAddParticipantsResponseBody.decode(_, _.uint32());
                            break;
                        case 651:
                            j.conversation_remove_participants_body = E.im_proto.ConversationRemoveParticipantsResponseBody.decode(_, _.uint32());
                            break;
                        case 654:
                            j.mget_conversation_participants_body = E.im_proto.MgetConversationParticipantsResponseBody.decode(_, _.uint32());
                            break;
                        case 655:
                            j.update_conversation_participant_body = E.im_proto.UpdateConversationParticipantResponseBody.decode(_, _.uint32());
                            break;
                        case 705:
                            j.modify_message_property_body = E.im_proto.ModifyMessagePropertyResponseBody.decode(_, _.uint32());
                            break;
                        case 2059:
                            j.audio_recognition_body = E.im_proto.AudioRecognitionResponseBody.decode(_, _.uint32());
                            break;
                        case 901:
                            j.get_conversation_core_info_body = E.im_proto.GetConversationCoreInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 902:
                            j.set_conversation_core_info_body = E.im_proto.SetConversationCoreInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 904:
                            j.upsert_conversation_core_ext_info_body = E.im_proto.UpsertConversationCoreExtInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 921:
                            j.set_conversation_setting_info_body = E.im_proto.SetConversationSettingInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 922:
                            j.upsert_conversation_setting_ext_info_body = E.im_proto.UpsertConversationSettingExtInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 1e3:
                            j.get_stranger_conversation_body = E.im_proto.GetStrangerConversationListResponseBody.decode(_, _.uint32());
                            break;
                        case 1001:
                            j.get_stranger_messages_body = E.im_proto.GetStrangerMessagesResponseBody.decode(_, _.uint32());
                            break;
                        case 2e3:
                            j.participants_read_index_body = E.im_proto.GetConversationParticipantsReadIndexV3ResponseBody.decode(_, _.uint32());
                            break;
                        case 2001:
                            j.participants_min_index_body = E.im_proto.GetConversationParticipantsMinIndexV3ResponseBody.decode(_, _.uint32());
                            break;
                        case 2003:
                            j.get_upload_token_body = E.im_proto.GetUploadTokenResponseBody.decode(_, _.uint32());
                            break;
                        case 2004:
                            j.get_media_urls_body = E.im_proto.GetMediaUrlsResponseBody.decode(_, _.uint32());
                            break;
                        case 2038:
                            j.batch_get_conversation_participants_readindex = E.im_proto.BatchGetConversationParticipantsReadIndexResponseBody.decode(_, _.uint32());
                            break;
                        case 2005:
                            j.get_ticket_body = E.im_proto.GetTicketResponseBody.decode(_, _.uint32());
                            break;
                        case 2006:
                            j.get_conversation_list_body = E.im_proto.GetUserConversationListResponseBody.decode(_, _.uint32());
                            break;
                        case 2007:
                            j.broadcast_send_message_body = E.im_proto.BroadcastSendMessageResponseBody.decode(_, _.uint32());
                            break;
                        case 2008:
                            j.broadcast_recv_message_body = E.im_proto.BroadcastRecvMessageResponseBody.decode(_, _.uint32());
                            break;
                        case 2009:
                            j.broadcast_user_counter_body = E.im_proto.BroadcastUserCounterResponseBody.decode(_, _.uint32());
                            break;
                        case 2011:
                            j.create_voip_body = E.im_proto.CreateVoipResponseBody.decode(_, _.uint32());
                            break;
                        case 2012:
                            j.call_voip_body = E.im_proto.CallVoipResponseBody.decode(_, _.uint32());
                            break;
                        case 2013:
                            j.update_voip_body = E.im_proto.UpdateVoipResponseBody.decode(_, _.uint32());
                            break;
                        case 2015:
                            j.profile_get_info = E.im_proto.ProfileGetInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 2017:
                            j.get_configs_body = E.im_proto.GetConfigsResponseBody.decode(_, _.uint32());
                            break;
                        case 2018:
                            j.unread_count_report_body = E.im_proto.UnReadCountReportResponseBody.decode(_, _.uint32());
                            break;
                        case 2019:
                            j.block_members_body = E.im_proto.BlockMembersResponseBody.decode(_, _.uint32());
                            break;
                        case 2021:
                            j.modify_message_ext_body = E.im_proto.ModifyMessageExtResponseBody.decode(_, _.uint32());
                            break;
                        case 2030:
                            j.get_unread_count_body = E.im_proto.GetUnreadCountResponseBody.decode(_, _.uint32());
                            break;
                        case 2031:
                            j.send_message_p2p_body = E.im_proto.SendMessageP2PResponseBody.decode(_, _.uint32());
                            break;
                        case 2032:
                            j.get_blocklist_body = E.im_proto.GetBlockListResponseBody.decode(_, _.uint32());
                            break;
                        case 2033:
                            j.set_blocklist_body = E.im_proto.SetBlocklistResponseBody.decode(_, _.uint32());
                            break;
                        case 2034:
                            j.check_in_blocklist_body = E.im_proto.CheckInBlockListResponseBody.decode(_, _.uint32());
                            break;
                        case 2036:
                            j.mark_message_body = E.im_proto.MarkMessageResponseBody.decode(_, _.uint32());
                            break;
                        case 2037:
                            j.pull_mark_message_body = E.im_proto.PullMarkMessageResponseBody.decode(_, _.uint32());
                            break;
                        case 2043:
                            j.message_by_init = E.im_proto.MessageByInitResponseBody.decode(_, _.uint32());
                            break;
                        case 2048:
                            j.get_user_message = E.im_proto.GetUserMessageResponseBody.decode(_, _.uint32());
                            break;
                        case 2054:
                            j.mark_msg_unread_count_report = E.im_proto.MarkMsgUnreadCountReportResponseBody.decode(_, _.uint32());
                            break;
                        case 2055:
                            j.mark_msg_get_unread_count = E.im_proto.MarkMsgGetUnreadCountResponseBody.decode(_, _.uint32());
                            break;
                        case 2056:
                            j.batch_unmark_message = E.im_proto.BatchUnmarkMessageResponseBody.decode(_, _.uint32());
                            break;
                        case 2200:
                            j.get_tag_meta_info_body = E.im_proto.GetTagMetaInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 2201:
                            j.set_conversation_tag_body = E.im_proto.SetConversationTagResponseBody.decode(_, _.uint32());
                            break;
                        case 2202:
                            j.manage_tag_meta_info_body = E.im_proto.ManageTagMetaInfoResponseBody.decode(_, _.uint32());
                            break;
                        case 2203:
                            j.get_conversations_by_tag_body = E.im_proto.GetConversationsByTagResponseBody.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.Response = function() {
                function _(_) {
                    if (this.headers = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cmd = 0,
                _.prototype.sequence_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.status_code = 0,
                _.prototype.error_desc = "",
                _.prototype.inbox_type = 0,
                _.prototype.body = null,
                _.prototype.log_id = "",
                _.prototype.headers = T.emptyObject,
                _.prototype.start_time_stamp = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.request_arrived_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_execution_end_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.cmd && Object.hasOwnProperty.call(_, "cmd") && O.uint32(8).int32(_.cmd),
                    null != _.sequence_id && Object.hasOwnProperty.call(_, "sequence_id") && O.uint32(16).int64(_.sequence_id),
                    null != _.status_code && Object.hasOwnProperty.call(_, "status_code") && O.uint32(24).int32(_.status_code),
                    null != _.error_desc && Object.hasOwnProperty.call(_, "error_desc") && O.uint32(34).string(_.error_desc),
                    null != _.inbox_type && Object.hasOwnProperty.call(_, "inbox_type") && O.uint32(40).int32(_.inbox_type),
                    null != _.body && Object.hasOwnProperty.call(_, "body") && E.im_proto.ResponseBody.encode(_.body, O.uint32(50).fork()).ldelim(),
                    null != _.log_id && Object.hasOwnProperty.call(_, "log_id") && O.uint32(58).string(_.log_id),
                    null != _.headers && Object.hasOwnProperty.call(_, "headers"))
                        for (var P = Object.keys(_.headers), j = 0; j < P.length; ++j)
                            O.uint32(66).fork().uint32(10).string(P[j]).uint32(18).string(_.headers[P[j]]).ldelim();
                    return null != _.start_time_stamp && Object.hasOwnProperty.call(_, "start_time_stamp") && O.uint32(72).int64(_.start_time_stamp),
                    null != _.request_arrived_time && Object.hasOwnProperty.call(_, "request_arrived_time") && O.uint32(80).int64(_.request_arrived_time),
                    null != _.server_execution_end_time && Object.hasOwnProperty.call(_, "server_execution_end_time") && O.uint32(88).int64(_.server_execution_end_time),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.Response; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.cmd = _.int32();
                            break;
                        case 2:
                            B.sequence_id = _.int64();
                            break;
                        case 3:
                            B.status_code = _.int32();
                            break;
                        case 4:
                            B.error_desc = _.string();
                            break;
                        case 5:
                            B.inbox_type = _.int32();
                            break;
                        case 6:
                            B.body = E.im_proto.ResponseBody.decode(_, _.uint32());
                            break;
                        case 7:
                            B.log_id = _.string();
                            break;
                        case 8:
                            B.headers === T.emptyObject && (B.headers = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.headers[P] = j;
                            break;
                        case 9:
                            B.start_time_stamp = _.int64();
                            break;
                        case 10:
                            B.request_arrived_time = _.int64();
                            break;
                        case 11:
                            B.server_execution_end_time = _.int64();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.BroadcastSendMessageRequestBody = function() {
                function _(_) {
                    if (this.ext = {},
                    this.mentioned_users = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.content = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.message_type = 0,
                _.prototype.ticket = "",
                _.prototype.client_message_id = "",
                _.prototype.mentioned_users = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.content && Object.hasOwnProperty.call(_, "content") && O.uint32(34).string(_.content),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(42).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    if (null != _.message_type && Object.hasOwnProperty.call(_, "message_type") && O.uint32(48).int32(_.message_type),
                    null != _.ticket && Object.hasOwnProperty.call(_, "ticket") && O.uint32(58).string(_.ticket),
                    null != _.client_message_id && Object.hasOwnProperty.call(_, "client_message_id") && O.uint32(66).string(_.client_message_id),
                    null != _.mentioned_users && _.mentioned_users.length)
                        for (var j = 0; j < _.mentioned_users.length; ++j)
                            O.uint32(72).int64(_.mentioned_users[j]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.BroadcastSendMessageRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_type = _.int32();
                            break;
                        case 3:
                            B.conversation_short_id = _.int64();
                            break;
                        case 4:
                            B.content = _.string();
                            break;
                        case 5:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 6:
                            B.message_type = _.int32();
                            break;
                        case 7:
                            B.ticket = _.string();
                            break;
                        case 8:
                            B.client_message_id = _.string();
                            break;
                        case 9:
                            if (B.mentioned_users && B.mentioned_users.length || (B.mentioned_users = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.mentioned_users.push(_.int64());
                            else
                                B.mentioned_users.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.BroadcastSendMessageResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.extra_info = "",
                _.prototype.status = 0,
                _.prototype.client_message_id = "",
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(8).int64(_.server_message_id),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(18).string(_.extra_info),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(24).int32(_.status),
                    null != _.client_message_id && Object.hasOwnProperty.call(_, "client_message_id") && O.uint32(34).string(_.client_message_id),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(40).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(50).string(_.check_message),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BroadcastSendMessageResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.server_message_id = _.int64();
                            break;
                        case 2:
                            j.extra_info = _.string();
                            break;
                        case 3:
                            j.status = _.int32();
                            break;
                        case 4:
                            j.client_message_id = _.string();
                            break;
                        case 5:
                            j.check_code = _.int64();
                            break;
                        case 6:
                            j.check_message = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BroadcastRecvMessageRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.reverse = !1,
                _.prototype.pull_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(32).int64(_.cursor),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(40).int64(_.limit),
                    null != _.reverse && Object.hasOwnProperty.call(_, "reverse") && O.uint32(48).bool(_.reverse),
                    null != _.pull_type && Object.hasOwnProperty.call(_, "pull_type") && O.uint32(56).int32(_.pull_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BroadcastRecvMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            j.cursor = _.int64();
                            break;
                        case 5:
                            j.limit = _.int64();
                            break;
                        case 6:
                            j.reverse = _.bool();
                            break;
                        case 7:
                            j.pull_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BroadcastRecvMessageResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    return null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(24).int64(_.next_cursor),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BroadcastRecvMessageResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cursor = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationRequest = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationRequest; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BroadcastUserCounterRequestBody = function() {
                function _(_) {
                    if (this.conversations = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversations = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversations && _.conversations.length)
                        for (var P = 0; P < _.conversations.length; ++P)
                            E.im_proto.ConversationRequest.encode(_.conversations[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BroadcastUserCounterRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.conversations && j.conversations.length || (j.conversations = []),
                        j.conversations.push(E.im_proto.ConversationRequest.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.BroadcastUserInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.counter = 0,
                _.prototype.conversation_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    null != _.counter && Object.hasOwnProperty.call(_, "counter") && O.uint32(16).int32(_.counter),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BroadcastUserInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.counter = _.int32();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BroadcastUserCounterResponseBody = function() {
                function _(_) {
                    if (this.infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.infos = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.infos && _.infos.length)
                        for (var P = 0; P < _.infos.length; ++P)
                            E.im_proto.BroadcastUserInfo.encode(_.infos[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BroadcastUserCounterResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.infos && j.infos.length || (j.infos = []),
                        j.infos.push(E.im_proto.BroadcastUserInfo.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.NetworkType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "UNKNOWN"] = 0,
                O[_[1] = "WIFI"] = 1,
                O[_[2] = "MOBILE_2G"] = 2,
                O[_[3] = "MOBILE_3G"] = 3,
                O[_[4] = "MOBILE_4G"] = 4,
                O[_[5] = "MOBILE_5G"] = 5,
                O
            }(),
            _.MsgReportType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "NOT_USE"] = 0,
                O[_[1] = "MSG_RECEIVE_BY_WS"] = 1,
                O[_[2] = "MSG_RECEIVE_BY_USER"] = 2,
                O[_[3] = "MSG_RECEIVE_BY_INIT"] = 3,
                O[_[4] = "MSG_RECEIVE_BY_LOAD_HISTORY"] = 4,
                O[_[5] = "MSG_RECEIVE_BY_LOAD_NEWER"] = 5,
                O[_[6] = "MSG_RECEIVE_BY_CHECK_MSG_V1"] = 6,
                O[_[7] = "MSG_RECEIVE_BY_CHECK_MSG_V2"] = 7,
                O[_[8] = "MSG_RECEIVE_BY_STRANGER"] = 8,
                O[_[9] = "MSG_SHOW"] = 9,
                O
            }(),
            _.ClientACKRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.start_time_stamp = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.cmd = 0,
                _.prototype.network_type = 0,
                _.prototype.logid = "",
                _.prototype.client_time_stamp = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O.uint32(8).int64(_.start_time_stamp),
                    O.uint32(16).int32(_.cmd),
                    null != _.network_type && Object.hasOwnProperty.call(_, "network_type") && O.uint32(24).int32(_.network_type),
                    null != _.logid && Object.hasOwnProperty.call(_, "logid") && O.uint32(34).string(_.logid),
                    null != _.client_time_stamp && Object.hasOwnProperty.call(_, "client_time_stamp") && O.uint32(40).int64(_.client_time_stamp),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(48).int64(_.server_message_id),
                    O.uint32(56).int32(_.type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ClientACKRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.start_time_stamp = _.int64();
                            break;
                        case 2:
                            j.cmd = _.int32();
                            break;
                        case 3:
                            j.network_type = _.int32();
                            break;
                        case 4:
                            j.logid = _.string();
                            break;
                        case 5:
                            j.client_time_stamp = _.int64();
                            break;
                        case 6:
                            j.server_message_id = _.int64();
                            break;
                        case 7:
                            j.type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("start_time_stamp"))
                        throw T.ProtocolError("missing required 'start_time_stamp'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("cmd"))
                        throw T.ProtocolError("missing required 'cmd'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("type"))
                        throw T.ProtocolError("missing required 'type'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.ClientBatchACKRequestBody = function() {
                function _(_) {
                    if (this.ack_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.ack_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.ack_list && _.ack_list.length)
                        for (var P = 0; P < _.ack_list.length; ++P)
                            E.im_proto.ClientACKRequestBody.encode(_.ack_list[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ClientBatchACKRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.ack_list && j.ack_list.length || (j.ack_list = []),
                        j.ack_list.push(E.im_proto.ClientACKRequestBody.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.VoipMode = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "VOIP_MODE_DOUBLE"] = 0,
                O[_[1] = "VOIP_MODE_MULTIPLAYER"] = 1,
                O
            }(),
            _.VoipStatusCode = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "SUCCESS"] = 0,
                O[_[4] = "VOIP_PARAMS_ERROR"] = 4,
                O[_[18] = "VOIP_STATUS_ERROR"] = 18,
                O[_[19] = "VOIP_CANCEL_ERROR"] = 19,
                O[_[20] = "VOIP_OTHER_RESPONSE_ERROR"] = 20,
                O[_[21] = "VOIP_CALLBACK_ERROR"] = 21,
                O
            }(),
            _.VoipStatus = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "IDLE"] = 0,
                O[_[1] = "CALLING"] = 1,
                O[_[2] = "RINGING"] = 2,
                O[_[3] = "ACCEPTED"] = 3,
                O[_[4] = "ONTHECALL"] = 4,
                O[_[101] = "TERMINATED"] = 101,
                O[_[102] = "OCCUPIED"] = 102,
                O[_[103] = "REFUSED"] = 103,
                O[_[104] = "CANCELLED"] = 104,
                O[_[105] = "UNAVAILABLE"] = 105,
                O[_[106] = "RTCERROR"] = 106,
                O[_[107] = "RTC_ENGINE_MISMATCH"] = 107,
                O
            }(),
            _.VoipType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "VOIP_TYPE_NOT_USED"] = 0,
                O[_[1] = "VOIP_TYPE_ALL"] = 1,
                O[_[2] = "VOIP_TYPE_VIDEOONLY"] = 2,
                O[_[3] = "VOIP_TYPE_AUDIOONLY"] = 3,
                O
            }(),
            _.VoipInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.user_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.device_id = "",
                _.prototype.channel_id = "",
                _.prototype.token = "",
                _.prototype.status = 0,
                _.prototype.caller_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.created_time_ms = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.updated_time_ms = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.con_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.v_type = 0,
                _.prototype.srv_msg_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.user_id && Object.hasOwnProperty.call(_, "user_id") && O.uint32(8).int64(_.user_id),
                    null != _.device_id && Object.hasOwnProperty.call(_, "device_id") && O.uint32(18).string(_.device_id),
                    null != _.channel_id && Object.hasOwnProperty.call(_, "channel_id") && O.uint32(26).string(_.channel_id),
                    null != _.token && Object.hasOwnProperty.call(_, "token") && O.uint32(34).string(_.token),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(40).int32(_.status),
                    null != _.caller_id && Object.hasOwnProperty.call(_, "caller_id") && O.uint32(48).int64(_.caller_id),
                    null != _.created_time_ms && Object.hasOwnProperty.call(_, "created_time_ms") && O.uint32(56).int64(_.created_time_ms),
                    null != _.updated_time_ms && Object.hasOwnProperty.call(_, "updated_time_ms") && O.uint32(64).int64(_.updated_time_ms),
                    null != _.con_short_id && Object.hasOwnProperty.call(_, "con_short_id") && O.uint32(72).int64(_.con_short_id),
                    null != _.v_type && Object.hasOwnProperty.call(_, "v_type") && O.uint32(80).int32(_.v_type),
                    null != _.srv_msg_id && Object.hasOwnProperty.call(_, "srv_msg_id") && O.uint32(88).int64(_.srv_msg_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.VoipInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.user_id = _.int64();
                            break;
                        case 2:
                            j.device_id = _.string();
                            break;
                        case 3:
                            j.channel_id = _.string();
                            break;
                        case 4:
                            j.token = _.string();
                            break;
                        case 5:
                            j.status = _.int32();
                            break;
                        case 6:
                            j.caller_id = _.int64();
                            break;
                        case 7:
                            j.created_time_ms = _.int64();
                            break;
                        case 8:
                            j.updated_time_ms = _.int64();
                            break;
                        case 9:
                            j.con_short_id = _.int64();
                            break;
                        case 10:
                            j.v_type = _.int32();
                            break;
                        case 11:
                            j.srv_msg_id = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.CreateVoipRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.idempotent_id = "",
                _.prototype.v_type = 0,
                _.prototype.con_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.srv_msg_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ref_channel_id = "",
                _.prototype.voip_mode = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.idempotent_id && Object.hasOwnProperty.call(_, "idempotent_id") && O.uint32(10).string(_.idempotent_id),
                    null != _.v_type && Object.hasOwnProperty.call(_, "v_type") && O.uint32(16).int32(_.v_type),
                    null != _.con_short_id && Object.hasOwnProperty.call(_, "con_short_id") && O.uint32(24).int64(_.con_short_id),
                    null != _.srv_msg_id && Object.hasOwnProperty.call(_, "srv_msg_id") && O.uint32(32).int64(_.srv_msg_id),
                    null != _.ref_channel_id && Object.hasOwnProperty.call(_, "ref_channel_id") && O.uint32(42).string(_.ref_channel_id),
                    null != _.voip_mode && Object.hasOwnProperty.call(_, "voip_mode") && O.uint32(48).int32(_.voip_mode),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.CreateVoipRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.idempotent_id = _.string();
                            break;
                        case 2:
                            j.v_type = _.int32();
                            break;
                        case 3:
                            j.con_short_id = _.int64();
                            break;
                        case 4:
                            j.srv_msg_id = _.int64();
                            break;
                        case 5:
                            j.ref_channel_id = _.string();
                            break;
                        case 6:
                            j.voip_mode = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.CreateVoipResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.info = null,
                _.prototype.status_code = 0,
                _.prototype.voip_mode = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.info && Object.hasOwnProperty.call(_, "info") && E.im_proto.VoipInfo.encode(_.info, O.uint32(10).fork()).ldelim(),
                    null != _.status_code && Object.hasOwnProperty.call(_, "status_code") && O.uint32(16).int32(_.status_code),
                    null != _.voip_mode && Object.hasOwnProperty.call(_, "voip_mode") && O.uint32(24).int32(_.voip_mode),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.CreateVoipResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.info = E.im_proto.VoipInfo.decode(_, _.uint32());
                            break;
                        case 2:
                            j.status_code = _.int32();
                            break;
                        case 3:
                            j.voip_mode = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.CallVoipRequestBody = function() {
                function _(_) {
                    if (this.callee_ids = [],
                    this.ext = {},
                    this.ref_channel_users = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.callee_ids = T.emptyArray,
                _.prototype.channel_id = "",
                _.prototype.v_type = 0,
                _.prototype.ext = T.emptyObject,
                _.prototype.ref_channel_users = T.emptyArray,
                _.prototype.con_id = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.callee_ids && _.callee_ids.length)
                        for (var P = 0; P < _.callee_ids.length; ++P)
                            O.uint32(8).int64(_.callee_ids[P]);
                    if (null != _.channel_id && Object.hasOwnProperty.call(_, "channel_id") && O.uint32(18).string(_.channel_id),
                    null != _.v_type && Object.hasOwnProperty.call(_, "v_type") && O.uint32(24).int32(_.v_type),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var j = Object.keys(_.ext), P = 0; P < j.length; ++P)
                            O.uint32(34).fork().uint32(10).string(j[P]).uint32(18).string(_.ext[j[P]]).ldelim();
                    if (null != _.ref_channel_users && _.ref_channel_users.length)
                        for (var P = 0; P < _.ref_channel_users.length; ++P)
                            O.uint32(40).int64(_.ref_channel_users[P]);
                    return null != _.con_id && Object.hasOwnProperty.call(_, "con_id") && O.uint32(50).string(_.con_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.CallVoipRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            if (B.callee_ids && B.callee_ids.length || (B.callee_ids = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.callee_ids.push(_.int64());
                            else
                                B.callee_ids.push(_.int64());
                            break;
                        case 2:
                            B.channel_id = _.string();
                            break;
                        case 3:
                            B.v_type = _.int32();
                            break;
                        case 4:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 5:
                            if (B.ref_channel_users && B.ref_channel_users.length || (B.ref_channel_users = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.ref_channel_users.push(_.int64());
                            else
                                B.ref_channel_users.push(_.int64());
                            break;
                        case 6:
                            B.con_id = _.string();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.CallVoipResponseBody = function() {
                function _(_) {
                    if (this.callee_ids = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.info = null,
                _.prototype.callee_ids = T.emptyArray,
                _.prototype.status = 0,
                _.prototype.extra_info = "",
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.ref_channel_id = "",
                _.prototype.voip_mode = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.info && Object.hasOwnProperty.call(_, "info") && E.im_proto.VoipInfo.encode(_.info, O.uint32(10).fork()).ldelim(),
                    null != _.callee_ids && _.callee_ids.length)
                        for (var P = 0; P < _.callee_ids.length; ++P)
                            O.uint32(16).int64(_.callee_ids[P]);
                    return null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(24).int32(_.status),
                    null != _.extra_info && Object.hasOwnProperty.call(_, "extra_info") && O.uint32(34).string(_.extra_info),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(40).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(50).string(_.check_message),
                    null != _.ref_channel_id && Object.hasOwnProperty.call(_, "ref_channel_id") && O.uint32(58).string(_.ref_channel_id),
                    null != _.voip_mode && Object.hasOwnProperty.call(_, "voip_mode") && O.uint32(64).int32(_.voip_mode),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.CallVoipResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.info = E.im_proto.VoipInfo.decode(_, _.uint32());
                            break;
                        case 2:
                            if (j.callee_ids && j.callee_ids.length || (j.callee_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.callee_ids.push(_.int64());
                            else
                                j.callee_ids.push(_.int64());
                            break;
                        case 3:
                            j.status = _.int32();
                            break;
                        case 4:
                            j.extra_info = _.string();
                            break;
                        case 5:
                            j.check_code = _.int64();
                            break;
                        case 6:
                            j.check_message = _.string();
                            break;
                        case 7:
                            j.ref_channel_id = _.string();
                            break;
                        case 8:
                            j.voip_mode = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.UpdateVoipRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.channel_id = "",
                _.prototype.status = 0,
                _.prototype.v_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.channel_id && Object.hasOwnProperty.call(_, "channel_id") && O.uint32(10).string(_.channel_id),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(16).int32(_.status),
                    null != _.v_type && Object.hasOwnProperty.call(_, "v_type") && O.uint32(24).int32(_.v_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.UpdateVoipRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.channel_id = _.string();
                            break;
                        case 2:
                            j.status = _.int32();
                            break;
                        case 3:
                            j.v_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.UpdateVoipResponseBody = function() {
                function _(_) {
                    if (this.callees = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.info = null,
                _.prototype.status_code = 0,
                _.prototype.voip_mode = 0,
                _.prototype.callees = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.info && Object.hasOwnProperty.call(_, "info") && E.im_proto.VoipInfo.encode(_.info, O.uint32(10).fork()).ldelim(),
                    null != _.status_code && Object.hasOwnProperty.call(_, "status_code") && O.uint32(16).int32(_.status_code),
                    null != _.voip_mode && Object.hasOwnProperty.call(_, "voip_mode") && O.uint32(24).int32(_.voip_mode),
                    null != _.callees && _.callees.length)
                        for (var P = 0; P < _.callees.length; ++P)
                            O.uint32(32).int64(_.callees[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.UpdateVoipResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.info = E.im_proto.VoipInfo.decode(_, _.uint32());
                            break;
                        case 2:
                            j.status_code = _.int32();
                            break;
                        case 3:
                            j.voip_mode = _.int32();
                            break;
                        case 4:
                            if (j.callees && j.callees.length || (j.callees = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.callees.push(_.int64());
                            else
                                j.callees.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ChannelStatus = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "CHANNEL_STATUS_NOT_USED"] = 0,
                O[_[1] = "ONLINE"] = 1,
                O[_[2] = "OFFLINE"] = 2,
                O
            }(),
            _.ChannelHeartBeatRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.channel_id = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.channel_id && Object.hasOwnProperty.call(_, "channel_id") && O.uint32(10).string(_.channel_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ChannelHeartBeatRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.channel_id = _.string() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.Profile = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.nick_name = "",
                _.prototype.protrait = "",
                _.prototype.basic_ext_info = "",
                _.prototype.detail_ext_info = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.nick_name && Object.hasOwnProperty.call(_, "nick_name") && O.uint32(10).string(_.nick_name),
                    null != _.protrait && Object.hasOwnProperty.call(_, "protrait") && O.uint32(18).string(_.protrait),
                    null != _.basic_ext_info && Object.hasOwnProperty.call(_, "basic_ext_info") && O.uint32(26).string(_.basic_ext_info),
                    null != _.detail_ext_info && Object.hasOwnProperty.call(_, "detail_ext_info") && O.uint32(34).string(_.detail_ext_info),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.Profile; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.nick_name = _.string();
                            break;
                        case 2:
                            j.protrait = _.string();
                            break;
                        case 3:
                            j.basic_ext_info = _.string();
                            break;
                        case 4:
                            j.detail_ext_info = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ProfileGetInfoRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.userid = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O.uint32(8).int64(_.userid),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ProfileGetInfoRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.userid = _.int64() : _.skipType(7 & R)
                    }
                    if (!j.hasOwnProperty("userid"))
                        throw T.ProtocolError("missing required 'userid'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.ProfileGetInfoResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.profile = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.profile && Object.hasOwnProperty.call(_, "profile") && E.im_proto.Profile.encode(_.profile, O.uint32(10).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ProfileGetInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.profile = E.im_proto.Profile.decode(_, _.uint32()) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ClientMetricType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "COUNTER"] = 0,
                O[_[1] = "TIMER"] = 1,
                O
            }(),
            _.ClientMetric = function() {
                function _(_) {
                    if (this.tags = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.metric_type = 0,
                _.prototype.k = "",
                _.prototype.v = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.tags = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.metric_type && Object.hasOwnProperty.call(_, "metric_type") && O.uint32(8).int32(_.metric_type),
                    null != _.k && Object.hasOwnProperty.call(_, "k") && O.uint32(18).string(_.k),
                    null != _.v && Object.hasOwnProperty.call(_, "v") && O.uint32(24).int64(_.v),
                    null != _.tags && Object.hasOwnProperty.call(_, "tags"))
                        for (var P = Object.keys(_.tags), j = 0; j < P.length; ++j)
                            O.uint32(34).fork().uint32(10).string(P[j]).uint32(18).string(_.tags[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.ClientMetric; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.metric_type = _.int32();
                            break;
                        case 2:
                            B.k = _.string();
                            break;
                        case 3:
                            B.v = _.int64();
                            break;
                        case 4:
                            B.tags === T.emptyObject && (B.tags = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.tags[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.ReportClientMetricsRequestBody = function() {
                function _(_) {
                    if (this.report_metrics_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.report_metrics_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.report_metrics_list && _.report_metrics_list.length)
                        for (var P = 0; P < _.report_metrics_list.length; ++P)
                            E.im_proto.ClientMetric.encode(_.report_metrics_list[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ReportClientMetricsRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.report_metrics_list && j.report_metrics_list.length || (j.report_metrics_list = []),
                        j.report_metrics_list.push(E.im_proto.ClientMetric.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConfigsRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConfigsRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConfigsResponseBody = function() {
                function _(_) {
                    if (this.configs = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.version = 0,
                _.prototype.configs = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.version && Object.hasOwnProperty.call(_, "version") && O.uint32(8).int32(_.version),
                    null != _.configs && _.configs.length)
                        for (var P = 0; P < _.configs.length; ++P)
                            E.im_proto.Config.encode(_.configs[P], O.uint32(18).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConfigsResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.version = _.int32();
                            break;
                        case 2:
                            j.configs && j.configs.length || (j.configs = []),
                            j.configs.push(E.im_proto.Config.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.Config = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conf_name = "",
                _.prototype.conf_value = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conf_name && Object.hasOwnProperty.call(_, "conf_name") && O.uint32(10).string(_.conf_name),
                    null != _.conf_value && Object.hasOwnProperty.call(_, "conf_value") && O.uint32(18).string(_.conf_value),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.Config; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conf_name = _.string();
                            break;
                        case 2:
                            j.conf_value = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.SendMessageP2PRequestBody = function() {
                function _(_) {
                    if (this.visible_user = [],
                    this.invisible_user = [],
                    this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.send_type = 0,
                _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.visible_user = T.emptyArray,
                _.prototype.invisible_user = T.emptyArray,
                _.prototype.message_type = 0,
                _.prototype.content = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.client_message_id = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.send_type && Object.hasOwnProperty.call(_, "send_type") && O.uint32(8).int32(_.send_type),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(18).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(32).int64(_.conversation_short_id),
                    null != _.visible_user && _.visible_user.length)
                        for (var P = 0; P < _.visible_user.length; ++P)
                            O.uint32(40).int64(_.visible_user[P]);
                    if (null != _.invisible_user && _.invisible_user.length)
                        for (var P = 0; P < _.invisible_user.length; ++P)
                            O.uint32(48).int64(_.invisible_user[P]);
                    if (null != _.message_type && Object.hasOwnProperty.call(_, "message_type") && O.uint32(56).int32(_.message_type),
                    null != _.content && Object.hasOwnProperty.call(_, "content") && O.uint32(66).string(_.content),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var j = Object.keys(_.ext), P = 0; P < j.length; ++P)
                            O.uint32(74).fork().uint32(10).string(j[P]).uint32(18).string(_.ext[j[P]]).ldelim();
                    return null != _.client_message_id && Object.hasOwnProperty.call(_, "client_message_id") && O.uint32(82).string(_.client_message_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.SendMessageP2PRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.send_type = _.int32();
                            break;
                        case 2:
                            B.conversation_id = _.string();
                            break;
                        case 3:
                            B.conversation_type = _.int32();
                            break;
                        case 4:
                            B.conversation_short_id = _.int64();
                            break;
                        case 5:
                            if (B.visible_user && B.visible_user.length || (B.visible_user = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.visible_user.push(_.int64());
                            else
                                B.visible_user.push(_.int64());
                            break;
                        case 6:
                            if (B.invisible_user && B.invisible_user.length || (B.invisible_user = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.invisible_user.push(_.int64());
                            else
                                B.invisible_user.push(_.int64());
                            break;
                        case 7:
                            B.message_type = _.int32();
                            break;
                        case 8:
                            B.content = _.string();
                            break;
                        case 9:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 10:
                            B.client_message_id = _.string();
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.SendMessageP2PResponseBody = function() {
                function _(_) {
                    if (this.failed_user = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.failed_user = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.failed_user && _.failed_user.length)
                        for (var P = 0; P < _.failed_user.length; ++P)
                            O.uint32(8).int64(_.failed_user[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SendMessageP2PResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        if (R >>> 3 == 1) {
                            if (j.failed_user && j.failed_user.length || (j.failed_user = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_user.push(_.int64());
                            else
                                j.failed_user.push(_.int64())
                        } else
                            _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConvCountReport = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conv_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.unread_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conv_short_id && Object.hasOwnProperty.call(_, "conv_short_id") && O.uint32(8).int64(_.conv_short_id),
                    null != _.unread_count && Object.hasOwnProperty.call(_, "unread_count") && O.uint32(16).int64(_.unread_count),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConvCountReport; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conv_short_id = _.int64();
                            break;
                        case 2:
                            j.unread_count = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.UnReadCountReportRequestBody = function() {
                function _(_) {
                    if (this.conv_unread_count = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.total_unread_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conv_unread_count = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.total_unread_count && Object.hasOwnProperty.call(_, "total_unread_count") && O.uint32(8).int64(_.total_unread_count),
                    null != _.conv_unread_count && _.conv_unread_count.length)
                        for (var P = 0; P < _.conv_unread_count.length; ++P)
                            E.im_proto.ConvCountReport.encode(_.conv_unread_count[P], O.uint32(18).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.UnReadCountReportRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.total_unread_count = _.int64();
                            break;
                        case 2:
                            j.conv_unread_count && j.conv_unread_count.length || (j.conv_unread_count = []),
                            j.conv_unread_count.push(E.im_proto.ConvCountReport.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.UnReadCountReportResponseBody = function() {
                function _(_) {
                    if (this.failed_conv_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.set_total_status = !1,
                _.prototype.failed_conv_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).bool(_.set_total_status),
                    null != _.failed_conv_list && _.failed_conv_list.length)
                        for (var P = 0; P < _.failed_conv_list.length; ++P)
                            O.uint32(16).int64(_.failed_conv_list[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.UnReadCountReportResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.set_total_status = _.bool();
                            break;
                        case 2:
                            if (j.failed_conv_list && j.failed_conv_list.length || (j.failed_conv_list = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_conv_list.push(_.int64());
                            else
                                j.failed_conv_list.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("set_total_status"))
                        throw T.ProtocolError("missing required 'set_total_status'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.GetUnreadCountRequestBody = function() {
                function _(_) {
                    if (this.conv_short_id = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.get_total = !1,
                _.prototype.conv_short_id = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.get_total && Object.hasOwnProperty.call(_, "get_total") && O.uint32(8).bool(_.get_total),
                    null != _.conv_short_id && _.conv_short_id.length)
                        for (var P = 0; P < _.conv_short_id.length; ++P)
                            O.uint32(16).int64(_.conv_short_id[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetUnreadCountRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.get_total = _.bool();
                            break;
                        case 2:
                            if (j.conv_short_id && j.conv_short_id.length || (j.conv_short_id = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.conv_short_id.push(_.int64());
                            else
                                j.conv_short_id.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetUnreadCountResponseBody = function() {
                function _(_) {
                    if (this.conv_unread_count = {},
                    this.failed_conv_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.total_unread_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conv_unread_count = T.emptyObject,
                _.prototype.failed_conv_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.total_unread_count && Object.hasOwnProperty.call(_, "total_unread_count") && O.uint32(8).int64(_.total_unread_count),
                    null != _.conv_unread_count && Object.hasOwnProperty.call(_, "conv_unread_count"))
                        for (var P = Object.keys(_.conv_unread_count), j = 0; j < P.length; ++j)
                            O.uint32(18).fork().uint32(8).int64(P[j]).uint32(16).int64(_.conv_unread_count[P[j]]).ldelim();
                    if (null != _.failed_conv_list && _.failed_conv_list.length)
                        for (var j = 0; j < _.failed_conv_list.length; ++j)
                            O.uint32(24).int64(_.failed_conv_list[j]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.GetUnreadCountResponseBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.total_unread_count = _.int64();
                            break;
                        case 2:
                            B.conv_unread_count === T.emptyObject && (B.conv_unread_count = {});
                            var M = _.uint32() + _.pos;
                            for (P = 0,
                            j = 0; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.int64();
                                    break;
                                case 2:
                                    j = _.int64();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.conv_unread_count["object" == typeof P ? T.longToHash(P) : P] = j;
                            break;
                        case 3:
                            if (B.failed_conv_list && B.failed_conv_list.length || (B.failed_conv_list = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.failed_conv_list.push(_.int64());
                            else
                                B.failed_conv_list.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.GetBlockListRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(8).int64(_.cursor),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(16).int32(_.limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetBlockListRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.cursor = _.int64();
                            break;
                        case 2:
                            j.limit = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BlockUserInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.user_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.create_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.user_id && Object.hasOwnProperty.call(_, "user_id") && O.uint32(8).int64(_.user_id),
                    null != _.create_time && Object.hasOwnProperty.call(_, "create_time") && O.uint32(16).int64(_.create_time),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BlockUserInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.user_id = _.int64();
                            break;
                        case 2:
                            j.create_time = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetBlockListResponseBody = function() {
                function _(_) {
                    if (this.user_info = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.user_info = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.user_info && _.user_info.length)
                        for (var P = 0; P < _.user_info.length; ++P)
                            E.im_proto.BlockUserInfo.encode(_.user_info[P], O.uint32(10).fork()).ldelim();
                    return null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(24).int64(_.next_cursor),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetBlockListResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.user_info && j.user_info.length || (j.user_info = []),
                            j.user_info.push(E.im_proto.BlockUserInfo.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cursor = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.SetBlocklistRequestBody = function() {
                function _(_) {
                    if (this.blocklist = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.set_block_list = !1,
                _.prototype.blocklist = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.set_block_list && Object.hasOwnProperty.call(_, "set_block_list") && O.uint32(8).bool(_.set_block_list),
                    null != _.blocklist && _.blocklist.length)
                        for (var P = 0; P < _.blocklist.length; ++P)
                            O.uint32(16).int64(_.blocklist[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SetBlocklistRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.set_block_list = _.bool();
                            break;
                        case 2:
                            if (j.blocklist && j.blocklist.length || (j.blocklist = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.blocklist.push(_.int64());
                            else
                                j.blocklist.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.SetBlocklistResponseBody = function() {
                function _(_) {
                    if (this.failed_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.failed_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.failed_list && _.failed_list.length)
                        for (var P = 0; P < _.failed_list.length; ++P)
                            O.uint32(8).int64(_.failed_list[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SetBlocklistResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        if (R >>> 3 == 1) {
                            if (j.failed_list && j.failed_list.length || (j.failed_list = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_list.push(_.int64());
                            else
                                j.failed_list.push(_.int64())
                        } else
                            _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.CheckInBlockListRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.user_to_check = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.user_to_check && Object.hasOwnProperty.call(_, "user_to_check") && O.uint32(8).int64(_.user_to_check),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.CheckInBlockListRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.user_to_check = _.int64() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.CheckInBlockListResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.in_blocklist = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.in_blocklist && Object.hasOwnProperty.call(_, "in_blocklist") && O.uint32(8).bool(_.in_blocklist),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.CheckInBlockListResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.in_blocklist = _.bool() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.BlockStatus = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "UNBLOCK"] = 0,
                O[_[1] = "BLOCK"] = 1,
                O
            }(),
            _.BlockMembersRequestBody = function() {
                function _(_) {
                    if (this.block_time = {},
                    this.biz_ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.block_status = 0,
                _.prototype.block_time = T.emptyObject,
                _.prototype.conv_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.conversation_id = "",
                _.prototype.biz_ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.block_status && Object.hasOwnProperty.call(_, "block_status") && O.uint32(8).int32(_.block_status),
                    null != _.block_time && Object.hasOwnProperty.call(_, "block_time"))
                        for (var P = Object.keys(_.block_time), j = 0; j < P.length; ++j)
                            O.uint32(18).fork().uint32(8).int64(P[j]).uint32(16).int64(_.block_time[P[j]]).ldelim();
                    if (null != _.conv_short_id && Object.hasOwnProperty.call(_, "conv_short_id") && O.uint32(24).int64(_.conv_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(32).int32(_.conversation_type),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(42).string(_.conversation_id),
                    null != _.biz_ext && Object.hasOwnProperty.call(_, "biz_ext"))
                        for (var P = Object.keys(_.biz_ext), j = 0; j < P.length; ++j)
                            O.uint32(90).fork().uint32(10).string(P[j]).uint32(18).string(_.biz_ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.BlockMembersRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.block_status = _.int32();
                            break;
                        case 2:
                            B.block_time === T.emptyObject && (B.block_time = {});
                            var M = _.uint32() + _.pos;
                            for (P = 0,
                            j = 0; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.int64();
                                    break;
                                case 2:
                                    j = _.int64();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.block_time["object" == typeof P ? T.longToHash(P) : P] = j;
                            break;
                        case 3:
                            B.conv_short_id = _.int64();
                            break;
                        case 4:
                            B.conversation_type = _.int32();
                            break;
                        case 5:
                            B.conversation_id = _.string();
                            break;
                        case 11:
                            B.biz_ext === T.emptyObject && (B.biz_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.biz_ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.BlockMembersResponseBody = function() {
                function _(_) {
                    if (this.failed_members = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.failed_members = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.failed_members && _.failed_members.length)
                        for (var P = 0; P < _.failed_members.length; ++P)
                            O.uint32(8).int64(_.failed_members[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BlockMembersResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        if (R >>> 3 == 1) {
                            if (j.failed_members && j.failed_members.length || (j.failed_members = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_members.push(_.int64());
                            else
                                j.failed_members.push(_.int64())
                        } else
                            _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.BlockConversationRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conv_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_type = 0,
                _.prototype.block_status = 0,
                _.prototype.block_normal_only = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conv_short_id && Object.hasOwnProperty.call(_, "conv_short_id") && O.uint32(16).int64(_.conv_short_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    null != _.block_status && Object.hasOwnProperty.call(_, "block_status") && O.uint32(32).int32(_.block_status),
                    null != _.block_normal_only && Object.hasOwnProperty.call(_, "block_normal_only") && O.uint32(40).bool(_.block_normal_only),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BlockConversationRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conv_short_id = _.int64();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        case 4:
                            j.block_status = _.int32();
                            break;
                        case 5:
                            j.block_normal_only = _.bool();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetMessagesCheckInfoInConversationRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.cursor_reverse_begin = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.cursor_reverse_end = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.expect_msg_total_count = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(16).int64(_.conversation_short_id),
                    null != _.cursor_reverse_begin && Object.hasOwnProperty.call(_, "cursor_reverse_begin") && O.uint32(24).int64(_.cursor_reverse_begin),
                    null != _.expect_msg_total_count && Object.hasOwnProperty.call(_, "expect_msg_total_count") && O.uint32(32).int32(_.expect_msg_total_count),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(42).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(48).int32(_.conversation_type),
                    null != _.cursor_reverse_end && Object.hasOwnProperty.call(_, "cursor_reverse_end") && O.uint32(56).int64(_.cursor_reverse_end),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetMessagesCheckInfoInConversationRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 2:
                            j.conversation_short_id = _.int64();
                            break;
                        case 5:
                            j.conversation_id = _.string();
                            break;
                        case 6:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.cursor_reverse_begin = _.int64();
                            break;
                        case 7:
                            j.cursor_reverse_end = _.int64();
                            break;
                        case 4:
                            j.expect_msg_total_count = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessagesCheckInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.head_msg_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.tail_msg_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.msg_count = 0,
                _.prototype.indexes_checksum = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.head_msg_index && Object.hasOwnProperty.call(_, "head_msg_index") && O.uint32(8).int64(_.head_msg_index),
                    null != _.tail_msg_index && Object.hasOwnProperty.call(_, "tail_msg_index") && O.uint32(16).int64(_.tail_msg_index),
                    null != _.msg_count && Object.hasOwnProperty.call(_, "msg_count") && O.uint32(24).int32(_.msg_count),
                    null != _.indexes_checksum && Object.hasOwnProperty.call(_, "indexes_checksum") && O.uint32(32).uint32(_.indexes_checksum),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessagesCheckInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.head_msg_index = _.int64();
                            break;
                        case 2:
                            j.tail_msg_index = _.int64();
                            break;
                        case 3:
                            j.msg_count = _.int32();
                            break;
                        case 4:
                            j.indexes_checksum = _.uint32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetMessagesCheckInfoInConversationResponseBody = function() {
                function _(_) {
                    if (this.msgs_checkinfo_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.msgs_checkinfo_list = T.emptyArray,
                _.prototype.real_msg_total_count = 0,
                _.prototype.cursor_reverse_next = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.msgs_checkinfo_list && _.msgs_checkinfo_list.length)
                        for (var P = 0; P < _.msgs_checkinfo_list.length; ++P)
                            E.im_proto.MessagesCheckInfo.encode(_.msgs_checkinfo_list[P], O.uint32(10).fork()).ldelim();
                    return null != _.real_msg_total_count && Object.hasOwnProperty.call(_, "real_msg_total_count") && O.uint32(16).int32(_.real_msg_total_count),
                    null != _.cursor_reverse_next && Object.hasOwnProperty.call(_, "cursor_reverse_next") && O.uint32(32).int64(_.cursor_reverse_next),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetMessagesCheckInfoInConversationResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.msgs_checkinfo_list && j.msgs_checkinfo_list.length || (j.msgs_checkinfo_list = []),
                            j.msgs_checkinfo_list.push(E.im_proto.MessagesCheckInfo.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.real_msg_total_count = _.int32();
                            break;
                        case 4:
                            j.cursor_reverse_next = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationCheckInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(8).int64(_.conversation_short_id),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(18).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(24).int32(_.conversation_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationCheckInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.conversation_id = _.string();
                            break;
                        case 3:
                            j.conversation_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationsCheckInfoResponseBody = function() {
                function _(_) {
                    if (this.conversation_checkinfo_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_checkinfo_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_checkinfo_list && _.conversation_checkinfo_list.length)
                        for (var P = 0; P < _.conversation_checkinfo_list.length; ++P)
                            E.im_proto.ConversationCheckInfo.encode(_.conversation_checkinfo_list[P], O.uint32(10).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationsCheckInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? (j.conversation_checkinfo_list && j.conversation_checkinfo_list.length || (j.conversation_checkinfo_list = []),
                        j.conversation_checkinfo_list.push(E.im_proto.ConversationCheckInfo.decode(_, _.uint32()))) : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessageExtraInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.sort_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.sort_time && Object.hasOwnProperty.call(_, "sort_time") && O.uint32(8).int64(_.sort_time),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessageExtraInfo; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.sort_time = _.int64() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.ActionType = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "UNKNOWN_ACTION"] = 0,
                O[_[1] = "FAVORITE"] = 1,
                O[_[2] = "PIN"] = 2,
                O[_[3] = "UNREAD"] = 3,
                O[_[4] = "CONV_TOP_MSG"] = 4,
                O
            }(),
            _.MarkMessageRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.do_action = !1,
                _.prototype.action_type = 0,
                _.prototype.sort_time = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.tag = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(32).int64(_.server_message_id),
                    null != _.do_action && Object.hasOwnProperty.call(_, "do_action") && O.uint32(40).bool(_.do_action),
                    null != _.action_type && Object.hasOwnProperty.call(_, "action_type") && O.uint32(48).int32(_.action_type),
                    null != _.sort_time && Object.hasOwnProperty.call(_, "sort_time") && O.uint32(56).int64(_.sort_time),
                    null != _.tag && Object.hasOwnProperty.call(_, "tag") && O.uint32(64).int64(_.tag),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MarkMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            j.server_message_id = _.int64();
                            break;
                        case 5:
                            j.do_action = _.bool();
                            break;
                        case 6:
                            j.action_type = _.int32();
                            break;
                        case 7:
                            j.sort_time = _.int64();
                            break;
                        case 8:
                            j.tag = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MarkMessageResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.status = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(8).int64(_.server_message_id),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(16).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(26).string(_.check_message),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(32).int32(_.status),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MarkMessageResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.server_message_id = _.int64();
                            break;
                        case 2:
                            j.check_code = _.int64();
                            break;
                        case 3:
                            j.check_message = _.string();
                            break;
                        case 4:
                            j.status = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.PullMarkMessageRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.asc = !1,
                _.prototype.action_type = 0,
                _.prototype.tag = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.clear_unread_count = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.cursor && Object.hasOwnProperty.call(_, "cursor") && O.uint32(32).int64(_.cursor),
                    null != _.limit && Object.hasOwnProperty.call(_, "limit") && O.uint32(40).int64(_.limit),
                    null != _.asc && Object.hasOwnProperty.call(_, "asc") && O.uint32(48).bool(_.asc),
                    null != _.action_type && Object.hasOwnProperty.call(_, "action_type") && O.uint32(56).int32(_.action_type),
                    null != _.tag && Object.hasOwnProperty.call(_, "tag") && O.uint32(64).int64(_.tag),
                    null != _.clear_unread_count && Object.hasOwnProperty.call(_, "clear_unread_count") && O.uint32(72).bool(_.clear_unread_count),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.PullMarkMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            j.cursor = _.int64();
                            break;
                        case 5:
                            j.limit = _.int64();
                            break;
                        case 6:
                            j.asc = _.bool();
                            break;
                        case 7:
                            j.action_type = _.int32();
                            break;
                        case 8:
                            j.tag = _.int64();
                            break;
                        case 9:
                            j.clear_unread_count = _.bool();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.PullMarkMessageResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    this.msg_extras = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.msg_extras = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    if (null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(24).int64(_.next_cursor),
                    null != _.msg_extras && _.msg_extras.length)
                        for (var P = 0; P < _.msg_extras.length; ++P)
                            E.im_proto.MessageExtraInfo.encode(_.msg_extras[P], O.uint32(34).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.PullMarkMessageResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cursor = _.int64();
                            break;
                        case 4:
                            j.msg_extras && j.msg_extras.length || (j.msg_extras = []),
                            j.msg_extras.push(E.im_proto.MessageExtraInfo.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessageByInitRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.page = 0,
                _.prototype.conv_limit = 0,
                _.prototype.msg_limit = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.version && Object.hasOwnProperty.call(_, "version") && O.uint32(8).int64(_.version),
                    null != _.page && Object.hasOwnProperty.call(_, "page") && O.uint32(16).int32(_.page),
                    null != _.conv_limit && Object.hasOwnProperty.call(_, "conv_limit") && O.uint32(24).int32(_.conv_limit),
                    null != _.msg_limit && Object.hasOwnProperty.call(_, "msg_limit") && O.uint32(32).int32(_.msg_limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessageByInitRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.version = _.int64();
                            break;
                        case 2:
                            j.page = _.int32();
                            break;
                        case 3:
                            j.conv_limit = _.int32();
                            break;
                        case 4:
                            j.msg_limit = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MessageByInitResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_init_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.user_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.cmd_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.readconv_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.ConversationMessage.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    return O.uint32(16).bool(_.has_more),
                    O.uint32(24).int64(_.next_init_version),
                    null != _.version && Object.hasOwnProperty.call(_, "version") && O.uint32(32).int64(_.version),
                    null != _.user_cursor && Object.hasOwnProperty.call(_, "user_cursor") && O.uint32(40).int64(_.user_cursor),
                    null != _.cmd_index && Object.hasOwnProperty.call(_, "cmd_index") && O.uint32(48).int64(_.cmd_index),
                    null != _.readconv_version && Object.hasOwnProperty.call(_, "readconv_version") && O.uint32(56).int64(_.readconv_version),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MessageByInitResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.ConversationMessage.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_init_version = _.int64();
                            break;
                        case 4:
                            j.version = _.int64();
                            break;
                        case 5:
                            j.user_cursor = _.int64();
                            break;
                        case 6:
                            j.cmd_index = _.int64();
                            break;
                        case 7:
                            j.readconv_version = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("has_more"))
                        throw T.ProtocolError("missing required 'has_more'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("next_init_version"))
                        throw T.ProtocolError("missing required 'next_init_version'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.ConversationMessage = function() {
                function _(_) {
                    if (this.messages = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversations = null,
                _.prototype.messages = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    E.im_proto.ConversationInfoV2.encode(_.conversations, O.uint32(10).fork()).ldelim(),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(18).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationMessage; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversations = E.im_proto.ConversationInfoV2.decode(_, _.uint32());
                            break;
                        case 2:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("conversations"))
                        throw T.ProtocolError("missing required 'conversations'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.MessageStatus = function() {
                let _ = {}
                  , O = Object.create(_);
                return O[_[0] = "AVAILABLE"] = 0,
                O[_[1] = "NOT_EXIST"] = 1,
                O[_[2] = "INVISIBLE"] = 2,
                O[_[3] = "RECALLED"] = 3,
                O[_[4] = "DELETED"] = 4,
                O
            }(),
            _.BatchUnmarkMessageRequestBody = function() {
                function _(_) {
                    if (this.server_message_ids = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_message_ids = T.emptyArray,
                _.prototype.action_type = 0,
                _.prototype.tag = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.server_message_ids && _.server_message_ids.length)
                        for (var P = 0; P < _.server_message_ids.length; ++P)
                            O.uint32(32).int64(_.server_message_ids[P]);
                    return null != _.action_type && Object.hasOwnProperty.call(_, "action_type") && O.uint32(40).int32(_.action_type),
                    null != _.tag && Object.hasOwnProperty.call(_, "tag") && O.uint32(48).int64(_.tag),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BatchUnmarkMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            if (j.server_message_ids && j.server_message_ids.length || (j.server_message_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.server_message_ids.push(_.int64());
                            else
                                j.server_message_ids.push(_.int64());
                            break;
                        case 5:
                            j.action_type = _.int32();
                            break;
                        case 6:
                            j.tag = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.BatchUnmarkMessageResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.status = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.server_message_id && Object.hasOwnProperty.call(_, "server_message_id") && O.uint32(8).int64(_.server_message_id),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(16).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(26).string(_.check_message),
                    null != _.status && Object.hasOwnProperty.call(_, "status") && O.uint32(32).int32(_.status),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.BatchUnmarkMessageResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.server_message_id = _.int64();
                            break;
                        case 2:
                            j.check_code = _.int64();
                            break;
                        case 3:
                            j.check_message = _.string();
                            break;
                        case 4:
                            j.status = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MarkMsgUnreadCountReportRequestBody = function() {
                function _(_) {
                    if (this.tag_unread_count = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.total_unread_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.tag_unread_count = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.total_unread_count && Object.hasOwnProperty.call(_, "total_unread_count") && O.uint32(32).int64(_.total_unread_count),
                    null != _.tag_unread_count && Object.hasOwnProperty.call(_, "tag_unread_count"))
                        for (var P = Object.keys(_.tag_unread_count), j = 0; j < P.length; ++j)
                            O.uint32(42).fork().uint32(8).int64(P[j]).uint32(16).int64(_.tag_unread_count[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.MarkMsgUnreadCountReportRequestBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.conversation_id = _.string();
                            break;
                        case 2:
                            B.conversation_type = _.int32();
                            break;
                        case 3:
                            B.conversation_short_id = _.int64();
                            break;
                        case 4:
                            B.total_unread_count = _.int64();
                            break;
                        case 5:
                            B.tag_unread_count === T.emptyObject && (B.tag_unread_count = {});
                            var M = _.uint32() + _.pos;
                            for (P = 0,
                            j = 0; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.int64();
                                    break;
                                case 2:
                                    j = _.int64();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.tag_unread_count["object" == typeof P ? T.longToHash(P) : P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.MarkMsgUnreadCountReportResponseBody = function() {
                function _(_) {
                    if (this.failed_tag_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.set_total_status = !1,
                _.prototype.failed_tag_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.set_total_status && Object.hasOwnProperty.call(_, "set_total_status") && O.uint32(8).bool(_.set_total_status),
                    null != _.failed_tag_list && _.failed_tag_list.length)
                        for (var P = 0; P < _.failed_tag_list.length; ++P)
                            O.uint32(16).int64(_.failed_tag_list[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MarkMsgUnreadCountReportResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.set_total_status = _.bool();
                            break;
                        case 2:
                            if (j.failed_tag_list && j.failed_tag_list.length || (j.failed_tag_list = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_tag_list.push(_.int64());
                            else
                                j.failed_tag_list.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MarkMsgGetUnreadCountRequestBody = function() {
                function _(_) {
                    if (this.tags = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_id = "",
                _.prototype.conversation_type = 0,
                _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.get_total = !1,
                _.prototype.tags = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_id && Object.hasOwnProperty.call(_, "conversation_id") && O.uint32(10).string(_.conversation_id),
                    null != _.conversation_type && Object.hasOwnProperty.call(_, "conversation_type") && O.uint32(16).int32(_.conversation_type),
                    null != _.conversation_short_id && Object.hasOwnProperty.call(_, "conversation_short_id") && O.uint32(24).int64(_.conversation_short_id),
                    null != _.get_total && Object.hasOwnProperty.call(_, "get_total") && O.uint32(32).bool(_.get_total),
                    null != _.tags && _.tags.length)
                        for (var P = 0; P < _.tags.length; ++P)
                            O.uint32(40).int64(_.tags[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.MarkMsgGetUnreadCountRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_id = _.string();
                            break;
                        case 2:
                            j.conversation_type = _.int32();
                            break;
                        case 3:
                            j.conversation_short_id = _.int64();
                            break;
                        case 4:
                            j.get_total = _.bool();
                            break;
                        case 5:
                            if (j.tags && j.tags.length || (j.tags = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.tags.push(_.int64());
                            else
                                j.tags.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.MarkMsgGetUnreadCountResponseBody = function() {
                function _(_) {
                    if (this.tag_unread_count = {},
                    this.failed_tag_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.total_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.tag_unread_count = T.emptyObject,
                _.prototype.failed_tag_list = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.total_count && Object.hasOwnProperty.call(_, "total_count") && O.uint32(8).int64(_.total_count),
                    null != _.tag_unread_count && Object.hasOwnProperty.call(_, "tag_unread_count"))
                        for (var P = Object.keys(_.tag_unread_count), j = 0; j < P.length; ++j)
                            O.uint32(18).fork().uint32(8).int64(P[j]).uint32(16).int64(_.tag_unread_count[P[j]]).ldelim();
                    if (null != _.failed_tag_list && _.failed_tag_list.length)
                        for (var j = 0; j < _.failed_tag_list.length; ++j)
                            O.uint32(24).int64(_.failed_tag_list[j]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.MarkMsgGetUnreadCountResponseBody; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.total_count = _.int64();
                            break;
                        case 2:
                            B.tag_unread_count === T.emptyObject && (B.tag_unread_count = {});
                            var M = _.uint32() + _.pos;
                            for (P = 0,
                            j = 0; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.int64();
                                    break;
                                case 2:
                                    j = _.int64();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.tag_unread_count["object" == typeof P ? T.longToHash(P) : P] = j;
                            break;
                        case 3:
                            if (B.failed_tag_list && B.failed_tag_list.length || (B.failed_tag_list = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.failed_tag_list.push(_.int64());
                            else
                                B.failed_tag_list.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    return B
                }
                ,
                _
            }(),
            _.AudioRecognitionRequestInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.content = "",
                _.prototype.uid = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.audio_option = null,
                _.prototype.conv_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O.uint32(10).string(_.content),
                    O.uint32(16).int64(_.uid),
                    O.uint32(24).int64(_.server_message_id),
                    E.im_proto.AudioOption.encode(_.audio_option, O.uint32(42).fork()).ldelim(),
                    O.uint32(48).int64(_.conv_short_id),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.AudioRecognitionRequestInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.content = _.string();
                            break;
                        case 2:
                            j.uid = _.int64();
                            break;
                        case 3:
                            j.server_message_id = _.int64();
                            break;
                        case 5:
                            j.audio_option = E.im_proto.AudioOption.decode(_, _.uint32());
                            break;
                        case 6:
                            j.conv_short_id = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("content"))
                        throw T.ProtocolError("missing required 'content'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("uid"))
                        throw T.ProtocolError("missing required 'uid'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("server_message_id"))
                        throw T.ProtocolError("missing required 'server_message_id'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("audio_option"))
                        throw T.ProtocolError("missing required 'audio_option'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("conv_short_id"))
                        throw T.ProtocolError("missing required 'conv_short_id'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.AudioRecognitionRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.audio = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    E.im_proto.AudioRecognitionRequestInfo.encode(_.audio, O.uint32(10).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.AudioRecognitionRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.audio = E.im_proto.AudioRecognitionRequestInfo.decode(_, _.uint32()) : _.skipType(7 & R)
                    }
                    if (!j.hasOwnProperty("audio"))
                        throw T.ProtocolError("missing required 'audio'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.AudioRecognitionResponseInfo = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.uid = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.server_message_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.audio_text = "",
                _.prototype.content = "",
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    O.uint32(8).int64(_.uid),
                    O.uint32(16).int64(_.server_message_id),
                    O.uint32(26).string(_.audio_text),
                    O.uint32(34).string(_.content),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.AudioRecognitionResponseInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.uid = _.int64();
                            break;
                        case 2:
                            j.server_message_id = _.int64();
                            break;
                        case 3:
                            j.audio_text = _.string();
                            break;
                        case 4:
                            j.content = _.string();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("uid"))
                        throw T.ProtocolError("missing required 'uid'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("server_message_id"))
                        throw T.ProtocolError("missing required 'server_message_id'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("audio_text"))
                        throw T.ProtocolError("missing required 'audio_text'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("content"))
                        throw T.ProtocolError("missing required 'content'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.AudioRecognitionResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.check_code = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.check_message = "",
                _.prototype.audio = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.check_code && Object.hasOwnProperty.call(_, "check_code") && O.uint32(8).int64(_.check_code),
                    null != _.check_message && Object.hasOwnProperty.call(_, "check_message") && O.uint32(18).string(_.check_message),
                    E.im_proto.AudioRecognitionResponseInfo.encode(_.audio, O.uint32(26).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.AudioRecognitionResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.check_code = _.int64();
                            break;
                        case 2:
                            j.check_message = _.string();
                            break;
                        case 3:
                            j.audio = E.im_proto.AudioRecognitionResponseInfo.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("audio"))
                        throw T.ProtocolError("missing required 'audio'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.GetTagMetaInfoRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.filter_deleted_tag = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.filter_deleted_tag && Object.hasOwnProperty.call(_, "filter_deleted_tag") && O.uint32(8).bool(_.filter_deleted_tag),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetTagMetaInfoRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        R >>> 3 == 1 ? j.filter_deleted_tag = _.bool() : _.skipType(7 & R)
                    }
                    return j
                }
                ,
                _
            }(),
            _.TagMetaInfo = function() {
                function _(_) {
                    if (this.ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tag_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.tag_name = "",
                _.prototype.status = 0,
                _.prototype.ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.tag_id),
                    O.uint32(18).string(_.tag_name),
                    O.uint32(24).int32(_.status),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(34).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.TagMetaInfo; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.tag_id = _.int64();
                            break;
                        case 2:
                            B.tag_name = _.string();
                            break;
                        case 3:
                            B.status = _.int32();
                            break;
                        case 4:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    if (!B.hasOwnProperty("tag_id"))
                        throw T.ProtocolError("missing required 'tag_id'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("tag_name"))
                        throw T.ProtocolError("missing required 'tag_name'", {
                            instance: B
                        });
                    if (!B.hasOwnProperty("status"))
                        throw T.ProtocolError("missing required 'status'", {
                            instance: B
                        });
                    return B
                }
                ,
                _
            }(),
            _.GetTagMetaInfoResponseBody = function() {
                function _(_) {
                    if (this.tag_meta_info_list = [],
                    this.user_custom_tag_meta_info_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tag_meta_info_list = T.emptyArray,
                _.prototype.user_conv_tag_limit = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.user_custom_tag_meta_info_list = T.emptyArray,
                _.prototype.user_conv_custom_tag_limit = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.user_custom_tag_meta_info_limit = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.tag_meta_info_list && _.tag_meta_info_list.length)
                        for (var P = 0; P < _.tag_meta_info_list.length; ++P)
                            E.im_proto.TagMetaInfo.encode(_.tag_meta_info_list[P], O.uint32(10).fork()).ldelim();
                    if (O.uint32(16).int64(_.user_conv_tag_limit),
                    null != _.user_custom_tag_meta_info_list && _.user_custom_tag_meta_info_list.length)
                        for (var P = 0; P < _.user_custom_tag_meta_info_list.length; ++P)
                            E.im_proto.TagMetaInfo.encode(_.user_custom_tag_meta_info_list[P], O.uint32(26).fork()).ldelim();
                    return O.uint32(32).int64(_.user_conv_custom_tag_limit),
                    O.uint32(40).int64(_.user_custom_tag_meta_info_limit),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetTagMetaInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.tag_meta_info_list && j.tag_meta_info_list.length || (j.tag_meta_info_list = []),
                            j.tag_meta_info_list.push(E.im_proto.TagMetaInfo.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.user_conv_tag_limit = _.int64();
                            break;
                        case 3:
                            j.user_custom_tag_meta_info_list && j.user_custom_tag_meta_info_list.length || (j.user_custom_tag_meta_info_list = []),
                            j.user_custom_tag_meta_info_list.push(E.im_proto.TagMetaInfo.decode(_, _.uint32()));
                            break;
                        case 4:
                            j.user_conv_custom_tag_limit = _.int64();
                            break;
                        case 5:
                            j.user_custom_tag_meta_info_limit = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("user_conv_tag_limit"))
                        throw T.ProtocolError("missing required 'user_conv_tag_limit'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("user_conv_custom_tag_limit"))
                        throw T.ProtocolError("missing required 'user_conv_custom_tag_limit'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("user_custom_tag_meta_info_limit"))
                        throw T.ProtocolError("missing required 'user_custom_tag_meta_info_limit'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.SetConversationTagRequestBody = function() {
                function _(_) {
                    if (this.tag_ids = [],
                    this.conv_short_ids = [],
                    this.user_custom_tag_ids = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tag_ids = T.emptyArray,
                _.prototype.conv_short_ids = T.emptyArray,
                _.prototype.is_unset = !1,
                _.prototype.user_custom_tag_ids = T.emptyArray,
                _.prototype.inbox_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.tag_ids && _.tag_ids.length)
                        for (var P = 0; P < _.tag_ids.length; ++P)
                            O.uint32(8).int64(_.tag_ids[P]);
                    if (null != _.conv_short_ids && _.conv_short_ids.length)
                        for (var P = 0; P < _.conv_short_ids.length; ++P)
                            O.uint32(16).int64(_.conv_short_ids[P]);
                    if (O.uint32(24).bool(_.is_unset),
                    null != _.user_custom_tag_ids && _.user_custom_tag_ids.length)
                        for (var P = 0; P < _.user_custom_tag_ids.length; ++P)
                            O.uint32(32).int64(_.user_custom_tag_ids[P]);
                    return O.uint32(40).int32(_.inbox_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SetConversationTagRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            if (j.tag_ids && j.tag_ids.length || (j.tag_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.tag_ids.push(_.int64());
                            else
                                j.tag_ids.push(_.int64());
                            break;
                        case 2:
                            if (j.conv_short_ids && j.conv_short_ids.length || (j.conv_short_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.conv_short_ids.push(_.int64());
                            else
                                j.conv_short_ids.push(_.int64());
                            break;
                        case 3:
                            j.is_unset = _.bool();
                            break;
                        case 4:
                            if (j.user_custom_tag_ids && j.user_custom_tag_ids.length || (j.user_custom_tag_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.user_custom_tag_ids.push(_.int64());
                            else
                                j.user_custom_tag_ids.push(_.int64());
                            break;
                        case 5:
                            j.inbox_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("is_unset"))
                        throw T.ProtocolError("missing required 'is_unset'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("inbox_type"))
                        throw T.ProtocolError("missing required 'inbox_type'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.SetConversationTagResponseBody = function() {
                function _(_) {
                    if (this.failed_conv_short_ids = [],
                    this.settings = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.failed_conv_short_ids = T.emptyArray,
                _.prototype.settings = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.failed_conv_short_ids && _.failed_conv_short_ids.length)
                        for (var P = 0; P < _.failed_conv_short_ids.length; ++P)
                            O.uint32(8).int64(_.failed_conv_short_ids[P]);
                    if (null != _.settings && _.settings.length)
                        for (var P = 0; P < _.settings.length; ++P)
                            E.im_proto.ConversationSettingInfo.encode(_.settings[P], O.uint32(18).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.SetConversationTagResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            if (j.failed_conv_short_ids && j.failed_conv_short_ids.length || (j.failed_conv_short_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_conv_short_ids.push(_.int64());
                            else
                                j.failed_conv_short_ids.push(_.int64());
                            break;
                        case 2:
                            j.settings && j.settings.length || (j.settings = []),
                            j.settings.push(E.im_proto.ConversationSettingInfo.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetConversationsByTagRequestBody = function() {
                function _(_) {
                    if (this.tag_id = [],
                    this.user_custom_tag_id = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tag_id = T.emptyArray,
                _.prototype.user_custom_tag_id = T.emptyArray,
                _.prototype.cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.limit = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.inbox_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.tag_id && _.tag_id.length)
                        for (var P = 0; P < _.tag_id.length; ++P)
                            O.uint32(8).int64(_.tag_id[P]);
                    if (null != _.user_custom_tag_id && _.user_custom_tag_id.length)
                        for (var P = 0; P < _.user_custom_tag_id.length; ++P)
                            O.uint32(16).int64(_.user_custom_tag_id[P]);
                    return O.uint32(24).int64(_.cursor),
                    O.uint32(32).int64(_.limit),
                    O.uint32(40).int32(_.inbox_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationsByTagRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            if (j.tag_id && j.tag_id.length || (j.tag_id = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.tag_id.push(_.int64());
                            else
                                j.tag_id.push(_.int64());
                            break;
                        case 2:
                            if (j.user_custom_tag_id && j.user_custom_tag_id.length || (j.user_custom_tag_id = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.user_custom_tag_id.push(_.int64());
                            else
                                j.user_custom_tag_id.push(_.int64());
                            break;
                        case 3:
                            j.cursor = _.int64();
                            break;
                        case 4:
                            j.limit = _.int64();
                            break;
                        case 5:
                            j.inbox_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("cursor"))
                        throw T.ProtocolError("missing required 'cursor'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("limit"))
                        throw T.ProtocolError("missing required 'limit'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("inbox_type"))
                        throw T.ProtocolError("missing required 'inbox_type'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.GetConversationsByTagResponseBody = function() {
                function _(_) {
                    if (this.conversation_info_list = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_info_list = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.conversation_info_list && _.conversation_info_list.length)
                        for (var P = 0; P < _.conversation_info_list.length; ++P)
                            E.im_proto.ConversationInfoV2.encode(_.conversation_info_list[P], O.uint32(10).fork()).ldelim();
                    return null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(16).bool(_.has_more),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(24).int64(_.next_cursor),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetConversationsByTagResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_info_list && j.conversation_info_list.length || (j.conversation_info_list = []),
                            j.conversation_info_list.push(E.im_proto.ConversationInfoV2.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cursor = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetUserMessageRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.cmd_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.stranger_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.source = "",
                _.prototype.consult_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.notify_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.get_recent_conv_and_msg = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.version && Object.hasOwnProperty.call(_, "version") && O.uint32(8).int64(_.version),
                    null != _.cmd_index && Object.hasOwnProperty.call(_, "cmd_index") && O.uint32(16).int64(_.cmd_index),
                    null != _.stranger_version && Object.hasOwnProperty.call(_, "stranger_version") && O.uint32(24).int64(_.stranger_version),
                    null != _.read_version && Object.hasOwnProperty.call(_, "read_version") && O.uint32(32).int64(_.read_version),
                    null != _.source && Object.hasOwnProperty.call(_, "source") && O.uint32(42).string(_.source),
                    null != _.consult_version && Object.hasOwnProperty.call(_, "consult_version") && O.uint32(48).int64(_.consult_version),
                    null != _.notify_version && Object.hasOwnProperty.call(_, "notify_version") && O.uint32(136).int64(_.notify_version),
                    null != _.get_recent_conv_and_msg && Object.hasOwnProperty.call(_, "get_recent_conv_and_msg") && E.im_proto.GetRecentConvAndMsgRequestBody.encode(_.get_recent_conv_and_msg, O.uint32(146).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetUserMessageRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.version = _.int64();
                            break;
                        case 2:
                            j.cmd_index = _.int64();
                            break;
                        case 3:
                            j.stranger_version = _.int64();
                            break;
                        case 4:
                            j.read_version = _.int64();
                            break;
                        case 5:
                            j.source = _.string();
                            break;
                        case 6:
                            j.consult_version = _.int64();
                            break;
                        case 17:
                            j.notify_version = _.int64();
                            break;
                        case 18:
                            j.get_recent_conv_and_msg = E.im_proto.GetRecentConvAndMsgRequestBody.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetRecentConvAndMsgRequestBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.left_side = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.right_side = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.direction = 1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.left_side && Object.hasOwnProperty.call(_, "left_side") && O.uint32(8).int64(_.left_side),
                    null != _.right_side && Object.hasOwnProperty.call(_, "right_side") && O.uint32(16).int64(_.right_side),
                    null != _.direction && Object.hasOwnProperty.call(_, "direction") && O.uint32(24).int32(_.direction),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetRecentConvAndMsgRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.left_side = _.int64();
                            break;
                        case 2:
                            j.right_side = _.int64();
                            break;
                        case 3:
                            j.direction = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetUserMessageResponseBody = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = null,
                _.prototype.cmd_messages = null,
                _.prototype.has_stranger_message = !1,
                _.prototype.read_info = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.messages && Object.hasOwnProperty.call(_, "messages") && E.im_proto.GetRecentMessageRespBody.encode(_.messages, O.uint32(10).fork()).ldelim(),
                    null != _.cmd_messages && Object.hasOwnProperty.call(_, "cmd_messages") && E.im_proto.GetCmdMessageRespBody.encode(_.cmd_messages, O.uint32(18).fork()).ldelim(),
                    null != _.has_stranger_message && Object.hasOwnProperty.call(_, "has_stranger_message") && O.uint32(24).bool(_.has_stranger_message),
                    null != _.read_info && Object.hasOwnProperty.call(_, "read_info") && E.im_proto.ConversationReadInfoRespBody.encode(_.read_info, O.uint32(34).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetUserMessageResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages = E.im_proto.GetRecentMessageRespBody.decode(_, _.uint32());
                            break;
                        case 2:
                            j.cmd_messages = E.im_proto.GetCmdMessageRespBody.decode(_, _.uint32());
                            break;
                        case 3:
                            j.has_stranger_message = _.bool();
                            break;
                        case 4:
                            j.read_info = E.im_proto.ConversationReadInfoRespBody.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.GetRecentMessageRespBody = function() {
                function _(_) {
                    if (this.messages = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.next_conversation_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.messages = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.range = null,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.next_conversation_version),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.ConversationRecentMessage.encode(_.messages[P], O.uint32(18).fork()).ldelim();
                    return O.uint32(24).bool(_.has_more),
                    null != _.range && Object.hasOwnProperty.call(_, "range") && E.im_proto.GetRecentMsgVersionRange.encode(_.range, O.uint32(34).fork()).ldelim(),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetRecentMessageRespBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.next_conversation_version = _.int64();
                            break;
                        case 2:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.ConversationRecentMessage.decode(_, _.uint32()));
                            break;
                        case 3:
                            j.has_more = _.bool();
                            break;
                        case 4:
                            j.range = E.im_proto.GetRecentMsgVersionRange.decode(_, _.uint32());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("next_conversation_version"))
                        throw T.ProtocolError("missing required 'next_conversation_version'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("has_more"))
                        throw T.ProtocolError("missing required 'has_more'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.GetCmdMessageRespBody = function() {
                function _(_) {
                    if (this.messages = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_cmd_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.next_user_message_cursor = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.readconv_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    return O.uint32(16).bool(_.has_more),
                    null != _.next_cmd_index && Object.hasOwnProperty.call(_, "next_cmd_index") && O.uint32(24).int64(_.next_cmd_index),
                    null != _.next_user_message_cursor && Object.hasOwnProperty.call(_, "next_user_message_cursor") && O.uint32(32).int64(_.next_user_message_cursor),
                    null != _.readconv_version && Object.hasOwnProperty.call(_, "readconv_version") && O.uint32(40).int64(_.readconv_version),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetCmdMessageRespBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_cmd_index = _.int64();
                            break;
                        case 4:
                            j.next_user_message_cursor = _.int64();
                            break;
                        case 5:
                            j.readconv_version = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("has_more"))
                        throw T.ProtocolError("missing required 'has_more'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.ConversationReadInfoRespBody = function() {
                function _(_) {
                    if (this.read_info = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.read_info = T.emptyArray,
                _.prototype.has_more = !1,
                _.prototype.next_version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.read_info && _.read_info.length)
                        for (var P = 0; P < _.read_info.length; ++P)
                            E.im_proto.ConversationReadInfo.encode(_.read_info[P], O.uint32(10).fork()).ldelim();
                    return O.uint32(16).bool(_.has_more),
                    O.uint32(24).int64(_.next_version),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationReadInfoRespBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.read_info && j.read_info.length || (j.read_info = []),
                            j.read_info.push(E.im_proto.ConversationReadInfo.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.has_more = _.bool();
                            break;
                        case 3:
                            j.next_version = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("has_more"))
                        throw T.ProtocolError("missing required 'has_more'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("next_version"))
                        throw T.ProtocolError("missing required 'next_version'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.ConversationRecentMessage = function() {
                function _(_) {
                    if (this.messages = [],
                    this.ext_messages = [],
                    this.mute_badge_count_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.conversation_short_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.messages = T.emptyArray,
                _.prototype.version = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.badge_count = 0,
                _.prototype.conversation_id = "",
                _.prototype.ext_messages = T.emptyArray,
                _.prototype.mute_badge_count_infos = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.conversation_short_id),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.messages[P], O.uint32(18).fork()).ldelim();
                    if (O.uint32(24).int64(_.version),
                    null != _.badge_count && Object.hasOwnProperty.call(_, "badge_count") && O.uint32(32).int32(_.badge_count),
                    O.uint32(42).string(_.conversation_id),
                    null != _.ext_messages && _.ext_messages.length)
                        for (var P = 0; P < _.ext_messages.length; ++P)
                            E.im_proto.MessageBody.encode(_.ext_messages[P], O.uint32(50).fork()).ldelim();
                    if (null != _.mute_badge_count_infos && _.mute_badge_count_infos.length)
                        for (var P = 0; P < _.mute_badge_count_infos.length; ++P)
                            E.im_proto.MuteBadgeCountInfo.encode(_.mute_badge_count_infos[P], O.uint32(74).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationRecentMessage; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.conversation_short_id = _.int64();
                            break;
                        case 2:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 3:
                            j.version = _.int64();
                            break;
                        case 4:
                            j.badge_count = _.int32();
                            break;
                        case 5:
                            j.conversation_id = _.string();
                            break;
                        case 6:
                            j.ext_messages && j.ext_messages.length || (j.ext_messages = []),
                            j.ext_messages.push(E.im_proto.MessageBody.decode(_, _.uint32()));
                            break;
                        case 9:
                            j.mute_badge_count_infos && j.mute_badge_count_infos.length || (j.mute_badge_count_infos = []),
                            j.mute_badge_count_infos.push(E.im_proto.MuteBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("conversation_short_id"))
                        throw T.ProtocolError("missing required 'conversation_short_id'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("version"))
                        throw T.ProtocolError("missing required 'version'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("conversation_id"))
                        throw T.ProtocolError("missing required 'conversation_id'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.GetRecentMsgVersionRange = function() {
                function _(_) {
                    if (_)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.left_side = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.right_side = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    return O || (O = C.create()),
                    null != _.left_side && Object.hasOwnProperty.call(_, "left_side") && O.uint32(8).int64(_.left_side),
                    null != _.right_side && Object.hasOwnProperty.call(_, "right_side") && O.uint32(16).int64(_.right_side),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.GetRecentMsgVersionRange; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.left_side = _.int64();
                            break;
                        case 2:
                            j.right_side = _.int64();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _.ConversationReadInfo = function() {
                function _(_) {
                    if (this.mute_read_badge_count_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.read_index = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_badge_count = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.read_index_v2 = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ConversationShortId = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.ConversationId = "",
                _.prototype.mute_read_badge_count_infos = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.read_index),
                    O.uint32(16).int64(_.read_badge_count),
                    O.uint32(24).int64(_.read_index_v2),
                    O.uint32(32).int64(_.ConversationShortId),
                    null != _.ConversationId && Object.hasOwnProperty.call(_, "ConversationId") && O.uint32(42).string(_.ConversationId),
                    null != _.mute_read_badge_count_infos && _.mute_read_badge_count_infos.length)
                        for (var P = 0; P < _.mute_read_badge_count_infos.length; ++P)
                            E.im_proto.MuteReadBadgeCountInfo.encode(_.mute_read_badge_count_infos[P], O.uint32(50).fork()).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ConversationReadInfo; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.read_index = _.int64();
                            break;
                        case 2:
                            j.read_badge_count = _.int64();
                            break;
                        case 3:
                            j.read_index_v2 = _.int64();
                            break;
                        case 4:
                            j.ConversationShortId = _.int64();
                            break;
                        case 5:
                            j.ConversationId = _.string();
                            break;
                        case 6:
                            j.mute_read_badge_count_infos && j.mute_read_badge_count_infos.length || (j.mute_read_badge_count_infos = []),
                            j.mute_read_badge_count_infos.push(E.im_proto.MuteReadBadgeCountInfo.decode(_, _.uint32()));
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("read_index"))
                        throw T.ProtocolError("missing required 'read_index'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("read_badge_count"))
                        throw T.ProtocolError("missing required 'read_badge_count'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("read_index_v2"))
                        throw T.ProtocolError("missing required 'read_index_v2'", {
                            instance: j
                        });
                    if (!j.hasOwnProperty("ConversationShortId"))
                        throw T.ProtocolError("missing required 'ConversationShortId'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.AddUserCustomTagMetaInfo = function() {
                function _(_) {
                    if (this.ext = {},
                    this.init_conv_short_ids = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tag_name = "",
                _.prototype.ext = T.emptyObject,
                _.prototype.init_conv_short_ids = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(10).string(_.tag_name),
                    null != _.ext && Object.hasOwnProperty.call(_, "ext"))
                        for (var P = Object.keys(_.ext), j = 0; j < P.length; ++j)
                            O.uint32(18).fork().uint32(10).string(P[j]).uint32(18).string(_.ext[P[j]]).ldelim();
                    if (null != _.init_conv_short_ids && _.init_conv_short_ids.length)
                        for (var j = 0; j < _.init_conv_short_ids.length; ++j)
                            O.uint32(24).int64(_.init_conv_short_ids[j]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.AddUserCustomTagMetaInfo; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.tag_name = _.string();
                            break;
                        case 2:
                            B.ext === T.emptyObject && (B.ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.ext[P] = j;
                            break;
                        case 3:
                            if (B.init_conv_short_ids && B.init_conv_short_ids.length || (B.init_conv_short_ids = []),
                            (7 & C) == 2)
                                for (var M = _.uint32() + _.pos; _.pos < M; )
                                    B.init_conv_short_ids.push(_.int64());
                            else
                                B.init_conv_short_ids.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    if (!B.hasOwnProperty("tag_name"))
                        throw T.ProtocolError("missing required 'tag_name'", {
                            instance: B
                        });
                    return B
                }
                ,
                _
            }(),
            _.AddUserCustomTagMetaInfoResult = function() {
                function _(_) {
                    if (this.failed_conversation_ids = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tag_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.failed_conversation_ids = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.tag_id),
                    null != _.failed_conversation_ids && _.failed_conversation_ids.length)
                        for (var P = 0; P < _.failed_conversation_ids.length; ++P)
                            O.uint32(16).int64(_.failed_conversation_ids[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.AddUserCustomTagMetaInfoResult; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.tag_id = _.int64();
                            break;
                        case 2:
                            if (j.failed_conversation_ids && j.failed_conversation_ids.length || (j.failed_conversation_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.failed_conversation_ids.push(_.int64());
                            else
                                j.failed_conversation_ids.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("tag_id"))
                        throw T.ProtocolError("missing required 'tag_id'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.UpdateUserCustomTagMetaInfo = function() {
                function _(_) {
                    if (this.upsert_ext = {},
                    this.delete_ext = {},
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.tag_id = T.Long ? T.Long.fromBits(0, 0, !1) : 0,
                _.prototype.tag_name = "",
                _.prototype.upsert_ext = T.emptyObject,
                _.prototype.delete_ext = T.emptyObject,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    O.uint32(8).int64(_.tag_id),
                    null != _.tag_name && Object.hasOwnProperty.call(_, "tag_name") && O.uint32(18).string(_.tag_name),
                    null != _.upsert_ext && Object.hasOwnProperty.call(_, "upsert_ext"))
                        for (var P = Object.keys(_.upsert_ext), j = 0; j < P.length; ++j)
                            O.uint32(26).fork().uint32(10).string(P[j]).uint32(18).string(_.upsert_ext[P[j]]).ldelim();
                    if (null != _.delete_ext && Object.hasOwnProperty.call(_, "delete_ext"))
                        for (var P = Object.keys(_.delete_ext), j = 0; j < P.length; ++j)
                            O.uint32(34).fork().uint32(10).string(P[j]).uint32(18).string(_.delete_ext[P[j]]).ldelim();
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P, j, R = void 0 === O ? _.len : _.pos + O, B = new E.im_proto.UpdateUserCustomTagMetaInfo; _.pos < R; ) {
                        var C = _.uint32();
                        switch (C >>> 3) {
                        case 1:
                            B.tag_id = _.int64();
                            break;
                        case 2:
                            B.tag_name = _.string();
                            break;
                        case 3:
                            B.upsert_ext === T.emptyObject && (B.upsert_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.upsert_ext[P] = j;
                            break;
                        case 4:
                            B.delete_ext === T.emptyObject && (B.delete_ext = {});
                            var M = _.uint32() + _.pos;
                            for (P = "",
                            j = ""; _.pos < M; ) {
                                var I = _.uint32();
                                switch (I >>> 3) {
                                case 1:
                                    P = _.string();
                                    break;
                                case 2:
                                    j = _.string();
                                    break;
                                default:
                                    _.skipType(7 & I)
                                }
                            }
                            B.delete_ext[P] = j;
                            break;
                        default:
                            _.skipType(7 & C)
                        }
                    }
                    if (!B.hasOwnProperty("tag_id"))
                        throw T.ProtocolError("missing required 'tag_id'", {
                            instance: B
                        });
                    return B
                }
                ,
                _
            }(),
            _.ManageTagMetaInfoRequestBody = function() {
                function _(_) {
                    if (this.add_tag_meta_infos = [],
                    this.delete_tag_ids = [],
                    this.update_tag_meta_infos = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.add_tag_meta_infos = T.emptyArray,
                _.prototype.delete_tag_ids = T.emptyArray,
                _.prototype.update_tag_meta_infos = T.emptyArray,
                _.prototype.inbox_type = 0,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.add_tag_meta_infos && _.add_tag_meta_infos.length)
                        for (var P = 0; P < _.add_tag_meta_infos.length; ++P)
                            E.im_proto.AddUserCustomTagMetaInfo.encode(_.add_tag_meta_infos[P], O.uint32(10).fork()).ldelim();
                    if (null != _.delete_tag_ids && _.delete_tag_ids.length)
                        for (var P = 0; P < _.delete_tag_ids.length; ++P)
                            O.uint32(16).int64(_.delete_tag_ids[P]);
                    if (null != _.update_tag_meta_infos && _.update_tag_meta_infos.length)
                        for (var P = 0; P < _.update_tag_meta_infos.length; ++P)
                            E.im_proto.UpdateUserCustomTagMetaInfo.encode(_.update_tag_meta_infos[P], O.uint32(26).fork()).ldelim();
                    return O.uint32(32).int32(_.inbox_type),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ManageTagMetaInfoRequestBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.add_tag_meta_infos && j.add_tag_meta_infos.length || (j.add_tag_meta_infos = []),
                            j.add_tag_meta_infos.push(E.im_proto.AddUserCustomTagMetaInfo.decode(_, _.uint32()));
                            break;
                        case 2:
                            if (j.delete_tag_ids && j.delete_tag_ids.length || (j.delete_tag_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.delete_tag_ids.push(_.int64());
                            else
                                j.delete_tag_ids.push(_.int64());
                            break;
                        case 3:
                            j.update_tag_meta_infos && j.update_tag_meta_infos.length || (j.update_tag_meta_infos = []),
                            j.update_tag_meta_infos.push(E.im_proto.UpdateUserCustomTagMetaInfo.decode(_, _.uint32()));
                            break;
                        case 4:
                            j.inbox_type = _.int32();
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    if (!j.hasOwnProperty("inbox_type"))
                        throw T.ProtocolError("missing required 'inbox_type'", {
                            instance: j
                        });
                    return j
                }
                ,
                _
            }(),
            _.ManageTagMetaInfoResponseBody = function() {
                function _(_) {
                    if (this.add_results = [],
                    this.delete_failed_tag_ids = [],
                    this.update_failed_tag_ids = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.add_results = T.emptyArray,
                _.prototype.delete_failed_tag_ids = T.emptyArray,
                _.prototype.update_failed_tag_ids = T.emptyArray,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = C.create()),
                    null != _.add_results && _.add_results.length)
                        for (var P = 0; P < _.add_results.length; ++P)
                            E.im_proto.AddUserCustomTagMetaInfoResult.encode(_.add_results[P], O.uint32(10).fork()).ldelim();
                    if (null != _.delete_failed_tag_ids && _.delete_failed_tag_ids.length)
                        for (var P = 0; P < _.delete_failed_tag_ids.length; ++P)
                            O.uint32(16).int64(_.delete_failed_tag_ids[P]);
                    if (null != _.update_failed_tag_ids && _.update_failed_tag_ids.length)
                        for (var P = 0; P < _.update_failed_tag_ids.length; ++P)
                            O.uint32(24).int64(_.update_failed_tag_ids[P]);
                    return O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof x || (_ = x.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new E.im_proto.ManageTagMetaInfoResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.add_results && j.add_results.length || (j.add_results = []),
                            j.add_results.push(E.im_proto.AddUserCustomTagMetaInfoResult.decode(_, _.uint32()));
                            break;
                        case 2:
                            if (j.delete_failed_tag_ids && j.delete_failed_tag_ids.length || (j.delete_failed_tag_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.delete_failed_tag_ids.push(_.int64());
                            else
                                j.delete_failed_tag_ids.push(_.int64());
                            break;
                        case 3:
                            if (j.update_failed_tag_ids && j.update_failed_tag_ids.length || (j.update_failed_tag_ids = []),
                            (7 & R) == 2)
                                for (var B = _.uint32() + _.pos; _.pos < B; )
                                    j.update_failed_tag_ids.push(_.int64());
                            else
                                j.update_failed_tag_ids.push(_.int64());
                            break;
                        default:
                            _.skipType(7 & R)
                        }
                    }
                    return j
                }
                ,
                _
            }(),
            _
        }
        )()
    },
    18475: function(_, O, P) {
        "use strict";
        P.d(O, {
            v: function() {
                return C
            }
        });
        var j = P(57332);
        P(35766);
        var R = P(90915)
          , B = P(3524);
        P(96438),
        P(30626);
        var x = P(65402);
        class C extends x.v {
            constructor() {
                super(...arguments),
                this.name = "SharkPlugin",
                this.enabled = !0
            }
            install() {
                this.register(B.Uk.SharkPlugin, this);
                try {
                    (void 0 === this.ctx.option.sharkAppName || void 0 === this.ctx.option.sharkPriorityRegion) && (R.Y.ctxWarn(this.ctx, "shark required field not provided, ignore shark params"),
                    this.enabled = !1),
                    "undefined" == typeof navigator && R.Y.ctxWarn(this.ctx, "window.navigator not available, may missing param"),
                    "undefined" == typeof screen && R.Y.ctxWarn(this.ctx, "window.screen not available, may missing param"),
                    "undefined" == typeof document && R.Y.ctxWarn(this.ctx, "window.document not available, may missing param"),
                    "undefined" != typeof Intl && "undefined" != typeof Intl && "function" == typeof Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat().resolvedOptions || R.Y.ctxWarn(this.ctx, "window.Intl not available, may missing param")
                } catch (_) {
                    R.Y.ctxError(this.ctx, "shark init error:", _),
                    this.enabled = !1
                }
            }
            sendPacket(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    return this.enabled && this.fillSharkParam(_),
                    _
                })
            }
            fillSharkParam(_) {
                var O, P, j, B, x, C, T, E, M, I, L, S, A, q, G, N, U;
                let V = {};
                try {
                    V.session_aid = null !== (O = this.ctx.option.appId.toString()) && void 0 !== O ? O : "",
                    V.session_did = null !== (P = this.ctx.option.deviceId.toString()) && void 0 !== P ? P : "",
                    V.app_name = this.ctx.option.sharkAppName,
                    V.priority_region = this.ctx.option.sharkPriorityRegion,
                    "undefined" != typeof navigator && (V.user_agent = null !== (j = navigator.userAgent) && void 0 !== j ? j : "",
                    V.cookie_enabled = null !== (x = null === (B = navigator.cookieEnabled) || void 0 === B ? void 0 : B.toString()) && void 0 !== x ? x : "",
                    V.browser_language = null !== (C = navigator.language) && void 0 !== C ? C : "",
                    V.browser_platform = null !== (T = navigator.platform) && void 0 !== T ? T : "",
                    V.browser_name = null !== (E = navigator.appCodeName) && void 0 !== E ? E : "",
                    V.browser_version = null !== (M = navigator.appVersion) && void 0 !== M ? M : "",
                    V.browser_online = null !== (L = null === (I = navigator.onLine) || void 0 === I ? void 0 : I.toString()) && void 0 !== L ? L : ""),
                    "undefined" != typeof screen && (V.screen_width = null !== (A = null === (S = screen.width) || void 0 === S ? void 0 : S.toString()) && void 0 !== A ? A : "",
                    V.screen_height = null !== (G = null === (q = screen.height) || void 0 === q ? void 0 : q.toString()) && void 0 !== G ? G : ""),
                    "undefined" != typeof document && (V.referer = null !== (N = document.referrer) && void 0 !== N ? N : ""),
                    "undefined" != typeof Intl && "function" == typeof Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat().resolvedOptions && (V.timezone_name = null !== (U = Intl.DateTimeFormat().resolvedOptions().timeZone) && void 0 !== U ? U : "")
                } catch (_) {
                    R.Y.ctxWarn(this.ctx, "load shark param error, may missing param", _)
                }
                _.headers = Object.assign(Object.assign({}, _.headers), V)
            }
        }
    },
    75658: function(_, O, P) {
        "use strict";
        P.d(O, {
            l: function() {
                return V
            }
        });
        var j = P(57332)
          , R = P(35766)
          , B = P(53940)
          , x = P(88048)
          , C = P(90915)
          , T = P(3524)
          , E = P(50557)
          , M = P(42088)
          , I = P(70476);
        P(30626);
        var L = P(65402)
          , S = P(55308);
        P(96438);
        class A extends S.W {
            GetStrangerConversationList(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let O = B.m.RequestBody.create({
                        get_stranger_conversation_body: {
                            cursor: _.cursor,
                            count: R.fromValue(_.limit),
                            show_total_unread: !0
                        }
                    });
                    return this.sendWithRawBody(O, B.m.IMCMD.GET_STRANGER_CONVERSATION_LIST)
                })
            }
            GetStrangerConversationMessage(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let O = B.m.RequestBody.create({
                        get_stranger_messages_body: {
                            conversation_short_id: _.shortId,
                            reset_unread_count: _.resetUnreadCount
                        }
                    });
                    return this.sendWithRawBody(O, B.m.IMCMD.GET_STRANGER_MESSAGES_IN_CONVERSATION)
                })
            }
            DeleteStrangerMessage(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let O = B.m.RequestBody.create({
                        delete_stranger_message_body: {
                            conversation_short_id: _.shortId,
                            server_message_id: _.serverId
                        }
                    });
                    return this.send(O, B.m.IMCMD.DELETE_STRANGER_MESSAGE)
                })
            }
            DeleteStrangerConversation(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let O = B.m.RequestBody.create({
                        delete_stranger_conversation_body: {
                            conversation_short_id: _.shortId
                        }
                    });
                    return this.send(O, B.m.IMCMD.DELETE_STRANGER_CONVERSATION)
                })
            }
            MarkStrangerConversationRead(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let O = B.m.RequestBody.create({
                        mark_stranger_conversation_read_body: {
                            conversation_short_id: _.shortId
                        }
                    });
                    return this.send(O, B.m.IMCMD.MARK_STRANGER_CONVERSATION_READ)
                })
            }
            MarkAllStrangerConversationRead() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let _ = B.m.RequestBody.create({
                        mark_stranger_all_conversation_read_body: {}
                    });
                    return this.send(_, B.m.IMCMD.MARK_ALL_STRANGER_CONVERSATIONS_READ)
                })
            }
            DeleteAllStrangerConversation() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let _ = B.m.RequestBody.create({
                        delete_stranger_all_conversation_body: {}
                    });
                    return this.send(_, B.m.IMCMD.DELETE_ALL_STRANGER_CONVERSATIONS)
                })
            }
        }
        var q = P(19789);
        class G extends q.r {
            get unreadCount() {
                return this.internalUnreadCount
            }
            set unreadCount(_) {
                this.internalUnreadCount = _
            }
            get mode() {
                let _ = this.toParticipantUserId
                  , O = this.id.split(":");
                return O[2] === _ ? 1 : O[3] === _ ? 2 : 3
            }
            get ext() {
                return this.coreInfo.ext
            }
            set ext(_) {
                this.coreInfo.ext = _
            }
        }
        var N = P(29072);
        class U extends N.f {
            process(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    if (_.data.type === B.m.MessageType.MESSAGE_TYPE_MODE_CHANGE) {
                        let O = this.resolve(T.Uk.ConversationManager).getRaw(_.data.conversationId);
                        if (!O)
                            return C.Y.ctxDebug(this.ctx, `conversation ${_.data.conversationId} not exist, ignore upgrade`),
                            _;
                        if (!O.isStrangerConversation)
                            return C.Y.ctxDebug(this.ctx, `conversation ${_.data.conversationId} not stranger, ignore upgrade`),
                            _;
                        this.resolve(T.Uk.ConversationManager).delete(_.data.conversationId);
                        let P = yield this.resolve(T.Uk.ConversationManager).getWithOnline(_.data.conversationId, _.data.conversationShortId, _.data.conversationType);
                        this.resolve(T.Uk.ConversationManager).markRead(P.id, P.lastMessageIndex, P.badgeCount, []),
                        C.Y.ctxDebug(this.ctx, "stranger upgrade,", P),
                        this.resolve(T.Uk.EventBus).emit(x.c5.StrangerUpgrade, this, P),
                        _.needContinue = !1
                    }
                    return _
                })
            }
        }
        class V extends L.v {
            constructor() {
                super(...arguments),
                this.name = "StrangerPlugin",
                this.internalUnreadCount = 0
            }
            getStrangerConversationList(_={}) {
                var O, P, x, C, L, S, A;
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let j = yield this.api.GetStrangerConversationList({
                        cursor: _.cursor ? R.fromValue(_.cursor) : R.ZERO,
                        limit: null !== (O = _.limit) && void 0 !== O ? O : 10
                    })
                      , q = null === (P = j.body) || void 0 === P ? void 0 : P.get_stranger_conversation_body
                      , N = q.conversation_list;
                    this.internalUnreadCount = q.total_unread;
                    let U = !1;
                    if ((null === (x = _.cursor) || void 0 === x ? void 0 : x.toString()) === "0" && 1 === _.limit) {
                        let _ = yield this.getStrangerPreview({
                            sync: !1
                        });
                        N && 1 === N.length && (null === (C = null == _ ? void 0 : _.conversation) || void 0 === C ? void 0 : C.id) === N[0].conversation_id && (null === (L = null == _ ? void 0 : _.message) || void 0 === L ? void 0 : L.serverId) === (null === (A = null === (S = N[0].last_message) || void 0 === S ? void 0 : S.server_message_id) || void 0 === A ? void 0 : A.toString()) && (null == _ ? void 0 : _.unreadCount) === (null == q ? void 0 : q.total_unread) && (U = !0)
                    }
                    let V = N.map(_=>{
                        var O;
                        let P = new G(this.ctx);
                        if (P.coreInfo = new E._(P),
                        P.settingInfo = new M.H(P),
                        P.id = _.conversation_id,
                        P.shortId = _.conversation_short_id.toString(),
                        P.type = B.m.ConversationType.ONE_TO_ONE_CHAT,
                        P.unreadCount = _.unread,
                        P.isOffline = !1,
                        P.firstPageParticipant = B.m.ParticipantsPage.create({
                            participants: _.participants
                        }),
                        P.ext = null !== (O = _.ext) && void 0 !== O ? O : {},
                        !U) {
                            this.resolve(T.Uk.ConversationManager).upsert(P);
                            let O = I.v.fromServerMessage(this.ctx, _.last_message, j.log_id);
                            this.resolve(T.Uk.MessageManager).upsert(O)
                        }
                        return P
                    }
                    );
                    return {
                        conversation: V,
                        unreadCount: null == q ? void 0 : q.total_unread,
                        hasMore: null == q ? void 0 : q.has_more,
                        cursor: null == q ? void 0 : q.next_cursor
                    }
                })
            }
            getStrangerConversationMessage(_) {
                var O, P;
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let j = yield this.api.GetStrangerConversationMessage({
                        shortId: R.fromString(_.conversation.shortId),
                        resetUnreadCount: null !== (O = _.resetUnreadCount) && void 0 !== O && O
                    })
                      , B = null === (P = j.body) || void 0 === P ? void 0 : P.get_stranger_messages_body
                      , x = B.messages;
                    return x.forEach(_=>this.resolve(T.Uk.MessageManager).upsert(I.v.fromServerMessage(this.ctx, _, j.log_id))),
                    this.resolve(T.Uk.MessageManager).getList(_.conversation.id)
                })
            }
            deleteStrangerMessage(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    yield this.api.DeleteStrangerMessage({
                        serverId: R.fromString(_.message.serverId),
                        shortId: R.fromString(_.conversation.shortId)
                    }),
                    this.resolve(T.Uk.MessageManager).delete(_.conversation.id, _.message.serverId)
                })
            }
            deleteStrangerConversation(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    yield this.api.DeleteStrangerConversation({
                        shortId: R.fromString(_.conversation.shortId)
                    }),
                    this.resolve(T.Uk.ConversationManager).delete(_.conversation.id)
                })
            }
            deleteAllStrangerConversation() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    yield this.api.DeleteAllStrangerConversation();
                    let _ = this.resolve(T.Uk.ConversationManager).getConversationArray(_=>0 !== _.mode);
                    _.forEach(_=>this.resolve(T.Uk.ConversationManager).delete(_.id)),
                    this.internalUnreadCount = 0
                })
            }
            markStrangerConversationRead(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    yield this.api.MarkStrangerConversationRead({
                        shortId: R.fromString(_.conversation.shortId)
                    }),
                    this.internalUnreadCount -= _.conversation.unreadCount,
                    _.conversation.unreadCount = 0,
                    this.resolve(T.Uk.ConversationManager).upsert(_.conversation)
                })
            }
            markAllStrangerConversationRead() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    yield this.api.MarkAllStrangerConversationRead();
                    let _ = this.resolve(T.Uk.ConversationManager).getConversationArray(_=>0 !== _.mode);
                    _.forEach(_=>{
                        _.unreadCount = 0,
                        this.resolve(T.Uk.ConversationManager).upsert(_)
                    }
                    ),
                    this.internalUnreadCount = 0
                })
            }
            getStrangerTotalUnread() {
                return this.internalUnreadCount
            }
            getStrangerPreview(_={}) {
                var O;
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let P = yield this.refreshStrangerPreviewConversation(null !== (O = null == _ ? void 0 : _.sync) && void 0 !== O && O);
                    return P ? {
                        conversation: P,
                        message: P.lastVisibleMessage,
                        unreadCount: this.internalUnreadCount
                    } : null
                })
            }
            getLocalStrangerConversation() {
                return this.resolve(T.Uk.ConversationManager).getConversationArray(_=>0 !== _.mode)
            }
            install() {
                this.api = this.register(T.Uk.StrangerApi, A),
                this.register(T.Uk.StrangerPlugin, this),
                this.instance.getStrangerConversationList = this.extendFunc(this.getStrangerConversationList),
                this.instance.getStrangerConversationMessage = this.extendFunc(this.getStrangerConversationMessage),
                this.instance.deleteStrangerMessage = this.extendFunc(this.deleteStrangerMessage),
                this.instance.deleteStrangerConversation = this.extendFunc(this.deleteStrangerConversation),
                this.instance.deleteAllStrangerConversation = this.extendFunc(this.deleteAllStrangerConversation),
                this.instance.markStrangerConversationRead = this.extendFunc(this.markStrangerConversationRead),
                this.instance.markAllStrangerConversationRead = this.extendFunc(this.markAllStrangerConversationRead),
                this.instance.getStrangerTotalUnread = this.extendFunc(this.getStrangerTotalUnread),
                this.instance.getStrangerPreview = this.extendFunc(this.getStrangerPreview),
                this.instance.getLocalStrangerConversation = this.extendFunc(this.getLocalStrangerConversation),
                this.resolve(T.Uk.MessageManager).injectProcessor(new U(this.ctx)),
                this.resolve(T.Uk.EventBus).subscribe(x.c5.StrangerUpgrade, _=>(0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    yield this.resolve(T.Uk.CoreInstance).getMessagesByUser({
                        inboxType: _.inboxType
                    })
                }))
            }
            init() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    try {
                        yield this.getStrangerPreview({
                            sync: !0
                        })
                    } catch (_) {
                        C.Y.ctxWarn(this.ctx, "stranger plugin init error:", _)
                    }
                })
            }
            receivePacket(_) {
                var O;
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    if (_.cmd === B.m.IMCMD.STRANGER_NEW_MSG_NOTIFY) {
                        let P = null === (O = _.body) || void 0 === O ? void 0 : O.has_new_message_notify.message
                          , j = this.resolve(T.Uk.ConversationManager).getRaw(P.conversation_id);
                        if (!j)
                            return;
                        let R = I.v.fromServerMessage(this.ctx, P, _.log_id);
                        this.resolve(T.Uk.MessageManager).upsert(R),
                        this.internalUnreadCount++,
                        this.resolve(T.Uk.EventBus).emit(x.c5.ReceiveNewStrangerMessage, this, R)
                    }
                })
            }
            ticker() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    this.ctx.option.pullInterval && (yield this.refreshStrangerPreviewConversation(!0))
                })
            }
            refreshStrangerPreviewConversation(_=!1) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    _ && (yield this.getStrangerConversationList({
                        cursor: R.ZERO,
                        limit: 1
                    }));
                    let O = this.resolve(T.Uk.ConversationManager).getConversationArray(_=>0 !== _.mode);
                    for (let _ of O)
                        if (_.lastVisibleMessage)
                            return _;
                    return null
                })
            }
        }
    },
    13998: function(_, O, P) {
        "use strict";
        P.d(O, {
            G: function() {
                return j
            }
        });
        let j = {
            version: "1.1.1",
            branch: "Detached: 3de13e09914ad53e843b91d394ff5b8b4a912769",
            commit: "3de13e0"
        }
    },
    23311: function(_, O, P) {
        "use strict";
        P.d(O, {
            A: function() {
                return H
            }
        });
        var j = P(61712)
          , R = P(57332)
          , B = P(63737);
        class x extends B.KE {
            getConnectionStatus() {
                return (0,
                R.__awaiter)(this, void 0, void 0, function*() {
                    return "undefined" == typeof navigator || void 0 === navigator.onLine ? B.QK.Unknown : navigator.onLine ? B.QK.Connected : B.QK.Disconnected
                })
            }
            getNetworkType() {
                return (0,
                R.__awaiter)(this, void 0, void 0, function*() {
                    let _ = yield this.getConnectionStatus();
                    if (_ === B.QK.Disconnected)
                        return B.td.None;
                    if ("undefined" == typeof navigator || !navigator.connection || !navigator.connection.type)
                        return B.td.Unknown;
                    switch (navigator.connection.type) {
                    case "cellular":
                        if (!navigator.connection.effectiveType)
                            return B.td.Unknown;
                        switch (navigator.connection.effectiveType) {
                        case "2g":
                        case "slow-2g":
                            return B.td.Cellular_2G;
                        case "3g":
                            return B.td.Cellular_3G;
                        case "4g":
                            return B.td.Cellular_4G;
                        case "5g":
                            return B.td.Cellular_5G;
                        default:
                            return B.td.Unknown
                        }
                    case "wifi":
                        return B.td.Wifi;
                    case "other":
                        return B.td.Other;
                    case "none":
                        return B.td.None;
                    default:
                        return B.td.Unknown
                    }
                })
            }
        }
        var C = P(82245)
          , T = P.n(C)
          , E = P(68763);
        class M extends E.Z {
            constructor(_) {
                super(_),
                this.instance = T().create({
                    timeout: this.option.timeout,
                    withCredentials: !!this.option.withCredentials,
                    headers: this.headers,
                    responseType: this.dataType,
                    method: this.method
                })
            }
            send(_, O, P) {
                return (0,
                R.__awaiter)(this, void 0, void 0, function*() {
                    let j = yield this.instance.request({
                        url: _,
                        data: P,
                        method: O
                    });
                    return j.data
                })
            }
            sendByBeacon(_, O) {
                return void 0 !== navigator.sendBeacon && navigator.sendBeacon(_, O)
            }
        }
        var I = P(10754)
          , L = P(90915)
          , S = P(88048);
        class A extends I.v {
            registerEvents() {
                this.ws.onclose = _=>{
                    this.onClose.next(_, this)
                }
                ,
                this.ws.onopen = ()=>{
                    this.onOpen.nextEmpty(this)
                }
                ,
                this.ws.onmessage = _=>{
                    this.onMessage.next(_.data, this)
                }
                ,
                this.ws.onerror = _=>{
                    this.onError.next(_, this)
                }
            }
            open() {
                let _, O;
                if (this.isOpen())
                    return L.Y.ctxWarn(this.ctx, "ws already open, close first"),
                    Promise.resolve(!0);
                this.ws = new WebSocket(this.paramUrl,S.HF.wsProtocols),
                this.ws.binaryType = "arraybuffer",
                this.registerEvents();
                let P = this.onOpen.subscribe(()=>{
                    _(!0),
                    this.onOpen.unsubscribe(P)
                }
                )
                  , j = this.onError.subscribe(_=>{
                    O(_),
                    this.onError.unsubscribe(j)
                }
                );
                return new Promise((P,j)=>{
                    _ = P,
                    O = j
                }
                )
            }
            close() {
                this.ws && (this.ws.onmessage = null,
                this.ws.close()),
                this.ws = void 0
            }
            send(_) {
                this.ws.send(_)
            }
            isOpen() {
                return void 0 !== this.ws && this.ws.readyState === WebSocket.OPEN
            }
        }
        var q = P(69413)
          , G = P(70911);
        let {setIntervalWarp: N, clearIntervalWarp: U, setTimeoutWarp: V, clearTimeoutWarp: D} = q.default;
        class Y extends G.f {
            restart() {
                this.tickTimer && this.stop(),
                this.state = G.N.Running;
                let {enableHackTimer: _} = this.ctx.option
                  , O = _ ? N : setInterval
                  , P = _ ? V : setTimeout;
                this.tickTimer = O(()=>{
                    this.update()
                }
                , this.refreshRate),
                void 0 !== this.doneDuration && (this.doneTimer = P(()=>{
                    this.done()
                }
                , this.doneDuration)),
                this.startTime = Date.now(),
                this.lastStopTime = 0,
                this.update()
            }
            stop() {
                if (this.state === G.N.Stopped)
                    return;
                let {enableHackTimer: _} = this.ctx.option
                  , O = _ ? U : clearInterval
                  , P = _ ? D : clearTimeout;
                O(this.tickTimer),
                P(this.doneTimer),
                this.state = G.N.Stopped,
                this.lastStopTime = Date.now(),
                this.onStop.nextEmpty()
            }
        }
        let F = _=>new x(_)
          , z = _=>new M(_)
          , K = _=>new A(_);
        class H extends j.x {
            initPlatformOptions(_) {
                _.network = _.network || F,
                _.http = _.http || z,
                _.webSocket = _.webSocket || K,
                _.sdkType = _.sdkType || "im-web-sdk"
            }
            createTicker(_, O, P) {
                return new Y(_,O,P)
            }
        }
    },
    85629: function(_, O, P) {
        "use strict";
        P.d(O, {
            f: function() {
                return S
            }
        });
        var j = P(57332)
          , R = P(35766)
          , B = P(53940)
          , x = P(65402)
          , C = P(3524)
          , T = P(90915)
          , E = P(79647)
          , M = P(13352);
        class I extends E.E {
            constructor(_) {
                super(_)
            }
            init() {
                let {appId: _, securityStoreType: O="local", securitySignVersion: P, securityCertType: j="request", securityScene: R=""} = this.ctx.option;
                this.sdk = M.SecureSDK,
                this.sdk.setStorageType(O),
                this.sdk.setConfig({
                    aid: _,
                    scene: R,
                    certType: j,
                    signVersion: P
                }),
                this.sdk.start(),
                this.securityCertType = j,
                this.securityScene = R
            }
            sign(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    let O = yield this.sdk.cryptoSDK.sign({
                        sign_data: _,
                        certType: this.securityCertType,
                        scene: this.securityScene
                    })
                      , P = this.sdk.convertBase64ToString(O);
                    return JSON.parse(P)
                })
            }
            getCert() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    return this.sdk.cryptoSDK.getCertificate({
                        certType: this.securityCertType,
                        scene: this.securityScene
                    })
                })
            }
            getTsSign() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    return this.sdk.cryptoSDK.getTSSign({
                        certType: this.securityCertType,
                        scene: this.securityScene
                    })
                })
            }
            getTicket() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    return this.sdk.cryptoSDK.getTicket({
                        certType: this.securityCertType,
                        scene: this.securityScene
                    })
                })
            }
            setSignValue(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    this.sdk.cryptoSDK.setSignValue({
                        sign: _,
                        scene: this.securityScene
                    })
                })
            }
            getCertSignRequest() {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    return this.sdk.cryptoSDK.getCertSignRequest()
                })
            }
        }
        let L = new Map([[B.m.IMCMD.SEND_MESSAGE, ["send_message_body", "content", "conversation_id", "conversation_short_id"]], [B.m.IMCMD.CREATE_CONVERSATION_V2, ["create_conversation_v2_body", "avatar_url", "idempotent_id", "name", "participants"]], [B.m.IMCMD.ADD_CONVERSATION_PARTICIPANTS, ["conversation_add_participants_body", "conversation_id", "conversation_short_id", "participants"]]]);
        class S extends x.v {
            install() {
                this.isCertAuth && this.register(C.Uk.SecurityProxy, new I(this.ctx))
            }
            sendPacket(_) {
                return (0,
                j.__awaiter)(this, void 0, void 0, function*() {
                    if (this.isCertAuth) {
                        let {cert: O, tsSign: P} = this.ctx.option;
                        if (_.sdk_cert = O || "",
                        _.ts_sign = P || "",
                        L.has(_.cmd)) {
                            let O = L.get(_.cmd)
                              , P = O[0]
                              , j = O.slice(1);
                            j.sort();
                            let B = [];
                            j.forEach(O=>{
                                var j, x;
                                let C = null === (j = _.body) || void 0 === j ? void 0 : j[P]
                                  , T = null !== (x = null == C ? void 0 : C[O]) && void 0 !== x ? x : ""
                                  , E = Array.isArray(T) ? T.map(String).join(",") : R.isLong(T) ? String(T) : T;
                                B.push(`${O}=${E}`)
                            }
                            );
                            try {
                                let {req_sign: O} = yield this.resolve(C.Uk.SecurityProxy).sign(B.join("&"));
                                _.reuqest_sign = O
                            } catch (_) {
                                T.Y.ctxWarn(this.ctx, "request sign fail", _)
                            }
                        }
                    }
                    return _
                })
            }
            get isCertAuth() {
                return this.ctx.option.authType && [B.m.AuthType.CERT_AUTH, B.m.AuthType.PASSPORT_CERT_AUTH].includes(this.ctx.option.authType)
            }
        }
    },
    79307: function(_) {
        !function(O, P) {
            _.exports = P()
        }(0, function() {
            "use strict";
            var _, O, P = 1e3, j = 6e4, R = 36e5, B = 864e5, x = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = 31536e6, T = 2592e6, E = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, M = {
                years: 31536e6,
                months: 2592e6,
                days: 864e5,
                hours: 36e5,
                minutes: 6e4,
                seconds: 1e3,
                milliseconds: 1,
                weeks: 6048e5
            }, I = function(_) {
                return _ instanceof U
            }, L = function(_, O, P) {
                return new U(_,P,O.$l)
            }, S = function(_) {
                return O.p(_) + "s"
            }, A = function(_) {
                return _ < 0
            }, q = function(_) {
                return A(_) ? Math.ceil(_) : Math.floor(_)
            }, G = function(_) {
                return Math.abs(_)
            }, N = function(_, O) {
                return _ ? A(_) ? {
                    negative: !0,
                    format: "" + G(_) + O
                } : {
                    negative: !1,
                    format: "" + _ + O
                } : {
                    negative: !1,
                    format: ""
                }
            }, U = function() {
                function A(_, O, P) {
                    var j = this;
                    if (this.$d = {},
                    this.$l = P,
                    void 0 === _ && (this.$ms = 0,
                    this.parseFromMilliseconds()),
                    O)
                        return L(_ * M[S(O)], this);
                    if ("number" == typeof _)
                        return this.$ms = _,
                        this.parseFromMilliseconds(),
                        this;
                    if ("object" == typeof _)
                        return Object.keys(_).forEach(function(O) {
                            j.$d[S(O)] = _[O]
                        }),
                        this.calMilliseconds(),
                        this;
                    if ("string" == typeof _) {
                        var R = _.match(E);
                        if (R) {
                            var B = R.slice(2).map(function(_) {
                                return null != _ ? Number(_) : 0
                            });
                            return this.$d.years = B[0],
                            this.$d.months = B[1],
                            this.$d.weeks = B[2],
                            this.$d.days = B[3],
                            this.$d.hours = B[4],
                            this.$d.minutes = B[5],
                            this.$d.seconds = B[6],
                            this.calMilliseconds(),
                            this
                        }
                    }
                    return this
                }
                var G = A.prototype;
                return G.calMilliseconds = function() {
                    var _ = this;
                    this.$ms = Object.keys(this.$d).reduce(function(O, P) {
                        return O + (_.$d[P] || 0) * M[P]
                    }, 0)
                }
                ,
                G.parseFromMilliseconds = function() {
                    var _ = this.$ms;
                    this.$d.years = q(_ / C),
                    _ %= C,
                    this.$d.months = q(_ / T),
                    _ %= T,
                    this.$d.days = q(_ / B),
                    _ %= B,
                    this.$d.hours = q(_ / R),
                    _ %= R,
                    this.$d.minutes = q(_ / j),
                    _ %= j,
                    this.$d.seconds = q(_ / P),
                    _ %= P,
                    this.$d.milliseconds = _
                }
                ,
                G.toISOString = function() {
                    var _ = N(this.$d.years, "Y")
                      , O = N(this.$d.months, "M")
                      , P = +this.$d.days || 0;
                    this.$d.weeks && (P += 7 * this.$d.weeks);
                    var j = N(P, "D")
                      , R = N(this.$d.hours, "H")
                      , B = N(this.$d.minutes, "M")
                      , x = this.$d.seconds || 0;
                    this.$d.milliseconds && (x += this.$d.milliseconds / 1e3);
                    var C = N(x, "S")
                      , T = _.negative || O.negative || j.negative || R.negative || B.negative || C.negative
                      , E = R.format || B.format || C.format ? "T" : ""
                      , M = (T ? "-" : "") + "P" + _.format + O.format + j.format + E + R.format + B.format + C.format;
                    return "P" === M || "-P" === M ? "P0D" : M
                }
                ,
                G.toJSON = function() {
                    return this.toISOString()
                }
                ,
                G.format = function(_) {
                    var P = _ || "YYYY-MM-DDTHH:mm:ss"
                      , j = {
                        Y: this.$d.years,
                        YY: O.s(this.$d.years, 2, "0"),
                        YYYY: O.s(this.$d.years, 4, "0"),
                        M: this.$d.months,
                        MM: O.s(this.$d.months, 2, "0"),
                        D: this.$d.days,
                        DD: O.s(this.$d.days, 2, "0"),
                        H: this.$d.hours,
                        HH: O.s(this.$d.hours, 2, "0"),
                        m: this.$d.minutes,
                        mm: O.s(this.$d.minutes, 2, "0"),
                        s: this.$d.seconds,
                        ss: O.s(this.$d.seconds, 2, "0"),
                        SSS: O.s(this.$d.milliseconds, 3, "0")
                    };
                    return P.replace(x, function(_, O) {
                        return O || String(j[_])
                    })
                }
                ,
                G.as = function(_) {
                    return this.$ms / M[S(_)]
                }
                ,
                G.get = function(_) {
                    var O = this.$ms
                      , P = S(_);
                    return "milliseconds" === P ? O %= 1e3 : O = "weeks" === P ? q(O / M[P]) : this.$d[P],
                    0 === O ? 0 : O
                }
                ,
                G.add = function(_, O, P) {
                    var j;
                    return j = O ? _ * M[S(O)] : I(_) ? _.$ms : L(_, this).$ms,
                    L(this.$ms + j * (P ? -1 : 1), this)
                }
                ,
                G.subtract = function(_, O) {
                    return this.add(_, O, !0)
                }
                ,
                G.locale = function(_) {
                    var O = this.clone();
                    return O.$l = _,
                    O
                }
                ,
                G.clone = function() {
                    return L(this.$ms, this)
                }
                ,
                G.humanize = function(O) {
                    return _().add(this.$ms, "ms").locale(this.$l).fromNow(!O)
                }
                ,
                G.milliseconds = function() {
                    return this.get("milliseconds")
                }
                ,
                G.asMilliseconds = function() {
                    return this.as("milliseconds")
                }
                ,
                G.seconds = function() {
                    return this.get("seconds")
                }
                ,
                G.asSeconds = function() {
                    return this.as("seconds")
                }
                ,
                G.minutes = function() {
                    return this.get("minutes")
                }
                ,
                G.asMinutes = function() {
                    return this.as("minutes")
                }
                ,
                G.hours = function() {
                    return this.get("hours")
                }
                ,
                G.asHours = function() {
                    return this.as("hours")
                }
                ,
                G.days = function() {
                    return this.get("days")
                }
                ,
                G.asDays = function() {
                    return this.as("days")
                }
                ,
                G.weeks = function() {
                    return this.get("weeks")
                }
                ,
                G.asWeeks = function() {
                    return this.as("weeks")
                }
                ,
                G.months = function() {
                    return this.get("months")
                }
                ,
                G.asMonths = function() {
                    return this.as("months")
                }
                ,
                G.years = function() {
                    return this.get("years")
                }
                ,
                G.asYears = function() {
                    return this.as("years")
                }
                ,
                A
            }();
            return function(P, j, R) {
                _ = R,
                O = R().$utils(),
                R.duration = function(_, O) {
                    return L(_, {
                        $l: R.locale()
                    }, O)
                }
                ,
                R.isDuration = I;
                var B = j.prototype.add
                  , x = j.prototype.subtract;
                j.prototype.add = function(_, O) {
                    return I(_) && (_ = _.asMilliseconds()),
                    B.bind(this)(_, O)
                }
                ,
                j.prototype.subtract = function(_, O) {
                    return I(_) && (_ = _.asMilliseconds()),
                    x.bind(this)(_, O)
                }
            }
        })
    },
    28323: function(_, O) {
        !function(_, P) {
            P(O)
        }(0, function(_) {
            "use strict";
            var O = "function" == typeof WeakMap
              , P = Object.keys;
            function j(_, O) {
                return _ === O || _ != _ && O != O
            }
            function R(_) {
                return _.constructor === Object || null == _.constructor
            }
            function B(_) {
                return !!_ && "function" == typeof _.then
            }
            function x(_) {
                return !!(_ && _.$$typeof)
            }
            function C() {
                var _ = [];
                return {
                    delete: function(O) {
                        for (var P = 0; P < _.length; ++P)
                            if (_[P][0] === O) {
                                _.splice(P, 1);
                                return
                            }
                    },
                    get: function(O) {
                        for (var P = 0; P < _.length; ++P)
                            if (_[P][0] === O)
                                return _[P][1]
                    },
                    set: function(O, P) {
                        for (var j = 0; j < _.length; ++j)
                            if (_[j][0] === O) {
                                _[j][1] = P;
                                return
                            }
                        _.push([O, P])
                    }
                }
            }
            var T = function(_) {
                return _ ? function() {
                    return new WeakMap
                }
                : C
            }(O);
            function E(_) {
                return function(O) {
                    var P = _ || O;
                    return function(_, O, j, R, B, x, C) {
                        void 0 === C && (C = T());
                        var E = !!_ && "object" == typeof _
                          , M = !!O && "object" == typeof O;
                        if (E !== M)
                            return !1;
                        if (!E && !M)
                            return P(_, O, C);
                        var I = C.get(_);
                        if (I && C.get(O))
                            return I === O;
                        C.set(_, O),
                        C.set(O, _);
                        var L = P(_, O, C);
                        return C.delete(_),
                        C.delete(O),
                        L
                    }
                }
            }
            function M(_, O, P, j) {
                var R = _.length;
                if (O.length !== R)
                    return !1;
                for (; R-- > 0; )
                    if (!P(_[R], O[R], R, R, _, O, j))
                        return !1;
                return !0
            }
            function I(_, O, P, j) {
                var R = _.size === O.size;
                if (R && _.size) {
                    var B = {}
                      , x = 0;
                    _.forEach(function(C, T) {
                        if (R) {
                            var E = !1
                              , M = 0;
                            O.forEach(function(R, I) {
                                !E && !B[M] && (E = P(T, I, x, M, _, O, j) && P(C, R, T, I, _, O, j)) && (B[M] = !0),
                                M++
                            }),
                            x++,
                            R = E
                        }
                    })
                }
                return R
            }
            var L = "_owner"
              , S = Function.prototype.bind.call(Function.prototype.call, Object.prototype.hasOwnProperty);
            function A(_, O, j, R) {
                var B = P(_)
                  , C = B.length;
                if (P(O).length !== C)
                    return !1;
                if (C)
                    for (var T = void 0; C-- > 0; ) {
                        if ((T = B[C]) === L) {
                            var E = x(_)
                              , M = x(O);
                            if ((E || M) && E !== M)
                                return !1
                        }
                        if (!S(O, T) || !j(_[T], O[T], T, T, _, O, R))
                            return !1
                    }
                return !0
            }
            var q = function() {
                return "g" === /foo/g.flags ? function(_, O) {
                    return _.source === O.source && _.flags === O.flags
                }
                : function(_, O) {
                    return _.source === O.source && _.global === O.global && _.ignoreCase === O.ignoreCase && _.multiline === O.multiline && _.unicode === O.unicode && _.sticky === O.sticky && _.lastIndex === O.lastIndex
                }
            }();
            function G(_, O, P, j) {
                var R = _.size === O.size;
                if (R && _.size) {
                    var B = {};
                    _.forEach(function(x, C) {
                        if (R) {
                            var T = !1
                              , E = 0;
                            O.forEach(function(R, M) {
                                !T && !B[E] && (T = P(x, R, C, M, _, O, j)) && (B[E] = !0),
                                E++
                            }),
                            R = T
                        }
                    })
                }
                return R
            }
            var N = "function" == typeof Map
              , U = "function" == typeof Set
              , V = Object.prototype.valueOf;
            function D(_) {
                var O = "function" == typeof _ ? _(P) : function(_, O, j, R, B, x, C) {
                    return P(_, O, C)
                }
                ;
                function P(_, P, x) {
                    if (_ === P)
                        return !0;
                    if (_ && P && "object" == typeof _ && "object" == typeof P) {
                        if (R(_) && R(P))
                            return A(_, P, O, x);
                        var C = Array.isArray(_)
                          , T = Array.isArray(P);
                        return C || T ? C === T && M(_, P, O, x) : (C = _ instanceof Date,
                        T = P instanceof Date,
                        C || T) ? C === T && j(_.getTime(), P.getTime()) : (C = _ instanceof RegExp,
                        T = P instanceof RegExp,
                        C || T) ? C === T && q(_, P) : B(_) || B(P) ? _ === P : N && (C = _ instanceof Map,
                        T = P instanceof Map,
                        C || T) ? C === T && I(_, P, O, x) : U && (C = _ instanceof Set,
                        T = P instanceof Set,
                        C || T) ? C === T && G(_, P, O, x) : _.valueOf !== V || P.valueOf !== V ? j(_.valueOf(), P.valueOf()) : A(_, P, O, x)
                    }
                    return _ != _ && P != P
                }
                return P
            }
            var Y = D()
              , F = D(function() {
                return j
            })
              , z = D(E())
              , K = D(E(j));
            _.circularDeepEqual = z,
            _.circularShallowEqual = K,
            _.createCustomEqual = D,
            _.deepEqual = Y,
            _.sameValueZeroEqual = j,
            _.shallowEqual = F,
            Object.defineProperty(_, "__esModule", {
                value: !0
            })
        })
    },
    30626: function(module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_RESULT__, process = __webpack_require__(62851);
        !function() {
            "use strict";
            var ERROR = "input is invalid type"
              , WINDOW = "object" == typeof window
              , root = WINDOW ? window : {};
            root.JS_MD5_NO_WINDOW && (WINDOW = !1);
            var WEB_WORKER = !WINDOW && "object" == typeof self
              , NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
            NODE_JS ? root = window : WEB_WORKER && (root = self);
            var buffer8, COMMON_JS = !root.JS_MD5_NO_COMMON_JS && module.exports, AMD = __webpack_require__.amdO, ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [128, 32768, 8388608, -2147483648], SHIFT = [0, 8, 16, 24], OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [];
            if (ARRAY_BUFFER) {
                var buffer = new ArrayBuffer(68);
                buffer8 = new Uint8Array(buffer),
                blocks = new Uint32Array(buffer)
            }
            (root.JS_MD5_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(_) {
                return "[object Array]" === Object.prototype.toString.call(_)
            }
            ),
            ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(_) {
                return "object" == typeof _ && _.buffer && _.buffer.constructor === ArrayBuffer
            }
            );
            var createOutputMethod = function(_) {
                return function(O) {
                    return new Md5(!0).update(O)[_]()
                }
            }
              , createMethod = function() {
                var _ = createOutputMethod("hex");
                NODE_JS && (_ = nodeWrap(_)),
                _.create = function() {
                    return new Md5
                }
                ,
                _.update = function(O) {
                    return _.create().update(O)
                }
                ;
                for (var O = 0; O < OUTPUT_TYPES.length; ++O) {
                    var P = OUTPUT_TYPES[O];
                    _[P] = createOutputMethod(P)
                }
                return _
            }
              , nodeWrap = function(method) {
                var crypto = eval("require('crypto')")
                  , Buffer = eval("require('buffer').Buffer")
                  , nodeMethod = function(_) {
                    if ("string" == typeof _)
                        return crypto.createHash("md5").update(_, "utf8").digest("hex");
                    if (null == _)
                        throw ERROR;
                    return _.constructor === ArrayBuffer && (_ = new Uint8Array(_)),
                    Array.isArray(_) || ArrayBuffer.isView(_) || _.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(_)).digest("hex") : method(_)
                };
                return nodeMethod
            };
            function Md5(_) {
                if (_)
                    blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0,
                    this.blocks = blocks,
                    this.buffer8 = buffer8;
                else if (ARRAY_BUFFER) {
                    var O = new ArrayBuffer(68);
                    this.buffer8 = new Uint8Array(O),
                    this.blocks = new Uint32Array(O)
                } else
                    this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                this.finalized = this.hashed = !1,
                this.first = !0
            }
            Md5.prototype.update = function(_) {
                if (!this.finalized) {
                    var O, P = typeof _;
                    if ("string" !== P) {
                        if ("object" === P) {
                            if (null === _)
                                throw ERROR;
                            if (ARRAY_BUFFER && _.constructor === ArrayBuffer)
                                _ = new Uint8Array(_);
                            else if (!Array.isArray(_) && (!ARRAY_BUFFER || !ArrayBuffer.isView(_)))
                                throw ERROR
                        } else
                            throw ERROR;
                        O = !0
                    }
                    for (var j, R, B = 0, x = _.length, C = this.blocks, T = this.buffer8; B < x; ) {
                        if (this.hashed && (this.hashed = !1,
                        C[0] = C[16],
                        C[16] = C[1] = C[2] = C[3] = C[4] = C[5] = C[6] = C[7] = C[8] = C[9] = C[10] = C[11] = C[12] = C[13] = C[14] = C[15] = 0),
                        O) {
                            if (ARRAY_BUFFER)
                                for (R = this.start; B < x && R < 64; ++B)
                                    T[R++] = _[B];
                            else
                                for (R = this.start; B < x && R < 64; ++B)
                                    C[R >> 2] |= _[B] << SHIFT[3 & R++]
                        } else if (ARRAY_BUFFER)
                            for (R = this.start; B < x && R < 64; ++B)
                                (j = _.charCodeAt(B)) < 128 ? T[R++] = j : (j < 2048 ? T[R++] = 192 | j >> 6 : (j < 55296 || j >= 57344 ? T[R++] = 224 | j >> 12 : (j = 65536 + ((1023 & j) << 10 | 1023 & _.charCodeAt(++B)),
                                T[R++] = 240 | j >> 18,
                                T[R++] = 128 | j >> 12 & 63),
                                T[R++] = 128 | j >> 6 & 63),
                                T[R++] = 128 | 63 & j);
                        else
                            for (R = this.start; B < x && R < 64; ++B)
                                (j = _.charCodeAt(B)) < 128 ? C[R >> 2] |= j << SHIFT[3 & R++] : (j < 2048 ? C[R >> 2] |= (192 | j >> 6) << SHIFT[3 & R++] : (j < 55296 || j >= 57344 ? C[R >> 2] |= (224 | j >> 12) << SHIFT[3 & R++] : (j = 65536 + ((1023 & j) << 10 | 1023 & _.charCodeAt(++B)),
                                C[R >> 2] |= (240 | j >> 18) << SHIFT[3 & R++],
                                C[R >> 2] |= (128 | j >> 12 & 63) << SHIFT[3 & R++]),
                                C[R >> 2] |= (128 | j >> 6 & 63) << SHIFT[3 & R++]),
                                C[R >> 2] |= (128 | 63 & j) << SHIFT[3 & R++]);
                        this.lastByteIndex = R,
                        this.bytes += R - this.start,
                        R >= 64 ? (this.start = R - 64,
                        this.hash(),
                        this.hashed = !0) : this.start = R
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                    this.bytes = this.bytes % 4294967296),
                    this
                }
            }
            ,
            Md5.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var _ = this.blocks
                      , O = this.lastByteIndex;
                    _[O >> 2] |= EXTRA[3 & O],
                    O >= 56 && (this.hashed || this.hash(),
                    _[0] = _[16],
                    _[16] = _[1] = _[2] = _[3] = _[4] = _[5] = _[6] = _[7] = _[8] = _[9] = _[10] = _[11] = _[12] = _[13] = _[14] = _[15] = 0),
                    _[14] = this.bytes << 3,
                    _[15] = this.hBytes << 3 | this.bytes >>> 29,
                    this.hash()
                }
            }
            ,
            Md5.prototype.hash = function() {
                var _, O, P, j, R, B, x = this.blocks;
                this.first ? (P = ((P = (-271733879 ^ (j = ((j = (-1732584194 ^ 2004318071 & (_ = ((_ = x[0] - 680876937) << 7 | _ >>> 25) - 271733879 << 0)) + x[1] - 117830708) << 12 | j >>> 20) + _ << 0) & (-271733879 ^ _)) + x[2] - 1126478375) << 17 | P >>> 15) + j << 0,
                O = ((O = (_ ^ P & (j ^ _)) + x[3] - 1316259209) << 22 | O >>> 10) + P << 0) : (_ = this.h0,
                O = this.h1,
                P = this.h2,
                _ += ((j = this.h3) ^ O & (P ^ j)) + x[0] - 680876936,
                j += (P ^ (_ = (_ << 7 | _ >>> 25) + O << 0) & (O ^ P)) + x[1] - 389564586,
                P += (O ^ (j = (j << 12 | j >>> 20) + _ << 0) & (_ ^ O)) + x[2] + 606105819,
                O += (_ ^ (P = (P << 17 | P >>> 15) + j << 0) & (j ^ _)) + x[3] - 1044525330,
                O = (O << 22 | O >>> 10) + P << 0),
                _ += (j ^ O & (P ^ j)) + x[4] - 176418897,
                j += (P ^ (_ = (_ << 7 | _ >>> 25) + O << 0) & (O ^ P)) + x[5] + 1200080426,
                P += (O ^ (j = (j << 12 | j >>> 20) + _ << 0) & (_ ^ O)) + x[6] - 1473231341,
                O += (_ ^ (P = (P << 17 | P >>> 15) + j << 0) & (j ^ _)) + x[7] - 45705983,
                _ += (j ^ (O = (O << 22 | O >>> 10) + P << 0) & (P ^ j)) + x[8] + 1770035416,
                j += (P ^ (_ = (_ << 7 | _ >>> 25) + O << 0) & (O ^ P)) + x[9] - 1958414417,
                P += (O ^ (j = (j << 12 | j >>> 20) + _ << 0) & (_ ^ O)) + x[10] - 42063,
                O += (_ ^ (P = (P << 17 | P >>> 15) + j << 0) & (j ^ _)) + x[11] - 1990404162,
                _ += (j ^ (O = (O << 22 | O >>> 10) + P << 0) & (P ^ j)) + x[12] + 1804603682,
                j += (P ^ (_ = (_ << 7 | _ >>> 25) + O << 0) & (O ^ P)) + x[13] - 40341101,
                P += (O ^ (j = (j << 12 | j >>> 20) + _ << 0) & (_ ^ O)) + x[14] - 1502002290,
                O += (_ ^ (P = (P << 17 | P >>> 15) + j << 0) & (j ^ _)) + x[15] + 1236535329,
                O = (O << 22 | O >>> 10) + P << 0,
                _ += (P ^ j & (O ^ P)) + x[1] - 165796510,
                _ = (_ << 5 | _ >>> 27) + O << 0,
                j += (O ^ P & (_ ^ O)) + x[6] - 1069501632,
                j = (j << 9 | j >>> 23) + _ << 0,
                P += (_ ^ O & (j ^ _)) + x[11] + 643717713,
                P = (P << 14 | P >>> 18) + j << 0,
                O += (j ^ _ & (P ^ j)) + x[0] - 373897302,
                O = (O << 20 | O >>> 12) + P << 0,
                _ += (P ^ j & (O ^ P)) + x[5] - 701558691,
                _ = (_ << 5 | _ >>> 27) + O << 0,
                j += (O ^ P & (_ ^ O)) + x[10] + 38016083,
                j = (j << 9 | j >>> 23) + _ << 0,
                P += (_ ^ O & (j ^ _)) + x[15] - 660478335,
                P = (P << 14 | P >>> 18) + j << 0,
                O += (j ^ _ & (P ^ j)) + x[4] - 405537848,
                O = (O << 20 | O >>> 12) + P << 0,
                _ += (P ^ j & (O ^ P)) + x[9] + 568446438,
                _ = (_ << 5 | _ >>> 27) + O << 0,
                j += (O ^ P & (_ ^ O)) + x[14] - 1019803690,
                j = (j << 9 | j >>> 23) + _ << 0,
                P += (_ ^ O & (j ^ _)) + x[3] - 187363961,
                P = (P << 14 | P >>> 18) + j << 0,
                O += (j ^ _ & (P ^ j)) + x[8] + 1163531501,
                O = (O << 20 | O >>> 12) + P << 0,
                _ += (P ^ j & (O ^ P)) + x[13] - 1444681467,
                _ = (_ << 5 | _ >>> 27) + O << 0,
                j += (O ^ P & (_ ^ O)) + x[2] - 51403784,
                j = (j << 9 | j >>> 23) + _ << 0,
                P += (_ ^ O & (j ^ _)) + x[7] + 1735328473,
                P = (P << 14 | P >>> 18) + j << 0,
                O += (j ^ _ & (P ^ j)) + x[12] - 1926607734,
                _ += ((R = (O = (O << 20 | O >>> 12) + P << 0) ^ P) ^ j) + x[5] - 378558,
                j += (R ^ (_ = (_ << 4 | _ >>> 28) + O << 0)) + x[8] - 2022574463,
                P += ((B = (j = (j << 11 | j >>> 21) + _ << 0) ^ _) ^ O) + x[11] + 1839030562,
                O += (B ^ (P = (P << 16 | P >>> 16) + j << 0)) + x[14] - 35309556,
                _ += ((R = (O = (O << 23 | O >>> 9) + P << 0) ^ P) ^ j) + x[1] - 1530992060,
                j += (R ^ (_ = (_ << 4 | _ >>> 28) + O << 0)) + x[4] + 1272893353,
                P += ((B = (j = (j << 11 | j >>> 21) + _ << 0) ^ _) ^ O) + x[7] - 155497632,
                O += (B ^ (P = (P << 16 | P >>> 16) + j << 0)) + x[10] - 1094730640,
                _ += ((R = (O = (O << 23 | O >>> 9) + P << 0) ^ P) ^ j) + x[13] + 681279174,
                j += (R ^ (_ = (_ << 4 | _ >>> 28) + O << 0)) + x[0] - 358537222,
                P += ((B = (j = (j << 11 | j >>> 21) + _ << 0) ^ _) ^ O) + x[3] - 722521979,
                O += (B ^ (P = (P << 16 | P >>> 16) + j << 0)) + x[6] + 76029189,
                _ += ((R = (O = (O << 23 | O >>> 9) + P << 0) ^ P) ^ j) + x[9] - 640364487,
                j += (R ^ (_ = (_ << 4 | _ >>> 28) + O << 0)) + x[12] - 421815835,
                P += ((B = (j = (j << 11 | j >>> 21) + _ << 0) ^ _) ^ O) + x[15] + 530742520,
                O += (B ^ (P = (P << 16 | P >>> 16) + j << 0)) + x[2] - 995338651,
                O = (O << 23 | O >>> 9) + P << 0,
                _ += (P ^ (O | ~j)) + x[0] - 198630844,
                _ = (_ << 6 | _ >>> 26) + O << 0,
                j += (O ^ (_ | ~P)) + x[7] + 1126891415,
                j = (j << 10 | j >>> 22) + _ << 0,
                P += (_ ^ (j | ~O)) + x[14] - 1416354905,
                P = (P << 15 | P >>> 17) + j << 0,
                O += (j ^ (P | ~_)) + x[5] - 57434055,
                O = (O << 21 | O >>> 11) + P << 0,
                _ += (P ^ (O | ~j)) + x[12] + 1700485571,
                _ = (_ << 6 | _ >>> 26) + O << 0,
                j += (O ^ (_ | ~P)) + x[3] - 1894986606,
                j = (j << 10 | j >>> 22) + _ << 0,
                P += (_ ^ (j | ~O)) + x[10] - 1051523,
                P = (P << 15 | P >>> 17) + j << 0,
                O += (j ^ (P | ~_)) + x[1] - 2054922799,
                O = (O << 21 | O >>> 11) + P << 0,
                _ += (P ^ (O | ~j)) + x[8] + 1873313359,
                _ = (_ << 6 | _ >>> 26) + O << 0,
                j += (O ^ (_ | ~P)) + x[15] - 30611744,
                j = (j << 10 | j >>> 22) + _ << 0,
                P += (_ ^ (j | ~O)) + x[6] - 1560198380,
                P = (P << 15 | P >>> 17) + j << 0,
                O += (j ^ (P | ~_)) + x[13] + 1309151649,
                O = (O << 21 | O >>> 11) + P << 0,
                _ += (P ^ (O | ~j)) + x[4] - 145523070,
                _ = (_ << 6 | _ >>> 26) + O << 0,
                j += (O ^ (_ | ~P)) + x[11] - 1120210379,
                j = (j << 10 | j >>> 22) + _ << 0,
                P += (_ ^ (j | ~O)) + x[2] + 718787259,
                P = (P << 15 | P >>> 17) + j << 0,
                O += (j ^ (P | ~_)) + x[9] - 343485551,
                O = (O << 21 | O >>> 11) + P << 0,
                this.first ? (this.h0 = _ + 1732584193 << 0,
                this.h1 = O - 271733879 << 0,
                this.h2 = P - 1732584194 << 0,
                this.h3 = j + 271733878 << 0,
                this.first = !1) : (this.h0 = this.h0 + _ << 0,
                this.h1 = this.h1 + O << 0,
                this.h2 = this.h2 + P << 0,
                this.h3 = this.h3 + j << 0)
            }
            ,
            Md5.prototype.hex = function() {
                this.finalize();
                var _ = this.h0
                  , O = this.h1
                  , P = this.h2
                  , j = this.h3;
                return HEX_CHARS[_ >> 4 & 15] + HEX_CHARS[15 & _] + HEX_CHARS[_ >> 12 & 15] + HEX_CHARS[_ >> 8 & 15] + HEX_CHARS[_ >> 20 & 15] + HEX_CHARS[_ >> 16 & 15] + HEX_CHARS[_ >> 28 & 15] + HEX_CHARS[_ >> 24 & 15] + HEX_CHARS[O >> 4 & 15] + HEX_CHARS[15 & O] + HEX_CHARS[O >> 12 & 15] + HEX_CHARS[O >> 8 & 15] + HEX_CHARS[O >> 20 & 15] + HEX_CHARS[O >> 16 & 15] + HEX_CHARS[O >> 28 & 15] + HEX_CHARS[O >> 24 & 15] + HEX_CHARS[P >> 4 & 15] + HEX_CHARS[15 & P] + HEX_CHARS[P >> 12 & 15] + HEX_CHARS[P >> 8 & 15] + HEX_CHARS[P >> 20 & 15] + HEX_CHARS[P >> 16 & 15] + HEX_CHARS[P >> 28 & 15] + HEX_CHARS[P >> 24 & 15] + HEX_CHARS[j >> 4 & 15] + HEX_CHARS[15 & j] + HEX_CHARS[j >> 12 & 15] + HEX_CHARS[j >> 8 & 15] + HEX_CHARS[j >> 20 & 15] + HEX_CHARS[j >> 16 & 15] + HEX_CHARS[j >> 28 & 15] + HEX_CHARS[j >> 24 & 15]
            }
            ,
            Md5.prototype.toString = Md5.prototype.hex,
            Md5.prototype.digest = function() {
                this.finalize();
                var _ = this.h0
                  , O = this.h1
                  , P = this.h2
                  , j = this.h3;
                return [255 & _, _ >> 8 & 255, _ >> 16 & 255, _ >> 24 & 255, 255 & O, O >> 8 & 255, O >> 16 & 255, O >> 24 & 255, 255 & P, P >> 8 & 255, P >> 16 & 255, P >> 24 & 255, 255 & j, j >> 8 & 255, j >> 16 & 255, j >> 24 & 255]
            }
            ,
            Md5.prototype.array = Md5.prototype.digest,
            Md5.prototype.arrayBuffer = function() {
                this.finalize();
                var _ = new ArrayBuffer(16)
                  , O = new Uint32Array(_);
                return O[0] = this.h0,
                O[1] = this.h1,
                O[2] = this.h2,
                O[3] = this.h3,
                _
            }
            ,
            Md5.prototype.buffer = Md5.prototype.arrayBuffer,
            Md5.prototype.base64 = function() {
                for (var _, O, P, j = "", R = this.array(), B = 0; B < 15; )
                    _ = R[B++],
                    O = R[B++],
                    P = R[B++],
                    j += BASE64_ENCODE_CHAR[_ >>> 2] + BASE64_ENCODE_CHAR[(_ << 4 | O >>> 4) & 63] + BASE64_ENCODE_CHAR[(O << 2 | P >>> 6) & 63] + BASE64_ENCODE_CHAR[63 & P];
                return j + (BASE64_ENCODE_CHAR[(_ = R[B]) >>> 2] + BASE64_ENCODE_CHAR[_ << 4 & 63] + "==")
            }
            ;
            var exports = createMethod();
            COMMON_JS ? module.exports = exports : (root.md5 = exports,
            AMD && void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return exports
            }
            ).call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }()
    }
}]);
