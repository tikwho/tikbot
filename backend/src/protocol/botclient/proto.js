// // console.info("-------------------------------");
// import {
// 	r as he,
// 	a as K,
// 	w as Te,
// 	n as De,
// 	o as de,
// 	b as m,
// 	c as O,
// 	d as I,
// 	e as h,
// 	f as g,
// 	F as Y,
// 	g as Z,
// 	h as y,
// 	i as Ee,
// 	j as R,
// 	u as G,
// 	E as Ge,
// 	L as U,
// 	t as $,
// 	k as T,
// 	l as ae,
// 	p as ke,
// 	m as we,
// 	q as J,
// 	s as ge,
// 	v as j,
// 	x as ze,
// 	y as me,
// 	z as D,
// 	A as fe,
// 	B as be,
// 	Q as ie,
// 	C as Re,
// 	P as qe,
// 	D as Le,
// 	G as Ue,
// 	H as Je,
// 	I as $e,
// 	J as H,
// 	K as He,
// 	M as w,
// 	N as Me,
// 	O as Ke,
// 	R as Fe,
// 	S as We
// } from "./static/vendor-7ae6498e.js";

// import {M as w} from "./static/vendor-7ae64983.js";
const vendor = require("./static/vendor-7ae64983.js");
const w = vendor.M;

console.info(w);
const p = w.Reader,
x = w.Writer,
i = w.util,
a = w.roots.default || (w.roots.default = {}),
// const a = {},
// i={ emptyArray:[],
// 	oneOfGetter(options) {
// 		if (!Array.isArray(options) || options.length === 0) {
// 			throw new Error("Options must be a non-empty array.");
// 		}
// 		const randomIndex = Math.floor(Math.random() * options.length);
// 		return options[randomIndex];
// 	}
// },
z= a.pigeon = (() => {
		const f = {};
		return f.StringKeyValue = function() {
			function l(u) {
				if (u)
					for (let _ = Object.keys(u), s = 0; s < _.length; ++s) u[_[s]] != null && (this[_[s]] = u[_[s]])
			}
			return l.prototype.key = "", l.prototype.value = "", l.create = function(_) {
				return new l(_)
			}, l.encode = function(_, s) {
				return s || (s = x.create()), s.uint32(10)
					.string(_.key), s.uint32(18)
					.string(_.value), s
			}, l.encodeDelimited = function(_, s) {
				return this.encode(_, s)
					.ldelim()
			}, l.decode = function(_, s) {
				_ instanceof p || (_ = p.create(_));
				let e = s === void 0 ? _.len : _.pos + s,
					o = new a.pigeon.StringKeyValue;
				for (; _.pos < e;) {
					let t = _.uint32();
					switch (t >>> 3) {
						case 1:
							{
								o.key = _.string();
								break
							}
						case 2:
							{
								o.value = _.string();
								break
							}
						default:
							_.skipType(t & 7);
							break
					}
				}
				if (!o.hasOwnProperty("key")) throw i.ProtocolError("missing required 'key'", {
					instance: o
				});
				if (!o.hasOwnProperty("value")) throw i.ProtocolError("missing required 'value'", {
					instance: o
				});
				return o
			}, l.decodeDelimited = function(_) {
				return _ instanceof p || (_ = new p(_)), this.decode(_, _.uint32())
			}, l.verify = function(_) {
				return typeof _ != "object" || _ === null ? "object expected" : i.isString(_.key) ? i.isString(_.value) ? null : "value: string expected" : "key: string expected"
			}, l.fromObject = function(_) {
				if (_ instanceof a.pigeon.StringKeyValue) return _;
				let s = new a.pigeon.StringKeyValue;
				return _.key != null && (s.key = String(_.key)), _.value != null && (s.value = String(_.value)), s
			}, l.toObject = function(_, s) {
				s || (s = {});
				let e = {};
				return s.defaults && (e.key = "", e.value = ""), _.key != null && _.hasOwnProperty("key") && (e.key = _.key), _.value != null && _.hasOwnProperty("value") && (e.value = _.value), e
			}, l.prototype.toJSON = function() {
				return this.constructor.toObject(this, w.util.toJSONOptions)
			}, l.getTypeUrl = function(_) {
				return _ === void 0 && (_ = "type.googleapis.com"), _ + "/pigeon.StringKeyValue"
			}, l
		}(), f.Uint64KeyValue = function() {
			function l(u) {
				if (u)
					for (let _ = Object.keys(u), s = 0; s < _.length; ++s) u[_[s]] != null && (this[_[s]] = u[_[s]])
			}
			return l.prototype.key = 0, l.prototype.value = 0, l.create = function(_) {
				return new l(_)
			}, l.encode = function(_, s) {
				return s || (s = x.create()), s.uint32(8)
					.uint64(_.key), s.uint32(16)
					.uint64(_.value), s
			}, l.encodeDelimited = function(_, s) {
				return this.encode(_, s)
					.ldelim()
			}, l.decode = function(_, s) {
				_ instanceof p || (_ = p.create(_));
				let e = s === void 0 ? _.len : _.pos + s,
					o = new a.pigeon.Uint64KeyValue;
				for (; _.pos < e;) {
					let t = _.uint32();
					switch (t >>> 3) {
						case 1:
							{
								o.key = _.uint64();
								break
							}
						case 2:
							{
								o.value = _.uint64();
								break
							}
						default:
							_.skipType(t & 7);
							break
					}
				}
				if (!o.hasOwnProperty("key")) throw i.ProtocolError("missing required 'key'", {
					instance: o
				});
				if (!o.hasOwnProperty("value")) throw i.ProtocolError("missing required 'value'", {
					instance: o
				});
				return o
			}, l.decodeDelimited = function(_) {
				return _ instanceof p || (_ = new p(_)), this.decode(_, _.uint32())
			}, l.verify = function(_) {
				return typeof _ != "object" || _ === null ? "object expected" : !i.isInteger(_.key) && !(_.key && i.isInteger(_.key.low) && i.isInteger(_.key.high)) ? "key: integer|Long expected" : !i.isInteger(_.value) && !(_.value && i.isInteger(_.value.low) && i.isInteger(_.value.high)) ? "value: integer|Long expected" : null
			}, l.fromObject = function(_) {
				if (_ instanceof a.pigeon.Uint64KeyValue) return _;
				let s = new a.pigeon.Uint64KeyValue;
				return _.key != null && (i.Long ? (s.key = i.Long.fromValue(_.key))
					.unsigned = !0 : typeof _.key == "string" ? s.key = parseInt(_.key, 10) : typeof _.key == "number" ? s.key = _.key : typeof _.key == "object" && (s.key = new i.LongBits(_.key.low >>> 0, _.key.high >>> 0)
						.toNumber(!0))), _.value != null && (i.Long ? (s.value = i.Long.fromValue(_.value))
					.unsigned = !0 : typeof _.value == "string" ? s.value = parseInt(_.value, 10) : typeof _.value == "number" ? s.value = _.value : typeof _.value == "object" && (s.value = new i.LongBits(_.value.low >>> 0, _.value.high >>> 0)
						.toNumber(!0))), s
			}, l.toObject = function(_, s) {
				s || (s = {});
				let e = {};
				if (s.defaults) {
					if (i.Long) {
						let o = new i.Long(0, 0, !0);
						e.key = s.longs === String ? o.toString() : s.longs === Number ? o.toNumber() : o
					} else e.key = s.longs === String ? "0" : 0;
					if (i.Long) {
						let o = new i.Long(0, 0, !0);
						e.value = s.longs === String ? o.toString() : s.longs === Number ? o.toNumber() : o
					} else e.value = s.longs === String ? "0" : 0
				}
				return _.key != null && _.hasOwnProperty("key") && (typeof _.key == "number" ? e.key = s.longs === String ? String(_.key) : _.key : e.key = s.longs === String ? i.Long.prototype.toString.call(_.key) : s.longs === Number ? new i.LongBits(_.key.low >>> 0, _.key.high >>> 0)
					.toNumber(!0) : _.key), _.value != null && _.hasOwnProperty("value") && (typeof _.value == "number" ? e.value = s.longs === String ? String(_.value) : _.value : e.value = s.longs === String ? i.Long.prototype.toString.call(_.value) : s.longs === Number ? new i.LongBits(_.value.low >>> 0, _.value.high >>> 0)
					.toNumber(!0) : _.value), e
			}, l.prototype.toJSON = function() {
				return this.constructor.toObject(this, w.util.toJSONOptions)
			}, l.getTypeUrl = function(_) {
				return _ === void 0 && (_ = "type.googleapis.com"), _ + "/pigeon.Uint64KeyValue"
			}, l
		}(), f.RequestBasic = function() {
			function l(_) {
				if (this.headers = [], _)
					for (let s = Object.keys(_), e = 0; e < s.length; ++e) _[s[e]] != null && (this[s[e]] = _[s[e]])
			}
			l.prototype.sequence_id = 0, l.prototype.log_id = 0, l.prototype.service = 0, l.prototype.method = 0, l.prototype.headers = i.emptyArray, l.prototype.payload_encoding = null, l.prototype.payload_type = "", l.prototype.payload = null;
			let u;
			return Object.defineProperty(l.prototype, "_payload_encoding", {
				get: i.oneOfGetter(u = ["payload_encoding"]),
				set: i.oneOfSetter(u)
			}), l.create = function(s) {
				return new l(s)
			}, l.encode = function(s, e) {
				if (e || (e = x.create()), e.uint32(8)
					.uint32(s.sequence_id), e.uint32(16)
					.uint64(s.log_id), e.uint32(24)
					.uint32(s.service), e.uint32(32)
					.uint32(s.method), s.headers != null && s.headers.length)
					for (let o = 0; o < s.headers.length; ++o) a.pigeon.StringKeyValue.encode(s.headers[o], e.uint32(42)
							.fork())
						.ldelim();
				return s.payload_encoding != null && Object.hasOwnProperty.call(s, "payload_encoding") && e.uint32(50)
					.string(s.payload_encoding), e.uint32(58)
					.string(s.payload_type), a.pigeon.RequestBasic.Request.encode(s.payload, e.uint32(66)
						.fork())
					.ldelim(), e
			}, l.encodeDelimited = function(s, e) {
				return this.encode(s, e)
					.ldelim()
			}, l.decode = function(s, e) {
				s instanceof p || (s = p.create(s));
				let o = e === void 0 ? s.len : s.pos + e,
					t = new a.pigeon.RequestBasic;
				for (; s.pos < o;) {
					let n = s.uint32();
					switch (n >>> 3) {
						case 1:
							{
								t.sequence_id = s.uint32();
								break
							}
						case 2:
							{
								t.log_id = s.uint64();
								break
							}
						case 3:
							{
								t.service = s.uint32();
								break
							}
						case 4:
							{
								t.method = s.uint32();
								break
							}
						case 5:
							{
								t.headers && t.headers.length || (t.headers = []),
								t.headers.push(a.pigeon.StringKeyValue.decode(s, s.uint32()));
								break
							}
						case 6:
							{
								t.payload_encoding = s.string();
								break
							}
						case 7:
							{
								t.payload_type = s.string();
								break
							}
						case 8:
							{
								t.payload = a.pigeon.RequestBasic.Request.decode(s, s.uint32());
								break
							}
						default:
							s.skipType(n & 7);
							break
					}
				}
				if (!t.hasOwnProperty("sequence_id")) throw i.ProtocolError("missing required 'sequence_id'", {
					instance: t
				});
				if (!t.hasOwnProperty("log_id")) throw i.ProtocolError("missing required 'log_id'", {
					instance: t
				});
				if (!t.hasOwnProperty("service")) throw i.ProtocolError("missing required 'service'", {
					instance: t
				});
				if (!t.hasOwnProperty("method")) throw i.ProtocolError("missing required 'method'", {
					instance: t
				});
				if (!t.hasOwnProperty("payload_type")) throw i.ProtocolError("missing required 'payload_type'", {
					instance: t
				});
				if (!t.hasOwnProperty("payload")) throw i.ProtocolError("missing required 'payload'", {
					instance: t
				});
				return t
			}, l.decodeDelimited = function(s) {
				return s instanceof p || (s = new p(s)), this.decode(s, s.uint32())
			}, l.verify = function(s) {
				if (typeof s != "object" || s === null) return "object expected";
				if (!i.isInteger(s.sequence_id)) return "sequence_id: integer expected";
				if (!i.isInteger(s.log_id) && !(s.log_id && i.isInteger(s.log_id.low) && i.isInteger(s.log_id.high))) return "log_id: integer|Long expected";
				if (!i.isInteger(s.service)) return "service: integer expected";
				if (!i.isInteger(s.method)) return "method: integer expected";
				if (s.headers != null && s.hasOwnProperty("headers")) {
					if (!Array.isArray(s.headers)) return "headers: array expected";
					for (let e = 0; e < s.headers.length; ++e) {
						let o = a.pigeon.StringKeyValue.verify(s.headers[e]);
						if (o) return "headers." + o
					}
				}
				if (s.payload_encoding != null && s.hasOwnProperty("payload_encoding") && !i.isString(s.payload_encoding)) return "payload_encoding: string expected";
				if (!i.isString(s.payload_type)) return "payload_type: string expected"; {
					let e = a.pigeon.RequestBasic.Request.verify(s.payload);
					if (e) return "payload." + e
				}
				return null
			}, l.fromObject = function(s) {
				if (s instanceof a.pigeon.RequestBasic) return s;
				let e = new a.pigeon.RequestBasic;
				if (s.sequence_id != null && (e.sequence_id = s.sequence_id >>> 0), s.log_id != null && (i.Long ? (e.log_id = i.Long.fromValue(s.log_id))
					.unsigned = !0 : typeof s.log_id == "string" ? e.log_id = parseInt(s.log_id, 10) : typeof s.log_id == "number" ? e.log_id = s.log_id : typeof s.log_id == "object" && (e.log_id = new i.LongBits(s.log_id.low >>> 0, s.log_id.high >>> 0)
						.toNumber(!0))), s.service != null && (e.service = s.service >>> 0), s.method != null && (e.method = s.method >>> 0), s.headers) {
					if (!Array.isArray(s.headers)) throw TypeError(".pigeon.RequestBasic.headers: array expected");
					e.headers = [];
					for (let o = 0; o < s.headers.length; ++o) {
						if (typeof s.headers[o] != "object") throw TypeError(".pigeon.RequestBasic.headers: object expected");
						e.headers[o] = a.pigeon.StringKeyValue.fromObject(s.headers[o])
					}
				}
				if (s.payload_encoding != null && (e.payload_encoding = String(s.payload_encoding)), s.payload_type != null && (e.payload_type = String(s.payload_type)), s.payload != null) {
					if (typeof s.payload != "object") throw TypeError(".pigeon.RequestBasic.payload: object expected");
					e.payload = a.pigeon.RequestBasic.Request.fromObject(s.payload)
				}
				return e
			}, l.toObject = function(s, e) {
				e || (e = {});
				let o = {};
				if ((e.arrays || e.defaults) && (o.headers = []), e.defaults) {
					if (o.sequence_id = 0, i.Long) {
						let t = new i.Long(0, 0, !0);
						o.log_id = e.longs === String ? t.toString() : e.longs === Number ? t.toNumber() : t
					} else o.log_id = e.longs === String ? "0" : 0;
					o.service = 0, o.method = 0, o.payload_type = "", o.payload = null
				}
				if (s.sequence_id != null && s.hasOwnProperty("sequence_id") && (o.sequence_id = s.sequence_id), s.log_id != null && s.hasOwnProperty("log_id") && (typeof s.log_id == "number" ? o.log_id = e.longs === String ? String(s.log_id) : s.log_id : o.log_id = e.longs === String ? i.Long.prototype.toString.call(s.log_id) : e.longs === Number ? new i.LongBits(s.log_id.low >>> 0, s.log_id.high >>> 0)
					.toNumber(!0) : s.log_id), s.service != null && s.hasOwnProperty("service") && (o.service = s.service), s.method != null && s.hasOwnProperty("method") && (o.method = s.method), s.headers && s.headers.length) {
					o.headers = [];
					for (let t = 0; t < s.headers.length; ++t) o.headers[t] = a.pigeon.StringKeyValue.toObject(s.headers[t], e)
				}
				return s.payload_encoding != null && s.hasOwnProperty("payload_encoding") && (o.payload_encoding = s.payload_encoding, e.oneofs && (o._payload_encoding = "payload_encoding")), s.payload_type != null && s.hasOwnProperty("payload_type") && (o.payload_type = s.payload_type), s.payload != null && s.hasOwnProperty("payload") && (o.payload = a.pigeon.RequestBasic.Request.toObject(s.payload, e)), o
			}, l.prototype.toJSON = function() {
				return this.constructor.toObject(this, w.util.toJSONOptions)
			}, l.getTypeUrl = function(s) {
				return s === void 0 && (s = "type.googleapis.com"), s + "/pigeon.RequestBasic"
			}, l.Request = function() {
				function _(e) {
					if (this.headers = [], e)
						for (let o = Object.keys(e), t = 0; t < o.length; ++t) e[o[t]] != null && (this[o[t]] = e[o[t]])
				}
				_.prototype.cmd = 0, _.prototype.sequence_id = 0, _.prototype.sdk_version = "", _.prototype.token = "", _.prototype.refer = 1, _.prototype.inbox_type = 0, _.prototype.build_number = "", _.prototype.body = null, _.prototype.device_id = "", _.prototype.channel = null, _.prototype.device_platform = "", _.prototype.device_type = null, _.prototype.os_version = null, _.prototype.version_code = null, _.prototype.headers = i.emptyArray, _.prototype.config_id = null, _.prototype.token_info = null, _.prototype.auth_type = 0, _.prototype.biz = null, _.prototype.access = null, _.prototype.ts_sign = null, _.prototype.sdk_cert = null, _.prototype.reuqest_sign = null;
				let s;
				return Object.defineProperty(_.prototype, "_channel", {
					get: i.oneOfGetter(s = ["channel"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_device_type", {
					get: i.oneOfGetter(s = ["device_type"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_os_version", {
					get: i.oneOfGetter(s = ["os_version"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_version_code", {
					get: i.oneOfGetter(s = ["version_code"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_config_id", {
					get: i.oneOfGetter(s = ["config_id"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_biz", {
					get: i.oneOfGetter(s = ["biz"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_access", {
					get: i.oneOfGetter(s = ["access"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_ts_sign", {
					get: i.oneOfGetter(s = ["ts_sign"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_sdk_cert", {
					get: i.oneOfGetter(s = ["sdk_cert"]),
					set: i.oneOfSetter(s)
				}), Object.defineProperty(_.prototype, "_reuqest_sign", {
					get: i.oneOfGetter(s = ["reuqest_sign"]),
					set: i.oneOfSetter(s)
				}), _.create = function(o) {
					return new _(o)
				}, _.encode = function(o, t) {
					if (t || (t = x.create()), t.uint32(8)
						.uint32(o.cmd), t.uint32(16)
						.uint32(o.sequence_id), t.uint32(26)
						.string(o.sdk_version), t.uint32(34)
						.string(o.token), t.uint32(40)
						.int32(o.refer), t.uint32(48)
						.uint32(o.inbox_type), t.uint32(58)
						.string(o.build_number), a.pigeon.RequestBasic.Request.RequestBody.encode(o.body, t.uint32(66)
							.fork())
						.ldelim(), t.uint32(74)
						.string(o.device_id), o.channel != null && Object.hasOwnProperty.call(o, "channel") && t.uint32(82)
						.string(o.channel), t.uint32(90)
						.string(o.device_platform), o.device_type != null && Object.hasOwnProperty.call(o, "device_type") && t.uint32(98)
						.string(o.device_type), o.os_version != null && Object.hasOwnProperty.call(o, "os_version") && t.uint32(106)
						.string(o.os_version), o.version_code != null && Object.hasOwnProperty.call(o, "version_code") && t.uint32(114)
						.string(o.version_code), o.headers != null && o.headers.length)
						for (let n = 0; n < o.headers.length; ++n) a.pigeon.StringKeyValue.encode(o.headers[n], t.uint32(122)
								.fork())
							.ldelim();
					return o.config_id != null && Object.hasOwnProperty.call(o, "config_id") && t.uint32(128)
						.uint32(o.config_id), o.token_info != null && Object.hasOwnProperty.call(o, "token_info") && a.pigeon.RequestBasic.Request.TokenInfo.encode(o.token_info, t.uint32(138)
							.fork())
						.ldelim(), t.uint32(144)
						.uint32(o.auth_type), o.biz != null && Object.hasOwnProperty.call(o, "biz") && t.uint32(170)
						.string(o.biz), o.access != null && Object.hasOwnProperty.call(o, "access") && t.uint32(178)
						.string(o.access), o.ts_sign != null && Object.hasOwnProperty.call(o, "ts_sign") && t.uint32(186)
						.string(o.ts_sign), o.sdk_cert != null && Object.hasOwnProperty.call(o, "sdk_cert") && t.uint32(194)
						.string(o.sdk_cert), o.reuqest_sign != null && Object.hasOwnProperty.call(o, "reuqest_sign") && t.uint32(202)
						.string(o.reuqest_sign), t
				}, _.encodeDelimited = function(o, t) {
					return this.encode(o, t)
						.ldelim()
				}, _.decode = function(o, t) {
					o instanceof p || (o = p.create(o));
					let n = t === void 0 ? o.len : o.pos + t,
						r = new a.pigeon.RequestBasic.Request;
					for (; o.pos < n;) {
						let c = o.uint32();
						switch (c >>> 3) {
							case 1:
								{
									r.cmd = o.uint32();
									break
								}
							case 2:
								{
									r.sequence_id = o.uint32();
									break
								}
							case 3:
								{
									r.sdk_version = o.string();
									break
								}
							case 4:
								{
									r.token = o.string();
									break
								}
							case 5:
								{
									r.refer = o.int32();
									break
								}
							case 6:
								{
									r.inbox_type = o.uint32();
									break
								}
							case 7:
								{
									r.build_number = o.string();
									break
								}
							case 8:
								{
									r.body = a.pigeon.RequestBasic.Request.RequestBody.decode(o, o.uint32());
									break
								}
							case 9:
								{
									r.device_id = o.string();
									break
								}
							case 10:
								{
									r.channel = o.string();
									break
								}
							case 11:
								{
									r.device_platform = o.string();
									break
								}
							case 12:
								{
									r.device_type = o.string();
									break
								}
							case 13:
								{
									r.os_version = o.string();
									break
								}
							case 14:
								{
									r.version_code = o.string();
									break
								}
							case 15:
								{
									r.headers && r.headers.length || (r.headers = []),
									r.headers.push(a.pigeon.StringKeyValue.decode(o, o.uint32()));
									break
								}
							case 16:
								{
									r.config_id = o.uint32();
									break
								}
							case 17:
								{
									r.token_info = a.pigeon.RequestBasic.Request.TokenInfo.decode(o, o.uint32());
									break
								}
							case 18:
								{
									r.auth_type = o.uint32();
									break
								}
							case 21:
								{
									r.biz = o.string();
									break
								}
							case 22:
								{
									r.access = o.string();
									break
								}
							case 23:
								{
									r.ts_sign = o.string();
									break
								}
							case 24:
								{
									r.sdk_cert = o.string();
									break
								}
							case 25:
								{
									r.reuqest_sign = o.string();
									break
								}
							default:
								o.skipType(c & 7);
								break
						}
					}
					if (!r.hasOwnProperty("cmd")) throw i.ProtocolError("missing required 'cmd'", {
						instance: r
					});
					if (!r.hasOwnProperty("sequence_id")) throw i.ProtocolError("missing required 'sequence_id'", {
						instance: r
					});
					if (!r.hasOwnProperty("sdk_version")) throw i.ProtocolError("missing required 'sdk_version'", {
						instance: r
					});
					if (!r.hasOwnProperty("token")) throw i.ProtocolError("missing required 'token'", {
						instance: r
					});
					if (!r.hasOwnProperty("refer")) throw i.ProtocolError("missing required 'refer'", {
						instance: r
					});
					if (!r.hasOwnProperty("inbox_type")) throw i.ProtocolError("missing required 'inbox_type'", {
						instance: r
					});
					if (!r.hasOwnProperty("build_number")) throw i.ProtocolError("missing required 'build_number'", {
						instance: r
					});
					if (!r.hasOwnProperty("body")) throw i.ProtocolError("missing required 'body'", {
						instance: r
					});
					if (!r.hasOwnProperty("device_id")) throw i.ProtocolError("missing required 'device_id'", {
						instance: r
					});
					if (!r.hasOwnProperty("device_platform")) throw i.ProtocolError("missing required 'device_platform'", {
						instance: r
					});
					if (!r.hasOwnProperty("auth_type")) throw i.ProtocolError("missing required 'auth_type'", {
						instance: r
					});
					return r
				}, _.decodeDelimited = function(o) {
					return o instanceof p || (o = new p(o)), this.decode(o, o.uint32())
				}, _.verify = function(o) {
					if (typeof o != "object" || o === null) return "object expected";
					if (!i.isInteger(o.cmd)) return "cmd: integer expected";
					if (!i.isInteger(o.sequence_id)) return "sequence_id: integer expected";
					if (!i.isString(o.sdk_version)) return "sdk_version: string expected";
					if (!i.isString(o.token)) return "token: string expected";
					switch (o.refer) {
						default:
							return "refer: enum value expected";
						case 1:
						case 2:
						case 3:
						case 4:
							break
					}
					if (!i.isInteger(o.inbox_type)) return "inbox_type: integer expected";
					if (!i.isString(o.build_number)) return "build_number: string expected"; {
						let t = a.pigeon.RequestBasic.Request.RequestBody.verify(o.body);
						if (t) return "body." + t
					}
					if (!i.isString(o.device_id)) return "device_id: string expected";
					if (o.channel != null && o.hasOwnProperty("channel") && !i.isString(o.channel)) return "channel: string expected";
					if (!i.isString(o.device_platform)) return "device_platform: string expected";
					if (o.device_type != null && o.hasOwnProperty("device_type") && !i.isString(o.device_type)) return "device_type: string expected";
					if (o.os_version != null && o.hasOwnProperty("os_version") && !i.isString(o.os_version)) return "os_version: string expected";
					if (o.version_code != null && o.hasOwnProperty("version_code") && !i.isString(o.version_code)) return "version_code: string expected";
					if (o.headers != null && o.hasOwnProperty("headers")) {
						if (!Array.isArray(o.headers)) return "headers: array expected";
						for (let t = 0; t < o.headers.length; ++t) {
							let n = a.pigeon.StringKeyValue.verify(o.headers[t]);
							if (n) return "headers." + n
						}
					}
					if (o.config_id != null && o.hasOwnProperty("config_id") && !i.isInteger(o.config_id)) return "config_id: integer expected";
					if (o.token_info != null && o.hasOwnProperty("token_info")) {
						let t = a.pigeon.RequestBasic.Request.TokenInfo.verify(o.token_info);
						if (t) return "token_info." + t
					}
					return i.isInteger(o.auth_type) ? o.biz != null && o.hasOwnProperty("biz") && !i.isString(o.biz) ? "biz: string expected" : o.access != null && o.hasOwnProperty("access") && !i.isString(o.access) ? "access: string expected" : o.ts_sign != null && o.hasOwnProperty("ts_sign") && !i.isString(o.ts_sign) ? "ts_sign: string expected" : o.sdk_cert != null && o.hasOwnProperty("sdk_cert") && !i.isString(o.sdk_cert) ? "sdk_cert: string expected" : o.reuqest_sign != null && o.hasOwnProperty("reuqest_sign") && !i.isString(o.reuqest_sign) ? "reuqest_sign: string expected" : null : "auth_type: integer expected"
				}, _.fromObject = function(o) {
					if (o instanceof a.pigeon.RequestBasic.Request) return o;
					let t = new a.pigeon.RequestBasic.Request;
					switch (o.cmd != null && (t.cmd = o.cmd >>> 0), o.sequence_id != null && (t.sequence_id = o.sequence_id >>> 0), o.sdk_version != null && (t.sdk_version = String(o.sdk_version)), o.token != null && (t.token = String(o.token)), o.refer) {
						default:
							if (typeof o.refer == "number") {
								t.refer = o.refer;
								break
							}
							break;
						case "ANDROID":
						case 1:
							t.refer = 1;
							break;
						case "IOS":
						case 2:
							t.refer = 2;
							break;
						case "PC":
						case 3:
							t.refer = 3;
							break;
						case "SERVER":
						case 4:
							t.refer = 4;
							break
					}
					if (o.inbox_type != null && (t.inbox_type = o.inbox_type >>> 0), o.build_number != null && (t.build_number = String(o.build_number)), o.body != null) {
						if (typeof o.body != "object") throw TypeError(".pigeon.RequestBasic.Request.body: object expected");
						t.body = a.pigeon.RequestBasic.Request.RequestBody.fromObject(o.body)
					}
					if (o.device_id != null && (t.device_id = String(o.device_id)), o.channel != null && (t.channel = String(o.channel)), o.device_platform != null && (t.device_platform = String(o.device_platform)), o.device_type != null && (t.device_type = String(o.device_type)), o.os_version != null && (t.os_version = String(o.os_version)), o.version_code != null && (t.version_code = String(o.version_code)), o.headers) {
						if (!Array.isArray(o.headers)) throw TypeError(".pigeon.RequestBasic.Request.headers: array expected");
						t.headers = [];
						for (let n = 0; n < o.headers.length; ++n) {
							if (typeof o.headers[n] != "object") throw TypeError(".pigeon.RequestBasic.Request.headers: object expected");
							t.headers[n] = a.pigeon.StringKeyValue.fromObject(o.headers[n])
						}
					}
					if (o.config_id != null && (t.config_id = o.config_id >>> 0), o.token_info != null) {
						if (typeof o.token_info != "object") throw TypeError(".pigeon.RequestBasic.Request.token_info: object expected");
						t.token_info = a.pigeon.RequestBasic.Request.TokenInfo.fromObject(o.token_info)
					}
					return o.auth_type != null && (t.auth_type = o.auth_type >>> 0), o.biz != null && (t.biz = String(o.biz)), o.access != null && (t.access = String(o.access)), o.ts_sign != null && (t.ts_sign = String(o.ts_sign)), o.sdk_cert != null && (t.sdk_cert = String(o.sdk_cert)), o.reuqest_sign != null && (t.reuqest_sign = String(o.reuqest_sign)), t
				}, _.toObject = function(o, t) {
					t || (t = {});
					let n = {};
					if ((t.arrays || t.defaults) && (n.headers = []), t.defaults && (n.cmd = 0, n.sequence_id = 0, n.sdk_version = "", n.token = "", n.refer = t.enums === String ? "ANDROID" : 1, n.inbox_type = 0, n.build_number = "", n.body = null, n.device_id = "", n.device_platform = "", n.token_info = null, n.auth_type = 0), o.cmd != null && o.hasOwnProperty("cmd") && (n.cmd = o.cmd), o.sequence_id != null && o.hasOwnProperty("sequence_id") && (n.sequence_id = o.sequence_id), o.sdk_version != null && o.hasOwnProperty("sdk_version") && (n.sdk_version = o.sdk_version), o.token != null && o.hasOwnProperty("token") && (n.token = o.token), o.refer != null && o.hasOwnProperty("refer") && (n.refer = t.enums === String ? a.pigeon.RequestBasic.Request.Refer[o.refer] === void 0 ? o.refer : a.pigeon.RequestBasic.Request.Refer[o.refer] : o.refer), o.inbox_type != null && o.hasOwnProperty("inbox_type") && (n.inbox_type = o.inbox_type), o.build_number != null && o.hasOwnProperty("build_number") && (n.build_number = o.build_number), o.body != null && o.hasOwnProperty("body") && (n.body = a.pigeon.RequestBasic.Request.RequestBody.toObject(o.body, t)), o.device_id != null && o.hasOwnProperty("device_id") && (n.device_id = o.device_id), o.channel != null && o.hasOwnProperty("channel") && (n.channel = o.channel, t.oneofs && (n._channel = "channel")), o.device_platform != null && o.hasOwnProperty("device_platform") && (n.device_platform = o.device_platform), o.device_type != null && o.hasOwnProperty("device_type") && (n.device_type = o.device_type, t.oneofs && (n._device_type = "device_type")), o.os_version != null && o.hasOwnProperty("os_version") && (n.os_version = o.os_version, t.oneofs && (n._os_version = "os_version")), o.version_code != null && o.hasOwnProperty("version_code") && (n.version_code = o.version_code, t.oneofs && (n._version_code = "version_code")), o.headers && o.headers.length) {
						n.headers = [];
						for (let r = 0; r < o.headers.length; ++r) n.headers[r] = a.pigeon.StringKeyValue.toObject(o.headers[r], t)
					}
					return o.config_id != null && o.hasOwnProperty("config_id") && (n.config_id = o.config_id, t.oneofs && (n._config_id = "config_id")), o.token_info != null && o.hasOwnProperty("token_info") && (n.token_info = a.pigeon.RequestBasic.Request.TokenInfo.toObject(o.token_info, t)), o.auth_type != null && o.hasOwnProperty("auth_type") && (n.auth_type = o.auth_type), o.biz != null && o.hasOwnProperty("biz") && (n.biz = o.biz, t.oneofs && (n._biz = "biz")), o.access != null && o.hasOwnProperty("access") && (n.access = o.access, t.oneofs && (n._access = "access")), o.ts_sign != null && o.hasOwnProperty("ts_sign") && (n.ts_sign = o.ts_sign, t.oneofs && (n._ts_sign = "ts_sign")), o.sdk_cert != null && o.hasOwnProperty("sdk_cert") && (n.sdk_cert = o.sdk_cert, t.oneofs && (n._sdk_cert = "sdk_cert")), o.reuqest_sign != null && o.hasOwnProperty("reuqest_sign") && (n.reuqest_sign = o.reuqest_sign, t.oneofs && (n._reuqest_sign = "reuqest_sign")), n
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(o) {
					return o === void 0 && (o = "type.googleapis.com"), o + "/pigeon.RequestBasic.Request"
				}, _.TokenInfo = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.mark_id = 0, e.prototype.type = 0, e.prototype.app_id = 0, e.prototype.user_id = 0, e.prototype.timestamp = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.mark_id != null && Object.hasOwnProperty.call(t, "mark_id") && n.uint32(8)
							.uint32(t.mark_id), t.type != null && Object.hasOwnProperty.call(t, "type") && n.uint32(16)
							.uint32(t.type), t.app_id != null && Object.hasOwnProperty.call(t, "app_id") && n.uint32(24)
							.uint32(t.app_id), t.user_id != null && Object.hasOwnProperty.call(t, "user_id") && n.uint32(32)
							.uint64(t.user_id), t.timestamp != null && Object.hasOwnProperty.call(t, "timestamp") && n.uint32(40)
							.uint64(t.timestamp), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.TokenInfo;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.mark_id = t.uint32();
										break
									}
								case 2:
									{
										c.type = t.uint32();
										break
									}
								case 3:
									{
										c.app_id = t.uint32();
										break
									}
								case 4:
									{
										c.user_id = t.uint64();
										break
									}
								case 5:
									{
										c.timestamp = t.uint64();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.mark_id != null && t.hasOwnProperty("mark_id") && !i.isInteger(t.mark_id) ? "mark_id: integer expected" : t.type != null && t.hasOwnProperty("type") && !i.isInteger(t.type) ? "type: integer expected" : t.app_id != null && t.hasOwnProperty("app_id") && !i.isInteger(t.app_id) ? "app_id: integer expected" : t.user_id != null && t.hasOwnProperty("user_id") && !i.isInteger(t.user_id) && !(t.user_id && i.isInteger(t.user_id.low) && i.isInteger(t.user_id.high)) ? "user_id: integer|Long expected" : t.timestamp != null && t.hasOwnProperty("timestamp") && !i.isInteger(t.timestamp) && !(t.timestamp && i.isInteger(t.timestamp.low) && i.isInteger(t.timestamp.high)) ? "timestamp: integer|Long expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.TokenInfo) return t;
						let n = new a.pigeon.RequestBasic.Request.TokenInfo;
						return t.mark_id != null && (n.mark_id = t.mark_id >>> 0), t.type != null && (n.type = t.type >>> 0), t.app_id != null && (n.app_id = t.app_id >>> 0), t.user_id != null && (i.Long ? (n.user_id = i.Long.fromValue(t.user_id))
							.unsigned = !0 : typeof t.user_id == "string" ? n.user_id = parseInt(t.user_id, 10) : typeof t.user_id == "number" ? n.user_id = t.user_id : typeof t.user_id == "object" && (n.user_id = new i.LongBits(t.user_id.low >>> 0, t.user_id.high >>> 0)
								.toNumber(!0))), t.timestamp != null && (i.Long ? (n.timestamp = i.Long.fromValue(t.timestamp))
							.unsigned = !0 : typeof t.timestamp == "string" ? n.timestamp = parseInt(t.timestamp, 10) : typeof t.timestamp == "number" ? n.timestamp = t.timestamp : typeof t.timestamp == "object" && (n.timestamp = new i.LongBits(t.timestamp.low >>> 0, t.timestamp.high >>> 0)
								.toNumber(!0))), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (r.mark_id = 0, r.type = 0, r.app_id = 0, i.Long) {
								let c = new i.Long(0, 0, !0);
								r.user_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.user_id = n.longs === String ? "0" : 0;
							if (i.Long) {
								let c = new i.Long(0, 0, !0);
								r.timestamp = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.timestamp = n.longs === String ? "0" : 0
						}
						return t.mark_id != null && t.hasOwnProperty("mark_id") && (r.mark_id = t.mark_id), t.type != null && t.hasOwnProperty("type") && (r.type = t.type), t.app_id != null && t.hasOwnProperty("app_id") && (r.app_id = t.app_id), t.user_id != null && t.hasOwnProperty("user_id") && (typeof t.user_id == "number" ? r.user_id = n.longs === String ? String(t.user_id) : t.user_id : r.user_id = n.longs === String ? i.Long.prototype.toString.call(t.user_id) : n.longs === Number ? new i.LongBits(t.user_id.low >>> 0, t.user_id.high >>> 0)
							.toNumber(!0) : t.user_id), t.timestamp != null && t.hasOwnProperty("timestamp") && (typeof t.timestamp == "number" ? r.timestamp = n.longs === String ? String(t.timestamp) : t.timestamp : r.timestamp = n.longs === String ? i.Long.prototype.toString.call(t.timestamp) : n.longs === Number ? new i.LongBits(t.timestamp.low >>> 0, t.timestamp.high >>> 0)
							.toNumber(!0) : t.timestamp), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.TokenInfo"
					}, e
				}(), _.Refer = function() {
					const e = {},
						o = Object.create(e);
					return o[e[1] = "ANDROID"] = 1, o[e[2] = "IOS"] = 2, o[e[3] = "PC"] = 3, o[e[4] = "SERVER"] = 4, o
				}(), _.RequestBody = function() {
					function e(t) {
						if (t)
							for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
					}
					e.prototype.send_message_body = null, e.prototype.messages_per_user_body = null, e.prototype.messages_per_user_init_v2_body = null, e.prototype.get_message_by_id_body = null, e.prototype.messages_in_conversation_body = null, e.prototype.get_messages_checkinfo_in_conversation_body = null, e.prototype.send_user_action_body = null, e.prototype.send_input_status_body = null, e.prototype.delete_conversation_body = null, e.prototype.mark_conversation_read_body = null, e.prototype.conversation_participants_body = null, e.prototype.batch_mark_read_body = null, e.prototype.dissolve_conversation_body = null, e.prototype.create_conversation_v2_body = null, e.prototype.get_conversation_info_list_v2_body = null, e.prototype.get_conversation_info_list_by_favorite_v2_body = null, e.prototype.get_conversation_info_list_by_top_v2_body = null, e.prototype.conversation_add_participants_body = null, e.prototype.conversation_remove_participants_body = null, e.prototype.leave_conversation_body = null, e.prototype.mget_conversation_participants_body = null, e.prototype.update_conversation_participant_body = null, e.prototype.delete_message_body = null, e.prototype.recall_message_body = null, e.prototype.modify_message_property_body = null, e.prototype.audio_recognition_body = null, e.prototype.get_conversation_core_info_body = null, e.prototype.set_conversation_core_info_body = null, e.prototype.upsert_conversation_core_ext_info_body = null, e.prototype.set_conversation_setting_info_body = null, e.prototype.upsert_conversation_setting_ext_info_body = null, e.prototype.get_stranger_conversation_body = null, e.prototype.get_stranger_messages_body = null, e.prototype.delete_stranger_message_body = null, e.prototype.delete_stranger_conversation_body = null, e.prototype.delete_stranger_all_conversation_body = null, e.prototype.mark_stranger_conversation_read_body = null, e.prototype.mark_stranger_all_conversation_read_body = null, e.prototype.participants_read_index_body = null, e.prototype.participants_min_index_body = null, e.prototype.get_upload_token_body = null, e.prototype.get_media_urls_body = null, e.prototype.get_ticket_body = null, e.prototype.get_conversation_list_body = null, e.prototype.broadcast_send_message_body = null, e.prototype.broadcast_recv_message_body = null, e.prototype.broadcast_user_counter_body = null, e.prototype.client_ack_body = null, e.prototype.create_voip_body = null, e.prototype.call_voip_body = null, e.prototype.update_voip_body = null, e.prototype.channel_heartbeat_body = null, e.prototype.profile_get_info = null, e.prototype.report_client_metrics_body = null, e.prototype.get_configs_body = null, e.prototype.modify_message_ext_body = null, e.prototype.unread_count_report_body = null, e.prototype.block_members_body = null, e.prototype.block_conversation_body = null, e.prototype.get_unread_count_body = null, e.prototype.send_message_p2p_body = null, e.prototype.get_blocklist_body = null, e.prototype.set_blocklist_body = null, e.prototype.check_in_blocklist_body = null, e.prototype.mark_message_body = null, e.prototype.pull_mark_message_body = null, e.prototype.batch_get_conversation_participants_readindex = null, e.prototype.message_by_init = null, e.prototype.mark_msg_unread_count_report = null, e.prototype.mark_msg_get_unread_count = null, e.prototype.batch_unmark_message = null, e.prototype.client_batch_ack_body = null;
					let o;
					return Object.defineProperty(e.prototype, "_send_message_body", {
						get: i.oneOfGetter(o = ["send_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_messages_per_user_body", {
						get: i.oneOfGetter(o = ["messages_per_user_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_messages_per_user_init_v2_body", {
						get: i.oneOfGetter(o = ["messages_per_user_init_v2_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_message_by_id_body", {
						get: i.oneOfGetter(o = ["get_message_by_id_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_messages_in_conversation_body", {
						get: i.oneOfGetter(o = ["messages_in_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_messages_checkinfo_in_conversation_body", {
						get: i.oneOfGetter(o = ["get_messages_checkinfo_in_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_send_user_action_body", {
						get: i.oneOfGetter(o = ["send_user_action_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_send_input_status_body", {
						get: i.oneOfGetter(o = ["send_input_status_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_delete_conversation_body", {
						get: i.oneOfGetter(o = ["delete_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_mark_conversation_read_body", {
						get: i.oneOfGetter(o = ["mark_conversation_read_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_conversation_participants_body", {
						get: i.oneOfGetter(o = ["conversation_participants_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_batch_mark_read_body", {
						get: i.oneOfGetter(o = ["batch_mark_read_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_dissolve_conversation_body", {
						get: i.oneOfGetter(o = ["dissolve_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_create_conversation_v2_body", {
						get: i.oneOfGetter(o = ["create_conversation_v2_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_conversation_info_list_v2_body", {
						get: i.oneOfGetter(o = ["get_conversation_info_list_v2_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_conversation_info_list_by_favorite_v2_body", {
						get: i.oneOfGetter(o = ["get_conversation_info_list_by_favorite_v2_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_conversation_info_list_by_top_v2_body", {
						get: i.oneOfGetter(o = ["get_conversation_info_list_by_top_v2_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_conversation_add_participants_body", {
						get: i.oneOfGetter(o = ["conversation_add_participants_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_conversation_remove_participants_body", {
						get: i.oneOfGetter(o = ["conversation_remove_participants_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_leave_conversation_body", {
						get: i.oneOfGetter(o = ["leave_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_mget_conversation_participants_body", {
						get: i.oneOfGetter(o = ["mget_conversation_participants_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_update_conversation_participant_body", {
						get: i.oneOfGetter(o = ["update_conversation_participant_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_delete_message_body", {
						get: i.oneOfGetter(o = ["delete_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_recall_message_body", {
						get: i.oneOfGetter(o = ["recall_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_modify_message_property_body", {
						get: i.oneOfGetter(o = ["modify_message_property_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_audio_recognition_body", {
						get: i.oneOfGetter(o = ["audio_recognition_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_conversation_core_info_body", {
						get: i.oneOfGetter(o = ["get_conversation_core_info_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_set_conversation_core_info_body", {
						get: i.oneOfGetter(o = ["set_conversation_core_info_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_upsert_conversation_core_ext_info_body", {
						get: i.oneOfGetter(o = ["upsert_conversation_core_ext_info_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_set_conversation_setting_info_body", {
						get: i.oneOfGetter(o = ["set_conversation_setting_info_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_upsert_conversation_setting_ext_info_body", {
						get: i.oneOfGetter(o = ["upsert_conversation_setting_ext_info_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_stranger_conversation_body", {
						get: i.oneOfGetter(o = ["get_stranger_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_stranger_messages_body", {
						get: i.oneOfGetter(o = ["get_stranger_messages_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_delete_stranger_message_body", {
						get: i.oneOfGetter(o = ["delete_stranger_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_delete_stranger_conversation_body", {
						get: i.oneOfGetter(o = ["delete_stranger_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_delete_stranger_all_conversation_body", {
						get: i.oneOfGetter(o = ["delete_stranger_all_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_mark_stranger_conversation_read_body", {
						get: i.oneOfGetter(o = ["mark_stranger_conversation_read_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_mark_stranger_all_conversation_read_body", {
						get: i.oneOfGetter(o = ["mark_stranger_all_conversation_read_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_participants_read_index_body", {
						get: i.oneOfGetter(o = ["participants_read_index_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_participants_min_index_body", {
						get: i.oneOfGetter(o = ["participants_min_index_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_upload_token_body", {
						get: i.oneOfGetter(o = ["get_upload_token_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_media_urls_body", {
						get: i.oneOfGetter(o = ["get_media_urls_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_ticket_body", {
						get: i.oneOfGetter(o = ["get_ticket_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_conversation_list_body", {
						get: i.oneOfGetter(o = ["get_conversation_list_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_broadcast_send_message_body", {
						get: i.oneOfGetter(o = ["broadcast_send_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_broadcast_recv_message_body", {
						get: i.oneOfGetter(o = ["broadcast_recv_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_broadcast_user_counter_body", {
						get: i.oneOfGetter(o = ["broadcast_user_counter_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_client_ack_body", {
						get: i.oneOfGetter(o = ["client_ack_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_create_voip_body", {
						get: i.oneOfGetter(o = ["create_voip_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_call_voip_body", {
						get: i.oneOfGetter(o = ["call_voip_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_update_voip_body", {
						get: i.oneOfGetter(o = ["update_voip_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_channel_heartbeat_body", {
						get: i.oneOfGetter(o = ["channel_heartbeat_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_profile_get_info", {
						get: i.oneOfGetter(o = ["profile_get_info"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_report_client_metrics_body", {
						get: i.oneOfGetter(o = ["report_client_metrics_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_configs_body", {
						get: i.oneOfGetter(o = ["get_configs_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_modify_message_ext_body", {
						get: i.oneOfGetter(o = ["modify_message_ext_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_unread_count_report_body", {
						get: i.oneOfGetter(o = ["unread_count_report_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_block_members_body", {
						get: i.oneOfGetter(o = ["block_members_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_block_conversation_body", {
						get: i.oneOfGetter(o = ["block_conversation_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_unread_count_body", {
						get: i.oneOfGetter(o = ["get_unread_count_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_send_message_p2p_body", {
						get: i.oneOfGetter(o = ["send_message_p2p_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_get_blocklist_body", {
						get: i.oneOfGetter(o = ["get_blocklist_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_set_blocklist_body", {
						get: i.oneOfGetter(o = ["set_blocklist_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_check_in_blocklist_body", {
						get: i.oneOfGetter(o = ["check_in_blocklist_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_mark_message_body", {
						get: i.oneOfGetter(o = ["mark_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_pull_mark_message_body", {
						get: i.oneOfGetter(o = ["pull_mark_message_body"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_batch_get_conversation_participants_readindex", {
						get: i.oneOfGetter(o = ["batch_get_conversation_participants_readindex"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_message_by_init", {
						get: i.oneOfGetter(o = ["message_by_init"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_mark_msg_unread_count_report", {
						get: i.oneOfGetter(o = ["mark_msg_unread_count_report"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_mark_msg_get_unread_count", {
						get: i.oneOfGetter(o = ["mark_msg_get_unread_count"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_batch_unmark_message", {
						get: i.oneOfGetter(o = ["batch_unmark_message"]),
						set: i.oneOfSetter(o)
					}), Object.defineProperty(e.prototype, "_client_batch_ack_body", {
						get: i.oneOfGetter(o = ["client_batch_ack_body"]),
						set: i.oneOfSetter(o)
					}), e.create = function(n) {
						return new e(n)
					}, e.encode = function(n, r) {
						return r || (r = x.create()), n.send_message_body != null && Object.hasOwnProperty.call(n, "send_message_body") && a.pigeon.RequestBasic.Request.SendMessageRequestBody.encode(n.send_message_body, r.uint32(802)
								.fork())
							.ldelim(), n.messages_per_user_body != null && Object.hasOwnProperty.call(n, "messages_per_user_body") && a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody.encode(n.messages_per_user_body, r.uint32(1602)
								.fork())
							.ldelim(), n.messages_per_user_init_v2_body != null && Object.hasOwnProperty.call(n, "messages_per_user_init_v2_body") && r.uint32(1626)
							.bytes(n.messages_per_user_init_v2_body), n.get_message_by_id_body != null && Object.hasOwnProperty.call(n, "get_message_by_id_body") && r.uint32(1690)
							.bytes(n.get_message_by_id_body), n.messages_in_conversation_body != null && Object.hasOwnProperty.call(n, "messages_in_conversation_body") && r.uint32(2410)
							.bytes(n.messages_in_conversation_body), n.get_messages_checkinfo_in_conversation_body != null && Object.hasOwnProperty.call(n, "get_messages_checkinfo_in_conversation_body") && r.uint32(2418)
							.bytes(n.get_messages_checkinfo_in_conversation_body), n.send_user_action_body != null && Object.hasOwnProperty.call(n, "send_user_action_body") && r.uint32(3282)
							.bytes(n.send_user_action_body), n.send_input_status_body != null && Object.hasOwnProperty.call(n, "send_input_status_body") && r.uint32(3290)
							.bytes(n.send_input_status_body), n.delete_conversation_body != null && Object.hasOwnProperty.call(n, "delete_conversation_body") && r.uint32(4826)
							.bytes(n.delete_conversation_body), n.mark_conversation_read_body != null && Object.hasOwnProperty.call(n, "mark_conversation_read_body") && r.uint32(4834)
							.bytes(n.mark_conversation_read_body), n.conversation_participants_body != null && Object.hasOwnProperty.call(n, "conversation_participants_body") && r.uint32(4842)
							.bytes(n.conversation_participants_body), n.create_conversation_v2_body != null && Object.hasOwnProperty.call(n, "create_conversation_v2_body") && a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody.encode(n.create_conversation_v2_body, r.uint32(4874)
								.fork())
							.ldelim(), n.get_conversation_info_list_v2_body != null && Object.hasOwnProperty.call(n, "get_conversation_info_list_v2_body") && a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody.encode(n.get_conversation_info_list_v2_body, r.uint32(4882)
								.fork())
							.ldelim(), n.get_conversation_info_list_by_favorite_v2_body != null && Object.hasOwnProperty.call(n, "get_conversation_info_list_by_favorite_v2_body") && r.uint32(4890)
							.bytes(n.get_conversation_info_list_by_favorite_v2_body), n.get_conversation_info_list_by_top_v2_body != null && Object.hasOwnProperty.call(n, "get_conversation_info_list_by_top_v2_body") && r.uint32(4898)
							.bytes(n.get_conversation_info_list_by_top_v2_body), n.batch_mark_read_body != null && Object.hasOwnProperty.call(n, "batch_mark_read_body") && r.uint32(4906)
							.bytes(n.batch_mark_read_body), n.dissolve_conversation_body != null && Object.hasOwnProperty.call(n, "dissolve_conversation_body") && r.uint32(4914)
							.bytes(n.dissolve_conversation_body), n.conversation_add_participants_body != null && Object.hasOwnProperty.call(n, "conversation_add_participants_body") && a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest.encode(n.conversation_add_participants_body, r.uint32(5202)
								.fork())
							.ldelim(), n.conversation_remove_participants_body != null && Object.hasOwnProperty.call(n, "conversation_remove_participants_body") && a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.encode(n.conversation_remove_participants_body, r.uint32(5210)
								.fork())
							.ldelim(), n.leave_conversation_body != null && Object.hasOwnProperty.call(n, "leave_conversation_body") && a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody.encode(n.leave_conversation_body, r.uint32(5218)
								.fork())
							.ldelim(), n.mget_conversation_participants_body != null && Object.hasOwnProperty.call(n, "mget_conversation_participants_body") && r.uint32(5234)
							.bytes(n.mget_conversation_participants_body), n.update_conversation_participant_body != null && Object.hasOwnProperty.call(n, "update_conversation_participant_body") && r.uint32(5242)
							.bytes(n.update_conversation_participant_body), n.delete_message_body != null && Object.hasOwnProperty.call(n, "delete_message_body") && r.uint32(5610)
							.bytes(n.delete_message_body), n.recall_message_body != null && Object.hasOwnProperty.call(n, "recall_message_body") && a.pigeon.RequestBasic.Request.RecallMessageRequestBody.encode(n.recall_message_body, r.uint32(5618)
								.fork())
							.ldelim(), n.modify_message_property_body != null && Object.hasOwnProperty.call(n, "modify_message_property_body") && a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.encode(n.modify_message_property_body, r.uint32(5642)
								.fork())
							.ldelim(), n.get_conversation_core_info_body != null && Object.hasOwnProperty.call(n, "get_conversation_core_info_body") && r.uint32(7210)
							.bytes(n.get_conversation_core_info_body), n.set_conversation_core_info_body != null && Object.hasOwnProperty.call(n, "set_conversation_core_info_body") && r.uint32(7218)
							.bytes(n.set_conversation_core_info_body), n.upsert_conversation_core_ext_info_body != null && Object.hasOwnProperty.call(n, "upsert_conversation_core_ext_info_body") && r.uint32(7234)
							.bytes(n.upsert_conversation_core_ext_info_body), n.set_conversation_setting_info_body != null && Object.hasOwnProperty.call(n, "set_conversation_setting_info_body") && r.uint32(7370)
							.bytes(n.set_conversation_setting_info_body), n.upsert_conversation_setting_ext_info_body != null && Object.hasOwnProperty.call(n, "upsert_conversation_setting_ext_info_body") && r.uint32(7378)
							.bytes(n.upsert_conversation_setting_ext_info_body), n.get_stranger_conversation_body != null && Object.hasOwnProperty.call(n, "get_stranger_conversation_body") && a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody.encode(n.get_stranger_conversation_body, r.uint32(8002)
								.fork())
							.ldelim(), n.get_stranger_messages_body != null && Object.hasOwnProperty.call(n, "get_stranger_messages_body") && r.uint32(8010)
							.bytes(n.get_stranger_messages_body), n.delete_stranger_message_body != null && Object.hasOwnProperty.call(n, "delete_stranger_message_body") && r.uint32(8018)
							.bytes(n.delete_stranger_message_body), n.delete_stranger_conversation_body != null && Object.hasOwnProperty.call(n, "delete_stranger_conversation_body") && r.uint32(8026)
							.bytes(n.delete_stranger_conversation_body), n.delete_stranger_all_conversation_body != null && Object.hasOwnProperty.call(n, "delete_stranger_all_conversation_body") && r.uint32(8034)
							.bytes(n.delete_stranger_all_conversation_body), n.mark_stranger_conversation_read_body != null && Object.hasOwnProperty.call(n, "mark_stranger_conversation_read_body") && r.uint32(8042)
							.bytes(n.mark_stranger_conversation_read_body), n.mark_stranger_all_conversation_read_body != null && Object.hasOwnProperty.call(n, "mark_stranger_all_conversation_read_body") && r.uint32(8050)
							.bytes(n.mark_stranger_all_conversation_read_body), n.participants_read_index_body != null && Object.hasOwnProperty.call(n, "participants_read_index_body") && r.uint32(16002)
							.bytes(n.participants_read_index_body), n.participants_min_index_body != null && Object.hasOwnProperty.call(n, "participants_min_index_body") && r.uint32(16010)
							.bytes(n.participants_min_index_body), n.get_upload_token_body != null && Object.hasOwnProperty.call(n, "get_upload_token_body") && r.uint32(16026)
							.bytes(n.get_upload_token_body), n.get_media_urls_body != null && Object.hasOwnProperty.call(n, "get_media_urls_body") && r.uint32(16034)
							.bytes(n.get_media_urls_body), n.get_ticket_body != null && Object.hasOwnProperty.call(n, "get_ticket_body") && r.uint32(16042)
							.bytes(n.get_ticket_body), n.get_conversation_list_body != null && Object.hasOwnProperty.call(n, "get_conversation_list_body") && a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody.encode(n.get_conversation_list_body, r.uint32(16050)
								.fork())
							.ldelim(), n.broadcast_send_message_body != null && Object.hasOwnProperty.call(n, "broadcast_send_message_body") && r.uint32(16058)
							.bytes(n.broadcast_send_message_body), n.broadcast_recv_message_body != null && Object.hasOwnProperty.call(n, "broadcast_recv_message_body") && r.uint32(16066)
							.bytes(n.broadcast_recv_message_body), n.broadcast_user_counter_body != null && Object.hasOwnProperty.call(n, "broadcast_user_counter_body") && r.uint32(16074)
							.bytes(n.broadcast_user_counter_body), n.client_ack_body != null && Object.hasOwnProperty.call(n, "client_ack_body") && r.uint32(16082)
							.bytes(n.client_ack_body), n.create_voip_body != null && Object.hasOwnProperty.call(n, "create_voip_body") && r.uint32(16090)
							.bytes(n.create_voip_body), n.call_voip_body != null && Object.hasOwnProperty.call(n, "call_voip_body") && r.uint32(16098)
							.bytes(n.call_voip_body), n.update_voip_body != null && Object.hasOwnProperty.call(n, "update_voip_body") && r.uint32(16106)
							.bytes(n.update_voip_body), n.channel_heartbeat_body != null && Object.hasOwnProperty.call(n, "channel_heartbeat_body") && r.uint32(16114)
							.bytes(n.channel_heartbeat_body), n.profile_get_info != null && Object.hasOwnProperty.call(n, "profile_get_info") && r.uint32(16122)
							.bytes(n.profile_get_info), n.report_client_metrics_body != null && Object.hasOwnProperty.call(n, "report_client_metrics_body") && r.uint32(16130)
							.bytes(n.report_client_metrics_body), n.get_configs_body != null && Object.hasOwnProperty.call(n, "get_configs_body") && r.uint32(16138)
							.bytes(n.get_configs_body), n.unread_count_report_body != null && Object.hasOwnProperty.call(n, "unread_count_report_body") && r.uint32(16146)
							.bytes(n.unread_count_report_body), n.block_members_body != null && Object.hasOwnProperty.call(n, "block_members_body") && a.pigeon.RequestBasic.Request.BlockMembersRequestBody.encode(n.block_members_body, r.uint32(16154)
								.fork())
							.ldelim(), n.block_conversation_body != null && Object.hasOwnProperty.call(n, "block_conversation_body") && r.uint32(16162)
							.bytes(n.block_conversation_body), n.modify_message_ext_body != null && Object.hasOwnProperty.call(n, "modify_message_ext_body") && r.uint32(16170)
							.bytes(n.modify_message_ext_body), n.get_unread_count_body != null && Object.hasOwnProperty.call(n, "get_unread_count_body") && r.uint32(16242)
							.bytes(n.get_unread_count_body), n.send_message_p2p_body != null && Object.hasOwnProperty.call(n, "send_message_p2p_body") && r.uint32(16250)
							.bytes(n.send_message_p2p_body), n.get_blocklist_body != null && Object.hasOwnProperty.call(n, "get_blocklist_body") && r.uint32(16258)
							.bytes(n.get_blocklist_body), n.set_blocklist_body != null && Object.hasOwnProperty.call(n, "set_blocklist_body") && r.uint32(16266)
							.bytes(n.set_blocklist_body), n.check_in_blocklist_body != null && Object.hasOwnProperty.call(n, "check_in_blocklist_body") && r.uint32(16274)
							.bytes(n.check_in_blocklist_body), n.mark_message_body != null && Object.hasOwnProperty.call(n, "mark_message_body") && r.uint32(16290)
							.bytes(n.mark_message_body), n.pull_mark_message_body != null && Object.hasOwnProperty.call(n, "pull_mark_message_body") && r.uint32(16298)
							.bytes(n.pull_mark_message_body), n.batch_get_conversation_participants_readindex != null && Object.hasOwnProperty.call(n, "batch_get_conversation_participants_readindex") && r.uint32(16306)
							.bytes(n.batch_get_conversation_participants_readindex), n.message_by_init != null && Object.hasOwnProperty.call(n, "message_by_init") && r.uint32(16346)
							.bytes(n.message_by_init), n.mark_msg_unread_count_report != null && Object.hasOwnProperty.call(n, "mark_msg_unread_count_report") && r.uint32(16434)
							.bytes(n.mark_msg_unread_count_report), n.mark_msg_get_unread_count != null && Object.hasOwnProperty.call(n, "mark_msg_get_unread_count") && r.uint32(16442)
							.bytes(n.mark_msg_get_unread_count), n.batch_unmark_message != null && Object.hasOwnProperty.call(n, "batch_unmark_message") && r.uint32(16450)
							.bytes(n.batch_unmark_message), n.client_batch_ack_body != null && Object.hasOwnProperty.call(n, "client_batch_ack_body") && r.uint32(16458)
							.bytes(n.client_batch_ack_body), n.audio_recognition_body != null && Object.hasOwnProperty.call(n, "audio_recognition_body") && r.uint32(16474)
							.bytes(n.audio_recognition_body), r
					}, e.encodeDelimited = function(n, r) {
						return this.encode(n, r)
							.ldelim()
					}, e.decode = function(n, r) {
						n instanceof p || (n = p.create(n));
						let c = r === void 0 ? n.len : n.pos + r,
							d = new a.pigeon.RequestBasic.Request.RequestBody;
						for (; n.pos < c;) {
							let k = n.uint32();
							switch (k >>> 3) {
								case 100:
									{
										d.send_message_body = a.pigeon.RequestBasic.Request.SendMessageRequestBody.decode(n, n.uint32());
										break
									}
								case 200:
									{
										d.messages_per_user_body = a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody.decode(n, n.uint32());
										break
									}
								case 203:
									{
										d.messages_per_user_init_v2_body = n.bytes();
										break
									}
								case 211:
									{
										d.get_message_by_id_body = n.bytes();
										break
									}
								case 301:
									{
										d.messages_in_conversation_body = n.bytes();
										break
									}
								case 302:
									{
										d.get_messages_checkinfo_in_conversation_body = n.bytes();
										break
									}
								case 410:
									{
										d.send_user_action_body = n.bytes();
										break
									}
								case 411:
									{
										d.send_input_status_body = n.bytes();
										break
									}
								case 603:
									{
										d.delete_conversation_body = n.bytes();
										break
									}
								case 604:
									{
										d.mark_conversation_read_body = n.bytes();
										break
									}
								case 605:
									{
										d.conversation_participants_body = n.bytes();
										break
									}
								case 613:
									{
										d.batch_mark_read_body = n.bytes();
										break
									}
								case 614:
									{
										d.dissolve_conversation_body = n.bytes();
										break
									}
								case 609:
									{
										d.create_conversation_v2_body = a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody.decode(n, n.uint32());
										break
									}
								case 610:
									{
										d.get_conversation_info_list_v2_body = a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody.decode(n, n.uint32());
										break
									}
								case 611:
									{
										d.get_conversation_info_list_by_favorite_v2_body = n.bytes();
										break
									}
								case 612:
									{
										d.get_conversation_info_list_by_top_v2_body = n.bytes();
										break
									}
								case 650:
									{
										d.conversation_add_participants_body = a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest.decode(n, n.uint32());
										break
									}
								case 651:
									{
										d.conversation_remove_participants_body = a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.decode(n, n.uint32());
										break
									}
								case 652:
									{
										d.leave_conversation_body = a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody.decode(n, n.uint32());
										break
									}
								case 654:
									{
										d.mget_conversation_participants_body = n.bytes();
										break
									}
								case 655:
									{
										d.update_conversation_participant_body = n.bytes();
										break
									}
								case 701:
									{
										d.delete_message_body = n.bytes();
										break
									}
								case 702:
									{
										d.recall_message_body = a.pigeon.RequestBasic.Request.RecallMessageRequestBody.decode(n, n.uint32());
										break
									}
								case 705:
									{
										d.modify_message_property_body = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.decode(n, n.uint32());
										break
									}
								case 2059:
									{
										d.audio_recognition_body = n.bytes();
										break
									}
								case 901:
									{
										d.get_conversation_core_info_body = n.bytes();
										break
									}
								case 902:
									{
										d.set_conversation_core_info_body = n.bytes();
										break
									}
								case 904:
									{
										d.upsert_conversation_core_ext_info_body = n.bytes();
										break
									}
								case 921:
									{
										d.set_conversation_setting_info_body = n.bytes();
										break
									}
								case 922:
									{
										d.upsert_conversation_setting_ext_info_body = n.bytes();
										break
									}
								case 1e3:
									{
										d.get_stranger_conversation_body = a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody.decode(n, n.uint32());
										break
									}
								case 1001:
									{
										d.get_stranger_messages_body = n.bytes();
										break
									}
								case 1002:
									{
										d.delete_stranger_message_body = n.bytes();
										break
									}
								case 1003:
									{
										d.delete_stranger_conversation_body = n.bytes();
										break
									}
								case 1004:
									{
										d.delete_stranger_all_conversation_body = n.bytes();
										break
									}
								case 1005:
									{
										d.mark_stranger_conversation_read_body = n.bytes();
										break
									}
								case 1006:
									{
										d.mark_stranger_all_conversation_read_body = n.bytes();
										break
									}
								case 2e3:
									{
										d.participants_read_index_body = n.bytes();
										break
									}
								case 2001:
									{
										d.participants_min_index_body = n.bytes();
										break
									}
								case 2003:
									{
										d.get_upload_token_body = n.bytes();
										break
									}
								case 2004:
									{
										d.get_media_urls_body = n.bytes();
										break
									}
								case 2005:
									{
										d.get_ticket_body = n.bytes();
										break
									}
								case 2006:
									{
										d.get_conversation_list_body = a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody.decode(n, n.uint32());
										break
									}
								case 2007:
									{
										d.broadcast_send_message_body = n.bytes();
										break
									}
								case 2008:
									{
										d.broadcast_recv_message_body = n.bytes();
										break
									}
								case 2009:
									{
										d.broadcast_user_counter_body = n.bytes();
										break
									}
								case 2010:
									{
										d.client_ack_body = n.bytes();
										break
									}
								case 2011:
									{
										d.create_voip_body = n.bytes();
										break
									}
								case 2012:
									{
										d.call_voip_body = n.bytes();
										break
									}
								case 2013:
									{
										d.update_voip_body = n.bytes();
										break
									}
								case 2014:
									{
										d.channel_heartbeat_body = n.bytes();
										break
									}
								case 2015:
									{
										d.profile_get_info = n.bytes();
										break
									}
								case 2016:
									{
										d.report_client_metrics_body = n.bytes();
										break
									}
								case 2017:
									{
										d.get_configs_body = n.bytes();
										break
									}
								case 2021:
									{
										d.modify_message_ext_body = n.bytes();
										break
									}
								case 2018:
									{
										d.unread_count_report_body = n.bytes();
										break
									}
								case 2019:
									{
										d.block_members_body = a.pigeon.RequestBasic.Request.BlockMembersRequestBody.decode(n, n.uint32());
										break
									}
								case 2020:
									{
										d.block_conversation_body = n.bytes();
										break
									}
								case 2030:
									{
										d.get_unread_count_body = n.bytes();
										break
									}
								case 2031:
									{
										d.send_message_p2p_body = n.bytes();
										break
									}
								case 2032:
									{
										d.get_blocklist_body = n.bytes();
										break
									}
								case 2033:
									{
										d.set_blocklist_body = n.bytes();
										break
									}
								case 2034:
									{
										d.check_in_blocklist_body = n.bytes();
										break
									}
								case 2036:
									{
										d.mark_message_body = n.bytes();
										break
									}
								case 2037:
									{
										d.pull_mark_message_body = n.bytes();
										break
									}
								case 2038:
									{
										d.batch_get_conversation_participants_readindex = n.bytes();
										break
									}
								case 2043:
									{
										d.message_by_init = n.bytes();
										break
									}
								case 2054:
									{
										d.mark_msg_unread_count_report = n.bytes();
										break
									}
								case 2055:
									{
										d.mark_msg_get_unread_count = n.bytes();
										break
									}
								case 2056:
									{
										d.batch_unmark_message = n.bytes();
										break
									}
								case 2057:
									{
										d.client_batch_ack_body = n.bytes();
										break
									}
								default:
									n.skipType(k & 7);
									break
							}
						}
						return d
					}, e.decodeDelimited = function(n) {
						return n instanceof p || (n = new p(n)), this.decode(n, n.uint32())
					}, e.verify = function(n) {
						if (typeof n != "object" || n === null) return "object expected";
						if (n.send_message_body != null && n.hasOwnProperty("send_message_body")) {
							let r = a.pigeon.RequestBasic.Request.SendMessageRequestBody.verify(n.send_message_body);
							if (r) return "send_message_body." + r
						}
						if (n.messages_per_user_body != null && n.hasOwnProperty("messages_per_user_body")) {
							let r = a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody.verify(n.messages_per_user_body);
							if (r) return "messages_per_user_body." + r
						}
						if (n.messages_per_user_init_v2_body != null && n.hasOwnProperty("messages_per_user_init_v2_body") && !(n.messages_per_user_init_v2_body && typeof n.messages_per_user_init_v2_body.length == "number" || i.isString(n.messages_per_user_init_v2_body))) return "messages_per_user_init_v2_body: buffer expected";
						if (n.get_message_by_id_body != null && n.hasOwnProperty("get_message_by_id_body") && !(n.get_message_by_id_body && typeof n.get_message_by_id_body.length == "number" || i.isString(n.get_message_by_id_body))) return "get_message_by_id_body: buffer expected";
						if (n.messages_in_conversation_body != null && n.hasOwnProperty("messages_in_conversation_body") && !(n.messages_in_conversation_body && typeof n.messages_in_conversation_body.length == "number" || i.isString(n.messages_in_conversation_body))) return "messages_in_conversation_body: buffer expected";
						if (n.get_messages_checkinfo_in_conversation_body != null && n.hasOwnProperty("get_messages_checkinfo_in_conversation_body") && !(n.get_messages_checkinfo_in_conversation_body && typeof n.get_messages_checkinfo_in_conversation_body.length == "number" || i.isString(n.get_messages_checkinfo_in_conversation_body))) return "get_messages_checkinfo_in_conversation_body: buffer expected";
						if (n.send_user_action_body != null && n.hasOwnProperty("send_user_action_body") && !(n.send_user_action_body && typeof n.send_user_action_body.length == "number" || i.isString(n.send_user_action_body))) return "send_user_action_body: buffer expected";
						if (n.send_input_status_body != null && n.hasOwnProperty("send_input_status_body") && !(n.send_input_status_body && typeof n.send_input_status_body.length == "number" || i.isString(n.send_input_status_body))) return "send_input_status_body: buffer expected";
						if (n.delete_conversation_body != null && n.hasOwnProperty("delete_conversation_body") && !(n.delete_conversation_body && typeof n.delete_conversation_body.length == "number" || i.isString(n.delete_conversation_body))) return "delete_conversation_body: buffer expected";
						if (n.mark_conversation_read_body != null && n.hasOwnProperty("mark_conversation_read_body") && !(n.mark_conversation_read_body && typeof n.mark_conversation_read_body.length == "number" || i.isString(n.mark_conversation_read_body))) return "mark_conversation_read_body: buffer expected";
						if (n.conversation_participants_body != null && n.hasOwnProperty("conversation_participants_body") && !(n.conversation_participants_body && typeof n.conversation_participants_body.length == "number" || i.isString(n.conversation_participants_body))) return "conversation_participants_body: buffer expected";
						if (n.batch_mark_read_body != null && n.hasOwnProperty("batch_mark_read_body") && !(n.batch_mark_read_body && typeof n.batch_mark_read_body.length == "number" || i.isString(n.batch_mark_read_body))) return "batch_mark_read_body: buffer expected";
						if (n.dissolve_conversation_body != null && n.hasOwnProperty("dissolve_conversation_body") && !(n.dissolve_conversation_body && typeof n.dissolve_conversation_body.length == "number" || i.isString(n.dissolve_conversation_body))) return "dissolve_conversation_body: buffer expected";
						if (n.create_conversation_v2_body != null && n.hasOwnProperty("create_conversation_v2_body")) {
							let r = a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody.verify(n.create_conversation_v2_body);
							if (r) return "create_conversation_v2_body." + r
						}
						if (n.get_conversation_info_list_v2_body != null && n.hasOwnProperty("get_conversation_info_list_v2_body")) {
							let r = a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody.verify(n.get_conversation_info_list_v2_body);
							if (r) return "get_conversation_info_list_v2_body." + r
						}
						if (n.get_conversation_info_list_by_favorite_v2_body != null && n.hasOwnProperty("get_conversation_info_list_by_favorite_v2_body") && !(n.get_conversation_info_list_by_favorite_v2_body && typeof n.get_conversation_info_list_by_favorite_v2_body.length == "number" || i.isString(n.get_conversation_info_list_by_favorite_v2_body))) return "get_conversation_info_list_by_favorite_v2_body: buffer expected";
						if (n.get_conversation_info_list_by_top_v2_body != null && n.hasOwnProperty("get_conversation_info_list_by_top_v2_body") && !(n.get_conversation_info_list_by_top_v2_body && typeof n.get_conversation_info_list_by_top_v2_body.length == "number" || i.isString(n.get_conversation_info_list_by_top_v2_body))) return "get_conversation_info_list_by_top_v2_body: buffer expected";
						if (n.conversation_add_participants_body != null && n.hasOwnProperty("conversation_add_participants_body")) {
							let r = a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest.verify(n.conversation_add_participants_body);
							if (r) return "conversation_add_participants_body." + r
						}
						if (n.conversation_remove_participants_body != null && n.hasOwnProperty("conversation_remove_participants_body")) {
							let r = a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.verify(n.conversation_remove_participants_body);
							if (r) return "conversation_remove_participants_body." + r
						}
						if (n.leave_conversation_body != null && n.hasOwnProperty("leave_conversation_body")) {
							let r = a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody.verify(n.leave_conversation_body);
							if (r) return "leave_conversation_body." + r
						}
						if (n.mget_conversation_participants_body != null && n.hasOwnProperty("mget_conversation_participants_body") && !(n.mget_conversation_participants_body && typeof n.mget_conversation_participants_body.length == "number" || i.isString(n.mget_conversation_participants_body))) return "mget_conversation_participants_body: buffer expected";
						if (n.update_conversation_participant_body != null && n.hasOwnProperty("update_conversation_participant_body") && !(n.update_conversation_participant_body && typeof n.update_conversation_participant_body.length == "number" || i.isString(n.update_conversation_participant_body))) return "update_conversation_participant_body: buffer expected";
						if (n.delete_message_body != null && n.hasOwnProperty("delete_message_body") && !(n.delete_message_body && typeof n.delete_message_body.length == "number" || i.isString(n.delete_message_body))) return "delete_message_body: buffer expected";
						if (n.recall_message_body != null && n.hasOwnProperty("recall_message_body")) {
							let r = a.pigeon.RequestBasic.Request.RecallMessageRequestBody.verify(n.recall_message_body);
							if (r) return "recall_message_body." + r
						}
						if (n.modify_message_property_body != null && n.hasOwnProperty("modify_message_property_body")) {
							let r = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.verify(n.modify_message_property_body);
							if (r) return "modify_message_property_body." + r
						}
						if (n.audio_recognition_body != null && n.hasOwnProperty("audio_recognition_body") && !(n.audio_recognition_body && typeof n.audio_recognition_body.length == "number" || i.isString(n.audio_recognition_body))) return "audio_recognition_body: buffer expected";
						if (n.get_conversation_core_info_body != null && n.hasOwnProperty("get_conversation_core_info_body") && !(n.get_conversation_core_info_body && typeof n.get_conversation_core_info_body.length == "number" || i.isString(n.get_conversation_core_info_body))) return "get_conversation_core_info_body: buffer expected";
						if (n.set_conversation_core_info_body != null && n.hasOwnProperty("set_conversation_core_info_body") && !(n.set_conversation_core_info_body && typeof n.set_conversation_core_info_body.length == "number" || i.isString(n.set_conversation_core_info_body))) return "set_conversation_core_info_body: buffer expected";
						if (n.upsert_conversation_core_ext_info_body != null && n.hasOwnProperty("upsert_conversation_core_ext_info_body") && !(n.upsert_conversation_core_ext_info_body && typeof n.upsert_conversation_core_ext_info_body.length == "number" || i.isString(n.upsert_conversation_core_ext_info_body))) return "upsert_conversation_core_ext_info_body: buffer expected";
						if (n.set_conversation_setting_info_body != null && n.hasOwnProperty("set_conversation_setting_info_body") && !(n.set_conversation_setting_info_body && typeof n.set_conversation_setting_info_body.length == "number" || i.isString(n.set_conversation_setting_info_body))) return "set_conversation_setting_info_body: buffer expected";
						if (n.upsert_conversation_setting_ext_info_body != null && n.hasOwnProperty("upsert_conversation_setting_ext_info_body") && !(n.upsert_conversation_setting_ext_info_body && typeof n.upsert_conversation_setting_ext_info_body.length == "number" || i.isString(n.upsert_conversation_setting_ext_info_body))) return "upsert_conversation_setting_ext_info_body: buffer expected";
						if (n.get_stranger_conversation_body != null && n.hasOwnProperty("get_stranger_conversation_body")) {
							let r = a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody.verify(n.get_stranger_conversation_body);
							if (r) return "get_stranger_conversation_body." + r
						}
						if (n.get_stranger_messages_body != null && n.hasOwnProperty("get_stranger_messages_body") && !(n.get_stranger_messages_body && typeof n.get_stranger_messages_body.length == "number" || i.isString(n.get_stranger_messages_body))) return "get_stranger_messages_body: buffer expected";
						if (n.delete_stranger_message_body != null && n.hasOwnProperty("delete_stranger_message_body") && !(n.delete_stranger_message_body && typeof n.delete_stranger_message_body.length == "number" || i.isString(n.delete_stranger_message_body))) return "delete_stranger_message_body: buffer expected";
						if (n.delete_stranger_conversation_body != null && n.hasOwnProperty("delete_stranger_conversation_body") && !(n.delete_stranger_conversation_body && typeof n.delete_stranger_conversation_body.length == "number" || i.isString(n.delete_stranger_conversation_body))) return "delete_stranger_conversation_body: buffer expected";
						if (n.delete_stranger_all_conversation_body != null && n.hasOwnProperty("delete_stranger_all_conversation_body") && !(n.delete_stranger_all_conversation_body && typeof n.delete_stranger_all_conversation_body.length == "number" || i.isString(n.delete_stranger_all_conversation_body))) return "delete_stranger_all_conversation_body: buffer expected";
						if (n.mark_stranger_conversation_read_body != null && n.hasOwnProperty("mark_stranger_conversation_read_body") && !(n.mark_stranger_conversation_read_body && typeof n.mark_stranger_conversation_read_body.length == "number" || i.isString(n.mark_stranger_conversation_read_body))) return "mark_stranger_conversation_read_body: buffer expected";
						if (n.mark_stranger_all_conversation_read_body != null && n.hasOwnProperty("mark_stranger_all_conversation_read_body") && !(n.mark_stranger_all_conversation_read_body && typeof n.mark_stranger_all_conversation_read_body.length == "number" || i.isString(n.mark_stranger_all_conversation_read_body))) return "mark_stranger_all_conversation_read_body: buffer expected";
						if (n.participants_read_index_body != null && n.hasOwnProperty("participants_read_index_body") && !(n.participants_read_index_body && typeof n.participants_read_index_body.length == "number" || i.isString(n.participants_read_index_body))) return "participants_read_index_body: buffer expected";
						if (n.participants_min_index_body != null && n.hasOwnProperty("participants_min_index_body") && !(n.participants_min_index_body && typeof n.participants_min_index_body.length == "number" || i.isString(n.participants_min_index_body))) return "participants_min_index_body: buffer expected";
						if (n.get_upload_token_body != null && n.hasOwnProperty("get_upload_token_body") && !(n.get_upload_token_body && typeof n.get_upload_token_body.length == "number" || i.isString(n.get_upload_token_body))) return "get_upload_token_body: buffer expected";
						if (n.get_media_urls_body != null && n.hasOwnProperty("get_media_urls_body") && !(n.get_media_urls_body && typeof n.get_media_urls_body.length == "number" || i.isString(n.get_media_urls_body))) return "get_media_urls_body: buffer expected";
						if (n.get_ticket_body != null && n.hasOwnProperty("get_ticket_body") && !(n.get_ticket_body && typeof n.get_ticket_body.length == "number" || i.isString(n.get_ticket_body))) return "get_ticket_body: buffer expected";
						if (n.get_conversation_list_body != null && n.hasOwnProperty("get_conversation_list_body")) {
							let r = a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody.verify(n.get_conversation_list_body);
							if (r) return "get_conversation_list_body." + r
						}
						if (n.broadcast_send_message_body != null && n.hasOwnProperty("broadcast_send_message_body") && !(n.broadcast_send_message_body && typeof n.broadcast_send_message_body.length == "number" || i.isString(n.broadcast_send_message_body))) return "broadcast_send_message_body: buffer expected";
						if (n.broadcast_recv_message_body != null && n.hasOwnProperty("broadcast_recv_message_body") && !(n.broadcast_recv_message_body && typeof n.broadcast_recv_message_body.length == "number" || i.isString(n.broadcast_recv_message_body))) return "broadcast_recv_message_body: buffer expected";
						if (n.broadcast_user_counter_body != null && n.hasOwnProperty("broadcast_user_counter_body") && !(n.broadcast_user_counter_body && typeof n.broadcast_user_counter_body.length == "number" || i.isString(n.broadcast_user_counter_body))) return "broadcast_user_counter_body: buffer expected";
						if (n.client_ack_body != null && n.hasOwnProperty("client_ack_body") && !(n.client_ack_body && typeof n.client_ack_body.length == "number" || i.isString(n.client_ack_body))) return "client_ack_body: buffer expected";
						if (n.create_voip_body != null && n.hasOwnProperty("create_voip_body") && !(n.create_voip_body && typeof n.create_voip_body.length == "number" || i.isString(n.create_voip_body))) return "create_voip_body: buffer expected";
						if (n.call_voip_body != null && n.hasOwnProperty("call_voip_body") && !(n.call_voip_body && typeof n.call_voip_body.length == "number" || i.isString(n.call_voip_body))) return "call_voip_body: buffer expected";
						if (n.update_voip_body != null && n.hasOwnProperty("update_voip_body") && !(n.update_voip_body && typeof n.update_voip_body.length == "number" || i.isString(n.update_voip_body))) return "update_voip_body: buffer expected";
						if (n.channel_heartbeat_body != null && n.hasOwnProperty("channel_heartbeat_body") && !(n.channel_heartbeat_body && typeof n.channel_heartbeat_body.length == "number" || i.isString(n.channel_heartbeat_body))) return "channel_heartbeat_body: buffer expected";
						if (n.profile_get_info != null && n.hasOwnProperty("profile_get_info") && !(n.profile_get_info && typeof n.profile_get_info.length == "number" || i.isString(n.profile_get_info))) return "profile_get_info: buffer expected";
						if (n.report_client_metrics_body != null && n.hasOwnProperty("report_client_metrics_body") && !(n.report_client_metrics_body && typeof n.report_client_metrics_body.length == "number" || i.isString(n.report_client_metrics_body))) return "report_client_metrics_body: buffer expected";
						if (n.get_configs_body != null && n.hasOwnProperty("get_configs_body") && !(n.get_configs_body && typeof n.get_configs_body.length == "number" || i.isString(n.get_configs_body))) return "get_configs_body: buffer expected";
						if (n.modify_message_ext_body != null && n.hasOwnProperty("modify_message_ext_body") && !(n.modify_message_ext_body && typeof n.modify_message_ext_body.length == "number" || i.isString(n.modify_message_ext_body))) return "modify_message_ext_body: buffer expected";
						if (n.unread_count_report_body != null && n.hasOwnProperty("unread_count_report_body") && !(n.unread_count_report_body && typeof n.unread_count_report_body.length == "number" || i.isString(n.unread_count_report_body))) return "unread_count_report_body: buffer expected";
						if (n.block_members_body != null && n.hasOwnProperty("block_members_body")) {
							let r = a.pigeon.RequestBasic.Request.BlockMembersRequestBody.verify(n.block_members_body);
							if (r) return "block_members_body." + r
						}
						return n.block_conversation_body != null && n.hasOwnProperty("block_conversation_body") && !(n.block_conversation_body && typeof n.block_conversation_body.length == "number" || i.isString(n.block_conversation_body)) ? "block_conversation_body: buffer expected" : n.get_unread_count_body != null && n.hasOwnProperty("get_unread_count_body") && !(n.get_unread_count_body && typeof n.get_unread_count_body.length == "number" || i.isString(n.get_unread_count_body)) ? "get_unread_count_body: buffer expected" : n.send_message_p2p_body != null && n.hasOwnProperty("send_message_p2p_body") && !(n.send_message_p2p_body && typeof n.send_message_p2p_body.length == "number" || i.isString(n.send_message_p2p_body)) ? "send_message_p2p_body: buffer expected" : n.get_blocklist_body != null && n.hasOwnProperty("get_blocklist_body") && !(n.get_blocklist_body && typeof n.get_blocklist_body.length == "number" || i.isString(n.get_blocklist_body)) ? "get_blocklist_body: buffer expected" : n.set_blocklist_body != null && n.hasOwnProperty("set_blocklist_body") && !(n.set_blocklist_body && typeof n.set_blocklist_body.length == "number" || i.isString(n.set_blocklist_body)) ? "set_blocklist_body: buffer expected" : n.check_in_blocklist_body != null && n.hasOwnProperty("check_in_blocklist_body") && !(n.check_in_blocklist_body && typeof n.check_in_blocklist_body.length == "number" || i.isString(n.check_in_blocklist_body)) ? "check_in_blocklist_body: buffer expected" : n.mark_message_body != null && n.hasOwnProperty("mark_message_body") && !(n.mark_message_body && typeof n.mark_message_body.length == "number" || i.isString(n.mark_message_body)) ? "mark_message_body: buffer expected" : n.pull_mark_message_body != null && n.hasOwnProperty("pull_mark_message_body") && !(n.pull_mark_message_body && typeof n.pull_mark_message_body.length == "number" || i.isString(n.pull_mark_message_body)) ? "pull_mark_message_body: buffer expected" : n.batch_get_conversation_participants_readindex != null && n.hasOwnProperty("batch_get_conversation_participants_readindex") && !(n.batch_get_conversation_participants_readindex && typeof n.batch_get_conversation_participants_readindex.length == "number" || i.isString(n.batch_get_conversation_participants_readindex)) ? "batch_get_conversation_participants_readindex: buffer expected" : n.message_by_init != null && n.hasOwnProperty("message_by_init") && !(n.message_by_init && typeof n.message_by_init.length == "number" || i.isString(n.message_by_init)) ? "message_by_init: buffer expected" : n.mark_msg_unread_count_report != null && n.hasOwnProperty("mark_msg_unread_count_report") && !(n.mark_msg_unread_count_report && typeof n.mark_msg_unread_count_report.length == "number" || i.isString(n.mark_msg_unread_count_report)) ? "mark_msg_unread_count_report: buffer expected" : n.mark_msg_get_unread_count != null && n.hasOwnProperty("mark_msg_get_unread_count") && !(n.mark_msg_get_unread_count && typeof n.mark_msg_get_unread_count.length == "number" || i.isString(n.mark_msg_get_unread_count)) ? "mark_msg_get_unread_count: buffer expected" : n.batch_unmark_message != null && n.hasOwnProperty("batch_unmark_message") && !(n.batch_unmark_message && typeof n.batch_unmark_message.length == "number" || i.isString(n.batch_unmark_message)) ? "batch_unmark_message: buffer expected" : n.client_batch_ack_body != null && n.hasOwnProperty("client_batch_ack_body") && !(n.client_batch_ack_body && typeof n.client_batch_ack_body.length == "number" || i.isString(n.client_batch_ack_body)) ? "client_batch_ack_body: buffer expected" : null
					}, e.fromObject = function(n) {
						if (n instanceof a.pigeon.RequestBasic.Request.RequestBody) return n;
						let r = new a.pigeon.RequestBasic.Request.RequestBody;
						if (n.send_message_body != null) {
							if (typeof n.send_message_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.send_message_body: object expected");
							r.send_message_body = a.pigeon.RequestBasic.Request.SendMessageRequestBody.fromObject(n.send_message_body)
						}
						if (n.messages_per_user_body != null) {
							if (typeof n.messages_per_user_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.messages_per_user_body: object expected");
							r.messages_per_user_body = a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody.fromObject(n.messages_per_user_body)
						}
						if (n.messages_per_user_init_v2_body != null && (typeof n.messages_per_user_init_v2_body == "string" ? i.base64.decode(n.messages_per_user_init_v2_body, r.messages_per_user_init_v2_body = i.newBuffer(i.base64.length(n.messages_per_user_init_v2_body)), 0) : n.messages_per_user_init_v2_body.length >= 0 && (r.messages_per_user_init_v2_body = n.messages_per_user_init_v2_body)), n.get_message_by_id_body != null && (typeof n.get_message_by_id_body == "string" ? i.base64.decode(n.get_message_by_id_body, r.get_message_by_id_body = i.newBuffer(i.base64.length(n.get_message_by_id_body)), 0) : n.get_message_by_id_body.length >= 0 && (r.get_message_by_id_body = n.get_message_by_id_body)), n.messages_in_conversation_body != null && (typeof n.messages_in_conversation_body == "string" ? i.base64.decode(n.messages_in_conversation_body, r.messages_in_conversation_body = i.newBuffer(i.base64.length(n.messages_in_conversation_body)), 0) : n.messages_in_conversation_body.length >= 0 && (r.messages_in_conversation_body = n.messages_in_conversation_body)), n.get_messages_checkinfo_in_conversation_body != null && (typeof n.get_messages_checkinfo_in_conversation_body == "string" ? i.base64.decode(n.get_messages_checkinfo_in_conversation_body, r.get_messages_checkinfo_in_conversation_body = i.newBuffer(i.base64.length(n.get_messages_checkinfo_in_conversation_body)), 0) : n.get_messages_checkinfo_in_conversation_body.length >= 0 && (r.get_messages_checkinfo_in_conversation_body = n.get_messages_checkinfo_in_conversation_body)), n.send_user_action_body != null && (typeof n.send_user_action_body == "string" ? i.base64.decode(n.send_user_action_body, r.send_user_action_body = i.newBuffer(i.base64.length(n.send_user_action_body)), 0) : n.send_user_action_body.length >= 0 && (r.send_user_action_body = n.send_user_action_body)), n.send_input_status_body != null && (typeof n.send_input_status_body == "string" ? i.base64.decode(n.send_input_status_body, r.send_input_status_body = i.newBuffer(i.base64.length(n.send_input_status_body)), 0) : n.send_input_status_body.length >= 0 && (r.send_input_status_body = n.send_input_status_body)), n.delete_conversation_body != null && (typeof n.delete_conversation_body == "string" ? i.base64.decode(n.delete_conversation_body, r.delete_conversation_body = i.newBuffer(i.base64.length(n.delete_conversation_body)), 0) : n.delete_conversation_body.length >= 0 && (r.delete_conversation_body = n.delete_conversation_body)), n.mark_conversation_read_body != null && (typeof n.mark_conversation_read_body == "string" ? i.base64.decode(n.mark_conversation_read_body, r.mark_conversation_read_body = i.newBuffer(i.base64.length(n.mark_conversation_read_body)), 0) : n.mark_conversation_read_body.length >= 0 && (r.mark_conversation_read_body = n.mark_conversation_read_body)), n.conversation_participants_body != null && (typeof n.conversation_participants_body == "string" ? i.base64.decode(n.conversation_participants_body, r.conversation_participants_body = i.newBuffer(i.base64.length(n.conversation_participants_body)), 0) : n.conversation_participants_body.length >= 0 && (r.conversation_participants_body = n.conversation_participants_body)), n.batch_mark_read_body != null && (typeof n.batch_mark_read_body == "string" ? i.base64.decode(n.batch_mark_read_body, r.batch_mark_read_body = i.newBuffer(i.base64.length(n.batch_mark_read_body)), 0) : n.batch_mark_read_body.length >= 0 && (r.batch_mark_read_body = n.batch_mark_read_body)), n.dissolve_conversation_body != null && (typeof n.dissolve_conversation_body == "string" ? i.base64.decode(n.dissolve_conversation_body, r.dissolve_conversation_body = i.newBuffer(i.base64.length(n.dissolve_conversation_body)), 0) : n.dissolve_conversation_body.length >= 0 && (r.dissolve_conversation_body = n.dissolve_conversation_body)), n.create_conversation_v2_body != null) {
							if (typeof n.create_conversation_v2_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.create_conversation_v2_body: object expected");
							r.create_conversation_v2_body = a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody.fromObject(n.create_conversation_v2_body)
						}
						if (n.get_conversation_info_list_v2_body != null) {
							if (typeof n.get_conversation_info_list_v2_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.get_conversation_info_list_v2_body: object expected");
							r.get_conversation_info_list_v2_body = a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody.fromObject(n.get_conversation_info_list_v2_body)
						}
						if (n.get_conversation_info_list_by_favorite_v2_body != null && (typeof n.get_conversation_info_list_by_favorite_v2_body == "string" ? i.base64.decode(n.get_conversation_info_list_by_favorite_v2_body, r.get_conversation_info_list_by_favorite_v2_body = i.newBuffer(i.base64.length(n.get_conversation_info_list_by_favorite_v2_body)), 0) : n.get_conversation_info_list_by_favorite_v2_body.length >= 0 && (r.get_conversation_info_list_by_favorite_v2_body = n.get_conversation_info_list_by_favorite_v2_body)), n.get_conversation_info_list_by_top_v2_body != null && (typeof n.get_conversation_info_list_by_top_v2_body == "string" ? i.base64.decode(n.get_conversation_info_list_by_top_v2_body, r.get_conversation_info_list_by_top_v2_body = i.newBuffer(i.base64.length(n.get_conversation_info_list_by_top_v2_body)), 0) : n.get_conversation_info_list_by_top_v2_body.length >= 0 && (r.get_conversation_info_list_by_top_v2_body = n.get_conversation_info_list_by_top_v2_body)), n.conversation_add_participants_body != null) {
							if (typeof n.conversation_add_participants_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.conversation_add_participants_body: object expected");
							r.conversation_add_participants_body = a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest.fromObject(n.conversation_add_participants_body)
						}
						if (n.conversation_remove_participants_body != null) {
							if (typeof n.conversation_remove_participants_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.conversation_remove_participants_body: object expected");
							r.conversation_remove_participants_body = a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.fromObject(n.conversation_remove_participants_body)
						}
						if (n.leave_conversation_body != null) {
							if (typeof n.leave_conversation_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.leave_conversation_body: object expected");
							r.leave_conversation_body = a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody.fromObject(n.leave_conversation_body)
						}
						if (n.mget_conversation_participants_body != null && (typeof n.mget_conversation_participants_body == "string" ? i.base64.decode(n.mget_conversation_participants_body, r.mget_conversation_participants_body = i.newBuffer(i.base64.length(n.mget_conversation_participants_body)), 0) : n.mget_conversation_participants_body.length >= 0 && (r.mget_conversation_participants_body = n.mget_conversation_participants_body)), n.update_conversation_participant_body != null && (typeof n.update_conversation_participant_body == "string" ? i.base64.decode(n.update_conversation_participant_body, r.update_conversation_participant_body = i.newBuffer(i.base64.length(n.update_conversation_participant_body)), 0) : n.update_conversation_participant_body.length >= 0 && (r.update_conversation_participant_body = n.update_conversation_participant_body)), n.delete_message_body != null && (typeof n.delete_message_body == "string" ? i.base64.decode(n.delete_message_body, r.delete_message_body = i.newBuffer(i.base64.length(n.delete_message_body)), 0) : n.delete_message_body.length >= 0 && (r.delete_message_body = n.delete_message_body)), n.recall_message_body != null) {
							if (typeof n.recall_message_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.recall_message_body: object expected");
							r.recall_message_body = a.pigeon.RequestBasic.Request.RecallMessageRequestBody.fromObject(n.recall_message_body)
						}
						if (n.modify_message_property_body != null) {
							if (typeof n.modify_message_property_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.modify_message_property_body: object expected");
							r.modify_message_property_body = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.fromObject(n.modify_message_property_body)
						}
						if (n.audio_recognition_body != null && (typeof n.audio_recognition_body == "string" ? i.base64.decode(n.audio_recognition_body, r.audio_recognition_body = i.newBuffer(i.base64.length(n.audio_recognition_body)), 0) : n.audio_recognition_body.length >= 0 && (r.audio_recognition_body = n.audio_recognition_body)), n.get_conversation_core_info_body != null && (typeof n.get_conversation_core_info_body == "string" ? i.base64.decode(n.get_conversation_core_info_body, r.get_conversation_core_info_body = i.newBuffer(i.base64.length(n.get_conversation_core_info_body)), 0) : n.get_conversation_core_info_body.length >= 0 && (r.get_conversation_core_info_body = n.get_conversation_core_info_body)), n.set_conversation_core_info_body != null && (typeof n.set_conversation_core_info_body == "string" ? i.base64.decode(n.set_conversation_core_info_body, r.set_conversation_core_info_body = i.newBuffer(i.base64.length(n.set_conversation_core_info_body)), 0) : n.set_conversation_core_info_body.length >= 0 && (r.set_conversation_core_info_body = n.set_conversation_core_info_body)), n.upsert_conversation_core_ext_info_body != null && (typeof n.upsert_conversation_core_ext_info_body == "string" ? i.base64.decode(n.upsert_conversation_core_ext_info_body, r.upsert_conversation_core_ext_info_body = i.newBuffer(i.base64.length(n.upsert_conversation_core_ext_info_body)), 0) : n.upsert_conversation_core_ext_info_body.length >= 0 && (r.upsert_conversation_core_ext_info_body = n.upsert_conversation_core_ext_info_body)), n.set_conversation_setting_info_body != null && (typeof n.set_conversation_setting_info_body == "string" ? i.base64.decode(n.set_conversation_setting_info_body, r.set_conversation_setting_info_body = i.newBuffer(i.base64.length(n.set_conversation_setting_info_body)), 0) : n.set_conversation_setting_info_body.length >= 0 && (r.set_conversation_setting_info_body = n.set_conversation_setting_info_body)), n.upsert_conversation_setting_ext_info_body != null && (typeof n.upsert_conversation_setting_ext_info_body == "string" ? i.base64.decode(n.upsert_conversation_setting_ext_info_body, r.upsert_conversation_setting_ext_info_body = i.newBuffer(i.base64.length(n.upsert_conversation_setting_ext_info_body)), 0) : n.upsert_conversation_setting_ext_info_body.length >= 0 && (r.upsert_conversation_setting_ext_info_body = n.upsert_conversation_setting_ext_info_body)), n.get_stranger_conversation_body != null) {
							if (typeof n.get_stranger_conversation_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.get_stranger_conversation_body: object expected");
							r.get_stranger_conversation_body = a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody.fromObject(n.get_stranger_conversation_body)
						}
						if (n.get_stranger_messages_body != null && (typeof n.get_stranger_messages_body == "string" ? i.base64.decode(n.get_stranger_messages_body, r.get_stranger_messages_body = i.newBuffer(i.base64.length(n.get_stranger_messages_body)), 0) : n.get_stranger_messages_body.length >= 0 && (r.get_stranger_messages_body = n.get_stranger_messages_body)), n.delete_stranger_message_body != null && (typeof n.delete_stranger_message_body == "string" ? i.base64.decode(n.delete_stranger_message_body, r.delete_stranger_message_body = i.newBuffer(i.base64.length(n.delete_stranger_message_body)), 0) : n.delete_stranger_message_body.length >= 0 && (r.delete_stranger_message_body = n.delete_stranger_message_body)), n.delete_stranger_conversation_body != null && (typeof n.delete_stranger_conversation_body == "string" ? i.base64.decode(n.delete_stranger_conversation_body, r.delete_stranger_conversation_body = i.newBuffer(i.base64.length(n.delete_stranger_conversation_body)), 0) : n.delete_stranger_conversation_body.length >= 0 && (r.delete_stranger_conversation_body = n.delete_stranger_conversation_body)), n.delete_stranger_all_conversation_body != null && (typeof n.delete_stranger_all_conversation_body == "string" ? i.base64.decode(n.delete_stranger_all_conversation_body, r.delete_stranger_all_conversation_body = i.newBuffer(i.base64.length(n.delete_stranger_all_conversation_body)), 0) : n.delete_stranger_all_conversation_body.length >= 0 && (r.delete_stranger_all_conversation_body = n.delete_stranger_all_conversation_body)), n.mark_stranger_conversation_read_body != null && (typeof n.mark_stranger_conversation_read_body == "string" ? i.base64.decode(n.mark_stranger_conversation_read_body, r.mark_stranger_conversation_read_body = i.newBuffer(i.base64.length(n.mark_stranger_conversation_read_body)), 0) : n.mark_stranger_conversation_read_body.length >= 0 && (r.mark_stranger_conversation_read_body = n.mark_stranger_conversation_read_body)), n.mark_stranger_all_conversation_read_body != null && (typeof n.mark_stranger_all_conversation_read_body == "string" ? i.base64.decode(n.mark_stranger_all_conversation_read_body, r.mark_stranger_all_conversation_read_body = i.newBuffer(i.base64.length(n.mark_stranger_all_conversation_read_body)), 0) : n.mark_stranger_all_conversation_read_body.length >= 0 && (r.mark_stranger_all_conversation_read_body = n.mark_stranger_all_conversation_read_body)), n.participants_read_index_body != null && (typeof n.participants_read_index_body == "string" ? i.base64.decode(n.participants_read_index_body, r.participants_read_index_body = i.newBuffer(i.base64.length(n.participants_read_index_body)), 0) : n.participants_read_index_body.length >= 0 && (r.participants_read_index_body = n.participants_read_index_body)), n.participants_min_index_body != null && (typeof n.participants_min_index_body == "string" ? i.base64.decode(n.participants_min_index_body, r.participants_min_index_body = i.newBuffer(i.base64.length(n.participants_min_index_body)), 0) : n.participants_min_index_body.length >= 0 && (r.participants_min_index_body = n.participants_min_index_body)), n.get_upload_token_body != null && (typeof n.get_upload_token_body == "string" ? i.base64.decode(n.get_upload_token_body, r.get_upload_token_body = i.newBuffer(i.base64.length(n.get_upload_token_body)), 0) : n.get_upload_token_body.length >= 0 && (r.get_upload_token_body = n.get_upload_token_body)), n.get_media_urls_body != null && (typeof n.get_media_urls_body == "string" ? i.base64.decode(n.get_media_urls_body, r.get_media_urls_body = i.newBuffer(i.base64.length(n.get_media_urls_body)), 0) : n.get_media_urls_body.length >= 0 && (r.get_media_urls_body = n.get_media_urls_body)), n.get_ticket_body != null && (typeof n.get_ticket_body == "string" ? i.base64.decode(n.get_ticket_body, r.get_ticket_body = i.newBuffer(i.base64.length(n.get_ticket_body)), 0) : n.get_ticket_body.length >= 0 && (r.get_ticket_body = n.get_ticket_body)), n.get_conversation_list_body != null) {
							if (typeof n.get_conversation_list_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.get_conversation_list_body: object expected");
							r.get_conversation_list_body = a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody.fromObject(n.get_conversation_list_body)
						}
						if (n.broadcast_send_message_body != null && (typeof n.broadcast_send_message_body == "string" ? i.base64.decode(n.broadcast_send_message_body, r.broadcast_send_message_body = i.newBuffer(i.base64.length(n.broadcast_send_message_body)), 0) : n.broadcast_send_message_body.length >= 0 && (r.broadcast_send_message_body = n.broadcast_send_message_body)), n.broadcast_recv_message_body != null && (typeof n.broadcast_recv_message_body == "string" ? i.base64.decode(n.broadcast_recv_message_body, r.broadcast_recv_message_body = i.newBuffer(i.base64.length(n.broadcast_recv_message_body)), 0) : n.broadcast_recv_message_body.length >= 0 && (r.broadcast_recv_message_body = n.broadcast_recv_message_body)), n.broadcast_user_counter_body != null && (typeof n.broadcast_user_counter_body == "string" ? i.base64.decode(n.broadcast_user_counter_body, r.broadcast_user_counter_body = i.newBuffer(i.base64.length(n.broadcast_user_counter_body)), 0) : n.broadcast_user_counter_body.length >= 0 && (r.broadcast_user_counter_body = n.broadcast_user_counter_body)), n.client_ack_body != null && (typeof n.client_ack_body == "string" ? i.base64.decode(n.client_ack_body, r.client_ack_body = i.newBuffer(i.base64.length(n.client_ack_body)), 0) : n.client_ack_body.length >= 0 && (r.client_ack_body = n.client_ack_body)), n.create_voip_body != null && (typeof n.create_voip_body == "string" ? i.base64.decode(n.create_voip_body, r.create_voip_body = i.newBuffer(i.base64.length(n.create_voip_body)), 0) : n.create_voip_body.length >= 0 && (r.create_voip_body = n.create_voip_body)), n.call_voip_body != null && (typeof n.call_voip_body == "string" ? i.base64.decode(n.call_voip_body, r.call_voip_body = i.newBuffer(i.base64.length(n.call_voip_body)), 0) : n.call_voip_body.length >= 0 && (r.call_voip_body = n.call_voip_body)), n.update_voip_body != null && (typeof n.update_voip_body == "string" ? i.base64.decode(n.update_voip_body, r.update_voip_body = i.newBuffer(i.base64.length(n.update_voip_body)), 0) : n.update_voip_body.length >= 0 && (r.update_voip_body = n.update_voip_body)), n.channel_heartbeat_body != null && (typeof n.channel_heartbeat_body == "string" ? i.base64.decode(n.channel_heartbeat_body, r.channel_heartbeat_body = i.newBuffer(i.base64.length(n.channel_heartbeat_body)), 0) : n.channel_heartbeat_body.length >= 0 && (r.channel_heartbeat_body = n.channel_heartbeat_body)), n.profile_get_info != null && (typeof n.profile_get_info == "string" ? i.base64.decode(n.profile_get_info, r.profile_get_info = i.newBuffer(i.base64.length(n.profile_get_info)), 0) : n.profile_get_info.length >= 0 && (r.profile_get_info = n.profile_get_info)), n.report_client_metrics_body != null && (typeof n.report_client_metrics_body == "string" ? i.base64.decode(n.report_client_metrics_body, r.report_client_metrics_body = i.newBuffer(i.base64.length(n.report_client_metrics_body)), 0) : n.report_client_metrics_body.length >= 0 && (r.report_client_metrics_body = n.report_client_metrics_body)), n.get_configs_body != null && (typeof n.get_configs_body == "string" ? i.base64.decode(n.get_configs_body, r.get_configs_body = i.newBuffer(i.base64.length(n.get_configs_body)), 0) : n.get_configs_body.length >= 0 && (r.get_configs_body = n.get_configs_body)), n.modify_message_ext_body != null && (typeof n.modify_message_ext_body == "string" ? i.base64.decode(n.modify_message_ext_body, r.modify_message_ext_body = i.newBuffer(i.base64.length(n.modify_message_ext_body)), 0) : n.modify_message_ext_body.length >= 0 && (r.modify_message_ext_body = n.modify_message_ext_body)), n.unread_count_report_body != null && (typeof n.unread_count_report_body == "string" ? i.base64.decode(n.unread_count_report_body, r.unread_count_report_body = i.newBuffer(i.base64.length(n.unread_count_report_body)), 0) : n.unread_count_report_body.length >= 0 && (r.unread_count_report_body = n.unread_count_report_body)), n.block_members_body != null) {
							if (typeof n.block_members_body != "object") throw TypeError(".pigeon.RequestBasic.Request.RequestBody.block_members_body: object expected");
							r.block_members_body = a.pigeon.RequestBasic.Request.BlockMembersRequestBody.fromObject(n.block_members_body)
						}
						return n.block_conversation_body != null && (typeof n.block_conversation_body == "string" ? i.base64.decode(n.block_conversation_body, r.block_conversation_body = i.newBuffer(i.base64.length(n.block_conversation_body)), 0) : n.block_conversation_body.length >= 0 && (r.block_conversation_body = n.block_conversation_body)), n.get_unread_count_body != null && (typeof n.get_unread_count_body == "string" ? i.base64.decode(n.get_unread_count_body, r.get_unread_count_body = i.newBuffer(i.base64.length(n.get_unread_count_body)), 0) : n.get_unread_count_body.length >= 0 && (r.get_unread_count_body = n.get_unread_count_body)), n.send_message_p2p_body != null && (typeof n.send_message_p2p_body == "string" ? i.base64.decode(n.send_message_p2p_body, r.send_message_p2p_body = i.newBuffer(i.base64.length(n.send_message_p2p_body)), 0) : n.send_message_p2p_body.length >= 0 && (r.send_message_p2p_body = n.send_message_p2p_body)), n.get_blocklist_body != null && (typeof n.get_blocklist_body == "string" ? i.base64.decode(n.get_blocklist_body, r.get_blocklist_body = i.newBuffer(i.base64.length(n.get_blocklist_body)), 0) : n.get_blocklist_body.length >= 0 && (r.get_blocklist_body = n.get_blocklist_body)), n.set_blocklist_body != null && (typeof n.set_blocklist_body == "string" ? i.base64.decode(n.set_blocklist_body, r.set_blocklist_body = i.newBuffer(i.base64.length(n.set_blocklist_body)), 0) : n.set_blocklist_body.length >= 0 && (r.set_blocklist_body = n.set_blocklist_body)), n.check_in_blocklist_body != null && (typeof n.check_in_blocklist_body == "string" ? i.base64.decode(n.check_in_blocklist_body, r.check_in_blocklist_body = i.newBuffer(i.base64.length(n.check_in_blocklist_body)), 0) : n.check_in_blocklist_body.length >= 0 && (r.check_in_blocklist_body = n.check_in_blocklist_body)), n.mark_message_body != null && (typeof n.mark_message_body == "string" ? i.base64.decode(n.mark_message_body, r.mark_message_body = i.newBuffer(i.base64.length(n.mark_message_body)), 0) : n.mark_message_body.length >= 0 && (r.mark_message_body = n.mark_message_body)), n.pull_mark_message_body != null && (typeof n.pull_mark_message_body == "string" ? i.base64.decode(n.pull_mark_message_body, r.pull_mark_message_body = i.newBuffer(i.base64.length(n.pull_mark_message_body)), 0) : n.pull_mark_message_body.length >= 0 && (r.pull_mark_message_body = n.pull_mark_message_body)), n.batch_get_conversation_participants_readindex != null && (typeof n.batch_get_conversation_participants_readindex == "string" ? i.base64.decode(n.batch_get_conversation_participants_readindex, r.batch_get_conversation_participants_readindex = i.newBuffer(i.base64.length(n.batch_get_conversation_participants_readindex)), 0) : n.batch_get_conversation_participants_readindex.length >= 0 && (r.batch_get_conversation_participants_readindex = n.batch_get_conversation_participants_readindex)), n.message_by_init != null && (typeof n.message_by_init == "string" ? i.base64.decode(n.message_by_init, r.message_by_init = i.newBuffer(i.base64.length(n.message_by_init)), 0) : n.message_by_init.length >= 0 && (r.message_by_init = n.message_by_init)), n.mark_msg_unread_count_report != null && (typeof n.mark_msg_unread_count_report == "string" ? i.base64.decode(n.mark_msg_unread_count_report, r.mark_msg_unread_count_report = i.newBuffer(i.base64.length(n.mark_msg_unread_count_report)), 0) : n.mark_msg_unread_count_report.length >= 0 && (r.mark_msg_unread_count_report = n.mark_msg_unread_count_report)), n.mark_msg_get_unread_count != null && (typeof n.mark_msg_get_unread_count == "string" ? i.base64.decode(n.mark_msg_get_unread_count, r.mark_msg_get_unread_count = i.newBuffer(i.base64.length(n.mark_msg_get_unread_count)), 0) : n.mark_msg_get_unread_count.length >= 0 && (r.mark_msg_get_unread_count = n.mark_msg_get_unread_count)), n.batch_unmark_message != null && (typeof n.batch_unmark_message == "string" ? i.base64.decode(n.batch_unmark_message, r.batch_unmark_message = i.newBuffer(i.base64.length(n.batch_unmark_message)), 0) : n.batch_unmark_message.length >= 0 && (r.batch_unmark_message = n.batch_unmark_message)), n.client_batch_ack_body != null && (typeof n.client_batch_ack_body == "string" ? i.base64.decode(n.client_batch_ack_body, r.client_batch_ack_body = i.newBuffer(i.base64.length(n.client_batch_ack_body)), 0) : n.client_batch_ack_body.length >= 0 && (r.client_batch_ack_body = n.client_batch_ack_body)), r
					}, e.toObject = function(n, r) {
						r || (r = {});
						let c = {};
						return n.send_message_body != null && n.hasOwnProperty("send_message_body") && (c.send_message_body = a.pigeon.RequestBasic.Request.SendMessageRequestBody.toObject(n.send_message_body, r), r.oneofs && (c._send_message_body = "send_message_body")), n.messages_per_user_body != null && n.hasOwnProperty("messages_per_user_body") && (c.messages_per_user_body = a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody.toObject(n.messages_per_user_body, r), r.oneofs && (c._messages_per_user_body = "messages_per_user_body")), n.messages_per_user_init_v2_body != null && n.hasOwnProperty("messages_per_user_init_v2_body") && (c.messages_per_user_init_v2_body = r.bytes === String ? i.base64.encode(n.messages_per_user_init_v2_body, 0, n.messages_per_user_init_v2_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.messages_per_user_init_v2_body) : n.messages_per_user_init_v2_body, r.oneofs && (c._messages_per_user_init_v2_body = "messages_per_user_init_v2_body")), n.get_message_by_id_body != null && n.hasOwnProperty("get_message_by_id_body") && (c.get_message_by_id_body = r.bytes === String ? i.base64.encode(n.get_message_by_id_body, 0, n.get_message_by_id_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_message_by_id_body) : n.get_message_by_id_body, r.oneofs && (c._get_message_by_id_body = "get_message_by_id_body")), n.messages_in_conversation_body != null && n.hasOwnProperty("messages_in_conversation_body") && (c.messages_in_conversation_body = r.bytes === String ? i.base64.encode(n.messages_in_conversation_body, 0, n.messages_in_conversation_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.messages_in_conversation_body) : n.messages_in_conversation_body, r.oneofs && (c._messages_in_conversation_body = "messages_in_conversation_body")), n.get_messages_checkinfo_in_conversation_body != null && n.hasOwnProperty("get_messages_checkinfo_in_conversation_body") && (c.get_messages_checkinfo_in_conversation_body = r.bytes === String ? i.base64.encode(n.get_messages_checkinfo_in_conversation_body, 0, n.get_messages_checkinfo_in_conversation_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_messages_checkinfo_in_conversation_body) : n.get_messages_checkinfo_in_conversation_body, r.oneofs && (c._get_messages_checkinfo_in_conversation_body = "get_messages_checkinfo_in_conversation_body")), n.send_user_action_body != null && n.hasOwnProperty("send_user_action_body") && (c.send_user_action_body = r.bytes === String ? i.base64.encode(n.send_user_action_body, 0, n.send_user_action_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.send_user_action_body) : n.send_user_action_body, r.oneofs && (c._send_user_action_body = "send_user_action_body")), n.send_input_status_body != null && n.hasOwnProperty("send_input_status_body") && (c.send_input_status_body = r.bytes === String ? i.base64.encode(n.send_input_status_body, 0, n.send_input_status_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.send_input_status_body) : n.send_input_status_body, r.oneofs && (c._send_input_status_body = "send_input_status_body")), n.delete_conversation_body != null && n.hasOwnProperty("delete_conversation_body") && (c.delete_conversation_body = r.bytes === String ? i.base64.encode(n.delete_conversation_body, 0, n.delete_conversation_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.delete_conversation_body) : n.delete_conversation_body, r.oneofs && (c._delete_conversation_body = "delete_conversation_body")), n.mark_conversation_read_body != null && n.hasOwnProperty("mark_conversation_read_body") && (c.mark_conversation_read_body = r.bytes === String ? i.base64.encode(n.mark_conversation_read_body, 0, n.mark_conversation_read_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.mark_conversation_read_body) : n.mark_conversation_read_body, r.oneofs && (c._mark_conversation_read_body = "mark_conversation_read_body")), n.conversation_participants_body != null && n.hasOwnProperty("conversation_participants_body") && (c.conversation_participants_body = r.bytes === String ? i.base64.encode(n.conversation_participants_body, 0, n.conversation_participants_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.conversation_participants_body) : n.conversation_participants_body, r.oneofs && (c._conversation_participants_body = "conversation_participants_body")), n.create_conversation_v2_body != null && n.hasOwnProperty("create_conversation_v2_body") && (c.create_conversation_v2_body = a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody.toObject(n.create_conversation_v2_body, r), r.oneofs && (c._create_conversation_v2_body = "create_conversation_v2_body")), n.get_conversation_info_list_v2_body != null && n.hasOwnProperty("get_conversation_info_list_v2_body") && (c.get_conversation_info_list_v2_body = a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody.toObject(n.get_conversation_info_list_v2_body, r), r.oneofs && (c._get_conversation_info_list_v2_body = "get_conversation_info_list_v2_body")), n.get_conversation_info_list_by_favorite_v2_body != null && n.hasOwnProperty("get_conversation_info_list_by_favorite_v2_body") && (c.get_conversation_info_list_by_favorite_v2_body = r.bytes === String ? i.base64.encode(n.get_conversation_info_list_by_favorite_v2_body, 0, n.get_conversation_info_list_by_favorite_v2_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_conversation_info_list_by_favorite_v2_body) : n.get_conversation_info_list_by_favorite_v2_body, r.oneofs && (c._get_conversation_info_list_by_favorite_v2_body = "get_conversation_info_list_by_favorite_v2_body")), n.get_conversation_info_list_by_top_v2_body != null && n.hasOwnProperty("get_conversation_info_list_by_top_v2_body") && (c.get_conversation_info_list_by_top_v2_body = r.bytes === String ? i.base64.encode(n.get_conversation_info_list_by_top_v2_body, 0, n.get_conversation_info_list_by_top_v2_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_conversation_info_list_by_top_v2_body) : n.get_conversation_info_list_by_top_v2_body, r.oneofs && (c._get_conversation_info_list_by_top_v2_body = "get_conversation_info_list_by_top_v2_body")), n.batch_mark_read_body != null && n.hasOwnProperty("batch_mark_read_body") && (c.batch_mark_read_body = r.bytes === String ? i.base64.encode(n.batch_mark_read_body, 0, n.batch_mark_read_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.batch_mark_read_body) : n.batch_mark_read_body, r.oneofs && (c._batch_mark_read_body = "batch_mark_read_body")), n.dissolve_conversation_body != null && n.hasOwnProperty("dissolve_conversation_body") && (c.dissolve_conversation_body = r.bytes === String ? i.base64.encode(n.dissolve_conversation_body, 0, n.dissolve_conversation_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.dissolve_conversation_body) : n.dissolve_conversation_body, r.oneofs && (c._dissolve_conversation_body = "dissolve_conversation_body")), n.conversation_add_participants_body != null && n.hasOwnProperty("conversation_add_participants_body") && (c.conversation_add_participants_body = a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest.toObject(n.conversation_add_participants_body, r), r.oneofs && (c._conversation_add_participants_body = "conversation_add_participants_body")), n.conversation_remove_participants_body != null && n.hasOwnProperty("conversation_remove_participants_body") && (c.conversation_remove_participants_body = a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.toObject(n.conversation_remove_participants_body, r), r.oneofs && (c._conversation_remove_participants_body = "conversation_remove_participants_body")), n.leave_conversation_body != null && n.hasOwnProperty("leave_conversation_body") && (c.leave_conversation_body = a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody.toObject(n.leave_conversation_body, r), r.oneofs && (c._leave_conversation_body = "leave_conversation_body")), n.mget_conversation_participants_body != null && n.hasOwnProperty("mget_conversation_participants_body") && (c.mget_conversation_participants_body = r.bytes === String ? i.base64.encode(n.mget_conversation_participants_body, 0, n.mget_conversation_participants_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.mget_conversation_participants_body) : n.mget_conversation_participants_body, r.oneofs && (c._mget_conversation_participants_body = "mget_conversation_participants_body")), n.update_conversation_participant_body != null && n.hasOwnProperty("update_conversation_participant_body") && (c.update_conversation_participant_body = r.bytes === String ? i.base64.encode(n.update_conversation_participant_body, 0, n.update_conversation_participant_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.update_conversation_participant_body) : n.update_conversation_participant_body, r.oneofs && (c._update_conversation_participant_body = "update_conversation_participant_body")), n.delete_message_body != null && n.hasOwnProperty("delete_message_body") && (c.delete_message_body = r.bytes === String ? i.base64.encode(n.delete_message_body, 0, n.delete_message_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.delete_message_body) : n.delete_message_body, r.oneofs && (c._delete_message_body = "delete_message_body")), n.recall_message_body != null && n.hasOwnProperty("recall_message_body") && (c.recall_message_body = a.pigeon.RequestBasic.Request.RecallMessageRequestBody.toObject(n.recall_message_body, r), r.oneofs && (c._recall_message_body = "recall_message_body")), n.modify_message_property_body != null && n.hasOwnProperty("modify_message_property_body") && (c.modify_message_property_body = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.toObject(n.modify_message_property_body, r), r.oneofs && (c._modify_message_property_body = "modify_message_property_body")), n.get_conversation_core_info_body != null && n.hasOwnProperty("get_conversation_core_info_body") && (c.get_conversation_core_info_body = r.bytes === String ? i.base64.encode(n.get_conversation_core_info_body, 0, n.get_conversation_core_info_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_conversation_core_info_body) : n.get_conversation_core_info_body, r.oneofs && (c._get_conversation_core_info_body = "get_conversation_core_info_body")), n.set_conversation_core_info_body != null && n.hasOwnProperty("set_conversation_core_info_body") && (c.set_conversation_core_info_body = r.bytes === String ? i.base64.encode(n.set_conversation_core_info_body, 0, n.set_conversation_core_info_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.set_conversation_core_info_body) : n.set_conversation_core_info_body, r.oneofs && (c._set_conversation_core_info_body = "set_conversation_core_info_body")), n.upsert_conversation_core_ext_info_body != null && n.hasOwnProperty("upsert_conversation_core_ext_info_body") && (c.upsert_conversation_core_ext_info_body = r.bytes === String ? i.base64.encode(n.upsert_conversation_core_ext_info_body, 0, n.upsert_conversation_core_ext_info_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.upsert_conversation_core_ext_info_body) : n.upsert_conversation_core_ext_info_body, r.oneofs && (c._upsert_conversation_core_ext_info_body = "upsert_conversation_core_ext_info_body")), n.set_conversation_setting_info_body != null && n.hasOwnProperty("set_conversation_setting_info_body") && (c.set_conversation_setting_info_body = r.bytes === String ? i.base64.encode(n.set_conversation_setting_info_body, 0, n.set_conversation_setting_info_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.set_conversation_setting_info_body) : n.set_conversation_setting_info_body, r.oneofs && (c._set_conversation_setting_info_body = "set_conversation_setting_info_body")), n.upsert_conversation_setting_ext_info_body != null && n.hasOwnProperty("upsert_conversation_setting_ext_info_body") && (c.upsert_conversation_setting_ext_info_body = r.bytes === String ? i.base64.encode(n.upsert_conversation_setting_ext_info_body, 0, n.upsert_conversation_setting_ext_info_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.upsert_conversation_setting_ext_info_body) : n.upsert_conversation_setting_ext_info_body, r.oneofs && (c._upsert_conversation_setting_ext_info_body = "upsert_conversation_setting_ext_info_body")), n.get_stranger_conversation_body != null && n.hasOwnProperty("get_stranger_conversation_body") && (c.get_stranger_conversation_body = a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody.toObject(n.get_stranger_conversation_body, r), r.oneofs && (c._get_stranger_conversation_body = "get_stranger_conversation_body")), n.get_stranger_messages_body != null && n.hasOwnProperty("get_stranger_messages_body") && (c.get_stranger_messages_body = r.bytes === String ? i.base64.encode(n.get_stranger_messages_body, 0, n.get_stranger_messages_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_stranger_messages_body) : n.get_stranger_messages_body, r.oneofs && (c._get_stranger_messages_body = "get_stranger_messages_body")), n.delete_stranger_message_body != null && n.hasOwnProperty("delete_stranger_message_body") && (c.delete_stranger_message_body = r.bytes === String ? i.base64.encode(n.delete_stranger_message_body, 0, n.delete_stranger_message_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.delete_stranger_message_body) : n.delete_stranger_message_body, r.oneofs && (c._delete_stranger_message_body = "delete_stranger_message_body")), n.delete_stranger_conversation_body != null && n.hasOwnProperty("delete_stranger_conversation_body") && (c.delete_stranger_conversation_body = r.bytes === String ? i.base64.encode(n.delete_stranger_conversation_body, 0, n.delete_stranger_conversation_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.delete_stranger_conversation_body) : n.delete_stranger_conversation_body, r.oneofs && (c._delete_stranger_conversation_body = "delete_stranger_conversation_body")), n.delete_stranger_all_conversation_body != null && n.hasOwnProperty("delete_stranger_all_conversation_body") && (c.delete_stranger_all_conversation_body = r.bytes === String ? i.base64.encode(n.delete_stranger_all_conversation_body, 0, n.delete_stranger_all_conversation_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.delete_stranger_all_conversation_body) : n.delete_stranger_all_conversation_body, r.oneofs && (c._delete_stranger_all_conversation_body = "delete_stranger_all_conversation_body")), n.mark_stranger_conversation_read_body != null && n.hasOwnProperty("mark_stranger_conversation_read_body") && (c.mark_stranger_conversation_read_body = r.bytes === String ? i.base64.encode(n.mark_stranger_conversation_read_body, 0, n.mark_stranger_conversation_read_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.mark_stranger_conversation_read_body) : n.mark_stranger_conversation_read_body, r.oneofs && (c._mark_stranger_conversation_read_body = "mark_stranger_conversation_read_body")), n.mark_stranger_all_conversation_read_body != null && n.hasOwnProperty("mark_stranger_all_conversation_read_body") && (c.mark_stranger_all_conversation_read_body = r.bytes === String ? i.base64.encode(n.mark_stranger_all_conversation_read_body, 0, n.mark_stranger_all_conversation_read_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.mark_stranger_all_conversation_read_body) : n.mark_stranger_all_conversation_read_body, r.oneofs && (c._mark_stranger_all_conversation_read_body = "mark_stranger_all_conversation_read_body")), n.participants_read_index_body != null && n.hasOwnProperty("participants_read_index_body") && (c.participants_read_index_body = r.bytes === String ? i.base64.encode(n.participants_read_index_body, 0, n.participants_read_index_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.participants_read_index_body) : n.participants_read_index_body, r.oneofs && (c._participants_read_index_body = "participants_read_index_body")), n.participants_min_index_body != null && n.hasOwnProperty("participants_min_index_body") && (c.participants_min_index_body = r.bytes === String ? i.base64.encode(n.participants_min_index_body, 0, n.participants_min_index_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.participants_min_index_body) : n.participants_min_index_body, r.oneofs && (c._participants_min_index_body = "participants_min_index_body")), n.get_upload_token_body != null && n.hasOwnProperty("get_upload_token_body") && (c.get_upload_token_body = r.bytes === String ? i.base64.encode(n.get_upload_token_body, 0, n.get_upload_token_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_upload_token_body) : n.get_upload_token_body, r.oneofs && (c._get_upload_token_body = "get_upload_token_body")), n.get_media_urls_body != null && n.hasOwnProperty("get_media_urls_body") && (c.get_media_urls_body = r.bytes === String ? i.base64.encode(n.get_media_urls_body, 0, n.get_media_urls_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_media_urls_body) : n.get_media_urls_body, r.oneofs && (c._get_media_urls_body = "get_media_urls_body")), n.get_ticket_body != null && n.hasOwnProperty("get_ticket_body") && (c.get_ticket_body = r.bytes === String ? i.base64.encode(n.get_ticket_body, 0, n.get_ticket_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_ticket_body) : n.get_ticket_body, r.oneofs && (c._get_ticket_body = "get_ticket_body")), n.get_conversation_list_body != null && n.hasOwnProperty("get_conversation_list_body") && (c.get_conversation_list_body = a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody.toObject(n.get_conversation_list_body, r), r.oneofs && (c._get_conversation_list_body = "get_conversation_list_body")), n.broadcast_send_message_body != null && n.hasOwnProperty("broadcast_send_message_body") && (c.broadcast_send_message_body = r.bytes === String ? i.base64.encode(n.broadcast_send_message_body, 0, n.broadcast_send_message_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.broadcast_send_message_body) : n.broadcast_send_message_body, r.oneofs && (c._broadcast_send_message_body = "broadcast_send_message_body")), n.broadcast_recv_message_body != null && n.hasOwnProperty("broadcast_recv_message_body") && (c.broadcast_recv_message_body = r.bytes === String ? i.base64.encode(n.broadcast_recv_message_body, 0, n.broadcast_recv_message_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.broadcast_recv_message_body) : n.broadcast_recv_message_body, r.oneofs && (c._broadcast_recv_message_body = "broadcast_recv_message_body")), n.broadcast_user_counter_body != null && n.hasOwnProperty("broadcast_user_counter_body") && (c.broadcast_user_counter_body = r.bytes === String ? i.base64.encode(n.broadcast_user_counter_body, 0, n.broadcast_user_counter_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.broadcast_user_counter_body) : n.broadcast_user_counter_body, r.oneofs && (c._broadcast_user_counter_body = "broadcast_user_counter_body")), n.client_ack_body != null && n.hasOwnProperty("client_ack_body") && (c.client_ack_body = r.bytes === String ? i.base64.encode(n.client_ack_body, 0, n.client_ack_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.client_ack_body) : n.client_ack_body, r.oneofs && (c._client_ack_body = "client_ack_body")), n.create_voip_body != null && n.hasOwnProperty("create_voip_body") && (c.create_voip_body = r.bytes === String ? i.base64.encode(n.create_voip_body, 0, n.create_voip_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.create_voip_body) : n.create_voip_body, r.oneofs && (c._create_voip_body = "create_voip_body")), n.call_voip_body != null && n.hasOwnProperty("call_voip_body") && (c.call_voip_body = r.bytes === String ? i.base64.encode(n.call_voip_body, 0, n.call_voip_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.call_voip_body) : n.call_voip_body, r.oneofs && (c._call_voip_body = "call_voip_body")), n.update_voip_body != null && n.hasOwnProperty("update_voip_body") && (c.update_voip_body = r.bytes === String ? i.base64.encode(n.update_voip_body, 0, n.update_voip_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.update_voip_body) : n.update_voip_body, r.oneofs && (c._update_voip_body = "update_voip_body")), n.channel_heartbeat_body != null && n.hasOwnProperty("channel_heartbeat_body") && (c.channel_heartbeat_body = r.bytes === String ? i.base64.encode(n.channel_heartbeat_body, 0, n.channel_heartbeat_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.channel_heartbeat_body) : n.channel_heartbeat_body, r.oneofs && (c._channel_heartbeat_body = "channel_heartbeat_body")), n.profile_get_info != null && n.hasOwnProperty("profile_get_info") && (c.profile_get_info = r.bytes === String ? i.base64.encode(n.profile_get_info, 0, n.profile_get_info.length) : r.bytes === Array ? Array.prototype.slice.call(n.profile_get_info) : n.profile_get_info, r.oneofs && (c._profile_get_info = "profile_get_info")), n.report_client_metrics_body != null && n.hasOwnProperty("report_client_metrics_body") && (c.report_client_metrics_body = r.bytes === String ? i.base64.encode(n.report_client_metrics_body, 0, n.report_client_metrics_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.report_client_metrics_body) : n.report_client_metrics_body, r.oneofs && (c._report_client_metrics_body = "report_client_metrics_body")), n.get_configs_body != null && n.hasOwnProperty("get_configs_body") && (c.get_configs_body = r.bytes === String ? i.base64.encode(n.get_configs_body, 0, n.get_configs_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_configs_body) : n.get_configs_body, r.oneofs && (c._get_configs_body = "get_configs_body")), n.unread_count_report_body != null && n.hasOwnProperty("unread_count_report_body") && (c.unread_count_report_body = r.bytes === String ? i.base64.encode(n.unread_count_report_body, 0, n.unread_count_report_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.unread_count_report_body) : n.unread_count_report_body, r.oneofs && (c._unread_count_report_body = "unread_count_report_body")), n.block_members_body != null && n.hasOwnProperty("block_members_body") && (c.block_members_body = a.pigeon.RequestBasic.Request.BlockMembersRequestBody.toObject(n.block_members_body, r), r.oneofs && (c._block_members_body = "block_members_body")), n.block_conversation_body != null && n.hasOwnProperty("block_conversation_body") && (c.block_conversation_body = r.bytes === String ? i.base64.encode(n.block_conversation_body, 0, n.block_conversation_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.block_conversation_body) : n.block_conversation_body, r.oneofs && (c._block_conversation_body = "block_conversation_body")), n.modify_message_ext_body != null && n.hasOwnProperty("modify_message_ext_body") && (c.modify_message_ext_body = r.bytes === String ? i.base64.encode(n.modify_message_ext_body, 0, n.modify_message_ext_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.modify_message_ext_body) : n.modify_message_ext_body, r.oneofs && (c._modify_message_ext_body = "modify_message_ext_body")), n.get_unread_count_body != null && n.hasOwnProperty("get_unread_count_body") && (c.get_unread_count_body = r.bytes === String ? i.base64.encode(n.get_unread_count_body, 0, n.get_unread_count_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_unread_count_body) : n.get_unread_count_body, r.oneofs && (c._get_unread_count_body = "get_unread_count_body")), n.send_message_p2p_body != null && n.hasOwnProperty("send_message_p2p_body") && (c.send_message_p2p_body = r.bytes === String ? i.base64.encode(n.send_message_p2p_body, 0, n.send_message_p2p_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.send_message_p2p_body) : n.send_message_p2p_body, r.oneofs && (c._send_message_p2p_body = "send_message_p2p_body")), n.get_blocklist_body != null && n.hasOwnProperty("get_blocklist_body") && (c.get_blocklist_body = r.bytes === String ? i.base64.encode(n.get_blocklist_body, 0, n.get_blocklist_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.get_blocklist_body) : n.get_blocklist_body, r.oneofs && (c._get_blocklist_body = "get_blocklist_body")), n.set_blocklist_body != null && n.hasOwnProperty("set_blocklist_body") && (c.set_blocklist_body = r.bytes === String ? i.base64.encode(n.set_blocklist_body, 0, n.set_blocklist_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.set_blocklist_body) : n.set_blocklist_body, r.oneofs && (c._set_blocklist_body = "set_blocklist_body")), n.check_in_blocklist_body != null && n.hasOwnProperty("check_in_blocklist_body") && (c.check_in_blocklist_body = r.bytes === String ? i.base64.encode(n.check_in_blocklist_body, 0, n.check_in_blocklist_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.check_in_blocklist_body) : n.check_in_blocklist_body, r.oneofs && (c._check_in_blocklist_body = "check_in_blocklist_body")), n.mark_message_body != null && n.hasOwnProperty("mark_message_body") && (c.mark_message_body = r.bytes === String ? i.base64.encode(n.mark_message_body, 0, n.mark_message_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.mark_message_body) : n.mark_message_body, r.oneofs && (c._mark_message_body = "mark_message_body")), n.pull_mark_message_body != null && n.hasOwnProperty("pull_mark_message_body") && (c.pull_mark_message_body = r.bytes === String ? i.base64.encode(n.pull_mark_message_body, 0, n.pull_mark_message_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.pull_mark_message_body) : n.pull_mark_message_body, r.oneofs && (c._pull_mark_message_body = "pull_mark_message_body")), n.batch_get_conversation_participants_readindex != null && n.hasOwnProperty("batch_get_conversation_participants_readindex") && (c.batch_get_conversation_participants_readindex = r.bytes === String ? i.base64.encode(n.batch_get_conversation_participants_readindex, 0, n.batch_get_conversation_participants_readindex.length) : r.bytes === Array ? Array.prototype.slice.call(n.batch_get_conversation_participants_readindex) : n.batch_get_conversation_participants_readindex, r.oneofs && (c._batch_get_conversation_participants_readindex = "batch_get_conversation_participants_readindex")), n.message_by_init != null && n.hasOwnProperty("message_by_init") && (c.message_by_init = r.bytes === String ? i.base64.encode(n.message_by_init, 0, n.message_by_init.length) : r.bytes === Array ? Array.prototype.slice.call(n.message_by_init) : n.message_by_init, r.oneofs && (c._message_by_init = "message_by_init")), n.mark_msg_unread_count_report != null && n.hasOwnProperty("mark_msg_unread_count_report") && (c.mark_msg_unread_count_report = r.bytes === String ? i.base64.encode(n.mark_msg_unread_count_report, 0, n.mark_msg_unread_count_report.length) : r.bytes === Array ? Array.prototype.slice.call(n.mark_msg_unread_count_report) : n.mark_msg_unread_count_report, r.oneofs && (c._mark_msg_unread_count_report = "mark_msg_unread_count_report")), n.mark_msg_get_unread_count != null && n.hasOwnProperty("mark_msg_get_unread_count") && (c.mark_msg_get_unread_count = r.bytes === String ? i.base64.encode(n.mark_msg_get_unread_count, 0, n.mark_msg_get_unread_count.length) : r.bytes === Array ? Array.prototype.slice.call(n.mark_msg_get_unread_count) : n.mark_msg_get_unread_count, r.oneofs && (c._mark_msg_get_unread_count = "mark_msg_get_unread_count")), n.batch_unmark_message != null && n.hasOwnProperty("batch_unmark_message") && (c.batch_unmark_message = r.bytes === String ? i.base64.encode(n.batch_unmark_message, 0, n.batch_unmark_message.length) : r.bytes === Array ? Array.prototype.slice.call(n.batch_unmark_message) : n.batch_unmark_message, r.oneofs && (c._batch_unmark_message = "batch_unmark_message")), n.client_batch_ack_body != null && n.hasOwnProperty("client_batch_ack_body") && (c.client_batch_ack_body = r.bytes === String ? i.base64.encode(n.client_batch_ack_body, 0, n.client_batch_ack_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.client_batch_ack_body) : n.client_batch_ack_body, r.oneofs && (c._client_batch_ack_body = "client_batch_ack_body")), n.audio_recognition_body != null && n.hasOwnProperty("audio_recognition_body") && (c.audio_recognition_body = r.bytes === String ? i.base64.encode(n.audio_recognition_body, 0, n.audio_recognition_body.length) : r.bytes === Array ? Array.prototype.slice.call(n.audio_recognition_body) : n.audio_recognition_body, r.oneofs && (c._audio_recognition_body = "audio_recognition_body")), c
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(n) {
						return n === void 0 && (n = "type.googleapis.com"), n + "/pigeon.RequestBasic.Request.RequestBody"
					}, e
				}(), _.SendMessageRequestBody = function() {
					function e(o) {
						if (this.ext = [], this.mentioned_users = [], o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversation_id = "", e.prototype.conversation_type = 0, e.prototype.conversation_short_id = 0, e.prototype.content = "", e.prototype.ext = i.emptyArray, e.prototype.message_type = 0, e.prototype.ticket = "", e.prototype.client_message_id = "", e.prototype.mentioned_users = i.emptyArray, e.prototype.ignore_badge_count = !1, e.prototype.ref_msg_info = null, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						if (n || (n = x.create()), n.uint32(10)
							.string(t.conversation_id), n.uint32(16)
							.uint32(t.conversation_type), n.uint32(24)
							.uint64(t.conversation_short_id), n.uint32(34)
							.string(t.content), t.ext != null && t.ext.length)
							for (let r = 0; r < t.ext.length; ++r) a.pigeon.StringKeyValue.encode(t.ext[r], n.uint32(42)
									.fork())
								.ldelim();
						if (n.uint32(48)
							.uint32(t.message_type), n.uint32(58)
							.string(t.ticket), n.uint32(66)
							.string(t.client_message_id), t.mentioned_users != null && t.mentioned_users.length) {
							n.uint32(74)
								.fork();
							for (let r = 0; r < t.mentioned_users.length; ++r) n.uint64(t.mentioned_users[r]);
							n.ldelim()
						}
						return t.ignore_badge_count != null && Object.hasOwnProperty.call(t, "ignore_badge_count") && n.uint32(80)
							.bool(t.ignore_badge_count), t.ref_msg_info != null && Object.hasOwnProperty.call(t, "ref_msg_info") && a.pigeon.RequestBasic.Request.ReferencedMessageInfo.encode(t.ref_msg_info, n.uint32(90)
								.fork())
							.ldelim(), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.SendMessageRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversation_id = t.string();
										break
									}
								case 2:
									{
										c.conversation_type = t.uint32();
										break
									}
								case 3:
									{
										c.conversation_short_id = t.uint64();
										break
									}
								case 4:
									{
										c.content = t.string();
										break
									}
								case 5:
									{
										c.ext && c.ext.length || (c.ext = []),
										c.ext.push(a.pigeon.StringKeyValue.decode(t, t.uint32()));
										break
									}
								case 6:
									{
										c.message_type = t.uint32();
										break
									}
								case 7:
									{
										c.ticket = t.string();
										break
									}
								case 8:
									{
										c.client_message_id = t.string();
										break
									}
								case 9:
									{
										if (c.mentioned_users && c.mentioned_users.length || (c.mentioned_users = []), (d & 7) === 2) {
											let k = t.uint32() + t.pos;
											for (; t.pos < k;) c.mentioned_users.push(t.uint64())
										} else c.mentioned_users.push(t.uint64());
										break
									}
								case 10:
									{
										c.ignore_badge_count = t.bool();
										break
									}
								case 11:
									{
										c.ref_msg_info = a.pigeon.RequestBasic.Request.ReferencedMessageInfo.decode(t, t.uint32());
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						if (!c.hasOwnProperty("conversation_id")) throw i.ProtocolError("missing required 'conversation_id'", {
							instance: c
						});
						if (!c.hasOwnProperty("conversation_type")) throw i.ProtocolError("missing required 'conversation_type'", {
							instance: c
						});
						if (!c.hasOwnProperty("conversation_short_id")) throw i.ProtocolError("missing required 'conversation_short_id'", {
							instance: c
						});
						if (!c.hasOwnProperty("content")) throw i.ProtocolError("missing required 'content'", {
							instance: c
						});
						if (!c.hasOwnProperty("message_type")) throw i.ProtocolError("missing required 'message_type'", {
							instance: c
						});
						if (!c.hasOwnProperty("ticket")) throw i.ProtocolError("missing required 'ticket'", {
							instance: c
						});
						if (!c.hasOwnProperty("client_message_id")) throw i.ProtocolError("missing required 'client_message_id'", {
							instance: c
						});
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						if (typeof t != "object" || t === null) return "object expected";
						if (!i.isString(t.conversation_id)) return "conversation_id: string expected";
						if (!i.isInteger(t.conversation_type)) return "conversation_type: integer expected";
						if (!i.isInteger(t.conversation_short_id) && !(t.conversation_short_id && i.isInteger(t.conversation_short_id.low) && i.isInteger(t.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
						if (!i.isString(t.content)) return "content: string expected";
						if (t.ext != null && t.hasOwnProperty("ext")) {
							if (!Array.isArray(t.ext)) return "ext: array expected";
							for (let n = 0; n < t.ext.length; ++n) {
								let r = a.pigeon.StringKeyValue.verify(t.ext[n]);
								if (r) return "ext." + r
							}
						}
						if (!i.isInteger(t.message_type)) return "message_type: integer expected";
						if (!i.isString(t.ticket)) return "ticket: string expected";
						if (!i.isString(t.client_message_id)) return "client_message_id: string expected";
						if (t.mentioned_users != null && t.hasOwnProperty("mentioned_users")) {
							if (!Array.isArray(t.mentioned_users)) return "mentioned_users: array expected";
							for (let n = 0; n < t.mentioned_users.length; ++n)
								if (!i.isInteger(t.mentioned_users[n]) && !(t.mentioned_users[n] && i.isInteger(t.mentioned_users[n].low) && i.isInteger(t.mentioned_users[n].high))) return "mentioned_users: integer|Long[] expected"
						}
						if (t.ignore_badge_count != null && t.hasOwnProperty("ignore_badge_count") && typeof t.ignore_badge_count != "boolean") return "ignore_badge_count: boolean expected";
						if (t.ref_msg_info != null && t.hasOwnProperty("ref_msg_info")) {
							let n = a.pigeon.RequestBasic.Request.ReferencedMessageInfo.verify(t.ref_msg_info);
							if (n) return "ref_msg_info." + n
						}
						return null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.SendMessageRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.SendMessageRequestBody;
						if (t.conversation_id != null && (n.conversation_id = String(t.conversation_id)), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), t.conversation_short_id != null && (i.Long ? (n.conversation_short_id = i.Long.fromValue(t.conversation_short_id))
							.unsigned = !0 : typeof t.conversation_short_id == "string" ? n.conversation_short_id = parseInt(t.conversation_short_id, 10) : typeof t.conversation_short_id == "number" ? n.conversation_short_id = t.conversation_short_id : typeof t.conversation_short_id == "object" && (n.conversation_short_id = new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
								.toNumber(!0))), t.content != null && (n.content = String(t.content)), t.ext) {
							if (!Array.isArray(t.ext)) throw TypeError(".pigeon.RequestBasic.Request.SendMessageRequestBody.ext: array expected");
							n.ext = [];
							for (let r = 0; r < t.ext.length; ++r) {
								if (typeof t.ext[r] != "object") throw TypeError(".pigeon.RequestBasic.Request.SendMessageRequestBody.ext: object expected");
								n.ext[r] = a.pigeon.StringKeyValue.fromObject(t.ext[r])
							}
						}
						if (t.message_type != null && (n.message_type = t.message_type >>> 0), t.ticket != null && (n.ticket = String(t.ticket)), t.client_message_id != null && (n.client_message_id = String(t.client_message_id)), t.mentioned_users) {
							if (!Array.isArray(t.mentioned_users)) throw TypeError(".pigeon.RequestBasic.Request.SendMessageRequestBody.mentioned_users: array expected");
							n.mentioned_users = [];
							for (let r = 0; r < t.mentioned_users.length; ++r) i.Long ? (n.mentioned_users[r] = i.Long.fromValue(t.mentioned_users[r]))
								.unsigned = !0 : typeof t.mentioned_users[r] == "string" ? n.mentioned_users[r] = parseInt(t.mentioned_users[r], 10) : typeof t.mentioned_users[r] == "number" ? n.mentioned_users[r] = t.mentioned_users[r] : typeof t.mentioned_users[r] == "object" && (n.mentioned_users[r] = new i.LongBits(t.mentioned_users[r].low >>> 0, t.mentioned_users[r].high >>> 0)
									.toNumber(!0))
						}
						if (t.ignore_badge_count != null && (n.ignore_badge_count = !!t.ignore_badge_count), t.ref_msg_info != null) {
							if (typeof t.ref_msg_info != "object") throw TypeError(".pigeon.RequestBasic.Request.SendMessageRequestBody.ref_msg_info: object expected");
							n.ref_msg_info = a.pigeon.RequestBasic.Request.ReferencedMessageInfo.fromObject(t.ref_msg_info)
						}
						return n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if ((n.arrays || n.defaults) && (r.ext = [], r.mentioned_users = []), n.defaults) {
							if (r.conversation_id = "", r.conversation_type = 0, i.Long) {
								let c = new i.Long(0, 0, !0);
								r.conversation_short_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.conversation_short_id = n.longs === String ? "0" : 0;
							r.content = "", r.message_type = 0, r.ticket = "", r.client_message_id = "", r.ignore_badge_count = !1, r.ref_msg_info = null
						}
						if (t.conversation_id != null && t.hasOwnProperty("conversation_id") && (r.conversation_id = t.conversation_id), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && (typeof t.conversation_short_id == "number" ? r.conversation_short_id = n.longs === String ? String(t.conversation_short_id) : t.conversation_short_id : r.conversation_short_id = n.longs === String ? i.Long.prototype.toString.call(t.conversation_short_id) : n.longs === Number ? new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
							.toNumber(!0) : t.conversation_short_id), t.content != null && t.hasOwnProperty("content") && (r.content = t.content), t.ext && t.ext.length) {
							r.ext = [];
							for (let c = 0; c < t.ext.length; ++c) r.ext[c] = a.pigeon.StringKeyValue.toObject(t.ext[c], n)
						}
						if (t.message_type != null && t.hasOwnProperty("message_type") && (r.message_type = t.message_type), t.ticket != null && t.hasOwnProperty("ticket") && (r.ticket = t.ticket), t.client_message_id != null && t.hasOwnProperty("client_message_id") && (r.client_message_id = t.client_message_id), t.mentioned_users && t.mentioned_users.length) {
							r.mentioned_users = [];
							for (let c = 0; c < t.mentioned_users.length; ++c) typeof t.mentioned_users[c] == "number" ? r.mentioned_users[c] = n.longs === String ? String(t.mentioned_users[c]) : t.mentioned_users[c] : r.mentioned_users[c] = n.longs === String ? i.Long.prototype.toString.call(t.mentioned_users[c]) : n.longs === Number ? new i.LongBits(t.mentioned_users[c].low >>> 0, t.mentioned_users[c].high >>> 0)
								.toNumber(!0) : t.mentioned_users[c]
						}
						return t.ignore_badge_count != null && t.hasOwnProperty("ignore_badge_count") && (r.ignore_badge_count = t.ignore_badge_count), t.ref_msg_info != null && t.hasOwnProperty("ref_msg_info") && (r.ref_msg_info = a.pigeon.RequestBasic.Request.ReferencedMessageInfo.toObject(t.ref_msg_info, n)), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.SendMessageRequestBody"
					}, e
				}(), _.ReferencedMessageInfo = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.referenced_message_id = 0, e.prototype.hint = "", e.prototype.root_message_id = 0, e.prototype.root_message_conv_index = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.referenced_message_id != null && Object.hasOwnProperty.call(t, "referenced_message_id") && n.uint32(8)
							.uint64(t.referenced_message_id), t.hint != null && Object.hasOwnProperty.call(t, "hint") && n.uint32(18)
							.string(t.hint), t.root_message_id != null && Object.hasOwnProperty.call(t, "root_message_id") && n.uint32(24)
							.uint64(t.root_message_id), t.root_message_conv_index != null && Object.hasOwnProperty.call(t, "root_message_conv_index") && n.uint32(32)
							.uint64(t.root_message_conv_index), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.ReferencedMessageInfo;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.referenced_message_id = t.uint64();
										break
									}
								case 2:
									{
										c.hint = t.string();
										break
									}
								case 3:
									{
										c.root_message_id = t.uint64();
										break
									}
								case 4:
									{
										c.root_message_conv_index = t.uint64();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.referenced_message_id != null && t.hasOwnProperty("referenced_message_id") && !i.isInteger(t.referenced_message_id) && !(t.referenced_message_id && i.isInteger(t.referenced_message_id.low) && i.isInteger(t.referenced_message_id.high)) ? "referenced_message_id: integer|Long expected" : t.hint != null && t.hasOwnProperty("hint") && !i.isString(t.hint) ? "hint: string expected" : t.root_message_id != null && t.hasOwnProperty("root_message_id") && !i.isInteger(t.root_message_id) && !(t.root_message_id && i.isInteger(t.root_message_id.low) && i.isInteger(t.root_message_id.high)) ? "root_message_id: integer|Long expected" : t.root_message_conv_index != null && t.hasOwnProperty("root_message_conv_index") && !i.isInteger(t.root_message_conv_index) && !(t.root_message_conv_index && i.isInteger(t.root_message_conv_index.low) && i.isInteger(t.root_message_conv_index.high)) ? "root_message_conv_index: integer|Long expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.ReferencedMessageInfo) return t;
						let n = new a.pigeon.RequestBasic.Request.ReferencedMessageInfo;
						return t.referenced_message_id != null && (i.Long ? (n.referenced_message_id = i.Long.fromValue(t.referenced_message_id))
							.unsigned = !0 : typeof t.referenced_message_id == "string" ? n.referenced_message_id = parseInt(t.referenced_message_id, 10) : typeof t.referenced_message_id == "number" ? n.referenced_message_id = t.referenced_message_id : typeof t.referenced_message_id == "object" && (n.referenced_message_id = new i.LongBits(t.referenced_message_id.low >>> 0, t.referenced_message_id.high >>> 0)
								.toNumber(!0))), t.hint != null && (n.hint = String(t.hint)), t.root_message_id != null && (i.Long ? (n.root_message_id = i.Long.fromValue(t.root_message_id))
							.unsigned = !0 : typeof t.root_message_id == "string" ? n.root_message_id = parseInt(t.root_message_id, 10) : typeof t.root_message_id == "number" ? n.root_message_id = t.root_message_id : typeof t.root_message_id == "object" && (n.root_message_id = new i.LongBits(t.root_message_id.low >>> 0, t.root_message_id.high >>> 0)
								.toNumber(!0))), t.root_message_conv_index != null && (i.Long ? (n.root_message_conv_index = i.Long.fromValue(t.root_message_conv_index))
							.unsigned = !0 : typeof t.root_message_conv_index == "string" ? n.root_message_conv_index = parseInt(t.root_message_conv_index, 10) : typeof t.root_message_conv_index == "number" ? n.root_message_conv_index = t.root_message_conv_index : typeof t.root_message_conv_index == "object" && (n.root_message_conv_index = new i.LongBits(t.root_message_conv_index.low >>> 0, t.root_message_conv_index.high >>> 0)
								.toNumber(!0))), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (i.Long) {
								let c = new i.Long(0, 0, !0);
								r.referenced_message_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.referenced_message_id = n.longs === String ? "0" : 0;
							if (r.hint = "", i.Long) {
								let c = new i.Long(0, 0, !0);
								r.root_message_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.root_message_id = n.longs === String ? "0" : 0;
							if (i.Long) {
								let c = new i.Long(0, 0, !0);
								r.root_message_conv_index = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.root_message_conv_index = n.longs === String ? "0" : 0
						}
						return t.referenced_message_id != null && t.hasOwnProperty("referenced_message_id") && (typeof t.referenced_message_id == "number" ? r.referenced_message_id = n.longs === String ? String(t.referenced_message_id) : t.referenced_message_id : r.referenced_message_id = n.longs === String ? i.Long.prototype.toString.call(t.referenced_message_id) : n.longs === Number ? new i.LongBits(t.referenced_message_id.low >>> 0, t.referenced_message_id.high >>> 0)
							.toNumber(!0) : t.referenced_message_id), t.hint != null && t.hasOwnProperty("hint") && (r.hint = t.hint), t.root_message_id != null && t.hasOwnProperty("root_message_id") && (typeof t.root_message_id == "number" ? r.root_message_id = n.longs === String ? String(t.root_message_id) : t.root_message_id : r.root_message_id = n.longs === String ? i.Long.prototype.toString.call(t.root_message_id) : n.longs === Number ? new i.LongBits(t.root_message_id.low >>> 0, t.root_message_id.high >>> 0)
							.toNumber(!0) : t.root_message_id), t.root_message_conv_index != null && t.hasOwnProperty("root_message_conv_index") && (typeof t.root_message_conv_index == "number" ? r.root_message_conv_index = n.longs === String ? String(t.root_message_conv_index) : t.root_message_conv_index : r.root_message_conv_index = n.longs === String ? i.Long.prototype.toString.call(t.root_message_conv_index) : n.longs === Number ? new i.LongBits(t.root_message_conv_index.low >>> 0, t.root_message_conv_index.high >>> 0)
							.toNumber(!0) : t.root_message_conv_index), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.ReferencedMessageInfo"
					}, e
				}(), _.GetConversationInfoListV2RequestBody = function() {
					function e(o) {
						if (this.conversations = [], o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversations = i.emptyArray, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						if (n || (n = x.create()), t.conversations != null && t.conversations.length)
							for (let r = 0; r < t.conversations.length; ++r) a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody.encode(t.conversations[r], n.uint32(10)
									.fork())
								.ldelim();
						return n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversations && c.conversations.length || (c.conversations = []),
										c.conversations.push(a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody.decode(t, t.uint32()));
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						if (typeof t != "object" || t === null) return "object expected";
						if (t.conversations != null && t.hasOwnProperty("conversations")) {
							if (!Array.isArray(t.conversations)) return "conversations: array expected";
							for (let n = 0; n < t.conversations.length; ++n) {
								let r = a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody.verify(t.conversations[n]);
								if (r) return "conversations." + r
							}
						}
						return null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody;
						if (t.conversations) {
							if (!Array.isArray(t.conversations)) throw TypeError(".pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody.conversations: array expected");
							n.conversations = [];
							for (let r = 0; r < t.conversations.length; ++r) {
								if (typeof t.conversations[r] != "object") throw TypeError(".pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody.conversations: object expected");
								n.conversations[r] = a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody.fromObject(t.conversations[r])
							}
						}
						return n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if ((n.arrays || n.defaults) && (r.conversations = []), t.conversations && t.conversations.length) {
							r.conversations = [];
							for (let c = 0; c < t.conversations.length; ++c) r.conversations[c] = a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody.toObject(t.conversations[c], n)
						}
						return r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.GetConversationInfoListV2RequestBody"
					}, e
				}(), _.GetConversationInfoV2RequestBody = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversation_id = "", e.prototype.conversation_short_id = 0, e.prototype.conversation_type = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.conversation_id != null && Object.hasOwnProperty.call(t, "conversation_id") && n.uint32(10)
							.string(t.conversation_id), t.conversation_short_id != null && Object.hasOwnProperty.call(t, "conversation_short_id") && n.uint32(16)
							.uint64(t.conversation_short_id), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(24)
							.uint32(t.conversation_type), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversation_id = t.string();
										break
									}
								case 2:
									{
										c.conversation_short_id = t.uint64();
										break
									}
								case 3:
									{
										c.conversation_type = t.uint32();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.conversation_id != null && t.hasOwnProperty("conversation_id") && !i.isString(t.conversation_id) ? "conversation_id: string expected" : t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && !i.isInteger(t.conversation_short_id) && !(t.conversation_short_id && i.isInteger(t.conversation_short_id.low) && i.isInteger(t.conversation_short_id.high)) ? "conversation_short_id: integer|Long expected" : t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type) ? "conversation_type: integer expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody;
						return t.conversation_id != null && (n.conversation_id = String(t.conversation_id)), t.conversation_short_id != null && (i.Long ? (n.conversation_short_id = i.Long.fromValue(t.conversation_short_id))
							.unsigned = !0 : typeof t.conversation_short_id == "string" ? n.conversation_short_id = parseInt(t.conversation_short_id, 10) : typeof t.conversation_short_id == "number" ? n.conversation_short_id = t.conversation_short_id : typeof t.conversation_short_id == "object" && (n.conversation_short_id = new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
								.toNumber(!0))), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (r.conversation_id = "", i.Long) {
								let c = new i.Long(0, 0, !0);
								r.conversation_short_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.conversation_short_id = n.longs === String ? "0" : 0;
							r.conversation_type = 0
						}
						return t.conversation_id != null && t.hasOwnProperty("conversation_id") && (r.conversation_id = t.conversation_id), t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && (typeof t.conversation_short_id == "number" ? r.conversation_short_id = n.longs === String ? String(t.conversation_short_id) : t.conversation_short_id : r.conversation_short_id = n.longs === String ? i.Long.prototype.toString.call(t.conversation_short_id) : n.longs === Number ? new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
							.toNumber(!0) : t.conversation_short_id), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.GetConversationInfoV2RequestBody"
					}, e
				}(), _.MessagesPerUserRequestBody = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.cursor = 0, e.prototype.limit = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.cursor != null && Object.hasOwnProperty.call(t, "cursor") && n.uint32(8)
							.uint64(t.cursor), t.limit != null && Object.hasOwnProperty.call(t, "limit") && n.uint32(16)
							.uint32(t.limit), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.cursor = t.uint64();
										break
									}
								case 2:
									{
										c.limit = t.uint32();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.cursor != null && t.hasOwnProperty("cursor") && !i.isInteger(t.cursor) && !(t.cursor && i.isInteger(t.cursor.low) && i.isInteger(t.cursor.high)) ? "cursor: integer|Long expected" : t.limit != null && t.hasOwnProperty("limit") && !i.isInteger(t.limit) ? "limit: integer expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.MessagesPerUserRequestBody;
						return t.cursor != null && (i.Long ? (n.cursor = i.Long.fromValue(t.cursor))
							.unsigned = !0 : typeof t.cursor == "string" ? n.cursor = parseInt(t.cursor, 10) : typeof t.cursor == "number" ? n.cursor = t.cursor : typeof t.cursor == "object" && (n.cursor = new i.LongBits(t.cursor.low >>> 0, t.cursor.high >>> 0)
								.toNumber(!0))), t.limit != null && (n.limit = t.limit >>> 0), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (i.Long) {
								let c = new i.Long(0, 0, !0);
								r.cursor = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.cursor = n.longs === String ? "0" : 0;
							r.limit = 0
						}
						return t.cursor != null && t.hasOwnProperty("cursor") && (typeof t.cursor == "number" ? r.cursor = n.longs === String ? String(t.cursor) : t.cursor : r.cursor = n.longs === String ? i.Long.prototype.toString.call(t.cursor) : n.longs === Number ? new i.LongBits(t.cursor.low >>> 0, t.cursor.high >>> 0)
							.toNumber(!0) : t.cursor), t.limit != null && t.hasOwnProperty("limit") && (r.limit = t.limit), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.MessagesPerUserRequestBody"
					}, e
				}(), _.CreateConversationV2RequestBody = function() {
					function e(o) {
						if (this.participants = [], o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversation_type = 0, e.prototype.participants = i.emptyArray, e.prototype.persistent = !1, e.prototype.idempotent_id = "", e.prototype.name = "", e.prototype.avatar_url = "", e.prototype.description = "", e.prototype.biz_ext = i.newBuffer([]), e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						if (n || (n = x.create()), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(8)
							.uint32(t.conversation_type), t.participants != null && t.participants.length) {
							n.uint32(18)
								.fork();
							for (let r = 0; r < t.participants.length; ++r) n.uint64(t.participants[r]);
							n.ldelim()
						}
						return t.persistent != null && Object.hasOwnProperty.call(t, "persistent") && n.uint32(24)
							.bool(t.persistent), t.idempotent_id != null && Object.hasOwnProperty.call(t, "idempotent_id") && n.uint32(34)
							.string(t.idempotent_id), t.name != null && Object.hasOwnProperty.call(t, "name") && n.uint32(50)
							.string(t.name), t.avatar_url != null && Object.hasOwnProperty.call(t, "avatar_url") && n.uint32(58)
							.string(t.avatar_url), t.description != null && Object.hasOwnProperty.call(t, "description") && n.uint32(66)
							.string(t.description), t.biz_ext != null && Object.hasOwnProperty.call(t, "biz_ext") && n.uint32(90)
							.bytes(t.biz_ext), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversation_type = t.uint32();
										break
									}
								case 2:
									{
										if (c.participants && c.participants.length || (c.participants = []), (d & 7) === 2) {
											let k = t.uint32() + t.pos;
											for (; t.pos < k;) c.participants.push(t.uint64())
										} else c.participants.push(t.uint64());
										break
									}
								case 3:
									{
										c.persistent = t.bool();
										break
									}
								case 4:
									{
										c.idempotent_id = t.string();
										break
									}
								case 6:
									{
										c.name = t.string();
										break
									}
								case 7:
									{
										c.avatar_url = t.string();
										break
									}
								case 8:
									{
										c.description = t.string();
										break
									}
								case 11:
									{
										c.biz_ext = t.bytes();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						if (typeof t != "object" || t === null) return "object expected";
						if (t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type)) return "conversation_type: integer expected";
						if (t.participants != null && t.hasOwnProperty("participants")) {
							if (!Array.isArray(t.participants)) return "participants: array expected";
							for (let n = 0; n < t.participants.length; ++n)
								if (!i.isInteger(t.participants[n]) && !(t.participants[n] && i.isInteger(t.participants[n].low) && i.isInteger(t.participants[n].high))) return "participants: integer|Long[] expected"
						}
						return t.persistent != null && t.hasOwnProperty("persistent") && typeof t.persistent != "boolean" ? "persistent: boolean expected" : t.idempotent_id != null && t.hasOwnProperty("idempotent_id") && !i.isString(t.idempotent_id) ? "idempotent_id: string expected" : t.name != null && t.hasOwnProperty("name") && !i.isString(t.name) ? "name: string expected" : t.avatar_url != null && t.hasOwnProperty("avatar_url") && !i.isString(t.avatar_url) ? "avatar_url: string expected" : t.description != null && t.hasOwnProperty("description") && !i.isString(t.description) ? "description: string expected" : t.biz_ext != null && t.hasOwnProperty("biz_ext") && !(t.biz_ext && typeof t.biz_ext.length == "number" || i.isString(t.biz_ext)) ? "biz_ext: buffer expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.CreateConversationV2RequestBody;
						if (t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), t.participants) {
							if (!Array.isArray(t.participants)) throw TypeError(".pigeon.RequestBasic.Request.CreateConversationV2RequestBody.participants: array expected");
							n.participants = [];
							for (let r = 0; r < t.participants.length; ++r) i.Long ? (n.participants[r] = i.Long.fromValue(t.participants[r]))
								.unsigned = !0 : typeof t.participants[r] == "string" ? n.participants[r] = parseInt(t.participants[r], 10) : typeof t.participants[r] == "number" ? n.participants[r] = t.participants[r] : typeof t.participants[r] == "object" && (n.participants[r] = new i.LongBits(t.participants[r].low >>> 0, t.participants[r].high >>> 0)
									.toNumber(!0))
						}
						return t.persistent != null && (n.persistent = !!t.persistent), t.idempotent_id != null && (n.idempotent_id = String(t.idempotent_id)), t.name != null && (n.name = String(t.name)), t.avatar_url != null && (n.avatar_url = String(t.avatar_url)), t.description != null && (n.description = String(t.description)), t.biz_ext != null && (typeof t.biz_ext == "string" ? i.base64.decode(t.biz_ext, n.biz_ext = i.newBuffer(i.base64.length(t.biz_ext)), 0) : t.biz_ext.length >= 0 && (n.biz_ext = t.biz_ext)), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if ((n.arrays || n.defaults) && (r.participants = []), n.defaults && (r.conversation_type = 0, r.persistent = !1, r.idempotent_id = "", r.name = "", r.avatar_url = "", r.description = "", n.bytes === String ? r.biz_ext = "" : (r.biz_ext = [], n.bytes !== Array && (r.biz_ext = i.newBuffer(r.biz_ext)))), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), t.participants && t.participants.length) {
							r.participants = [];
							for (let c = 0; c < t.participants.length; ++c) typeof t.participants[c] == "number" ? r.participants[c] = n.longs === String ? String(t.participants[c]) : t.participants[c] : r.participants[c] = n.longs === String ? i.Long.prototype.toString.call(t.participants[c]) : n.longs === Number ? new i.LongBits(t.participants[c].low >>> 0, t.participants[c].high >>> 0)
								.toNumber(!0) : t.participants[c]
						}
						return t.persistent != null && t.hasOwnProperty("persistent") && (r.persistent = t.persistent), t.idempotent_id != null && t.hasOwnProperty("idempotent_id") && (r.idempotent_id = t.idempotent_id), t.name != null && t.hasOwnProperty("name") && (r.name = t.name), t.avatar_url != null && t.hasOwnProperty("avatar_url") && (r.avatar_url = t.avatar_url), t.description != null && t.hasOwnProperty("description") && (r.description = t.description), t.biz_ext != null && t.hasOwnProperty("biz_ext") && (r.biz_ext = n.bytes === String ? i.base64.encode(t.biz_ext, 0, t.biz_ext.length) : n.bytes === Array ? Array.prototype.slice.call(t.biz_ext) : t.biz_ext), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.CreateConversationV2RequestBody"
					}, e
				}(), _.GetUserConversationListRequestBody = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.sort_type = 0, e.prototype.cursor = 0, e.prototype.conversation_type = 0, e.prototype.limit = 0, e.prototype.include_role = 0, e.prototype.exclude_role = 0, e.prototype.with_cold = !1, e.prototype.push_status = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.sort_type != null && Object.hasOwnProperty.call(t, "sort_type") && n.uint32(8)
							.uint32(t.sort_type), t.cursor != null && Object.hasOwnProperty.call(t, "cursor") && n.uint32(16)
							.uint64(t.cursor), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(24)
							.uint32(t.conversation_type), t.limit != null && Object.hasOwnProperty.call(t, "limit") && n.uint32(32)
							.uint64(t.limit), t.include_role != null && Object.hasOwnProperty.call(t, "include_role") && n.uint32(40)
							.uint32(t.include_role), t.exclude_role != null && Object.hasOwnProperty.call(t, "exclude_role") && n.uint32(48)
							.uint32(t.exclude_role), t.with_cold != null && Object.hasOwnProperty.call(t, "with_cold") && n.uint32(64)
							.bool(t.with_cold), t.push_status != null && Object.hasOwnProperty.call(t, "push_status") && n.uint32(80)
							.uint32(t.push_status), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.sort_type = t.uint32();
										break
									}
								case 2:
									{
										c.cursor = t.uint64();
										break
									}
								case 3:
									{
										c.conversation_type = t.uint32();
										break
									}
								case 4:
									{
										c.limit = t.uint64();
										break
									}
								case 5:
									{
										c.include_role = t.uint32();
										break
									}
								case 6:
									{
										c.exclude_role = t.uint32();
										break
									}
								case 8:
									{
										c.with_cold = t.bool();
										break
									}
								case 10:
									{
										c.push_status = t.uint32();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.sort_type != null && t.hasOwnProperty("sort_type") && !i.isInteger(t.sort_type) ? "sort_type: integer expected" : t.cursor != null && t.hasOwnProperty("cursor") && !i.isInteger(t.cursor) && !(t.cursor && i.isInteger(t.cursor.low) && i.isInteger(t.cursor.high)) ? "cursor: integer|Long expected" : t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type) ? "conversation_type: integer expected" : t.limit != null && t.hasOwnProperty("limit") && !i.isInteger(t.limit) && !(t.limit && i.isInteger(t.limit.low) && i.isInteger(t.limit.high)) ? "limit: integer|Long expected" : t.include_role != null && t.hasOwnProperty("include_role") && !i.isInteger(t.include_role) ? "include_role: integer expected" : t.exclude_role != null && t.hasOwnProperty("exclude_role") && !i.isInteger(t.exclude_role) ? "exclude_role: integer expected" : t.with_cold != null && t.hasOwnProperty("with_cold") && typeof t.with_cold != "boolean" ? "with_cold: boolean expected" : t.push_status != null && t.hasOwnProperty("push_status") && !i.isInteger(t.push_status) ? "push_status: integer expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.GetUserConversationListRequestBody;
						return t.sort_type != null && (n.sort_type = t.sort_type >>> 0), t.cursor != null && (i.Long ? (n.cursor = i.Long.fromValue(t.cursor))
							.unsigned = !0 : typeof t.cursor == "string" ? n.cursor = parseInt(t.cursor, 10) : typeof t.cursor == "number" ? n.cursor = t.cursor : typeof t.cursor == "object" && (n.cursor = new i.LongBits(t.cursor.low >>> 0, t.cursor.high >>> 0)
								.toNumber(!0))), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), t.limit != null && (i.Long ? (n.limit = i.Long.fromValue(t.limit))
							.unsigned = !0 : typeof t.limit == "string" ? n.limit = parseInt(t.limit, 10) : typeof t.limit == "number" ? n.limit = t.limit : typeof t.limit == "object" && (n.limit = new i.LongBits(t.limit.low >>> 0, t.limit.high >>> 0)
								.toNumber(!0))), t.include_role != null && (n.include_role = t.include_role >>> 0), t.exclude_role != null && (n.exclude_role = t.exclude_role >>> 0), t.with_cold != null && (n.with_cold = !!t.with_cold), t.push_status != null && (n.push_status = t.push_status >>> 0), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (r.sort_type = 0, i.Long) {
								let c = new i.Long(0, 0, !0);
								r.cursor = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.cursor = n.longs === String ? "0" : 0;
							if (r.conversation_type = 0, i.Long) {
								let c = new i.Long(0, 0, !0);
								r.limit = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.limit = n.longs === String ? "0" : 0;
							r.include_role = 0, r.exclude_role = 0, r.with_cold = !1, r.push_status = 0
						}
						return t.sort_type != null && t.hasOwnProperty("sort_type") && (r.sort_type = t.sort_type), t.cursor != null && t.hasOwnProperty("cursor") && (typeof t.cursor == "number" ? r.cursor = n.longs === String ? String(t.cursor) : t.cursor : r.cursor = n.longs === String ? i.Long.prototype.toString.call(t.cursor) : n.longs === Number ? new i.LongBits(t.cursor.low >>> 0, t.cursor.high >>> 0)
							.toNumber(!0) : t.cursor), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), t.limit != null && t.hasOwnProperty("limit") && (typeof t.limit == "number" ? r.limit = n.longs === String ? String(t.limit) : t.limit : r.limit = n.longs === String ? i.Long.prototype.toString.call(t.limit) : n.longs === Number ? new i.LongBits(t.limit.low >>> 0, t.limit.high >>> 0)
							.toNumber(!0) : t.limit), t.include_role != null && t.hasOwnProperty("include_role") && (r.include_role = t.include_role), t.exclude_role != null && t.hasOwnProperty("exclude_role") && (r.exclude_role = t.exclude_role), t.with_cold != null && t.hasOwnProperty("with_cold") && (r.with_cold = t.with_cold), t.push_status != null && t.hasOwnProperty("push_status") && (r.push_status = t.push_status), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.GetUserConversationListRequestBody"
					}, e
				}(), _.AddConversationParticipantsRequest = function() {
					function e(o) {
						if (this.participants = [], this.ext = [], o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversation_id = "", e.prototype.conversation_short_id = 0, e.prototype.conversation_type = 0, e.prototype.participants = i.emptyArray, e.prototype.ext = i.emptyArray, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						if (n || (n = x.create()), t.conversation_id != null && Object.hasOwnProperty.call(t, "conversation_id") && n.uint32(10)
							.string(t.conversation_id), t.conversation_short_id != null && Object.hasOwnProperty.call(t, "conversation_short_id") && n.uint32(16)
							.uint64(t.conversation_short_id), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(24)
							.uint32(t.conversation_type), t.participants != null && t.participants.length) {
							n.uint32(34)
								.fork();
							for (let r = 0; r < t.participants.length; ++r) n.uint64(t.participants[r]);
							n.ldelim()
						}
						if (t.ext != null && t.ext.length)
							for (let r = 0; r < t.ext.length; ++r) a.pigeon.StringKeyValue.encode(t.ext[r], n.uint32(42)
									.fork())
								.ldelim();
						return n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversation_id = t.string();
										break
									}
								case 2:
									{
										c.conversation_short_id = t.uint64();
										break
									}
								case 3:
									{
										c.conversation_type = t.uint32();
										break
									}
								case 4:
									{
										if (c.participants && c.participants.length || (c.participants = []), (d & 7) === 2) {
											let k = t.uint32() + t.pos;
											for (; t.pos < k;) c.participants.push(t.uint64())
										} else c.participants.push(t.uint64());
										break
									}
								case 5:
									{
										c.ext && c.ext.length || (c.ext = []),
										c.ext.push(a.pigeon.StringKeyValue.decode(t, t.uint32()));
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						if (typeof t != "object" || t === null) return "object expected";
						if (t.conversation_id != null && t.hasOwnProperty("conversation_id") && !i.isString(t.conversation_id)) return "conversation_id: string expected";
						if (t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && !i.isInteger(t.conversation_short_id) && !(t.conversation_short_id && i.isInteger(t.conversation_short_id.low) && i.isInteger(t.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
						if (t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type)) return "conversation_type: integer expected";
						if (t.participants != null && t.hasOwnProperty("participants")) {
							if (!Array.isArray(t.participants)) return "participants: array expected";
							for (let n = 0; n < t.participants.length; ++n)
								if (!i.isInteger(t.participants[n]) && !(t.participants[n] && i.isInteger(t.participants[n].low) && i.isInteger(t.participants[n].high))) return "participants: integer|Long[] expected"
						}
						if (t.ext != null && t.hasOwnProperty("ext")) {
							if (!Array.isArray(t.ext)) return "ext: array expected";
							for (let n = 0; n < t.ext.length; ++n) {
								let r = a.pigeon.StringKeyValue.verify(t.ext[n]);
								if (r) return "ext." + r
							}
						}
						return null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest) return t;
						let n = new a.pigeon.RequestBasic.Request.AddConversationParticipantsRequest;
						if (t.conversation_id != null && (n.conversation_id = String(t.conversation_id)), t.conversation_short_id != null && (i.Long ? (n.conversation_short_id = i.Long.fromValue(t.conversation_short_id))
							.unsigned = !0 : typeof t.conversation_short_id == "string" ? n.conversation_short_id = parseInt(t.conversation_short_id, 10) : typeof t.conversation_short_id == "number" ? n.conversation_short_id = t.conversation_short_id : typeof t.conversation_short_id == "object" && (n.conversation_short_id = new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
								.toNumber(!0))), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), t.participants) {
							if (!Array.isArray(t.participants)) throw TypeError(".pigeon.RequestBasic.Request.AddConversationParticipantsRequest.participants: array expected");
							n.participants = [];
							for (let r = 0; r < t.participants.length; ++r) i.Long ? (n.participants[r] = i.Long.fromValue(t.participants[r]))
								.unsigned = !0 : typeof t.participants[r] == "string" ? n.participants[r] = parseInt(t.participants[r], 10) : typeof t.participants[r] == "number" ? n.participants[r] = t.participants[r] : typeof t.participants[r] == "object" && (n.participants[r] = new i.LongBits(t.participants[r].low >>> 0, t.participants[r].high >>> 0)
									.toNumber(!0))
						}
						if (t.ext) {
							if (!Array.isArray(t.ext)) throw TypeError(".pigeon.RequestBasic.Request.AddConversationParticipantsRequest.ext: array expected");
							n.ext = [];
							for (let r = 0; r < t.ext.length; ++r) {
								if (typeof t.ext[r] != "object") throw TypeError(".pigeon.RequestBasic.Request.AddConversationParticipantsRequest.ext: object expected");
								n.ext[r] = a.pigeon.StringKeyValue.fromObject(t.ext[r])
							}
						}
						return n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if ((n.arrays || n.defaults) && (r.participants = [], r.ext = []), n.defaults) {
							if (r.conversation_id = "", i.Long) {
								let c = new i.Long(0, 0, !0);
								r.conversation_short_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.conversation_short_id = n.longs === String ? "0" : 0;
							r.conversation_type = 0
						}
						if (t.conversation_id != null && t.hasOwnProperty("conversation_id") && (r.conversation_id = t.conversation_id), t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && (typeof t.conversation_short_id == "number" ? r.conversation_short_id = n.longs === String ? String(t.conversation_short_id) : t.conversation_short_id : r.conversation_short_id = n.longs === String ? i.Long.prototype.toString.call(t.conversation_short_id) : n.longs === Number ? new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
							.toNumber(!0) : t.conversation_short_id), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), t.participants && t.participants.length) {
							r.participants = [];
							for (let c = 0; c < t.participants.length; ++c) typeof t.participants[c] == "number" ? r.participants[c] = n.longs === String ? String(t.participants[c]) : t.participants[c] : r.participants[c] = n.longs === String ? i.Long.prototype.toString.call(t.participants[c]) : n.longs === Number ? new i.LongBits(t.participants[c].low >>> 0, t.participants[c].high >>> 0)
								.toNumber(!0) : t.participants[c]
						}
						if (t.ext && t.ext.length) {
							r.ext = [];
							for (let c = 0; c < t.ext.length; ++c) r.ext[c] = a.pigeon.StringKeyValue.toObject(t.ext[c], n)
						}
						return r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.AddConversationParticipantsRequest"
					}, e
				}(), _.ConversationRemoveParticipantsRequestBody = function() {
					function e(o) {
						if (this.participants = [], this.ext = [], o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversation_id = "", e.prototype.conversation_short_id = 0, e.prototype.conversation_type = 0, e.prototype.participants = i.emptyArray, e.prototype.ext = i.emptyArray, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						if (n || (n = x.create()), t.conversation_id != null && Object.hasOwnProperty.call(t, "conversation_id") && n.uint32(10)
							.string(t.conversation_id), t.conversation_short_id != null && Object.hasOwnProperty.call(t, "conversation_short_id") && n.uint32(16)
							.uint64(t.conversation_short_id), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(24)
							.uint32(t.conversation_type), t.participants != null && t.participants.length) {
							n.uint32(34)
								.fork();
							for (let r = 0; r < t.participants.length; ++r) n.uint64(t.participants[r]);
							n.ldelim()
						}
						if (t.ext != null && t.ext.length)
							for (let r = 0; r < t.ext.length; ++r) a.pigeon.StringKeyValue.encode(t.ext[r], n.uint32(42)
									.fork())
								.ldelim();
						return n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversation_id = t.string();
										break
									}
								case 2:
									{
										c.conversation_short_id = t.uint64();
										break
									}
								case 3:
									{
										c.conversation_type = t.uint32();
										break
									}
								case 4:
									{
										if (c.participants && c.participants.length || (c.participants = []), (d & 7) === 2) {
											let k = t.uint32() + t.pos;
											for (; t.pos < k;) c.participants.push(t.uint64())
										} else c.participants.push(t.uint64());
										break
									}
								case 5:
									{
										c.ext && c.ext.length || (c.ext = []),
										c.ext.push(a.pigeon.StringKeyValue.decode(t, t.uint32()));
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						if (typeof t != "object" || t === null) return "object expected";
						if (t.conversation_id != null && t.hasOwnProperty("conversation_id") && !i.isString(t.conversation_id)) return "conversation_id: string expected";
						if (t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && !i.isInteger(t.conversation_short_id) && !(t.conversation_short_id && i.isInteger(t.conversation_short_id.low) && i.isInteger(t.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
						if (t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type)) return "conversation_type: integer expected";
						if (t.participants != null && t.hasOwnProperty("participants")) {
							if (!Array.isArray(t.participants)) return "participants: array expected";
							for (let n = 0; n < t.participants.length; ++n)
								if (!i.isInteger(t.participants[n]) && !(t.participants[n] && i.isInteger(t.participants[n].low) && i.isInteger(t.participants[n].high))) return "participants: integer|Long[] expected"
						}
						if (t.ext != null && t.hasOwnProperty("ext")) {
							if (!Array.isArray(t.ext)) return "ext: array expected";
							for (let n = 0; n < t.ext.length; ++n) {
								let r = a.pigeon.StringKeyValue.verify(t.ext[n]);
								if (r) return "ext." + r
							}
						}
						return null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody;
						if (t.conversation_id != null && (n.conversation_id = String(t.conversation_id)), t.conversation_short_id != null && (i.Long ? (n.conversation_short_id = i.Long.fromValue(t.conversation_short_id))
							.unsigned = !0 : typeof t.conversation_short_id == "string" ? n.conversation_short_id = parseInt(t.conversation_short_id, 10) : typeof t.conversation_short_id == "number" ? n.conversation_short_id = t.conversation_short_id : typeof t.conversation_short_id == "object" && (n.conversation_short_id = new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
								.toNumber(!0))), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), t.participants) {
							if (!Array.isArray(t.participants)) throw TypeError(".pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.participants: array expected");
							n.participants = [];
							for (let r = 0; r < t.participants.length; ++r) i.Long ? (n.participants[r] = i.Long.fromValue(t.participants[r]))
								.unsigned = !0 : typeof t.participants[r] == "string" ? n.participants[r] = parseInt(t.participants[r], 10) : typeof t.participants[r] == "number" ? n.participants[r] = t.participants[r] : typeof t.participants[r] == "object" && (n.participants[r] = new i.LongBits(t.participants[r].low >>> 0, t.participants[r].high >>> 0)
									.toNumber(!0))
						}
						if (t.ext) {
							if (!Array.isArray(t.ext)) throw TypeError(".pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.ext: array expected");
							n.ext = [];
							for (let r = 0; r < t.ext.length; ++r) {
								if (typeof t.ext[r] != "object") throw TypeError(".pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody.ext: object expected");
								n.ext[r] = a.pigeon.StringKeyValue.fromObject(t.ext[r])
							}
						}
						return n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if ((n.arrays || n.defaults) && (r.participants = [], r.ext = []), n.defaults) {
							if (r.conversation_id = "", i.Long) {
								let c = new i.Long(0, 0, !0);
								r.conversation_short_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.conversation_short_id = n.longs === String ? "0" : 0;
							r.conversation_type = 0
						}
						if (t.conversation_id != null && t.hasOwnProperty("conversation_id") && (r.conversation_id = t.conversation_id), t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && (typeof t.conversation_short_id == "number" ? r.conversation_short_id = n.longs === String ? String(t.conversation_short_id) : t.conversation_short_id : r.conversation_short_id = n.longs === String ? i.Long.prototype.toString.call(t.conversation_short_id) : n.longs === Number ? new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
							.toNumber(!0) : t.conversation_short_id), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), t.participants && t.participants.length) {
							r.participants = [];
							for (let c = 0; c < t.participants.length; ++c) typeof t.participants[c] == "number" ? r.participants[c] = n.longs === String ? String(t.participants[c]) : t.participants[c] : r.participants[c] = n.longs === String ? i.Long.prototype.toString.call(t.participants[c]) : n.longs === Number ? new i.LongBits(t.participants[c].low >>> 0, t.participants[c].high >>> 0)
								.toNumber(!0) : t.participants[c]
						}
						if (t.ext && t.ext.length) {
							r.ext = [];
							for (let c = 0; c < t.ext.length; ++c) r.ext[c] = a.pigeon.StringKeyValue.toObject(t.ext[c], n)
						}
						return r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.ConversationRemoveParticipantsRequestBody"
					}, e
				}(), _.BlockMembersRequestBody = function() {
					function e(o) {
						if (this.block_time = [], this.ext = [], o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.block_status = 0, e.prototype.block_time = i.emptyArray, e.prototype.conversation_short_id = 0, e.prototype.conversation_type = 0, e.prototype.conversation_id = "", e.prototype.ext = i.emptyArray, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						if (n || (n = x.create()), t.block_status != null && Object.hasOwnProperty.call(t, "block_status") && n.uint32(8)
							.uint32(t.block_status), t.block_time != null && t.block_time.length)
							for (let r = 0; r < t.block_time.length; ++r) a.pigeon.Uint64KeyValue.encode(t.block_time[r], n.uint32(18)
									.fork())
								.ldelim();
						if (t.conversation_short_id != null && Object.hasOwnProperty.call(t, "conversation_short_id") && n.uint32(24)
							.uint64(t.conversation_short_id), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(32)
							.uint32(t.conversation_type), t.conversation_id != null && Object.hasOwnProperty.call(t, "conversation_id") && n.uint32(42)
							.string(t.conversation_id), t.ext != null && t.ext.length)
							for (let r = 0; r < t.ext.length; ++r) a.pigeon.StringKeyValue.encode(t.ext[r], n.uint32(90)
									.fork())
								.ldelim();
						return n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.BlockMembersRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.block_status = t.uint32();
										break
									}
								case 2:
									{
										c.block_time && c.block_time.length || (c.block_time = []),
										c.block_time.push(a.pigeon.Uint64KeyValue.decode(t, t.uint32()));
										break
									}
								case 3:
									{
										c.conversation_short_id = t.uint64();
										break
									}
								case 4:
									{
										c.conversation_type = t.uint32();
										break
									}
								case 5:
									{
										c.conversation_id = t.string();
										break
									}
								case 11:
									{
										c.ext && c.ext.length || (c.ext = []),
										c.ext.push(a.pigeon.StringKeyValue.decode(t, t.uint32()));
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						if (typeof t != "object" || t === null) return "object expected";
						if (t.block_status != null && t.hasOwnProperty("block_status") && !i.isInteger(t.block_status)) return "block_status: integer expected";
						if (t.block_time != null && t.hasOwnProperty("block_time")) {
							if (!Array.isArray(t.block_time)) return "block_time: array expected";
							for (let n = 0; n < t.block_time.length; ++n) {
								let r = a.pigeon.Uint64KeyValue.verify(t.block_time[n]);
								if (r) return "block_time." + r
							}
						}
						if (t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && !i.isInteger(t.conversation_short_id) && !(t.conversation_short_id && i.isInteger(t.conversation_short_id.low) && i.isInteger(t.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
						if (t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type)) return "conversation_type: integer expected";
						if (t.conversation_id != null && t.hasOwnProperty("conversation_id") && !i.isString(t.conversation_id)) return "conversation_id: string expected";
						if (t.ext != null && t.hasOwnProperty("ext")) {
							if (!Array.isArray(t.ext)) return "ext: array expected";
							for (let n = 0; n < t.ext.length; ++n) {
								let r = a.pigeon.StringKeyValue.verify(t.ext[n]);
								if (r) return "ext." + r
							}
						}
						return null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.BlockMembersRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.BlockMembersRequestBody;
						if (t.block_status != null && (n.block_status = t.block_status >>> 0), t.block_time) {
							if (!Array.isArray(t.block_time)) throw TypeError(".pigeon.RequestBasic.Request.BlockMembersRequestBody.block_time: array expected");
							n.block_time = [];
							for (let r = 0; r < t.block_time.length; ++r) {
								if (typeof t.block_time[r] != "object") throw TypeError(".pigeon.RequestBasic.Request.BlockMembersRequestBody.block_time: object expected");
								n.block_time[r] = a.pigeon.Uint64KeyValue.fromObject(t.block_time[r])
							}
						}
						if (t.conversation_short_id != null && (i.Long ? (n.conversation_short_id = i.Long.fromValue(t.conversation_short_id))
							.unsigned = !0 : typeof t.conversation_short_id == "string" ? n.conversation_short_id = parseInt(t.conversation_short_id, 10) : typeof t.conversation_short_id == "number" ? n.conversation_short_id = t.conversation_short_id : typeof t.conversation_short_id == "object" && (n.conversation_short_id = new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
								.toNumber(!0))), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), t.conversation_id != null && (n.conversation_id = String(t.conversation_id)), t.ext) {
							if (!Array.isArray(t.ext)) throw TypeError(".pigeon.RequestBasic.Request.BlockMembersRequestBody.ext: array expected");
							n.ext = [];
							for (let r = 0; r < t.ext.length; ++r) {
								if (typeof t.ext[r] != "object") throw TypeError(".pigeon.RequestBasic.Request.BlockMembersRequestBody.ext: object expected");
								n.ext[r] = a.pigeon.StringKeyValue.fromObject(t.ext[r])
							}
						}
						return n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if ((n.arrays || n.defaults) && (r.block_time = [], r.ext = []), n.defaults) {
							if (r.block_status = 0, i.Long) {
								let c = new i.Long(0, 0, !0);
								r.conversation_short_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.conversation_short_id = n.longs === String ? "0" : 0;
							r.conversation_type = 0, r.conversation_id = ""
						}
						if (t.block_status != null && t.hasOwnProperty("block_status") && (r.block_status = t.block_status), t.block_time && t.block_time.length) {
							r.block_time = [];
							for (let c = 0; c < t.block_time.length; ++c) r.block_time[c] = a.pigeon.Uint64KeyValue.toObject(t.block_time[c], n)
						}
						if (t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && (typeof t.conversation_short_id == "number" ? r.conversation_short_id = n.longs === String ? String(t.conversation_short_id) : t.conversation_short_id : r.conversation_short_id = n.longs === String ? i.Long.prototype.toString.call(t.conversation_short_id) : n.longs === Number ? new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
							.toNumber(!0) : t.conversation_short_id), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), t.conversation_id != null && t.hasOwnProperty("conversation_id") && (r.conversation_id = t.conversation_id), t.ext && t.ext.length) {
							r.ext = [];
							for (let c = 0; c < t.ext.length; ++c) r.ext[c] = a.pigeon.StringKeyValue.toObject(t.ext[c], n)
						}
						return r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.BlockMembersRequestBody"
					}, e
				}(), _.RecallMessageRequestBody = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversation_id = "", e.prototype.conversation_short_id = 0, e.prototype.conversation_type = 0, e.prototype.server_message_id = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.conversation_id != null && Object.hasOwnProperty.call(t, "conversation_id") && n.uint32(10)
							.string(t.conversation_id), t.conversation_short_id != null && Object.hasOwnProperty.call(t, "conversation_short_id") && n.uint32(16)
							.uint64(t.conversation_short_id), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(24)
							.uint32(t.conversation_type), t.server_message_id != null && Object.hasOwnProperty.call(t, "server_message_id") && n.uint32(32)
							.uint64(t.server_message_id), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.RecallMessageRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversation_id = t.string();
										break
									}
								case 2:
									{
										c.conversation_short_id = t.uint64();
										break
									}
								case 3:
									{
										c.conversation_type = t.uint32();
										break
									}
								case 4:
									{
										c.server_message_id = t.uint64();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.conversation_id != null && t.hasOwnProperty("conversation_id") && !i.isString(t.conversation_id) ? "conversation_id: string expected" : t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && !i.isInteger(t.conversation_short_id) && !(t.conversation_short_id && i.isInteger(t.conversation_short_id.low) && i.isInteger(t.conversation_short_id.high)) ? "conversation_short_id: integer|Long expected" : t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type) ? "conversation_type: integer expected" : t.server_message_id != null && t.hasOwnProperty("server_message_id") && !i.isInteger(t.server_message_id) && !(t.server_message_id && i.isInteger(t.server_message_id.low) && i.isInteger(t.server_message_id.high)) ? "server_message_id: integer|Long expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.RecallMessageRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.RecallMessageRequestBody;
						return t.conversation_id != null && (n.conversation_id = String(t.conversation_id)), t.conversation_short_id != null && (i.Long ? (n.conversation_short_id = i.Long.fromValue(t.conversation_short_id))
							.unsigned = !0 : typeof t.conversation_short_id == "string" ? n.conversation_short_id = parseInt(t.conversation_short_id, 10) : typeof t.conversation_short_id == "number" ? n.conversation_short_id = t.conversation_short_id : typeof t.conversation_short_id == "object" && (n.conversation_short_id = new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
								.toNumber(!0))), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), t.server_message_id != null && (i.Long ? (n.server_message_id = i.Long.fromValue(t.server_message_id))
							.unsigned = !0 : typeof t.server_message_id == "string" ? n.server_message_id = parseInt(t.server_message_id, 10) : typeof t.server_message_id == "number" ? n.server_message_id = t.server_message_id : typeof t.server_message_id == "object" && (n.server_message_id = new i.LongBits(t.server_message_id.low >>> 0, t.server_message_id.high >>> 0)
								.toNumber(!0))), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (r.conversation_id = "", i.Long) {
								let c = new i.Long(0, 0, !0);
								r.conversation_short_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.conversation_short_id = n.longs === String ? "0" : 0;
							if (r.conversation_type = 0, i.Long) {
								let c = new i.Long(0, 0, !0);
								r.server_message_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.server_message_id = n.longs === String ? "0" : 0
						}
						return t.conversation_id != null && t.hasOwnProperty("conversation_id") && (r.conversation_id = t.conversation_id), t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && (typeof t.conversation_short_id == "number" ? r.conversation_short_id = n.longs === String ? String(t.conversation_short_id) : t.conversation_short_id : r.conversation_short_id = n.longs === String ? i.Long.prototype.toString.call(t.conversation_short_id) : n.longs === Number ? new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
							.toNumber(!0) : t.conversation_short_id), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), t.server_message_id != null && t.hasOwnProperty("server_message_id") && (typeof t.server_message_id == "number" ? r.server_message_id = n.longs === String ? String(t.server_message_id) : t.server_message_id : r.server_message_id = n.longs === String ? i.Long.prototype.toString.call(t.server_message_id) : n.longs === Number ? new i.LongBits(t.server_message_id.low >>> 0, t.server_message_id.high >>> 0)
							.toNumber(!0) : t.server_message_id), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.RecallMessageRequestBody"
					}, e
				}(), _.GetStrangerMessagesRequestBody = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.cursor = 0, e.prototype.count = 0, e.prototype.show_total_unread = !1, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.cursor != null && Object.hasOwnProperty.call(t, "cursor") && n.uint32(8)
							.uint64(t.cursor), t.count != null && Object.hasOwnProperty.call(t, "count") && n.uint32(16)
							.uint64(t.count), t.show_total_unread != null && Object.hasOwnProperty.call(t, "show_total_unread") && n.uint32(24)
							.bool(t.show_total_unread), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.cursor = t.uint64();
										break
									}
								case 2:
									{
										c.count = t.uint64();
										break
									}
								case 3:
									{
										c.show_total_unread = t.bool();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.cursor != null && t.hasOwnProperty("cursor") && !i.isInteger(t.cursor) && !(t.cursor && i.isInteger(t.cursor.low) && i.isInteger(t.cursor.high)) ? "cursor: integer|Long expected" : t.count != null && t.hasOwnProperty("count") && !i.isInteger(t.count) && !(t.count && i.isInteger(t.count.low) && i.isInteger(t.count.high)) ? "count: integer|Long expected" : t.show_total_unread != null && t.hasOwnProperty("show_total_unread") && typeof t.show_total_unread != "boolean" ? "show_total_unread: boolean expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody;
						return t.cursor != null && (i.Long ? (n.cursor = i.Long.fromValue(t.cursor))
							.unsigned = !0 : typeof t.cursor == "string" ? n.cursor = parseInt(t.cursor, 10) : typeof t.cursor == "number" ? n.cursor = t.cursor : typeof t.cursor == "object" && (n.cursor = new i.LongBits(t.cursor.low >>> 0, t.cursor.high >>> 0)
								.toNumber(!0))), t.count != null && (i.Long ? (n.count = i.Long.fromValue(t.count))
							.unsigned = !0 : typeof t.count == "string" ? n.count = parseInt(t.count, 10) : typeof t.count == "number" ? n.count = t.count : typeof t.count == "object" && (n.count = new i.LongBits(t.count.low >>> 0, t.count.high >>> 0)
								.toNumber(!0))), t.show_total_unread != null && (n.show_total_unread = !!t.show_total_unread), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (i.Long) {
								let c = new i.Long(0, 0, !0);
								r.cursor = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.cursor = n.longs === String ? "0" : 0;
							if (i.Long) {
								let c = new i.Long(0, 0, !0);
								r.count = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.count = n.longs === String ? "0" : 0;
							r.show_total_unread = !1
						}
						return t.cursor != null && t.hasOwnProperty("cursor") && (typeof t.cursor == "number" ? r.cursor = n.longs === String ? String(t.cursor) : t.cursor : r.cursor = n.longs === String ? i.Long.prototype.toString.call(t.cursor) : n.longs === Number ? new i.LongBits(t.cursor.low >>> 0, t.cursor.high >>> 0)
							.toNumber(!0) : t.cursor), t.count != null && t.hasOwnProperty("count") && (typeof t.count == "number" ? r.count = n.longs === String ? String(t.count) : t.count : r.count = n.longs === String ? i.Long.prototype.toString.call(t.count) : n.longs === Number ? new i.LongBits(t.count.low >>> 0, t.count.high >>> 0)
							.toNumber(!0) : t.count), t.show_total_unread != null && t.hasOwnProperty("show_total_unread") && (r.show_total_unread = t.show_total_unread), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.GetStrangerMessagesRequestBody"
					}, e
				}(), _.ModifyMessagePropertyRequestBody = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.property_list = null, e.prototype.ticket = "", e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.property_list != null && Object.hasOwnProperty.call(t, "property_list") && a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody.encode(t.property_list, n.uint32(10)
								.fork())
							.ldelim(), t.ticket != null && Object.hasOwnProperty.call(t, "ticket") && n.uint32(18)
							.string(t.ticket), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.property_list = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody.decode(t, t.uint32());
										break
									}
								case 2:
									{
										c.ticket = t.string();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						if (typeof t != "object" || t === null) return "object expected";
						if (t.property_list != null && t.hasOwnProperty("property_list")) {
							let n = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody.verify(t.property_list);
							if (n) return "property_list." + n
						}
						return t.ticket != null && t.hasOwnProperty("ticket") && !i.isString(t.ticket) ? "ticket: string expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody;
						if (t.property_list != null) {
							if (typeof t.property_list != "object") throw TypeError(".pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.property_list: object expected");
							n.property_list = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody.fromObject(t.property_list)
						}
						return t.ticket != null && (n.ticket = String(t.ticket)), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						return n.defaults && (r.property_list = null, r.ticket = ""), t.property_list != null && t.hasOwnProperty("property_list") && (r.property_list = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody.toObject(t.property_list, n)), t.ticket != null && t.hasOwnProperty("ticket") && (r.ticket = t.ticket), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody"
					}, e.ModifyPropertyBody = function() {
						function o(t) {
							if (this.modify_property_content = [], t)
								for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
						}
						return o.prototype.conversation_id = "", o.prototype.conversation_type = 0, o.prototype.conversation_short_id = 0, o.prototype.server_message_id = 0, o.prototype.client_message_id = "", o.prototype.modify_property_content = i.emptyArray, o.create = function(n) {
							return new o(n)
						}, o.encode = function(n, r) {
							if (r || (r = x.create()), n.conversation_id != null && Object.hasOwnProperty.call(n, "conversation_id") && r.uint32(10)
								.string(n.conversation_id), n.conversation_type != null && Object.hasOwnProperty.call(n, "conversation_type") && r.uint32(16)
								.uint32(n.conversation_type), n.conversation_short_id != null && Object.hasOwnProperty.call(n, "conversation_short_id") && r.uint32(24)
								.uint64(n.conversation_short_id), n.server_message_id != null && Object.hasOwnProperty.call(n, "server_message_id") && r.uint32(32)
								.uint64(n.server_message_id), n.client_message_id != null && Object.hasOwnProperty.call(n, "client_message_id") && r.uint32(42)
								.string(n.client_message_id), n.modify_property_content != null && n.modify_property_content.length)
								for (let c = 0; c < n.modify_property_content.length; ++c) a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent.encode(n.modify_property_content[c], r.uint32(50)
										.fork())
									.ldelim();
							return r
						}, o.encodeDelimited = function(n, r) {
							return this.encode(n, r)
								.ldelim()
						}, o.decode = function(n, r) {
							n instanceof p || (n = p.create(n));
							let c = r === void 0 ? n.len : n.pos + r,
								d = new a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody;
							for (; n.pos < c;) {
								let k = n.uint32();
								switch (k >>> 3) {
									case 1:
										{
											d.conversation_id = n.string();
											break
										}
									case 2:
										{
											d.conversation_type = n.uint32();
											break
										}
									case 3:
										{
											d.conversation_short_id = n.uint64();
											break
										}
									case 4:
										{
											d.server_message_id = n.uint64();
											break
										}
									case 5:
										{
											d.client_message_id = n.string();
											break
										}
									case 6:
										{
											d.modify_property_content && d.modify_property_content.length || (d.modify_property_content = []),
											d.modify_property_content.push(a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent.decode(n, n.uint32()));
											break
										}
									default:
										n.skipType(k & 7);
										break
								}
							}
							return d
						}, o.decodeDelimited = function(n) {
							return n instanceof p || (n = new p(n)), this.decode(n, n.uint32())
						}, o.verify = function(n) {
							if (typeof n != "object" || n === null) return "object expected";
							if (n.conversation_id != null && n.hasOwnProperty("conversation_id") && !i.isString(n.conversation_id)) return "conversation_id: string expected";
							if (n.conversation_type != null && n.hasOwnProperty("conversation_type") && !i.isInteger(n.conversation_type)) return "conversation_type: integer expected";
							if (n.conversation_short_id != null && n.hasOwnProperty("conversation_short_id") && !i.isInteger(n.conversation_short_id) && !(n.conversation_short_id && i.isInteger(n.conversation_short_id.low) && i.isInteger(n.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
							if (n.server_message_id != null && n.hasOwnProperty("server_message_id") && !i.isInteger(n.server_message_id) && !(n.server_message_id && i.isInteger(n.server_message_id.low) && i.isInteger(n.server_message_id.high))) return "server_message_id: integer|Long expected";
							if (n.client_message_id != null && n.hasOwnProperty("client_message_id") && !i.isString(n.client_message_id)) return "client_message_id: string expected";
							if (n.modify_property_content != null && n.hasOwnProperty("modify_property_content")) {
								if (!Array.isArray(n.modify_property_content)) return "modify_property_content: array expected";
								for (let r = 0; r < n.modify_property_content.length; ++r) {
									let c = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent.verify(n.modify_property_content[r]);
									if (c) return "modify_property_content." + c
								}
							}
							return null
						}, o.fromObject = function(n) {
							if (n instanceof a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody) return n;
							let r = new a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody;
							if (n.conversation_id != null && (r.conversation_id = String(n.conversation_id)), n.conversation_type != null && (r.conversation_type = n.conversation_type >>> 0), n.conversation_short_id != null && (i.Long ? (r.conversation_short_id = i.Long.fromValue(n.conversation_short_id))
								.unsigned = !0 : typeof n.conversation_short_id == "string" ? r.conversation_short_id = parseInt(n.conversation_short_id, 10) : typeof n.conversation_short_id == "number" ? r.conversation_short_id = n.conversation_short_id : typeof n.conversation_short_id == "object" && (r.conversation_short_id = new i.LongBits(n.conversation_short_id.low >>> 0, n.conversation_short_id.high >>> 0)
									.toNumber(!0))), n.server_message_id != null && (i.Long ? (r.server_message_id = i.Long.fromValue(n.server_message_id))
								.unsigned = !0 : typeof n.server_message_id == "string" ? r.server_message_id = parseInt(n.server_message_id, 10) : typeof n.server_message_id == "number" ? r.server_message_id = n.server_message_id : typeof n.server_message_id == "object" && (r.server_message_id = new i.LongBits(n.server_message_id.low >>> 0, n.server_message_id.high >>> 0)
									.toNumber(!0))), n.client_message_id != null && (r.client_message_id = String(n.client_message_id)), n.modify_property_content) {
								if (!Array.isArray(n.modify_property_content)) throw TypeError(".pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody.modify_property_content: array expected");
								r.modify_property_content = [];
								for (let c = 0; c < n.modify_property_content.length; ++c) {
									if (typeof n.modify_property_content[c] != "object") throw TypeError(".pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody.modify_property_content: object expected");
									r.modify_property_content[c] = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent.fromObject(n.modify_property_content[c])
								}
							}
							return r
						}, o.toObject = function(n, r) {
							r || (r = {});
							let c = {};
							if ((r.arrays || r.defaults) && (c.modify_property_content = []), r.defaults) {
								if (c.conversation_id = "", c.conversation_type = 0, i.Long) {
									let d = new i.Long(0, 0, !0);
									c.conversation_short_id = r.longs === String ? d.toString() : r.longs === Number ? d.toNumber() : d
								} else c.conversation_short_id = r.longs === String ? "0" : 0;
								if (i.Long) {
									let d = new i.Long(0, 0, !0);
									c.server_message_id = r.longs === String ? d.toString() : r.longs === Number ? d.toNumber() : d
								} else c.server_message_id = r.longs === String ? "0" : 0;
								c.client_message_id = ""
							}
							if (n.conversation_id != null && n.hasOwnProperty("conversation_id") && (c.conversation_id = n.conversation_id), n.conversation_type != null && n.hasOwnProperty("conversation_type") && (c.conversation_type = n.conversation_type), n.conversation_short_id != null && n.hasOwnProperty("conversation_short_id") && (typeof n.conversation_short_id == "number" ? c.conversation_short_id = r.longs === String ? String(n.conversation_short_id) : n.conversation_short_id : c.conversation_short_id = r.longs === String ? i.Long.prototype.toString.call(n.conversation_short_id) : r.longs === Number ? new i.LongBits(n.conversation_short_id.low >>> 0, n.conversation_short_id.high >>> 0)
								.toNumber(!0) : n.conversation_short_id), n.server_message_id != null && n.hasOwnProperty("server_message_id") && (typeof n.server_message_id == "number" ? c.server_message_id = r.longs === String ? String(n.server_message_id) : n.server_message_id : c.server_message_id = r.longs === String ? i.Long.prototype.toString.call(n.server_message_id) : r.longs === Number ? new i.LongBits(n.server_message_id.low >>> 0, n.server_message_id.high >>> 0)
								.toNumber(!0) : n.server_message_id), n.client_message_id != null && n.hasOwnProperty("client_message_id") && (c.client_message_id = n.client_message_id), n.modify_property_content && n.modify_property_content.length) {
								c.modify_property_content = [];
								for (let d = 0; d < n.modify_property_content.length; ++d) c.modify_property_content[d] = a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent.toObject(n.modify_property_content[d], r)
							}
							return c
						}, o.prototype.toJSON = function() {
							return this.constructor.toObject(this, w.util.toJSONOptions)
						}, o.getTypeUrl = function(n) {
							return n === void 0 && (n = "type.googleapis.com"), n + "/pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyBody"
						}, o
					}(), e.ModifyPropertyContent = function() {
						function o(t) {
							if (t)
								for (let n = Object.keys(t), r = 0; r < n.length; ++r) t[n[r]] != null && (this[n[r]] = t[n[r]])
						}
						return o.prototype.operation = 0, o.prototype.key = "", o.prototype.value = "", o.prototype.idempotent_id = "", o.create = function(n) {
							return new o(n)
						}, o.encode = function(n, r) {
							return r || (r = x.create()), n.operation != null && Object.hasOwnProperty.call(n, "operation") && r.uint32(8)
								.uint32(n.operation), n.key != null && Object.hasOwnProperty.call(n, "key") && r.uint32(18)
								.string(n.key), n.value != null && Object.hasOwnProperty.call(n, "value") && r.uint32(26)
								.string(n.value), n.idempotent_id != null && Object.hasOwnProperty.call(n, "idempotent_id") && r.uint32(34)
								.string(n.idempotent_id), r
						}, o.encodeDelimited = function(n, r) {
							return this.encode(n, r)
								.ldelim()
						}, o.decode = function(n, r) {
							n instanceof p || (n = p.create(n));
							let c = r === void 0 ? n.len : n.pos + r,
								d = new a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent;
							for (; n.pos < c;) {
								let k = n.uint32();
								switch (k >>> 3) {
									case 1:
										{
											d.operation = n.uint32();
											break
										}
									case 2:
										{
											d.key = n.string();
											break
										}
									case 3:
										{
											d.value = n.string();
											break
										}
									case 4:
										{
											d.idempotent_id = n.string();
											break
										}
									default:
										n.skipType(k & 7);
										break
								}
							}
							return d
						}, o.decodeDelimited = function(n) {
							return n instanceof p || (n = new p(n)), this.decode(n, n.uint32())
						}, o.verify = function(n) {
							return typeof n != "object" || n === null ? "object expected" : n.operation != null && n.hasOwnProperty("operation") && !i.isInteger(n.operation) ? "operation: integer expected" : n.key != null && n.hasOwnProperty("key") && !i.isString(n.key) ? "key: string expected" : n.value != null && n.hasOwnProperty("value") && !i.isString(n.value) ? "value: string expected" : n.idempotent_id != null && n.hasOwnProperty("idempotent_id") && !i.isString(n.idempotent_id) ? "idempotent_id: string expected" : null
						}, o.fromObject = function(n) {
							if (n instanceof a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent) return n;
							let r = new a.pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent;
							return n.operation != null && (r.operation = n.operation >>> 0), n.key != null && (r.key = String(n.key)), n.value != null && (r.value = String(n.value)), n.idempotent_id != null && (r.idempotent_id = String(n.idempotent_id)), r
						}, o.toObject = function(n, r) {
							r || (r = {});
							let c = {};
							return r.defaults && (c.operation = 0, c.key = "", c.value = "", c.idempotent_id = ""), n.operation != null && n.hasOwnProperty("operation") && (c.operation = n.operation), n.key != null && n.hasOwnProperty("key") && (c.key = n.key), n.value != null && n.hasOwnProperty("value") && (c.value = n.value), n.idempotent_id != null && n.hasOwnProperty("idempotent_id") && (c.idempotent_id = n.idempotent_id), c
						}, o.prototype.toJSON = function() {
							return this.constructor.toObject(this, w.util.toJSONOptions)
						}, o.getTypeUrl = function(n) {
							return n === void 0 && (n = "type.googleapis.com"), n + "/pigeon.RequestBasic.Request.ModifyMessagePropertyRequestBody.ModifyPropertyContent"
						}, o
					}(), e
				}(), _.ConversationLeaveRequestBody = function() {
					function e(o) {
						if (o)
							for (let t = Object.keys(o), n = 0; n < t.length; ++n) o[t[n]] != null && (this[t[n]] = o[t[n]])
					}
					return e.prototype.conversation_id = "", e.prototype.conversation_short_id = 0, e.prototype.conversation_type = 0, e.create = function(t) {
						return new e(t)
					}, e.encode = function(t, n) {
						return n || (n = x.create()), t.conversation_id != null && Object.hasOwnProperty.call(t, "conversation_id") && n.uint32(10)
							.string(t.conversation_id), t.conversation_short_id != null && Object.hasOwnProperty.call(t, "conversation_short_id") && n.uint32(16)
							.uint64(t.conversation_short_id), t.conversation_type != null && Object.hasOwnProperty.call(t, "conversation_type") && n.uint32(24)
							.uint32(t.conversation_type), n
					}, e.encodeDelimited = function(t, n) {
						return this.encode(t, n)
							.ldelim()
					}, e.decode = function(t, n) {
						t instanceof p || (t = p.create(t));
						let r = n === void 0 ? t.len : t.pos + n,
							c = new a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody;
						for (; t.pos < r;) {
							let d = t.uint32();
							switch (d >>> 3) {
								case 1:
									{
										c.conversation_id = t.string();
										break
									}
								case 2:
									{
										c.conversation_short_id = t.uint64();
										break
									}
								case 3:
									{
										c.conversation_type = t.uint32();
										break
									}
								default:
									t.skipType(d & 7);
									break
							}
						}
						return c
					}, e.decodeDelimited = function(t) {
						return t instanceof p || (t = new p(t)), this.decode(t, t.uint32())
					}, e.verify = function(t) {
						return typeof t != "object" || t === null ? "object expected" : t.conversation_id != null && t.hasOwnProperty("conversation_id") && !i.isString(t.conversation_id) ? "conversation_id: string expected" : t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && !i.isInteger(t.conversation_short_id) && !(t.conversation_short_id && i.isInteger(t.conversation_short_id.low) && i.isInteger(t.conversation_short_id.high)) ? "conversation_short_id: integer|Long expected" : t.conversation_type != null && t.hasOwnProperty("conversation_type") && !i.isInteger(t.conversation_type) ? "conversation_type: integer expected" : null
					}, e.fromObject = function(t) {
						if (t instanceof a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody) return t;
						let n = new a.pigeon.RequestBasic.Request.ConversationLeaveRequestBody;
						return t.conversation_id != null && (n.conversation_id = String(t.conversation_id)), t.conversation_short_id != null && (i.Long ? (n.conversation_short_id = i.Long.fromValue(t.conversation_short_id))
							.unsigned = !0 : typeof t.conversation_short_id == "string" ? n.conversation_short_id = parseInt(t.conversation_short_id, 10) : typeof t.conversation_short_id == "number" ? n.conversation_short_id = t.conversation_short_id : typeof t.conversation_short_id == "object" && (n.conversation_short_id = new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
								.toNumber(!0))), t.conversation_type != null && (n.conversation_type = t.conversation_type >>> 0), n
					}, e.toObject = function(t, n) {
						n || (n = {});
						let r = {};
						if (n.defaults) {
							if (r.conversation_id = "", i.Long) {
								let c = new i.Long(0, 0, !0);
								r.conversation_short_id = n.longs === String ? c.toString() : n.longs === Number ? c.toNumber() : c
							} else r.conversation_short_id = n.longs === String ? "0" : 0;
							r.conversation_type = 0
						}
						return t.conversation_id != null && t.hasOwnProperty("conversation_id") && (r.conversation_id = t.conversation_id), t.conversation_short_id != null && t.hasOwnProperty("conversation_short_id") && (typeof t.conversation_short_id == "number" ? r.conversation_short_id = n.longs === String ? String(t.conversation_short_id) : t.conversation_short_id : r.conversation_short_id = n.longs === String ? i.Long.prototype.toString.call(t.conversation_short_id) : n.longs === Number ? new i.LongBits(t.conversation_short_id.low >>> 0, t.conversation_short_id.high >>> 0)
							.toNumber(!0) : t.conversation_short_id), t.conversation_type != null && t.hasOwnProperty("conversation_type") && (r.conversation_type = t.conversation_type), r
					}, e.prototype.toJSON = function() {
						return this.constructor.toObject(this, w.util.toJSONOptions)
					}, e.getTypeUrl = function(t) {
						return t === void 0 && (t = "type.googleapis.com"), t + "/pigeon.RequestBasic.Request.ConversationLeaveRequestBody"
					}, e
				}(), _
			}(), l
		}(), f.ResponseBasic = function() {
			function l(_) {
				if (this.headers = [], _)
					for (let s = Object.keys(_), e = 0; e < s.length; ++e) _[s[e]] != null && (this[s[e]] = _[s[e]])
			}
			l.prototype.seqid = 0, l.prototype.logid = 0, l.prototype.service = 0, l.prototype.method = 0, l.prototype.headers = i.emptyArray, l.prototype.payload_encoding = null, l.prototype.payload_type = "", l.prototype.payload = i.newBuffer([]), l.prototype.logIDNew = "";
			let u;
			return Object.defineProperty(l.prototype, "_payload_encoding", {
				get: i.oneOfGetter(u = ["payload_encoding"]),
				set: i.oneOfSetter(u)
			}), l.create = function(s) {
				return new l(s)
			}, l.encode = function(s, e) {
				if (e || (e = x.create()), e.uint32(8)
					.uint32(s.seqid), e.uint32(16)
					.uint64(s.logid), e.uint32(24)
					.uint32(s.service), e.uint32(32)
					.uint32(s.method), s.headers != null && s.headers.length)
					for (let o = 0; o < s.headers.length; ++o) a.pigeon.StringKeyValue.encode(s.headers[o], e.uint32(42)
							.fork())
						.ldelim();
				return s.payload_encoding != null && Object.hasOwnProperty.call(s, "payload_encoding") && e.uint32(50)
					.string(s.payload_encoding), e.uint32(58)
					.string(s.payload_type), e.uint32(66)
					.bytes(s.payload), s.logIDNew != null && Object.hasOwnProperty.call(s, "logIDNew") && e.uint32(74)
					.string(s.logIDNew), e
			}, l.encodeDelimited = function(s, e) {
				return this.encode(s, e)
					.ldelim()
			}, l.decode = function(s, e) {
				s instanceof p || (s = p.create(s));
				let o = e === void 0 ? s.len : s.pos + e,
					t = new a.pigeon.ResponseBasic;
				for (; s.pos < o;) {
					let n = s.uint32();
					switch (n >>> 3) {
						case 1:
							{
								t.seqid = s.uint32();
								break
							}
						case 2:
							{
								t.logid = s.uint64();
								break
							}
						case 3:
							{
								t.service = s.uint32();
								break
							}
						case 4:
							{
								t.method = s.uint32();
								break
							}
						case 5:
							{
								t.headers && t.headers.length || (t.headers = []),
								t.headers.push(a.pigeon.StringKeyValue.decode(s, s.uint32()));
								break
							}
						case 6:
							{
								t.payload_encoding = s.string();
								break
							}
						case 7:
							{
								t.payload_type = s.string();
								break
							}
						case 8:
							{
								t.payload = s.bytes();
								break
							}
						case 9:
							{
								t.logIDNew = s.string();
								break
							}
						default:
							s.skipType(n & 7);
							break
					}
				}
				if (!t.hasOwnProperty("seqid")) throw i.ProtocolError("missing required 'seqid'", {
					instance: t
				});
				if (!t.hasOwnProperty("logid")) throw i.ProtocolError("missing required 'logid'", {
					instance: t
				});
				if (!t.hasOwnProperty("service")) throw i.ProtocolError("missing required 'service'", {
					instance: t
				});
				if (!t.hasOwnProperty("method")) throw i.ProtocolError("missing required 'method'", {
					instance: t
				});
				if (!t.hasOwnProperty("payload_type")) throw i.ProtocolError("missing required 'payload_type'", {
					instance: t
				});
				if (!t.hasOwnProperty("payload")) throw i.ProtocolError("missing required 'payload'", {
					instance: t
				});
				return t
			}, l.decodeDelimited = function(s) {
				return s instanceof p || (s = new p(s)), this.decode(s, s.uint32())
			}, l.verify = function(s) {
				if (typeof s != "object" || s === null) return "object expected";
				if (!i.isInteger(s.seqid)) return "seqid: integer expected";
				if (!i.isInteger(s.logid) && !(s.logid && i.isInteger(s.logid.low) && i.isInteger(s.logid.high))) return "logid: integer|Long expected";
				if (!i.isInteger(s.service)) return "service: integer expected";
				if (!i.isInteger(s.method)) return "method: integer expected";
				if (s.headers != null && s.hasOwnProperty("headers")) {
					if (!Array.isArray(s.headers)) return "headers: array expected";
					for (let e = 0; e < s.headers.length; ++e) {
						let o = a.pigeon.StringKeyValue.verify(s.headers[e]);
						if (o) return "headers." + o
					}
				}
				return s.payload_encoding != null && s.hasOwnProperty("payload_encoding") && !i.isString(s.payload_encoding) ? "payload_encoding: string expected" : i.isString(s.payload_type) ? s.payload && typeof s.payload.length == "number" || i.isString(s.payload) ? s.logIDNew != null && s.hasOwnProperty("logIDNew") && !i.isString(s.logIDNew) ? "logIDNew: string expected" : null : "payload: buffer expected" : "payload_type: string expected"
			}, l.fromObject = function(s) {
				if (s instanceof a.pigeon.ResponseBasic) return s;
				let e = new a.pigeon.ResponseBasic;
				if (s.seqid != null && (e.seqid = s.seqid >>> 0), s.logid != null && (i.Long ? (e.logid = i.Long.fromValue(s.logid))
					.unsigned = !0 : typeof s.logid == "string" ? e.logid = parseInt(s.logid, 10) : typeof s.logid == "number" ? e.logid = s.logid : typeof s.logid == "object" && (e.logid = new i.LongBits(s.logid.low >>> 0, s.logid.high >>> 0)
						.toNumber(!0))), s.service != null && (e.service = s.service >>> 0), s.method != null && (e.method = s.method >>> 0), s.headers) {
					if (!Array.isArray(s.headers)) throw TypeError(".pigeon.ResponseBasic.headers: array expected");
					e.headers = [];
					for (let o = 0; o < s.headers.length; ++o) {
						if (typeof s.headers[o] != "object") throw TypeError(".pigeon.ResponseBasic.headers: object expected");
						e.headers[o] = a.pigeon.StringKeyValue.fromObject(s.headers[o])
					}
				}
				return s.payload_encoding != null && (e.payload_encoding = String(s.payload_encoding)), s.payload_type != null && (e.payload_type = String(s.payload_type)), s.payload != null && (typeof s.payload == "string" ? i.base64.decode(s.payload, e.payload = i.newBuffer(i.base64.length(s.payload)), 0) : s.payload.length >= 0 && (e.payload = s.payload)), s.logIDNew != null && (e.logIDNew = String(s.logIDNew)), e
			}, l.toObject = function(s, e) {
				e || (e = {});
				let o = {};
				if ((e.arrays || e.defaults) && (o.headers = []), e.defaults) {
					if (o.seqid = 0, i.Long) {
						let t = new i.Long(0, 0, !0);
						o.logid = e.longs === String ? t.toString() : e.longs === Number ? t.toNumber() : t
					} else o.logid = e.longs === String ? "0" : 0;
					o.service = 0, o.method = 0, o.payload_type = "", e.bytes === String ? o.payload = "" : (o.payload = [], e.bytes !== Array && (o.payload = i.newBuffer(o.payload))), o.logIDNew = ""
				}
				if (s.seqid != null && s.hasOwnProperty("seqid") && (o.seqid = s.seqid), s.logid != null && s.hasOwnProperty("logid") && (typeof s.logid == "number" ? o.logid = e.longs === String ? String(s.logid) : s.logid : o.logid = e.longs === String ? i.Long.prototype.toString.call(s.logid) : e.longs === Number ? new i.LongBits(s.logid.low >>> 0, s.logid.high >>> 0)
					.toNumber(!0) : s.logid), s.service != null && s.hasOwnProperty("service") && (o.service = s.service), s.method != null && s.hasOwnProperty("method") && (o.method = s.method), s.headers && s.headers.length) {
					o.headers = [];
					for (let t = 0; t < s.headers.length; ++t) o.headers[t] = a.pigeon.StringKeyValue.toObject(s.headers[t], e)
				}
				return s.payload_encoding != null && s.hasOwnProperty("payload_encoding") && (o.payload_encoding = s.payload_encoding, e.oneofs && (o._payload_encoding = "payload_encoding")), s.payload_type != null && s.hasOwnProperty("payload_type") && (o.payload_type = s.payload_type), s.payload != null && s.hasOwnProperty("payload") && (o.payload = e.bytes === String ? i.base64.encode(s.payload, 0, s.payload.length) : e.bytes === Array ? Array.prototype.slice.call(s.payload) : s.payload), s.logIDNew != null && s.hasOwnProperty("logIDNew") && (o.logIDNew = s.logIDNew), o
			}, l.prototype.toJSON = function() {
				return this.constructor.toObject(this, w.util.toJSONOptions)
			}, l.getTypeUrl = function(s) {
				return s === void 0 && (s = "type.googleapis.com"), s + "/pigeon.ResponseBasic"
			}, l.Response = function() {
				function _(s) {
					if (this.headers = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.cmd = 0, _.prototype.sequence_id = 0, _.prototype.status_code = 0, _.prototype.error_desc = "", _.prototype.inbox_type = 0, _.prototype.body = null, _.prototype.log_id = "", _.prototype.headers = i.emptyArray, _.prototype.start_time_stamp = 0, _.prototype.request_arrived_time = 0, _.prototype.server_execution_end_time = 0, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), o.uint32(8)
						.uint32(e.cmd), o.uint32(16)
						.uint32(e.sequence_id), o.uint32(24)
						.uint32(e.status_code), o.uint32(34)
						.string(e.error_desc), o.uint32(40)
						.uint32(e.inbox_type), a.pigeon.ResponseBasic.ResponseBody.encode(e.body, o.uint32(50)
							.fork())
						.ldelim(), o.uint32(58)
						.string(e.log_id), e.headers != null && e.headers.length)
						for (let t = 0; t < e.headers.length; ++t) a.pigeon.StringKeyValue.encode(e.headers[t], o.uint32(66)
								.fork())
							.ldelim();
					return e.start_time_stamp != null && Object.hasOwnProperty.call(e, "start_time_stamp") && o.uint32(72)
						.uint64(e.start_time_stamp), e.request_arrived_time != null && Object.hasOwnProperty.call(e, "request_arrived_time") && o.uint32(80)
						.uint64(e.request_arrived_time), e.server_execution_end_time != null && Object.hasOwnProperty.call(e, "server_execution_end_time") && o.uint32(88)
						.uint64(e.server_execution_end_time), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.Response;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.cmd = e.uint32();
									break
								}
							case 2:
								{
									n.sequence_id = e.uint32();
									break
								}
							case 3:
								{
									n.status_code = e.uint32();
									break
								}
							case 4:
								{
									n.error_desc = e.string();
									break
								}
							case 5:
								{
									n.inbox_type = e.uint32();
									break
								}
							case 6:
								{
									n.body = a.pigeon.ResponseBasic.ResponseBody.decode(e, e.uint32());
									break
								}
							case 7:
								{
									n.log_id = e.string();
									break
								}
							case 8:
								{
									n.headers && n.headers.length || (n.headers = []),
									n.headers.push(a.pigeon.StringKeyValue.decode(e, e.uint32()));
									break
								}
							case 9:
								{
									n.start_time_stamp = e.uint64();
									break
								}
							case 10:
								{
									n.request_arrived_time = e.uint64();
									break
								}
							case 11:
								{
									n.server_execution_end_time = e.uint64();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					if (!n.hasOwnProperty("cmd")) throw i.ProtocolError("missing required 'cmd'", {
						instance: n
					});
					if (!n.hasOwnProperty("sequence_id")) throw i.ProtocolError("missing required 'sequence_id'", {
						instance: n
					});
					if (!n.hasOwnProperty("status_code")) throw i.ProtocolError("missing required 'status_code'", {
						instance: n
					});
					if (!n.hasOwnProperty("error_desc")) throw i.ProtocolError("missing required 'error_desc'", {
						instance: n
					});
					if (!n.hasOwnProperty("inbox_type")) throw i.ProtocolError("missing required 'inbox_type'", {
						instance: n
					});
					if (!n.hasOwnProperty("body")) throw i.ProtocolError("missing required 'body'", {
						instance: n
					});
					if (!n.hasOwnProperty("log_id")) throw i.ProtocolError("missing required 'log_id'", {
						instance: n
					});
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (!i.isInteger(e.cmd)) return "cmd: integer expected";
					if (!i.isInteger(e.sequence_id)) return "sequence_id: integer expected";
					if (!i.isInteger(e.status_code)) return "status_code: integer expected";
					if (!i.isString(e.error_desc)) return "error_desc: string expected";
					if (!i.isInteger(e.inbox_type)) return "inbox_type: integer expected"; {
						let o = a.pigeon.ResponseBasic.ResponseBody.verify(e.body);
						if (o) return "body." + o
					}
					if (!i.isString(e.log_id)) return "log_id: string expected";
					if (e.headers != null && e.hasOwnProperty("headers")) {
						if (!Array.isArray(e.headers)) return "headers: array expected";
						for (let o = 0; o < e.headers.length; ++o) {
							let t = a.pigeon.StringKeyValue.verify(e.headers[o]);
							if (t) return "headers." + t
						}
					}
					return e.start_time_stamp != null && e.hasOwnProperty("start_time_stamp") && !i.isInteger(e.start_time_stamp) && !(e.start_time_stamp && i.isInteger(e.start_time_stamp.low) && i.isInteger(e.start_time_stamp.high)) ? "start_time_stamp: integer|Long expected" : e.request_arrived_time != null && e.hasOwnProperty("request_arrived_time") && !i.isInteger(e.request_arrived_time) && !(e.request_arrived_time && i.isInteger(e.request_arrived_time.low) && i.isInteger(e.request_arrived_time.high)) ? "request_arrived_time: integer|Long expected" : e.server_execution_end_time != null && e.hasOwnProperty("server_execution_end_time") && !i.isInteger(e.server_execution_end_time) && !(e.server_execution_end_time && i.isInteger(e.server_execution_end_time.low) && i.isInteger(e.server_execution_end_time.high)) ? "server_execution_end_time: integer|Long expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.Response) return e;
					let o = new a.pigeon.ResponseBasic.Response;
					if (e.cmd != null && (o.cmd = e.cmd >>> 0), e.sequence_id != null && (o.sequence_id = e.sequence_id >>> 0), e.status_code != null && (o.status_code = e.status_code >>> 0), e.error_desc != null && (o.error_desc = String(e.error_desc)), e.inbox_type != null && (o.inbox_type = e.inbox_type >>> 0), e.body != null) {
						if (typeof e.body != "object") throw TypeError(".pigeon.ResponseBasic.Response.body: object expected");
						o.body = a.pigeon.ResponseBasic.ResponseBody.fromObject(e.body)
					}
					if (e.log_id != null && (o.log_id = String(e.log_id)), e.headers) {
						if (!Array.isArray(e.headers)) throw TypeError(".pigeon.ResponseBasic.Response.headers: array expected");
						o.headers = [];
						for (let t = 0; t < e.headers.length; ++t) {
							if (typeof e.headers[t] != "object") throw TypeError(".pigeon.ResponseBasic.Response.headers: object expected");
							o.headers[t] = a.pigeon.StringKeyValue.fromObject(e.headers[t])
						}
					}
					return e.start_time_stamp != null && (i.Long ? (o.start_time_stamp = i.Long.fromValue(e.start_time_stamp))
						.unsigned = !0 : typeof e.start_time_stamp == "string" ? o.start_time_stamp = parseInt(e.start_time_stamp, 10) : typeof e.start_time_stamp == "number" ? o.start_time_stamp = e.start_time_stamp : typeof e.start_time_stamp == "object" && (o.start_time_stamp = new i.LongBits(e.start_time_stamp.low >>> 0, e.start_time_stamp.high >>> 0)
							.toNumber(!0))), e.request_arrived_time != null && (i.Long ? (o.request_arrived_time = i.Long.fromValue(e.request_arrived_time))
						.unsigned = !0 : typeof e.request_arrived_time == "string" ? o.request_arrived_time = parseInt(e.request_arrived_time, 10) : typeof e.request_arrived_time == "number" ? o.request_arrived_time = e.request_arrived_time : typeof e.request_arrived_time == "object" && (o.request_arrived_time = new i.LongBits(e.request_arrived_time.low >>> 0, e.request_arrived_time.high >>> 0)
							.toNumber(!0))), e.server_execution_end_time != null && (i.Long ? (o.server_execution_end_time = i.Long.fromValue(e.server_execution_end_time))
						.unsigned = !0 : typeof e.server_execution_end_time == "string" ? o.server_execution_end_time = parseInt(e.server_execution_end_time, 10) : typeof e.server_execution_end_time == "number" ? o.server_execution_end_time = e.server_execution_end_time : typeof e.server_execution_end_time == "object" && (o.server_execution_end_time = new i.LongBits(e.server_execution_end_time.low >>> 0, e.server_execution_end_time.high >>> 0)
							.toNumber(!0))), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.headers = []), o.defaults) {
						if (t.cmd = 0, t.sequence_id = 0, t.status_code = 0, t.error_desc = "", t.inbox_type = 0, t.body = null, t.log_id = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.start_time_stamp = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.start_time_stamp = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.request_arrived_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.request_arrived_time = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.server_execution_end_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.server_execution_end_time = o.longs === String ? "0" : 0
					}
					if (e.cmd != null && e.hasOwnProperty("cmd") && (t.cmd = e.cmd), e.sequence_id != null && e.hasOwnProperty("sequence_id") && (t.sequence_id = e.sequence_id), e.status_code != null && e.hasOwnProperty("status_code") && (t.status_code = e.status_code), e.error_desc != null && e.hasOwnProperty("error_desc") && (t.error_desc = e.error_desc), e.inbox_type != null && e.hasOwnProperty("inbox_type") && (t.inbox_type = e.inbox_type), e.body != null && e.hasOwnProperty("body") && (t.body = a.pigeon.ResponseBasic.ResponseBody.toObject(e.body, o)), e.log_id != null && e.hasOwnProperty("log_id") && (t.log_id = e.log_id), e.headers && e.headers.length) {
						t.headers = [];
						for (let n = 0; n < e.headers.length; ++n) t.headers[n] = a.pigeon.StringKeyValue.toObject(e.headers[n], o)
					}
					return e.start_time_stamp != null && e.hasOwnProperty("start_time_stamp") && (typeof e.start_time_stamp == "number" ? t.start_time_stamp = o.longs === String ? String(e.start_time_stamp) : e.start_time_stamp : t.start_time_stamp = o.longs === String ? i.Long.prototype.toString.call(e.start_time_stamp) : o.longs === Number ? new i.LongBits(e.start_time_stamp.low >>> 0, e.start_time_stamp.high >>> 0)
						.toNumber(!0) : e.start_time_stamp), e.request_arrived_time != null && e.hasOwnProperty("request_arrived_time") && (typeof e.request_arrived_time == "number" ? t.request_arrived_time = o.longs === String ? String(e.request_arrived_time) : e.request_arrived_time : t.request_arrived_time = o.longs === String ? i.Long.prototype.toString.call(e.request_arrived_time) : o.longs === Number ? new i.LongBits(e.request_arrived_time.low >>> 0, e.request_arrived_time.high >>> 0)
						.toNumber(!0) : e.request_arrived_time), e.server_execution_end_time != null && e.hasOwnProperty("server_execution_end_time") && (typeof e.server_execution_end_time == "number" ? t.server_execution_end_time = o.longs === String ? String(e.server_execution_end_time) : e.server_execution_end_time : t.server_execution_end_time = o.longs === String ? i.Long.prototype.toString.call(e.server_execution_end_time) : o.longs === Number ? new i.LongBits(e.server_execution_end_time.low >>> 0, e.server_execution_end_time.high >>> 0)
						.toNumber(!0) : e.server_execution_end_time), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.Response"
				}, _
			}(), l.ResponseBody = function() {
				function _(s) {
					if (s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.send_message_body = null, _.prototype.messages_per_user_body = null, _.prototype.messages_per_user_init_v2_body = i.newBuffer([]), _.prototype.get_message_by_id_body = i.newBuffer([]), _.prototype.messages_in_conversation_body = i.newBuffer([]), _.prototype.get_messages_checkinfo_in_conversation_body = i.newBuffer([]), _.prototype.new_message_notify = null, _.prototype.new_p2p_message_notify = i.newBuffer([]), _.prototype.get_conversations_checkinfo_body = i.newBuffer([]), _.prototype.create_conversation_v2_body = null, _.prototype.get_conversation_info_list_v2_body = null, _.prototype.get_conversation_info_list_by_favorite_v2_body = i.newBuffer([]), _.prototype.get_conversation_info_list_by_top_v2_body = i.newBuffer([]), _.prototype.conversation_participants_body = i.newBuffer([]), _.prototype.conversation_add_participants_body = null, _.prototype.conversation_remove_participants_body = null, _.prototype.mget_conversation_participants_body = i.newBuffer([]), _.prototype.update_conversation_participant_body = i.newBuffer([]), _.prototype.recall_message_body = i.newBuffer([]), _.prototype.modify_message_property_body = null, _.prototype.audio_recognition_body = i.newBuffer([]), _.prototype.get_conversation_core_info_body = i.newBuffer([]), _.prototype.set_conversation_core_info_body = i.newBuffer([]), _.prototype.upsert_conversation_core_ext_info_body = i.newBuffer([]), _.prototype.set_conversation_setting_info_body = i.newBuffer([]), _.prototype.upsert_conversation_setting_ext_info_body = i.newBuffer([]), _.prototype.get_stranger_conversation_body = null, _.prototype.get_stranger_messages_body = i.newBuffer([]), _.prototype.participants_read_index_body = i.newBuffer([]), _.prototype.participants_min_index_body = i.newBuffer([]), _.prototype.get_upload_token_body = i.newBuffer([]), _.prototype.get_media_urls_body = i.newBuffer([]), _.prototype.batch_get_conversation_participants_readindex = i.newBuffer([]), _.prototype.get_ticket_body = i.newBuffer([]), _.prototype.get_conversation_list_body = null, _.prototype.broadcast_send_message_body = i.newBuffer([]), _.prototype.broadcast_recv_message_body = i.newBuffer([]), _.prototype.broadcast_user_counter_body = i.newBuffer([]), _.prototype.create_voip_body = i.newBuffer([]), _.prototype.call_voip_body = i.newBuffer([]), _.prototype.update_voip_body = i.newBuffer([]), _.prototype.profile_get_info = i.newBuffer([]), _.prototype.get_configs_body = i.newBuffer([]), _.prototype.unread_count_report_body = i.newBuffer([]), _.prototype.block_members_body = null, _.prototype.get_unread_count_body = i.newBuffer([]), _.prototype.send_message_p2p_body = i.newBuffer([]), _.prototype.get_blocklist_body = i.newBuffer([]), _.prototype.set_blocklist_body = i.newBuffer([]), _.prototype.check_in_blocklist_body = i.newBuffer([]), _.prototype.mark_message_body = i.newBuffer([]), _.prototype.pull_mark_message_body = i.newBuffer([]), _.prototype.message_by_init = i.newBuffer([]), _.prototype.mark_msg_unread_count_report = i.newBuffer([]), _.prototype.mark_msg_get_unread_count = i.newBuffer([]), _.prototype.batch_unmark_message = i.newBuffer([]), _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					return o || (o = x.create()), e.send_message_body != null && Object.hasOwnProperty.call(e, "send_message_body") && a.pigeon.ResponseBasic.SendMessageResponseBody.encode(e.send_message_body, o.uint32(802)
							.fork())
						.ldelim(), e.messages_per_user_body != null && Object.hasOwnProperty.call(e, "messages_per_user_body") && a.pigeon.ResponseBasic.MessagesPerUserResponseBody.encode(e.messages_per_user_body, o.uint32(1602)
							.fork())
						.ldelim(), e.messages_per_user_init_v2_body != null && Object.hasOwnProperty.call(e, "messages_per_user_init_v2_body") && o.uint32(1626)
						.bytes(e.messages_per_user_init_v2_body), e.get_message_by_id_body != null && Object.hasOwnProperty.call(e, "get_message_by_id_body") && o.uint32(1690)
						.bytes(e.get_message_by_id_body), e.messages_in_conversation_body != null && Object.hasOwnProperty.call(e, "messages_in_conversation_body") && o.uint32(2410)
						.bytes(e.messages_in_conversation_body), e.get_messages_checkinfo_in_conversation_body != null && Object.hasOwnProperty.call(e, "get_messages_checkinfo_in_conversation_body") && o.uint32(2418)
						.bytes(e.get_messages_checkinfo_in_conversation_body), e.new_message_notify != null && Object.hasOwnProperty.call(e, "new_message_notify") && a.pigeon.ResponseBasic.NewMessageNotify.encode(e.new_message_notify, o.uint32(4002)
							.fork())
						.ldelim(), e.new_p2p_message_notify != null && Object.hasOwnProperty.call(e, "new_p2p_message_notify") && o.uint32(4034)
						.bytes(e.new_p2p_message_notify), e.conversation_participants_body != null && Object.hasOwnProperty.call(e, "conversation_participants_body") && o.uint32(4842)
						.bytes(e.conversation_participants_body), e.create_conversation_v2_body != null && Object.hasOwnProperty.call(e, "create_conversation_v2_body") && a.pigeon.ResponseBasic.CreateConversationV2ResponseBody.encode(e.create_conversation_v2_body, o.uint32(4874)
							.fork())
						.ldelim(), e.get_conversation_info_list_v2_body != null && Object.hasOwnProperty.call(e, "get_conversation_info_list_v2_body") && a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody.encode(e.get_conversation_info_list_v2_body, o.uint32(4882)
							.fork())
						.ldelim(), e.get_conversation_info_list_by_favorite_v2_body != null && Object.hasOwnProperty.call(e, "get_conversation_info_list_by_favorite_v2_body") && o.uint32(4890)
						.bytes(e.get_conversation_info_list_by_favorite_v2_body), e.get_conversation_info_list_by_top_v2_body != null && Object.hasOwnProperty.call(e, "get_conversation_info_list_by_top_v2_body") && o.uint32(4898)
						.bytes(e.get_conversation_info_list_by_top_v2_body), e.get_conversations_checkinfo_body != null && Object.hasOwnProperty.call(e, "get_conversations_checkinfo_body") && o.uint32(4922)
						.bytes(e.get_conversations_checkinfo_body), e.conversation_add_participants_body != null && Object.hasOwnProperty.call(e, "conversation_add_participants_body") && a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.encode(e.conversation_add_participants_body, o.uint32(5202)
							.fork())
						.ldelim(), e.conversation_remove_participants_body != null && Object.hasOwnProperty.call(e, "conversation_remove_participants_body") && a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.encode(e.conversation_remove_participants_body, o.uint32(5210)
							.fork())
						.ldelim(), e.mget_conversation_participants_body != null && Object.hasOwnProperty.call(e, "mget_conversation_participants_body") && o.uint32(5234)
						.bytes(e.mget_conversation_participants_body), e.update_conversation_participant_body != null && Object.hasOwnProperty.call(e, "update_conversation_participant_body") && o.uint32(5242)
						.bytes(e.update_conversation_participant_body), e.recall_message_body != null && Object.hasOwnProperty.call(e, "recall_message_body") && o.uint32(5618)
						.bytes(e.recall_message_body), e.modify_message_property_body != null && Object.hasOwnProperty.call(e, "modify_message_property_body") && a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody.encode(e.modify_message_property_body, o.uint32(5642)
							.fork())
						.ldelim(), e.get_conversation_core_info_body != null && Object.hasOwnProperty.call(e, "get_conversation_core_info_body") && o.uint32(7210)
						.bytes(e.get_conversation_core_info_body), e.set_conversation_core_info_body != null && Object.hasOwnProperty.call(e, "set_conversation_core_info_body") && o.uint32(7218)
						.bytes(e.set_conversation_core_info_body), e.upsert_conversation_core_ext_info_body != null && Object.hasOwnProperty.call(e, "upsert_conversation_core_ext_info_body") && o.uint32(7234)
						.bytes(e.upsert_conversation_core_ext_info_body), e.set_conversation_setting_info_body != null && Object.hasOwnProperty.call(e, "set_conversation_setting_info_body") && o.uint32(7370)
						.bytes(e.set_conversation_setting_info_body), e.upsert_conversation_setting_ext_info_body != null && Object.hasOwnProperty.call(e, "upsert_conversation_setting_ext_info_body") && o.uint32(7378)
						.bytes(e.upsert_conversation_setting_ext_info_body), e.get_stranger_conversation_body != null && Object.hasOwnProperty.call(e, "get_stranger_conversation_body") && a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody.encode(e.get_stranger_conversation_body, o.uint32(8002)
							.fork())
						.ldelim(), e.get_stranger_messages_body != null && Object.hasOwnProperty.call(e, "get_stranger_messages_body") && o.uint32(8010)
						.bytes(e.get_stranger_messages_body), e.participants_read_index_body != null && Object.hasOwnProperty.call(e, "participants_read_index_body") && o.uint32(16002)
						.bytes(e.participants_read_index_body), e.participants_min_index_body != null && Object.hasOwnProperty.call(e, "participants_min_index_body") && o.uint32(16010)
						.bytes(e.participants_min_index_body), e.get_upload_token_body != null && Object.hasOwnProperty.call(e, "get_upload_token_body") && o.uint32(16026)
						.bytes(e.get_upload_token_body), e.get_media_urls_body != null && Object.hasOwnProperty.call(e, "get_media_urls_body") && o.uint32(16034)
						.bytes(e.get_media_urls_body), e.get_ticket_body != null && Object.hasOwnProperty.call(e, "get_ticket_body") && o.uint32(16042)
						.bytes(e.get_ticket_body), e.get_conversation_list_body != null && Object.hasOwnProperty.call(e, "get_conversation_list_body") && a.pigeon.ResponseBasic.GetUserConversationListResponseBody.encode(e.get_conversation_list_body, o.uint32(16050)
							.fork())
						.ldelim(), e.broadcast_send_message_body != null && Object.hasOwnProperty.call(e, "broadcast_send_message_body") && o.uint32(16058)
						.bytes(e.broadcast_send_message_body), e.broadcast_recv_message_body != null && Object.hasOwnProperty.call(e, "broadcast_recv_message_body") && o.uint32(16066)
						.bytes(e.broadcast_recv_message_body), e.broadcast_user_counter_body != null && Object.hasOwnProperty.call(e, "broadcast_user_counter_body") && o.uint32(16074)
						.bytes(e.broadcast_user_counter_body), e.create_voip_body != null && Object.hasOwnProperty.call(e, "create_voip_body") && o.uint32(16090)
						.bytes(e.create_voip_body), e.call_voip_body != null && Object.hasOwnProperty.call(e, "call_voip_body") && o.uint32(16098)
						.bytes(e.call_voip_body), e.update_voip_body != null && Object.hasOwnProperty.call(e, "update_voip_body") && o.uint32(16106)
						.bytes(e.update_voip_body), e.profile_get_info != null && Object.hasOwnProperty.call(e, "profile_get_info") && o.uint32(16122)
						.bytes(e.profile_get_info), e.get_configs_body != null && Object.hasOwnProperty.call(e, "get_configs_body") && o.uint32(16138)
						.bytes(e.get_configs_body), e.unread_count_report_body != null && Object.hasOwnProperty.call(e, "unread_count_report_body") && o.uint32(16146)
						.bytes(e.unread_count_report_body), e.block_members_body != null && Object.hasOwnProperty.call(e, "block_members_body") && a.pigeon.ResponseBasic.BlockMembersResponseBody.encode(e.block_members_body, o.uint32(16154)
							.fork())
						.ldelim(), e.get_unread_count_body != null && Object.hasOwnProperty.call(e, "get_unread_count_body") && o.uint32(16242)
						.bytes(e.get_unread_count_body), e.send_message_p2p_body != null && Object.hasOwnProperty.call(e, "send_message_p2p_body") && o.uint32(16250)
						.bytes(e.send_message_p2p_body), e.get_blocklist_body != null && Object.hasOwnProperty.call(e, "get_blocklist_body") && o.uint32(16258)
						.bytes(e.get_blocklist_body), e.set_blocklist_body != null && Object.hasOwnProperty.call(e, "set_blocklist_body") && o.uint32(16266)
						.bytes(e.set_blocklist_body), e.check_in_blocklist_body != null && Object.hasOwnProperty.call(e, "check_in_blocklist_body") && o.uint32(16274)
						.bytes(e.check_in_blocklist_body), e.mark_message_body != null && Object.hasOwnProperty.call(e, "mark_message_body") && o.uint32(16290)
						.bytes(e.mark_message_body), e.pull_mark_message_body != null && Object.hasOwnProperty.call(e, "pull_mark_message_body") && o.uint32(16298)
						.bytes(e.pull_mark_message_body), e.batch_get_conversation_participants_readindex != null && Object.hasOwnProperty.call(e, "batch_get_conversation_participants_readindex") && o.uint32(16306)
						.bytes(e.batch_get_conversation_participants_readindex), e.message_by_init != null && Object.hasOwnProperty.call(e, "message_by_init") && o.uint32(16346)
						.bytes(e.message_by_init), e.mark_msg_unread_count_report != null && Object.hasOwnProperty.call(e, "mark_msg_unread_count_report") && o.uint32(16434)
						.bytes(e.mark_msg_unread_count_report), e.mark_msg_get_unread_count != null && Object.hasOwnProperty.call(e, "mark_msg_get_unread_count") && o.uint32(16442)
						.bytes(e.mark_msg_get_unread_count), e.batch_unmark_message != null && Object.hasOwnProperty.call(e, "batch_unmark_message") && o.uint32(16450)
						.bytes(e.batch_unmark_message), e.audio_recognition_body != null && Object.hasOwnProperty.call(e, "audio_recognition_body") && o.uint32(16474)
						.bytes(e.audio_recognition_body), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 100:
								{
									n.send_message_body = a.pigeon.ResponseBasic.SendMessageResponseBody.decode(e, e.uint32());
									break
								}
							case 200:
								{
									n.messages_per_user_body = a.pigeon.ResponseBasic.MessagesPerUserResponseBody.decode(e, e.uint32());
									break
								}
							case 203:
								{
									// n.messages_per_user_init_v2_body = e.bytes();
									n.messages_per_user_init_v2_body = a.pigeon.ResponseBasic.MessagesPerUserInitV2ResponseBody.decode(e, e.uint32());
									break
								}
							case 211:
								{
									n.get_message_by_id_body = e.bytes();
									break
								}
							case 301:
								{
									n.messages_in_conversation_body = e.bytes();
									break
								}
							case 302:
								{
									n.get_messages_checkinfo_in_conversation_body = e.bytes();
									break
								}
							case 500:
								{
									n.new_message_notify = a.pigeon.ResponseBasic.NewMessageNotify.decode(e, e.uint32());
									break
								}
							case 504:
								{
									n.new_p2p_message_notify = e.bytes();
									break
								}
							case 615:
								{
									n.get_conversations_checkinfo_body = e.bytes();
									break
								}
							case 609:
								{
									n.create_conversation_v2_body = a.pigeon.ResponseBasic.CreateConversationV2ResponseBody.decode(e, e.uint32());
									break
								}
							case 610:
								{
									n.get_conversation_info_list_v2_body = a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody.decode(e, e.uint32());
									break
								}
							case 611:
								{
									n.get_conversation_info_list_by_favorite_v2_body = e.bytes();
									break
								}
							case 612:
								{
									n.get_conversation_info_list_by_top_v2_body = e.bytes();
									break
								}
							case 605:
								{
									n.conversation_participants_body = e.bytes();
									break
								}
							case 650:
								{
									n.conversation_add_participants_body = a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.decode(e, e.uint32());
									break
								}
							case 651:
								{
									n.conversation_remove_participants_body = a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.decode(e, e.uint32());
									break
								}
							case 654:
								{
									n.mget_conversation_participants_body = e.bytes();
									break
								}
							case 655:
								{
									n.update_conversation_participant_body = e.bytes();
									break
								}
							case 702:
								{
									n.recall_message_body = e.bytes();
									break
								}
							case 705:
								{
									n.modify_message_property_body = a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody.decode(e, e.uint32());
									break
								}
							case 2059:
								{
									n.audio_recognition_body = e.bytes();
									break
								}
							case 901:
								{
									n.get_conversation_core_info_body = e.bytes();
									break
								}
							case 902:
								{
									n.set_conversation_core_info_body = e.bytes();
									break
								}
							case 904:
								{
									n.upsert_conversation_core_ext_info_body = e.bytes();
									break
								}
							case 921:
								{
									n.set_conversation_setting_info_body = e.bytes();
									break
								}
							case 922:
								{
									n.upsert_conversation_setting_ext_info_body = e.bytes();
									break
								}
							case 1e3:
								{
									n.get_stranger_conversation_body = a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody.decode(e, e.uint32());
									break
								}
							case 1001:
								{
									n.get_stranger_messages_body = e.bytes();
									break
								}
							case 2e3:
								{
									n.participants_read_index_body = e.bytes();
									break
								}
							case 2001:
								{
									n.participants_min_index_body = e.bytes();
									break
								}
							case 2003:
								{
									n.get_upload_token_body = e.bytes();
									break
								}
							case 2004:
								{
									n.get_media_urls_body = e.bytes();
									break
								}
							case 2038:
								{
									n.batch_get_conversation_participants_readindex = e.bytes();
									break
								}
							case 2005:
								{
									n.get_ticket_body = e.bytes();
									break
								}
							case 2006:
								{
									n.get_conversation_list_body = a.pigeon.ResponseBasic.GetUserConversationListResponseBody.decode(e, e.uint32());
									break
								}
							case 2007:
								{
									n.broadcast_send_message_body = e.bytes();
									break
								}
							case 2008:
								{
									n.broadcast_recv_message_body = e.bytes();
									break
								}
							case 2009:
								{
									n.broadcast_user_counter_body = e.bytes();
									break
								}
							case 2011:
								{
									n.create_voip_body = e.bytes();
									break
								}
							case 2012:
								{
									n.call_voip_body = e.bytes();
									break
								}
							case 2013:
								{
									n.update_voip_body = e.bytes();
									break
								}
							case 2015:
								{
									n.profile_get_info = e.bytes();
									break
								}
							case 2017:
								{
									n.get_configs_body = e.bytes();
									break
								}
							case 2018:
								{
									n.unread_count_report_body = e.bytes();
									break
								}
							case 2019:
								{
									n.block_members_body = a.pigeon.ResponseBasic.BlockMembersResponseBody.decode(e, e.uint32());
									break
								}
							case 2030:
								{
									n.get_unread_count_body = e.bytes();
									break
								}
							case 2031:
								{
									n.send_message_p2p_body = e.bytes();
									break
								}
							case 2032:
								{
									n.get_blocklist_body = e.bytes();
									break
								}
							case 2033:
								{
									n.set_blocklist_body = e.bytes();
									break
								}
							case 2034:
								{
									n.check_in_blocklist_body = e.bytes();
									break
								}
							case 2036:
								{
									n.mark_message_body = e.bytes();
									break
								}
							case 2037:
								{
									n.pull_mark_message_body = e.bytes();
									break
								}
							case 2043:
								{
									n.message_by_init = e.bytes();
									break
								}
							case 2054:
								{
									n.mark_msg_unread_count_report = e.bytes();
									break
								}
							case 2055:
								{
									n.mark_msg_get_unread_count = e.bytes();
									break
								}
							case 2056:
								{
									n.batch_unmark_message = e.bytes();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.send_message_body != null && e.hasOwnProperty("send_message_body")) {
						let o = a.pigeon.ResponseBasic.SendMessageResponseBody.verify(e.send_message_body);
						if (o) return "send_message_body." + o
					}
					if (e.messages_per_user_body != null && e.hasOwnProperty("messages_per_user_body")) {
						let o = a.pigeon.ResponseBasic.MessagesPerUserResponseBody.verify(e.messages_per_user_body);
						if (o) return "messages_per_user_body." + o
					}
					if (e.messages_per_user_init_v2_body != null && e.hasOwnProperty("messages_per_user_init_v2_body") && !(e.messages_per_user_init_v2_body && typeof e.messages_per_user_init_v2_body.length == "number" || i.isString(e.messages_per_user_init_v2_body))) return "messages_per_user_init_v2_body: buffer expected";
					if (e.get_message_by_id_body != null && e.hasOwnProperty("get_message_by_id_body") && !(e.get_message_by_id_body && typeof e.get_message_by_id_body.length == "number" || i.isString(e.get_message_by_id_body))) return "get_message_by_id_body: buffer expected";
					if (e.messages_in_conversation_body != null && e.hasOwnProperty("messages_in_conversation_body") && !(e.messages_in_conversation_body && typeof e.messages_in_conversation_body.length == "number" || i.isString(e.messages_in_conversation_body))) return "messages_in_conversation_body: buffer expected";
					if (e.get_messages_checkinfo_in_conversation_body != null && e.hasOwnProperty("get_messages_checkinfo_in_conversation_body") && !(e.get_messages_checkinfo_in_conversation_body && typeof e.get_messages_checkinfo_in_conversation_body.length == "number" || i.isString(e.get_messages_checkinfo_in_conversation_body))) return "get_messages_checkinfo_in_conversation_body: buffer expected";
					if (e.new_message_notify != null && e.hasOwnProperty("new_message_notify")) {
						let o = a.pigeon.ResponseBasic.NewMessageNotify.verify(e.new_message_notify);
						if (o) return "new_message_notify." + o
					}
					if (e.new_p2p_message_notify != null && e.hasOwnProperty("new_p2p_message_notify") && !(e.new_p2p_message_notify && typeof e.new_p2p_message_notify.length == "number" || i.isString(e.new_p2p_message_notify))) return "new_p2p_message_notify: buffer expected";
					if (e.get_conversations_checkinfo_body != null && e.hasOwnProperty("get_conversations_checkinfo_body") && !(e.get_conversations_checkinfo_body && typeof e.get_conversations_checkinfo_body.length == "number" || i.isString(e.get_conversations_checkinfo_body))) return "get_conversations_checkinfo_body: buffer expected";
					if (e.create_conversation_v2_body != null && e.hasOwnProperty("create_conversation_v2_body")) {
						let o = a.pigeon.ResponseBasic.CreateConversationV2ResponseBody.verify(e.create_conversation_v2_body);
						if (o) return "create_conversation_v2_body." + o
					}
					if (e.get_conversation_info_list_v2_body != null && e.hasOwnProperty("get_conversation_info_list_v2_body")) {
						let o = a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody.verify(e.get_conversation_info_list_v2_body);
						if (o) return "get_conversation_info_list_v2_body." + o
					}
					if (e.get_conversation_info_list_by_favorite_v2_body != null && e.hasOwnProperty("get_conversation_info_list_by_favorite_v2_body") && !(e.get_conversation_info_list_by_favorite_v2_body && typeof e.get_conversation_info_list_by_favorite_v2_body.length == "number" || i.isString(e.get_conversation_info_list_by_favorite_v2_body))) return "get_conversation_info_list_by_favorite_v2_body: buffer expected";
					if (e.get_conversation_info_list_by_top_v2_body != null && e.hasOwnProperty("get_conversation_info_list_by_top_v2_body") && !(e.get_conversation_info_list_by_top_v2_body && typeof e.get_conversation_info_list_by_top_v2_body.length == "number" || i.isString(e.get_conversation_info_list_by_top_v2_body))) return "get_conversation_info_list_by_top_v2_body: buffer expected";
					if (e.conversation_participants_body != null && e.hasOwnProperty("conversation_participants_body") && !(e.conversation_participants_body && typeof e.conversation_participants_body.length == "number" || i.isString(e.conversation_participants_body))) return "conversation_participants_body: buffer expected";
					if (e.conversation_add_participants_body != null && e.hasOwnProperty("conversation_add_participants_body")) {
						let o = a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.verify(e.conversation_add_participants_body);
						if (o) return "conversation_add_participants_body." + o
					}
					if (e.conversation_remove_participants_body != null && e.hasOwnProperty("conversation_remove_participants_body")) {
						let o = a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.verify(e.conversation_remove_participants_body);
						if (o) return "conversation_remove_participants_body." + o
					}
					if (e.mget_conversation_participants_body != null && e.hasOwnProperty("mget_conversation_participants_body") && !(e.mget_conversation_participants_body && typeof e.mget_conversation_participants_body.length == "number" || i.isString(e.mget_conversation_participants_body))) return "mget_conversation_participants_body: buffer expected";
					if (e.update_conversation_participant_body != null && e.hasOwnProperty("update_conversation_participant_body") && !(e.update_conversation_participant_body && typeof e.update_conversation_participant_body.length == "number" || i.isString(e.update_conversation_participant_body))) return "update_conversation_participant_body: buffer expected";
					if (e.recall_message_body != null && e.hasOwnProperty("recall_message_body") && !(e.recall_message_body && typeof e.recall_message_body.length == "number" || i.isString(e.recall_message_body))) return "recall_message_body: buffer expected";
					if (e.modify_message_property_body != null && e.hasOwnProperty("modify_message_property_body")) {
						let o = a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody.verify(e.modify_message_property_body);
						if (o) return "modify_message_property_body." + o
					}
					if (e.audio_recognition_body != null && e.hasOwnProperty("audio_recognition_body") && !(e.audio_recognition_body && typeof e.audio_recognition_body.length == "number" || i.isString(e.audio_recognition_body))) return "audio_recognition_body: buffer expected";
					if (e.get_conversation_core_info_body != null && e.hasOwnProperty("get_conversation_core_info_body") && !(e.get_conversation_core_info_body && typeof e.get_conversation_core_info_body.length == "number" || i.isString(e.get_conversation_core_info_body))) return "get_conversation_core_info_body: buffer expected";
					if (e.set_conversation_core_info_body != null && e.hasOwnProperty("set_conversation_core_info_body") && !(e.set_conversation_core_info_body && typeof e.set_conversation_core_info_body.length == "number" || i.isString(e.set_conversation_core_info_body))) return "set_conversation_core_info_body: buffer expected";
					if (e.upsert_conversation_core_ext_info_body != null && e.hasOwnProperty("upsert_conversation_core_ext_info_body") && !(e.upsert_conversation_core_ext_info_body && typeof e.upsert_conversation_core_ext_info_body.length == "number" || i.isString(e.upsert_conversation_core_ext_info_body))) return "upsert_conversation_core_ext_info_body: buffer expected";
					if (e.set_conversation_setting_info_body != null && e.hasOwnProperty("set_conversation_setting_info_body") && !(e.set_conversation_setting_info_body && typeof e.set_conversation_setting_info_body.length == "number" || i.isString(e.set_conversation_setting_info_body))) return "set_conversation_setting_info_body: buffer expected";
					if (e.upsert_conversation_setting_ext_info_body != null && e.hasOwnProperty("upsert_conversation_setting_ext_info_body") && !(e.upsert_conversation_setting_ext_info_body && typeof e.upsert_conversation_setting_ext_info_body.length == "number" || i.isString(e.upsert_conversation_setting_ext_info_body))) return "upsert_conversation_setting_ext_info_body: buffer expected";
					if (e.get_stranger_conversation_body != null && e.hasOwnProperty("get_stranger_conversation_body")) {
						let o = a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody.verify(e.get_stranger_conversation_body);
						if (o) return "get_stranger_conversation_body." + o
					}
					if (e.get_stranger_messages_body != null && e.hasOwnProperty("get_stranger_messages_body") && !(e.get_stranger_messages_body && typeof e.get_stranger_messages_body.length == "number" || i.isString(e.get_stranger_messages_body))) return "get_stranger_messages_body: buffer expected";
					if (e.participants_read_index_body != null && e.hasOwnProperty("participants_read_index_body") && !(e.participants_read_index_body && typeof e.participants_read_index_body.length == "number" || i.isString(e.participants_read_index_body))) return "participants_read_index_body: buffer expected";
					if (e.participants_min_index_body != null && e.hasOwnProperty("participants_min_index_body") && !(e.participants_min_index_body && typeof e.participants_min_index_body.length == "number" || i.isString(e.participants_min_index_body))) return "participants_min_index_body: buffer expected";
					if (e.get_upload_token_body != null && e.hasOwnProperty("get_upload_token_body") && !(e.get_upload_token_body && typeof e.get_upload_token_body.length == "number" || i.isString(e.get_upload_token_body))) return "get_upload_token_body: buffer expected";
					if (e.get_media_urls_body != null && e.hasOwnProperty("get_media_urls_body") && !(e.get_media_urls_body && typeof e.get_media_urls_body.length == "number" || i.isString(e.get_media_urls_body))) return "get_media_urls_body: buffer expected";
					if (e.batch_get_conversation_participants_readindex != null && e.hasOwnProperty("batch_get_conversation_participants_readindex") && !(e.batch_get_conversation_participants_readindex && typeof e.batch_get_conversation_participants_readindex.length == "number" || i.isString(e.batch_get_conversation_participants_readindex))) return "batch_get_conversation_participants_readindex: buffer expected";
					if (e.get_ticket_body != null && e.hasOwnProperty("get_ticket_body") && !(e.get_ticket_body && typeof e.get_ticket_body.length == "number" || i.isString(e.get_ticket_body))) return "get_ticket_body: buffer expected";
					if (e.get_conversation_list_body != null && e.hasOwnProperty("get_conversation_list_body")) {
						let o = a.pigeon.ResponseBasic.GetUserConversationListResponseBody.verify(e.get_conversation_list_body);
						if (o) return "get_conversation_list_body." + o
					}
					if (e.broadcast_send_message_body != null && e.hasOwnProperty("broadcast_send_message_body") && !(e.broadcast_send_message_body && typeof e.broadcast_send_message_body.length == "number" || i.isString(e.broadcast_send_message_body))) return "broadcast_send_message_body: buffer expected";
					if (e.broadcast_recv_message_body != null && e.hasOwnProperty("broadcast_recv_message_body") && !(e.broadcast_recv_message_body && typeof e.broadcast_recv_message_body.length == "number" || i.isString(e.broadcast_recv_message_body))) return "broadcast_recv_message_body: buffer expected";
					if (e.broadcast_user_counter_body != null && e.hasOwnProperty("broadcast_user_counter_body") && !(e.broadcast_user_counter_body && typeof e.broadcast_user_counter_body.length == "number" || i.isString(e.broadcast_user_counter_body))) return "broadcast_user_counter_body: buffer expected";
					if (e.create_voip_body != null && e.hasOwnProperty("create_voip_body") && !(e.create_voip_body && typeof e.create_voip_body.length == "number" || i.isString(e.create_voip_body))) return "create_voip_body: buffer expected";
					if (e.call_voip_body != null && e.hasOwnProperty("call_voip_body") && !(e.call_voip_body && typeof e.call_voip_body.length == "number" || i.isString(e.call_voip_body))) return "call_voip_body: buffer expected";
					if (e.update_voip_body != null && e.hasOwnProperty("update_voip_body") && !(e.update_voip_body && typeof e.update_voip_body.length == "number" || i.isString(e.update_voip_body))) return "update_voip_body: buffer expected";
					if (e.profile_get_info != null && e.hasOwnProperty("profile_get_info") && !(e.profile_get_info && typeof e.profile_get_info.length == "number" || i.isString(e.profile_get_info))) return "profile_get_info: buffer expected";
					if (e.get_configs_body != null && e.hasOwnProperty("get_configs_body") && !(e.get_configs_body && typeof e.get_configs_body.length == "number" || i.isString(e.get_configs_body))) return "get_configs_body: buffer expected";
					if (e.unread_count_report_body != null && e.hasOwnProperty("unread_count_report_body") && !(e.unread_count_report_body && typeof e.unread_count_report_body.length == "number" || i.isString(e.unread_count_report_body))) return "unread_count_report_body: buffer expected";
					if (e.block_members_body != null && e.hasOwnProperty("block_members_body")) {
						let o = a.pigeon.ResponseBasic.BlockMembersResponseBody.verify(e.block_members_body);
						if (o) return "block_members_body." + o
					}
					return e.get_unread_count_body != null && e.hasOwnProperty("get_unread_count_body") && !(e.get_unread_count_body && typeof e.get_unread_count_body.length == "number" || i.isString(e.get_unread_count_body)) ? "get_unread_count_body: buffer expected" : e.send_message_p2p_body != null && e.hasOwnProperty("send_message_p2p_body") && !(e.send_message_p2p_body && typeof e.send_message_p2p_body.length == "number" || i.isString(e.send_message_p2p_body)) ? "send_message_p2p_body: buffer expected" : e.get_blocklist_body != null && e.hasOwnProperty("get_blocklist_body") && !(e.get_blocklist_body && typeof e.get_blocklist_body.length == "number" || i.isString(e.get_blocklist_body)) ? "get_blocklist_body: buffer expected" : e.set_blocklist_body != null && e.hasOwnProperty("set_blocklist_body") && !(e.set_blocklist_body && typeof e.set_blocklist_body.length == "number" || i.isString(e.set_blocklist_body)) ? "set_blocklist_body: buffer expected" : e.check_in_blocklist_body != null && e.hasOwnProperty("check_in_blocklist_body") && !(e.check_in_blocklist_body && typeof e.check_in_blocklist_body.length == "number" || i.isString(e.check_in_blocklist_body)) ? "check_in_blocklist_body: buffer expected" : e.mark_message_body != null && e.hasOwnProperty("mark_message_body") && !(e.mark_message_body && typeof e.mark_message_body.length == "number" || i.isString(e.mark_message_body)) ? "mark_message_body: buffer expected" : e.pull_mark_message_body != null && e.hasOwnProperty("pull_mark_message_body") && !(e.pull_mark_message_body && typeof e.pull_mark_message_body.length == "number" || i.isString(e.pull_mark_message_body)) ? "pull_mark_message_body: buffer expected" : e.message_by_init != null && e.hasOwnProperty("message_by_init") && !(e.message_by_init && typeof e.message_by_init.length == "number" || i.isString(e.message_by_init)) ? "message_by_init: buffer expected" : e.mark_msg_unread_count_report != null && e.hasOwnProperty("mark_msg_unread_count_report") && !(e.mark_msg_unread_count_report && typeof e.mark_msg_unread_count_report.length == "number" || i.isString(e.mark_msg_unread_count_report)) ? "mark_msg_unread_count_report: buffer expected" : e.mark_msg_get_unread_count != null && e.hasOwnProperty("mark_msg_get_unread_count") && !(e.mark_msg_get_unread_count && typeof e.mark_msg_get_unread_count.length == "number" || i.isString(e.mark_msg_get_unread_count)) ? "mark_msg_get_unread_count: buffer expected" : e.batch_unmark_message != null && e.hasOwnProperty("batch_unmark_message") && !(e.batch_unmark_message && typeof e.batch_unmark_message.length == "number" || i.isString(e.batch_unmark_message)) ? "batch_unmark_message: buffer expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.ResponseBody;
					if (e.send_message_body != null) {
						if (typeof e.send_message_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.send_message_body: object expected");
						o.send_message_body = a.pigeon.ResponseBasic.SendMessageResponseBody.fromObject(e.send_message_body)
					}
					if (e.messages_per_user_body != null) {
						if (typeof e.messages_per_user_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.messages_per_user_body: object expected");
						o.messages_per_user_body = a.pigeon.ResponseBasic.MessagesPerUserResponseBody.fromObject(e.messages_per_user_body)
					}
					if (e.messages_per_user_init_v2_body != null && (typeof e.messages_per_user_init_v2_body == "string" ? i.base64.decode(e.messages_per_user_init_v2_body, o.messages_per_user_init_v2_body = i.newBuffer(i.base64.length(e.messages_per_user_init_v2_body)), 0) : e.messages_per_user_init_v2_body.length >= 0 && (o.messages_per_user_init_v2_body = e.messages_per_user_init_v2_body)), e.get_message_by_id_body != null && (typeof e.get_message_by_id_body == "string" ? i.base64.decode(e.get_message_by_id_body, o.get_message_by_id_body = i.newBuffer(i.base64.length(e.get_message_by_id_body)), 0) : e.get_message_by_id_body.length >= 0 && (o.get_message_by_id_body = e.get_message_by_id_body)), e.messages_in_conversation_body != null && (typeof e.messages_in_conversation_body == "string" ? i.base64.decode(e.messages_in_conversation_body, o.messages_in_conversation_body = i.newBuffer(i.base64.length(e.messages_in_conversation_body)), 0) : e.messages_in_conversation_body.length >= 0 && (o.messages_in_conversation_body = e.messages_in_conversation_body)), e.get_messages_checkinfo_in_conversation_body != null && (typeof e.get_messages_checkinfo_in_conversation_body == "string" ? i.base64.decode(e.get_messages_checkinfo_in_conversation_body, o.get_messages_checkinfo_in_conversation_body = i.newBuffer(i.base64.length(e.get_messages_checkinfo_in_conversation_body)), 0) : e.get_messages_checkinfo_in_conversation_body.length >= 0 && (o.get_messages_checkinfo_in_conversation_body = e.get_messages_checkinfo_in_conversation_body)), e.new_message_notify != null) {
						if (typeof e.new_message_notify != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.new_message_notify: object expected");
						o.new_message_notify = a.pigeon.ResponseBasic.NewMessageNotify.fromObject(e.new_message_notify)
					}
					if (e.new_p2p_message_notify != null && (typeof e.new_p2p_message_notify == "string" ? i.base64.decode(e.new_p2p_message_notify, o.new_p2p_message_notify = i.newBuffer(i.base64.length(e.new_p2p_message_notify)), 0) : e.new_p2p_message_notify.length >= 0 && (o.new_p2p_message_notify = e.new_p2p_message_notify)), e.get_conversations_checkinfo_body != null && (typeof e.get_conversations_checkinfo_body == "string" ? i.base64.decode(e.get_conversations_checkinfo_body, o.get_conversations_checkinfo_body = i.newBuffer(i.base64.length(e.get_conversations_checkinfo_body)), 0) : e.get_conversations_checkinfo_body.length >= 0 && (o.get_conversations_checkinfo_body = e.get_conversations_checkinfo_body)), e.create_conversation_v2_body != null) {
						if (typeof e.create_conversation_v2_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.create_conversation_v2_body: object expected");
						o.create_conversation_v2_body = a.pigeon.ResponseBasic.CreateConversationV2ResponseBody.fromObject(e.create_conversation_v2_body)
					}
					if (e.get_conversation_info_list_v2_body != null) {
						if (typeof e.get_conversation_info_list_v2_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.get_conversation_info_list_v2_body: object expected");
						o.get_conversation_info_list_v2_body = a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody.fromObject(e.get_conversation_info_list_v2_body)
					}
					if (e.get_conversation_info_list_by_favorite_v2_body != null && (typeof e.get_conversation_info_list_by_favorite_v2_body == "string" ? i.base64.decode(e.get_conversation_info_list_by_favorite_v2_body, o.get_conversation_info_list_by_favorite_v2_body = i.newBuffer(i.base64.length(e.get_conversation_info_list_by_favorite_v2_body)), 0) : e.get_conversation_info_list_by_favorite_v2_body.length >= 0 && (o.get_conversation_info_list_by_favorite_v2_body = e.get_conversation_info_list_by_favorite_v2_body)), e.get_conversation_info_list_by_top_v2_body != null && (typeof e.get_conversation_info_list_by_top_v2_body == "string" ? i.base64.decode(e.get_conversation_info_list_by_top_v2_body, o.get_conversation_info_list_by_top_v2_body = i.newBuffer(i.base64.length(e.get_conversation_info_list_by_top_v2_body)), 0) : e.get_conversation_info_list_by_top_v2_body.length >= 0 && (o.get_conversation_info_list_by_top_v2_body = e.get_conversation_info_list_by_top_v2_body)), e.conversation_participants_body != null && (typeof e.conversation_participants_body == "string" ? i.base64.decode(e.conversation_participants_body, o.conversation_participants_body = i.newBuffer(i.base64.length(e.conversation_participants_body)), 0) : e.conversation_participants_body.length >= 0 && (o.conversation_participants_body = e.conversation_participants_body)), e.conversation_add_participants_body != null) {
						if (typeof e.conversation_add_participants_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.conversation_add_participants_body: object expected");
						o.conversation_add_participants_body = a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.fromObject(e.conversation_add_participants_body)
					}
					if (e.conversation_remove_participants_body != null) {
						if (typeof e.conversation_remove_participants_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.conversation_remove_participants_body: object expected");
						o.conversation_remove_participants_body = a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.fromObject(e.conversation_remove_participants_body)
					}
					if (e.mget_conversation_participants_body != null && (typeof e.mget_conversation_participants_body == "string" ? i.base64.decode(e.mget_conversation_participants_body, o.mget_conversation_participants_body = i.newBuffer(i.base64.length(e.mget_conversation_participants_body)), 0) : e.mget_conversation_participants_body.length >= 0 && (o.mget_conversation_participants_body = e.mget_conversation_participants_body)), e.update_conversation_participant_body != null && (typeof e.update_conversation_participant_body == "string" ? i.base64.decode(e.update_conversation_participant_body, o.update_conversation_participant_body = i.newBuffer(i.base64.length(e.update_conversation_participant_body)), 0) : e.update_conversation_participant_body.length >= 0 && (o.update_conversation_participant_body = e.update_conversation_participant_body)), e.recall_message_body != null && (typeof e.recall_message_body == "string" ? i.base64.decode(e.recall_message_body, o.recall_message_body = i.newBuffer(i.base64.length(e.recall_message_body)), 0) : e.recall_message_body.length >= 0 && (o.recall_message_body = e.recall_message_body)), e.modify_message_property_body != null) {
						if (typeof e.modify_message_property_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.modify_message_property_body: object expected");
						o.modify_message_property_body = a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody.fromObject(e.modify_message_property_body)
					}
					if (e.audio_recognition_body != null && (typeof e.audio_recognition_body == "string" ? i.base64.decode(e.audio_recognition_body, o.audio_recognition_body = i.newBuffer(i.base64.length(e.audio_recognition_body)), 0) : e.audio_recognition_body.length >= 0 && (o.audio_recognition_body = e.audio_recognition_body)), e.get_conversation_core_info_body != null && (typeof e.get_conversation_core_info_body == "string" ? i.base64.decode(e.get_conversation_core_info_body, o.get_conversation_core_info_body = i.newBuffer(i.base64.length(e.get_conversation_core_info_body)), 0) : e.get_conversation_core_info_body.length >= 0 && (o.get_conversation_core_info_body = e.get_conversation_core_info_body)), e.set_conversation_core_info_body != null && (typeof e.set_conversation_core_info_body == "string" ? i.base64.decode(e.set_conversation_core_info_body, o.set_conversation_core_info_body = i.newBuffer(i.base64.length(e.set_conversation_core_info_body)), 0) : e.set_conversation_core_info_body.length >= 0 && (o.set_conversation_core_info_body = e.set_conversation_core_info_body)), e.upsert_conversation_core_ext_info_body != null && (typeof e.upsert_conversation_core_ext_info_body == "string" ? i.base64.decode(e.upsert_conversation_core_ext_info_body, o.upsert_conversation_core_ext_info_body = i.newBuffer(i.base64.length(e.upsert_conversation_core_ext_info_body)), 0) : e.upsert_conversation_core_ext_info_body.length >= 0 && (o.upsert_conversation_core_ext_info_body = e.upsert_conversation_core_ext_info_body)), e.set_conversation_setting_info_body != null && (typeof e.set_conversation_setting_info_body == "string" ? i.base64.decode(e.set_conversation_setting_info_body, o.set_conversation_setting_info_body = i.newBuffer(i.base64.length(e.set_conversation_setting_info_body)), 0) : e.set_conversation_setting_info_body.length >= 0 && (o.set_conversation_setting_info_body = e.set_conversation_setting_info_body)), e.upsert_conversation_setting_ext_info_body != null && (typeof e.upsert_conversation_setting_ext_info_body == "string" ? i.base64.decode(e.upsert_conversation_setting_ext_info_body, o.upsert_conversation_setting_ext_info_body = i.newBuffer(i.base64.length(e.upsert_conversation_setting_ext_info_body)), 0) : e.upsert_conversation_setting_ext_info_body.length >= 0 && (o.upsert_conversation_setting_ext_info_body = e.upsert_conversation_setting_ext_info_body)), e.get_stranger_conversation_body != null) {
						if (typeof e.get_stranger_conversation_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.get_stranger_conversation_body: object expected");
						o.get_stranger_conversation_body = a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody.fromObject(e.get_stranger_conversation_body)
					}
					if (e.get_stranger_messages_body != null && (typeof e.get_stranger_messages_body == "string" ? i.base64.decode(e.get_stranger_messages_body, o.get_stranger_messages_body = i.newBuffer(i.base64.length(e.get_stranger_messages_body)), 0) : e.get_stranger_messages_body.length >= 0 && (o.get_stranger_messages_body = e.get_stranger_messages_body)), e.participants_read_index_body != null && (typeof e.participants_read_index_body == "string" ? i.base64.decode(e.participants_read_index_body, o.participants_read_index_body = i.newBuffer(i.base64.length(e.participants_read_index_body)), 0) : e.participants_read_index_body.length >= 0 && (o.participants_read_index_body = e.participants_read_index_body)), e.participants_min_index_body != null && (typeof e.participants_min_index_body == "string" ? i.base64.decode(e.participants_min_index_body, o.participants_min_index_body = i.newBuffer(i.base64.length(e.participants_min_index_body)), 0) : e.participants_min_index_body.length >= 0 && (o.participants_min_index_body = e.participants_min_index_body)), e.get_upload_token_body != null && (typeof e.get_upload_token_body == "string" ? i.base64.decode(e.get_upload_token_body, o.get_upload_token_body = i.newBuffer(i.base64.length(e.get_upload_token_body)), 0) : e.get_upload_token_body.length >= 0 && (o.get_upload_token_body = e.get_upload_token_body)), e.get_media_urls_body != null && (typeof e.get_media_urls_body == "string" ? i.base64.decode(e.get_media_urls_body, o.get_media_urls_body = i.newBuffer(i.base64.length(e.get_media_urls_body)), 0) : e.get_media_urls_body.length >= 0 && (o.get_media_urls_body = e.get_media_urls_body)), e.batch_get_conversation_participants_readindex != null && (typeof e.batch_get_conversation_participants_readindex == "string" ? i.base64.decode(e.batch_get_conversation_participants_readindex, o.batch_get_conversation_participants_readindex = i.newBuffer(i.base64.length(e.batch_get_conversation_participants_readindex)), 0) : e.batch_get_conversation_participants_readindex.length >= 0 && (o.batch_get_conversation_participants_readindex = e.batch_get_conversation_participants_readindex)), e.get_ticket_body != null && (typeof e.get_ticket_body == "string" ? i.base64.decode(e.get_ticket_body, o.get_ticket_body = i.newBuffer(i.base64.length(e.get_ticket_body)), 0) : e.get_ticket_body.length >= 0 && (o.get_ticket_body = e.get_ticket_body)), e.get_conversation_list_body != null) {
						if (typeof e.get_conversation_list_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.get_conversation_list_body: object expected");
						o.get_conversation_list_body = a.pigeon.ResponseBasic.GetUserConversationListResponseBody.fromObject(e.get_conversation_list_body)
					}
					if (e.broadcast_send_message_body != null && (typeof e.broadcast_send_message_body == "string" ? i.base64.decode(e.broadcast_send_message_body, o.broadcast_send_message_body = i.newBuffer(i.base64.length(e.broadcast_send_message_body)), 0) : e.broadcast_send_message_body.length >= 0 && (o.broadcast_send_message_body = e.broadcast_send_message_body)), e.broadcast_recv_message_body != null && (typeof e.broadcast_recv_message_body == "string" ? i.base64.decode(e.broadcast_recv_message_body, o.broadcast_recv_message_body = i.newBuffer(i.base64.length(e.broadcast_recv_message_body)), 0) : e.broadcast_recv_message_body.length >= 0 && (o.broadcast_recv_message_body = e.broadcast_recv_message_body)), e.broadcast_user_counter_body != null && (typeof e.broadcast_user_counter_body == "string" ? i.base64.decode(e.broadcast_user_counter_body, o.broadcast_user_counter_body = i.newBuffer(i.base64.length(e.broadcast_user_counter_body)), 0) : e.broadcast_user_counter_body.length >= 0 && (o.broadcast_user_counter_body = e.broadcast_user_counter_body)), e.create_voip_body != null && (typeof e.create_voip_body == "string" ? i.base64.decode(e.create_voip_body, o.create_voip_body = i.newBuffer(i.base64.length(e.create_voip_body)), 0) : e.create_voip_body.length >= 0 && (o.create_voip_body = e.create_voip_body)), e.call_voip_body != null && (typeof e.call_voip_body == "string" ? i.base64.decode(e.call_voip_body, o.call_voip_body = i.newBuffer(i.base64.length(e.call_voip_body)), 0) : e.call_voip_body.length >= 0 && (o.call_voip_body = e.call_voip_body)), e.update_voip_body != null && (typeof e.update_voip_body == "string" ? i.base64.decode(e.update_voip_body, o.update_voip_body = i.newBuffer(i.base64.length(e.update_voip_body)), 0) : e.update_voip_body.length >= 0 && (o.update_voip_body = e.update_voip_body)), e.profile_get_info != null && (typeof e.profile_get_info == "string" ? i.base64.decode(e.profile_get_info, o.profile_get_info = i.newBuffer(i.base64.length(e.profile_get_info)), 0) : e.profile_get_info.length >= 0 && (o.profile_get_info = e.profile_get_info)), e.get_configs_body != null && (typeof e.get_configs_body == "string" ? i.base64.decode(e.get_configs_body, o.get_configs_body = i.newBuffer(i.base64.length(e.get_configs_body)), 0) : e.get_configs_body.length >= 0 && (o.get_configs_body = e.get_configs_body)), e.unread_count_report_body != null && (typeof e.unread_count_report_body == "string" ? i.base64.decode(e.unread_count_report_body, o.unread_count_report_body = i.newBuffer(i.base64.length(e.unread_count_report_body)), 0) : e.unread_count_report_body.length >= 0 && (o.unread_count_report_body = e.unread_count_report_body)), e.block_members_body != null) {
						if (typeof e.block_members_body != "object") throw TypeError(".pigeon.ResponseBasic.ResponseBody.block_members_body: object expected");
						o.block_members_body = a.pigeon.ResponseBasic.BlockMembersResponseBody.fromObject(e.block_members_body)
					}
					return e.get_unread_count_body != null && (typeof e.get_unread_count_body == "string" ? i.base64.decode(e.get_unread_count_body, o.get_unread_count_body = i.newBuffer(i.base64.length(e.get_unread_count_body)), 0) : e.get_unread_count_body.length >= 0 && (o.get_unread_count_body = e.get_unread_count_body)), e.send_message_p2p_body != null && (typeof e.send_message_p2p_body == "string" ? i.base64.decode(e.send_message_p2p_body, o.send_message_p2p_body = i.newBuffer(i.base64.length(e.send_message_p2p_body)), 0) : e.send_message_p2p_body.length >= 0 && (o.send_message_p2p_body = e.send_message_p2p_body)), e.get_blocklist_body != null && (typeof e.get_blocklist_body == "string" ? i.base64.decode(e.get_blocklist_body, o.get_blocklist_body = i.newBuffer(i.base64.length(e.get_blocklist_body)), 0) : e.get_blocklist_body.length >= 0 && (o.get_blocklist_body = e.get_blocklist_body)), e.set_blocklist_body != null && (typeof e.set_blocklist_body == "string" ? i.base64.decode(e.set_blocklist_body, o.set_blocklist_body = i.newBuffer(i.base64.length(e.set_blocklist_body)), 0) : e.set_blocklist_body.length >= 0 && (o.set_blocklist_body = e.set_blocklist_body)), e.check_in_blocklist_body != null && (typeof e.check_in_blocklist_body == "string" ? i.base64.decode(e.check_in_blocklist_body, o.check_in_blocklist_body = i.newBuffer(i.base64.length(e.check_in_blocklist_body)), 0) : e.check_in_blocklist_body.length >= 0 && (o.check_in_blocklist_body = e.check_in_blocklist_body)), e.mark_message_body != null && (typeof e.mark_message_body == "string" ? i.base64.decode(e.mark_message_body, o.mark_message_body = i.newBuffer(i.base64.length(e.mark_message_body)), 0) : e.mark_message_body.length >= 0 && (o.mark_message_body = e.mark_message_body)), e.pull_mark_message_body != null && (typeof e.pull_mark_message_body == "string" ? i.base64.decode(e.pull_mark_message_body, o.pull_mark_message_body = i.newBuffer(i.base64.length(e.pull_mark_message_body)), 0) : e.pull_mark_message_body.length >= 0 && (o.pull_mark_message_body = e.pull_mark_message_body)), e.message_by_init != null && (typeof e.message_by_init == "string" ? i.base64.decode(e.message_by_init, o.message_by_init = i.newBuffer(i.base64.length(e.message_by_init)), 0) : e.message_by_init.length >= 0 && (o.message_by_init = e.message_by_init)), e.mark_msg_unread_count_report != null && (typeof e.mark_msg_unread_count_report == "string" ? i.base64.decode(e.mark_msg_unread_count_report, o.mark_msg_unread_count_report = i.newBuffer(i.base64.length(e.mark_msg_unread_count_report)), 0) : e.mark_msg_unread_count_report.length >= 0 && (o.mark_msg_unread_count_report = e.mark_msg_unread_count_report)), e.mark_msg_get_unread_count != null && (typeof e.mark_msg_get_unread_count == "string" ? i.base64.decode(e.mark_msg_get_unread_count, o.mark_msg_get_unread_count = i.newBuffer(i.base64.length(e.mark_msg_get_unread_count)), 0) : e.mark_msg_get_unread_count.length >= 0 && (o.mark_msg_get_unread_count = e.mark_msg_get_unread_count)), e.batch_unmark_message != null && (typeof e.batch_unmark_message == "string" ? i.base64.decode(e.batch_unmark_message, o.batch_unmark_message = i.newBuffer(i.base64.length(e.batch_unmark_message)), 0) : e.batch_unmark_message.length >= 0 && (o.batch_unmark_message = e.batch_unmark_message)), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					return o.defaults && (t.send_message_body = null, t.messages_per_user_body = null, o.bytes === String ? t.messages_per_user_init_v2_body = "" : (t.messages_per_user_init_v2_body = [], o.bytes !== Array && (t.messages_per_user_init_v2_body = i.newBuffer(t.messages_per_user_init_v2_body))), o.bytes === String ? t.get_message_by_id_body = "" : (t.get_message_by_id_body = [], o.bytes !== Array && (t.get_message_by_id_body = i.newBuffer(t.get_message_by_id_body))), o.bytes === String ? t.messages_in_conversation_body = "" : (t.messages_in_conversation_body = [], o.bytes !== Array && (t.messages_in_conversation_body = i.newBuffer(t.messages_in_conversation_body))), o.bytes === String ? t.get_messages_checkinfo_in_conversation_body = "" : (t.get_messages_checkinfo_in_conversation_body = [], o.bytes !== Array && (t.get_messages_checkinfo_in_conversation_body = i.newBuffer(t.get_messages_checkinfo_in_conversation_body))), t.new_message_notify = null, o.bytes === String ? t.new_p2p_message_notify = "" : (t.new_p2p_message_notify = [], o.bytes !== Array && (t.new_p2p_message_notify = i.newBuffer(t.new_p2p_message_notify))), o.bytes === String ? t.conversation_participants_body = "" : (t.conversation_participants_body = [], o.bytes !== Array && (t.conversation_participants_body = i.newBuffer(t.conversation_participants_body))), t.create_conversation_v2_body = null, t.get_conversation_info_list_v2_body = null, o.bytes === String ? t.get_conversation_info_list_by_favorite_v2_body = "" : (t.get_conversation_info_list_by_favorite_v2_body = [], o.bytes !== Array && (t.get_conversation_info_list_by_favorite_v2_body = i.newBuffer(t.get_conversation_info_list_by_favorite_v2_body))), o.bytes === String ? t.get_conversation_info_list_by_top_v2_body = "" : (t.get_conversation_info_list_by_top_v2_body = [], o.bytes !== Array && (t.get_conversation_info_list_by_top_v2_body = i.newBuffer(t.get_conversation_info_list_by_top_v2_body))), o.bytes === String ? t.get_conversations_checkinfo_body = "" : (t.get_conversations_checkinfo_body = [], o.bytes !== Array && (t.get_conversations_checkinfo_body = i.newBuffer(t.get_conversations_checkinfo_body))), t.conversation_add_participants_body = null, t.conversation_remove_participants_body = null, o.bytes === String ? t.mget_conversation_participants_body = "" : (t.mget_conversation_participants_body = [], o.bytes !== Array && (t.mget_conversation_participants_body = i.newBuffer(t.mget_conversation_participants_body))), o.bytes === String ? t.update_conversation_participant_body = "" : (t.update_conversation_participant_body = [], o.bytes !== Array && (t.update_conversation_participant_body = i.newBuffer(t.update_conversation_participant_body))), o.bytes === String ? t.recall_message_body = "" : (t.recall_message_body = [], o.bytes !== Array && (t.recall_message_body = i.newBuffer(t.recall_message_body))), t.modify_message_property_body = null, o.bytes === String ? t.get_conversation_core_info_body = "" : (t.get_conversation_core_info_body = [], o.bytes !== Array && (t.get_conversation_core_info_body = i.newBuffer(t.get_conversation_core_info_body))), o.bytes === String ? t.set_conversation_core_info_body = "" : (t.set_conversation_core_info_body = [], o.bytes !== Array && (t.set_conversation_core_info_body = i.newBuffer(t.set_conversation_core_info_body))), o.bytes === String ? t.upsert_conversation_core_ext_info_body = "" : (t.upsert_conversation_core_ext_info_body = [], o.bytes !== Array && (t.upsert_conversation_core_ext_info_body = i.newBuffer(t.upsert_conversation_core_ext_info_body))), o.bytes === String ? t.set_conversation_setting_info_body = "" : (t.set_conversation_setting_info_body = [], o.bytes !== Array && (t.set_conversation_setting_info_body = i.newBuffer(t.set_conversation_setting_info_body))), o.bytes === String ? t.upsert_conversation_setting_ext_info_body = "" : (t.upsert_conversation_setting_ext_info_body = [], o.bytes !== Array && (t.upsert_conversation_setting_ext_info_body = i.newBuffer(t.upsert_conversation_setting_ext_info_body))), t.get_stranger_conversation_body = null, o.bytes === String ? t.get_stranger_messages_body = "" : (t.get_stranger_messages_body = [], o.bytes !== Array && (t.get_stranger_messages_body = i.newBuffer(t.get_stranger_messages_body))), o.bytes === String ? t.participants_read_index_body = "" : (t.participants_read_index_body = [], o.bytes !== Array && (t.participants_read_index_body = i.newBuffer(t.participants_read_index_body))), o.bytes === String ? t.participants_min_index_body = "" : (t.participants_min_index_body = [], o.bytes !== Array && (t.participants_min_index_body = i.newBuffer(t.participants_min_index_body))), o.bytes === String ? t.get_upload_token_body = "" : (t.get_upload_token_body = [], o.bytes !== Array && (t.get_upload_token_body = i.newBuffer(t.get_upload_token_body))), o.bytes === String ? t.get_media_urls_body = "" : (t.get_media_urls_body = [], o.bytes !== Array && (t.get_media_urls_body = i.newBuffer(t.get_media_urls_body))), o.bytes === String ? t.get_ticket_body = "" : (t.get_ticket_body = [], o.bytes !== Array && (t.get_ticket_body = i.newBuffer(t.get_ticket_body))), t.get_conversation_list_body = null, o.bytes === String ? t.broadcast_send_message_body = "" : (t.broadcast_send_message_body = [], o.bytes !== Array && (t.broadcast_send_message_body = i.newBuffer(t.broadcast_send_message_body))), o.bytes === String ? t.broadcast_recv_message_body = "" : (t.broadcast_recv_message_body = [], o.bytes !== Array && (t.broadcast_recv_message_body = i.newBuffer(t.broadcast_recv_message_body))), o.bytes === String ? t.broadcast_user_counter_body = "" : (t.broadcast_user_counter_body = [], o.bytes !== Array && (t.broadcast_user_counter_body = i.newBuffer(t.broadcast_user_counter_body))), o.bytes === String ? t.create_voip_body = "" : (t.create_voip_body = [], o.bytes !== Array && (t.create_voip_body = i.newBuffer(t.create_voip_body))), o.bytes === String ? t.call_voip_body = "" : (t.call_voip_body = [], o.bytes !== Array && (t.call_voip_body = i.newBuffer(t.call_voip_body))), o.bytes === String ? t.update_voip_body = "" : (t.update_voip_body = [], o.bytes !== Array && (t.update_voip_body = i.newBuffer(t.update_voip_body))), o.bytes === String ? t.profile_get_info = "" : (t.profile_get_info = [], o.bytes !== Array && (t.profile_get_info = i.newBuffer(t.profile_get_info))), o.bytes === String ? t.get_configs_body = "" : (t.get_configs_body = [], o.bytes !== Array && (t.get_configs_body = i.newBuffer(t.get_configs_body))), o.bytes === String ? t.unread_count_report_body = "" : (t.unread_count_report_body = [], o.bytes !== Array && (t.unread_count_report_body = i.newBuffer(t.unread_count_report_body))), t.block_members_body = null, o.bytes === String ? t.get_unread_count_body = "" : (t.get_unread_count_body = [], o.bytes !== Array && (t.get_unread_count_body = i.newBuffer(t.get_unread_count_body))), o.bytes === String ? t.send_message_p2p_body = "" : (t.send_message_p2p_body = [], o.bytes !== Array && (t.send_message_p2p_body = i.newBuffer(t.send_message_p2p_body))), o.bytes === String ? t.get_blocklist_body = "" : (t.get_blocklist_body = [], o.bytes !== Array && (t.get_blocklist_body = i.newBuffer(t.get_blocklist_body))), o.bytes === String ? t.set_blocklist_body = "" : (t.set_blocklist_body = [], o.bytes !== Array && (t.set_blocklist_body = i.newBuffer(t.set_blocklist_body))), o.bytes === String ? t.check_in_blocklist_body = "" : (t.check_in_blocklist_body = [], o.bytes !== Array && (t.check_in_blocklist_body = i.newBuffer(t.check_in_blocklist_body))), o.bytes === String ? t.mark_message_body = "" : (t.mark_message_body = [], o.bytes !== Array && (t.mark_message_body = i.newBuffer(t.mark_message_body))), o.bytes === String ? t.pull_mark_message_body = "" : (t.pull_mark_message_body = [], o.bytes !== Array && (t.pull_mark_message_body = i.newBuffer(t.pull_mark_message_body))), o.bytes === String ? t.batch_get_conversation_participants_readindex = "" : (t.batch_get_conversation_participants_readindex = [], o.bytes !== Array && (t.batch_get_conversation_participants_readindex = i.newBuffer(t.batch_get_conversation_participants_readindex))), o.bytes === String ? t.message_by_init = "" : (t.message_by_init = [], o.bytes !== Array && (t.message_by_init = i.newBuffer(t.message_by_init))), o.bytes === String ? t.mark_msg_unread_count_report = "" : (t.mark_msg_unread_count_report = [], o.bytes !== Array && (t.mark_msg_unread_count_report = i.newBuffer(t.mark_msg_unread_count_report))), o.bytes === String ? t.mark_msg_get_unread_count = "" : (t.mark_msg_get_unread_count = [], o.bytes !== Array && (t.mark_msg_get_unread_count = i.newBuffer(t.mark_msg_get_unread_count))), o.bytes === String ? t.batch_unmark_message = "" : (t.batch_unmark_message = [], o.bytes !== Array && (t.batch_unmark_message = i.newBuffer(t.batch_unmark_message))), o.bytes === String ? t.audio_recognition_body = "" : (t.audio_recognition_body = [], o.bytes !== Array && (t.audio_recognition_body = i.newBuffer(t.audio_recognition_body)))), e.send_message_body != null && e.hasOwnProperty("send_message_body") && (t.send_message_body = a.pigeon.ResponseBasic.SendMessageResponseBody.toObject(e.send_message_body, o)), e.messages_per_user_body != null && e.hasOwnProperty("messages_per_user_body") && (t.messages_per_user_body = a.pigeon.ResponseBasic.MessagesPerUserResponseBody.toObject(e.messages_per_user_body, o)), e.messages_per_user_init_v2_body != null && e.hasOwnProperty("messages_per_user_init_v2_body") && (t.messages_per_user_init_v2_body = o.bytes === String ? i.base64.encode(e.messages_per_user_init_v2_body, 0, e.messages_per_user_init_v2_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.messages_per_user_init_v2_body) : e.messages_per_user_init_v2_body), e.get_message_by_id_body != null && e.hasOwnProperty("get_message_by_id_body") && (t.get_message_by_id_body = o.bytes === String ? i.base64.encode(e.get_message_by_id_body, 0, e.get_message_by_id_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_message_by_id_body) : e.get_message_by_id_body), e.messages_in_conversation_body != null && e.hasOwnProperty("messages_in_conversation_body") && (t.messages_in_conversation_body = o.bytes === String ? i.base64.encode(e.messages_in_conversation_body, 0, e.messages_in_conversation_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.messages_in_conversation_body) : e.messages_in_conversation_body), e.get_messages_checkinfo_in_conversation_body != null && e.hasOwnProperty("get_messages_checkinfo_in_conversation_body") && (t.get_messages_checkinfo_in_conversation_body = o.bytes === String ? i.base64.encode(e.get_messages_checkinfo_in_conversation_body, 0, e.get_messages_checkinfo_in_conversation_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_messages_checkinfo_in_conversation_body) : e.get_messages_checkinfo_in_conversation_body), e.new_message_notify != null && e.hasOwnProperty("new_message_notify") && (t.new_message_notify = a.pigeon.ResponseBasic.NewMessageNotify.toObject(e.new_message_notify, o)), e.new_p2p_message_notify != null && e.hasOwnProperty("new_p2p_message_notify") && (t.new_p2p_message_notify = o.bytes === String ? i.base64.encode(e.new_p2p_message_notify, 0, e.new_p2p_message_notify.length) : o.bytes === Array ? Array.prototype.slice.call(e.new_p2p_message_notify) : e.new_p2p_message_notify), e.conversation_participants_body != null && e.hasOwnProperty("conversation_participants_body") && (t.conversation_participants_body = o.bytes === String ? i.base64.encode(e.conversation_participants_body, 0, e.conversation_participants_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.conversation_participants_body) : e.conversation_participants_body), e.create_conversation_v2_body != null && e.hasOwnProperty("create_conversation_v2_body") && (t.create_conversation_v2_body = a.pigeon.ResponseBasic.CreateConversationV2ResponseBody.toObject(e.create_conversation_v2_body, o)), e.get_conversation_info_list_v2_body != null && e.hasOwnProperty("get_conversation_info_list_v2_body") && (t.get_conversation_info_list_v2_body = a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody.toObject(e.get_conversation_info_list_v2_body, o)), e.get_conversation_info_list_by_favorite_v2_body != null && e.hasOwnProperty("get_conversation_info_list_by_favorite_v2_body") && (t.get_conversation_info_list_by_favorite_v2_body = o.bytes === String ? i.base64.encode(e.get_conversation_info_list_by_favorite_v2_body, 0, e.get_conversation_info_list_by_favorite_v2_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_conversation_info_list_by_favorite_v2_body) : e.get_conversation_info_list_by_favorite_v2_body), e.get_conversation_info_list_by_top_v2_body != null && e.hasOwnProperty("get_conversation_info_list_by_top_v2_body") && (t.get_conversation_info_list_by_top_v2_body = o.bytes === String ? i.base64.encode(e.get_conversation_info_list_by_top_v2_body, 0, e.get_conversation_info_list_by_top_v2_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_conversation_info_list_by_top_v2_body) : e.get_conversation_info_list_by_top_v2_body), e.get_conversations_checkinfo_body != null && e.hasOwnProperty("get_conversations_checkinfo_body") && (t.get_conversations_checkinfo_body = o.bytes === String ? i.base64.encode(e.get_conversations_checkinfo_body, 0, e.get_conversations_checkinfo_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_conversations_checkinfo_body) : e.get_conversations_checkinfo_body), e.conversation_add_participants_body != null && e.hasOwnProperty("conversation_add_participants_body") && (t.conversation_add_participants_body = a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.toObject(e.conversation_add_participants_body, o)), e.conversation_remove_participants_body != null && e.hasOwnProperty("conversation_remove_participants_body") && (t.conversation_remove_participants_body = a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.toObject(e.conversation_remove_participants_body, o)), e.mget_conversation_participants_body != null && e.hasOwnProperty("mget_conversation_participants_body") && (t.mget_conversation_participants_body = o.bytes === String ? i.base64.encode(e.mget_conversation_participants_body, 0, e.mget_conversation_participants_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.mget_conversation_participants_body) : e.mget_conversation_participants_body), e.update_conversation_participant_body != null && e.hasOwnProperty("update_conversation_participant_body") && (t.update_conversation_participant_body = o.bytes === String ? i.base64.encode(e.update_conversation_participant_body, 0, e.update_conversation_participant_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.update_conversation_participant_body) : e.update_conversation_participant_body), e.recall_message_body != null && e.hasOwnProperty("recall_message_body") && (t.recall_message_body = o.bytes === String ? i.base64.encode(e.recall_message_body, 0, e.recall_message_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.recall_message_body) : e.recall_message_body), e.modify_message_property_body != null && e.hasOwnProperty("modify_message_property_body") && (t.modify_message_property_body = a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody.toObject(e.modify_message_property_body, o)), e.get_conversation_core_info_body != null && e.hasOwnProperty("get_conversation_core_info_body") && (t.get_conversation_core_info_body = o.bytes === String ? i.base64.encode(e.get_conversation_core_info_body, 0, e.get_conversation_core_info_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_conversation_core_info_body) : e.get_conversation_core_info_body), e.set_conversation_core_info_body != null && e.hasOwnProperty("set_conversation_core_info_body") && (t.set_conversation_core_info_body = o.bytes === String ? i.base64.encode(e.set_conversation_core_info_body, 0, e.set_conversation_core_info_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.set_conversation_core_info_body) : e.set_conversation_core_info_body), e.upsert_conversation_core_ext_info_body != null && e.hasOwnProperty("upsert_conversation_core_ext_info_body") && (t.upsert_conversation_core_ext_info_body = o.bytes === String ? i.base64.encode(e.upsert_conversation_core_ext_info_body, 0, e.upsert_conversation_core_ext_info_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.upsert_conversation_core_ext_info_body) : e.upsert_conversation_core_ext_info_body), e.set_conversation_setting_info_body != null && e.hasOwnProperty("set_conversation_setting_info_body") && (t.set_conversation_setting_info_body = o.bytes === String ? i.base64.encode(e.set_conversation_setting_info_body, 0, e.set_conversation_setting_info_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.set_conversation_setting_info_body) : e.set_conversation_setting_info_body), e.upsert_conversation_setting_ext_info_body != null && e.hasOwnProperty("upsert_conversation_setting_ext_info_body") && (t.upsert_conversation_setting_ext_info_body = o.bytes === String ? i.base64.encode(e.upsert_conversation_setting_ext_info_body, 0, e.upsert_conversation_setting_ext_info_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.upsert_conversation_setting_ext_info_body) : e.upsert_conversation_setting_ext_info_body), e.get_stranger_conversation_body != null && e.hasOwnProperty("get_stranger_conversation_body") && (t.get_stranger_conversation_body = a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody.toObject(e.get_stranger_conversation_body, o)), e.get_stranger_messages_body != null && e.hasOwnProperty("get_stranger_messages_body") && (t.get_stranger_messages_body = o.bytes === String ? i.base64.encode(e.get_stranger_messages_body, 0, e.get_stranger_messages_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_stranger_messages_body) : e.get_stranger_messages_body), e.participants_read_index_body != null && e.hasOwnProperty("participants_read_index_body") && (t.participants_read_index_body = o.bytes === String ? i.base64.encode(e.participants_read_index_body, 0, e.participants_read_index_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.participants_read_index_body) : e.participants_read_index_body), e.participants_min_index_body != null && e.hasOwnProperty("participants_min_index_body") && (t.participants_min_index_body = o.bytes === String ? i.base64.encode(e.participants_min_index_body, 0, e.participants_min_index_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.participants_min_index_body) : e.participants_min_index_body), e.get_upload_token_body != null && e.hasOwnProperty("get_upload_token_body") && (t.get_upload_token_body = o.bytes === String ? i.base64.encode(e.get_upload_token_body, 0, e.get_upload_token_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_upload_token_body) : e.get_upload_token_body), e.get_media_urls_body != null && e.hasOwnProperty("get_media_urls_body") && (t.get_media_urls_body = o.bytes === String ? i.base64.encode(e.get_media_urls_body, 0, e.get_media_urls_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_media_urls_body) : e.get_media_urls_body), e.get_ticket_body != null && e.hasOwnProperty("get_ticket_body") && (t.get_ticket_body = o.bytes === String ? i.base64.encode(e.get_ticket_body, 0, e.get_ticket_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_ticket_body) : e.get_ticket_body), e.get_conversation_list_body != null && e.hasOwnProperty("get_conversation_list_body") && (t.get_conversation_list_body = a.pigeon.ResponseBasic.GetUserConversationListResponseBody.toObject(e.get_conversation_list_body, o)), e.broadcast_send_message_body != null && e.hasOwnProperty("broadcast_send_message_body") && (t.broadcast_send_message_body = o.bytes === String ? i.base64.encode(e.broadcast_send_message_body, 0, e.broadcast_send_message_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.broadcast_send_message_body) : e.broadcast_send_message_body), e.broadcast_recv_message_body != null && e.hasOwnProperty("broadcast_recv_message_body") && (t.broadcast_recv_message_body = o.bytes === String ? i.base64.encode(e.broadcast_recv_message_body, 0, e.broadcast_recv_message_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.broadcast_recv_message_body) : e.broadcast_recv_message_body), e.broadcast_user_counter_body != null && e.hasOwnProperty("broadcast_user_counter_body") && (t.broadcast_user_counter_body = o.bytes === String ? i.base64.encode(e.broadcast_user_counter_body, 0, e.broadcast_user_counter_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.broadcast_user_counter_body) : e.broadcast_user_counter_body), e.create_voip_body != null && e.hasOwnProperty("create_voip_body") && (t.create_voip_body = o.bytes === String ? i.base64.encode(e.create_voip_body, 0, e.create_voip_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.create_voip_body) : e.create_voip_body), e.call_voip_body != null && e.hasOwnProperty("call_voip_body") && (t.call_voip_body = o.bytes === String ? i.base64.encode(e.call_voip_body, 0, e.call_voip_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.call_voip_body) : e.call_voip_body), e.update_voip_body != null && e.hasOwnProperty("update_voip_body") && (t.update_voip_body = o.bytes === String ? i.base64.encode(e.update_voip_body, 0, e.update_voip_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.update_voip_body) : e.update_voip_body), e.profile_get_info != null && e.hasOwnProperty("profile_get_info") && (t.profile_get_info = o.bytes === String ? i.base64.encode(e.profile_get_info, 0, e.profile_get_info.length) : o.bytes === Array ? Array.prototype.slice.call(e.profile_get_info) : e.profile_get_info), e.get_configs_body != null && e.hasOwnProperty("get_configs_body") && (t.get_configs_body = o.bytes === String ? i.base64.encode(e.get_configs_body, 0, e.get_configs_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_configs_body) : e.get_configs_body), e.unread_count_report_body != null && e.hasOwnProperty("unread_count_report_body") && (t.unread_count_report_body = o.bytes === String ? i.base64.encode(e.unread_count_report_body, 0, e.unread_count_report_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.unread_count_report_body) : e.unread_count_report_body), e.block_members_body != null && e.hasOwnProperty("block_members_body") && (t.block_members_body = a.pigeon.ResponseBasic.BlockMembersResponseBody.toObject(e.block_members_body, o)), e.get_unread_count_body != null && e.hasOwnProperty("get_unread_count_body") && (t.get_unread_count_body = o.bytes === String ? i.base64.encode(e.get_unread_count_body, 0, e.get_unread_count_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_unread_count_body) : e.get_unread_count_body), e.send_message_p2p_body != null && e.hasOwnProperty("send_message_p2p_body") && (t.send_message_p2p_body = o.bytes === String ? i.base64.encode(e.send_message_p2p_body, 0, e.send_message_p2p_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.send_message_p2p_body) : e.send_message_p2p_body), e.get_blocklist_body != null && e.hasOwnProperty("get_blocklist_body") && (t.get_blocklist_body = o.bytes === String ? i.base64.encode(e.get_blocklist_body, 0, e.get_blocklist_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.get_blocklist_body) : e.get_blocklist_body), e.set_blocklist_body != null && e.hasOwnProperty("set_blocklist_body") && (t.set_blocklist_body = o.bytes === String ? i.base64.encode(e.set_blocklist_body, 0, e.set_blocklist_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.set_blocklist_body) : e.set_blocklist_body), e.check_in_blocklist_body != null && e.hasOwnProperty("check_in_blocklist_body") && (t.check_in_blocklist_body = o.bytes === String ? i.base64.encode(e.check_in_blocklist_body, 0, e.check_in_blocklist_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.check_in_blocklist_body) : e.check_in_blocklist_body), e.mark_message_body != null && e.hasOwnProperty("mark_message_body") && (t.mark_message_body = o.bytes === String ? i.base64.encode(e.mark_message_body, 0, e.mark_message_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.mark_message_body) : e.mark_message_body), e.pull_mark_message_body != null && e.hasOwnProperty("pull_mark_message_body") && (t.pull_mark_message_body = o.bytes === String ? i.base64.encode(e.pull_mark_message_body, 0, e.pull_mark_message_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.pull_mark_message_body) : e.pull_mark_message_body), e.batch_get_conversation_participants_readindex != null && e.hasOwnProperty("batch_get_conversation_participants_readindex") && (t.batch_get_conversation_participants_readindex = o.bytes === String ? i.base64.encode(e.batch_get_conversation_participants_readindex, 0, e.batch_get_conversation_participants_readindex.length) : o.bytes === Array ? Array.prototype.slice.call(e.batch_get_conversation_participants_readindex) : e.batch_get_conversation_participants_readindex), e.message_by_init != null && e.hasOwnProperty("message_by_init") && (t.message_by_init = o.bytes === String ? i.base64.encode(e.message_by_init, 0, e.message_by_init.length) : o.bytes === Array ? Array.prototype.slice.call(e.message_by_init) : e.message_by_init), e.mark_msg_unread_count_report != null && e.hasOwnProperty("mark_msg_unread_count_report") && (t.mark_msg_unread_count_report = o.bytes === String ? i.base64.encode(e.mark_msg_unread_count_report, 0, e.mark_msg_unread_count_report.length) : o.bytes === Array ? Array.prototype.slice.call(e.mark_msg_unread_count_report) : e.mark_msg_unread_count_report), e.mark_msg_get_unread_count != null && e.hasOwnProperty("mark_msg_get_unread_count") && (t.mark_msg_get_unread_count = o.bytes === String ? i.base64.encode(e.mark_msg_get_unread_count, 0, e.mark_msg_get_unread_count.length) : o.bytes === Array ? Array.prototype.slice.call(e.mark_msg_get_unread_count) : e.mark_msg_get_unread_count), e.batch_unmark_message != null && e.hasOwnProperty("batch_unmark_message") && (t.batch_unmark_message = o.bytes === String ? i.base64.encode(e.batch_unmark_message, 0, e.batch_unmark_message.length) : o.bytes === Array ? Array.prototype.slice.call(e.batch_unmark_message) : e.batch_unmark_message), e.audio_recognition_body != null && e.hasOwnProperty("audio_recognition_body") && (t.audio_recognition_body = o.bytes === String ? i.base64.encode(e.audio_recognition_body, 0, e.audio_recognition_body.length) : o.bytes === Array ? Array.prototype.slice.call(e.audio_recognition_body) : e.audio_recognition_body), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ResponseBody"
				}, _
			}(), l.GetConversationInfoListV2ResponseBody = function() {
				function _(s) {
					if (this.conversations = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversations = i.emptyArray, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.conversations != null && e.conversations.length)
						for (let t = 0; t < e.conversations.length; ++t) a.pigeon.ResponseBasic.ConversationInfoV2.encode(e.conversations[t], o.uint32(10)
								.fork())
							.ldelim();
					return o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversations && n.conversations.length || (n.conversations = []),
									n.conversations.push(a.pigeon.ResponseBasic.ConversationInfoV2.decode(e, e.uint32()));
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversations != null && e.hasOwnProperty("conversations")) {
						if (!Array.isArray(e.conversations)) return "conversations: array expected";
						for (let o = 0; o < e.conversations.length; ++o) {
							let t = a.pigeon.ResponseBasic.ConversationInfoV2.verify(e.conversations[o]);
							if (t) return "conversations." + t
						}
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody;
					if (e.conversations) {
						if (!Array.isArray(e.conversations)) throw TypeError(".pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody.conversations: array expected");
						o.conversations = [];
						for (let t = 0; t < e.conversations.length; ++t) {
							if (typeof e.conversations[t] != "object") throw TypeError(".pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody.conversations: object expected");
							o.conversations[t] = a.pigeon.ResponseBasic.ConversationInfoV2.fromObject(e.conversations[t])
						}
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.conversations = []), e.conversations && e.conversations.length) {
						t.conversations = [];
						for (let n = 0; n < e.conversations.length; ++n) t.conversations[n] = a.pigeon.ResponseBasic.ConversationInfoV2.toObject(e.conversations[n], o)
					}
					return t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.GetConversationInfoListV2ResponseBody"
				}, _
			}(), l.ConversationInfoV2 = function() {
				function _(s) {
					if (s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation_id = "", _.prototype.conversation_short_id = 0, _.prototype.conversation_type = 0, _.prototype.ticket = "", _.prototype.first_page_participants = null, _.prototype.participants_count = 0, _.prototype.is_participant = !1, _.prototype.inbox_type = 0, _.prototype.badge_count = 0, _.prototype.user_info = i.newBuffer([]), _.prototype.conversation_core_info = null, _.prototype.conversation_setting_info = null, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					return o || (o = x.create()), e.conversation_id != null && Object.hasOwnProperty.call(e, "conversation_id") && o.uint32(10)
						.string(e.conversation_id), e.conversation_short_id != null && Object.hasOwnProperty.call(e, "conversation_short_id") && o.uint32(16)
						.uint64(e.conversation_short_id), e.conversation_type != null && Object.hasOwnProperty.call(e, "conversation_type") && o.uint32(24)
						.uint32(e.conversation_type), e.ticket != null && Object.hasOwnProperty.call(e, "ticket") && o.uint32(34)
						.string(e.ticket), e.first_page_participants != null && Object.hasOwnProperty.call(e, "first_page_participants") && a.pigeon.ResponseBasic.ParticipantsPage.encode(e.first_page_participants, o.uint32(50)
							.fork())
						.ldelim(), e.participants_count != null && Object.hasOwnProperty.call(e, "participants_count") && o.uint32(56)
						.uint32(e.participants_count), e.is_participant != null && Object.hasOwnProperty.call(e, "is_participant") && o.uint32(64)
						.bool(e.is_participant), e.inbox_type != null && Object.hasOwnProperty.call(e, "inbox_type") && o.uint32(72)
						.uint32(e.inbox_type), e.badge_count != null && Object.hasOwnProperty.call(e, "badge_count") && o.uint32(80)
						.uint32(e.badge_count), e.user_info != null && Object.hasOwnProperty.call(e, "user_info") && o.uint32(162)
						.bytes(e.user_info), e.conversation_core_info != null && Object.hasOwnProperty.call(e, "conversation_core_info") && a.pigeon.ResponseBasic.ConversationCoreInfo.encode(e.conversation_core_info, o.uint32(402)
							.fork())
						.ldelim(), e.conversation_setting_info != null && Object.hasOwnProperty.call(e, "conversation_setting_info") && a.pigeon.ResponseBasic.ConversationSettingInfo.encode(e.conversation_setting_info, o.uint32(410)
							.fork())
						.ldelim(), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ConversationInfoV2;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversation_id = e.string();
									break
								}
							case 2:
								{
									n.conversation_short_id = e.uint64();
									break
								}
							case 3:
								{
									n.conversation_type = e.uint32();
									break
								}
							case 4:
								{
									n.ticket = e.string();
									break
								}
							case 6:
								{
									n.first_page_participants = a.pigeon.ResponseBasic.ParticipantsPage.decode(e, e.uint32());
									break
								}
							case 7:
								{
									n.participants_count = e.uint32();
									break
								}
							case 8:
								{
									n.is_participant = e.bool();
									break
								}
							case 9:
								{
									n.inbox_type = e.uint32();
									break
								}
							case 10:
								{
									n.badge_count = e.uint32();
									break
								}
							case 20:
								{
									n.user_info = e.bytes();
									break
								}
							case 50:
								{
									n.conversation_core_info = a.pigeon.ResponseBasic.ConversationCoreInfo.decode(e, e.uint32());
									break
								}
							case 51:
								{
									n.conversation_setting_info = a.pigeon.ResponseBasic.ConversationSettingInfo.decode(e, e.uint32());
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && !i.isString(e.conversation_id)) return "conversation_id: string expected";
					if (e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && !i.isInteger(e.conversation_short_id) && !(e.conversation_short_id && i.isInteger(e.conversation_short_id.low) && i.isInteger(e.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
					if (e.conversation_type != null && e.hasOwnProperty("conversation_type") && !i.isInteger(e.conversation_type)) return "conversation_type: integer expected";
					if (e.ticket != null && e.hasOwnProperty("ticket") && !i.isString(e.ticket)) return "ticket: string expected";
					if (e.first_page_participants != null && e.hasOwnProperty("first_page_participants")) {
						let o = a.pigeon.ResponseBasic.ParticipantsPage.verify(e.first_page_participants);
						if (o) return "first_page_participants." + o
					}
					if (e.participants_count != null && e.hasOwnProperty("participants_count") && !i.isInteger(e.participants_count)) return "participants_count: integer expected";
					if (e.is_participant != null && e.hasOwnProperty("is_participant") && typeof e.is_participant != "boolean") return "is_participant: boolean expected";
					if (e.inbox_type != null && e.hasOwnProperty("inbox_type") && !i.isInteger(e.inbox_type)) return "inbox_type: integer expected";
					if (e.badge_count != null && e.hasOwnProperty("badge_count") && !i.isInteger(e.badge_count)) return "badge_count: integer expected";
					if (e.user_info != null && e.hasOwnProperty("user_info") && !(e.user_info && typeof e.user_info.length == "number" || i.isString(e.user_info))) return "user_info: buffer expected";
					if (e.conversation_core_info != null && e.hasOwnProperty("conversation_core_info")) {
						let o = a.pigeon.ResponseBasic.ConversationCoreInfo.verify(e.conversation_core_info);
						if (o) return "conversation_core_info." + o
					}
					if (e.conversation_setting_info != null && e.hasOwnProperty("conversation_setting_info")) {
						let o = a.pigeon.ResponseBasic.ConversationSettingInfo.verify(e.conversation_setting_info);
						if (o) return "conversation_setting_info." + o
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ConversationInfoV2) return e;
					let o = new a.pigeon.ResponseBasic.ConversationInfoV2;
					if (e.conversation_id != null && (o.conversation_id = String(e.conversation_id)), e.conversation_short_id != null && (i.Long ? (o.conversation_short_id = i.Long.fromValue(e.conversation_short_id))
						.unsigned = !0 : typeof e.conversation_short_id == "string" ? o.conversation_short_id = parseInt(e.conversation_short_id, 10) : typeof e.conversation_short_id == "number" ? o.conversation_short_id = e.conversation_short_id : typeof e.conversation_short_id == "object" && (o.conversation_short_id = new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
							.toNumber(!0))), e.conversation_type != null && (o.conversation_type = e.conversation_type >>> 0), e.ticket != null && (o.ticket = String(e.ticket)), e.first_page_participants != null) {
						if (typeof e.first_page_participants != "object") throw TypeError(".pigeon.ResponseBasic.ConversationInfoV2.first_page_participants: object expected");
						o.first_page_participants = a.pigeon.ResponseBasic.ParticipantsPage.fromObject(e.first_page_participants)
					}
					if (e.participants_count != null && (o.participants_count = e.participants_count >>> 0), e.is_participant != null && (o.is_participant = !!e.is_participant), e.inbox_type != null && (o.inbox_type = e.inbox_type >>> 0), e.badge_count != null && (o.badge_count = e.badge_count >>> 0), e.user_info != null && (typeof e.user_info == "string" ? i.base64.decode(e.user_info, o.user_info = i.newBuffer(i.base64.length(e.user_info)), 0) : e.user_info.length >= 0 && (o.user_info = e.user_info)), e.conversation_core_info != null) {
						if (typeof e.conversation_core_info != "object") throw TypeError(".pigeon.ResponseBasic.ConversationInfoV2.conversation_core_info: object expected");
						o.conversation_core_info = a.pigeon.ResponseBasic.ConversationCoreInfo.fromObject(e.conversation_core_info)
					}
					if (e.conversation_setting_info != null) {
						if (typeof e.conversation_setting_info != "object") throw TypeError(".pigeon.ResponseBasic.ConversationInfoV2.conversation_setting_info: object expected");
						o.conversation_setting_info = a.pigeon.ResponseBasic.ConversationSettingInfo.fromObject(e.conversation_setting_info)
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if (o.defaults) {
						if (t.conversation_id = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.conversation_short_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.conversation_short_id = o.longs === String ? "0" : 0;
						t.conversation_type = 0, t.ticket = "", t.first_page_participants = null, t.participants_count = 0, t.is_participant = !1, t.inbox_type = 0, t.badge_count = 0, o.bytes === String ? t.user_info = "" : (t.user_info = [], o.bytes !== Array && (t.user_info = i.newBuffer(t.user_info))), t.conversation_core_info = null, t.conversation_setting_info = null
					}
					return e.conversation_id != null && e.hasOwnProperty("conversation_id") && (t.conversation_id = e.conversation_id), e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && (typeof e.conversation_short_id == "number" ? t.conversation_short_id = o.longs === String ? String(e.conversation_short_id) : e.conversation_short_id : t.conversation_short_id = o.longs === String ? i.Long.prototype.toString.call(e.conversation_short_id) : o.longs === Number ? new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
						.toNumber(!0) : e.conversation_short_id), e.conversation_type != null && e.hasOwnProperty("conversation_type") && (t.conversation_type = e.conversation_type), e.ticket != null && e.hasOwnProperty("ticket") && (t.ticket = e.ticket), e.first_page_participants != null && e.hasOwnProperty("first_page_participants") && (t.first_page_participants = a.pigeon.ResponseBasic.ParticipantsPage.toObject(e.first_page_participants, o)), e.participants_count != null && e.hasOwnProperty("participants_count") && (t.participants_count = e.participants_count), e.is_participant != null && e.hasOwnProperty("is_participant") && (t.is_participant = e.is_participant), e.inbox_type != null && e.hasOwnProperty("inbox_type") && (t.inbox_type = e.inbox_type), e.badge_count != null && e.hasOwnProperty("badge_count") && (t.badge_count = e.badge_count), e.user_info != null && e.hasOwnProperty("user_info") && (t.user_info = o.bytes === String ? i.base64.encode(e.user_info, 0, e.user_info.length) : o.bytes === Array ? Array.prototype.slice.call(e.user_info) : e.user_info), e.conversation_core_info != null && e.hasOwnProperty("conversation_core_info") && (t.conversation_core_info = a.pigeon.ResponseBasic.ConversationCoreInfo.toObject(e.conversation_core_info, o)), e.conversation_setting_info != null && e.hasOwnProperty("conversation_setting_info") && (t.conversation_setting_info = a.pigeon.ResponseBasic.ConversationSettingInfo.toObject(e.conversation_setting_info, o)), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ConversationInfoV2"
				}, _
			}(), l.GetStrangerConversationListResponseBody = function() {
				function _(s) {
					if (this.conversations = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.next_cursor = 0, _.prototype.has_more = !1, _.prototype.total_unread = 0, _.prototype.conversations = i.emptyArray, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.next_cursor != null && Object.hasOwnProperty.call(e, "next_cursor") && o.uint32(8)
						.uint64(e.next_cursor), e.has_more != null && Object.hasOwnProperty.call(e, "has_more") && o.uint32(16)
						.bool(e.has_more), e.total_unread != null && Object.hasOwnProperty.call(e, "total_unread") && o.uint32(24)
						.uint32(e.total_unread), e.conversations != null && e.conversations.length)
						for (let t = 0; t < e.conversations.length; ++t) a.pigeon.ResponseBasic.StrangerConversation.encode(e.conversations[t], o.uint32(34)
								.fork())
							.ldelim();
					return o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.next_cursor = e.uint64();
									break
								}
							case 2:
								{
									n.has_more = e.bool();
									break
								}
							case 3:
								{
									n.total_unread = e.uint32();
									break
								}
							case 4:
								{
									n.conversations && n.conversations.length || (n.conversations = []),
									n.conversations.push(a.pigeon.ResponseBasic.StrangerConversation.decode(e, e.uint32()));
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.next_cursor != null && e.hasOwnProperty("next_cursor") && !i.isInteger(e.next_cursor) && !(e.next_cursor && i.isInteger(e.next_cursor.low) && i.isInteger(e.next_cursor.high))) return "next_cursor: integer|Long expected";
					if (e.has_more != null && e.hasOwnProperty("has_more") && typeof e.has_more != "boolean") return "has_more: boolean expected";
					if (e.total_unread != null && e.hasOwnProperty("total_unread") && !i.isInteger(e.total_unread)) return "total_unread: integer expected";
					if (e.conversations != null && e.hasOwnProperty("conversations")) {
						if (!Array.isArray(e.conversations)) return "conversations: array expected";
						for (let o = 0; o < e.conversations.length; ++o) {
							let t = a.pigeon.ResponseBasic.StrangerConversation.verify(e.conversations[o]);
							if (t) return "conversations." + t
						}
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.GetStrangerConversationListResponseBody;
					if (e.next_cursor != null && (i.Long ? (o.next_cursor = i.Long.fromValue(e.next_cursor))
						.unsigned = !0 : typeof e.next_cursor == "string" ? o.next_cursor = parseInt(e.next_cursor, 10) : typeof e.next_cursor == "number" ? o.next_cursor = e.next_cursor : typeof e.next_cursor == "object" && (o.next_cursor = new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
							.toNumber(!0))), e.has_more != null && (o.has_more = !!e.has_more), e.total_unread != null && (o.total_unread = e.total_unread >>> 0), e.conversations) {
						if (!Array.isArray(e.conversations)) throw TypeError(".pigeon.ResponseBasic.GetStrangerConversationListResponseBody.conversations: array expected");
						o.conversations = [];
						for (let t = 0; t < e.conversations.length; ++t) {
							if (typeof e.conversations[t] != "object") throw TypeError(".pigeon.ResponseBasic.GetStrangerConversationListResponseBody.conversations: object expected");
							o.conversations[t] = a.pigeon.ResponseBasic.StrangerConversation.fromObject(e.conversations[t])
						}
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.conversations = []), o.defaults) {
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.next_cursor = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.next_cursor = o.longs === String ? "0" : 0;
						t.has_more = !1, t.total_unread = 0
					}
					if (e.next_cursor != null && e.hasOwnProperty("next_cursor") && (typeof e.next_cursor == "number" ? t.next_cursor = o.longs === String ? String(e.next_cursor) : e.next_cursor : t.next_cursor = o.longs === String ? i.Long.prototype.toString.call(e.next_cursor) : o.longs === Number ? new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
						.toNumber(!0) : e.next_cursor), e.has_more != null && e.hasOwnProperty("has_more") && (t.has_more = e.has_more), e.total_unread != null && e.hasOwnProperty("total_unread") && (t.total_unread = e.total_unread), e.conversations && e.conversations.length) {
						t.conversations = [];
						for (let n = 0; n < e.conversations.length; ++n) t.conversations[n] = a.pigeon.ResponseBasic.StrangerConversation.toObject(e.conversations[n], o)
					}
					return t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.GetStrangerConversationListResponseBody"
				}, _
			}(), l.StrangerConversation = function() {
				function _(s) {
					if (this.messages = [], this.participants = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation_short_id = 0, _.prototype.unread = 0, _.prototype.messages = i.emptyArray, _.prototype.conversation_id = "", _.prototype.participants = i.emptyArray, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.conversation_short_id != null && Object.hasOwnProperty.call(e, "conversation_short_id") && o.uint32(8)
						.uint64(e.conversation_short_id), e.unread != null && Object.hasOwnProperty.call(e, "unread") && o.uint32(16)
						.uint32(e.unread), e.messages != null && e.messages.length)
						for (let t = 0; t < e.messages.length; ++t) a.pigeon.ResponseBasic.MessageBody.encode(e.messages[t], o.uint32(26)
								.fork())
							.ldelim();
					if (e.conversation_id != null && Object.hasOwnProperty.call(e, "conversation_id") && o.uint32(34)
						.string(e.conversation_id), e.participants != null && e.participants.length)
						for (let t = 0; t < e.participants.length; ++t) a.pigeon.ResponseBasic.Participant.encode(e.participants[t], o.uint32(42)
								.fork())
							.ldelim();
					return o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.StrangerConversation;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversation_short_id = e.uint64();
									break
								}
							case 2:
								{
									n.unread = e.uint32();
									break
								}
							case 3:
								{
									n.messages && n.messages.length || (n.messages = []),
									n.messages.push(a.pigeon.ResponseBasic.MessageBody.decode(e, e.uint32()));
									break
								}
							case 4:
								{
									n.conversation_id = e.string();
									break
								}
							case 5:
								{
									n.participants && n.participants.length || (n.participants = []),
									n.participants.push(a.pigeon.ResponseBasic.Participant.decode(e, e.uint32()));
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && !i.isInteger(e.conversation_short_id) && !(e.conversation_short_id && i.isInteger(e.conversation_short_id.low) && i.isInteger(e.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
					if (e.unread != null && e.hasOwnProperty("unread") && !i.isInteger(e.unread)) return "unread: integer expected";
					if (e.messages != null && e.hasOwnProperty("messages")) {
						if (!Array.isArray(e.messages)) return "messages: array expected";
						for (let o = 0; o < e.messages.length; ++o) {
							let t = a.pigeon.ResponseBasic.MessageBody.verify(e.messages[o]);
							if (t) return "messages." + t
						}
					}
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && !i.isString(e.conversation_id)) return "conversation_id: string expected";
					if (e.participants != null && e.hasOwnProperty("participants")) {
						if (!Array.isArray(e.participants)) return "participants: array expected";
						for (let o = 0; o < e.participants.length; ++o) {
							let t = a.pigeon.ResponseBasic.Participant.verify(e.participants[o]);
							if (t) return "participants." + t
						}
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.StrangerConversation) return e;
					let o = new a.pigeon.ResponseBasic.StrangerConversation;
					if (e.conversation_short_id != null && (i.Long ? (o.conversation_short_id = i.Long.fromValue(e.conversation_short_id))
						.unsigned = !0 : typeof e.conversation_short_id == "string" ? o.conversation_short_id = parseInt(e.conversation_short_id, 10) : typeof e.conversation_short_id == "number" ? o.conversation_short_id = e.conversation_short_id : typeof e.conversation_short_id == "object" && (o.conversation_short_id = new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
							.toNumber(!0))), e.unread != null && (o.unread = e.unread >>> 0), e.messages) {
						if (!Array.isArray(e.messages)) throw TypeError(".pigeon.ResponseBasic.StrangerConversation.messages: array expected");
						o.messages = [];
						for (let t = 0; t < e.messages.length; ++t) {
							if (typeof e.messages[t] != "object") throw TypeError(".pigeon.ResponseBasic.StrangerConversation.messages: object expected");
							o.messages[t] = a.pigeon.ResponseBasic.MessageBody.fromObject(e.messages[t])
						}
					}
					if (e.conversation_id != null && (o.conversation_id = String(e.conversation_id)), e.participants) {
						if (!Array.isArray(e.participants)) throw TypeError(".pigeon.ResponseBasic.StrangerConversation.participants: array expected");
						o.participants = [];
						for (let t = 0; t < e.participants.length; ++t) {
							if (typeof e.participants[t] != "object") throw TypeError(".pigeon.ResponseBasic.StrangerConversation.participants: object expected");
							o.participants[t] = a.pigeon.ResponseBasic.Participant.fromObject(e.participants[t])
						}
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.messages = [], t.participants = []), o.defaults) {
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.conversation_short_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.conversation_short_id = o.longs === String ? "0" : 0;
						t.unread = 0, t.conversation_id = ""
					}
					if (e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && (typeof e.conversation_short_id == "number" ? t.conversation_short_id = o.longs === String ? String(e.conversation_short_id) : e.conversation_short_id : t.conversation_short_id = o.longs === String ? i.Long.prototype.toString.call(e.conversation_short_id) : o.longs === Number ? new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
						.toNumber(!0) : e.conversation_short_id), e.unread != null && e.hasOwnProperty("unread") && (t.unread = e.unread), e.messages && e.messages.length) {
						t.messages = [];
						for (let n = 0; n < e.messages.length; ++n) t.messages[n] = a.pigeon.ResponseBasic.MessageBody.toObject(e.messages[n], o)
					}
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && (t.conversation_id = e.conversation_id), e.participants && e.participants.length) {
						t.participants = [];
						for (let n = 0; n < e.participants.length; ++n) t.participants[n] = a.pigeon.ResponseBasic.Participant.toObject(e.participants[n], o)
					}
					return t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.StrangerConversation"
				}, _
			}(), l.ParticipantsPage = function() {
				function _(s) {
					if (this.participants = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.participants = i.emptyArray, _.prototype.has_more = !1, _.prototype.cursor = 0, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.participants != null && e.participants.length)
						for (let t = 0; t < e.participants.length; ++t) a.pigeon.ResponseBasic.Participant.encode(e.participants[t], o.uint32(10)
								.fork())
							.ldelim();
					return e.has_more != null && Object.hasOwnProperty.call(e, "has_more") && o.uint32(16)
						.bool(e.has_more), e.cursor != null && Object.hasOwnProperty.call(e, "cursor") && o.uint32(24)
						.uint64(e.cursor), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ParticipantsPage;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.participants && n.participants.length || (n.participants = []),
									n.participants.push(a.pigeon.ResponseBasic.Participant.decode(e, e.uint32()));
									break
								}
							case 2:
								{
									n.has_more = e.bool();
									break
								}
							case 3:
								{
									n.cursor = e.uint64();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.participants != null && e.hasOwnProperty("participants")) {
						if (!Array.isArray(e.participants)) return "participants: array expected";
						for (let o = 0; o < e.participants.length; ++o) {
							let t = a.pigeon.ResponseBasic.Participant.verify(e.participants[o]);
							if (t) return "participants." + t
						}
					}
					return e.has_more != null && e.hasOwnProperty("has_more") && typeof e.has_more != "boolean" ? "has_more: boolean expected" : e.cursor != null && e.hasOwnProperty("cursor") && !i.isInteger(e.cursor) && !(e.cursor && i.isInteger(e.cursor.low) && i.isInteger(e.cursor.high)) ? "cursor: integer|Long expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ParticipantsPage) return e;
					let o = new a.pigeon.ResponseBasic.ParticipantsPage;
					if (e.participants) {
						if (!Array.isArray(e.participants)) throw TypeError(".pigeon.ResponseBasic.ParticipantsPage.participants: array expected");
						o.participants = [];
						for (let t = 0; t < e.participants.length; ++t) {
							if (typeof e.participants[t] != "object") throw TypeError(".pigeon.ResponseBasic.ParticipantsPage.participants: object expected");
							o.participants[t] = a.pigeon.ResponseBasic.Participant.fromObject(e.participants[t])
						}
					}
					return e.has_more != null && (o.has_more = !!e.has_more), e.cursor != null && (i.Long ? (o.cursor = i.Long.fromValue(e.cursor))
						.unsigned = !0 : typeof e.cursor == "string" ? o.cursor = parseInt(e.cursor, 10) : typeof e.cursor == "number" ? o.cursor = e.cursor : typeof e.cursor == "object" && (o.cursor = new i.LongBits(e.cursor.low >>> 0, e.cursor.high >>> 0)
							.toNumber(!0))), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.participants = []), o.defaults)
						if (t.has_more = !1, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.cursor = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.cursor = o.longs === String ? "0" : 0;
					if (e.participants && e.participants.length) {
						t.participants = [];
						for (let n = 0; n < e.participants.length; ++n) t.participants[n] = a.pigeon.ResponseBasic.Participant.toObject(e.participants[n], o)
					}
					return e.has_more != null && e.hasOwnProperty("has_more") && (t.has_more = e.has_more), e.cursor != null && e.hasOwnProperty("cursor") && (typeof e.cursor == "number" ? t.cursor = o.longs === String ? String(e.cursor) : e.cursor : t.cursor = o.longs === String ? i.Long.prototype.toString.call(e.cursor) : o.longs === Number ? new i.LongBits(e.cursor.low >>> 0, e.cursor.high >>> 0)
						.toNumber(!0) : e.cursor), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ParticipantsPage"
				}, _
			}(), l.Participant = function() {
				function _(s) {
					if (this.ext = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.user_id = 0, _.prototype.sort_order = 0, _.prototype.role = 0, _.prototype.alias = "", _.prototype.sec_uid = "", _.prototype.blocked = 0, _.prototype.left_block_time = 0, _.prototype.ext = i.emptyArray, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.user_id != null && Object.hasOwnProperty.call(e, "user_id") && o.uint32(8)
						.uint64(e.user_id), e.sort_order != null && Object.hasOwnProperty.call(e, "sort_order") && o.uint32(16)
						.uint64(e.sort_order), e.role != null && Object.hasOwnProperty.call(e, "role") && o.uint32(24)
						.uint32(e.role), e.alias != null && Object.hasOwnProperty.call(e, "alias") && o.uint32(34)
						.string(e.alias), e.sec_uid != null && Object.hasOwnProperty.call(e, "sec_uid") && o.uint32(42)
						.string(e.sec_uid), e.blocked != null && Object.hasOwnProperty.call(e, "blocked") && o.uint32(48)
						.uint32(e.blocked), e.left_block_time != null && Object.hasOwnProperty.call(e, "left_block_time") && o.uint32(56)
						.uint64(e.left_block_time), e.ext != null && e.ext.length)
						for (let t = 0; t < e.ext.length; ++t) a.pigeon.StringKeyValue.encode(e.ext[t], o.uint32(66)
								.fork())
							.ldelim();
					return o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.Participant;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.user_id = e.uint64();
									break
								}
							case 2:
								{
									n.sort_order = e.uint64();
									break
								}
							case 3:
								{
									n.role = e.uint32();
									break
								}
							case 4:
								{
									n.alias = e.string();
									break
								}
							case 5:
								{
									n.sec_uid = e.string();
									break
								}
							case 6:
								{
									n.blocked = e.uint32();
									break
								}
							case 7:
								{
									n.left_block_time = e.uint64();
									break
								}
							case 8:
								{
									n.ext && n.ext.length || (n.ext = []),
									n.ext.push(a.pigeon.StringKeyValue.decode(e, e.uint32()));
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.user_id != null && e.hasOwnProperty("user_id") && !i.isInteger(e.user_id) && !(e.user_id && i.isInteger(e.user_id.low) && i.isInteger(e.user_id.high))) return "user_id: integer|Long expected";
					if (e.sort_order != null && e.hasOwnProperty("sort_order") && !i.isInteger(e.sort_order) && !(e.sort_order && i.isInteger(e.sort_order.low) && i.isInteger(e.sort_order.high))) return "sort_order: integer|Long expected";
					if (e.role != null && e.hasOwnProperty("role") && !i.isInteger(e.role)) return "role: integer expected";
					if (e.alias != null && e.hasOwnProperty("alias") && !i.isString(e.alias)) return "alias: string expected";
					if (e.sec_uid != null && e.hasOwnProperty("sec_uid") && !i.isString(e.sec_uid)) return "sec_uid: string expected";
					if (e.blocked != null && e.hasOwnProperty("blocked") && !i.isInteger(e.blocked)) return "blocked: integer expected";
					if (e.left_block_time != null && e.hasOwnProperty("left_block_time") && !i.isInteger(e.left_block_time) && !(e.left_block_time && i.isInteger(e.left_block_time.low) && i.isInteger(e.left_block_time.high))) return "left_block_time: integer|Long expected";
					if (e.ext != null && e.hasOwnProperty("ext")) {
						if (!Array.isArray(e.ext)) return "ext: array expected";
						for (let o = 0; o < e.ext.length; ++o) {
							let t = a.pigeon.StringKeyValue.verify(e.ext[o]);
							if (t) return "ext." + t
						}
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.Participant) return e;
					let o = new a.pigeon.ResponseBasic.Participant;
					if (e.user_id != null && (i.Long ? (o.user_id = i.Long.fromValue(e.user_id))
						.unsigned = !0 : typeof e.user_id == "string" ? o.user_id = parseInt(e.user_id, 10) : typeof e.user_id == "number" ? o.user_id = e.user_id : typeof e.user_id == "object" && (o.user_id = new i.LongBits(e.user_id.low >>> 0, e.user_id.high >>> 0)
							.toNumber(!0))), e.sort_order != null && (i.Long ? (o.sort_order = i.Long.fromValue(e.sort_order))
						.unsigned = !0 : typeof e.sort_order == "string" ? o.sort_order = parseInt(e.sort_order, 10) : typeof e.sort_order == "number" ? o.sort_order = e.sort_order : typeof e.sort_order == "object" && (o.sort_order = new i.LongBits(e.sort_order.low >>> 0, e.sort_order.high >>> 0)
							.toNumber(!0))), e.role != null && (o.role = e.role >>> 0), e.alias != null && (o.alias = String(e.alias)), e.sec_uid != null && (o.sec_uid = String(e.sec_uid)), e.blocked != null && (o.blocked = e.blocked >>> 0), e.left_block_time != null && (i.Long ? (o.left_block_time = i.Long.fromValue(e.left_block_time))
						.unsigned = !0 : typeof e.left_block_time == "string" ? o.left_block_time = parseInt(e.left_block_time, 10) : typeof e.left_block_time == "number" ? o.left_block_time = e.left_block_time : typeof e.left_block_time == "object" && (o.left_block_time = new i.LongBits(e.left_block_time.low >>> 0, e.left_block_time.high >>> 0)
							.toNumber(!0))), e.ext) {
						if (!Array.isArray(e.ext)) throw TypeError(".pigeon.ResponseBasic.Participant.ext: array expected");
						o.ext = [];
						for (let t = 0; t < e.ext.length; ++t) {
							if (typeof e.ext[t] != "object") throw TypeError(".pigeon.ResponseBasic.Participant.ext: object expected");
							o.ext[t] = a.pigeon.StringKeyValue.fromObject(e.ext[t])
						}
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.ext = []), o.defaults) {
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.user_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.user_id = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.sort_order = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.sort_order = o.longs === String ? "0" : 0;
						if (t.role = 0, t.alias = "", t.sec_uid = "", t.blocked = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.left_block_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.left_block_time = o.longs === String ? "0" : 0
					}
					if (e.user_id != null && e.hasOwnProperty("user_id") && (typeof e.user_id == "number" ? t.user_id = o.longs === String ? String(e.user_id) : e.user_id : t.user_id = o.longs === String ? i.Long.prototype.toString.call(e.user_id) : o.longs === Number ? new i.LongBits(e.user_id.low >>> 0, e.user_id.high >>> 0)
						.toNumber(!0) : e.user_id), e.sort_order != null && e.hasOwnProperty("sort_order") && (typeof e.sort_order == "number" ? t.sort_order = o.longs === String ? String(e.sort_order) : e.sort_order : t.sort_order = o.longs === String ? i.Long.prototype.toString.call(e.sort_order) : o.longs === Number ? new i.LongBits(e.sort_order.low >>> 0, e.sort_order.high >>> 0)
						.toNumber(!0) : e.sort_order), e.role != null && e.hasOwnProperty("role") && (t.role = e.role), e.alias != null && e.hasOwnProperty("alias") && (t.alias = e.alias), e.sec_uid != null && e.hasOwnProperty("sec_uid") && (t.sec_uid = e.sec_uid), e.blocked != null && e.hasOwnProperty("blocked") && (t.blocked = e.blocked), e.left_block_time != null && e.hasOwnProperty("left_block_time") && (typeof e.left_block_time == "number" ? t.left_block_time = o.longs === String ? String(e.left_block_time) : e.left_block_time : t.left_block_time = o.longs === String ? i.Long.prototype.toString.call(e.left_block_time) : o.longs === Number ? new i.LongBits(e.left_block_time.low >>> 0, e.left_block_time.high >>> 0)
						.toNumber(!0) : e.left_block_time), e.ext && e.ext.length) {
						t.ext = [];
						for (let n = 0; n < e.ext.length; ++n) t.ext[n] = a.pigeon.StringKeyValue.toObject(e.ext[n], o)
					}
					return t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.Participant"
				}, _
			}(), l.ConversationCoreInfo = function() {
				function _(s) {
					if (this.ext = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation_id = "", _.prototype.conversation_short_id = 0, _.prototype.conversation_type = 0, _.prototype.info_version = 0, _.prototype.name = "", _.prototype.desc = "", _.prototype.icon = "", _.prototype.inbox_type = 0, _.prototype.notice = "", _.prototype.ext = i.emptyArray, _.prototype.owner = 0, _.prototype.sec_owner = "", _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.conversation_id != null && Object.hasOwnProperty.call(e, "conversation_id") && o.uint32(10)
						.string(e.conversation_id), e.conversation_short_id != null && Object.hasOwnProperty.call(e, "conversation_short_id") && o.uint32(16)
						.uint64(e.conversation_short_id), e.conversation_type != null && Object.hasOwnProperty.call(e, "conversation_type") && o.uint32(24)
						.uint32(e.conversation_type), e.info_version != null && Object.hasOwnProperty.call(e, "info_version") && o.uint32(32)
						.uint64(e.info_version), e.name != null && Object.hasOwnProperty.call(e, "name") && o.uint32(42)
						.string(e.name), e.desc != null && Object.hasOwnProperty.call(e, "desc") && o.uint32(50)
						.string(e.desc), e.icon != null && Object.hasOwnProperty.call(e, "icon") && o.uint32(58)
						.string(e.icon), e.inbox_type != null && Object.hasOwnProperty.call(e, "inbox_type") && o.uint32(64)
						.uint32(e.inbox_type), e.notice != null && Object.hasOwnProperty.call(e, "notice") && o.uint32(74)
						.string(e.notice), e.ext != null && e.ext.length)
						for (let t = 0; t < e.ext.length; ++t) a.pigeon.StringKeyValue.encode(e.ext[t], o.uint32(90)
								.fork())
							.ldelim();
					return e.owner != null && Object.hasOwnProperty.call(e, "owner") && o.uint32(96)
						.uint64(e.owner), e.sec_owner != null && Object.hasOwnProperty.call(e, "sec_owner") && o.uint32(106)
						.string(e.sec_owner), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ConversationCoreInfo;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversation_id = e.string();
									break
								}
							case 2:
								{
									n.conversation_short_id = e.uint64();
									break
								}
							case 3:
								{
									n.conversation_type = e.uint32();
									break
								}
							case 4:
								{
									n.info_version = e.uint64();
									break
								}
							case 5:
								{
									n.name = e.string();
									break
								}
							case 6:
								{
									n.desc = e.string();
									break
								}
							case 7:
								{
									n.icon = e.string();
									break
								}
							case 8:
								{
									n.inbox_type = e.uint32();
									break
								}
							case 9:
								{
									n.notice = e.string();
									break
								}
							case 11:
								{
									n.ext && n.ext.length || (n.ext = []),
									n.ext.push(a.pigeon.StringKeyValue.decode(e, e.uint32()));
									break
								}
							case 12:
								{
									n.owner = e.uint64();
									break
								}
							case 13:
								{
									n.sec_owner = e.string();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && !i.isString(e.conversation_id)) return "conversation_id: string expected";
					if (e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && !i.isInteger(e.conversation_short_id) && !(e.conversation_short_id && i.isInteger(e.conversation_short_id.low) && i.isInteger(e.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
					if (e.conversation_type != null && e.hasOwnProperty("conversation_type") && !i.isInteger(e.conversation_type)) return "conversation_type: integer expected";
					if (e.info_version != null && e.hasOwnProperty("info_version") && !i.isInteger(e.info_version) && !(e.info_version && i.isInteger(e.info_version.low) && i.isInteger(e.info_version.high))) return "info_version: integer|Long expected";
					if (e.name != null && e.hasOwnProperty("name") && !i.isString(e.name)) return "name: string expected";
					if (e.desc != null && e.hasOwnProperty("desc") && !i.isString(e.desc)) return "desc: string expected";
					if (e.icon != null && e.hasOwnProperty("icon") && !i.isString(e.icon)) return "icon: string expected";
					if (e.inbox_type != null && e.hasOwnProperty("inbox_type") && !i.isInteger(e.inbox_type)) return "inbox_type: integer expected";
					if (e.notice != null && e.hasOwnProperty("notice") && !i.isString(e.notice)) return "notice: string expected";
					if (e.ext != null && e.hasOwnProperty("ext")) {
						if (!Array.isArray(e.ext)) return "ext: array expected";
						for (let o = 0; o < e.ext.length; ++o) {
							let t = a.pigeon.StringKeyValue.verify(e.ext[o]);
							if (t) return "ext." + t
						}
					}
					return e.owner != null && e.hasOwnProperty("owner") && !i.isInteger(e.owner) && !(e.owner && i.isInteger(e.owner.low) && i.isInteger(e.owner.high)) ? "owner: integer|Long expected" : e.sec_owner != null && e.hasOwnProperty("sec_owner") && !i.isString(e.sec_owner) ? "sec_owner: string expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ConversationCoreInfo) return e;
					let o = new a.pigeon.ResponseBasic.ConversationCoreInfo;
					if (e.conversation_id != null && (o.conversation_id = String(e.conversation_id)), e.conversation_short_id != null && (i.Long ? (o.conversation_short_id = i.Long.fromValue(e.conversation_short_id))
						.unsigned = !0 : typeof e.conversation_short_id == "string" ? o.conversation_short_id = parseInt(e.conversation_short_id, 10) : typeof e.conversation_short_id == "number" ? o.conversation_short_id = e.conversation_short_id : typeof e.conversation_short_id == "object" && (o.conversation_short_id = new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
							.toNumber(!0))), e.conversation_type != null && (o.conversation_type = e.conversation_type >>> 0), e.info_version != null && (i.Long ? (o.info_version = i.Long.fromValue(e.info_version))
						.unsigned = !0 : typeof e.info_version == "string" ? o.info_version = parseInt(e.info_version, 10) : typeof e.info_version == "number" ? o.info_version = e.info_version : typeof e.info_version == "object" && (o.info_version = new i.LongBits(e.info_version.low >>> 0, e.info_version.high >>> 0)
							.toNumber(!0))), e.name != null && (o.name = String(e.name)), e.desc != null && (o.desc = String(e.desc)), e.icon != null && (o.icon = String(e.icon)), e.inbox_type != null && (o.inbox_type = e.inbox_type >>> 0), e.notice != null && (o.notice = String(e.notice)), e.ext) {
						if (!Array.isArray(e.ext)) throw TypeError(".pigeon.ResponseBasic.ConversationCoreInfo.ext: array expected");
						o.ext = [];
						for (let t = 0; t < e.ext.length; ++t) {
							if (typeof e.ext[t] != "object") throw TypeError(".pigeon.ResponseBasic.ConversationCoreInfo.ext: object expected");
							o.ext[t] = a.pigeon.StringKeyValue.fromObject(e.ext[t])
						}
					}
					return e.owner != null && (i.Long ? (o.owner = i.Long.fromValue(e.owner))
						.unsigned = !0 : typeof e.owner == "string" ? o.owner = parseInt(e.owner, 10) : typeof e.owner == "number" ? o.owner = e.owner : typeof e.owner == "object" && (o.owner = new i.LongBits(e.owner.low >>> 0, e.owner.high >>> 0)
							.toNumber(!0))), e.sec_owner != null && (o.sec_owner = String(e.sec_owner)), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.ext = []), o.defaults) {
						if (t.conversation_id = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.conversation_short_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.conversation_short_id = o.longs === String ? "0" : 0;
						if (t.conversation_type = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.info_version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.info_version = o.longs === String ? "0" : 0;
						if (t.name = "", t.desc = "", t.icon = "", t.inbox_type = 0, t.notice = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.owner = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.owner = o.longs === String ? "0" : 0;
						t.sec_owner = ""
					}
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && (t.conversation_id = e.conversation_id), e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && (typeof e.conversation_short_id == "number" ? t.conversation_short_id = o.longs === String ? String(e.conversation_short_id) : e.conversation_short_id : t.conversation_short_id = o.longs === String ? i.Long.prototype.toString.call(e.conversation_short_id) : o.longs === Number ? new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
						.toNumber(!0) : e.conversation_short_id), e.conversation_type != null && e.hasOwnProperty("conversation_type") && (t.conversation_type = e.conversation_type), e.info_version != null && e.hasOwnProperty("info_version") && (typeof e.info_version == "number" ? t.info_version = o.longs === String ? String(e.info_version) : e.info_version : t.info_version = o.longs === String ? i.Long.prototype.toString.call(e.info_version) : o.longs === Number ? new i.LongBits(e.info_version.low >>> 0, e.info_version.high >>> 0)
						.toNumber(!0) : e.info_version), e.name != null && e.hasOwnProperty("name") && (t.name = e.name), e.desc != null && e.hasOwnProperty("desc") && (t.desc = e.desc), e.icon != null && e.hasOwnProperty("icon") && (t.icon = e.icon), e.inbox_type != null && e.hasOwnProperty("inbox_type") && (t.inbox_type = e.inbox_type), e.notice != null && e.hasOwnProperty("notice") && (t.notice = e.notice), e.ext && e.ext.length) {
						t.ext = [];
						for (let n = 0; n < e.ext.length; ++n) t.ext[n] = a.pigeon.StringKeyValue.toObject(e.ext[n], o)
					}
					return e.owner != null && e.hasOwnProperty("owner") && (typeof e.owner == "number" ? t.owner = o.longs === String ? String(e.owner) : e.owner : t.owner = o.longs === String ? i.Long.prototype.toString.call(e.owner) : o.longs === Number ? new i.LongBits(e.owner.low >>> 0, e.owner.high >>> 0)
						.toNumber(!0) : e.owner), e.sec_owner != null && e.hasOwnProperty("sec_owner") && (t.sec_owner = e.sec_owner), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ConversationCoreInfo"
				}, _
			}(), l.ConversationSettingInfo = function() {
				function _(s) {
					if (this.ext = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation_id = "", _.prototype.conversation_short_id = 0, _.prototype.conversation_type = 0, _.prototype.min_index = 0, _.prototype.read_index = 0, _.prototype.mute = 0, _.prototype.stick_on_top = 0, _.prototype.inbox_type = 0, _.prototype.ext = i.emptyArray, _.prototype.setting_version = 0, _.prototype.favorite = 0, _.prototype.set_top_time = 0, _.prototype.set_favorite_time = 0, _.prototype.read_index_v2 = 0, _.prototype.min_index_v2 = 0, _.prototype.read_badge_count = 0, _.prototype.mute_read_badge_count_infos = i.newBuffer([]), _.prototype.push_status = 0, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.conversation_id != null && Object.hasOwnProperty.call(e, "conversation_id") && o.uint32(10)
						.string(e.conversation_id), e.conversation_short_id != null && Object.hasOwnProperty.call(e, "conversation_short_id") && o.uint32(16)
						.uint64(e.conversation_short_id), e.conversation_type != null && Object.hasOwnProperty.call(e, "conversation_type") && o.uint32(24)
						.uint32(e.conversation_type), e.min_index != null && Object.hasOwnProperty.call(e, "min_index") && o.uint32(32)
						.uint64(e.min_index), e.read_index != null && Object.hasOwnProperty.call(e, "read_index") && o.uint32(40)
						.uint64(e.read_index), e.mute != null && Object.hasOwnProperty.call(e, "mute") && o.uint32(48)
						.uint32(e.mute), e.stick_on_top != null && Object.hasOwnProperty.call(e, "stick_on_top") && o.uint32(56)
						.uint32(e.stick_on_top), e.inbox_type != null && Object.hasOwnProperty.call(e, "inbox_type") && o.uint32(64)
						.uint32(e.inbox_type), e.ext != null && e.ext.length)
						for (let t = 0; t < e.ext.length; ++t) a.pigeon.StringKeyValue.encode(e.ext[t], o.uint32(74)
								.fork())
							.ldelim();
					return e.setting_version != null && Object.hasOwnProperty.call(e, "setting_version") && o.uint32(80)
						.uint64(e.setting_version), e.favorite != null && Object.hasOwnProperty.call(e, "favorite") && o.uint32(88)
						.uint32(e.favorite), e.set_top_time != null && Object.hasOwnProperty.call(e, "set_top_time") && o.uint32(96)
						.uint64(e.set_top_time), e.set_favorite_time != null && Object.hasOwnProperty.call(e, "set_favorite_time") && o.uint32(104)
						.uint64(e.set_favorite_time), e.read_index_v2 != null && Object.hasOwnProperty.call(e, "read_index_v2") && o.uint32(112)
						.uint64(e.read_index_v2), e.min_index_v2 != null && Object.hasOwnProperty.call(e, "min_index_v2") && o.uint32(120)
						.uint64(e.min_index_v2), e.read_badge_count != null && Object.hasOwnProperty.call(e, "read_badge_count") && o.uint32(128)
						.uint32(e.read_badge_count), e.mute_read_badge_count_infos != null && Object.hasOwnProperty.call(e, "mute_read_badge_count_infos") && o.uint32(138)
						.bytes(e.mute_read_badge_count_infos), e.push_status != null && Object.hasOwnProperty.call(e, "push_status") && o.uint32(240)
						.uint32(e.push_status), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ConversationSettingInfo;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversation_id = e.string();
									break
								}
							case 2:
								{
									n.conversation_short_id = e.uint64();
									break
								}
							case 3:
								{
									n.conversation_type = e.uint32();
									break
								}
							case 4:
								{
									n.min_index = e.uint64();
									break
								}
							case 5:
								{
									n.read_index = e.uint64();
									break
								}
							case 6:
								{
									n.mute = e.uint32();
									break
								}
							case 7:
								{
									n.stick_on_top = e.uint32();
									break
								}
							case 8:
								{
									n.inbox_type = e.uint32();
									break
								}
							case 9:
								{
									n.ext && n.ext.length || (n.ext = []),
									n.ext.push(a.pigeon.StringKeyValue.decode(e, e.uint32()));
									break
								}
							case 10:
								{
									n.setting_version = e.uint64();
									break
								}
							case 11:
								{
									n.favorite = e.uint32();
									break
								}
							case 12:
								{
									n.set_top_time = e.uint64();
									break
								}
							case 13:
								{
									n.set_favorite_time = e.uint64();
									break
								}
							case 14:
								{
									n.read_index_v2 = e.uint64();
									break
								}
							case 15:
								{
									n.min_index_v2 = e.uint64();
									break
								}
							case 16:
								{
									n.read_badge_count = e.uint32();
									break
								}
							case 17:
								{
									n.mute_read_badge_count_infos = e.bytes();
									break
								}
							case 30:
								{
									n.push_status = e.uint32();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && !i.isString(e.conversation_id)) return "conversation_id: string expected";
					if (e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && !i.isInteger(e.conversation_short_id) && !(e.conversation_short_id && i.isInteger(e.conversation_short_id.low) && i.isInteger(e.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
					if (e.conversation_type != null && e.hasOwnProperty("conversation_type") && !i.isInteger(e.conversation_type)) return "conversation_type: integer expected";
					if (e.min_index != null && e.hasOwnProperty("min_index") && !i.isInteger(e.min_index) && !(e.min_index && i.isInteger(e.min_index.low) && i.isInteger(e.min_index.high))) return "min_index: integer|Long expected";
					if (e.read_index != null && e.hasOwnProperty("read_index") && !i.isInteger(e.read_index) && !(e.read_index && i.isInteger(e.read_index.low) && i.isInteger(e.read_index.high))) return "read_index: integer|Long expected";
					if (e.mute != null && e.hasOwnProperty("mute") && !i.isInteger(e.mute)) return "mute: integer expected";
					if (e.stick_on_top != null && e.hasOwnProperty("stick_on_top") && !i.isInteger(e.stick_on_top)) return "stick_on_top: integer expected";
					if (e.inbox_type != null && e.hasOwnProperty("inbox_type") && !i.isInteger(e.inbox_type)) return "inbox_type: integer expected";
					if (e.ext != null && e.hasOwnProperty("ext")) {
						if (!Array.isArray(e.ext)) return "ext: array expected";
						for (let o = 0; o < e.ext.length; ++o) {
							let t = a.pigeon.StringKeyValue.verify(e.ext[o]);
							if (t) return "ext." + t
						}
					}
					return e.setting_version != null && e.hasOwnProperty("setting_version") && !i.isInteger(e.setting_version) && !(e.setting_version && i.isInteger(e.setting_version.low) && i.isInteger(e.setting_version.high)) ? "setting_version: integer|Long expected" : e.favorite != null && e.hasOwnProperty("favorite") && !i.isInteger(e.favorite) ? "favorite: integer expected" : e.set_top_time != null && e.hasOwnProperty("set_top_time") && !i.isInteger(e.set_top_time) && !(e.set_top_time && i.isInteger(e.set_top_time.low) && i.isInteger(e.set_top_time.high)) ? "set_top_time: integer|Long expected" : e.set_favorite_time != null && e.hasOwnProperty("set_favorite_time") && !i.isInteger(e.set_favorite_time) && !(e.set_favorite_time && i.isInteger(e.set_favorite_time.low) && i.isInteger(e.set_favorite_time.high)) ? "set_favorite_time: integer|Long expected" : e.read_index_v2 != null && e.hasOwnProperty("read_index_v2") && !i.isInteger(e.read_index_v2) && !(e.read_index_v2 && i.isInteger(e.read_index_v2.low) && i.isInteger(e.read_index_v2.high)) ? "read_index_v2: integer|Long expected" : e.min_index_v2 != null && e.hasOwnProperty("min_index_v2") && !i.isInteger(e.min_index_v2) && !(e.min_index_v2 && i.isInteger(e.min_index_v2.low) && i.isInteger(e.min_index_v2.high)) ? "min_index_v2: integer|Long expected" : e.read_badge_count != null && e.hasOwnProperty("read_badge_count") && !i.isInteger(e.read_badge_count) ? "read_badge_count: integer expected" : e.mute_read_badge_count_infos != null && e.hasOwnProperty("mute_read_badge_count_infos") && !(e.mute_read_badge_count_infos && typeof e.mute_read_badge_count_infos.length == "number" || i.isString(e.mute_read_badge_count_infos)) ? "mute_read_badge_count_infos: buffer expected" : e.push_status != null && e.hasOwnProperty("push_status") && !i.isInteger(e.push_status) ? "push_status: integer expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ConversationSettingInfo) return e;
					let o = new a.pigeon.ResponseBasic.ConversationSettingInfo;
					if (e.conversation_id != null && (o.conversation_id = String(e.conversation_id)), e.conversation_short_id != null && (i.Long ? (o.conversation_short_id = i.Long.fromValue(e.conversation_short_id))
						.unsigned = !0 : typeof e.conversation_short_id == "string" ? o.conversation_short_id = parseInt(e.conversation_short_id, 10) : typeof e.conversation_short_id == "number" ? o.conversation_short_id = e.conversation_short_id : typeof e.conversation_short_id == "object" && (o.conversation_short_id = new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
							.toNumber(!0))), e.conversation_type != null && (o.conversation_type = e.conversation_type >>> 0), e.min_index != null && (i.Long ? (o.min_index = i.Long.fromValue(e.min_index))
						.unsigned = !0 : typeof e.min_index == "string" ? o.min_index = parseInt(e.min_index, 10) : typeof e.min_index == "number" ? o.min_index = e.min_index : typeof e.min_index == "object" && (o.min_index = new i.LongBits(e.min_index.low >>> 0, e.min_index.high >>> 0)
							.toNumber(!0))), e.read_index != null && (i.Long ? (o.read_index = i.Long.fromValue(e.read_index))
						.unsigned = !0 : typeof e.read_index == "string" ? o.read_index = parseInt(e.read_index, 10) : typeof e.read_index == "number" ? o.read_index = e.read_index : typeof e.read_index == "object" && (o.read_index = new i.LongBits(e.read_index.low >>> 0, e.read_index.high >>> 0)
							.toNumber(!0))), e.mute != null && (o.mute = e.mute >>> 0), e.stick_on_top != null && (o.stick_on_top = e.stick_on_top >>> 0), e.inbox_type != null && (o.inbox_type = e.inbox_type >>> 0), e.ext) {
						if (!Array.isArray(e.ext)) throw TypeError(".pigeon.ResponseBasic.ConversationSettingInfo.ext: array expected");
						o.ext = [];
						for (let t = 0; t < e.ext.length; ++t) {
							if (typeof e.ext[t] != "object") throw TypeError(".pigeon.ResponseBasic.ConversationSettingInfo.ext: object expected");
							o.ext[t] = a.pigeon.StringKeyValue.fromObject(e.ext[t])
						}
					}
					return e.setting_version != null && (i.Long ? (o.setting_version = i.Long.fromValue(e.setting_version))
						.unsigned = !0 : typeof e.setting_version == "string" ? o.setting_version = parseInt(e.setting_version, 10) : typeof e.setting_version == "number" ? o.setting_version = e.setting_version : typeof e.setting_version == "object" && (o.setting_version = new i.LongBits(e.setting_version.low >>> 0, e.setting_version.high >>> 0)
							.toNumber(!0))), e.favorite != null && (o.favorite = e.favorite >>> 0), e.set_top_time != null && (i.Long ? (o.set_top_time = i.Long.fromValue(e.set_top_time))
						.unsigned = !0 : typeof e.set_top_time == "string" ? o.set_top_time = parseInt(e.set_top_time, 10) : typeof e.set_top_time == "number" ? o.set_top_time = e.set_top_time : typeof e.set_top_time == "object" && (o.set_top_time = new i.LongBits(e.set_top_time.low >>> 0, e.set_top_time.high >>> 0)
							.toNumber(!0))), e.set_favorite_time != null && (i.Long ? (o.set_favorite_time = i.Long.fromValue(e.set_favorite_time))
						.unsigned = !0 : typeof e.set_favorite_time == "string" ? o.set_favorite_time = parseInt(e.set_favorite_time, 10) : typeof e.set_favorite_time == "number" ? o.set_favorite_time = e.set_favorite_time : typeof e.set_favorite_time == "object" && (o.set_favorite_time = new i.LongBits(e.set_favorite_time.low >>> 0, e.set_favorite_time.high >>> 0)
							.toNumber(!0))), e.read_index_v2 != null && (i.Long ? (o.read_index_v2 = i.Long.fromValue(e.read_index_v2))
						.unsigned = !0 : typeof e.read_index_v2 == "string" ? o.read_index_v2 = parseInt(e.read_index_v2, 10) : typeof e.read_index_v2 == "number" ? o.read_index_v2 = e.read_index_v2 : typeof e.read_index_v2 == "object" && (o.read_index_v2 = new i.LongBits(e.read_index_v2.low >>> 0, e.read_index_v2.high >>> 0)
							.toNumber(!0))), e.min_index_v2 != null && (i.Long ? (o.min_index_v2 = i.Long.fromValue(e.min_index_v2))
						.unsigned = !0 : typeof e.min_index_v2 == "string" ? o.min_index_v2 = parseInt(e.min_index_v2, 10) : typeof e.min_index_v2 == "number" ? o.min_index_v2 = e.min_index_v2 : typeof e.min_index_v2 == "object" && (o.min_index_v2 = new i.LongBits(e.min_index_v2.low >>> 0, e.min_index_v2.high >>> 0)
							.toNumber(!0))), e.read_badge_count != null && (o.read_badge_count = e.read_badge_count >>> 0), e.mute_read_badge_count_infos != null && (typeof e.mute_read_badge_count_infos == "string" ? i.base64.decode(e.mute_read_badge_count_infos, o.mute_read_badge_count_infos = i.newBuffer(i.base64.length(e.mute_read_badge_count_infos)), 0) : e.mute_read_badge_count_infos.length >= 0 && (o.mute_read_badge_count_infos = e.mute_read_badge_count_infos)), e.push_status != null && (o.push_status = e.push_status >>> 0), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.ext = []), o.defaults) {
						if (t.conversation_id = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.conversation_short_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.conversation_short_id = o.longs === String ? "0" : 0;
						if (t.conversation_type = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.min_index = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.min_index = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.read_index = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.read_index = o.longs === String ? "0" : 0;
						if (t.mute = 0, t.stick_on_top = 0, t.inbox_type = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.setting_version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.setting_version = o.longs === String ? "0" : 0;
						if (t.favorite = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.set_top_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.set_top_time = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.set_favorite_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.set_favorite_time = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.read_index_v2 = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.read_index_v2 = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.min_index_v2 = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.min_index_v2 = o.longs === String ? "0" : 0;
						t.read_badge_count = 0, o.bytes === String ? t.mute_read_badge_count_infos = "" : (t.mute_read_badge_count_infos = [], o.bytes !== Array && (t.mute_read_badge_count_infos = i.newBuffer(t.mute_read_badge_count_infos))), t.push_status = 0
					}
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && (t.conversation_id = e.conversation_id), e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && (typeof e.conversation_short_id == "number" ? t.conversation_short_id = o.longs === String ? String(e.conversation_short_id) : e.conversation_short_id : t.conversation_short_id = o.longs === String ? i.Long.prototype.toString.call(e.conversation_short_id) : o.longs === Number ? new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
						.toNumber(!0) : e.conversation_short_id), e.conversation_type != null && e.hasOwnProperty("conversation_type") && (t.conversation_type = e.conversation_type), e.min_index != null && e.hasOwnProperty("min_index") && (typeof e.min_index == "number" ? t.min_index = o.longs === String ? String(e.min_index) : e.min_index : t.min_index = o.longs === String ? i.Long.prototype.toString.call(e.min_index) : o.longs === Number ? new i.LongBits(e.min_index.low >>> 0, e.min_index.high >>> 0)
						.toNumber(!0) : e.min_index), e.read_index != null && e.hasOwnProperty("read_index") && (typeof e.read_index == "number" ? t.read_index = o.longs === String ? String(e.read_index) : e.read_index : t.read_index = o.longs === String ? i.Long.prototype.toString.call(e.read_index) : o.longs === Number ? new i.LongBits(e.read_index.low >>> 0, e.read_index.high >>> 0)
						.toNumber(!0) : e.read_index), e.mute != null && e.hasOwnProperty("mute") && (t.mute = e.mute), e.stick_on_top != null && e.hasOwnProperty("stick_on_top") && (t.stick_on_top = e.stick_on_top), e.inbox_type != null && e.hasOwnProperty("inbox_type") && (t.inbox_type = e.inbox_type), e.ext && e.ext.length) {
						t.ext = [];
						for (let n = 0; n < e.ext.length; ++n) t.ext[n] = a.pigeon.StringKeyValue.toObject(e.ext[n], o)
					}
					return e.setting_version != null && e.hasOwnProperty("setting_version") && (typeof e.setting_version == "number" ? t.setting_version = o.longs === String ? String(e.setting_version) : e.setting_version : t.setting_version = o.longs === String ? i.Long.prototype.toString.call(e.setting_version) : o.longs === Number ? new i.LongBits(e.setting_version.low >>> 0, e.setting_version.high >>> 0)
						.toNumber(!0) : e.setting_version), e.favorite != null && e.hasOwnProperty("favorite") && (t.favorite = e.favorite), e.set_top_time != null && e.hasOwnProperty("set_top_time") && (typeof e.set_top_time == "number" ? t.set_top_time = o.longs === String ? String(e.set_top_time) : e.set_top_time : t.set_top_time = o.longs === String ? i.Long.prototype.toString.call(e.set_top_time) : o.longs === Number ? new i.LongBits(e.set_top_time.low >>> 0, e.set_top_time.high >>> 0)
						.toNumber(!0) : e.set_top_time), e.set_favorite_time != null && e.hasOwnProperty("set_favorite_time") && (typeof e.set_favorite_time == "number" ? t.set_favorite_time = o.longs === String ? String(e.set_favorite_time) : e.set_favorite_time : t.set_favorite_time = o.longs === String ? i.Long.prototype.toString.call(e.set_favorite_time) : o.longs === Number ? new i.LongBits(e.set_favorite_time.low >>> 0, e.set_favorite_time.high >>> 0)
						.toNumber(!0) : e.set_favorite_time), e.read_index_v2 != null && e.hasOwnProperty("read_index_v2") && (typeof e.read_index_v2 == "number" ? t.read_index_v2 = o.longs === String ? String(e.read_index_v2) : e.read_index_v2 : t.read_index_v2 = o.longs === String ? i.Long.prototype.toString.call(e.read_index_v2) : o.longs === Number ? new i.LongBits(e.read_index_v2.low >>> 0, e.read_index_v2.high >>> 0)
						.toNumber(!0) : e.read_index_v2), e.min_index_v2 != null && e.hasOwnProperty("min_index_v2") && (typeof e.min_index_v2 == "number" ? t.min_index_v2 = o.longs === String ? String(e.min_index_v2) : e.min_index_v2 : t.min_index_v2 = o.longs === String ? i.Long.prototype.toString.call(e.min_index_v2) : o.longs === Number ? new i.LongBits(e.min_index_v2.low >>> 0, e.min_index_v2.high >>> 0)
						.toNumber(!0) : e.min_index_v2), e.read_badge_count != null && e.hasOwnProperty("read_badge_count") && (t.read_badge_count = e.read_badge_count), e.mute_read_badge_count_infos != null && e.hasOwnProperty("mute_read_badge_count_infos") && (t.mute_read_badge_count_infos = o.bytes === String ? i.base64.encode(e.mute_read_badge_count_infos, 0, e.mute_read_badge_count_infos.length) : o.bytes === Array ? Array.prototype.slice.call(e.mute_read_badge_count_infos) : e.mute_read_badge_count_infos), e.push_status != null && e.hasOwnProperty("push_status") && (t.push_status = e.push_status), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ConversationSettingInfo"
				}, _
			}(), l.SendMessageResponseBody = function() {
				function _(s) {
					if (s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.serverMessageId = 0, _.prototype.extraInfo = "", _.prototype.status = 0, _.prototype.clientMessageId = "", _.prototype.checkCode = 0, _.prototype.checkMessage = "", _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					return o || (o = x.create()), e.serverMessageId != null && Object.hasOwnProperty.call(e, "serverMessageId") && o.uint32(8)
						.uint64(e.serverMessageId), e.extraInfo != null && Object.hasOwnProperty.call(e, "extraInfo") && o.uint32(18)
						.string(e.extraInfo), e.status != null && Object.hasOwnProperty.call(e, "status") && o.uint32(24)
						.uint32(e.status), e.clientMessageId != null && Object.hasOwnProperty.call(e, "clientMessageId") && o.uint32(34)
						.string(e.clientMessageId), e.checkCode != null && Object.hasOwnProperty.call(e, "checkCode") && o.uint32(40)
						.uint64(e.checkCode), e.checkMessage != null && Object.hasOwnProperty.call(e, "checkMessage") && o.uint32(50)
						.string(e.checkMessage), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.SendMessageResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.serverMessageId = e.uint64();
									break
								}
							case 2:
								{
									n.extraInfo = e.string();
									break
								}
							case 3:
								{
									n.status = e.uint32();
									break
								}
							case 4:
								{
									n.clientMessageId = e.string();
									break
								}
							case 5:
								{
									n.checkCode = e.uint64();
									break
								}
							case 6:
								{
									n.checkMessage = e.string();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					return typeof e != "object" || e === null ? "object expected" : e.serverMessageId != null && e.hasOwnProperty("serverMessageId") && !i.isInteger(e.serverMessageId) && !(e.serverMessageId && i.isInteger(e.serverMessageId.low) && i.isInteger(e.serverMessageId.high)) ? "serverMessageId: integer|Long expected" : e.extraInfo != null && e.hasOwnProperty("extraInfo") && !i.isString(e.extraInfo) ? "extraInfo: string expected" : e.status != null && e.hasOwnProperty("status") && !i.isInteger(e.status) ? "status: integer expected" : e.clientMessageId != null && e.hasOwnProperty("clientMessageId") && !i.isString(e.clientMessageId) ? "clientMessageId: string expected" : e.checkCode != null && e.hasOwnProperty("checkCode") && !i.isInteger(e.checkCode) && !(e.checkCode && i.isInteger(e.checkCode.low) && i.isInteger(e.checkCode.high)) ? "checkCode: integer|Long expected" : e.checkMessage != null && e.hasOwnProperty("checkMessage") && !i.isString(e.checkMessage) ? "checkMessage: string expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.SendMessageResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.SendMessageResponseBody;
					return e.serverMessageId != null && (i.Long ? (o.serverMessageId = i.Long.fromValue(e.serverMessageId))
						.unsigned = !0 : typeof e.serverMessageId == "string" ? o.serverMessageId = parseInt(e.serverMessageId, 10) : typeof e.serverMessageId == "number" ? o.serverMessageId = e.serverMessageId : typeof e.serverMessageId == "object" && (o.serverMessageId = new i.LongBits(e.serverMessageId.low >>> 0, e.serverMessageId.high >>> 0)
							.toNumber(!0))), e.extraInfo != null && (o.extraInfo = String(e.extraInfo)), e.status != null && (o.status = e.status >>> 0), e.clientMessageId != null && (o.clientMessageId = String(e.clientMessageId)), e.checkCode != null && (i.Long ? (o.checkCode = i.Long.fromValue(e.checkCode))
						.unsigned = !0 : typeof e.checkCode == "string" ? o.checkCode = parseInt(e.checkCode, 10) : typeof e.checkCode == "number" ? o.checkCode = e.checkCode : typeof e.checkCode == "object" && (o.checkCode = new i.LongBits(e.checkCode.low >>> 0, e.checkCode.high >>> 0)
							.toNumber(!0))), e.checkMessage != null && (o.checkMessage = String(e.checkMessage)), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if (o.defaults) {
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.serverMessageId = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.serverMessageId = o.longs === String ? "0" : 0;
						if (t.extraInfo = "", t.status = 0, t.clientMessageId = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.checkCode = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.checkCode = o.longs === String ? "0" : 0;
						t.checkMessage = ""
					}
					return e.serverMessageId != null && e.hasOwnProperty("serverMessageId") && (typeof e.serverMessageId == "number" ? t.serverMessageId = o.longs === String ? String(e.serverMessageId) : e.serverMessageId : t.serverMessageId = o.longs === String ? i.Long.prototype.toString.call(e.serverMessageId) : o.longs === Number ? new i.LongBits(e.serverMessageId.low >>> 0, e.serverMessageId.high >>> 0)
						.toNumber(!0) : e.serverMessageId), e.extraInfo != null && e.hasOwnProperty("extraInfo") && (t.extraInfo = e.extraInfo), e.status != null && e.hasOwnProperty("status") && (t.status = e.status), e.clientMessageId != null && e.hasOwnProperty("clientMessageId") && (t.clientMessageId = e.clientMessageId), e.checkCode != null && e.hasOwnProperty("checkCode") && (typeof e.checkCode == "number" ? t.checkCode = o.longs === String ? String(e.checkCode) : e.checkCode : t.checkCode = o.longs === String ? i.Long.prototype.toString.call(e.checkCode) : o.longs === Number ? new i.LongBits(e.checkCode.low >>> 0, e.checkCode.high >>> 0)
						.toNumber(!0) : e.checkCode), e.checkMessage != null && e.hasOwnProperty("checkMessage") && (t.checkMessage = e.checkMessage), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.SendMessageResponseBody"
				}, _
			}(), l.NewMessageNotify = function() {
				function _(s) {
					if (s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation_id = "", _.prototype.conversation_type = 0, _.prototype.notify_type = 0, _.prototype.message = null, _.prototype.previous_cursor = 0, _.prototype.next_cursor = 0, _.prototype.index_in_conversation = 0, _.prototype.index_in_conversation_v2 = 0, _.prototype.conversation_version = 0, _.prototype.previous_conversation_version = 0, _.prototype.cmd_message_index = 0, _.prototype.badge_count = 0, _.prototype.trace = i.newBuffer([]), _.prototype.ref_msg_info = i.newBuffer([]), _.prototype.previous_msg_index_in_conv = 0, _.prototype.readconv_version = 0, _.prototype.pre_readconv_version = 0, _.prototype.mute_badge_count_info = i.newBuffer([]), _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					return o || (o = x.create()), e.conversation_id != null && Object.hasOwnProperty.call(e, "conversation_id") && o.uint32(18)
						.string(e.conversation_id), e.conversation_type != null && Object.hasOwnProperty.call(e, "conversation_type") && o.uint32(24)
						.uint32(e.conversation_type), e.notify_type != null && Object.hasOwnProperty.call(e, "notify_type") && o.uint32(32)
						.uint32(e.notify_type), e.message != null && Object.hasOwnProperty.call(e, "message") && a.pigeon.ResponseBasic.MessageBody.encode(e.message, o.uint32(42)
							.fork())
						.ldelim(), e.previous_cursor != null && Object.hasOwnProperty.call(e, "previous_cursor") && o.uint32(48)
						.uint64(e.previous_cursor), e.next_cursor != null && Object.hasOwnProperty.call(e, "next_cursor") && o.uint32(56)
						.uint64(e.next_cursor), e.index_in_conversation != null && Object.hasOwnProperty.call(e, "index_in_conversation") && o.uint32(64)
						.uint64(e.index_in_conversation), e.index_in_conversation_v2 != null && Object.hasOwnProperty.call(e, "index_in_conversation_v2") && o.uint32(72)
						.uint64(e.index_in_conversation_v2), e.conversation_version != null && Object.hasOwnProperty.call(e, "conversation_version") && o.uint32(80)
						.uint64(e.conversation_version), e.previous_conversation_version != null && Object.hasOwnProperty.call(e, "previous_conversation_version") && o.uint32(88)
						.uint64(e.previous_conversation_version), e.cmd_message_index != null && Object.hasOwnProperty.call(e, "cmd_message_index") && o.uint32(96)
						.uint64(e.cmd_message_index), e.badge_count != null && Object.hasOwnProperty.call(e, "badge_count") && o.uint32(104)
						.uint32(e.badge_count), e.trace != null && Object.hasOwnProperty.call(e, "trace") && o.uint32(114)
						.bytes(e.trace), e.ref_msg_info != null && Object.hasOwnProperty.call(e, "ref_msg_info") && o.uint32(122)
						.bytes(e.ref_msg_info), e.previous_msg_index_in_conv != null && Object.hasOwnProperty.call(e, "previous_msg_index_in_conv") && o.uint32(128)
						.uint64(e.previous_msg_index_in_conv), e.readconv_version != null && Object.hasOwnProperty.call(e, "readconv_version") && o.uint32(136)
						.uint64(e.readconv_version), e.pre_readconv_version != null && Object.hasOwnProperty.call(e, "pre_readconv_version") && o.uint32(144)
						.uint64(e.pre_readconv_version), e.mute_badge_count_info != null && Object.hasOwnProperty.call(e, "mute_badge_count_info") && o.uint32(154)
						.bytes(e.mute_badge_count_info), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.NewMessageNotify;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 2:
								{
									n.conversation_id = e.string();
									break
								}
							case 3:
								{
									n.conversation_type = e.uint32();
									break
								}
							case 4:
								{
									n.notify_type = e.uint32();
									break
								}
							case 5:
								{
									n.message = a.pigeon.ResponseBasic.MessageBody.decode(e, e.uint32());
									break
								}
							case 6:
								{
									n.previous_cursor = e.uint64();
									break
								}
							case 7:
								{
									n.next_cursor = e.uint64();
									break
								}
							case 8:
								{
									n.index_in_conversation = e.uint64();
									break
								}
							case 9:
								{
									n.index_in_conversation_v2 = e.uint64();
									break
								}
							case 10:
								{
									n.conversation_version = e.uint64();
									break
								}
							case 11:
								{
									n.previous_conversation_version = e.uint64();
									break
								}
							case 12:
								{
									n.cmd_message_index = e.uint64();
									break
								}
							case 13:
								{
									n.badge_count = e.uint32();
									break
								}
							case 14:
								{
									n.trace = e.bytes();
									break
								}
							case 15:
								{
									n.ref_msg_info = e.bytes();
									break
								}
							case 16:
								{
									n.previous_msg_index_in_conv = e.uint64();
									break
								}
							case 17:
								{
									n.readconv_version = e.uint64();
									break
								}
							case 18:
								{
									n.pre_readconv_version = e.uint64();
									break
								}
							case 19:
								{
									n.mute_badge_count_info = e.bytes();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && !i.isString(e.conversation_id)) return "conversation_id: string expected";
					if (e.conversation_type != null && e.hasOwnProperty("conversation_type") && !i.isInteger(e.conversation_type)) return "conversation_type: integer expected";
					if (e.notify_type != null && e.hasOwnProperty("notify_type") && !i.isInteger(e.notify_type)) return "notify_type: integer expected";
					if (e.message != null && e.hasOwnProperty("message")) {
						let o = a.pigeon.ResponseBasic.MessageBody.verify(e.message);
						if (o) return "message." + o
					}
					return e.previous_cursor != null && e.hasOwnProperty("previous_cursor") && !i.isInteger(e.previous_cursor) && !(e.previous_cursor && i.isInteger(e.previous_cursor.low) && i.isInteger(e.previous_cursor.high)) ? "previous_cursor: integer|Long expected" : e.next_cursor != null && e.hasOwnProperty("next_cursor") && !i.isInteger(e.next_cursor) && !(e.next_cursor && i.isInteger(e.next_cursor.low) && i.isInteger(e.next_cursor.high)) ? "next_cursor: integer|Long expected" : e.index_in_conversation != null && e.hasOwnProperty("index_in_conversation") && !i.isInteger(e.index_in_conversation) && !(e.index_in_conversation && i.isInteger(e.index_in_conversation.low) && i.isInteger(e.index_in_conversation.high)) ? "index_in_conversation: integer|Long expected" : e.index_in_conversation_v2 != null && e.hasOwnProperty("index_in_conversation_v2") && !i.isInteger(e.index_in_conversation_v2) && !(e.index_in_conversation_v2 && i.isInteger(e.index_in_conversation_v2.low) && i.isInteger(e.index_in_conversation_v2.high)) ? "index_in_conversation_v2: integer|Long expected" : e.conversation_version != null && e.hasOwnProperty("conversation_version") && !i.isInteger(e.conversation_version) && !(e.conversation_version && i.isInteger(e.conversation_version.low) && i.isInteger(e.conversation_version.high)) ? "conversation_version: integer|Long expected" : e.previous_conversation_version != null && e.hasOwnProperty("previous_conversation_version") && !i.isInteger(e.previous_conversation_version) && !(e.previous_conversation_version && i.isInteger(e.previous_conversation_version.low) && i.isInteger(e.previous_conversation_version.high)) ? "previous_conversation_version: integer|Long expected" : e.cmd_message_index != null && e.hasOwnProperty("cmd_message_index") && !i.isInteger(e.cmd_message_index) && !(e.cmd_message_index && i.isInteger(e.cmd_message_index.low) && i.isInteger(e.cmd_message_index.high)) ? "cmd_message_index: integer|Long expected" : e.badge_count != null && e.hasOwnProperty("badge_count") && !i.isInteger(e.badge_count) ? "badge_count: integer expected" : e.trace != null && e.hasOwnProperty("trace") && !(e.trace && typeof e.trace.length == "number" || i.isString(e.trace)) ? "trace: buffer expected" : e.ref_msg_info != null && e.hasOwnProperty("ref_msg_info") && !(e.ref_msg_info && typeof e.ref_msg_info.length == "number" || i.isString(e.ref_msg_info)) ? "ref_msg_info: buffer expected" : e.previous_msg_index_in_conv != null && e.hasOwnProperty("previous_msg_index_in_conv") && !i.isInteger(e.previous_msg_index_in_conv) && !(e.previous_msg_index_in_conv && i.isInteger(e.previous_msg_index_in_conv.low) && i.isInteger(e.previous_msg_index_in_conv.high)) ? "previous_msg_index_in_conv: integer|Long expected" : e.readconv_version != null && e.hasOwnProperty("readconv_version") && !i.isInteger(e.readconv_version) && !(e.readconv_version && i.isInteger(e.readconv_version.low) && i.isInteger(e.readconv_version.high)) ? "readconv_version: integer|Long expected" : e.pre_readconv_version != null && e.hasOwnProperty("pre_readconv_version") && !i.isInteger(e.pre_readconv_version) && !(e.pre_readconv_version && i.isInteger(e.pre_readconv_version.low) && i.isInteger(e.pre_readconv_version.high)) ? "pre_readconv_version: integer|Long expected" : e.mute_badge_count_info != null && e.hasOwnProperty("mute_badge_count_info") && !(e.mute_badge_count_info && typeof e.mute_badge_count_info.length == "number" || i.isString(e.mute_badge_count_info)) ? "mute_badge_count_info: buffer expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.NewMessageNotify) return e;
					let o = new a.pigeon.ResponseBasic.NewMessageNotify;
					if (e.conversation_id != null && (o.conversation_id = String(e.conversation_id)), e.conversation_type != null && (o.conversation_type = e.conversation_type >>> 0), e.notify_type != null && (o.notify_type = e.notify_type >>> 0), e.message != null) {
						if (typeof e.message != "object") throw TypeError(".pigeon.ResponseBasic.NewMessageNotify.message: object expected");
						o.message = a.pigeon.ResponseBasic.MessageBody.fromObject(e.message)
					}
					return e.previous_cursor != null && (i.Long ? (o.previous_cursor = i.Long.fromValue(e.previous_cursor))
						.unsigned = !0 : typeof e.previous_cursor == "string" ? o.previous_cursor = parseInt(e.previous_cursor, 10) : typeof e.previous_cursor == "number" ? o.previous_cursor = e.previous_cursor : typeof e.previous_cursor == "object" && (o.previous_cursor = new i.LongBits(e.previous_cursor.low >>> 0, e.previous_cursor.high >>> 0)
							.toNumber(!0))), e.next_cursor != null && (i.Long ? (o.next_cursor = i.Long.fromValue(e.next_cursor))
						.unsigned = !0 : typeof e.next_cursor == "string" ? o.next_cursor = parseInt(e.next_cursor, 10) : typeof e.next_cursor == "number" ? o.next_cursor = e.next_cursor : typeof e.next_cursor == "object" && (o.next_cursor = new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
							.toNumber(!0))), e.index_in_conversation != null && (i.Long ? (o.index_in_conversation = i.Long.fromValue(e.index_in_conversation))
						.unsigned = !0 : typeof e.index_in_conversation == "string" ? o.index_in_conversation = parseInt(e.index_in_conversation, 10) : typeof e.index_in_conversation == "number" ? o.index_in_conversation = e.index_in_conversation : typeof e.index_in_conversation == "object" && (o.index_in_conversation = new i.LongBits(e.index_in_conversation.low >>> 0, e.index_in_conversation.high >>> 0)
							.toNumber(!0))), e.index_in_conversation_v2 != null && (i.Long ? (o.index_in_conversation_v2 = i.Long.fromValue(e.index_in_conversation_v2))
						.unsigned = !0 : typeof e.index_in_conversation_v2 == "string" ? o.index_in_conversation_v2 = parseInt(e.index_in_conversation_v2, 10) : typeof e.index_in_conversation_v2 == "number" ? o.index_in_conversation_v2 = e.index_in_conversation_v2 : typeof e.index_in_conversation_v2 == "object" && (o.index_in_conversation_v2 = new i.LongBits(e.index_in_conversation_v2.low >>> 0, e.index_in_conversation_v2.high >>> 0)
							.toNumber(!0))), e.conversation_version != null && (i.Long ? (o.conversation_version = i.Long.fromValue(e.conversation_version))
						.unsigned = !0 : typeof e.conversation_version == "string" ? o.conversation_version = parseInt(e.conversation_version, 10) : typeof e.conversation_version == "number" ? o.conversation_version = e.conversation_version : typeof e.conversation_version == "object" && (o.conversation_version = new i.LongBits(e.conversation_version.low >>> 0, e.conversation_version.high >>> 0)
							.toNumber(!0))), e.previous_conversation_version != null && (i.Long ? (o.previous_conversation_version = i.Long.fromValue(e.previous_conversation_version))
						.unsigned = !0 : typeof e.previous_conversation_version == "string" ? o.previous_conversation_version = parseInt(e.previous_conversation_version, 10) : typeof e.previous_conversation_version == "number" ? o.previous_conversation_version = e.previous_conversation_version : typeof e.previous_conversation_version == "object" && (o.previous_conversation_version = new i.LongBits(e.previous_conversation_version.low >>> 0, e.previous_conversation_version.high >>> 0)
							.toNumber(!0))), e.cmd_message_index != null && (i.Long ? (o.cmd_message_index = i.Long.fromValue(e.cmd_message_index))
						.unsigned = !0 : typeof e.cmd_message_index == "string" ? o.cmd_message_index = parseInt(e.cmd_message_index, 10) : typeof e.cmd_message_index == "number" ? o.cmd_message_index = e.cmd_message_index : typeof e.cmd_message_index == "object" && (o.cmd_message_index = new i.LongBits(e.cmd_message_index.low >>> 0, e.cmd_message_index.high >>> 0)
							.toNumber(!0))), e.badge_count != null && (o.badge_count = e.badge_count >>> 0), e.trace != null && (typeof e.trace == "string" ? i.base64.decode(e.trace, o.trace = i.newBuffer(i.base64.length(e.trace)), 0) : e.trace.length >= 0 && (o.trace = e.trace)), e.ref_msg_info != null && (typeof e.ref_msg_info == "string" ? i.base64.decode(e.ref_msg_info, o.ref_msg_info = i.newBuffer(i.base64.length(e.ref_msg_info)), 0) : e.ref_msg_info.length >= 0 && (o.ref_msg_info = e.ref_msg_info)), e.previous_msg_index_in_conv != null && (i.Long ? (o.previous_msg_index_in_conv = i.Long.fromValue(e.previous_msg_index_in_conv))
						.unsigned = !0 : typeof e.previous_msg_index_in_conv == "string" ? o.previous_msg_index_in_conv = parseInt(e.previous_msg_index_in_conv, 10) : typeof e.previous_msg_index_in_conv == "number" ? o.previous_msg_index_in_conv = e.previous_msg_index_in_conv : typeof e.previous_msg_index_in_conv == "object" && (o.previous_msg_index_in_conv = new i.LongBits(e.previous_msg_index_in_conv.low >>> 0, e.previous_msg_index_in_conv.high >>> 0)
							.toNumber(!0))), e.readconv_version != null && (i.Long ? (o.readconv_version = i.Long.fromValue(e.readconv_version))
						.unsigned = !0 : typeof e.readconv_version == "string" ? o.readconv_version = parseInt(e.readconv_version, 10) : typeof e.readconv_version == "number" ? o.readconv_version = e.readconv_version : typeof e.readconv_version == "object" && (o.readconv_version = new i.LongBits(e.readconv_version.low >>> 0, e.readconv_version.high >>> 0)
							.toNumber(!0))), e.pre_readconv_version != null && (i.Long ? (o.pre_readconv_version = i.Long.fromValue(e.pre_readconv_version))
						.unsigned = !0 : typeof e.pre_readconv_version == "string" ? o.pre_readconv_version = parseInt(e.pre_readconv_version, 10) : typeof e.pre_readconv_version == "number" ? o.pre_readconv_version = e.pre_readconv_version : typeof e.pre_readconv_version == "object" && (o.pre_readconv_version = new i.LongBits(e.pre_readconv_version.low >>> 0, e.pre_readconv_version.high >>> 0)
							.toNumber(!0))), e.mute_badge_count_info != null && (typeof e.mute_badge_count_info == "string" ? i.base64.decode(e.mute_badge_count_info, o.mute_badge_count_info = i.newBuffer(i.base64.length(e.mute_badge_count_info)), 0) : e.mute_badge_count_info.length >= 0 && (o.mute_badge_count_info = e.mute_badge_count_info)), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if (o.defaults) {
						if (t.conversation_id = "", t.conversation_type = 0, t.notify_type = 0, t.message = null, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.previous_cursor = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.previous_cursor = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.next_cursor = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.next_cursor = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.index_in_conversation = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.index_in_conversation = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.index_in_conversation_v2 = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.index_in_conversation_v2 = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.conversation_version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.conversation_version = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.previous_conversation_version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.previous_conversation_version = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.cmd_message_index = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.cmd_message_index = o.longs === String ? "0" : 0;
						if (t.badge_count = 0, o.bytes === String ? t.trace = "" : (t.trace = [], o.bytes !== Array && (t.trace = i.newBuffer(t.trace))), o.bytes === String ? t.ref_msg_info = "" : (t.ref_msg_info = [], o.bytes !== Array && (t.ref_msg_info = i.newBuffer(t.ref_msg_info))), i.Long) {
							let n = new i.Long(0, 0, !0);
							t.previous_msg_index_in_conv = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.previous_msg_index_in_conv = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.readconv_version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.readconv_version = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.pre_readconv_version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.pre_readconv_version = o.longs === String ? "0" : 0;
						o.bytes === String ? t.mute_badge_count_info = "" : (t.mute_badge_count_info = [], o.bytes !== Array && (t.mute_badge_count_info = i.newBuffer(t.mute_badge_count_info)))
					}
					return e.conversation_id != null && e.hasOwnProperty("conversation_id") && (t.conversation_id = e.conversation_id), e.conversation_type != null && e.hasOwnProperty("conversation_type") && (t.conversation_type = e.conversation_type), e.notify_type != null && e.hasOwnProperty("notify_type") && (t.notify_type = e.notify_type), e.message != null && e.hasOwnProperty("message") && (t.message = a.pigeon.ResponseBasic.MessageBody.toObject(e.message, o)), e.previous_cursor != null && e.hasOwnProperty("previous_cursor") && (typeof e.previous_cursor == "number" ? t.previous_cursor = o.longs === String ? String(e.previous_cursor) : e.previous_cursor : t.previous_cursor = o.longs === String ? i.Long.prototype.toString.call(e.previous_cursor) : o.longs === Number ? new i.LongBits(e.previous_cursor.low >>> 0, e.previous_cursor.high >>> 0)
						.toNumber(!0) : e.previous_cursor), e.next_cursor != null && e.hasOwnProperty("next_cursor") && (typeof e.next_cursor == "number" ? t.next_cursor = o.longs === String ? String(e.next_cursor) : e.next_cursor : t.next_cursor = o.longs === String ? i.Long.prototype.toString.call(e.next_cursor) : o.longs === Number ? new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
						.toNumber(!0) : e.next_cursor), e.index_in_conversation != null && e.hasOwnProperty("index_in_conversation") && (typeof e.index_in_conversation == "number" ? t.index_in_conversation = o.longs === String ? String(e.index_in_conversation) : e.index_in_conversation : t.index_in_conversation = o.longs === String ? i.Long.prototype.toString.call(e.index_in_conversation) : o.longs === Number ? new i.LongBits(e.index_in_conversation.low >>> 0, e.index_in_conversation.high >>> 0)
						.toNumber(!0) : e.index_in_conversation), e.index_in_conversation_v2 != null && e.hasOwnProperty("index_in_conversation_v2") && (typeof e.index_in_conversation_v2 == "number" ? t.index_in_conversation_v2 = o.longs === String ? String(e.index_in_conversation_v2) : e.index_in_conversation_v2 : t.index_in_conversation_v2 = o.longs === String ? i.Long.prototype.toString.call(e.index_in_conversation_v2) : o.longs === Number ? new i.LongBits(e.index_in_conversation_v2.low >>> 0, e.index_in_conversation_v2.high >>> 0)
						.toNumber(!0) : e.index_in_conversation_v2), e.conversation_version != null && e.hasOwnProperty("conversation_version") && (typeof e.conversation_version == "number" ? t.conversation_version = o.longs === String ? String(e.conversation_version) : e.conversation_version : t.conversation_version = o.longs === String ? i.Long.prototype.toString.call(e.conversation_version) : o.longs === Number ? new i.LongBits(e.conversation_version.low >>> 0, e.conversation_version.high >>> 0)
						.toNumber(!0) : e.conversation_version), e.previous_conversation_version != null && e.hasOwnProperty("previous_conversation_version") && (typeof e.previous_conversation_version == "number" ? t.previous_conversation_version = o.longs === String ? String(e.previous_conversation_version) : e.previous_conversation_version : t.previous_conversation_version = o.longs === String ? i.Long.prototype.toString.call(e.previous_conversation_version) : o.longs === Number ? new i.LongBits(e.previous_conversation_version.low >>> 0, e.previous_conversation_version.high >>> 0)
						.toNumber(!0) : e.previous_conversation_version), e.cmd_message_index != null && e.hasOwnProperty("cmd_message_index") && (typeof e.cmd_message_index == "number" ? t.cmd_message_index = o.longs === String ? String(e.cmd_message_index) : e.cmd_message_index : t.cmd_message_index = o.longs === String ? i.Long.prototype.toString.call(e.cmd_message_index) : o.longs === Number ? new i.LongBits(e.cmd_message_index.low >>> 0, e.cmd_message_index.high >>> 0)
						.toNumber(!0) : e.cmd_message_index), e.badge_count != null && e.hasOwnProperty("badge_count") && (t.badge_count = e.badge_count), e.trace != null && e.hasOwnProperty("trace") && (t.trace = o.bytes === String ? i.base64.encode(e.trace, 0, e.trace.length) : o.bytes === Array ? Array.prototype.slice.call(e.trace) : e.trace), e.ref_msg_info != null && e.hasOwnProperty("ref_msg_info") && (t.ref_msg_info = o.bytes === String ? i.base64.encode(e.ref_msg_info, 0, e.ref_msg_info.length) : o.bytes === Array ? Array.prototype.slice.call(e.ref_msg_info) : e.ref_msg_info), e.previous_msg_index_in_conv != null && e.hasOwnProperty("previous_msg_index_in_conv") && (typeof e.previous_msg_index_in_conv == "number" ? t.previous_msg_index_in_conv = o.longs === String ? String(e.previous_msg_index_in_conv) : e.previous_msg_index_in_conv : t.previous_msg_index_in_conv = o.longs === String ? i.Long.prototype.toString.call(e.previous_msg_index_in_conv) : o.longs === Number ? new i.LongBits(e.previous_msg_index_in_conv.low >>> 0, e.previous_msg_index_in_conv.high >>> 0)
						.toNumber(!0) : e.previous_msg_index_in_conv), e.readconv_version != null && e.hasOwnProperty("readconv_version") && (typeof e.readconv_version == "number" ? t.readconv_version = o.longs === String ? String(e.readconv_version) : e.readconv_version : t.readconv_version = o.longs === String ? i.Long.prototype.toString.call(e.readconv_version) : o.longs === Number ? new i.LongBits(e.readconv_version.low >>> 0, e.readconv_version.high >>> 0)
						.toNumber(!0) : e.readconv_version), e.pre_readconv_version != null && e.hasOwnProperty("pre_readconv_version") && (typeof e.pre_readconv_version == "number" ? t.pre_readconv_version = o.longs === String ? String(e.pre_readconv_version) : e.pre_readconv_version : t.pre_readconv_version = o.longs === String ? i.Long.prototype.toString.call(e.pre_readconv_version) : o.longs === Number ? new i.LongBits(e.pre_readconv_version.low >>> 0, e.pre_readconv_version.high >>> 0)
						.toNumber(!0) : e.pre_readconv_version), e.mute_badge_count_info != null && e.hasOwnProperty("mute_badge_count_info") && (t.mute_badge_count_info = o.bytes === String ? i.base64.encode(e.mute_badge_count_info, 0, e.mute_badge_count_info.length) : o.bytes === Array ? Array.prototype.slice.call(e.mute_badge_count_info) : e.mute_badge_count_info), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.NewMessageNotify"
				}, _
			}(), l.MessageBody = function() {
				function _(s) {
					if (this.ext = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation_id = "", _.prototype.conversation_type = 0, _.prototype.server_message_id = 0, _.prototype.index_in_conversation = 0, _.prototype.conversation_short_id = 0, _.prototype.message_type = 0, _.prototype.sender = 0, _.prototype.content = "", _.prototype.ext = i.emptyArray, _.prototype.create_time = 0, _.prototype.version = 0, _.prototype.status = 0, _.prototype.order_in_conversation = 0, _.prototype.sec_sender = "", _.prototype.property_list = i.newBuffer([]), _.prototype.index_in_conversation_v2 = 0, _.prototype.reference_info = i.newBuffer([]), _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.conversation_id != null && Object.hasOwnProperty.call(e, "conversation_id") && o.uint32(10)
						.string(e.conversation_id), e.conversation_type != null && Object.hasOwnProperty.call(e, "conversation_type") && o.uint32(16)
						.uint32(e.conversation_type), e.server_message_id != null && Object.hasOwnProperty.call(e, "server_message_id") && o.uint32(24)
						.uint64(e.server_message_id), e.index_in_conversation != null && Object.hasOwnProperty.call(e, "index_in_conversation") && o.uint32(32)
						.uint64(e.index_in_conversation), e.conversation_short_id != null && Object.hasOwnProperty.call(e, "conversation_short_id") && o.uint32(40)
						.uint64(e.conversation_short_id), e.message_type != null && Object.hasOwnProperty.call(e, "message_type") && o.uint32(48)
						.uint32(e.message_type), e.sender != null && Object.hasOwnProperty.call(e, "sender") && o.uint32(56)
						.uint64(e.sender), e.content != null && Object.hasOwnProperty.call(e, "content") && o.uint32(66)
						.string(e.content), e.ext != null && e.ext.length)
						for (let t = 0; t < e.ext.length; ++t) a.pigeon.StringKeyValue.encode(e.ext[t], o.uint32(74)
								.fork())
							.ldelim();
					return e.create_time != null && Object.hasOwnProperty.call(e, "create_time") && o.uint32(80)
						.uint64(e.create_time), e.version != null && Object.hasOwnProperty.call(e, "version") && o.uint32(88)
						.uint64(e.version), e.status != null && Object.hasOwnProperty.call(e, "status") && o.uint32(96)
						.uint32(e.status), e.order_in_conversation != null && Object.hasOwnProperty.call(e, "order_in_conversation") && o.uint32(104)
						.uint64(e.order_in_conversation), e.sec_sender != null && Object.hasOwnProperty.call(e, "sec_sender") && o.uint32(114)
						.string(e.sec_sender), e.property_list != null && Object.hasOwnProperty.call(e, "property_list") && o.uint32(122)
						.bytes(e.property_list), e.index_in_conversation_v2 != null && Object.hasOwnProperty.call(e, "index_in_conversation_v2") && o.uint32(136)
						.uint64(e.index_in_conversation_v2), e.reference_info != null && Object.hasOwnProperty.call(e, "reference_info") && o.uint32(146)
						.bytes(e.reference_info), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.MessageBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversation_id = e.string();
									break
								}
							case 2:
								{
									n.conversation_type = e.uint32();
									break
								}
							case 3:
								{
									n.server_message_id = e.uint64();
									break
								}
							case 4:
								{
									n.index_in_conversation = e.uint64();
									break
								}
							case 5:
								{
									n.conversation_short_id = e.uint64();
									break
								}
							case 6:
								{
									n.message_type = e.uint32();
									break
								}
							case 7:
								{
									n.sender = e.uint64();
									break
								}
							case 8:
								{
									n.content = e.string();
									break
								}
							case 9:
								{
									n.ext && n.ext.length || (n.ext = []),
									n.ext.push(a.pigeon.StringKeyValue.decode(e, e.uint32()));
									break
								}
							case 10:
								{
									n.create_time = e.uint64();
									break
								}
							case 11:
								{
									n.version = e.uint64();
									break
								}
							case 12:
								{
									n.status = e.uint32();
									break
								}
							case 13:
								{
									n.order_in_conversation = e.uint64();
									break
								}
							case 14:
								{
									n.sec_sender = e.string();
									break
								}
							case 15:
								{
									n.property_list = e.bytes();
									break
								}
							case 17:
								{
									n.index_in_conversation_v2 = e.uint64();
									break
								}
							case 18:
								{
									n.reference_info = e.bytes();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && !i.isString(e.conversation_id)) return "conversation_id: string expected";
					if (e.conversation_type != null && e.hasOwnProperty("conversation_type") && !i.isInteger(e.conversation_type)) return "conversation_type: integer expected";
					if (e.server_message_id != null && e.hasOwnProperty("server_message_id") && !i.isInteger(e.server_message_id) && !(e.server_message_id && i.isInteger(e.server_message_id.low) && i.isInteger(e.server_message_id.high))) return "server_message_id: integer|Long expected";
					if (e.index_in_conversation != null && e.hasOwnProperty("index_in_conversation") && !i.isInteger(e.index_in_conversation) && !(e.index_in_conversation && i.isInteger(e.index_in_conversation.low) && i.isInteger(e.index_in_conversation.high))) return "index_in_conversation: integer|Long expected";
					if (e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && !i.isInteger(e.conversation_short_id) && !(e.conversation_short_id && i.isInteger(e.conversation_short_id.low) && i.isInteger(e.conversation_short_id.high))) return "conversation_short_id: integer|Long expected";
					if (e.message_type != null && e.hasOwnProperty("message_type") && !i.isInteger(e.message_type)) return "message_type: integer expected";
					if (e.sender != null && e.hasOwnProperty("sender") && !i.isInteger(e.sender) && !(e.sender && i.isInteger(e.sender.low) && i.isInteger(e.sender.high))) return "sender: integer|Long expected";
					if (e.content != null && e.hasOwnProperty("content") && !i.isString(e.content)) return "content: string expected";
					if (e.ext != null && e.hasOwnProperty("ext")) {
						if (!Array.isArray(e.ext)) return "ext: array expected";
						for (let o = 0; o < e.ext.length; ++o) {
							let t = a.pigeon.StringKeyValue.verify(e.ext[o]);
							if (t) return "ext." + t
						}
					}
					return e.create_time != null && e.hasOwnProperty("create_time") && !i.isInteger(e.create_time) && !(e.create_time && i.isInteger(e.create_time.low) && i.isInteger(e.create_time.high)) ? "create_time: integer|Long expected" : e.version != null && e.hasOwnProperty("version") && !i.isInteger(e.version) && !(e.version && i.isInteger(e.version.low) && i.isInteger(e.version.high)) ? "version: integer|Long expected" : e.status != null && e.hasOwnProperty("status") && !i.isInteger(e.status) ? "status: integer expected" : e.order_in_conversation != null && e.hasOwnProperty("order_in_conversation") && !i.isInteger(e.order_in_conversation) && !(e.order_in_conversation && i.isInteger(e.order_in_conversation.low) && i.isInteger(e.order_in_conversation.high)) ? "order_in_conversation: integer|Long expected" : e.sec_sender != null && e.hasOwnProperty("sec_sender") && !i.isString(e.sec_sender) ? "sec_sender: string expected" : e.property_list != null && e.hasOwnProperty("property_list") && !(e.property_list && typeof e.property_list.length == "number" || i.isString(e.property_list)) ? "property_list: buffer expected" : e.index_in_conversation_v2 != null && e.hasOwnProperty("index_in_conversation_v2") && !i.isInteger(e.index_in_conversation_v2) && !(e.index_in_conversation_v2 && i.isInteger(e.index_in_conversation_v2.low) && i.isInteger(e.index_in_conversation_v2.high)) ? "index_in_conversation_v2: integer|Long expected" : e.reference_info != null && e.hasOwnProperty("reference_info") && !(e.reference_info && typeof e.reference_info.length == "number" || i.isString(e.reference_info)) ? "reference_info: buffer expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.MessageBody) return e;
					let o = new a.pigeon.ResponseBasic.MessageBody;
					if (e.conversation_id != null && (o.conversation_id = String(e.conversation_id)), e.conversation_type != null && (o.conversation_type = e.conversation_type >>> 0), e.server_message_id != null && (i.Long ? (o.server_message_id = i.Long.fromValue(e.server_message_id))
						.unsigned = !0 : typeof e.server_message_id == "string" ? o.server_message_id = parseInt(e.server_message_id, 10) : typeof e.server_message_id == "number" ? o.server_message_id = e.server_message_id : typeof e.server_message_id == "object" && (o.server_message_id = new i.LongBits(e.server_message_id.low >>> 0, e.server_message_id.high >>> 0)
							.toNumber(!0))), e.index_in_conversation != null && (i.Long ? (o.index_in_conversation = i.Long.fromValue(e.index_in_conversation))
						.unsigned = !0 : typeof e.index_in_conversation == "string" ? o.index_in_conversation = parseInt(e.index_in_conversation, 10) : typeof e.index_in_conversation == "number" ? o.index_in_conversation = e.index_in_conversation : typeof e.index_in_conversation == "object" && (o.index_in_conversation = new i.LongBits(e.index_in_conversation.low >>> 0, e.index_in_conversation.high >>> 0)
							.toNumber(!0))), e.conversation_short_id != null && (i.Long ? (o.conversation_short_id = i.Long.fromValue(e.conversation_short_id))
						.unsigned = !0 : typeof e.conversation_short_id == "string" ? o.conversation_short_id = parseInt(e.conversation_short_id, 10) : typeof e.conversation_short_id == "number" ? o.conversation_short_id = e.conversation_short_id : typeof e.conversation_short_id == "object" && (o.conversation_short_id = new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
							.toNumber(!0))), e.message_type != null && (o.message_type = e.message_type >>> 0), e.sender != null && (i.Long ? (o.sender = i.Long.fromValue(e.sender))
						.unsigned = !0 : typeof e.sender == "string" ? o.sender = parseInt(e.sender, 10) : typeof e.sender == "number" ? o.sender = e.sender : typeof e.sender == "object" && (o.sender = new i.LongBits(e.sender.low >>> 0, e.sender.high >>> 0)
							.toNumber(!0))), e.content != null && (o.content = String(e.content)), e.ext) {
						if (!Array.isArray(e.ext)) throw TypeError(".pigeon.ResponseBasic.MessageBody.ext: array expected");
						o.ext = [];
						for (let t = 0; t < e.ext.length; ++t) {
							if (typeof e.ext[t] != "object") throw TypeError(".pigeon.ResponseBasic.MessageBody.ext: object expected");
							o.ext[t] = a.pigeon.StringKeyValue.fromObject(e.ext[t])
						}
					}
					return e.create_time != null && (i.Long ? (o.create_time = i.Long.fromValue(e.create_time))
						.unsigned = !0 : typeof e.create_time == "string" ? o.create_time = parseInt(e.create_time, 10) : typeof e.create_time == "number" ? o.create_time = e.create_time : typeof e.create_time == "object" && (o.create_time = new i.LongBits(e.create_time.low >>> 0, e.create_time.high >>> 0)
							.toNumber(!0))), e.version != null && (i.Long ? (o.version = i.Long.fromValue(e.version))
						.unsigned = !0 : typeof e.version == "string" ? o.version = parseInt(e.version, 10) : typeof e.version == "number" ? o.version = e.version : typeof e.version == "object" && (o.version = new i.LongBits(e.version.low >>> 0, e.version.high >>> 0)
							.toNumber(!0))), e.status != null && (o.status = e.status >>> 0), e.order_in_conversation != null && (i.Long ? (o.order_in_conversation = i.Long.fromValue(e.order_in_conversation))
						.unsigned = !0 : typeof e.order_in_conversation == "string" ? o.order_in_conversation = parseInt(e.order_in_conversation, 10) : typeof e.order_in_conversation == "number" ? o.order_in_conversation = e.order_in_conversation : typeof e.order_in_conversation == "object" && (o.order_in_conversation = new i.LongBits(e.order_in_conversation.low >>> 0, e.order_in_conversation.high >>> 0)
							.toNumber(!0))), e.sec_sender != null && (o.sec_sender = String(e.sec_sender)), e.property_list != null && (typeof e.property_list == "string" ? i.base64.decode(e.property_list, o.property_list = i.newBuffer(i.base64.length(e.property_list)), 0) : e.property_list.length >= 0 && (o.property_list = e.property_list)), e.index_in_conversation_v2 != null && (i.Long ? (o.index_in_conversation_v2 = i.Long.fromValue(e.index_in_conversation_v2))
						.unsigned = !0 : typeof e.index_in_conversation_v2 == "string" ? o.index_in_conversation_v2 = parseInt(e.index_in_conversation_v2, 10) : typeof e.index_in_conversation_v2 == "number" ? o.index_in_conversation_v2 = e.index_in_conversation_v2 : typeof e.index_in_conversation_v2 == "object" && (o.index_in_conversation_v2 = new i.LongBits(e.index_in_conversation_v2.low >>> 0, e.index_in_conversation_v2.high >>> 0)
							.toNumber(!0))), e.reference_info != null && (typeof e.reference_info == "string" ? i.base64.decode(e.reference_info, o.reference_info = i.newBuffer(i.base64.length(e.reference_info)), 0) : e.reference_info.length >= 0 && (o.reference_info = e.reference_info)), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.ext = []), o.defaults) {
						if (t.conversation_id = "", t.conversation_type = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.server_message_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.server_message_id = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.index_in_conversation = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.index_in_conversation = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.conversation_short_id = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.conversation_short_id = o.longs === String ? "0" : 0;
						if (t.message_type = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.sender = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.sender = o.longs === String ? "0" : 0;
						if (t.content = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.create_time = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.create_time = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.version = o.longs === String ? "0" : 0;
						if (t.status = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.order_in_conversation = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.order_in_conversation = o.longs === String ? "0" : 0;
						if (t.sec_sender = "", o.bytes === String ? t.property_list = "" : (t.property_list = [], o.bytes !== Array && (t.property_list = i.newBuffer(t.property_list))), i.Long) {
							let n = new i.Long(0, 0, !0);
							t.index_in_conversation_v2 = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.index_in_conversation_v2 = o.longs === String ? "0" : 0;
						o.bytes === String ? t.reference_info = "" : (t.reference_info = [], o.bytes !== Array && (t.reference_info = i.newBuffer(t.reference_info)))
					}
					if (e.conversation_id != null && e.hasOwnProperty("conversation_id") && (t.conversation_id = e.conversation_id), e.conversation_type != null && e.hasOwnProperty("conversation_type") && (t.conversation_type = e.conversation_type), e.server_message_id != null && e.hasOwnProperty("server_message_id") && (typeof e.server_message_id == "number" ? t.server_message_id = o.longs === String ? String(e.server_message_id) : e.server_message_id : t.server_message_id = o.longs === String ? i.Long.prototype.toString.call(e.server_message_id) : o.longs === Number ? new i.LongBits(e.server_message_id.low >>> 0, e.server_message_id.high >>> 0)
						.toNumber(!0) : e.server_message_id), e.index_in_conversation != null && e.hasOwnProperty("index_in_conversation") && (typeof e.index_in_conversation == "number" ? t.index_in_conversation = o.longs === String ? String(e.index_in_conversation) : e.index_in_conversation : t.index_in_conversation = o.longs === String ? i.Long.prototype.toString.call(e.index_in_conversation) : o.longs === Number ? new i.LongBits(e.index_in_conversation.low >>> 0, e.index_in_conversation.high >>> 0)
						.toNumber(!0) : e.index_in_conversation), e.conversation_short_id != null && e.hasOwnProperty("conversation_short_id") && (typeof e.conversation_short_id == "number" ? t.conversation_short_id = o.longs === String ? String(e.conversation_short_id) : e.conversation_short_id : t.conversation_short_id = o.longs === String ? i.Long.prototype.toString.call(e.conversation_short_id) : o.longs === Number ? new i.LongBits(e.conversation_short_id.low >>> 0, e.conversation_short_id.high >>> 0)
						.toNumber(!0) : e.conversation_short_id), e.message_type != null && e.hasOwnProperty("message_type") && (t.message_type = e.message_type), e.sender != null && e.hasOwnProperty("sender") && (typeof e.sender == "number" ? t.sender = o.longs === String ? String(e.sender) : e.sender : t.sender = o.longs === String ? i.Long.prototype.toString.call(e.sender) : o.longs === Number ? new i.LongBits(e.sender.low >>> 0, e.sender.high >>> 0)
						.toNumber(!0) : e.sender), e.content != null && e.hasOwnProperty("content") && (t.content = e.content), e.ext && e.ext.length) {
						t.ext = [];
						for (let n = 0; n < e.ext.length; ++n) t.ext[n] = a.pigeon.StringKeyValue.toObject(e.ext[n], o)
					}
					return e.create_time != null && e.hasOwnProperty("create_time") && (typeof e.create_time == "number" ? t.create_time = o.longs === String ? String(e.create_time) : e.create_time : t.create_time = o.longs === String ? i.Long.prototype.toString.call(e.create_time) : o.longs === Number ? new i.LongBits(e.create_time.low >>> 0, e.create_time.high >>> 0)
						.toNumber(!0) : e.create_time), e.version != null && e.hasOwnProperty("version") && (typeof e.version == "number" ? t.version = o.longs === String ? String(e.version) : e.version : t.version = o.longs === String ? i.Long.prototype.toString.call(e.version) : o.longs === Number ? new i.LongBits(e.version.low >>> 0, e.version.high >>> 0)
						.toNumber(!0) : e.version), e.status != null && e.hasOwnProperty("status") && (t.status = e.status), e.order_in_conversation != null && e.hasOwnProperty("order_in_conversation") && (typeof e.order_in_conversation == "number" ? t.order_in_conversation = o.longs === String ? String(e.order_in_conversation) : e.order_in_conversation : t.order_in_conversation = o.longs === String ? i.Long.prototype.toString.call(e.order_in_conversation) : o.longs === Number ? new i.LongBits(e.order_in_conversation.low >>> 0, e.order_in_conversation.high >>> 0)
						.toNumber(!0) : e.order_in_conversation), e.sec_sender != null && e.hasOwnProperty("sec_sender") && (t.sec_sender = e.sec_sender), e.property_list != null && e.hasOwnProperty("property_list") && (t.property_list = o.bytes === String ? i.base64.encode(e.property_list, 0, e.property_list.length) : o.bytes === Array ? Array.prototype.slice.call(e.property_list) : e.property_list), e.index_in_conversation_v2 != null && e.hasOwnProperty("index_in_conversation_v2") && (typeof e.index_in_conversation_v2 == "number" ? t.index_in_conversation_v2 = o.longs === String ? String(e.index_in_conversation_v2) : e.index_in_conversation_v2 : t.index_in_conversation_v2 = o.longs === String ? i.Long.prototype.toString.call(e.index_in_conversation_v2) : o.longs === Number ? new i.LongBits(e.index_in_conversation_v2.low >>> 0, e.index_in_conversation_v2.high >>> 0)
						.toNumber(!0) : e.index_in_conversation_v2), e.reference_info != null && e.hasOwnProperty("reference_info") && (t.reference_info = o.bytes === String ? i.base64.encode(e.reference_info, 0, e.reference_info.length) : o.bytes === Array ? Array.prototype.slice.call(e.reference_info) : e.reference_info), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.MessageBody"
				}, _
			}(), l.MessagesPerUserResponseBody = function() {
				function _(s) {
					if (this.messages = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.messages = i.emptyArray, _.prototype.next_cursor = 0, _.prototype.has_more = 0, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.messages != null && e.messages.length)
						for (let t = 0; t < e.messages.length; ++t) a.pigeon.ResponseBasic.MessageBody.encode(e.messages[t], o.uint32(10)
								.fork())
							.ldelim();
					return e.next_cursor != null && Object.hasOwnProperty.call(e, "next_cursor") && o.uint32(16)
						.uint64(e.next_cursor), e.has_more != null && Object.hasOwnProperty.call(e, "has_more") && o.uint32(24)
						.uint64(e.has_more), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.MessagesPerUserResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.messages && n.messages.length || (n.messages = []),
									n.messages.push(a.pigeon.ResponseBasic.MessageBody.decode(e, e.uint32()));
									break
								}
							case 2:
								{
									n.next_cursor = e.uint64();
									break
								}
							case 3:
								{
									n.has_more = e.uint64();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.messages != null && e.hasOwnProperty("messages")) {
						if (!Array.isArray(e.messages)) return "messages: array expected";
						for (let o = 0; o < e.messages.length; ++o) {
							let t = a.pigeon.ResponseBasic.MessageBody.verify(e.messages[o]);
							if (t) return "messages." + t
						}
					}
					return e.next_cursor != null && e.hasOwnProperty("next_cursor") && !i.isInteger(e.next_cursor) && !(e.next_cursor && i.isInteger(e.next_cursor.low) && i.isInteger(e.next_cursor.high)) ? "next_cursor: integer|Long expected" : e.has_more != null && e.hasOwnProperty("has_more") && !i.isInteger(e.has_more) && !(e.has_more && i.isInteger(e.has_more.low) && i.isInteger(e.has_more.high)) ? "has_more: integer|Long expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.MessagesPerUserResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.MessagesPerUserResponseBody;
					if (e.messages) {
						if (!Array.isArray(e.messages)) throw TypeError(".pigeon.ResponseBasic.MessagesPerUserResponseBody.messages: array expected");
						o.messages = [];
						for (let t = 0; t < e.messages.length; ++t) {
							if (typeof e.messages[t] != "object") throw TypeError(".pigeon.ResponseBasic.MessagesPerUserResponseBody.messages: object expected");
							o.messages[t] = a.pigeon.ResponseBasic.MessageBody.fromObject(e.messages[t])
						}
					}
					return e.next_cursor != null && (i.Long ? (o.next_cursor = i.Long.fromValue(e.next_cursor))
						.unsigned = !0 : typeof e.next_cursor == "string" ? o.next_cursor = parseInt(e.next_cursor, 10) : typeof e.next_cursor == "number" ? o.next_cursor = e.next_cursor : typeof e.next_cursor == "object" && (o.next_cursor = new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
							.toNumber(!0))), e.has_more != null && (i.Long ? (o.has_more = i.Long.fromValue(e.has_more))
						.unsigned = !0 : typeof e.has_more == "string" ? o.has_more = parseInt(e.has_more, 10) : typeof e.has_more == "number" ? o.has_more = e.has_more : typeof e.has_more == "object" && (o.has_more = new i.LongBits(e.has_more.low >>> 0, e.has_more.high >>> 0)
							.toNumber(!0))), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.messages = []), o.defaults) {
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.next_cursor = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.next_cursor = o.longs === String ? "0" : 0;
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.has_more = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.has_more = o.longs === String ? "0" : 0
					}
					if (e.messages && e.messages.length) {
						t.messages = [];
						for (let n = 0; n < e.messages.length; ++n) t.messages[n] = a.pigeon.ResponseBasic.MessageBody.toObject(e.messages[n], o)
					}
					return e.next_cursor != null && e.hasOwnProperty("next_cursor") && (typeof e.next_cursor == "number" ? t.next_cursor = o.longs === String ? String(e.next_cursor) : e.next_cursor : t.next_cursor = o.longs === String ? i.Long.prototype.toString.call(e.next_cursor) : o.longs === Number ? new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
						.toNumber(!0) : e.next_cursor), e.has_more != null && e.hasOwnProperty("has_more") && (typeof e.has_more == "number" ? t.has_more = o.longs === String ? String(e.has_more) : e.has_more : t.has_more = o.longs === String ? i.Long.prototype.toString.call(e.has_more) : o.longs === Number ? new i.LongBits(e.has_more.low >>> 0, e.has_more.high >>> 0)
						.toNumber(!0) : e.has_more), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.MessagesPerUserResponseBody"
				}, _
			}(),
			l.MessagesPerUserInitV2ResponseBody = function() {
                function _(_) {
                    if (this.messages = [],
                    this.conversations = [],
                    _)
                        for (var O = Object.keys(_), P = 0; P < O.length; ++P)
                            null != _[O[P]] && (this[O[P]] = _[O[P]])
                }
                return _.prototype.messages = i.emptyArray,
                _.prototype.conversations = i.emptyArray,
                _.prototype.per_user_cursor = i.Long ? i.Long.fromBits(0, 0, !1) : 0,
                _.prototype.next_cursor = i.Long ? i.Long.fromBits(0, 0, !1) : 0,
                _.prototype.has_more = !1,
                _.create = function(O) {
                    return new _(O)
                }
                ,
                _.encode = function(_, O) {
                    if (O || (O = x.create()),
                    null != _.messages && _.messages.length)
                        for (var P = 0; P < _.messages.length; ++P)
                            a.pigeon.ResponseBasic.MessageBody.encode(_.messages[P], O.uint32(10).fork()).ldelim();
                    if (null != _.conversations && _.conversations.length)
                        for (var P = 0; P < _.conversations.length; ++P)
                            a.pigeon.ResponseBasic.ConversationInfoV2.encode(_.conversations[P], O.uint32(18).fork()).ldelim();
                    return null != _.per_user_cursor && Object.hasOwnProperty.call(_, "per_user_cursor") && O.uint32(24).int64(_.per_user_cursor),
                    null != _.next_cursor && Object.hasOwnProperty.call(_, "next_cursor") && O.uint32(32).int64(_.next_cursor),
                    null != _.has_more && Object.hasOwnProperty.call(_, "has_more") && O.uint32(40).bool(_.has_more),
                    O
                }
                ,
                _.decode = function(_, O) {
                    _ instanceof p || (_ = p.create(_));
                    for (var P = void 0 === O ? _.len : _.pos + O, j = new a.pigeon.ResponseBasic.MessagesPerUserInitV2ResponseBody; _.pos < P; ) {
                        var R = _.uint32();
                        switch (R >>> 3) {
                        case 1:
                            j.messages && j.messages.length || (j.messages = []),
                            j.messages.push(a.pigeon.ResponseBasic.MessageBody.decode(_, _.uint32()));
                            break;
                        case 2:
                            j.conversations && j.conversations.length || (j.conversations = []),
                            j.conversations.push(a.pigeon.ResponseBasic.ConversationInfoV2.decode(_, _.uint32()));
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
                , _.decodeDelimited = function(e) {
                    return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
                }, _.verify = function(e) {
                    return true
                }, _.fromObject = function(e) {
                    console.info("fromObject ==============");
                }, _.toObject = function(e, o) {
                    console.info("toObject==============");
                }, _.prototype.toJSON = function() {
                    return this.constructor.toObject(this, w.util.toJSONOptions)
                }, _.getTypeUrl = function(e) {
                    return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.MessagesPerUserInitV2ResponseBody"
                },
                _
            }(),
			 l.CreateConversationV2ResponseBody = function() {
				function _(s) {
					if (s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation = null, _.prototype.check_code = 0, _.prototype.check_message = "", _.prototype.extra_info = "", _.prototype.status = 0, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					return o || (o = x.create()), e.conversation != null && Object.hasOwnProperty.call(e, "conversation") && a.pigeon.ResponseBasic.ConversationInfoV2.encode(e.conversation, o.uint32(10)
							.fork())
						.ldelim(), e.check_code != null && Object.hasOwnProperty.call(e, "check_code") && o.uint32(16)
						.uint64(e.check_code), e.check_message != null && Object.hasOwnProperty.call(e, "check_message") && o.uint32(26)
						.string(e.check_message), e.extra_info != null && Object.hasOwnProperty.call(e, "extra_info") && o.uint32(34)
						.string(e.extra_info), e.status != null && Object.hasOwnProperty.call(e, "status") && o.uint32(40)
						.uint32(e.status), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.CreateConversationV2ResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversation = a.pigeon.ResponseBasic.ConversationInfoV2.decode(e, e.uint32());
									break
								}
							case 2:
								{
									n.check_code = e.uint64();
									break
								}
							case 3:
								{
									n.check_message = e.string();
									break
								}
							case 4:
								{
									n.extra_info = e.string();
									break
								}
							case 5:
								{
									n.status = e.uint32();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation != null && e.hasOwnProperty("conversation")) {
						let o = a.pigeon.ResponseBasic.ConversationInfoV2.verify(e.conversation);
						if (o) return "conversation." + o
					}
					return e.check_code != null && e.hasOwnProperty("check_code") && !i.isInteger(e.check_code) && !(e.check_code && i.isInteger(e.check_code.low) && i.isInteger(e.check_code.high)) ? "check_code: integer|Long expected" : e.check_message != null && e.hasOwnProperty("check_message") && !i.isString(e.check_message) ? "check_message: string expected" : e.extra_info != null && e.hasOwnProperty("extra_info") && !i.isString(e.extra_info) ? "extra_info: string expected" : e.status != null && e.hasOwnProperty("status") && !i.isInteger(e.status) ? "status: integer expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.CreateConversationV2ResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.CreateConversationV2ResponseBody;
					if (e.conversation != null) {
						if (typeof e.conversation != "object") throw TypeError(".pigeon.ResponseBasic.CreateConversationV2ResponseBody.conversation: object expected");
						o.conversation = a.pigeon.ResponseBasic.ConversationInfoV2.fromObject(e.conversation)
					}
					return e.check_code != null && (i.Long ? (o.check_code = i.Long.fromValue(e.check_code))
						.unsigned = !0 : typeof e.check_code == "string" ? o.check_code = parseInt(e.check_code, 10) : typeof e.check_code == "number" ? o.check_code = e.check_code : typeof e.check_code == "object" && (o.check_code = new i.LongBits(e.check_code.low >>> 0, e.check_code.high >>> 0)
							.toNumber(!0))), e.check_message != null && (o.check_message = String(e.check_message)), e.extra_info != null && (o.extra_info = String(e.extra_info)), e.status != null && (o.status = e.status >>> 0), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if (o.defaults) {
						if (t.conversation = null, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.check_code = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.check_code = o.longs === String ? "0" : 0;
						t.check_message = "", t.extra_info = "", t.status = 0
					}
					return e.conversation != null && e.hasOwnProperty("conversation") && (t.conversation = a.pigeon.ResponseBasic.ConversationInfoV2.toObject(e.conversation, o)), e.check_code != null && e.hasOwnProperty("check_code") && (typeof e.check_code == "number" ? t.check_code = o.longs === String ? String(e.check_code) : e.check_code : t.check_code = o.longs === String ? i.Long.prototype.toString.call(e.check_code) : o.longs === Number ? new i.LongBits(e.check_code.low >>> 0, e.check_code.high >>> 0)
						.toNumber(!0) : e.check_code), e.check_message != null && e.hasOwnProperty("check_message") && (t.check_message = e.check_message), e.extra_info != null && e.hasOwnProperty("extra_info") && (t.extra_info = e.extra_info), e.status != null && e.hasOwnProperty("status") && (t.status = e.status), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.CreateConversationV2ResponseBody"
				}, _
			}(), l.GetUserConversationListResponseBody = function() {
				function _(s) {
					if (this.conversation_list = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.conversation_list = i.emptyArray, _.prototype.has_more = !1, _.prototype.next_cursor = 0, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.conversation_list != null && e.conversation_list.length)
						for (let t = 0; t < e.conversation_list.length; ++t) a.pigeon.ResponseBasic.ConversationInfoV2.encode(e.conversation_list[t], o.uint32(10)
								.fork())
							.ldelim();
					return e.has_more != null && Object.hasOwnProperty.call(e, "has_more") && o.uint32(16)
						.bool(e.has_more), e.next_cursor != null && Object.hasOwnProperty.call(e, "next_cursor") && o.uint32(24)
						.uint64(e.next_cursor), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.GetUserConversationListResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.conversation_list && n.conversation_list.length || (n.conversation_list = []),
									n.conversation_list.push(a.pigeon.ResponseBasic.ConversationInfoV2.decode(e, e.uint32()));
									break
								}
							case 2:
								{
									n.has_more = e.bool();
									break
								}
							case 3:
								{
									n.next_cursor = e.uint64();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.conversation_list != null && e.hasOwnProperty("conversation_list")) {
						if (!Array.isArray(e.conversation_list)) return "conversation_list: array expected";
						for (let o = 0; o < e.conversation_list.length; ++o) {
							let t = a.pigeon.ResponseBasic.ConversationInfoV2.verify(e.conversation_list[o]);
							if (t) return "conversation_list." + t
						}
					}
					return e.has_more != null && e.hasOwnProperty("has_more") && typeof e.has_more != "boolean" ? "has_more: boolean expected" : e.next_cursor != null && e.hasOwnProperty("next_cursor") && !i.isInteger(e.next_cursor) && !(e.next_cursor && i.isInteger(e.next_cursor.low) && i.isInteger(e.next_cursor.high)) ? "next_cursor: integer|Long expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.GetUserConversationListResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.GetUserConversationListResponseBody;
					if (e.conversation_list) {
						if (!Array.isArray(e.conversation_list)) throw TypeError(".pigeon.ResponseBasic.GetUserConversationListResponseBody.conversation_list: array expected");
						o.conversation_list = [];
						for (let t = 0; t < e.conversation_list.length; ++t) {
							if (typeof e.conversation_list[t] != "object") throw TypeError(".pigeon.ResponseBasic.GetUserConversationListResponseBody.conversation_list: object expected");
							o.conversation_list[t] = a.pigeon.ResponseBasic.ConversationInfoV2.fromObject(e.conversation_list[t])
						}
					}
					return e.has_more != null && (o.has_more = !!e.has_more), e.next_cursor != null && (i.Long ? (o.next_cursor = i.Long.fromValue(e.next_cursor))
						.unsigned = !0 : typeof e.next_cursor == "string" ? o.next_cursor = parseInt(e.next_cursor, 10) : typeof e.next_cursor == "number" ? o.next_cursor = e.next_cursor : typeof e.next_cursor == "object" && (o.next_cursor = new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
							.toNumber(!0))), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.conversation_list = []), o.defaults)
						if (t.has_more = !1, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.next_cursor = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.next_cursor = o.longs === String ? "0" : 0;
					if (e.conversation_list && e.conversation_list.length) {
						t.conversation_list = [];
						for (let n = 0; n < e.conversation_list.length; ++n) t.conversation_list[n] = a.pigeon.ResponseBasic.ConversationInfoV2.toObject(e.conversation_list[n], o)
					}
					return e.has_more != null && e.hasOwnProperty("has_more") && (t.has_more = e.has_more), e.next_cursor != null && e.hasOwnProperty("next_cursor") && (typeof e.next_cursor == "number" ? t.next_cursor = o.longs === String ? String(e.next_cursor) : e.next_cursor : t.next_cursor = o.longs === String ? i.Long.prototype.toString.call(e.next_cursor) : o.longs === Number ? new i.LongBits(e.next_cursor.low >>> 0, e.next_cursor.high >>> 0)
						.toNumber(!0) : e.next_cursor), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.GetUserConversationListResponseBody"
				}, _
			}(), l.ConversationAddParticipantsResponseBody = function() {
				function _(s) {
					if (this.success_participants = [], this.failed_participants = [], this.sec_success_participants = [], this.sec_failed_participants = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.success_participants = i.emptyArray, _.prototype.failed_participants = i.emptyArray, _.prototype.status = 0, _.prototype.extra_info = "", _.prototype.check_code = 0, _.prototype.check_message = "", _.prototype.sec_success_participants = i.emptyArray, _.prototype.sec_failed_participants = i.emptyArray, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.success_participants != null && e.success_participants.length) {
						o.uint32(10)
							.fork();
						for (let t = 0; t < e.success_participants.length; ++t) o.uint64(e.success_participants[t]);
						o.ldelim()
					}
					if (e.failed_participants != null && e.failed_participants.length) {
						o.uint32(18)
							.fork();
						for (let t = 0; t < e.failed_participants.length; ++t) o.uint64(e.failed_participants[t]);
						o.ldelim()
					}
					if (e.status != null && Object.hasOwnProperty.call(e, "status") && o.uint32(24)
						.uint32(e.status), e.extra_info != null && Object.hasOwnProperty.call(e, "extra_info") && o.uint32(34)
						.string(e.extra_info), e.check_code != null && Object.hasOwnProperty.call(e, "check_code") && o.uint32(40)
						.uint64(e.check_code), e.check_message != null && Object.hasOwnProperty.call(e, "check_message") && o.uint32(50)
						.string(e.check_message), e.sec_success_participants != null && e.sec_success_participants.length)
						for (let t = 0; t < e.sec_success_participants.length; ++t) a.pigeon.ResponseBasic.SecUidPair.encode(e.sec_success_participants[t], o.uint32(58)
								.fork())
							.ldelim();
					if (e.sec_failed_participants != null && e.sec_failed_participants.length)
						for (let t = 0; t < e.sec_failed_participants.length; ++t) a.pigeon.ResponseBasic.SecUidPair.encode(e.sec_failed_participants[t], o.uint32(66)
								.fork())
							.ldelim();
					return o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									if (n.success_participants && n.success_participants.length || (n.success_participants = []), (r & 7) === 2) {
										let c = e.uint32() + e.pos;
										for (; e.pos < c;) n.success_participants.push(e.uint64())
									} else n.success_participants.push(e.uint64());
									break
								}
							case 2:
								{
									if (n.failed_participants && n.failed_participants.length || (n.failed_participants = []), (r & 7) === 2) {
										let c = e.uint32() + e.pos;
										for (; e.pos < c;) n.failed_participants.push(e.uint64())
									} else n.failed_participants.push(e.uint64());
									break
								}
							case 3:
								{
									n.status = e.uint32();
									break
								}
							case 4:
								{
									n.extra_info = e.string();
									break
								}
							case 5:
								{
									n.check_code = e.uint64();
									break
								}
							case 6:
								{
									n.check_message = e.string();
									break
								}
							case 7:
								{
									n.sec_success_participants && n.sec_success_participants.length || (n.sec_success_participants = []),
									n.sec_success_participants.push(a.pigeon.ResponseBasic.SecUidPair.decode(e, e.uint32()));
									break
								}
							case 8:
								{
									n.sec_failed_participants && n.sec_failed_participants.length || (n.sec_failed_participants = []),
									n.sec_failed_participants.push(a.pigeon.ResponseBasic.SecUidPair.decode(e, e.uint32()));
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.success_participants != null && e.hasOwnProperty("success_participants")) {
						if (!Array.isArray(e.success_participants)) return "success_participants: array expected";
						for (let o = 0; o < e.success_participants.length; ++o)
							if (!i.isInteger(e.success_participants[o]) && !(e.success_participants[o] && i.isInteger(e.success_participants[o].low) && i.isInteger(e.success_participants[o].high))) return "success_participants: integer|Long[] expected"
					}
					if (e.failed_participants != null && e.hasOwnProperty("failed_participants")) {
						if (!Array.isArray(e.failed_participants)) return "failed_participants: array expected";
						for (let o = 0; o < e.failed_participants.length; ++o)
							if (!i.isInteger(e.failed_participants[o]) && !(e.failed_participants[o] && i.isInteger(e.failed_participants[o].low) && i.isInteger(e.failed_participants[o].high))) return "failed_participants: integer|Long[] expected"
					}
					if (e.status != null && e.hasOwnProperty("status") && !i.isInteger(e.status)) return "status: integer expected";
					if (e.extra_info != null && e.hasOwnProperty("extra_info") && !i.isString(e.extra_info)) return "extra_info: string expected";
					if (e.check_code != null && e.hasOwnProperty("check_code") && !i.isInteger(e.check_code) && !(e.check_code && i.isInteger(e.check_code.low) && i.isInteger(e.check_code.high))) return "check_code: integer|Long expected";
					if (e.check_message != null && e.hasOwnProperty("check_message") && !i.isString(e.check_message)) return "check_message: string expected";
					if (e.sec_success_participants != null && e.hasOwnProperty("sec_success_participants")) {
						if (!Array.isArray(e.sec_success_participants)) return "sec_success_participants: array expected";
						for (let o = 0; o < e.sec_success_participants.length; ++o) {
							let t = a.pigeon.ResponseBasic.SecUidPair.verify(e.sec_success_participants[o]);
							if (t) return "sec_success_participants." + t
						}
					}
					if (e.sec_failed_participants != null && e.hasOwnProperty("sec_failed_participants")) {
						if (!Array.isArray(e.sec_failed_participants)) return "sec_failed_participants: array expected";
						for (let o = 0; o < e.sec_failed_participants.length; ++o) {
							let t = a.pigeon.ResponseBasic.SecUidPair.verify(e.sec_failed_participants[o]);
							if (t) return "sec_failed_participants." + t
						}
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.ConversationAddParticipantsResponseBody;
					if (e.success_participants) {
						if (!Array.isArray(e.success_participants)) throw TypeError(".pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.success_participants: array expected");
						o.success_participants = [];
						for (let t = 0; t < e.success_participants.length; ++t) i.Long ? (o.success_participants[t] = i.Long.fromValue(e.success_participants[t]))
							.unsigned = !0 : typeof e.success_participants[t] == "string" ? o.success_participants[t] = parseInt(e.success_participants[t], 10) : typeof e.success_participants[t] == "number" ? o.success_participants[t] = e.success_participants[t] : typeof e.success_participants[t] == "object" && (o.success_participants[t] = new i.LongBits(e.success_participants[t].low >>> 0, e.success_participants[t].high >>> 0)
								.toNumber(!0))
					}
					if (e.failed_participants) {
						if (!Array.isArray(e.failed_participants)) throw TypeError(".pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.failed_participants: array expected");
						o.failed_participants = [];
						for (let t = 0; t < e.failed_participants.length; ++t) i.Long ? (o.failed_participants[t] = i.Long.fromValue(e.failed_participants[t]))
							.unsigned = !0 : typeof e.failed_participants[t] == "string" ? o.failed_participants[t] = parseInt(e.failed_participants[t], 10) : typeof e.failed_participants[t] == "number" ? o.failed_participants[t] = e.failed_participants[t] : typeof e.failed_participants[t] == "object" && (o.failed_participants[t] = new i.LongBits(e.failed_participants[t].low >>> 0, e.failed_participants[t].high >>> 0)
								.toNumber(!0))
					}
					if (e.status != null && (o.status = e.status >>> 0), e.extra_info != null && (o.extra_info = String(e.extra_info)), e.check_code != null && (i.Long ? (o.check_code = i.Long.fromValue(e.check_code))
						.unsigned = !0 : typeof e.check_code == "string" ? o.check_code = parseInt(e.check_code, 10) : typeof e.check_code == "number" ? o.check_code = e.check_code : typeof e.check_code == "object" && (o.check_code = new i.LongBits(e.check_code.low >>> 0, e.check_code.high >>> 0)
							.toNumber(!0))), e.check_message != null && (o.check_message = String(e.check_message)), e.sec_success_participants) {
						if (!Array.isArray(e.sec_success_participants)) throw TypeError(".pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.sec_success_participants: array expected");
						o.sec_success_participants = [];
						for (let t = 0; t < e.sec_success_participants.length; ++t) {
							if (typeof e.sec_success_participants[t] != "object") throw TypeError(".pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.sec_success_participants: object expected");
							o.sec_success_participants[t] = a.pigeon.ResponseBasic.SecUidPair.fromObject(e.sec_success_participants[t])
						}
					}
					if (e.sec_failed_participants) {
						if (!Array.isArray(e.sec_failed_participants)) throw TypeError(".pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.sec_failed_participants: array expected");
						o.sec_failed_participants = [];
						for (let t = 0; t < e.sec_failed_participants.length; ++t) {
							if (typeof e.sec_failed_participants[t] != "object") throw TypeError(".pigeon.ResponseBasic.ConversationAddParticipantsResponseBody.sec_failed_participants: object expected");
							o.sec_failed_participants[t] = a.pigeon.ResponseBasic.SecUidPair.fromObject(e.sec_failed_participants[t])
						}
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.success_participants = [], t.failed_participants = [], t.sec_success_participants = [], t.sec_failed_participants = []), o.defaults) {
						if (t.status = 0, t.extra_info = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.check_code = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.check_code = o.longs === String ? "0" : 0;
						t.check_message = ""
					}
					if (e.success_participants && e.success_participants.length) {
						t.success_participants = [];
						for (let n = 0; n < e.success_participants.length; ++n) typeof e.success_participants[n] == "number" ? t.success_participants[n] = o.longs === String ? String(e.success_participants[n]) : e.success_participants[n] : t.success_participants[n] = o.longs === String ? i.Long.prototype.toString.call(e.success_participants[n]) : o.longs === Number ? new i.LongBits(e.success_participants[n].low >>> 0, e.success_participants[n].high >>> 0)
							.toNumber(!0) : e.success_participants[n]
					}
					if (e.failed_participants && e.failed_participants.length) {
						t.failed_participants = [];
						for (let n = 0; n < e.failed_participants.length; ++n) typeof e.failed_participants[n] == "number" ? t.failed_participants[n] = o.longs === String ? String(e.failed_participants[n]) : e.failed_participants[n] : t.failed_participants[n] = o.longs === String ? i.Long.prototype.toString.call(e.failed_participants[n]) : o.longs === Number ? new i.LongBits(e.failed_participants[n].low >>> 0, e.failed_participants[n].high >>> 0)
							.toNumber(!0) : e.failed_participants[n]
					}
					if (e.status != null && e.hasOwnProperty("status") && (t.status = e.status), e.extra_info != null && e.hasOwnProperty("extra_info") && (t.extra_info = e.extra_info), e.check_code != null && e.hasOwnProperty("check_code") && (typeof e.check_code == "number" ? t.check_code = o.longs === String ? String(e.check_code) : e.check_code : t.check_code = o.longs === String ? i.Long.prototype.toString.call(e.check_code) : o.longs === Number ? new i.LongBits(e.check_code.low >>> 0, e.check_code.high >>> 0)
						.toNumber(!0) : e.check_code), e.check_message != null && e.hasOwnProperty("check_message") && (t.check_message = e.check_message), e.sec_success_participants && e.sec_success_participants.length) {
						t.sec_success_participants = [];
						for (let n = 0; n < e.sec_success_participants.length; ++n) t.sec_success_participants[n] = a.pigeon.ResponseBasic.SecUidPair.toObject(e.sec_success_participants[n], o)
					}
					if (e.sec_failed_participants && e.sec_failed_participants.length) {
						t.sec_failed_participants = [];
						for (let n = 0; n < e.sec_failed_participants.length; ++n) t.sec_failed_participants[n] = a.pigeon.ResponseBasic.SecUidPair.toObject(e.sec_failed_participants[n], o)
					}
					return t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ConversationAddParticipantsResponseBody"
				}, _
			}(), l.SecUidPair = function() {
				function _(s) {
					if (s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.uid = 0, _.prototype.sec_uid = "", _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					return o || (o = x.create()), e.uid != null && Object.hasOwnProperty.call(e, "uid") && o.uint32(8)
						.uint64(e.uid), e.sec_uid != null && Object.hasOwnProperty.call(e, "sec_uid") && o.uint32(18)
						.string(e.sec_uid), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.SecUidPair;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.uid = e.uint64();
									break
								}
							case 2:
								{
									n.sec_uid = e.string();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					return typeof e != "object" || e === null ? "object expected" : e.uid != null && e.hasOwnProperty("uid") && !i.isInteger(e.uid) && !(e.uid && i.isInteger(e.uid.low) && i.isInteger(e.uid.high)) ? "uid: integer|Long expected" : e.sec_uid != null && e.hasOwnProperty("sec_uid") && !i.isString(e.sec_uid) ? "sec_uid: string expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.SecUidPair) return e;
					let o = new a.pigeon.ResponseBasic.SecUidPair;
					return e.uid != null && (i.Long ? (o.uid = i.Long.fromValue(e.uid))
						.unsigned = !0 : typeof e.uid == "string" ? o.uid = parseInt(e.uid, 10) : typeof e.uid == "number" ? o.uid = e.uid : typeof e.uid == "object" && (o.uid = new i.LongBits(e.uid.low >>> 0, e.uid.high >>> 0)
							.toNumber(!0))), e.sec_uid != null && (o.sec_uid = String(e.sec_uid)), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if (o.defaults) {
						if (i.Long) {
							let n = new i.Long(0, 0, !0);
							t.uid = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.uid = o.longs === String ? "0" : 0;
						t.sec_uid = ""
					}
					return e.uid != null && e.hasOwnProperty("uid") && (typeof e.uid == "number" ? t.uid = o.longs === String ? String(e.uid) : e.uid : t.uid = o.longs === String ? i.Long.prototype.toString.call(e.uid) : o.longs === Number ? new i.LongBits(e.uid.low >>> 0, e.uid.high >>> 0)
						.toNumber(!0) : e.uid), e.sec_uid != null && e.hasOwnProperty("sec_uid") && (t.sec_uid = e.sec_uid), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.SecUidPair"
				}, _
			}(), l.ConversationRemoveParticipantsResponseBody = function() {
				function _(s) {
					if (this.failed_participants = [], this.failed_sec_participants = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.failed_participants = i.emptyArray, _.prototype.status = 0, _.prototype.extra_info = "", _.prototype.check_code = 0, _.prototype.check_message = "", _.prototype.failed_sec_participants = i.emptyArray, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.failed_participants != null && e.failed_participants.length) {
						o.uint32(10)
							.fork();
						for (let t = 0; t < e.failed_participants.length; ++t) o.uint64(e.failed_participants[t]);
						o.ldelim()
					}
					if (e.status != null && Object.hasOwnProperty.call(e, "status") && o.uint32(16)
						.uint32(e.status), e.extra_info != null && Object.hasOwnProperty.call(e, "extra_info") && o.uint32(26)
						.string(e.extra_info), e.check_code != null && Object.hasOwnProperty.call(e, "check_code") && o.uint32(32)
						.uint64(e.check_code), e.check_message != null && Object.hasOwnProperty.call(e, "check_message") && o.uint32(42)
						.string(e.check_message), e.failed_sec_participants != null && e.failed_sec_participants.length)
						for (let t = 0; t < e.failed_sec_participants.length; ++t) a.pigeon.ResponseBasic.SecUidPair.encode(e.failed_sec_participants[t], o.uint32(50)
								.fork())
							.ldelim();
					return o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									if (n.failed_participants && n.failed_participants.length || (n.failed_participants = []), (r & 7) === 2) {
										let c = e.uint32() + e.pos;
										for (; e.pos < c;) n.failed_participants.push(e.uint64())
									} else n.failed_participants.push(e.uint64());
									break
								}
							case 2:
								{
									n.status = e.uint32();
									break
								}
							case 3:
								{
									n.extra_info = e.string();
									break
								}
							case 4:
								{
									n.check_code = e.uint64();
									break
								}
							case 5:
								{
									n.check_message = e.string();
									break
								}
							case 6:
								{
									n.failed_sec_participants && n.failed_sec_participants.length || (n.failed_sec_participants = []),
									n.failed_sec_participants.push(a.pigeon.ResponseBasic.SecUidPair.decode(e, e.uint32()));
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.failed_participants != null && e.hasOwnProperty("failed_participants")) {
						if (!Array.isArray(e.failed_participants)) return "failed_participants: array expected";
						for (let o = 0; o < e.failed_participants.length; ++o)
							if (!i.isInteger(e.failed_participants[o]) && !(e.failed_participants[o] && i.isInteger(e.failed_participants[o].low) && i.isInteger(e.failed_participants[o].high))) return "failed_participants: integer|Long[] expected"
					}
					if (e.status != null && e.hasOwnProperty("status") && !i.isInteger(e.status)) return "status: integer expected";
					if (e.extra_info != null && e.hasOwnProperty("extra_info") && !i.isString(e.extra_info)) return "extra_info: string expected";
					if (e.check_code != null && e.hasOwnProperty("check_code") && !i.isInteger(e.check_code) && !(e.check_code && i.isInteger(e.check_code.low) && i.isInteger(e.check_code.high))) return "check_code: integer|Long expected";
					if (e.check_message != null && e.hasOwnProperty("check_message") && !i.isString(e.check_message)) return "check_message: string expected";
					if (e.failed_sec_participants != null && e.hasOwnProperty("failed_sec_participants")) {
						if (!Array.isArray(e.failed_sec_participants)) return "failed_sec_participants: array expected";
						for (let o = 0; o < e.failed_sec_participants.length; ++o) {
							let t = a.pigeon.ResponseBasic.SecUidPair.verify(e.failed_sec_participants[o]);
							if (t) return "failed_sec_participants." + t
						}
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody;
					if (e.failed_participants) {
						if (!Array.isArray(e.failed_participants)) throw TypeError(".pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.failed_participants: array expected");
						o.failed_participants = [];
						for (let t = 0; t < e.failed_participants.length; ++t) i.Long ? (o.failed_participants[t] = i.Long.fromValue(e.failed_participants[t]))
							.unsigned = !0 : typeof e.failed_participants[t] == "string" ? o.failed_participants[t] = parseInt(e.failed_participants[t], 10) : typeof e.failed_participants[t] == "number" ? o.failed_participants[t] = e.failed_participants[t] : typeof e.failed_participants[t] == "object" && (o.failed_participants[t] = new i.LongBits(e.failed_participants[t].low >>> 0, e.failed_participants[t].high >>> 0)
								.toNumber(!0))
					}
					if (e.status != null && (o.status = e.status >>> 0), e.extra_info != null && (o.extra_info = String(e.extra_info)), e.check_code != null && (i.Long ? (o.check_code = i.Long.fromValue(e.check_code))
						.unsigned = !0 : typeof e.check_code == "string" ? o.check_code = parseInt(e.check_code, 10) : typeof e.check_code == "number" ? o.check_code = e.check_code : typeof e.check_code == "object" && (o.check_code = new i.LongBits(e.check_code.low >>> 0, e.check_code.high >>> 0)
							.toNumber(!0))), e.check_message != null && (o.check_message = String(e.check_message)), e.failed_sec_participants) {
						if (!Array.isArray(e.failed_sec_participants)) throw TypeError(".pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.failed_sec_participants: array expected");
						o.failed_sec_participants = [];
						for (let t = 0; t < e.failed_sec_participants.length; ++t) {
							if (typeof e.failed_sec_participants[t] != "object") throw TypeError(".pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody.failed_sec_participants: object expected");
							o.failed_sec_participants[t] = a.pigeon.ResponseBasic.SecUidPair.fromObject(e.failed_sec_participants[t])
						}
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.failed_participants = [], t.failed_sec_participants = []), o.defaults) {
						if (t.status = 0, t.extra_info = "", i.Long) {
							let n = new i.Long(0, 0, !0);
							t.check_code = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.check_code = o.longs === String ? "0" : 0;
						t.check_message = ""
					}
					if (e.failed_participants && e.failed_participants.length) {
						t.failed_participants = [];
						for (let n = 0; n < e.failed_participants.length; ++n) typeof e.failed_participants[n] == "number" ? t.failed_participants[n] = o.longs === String ? String(e.failed_participants[n]) : e.failed_participants[n] : t.failed_participants[n] = o.longs === String ? i.Long.prototype.toString.call(e.failed_participants[n]) : o.longs === Number ? new i.LongBits(e.failed_participants[n].low >>> 0, e.failed_participants[n].high >>> 0)
							.toNumber(!0) : e.failed_participants[n]
					}
					if (e.status != null && e.hasOwnProperty("status") && (t.status = e.status), e.extra_info != null && e.hasOwnProperty("extra_info") && (t.extra_info = e.extra_info), e.check_code != null && e.hasOwnProperty("check_code") && (typeof e.check_code == "number" ? t.check_code = o.longs === String ? String(e.check_code) : e.check_code : t.check_code = o.longs === String ? i.Long.prototype.toString.call(e.check_code) : o.longs === Number ? new i.LongBits(e.check_code.low >>> 0, e.check_code.high >>> 0)
						.toNumber(!0) : e.check_code), e.check_message != null && e.hasOwnProperty("check_message") && (t.check_message = e.check_message), e.failed_sec_participants && e.failed_sec_participants.length) {
						t.failed_sec_participants = [];
						for (let n = 0; n < e.failed_sec_participants.length; ++n) t.failed_sec_participants[n] = a.pigeon.ResponseBasic.SecUidPair.toObject(e.failed_sec_participants[n], o)
					}
					return t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ConversationRemoveParticipantsResponseBody"
				}, _
			}(), l.BlockMembersResponseBody = function() {
				function _(s) {
					if (this.failed_members = [], s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.failed_members = i.emptyArray, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					if (o || (o = x.create()), e.failed_members != null && e.failed_members.length) {
						o.uint32(10)
							.fork();
						for (let t = 0; t < e.failed_members.length; ++t) o.uint64(e.failed_members[t]);
						o.ldelim()
					}
					return o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.BlockMembersResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									if (n.failed_members && n.failed_members.length || (n.failed_members = []), (r & 7) === 2) {
										let c = e.uint32() + e.pos;
										for (; e.pos < c;) n.failed_members.push(e.uint64())
									} else n.failed_members.push(e.uint64());
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					if (typeof e != "object" || e === null) return "object expected";
					if (e.failed_members != null && e.hasOwnProperty("failed_members")) {
						if (!Array.isArray(e.failed_members)) return "failed_members: array expected";
						for (let o = 0; o < e.failed_members.length; ++o)
							if (!i.isInteger(e.failed_members[o]) && !(e.failed_members[o] && i.isInteger(e.failed_members[o].low) && i.isInteger(e.failed_members[o].high))) return "failed_members: integer|Long[] expected"
					}
					return null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.BlockMembersResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.BlockMembersResponseBody;
					if (e.failed_members) {
						if (!Array.isArray(e.failed_members)) throw TypeError(".pigeon.ResponseBasic.BlockMembersResponseBody.failed_members: array expected");
						o.failed_members = [];
						for (let t = 0; t < e.failed_members.length; ++t) i.Long ? (o.failed_members[t] = i.Long.fromValue(e.failed_members[t]))
							.unsigned = !0 : typeof e.failed_members[t] == "string" ? o.failed_members[t] = parseInt(e.failed_members[t], 10) : typeof e.failed_members[t] == "number" ? o.failed_members[t] = e.failed_members[t] : typeof e.failed_members[t] == "object" && (o.failed_members[t] = new i.LongBits(e.failed_members[t].low >>> 0, e.failed_members[t].high >>> 0)
								.toNumber(!0))
					}
					return o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if ((o.arrays || o.defaults) && (t.failed_members = []), e.failed_members && e.failed_members.length) {
						t.failed_members = [];
						for (let n = 0; n < e.failed_members.length; ++n) typeof e.failed_members[n] == "number" ? t.failed_members[n] = o.longs === String ? String(e.failed_members[n]) : e.failed_members[n] : t.failed_members[n] = o.longs === String ? i.Long.prototype.toString.call(e.failed_members[n]) : o.longs === Number ? new i.LongBits(e.failed_members[n].low >>> 0, e.failed_members[n].high >>> 0)
							.toNumber(!0) : e.failed_members[n]
					}
					return t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.BlockMembersResponseBody"
				}, _
			}(), l.ModifyMessagePropertyResponseBody = function() {
				function _(s) {
					if (s)
						for (let e = Object.keys(s), o = 0; o < e.length; ++o) s[e[o]] != null && (this[e[o]] = s[e[o]])
				}
				return _.prototype.status = 0, _.prototype.version = 0, _.create = function(e) {
					return new _(e)
				}, _.encode = function(e, o) {
					return o || (o = x.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && o.uint32(8)
						.uint32(e.status), e.version != null && Object.hasOwnProperty.call(e, "version") && o.uint32(16)
						.uint64(e.version), o
				}, _.encodeDelimited = function(e, o) {
					return this.encode(e, o)
						.ldelim()
				}, _.decode = function(e, o) {
					e instanceof p || (e = p.create(e));
					let t = o === void 0 ? e.len : e.pos + o,
						n = new a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody;
					for (; e.pos < t;) {
						let r = e.uint32();
						switch (r >>> 3) {
							case 1:
								{
									n.status = e.uint32();
									break
								}
							case 2:
								{
									n.version = e.uint64();
									break
								}
							default:
								e.skipType(r & 7);
								break
						}
					}
					return n
				}, _.decodeDelimited = function(e) {
					return e instanceof p || (e = new p(e)), this.decode(e, e.uint32())
				}, _.verify = function(e) {
					return typeof e != "object" || e === null ? "object expected" : e.status != null && e.hasOwnProperty("status") && !i.isInteger(e.status) ? "status: integer expected" : e.version != null && e.hasOwnProperty("version") && !i.isInteger(e.version) && !(e.version && i.isInteger(e.version.low) && i.isInteger(e.version.high)) ? "version: integer|Long expected" : null
				}, _.fromObject = function(e) {
					if (e instanceof a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody) return e;
					let o = new a.pigeon.ResponseBasic.ModifyMessagePropertyResponseBody;
					return e.status != null && (o.status = e.status >>> 0), e.version != null && (i.Long ? (o.version = i.Long.fromValue(e.version))
						.unsigned = !0 : typeof e.version == "string" ? o.version = parseInt(e.version, 10) : typeof e.version == "number" ? o.version = e.version : typeof e.version == "object" && (o.version = new i.LongBits(e.version.low >>> 0, e.version.high >>> 0)
							.toNumber(!0))), o
				}, _.toObject = function(e, o) {
					o || (o = {});
					let t = {};
					if (o.defaults)
						if (t.status = 0, i.Long) {
							let n = new i.Long(0, 0, !0);
							t.version = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n
						} else t.version = o.longs === String ? "0" : 0;
					return e.status != null && e.hasOwnProperty("status") && (t.status = e.status), e.version != null && e.hasOwnProperty("version") && (typeof e.version == "number" ? t.version = o.longs === String ? String(e.version) : e.version : t.version = o.longs === String ? i.Long.prototype.toString.call(e.version) : o.longs === Number ? new i.LongBits(e.version.low >>> 0, e.version.high >>> 0)
						.toNumber(!0) : e.version), t
				}, _.prototype.toJSON = function() {
					return this.constructor.toObject(this, w.util.toJSONOptions)
				}, _.getTypeUrl = function(e) {
					return e === void 0 && (e = "type.googleapis.com"), e + "/pigeon.ResponseBasic.ModifyMessagePropertyResponseBody"
				}, _
			}(), l
		}(), f
	})();

	module.exports = z;