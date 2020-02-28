window.TILE_VERSION = {
	"ditu": {
		"normal": {
			"version": "088",
			"updateDate": "20200225"
		},
		"satellite": {
			"version": "009",
			"updateDate": "20200225"
		},
		"normalTraffic": {
			"version": "081",
			"updateDate": "20200225"
		},
		"satelliteTraffic": {
			"version": "083",
			"updateDate": "20200225"
		},
		"mapJS": {
			"version": "104",
			"updateDate": "20200225"
		},
		"satelliteStreet": {
			"version": "083",
			"updateDate": "20200225"
		},
		"earthVector": {
			"version": "001",
			"updateDate": "20200225"
		}
	},
	"webapp": {
		"high_normal": {
			"version": "001",
			"updateDate": "20200225"
		},
		"lower_normal": {
			"version": "002",
			"updateDate": "20200225"
		}
	},
	"api_for_mobile": {
		"vector": {
			"version": "002",
			"updateDate": "20200225"
		},
		"vectorIcon": {
			"version": "002",
			"updateDate": "20200225"
		}
	}
};
window.BMAP_AUTHENTIC_KEY = "";
(function() {
	function aa(a) {
		throw a;
	}
	var l = void 0,
		p = !0,
		s = null,
		t = !1;

	function u() {
		return function() {}
	}

	function ca(a) {
		return function(b) {
			this[a] = b
		}
	}

	function x(a) {
		return function() {
			return this[a]
		}
	}

	function ea(a) {
		return function() {
			return a
		}
	}
	var fa, ga = [];

	function ha(a) {
		return function() {
			return ga[a].apply(this, arguments)
		}
	}

	function ia(a, b) {
		return ga[a] = b
	}
	var ja, z = ja = z || {
		version: "1.3.4"
	};
	z.ea = "$BAIDU$";
	window[z.ea] = window[z.ea] || {};
	z.object = z.object || {};
	z.extend = z.object.extend = function(a, b) {
		for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
		return a
	};
	z.U = z.U || {};
	z.U.da = function(a) {
		return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType ||
			9 == a.nodeType) ? a : s
	};
	z.da = z.Ec = z.U.da;
	z.U.aa = function(a) {
		a = z.U.da(a);
		if (a === s) return a;
		a.style.display = "none";
		return a
	};
	z.aa = z.U.aa;
	z.lang = z.lang || {};
	z.lang.sg = function(a) {
		return "[object String]" == Object.prototype.toString.call(a)
	};
	z.sg = z.lang.sg;
	z.lang.om = function(a) {
		if ("[object Object]" === Object.prototype.toString.call(a)) {
			for (var b in a) return t;
			return p
		}
		return t
	};
	z.om = z.lang.om;
	z.U.Ej = function(a) {
		return z.lang.sg(a) ? document.getElementById(a) : a
	};
	z.Ej = z.U.Ej;
	z.U.getElementsByClassName = function(a, b) {
		var c;
		if (a.getElementsByClassName) c = a.getElementsByClassName(b);
		else {
			var e = a;
			e == s && (e = document);
			c = [];
			var e = e.getElementsByTagName("*"),
				f = e.length,
				g = RegExp("(^|\\s)" + b + "(\\s|$)"),
				i, k;
			for (k = i = 0; i < f; i++) g.test(e[i].className) && (c[k] = e[i], k++)
		}
		return c
	};
	z.getElementsByClassName = z.U.getElementsByClassName;
	z.U.contains = function(a, b) {
		var c = z.U.Ej,
			a = c(a),
			b = c(b);
		return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
	};
	z.fa = z.fa || {};
	/msie (\d+\.\d)/i.test(navigator.userAgent) && (z.fa.ma = z.ma = document.documentMode || +RegExp.$1);
	var ka = {
		cellpadding: "cellPadding",
		cellspacing: "cellSpacing",
		colspan: "colSpan",
		rowspan: "rowSpan",
		valign: "vAlign",
		usemap: "useMap",
		frameborder: "frameBorder"
	};
	8 > z.fa.ma ? (ka["for"] = "htmlFor", ka["class"] = "className") : (ka.htmlFor = "for", ka.className = "class");
	z.U.TF = ka;
	z.U.xE = function(a, b, c) {
		a = z.U.da(a);
		if (a === s) return a;
		if ("style" == b) a.style.cssText = c;
		else {
			b = z.U.TF[b] || b;
			a.setAttribute(b, c)
		}
		return a
	};
	z.xE = z.U.xE;
	z.U.yE = function(a, b) {
		a = z.U.da(a);
		if (a === s) return a;
		for (var c in b) z.U.xE(a, c, b[c]);
		return a
	};
	z.yE = z.U.yE;
	z.Jk = z.Jk || {};
	(function() {
		var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
		z.Jk.trim = function(b) {
			return ("" + b).replace(a, "")
		}
	})();
	z.trim = z.Jk.trim;
	z.Jk.Ao = function(a, b) {
		var a = "" + a,
			c = Array.prototype.slice.call(arguments, 1),
			e = Object.prototype.toString;
		if (c.length) {
			c = c.length == 1 ? b !== s && /\[object Array\]|\[object Object\]/.test(e.call(b)) ? b : c : c;
			return a.replace(/#\{(.+?)\}/g, function(a, b) {
				var i = c[b];
				"[object Function]" == e.call(i) && (i = i(b));
				return "undefined" == typeof i ? "" : i
			})
		}
		return a
	};
	z.Ao = z.Jk.Ao;
	z.U.tc = function(a, b) {
		a = z.U.da(a);
		if (a === s) return a;
		for (var c = a.className.split(/\s+/), e = b.split(/\s+/), f, g = e.length, i, k = 0; k < g; ++k) {
			i = 0;
			for (f = c.length; i < f; ++i)
				if (c[i] == e[k]) {
					c.splice(i, 1);
					break
				}
		}
		a.className = c.join(" ");
		return a
	};
	z.tc = z.U.tc;
	z.U.fx = function(a, b, c) {
		a = z.U.da(a);
		if (a === s) return a;
		var e;
		if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
		else {
			e = a.ownerDocument.createRange();
			b = b.toUpperCase();
			if (b == "AFTERBEGIN" || b == "BEFOREEND") {
				e.selectNodeContents(a);
				e.collapse(b == "AFTERBEGIN")
			} else {
				b = b == "BEFOREBEGIN";
				e[b ? "setStartBefore" : "setEndAfter"](a);
				e.collapse(b)
			}
			e.insertNode(e.createContextualFragment(c))
		}
		return a
	};
	z.fx = z.U.fx;
	z.U.show = function(a) {
		a = z.U.da(a);
		if (a === s) return a;
		a.style.display = "";
		return a
	};
	z.show = z.U.show;
	z.U.TC = function(a) {
		a = z.U.da(a);
		return a === s ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
	};
	z.U.eb = function(a, b) {
		a = z.U.da(a);
		if (a === s) return a;
		for (var c = b.split(/\s+/), e = a.className, f = " " + e + " ", g = 0, i = c.length; g < i; g++) f.indexOf(" " + c[
			g] + " ") < 0 && (e = e + (" " + c[g]));
		a.className = e;
		return a
	};
	z.eb = z.U.eb;
	z.U.WA = z.U.WA || {};
	z.U.Cl = z.U.Cl || [];
	z.U.Cl.filter = function(a, b, c) {
		for (var e = 0, f = z.U.Cl, g; g = f[e]; e++)
			if (g = g[c]) b = g(a, b);
		return b
	};
	z.Jk.HN = function(a) {
		return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
			return a.charAt(1).toUpperCase()
		})
	};
	z.U.z_ = function(a) {
		z.U.As(a, "expand") ? z.U.tc(a, "expand") : z.U.eb(a, "expand")
	};
	z.U.As = function(a) {
		if (arguments.length <= 0 || typeof a === "function") return this;
		if (this.size() <= 0) return t;
		var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
			b = a.split(" "),
			c;
		z.forEach(this, function(a) {
			for (var a = a.className, f = 0; f < b.length; f++)
				if (!~(" " + a + " ").indexOf(" " + b[f] + " ")) {
					c = t;
					return
				} c !== t && (c = p)
		});
		return c
	};
	z.U.rg = function(a, b) {
		var c = z.U,
			a = c.da(a);
		if (a === s) return a;
		var b = z.Jk.HN(b),
			e = a.style[b];
		if (!e) var f = c.WA[b],
			e = a.currentStyle || (z.fa.ma ? a.style : getComputedStyle(a, s)),
			e = f && f.get ? f.get(a, e) : e[f || b];
		if (f = c.Cl) e = f.filter(b, e, "get");
		return e
	};
	z.rg = z.U.rg;
	/opera\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.opera = +RegExp.$1);
	z.fa.wL = /webkit/i.test(navigator.userAgent);
	z.fa.UX = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
	z.fa.HD = "CSS1Compat" == document.compatMode;
	z.U.ja = function(a) {
		a = z.U.da(a);
		if (a === s) return a;
		var b = z.U.TC(a),
			c = z.fa,
			e = z.U.rg;
		c.UX > 0 && b.getBoxObjectFor && e(a, "position");
		var f = {
				left: 0,
				top: 0
			},
			g;
		if (a == (c.ma && !c.HD ? b.body : b.documentElement)) return f;
		if (a.getBoundingClientRect) {
			a = a.getBoundingClientRect();
			f.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
			f.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
			f.left = f.left - b.documentElement.clientLeft;
			f.top = f.top - b.documentElement.clientTop;
			a = b.body;
			b = parseInt(e(a, "borderLeftWidth"));
			e = parseInt(e(a, "borderTopWidth"));
			if (c.ma && !c.HD) {
				f.left = f.left - (isNaN(b) ? 2 : b);
				f.top = f.top - (isNaN(e) ? 2 : e)
			}
		} else {
			g = a;
			do {
				f.left = f.left + g.offsetLeft;
				f.top = f.top + g.offsetTop;
				if (c.wL > 0 && e(g, "position") == "fixed") {
					f.left = f.left + b.body.scrollLeft;
					f.top = f.top + b.body.scrollTop;
					break
				}
				g = g.offsetParent
			} while (g && g != a);
			if (c.opera > 0 || c.wL > 0 && e(a, "position") == "absolute") f.top = f.top - b.body.offsetTop;
			for (g = a.offsetParent; g && g != b.body;) {
				f.left = f.left - g.scrollLeft;
				if (!c.opera || g.tagName != "TR") f.top = f.top - g.scrollTop;
				g = g.offsetParent
			}
		}
		return f
	};
	/firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.Qe = +RegExp.$1);
	/BIDUBrowser/i.test(navigator.userAgent) && (z.fa.B1 = p);
	var la = navigator.userAgent;
	/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (z.fa.Px = +(RegExp.$1 || RegExp.$2));
	/chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (z.fa.bw = +RegExp.$1);
	z.lc = z.lc || {};
	z.lc.Ob = function(a, b) {
		var c, e, f = a.length;
		if ("function" == typeof b)
			for (e = 0; e < f; e++) {
				c = a[e];
				c = b.call(a, c, e);
				if (c === t) break
			}
		return a
	};
	z.Ob = z.lc.Ob;
	z.lang.ea = function() {
		return "TANGRAM__" + (window[z.ea]._counter++).toString(36)
	};
	window[z.ea]._counter = window[z.ea]._counter || 1;
	window[z.ea]._instances = window[z.ea]._instances || {};
	z.lang.Ks = function(a) {
		return "[object Function]" == Object.prototype.toString.call(a)
	};
	z.lang.Ga = function(a) {
		this.ea = a || z.lang.ea();
		window[z.ea]._instances[this.ea] = this
	};
	window[z.ea]._instances = window[z.ea]._instances || {};
	z.lang.Ga.prototype.Sh = ha(0);
	z.lang.Ga.prototype.toString = function() {
		return "[object " + (this.FP || "Object") + "]"
	};
	z.lang.cu = function(a, b) {
		this.type = a;
		this.returnValue = p;
		this.target = b || s;
		this.currentTarget = s
	};
	z.lang.Ga.prototype.addEventListener = function(a, b, c) {
		if (z.lang.Ks(b)) {
			!b.Uk && (b.Uk = {});
			!this.wi && (this.wi = {});
			var e = this.wi,
				f;
			if (typeof c == "string" && c) {
				/[^\w\-]/.test(c) && aa("nonstandard key:" + c);
				f = b.Ww = c
			}
			a.indexOf("on") != 0 && (a = "on" + a);
			typeof e[a] != "object" && (e[a] = {});
			typeof b.Uk[a] != "object" && (b.Uk[a] = {});
			f = f || z.lang.ea();
			b.Uk[a].Ww = f;
			e[a][f] = b
		}
	};
	z.lang.Ga.prototype.removeEventListener = function(a, b) {
		a.indexOf("on") != 0 && (a = "on" + a);
		if (z.lang.Ks(b)) {
			if (!b.Uk || !b.Uk[a]) return;
			b = b.Uk[a].Ww
		} else if (!z.lang.sg(b)) return;
		!this.wi && (this.wi = {});
		var c = this.wi;
		c[a] && c[a][b] && delete c[a][b]
	};
	z.lang.Ga.prototype.dispatchEvent = function(a, b) {
		z.lang.sg(a) && (a = new z.lang.cu(a));
		!this.wi && (this.wi = {});
		var b = b || {},
			c;
		for (c in b) a[c] = b[c];
		var e = this.wi,
			f = a.type;
		a.target = a.target || this;
		a.currentTarget = this;
		f.indexOf("on") != 0 && (f = "on" + f);
		z.lang.Ks(this[f]) && this[f].apply(this, arguments);
		if (typeof e[f] == "object")
			for (c in e[f]) e[f][c].apply(this, arguments);
		return a.returnValue
	};
	z.lang.wa = function(a, b, c) {
		var e, f, g = a.prototype;
		f = new Function;
		f.prototype = b.prototype;
		f = a.prototype = new f;
		for (e in g) f[e] = g[e];
		a.prototype.constructor = a;
		a.m_ = b.prototype;
		if ("string" == typeof c) f.FP = c
	};
	z.wa = z.lang.wa;
	z.lang.Mc = function(a) {
		return window[z.ea]._instances[a] || s
	};
	z.platform = z.platform || {};
	z.platform.pL = /macintosh/i.test(navigator.userAgent);
	z.platform.E3 = /MicroMessenger/i.test(navigator.userAgent);
	z.platform.xL = /windows/i.test(navigator.userAgent);
	z.platform.dY = /x11/i.test(navigator.userAgent);
	z.platform.jj = /android/i.test(navigator.userAgent);
	/android (\d+(\.\d)?)/i.test(navigator.userAgent) && (z.platform.pB = z.pB = RegExp.$1);
	z.platform.WX = /ipad/i.test(navigator.userAgent);
	z.platform.DD = /iphone/i.test(navigator.userAgent);

	function ma(a, b) {
		a.domEvent = b = window.event || b;
		a.clientX = b.clientX || b.pageX;
		a.clientY = b.clientY || b.pageY;
		a.offsetX = b.offsetX || b.layerX;
		a.offsetY = b.offsetY || b.layerY;
		a.screenX = b.screenX;
		a.screenY = b.screenY;
		a.ctrlKey = b.ctrlKey || b.metaKey;
		a.shiftKey = b.shiftKey;
		a.altKey = b.altKey;
		if (b.touches) {
			a.touches = [];
			for (var c = 0; c < b.touches.length; c++) a.touches.push({
				clientX: b.touches[c].clientX,
				clientY: b.touches[c].clientY,
				screenX: b.touches[c].screenX,
				screenY: b.touches[c].screenY,
				pageX: b.touches[c].pageX,
				pageY: b.touches[c].pageY,
				target: b.touches[c].target,
				identifier: b.touches[c].identifier
			})
		}
		if (b.changedTouches) {
			a.changedTouches = [];
			for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
				clientX: b.changedTouches[c].clientX,
				clientY: b.changedTouches[c].clientY,
				screenX: b.changedTouches[c].screenX,
				screenY: b.changedTouches[c].screenY,
				pageX: b.changedTouches[c].pageX,
				pageY: b.changedTouches[c].pageY,
				target: b.changedTouches[c].target,
				identifier: b.changedTouches[c].identifier
			})
		}
		if (b.targetTouches) {
			a.targetTouches = [];
			for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
				clientX: b.targetTouches[c].clientX,
				clientY: b.targetTouches[c].clientY,
				screenX: b.targetTouches[c].screenX,
				screenY: b.targetTouches[c].screenY,
				pageX: b.targetTouches[c].pageX,
				pageY: b.targetTouches[c].pageY,
				target: b.targetTouches[c].target,
				identifier: b.targetTouches[c].identifier
			})
		}
		a.rotation = b.rotation;
		a.scale = b.scale;
		return a
	}
	z.lang.uw = function(a) {
		var b = window[z.ea];
		b.LR && delete b.LR[a]
	};
	z.event = {};
	z.V = z.event.V = function(a, b, c) {
		if (!(a = z.da(a))) return a;
		b = b.replace(/^on/, "");
		a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent && a.attachEvent("on" + b, c);
		return a
	};
	z.dd = z.event.dd = function(a, b, c) {
		if (!(a = z.da(a))) return a;
		b = b.replace(/^on/, "");
		a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c);
		return a
	};
	z.U.As = function(a, b) {
		if (!a || !a.className || typeof a.className != "string") return t;
		var c = -1;
		try {
			c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
		} catch (e) {
			return t
		}
		return c > -1
	};
	z.aK = function() {
		function a(a) {
			document.addEventListener && (this.element = a, this.dK = this.sk ? "touchstart" : "mousedown", this.BC = this.sk ?
				"touchmove" : "mousemove", this.AC = this.sk ? "touchend" : "mouseup", this.hh = t, this.It = this.Ht = 0, this.element
				.addEventListener(this.dK, this, t), ja.V(this.element, "mousedown", u()), this.handleEvent(s))
		}
		a.prototype = {
			sk: "ontouchstart" in window || "createTouch" in document,
			start: function(a) {
				na(a);
				this.hh = t;
				this.Ht = this.sk ? a.touches[0].clientX : a.clientX;
				this.It = this.sk ? a.touches[0].clientY : a.clientY;
				this.element.addEventListener(this.BC, this, t);
				this.element.addEventListener(this.AC, this, t)
			},
			move: function(a) {
				oa(a);
				var c = this.sk ? a.touches[0].clientY : a.clientY;
				if (10 < Math.abs((this.sk ? a.touches[0].clientX : a.clientX) - this.Ht) || 10 < Math.abs(c - this.It)) this.hh =
					p
			},
			end: function(a) {
				oa(a);
				this.hh || (a = document.createEvent("Event"), a.initEvent("tap", t, p), this.element.dispatchEvent(a));
				this.element.removeEventListener(this.BC, this, t);
				this.element.removeEventListener(this.AC, this, t)
			},
			handleEvent: function(a) {
				if (a) switch (a.type) {
					case this.dK:
						this.start(a);
						break;
					case this.BC:
						this.move(a);
						break;
					case this.AC:
						this.end(a)
				}
			}
		};
		return function(b) {
			return new a(b)
		}
	}();
	var D = window.BMap || {};
	D.version = "3.0";
	D.s1 = 0.34 > Math.random();
	0 <= D.version.indexOf("#") && (D.version = "3.0");
	D.Zq = [];
	D.We = function(a) {
		this.Zq.push(a)
	};
	D.Pq = [];
	D.wm = function(a) {
		this.Pq.push(a)
	};
	D.ZT = D.apiLoad || u();
	D.Z_ = D.verify || function() {
		D.version && D.version >= 1.5 && pa(D.nd + "?qt=verify&ak=" + qa, function(a) {
			if (a && a.error !== 0) {
				if (typeof map !== "undefined") {
					map.Ta().innerHTML = "";
					map.wi = {}
				}
				D = s;
				var b =
					"\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
				switch (a.error) {
					case 101:
						b =
							"\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
						break;
					case 102:
						b =
							"\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
				}
				alert(b)
			}
		})
	};
	var qa = window.BMAP_AUTHENTIC_KEY;
	window.BMAP_AUTHENTIC_KEY = s;
	var sa = window.BMap_loadScriptTime,
		ta = (new Date).getTime(),
		ua = s,
		wa = p,
		xa = 5042,
		za = 5002,
		Aa = 5003,
		Ba = "load_mapclick",
		Ca = 5038,
		Da = 5041,
		Fa = 5047,
		Ga = 5036,
		Ha = 5039,
		Ia = 5037,
		Ja = 5040,
		Ka = 5011,
		Ma = 7E3;
	var Na = 0;

	function Oa(a, b) {
		if (a = z.da(a)) {
			var c = this;
			z.lang.Ga.call(c);
			b = b || {};
			c.R = {
				CB: 200,
				Xb: p,
				zw: t,
				qC: p,
				wo: p,
				xo: b.enableWheelZoom || t,
				ZJ: p,
				tC: p,
				bs: p,
				as: p,
				xC: p,
				uo: b.enable3DBuilding || t,
				Hc: 25,
				l0: 240,
				MT: 450,
				yc: H.yc,
				Gd: H.Gd,
				Ls: !!b.Ls,
				hc: Math.round(b.minZoom) || 1,
				pc: Math.round(b.maxZoom) || 19,
				xb: b.mapType || Pa,
				E4: t,
				WJ: b.drawer || Na,
				yw: p,
				xw: 500,
				QV: b.enableHighResolution !== t,
				sC: b.enableMapClick !== t,
				devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
				hF: 99,
				we: b.mapStyle || s,
				kY: b.logoControl === t ? t : p,
				fU: [],
				E1: b.beforeClickIcon || s,
				og: t,
				gk: t,
				po: t,
				bE: p,
				mC: b.enableBizAuthLogo === t ? t : p
			};
			c.R.we && (this.HX(c.R.we.controls), this.kL(c.R.we.geotableId));
			c.R.we && c.R.we.styleId && c.b3(c.R.we.styleId);
			c.R.FB = {
				dark: {
					backColor: "#2D2D2D",
					textColor: "#bfbfbf",
					iconUrl: "dicons"
				},
				normal: {
					backColor: "#F3F1EC",
					textColor: "#c61b1b",
					iconUrl: "icons"
				},
				light: {
					backColor: "#EBF8FC",
					textColor: "#017fb4",
					iconUrl: "licons"
				}
			};
			b.enableAutoResize && (c.R.as = b.enableAutoResize);
			b.enableStreetEntrance === t && (c.R.xC = b.enableStreetEntrance);
			b.enableDeepZoom === t && (c.R.ZJ = b.enableDeepZoom);
			var e = c.R.fU;
			if (I())
				for (var f = 0, g = e.length; f < g; f++)
					if (z.fa[e[f]]) {
						c.R.devicePixelRatio = 1;
						break
					} e = -1 < navigator.userAgent.toLowerCase().indexOf("android");
			f = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
			if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || e && f) c.R.hF = 99;
			c.Ya = a;
			c.PA(a);
			a.unselectable = "on";
			a.innerHTML = "";
			a.appendChild(c.za());
			b.size && this.Ae(b.size);
			e = c.Hb();
			c.width = e.width;
			c.height = e.height;
			c.offsetX = 0;
			c.offsetY = 0;
			c.platform = a.firstChild;
			c.xe = c.platform.firstChild;
			c.xe.style.width = c.width + "px";
			c.xe.style.height = c.height + "px";
			c.Xd = {};
			c.pe = new J(0, 0);
			c.gc = new J(0, 0);
			c.Va = 3;
			c.Bc = 0;
			c.QB = s;
			c.PB = s;
			c.Wb = "";
			c.cw = "";
			c.Bh = {};
			c.Bh.custom = {};
			c.yi = {};
			c.Wa = 0;
			b.useWebGL === t && Qa(t);
			c.W = new Ra(a, {
				jf: "api",
				QR: p
			});
			c.W.aa();
			c.W.DE(c);
			b = b || {};
			e = c.xb = c.R.xb;
			c.Pc = e.pk();
			e === Sa && Ta(za);
			e === Va && Ta(Aa);
			e = c.R;
			e.$N = Math.round(b.minZoom);
			e.ZN = Math.round(b.maxZoom);
			c.vu();
			c.$ = {
				Ic: t,
				mc: 0,
				Qs: 0,
				DL: 0,
				I3: 0,
				uB: t,
				mE: -1,
				re: []
			};
			c.platform.style.cursor = c.R.yc;
			for (f = 0; f < D.Zq.length; f++) D.Zq[f](c);
			c.$.mE = f;
			c.ga();
			K.load("map", function() {
				c.jb()
			});
			c.R.sC && (setTimeout(function() {
				Ta(Ba)
			}, 1E3), K.load("mapclick", function() {
				window.MPC_Mgr = window.MPC_Mgr || {};
				window.MPC_Mgr[c.ea] = new Wa(c)
			}, p));
			Xa() && K.load("oppc", function() {
				c.ku()
			});
			I() && K.load("opmb", function() {
				c.ku()
			});
			a = s;
			c.cB = []
		}
	}
	z.lang.wa(Oa, z.lang.Ga, "Map");
	z.extend(Oa.prototype, {
		za: function() {
			var a = O("div"),
				b = a.style;
			b.overflow = "visible";
			b.position = "absolute";
			b.zIndex = "0";
			b.top = b.left = "0px";
			var b = O("div", {
					"class": "BMap_mask"
				}),
				c = b.style;
			c.position = "absolute";
			c.top = c.left = "0px";
			c.zIndex = "9";
			c.overflow = "hidden";
			c.WebkitUserSelect = "none";
			a.appendChild(b);
			return a
		},
		PA: function(a) {
			var b = a.style;
			b.overflow = "hidden";
			"absolute" !== Ya(a).position && (b.position = "relative", b.zIndex = 0);
			b.backgroundColor = "#F3F1EC";
			b.color = "#000";
			b.textAlign = "left"
		},
		ga: function() {
			var a = this;
			a.Vn = function() {
				var b = a.Hb();
				if (a.width !== b.width || a.height !== b.height) {
					var c = new P(a.width, a.height),
						e = new Q("onbeforeresize");
					e.size = c;
					a.dispatchEvent(e);
					a.Xj((b.width - a.width) / 2, (b.height - a.height) / 2);
					a.xe.style.width = (a.width = b.width) + "px";
					a.xe.style.height = (a.height = b.height) + "px";
					c = new Q("onresize");
					c.size = b;
					a.dispatchEvent(c)
				}
			};
			a.R.as && (a.$.Ml = setInterval(a.Vn, 80))
		},
		Xj: function(a, b, c, e) {
			var f = this.va().fc(this.ka()),
				g = this.Pc,
				i = p;
			c && J.oL(c) && (this.pe = new J(c.lng, c.lat), i = t);
			if (c = c && e ? g.ci(c, this.Wb) : this.gc)
				if (this.gc = new J(c.lng + a * f, c.lat - b * f), (a = g.gh(this.gc, this.Wb)) && i) this.pe = a
		},
		Cg: function(a, b) {
			if (Za(a) && (this.vu(), this.dispatchEvent(new Q("onzoomstart")), a = this.xn(a).zoom, a !== this.Va)) {
				this.Bc = this.Va;
				this.Va = a;
				var c;
				b ? c = b : this.bh() && (c = this.bh().ja());
				c && (c = this.Sb(c, this.Bc), this.Xj(this.width / 2 - c.x, this.height / 2 - c.y, this.Ib(c, this.Bc), p));
				this.dispatchEvent(new Q("onzoomstartcode"))
			}
		},
		Qc: function(a) {
			this.Cg(a)
		},
		nF: function(a) {
			this.Cg(this.Va + 1, a)
		},
		oF: function(a) {
			this.Cg(this.Va - 1, a)
		},
		ki: function(a) {
			a instanceof J && (this.gc = this.Pc.ci(a, this.Wb), this.pe = J.oL(a) ? new J(a.lng, a.lat) : this.Pc.gh(this.gc,
				this.Wb))
		},
		xg: function(a, b) {
			a = Math.round(a) || 0;
			b = Math.round(b) || 0;
			this.Xj(-a, -b)
		},
		wr: function(a) {
			a && $a(a.Fe) && (a.Fe(this), this.dispatchEvent(new Q("onaddcontrol", a)))
		},
		PM: function(a) {
			a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremovecontrol", a)))
		},
		Zn: function(a) {
			a && $a(a.xa) && (a.xa(this), this.dispatchEvent(new Q("onaddcontextmenu", a)))
		},
		dp: function(a) {
			a && $a(a.remove) && (this.dispatchEvent(new Q("onremovecontextmenu", a)), a.remove())
		},
		Pa: function(a) {
			a && $a(a.Fe) && (a.Fe(this), this.dispatchEvent(new Q("onaddoverlay", a)))
		},
		Tb: function(a) {
			a && $a(a.remove) && (a.remove(), this.dispatchEvent(new Q("onremoveoverlay", a)))
		},
		rJ: function() {
			this.dispatchEvent(new Q("onclearoverlays"))
		},
		Me: function(a) {
			a && this.dispatchEvent(new Q("onaddtilelayer", a))
		},
		Vf: function(a) {
			a && this.dispatchEvent(new Q("onremovetilelayer", a))
		},
		Ag: function(a) {
			if (this.xb !== a) {
				this.R.nY && this.KZ(a);
				var b = new Q("onsetmaptype");
				b.v4 = this.xb;
				this.xb = this.R.xb = a;
				this.Pc = this.xb.pk();
				this.Xj(0, 0, this.Cb(), p);
				this.vu();
				var c = this.xn(this.ka()).zoom;
				this.Cg(c);
				this.dispatchEvent(b);
				b = new Q("onmaptypechange");
				b.Va = c;
				b.xb = a;
				this.dispatchEvent(b);
				(a === ab || a === Va) && Ta(Aa)
			}
		},
		KZ: function(a) {
			a === ab || a === Va ? (this.Tx(p), this.gN(t), this.R.og = t, this.R.gk = t) : (this.Tx(t), this.gN(p), this.R.og =
				p, this.R.gk = p)
		},
		qf: function(a) {
			var b = this;
			if (a instanceof J) b.ki(a, {
				noAnimation: p
			});
			else if (bb(a))
				if (b.xb === Sa) {
					var c = H.yB[a];
					c && (pt = c.o, b.qf(pt))
				} else {
					var e = this.WG();
					e.xt(function(c) {
						0 === e.fm() && 2 === e.Ma.result.type && (b.qf(c.ok(0).point), Sa.kk(a) && b.AE(a))
					});
					e.search(a, {
						log: "center"
					})
				}
		},
		Ed: function(a, b) {
			"[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
			D.Tp("cus.fire", "time", {
				z_loadscripttime: ta - sa
			});
			var c = this;
			if (bb(a))
				if (c.xb === Sa) {
					var e = H.yB[a];
					e && (pt = e.o, c.Ed(pt, b))
				} else {
					var f = c.WG();
					f.xt(function(e) {
						if (0 === f.fm() && (2 === f.Ma.result.type || 11 === f.Ma.result.type)) {
							var e = e.ok(0).point,
								g = b || db.Dw(f.Ma.content.level, c);
							c.Ed(e, g);
							Sa.kk(a) && c.AE(a)
						}
					});
					f.search(a, {
						log: "center"
					})
				}
			else if (a instanceof J && b) {
				b = c.xn(b).zoom;
				c.Bc = c.Va || b;
				c.Va = b;
				e = c.pe;
				c.pe = new J(a.lng, a.lat);
				c.gc = c.Pc.ci(c.pe, c.Wb);
				c.QB = c.QB || c.Va;
				c.PB = c.PB || c.pe;
				var g = new Q("onload"),
					i = new Q("onloadcode");
				g.point = new J(a.lng, a.lat);
				g.pixel = c.Sb(c.pe, c.Va);
				g.zoom = b;
				c.loaded || (c.loaded = p, c.dispatchEvent(g), ua || (ua = eb()));
				c.dispatchEvent(i);
				g = new Q("onmoveend");
				g.kz = "centerAndZoom";
				e.oc(c.pe) || c.dispatchEvent(g);
				c.dispatchEvent(new Q("onmoveend"));
				c.Bc !== c.Va && (e = new Q("onzoomend"), e.kz = "centerAndZoom", c.dispatchEvent(e));
				c.R.uo && c.uo()
			}
		},
		WG: function() {
			this.$.PL || (this.$.PL = new fb(1));
			return this.$.PL
		},
		reset: function() {
			this.Ed(this.PB, this.QB, p)
		},
		enableDragging: function() {
			this.R.Xb = p
		},
		disableDragging: function() {
			this.R.Xb = t
		},
		enableInertialDragging: function() {
			this.R.yw = p
		},
		disableInertialDragging: function() {
			this.R.yw = t
		},
		enableScrollWheelZoom: function() {
			this.R.xo = p
		},
		disableScrollWheelZoom: function() {
			this.R.xo = t
		},
		enableContinuousZoom: function() {
			this.R.wo = p
		},
		disableContinuousZoom: function() {
			this.R.wo = t
		},
		enableDoubleClickZoom: function() {
			this.R.qC = p
		},
		disableDoubleClickZoom: function() {
			this.R.qC = t
		},
		enableKeyboard: function() {
			this.R.zw = p
		},
		disableKeyboard: function() {
			this.R.zw = t
		},
		enablePinchToZoom: function() {
			this.R.bs = p
		},
		disablePinchToZoom: function() {
			this.R.bs = t
		},
		enableAutoResize: function() {
			this.R.as = p;
			this.Vn();
			this.$.Ml || (this.$.Ml = setInterval(this.Vn, 80))
		},
		disableAutoResize: function() {
			this.R.as = t;
			this.$.Ml && (clearInterval(this.$.Ml), this.$.Ml = s)
		},
		enableBizAuthLogo: function() {
			this.R.mC = p;
			this.ho && this.ho.show()
		},
		disableBizAuthLogo: function() {
			this.R.mC = t;
			this.ho && this.ho.aa()
		},
		uo: function() {
			this.R.uo = p;
			this.gn || (this.gn = new BuildingLayer({
				l2: p
			}), this.Me(this.gn))
		},
		qV: function() {
			this.R.uo = t;
			this.gn && (this.Vf(this.gn), this.gn = s, delete this.gn)
		},
		Hb: function() {
			return this.Or && this.Or instanceof P ? new P(this.Or.width, this.Or.height) : new P(this.Ya.clientWidth, this.Ya
				.clientHeight)
		},
		Ae: function(a) {
			a && a instanceof P ? (this.Or = a, this.Ya.style.width = a.width + "px", this.Ya.style.height = a.height + "px") :
				this.Or = s
		},
		Cb: x("pe"),
		ka: x("Va"),
		EU: function() {
			this.Vn()
		},
		xn: function(a) {
			var b = this.R.hc,
				c = this.R.pc,
				e = t,
				a = Math.round(a);
			a < b && (e = p, a = b);
			a > c && (e = p, a = c);
			return {
				zoom: a,
				CC: e
			}
		},
		Ta: x("Ya"),
		Sb: function(a, b) {
			b = b || this.ka();
			return this.Pc.Sb(a, b, this.gc, this.Hb(), this.Wb)
		},
		Ib: function(a, b) {
			b = b || this.ka();
			return this.Pc.Ib(a, b, this.gc, this.Hb(), this.Wb)
		},
		Ve: function(a, b) {
			if (a) {
				var c = this.Sb(new J(a.lng, a.lat), b);
				c.x -= this.offsetX;
				c.y -= this.offsetY;
				return c
			}
		},
		yM: function(a, b) {
			if (a) {
				var c = new R(a.x, a.y);
				c.x += this.offsetX;
				c.y += this.offsetY;
				return this.Ib(c, b)
			}
		},
		pointToPixelFor3D: function(a, b) {
			var c = map.Wb;
			this.xb === Sa && c && gb.xJ(a, this, b)
		},
		m4: function(a, b) {
			var c = map.Wb;
			this.xb === Sa && c && gb.wJ(a, this, b)
		},
		n4: function(a, b) {
			var c = this,
				e = map.Wb;
			c.xb === Sa && e && gb.xJ(a, c, function(a) {
				a.x -= c.offsetX;
				a.y -= c.offsetY;
				b && b(a)
			})
		},
		k4: function(a, b) {
			var c = map.Wb;
			this.xb === Sa && c && (a.x += this.offsetX, a.y += this.offsetY, gb.wJ(a, this, b))
		},
		te: function(a) {
			if (!this.ix()) return new hb;
			var b = a || {},
				a = b.margins || [0, 0, 0, 0],
				c = b.zoom || s,
				b = this.Ib({
					x: a[3],
					y: this.height - a[2]
				}, c),
				a = this.Ib({
					x: this.width - a[1],
					y: a[0]
				}, c);
			return new hb(b, a)
		},
		ix: function() {
			return !!this.loaded
		},
		UQ: function(a, b) {
			for (var c = this.va(), e = b.margins || [10, 10, 10, 10], f = b.zoomFactor || 0, g = e[1] + e[3], e = e[0] + e[
					2], i = c.aj(), k = c = c.Yh(); k >= i; k--) {
				var m = this.va().fc(k);
				if (a.ZE().lng / m < this.width - g && a.ZE().lat / m < this.height - e) break
			}
			k += f;
			k < i && (k = i);
			k > c && (k = c);
			return k
		},
		zs: function(a, b) {
			var c = {
				center: this.Cb(),
				zoom: this.ka()
			};
			if (!a || !a instanceof hb && 0 === a.length || a instanceof hb && a.lj()) return c;
			var e = [];
			a instanceof hb ? (e.push(a.Nf()), e.push(a.Se())) : e = a.slice(0);
			for (var b = b || {}, f = [], g = 0, i = e.length; g < i; g++) f.push(this.Pc.ci(e[g], this.Wb));
			e = new hb;
			for (g = f.length - 1; 0 <= g; g--) e.extend(f[g]);
			if (e.lj()) return c;
			c = e.Cb();
			f = this.UQ(e, b);
			b.margins && (e = b.margins, g = (e[1] - e[3]) / 2, e = (e[0] - e[2]) / 2, i = this.va().fc(f), b.offset && (g =
				b.offset.width, e = b.offset.height), c.lng += i * g, c.lat += i * e);
			c = this.Pc.gh(c, this.Wb);
			return {
				center: c,
				zoom: f
			}
		},
		oh: function(a, b) {
			var c;
			c = a && a.center ? a : this.zs(a, b);
			var b = b || {},
				e = b.delay || 200;
			if (c.zoom === this.Va && b.enableAnimation !== t) {
				var f = this;
				setTimeout(function() {
					f.ki(c.center, {
						duration: 210
					})
				}, e)
			} else this.Ed(c.center, c.zoom)
		},
		Of: x("Xd"),
		bh: function() {
			return this.$.rb && this.$.rb.Za() ? this.$.rb : s
		},
		getDistance: function(a, b) {
			if (a && b) {
				if (a.oc(b)) return 0;
				var c = 0,
					c = S.Eo(a, b);
				if (c === s || c === l) c = 0;
				return c
			}
		},
		Pw: function() {
			var a = [],
				b = this.Ba,
				c = this.Ce;
			if (b)
				for (var e in b) b[e] instanceof ib && a.push(b[e]);
			if (c) {
				e = 0;
				for (b = c.length; e < b; e++) a.push(c[e])
			}
			return a
		},
		va: x("xb"),
		hX: x("Cd"),
		ku: function() {
			for (var a = this.$.mE; a < D.Zq.length; a++) D.Zq[a](this);
			this.$.mE = a
		},
		AE: function(a) {
			this.Wb = Sa.kk(a);
			this.cw = Sa.sK(this.Wb);
			this.xb === Sa && this.Pc instanceof jb && (this.Pc.Ui = this.Wb)
		},
		setDefaultCursor: function(a) {
			this.R.yc = a;
			this.platform && (this.platform.style.cursor = this.R.yc)
		},
		getDefaultCursor: function() {
			return this.R.yc
		},
		setDraggingCursor: function(a) {
			this.R.Gd = a
		},
		getDraggingCursor: function() {
			return this.R.Gd
		},
		ax: function() {
			return this.R.QV && 1.5 <= this.R.devicePixelRatio
		},
		hB: function(a, b) {
			b ? this.Bh[b] || (this.Bh[b] = {}) : b = "custom";
			a.tag = b;
			a instanceof kb && (this.Bh[b][a.ea] = a, a.xa(this));
			var c = this;
			K.load("hotspot", function() {
				c.ku()
			}, p)
		},
		gZ: function(a, b) {
			b || (b = "custom");
			this.Bh[b][a.ea] && delete this.Bh[b][a.ea]
		},
		fw: function(a) {
			a || (a = "custom");
			this.Bh[a] = {}
		},
		vu: function() {
			var a = this.xb.aj(),
				b = this.xb.Yh(),
				c = this.R;
			c.hc = c.$N || a;
			c.pc = c.ZN || b;
			c.hc < a && (c.hc = a);
			c.pc > b && (c.pc = b)
		},
		setMinZoom: function(a) {
			a = Math.round(a);
			a > this.R.pc && (a = this.R.pc);
			this.R.$N = a;
			this.CI()
		},
		setMaxZoom: function(a) {
			a = Math.round(a);
			a < this.R.hc && (a = this.R.hc);
			this.R.ZN = a;
			this.CI()
		},
		CI: function() {
			this.vu();
			var a = this.R;
			this.Va < a.hc ? this.Qc(a.hc) : this.Va > a.pc && this.Qc(a.pc);
			var b = new Q("onzoomspanchange");
			b.hc = a.hc;
			b.pc = a.pc;
			this.dispatchEvent(b)
		},
		d3: x("cB"),
		getKey: function() {
			return qa
		},
		MZ: function(a) {
			function b(a) {
				c.i_ = a;
				var b = D.nd + "custom/v2/mapstyle?ak=" + qa + "&callback=cb&",
					b = b + "is_all=true&is_new=1&" + ("styles=" + encodeURIComponent(c.RE(a, e)));
				pa(b)
			}
			var c = this;
			D.Tp("cus.fire", "count", "z_setmapstylev2count");
			this.Tx(t);
			this.R.nY = p;
			this.addEventListener("hidecopyright", function() {
				c.ck.aa();
				c.R.po = !!a.customEditor;
				c.R.po === t && c.zE(new P(1, 1))
			});
			c.ck && c.ck.aa();
			this.R.po = !!a.customEditor;
			this.R.T4 = !!a.sharing;
			this.R.z4 = !!a.preview;
			this.R.po === t && this.zE(new P(1, 1));
			K.load("hotspot", function() {
				c.ku()
			}, p);
			window.rh = {};
			window.D5 = [];
			window.Xt = [];
			window.La = {};
			var e = this.ka(),
				f = {};
			z.extend(f, a);
			window.cb = function(a) {
				if (0 === a.status) {
					3 === a.data.style.length ? (window.bmap_baseFs || (window.bmap_baseFs = a.data.style), window.Np = a.data.style[
						2]) : window.Np = a.data.style;
					a = window.bmap_baseFs;
					if (z.om(window.rh)) window.q0 = a, c.eF(e);
					else {
						c.WN(window.Np, e);
						c.eF(e);
						var a = c.xU(window.rh, e),
							b;
						for (b in a) {
							var g = {};
							z.extend(g, f);
							c.RW(b, g)
						}
					}
					c.OX()
				}
			};
			if (a.styleId) {
				var g = "jsapi";
				a.sharing ? g = "sharing" : a.preview && (g = "preview");
				this.FW(a.styleId, g, b)
			} else b(a.styleJson);
			window.iconSetInfo_high || pa(D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] +
				"/sty/icons_na2x.js?udt=20190108&v=001&from=jsapi")
		},
		FW: function(a, b, c) {
			var e = this,
				f = (1E5 * Math.random()).toFixed(0);
			window["_cbk_si_phpui" + f] = function(a) {
				var b = [];
				a.result && (0 === a.result.error && a.content && 0 === a.content.status) && (b = e.Dx(a.content.data.json));
				c && c(b)
			};
			window["_cbk_si_api" + f] = function(a) {
				var b = [];
				0 === a.status && (b = a.info ? e.Dx(a.info.json) : e.Dx(a.data.json));
				c && c(b)
			};
			var g = "/apiconsole/custommap/";
			switch (b) {
				case "jsapi":
					g = D.nd + "?qt=custom_map&v=3.0";
					g += "&style_id=" + a + "&type=publish&ak=" + qa;
					g += "&callback=_cbk_si_phpui" + f;
					break;
				case "sharing":
					g = g + "getSharingJson" + ("?styleid=" + a + "&type=edit") + ("&ck=_cbk_si_api" + f);
					break;
				case "preview":
					g = g + "getJson" + ("?styleid=" + a + "&type=edit") + ("&ck=_cbk_si_api" + f)
			}
			pa(g)
		},
		kV: function() {
			Array.prototype.map || (Array.prototype.map = function(a, b) {
				var c, e, f;
				this == s && aa(new TypeError(" this is null or not defined"));
				var g = Object(this),
					i = g.length >>> 0;
				"[object Function]" != Object.prototype.toString.call(a) && aa(new TypeError(a + " is not a function"));
				b && (c = b);
				e = Array(i);
				for (f = 0; f < i;) {
					var k;
					f in g && (k = g[f], k = a.call(c, k, f, g), e[f] = k);
					f++
				}
				return e
			})
		},
		Dx: function(a) {
			if (a === s || "" === a) return [];
			this.kV();
			var b = {
					t: "featureType",
					e: "elementType",
					v: "visibility",
					c: "color",
					l: "lightness",
					s: "saturation",
					w: "weight",
					z: "level",
					h: "hue",
					f: "fontsize",
					zri: "curZoomRegionId",
					zr: "curZoomRegion"
				},
				c = {
					all: "all",
					g: "geometry",
					"g.f": "geometry.fill",
					"g.s": "geometry.stroke",
					l: "labels",
					"l.t.f": "labels.text.fill",
					"l.t.s": "labels.text.stroke",
					"l.t": "labels.text",
					"l.i": "labels.icon"
				};
			return a.split(",").map(function(a) {
				var a = a.split("|").map(function(a) {
						var e = b[a.split(":")[0]],
							a = c[a.split(":")[1]] ? c[a.split(":")[1]] : a.split(":")[1];
						switch (a) {
							case "poi":
								a = "poilabel";
								break;
							case "districtlabel":
								a = "districtlabel"
						}
						var f = {};
						f[e] = a;
						return f
					}),
					f = a[0],
					g = 1;
				a[1].elementType && (g = 2, z.extend(f, a[1]));
				for (var i = {}; g < a.length; g++) z.extend(i, a[g]);
				return z.extend(f, {
					stylers: i
				})
			})
		},
		mX: function() {
			return this.Xe.dg
		},
		RW: function(a, b) {
			var c = this,
				e = (1E5 * Math.random()).toFixed(0);
			window["_cbk" + e] = function(b) {
				b = 3 === b.data.style.length ? b.data.style[2] : b.data.style;
				c.WN(b, a);
				c.eF(a);
				b = new Q("onzoomfeatureload" + a);
				c.dispatchEvent(b);
				delete window["_cbk" + e]
			};
			var f = D.nd + "custom/v2/mapstyle?ak=" + qa + "&callback=_cbk" + e + "&",
				f = f + "is_all=true&is_new=1&";
			b.styleJson ? f += "styles=" + encodeURIComponent(this.RE(b.styleJson, parseInt(a, 10))) : b.styleId && (f +=
				"styles=" + encodeURIComponent(c.RE(c.i_, parseInt(a, 10))));
			pa(f)
		},
		zE: function(a, b) {
			var c = new Q("oncopyrightoffsetchange", {
				SD: a,
				ZU: b
			});
			this.R.BJ = b;
			this.dispatchEvent(c)
		},
		ot: function(a) {
			var b = this;
			window.MPC_Mgr && window.MPC_Mgr[b.ea] && window.MPC_Mgr[b.ea].close();
			b.R.sC = t;
			D.Tp("cus.fire", "count", "z_setmapstylecount");
			if (a) {
				b = this;
				a.styleJson && (a.styleStr = b.j_(a.styleJson));
				I() && z.fa.Px ? setTimeout(function() {
					b.R.we = a;
					b.dispatchEvent(new Q("onsetcustomstyles", a))
				}, 50) : (this.R.we = a, this.dispatchEvent(new Q("onsetcustomstyles", a)), this.kL(b.R.we.geotableId));
				var c = {
					style: a.style
				};
				a.features && 0 < a.features.length && (c.features = p);
				a.styleJson && 0 < a.styleJson.length && (c.styleJson = p);
				Ta(5050, c);
				a.style && (c = b.R.FB[a.style] ? b.R.FB[a.style].backColor : b.R.FB.normal.backColor) && (this.Ta().style.backgroundColor =
					c)
			}
		},
		HX: function(a) {
			this.controls || (this.controls = {
				navigationControl: new lb,
				scaleControl: new mb,
				overviewMapControl: new nb,
				mapTypeControl: new ob
			});
			var b = this,
				c;
			for (c in this.controls) b.PM(b.controls[c]);
			a = a || [];
			z.lc.Ob(a, function(a) {
				b.wr(b.controls[a])
			})
		},
		kL: function(a) {
			a ? this.Mr && this.Mr.yf === a || (this.Vf(this.Mr), this.Mr = new pb({
				geotableId: a
			}), this.Me(this.Mr)) : this.Vf(this.Mr)
		},
		Od: function() {
			var a = this.ka() >= this.R.hF && this.va() === Pa && 18 >= this.ka(),
				b = t;
			try {
				document.createElement("canvas").getContext("2d"), b = p
			} catch (c) {
				b = t
			}
			return a && b
		},
		getCurrentCity: function() {
			return {
				name: this.Wg,
				code: this.Ar
			}
		},
		vs: function() {
			this.W.Cn();
			return this.W
		},
		LX: function(a) {
			Pa.setMaxZoom(a.maxZoom || 19);
			var b = new Q("oninitindoorlayer");
			b.Te = a;
			this.dispatchEvent(b);
			this.R.og = t
		},
		OX: function(a) {
			if (this.R.og) {
				var b = new Q("onupdatestyles");
				this.dispatchEvent(b)
			} else b = new Q("oninitindoorlayer"), b.Te = a, this.dispatchEvent(b), this.R.og = p, this.R.gk = p
		},
		Tx: function(a) {
			this.R.bE = a;
			this.Xe.Lb || (this.Xe.Lb = this.Xe.nj[0].Lb);
			this.Xe.Lb.parentElement.style.display = a ? "block" : "none"
		},
		gN: function(a) {
			this.Xe.dg.style.display = a ? "block" : "none"
		},
		setPanorama: function(a) {
			this.W = a;
			this.W.DE(this)
		},
		RE: function(a, b) {
			var c = {
					featureType: "t",
					elementType: "e",
					visibility: "v",
					color: "c",
					lightness: "l",
					saturation: "s",
					weight: "w",
					level: "z",
					hue: "h",
					fontsize: "f"
				},
				e = {
					all: "all",
					geometry: "g",
					"geometry.fill": "g.f",
					"geometry.stroke": "g.s",
					labels: "l",
					"labels.text.fill": "l.t.f",
					"labels.text.stroke": "l.t.s",
					"labels.text": "l.t",
					"labels.icon": "l.i"
				},
				f = [];
			window.La[b] = {};
			for (var g = 0, i; i = a[g]; g++)
				if (!this.XX(i) && (window.rh = this.qX(i, window.rh), this.YX(i, b))) {
					if (("land" === i.featureType || "all" === i.featureType || "background" === i.featureType) && "string" ===
						typeof i.elementType && ("geometry" === i.elementType || "geometry.fill" === i.elementType || "all" === i.elementType) &&
						i.stylers)
						if (i.stylers.color && (window.La[b].bmapLandColor = i.stylers.color, window.La[b].CL = p, window.bmapLandColor =
								i.stylers.color), i.stylers.visibility && "off" === i.stylers.visibility) window.La[b].bmapLandColor =
							"#00000000", window.La[b].CL = p, window.bmapLandColor = "#00000000";
					if ("railway" === i.featureType && "string" === typeof i.elementType && i.stylers) {
						if (i.stylers.color && ("geometry" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color,
									window.bmapRailwayStrokeColor = i.stylers.color, window.La[b].bmapRailwayFillColor = i.stylers.color,
									window.La[b].bmapRailwayStrokeColor = i.stylers.color, window.La[b].LM = p, window.La[b].MM = p),
								"geometry.fill" === i.elementType && (window.bmapRailwayFillColor = i.stylers.color, window.La[b].bmapRailwayFillColor =
									i.stylers.color, window.La[b].LM = p), "geometry.stroke" === i.elementType)) window.bmapRailwayStrokeColor =
							i.stylers.color, window.La[b].bmapRailwayStrokeColor = i.stylers.color, window.La[b].MM = p;
						i.stylers.visibility && (window.bmapRailwayVisibility = i.stylers.visibility, window.La[b].bmapRailwayVisibility =
							i.stylers.visibility, window.La[b].dZ = p)
					}
					"roadarrow" === i.featureType && ("labels.icon" === i.elementType && i.stylers) && (window.bmapRoadarrowVisibility =
						i.stylers.visibility, window.La[b].bmapRoadarrowVisibility = i.stylers.visibility, window.La[b].nZ = p);
					var k = {};
					z.extend(k, i);
					i = k.stylers;
					delete k.stylers;
					z.extend(k, i);
					i = [];
					for (var m in c)
						if (k[m] && !this.TX(m))
							if ("elementType" === m) i.push(c[m] + ":" + e[k[m]]);
							else {
								switch (k[m]) {
									case "poilabel":
										k[m] = "poi";
										break;
									case "districtlabel":
										k[m] = "label"
								}
								i.push(c[m] + ":" + k[m])
							} 2 < i.length && f.push(i.join("|"))
				}! window.La[b].CL && window.La[b].bmapLandColor && delete window.La[b].bmapLandColor;
			!window.La[b].LM && window.La[b].bmapRailwayFillColor && delete window.La[b].bmapRailwayFillColor;
			!window.La[b].MM && window.La[b].bmapRailwayStrokeColor && delete window.La[b].bmapRailwayStrokeColor;
			!window.La[b].dZ && window.La[b].bmapRailwayVisibility && delete window.La[b].bmapRailwayVisibility;
			!window.La[b].nZ && window.La[b].bmapRoadarrowVisibility && delete window.La[b].bmapRoadarrowVisibility;
			return f.join(",")
		},
		j_: function(a) {
			for (var b = {
					featureType: "t",
					elementType: "e",
					visibility: "v",
					color: "c",
					lightness: "l",
					saturation: "s",
					weight: "w",
					zoom: "z",
					hue: "h"
				}, c = {
					all: "all",
					geometry: "g",
					"geometry.fill": "g.f",
					"geometry.stroke": "g.s",
					labels: "l",
					"labels.text.fill": "l.t.f",
					"labels.text.stroke": "l.t.s",
					"lables.text": "l.t",
					"labels.icon": "l.i"
				}, e = [], f = 0, g; g = a[f]; f++) {
				var i = g.stylers;
				delete g.stylers;
				z.extend(g, i);
				var i = [],
					k;
				for (k in b)
					if (g[k])
						if ("elementType" === k) i.push(b[k] + ":" + c[g[k]]);
						else {
							switch (g[k]) {
								case "poilabel":
									g[k] = "poi";
									break;
								case "districtlabel":
									g[k] = "label"
							}
							i.push(b[k] + ":" + g[k])
						} 2 < i.length && e.push(i.join("|"))
			}
			return e.join(",")
		},
		XX: function(a) {
			var b = {};
			z.extend(b, a.stylers);
			delete b.curZoomRegionId;
			delete b.curZoomRegion;
			delete b.level;
			return z.om(b) ? p : t
		},
		YX: function(a, b) {
			var c = a.stylers.level;
			return c === l ? p : c === b + "" ? p : t
		},
		TX: function(a) {
			return {
				curZoomRegionId: p,
				curZoomRegion: p
			} [a] ? p: t
		},
		qX: function(a, b) {
			var c = a.stylers.level,
				e = {};
			z.extend(e, b);
			c !== l && (e[parseInt(c, 10)] = p);
			return e
		},
		WN: function(a, b) {
			window.Xt[b] = a;
			if (!window.rh[b])
				for (var c = this.xb.aj(), e = this.xb.Yh(); c <= e; c++) window.rh[c] || (window.Xt[c] = a)
		},
		eF: function(a) {
			if (!window.rh[a])
				for (var b = this.xb.aj(), c = this.xb.Yh(); b <= c; b++) window.rh[b] || (window.La[b] || (window.La[b] = {}),
					window.La[b].bmapLandColor = window.La[a].bmapLandColor, window.La[b].bmapRailwayFillColor = window.La[a].bmapRailwayFillColor,
					window.La[b].bmapRailwayStrokeColor = window.La[a].bmapRailwayStrokeColor)
		},
		xU: function(a, b) {
			var c = {};
			z.extend(c, a);
			if (c[b]) {
				for (var e = this.xb.aj(), f = this.xb.Yh(); e <= f; e++)
					if (!c[e]) {
						c[e] = p;
						break
					} delete c[b]
			}
			return c
		},
		z3: function(a) {
			return a.Js || "0" === a.uid ? t : p
		},
		IU: function() {
			delete this.yi.WY
		},
		L1: function() {
			this.yi = {}
		},
		Yn: function(a, b, c) {
			if (!this.R.po) return t;
			a = a || "sp" + this.$.W4++;
			if (b && 0 !== b.length) return c = c || {}, this.yi[a] = this.yi[a] || {
				polygon: [],
				polyline: []
			}, this.yi = this.yi || {}, this.yi[a][c.type].push({
				ME: b,
				Vb: c.Vb,
				type: c.type,
				style: c.style
			}), a
		}
	});

	function Ta(a, b) {
		if (a) {
			var b = b || {},
				c = "",
				e;
			for (e in b) c = c + "&" + e + "=" + encodeURIComponent(b[e]);
			var f = function(a) {
					a && (qb = p, setTimeout(function() {
						rb.src = D.nd + "images/blank.gif?" + a.src
					}, 50))
				},
				g = function() {
					var a = sb.shift();
					a && f(a)
				};
			e = (1E8 * Math.random()).toFixed(0);
			qb ? sb.push({
				src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a +
					"&da_src=" + a + c
			}) : f({
				src: "product=jsapi&sub_product=jsapi&v=" + D.version + "&sub_product_v=" + D.version + "&t=" + e + "&code=" + a +
					"&da_src=" + a + c
			});
			tb || (z.V(rb, "load", function() {
				qb = t;
				g()
			}), z.V(rb, "error", function() {
				qb = t;
				g()
			}), tb = p)
		}
	}
	var qb, tb, sb = [],
		rb = new Image;
	Ta(5E3, {
		device_pixel_ratio: window.devicePixelRatio,
		platform: navigator.platform
	});
	D.eL = {
		TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu",
			"gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu",
			"gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"
		],
		TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
		TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a",
			"gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"
		],
		geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
		TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy",
			"gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"
		],
		traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
		iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
		message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
		baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
		wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
		pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_",
			"gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"
		],
		main_domain_nocdn: {
			baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
			other: "api.map.baidu.com"
		},
		main_domain_cdn: {
			baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv",
				"gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"
			],
			other: ["api.map.baidu.com"],
			webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
		},
		map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
		vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
	};
	D.yX = {
		TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com",
			"shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"
		],
		TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
		TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
		geolocControl: "loc.map.baidu.com",
		TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
		traffic: "its.map.baidu.com:8002",
		iw_pano: "pcsv0.map.bdimg.com",
		message: "j.map.baidu.com",
		baidumap: "map.baidu.com",
		wuxian: "wuxian.baidu.com",
		pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
		main_domain_nocdn: {
			baidu: "api.map.baidu.com"
		},
		main_domain_cdn: {
			baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
			webmap: ["webmap0.map.bdimg.com"]
		},
		map_click: "mapclick.map.baidu.com",
		vector_traffic: "or.map.bdimg.com"
	};
	D.P_ = {
		"0": {
			proto: "http://",
			domain: D.yX
		},
		1: {
			proto: "https://",
			domain: D.eL
		},
		2: {
			proto: "https://",
			domain: D.eL
		}
	};
	window.BMAP_PROTOCOL && "https" === window.BMAP_PROTOCOL && (window.HOST_TYPE = 2);
	D.Rt = window.HOST_TYPE || "0";
	D.url = D.P_[D.Rt];
	D.Xo = D.url.proto + D.url.domain.baidumap + "/";
	D.nd = D.url.proto + ("2" == D.Rt ? D.url.domain.main_domain_nocdn.other : D.url.domain.main_domain_nocdn.baidu) +
		"/";
	D.oa = D.url.proto + ("2" == D.Rt ? D.url.domain.main_domain_cdn.other[0] : D.url.domain.main_domain_nocdn.baidu) +
		"/";
//	D.Si = D.url.proto + D.url.domain.main_domain_cdn.webmap[0] + "/";
	D.Si = '';
	D.Zh = function(a, b) {
		var c, e, b = b || "";
		switch (a) {
			case "main_domain_nocdn":
				c = D.nd + b;
				break;
			case "main_domain_cdn":
				c = D.oa + b;
				break;
			default:
				e = D.url.domain[a], "[object Array]" == Object.prototype.toString.call(e) ? (c = [], z.lc.Ob(e, function(a, e) {
					c[e] = D.url.proto + a + "/" + b
				})) : c = D.url.proto + D.url.domain[a] + "/" + b
		}
		return c
	};

	function ub(a) {
		var b = {
			duration: 1E3,
			Hc: 30,
			ro: 0,
			ac: vb.LL,
			$s: u()
		};
		this.Yf = [];
		if (a)
			for (var c in a) b[c] = a[c];
		this.m = b;
		if (Za(b.ro)) {
			var e = this;
			setTimeout(function() {
				e.start()
			}, b.ro)
		} else b.ro != wb && this.start()
	}
	var wb = "INFINITE";
	ub.prototype.start = function() {
		this.mu = eb();
		this.jz = this.mu + this.m.duration;
		xb(this)
	};
	ub.prototype.add = function(a) {
		this.Yf.push(a)
	};

	function xb(a) {
		var b = eb();
		b >= a.jz ? ($a(a.m.za) && a.m.za(a.m.ac(1)), $a(a.m.finish) && a.m.finish(), 0 < a.Yf.length && (b = a.Yf[0], b.Yf = []
			.concat(a.Yf.slice(1)), b.start())) : (a.Qx = a.m.ac((b - a.mu) / a.m.duration), $a(a.m.za) && a.m.za(a.Qx), a.TE ||
			(a.sr = setTimeout(function() {
				xb(a)
			}, 1E3 / a.m.Hc)))
	}
	ub.prototype.stop = function(a) {
		this.TE = p;
		for (var b = 0; b < this.Yf.length; b++) this.Yf[b].stop(), this.Yf[b] = s;
		this.Yf.length = 0;
		this.sr && (clearTimeout(this.sr), this.sr = s);
		this.m.$s(this.Qx);
		a && (this.jz = this.mu, xb(this))
	};
	ub.prototype.cancel = ha(1);
	var vb = {
		LL: function(a) {
			return a
		},
		reverse: function(a) {
			return 1 - a
		},
		kC: function(a) {
			return a * a
		},
		iC: function(a) {
			return Math.pow(a, 3)
		},
		Zr: function(a) {
			return -(a * (a - 2))
		},
		XJ: function(a) {
			return Math.pow(a - 1, 3) + 1
		},
		jC: function(a) {
			return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
		},
		b2: function(a) {
			return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
		},
		c2: function(a) {
			return (1 - Math.cos(Math.PI * a)) / 2
		}
	};
	vb["ease-in"] = vb.kC;
	vb["ease-out"] = vb.Zr;
	var H = {
		rF: 34,
		sF: 21,
		tF: new P(21, 32),
		pO: new P(10, 32),
		oO: new P(24, 36),
		nO: new P(12, 36),
		pF: new P(13, 1),
		sa: D.oa + "images/",
		t3: "http://api0.map.bdimg.com/images/",
		qF: D.oa + "images/markers_new.png",
		lO: 24,
		mO: 73,
		yB: {
			"\u5317\u4eac": {
				Gx: "bj",
				o: new J(116.403874, 39.914889)
			},
			"\u4e0a\u6d77": {
				Gx: "sh",
				o: new J(121.487899, 31.249162)
			},
			"\u6df1\u5733": {
				Gx: "sz",
				o: new J(114.025974, 22.546054)
			},
			"\u5e7f\u5dde": {
				Gx: "gz",
				o: new J(113.30765, 23.120049)
			}
		},
		fontFamily: "arial,sans-serif"
	};
	z.fa.Qe ? (z.extend(H, {
		JJ: "url(" + H.sa + "ruler.cur),crosshair",
		yc: "-moz-grab",
		Gd: "-moz-grabbing"
	}), z.platform.xL && (H.fontFamily = "arial,simsun,sans-serif")) : z.fa.bw || z.fa.Px ? z.extend(H, {
		JJ: "url(" + H.sa + "ruler.cur) 2 6,crosshair",
		yc: "url(" + H.sa + "openhand.cur) 8 8,default",
		Gd: "url(" + H.sa + "closedhand.cur) 8 8,move"
	}) : z.extend(H, {
		JJ: "url(" + H.sa + "ruler.cur),crosshair",
		yc: "url(" + H.sa + "openhand.cur),default",
		Gd: "url(" + H.sa + "closedhand.cur),move"
	});

	function yb(a, b) {
		var c = a.style;
		c.left = b[0] + "px";
		c.top = b[1] + "px"
	}

	function zb(a) {
		0 < z.fa.ma ? a.unselectable = "on" : a.style.MozUserSelect = "none"
	}

	function Ab(a) {
		return a && a.parentNode && 11 !== a.parentNode.nodeType
	}

	function Bb(a, b) {
		z.U.fx(a, "beforeEnd", b);
		return a.lastChild
	}

	function Cb(a) {
		for (var b = {
				left: 0,
				top: 0
			}; a && a.offsetParent;) b.left += a.offsetLeft, b.top += a.offsetTop, a = a.offsetParent;
		return b
	}

	function na(a) {
		a = window.event || a;
		a.stopPropagation ? a.stopPropagation() : a.cancelBubble = p
	}

	function Db(a) {
		a = window.event || a;
		a.preventDefault ? a.preventDefault() : a.returnValue = t;
		return t
	}

	function oa(a) {
		na(a);
		return Db(a)
	}

	function Eb() {
		var a = document.documentElement,
			b = document.body;
		return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
	}

	function Fb(a, b) {
		if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
	}

	function Gb(a, b) {
		var c = [],
			b = b || function(a) {
				return a
			},
			e;
		for (e in a) c.push(e + "=" + b(a[e]));
		return c.join("&")
	}

	function O(a, b, c) {
		var e = document.createElement(a);
		c && (e = document.createElementNS(c, a));
		return z.U.yE(e, b || {})
	}

	function Ya(a) {
		if (a.currentStyle) return a.currentStyle;
		if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, s)
	}

	function $a(a) {
		return "function" === typeof a
	}

	function Za(a) {
		return "number" === typeof a
	}

	function bb(a) {
		return "string" == typeof a
	}

	function Hb(a) {
		return "undefined" != typeof a
	}

	function Ib(a) {
		return "object" == typeof a
	}
	var Jb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	function Kb(a) {
		for (var b = "", c = 0; c < a.length; c++) {
			var e = a.charCodeAt(c) << 1,
				f = e = e.toString(2);
			8 > e.length && (f = "00000000" + e, f = f.substr(e.length, 8));
			b += f
		}
		a = 5 - b.length % 5;
		e = [];
		for (c = 0; c < a; c++) e[c] = "0";
		b = e.join("") + b;
		f = [];
		for (c = 0; c < b.length / 5; c++) e = b.substr(5 * c, 5), f.push(String.fromCharCode(parseInt(e, 2) + 50));
		return f.join("") + a.toString()
	}

	function Lb(a) {
		var b = "",
			c, e, f = "",
			g, i = "",
			k = 0;
		g = /[^A-Za-z0-9\+\/\=]/g;
		if (!a || g.exec(a)) return a;
		a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		do c = Jb.indexOf(a.charAt(k++)), e = Jb.indexOf(a.charAt(k++)), g = Jb.indexOf(a.charAt(k++)), i = Jb.indexOf(a.charAt(
				k++)), c = c << 2 | e >> 4, e = (e & 15) << 4 | g >> 2, f = (g & 3) << 6 | i, b += String.fromCharCode(c), 64 != g &&
			(b += String.fromCharCode(e)), 64 != i && (b += String.fromCharCode(f)); while (k < a.length);
		return b
	}
	var Q = z.lang.cu;

	function I() {
		return !(!z.platform.DD && !z.platform.WX && !z.platform.jj)
	}

	function Xa() {
		return !(!z.platform.xL && !z.platform.pL && !z.platform.dY)
	}

	function eb() {
		return (new Date).getTime()
	}

	function Mb() {
		var a = document.body.appendChild(O("div"));
		a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
		var b = a.firstChild;
		if (!b.style) return t;
		b.style.behavior = "url(#default#VML)";
		b = b ? "object" === typeof b.adj : p;
		a.parentNode.removeChild(a);
		return b
	}

	function Nb() {
		return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
	}

	function Ob() {
		return !!O("canvas").getContext
	}

	function Pb(a) {
		return a * Math.PI / 180
	}
	D.jY = function() {
		var a = p,
			b = p,
			c = p,
			e = p,
			f = 0,
			g = 0,
			i = 0,
			k = 0;
		return {
			QP: function() {
				f += 1;
				a && (a = t, setTimeout(function() {
					Ta(5054, {
						pic: f
					});
					a = p;
					f = 0
				}, 1E4))
			},
			G0: function() {
				g += 1;
				b && (b = t, setTimeout(function() {
					Ta(5055, {
						move: g
					});
					b = p;
					g = 0
				}, 1E4))
			},
			I0: function() {
				i += 1;
				c && (c = t, setTimeout(function() {
					Ta(5056, {
						zoom: i
					});
					c = p;
					i = 0
				}, 1E4))
			},
			H0: function(a) {
				k += a;
				e && (e = t, setTimeout(function() {
					Ta(5057, {
						tile: k
					});
					e = p;
					k = 0
				}, 5E3))
			}
		}
	}();
	D.Ip = {
		GF: "#83a1ff",
		Kp: "#808080"
	};

	function Qb(a, b, c) {
		b.VD || (b.VD = [], b.handle = {});
		b.VD.push({
			filter: c,
			fs: a
		});
		b.addEventListener || (b.addEventListener = function(a, c) {
			b.attachEvent("on" + a, c)
		});
		b.handle.click || (b.addEventListener("click", function(a) {
			for (var c = a.target || a.srcElement; c != b;) {
				Rb(b.VD, function(b, i) {
					RegExp(i.filter).test(c.getAttribute("filter")) && i.fs.call(c, a, c.getAttribute("filter"))
				});
				c = c.parentNode
			}
		}, t), b.handle.click = p)
	}

	function Rb(a, b) {
		for (var c = 0, e = a.length; c < e; c++) b(c, a[c])
	}
	void
	function(a, b, c) {
		void
		function(a, b, c) {
			function i(a) {
				if (!a.qo) {
					for (var c = p, e = [], g = a.jZ, k = 0; g && k < g.length; k++) {
						var m = g[k],
							n = da[m] = da[m] || {};
						if (n.qo || n == a) e.push(n.Mc);
						else {
							c = t;
							if (!n.lV && (m = (va.get("alias") || {})[m] || m + ".js", !N[m])) {
								N[m] = p;
								var o = b.createElement("script"),
									q = b.getElementsByTagName("script")[0];
								o.async = p;
								o.src = m;
								q.parentNode.insertBefore(o, q)
							}
							n.ky = n.ky || {};
							n.ky[a.name] = a
						}
					}
					if (c) {
						a.qo = p;
						a.EJ && (a.Mc = a.EJ.apply(a, e));
						for (var v in a.ky) i(a.ky[v])
					}
				}
			}

			function k(a) {
				return (a || new Date) - F
			}

			function m(a, b, c) {
				if (a) {
					"string" == typeof a && (c = b, b = a, a = L);
					try {
						a == L ? (M[b] = M[b] || [], M[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, t) : a.attachEvent &&
							a.attachEvent("on" + b, c)
					} catch (e) {}
				}
			}

			function n(a, b, c) {
				if (a) {
					"string" == typeof a && (c = b, b = a, a = L);
					try {
						if (a == L) {
							var e = M[b];
							if (e)
								for (var f = e.length; f--;) e[f] === c && e.splice(f, 1)
						} else a.removeEventListener ? a.removeEventListener(b, c, t) : a.detachEvent && a.detachEvent("on" + b, c)
					} catch (g) {}
				}
			}

			function o(a) {
				var b = M[a],
					c = 0;
				if (b) {
					for (var e = [], f = arguments, g = 1; g < f.length; g++) e.push(f[g]);
					for (g = b.length; g--;) b[g].apply(this, e) && c++;
					return c
				}
			}

			function q(a, b) {
				if (a && b) {
					var c = new Image(1, 1),
						e = [],
						f = "img_" + +new Date,
						g;
					for (g in b) b[g] && e.push(g + "=" + encodeURIComponent(b[g]));
					L[f] = c;
					c.onload = c.onerror = function() {
						L[f] = c = c.onload = c.onerror = s;
						delete L[f]
					};
					c.src = a + "?" + e.join("&")
				}
			}

			function v() {
				var a = arguments,
					b = a[0];
				if (this.DJ || /^(on|un|set|get|create)$/.test(b)) {
					for (var b = y.prototype[b], c = [], e = 1, f = a.length; e < f; e++) c.push(a[e]);
					"function" == typeof b && b.apply(this, c)
				} else this.cJ.push(a)
			}

			function w(a, b) {
				var c = {},
					e;
				for (e in a) a.hasOwnProperty(e) && (c[e] = a[e]);
				for (e in b) b.hasOwnProperty(e) && (c[e] = b[e]);
				return c
			}

			function y(a) {
				this.name = a;
				this.ds = {
					protocolParameter: {
						postUrl: s,
						protocolParameter: s
					}
				};
				this.cJ = [];
				this.alog = L
			}

			function A(a) {
				a = a || "default";
				if ("*" == a) {
					var a = [],
						b;
					for (b in T) a.push(T[b]);
					return a
				}(b = T[a]) || (b = T[a] = new y(a));
				return b
			}
			var B = c.alog;
			if (!B || !B.qo) {
				var C = b.all && a.attachEvent,
					F = B && B.MD || +new Date,
					E = a.L3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
					G = 0,
					N = {},
					L = function(a) {
						var b = arguments,
							c, e, f, g;
						if ("define" == a || "require" == a) {
							for (e = 1; e < b.length; e++) switch (typeof b[e]) {
								case "string":
									c = b[e];
									break;
								case "object":
									f = b[e];
									break;
								case "function":
									g = b[e]
							}
							"require" == a && (c && !f && (f = [c]), c = s);
							c = !c ? "#" + G++ : c;
							e = da[c] = da[c] || {};
							e.qo || (e.name = c, e.jZ = f, e.EJ = g, "define" == a && (e.lV = p), i(e))
						} else "function" == typeof a ? a(L) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, e) {
							b[0] = e;
							v.apply(L.cF(c), b)
						})
					},
					M = {},
					T = {},
					da = {
						v1: {
							name: "alog",
							qo: p,
							Mc: L
						}
					};
				y.prototype.start = y.prototype.create = function(a) {
					if (!this.DJ) {
						"object" == typeof a && this.set(a);
						this.DJ = new Date;
						for (this.es("create", this); a = this.cJ.shift();) v.apply(this, a)
					}
				};
				y.prototype.send = function(a, b) {
					var c = w({
						ts: k().toString(36),
						t: a,
						sid: E
					}, this.ds);
					if ("object" == typeof b) c = w(c, b);
					else {
						var e = arguments;
						switch (a) {
							case "pageview":
								e[1] && (c.page = e[1]);
								e[2] && (c.title = e[2]);
								break;
							case "event":
								e[1] && (c.eventCategory = e[1]);
								e[2] && (c.eventAction = e[2]);
								e[3] && (c.eventLabel = e[3]);
								e[4] && (c.eventValue = e[4]);
								break;
							case "timing":
								e[1] && (c.timingCategory = e[1]);
								e[2] && (c.timingVar = e[2]);
								e[3] && (c.timingValue = e[3]);
								e[4] && (c.timingLabel = e[4]);
								break;
							case "exception":
								e[1] && (c.exDescription = e[1]);
								e[2] && (c.exFatal = e[2]);
								break;
							default:
								return
						}
					}
					this.es("send", c);
					var f;
					if (e = this.ds.protocolParameter) {
						var g = {};
						for (f in c) e[f] !== s && (g[e[f] || f] = c[f]);
						f = g
					} else f = c;
					q(this.ds.postUrl, f)
				};
				y.prototype.set = function(a, b) {
					if ("string" == typeof a) "protocolParameter" == a && (b = w({
						postUrl: s,
						protocolParameter: s
					}, b)), this.ds[a] = b;
					else if ("object" == typeof a)
						for (var c in a) this.set(c, a[c])
				};
				y.prototype.get = function(a, b) {
					var c = this.ds[a];
					"function" == typeof b && b(c);
					return c
				};
				y.prototype.es = function(a, b) {
					return L.es(this.name + "." + a, b)
				};
				y.prototype.V = function(a, b) {
					L.V(this.name + "." + a, b)
				};
				y.prototype.dd = function(a, b) {
					L.dd(this.name + "." + a, b)
				};
				L.name = "alog";
				L.Vb = E;
				L.qo = p;
				L.timestamp = k;
				L.dd = n;
				L.V = m;
				L.es = o;
				L.cF = A;
				L("init");
				var ba = y.prototype;
				U(ba, {
					start: ba.start,
					create: ba.create,
					send: ba.send,
					set: ba.set,
					get: ba.get,
					on: ba.V,
					un: ba.dd,
					fire: ba.es
				});
				var va = A();
				va.set("protocolParameter", {
					u1: s
				});
				if (B) {
					ba = [].concat(B.yb || [], B.ht || []);
					B.yb = B.ht = s;
					for (var ya in L) L.hasOwnProperty(ya) && (B[ya] = L[ya]);
					L.yb = L.ht = {
						push: function(a) {
							L.apply(L, a)
						}
					};
					for (B = 0; B < ba.length; B++) L.apply(L, ba[B])
				}
				c.alog = L;
				C && m(b, "mouseup", function(a) {
					a = a.target || a.srcElement;
					1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
				});
				var Ea = t;
				a.onerror = function(a, b, e, f) {
					var i = p;
					!b && /^script error/i.test(a) && (Ea ? i = t : Ea = p);
					i && c.alog("exception.send", "exception", {
						Ws: a,
						LD: b,
						Ss: e,
						Sl: f
					});
					return t
				};
				c.alog("exception.on", "catch", function(a) {
					c.alog("exception.send", "exception", {
						Ws: a.Ws,
						LD: a.path,
						Ss: a.Ss,
						method: a.method,
						hK: "catch"
					})
				})
			}
		}(a, b, c);
		void
		function(a, b, c) {
			var i = "18_3";
			I() && (i = "18_4");
			var k = "http://static.tieba.baidu.com";
			"https:" === a.location.protocol && (k = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
			var m = Math.random,
				k = k + "/tb/pms/img/st.gif",
				n = {
					mh: "0.1"
				},
				o = {
					mh: "0.1"
				},
				q = {
					mh: "0.1"
				},
				v = {
					mh: "0"
				};
			if (n && n.mh && m() < n.mh) {
				var w = c.alog.cF("monkey"),
					y, n = a.screen,
					A = b.referrer;
				w.set("ver", 5);
				w.set("pid", 241);
				n && w.set("px", n.width + "*" + n.height);
				w.set("ref", A);
				c.alog("monkey.on", "create", function() {
					y = c.alog.timestamp;
					w.set("protocolParameter", {
						reports: s
					})
				});
				c.alog("monkey.on", "send", function(a) {
					"pageview" == a.t && (a.cmd = "open");
					a.now && (a.ts = y(a.now).toString(36), a.now = "")
				});
				c.alog("monkey.create", {
					page: i,
					pid: "241",
					p: "18",
					dv: 6,
					postUrl: k,
					reports: {
						refer: 1
					}
				});
				c.alog("monkey.send", "pageview", {
					now: +new Date
				})
			}
			if (o && o.mh && m() < o.mh) {
				var B = t;
				a.onerror = function(a, b, e, f) {
					var i = p;
					!b && /^script error/i.test(a) && (B ? i = t : B = p);
					i && c.alog("exception.send", "exception", {
						Ws: a,
						LD: b,
						Ss: e,
						Sl: f
					});
					return t
				};
				c.alog("exception.on", "catch", function(a) {
					c.alog("exception.send", "exception", {
						Ws: a.Ws,
						LD: a.path,
						Ss: a.Ss,
						method: a.method,
						hK: "catch"
					})
				});
				c.alog("exception.create", {
					postUrl: k,
					dv: 7,
					page: i,
					pid: "170",
					p: "18"
				})
			}
			q && (q.mh && m() < q.mh) && (c.alog("cus.on", "time", function(a) {
				var b = {},
					e = t,
					f;
				if ("[object Object]" === a.toString()) {
					for (var i in a) "page" == i ? b.page = a[i] : (f = parseInt(a[i]), 0 < f && /^z_/.test(i) && (e = p, b[i] = f));
					e && c.alog("cus.send", "time", b)
				}
			}), c.alog("cus.on", "count", function(a) {
				var b = {},
					e = t;
				"string" === typeof a && (a = [a]);
				if (a instanceof Array)
					for (var f = 0; f < a.length; f++) /^z_/.test(a[f]) ? (e = p, b[a[f]] = 1) : /^page:/.test(a[f]) && (b.page =
						a[f].substring(5));
				e && c.alog("cus.send", "count", b)
			}), c.alog("cus.create", {
				dv: 3,
				postUrl: k,
				page: i,
				p: "18"
			}));
			if (v && v.mh && m() < v.mh) {
				var C = ["Moz", "O", "ms", "Webkit"],
					F = ["-webkit-", "-moz-", "-o-", "-ms-"],
					E = function() {
						return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b,
							arguments)
					},
					G = E("dpFeatureTest").style,
					N = function(a) {
						return L(a, l, l)
					},
					L = function(a, b, c) {
						var e = a.charAt(0).toUpperCase() + a.slice(1),
							f = (a + " " + C.join(e + " ") + e).split(" ");
						if (typeof b === "string" || typeof b === "undefined") return M(f, b);
						f = (a + " " + C.join(e + " ") + e).split(" ");
						a: {
							var a = f,
								g;
							for (g in a)
								if (a[g] in b) {
									if (c === t) {
										b = a[g];
										break a
									}
									g = b[a[g]];
									b = typeof g === "function" ? fnBind(g, c || b) : g;
									break a
								} b = t
						}
						return b
					},
					M = function(a, b) {
						var c, e, f;
						e = a.length;
						for (c = 0; c < e; c++) {
							f = a[c];
							~("" + f).indexOf("-") && (f = T(f));
							if (G[f] !== l) return b == "pfx" ? f : p
						}
						return t
					},
					T = function(a) {
						return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
							return b + c.toUpperCase()
						}).replace(/^-/, "")
					},
					da = function(a, b, c) {
						if (a.indexOf("@") === 0) return atRule(a);
						a.indexOf("-") != -1 && (a = T(a));
						return !b ? L(a, "pfx") : L(a, b, c)
					},
					ba = function() {
						var a = E("canvas");
						return !(!a.getContext || !a.getContext("2d"))
					},
					va = function() {
						var a = E("div");
						return "draggable" in a || "ondragstart" in a && "ondrop" in a
					},
					ya = function() {
						try {
							localStorage.setItem("localStorage", "localStorage");
							localStorage.removeItem("localStorage");
							return p
						} catch (a) {
							return t
						}
					},
					Ea = function() {
						return "content" in b.createElement("template")
					},
					ra = function() {
						return "createShadowRoot" in b.createElement("a")
					},
					Ua = function() {
						return "registerElement" in b
					},
					re = function() {
						return "import" in b.createElement("link")
					},
					Oc = function() {
						return "getItems" in b
					},
					Ei = function() {
						return "EventSource" in window
					},
					se = function(a, b) {
						var c = new Image;
						c.onload = function() {
							b(a, c.width > 0 && c.height > 0)
						};
						c.onerror = function() {
							b(a, t)
						};
						c.src = "data:image/webp;base64," + {
							O3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
							N3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
							alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
							Zj: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
						} [a]
					},
					te = function(a, b) {
						return Vb.Uh["WebP-" + a] = b
					},
					Fi = function() {
						return "openDatabase" in a
					},
					Gi = function() {
						return "performance" in a && "timing" in a.performance
					},
					Hi = function() {
						return "performance" in a && "mark" in a.performance
					},
					Ii = function() {
						return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !
							Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !
							Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
					},
					Ji = function() {
						return "Promise" in a && "cast" in a.Lp && "resolve" in a.Lp && "reject" in a.Lp && "all" in a.Lp && "race" in a
							.Lp && function() {
								var b;
								new a.Lp(function(a) {
									b = a
								});
								return typeof b === "function"
							}()
					},
					Ki = function() {
						var b = !!a.t0,
							c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
						return !!a.x0 && b && c
					},
					Li = function() {
						return "geolocation" in navigator
					},
					Mi = function() {
						var b = E("canvas"),
							c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
						return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
					},
					Ni = function() {
						return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").Q1
					},
					Oi = function() {
						return !!a.E0
					},
					Pi = function() {
						return "WebSocket" in a && a.B0.p0 === 2
					},
					Qi = function() {
						return !!b.createElement("video").canPlayType
					},
					Ri = function() {
						return !!b.createElement("audio").canPlayType
					},
					Si = function() {
						return !!(a.history && "pushState" in a.history)
					},
					Ti = function() {
						return !(!a.r0 || !a.s0)
					},
					Ui = function() {
						return "postMessage" in window
					},
					Vi = function() {
						return !!a.webkitNotifications || "Notification" in a && "permission" in a.IO && "requestPermission" in a.IO
					},
					Wi = function() {
						for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, f = 0; f < b.length && !c; ++f) c = a[b[
							f] + "RequestAnimationFrame"];
						return !!c
					},
					Xi = function() {
						return "JSON" in a && "parse" in JSON && "stringify" in JSON
					},
					Yi = function() {
						return !(!da("exitFullscreen", b, t) && !da("cancelFullScreen", b, t))
					},
					Zi = function() {
						return !!da("Intl", a)
					},
					$i = function() {
						return N("flexBasis")
					},
					aj = function() {
						return !!N("perspective")
					},
					bj = function() {
						return N("shapeOutside")
					},
					cj = function() {
						var a = E("div");
						a.style.cssText = F.join("filter:blur(2px); ");
						return !!a.style.length && (b.documentMode === l || b.documentMode > 9)
					},
					dj = function() {
						return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
					},
					ej = function() {
						return E("progress").max !== l
					},
					fj = function() {
						return E("meter").max !== l
					},
					gj = function() {
						return "sendBeacon" in navigator
					},
					hj = function() {
						return N("borderRadius")
					},
					ij = function() {
						return N("boxShadow")
					},
					jj = function() {
						var a = E("div").style;
						a.cssText = F.join("opacity:.55;");
						return /^0.55$/.test(a.opacity)
					},
					kj = function() {
						return M(["textShadow"], l)
					},
					lj = function() {
						return N("animationName")
					},
					mj = function() {
						return N("transition")
					},
					nj = function() {
						return navigator.userAgent.indexOf("Android 2.") === -1 && N("transform")
					},
					Vb = {
						Uh: {},
						ra: function(a, b, c) {
							this.Uh[a] = b.apply(this, [].slice.call(arguments, 2))
						},
						Dd: function(a, b) {
							a.apply(this, [].slice.call(arguments, 1))
						},
						pZ: function() {
							this.ra("bdrs", hj);
							this.ra("bxsd", ij);
							this.ra("opat", jj);
							this.ra("txsd", kj);
							this.ra("anim", lj);
							this.ra("trsi", mj);
							this.ra("trfm", nj);
							this.ra("flex", $i);
							this.ra("3dtr", aj);
							this.ra("shpe", bj);
							this.ra("fltr", cj);
							this.ra("cavs", ba);
							this.ra("dgdp", va);
							this.ra("locs", ya);
							this.ra("wctem", Ea);
							this.ra("wcsdd", ra);
							this.ra("wccse", Ua);
							this.ra("wchti", re);
							this.Dd(se, "lossy", te);
							this.Dd(se, "lossless", te);
							this.Dd(se, "alpha", te);
							this.Dd(se, "animation", te);
							this.ra("wsql", Fi);
							this.ra("natm", Gi);
							this.ra("ustm", Hi);
							this.ra("arra", Ii);
							this.ra("prms", Ji);
							this.ra("xhr2", Ki);
							this.ra("wbgl", Mi);
							this.ra("geol", Li);
							this.ra("svg", Ni);
							this.ra("work", Oi);
							this.ra("wbsk", Pi);
							this.ra("vido", Qi);
							this.ra("audo", Ri);
							this.ra("hsty", Si);
							this.ra("file", Ti);
							this.ra("psmg", Ui);
							this.ra("wknf", Vi);
							this.ra("rqaf", Wi);
							this.ra("json", Xi);
							this.ra("flsc", Yi);
							this.ra("i18n", Zi);
							this.ra("cors", dj);
							this.ra("prog", ej);
							this.ra("metr", fj);
							this.ra("becn", gj);
							this.ra("mcrd", Oc);
							this.ra("esrc", Ei)
						}
					},
					w = c.alog.cF("feature");
				w.V("commit", function() {
					Vb.pZ();
					var a = setInterval(function() {
						if ("WebP-lossy" in Vb.Uh && "WebP-lossless" in Vb.Uh && "WebP-alpha" in Vb.Uh && "WebP-animation" in Vb.Uh) {
							for (var b in Vb.Uh) Vb.Uh[b] = Vb.Uh[b] ? "y" : "n";
							w.send("feature", Vb.Uh);
							clearInterval(a)
						}
					}, 500)
				});
				c.alog("feature.create", {
					Z1: 4,
					r4: k,
					page: i,
					yb: "18"
				});
				c.alog("feature.fire", "commit")
			}
		}(a, b, c)
	}(window, document, D);
	D.Tp = D.alog || u();
	D.alog("cus.fire", "count", "z_loadscriptcount");
	"https:" === location.protocol && D.alog("cus.fire", "count", "z_httpscount");

	function Sb(a) {
		var b = window.TILE_VERSION,
			c = "20170927";
		b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
		return c
	};

	function pa(a, b) {
		if (/^http/.test(a)) return;
		if (b) {
			var c = (1E5 * Math.random()).toFixed(0);
			D._rd["_cbk" + c] = function(a) {
				b && b(a);
				delete D._rd["_cbk" + c]
			};
			a += "&callback=BMap._rd._cbk" + c
		}
		var e = O("script", {
			type: "text/javascript"
		});
		e.charset = "utf-8";
		e.src = a;
		e.addEventListener ? e.addEventListener("load", function(a) {
			a = a.target;
			a.parentNode.removeChild(a)
		}, t) : e.attachEvent && e.attachEvent("onreadystatechange", function() {
			var a = window.event.srcElement;
			a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
		});
		setTimeout(function() {
			document.getElementsByTagName("head")[0].appendChild(e);
			e = s
		}, 1)
	};
	var Tb = {
		map: "el015j",
		common: "yus52z",
		style: "xuda1u",
		tile: "0se1bv",
		groundoverlay: "2l2jfw",
		pointcollection: "xmlwr2",
		marker: "g2attc",
		symbol: "kk5uus",
		canvablepath: "a5mhim",
		vmlcontext: "4qy4jj",
		markeranimation: "qdznoe",
		poly: "jup2cs",
		draw: "rrp4de",
		drawbysvg: "oksv3y",
		drawbyvml: "d44fju",
		drawbycanvas: "hsvvan",
		infowindow: "nbrs4q",
		oppc: "15c0qv",
		opmb: "r2zbmm",
		menu: "gpcz3z",
		control: "uip0qo",
		navictrl: "yiuqiz",
		geoctrl: "qnuw5c",
		copyrightctrl: "s4zk40",
		citylistcontrol: "vzmr12",
		scommon: "zwdc0b",
		local: "3m0lgd",
		route: "bj55zc",
		othersearch: "msoi2v",
		mapclick: "yxemv1",
		buslinesearch: "yr2xbv",
		hotspot: "oxifgp",
		autocomplete: "0akxa1",
		coordtrans: "k45it5",
		coordtransutils: "wo3qoz",
		convertor: "zqvbpf",
		clayer: "otydtq",
		pservice: "1vomeu",
		pcommon: "tbihoj",
		panorama: "pygx2t",
		panoramaflash: "2coe5t"
	};
	z.dy = function() {
		function a(a) {
			return e && !!c[b + a + "_" + Tb[a]]
		}
		var b = "BMap_",
			c = window.localStorage,
			e = "localStorage" in window && c !== s && c !== l;
		return {
			ZX: e,
			set: function(a, g) {
				if (e) {
					for (var i = b + a + "_", k = c.length, m; k--;) m = c.key(k), -1 < m.indexOf(i) && c.removeItem(m);
					try {
						c.setItem(b + a + "_" + Tb[a], g)
					} catch (n) {
						c.clear()
					}
				}
			},
			get: function(f) {
				return e && a(f) ? c.getItem(b + f + "_" + Tb[f]) : t
			},
			oJ: a
		}
	}();

	function K() {}
	z.object.extend(K, {
		uj: {
			HF: -1,
			WO: 0,
			Ep: 1
		},
		vK: function() {
			var a = "canvablepath";
			if (!I() || !Ob()) Nb() || (Mb() ? a = "vmlcontext" : Ob());
			return {
				tile: ["style"],
				control: [],
				marker: ["symbol"],
				symbol: ["canvablepath", "common"],
				canvablepath: "canvablepath" === a ? [] : [a],
				vmlcontext: [],
				style: [],
				poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
				drawbysvg: ["draw"],
				drawbyvml: ["draw"],
				drawbycanvas: ["draw"],
				infowindow: ["common", "marker"],
				menu: [],
				oppc: [],
				opmb: [],
				scommon: [],
				local: ["scommon"],
				route: ["scommon"],
				othersearch: ["scommon"],
				autocomplete: ["scommon"],
				citylistcontrol: ["autocomplete"],
				mapclick: ["scommon"],
				buslinesearch: ["route"],
				hotspot: [],
				coordtransutils: ["coordtrans"],
				convertor: [],
				clayer: ["tile"],
				pservice: [],
				pcommon: ["style", "pservice"],
				panorama: ["pcommon"],
				panoramaflash: ["pcommon"]
			}
		},
		u4: {},
		zF: {
			eP: D.oa + "getmodules?v=3.0",
			BT: 5E3
		},
		RB: t,
		Qd: {
			ll: {},
			Zm: [],
			uv: []
		},
		load: function(a, b, c) {
			var e = this.lb(a);
			if (e.Ke == this.uj.Ep) c && b();
			else {
				if (e.Ke == this.uj.HF) {
					this.tJ(a);
					this.JM(a);
					var f = this;
					f.RB == t && (f.RB = p, setTimeout(function() {
						for (var a = [], b = 0, c = f.Qd.Zm.length; b < c; b++) {
							var e = f.Qd.Zm[b],
								n = "";
							ja.dy.oJ(e) ? n = ja.dy.get(e) : (n = "", a.push(e + "_" + Tb[e]));
							f.Qd.uv.push({
								aM: e,
								ZD: n
							})
						}
						f.RB = t;
						f.Qd.Zm.length = 0;
						console.log(a);
						0 == a.length ? f.cK() : pa(f.zF.eP + "&mod=" + a.join(","))
					}, 1));
					e.Ke = this.uj.WO
				}
				e.ru.push(b)
			}
		},
		tJ: function(a) {
			if (a && this.vK()[a])
				for (var a = this.vK()[a], b = 0; b < a.length; b++) this.tJ(a[b]), this.Qd.ll[a[b]] || this.JM(a[b])
		},
		JM: function(a) {
			for (var b = 0; b < this.Qd.Zm.length; b++)
				if (this.Qd.Zm[b] == a) return;
			this.Qd.Zm.push(a)
		},
		oZ: function(a, b) {
			var c = this.lb(a);
			try {
				eval(b)
			} catch (e) {
				return
			}
			c.Ke = this.uj.Ep;
			for (var f = 0, g = c.ru.length; f < g; f++) c.ru[f]();
			c.ru.length = 0
		},
		oJ: function(a, b) {
			var c = this;
			c.timeout = setTimeout(function() {
				c.Qd.ll[a].Ke != c.uj.Ep ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
			}, c.zF.BT)
		},
		lb: function(a) {
			this.Qd.ll[a] || (this.Qd.ll[a] = {}, this.Qd.ll[a].Ke = this.uj.HF, this.Qd.ll[a].ru = []);
			return this.Qd.ll[a]
		},
		remove: function(a) {
			delete this.lb(a)
		},
		BU: function(a, b) {
			for (var c = this.Qd.uv, e = p, f = 0, g = c.length; f < g; f++) "" == c[f].ZD && (c[f].aM == a ? c[f].ZD = b :
				e = t);
			e && this.cK()
		},
		cK: function() {
			for (var a = this.Qd.uv, b = 0, c = a.length; b < c; b++) this.oZ(a[b].aM, a[b].ZD);
			this.Qd.uv.length = 0
		}
	});

	function R(a, b) {
		this.x = a || 0;
		this.y = b || 0;
		this.x = this.x;
		this.y = this.y
	}
	R.prototype.oc = function(a) {
		return a && a.x == this.x && a.y == this.y
	};

	function P(a, b) {
		this.width = a || 0;
		this.height = b || 0
	}
	P.prototype.oc = function(a) {
		return a && this.width == a.width && this.height == a.height
	};

	function kb(a, b) {
		a && (this.Mb = a, this.ea = "spot" + kb.ea++, b = b || {}, this.Sg = b.text || "", this.$u = b.offsets ? b.offsets.slice(
			0) : [5, 5, 5, 5], this.aB = b.userData || s, this.Dh = b.minZoom || s, this.Df = b.maxZoom || s)
	}
	kb.ea = 0;
	z.extend(kb.prototype, {
		xa: function(a) {
			this.Dh == s && (this.Dh = a.R.hc);
			this.Df == s && (this.Df = a.R.pc)
		},
		ua: function(a) {
			a instanceof J && (this.Mb = a)
		},
		ja: x("Mb"),
		yt: ca("Sg"),
		iD: x("Sg"),
		setUserData: ca("aB"),
		getUserData: x("aB")
	});

	function Ub() {
		this.M = s;
		this.Nb = "control";
		this.Sa = this.hJ = p
	}
	z.lang.wa(Ub, z.lang.Ga, "Control");
	z.extend(Ub.prototype, {
		initialize: function(a) {
			this.M = a;
			if (this.P) return a.Ya.appendChild(this.P), this.P
		},
		Fe: function(a) {
			!this.P && (this.initialize && $a(this.initialize)) && (this.P = this.initialize(a));
			this.m = this.m || {
				zg: t
			};
			this.PA();
			this.ir();
			this.P && (this.P.Hq = this)
		},
		PA: function() {
			var a = this.P;
			if (a) {
				var b = a.style;
				b.position = "absolute";
				b.zIndex = this.ou || "10";
				b.MozUserSelect = "none";
				b.WebkitTextSizeAdjust = "none";
				this.m.zg || z.U.eb(a, "BMap_noprint");
				I() || z.V(a, "contextmenu", oa)
			}
		},
		remove: function() {
			this.M = s;
			this.P && (this.P.parentNode && this.P.parentNode.removeChild(this.P), this.P = this.P.Hq = s)
		},
		Ea: function() {
			this.P = Bb(this.M.Ya, "<div unselectable='on'></div>");
			this.Sa == t && z.U.aa(this.P);
			return this.P
		},
		ir: function() {
			this.uc(this.m.anchor)
		},
		uc: function(a) {
			if (this.w1 || !Za(a) || isNaN(a) || a < Wb || 3 < a) a = this.defaultAnchor;
			this.m = this.m || {
				zg: t
			};
			this.m.Da = this.m.Da || this.defaultOffset;
			var b = this.m.anchor;
			this.m.anchor = a;
			if (this.P) {
				var c = this.P,
					e = this.m.Da.width,
					f = this.m.Da.height;
				c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
				switch (a) {
					case Wb:
						c.style.top = f + "px";
						c.style.left = e + "px";
						break;
					case Xb:
						c.style.top = f + "px";
						c.style.right = e + "px";
						break;
					case Yb:
						c.style.bottom = f + "px";
						c.style.left = e + "px";
						break;
					case 3:
						c.style.bottom = f + "px", c.style.right = e + "px"
				}
				c = ["TL", "TR", "BL", "BR"];
				z.U.tc(this.P, "anchor" + c[b]);
				z.U.eb(this.P, "anchor" + c[a])
			}
		},
		LC: function() {
			return this.m.anchor
		},
		getContainer: x("P"),
		Ld: function(a) {
			a instanceof P && (this.m = this.m || {
				zg: t
			}, this.m.Da = new P(a.width, a.height), this.P && this.uc(this.m.anchor))
		},
		cj: function() {
			return this.m.Da
		},
		Zc: x("P"),
		show: function() {
			this.Sa != p && (this.Sa = p, this.P && z.U.show(this.P))
		},
		aa: function() {
			this.Sa != t && (this.Sa = t, this.P && z.U.aa(this.P))
		},
		isPrintable: function() {
			return !!this.m.zg
		},
		Nc: function() {
			return !this.P && !this.M ? t : !!this.Sa
		}
	});
	var Wb = 0,
		Xb = 1,
		Yb = 2;

	function lb(a) {
		Ub.call(this);
		a = a || {};
		this.m = {
			zg: t,
			LE: a.showZoomInfo || p,
			anchor: a.anchor,
			Da: a.offset,
			type: a.type,
			PV: a.enableGeolocation || t
		};
		this.defaultAnchor = I() ? 3 : Wb;
		this.defaultOffset = new P(10, 10);
		this.uc(a.anchor);
		this.Jm(a.type);
		this.vf()
	}
	z.lang.wa(lb, Ub, "NavigationControl");
	z.extend(lb.prototype, {
		initialize: function(a) {
			this.M = a;
			return this.P
		},
		Jm: function(a) {
			this.m.type = Za(a) && 0 <= a && 3 >= a ? a : 0
		},
		Mo: function() {
			return this.m.type
		},
		vf: function() {
			var a = this;
			K.load("navictrl", function() {
				a.uf()
			})
		}
	});

	function Zb(a) {
		Ub.call(this);
		a = a || {};
		this.m = {
			anchor: a.anchor || Yb,
			Da: a.offset || new P(10, 30),
			ZZ: a.showAddressBar !== t,
			e2: a.enableAutoLocation || t,
			TL: a.locationIcon || s
		};
		var b = this;
		this.ou = 1200;
		b.S_ = [];
		this.ne = [];
		K.load("geoctrl", function() {
			(function e() {
				if (0 !== b.ne.length) {
					var a = b.ne.shift();
					b[a.method].apply(b, a.arguments);
					e()
				}
			})();
			b.dP()
		});
		Ta(Ma)
	}
	z.lang.wa(Zb, Ub, "GeolocationControl");
	z.extend(Zb.prototype, {
		location: function() {
			this.ne.push({
				method: "location",
				arguments: arguments
			})
		},
		getAddressComponent: ea(s)
	});

	function $b(a) {
		Ub.call(this);
		a = a || {};
		this.m = {
			zg: t,
			anchor: a.anchor,
			Da: a.offset
		};
		this.cc = [];
		this.defaultAnchor = Yb;
		this.defaultOffset = new P(5, 2);
		this.uc(a.anchor);
		this.hJ = t;
		this.vf()
	}
	z.lang.wa($b, Ub, "CopyrightControl");
	z.object.extend($b.prototype, {
		initialize: function(a) {
			this.M = a;
			return this.P
		},
		Qv: function(a) {
			if (a && Za(a.id) && !isNaN(a.id)) {
				var b = {
						bounds: s,
						content: ""
					},
					c;
				for (c in a) b[c] = a[c];
				if (a = this.am(a.id))
					for (var e in b) a[e] = b[e];
				else this.cc.push(b)
			}
		},
		am: function(a) {
			for (var b = 0, c = this.cc.length; b < c; b++)
				if (this.cc[b].id == a) return this.cc[b]
		},
		SC: x("cc"),
		nE: function(a) {
			for (var b = 0, c = this.cc.length; b < c; b++) this.cc[b].id == a && (r = this.cc.splice(b, 1), b--, c = this.cc
				.length)
		},
		vf: function() {
			var a = this;
			K.load("copyrightctrl", function() {
				a.uf()
			})
		}
	});

	function nb(a) {
		Ub.call(this);
		a = a || {};
		this.m = {
			zg: t,
			size: a.size || new P(150, 150),
			padding: 5,
			Za: a.isOpen === p ? p : t,
			j0: 4,
			Da: a.offset,
			anchor: a.anchor
		};
		this.defaultAnchor = 3;
		this.defaultOffset = new P(0, 0);
		this.Yp = this.Zp = 13;
		this.uc(a.anchor);
		this.Ae(this.m.size);
		this.vf()
	}
	z.lang.wa(nb, Ub, "OverviewMapControl");
	z.extend(nb.prototype, {
		initialize: function(a) {
			this.M = a;
			return this.P
		},
		uc: function(a) {
			Ub.prototype.uc.call(this, a)
		},
		qe: function() {
			this.qe.Kn = p;
			this.m.Za = !this.m.Za;
			this.P || (this.qe.Kn = t)
		},
		Ae: function(a) {
			a instanceof P || (a = new P(150, 150));
			a.width = 0 < a.width ? a.width : 150;
			a.height = 0 < a.height ? a.height : 150;
			this.m.size = a
		},
		Hb: function() {
			return this.m.size
		},
		Za: function() {
			return this.m.Za
		},
		vf: function() {
			var a = this;
			K.load("control", function() {
				a.uf()
			})
		}
	});

	function ac(a) {
		Ub.call(this);
		a = a || {};
		this.defaultAnchor = Wb;
		this.zU = a.canCheckSize === t ? t : p;
		this.Ui = "";
		this.defaultOffset = new P(10, 10);
		this.onChangeBefore = [];
		this.onChangeAfter = [];
		this.onChangeSuccess = [];
		this.m = {
			zg: t,
			Da: a.offset || this.defaultOffset,
			anchor: a.anchor || this.defaultAnchor,
			expand: !!a.expand
		};
		a.onChangeBefore && $a(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
		a.onChangeAfter && $a(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
		a.onChangeSuccess && $a(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
		this.uc(a.anchor);
		this.vf()
	}
	z.lang.wa(ac, Ub, "CityListControl");
	z.object.extend(ac.prototype, {
		initialize: function(a) {
			this.M = a;
			return this.P
		},
		vf: function() {
			var a = this;
			K.load("citylistcontrol", function() {
				a.uf()
			}, p)
		}
	});

	function mb(a) {
		Ub.call(this);
		a = a || {};
		this.m = {
			zg: t,
			color: "black",
			ed: "metric",
			Da: a.offset
		};
		this.defaultAnchor = Yb;
		this.defaultOffset = new P(81, 18);
		this.uc(a.anchor);
		this.Lh = {
			metric: {
				name: "metric",
				vJ: 1,
				jL: 1E3,
				TN: "\u7c73",
				UN: "\u516c\u91cc"
			},
			us: {
				name: "us",
				vJ: 3.2808,
				jL: 5280,
				TN: "\u82f1\u5c3a",
				UN: "\u82f1\u91cc"
			}
		};
		this.Lh[this.m.ed] || (this.m.ed = "metric");
		this.bI = s;
		this.BH = {};
		this.vf()
	}
	z.lang.wa(mb, Ub, "ScaleControl");
	z.object.extend(mb.prototype, {
		initialize: function(a) {
			this.M = a;
			return this.P
		},
		Ck: function(a) {
			this.m.color = a + ""
		},
		A2: function() {
			return this.m.color
		},
		HE: function(a) {
			this.m.ed = this.Lh[a] && this.Lh[a].name || this.m.ed
		},
		lX: function() {
			return this.m.ed
		},
		vf: function() {
			var a = this;
			K.load("control", function() {
				a.uf()
			})
		}
	});
	var bc = 0;

	function ob(a) {
		Ub.call(this);
		a = a || {};
		this.defaultAnchor = Xb;
		this.defaultOffset = new P(10, 10);
		this.m = {
			zg: t,
			fh: [Pa, ab, Va, Sa],
			jV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
			type: a.type || bc,
			Da: a.offset || this.defaultOffset,
			TV: p
		};
		this.uc(a.anchor);
		"[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.m.fh = a.mapTypes.slice(0));
		this.vf()
	}
	z.lang.wa(ob, Ub, "MapTypeControl");
	z.object.extend(ob.prototype, {
		initialize: function(a) {
			this.M = a;
			return this.P
		},
		ey: function(a) {
			this.M.An = a
		},
		vf: function() {
			var a = this;
			K.load("control", function() {
				a.uf()
			}, p)
		}
	});

	function cc(a) {
		Ub.call(this);
		a = a || {};
		this.m = {
			zg: t,
			Da: a.offset,
			anchor: a.anchor
		};
		this.Hi = t;
		this.yv = s;
		this.KH = new dc({
			jf: "api"
		});
		this.LH = new ec(s, {
			jf: "api"
		});
		this.defaultAnchor = Xb;
		this.defaultOffset = new P(10, 10);
		this.uc(a.anchor);
		this.vf();
		Ta(xa)
	}
	z.lang.wa(cc, Ub, "PanoramaControl");
	z.extend(cc.prototype, {
		initialize: function(a) {
			this.M = a;
			return this.P
		},
		vf: function() {
			var a = this;
			K.load("control", function() {
				a.uf()
			})
		}
	});

	function fc(a) {
		z.lang.Ga.call(this);
		this.m = {
			Ya: s,
			cursor: "default"
		};
		this.m = z.extend(this.m, a);
		this.Nb = "contextmenu";
		this.M = s;
		this.Aa = [];
		this.Ff = [];
		this.De = [];
		this.rw = this.Ir = s;
		this.Ch = t;
		var b = this;
		K.load("menu", function() {
			b.jb()
		})
	}
	z.lang.wa(fc, z.lang.Ga, "ContextMenu");
	z.object.extend(fc.prototype, {
		xa: function(a, b) {
			this.M = a;
			this.ql = b || s
		},
		remove: function() {
			this.M = this.ql = s
		},
		Rv: function(a) {
			if (a && !("menuitem" != a.Nb || "" == a.Sg || 0 >= a.Pi)) {
				for (var b = 0, c = this.Aa.length; b < c; b++)
					if (this.Aa[b] === a) return;
				this.Aa.push(a);
				this.Ff.push(a)
			}
		},
		removeItem: function(a) {
			if (a && "menuitem" == a.Nb) {
				for (var b = 0, c = this.Aa.length; b < c; b++) this.Aa[b] === a && (this.Aa[b].remove(), this.Aa.splice(b, 1),
					c--);
				b = 0;
				for (c = this.Ff.length; b < c; b++) this.Ff[b] === a && (this.Ff[b].remove(), this.Ff.splice(b, 1), c--)
			}
		},
		kB: function() {
			this.Aa.push({
				Nb: "divider",
				Bj: this.De.length
			});
			this.De.push({
				U: s
			})
		},
		pE: function(a) {
			if (this.De[a]) {
				for (var b = 0, c = this.Aa.length; b < c; b++) this.Aa[b] && ("divider" == this.Aa[b].Nb && this.Aa[b].Bj == a) &&
					(this.Aa.splice(b, 1), c--), this.Aa[b] && ("divider" == this.Aa[b].Nb && this.Aa[b].Bj > a) && this.Aa[b].Bj--;
				this.De.splice(a, 1)
			}
		},
		Zc: x("P"),
		show: function() {
			this.Ch != p && (this.Ch = p)
		},
		aa: function() {
			this.Ch != t && (this.Ch = t)
		},
		DZ: function(a) {
			a && (this.m.cursor = a)
		},
		getItem: function(a) {
			return this.Ff[a]
		}
	});
	var gc = H.sa + "menu_zoom_in.png",
		hc = H.sa + "menu_zoom_out.png";

	function ic(a, b, c) {
		if (a && $a(b)) {
			z.lang.Ga.call(this);
			this.m = {
				width: 100,
				id: "",
				km: ""
			};
			c = c || {};
			this.m.width = 1 * c.width ? c.width : 100;
			this.m.id = c.id ? c.id : "";
			this.m.km = c.iconUrl ? c.iconUrl : "";
			this.Sg = a + "";
			this.Ny = b;
			this.M = s;
			this.Nb = "menuitem";
			this.pr = this.Pu = this.P = this.xh = s;
			this.Ah = p;
			var e = this;
			K.load("menu", function() {
				e.jb()
			})
		}
	}
	z.lang.wa(ic, z.lang.Ga, "MenuItem");
	z.object.extend(ic.prototype, {
		xa: function(a, b) {
			this.M = a;
			this.xh = b
		},
		remove: function() {
			this.M = this.xh = s
		},
		yt: function(a) {
			a && (this.Sg = a + "")
		},
		Ub: function(a) {
			a && (this.m.km = a)
		},
		Zc: x("P"),
		enable: function() {
			this.Ah = p
		},
		disable: function() {
			this.Ah = t
		}
	});

	function hb(a, b) {
		a && !b && (b = a);
		this.Ge = this.Wd = this.Le = this.Yd = this.Dl = this.ol = s;
		a && (this.Dl = new J(a.lng, a.lat), this.ol = new J(b.lng, b.lat), this.Le = a.lng, this.Yd = a.lat, this.Ge = b.lng,
			this.Wd = b.lat)
	}
	z.object.extend(hb.prototype, {
		lj: function() {
			return !this.Dl || !this.ol
		},
		oc: function(a) {
			return !(a instanceof hb) || this.lj() ? t : this.Se().oc(a.Se()) && this.Nf().oc(a.Nf())
		},
		Se: x("Dl"),
		Nf: x("ol"),
		QU: function(a) {
			return !(a instanceof hb) || this.lj() || a.lj() ? t : a.Le > this.Le && a.Ge < this.Ge && a.Yd > this.Yd && a.Wd <
				this.Wd
		},
		Cb: function() {
			return this.lj() ? s : new J((this.Le + this.Ge) / 2, (this.Yd + this.Wd) / 2)
		},
		Hs: function(a) {
			if (!(a instanceof hb) || Math.max(a.Le, a.Ge) < Math.min(this.Le, this.Ge) || Math.min(a.Le, a.Ge) > Math.max(
					this.Le, this.Ge) || Math.max(a.Yd, a.Wd) < Math.min(this.Yd, this.Wd) || Math.min(a.Yd, a.Wd) > Math.max(this
					.Yd, this.Wd)) return s;
			var b = Math.max(this.Le, a.Le),
				c = Math.min(this.Ge, a.Ge),
				e = Math.max(this.Yd, a.Yd),
				a = Math.min(this.Wd, a.Wd);
			return new hb(new J(b, e), new J(c, a))
		},
		Er: function(a) {
			return !(a instanceof J) || this.lj() ? t : a.lng >= this.Le && a.lng <= this.Ge && a.lat >= this.Yd && a.lat <=
				this.Wd
		},
		extend: function(a) {
			if (a instanceof J) {
				var b = a.lng,
					a = a.lat;
				this.Dl || (this.Dl = new J(0, 0));
				this.ol || (this.ol = new J(0, 0));
				if (!this.Le || this.Le > b) this.Dl.lng = this.Le = b;
				if (!this.Ge || this.Ge < b) this.ol.lng = this.Ge = b;
				if (!this.Yd || this.Yd > a) this.Dl.lat = this.Yd = a;
				if (!this.Wd || this.Wd < a) this.ol.lat = this.Wd = a
			}
		},
		ZE: function() {
			return this.lj() ? new J(0, 0) : new J(Math.abs(this.Ge - this.Le), Math.abs(this.Wd - this.Yd))
		}
	});

	function J(a, b) {
		isNaN(a) && (a = Lb(a), a = isNaN(a) ? 0 : a);
		bb(a) && (a = parseFloat(a));
		isNaN(b) && (b = Lb(b), b = isNaN(b) ? 0 : b);
		bb(b) && (b = parseFloat(b));
		this.lng = a;
		this.lat = b
	}
	J.oL = function(a) {
		return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
	};
	J.prototype.oc = function(a) {
		return a && this.lat == a.lat && this.lng == a.lng
	};

	function jc() {}
	jc.prototype.ug = function() {
		aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
	};
	jc.prototype.pj = function() {
		aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
	};

	function kc() {};
	var gb = {
		xJ: function(a, b, c) {
			K.load("coordtransutils", function() {
				gb.bU(a, b, c)
			}, p)
		},
		wJ: function(a, b, c) {
			K.load("coordtransutils", function() {
				gb.aU(a, b, c)
			}, p)
		}
	};

	function lc() {
		this.Ra = [];
		var a = this;
		K.load("convertor", function() {
			a.bP()
		})
	}
	z.wa(lc, z.lang.Ga, "Convertor");
	z.extend(lc.prototype, {
		translate: function(a, b, c, e) {
			this.Ra.push({
				method: "translate",
				arguments: [a, b, c, e]
			})
		}
	});
	U(lc.prototype, {
		translate: lc.prototype.translate
	});

	function S() {}
	S.prototype = new jc;
	z.extend(S, {
		zO: 6370996.81,
		LF: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
		fu: [86, 60, 45, 30, 15, 0],
		FO: [
			[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547,
				91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7
			],
			[-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -
				59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7
			],
			[-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -
				25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37
			],
			[-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -
				4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06
			],
			[3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -
				0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4
			],
			[2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037,
				-1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5
			]
		],
		IF: [
			[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -
				35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5
			],
			[8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -
				1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5
			],
			[0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -
				1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5
			],
			[0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287,
				1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5
			],
			[-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378,
				54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5
			],
			[-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093,
				2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45
			]
		],
		G2: function(a, b) {
			if (!a || !b) return 0;
			var c, e, a = this.dc(a);
			if (!a) return 0;
			c = this.Lk(a.lng);
			e = this.Lk(a.lat);
			b = this.dc(b);
			return !b ? 0 : this.kf(c, this.Lk(b.lng), e, this.Lk(b.lat))
		},
		Eo: function(a, b) {
			if (!a || !b) return 0;
			a.lng = this.ZC(a.lng, -180, 180);
			a.lat = this.eD(a.lat, -74, 74);
			b.lng = this.ZC(b.lng, -180, 180);
			b.lat = this.eD(b.lat, -74, 74);
			return this.kf(this.Lk(a.lng), this.Lk(b.lng), this.Lk(a.lat), this.Lk(b.lat))
		},
		dc: function(a) {
			if (a === s || a === l) return new J(0, 0);
			var b, c;
			b = new J(Math.abs(a.lng), Math.abs(a.lat));
			for (var e = 0; e < this.LF.length; e++)
				if (b.lat >= this.LF[e]) {
					c = this.FO[e];
					break
				} a = this.yJ(a, c);
			return a = new J(a.lng, a.lat)
		},
		Gb: function(a) {
			if (a === s || a === l || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new J(0, 0);
			var b, c;
			a.lng = this.ZC(a.lng, -180, 180);
			a.lat = this.eD(a.lat, -85, 85);
			b = new J(a.lng, a.lat);
			for (var e = 0; e < this.fu.length; e++)
				if (b.lat >= this.fu[e]) {
					c = this.IF[e];
					break
				} if (!c)
				for (e = 0; e < this.fu.length; e++)
					if (b.lat <= -this.fu[e]) {
						c = this.IF[e];
						break
					} a = this.yJ(a, c);
			return a = new J(a.lng, a.lat)
		},
		yJ: function(a, b) {
			if (a && b) {
				var c = b[0] + b[1] * Math.abs(a.lng),
					e = Math.abs(a.lat) / b[9],
					e = b[2] + b[3] * e + b[4] * e * e + b[5] * e * e * e + b[6] * e * e * e * e + b[7] * e * e * e * e * e + b[8] *
					e * e * e * e * e * e,
					c = c * (0 > a.lng ? -1 : 1),
					e = e * (0 > a.lat ? -1 : 1);
				return new J(c, e)
			}
		},
		kf: function(a, b, c, e) {
			return this.zO * Math.acos(Math.sin(c) * Math.sin(e) + Math.cos(c) * Math.cos(e) * Math.cos(b - a))
		},
		Lk: function(a) {
			return Math.PI * a / 180
		},
		d5: function(a) {
			return 180 * a / Math.PI
		},
		eD: function(a, b, c) {
			b != s && (a = Math.max(a, b));
			c != s && (a = Math.min(a, c));
			return a
		},
		ZC: function(a, b, c) {
			for (; a > c;) a -= c - b;
			for (; a < b;) a += c - b;
			return a
		}
	});
	z.extend(S.prototype, {
		ci: function(a) {
			return S.Gb(a)
		},
		ug: function(a) {
			a = S.Gb(a);
			return new R(a.lng, a.lat)
		},
		gh: function(a) {
			return S.dc(a)
		},
		pj: function(a) {
			a = new J(a.x, a.y);
			return S.dc(a)
		},
		Sb: function(a, b, c, e, f) {
			if (a) return a = this.ci(a, f), b = this.fc(b), new R(Math.round((a.lng - c.lng) / b + e.width / 2), Math.round(
				(c.lat - a.lat) / b + e.height / 2))
		},
		Ib: function(a, b, c, e, f) {
			if (a) return b = this.fc(b), this.gh(new J(c.lng + b * (a.x - e.width / 2), c.lat - b * (a.y - e.height / 2)),
				f)
		},
		fc: function(a) {
			return Math.pow(2, 18 - a)
		}
	});

	function jb() {
		this.Ui = "bj"
	}
	jb.prototype = new S;
	z.extend(jb.prototype, {
		ci: function(a, b) {
			return this.NP(b, S.Gb(a))
		},
		gh: function(a, b) {
			return S.dc(this.OP(b, a))
		},
		lngLatToPointFor3D: function(a, b) {
			var c = this,
				e = S.Gb(a);
			K.load("coordtrans", function() {
				var a = kc.cD(c.Ui || "bj", e),
					a = new R(a.x, a.y);
				b && b(a)
			}, p)
		},
		pointToLngLatFor3D: function(a, b) {
			var c = this,
				e = new J(a.x, a.y);
			K.load("coordtrans", function() {
				var a = kc.$C(c.Ui || "bj", e),
					a = new J(a.lng, a.lat),
					a = S.dc(a);
				b && b(a)
			}, p)
		},
		NP: function(a, b) {
			if (K.lb("coordtrans").Ke == K.uj.Ep) {
				var c = kc.cD(a || "bj", b);
				return new J(c.x, c.y)
			}
			K.load("coordtrans", u());
			return new J(0, 0)
		},
		OP: function(a, b) {
			if (K.lb("coordtrans").Ke == K.uj.Ep) {
				var c = kc.$C(a || "bj", b);
				return new J(c.lng, c.lat)
			}
			K.load("coordtrans", u());
			return new J(0, 0)
		},
		fc: function(a) {
			return Math.pow(2, 20 - a)
		}
	});

	function mc() {
		this.Nb = "overlay"
	}
	z.lang.wa(mc, z.lang.Ga, "Overlay");
	mc.rk = function(a) {
		a *= 1;
		return !a ? 0 : -1E5 * a << 1
	};
	z.extend(mc.prototype, {
		Fe: function(a) {
			if (!this.ba && $a(this.initialize) && (this.ba = this.initialize(a))) this.ba.style.WebkitUserSelect = "none";
			this.draw()
		},
		initialize: function() {
			aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
		},
		draw: function() {
			aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
		},
		remove: function() {
			this.ba && this.ba.parentNode && this.ba.parentNode.removeChild(this.ba);
			this.ba = s;
			this.dispatchEvent(new Q("onremove"))
		},
		aa: function() {
			this.ba && z.U.aa(this.ba)
		},
		show: function() {
			this.ba && z.U.show(this.ba)
		},
		Nc: function() {
			return !this.ba || "none" == this.ba.style.display || "hidden" == this.ba.style.visibility ? t : p
		}
	});
	D.We(function(a) {
		function b(a, b) {
			var c = O("div"),
				i = c.style;
			i.position = "absolute";
			i.top = i.left = i.width = i.height = "0";
			i.zIndex = b;
			a.appendChild(c);
			return c
		}
		var c = a.$;
		c.Oc = a.Oc = b(a.platform, 200);
		a.Xd.FC = b(c.Oc, 800);
		a.Xd.UD = b(c.Oc, 700);
		a.Xd.iK = b(c.Oc, 600);
		a.Xd.ND = b(c.Oc, 500);
		a.Xd.XL = b(c.Oc, 400);
		a.Xd.YL = b(c.Oc, 300);
		a.Xd.eO = b(c.Oc, 201);
		a.Xd.Ts = b(c.Oc, 200)
	});

	function ib() {
		z.lang.Ga.call(this);
		mc.call(this);
		this.map = s;
		this.Sa = p;
		this.Db = s;
		this.vG = 0
	}
	z.lang.wa(ib, mc, "OverlayInternal");
	z.extend(ib.prototype, {
		initialize: function(a) {
			this.map = a;
			z.lang.Ga.call(this, this.ea);
			return s
		},
		Lw: x("map"),
		draw: u(),
		vj: u(),
		remove: function() {
			this.map = s;
			z.lang.uw(this.ea);
			mc.prototype.remove.call(this)
		},
		aa: function() {
			this.Sa !== t && (this.Sa = t)
		},
		show: function() {
			this.Sa !== p && (this.Sa = p)
		},
		Nc: function() {
			return !this.ba ? t : !!this.Sa
		},
		Ta: x("ba"),
		eN: function(a) {
			var a = a || {},
				b;
			for (b in a) this.K[b] = a[b]
		},
		sp: ca("zIndex"),
		Yi: function() {
			this.K.Yi = p
		},
		sV: function() {
			this.K.Yi = t
		},
		Zn: ca("gg"),
		dp: function() {
			this.gg = s
		}
	});

	function nc() {
		this.map = s;
		this.Ba = {};
		this.Ce = []
	}
	D.We(function(a) {
		var b = new nc;
		b.map = a;
		a.Ba = b.Ba;
		a.Ce = b.Ce;
		a.addEventListener("load", function(a) {
			b.draw(a)
		});
		a.addEventListener("moveend", function(a) {
			b.draw(a)
		});
		z.fa.ma && 8 > z.fa.ma || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
			setTimeout(function() {
				b.draw(a)
			}, 20)
		}) : a.addEventListener("zoomend", function(a) {
			b.draw(a)
		});
		a.addEventListener("maptypechange", function(a) {
			b.draw(a)
		});
		a.addEventListener("addoverlay", function(a) {
			a = a.target;
			if (a instanceof ib) b.Ba[a.ea] || (b.Ba[a.ea] = a);
			else {
				for (var e = t, f = 0, g = b.Ce.length; f < g; f++)
					if (b.Ce[f] === a) {
						e = p;
						break
					} e || b.Ce.push(a)
			}
		});
		a.addEventListener("removeoverlay", function(a) {
			a = a.target;
			if (a instanceof ib) delete b.Ba[a.ea];
			else
				for (var e = 0, f = b.Ce.length; e < f; e++)
					if (b.Ce[e] === a) {
						b.Ce.splice(e, 1);
						break
					}
		});
		a.addEventListener("clearoverlays", function() {
			this.Xc();
			for (var a in b.Ba) b.Ba[a].K.Yi && (b.Ba[a].remove(), delete b.Ba[a]);
			a = 0;
			for (var e = b.Ce.length; a < e; a++) b.Ce[a].enableMassClear !== t && (b.Ce[a].remove(), b.Ce[a] = s, b.Ce.splice(
				a, 1), a--, e--)
		});
		a.addEventListener("infowindowopen", function() {
			var a = this.Db;
			a && (z.U.aa(a.zc), z.U.aa(a.$b))
		});
		a.addEventListener("movestart", function() {
			this.bh() && this.bh().hI()
		});
		a.addEventListener("moveend", function() {
			this.bh() && this.bh().XH()
		})
	});
	nc.prototype.draw = function(a) {
		if (D.Hp) {
			var b = D.Hp.ls(this.map);
			"canvas" === b.Nb && b.canvas && b.IP(b.canvas.getContext("2d"))
		}
		for (var c in this.Ba) this.Ba[c].draw(a);
		z.lc.Ob(this.Ce, function(a) {
			a.draw()
		});
		this.map.$.rb && this.map.$.rb.ua();
		D.Hp && b.FE()
	};

	function oc(a) {
		ib.call(this);
		a = a || {};
		this.K = {
			strokeColor: a.strokeColor || "#3a6bdb",
			qc: a.strokeWeight || 5,
			td: a.strokeOpacity || 0.65,
			strokeStyle: a.strokeStyle || "solid",
			Yi: a.enableMassClear === t ? t : p,
			nk: s,
			dm: s,
			gf: a.enableEditing === p ? p : t,
			bM: 5,
			Q_: t,
			df: a.enableClicking === t ? t : p,
			ai: a.icons && 0 < a.icons.length ? a.icons : s
		};
		0 >= this.K.qc && (this.K.qc = 5);
		if (0 > this.K.td || 1 < this.K.td) this.K.td = 0.65;
		if (0 > this.K.pg || 1 < this.K.pg) this.K.pg = 0.65;
		"solid" != this.K.strokeStyle && "dashed" != this.K.strokeStyle && (this.K.strokeStyle = "solid");
		this.ba = s;
		this.nu = new hb(0, 0);
		this.bf = [];
		this.rc = [];
		this.Ua = {}
	}
	z.lang.wa(oc, ib, "Graph");
	oc.Iw = function(a) {
		var b = [];
		if (!a) return b;
		bb(a) && z.lc.Ob(a.split(";"), function(a) {
			a = a.split(",");
			b.push(new J(a[0], a[1]))
		});
		"[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
		return b
	};
	oc.eE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
	z.extend(oc.prototype, {
		initialize: function(a) {
			this.map = a;
			return s
		},
		draw: u(),
		hr: function(a) {
			this.bf.length = 0;
			this.na = oc.Iw(a).slice(0);
			this.uh()
		},
		je: function(a) {
			this.hr(a)
		},
		uh: function() {
			if (this.na) {
				var a = this;
				a.nu = new hb;
				z.lc.Ob(this.na, function(b) {
					a.nu.extend(b)
				})
			}
		},
		Re: x("na"),
		Im: function(a, b) {
			b && this.na[a] && (this.bf.length = 0, this.na[a] = new J(b.lng, b.lat), this.uh())
		},
		setStrokeColor: function(a) {
			this.K.strokeColor = a
		},
		dX: function() {
			return this.K.strokeColor
		},
		rp: function(a) {
			0 < a && (this.K.qc = a)
		},
		LK: function() {
			return this.K.qc
		},
		pp: function(a) {
			a == l || (1 < a || 0 > a) || (this.K.td = a)
		},
		eX: function() {
			return this.K.td
		},
		mt: function(a) {
			1 < a || 0 > a || (this.K.pg = a)
		},
		yW: function() {
			return this.K.pg
		},
		qp: function(a) {
			"solid" != a && "dashed" != a || (this.K.strokeStyle = a)
		},
		KK: function() {
			return this.K.strokeStyle
		},
		setFillColor: function(a) {
			this.K.fillColor = a || ""
		},
		xW: function() {
			return this.K.fillColor
		},
		te: x("nu"),
		remove: function() {
			this.map && this.map.removeEventListener("onmousemove", this.Mu);
			ib.prototype.remove.call(this);
			this.bf.length = 0
		},
		gf: function() {
			if (!(2 > this.na.length)) {
				this.K.gf = p;
				var a = this;
				K.load("poly", function() {
					a.Il()
				}, p)
			}
		},
		rV: function() {
			this.K.gf = t;
			var a = this;
			K.load("poly", function() {
				a.bk()
			}, p)
		},
		uW: function() {
			return this.K.gf
		}
	});

	function pc(a) {
		ib.call(this);
		this.ba = this.map = s;
		this.K = {
			width: 0,
			height: 0,
			Da: new P(0, 0),
			opacity: 1,
			background: "transparent",
			nx: 1,
			JL: "#000",
			iY: "solid",
			point: s
		};
		this.eN(a);
		this.point = this.K.point
	}
	z.lang.wa(pc, ib, "Division");
	z.extend(pc.prototype, {
		vj: function() {
			var a = this.K,
				b = this.content,
				c = ['<div class="BMap_Division" style="position:absolute;'];
			c.push("width:" + a.width + "px;display:block;");
			c.push("overflow:hidden;");
			"none" != a.borderColor && c.push("border:" + a.nx + "px " + a.iY + " " + a.JL + ";");
			c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
			c.push("background:" + a.background + ";");
			c.push('z-index:60;">');
			c.push(b);
			c.push("</div>");
			this.ba = Bb(this.map.Of().UD, c.join(""))
		},
		initialize: function(a) {
			this.map = a;
			this.vj();
			this.ba && z.V(this.ba, I() ? "touchstart" : "mousedown", function(a) {
				na(a)
			});
			return this.ba
		},
		draw: function() {
			var a = this.map.Ve(this.K.point);
			this.K.Da = new P(-Math.round(this.K.width / 2) - Math.round(this.K.nx), -Math.round(this.K.height / 2) - Math.round(
				this.K.nx));
			this.ba.style.left = a.x + this.K.Da.width + "px";
			this.ba.style.top = a.y + this.K.Da.height + "px"
		},
		ja: function() {
			return this.K.point
		},
		W0: function() {
			return this.map.Sb(this.ja())
		},
		ua: function(a) {
			this.K.point = a;
			this.draw()
		},
		EZ: function(a, b) {
			this.K.width = Math.round(a);
			this.K.height = Math.round(b);
			this.ba && (this.ba.style.width = this.K.width + "px", this.ba.style.height = this.K.height + "px", this.draw())
		}
	});

	function qc(a, b, c) {
		a && b && (this.imageUrl = a, this.size = b, a = new P(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c ||
			{}, a = c.anchor || a, b = c.imageOffset || new P(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset =
			b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
	}
	z.extend(qc.prototype, {
		fN: function(a) {
			a && (this.imageUrl = a)
		},
		VZ: function(a) {
			a && (this.printImageUrl = a)
		},
		Ae: function(a) {
			a && (this.size = new P(a.width, a.height))
		},
		uc: function(a) {
			a && (this.anchor = new P(a.width, a.height))
		},
		nt: function(a) {
			a && (this.imageOffset = new P(a.width, a.height))
		},
		JZ: function(a) {
			a && (this.infoWindowAnchor = new P(a.width, a.height))
		},
		GZ: function(a) {
			a && (this.imageSize = new P(a.width, a.height))
		},
		toString: ea("Icon")
	});

	function rc(a, b) {
		if (a) {
			b = b || {};
			this.style = {
				anchor: b.anchor || new P(0, 0),
				fillColor: b.fillColor || "#000",
				pg: b.fillOpacity || 0,
				scale: b.scale || 1,
				rotation: b.rotation || 0,
				strokeColor: b.strokeColor || "#000",
				td: b.strokeOpacity || 1,
				qc: b.strokeWeight
			};
			this.Nb = "number" === typeof a ? a : "UserDefined";
			this.xi = this.style.anchor;
			this.Mq = new P(0, 0);
			this.anchor = s;
			this.CA = a;
			var c = this;
			K.load("symbol", function() {
				c.fn()
			}, p)
		}
	}
	z.extend(rc.prototype, {
		setPath: ca("CA"),
		setAnchor: function(a) {
			this.xi = this.style.anchor = a
		},
		setRotation: function(a) {
			this.style.rotation = a
		},
		setScale: function(a) {
			this.style.scale = a
		},
		setStrokeWeight: function(a) {
			this.style.qc = a
		},
		setStrokeColor: function(a) {
			a = z.Cr.IB(a, this.style.td);
			this.style.strokeColor = a
		},
		setStrokeOpacity: function(a) {
			this.style.td = a
		},
		setFillOpacity: function(a) {
			this.style.pg = a
		},
		setFillColor: function(a) {
			this.style.fillColor = a
		}
	});

	function sc(a, b, c, e) {
		a && (this.fv = {}, this.gK = e ? !!e : t, this.Uc = [], this.n_ = a instanceof rc ? a : s, this.QH = b === l ? p :
			!!(b.indexOf("%") + 1), this.Oj = isNaN(parseFloat(b)) ? 1 : this.QH ? parseFloat(b) / 100 : parseFloat(b), this.RH = !
			!(c.indexOf("%") + 1), this.repeat = c != l ? this.RH ? parseFloat(c) / 100 : parseFloat(c) : 0)
	};

	function tc(a, b) {
		z.lang.Ga.call(this);
		this.content = a;
		this.map = s;
		b = b || {};
		this.K = {
			width: b.width || 0,
			height: b.height || 0,
			maxWidth: b.maxWidth || 730,
			Da: b.offset || new P(0, 0),
			title: b.title || "",
			WD: b.maxContent || "",
			Zg: b.enableMaximize || t,
			$r: b.enableAutoPan === t ? t : p,
			oC: b.enableCloseOnClick === t ? t : p,
			margin: b.margin || [10, 10, 40, 10],
			EB: b.collisions || [
				[10, 10],
				[10, 10],
				[10, 10],
				[10, 10]
			],
			BX: t,
			DY: b.onClosing || ea(p),
			$J: t,
			uC: b.enableParano === p ? p : t,
			message: b.message,
			wC: b.enableSearchTool === p ? p : t,
			Xw: b.headerContent || "",
			pC: b.enableContentScroll || t
		};
		if (0 != this.K.width && (220 > this.K.width && (this.K.width = 220), 730 < this.K.width)) this.K.width = 730;
		if (0 != this.K.height && (60 > this.K.height && (this.K.height = 60), 650 < this.K.height)) this.K.height = 650;
		if (0 != this.K.maxWidth && (220 > this.K.maxWidth && (this.K.maxWidth = 220), 730 < this.K.maxWidth)) this.K.maxWidth =
			730;
		this.ce = t;
		this.si = H.sa;
		this.sb = s;
		var c = this;
		K.load("infowindow", function() {
			c.jb()
		})
	}
	z.lang.wa(tc, z.lang.Ga, "InfoWindow");
	z.extend(tc.prototype, {
		setWidth: function(a) {
			!a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.width = a)
		},
		setHeight: function(a) {
			!a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.K.height = a)
		},
		kN: function(a) {
			!a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.K.maxWidth =
				a)
		},
		Dc: function(a) {
			this.K.title = a
		},
		getTitle: function() {
			return this.K.title
		},
		cd: ca("content"),
		lk: x("content"),
		ut: function(a) {
			this.K.WD = a + ""
		},
		ie: u(),
		$r: function() {
			this.K.$r = p
		},
		disableAutoPan: function() {
			this.K.$r = t
		},
		enableCloseOnClick: function() {
			this.K.oC = p
		},
		disableCloseOnClick: function() {
			this.K.oC = t
		},
		Zg: function() {
			this.K.Zg = p
		},
		ww: function() {
			this.K.Zg = t
		},
		show: function() {
			this.Sa = p
		},
		aa: function() {
			this.Sa = t
		},
		close: function() {
			this.aa()
		},
		qx: function() {
			this.ce = p
		},
		restore: function() {
			this.ce = t
		},
		Nc: function() {
			return this.Za()
		},
		Za: ea(t),
		ja: function() {
			if (this.sb && this.sb.ja) return this.sb.ja()
		},
		cj: function() {
			return this.K.Da
		}
	});
	Oa.prototype.ad = function(a, b) {
		if (a instanceof tc && b instanceof J) {
			var c = this.$;
			c.qm ? c.qm.ua(b) : (c.qm = new V(b, {
				icon: new qc(H.sa + "blank.gif", {
					width: 1,
					height: 1
				}),
				offset: new P(0, 0),
				clickable: t
			}), c.qm.IQ = 1);
			this.Pa(c.qm);
			c.qm.ad(a)
		}
	};
	Oa.prototype.Xc = function() {
		var a = this.$.rb || this.$.fl;
		a && a.sb && a.sb.Xc()
	};
	ib.prototype.ad = function(a) {
		this.map && (this.map.Xc(), a.Sa = p, this.map.$.fl = a, a.sb = this, z.lang.Ga.call(a, a.ea))
	};
	ib.prototype.Xc = function() {
		this.map && this.map.$.fl && (this.map.$.fl.Sa = t, z.lang.uw(this.map.$.fl.ea), this.map.$.fl = s)
	};

	function uc(a, b) {
		ib.call(this);
		this.content = a;
		this.ba = this.map = s;
		b = b || {};
		this.K = {
			width: 0,
			Da: b.offset || new P(0, 0),
			xp: {
				backgroundColor: "#fff",
				border: "1px solid #f00",
				padding: "1px",
				whiteSpace: "nowrap",
				font: "12px " + H.fontFamily,
				zIndex: "80",
				MozUserSelect: "none"
			},
			position: b.position || s,
			Yi: b.enableMassClear === t ? t : p,
			df: p
		};
		0 > this.K.width && (this.K.width = 0);
		Hb(b.enableClicking) && (this.K.df = b.enableClicking);
		this.point = this.K.position;
		var c = this;
		K.load("marker", function() {
			c.jb()
		})
	}
	z.lang.wa(uc, ib, "Label");
	z.extend(uc.prototype, {
		ja: function() {
			return this.Uu ? this.Uu.ja() : this.point
		},
		ua: function(a) {
			a instanceof J && !this.Mw() && (this.point = this.K.position = new J(a.lng, a.lat))
		},
		cd: ca("content"),
		EE: function(a) {
			0 <= a && 1 >= a && (this.K.opacity = a)
		},
		Ld: function(a) {
			a instanceof P && (this.K.Da = new P(a.width, a.height))
		},
		cj: function() {
			return this.K.Da
		},
		Md: function(a) {
			a = a || {};
			this.K.xp = z.extend(this.K.xp, a)
		},
		ni: function(a) {
			return this.Md(a)
		},
		Dc: function(a) {
			this.K.title = a || ""
		},
		getTitle: function() {
			return this.K.title
		},
		jN: function(a) {
			this.point = (this.Uu = a) ? this.K.position = a.ja() : this.K.position = s
		},
		Mw: function() {
			return this.Uu || s
		},
		lk: x("content")
	});

	function vc(a, b) {
		if (0 !== arguments.length) {
			ib.apply(this, arguments);
			b = b || {};
			this.K = {
				fb: a,
				opacity: b.opacity || 1,
				Qo: b.imageURL || "",
				Rr: b.displayOnMinLevel || 1,
				Yi: b.enableMassClear === t ? t : p,
				Qr: b.displayOnMaxLevel || 19,
				h_: b.stretch || t
			};
			0 === b.opacity && (this.K.opacity = 0);
			var c = this;
			K.load("groundoverlay", function() {
				c.jb()
			})
		}
	}
	z.lang.wa(vc, ib, "GroundOverlay");
	z.extend(vc.prototype, {
		setBounds: function(a) {
			this.K.fb = a
		},
		getBounds: function() {
			return this.K.fb
		},
		setOpacity: function(a) {
			this.K.opacity = a
		},
		getOpacity: function() {
			return this.K.opacity
		},
		setImageURL: function(a) {
			this.K.Qo = a
		},
		getImageURL: function() {
			return this.K.Qo
		},
		setDisplayOnMinLevel: function(a) {
			this.K.Rr = a
		},
		getDisplayOnMinLevel: function() {
			return this.K.Rr
		},
		setDisplayOnMaxLevel: function(a) {
			this.K.Qr = a
		},
		getDisplayOnMaxLevel: function() {
			return this.K.Qr
		}
	});
	var wc = 3,
		xc = 4;

	function yc() {
		var a = document.createElement("canvas");
		return !(!a.getContext || !a.getContext("2d"))
	}

	function zc(a, b) {
		var c = this;
		yc() && (a === l && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString
			.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, ib.apply(c, arguments), c.ia = {
				na: a
			}, c.K = {
				shape: b.shape || wc,
				size: b.size || xc,
				color: b.color || "#fa937e",
				Yi: p
			}, this.zA = [], this.ne = [], K.load("pointcollection", function() {
				for (var a = 0, b; b = c.zA[a]; a++) c[b.method].apply(c, b.arguments);
				for (a = 0; b = c.ne[a]; a++) c[b.method].apply(c, b.arguments)
			}))
	}
	z.lang.wa(zc, ib, "PointCollection");
	z.extend(zc.prototype, {
		initialize: function(a) {
			this.zA && this.zA.push({
				method: "initialize",
				arguments: arguments
			})
		},
		setPoints: function(a) {
			this.ne && this.ne.push({
				method: "setPoints",
				arguments: arguments
			})
		},
		setStyles: function(a) {
			this.ne && this.ne.push({
				method: "setStyles",
				arguments: arguments
			})
		},
		clear: function() {
			this.ne && this.ne.push({
				method: "clear",
				arguments: arguments
			})
		},
		remove: function() {
			this.ne && this.ne.push({
				method: "remove",
				arguments: arguments
			})
		}
	});
	var Ac = new qc(H.sa + "marker_red_sprite.png", new P(19, 25), {
			anchor: new P(10, 25),
			infoWindowAnchor: new P(10, 0)
		}),
		Bc = new qc(H.sa + "marker_red_sprite.png", new P(20, 11), {
			anchor: new P(6, 11),
			imageOffset: new P(-19, -13)
		});

	function V(a, b) {
		ib.call(this);
		b = b || {};
		this.point = a;
		this.Vp = this.map = s;
		this.K = {
			Da: b.offset || new P(0, 0),
			ue: b.icon || Ac,
			Fk: Bc,
			title: b.title || "",
			label: s,
			fJ: b.baseZIndex || 0,
			df: p,
			C5: t,
			JD: t,
			Yi: b.enableMassClear === t ? t : p,
			Xb: t,
			NM: b.raiseOnDrag === p ? p : t,
			VM: t,
			Gd: b.draggingCursor || H.Gd,
			rotation: b.rotation || 0
		};
		b.icon && !b.shadow && (this.K.Fk = s);
		b.enableDragging && (this.K.Xb = b.enableDragging);
		Hb(b.enableClicking) && (this.K.df = b.enableClicking);
		var c = this;
		K.load("marker", function() {
			c.jb()
		})
	}
	V.iu = mc.rk(-90) + 1E6;
	V.DF = V.iu + 1E6;
	z.lang.wa(V, ib, "Marker");
	z.extend(V.prototype, {
		Ub: function(a) {
			if (a instanceof qc || a instanceof rc) this.K.ue = a
		},
		Fo: function() {
			return this.K.ue
		},
		Wx: function(a) {
			a instanceof qc && (this.K.Fk = a)
		},
		getShadow: function() {
			return this.K.Fk
		},
		Gm: function(a) {
			this.K.label = a || s
		},
		YC: function() {
			return this.K.label
		},
		Xb: function() {
			this.K.Xb = p
		},
		XB: function() {
			this.K.Xb = t
		},
		ja: x("point"),
		ua: function(a) {
			a instanceof J && (this.point = new J(a.lng, a.lat))
		},
		oi: function(a, b) {
			this.K.JD = !!a;
			a && (this.YF = b || 0)
		},
		Dc: function(a) {
			this.K.title = a + ""
		},
		getTitle: function() {
			return this.K.title
		},
		Ld: function(a) {
			a instanceof P && (this.K.Da = a)
		},
		cj: function() {
			return this.K.Da
		},
		Fm: ca("Vp"),
		op: function(a) {
			this.K.rotation = a
		},
		IK: function() {
			return this.K.rotation
		}
	});

	function Cc(a) {
		this.options = a || {};
		this.HY = this.options.paneName || "labelPane";
		this.zIndex = this.options.zIndex || 0;
		this.RU = this.options.contextType || "2d"
	}
	Cc.prototype = new mc;
	Cc.prototype.initialize = function(a) {
		this.M = a;
		var b = this.canvas = document.createElement("canvas"),
			c = this.canvas.getContext(this.RU);
		b.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";";
		Dc(this);
		Ec(c);
		a.getPanes()[this.HY].appendChild(b);
		var e = this;
		a.addEventListener("resize", function() {
			Dc(e);
			Ec(c);
			e.jb()
		});
		return this.canvas
	};

	function Dc(a) {
		var b = a.M.Hb(),
			a = a.canvas;
		a.width = b.width;
		a.height = b.height;
		a.style.width = a.width + "px";
		a.style.height = a.height + "px"
	}

	function Ec(a) {
		var b = (window.devicePixelRatio || 1) / (a.eU || a.x5 || a.V3 || a.W3 || a.a4 || a.eU || 1),
			c = a.canvas.width,
			e = a.canvas.height;
		a.canvas.width = c * b;
		a.canvas.height = e * b;
		a.canvas.style.width = c + "px";
		a.canvas.style.height = e + "px";
		a.scale(b, b)
	}
	Cc.prototype.draw = function() {
		var a = this,
			b = arguments;
		clearTimeout(a.w_);
		a.w_ = setTimeout(function() {
			a.jb.apply(a, b)
		}, 15)
	};
	fa = Cc.prototype;
	fa.jb = function() {
		var a = this.M;
		this.canvas.style.left = -a.offsetX + "px";
		this.canvas.style.top = -a.offsetY + "px";
		this.dispatchEvent("draw");
		this.options.update && this.options.update.apply(this, arguments)
	};
	fa.Ta = x("canvas");
	fa.show = function() {
		this.canvas || this.M.Pa(this);
		this.canvas.style.display = "block"
	};
	fa.aa = function() {
		this.canvas.style.display = "none"
	};
	fa.sp = function(a) {
		this.canvas.style.zIndex = a
	};
	fa.rk = x("zIndex");

	function Fc(a, b) {
		oc.call(this, b);
		b = b || {};
		this.K.pg = b.fillOpacity ? b.fillOpacity : 0.65;
		this.K.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
		this.je(a);
		var c = this;
		K.load("poly", function() {
			c.jb()
		})
	}
	z.lang.wa(Fc, oc, "Polygon");
	z.extend(Fc.prototype, {
		je: function(a, b) {
			this.Tn = oc.Iw(a).slice(0);
			var c = oc.Iw(a).slice(0);
			1 < c.length && c.push(new J(c[0].lng, c[0].lat));
			oc.prototype.je.call(this, c, b)
		},
		Im: function(a, b) {
			this.Tn[a] && (this.Tn[a] = new J(b.lng, b.lat), this.na[a] = new J(b.lng, b.lat), 0 == a && !this.na[0].oc(this
				.na[this.na.length - 1]) && (this.na[this.na.length - 1] = new J(b.lng, b.lat)), this.uh())
		},
		Re: function() {
			var a = this.Tn;
			0 == a.length && (a = this.na);
			return a
		}
	});

	function Gc(a, b) {
		oc.call(this, b);
		this.hr(a);
		var c = this;
		K.load("poly", function() {
			c.jb()
		})
	}
	z.lang.wa(Gc, oc, "Polyline");

	function Hc(a, b, c) {
		this.point = a;
		this.Ca = Math.abs(b);
		Fc.call(this, [], c)
	}
	Hc.eE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
	z.lang.wa(Hc, Fc, "Circle");
	z.extend(Hc.prototype, {
		initialize: function(a) {
			this.map = a;
			this.na = this.Hu(this.point, this.Ca);
			this.uh();
			return s
		},
		Cb: x("point"),
		qf: function(a) {
			a && (this.point = a)
		},
		GK: x("Ca"),
		rf: function(a) {
			this.Ca = Math.abs(a)
		},
		Hu: function(a, b) {
			if (!a || !b || !this.map) return [];
			for (var c = [], e = b / 6378800, f = Math.PI / 180 * a.lat, g = Math.PI / 180 * a.lng, i = 0; 360 > i; i += 9) {
				var k = Math.PI / 180 * i,
					m = Math.asin(Math.sin(f) * Math.cos(e) + Math.cos(f) * Math.sin(e) * Math.cos(k)),
					k = new J(((g - Math.atan2(Math.sin(k) * Math.sin(e) * Math.cos(f), Math.cos(e) - Math.sin(f) * Math.sin(m)) +
						Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), m * (180 / Math.PI));
				c.push(k)
			}
			e = c[0];
			c.push(new J(e.lng, e.lat));
			return c
		}
	});
	var Ic = {};

	function Jc(a) {
		this.map = a;
		this.nj = [];
		this.Wf = [];
		this.Bg = [];
		this.tU = 300;
		this.lE = 0;
		this.vg = {};
		this.Ti = {};
		this.vk = 0;
		this.CD = p;
		this.gV = {};
		this.Dn = this.fq(1);
		this.kg = this.fq(2);
		this.pl = this.fq(3);
		this.dg = this.fq(4);
		a.platform.appendChild(this.Dn);
		a.platform.appendChild(this.kg);
		a.platform.appendChild(this.pl);
		a.platform.appendChild(this.dg);
		var b = 256 * Math.pow(2, 15),
			c = 3 * b,
			a = S.Gb(new J(180, 0)).lng,
			c = c - a,
			b = -3 * b,
			e = S.Gb(new J(-180, 0)).lng;
		this.gA = a;
		this.hA = e;
		this.dA = c + (e - b);
		this.vH = a - e
	}
	D.We(function(a) {
		var b = new Jc(a);
		b.xa();
		a.Xe = b
	});
	z.extend(Jc.prototype, {
		xa: function() {
			var a = this,
				b = a.map;
			b.addEventListener("loadcode", function() {
				a.Wo()
			});
			b.addEventListener("addtilelayer", function(b) {
				a.Me(b)
			});
			b.addEventListener("removetilelayer", function(b) {
				a.Vf(b)
			});
			b.addEventListener("setmaptype", function(b) {
				a.Ag(b)
			});
			b.addEventListener("zoomstartcode", function(b) {
				a.Kc(b)
			});
			b.addEventListener("setcustomstyles", function(b) {
				a.ot(b.target);
				a.Tf(p)
			});
			b.addEventListener("initindoorlayer", function(b) {
				a.yD(b)
			})
		},
		Wo: function() {
			var a = this;
			if (z.fa.ma) try {
				document.execCommand("BackgroundImageCache", t, p)
			} catch (b) {}
			this.loaded || a.ex();
			a.Tf();
			this.loaded || (this.loaded = p, K.load("tile", function() {
				a.cP()
			}))
		},
		yD: function(a) {
			this.St = new Kc(this);
			this.St.Me(new Lc(this.map, this.St, a.Te))
		},
		ex: function() {
			for (var a = this.map.va().af, b = 0; b < a.length; b++) {
				var c = new Mc;
				z.extend(c, a[b]);
				this.nj.push(c);
				c.xa(this.map, this.Dn)
			}
			this.ot()
		},
		fq: function(a) {
			var b = O("div");
			b.style.position = "absolute";
			b.style.overflow = "visible";
			b.style.left = b.style.top = "0";
			b.style.zIndex = a;
			return b
		},
		wf: function() {
			this.vk--;
			var a = this;
			this.CD && (this.map.dispatchEvent(new Q("onfirsttileloaded")), this.CD = t);
			0 == this.vk && (this.Ci && (clearTimeout(this.Ci), this.Ci = s), this.Ci = setTimeout(function() {
				if (a.vk == 0) {
					a.map.dispatchEvent(new Q("ontilesloaded"));
					a.CD = p
				}
				a.Ci = s
			}, 80))
		},
		jD: function(a, b) {
			return "TILE-" + b.ea + "-" + a[0] + "-" + a[1] + "-" + a[2]
		},
		$w: function(a) {
			var b = a.Jb;
			b && Ab(b) && b.parentNode.removeChild(b);
			delete this.vg[a.name];
			a.loaded || (Nc(a), a.Jb = s, a.rm = s)
		},
		QK: function(a, b, c) {
			var e = this.map,
				f = e.va(),
				g = e.Va,
				i = e.gc,
				k = f.fc(g),
				m = this.rW(),
				n = m[0],
				o = m[1],
				q = m[2],
				v = m[3],
				w = m[4],
				c = "undefined" != typeof c ? c : 0,
				f = f.Id(),
				m = e.ea.replace(/^TANGRAM_/, "");
			for (this.Be ? this.Be.length = 0 : this.Be = []; n < q; n++)
				for (var y = o; y < v; y++) {
					var A = n,
						B = y;
					this.Be.push([A, B]);
					A = m + "_" + b + "_" + A + "_" + B + "_" + g;
					this.gV[A] = A
				}
			this.Be.sort(function(a) {
				return function(b, c) {
					return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 *
						Math.abs(c[1] - a[1]))
				}
			}([w[0] - 1, w[1] - 1]));
			i = [Math.round(-i.lng / k), Math.round(i.lat / k)];
			n = -e.offsetY + e.height / 2;
			a.style.left = -e.offsetX + e.width / 2 + "px";
			a.style.top = n + "px";
			this.Ne ? this.Ne.length = 0 : this.Ne = [];
			n = 0;
			for (e = a.childNodes.length; n < e; n++) y = a.childNodes[n], y.Eq = t, this.Ne.push(y);
			if (n = this.um)
				for (var C in n) delete n[C];
			else this.um = {};
			this.Oe ? this.Oe.length = 0 : this.Oe = [];
			n = 0;
			for (e = this.Be.length; n < e; n++) {
				C = this.Be[n][0];
				k = this.Be[n][1];
				y = 0;
				for (o = this.Ne.length; y < o; y++)
					if (q = this.Ne[y], q.id == m + "_" + b + "_" + C + "_" + k + "_" + g) {
						q.Eq = p;
						this.um[q.id] = q;
						break
					}
			}
			n = 0;
			for (e = this.Ne.length; n < e; n++) q = this.Ne[n], q.Eq || this.Oe.push(q);
			this.WE = [];
			y = (f + c) * this.map.R.devicePixelRatio;
			n = 0;
			for (e = this.Be.length; n < e; n++) C = this.Be[n][0], k = this.Be[n][1], v = C * f + i[0] - c / 2, w = (-1 - k) *
				f + i[1] - c / 2, A = m + "_" + b + "_" + C + "_" + k + "_" + g, o = this.um[A], q = s, o ? (q = o.style, q.left =
					v + "px", q.top = w + "px", o.mn || this.WE.push([C, k, o])) : (0 < this.Oe.length ? (o = this.Oe.shift(), o.getContext(
						"2d").clearRect(-c / 2, -c / 2, y, y), q = o.style) : (o = document.createElement("canvas"), q = o.style, q.position =
						"absolute", q.width = f + c + "px", q.height = f + c + "px", this.bY() && (q.WebkitTransform = "scale(1.001)"),
						o.setAttribute("width", y), o.setAttribute("height", y), a.appendChild(o)), o.id = A, q.left = v + "px", q.top =
					w + "px", -1 < A.indexOf("bg") && (v = "#F3F1EC", this.map.R.cU && (v = this.map.R.cU), q.background = v ? v :
						""), this.WE.push([C, k, o])), o.style.visibility = "";
			n = 0;
			for (e = this.Oe.length; n < e; n++) this.Oe[n].style.visibility = "hidden";
			return this.WE
		},
		bY: function() {
			return /M040/i.test(navigator.userAgent)
		},
		rW: function() {
			var a = this.map,
				b = a.va(),
				c = b.VK(a.Va),
				e = a.gc,
				f = Math.ceil(e.lng / c),
				g = Math.ceil(e.lat / c),
				b = b.Id(),
				c = [f, g, (e.lng - f * c) / c * b, (e.lat - g * c) / c * b];
			return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil(
				(a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
		},
		b_: function(a, b, c, e) {
			var f = this;
			f.J1 = b;
			var g = this.map.va(),
				i = f.jD(a, c),
				k = g.Id(),
				b = [a[0] * k + b[0], (-1 - a[1]) * k + b[1]],
				m = this.vg[i];
			if (this.map.va() !== ab && this.map.va() !== Va) {
				var n = this.Xv(a[0], a[2]).offsetX;
				b[0] += n;
				b.c1 = n
			}
			m && m.Jb ? (yb(m.Jb, b), e && (e = new R(a[0], a[1]), g = this.map.R.we ? this.map.R.we.style : "normal", e = c
				.getTilesUrl(e, a[2], g), m.loaded = t, Pc(m, e)), m.loaded ? this.wf() : Qc(m, function() {
				f.wf()
			})) : (m = this.Ti[i]) && m.Jb ? (c.Lb.insertBefore(m.Jb, c.Lb.lastChild), this.vg[i] = m, yb(m.Jb, b), e && (e =
				new R(a[0], a[1]), g = this.map.R.we ? this.map.R.we.style : "normal", e = c.getTilesUrl(e, a[2], g), m.loaded =
				t, Pc(m, e)), m.loaded ? this.wf() : Qc(m, function() {
				f.wf()
			})) : (m = k * Math.pow(2, g.Yh() - a[2]), new J(a[0] * m, a[1] * m), e = new R(a[0], a[1]), g = this.map.R.we ?
				this.map.R.we.style : "normal", e = c.getTilesUrl(e, a[2], g), m = new Rc(this, e, b, a, c), Qc(m, function() {
					f.wf()
				}), m.Cn(), this.vg[i] = m)
		},
		wf: function() {
			this.vk--;
			var a = this;
			0 == this.vk && (this.Ci && (clearTimeout(this.Ci), this.Ci = s), this.Ci = setTimeout(function() {
				if (a.vk == 0) {
					a.map.dispatchEvent(new Q("ontilesloaded"));
					if (wa) {
						if (sa && ta && ua) {
							var b = eb(),
								c = a.map.Hb();
							setTimeout(function() {
								Ta(5030, {
									load_script_time: ta - sa,
									load_tiles_time: b - ua,
									map_width: c.width,
									map_height: c.height,
									map_size: c.width * c.height
								})
							}, 1E4);
							D.Tp("cus.fire", "time", {
								z_imgfirstloaded: b - ua
							})
						}
						wa = t
					}
				}
				a.Ci = s
			}, 80))
		},
		jD: function(a, b) {
			return this.map.va() === Sa ? "TILE-" + b.ea + "-" + this.map.cw + "-" + a[0] + "-" + a[1] + "-" + a[2] :
				"TILE-" + b.ea + "-" + a[0] + "-" + a[1] + "-" + a[2]
		},
		$w: function(a) {
			var b = a.Jb;
			b && (Sc(b), Ab(b) && b.parentNode.removeChild(b));
			delete this.vg[a.name];
			a.loaded || (Sc(b), Nc(a), a.Jb = s, a.rm = s)
		},
		Xv: function(a, b) {
			for (var c = 0, e = 6 * Math.pow(2, b - 3), f = e / 2 - 1, g = -e / 2; a > f;) a -= e, c -= this.dA;
			for (; a < g;) a += e, c += this.dA;
			c = Math.round(c / Math.pow(2, 18 - b));
			return {
				offsetX: c,
				Sl: a
			}
		},
		vU: function(a) {
			for (var b = a.lng; b > this.gA;) b -= this.vH;
			for (; b < this.hA;) b += this.vH;
			a.lng = b;
			return a
		},
		wU: function(a, b) {
			for (var c = 256 * Math.pow(2, 18 - b), e = Math.floor(this.gA / c), f = Math.floor(this.hA / c), c = Math.floor(
					this.dA / c), g = [], i = 0; i < a.length; i++) {
				var k = a[i],
					m = k[0],
					k = k[1];
				if (m >= e) {
					var m = m + c,
						n = "id_" + m + "_" + k + "_" + b;
					a[n] || (a[n] = p, g.push([m, k]))
				} else m <= f && (m -= c, n = "id_" + m + "_" + k + "_" + b, a[n] || (a[n] = p, g.push([m, k])))
			}
			for (i = 0; i < g.length; i++) a.push(g[i]);
			return a
		},
		Tf: function(a) {
			if (!this.map.R.og) {
				var b = this;
				if (b.map.va() == Sa) K.load("coordtrans", function() {
					b.map.Wb || (b.map.Wb = Sa.kk(b.map.Wg), b.map.cw = Sa.sK(b.map.Wb));
					b.xH()
				}, p);
				else {
					if (a && a)
						for (var c in this.Ti) delete this.Ti[c];
					b.xH(a)
				}
			}
		},
		xH: function(a) {
			var b = this.nj.concat(this.Wf),
				c = b.length,
				e = this.map,
				f = e.va(),
				g = e.gc,
				i = e.width,
				i = e.va().fc(e.Va) * i,
				i = this.RX(g.lng - i / 2, g.lng + i / 2);
			this.map.va() !== ab && this.map.va() !== Va && (g = this.vU(g));
			for (var k = 0; k < c; k++) {
				var m = b[k];
				if (m.hc && e.Va < m.hc) break;
				if (m.Wv) {
					var n = this.Lb = m.Lb;
					if (a) {
						var o = n;
						if (o && o.childNodes)
							for (var q = o.childNodes.length, v = q - 1; 0 <= v; v--) q = o.childNodes[v], o.removeChild(q), q = s
					}
					if (this.map.Od()) {
						this.kg.style.display = "block";
						n.style.display = "none";
						this.map.dispatchEvent(new Q("vectorchanged"), {
							isvector: p
						});
						continue
					} else n.style.display = "block", this.kg.style.display = "none", this.map.dispatchEvent(new Q("vectorchanged"), {
						isvector: t
					})
				}
				if (!m.b1 && !(m.jx && !this.map.Od() || m.vL && this.map.Od())) {
					e = this.map;
					f = e.va();
					n = f.pk();
					q = e.Va;
					g = e.gc;
					f == Sa && g.oc(new J(0, 0)) && (g = e.gc = n.ci(e.pe, e.Wb));
					var w = f.fc(q),
						n = f.VK(q),
						o = Math.ceil(g.lng / n),
						y = Math.ceil(g.lat / n),
						A = f.Id(),
						n = [o, y, (g.lng - o * n) / n * A, (g.lat - y * n) / n * A],
						y = i ? 1.5 * (e.width / 2) : e.width / 2,
						v = n[0] - Math.ceil((y - n[2]) / A),
						o = n[1] - Math.ceil((e.height / 2 - n[3]) / A),
						y = n[0] + Math.ceil((y + n[2]) / A),
						B = 0;
					f === Sa && 15 == e.ka() && (B = 1);
					f = n[1] + Math.ceil((e.height / 2 + n[3]) / A) + B;
					this.aJ = new J(g.lng, g.lat);
					var C = this.vg,
						A = -this.aJ.lng / w,
						B = this.aJ.lat / w,
						g = [Math.ceil(A), Math.ceil(B)],
						w = e.ka(),
						F;
					for (F in C) {
						var E = C[F],
							G = E.info;
						(G[2] != w || G[2] == w && (v > G[0] || y <= G[0] || o > G[1] || f <= G[1])) && this.$w(E)
					}
					C = -e.offsetX + e.width / 2;
					E = -e.offsetY + e.height / 2;
					m.Lb && (m.Lb.style.left = Math.ceil(A + C) - g[0] + "px", m.Lb.style.top = Math.ceil(B + E) - g[1] + "px", m.Lb
						.style.WebkitTransform = "translate3d(0,0,0)");
					A = [];
					for (e.cB = []; v < y; v++)
						for (B = o; B < f; B++) A.push([v, B]), e.cB.push({
							x: v,
							y: B
						});
					this.map.va() !== ab && this.map.va() !== Va && (A = this.wU(A, q));
					A.sort(function(a) {
						return function(b, c) {
							return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 *
								Math.abs(c[1] - a[1]))
						}
					}([n[0] - 1, n[1] - 1]));
					q = A.length;
					this.vk += q;
					for (v = 0; v < q; v++) this.b_([A[v][0], A[v][1], w], g, m, a)
				}
			}
		},
		RX: function(a, b) {
			return a < this.hA || b > this.gA
		},
		Me: function(a) {
			var b = this,
				c = a.target;
			b.map.Od();
			c.Qm && this.map.Me(c.Qm);
			if (c.jx) {
				for (a = 0; a < b.Bg.length; a++)
					if (b.Bg[a] == c) return;
				K.load("vector", function() {
					c.xa(b.map, b.kg);
					b.Bg.push(c)
				}, p)
			} else {
				for (a = 0; a < b.Wf.length; a++)
					if (b.Wf[a] == c) return;
				c.xa(this.map, this.pl);
				b.Wf.push(c)
			}
		},
		Vf: function(a) {
			a = a.target;
			this.map.Od();
			a.Qm && this.map.Vf(a.Qm);
			if (a.jx)
				for (var b = 0, c = this.Bg.length; b < c; b++) a == this.Bg[b] && this.Bg.splice(b, 1);
			else {
				b = 0;
				for (c = this.Wf.length; b < c; b++) a == this.Wf[b] && this.Wf.splice(b, 1)
			}
			a.remove()
		},
		Ag: function() {
			for (var a = this.nj, b = 0, c = a.length; b < c; b++) a[b].remove();
			delete this.Lb;
			this.nj = [];
			this.Ti = this.vg = {};
			this.ex();
			this.Tf()
		},
		Kc: function() {
			var a = this;
			a.vd && z.U.aa(a.vd);
			setTimeout(function() {
				a.Tf();
				a.map.dispatchEvent(new Q("onzoomend"))
			}, 10)
		},
		q5: u(),
		ot: function(a) {
			var b = this.map.va();
			if (!this.map.Od() && (a ? this.map.R.k_ = a : a = this.map.R.k_, a))
				for (var c = s, c = "2" == D.Rt ? [D.url.proto + D.url.domain.main_domain_cdn.other[0] + "/"] : [D.url.proto +
						D.url.domain.main_domain_cdn.baidu[0] + "/", D.url.proto + D.url.domain.main_domain_cdn.baidu[1] + "/", D.url
						.proto + D.url.domain.main_domain_cdn.baidu[2] + "/"
					], e = 0, f; f = this.nj[e]; e++)
					if (f.XZ == p) {
						b.m.pc = 18;
						f.getTilesUrl = function(b, e) {
							var f = b.x,
								f = this.map.Xe.Xv(f, e).Sl,
								m = b.y,
								n = Sb("normal"),
								o = 1;
							this.map.ax() && (o = 2);
							n = "customimage/tile?&x=" + f + "&y=" + m + "&z=" + e + "&udt=" + n + "&scale=" + o + "&ak=" + qa;
							n = a.styleStr ? n + ("&styles=" + encodeURIComponent(a.styleStr)) : n + ("&customid=" + a.style);
							return c[Math.abs(f + m) % c.length] + n
						};
						break
					}
		}
	});

	function Rc(a, b, c, e, f) {
		this.rm = a;
		this.position = c;
		this.tu = [];
		this.name = a.jD(e, f);
		this.info = e;
		this.BI = f.Os();
		e = O("img");
		zb(e);
		e.lK = t;
		var g = e.style,
			a = a.map.va();
		g.position = "absolute";
		g.border = "none";
		g.width = a.Id() + "px";
		g.height = a.Id() + "px";
		g.left = c[0] + "px";
		g.top = c[1] + "px";
		g.maxWidth = "none";
		this.Jb = e;
		this.src = b;
		Tc && (this.Jb.style.opacity = 0);
		var i = this;
		this.Jb.onload = function() {
			D.jY.QP();
			i.loaded = p;
			if (i.rm) {
				var a = i.rm,
					b = a.Ti;
				if (!b[i.name]) {
					a.lE++;
					b[i.name] = i
				}
				if (i.Jb && !Ab(i.Jb) && f.Lb) {
					f.Lb.appendChild(i.Jb);
					if (z.fa.ma <= 6 && z.fa.ma > 0 && i.BI) i.Jb.style.cssText = i.Jb.style.cssText + (
						';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + i.src + '",sizingMethod=scale);')
				}
				var c = a.lE - a.tU,
					e;
				for (e in b) {
					if (c <= 0) break;
					if (!a.vg[e]) {
						b[e].rm = s;
						var g = b[e].Jb;
						if (g && g.parentNode) {
							g.parentNode.removeChild(g);
							Sc(g)
						}
						g = s;
						b[e].Jb = s;
						delete b[e];
						a.lE--;
						c--
					}
				}
				Tc && new ub({
					Hc: 20,
					duration: 200,
					za: function(a) {
						if (i.Jb && i.Jb.style) i.Jb.style.opacity = a * 1
					},
					finish: function() {
						i.Jb && i.Jb.style && delete i.Jb.style.opacity
					}
				});
				Nc(i)
			}
		};
		this.Jb.onerror = function() {
			Nc(i);
			if (i.rm) {
				var a = i.rm.map.va();
				if (a.m.zC) {
					i.error = p;
					i.Jb.src = a.m.zC;
					i.Jb && !Ab(i.Jb) && f.Lb.appendChild(i.Jb)
				}
			}
		};
		e = s
	}

	function Qc(a, b) {
		a.tu.push(b)
	}
	Rc.prototype.Cn = function() {
		this.Jb.src = 0 < z.fa.ma && 6 >= z.fa.ma && this.BI ? H.sa + "blank.gif" : "" !== this.src && this.Jb.src == this.src ?
			this.src + "&t = " + Date.now() : this.src
	};

	function Nc(a) {
		for (var b = 0; b < a.tu.length; b++) a.tu[b]();
		a.tu.length = 0
	}

	function Sc(a) {
		if (a) {
			a.onload = a.onerror = s;
			var b = a.attributes,
				c, e, f;
			if (b) {
				e = b.length;
				for (c = 0; c < e; c += 1) f = b[c].name, $a(a[f]) && (a[f] = s)
			}
			if (b = a.children) {
				e = b.length;
				for (c = 0; c < e; c += 1) Sc(a.children[c])
			}
		}
	}

	function Pc(a, b) {
		a.src = b;
		a.Cn()
	}
	var Tc = !z.fa.ma || 8 < z.fa.ma;

	function Mc(a) {
		this.Te = a || {};
		this.TU = this.Te.copyright || s;
		this.L_ = this.Te.transparentPng || t;
		this.Wv = this.Te.baseLayer || t;
		this.zIndex = this.Te.zIndex || 0;
		this.ea = Mc.zR++
	}
	Mc.zR = 0;
	z.lang.wa(Mc, z.lang.Ga, "TileLayer");
	z.extend(Mc.prototype, {
		xa: function(a, b) {
			this.Wv && (this.zIndex = -100);
			this.map = a;
			if (!this.Lb) {
				var c = O("div"),
					e = c.style;
				e.position = "absolute";
				e.overflow = "visible";
				e.zIndex = this.zIndex;
				e.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
				e.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
				b.appendChild(c);
				this.Lb = c
			}
		},
		remove: function() {
			this.Lb && this.Lb.parentNode && (this.Lb.innerHTML = "", this.Lb.parentNode.removeChild(this.Lb));
			delete this.Lb
		},
		Os: x("L_"),
		getTilesUrl: function(a, b) {
			if (this.map.va() !== ab && this.map.va() !== Va) var c = this.map.Xe.Xv(a.x, b).Sl;
			var e = "";
			this.Te.tileUrlTemplate && (e = this.Te.tileUrlTemplate.replace(/\{X\}/, c), e = e.replace(/\{Y\}/, a.y), e = e.replace(
				/\{Z\}/, b));
			return e
		},
		am: x("TU"),
		va: function() {
			return this.xb || Pa
		}
	});

	function Uc(a) {
		Mc.call(this, a);
		this.m = a || {};
		this.vL = p;
		if (this.m.predictDate) {
			if (1 > this.m.predictDate.weekday || 7 < this.m.predictDate.weekday) this.m.predictDate = 1;
			if (0 > this.m.predictDate.hour || 23 < this.m.predictDate.hour) this.m.predictDate.hour = 0
		}
		this.AT = D.url.proto + D.url.domain.traffic + "/traffic/"
	}
	Uc.prototype = new Mc;
	Uc.prototype.xa = function(a, b) {
		Mc.prototype.xa.call(this, a, b);
		this.M = a
	};
	Uc.prototype.Os = ea(p);
	Uc.prototype.getTilesUrl = function(a, b) {
		var c = "";
		this.m.predictDate ? c = "HistoryService?day=" + (this.m.predictDate.weekday - 1) + "&hour=" + this.m.predictDate.hour +
			"&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c +=
				"label=web2D&v=016&");
		var c = this.AT + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
			e = 1;
		this.M.ax() && (e = 2);
		return (c + "&scaler=" + e).replace(/-(\d+)/gi, "M$1")
	};
	var Vc = [D.url.proto + D.url.domain.TILES_YUN_HOST[0] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[
				1] + "/georender/gss", D.url.proto + D.url.domain.TILES_YUN_HOST[2] + "/georender/gss", D.url.proto + D.url.domain
			.TILES_YUN_HOST[3] + "/georender/gss"
		],
		Wc = D.url.proto + D.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
		Xc = 100;

	function pb(a, b) {
		Mc.call(this);
		var c = this;
		this.vL = p;
		try {
			document.createElement("canvas").getContext("2d")
		} catch (e) {}
		Ib(a) ? b = a || {} : (c.ln = a, b = b || {});
		b.geotableId && (c.yf = b.geotableId);
		b.databoxId && (c.ln = b.databoxId);
		var f = D.nd + "geosearch";
		c.$a = {
			FM: b.pointDensity || Xc,
			wX: f + "/detail/",
			xX: f + "/v2/detail/",
			YI: b.age || 36E5,
			ht: b.q || "",
			v_: "png",
			q3: [5, 5, 5, 5],
			fY: {
				backgroundColor: "#FFFFD5",
				borderColor: "#808080"
			},
			oB: b.ak || qa,
			SE: b.tags || "",
			filter: b.filter || "",
			uN: b.sortby || "",
			qD: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
			gF: p
		};
		K.load("clayer", function() {
			c.Rd()
		})
	}
	pb.prototype = new Mc;
	pb.prototype.xa = function(a, b) {
		Mc.prototype.xa.call(this, a, b);
		this.M = a
	};
	pb.prototype.getTilesUrl = function(a, b) {
		var c = a.x,
			e = a.y,
			f = this.$a,
			c = Vc[Math.abs(c + e) % Vc.length] + "/image?grids=" + c + "_" + e + "_" + b + "&q=" + f.ht + "&tags=" + f.SE +
			"&filter=" + f.filter + "&sortby=" + f.uN + "&ak=" + this.$a.oB + "&age=" + f.YI + "&page_size=" + f.FM +
			"&format=" + f.v_;
		f.gF || (f = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + f);
		this.yf ? c += "&geotable_id=" + this.yf : this.ln && (c += "&databox_id=" + this.ln);
		return c
	};
	pb.prototype.enableUseCache = function() {
		this.$a.gF = p
	};
	pb.prototype.disableUseCache = function() {
		this.$a.gF = t
	};
	pb.ZS = /^point\(|\)$/ig;
	pb.$S = /\s+/;
	pb.bT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	var Yc = {};

	function Zc(a, b) {
		this.jd = a;
		this.fP = 18;
		this.m = {
			hy: 256,
			Pc: new S
		};
		z.extend(this.m, b || {})
	}
	var $c = [0, 0, 0, 8, 7, 7, 6, 6, 5, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0, 0, 0],
		ad = [512, 2048, 4096, 32768, 65536, 262144, 1048576, 4194304, 8388608],
		bd = [0, 0, 0, 3, 5, 5, 7, 7, 9, 9, 10, 12, 12, 12, 15, 15, 17, 17, 19, 19, 19, 19],
		cd = [0, 0, 0, 256, 256, 512, 256, 512, 256, 512, 256, 256, 512, 1024, 256, 512, 512, 1024, 512, 1024, 2048, 4096];
	Zc.prototype = {
		getName: x("jd"),
		Id: function(a) {
			return "na" === this.jd ? cd[a] : this.m.hy
		},
		ks: function(a) {
			return "na" === this.jd ? bd[a] : a
		},
		pk: function() {
			return this.m.Pc
		},
		fc: function(a) {
			return Math.pow(2, this.fP - a)
		},
		aD: function(a) {
			return "na" === this.jd ? ad[$c[a]] : this.fc(a) * this.Id(a)
		}
	};
	var dd = {
		drawPoly: function(a, b, c, e, f, g) {
			var i = a[1];
			if (i)
				for (var a = a[6], k = 0; k < i.length; k++) {
					var m = i[k][0],
						n = f.hj(m, "polygon", c, g);
					if (n && n.length)
						for (var o = i[k][1], q = 0; q < o.length; q++) {
							var v = o[q][1];
							f.Nc(v[0], c) && (v["cache" + c] || (v["cache" + c] = f.xm(v[1], c, e, a)), v = v["cache" + c], f.M.Yn(b.canvas
								.id, v, {
									type: "polygon",
									Vb: m,
									style: n
								}), this.JV(b, v, n, c))
						}
				}
		},
		JV: function(a, b, c, e) {
			c = c[0];
			if (!c.Vb || !(6 < e && (71013 === c.Vb || 71012 === c.Vb || 71011 === c.Vb) || 6 === e && (71011 === c.Vb ||
					71012 === c.Vb) || 5 === e && (71011 === c.Vb || 71013 === c.Vb) || 5 > e && (71012 === c.Vb || 71013 === c.Vb))) {
				a.fillStyle = c.Cw;
				a.beginPath();
				a.moveTo(b[0], b[1]);
				for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
				a.closePath();
				c.borderWidth && (a.strokeStyle = c.io, a.lineWidth = c.borderWidth / 2, a.stroke());
				a.fill()
			}
		},
		drawGaoqingRoadBorder: function(a, b, c, e, f) {
			var g = a[1];
			if (g)
				for (var a = a[6], i = 0; i < g.length; i++) {
					var k = g[i][0],
						m = f.hj(k, "polygon", c);
					if (m && m.length && m[0].borderWidth)
						for (var n = g[i][1], o = 0; o < n.length; o++) {
							var q = n[o][1];
							f.Nc(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.xm(q[1], c, e, a)), q = q["cache" + c], f.M.Yn(b.canvas
								.id, q, {
									type: "polygon",
									Vb: k,
									style: m
								}), this.LV(b, q, m))
						}
				}
		},
		drawGaoqingRoadFill: function(a, b, c, e, f) {
			var g = a[1];
			if (g)
				for (var a = a[6], i = 0; i < g.length; i++) {
					var k = g[i][0],
						m = f.hj(k, "polygon", c);
					if (m && m.length)
						for (var n = g[i][1], o = 0; o < n.length; o++) {
							var q = n[o][1];
							f.Nc(q[0], c) && (q["cache" + c] || (q["cache" + c] = f.xm(q[1], c, e, a)), q = q["cache" + c], f.M.Yn(b.canvas
								.id, q, {
									type: "polygon",
									Vb: k,
									style: m
								}), this.MV(b, q, m))
						}
				}
		},
		LV: function(a, b, c) {
			c = c[0];
			a.beginPath();
			a.moveTo(b[0], b[1]);
			for (var e = 2, f = b.length; e < f; e += 2) a.lineTo(b[e], b[e + 1]);
			a.closePath();
			a.strokeStyle = c.io;
			a.lineWidth = c.borderWidth / 2;
			a.stroke()
		},
		MV: function(a, b, c) {
			a.fillStyle = c[0].Cw;
			a.beginPath();
			a.moveTo(b[0], b[1]);
			for (var c = 2, e = b.length; c < e; c += 2) a.lineTo(b[c], b[c + 1]);
			a.closePath();
			a.fill()
		}
	};
	var ed = {
		drawArrow: function(a, b, c, e, f, g) {
			b.lineWidth = 1.5;
			b.lineCap = "butt";
			b.lineJoin = "miter";
			b.strokeStyle = "rgba(153,153,153,1)";
			var i = a[7];
			if (i) {
				a = i[1];
				e = g.xm(i[0], c, e);
				for (i = 0; i < a.length; i++)
					if (g.Nc(a[i], c)) {
						var k = e[4 * i],
							m = e[4 * i + 1],
							n = e[4 * i + 2],
							o = e[4 * i + 3],
							q = (k + n) / 2,
							v = (m + o) / 2,
							n = (k - n) / f,
							o = (m - o) / f,
							k = q + n / 2,
							n = q - n / 2,
							m = v + o / 2,
							o = v - o / 2;
						this.CV(b, k, m, n, o)
					}
			}
		},
		CV: function(a, b, c, e, f) {
			a.beginPath();
			a.moveTo(b, c);
			a.lineTo(e, f);
			a.stroke();
			c = this.uU([b, c], [e, f]);
			b = c[0];
			c = c[1];
			a.beginPath();
			a.moveTo(b[0], b[1]);
			a.lineTo(c[0], c[1]);
			a.lineTo(e, f);
			a.closePath();
			a.stroke()
		},
		uU: function(a, b) {
			var c = b[0] - a[0],
				e = b[1] - a[1],
				f = 1.8 * Math.sqrt(c * c + e * e),
				g = b[0] + 4.8410665352790705 * (c / f),
				f = b[1] + 4.8410665352790705 * (e / f),
				c = Math.atan2(e, c) + Math.PI;
			return [
				[g + 4.8410665352790705 * Math.cos(c - 0.3), f + 4.8410665352790705 * Math.sin(c - 0.3)],
				[g + 4.8410665352790705 * Math.cos(c + 0.3), f + 4.8410665352790705 * Math.sin(c + 0.3)]
			]
		}
	};
	var fd = {
		drawHregion: function(a, b, c, e, f) {
			var g = a[1];
			if (g)
				for (var a = a[6], i = 0; i < g.length; i++) {
					var k = g[i][0],
						m = f.hj(k, "polygon3d", c);
					if (m && m.length)
						for (var n = g[i][1], o = 0; o < n.length; o++) {
							var q = n[o][2];
							if (f.Nc(q[0], c)) {
								var v = q[2];
								q["cache" + c] || (q["cache" + c] = f.xm(q[1], c, e, a));
								q = q["cache" + c];
								f.M.Yn(b.canvas.id, q, {
									type: "polygon",
									Vb: k,
									style: m
								});
								this.KV(b, q, v, m)
							}
						}
				}
		},
		KV: function(a, b, c, e) {
			e = e[0];
			if (!(c < e.filter)) {
				a.fillStyle = e.bW;
				a.beginPath();
				a.moveTo(b[0], b[1]);
				for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
				a.closePath();
				e.borderWidth && (a.strokeStyle = e.io, a.lineWidth = e.borderWidth / 2, a.stroke());
				a.fill()
			}
		}
	};
	var gd = {
		parse: function(a, b, c, e, f) {
			for (var g = e.M, i = g.ka(), k = Math.pow(2, 18 - i), m = g.Pc.ci(g.Cb()), n = m.lng, o = m.lat, m = g.Hb(), q =
					m.width, v = m.height, m = [], w = 0; w < a.length; w++) {
				var y = [],
					A = a[w].t_;
				y.x = A[0];
				y.y = A[1];
				y.B5 = A[2];
				for (var B = (A[0] * c * k - n) / k + q / 2, C = (o - (A[1] + 1) * c * k) / k + v / 2, F = 0; F < a[w].length; F++)
					a[w][F].BL ? this.BM(a[w][F].BL, A, e, b, c, B, C, i, k, q, v, y) : a[w][F].DX ? this.BM(a[w][F].DX, A, e, b, c,
						B, C, i, k, q, v, y, p, window.u3) : this.NY(a[w][F].gY, A, e, b, c, B, C, i, k, q, v, y, f);
				m.push(y)
			}
			if (/collision=0/.test(location.search)) {
				a = [];
				for (w = 0; w < m.length; w++)
					for (F = 0; F < m[w].length; F++) a.push(m[w][F])
			} else a = this.$Y(m, e.M.ka());
			g.IU();
			for (w = 0; w < a.length; w++)
				if (c = a[w], !c.Js)
					if (F = [c.Rf, c.Sf, c.Rf, c.gi, c.fi, c.gi, c.fi, c.Sf, c.Rf, c.Sf], c.style && g.Yn("poi", F, {
							type: "polygon",
							Vb: c.style.Vb,
							style: c.style
						}), "fixed" === c.type) {
						F = t;
						c.ue && (c.style && 4 === c.direction) && (F = p);
						if (c.ue)
							if (F) {
								var E = this;
								this.Yr(b, c, e, F, function(a) {
									for (var c = 0; c < a.sf.length; c++) E.UJ(b, a.sf[c].ae, a.sf[c].be, a.sf[c].text, a.style, e)
								})
							} else this.Yr(b, c, e);
						if (c.style && !F)
							for (F = 0; F < c.sf.length; F++) this.UJ(b, c.sf[F].ae, c.sf[F].be, c.sf[F].text, c.style, e)
					} else if ("line" === c.type)
				for (F = 0; F < c.jO.length; F++) f = c.jO[F], gd.FV(b, f.ae, f.be, f.YT, f.hO, f.width, f.height, c.style, e);
			return m
		},
		BM: function(a, b, c, e, f, g, i, k, m, n, o, q, v, w) {
			if (a = a[1])
				for (b = 0; b < a.length; b++) {
					var y = a[b],
						A = y[0],
						B = c.hj(A, "point", k, w),
						A = c.hj(A, "pointText", k, w),
						y = y[1],
						C = s,
						F = 100,
						E = 0,
						G = 0;
					B && B[0] && (B = B[0], C = B.ue, F = B.zoom || 100);
					A = A && A[0] ? A[0] : s;
					for (B = 0; B < y.length; B++) {
						var N = y[B][4];
						if (N && c.Nc(N[2], k)) {
							var L = Math.round(N[0] / 100) / m + g,
								M = f - Math.round(N[1] / 100) / m + i;
							if (v || !(-50 > L || -50 > M || L > n + 50 || M > o + 50)) {
								var T = N[7] || "",
									da = {
										type: "fixed",
										uid: N[3] || "",
										name: T,
										Lx: N[4],
										Es: s,
										sf: [],
										zx: [L, M],
										style: A
									};
								if (C) {
									var ba = window.iconSetInfo_high[C] || window.iconSetInfo_high["MapRes/" + C];
									if (!ba) {
										var va = C.charCodeAt(0);
										48 <= va && 57 >= va && (ba = window.iconSetInfo_high["_" + C])
									}
									ba && (E = ba[2], G = ba[3], E = E / 2 * F / 100, G = G / 2 * F / 100, da.Es = {
										ae: L - E / 2,
										be: M - G / 2,
										width: E,
										height: G
									}, da.ue = C)
								}
								if (A) {
									N = N[5];
									"number" !== typeof N && (N = 0);
									var ya = ba = 0,
										va = (A.fontSize || 12) / 2,
										Ea = 0.2 * va;
									e.font = gd.Hw(A, c);
									var T = T.split("\\"),
										ra = T.length;
									da.direction = N;
									for (var Ua = 0; Ua < ra; Ua++) {
										var re = T[Ua],
											Oc = e.measureText(re).width;
										switch (N) {
											case 3:
												ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
												ba = L - Oc - E / 2;
												ya = ya + va * Ua + Ea * Ua;
												break;
											case 1:
												ya = M - va / 2 * ra - Ea * (ra - 1) / 2;
												ba = L + E / 2;
												ya = ya + va * Ua + Ea * Ua;
												break;
											case 2:
												ya = M - G / 2 - va * ra - Ea * (ra - 1) - Ea;
												ba = L - Oc / 2;
												ya = ya + va * Ua + Ea * Ua;
												break;
											case 0:
												ya = M + G / 2 + Ea / 2;
												ba = L - Oc / 2;
												ya = ya + va * Ua + Ea * Ua;
												break;
											case 4:
												ya = M - va / 2 * ra - Ea * (ra - 1) / 2, ba = L - Oc / 2, ya = ya + va * Ua + Ea * Ua
										}
										da.sf.push({
											ae: ba,
											be: ya,
											width: Oc,
											height: va,
											text: re
										})
									}
								}
								q.push(da)
							}
						}
					}
				}
		},
		NY: function(a, b, c, e, f, g, i, k, m, n, o, q, v) {
			b = a[7].length;
			if ((n = c.hj(a[0], "pointText", k)) && n.length) {
				n = n[0];
				e.font = gd.Hw(n, c);
				for (var o = n.fontSize / 2, w = a[1], y = a[2], A = y.split("").length, B = a[4], C = B.slice(0, 2), F = 2; F <
					B.length; F += 2) C[F] = C[F - 2] + B[F], C[F + 1] = C[F - 1] + B[F + 1];
				for (F = 2; F < B.length; F += 2) 0 === F % (2 * A) || 1 === F % (2 * A) || (C[F] = C[F - 2] + B[F] / v, C[F + 1] =
					C[F - 1] + B[F + 1] / v);
				for (v = 0; v < b; v++)
					if (c.Nc(a[7][v], k)) {
						var F = [],
							E = l,
							G = l,
							N = l,
							L = l,
							M = y.split("");
						a[6][v] && M.reverse();
						for (var B = 2 * v * A, B = C.slice(B, B + 2 * A), T = 0; T < A; T++) {
							var da = a[5][A * v + T],
								ba = B[2 * T] / 100 / m + g,
								va = f - B[2 * T + 1] / 100 / m + i,
								ya = M[T],
								Ea = e.measureText(ya).width;
							if (E === l) E = ba - Ea / 2, G = va - o / 2, N = E + Ea, L = G + o;
							else {
								var ra = ba - Ea / 2,
									Ua = va - o / 2;
								ra < E && (E = ra);
								Ua < G && (G = Ua);
								ra + Ea > N && (N = ra + Ea);
								Ua + o > L && (L = Ua + o)
							}
							F.push({
								hO: ya,
								ae: ba,
								be: va,
								YT: da,
								width: Ea,
								height: o
							})
						}
						q.push({
							type: "line",
							Lx: w,
							style: n,
							jO: F,
							Rf: E,
							Sf: G,
							fi: N,
							gi: L
						})
					}
			}
		},
		Yr: function(a, b, c, e, f) {
			var g = b.ue;
			if ("lanche" !== g)
				if (gd.bx[g]) this.RJ(a, b, gd.bx[g], e, f);
				else {
					var c = c.zK(g),
						i = new Image;
					i.setAttribute("crossOrigin", "anonymous");
					var k = this;
					i.onload = function() {
						gd.bx[g] = this;
						k.RJ(a, b, this, e, f);
						i.onload = s
					};
					i.src = c
				}
		},
		RJ: function(a, b, c, e, f) {
			var g = b.Es,
				i = g.ae,
				k = g.be,
				m = s,
				n = s,
				o = p,
				q = b.style ? b.style.Vb : s;
			if (b.style && 62203 === q) {
				for (var v = n = m = 0; v < b.sf.length; v++) m < b.sf[v].width && (m = b.sf[v].width), n += 20;
				m = Math.ceil(m) + 10
			}
			e && 519 === q && (o = t);
			m !== s && n !== s ? this.IV(a, b, c, 8, m, n) : e && o ? (m = Math.ceil(b.sf[0].width) + 6, this.BV(a, b, c, 12,
				m, c.height / 2)) : a.drawImage(c, i, k, g.width, g.height);
			f && f(b)
		},
		IV: function(a, b, c, e, f, g) {
			var i = b.zx[0] - f / 2,
				b = b.zx[1] - g / 2;
			0 < navigator.userAgent.indexOf("iPhone") && (b += 1);
			var k = e / 2;
			a.drawImage(c, 0, 0, e, e, i, b, k, k);
			a.drawImage(c, e, 0, 1, e, i + k, b, f - 2 * k, k);
			a.drawImage(c, c.width - e, 0, e, e, i + f - k, b, k, k);
			a.drawImage(c, 0, e, e, 1, i, b + k, k, g - 2 * k);
			a.drawImage(c, e, e, 1, 1, i + k, b + k, f - 2 * k, g - 2 * k);
			a.drawImage(c, c.width - e, e, e, 1, i + f - k, b + k, k, g - 2 * k);
			a.drawImage(c, 0, c.height - e, e, e, i, b + g - k, k, k);
			a.drawImage(c, e, c.height - e, 1, e, i + k, b + g - k, f - 2 * k, k);
			a.drawImage(c, c.width - e, c.height - e, e, e, i + f - k, b + g - k, k, k)
		},
		BV: function(a, b, c, e, f, g) {
			var i = b.zx[0] - f / 2,
				b = b.zx[1] - g / 2,
				g = e / 2;
			a.drawImage(c, 0, 0, e, c.height, i, b, g, c.height / 2);
			a.drawImage(c, e, 0, 1, c.height, i + g, b, f - 2 * g, c.height / 2);
			a.drawImage(c, c.width - e, 0, e, c.height, i + f - g, b, g, c.height / 2)
		},
		FV: function(a, b, c, e, f, g, i, k, m) {
			a.font = gd.Hw(k, m);
			a.fillStyle = k.jK;
			g /= 2;
			i /= 2;
			a.save();
			a.translate(b, c);
			a.rotate(-e / 180 * Math.PI);
			0 < k.Uw && (a.lineWidth = k.Uw, a.strokeStyle = k.$K, a.strokeText(f, -g, -i));
			a.fillText(f, -g, -i);
			a.restore()
		},
		UJ: function(a, b, c, e, f, g) {
			a.font = gd.Hw(f, g);
			a.fillStyle = f.jK;
			0 < f.Uw && (a.lineWidth = f.Uw, a.strokeStyle = f.$K, a.strokeText(e, b, c));
			a.fillText(e, b, c)
		},
		Hw: function(a, b) {
			var c = a.fontSize / 2,
				e = 10 * a.fontWeight;
			return e = b.DD ? e + " bold" + (" " + c + "px") + ' arial, "PingFang SC", sans-serif' : e + (" " + c + "px") +
				" arial, sans-serif"
		},
		$Y: function(a, b) {
			var c = [],
				e = 0;
			5 === b && (e = 1);
			a.sort(function(a, b) {
				return a.x * a.y < b.x * b.y ? -1 : 1
			});
			for (var f = 0, g = a.length; f < g; f++)
				for (var i = a[f], k = 0, m = i.length; k < m; k++) {
					var n = i[k],
						o = l,
						q = l,
						v = l,
						w = l;
					if ("fixed" === n.type) {
						var y = n.Es,
							A = n.sf;
						y && (o = y.ae, q = y.be, v = y.ae + y.width, w = y.be + y.height);
						for (y = 0; y < A.length; y++) {
							var B = A[y];
							o !== l ? (B.ae < o && (o = B.ae), B.be < q && (q = B.be), B.ae + B.width > v && (v = B.ae + B.width), B.be +
								B.height > w && (w = B.be + B.height)) : (o = B.ae, q = B.be, v = B.ae + B.width, w = B.be + B.height)
						}
					} else "line" === n.type ? (o = n.Rf, q = n.Sf, v = n.fi, w = n.gi) : "biaopai" === n.type && (w = n.q4, o = w.ae,
						q = w.be, v = w.ae + w.width, w = w.be + w.height);
					o !== l && (n.Rf = o, n.Sf = q, n.fi = v, n.gi = w, c.push(n))
				}
			c.sort(function(a, b) {
				return b.Lx - a.Lx || b.Rf - a.Rf || b.Sf - a.Sf
			});
			f = 0;
			for (g = c.length; f < g; f++) {
				m = c[f];
				m.Js = t;
				m.dJ = [];
				for (k = f + 1; k < g; k++) i = c[k], m.fi - e < i.Rf || (m.Rf > i.fi - e || m.gi - e < i.Sf || m.Sf > i.gi - e) ||
					m.dJ.push(k)
			}
			f = 0;
			for (g = c.length; f < g; f++)
				if (k = c[f], k.Js === t) {
					e = k.dJ;
					k = 0;
					for (m = e.length; k < m; k++) c[e[k]].Js = p
				} return c
		},
		bx: {}
	};
	var hd = ["round", "butt", "square"],
		id = ["miter", "round", "bevel"],
		jd = {
			daojiao: [{
				stroke: "#FF6600",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [4, 3]
			}],
			daojiao_bai: [{
				stroke: "#f5f3f0",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [4, 3]
			}],
			junhuoxian: [{
				stroke: "#DB7093",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [4, 3]
			}],
			lundu: [{
				stroke: "#5c91c5",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [10, 11]
			}],
			shengjie: [{
				stroke: "#737373",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [6, 3]
			}],
			weidingguojie: [{
				stroke: "#aea08a",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [4, 3]
			}],
			weidingguojie_guowai: [{
				stroke: "#a29e96",
				Bb: 2,
				zb: "round",
				Ab: "round",
				sd: [4, 3]
			}],
			weidingguojie_guonei: [{
				stroke: "#b5a37c",
				Bb: 2,
				zb: "round",
				Ab: "round",
				sd: [4, 3]
			}]
		},
		kd = {};

	function ld(a, b) {
		if ("tielu" === a || "tielu_0" === a) {
			if ("off" === window.La[b].bmapRailwayVisibility) return [];
			var c = "#ffffff",
				e = "#949494";
			window.La[b].bmapRailwayStrokeColor && (c = window.La[b].bmapRailwayStrokeColor);
			window.La[b].bmapRailwayFillColor && (e = window.La[b].bmapRailwayFillColor);
			if (4 <= b && 9 >= b || 10 <= b && 16 >= b) return [{
				stroke: c,
				Bb: 1.5,
				zb: "butt",
				Ab: "round",
				sd: [10, 11]
			}, {
				stroke: e,
				Bb: 2,
				zb: "round",
				Ab: "round"
			}];
			if (17 <= b && 18 >= b) return [{
				stroke: c,
				Bb: 2.5,
				zb: "butt",
				Ab: "round",
				sd: [15, 16]
			}, {
				stroke: e,
				Bb: 5,
				zb: "round",
				Ab: "round"
			}];
			if (19 <= b && 20 >= b) return [{
				stroke: c,
				Bb: 4.5,
				zb: "butt",
				Ab: "round",
				sd: [25, 26]
			}, {
				stroke: e,
				Bb: 5,
				zb: "round",
				Ab: "round"
			}]
		} else if (0 === a.indexOf("ditie_zj")) {
			if (12 <= b && 16 >= b) return [{
				stroke: "#868686",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [7, 4]
			}];
			if (17 <= b && 18 >= b || 19 <= b && 20 >= b) return [{
				stroke: "#6e6e6e",
				Bb: 1,
				zb: "round",
				Ab: "round",
				sd: [7, 4]
			}]
		} else if (/^tongdaomian/.test(a)) {
			if (17 === b) return [{
				stroke: "#e5e5e5",
				Bb: 4,
				zb: "square",
				Ab: "round"
			}, {
				stroke: "#a8a8a8",
				Bb: 6,
				zb: "square",
				Ab: "round"
			}];
			if (18 === b) return [{
				stroke: "#e5e5e5",
				Bb: 6,
				zb: "square",
				Ab: "round"
			}, {
				stroke: "#a8a8a8",
				Bb: 8,
				zb: "square",
				Ab: "round"
			}];
			if (19 <= b && 21 >= b) return [{
				stroke: "#e5e5e5",
				Bb: 8,
				zb: "square",
				Ab: "round"
			}, {
				stroke: "#a8a8a8",
				Bb: 10,
				zb: "square",
				Ab: "round"
			}]
		} else if (/^jietizhongduan|^dixiatongdaojieti/.test(a)) {
			if (17 === b) return [{
				stroke: "#e5e5e5",
				Bb: 4,
				zb: "butt",
				Ab: "round",
				sd: [2, 1]
			}, {
				stroke: "#bebebe",
				Bb: 6,
				zb: "butt",
				Ab: "round"
			}];
			if (18 === b) return [{
				stroke: "#e5e5e5",
				Bb: 6,
				zb: "butt",
				Ab: "round",
				sd: [3, 1]
			}, {
				stroke: "#bebebe",
				Bb: 8,
				zb: "butt",
				Ab: "round"
			}];
			if (19 <= b && 21 >= b) return [{
				stroke: "#e5e5e5",
				Bb: 8,
				zb: "butt",
				Ab: "round",
				sd: [4, 2]
			}, {
				stroke: "#bebebe",
				Bb: 10,
				zb: "butt",
				Ab: "round"
			}]
		} else if (/^guojietianqiao/.test(a)) return 18 === b ? [{
			stroke: "#ffffff",
			Bb: 6,
			zb: "butt",
			Ab: "round",
			sd: [4, 2]
		}, {
			stroke: "#bebebe",
			Bb: 8,
			zb: "butt",
			Ab: "round"
		}] : [{
			stroke: "#ffffff",
			Bb: 8,
			zb: "butt",
			Ab: "round",
			sd: [4, 2]
		}, {
			stroke: "#bebebe",
			Bb: 10,
			zb: "butt",
			Ab: "round"
		}];
		return jd[a]
	}
	var md = {
		drawLink: function(a, b, c, e, f) {
			var g = a[1];
			g && (a = a[6], this.SN(g, c, e, b, a, f, p), this.SN(g, c, e, b, a, f, t))
		},
		SN: function(a, b, c, e, f, g, i) {
			for (var k = 0; k < a.length; k++) {
				var m = a[k][0],
					n = g.hj(m, "line", b);
				if (n && n.length && (!i || n[0].borderWidth))
					if (!n[0].zo || ld(n[0].zo, b))
						for (var o = a[k][1], q = 0; q < o.length; q++) {
							var v = o[q][3];
							g.Nc(v[0], b) && (v["cache" + b] || (v["cache" + b] = g.xm(v[1], b, c, f)), v = v["cache" + b], g.M.Yn(e.canvas
								.id, v, {
									type: "polyline",
									Vb: m,
									style: n
								}), this.GV(e, v, n, i, b))
						}
			}
		},
		drawSingleTexture: function(a, b, c, e, f) {
			var g = a[1];
			if (g)
				for (var a = a[6], i = 0; i < g.length; i++) {
					var k = f.hj(g[i][0], "line", c);
					if (k && k.length)
						for (var m = g[i][1], n = 0; n < m.length; n++) {
							var o = m[n][11];
							if (f.Nc(o[0], c)) {
								var q;
								o["cache" + c] || (o["cache" + c] = f.xm(o[1], c, e, a));
								q = o["cache" + c];
								o = o[3];
								o *= Math.pow(2, c - f.i0[c].Lc);
								this.HV(b, q, k, o, f)
							}
						}
				}
		},
		HV: function(a, b, c, e, f) {
			var g = c[0].zo,
				i = this;
			if (kd[g]) i.Yr(b, e, a, kd[g]);
			else {
				var c = f.zK(g),
					k = new Image;
				k.onload = function() {
					kd[g] = k;
					i.Yr(b, e, a, k);
					k.onload = s
				};
				k.src = c
			}
		},
		Yr: function(a, b, c, e) {
			var f = [a[0], a[1]],
				g = [a[2], a[3]],
				a = g[0] - f[0],
				g = g[1] - f[1],
				f = [f[0] + a / 2, f[1] + g / 2],
				i = Math.sqrt(a * a + g * g),
				b = b / 10,
				a = Math.atan2(g, a);
			c.save();
			c.translate(f[0], f[1]);
			c.rotate(Math.PI / 2 + a);
			c.drawImage(e, -b / 2, -i / 2, b, i);
			c.restore()
		},
		GV: function(a, b, c, e, f) {
			c = c[0];
			if (!e && c.zo && ld(c.zo, f)) this.NV(a, b, c, ld(c.zo, f));
			else {
				a.beginPath();
				a.moveTo(b[0], b[1]);
				for (var f = 2, g = b.length; f < g; f += 2) a.lineTo(b[f], b[f + 1]);
				c.borderWidth && e ? (a.strokeStyle = c.io, a.lineCap = hd[c.nU], a.lineJoin = id[1], a.lineWidth = c.borderWidth /
					2, a.stroke()) : e || (a.strokeStyle = c.Cw, a.lineCap = hd[c.aW], a.lineJoin = id[1], a.lineWidth = c.fK / 2,
					a.stroke())
			}
		},
		NV: function(a, b, c, e) {
			if (c = e[1]) {
				a.strokeStyle = c.stroke;
				a.lineCap = c.zb;
				a.lineJoin = c.Ab;
				a.lineWidth = c.Bb;
				a.beginPath();
				a.moveTo(b[0], b[1]);
				for (var c = 2, f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
				a.stroke()
			}
			if (e = e[0])
				if (e.sd) this.EV(a, b, e);
				else {
					a.strokeStyle = e.stroke;
					a.lineCap = e.zb;
					a.lineJoin = e.Ab;
					a.lineWidth = e.Bb;
					a.beginPath();
					a.moveTo(b[0], b[1]);
					c = 2;
					for (f = b.length; c < f; c += 2) a.lineTo(b[c], b[c + 1]);
					a.stroke()
				}
		},
		EV: function(a, b, c) {
			a.strokeStyle = c.stroke;
			a.lineCap = c.zb;
			a.lineJoin = c.Ab;
			a.lineWidth = c.Bb;
			var e = p,
				c = c.sd[0];
			a.beginPath();
			for (var f = 0; f < b.length - 2; f += 2) {
				var g = b[f],
					i = b[f + 1],
					k = b[f + 2] - g,
					m = b[f + 3] - i,
					n = 0 !== k ? m / k : 0 < m ? 1E15 : -1E15,
					m = Math.sqrt(k * k + m * m),
					o = c;
				for (a.moveTo(g, i); 0.1 <= m;) {
					o > m && (o = m);
					var q = Math.sqrt(o * o / (1 + n * n));
					0 > k && (q = -q);
					g += q;
					i += n * q;
					a[e ? "lineTo" : "moveTo"](g, i);
					m -= o;
					e = !e
				}
			}
			a.stroke()
		}
	};
	var nd = 3,
		od = 4,
		pd = 7,
		qd = 8,
		rd = 15,
		sd = 16,
		td = {},
		ud = {},
		vd = {},
		wd, xd = {
			3: {
				start: 3,
				Lc: 3
			},
			4: {
				start: 4,
				Lc: 5
			},
			5: {
				start: 4,
				Lc: 5
			},
			6: {
				start: 6,
				Lc: 7
			},
			7: {
				start: 6,
				Lc: 7
			},
			8: {
				start: 8,
				Lc: 9
			},
			9: {
				start: 8,
				Lc: 9
			},
			10: {
				start: 10,
				Lc: 10
			},
			11: {
				start: 11,
				Lc: 12
			},
			12: {
				start: 11,
				Lc: 12
			},
			13: {
				start: 11,
				Lc: 12
			},
			14: {
				start: 14,
				Lc: 15
			},
			15: {
				start: 14,
				Lc: 15
			},
			16: {
				start: 16,
				Lc: 17
			},
			17: {
				start: 16,
				Lc: 17
			},
			18: {
				start: 18,
				Lc: 19
			},
			19: {
				start: 18,
				Lc: 19
			},
			20: {
				start: 18,
				Lc: 19
			},
			21: {
				start: 18,
				Lc: 19
			}
		};

	function yd(a) {
		this.M = a;
		this.Vc = a.R.devicePixelRatio;
		this.i0 = xd
	}
	yd.prototype = {
		eC: function(a, b, c, e, f, g, i, k, m) {
			this.M.yN = {};
			var n = this;
			m || (m = 0);
			if (!(z.om(window.rh) ? window.Np : window.Xt[f]) && 100 > m) setTimeout(function() {
				n.eC(a, b, c, e, f, g, i, k, m + 1)
			}, 100);
			else {
				wd || (wd = k);
				var o = b.getContext("2d"),
					q = b.parentNode;
				q.removeChild(b);
				o.clearRect(0, 0, g, g);
				q.appendChild(b);
				q = this.Vc;
				1 < q && !b._scale && (o.scale(q, q), b._scale = p);
				o.fillStyle = this.AM("#F5F3F0");
				window.La[f].bmapLandColor && (o.fillStyle = this.AM(window.La[f].bmapLandColor));
				q = b.style.width;
				b.style.width = "0px";
				b.style.width = q;
				o.fillRect(0, 0, g, g);
				if (a[0])
					for (q = 0; q < a[0].length; q++) {
						var v = a[0][q];
						v[0] === pd && dd.drawPoly(v, o, f, g, this)
					}
				17 <= this.M.ka() ? (n.TJ(a, o, f, g, i, c, e), b.mn = p) : setTimeout(function() {
					if (!b.zG) {
						n.TJ(a, o, f, g, i, c, e);
						b.mn = p
					}
				}, 1)
			}
		},
		TJ: function(a, b, c, e) {
			if (a[0])
				for (var f = 0; f < a[0].length; f++) {
					var g = a[0][f],
						i = g[0];
					i === od ? md.drawLink(g, b, c, e, this) : i === sd ? md.drawLink(g, b, c, e, this) : i === rd ? (dd.drawGaoqingRoadBorder(
							g, b, c, e, this), dd.drawGaoqingRoadFill(g, b, c, e, this)) : 18 === i ? "off" !== window.La[c].bmapRoadarrowVisibility &&
						ed.drawArrow(g, b, c, e, Math.pow(2, c - xd[c].Lc), this) : i === qd ? fd.drawHregion(g, b, c, e, this) : 19 ===
						i && md.drawSingleTexture(g, b, c, e, this)
				}
		},
		SJ: function(a, b, c, e, f, g, i) {
			var k = this;
			i || (i = 0);
			!(z.om(window.rh) ? window.Np : window.Xt[g]) && 100 > i ? setTimeout(function() {
				k.SJ(a, b, c, e, f, g, i + 1)
			}, 100) : (wd || (wd = b), a.UY = gd.parse(a, c, e, this, f))
		},
		hj: function(a, b, c, e) {
			var f = a + "-" + b + "-" + c;
			if (e) return td[f] || (td[f] = this.rg(a, b, c, e)), td[f];
			this.M.yN[f] = this.rg(a, b, c);
			return this.M.yN[f]
		},
		rg: function(a, b, c, e) {
			var f;
			f = e || window.bmap_baseFs;
			var e = z.om(window.rh) ? window.Np : window.Xt[c],
				g = f[2];
			if ("arrow" === b) return this.JY(g[2]);
			switch (b) {
				case "point":
					g = g[0];
					e = e[0] || {};
					break;
				case "pointText":
					g = g[1];
					e = e[1] || {};
					break;
				case "line":
					g = g[3];
					e = e[3] || {};
					break;
				case "polygon":
					g = g[4];
					e = e[4] || {};
					break;
				case "polygon3d":
					g = g[5], e = e[5] || {}
			}
			var i = [],
				c = f[1][c - 1][0][a];
			if (!c) return i;
			for (f = 0; f < c.length; f++) {
				var k = e[c[f]] || g[c[f]];
				if (k) {
					switch (b) {
						case "polygon":
							k = this.SY(k, a);
							break;
						case "line":
							k = this.OY(k, a);
							break;
						case "pointText":
							k = this.QY(k, a);
							break;
						case "point":
							k = this.PY(k, a);
							break;
						case "polygon3d":
							k = this.RY(k, a)
					}
					k.X4 = c[f];
					i[i.length] = k
				}
			}
			return i
		},
		QY: function(a, b) {
			return {
				Vb: b,
				jK: this.yg(a[0]),
				$K: this.yg(a[1]),
				A1: this.yg(a[2]),
				fontSize: a[3],
				Uw: a[4],
				fontWeight: a[5],
				fontStyle: a[6],
				nV: a[7]
			}
		},
		PY: function(a, b) {
			return {
				Vb: b,
				Lx: a[0],
				o5: a[1],
				ue: a[2],
				zX: a[3],
				Y3: a[4],
				nV: a[5],
				zoom: a[6]
			}
		},
		OY: function(a, b) {
			return {
				Vb: b,
				io: this.yg(a[0]),
				Cw: this.yg(a[1]),
				borderWidth: a[2],
				fK: a[3],
				nU: a[4],
				aW: a[5],
				i3: a[6],
				j3: a[7],
				k3: a[8],
				B3: a[9],
				C3: a[10],
				oU: a[11],
				zo: a[12],
				pU: a[13],
				k2: a[14],
				A3: a[15],
				g3: a[16],
				X3: a[17],
				C4: a[18]
			}
		},
		SY: function(a, b) {
			return {
				Vb: b,
				Cw: this.yg(a[0]),
				io: this.yg(a[1]),
				borderWidth: a[2],
				oU: a[3],
				pU: a[4],
				w5: a[5],
				f3: a[6],
				b5: a[7],
				c5: this.yg(a[8])
			}
		},
		RY: function(a, b) {
			return {
				Vb: b,
				filter: a[0],
				OM: a[1],
				h3: a[2],
				borderWidth: a[3],
				io: this.yg(a[4]),
				bW: this.yg(a[5]),
				j2: this.yg(a[6]),
				o4: a[7]
			}
		},
		JY: function(a) {
			for (var b in a) return a = a[b], {
				color: this.yg(a[0]),
				zX: a[1],
				ue: a[2]
			}
		},
		yg: function(a) {
			var b = a;
			if (vd[b]) return vd[b];
			a >>>= 0;
			vd[b] = "rgba(" + (a & 255) + "," + (a >> 8 & 255) + "," + (a >> 16 & 255) + "," + (a >> 24 & 255) / 255 + ")";
			return vd[b]
		},
		AM: function(a) {
			a = a.replace("#", "");
			6 === a.length && (a += "ff");
			for (var b = "rgba(", c = 0; 8 > c; c += 2) b = 6 > c ? b + (parseInt(a.slice(c, c + 2), 16) + ",") : b + (
				parseInt(a.slice(c, c + 2), 16) / 255 + ")");
			return b
		},
		Nc: function(a, b) {
			var c;
			ud[a] || (c = a.toString(2), 8 > c.length && (c = Array(8 - c.length + 1).join("0") + c), ud[a] = c);
			c = ud[a];
			return "1" === c[b - xd[b].start]
		},
		xm: function(a, b, c) {
			var e = [],
				b = Math.pow(2, b - xd[b].Lc) / 100,
				f = a[0] * b,
				g = a[1] * b;
			e[e.length] = f;
			e[e.length] = c - g;
			for (var i = 2; i < a.length; i += 2) f += a[i] * b, g += a[i + 1] * b, e[e.length] = f, e[e.length] = c - g;
			return e
		},
		zK: function(a) {
			var b = a.length % wd.length,
				c = this.BW();
			return wd[b] + a + ".png?v=" + c.iF + "&udt=" + c.dF
		},
		BW: function() {
			if (this.tD) return this.tD;
			var a = "undefined" !== typeof MSV ? MSV.Q3 : {};
			return this.tD = {
				iF: a.version ? a.version : "001",
				dF: a.M_ ? a.M_ : "20150621"
			}
		}
	};
	Q = z.lang.cu;
	nd = 3;
	od = 4;
	pd = 7;
	qd = 8;
	rd = 15;
	sd = 16;

	function Lc(a, b, c) {
		c = c || {};
		this.M = a;
		this.Fv = b;
		this.Vc = b.OM;
		this.$a = {
			u_: "na",
			zIndex: 0,
			EN: c.tileUrls || {
				http: ["http://online0.map.bdimg.com/pvd/?qt=vtile", "http://online1.map.bdimg.com/pvd/?qt=vtile",
					"http://online2.map.bdimg.com/pvd/?qt=vtile", "http://online3.map.bdimg.com/pvd/?qt=vtile",
					"http://online4.map.bdimg.com/pvd/?qt=vtile"
				],
				https: ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
					"https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
					"https://ss2.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
					"https://ss3.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/pvd/?qt=vtile",
					"https://ss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv/pvd/?qt=vtile"
				]
			},
			sD: c.iconUrls || ["https://ss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/",
				"https://ss1.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv/sty/map_icons2x/"
			],
			JE: p
		};
		this.$A = "";
		this.XR = {};
		var c = c.urlOpts || {
				styles: "pl",
				extdata: 1,
				textimg: 0,
				mesh3d: 0,
				limit: 30
			},
			e;
		for (e in c) c.hasOwnProperty(e) && (this.$A = this.$A + "&" + e + "=" + c[e]);
		this.Xg = {};
		this.Jr = [];
		this.Ps = 0;
		this.hx = t;
		this.bx = {};
		a = this.$a.u_;
		Yc[a] ? a = Yc[a] : (b = new Zc(a, l), a = Yc[a] = b);
		this.Cd = a;
		this.M.Cd = this.Cd
	}
	window.VectorIndoorTileLayer = "VectorIndoorTileLayer";
	fa = Lc.prototype;
	fa.xa = function() {
		var a = this.M,
			b = a.Xe;
		if (!this.Un) {
			var c = b.fq(this.$a.zIndex);
			c.style.WebkitTransform = "translate3d(0px, 0px, 0)";
			this.Un = c
		}
		b.dg.appendChild(this.Un);
		b.v3 = c;
		if (this.$a.JE) {
			zd(this);
			var e = this;
			a.addEventListener("checkvectorclick", function(a) {
				var b;
				a: {
					b = a.offsetX;
					var c = a.offsetY,
						k = e.Jr.UY;
					if (k)
						for (var m = 0; m < k.length; m++)
							for (var n = k[m], o = 0; o < n.length; o++)
								if (a = n[o], !a.Js && a.Es && b > a.Rf && b < a.fi && c > a.Sf && c < a.gi) {
									b = a.Es;
									b = {
										type: 9,
										name: a.name,
										uid: a.uid,
										point: {
											x: b.ae + b.width / 2,
											y: b.be + 6
										}
									};
									break a
								} b = s
				}
				b && (a = new Q("onvectorclick"), a.r3 = b, a.jf = "base", this.dispatchEvent(a))
			})
		}
	};

	function zd(a) {
		var b = a.M,
			c = b.Xe,
			e = a.Vc,
			f = b.Hb(),
			g = f.width,
			f = f.height,
			i = O("canvas");
		i.style.cssText = "position: absolute;left:0;top:0;width:" + g + "px;height:" + f + "px;z-index:2;";
		i.width = g * e;
		i.height = f * e;
		a.lx = i;
		a.To = i.getContext("2d");
		a.To.scale(e, e);
		a.To.textBaseline = "top";
		c.dg.appendChild(i);
		b.GR = i
	}
	fa.hX = x("Cd");
	fa.update = function(a, b) {
		b = b || {};
		this.fF = b.fF;
		b.Zl && (this.N_ = b.Zl);
		if (this.$a.JE && (b.Ql && this.Ql(), b.c_)) {
			var c = this.Vc,
				e = this.M.Hb(),
				f = e.width,
				e = e.height,
				g = this.lx,
				i = g.style;
			i.width = f + "px";
			i.height = e + "px";
			g.width = f * c;
			g.height = e * c;
			this.To.scale(c, c);
			this.To.textBaseline = "top"
		}
		if (b.r5) {
			c = this.Un;
			f = 0;
			for (e = c.childNodes.length; f < e; f++) c.childNodes[f].mn = t
		}
		this.sw = a;
		this.Wo(a)
	};
	fa.Wo = function(a) {
		this.Jr = [];
		var b = this.M,
			c = b.ka(),
			e = b.Pc.ci(b.pe),
			f = this.Cd.fc(c),
			e = [Math.round(-e.lng / f), Math.round(e.lat / f)],
			f = this.Cd.Id(c),
			g = b.ea.replace(/^TANGRAM_/, ""),
			i = this.Cd.ks(c),
			b = this.M,
			k = -b.offsetY + b.height / 2,
			m = this.Un;
		m.style.left = -b.offsetX + b.width / 2 + "px";
		m.style.top = k + "px";
		this.Ne ? this.Ne.length = 0 : this.Ne = [];
		b = 0;
		for (k = m.childNodes.length; b < k; b++) {
			var n = m.childNodes[b];
			n.Eq = t;
			this.Ne.push(n)
		}
		if (b = this.um)
			for (var o in b) delete b[o];
		else this.um = {};
		this.Oe ? this.Oe.length = 0 : this.Oe = [];
		b = 0;
		for (k = a.length; b < k; b++) {
			var n = a[b][0],
				q = a[b][1];
			o = 0;
			for (var v = this.Ne.length; o < v; o++) {
				var w = this.Ne[o];
				if (w.id === g + "_" + n + "_" + q + "_" + i + "_" + c) {
					w.Eq = p;
					this.um[w.id] = w;
					break
				}
			}
		}
		b = 0;
		for (k = this.Ne.length; b < k; b++) w = this.Ne[b], w.Eq || (w.dB = s, delete w.dB, w.mn = t, this.Oe.push(w));
		o = [];
		v = f * this.Vc;
		b = 0;
		for (k = a.length; b < k; b++) {
			var n = a[b][0],
				q = a[b][1],
				w = n * f + e[0],
				y = (-1 - q) * f + e[1],
				A = g + "_" + n + "_" + q + "_" + i + "_" + c,
				B = this.um[A],
				C = s;
			if (B) C = B.style, C.left = w + "px", C.top = y + "px", C.width = f + "px", C.height = f + "px", B.mn ? B.VE && B
				.VE && this.Jr.push(B.VE) : (B.zG = p, B.dB = s, delete B.dB, o.push([n, q, B]));
			else {
				if (0 < this.Oe.length) {
					var B = this.Oe.shift(),
						F = B.getContext("2d");
					B.getAttribute("width") !== v && (B._scale = t);
					B.setAttribute("width", v);
					B.setAttribute("height", v);
					C = B.style;
					C.width = f + "px";
					C.height = f + "px";
					F.clearRect(0, 0, v, v)
				} else B = document.createElement("canvas"), C = B.style, C.position = "absolute", this.$a.backgroundColor && (C.background =
					this.$a.backgroundColor), C.width = f + "px", C.height = f + "px", B.setAttribute("width", v), B.setAttribute(
					"height", v), m.appendChild(B);
				B.id = A;
				C.left = w + "px";
				C.top = y + "px";
				o.push([n, q, B])
			}
			B.style.visibility = ""
		}
		b = 0;
		for (k = this.Oe.length; b < k; b++) this.Oe[b].style.visibility = "hidden";
		if (0 === o.length) {
			Ad(this);
			a = this.M.ea.replace(/^TANGRAM_/, "");
			c = this.M.ka();
			e = this.Cd.ks(c);
			f = {};
			for (g = 0; g < this.sw.length; g++) i = this.sw[g], i = a + "_" + i[0] + "_" + i[1] + "_" + e + "_" + c, this.Xg[
				i] && (f[i] = this.Xg[i], this.fF && this.Fv.fC.eC(this.Xg[i].$_, this.Xg[i].s_, this.Xg[i].Sl, this.Xg[i].Dm,
				this.Xg[i].TD, this.Cd.Id(this.Xg[i].TD), this.Cd.aD(this.Xg[i].TD), this.$a.sD));
			this.Xg = f
		} else {
			this.Ps = o.length;
			this.hx = t;
			c = this.Cd.ks(this.M.ka());
			for (e = 0; e < a.length; e++) a[e][3] = c;
			for (e = 0; e < o.length; e++) a = o[e][2], f = o[e][0], g = o[e][1], o[e][3] = c, a.mn = t, a.zG = t, Bd(this, f,
				g, c, a)
		}
	};

	function Bd(a, b, c, e, f) {
		var g = b + "_" + c + "_" + e,
			i = a.XR;
		if (i[g]) {
			if ("loading" === i[g].status) return
		} else i[g] = {
			status: "init",
			WM: 0
		};
		var k = a,
			m = k.M,
			n = [],
			n = "0" === D.Rt ? k.$a.EN.http : k.$a.EN.https,
			o = Math.abs(b + c) % n.length,
			q = "x=" + b + "&y=" + c + "&z=" + e,
			v = Cd(a.Fv),
			w = v.iF,
			v = v.dF,
			y = "_" + (0 > b ? "_" : "") + (0 > c ? "$" : "") + parseInt(Math.abs(b) + "" + Math.abs(c) + "" + e, 10).toString(
				36),
			q = q + a.$A + "v=" + w + "&udt=" + v + "&fn=window." + y,
			w = n[o] + "&" + q,
			w = n[o] + "&param=" + window.encodeURIComponent(Kb(q));
		window[y] = function(a) {
			clearTimeout(i[g].Kk);
			i[g] = s;
			if (a) {
				var n = m.ka(),
					o;
				a: {
					for (o = 0; o < k.sw.length; o++) {
						var q = k.sw[o];
						if (q[0] === b && q[1] === c && q[3] === e) {
							o = p;
							break a
						}
					}
					o = t
				}
				if (o !== t) {
					o = new Q("updateindoor");
					o.IndoorCanvas = [];
					o.IndoorCanvas.push({
						canvasDom: f,
						data: a,
						canvasID: f.id,
						ratio: k.Vc
					});
					m.dispatchEvent(o);
					if (m.R.gk) {
						if (k.Xg[f.id] = {
								$_: a,
								s_: f,
								Sl: b,
								Dm: c,
								TD: n
							}, k.Fv.fC.eC(a, f, b, c, n, k.Cd.Id(n), k.Cd.aD(n), k.$a.sD), k.$a.JE) {
							n = [];
							n.t_ = [b, c, e];
							if (a[0])
								for (o = 0; o < a[0].length; o++) a[0][o][0] === nd && n.push({
									BL: a[0][o]
								});
							if (a[2])
								for (o = 0; o < a[2].length; o++) n.push({
									gY: a[2][o]
								});
							f.VE = n;
							k.Jr.push(n);
							k.hx === t && k.Ps--;
							(0 === k.Ps || k.hx === p) && Ad(k)
						}
					} else k.Ps--, (0 === k.Ps || k.hx === p) && Ad(k);
					delete window[y]
				}
			}
		};
		pa(w);
		i[g].status = "loading";
		k = a;
		i[g].Kk = setTimeout(function() {
			3 > i[g].WM ? (i[g].WM++, i[g].status = "init", Bd(k, b, c, e, f)) : i[g] = s
		}, 4E3)
	}

	function Ad(a) {
		if (a.lx) {
			var b = a.M;
			a.lx.style.left = -b.offsetX + "px";
			a.lx.style.top = -b.offsetY + "px";
			var c = new Q("updateindoorlabel");
			c.labelCanvasDom = b.GR;
			b.dispatchEvent(c);
			if (b.R.gk) {
				a.Ql();
				var c = a.Cd,
					e = b.ka(),
					f = c.ks(b.ka());
				a.Fv.fC.SJ(a.Jr, a.$a.sD, a.To, c.Id(e), Math.pow(2, e - f), e);
				"moving" !== a.N_ && b.dispatchEvent(new Q("ontilesloaded"))
			}
		}
	}
	fa.Ql = function() {
		var a = this.M.Hb(),
			b = this.Vc;
		this.To.clearRect(0, 0, a.width * b, a.height * b)
	};
	fa.remove = function() {
		var a = this.M.Xe;
		this.Un && a.dg.removeChild(this.Un)
	};

	function Kc(a) {
		this.M = a.map;
		this.af = [];
		this.rr = {};
		this.OM = this.M.R.devicePixelRatio;
		this.fC = new yd(this.M);
		this.xa()
	}
	window.VectorIndoorTileMgr = "VectorIndoorTileMgr";
	fa = Kc.prototype;
	fa.xa = function() {
		var a = this,
			b = this.M;
		b.addEventListener("addtilelayer", function(b) {
			a.Me(b.target)
		});
		b.addEventListener("removetilelayer", function(b) {
			a.Vf(b.target)
		});
		setTimeout(function() {
			b.addEventListener("onmoveend", function(b) {
				"centerAndZoom" !== b.kz && a.update({
					Zl: "moveend"
				})
			});
			b.addEventListener("onmoving", function() {
				a.update({
					Zl: "moving"
				})
			});
			b.addEventListener("onzoomend", function(b) {
				"centerAndZoom" !== b.kz && a.update({
					Ql: p,
					Zl: "zoomend"
				})
			});
			b.addEventListener("centerandzoom", function() {
				a.update({
					Ql: p,
					Zl: "centerandzoom"
				})
			});
			b.addEventListener("onupdatestyles", function() {
				a.update({
					Ql: p,
					fF: p,
					Zl: "updatestyles"
				});
				a.M.qf(a.M.Cb());
				setTimeout(function() {
					a.M.dispatchEvent(new Q("onvectordrawend"))
				}, 10)
			});
			b.addEventListener("onmaptypechange", function(b) {
				b.xb === Pa && a.update({
					Ql: p,
					Zl: "maptypechange"
				})
			})
		}, 1);
		b.addEventListener("indoor_data_refresh", u());
		b.addEventListener("onresize", function() {
			a.update({
				c_: p
			})
		});
		a.update()
	};
	fa.Me = function(a) {
		if (a instanceof Lc) {
			for (var b = 0; b < this.af.length; b++)
				if (this.af[b] === a) return;
			this.af.push(a);
			a.xa();
			this.M.loaded && this.update()
		}
	};
	fa.Vf = function(a) {
		if (a instanceof Lc) {
			for (var b = 0; b < this.af.length; b++)
				if (this.af[b] === a) {
					this.af.splice(b, 1);
					break
				} a.remove()
		}
	};
	fa.QK = function(a) {
		var b = a.getName();
		if (this.rr[b]) return this.rr[b];
		var c = this.M,
			e = c.ka(),
			f = c.gc,
			g = a.aD(e);
		c.ea.replace(/^TANGRAM_/, "");
		var i = Math.ceil(f.lng / g),
			k = Math.ceil(f.lat / g),
			a = a.Id(e),
			m = [i, k, (f.lng / g - i) * a, (f.lat / g - k) * a],
			e = m[0] - Math.ceil((c.width / 2 - m[2]) / a),
			f = m[1] - Math.ceil((c.height / 2 - m[3]) / a),
			g = m[0] + Math.ceil((c.width / 2 + m[2]) / a),
			c = m[1] + Math.ceil((c.height / 2 + m[3]) / a);
		this.Be ? this.Be.length = 0 : this.Be = [];
		for (a = e; a < g; a++)
			for (e = f; e < c; e++) this.Be.push([a, e]);
		this.Be.sort(function(a) {
			return function(b, c) {
				return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(
					c[1] - a[1]))
			}
		}([i, k]));
		this.rr[b] = this.Be.slice(0);
		return this.rr[b]
	};

	function Cd(a) {
		if (a.jF) return a.jF;
		a.jF = {
			iF: "001",
			dF: Sb("normal")
		};
		return a.jF
	}
	fa.update = function(a) {
		this.rr = {};
		for (var b = 0; b < this.af.length; b++) {
			var c = this.af[b],
				e = this.QK(c.Cd);
			c.update(e, a)
		}
	};

	function Dd(a, b, c) {
		this.jd = a;
		this.af = b instanceof Mc ? [b] : b.slice(0);
		c = c || {};
		this.m = {
			x_: c.tips || "",
			OD: "",
			hc: c.minZoom || 4,
			pc: c.maxZoom || 18,
			p3: c.minZoom || 4,
			o3: c.maxZoom || 18,
			hy: 256,
			UE: c.textColor || "black",
			zC: c.errorImageUrl || "",
			fb: new hb(new J(-21364736, -16023552), new J(23855104, 19431424)),
			Pc: c.projection || new S
		};
		1 <= this.af.length && (this.af[0].Wv = p);
		z.extend(this.m, c)
	}
	z.extend(Dd.prototype, {
		getName: x("jd"),
		ys: function() {
			return this.m.x_
		},
		O2: function() {
			return this.m.OD
		},
		gX: function() {
			return this.af[0]
		},
		c3: x("af"),
		Id: function() {
			return this.m.hy
		},
		aj: function() {
			return this.m.hc
		},
		Yh: function() {
			return this.m.pc
		},
		setMaxZoom: function(a) {
			this.m.pc = a
		},
		hm: function() {
			return this.m.UE
		},
		pk: function() {
			return this.m.Pc
		},
		H2: function() {
			return this.m.zC
		},
		Id: function() {
			return this.m.hy
		},
		fc: function(a) {
			return Math.pow(2, 18 - a)
		},
		VK: function(a) {
			return this.fc(a) * this.Id()
		}
	});
	var Ed = [D.url.proto + D.url.domain.TILE_BASE_URLS[0] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[1] +
			"/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[2] + "/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[3] +
			"/it/", D.url.proto + D.url.domain.TILE_BASE_URLS[4] + "/it/"
		],
		Fd = [D.url.proto + D.url.domain.TILE_ONLINE_URLS[0] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[1] +
			"/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[2] + "/tile/", D.url.proto + D.url.domain.TILE_ONLINE_URLS[3] +
			"/tile/"
		],
		Gd = {
			dark: "dl",
			light: "ll",
			normal: "pl"
		},
		Hd = new Mc;
	Hd.XZ = p;
	Hd.getTilesUrl = function(a, b, c) {
		var e = a.x,
			a = a.y,
			f = Sb("normal"),
			g = 1,
			c = Gd[c];
		/* this.map.ax() && (g = 2);
		e = this.map.Xe.Xv(e, b).Sl;
		return (Fd[Math.abs(e + a) % Fd.length] + "?qt=vtile&x=" + (e + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(
				/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + g + (6 == z.fa.ma ? "&color_dep=32&colors=50" : "") +
			"&udt=" + f).replace(/-(\d+)/gi, "M$1") */
			
			 let tdir = bmapcfg.tiles_dir.length>0?bmapcfg.tiles_dir:bmapcfg.home + "tiles";
			 console.log(tdir + "/" + b + "/" + d + "/" + a + bmapcfg.imgext)
			 return tdir + "/" + b + "/" + d + "/" + a + bmapcfg.imgext; // 使用本地的瓦片
			
	};
	var Pa = new Dd("\u5730\u56fe", Hd, {
			tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
			maxZoom: 19
		}),
		Id = new Mc;
	Id.DN = [D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[
			1] + "/resource/mappic/", D.url.proto + D.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", D.url.proto + D.url
		.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"
	];
	Id.getTilesUrl = function(a, b) {
		var c = a.x,
			e = a.y,
			f = 256 * Math.pow(2, 20 - b),
			e = Math.round((9998336 - f * e) / f) - 1;
		return url = this.DN[Math.abs(c + e) % this.DN.length] + this.map.Wb + "/" + this.map.cw + "/3/lv" + (21 - b) + "/" +
			c + "," + e + ".jpg"
	};
	var Sa = new Dd("\u4e09\u7ef4", Id, {
		tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
		minZoom: 15,
		maxZoom: 20,
		textColor: "white",
		projection: new jb
	});
	Sa.fc = function(a) {
		return Math.pow(2, 20 - a)
	};
	Sa.kk = function(a) {
		if (!a) return "";
		var b = H.yB,
			c;
		for (c in b)
			if (-1 < a.search(c)) return b[c].Gx;
		return ""
	};
	Sa.sK = function(a) {
		return {
			bj: 2,
			gz: 1,
			sz: 14,
			sh: 4
		} [a]
	};
	var Jd = new Mc({
		Wv: p
	});
	Jd.getTilesUrl = function(a, b) {
		var c = a.x,
			e = a.y;
		return (Ed[Math.abs(c + e) % Ed.length] + "u=x=" + c + ";y=" + e + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Sb(
			"satellite")).replace(/-(\d+)/gi, "M$1")
	};
	var ab = new Dd("\u536b\u661f", Jd, {
			tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
			minZoom: 4,
			maxZoom: 19,
			textColor: "white"
		}),
		Kd = new Mc({
			transparentPng: p
		});
	Kd.getTilesUrl = function(a, b) {
		var c = a.x,
			e = a.y,
			f = Sb("satelliteStreet");
		return (Fd[Math.abs(c + e) % Fd.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (e + "").replace(
			/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == z.fa.ma ? "&color_dep=32&colors=50" : "") + "&udt=" + f).replace(
			/-(\d+)/gi, "M$1")
	};
	var Va = new Dd("\u6df7\u5408", [Jd, Kd], {
		tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
		labelText: "\u8def\u7f51",
		minZoom: 4,
		maxZoom: 19,
		textColor: "white"
	});
	var Ld = 1,
		W = {};
	window.m0 = W;

	function X(a, b) {
		z.lang.Ga.call(this);
		this.zd = {};
		this.Hm(a);
		b = b || {};
		b.pa = b.renderOptions || {};
		this.m = {
			pa: {
				Oa: b.pa.panel || s,
				map: b.pa.map || s,
				Vg: b.pa.autoViewport || p,
				kt: b.pa.selectFirstResult,
				Cs: b.pa.highlightMode,
				Xb: b.pa.enableDragging || t
			},
			Zs: b.onSearchComplete || u(),
			qM: b.onMarkersSet || u(),
			pM: b.onInfoHtmlSet || u(),
			sM: b.onResultsHtmlSet || u(),
			oM: b.onGetBusListComplete || u(),
			nM: b.onGetBusLineComplete || u(),
			lM: b.onBusListHtmlSet || u(),
			kM: b.onBusLineHtmlSet || u(),
			cE: b.onPolylinesSet || u(),
			ep: b.reqFrom || ""
		};
		this.m.pa.Vg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions
			.autoViewport ? b.renderOptions.autoViewport : p;
		this.m.pa.Oa = z.Ec(this.m.pa.Oa)
	}
	z.wa(X, z.lang.Ga);
	z.extend(X.prototype, {
		getResults: function() {
			return this.Gc ? this.zi : this.la
		},
		enableAutoViewport: function() {
			this.m.pa.Vg = p
		},
		disableAutoViewport: function() {
			this.m.pa.Vg = t
		},
		Hm: function(a) {
			a && (this.zd.src = a)
		},
		xt: function(a) {
			this.m.Zs = a || u()
		},
		setMarkersSetCallback: function(a) {
			this.m.qM = a || u()
		},
		setPolylinesSetCallback: function(a) {
			this.m.cE = a || u()
		},
		setInfoHtmlSetCallback: function(a) {
			this.m.pM = a || u()
		},
		setResultsHtmlSetCallback: function(a) {
			this.m.sM = a || u()
		},
		fm: x("Ke")
	});
	var Md = {
		MF: D.nd,
		nb: function(a, b, c, e, f) {
			this.cZ(b);
			var g = (1E5 * Math.random()).toFixed(0);
			D._rd["_cbk" + g] = function(b) {
				b.result && b.result.error && 202 === b.result.error ? alert(
					"\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c =
					c || {}, a && a(b, c), delete D._rd["_cbk" + g])
			};
			e = e || "";
			b = c && c.R_ ? Gb(b, encodeURI) : Gb(b, encodeURIComponent);
			this.MF = c && c.bK ? c.UM ? c.UM : D.Xo : D.nd;
			e = this.MF + e + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
			f || (e += "&res=api");
			e = e + ("&callback=BMap._rd._cbk" + g) + ("&ak=" + qa);
			pa(e)
		},
		cZ: function(a) {
			if (a.qt) {
				var b = "";
				switch (a.qt) {
					case "bt":
						b = "z_qt|bt";
						break;
					case "nav":
						b = "z_qt|nav";
						break;
					case "walk":
						b = "z_qt|walk";
						break;
					case "bse":
						b = "z_qt|bse";
						break;
					case "nse":
						b = "z_qt|nse";
						break;
					case "drag":
						b = "z_qt|drag"
				}
				"" !== b && D.alog("cus.fire", "count", b)
			}
		}
	};
	window.A0 = Md;
	D._rd = {};
	var db = {};
	window.z0 = db;
	db.QM = function(a) {
		a = a.replace(/<\/?[^>]*>/g, "");
		return a = a.replace(/[ | ]* /g, " ")
	};
	db.KY = function(a) {
		return a.replace(
			/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;"
		)
	};
	db.LY = function(a, b) {
		return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" +
			b + "}", "ig"), "$1")
	};
	var Nd = 2,
		Od = 6,
		Pd = 8,
		Qd = 2,
		Rd = 3,
		Sd = 6,
		Td = 0,
		Ud = "bt",
		Vd = "nav",
		Wd = "walk",
		Xd = "bl",
		Yd = "bsl",
		Zd = "ride",
		$d = 15,
		ae = 18;
	D.I = window.Instance = z.lang.Mc;

	function be(a, b, c) {
		z.lang.Ga.call(this);
		if (a) {
			this.Ya = "object" == typeof a ? a : z.Ec(a);
			this.page = 1;
			this.Jd = 100;
			this.bJ = "pg";
			this.Uf = 4;
			this.kJ = b;
			this.update = p;
			a = {
				page: 1,
				h5: 100,
				Jd: 100,
				Uf: 4,
				bJ: "pg",
				update: p
			};
			c || (c = a);
			for (var e in c) "undefined" != typeof c[e] && (this[e] = c[e]);
			this.za()
		}
	}
	z.extend(be.prototype, {
		za: function() {
			this.xa()
		},
		xa: function() {
			this.DU();
			this.Ya.innerHTML = this.bV()
		},
		DU: function() {
			isNaN(parseInt(this.page)) && (this.page = 1);
			isNaN(parseInt(this.Jd)) && (this.Jd = 1);
			1 > this.page && (this.page = 1);
			1 > this.Jd && (this.Jd = 1);
			this.page > this.Jd && (this.page = this.Jd);
			this.page = parseInt(this.page);
			this.Jd = parseInt(this.Jd)
		},
		T2: function() {
			location.search.match(RegExp("[?&]?" + this.bJ + "=([^&]*)[&$]?", "gi"));
			this.page = RegExp.$1
		},
		bV: function() {
			var a = [],
				b = this.page - 1,
				c = this.page + 1;
			a.push('<p style="margin:0;padding:0;white-space:nowrap">');
			if (!(1 > b)) {
				if (this.page >= this.Uf) {
					var e;
					a.push(
						'<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'
						.replace("{temp1}", "BMap.I('" + this.ea + "').toPage(1);"))
				}
				a.push(
					'<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'
					.replace("{temp2}", "BMap.I('" + this.ea + "').toPage(" + b + ");"))
			}
			if (this.page < this.Uf) e = 0 == this.page % this.Uf ? this.page - this.Uf - 1 : this.page - this.page % this.Uf +
				1, b = e + this.Uf - 1;
			else {
				e = Math.floor(this.Uf / 2);
				var f = this.Uf % 2 - 1,
					b = this.Jd > this.page + e ? this.page + e : this.Jd;
				e = this.page - e - f
			}
			this.page > this.Jd - this.Uf && this.page >= this.Uf && (e = this.Jd - this.Uf + 1, b = this.Jd);
			for (f = e; f <= b; f++) 0 < f && (f == this.page ? a.push('<span style="margin-right:3px">' + f + "</span>") :
				1 <= f && f <= this.Jd && (e =
					'<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + f +
					"]</a></span>", a.push(e.replace("{temp3}", "BMap.I('" + this.ea + "').toPage(" + f + ");"))));
			c > this.Jd || a.push(
				'<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace(
					"{temp4}", "BMap.I('" + this.ea + "').toPage(" + c + ");"));
			a.push("</p>");
			return a.join("")
		},
		toPage: function(a) {
			a = a ? a : 1;
			"function" == typeof this.kJ && (this.kJ(a), this.page = a);
			this.update && this.za()
		}
	});

	function fb(a, b) {
		X.call(this, a, b);
		b = b || {};
		b.renderOptions = b.renderOptions || {};
		this.np(b.pageCapacity);
		"undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.YB() : this.rC();
		this.Ba = [];
		this.tf = [];
		this.ob = -1;
		this.Ra = [];
		var c = this;
		K.load("local", function() {
			c.Qy()
		}, p)
	}
	z.wa(fb, X, "LocalSearch");
	fb.Gp = 10;
	fb.v0 = 1;
	fb.Xm = 100;
	fb.CF = 2E3;
	fb.KF = 1E5;
	z.extend(fb.prototype, {
		search: function(a, b) {
			this.Ra.push({
				method: "search",
				arguments: [a, b]
			})
		},
		Em: function(a, b, c) {
			this.Ra.push({
				method: "searchInBounds",
				arguments: [a, b, c]
			})
		},
		kp: function(a, b, c, e) {
			this.Ra.push({
				method: "searchNearby",
				arguments: [a, b, c, e]
			})
		},
		Pe: function() {
			delete this.Ma;
			delete this.Ke;
			delete this.la;
			delete this.ya;
			this.ob = -1;
			this.Xa();
			this.m.pa.Oa && (this.m.pa.Oa.innerHTML = "")
		},
		im: u(),
		rC: function() {
			this.m.pa.kt = p
		},
		YB: function() {
			this.m.pa.kt = t
		},
		np: function(a) {
			this.m.xk = "number" == typeof a && !isNaN(a) ? 1 > a ? fb.Gp : a > fb.Xm ? fb.Gp : a : fb.Gp
		},
		lf: function() {
			return this.m.xk
		},
		toString: ea("LocalSearch")
	});
	var ce = fb.prototype;
	U(ce, {
		clearResults: ce.Pe,
		setPageCapacity: ce.np,
		getPageCapacity: ce.lf,
		gotoPage: ce.im,
		searchNearby: ce.kp,
		searchInBounds: ce.Em,
		search: ce.search,
		enableFirstResultSelection: ce.rC,
		disableFirstResultSelection: ce.YB
	});

	function de(a, b) {
		X.call(this, a, b)
	}
	z.wa(de, X, "BaseRoute");
	z.extend(de.prototype, {
		Pe: u()
	});

	function ee(a, b) {
		X.call(this, a, b);
		b = b || {};
		this.wt(b.policy);
		this.iN(b.intercityPolicy);
		this.qN(b.transitTypePolicy);
		this.np(b.pageCapacity);
		this.Eb = Ud;
		this.Mp = Ld;
		this.Ba = [];
		this.ob = -1;
		this.m.tn = b.enableTraffic || t;
		this.Ra = [];
		var c = this;
		K.load("route", function() {
			c.Rd()
		})
	}
	ee.Xm = 100;
	ee.AO = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
	ee.BO = [0, 3, 4, 0, 0, 0, 5];
	z.wa(ee, de, "TransitRoute");
	z.extend(ee.prototype, {
		wt: function(a) {
			this.m.he = 0 <= a && 5 >= a ? a : 0
		},
		iN: function(a) {
			this.m.nm = 0 <= a && 2 >= a ? a : 0
		},
		qN: function(a) {
			this.m.Nm = 0 <= a && 2 >= a ? a : 0
		},
		Sz: function(a, b) {
			this.Ra.push({
				method: "_internalSearch",
				arguments: [a, b]
			})
		},
		search: function(a, b) {
			this.Ra.push({
				method: "search",
				arguments: [a, b]
			})
		},
		np: function(a) {
			if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
				this.m.xk = ee.Xm;
				return
			}
			this.m.xk = "number" !== typeof a ? ee.Xm : 1 <= a && a <= ee.Xm ? Math.round(a) : ee.Xm
		},
		toString: ea("TransitRoute"),
		l1: function(a) {
			return a.replace(/\(.*\)/, "")
		}
	});
	var fe = ee.prototype;
	U(fe, {
		_internalSearch: fe.Sz
	});

	function ge(a, b) {
		X.call(this, a, b);
		this.Ba = [];
		this.ob = -1;
		this.Ra = [];
		var c = this,
			e = this.m.pa;
		1 !== e.Cs && 2 !== e.Cs && (e.Cs = 1);
		this.Cu = this.m.pa.Xb ? p : t;
		K.load("route", function() {
			c.Rd()
		});
		this.AD && this.AD()
	}
	ge.PO =
		" \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053"
		.split(" ");
	z.wa(ge, de, "DWRoute");
	z.extend(ge.prototype, {
		search: function(a, b, c) {
			this.Ra.push({
				method: "search",
				arguments: [a, b, c]
			})
		}
	});

	function he(a, b) {
		ge.call(this, a, b);
		b = b || {};
		this.m.tn = b.enableTraffic || t;
		this.wt(b.policy);
		this.Eb = Vd;
		this.Mp = Rd
	}
	z.wa(he, ge, "DrivingRoute");
	he.prototype.wt = function(a) {
		this.m.he = 0 <= a && 5 >= a ? a : 0
	};

	function ie(a, b) {
		ge.call(this, a, b);
		this.Eb = Wd;
		this.Mp = Qd;
		this.Cu = t
	}
	z.wa(ie, ge, "WalkingRoute");

	function je(a, b) {
		ge.call(this, a, b);
		this.Eb = Zd;
		this.Mp = Sd;
		this.Cu = t
	}
	z.wa(je, ge, "RidingRoute");

	function ke(a, b) {
		z.lang.Ga.call(this);
		this.Qf = [];
		this.yk = [];
		this.m = b;
		this.mj = a;
		this.map = this.m.pa.map || s;
		this.bN = this.m.bN;
		this.Db = s;
		this.dk = 0;
		this.QE = "";
		this.hf = 1;
		this.yC = "";
		this.fp = [0, 0, 0, 0, 0, 0, 0];
		this.OL = [];
		this.Hr = [1, 1, 1, 1, 1, 1, 1];
		this.LN = [1, 1, 1, 1, 1, 1, 1];
		this.gp = [0, 0, 0, 0, 0, 0, 0];
		this.Cm = [0, 0, 0, 0, 0, 0, 0];
		this.Kb = [{
			B: "",
			Dd: 0,
			Om: 0,
			x: 0,
			y: 0,
			ra: -1
		}, {
			B: "",
			Dd: 0,
			Om: 0,
			x: 0,
			y: 0,
			ra: -1
		}, {
			B: "",
			Dd: 0,
			Om: 0,
			x: 0,
			y: 0,
			ra: -1
		}, {
			B: "",
			Dd: 0,
			Om: 0,
			x: 0,
			y: 0,
			ra: -1
		}, {
			B: "",
			Dd: 0,
			Om: 0,
			x: 0,
			y: 0,
			ra: -1
		}, {
			B: "",
			Dd: 0,
			Om: 0,
			x: 0,
			y: 0,
			ra: -1
		}, {
			B: "",
			Dd: 0,
			Om: 0,
			x: 0,
			y: 0,
			ra: -1
		}];
		this.Rh = -1;
		this.Mt = [];
		this.bF = [];
		K.load("route", u())
	}
	z.lang.wa(ke, z.lang.Ga, "RouteAddr");
	var le = navigator.userAgent;
	/ipad|iphone|ipod|iph/i.test(le);
	var ne = /android/i.test(le);

	function oe(a) {
		this.Te = a || {}
	}
	z.extend(oe.prototype, {
		aN: function(a, b, c) {
			var e = this;
			K.load("route", function() {
				e.Rd(a, b, c)
			})
		}
	});

	function pe(a) {
		this.m = {};
		z.extend(this.m, a);
		this.Ra = [];
		var b = this;
		K.load("othersearch", function() {
			b.Rd()
		})
	}
	z.wa(pe, z.lang.Ga, "Geocoder");
	z.extend(pe.prototype, {
		em: function(a, b, c) {
			this.Ra.push({
				method: "getPoint",
				arguments: [a, b, c]
			})
		},
		cm: function(a, b, c) {
			this.Ra.push({
				method: "getLocation",
				arguments: [a, b, c]
			})
		},
		toString: ea("Geocoder")
	});
	var qe = pe.prototype;
	U(qe, {
		getPoint: qe.em,
		getLocation: qe.cm
	});

	function Geolocation(a) {
		a = a || {};
		this.R = {
			timeout: a.timeout || 1E4,
			maximumAge: a.maximumAge || 6E5,
			enableHighAccuracy: a.enableHighAccuracy || t,
			ti: a.SDKLocation || t
		};
		this.ne = [];
		var b = this;
		K.load("othersearch", function() {
			for (var a = 0, e; e = b.ne[a]; a++) b[e.method].apply(b, e.arguments)
		})
	}
	z.extend(Geolocation.prototype, {
		getCurrentPosition: function(a, b) {
			this.ne.push({
				method: "getCurrentPosition",
				arguments: arguments
			})
		},
		getStatus: function() {
			return Nd
		},
		enableSDKLocation: function() {
			I() && (this.R.ti = p)
		},
		disableSDKLocation: function() {
			this.R.ti = t
		}
	});

	function ue(a) {
		a = a || {};
		a.pa = a.renderOptions || {};
		this.m = {
			pa: {
				map: a.pa.map || s
			}
		};
		this.Ra = [];
		var b = this;
		K.load("othersearch", function() {
			b.Rd()
		})
	}
	z.wa(ue, z.lang.Ga, "LocalCity");
	z.extend(ue.prototype, {
		get: function(a) {
			this.Ra.push({
				method: "get",
				arguments: [a]
			})
		},
		toString: ea("LocalCity")
	});

	function ve() {
		this.Ra = [];
		var a = this;
		K.load("othersearch", function() {
			a.Rd()
		})
	}
	z.wa(ve, z.lang.Ga, "Boundary");
	z.extend(ve.prototype, {
		get: function(a, b) {
			this.Ra.push({
				method: "get",
				arguments: [a, b]
			})
		},
		toString: ea("Boundary")
	});

	function we(a, b) {
		X.call(this, a, b);
		this.MO = Xd;
		this.OO = $d;
		this.LO = Yd;
		this.NO = ae;
		this.Ra = [];
		var c = this;
		K.load("buslinesearch", function() {
			c.Rd()
		})
	}
	we.Qu = H.sa + "iw_plus.gif";
	we.FR = H.sa + "iw_minus.gif";
	we.wT = H.sa + "stop_icon.png";
	z.wa(we, X);
	z.extend(we.prototype, {
		getBusList: function(a) {
			this.Ra.push({
				method: "getBusList",
				arguments: [a]
			})
		},
		getBusLine: function(a) {
			this.Ra.push({
				method: "getBusLine",
				arguments: [a]
			})
		},
		setGetBusListCompleteCallback: function(a) {
			this.m.oM = a || u()
		},
		setGetBusLineCompleteCallback: function(a) {
			this.m.nM = a || u()
		},
		setBusListHtmlSetCallback: function(a) {
			this.m.lM = a || u()
		},
		setBusLineHtmlSetCallback: function(a) {
			this.m.kM = a || u()
		},
		setPolylinesSetCallback: function(a) {
			this.m.cE = a || u()
		}
	});

	function xe(a) {
		X.call(this, a);
		a = a || {};
		this.$a = {
			input: a.input || s,
			rB: a.baseDom || s,
			types: a.types || [],
			Zs: a.onSearchComplete || u()
		};
		this.zd.src = a.location || "\u5168\u56fd";
		this.Qi = "";
		this.jg = s;
		this.jH = "";
		this.Gi();
		Ta(Ka);
		var b = this;
		K.load("autocomplete", function() {
			b.Rd()
		})
	}
	z.wa(xe, X, "Autocomplete");
	z.extend(xe.prototype, {
		Gi: u(),
		show: u(),
		aa: u(),
		GE: function(a) {
			this.$a.types = a
		},
		Hm: function(a) {
			this.zd.src = a
		},
		search: ca("Qi"),
		Sx: ca("jH"),
		xt: function(a) {
			this.$a.Zs = a
		}
	});
	var Wa;

	function Ra(a, b) {
		function c() {
			f.m.visible ? ("inter" === f.Ie && f.m.haveBreakId && f.m.indoorExitControl === p ? z.U.show(f.Lz) : z.U.aa(f.Lz),
				this.m.closeControl && this.xf && this.M && this.M.Ta() === this.P ? z.U.show(f.xf) : z.U.aa(f.xf), this.m.forceCloseControl &&
				z.U.show(f.xf)) : (z.U.aa(f.xf), z.U.aa(f.Lz))
		}
		this.P = "string" == typeof a ? z.da(a) : a;
		this.ea = ye++;
		this.m = {
			enableScrollWheelZoom: p,
			panoramaRenderer: "flash",
			swfSrc: D.Zh("main_domain_nocdn", "res/swf/") + "APILoader.swf",
			visible: p,
			indoorExitControl: p,
			indoorFloorControl: t,
			linksControl: p,
			clickOnRoad: p,
			navigationControl: p,
			closeControl: p,
			indoorSceneSwitchControl: p,
			albumsControl: t,
			albumsControlOptions: {},
			copyrightControlOptions: {},
			forceCloseControl: t,
			haveBreakId: t
		};
		var b = b || {},
			e;
		for (e in b) this.m[e] = b[e];
		b.closeControl === p && (this.m.forceCloseControl = p);
		b.useWebGL === t && Qa(t);
		this.Ha = {
			heading: 0,
			pitch: 0
		};
		this.Bn = [];
		this.Mb = this.bb = s;
		this.Sj = this.zq();
		this.Ba = [];
		this.Kc = 1;
		this.Ie = this.dS = this.Yk = "";
		this.He = {};
		this.Jf = s;
		this.Og = [];
		this.Rq = [];
		"cvsRender" == this.Sj || Qa() ? (this.Kj = 90, this.Mj = -90) : "cssRender" == this.Sj && (this.Kj = 45, this.Mj = -
			45);
		this.Vq = t;
		var f = this;
		this.Cn = function() {
			this.Sj === "flashRender" ? K.load("panoramaflash", function() {
				f.Gi()
			}, p) : K.load("panorama", function() {
				f.jb()
			}, p);
			b.jf == "api" ? Ta(Ga) : Ta(Ha);
			this.Cn = u()
		};
		this.m.QR !== p && (this.Cn(), D.Tp("cus.fire", "count", "z_loadpanoramacount"));
		this.HS(this.P);
		this.addEventListener("id_changed", function() {
			Ta(Fa, {
				from: b.jf
			})
		});
		this.ZO();
		this.addEventListener("indoorexit_options_changed", c);
		this.addEventListener("scene_type_changed", c);
		this.addEventListener("onclose_options_changed", c);
		this.addEventListener("onvisible_changed", c)
	}
	var ze = 4,
		Ae = 1,
		ye = 0;
	z.lang.wa(Ra, z.lang.Ga, "Panorama");
	z.extend(Ra.prototype, {
		ZO: function() {
			var a = this,
				b = this.xf = O("div");
			b.className = "pano_close";
			b.style.cssText = "z-index: 1201;display: none";
			b.title = "\u9000\u51fa\u5168\u666f";
			b.onclick = function() {
				a.aa()
			};
			this.P.appendChild(b);
			var c = this.Lz = O("a");
			c.className = "pano_pc_indoor_exit";
			c.style.cssText = "z-index: 1201;display: none";
			c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
			c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
			c.onclick = function() {
				a.yo()
			};
			this.P.appendChild(c);
			window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor =
				"rgb(37,37,37)")
		},
		yo: u(),
		HS: function(a) {
			var b, c;
			b = a.style;
			c = Ya(a).position;
			"absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
			if ("absolute" === c || "relative" === c)
				if (a = Ya(a).zIndex, !a || "auto" === a) b.zIndex = 0
		},
		IW: x("Bn"),
		Yb: x("bb"),
		iX: x("zv"),
		pN: x("zv"),
		ja: x("Mb"),
		Ia: x("Ha"),
		ka: x("Kc"),
		$i: x("Yk"),
		V2: function() {
			return this.g1 || []
		},
		Q2: x("dS"),
		xs: x("Ie"),
		Vx: function(a) {
			a !== this.Ie && (this.Ie = a, this.dispatchEvent(new Q("onscene_type_changed")))
		},
		Cc: function(a, b, c) {
			"object" === typeof b && (c = b, b = l);
			a != this.bb && (this.il = this.bb, this.jl = this.Mb, this.bb = a, this.Ie = b || "street", this.Mb = s, c && c
				.pov && this.qd(c.pov))
		},
		ua: function(a) {
			a.oc(this.Mb) || (this.il = this.bb, this.jl = this.Mb, this.Mb = a, this.bb = s)
		},
		qd: function(a) {
			a && (this.Ha = a, a = this.Ha.pitch, a > this.Kj ? a = this.Kj : a < this.Mj && (a = this.Mj), this.Vq = p,
				this.Ha.pitch = a)
		},
		SZ: function(a, b) {
			this.Mj = 0 <= a ? 0 : a;
			this.Kj = 0 >= b ? 0 : b
		},
		Qc: function(a) {
			a != this.Kc && (a > ze && (a = ze), a < Ae && (a = Ae), a != this.Kc && (this.Kc = a), "cssRender" === this.Sj &&
				this.qd(this.Ha))
		},
		NA: function() {
			if (this.M)
				for (var a = this.M.Pw(), b = 0; b < a.length; b++)(a[b] instanceof V || a[b] instanceof uc) && a[b].point &&
					this.Ba.push(a[b])
		},
		DE: ca("M"),
		vt: function(a) {
			this.Jf = a || "none"
		},
		Dk: function(a) {
			for (var b in a) {
				if ("object" == typeof a[b])
					for (var c in a[b]) this.m[b][c] = a[b][c];
				else this.m[b] = a[b];
				a.closeControl === p && (this.m.forceCloseControl = p);
				a.closeControl === t && (this.m.forceCloseControl = t);
				switch (b) {
					case "linksControl":
						this.dispatchEvent(new Q("onlinks_visible_changed"));
						break;
					case "clickOnRoad":
						this.dispatchEvent(new Q("onclickonroad_changed"));
						break;
					case "navigationControl":
						this.dispatchEvent(new Q("onnavigation_visible_changed"));
						break;
					case "indoorSceneSwitchControl":
						this.dispatchEvent(new Q("onindoor_default_switch_mode_changed"));
						break;
					case "albumsControl":
						this.dispatchEvent(new Q("onalbums_visible_changed"));
						break;
					case "albumsControlOptions":
						this.dispatchEvent(new Q("onalbums_options_changed"));
						break;
					case "copyrightControlOptions":
						this.dispatchEvent(new Q("oncopyright_options_changed"));
						break;
					case "closeControl":
						this.dispatchEvent(new Q("onclose_options_changed"));
						break;
					case "indoorExitControl":
						this.dispatchEvent(new Q("onindoorexit_options_changed"));
						break;
					case "indoorFloorControl":
						this.dispatchEvent(new Q("onindoorfloor_options_changed"))
				}
			}
		},
		tk: function() {
			this.rl.style.visibility = "hidden"
		},
		Zx: function() {
			this.rl.style.visibility = "visible"
		},
		SV: function() {
			this.m.enableScrollWheelZoom = p
		},
		tV: function() {
			this.m.enableScrollWheelZoom = t
		},
		show: function() {
			this.m.visible = p
		},
		aa: function() {
			this.m.visible = t
		},
		zq: function() {
			return Xa() && !I() && "javascript" != this.m.panoramaRenderer ? "flashRender" : !I() && Ob() ? "cvsRender" :
				"cssRender"
		},
		Pa: function(a) {
			this.He[a.kd] = a
		},
		Tb: function(a) {
			delete this.He[a]
		},
		oD: function() {
			return this.m.visible
		},
		$g: function() {
			return new P(this.P.clientWidth, this.P.clientHeight)
		},
		Ta: x("P"),
		pK: function() {
			var a = D.Zh("baidumap", "?"),
				b = this.Yb();
			if (b) {
				var b = {
						panotype: this.xs(),
						heading: this.Ia().heading,
						pitch: this.Ia().pitch,
						pid: b,
						panoid: b,
						from: "api"
					},
					c;
				for (c in b) a += c + "=" + b[c] + "&"
			}
			return a.slice(0, -1)
		},
		Yw: function() {
			this.Dk({
				copyrightControlOptions: {
					logoVisible: t
				}
			})
		},
		KE: function() {
			this.Dk({
				copyrightControlOptions: {
					logoVisible: p
				}
			})
		},
		jB: function(a) {
			function b(a, b) {
				return function() {
					a.Rq.push({
						$L: b,
						ZL: arguments
					})
				}
			}
			for (var c = a.getPanoMethodList(), e = "", f = 0, g = c.length; f < g; f++) e = c[f], this[e] = b(this, e);
			this.Og.push(a)
		},
		oE: function(a) {
			for (var b = this.Og.length; b--;) this.Og[b] === a && this.Og.splice(b, 1)
		},
		CE: u()
	});
	var Be = Ra.prototype;
	U(Be, {
		setId: Be.Cc,
		setPosition: Be.ua,
		setPov: Be.qd,
		setZoom: Be.Qc,
		setOptions: Be.Dk,
		getId: Be.Yb,
		getPosition: Be.ja,
		getPov: Be.Ia,
		getZoom: Be.ka,
		getLinks: Be.IW,
		getBaiduMapUrl: Be.pK,
		hideMapLogo: Be.Yw,
		showMapLogo: Be.KE,
		enableDoubleClickZoom: Be.g2,
		disableDoubleClickZoom: Be.X1,
		enableScrollWheelZoom: Be.SV,
		disableScrollWheelZoom: Be.tV,
		show: Be.show,
		hide: Be.aa,
		addPlugin: Be.jB,
		removePlugin: Be.oE,
		getVisible: Be.oD,
		addOverlay: Be.Pa,
		removeOverlay: Be.Tb,
		getSceneType: Be.xs,
		setPanoramaPOIType: Be.vt,
		exitInter: Be.yo,
		setInteractiveState: Be.CE
	});
	U(window, {
		BMAP_PANORAMA_POI_HOTEL: "hotel",
		BMAP_PANORAMA_POI_CATERING: "catering",
		BMAP_PANORAMA_POI_MOVIE: "movie",
		BMAP_PANORAMA_POI_TRANSIT: "transit",
		BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
		BMAP_PANORAMA_POI_NONE: "none",
		BMAP_PANORAMA_INDOOR_SCENE: "inter",
		BMAP_PANORAMA_STREET_SCENE: "street"
	});

	function Ce() {
		z.lang.Ga.call(this);
		this.kd = "PanoramaOverlay_" + this.ea;
		this.W = s;
		this.Sa = p
	}
	z.lang.wa(Ce, z.lang.Ga, "PanoramaOverlayBase");
	z.extend(Ce.prototype, {
		R2: x("kd"),
		xa: function() {
			aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
		},
		remove: function() {
			aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
		},
		If: function() {
			aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
		}
	});

	function De(a, b) {
		Ce.call(this);
		var c = {
				position: s,
				altitude: 2,
				displayDistance: p
			},
			b = b || {},
			e;
		for (e in b) c[e] = b[e];
		this.Mb = c.position;
		this.zj = a;
		this.Up = c.altitude;
		this.jQ = c.displayDistance;
		this.UE = c.color;
		this.cL = c.hoverColor;
		this.backgroundColor = c.backgroundColor;
		this.eJ = c.backgroundHoverColor;
		this.borderColor = c.borderColor;
		this.iJ = c.borderHoverColor;
		this.fontSize = c.fontSize;
		this.padding = c.padding;
		this.uD = c.imageUrl;
		this.size = c.size;
		this.ve = c.image;
		this.width = c.width;
		this.height = c.height;
		this.CX = c.imageData;
		this.borderWidth = c.borderWidth
	}
	z.lang.wa(De, Ce, "PanoramaLabel");
	z.extend(De.prototype, {
		w2: x("borderWidth"),
		getImageData: x("CX"),
		hm: x("UE"),
		L2: x("cL"),
		s2: x("backgroundColor"),
		t2: x("eJ"),
		u2: x("borderColor"),
		v2: x("iJ"),
		J2: x("fontSize"),
		S2: x("padding"),
		M2: x("uD"),
		Hb: x("size"),
		Jw: x("ve"),
		ua: function(a) {
			this.Mb = a;
			this.If("position", a)
		},
		ja: x("Mb"),
		cd: function(a) {
			this.zj = a;
			this.If("content", a)
		},
		lk: x("zj"),
		wE: function(a) {
			this.Up = a;
			this.If("altitude", a)
		},
		Co: x("Up"),
		Ia: function() {
			var a = this.ja(),
				b = s,
				c = s;
			this.W && (c = this.W.ja());
			if (a && c)
				if (a.oc(c)) b = this.W.Ia();
				else {
					b = {};
					b.heading = Ee(a.lng - c.lng, a.lat - c.lat) || 0;
					var a = b,
						c = this.Co(),
						e = this.wn();
					a.pitch = Math.round(180 * (Math.atan(c / e) / Math.PI)) || 0
				} return b
		},
		wn: function() {
			var a = 0,
				b, c;
			this.W && (b = this.W.ja(), (c = this.ja()) && !c.oc(b) && (a = S.Eo(b, c)));
			return a
		},
		aa: function() {
			aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
		},
		show: function() {
			aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
		},
		If: u()
	});
	var Fe = De.prototype;
	U(Fe, {
		setPosition: Fe.ua,
		getPosition: Fe.ja,
		setContent: Fe.cd,
		getContent: Fe.lk,
		setAltitude: Fe.wE,
		getAltitude: Fe.Co,
		getPov: Fe.Ia,
		show: Fe.show,
		hide: Fe.aa
	});

	function Ge(a, b) {
		Ce.call(this);
		var c = {
				icon: "",
				title: "",
				panoInfo: s,
				altitude: 2
			},
			b = b || {},
			e;
		for (e in b) c[e] = b[e];
		this.Mb = a;
		this.gH = c.icon;
		this.yI = c.title;
		this.Up = c.altitude;
		this.uS = c.panoInfo;
		this.Ha = {
			heading: 0,
			pitch: 0
		}
	}
	z.lang.wa(Ge, Ce, "PanoramaMarker");
	z.extend(Ge.prototype, {
		ua: function(a) {
			this.Mb = a;
			this.If("position", a)
		},
		ja: x("Mb"),
		Dc: function(a) {
			this.yI = a;
			this.If("title", a)
		},
		Ko: x("yI"),
		Ub: function(a) {
			this.gH = icon;
			this.If("icon", a)
		},
		Fo: x("gH"),
		wE: function(a) {
			this.Up = a;
			this.If("altitude", a)
		},
		Co: x("Up"),
		dD: x("uS"),
		Ia: function() {
			var a = s;
			if (this.W) {
				var a = this.W.ja(),
					b = this.ja(),
					a = Ee(b.lng - a.lng, b.lat - a.lat);
				isNaN(a) && (a = 0);
				a = {
					heading: a,
					pitch: 0
				}
			} else a = this.Ha;
			return a
		},
		If: u()
	});
	var He = Ge.prototype;
	U(He, {
		setPosition: He.ua,
		getPosition: He.ja,
		setTitle: He.Dc,
		getTitle: He.Ko,
		setAltitude: He.wE,
		getAltitude: He.Co,
		getPanoInfo: He.dD,
		getIcon: He.Fo,
		setIcon: He.Ub,
		getPov: He.Ia
	});

	function Ee(a, b) {
		var c = 0;
		if (0 !== a && 0 !== b) {
			var c = 180 * (Math.atan(a / b) / Math.PI),
				e = 0;
			0 < a && 0 > b && (e = 90);
			0 > a && 0 > b && (e = 180);
			0 > a && 0 < b && (e = 270);
			c = (c + 90) % 90 + e
		} else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
		return Math.round(c)
	}

	function Qa(a) {
		if ("boolean" === typeof Ie) return Ie;
		if (a === t || !window.WebGLRenderingContext) return Ie = t;
		if (z.platform.jj) {
			a = 0;
			try {
				a = navigator.userAgent.split("Android ")[1].charAt(0)
			} catch (b) {}
			if (5 > a) return Ie = t
		}
		var a = document.createElement("canvas"),
			c = s;
		try {
			c = a.getContext("webgl")
		} catch (e) {
			Ie = t
		}
		return Ie = c === s ? t : p
	}
	var Ie;

	function Je() {
		if ("boolean" === typeof Ke) return Ke;
		Ke = p;
		if (z.platform.DD) return p;
		var a = navigator.userAgent;
		return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? p : Ke = t
	}
	var Ke;

	function ec(a, b) {
		this.W = a || s;
		var c = this;
		c.W && c.ga();
		K.load("pservice", function() {
			c.DP()
		});
		"api" == (b || {}).jf ? Ta(Ia) : Ta(Ja);
		this.xd = {
			getPanoramaById: [],
			getPanoramaByLocation: [],
			getVisiblePOIs: [],
			getRecommendPanosById: [],
			getPanoramaVersions: [],
			checkPanoSupportByCityCode: [],
			getPanoramaByPOIId: [],
			getCopyrightProviders: []
		}
	}
	D.wm(function(a) {
		"flashRender" !== a.zq() && new ec(a, {
			jf: "api"
		})
	});
	z.extend(ec.prototype, {
		ga: function() {
			function a(a) {
				if (a) {
					if (a.id != b.zv) {
						b.pN(a.id);
						b.ia = a;
						Je() || b.dispatchEvent(new Q("onthumbnail_complete"));
						b.bb != s && (b.jl = b._position);
						for (var c in a)
							if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
								case "position":
									b.Mb = a[c];
									break;
								case "id":
									b.bb = a[c];
									break;
								case "links":
									b.Bn = a[c];
									break;
								case "zoom":
									b.Kc = a[c]
							}
						if (b.jl) {
							var g = b.jl,
								i = b._position;
							c = g.lat;
							var k = i.lat,
								m = Pb(k - c),
								g = Pb(i.lng - g.lng);
							c = Math.sin(m / 2) * Math.sin(m / 2) + Math.cos(Pb(c)) * Math.cos(Pb(k)) * Math.sin(g / 2) * Math.sin(g / 2);
							b.wG = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
						}
						c = new Q("ondataload");
						c.data = a;
						b.dispatchEvent(c);
						b.dispatchEvent(new Q("onposition_changed"));
						b.dispatchEvent(new Q("onlinks_changed"));
						b.dispatchEvent(new Q("oncopyright_changed"), {
							copyright: a.copyright
						});
						a.Ol && b.m.closeControl ? z.U.show(b.CQ) : z.U.aa(b.CQ)
					}
				} else b.bb = b.il, b.Mb = b.jl, b.dispatchEvent(new Q("onnoresult"))
			}
			var b = this.W,
				c = this;
			b.addEventListener("id_changed", function() {
				c.Io(b.Yb(), a)
			});
			b.addEventListener("iid_changed", function() {
				c.Pg(ec.Tk + "qt=idata&iid=" + b.Hz + "&fn=", function(b) {
					if (b && b.result && 0 == b.result.error) {
						var b = b.content[0].interinfo,
							f = {};
						f.Ol = b.BreakID;
						for (var g = b.Defaultfloor, i = s, k = 0; k < b.Floors.length; k++)
							if (b.Floors[k].Floor == g) {
								i = b.Floors[k];
								break
							} f.id = i.StartID || i.Points[0].PID;
						c.Io(f.id, a, f)
					}
				})
			});
			b.addEventListener("position_changed_inner", function() {
				c.dj(b.ja(), a)
			})
		},
		Io: function(a, b) {
			this.xd.getPanoramaById.push(arguments)
		},
		dj: function(a, b, c) {
			this.xd.getPanoramaByLocation.push(arguments)
		},
		pD: function(a, b, c, e) {
			this.xd.getVisiblePOIs.push(arguments)
		},
		Sw: function(a, b) {
			this.xd.getRecommendPanosById.push(arguments)
		},
		Rw: function(a) {
			this.xd.getPanoramaVersions.push(arguments)
		},
		wB: function(a, b) {
			this.xd.checkPanoSupportByCityCode.push(arguments)
		},
		Qw: function(a, b) {
			this.xd.getPanoramaByPOIId.push(arguments)
		},
		tK: function(a) {
			this.xd.getCopyrightProviders.push(arguments)
		}
	});
	var Le = ec.prototype;
	U(Le, {
		getPanoramaById: Le.Io,
		getPanoramaByLocation: Le.dj,
		getPanoramaByPOIId: Le.Qw
	});

	function dc(a) {
		Mc.call(this);
		"api" == (a || {}).jf ? Ta(Ca) : Ta(Da)
	}
	dc.QF = D.Zh("pano", "tile/");
	dc.prototype = new Mc;
	dc.prototype.getTilesUrl = function(a, b) {
		var c = dc.QF[(a.x + a.y) % dc.QF.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
		z.fa.ma && 6 >= z.fa.ma && (c += "&color_dep=32");
		return c
	};
	dc.prototype.Os = ea(p);
	Me.Vd = new S;

	function Me() {}
	z.extend(Me, {
		uV: function(a, b, c) {
			c = z.lang.Mc(c);
			b = {
				data: b
			};
			"position_changed" == a && (b.data = Me.Vd.pj(new R(b.data.mercatorX, b.data.mercatorY)));
			c.dispatchEvent(new Q("on" + a), b)
		}
	});
	var Ne = Me;
	U(Ne, {
		dispatchFlashEvent: Ne.uV
	});
	var Oe = {
		DO: 50
	};
	Oe.gu = D.Zh("pano")[0];
	Oe.eu = {
		width: 220,
		height: 60
	};
	z.extend(Oe, {
		lL: function(a, b, c, e) {
			if (!b || !c || !c.lngLat || !c.panoInstance) e();
			else {
				this.Hn === l && (this.Hn = new ec(s, {
					jf: "api"
				}));
				var f = this;
				this.Hn.wB(b, function(b) {
					b ? f.Hn.dj(c.lngLat, Oe.DO, function(b) {
						if (b && b.id) {
							var g = b.id,
								m = b.ih,
								b = b.jh,
								n = ec.Vd.ug(c.lngLat),
								o = f.hR(n, {
									x: m,
									y: b
								}),
								m = f.EK(g, o, 0, Oe.eu.width, Oe.eu.height);
							a.content = f.iR(a.content, m, c.titleTip, c.beforeDomId);
							a.addEventListener("open", function() {
								ja.V(z.Ec("infoWndPano"), "click", function() {
									c.panoInstance.Cc(g);
									c.panoInstance.show();
									c.panoInstance.qd({
										heading: o,
										pitch: 0
									})
								})
							})
						}
						e()
					}) : e()
				})
			}
		},
		iR: function(a, b, c, e) {
			var c = c || "",
				f;
			!e || !a.split(e)[0] ? (e = a, a = "") : (e = a.split(e)[0], f = e.lastIndexOf("<"), e = a.substring(0, f), a =
				a.substring(f));
			f = [];
			var g = Oe.eu.width,
				i = Oe.eu.height;
			f.push(e);
			f.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + i + "px;width:" + g +
				"px; margin-top: -19px;'>");
			f.push("<img class='pano_thumnail_img' width='" + g + "' height='" + i + "' border='0' alt='" + c +
				"\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b +
				"' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + g + ", " + i + ");' />");
			f.push("<div class='panoInfoBoxTitleBg' style='width:" + g +
				"px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>"
			);
			f.push("</div>");
			f.push(a);
			return f.join("")
		},
		hR: function(a, b) {
			var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
			0 > c && (c += 360);
			return c
		},
		EK: function(a, b, c, e, f) {
			var g = {
				panoId: a,
				panoHeading: b || 0,
				panoPitch: c || 0,
				width: e,
				height: f
			};
			return (Oe.gu +
				"?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}"
			).replace(/\{(.*?)\}/g, function(a, b) {
				return g[b]
			})
		}
	});
	var Pe = document,
		Qe = Math,
		Re = Pe.createElement("div").style,
		Se;
	a: {
		for (var Te = ["t", "webkitT", "MozT", "msT", "OT"], Ue, Ve = 0, We = Te.length; Ve < We; Ve++)
			if (Ue = Te[Ve] + "ransform", Ue in Re) {
				Se = Te[Ve].substr(0, Te[Ve].length - 1);
				break a
			} Se = t
	}
	var Xe = Se ? "-" + Se.toLowerCase() + "-" : "",
		Ze = Ye("transform"),
		$e = Ye("transitionProperty"),
		af = Ye("transitionDuration"),
		bf = Ye("transformOrigin"),
		cf = Ye("transitionTimingFunction"),
		df = Ye("transitionDelay"),
		ne = /android/gi.test(navigator.appVersion),
		ef = /iphone|ipad/gi.test(navigator.appVersion),
		ff = /hp-tablet/gi.test(navigator.appVersion),
		gf = Ye("perspective") in Re,
		hf = "ontouchstart" in window && !ff,
		jf = Se !== t,
		kf = Ye("transition") in Re,
		lf = "onorientationchange" in window ? "orientationchange" : "resize",
		mf = hf ? "touchstart" : "mousedown",
		nf = hf ? "touchmove" : "mousemove",
		of = hf ? "touchend" : "mouseup",
		pf = hf ? "touchcancel" : "mouseup",
		qf = Se === t ? t : {
			"": "transitionend",
			webkit: "webkitTransitionEnd",
			Moz: "transitionend",
			O: "otransitionend",
			ms: "MSTransitionEnd"
		} [Se],
		rf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window
		.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
			return setTimeout(a, 1)
		},
		sf = window.cancelRequestAnimationFrame || window.y5 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame ||
		window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
		tf = gf ? " translateZ(0)" : "";

	function uf(a, b) {
		var c = this,
			e;
		c.Sm = "object" == typeof a ? a : Pe.getElementById(a);
		c.Sm.style.overflow = "hidden";
		c.Pb = c.Sm.children[0];
		c.options = {
			Oo: p,
			Pm: p,
			x: 0,
			y: 0,
			jo: p,
			qU: t,
			sx: p,
			RD: p,
			Mk: p,
			qi: t,
			A_: 0,
			aw: t,
			Vw: p,
			$h: p,
			ri: p,
			EC: ne,
			Zw: ef,
			$V: ef && gf,
			tE: "",
			zoom: t,
			Ok: 1,
			Cp: 4,
			wV: 2,
			iO: "scroll",
			Et: t,
			by: 1,
			rM: s,
			jM: function(a) {
				a.preventDefault()
			},
			uM: s,
			iM: s,
			tM: s,
			hM: s,
			yx: s,
			vM: s,
			mM: s,
			ap: s,
			wM: s,
			$o: s
		};
		for (e in b) c.options[e] = b[e];
		c.x = c.options.x;
		c.y = c.options.y;
		c.options.Mk = jf && c.options.Mk;
		c.options.$h = c.options.Oo && c.options.$h;
		c.options.ri = c.options.Pm && c.options.ri;
		c.options.zoom = c.options.Mk && c.options.zoom;
		c.options.qi = kf && c.options.qi;
		c.options.zoom && ne && (tf = "");
		c.Pb.style[$e] = c.options.Mk ? Xe + "transform" : "top left";
		c.Pb.style[af] = "0";
		c.Pb.style[bf] = "0 0";
		c.options.qi && (c.Pb.style[cf] = "cubic-bezier(0.33,0.66,0.66,1)");
		c.options.Mk ? c.Pb.style[Ze] = "translate(" + c.x + "px," + c.y + "px)" + tf : c.Pb.style.cssText +=
			";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
		c.options.qi && (c.options.EC = p);
		c.refresh();
		c.ga(lf, window);
		c.ga(mf);
		!hf && "none" != c.options.iO && (c.ga("DOMMouseScroll"), c.ga("mousewheel"));
		c.options.aw && (c.CU = setInterval(function() {
			c.BP()
		}, 500));
		this.options.Vw && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b,
			c) {
			var e = Node.prototype.removeEventListener;
			a === "click" ? e.call(document.body, a, b.bL || b, c) : e.call(document.body, a, b, c)
		}, document.body.addEventListener = function(a, b, c) {
			var e = Node.prototype.addEventListener;
			a === "click" ? e.call(document.body, a, b.bL || (b.bL = function(a) {
				a.bZ || b(a)
			}), c) : e.call(document.body, a, b, c)
		}), c.ga("click", document.body, p))
	}
	uf.prototype = {
		enabled: p,
		x: 0,
		y: 0,
		qj: [],
		scale: 1,
		MB: 0,
		NB: 0,
		Ue: [],
		pf: [],
		qB: s,
		ly: 0,
		handleEvent: function(a) {
			switch (a.type) {
				case mf:
					if (!hf && 0 !== a.button) break;
					this.sv(a);
					break;
				case nf:
					this.fS(a);
					break;
				case of:
				case pf:
					this.Du(a);
					break;
				case lf:
					this.GA();
					break;
				case "DOMMouseScroll":
				case "mousewheel":
					this.JT(a);
					break;
				case qf:
					this.FT(a);
					break;
				case "click":
					this.LP(a)
			}
		},
		BP: function() {
			!this.hh && (!this.Pk && !(this.Ll || this.Rx == this.Pb.offsetWidth * this.scale && this.jp == this.Pb.offsetHeight *
				this.scale)) && this.refresh()
		},
		jv: function(a) {
			var b;
			this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = Pe.createElement("div"), this.options.tE ? b.className =
				this.options.tE + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ?
					"height:7px;bottom:1px;left:2px;right:" + (this.ri ? "7" : "2") + "px" : "width:7px;bottom:" + (this.$h ? "7" :
						"2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + Xe +
				"transition-property:opacity;" + Xe + "transition-duration:" + (this.options.$V ? "350ms" : "0") +
				";overflow:hidden;opacity:" + (this.options.Zw ? "0" : "1"), this.Sm.appendChild(b), this[a +
					"ScrollbarWrapper"] = b, b = Pe.createElement("div"), this.options.tE || (b.style.cssText =
					"position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + Xe +
					"background-clip:padding-box;" + Xe + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") +
					";" + Xe + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + Xe +
				"transition-property:" + Xe + "transform;" + Xe + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" +
				Xe + "transition-duration:0;" + Xe + "transform: translate(0,0)" + tf, this.options.qi && (b.style.cssText +=
					";" + Xe + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(
					b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.YK = this.ZK.clientWidth, this.tX = Qe.max(Qe.round(
				this.YK * this.YK / this.Rx), 8), this.sX.style.width = this.tX + "px") : (this.aO = this.bO.clientHeight,
				this.V_ = Qe.max(Qe.round(this.aO * this.aO / this.jp), 8), this.U_.style.height = this.V_ + "px"), this.HA(a,
				p)) : this[a + "ScrollbarWrapper"] && (jf && (this[a + "ScrollbarIndicator"].style[Ze] = ""), this[a +
					"ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = s,
				this[a + "ScrollbarIndicator"] = s)
		},
		GA: function() {
			var a = this;
			setTimeout(function() {
				a.refresh()
			}, ne ? 200 : 0)
		},
		Uq: function(a, b) {
			this.Pk || (a = this.Oo ? a : 0, b = this.Pm ? b : 0, this.options.Mk ? this.Pb.style[Ze] = "translate(" + a +
				"px," + b + "px) scale(" + this.scale + ")" + tf : (a = Qe.round(a), b = Qe.round(b), this.Pb.style.left = a +
					"px", this.Pb.style.top = b + "px"), this.x = a, this.y = b, this.HA("h"), this.HA("v"))
		},
		HA: function(a, b) {
			var c = "h" == a ? this.x : this.y;
			this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.EC || (c = this[a +
					"ScrollbarIndicatorSize"] + Qe.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ?
					"width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.EC ? c = this[a +
					"ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - Qe.round(3 * (c - this[a +
					"ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" :
					"height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a +
					"ScrollbarWrapper"].style[df] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Zw ? "0" :
				"1", this[a + "ScrollbarIndicator"].style[Ze] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + tf
			)
		},
		LP: function(a) {
			if (a.DQ === p) return this.fB = a.target, this.Bw = Date.now(), p;
			if (this.fB && this.Bw) {
				if (600 < Date.now() - this.Bw) return this.Bw = this.fB = s, p
			} else {
				for (var b = a.target; b != this.Pb && b != document.body;) b = b.parentNode;
				if (b == document.body) return p
			}
			for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
			b = b.tagName.toLowerCase();
			if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() :
				a.bZ = p, a.stopPropagation(), a.preventDefault(), this.Bw = this.fB = s, t
		},
		sv: function(a) {
			var b = hf ? a.touches[0] : a,
				c, e;
			if (this.enabled) {
				this.options.jM && this.options.jM.call(this, a);
				(this.options.qi || this.options.zoom) && this.AI(0);
				this.Pk = this.Ll = this.hh = t;
				this.VB = this.UB = this.Lv = this.Kv = this.aC = this.$B = 0;
				this.options.zoom && (hf && 1 < a.touches.length) && (e = Qe.abs(a.touches[0].pageX - a.touches[1].pageX), c =
					Qe.abs(a.touches[0].pageY - a.touches[1].pageY), this.C_ = Qe.sqrt(e * e + c * c), this.Ax = Qe.abs(a.touches[
						0].pageX + a.touches[1].pageX - 2 * this.lF) / 2 - this.x, this.Bx = Qe.abs(a.touches[0].pageY + a.touches[1]
						.pageY - 2 * this.mF) / 2 - this.y, this.options.ap && this.options.ap.call(this, a));
				if (this.options.sx && (this.options.Mk ? (c = getComputedStyle(this.Pb, s)[Ze].replace(/[^0-9\-.,]/g, "").split(
						","), e = +(c[12] || c[4]), c = +(c[13] || c[5])) : (e = +getComputedStyle(this.Pb, s).left.replace(
						/[^0-9-]/g, ""), c = +getComputedStyle(this.Pb, s).top.replace(/[^0-9-]/g, "")), e != this.x || c != this.y))
					this.options.qi ? this.Zd(qf) : sf(this.qB), this.qj = [], this.Uq(e, c), this.options.yx && this.options.yx.call(
						this);
				this.Mv = this.x;
				this.Nv = this.y;
				this.Ht = this.x;
				this.It = this.y;
				this.ih = b.pageX;
				this.jh = b.pageY;
				this.startTime = a.timeStamp || Date.now();
				this.options.uM && this.options.uM.call(this, a);
				this.ga(nf, window);
				this.ga( of , window);
				this.ga(pf, window)
			}
		},
		fS: function(a) {
			var b = hf ? a.touches[0] : a,
				c = b.pageX - this.ih,
				e = b.pageY - this.jh,
				f = this.x + c,
				g = this.y + e,
				i = a.timeStamp || Date.now();
			this.options.iM && this.options.iM.call(this, a);
			if (this.options.zoom && hf && 1 < a.touches.length) f = Qe.abs(a.touches[0].pageX - a.touches[1].pageX), g = Qe.abs(
					a.touches[0].pageY - a.touches[1].pageY), this.B_ = Qe.sqrt(f * f + g * g), this.Pk = p, b = 1 / this.C_ * this
				.B_ * this.scale, b < this.options.Ok ? b = 0.5 * this.options.Ok * Math.pow(2, b / this.options.Ok) : b > this.options
				.Cp && (b = 2 * this.options.Cp * Math.pow(0.5, this.options.Cp / b)), this.Uo = b / this.scale, f = this.Ax -
				this.Ax * this.Uo + this.x, g = this.Bx - this.Bx * this.Uo + this.y, this.Pb.style[Ze] = "translate(" + f +
				"px," + g + "px) scale(" + b + ")" + tf, this.options.wM && this.options.wM.call(this, a);
			else {
				this.ih = b.pageX;
				this.jh = b.pageY;
				if (0 < f || f < this.ge) f = this.options.jo ? this.x + c / 2 : 0 <= f || 0 <= this.ge ? 0 : this.ge;
				if (g > this.nf || g < this.od) g = this.options.jo ? this.y + e / 2 : g >= this.nf || 0 <= this.od ? this.nf :
					this.od;
				this.$B += c;
				this.aC += e;
				this.Kv = Qe.abs(this.$B);
				this.Lv = Qe.abs(this.aC);
				6 > this.Kv && 6 > this.Lv || (this.options.RD && (this.Kv > this.Lv + 5 ? (g = this.y, e = 0) : this.Lv > this.Kv +
						5 && (f = this.x, c = 0)), this.hh = p, this.Uq(f, g), this.UB = 0 < c ? -1 : 0 > c ? 1 : 0, this.VB = 0 < e ?
					-1 : 0 > e ? 1 : 0, 300 < i - this.startTime && (this.startTime = i, this.Ht = this.x, this.It = this.y), this
					.options.tM && this.options.tM.call(this, a))
			}
		},
		Du: function(a) {
			if (!(hf && 0 !== a.touches.length)) {
				var b = this,
					c = hf ? a.changedTouches[0] : a,
					e, f, g = {
						Fa: 0,
						time: 0
					},
					i = {
						Fa: 0,
						time: 0
					},
					k = (a.timeStamp || Date.now()) - b.startTime;
				e = b.x;
				f = b.y;
				b.Zd(nf, window);
				b.Zd( of , window);
				b.Zd(pf, window);
				b.options.hM && b.options.hM.call(b, a);
				if (b.Pk) e = b.scale * b.Uo, e = Math.max(b.options.Ok, e), e = Math.min(b.options.Cp, e), b.Uo = e / b.scale,
					b.scale = e, b.x = b.Ax - b.Ax * b.Uo + b.x, b.y = b.Bx - b.Bx * b.Uo + b.y, b.Pb.style[af] = "200ms", b.Pb.style[
						Ze] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + tf, b.Pk = t, b.refresh(), b.options.$o &&
					b.options.$o.call(b, a);
				else {
					if (b.hh) {
						if (300 > k && b.options.sx) {
							g = e ? b.wH(e - b.Ht, k, -b.x, b.Rx - b.Vt + b.x, b.options.jo ? b.Vt : 0) : g;
							i = f ? b.wH(f - b.It, k, -b.y, 0 > b.od ? b.jp - b.Tm + b.y - b.nf : 0, b.options.jo ? b.Tm : 0) : i;
							e = b.x + g.Fa;
							f = b.y + i.Fa;
							if (0 < b.x && 0 < e || b.x < b.ge && e < b.ge) g = {
								Fa: 0,
								time: 0
							};
							if (b.y > b.nf && f > b.nf || b.y < b.od && f < b.od) i = {
								Fa: 0,
								time: 0
							}
						}
						g.Fa || i.Fa ? (c = Qe.max(Qe.max(g.time, i.time), 10), b.options.Et && (g = e - b.Mv, i = f - b.Nv, Qe.abs(g) <
							b.options.by && Qe.abs(i) < b.options.by ? b.scrollTo(b.Mv, b.Nv, 200) : (g = b.qI(e, f), e = g.x, f = g.y,
								c = Qe.max(g.time, c))), b.scrollTo(Qe.round(e), Qe.round(f), c)) : b.options.Et ? (g = e - b.Mv, i = f - b
							.Nv, Qe.abs(g) < b.options.by && Qe.abs(i) < b.options.by ? b.scrollTo(b.Mv, b.Nv, 200) : (g = b.qI(b.x, b.y),
								(g.x != b.x || g.y != b.y) && b.scrollTo(g.x, g.y, g.time))) : b.Jn(200)
					} else {
						if (hf)
							if (b.LJ && b.options.zoom) clearTimeout(b.LJ), b.LJ = s, b.options.ap && b.options.ap.call(b, a), b.zoom(b.ih,
								b.jh, 1 == b.scale ? b.options.wV : 1), b.options.$o && setTimeout(function() {
								b.options.$o.call(b, a)
							}, 200);
							else if (this.options.Vw) {
							for (e = c.target; 1 != e.nodeType;) e = e.parentNode;
							f = e.tagName.toLowerCase();
							"select" != f && "input" != f && "textarea" != f ? (f = Pe.createEvent("MouseEvents"), f.initMouseEvent(
								"click", p, p, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey,
								0, s), f.DQ = p, e.dispatchEvent(f)) : e.focus()
						}
						b.Jn(400)
					}
					b.options.vM && b.options.vM.call(b, a)
				}
			}
		},
		Jn: function(a) {
			var b = 0 <= this.x ? 0 : this.x < this.ge ? this.ge : this.x,
				c = this.y >= this.nf || 0 < this.od ? this.nf : this.y < this.od ? this.od : this.y;
			if (b == this.x && c == this.y) {
				if (this.hh && (this.hh = t, this.options.yx && this.options.yx.call(this)), this.$h && this.options.Zw && (
						"webkit" == Se && (this.ZK.style[df] = "300ms"), this.ZK.style.opacity = "0"), this.ri && this.options.Zw)
					"webkit" == Se && (this.bO.style[df] = "300ms"), this.bO.style.opacity = "0"
			} else this.scrollTo(b, c, a || 0)
		},
		JT: function(a) {
			var b = this,
				c, e;
			if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12, e = a.wheelDeltaY / 12;
			else if ("wheelDelta" in a) c = e = a.wheelDelta / 12;
			else if ("detail" in a) c = e = 3 * -a.detail;
			else return;
			if ("zoom" == b.options.iO) {
				if (e = b.scale * Math.pow(2, 1 / 3 * (e ? e / Math.abs(e) : 0)), e < b.options.Ok && (e = b.options.Ok), e > b.options
					.Cp && (e = b.options.Cp), e != b.scale) !b.ly && b.options.ap && b.options.ap.call(b, a), b.ly++, b.zoom(a.pageX,
					a.pageY, e, 400), setTimeout(function() {
					b.ly--;
					!b.ly && b.options.$o && b.options.$o.call(b, a)
				}, 400)
			} else c = b.x + c, e = b.y + e, 0 < c ? c = 0 : c < b.ge && (c = b.ge), e > b.nf ? e = b.nf : e < b.od && (e = b
				.od), 0 > b.od && b.scrollTo(c, e, 0)
		},
		FT: function(a) {
			a.target == this.Pb && (this.Zd(qf), this.TA())
		},
		TA: function() {
			var a = this,
				b = a.x,
				c = a.y,
				e = Date.now(),
				f, g, i;
			a.Ll || (a.qj.length ? (f = a.qj.shift(), f.x == b && f.y == c && (f.time = 0), a.Ll = p, a.hh = p, a.options.qi) ?
				(a.AI(f.time), a.Uq(f.x, f.y), a.Ll = t, f.time ? a.ga(qf) : a.Jn(0)) : (i = function() {
					var k = Date.now(),
						m;
					if (k >= e + f.time) {
						a.Uq(f.x, f.y);
						a.Ll = t;
						a.options.CY && a.options.CY.call(a);
						a.TA()
					} else {
						k = (k - e) / f.time - 1;
						g = Qe.sqrt(1 - k * k);
						k = (f.x - b) * g + b;
						m = (f.y - c) * g + c;
						a.Uq(k, m);
						if (a.Ll) a.qB = rf(i)
					}
				}, i()) : a.Jn(400))
		},
		AI: function(a) {
			a += "ms";
			this.Pb.style[af] = a;
			this.$h && (this.sX.style[af] = a);
			this.ri && (this.U_.style[af] = a)
		},
		wH: function(a, b, c, e, f) {
			var b = Qe.abs(a) / b,
				g = b * b / 0.0012;
			0 < a && g > c ? (c += f / (6 / (6.0E-4 * (g / b))), b = b * c / g, g = c) : 0 > a && g > e && (e += f / (6 / (
				6.0E-4 * (g / b))), b = b * e / g, g = e);
			return {
				Fa: g * (0 > a ? -1 : 1),
				time: Qe.round(b / 6.0E-4)
			}
		},
		Oj: function(a) {
			for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft, c -= a.offsetTop;
			a != this.Sm && (b *= this.scale, c *= this.scale);
			return {
				left: b,
				top: c
			}
		},
		qI: function(a, b) {
			var c, e, f;
			f = this.Ue.length - 1;
			c = 0;
			for (e = this.Ue.length; c < e; c++)
				if (a >= this.Ue[c]) {
					f = c;
					break
				} f == this.MB && (0 < f && 0 > this.UB) && f--;
			a = this.Ue[f];
			e = (e = Qe.abs(a - this.Ue[this.MB])) ? 500 * (Qe.abs(this.x - a) / e) : 0;
			this.MB = f;
			f = this.pf.length - 1;
			for (c = 0; c < f; c++)
				if (b >= this.pf[c]) {
					f = c;
					break
				} f == this.NB && (0 < f && 0 > this.VB) && f--;
			b = this.pf[f];
			c = (c = Qe.abs(b - this.pf[this.NB])) ? 500 * (Qe.abs(this.y - b) / c) : 0;
			this.NB = f;
			f = Qe.round(Qe.max(e, c)) || 200;
			return {
				x: a,
				y: b,
				time: f
			}
		},
		ga: function(a, b, c) {
			(b || this.Pb).addEventListener(a, this, !!c)
		},
		Zd: function(a, b, c) {
			(b || this.Pb).removeEventListener(a, this, !!c)
		},
		SB: ha(2),
		refresh: function() {
			var a, b, c, e = 0;
			b = 0;
			this.scale < this.options.Ok && (this.scale = this.options.Ok);
			this.Vt = this.Sm.clientWidth || 1;
			this.Tm = this.Sm.clientHeight || 1;
			this.nf = -this.options.A_ || 0;
			this.Rx = Qe.round(this.Pb.offsetWidth * this.scale);
			this.jp = Qe.round((this.Pb.offsetHeight + this.nf) * this.scale);
			this.ge = this.Vt - this.Rx;
			this.od = this.Tm - this.jp + this.nf;
			this.VB = this.UB = 0;
			this.options.rM && this.options.rM.call(this);
			this.Oo = this.options.Oo && 0 > this.ge;
			this.Pm = this.options.Pm && (!this.options.qU && !this.Oo || this.jp > this.Tm);
			this.$h = this.Oo && this.options.$h;
			this.ri = this.Pm && this.options.ri && this.jp > this.Tm;
			a = this.Oj(this.Sm);
			this.lF = -a.left;
			this.mF = -a.top;
			if ("string" == typeof this.options.Et) {
				this.Ue = [];
				this.pf = [];
				c = this.Pb.querySelectorAll(this.options.Et);
				a = 0;
				for (b = c.length; a < b; a++) e = this.Oj(c[a]), e.left += this.lF, e.top += this.mF, this.Ue[a] = e.left <
					this.ge ? this.ge : e.left * this.scale, this.pf[a] = e.top < this.od ? this.od : e.top * this.scale
			} else if (this.options.Et) {
				for (this.Ue = []; e >= this.ge;) this.Ue[b] = e, e -= this.Vt, b++;
				this.ge % this.Vt && (this.Ue[this.Ue.length] = this.ge - this.Ue[this.Ue.length - 1] + this.Ue[this.Ue.length -
					1]);
				b = e = 0;
				for (this.pf = []; e >= this.od;) this.pf[b] = e, e -= this.Tm, b++;
				this.od % this.Tm && (this.pf[this.pf.length] = this.od - this.pf[this.pf.length - 1] + this.pf[this.pf.length -
					1])
			}
			this.jv("h");
			this.jv("v");
			this.Pk || (this.Pb.style[af] = "0", this.Jn(400))
		},
		scrollTo: function(a, b, c, e) {
			var f = a;
			this.stop();
			f.length || (f = [{
				x: a,
				y: b,
				time: c,
				eZ: e
			}]);
			a = 0;
			for (b = f.length; a < b; a++) f[a].eZ && (f[a].x = this.x - f[a].x, f[a].y = this.y - f[a].y), this.qj.push({
				x: f[a].x,
				y: f[a].y,
				time: f[a].time || 0
			});
			this.TA()
		},
		disable: function() {
			this.stop();
			this.Jn(0);
			this.enabled = t;
			this.Zd(nf, window);
			this.Zd( of , window);
			this.Zd(pf, window)
		},
		enable: function() {
			this.enabled = p
		},
		stop: function() {
			this.options.qi ? this.Zd(qf) : sf(this.qB);
			this.qj = [];
			this.Ll = this.hh = t
		},
		zoom: function(a, b, c, e) {
			var f = c / this.scale;
			this.options.Mk && (this.Pk = p, e = e === l ? 200 : e, a = a - this.lF - this.x, b = b - this.mF - this.y, this.x =
				a - a * f + this.x, this.y = b - b * f + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this
				.x < this.ge ? this.ge : this.x, this.y = this.y > this.nf ? this.nf : this.y < this.od ? this.od : this.y,
				this.Pb.style[af] = e + "ms", this.Pb.style[Ze] = "translate(" + this.x + "px," + this.y + "px) scale(" + c +
				")" + tf, this.Pk = t)
		}
	};

	function Ye(a) {
		if ("" === Se) return a;
		a = a.charAt(0).toUpperCase() + a.substr(1);
		return Se + a
	}
	Re = s;

	function vf(a) {
		this.m = {
			anchor: Yb,
			offset: new P(0, 0),
			maxWidth: "100%",
			imageHeight: 80
		};
		var a = a || {},
			b;
		for (b in a) this.m[b] = a[b];
		this.zl = new ec(s, {
			jf: "api"
		});
		this.Qj = [];
		this.W = s;
		this.cg = {
			height: this.m.imageHeight,
			width: this.m.imageHeight * wf
		};
		this.Rc = this.IA = this.Ol = this.Yc = s
	}
	var xf = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
		yf =
		"\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd"
		.split(" ");
	D.wm(function(a) {
		var b = s;
		a.addEventListener("position_changed", function() {
			a.m.visible && a.m.albumsControl === p && (b ? b.Mx(a.Yb()) : (b = new vf(a.m.albumsControlOptions), b.xa(a)))
		});
		a.addEventListener("albums_visible_changed", function() {
			a.m.albumsControl === p ? (b ? b.Mx(a.Yb()) : (b = new vf(a.m.albumsControlOptions), b.xa(a)), b.show()) : b.aa()
		});
		a.addEventListener("albums_options_changed", function() {
			b && b.Dk(a.m.albumsControlOptions)
		});
		a.addEventListener("visible_changed", function() {
			b && (a.oD() ? a.m.albumsControl === p && (b.P.style.visibility = "visible") : b.P.style.visibility = "hidden")
		})
	});
	var wf = 1.8;
	I() && (wf = 1);
	z.extend(vf.prototype, {
		Dk: function(a) {
			for (var b in a) this.m[b] = a[b];
			a = this.m.imageHeight + "px";
			this.uc(this.m.anchor);
			this.P.style.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
			this.P.style.height = a;
			this.Vj.style.height = a;
			this.Jh.style.height = a;
			this.cg = {
				height: this.m.imageHeight,
				width: this.m.imageHeight * wf
			};
			this.Uj.style.height = this.cg.height - 6 + "px";
			this.Uj.style.width = this.cg.width - 6 + "px";
			this.Mx(this.W.Yb(), p)
		},
		xa: function(a) {
			this.W = a;
			this.Gr();
			this.jP();
			this.KX();
			this.Mx(a.Yb())
		},
		Gr: function() {
			var a = this.m.imageHeight + "px";
			this.P = O("div");
			var b = this.P.style;
			b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
			b.position = "absolute";
			b.zIndex = "2000";
			b.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px";
			b.padding = "8px 0";
			b.visibility = "hidden";
			b.height = a;
			this.Vj = O("div");
			b = this.Vj.style;
			b.position = "absolute";
			b.overflow = "hidden";
			b.width = "100%";
			b.height = a;
			this.Jh = O("div");
			b = this.Jh.style;
			b.height = a;
			this.Vj.appendChild(this.Jh);
			this.P.appendChild(this.Vj);
			this.W.P.appendChild(this.P);
			this.Uj = O("div", {
				"class": "pano_photo_item_seleted"
			});
			this.Uj.style.height = this.cg.height - 6 + "px";
			this.Uj.style.width = this.cg.width - 6 + "px";
			this.uc(this.m.anchor)
		},
		RG: function(a) {
			for (var b = this.Qj, c = b.length - 1; 0 <= c; c--)
				if (b[c].panoId == a) return c;
			return -1
		},
		Mx: function(a, b) {
			if (b || !this.Qj[this.Yc] || !(this.Qj[this.Yc].panoId == a && 3 !== this.Qj[this.Yc].recoType)) {
				var c = this,
					e = this.RG(a);
				!b && -1 !== e && this.Qj[e] && 3 !== this.Qj[e].recoType ? this.mp(e) : this.YW(function(a) {
					for (var b = {}, e, k, m = t, n = [], o = 0, q = a.length; o < q; o++) e = a[o].catlog, k = a[o].floor, l !==
						e && ("" === e && l !== k ? (m = p, b[k] || (b[k] = []), b[k].push(a[o])) : (b[xf[e]] || (b[xf[e]] = []), b[
							xf[e]].push(a[o])));
					for (var v in b) m ? n.push({
						data: v + "F",
						index: v
					}) : n.push({
						data: yf[v],
						index: v
					});
					c.kG = b;
					c.Ei = n;
					c.wl(a);
					0 == a.length ? c.aa() : c.show()
				})
			}
		},
		cV: function() {
			if (!this.Bi) {
				var a = this.LW(this.Ei),
					b = O("div");
				b.style.cssText = ["width:" + 134 * this.Ei.length + "px;",
					"overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"
				].join("");
				b.innerHTML = a;
				a = O("div");
				a.appendChild(b);
				a.style.cssText =
					"position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
				new uf(a, {
					jo: t,
					sx: p,
					$h: t,
					ri: t,
					Pm: t,
					RD: p,
					aw: p,
					Vw: p
				});
				this.P.appendChild(a);
				for (var c = this, e = b.getElementsByTagName("span"), f = 0, g = e.length; f < g; f++) b = e[f], z.V(b,
					"click",
					function() {
						if (this.getAttribute("dataindex")) {
							c.wl(c.kG[this.getAttribute("dataindex")]);
							for (var a = 0, b = e.length; a < b; a++) e[a].style.color = "#FFFFFF";
							this.style.color = "#3383FF"
						}
					});
				this.Bi = a
			}
		},
		$U: function() {
			if (this.Bi) a = this.rK(this.Ei), this.zP.innerHTML = a;
			else {
				var a = this.rK(this.Ei),
					b = O("ul"),
					c = this;
				b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
				b.innerHTML = a;
				z.V(b, "click", function(a) {
					if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
						c.wl(c.kG[a]);
						for (var e = b.getElementsByTagName("li"), f = 0, g = e.length; f < g; f++) e[f].childNodes[0].getAttribute(
							"dataindex") === a ? z.U.eb(e[f], "pano_catlogLiActive") : z.U.tc(e[f], "pano_catlogLiActive")
					}
				});
				var a = O("div"),
					e = O("a"),
					f = O("span"),
					g = O("a"),
					i = O("span"),
					k = ["background:url(" + H.sa + "panorama/catlog_icon.png) no-repeat;",
						"display:block;width:10px;height:7px;margin:0 auto;"
					].join("");
				f.style.cssText = k + "background-position:-18px 0;";
				e.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
				i.style.cssText = k + "background-position:0 0;";
				g.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
				g.style.top = this.m.imageHeight - 7 + "px";
				a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
				e.appendChild(f);
				g.appendChild(i);
				z.V(e, "mouseover", function() {
					var a = parseInt(b.style.top, 10);
					7 !== a && (f.style.backgroundPosition = "-27px 0");
					new ub({
						Hc: 60,
						ac: vb.Zr,
						duration: 300,
						za: function(c) {
							b.style.top = a + (7 - a) * c + "px"
						}
					})
				});
				z.V(e, "mouseout", function() {
					f.style.backgroundPosition = "-18px 0"
				});
				z.V(g, "mouseover", function() {
					var a = parseInt(b.style.top, 10),
						e = c.m.imageHeight - 14;
					if (!(parseInt(b.offsetHeight, 10) < e)) {
						var f = e - parseInt(b.offsetHeight, 10) + 7;
						f !== a && (i.style.backgroundPosition = "-9px 0");
						new ub({
							Hc: 60,
							ac: vb.Zr,
							duration: 300,
							za: function(c) {
								b.style.top = a + (f - a) * c + "px"
							}
						})
					}
				});
				z.V(g, "mouseout", function() {
					i.style.backgroundPosition = "0 0"
				});
				a.appendChild(e);
				a.appendChild(g);
				e = O("div");
				e.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.m.imageHeight + "px;",
					"width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"
				].join("");
				e.appendChild(b);
				e.appendChild(a);
				this.Bi = e;
				this.zP = b;
				this.P.appendChild(e)
			}
		},
		aV: function() {
			if (this.Ei && !(0 >= this.Ei.length)) {
				var a = O("div");
				a.innerHTML = this.lz;
				a.style.cssText = "position:absolute;background:#252525";
				this.P.appendChild(a);
				this.cs = a;
				this.Rc.eg.style.left = this.cg.width + 8 + "px";
				this.Bi && (this.Bi.style.left = parseInt(this.Bi.style.left, 10) + this.cg.width + 8 + "px");
				var b = this;
				z.V(a, "click", function() {
					b.W.Cc(b.WV)
				})
			}
		},
		wl: function(a) {
			this.Qj = a;
			this.m.showCatalog && (0 < this.Ei.length ? (Xa() ? this.$U() : this.cV(), this.Rc.offsetLeft = 60) : (this.cs &&
				(this.P.removeChild(this.cs), this.cs = s, this.Rc.eg.style.left = "0px"), this.Bi && (this.P.removeChild(
					this.Bi), this.Bi = s), this.Rc.offsetLeft = 0));
			var b = this.EW(a);
			Xa() && (this.Ei && 0 < this.Ei.length && this.m.showExit && this.lz) && (this.Rc.offsetLeft += this.cg.width +
				8, this.cs ? this.cs.innerHTML = this.lz : this.aV());
			this.Jh.innerHTML = b;
			this.Jh.style.width = (this.cg.width + 8) * a.length + 8 + "px";
			a = this.P.offsetWidth;
			b = this.Jh.offsetWidth;
			this.Rc.js && (b += this.Rc.js());
			b < a - 2 * this.Rc.ui - this.Rc.offsetLeft ? this.P.style.width = b + this.Rc.offsetLeft + "px" : (this.P.style
				.width = isNaN(Number(this.m.maxWidth)) === p ? this.m.maxWidth : this.m.maxWidth + "px", b < this.P.offsetWidth -
				2 * this.Rc.ui - this.Rc.offsetLeft && (this.P.style.width = b + this.Rc.offsetLeft + "px"));
			this.Rc.refresh();
			this.IA = this.Jh.children;
			this.Jh.appendChild(this.Uj);
			this.Uj.style.left = "-100000px";
			a = this.RG(this.W.Yb(), this.k1); - 1 !== a && this.mp(a)
		},
		LW: function(a) {
			for (var b = "", c, e = 0, f = a.length; e < f; e++) c =
				'<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[e].index +
				'">' + a[e].data + "</span></div>", b += c;
			return b
		},
		rK: function(a) {
			for (var b = "", c, e = 0, f = a.length; e < f; e++) c =
				'<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[e].index + '">' + a[e].data +
				"</span></li>", b += c;
			return b
		},
		EW: function(a) {
			for (var b, c, e, f, g = [], i = this.cg.height, k = this.cg.width, m = 0; m < a.length; m++) b = a[m], recoType =
				b.recoType, e = b.panoId, f = b.name, c = b.heading, b = b.pitch, c = Oe.EK(e, c, b, 198, 108), b =
				'<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) +
				"px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f +
				'"/><span class="pano_photo_decs" data-index="' + m + '" style="width:' + k + "px;font-size:" + Math.floor(i /
					6) + "px; line-height:" + Math.floor(i / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + f +
				"</span></a>", 3 === recoType ? Xa() ? (this.lz = b, this.WV = e, a.splice(m, 1), m--) : (b =
					'<a href="javascript:void(0);" class="pano_photo_item" data-index="' + m + '"><img style="width:' + (k - 2) +
					"px;height:" + (i - 2) + 'px;" data-index="' + m + '" name="' + f + '" src="' + c + '" alt="' + f +
					'"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' +
					this.m.imageHeight + 'px;" data-index="' + m + '"><img src="' + H.sa +
					'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + m + '" alt=""/></div></a>',
					g.push(b)) : g.push(b);
			return g.join("")
		},
		YW: function(a) {
			var b = this,
				c = this.W.Yb();
			c && this.zl.Sw(c, function(e) {
				b.W.Yb() === c && a(e)
			})
		},
		uc: function(a) {
			if (!Za(a) || isNaN(a) || a < Wb || 3 < a) a = this.defaultAnchor;
			var b = this.P,
				c = this.m.offset.width,
				e = this.m.offset.height;
			b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
			switch (a) {
				case Wb:
					b.style.top = e + "px";
					b.style.left = c + "px";
					break;
				case Xb:
					b.style.top = e + "px";
					b.style.right = c + "px";
					break;
				case Yb:
					b.style.bottom = e + "px";
					b.style.left = c + "px";
					break;
				case 3:
					b.style.bottom = e + "px", b.style.right = c + "px"
			}
		},
		jP: function() {
			this.hP()
		},
		hP: function() {
			var a = this;
			z.V(this.P, "touchstart", function(a) {
				a.stopPropagation()
			});
			z.V(this.Vj, "click", function(b) {
				if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Yc) a.mp(b), a.W.Cc(a.Qj[b].panoId)
			});
			z.V(this.Jh, "mouseover", function(b) {
				b = (b.srcElement || b.target).getAttribute("data-index");
				b !== s && a.uJ(b, p)
			});
			this.W.addEventListener("size_changed", function() {
				isNaN(Number(a.m.maxWidth)) && a.Dk({
					maxWidth: a.m.maxWidth
				})
			})
		},
		mp: function(a) {
			this.Uj.style.left = this.IA[a].offsetLeft + 8 + "px";
			this.Uj.setAttribute("data-index", this.IA[a].getAttribute("data-index"));
			this.Yc = a;
			this.uJ(a)
		},
		uJ: function(a, b) {
			var c = this.cg.width + 8,
				e = 0;
			this.Rc.js && (e = this.Rc.js() / 2);
			var f = this.Vj.offsetWidth - 2 * e,
				g = this.Jh.offsetLeft || this.Rc.x,
				g = g - e,
				i = -a * c;
			i > g && this.Rc.scrollTo(i + e);
			c = i - c;
			g -= f;
			c < g && (!b || b && 8 < i - g) && this.Rc.scrollTo(c + f + e)
		},
		KX: function() {
			this.Rc = I() ? new uf(this.Vj, {
				jo: t,
				sx: p,
				$h: t,
				ri: t,
				Pm: t,
				RD: p,
				aw: p,
				Vw: p
			}) : new zf(this.Vj)
		},
		aa: function() {
			this.P.style.visibility = "hidden"
		},
		show: function() {
			this.P.style.visibility = "visible"
		}
	});

	function zf(a) {
		this.P = a;
		this.Rg = a.children[0];
		this.kr = s;
		this.ui = 20;
		this.offsetLeft = 0;
		this.xa()
	}
	zf.prototype = {
		xa: function() {
			this.Rg.style.position = "relative";
			this.refresh();
			this.Gr();
			this.sB()
		},
		refresh: function() {
			this.Fn = this.P.offsetWidth - this.js();
			this.fA = -(this.Rg.offsetWidth - this.Fn - this.ui);
			this.Vu = this.ui + this.offsetLeft;
			this.Rg.style.left = this.Vu + "px";
			this.Rg.children[0] && (this.kr = this.Rg.children[0].offsetWidth);
			this.eg && (this.eg.children[0].style.marginTop = this.br.children[0].style.marginTop = this.eg.offsetHeight / 2 -
				this.eg.children[0].offsetHeight / 2 + "px")
		},
		js: function() {
			return 2 * this.ui
		},
		Gr: function() {
			this.kv = O("div");
			this.kv.innerHTML =
				'<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
			this.eg = this.kv.children[0];
			this.br = this.kv.children[1];
			this.P.appendChild(this.kv);
			this.eg.children[0].style.marginTop = this.br.children[0].style.marginTop = this.eg.offsetHeight / 2 - this.eg.children[
				0].offsetHeight / 2 + "px"
		},
		sB: function() {
			var a = this;
			z.V(this.eg, "click", function() {
				a.scrollTo(a.Rg.offsetLeft + a.Fn)
			});
			z.V(this.br, "click", function() {
				a.scrollTo(a.Rg.offsetLeft - a.Fn)
			})
		},
		GT: function() {
			z.U.tc(this.eg, "pano_arrow_disable");
			z.U.tc(this.br, "pano_arrow_disable");
			var a = this.Rg.offsetLeft;
			a >= this.Vu && z.U.eb(this.eg, "pano_arrow_disable");
			a - this.Fn <= this.fA && z.U.eb(this.br, "pano_arrow_disable")
		},
		scrollTo: function(a) {
			a = a < this.Rg.offsetLeft ? Math.ceil((a - this.ui - this.Fn) / this.kr) * this.kr + this.Fn + this.ui - 8 :
				Math.ceil((a - this.ui) / this.kr) * this.kr + this.ui;
			a < this.fA ? a = this.fA : a > this.Vu && (a = this.Vu);
			var b = this.Rg.offsetLeft,
				c = this;
			new ub({
				Hc: 60,
				ac: vb.Zr,
				duration: 300,
				za: function(e) {
					c.Rg.style.left = b + (a - b) * e + "px"
				},
				finish: function() {
					c.GT()
				}
			})
		}
	};
	D.Map = Oa;
	D.Hotspot = kb;
	D.MapType = Dd;
	D.Point = J;
	D.Pixel = R;
	D.Size = P;
	D.Bounds = hb;
	D.TileLayer = Mc;
	D.Projection = jc;
	D.MercatorProjection = S;
	D.PerspectiveProjection = jb;
	D.Copyright = function(a, b, c) {
		this.id = a;
		this.fb = b;
		this.content = c
	};
	D.Overlay = mc;
	D.Label = uc;
	D.GroundOverlay = vc;
	D.PointCollection = zc;
	D.Marker = V;
	D.CanvasLayer = Cc;
	D.Icon = qc;
	D.IconSequence = sc;
	D.Symbol = rc;
	D.Polyline = Gc;
	D.Polygon = Fc;
	D.InfoWindow = tc;
	D.Circle = Hc;
	D.Control = Ub;
	D.NavigationControl = lb;
	D.GeolocationControl = Zb;
	D.OverviewMapControl = nb;
	D.CopyrightControl = $b;
	D.ScaleControl = mb;
	D.MapTypeControl = ob;
	D.CityListControl = ac;
	D.PanoramaControl = cc;
	D.TrafficLayer = Uc;
	D.CustomLayer = pb;
	D.ContextMenu = fc;
	D.MenuItem = ic;
	D.LocalSearch = fb;
	D.TransitRoute = ee;
	D.DrivingRoute = he;
	D.WalkingRoute = ie;
	D.RidingRoute = je;
	D.Autocomplete = xe;
	D.RouteSearch = oe;
	D.Geocoder = pe;
	D.LocalCity = ue;
	D.Geolocation = Geolocation;
	D.Convertor = lc;
	D.BusLineSearch = we;
	D.Boundary = ve;
	D.Panorama = Ra;
	D.PanoramaLabel = De;
	D.PanoramaService = ec;
	D.PanoramaCoverageLayer = dc;
	D.PanoramaFlashInterface = Me;

	function U(a, b) {
		for (var c in b) a[c] = b[c]
	}
	U(window, {
		BMap: D,
		_jsload2: function(a, b) {
			ja.dy.ZX && ja.dy.set(a, b);
			K.BU(a, b)
		},
		BMAP_API_VERSION: "2.0"
	});
	var Af = Oa.prototype;
	U(Af, {
		getBounds: Af.te,
		getCenter: Af.Cb,
		getMapType: Af.va,
		getSize: Af.Hb,
		setSize: Af.Ae,
		getViewport: Af.zs,
		getZoom: Af.ka,
		centerAndZoom: Af.Ed,
		panTo: Af.ki,
		panBy: Af.xg,
		setCenter: Af.qf,
		setCurrentCity: Af.AE,
		setMapType: Af.Ag,
		setViewport: Af.oh,
		setZoom: Af.Qc,
		highResolutionEnabled: Af.ax,
		zoomTo: Af.Cg,
		zoomIn: Af.nF,
		zoomOut: Af.oF,
		addHotspot: Af.hB,
		removeHotspot: Af.gZ,
		clearHotspots: Af.fw,
		checkResize: Af.EU,
		addControl: Af.wr,
		removeControl: Af.PM,
		getContainer: Af.Ta,
		addContextMenu: Af.Zn,
		removeContextMenu: Af.dp,
		addOverlay: Af.Pa,
		removeOverlay: Af.Tb,
		clearOverlays: Af.rJ,
		openInfoWindow: Af.ad,
		closeInfoWindow: Af.Xc,
		pointToOverlayPixel: Af.Ve,
		overlayPixelToPoint: Af.yM,
		getInfoWindow: Af.bh,
		getOverlays: Af.Pw,
		getPanes: function() {
			return {
				floatPane: this.Xd.FC,
				markerMouseTarget: this.Xd.UD,
				floatShadow: this.Xd.iK,
				labelPane: this.Xd.ND,
				markerPane: this.Xd.XL,
				markerShadow: this.Xd.YL,
				mapPane: this.Xd.Ts,
				vertexPane: this.Xd.eO
			}
		},
		addTileLayer: Af.Me,
		removeTileLayer: Af.Vf,
		pixelToPoint: Af.Ib,
		pointToPixel: Af.Sb,
		setFeatureStyle: Af.Q4,
		selectBaseElement: Af.J4,
		setMapStyle: Af.ot,
		enable3DBuilding: Af.uo,
		disable3DBuilding: Af.qV,
		getPanorama: Af.vs,
		initIndoorLayer: Af.LX,
		setNormalMapDisplay: Af.Tx,
		setMapStyleV2: Af.MZ,
		setBMapCopyrightOffset: Af.zE,
		getVectorContainer: Af.mX
	});
	var Bf = Dd.prototype;
	U(Bf, {
		getTileLayer: Bf.gX,
		getMinZoom: Bf.aj,
		getMaxZoom: Bf.Yh,
		getProjection: Bf.pk,
		getTextColor: Bf.hm,
		getTips: Bf.ys
	});
	U(window, {
		BMAP_NORMAL_MAP: Pa,
		BMAP_PERSPECTIVE_MAP: Sa,
		BMAP_SATELLITE_MAP: ab,
		BMAP_HYBRID_MAP: Va
	});
	var Cf = S.prototype;
	U(Cf, {
		lngLatToPoint: Cf.ug,
		pointToLngLat: Cf.pj
	});
	var Df = jb.prototype;
	U(Df, {
		lngLatToPoint: Df.ug,
		pointToLngLat: Df.pj
	});
	var Ef = hb.prototype;
	U(Ef, {
		equals: Ef.oc,
		containsPoint: Ef.Er,
		containsBounds: Ef.QU,
		intersects: Ef.Hs,
		extend: Ef.extend,
		getCenter: Ef.Cb,
		isEmpty: Ef.lj,
		getSouthWest: Ef.Se,
		getNorthEast: Ef.Nf,
		toSpan: Ef.ZE
	});
	var Ff = mc.prototype;
	U(Ff, {
		isVisible: Ff.Nc,
		show: Ff.show,
		hide: Ff.aa
	});
	mc.getZIndex = mc.rk;
	var Gf = ib.prototype;
	U(Gf, {
		openInfoWindow: Gf.ad,
		closeInfoWindow: Gf.Xc,
		enableMassClear: Gf.Yi,
		disableMassClear: Gf.sV,
		show: Gf.show,
		hide: Gf.aa,
		getMap: Gf.Lw,
		addContextMenu: Gf.Zn,
		removeContextMenu: Gf.dp
	});
	var Hf = V.prototype;
	U(Hf, {
		setIcon: Hf.Ub,
		getIcon: Hf.Fo,
		setPosition: Hf.ua,
		getPosition: Hf.ja,
		setOffset: Hf.Ld,
		getOffset: Hf.cj,
		getLabel: Hf.YC,
		setLabel: Hf.Gm,
		setTitle: Hf.Dc,
		setTop: Hf.oi,
		enableDragging: Hf.Xb,
		disableDragging: Hf.XB,
		setZIndex: Hf.sp,
		getMap: Hf.Lw,
		setAnimation: Hf.Fm,
		setShadow: Hf.Wx,
		hide: Hf.aa,
		setRotation: Hf.op,
		getRotation: Hf.IK
	});
	U(window, {
		BMAP_ANIMATION_DROP: 1,
		BMAP_ANIMATION_BOUNCE: 2
	});
	var If = uc.prototype;
	U(If, {
		setStyle: If.Md,
		setStyles: If.ni,
		setContent: If.cd,
		setPosition: If.ua,
		getPosition: If.ja,
		setOffset: If.Ld,
		getOffset: If.cj,
		setTitle: If.Dc,
		setZIndex: If.sp,
		getMap: If.Lw,
		getContent: If.lk
	});
	var Jf = qc.prototype;
	U(Jf, {
		setImageUrl: Jf.fN,
		setSize: Jf.Ae,
		setAnchor: Jf.uc,
		setImageOffset: Jf.nt,
		setImageSize: Jf.GZ,
		setInfoWindowAnchor: Jf.JZ,
		setPrintImageUrl: Jf.VZ
	});
	var Kf = tc.prototype;
	U(Kf, {
		redraw: Kf.ie,
		setTitle: Kf.Dc,
		setContent: Kf.cd,
		getContent: Kf.lk,
		getPosition: Kf.ja,
		enableMaximize: Kf.Zg,
		disableMaximize: Kf.ww,
		isOpen: Kf.Za,
		setMaxContent: Kf.ut,
		maximize: Kf.qx,
		enableAutoPan: Kf.$r
	});
	var Lf = oc.prototype;
	U(Lf, {
		getPath: Lf.Re,
		setPath: Lf.je,
		setPositionAt: Lf.Im,
		getStrokeColor: Lf.dX,
		setStrokeWeight: Lf.rp,
		getStrokeWeight: Lf.LK,
		setStrokeOpacity: Lf.pp,
		getStrokeOpacity: Lf.eX,
		setFillOpacity: Lf.mt,
		getFillOpacity: Lf.yW,
		setStrokeStyle: Lf.qp,
		getStrokeStyle: Lf.KK,
		getFillColor: Lf.xW,
		getBounds: Lf.te,
		enableEditing: Lf.gf,
		disableEditing: Lf.rV,
		getEditing: Lf.uW
	});
	var Mf = Hc.prototype;
	U(Mf, {
		setCenter: Mf.qf,
		getCenter: Mf.Cb,
		getRadius: Mf.GK,
		setRadius: Mf.rf
	});
	var Nf = Fc.prototype;
	U(Nf, {
		getPath: Nf.Re,
		setPath: Nf.je,
		setPositionAt: Nf.Im
	});
	var Of = kb.prototype;
	U(Of, {
		getPosition: Of.ja,
		setPosition: Of.ua,
		getText: Of.iD,
		setText: Of.yt
	});
	J.prototype.equals = J.prototype.oc;
	R.prototype.equals = R.prototype.oc;
	P.prototype.equals = P.prototype.oc;
	U(window, {
		BMAP_ANCHOR_TOP_LEFT: Wb,
		BMAP_ANCHOR_TOP_RIGHT: Xb,
		BMAP_ANCHOR_BOTTOM_LEFT: Yb,
		BMAP_ANCHOR_BOTTOM_RIGHT: 3
	});
	var Pf = Ub.prototype;
	U(Pf, {
		setAnchor: Pf.uc,
		getAnchor: Pf.LC,
		setOffset: Pf.Ld,
		getOffset: Pf.cj,
		show: Pf.show,
		hide: Pf.aa,
		isVisible: Pf.Nc,
		toString: Pf.toString
	});
	var Qf = lb.prototype;
	U(Qf, {
		getType: Qf.Mo,
		setType: Qf.Jm
	});
	U(window, {
		BMAP_NAVIGATION_CONTROL_LARGE: 0,
		BMAP_NAVIGATION_CONTROL_SMALL: 1,
		BMAP_NAVIGATION_CONTROL_PAN: 2,
		BMAP_NAVIGATION_CONTROL_ZOOM: 3
	});
	var Rf = nb.prototype;
	U(Rf, {
		changeView: Rf.qe,
		setSize: Rf.Ae,
		getSize: Rf.Hb
	});
	var Sf = mb.prototype;
	U(Sf, {
		getUnit: Sf.lX,
		setUnit: Sf.HE
	});
	U(window, {
		BMAP_UNIT_METRIC: "metric",
		BMAP_UNIT_IMPERIAL: "us"
	});
	var Tf = $b.prototype;
	U(Tf, {
		addCopyright: Tf.Qv,
		removeCopyright: Tf.nE,
		getCopyright: Tf.am,
		getCopyrightCollection: Tf.SC
	});
	U(window, {
		BMAP_MAPTYPE_CONTROL_HORIZONTAL: bc,
		BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
		BMAP_MAPTYPE_CONTROL_MAP: 2
	});
	var Uf = Mc.prototype;
	U(Uf, {
		getMapType: Uf.va,
		getCopyright: Uf.am,
		isTransparentPng: Uf.Os
	});
	var Vf = fc.prototype;
	U(Vf, {
		addItem: Vf.Rv,
		addSeparator: Vf.kB,
		removeSeparator: Vf.pE
	});
	var Wf = ic.prototype;
	U(Wf, {
		setText: Wf.yt
	});
	var Xf = X.prototype;
	U(Xf, {
		getStatus: Xf.fm,
		setSearchCompleteCallback: Xf.xt,
		getPageCapacity: Xf.lf,
		setPageCapacity: Xf.np,
		setLocation: Xf.Hm,
		disableFirstResultSelection: Xf.YB,
		enableFirstResultSelection: Xf.rC,
		gotoPage: Xf.im,
		searchNearby: Xf.kp,
		searchInBounds: Xf.Em,
		search: Xf.search
	});
	U(window, {
		BMAP_STATUS_SUCCESS: 0,
		BMAP_STATUS_CITY_LIST: 1,
		BMAP_STATUS_UNKNOWN_LOCATION: Nd,
		BMAP_STATUS_UNKNOWN_ROUTE: 3,
		BMAP_STATUS_INVALID_KEY: 4,
		BMAP_STATUS_INVALID_REQUEST: 5,
		BMAP_STATUS_PERMISSION_DENIED: Od,
		BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
		BMAP_STATUS_TIMEOUT: Pd
	});
	U(window, {
		BMAP_POI_TYPE_NORMAL: 0,
		BMAP_POI_TYPE_BUSSTOP: 1,
		BMAP_POI_TYPE_BUSLINE: 2,
		BMAP_POI_TYPE_SUBSTOP: 3,
		BMAP_POI_TYPE_SUBLINE: 4
	});
	U(window, {
		BMAP_TRANSIT_POLICY_RECOMMEND: 0,
		BMAP_TRANSIT_POLICY_LEAST_TIME: 4,
		BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 1,
		BMAP_TRANSIT_POLICY_LEAST_WALKING: 2,
		BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 3,
		BMAP_TRANSIT_POLICY_FIRST_SUBWAYS: 5,
		BMAP_LINE_TYPE_BUS: 0,
		BMAP_LINE_TYPE_SUBWAY: 1,
		BMAP_LINE_TYPE_FERRY: 2,
		BMAP_LINE_TYPE_TRAIN: 3,
		BMAP_LINE_TYPE_AIRPLANE: 4,
		BMAP_LINE_TYPE_COACH: 5
	});
	U(window, {
		BMAP_TRANSIT_TYPE_POLICY_TRAIN: 0,
		BMAP_TRANSIT_TYPE_POLICY_AIRPLANE: 1,
		BMAP_TRANSIT_TYPE_POLICY_COACH: 2
	});
	U(window, {
		BMAP_INTERCITY_POLICY_LEAST_TIME: 0,
		BMAP_INTERCITY_POLICY_EARLY_START: 1,
		BMAP_INTERCITY_POLICY_CHEAP_PRICE: 2
	});
	U(window, {
		BMAP_TRANSIT_TYPE_IN_CITY: 0,
		BMAP_TRANSIT_TYPE_CROSS_CITY: 1
	});
	U(window, {
		BMAP_TRANSIT_PLAN_TYPE_ROUTE: 0,
		BMAP_TRANSIT_PLAN_TYPE_LINE: 1
	});
	var Yf = de.prototype;
	U(Yf, {
		clearResults: Yf.Pe
	});
	fe = ee.prototype;
	U(fe, {
		setPolicy: fe.wt,
		toString: fe.toString,
		setPageCapacity: fe.np,
		setIntercityPolicy: fe.iN,
		setTransitTypePolicy: fe.qN
	});
	U(window, {
		BMAP_DRIVING_POLICY_DEFAULT: 0,
		BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 3,
		BMAP_DRIVING_POLICY_AVOID_CONGESTION: 5,
		BMAP_DRIVING_POLICY_FIRST_HIGHWAYS: 4
	});
	U(window, {
		BMAP_MODE_DRIVING: "driving",
		BMAP_MODE_TRANSIT: "transit",
		BMAP_MODE_WALKING: "walking",
		BMAP_MODE_NAVIGATION: "navigation"
	});
	var Zf = oe.prototype;
	U(Zf, {
		routeCall: Zf.aN
	});
	U(window, {
		BMAP_HIGHLIGHT_STEP: 1,
		BMAP_HIGHLIGHT_ROUTE: 2
	});
	U(window, {
		BMAP_ROUTE_TYPE_DRIVING: Rd,
		BMAP_ROUTE_TYPE_WALKING: Qd,
		BMAP_ROUTE_TYPE_RIDING: Sd
	});
	U(window, {
		BMAP_ROUTE_STATUS_NORMAL: Td,
		BMAP_ROUTE_STATUS_EMPTY: 1,
		BMAP_ROUTE_STATUS_ADDRESS: 2
	});
	var $f = he.prototype;
	U($f, {
		setPolicy: $f.wt
	});
	var ag = xe.prototype;
	U(ag, {
		show: ag.show,
		hide: ag.aa,
		setTypes: ag.GE,
		setLocation: ag.Hm,
		search: ag.search,
		setInputValue: ag.Sx
	});
	U(pb.prototype, {});
	var cg = ve.prototype;
	U(cg, {
		get: cg.get
	});
	U(dc.prototype, {});
	U(window, {
		BMAP_POINT_DENSITY_HIGH: 200,
		BMAP_POINT_DENSITY_MEDIUM: Xc,
		BMAP_POINT_DENSITY_LOW: 50
	});
	U(window, {
		BMAP_POINT_SHAPE_STAR: 1,
		BMAP_POINT_SHAPE_WATERDROP: 2,
		BMAP_POINT_SHAPE_CIRCLE: wc,
		BMAP_POINT_SHAPE_SQUARE: 4,
		BMAP_POINT_SHAPE_RHOMBUS: 5
	});
	U(window, {
		BMAP_POINT_SIZE_TINY: 1,
		BMAP_POINT_SIZE_SMALLER: 2,
		BMAP_POINT_SIZE_SMALL: 3,
		BMAP_POINT_SIZE_NORMAL: xc,
		BMAP_POINT_SIZE_BIG: 5,
		BMAP_POINT_SIZE_BIGGER: 6,
		BMAP_POINT_SIZE_HUGE: 7
	});
	U(window, {
		BMap_Symbol_SHAPE_CAMERA: 11,
		BMap_Symbol_SHAPE_WARNING: 12,
		BMap_Symbol_SHAPE_SMILE: 13,
		BMap_Symbol_SHAPE_CLOCK: 14,
		BMap_Symbol_SHAPE_POINT: 9,
		BMap_Symbol_SHAPE_PLANE: 10,
		BMap_Symbol_SHAPE_CIRCLE: 1,
		BMap_Symbol_SHAPE_RECTANGLE: 2,
		BMap_Symbol_SHAPE_RHOMBUS: 3,
		BMap_Symbol_SHAPE_STAR: 4,
		BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
		BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
		BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
		BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
	});
	U(window, {
		BMAP_CONTEXT_MENU_ICON_ZOOMIN: gc,
		BMAP_CONTEXT_MENU_ICON_ZOOMOUT: hc
	});
	U(window, {
		BMAP_SYS_DRAWER: Na,
		BMAP_SVG_DRAWER: 1,
		BMAP_VML_DRAWER: 2,
		BMAP_CANVAS_DRAWER: 3,
		BMAP_SVG_DRAWER_FIRST: 4
	});
	D.ZT();
	D.Z_();
})()
