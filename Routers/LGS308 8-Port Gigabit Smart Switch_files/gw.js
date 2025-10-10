/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) { return new x.fn.init(e, t, r) }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) { return t.toUpperCase() }, q = function (e) { (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready()) }, _ = function () { a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q)) }; x.fn = x.prototype = { jquery: f, constructor: x, init: function (e, n, r) { var i, o; if (!e) return this; if ("string" == typeof e) { if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if (o = a.getElementById(i[2]), o && o.parentNode) { if (o.id !== i[2]) return r.find(e); this.length = 1, this[0] = o } return this.context = a, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this)) }, selector: "", length: 0, toArray: function () { return g.call(this) }, get: function (e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = x.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return x.each(this, e, t) }, ready: function (e) { return x.ready.promise().done(e), this }, slice: function () { return this.pushStack(g.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (0 > e ? t : 0); return this.pushStack(n >= 0 && t > n ? [this[n]] : []) }, map: function (e) { return this.pushStack(x.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: h, sort: [].sort, splice: [].splice }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, x.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) { return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? x.readyWait++ : x.ready(!0) }, ready: function (e) { if (e === !0 ? ! --x.readyWait : !x.isReady) { if (!a.body) return setTimeout(x.ready); x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === x.type(e) }, isArray: Array.isArray || function (e) { return "array" === x.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e }, isPlainObject: function (e) { var n; if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1; try { if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (r) { return !1 } if (x.support.ownLast) for (n in e) return v.call(e, n); for (n in e); return n === t || v.call(e, n) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || a; var r = k.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes)) }, parseJSON: function (n) { return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t) }, parseXML: function (n) { var r, i; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n)) } catch (o) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && x.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(D, "ms-").replace(L, H) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r, i = 0, o = e.length, a = M(e); if (n) { if (a) { for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break } else for (i in e) if (r = t.apply(e[i], n), r === !1) break } else if (a) { for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break; return e }, trim: b && !b.call("\ufeff\u00a0") ? function (e) { return null == e ? "" : b.call(e) } : function (e) { return null == e ? "" : (e + "").replace(C, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (m) return m.call(t, e, n); for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else while (n[o] !== t) e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r, i = [], o = 0, a = e.length; for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]); return i }, map: function (e, t, n) { var r, i = 0, o = e.length, a = M(e), s = []; if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r); return d.apply([], s) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () { return e.apply(n || this, r.concat(g.call(arguments))) }, i.guid = e.guid = e.guid || x.guid++, i) : t }, access: function (e, n, r, i, o, a, s) { var l = 0, u = e.length, c = null == r; if ("object" === x.type(r)) { o = !0; for (l in r) x.access(e, n, l, r[l], !0, a, s) } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(x(e), n) })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r))); return o ? e : c ? n.call(e) : u ? n(e[0], r) : a }, now: function () { return (new Date).getTime() }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; i = n.apply(e, r || []); for (o in t) e.style[o] = a[o]; return i } }), x.ready.promise = function (t) { if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready); else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else { a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q); var r = !1; try { r = null == e.frameElement && a.documentElement } catch (i) { } r && r.doScroll && function o() { if (!x.isReady) { try { r.doScroll("left") } catch (e) { return setTimeout(o, 50) } _(), x.ready() } } () } return n.promise(t) }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { c["[object " + t + "]"] = t.toLowerCase() }); function M(e) { var t = e.length, n = x.type(e); return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e) } r = x(a), function (e, t) { var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) { return e === t ? (S = !0, 0) : 0 }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) { var t = 0, n = this.length; for (; n > t; t++) if (this[t] === e) return t; return -1 }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = { ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i") }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) { var r = "0x" + t - 65536; return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r) }; try { M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType } catch (ot) { M = { apply: H.length ? function (e, t) { _.apply(e, O.call(t)) } : function (e, t) { var n = e.length, r = 0; while (e[n++] = t[r++]); e.length = n - 1 } } } function at(e, t, n, i) { var o, a, s, l, u, c, d, m, y, x; if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n; if (1 !== (l = t.nodeType) && 9 !== l) return []; if (h && !i) { if (o = Z.exec(e)) if (s = o[1]) { if (9 === l) { if (a = t.getElementById(s), !a || !a.parentNode) return n; if (a.id === s) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n } else { if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n; if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n } if (r.qsa && (!g || !g.test(e))) { if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) { c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length; while (u--) c[u] = m + yt(c[u]); y = V.test(e) && t.parentNode || t, x = c.join(",") } if (x) try { return M.apply(n, y.querySelectorAll(x)), n } catch (T) { } finally { d || t.removeAttribute("id") } } } return kt(e.replace(z, "$1"), t, n, i) } function st() { var e = []; function t(n, r) { return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r } return t } function lt(e) { return e[b] = !0, e } function ut(e) { var t = f.createElement("div"); try { return !!e(t) } catch (n) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } } function ct(e, t) { var n = e.split("|"), r = e.length; while (r--) o.attrHandle[n[r]] = t } function pt(e, t) { var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D); if (r) return r; if (n) while (n = n.nextSibling) if (n === t) return -1; return e ? 1 : -1 } function ft(e) { return function (t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } } function dt(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function ht(e) { return lt(function (t) { return t = +t, lt(function (n, r) { var i, o = e([], n.length, t), a = o.length; while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } s = at.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, r = at.support = {}, p = at.setDocument = function (e) { var n = e ? e.ownerDocument || e : w, i = n.defaultView; return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () { p() }), r.attributes = ut(function (e) { return e.className = "i", !e.getAttribute("className") }), r.getElementsByTagName = ut(function (e) { return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length }), r.getElementsByClassName = ut(function (e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), r.getById = ut(function (e) { return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length }), r.getById ? (o.find.ID = function (e, t) { if (typeof t.getElementById !== j && h) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { return e.getAttribute("id") === t } }) : (delete o.find.ID, o.filter.ID = function (e) { var t = e.replace(rt, it); return function (e) { var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id"); return n && n.value === t } }), o.find.TAG = r.getElementsByTagName ? function (e, n) { return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r } return o }, o.find.CLASS = r.getElementsByClassName && function (e, n) { return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked") }), ut(function (e) { var t = n.createElement("input"); t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:") })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) { r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I) }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) while (t = t.parentNode) if (t === e) return !0; return !1 }, A = d.compareDocumentPosition ? function (e, t) { if (e === t) return S = !0, 0; var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t); return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, t) { var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t]; if (e === t) return S = !0, 0; if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0; if (o === a) return pt(e, t); r = e; while (r = r.parentNode) s.unshift(r); r = t; while (r = r.parentNode) l.unshift(r); while (s[i] === l[i]) i++; return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, n) : f }, at.matches = function (e, t) { return at(e, null, null, t) }, at.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try { var n = y.call(e, t); if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (i) { } return at(t, f, null, [e]).length > 0 }, at.contains = function (e, t) { return (e.ownerDocument || e) !== f && p(e), v(e, t) }, at.attr = function (e, n) { (e.ownerDocument || e) !== f && p(e); var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t; return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a }, at.error = function (e) { throw Error("Syntax error, unrecognized expression: " + e) }, at.uniqueSort = function (e) { var t, n = [], i = 0, o = 0; if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) { while (t = e[o++]) t === e[o] && (i = n.push(o)); while (i--) e.splice(n[i], 1) } return e }, a = at.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += a(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++) n += a(t); return n }, o = at.selectors = { cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling"} }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e }, PSEUDO: function (e) { var n, r = !e[5] && e[2]; return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3)) } }, filter: { TAG: function (e) { var t = e.replace(rt, it).toLowerCase(); return "*" === e ? function () { return !0 } : function (e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function (e) { var t = N[e + " "]; return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = at.attr(r, e); return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0 } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, l) { var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s; if (m) { if (o) { while (g) { p = t; while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d]; while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) { c[e] = [T, d, f]; break } } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e); return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) { var i, o = r(e, t), a = o.length; while (a--) i = F.call(e, o[a]), e[i] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: lt(function (e) { var t = [], n = [], r = l(e.replace(z, "$1")); return r[b] ? lt(function (e, t, n, i) { var o, a = r(e, null, i, []), s = e.length; while (s--) (o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: lt(function (e) { return function (t) { return at(e, t).length > 0 } }), contains: lt(function (e) { return function (t) { return (t.textContent || t.innerText || a(t)).indexOf(e) > -1 } }), lang: lt(function (e) { return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) { var n; do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === d }, focus: function (e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return e.disabled === !1 }, disabled: function (e) { return e.disabled === !0 }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !o.pseudos.empty(e) }, header: function (e) { return tt.test(e.nodeName) }, input: function (e) { return et.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: ht(function () { return [0] }), last: ht(function (e, t) { return [t - 1] }), eq: ht(function (e, t, n) { return [0 > n ? n + t : n] }), even: ht(function (e, t) { var n = 0; for (; t > n; n += 2) e.push(n); return e }), odd: ht(function (e, t) { var n = 1; for (; t > n; n += 2) e.push(n); return e }), lt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; --r >= 0; ) e.push(r); return e }), gt: ht(function (e, t, n) { var r = 0 > n ? n + t : n; for (; t > ++r; ) e.push(r); return e })} }, o.pseudos.nth = o.pseudos.eq; for (n in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) o.pseudos[n] = ft(n); for (n in { submit: !0, reset: !0 }) o.pseudos[n] = dt(n); function gt() { } gt.prototype = o.filters = o.pseudos, o.setFilters = new gt; function mt(e, t) { var n, r, i, a, s, l, u, c = k[e + " "]; if (c) return t ? 0 : c.slice(0); s = e, l = [], u = o.preFilter; while (s) { (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(z, " ") }), s = s.slice(n.length)); for (a in o.filter) !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? at.error(e) : k(e, l).slice(0) } function yt(e) { var t = 0, n = e.length, r = ""; for (; n > t; t++) r += e[t].value; return r } function vt(e, t, n) { var r = t.dir, o = n && "parentNode" === r, a = C++; return t.first ? function (t, n, i) { while (t = t[r]) if (1 === t.nodeType || o) return e(t, n, i) } : function (t, n, s) { var l, u, c, p = T + " " + a; if (s) { while (t = t[r]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else while (t = t[r]) if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) { if ((l = u[1]) === !0 || l === i) return l === !0 } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0 } } function bt(e) { return e.length > 1 ? function (t, n, r) { var i = e.length; while (i--) if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function xt(e, t, n, r, i) { var o, a = [], s = 0, l = e.length, u = null != t; for (; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s)); return a } function wt(e, t, n, r, i, o) { return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) { var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, l), r) { u = xt(y, d), r(u, [], s, l), c = u.length; while (c--) (p = u[c]) && (y[d[c]] = !(m[d[c]] = p)) } if (o) { if (i || e) { if (i) { u = [], c = y.length; while (c--) (p = y[c]) && u.push(m[c] = p); i(null, y = [], u, l) } c = y.length; while (c--) (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p)) } } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y) }) } function Tt(e) { var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) { return e === t }, s, !0), p = vt(function (e) { return F.call(t, e) > -1 }, s, !0), f = [function (e, n, r) { return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r)) } ]; for (; i > l; l++) if (n = o.relative[e[l].type]) f = [vt(bt(f), n)]; else { if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) { for (r = ++l; i > r; r++) if (o.relative[e[r].type]) break; return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e)) } f.push(n) } return bt(f) } function Ct(e, t) { var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1; for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) { if (a && h) { g = 0; while (m = e[g++]) if (m(h, l, c)) { p.push(h); break } w && (T = k, i = ++n) } r && ((h = !m && h) && v--, s && x.push(h)) } if (v += b, r && b !== v) { g = 0; while (m = t[g++]) m(x, y, l, c); if (s) { if (v > 0) while (b--) x[b] || y[b] || (y[b] = q.call(p)); y = xt(y) } M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p) } return w && (T = k, u = C), x }; return r ? lt(s) : s } l = at.compile = function (e, t) { var n, r = [], i = [], o = E[e + " "]; if (!o) { t || (t = mt(e)), n = t.length; while (n--) o = Tt(t[n]), o[b] ? r.push(o) : i.push(o); o = E(e, Ct(i, r)) } return o }; function Nt(e, t, n) { var r = 0, i = t.length; for (; i > r; r++) at(e, t[r], n); return n } function kt(e, t, n, i) { var a, s, u, c, p, f = mt(e); if (!i && 1 === f.length) { if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) { if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n; e = e.slice(s.shift().value.length) } a = Q.needsContext.test(e) ? 0 : s.length; while (a--) { if (u = s[a], o.relative[c = u.type]) break; if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) { if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n; break } } } return l(e, f)(i, t, !h, n, V.test(e)), n } r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) { return 1 & e.compareDocumentPosition(f.createElement("div")) }), ut(function (e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ct("type|href|height|width", function (e, n, r) { return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2) }), r.attributes && ut(function (e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ct("value", function (e, n, r) { return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue }), ut(function (e) { return null == e.getAttribute("disabled") }) || ct(B, function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains } (e); var O = {}; function F(e) { var t = O[e] = {}; return x.each(e.match(T) || [], function (e, n) { t[n] = !0 }), t } x.Callbacks = function (e) { e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e); var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) { r = !1; break } n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable()) }, p = { add: function () { if (l) { var t = l.length; (function i(t) { x.each(t, function (t, n) { var r = x.type(n); "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n) }) })(arguments), n ? o = l.length : r && (s = t, c(r)) } return this }, remove: function () { return l && x.each(arguments, function (e, t) { var r; while ((r = x.inArray(t, l, r)) > -1) l.splice(r, 1), n && (o >= r && o--, a >= r && a--) }), this }, has: function (e) { return e ? x.inArray(e, l) > -1 : !(!l || !l.length) }, empty: function () { return l = [], o = 0, this }, disable: function () { return l = u = r = t, this }, disabled: function () { return !l }, lock: function () { return u = t, r || p.disable(), this }, locked: function () { return !u }, fireWith: function (e, t) { return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this }, fire: function () { return p.fireWith(this, arguments), this }, fired: function () { return !!i } }; return p }, x.extend({ Deferred: function (e) { var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return x.Deferred(function (n) { x.each(t, function (t, o) { var a = o[0], s = x.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? x.extend(e, r) : r } }, i = {}; return r.pipe = r.then, x.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) { return function (r) { t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n) } }, s, l, u; if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i; return i || o.resolveWith(u, n), o.promise() } }), x.support = function (t) {
var n, r, o, s, l, u, c, p, f, d = a.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = " <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t; s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled; try { delete d.test } catch (h) { t.deleteExpando = !1 } o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()); for (f in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1; d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip; for (f in x(t)) break; return t.ownLast = "0" !== f, x(function () { var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0]; l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? { zoom: 1} : {}, function () { t.boxSizing = 4 === d.offsetWidth }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null) }), n = s = l = u = r = o = null, t
} ({}); var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g; function R(e, n, r, i) { if (x.acceptData(e)) { var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s; if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: x.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o } } function W(e, t, n) { if (x.acceptData(e)) { var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando; if (a[s]) { if (t && (r = n ? a[s] : a[s].data)) { x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length; while (i--) delete r[t[i]]; if (n ? !I(r) : !x.isEmptyObject(r)) return } (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } } x.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) { return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e) }, data: function (e, t, n) { return R(e, t, n) }, removeData: function (e, t) { return W(e, t) }, _data: function (e, t, n) { return R(e, t, n, !0) }, _removeData: function (e, t) { return W(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && x.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t } }), x.fn.extend({ data: function (e, n) { var r, i, o = null, a = 0, s = this[0]; if (e === t) { if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) { for (r = s.attributes; r.length > a; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i])); x._data(s, "parsedAttrs", !0) } return o } return "object" == typeof e ? this.each(function () { x.data(this, e) }) : arguments.length > 1 ? this.each(function () { x.data(this, e, n) }) : s ? $(s, e, x.data(s, e)) : null }, removeData: function (e) { return this.each(function () { x.removeData(this, e) }) } }); function $(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(P, "-$1").toLowerCase(); if (r = e.getAttribute(i), "string" == typeof r) { try { r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r } catch (o) { } x.data(e, n, r) } else r = t } return r } function I(e) { var t; for (t in e) if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } x.extend({ queue: function (e, n, r) { var i; return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t }, dequeue: function (e, t) { t = t || "fx"; var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () { x.dequeue(e, t) }; "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return x._data(e, n) || x._data(e, n, { empty: x.Callbacks("once memory").add(function () { x._removeData(e, t + "queue"), x._removeData(e, n) }) }) } }), x.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () { var t = x.queue(this, e, n); x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { x.dequeue(this, e) }) }, delay: function (e, t) { return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () { --i || o.resolveWith(a, [a]) }; "string" != typeof e && (n = e, e = t), e = e || "fx"; while (s--) r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l)); return l(), o.promise(n) } }); var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input; x.fn.extend({ attr: function (e, t) { return x.access(this, x.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { x.removeAttr(this, e) }) }, prop: function (e, t) { return x.access(this, x.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = x.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (n) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).addClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) { o = 0; while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " "); n.className = x.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e; if (x.isFunction(e)) return this.each(function (t) { x(this).removeClass(e.call(this, t, this.className)) }); if (l) for (t = (e || "").match(T) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) { o = 0; while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " "); n.className = e ? x.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e; return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) { x(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) { var t, r = 0, o = x(this), a = e.match(T) || []; while (t = a[r++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t) } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "") }) }, hasClass: function (e) { var t = " " + e + " ", n = 0, r = this.length; for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; { if (arguments.length) return i = x.isFunction(e), this.each(function (n) { var o; 1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) { return null == e ? "" : e + "" })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) }); if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n) } } }), x.extend({ valHooks: { option: { get: function (e) { var t = x.find.attr(e, "value"); return null != t ? t : e.text } }, select: { get: function (e) { var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; for (; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) { if (t = x(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n, r, i = e.options, o = x.makeArray(t), a = i.length; while (a--) r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0); return n || (e.selectedIndex = -1), o } } }, attr: function (e, n, r) { var o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(T); if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function (e, n, r) { var i, o, a, s = e.nodeType; if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var t = x.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1 } }} }), X = { set: function (e, t, n) { return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n } }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) { var r = x.expr.attrHandle[n] || x.find.attr; x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) { var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null; return x.expr.attrHandle[n] = o, a } : function (e, n, r) { return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null } }), K && Q || (x.attrHooks.value = { set: function (e, n, r) { return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r) } }), Q || (z = { set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) { var i; return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null }, x.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && r.specified ? r.value : t }, set: z.set }, x.attrHooks.contenteditable = { set: function (e, t, n) { z.set(e, "" === t ? !1 : t, n) } }, x.each(["width", "height"], function (e, n) { x.attrHooks[n] = { set: function (e, r) { return "" === r ? (e.setAttribute(n, "auto"), r) : t } } })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) { x.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } }), x.support.style || (x.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), x.support.optSelected || (x.propHooks.selected = { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { x.propFix[this.toLowerCase()] = this }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () { x.valHooks[this] = { set: function (e, n) { return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t } }, x.support.checkOn || (x.valHooks[this].get = function (e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/; function it() { return !0 } function ot() { return !1 } function at() { try { return a.activeElement } catch (e) { } } x.event = { global: {}, add: function (e, n, r, o, a) { var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e); if (v) { r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) { return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments) }, f.elem = e), n = (n || "").match(T) || [""], u = n.length; while (u--) s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0); e = null } }, remove: function (e, t, n, r, i) { var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e); if (m && (c = m.events)) { t = (t || "").match(T) || [""], u = t.length; while (u--) if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) { p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a)); l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) x.event.remove(e, d + t[u], n, r, !0); x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events")) } }, trigger: function (n, r, i, o) { var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : []; if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) { if (!o && !p.noBubble && !x.isWindow(i)) { for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) h.push(u), f = u; f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e) } d = 0; while ((u = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault(); if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) { f = i[l], f && (i[l] = null), x.event.triggered = g; try { i[g]() } catch (y) { } x.event.triggered = t, f && (i[l] = f) } return n.result } }, dispatch: function (e) { e = x.event.fix(e); var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {}; if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) { s = x.event.handlers.call(this, e, u), n = 0; while ((o = s[n++]) && !e.isPropagationStopped()) { e.currentTarget = o.elem, a = 0; while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], l = n.delegateCount, u = e.target; if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) { for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i); o.length && s.push({ elem: u, handlers: o }) } return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s }, fix: function (e) { if (e[x.expando]) return e; var t, n, r, i = e.type, o = e, s = this.fixHooks[i]; s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length; while (t--) n = r[t], e[n] = o[n]; return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, o, s = n.button, l = n.fromElement; return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== at() && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { return this === at() && this.blur ? (this.blur(), !1) : t }, delegateType: "focusout" }, click: { trigger: function () { return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t }, _default: function (e) { return x.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = x.extend(new x.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, x.removeEvent = a.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, x.Event = function (e, n) { return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n) }, x.Event.prototype = { isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = it, this.stopPropagation() } }, x.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) { x.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = this, i = e.relatedTarget, o = e.handleObj; return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n } } }), x.support.submitBubbles || (x.event.special.submit = { setup: function () { return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t; r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), x._data(r, "submitBubbles", !0)) }), t) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t) } }), x.support.changeBubbles || (x.event.special.change = { setup: function () { return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), x.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0) })), !1) : (x.event.add(this, "beforeactivate._change", function (e) { var t = e.target; Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0) }), x._data(t, "changeBubbles", !0)) }), t) }, handle: function (e) { var n = e.target; return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t }, teardown: function () { return x.event.remove(this, "._change"), !Z.test(this.nodeName) } }), x.support.focusinBubbles || x.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { x.event.simulate(t, e.target, x.event.fix(e), !0) }; x.event.special[t] = { setup: function () { 0 === n++ && a.addEventListener(e, r, !0) }, teardown: function () { 0 === --n && a.removeEventListener(e, r, !0) } } }), x.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { "string" != typeof n && (r = r || n, n = t); for (a in e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot; else if (!i) return this; return 1 === o && (s = i, i = function (e) { return x().off(e), s.apply(this, arguments) }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () { x.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () { x.event.remove(this, e, r, n) }) }, trigger: function (e, t) { return this.each(function () { x.event.trigger(e, t, this) }) }, triggerHandler: function (e, n) { var r = this[0]; return r ? x.event.trigger(e, n, r, !0) : t } }); var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = { children: !0, contents: !0, next: !0, prev: !0 }; x.fn.extend({ find: function (e) { var t, n = [], r = this, i = r.length; if ("string" != typeof e) return this.pushStack(x(e).filter(function () { for (t = 0; i > t; t++) if (x.contains(r[t], this)) return !0 })); for (t = 0; i > t; t++) x.find(e, r[t], n); return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n }, has: function (e) { var t, n = x(e, this), r = n.length; return this.filter(function () { for (t = 0; r > t; t++) if (x.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ft(this, e || [], !0)) }, filter: function (e) { return this.pushStack(ft(this, e || [], !1)) }, is: function (e) { return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length }, closest: function (e, t) { var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0; for (; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) { n = o.push(n); break } return this.pushStack(o.length > 1 ? x.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n); return this.pushStack(x.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }); function pt(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e } x.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return x.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return x.dir(e, "parentNode", n) }, next: function (e) { return pt(e, "nextSibling") }, prev: function (e) { return pt(e, "previousSibling") }, nextAll: function (e) { return x.dir(e, "nextSibling") }, prevAll: function (e) { return x.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return x.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return x.dir(e, "previousSibling", n) }, siblings: function (e) { return x.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return x.sibling(e.firstChild) }, contents: function (e) { return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes) } }, function (e, t) { x.fn[e] = function (n, r) { var i = x.map(this, t, n); return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i) } }), x.extend({ filter: function (e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) { return 1 === e.nodeType })) }, dir: function (e, n, r) { var i = [], o = e[n]; while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { var n = []; for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }); function ft(e, t, n) { if (x.isFunction(t)) return x.grep(e, function (e, r) { return !!t.call(e, r, e) !== n }); if (t.nodeType) return x.grep(e, function (e) { return e === t !== n }); if ("string" == typeof t) { if (st.test(t)) return x.filter(t, e, n); t = x.filter(t, e) } return x.grep(e, function (e) { return x.inArray(e, t) >= 0 !== n }) } function dt(e) { var t = ht.split("|"), n = e.createDocumentFragment(); if (n.createElement) while (t.length) n.createElement(t.pop()); return n } var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, jt = dt(a), Dt = jt.appendChild(a.createElement("div")); At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({ text: function (e) { return x.access(this, function (e) { return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e)) }, null, e, arguments.length) }, append: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.appendChild(e) } }) }, prepend: function () { return this.domManip(arguments, function (e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = Lt(this, e); t.insertBefore(e, t.firstChild) } }) }, before: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { var n, r = e ? x.filter(e, this) : this, i = 0; for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n)); return this }, empty: function () { var e, t = 0; for (; null != (e = this[t]); t++) { 1 === e.nodeType && x.cleanData(Ft(e, !1)); while (e.firstChild) e.removeChild(e.firstChild); e.options && x.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () { return x.clone(this, e, t) }) }, html: function (e) { return x.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t; if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(vt, "<$1></$2>"); try { for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e); n = 0 } catch (o) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function () { var e = x.map(this, function (e) { return [e.nextSibling, e.parentNode] }), t = 0; return this.domManip(arguments, function (n) { var r = e[t++], i = e[t++]; i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r)) }, !0), t ? this : this.remove() }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, t, n) { e = d.apply([], e); var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h); if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) { var i = p.eq(r); g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n) }); if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) { for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u); if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, ""))); l = r = null } return this } }); function Lt(e, t) { return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e } function Ht(e) { return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e } function qt(e) { var t = Et.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function _t(e, t) { var n, r = 0; for (; null != (n = e[r]); r++) x._data(n, "globalEval", !t || x._data(t[r], "globalEval")) } function Mt(e, t) { if (1 === t.nodeType && x.hasData(e)) { var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events; if (s) { delete a.handle, a.events = {}; for (n in s) for (r = 0, i = s[n].length; i > r; r++) x.event.add(t, n, s[n][r]) } a.data && (a.data = x.extend({}, a.data)) } } function Ot(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) { i = x._data(t); for (r in i.events) x.removeEvent(t, r, i.handle); t.removeAttribute(x.expando) } "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) } } x.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { x.fn[e] = function (e) { var n, r = 0, i = [], o = x(e), a = o.length - 1; for (; a >= r; r++) n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get()); return this.pushStack(i) } }); function Ft(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n)); return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s } function Bt(e) { Ct.test(e.type) && (e.defaultChecked = e.checked) } x.extend({ clone: function (e, t, n) { var r, i, o, a, s, l = x.contains(e.ownerDocument, e); if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) r[a] && Ot(i, r[a]); if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) Mt(i, r[a]); else Mt(e, o); return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) { var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0; for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) { s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0]; while (i--) s = s.lastChild; if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) { o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; while (i--) x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u) } x.merge(d, s.childNodes), s.textContent = ""; while (s.firstChild) s.removeChild(s.firstChild); s = f.lastChild } else d.push(t.createTextNode(o)); s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0; while (o = d[h++]) if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) { i = 0; while (o = s[i++]) kt.test(o.type || "") && n.push(o) } return s = null, f }, cleanData: function (e, t) {
var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special; for (; null != (n = e[s]); s++) if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
if (a.events) for (r in a.events) f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
}
}, _evalUrl: function (e) { return x.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }
}), x.fn.extend({ wrapAll: function (e) { if (x.isFunction(e)) return this.each(function (t) { x(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = x(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { var e = this; while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return x.isFunction(e) ? this.each(function (t) { x(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = x(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = x.isFunction(e); return this.each(function (n) { x(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { x.nodeName(this, "body") || x(this).replaceWith(this.childNodes) }).end() } }); var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = { BODY: "block" }, Qt = { position: "absolute", visibility: "hidden", display: "block" }, Kt = { letterSpacing: 0, fontWeight: 400 }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"]; function tn(e, t) { if (t in e) return t; var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length; while (i--) if (t = en[i] + n, t in e) return t; return r } function nn(e, t) { return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e) } function rn(e, t) { var n, r, i, o = [], a = 0, s = e.length; for (; s > a; a++) r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display")))); for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } x.fn.extend({ css: function (e, n) { return x.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (x.isArray(n)) { for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = x.css(e, n[s], !1, o); return a } return r !== t ? x.style(e, n, r) : x.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return rn(this, !0) }, hide: function () { return rn(this) }, toggle: function (e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () { nn(this) ? x(this).show() : x(this).hide() }) } }), x.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Wt(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": x.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, l = x.camelCase(n), u = e.style; if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]; if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { u[n] = r } catch (c) { } } }, css: function (e, n, r, i) { var o, a, s, l = x.camelCase(n); return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a } }), e.getComputedStyle ? (Rt = function (t) { return e.getComputedStyle(t, null) }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style; return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l }) : a.documentElement.currentStyle && (Rt = function (e) { return e.currentStyle }, Wt = function (e, n, r) { var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style; return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l }); function on(e, t, n) { var r = Vt.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function an(e, t, n, r, i) { var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; for (; 4 > o; o += 2) "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i))); return a } function sn(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o); if (0 >= i || null == i) { if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i; r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px" } function ln(e) { var t = a, n = Gt[e]; return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n } function un(e, t) { var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display"); return n.remove(), r } x.each(["height", "width"], function (e, n) { x.cssHooks[n] = { get: function (e, r, i) { return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () { return sn(e, n, i) }) : sn(e, n, i) : t }, set: function (e, t, r) { var i = r && Rt(e); return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0) } } }), x.support.opacity || (x.cssHooks.opacity = { get: function (e, t) { return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i) } }), x(function () { x.support.reliableMarginRight || (x.cssHooks.marginRight = { get: function (e, n) { return n ? x.swap(e, { display: "inline-block" }, Wt, [e, "marginRight"]) : t } }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) { x.cssHooks[n] = { get: function (e, r) { return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t } } }) }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) { return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display")) }, x.expr.filters.visible = function (e) { return !x.expr.filters.hidden(e) }), x.each({ margin: "", padding: "", border: "Width" }, function (e, t) { x.cssHooks[e + t] = { expand: function (n) { var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, Ut.test(e) || (x.cssHooks[e + t].set = on) }); var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i; x.fn.extend({ serialize: function () { return x.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = x.prop(this, "elements"); return e ? x.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e)) }).map(function (e, t) { var n = x(this).val(); return null == n ? null : x.isArray(n) ? x.map(n, function (e) { return { name: t.name, value: e.replace(fn, "\r\n")} }) : { name: t.name, value: n.replace(fn, "\r\n")} }).get() } }), x.param = function (e, n) { var r, i = [], o = function (e, t) { t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () { o(this.name, this.value) }); else for (r in e) gn(r, e[r], n, o); return i.join("&").replace(cn, "+") }; function gn(e, t, n, r) { var i; if (x.isArray(t)) x.each(t, function (t, i) { n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) gn(e + "[" + i + "]", t[i], n, r) } x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { x.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), x.fn.extend({ hover: function (e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }); var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*"); try { yn = o.href } catch (Ln) { yn = a.createElement("a"), yn.href = "", yn = yn.href } mn = En.exec(yn.toLowerCase()) || []; function Hn(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(T) || []; if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function qn(e, n, r, i) { var o = {}, a = e === jn; function s(l) { var u; return o[l] = !0, x.each(e[l] || [], function (e, l) { var c = l(n, r, i); return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1) }), u } return s(n.dataTypes[0]) || !o["*"] && s("*") } function _n(e, n) { var r, i, o = x.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && x.extend(!0, e, r), e } x.fn.load = function (e, n, r) { if ("string" != typeof e && Sn) return Sn.apply(this, arguments); var i, o, a, s = this, l = e.indexOf(" "); return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { x.fn[t] = function (e) { return this.on(t, e) } }), x.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML }, flatOptions: { url: !0, context: !0} }, ajaxSetup: function (e, t) { return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e) }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === b) { if (!c) { c = {}; while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2] } t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === b ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return b || (e = v[n] = v[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return b || (p.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]]; else C.always(e[C.status]); return this }, abort: function (e) { var t = e || w; return u && u.abort(t), k(0, t), this } }; if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C; l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]); for (i in p.headers) C.setRequestHeader(i, p.headers[i]); if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort(); w = "abort"; for (i in { success: 1, error: 1, complete: 1 }) C[i](p[i]); if (u = qn(jn, p, n, C)) { C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () { C.abort("timeout") }, p.timeout)); try { b = 1, u.send(y, k) } catch (N) { if (!(2 > b)) throw N; k(-1, N) } } else k(-1, "No Transport"); function k(e, n, r, i) { var c, y, v, w, T, N = n; 2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop"))) } return C }, getJSON: function (e, t, n) { return x.get(e, t, n, "json") }, getScript: function (e, n) { return x.get(e, t, n, "script") } }), x.each(["get", "post"], function (e, n) { x[n] = function (e, r, i, o) { return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }); function Mn(e, n, r) { var i, o, a, s, l = e.contents, u = e.dataTypes; while ("*" === u[0]) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in l) if (l[s] && l[s].test(o)) { u.unshift(s); break } if (u[0] in r) a = u[0]; else { for (s in r) { if (!u[0] || e.converters[s + " " + u[0]]) { a = s; break } i || (i = s) } a = a || i } return a ? (a !== u[0] && u.unshift(a), r[a]) : t } function On(e, t, n, r) { var i, o, a, s, l, u = {}, c = e.dataTypes.slice(); if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a]; o = c.shift(); while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) { if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) { a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1])); break } if (a !== !0) if (a && e["throws"]) t = a(t); else try { t = a(t) } catch (p) { return { state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o} } } return { state: "success", data: t} } x.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return x.globalEval(e), e } } }), x.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), x.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = a.head || x("head")[0] || a.documentElement; return { send: function (t, i) { n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/; x.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = Fn.pop() || x.expando + "_" + vn++; return this[e] = !0, e } }), x.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data"); return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || x.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t }), "script") : t }); var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () { var e; for (e in Pn) Pn[e](t, !0) }; function In() { try { return new e.XMLHttpRequest } catch (t) { } } function zn() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) { } } x.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && In() || zn() } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) { if (!n.crossDomain || x.support.cors) { var r; return { send: function (i, o) { var a, s, l = n.xhr(); if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s]; n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) l.setRequestHeader(s, i[s]) } catch (u) { } l.send(n.hasContent && n.data || null), r = function (e, i) { var s, u, c, p; try { if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort(); else { p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText); try { c = l.statusText } catch (f) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404 } } catch (d) { i || o(-1, d) } p && o(s, c, p, u) }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } } }); var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = { "*": [function (e, t) { var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20; if (a && a[3] !== o) { o = o || a[3], i = i || [], a = +r || 1; do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l) } return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n } ] }; function Kn() { return setTimeout(function () { Xn = t }), Xn = x.now() } function Zn(e, t, n) { var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length; for (; a > o; o++) if (r = i[o].call(n, t, e)) return r } function er(e, t, n) { var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () { delete l.elem }), l = function () { if (i) return !1; var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; for (; l > a; a++) u.tweens[a].run(o); return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1) }, u = s.promise({ elem: e, props: x.extend({}, t), opts: x.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing); return u.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? u.tweens.length : 0; if (i) return this; for (i = !0; r > n; n++) u.tweens[n].run(1); return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this } }), c = u.props; for (tr(c, u.opts.specialEasing); a > o; o++) if (r = Gn[o].call(u, e, c, u.opts)) return r; return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) } function tr(e, t) { var n, r, i, o, a; for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) { o = a.expand(o), delete e[r]; for (n in o) n in e || (e[n] = o[n], t[n] = i) } else t[r] = i } x.Animation = x.extend(er, { tweener: function (e, t) { x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); var n, r = 0, i = e.length; for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t) }, prefilter: function (e, t) { t ? Gn.unshift(e) : Gn.push(e) } }); function nr(e, t, n) { var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow"); n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () { s.unqueued || l() }), s.unqueued++, u.always(function () { u.always(function () { s.unqueued--, x.queue(e, "fx").length || s.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () { p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2] })); for (r in t) if (i = t[r], Vn.exec(i)) { if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue; c[r] = d && d[r] || x.style(e, r) } if (!x.isEmptyObject(c)) { d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () { x(e).hide() }), u.done(function () { var t; x._removeData(e, "fxshow"); for (t in c) x.style(e, t, c[t]) }); for (r in c) a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0)) } } function rr(e, t, n, r, i) { return new rr.prototype.init(e, t, n, r, i) } x.Tween = rr, rr.prototype = { constructor: rr, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px") }, cur: function () { var e = rr.propHooks[this.prop]; return e && e.get ? e.get(this) : rr.propHooks._default.get(this) }, run: function (e) { var t, n = rr.propHooks[this.prop]; return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this } }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function (e) { x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, x.each(["toggle", "show", "hide"], function (e, t) { var n = x.fn[t]; x.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i) } }), x.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(nn).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () { var t = er(this, x.extend({}, e), o); (i || x._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]); for (n = o.length; n--; ) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); (t || !r) && x.dequeue(this, e) }) }, finish: function (e) { return e !== !1 && (e = e || "fx"), this.each(function () { var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0; for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }); function ir(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } x.each({ slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle"} }, function (e, t) { x.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), x.speed = function (e, t, n) { var r = e && "object" == typeof e ? x.extend({}, e) : { complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t }; return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () { x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue) }, r }, x.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () { var e, n = x.timers, r = 0; for (Xn = x.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1); n.length || x.fx.stop(), Xn = t }, x.fx.timer = function (e) { e() && x.timers.push(e) && x.fx.start() }, x.fx.interval = 13, x.fx.start = function () { Un || (Un = setInterval(x.fx.tick, x.fx.interval)) }, x.fx.stop = function () { clearInterval(Un), Un = null }, x.fx.speeds = { slow: 600, fast: 200, _default: 400 }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) { return x.grep(x.timers, function (t) { return e === t.elem }).length }), x.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { x.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; if (s) return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o }, x.offset = { setOffset: function (e, t, n) { var r = x.css(e, "position"); "static" === r && (e.style.position = "relative"); var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f; l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u) } }, x.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0)} } }, offsetParent: function () { return this.map(function () { var e = this.offsetParent || s; while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent; return e || s }) } }), x.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); x.fn[e] = function (i) { return x.access(this, function (e, i, o) { var a = or(e); return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t) }, e, i, arguments.length, null) } }); function or(e) { return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 } x.each({ Height: "height", Width: "width" }, function (e, n) { x.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { x.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border"); return x.access(this, function (n, r, i) { var o; return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), x.fn.size = function () { return this.length }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () { return x }))
})(window);
addjQuery(true);
function addjQuery(jquery) {
if (jquery == true) {
/*!
* jQuery JavaScript Library v1.10.2
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2013-07-03T13:48Z
*/
(function (window, undefined) {
var
readyList,
rootjQuery,
core_strundefined = typeof undefined,
location = window.location,
document = window.document,
docElem = document.documentElement,
_jQuery = window.jQuery,
_$ = window.$,
class2type = {},
core_deletedIds = [],
core_version = "1.10.2",
core_concat = core_deletedIds.concat,
core_push = core_deletedIds.push,
core_slice = core_deletedIds.slice,
core_indexOf = core_deletedIds.indexOf,
core_toString = class2type.toString,
core_hasOwn = class2type.hasOwnProperty,
core_trim = core_version.trim,
jQuery = function (selector, context) {
return new jQuery.fn.init(selector, context, rootjQuery);
},
core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
core_rnotwhite = /\S+/g,
rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
rvalidchars = /^[\],:{}\s]*$/,
rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
rmsPrefix = /^-ms-/,
rdashAlpha = /-([\da-z])/gi,
fcamelCase = function (all, letter) {
return letter.toUpperCase();
},
completed = function (event) {
if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
detach();
jQuery.ready();
}
},
detach = function () {
if (document.addEventListener) {
document.removeEventListener("DOMContentLoaded", completed, false);
window.removeEventListener("load", completed, false);
} else {
document.detachEvent("onreadystatechange", completed);
window.detachEvent("onload", completed);
}
};
jQuery.fn = jQuery.prototype = {
jquery: core_version,
constructor: jQuery,
init: function (selector, context, rootjQuery) {
var match, elem;
if (!selector) {
return this;
}
if (typeof selector === "string") {
if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
match = [null, selector, null];
} else {
match = rquickExpr.exec(selector);
}
if (match && (match[1] || !context)) {
if (match[1]) {
context = context instanceof jQuery ? context[0] : context;
jQuery.merge(this, jQuery.parseHTML(
match[1],
context && context.nodeType ? context.ownerDocument || context : document,
true
));
if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
for (match in context) {
if (jQuery.isFunction(this[match])) {
this[match](context[match]);
} else {
this.attr(match, context[match]);
}
}
}
return this;
} else {
elem = document.getElementById(match[2]);
if (elem && elem.parentNode) {
if (elem.id !== match[2]) {
return rootjQuery.find(selector);
}
this.length = 1;
this[0] = elem;
}
this.context = document;
this.selector = selector;
return this;
}
} else if (!context || context.jquery) {
return (context || rootjQuery).find(selector);
} else {
return this.constructor(context).find(selector);
}
} else if (selector.nodeType) {
this.context = this[0] = selector;
this.length = 1;
return this;
} else if (jQuery.isFunction(selector)) {
return rootjQuery.ready(selector);
}
if (selector.selector !== undefined) {
this.selector = selector.selector;
this.context = selector.context;
}
return jQuery.makeArray(selector, this);
},
selector: "",
length: 0,
toArray: function () {
return core_slice.call(this);
},
get: function (num) {
return num == null ?
this.toArray() :
(num < 0 ? this[this.length + num] : this[num]);
},
pushStack: function (elems) {
var ret = jQuery.merge(this.constructor(), elems);
ret.prevObject = this;
ret.context = this.context;
return ret;
},
each: function (callback, args) {
return jQuery.each(this, callback, args);
},
ready: function (fn) {
jQuery.ready.promise().done(fn);
return this;
},
slice: function () {
return this.pushStack(core_slice.apply(this, arguments));
},
first: function () {
return this.eq(0);
},
last: function () {
return this.eq(-1);
},
eq: function (i) {
var len = this.length,
j = +i + (i < 0 ? len : 0);
return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
},
map: function (callback) {
return this.pushStack(jQuery.map(this, function (elem, i) {
return callback.call(elem, i, elem);
}));
},
end: function () {
return this.prevObject || this.constructor(null);
},
push: core_push,
sort: [].sort,
splice: [].splice
};
jQuery.fn.init.prototype = jQuery.fn;
jQuery.extend = jQuery.fn.extend = function () {
var src, copyIsArray, copy, name, options, clone,
target = arguments[0] || {},
i = 1,
length = arguments.length,
deep = false;
if (typeof target === "boolean") {
deep = target;
target = arguments[1] || {};
i = 2;
}
if (typeof target !== "object" && !jQuery.isFunction(target)) {
target = {};
}
if (length === i) {
target = this;
--i;
}
for (; i < length; i++) {
if ((options = arguments[i]) != null) {
for (name in options) {
src = target[name];
copy = options[name];
if (target === copy) {
continue;
}
if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
if (copyIsArray) {
copyIsArray = false;
clone = src && jQuery.isArray(src) ? src : [];
} else {
clone = src && jQuery.isPlainObject(src) ? src : {};
}
target[name] = jQuery.extend(deep, clone, copy);
} else if (copy !== undefined) {
target[name] = copy;
}
}
}
}
return target;
};
jQuery.extend({
expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),
noConflict: function (deep) {
if (window.$ === jQuery) {
window.$ = _$;
}
if (deep && window.jQuery === jQuery) {
window.jQuery = _jQuery;
}
return jQuery;
},
isReady: false,
readyWait: 1,
holdReady: function (hold) {
if (hold) {
jQuery.readyWait++;
} else {
jQuery.ready(true);
}
},
ready: function (wait) {
if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
return;
}
if (!document.body) {
return setTimeout(jQuery.ready);
}
jQuery.isReady = true;
if (wait !== true && --jQuery.readyWait > 0) {
return;
}
readyList.resolveWith(document, [jQuery]);
if (jQuery.fn.trigger) {
jQuery(document).trigger("ready").off("ready");
}
},
isFunction: function (obj) {
return jQuery.type(obj) === "function";
},
isArray: Array.isArray || function (obj) {
return jQuery.type(obj) === "array";
},
isWindow: function (obj) {
return obj != null && obj == obj.window;
},
isNumeric: function (obj) {
return !isNaN(parseFloat(obj)) && isFinite(obj);
},
type: function (obj) {
if (obj == null) {
return String(obj);
}
return typeof obj === "object" || typeof obj === "function" ?
class2type[core_toString.call(obj)] || "object" :
typeof obj;
},
isPlainObject: function (obj) {
var key;
if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
return false;
}
try {
if (obj.constructor &&
!core_hasOwn.call(obj, "constructor") &&
!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
return false;
}
} catch (e) {
return false;
}
if (jQuery.support.ownLast) {
for (key in obj) {
return core_hasOwn.call(obj, key);
}
}
for (key in obj) { }
return key === undefined || core_hasOwn.call(obj, key);
},
isEmptyObject: function (obj) {
var name;
for (name in obj) {
return false;
}
return true;
},
error: function (msg) {
throw new Error(msg);
},
parseHTML: function (data, context, keepScripts) {
if (!data || typeof data !== "string") {
return null;
}
if (typeof context === "boolean") {
keepScripts = context;
context = false;
}
context = context || document;
var parsed = rsingleTag.exec(data),
scripts = !keepScripts && [];
if (parsed) {
return [context.createElement(parsed[1])];
}
parsed = jQuery.buildFragment([data], context, scripts);
if (scripts) {
jQuery(scripts).remove();
}
return jQuery.merge([], parsed.childNodes);
},
parseJSON: function (data) {
if (window.JSON && window.JSON.parse) {
return window.JSON.parse(data);
}
if (data === null) {
return data;
}
if (typeof data === "string") {
data = jQuery.trim(data);
if (data) {
if (rvalidchars.test(data.replace(rvalidescape, "@")
.replace(rvalidtokens, "]")
.replace(rvalidbraces, ""))) {
return (new Function("return " + data))();
}
}
}
jQuery.error("Invalid JSON: " + data);
},
parseXML: function (data) {
var xml, tmp;
if (!data || typeof data !== "string") {
return null;
}
try {
if (window.DOMParser) {
tmp = new DOMParser();
xml = tmp.parseFromString(data, "text/xml");
} else {
xml = new ActiveXObject("Microsoft.XMLDOM");
xml.async = "false";
xml.loadXML(data);
}
} catch (e) {
xml = undefined;
}
if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
jQuery.error("Invalid XML: " + data);
}
return xml;
},
noop: function () { },
globalEval: function (data) {
if (data && jQuery.trim(data)) {
(window.execScript || function (data) {
window["eval"].call(window, data);
})(data);
}
},
camelCase: function (string) {
return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
},
nodeName: function (elem, name) {
return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
},
each: function (obj, callback, args) {
var value,
i = 0,
length = obj.length,
isArray = isArraylike(obj);
if (args) {
if (isArray) {
for (; i < length; i++) {
value = callback.apply(obj[i], args);
if (value === false) {
break;
}
}
} else {
for (i in obj) {
value = callback.apply(obj[i], args);
if (value === false) {
break;
}
}
}
} else {
if (isArray) {
for (; i < length; i++) {
value = callback.call(obj[i], i, obj[i]);
if (value === false) {
break;
}
}
} else {
for (i in obj) {
value = callback.call(obj[i], i, obj[i]);
if (value === false) {
break;
}
}
}
}
return obj;
},
trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
function (text) {
return text == null ?
"" :
core_trim.call(text);
} :
function (text) {
return text == null ?
"" :
(text + "").replace(rtrim, "");
},
makeArray: function (arr, results) {
var ret = results || [];
if (arr != null) {
if (isArraylike(Object(arr))) {
jQuery.merge(ret,
typeof arr === "string" ?
[arr] : arr
);
} else {
core_push.call(ret, arr);
}
}
return ret;
},
inArray: function (elem, arr, i) {
var len;
if (arr) {
if (core_indexOf) {
return core_indexOf.call(arr, elem, i);
}
len = arr.length;
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
for (; i < len; i++) {
if (i in arr && arr[i] === elem) {
return i;
}
}
}
return -1;
},
merge: function (first, second) {
var l = second.length,
i = first.length,
j = 0;
if (typeof l === "number") {
for (; j < l; j++) {
first[i++] = second[j];
}
} else {
while (second[j] !== undefined) {
first[i++] = second[j++];
}
}
first.length = i;
return first;
},
grep: function (elems, callback, inv) {
var retVal,
ret = [],
i = 0,
length = elems.length;
inv = !!inv;
for (; i < length; i++) {
retVal = !!callback(elems[i], i);
if (inv !== retVal) {
ret.push(elems[i]);
}
}
return ret;
},
map: function (elems, callback, arg) {
var value,
i = 0,
length = elems.length,
isArray = isArraylike(elems),
ret = [];
if (isArray) {
for (; i < length; i++) {
value = callback(elems[i], i, arg);
if (value != null) {
ret[ret.length] = value;
}
}
} else {
for (i in elems) {
value = callback(elems[i], i, arg);
if (value != null) {
ret[ret.length] = value;
}
}
}
return core_concat.apply([], ret);
},
guid: 1,
proxy: function (fn, context) {
var args, proxy, tmp;
if (typeof context === "string") {
tmp = fn[context];
context = fn;
fn = tmp;
}
if (!jQuery.isFunction(fn)) {
return undefined;
}
args = core_slice.call(arguments, 2);
proxy = function () {
return fn.apply(context || this, args.concat(core_slice.call(arguments)));
};
proxy.guid = fn.guid = fn.guid || jQuery.guid++;
return proxy;
},
access: function (elems, fn, key, value, chainable, emptyGet, raw) {
var i = 0,
length = elems.length,
bulk = key == null;
if (jQuery.type(key) === "object") {
chainable = true;
for (i in key) {
jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
}
} else if (value !== undefined) {
chainable = true;
if (!jQuery.isFunction(value)) {
raw = true;
}
if (bulk) {
if (raw) {
fn.call(elems, value);
fn = null;
} else {
bulk = fn;
fn = function (elem, key, value) {
return bulk.call(jQuery(elem), value);
};
}
}
if (fn) {
for (; i < length; i++) {
fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
}
}
}
return chainable ?
elems :
bulk ?
fn.call(elems) :
length ? fn(elems[0], key) : emptyGet;
},
now: function () {
return (new Date()).getTime();
},
swap: function (elem, options, callback, args) {
var ret, name,
old = {};
for (name in options) {
old[name] = elem.style[name];
elem.style[name] = options[name];
}
ret = callback.apply(elem, args || []);
for (name in options) {
elem.style[name] = old[name];
}
return ret;
}
});
jQuery.ready.promise = function (obj) {
if (!readyList) {
readyList = jQuery.Deferred();
if (document.readyState === "complete") {
setTimeout(jQuery.ready);
} else if (document.addEventListener) {
document.addEventListener("DOMContentLoaded", completed, false);
window.addEventListener("load", completed, false);
} else {
document.attachEvent("onreadystatechange", completed);
window.attachEvent("onload", completed);
var top = false;
try {
top = window.frameElement == null && document.documentElement;
} catch (e) { }
if (top && top.doScroll) {
(function doScrollCheck() {
if (!jQuery.isReady) {
try {
top.doScroll("left");
} catch (e) {
return setTimeout(doScrollCheck, 50);
}
detach();
jQuery.ready();
}
})();
}
}
}
return readyList.promise(obj);
};
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
class2type["[object " + name + "]"] = name.toLowerCase();
});
function isArraylike(obj) {
var length = obj.length,
type = jQuery.type(obj);
if (jQuery.isWindow(obj)) {
return false;
}
if (obj.nodeType === 1 && length) {
return true;
}
return type === "array" || type !== "function" &&
(length === 0 ||
typeof length === "number" && length > 0 && (length - 1) in obj);
}
rootjQuery = jQuery(document);
/*!
* Sizzle CSS Selector Engine v1.10.2
* http://sizzlejs.com/
*
* Copyright 2013 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2013-07-03
*/
(function (window, undefined) {
var i,
support,
cachedruns,
Expr,
getText,
isXML,
compile,
outermostContext,
sortInput,
setDocument,
document,
docElem,
documentIsHTML,
rbuggyQSA,
rbuggyMatches,
matches,
contains,
expando = "sizzle" + -(new Date()),
preferredDoc = window.document,
dirruns = 0,
done = 0,
classCache = createCache(),
tokenCache = createCache(),
compilerCache = createCache(),
hasDuplicate = false,
sortOrder = function (a, b) {
if (a === b) {
hasDuplicate = true;
return 0;
}
return 0;
},
strundefined = typeof undefined,
MAX_NEGATIVE = 1 << 31,
hasOwn = ({}).hasOwnProperty,
arr = [],
pop = arr.pop,
push_native = arr.push,
push = arr.push,
slice = arr.slice,
indexOf = arr.indexOf || function (elem) {
var i = 0,
len = this.length;
for (; i < len; i++) {
if (this[i] === elem) {
return i;
}
}
return -1;
},
booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
whitespace = "[\\x20\\t\\r\\n\\f]",
characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
identifier = characterEncoding.replace("w", "w#"),
attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",
pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace(3, 8) + ")*)|.*)\\)|)",
rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
rsibling = new RegExp(whitespace + "*[+~]"),
rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g"),
rpseudo = new RegExp(pseudos),
ridentifier = new RegExp("^" + identifier + "$"),
matchExpr = {
"ID": new RegExp("^#(" + characterEncoding + ")"),
"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
"ATTR": new RegExp("^" + attributes),
"PSEUDO": new RegExp("^" + pseudos),
"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
"*(\\d+)|))" + whitespace + "*\\)|)", "i"),
"bool": new RegExp("^(?:" + booleans + ")$", "i"),
"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
},
rnative = /^[^{]+\{\s*\[native \w/,
rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rinputs = /^(?:input|select|textarea|button)$/i,
rheader = /^h\d$/i,
rescape = /'|\\/g,
runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
funescape = function (_, escaped, escapedWhitespace) {
var high = "0x" + escaped - 0x10000;
return high !== high || escapedWhitespace ?
escaped :
high < 0 ?
String.fromCharCode(high + 0x10000) :
String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
};
try {
push.apply(
(arr = slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
} catch (e) {
push = { apply: arr.length ?
function (target, els) {
push_native.apply(target, slice.call(els));
} :
function (target, els) {
var j = target.length,
i = 0;
while ((target[j++] = els[i++])) { }
target.length = j - 1;
}
};
}
function Sizzle(selector, context, results, seed) {
var match, elem, m, nodeType,
i, groups, old, nid, newContext, newSelector;
if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
setDocument(context);
}
context = context || document;
results = results || [];
if (!selector || typeof selector !== "string") {
return results;
}
if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
return [];
}
if (documentIsHTML && !seed) {
if ((match = rquickExpr.exec(selector))) {
if ((m = match[1])) {
if (nodeType === 9) {
elem = context.getElementById(m);
if (elem && elem.parentNode) {
if (elem.id === m) {
results.push(elem);
return results;
}
} else {
return results;
}
} else {
if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) &&
contains(context, elem) && elem.id === m) {
results.push(elem);
return results;
}
}
} else if (match[2]) {
push.apply(results, context.getElementsByTagName(selector));
return results;
} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
push.apply(results, context.getElementsByClassName(m));
return results;
}
}
if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
nid = old = expando;
newContext = context;
newSelector = nodeType === 9 && selector;
if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
groups = tokenize(selector);
if ((old = context.getAttribute("id"))) {
nid = old.replace(rescape, "\\$&");
} else {
context.setAttribute("id", nid);
}
nid = "[id='" + nid + "'] ";
i = groups.length;
while (i--) {
groups[i] = nid + toSelector(groups[i]);
}
newContext = rsibling.test(selector) && context.parentNode || context;
newSelector = groups.join(",");
}
if (newSelector) {
try {
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
} catch (qsaError) {
} finally {
if (!old) {
context.removeAttribute("id");
}
}
}
}
}
return select(selector.replace(rtrim, "$1"), context, results, seed);
}
function createCache() {
var keys = [];
function cache(key, value) {
if (keys.push(key += " ") > Expr.cacheLength) {
delete cache[keys.shift()];
}
return (cache[key] = value);
}
return cache;
}
function markFunction(fn) {
fn[expando] = true;
return fn;
}
function assert(fn) {
var div = document.createElement("div");
try {
return !!fn(div);
} catch (e) {
return false;
} finally {
if (div.parentNode) {
div.parentNode.removeChild(div);
}
div = null;
}
}
function addHandle(attrs, handler) {
var arr = attrs.split("|"),
i = attrs.length;
while (i--) {
Expr.attrHandle[arr[i]] = handler;
}
}
function siblingCheck(a, b) {
var cur = b && a,
diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
(~b.sourceIndex || MAX_NEGATIVE) -
(~a.sourceIndex || MAX_NEGATIVE);
if (diff) {
return diff;
}
if (cur) {
while ((cur = cur.nextSibling)) {
if (cur === b) {
return -1;
}
}
}
return a ? 1 : -1;
}
function createInputPseudo(type) {
return function (elem) {
var name = elem.nodeName.toLowerCase();
return name === "input" && elem.type === type;
};
}
function createButtonPseudo(type) {
return function (elem) {
var name = elem.nodeName.toLowerCase();
return (name === "input" || name === "button") && elem.type === type;
};
}
function createPositionalPseudo(fn) {
return markFunction(function (argument) {
argument = +argument;
return markFunction(function (seed, matches) {
var j,
matchIndexes = fn([], seed.length, argument),
i = matchIndexes.length;
while (i--) {
if (seed[(j = matchIndexes[i])]) {
seed[j] = !(matches[j] = seed[j]);
}
}
});
});
}
isXML = Sizzle.isXML = function (elem) {
var documentElement = elem && (elem.ownerDocument || elem).documentElement;
return documentElement ? documentElement.nodeName !== "HTML" : false;
};
support = Sizzle.support = {};
setDocument = Sizzle.setDocument = function (node) {
var doc = node ? node.ownerDocument || node : preferredDoc,
parent = doc.defaultView;
if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
return document;
}
document = doc;
docElem = doc.documentElement;
documentIsHTML = !isXML(doc);
if (parent && parent.attachEvent && parent !== parent.top) {
parent.attachEvent("onbeforeunload", function () {
setDocument();
});
}
support.attributes = assert(function (div) {
div.className = "i";
return !div.getAttribute("className");
});
support.getElementsByTagName = assert(function (div) {
div.appendChild(doc.createComment(""));
return !div.getElementsByTagName("*").length;
});
support.getElementsByClassName = assert(function (div) {
div.innerHTML = "<div class='a'></div><div class='a i'></div>";
div.firstChild.className = "i";
return div.getElementsByClassName("i").length === 2;
});
support.getById = assert(function (div) {
docElem.appendChild(div).id = expando;
return !doc.getElementsByName || !doc.getElementsByName(expando).length;
});
if (support.getById) {
Expr.find["ID"] = function (id, context) {
if (typeof context.getElementById !== strundefined && documentIsHTML) {
var m = context.getElementById(id);
return m && m.parentNode ? [m] : [];
}
};
Expr.filter["ID"] = function (id) {
var attrId = id.replace(runescape, funescape);
return function (elem) {
return elem.getAttribute("id") === attrId;
};
};
} else {
delete Expr.find["ID"];
Expr.filter["ID"] = function (id) {
var attrId = id.replace(runescape, funescape);
return function (elem) {
var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
return node && node.value === attrId;
};
};
}
Expr.find["TAG"] = support.getElementsByTagName ?
function (tag, context) {
if (typeof context.getElementsByTagName !== strundefined) {
return context.getElementsByTagName(tag);
}
} :
function (tag, context) {
var elem,
tmp = [],
i = 0,
results = context.getElementsByTagName(tag);
if (tag === "*") {
while ((elem = results[i++])) {
if (elem.nodeType === 1) {
tmp.push(elem);
}
}
return tmp;
}
return results;
};
Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
return context.getElementsByClassName(className);
}
};
rbuggyMatches = [];
rbuggyQSA = [];
if ((support.qsa = rnative.test(doc.querySelectorAll))) {
assert(function (div) {
div.innerHTML = "<select><option selected=''></option></select>";
if (!div.querySelectorAll("[selected]").length) {
rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
}
if (!div.querySelectorAll(":checked").length) {
rbuggyQSA.push(":checked");
}
});
assert(function (div) {
var input = doc.createElement("input");
input.setAttribute("type", "hidden");
div.appendChild(input).setAttribute("t", "");
if (div.querySelectorAll("[t^='']").length) {
rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
}
if (!div.querySelectorAll(":enabled").length) {
rbuggyQSA.push(":enabled", ":disabled");
}
div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:");
});
}
if ((support.matchesSelector = rnative.test((matches = docElem.webkitMatchesSelector ||
docElem.mozMatchesSelector ||
docElem.oMatchesSelector ||
docElem.msMatchesSelector)))) {
assert(function (div) {
support.disconnectedMatch = matches.call(div, "div");
matches.call(div, "[s!='']:x");
rbuggyMatches.push("!=", pseudos);
});
}
rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
contains = rnative.test(docElem.contains) || docElem.compareDocumentPosition ?
function (a, b) {
var adown = a.nodeType === 9 ? a.documentElement : a,
bup = b && b.parentNode;
return a === bup || !!(bup && bup.nodeType === 1 && (
adown.contains ?
adown.contains(bup) :
a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
));
} :
function (a, b) {
if (b) {
while ((b = b.parentNode)) {
if (b === a) {
return true;
}
}
}
return false;
};
sortOrder = docElem.compareDocumentPosition ?
function (a, b) {
if (a === b) {
hasDuplicate = true;
return 0;
}
var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
if (compare) {
if (compare & 1 ||
(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
if (a === doc || contains(preferredDoc, a)) {
return -1;
}
if (b === doc || contains(preferredDoc, b)) {
return 1;
}
return sortInput ?
(indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
0;
}
return compare & 4 ? -1 : 1;
}
return a.compareDocumentPosition ? -1 : 1;
} :
function (a, b) {
var cur,
i = 0,
aup = a.parentNode,
bup = b.parentNode,
ap = [a],
bp = [b];
if (a === b) {
hasDuplicate = true;
return 0;
} else if (!aup || !bup) {
return a === doc ? -1 :
b === doc ? 1 :
aup ? -1 :
bup ? 1 :
sortInput ?
(indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
0;
} else if (aup === bup) {
return siblingCheck(a, b);
}
cur = a;
while ((cur = cur.parentNode)) {
ap.unshift(cur);
}
cur = b;
while ((cur = cur.parentNode)) {
bp.unshift(cur);
}
while (ap[i] === bp[i]) {
i++;
}
return i ?
siblingCheck(ap[i], bp[i]) :
ap[i] === preferredDoc ? -1 :
bp[i] === preferredDoc ? 1 :
0;
};
return doc;
};
Sizzle.matches = function (expr, elements) {
return Sizzle(expr, null, null, elements);
};
Sizzle.matchesSelector = function (elem, expr) {
if ((elem.ownerDocument || elem) !== document) {
setDocument(elem);
}
expr = expr.replace(rattributeQuotes, "='$1']");
if (support.matchesSelector && documentIsHTML &&
(!rbuggyMatches || !rbuggyMatches.test(expr)) &&
(!rbuggyQSA || !rbuggyQSA.test(expr))) {
try {
var ret = matches.call(elem, expr);
if (ret || support.disconnectedMatch ||
elem.document && elem.document.nodeType !== 11) {
return ret;
}
} catch (e) { }
}
return Sizzle(expr, document, null, [elem]).length > 0;
};
Sizzle.contains = function (context, elem) {
if ((context.ownerDocument || context) !== document) {
setDocument(context);
}
return contains(context, elem);
};
Sizzle.attr = function (elem, name) {
if ((elem.ownerDocument || elem) !== document) {
setDocument(elem);
}
var fn = Expr.attrHandle[name.toLowerCase()],
val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
fn(elem, name, !documentIsHTML) :
undefined;
return val === undefined ?
support.attributes || !documentIsHTML ?
elem.getAttribute(name) :
(val = elem.getAttributeNode(name)) && val.specified ?
val.value :
null :
val;
};
Sizzle.error = function (msg) {
throw new Error("Syntax error, unrecognized expression: " + msg);
};
Sizzle.uniqueSort = function (results) {
var elem,
duplicates = [],
j = 0,
i = 0;
hasDuplicate = !support.detectDuplicates;
sortInput = !support.sortStable && results.slice(0);
results.sort(sortOrder);
if (hasDuplicate) {
while ((elem = results[i++])) {
if (elem === results[i]) {
j = duplicates.push(i);
}
}
while (j--) {
results.splice(duplicates[j], 1);
}
}
return results;
};
getText = Sizzle.getText = function (elem) {
var node,
ret = "",
i = 0,
nodeType = elem.nodeType;
if (!nodeType) {
for (; (node = elem[i]); i++) {
ret += getText(node);
}
} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
if (typeof elem.textContent === "string") {
return elem.textContent;
} else {
for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
ret += getText(elem);
}
}
} else if (nodeType === 3 || nodeType === 4) {
return elem.nodeValue;
}
return ret;
};
Expr = Sizzle.selectors = {
cacheLength: 50,
createPseudo: markFunction,
match: matchExpr,
attrHandle: {},
find: {},
relative: {
">": { dir: "parentNode", first: true },
" ": { dir: "parentNode" },
"+": { dir: "previousSibling", first: true },
"~": { dir: "previousSibling" }
},
preFilter: {
"ATTR": function (match) {
match[1] = match[1].replace(runescape, funescape);
match[3] = (match[4] || match[5] || "").replace(runescape, funescape);
if (match[2] === "~=") {
match[3] = " " + match[3] + " ";
}
return match.slice(0, 4);
},
"CHILD": function (match) {
match[1] = match[1].toLowerCase();
if (match[1].slice(0, 3) === "nth") {
if (!match[3]) {
Sizzle.error(match[0]);
}
match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
match[5] = +((match[7] + match[8]) || match[3] === "odd");
} else if (match[3]) {
Sizzle.error(match[0]);
}
return match;
},
"PSEUDO": function (match) {
var excess,
unquoted = !match[5] && match[2];
if (matchExpr["CHILD"].test(match[0])) {
return null;
}
if (match[3] && match[4] !== undefined) {
match[2] = match[4];
} else if (unquoted && rpseudo.test(unquoted) &&
(excess = tokenize(unquoted, true)) &&
(excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
match[0] = match[0].slice(0, excess);
match[2] = unquoted.slice(0, excess);
}
return match.slice(0, 3);
}
},
filter: {
"TAG": function (nodeNameSelector) {
var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
return nodeNameSelector === "*" ?
function () { return true; } :
function (elem) {
return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
};
},
"CLASS": function (className) {
var pattern = classCache[className + " "];
return pattern ||
(pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
classCache(className, function (elem) {
return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
});
},
"ATTR": function (name, operator, check) {
return function (elem) {
var result = Sizzle.attr(elem, name);
if (result == null) {
return operator === "!=";
}
if (!operator) {
return true;
}
result += "";
return operator === "=" ? result === check :
operator === "!=" ? result !== check :
operator === "^=" ? check && result.indexOf(check) === 0 :
operator === "*=" ? check && result.indexOf(check) > -1 :
operator === "$=" ? check && result.slice(-check.length) === check :
operator === "~=" ? (" " + result + " ").indexOf(check) > -1 :
operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
false;
};
},
"CHILD": function (type, what, argument, first, last) {
var simple = type.slice(0, 3) !== "nth",
forward = type.slice(-4) !== "last",
ofType = what === "of-type";
return first === 1 && last === 0 ?
function (elem) {
return !!elem.parentNode;
} :
function (elem, context, xml) {
var cache, outerCache, node, diff, nodeIndex, start,
dir = simple !== forward ? "nextSibling" : "previousSibling",
parent = elem.parentNode,
name = ofType && elem.nodeName.toLowerCase(),
useCache = !xml && !ofType;
if (parent) {
if (simple) {
while (dir) {
node = elem;
while ((node = node[dir])) {
if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
return false;
}
}
start = dir = type === "only" && !start && "nextSibling";
}
return true;
}
start = [forward ? parent.firstChild : parent.lastChild];
if (forward && useCache) {
outerCache = parent[expando] || (parent[expando] = {});
cache = outerCache[type] || [];
nodeIndex = cache[0] === dirruns && cache[1];
diff = cache[0] === dirruns && cache[2];
node = nodeIndex && parent.childNodes[nodeIndex];
while ((node = ++nodeIndex && node && node[dir] ||
(diff = nodeIndex = 0) || start.pop())) {
if (node.nodeType === 1 && ++diff && node === elem) {
outerCache[type] = [dirruns, nodeIndex, diff];
break;
}
}
} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
diff = cache[1];
} else {
while ((node = ++nodeIndex && node && node[dir] ||
(diff = nodeIndex = 0) || start.pop())) {
if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
if (useCache) {
(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
}
if (node === elem) {
break;
}
}
}
}
diff -= last;
return diff === first || (diff % first === 0 && diff / first >= 0);
}
};
},
"PSEUDO": function (pseudo, argument) {
var args,
fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
Sizzle.error("unsupported pseudo: " + pseudo);
if (fn[expando]) {
return fn(argument);
}
if (fn.length > 1) {
args = [pseudo, pseudo, "", argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
markFunction(function (seed, matches) {
var idx,
matched = fn(seed, argument),
i = matched.length;
while (i--) {
idx = indexOf.call(seed, matched[i]);
seed[idx] = !(matches[idx] = matched[i]);
}
}) :
function (elem) {
return fn(elem, 0, args);
};
}
return fn;
}
},
pseudos: {
"not": markFunction(function (selector) {
var input = [],
results = [],
matcher = compile(selector.replace(rtrim, "$1"));
return matcher[expando] ?
markFunction(function (seed, matches, context, xml) {
var elem,
unmatched = matcher(seed, null, xml, []),
i = seed.length;
while (i--) {
if ((elem = unmatched[i])) {
seed[i] = !(matches[i] = elem);
}
}
}) :
function (elem, context, xml) {
input[0] = elem;
matcher(input, null, xml, results);
return !results.pop();
};
}),
"has": markFunction(function (selector) {
return function (elem) {
return Sizzle(selector, elem).length > 0;
};
}),
"contains": markFunction(function (text) {
return function (elem) {
return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
};
}),
"lang": markFunction(function (lang) {
if (!ridentifier.test(lang || "")) {
Sizzle.error("unsupported lang: " + lang);
}
lang = lang.replace(runescape, funescape).toLowerCase();
return function (elem) {
var elemLang;
do {
if ((elemLang = documentIsHTML ?
elem.lang :
elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
elemLang = elemLang.toLowerCase();
return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
}
} while ((elem = elem.parentNode) && elem.nodeType === 1);
return false;
};
}),
"target": function (elem) {
var hash = window.location && window.location.hash;
return hash && hash.slice(1) === elem.id;
},
"root": function (elem) {
return elem === docElem;
},
"focus": function (elem) {
return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
},
"enabled": function (elem) {
return elem.disabled === false;
},
"disabled": function (elem) {
return elem.disabled === true;
},
"checked": function (elem) {
var nodeName = elem.nodeName.toLowerCase();
return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
},
"selected": function (elem) {
if (elem.parentNode) {
elem.parentNode.selectedIndex;
}
return elem.selected === true;
},
"empty": function (elem) {
for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
if (elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4) {
return false;
}
}
return true;
},
"parent": function (elem) {
return !Expr.pseudos["empty"](elem);
},
"header": function (elem) {
return rheader.test(elem.nodeName);
},
"input": function (elem) {
return rinputs.test(elem.nodeName);
},
"button": function (elem) {
var name = elem.nodeName.toLowerCase();
return name === "input" && elem.type === "button" || name === "button";
},
"text": function (elem) {
var attr;
return elem.nodeName.toLowerCase() === "input" &&
elem.type === "text" &&
((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type);
},
"first": createPositionalPseudo(function () {
return [0];
}),
"last": createPositionalPseudo(function (matchIndexes, length) {
return [length - 1];
}),
"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
return [argument < 0 ? argument + length : argument];
}),
"even": createPositionalPseudo(function (matchIndexes, length) {
var i = 0;
for (; i < length; i += 2) {
matchIndexes.push(i);
}
return matchIndexes;
}),
"odd": createPositionalPseudo(function (matchIndexes, length) {
var i = 1;
for (; i < length; i += 2) {
matchIndexes.push(i);
}
return matchIndexes;
}),
"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
var i = argument < 0 ? argument + length : argument;
for (; --i >= 0; ) {
matchIndexes.push(i);
}
return matchIndexes;
}),
"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
var i = argument < 0 ? argument + length : argument;
for (; ++i < length; ) {
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos["nth"] = Expr.pseudos["eq"];
for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
Expr.pseudos[i] = createInputPseudo(i);
}
for (i in { submit: true, reset: true }) {
Expr.pseudos[i] = createButtonPseudo(i);
}
function setFilters() { }
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();
function tokenize(selector, parseOnly) {
var matched, match, tokens, type,
soFar, groups, preFilters,
cached = tokenCache[selector + " "];
if (cached) {
return parseOnly ? 0 : cached.slice(0);
}
soFar = selector;
groups = [];
preFilters = Expr.preFilter;
while (soFar) {
if (!matched || (match = rcomma.exec(soFar))) {
if (match) {
soFar = soFar.slice(match[0].length) || soFar;
}
groups.push(tokens = []);
}
matched = false;
if ((match = rcombinators.exec(soFar))) {
matched = match.shift();
tokens.push({
value: matched,
type: match[0].replace(rtrim, " ")
});
soFar = soFar.slice(matched.length);
}
for (type in Expr.filter) {
if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
(match = preFilters[type](match)))) {
matched = match.shift();
tokens.push({
value: matched,
type: type,
matches: match
});
soFar = soFar.slice(matched.length);
}
}
if (!matched) {
break;
}
}
return parseOnly ?
soFar.length :
soFar ?
Sizzle.error(selector) :
tokenCache(selector, groups).slice(0);
}
function toSelector(tokens) {
var i = 0,
len = tokens.length,
selector = "";
for (; i < len; i++) {
selector += tokens[i].value;
}
return selector;
}
function addCombinator(matcher, combinator, base) {
var dir = combinator.dir,
checkNonElements = base && dir === "parentNode",
doneName = done++;
return combinator.first ?
function (elem, context, xml) {
while ((elem = elem[dir])) {
if (elem.nodeType === 1 || checkNonElements) {
return matcher(elem, context, xml);
}
}
} :
function (elem, context, xml) {
var data, cache, outerCache,
dirkey = dirruns + " " + doneName;
if (xml) {
while ((elem = elem[dir])) {
if (elem.nodeType === 1 || checkNonElements) {
if (matcher(elem, context, xml)) {
return true;
}
}
}
} else {
while ((elem = elem[dir])) {
if (elem.nodeType === 1 || checkNonElements) {
outerCache = elem[expando] || (elem[expando] = {});
if ((cache = outerCache[dir]) && cache[0] === dirkey) {
if ((data = cache[1]) === true || data === cachedruns) {
return data === true;
}
} else {
cache = outerCache[dir] = [dirkey];
cache[1] = matcher(elem, context, xml) || cachedruns;
if (cache[1] === true) {
return true;
}
}
}
}
}
};
}
function elementMatcher(matchers) {
return matchers.length > 1 ?
function (elem, context, xml) {
var i = matchers.length;
while (i--) {
if (!matchers[i](elem, context, xml)) {
return false;
}
}
return true;
} :
matchers[0];
}
function condense(unmatched, map, filter, context, xml) {
var elem,
newUnmatched = [],
i = 0,
len = unmatched.length,
mapped = map != null;
for (; i < len; i++) {
if ((elem = unmatched[i])) {
if (!filter || filter(elem, context, xml)) {
newUnmatched.push(elem);
if (mapped) {
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
if (postFilter && !postFilter[expando]) {
postFilter = setMatcher(postFilter);
}
if (postFinder && !postFinder[expando]) {
postFinder = setMatcher(postFinder, postSelector);
}
return markFunction(function (seed, results, context, xml) {
var temp, i, elem,
preMap = [],
postMap = [],
preexisting = results.length,
elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
matcherIn = preFilter && (seed || !selector) ?
condense(elems, preMap, preFilter, context, xml) :
elems,
matcherOut = matcher ?
postFinder || (seed ? preFilter : preexisting || postFilter) ?
[] :
results :
matcherIn;
if (matcher) {
matcher(matcherIn, matcherOut, context, xml);
}
if (postFilter) {
temp = condense(matcherOut, postMap);
postFilter(temp, [], context, xml);
i = temp.length;
while (i--) {
if ((elem = temp[i])) {
matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
}
}
}
if (seed) {
if (postFinder || preFilter) {
if (postFinder) {
temp = [];
i = matcherOut.length;
while (i--) {
if ((elem = matcherOut[i])) {
temp.push((matcherIn[i] = elem));
}
}
postFinder(null, (matcherOut = []), temp, xml);
}
i = matcherOut.length;
while (i--) {
if ((elem = matcherOut[i]) &&
(temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
seed[temp] = !(results[temp] = elem);
}
}
}
} else {
matcherOut = condense(
matcherOut === results ?
matcherOut.splice(preexisting, matcherOut.length) :
matcherOut
);
if (postFinder) {
postFinder(null, results, matcherOut, xml);
} else {
push.apply(results, matcherOut);
}
}
});
}
function matcherFromTokens(tokens) {
var checkContext, matcher, j,
len = tokens.length,
leadingRelative = Expr.relative[tokens[0].type],
implicitRelative = leadingRelative || Expr.relative[" "],
i = leadingRelative ? 1 : 0,
matchContext = addCombinator(function (elem) {
return elem === checkContext;
}, implicitRelative, true),
matchAnyContext = addCombinator(function (elem) {
return indexOf.call(checkContext, elem) > -1;
}, implicitRelative, true),
matchers = [function (elem, context, xml) {
return (!leadingRelative && (xml || context !== outermostContext)) || (
(checkContext = context).nodeType ?
matchContext(elem, context, xml) :
matchAnyContext(elem, context, xml));
} ];
for (; i < len; i++) {
if ((matcher = Expr.relative[tokens[i].type])) {
matchers = [addCombinator(elementMatcher(matchers), matcher)];
} else {
matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
if (matcher[expando]) {
j = ++i;
for (; j < len; j++) {
if (Expr.relative[tokens[j].type]) {
break;
}
}
return setMatcher(
i > 1 && elementMatcher(matchers),
i > 1 && toSelector(
tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })
).replace(rtrim, "$1"),
matcher,
i < j && matcherFromTokens(tokens.slice(i, j)),
j < len && matcherFromTokens((tokens = tokens.slice(j))),
j < len && toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers, setMatchers) {
var matcherCachedRuns = 0,
bySet = setMatchers.length > 0,
byElement = elementMatchers.length > 0,
superMatcher = function (seed, context, xml, results, expandContext) {
var elem, j, matcher,
setMatched = [],
matchedCount = 0,
i = "0",
unmatched = seed && [],
outermost = expandContext != null,
contextBackup = outermostContext,
elems = seed || byElement && Expr.find["TAG"]("*", expandContext && context.parentNode || context),
dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);
if (outermost) {
outermostContext = context !== document && context;
cachedruns = matcherCachedRuns;
}
for (; (elem = elems[i]) != null; i++) {
if (byElement && elem) {
j = 0;
while ((matcher = elementMatchers[j++])) {
if (matcher(elem, context, xml)) {
results.push(elem);
break;
}
}
if (outermost) {
dirruns = dirrunsUnique;
cachedruns = ++matcherCachedRuns;
}
}
if (bySet) {
if ((elem = !matcher && elem)) {
matchedCount--;
}
if (seed) {
unmatched.push(elem);
}
}
}
matchedCount += i;
if (bySet && i !== matchedCount) {
j = 0;
while ((matcher = setMatchers[j++])) {
matcher(unmatched, setMatched, context, xml);
}
if (seed) {
if (matchedCount > 0) {
while (i--) {
if (!(unmatched[i] || setMatched[i])) {
setMatched[i] = pop.call(results);
}
}
}
setMatched = condense(setMatched);
}
push.apply(results, setMatched);
if (outermost && !seed && setMatched.length > 0 &&
(matchedCount + setMatchers.length) > 1) {
Sizzle.uniqueSort(results);
}
}
if (outermost) {
dirruns = dirrunsUnique;
outermostContext = contextBackup;
}
return unmatched;
};
return bySet ?
markFunction(superMatcher) :
superMatcher;
}
compile = Sizzle.compile = function (selector, group ) {
var i,
setMatchers = [],
elementMatchers = [],
cached = compilerCache[selector + " "];
if (!cached) {
if (!group) {
group = tokenize(selector);
}
i = group.length;
while (i--) {
cached = matcherFromTokens(group[i]);
if (cached[expando]) {
setMatchers.push(cached);
} else {
elementMatchers.push(cached);
}
}
cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
}
return cached;
};
function multipleContexts(selector, contexts, results) {
var i = 0,
len = contexts.length;
for (; i < len; i++) {
Sizzle(selector, contexts[i], results);
}
return results;
}
function select(selector, context, results, seed) {
var i, tokens, token, type, find,
match = tokenize(selector);
if (!seed) {
if (match.length === 1) {
tokens = match[0] = match[0].slice(0);
if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
support.getById && context.nodeType === 9 && documentIsHTML &&
Expr.relative[tokens[1].type]) {
context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
if (!context) {
return results;
}
selector = selector.slice(tokens.shift().value.length);
}
i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
while (i--) {
token = tokens[i];
if (Expr.relative[(type = token.type)]) {
break;
}
if ((find = Expr.find[type])) {
if ((seed = find(
token.matches[0].replace(runescape, funescape),
rsibling.test(tokens[0].type) && context.parentNode || context
))) {
tokens.splice(i, 1);
selector = seed.length && toSelector(tokens);
if (!selector) {
push.apply(results, seed);
return results;
}
break;
}
}
}
}
}
compile(selector, match)(
seed,
context,
!documentIsHTML,
results,
rsibling.test(selector)
);
return results;
}
support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
support.detectDuplicates = hasDuplicate;
setDocument();
support.sortDetached = assert(function (div1) {
return div1.compareDocumentPosition(document.createElement("div")) & 1;
});
if (!assert(function (div) {
div.innerHTML = "<a href='#'></a>";
return div.firstChild.getAttribute("href") === "#";
})) {
addHandle("type|href|height|width", function (elem, name, isXML) {
if (!isXML) {
return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
}
});
}
if (!support.attributes || !assert(function (div) {
div.innerHTML = "<input/>";
div.firstChild.setAttribute("value", "");
return div.firstChild.getAttribute("value") === "";
})) {
addHandle("value", function (elem, name, isXML) {
if (!isXML && elem.nodeName.toLowerCase() === "input") {
return elem.defaultValue;
}
});
}
if (!assert(function (div) {
return div.getAttribute("disabled") == null;
})) {
addHandle(booleans, function (elem, name, isXML) {
var val;
if (!isXML) {
return (val = elem.getAttributeNode(name)) && val.specified ?
val.value :
elem[name] === true ? name.toLowerCase() : null;
}
});
}
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
})(window);
var optionsCache = {};
function createOptions(options) {
var object = optionsCache[options] = {};
jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
object[flag] = true;
});
return object;
}
jQuery.Callbacks = function (options) {
options = typeof options === "string" ?
(optionsCache[options] || createOptions(options)) :
jQuery.extend({}, options);
var
firing,
memory,
fired,
firingLength,
firingIndex,
firingStart,
list = [],
stack = !options.once && [],
fire = function (data) {
memory = options.memory && data;
fired = true;
firingIndex = firingStart || 0;
firingStart = 0;
firingLength = list.length;
firing = true;
for (; list && firingIndex < firingLength; firingIndex++) {
if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
memory = false;
break;
}
}
firing = false;
if (list) {
if (stack) {
if (stack.length) {
fire(stack.shift());
}
} else if (memory) {
list = [];
} else {
self.disable();
}
}
},
self = {
add: function () {
if (list) {
var start = list.length;
(function add(args) {
jQuery.each(args, function (_, arg) {
var type = jQuery.type(arg);
if (type === "function") {
if (!options.unique || !self.has(arg)) {
list.push(arg);
}
} else if (arg && arg.length && type !== "string") {
add(arg);
}
});
})(arguments);
if (firing) {
firingLength = list.length;
} else if (memory) {
firingStart = start;
fire(memory);
}
}
return this;
},
remove: function () {
if (list) {
jQuery.each(arguments, function (_, arg) {
var index;
while ((index = jQuery.inArray(arg, list, index)) > -1) {
list.splice(index, 1);
if (firing) {
if (index <= firingLength) {
firingLength--;
}
if (index <= firingIndex) {
firingIndex--;
}
}
}
});
}
return this;
},
has: function (fn) {
return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
},
empty: function () {
list = [];
firingLength = 0;
return this;
},
disable: function () {
list = stack = memory = undefined;
return this;
},
disabled: function () {
return !list;
},
lock: function () {
stack = undefined;
if (!memory) {
self.disable();
}
return this;
},
locked: function () {
return !stack;
},
fireWith: function (context, args) {
if (list && (!fired || stack)) {
args = args || [];
args = [context, args.slice ? args.slice() : args];
if (firing) {
stack.push(args);
} else {
fire(args);
}
}
return this;
},
fire: function () {
self.fireWith(this, arguments);
return this;
},
fired: function () {
return !!fired;
}
};
return self;
};
jQuery.extend({
Deferred: function (func) {
var tuples = [
["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
["notify", "progress", jQuery.Callbacks("memory")]
],
state = "pending",
promise = {
state: function () {
return state;
},
always: function () {
deferred.done(arguments).fail(arguments);
return this;
},
then: function ( ) {
var fns = arguments;
return jQuery.Deferred(function (newDefer) {
jQuery.each(tuples, function (i, tuple) {
var action = tuple[0],
fn = jQuery.isFunction(fns[i]) && fns[i];
deferred[tuple[1]](function () {
var returned = fn && fn.apply(this, arguments);
if (returned && jQuery.isFunction(returned.promise)) {
returned.promise()
.done(newDefer.resolve)
.fail(newDefer.reject)
.progress(newDefer.notify);
} else {
newDefer[action + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
}
});
});
fns = null;
}).promise();
},
promise: function (obj) {
return obj != null ? jQuery.extend(obj, promise) : promise;
}
},
deferred = {};
promise.pipe = promise.then;
jQuery.each(tuples, function (i, tuple) {
var list = tuple[2],
stateString = tuple[3];
promise[tuple[1]] = list.add;
if (stateString) {
list.add(function () {
state = stateString;
}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
}
deferred[tuple[0]] = function () {
deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
return this;
};
deferred[tuple[0] + "With"] = list.fireWith;
});
promise.promise(deferred);
if (func) {
func.call(deferred, deferred);
}
return deferred;
},
when: function (subordinate ) {
var i = 0,
resolveValues = core_slice.call(arguments),
length = resolveValues.length,
remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
updateFunc = function (i, contexts, values) {
return function (value) {
contexts[i] = this;
values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
if (values === progressValues) {
deferred.notifyWith(contexts, values);
} else if (!(--remaining)) {
deferred.resolveWith(contexts, values);
}
};
},
progressValues, progressContexts, resolveContexts;
if (length > 1) {
progressValues = new Array(length);
progressContexts = new Array(length);
resolveContexts = new Array(length);
for (; i < length; i++) {
if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
resolveValues[i].promise()
.done(updateFunc(i, resolveContexts, resolveValues))
.fail(deferred.reject)
.progress(updateFunc(i, progressContexts, progressValues));
} else {
--remaining;
}
}
}
if (!remaining) {
deferred.resolveWith(resolveContexts, resolveValues);
}
return deferred.promise();
}
});
jQuery.support = (function (support) {
var all, a, input, select, fragment, opt, eventName, isSupported, i,
div = document.createElement("div");
div.setAttribute("className", "t");
div.innerHTML = " <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
all = div.getElementsByTagName("*") || [];
a = div.getElementsByTagName("a")[0];
if (!a || !a.style || !all.length) {
return support;
}
select = document.createElement("select");
opt = select.appendChild(document.createElement("option"));
input = div.getElementsByTagName("input")[0];
a.style.cssText = "top:1px;float:left;opacity:.5";
support.getSetAttribute = div.className !== "t";
support.leadingWhitespace = div.firstChild.nodeType === 3;
support.tbody = !div.getElementsByTagName("tbody").length;
support.htmlSerialize = !!div.getElementsByTagName("link").length;
support.style = /top/.test(a.getAttribute("style"));
support.hrefNormalized = a.getAttribute("href") === "/a";
support.opacity = /^0.5/.test(a.style.opacity);
support.cssFloat = !!a.style.cssFloat;
support.checkOn = !!input.value;
support.optSelected = opt.selected;
support.enctype = !!document.createElement("form").enctype;
support.html5Clone = document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
support.inlineBlockNeedsLayout = false;
support.shrinkWrapBlocks = false;
support.pixelPosition = false;
support.deleteExpando = true;
support.noCloneEvent = true;
support.reliableMarginRight = true;
support.boxSizingReliable = true;
input.checked = true;
support.noCloneChecked = input.cloneNode(true).checked;
select.disabled = true;
support.optDisabled = !opt.disabled;
try {
delete div.test;
} catch (e) {
support.deleteExpando = false;
}
input = document.createElement("input");
input.setAttribute("value", "");
support.input = input.getAttribute("value") === "";
input.value = "t";
input.setAttribute("type", "radio");
support.radioValue = input.value === "t";
input.setAttribute("checked", "t");
input.setAttribute("name", "t");
fragment = document.createDocumentFragment();
fragment.appendChild(input);
support.appendChecked = input.checked;
support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
if (div.attachEvent) {
div.attachEvent("onclick", function () {
support.noCloneEvent = false;
});
div.cloneNode(true).click();
}
for (i in { submit: true, change: true, focusin: true }) {
div.setAttribute(eventName = "on" + i, "t");
support[i + "Bubbles"] = eventName in window || div.attributes[eventName].expando === false;
}
div.style.backgroundClip = "content-box";
div.cloneNode(true).style.backgroundClip = "";
support.clearCloneStyle = div.style.backgroundClip === "content-box";
for (i in jQuery(support)) {
break;
}
support.ownLast = i !== "0";
jQuery(function () {
var container, marginDiv, tds,
divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
body = document.getElementsByTagName("body")[0];
if (!body) {
return;
}
container = document.createElement("div");
container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
body.appendChild(container).appendChild(div);
div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
tds = div.getElementsByTagName("td");
tds[0].style.cssText = "padding:0;margin:0;border:0;display:none";
isSupported = (tds[0].offsetHeight === 0);
tds[0].style.display = "";
tds[1].style.display = "none";
support.reliableHiddenOffsets = isSupported && (tds[0].offsetHeight === 0);
div.innerHTML = "";
div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
jQuery.swap(body, body.style.zoom != null ? { zoom: 1} : {}, function () {
support.boxSizing = div.offsetWidth === 4;
});
if (window.getComputedStyle) {
support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== "1%";
support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: "4px" }).width === "4px";
marginDiv = div.appendChild(document.createElement("div"));
marginDiv.style.cssText = div.style.cssText = divReset;
marginDiv.style.marginRight = marginDiv.style.width = "0";
div.style.width = "1px";
support.reliableMarginRight =
!parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
}
if (typeof div.style.zoom !== core_strundefined) {
div.innerHTML = "";
div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
support.inlineBlockNeedsLayout = (div.offsetWidth === 3);
div.style.display = "block";
div.innerHTML = "<div></div>";
div.firstChild.style.width = "5px";
support.shrinkWrapBlocks = (div.offsetWidth !== 3);
if (support.inlineBlockNeedsLayout) {
body.style.zoom = 1;
}
}
body.removeChild(container);
container = div = tds = marginDiv = null;
});
all = select = fragment = opt = a = input = null;
return support;
})({});
var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
rmultiDash = /([A-Z])/g;
function internalData(elem, name, data, pvt ) {
if (!jQuery.acceptData(elem)) {
return;
}
var ret, thisCache,
internalKey = jQuery.expando,
isNode = elem.nodeType,
cache = isNode ? jQuery.cache : elem,
id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
if ((!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string") {
return;
}
if (!id) {
if (isNode) {
id = elem[internalKey] = core_deletedIds.pop() || jQuery.guid++;
} else {
id = internalKey;
}
}
if (!cache[id]) {
cache[id] = isNode ? {} : { toJSON: jQuery.noop };
}
if (typeof name === "object" || typeof name === "function") {
if (pvt) {
cache[id] = jQuery.extend(cache[id], name);
} else {
cache[id].data = jQuery.extend(cache[id].data, name);
}
}
thisCache = cache[id];
if (!pvt) {
if (!thisCache.data) {
thisCache.data = {};
}
thisCache = thisCache.data;
}
if (data !== undefined) {
thisCache[jQuery.camelCase(name)] = data;
}
if (typeof name === "string") {
ret = thisCache[name];
if (ret == null) {
ret = thisCache[jQuery.camelCase(name)];
}
} else {
ret = thisCache;
}
return ret;
}
function internalRemoveData(elem, name, pvt) {
if (!jQuery.acceptData(elem)) {
return;
}
var thisCache, i,
isNode = elem.nodeType,
cache = isNode ? jQuery.cache : elem,
id = isNode ? elem[jQuery.expando] : jQuery.expando;
if (!cache[id]) {
return;
}
if (name) {
thisCache = pvt ? cache[id] : cache[id].data;
if (thisCache) {
if (!jQuery.isArray(name)) {
if (name in thisCache) {
name = [name];
} else {
name = jQuery.camelCase(name);
if (name in thisCache) {
name = [name];
} else {
name = name.split(" ");
}
}
} else {
name = name.concat(jQuery.map(name, jQuery.camelCase));
}
i = name.length;
while (i--) {
delete thisCache[name[i]];
}
if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
return;
}
}
}
if (!pvt) {
delete cache[id].data;
if (!isEmptyDataObject(cache[id])) {
return;
}
}
if (isNode) {
jQuery.cleanData([elem], true);
} else if (jQuery.support.deleteExpando || cache != cache.window) {
delete cache[id];
} else {
cache[id] = null;
}
}
jQuery.extend({
cache: {},
noData: {
"applet": true,
"embed": true,
"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData: function (elem) {
elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
return !!elem && !isEmptyDataObject(elem);
},
data: function (elem, name, data) {
return internalData(elem, name, data);
},
removeData: function (elem, name) {
return internalRemoveData(elem, name);
},
_data: function (elem, name, data) {
return internalData(elem, name, data, true);
},
_removeData: function (elem, name) {
return internalRemoveData(elem, name, true);
},
acceptData: function (elem) {
if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
return false;
}
var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
return !noData || noData !== true && elem.getAttribute("classid") === noData;
}
});
jQuery.fn.extend({
data: function (key, value) {
var attrs, name,
data = null,
i = 0,
elem = this[0];
if (key === undefined) {
if (this.length) {
data = jQuery.data(elem);
if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
attrs = elem.attributes;
for (; i < attrs.length; i++) {
name = attrs[i].name;
if (name.indexOf("data-") === 0) {
name = jQuery.camelCase(name.slice(5));
dataAttr(elem, name, data[name]);
}
}
jQuery._data(elem, "parsedAttrs", true);
}
}
return data;
}
if (typeof key === "object") {
return this.each(function () {
jQuery.data(this, key);
});
}
return arguments.length > 1 ?
this.each(function () {
jQuery.data(this, key, value);
}) :
elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
},
removeData: function (key) {
return this.each(function () {
jQuery.removeData(this, key);
});
}
});
function dataAttr(elem, key, data) {
if (data === undefined && elem.nodeType === 1) {
var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
data = elem.getAttribute(name);
if (typeof data === "string") {
try {
data = data === "true" ? true :
data === "false" ? false :
data === "null" ? null :
+data + "" === data ? +data :
rbrace.test(data) ? jQuery.parseJSON(data) :
data;
} catch (e) { }
jQuery.data(elem, key, data);
} else {
data = undefined;
}
}
return data;
}
function isEmptyDataObject(obj) {
var name;
for (name in obj) {
if (name === "data" && jQuery.isEmptyObject(obj[name])) {
continue;
}
if (name !== "toJSON") {
return false;
}
}
return true;
}
jQuery.extend({
queue: function (elem, type, data) {
var queue;
if (elem) {
type = (type || "fx") + "queue";
queue = jQuery._data(elem, type);
if (data) {
if (!queue || jQuery.isArray(data)) {
queue = jQuery._data(elem, type, jQuery.makeArray(data));
} else {
queue.push(data);
}
}
return queue || [];
}
},
dequeue: function (elem, type) {
type = type || "fx";
var queue = jQuery.queue(elem, type),
startLength = queue.length,
fn = queue.shift(),
hooks = jQuery._queueHooks(elem, type),
next = function () {
jQuery.dequeue(elem, type);
};
if (fn === "inprogress") {
fn = queue.shift();
startLength--;
}
if (fn) {
if (type === "fx") {
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem, next, hooks);
}
if (!startLength && hooks) {
hooks.empty.fire();
}
},
_queueHooks: function (elem, type) {
var key = type + "queueHooks";
return jQuery._data(elem, key) || jQuery._data(elem, key, {
empty: jQuery.Callbacks("once memory").add(function () {
jQuery._removeData(elem, type + "queue");
jQuery._removeData(elem, key);
})
});
}
});
jQuery.fn.extend({
queue: function (type, data) {
var setter = 2;
if (typeof type !== "string") {
data = type;
type = "fx";
setter--;
}
if (arguments.length < setter) {
return jQuery.queue(this[0], type);
}
return data === undefined ?
this :
this.each(function () {
var queue = jQuery.queue(this, type, data);
jQuery._queueHooks(this, type);
if (type === "fx" && queue[0] !== "inprogress") {
jQuery.dequeue(this, type);
}
});
},
dequeue: function (type) {
return this.each(function () {
jQuery.dequeue(this, type);
});
},
delay: function (time, type) {
time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
type = type || "fx";
return this.queue(type, function (next, hooks) {
var timeout = setTimeout(next, time);
hooks.stop = function () {
clearTimeout(timeout);
};
});
},
clearQueue: function (type) {
return this.queue(type || "fx", []);
},
promise: function (type, obj) {
var tmp,
count = 1,
defer = jQuery.Deferred(),
elements = this,
i = this.length,
resolve = function () {
if (!(--count)) {
defer.resolveWith(elements, [elements]);
}
};
if (typeof type !== "string") {
obj = type;
type = undefined;
}
type = type || "fx";
while (i--) {
tmp = jQuery._data(elements[i], type + "queueHooks");
if (tmp && tmp.empty) {
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
var nodeHook, boolHook,
rclass = /[\t\r\n\f]/g,
rreturn = /\r/g,
rfocusable = /^(?:input|select|textarea|button|object)$/i,
rclickable = /^(?:a|area)$/i,
ruseDefault = /^(?:checked|selected)$/i,
getSetAttribute = jQuery.support.getSetAttribute,
getSetInput = jQuery.support.input;
jQuery.fn.extend({
attr: function (name, value) {
return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
},
removeAttr: function (name) {
return this.each(function () {
jQuery.removeAttr(this, name);
});
},
prop: function (name, value) {
return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
},
removeProp: function (name) {
name = jQuery.propFix[name] || name;
return this.each(function () {
try {
this[name] = undefined;
delete this[name];
} catch (e) { }
});
},
addClass: function (value) {
var classes, elem, cur, clazz, j,
i = 0,
len = this.length,
proceed = typeof value === "string" && value;
if (jQuery.isFunction(value)) {
return this.each(function (j) {
jQuery(this).addClass(value.call(this, j, this.className));
});
}
if (proceed) {
classes = (value || "").match(core_rnotwhite) || [];
for (; i < len; i++) {
elem = this[i];
cur = elem.nodeType === 1 && (elem.className ?
(" " + elem.className + " ").replace(rclass, " ") :
" "
);
if (cur) {
j = 0;
while ((clazz = classes[j++])) {
if (cur.indexOf(" " + clazz + " ") < 0) {
cur += clazz + " ";
}
}
elem.className = jQuery.trim(cur);
}
}
}
return this;
},
removeClass: function (value) {
var classes, elem, cur, clazz, j,
i = 0,
len = this.length,
proceed = arguments.length === 0 || typeof value === "string" && value;
if (jQuery.isFunction(value)) {
return this.each(function (j) {
jQuery(this).removeClass(value.call(this, j, this.className));
});
}
if (proceed) {
classes = (value || "").match(core_rnotwhite) || [];
for (; i < len; i++) {
elem = this[i];
cur = elem.nodeType === 1 && (elem.className ?
(" " + elem.className + " ").replace(rclass, " ") :
""
);
if (cur) {
j = 0;
while ((clazz = classes[j++])) {
while (cur.indexOf(" " + clazz + " ") >= 0) {
cur = cur.replace(" " + clazz + " ", " ");
}
}
elem.className = value ? jQuery.trim(cur) : "";
}
}
}
return this;
},
toggleClass: function (value, stateVal) {
var type = typeof value;
if (typeof stateVal === "boolean" && type === "string") {
return stateVal ? this.addClass(value) : this.removeClass(value);
}
if (jQuery.isFunction(value)) {
return this.each(function (i) {
jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
});
}
return this.each(function () {
if (type === "string") {
var className,
i = 0,
self = jQuery(this),
classNames = value.match(core_rnotwhite) || [];
while ((className = classNames[i++])) {
if (self.hasClass(className)) {
self.removeClass(className);
} else {
self.addClass(className);
}
}
} else if (type === core_strundefined || type === "boolean") {
if (this.className) {
jQuery._data(this, "__className__", this.className);
}
this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
}
});
},
hasClass: function (selector) {
var className = " " + selector + " ",
i = 0,
l = this.length;
for (; i < l; i++) {
if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
return true;
}
}
return false;
},
val: function (value) {
var ret, hooks, isFunction,
elem = this[0];
if (!arguments.length) {
if (elem) {
hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
return ret;
}
ret = elem.value;
return typeof ret === "string" ?
ret.replace(rreturn, "") :
ret == null ? "" : ret;
}
return;
}
isFunction = jQuery.isFunction(value);
return this.each(function (i) {
var val;
if (this.nodeType !== 1) {
return;
}
if (isFunction) {
val = value.call(this, i, jQuery(this).val());
} else {
val = value;
}
if (val == null) {
val = "";
} else if (typeof val === "number") {
val += "";
} else if (jQuery.isArray(val)) {
val = jQuery.map(val, function (value) {
return value == null ? "" : value + "";
});
}
hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
this.value = val;
}
});
}
});
jQuery.extend({
valHooks: {
option: {
get: function (elem) {
var val = jQuery.find.attr(elem, "value");
return val != null ?
val :
elem.text;
}
},
select: {
get: function (elem) {
var value, option,
options = elem.options,
index = elem.selectedIndex,
one = elem.type === "select-one" || index < 0,
values = one ? null : [],
max = one ? index + 1 : options.length,
i = index < 0 ?
max :
one ? index : 0;
for (; i < max; i++) {
option = options[i];
if ((option.selected || i === index) &&
(jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
(!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
value = jQuery(option).val();
if (one) {
return value;
}
values.push(value);
}
}
return values;
},
set: function (elem, value) {
var optionSet, option,
options = elem.options,
values = jQuery.makeArray(value),
i = options.length;
while (i--) {
option = options[i];
if ((option.selected = jQuery.inArray(jQuery(option).val(), values) >= 0)) {
optionSet = true;
}
}
if (!optionSet) {
elem.selectedIndex = -1;
}
return values;
}
}
},
attr: function (elem, name, value) {
var hooks, ret,
nType = elem.nodeType;
if (!elem || nType === 3 || nType === 8 || nType === 2) {
return;
}
if (typeof elem.getAttribute === core_strundefined) {
return jQuery.prop(elem, name, value);
}
if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
name = name.toLowerCase();
hooks = jQuery.attrHooks[name] ||
(jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
}
if (value !== undefined) {
if (value === null) {
jQuery.removeAttr(elem, name);
} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
return ret;
} else {
elem.setAttribute(name, value + "");
return value;
}
} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
return ret;
} else {
ret = jQuery.find.attr(elem, name);
return ret == null ?
undefined :
ret;
}
},
removeAttr: function (elem, value) {
var name, propName,
i = 0,
attrNames = value && value.match(core_rnotwhite);
if (attrNames && elem.nodeType === 1) {
while ((name = attrNames[i++])) {
propName = jQuery.propFix[name] || name;
if (jQuery.expr.match.bool.test(name)) {
if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
elem[propName] = false;
} else {
elem[jQuery.camelCase("default-" + name)] =
elem[propName] = false;
}
} else {
jQuery.attr(elem, name, "");
}
elem.removeAttribute(getSetAttribute ? name : propName);
}
}
},
attrHooks: {
type: {
set: function (elem, value) {
if (!jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
var val = elem.value;
elem.setAttribute("type", value);
if (val) {
elem.value = val;
}
return value;
}
}
}
},
propFix: {
"for": "htmlFor",
"class": "className"
},
prop: function (elem, name, value) {
var ret, hooks, notxml,
nType = elem.nodeType;
if (!elem || nType === 3 || nType === 8 || nType === 2) {
return;
}
notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
if (notxml) {
name = jQuery.propFix[name] || name;
hooks = jQuery.propHooks[name];
}
if (value !== undefined) {
return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ?
ret :
(elem[name] = value);
} else {
return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ?
ret :
elem[name];
}
},
propHooks: {
tabIndex: {
get: function (elem) {
var tabindex = jQuery.find.attr(elem, "tabindex");
return tabindex ?
parseInt(tabindex, 10) :
rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ?
0 :
-1;
}
}
}
});
boolHook = {
set: function (elem, value, name) {
if (value === false) {
jQuery.removeAttr(elem, name);
} else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
} else {
elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
}
return name;
}
};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
var getter = jQuery.expr.attrHandle[name] || jQuery.find.attr;
jQuery.expr.attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ?
function (elem, name, isXML) {
var fn = jQuery.expr.attrHandle[name],
ret = isXML ?
undefined :
(jQuery.expr.attrHandle[name] = undefined) !=
getter(elem, name, isXML) ?
name.toLowerCase() :
null;
jQuery.expr.attrHandle[name] = fn;
return ret;
} :
function (elem, name, isXML) {
return isXML ?
undefined :
elem[jQuery.camelCase("default-" + name)] ?
name.toLowerCase() :
null;
};
});
if (!getSetInput || !getSetAttribute) {
jQuery.attrHooks.value = {
set: function (elem, value, name) {
if (jQuery.nodeName(elem, "input")) {
elem.defaultValue = value;
} else {
return nodeHook && nodeHook.set(elem, value, name);
}
}
};
}
if (!getSetAttribute) {
nodeHook = {
set: function (elem, value, name) {
var ret = elem.getAttributeNode(name);
if (!ret) {
elem.setAttributeNode(
(ret = elem.ownerDocument.createAttribute(name))
);
}
ret.value = value += "";
return name === "value" || value === elem.getAttribute(name) ?
value :
undefined;
}
};
jQuery.expr.attrHandle.id = jQuery.expr.attrHandle.name = jQuery.expr.attrHandle.coords =
function (elem, name, isXML) {
var ret;
return isXML ?
undefined :
(ret = elem.getAttributeNode(name)) && ret.value !== "" ?
ret.value :
null;
};
jQuery.valHooks.button = {
get: function (elem, name) {
var ret = elem.getAttributeNode(name);
return ret && ret.specified ?
ret.value :
undefined;
},
set: nodeHook.set
};
jQuery.attrHooks.contenteditable = {
set: function (elem, value, name) {
nodeHook.set(elem, value === "" ? false : value, name);
}
};
jQuery.each(["width", "height"], function (i, name) {
jQuery.attrHooks[name] = {
set: function (elem, value) {
if (value === "") {
elem.setAttribute(name, "auto");
return value;
}
}
};
});
}
if (!jQuery.support.hrefNormalized) {
jQuery.each(["href", "src"], function (i, name) {
jQuery.propHooks[name] = {
get: function (elem) {
return elem.getAttribute(name, 4);
}
};
});
}
if (!jQuery.support.style) {
jQuery.attrHooks.style = {
get: function (elem) {
return elem.style.cssText || undefined;
},
set: function (elem, value) {
return (elem.style.cssText = value + "");
}
};
}
if (!jQuery.support.optSelected) {
jQuery.propHooks.selected = {
get: function (elem) {
var parent = elem.parentNode;
if (parent) {
parent.selectedIndex;
if (parent.parentNode) {
parent.parentNode.selectedIndex;
}
}
return null;
}
};
}
jQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
], function () {
jQuery.propFix[this.toLowerCase()] = this;
});
if (!jQuery.support.enctype) {
jQuery.propFix.enctype = "encoding";
}
jQuery.each(["radio", "checkbox"], function () {
jQuery.valHooks[this] = {
set: function (elem, value) {
if (jQuery.isArray(value)) {
return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
}
}
};
if (!jQuery.support.checkOn) {
jQuery.valHooks[this].get = function (elem) {
return elem.getAttribute("value") === null ? "on" : elem.value;
};
}
});
var rformElems = /^(?:input|select|textarea)$/i,
rkeyEvent = /^key/,
rmouseEvent = /^(?:mouse|contextmenu)|click/,
rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
function returnTrue() {
return true;
}
function returnFalse() {
return false;
}
function safeActiveElement() {
try {
return document.activeElement;
} catch (err) { }
}
jQuery.event = {
global: {},
add: function (elem, types, handler, data, selector) {
var tmp, events, t, handleObjIn,
special, eventHandle, handleObj,
handlers, type, namespaces, origType,
elemData = jQuery._data(elem);
if (!elemData) {
return;
}
if (handler.handler) {
handleObjIn = handler;
handler = handleObjIn.handler;
selector = handleObjIn.selector;
}
if (!handler.guid) {
handler.guid = jQuery.guid++;
}
if (!(events = elemData.events)) {
events = elemData.events = {};
}
if (!(eventHandle = elemData.handle)) {
eventHandle = elemData.handle = function (e) {
return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
undefined;
};
eventHandle.elem = elem;
}
types = (types || "").match(core_rnotwhite) || [""];
t = types.length;
while (t--) {
tmp = rtypenamespace.exec(types[t]) || [];
type = origType = tmp[1];
namespaces = (tmp[2] || "").split(".").sort();
if (!type) {
continue;
}
special = jQuery.event.special[type] || {};
type = (selector ? special.delegateType : special.bindType) || type;
special = jQuery.event.special[type] || {};
handleObj = jQuery.extend({
type: type,
origType: origType,
data: data,
handler: handler,
guid: handler.guid,
selector: selector,
needsContext: selector && jQuery.expr.match.needsContext.test(selector),
namespace: namespaces.join(".")
}, handleObjIn);
if (!(handlers = events[type])) {
handlers = events[type] = [];
handlers.delegateCount = 0;
if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
if (elem.addEventListener) {
elem.addEventListener(type, eventHandle, false);
} else if (elem.attachEvent) {
elem.attachEvent("on" + type, eventHandle);
}
}
}
if (special.add) {
special.add.call(elem, handleObj);
if (!handleObj.handler.guid) {
handleObj.handler.guid = handler.guid;
}
}
if (selector) {
handlers.splice(handlers.delegateCount++, 0, handleObj);
} else {
handlers.push(handleObj);
}
jQuery.event.global[type] = true;
}
elem = null;
},
remove: function (elem, types, handler, selector, mappedTypes) {
var j, handleObj, tmp,
origCount, t, events,
special, handlers, type,
namespaces, origType,
elemData = jQuery.hasData(elem) && jQuery._data(elem);
if (!elemData || !(events = elemData.events)) {
return;
}
types = (types || "").match(core_rnotwhite) || [""];
t = types.length;
while (t--) {
tmp = rtypenamespace.exec(types[t]) || [];
type = origType = tmp[1];
namespaces = (tmp[2] || "").split(".").sort();
if (!type) {
for (type in events) {
jQuery.event.remove(elem, type + types[t], handler, selector, true);
}
continue;
}
special = jQuery.event.special[type] || {};
type = (selector ? special.delegateType : special.bindType) || type;
handlers = events[type] || [];
tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
origCount = j = handlers.length;
while (j--) {
handleObj = handlers[j];
if ((mappedTypes || origType === handleObj.origType) &&
(!handler || handler.guid === handleObj.guid) &&
(!tmp || tmp.test(handleObj.namespace)) &&
(!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
handlers.splice(j, 1);
if (handleObj.selector) {
handlers.delegateCount--;
}
if (special.remove) {
special.remove.call(elem, handleObj);
}
}
}
if (origCount && !handlers.length) {
if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
jQuery.removeEvent(elem, type, elemData.handle);
}
delete events[type];
}
}
if (jQuery.isEmptyObject(events)) {
delete elemData.handle;
jQuery._removeData(elem, "events");
}
},
trigger: function (event, data, elem, onlyHandlers) {
var handle, ontype, cur,
bubbleType, special, tmp, i,
eventPath = [elem || document],
type = core_hasOwn.call(event, "type") ? event.type : event,
namespaces = core_hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
cur = tmp = elem = elem || document;
if (elem.nodeType === 3 || elem.nodeType === 8) {
return;
}
if (rfocusMorph.test(type + jQuery.event.triggered)) {
return;
}
if (type.indexOf(".") >= 0) {
namespaces = type.split(".");
type = namespaces.shift();
namespaces.sort();
}
ontype = type.indexOf(":") < 0 && "on" + type;
event = event[jQuery.expando] ?
event :
new jQuery.Event(type, typeof event === "object" && event);
event.isTrigger = onlyHandlers ? 2 : 3;
event.namespace = namespaces.join(".");
event.namespace_re = event.namespace ?
new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
null;
event.result = undefined;
if (!event.target) {
event.target = elem;
}
data = data == null ?
[event] :
jQuery.makeArray(data, [event]);
special = jQuery.event.special[type] || {};
if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
return;
}
if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
bubbleType = special.delegateType || type;
if (!rfocusMorph.test(bubbleType + type)) {
cur = cur.parentNode;
}
for (; cur; cur = cur.parentNode) {
eventPath.push(cur);
tmp = cur;
}
if (tmp === (elem.ownerDocument || document)) {
eventPath.push(tmp.defaultView || tmp.parentWindow || window);
}
}
i = 0;
while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
event.type = i > 1 ?
bubbleType :
special.bindType || type;
handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
if (handle) {
handle.apply(cur, data);
}
handle = ontype && cur[ontype];
if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
event.preventDefault();
}
}
event.type = type;
if (!onlyHandlers && !event.isDefaultPrevented()) {
if ((!special._default || special._default.apply(eventPath.pop(), data) === false) &&
jQuery.acceptData(elem)) {
if (ontype && elem[type] && !jQuery.isWindow(elem)) {
tmp = elem[ontype];
if (tmp) {
elem[ontype] = null;
}
jQuery.event.triggered = type;
try {
elem[type]();
} catch (e) {
}
jQuery.event.triggered = undefined;
if (tmp) {
elem[ontype] = tmp;
}
}
}
}
return event.result;
},
dispatch: function (event) {
event = jQuery.event.fix(event);
var i, ret, handleObj, matched, j,
handlerQueue = [],
args = core_slice.call(arguments),
handlers = (jQuery._data(this, "events") || {})[event.type] || [],
special = jQuery.event.special[event.type] || {};
args[0] = event;
event.delegateTarget = this;
if (special.preDispatch && special.preDispatch.call(this, event) === false) {
return;
}
handlerQueue = jQuery.event.handlers.call(this, event, handlers);
i = 0;
while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
event.currentTarget = matched.elem;
j = 0;
while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
event.handleObj = handleObj;
event.data = handleObj.data;
ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler)
.apply(matched.elem, args);
if (ret !== undefined) {
if ((event.result = ret) === false) {
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if (special.postDispatch) {
special.postDispatch.call(this, event);
}
return event.result;
},
handlers: function (event, handlers) {
var sel, handleObj, matches, i,
handlerQueue = [],
delegateCount = handlers.delegateCount,
cur = event.target;
if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {
for (; cur != this; cur = cur.parentNode || this) {
if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
matches = [];
for (i = 0; i < delegateCount; i++) {
handleObj = handlers[i];
sel = handleObj.selector + " ";
if (matches[sel] === undefined) {
matches[sel] = handleObj.needsContext ?
jQuery(sel, this).index(cur) >= 0 :
jQuery.find(sel, this, null, [cur]).length;
}
if (matches[sel]) {
matches.push(handleObj);
}
}
if (matches.length) {
handlerQueue.push({ elem: cur, handlers: matches });
}
}
}
}
if (delegateCount < handlers.length) {
handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
}
return handlerQueue;
},
fix: function (event) {
if (event[jQuery.expando]) {
return event;
}
var i, prop, copy,
type = event.type,
originalEvent = event,
fixHook = this.fixHooks[type];
if (!fixHook) {
this.fixHooks[type] = fixHook =
rmouseEvent.test(type) ? this.mouseHooks :
rkeyEvent.test(type) ? this.keyHooks :
{};
}
copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
event = new jQuery.Event(originalEvent);
i = copy.length;
while (i--) {
prop = copy[i];
event[prop] = originalEvent[prop];
}
if (!event.target) {
event.target = originalEvent.srcElement || document;
}
if (event.target.nodeType === 3) {
event.target = event.target.parentNode;
}
event.metaKey = !!event.metaKey;
return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
},
props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks: {},
keyHooks: {
props: "char charCode key keyCode".split(" "),
filter: function (event, original) {
if (event.which == null) {
event.which = original.charCode != null ? original.charCode : original.keyCode;
}
return event;
}
},
mouseHooks: {
props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter: function (event, original) {
var body, eventDoc, doc,
button = original.button,
fromElement = original.fromElement;
if (event.pageX == null && original.clientX != null) {
eventDoc = event.target.ownerDocument || document;
doc = eventDoc.documentElement;
body = eventDoc.body;
event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
}
if (!event.relatedTarget && fromElement) {
event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
}
if (!event.which && button !== undefined) {
event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
}
return event;
}
},
special: {
load: {
noBubble: true
},
focus: {
trigger: function () {
if (this !== safeActiveElement() && this.focus) {
try {
this.focus();
return false;
} catch (e) {
}
}
},
delegateType: "focusin"
},
blur: {
trigger: function () {
if (this === safeActiveElement() && this.blur) {
this.blur();
return false;
}
},
delegateType: "focusout"
},
click: {
trigger: function () {
if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
this.click();
return false;
}
},
_default: function (event) {
return jQuery.nodeName(event.target, "a");
}
},
beforeunload: {
postDispatch: function (event) {
if (event.result !== undefined) {
event.originalEvent.returnValue = event.result;
}
}
}
},
simulate: function (type, elem, event, bubble) {
var e = jQuery.extend(
new jQuery.Event(),
event,
{
type: type,
isSimulated: true,
originalEvent: {}
}
);
if (bubble) {
jQuery.event.trigger(e, null, elem);
} else {
jQuery.event.dispatch.call(elem, e);
}
if (e.isDefaultPrevented()) {
event.preventDefault();
}
}
};
jQuery.removeEvent = document.removeEventListener ?
function (elem, type, handle) {
if (elem.removeEventListener) {
elem.removeEventListener(type, handle, false);
}
} :
function (elem, type, handle) {
var name = "on" + type;
if (elem.detachEvent) {
if (typeof elem[name] === core_strundefined) {
elem[name] = null;
}
elem.detachEvent(name, handle);
}
};
jQuery.Event = function (src, props) {
if (!(this instanceof jQuery.Event)) {
return new jQuery.Event(src, props);
}
if (src && src.type) {
this.originalEvent = src;
this.type = src.type;
this.isDefaultPrevented = (src.defaultPrevented || src.returnValue === false ||
src.getPreventDefault && src.getPreventDefault()) ? returnTrue : returnFalse;
} else {
this.type = src;
}
if (props) {
jQuery.extend(this, props);
}
this.timeStamp = src && src.timeStamp || jQuery.now();
this[jQuery.expando] = true;
};
jQuery.Event.prototype = {
isDefaultPrevented: returnFalse,
isPropagationStopped: returnFalse,
isImmediatePropagationStopped: returnFalse,
preventDefault: function () {
var e = this.originalEvent;
this.isDefaultPrevented = returnTrue;
if (!e) {
return;
}
if (e.preventDefault) {
e.preventDefault();
} else {
e.returnValue = false;
}
},
stopPropagation: function () {
var e = this.originalEvent;
this.isPropagationStopped = returnTrue;
if (!e) {
return;
}
if (e.stopPropagation) {
e.stopPropagation();
}
e.cancelBubble = true;
},
stopImmediatePropagation: function () {
this.isImmediatePropagationStopped = returnTrue;
this.stopPropagation();
}
};
jQuery.each({
mouseenter: "mouseover",
mouseleave: "mouseout"
}, function (orig, fix) {
jQuery.event.special[orig] = {
delegateType: fix,
bindType: fix,
handle: function (event) {
var ret,
target = this,
related = event.relatedTarget,
handleObj = event.handleObj;
if (!related || (related !== target && !jQuery.contains(target, related))) {
event.type = handleObj.origType;
ret = handleObj.handler.apply(this, arguments);
event.type = fix;
}
return ret;
}
};
});
if (!jQuery.support.submitBubbles) {
jQuery.event.special.submit = {
setup: function () {
if (jQuery.nodeName(this, "form")) {
return false;
}
jQuery.event.add(this, "click._submit keypress._submit", function (e) {
var elem = e.target,
form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
if (form && !jQuery._data(form, "submitBubbles")) {
jQuery.event.add(form, "submit._submit", function (event) {
event._submit_bubble = true;
});
jQuery._data(form, "submitBubbles", true);
}
});
},
postDispatch: function (event) {
if (event._submit_bubble) {
delete event._submit_bubble;
if (this.parentNode && !event.isTrigger) {
jQuery.event.simulate("submit", this.parentNode, event, true);
}
}
},
teardown: function () {
if (jQuery.nodeName(this, "form")) {
return false;
}
jQuery.event.remove(this, "._submit");
}
};
}
if (!jQuery.support.changeBubbles) {
jQuery.event.special.change = {
setup: function () {
if (rformElems.test(this.nodeName)) {
if (this.type === "checkbox" || this.type === "radio") {
jQuery.event.add(this, "propertychange._change", function (event) {
if (event.originalEvent.propertyName === "checked") {
this._just_changed = true;
}
});
jQuery.event.add(this, "click._change", function (event) {
if (this._just_changed && !event.isTrigger) {
this._just_changed = false;
}
jQuery.event.simulate("change", this, event, true);
});
}
return false;
}
jQuery.event.add(this, "beforeactivate._change", function (e) {
var elem = e.target;
if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
jQuery.event.add(elem, "change._change", function (event) {
if (this.parentNode && !event.isSimulated && !event.isTrigger) {
jQuery.event.simulate("change", this.parentNode, event, true);
}
});
jQuery._data(elem, "changeBubbles", true);
}
});
},
handle: function (event) {
var elem = event.target;
if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
return event.handleObj.handler.apply(this, arguments);
}
},
teardown: function () {
jQuery.event.remove(this, "._change");
return !rformElems.test(this.nodeName);
}
};
}
if (!jQuery.support.focusinBubbles) {
jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
var attaches = 0,
handler = function (event) {
jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
};
jQuery.event.special[fix] = {
setup: function () {
if (attaches++ === 0) {
document.addEventListener(orig, handler, true);
}
},
teardown: function () {
if (--attaches === 0) {
document.removeEventListener(orig, handler, true);
}
}
};
});
}
jQuery.fn.extend({
on: function (types, selector, data, fn, one) {
var type, origFn;
if (typeof types === "object") {
if (typeof selector !== "string") {
data = data || selector;
selector = undefined;
}
for (type in types) {
this.on(type, selector, data, types[type], one);
}
return this;
}
if (data == null && fn == null) {
fn = selector;
data = selector = undefined;
} else if (fn == null) {
if (typeof selector === "string") {
fn = data;
data = undefined;
} else {
fn = data;
data = selector;
selector = undefined;
}
}
if (fn === false) {
fn = returnFalse;
} else if (!fn) {
return this;
}
if (one === 1) {
origFn = fn;
fn = function (event) {
jQuery().off(event);
return origFn.apply(this, arguments);
};
fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
}
return this.each(function () {
jQuery.event.add(this, types, fn, data, selector);
});
},
one: function (types, selector, data, fn) {
return this.on(types, selector, data, fn, 1);
},
off: function (types, selector, fn) {
var handleObj, type;
if (types && types.preventDefault && types.handleObj) {
handleObj = types.handleObj;
jQuery(types.delegateTarget).off(
handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if (typeof types === "object") {
for (type in types) {
this.off(type, selector, types[type]);
}
return this;
}
if (selector === false || typeof selector === "function") {
fn = selector;
selector = undefined;
}
if (fn === false) {
fn = returnFalse;
}
return this.each(function () {
jQuery.event.remove(this, types, fn, selector);
});
},
trigger: function (type, data) {
return this.each(function () {
jQuery.event.trigger(type, data, this);
});
},
triggerHandler: function (type, data) {
var elem = this[0];
if (elem) {
return jQuery.event.trigger(type, data, elem, true);
}
}
});
var isSimple = /^.[^:#\[\.,]*$/,
rparentsprev = /^(?:parents|prev(?:Until|All))/,
rneedsContext = jQuery.expr.match.needsContext,
guaranteedUnique = {
children: true,
contents: true,
next: true,
prev: true
};
jQuery.fn.extend({
find: function (selector) {
var i,
ret = [],
self = this,
len = self.length;
if (typeof selector !== "string") {
return this.pushStack(jQuery(selector).filter(function () {
for (i = 0; i < len; i++) {
if (jQuery.contains(self[i], this)) {
return true;
}
}
}));
}
for (i = 0; i < len; i++) {
jQuery.find(selector, self[i], ret);
}
ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
ret.selector = this.selector ? this.selector + " " + selector : selector;
return ret;
},
has: function (target) {
var i,
targets = jQuery(target, this),
len = targets.length;
return this.filter(function () {
for (i = 0; i < len; i++) {
if (jQuery.contains(this, targets[i])) {
return true;
}
}
});
},
not: function (selector) {
return this.pushStack(winnow(this, selector || [], true));
},
filter: function (selector) {
return this.pushStack(winnow(this, selector || [], false));
},
is: function (selector) {
return !!winnow(
this,
typeof selector === "string" && rneedsContext.test(selector) ?
jQuery(selector) :
selector || [],
false
).length;
},
closest: function (selectors, context) {
var cur,
i = 0,
l = this.length,
ret = [],
pos = rneedsContext.test(selectors) || typeof selectors !== "string" ?
jQuery(selectors, context || this.context) :
0;
for (; i < l; i++) {
for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
if (cur.nodeType < 11 && (pos ?
pos.index(cur) > -1 :
cur.nodeType === 1 &&
jQuery.find.matchesSelector(cur, selectors))) {
cur = ret.push(cur);
break;
}
}
}
return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
},
index: function (elem) {
if (!elem) {
return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
}
if (typeof elem === "string") {
return jQuery.inArray(this[0], jQuery(elem));
}
return jQuery.inArray(
elem.jquery ? elem[0] : elem, this);
},
add: function (selector, context) {
var set = typeof selector === "string" ?
jQuery(selector, context) :
jQuery.makeArray(selector && selector.nodeType ? [selector] : selector),
all = jQuery.merge(this.get(), set);
return this.pushStack(jQuery.unique(all));
},
addBack: function (selector) {
return this.add(selector == null ?
this.prevObject : this.prevObject.filter(selector)
);
}
});
function sibling(cur, dir) {
do {
cur = cur[dir];
} while (cur && cur.nodeType !== 1);
return cur;
}
jQuery.each({
parent: function (elem) {
var parent = elem.parentNode;
return parent && parent.nodeType !== 11 ? parent : null;
},
parents: function (elem) {
return jQuery.dir(elem, "parentNode");
},
parentsUntil: function (elem, i, until) {
return jQuery.dir(elem, "parentNode", until);
},
next: function (elem) {
return sibling(elem, "nextSibling");
},
prev: function (elem) {
return sibling(elem, "previousSibling");
},
nextAll: function (elem) {
return jQuery.dir(elem, "nextSibling");
},
prevAll: function (elem) {
return jQuery.dir(elem, "previousSibling");
},
nextUntil: function (elem, i, until) {
return jQuery.dir(elem, "nextSibling", until);
},
prevUntil: function (elem, i, until) {
return jQuery.dir(elem, "previousSibling", until);
},
siblings: function (elem) {
return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
},
children: function (elem) {
return jQuery.sibling(elem.firstChild);
},
contents: function (elem) {
return jQuery.nodeName(elem, "iframe") ?
elem.contentDocument || elem.contentWindow.document :
jQuery.merge([], elem.childNodes);
}
}, function (name, fn) {
jQuery.fn[name] = function (until, selector) {
var ret = jQuery.map(this, fn, until);
if (name.slice(-5) !== "Until") {
selector = until;
}
if (selector && typeof selector === "string") {
ret = jQuery.filter(selector, ret);
}
if (this.length > 1) {
if (!guaranteedUnique[name]) {
ret = jQuery.unique(ret);
}
if (rparentsprev.test(name)) {
ret = ret.reverse();
}
}
return this.pushStack(ret);
};
});
jQuery.extend({
filter: function (expr, elems, not) {
var elem = elems[0];
if (not) {
expr = ":not(" + expr + ")";
}
return elems.length === 1 && elem.nodeType === 1 ?
jQuery.find.matchesSelector(elem, expr) ? [elem] : [] :
jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
return elem.nodeType === 1;
}));
},
dir: function (elem, dir, until) {
var matched = [],
cur = elem[dir];
while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
if (cur.nodeType === 1) {
matched.push(cur);
}
cur = cur[dir];
}
return matched;
},
sibling: function (n, elem) {
var r = [];
for (; n; n = n.nextSibling) {
if (n.nodeType === 1 && n !== elem) {
r.push(n);
}
}
return r;
}
});
function winnow(elements, qualifier, not) {
if (jQuery.isFunction(qualifier)) {
return jQuery.grep(elements, function (elem, i) {
return !!qualifier.call(elem, i, elem) !== not;
});
}
if (qualifier.nodeType) {
return jQuery.grep(elements, function (elem) {
return (elem === qualifier) !== not;
});
}
if (typeof qualifier === "string") {
if (isSimple.test(qualifier)) {
return jQuery.filter(qualifier, elements, not);
}
qualifier = jQuery.filter(qualifier, elements);
}
return jQuery.grep(elements, function (elem) {
return (jQuery.inArray(elem, qualifier) >= 0) !== not;
});
}
function createSafeFragment(document) {
var list = nodeNames.split("|"),
safeFrag = document.createDocumentFragment();
if (safeFrag.createElement) {
while (list.length) {
safeFrag.createElement(
list.pop()
);
}
}
return safeFrag;
}
var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
rleadingWhitespace = /^\s+/,
rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
rtagName = /<([\w:]+)/,
rtbody = /<tbody/i,
rhtml = /<|&#?\w+;/,
rnoInnerhtml = /<(?:script|style|link)/i,
manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
rscriptType = /^$|\/(?:java|ecma)script/i,
rscriptTypeMasked = /^true\/(.*)/,
rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
wrapMap = {
option: [1, "<select multiple='multiple'>", "</select>"],
legend: [1, "<fieldset>", "</fieldset>"],
area: [1, "<map>", "</map>"],
param: [1, "<object>", "</object>"],
thead: [1, "<table>", "</table>"],
tr: [2, "<table><tbody>", "</tbody></table>"],
col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
_default: jQuery.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
},
safeFragment = createSafeFragment(document),
fragmentDiv = safeFragment.appendChild(document.createElement("div"));
wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;
jQuery.fn.extend({
text: function (value) {
return jQuery.access(this, function (value) {
return value === undefined ?
jQuery.text(this) :
this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
}, null, value, arguments.length);
},
append: function () {
return this.domManip(arguments, function (elem) {
if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
var target = manipulationTarget(this, elem);
target.appendChild(elem);
}
});
},
prepend: function () {
return this.domManip(arguments, function (elem) {
if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
var target = manipulationTarget(this, elem);
target.insertBefore(elem, target.firstChild);
}
});
},
before: function () {
return this.domManip(arguments, function (elem) {
if (this.parentNode) {
this.parentNode.insertBefore(elem, this);
}
});
},
after: function () {
return this.domManip(arguments, function (elem) {
if (this.parentNode) {
this.parentNode.insertBefore(elem, this.nextSibling);
}
});
},
remove: function (selector, keepData) {
var elem,
elems = selector ? jQuery.filter(selector, this) : this,
i = 0;
for (; (elem = elems[i]) != null; i++) {
if (!keepData && elem.nodeType === 1) {
jQuery.cleanData(getAll(elem));
}
if (elem.parentNode) {
if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
setGlobalEval(getAll(elem, "script"));
}
elem.parentNode.removeChild(elem);
}
}
return this;
},
empty: function () {
var elem,
i = 0;
for (; (elem = this[i]) != null; i++) {
if (elem.nodeType === 1) {
jQuery.cleanData(getAll(elem, false));
}
while (elem.firstChild) {
elem.removeChild(elem.firstChild);
}
if (elem.options && jQuery.nodeName(elem, "select")) {
elem.options.length = 0;
}
}
return this;
},
clone: function (dataAndEvents, deepDataAndEvents) {
dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
return this.map(function () {
return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
});
},
html: function (value) {
return jQuery.access(this, function (value) {
var elem = this[0] || {},
i = 0,
l = this.length;
if (value === undefined) {
return elem.nodeType === 1 ?
elem.innerHTML.replace(rinlinejQuery, "") :
undefined;
}
if (typeof value === "string" && !rnoInnerhtml.test(value) &&
(jQuery.support.htmlSerialize || !rnoshimcache.test(value)) &&
(jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
!wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
value = value.replace(rxhtmlTag, "<$1></$2>");
try {
for (; i < l; i++) {
elem = this[i] || {};
if (elem.nodeType === 1) {
jQuery.cleanData(getAll(elem, false));
elem.innerHTML = value;
}
}
elem = 0;
} catch (e) { }
}
if (elem) {
this.empty().append(value);
}
}, null, value, arguments.length);
},
replaceWith: function () {
var
args = jQuery.map(this, function (elem) {
return [elem.nextSibling, elem.parentNode];
}),
i = 0;
this.domManip(arguments, function (elem) {
var next = args[i++],
parent = args[i++];
if (parent) {
if (next && next.parentNode !== parent) {
next = this.nextSibling;
}
jQuery(this).remove();
parent.insertBefore(elem, next);
}
}, true);
return i ? this : this.remove();
},
detach: function (selector) {
return this.remove(selector, true);
},
domManip: function (args, callback, allowIntersection) {
args = core_concat.apply([], args);
var first, node, hasScripts,
scripts, doc, fragment,
i = 0,
l = this.length,
set = this,
iNoClone = l - 1,
value = args[0],
isFunction = jQuery.isFunction(value);
if (isFunction || !(l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test(value))) {
return this.each(function (index) {
var self = set.eq(index);
if (isFunction) {
args[0] = value.call(this, index, self.html());
}
self.domManip(args, callback, allowIntersection);
});
}
if (l) {
fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, !allowIntersection && this);
first = fragment.firstChild;
if (fragment.childNodes.length === 1) {
fragment = first;
}
if (first) {
scripts = jQuery.map(getAll(fragment, "script"), disableScript);
hasScripts = scripts.length;
for (; i < l; i++) {
node = fragment;
if (i !== iNoClone) {
node = jQuery.clone(node, true, true);
if (hasScripts) {
jQuery.merge(scripts, getAll(node, "script"));
}
}
callback.call(this[i], node, i);
}
if (hasScripts) {
doc = scripts[scripts.length - 1].ownerDocument;
jQuery.map(scripts, restoreScript);
for (i = 0; i < hasScripts; i++) {
node = scripts[i];
if (rscriptType.test(node.type || "") &&
!jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {
if (node.src) {
jQuery._evalUrl(node.src);
} else {
jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
}
}
}
}
fragment = first = null;
}
}
return this;
}
});
function manipulationTarget(elem, content) {
return jQuery.nodeName(elem, "table") &&
jQuery.nodeName(content.nodeType === 1 ? content : content.firstChild, "tr") ?
elem.getElementsByTagName("tbody")[0] ||
elem.appendChild(elem.ownerDocument.createElement("tbody")) :
elem;
}
function disableScript(elem) {
elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
return elem;
}
function restoreScript(elem) {
var match = rscriptTypeMasked.exec(elem.type);
if (match) {
elem.type = match[1];
} else {
elem.removeAttribute("type");
}
return elem;
}
function setGlobalEval(elems, refElements) {
var elem,
i = 0;
for (; (elem = elems[i]) != null; i++) {
jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
}
}
function cloneCopyEvent(src, dest) {
if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
return;
}
var type, i, l,
oldData = jQuery._data(src),
curData = jQuery._data(dest, oldData),
events = oldData.events;
if (events) {
delete curData.handle;
curData.events = {};
for (type in events) {
for (i = 0, l = events[type].length; i < l; i++) {
jQuery.event.add(dest, type, events[type][i]);
}
}
}
if (curData.data) {
curData.data = jQuery.extend({}, curData.data);
}
}
function fixCloneNodeIssues(src, dest) {
var nodeName, e, data;
if (dest.nodeType !== 1) {
return;
}
nodeName = dest.nodeName.toLowerCase();
if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
data = jQuery._data(dest);
for (e in data.events) {
jQuery.removeEvent(dest, e, data.handle);
}
dest.removeAttribute(jQuery.expando);
}
if (nodeName === "script" && dest.text !== src.text) {
disableScript(dest).text = src.text;
restoreScript(dest);
} else if (nodeName === "object") {
if (dest.parentNode) {
dest.outerHTML = src.outerHTML;
}
if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
dest.innerHTML = src.innerHTML;
}
} else if (nodeName === "input" && manipulation_rcheckableType.test(src.type)) {
dest.defaultChecked = dest.checked = src.checked;
if (dest.value !== src.value) {
dest.value = src.value;
}
} else if (nodeName === "option") {
dest.defaultSelected = dest.selected = src.defaultSelected;
} else if (nodeName === "input" || nodeName === "textarea") {
dest.defaultValue = src.defaultValue;
}
}
jQuery.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function (name, original) {
jQuery.fn[name] = function (selector) {
var elems,
i = 0,
ret = [],
insert = jQuery(selector),
last = insert.length - 1;
for (; i <= last; i++) {
elems = i === last ? this : this.clone(true);
jQuery(insert[i])[original](elems);
core_push.apply(ret, elems.get());
}
return this.pushStack(ret);
};
});
function getAll(context, tag) {
var elems, elem,
i = 0,
found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || "*") :
typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || "*") :
undefined;
if (!found) {
for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
if (!tag || jQuery.nodeName(elem, tag)) {
found.push(elem);
} else {
jQuery.merge(found, getAll(elem, tag));
}
}
}
return tag === undefined || tag && jQuery.nodeName(context, tag) ?
jQuery.merge([context], found) :
found;
}
function fixDefaultChecked(elem) {
if (manipulation_rcheckableType.test(elem.type)) {
elem.defaultChecked = elem.checked;
}
}
jQuery.extend({
clone: function (elem, dataAndEvents, deepDataAndEvents) {
var destElements, node, clone, i, srcElements,
inPage = jQuery.contains(elem.ownerDocument, elem);
if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
clone = elem.cloneNode(true);
} else {
fragmentDiv.innerHTML = elem.outerHTML;
fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
}
if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
destElements = getAll(clone);
srcElements = getAll(elem);
for (i = 0; (node = srcElements[i]) != null; ++i) {
if (destElements[i]) {
fixCloneNodeIssues(node, destElements[i]);
}
}
}
if (dataAndEvents) {
if (deepDataAndEvents) {
srcElements = srcElements || getAll(elem);
destElements = destElements || getAll(clone);
for (i = 0; (node = srcElements[i]) != null; i++) {
cloneCopyEvent(node, destElements[i]);
}
} else {
cloneCopyEvent(elem, clone);
}
}
destElements = getAll(clone, "script");
if (destElements.length > 0) {
setGlobalEval(destElements, !inPage && getAll(elem, "script"));
}
destElements = srcElements = node = null;
return clone;
},
buildFragment: function (elems, context, scripts, selection) {
var j, elem, contains,
tmp, tag, tbody, wrap,
l = elems.length,
safe = createSafeFragment(context),
nodes = [],
i = 0;
for (; i < l; i++) {
elem = elems[i];
if (elem || elem === 0) {
if (jQuery.type(elem) === "object") {
jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
} else if (!rhtml.test(elem)) {
nodes.push(context.createTextNode(elem));
} else {
tmp = tmp || safe.appendChild(context.createElement("div"));
tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
wrap = wrapMap[tag] || wrapMap._default;
tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];
j = wrap[0];
while (j--) {
tmp = tmp.lastChild;
}
if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
}
if (!jQuery.support.tbody) {
elem = tag === "table" && !rtbody.test(elem) ?
tmp.firstChild :
wrap[1] === "<table>" && !rtbody.test(elem) ?
tmp :
0;
j = elem && elem.childNodes.length;
while (j--) {
if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {
elem.removeChild(tbody);
}
}
}
jQuery.merge(nodes, tmp.childNodes);
tmp.textContent = "";
while (tmp.firstChild) {
tmp.removeChild(tmp.firstChild);
}
tmp = safe.lastChild;
}
}
}
if (tmp) {
safe.removeChild(tmp);
}
if (!jQuery.support.appendChecked) {
jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
}
i = 0;
while ((elem = nodes[i++])) {
if (selection && jQuery.inArray(elem, selection) !== -1) {
continue;
}
contains = jQuery.contains(elem.ownerDocument, elem);
tmp = getAll(safe.appendChild(elem), "script");
if (contains) {
setGlobalEval(tmp);
}
if (scripts) {
j = 0;
while ((elem = tmp[j++])) {
if (rscriptType.test(elem.type || "")) {
scripts.push(elem);
}
}
}
}
tmp = null;
return safe;
},
cleanData: function (elems, acceptData) {
var elem, type, id, data,
i = 0,
internalKey = jQuery.expando,
cache = jQuery.cache,
deleteExpando = jQuery.support.deleteExpando,
special = jQuery.event.special;
for (; (elem = elems[i]) != null; i++) {
if (acceptData || jQuery.acceptData(elem)) {
id = elem[internalKey];
data = id && cache[id];
if (data) {
if (data.events) {
for (type in data.events) {
if (special[type]) {
jQuery.event.remove(elem, type);
} else {
jQuery.removeEvent(elem, type, data.handle);
}
}
}
if (cache[id]) {
delete cache[id];
if (deleteExpando) {
delete elem[internalKey];
} else if (typeof elem.removeAttribute !== core_strundefined) {
elem.removeAttribute(internalKey);
} else {
elem[internalKey] = null;
}
core_deletedIds.push(id);
}
}
}
}
},
_evalUrl: function (url) {
return jQuery.ajax({
url: url,
type: "GET",
dataType: "script",
async: false,
global: false,
"throws": true
});
}
});
jQuery.fn.extend({
wrapAll: function (html) {
if (jQuery.isFunction(html)) {
return this.each(function (i) {
jQuery(this).wrapAll(html.call(this, i));
});
}
if (this[0]) {
var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
if (this[0].parentNode) {
wrap.insertBefore(this[0]);
}
wrap.map(function () {
var elem = this;
while (elem.firstChild && elem.firstChild.nodeType === 1) {
elem = elem.firstChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner: function (html) {
if (jQuery.isFunction(html)) {
return this.each(function (i) {
jQuery(this).wrapInner(html.call(this, i));
});
}
return this.each(function () {
var self = jQuery(this),
contents = self.contents();
if (contents.length) {
contents.wrapAll(html);
} else {
self.append(html);
}
});
},
wrap: function (html) {
var isFunction = jQuery.isFunction(html);
return this.each(function (i) {
jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
});
},
unwrap: function () {
return this.parent().each(function () {
if (!jQuery.nodeName(this, "body")) {
jQuery(this).replaceWith(this.childNodes);
}
}).end();
}
});
var iframe, getStyles, curCSS,
ralpha = /alpha\([^)]*\)/i,
ropacity = /opacity\s*=\s*([^)]*)/,
rposition = /^(top|right|bottom|left)$/,
rdisplayswap = /^(none|table(?!-c[ea]).+)/,
rmargin = /^margin/,
rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"),
rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"),
rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"),
elemdisplay = { BODY: "block" },
cssShow = { position: "absolute", visibility: "hidden", display: "block" },
cssNormalTransform = {
letterSpacing: 0,
fontWeight: 400
},
cssExpand = ["Top", "Right", "Bottom", "Left"],
cssPrefixes = ["Webkit", "O", "Moz", "ms"];
function vendorPropName(style, name) {
if (name in style) {
return name;
}
var capName = name.charAt(0).toUpperCase() + name.slice(1),
origName = name,
i = cssPrefixes.length;
while (i--) {
name = cssPrefixes[i] + capName;
if (name in style) {
return name;
}
}
return origName;
}
function isHidden(elem, el) {
elem = el || elem;
return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
}
function showHide(elements, show) {
var display, elem, hidden,
values = [],
index = 0,
length = elements.length;
for (; index < length; index++) {
elem = elements[index];
if (!elem.style) {
continue;
}
values[index] = jQuery._data(elem, "olddisplay");
display = elem.style.display;
if (show) {
if (!values[index] && display === "none") {
elem.style.display = "";
}
if (elem.style.display === "" && isHidden(elem)) {
values[index] = jQuery._data(elem, "olddisplay", css_defaultDisplay(elem.nodeName));
}
} else {
if (!values[index]) {
hidden = isHidden(elem);
if (display && display !== "none" || !hidden) {
jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
}
}
}
}
for (index = 0; index < length; index++) {
elem = elements[index];
if (!elem.style) {
continue;
}
if (!show || elem.style.display === "none" || elem.style.display === "") {
elem.style.display = show ? values[index] || "" : "none";
}
}
return elements;
}
jQuery.fn.extend({
css: function (name, value) {
return jQuery.access(this, function (elem, name, value) {
var len, styles,
map = {},
i = 0;
if (jQuery.isArray(name)) {
styles = getStyles(elem);
len = name.length;
for (; i < len; i++) {
map[name[i]] = jQuery.css(elem, name[i], false, styles);
}
return map;
}
return value !== undefined ?
jQuery.style(elem, name, value) :
jQuery.css(elem, name);
}, name, value, arguments.length > 1);
},
show: function () {
return showHide(this, true);
},
hide: function () {
return showHide(this);
},
toggle: function (state) {
if (typeof state === "boolean") {
return state ? this.show() : this.hide();
}
return this.each(function () {
if (isHidden(this)) {
jQuery(this).show();
} else {
jQuery(this).hide();
}
});
}
});
jQuery.extend({
cssHooks: {
opacity: {
get: function (elem, computed) {
if (computed) {
var ret = curCSS(elem, "opacity");
return ret === "" ? "1" : ret;
}
}
}
},
cssNumber: {
"columnCount": true,
"fillOpacity": true,
"fontWeight": true,
"lineHeight": true,
"opacity": true,
"order": true,
"orphans": true,
"widows": true,
"zIndex": true,
"zoom": true
},
cssProps: {
"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
},
style: function (elem, name, value, extra) {
if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
return;
}
var ret, type, hooks,
origName = jQuery.camelCase(name),
style = elem.style;
name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
if (value !== undefined) {
type = typeof value;
if (type === "string" && (ret = rrelNum.exec(value))) {
value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
type = "number";
}
if (value == null || type === "number" && isNaN(value)) {
return;
}
if (type === "number" && !jQuery.cssNumber[origName]) {
value += "px";
}
if (!jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
style[name] = "inherit";
}
if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
try {
style[name] = value;
} catch (e) { }
}
} else {
if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
return ret;
}
return style[name];
}
},
css: function (elem, name, extra, styles) {
var num, val, hooks,
origName = jQuery.camelCase(name);
name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
if (hooks && "get" in hooks) {
val = hooks.get(elem, true, extra);
}
if (val === undefined) {
val = curCSS(elem, name, styles);
}
if (val === "normal" && name in cssNormalTransform) {
val = cssNormalTransform[name];
}
if (extra === "" || extra) {
num = parseFloat(val);
return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
}
return val;
}
});
if (window.getComputedStyle) {
getStyles = function (elem) {
return window.getComputedStyle(elem, null);
};
curCSS = function (elem, name, _computed) {
var width, minWidth, maxWidth,
computed = _computed || getStyles(elem),
ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined,
style = elem.style;
if (computed) {
if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
ret = jQuery.style(elem, name);
}
if (rnumnonpx.test(ret) && rmargin.test(name)) {
width = style.width;
minWidth = style.minWidth;
maxWidth = style.maxWidth;
style.minWidth = style.maxWidth = style.width = ret;
ret = computed.width;
style.width = width;
style.minWidth = minWidth;
style.maxWidth = maxWidth;
}
}
return ret;
};
} else if (document.documentElement.currentStyle) {
getStyles = function (elem) {
return elem.currentStyle;
};
curCSS = function (elem, name, _computed) {
var left, rs, rsLeft,
computed = _computed || getStyles(elem),
ret = computed ? computed[name] : undefined,
style = elem.style;
if (ret == null && style && style[name]) {
ret = style[name];
}
if (rnumnonpx.test(ret) && !rposition.test(name)) {
left = style.left;
rs = elem.runtimeStyle;
rsLeft = rs && rs.left;
if (rsLeft) {
rs.left = elem.currentStyle.left;
}
style.left = name === "fontSize" ? "1em" : ret;
ret = style.pixelLeft + "px";
style.left = left;
if (rsLeft) {
rs.left = rsLeft;
}
}
return ret === "" ? "auto" : ret;
};
}
function setPositiveNumber(elem, value, subtract) {
var matches = rnumsplit.exec(value);
return matches ?
Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") :
value;
}
function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
var i = extra === (isBorderBox ? "border" : "content") ?
4 :
name === "width" ? 1 : 0,
val = 0;
for (; i < 4; i += 2) {
if (extra === "margin") {
val += jQuery.css(elem, extra + cssExpand[i], true, styles);
}
if (isBorderBox) {
if (extra === "content") {
val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
}
if (extra !== "margin") {
val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
}
} else {
val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
if (extra !== "padding") {
val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
}
}
}
return val;
}
function getWidthOrHeight(elem, name, extra) {
var valueIsBorderBox = true,
val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
styles = getStyles(elem),
isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";
if (val <= 0 || val == null) {
val = curCSS(elem, name, styles);
if (val < 0 || val == null) {
val = elem.style[name];
}
if (rnumnonpx.test(val)) {
return val;
}
valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
val = parseFloat(val) || 0;
}
return (val +
augmentWidthOrHeight(
elem,
name,
extra || (isBorderBox ? "border" : "content"),
valueIsBorderBox,
styles
)
) + "px";
}
function css_defaultDisplay(nodeName) {
var doc = document,
display = elemdisplay[nodeName];
if (!display) {
display = actualDisplay(nodeName, doc);
if (display === "none" || !display) {
iframe = (iframe ||
jQuery("<iframe frameborder='0' width='0' height='0'/>")
.css("cssText", "display:block !important")
).appendTo(doc.documentElement);
doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
doc.write("<!doctype html><html><body>");
doc.close();
display = actualDisplay(nodeName, doc);
iframe.detach();
}
elemdisplay[nodeName] = display;
}
return display;
}
function actualDisplay(name, doc) {
var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
display = jQuery.css(elem[0], "display");
elem.remove();
return display;
}
jQuery.each(["height", "width"], function (i, name) {
jQuery.cssHooks[name] = {
get: function (elem, computed, extra) {
if (computed) {
return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, "display")) ?
jQuery.swap(elem, cssShow, function () {
return getWidthOrHeight(elem, name, extra);
}) :
getWidthOrHeight(elem, name, extra);
}
},
set: function (elem, value, extra) {
var styles = extra && getStyles(elem);
return setPositiveNumber(elem, value, extra ?
augmentWidthOrHeight(
elem,
name,
extra,
jQuery.support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
styles
) : 0
);
}
};
});
if (!jQuery.support.opacity) {
jQuery.cssHooks.opacity = {
get: function (elem, computed) {
return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ?
(0.01 * parseFloat(RegExp.$1)) + "" :
computed ? "1" : "";
},
set: function (elem, value) {
var style = elem.style,
currentStyle = elem.currentStyle,
opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
filter = currentStyle && currentStyle.filter || style.filter || "";
style.zoom = 1;
if ((value >= 1 || value === "") &&
jQuery.trim(filter.replace(ralpha, "")) === "" &&
style.removeAttribute) {
style.removeAttribute("filter");
if (value === "" || currentStyle && !currentStyle.filter) {
return;
}
}
style.filter = ralpha.test(filter) ?
filter.replace(ralpha, opacity) :
filter + " " + opacity;
}
};
}
jQuery(function () {
if (!jQuery.support.reliableMarginRight) {
jQuery.cssHooks.marginRight = {
get: function (elem, computed) {
if (computed) {
return jQuery.swap(elem, { "display": "inline-block" },
curCSS, [elem, "marginRight"]);
}
}
};
}
if (!jQuery.support.pixelPosition && jQuery.fn.position) {
jQuery.each(["top", "left"], function (i, prop) {
jQuery.cssHooks[prop] = {
get: function (elem, computed) {
if (computed) {
computed = curCSS(elem, prop);
return rnumnonpx.test(computed) ?
jQuery(elem).position()[prop] + "px" :
computed;
}
}
};
});
}
});
if (jQuery.expr && jQuery.expr.filters) {
jQuery.expr.filters.hidden = function (elem) {
return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css(elem, "display")) === "none");
};
jQuery.expr.filters.visible = function (elem) {
return !jQuery.expr.filters.hidden(elem);
};
}
jQuery.each({
margin: "",
padding: "",
border: "Width"
}, function (prefix, suffix) {
jQuery.cssHooks[prefix + suffix] = {
expand: function (value) {
var i = 0,
expanded = {},
parts = typeof value === "string" ? value.split(" ") : [value];
for (; i < 4; i++) {
expanded[prefix + cssExpand[i] + suffix] =
parts[i] || parts[i - 2] || parts[0];
}
return expanded;
}
};
if (!rmargin.test(prefix)) {
jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
}
});
var r20 = /%20/g,
rbracket = /\[\]$/,
rCRLF = /\r?\n/g,
rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
rsubmittable = /^(?:input|select|textarea|keygen)/i;
jQuery.fn.extend({
serialize: function () {
return jQuery.param(this.serializeArray());
},
serializeArray: function () {
return this.map(function () {
var elements = jQuery.prop(this, "elements");
return elements ? jQuery.makeArray(elements) : this;
})
.filter(function () {
var type = this.type;
return this.name && !jQuery(this).is(":disabled") &&
rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
(this.checked || !manipulation_rcheckableType.test(type));
})
.map(function (i, elem) {
var val = jQuery(this).val();
return val == null ?
null :
jQuery.isArray(val) ?
jQuery.map(val, function (val) {
return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
}) :
{ name: elem.name, value: val.replace(rCRLF, "\r\n") };
}).get();
}
});
jQuery.param = function (a, traditional) {
var prefix,
s = [],
add = function (key, value) {
value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
};
if (traditional === undefined) {
traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
}
if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
jQuery.each(a, function () {
add(this.name, this.value);
});
} else {
for (prefix in a) {
buildParams(prefix, a[prefix], traditional, add);
}
}
return s.join("&").replace(r20, "+");
};
function buildParams(prefix, obj, traditional, add) {
var name;
if (jQuery.isArray(obj)) {
jQuery.each(obj, function (i, v) {
if (traditional || rbracket.test(prefix)) {
add(prefix, v);
} else {
buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
}
});
} else if (!traditional && jQuery.type(obj) === "object") {
for (name in obj) {
buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
}
} else {
add(prefix, obj);
}
}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
"change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
jQuery.fn[name] = function (data, fn) {
return arguments.length > 0 ?
this.on(name, null, data, fn) :
this.trigger(name);
};
});
jQuery.fn.extend({
hover: function (fnOver, fnOut) {
return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
},
bind: function (types, data, fn) {
return this.on(types, null, data, fn);
},
unbind: function (types, fn) {
return this.off(types, null, fn);
},
delegate: function (selector, types, data, fn) {
return this.on(types, selector, data, fn);
},
undelegate: function (selector, types, fn) {
return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
}
});
var
ajaxLocParts,
ajaxLocation,
ajax_nonce = jQuery.now(),
ajax_rquery = /\?/,
rhash = /#.*$/,
rts = /([?&])_=[^&]*/,
rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent = /^(?:GET|HEAD)$/,
rprotocol = /^\/\//,
rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
_load = jQuery.fn.load,
prefilters = {},
transports = {},
allTypes = "*/".concat("*");
try {
ajaxLocation = location.href;
} catch (e) {
ajaxLocation = document.createElement("a");
ajaxLocation.href = "";
ajaxLocation = ajaxLocation.href;
}
ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
function addToPrefiltersOrTransports(structure) {
return function (dataTypeExpression, func) {
if (typeof dataTypeExpression !== "string") {
func = dataTypeExpression;
dataTypeExpression = "*";
}
var dataType,
i = 0,
dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
if (jQuery.isFunction(func)) {
while ((dataType = dataTypes[i++])) {
if (dataType[0] === "+") {
dataType = dataType.slice(1) || "*";
(structure[dataType] = structure[dataType] || []).unshift(func);
} else {
(structure[dataType] = structure[dataType] || []).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
var inspected = {},
seekingTransport = (structure === transports);
function inspect(dataType) {
var selected;
inspected[dataType] = true;
jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
} else if (seekingTransport) {
return !(selected = dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
}
function ajaxExtend(target, src) {
var deep, key,
flatOptions = jQuery.ajaxSettings.flatOptions || {};
for (key in src) {
if (src[key] !== undefined) {
(flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
}
}
if (deep) {
jQuery.extend(true, target, deep);
}
return target;
}
jQuery.fn.load = function (url, params, callback) {
if (typeof url !== "string" && _load) {
return _load.apply(this, arguments);
}
var selector, response, type,
self = this,
off = url.indexOf(" ");
if (off >= 0) {
selector = url.slice(off, url.length);
url = url.slice(0, off);
}
if (jQuery.isFunction(params)) {
callback = params;
params = undefined;
} else if (params && typeof params === "object") {
type = "POST";
}
if (self.length > 0) {
jQuery.ajax({
url: url,
type: type,
dataType: "html",
data: params
}).done(function (responseText) {
response = arguments;
self.html(selector ?
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :
responseText);
}).complete(callback && function (jqXHR, status) {
self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
});
}
return this;
};
jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
jQuery.fn[type] = function (fn) {
return this.on(type, fn);
};
});
jQuery.extend({
active: 0,
lastModified: {},
etag: {},
ajaxSettings: {
url: ajaxLocation,
type: "GET",
isLocal: rlocalProtocol.test(ajaxLocParts[1]),
global: true,
processData: true,
async: true,
contentType: "application/x-www-form-urlencoded; charset=UTF-8",
accepts: {
"*": allTypes,
text: "text/plain",
html: "text/html",
xml: "application/xml, text/xml",
json: "application/json, text/javascript"
},
contents: {
xml: /xml/,
html: /html/,
json: /json/
},
responseFields: {
xml: "responseXML",
text: "responseText",
json: "responseJSON"
},
converters: {
"* text": String,
"text html": true,
"text json": jQuery.parseJSON,
"text xml": jQuery.parseXML
},
flatOptions: {
url: true,
context: true
}
},
ajaxSetup: function (target, settings) {
return settings ?
ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :
ajaxExtend(jQuery.ajaxSettings, target);
},
ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
ajaxTransport: addToPrefiltersOrTransports(transports),
ajax: function (url, options) {
if (typeof url === "object") {
options = url;
url = undefined;
}
options = options || {};
var
parts,
i,
cacheURL,
responseHeadersString,
timeoutTimer,
fireGlobals,
transport,
responseHeaders,
s = jQuery.ajaxSetup({}, options),
callbackContext = s.context || s,
globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ?
jQuery(callbackContext) :
jQuery.event,
deferred = jQuery.Deferred(),
completeDeferred = jQuery.Callbacks("once memory"),
statusCode = s.statusCode || {},
requestHeaders = {},
requestHeadersNames = {},
state = 0,
strAbort = "canceled",
jqXHR = {
readyState: 0,
getResponseHeader: function (key) {
var match;
if (state === 2) {
if (!responseHeaders) {
responseHeaders = {};
while ((match = rheaders.exec(responseHeadersString))) {
responseHeaders[match[1].toLowerCase()] = match[2];
}
}
match = responseHeaders[key.toLowerCase()];
}
return match == null ? null : match;
},
getAllResponseHeaders: function () {
return state === 2 ? responseHeadersString : null;
},
setRequestHeader: function (name, value) {
var lname = name.toLowerCase();
if (!state) {
name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
requestHeaders[name] = value;
}
return this;
},
overrideMimeType: function (type) {
if (!state) {
s.mimeType = type;
}
return this;
},
statusCode: function (map) {
var code;
if (map) {
if (state < 2) {
for (code in map) {
statusCode[code] = [statusCode[code], map[code]];
}
} else {
jqXHR.always(map[jqXHR.status]);
}
}
return this;
},
abort: function (statusText) {
var finalText = statusText || strAbort;
if (transport) {
transport.abort(finalText);
}
done(0, finalText);
return this;
}
};
deferred.promise(jqXHR).complete = completeDeferred.add;
jqXHR.success = jqXHR.done;
jqXHR.error = jqXHR.fail;
s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");
s.type = options.method || options.type || s.method || s.type;
s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(core_rnotwhite) || [""];
if (s.crossDomain == null) {
parts = rurl.exec(s.url.toLowerCase());
s.crossDomain = !!(parts &&
(parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] ||
(parts[3] || (parts[1] === "http:" ? "80" : "443")) !==
(ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
);
}
if (s.data && s.processData && typeof s.data !== "string") {
s.data = jQuery.param(s.data, s.traditional);
}
inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
if (state === 2) {
return jqXHR;
}
fireGlobals = s.global;
if (fireGlobals && jQuery.active++ === 0) {
jQuery.event.trigger("ajaxStart");
}
s.type = s.type.toUpperCase();
s.hasContent = !rnoContent.test(s.type);
cacheURL = s.url;
if (!s.hasContent) {
if (s.data) {
cacheURL = (s.url += (ajax_rquery.test(cacheURL) ? "&" : "?") + s.data);
delete s.data;
}
if (s.cache === false) {
s.url = rts.test(cacheURL) ?
cacheURL.replace(rts, "$1_=" + ajax_nonce++) :
cacheURL + (ajax_rquery.test(cacheURL) ? "&" : "?") + "_=" + ajax_nonce++;
}
}
if (s.ifModified) {
if (jQuery.lastModified[cacheURL]) {
jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
}
if (jQuery.etag[cacheURL]) {
jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
}
}
if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
jqXHR.setRequestHeader("Content-Type", s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
s.accepts["*"]
);
for (i in s.headers) {
jqXHR.setRequestHeader(i, s.headers[i]);
}
if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
return jqXHR.abort();
}
strAbort = "abort";
for (i in { success: 1, error: 1, complete: 1 }) {
jqXHR[i](s[i]);
}
transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
if (!transport) {
done(-1, "No Transport");
} else {
jqXHR.readyState = 1;
if (fireGlobals) {
globalEventContext.trigger("ajaxSend", [jqXHR, s]);
}
if (s.async && s.timeout > 0) {
timeoutTimer = setTimeout(function () {
jqXHR.abort("timeout");
}, s.timeout);
}
try {
state = 1;
transport.send(requestHeaders, done);
} catch (e) {
if (state < 2) {
done(-1, e);
} else {
throw e;
}
}
}
function done(status, nativeStatusText, responses, headers) {
var isSuccess, success, error, response, modified,
statusText = nativeStatusText;
if (state === 2) {
return;
}
state = 2;
if (timeoutTimer) {
clearTimeout(timeoutTimer);
}
transport = undefined;
responseHeadersString = headers || "";
jqXHR.readyState = status > 0 ? 4 : 0;
isSuccess = status >= 200 && status < 300 || status === 304;
if (responses) {
response = ajaxHandleResponses(s, jqXHR, responses);
}
response = ajaxConvert(s, response, jqXHR, isSuccess);
if (isSuccess) {
if (s.ifModified) {
modified = jqXHR.getResponseHeader("Last-Modified");
if (modified) {
jQuery.lastModified[cacheURL] = modified;
}
modified = jqXHR.getResponseHeader("etag");
if (modified) {
jQuery.etag[cacheURL] = modified;
}
}
if (status === 204 || s.type === "HEAD") {
statusText = "nocontent";
} else if (status === 304) {
statusText = "notmodified";
} else {
statusText = response.state;
success = response.data;
error = response.error;
isSuccess = !error;
}
} else {
error = statusText;
if (status || !statusText) {
statusText = "error";
if (status < 0) {
status = 0;
}
}
}
jqXHR.status = status;
jqXHR.statusText = (nativeStatusText || statusText) + "";
if (isSuccess) {
deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
} else {
deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
}
jqXHR.statusCode(statusCode);
statusCode = undefined;
if (fireGlobals) {
globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
[jqXHR, s, isSuccess ? success : error]);
}
completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
if (fireGlobals) {
globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
if (!(--jQuery.active)) {
jQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON: function (url, data, callback) {
return jQuery.get(url, data, callback, "json");
},
getScript: function (url, callback) {
return jQuery.get(url, undefined, callback, "script");
}
});
jQuery.each(["get", "post"], function (i, method) {
jQuery[method] = function (url, data, callback, type) {
if (jQuery.isFunction(data)) {
type = type || callback;
callback = data;
data = undefined;
}
return jQuery.ajax({
url: url,
type: method,
dataType: type,
data: data,
success: callback
});
};
});
function ajaxHandleResponses(s, jqXHR, responses) {
var firstDataType, ct, finalDataType, type,
contents = s.contents,
dataTypes = s.dataTypes;
while (dataTypes[0] === "*") {
dataTypes.shift();
if (ct === undefined) {
ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
}
}
if (ct) {
for (type in contents) {
if (contents[type] && contents[type].test(ct)) {
dataTypes.unshift(type);
break;
}
}
}
if (dataTypes[0] in responses) {
finalDataType = dataTypes[0];
} else {
for (type in responses) {
if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
finalDataType = type;
break;
}
if (!firstDataType) {
firstDataType = type;
}
}
finalDataType = finalDataType || firstDataType;
}
if (finalDataType) {
if (finalDataType !== dataTypes[0]) {
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s, response, jqXHR, isSuccess) {
var conv2, current, conv, tmp, prev,
converters = {},
dataTypes = s.dataTypes.slice();
if (dataTypes[1]) {
for (conv in s.converters) {
converters[conv.toLowerCase()] = s.converters[conv];
}
}
current = dataTypes.shift();
while (current) {
if (s.responseFields[current]) {
jqXHR[s.responseFields[current]] = response;
}
if (!prev && isSuccess && s.dataFilter) {
response = s.dataFilter(response, s.dataType);
}
prev = current;
current = dataTypes.shift();
if (current) {
if (current === "*") {
current = prev;
} else if (prev !== "*" && prev !== current) {
conv = converters[prev + " " + current] || converters["* " + current];
if (!conv) {
for (conv2 in converters) {
tmp = conv2.split(" ");
if (tmp[1] === current) {
conv = converters[prev + " " + tmp[0]] ||
converters["* " + tmp[0]];
if (conv) {
if (conv === true) {
conv = converters[conv2];
} else if (converters[conv2] !== true) {
current = tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if (conv !== true) {
if (conv && s["throws"]) {
response = conv(response);
} else {
try {
response = conv(response);
} catch (e) {
return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
}
}
}
}
}
}
return { state: "success", data: response };
}
jQuery.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /(?:java|ecma)script/
},
converters: {
"text script": function (text) {
jQuery.globalEval(text);
return text;
}
}
});
jQuery.ajaxPrefilter("script", function (s) {
if (s.cache === undefined) {
s.cache = false;
}
if (s.crossDomain) {
s.type = "GET";
s.global = false;
}
});
jQuery.ajaxTransport("script", function (s) {
if (s.crossDomain) {
var script,
head = document.head || jQuery("head")[0] || document.documentElement;
return {
send: function (_, callback) {
script = document.createElement("script");
script.async = true;
if (s.scriptCharset) {
script.charset = s.scriptCharset;
}
script.src = s.url;
script.onload = script.onreadystatechange = function (_, isAbort) {
if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
script.onload = script.onreadystatechange = null;
if (script.parentNode) {
script.parentNode.removeChild(script);
}
script = null;
if (!isAbort) {
callback(200, "success");
}
}
};
head.insertBefore(script, head.firstChild);
},
abort: function () {
if (script) {
script.onload(undefined, true);
}
}
};
}
});
var oldCallbacks = [],
rjsonp = /(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({
jsonp: "callback",
jsonpCallback: function () {
var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (ajax_nonce++));
this[callback] = true;
return callback;
}
});
jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
var callbackName, overwritten, responseContainer,
jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
"url" :
typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"
);
if (jsonProp || s.dataTypes[0] === "jsonp") {
callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
s.jsonpCallback() :
s.jsonpCallback;
if (jsonProp) {
s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
} else if (s.jsonp !== false) {
s.url += (ajax_rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
}
s.converters["script json"] = function () {
if (!responseContainer) {
jQuery.error(callbackName + " was not called");
}
return responseContainer[0];
};
s.dataTypes[0] = "json";
overwritten = window[callbackName];
window[callbackName] = function () {
responseContainer = arguments;
};
jqXHR.always(function () {
window[callbackName] = overwritten;
if (s[callbackName]) {
s.jsonpCallback = originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if (responseContainer && jQuery.isFunction(overwritten)) {
overwritten(responseContainer[0]);
}
responseContainer = overwritten = undefined;
});
return "script";
}
});
var xhrCallbacks, xhrSupported,
xhrId = 0,
xhrOnUnloadAbort = window.ActiveXObject && function () {
var key;
for (key in xhrCallbacks) {
xhrCallbacks[key](undefined, true);
}
};
function createStandardXHR() {
try {
return new window.XMLHttpRequest();
} catch (e) { }
}
function createActiveXHR() {
try {
return new window.ActiveXObject("Microsoft.XMLHTTP");
} catch (e) { }
}
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
function () {
return !this.isLocal && createStandardXHR() || createActiveXHR();
} :
createStandardXHR;
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
xhrSupported = jQuery.support.ajax = !!xhrSupported;
if (xhrSupported) {
jQuery.ajaxTransport(function (s) {
if (!s.crossDomain || jQuery.support.cors) {
var callback;
return {
send: function (headers, complete) {
var handle, i,
xhr = s.xhr();
if (s.username) {
xhr.open(s.type, s.url, s.async, s.username, s.password);
} else {
xhr.open(s.type, s.url, s.async);
}
if (s.xhrFields) {
for (i in s.xhrFields) {
xhr[i] = s.xhrFields[i];
}
}
if (s.mimeType && xhr.overrideMimeType) {
xhr.overrideMimeType(s.mimeType);
}
if (!s.crossDomain && !headers["X-Requested-With"]) {
headers["X-Requested-With"] = "XMLHttpRequest";
}
try {
for (i in headers) {
xhr.setRequestHeader(i, headers[i]);
}
} catch (err) { }
xhr.send((s.hasContent && s.data) || null);
callback = function (_, isAbort) {
var status, responseHeaders, statusText, responses;
try {
if (callback && (isAbort || xhr.readyState === 4)) {
callback = undefined;
if (handle) {
xhr.onreadystatechange = jQuery.noop;
if (xhrOnUnloadAbort) {
delete xhrCallbacks[handle];
}
}
if (isAbort) {
if (xhr.readyState !== 4) {
xhr.abort();
}
} else {
responses = {};
status = xhr.status;
responseHeaders = xhr.getAllResponseHeaders();
if (typeof xhr.responseText === "string") {
responses.text = xhr.responseText;
}
try {
statusText = xhr.statusText;
} catch (e) {
statusText = "";
}
if (!status && s.isLocal && !s.crossDomain) {
status = responses.text ? 200 : 404;
} else if (status === 1223) {
status = 204;
}
}
}
} catch (firefoxAccessException) {
if (!isAbort) {
complete(-1, firefoxAccessException);
}
}
if (responses) {
complete(status, statusText, responses, responseHeaders);
}
};
if (!s.async) {
callback();
} else if (xhr.readyState === 4) {
setTimeout(callback);
} else {
handle = ++xhrId;
if (xhrOnUnloadAbort) {
if (!xhrCallbacks) {
xhrCallbacks = {};
jQuery(window).unload(xhrOnUnloadAbort);
}
xhrCallbacks[handle] = callback;
}
xhr.onreadystatechange = callback;
}
},
abort: function () {
if (callback) {
callback(undefined, true);
}
}
};
}
});
}
var fxNow, timerId,
rfxtypes = /^(?:toggle|show|hide)$/,
rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"),
rrun = /queueHooks$/,
animationPrefilters = [defaultPrefilter],
tweeners = {
"*": [function (prop, value) {
var tween = this.createTween(prop, value),
target = tween.cur(),
parts = rfxnum.exec(value),
unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
start = (jQuery.cssNumber[prop] || unit !== "px" && +target) &&
rfxnum.exec(jQuery.css(tween.elem, prop)),
scale = 1,
maxIterations = 20;
if (start && start[3] !== unit) {
unit = unit || start[3];
parts = parts || [];
start = +target || 1;
do {
scale = scale || ".5";
start = start / scale;
jQuery.style(tween.elem, prop, start + unit);
} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
}
if (parts) {
start = tween.start = +start || +target || 0;
tween.unit = unit;
tween.end = parts[1] ?
start + (parts[1] + 1) * parts[2] :
+parts[2];
}
return tween;
} ]
};
function createFxNow() {
setTimeout(function () {
fxNow = undefined;
});
return (fxNow = jQuery.now());
}
function createTween(value, prop, animation) {
var tween,
collection = (tweeners[prop] || []).concat(tweeners["*"]),
index = 0,
length = collection.length;
for (; index < length; index++) {
if ((tween = collection[index].call(animation, prop, value))) {
return tween;
}
}
}
function Animation(elem, properties, options) {
var result,
stopped,
index = 0,
length = animationPrefilters.length,
deferred = jQuery.Deferred().always(function () {
delete tick.elem;
}),
tick = function () {
if (stopped) {
return false;
}
var currentTime = fxNow || createFxNow(),
remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
temp = remaining / animation.duration || 0,
percent = 1 - temp,
index = 0,
length = animation.tweens.length;
for (; index < length; index++) {
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem, [animation, percent, remaining]);
if (percent < 1 && length) {
return remaining;
} else {
deferred.resolveWith(elem, [animation]);
return false;
}
},
animation = deferred.promise({
elem: elem,
props: jQuery.extend({}, properties),
opts: jQuery.extend(true, { specialEasing: {} }, options),
originalProperties: properties,
originalOptions: options,
startTime: fxNow || createFxNow(),
duration: options.duration,
tweens: [],
createTween: function (prop, end) {
var tween = jQuery.Tween(elem, animation.opts, prop, end,
animation.opts.specialEasing[prop] || animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop: function (gotoEnd) {
var index = 0,
length = gotoEnd ? animation.tweens.length : 0;
if (stopped) {
return this;
}
stopped = true;
for (; index < length; index++) {
animation.tweens[index].run(1);
}
if (gotoEnd) {
deferred.resolveWith(elem, [animation, gotoEnd]);
} else {
deferred.rejectWith(elem, [animation, gotoEnd]);
}
return this;
}
}),
props = animation.props;
propFilter(props, animation.opts.specialEasing);
for (; index < length; index++) {
result = animationPrefilters[index].call(animation, elem, props, animation.opts);
if (result) {
return result;
}
}
jQuery.map(props, createTween, animation);
if (jQuery.isFunction(animation.opts.start)) {
animation.opts.start.call(elem, animation);
}
jQuery.fx.timer(
jQuery.extend(tick, {
elem: elem,
anim: animation,
queue: animation.opts.queue
})
);
return animation.progress(animation.opts.progress)
.done(animation.opts.done, animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
}
function propFilter(props, specialEasing) {
var index, name, easing, value, hooks;
for (index in props) {
name = jQuery.camelCase(index);
easing = specialEasing[name];
value = props[index];
if (jQuery.isArray(value)) {
easing = value[1];
value = props[index] = value[0];
}
if (index !== name) {
props[name] = value;
delete props[index];
}
hooks = jQuery.cssHooks[name];
if (hooks && "expand" in hooks) {
value = hooks.expand(value);
delete props[name];
for (index in value) {
if (!(index in props)) {
props[index] = value[index];
specialEasing[index] = easing;
}
}
} else {
specialEasing[name] = easing;
}
}
}
jQuery.Animation = jQuery.extend(Animation, {
tweener: function (props, callback) {
if (jQuery.isFunction(props)) {
callback = props;
props = ["*"];
} else {
props = props.split(" ");
}
var prop,
index = 0,
length = props.length;
for (; index < length; index++) {
prop = props[index];
tweeners[prop] = tweeners[prop] || [];
tweeners[prop].unshift(callback);
}
},
prefilter: function (callback, prepend) {
if (prepend) {
animationPrefilters.unshift(callback);
} else {
animationPrefilters.push(callback);
}
}
});
function defaultPrefilter(elem, props, opts) {
var prop, value, toggle, tween, hooks, oldfire,
anim = this,
orig = {},
style = elem.style,
hidden = elem.nodeType && isHidden(elem),
dataShow = jQuery._data(elem, "fxshow");
if (!opts.queue) {
hooks = jQuery._queueHooks(elem, "fx");
if (hooks.unqueued == null) {
hooks.unqueued = 0;
oldfire = hooks.empty.fire;
hooks.empty.fire = function () {
if (!hooks.unqueued) {
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function () {
anim.always(function () {
hooks.unqueued--;
if (!jQuery.queue(elem, "fx").length) {
hooks.empty.fire();
}
});
});
}
if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
opts.overflow = [style.overflow, style.overflowX, style.overflowY];
if (jQuery.css(elem, "display") === "inline" &&
jQuery.css(elem, "float") === "none") {
if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === "inline") {
style.display = "inline-block";
} else {
style.zoom = 1;
}
}
}
if (opts.overflow) {
style.overflow = "hidden";
if (!jQuery.support.shrinkWrapBlocks) {
anim.always(function () {
style.overflow = opts.overflow[0];
style.overflowX = opts.overflow[1];
style.overflowY = opts.overflow[2];
});
}
}
for (prop in props) {
value = props[prop];
if (rfxtypes.exec(value)) {
delete props[prop];
toggle = toggle || value === "toggle";
if (value === (hidden ? "hide" : "show")) {
continue;
}
orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
}
}
if (!jQuery.isEmptyObject(orig)) {
if (dataShow) {
if ("hidden" in dataShow) {
hidden = dataShow.hidden;
}
} else {
dataShow = jQuery._data(elem, "fxshow", {});
}
if (toggle) {
dataShow.hidden = !hidden;
}
if (hidden) {
jQuery(elem).show();
} else {
anim.done(function () {
jQuery(elem).hide();
});
}
anim.done(function () {
var prop;
jQuery._removeData(elem, "fxshow");
for (prop in orig) {
jQuery.style(elem, prop, orig[prop]);
}
});
for (prop in orig) {
tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
if (!(prop in dataShow)) {
dataShow[prop] = tween.start;
if (hidden) {
tween.end = tween.start;
tween.start = prop === "width" || prop === "height" ? 1 : 0;
}
}
}
}
}
function Tween(elem, options, prop, end, easing) {
return new Tween.prototype.init(elem, options, prop, end, easing);
}
jQuery.Tween = Tween;
Tween.prototype = {
constructor: Tween,
init: function (elem, options, prop, end, easing, unit) {
this.elem = elem;
this.prop = prop;
this.easing = easing || "swing";
this.options = options;
this.start = this.now = this.cur();
this.end = end;
this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
},
cur: function () {
var hooks = Tween.propHooks[this.prop];
return hooks && hooks.get ?
hooks.get(this) :
Tween.propHooks._default.get(this);
},
run: function (percent) {
var eased,
hooks = Tween.propHooks[this.prop];
if (this.options.duration) {
this.pos = eased = jQuery.easing[this.easing](
percent, this.options.duration * percent, 0, 1, this.options.duration
);
} else {
this.pos = eased = percent;
}
this.now = (this.end - this.start) * eased + this.start;
if (this.options.step) {
this.options.step.call(this.elem, this.now, this);
}
if (hooks && hooks.set) {
hooks.set(this);
} else {
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype = Tween.prototype;
Tween.propHooks = {
_default: {
get: function (tween) {
var result;
if (tween.elem[tween.prop] != null &&
(!tween.elem.style || tween.elem.style[tween.prop] == null)) {
return tween.elem[tween.prop];
}
result = jQuery.css(tween.elem, tween.prop, "");
return !result || result === "auto" ? 0 : result;
},
set: function (tween) {
if (jQuery.fx.step[tween.prop]) {
jQuery.fx.step[tween.prop](tween);
} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
} else {
tween.elem[tween.prop] = tween.now;
}
}
}
};
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
set: function (tween) {
if (tween.elem.nodeType && tween.elem.parentNode) {
tween.elem[tween.prop] = tween.now;
}
}
};
jQuery.each(["toggle", "show", "hide"], function (i, name) {
var cssFn = jQuery.fn[name];
jQuery.fn[name] = function (speed, easing, callback) {
return speed == null || typeof speed === "boolean" ?
cssFn.apply(this, arguments) :
this.animate(genFx(name, true), speed, easing, callback);
};
});
jQuery.fn.extend({
fadeTo: function (speed, to, easing, callback) {
return this.filter(isHidden).css("opacity", 0).show()
.end().animate({ opacity: to }, speed, easing, callback);
},
animate: function (prop, speed, easing, callback) {
var empty = jQuery.isEmptyObject(prop),
optall = jQuery.speed(speed, easing, callback),
doAnimation = function () {
var anim = Animation(this, jQuery.extend({}, prop), optall);
if (empty || jQuery._data(this, "finish")) {
anim.stop(true);
}
};
doAnimation.finish = doAnimation;
return empty || optall.queue === false ?
this.each(doAnimation) :
this.queue(optall.queue, doAnimation);
},
stop: function (type, clearQueue, gotoEnd) {
var stopQueue = function (hooks) {
var stop = hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if (typeof type !== "string") {
gotoEnd = clearQueue;
clearQueue = type;
type = undefined;
}
if (clearQueue && type !== false) {
this.queue(type || "fx", []);
}
return this.each(function () {
var dequeue = true,
index = type != null && type + "queueHooks",
timers = jQuery.timers,
data = jQuery._data(this);
if (index) {
if (data[index] && data[index].stop) {
stopQueue(data[index]);
}
} else {
for (index in data) {
if (data[index] && data[index].stop && rrun.test(index)) {
stopQueue(data[index]);
}
}
}
for (index = timers.length; index--; ) {
if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
timers[index].anim.stop(gotoEnd);
dequeue = false;
timers.splice(index, 1);
}
}
if (dequeue || !gotoEnd) {
jQuery.dequeue(this, type);
}
});
},
finish: function (type) {
if (type !== false) {
type = type || "fx";
}
return this.each(function () {
var index,
data = jQuery._data(this),
queue = data[type + "queue"],
hooks = data[type + "queueHooks"],
timers = jQuery.timers,
length = queue ? queue.length : 0;
data.finish = true;
jQuery.queue(this, type, []);
if (hooks && hooks.stop) {
hooks.stop.call(this, true);
}
for (index = timers.length; index--; ) {
if (timers[index].elem === this && timers[index].queue === type) {
timers[index].anim.stop(true);
timers.splice(index, 1);
}
}
for (index = 0; index < length; index++) {
if (queue[index] && queue[index].finish) {
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
function genFx(type, includeWidth) {
var which,
attrs = { height: type },
i = 0;
includeWidth = includeWidth ? 1 : 0;
for (; i < 4; i += 2 - includeWidth) {
which = cssExpand[i];
attrs["margin" + which] = attrs["padding" + which] = type;
}
if (includeWidth) {
attrs.opacity = attrs.width = type;
}
return attrs;
}
jQuery.each({
slideDown: genFx("show"),
slideUp: genFx("hide"),
slideToggle: genFx("toggle"),
fadeIn: { opacity: "show" },
fadeOut: { opacity: "hide" },
fadeToggle: { opacity: "toggle" }
}, function (name, props) {
jQuery.fn[name] = function (speed, easing, callback) {
return this.animate(props, speed, easing, callback);
};
});
jQuery.speed = function (speed, easing, fn) {
var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
complete: fn || !fn && easing ||
jQuery.isFunction(speed) && speed,
duration: speed,
easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
};
opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
if (opt.queue == null || opt.queue === true) {
opt.queue = "fx";
}
opt.old = opt.complete;
opt.complete = function () {
if (jQuery.isFunction(opt.old)) {
opt.old.call(this);
}
if (opt.queue) {
jQuery.dequeue(this, opt.queue);
}
};
return opt;
};
jQuery.easing = {
linear: function (p) {
return p;
},
swing: function (p) {
return 0.5 - Math.cos(p * Math.PI) / 2;
}
};
jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function () {
var timer,
timers = jQuery.timers,
i = 0;
fxNow = jQuery.now();
for (; i < timers.length; i++) {
timer = timers[i];
if (!timer() && timers[i] === timer) {
timers.splice(i--, 1);
}
}
if (!timers.length) {
jQuery.fx.stop();
}
fxNow = undefined;
};
jQuery.fx.timer = function (timer) {
if (timer() && jQuery.timers.push(timer)) {
jQuery.fx.start();
}
};
jQuery.fx.interval = 13;
jQuery.fx.start = function () {
if (!timerId) {
timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
}
};
jQuery.fx.stop = function () {
clearInterval(timerId);
timerId = null;
};
jQuery.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
};
jQuery.fx.step = {};
if (jQuery.expr && jQuery.expr.filters) {
jQuery.expr.filters.animated = function (elem) {
return jQuery.grep(jQuery.timers, function (fn) {
return elem === fn.elem;
}).length;
};
}
jQuery.fn.offset = function (options) {
if (arguments.length) {
return options === undefined ?
this :
this.each(function (i) {
jQuery.offset.setOffset(this, options, i);
});
}
var docElem, win,
box = { top: 0, left: 0 },
elem = this[0],
doc = elem && elem.ownerDocument;
if (!doc) {
return;
}
docElem = doc.documentElement;
if (!jQuery.contains(docElem, elem)) {
return box;
}
if (typeof elem.getBoundingClientRect !== core_strundefined) {
box = elem.getBoundingClientRect();
}
win = getWindow(doc);
return {
top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
};
};
jQuery.offset = {
setOffset: function (elem, options, i) {
var position = jQuery.css(elem, "position");
if (position === "static") {
elem.style.position = "relative";
}
var curElem = jQuery(elem),
curOffset = curElem.offset(),
curCSSTop = jQuery.css(elem, "top"),
curCSSLeft = jQuery.css(elem, "left"),
calculatePosition = (position === "absolute" || position === "fixed") && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
props = {}, curPosition = {}, curTop, curLeft;
if (calculatePosition) {
curPosition = curElem.position();
curTop = curPosition.top;
curLeft = curPosition.left;
} else {
curTop = parseFloat(curCSSTop) || 0;
curLeft = parseFloat(curCSSLeft) || 0;
}
if (jQuery.isFunction(options)) {
options = options.call(elem, i, curOffset);
}
if (options.top != null) {
props.top = (options.top - curOffset.top) + curTop;
}
if (options.left != null) {
props.left = (options.left - curOffset.left) + curLeft;
}
if ("using" in options) {
options.using.call(elem, props);
} else {
curElem.css(props);
}
}
};
jQuery.fn.extend({
position: function () {
if (!this[0]) {
return;
}
var offsetParent, offset,
parentOffset = { top: 0, left: 0 },
elem = this[0];
if (jQuery.css(elem, "position") === "fixed") {
offset = elem.getBoundingClientRect();
} else {
offsetParent = this.offsetParent();
offset = this.offset();
if (!jQuery.nodeName(offsetParent[0], "html")) {
parentOffset = offsetParent.offset();
}
parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
}
return {
top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
};
},
offsetParent: function () {
return this.map(function () {
var offsetParent = this.offsetParent || docElem;
while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
offsetParent = offsetParent.offsetParent;
}
return offsetParent || docElem;
});
}
});
jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
var top = /Y/.test(prop);
jQuery.fn[method] = function (val) {
return jQuery.access(this, function (elem, method, val) {
var win = getWindow(elem);
if (val === undefined) {
return win ? (prop in win) ? win[prop] :
win.document.documentElement[method] :
elem[method];
}
if (win) {
win.scrollTo(
!top ? val : jQuery(win).scrollLeft(),
top ? val : jQuery(win).scrollTop()
);
} else {
elem[method] = val;
}
}, method, val, arguments.length, null);
};
});
function getWindow(elem) {
return jQuery.isWindow(elem) ?
elem :
elem.nodeType === 9 ?
elem.defaultView || elem.parentWindow :
false;
}
jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
jQuery.fn[funcName] = function (margin, value) {
var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
return jQuery.access(this, function (elem, type, value) {
var doc;
if (jQuery.isWindow(elem)) {
return elem.document.documentElement["client" + name];
}
if (elem.nodeType === 9) {
doc = elem.documentElement;
return Math.max(
elem.body["scroll" + name], doc["scroll" + name],
elem.body["offset" + name], doc["offset" + name],
doc["client" + name]
);
}
return value === undefined ?
jQuery.css(elem, type, extra) :
jQuery.style(elem, type, value, extra);
}, type, chainable ? margin : undefined, chainable, null);
};
});
});
jQuery.fn.size = function () {
return this.length;
};
jQuery.fn.andSelf = jQuery.fn.addBack;
if (typeof module === "object" && module && typeof module.exports === "object") {
module.exports = jQuery;
} else {
window.jQuery = window.$ = jQuery;
if (typeof define === "function" && define.amd) {
define("jquery", [], function () { return jQuery; });
}
}
})(window);
}
else if (jquery == false) {
return;
}
}
var freetime = function(){
lastInteractionTime = 0;
}
var frame13 = function (that) {
var frame;
if (that.contentDocument) { frame = that.contentDocument; }
else if (that.contentWindow.document) { frame = that.contentWindow.document; }
else if (top[that.name]) { frame = top[that.name].document; }
else if (top.popup_gw) { frame = top.popup_gw.document; }
else {
if (top.frames[2].document.body) { frame = top.frames[2]; }
else if (top.frames[4].document.body) { frame = top.frames[4]; }
else { throw new Error('frame is not defined') };
};
var frameDoc;
if (frame) { frameDoc = frame.body; }
else { throw new Error('frame.document.body - is not defined, ', frame); };
frameDoc.onmousemove = freetime;
frameDoc.onkeypress = freetime;
if(navigator.appVersion.indexOf("MSIE 9")!=-1 || navigator.appVersion.indexOf("MSIE 10")!=-1){
var it = frameDoc.querySelectorAll("input[type=text]");
for(var i = 0; i < it.length; i ++){
it[i].onfocus = function(){ this.select(); }
it[i].onmouseup = function(){ return false; }
}
var d = frameDoc.getElementsByTagName("option");
for(var i = 0; i < d.length; i ++)
d[i].onclick = function(){ setTimeout(function() { parent.document.getElementById('theSubmitButton').focus(); }, 1); }
}
}
function alert(txt)
{
_top.MsgLog.addMsg(txt, "Warning");
}
if(document.all)
{
window.attachEvent("onload", init);
}
else
{
window.addEventListener("load", init,true);
}
var selectColor = "#abb8d9";
var defaultColor = "white";
var rawValue;
var alertExist=false;
var BufferSize=25000;
var maxNumOfFieldsToStore=2000;
var fieldsEntrySize=0;
var notIE = (document.evaluate || navigator.appName.indexOf("Microsoft") == -1);
var needToRefresh=false;
var docObj;
if (opener)
if (opener.opener)
if (opener.opener.opener) docObj=opener.opener.opener.top;
else docObj=opener.opener.top;
else docObj=opener.top;
else docObj=top;
if (typeof _top == "undefined")
{
if (parent != self)
_top = parent;
else if (opener)
_top = opener.parent;
}
try
{
_top.fldToCheck="";
}
catch(e){}
window.onfocus="checkForErrors();";
function setCookieForSession()
{
if (_top.cookieFlag)
{
_top.frames["cookiesFrame"].document.location.reload();
}
}
function numbersOnlyWithSigns(myfield, e, allowedChar)
{
var key;
if(window.event)
{
key = window.event.keyCode;
}
else if(e)
{
key = e.which;
}
else
{
return true;
}
if(numbersOnlyNoSigns(myfield, e) || String.fromCharCode(key) == allowedChar)
{
return true;
}
else
{
return false;
}
}
function numbersOnlyNoSigns(myfield, e)
{
var key;
var keychar;
if(window.event)
{
key = window.event.keyCode;
}
else if(e)
{
key = e.which;
}
else
{
return true;
}
if((key==null) || (key==0) || (key==8) || (key==9) || (key==27))
{
return true;
}
if(isNumber(String.fromCharCode(key)))
{
return true;
}
else
{
return false;
}
}
function isNumber(val)
{
for(var i = 0; i < val.length; i++)
{
if(("0123456789".indexOf(val.charAt(i)) == -1))
{
return false;
}
}
return true;
}
function Hex2Ascii(input)
{
origin=16;
dest=10;
base="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
c=0; Result="";
for (t=1; t<=input.length; t++)
{
if ( (input.substring(t-1,t)>='a') && (input.substring(t-1,t)<='z') )
b=base.indexOf(input.substring(t-1,t).toUpperCase());
else b=base.indexOf(input.substring(t-1,t));
n=b*(Math.pow (origin, input.length-t));
c+=n;
}
a=100;
while (a>0 && c < Math.pow (dest, a)) { a--; }
while (a>-1)
{
e=Math.pow (dest, a);
a--;
d=((c-(c%e))/e)+1;
c=c%e; Ciffer=base.substring(d-1, d); Result = Result + Ciffer;
}
return Result;
}
function decToHex(input)
{
var num = new Number(input);
if (isNaN(num))
{
alert("wrong input");
return "";
}
var hex_value = num.toString(16);
return hex_value.toUpperCase();
}
function splitOctetString(octetString)
{
var octetArray=new Array(Math.floor(octetString.length/2))
var splitedString = sliceString(octetString,"");
for(k=0; k<splitedString.length; k++)
if(k%2!=0)
{
octetArray[(k-1)/2] = splitedString[k-1]+splitedString[k];
}
return octetArray;
}
function Octet2Str(OctetName,StringName,FormNumber)
{
var temp;
var i=0;
var str="";
Octet = document.forms[FormNumber].elements[OctetName].value;
Octet=Octet.toUpperCase();
while(i<Octet.length)
{
temp=Octet.slice(i,i+2);
temp=Hex2Ascii(temp);
temp=String.fromCharCode(temp);
str=str.concat(temp);
i+=2;
}
document.forms[FormNumber].elements[StringName].value = str ;
}
function Octet2StrReturn(Octet)
{
var temp;
var i=0;
var str="";
Octet=Octet.toUpperCase();
while(i<Octet.length)
{
temp=Octet.slice(i,i+2);
temp=Hex2Ascii(temp);
temp=String.fromCharCode(temp);
str=str.concat(temp);
i+=2;
}
return str ;
}
function Str2Hex(str)
{
origin=10;
dest=16;
input=""+str;
base="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
c=0; Result="";
for (t=1; t<=input.length; t++)
{
b=base.indexOf(input.substring(t-1,t));
n=b*(Math.pow (origin, input.length-t));
c+=n;
}
a=100;
while (c < Math.pow (dest, a)) { a--; }
while (a>-1)
{
e=Math.pow (dest, a);
a--;
d=((c-(c%e))/e)+1;
c=c%e; Ciffer=base.substring(d-1, d);
Result = Result + Ciffer;
}
return Result;
}
function Str2Octet(StringName,OctetName,FormNumber)
{
var str = document.forms[FormNumber].elements[StringName].value
var temp,i=0,result="";
var s=check(str);
if(s==0)
{
alert("Illegal Octet");
str="ffffff";
}
while(i<(str.length*1))
{
temp=(str.charCodeAt(i)*1);
temp=Str2Hex(temp);
result=result.concat(temp);
i++;
}
document.forms[FormNumber].elements[OctetName].value = result ;
}
function Str2OctetReturn(inputStr)
{
var asciiVal;
var hexaVal;
var hexStr = "";
for(i=0; i<inputStr.length; i++)
{
asciiVal = inputStr.charCodeAt(i);
if(asciiVal <= 127)
{
asciiVal = ""+asciiVal+"";
hexaVal = decToHex(asciiVal);
hexaVal = ""+hexaVal+"";
hexStr = hexStr.concat(hexaVal);
}
else
{
hexaVal = encodeURIComponent(inputStr.charAt(i));
hexaVal = hexaVal.split("%").join("");
hexStr = hexStr.concat(hexaVal);
}
}
return hexStr;
}
function addOctetSeparators(inputStr)
{
var res = "";
for(var i = 0; i < inputStr.length; i++)
{
if(i % 2 == 0)
res = res + "%";
res = res + inputStr.charAt(i);
}
return res;
}
function hexToDec(val)
{
for (i=0;i<val.length;i++)
{
if (!(((val.charCodeAt(i)>47)&&(val.charCodeAt(i)<58))||((val.charCodeAt(i)>64)&&(val.charCodeAt(i)<74))||((val.charCodeAt(i)>96)&&(val.charCodeAt(i)<103))))
{
return '';
}
}
return decfromhex(val);
}
function decfromhex(num)
{
var res = 0;
var ctr = 0;
while (num.length < 4) {num = "0" + num;}
for(var i = num.length; i > 0; i--)
{
res += (getnum(num.substring(i-1,i)) * (Math.pow(16,ctr)))
ctr++;
}
return res;
}
function getnum(letter)
{
if (letter <= "9") {return letter;}
else
{
if ((letter == "a") || (letter == "A")) { return 10 }
if ((letter == "b") || (letter == "B")) { return 11 }
if ((letter == "c") || (letter == "C")) { return 12 }
if ((letter == "d") || (letter == "D")) { return 13 }
if ((letter == "e") || (letter == "E")) { return 14 }
if ((letter == "f") || (letter == "F")) { return 15 }
return 0;
}
}
function octetToBitsAsChars(octetString)
{
var splitedOctetString = sliceString(octetString,"");
var bitsAsCharsArray=new Array((splitedOctetString.length)*4);
var bitsString="";
var bitNo=0;
for (var ind=0; ind<(splitedOctetString.length); ind++)
{
num=hexToDec(splitedOctetString[ind]);
offset=3;
for (var j=0; j<4; j++)
{
if ((num!=0)||(num/2 != 0))
{
bitsAsCharsArray[bitNo+offset]=num%2;
num=Math.floor(num/2);
}
else
{
bitsAsCharsArray[bitNo+offset]=0;
}
offset--;
}
bitNo+=4;
}
for (j=0; j<bitsAsCharsArray.length; j++)
bitsString+=bitsAsCharsArray[j];
return bitsString;
}
function bitsAsCharsToOctet(bitsString)
{
var octetString="";
var bitNo=0;
var num;
while (((bitsString.length)%4) != 0)
bitsString+="0";
for (bitNo=0; bitNo<bitsString.length;)
{
num=0;
for (var j=0; (j<4 && (bitNo+j)<bitsString.length); j++)
{
num=num*2+parseInt(bitsString.charAt(bitNo+j));
}
num+="";
bitNo+=4;
octetString+=decToHex(num);
}
if (!checkOctetString(octetString))
octetString+="0";
return octetString;
}
function signedHexToDec(pHexaNumber, nBits)
{
var max_int = Math.pow(2, nBits) - 1;
var max_signed_int = Math.pow(2, (nBits - 1)) - 1;
var num_dec = parseInt(pHexaNumber, 16);
if (num_dec > max_signed_int)
num_dec = num_dec - max_int - 1;
return num_dec;
}
function fromStringToMacAddress(stringVal)
{
var macAddressVal="";
var splitedString = sliceString(stringVal,"");
for(k=0; k<splitedString.length; k++){
if(((k+1)%2!=0)||(k==splitedString.length-1))
macAddressVal = macAddressVal+splitedString[k];
else
macAddressVal = macAddressVal+splitedString[k]+":";
}
return macAddressVal;
}
function fromMacAddressToString(macAddVal)
{
var sVal="";
var token=":";
if (macAddVal.indexOf("-")!=-1)
token="-";
var splitedMacVal = sliceString(macAddVal,token);
if(macAddVal.indexOf(token)!=-1 && splitedMacVal.length!=6){
alert("Wrong string for MAC Address !");
return 0;
}
else
{
if (macAddVal.indexOf(token)==-1)
{
splitedMacVal=splitOctetString(macAddVal);
}
for(n=0; n<splitedMacVal.length; n++)
{
if(checkhexa(splitedMacVal[n])==false)
{
alert("Wrong string for Mac Address !");
return 0;
}
}
}
for(m=0; m<splitedMacVal.length; m++)
sVal = sVal+splitedMacVal[m];
return sVal;
}
function maskIpToInt(fldName,val)
{
var isValid;
var IPtype;
var obj;
var formObj=document.forms[0].elements;
if (fldName && document.forms[0])
{
obj=formObj[fldName];
IPtype=formObj[fldName].value;
if ((_top && _top.fldToCheck=="")||((notIE)&&(document.forms[0])&&(!(formObj[_top.fldToCheck]))))
{
_top.fldToCheck=fldName;
}
}
else IPtype=val;
isValid = (checkIpAddress(IPtype,false,true))
if (isValid)
{
var ipArr=new Array(4);
ipArr=sliceString(IPtype,".");
result=0;
for (i=0;((i<4)&&(isValid));i++)
{
var curr_octet = parseInt(ipArr[i]);
if ((curr_octet==0)||(curr_octet==128)||(curr_octet==192)||(curr_octet==224)||(curr_octet==240)||
(curr_octet==248)||(curr_octet==252)||(curr_octet==254)||(curr_octet==255))
{
base=128;
while (curr_octet!=0)
{
if (curr_octet>=base)
{
curr_octet-=base;
result++
}
base=base/2;
}
}
else isValid=0;
}
}
if (!(isValid))
{
if (fldName && document.forms[0] && obj && _top)
{
_top.fldToCheck=fldName;
if (!(alertExist))
{
alertExist=true;
alert ("The Mask should be in an IP address format.");
alertExist=false;
}
if (obj.type!="hidden")
setTimeout('checkFocus()',5);
}
return 0;
}
else
{
_top.fldToCheck="";
return (result);
}
}
function maskIpToIntNG(fldName,submit)
{ var msg="The Mask should be in an IP address format.";
var result=0;var base;var curr_octet;
var cntrl=formele[fldName];
IP=cntrl.value;
if (checkIpAddress(IP,false,true))
{ var ipArr=IP.split(".");
for (i=0;(i<4);i++)
{
curr_octet = parseInt(ipArr[i]);
if ((curr_octet==0)||(curr_octet==128)||(curr_octet==192)||(curr_octet==224)||(curr_octet==240)||(curr_octet==248)||(curr_octet==252)||(curr_octet==254)||(curr_octet==255))
{
base=128;
while (curr_octet!=0)
{ if (curr_octet>=base)
{
curr_octet-=base;
result++
}
base=base/2;
}
}
else{if(submit){alert(msg);if(!cntrl.disabled)cntrl.focus();} return "";}
}
}
else {if(submit){alert(msg);if(!cntrl.disabled)cntrl.focus();} return "";} ;
return ("/"+result);
}
function maskIntToIp(fldName,val)
{
var maskASInt;
var obj;
var formObj=document.forms[0].elements;
if (fldName)
{
obj=document.forms[0].elements[fldName];
maskASInt=obj.value;
if ((_top.fldToCheck=="")||((notIE)&&(!(formObj[_top.fldToCheck]))))
{
_top.fldToCheck=fldName;
}
}
else maskASInt=val;
while ((maskASInt.charAt(0)==" ")||(maskASInt.charAt(0)=="/")||(maskASInt.charAt(0)=="\\"))
maskASInt=maskASInt.substr(1);
var ipArr=new Array(0,0,0,0);
if ((!checkUInteger32(maskASInt)) || (maskASInt>32)||(maskASInt<0))
{
if (fldName)
{
_top.fldToCheck=fldName;
if (!(alertExist))
{
alertExist=true;
alert("The mask must be integer range 0..32.");
alertExist=false;
}
if (obj.type!="hidden")
setTimeout('checkFocus()',5);
}
}
else
{
if (obj && (obj.type!="hidden"))
{
_top.fldToCheck="";
}
fullMasks=Math.floor(maskASInt/8);
for (i=0;i<4;i++)
{
if (i<fullMasks)
{
ipArr[i]=255;
maskASInt-=8;
}
else
{
base=128;
while (maskASInt>0)
{
ipArr[i]+=base;
base=base/2;
maskASInt--;
}
}
}
}
return (ipArr[0]+"."+ipArr[1]+"."+ipArr[2]+"."+ipArr[3]);
}
function maskIntToIpNG(fldName,submit)
{
var msg="The mask must be integer range 0..32.";
var result=0;var base;var curr_octet;
var cntrl=formele[fldName];
IP=cntrl.value;
var maskASInt=cntrl.value;
while ((maskASInt.charAt(0)==" ")||(maskASInt.charAt(0)=="/")||(maskASInt.charAt(0)=="\\"))maskASInt=maskASInt.substr(1);
var ipArr=new Array(0,0,0,0);
if ((!checkUInteger32(maskASInt)) || (maskASInt>32)||(maskASInt<0))
{ if(submit){alert(msg);if(!cntrl.disabled)cntrl.focus();} return "";
}
else
{
fullMasks=Math.floor(maskASInt/8);
for (i=0;i<4;i++)
{
if (i<fullMasks)
{ipArr[i]=255;
maskASInt-=8;
}
else
{
base=128;
while (maskASInt>0)
{
ipArr[i]+=base;
base=base/2;
maskASInt--;
}
}
}
}
return (ipArr[0]+"."+ipArr[1]+"."+ipArr[2]+"."+ipArr[3]);
}
function maskIntValToIp(val)
{
var maskASInt = val;
try {
while ((maskASInt.charAt(0) == " ") || (maskASInt.charAt(0) == "/") || (maskASInt.charAt(0) == "\\")) maskASInt = maskASInt.substr(1);
}
catch (maskASInt) {
try {
maskASInt + '';
while ((maskASInt.charAt(0) == " ") || (maskASInt.charAt(0) == "/") || (maskASInt.charAt(0) == "\\")) maskASInt = maskASInt.substr(1);
}
catch (e) { }
}
var ipArr=new Array(0,0,0,0);
if ((!checkUInteger32(maskASInt)) || (maskASInt>32)||(maskASInt<0))
{
return "";
}
else
{
fullMasks=Math.floor(maskASInt/8);
for (i=0;i<4;i++)
{
if (i<fullMasks)
{ipArr[i]=255;
maskASInt-=8;
}
else
{
base=128;
while (maskASInt>0)
{
ipArr[i]+=base;
base=base/2;
maskASInt--;
}
}
}
}
return (ipArr[0]+"."+ipArr[1]+"."+ipArr[2]+"."+ipArr[3]);
}
function ipSegToOctet(input)
{
base="0123456789ABCDEF"
Result="";
counter=0;
while (input>=16)
{
input-=16;
counter++;
}
Result=length2((base.charAt(counter)).toString() + (base.charAt(input)).toString());
return(Result);
}
function ipToOctet(ipType)
{
if (ipType=="")
return "";
var ipArr=new Array(4);
ipArr=sliceString(ipType,'.');
octet4="";
for (i=0;i<4;i++)
{
octet4+=ipSegToOctet(parseInt(ipArr[i]))
}
return octet4;
}
function octetToIp(octetStr)
{
var octetArr=splitOctetString(octetStr);
result=Hex2Ascii(octetArr[0]);
for (i=1;i<4;i++)
{
result+="."+Hex2Ascii(octetArr[i]);
}
return result;
}
function zoneIndexToInvertedHexa(inputStr)
{
var str = inputStr.toLowerCase();
var ifIndex;
var res = "";
if(str.indexOf("vlan") != -1)
ifIndex = parseInt(str.substr(4),10) + 99999;
else if(str.indexOf("po") != -1)
ifIndex = parseInt(str.substr(2),10) + 999;
else if(str.indexOf("tun") != -1)
ifIndex = parseInt(_top.tunnelFirstIndex,10);
else
ifIndex = getPortNumberFromName(str);
var ifHex = decToHex(ifIndex).toLowerCase();
if(ifHex.length % 2 == 1)
ifHex = "0" + ifHex;
res = ifHex;
while(res.length < 8)
res = "0" + res;
return res;
}
function invertedHexaToZoneIndex(input)
{
var ifIndex = "";
ifIndex = input;
while(ifIndex.charAt(0)=="0")
ifIndex = ifIndex.substr(1);
ifIndex = hexToDec(ifIndex);
if(ifIndex == _top.tunnelFirstIndex)
return "tunnel1";
else if(ifIndex >= 100000)
return "vlan" + (ifIndex - 99999);
else if(ifIndex >= 1000)
return "po" + (ifIndex - 999);
else
return getPortNameFromNumber(ifIndex);
}
function fromMulticastMacToIP(macAddr)
{
var ipStr="224-239.";
var byte3OfMacOption1;
if (macAddr.slice(6,7)=="0") byte3OfMacOption1=(Hex2Ascii(macAddr.slice(7,8))&127).toString();
else byte3OfMacOption1=(Hex2Ascii(macAddr.slice(6,8))&127).toString();
byte3OfMacOption2=parseInt(byte3OfMacOption1)+128;
ipStr+=byte3OfMacOption2+"|"+byte3OfMacOption1+".";
if (macAddr.slice(8,9)=="0") ipStr+=Hex2Ascii(macAddr.slice(9,10));
else ipStr+=Hex2Ascii(macAddr.slice(8,10));
ipStr+=".";
if (macAddr.slice(10,11)=="0") ipStr+=Hex2Ascii(macAddr.slice(11,12));
else ipStr+=Hex2Ascii(macAddr.slice(10,12));
return ipStr;
}
function fromIPToMulticastMac(ipAddr,isEdit)
{
var macStr="01005e";
ipArr=sliceString(ipAddr,".");
var isCont=true;
if (isEdit==true)
{
ipArr[1]=(sliceString(ipArr[1],"|"))[1];
}
else
{
if ((parseInt(ipArr[0])<224) || (parseInt(ipArr[0])>239))
{
isCont=false;
alert("Multicast Mac address must be between 224.0.0.0-239.255.255.255");
}
}
if (isCont)
{
ipArr[1]=(ipArr[1]&127).toString();
for (var i=1; i<4; i++)
{
ipArr[i]=Str2Hex(ipArr[i]);
if (ipArr[i]==0 || ipArr[i]=="0")
ipArr[i]="00";
if (ipArr[i].length==1)
ipArr[i]="0"+ipArr[i];
macStr+=ipArr[i];
}
return macStr;
}
else return -1;
}
function strToIPv6(str)
{
var res="";
var imp="";
for(var i=0;i<str.length;i=i+4)
imp=imp+str.substring(i,i+4)+":";
imp=imp.substring(0,imp.length-1);
var res_arr=imp.split(":");
var zero_flag=false;
var num_flag=false;
for(var i=0;i<8;i++)
{
if(res_arr[i]=="0000")
{
if(!zero_flag && i == 0)
{
res=res+"::"
zero_flag=true;
}
if(!zero_flag) res=res+":";
zero_flag=true;
if(num_flag) res=res+res_arr[i]+":";
}
else
{
while(res_arr[i].charAt(0)=="0")
res_arr[i] = res_arr[i].substr(1);
res=res+res_arr[i]+":";
if(zero_flag) num_flag=true;
}
}
if(res.charAt(res.length-2)!=":")
res=res.substring(0,res.length-1);
if(res.length==0)
return imp;
return res;
}
var TICKS_PER_SECOND = 100;
function ticksToSecondsField(tickField, secField)
{
var ticks = document.forms[0].elements[tickField].value;
document.forms[0].elements[secField].value = ticks / TICKS_PER_SECOND;
}
function secondsToTicksField(secField, tickField)
{
var secs = document.forms[0].elements[secField].value;
document.forms[0].elements[tickField].value = secs * TICKS_PER_SECOND;
}
function checkhexa(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
for(i=0;i<stringTocheck.length;i++)
{
if(!((stringTocheck.charCodeAt(i)>=97&& stringTocheck.charCodeAt(i)<=102)||(stringTocheck.charCodeAt(i)>=65 && stringTocheck.charCodeAt(i)<=70)||(stringTocheck.charCodeAt(i)>=48 && stringTocheck.charCodeAt(i)<=57)))
{
return false;
}
}
return true;
}
function check(str)
{
var tmp;
var result=1;
str=removeSpacesFromHeadAndTail(str);
for(i=0;i<str.length;i++)
{
tmp=str.charCodeAt(i);
if(!((tmp==95)||(tmp>47&&tmp<58)||(tmp>64&&tmp<91)||(tmp>96&&tmp<123)))
result=0;
}
return (result);
}
function checknumber(stringTocheck)
{
if(!isNaN(parseFloat(stringTocheck)))
return true;
else
return false;
}
function checkInteger(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^\d+$)|(^\+\d+$)|(^\-\d+$)/
return (anum.test(stringTocheck));
}
function checkUInteger32(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^\d+$)/
return (anum.test(stringTocheck));
}
function checkIpAddress(stringTocheck,isMulticast)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var ipType=/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/
var multicastIpType=/(^\d{1,3}-\d{1,3}\.\d{1,3}\|\d{1,3}\.\d{1,3}\.\d{1,3}$)/
if (ipType.test(stringTocheck)||(isMulticast!="" && isMulticast!=null && isMulticast==true && multicastIpType.test(stringTocheck)))
{
var IPArr=sliceString(stringTocheck,".");
if (4==IPArr.length)
{
for (var i=0; i<IPArr.length; i++)
{
if ((i==0 || i==1) && isMulticast!="" && isMulticast!=null && isMulticast==true)
{
var tmp;
if (i==0)
tmp=sliceString(IPArr[i],"-");
else if (i==1)
tmp=sliceString(IPArr[i],"|");
if (2==tmp.length)
{
for (var j=0; j<tmp.length; j++)
{
tmp[j]=parseInt(tmp[j]);
if ( (tmp[j]<0) || (tmp[j]>255) )
return false;
}
}
else return false;
}
else
{
var tmp=parseInt(IPArr[i]);
if ( (tmp<0) || (tmp>255) )
return false;
}
}
}
else return false;
}
else return false;
return true;
}
function checkOID(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^\d+$)/;
var OIDArr=sliceString(stringTocheck,".");
for (var i=0; i<OIDArr.length; i++)
{
if (!anum.test(OIDArr[i]))
{
return false;
}
}
return true;
}
function checkPortList(stringTocheck)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var anum=/(^[0-1]+$)/;
if (!anum.test(stringTocheck))
{
return false;
}
return true;
}
function checkOctetString(stringTocheck,typeParam)
{
stringTocheck=removeSpacesFromHeadAndTail(stringTocheck);
var tokensArr=[":","-"];
var token="";
var octetString="";
var octetArr;
var legal;
if (typeParam!="MAC" && isNaN(typeParam))
typeParam="";
for (i=0; i<tokensArr.length; i++)
if ((stringTocheck).indexOf(tokensArr[i])!=-1)
{
token=tokensArr[i];
break;
}
if (!(typeParam=="MAC" && token==""))
{
octetArr=sliceString(stringTocheck,token);
legal=true;
if (token!="")
{
for (i=0;i<octetArr.length;i++)
{
if (octetArr[i].length!=2)
{
legal=false;
break;
}
}
}
if (legal)
{
for (i=0;i<octetArr.length;i++) octetString+=octetArr[i];
var x=0;
for (i=0;i<octetString.length;i++)
{
x=octetString.charCodeAt(i);
if ( (x<48) || ((x>57)&&(x<65)) || ((x>70)&&(x<97)) || (x>102))
{
legal=false;
break;
}
}
}
if (((octetString.length)%2!=0)||(!legal))
{
return false;
}
return true;
}
return false;
}
function checkOctetStringLength(octetString, minOctet, maxOctet)
{
var minLngth, maxLnght;
if(octetString.indexOf(":")!=-1 || octetString.indexOf("-")!=-1)
{
minLngth = (minOctet * 2) + (minOctet - 1);
maxLnght = (maxOctet * 2) + (maxOctet - 1);
}
else
{
minLngth = minOctet * 2;
maxLnght = maxOctet * 2;
}
if(octetString.length < minLngth || octetString.length > maxLnght)
return false;
return true;
}
function checkValidationOctetString(cntrl, minOctet, maxOctet, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if (cntrl.disabled)
return true;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return true;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else if(!checkOctetString(curVal))
{
if(minOctet!=maxOctet)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12070", [[TKN_NUMBER, minOctet.toString()],[TKN_NUMBER, maxOctet.toString()]]);
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12072", [[TKN_NUMBER, maxOctet.toString()]]);
return false;
}
else if(!checkOctetStringLength(curVal, minOctet, maxOctet))
{
if(minOctet!=maxOctet)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12070", [[TKN_NUMBER, minOctet.toString()],[TKN_NUMBER, maxOctet.toString()]]);
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12072", [[TKN_NUMBER, maxOctet.toString()]]);
return false;
}
return true;
}
function checkType(fldName,type,isShowMsg,fldHeader,typeParam)
{
var errMsg="";
var type;
var formObj=document.forms[0].elements;
var obj=formObj[fldName];
var verifyType;
var val=removeSpacesFromHeadAndTail(obj.value);
obj.value=val;
if (!isShowMsg)
{
if (isNaN(isShowMsg))
isShowMsg=true;
else
{
if (isShowMsg.length==0)
isShowMsg=true;
else isShowMsg=false;
}
}
if (typeParam!="MAC" && isNaN(typeParam))
typeParam="";
type=type.toUpperCase();
switch(type)
{
case "INT": type="0";
break;
case "INTEGER": type="0";
break;
case "UINT32": type="12";
break;
case "OID": type="3";
break;
case "IP": type="5";
break;
case "OCTET":
case "MAC":
if (type=="MAC")
{
typeParam="MAC"
}
type="2";
break;
case "PORTLIST": type="101";
break;
case "STRING": type="100" ;
break;
default: break;
}
switch (type)
{
case "0":
verifyType=checkInteger(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an Integer.";
else errMsg=val+" is not an Integer.";
}
break;
case "2":
verifyType=checkOctetString(val,typeParam);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
{
if (typeParam=="MAC")
errMsg=errMsg=val+" is not a MAC address. "+fldHeader+" must be 6 pairs of Hexa digits(0..9,a..f) separated by ':'.";
else errMsg=errMsg=val+" is not an octet string. "+fldHeader+" must be an even number of pairs of Hexa digits(0..9,a..f).";
}
else
{
if (typeParam=="MAC")
errMsg=val+" is not a MAC address. It must be 6 pairs of Hexa digits(0..9,a..f) separated by ':'.";
else errMsg=val+" is not an octet string. It must be an even number of pairs of Hexa digits(0..9,a..f).";
}
}
break;
case "3":
verifyType=checkOID(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an OID.";
else errMsg=val+" is not an OID.";
}
break;
case "5":
verifyType=checkIpAddress(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an IP Address.";
else errMsg=val+" is not an IP Address.";
}
break;
case "MULTICASTIP":
if ((val.indexOf("-")!=-1) && (val.indexOf("|")!=-1))
verifyType=checkIpAddress(val,true);
else verifyType=checkIpAddress(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be a Multicast IP Address.";
else errMsg=val+" is not a Multicast IP Address.";
}
else
{
var ipArr=sliceString(val,".");
if ((parseInt(ipArr[0])<224) || (parseInt(ipArr[0])>239))
{
errMsg="IP Multicast address must be between 224.0.0.0-239.255.255.255";
}
}
break;
case "12":
case "7":
verifyType=checkUInteger32(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be an Unsigned Integer.";
else errMsg=val+" is not an Unsigned Integer.";
}
break;
case "100":
if (val=="" || val==" " || val==null)
{
if (fldHeader)
errMsg=fldHeader+" must be a String.";
else errMsg="You must enter a String.";
}
break;
case "101":
verifyType=checkPortList(val);
if (!verifyType)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
if (fldHeader)
errMsg=val+" is illegal. "+fldHeader+" must be a Port List.";
else errMsg=val+" is not a Port List.";
}
break;
default: break;
}
if (false==isShowMsg && errMsg!="")
return "type";
return errMsg;
}
function checkOctetSize(fldName,isShowMsg,fldHeader,minRange, maxRange,typeParam)
{
var errMsg="";
var minVal=null;
var maxVal=null;
var formObj=document.forms[0].elements;
var obj=formObj[fldName];
var minMaxStr;
var minMaxlimit;
var isConCheck=true;
var tokensArr=[":","-",""];
var token="";
var valLen=0;
if (!isShowMsg)
{
if (isNaN(isShowMsg))
isShowMsg=true;
else
{
if (isShowMsg.length==0)
isShowMsg=true;
else isShowMsg=false;
}
}
var val=removeSpacesFromHeadAndTail(obj.value);
var vtFldArr=sliceString(fldName,"$");
if ((minRange && minRange!="") || (maxRange && maxRange!=""))
isConCheck=true;
else if (vtFldArr)
{
if (formObj[vtFldArr[0]+"$VT"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$VT"].value;
}
else if (formObj[vtFldArr[0]+"$bnd"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$bnd"].value;
}
}
else isConCheck=false;
if (isConCheck)
{
if ((minRange && minRange!="") || (maxRange && maxRange!=""))
{
errMsg=validateOctetSize(val,minRange,maxRange,fldHeader,typeParam);
}
else
{
vtFldValArr=sliceString(vtFldVal,";");
if (vtFldValArr)
{
for (var i=0; i<vtFldValArr.length; i++)
{
minMaxStr=null;
minMaxlimit=null;
if (vtFldValArr[i].indexOf("Range")!=-1)
{
var tmpValArr=sliceString(vtFldValArr[i],"[");
if (tmpValArr && tmpValArr[1])
{
var tmp=tmpValArr[1];
tmpValArr=sliceString(tmp,"]");
if (tmpValArr)
{
tmp=tmpValArr[0];
tmpValArr=sliceString(tmp,",");
if (tmpValArr && 2==tmpValArr.length)
{
minVal=parseInt(tmpValArr[0]);
maxVal=parseInt(tmpValArr[1]);
errMsg=validateOctetSize(val,minVal,maxVal,fldHeader,typeParam)
}
}
}
}
}
}
}
}
if (false==isShowMsg && errMsg!="")
return trans("OctetRange");
return errMsg;
}
function validateOctetSize(val,minVal,maxVal,fldHeader,typeParam)
{
var minMaxStr;
var minMaxlimit;
var tokensArr=[":","-",""];
var token="";
var valLen=0;
var errMsg="";
for (var j=0; j<tokensArr.length; j++)
{
if ((val).indexOf(tokensArr[j])!=-1)
{
token=tokensArr[j];
break;
}
}
if (typeParam!="MAC" && isNaN(typeParam))
typeParam="";
if (!(typeParam=="MAC" && token==tokensArr[2]))
{
var octetArr=sliceString(val,token);
if (token==tokensArr[2])
valLen=(octetArr.length)/2;
else valLen=octetArr.length;
if ( ( minVal !=null) && (valLen < minVal) )
{
minMaxStr=trans("minimum") ;
minMaxlimit=minVal;
}
if ( ( maxVal !=null) && (valLen > maxVal) )
{
minMaxStr=trans("maximum") ;
minMaxlimit=maxVal;
}
if (minMaxlimit!=null)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val=trans("blank");
if (fldHeader)
errMsg=val+" is out of range. The "+minMaxStr+" length for "+fldHeader+" is "+minMaxlimit+" octets.\n";
else errMsg=val+" is out of range. The "+minMaxStr+" length is "+minMaxlimit+" octets.\n";
}
return errMsg;
}
}
function validateOctetValRange(fldName,valMinRange,valMaxRange,fldHeader)
{
var formObj=document.forms[0].elements;
var val=removeSpacesFromHeadAndTail(formObj[fldName].value);
var minMaxStr;
var minMaxlimit;
var errMsg="";
if ( valMinRange!=null)
{
if (hexToDec(val)<hexToDec(valMinRange))
{
minMaxStr=trans("minimum") ;
minMaxlimit=valMinRange;
}
}
if ( valMaxRange!=null )
{
if (hexToDec(val)>hexToDec(valMaxRange))
{
minMaxStr=trans("maximum") ;
minMaxlimit=valMaxRange;
}
}
if (minMaxlimit!=null)
{
if ((val!=0)&&(val=="" || val==" " || val==null)) val=trans("blank");
if (fldHeader)
errMsg=val+" is out of range. The "+minMaxStr+" value for "+fldHeader+" is "+minMaxlimit+".\n";
else errMsg=val+" is out of range. The "+minMaxStr+" value is "+minMaxlimit+".\n";
}
return errMsg;
}
function getDefaultValue(fldName)
{
var formele=document.forms[0].elements;
var typeIndex=null;
var defValIndex=null;
var defVal=null;
var type=null;
var retVal="";
var isConCheck=true;
if (formele[fldName])
{
var vtFldArr=sliceString(fldName,"$");
if ( (vtFldArr) && (formele[vtFldArr[0]+"$VT"]!=null) )
{
vtFldVal=formele[vtFldArr[0]+"$VT"].value;
}
else isConCheck=false;
if (isConCheck)
{
vtFldValArr=sliceString(vtFldVal,";");
if (vtFldValArr)
{
for (i=0; i<vtFldValArr.length; i++)
{
if (vtFldValArr[i].indexOf("Type")!=-1)
typeIndex=i;
if (vtFldValArr[i].indexOf("Default value")!=-1)
{
defValIndex=i;
break;
}
}
if ( (defValIndex!=null) && (vtFldValArr[defValIndex].indexOf("Default value")!=-1) )
{
var tmpValArr=sliceString(vtFldValArr[defValIndex],"=");
if (tmpValArr && 2==tmpValArr.length)
{
defVal=tmpValArr[1];
if (defVal != null)
return defVal;
}
}
if ( (typeIndex!=null) && (vtFldValArr[typeIndex].indexOf("Type")!=-1) )
{
var tmpValArr=sliceString(vtFldValArr[typeIndex],"=");
if (tmpValArr && 2==tmpValArr.length)
{
type=tmpValArr[1];
if (type != null)
{
switch(type)
{
case "0":
case "6":
case "7":
case "8":
case "11":
case "12":
retVal=0;
break;
case "1":
case "2":
case "3":
retVal="";
break;
case "5":
retVal="0.0.0.0";
break;
default:
retVal="";
break;
}
return retVal;
}
}
}
}
}
}
return retVal;
}
function returnIntRange(fldName,isDisplayForm)
{
var minVal=null;
var maxVal=null;
var formObj=document.forms[0].elements;
var rangeStr="";
var rangeNum=0;
var isConCheck=true;
var vtFldArr=sliceString(fldName,"$");
if (vtFldArr)
{
if (formObj[vtFldArr[0]+"$VT"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$VT"].value;
}
else if (formObj[vtFldArr[0]+"$bnd"]!=null)
{
vtFldVal=formObj[vtFldArr[0]+"$bnd"].value;
}
}
else isConCheck=false;
if (isConCheck)
{
vtFldValArr=sliceString(vtFldVal,";");
if (vtFldValArr)
{
for (var i=0; i<vtFldValArr.length; i++)
{
if (vtFldValArr[i].indexOf("Range")!=-1)
{
var tmpValArr=sliceString(vtFldValArr[i],"[");
if (tmpValArr && tmpValArr[1])
{
var tmp=tmpValArr[1];
tmpValArr=sliceString(tmp,"]");
if (tmpValArr)
{
tmp=tmpValArr[0];
tmpValArr=sliceString(tmp,",");
if (tmpValArr && 2==tmpValArr.length)
{
minVal=parseInt(tmpValArr[0]);
maxVal=parseInt(tmpValArr[1]);
if ( minVal !=null || maxVal !=null)
{
rangeNum++;
if ( (minVal !=null ) )
{
if (false==isDisplayForm && isDisplayForm!="" && isDisplayForm!=null)
rangeStr+=minVal+"-";
else rangeStr+="("+minVal+"-";
}
if ( ( maxVal !=null) )
{
if (false==isDisplayForm && isDisplayForm!="" && isDisplayForm!=null)
rangeStr+=maxVal+",";
else rangeStr+=maxVal+") ";
}
}
}
}
}
}
}
}
}
return rangeStr;
}
function length2(theString)
{
while (theString.length<2)
theString="0"+theString;
return theString;
}
function checkIPv6General(cntrl,withMsg,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)return true;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val);
val = changeIPv4ToHex(val);
if(val.trim()=="" && blankLegal)
return true;
else if(val.trim()=="")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
}
return false;
}
for(var i=0;i<val.length;i++)
{
var x=val.charCodeAt(i);
if ( (x < 48) || ((x > 58) && (x < 65)) || ((x > 70) && (x < 97)) || (x > 102))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
}
var consecColonsChar=0;
for(i=0;i<val.length-1;i++)
{
if(val.charAt(i)==":")
{
if(val.charAt(i+1)==":")
consecColonsChar++;
}
}
if(consecColonsChar>1)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
val = addZeroGroups(val);
var valArr = val.split(":");
if(valArr.length!=8)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12024");
}
return false;
}
for(i=0;i<valArr.length;i++)
{
if(valArr[i].length==0)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12025");
}
return false;
}
if(valArr[i].length>4)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
}
return true;
}
function checkIPv6Local(cntrl,withMsg,blankLegal,tokenObj,removeInterfaceFromIPAddr)
{
AlterContextMessage(cntrl);
if(IsUndefOrNull(removeInterfaceFromIPAddr))
removeInterfaceFromIPAddr = false;
val=getValueFromControl(cntrl);
if (removeInterfaceFromIPAddr&&val.indexOf("%")!=-1)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12022");
}
return false;
}
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
if(val.trim()=="")
return true;
val=removeInterfaceFromIPAddress(val);
val = changeIPv4ToHex(val);
val = addZeroGroups(val);
var valArr=val.split(":");
if(valArr[0].toLowerCase()!="fe80")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12026");
}
return false;
}
if(valArr[1]!=0 || valArr[2]!=0 || valArr[3]!=0)
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12027");
}
return false;
}
return true;
}
function checkIPv6Global(cntrl,withMsg,isAnyDisallowed,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)
return true;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val);
if(val.trim()=="" && blankLegal)
return true;
else if(val.trim()=="")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
}
return false;
}
if(isAnyDisallowed)
{
if(isIPv6AddrZeros(val))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12028");
}
return false;
}
}
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
if(checkIPv6Local(cntrl,false,blankLegal,tokenObj))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12029");
}
return false;
}
if(checkIPv6Multicast(cntrl,false))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12030");
}
return false;
}
return true;
}
function checkIPv6Unicast(cntrl,withMsg,isAnyDisallowed,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)
return true;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val);
if(val.trim()=="" && blankLegal)
return true;
else if(val.trim()=="")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
}
return false;
}
if(isAnyDisallowed)
{
if(isIPv6AddrZeros(val))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12028");
}
return false;
}
}
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
if(checkIPv6Multicast(cntrl,false))
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12030");
}
return false;
}
return true;
}
function checkIPv6Multicast(cntrl,withMsg,blankLegal,tokenObj)
{
AlterContextMessage(cntrl);
if(cntrl.disabled)
return true;
if(!checkIPv6General(cntrl,withMsg,blankLegal,tokenObj))
return false;
var val=getValueFromControl(cntrl);
val=removeInterfaceFromIPAddress(val)
if(val.trim() == "")
return true;
var valArr=val.split(":");
if(valArr[0].toLowerCase()<"ff00")
{
if(withMsg)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12031");
}
return false;
}
return true;
}
function checkIP(stringToCheck)
{
if(stringToCheck=="") return true;
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(stringToCheck))return false;
stringToCheck=stringToCheck.split(".");
for(var i=0;i<4;i++)
if(stringToCheck[i]>255 || stringToCheck[i]<0 || (stringToCheck[i].length>1 && stringToCheck[i].charAt(0)=="0") )return false;
return true;
}
function changeIPv4ToHex(val)
{
var i=val.lastIndexOf(":")+1;
if(checkIP(val.substring(i)) && val.substring(i)!="")
val = val.substring(0,i) + "0:0";
return val;
}
function addZeroGroups(val)
{
var i=val.indexOf("::"),j=0;
if(i==-1) return val;
var colonsNum=0;
for(;j<val.length;j++)
{
if(val.charAt(j)==":")
colonsNum++;
}
if(colonsNum>=9) return val;
if(colonsNum==8 && i!=val.length-2 && i!=0) return val;
var tempString="";
while(8-colonsNum++!=0)
tempString+=":0"
val = val.substring(0,i) + tempString + val.substring(i+1);
if(i==0)
val = "0:" + val.substring(1);
if(i==j-2)
val = val + "0";
return val;
}
function addZeroGroup(str)
{
var strSplit = "";
if (str.substr(0,2) == "::" || str.substr(str.length-2,2) == "::")
strSplit = str.replace("::",":");
else
strSplit = str;
val_arr=strSplit.split(":");
if(val_arr.length==8)
{
for(var i=0;i<8;i++)
if(val_arr[i].length<4)
for(;val_arr[i].length<4;val_arr[i]="0"+val_arr[i]);
}
if(str.indexOf(".")!=-1)
{
ipv4=val_arr[val_arr.length-1].split(".");
val_arr[val_arr.length-1]=decToHexIn2Digits(ipv4[0])+decToHexIn2Digits(ipv4[1]);
val_arr.splice(val_arr.length,0,decToHexIn2Digits(ipv4[2])+decToHexIn2Digits(ipv4[3]));
}
if(str.indexOf("::")!=-1)
{
for(var i=0;val_arr.length<8;i++)
if(val_arr[i].length==0)
{
for(var j=i+1;val_arr.length<8;j++)
val_arr.splice(j,0,"0000");
}
}
for(var i=0;i<8;i++)
if(val_arr[i].length<4)
for(;val_arr[i].length<4;val_arr[i]="0"+val_arr[i]);
str=val_arr.join(":");
return str;
}
function decToHexIn2Digits(input)
{
var result = decToHex(input)
while(result.length <= 1)
result = '0' + result;
return result;
}
function isIPv6AddrZeros(str)
{
for(var i=0;i<str.length;i++)
{
if(str.charAt(i)!="0" && str.charAt(i)!=":")
return false;
}
return true;
}
function checkValidationSpecificValues(cntrl, legalVals, tokenObj, messageDictId)
{
AlterContextMessage(cntrl, false, "");
if(cntrl.disabled)return true;
legVal = false;
var val = cntrl.value;
for (var i=0;i < legalVals.length;i++)
{
if (val == legalVals[i])
{
legVal = true;
break;
}
}
if(val == "" && !legVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if (legVal == false)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, messageDictId);
return false;
}
return true;
}
function addSelectionList(formObj,selectName,optionField,whatToAdd,selectedVal)
{
var optionNo=1;
formObj=document.forms[0];
formObj.elements[selectName].remove(0);
formObj.elements[selectName][0]=null;
while (formObj.elements[optionField+"?"+optionNo]!=null)
{
if ((formObj.elements[optionField+"?"+optionNo].value!="")&&
(formObj.elements[optionField+"?"+optionNo].value!=_top.queryNA)){
text=formObj.elements[optionField+"?"+optionNo].value;
newOption = new Option(text);
formObj.elements[selectName].options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.text) == selectedVal )
{
newOption.selected = true ;
}
}
optionNo++;
}
}
if (whatToAdd!="")
{
newOption = new Option(trans("Add a new ")+whatToAdd);
formObj.elements[selectName].options[optionNo-1]=newOption;
}
}
function addRangeSelectionList(formObj,selectName,BeginOption,EndOption,whatToAdd,selectedVal)
{
formObj=document.forms[0];
var optionNo=0;
formObj.elements[selectName].remove(0);
formObj.elements[selectName][0]=null;
while ((BeginOption+optionNo)<(EndOption+1))
{
text=BeginOption+optionNo;
newOption = new Option(text);
formObj.elements[selectName].options[optionNo]=newOption;
if(opener){
firstIndex = parseInt(_top.trunkFirstIndex);
}
else{
firstIndex = parseInt(_top.trunkFirstIndex);
}
if(selectName=="trunk"){
formObj.elements[selectName].options[optionNo].value=firstIndex+parseInt(text)-1;
}
else
formObj.elements[selectName].options[optionNo].value=(optionNo+1);
if (selectedVal != "")
{
if ( newOption.text == selectedVal )
{
newOption.selected = true ;
}
}
optionNo++;
}
if (whatToAdd!="")
{
newOption = new Option(trans("Add a new ")+whatToAdd);
formObj.elements[selectName].options[optionNo-1]=newOption;
}
}
function addSelectionListFromArray(formObj,selectName,optionsArr,whatToAdd,selectedValFld)
{
var selectedVal="";
formObj=document.forms[0];
if (selectedValFld!="")
selectedVal=formObj.elements[selectedValFld].value;
formObj.elements[selectName].remove(0);
formObj.elements[selectName][0]=null;
for (var i=0; i<optionsArr.length; i++)
{
newOption = new Option(optionsArr[i]);
newOption.id = "opt"+getBaseName(selectName) + i;
formObj.elements[selectName].options[formObj.elements[selectName].options.length]=newOption;
if (selectedVal != "")
{
if ( newOption.text == selectedVal )
{
newOption.selected = true ;
}
}
}
if (whatToAdd!="")
{
newOption = new Option(trans("Add a new ")+whatToAdd);
formObj.elements[selectName].options[(formObj.elements[selectName].options.length)]=newOption;
}
if (selectedVal == "")
{
formObj.elements[selectName].selectedIndex=-1;
}
}
function filterSelectObject(fieldName)
{
selObject=document.forms[0].elements[fieldName];
for (i=selObject.options.length-1;i>=0;i--)
{
exist=false;
for (j=i-1;j>=0;j--)
if (selObject.options[i].text==selObject.options[j].text)
{
exist=true;
break;
}
if (exist)
selObject.options[i]=null;
}
}
function selectOptionByText(selectObj,selectedText)
{
if(!selectObj)
{
return;
}
for(var i=0; i<selectObj.options.length; i++)
{
if(selectObj.options[i].text == selectedText)
{
selectObj.options[i].selected=true;
break;
}
}
}
function selectOptionByValue(selectObj,selectedValue)
{
for(var i=0; i<selectObj.options.length; i++)
{
if(selectObj.options[i].value==selectedValue)
{
selectObj.options[i].selected = true;
return true;
}
}
return false;
}
function changeTrunkListText(fieldName)
{
var trunkSelObject=document.forms[0].elements[fieldName];
var realIndex, text;
var firstTrunkVal = parseInt(trunkSelObject.options[0].text);
for(i=0;trunkSelObject.options[i]!=null;i++){
realIndex = trunkSelObject.options[i].text;
text = parseInt(trunkSelObject.options[i].text)-firstTrunkVal+1
var newOption = new Option(text,realIndex);
trunkSelObject.options[i]=newOption;
}
trunkSelObject.selectedIndex=0;
}
function addSelectListFromTrunkArray(selectName,TrunkArr,selectedValFld,isGW,tokenObj,isContainLag)
{
var selectedVal="";
formObj=document.forms[0];
var slct,slctVF;
if(formObj)
{
slct=formObj.elements[selectName];
slctVF=formObj.elements[selectedValFld];
}
else
{
slct=document.getElementById(selectName);
slctVF=document.getElementById(selectedValFld);
}
if (selectedValFld!="")
selectedVal=slctVF.value;
for (var x=0; x<slct.length; x++)
{
slct.remove(x);
slct[x]=null;
}
var trunkFirstIndex = _top.trunkFirstIndex;
var NumberOfTrunks = _top.NumberOfTrunks;
for (var i=trunkFirstIndex; i<(trunkFirstIndex + NumberOfTrunks); i++)
{
if (TrunkArr[i])
{
newOption=new Option();
newOption.id="optLAG_" + i;
var lag = "";
if(isContainLag)
lag = "LAG ";
newOption.text = lag + (i-trunkFirstIndex+1).toString();
if (isGW)
newOption.value = tokenObj.getText("10015") + (i-trunkFirstIndex+1).toString();
else
newOption.value = i;
slct.options[slct.options.length]= newOption;
}
if (selectedVal != "")
{
if ( newOption.text == selectedVal )
{newOption.selected = true ;}
}
}
if ((slct.options.length == 0))
{slct.selectedIndex=-1;}
else if (selectedVal == "")
{slct.selectedIndex=0;}
}
function copySelect(srcSelect, dstSelect, append)
{
if (IsUndefOrNull(append))
append = false;
if (!append)
dstSelect.options.length = 0;
for(var i = 0; i < srcSelect.options.length; i++)
{
dstSelect.options[dstSelect.options.length] = new Option(srcSelect.options[i].text, srcSelect.options[i].value);
}
dstSelect.selectedIndex = srcSelect.selectedIndex;
dstSelect.disabled = srcSelect.disabled;
}
function selectQuery1Index(queryVTTbl)
{
if (window.event && window.event.srcElement && window.event.srcElement.name)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
}
var formObj=document.forms[0].elements;
var objSelect=null;
var queryString="";
var queryTblStr="";
var i=22;
var j=0;
objSelect=formObj[fieldName];
while ((j<fieldName.length)&&(fieldName.charAt(j)!="$"))
j++;
if (queryVTTbl)
queryTblStr="["+queryVTTbl+"]";
queryString="?"+queryTblStr+"Query:"+fieldName.substr(0,j)+'='+objSelect.options[objSelect.selectedIndex].text;
indexOfEndPageName=((document.location.href).indexOf(".htm"))+3;
queryString=(document.location.href).slice(0,(indexOfEndPageName+1))+queryString;
document.location.href=queryString;
}
function indexSign(selectObject){
var i=0;
formele=document.forms[0].elements;
selectName=formele[selectObject];
queryObject=getBaseName(selectObject)+"$query"
while (selectName.options[i]!=null)
{
if ((selectName.options[i].text == formele[queryObject].value)||
(notIE && selectName.options[i].text=="\n" && formele[queryObject].value==""))
{
selectName.selectedIndex=i;
break;
}
i++;
}
if(formele[queryObject].value==_top.queryNA)
selectName.selectedIndex=-1;
}
function selectPort1Index(queryVTTbl)
{
if (window.event && window.event.srcElement && window.event.srcElement.name)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
}
var formObj=document.forms[0].elements;
var objSelect=null;
var queryString="";
var queryTblStr="";
var i=28;
var j=0;
objSelect=formObj[fieldName];
while ((j<fieldName.length)&&(fieldName.charAt(j)!="$"))
j++;
if (queryVTTbl)
queryTblStr="["+queryVTTbl+"]";
queryString="?"+queryTblStr+"Query:"+fieldName.substr(0,j)+'='+objSelect.options[objSelect.selectedIndex].value;
indexOfEndPageName=((document.location.href).indexOf(".htm"))+3;
queryString=(document.location.href).slice(0,(indexOfEndPageName+1))+queryString;
document.location.href=queryString;
}
function portSign(selectObject, mibObject)
{
var i=0;
var tempObject;
formele=document.forms[0].elements;
if (mibObject != null)
{
tempObject = mibObject;
}
else
{
tempObject = selectObject;
}
selectName=formele[selectObject];
queryObject=getBaseName(tempObject)+"$query";
while (selectName.options[i]!=null)
{
if (selectName.options[i].value == parseInt(formele[queryObject].value))
{
selectName.selectedIndex=i;
break;
}
i++;
}
if(formele[queryObject].value==_top.queryNA)
selectName.selectedIndex=-1;
}
function clickRadio()
{
var fieldName=null;
var formObj=document.forms[0].elements;
var objRadio;
var i=0;
var callingEvent;
var fieldName;
var callingEventElement;
if (window.event)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
callingEventElement=callingEvent.srcElement;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
callingEventElement=callingEvent.target;
}
if (callingEventElement && callingEventElement.name)
{
objRadio=formObj[fieldName];
if(callingEventElement.value==1)
{
formObj["port"].disabled=false
}
else
{
formObj["port"].disabled=true;
formObj["port"].selectedIndex=0;
}
if(callingEventElement.value==2)
{
formObj["trunk"].disabled=false;
}
else
{
formObj["trunk"].disabled=true;
formObj["trunk"].selectedIndex=0;
}
if (objRadio.length==3)
{
if(callingEventElement.value==3)
{
formObj["dot1qVlanIndex$select"].disabled=false;
}
else
{
formObj["dot1qVlanIndex$select"].disabled=true;
formObj["dot1qVlanIndex$select"].selectedIndex=0;
}
}
}
}
function clickStackRadio()
{
var fieldName=null;
var formObj=document.forms[0].elements;
var objRadio;
var i=0;
var callingEvent;
var fieldName;
var callingEventElement;
if (window.event)
{
callingEvent=window.event;
fieldName=callingEvent.srcElement.name;
callingEventElement=callingEvent.srcElement;
}
else if (!window.event)
{
callingEvent=arguments.callee.caller.arguments[0];
fieldName=callingEvent.target.name ;
callingEventElement=callingEvent.target;
}
if (callingEventElement && callingEventElement.name)
{
objRadio=formObj[fieldName];
if(callingEventElement.value==1)
{
formObj["port"].disabled=false;
if (formObj["rlPhdModuleIndex$select"])
formObj["rlPhdModuleIndex$select"].disabled=false;
}
else
{
formObj["port"].disabled=true;
formObj["port"].selectedIndex=0;
if (formObj["rlPhdModuleIndex$select"])
{
formObj["rlPhdModuleIndex$select"].disabled=true;
formObj["rlPhdModuleIndex$select"].selectedIndex=0;
}
}
if(callingEventElement.value==2)
{
formObj["trunk"].disabled=false;
}
else
{
formObj["trunk"].disabled=true;
formObj["trunk"].selectedIndex=0;
}
if (objRadio.length==3)
{
if(callingEventElement.value==3)
{
formObj["dot1qVlanIndex$select"].disabled=false;
}
else
{
formObj["dot1qVlanIndex$select"].disabled=true;
formObj["dot1qVlanIndex$select"].selectedIndex=0;
}
}
}
}
function DisableUnchanged(formObj, entryStartStr, FieldsToCheck, tokenObj) {
if (tokenObj == null)
tokenObj = pgTkn;
var i = 1;
formObj = document.forms[0];
var wasChangedCounter = 0;
fieldsEntrySize = 0;
rawValue = 2500;
while (formObj.elements[entryStartStr + "?" + i] != null) {
if ((_top.uniqForSecurityAuthnRadius == true) || ((agent() == 'IE 9') || (agent() == 'IE 10')) && !_top.dscpToQueueUniqVar) {
countEntrySize(i, formObj, FieldsToCheck);
wasChangedCounter++;
}
else {
if (EntryDidnotChanged(i, formObj, FieldsToCheck)) {
DisableEntry(i, formObj, FieldsToCheck);
}
else {
countEntrySize(i, formObj, FieldsToCheck)
wasChangedCounter++;
}}
i++;
}
rawValue += (calculateRawValue(FieldsToCheck) * wasChangedCounter) + fieldsEntrySize;
if ((rawValue) > BufferSize) {
tokenObj.displayLocalizedPageMessage("pgMsg", "13033", 4, true, [[TKN_NUMBER, (Math.round((rawValue) / BufferSize) + 1)]]);
return 0;
}
return 1;
}
function calculateRawValue(FieldsToCheck)
{
var fieldsNameSize=0;
for (i=0;i<FieldsToCheck.length;i++)
fieldsNameSize+=FieldsToCheck[i].length+18;
return (fieldsNameSize);
}
function EntryDidnotChanged(index,formObj,FieldsToCheck)
{
var i;
var changed=true;
var result=true;
formObj=document.forms[0];
for (i=0;i<FieldsToCheck.length;i++)
{
changed = isChanged(formObj.elements[FieldsToCheck[i] + "?" + index]);
if (changed)
result=false;
}
return result;
}
function DisableEntry(index,formObj,FieldsToCheck)
{
var i;
for (i=0;i<FieldsToCheck.length;i++)
{
formObj.elements[FieldsToCheck[i]+"?"+index].disabled=true;
}
}
function countEntrySize(index,formObj,FieldsToCheck)
{
var i;
for (i=0;i<FieldsToCheck.length;i++)
{
fieldsEntrySize+=formObj.elements[FieldsToCheck[i]+"?"+index].value.length;
}
}
function isChanged(obj)
{
if ((typeof obj.type != "string") && (obj.length > 0) && (obj[0] != null) && (obj[0].type=="radio")){
for (var i=0; i<obj.length; i++) {
if (obj[i].checked != obj[i].defaultChecked) { return true; }
}
return false;
}
if ((obj.type=="text") || (obj.type=="textarea"))
{ return (obj.value != obj.defaultValue); }
if (obj.type == "hidden") {
var isIE = ((!document.evaluate) && (agent() != 'IE 11')) ? true : false;
if (isIE) {
if (document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)])
document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].disabled = true;
var firstCheck = (obj.value != obj.defaultValue);
var secondCheck;
try {secondCheck = (obj.value != document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].value);}
catch (e) { secondCheck = firstCheck; }
finally {return (firstCheck == secondCheck) ? firstCheck : secondCheck;}
}
else if (agent() == 'IE 11') {
if (document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)]) {
document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].disabled = true;
return (obj.value != document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].value);
}
else {
return true;
};
}
else {
if (document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)]) {
document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].disabled = true;
return (obj.value != document.forms[0].elements[getBaseName(obj.name) + "$default" + getSuffix(obj.name)].value);
}
else {
return true;
};
}
}
if (obj.type=="checkbox") {
return (obj.checked != obj.defaultChecked);
}
if (obj.type=="select-one") {
if (obj.options.length > 0) {
var x=0;
for (var i=0; i<obj.options.length; i++) {
if (obj.options[i].defaultSelected) { x++; }
}
if (x==0 && obj.selectedIndex==0) { return false; }
for (var i=0; i<obj.options.length; i++) {
if (obj.options[i].selected != obj.options[i].defaultSelected) {
return true;
}
}
}
return false;
}
if (obj.type=="select-multiple") {
if (obj.options.length > 0) {
for (var i=0; i<obj.options.length; i++) {
if (obj.options[i].selected != obj.options[i].defaultSelected) {
return true;
}
}
}
return false;
}
return false;
}
function disableUnchangeFields(formele,FieldsToCheck,suffix)
{
formele=document.forms[0].elements;
formObj=document.forms[0];
var wasChangedCounter=0;
fieldsEntrySize=0;
rawValue=2000;
var isChange;
switch (suffix)
{
case "query":
{
isChange=false;
for (i=0; i<FieldsToCheck[0].length; i++)
{
if (!isChanged(formele[FieldsToCheck[0][i]]))
{
formele[FieldsToCheck[0][i]].disabled=true;
}
else isChange=true;
}
if (!isChange)
{
for (var j=0; j<FieldsToCheck[1].length; j++)
formele[FieldsToCheck[1][j]].disabled=true;
}
break;
}
case "repeat":
{
var i = 1;
while (formele[FieldsToCheck[0][0]+"?"+i]!=null)
{
isChange=false;
for (j=0; j<FieldsToCheck[0].length; j++)
{
if (!isChanged(formele[FieldsToCheck[0][j]+"?"+i]))
{
formele[FieldsToCheck[0][j]+"?"+i].disabled=true;
}
else
{
fieldsEntrySize+=formele[FieldsToCheck[0][j]+"?"+i].value.length;
isChange=true;
}
}
if (!isChange)
{
for (var j=0; j<FieldsToCheck[1].length; j++)
formele[FieldsToCheck[1][j]+"?"+i].disabled=true;
}
else
{
countEntrySize(i,formObj,FieldsToCheck[1])
wasChangedCounter++;
}
i++;
}
rawValue+=((calculateRawValue(FieldsToCheck[1])+calculateRawValue(FieldsToCheck[0]))*wasChangedCounter)+fieldsEntrySize;
if ((rawValue)>BufferSize)
{
msg="You have changed too many objects. The browser cannot send all data\n";
msg+="simultaneously. Please send your request at "+(Math.round((rawValue)/BufferSize)+1);
msg+=" different requests.";
alert(msg);
return 0;
}
return 1;
break;
}
default: break;
}
}
function refreshOpener()
{
if (_top.mainFrame.location && _top.mainFrame.location.reload) {
_top.mainFrame.location.reload(true);
}
else if (_top.mainFrame.location && _top.mainFrame.location.href) {
_top.mainFrame.location.href = _top.mainFrame.location.href;
}
else if (_top.mainFrame.src) {
_top.mainFrame.src = _top.mainFrame.src;
}
}
function refreshOpenerPaging(url)
{
_top.mainFrame.location.href = url;
}
function refreshMainFrameWithFilter(filter, time)
{
if(navigator.appName == "Netscape")
{
if(opener.document.defaultView.parent.mainFrame)
{
opener.document.defaultView.parent.mainFrame.setTimeout("reloadWithNewFilter(" + filter + ")",time);
}
}
else if((navigator.appName).indexOf("Microsoft") != -1)
{
if(opener.document.parentWindow.parent.mainFrame)
{
opener.document.parentWindow.parent.mainFrame.setTimeout("reloadWithNewFilter(" + filter + ")",time);
}
}
}
function reloadWithNewFilter(filter)
{
if(navigator.appName == "Netscape")
{
document.defaultView.parent.mainFrame.location.replace("../snmpSecur/snmp_secur_views_m.htm?Filter:vacmViewTreeFamilyViewName='" + filter + "'");
}
else if((navigator.appName).indexOf("Microsoft") != -1)
{
document.parentWindow.parent.mainFrame.location.replace("../snmpSecur/snmp_secur_views_m.htm?Filter:vacmViewTreeFamilyViewName='" + filter + "'");
}
}
function checkFocus()
{
try
{
if(_top.fldToCheck != "")
{
if(document.forms[0].elements[_top.fldToCheck])
{
document.forms[0].elements[_top.fldToCheck].focus();
}
}
}
catch(e){}
}
function checkForErrors()
{
if (_top.fldToCheck!="")
{
if (!(document.forms[0].elements[_top.fldToCheck]))
{
_top.fldToCheck="";
}
}
}
function doesStringOverlapExist(str1, str2)
{
for(var i = 0; i < str1.length; i++)
{
if(str2.indexOf(str1.charAt(i)) != -1)
return true;
}
return false;
}
function sliceString(stringValue,token)
{
var arr = new Array();
arr = stringValue.split(token);
return arr;
}
function findIndex(selectFieldName)
{
var formObj=document.forms[0];
var i=0;
var IndexNotFound=true;
selectName=formObj.elements[selectFieldName];
while ((selectName.options[i]!=null) && (IndexNotFound))
{
if (newIndex==(selectName.options[i].text))
{
newIndex++;
i++
}
else
IndexNotFound=false;
}
return newIndex;
}
function getBaseName(selectObject)
{
j=0;
var queryObject;
while ((j<selectObject.length)&&(selectObject.charAt(j)!="$"))
j++;
queryObject=selectObject.substr(0,j);
return queryObject;
}
function getSuffix(objectName)
{
j=0;
while ((j<objectName.length)&&(objectName.charAt(j)!="?"))
j++;
if (j==objectName.length)
return "";
else
return objectName.substr(j);
}
function removeSpacesFromHeadAndTail(val)
{
val = val + "";
while (val.length > 0)
{
if (val.charAt(0) == ' ' || val.charAt(0) == '\t')
val = val.substr(1);
else
break;
}
while (val.length > 0)
{
if (val.charAt(val.length - 1) == ' ' || val.charAt(val.length - 1) == '\t')
val = val.substr(0, val.length - 1);
else
break;
}
return val;
}
function isSpace(str)
{
for (var i=0; i<str.length; i++)
{
if (str.charAt(i)!=' ' && str.charAt(i)!='' && str.charAt(i)!='\t' && str.charAt(i)!='\n')
return false;
}
return true;
}
function refresh()
{
var filter = "";
if(document.forms[0].restoreUrl)
{
filter += adjustStringToRefresh(document.forms[0].restoreUrl.value);
}
document.location.href = (document.location.pathname + "?" + filter);
}
function adjustStringToFilter(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if ((theString.charAt(i)!='^')&&(theString.charAt(i)!='[')&&(theString.charAt(i)!='"')&&(theString.charAt(i)!='\'')&&(theString.charAt(i)!='\\'))
{
if (theString.charAt(i)=='#') result+="%23";
else if (theString.charAt(i)=='%') result+="%25";
else if (theString.charAt(i)=='?') result+="%3F";
else if (theString.charAt(i)==';') result+="%3B";
else if (theString.charAt(i)=='&') result+="%26";
else if (theString.charAt(i)=='+') result+="%2B";
else result+=theString.charAt(i);
}
else result+='\\'+theString.charAt(i);
}
return result;
}
function adjustStringToQuery(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if ((theString.charAt(i)!='^')&&(theString.charAt(i)!='[')&&(theString.charAt(i)!='"')&&(theString.charAt(i)!='\'')&&(theString.charAt(i)!='\\')&&(theString.charAt(i)!='@'))
{
if (theString.charAt(i)=='#') result+="%23";
else if (theString.charAt(i)=='%') result+="%25";
else if (theString.charAt(i)=='?') result+="%3F";
else if (theString.charAt(i)==';') result+="%3B";
else if (theString.charAt(i)=='&') result+="%26";
else result+=theString.charAt(i);
}
else result+='\\'+theString.charAt(i);
}
return result;
}
function adjustStringToRefresh(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if (theString.charAt(i)=='#') result+="%23";
else if (theString.charAt(i)=='%') result+="%25";
else if (theString.charAt(i)=='?') result+="%3F";
else if (theString.charAt(i)==';') result+="%3B";
else if (theString.charAt(i)=='&') result+="%26";
else result+=theString.charAt(i);
}
return result;
}
function adjustStringToUTF8(theString)
{
var result="";
for (i=0;(i<theString.length);i++)
{
if ((theString.charAt(i)!='^')&&(theString.charAt(i)!='[')&&(theString.charAt(i)!='\'')&&(theString.charAt(i)!='\\')&&(theString.charAt(i)!='@'))
{
result+=encodeURIComponent(theString.charAt(i));
}
else
{
result+='\\'+theString.charAt(i);
}
}
return result;
}
function convertValueforDisplay(str)
{
var convertedString = "";
for(var i=0;i<str.length;i++)
{
if(str.charAt(i) == '<')
convertedString += "\&lt;";
else
if(str.charAt(i) == '>')
convertedString += "\&gt;";
else
convertedString += str.charAt(i);
}
return convertedString;
}
function trans(param) {return param;}
function Trans(param) {return param;}
function createNewWindow(urlString,windowName,windowWidth,windowHeight,windowLeft,windowTop,enableScroll,enableResize)
{
var flagEnableScroll=(enableScroll=='yes'||enableScroll==true)?"yes":"no";
var flagEnableResize=(enableResize=='yes'||enableResize==true)?"yes":"no";
return window.open(urlString, windowName, 'width='+windowWidth+', height='+windowHeight+', left='+windowLeft+', top='+windowTop+', scrollbars='+flagEnableScroll+', resizable='+flagEnableResize);
}
function updateIPControls(radioFormat, radioType, txtIP)
{
formele = document.forms[0].elements;
objRadioIPv4=formele[radioFormat][1];
objRadioIPv6=formele[radioFormat][0];
objRadioLinkLocal=formele[radioType][0];
objRadioGlobal=formele[radioType][1];
objTxtIP=formele[txtIP];
if(objRadioIPv4.checked==true)
{
objRadioLinkLocal.disabled=true;
objRadioGlobal.disabled=true;
objTxtIP.maxLength=15;
}
else
{
objRadioLinkLocal.disabled=false;
objRadioGlobal.disabled=false;
objTxtIP.maxLength=45;
}
objTxtIP.value="";
}
function setUnitFilter(tokenObj,cols,ifLAGs,keyIndex,logicalTableName,slctName,existUnitCntrlName)
{
if (typeof(slctName) == "undefined")
slctName = 'slctFilter';
if (typeof(existUnitCntrlName) == "undefined")
existUnitCntrlName = null;
document.write('<tr id="trFilter">');
document.write('<th colspan="' + cols + '">');
document.write('<table>');
document.write('<tr class="filterRow">');
document.write('<td>');
tokenObj.createLocalizedFilterLabel("2",slctName);
document.write('</td><td>');
tokenObj.createLocalizedUnitSelector(slctName,existUnitCntrlName,ifLAGs);
document.write('</td><td>');
tokenObj.CreateLocalizedTableHeaderButton("10061","applyInterfaceFilter('" + slctName + "','" + keyIndex + "','rlPhdPortsModuleNumber','[" + logicalTableName + "]');" , "btnGo");
document.write('</td></tr></table></th></tr>');
if(_top.isStandAlone && !ifLAGs)
{
document.getElementById("trFilter").style.display = "none";
document.getElementById(slctName).disabled = true;
}
}
function initFilterUnitSlct(url,repeatModuleValue,slctName)
{
if (typeof(slctName) == "undefined")
slctName = 'slctFilter';
var slct = document.getElementById(slctName);
if (url.indexOf('ModuleNumber') != -1)
{
if(_top.NumberOfModules>1)
selectOptionByValue(slct,repeatModuleValue);
else
slct.selectedIndex = 0;
}
else
selectOptionByValue(slct,"lag");
}
function removeInterfaceFromIPAddress(string)
{
var i=string.indexOf('%');
if(i>0)
string = string.substring(0,i);
return string;
}
function get_tagValue(XMLstr,tagName)
{
var ret='';
var pos=XMLstr.indexOf("<"+tagName+">");
if (pos>0){
var pos1=XMLstr.indexOf(">",pos);
if (pos1>=0){
var pos2=XMLstr.indexOf("<",pos1);
ret = XMLstr.substr(pos1+1,pos2-pos1-1);
}
}
return ret;
}
function getPortNumberFromName(portName)
{
var portNumber=0;
var nameFound=false;
for (var i=0; i<=_top.NumberOfPorts; i++)
{
if (portName==_top.portsNamesArr[i] || portName==_top.portsLongNamesArr[i] || portName==_top.actualNamesArr[i])
{
portNumber=i;
nameFound=true;
break;
}
}
if (!nameFound)
{
for (var j=0; (!nameFound)&&(j<_top.oobPortsNamesArr.length || j<_top.lbpPortsNamesArr.length); j++)
{
if (portName==_top.oobPortsNamesArr[j])
{
portNumber=_top.oobPortsIndexArray[j];
nameFound=true;
break;
}
else if (portName==_top.lbpPortsNamesArr[j])
{
portNumber=_top.lbpPortsIndexArray[j];
nameFound=true;
break;
}
}
}
if (portNumber>0)
return portNumber;
else return parseInt(portName);
}
function getPortNumberFromActualName(portName)
{
var portNumber=0;
var portName = portName.toLowerCase();
var nameFound=false;
for (var i=0; i<=_top.NumberOfPorts; i++)
{
if (portName==_top.actualNamesArr[i])
{
portNumber=i;
nameFound=true;
break;
}
}
if (!nameFound)
{
for (var j=0; (!nameFound)&&(j<_top.oobPortsNamesArr.length || j<_top.lbpPortsNamesArr.length); j++)
{
if (portName==_top.oobPortsNamesArr[j])
{
portNumber=_top.oobPortsIndexArray[j];
nameFound=true;
break;
}
else if (portName==_top.lbpPortsNamesArr[j])
{
portNumber=_top.lbpPortsIndexArray[j];
nameFound=true;
break;
}
}
}
if (portNumber>0)
return portNumber;
else return parseInt(portName);
}
function getPortNameFromNumber(portNumber,isLong)
{
var portName=0;
if (_top && portNumber<=_top.NumberOfPorts && _top.portsNamesArr[portNumber])
return (isLong)?_top.portsLongNamesArr[portNumber]:_top.portsNamesArr[portNumber];
else if (_top && _top.oobNumOfPorts>0 && portNumber>=_top.oobFirstIndex && _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex])
return _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex];
else if (_top && _top.lbpNumOfPorts>0 && portNumber>=_top.lbpFirstIndex && _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex])
return _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex];
else return portNumber;
}
function getRealPortNameFromNumber(portNumber)
{
var portName=0;
if (_top && portNumber<=_top.NumberOfPorts && _top.actualNamesArr[portNumber])
return _top.actualNamesArr[portNumber];
else if (_top && _top.oobNumOfPorts>0 && portNumber>=_top.oobFirstIndex && _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex])
return _top.oobPortsNamesArr[portNumber-_top.oobFirstIndex];
else if (_top && _top.lbpNumOfPorts>0 && portNumber>=_top.lbpFirstIndex && _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex])
return _top.lbpPortsNamesArr[portNumber-_top.lbpFirstIndex];
else return portNumber;
}
function isPresentPort(port)
{
var portNumber=0;
if (checkUInteger32(port+"") && parseInt(port)>0 && parseInt(port)<=_top.NumberOfPorts)
portNumber=parseInt(port);
else portNumber=getPortNumberFromName(port);
if (portNumber<=_top.existedPortsArr.length)
return (_top.existedPortsArr[portNumber]);
else if (_top.oobNumOfPorts && _top.oobNumOfPorts>0 && portNumber<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
return (_top.oobExistedPortsArr[portNumber-_top.oobFirstIndex]);
}
else if (_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && portNumber<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
return (_top.lbpExistedPortsArr[portNumber-_top.lbpFirstIndex]);
}
}
function addPresentPortsSelectionList(formObj,selectName,selectedVal,indexesOrNames,filterByModuleFlag, filterByModuleNum, isOOB, isLBP)
{
var formObj=document.forms[0];
var optionNo=1;
var val;
var text="";
var slct;
if(formObj)
slct=formObj.elements[selectName];
else
slct=document.getElementById(selectName);
slct.length=0
if (indexesOrNames!="i" && indexesOrNames!="n")
indexesOrNames="i" ;
if (!filterByModuleFlag) filterByModuleFlag=false;
for (var i=1; i<=docObj.NumberOfPorts; i++)
{
if ( (docObj.existedPortsArr[i]) && (!(filterByModuleFlag) || (filterByModuleFlag && (docObj.moduleNumPerPortArr[i]==filterByModuleNum))) )
{
val=i;
if (indexesOrNames=="n")
text=docObj.portsNamesArr[i];
else text=(i)+"";
newOption = new Option(text,val);
slct.options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.value)==selectedVal || newOption.text==selectedVal)
{
newOption.selected = true ;
}
}
optionNo++;
}
}
if (isOOB!=null && isOOB!="" && isOOB==true && docObj.oobNumOfPorts && docObj.oobNumOfPorts>0)
{
for (var j=0; j<docObj.oobPortsIndexArray.length; j++)
{
if (docObj.oobExistedPortsArr[j]==true)
{
if (indexesOrNames=="n")
text=docObj.oobPortsNamesArr[j];
else text=docObj.oobPortsIndexArray[j];+"";
val=docObj.oobPortsIndexArray[j];
newOption = new Option(text,val);
slct.options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.value)==selectedVal || newOption.text==selectedVal)
{
newOption.selected = true ;
}
}
optionNo++;
}
}
}
if (isLBP!=null && isLBP!="" && isLBP==true && docObj.lbpNumOfPorts && docObj.lbpNumOfPorts>0)
{
for (var j=0; j<docObj.lbpPortsIndexArray.length; j++)
{
if (docObj.lbpExistedPortsArr[j]==true)
{
if (indexesOrNames=="n")
text=docObj.lbpPortsNamesArr[j];
else text=docObj.lbpPortsIndexArray[j];+"";
val=docObj.lbpPortsIndexArray[j];
newOption = new Option(text,val);
slct.options[optionNo-1]=newOption;
if (selectedVal != "")
{
if ( parseInt(newOption.value)==selectedVal || newOption.text==selectedVal)
{
newOption.selected = true ;
}
}
optionNo++;
}
}
}
}
function relatedTrunk(port)
{
if (opener)
if (opener.opener)
if (opener.opener.opener) return opener.opener.opener.top.relatedTrunksArr[port];
else return opener.opener.top.relatedTrunksArr[port];
else return opener.top.relatedTrunksArr[port];
else return top.relatedTrunksArr[port];
}
function displayInterface(indexField,portNameField,rowNum)
{
var formelem = document.forms[0];
var interfaceValue;
var interfaceText_ML;
interfaceValue = parseInt(formelem[indexField+"?"+rowNum].value);
var numOfTrunks,numOfPorts;
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top.oobNumOfPorts>1)
interfaceText_ML="OOB "+(interfaceValue-_top.oobFirstIndex+1);
else interfaceText_ML="OOB";
}
else if(_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top.lbpNumOfPorts>1)
interfaceText_ML="LBP "+(interfaceValue-_top.lbpFirstIndex+1);
else interfaceText_ML="LBP";
}
else if (interfaceValue>=200000)
{
interfaceText_ML="DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue>=100000)
{
interfaceText_ML="VLAN "+(interfaceValue-100000+1);
}
}
else{
if(interfaceValue>numOfPorts){
interfaceText_ML="LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else{
interfaceText_ML = formelem[portNameField+"?"+rowNum].value;
}
}
document.write(interfaceText_ML);
}
function getInterfaceNameByIndex(interfaceValue,isLong)
{
var numOfTrunks,numOfPorts;
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top.oobNumOfPorts>1)
interfaceText_ML="OOB "+(interfaceValue-_top.oobFirstIndex+1);
else interfaceText_ML="OOB";
}
else if(_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top.lbpNumOfPorts>1)
interfaceText_ML="LBP "+(interfaceValue-_top.lbpFirstIndex+1);
else interfaceText_ML="LBP";
}
else if (interfaceValue>=200000)
{
interfaceText_ML="DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue>=100000)
{
interfaceText_ML="VLAN "+(interfaceValue-100000+1);
}
}
else{
if(interfaceValue>numOfPorts){
interfaceText_ML="LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else{
interfaceText_ML = getPortNameFromNumber(interfaceValue, isLong);
}
}
return interfaceText_ML;
}
function getRealInterfaceNameByIndex(interfaceValue,isLong)
{
var numOfTrunks,numOfPorts;
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top.oobNumOfPorts>1)
interfaceText_ML="OOB "+(interfaceValue-_top.oobFirstIndex+1);
else interfaceText_ML="OOB";
}
else if(_top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top.lbpNumOfPorts>1)
interfaceText_ML="LBP "+(interfaceValue-_top.lbpFirstIndex+1);
else interfaceText_ML="LBP";
}
else if (interfaceValue>=200000)
{
interfaceText_ML="DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue>=100000)
{
interfaceText_ML="VLAN "+(interfaceValue-100000+1);
}
}
else{
if(interfaceValue>numOfPorts){
interfaceText_ML="LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else{
interfaceText_ML = getRealPortNameFromNumber(interfaceValue, isLong);
}
}
return interfaceText_ML;
}
function displayTrunk(indexField, rowNum)
{
var formelem = document.forms[0];
var trunkVal,trunkText;
var numOfPorts;
trunkVal = formelem[indexField+"?"+rowNum].value;
if(opener)
{
trunkText = parseInt(trunkVal)-parseInt(opener.top.trunkFirstIndex)+1;
}
else
{
trunkText = parseInt(trunkVal)-parseInt(_top.trunkFirstIndex)+1;
}
document.write(trunkText);
}
function getInterfaceName(fieldName, managementIfIndex, isLong)
{
var formelem = document.forms[0];
var interfaceValue,interfaceText_ML;
var numOfPorts,numOfTrunks;
if (formelem && formelem.elements[fieldName])
interfaceValue = getInterfaceValueWithMgmtInterface(fieldName, managementIfIndex);
var numOfTrunks,numOfPorts;
if (_top)
{
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
}
if(interfaceValue > (parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.loopbackNumOfPorts && _top.loopbackNumOfPorts>0 && interfaceValue >= _top.loopbackFirstIndex && interfaceValue < (_top.loopbackFirstIndex + _top.loopbackNumOfPorts))
{
interfaceText_ML = "Loopback"+(interfaceValue - _top.loopbackFirstIndex+1);
}
else if(_top && _top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue >= _top.oobFirstIndex && interfaceValue < (_top.oobFirstIndex + _top.oobNumOfPorts))
{
if (_top && _top.oobNumOfPorts>1)
interfaceText_ML = "OOB "+(interfaceValue - _top.oobFirstIndex+1);
else
interfaceText_ML = "OOB";
}
else if(_top && _top.lbpNumOfPorts && _top.lbpNumOfPorts > 0 && interfaceValue >= _top.lbpFirstIndex && interfaceValue < (_top.lbpFirstIndex + _top.lbpNumOfPorts))
{
if (_top && _top.lbpNumOfPorts>1)
interfaceText_ML = "LBP "+(interfaceValue - _top.lbpFirstIndex+1);
else
interfaceText_ML = "LBP";
}
else if (interfaceValue >= 200000)
{
interfaceText_ML = "DVLAN "+(interfaceValue-200000+1);
}
else if (interfaceValue >= 100000)
{
interfaceText_ML = "VLAN "+(interfaceValue-100000+1);
}
}
else
{
if(interfaceValue>=_top.trunkFirstIndex)
{
interfaceText_ML = "LAG "+ (interfaceValue-parseInt(_top.trunkFirstIndex)+1);
}
else
{
interfaceText_ML = getPortNameFromNumber(interfaceValue, isLong)
}
}
return (interfaceText_ML);
}
function getIfIndexByName(interfaceName)
{
for(var i = 0; i < _top.actualNamesArr.length; i++)
{
if(_top.actualNamesArr[i] == interfaceName)
return i;
}
return -1;
}
function getInterfaceValueWithMgmtInterface(fieldName, managementIfIndex)
{
var interfaceValue = parseInt(document.forms[0].elements[fieldName].value);
if(managementIfIndex == null)
return interfaceValue;
else if(interfaceValue != _top.ManagementInterfaceLogicalifIndex)
return interfaceValue;
else
{
if(managementIfIndex == _top.ManagementInterfaceDefaultVlanifIndex)
interfaceValue = (parseInt(_top.defaultVlanId)+99999);
else
interfaceValue = managementIfIndex;
}
return interfaceValue;
}
function getValueFromControl(cntrl)
{
switch(cntrl.tagName)
{
case "INPUT":
{
cntrl.value = cntrl.value.trim();
return cntrl.value;
}
case "SELECT":
return cntrl.options[cntrl.selectedIndex].text.trim();
default:
return cntrl.value.trim();
}
}
function init()
{
if(document.forms[0])document.forms[0].autocomplete="off";
}
function extract_left(total_chars) {return this.substring(0, total_chars);}
function extract_right(total_chars) {return this.substring(this.length - total_chars);}
String.prototype.right = extract_right
String.prototype.left = extract_left
String.prototype.trim = function trim_spaces(from_where)
{
var temp_string = this;
if (arguments.length == 0)from_where = "BOTH";
if (from_where.toUpperCase() == "LEFT" || from_where == "BOTH")while (temp_string.left(1) == " ") temp_string = temp_string.substring(1);
if (from_where.toUpperCase() == "RIGHT" || from_where == "BOTH")while (temp_string.right(1) == " ")temp_string = temp_string.substring(0, temp_string.length - 1);
return temp_string;
}
String.prototype.RemoveSpaces = function(blnIgnoreCarriage, blnIgnoreInnerWhiteSpace) {
var temp = this.replace(/^\s*/,"");
temp = temp.replace(/\s*$/,"");
blnIgnoreCarriage = blnIgnoreCarriage ? true : false;
blnIgnoreInnerWhiteSpace = blnIgnoreInnerWhiteSpace ? true : false;
if(blnIgnoreCarriage && blnIgnoreInnerWhiteSpace) {;}
else if(blnIgnoreCarriage&&!blnIgnoreInnerWhiteSpace) {
temp = temp.replace(/\t+/g," ");
temp = temp.replace(/ +/g," ");
}
else if(!blnIgnoreCarriage && blnIgnoreInnerWhiteSpace) {
temp=temp.replace(/(\n\r)+/g,"");
}
else if(!blnIgnoreCarriage && !blnIgnoreInnerWhiteSpace) {
temp=temp.replace(/\s+/g," ");
}
if(temp==" ") { temp=""; }
return temp;
};
function getHelp()
{
if (opener)opener.top.document.getElementById('hlpButton').click();
}
function help()
{
var strHref=document.getElementById('mainFrame').contentWindow.location.pathname;
strHref=strHref.substr(strHref.lastIndexOf("/")+1);
strHref=strHref.slice(0,-4)+ "_hlp.htm"
createNewWindow('../help/'+ strHref,'','540','540','20','20','yes','yes')
}
function replaceEnter(str)
{
var regExp = new RegExp(String.fromCharCode(13)+"+","g");
var regExp1 = new RegExp(String.fromCharCode(10)+"+","g");
return str.replace(regExp1," ").replace(regExp," ");
}
function checkAdvanced(cntrlName,toCheck,tokenObj)
{ var arr;
var cntrl=formele[cntrlName];
var vlue=cntrl.value
if(!toCheck) {arr=new Array(" ","<","&");}
else{arr=toCheck.split(';');}
for (var i=0;i<arr.length;i++)
{ if(cntrl.value.indexOf(arr[i])>-1)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12055");
return false;
}
}
return true;
}
function firstEntryBetween(initStr,strtStr,endStr)
{ var intStrtStr=initStr.indexOf(strtStr);
var strtFORendStr=intStrtStr+ strtStr.length;
var intEndStr=endStr?initStr.indexOf(endStr,strtFORendStr):-2;
if (intStrtStr==-1 || intEndStr==-1)return "-1";
return intEndStr==-2?initStr.substring(strtFORendStr):initStr.substring(strtFORendStr,intEndStr);
}
function getCurrentTextFromSelect(selectBox)
{
if(!selectBox)return null;
return selectBox.selectedIndex==-1?"":selectBox.options[selectBox.selectedIndex].text;
}
function checkValidationIP(cntrl,notZeros,canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
var currEdgeOctet = "";
var isNetworkEdge = true;
tokenObj.removeToken(msgNodeId);
var retVal = true;
var dictID = "";
if(cntrl.disabled)
{
return retVal;
}
var val=cntrl.value=cntrl.value.trim();
if(val == "" && canBeEmpty)
{
return retVal;
}
else if(val == "")
{
dictID = "12000";
}
else if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
dictID = "12004";
}
else if(!notZeros && val == "0.0.0.0")
{
retVal = true;
}
else
{
val = val.split(".")
if(val[0]>=224 || val[0]<=0 || val[0] == 127 || (val[0].length>1 && val[0].charAt(0) == "0"))
{
retVal = false;
dictID = "12004";
}
for(var i=1;i<4;i++)
{
if(val[i]>255 || val[i]<0 || (val[i].length>1 && val[i].charAt(0) == "0"))
{
retVal = false;
dictID = "12004";
break;
}
else if(isNetworkEdge)
{
if(currEdgeOctet == "")
currEdgeOctet = val[i];
if((val[i] != 255 && val[i] != 0) || val[i] != currEdgeOctet )
{
isNetworkEdge = false;
}
}
}
if(isNetworkEdge)
{
retVal = false;
dictID = "12004";
}
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return retVal;
}
function removeLeadZeroFromIPAddr(str) {
return str.replace(/0+(\d+)/g, "$1");
}
function checkValidationNetworkIP(cntrl,canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
var currEdgeOctet = "";
tokenObj.removeToken(msgNodeId);
var retVal = true;
var dictID = "";
if(cntrl.disabled)
{
return retVal;
}
var val=cntrl.value=cntrl.value.trim();
if(val == "" && canBeEmpty)
{
return retVal;
}
else if(val == "")
{
dictID = "12000";
}
else if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
dictID = "15047";
}
else if(val == "0.0.0.0")
{
dictID = "15047";
retVal = false;
}
else
{
val = val.split(".")
for(var i = 0; i < val.length; i++)
while(val[i].length > 1 && val[i].charAt(0) == "0")
val[i] = val[i].substring(1);
if(val[0]>=224 || val[0]<=0 || val[0] == 127 )
{
retVal = false;
dictID = "12004";
}
for(var i=1;i<4;i++)
{
if(val[i]>255 || val[i]<0)
{
retVal = false;
dictID = "15047";
break;
}
}
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return retVal;
}
function checkValidationIPFormatOnly(cntrl, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val=cntrl.value=cntrl.value.trim();
var dictID = "";
if(cntrl.disabled)
return true;
if(val == "" && canBeEmpty)
return true;
if(val == "" && !canBeEmpty)
dictID = "12000"
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
if(dictID == "")dictID = "12002";
val = val.split(".");
for(var i = 0; i < val.length; i++)
{
if(val[i]>255 || val[i]<0 || (val[i].length > 1 && val[i].charAt(0) == "0"))
{
if(dictID == "")dictID = "12002";
}
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return true;
}
function checkValidationIPListFormatOnly(cntrl, seperator, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val = cntrl.value = cntrl.value.trim();
var IPList = val.split(seperator)
var dictID = "";
if(cntrl.disabled)
return true;
if(val == "" && canBeEmpty)
return true;
if(val == "" && !canBeEmpty)
dictID = "12000";
for(var i in IPList)
{
val = IPList[i];
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
if(dictID == "")dictID = "12101";
break;
}
val = val.split(".");
for(var i = 0; i < val.length; i++)
{
if(val[i]>255 || val[i]<0 || (val[i].length > 1 && val[i].charAt(0) == "0"))
{
if(dictID == "")dictID = "12101";
}
}
if(dictID != "") break;
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return true;
}
function checkMulticastIP(cntrl,ipFormat,canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
var dictID = "";
if(cntrl.disabled)
{
return retVal;
}
var val=cntrl.value=cntrl.value.trim();
if(val == "" && canBeEmpty)
{
return retVal;
}
else if(val == "")
{
dictID = "12000";
}
else if(ipFormat=="1")
{
if(checkValidationIPFormatOnly(cntrl,canBeEmpty, tokenObj))
{
var IPArr=cntrl.value.split(".");
if ((parseInt(IPArr[0])<224) || (parseInt(IPArr[0])>239))
{
retVal = false;
dictID = "12063";
}
}
else
{
dictID = "12064";
retVal = false;
}
}
else
{
if(checkIPv6General(cntrl, true, canBeEmpty, tokenObj))
{
var valArr=cntrl.value.split(":");
if(valArr[0].toLowerCase()<"ff00" || valArr[0].length < 4)
{
retVal = false;
if(dictID == "")dictID = "12031";
}
}
else
retVal = false;
}
if(dictID != "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, dictID);
return false;
}
return retVal;
}
function checkValidationMaskWithRanges(cntrl, canBeEmpty, minPrefix, maxPrefix, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
if(minPrefix == null)
minPrefix = 0;
if(maxPrefix == null)
maxPrefix = 32;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val=cntrl.value=cntrl.value.trim();
if(cntrl.disabled)
return true;
if(val == "" && canBeEmpty)
{
return true;
}
else if(val == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12042");
return false;
}
var octetArr = val.split(".");
var bitString = "";
var currBits;
if (val == "0.0.0.0" || octetArr[0] != 255) {
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075")
return false;
}
for(var i = 0; i < octetArr.length; i++)
{
currBits = parseInt(octetArr[i],10).toString(2);
if(currBits.length > 8)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12043");
return false;
}
while(currBits.length < 8)
currBits = "0" + currBits;
bitString += currBits;
}
var onesEnded = false;
var prefix = 0;
var allOnes = true;
for(var i = 0; i < bitString.length; i++)
{
if(bitString.charAt(i) == "0")
{
allOnes = false;
if(!onesEnded)
{
onesEnded = true;
prefix = i;
}
}
else
{
if(onesEnded)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12043");
return false;
}
}
}
if (allOnes)
prefix = 32;
if(prefix < minPrefix || prefix > maxPrefix)
{
var minMask = maskIntValToIp(minPrefix);
var maxMask = maskIntValToIp(maxPrefix);
tokenObj.alterLocalizedContextMessage(cntrl, true, "12044", [[TKN_CONST,minMask],[TKN_CONST,maxMask]]);
return false;
}
return true;
}
function validateFilename(cntrl,maxLength,tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var val=cntrl.value=cntrl.value.trim();
var curLength=calculateLocalizedStrLength(val);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>val.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
return false;
}
if (val == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if(!isStringTextual(val, false))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
return false;
}
return true;
}
function checkValidationPrefixMask(cntrl)
{
if(cntrl.disabled)
{
return true;
}
var val = cntrl.value=cntrl.value.trim();
if(!/^\/\d{1,2}$/.test(val) || parseInt(val.substr(1))>32)
{
return callAlert(cntrl,"Value in highlighted field is in illegal format .");
}
return true;
}
var MonthInfo = function (val, name, dictId)
{
this.val = val;
this.name = name;
this.dictId = dictId;
};
var enMonth=new Array(12);
enMonth[0]= new MonthInfo(0,"JAN","9990001");
enMonth[1]= new MonthInfo(1,"FEB","9990002");
enMonth[2]= new MonthInfo(2,"MAR","9990003");
enMonth[3]= new MonthInfo(3,"APR","9990004");
enMonth[4]= new MonthInfo(4,"MAY","9990005");
enMonth[5]= new MonthInfo(5,"JUN","9990006");
enMonth[6]= new MonthInfo(6,"JUL","9990007");
enMonth[7]= new MonthInfo(7,"AUG","9990008");
enMonth[8]= new MonthInfo(8,"SEP","9990009");
enMonth[9]= new MonthInfo(9,"OCT","9990010");
enMonth[10]= new MonthInfo(10,"NOV","9990011");
enMonth[11]= new MonthInfo(11,"DEC","9990012");
for (var i=0; i<enMonth.length; i++)
enMonth[enMonth[i].name]= enMonth[i];
function checkLeagalDate(value, tokenObj, cntrl)
{
try
{
var dateFormat = tokenObj.getActiveDateFormat();
var newDate = new Date();
if (dateFormat.search(/YYYY/)>=0)
var year = value.substr(dateFormat.search(/YYYY/),4);
else if (dateFormat.search(/YY/)>=0)
{
var year = value.substr(dateFormat.search(/YY/),2);
if ((year*1)>30)
year= (year*1)+1900;
else
year= (year*1)+2000;
}
if (dateFormat.search(/MMM/)>=0)
{
var monthName = value.substr(dateFormat.search(/MMM/),3).toUpperCase();
var month = enMonth[monthName].val;
}
else if (dateFormat.search(/MM/)>=0)
{
var month = value.substr(dateFormat.search(/MM/),2);
month=month-1;
}
if (dateFormat.search(/DD/)>=0)
var date = value.substr(dateFormat.search(/DD/),2);
if (year)
{
newDate.setFullYear(year,month,date);
if (month != newDate.getMonth() || date != newDate.getDate())
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12077");
return false;
}
}
return true;
}
catch (e)
{
return true;
}
}
function conv12hhTo24hh(arrhours)
{
var hours;
if (arrhours[1]=="AM"){
if (arrhours[0]==12) {hours=0;}
else if (1<=arrhours[0] && arrhours[0]<12) {hours=arrhours[0]*1;}
else hours=null;
}
else if (arrhours[1]=="PM") {
if (arrhours[0]==12) {hours=12;}
else if (1<=arrhours[0] && arrhours[0]<12) {hours=arrhours[0]*1+12;}
else hours=null;
}
return hours;
}
function checkLeagalTime(dateTimeStr, tokenObj, cntrl)
{
var newDate = new Date();
var dateTimeFormat = tokenObj.getActiveTimeFormat();
dateTimeFormat=dateTimeFormat.replace(/24hh/,"HH")
dateTimeFormat=dateTimeFormat.replace(/12hh/,"hh")
if (dateTimeFormat.search(/hh/)>=0) {
arrhours = new Array(2);
arrhours[0]= dateTimeStr.substr(dateTimeFormat.search(/hh/),2);
if (dateTimeStr.search(/AM/)>=0 || dateTimeStr.search(/am/)>=0) {arrhours[1]="AM"}
else if (dateTimeStr.search(/PM/)>=0 || dateTimeStr.search(/pm/)>=0){arrhours[1]="PM"}
else
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12038");
return false;
}
var hours=conv12hhTo24hh(arrhours);
}
else {
var hours=(dateTimeFormat.search(/HH/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/HH/),2): -1;
}
var min = (dateTimeFormat.search(/mm/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/mm/),2): 0;
var sec = (dateTimeFormat.search(/ss/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/ss/),2): 0;
var msec = (dateTimeFormat.search(/ms/)>=0)? dateTimeStr.substr(dateTimeFormat.search(/ms/),2): 0;
if (hours>=0)
newDate.setHours(hours,min,sec,msec);
if (!isNaN(newDate))
{
if (hours != newDate.getHours() || min != newDate.getMinutes() || sec != newDate.getSeconds())
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12078");
return false;
}
return true;
}
else
return true;
}
function checkValidationDate(cntrl, canBeEmpty, tokenObj, minYear, maxYear)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.value.trim()=="" && canBeEmpty)
return true;
else if(cntrl.value.trim()=="")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if (!checkLeagalDate(cntrl.value.trim(),tokenObj, cntrl))
return false;
var dateObj = tokenObj.createDateObject(cntrl.value, tokenObj.getActiveDateFormat());
if (minYear && minYear != null && dateObj)
{
if (dateObj.getUTCFullYear()< minYear)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12080");
return false;
}
}
if (maxYear && maxYear != null && dateObj)
{
if (dateObj.getUTCFullYear()> maxYear)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12080");
return false;
}
}
if(!dateObj)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12037");
return false;
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_DATE,dateObj]]);
return true;
}
function checkValidationTime(cntrl, canBeEmpty, tokenObj, isShort)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
var tokenType = (isShort) ? TKN_SHORT_TIME : TKN_TIME;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.value.trim()=="" && canBeEmpty)
return true
else if(cntrl.value.trim()=="")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
if (!checkLeagalTime(cntrl.value.trim(),tokenObj,cntrl))
return false;
var dateObj;
var val=cntrl.value.toUpperCase()
if(isShort)
dateObj = tokenObj.createDateObject(val, tokenObj.getActiveTimeFormat().replace(/\Wss/,""));
else
dateObj = tokenObj.createDateObject(val, tokenObj.getActiveTimeFormat());
if(!dateObj)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12038");
return false;
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[tokenType,dateObj]]);
return true;
}
function checkValidationDateTime(cntrl, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.value.trim()=="" && canBeEmpty)
return true
else if(cntrl.value.trim()=="")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
var dateObj = tokenObj.createDateObject(cntrl.value, tokenObj.getActiveDateTimeFormat());
if(!dateObj)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12039");
return false;
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_DATE_TIME,dateObj]]);
return true;
}
function checkValidationRange(cntrl, lower, upper, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if (cntrl.disabled)
return retVal;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return retVal;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else
{
curVal = tokenObj.createNumberObject(cntrl.value);
if(curVal == null)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12001", [[TKN_NUMBER, lower], [TKN_NUMBER, upper]]);
return false;
}
else if (!/(^\d+$)/.test(curVal.toString()))
retVal = false;
else if (curVal > upper || curVal < lower )
retVal = false;
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12001", [[TKN_NUMBER, lower], [TKN_NUMBER, upper]]);
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_NUMBER,curVal.toString()]]);
return retVal;
}
function checkValidationRangeOut(cntrl, lower, upper, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if (cntrl.disabled)
return retVal;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return retVal;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else
{
curVal = tokenObj.createNumberObject(cntrl.value);
if(curVal == null)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
return false;
}
else if (!/(^\d+$)/.test(curVal.toString()))
retVal = false;
else if (curVal > upper || curVal < lower )
retVal = false;
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_NUMBER,curVal.toString()]]);
return retVal;
}
function checkValidationRangeOut2(cntrl, arrRange, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if (cntrl.disabled)
return retVal;
var curVal = cntrl.value.trim();
if(curVal == "" && canBeEmpty)
return retVal;
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
tokenObj.setTokenAttribute(cntrl.id,"value","");
return false;
}
else
{
for (var i=0; i < arrRange.length ; i++)
{
for (var j = 0 ; j < arrRange[i].length ; j++)
arrRange[i][j] = parseInt(arrRange[i][j],10);
}
curVal = tokenObj.createNumberObject(cntrl.value);
if(curVal == null)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
return false;
}
else if (!/(^\d+$)/.test(curVal.toString()))
retVal = false;
else if (arrRange.length > 1)
{
if (! ( ((curVal >= arrRange[0][0]) && (curVal <= arrRange[0][1])) || ((curVal >= arrRange[1][0]) && (curVal <= arrRange[1][1])) ) )
retVal = false;
}
else if (curVal > arrRange[0][1] || curVal < arrRange[0][0] )
retVal = false;
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12075");
}
tokenObj.setTokenAttribute(cntrl.id,"value","",[[TKN_NUMBER,curVal.toString()]]);
return retVal;
}
function checkValidationHexValueRange(cntrl, canBeEmpty, minHexVal,maxHexVal, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
var msgId = "";
tokenObj.removeToken(msgNodeId);
var retVal=true;
var minDecVal, maxDecVal,valueFldLen;
var emptyValueFld = "0000000000";
valueFldLen = maxHexVal.length;
if (minHexVal.length < valueFldLen)
minDecVal = hexToDec(emptyValueFld.substr(0,valueFldLen)+minHexVal);
else
minDecVal = hexToDec(minHexVal);
maxDecVal = hexToDec(maxHexVal);
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
else if(curVal == "" && canBeEmpty)
{
retVal = true;
return retVal;
}
if (curVal.length < valueFldLen)
curVal = emptyValueFld.substr(0,valueFldLen) + curVal;
curVal = hexToDec(curVal);
if(curVal == "" && curVal.toString().length==0)
{
retVal = false;
msgId = "12073";
}
if ((curVal > maxDecVal || curVal < minDecVal) && msgId == "")
{
retVal = false;
msgId = "12069";
}
if(!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, msgId, [[TKN_CONST, minHexVal], [TKN_CONST,maxHexVal]]);
}
return retVal;
}
function checkValidationStringWithNoSpaces(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal=true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
for (var i=0;i<curVal.length;i++)
{
if (curVal.charCodeAt(i)==32)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12074");
retVal=false;
i=curVal.length;
return retVal;
}
}
if(!isStringTextual(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
retVal = false;
return retVal;
}
return retVal;
}
function checkValidationString(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal=true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(!IsUndefOrNull(maxLength))
{
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
}
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
if(!isStringTextual(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
retVal = false;
return retVal;
}
return retVal;
}
function checkValidationStringMinMax(cntrl, canBeEmpty, minLength, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal=true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curLength < parseInt(minLength,10) && minLength != 0)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "14008", [[TKN_NUMBER, minLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal == "" && !canBeEmpty)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
retVal = false;
return retVal;
}
if(!isStringTextual(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12094");
retVal = false;
return retVal;
}
return retVal;
}
function checkDomainValidation(cntrl, canBeEmpty, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
var label_reg_exp = "([0-9a-zA-Z]|([0-9a-zA-Z]+[0-9a-zA-Z-_]*)[0-9a-zA-Z])";
var regexp = new RegExp("^\\.?((" + label_reg_exp + "\\.)*" + label_reg_exp + ")\\.?$", "");
cntrl.value = cntrl.value.trim();
var value = cntrl.value;
if (curVal.trim().length != 0)
{
var result = regexp.test(curVal);
if (!result)
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "12019",[[TKN_CONST,"1"],[TKN_CONST,"63"]]);
return false;
}
}
else
{
return true;
}
curVal = value.replace(regexp, "$1");
var arr = curVal.split(".");
for (j = 0; j < arr.length; j++)
{
if ((arr[j].length<1)||(arr[j].length>63))
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "12019",[[TKN_CONST,"1"],[TKN_CONST,"63"]]);
return false;
}
}
return true;
}
function checkHostNameValidation(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
retVal = isContainsChars(curVal,LEGAL_ALPHANUMERIC_CHARS + "-");
if (!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12081");
return false;
}
var firstChar = curVal.charAt(0);
if ((firstChar > "z")||(firstChar <"A"))
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "3130005");
return false;
}
var lastChar = curVal.charAt(curVal.length -1);
if (lastChar == "-")
{
pgTkn.alterLocalizedContextMessage(cntrl, true, "12081");
return false;
}
return true;
}
function checkServerNameValidation(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
retVal = isContainsChars(curVal,LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR_DNS);
if (!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12095");
return false;
}
return checkDomainValidation(cntrl, canBeEmpty, tokenObj)
}
function checkACLNameValidation(cntrl, canBeEmpty, maxLength, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
if(cntrl.disabled)
{
return true;
}
var curVal = cntrl.value = cntrl.value.trim();
var curLength=calculateLocalizedStrLength(curVal);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>curVal.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
retVal = false;
return retVal;
}
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
retVal = isContainsChars(curVal,LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR_VAR);
if (!retVal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12095");
return false;
}
return true;
}
function isContainsChars(str,chars)
{
for (var i = 0 ; i < str.length ; i++)
{
if (chars.indexOf(str.charAt(i)) == -1)
return false;
}
return true;
}
function isNotContainsChars(str,chars)
{
for (var i = 0 ; i < str.length ; i++)
{
if (chars.indexOf(str.charAt(i)) != -1)
return false;
}
return true;
}
function isStringTextual(chkVal, enableNonTextualCharsCheck)
{
var currCharCode;
var retVal = true;
if(IsUndefOrNull(enableNonTextualCharsCheck)) enableNonTextualCharsCheck = true;
for(var i = 0; i < chkVal.length; i++)
{
currCharCode = chkVal.charCodeAt(i);
if ((currCharCode & 0xFC00) == 0xD800)
{
if ((chkVal.charCodeAt(i+1) & 0xFC00) == 0xDC00)
currCharCode = ((currCharCode - 0xD800) * 0x400) + (chkVal.charCodeAt(++i) - 0xDC00) + 0x10000;
else
retVal = false;
}
else
if ((currCharCode & 0xFC00) == 0xDC00)
retVal = false;
if ((currCharCode >= 8192 && currCharCode <= 10175 && enableNonTextualCharsCheck)|| !retVal)
return retVal;
}
return retVal;
}
function checkStringLength(cntrl, maxLength, tokenObj, e)
{
if (window.event)
key = e.keyCode;
else
key = e.which;
if (key == 13)
return;
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var str=cntrl.value;
str = str.trim();
var strLen = str.length;
var srcCntrlLen = cntrl.value;
var curLength=calculateLocalizedStrLength(str);
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(strLen != srcCntrlLen)
cntrl.value = cntrl.value.trim();
if(curLength>str.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
}
}
function checkStringWithHintLength(cntrl, maxLength, curLength, tokenObj, e)
{
if (window.event)
key = e.keyCode;
else
key = e.which;
if (key == 13)
return;
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var str=cntrl.value.trim();
if(curLength > parseInt(maxLength,10) && maxLength != -1)
{
if(curLength>str.length)
tokenObj.alterLocalizedContextMessage(cntrl, true, "12083");
else
tokenObj.alterLocalizedContextMessage(cntrl, true, "12067", [[TKN_NUMBER, maxLength.toString()]]);
}
}
function checkValidationMAC(cntrl, canBeEmpty, isMulticastLegal, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
else if(!/(^[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}$)/.test(curVal) &&
!/(^[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}$)/.test(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12003");
return false;
}
else if(isHexValOdd(curVal.substring(0,2)) && !isMulticastLegal)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12018");
return false;
}
return true;
}
function checkValidationMACMulticast(cntrl, canBeEmpty, isAnyDisallowed, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
var msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
var retVal = true;
if(cntrl.disabled)
{
return retVal;
}
var curVal = cntrl.value = cntrl.value.trim();
if(curVal=="" && canBeEmpty)
{
return true;
}
else if(curVal == "")
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12000");
return false;
}
else if(!/(^[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}$)/.test(curVal) &&
!/(^[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}[A-Fa-f0-9]{2}$)/.test(curVal))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12003");
return false;
}
else if(!isHexValOdd(curVal.substring(0,2)))
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12062");
return false;
}
else if(curVal=="ff:ff:ff:ff:ff:ff" && isAnyDisallowed)
{
tokenObj.alterLocalizedContextMessage(cntrl, true, "12062");
return false;
}
return true;
}
function isHexValOdd(str)
{
if(parseInt(str,16) % 2 == 1)
return true;
else
return false;
}
function disable(element,disableElem)
{
element.className = disableElem ? "disableElement" : "enableElement";
element.disabled = disableElem;
}
function callAlert(cntrl,msg)
{
cntrl.className = 'highlightElement';
document.all ? cntrl.ownerDocument.parentWindow.alert(msg) : cntrl.ownerDocument.defaultView.alert(msg)
cntrl.className='enableElement';
cntrl.focus();
return false;
}
function Writelogo(Pagename)
{
document.write("<table !background='../images/linksysImages/pageBackground.jpg' width='100%'><tr ><td class=PopCaption align=center width=100% id=Pagename>" + Pagename + "</td></tr></table><br>");
}
function getHelpTopic(fName)
{
}
var defaultModalWindowOpener = function(url, widthUD, heightUD){
if (typeof widthUD == 'undefined') widthUD = 375;
if (typeof heightUD == 'undefined') heightUD = 206;
LINKSYS = {};
LINKSYS.box = function () {
var j, m, b, g, v, p = 0;
return {
show: function (o) {
v = { opacity: 70, close: 1, animate: 1, fixed: 1, mask: 1, maskid: '', boxid: '', topsplit: 2, url: 0, post: 0, height: 0, width: 0, html: 0, iframe: 0 };
for (s in o) { v[s] = o[s] }
if (!p) {
j = parent.document.createElement('div'); j.className = 'tbox';
p = parent.document.createElement('div'); p.className = 'tinner';
b = parent.document.createElement('div'); b.className = 'tcontent';
m = parent.document.createElement('div'); m.className = 'tmask';
g = parent.document.createElement('div'); g.className = 'tclose'; g.v = 0;
parent.document.body.appendChild(m); parent.document.body.appendChild(j); j.appendChild(p); p.appendChild(b);
m.onmousemove = freetime;
m.onkeypress = freetime;
g.onclick=LINKSYS.box.hide; window.onresize=LINKSYS.box.resize;
} else {
j.style.display = 'none'; clearTimeout(p.ah); if (g.v) { p.removeChild(g); g.v = 0 }
}
v.height = v.height;
p.id = v.boxid; m.id = v.maskid; j.style.position = v.fixed ? 'fixed' : 'absolute';
if (v.html && !v.animate) {
p.style.backgroundImage = 'none'; b.innerHTML = v.html; b.style.display = '';
p.style.width = v.width ? v.width + 'px' : 'auto'; p.style.height = v.height ? v.height + 'px' : 'auto'
} else {
b.style.display = 'none';
if (!v.animate && v.width && v.height) {
p.style.width = v.width + 'px'; p.style.height = v.height + 'px'
} else {
p.style.width = p.style.height = '100px';
}
}
if (v.mask) { this.mask(); this.alpha(m, 1, v.opacity) } else { this.alpha(j, 1, 100) }
if (v.autohide) { p.ah = setTimeout(LINKSYS.box.hide, 1000 * v.autohide) } else { parent.document.onkeyup = LINKSYS.box.esc }
},
fill: function (c, u, k, a, w, h) {
if (u) {
if (v.image) {
var i = new Image(); i.onload = function () { w = w || i.width; h = h || i.height; LINKSYS.box.psh(i, a, w, h) }; i.src = v.image
} else if (v.iframe) {
this.psh('<iframe name="popup_gw" src="' + v.iframe + '" width="' + v.width + '" onload="frame13(this);" frameborder="0" height="' + v.height + '"></iframe>', a, w, h)
} else {
var x = (document.evaluate) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
x.onreadystatechange = function () {
if (x.readyState == 4 && x.status == 200) { p.style.backgroundImage = ''; LINKSYS.box.psh(x.responseText, a, w, h) }
};
if (k) {
x.open('POST', c, true); x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); x.send(k)
} else {
x.open('GET', c, true); x.send(null)
}
}
} else {
this.psh(c, a, w, h)
}
},
psh: function (c, a, w, h) {
if (typeof c == 'object') { b.appendChild(c) } else { b.innerHTML = c }
var x = p.style.width, y = p.style.height;
if (!w || !h) {
p.style.width = w ? w + 'px' : ''; p.style.height = h ? h + 'px' : ''; b.style.display = '';
if (!h) { h = parseInt(b.offsetHeight) }
if (!w) { w = parseInt(b.offsetWidth) }
b.style.display = 'none'
}
p.style.width = x; p.style.height = y;
this.size(w, h, a)
},
esc: function (e) { e = e || window.event; if (e.keyCode == 27) { LINKSYS.box.hide() } },
hide: function () {
return false;
},
resize: function () { LINKSYS.box.pos(); LINKSYS.box.mask() },
mask: function () {
m.style.height = this.total(1) + 'px'; m.style.width = this.total(0) + 'px';
m.style.background = '#000';
m.style.opacity = '0.6';
m.style.filter = 'alpha(opacity=60)';
},
pos: function () {
j.style.margin = 'auto';
j.style.position = 'absolute';
j.style.top = '0';
j.style.left = '0';
j.style.right = '0';
j.style.bottom = '0';
j.style.border = "1px solid #FFFFFF";
j.style.width = v.width + 'px';
j.style.height = v.height + 'px';
},
alpha: function (e, d, a) {
clearInterval(e.ai);
if (d) { e.style.opacity = 0; e.style.filter = 'alpha(opacity=0)'; e.style.display = 'block'; LINKSYS.box.pos() }
e.ai = setInterval(function () { LINKSYS.box.ta(e, a, d) }, 20)
},
ta: function (e, a, d) {
var o = Math.round(e.style.opacity * 100);
if (o == a) {
clearInterval(e.ai);
if (d == -1) {
e.style.display = 'none';
e == j ? LINKSYS.box.alpha(m, -1, 0, 2) : b.innerHTML = p.style.backgroundImage = ''
} else {
if (e == m) {
this.alpha(j, 1, 100)
} else {
j.style.filter = '';
LINKSYS.box.fill(v.html || v.url, v.url || v.iframe || v.image, v.post, v.animate, v.width, v.height)
}
}
} else {
var n = a - Math.floor(Math.abs(a - o) * .5) * d;
e.style.opacity = n / 100; e.style.filter = 'alpha(opacity=' + n + ')'
}
},
size: function (w, h, a) {
if (a) {
clearInterval(p.si); var wd = parseInt(p.style.width) > w ? -1 : 1, hd = parseInt(p.style.height) > h ? -1 : 1;
p.si = setInterval(function () { LINKSYS.box.ts(w, wd, h, hd) }, 20)
} else {
p.style.backgroundImage = 'none'; if (v.close) { p.appendChild(g); g.v = 1 }
p.style.width = w + 'px'; p.style.height = h + 'px'; b.style.display = ''; this.pos();
if (v.openjs) { v.openjs() }
}
},
ts: function (w, wd, h, hd) {
var cw = parseInt(p.style.width), ch = parseInt(p.style.height);
if (cw == w && ch == h) {
clearInterval(p.si); p.style.backgroundImage = 'none'; b.style.display = 'block'; if (v.close) { p.appendChild(g); g.v = 1 }
if (v.openjs) { v.openjs() }
} else {
if (cw != w) { p.style.width = (w - Math.floor(Math.abs(w - cw) * .6) * wd) + 'px' }
if (ch != h) { p.style.height = (h - Math.floor(Math.abs(h - ch) * .6) * hd) + 'px' }
this.pos()
}
},
top: function () { return parent.document.documentElement.scrollTop || parent.document.body.scrollTop },
width: function () { return self.innerWidth || parent.document.documentElement.clientWidth || parent.document.body.clientWidth },
height: function () { return self.innerHeight || parent.document.documentElement.clientHeight || parent.document.body.clientHeight },
total: function (d) {
var b = parent.document.body, e = parent.document.documentElement;
return d ? Math.max(Math.max(b.scrollHeight, e.scrollHeight), Math.max(b.clientHeight, e.clientHeight)) :
Math.max(Math.max(b.scrollWidth, e.scrollWidth), Math.max(b.clientWidth, e.clientWidth))
}
}
} ();
var urlo = parent.document.getElementById('mainFrame').getAttribute('src').match('/\.+/'); urlo += url;
LINKSYS.box.show({iframe:urlo,boxid:'frameless',width:widthUD,height:heightUD,fixed:false,maskid:'outerWindow',maskopacity:40,closejs:function(){}});
_top.urlo = urlo;
}
function getHelpUrl()
{
if(_top.isSmart) newUrl = "http://www.linksys.com/support/business/smartswitches/ug";
else newUrl = "http://www.linksys.com/support/business/managedswitches/ug";
return newUrl;
}
function sleep(m)
{
var then = new Date(new Date().getTime() + m);
while(new Date() < then){}
}
function checkMAC( mac, multy )
{
if (typeof(multy) == "undefined")
multy = false;
var pattern = "^([0-9a-f][0-9a-f])$";
var regExp = new RegExp(pattern, "i");
var mac_arr = mac.value.split( mac.value.split("")[2] );
if ( mac_arr.length == 6 )
{
var isError = false;
for (var i = 0; i < 6; i++)
{
if ( !regExp.test(mac_arr[i]) )
{
isError = true;
break;
}
}
if ( mac_arr.join("") == "000000000000" )
isError = true;
var tmp = hexStr2Bin(mac_arr[0]).split("");
if ( tmp[tmp.length-1] == "1" && !multy)
{
alert("Multicast MAC address is not allowed.");
mac.focus();
return false;
}
else
if ( tmp[tmp.length-1] == "0" && multy )
{
alert("You should enter Multicast MAC address.");
mac.focus();
return false;
}
if ( !isError )
return true;
}
alert("'" + mac.value + "' is not a valid value.");
mac.focus();
return false;
}
function hexStr2Bin( binStr )
{
var str = "";
var len = binStr.length;
var bin = new Array("0000","0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100","1101","1110","1111");
for(var i = 0; i < len; i++)
{
str += bin[parseInt(binStr.slice(i,i+1),16)];
}
return str ;
}
function checkIntegerValue(ctrlIntf, isRequired, minValue, maxValue)
{
var checkedValue = ctrlIntf.value;
var message = "";
while (true)
{
if (checkedValue == "")
{
if (isRequired)
{
message = "You may not enter a blank value into the required field.";
break;
}
else
{
return true;
}
}
var intValue = parseInt(checkedValue, 10);
if (isNaN(intValue) || (checkedValue.indexOf("-0") != -1) || (intValue.toString(10).length != checkedValue.length))
{
message = '"' + checkedValue + '" is not a valid integer value.';
break;
}
if ((!isNaN(minValue) && intValue < minValue) || (!isNaN(maxValue) && intValue > maxValue))
{
message = '"' + checkedValue + '" is out of range. The valid range is ' + minValue + '-' + maxValue + '.';
break;
}
return true;
}
alert(message);
ctrlIntf.focus();
return false;
}
function greyOut(Dis)
{
}
function greyOut2(Dis)
{
}
function IsNameExists(i_Name, i_RepeatName)
{
var retVal = false;
for( var i = 1 ; formele[i_RepeatName + i]!= null ; i++)
{
if(i_Name == formele[i_RepeatName + i].value )
{
retVal = true
}
}
return retVal;
}
function getBitFromMask(i_Octet, pIndex)
{
var funcOctetToBitsAsChars = octetToBitsAsChars;
var zeroMask = "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
var bitMap = null;
var hexChar = "";
var bitSect = "";
var result = "";
if(zeroMask != i_Octet)
{
hexChar = i_Octet.charAt(pIndex / 4);
bitSect = funcOctetToBitsAsChars(hexChar);
result = bitSect.charAt(pIndex % 4);
}
else
result = "0";
return result;
}
function InsertValueIntoOctetBitMap(i_BitMap, i_Index, i_Value)
{
var newOctet = null;
var newBitMap = null;
var octetIndex = parseInt(i_Index/4);
var digitNumber = i_Index%4;
var octetToChange = i_BitMap.charAt(octetIndex);
octetToChange = octetToBitsAsChars(octetToChange);
newOctet = parseInt(octetToChange.substring(0, digitNumber) + i_Value + octetToChange.substring(digitNumber+1),2);
newOctet = newOctet.toString(16);
newBitMap = i_BitMap.substring(0, octetIndex) + newOctet + i_BitMap.substring(octetIndex+1);
return newBitMap;
}
function DrawCloseDiv(){
document.write("</div>");
}
function DrawOpenDiv(){
document.write("<div id=loading align=center style='position:absolute; top:150; left:100; '>");
document.write("<b><font size=5>Loading data from the device......</b></font></div>");
document.write("<div id=site style='display:none;'>");
}
function HideLastTR(i_Table)
{
i = i_Table.tBodies[0].rows.length-1;
i_Table.tBodies[0].rows[i].style.display= "none";
var collInput = i_Table.tBodies[0].rows[i].getElementsByTagName("input");
for(var j = 0; j < collInput.length; j++)
collInput[j].disabled = true;
}
function HideElementById(id)
{
document.getElementById(id).style.display = "none";
}
function CreatePageHeaderAndMessage(pgTknObj, pgMsgId)
{
document.write("<table><tr><td><h3 id='pageHeader'></h3></td></tr></table>");
pgTknObj.setToken("pageHeader", _top.document.getElementById("caption").innerHTML);
return CreateLocalizedPageMessage(pgTknObj, pgMsgId);
}
function CreateLocalizedPageMessage(pgTknObj, pgMsgId)
{
var successMsgType = _top.STYLING.successMsgNS.msgType;
var pgMsgRes = CreatePageMessage(pgMsgId);
if (pgMsgRes == 2)
{
switch (successMsgType)
{
case 0:
pgTknObj.setTokenWithError("pageMessageLine0", "13000");
break;
case 1:
pgTknObj.setTokenWithError("pageMessageLine0", "13095", [[TKN_CALLBACK, LocalizeSuccessMessageLink]]);
break;
}
}
else if (pgMsgRes == 1)
{
var idx = 1;
var errValue, errMsgObj, errMsgTxt, errMsgDomId;
var errMsgArgArr = [];
var re = new RegExp("["+ String.fromCharCode(160) + "\\s]", "g");
while (!IsUndefOrNull(document.getElementsByName("mibError?" + idx)[0]))
{
errValue = document.getElementsByName("mibError?"+idx)[0].value;
errValue = errValue.replace(re, " ");
errMsgTxt = errValue.match(/.*?Diag=(.*)'(localMsg.*)?$/)[1];
errMsgObj = ParseServerErrorMessages(errValue, idx);
errMsgDomId = "pageMessageLine" + (idx - 1);
pgTknObj.setServerMessageToken(errMsgDomId, errMsgObj.msgId, errMsgTxt, errMsgObj.argArr);
idx ++;
}
}
return pgMsgRes;
function LocalizeSuccessMessageLink() {
var linkText = pgTknObj.getText("13096");
return pgTknObj.successMsgLink.replace(/(?=<\/a>)/i, linkText);
}
}
function ParseServerErrorMessages(str, idx)
{
var errMsg = {
msgId: "system_message_" + idx,
argArr: []
};
str = str.replace(/[\n\r]/g, "");
var msgStrArr = str.match(/<localMsg>(.*?)<\/localMsg>/);
if (msgStrArr)
str = msgStrArr[1];
else
return errMsg;
var msgIdArr = str.match(/<msgId>(.*?)<\/msgId>/);
if (msgIdArr)
errMsg.msgId = msgIdArr[1];
var pattern = /<arg>(.*?)<\/arg>/g;
var arg;
while ((arg = pattern.exec(str)) != null)
errMsg.argArr.push(arg[1]);
return errMsg;
}
function CreateLocalizedHintRangeDefault(cntrlId,hintlbl,unitsDictItem,minRangeVal,maxRangeVal,defaultVal,tokenObj,parentId)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
if(!unitsDictItem || unitsDictItem == "")
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10712",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_NUMBER,defaultVal]],parentId);
else
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10711",[[TKN_DICT_ITEM,unitsDictItem],[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_NUMBER,defaultVal]],parentId);
}
function CreateLocalizedHintRangeDefaultString(cntrlId,hintlbl,unitsDictItem,minRangeVal,maxRangeVal,defaultDictItem,tokenObj,parentId)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
if(!unitsDictItem || unitsDictItem == "")
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10712",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_DICT_ITEM,defaultDictItem]],parentId);
else
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10711",[[TKN_DICT_ITEM,unitsDictItem],[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_DICT_ITEM,defaultDictItem]],parentId);
}
function CreateLocalizedHintCharRange(cntrlId,hintlbl,minRangeVal,maxRangeVal,defaultVal,isConst,tokenObj,parentId)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
var cntrl=document.getElementById(cntrlId);
var str=cntrl.value.trim();
var curLength=calculateLocalizedStrLength(str);
setHint(cntrlId,hintlbl,curLength.toString(),maxRangeVal,defaultVal,isConst,tokenObj,parentId);
if(parentId)
{
cntrl.onkeyup = function(e){
if (window.event)
e = window.event;
else if (!e)
return true;
str=cntrl.value.trim();;
curLength=calculateLocalizedStrLength(str);
setHint(cntrlId,hintlbl,curLength.toString(),maxRangeVal,defaultVal,isConst,tokenObj,parentId);
checkStringWithHintLength(cntrl,maxRangeVal,curLength,tokenObj,e);
}
}
}
function setHint(cntrlId,hintlbl,minRangeVal,maxRangeVal,defaultVal,isConst,tokenObj,parentId)
{
if(!defaultVal || defaultVal == "")
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10716",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal]],parentId);
else
{
if(isConst)
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10717",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_CONST,defaultVal]],parentId);
else
tokenObj.createLocalizedLabel("", "hint", cntrlId ,hintlbl, false,"10717",[[TKN_NUMBER,minRangeVal],[TKN_NUMBER,maxRangeVal],[TKN_DICT_ITEM,defaultVal]],parentId);
}
}
var GUIBlockLimit = 10000;
var GUILimitCounter = 0;
function setGUIVisibility(callBackFunc)
{
if (!IsUndefOrNull(self.formele) || GUILimitCounter >= GUIBlockLimit) {
document.body.style.visibility = "";
if(callBackFunc)eval(callBackFunc);
}
else
{
document.body.style.visibility = "hidden";
GUILimitCounter += 50;
setTimeout('setGUIVisibility("'+callBackFunc+'")',50);
}
}
function handlePageMessageInDialogue(tokenObj, pgMsgId, withGUIBlock, callBackFunc, localLimit,urlPaging)
{
if(localLimit)GUIBlockLimit = localLimit;
if(!callBackFunc)callBackFunc = "";
var pgMsgRes = CreateLocalizedPageMessage(tokenObj, pgMsgId);
if (pgMsgRes == 1) {
refreshOpener();
} else if (pgMsgRes == 2) {
if(!_top.STYLING.alertBox.closeDialog)
{
if (urlPaging) {
refreshOpenerPaging(urlPaging)
} else {
refreshOpener();
}
GUILimitCounter = 250;
if(withGUIBlock)setTimeout('setGUIVisibility("'+callBackFunc+'")',250);
}
}
else if (callBackFunc != "") {
setTimeout(callBackFunc, 250);
}
return pgMsgRes;
}
function CreateTableHeaderButton(txt, onclick, id,parentId)
{
var btnLiteral = "<table width=100 border=0 onmousedown='SetPressedClass(this)' onmouseup='SetHoverClass(this)'";
btnLiteral += " onmouseover='SetHoverClass(this)'";
btnLiteral += " onmouseout='SetNormalClass(this)'";
btnLiteral += " class='btn_normal'";
if (!IsUndefOrNull(onclick))
btnLiteral += " onclick=\"if(this.className!='btn_disabled'){"+onclick+"}; return false;\"";
btnLiteral += "><tbody><tr><td style='padding-left:0px;padding-right:0px' class='btnTD1' width='9'><img alt='' src='../styling/images/empty.gif' width='9' height='1' /></td>";
btnLiteral += "<td style='padding-left:0px;padding-right:0px' class='btnTD2' width='82'><a href='javascript:void(0)'";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"'";
if (IsUndefOrNull(txt))
txt = "";
btnLiteral += " title='"+txt+"'>"+txt+"</a></td>";
btnLiteral += "<td style='padding-left:0px;padding-right:0px' class='btnTD3' width='9'><img alt='' src='../styling/images/empty.gif' width='9' height='1' /></td></tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(btnLiteral);
else
document.getElementById(parentId).innerHTML = btnLiteral;
return;
}
function startTimingPost()
{
_top.postStartTimer = new Date();
}
function startTimingLoad()
{
_top.loadStartTimer = new Date();
}
function displayTiming()
{
_top.endTimer = new Date();
var res;
var resStr = new Array();
if(_top.timeSetAndLoad)
{
if(_top.postStartTimer)
{
res = _top.endTimer.getTime() - _top.postStartTimer.getTime();
resStr.push("Time from start of post to screen loading: " + res);
}
}
if(_top.timeLoading)
{
if(_top.loadStartTimer)
{
res = _top.endTimer.getTime() - _top.loadStartTimer.getTime();
resStr.push("Screen loading time: " + res);
}
}
_top.loadStartTimer = _top.postStartTimer = _top.endTimer = null;
if(resStr.length > 0)alert(resStr.join("\n"));
}
function GetBodyWidth()
{
var mainTable=document.body.getElementsByTagName("table")[1];
var tdArr=mainTable.getElementsByTagName("td");
for(var i=0;i<tdArr.length;i++)
if(tdArr[i].className=="formBody")
{
return mainTable.clientWidth;
}
return (document.body.clientWidth-20);
}
function setLastClmnWidth(tblId,trId,onLoad)
{
var tblWidth=document.getElementById(tblId).clientWidth;
var bodyWidth=GetBodyWidth();
var thArr=document.getElementById(trId).getElementsByTagName("th");
var i = thArr.length - 1;
var lastTh;
while(i >= 0)
{
if(thArr[i].style.display != "none")
{
lastTh = thArr[i];
break;
}
i--;
}
if(i < 0)
lastTh=thArr[thArr.length-1];
if(onLoad)
{
minTableWidth=tblWidth;
minTdWidth=lastTh.clientWidth;
if(tblWidth<bodyWidth)
lastTh.style.width=lastTh.clientWidth+(bodyWidth-tblWidth);
}
else
{
if(bodyWidth!=prevBodyWidth)
{
if(minTableWidth<bodyWidth)
{
document.getElementById(tblId).style.width="";
lastTh.style.width=prevTdWidth+(bodyWidth-prevBodyWidth);
}
else
{
document.getElementById(tblId).style.width=minTableWidth;
lastTh.style.width=minTdWidth;
}
}
}
if(document.getElementById(tblId).clientWidth<bodyWidth)
lastTh.style.width=lastTh.clientWidth+(bodyWidth-document.getElementById(tblId).clientWidth);
prevTdWidth=lastTh.clientWidth;
prevBodyWidth=bodyWidth;
}
function addOptToSortedArr(opt,id,formele)
{
var index=null;
var select=formele[id];
var maxIndex=select.options.length;
for(var i=0;i<maxIndex;i++)
{
if(opt.value==select.options[i].value)return;
if(parseInt(opt.value)<parseInt(select.options[i].value))
{
index=i;
break;
}
}
if(index!=null)
{
var nweOpt=new Option(select.options[maxIndex-1].text,select.options[maxIndex-1].value);
nweOpt.id=select.options[maxIndex-1].id;
select.options[maxIndex]=nweOpt;
for(var i=(maxIndex-1);i>index;i--)
{
select.options[i].text=select.options[i-1].text;
select.options[i].value=select.options[i-1].value;
select.options[i].id=select.options[i-1].id;
}
select.options[index].text=opt.text;
select.options[index].value=opt.value;
select.options[index].id=opt.id;
}
else
select.options[select.options.length]=opt;
}
function openLink(url, hrefURL)
{
var urlArr = url.split("~");
var rootFolder = _top.document.getElementById(urlArr[0]);
var rootFolderImage = rootFolder.getElementsByTagName("img")[0];
if (rootFolderImage.lang=="1")
{
try
{
rootFolderImage.click();
}
catch(ex)
{
rootFolderImage.onclick(rootFolderImage.onclick);
}
}
for (i=1;i<urlArr.length;i++)
{
openLinkRecursive(urlArr,i, hrefURL);
}
}
function openLinkRecursive(urlArr, index, hrefURL)
{
var id = "";
for (j=0;j<=index;j++)
{
id+=urlArr[j];
if (j<index)
id+="~";
}
var ele = _top.document.getElementById(id);
if (ele.childNodes[0].lang.indexOf("docum")!=-1 )
{
try
{
if(hrefURL != null)
{
tempID = ele.childNodes[0].childNodes[3].id;
ele.childNodes[0].childNodes[3].id = hrefURL;
ele.childNodes[0].childNodes[3].click();
ele.childNodes[0].childNodes[3].id = tempID;
_top.selectedId = tempID;
}
else
ele.childNodes[0].childNodes[3].click();
}
catch(ex)
{
if(hrefURL != null)
{
ele.childNodes[0].childNodes[3].onclick(ele.childNodes[0].childNodes[3].onclick);
ele.childNodes[0].childNodes[3].id = tempID;
_top.selectedId = tempID;
}
else
ele.childNodes[0].childNodes[3].onclick(ele.childNodes[0].childNodes[3].onclick);
}
}
else
{
if (ele.childNodes[0].childNodes[1].childNodes[0].lang=="1")
{
try
{
ele.childNodes[0].childNodes[2].click();
}
catch(ex)
{
ele.childNodes[0].childNodes[2].onclick();
}
ele.childNodes[0].childNodes[2].focus();
}
}
}
function ResourceHandler(src, id)
{
this.status = 0;
var resourceNode = document.getElementById(id);
var that = this;
this.load = function()
{
this.status = 1;
resourceNode.onload = function(){that.status = 2};
resourceNode.onerror = function(){that.status = -1};
resourceNode.onabort = function(){that.status = -1};
resourceNode.src = src;
setTimeout(timer, 60000);
}
function timer()
{
if (that.status == 1)
resourceNode.src = "";
}
}
function ResourceCollection(callback)
{
var intervalId = 0;
var that = this;
this.resourceHandlerArr = [];
if (typeof callback != "function")
callback = function(){};
this.startLoad = function()
{
for (var i = 0; i < Math.min(this.queuesNumber, this.resourceHandlerArr.length); i ++)
loader();
if (this.queuesNumber && this.resourceHandlerArr.length)
intervalId = setInterval(loader, 20);
}
function loader()
{
var status;
var loadingCount = 0;
var finishedCount = 0;
var idxToLoad = -1;
for (var i = 0; i < that.resourceHandlerArr.length; i ++)
{
status = that.resourceHandlerArr[i].status;
if (status == 0)
{
idxToLoad = i;
break;
}
else if (status == 1)
loadingCount ++;
else
finishedCount ++;
}
if (finishedCount == that.resourceHandlerArr.length)
{
clearInterval(intervalId);
callback();
return;
}
if (loadingCount >= that.queuesNumber)
return;
if (idxToLoad == -1)
return;
else
that.resourceHandlerArr[idxToLoad].load();
}
}
ResourceCollection.prototype.queuesNumber = 2;
ResourceCollection.prototype.addResourceHandler = function(src, id)
{
this.resourceHandlerArr.push(new ResourceHandler(src, id));
}
if (_top.checkLogoutTimeout)
_top.checkLogoutTimeout(true);
function GetPagingCookie()
{
var defaultNumberOfEntriesPerPage = 50;
var result = _top.get_cookie(_top.cookiePreffix+"_numberOfEntriesPerPage");
if (result == null)
{
SetPagingCookie(defaultNumberOfEntriesPerPage);
result = defaultNumberOfEntriesPerPage;
}
return result;
}
function SetPagingCookie(numberOfEntriesPerPage)
{
var expdate = new Date();
expdate.setDate(expdate.getDate()+30);
_top.set_cookie(_top.cookiePreffix+"_numberOfEntriesPerPage",numberOfEntriesPerPage,expdate);
}
function GetStaticPagingCookie()
{
var defaultNumberOfEntriesPerPage = 10;
var result = _top.get_cookie(_top.cookiePreffix+"_StaticNumberOfEntriesPerPage");
if (result == null)
{
SetStaticPagingCookie(defaultNumberOfEntriesPerPage);
result = defaultNumberOfEntriesPerPage;
}
return result;
}
function SetStaticPagingCookie(numberOfEntriesPerPage)
{
var expdate = new Date();
expdate.setDate(expdate.getDate()+30);
_top.set_cookie(_top.cookiePreffix+"_StaticNumberOfEntriesPerPage",numberOfEntriesPerPage,expdate);
}
function AddGWAllOption(tkn,slct,value)
{
newOption=new Option();
newOption.id="optRecordFilterAll";
newOption.value=value;
slct.options[slct.options.length]=newOption;
tkn.setTokenWithError(newOption.id);
tkn.setTokenAttribute(newOption.id,"text","10048");
}
function buildComboOptions(tkn,type)
{
var slct = document.getElementById("recordFilter");
if(type=="static")
{
var NumOfPorts = _top.NumberOfPortPerModuleArr[_top.firstPresentModule];
if (_top.Units)
{
for (var i = 0 ; i < _top.NumberOfModules ; i++)
{
var ModuleNumber = _top.RealModuleNameArr[i];
var ModulePorts = _top.NumberOfPortPerModuleArr[ModuleNumber];
if (ModulePorts > NumOfPorts)
NumOfPorts = ModulePorts;
}
}
if (NumOfPorts <= 10)
{
slct.parentNode.style.display="none";
return;
}
if (NumOfPorts <= 28 && NumOfPorts >10)
{
slct[slct.length] = new Option(10,10);
AddGWAllOption(tkn,slct,NumOfPorts);
}
else if (NumOfPorts > 28)
{
slct[slct.length] = new Option(10,10);
slct[slct.length] = new Option(26,26);
AddGWAllOption(tkn,slct,NumOfPorts);
}
}
else
{
for(var i=(_top.dynamicPagingOptions.length-1);i>=0;i--)
slct[slct.length] = new Option(_top.dynamicPagingOptions[i],_top.dynamicPagingOptions[i]);
}
}
function getPagingSizeFromCookie(slct,tblId,type)
{
var tableID;
if(!tblId)
{
var tblElem = slct.parentNode;
while(tblElem.tagName.toLowerCase() != "table")
tblElem = tblElem.parentNode;
tableID = tblElem.id;
}
else
tableID = tblId;
var tableCookieVal = parseInt(_top.getTableBits(_top.tableHash[tableID]),2);
if (typeof(type) == "undefined")
type = "dynamic";
if (type != "dynamic")
{
switch (tableCookieVal)
{
case 0:
tableCookieVal = 0;
break;
case 1:
if (slct.length == 3)
tableCookieVal = 2 ;
else
tableCookieVal = 1 ;
break;
case 2:
if (slct.length == 3)
tableCookieVal = 1;
else
tableCookieVal = 0 ;
break;
default:
tableCookieVal = 0 ;
break;
}
_top.numberOfEntriesPerPage = slct.options[slct.length - 1 - tableCookieVal].value;
}
return tableCookieVal;
}
function updatePagingCookie(type)
{
var slct=document.getElementById("recordFilter");
if(!slct)return;
var cookieValDec = slct.length - slct.selectedIndex - 1;
if (typeof(type) == "undefined")
type = "dynamic";
if (type != "dynamic")
{
if (slct.length == slct.selectedIndex + 1)
cookieValDec = 0;
else if (slct.selectedIndex == 0)
cookieValDec = 1;
else
cookieValDec = 2;
}
var num = new Number(cookieValDec);
var tblElem = slct.parentNode;
while(tblElem.tagName.toLowerCase() != "table")
tblElem = tblElem.parentNode;
var tableID = tblElem.id;
_top.setTableBits(_top.tableHash[tableID], num.toString(2));
top.numberOfEntriesPerPage=parseInt(slct.value);
}
function setLinkDecoration(id)
{
var ctrl=document.getElementById(id);
var linksArr=ctrl.parentNode.getElementsByTagName("a");
for(var j=0;j<linksArr.length;j++)
linksArr[j].className="pagingLink";
ctrl.className="selectedPagingLink"
}
function getUnitPortSelectedValue()
{
var interfaceValue;
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
if(radioPort.checked == true)
{
interfaceValue = slctPort[slctPort.selectedIndex].value;
}
else
{
interfaceValue = slctTrunk[slctTrunk.selectedIndex].value;
}
return interfaceValue;
}
function getUnitPortSelectedText()
{
var interfaceText;
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
if(radioPort.checked == true)
{
interfaceText = slctPort[slctPort.selectedIndex].text;
}
else
{
interfaceText = slctTrunk[slctTrunk.selectedIndex].text;
}
return interfaceText;
}
function disableTrunkList()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
slctTrunk.disabled=true;
slctPort.disabled=false;
if (slctUnit)
slctUnit.disabled=false;
radioPort.checked = true;
radioTrunk.checked = false;
HandleLabels();
HandleControls();
}
function disablePortList()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=true;
slctTrunk.disabled=false;
radioPort.checked = false;
radioTrunk.checked = true;
HandleLabels();
HandleControls();
}
function UpdateUnitPortsLags(portIndex,isGW)
{
if ((portIndex == "") || (typeof(portIndex) == "undefined"))
portIndex = _top.firstPresentPort;
var i=0;
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
radioPort.checked = false;
radioTrunk.checked = false;
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
while (slctTrunk.options[i] != null)
{
var found = false;
if (isGW)
{
if ((slctTrunk.options[i].value == portIndex) || (slctTrunk.options[i].text == portIndex))
found = true;
}
else
{
if (slctTrunk.options[i].value == portIndex)
found = true;
}
if (found)
{
slctTrunk.selectedIndex=i;
slctPort.selectedIndex=0;
radioTrunk.checked = true;
slctPort.disabled = true;
if (slctUnit)
slctUnit.disabled=true;
slctTrunk.disabled=false;
break;
}
i++;
}
i=0;
if(radioTrunk.checked == false){
while (slctPort.options[i]!=null)
{
var found = false;
if (isGW)
{
if ((slctPort.options[i].value == portIndex) || (slctPort.options[i].text == portIndex))
found = true;
}
else
{
if (slctPort.options[i].value == portIndex)
found = true;
}
if (found)
{
slctPort.selectedIndex=i;
slctTrunk.selectedIndex=0;
radioPort.checked=true;
slctTrunk.disabled=true;
slctPort.disabled=false;
break;
}
i++;
}
}
if((radioTrunk.checked == false)&&(radioPort.checked == false)){
radioPort.checked=true;
slctTrunk.disabled=true;
slctPort.disabled=false;
if (slctUnit)
slctUnit.disabled=false;
slctTrunk.selectedIndex=0;
}
if (!_top.isStandAlone)
{
var UnitNum = _top.firstPresentModule;
if (isGW)
{
var port_index = getGWIfIndexByName(portIndex);
if (port_index)
if (port_index < _top.trunkFirstIndex)
UnitNum = _top.moduleNumPerPortArr[port_index];
}
if ((portIndex < _top.trunkFirstIndex) && (!isGW))
UnitNum = _top.moduleNumPerPortArr[portIndex];
selectOptionByValue(slctUnit,UnitNum);
}
}
function selectUnit(slctUnit,slctPort,isGW)
{
if ((slctPort == null) || (typeof(slctPort) == "undefined"))
slctPort = 'rlPhdPortsIfIndex$select';
var UnitNum = parseInt(slctUnit.options[slctUnit.selectedIndex].value,10);
if(isGW)
{
fillUnitsPerPort(slctPort, slctUnit.id)
document.getElementById(slctPort).selectedIndex=0;
}
else
addPresentPortsSelectionList(document.forms[0],slctPort,'','n',true,UnitNum);
}
function FillUnitSelect(element)
{
var value = null;
var text = null;
var option = null;
var unitSelect = document.getElementById(element);
unitSelect.options.length = 0 ;
for (var i=0; i<=(_top.RealModuleNameArr.length - 1);i++)
{
value = _top.RealModuleNameArr[i];
text = _top.RealModuleNameArr[i] + "/" + _top.slotPerModuleArr[parseInt(_top.RealModuleNameArr[i],10)];
option = new Option(text,value);
unitSelect.options.add(option);
}
}
function updateUnitSelectWithSlots(cntrl)
{
if(typeof(cntrl) == 'string')
cntrl = document.getElementById(cntrl);
var newText;
for(var i = 0; i < cntrl.options.length; i++)
{
newText = cntrl.options[i].text + "/" + _top.slotPerModuleArr[parseInt(cntrl.options[i].text,10)];
cntrl.options[i].value = cntrl.options[i].text;
cntrl.options[i].text = newText;
}
}
function disableUnitPortsLagsSelect()
{
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
slctTrunk.disabled=true;
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=false;
}
function disableUnitPortsLags()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
radioPort.disabled=true;
radioTrunk.disabled=true;
slctTrunk.disabled=true;
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=true;
}
function enableUnitPortsLags()
{
var radioPort = document.getElementById("radioPort");
var radioTrunk = document.getElementById("radioTrunk");
var slctTrunk = document.getElementById("trunk");
var slctPort = document.getElementById("rlPhdPortsIfIndex$select");
var slctUnit = document.getElementById("rlPhdModuleIndex$select");
radioPort.disabled=false;
radioTrunk.disabled=false;
if (radioPort.checked)
{
slctTrunk.disabled=true;
slctPort.disabled=false;
if (slctUnit)
slctUnit.disabled=false;
}
else
{
slctTrunk.disabled=false;
slctPort.disabled=true;
if (slctUnit)
slctUnit.disabled=true;
}
if (slctTrunk.length == 0)
slctTrunk.disabled=true;
}
function checkStyleWidth() {
var ua = navigator.userAgent;
if (ua.search(/[\s*MSIE\s*](9.0)/) !== -1) {
function getStyle(element) { return parent.getComputedStyle(element, null) || element.currentStyle; }
var args = checkStyleWidth.arguments;
function w(id) { e = getStyle(document.getElementById(id)).width; e = parseFloat(e); return e; };
function pw(id) { r = getStyle(document.getElementById(id).parentNode).width; r = parseFloat(r); return r; }
function $(id) {
if ((id != '') && (id != undefined)) {
if (document.getElementById(id)) {
return document.getElementById(id)
} else { return false}
}
};
function unsel(id) {
if ($(id)) {
if (!$(id).getAttribute('unselectable')) { $(id).setAttribute('unselectable', 'on'); } else { return true }
} else { return false }
}
for (var i = 0; i < args.length; i++) {
if ($(args[i])) {
$(args[i]).style.width = (pw(args[i]) + 25) + 'px';
unsel(args[i]);
}
else { continue }
}
}
}
function writeUnitPortsLagsHTML(tokenObj, portIndex, eventFunc, IsLags, className, dictId, parentId, isGW, transType, colSpan, tableColSpan) {
function tableColspan() {
if (!tableColSpan) { return ''; }
else { return 'colspan="' + tableColSpan +'"' }
}
if (portIndex == null)
portIndex = _top.firstPresentPort;
if (eventFunc == null)
eventFunc = "";
if ((className == null) || (typeof (className) == "undefined"))
className = "";
if ((dictId == null) || (typeof (dictId) == "undefined") || (dictId == ""))
dictId = "10013";
if ((isGW == null) || (typeof (isGW) == "undefined") || (isGW == ""))
isGW = false;
if ((transType == null) || (typeof (transType) == "undefined") || (transType == ""))
transType = null;
if (colSpan != null)
colSpan = '" colspan="' + colSpan;
else
colSpan = '';
var pgTkn = tokenObj;
if (!parentId) {
document.write('<tr>');
document.write('<td class="' + className + '" >');
pgTkn.createLocalizedLabel("", "left", "", "lblInterface", false, dictId);
document.write('</td>');
var newClassName = "";
var classArr = className.split(' ');
for (var i=0;i<classArr.length;i++){
if (classArr[i] != 'notRequired') {
if (newClassName == "")
newClassName += classArr[i];
else
newClassName += ' ' + classArr[i];
}
}
document.write('<td class="' + newClassName + colSpan + '" ' + tableColspan() + '>');
document.write('<table id="FirstUniqUnitPortsLagsHTML">');
document.write('<tr>');
document.write('<td');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
document.write('<input type="radio" id="radioPort" name="PortTrunkSelect" value="1" onClick="disableTrunkList();' + eventFunc + '";><label for="radioPort"></label>');
document.write('</td>');
if (!_top.isStandAlone) {
document.write('<td id="tdLblUnit"');
if (IsLags)
document.write(' class="right" ');
document.write('>');
pgTkn.createLocalizedLabel("", "", "radioPort", "lblUnit", false, "10081");
document.write('</td>');
document.write('<td class="right" id="tdSlctUnit">');
document.write('<div class="overr"><select unselectable="on" Name="rlPhdModuleIndex$select" ID="rlPhdModuleIndex$select" size="1" onChange="selectUnit(this);' + eventFunc + '"></select></div>');
FillUnitSelect("rlPhdModuleIndex$select");
document.write('</td>');
/*@cc_on@if(@_jscript){ checkStyleWidth('rlPhdModuleIndex$select') } @end@*/
}
document.write('<td id="tdLblPort"');
if (!_top.isStandAlone || IsLags)
document.write(' class="right" ');
document.write('>');
if (!_top.isStandAlone || IsLags) {
pgTkn.createLocalizedLabel("", "", "radioPort", "lblPort", false, "10014");
document.write('</td>');
document.write('<td class="right tdPortSelect">');
}
else {
document.write('</td>');
document.write('<td>');
}
document.write('<div class="overr"><select unselectable="on" name="rlPhdPortsIfIndex$select" onChange="' + eventFunc + '" ID="rlPhdPortsIfIndex$select"><option></option></select></div>');
/*@cc_on@if(@_jscript){checkStyleWidth('rlPhdPortsIfIndex$select');} @end@*/
if (!_top.isStandAlone) {
var UnitNum = _top.firstPresentModule;
if (portIndex < 1000)
UnitNum = _top.moduleNumPerPortArr[portIndex];
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n', true, UnitNum);
}
else
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n');
document.write('</td>');
document.write('<td class="right"');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
document.write('<input type="radio" id=radioTrunk name="PortTrunkSelect" value="2" onClick="disablePortList();' + eventFunc + '"><label for="radioTrunk"></label>');
document.write('</td>');
document.write('<td id="tdLblLag" class="right"');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
pgTkn.createLocalizedLabel("", "", "radioTrunk", "lblLAG", false, "10015");
document.write('</td>');
document.write('<td class="right"');
if (!IsLags)
document.write(' style="display:none;" ');
document.write('>');
document.write('<div class="overr"><select name="trunk" unselectable="on" size="1" onChange="' + eventFunc + '" ID="trunk"><option value="0"></option></select></div>');
addSelectListFromTrunkArray("trunk", _top.presentTrunkArr, "");
if (document.forms[0].elements["trunk"].length == 0) {
document.forms[0].elements["PortTrunkSelect"][1].disabled = true;
}
document.write('</td>');
/*@cc_on@if(@_jscript){ checkStyleWidth('trunk') } @end@*/
document.write('</tr>');
document.write('</table>');
document.write('</td>');
document.write('</tr>');
}
else {
var btnLiteral = '<table><tr><td';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '><input type="radio" id="radioPort" name="PortTrunkSelect" value="1" onClick="disableTrunkList();' + eventFunc + '"; /><label for="radioPort"></label></td>';
if (!_top.isStandAlone) {
btnLiteral += '<td id="tdLblUnit"';
if (IsLags)
btnLiteral += ' class="right" ';
btnLiteral += '></td><td class="right"><div class="overr"><select Name="rlPhdModuleIndex$select" unselectable="on" ID="rlPhdModuleIndex$select" size="1" onChange="selectUnit(this,null,' + isGW + ');' + eventFunc + '"></select></div></td>';
}
btnLiteral += '<td id="tdLblPort"';
if (!_top.isStandAlone || IsLags)
btnLiteral += ' class="right" ';
btnLiteral += '></td><td ';
if (!_top.isStandAlone || IsLags)
btnLiteral += 'class="right"';
btnLiteral += '><div class="overr"><select name="rlPhdPortsIfIndex$select" unselectable="on" onChange="' + eventFunc + '" ID="rlPhdPortsIfIndex$select"><option></option></select></div>';
btnLiteral += '</td><td class="right"';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '>';
btnLiteral += '<input type="radio" id="radioTrunk" name="PortTrunkSelect" value="2" onClick="disablePortList();' + eventFunc + '"/><label for="radioTrunk"></label>';
btnLiteral += '</td>';
btnLiteral += '<td id="tdLblLag" class="right"';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '></td>';
btnLiteral += '<td class="right"';
if (!IsLags)
btnLiteral += ' style="display:none;" ';
btnLiteral += '>';
btnLiteral += '<div class="overr"><select name="trunk" unselectable="on" size="1" onChange="' + eventFunc + '" ID="trunk"><option value="0"></option></select></div>';
btnLiteral += '</td>';
btnLiteral += '</tr>';
btnLiteral += '</table>';
document.getElementById(parentId).innerHTML = btnLiteral;
/*@cc_on@if(@_jscript){ if (!_top.isStandAlone) { checkStyleWidth('rlPhdModuleIndex$select') }; checkStyleWidth('rlPhdPortsIfIndex$select', 'trunk') } @end@*/
//pgTkn.createLocalizedLabel("", "left", "","lblInterface", false,dictId,"tdLblInterface"); //Interface
if (!_top.isStandAlone || IsLags)
pgTkn.createLocalizedLabel("", "", "", "lblPort", false, "10014", null, "tdLblPort");
if (IsLags) {
pgTkn.createLocalizedLabel("", "", "", "lblLAG", false, "10015", null, "tdLblLag");
addSelectListFromTrunkArray("trunk", _top.presentTrunkArr, "", isGW, tokenObj);
if (document.getElementById("trunk").length == 0) {
document.getElementById("radioTrunk").disabled = true;
}
}
if (!_top.isStandAlone) {
pgTkn.createLocalizedLabel("", "", "", "lblUnit", false, "10081", null, "tdLblUnit");
FillUnitSelect("rlPhdModuleIndex$select");
var UnitNum = _top.firstPresentModule;
if (portIndex < 1000)
UnitNum = _top.moduleNumPerPortArr[portIndex];
selectOptionByValue(document.getElementById("rlPhdModuleIndex$select"), UnitNum);
if (isGW)
fillUnitsPerPort('rlPhdPortsIfIndex$select', 'rlPhdModuleIndex$select', transType);
else
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n', true, UnitNum);
}
else
if (isGW)
fillAllPorts('rlPhdPortsIfIndex$select', transType)
else
addPresentPortsSelectionList(document.forms[0], 'rlPhdPortsIfIndex$select', '', 'n');
}
}
var VLAN_ListCtrl = "slctVlan";
var VLAN_SubmitPostBackString = "";
var VLAN_serverXmlHttp = null;
var VLAN_myPgTkn = null;
var VLAN_DicID = '';
var VLAN_Array = new Array();
var VLAN_VLANListType = 1;
var VLAN_updateControlsType = 1;
var VLAN_VLANListString = '';
var VLAN_VLANCount = 0;
function getCurrentVLANStatus(VLANCtrl, callBackString, showVLAN, VlanListType, updateControlsType, objTkn)
{
if(updateControlsType != null) VLAN_updateControlsType = updateControlsType;
if(VLAN_updateControlsType == 1)
if(VLANCtrl != null) VLAN_ListCtrl = VLANCtrl;
if(callBackString != null) VLAN_SubmitPostBackString = callBackString;
if(objTkn != null) VLAN_myPgTkn = objTkn;
if(showVLAN == true) VLAN_DicID = '10205';
if(VlanListType != null) VLAN_VLANListType = VlanListType;
VLAN_serverXmlHttp = null;
if(VLAN_updateControlsType == 1)
{
if(typeof(VLAN_ListCtrl) == 'string')
VLAN_ListCtrl = document.getElementById(VLAN_ListCtrl);
if(!VLAN_ListCtrl)
return false;
}
if (window.XMLHttpRequest) {
VLAN_serverXmlHttp=new XMLHttpRequest();
}
else if (!document.evaluate){
VLAN_serverXmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
var URL = window.location.href;
var sectionName;
switch(VLAN_VLANListType)
{
case 1:
sectionName = '/wcd?{VLANCurrentStatus}';
break;
case 2:
case 3:
sectionName = '/wcd?{VLANGlobal}';
break;
default:
sectionName = '/wcd?{VLANCurrentStatus}';
break;
}
var newPath = sectionName;
URL = newPath;
if(VLAN_serverXmlHttp != null)
{
VLAN_serverXmlHttp.onreadystatechange = currentVLANQueriedStatus;
VLAN_serverXmlHttp.open("GET",URL,true);
VLAN_serverXmlHttp.send(null);
}
}
function currentVLANQueriedStatus()
{
if(typeof VLAN_serverXmlHttp != "undefined")
if(VLAN_serverXmlHttp.readyState == 4)
{
if (VLAN_serverXmlHttp.status==200)
{
var VLANStatusXML = VLAN_serverXmlHttp.responseText.trim();
var VLANSectionStartField,VLANSectionEndField;
var AddDefaultVLAN = false;
switch(VLAN_VLANListType)
{
case 1:
VLANSectionStartField = '<currentVLANs>';
VLANSectionEndField = '</currentVLANs>';
break;
case 2:
AddDefaultVLAN = true;
case 3:
VLANSectionStartField = '<staticVLANs>';
VLANSectionEndField = '</staticVLANs>';
break;
default:
VLANSectionStartField = '<currentVLANs>';
VLANSectionEndField = '</currentVLANs>';
break;
}
var startInd = VLANStatusXML.indexOf(VLANSectionStartField) + VLANSectionStartField.length;
if(startInd == (VLANSectionStartField.length - 1))
return false;
var endInd = VLANStatusXML.indexOf(VLANSectionEndField);
VLAN_VLANListString = VLANStatusXML.substring(startInd, endInd);
if(VLAN_updateControlsType <= 2)
setVLANArray(AddDefaultVLAN);
if(VLAN_updateControlsType == 1)
setVLANCombobox();
eval(VLAN_SubmitPostBackString);
}
}
}
function setVLANCombobox()
{
var newOpt, newVal;
VLAN_ListCtrl.options.length = 0;
for(var i = 0; i < VLAN_Array.length; i++)
{
newVal = VLAN_Array[i];
newOpt = new Option(newVal, newVal);
newOpt.id = "optVlan_" + i;
VLAN_ListCtrl.options[VLAN_ListCtrl.options.length] = newOpt;
if(VLAN_DicID != '')
{
if(VLAN_myPgTkn != null)
VLAN_myPgTkn.setTokenWithError("optVlan_" + i, VLAN_DicID, [[TKN_CONST, newVal.toString()]]);
else
pgTkn.setTokenWithError("optVlan_" + i, VLAN_DicID, [[TKN_CONST, newVal.toString()]]);
}
}
if(VLAN_Array.length == 0)
VLAN_ListCtrl.disabled = true;
}
function setVLANArray(AddDefaultVLAN)
{
if(AddDefaultVLAN && VLAN_VLANListString.length == 0)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
var firstVLAN, lastVLAN;
var currentVLANs = new Array();
if(VLAN_VLANListString != "")
currentVLANs = VLAN_VLANListString.split(',');
for(var i=0; i<currentVLANs.length; i++)
{
startInd = currentVLANs[i].indexOf('-')
if(startInd != -1)
{
firstVLAN = parseInt(currentVLANs[i].substring(0,startInd),10);
lastVLAN = parseInt(currentVLANs[i].substring(startInd + 1),10);
if(AddDefaultVLAN && _top.defaultVlanId < firstVLAN)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
for(var j = firstVLAN; j <= lastVLAN; j++)
VLAN_Array.push(j);
}
else
{
firstVLAN = parseInt(currentVLANs[i],10);
if(AddDefaultVLAN && _top.defaultVlanId < firstVLAN)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
VLAN_Array.push(firstVLAN);
}
}
if(AddDefaultVLAN)
{
AddDefaultVLAN = false;
VLAN_Array.push(_top.defaultVlanId);
}
}
function checkVlanExist(VLANID)
{
if(_top.defaultVlanId == VLANID && VLAN_VLANListType <= 2)
return true;
var vlanFound = false;
var firstVLAN, lastVLAN;
var currentVLANs = VLAN_VLANListString.split(',');
for(var i=0; i<currentVLANs.length; i++)
{
startInd = currentVLANs[i].indexOf('-')
if(startInd != -1)
{
firstVLAN = parseInt(currentVLANs[i].substring(0,startInd),10);
lastVLAN = parseInt(currentVLANs[i].substring(startInd + 1),10);
if(VLANID >= firstVLAN && VLANID <= lastVLAN)
{
vlanFound = true;
break;
}
}
else
{
firstVLAN = parseInt(currentVLANs[i],10);
if(firstVLAN == VLANID)
{
vlanFound = true;
break;
}
}
}
return vlanFound;
}
function getExistingVlanCount(recheck)
{
var firstVLAN, lastVLAN;
var currentVLANs = VLAN_VLANListString.split(',');
if(recheck || VLAN_VLANCount == 0)
{
VLAN_VLANCount = 0;
for(var i=0; i<currentVLANs.length; i++)
{
startInd = currentVLANs[i].indexOf('-')
if(startInd != -1)
{
firstVLAN = parseInt(currentVLANs[i].substring(0,startInd),10);
lastVLAN = parseInt(currentVLANs[i].substring(startInd + 1),10);
VLAN_VLANCount += lastVLAN + 1 - firstVLAN;
}
else
VLAN_VLANCount++;
}
}
return VLAN_VLANCount;
}
function getPortName(name,isShort)
{
var arr = name.split("/");
if(isShort && arr.length>1)
{
name = arr[0].substring(0,2)+arr[arr.length-1];
}
if(name.indexOf("te")!=-1)
return name.replace("te","XG")
if(name.indexOf("gi")!=-1)
return name.replace("gi","GE")
return name.replace("fa","FE")
}
function GetPublicKey()
{
var responseText = _top.getServerResponse("GET","./device/wcd?{EncryptionSetting}");
var passwEncryptEnable = get_tagValue(responseText,"passwEncryptEnable");
var rsaPublicKey;
var startStr="-----BEGIN RSA PUBLIC KEY-----";
var endStr="-----END RSA PUBLIC KEY-----";
if (passwEncryptEnable == '1') {
rsaPublicKey = get_tagValue(responseText,"rsaPublicKey");
rsaPublicKey = (rsaPublicKey=='') ? 'none' : rsaPublicKey.substring(rsaPublicKey.indexOf(startStr)+startStr.length,rsaPublicKey.indexOf(endStr));
}
else
rsaPublicKey = 'disabled';
return rsaPublicKey;
}
function CreateRSAKey()
{
if(_top.publicKey==null || _top.publicKey=='none')
_top.publicKey=GetPublicKey();
if(_top.publicKey == 'none')return false;
if (_top.publicKey != 'disabled')
{
_top.rsa = new RSAKey();
convertPublicKey(_top.publicKey)
_top.rsa.setPublic(n,e);
return true;
}
return false;
}
function convertPublicKey(publicKey)
{
init_oid(formele["Oid"].value);
var result=convert(publicKey);
var resultArr=result.split("INTEGER")
n=resultArr[1].substring(0,resultArr[1].indexOf(":")).trim();
e=resultArr[2].substring(0,resultArr[2].indexOf(":")).trim();
}
function getEncriptedValue(val)
{
if (_top.publicKey =='disabled')
return val;
else
return 'crypto_!'+_top.rsa.encrypt(val);
}
function fillSourceInterfacesList(slctIPv4,slctIPv6,onIPReadyFuc,objTkn,isIpList,SourceIPv4Type, SourceIPv6Type)
{
var wcdUrl ="/wcd?";
var serverXmlHttp;
var ipList;
var IPv4Wcd,IPv6Wcd;
if(IsUndefOrNull(isIpList))
isIpList = false;
ipList = isIpList;
if (IsUndefOrNull(SourceIPv4Type))
SourceIPv4Type = "0";
if (IsUndefOrNull(SourceIPv6Type))
SourceIPv6Type = "0";
switch (parseInt(SourceIPv4Type,10))
{
case 0:
IPv4Wcd = "{IPv4InterfaceList&filter=(owner!=3)}"
break;
}
switch (parseInt(SourceIPv6Type,10))
{
case 0:
IPv6Wcd = "{IPv6AddressList&filter=((type=1&&IPv6Address!='fe80::')||type=2)}";
break;
}
if (slctIPv4)
wcdUrl += IPv4Wcd;
if (slctIPv6)
{
if (ipList)
wcdUrl += IPv6Wcd;
else
wcdUrl += "{IPv6InterfaceList}";
}
getSourceInterfaces(wcdUrl);
function createXMLHttpRequest()
{
if (window.XMLHttpRequest) {
return new XMLHttpRequest();
}
else if (!document.evaluate) {
return new ActiveXObject("Microsoft.XMLHTTP");
}
return null;
}
function getSourceInterfaces(wcdUrl)
{
serverXmlHttpIP = createXMLHttpRequest();
if (serverXmlHttpIP == null) return;
var URL = wcdUrl;
serverXmlHttpIP.onreadystatechange = onReadyStateIP;
serverXmlHttpIP.open("GET",URL,true);
serverXmlHttpIP.send(null);
}
function onReadyStateIP()
{
if(serverXmlHttpIP.readyState == 4)
{
if (serverXmlHttpIP.status==200)
{
var json = {};
var StatusXML = serverXmlHttpIP.responseText;
var xmlDoc = StringtoXML(StatusXML);
var sectionsArr = xmlDoc.getElementsByTagName("IPv4InterfaceList");
for (var i = 0 ; i < sectionsArr.length ; i++)
{
var section = sectionsArr[i].nodeName;
json[section] = xml2json_rec(sectionsArr[i]);
}
if (ipList)
sectionsArr = xmlDoc.getElementsByTagName("IPv6AddressList");
else
sectionsArr = xmlDoc.getElementsByTagName("IPv6InterfaceList");
for (var i = 0 ; i < sectionsArr.length ; i++)
{
var section = sectionsArr[i].nodeName;
json[section] = xml2json_rec(sectionsArr[i]);
}
if (slctIPv4)
{
if (ipList)
fillSlct(slctIPv4,json.IPv4InterfaceList,'IPAddr','interfaceName',createIPInterfaceString,createIPInterface);
else
fillSlct(slctIPv4,json.IPv4InterfaceList,null,null,null,null,true);
}
if (slctIPv6)
{
if (ipList)
fillSlct(slctIPv6,json.IPv6AddressList,'IPv6Address','interfaceName',createIPInterfaceString,createIPInterface);
else
fillSlct(slctIPv6,json.IPv6InterfaceList,null,null,null,null,true);
}
if (onIPReadyFuc)
onIPReadyFuc();
}
}
}
createIPInterfaceString = function (data,propertyNameVal,newVal,propertyNameTxt,newTxt)
{
var ip = data[propertyNameVal];
var interfaceName = getInteraceName(data[propertyNameTxt]);
return ip + "(" + interfaceName + ")";
}
createIPInterface = function (data,propertyNameVal,newVal,propertyNameTxt,newTxt)
{
var ip = data[propertyNameVal];
var interfaceName = data[propertyNameTxt];
if (data['type'])
{
if (data['type'] == "1")
{
var suffix = "";
var ifIndex = getIfIndexByInterfaceName(interfaceName);
var ifName = (ifIndex==_top.tunnelFirstIndex) ? "tunnel1" : getRealInterfaceNameByIndex(ifIndex);
if(ifName.toLowerCase().indexOf("vlan") != -1)
suffix = "%vlan" + ifName.substr(5);
else if(ifName.toLowerCase().indexOf("lag") != -1)
suffix = "%po" + ifName.substr(4);
else
suffix = "%" + ifName.toLowerCase();
ip += suffix;
}
}
return ip;
}
getInteraceName = function (ifName)
{
var interfaceName;
if (!_top.isStandAlone)
{
interfaceName = _top.getPortName(ifName,false)
}
else
{
interfaceName = _top.getPortName(ifName,true)
}
return interfaceName;
}
function fillSlct(slctId,data,propertyNameVal,propertyNameTxt,txtFunc,valFunc,singleMode)
{
var valuesArr = new Array();
if(IsUndefOrNull(propertyNameVal))
propertyNameVal = 'interfaceName';
if(IsUndefOrNull(propertyNameTxt))
propertyNameTxt = propertyNameVal;
if(IsUndefOrNull(singleMode))
singleMode = false;
var slct = document.getElementById(slctId);
var newOpt, newVal, newTxt;
slct.options.length = 0;
newVal = "0";
newOpt = new Option(newVal, newVal);
newOpt.id = "opt_"+ slctId + "_Auto";
slct.options[slct.options.length] = newOpt;
objTkn.setTokenWithError("opt_" + slctId + "_Auto", "18017");
for(var i = 0; i < data.length; i++)
{
var interfaceName;
newVal = data[i][propertyNameVal];
if (propertyNameVal.toLowerCase() == 'interfacename')
{
newTxt = getInteraceName(newVal);
}
else
{
newTxt = data[i][propertyNameTxt];
if (propertyNameTxt.toLowerCase() == 'interfacename')
{
newTxt = getInteraceName(newTxt);
}
}
if (valFunc)
newVal = valFunc(data[i],propertyNameVal,newVal,propertyNameTxt,newTxt);
if (txtFunc)
newTxt = txtFunc(data[i],propertyNameVal,newVal,propertyNameTxt,newTxt);
if (((singleMode && (!valuesArr[newVal])) || (!singleMode)))
{
var validValue = true;
var ip = newVal;
var ipArr = ip.split(".");
if (ipArr.length == 4)
{
if (ipArr[0] == "0")
validValue = false;
}
if (validValue)
{
valuesArr[newVal] = true;
newOpt = new Option(newTxt, newVal);
newOpt.id = "opt"+ slctId + "_" + i;
slct.options[slct.options.length] = newOpt;
}
}
}
if(slct.options.length == 0)
slct.disabled = true;
}
var xml2json_rec = function (xml) {
var ret;
var children = 0;
for (var i = 0 ; i < xml.childNodes.length; i++)
{
if (xml.childNodes[i].nodeType == 1)
children++;
}
if (/List$/.test(xml.nodeName) || /Table$/.test(xml.nodeName))
{
var txt;
if(typeof(xml.textContent) != "undefined")
txt = xml.textContent;
else
txt = xml.nodeValue;
if (children==0 && txt && txt.replace(/\s/g, '').length>0)
{
ret = txt;
}
else
{
ret=[];
for (var i = 0 ; i < xml.childNodes.length ; i++)
{
var node = xml.childNodes[i];
if (node.nodeType == 1)
{
if (node.nodeName == "entryCount")
{
ret.entryCount = xml2json_rec(node);
}
else
{
ret.push(xml2json_rec(node))
}
}
}
}
}
else
{
if (children==0)
{
if (xml.firstChild==null || xml.firstChild.nodeValue=='\n')
{
return "";
}
else
{
if(typeof(xml.textContent) != "undefined")
return xml.textContent;
else
return xml.firstChild.nodeValue;
}
}
ret = {};
for (var i = 0 ; i < xml.childNodes.length ; i++)
{
var node = xml.childNodes[i];
if (node.nodeType == 1)
ret[node.nodeName] = xml2json_rec(node);
}
}
return ret;
}
function StringtoXML(text){
if (!document.evaluate){
var doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(text);
} else {
var parser=new DOMParser();
var doc=parser.parseFromString(text,'text/xml');
}
return doc;
}
}
function getIfIndexByPortName(interfaceName)
{
var actualName;
for(var i = 0; i < _top.actualNamesArr.length; i++)
{
if(_top.actualNamesArr[i] == interfaceName)
return i;
}
return -1;
}
function getIfIndexByInterfaceName(ifName)
{
var ifIndex;
if (ifName.toLowerCase().indexOf("loopback") != -1) ifIndex = parseInt(_top.loopbackFirstIndex,10)-1 + parseInt(ifName.substr(8),10)
else if (ifName.toLowerCase().indexOf("tunnel") != -1) ifIndex = parseInt(_top.tunnelFirstIndex,10)-1 + parseInt(ifName.substr(6),10)
else if (ifName.toLowerCase().indexOf("oob") != -1) ifIndex = parseInt(_top.oobFirstIndex,10)-1 + parseInt(ifName.substr(3),10)
else if (ifName.toLowerCase().indexOf("vlan") != -1) ifIndex = 100000-1 + parseInt(ifName.substr(4),10)
else if (ifName.toLowerCase().indexOf("lag") != -1) ifIndex = parseInt(_top.trunkFirstIndex,10)-1 + parseInt(ifName.substr(3),10)
else if (ifName.toLowerCase().indexOf("ch") != -1) ifIndex = parseInt(_top.trunkFirstIndex,10)-1 + parseInt(ifName.substr(2),10)
else if (ifName.toLowerCase().indexOf("po") != -1) ifIndex = parseInt(_top.trunkFirstIndex,10)-1 + parseInt(ifName.substr(2),10)
else ifIndex = getIfIndexByPortName(ifName);
return ifIndex;
}
function setSelectByInterfaceID(slctID,value)
{
var found = false;
var slct = document.getElementById(slctID);
if (slct.options.length == 0) return;
if (value == slct.options[0].value)
{
slct.selectedIndex = 0;
return;
}
for (var i = 1; i < slct.options.length ; i++)
{
if (value == getIfIndexByInterfaceName(slct.options[i].value))
{
slct.selectedIndex = i;
found = true;
break;
}
}
if (!found)
{
var interfaceName;
if (!_top.isStandAlone)
{
interfaceName = _top.getInterfaceNameByIndex(value,false)
newVal = _top.getRealInterfaceNameByIndex(value,false);
}
else
{
interfaceName = _top.getInterfaceNameByIndex(value,true)
newVal = _top.getRealInterfaceNameByIndex(value,true);
}
var newOpt, newVal,newTxt;
newTxt = interfaceName;
newOpt = new Option(newTxt, newVal);
newOpt.id = "opt"+ slctID + "_" + slct.options.length;
slct.options[slct.options.length] = newOpt;
slct.selectedIndex = slct.options.length -1;
}
}
function setSelectByInterfaceName(slctID,value)
{
var found = false;
var slct = document.getElementById(slctID);
if (slct.options.length == 0) return;
if (value == slct.options[0].value)
{
slct.selectedIndex = 0;
return;
}
if (!selectOptionByValue(slct,value))
{
var interfaceName;
if (!_top.isStandAlone)
{
interfaceName = _top.getPortName(value,false)
}
else
{
interfaceName = _top.getPortName(value,true)
}
var newOpt, newVal,newTxt;
newVal = value;
newTxt = interfaceName;
newOpt = new Option(newTxt, newVal);
newOpt.id = "opt"+ slctID + "_" + slct.options.length;
slct.options[slct.options.length] = newOpt;
slct.selectedIndex = slct.options.length -1;
}
}
function newbodySize(mainAreaBody,jqPage)
{
if(mainAreaBody == null || mainAreaBody == undefined)
return;
mainAreaBody.style.width = "";
mainAreaBody.style.paddingRight = "";
}
$(document).ready(function () {
try {
var text = self.location + '';
var url = '/Vmember/bridg_vlan_membership_m.htm'; var resalt = text.match(url);
var url1 = '/stp/bridg_spanTree_stp_properties_m.htm'; var resalt1 = text.match(url1);
var url2 = '/sysinfo/system_general_time_m.htm'; var resalt2 = text.match(url2);
}
catch (text) { }
if ((resalt1 != null) || (resalt1 != '') || (resalt1 != undefined)) { return; }
if ((resalt2 != null) || (resalt2 != '') || (resalt2 != undefined)) { return; }
if ((resalt == null) || (resalt == '') || (resalt == undefined)) {
try {
$('#defaultButton').focus();
$("#defaultButton").keyup(function (event) {
if ((event.keyCode == 13) || (event.which == 13)) {
$("#defaultButton").click();
}
});
}
catch ($) { }
}
});
function agent() {
var ua = navigator.userAgent;
if (ua.search(/[\s*MSIE\s*](9.0)/i) !== -1) { return 'IE 9'; }
if (ua.search(/[\s*MSIE\s*](10.0)/i) !== -1) { return 'IE 10'; }
if ((!!window.MSStream) && (!document.evaluate)) { return 'IE 11'; }
if (ua.search(/Firefox/i) !== -1) { return 'Firefox'; }
if (ua.search(/Opera/i) !== -1) { return 'Opera'; }
if (ua.search(/Chrome/i) !== -1) { return 'Google Chrome'; }
if (ua.search(/Safari/i) !== -1) { return 'Safari'; }
return 'else';
}
function getStyle(element) { return parent.getComputedStyle(element, null) || element.currentStyle; }
function checkStyleWidth() {
var ua = navigator.userAgent;
if (ua.search(/[\s*MSIE\s*](9.0)/) !== -1) {
function getStyle(element) { return parent.getComputedStyle(element, null) || element.currentStyle; }
var args = checkStyleWidth.arguments;
function w(id) { e = getStyle(document.getElementById(id)).width; e = parseFloat(e); return e; };
function pw(id) { r = getStyle(document.getElementById(id).parentNode).width; r = parseFloat(r); return r; }
function $(id) {
if ((id != '') && (id != undefined)) {
if (document.getElementById(id)) {
return document.getElementById(id)
} else { return false }
}
};
function unsel(id) {
if ($(id)) {
if (!$(id).getAttribute('unselectable')) { $(id).setAttribute('unselectable', 'on'); } else { return true }
} else { return false }
}
for (var i = 0; i < args.length; i++) {
if ($(args[i])) {
$(args[i]).style.width = (pw(args[i]) + 25) + 'px';
unsel(args[i]);
}
else { continue }
}
}
}
function pixelWordLength(word) {
var terraSizes = [
{"k":"A","v":"10"},
{"k":"B","v":"10"},
{"k":"C","v":"10.36"},
{"k":"D","v":"11"},
{"k":"E","v":"10"},
{"k":"F","v":"9"},
{"k":"G","v":"11.2"},
{"k":"H","v":"10.3"},
{"k":"I","v":"4.93"},
{"k":"J","v":"7.6"},
{"k":"K","v":"10"},
{"k":"L","v":"8.4"},
{"k":"M","v":"11"},
{"k":"N","v":"10.5"},
{"k":"O","v":"9.1"},
{"k":"P","v":"10"},
{"k":"Q","v":"10.3"},
{"k":"R","v":"10.5"},
{"k":"S","v":"10"},
{"k":"T","v":"9.3"},
{"k":"U","v":"8.1"},
{"k":"V","v":"10"},
{"k":"W","v":"13"},
{"k":"X","v":"9.8"},
{"k":"Y","v":"10"},
{"k":"Z","v":"9"},
{"k":"a","v":"8"},
{"k":"b","v":"8"},
{"k":"c","v":"8"},
{"k":"d","v":"8"},
{"k":"e","v":"8"},
{"k":"f","v":"4"},
{"k":"g","v":"8"},
{"k":"h","v":"8"},
{"k":"i","v":"4"},
{"k":"j","v":"4"},
{"k":"k","v":"8"},
{"k":"l","v":"4"},
{"k":"m","v":"8.5"},
{"k":"n","v":"8"},
{"k":"o","v":"8"},
{"k":"p","v":"8"},
{"k":"q","v":"8"},
{"k":"r","v":"5"},
{"k":"s","v":"8"},
{"k":"t","v":"5"},
{"k":"u","v":"8"},
{"k":"v","v":"6"},
{"k":"w","v":"10"},
{"k":"x","v":"8"},
{"k":"y","v":"8"},
{"k":"z","v":"8"}
];
var size = 0, qua = 0, l =0, len = word.length;
for(var i = 0; i < terraSizes.length; i ++){
qua = word.match(new RegExp( terraSizes[i].k, 'g' ));
if(typeof qua != "undefined"){
if(qua){
l = qua.length;
len -= l;
size += l * terraSizes[i].v - 0.2;
}
qua = 0;
}
}
if(len) size += len * 11;
return parseInt(size);
}
function defaultCrossbrowserResizer(exceptions) {
if(typeof exceptions == 'undefined') var notIe = true, exceptions = "";
else var notIe = true;
/*@cc_on@if(@_jscript){notIe = false;} @end@*/
if (notIe && agent() != "Firefox") {
var se, overr = document.getElementsByClassName("overr");
for(var i = 0; i < overr.length; i ++){
se = overr[i].getElementsByTagName("select")[0];
if (exceptions.indexOf(se.id) == -1) {
overr[i].style.width = "auto";
se.style.width = "auto";
se.style.overflow = "auto";
if(agent() == "Google Chrome") se.style.paddingRight = "26px";
else if(document.evaluate)se.style.paddingRight = "14px";
else se.style.paddingRight = "26px";
}
}
} else if(agent() == "Firefox") {
var s, se, last, lastE = 0, lastC = 0, bigger = 0, sel = document.getElementsByClassName("overr");
for(var i = 0; i < sel.length; i ++){
lastE = 0;
se = sel[i].getElementsByTagName("select")[0];
if (exceptions.indexOf(se.id) == -1) {
sel[i].style.overflow = "hidden";
s = se.options;
for(var e = 0; e < s.length; e ++){
last = pixelWordLength(s[e].text);
if(bigger < last)
bigger = last;
}
lastE = parseInt(bigger + 36);
last = bigger = 0;
sel[i].style.width = lastE + "px";
lastC = lastE + 22;
se.style.width = lastC + "px";
}
}
} else{
var s, se, last, lastE = 0, lastC = 0, bigger = 0, sel = document.getElementsByClassName("overr");
for(var i = 0; i < sel.length; i ++){
lastE = 0;
se = sel[i].getElementsByTagName("select")[0];
if (exceptions.indexOf(se.id) == -1) {
sel[i].style.overflow = "hidden";
s = se.options;
for(var e = 0; e < s.length; e ++){
last = pixelWordLength(s[e].text);
if(bigger < last)
bigger = last;
}
lastE = parseInt(bigger + 36);
last = bigger = 0;
sel[i].style.width = lastE + "px";
lastC = lastE + 22;
se.style.width = lastC + "px";
for(var e = 0; e < s.length; e ++) s[e].style.width = lastC + "px";
}
}
}
}
var POLLING_INTERVAL=30000;
var FILTER_GeneralDB = 'Filter:(rlHostParamName="l2_num_of_trunks")||(rlHostParamName="l2_first_trunk_ifIndex")||(rlHostParamName="l2_max_num_ports_in_trunk")||(rlHostParamName="cosParams_ingressRateLimitSupported")||(rlHostParamName="poe_supported")||(rlHostParamName="unit_max_number_of_units") || (rlHostParamName="vlanDefaultVID")||(rlHostParamName="l2_num_of_vlans")';
var ALIAS_ALL = "ALL";
var ALIAS_LAGS = "LAGs";
var GET_XML_PATH = "c:/get_xml.txt"
var POST_XML_PATH = "c:/post_xml.txt";
var POST_XML_PATH_DELETED = "c:/post_xml_deleted.txt";
var DEBUG=false;
var IS_MOCKUP=false;
var USER_XSL ="CustomTemplates.xsl"
var CUSTOM_XSL ="CustomTemplates.xsl"
var CREATE_VLAN_MESSAGE1="Need to set uniq Vlan";
var STATICADDRESS_MESSAGE1 = "Need to set uniq MAC"
var CONTROLMANAGER_BINDING1="Wrong binding! Data xmlnode is nod found";
var CONTROLMANAGER_BINDING2 = "Wrong binding! The target node can't have child elements"
var CONTROLMANAGER_BINDING_LIST = "Wrong binding!The parent of the target node can't be a List"
var CONTROLMANAGER_BINDING_NO_TARGET = "Wrong binding!Target node is missing in XPATH expression"
var RT_BINDING_WRONG_1 = "Wrong binding!The repeatedtable template must have only one BIND attribute for row data"
var RT_MSG1="Need to select row";
var RT_MSG2="Please select an entry";
var POST_MSG1="Wrong post xml!";
var ENTRY_ANCHOR= "Entry";
var LIST_ANCHOR = "List";
var FILTER_GeneralDB = 'Filter:(rlHostParamName="l2_num_of_out_of_band_ports")||(rlHostParamName="l2_first_out_of_band_ifIndex")||(rlHostParamName="l2_num_of_trunks")||(rlHostParamName="l2_first_trunk_ifIndex")||(rlHostParamName="l2_max_num_ports_in_trunk")||(rlHostParamName="cosParams_ingressRateLimitSupported")||(rlHostParamName="poe_supported")||(rlHostParamName="unit_max_number_of_units") || (rlHostParamName="vlanDefaultVID")||(rlHostParamName="l2_num_of_vlans")';
var PORT_NODE_NAME="interfaceName";
var MAIN_STYLE ="../core/BuildInnerHtml.xsl";
var DATAROOT = "DeviceConfiguration";
var AUTHENTICATION_PATH="../config/authentication_page.htm";
var IS_JS_TRANSFORMATION = true;
function jsFuncName(f)
{
var s = f.toString().match(/function\s*(\S*)\s*\(/)[1];
return s ? s : "anonymous";
};
Class(GuiObject);
function GuiObject()
{
this.superclass = function() {
var superMethod = this.superclass.caller.superclass;
return (superMethod) ? superMethod.apply( this, arguments ) : null;
};
this.superclass_ = function( superclass ) {
var superMethod = this[superclass.cname]._[this.superclass_.caller.mname];
var theArgs = Array.prototype.slice.call(arguments,1);
return (superMethod) ? superMethod.apply( this, theArgs ) : null;
};
this.isInstanceOf = function( aClass ) {
if (aClass.cname==null) return false;
var m = this[ aClass.cname ];
return( m && m instanceof Function );
}
};
function Implements()
{
var N = arguments.length;
for (var i=0; i<N; ++i)
if (!arguments[i].baseClass)
throw "Undeclared Super Class in .Implements";
var s, m, superExemplar;
var rawExemplar = this.rawExemplar;
var exemplar = this.prototype;
for (var i=0; i<N; ++i)
{
superExemplar = arguments[i].prototype;
for (var property in rawExemplar)
{
if (!(rawExemplar[property] instanceof Function)) continue;
m = exemplar[property]; if (m.superclass) continue;
s = superExemplar[property];
if (s && (s instanceof Function)) m.superclass = s;
}
}
for (var i=0; i<N; ++i)
{
superExemplar = arguments[i].prototype;
for (var property in superExemplar)
{
s = superExemplar[property];
if ( exemplar[property]===void 0 && s instanceof Function )
exemplar[property] = s;
}
}
};
function Extends( superClass )
{
if (!superClass.baseClass) throw "Undeclared Super Class in .Extends";
var superexemplar = (this==GuiObject) ? null
: (superClass ? superClass.prototype : null);
this.baseClass.prototype = superexemplar;
var exemplar = new this.baseClass();
var s,m;
for (var property in exemplar)
{
m = exemplar[property]; if (!(m instanceof Function)) continue;
m.mname = property; if (! superexemplar ) continue;
s = superexemplar[property];
if (s && (s!=m) && (s instanceof Function)) m.superclass = s;
}
this.prototype = exemplar;
exemplar.name = this.cname;
if (exemplar.konstructor==null) exemplar.konstructor = function(){};
exemplar[this.cname] = exemplar.konstructor;
exemplar.konstructor._ = exemplar;
if (superClass==GuiObject) this.rawExemplar = exemplar;
return this;
};
function Class( theClass, optConstructorArgDescArray )
{
var baseClass = theClass;
var className = jsFuncName( theClass );
self[className] = theClass = function(){
var C = arguments.callee;
if (C.required && self["ValidateArgs"]!==void 0)
ValidateArgs( C.cname, C.required, arguments );
C.prototype.konstructor.apply( this, arguments );
};
theClass.required = optConstructorArgDescArray;
theClass.cname = className;
theClass.baseClass = baseClass;
theClass.Extends = Extends;
theClass.Implements= Implements;
theClass.Extends(GuiObject);
return theClass;
};
function IXML() { };
var _IXML_IS_IE10 = false;
/*@cc_on
if (/^10/.test(@_jscript_version)) {
_IXML_IS_IE10 = true;
}
@*/
_IXML_IS_IE10 = (!document.evaluate && window.DOMParser);
IXML.Init = function () {
if (_IXML_IS_IE10) {
DOMParser.prototype.parseFromString = function (sXml, contentType) {
var oDoc = new ActiveXObject(_IXML_DOM_PROGID);
oDoc.async = "false";
oDoc.loadXML(sXml);
return oDoc;
}
}
}
IXML.Init();
var _IXML_iNsCounter = 0;
var _IXML_HAS_DOM_IMPLEMENTATION = document.implementation && true;
var _IXML_HAS_DOM_CREATE_DOCUMENT = _IXML_HAS_DOM_IMPLEMENTATION && document.implementation.createDocument;
var _IXML_HAS_DOM_FEATURE = _IXML_HAS_DOM_IMPLEMENTATION && document.implementation.hasFeature;
var _IXML_IS_MOZ = _IXML_HAS_DOM_CREATE_DOCUMENT && _IXML_HAS_DOM_FEATURE;
var _IXML_IS_SAFARI = (navigator.userAgent && navigator.vendor && (navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1 || navigator.vendor.indexOf("Apple") != -1));
var _IXML_IS_IE = !document.evaluate;
if (!window.Node || !window.Node.ELEMENT_NODE) {
var Node = { ELEMENT_NODE: 1, ATTRIBUTE_NODE: 2, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, ENTITY_REFERENCE_NODE: 5, ENTITY_NODE: 6, PROCESSING_INSTRUCTION_NODE: 7, COMMENT_NODE: 8, DOCUMENT_NODE: 9, DOCUMENT_TYPE_NODE: 10, DOCUMENT_FRAGMENT_NODE: 11, NOTATION_NODE: 12 };
};
if (_IXML_IS_IE || _IXML_IS_IE10) {
var _IXML_DOM_PROGID = null;
var _IXML_XMLHTTP_PROGID = null;
IXML.detectLatestActiveX = function (arrProgID) {
var bFound = false;
for (var i = 0; i < arrProgID.length && !bFound; i++) {
try {
var obj = new ActiveXObject(arrProgID[i]);
bFound = true;
break;
} catch (e) { };
};
if (!bFound) {
throw "Could not activate any of the ActiveX: " + arrProgID.join(",");
};
return arrProgID[i];
};
if (!window.XMLHttpRequest) {
_IXML_XMLHTTP_PROGID = IXML.detectLatestActiveX(["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0"]);
XMLHttpRequest = function () {
return new ActiveXObject(_IXML_XMLHTTP_PROGID);
}
}
_IXML_DOM_PROGID = IXML.detectLatestActiveX(["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"]);
IXML.getDomDocument = function (sUri, sRoot) {
var oDoc = new ActiveXObject(_IXML_DOM_PROGID);
try {
oDoc.setProperty('SelectionLanguage', 'XPath');
} catch (e) { };
if (sRoot) {
var prefix = "";
if (sUri) {
if (sRoot.indexOf(":") > 1) {
prefix = sRoot.substring(0, sRoot.indexOf(":"));
sRoot = sRoot.substring(sRoot.indexOf(":") + 1);
} else {
prefix = "a" + (_IXML_iNsCounter++);
};
};
if (sUri) {
oDoc.loadXML('<' + prefix + ':' + sRoot + " xmlns:" + prefix + "=\"" + sUri + "\"" + " />");
} else {
oDoc.loadXML('<' + sRoot + " />");
};
};
return oDoc;
};
if (!document.importNode) {
try {
document.importNode = function (oNode, bChildren) {
var tmp = document.createElement("div");
if (bChildren) {
tmp.innerHTML = oNode.xml ? oNode.xml : oNode.innerHTML;
} else {
tmp.innerHTML = oNode.xml ? oNode.cloneNode(false).xml : oNode.cloneNode(false).innerHTML;
};
return tmp.getElementsByTagName("*")[0];
};
} catch (e) { };
}
}
else {
if (document.implementation && document.implementation.createDocument) {
IXML.getDomDocument = function (sUri, sName) {
var oDoc = document.implementation.createDocument(sUri ? sUri : null, sName ? sName : null, null);
if (oDoc && (sUri || sName) && !oDoc.documentElement) {
oDoc.appendChild(oDoc.createElementNS(sUri, sName));
};
return oDoc;
};
}
else {
throw "document.implementation.createDocument is not supported in this browser";
}
}
IXML.getText = function (oNode, deep) {
if (oNode == null) return;
var s = "";
var nodes = oNode.childNodes;
for (var i = 0; i < nodes.length; i++) {
var node = nodes[i];
var nodeType = node.nodeType;
if (nodeType == Node.TEXT_NODE || nodeType == Node.CDATA_SECTION_NODE) {
s += node.data;
} else if (deep == true
&& (nodeType == Node.ELEMENT_NODE
|| nodeType == Node.DOCUMENT_NODE
|| nodeType == Node.DOCUMENT_FRAGMENT_NODE)) {
s += IXML.getText(node, true);
};
};
return s;
};
IXML.setText = function (oNode, text) {
if (oNode == null || text == null) return;
var nodes = oNode.childNodes;
if (nodes.length == 0 && oNode.nodeType == Node.ELEMENT_NODE) {
if (!_IXML_IS_IE) {
var elementNode = document.createElement("NODE");
var textNode = document.createTextNode(text);
elementNode.appendChild(textNode);
IXML.copyChildNodes(elementNode, oNode, false);
textNode = null;
elementNode = null;
}
else
oNode.text = text;
}
else {
for (var i = 0; i < nodes.length; i++) {
var node = nodes[i];
var nodeType = node.nodeType;
if (nodeType == Node.TEXT_NODE || nodeType == Node.CDATA_SECTION_NODE) {
node.data = text;
return;
};
};
}
};
IXML.setInnerText = function (html_control, text) {
if (html_control) {
$(html_control).text(text);
}
};
IXML.getInnerText = function (html_control) {
if (html_control) {
return $(html_control).text();
}
else {
return "";
}
};
if (window.XMLSerializer && !_IXML_IS_IE10) {
IXML.serialize = function (oDoc) {
var s = null;
if (oDoc)
s = new XMLSerializer().serializeToString(oDoc);
return s;
};
}
else {
IXML.serialize = function (oDoc) {
var s = null;
if (oDoc) {
s = oDoc.innerHTML ? oDoc.innerHTML : oDoc.xml;
};
return s;
};
XMLSerializer = function () { };
XMLSerializer.prototype.serializeToString = function (oNode) {
if (oNode.xml)
return oNode.xml;
else
return null;
};
};
IXML.clearChildNodes = function (node) {
if (node) {
$(node).empty();
}
};
IXML.copyChildNodes = function (nodeFrom, nodeTo, bKeepNodes) {
if (nodeFrom && nodeTo) {
if (!bKeepNodes)
IXML.clearChildNodes(nodeTo);
for (var i = 0; i < nodeFrom.childNodes.length; i++) {
var nodeToCopy = $(nodeFrom.childNodes[i]).clone();
$(nodeTo).append(nodeToCopy);
}
}
};
IXML.appendChild = function (nodeToAppend, nodeTo) {
if (nodeToAppend && nodeTo) {
$(nodeTo).append($(nodeToAppend).clone());
}
};
IXML.insertBefore = function (nodeToInsert, beforeNode) {
if (nodeToInsert && beforeNode) {
$(nodeToInsert).insertBefore($(beforeNode));
}
};
IXML.getAncestors = function (node, nodeNameFilter) {
var col = new Array();
if (node == null) return col;
var parent = IXML.getParentElement(node);
while (parent != null) {
if (nodeNameFilter) {
if (parent.nodeName == nodeNameFilter)
col.push(parent);
}
else {
col.push(parent);
}
parent = IXML.getParentElement(parent)
}
return col;
};
IXML.getParentElement = function (node) {
try {
if (!node)
return null;
var parentNode = node.parentNode;
if (parentNode && parentNode.nodeType != Node.ELEMENT_NODE)
return IXML.getParentElement(parentNode);
else
return parentNode;
}
catch (e) {
return null;
}
};
IXML.getChildElement = function (node, pos) {
if (node) {
var jqObj = $(node).children().eq(pos - 1);
if (jqObj && jqObj.length)
return jqObj[0];
else
return null;
}
else
return null;
};
IXML.getPreviousSibling = function (node) {
if (node) {
var jqObj = $(node).prev();
if (jqObj && jqObj.length)
return jqObj[0];
else
return null;
}
else {
return null;
}
};
IXML.getNextSibling = function (node) {
if (node) {
var jqObj = $(node).next();
if (jqObj && jqObj.length)
return jqObj[0];
else
return null;
}
else {
return null;
}
};
IXML.hasChildElements = function (node) {
if (node) {
var jqObj = $(node).children();
if (jqObj && jqObj.length) {
return true;
}
else {
return false;
}
}
else {
return false;
}
};
IXML.getContainer = function (node, name) {
if (node) {
var jqObj = $(node).closest(name);
if (jqObj && jqObj.length) {
return jqObj[0];
}
else {
return null;
}
}
else {
return null;
}
};
IXML.set_selfancestorsAttribute = function (node, attr_name, attr_value) {
if (node) {
$(node).attr(attr_name, attr_value);
$(node).parents().attr(attr_name, attr_value);
}
};
IXML.removeAttribute = function (nodeSet, attrName, attrValue) {
if(nodeSet && nodeSet.length>0)
{
if(attrValue && attrValue!="")
{
for(var i=0;i<nodeSet.length;i++)
{
if(nodeSet[i].getAttribute(attrName)==attrValue)
nodeSet[i].removeAttribute(attrName);
}
}
else
{
for(var i=0;i<nodeSet.length;i++)
{
nodeSet[i].removeAttribute(attrName);
}
}
}
};
IXML.setAttribute = function (nodeset, attr_name, attr_value) {
if (nodeset && attr_name && attr_value) {
$(nodeset).attr(attr_name, attr_value);
}
};
if (!window.DOMParser) {
DOMParser = function () { };
if (_IXML_IS_SAFARI) {
DOMParser.prototype.parseFromString = function (sXml, contentType) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "data:text/xml;charset=utf-8," + encodeURIComponent(sXml), false);
xmlhttp.send(null);
return xmlhttp.responseXML;
};
} else if (IXML.getDomDocument) {
DOMParser = function () { };
DOMParser.prototype.parseFromString = function (sXml, contentType) {
var doc = IXML.getDomDocument();
doc.loadXML(sXml);
return doc;
};
};
};
if (!_IXML_IS_IE && !_IXML_IS_IE10) {
if (XMLDocument && XMLDocument.prototype && !XMLDocument.prototype.selectNodes && XMLDocument.prototype.evaluate) {
XMLDocument.prototype.selectNodes = function (sXPath, contextNode) {
var nodes = [];
var iterator = this.evaluate(sXPath, contextNode ? contextNode : this, null, XPathResult.ANY_TYPE, null);
var node;
do {
node = iterator.iterateNext();
if (node)
nodes.push(node);
}
while (node);
return nodes;
}
XMLDocument.prototype.selectSingleNode = function (sXPath, contextNode) {
var node = null;
var iterator = this.evaluate(sXPath, contextNode ? contextNode : this, null, XPathResult.ANY_TYPE, null);
node = iterator.iterateNext();
return node;
}
}
if (Element && Element.prototype && !Element.prototype.selectNodes && XMLDocument && XMLDocument.prototype && XMLDocument.prototype.selectNodes && XMLDocument.prototype.evaluate) {
Element.prototype.selectNodes = function (sXPath) {
var ownerDoc = this.ownerDocument;
return ownerDoc.selectNodes(sXPath, this);
}
Element.prototype.selectSingleNode = function (sXPath) {
var ownerDoc = this.ownerDocument;
return ownerDoc.selectSingleNode(sXPath, this);
}
}
}
function CallBackObject(sender)
{
this.XmlHttp = new XMLHttpRequest();
this.Error = "";
if(sender)
this.sender = sender;
};
CallBackObject.prototype.set_sender = function(sender)
{
if(sender) this.sender = sender;
};
CallBackObject.prototype.remove_sender = function()
{
if(sender) this.sender = null;
};
CallBackObject.prototype.DoCallBack= function(data,url,bAsync,method,action)
{
var i;
var theData = data;
if (url=="")
url = window.location.pathname + window.location.search;
var thePage = url;
if( this.XmlHttp )
{
if( this.XmlHttp.readyState == 4 || this.XmlHttp.readyState == 0 )
{
var oThis = this;
this.XmlHttp.open(method, thePage, bAsync);
try{this.XmlHttp.responseType = 'msxml-document';}catch(e){}
this.XmlHttp.onreadystatechange =function(){ oThis.ReadyStateChange(); };
this.XmlHttp.setRequestHeader('Content-Type', 'data:text/xml;charset=utf-8');
if(action!=null)
this.XmlHttp.setRequestHeader('QueryString', 'action=' + action);
this.XmlHttp.send(theData);
}
}
};
CallBackObject.prototype.DoCallBack_Query = function(prmName,prmValue,url,bAsync)
{
var i;
var paramSep = (url.lastIndexOf('?') < 0 ? '?' : '&');
var thePage = url;
if (prmName.length>0)
thePage += paramSep;
for(var i=0;i<prmName.length;i++)
{
thePage = thePage + escape(prmName[i]) + '=' + prmValue[i];
thePage = thePage + '&'
}
if( this.XmlHttp )
{
if( this.XmlHttp.readyState == 4 || this.XmlHttp.readyState == 0 )
{
var oThis = this;
this.XmlHttp.open('POST', thePage, bAsync);
try{this.XmlHttp.responseType = 'msxml-document';}catch(e){}
this.XmlHttp.onreadystatechange = function(){ oThis.ReadyStateChange(); };
this.XmlHttp.setRequestHeader('Content-Type', 'data:text/xml;charset=utf-8');
this.XmlHttp.send();
}
}
};
CallBackObject.prototype.AbortCallBack = function()
{
if( this.XmlHttp )
this.XmlHttp.abort();
};
CallBackObject.prototype.OnLoading = function()
{
};
CallBackObject.prototype.OnLoaded = function()
{
};
CallBackObject.prototype.OnInteractive = function()
{
};
CallBackObject.prototype.OnComplete = function(responseText, responseXml)
{
};
CallBackObject.prototype.OnAbort = function()
{
var t = document.createElement("textarea");
document.body.appendChild(t);
IXML.setInnerText(t,this.XmlHttp.responseText);
t.value = IXML.getInnerText(t);
};
CallBackObject.prototype.OnError = function(status, statusText)
{
};
CallBackObject.prototype.ReadyStateChange = function()
{
if( this.XmlHttp.readyState == 1 )
{
this.OnLoading();
}
else if( this.XmlHttp.readyState == 2 )
{
this.OnLoaded();
}
else if( this.XmlHttp.readyState == 3 )
{
this.OnInteractive();
}
else if( this.XmlHttp.readyState == 4 )
{
if( (this.XmlHttp.status == 0))
this.OnAbort();
else if( (this.XmlHttp.status == 200 && this.XmlHttp.statusText == "OK") || _IXML_IS_MOZ )
{
if(this.sender)
{
this.sender.OnComplete(this.XmlHttp.responseText, this.XmlHttp.responseXML);
this.sender = null;
}
else
this.OnComplete(this.XmlHttp.responseText, this.XmlHttp.responseXML);
}
else
this.OnError(this.XmlHttp.status, this.XmlHttp.statusText, this.XmlHttp.responseText);
}
};
var oPolling ;
Class(Polling);
function Polling()
{
this.konstructor = function()
{
this.pollingInterval=(typeof POLLING_INTERVAL!='undefined')?POLLING_INTERVAL:30000;
this.authInterval = (typeof AUTH_INTERVAL!='undefined')?AUTH_INTERVAL:20000;
this.masterType=null;
this.moduleType = null;
this.IpHostManagementIndex=null;
this.defaultVlanId=1;
this.systemMode = 0;
this.displayRouter = false;
this.NumberOfPorts = 0;
this.NumberOfTrunks = 0;
this.maxPortsPerTrunk=0;
this.MaxNumberOfUnits=MAX_UNITS;
this.maxVLANcount=0;
this.trunkFirstIndex= 0;
this.currentUnit =1;
this.MasterUnit=-1;
this.BackUpUnit=-1;
this.firstPresentModule=1;
this.NumberOfModules=1;
this.NumberOfStackUnits = 0;
this.isStack=false;
this.rateLimit;
this.oobFirstIndex;
this.oobNumOfPorts;
this.poeSupported=false;
this.portsDataXml=null;
this.modulesDataXml=null;
this.isFirstLoad=true;
this.NumberOfPortPerModuleArr=new Array();
this.StartingPortPerModuleArr = new Array();
this.TypePerModuleArr = new Array();
var url,cbo_polling;
if(typeof IS_MOCKUP=='undefined' || !IS_MOCKUP)
{
url='device/generalDB.xml?' + FILTER_GeneralDB;
cbo_polling = new CallBackObject(this);
cbo_polling.DoCallBack(null,url,true,"GET");
this.OnComplete=this.complete_generalDB;
setTimeout("Polling.authentication()",this.authInterval) ;
}
};
this.get_polling_xml_mockup = function()
{
var generalDB = IXML.getDomDocument();
var moduleDB = IXML.getDomDocument();
var portDB = IXML.getDomDocument();
generalDB.async = false;
generalDB.load(MOCKUP_GENERAL_DB_URL);
this.get_generalDB(generalDB);
moduleDB.async = false;
moduleDB.load(MOCKUP_MODULE_DB_URL);
this.get_moduleDB(moduleDB);
portDB.async = false;
portDB.load(MOCKUP_PORTS_DB_URL);
this.get_portDB(portDB);
generalDB = moduleDB = portDB = null;
};
this.OnComplete = function(){};
this.complete_generalDB = function(responseText,responseXML)
{
var url = "device/moduleDB.xml";
var cbo = new CallBackObject(this);
cbo.DoCallBack(null,url,true,"GET");
this.OnComplete=this.complete_moduleDB;
if(null==responseXML)return;
if(null==IXML.getChildElement(responseXML,1))return;
this.get_generalDB(responseXML);
};
this.get_generalDB = function(generalDB)
{
var generalArr = generalDB.getElementsByTagName('hostParam');
for (var i=0;i<generalArr.length;i++)
{
hostName = IXML.getText(generalArr[i].selectSingleNode("./hostParamName"));
hostValue = IXML.getText(generalArr[i].selectSingleNode("./hostParamValue"));
switch (hostName)
{
case "l2_first_trunk_ifIndex":
this.trunkFirstIndex = parseInt(hostValue);
break;
case "l2_num_of_trunks":
this.NumberOfTrunks = parseInt(hostValue);
break;
case "cosParams_ingressRateLimitSupported":
this.rateLimit = parseInt(hostValue);
break;
case "poe_supported":
this.poeSupported = (hostValue == "1") ? true : false;
break;
case "l2_max_num_ports_in_trunk":
this.maxPortsPerTrunk = parseInt(hostValue);
break;
case "unit_max_number_of_units" :
this.MaxNumberOfUnits = parseInt(hostValue);
break;
case 'vlanDefaultVID' :
this.defaultVlanId = parseInt(hostValue);
break;
case 'l2_num_of_vlans' :
this.maxVLANcount = parseInt(hostValue);
break;
}
}
this.systemMode=IXML.getText(generalDB.documentElement.selectSingleNode("//systemMode/mode"));
if(this.systemMode && this.systemMode.charAt(0)==1)
this.displayRouter = true;
else
this.displayRouter = false;
this.IpHostManagementIndex = IXML.getText(generalDB.getElementsByTagName('managementIfIndex')[0]);
};
this.complete_moduleDB = function(responseText,responseXML)
{
if(null==responseXML)return;
if(null==IXML.getChildElement(responseXML,1))return;
var url = "device/portDB.xml?Filter:(ifOperStatus!=6)";
var cbo = new CallBackObject(this);
cbo.DoCallBack(null,url,true,"GET");
this.OnComplete=this.complete_portDB;
this.get_moduleDB(responseXML);
};
this.get_moduleDB = function(moduleDB)
{
this.modulesDataXml=moduleDB;
this.NumberOfModules = parseInt(IXML.getText(this.modulesDataXml.getElementsByTagName('numberOfUnits')[0]));
var tmpTypePerModuleArr = new Array(this.MaxNumberOfUnits);
for(var i=0;i<this.MaxNumberOfUnits;i++)tmpTypePerModuleArr[i]=-1;
var moduleArr = this.modulesDataXml.getElementsByTagName('modulesDataBase')[0].
getElementsByTagName('module');
var moduleIndex,_moduleType,firstPortIndex,numberOfPorts,moduleRole;
for (var i=0;i<moduleArr.length;i++)
{
moduleIndex=IXML.getText(moduleArr[i].selectSingleNode("./moduleNumber"));
if (i == 0) this.firstPresentModule = moduleIndex;
_moduleType=IXML.getText(moduleArr[i].selectSingleNode("./moduleType"));
firstPortIndex=IXML.getText(moduleArr[i].selectSingleNode("./firstPortIndex"));
numberOfPorts=IXML.getText(moduleArr[i].selectSingleNode("./numberOfPorts"));
moduleRole=IXML.getText(moduleArr[i].selectSingleNode("./moduleRole"));
this.NumberOfPortPerModuleArr[moduleIndex] = parseInt(numberOfPorts);
this.StartingPortPerModuleArr[moduleIndex] = parseInt(firstPortIndex);
tmpTypePerModuleArr[moduleIndex] = _moduleType;
if (!this.isFirstLoad)
{
if (tmpTypePerModuleArr[moduleIndex] != this.TypePerModuleArr[moduleIndex])
isModuleTypeChanged = true;
}
else {this.TypePerModuleArr = new Array(this.MaxNumberOfUnits);};
if(moduleRole == "1")
{ this.MasterUnit = 0;
this.isStack=false;
this.moduleType = _moduleType;
}
else if(moduleRole == "2")
{ this.MasterUnit = moduleIndex;
this.isStack=true;
this.moduleType = _moduleType;
this.masterType = _moduleType;
}
else if(moduleRole == "3")
{ this.BackUpUnit = moduleIndex;
this.isStack=true;
}
};
this.TypePerModuleArr = tmpTypePerModuleArr;
this.currentUnit = (this.isStack==true && this.MasterUnit>0)?this.MasterUnit:(this.isStack==true && this.BackUpUnit!=-1 )?
this.BackUpUnit:this.firstPresentModule;
if(this.isFirstLoad==true){
var url = "SiteMap.xml";
Navigation.create(url);
};
};
this.complete_portDB=function(responseText,responseXML){
if(null==responseXML)return;
if(null==IXML.getChildElement(responseXML,1))return;
this.get_portDB(responseXML);
};
this.get_portDB = function(portDB)
{
this.portsDataXml=portDB;
this.NumberOfPorts = parseInt(IXML.getText(this.portsDataXml.getElementsByTagName('numberOfPorts')[0]));
if(this.isFirstLoad==true){
this.isFirstLoad=false;
};
var is_mockup = (typeof IS_MOCKUP!='undefined')?IS_MOCKUP:false;
if(!is_mockup)
window.setTimeout("oPolling.complete_generalDB(null,null)",this.pollingInterval);
};
this.getNamePortByIndex=function(index){
var namePort="";
try{
var portNode = this.portsDataXml.selectSingleNode("//port[ifIndex='" + index + "']");
namePort = IXML.getText(portNode.selectSingleNode("./portName"));
}
catch(e){
alert("element ifIndex with value - " + index + " isn't exists in xml document");
return;
}
return namePort;
};
this.getIfIndexByName = function(name){
var ifIndex="";
try{
var portNode = this.portsDataXml.selectSingleNode("//port[portName='" + name + "']");
ifIndex = IXML.getText(portNode.selectSingleNode("./ifIndex"));
}catch(e){
alert( "element portName with value - " + name + " isn't exists in xml document");
return;
}
return ifIndex;
};
this.getCollectionPortsPerUnit=function(unitID){
return this.portsDataXml.selectNodes("//port[relUnit='" + unitID + "']");
};
this.getFirstIndex=function(nodeSet){
return IXML.getText(IXML.getChildElement(nodeSet[0],1));
};
this.getLastIndex = function(nodeSet){
return IXML.getText(IXML.getChildElement(nodeSet[nodeSet.length-1],1));
};
this.getCountUnitPortsPerType = function(_unit,type){
try{
if(type=="eth"){
return this.portsDataXml.selectNodes("//port[relUnit/text()[.= '" + _unit + "'] and (swIfType/text()[.='1'] or swIfType/text()[.='2'])]").length;
}
else{
return this.portsDataXml.selectNodes("//port[relUnit/text()[.= '" + _unit + "'] and (swIfType/text()[.!='1'] or swIfType/text()[.!='2'])]").length;
}
}catch(e){return null;}
};
this.getCollUnits=function()
{
return this.modulesDataXml.selectNodes("//modulesDataBase/module");
};
this.existsByName = function(port_name)
{
if(null==port_name) return true;
if(this.portsDataXml.selectSingleNode("//port[portName/text()[.='" + port_name + "']]"))
return true;
else
return false;
};
this.existsByID = function(ifindex)
{
if(null==ifindex) return true;
if(this.portsDataXml.selectSingleNode("//port[ifIndex/text()[.='" + ifindex + "']]"))
return true;
else
return false;
};
this.getUnitByPortName = function(name)
{
if(this.existsByName(name))
{
return IXML.getText(this.portsDataXml.selectSingleNode("//port[portName/text()[.='" + name + "']]").
selectSingleNode("./relUnit"));
}
else
return null;
};
this.getUnitByPortID = function(id)
{
if(this.existsByID(id))
{
return IXML.getText(this.portsDataXml.selectSingleNode("//port[ifIndex/text()[.='" + id + "']]").
selectSingleNode("./relUnit"));
}
else
return null;
};
this.getSpeedPortByIndex=function(index){
var ifSpeed="";
try{
var portNode = this.portsDataXml.selectSingleNode("//port[ifIndex='" + index + "']");
ifSpeed = IXML.getText(portNode.selectSingleNode("./ifSpeed"));
}
catch(e){
alert("element ifIndex with value - " + index + " isn't exists in xml document");
return;
}
if (ifSpeed==10000000) ifSpeed = 1;
else if (ifSpeed==100000000) ifSpeed = 2;
else if (ifSpeed==1000000000) ifSpeed = 3;
else if (ifSpeed==10000000000) ifSpeed = 4;
else ifSpeed = 0;
return ifSpeed;
};
this.getPortStatus=function(index){
var operStatus="";
var suspendedStatus="";
try{
var portNode = this.portsDataXml.selectSingleNode("//port[ifIndex='" + index + "']");
operStatus=IXML.getText(portNode.selectSingleNode("./OperStatus"));
suspendedStatus=IXML.getText(portNode.selectSingleNode("./suspStatus"));
}
catch(e){
alert("element ifIndex with value - " + index + " isn't exists in xml document");
return;
}
return ( operStatus == 1 ? "Up" : ( suspendedStatus == 1 ? "Suspended" : "Down"))
};
this.dispose=function(){
this.currentUnit = (this.isStack==true && this.MasterUnit>0)?this.MasterUnit:(this.isStack==true && this.BackUpUnit!=-1 )?
this.BackUpUnit:this.firstPresentModule;
};
this.getPortType=function(portID){
var portNode = this.portsDataXml.selectSingleNode("//port[ifIndex='" + portID + "']");
var swIfType = IXML.getText(portNode.selectSingleNode("./swIfType"));
return (swIfType=="1" || swIfType=="2")?"E":"G";
};
this.getTransStatus = function(index){
var transStatus="";
try{
var portNode=this.portsDataXml.selectSingleNode("//port[ifIndex='" + index + "']");
transStatus =IXML.getText(portNode.selectSingleNode("./transType"));
}
catch(e){
alert("element ifIndex with value - " + index + " isn't exists in xml document");
return;
}
return (transStatus)
};
};
Polling.authentication = function()
{
var url = "device/authenticate_user.xml";
var cbo = new CallBackObject();
cbo.DoCallBack(null,url,true,"GET");
cbo.OnComplete=Polling.complete_authentication;
};
Polling.complete_authentication = function(responseText,responseXML)
{
window.setTimeout("Polling.authentication()",oPolling.authInterval) ;
};
var oNavigator=null;
Navigation.NODE_NAME = "SiteMapNode";
function Navigation()
{
this.url="";
this.siteMapXml=null;
this.selectedTab="";
this.prev_selectedTab="";
};
Navigation.Main = function(url)
{
if(oNavigator.prev_selectedTab!=oNavigator.selectedTab)
PopUpManager.closeAll();
oNavigator.prev_selectedTab =oNavigator.selectedTab;
var workArea = document.getElementById("workArea");
if(url.indexOf(".xml")!=-1){
if(null==Page.placeHolder){
if(workArea){
var xmlResult = document.createElement("div");
xmlResult.id = "xmlresult";
xmlResult.style.width="100%";
xmlResult.style.height="98%";
xmlResult.style.align="center";
xmlResult.style.overflow="auto";
if(window.frames["mainFrame"])workArea.removeChild(document.getElementById("mainFrame"));
workArea.appendChild(xmlResult);
Page.placeHolder = document.getElementById("xmlresult");
Page.get(url);
}
}else{
Page.wait(true);
Page.dispose();
Page.get(url);
}
}else{
if(workArea){
if(document.getElementById("xmlresult")){
Page.placeHolder=null;
workArea.removeChild(document.getElementById("xmlresult"));
}
var mainframe = document.getElementById("mainFrame");
if(mainframe){
mainframe.contentWindow.location.href=url;
}else{
mainframe = "<iframe id='mainFrame' name='mainFrame' frameborder=0 style='width:100%;height:100%' src=" + url + ">";
workArea.innerHTML = mainframe;
document.getElementById("mainFrame").contentWindow.location.href=url;
}
}
}
};
Navigation.create= function(url)
{
oNavigator = new Navigation();
oNavigator.get(url)
};
Navigation.async_completLoad=function(responseText,responseXml){
if(responseXml && responseXml.childNodes.length>0){
oNavigator.siteMapXml = responseXml;
oNavigator.prepareSiteMap();
oNavigator.navigate();
}
else
{
if(responseText!=""){
try{
oNavigator.siteMapXml = (new DOMParser()).parseFromString(responseText, "text/xml");
oNavigator.prepareSiteMap();
oNavigator.navigate();
}
catch(e){}
}
}
};
Navigation.prototype={
get:function(_url){
this.url=_url;
this.siteMapXml= IXML.getDomDocument();
var cbo = new CallBackObject(this);
if (PageManager.IS_MOCKUP)
{
this.siteMapXml.async= false;
this.siteMapXml.load(this.url);
this.OnComplete("",this.siteMapXml)
}
else
{
this.siteMapXml.async= true;
cbo.DoCallBack(null,this.url,true,"GET");
}
},
OnComplete:function(responseText,responseXml){
if(responseXml && responseXml.childNodes.length>0){
this.siteMapXml = responseXml;
this.evalSiteMapEvents();
this.prepareSiteMap();
this.navigate();
}
},
getSelectedNode:function(){
return this.siteMapXml.documentElement.selectSingleNode("//" + Navigation.NODE_NAME + "[@SELECTED='true']");
},
clearSelectedNode:function(){
var selNode= this.getSelectedNode();
if (selNode!=null)
this.getSelectedNode().removeAttribute("SELECTED")
},
setSelectedNode:function(node){
this.clearSelectedNode();
node.setAttribute("SELECTED","true")
},
getNodeById:function(id){
if (!id) return null;
return this.siteMapXml.documentElement.selectSingleNode("//" + Navigation.NODE_NAME + "[@ID='" + id + "']")
},
get_Url:function (id){
var node =this.getNodeById(id) ;
var tmp = "";
if(node.selectSingleNode("./URL")){
try
{
tmp = eval(IXML.getText(node.selectSingleNode("./URL/GET")));
}
catch(e)
{
tmp = IXML.getText(node.selectSingleNode("./URL/GET"));
}
if (!IS_MOCKUP) return tmp ;
else return this.get_Url_mockup(tmp)
};
},
get_Url_mockup:function(url){
url = url.trim();
if (url.indexOf("wcd?{file=")==0)
{
url = url.substr(10)
}
if (url.indexOf("}")>-1)
{
url = url.substr(0, url.indexOf("}"))
}
if (url.indexOf("/")>-1) url = url.substr(1);
return url;
}
};
Navigation.prototype.navigate = function(id){
if(Page.loading == true)
{
return;
}
if(!id)
id = this.siteMapXml.documentElement.
selectSingleNode("//" + Navigation.NODE_NAME + "[@ID]").
getAttribute("ID");
this.selectedTab = id;
var node = this.getNodeById(id);
this.setSelectedNode(node);
if (!node.selectSingleNode("./URL" ))
if(node.selectNodes("./" + Navigation.NODE_NAME ).length>0)
{
id = IXML.getChildElement(node,1).getAttribute("ID");
this.navigate(id);
return;
}
try{
var url = this.get_Url(this.selectedTab);
if (url==null || url.trim()=="" )
{
if (DEBUG==true)
alert ("Core GUI Diagnostics SiteMap: " + Navigation.NODE_NAME + " ID = " + id + " lacks GET url" )
}
else
Navigation.Main(url)
}catch(e){ }
this.display();
};
Navigation.prototype.prepareSiteMap_Mockup = function (){};
Navigation.prototype.prepareSiteMap = function ()
{
var xpath;
if (oPolling.isStack)
{
xpath = "//" + Navigation.NODE_NAME + "[@STANDALONE_ONLY='true']";
this.removeNodeColl(xpath)
}
else
{
xpath = "//" + Navigation.NODE_NAME + "[@STACK_ONLY='true']";
this.removeNodeColl(xpath)
}
if (oPolling.displayRouter==false)
{
xpath = "//" + Navigation.NODE_NAME + "[@LAYER_3_ONLY='true']";
this.removeNodeColl(xpath)
}
else
{
xpath = "//" + Navigation.NODE_NAME + "[@LAYER_2_ONLY='true']";
this.removeNodeColl(xpath)
}
xpath = ".//*[@MODULE_TYPE and @MODULE_TYPE [.!=''] and @MODULE_TYPE [.!= '" + oPolling.moduleType + "']]";
this.removeNodeColl(xpath);
this.removeSameNameSiblings("//GET[@MODULE_TYPE[.='" + oPolling.moduleType + "']]", "GET");
this.removeSameNameSiblings("//POST[@MODULE_TYPE[.='" + oPolling.moduleType + "']]", "POST")
};
Navigation.prototype.removeSameNameSiblings = function(baseXpath, name)
{
var coll = this.siteMapXml.selectNodes(baseXpath);
for (var i = 0; i < coll.length; i++)
{
sibColl = coll[i].selectNodes("following-sibling::" + name);
for(var j=0; j<sibColl.length;j++)
{
sibColl[j].parentNode.removeChild(sibColl[j])
}
sibColl = coll[i].selectNodes("preceding-sibling::" + name);
for(var j=0; j<sibColl.length;j++)
{
sibColl[j].parentNode.removeChild(sibColl[j])
}
}
};
Navigation.prototype.removeNodeColl = function (xpath)
{
var currentModuleType = oPolling.moduleType ;
var coll = this.siteMapXml.selectNodes(xpath);
var node,arr_moduleType,bFind;
for(var i=0; i<coll.length; i++ )
{
bFind = false;
node = coll[i];
if(node.attributes.getNamedItem("MODULE_TYPE"))
{
arr_moduleType = node.getAttribute("MODULE_TYPE").split(",");
for(var j=0;j<arr_moduleType.length && !bFind;j++)
{
if(arr_moduleType[j]==currentModuleType)
bFind = true;
};
}
if(!bFind)
IXML.getParentElement(coll[i]).removeChild(coll[i])
}
};
Navigation.prototype.getNodeLevel = function(node)
{
var i = 1;
if (node.tagName!= Navigation.NODE_NAME ) return 0;
node = IXML.getParentElement(node);
while (node!=null && node.tagName!="SiteMap")
{
node = IXML.getParentElement(node);
i++
}
return i;
};
Navigation.prototype.evalSiteMapEvents = function(_event){
try{
if (_event==null) return;
if(null==this.siteMapXml)return;
if(null==this.siteMapXml.selectSingleNode("//SiteMap"))return;
var rootNode = this.siteMapXml.selectSingleNode("//SiteMap");
if(rootNode==null)return;
var collObj = rootNode.selectNodes(".//*[@" + _event.toUpperCase() + " and not(@OBJECT)]");
if(collObj.length>0){
var bool = false;
for(var i = 0;i<collObj.length;i++){
eval(collObj[i].getAttribute(_event.toUpperCase()))
}
}
if(rootNode.attributes.getNamedItem(_event.toUpperCase())){
eval(rootNode.getAttribute(_event.toUpperCase()));
};
}
catch(e){
if(DEBUG==true)
alert("***Error occured in method Navigation.evalSiteMapEvents*** " + e.description)
}
};
Navigation.prototype.display = function ()
{
};
var DATAROOT = "DeviceConfiguration";
var LIST_ANCHOR="List";
var DIAGNOSTIC_MASTER="Core GUI diagnostics master xml: ";
var DIAGNOSTIC_DATA="Core GUI diagnostics data xml:";
var DIAGNOSTIC_CORE = "Core GUI diagnostics: ";
var ACTION_RESTORE="restore";
var ACTION_SET="set";
var ACTION_DELETE="delete";
var ACTION_DELETE_ALL="deleteAll";
var ACTION_RESTORE="restore";
var ACTION_RESTORE_ALL = "restoreAll";
var ACTION_DEFAULT="";
var ACTION_UPDATE="update";
var ACTION_DELETE_LEARNED = "deleteLearned";
var ACTION_STATUS_VALID=0;
PageManager.AUTHENTICATION_PATH=(typeof AUTHENTICATION_PATH!='undefined')?AUTHENTICATION_PATH:"config/authentication_page.htm";
PageManager.ACTION=ACTION_RESTORE;
PageManager.IS_MOCKUP = (typeof IS_MOCKUP!='undefined')?IS_MOCKUP:false;
PageManager.IS_JS_TRANSFORMATION = (typeof IS_JS_TRANSFORMATION != 'undefined')?IS_JS_TRANSFORMATION:false;
PageManager.CUSTOM_XSL = (typeof CUSTOM_XSL!='undefined')?CUSTOM_XSL:"CustomTemplates.xsl";
PageManager.INVALID=(typeof INVALID!='undefined')?INVALID:"Operation failed";
PageManager.MissingAPI=(typeof MissingAPI!='undefined')?MissingAPI:"The API function isn't defined";
var enumActionStatus=[[0,"OK",""],
[3,"",PageManager.INVALID],
[-1,"Missing API",PageManager.MissingAPI]];
function PageManager()
{
this.status=ACTION_STATUS_VALID;
this.url="";
this.masterXml = null;
this.dataXml = null;
this.docXsl=null;
this.customXsl = null;
this.processor = null;
this.mainStyle;
this.placeHolder;
this.dataXml_delete=null;
this.customObjects=[];
this.enumNode;
this.enumToVal="";
this.enumToData = "";
this.loading=false;
this.initialized = false;
};
PageManager.prototype={
get:function(url){
this.url=url;
try{
if(PageManager.IS_MOCKUP)
{
this.masterXml.async = false;
this.wait(true);
this.masterXml.load(this.url);
if(this.masterXml){
this.loadMockupData(url);
this.buildXmlData();
this.onbeforeload();
if(this.loadScript())return;
this.load_complete();
}
this.wait(false);
}
else
{
this.wait(true);
var cbo = new CallBackObject(this);
this.OnComplete = this.completeMasterLoad;
cbo.DoCallBack(null,this.url,true,"GET");
}
}
catch(e){
this.wait(false);
if(DEBUG && !PageManager.IS_MOCKUP)
this.checkValidResponse(this.masterXml);
return false;
}
},
loadMockupData:function(masterUrl)
{
var tmpXML,tmpDataXml,url,dataNodes;
try
{
tmpXML=IXML.getDomDocument(null, "ResponseData");
tmpXML.async = false;
IXML.appendChild(this.masterXml.documentElement,tmpXML.documentElement);
this.masterXml = tmpXML;
url =masterUrl.substr(0, masterUrl.indexOf(".xml")) + "_data_" + oPolling.moduleType + ".xml";
tmpDataXml=IXML.getDomDocument();
tmpDataXml.async=false;
try{
tmpDataXml.load(url);
if(null==IXML.getChildElement(tmpDataXml,1))
throw "can not download the file";
}catch(e){
url = masterUrl.substr(0, masterUrl.indexOf(".xml")) + "_data" + ".xml";
tmpDataXml.async=false;
tmpDataXml.load(url);
}
dataNodes = tmpDataXml.selectNodes("//ResponseData/*");
for(var i=0;i<dataNodes.length;i++)
{
if(dataNodes[i])
{
IXML.appendChild(dataNodes[i],$m("//ResponseData"));
}
}
}
catch (e)
{
}
}
,
init:function(placeHolderID){
this.masterXml=IXML.getDomDocument();
this.dataXml=IXML.getDomDocument(null,DATAROOT);
if(null==this.placeHolder)this.placeHolder=document.getElementById(placeHolderID);
if(!_IXML_IS_SAFARI && !PageManager.IS_JS_TRANSFORMATION)
{
if(arguments[1] && typeof arguments[1] == "string")
this.mainStyle = arguments[1];
else
this.mainStyle=MAIN_STYLE;
if(arguments[2] && typeof arguments[2] == "string")
PageManager.CUSTOM_XSL = arguments[2];
this.docXsl=IXML.getDomDocument();
this.docXsl.async=true;
this.customXsl = IXML.getDomDocument();
this.customXsl.async=true;
if(null==this.processor)this.processor=new XSLTProcessor();
if(PageManager.IS_MOCKUP)
{
this.docXsl.async=false;
this.docXsl.load(this.mainStyle);
this.getCustomTemplatesXSL();
}
else
{
var cbo1 = new CallBackObject(this);
this.OnComplete = this.completeLoadXSL;
cbo1.DoCallBack(null,this.mainStyle,true,"GET");
}
}
else
{
if(null==this.processor)this.processor = new CustomTransform();
this.initialized=true;
}
},
getCustomTemplatesXSL:function(responseText,responseXML)
{
if(PageManager.IS_MOCKUP)
{
this.customXsl.async = false;
this.customXsl.load(PageManager.CUSTOM_XSL);
}
else
{
if(responseXML && responseXML.childNodes.length>0)
{
this.customXsl = responseXML;
}
else if(responseText!="")
{
this.customXsl = (new DOMParser()).parseFromString(responseText, "text/xml");
if(null==this.customXsl)throw "not valid xml string";
}
else
{
alert("custom stylesheet is not found");
return
}
}
this.initProcessor();
},
initProcessor : function()
{
var boolMain = false;
var colT = this.customXsl.selectNodes("//*");
for (var i=0;i<colT.length;i++)
{
if(colT[i].nodeName=="xsl:template")
{
IXML.appendChild(colT[i],this.docXsl.documentElement);
if ((colT[i]).getAttribute("name")=='main') boolMain = true;
}
}
if (boolMain)
{
var mainTemplateColl = this.docXsl.selectNodes("//*[@name='main']");
for(var j=0;j<mainTemplateColl.length; j++)
{
if (mainTemplateColl[j].nodeName =="xsl:template")
{
IXML.getParentElement(mainTemplateColl[j]).removeChild(mainTemplateColl[j]);
break;
}
};
};
this.processor.importStylesheet(this.docXsl);
this.initialized=true;
},
transform:function(){
if(!_IXML_IS_SAFARI && !PageManager.IS_JS_TRANSFORMATION)
{
var newDocument = this.processor.transformToDocument(arguments[0]);
return IXML.serialize(newDocument);
}
else
{
return this.processor.transformToHTML(arguments[0])
}
},
buildXmlData:function(){
var responseData=$m("//ResponseData");
var collDataNodes = responseData.selectNodes(".//" + DATAROOT);
var templates = $col("//TEMPLATE");
if(collDataNodes.length>0 && templates.length>0){
var i;
with(this){
var api_Name="";
var api_Node=null;
for(var i=0;i<templates.length;i++){
api_Name=templates[i].getAttribute("API").trim();
api_Node=responseData.selectSingleNode(".//" + api_Name);
if(api_Node==null){
api_Node = IXML.getDomDocument(null,api_Name);
try{IXML.appendChild(api_Node.selectSingleNode("//" + api_Name),dataXml.documentElement)}catch(e){};
}
else{
try{ IXML.appendChild(api_Node,dataXml.documentElement)}catch(e){};
};
};
};
};
return true;
},
uni_validPostXml:function(xml){
if(null==IXML.getChildElement(xml,1))return false;
var collSections=$col("//TEMPLATE[@API]");
var i,j,sectionName,sectionNode,dataNode;
for(var i=0;i<collSections.length;i++)
{
sectionName=collSections[i].getAttribute("API");
sectionNodes=xml.selectNodes("//" + sectionName);
for (var k=0; k < sectionNodes.length;k++)
{
var sectionNode = sectionNodes[k];
if(null==sectionNode)continue;
if(null==IXML.getChildElement(sectionNode,1))
{
IXML.getParentElement(sectionNode).removeChild(sectionNode);
if(null==IXML.getChildElement(xml,1))return false;
continue;
}
if (sectionNode.getAttribute("action") && sectionNode.getAttribute("action").toLowerCase()=="set" )
{
collRequiredNodes = collSections[i].selectNodes(".//*[@required='true']");
for(var j=0;j<collRequiredNodes.length;j++)
{
dataNode=sectionNode.selectSingleNode(".//" + collRequiredNodes[j].nodeName);
if(dataNode)
if(IXML.getText(dataNode)=="")
{
var _alert = collRequiredNodes[j].getAttribute("alert");
if(null!=_alert)
alert(_alert);
else if(DEBUG==true)
alert("field " + dataNode.nodeName + " shouldn't be blank");
return false;
}
};
}
};
}
return true;
},
uni_joinXmlPost:function()
{
var action,postedDelete_xml,postedSet_xml;
if(this.dataXml_delete && this.dataXml){
action = ACTION_DELETE;
postedDelete_xml=this.dataXml_delete.selectSingleNode("//" + DATAROOT);
this.setSectionAction(postedDelete_xml,ACTION_DELETE);
postedSet_xml= $d("//" + DATAROOT);
IXML.copyChildNodes(postedSet_xml,postedDelete_xml,true);
posted_xml = postedDelete_xml;
}
else posted_xml = $d("//" + DATAROOT);
return posted_xml ;
},
uni_setActionSet:function(xml,default_action)
{
if (default_action ==null || default_action=="" ) default_action = ACTION_SET;
var sectionName,sectionNode,sectionNodes;
var collTemplateNodes = $col("//TEMPLATE[@action]");
if(collTemplateNodes.length>0){
for(var i=0;i<collTemplateNodes.length;i++){
sectionName =collTemplateNodes[i].getAttribute("API");
sectionNodes = xml.selectNodes("//" + sectionName) ;
for (var j=0; j < sectionNodes.length;j++)
{
sectionNode = sectionNodes[j];
if (sectionNode.getAttribute("action")=='' || sectionNode.getAttribute("action")==null )
sectionNode.setAttribute("action",default_action);
}
};
};
},
reorder_postXml:function(xml, sections_order)
{
if (sections_order==null || sections_order.trim()=='') return;
sections_order = sections_order.split(",");
var section_name,action, node;
var tmpDoc = xml.cloneNode(true);
IXML.clearChildNodes(xml) ;
for (var i=0; i< sections_order.length;i++ )
{
section_name = sections_order[i].split("|")[0] ;
action = sections_order[i].split("|")[1] ;
node = tmpDoc.selectSingleNode(".//" + section_name + "[@action='" + action + "']");
if (node==null) continue;
IXML.appendChild(node,xml);
}
},
sendAll:function(default_action,callback,sender,sections_order){
if(PageManager.IS_MOCKUP)return;
var async=true;
var postedSet_xml,postedDelete_xml,posted_xml;
posted_xml=this.uni_joinXmlPost();
this.uni_setActionSet(posted_xml,default_action);
if(this.buildPostXml(posted_xml)){
this.reorder_postXml(posted_xml,sections_order);
if(this.uni_validPostXml(posted_xml))
this.post(posted_xml,async,'',callback,sender);
else
{
this.wait(false);
oNavigator.navigate(oNavigator.selectedTab);
}
}
} ,
send:function(action,callback,sender){
if(PageManager.IS_MOCKUP)return;
var async=true;
var postedSet_xml,postedDelete_xml,posted_xml;
if(action && action!=ACTION_DELETE && action!=ACTION_SET)
{
postedSet_xml = $d("//" + DATAROOT);
if(this.buildPostXml(postedSet_xml)){
if(this.validPostXml(postedSet_xml)){
this.setSectionAction(postedSet_xml,action);
this.post(postedSet_xml,async,action,callback,sender) ;
}
else
{
this.wait(false);
oNavigator.navigate(oNavigator.selectedTab);
}
}
return;
}
posted_xml=this.joinXmlPost();
if(this.buildPostXml(posted_xml)){
if(this.validPostXml(posted_xml))
this.post(posted_xml,async,action,callback,sender);
else
{
this.wait(false);
oNavigator.navigate(oNavigator.selectedTab);
}
}
},
joinXmlPost:function()
{
var action,postedDelete_xml,postedSet_xml;
if(this.dataXml_delete && this.dataXml){
action = ACTION_DELETE;
postedDelete_xml=this.dataXml_delete.selectSingleNode("//" + DATAROOT);
this.setSectionAction(postedDelete_xml,ACTION_DELETE);
postedSet_xml= $d("//" + DATAROOT);
this.setSectionAction(postedSet_xml,ACTION_SET);
IXML.copyChildNodes(postedSet_xml,postedDelete_xml,true);
posted_xml = postedDelete_xml;
}
else if(this.dataXml){
action = ACTION_SET;
postedSet_xml= $d("//" + DATAROOT);
this.setSectionAction(postedSet_xml,ACTION_SET);
posted_xml = postedSet_xml;
}
return posted_xml ;
},
OnComplete:function(responseText,responseXML){},
post:function(posted_xml,async,action,callback,sender)
{
if(PageManager.IS_MOCKUP)return;
var post_data;
var cbo = new CallBackObject((sender)?sender:null);
if(callback)
{
if(sender)
{
if(typeof(callback)=="string")
this.OnComplete = eval(callback);
else
this.OnComplete = callback;
}
else
{
cbo.OnComplete = eval(callback);
}
}
else
{
cbo.OnComplete=PageManager.cbo_Complete_Post;
this.wait(true);
}
post_data="<?xml version='1.0' encoding='utf-8'?>" + IXML.serialize(posted_xml);
if(_IXML_IS_IE && DEBUG==true ){
if(POST_XML_PATH!="")
Util.debug_saveXml(post_data,POST_XML_PATH);
}
cbo.DoCallBack(post_data,this.setPostURL(),async,"POST",action);
this.dataXml_delete = null;
},
before_save:function(){
ControlManager.VALIDATION_SUMMERY="";
var collID = $col("//*[(@VALID_TYPE or @BIND) and not(@OBJECT)]");
var i,bind;
var j=0;
if(collID){
for(var i =0;i<collID.length;i++){
if(collID[i].attributes.getNamedItem("ID")&& collID[i].getAttribute("SUBMIT")=="true"){
bind=(collID[i].attributes.getNamedItem("BIND_POST"))? collID[i].getAttribute("BIND_POST"): collID[i].getAttribute("BIND");
ControlManager.create(collID[i].getAttribute("ID"),
bind,
collID[i].getAttribute("ENUM"),
collID[i].getAttribute("VALID_TYPE"),
"save",
collID[i].getAttribute("SUBMIT"),
collID[i].getAttribute("FIELD_NAME"),
collID[i].getAttribute("MANDATORY"),
collID[i].getAttribute("MIN_VALUE"),
collID[i].getAttribute("MAX_VALUE"),
collID[i].getAttribute("FILTER"),
collID[i].getAttribute("MSG_ID"));
j++;
};
};
if(ControlManager.VALIDATION_SUMMERY!=""){
if(!_IXML_IS_IE){
ControlManager.alert(j);
}
else
alert(ControlManager.VALIDATION_SUMMERY);
return false;
};
};
this._save();
return true;
},
save:function(){
if(PageManager.IS_MOCKUP)return;
if(!this.before_save())
return false;
else
return true
},
_save:function()
{
this.cgo_save();
if(Page.customObjects && Page.customObjects.length>0){
for(var i=0;i<Page.customObjects.length;i++){
try{eval(Page.customObjects[i]).save();}catch(e){};
};
};
},
cgo_save:function()
{
if(typeof RT != 'undefined')
if(RT.collRT && RT.collRT.length>0)
RT.save();
if(typeof RT_v2 != 'undefined')
if(oRT_v2)oRT_v2.save();
if(typeof PT != 'undefined')
if(PT.coll && PT.coll.length>0)
PT.save();
if(typeof List != 'undefined')
if(List.coll && List.coll.length>0)
List.save();
if(typeof BitMask != 'undefined')
if(BitMask.coll && BitMask.coll.length>0)
BitMask.save();
},
buildPostXml:function(xmldoc){
try{
with(this){
var collSections = xmldoc.selectNodes("./*");
for(var i=0;i<collSections.length;i++)
{
if(null==collSections[i].attributes.getNamedItem("set"))
xmldoc.removeChild(collSections[i]);
};
prepareDataXml(xmldoc);
deleteUnneededNodes(xmldoc);
deleteAttributes(xmldoc);
};
return true;
}
catch(e){
if(typeof DEBUG !='undefined')
if(DEBUG)
alert( "error occured in process building of post xml data ");
return false;
}
},
setSectionAction:function(xml,action){
var sectionName,sectionNode;
var collTemplateNodes = $col("//TEMPLATE[@action]");
if(collTemplateNodes.length>0){
for(var i=0;i<collTemplateNodes.length;i++){
sectionName =collTemplateNodes[i].getAttribute("API");
sectionNode = xml.selectSingleNode("//" + sectionName) ;
if(sectionNode)sectionNode.setAttribute("action",action);
};
};
},
restoreSection:function(sectionName){
var new_section_restored;
var section_restored = $d("//" + sectionName + "[@action='" + ACTION_RESTORE + "']");
if(section_restored)return;
var section_set = $d("//" + sectionName + "[@action='" + ACTION_SET + "']");
var section_node=(section_set)?section_node:$d("//" + sectionName);
if(section_node)
{
new_section_restored = IXML.getDomDocument(null,sectionName).selectSingleNode("//" + sectionName);
IXML.copyChildNodes(section_node,new_section_restored);
new_section_restored.setAttribute("action",ACTION_RESTORE);
this.setAlteredDataNodes(new_section_restored,ACTION_RESTORE);
}
else
{
this.createaSectionXml(sectionName,this.dataXml,ACTION_RESTORE);
this.setAlteredDataNodes($d("//" + sectionName + "[@action='" + ACTION_RESTORE + "']"),ACTION_RESTORE);
}
},
sectionCompleting:function(section){
var tmpl_section = $m("//TEMPLATE[@API='" + section.nodeName + "']");
this._sectionCompleting(section,tmpl_section);
},
_sectionCompleting:function(section,tmpl_section){
var tmpl_section_childs = tmpl_section.selectNodes("./*");
var context;
for(var i=0;i<tmpl_section_childs.length;i++)
{
try
{
if(null==this.getDataNodeByTemplateNode(tmpl_section_childs[i]))
IXML.appendChild(tmpl_section_childs[i],section);
context = section.selectSingleNode(".//" + tmpl_section_childs[i].nodeName);
if(null==context){
IXML.appendChild(tmpl_section_childs[i],section);
context = section.selectSingleNode(".//" + tmpl_section_childs[i].nodeName);
}
this._sectionCompleting(context,tmpl_section_childs[i])
}catch(e){
if(DEBUG)alert("Error occured in _sectionCompleting function");
}
}
},
createSectionXml:function(section_name,dataXml,action)
{
var section_node = dataXml.selectNodes("//" + DATAROOT + "/" + section_name);
var _action;
var b_exists=false;
if(section_node.length>0){
for(var i=0;i<section_node.length && !b_exists;i++){
_action = section_node[i].getAttribute("action");
if(IXML.getChildElement(section_node[i],1)){
if(_action == action)
b_exists=true;
else if(action==ACTION_SET && null==_action)
{
b_exists=true;
section_node[i].setAttribute("action",action);
}
this.sectionCompleting(section_node[i]);
}
}
}
if(!b_exists){
new_section_node = IXML.getDomDocument(null,section_name).selectSingleNode("//" + section_name);
new_section_node.setAttribute("action",action);
var template = $m("//TEMPLATE[@API='" + section_name + "']");
IXML.copyChildNodes(template,new_section_node);
switch(action)
{
case ACTION_RESTORE:
case ACTION_DELETE:
if(section_node.length>0)
IXML.insertBefore(new_section_node,section_node[0]);
else
IXML.appendChild(new_section_node,(dataXml.nodeType==Node.DOCUMENT_NODE)?
dataXml.selectSingleNode("//" + DATAROOT):dataXml);
break;
default:IXML.appendChild(new_section_node,(dataXml.nodeType==Node.DOCUMENT_NODE)?
dataXml.selectSingleNode("//" + DATAROOT):dataXml);
}
}
},
setAlteredDataNodes:function(node,action){
if(null==node)return;
IXML.set_selfancestorsAttribute(node,"set",action);
},
checkValidResponse:function(xml){
if(xml && null==IXML.getChildElement(xml,1)){
if(null==xml){Page.buildErrorMessage([-1,"xml receiving is failed"]);}
return false;
}
else{
var actionStatusNode = xml.selectNodes("//ActionStatus")[0];
if(null==actionStatusNode ){
this.buildAlert([-1,"xml is not well formed: ActionStatus section does not exist: "]);
this.status=-1;
this.wait(false);
return false;
};
if(IXML.getText(actionStatusNode.selectSingleNode(".//statusCode"))!=0){
this.status = IXML.getText(actionStatusNode.selectSingleNode(".//statusCode"));
this.buildAlert([this.status,IXML.getText(actionStatusNode.
selectSingleNode(".//statusString"))]);
this.wait(false);
return false;
};
return true;
};
},
setPostURL:function(){
try{
var url_post = IXML.getText(oNavigator.getSelectedNode().selectSingleNode("./URL/POST"));
if(null==url_post || url_post=="") url_post="wcd" ;
return url_post;
}catch(e){return "wcd";}
},
initPageObjects:function(){
this.initCoreGuiObjects();
var objects_xpath = "//*[@ONOBJECTINIT]";
var _customObjects=$col(objects_xpath);
if(_customObjects.length>0){
var cntObject=this.customObjects.length;
for(var i=0;i<_customObjects.length;i++){
if(IXML.getAncestors(_customObjects[i],"repeatedtable").length > 0 || IXML.getAncestors(_customObjects[i],"porttable").length > 0)continue;
var attr = _customObjects[i].getAttribute("ONOBJECTINIT");
if(attr=="") continue;
eval(attr);
};
};
},
initCoreGuiObjects:function(){
this.initList();
this.initBitMask();
this.initRT();
this.initPT();
this.initUnits();
this.initPager();
},
initRT:function(){
var rtObjects = $col("//*[starts-with(@OBJECT,'RT') and not(@ONOBJECTINIT)]");
var length,object_name;
for(var i=0;i<rtObjects.length;i++)
{
object_name = rtObjects[i].getAttribute("OBJECT");
if(typeof RT!='undefined' && object_name=="RT"){
try{
var oRT = new RT(rtObjects[i]);
RT.collRT.push([oRT.tableID,oRT]);
length = RT.collRT.length;
RT.collRT[length-1][1].onobjectsinit();
RT.collRT[length-1][1].onload();
}catch(e){}
};
if(typeof RT_v2 != 'undefined' && object_name=="RT_v2"){
try{
RT_v2.create(this.findNodeByUniqID(rtObjects[i].getAttribute("ID")));
}catch(e){};
}
};
},
initPT:function(){
var ptObjects = $col("//*[@OBJECT='PT']");
for(var i=0;i<ptObjects.length;i++)
{
if(PT){
try{
var oPT = new PT(ptObjects[i]);
oPT.getData();oPT.show();
PT.coll.push([oPT.tableID,oPT]);
length = PT.coll.length;
PT.coll[length-1][1].onobjectsinit();
PT.coll[length-1][1].onload();
}catch(e){}
}
};
},
initPager:function()
{
var pagerObjects = $col("//*[@OBJECT='Pager']");
for(var i=0;i<pagerObjects.length;i++)
{
try{
if(Pager){
var _Pager = new Pager();
_Pager.init(pagerObjects[i]);
_Pager.show();
if(Pager.collPagers=null)Pager.collPagers = new Array();
Pager.collPagers.push([pagerObjects[i].getAttribute("ID"),_Pager]);
}
}catch(e){
}
};
},
initUnits:function(){
var unitsObjects = $col("//*[@OBJECT='Units']");
if(oPolling){
if(oPolling.isStack){
for(var i=0;i<unitsObjects.length;i++)
{
var _Unit = new Units(unitsObjects[i].getAttribute("ID"));
_Unit.build();
Units.coll.push([_Unit.id,_Unit]);
};
}
}
},
initList:function(){
var lists = $col("//*[@OBJECT='List']");
for(var i=0;i<lists.length;i++)
{
if(typeof List != 'undefined')
{
var olist = new List(lists[i].getAttribute("ID"));
List.coll.push([olist.ID,olist]);
}
};
},
initBitMask:function(){
var bmsks = $col("//*[@OBJECT='BitMask']");
for(var i=0;i<bmsks.length;i++)
{
if(typeof BitMask != 'undefined')
{
var oBmsk = new BitMask(bmsks[i].getAttribute("ID"));
BitMask.coll.push([oBmsk.id,oBmsk]);
}
};
},
evalControlsEvent:function(_event){
var function_name = "";
try{
var i;
if(null==this.masterXml)return;
var masterNode = $m("//MASTER");
if(masterNode==null)return;
var collObj = masterNode.selectNodes(".//*[@" + _event.toUpperCase() + " and not(@OBJECT)]");
if(collObj.length>0){
var bool = false;
for(var i = 0;i<collObj.length;i++){
function_name = collObj[i].getAttribute(_event.toUpperCase());
if (eval(function_name)=="cancelEvent") bool = true;
}
};
}
catch(e){
if(DEBUG==true){
alert("***control's onload evaluation diagnostic:there is error in " + function_name + ": *** " + e.description);
}
}
return (bool)?"cancelEvent":true;
},
evalMasterEvent:function(_event){
var function_name = "";
try{
if(null==this.masterXml)return;
var masterNode = $m("//MASTER");
if(masterNode==null)return;
if(masterNode.attributes.getNamedItem(_event.toUpperCase())){
function_name = masterNode.getAttribute(_event.toUpperCase());
return eval(function_name);
};
}
catch(e){
if(DEBUG==true)
alert("***master's onload evaluation diagnostic:there is error in " + function_name + ":*** " + e.description);
}
},
onbeforeload:function()
{
if(null==oPolling) return;
var currentModuleType = oPolling.moduleType ;
var collForeignNodes = $col("//*[@MODULE_TYPE]");
var parentNode;
var bFind;
try{
for(var i=0;i<collForeignNodes.length;i++)
{
var arr_moduleType = collForeignNodes[i].getAttribute("MODULE_TYPE").split(",");
bFind = false;
for(var j=0;j<arr_moduleType.length && !bFind;j++)
{
if(arr_moduleType[j]==currentModuleType)
bFind = true;
};
if(!bFind){
parentNode = IXML.getParentElement(collForeignNodes[i]);
parentNode.removeChild(collForeignNodes[i]);
}
}
var _event = $m("//MASTER").getAttribute("ONBEFORELOAD");
if(_event)
eval(_event);
}
catch(e){if(DEBUG==true)alert("Error occured in method onbeforeload*** " + e.description);}
},
loadScript:function()
{
var collScripts = $col("//jscript[@SRC]");
var b_loading = false;
if (collScripts.length > 0) {
b_loading = true;
var scriptSrcArr = [];
for (var i = 0; i < collScripts.length; i ++)
scriptSrcArr.push($a(collScripts[i], "SRC"));
scriptManager.load(scriptSrcArr);
}
return b_loading;
},
wait:function(bool)
{
this.loading = bool;
this.placeHolder.style.cursor=(bool)?"wait":"default";
},
dispose:function(){
var i=0;
try{
if(typeof(RT)!='undefined'){
if(RT.collRT && RT.collRT.length>0){
while(RT.collRT.length>0){
RT.collRT[RT.collRT.length-1][1].dispose();
var oRT = RT.collRT.pop();
oRT=null;
};
};
}
if(typeof(RT_v2)!='undefined'){
if(oRT_v2){
oRT_v2.dispose();
oRT_v2=null;
}
}
if(typeof(PT)!='undefined'){
if(PT.coll && PT.coll.length>0){
while(PT.coll.length>0){
PT.coll[PT.coll.length-1][1].dispose();
var oPT = PT.coll.pop();
oPT=null;
};
};
}
if(typeof(Pager)!='undefined'){
if(Pager.collPagers && Pager.collPagers.length>0){
while(Pager.collPagers.length>0){
Pager.collPagers[Pager.collPagers.length-1].dispose();
var _Pager = Pager.collPagers.pop();
_Pager = null;
}
}
};
if(typeof(Units)!='undefined'){
if(Units.coll && Units.coll.length>0){
while(Units.coll.length>0){
Units.coll[Units.coll.length-1][1].dispose();
var _Unit = Units.coll.pop();
_Unit = null;
}
}
};
if(typeof(List)!='undefined'){
if(List.coll && List.coll.length>0){
while(List.coll.length>0){
List.coll[List.coll.length-1][1].dispose();
var _List = List.coll.pop();
_List = null;
}
}
};
if(typeof(BitMask)!='undefined'){
if(BitMask.coll && BitMask.coll.length>0){
while(BitMask.coll.length>0){
BitMask.coll[BitMask.coll.length-1][1].dispose();
var _BitMask = BitMask.coll.pop();
_BitMask = null;
}
}
};
if(this.customObjects && this.customObjects.length>0)
{
while(this.customObjects.length>0){
var obj;
try{
eval(this.customObjects[this.customObjects.length-1]).dispose();
obj= this.customObjects.pop();
obj=null;
}catch(e){obj = this.customObjects.pop();
obj=null; }
}
}
if(this.dataXml)
IXML.clearChildNodes(this.dataXml.documentElement.
selectSingleNode("//" + DATAROOT));
if(this.dataXml_delete)
IXML.clearChildNodes(this.dataXml_delete.documentElement.
selectSingleNode("//" + DATAROOT));
if(oPolling)
oPolling.dispose();
}
catch(e){}
},
getMessage:function(messageID){
var messageXML = $m("//message[@ID='" + messageID + "']");
if(messageXML)
return IXML.getText(messageXML);
},
validPostXml:function(xml){
if(null==IXML.getChildElement(xml,1))return false;
var collSections=$col("//TEMPLATE[@API]");
var i,j,sectionName,sectionNode,dataNode;
for(var i=0;i<collSections.length;i++)
{
sectionName=collSections[i].getAttribute("API");
sectionNode=xml.selectSingleNode("//" + sectionName);
if(null==sectionNode)continue;
if(null==IXML.getChildElement(sectionNode,1))
{
IXML.getParentElement(sectionNode).removeChild(sectionNode);
if(null==IXML.getChildElement(xml,1))return false;
continue;
}
collRequiredNodes = collSections[i].selectNodes(".//*[@required='true']");
for(var j=0;j<collRequiredNodes.length;j++)
{
dataNode=sectionNode.selectSingleNode(".//" + collRequiredNodes[j].nodeName);
if(dataNode)
if(IXML.getText(dataNode)=="")
{
var _alert = collRequiredNodes[j].getAttribute("alert");
if(null!=_alert)
alert(_alert);
else if(DEBUG==true)
alert("field " + dataNode.nodeName + " shouldn't be blank");
return false;
}
};
};
return true;
},
load_complete:function()
{
try{
this.wait(false);
this.enumNode = $m("//ENUM");
this.translateEnumToJSON();
this.placeHolder.innerHTML=this.transform(this.masterXml);
setTimeout("Page.complete()",50);
}catch(e){
this.wait(false);
};
},
translateEnumToJSON:function(){
if(null==this.enumNode)return;
var enums = this.enumNode.selectNodes("./*");
var toVal=toData="";
for(var i=0;i<enums.length;i++){
var tagName =enums[i].nodeName;
var childs =enums[i].selectNodes("./*");
var s1=s2="";
for(var j=0;j<childs.length;j++){
var val = childs[j].getAttribute("VALUE");
val=(val=="")?'""':"'" + val + "'";
var txt = IXML.getText(childs[j]);
txt=(txt=="")?'""':"'" + txt + "'";
s1=(s1=="")?val + ":" + txt :s1+ "," + val + ":" + txt ;
s2=(s2=="")?txt + ":" + val :s2+ "," + txt + ":" + val;
};
toVal=(toVal=="")? tagName + ":{" + s2 + "}":toVal + "," + tagName +":{" + s2 + "}";
toData=(toData=="")?tagName + ":{" + s1 + "}":toData + "," + tagName +":{" + s1 + "}";
};
if(toVal!="" && toData!=""){
this.enumToVal=eval("({" + toVal + "})");
this.enumToData = eval("({" + toData + "})");
};
},
getEnumData:function(nodename,val){
var ret = val;
if(this.enumToData!=""){
if(this.enumToData[nodename]){
ret = this.enumToData[nodename][val.toString()];
ret = (IsUndefined(ret))?val:ret;
}
}
return ret.toString();
},
getEnumValue:function(nodename,data){
var ret = data;
if(this.enumToVal!=""){
if(this.enumToVal[nodename]){
ret = this.enumToVal[nodename][data.toString()];
ret = (IsUndefined(ret))?data:ret;
}
}
return ret.toString();
},
complete:function(){
try{
this.evalControlsEvent("onload");
this.updateXmlMaster();
this.initPageObjects();
if(typeof RT != 'undefined' && RT.collRT.length>0)RT.updateRelatedFields();
if(opener)
{
if(opener.RT.collRT.length>0)RT.updateRelatedFields();
}
this.evalMasterEvent("onload");
}catch(e){}
},
completeMasterLoad:function(responseText,responseXML){
if(responseXML && responseXML.childNodes.length>0){
this.masterXml = responseXML;
if(this.timeOutIdle(this.masterXml)) return;
}else{
if(responseText!=""){
if(!this.timeOutIdle(responseText)){
var xml_pos=responseText.indexOf("<?xml");
responseText=responseText.substr(xml_pos);
this.masterXml=(new DOMParser()).parseFromString(responseText, "text/xml");
}
else
return;
}
}
if(this.masterXml){
if(_IXML_IS_IE && DEBUG==true && GET_XML_PATH)
Util.debug_saveXml(this.masterXml.xml,GET_XML_PATH);
if(!this.checkValidResponse(this.masterXml)) return false;
this.buildXmlData();
this.onbeforeload();
if(this.loadScript())return;
IXML.clearChildNodes(this.placeHolder);
this.load_complete();
}else{
if(_IXML_IS_IE && DEBUG==true && GET_XML_PATH)
Util.debug_saveXml(responseText,GET_XML_PATH);
}
},
completeLoadXSL:function(responseText,responseXML)
{
if(responseXML && responseXML.childNodes.length>0)
{
this.docXsl = responseXML;
}
else if(responseText!="")
{
this.docXsl = (new DOMParser()).parseFromString(responseText, "text/xml");
if(null==this.docXsl)throw "not valid xml string";
}
else
{
alert("main stylesheet is not found");
return;
}
var cb = new CallBackObject(this);
cb.DoCallBack(null,PageManager.CUSTOM_XSL,true,"GET");
this.OnComplete = this.getCustomTemplatesXSL;
},
getAuthentication:function(responseText,responseXML)
{
try{
if(responseText!=""){
this.timeOutIdle(responseText);
return;
}
}catch(e){}
},
timeOutIdle:function(responseText)
{
if (typeof responseText == "object")
{
var xml = responseText;
var actionStatusNode = xml.documentElement.selectNodes("//ActionStatus")[0];
if (IXML.getText(actionStatusNode.selectSingleNode(".//statusCode")) == "4")
{
this.redirect();
return true;
}
}
else
{
responseText = responseText.trim();
var str = responseText.toLowerCase();
var xml = IXML.getDomDocument();
try
{
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
if (xml)
{
var actionStatusNode = xml.documentElement.selectNodes("//ActionStatus")[0];
if(IXML.getText(actionStatusNode.selectSingleNode(".//statusCode")) == "4")
{
this.redirect();
return true;
}
}
}
catch(e){};
if (str.indexOf("authentication") != -1 && str.indexOf("<html") != -1)
{
this.redirect();
return true;
}
}
return false;
},
redirect:function(){
if(opener){
opener.top.location.href=PageManager.AUTHENTICATION_PATH;
window.close();
}else
top.location.href=PageManager.AUTHENTICATION_PATH;
},
terminate:function(){
this.url="";
this.masterXml=null;
this.dataXml=null;
this.dataXml_delete=null;
if(document.getElementById("xmlresult"))
if(document.getElementById("xmlresult").expandoProperty)
document.getElementById("xmlresult").expandoProperty=null;
this.dispose();
}
};
PageManager.cbo_Complete_Post=function(responseText,responseXML){
Page.wait(false);
var xml=IXML.getDomDocument();
if(responseText!="")
{
if(!Page.timeOutIdle(responseText))
{
responseText = responseText.trim();
var xml_pos=responseText.indexOf("<?xml");
responseText=responseText.substr(xml_pos);
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
}
}
if(xml.childNodes.length>0){
if(!Page.checkValidResponse(xml))
{
oNavigator.navigate(oNavigator.selectedTab);
}
else
oNavigator.navigate(oNavigator.selectedTab);
};
};
PageManager.prototype.buildErrorMessage=function(arr){
var status = arr[0];
var message = arr[1].trim();
if(message=="")
{
switch(status)
{
case "3" : message= PageManager.INVALID;
case "-1": message= PageManager.MissingAPI;
}
}
var XML = new XMLWriter();
XML.BeginNode("master");
XML.BeginNode("table");
XML.Attrib("ID","tblErrorCollector");
XML.Attrib("WIDTH","80%");
XML.BeginNode("thead");
XML.BeginNode("th");
XML.Attrib("WIDTH","100px");
XML.WriteString("Action Status");
XML.EndNode("th");
XML.BeginNode("th");
XML.WriteString("Diagnostic");
XML.EndNode("th");
XML.EndNode("thead");
XML.BeginNode("tr");
XML.BeginNode("td");
XML.WriteString(get_enumActionStatus(status));
XML.EndNode("td");
XML.BeginNode("td");
XML.WriteString(message);
XML.EndNode("td");
XML.EndNode("tr");
XML.EndNode("table");
XML.Close();
this.masterXml=(new DOMParser()).parseFromString(XML.ToString(),"text/xml");
this.placeHolder.innerHTML=this.transform(Page.masterXml);
};
PageManager.prototype.buildAlert = function(arr)
{
var status = arr[0];
var message = arr[1].trim();
if(message=="")
{
switch(status)
{
case "3": message= PageManager.INVALID;break;
case "-1": message= PageManager.MissingAPI;break;
}
}
PopUpManager.closeAll();
alert(get_enumActionStatus(status) + " " + message);
};
PageManager.prototype.updateXmlMaster=function(){
var collXmlDynamicCombo = $col("//combobox");
var comboID;
if(collXmlDynamicCombo.length>0){
var i,firstChild;
var XML = new XMLWriter();
for(var i=0;i<collXmlDynamicCombo.length;i++){
comboID = collXmlDynamicCombo[i].getAttribute("ID");
if(!comboID || comboID=="")continue;
firstChild =IXML.getChildElement(collXmlDynamicCombo[i],1);
if(firstChild==null){
XML.BeginNode("combobox");
var j;
var combo = document.getElementById(comboID);
for(var j=0;j<combo.options.length;j++){
XML.BeginNode("option");
XML.Attrib("VALUE",combo.options[j].value);
if(combo.options[j].selected==true){
XML.Attrib("SELECTED","true");
};
XML.WriteString(combo.options[j].text);
XML.EndNode();
};
XML.Close();
var xmlCombo = IXML.getDomDocument();
xmlCombo = (new DOMParser()).parseFromString(XML.ToString(), "text/xml");
IXML.copyChildNodes(xmlCombo.documentElement.selectSingleNode("//combobox"),
collXmlDynamicCombo[i],false);
XML.Reset();
}
}
}
};
PageManager.prototype.findNodeByUniqID=function(id)
{
try{
return $m("//*[@ID='" + id + "']");
}catch(e){}
};
PageManager.prototype.getTemplateNodeByDataNode = function(dataNode)
{
var templateNode = null;
var pathArr = new Array();
var tmp = dataNode ;
var path = null;
while(tmp.nodeName!=DATAROOT)
{
pathArr.push(tmp.nodeName);
tmp = IXML.getParentElement(tmp);
}
if (pathArr.length>0)
{
var api = pathArr.pop();
if(pathArr.length > 1)
pathArr = pathArr.reverse();
if( pathArr.join("/") == "" )
path = "//TEMPLATES/TEMPLATE[@API='" + api + "']";
else
path = "//TEMPLATES/TEMPLATE[@API='" + api + "']/" + pathArr.join("/");
return $m(path);
}
else return null;
};
PageManager.prototype.getDataNodeByTemplateNode = function(templateNode)
{
var dataNode = null;
var pathArr = new Array();
var tmp = templateNode;
var path = null;
while(tmp.nodeName!="TEMPLATES")
{
if(tmp.nodeName=="TEMPLATE")
pathArr.push(tmp.getAttribute("API"));
else
pathArr.push(tmp.nodeName);
tmp = IXML.getParentElement(tmp);
}
if(pathArr.length>0)
{
var section_name = pathArr.pop();
if(pathArr.length > 1)
pathArr = pathArr.reverse();
if( pathArr.join("/") == "" )
path = "//" + section_name;
else
path = "//" + section_name + "/" + pathArr.join("/");
return $d(path);
}
else return null;
};
PageManager.prototype.prepareDataXml=function(node,xml)
{
var parentElement;
if(null==node.attributes.getNamedItem("set"))
{
var tmpNode = this.getTemplateNodeByDataNode(node) ;
if(tmpNode && !tmpNode.attributes.getNamedItem("required"))
{
node.setAttribute("set","remove");
node.removeAttribute("required");
}
else if(null==tmpNode)
{
node.setAttribute("set","remove");
node.removeAttribute("required");
}
}
else
{
node.removeAttribute("set");
var coll = node.childNodes;
for(var i = 0;i<coll.length;i++)
{
if(coll[i].nodeType==Node.ELEMENT_NODE)
this.prepareDataXml(coll[i]);
}
}
};
PageManager.prototype.deleteUnneededNodes = function(xml)
{
var removedColl = xml.selectNodes("//*[@set='remove']");
var removedNode,parentElement;
for(var i=0;i<removedColl.length>0;i++)
{
removedNode=removedColl[i];
parentElement = IXML.getParentElement(removedNode);
if(null==parentElement)continue;
parentElement.removeChild(removedNode);
}
};
PageManager.prototype.deleteAttributes = function(xml)
{
var collNodes=xml.selectNodes("//*[count(@*)>0]");
var action_name,action_value,pos;
for(var i=0;i<collNodes.length>0;i++)
{
action_name=action_value="";
while(collNodes[i].attributes.length > 0)
{
pos =collNodes[i].attributes.length-1;
if(collNodes[i].attributes[pos].nodeName.toLowerCase()=="action")
{
action_name = collNodes[i].attributes[pos].nodeName;
action_value = collNodes[i].attributes[pos].nodeValue;
}
collNodes[i].removeAttribute(collNodes[i].attributes[pos].nodeName);
}
if(action_name!="")
collNodes[i].setAttribute(action_name,action_value);
}
};
PageManager.getAuthentication=function(responseText,responseXML){};
PageManager.prototype.addCustomObject=function(obj_name,baseClass_name)
{
this.subscribe(obj_name,baseClass_name);
};
PageManager.prototype.subscribe = function(obj_name,baseClass_name)
{
var i=0,tableID;
switch(baseClass_name)
{
case "RT": if(typeof obj_name == "string")
{
tableID = eval(obj_name).tableID;
RT.collRT.push([tableID,eval(obj_name)]);break;
}
case "PT": if(typeof obj_name == "string")
{
tableID = eval(obj_name).tableID;
PT.coll.push([tableID,eval(obj_name)]);break;
}
case "List": if(typeof obj_name == "string")
{
tableID = eval(obj_name).ID;
List.coll.push([tableID,eval(obj_name)]);break;
}
default:while(i<this.customObjects.length)
{
if(this.customObjects[i++]==obj_name)
return;
}
this.customObjects.push(obj_name);
}
};
PageManager.prototype.reload = function()
{
this.wait(true);
this.dispose();
this.get(this.url);
};
function get_enumActionStatus(val){
var str=" ";
for(var i =0;i<enumActionStatus.length;i++){
if(val==enumActionStatus[i][0])
return enumActionStatus[i][1];
};
return str;
};
PageManager.getCustomTemplatesXSL = function(responseText,responseXML)
{
if(PageManager.IS_MOCKUP)
{
Page.customXsl.async = false;
Page.customXsl.load(PageManager.CUSTOM_XSL);
}
else
{
if(responseXML && responseXML.childNodes.length>0)
{
Page.customXsl = responseXML;
}
else if(responseText!="")
{
Page.customXsl = (new DOMParser()).parseFromString(responseText, "text/xml");
if(null==Page.customXsl)throw "not valid xml string";
}
else
{
alert("custom stylesheet is not found");
return;
}
}
if(Page.xslDoc)Page.initProcessor();
};
function $m(p){return Page.masterXml.selectSingleNode(p);};
function $col(p){return Page.masterXml.selectNodes(p);};
function $d(p){return Page.dataXml.selectSingleNode(p);};
function $dcol(p){return Page.dataXml.selectNodes(p);};
function $a(n,v){return n.getAttribute(v);};
var CONTROLMANAGER_BINDING1="Wrong binding! Data xml node is nod found";
var CONTROLMANAGER_BINDING2 = "Wrong binding! The target node can't have child elements";
var CONTROLMANAGER_BINDING_LIST = "Wrong binding!The parent of the target node can't be a List";
var CONTROLMANAGER_BINDING_NO_TARGET = "Wrong binding!Target node is missing in XPATH expression";
Class(ControlManager);
function ControlManager()
{
this.konstructor=function(){
this.id = arguments[0];
this.obj = document.getElementById(this.id);
this.bindpath = (arguments[1]?arguments[1]:"");
if(arguments[2]=="true")
this.b_enum =true;
else
this.b_enum =false;
this.valid_type =(arguments[3]?arguments[3]:"");
this.eventType =(arguments[4]?arguments[4]:"");
if(arguments[5]=="true"){
this.submit=true;
}
else
this.submit=false;
this.field_name =(arguments[6]?arguments[6]:"");
this.mandatory =(arguments[7]?arguments[7]:"");
this.min_value =(arguments[8]?arguments[8]:"");
this.max_value =(arguments[9]?arguments[9]:"");
this.filter = (arguments[10]?arguments[10]:"");
this.msg_id = (arguments[11])?arguments[11]:"";
this.APISection_name =(this.bindpath.search("/")!=-1)?this.bindpath.substr(0,this.bindpath.indexOf("/")):this.bindpath;
this.validator = new Validator(this.field_name);
this.xml_node=Page.findNodeByUniqID(this.id);
};
this.manage = function()
{
var userFunction;
switch (this.eventType)
{
case "save":
if (!this.validate())
{
return;
}
this.setRelatedData();
break;
default:
if (!this.validate()) return;
}
};
this.getTemplateNode = function()
{
if (this.bindpath!="")
{
var section_name = this.bindpath.substr(0,this.bindpath.indexOf("/"));
if(section_name=="") return null;
var tail = this.bindpath.substr(this.bindpath.indexOf("/")+1);
var templateNode = $m("//TEMPLATE[@API='" + section_name + "']");
var destNode = templateNode.selectSingleNode("./" +tail );
return destNode;
};
return null;
};
this.validate = function()
{
var templateNode = this.getTemplateNode();
if (templateNode)
{
this.min_value = (templateNode.getAttribute("MIN_VALUE")!=null)?templateNode.getAttribute("MIN_VALUE"):this.min_value;
this.max_value = (templateNode.getAttribute("MAX_VALUE")!=null)?templateNode.getAttribute("MAX_VALUE"):this.max_value;
this.mandatory = (templateNode.getAttribute("MANDATORY")!=null)?templateNode.getAttribute("MANDATORY"):this.mandatory;
this.valid_type = (templateNode.getAttribute("VALID_TYPE"))?templateNode.getAttribute("VALID_TYPE"):this.valid_type;
}
var retVal= this.validator.validate(this.obj, this.valid_type, this.field_name, this.mandatory, this.min_value, this.max_value, templateNode, this.xml_node,this.msg_id);
if(retVal==false)
this.setMessage();
else if(!_IXML_IS_IE && this.eventType!="save")
{
while(ControlManager.coll.length>0)ControlManager.coll.pop();
}
return retVal;
};
this.setMessage = function()
{
switch(this.eventType)
{
case "click":
case "change":
{
if(!_IXML_IS_IE){
alert (this.validator.errMsg);
while(ControlManager.coll.length>0)ControlManager.coll.pop();
}
else
{
alert (this.validator.errMsg);
}
}
break;
case "save":
{
ControlManager.VALIDATION_SUMMERY += this.validator.errMsg + "\n";
}
break;
}
};
this.setRelatedData = function()
{
var val = Util.getInputData([this.id]);
this.bind(val[0]);
};
this.checkValidBind =function(tailpath){
var APISection_node,nodeSet;
if (tailpath==null)
{
if(DEBUG==true)
alert( CONTROLMANAGER_BINDING_NO_TARGET + "'" + this.APISection_name + "'" );
return false;
}
this.createSectionNode();
APISection_node = $d("//" + this.APISection_name);
nodeSet = APISection_node.selectNodes(".//" + tailpath);
if(null==nodeSet || nodeSet.length==0 )
{
if (this.submit)
ControlManager.createDataStructure(APISection_node,tailpath);
else return true;
}
nodeSet = APISection_node.selectNodes(".//" + tailpath);
if(IXML.getChildElement(nodeSet[0],1)!=null)
{
if(DEBUG==true)
alert (CONTROLMANAGER_BINDING2 + "\n" + this.APISection_name + "/" + tailpath );
return false;
}
return true
};
this.createSectionNode=function()
{
var APISection_node = $d("//" + this.APISection_name);
if(null == APISection_node)
{
var section_node = IXML.getDomDocument(null,this.APISection_name);
section_node = section_node.selectSingleNode("//" + this.APISection_name);
IXML.appendChild(section_node,$d("//" + DATAROOT));
}
};
this.createDataStructure = function()
{
var APISection_node = $d("//" + this.APISection_name);
if(this.bindpath=="")return;
var tailpath = this.bindpath.tail("/");
ControlManager.createDataStructure(APISection_node,tailpath);
};
this.updateMasterXml=function(){
if(null==this.xml_node)return;
var control_name = this.xml_node.nodeName;
var i;
switch(control_name)
{
case "inputtext": IXML.setText(this.xml_node,this.obj.value);
this.xml_node.setAttribute("VALUE",this.obj.value);
break;
case "hidden": IXML.setText(this.xml_node,this.obj.value);
break;
case "checkbox" : this.xml_node.setAttribute("CHECKED",this.obj.checked);
break;
case "combobox" : if(this.xml_node.selectNodes("//option").length>0){
var collXmlOptions = this.xml_node.selectNodes("//option");
for(var i=0;i<collXmlOptions.length;i++){
if(collXmlOptions[i].attributes.getNamedItem("VALUE") && collXmlOptions[i].getAttribute("VALUE").trim()==
this.obj.value)
collXmlOptions[i].setAttribute("SELECTED","true");
else{
if(collXmlOptions[i].attributes.getNamedItem("SELECTED"))
collXmlOptions[i].removeAttribute("SELECTED");
};
};
};
break;
};
};
this.bind=function(val)
{
if(null==val)return;
if(this.bindpath=="")return;
var tailpath = (this.bindpath.search("/")!=-1)?this.bindpath.substr(this.bindpath.indexOf("/") + 1):null;
if (null==tailpath || !this.checkValidBind(tailpath)) return;
var APISection_node = $d("//" + this.APISection_name);
var dataNodeName = this.bindpath.getLastNodeName();
var nodeSet = APISection_node.selectNodes(".//" + tailpath);
var entryNode;
var listNode;
var contextNode;
var contextEntry;
if(this.submit)
{
if(this.b_enum){
val = Page.getEnumValue(dataNodeName,val);
}
if(nodeSet.length>1){
if(this.filter){
if(this.filter.indexOf("&")!=-1){
var filterKey1 = this.filter.split("&")[0];
var filterKey2 = this.filter.split("&")[1];
var filterNodeName1 = filterKey1.split("=")[0];
var filterNodeName2 = filterKey2.split("=")[0];
var filterNodeValue1 = filterKey1.split("=")[1];
var filterNodeValue2 = filterKey2.split("=")[1];
entryNode = IXML.getParentElement(nodeSet[0]);
listNode = IXML.getParentElement(entryNode);
contextEntry = listNode.selectSingleNode("./*[" + filterNodeName1 + "[text()='" + filterNodeValue1 + "'] and " + filterNodeName2 + "[text()='" + filterNodeValue2 + "'] ]");
}
else{
var filterNodeName = this.filter.split("=")[0];
var filterNodeValue = this.filter.split("=")[1];
entryNode = IXML.getParentElement(nodeSet[0]);
listNode = IXML.getParentElement(entryNode);
contextEntry = listNode.selectSingleNode("./*[" + filterNodeName + "[text()='" + filterNodeValue + "']]");
contextNode = contextEntry.selectSingleNode("./" + dataNodeName);
}
if(IXML.getText(contextNode)!=val)
{
IXML.setText(contextNode,val);
Page.setAlteredDataNodes(contextNode,ACTION_SET);
}
};
}
else{
if (IXML.getText(nodeSet[0])!=val)
{
IXML.setText(nodeSet[0],val);
Page.setAlteredDataNodes(nodeSet[0],ACTION_SET);
}
}
}
};
};
ControlManager.checkValidation=function(ids){
ControlManager.VALIDATION_SUMMERY="";
for(var i=0;i<ids.length;i++){
ControlManager.create(ids[i],"save");
};
if(ControlManager.VALIDATION_SUMMERY!=""){
alert(ControlManager.VALIDATION_SUMMERY);
return false;
}
return true;
};
ControlManager.coll=[];
ControlManager.VALIDATION_SUMMERY = "";
ControlManager.ACTION="restore";
ControlManager.DEFAULT_ACTION="restore";
ControlManager.createDataStructure =function(APISection_node,tailpath)
{
if (APISection_node==null) return false;
var arr = tailpath.split("/");
var path = "//" + APISection_node.tagName;
var dataNode = APISection_node;
var _tailPath = "";
for(var i=0; i < arr.length;i++)
{
_tailPath=(_tailPath=="")?arr[i]:_tailPath + "/" + arr[i];
path = path + "/" + arr[i];
if ($d(path)==null) break;
dataNode = $d(path);
}
var templatePath = "TEMPLATE[@API='" + APISection_node.tagName + "']" + "/" + _tailPath;
var templateNode = $m("//" + templatePath);
var templateNextSibling = IXML.getNextSibling(templateNode);
if(null==templateNextSibling)
IXML.appendChild(templateNode,dataNode);
else
{
var nextSiblingPath = path.substr(0,path.length - path.getLastNodeName().length);
nextSiblingPath+=templateNextSibling.nodeName;
var siblingNode=dataNode.selectSingleNode(nextSiblingPath);
if(siblingNode)
IXML.insertBefore(templateNode,siblingNode);
}
return true;
};
ControlManager.create=function(){
var a = arguments;
var _CM = new ControlManager(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10]);
if(!_IXML_IS_IE){
if(_CM.eventType!="save"){
while(ControlManager.coll.length>0)ControlManager.coll.pop();
}
ControlManager.coll.push(_CM.eventType);
_CM.manage();
_CM.updateMasterXml();
_CM=null;
}
else
{
_CM.manage();
_CM.updateMasterXml();
_CM=null;
}
};
ControlManager.setControlData = function(cntr_id)
{
var node = Page.findNodeByUniqID(cntr_id);
var bindpath = (node)?node.getAttribute("BIND"):"";
var val = (bindpath!="")?IXML.getText($d("//" + bindpath)):null;
if(val){
var is_enum = (node.getAttribute("ENUM")=="true")?true:false;
if(is_enum)
val = Page.getEnumValue(bindpath.getLastNodeName(),val);
Util.setControlData(cntr_id,val) ;
}
};
ControlManager.alert = function(j)
{
if(ControlManager.coll.length==j)
alert(ControlManager.VALIDATION_SUMMERY);
while(ControlManager.coll.length>0)ControlManager.coll.pop()
};
var scriptManager = (function() {
var existScriptSrcHash,
addScriptSrcArr,
headNode = document.getElementsByTagName("head")[0];
function getExistingScripts() {
existScriptSrcHash = {};
var existScrArr = document.getElementsByTagName("script");
for (var i = 0; i < existScrArr.length; i ++)
if (existScrArr[i].src)
existScriptSrcHash[qualifyURL(existScrArr[i].src)] = true;
}
function getInputScripts (inputScriptSrcArr) {
addScriptSrcArr = [];
for (var i = 0; i < inputScriptSrcArr.length; i ++) {
inputScriptSrcArr[i] = qualifyURL(inputScriptSrcArr[i]);
if (!existScriptSrcHash[inputScriptSrcArr[i]]) {
addScriptSrcArr.push(inputScriptSrcArr[i]);
existScriptSrcHash[inputScriptSrcArr[i]] = true;
}
}
addScriptSrcArr.reverse();
}
var loadNewScripts = function loadNextScript() {
if (!addScriptSrcArr.length)
Page.load_complete();
else {
var src = addScriptSrcArr.pop();
var scriptNode = document.createElement("script");
scriptNode.type = "text/javascript";
scriptNode.src = src;
scriptNode.onload = function(){clearEventHandlers(); loadNextScript();};
scriptNode.onerror = function(){clearEventHandlers(); loadNextScript();};
scriptNode.onreadystatechange = function() {
if (scriptNode.readyState == "loaded" || scriptNode.readyState == "complete") {
clearEventHandlers();
loadNextScript();
}
}
headNode.appendChild(scriptNode);
}
function clearEventHandlers() {
scriptNode.onload = null;
scriptNode.onerror = null;
scriptNode.onreadystatechange = null;
}
}
function qualifyURL(url) {
var divNode = document.createElement('div');
divNode.innerHTML = '<a href="'+url.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;")+'">x</a>';
var qualifiedUrl = divNode.firstChild.href;
delete divNode;
return qualifiedUrl;
}
return {
load: function (inputScriptSrcArr) {
getExistingScripts();
getInputScripts(inputScriptSrcArr);
loadNewScripts();
}
}
})();
var _spt = String.prototype;
_spt.trim = function(blnIgnoreCarriage, blnIgnoreInnerWhiteSpace) {
var temp = this.replace(/^\s*/,"");
temp = temp.replace(/\s*$/,"");
blnIgnoreCarriage = blnIgnoreCarriage ? true : false;
blnIgnoreInnerWhiteSpace = blnIgnoreInnerWhiteSpace ? true : false;
if(blnIgnoreCarriage && blnIgnoreInnerWhiteSpace) {;}
else if(blnIgnoreCarriage&&!blnIgnoreInnerWhiteSpace) {
temp = temp.replace(/\t+/g," ");
temp = temp.replace(/ +/g," ");
}
else if(!blnIgnoreCarriage && blnIgnoreInnerWhiteSpace) {
temp=temp.replace(/(\n\r)+/g,"");
}
else if(!blnIgnoreCarriage && !blnIgnoreInnerWhiteSpace) {
temp=temp.replace(/\s+/g," ");
}
if(temp==" ") { temp=""; }
return temp;
};
_spt.remove = function(strRegExp, strOption,str_replace) {
if(null==str_replace)
var str_replace = "";
var temp = this;
var regEx = new RegExp(strRegExp, strOption ? strOption : "g");
temp = temp.replace(regEx, str_replace);
return temp;
};
_spt.removeTags = function() {
var regEx = /<[\/]?([a-zA-Z0-9]+)[^>^<]*>/ig;
return this.replace(regEx,"");
};
_spt.test = function(strRegExp, strOption) {
var regEx = new RegExp(strRegExp, strOption ? strOption : "g");
return regEx.test(this);
};
_spt.stripXml = function() {
var regEx = />([^a-zA-Z0-9]+)[^>^<]*</ig;
return this.replace(regEx,"");
};
_spt.xmlDecode=function()
{
var strRegExp = "(.*)<(.*)>|(&)|(" + String.fromCharCode(169) + ")|(" + String.fromCharCode(174) + ")|(" + String.fromCharCode(34) + ")";
var regEx = new RegExp(strRegExp,"g");
var temp = this.replace(/^\s*/,"");
temp = temp.replace(/\s*$/,"");
if(regEx.test(this)){
var left = /</g;
var right = />/g;
var Ampersand = /&/g;
var copyright = String.fromCharCode(169);
var reg = String.fromCharCode(174);
var quot = String.fromCharCode(34);
temp = temp.replace(left, "&lt;");
temp = temp.replace(right, "&gt;");
temp = temp.replace(copyright, "&copy;");
temp = temp.replace(reg, "&reg;");
temp = temp.replace(Ampersand, "&amp;");
temp = temp.replace(quot, "&quot;");
}
return temp;
};
_spt.xmlEncode=function()
{
var strRegExp = "(.*)<(.*)>|(&lt;)|(&amp;)|(&quot;)|($nbsp;)|(&gt;)|(&copy)";
var regEx = new RegExp(strRegExp,"g");
var temp = this;
temp = temp.replace(/^[ \t]*/,"");
temp = temp.replace(/[ \t]*$/,"");
if(regEx.test(this)){
var left = /&lt;/g;
var right = /&gt;/g;
var Ampersand = /&amp;/g;
var NonBreakingSpace = /&nbsp;|&#160;|&#xa0;/g;
var quot = /&quot;/g;
var copyright = /&copy;/g;
var reg = /&reg;/g;
temp = temp.replace(left, "<");
temp = temp.replace(right, ">");
temp = temp.replace(copyright, String.fromCharCode(169));
temp = temp.replace(reg, String.fromCharCode(174));
temp = temp.replace(NonBreakingSpace, String.fromCharCode(160));
temp = temp.replace(quot,String.fromCharCode(34));
temp = temp.replace(Ampersand, "&");
}
return temp;
};
_spt.getLastNodeName=function()
{
var temp = this;
var pos = temp.lastIndexOf("/");
return (pos!=-1)?temp.substr(pos+1):temp;
};
_spt.tail=function(beginPath)
{
var temp = this;
var pos = temp.indexOf(beginPath);
return (pos!=-1)?temp.substr(pos + 1):temp;
}
function Util(){};
Util.prototype.setControlData = function(relatedID,data,customFunc){
if(customFunc){eval(customFunc);return true;}
return Util.setControlData(relatedID,data);
};
Util.setControlData=function(relatedID,data)
{
var control = document.getElementById(relatedID);
var _set = false;
if(null==control){
control = document.getElementsByName(relatedID);
control=(control.length>0)?control[0]:null;
}
if(control){
switch(control.tagName.toLowerCase())
{
case "input":
switch(control.type.toLowerCase())
{
case "password":
case "text":control.value=data;_set = true;
try{
if(Page.findNodeByUniqID(relatedID).attributes.getNamedItem("ONCHANGE"))
eval(Page.findNodeByUniqID(relatedID).getAttribute("ONCHANGE"));
}catch(e){};
break;
case "checkbox":
if(control.getAttribute("bind")){
control.value=data;
_set = true;
if(data == control.getAttribute("checked_value"))
{control.checked=true;}
else
{control.checked=false;}
}break;
case "radio":
try{Util.setRelatedData(control.name,data);}catch(e){};
break;
case "hidden":control.value=data;_set = true;
try{
if(Page.findNodeByUniqID(relatedID).attributes.getNamedItem("ONCHANGE"))
eval(Page.findNodeByUniqID(relatedID).getAttribute("ONCHANGE"));
}catch(e){};
break;
}break;
case "select":
case "select-one":
{
var xml_node;
for(var j=0;j<control.options.length;j++)
{
if(control.options[j].text==data){
control.options[j].selected=true;
_set = true;
try{
xml_node = Page.findNodeByUniqID(relatedID);
if(xml_node){
if(xml_node.attributes.getNamedItem("ONCHANGE"))
eval(xml_node.getAttribute("ONCHANGE"));
}
}catch(e){};
break;
}
else if(control.options[j].value==data){
control.options[j].selected=true;
_set = true;
try{
xml_node = Page.findNodeByUniqID(relatedID);
if(xml_node){
if(xml_node.attributes.getNamedItem("ONCHANGE"))
eval(xml_node.getAttribute("ONCHANGE"));
}
}catch(e){};
break;
}
};
}break;
case "textarea":
case "span":
case "label":
case "td": IXML.setInnerText(control,data);_set = true;
break;
}
}
return _set;
};
Util.resetControlData=function(relatedID,def_value)
{
if(null==def_value)def_value="";
var control = document.getElementById(relatedID);
if(null==control){
control = document.getElementsByName(relatedID);
control=(control.length>0)?control[0]:null;
}
if(control){
switch(control.tagName.toLowerCase())
{
case "input":
switch(control.type.toLowerCase())
{
case "password":
case "text":control.value=def_value;
break;
case "checkbox":
var node= Page.findNodeByUniqID(relatedID);
if(node.getAttribute("BIND")){
control.value=def_value;
if(data == node.getAttribute("CHECKED_VALUE"))
control.checked=true;
}break;
case "radio":
Util.resetRelatedControls(control.name);
break;
}break;
case "select":
case "select-one":
{
for(var j=0;j<control.options.length;j++)
{
if(control.options[j].text==def_value){
control.options[j].selected=true;
break;
}
else if(control.options[j].value==def_value){
control.options[j].selected=true;
break;
}
};
}break;
case "textarea":
case "span":
case "label":
case "td":IXML.setInnerText(control,data);
break;
}
}
};
Util.disabled=function(arr_RelatedID,bool)
{
var i,control;
for(var i=0;i<arr_RelatedID.length;i++)
{
control=document.getElementById(arr_RelatedID[i]);
if(control)control.disabled=bool;
};
};
Util.prototype.getInputData = function(arr_RelatedID,customFunc){
if(customFunc){return eval(customFunc);}
return Util.getInputData(arr_RelatedID);
};
Util.getInputData=function(arr_RelatedID,customFunc){
if(customFunc){return eval(customFunc);}
var arr_Data = new Array();
var control;
for(var i=0;i<arr_RelatedID.length;i++)
{
if(arr_RelatedID[i]==""){
arr_Data.push("");continue;
}
control = document.getElementById(arr_RelatedID[i]);
if(null==control){
control = document.getElementsByName(arr_RelatedID[i]);
control=(control.length>0)?control[0]:null;
}
var data = "";
if(control){
switch(control.tagName.toLowerCase())
{
case "input":
switch(control.type)
{
case "password":
case "text":
data=control.value;break;
case "checkbox":
if(control.getAttribute("bind")){
if(control.checked){
data = control.getAttribute("checked_value");
}
else{
data = control.getAttribute("unchecked_value");
data = (null==data || 'undefined'==data)?"":data;
}
}
else
data=(control.checked)?1:0;
break;
case "hidden":data=control.value;break;
case "radio":
data = Util.getRelatedData(control.name);break;
} break;
case "select-one":
case "select":
if(control.multiple){
for(var j=0;j<control.options.length;j++)
{
if(control.options[j].selected){
data=(data=="")?control.options[j].text:data + "," + control.options[j].text;
}
}
}
else{
if(control.options.length>0)
data = control.options[control.selectedIndex].text;
}break;
case "textarea":
case "span":
case "label":
case "td": data=IXML.getInnerText(control);
break;
}
}
arr_Data.push(data);
}
return arr_Data;
};
Util.getRelatedData = function(name)
{
var data = "";
var coll = document.getElementsByName(name);
var xml_node,related_control_id;
for(var i = 0;i<coll.length;i++)
{
if(coll[i].checked)
{
xml_node = Page.findNodeByUniqID(coll[i].id);
if(xml_node)
{
related_control_id = xml_node.getAttribute("RELATED_ID");
if(related_control_id)
{
data = Util.getInputData([related_control_id]);
data = data[0];
}
}
}
}
return data;
};
Util.setRelatedData = function(name,data)
{
var coll = document.getElementsByName(name);
var xml_node,related_id;
var _set = false;
for(var i = 0;i<coll.length;i++)
{
xml_node = Page.findNodeByUniqID(coll[i].id);
if(xml_node)
{
related_id = xml_node.getAttribute("RELATED_ID");
if(document.getElementById(related_id).tagName.toLowerCase()=="select")
{
if(related_id)
{
if(Util.setControlData(related_id,data))
{
coll[i].checked = true;_set=true;break;
}
}
}
}
}
if(!_set)
{
for(var i = 0;i<coll.length;i++)
{
xml_node = Page.findNodeByUniqID(coll[i].id);
if(xml_node)
{
related_id = xml_node.getAttribute("RELATED_ID");
if(related_id)
{
if(coll[i].checked)
Util.setControlData(related_id,data);
}
}
}
}
};
Util.resetRelatedControls = function(name)
{
var coll = document.getElementsByName(name);
var xml_node,related_node,related_id,default_value;
for(var i = 0;i<coll.length;i++)
{
xml_node = Page.findNodeByUniqID(coll[i].id);
if(xml_node)
{
related_id = xml_node.getAttribute("RELATED_ID");
related_node = Page.findNodeByUniqID(related_id);
default_value = related_node.getAttribute("DEFAULT_VALUE");
Util.resetControlData(related_id,default_value);
}
}
};
Util.getEnumData = function(nodeName, value)
{
return Page.getEnumData(nodeName, value);
};
Util.getEnumValue=function(nodeName,value)
{
return Page.getEnumValue(nodeName, value);
};
Util.getLastNodeName=function(str)
{
var pos = str.lastIndexOf("/");
return (pos!=-1)?str.substr(pos+1):str;
};
Util.fillPorts=function(id){
var combo = document.getElementById(id);
var bool=false;
var relUnit=1;
if(arguments[1] && arguments[1]==true)bool=true;
var _polling,_page;
if(opener)
_polling = opener.oPolling;
else
_polling = oPolling;
var isStack = (_polling.isStack)?true:false;
if(isStack){relUnit=_polling.currentUnit};
var collPorts=_polling.getCollectionPortsPerUnit(relUnit);
var i,text,value,option;
for(var i=0;i<collPorts.length;i++){
value=IXML.getText(collPorts[i].selectSingleNode("./ifIndex"));
text =IXML.getText(collPorts[i].selectSingleNode("./portName"));
option = new Option(text,value);
combo.options.add(option);
};
if(bool)Util.fillLags(id);
var bind_path=Page.findNodeByUniqID(id).getAttribute("BIND");
if(bind_path && bind_path!=""){
var binded_value = Util.getBindedValue(bind_path);
combo.value = binded_value;
}
};
Util.fillLags=function(id){
var combo = document.getElementById(id);
var option;
var _polling;
if(opener)
_polling = opener.oPolling;
else
_polling = oPolling;
for(var i=1;i<=_polling.NumberOfTrunks;i++){
option = new Option("LAG" + i,i);
combo.options.add(option);
};
};
Util.getBindedValue=function(bind_path){
var text = IXML.getText($m("//" + bind_path));
return (null==text)?"":text;
};
Util.SetValidNumber=function(objNumber)
{
var positiveOrNegative = "";
if ((objNumber.value.substr(0,1)=="+") ||(objNumber.value.substr(0,1)=="-"))
{
positiveOrNegative = objNumber.value.substr(0,1);
objNumber.value = objNumber.value.substr(1,objNumber.value.length-1);
}
if(objNumber.value!="0")
objNumber.value = objNumber.value.remove("^(0*)");
if (objNumber.value.substr(0,1)== ".")
objNumber.value = "0".concat(objNumber.value);
if(objNumber.value.substr(objNumber.value.length-1,1)==".")
objNumber.value = objNumber.value.substr(0,objNumber.value.length-1);
if (positiveOrNegative=="-")
objNumber.value = positiveOrNegative.concat(objNumber.value);
};
Util.findStringPart=function(initStr,s_start,s_end)
{ var intStrtStr=initStr.indexOf(s_start);
var strtFORendStr=intStrtStr+ s_start.length;
var intEndStr=s_end?initStr.indexOf(s_end,strtFORendStr):-2;
if (intStrtStr==-1 || intEndStr==-1)return "-1";
return intEndStr==-2?initStr.substring(strtFORendStr):initStr.substring(strtFORendStr,intEndStr);
};
Util.debug_saveXml=function(content,path,method){
var ForWriting;
if(_IXML_IS_IE){
try{
ForWriting = (method)?method:2;
var TriStateFalse = 0;
var fso = new ActiveXObject("Scripting.FileSystemObject");
var newFile = fso.OpenTextFile(path,ForWriting, true, TriStateFalse);
newFile.write( "\r\n" + content);
newFile.close();
}
catch(e){};
}else{
try
{
netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
}
catch(e)
{
return;
}
var file=Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
file.initWithPath(path);
if(!file.exists())
{
file.create(0x00,0644);
}
ForWriting = (method)?(method==8?0x10|0x02:0x20|0x02): 0x20|0x02;
var outputStream=Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
outputStream.init(file,ForWriting,00004,null);
outputStream.write("\r\n" + content,content.length);
outputStream.flush();
outputStream.close();
}
};
Util.writeToTextArea=function(xml){
var div = document.getElementById("debugDiv");
var ta;
if(xml!=""){
if(null==div){
div = document.createElement("div");
div.id = "debugDiv";
div.style.position="absolute";
ta = document.createElement("textarea");
ta.id = "debugArea";
ta.width="300px";
ta.height="300px";
IXML.setInnerText(ta,xml);
div.appendChild(ta);
document.body.appendChild(div);
}
else{
var debugArea = document.getElementById("debugArea");
if(debugArea){
IXML.setInnerText(debugArea,xml);
}
}
}
};
Util.addZero=function(num){
return(num < 10 ? '0' : '')+num;
};
function getElement(id)
{
return document.getElementById(id);
};
Util.attachEvent = function(obj,evnt,handler)
{
if(window.addEventListener)
{
obj.addEventListener(evnt,eval(handler),false);
}
else
{
obj.attachEvent("on" + evnt,eval(handler));
}
};
Util.translate_bitmask = function(bmsk_data,delim,bmsk_cell,rel_id)
{
var bmsk_id = bmsk_cell.getAttribute("BMSK_ID");
var bits_node = Page.findNodeByUniqID(bmsk_id);
var len = bmsk_data.length;
var i,bit;
var res="";
for(var i=0;i<len;i++)
{
bit = bmsk_data.charAt(i);
if(bit=="1")
{
res=(res=="")?Util.get_bitvalue(i,bits_node,rel_id):res + delim + Util.get_bitvalue(i,bits_node,rel_id);
}
}
return res;
};
Util.get_bitvalue = function(num,bits,rel_id)
{
var xpath=(rel_id)?"./*[name()='bit" + num + "' and @RELATED_ID='" + rel_id + "']":
"./*[name()='bit" + num + "']";
var bit_node = bits.selectSingleNode(xpath);
bit_data = (bit_node)?IXML.getText(bit_node):"";
return bit_data;
};
Util.trace=function(msg,path,mode){
var date = new Date();
var _date = date.getHours() + "." + date.getMinutes() + "." + date.getSeconds() + "." + date.getMilliseconds();
Util.debug_saveXml(msg + _date,path,mode);
};
Util.hexStr2Bin=function(binStr){
var str = "";
var len = binStr.length;
var bin = new Array("0000","0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100","1101","1110","1111");
for(var i = 0; i < len; i++)
{
str += bin[parseInt(binStr.slice(i,i+1),16)];
}
return str ;
};
function XMLWriter()
{
this.XML=[];
this.Nodes=[];
this.State="";
this.FormatXML = function(Str)
{
if (Str)
return Str.replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
if(Str==" ")return " ";
return ""
};
this.BeginNode = function(Name)
{
if (!Name) return;
if (this.State=="beg") this.XML.push(">");
this.State="beg";
this.Nodes.push(Name);
this.XML.push("<"+Name);
};
this.EndNode = function()
{
if (this.State=="beg")
{
this.XML.push("/>");
this.Nodes.pop();
}
else if (this.Nodes.length>0)
this.XML.push("</"+this.Nodes.pop()+">");
this.State="";
};
this.Attrib = function(Name, Value)
{
if (this.State!="beg" || !Name) return;
this.XML.push(" "+Name+"=\""+this.FormatXML(Value)+"\"");
};
this.WriteString = function(Value)
{
if (this.State=="beg") this.XML.push(">");
this.XML.push(this.FormatXML(Value));
this.State="";
};
this.Node = function(Name, Value)
{
if (!Name) return;
if (this.State=="beg") this.XML.push(">");
this.XML.push((Value=="" || !Value)?"<"+Name+"/>":"<"+Name+">"+this.FormatXML(Value)+"</"+Name+">");
this.State="";
};
this.Close = function()
{
while (this.Nodes.length>0)
this.EndNode();
this.State="closed";
};
this.Reset = function()
{
this.XML=[];
this.Nodes=[];
this.State="";
};
this.ToString = function(){return this.XML.join("");}
};
var g_blnValidatorProtoCalled = false;
Class(Validator);
var _this = Validator.prototype;
function Validator(field_name)
{
this.konstructor = function(){
this.field_name = " ";
if (field_name!=null) this.field_name = field_name;
this.errMsg = "";
this.customMsg="";
}
};
Validator.prototype.validate=function(ctr, valid_type, field_name, mandatory, min_value, max_value, nodeForValid,xmlNode,msg_id)
{
if (ctr==null) return true;
if ((valid_type==null || valid_type == "" ) && mandatory!="1" ) return true;
if (arguments.length > 2)this.field_name = field_name;
if (nodeForValid ==null) nodeForValid = xmlNode;
var id = ctr.id;
var retVal = true;
var arr_val = Util.getInputData([id]);
var val = (arr_val[0].toString().trim()=="")?arr_val[0]:arr_val[0].toString().trim();
var mand = (mandatory)?mandatory:"";
if(msg_id)this.customMsg = msg_id;
if ((mand!="1") && (val.toString().trim()=="")) return true;
else if ((mand=="1") && (val.toString().trim()=="") )
{
this.errMsg = "Field " + field_name + " shouldn't be blank";
this.buildMessage();
return false;
}
min_value = (min_value!=null)?min_value.trim():"";
max_value = (max_value!=null)?max_value.trim():"";
with (this)
{
switch (valid_type)
{
case "1":
if (!isNumeric(val)) retVal = false;
else if (min_value!=""|| max_value!="")
{
if (!isRange(val,min_value,max_value)) retVal = false;
}
break;
case "2":
if (!isInteger(val)) retVal = false;
else if (min_value!=""|| max_value!="")
{
if (!isRange(val,min_value,max_value)) retVal = false;
}
break;
case "3":
if (!isFloat(val)) retVal = false;
else if (min_value!=""|| max_value!="")
{
if (!isRange(val,min_value,max_value)) retVal = false;
}
break;
case "4":
if (!isEmail(val))retVal = false;
break;
case "5":
var format = "DD/MM/YYYY";
if (nodeForValid)
if(nodeForValid.getAttribute("FORMAT")) format = nodeForValid.getAttribute("FORMAT");
var separator = "/";
if (!isInteger(format.substr(2,1))) separator = format.substr(2,1);
if (!isFormattedDate(val,format, separator)) retVal = false;
else
{
if (min_value!=""|| max_value!="")
{
if (!isDateRange(val,min_value,max_value,separator,format)) retVal = false;
}
}
break;
case "6":
if (!isFileName(val)) retVal = false;
break;
case "7":
if (!checkUInteger32(val)) retVal = false;
break;
case "8":
if (!checkhexa(val)) retVal = false;
break;
case "9":
var notZeros = true;
if (xmlNode && xmlNode.attributes.getNamedItem("notZeros") && xmlNode.getAttribute("notZeros")=="1")notZeros = true;
if (!checkValidationIP(val,notZeros,1)) retVal = false;
break;
case "11":
if (!isIpMultiCast(val)) retVal = false;
break;
case "12":
var ipVal = "";
if (xmlNode && xmlNode.getAttribute("IP_CTR") && document.getElementById(xmlNode.getAttribute("IP_CTR")))
{
ipVal = document.getElementById(xmlNode.getAttribute("IP_CTR")).value;
}
if (!checkValidationIP(val,true,2,ipVal)) retVal = false;
break;
case "13":
if (!checkOID(val)) retVal = false;
break;
case "14":
var str = "";
if (nodeForValid) {
if(nodeForValid.getAttribute("STRING_TO_CONTAIN"))
str = nodeForValid.getAttribute("STRING_TO_CONTAIN");
}
if (!isContainsString(val,str)) retVal = false;
break;
case "15":
if (!checkMacAddress(val)) retVal = false;break;
case "16":
if (!checkOctetString(val,"")) retVal = false;break;
case "17":
if(!this.IsPort(val))
retVal = false; break;
case "18":
{
if (!oPolling.existsByName(val))
{
this.errMsg = "The port doesn't exist";
this.buildMessage();
retVal = false;
}
break;
}
default:
if (!this.customValidate(nodeForValid, xmlNode,field_name,val)) retVal = false ;
}
}
return retVal;
};
Validator.prototype.isDefined = function(x)
{
if(typeof(x) == "undefined")
{
this._setStatusCode(this.NOT_OK);
return false;
}
this._setStatusCode(this.OK);
return true;
}
;
Validator.prototype.isEmpty = function(x)
{
if( ! this.isDefined(x))
{
this._setStatusCode(this.NOT_OK);
return false;
}
if(x == "")
{
this._setStatusCode(this.OK);
return true;
}
};
Validator.prototype.isEmail = function(x)
{
if( ! this.isDefined(x))
{
this.errMsg = "Field " + this.field_name + " should contain a valid email address";
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
var reg = "^[A-Za-z0-9]+([_\\.-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\\.-][A-Za-z0-9]+)*\\.([A-Za-z]){2,4}$";
if(x.test(reg, "i"))
{
this._setStatusCode(this.OK);
return true;
}
this._setStatusCode(this.NOT_OK);
this.errMsg = "Field " + this.field_name + " should contain a valid email address";
this.buildMessage();
return false;
}
;
Validator.prototype.isInteger = function(x)
{
if( ! this.isDefined(x))
{
this.errMsg = "Field " + this.field_name + " should contain an integer";
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
x = "" + x;
var intNumber = eval("x*1");
if(eval("x*0") == 0)
{
x = x.remove("^(0*)");
if(x == "")
{
x = 0;
}
}
intNumber = eval("x*1");
if(( ! isNaN(intNumber)) && (("" + intNumber) == x) && (intNumber % 1 == 0) )
{
this._setStatusCode(this.OK);
return true;
}
this._setStatusCode(this.NOT_OK);
this.errMsg = "Field " + this.field_name + " should contain an integer";
this.buildMessage();
return false;
}
;
Validator.prototype.isNumeric = function(x)
{
if (!this.isFloat(x) && !this.isInteger(x) )
{
this.errMsg = "Field " + this.field_name + " should contain a number";
this.buildMessage();
return false;
}
else
{
this.errMsg = "";
return true;
}
};
Validator.prototype.IsPort = function(val)
{
var retVal = true;
if (!this.isInteger(val)) retVal = false;
if (!this.isRange(val,0,65535)) retVal = false;
if (!retVal)
{
this.errMsg = "Field " + this.field_name + " should contain a valid Port Number (0 - 6535).";
this.buildMessage();
this._setStatusCode(this.NOT_OK);
}
else
{
this.errMsg = "";
this._setStatusCode(this.OK);
}
return retVal;
};
Validator.prototype.isFloat = function(x)
{
this.errMsg = "Field " + this.field_name + " should contain a float number";
if( ! this.isDefined(x))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
x = "" + x;
if(eval("x*0") == 0)
{
x = x.remove("^(0*)");
if(x == "")
{
x = 0;
}
}
if(eval("x*0") == 0)
{
this._setStatusCode(this.OK);
this.errMsg ="";
return true;
}
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
;
Validator.prototype.IsPositiveNumber = function(x)
{
this.errMsg = "Field " + this.field_name + " should contain a positive number";
if( ! this.isDefined(x))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
if (this.isInteger(x)||this.isFloat(x))
{
if (x.substr(0, 1) != "-")
{
this.errMsg = "";
this._setStatusCode(this.OK);
return true;
}
else
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
}
else
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
}
;
Validator.prototype.isRange = function(x, Min_Value, Max_Value)
{
if (Min_Value!="" && Max_Value != "" )
{
this.errMsg = "Field " + this.field_name + " should be within a following range: " + Min_Value + "-" + Max_Value;
}
else if (Min_Value=="")
{
this.errMsg = "Field " + this.field_name + " shouldn't contain a value above " + Max_Value;
}
else
{
this.errMsg = "Field " + this.field_name + " shouldn't contain a value below " + Min_Value;
}
if (Min_Value != "" && Max_Value != "")
{
if (parseInt(Min_Value,10) > parseInt(Max_Value,10))
{
this._setStatusCode(this.RANGE_NOT_VALID);
this.buildMessage();
return false;
}
}
if (Min_Value != "")
{
if(parseInt(x,10) < parseInt(Min_Value,10))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
}
if (Max_Value != "")
{
if(parseInt(x,10) > parseInt(Max_Value,10))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
}
this._setStatusCode(this.OK);
this.errMsg = "";
return true;
};
Validator.prototype.isDateRange = function(x, Min_Value, Max_Value, separator, format)
{
if (Min_Value!="" && Max_Value != "" )
{
this.errMsg = "Field " + this.field_name + " should be within a following range: " + Min_Value + "-" + Max_Value;
}
else if (Min_Value=="")
{
this.errMsg = "Field " + this.field_name + " shouldn't contain a value above " + Max_Value;
}
else
{
this.errMsg = "Field " + this.field_name + " shouldn't contain a value below " + Min_Value;
}
var day;
var month;
var year;
var tempArr;
if (separator == undefined)
{
separator = "/";
}
tempArr = Min_Value.split(separator);
if (format == undefined)
{
format = "DD/MM/YYYY";
}
if (Min_Value != "")
{
day = getDatePart (Min_Value, format, separator, "DD");
month = getDatePart (Min_Value, format, separator, "MM");
year = getDatePart (Min_Value, format, separator, "YYYY");
Min_Value = new Date();
Min_Value.setDate(day );
Min_Value.setMonth(month - 1);
Min_Value.setFullYear(year);
}
if (Max_Value != "")
{
day = getDatePart (Max_Value, format, separator, "DD");
month = getDatePart (Max_Value, format, separator, "MM");
year = getDatePart (Max_Value, format, separator, "YYYY");
tempArr = Max_Value.split(separator);
Max_Value = new Date();
Max_Value.setDate(day);
Max_Value.setMonth(month - 1);
Max_Value.setFullYear(year);
}
if (x != "")
{
day = getDatePart (x, format, separator, "DD");
month = getDatePart (x, format, separator, "MM");
year = getDatePart (x, format, separator, "YYYY");
tempArr = x.split(separator);
x = new Date();
x.setDate(day);
x.setMonth(month - 1);
x.setFullYear(year);
}
if (Min_Value.valueOf() != "" && Max_Value.valueOf() != "")
{
if (Min_Value.valueOf() > Max_Value.valueOf())
{
this._setStatusCode(this.RANGE_NOT_VALID);
this.buildMessage();
return false;
}
}
if (Min_Value != "" && x != "")
{
if(x.valueOf() < Min_Value.valueOf())
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
}
if (Max_Value != "" && x != "")
{
if(x.valueOf() > Max_Value.valueOf())
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
}
this._setStatusCode(this.OK);
this.errMsg = "";
return true;
};
Validator.prototype.isString = function(x)
{
if( ! this.isDefined(x))
{
this._setStatusCode(this.NOT_OK);
return false;
}
if(typeof(x) == "string")
{
this._setStatusCode(this.OK);
return true;
}
this._setStatusCode(this.NOT_OK);
return false;
}
;
Validator.prototype.isFullDate = function(x)
{
this.errMsg= "Field " + this.field_name + " should contain a valid date " ;
var Year;
var theDate = new Date(x);
Year = new String( (theDate.getYear()).toString());
if (Year.length != 4)
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
this._setStatusCode(this.OK);
this.errMsg = "";
return true;
};
Validator.prototype.isDate = function(x)
{
this.errMsg = "Field " + this.field_name + " should contain a valid date";
var intYear, intMonth, intDay;
var arr_delim = x.split("/");
if (arr_delim.length != 3)
{
this.buildMessage();
return false;
}
else
{
try
{
intYear = parseInt(x.substr(6),10);
intMonth = parseInt(x.substr(3, 2),10);
intDay = parseInt(x.substr(0, 2),10);
}
catch(e)
{
this.buildMessage();
return false;
}
}
if( ! this.isDefined(intYear) || ! this.isDefined(intMonth) || ! this.isDefined(intDay))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
if( ! intYear || intYear == "")
{
this._setStatusCode(this.YEAR_IS_EMPTY);
this.buildMessage();
return false;
}
if( ! intMonth || intMonth == "")
{
this._setStatusCode(this.MONTH_IS_EMPTY);
this.buildMessage();
return false;
}
if( ! intDay || intDay == "")
{
this._setStatusCode(this.DAY_IS_EMPTY);
this.buildMessage();
return false;
}
var arMonths = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
if((parseInt(intYear,10) % 4) == 0)
{
arMonths[1] = 29;
}
else
{
arMonths[1] = 28;
}
var intMaxDay = arMonths[parseInt(intMonth,10) - 1];
if(parseInt(intDay,10) > intMaxDay)
{
this._setStatusCode(this.DAY_NOT_VALID);
this.buildMessage();
return false;
}
if(parseInt(intMonth,10) > 12)
{
this._setStatusCode(this.DAY_NOT_VALID);
this.buildMessage();
return false;
}
this.errMsg = "";
this._setStatusCode(this.OK);
return true;
}
;
Validator.prototype.isFormattedDate = function(x, format, separator)
{
this.errMsg = "Field " + this.field_name + " should contain a valid date in format: " + format;
var intYear, intMonth, intDay , strYear, strMonth, strYear;
var arr_delim = x.split(separator);
var formatYear = "YY" ;
if (format.indexOf("YYYY") != - 1)
{
formatYear = "YYYY";
}
;
if (arr_delim.length != 3)
{
this.buildMessage();
return false;
}
else
{
try
{
strYear = getDatePart(x, format, separator, formatYear);
if ( ! this.ValidateDatePart(strYear, formatYear, format, separator))
{
this.buildMessage();
return false;
}
if ( ! this.isInteger(strYear))
{
this.buildMessage();
return false;
}
else
{
intYear = parseInt(strYear,10);
}
strMonth = getDatePart(x, format, separator, "MM");
if ( ! this.ValidateDatePart(strMonth, "MM", format, separator))
{
this.buildMessage();
return false;
}
if ( ! this.isInteger(strMonth))
{
this.buildMessage();
return false;
}
else
{
strMonth = strMonth.remove("^(0*)");
intMonth = parseInt(strMonth,10);
}
strDay = getDatePart(x, format, separator, "DD");
if ( ! this.ValidateDatePart(strDay, "DD", format, separator))
{
this.buildMessage();
return false;
}
if ( ! this.isInteger(strDay))
{
this.buildMessage();
return false;
}
else
{
strDay = strDay.remove("^(0*)");
intDay = parseInt(strDay,10);
}
}
catch(e)
{
this.buildMessage();
return false;
}
}
if( ! this.isDefined(intYear) || ! this.isDefined(intMonth) || ! this.isDefined(intDay))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
if((intYear != 0) && ( ! intYear || intYear == ""))
{
this._setStatusCode(this.YEAR_IS_EMPTY);
this.buildMessage();
return false;
}
if( ! intMonth || intMonth == "")
{
this._setStatusCode(this.MONTH_IS_EMPTY);
this.buildMessage();
return false;
}
if( ! intDay || intDay == "")
{
this._setStatusCode(this.DAY_IS_EMPTY);
this.buildMessage();
return false;
}
var arMonths = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
if((parseInt(intYear,10) % 4) == 0)
{
arMonths[1] = 29;
}
else
{
arMonths[1] = 28;
}
var intMaxDay = arMonths[parseInt(intMonth,10) - 1];
if(parseInt(intDay,10) > intMaxDay)
{
this._setStatusCode(this.DAY_NOT_VALID);
this.buildMessage();
return false;
}
if(parseInt(intMonth,10) > 12)
{
this._setStatusCode(this.DAY_NOT_VALID);
this.buildMessage();
return false;
}
this.errMsg = "";
this._setStatusCode(this.OK);
return true;
}
;
Validator.prototype.isFileName = function(x)
{
this.errMsg = "Field " + this.field_name + " should contain a valid file name " ;
if( ! this.isDefined(x))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
var reg = "[\\\/:\?\"\ | * ]";
if( ! x.test(reg, "i"))
{
this.errMsg = "";
this._setStatusCode(this.OK);
return true;
}
else
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
};
Validator.prototype.isContainsString = function(x, str)
{
if (str=="") return true;
this.errMsg = "Field " + this.field_name + " should contain a " + str;
if( ! this.isDefined(x))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
var reg = "[" + str + "]";
if( ! x.test(reg, "i"))
{
this.errMsg = "";
this._setStatusCode(this.OK);
return true;
}
else
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
};
Validator.prototype.checkUInteger32 = function(stringTocheck)
{
var res;
this.errMsg = "Field " + this.field_name + " should contain a number of type UInteger32";
stringTocheck = stringTocheck + "";
if(stringTocheck.length > 1)
{
if (stringTocheck.charAt(0) == '0')
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
else
{
stringTocheck = Trim(stringTocheck);
var anum = /(^\d+$)/;
res = (anum.test(stringTocheck));
if (res)
this.errMsg ="";
else
this.buildMessage();
return res;
}
}
else
{
stringTocheck = Trim(stringTocheck);
var anum = /(^\d+$)/;
res = (anum.test(stringTocheck));
if (res)
this.errMsg ="";
else
this.buildMessage();
return res;
}
};
Validator.prototype.checkMacAddress = function(val,multy ,allowBroadcast){
if (arguments.length<3)
allowBroadcast=true;
this.errMsg = "Field " + this.field_name + " should contain a valid MAC address: 6 pairs of Hexa digits(0..9,a..f) separated by ':'" ;
var arr = val.split(":");
if (arr.length!=6){
arr=val.split("-");
if(arr.length!=6){
this.buildMessage();
return false;
}
}
if (!this.checkOctetString(val,"MAC")){
if ((val!=0)&&(val=="" || val==" " || val==null)) val="blank";
else{
this._setStatusCode(this.WrongMAC);
this.buildMessage();
return false;
}
}
if(multy){
var isBroadcast = (val.trim().toLowerCase()=="ff:ff:ff:ff:ff:ff");
var tmp = Util.hexStr2Bin(arr[0]).split("");
if (tmp[tmp.length-1]=="0" || (!allowBroadcast && isBroadcast)){
this.errMsg="You should enter a Multicast MAC address.";
return false;
}
}
this.errMsg = "";
return true;
};
Validator.prototype.checkSubnetMask = function(subaddress, ipaddress )
{
this.errMsg = "Field " + this.field_name + " should contain a valid IP network mask." ;
ipArr = ipaddress.split(".");
subArr = subaddress.split(".");
for (var i=0; i<ipArr.length; i++)
ipArr[i]=parseInt(ipArr[i]);
for (var i=0; i<subArr.length; i++)
{
subArr[i]=parseInt(subArr[i]);
if (subArr[i]!=0 && subArr[i]!=128 && subArr[i]!=192 && subArr[i]!=224 && subArr[i]!=240 && subArr[i]!=248 && subArr[i]!=252 && subArr[i]!=254 && subArr[i]!=255)
{
this.buildMessage();
return false;
}
}
if (subArr[0]!=255){this.buildMessage(); return false;}
if (subArr[1]!=255 && (subArr[2]!=0 || subArr[3] !=0)){this.buildMessage();return false;}
if (subArr[2]!=255 && subArr[3]!=0){this.buildMessage(); return false;}
if (subArr[3]>252){this.buildMessage(); return false;}
if (ipArr.length<4) return true;
if(ipArr[0] == 127 || ipArr[0]>223 || ipArr[0] == 0)
{
this.errMsg = "Invalid IP address.";
return false;
}
subBrd = new Array();
notSub = new Array();
host = new Array();
subnet = new Array();
ipBit = new Array();
for(var t=0; t<4 ; t++)
notSub[t] = notA(subArr[t]);
for(var t=0; t<4 ; t++)
{
ipBit[t] = ipArr[t].toString(2);
if (ipBit.length<9)
for(var i=ipArr[t].length; i<8; i++)
ipBit[t]="0" + numA;
}
for (var t=0; t<4; t++)
subBrd[t] = orAB(ipArr[t],notSub[t]);
var legalIP = true;
for (var t=0; t<4; t++)
host[t] = andAB(ipArr[t],notSub[t]);
for (var t=0; t<4; t++)
subnet[t] = andAB(ipArr[t],subArr[t]);
if ((parseInt(host[0])==0) && (parseInt(host[1])==0) && (parseInt(host[2])==0) && (parseInt(host[3])==0))
legalIP = false;
if ((parseInt(subnet[0])==0) && (parseInt(subnet[1])==0) && (parseInt(subnet[2])==0) && (parseInt(subnet[3])==0))
legalIP = false;
if ((subBrd[0] == ipBit[0]) && (subBrd[1] == ipBit[1]) && (subBrd[2] == ipBit[2]) && (subBrd[3] == ipBit[3]))
legalIP = false;
if (!legalIP)
{
this.errMsg = "Invalid IP address.";
return false;
}
return true;
function andAB(numA, numB)
{
var result = "";
numA = numA.toString(2);
numB = numB.toString(2);
if(numA.length<9)
{
for(var i=numA.length; i<8; i++)
{
numA = "0" + numA;
}
}
if(numB.length<9)
{
for(var i=numB.length; i<8; i++)
{
numB = "0" + numB;
}
}
for(var i=0; i<numA.length; i++)
{
result += parseInt(numA.charAt(i))&parseInt(numB.charAt(i));
}
return result;
};
function orAB(numA, numB)
{
var result = "";
numA = numA.toString(2);
numB = numB.toString(2);
if(numA.length<9)
{
for(var i=numA.length; i<8; i++)
{
numA = "0" + numA;
}
}
if(numB.length<9)
{
for(var i=numB.length; i<8; i++)
{
numB = "0" + numB;
}
}
for(var i=0; i<numA.length; i++)
{
result += parseInt(numA.charAt(i))|parseInt(numB.charAt(i));
}
return result;
};
function notA(numA)
{
var result = "";
numA = numA.toString(2);
if(numA.length<9)
{
for(var i=numA.length; i<8; i++)
{
numA = "0" + numA;
}
}
for(var i=0; i<numA.length; i++)
{
result += numA.charAt(i) == "0" ? "1" : "0";
}
return result;
}
};
Validator.prototype.checkValidationIP = function(val,notZeros,mode, additionalVal)
{
this.errMsg = "Field " + this.field_name + " should contain a valid IP address." ;
var retVal=true;
val=val.trim();
if (mode==null) mode = 1;
if (notZeros==null) notZeros = true;
if(val==""){return false}
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(val))retVal=false;
else if(notZeros && val=="0.0.0.0")
{
this.errMsg = "Field " + this.field_name + " should contain a valid IP Unicast address." ;
retVal=false;
}
else
{
val=val.split(".");
if(mode=="1")
{
if(val[0]>223 || val[0]<0 || (val[0].length>1 && val[0].charAt(0)=="0") || val[0]==127 )
{
retVal=false;
this.errMsg = "Field " + this.field_name + " should contain a valid IP Unicast address.";
}
}
else
{
if(!this.checkSubnetMask(val.join("."),additionalVal)) retVal=false ;
}
for(var i=1;i<4;i++)if(val[i]>255 || val[i]<0 || (val[i].length>1 && val[i].charAt(0)=="0") )
{retVal=false;break;}
}
if (retVal==false)
this._setStatusCode(this.NOT_OK);
else
{
this._setStatusCode(this.OK);
this.errMsg = "";
};
if(!retVal)this.buildMessage();
return retVal;
};
Validator.prototype.isIpMultiCast = function(stringTocheck)
{
stringTocheck=stringTocheck.trim();
this.errMsg = "Field " + this.field_name + " should contain a valid Multi-Cast IP address.";
var ipType=/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/;
var multicastIpType=/(^\d{1,3}-\d{1,3}\.\d{1,3}\|\d{1,3}\.\d{1,3}\.\d{1,3}$)/;
if(!ipType.test(stringTocheck)){this.buildMessage();return false;}
var IPArr = stringTocheck.split(".");
if ((parseInt(IPArr[0])<224) || (parseInt(IPArr[0])>239))
{
this.buildMessage();return false;
}
if(IPArr.length == 4)
{
for(var i=0; i<IPArr.length; i++)
{
if((i==0 || i==1) && multicastIpType.test(stringTocheck))
{
var tmp;
if(i==0)
tmp = IPArr[i].split("-");
else if(i==1)
tmp=IPArr[i].split("|");
if(tmp.length == 2 ||tmp.length == 3 )
{
for(var j=0; j<tmp.length; j++)
{
tmp[j] = parseInt(tmp[j]);
if((tmp[j]<0) || (tmp[j]>255))
{
this.buildMessage();
return false;
}
}
}
else{
this.buildMessage();
return false;
}
}
else
{
var tmp = parseInt(IPArr[i]);
if((tmp<0) || (tmp>255))
{
this.buildMessage();
return false;
}
}
}
}
this.errMsg = "";
this._setStatusCode(this.OK);
return true;
};
Validator.prototype.checkhexa = function(stringTocheck)
{
this.errMsg = "Field " + this.field_name + " should contain an hexadecimal value" ;
stringTocheck = Trim(stringTocheck);
for(var i = 0; i < stringTocheck.length; i ++ )
{
if( ! ((stringTocheck.charCodeAt(i) >= 97 && stringTocheck.charCodeAt(i) <= 102) || (stringTocheck.charCodeAt(i) >= 65 && stringTocheck.charCodeAt(i) <= 70) || (stringTocheck.charCodeAt(i) >= 48 && stringTocheck.charCodeAt(i) <= 57)))
{
this._setStatusCode(this.NOT_OK);
this.buildMessage();
return false;
}
}
this.errMsg = "";
this._setStatusCode(this.OK);
return true;
};
Validator.prototype.ValidateDatePart = function (x, part, format, separator)
{
if (part == "DD")
{
if (x.length != 2) return false;
}
if (part == "MM")
{
if (x.length != 2)return false;
}
if (part == "YY")
{
if (x.length != 2) return false;
}
if (part == "YYYY")
{
if (x.length != 4) return false;
}
return true;
};
Validator.prototype.checkOID = function(stringTocheck)
{
this.errMsg = "Field " + this.field_name + " should contain an OID";
stringTocheck = stringTocheck.trim();
var anum = /(^\d+$)/;
var OIDArr = stringTocheck.split(".");
for (var i = 0; i < OIDArr.length; i ++ )
{
if ( ! anum.test(OIDArr[i]))
{
this.buildMessage();
return false;
}
}
this.errMsg ="";
return true;
};
Validator.prototype.checkPortList = function(stringTocheck)
{
this.errMsg = "Field " + this.field_name + " should contain a Port List";
var anum = /(^[0-1]+$)/;
if ( ! anum.test(stringTocheck.trim()))
{
this.buildMessage();
return false;
}
this.errMsg = "";
return true;
};
Validator.prototype.checkOctetString = function (stringTocheck, typeParam)
{
this.errMsg = "Field " + this.field_name + " should contain an octet string";
stringTocheck = stringTocheck.trim();
var tokensArr = [":", "-"];
var token = "";
var octetString = "";
var octetArr;
var legal;
if (typeParam != "MAC" && isNaN(typeParam))
typeParam = "";
for (var i = 0; i < tokensArr.length; i ++ )
if ((stringTocheck).indexOf(tokensArr[i]) != - 1)
{
token = tokensArr[i];
break;
}
if ( ! (typeParam == "MAC" && token == ""))
{
octetArr = stringTocheck.split(token);
legal = true;
if (token != "")
{
for (var i = 0; i < octetArr.length; i ++ )
{
if (octetArr[i].length != 2)
{
legal = false;
break;
}
}
}
if (legal)
{
for (var i = 0; i < octetArr.length; i ++ )
octetString += octetArr[i];
var x = 0;
for (var i = 0; i < octetString.length; i ++ )
{
x = octetString.charCodeAt(i);
if ( (x < 48) || ((x > 57) && (x < 65)) || ((x > 70) && (x < 97)) || (x > 102))
{
legal = false;
break;
}
}
}
if (((octetString.length) % 2 != 0) || ( ! legal))
{
this.buildMessage();
return false;
}
this.errMsg = "";
return true;
}
this.buildMessage();
return false;
};
Validator.prototype.getStatusCode = function()
{
return this._intStatusCode;
}
;
Validator.prototype._setStatusCode = function(intCode)
{
this._intStatusCode = intCode;
};
Validator.prototype.buildMessage = function()
{
if(null==this.customMsg)return;
if(this.customMsg.trim()!="")this.errMsg = Page.getMessage(this.customMsg);
};
this.OK = 0;
this.NOT_OK = 1;
this.LESS_DIGITS = 11;
this.DAY_IS_EMPTY = 3;
this.MONTH_IS_EMPTY = 5;
this.YEAR_IS_EMPTY = 9;
this.DAY_NOT_VALID = 17;
this.RANGE_NOT_VALID = 10;
this.WrongMAC = 14;
this.NonUnicast = 15;
this._intStatusCode = this.OK;
Validator.prototype.customValidate = function(nodeForValid, xmlNode) {return true;};
function getDatePart (x, format, separator, part)
{
var formatArr = format.split(separator);
var xArr;
if (separator != "")
{
xArr = x.split(separator);
}
else
{
xArr = new Array();
xArr.push(x.substr(0, 2));
xArr.push(x.substr(2, 2));
if (x.length > 4)
{
xArr.push(x.substr(4));
}
}
switch (format)
{
case "DD/MM/YYYY" :
{
if (part == "DD")
{
return xArr[0];
}
if (part == "MM")
{
return xArr[1];
}
if (part == "YYYY")
{
return xArr[2];
}
}
case "MM/DD/YYYY" :
{
if (part == "DD")
{
return xArr[1];
}
if (part == "MM")
{
return xArr[0];
}
if (part == "YYYY")
{
return xArr[2];
}
}
case "MM/DD/YY" :
{
if (part == "DD")
{
return xArr[1];
}
if (part == "MM")
{
return xArr[0];
}
if (part == "YY")
{
return xArr[2];
}
}
case "DD/MM/YY" :
{
if (part == "DD")
{
return xArr[0];
}
if (part == "MM")
{
return xArr[1];
}
if (part == "YY")
{
return xArr[2];
}
}
case "DDMM" :
{
if (part == "DD")
{
return xArr[0];
}
if (part == "MM")
{
return xArr[1];
}
}
case "MMDD" :
{
if (part == "DD")
{
return xArr[1];
}
if (part == "MM")
{
return xArr[0];
}
}
}
return null;
};
function IsUndefined(x) {
return x === void 0;
};
function IsEmpty(x)
{
if (x==null) return true;
var s = ""+x;
if (s.length==0) return true;
s = s.trim();
return (s.length==0);
};
function BoolValue(s)
{
s = ""+s;
if (IsTrue (s)) return true;
if (IsFalse(s)) return false;
return null;
};
function IsTrue(s)
{
var x = s.toLowerCase();
return x=="y" || x=="yes" || x=="true" || x=="1";
};
function IsFalse(s)
{
var x = s.toLowerCase();
return x=="n" || x=="no" || x=="false" || x=="0";
};
function _Error(msg){
alert(msg + "It is recommended that you close this window and try again.");
};
function MissingArgException( argDesc, funcName ) {
return "Error: "+argDesc+" wasnt passed to "+funcName;
};
function TooFewArgsException( funcName, required, passed ) {
return funcName + " requires "+ required +" arguments, but was passed " + passed;
};
function ValidateArgs( callerName, argDescArray, callersArgs )
{
if (argDescArray==null || argDescArray.length==0) _Error("Bad call to ValidateArgs");
var passed = callersArgs.length;
var required = argDescArray.length;
if (passed < required)
_Error( TooFewArgsException( callerName, required, passed ) );
for (var i=0; i<required; ++i)
if ( IsUndefined( callersArgs[i] ) )
_Error( MissingArgException( argDescArray[i], callerName ) );
};
function Trim(strValue)
{
return LTrim(RTrim(strValue));
};
function LTrim(strValue)
{
var LTRIMrgExp = /^\s */;
return strValue.replace(LTRIMrgExp, '');
};
function RTrim(strValue)
{
var RTRIMrgExp = /\s *$/;
return strValue.replace(RTRIMrgExp, '');
};
PopUpManager.windows = new Array();
PopUpManager.arrIsModal = new Array();
PopUpManager.onmousemove;
PopUpManager.onfocus;
PopUpManager.onfocusin;
PopUpManager.onbeforeunload;
PopUpManager.onclick;
function PopUpManager(){};
PopUpManager.closeAll = function()
{
for(var i=0;i< PopUpManager.windows.length;i++)
{
if(PopUpManager.arrIsModal[i])
PopUpManager.windows[i].close();
}
};
PopUpManager.presentCurtainDiv = function()
{
try
{
if (top.document.getElementById("curtainDiv") )
top.document.getElementById("curtainDiv").style.display = "block";
else
{
var div = top.document.createElement("DIV");
div.id = "curtainDiv";
div.style.height = "99%";
div.style.width = "100%";
div.style.left = "0px";
div.style.top = "0px";
div.style.backgroundColor = "gray";
if (div.style.filter==null && div.style.opacity ==null ) throw "browser does'nt support opacity";
div.style.filter = "alpha(opacity: 0)";
div.style.opacity = "0";
div.style.position = "absolute";
div.style.cursor = "default";
div.zIndex = "1500";
div.onclick = function()
{try{PopUpManager.window_focus()}catch(e){};};
div.onmouseover = function(e)
{
this.style.cursor = "default";
try {PopUpManager.window_focus()} catch(e){};
if (e) event = e;
if (e){
if (_IXML_IS_IE) e.cancelBubble = true ;
else e.stopPropagation = true
}
};
top.document.body.appendChild(div)
}
}
catch (e){
if (top.document.getElementById("curtainDiv")) top.document.getElementById("curtainDiv").style.display = "none"
}
};
PopUpManager.open = function( sURL , sName , sFeatures , bReplace,modal)
{
if (arguments.length<4) bReplace = false;
if (arguments.length<5) modal = true;
if(modal==1)modal = true;
if(modal==0)modal = false;
var wn = window.open(sURL , sName , sFeatures , bReplace);
PopUpManager.windows.push(wn);
PopUpManager.arrIsModal.push(modal);
if (modal==true && modal!=2)
{
PopUpManager.backupAndSetEvents();
PopUpManager.presentCurtainDiv()
}
};
PopUpManager.backupAndSetEvents = function ()
{
if (window.onbeforeunload) PopUpManager.onbeforeunload = window.onbeforeunload ;
window.onbeforeunload = PopUpManager.closePops;
if(window.onfocus) PopUpManager.onfocus = window.onfocus;
if(document.body.onmousemove) PopUpManager.onmousemove = document.body.onmousemove;
if(document.body.onfocusin) PopUpManager.onfocusin = document.body.onfocusin;
window.onfocus = function() { PopUpManager.window_focus();};
window.document.body.onfocusin = function() { PopUpManager.window_focus(); };
window.document.body.onmousemove = function() {PopUpManager.window_focus(); }
};
PopUpManager.closePops= function(e)
{
if (event!=null)
{event.returnValue = false}
else
{e.preventDefault() = true}
return true
};
PopUpManager.window_focus = function()
{
try
{
if (PopUpManager.recalcWindows() > 0)
{
if (!PopUpManager.focusModal())
{
PopUpManager.restoreEvents();
event.cancelBubble = true;
event.returnValue = false
};
}
else
{
PopUpManager.restoreEvents();
event.cancelBubble = true;
event.returnValue = false
};
}
catch(e){
}
};
PopUpManager.restoreEvents = function()
{
try{
if (PopUpManager.onbeforeunload)
{window.onbeforeunload = function () {PopUpManager.onbeforeunload()}}
else
window.onbeforeunload = null;
if (PopUpManager.onmousemove)
{document.body.onmousemove = function(){ PopUpManager.onmousemove()}}
else
document.body.onmousemove = null;
if (PopUpManager.onfocusin)
{document.body.onfocusin = function(){ PopUpManager.onfocusin()}}
else
document.body.onfocusin=null;
if (PopUpManager.onfocus)
{window.onfocus = function(){ PopUpManager.onfocus()}}
else
document.body.onfocus=null
}catch(e){ }
if(top.document.getElementById("curtainDiv")) top.document.getElementById("curtainDiv").style.display = "none"
};
PopUpManager.recalcWindows = function ()
{
for (var i=0;i< PopUpManager.windows.length; i++ )
{
if (PopUpManager.windows[i].closed)
{
PopUpManager.windows.splice(i,1);
PopUpManager.arrIsModal.splice(i,1);
i--;
}
}
return PopUpManager.windows.length
};
PopUpManager.focusModal= function()
{
for (var i=0;i< PopUpManager.windows.length; i++ )
{
if ( (PopUpManager.arrIsModal[i]==true && PopUpManager.arrIsModal[i]!=2) && !PopUpManager.windows[i].closed)
{
PopUpManager.windows[i].focus();
return true
}
}
return false;
};
Class(Transform);
var MASTER_ROOT = "MASTER";
function Transform()
{
this.konstructor=function()
{
this.result = new XMLWriter();
this.params =(arguments[0])?arguments[0]:{"tableMode":0,"defaultALIGN":"left","defaultVALIGN":"middle","defaultDIR":"ltr"};
this.input = IXML.getDomDocument();
};
this.transformToHTML = function(xmldoc)
{
this.input = xmldoc;
this.main();
var _output = new String(this.result.ToString());
this.result.Reset();
return _output.toString();
};
this.transformToDocument = function(xmldoc)
{
this.input = xmldoc;
this.main();
var output = this.result.ToString();
this.result.Reset();
return (new DOMParser()).parseFromString(output, "text/xml");
};
this.a = function(name,val){
this.result.Attrib(name,val);
};
this.b = function(name){
this.result.BeginNode(name);
};
this.e = function(){
this.result.EndNode();
};
this.main = function()
{
try{
this.b("table");
this.a("width","100%");
this.a("dir",this.params["defaultDIR"]);
this.a("cellspacing","0");
this.a("cellpadding","0");
this.b("tbody");
this.b("tr");
this.a("valign","top");
this.b("td");
this.a("valign","top");
var root = this.input.selectNodes("//*")[0];
var master = root.selectNodes("./*");
for(var i=0;i<master.length;i++)
{
this.buildHTML(master[i]);
};
this.e();
this.e();
this.e();
this.e();
}catch(e){if(DEBUG)alert("Error in process transformation**" + e.description)}
};
this.setParameter = function(sURI,name, value){
this.params[name] = value;
};
this.buildHTML = function(node)
{
var arg2 = arguments[1] || [null, null, null, null];
var name = node.nodeName.toLowerCase();
try
{
switch(name)
{
case "master":this.createMaster(node);break;
case "table":this.createTable(node);break;
case "innertable":this.createTable(node);break;
case "tr":this.createTableRow(node);break;
case "td":this.createTableCell(node);break;
case "thead": this.createTableHeader(node);break;
case "tfoot":this.createFooter(node);break;
case "th":this.createHeader(node);break;
case "div": this.createDivision(node);break;
case "iframe":this.createInnerFrame(node);break;
case "innerframe":this.createInnerFrame(node);break;
case "span":this.createSpan(node);break;
case "label":this.createSpan(node);break;
case "hyperlink":this.createLink(node);break;
case "image":this.createImage(node);break;
case "img":this.createImage(node);break;
case "button":this.createButton(node);break;
case "inputtext": this.createInputText(node); break;
case "combobox":this.createCombobox(node);break;
case "select": this.createCombobox(node);break;
case "checkbox":this.createCheckbox(node, null, arg2[2], arg2[3], arg2[0]);break;
case "radio":this.createRadio(node);break;
case "hidden":this.createHidden(node);break;
case "password": this.createPassword(node);break;
case "hr": this.createHR(node);break;
case "br":this.createBreak(node);break;
case "nobr":this.createNOBR(node); break;
case "u": this.createUnderline(node);break;
case "b": this.createBold(node);break;
case "fieldset": this.createFieldSet(node);break;
case "legend": this.createLegend(node);break;
case "file": this.createInputFile(node);break;
case "h4": this.createHeader4(node);break;
case "repeatedtable":this.createRepeatedTable(node);break;
case "porttable": this.createTable(node);break;
case "list": this.createListHolder(node);break;
case "pager":this.createPagerHolder(node);break;
}
}
catch(e){
if(DEBUG)alert("Error occured in process " + name + " tag transformation ***" + e.description)
}
};
};
Transform.prototype.createMaster = function(node)
{
var nodeSet = node.selectNodes("./*");
for(var i=0;i<nodeSet.length;i++)
{
this.buildHTML(nodeSet[i]);
};
};
Transform.prototype.createTable = function(node)
{
var childs = node.selectNodes("./*");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _cellpadding = node.getAttribute("CELLPADDING");
var _cellspacing = node.getAttribute("CELLSPACING");
var _name = node.getAttribute("NAME");
var _id = node.getAttribute("ID");
var _width = node.getAttribute("WIDTH");
var _height = node.getAttribute("HEIGHT");
var _border = node.getAttribute("BORDER");
var _align = node.getAttribute("ALIGN");
this.b("table");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_cellpadding)this.a("cellpadding",_cellpadding);
else this.a("cellpadding","0");
if(_cellspacing)this.a("cellspacing",_cellspacing);
else this.a("cellspacing","0");
if(_border)this.a("border",_border);
if(_width)this.a("width",_width);
if(_height)this.a("height",_height);
if(_align)this.a("align",_align);
var rows_set = node.selectNodes("./*[name()!='thead']");
var caption_nodeset = node.selectNodes("./*[name()='caption']");
if(caption_nodeset.length>0)
{
var caption = caption_nodeset[0];
this.createTableCaption(caption);
}
var thead_nodeset = node.selectNodes("./*[name()='thead']");
if(thead_nodeset.length>0)
{
var thead = thead_nodeset[0];
this.createTableHeader(thead);
}
this.b("tbody");
for(var i=0;i<rows_set.length;i++)
{
this.buildHTML(rows_set[i]);
};
this.e();
this.e();
};
Transform.prototype.createTableRow = function(node)
{
var is_deleted = (node.getAttribute("DELETED")=="true")?true:false;
if(!is_deleted)
{
var _id = node.getAttribute("ID");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _height = node.getAttribute("HEIGHT");
var _onmouseover = node.getAttribute("ONMOUSEOVER");
var _onmouseout = node.getAttribute("ONMOUSEOUT");
var _onclick = node.getAttribute("ONCLICK");
this.b("tr");
if(_id)this.a("id",_id);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_height)this.a("height",_height);
if(_onmouseover)this.a("onmouseover",_onmouseover);
if(_onmouseout)this.a("onmouseout",_onmouseout);
if(_onclick)this.a("onclick",_onclick);
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
}
};
Transform.prototype.createTableCell = function(node)
{
var _id = node.getAttribute("ID");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _height = node.getAttribute("HEIGHT");
var _width = node.getAttribute("WIDTH");
var _align = node.getAttribute("ALIGN");
var _valign = node.getAttribute("VALIGN");
var _colspan = node.getAttribute("COLSPAN");
var _rowspan = node.getAttribute("ROWSPAN");
var _onmouseover = node.getAttribute("ONMOUSEOVER");
var _onmouseout = node.getAttribute("ONMOUSEOUT");
var _onclick = node.getAttribute("ONCLICK");
var _alias = node.getAttribute("ALIAS");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _filter = node.getAttribute("FILTER");
var _title = node.getAttribute("TOOLTIP");
var _text;
if(_bind && this.params["tableMode"]!=1)
_text = this.findData(_bind,_enum,_filter);
else
_text = IXML.getText(node);
this.b("td");
if(_id)this.a("id",_id);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_height)this.a("height",_height);
if(_width)this.a("width",_width);
if(_align)
this.a("align",_align);
else
this.a("align",this.params["defaultALIGN"]);
if(_valign)
this.a("valign",_valign);
else
this.a("valign",this.params["defaultVALIGN"]);
if(_colspan)this.a("colspan",_colspan);
if(_rowspan)this.a("rowspan",_rowspan);
if(_onmouseover)this.a("onmouseover",_onmouseover);
if(_onmouseout)this.a("onmouseout",_onmouseout);
if(_onclick)this.a("onclick",_onclick);
if(_title)this.a("title",_title);
if(_text)this.result.WriteString(_text.xmlEncode());
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
};
Transform.prototype.createTableHeader = function(node)
{
var childs = node.selectNodes("./*");
var i;
this.b("thead");
if(node.selectSingleNode("./tr[position()=1]"))
{
for(i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
}
else
{
this.b("tr");
for(i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
}
this.e();
};
Transform.prototype.createTableCaption = function(node)
{
var _id = node.getAttribute("ID");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _text = IXML.getText(node);
this.b("caption");
if(_id)this.a("id",_id);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_text)this.result.WriteString(_text.xmlEncode());
this.e();
};
Transform.prototype.createFooter = function(node)
{
this.b("tfoot");
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
};
Transform.prototype.createHeader = function(node)
{
var _id = node.getAttribute("ID");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _height = node.getAttribute("HEIGHT");
var _width = node.getAttribute("WIDTH");
var _colspan = node.getAttribute("COLSPAN");
var _rowspan = node.getAttribute("ROWSPAN");
var _align = node.getAttribute("ALIGN");
var _valign = node.getAttribute("VALIGN");
var _onmouseover = node.getAttribute("ONMOUSEOVER");
var _onmouseout = node.getAttribute("ONMOUSEOUT");
var _onclick = node.getAttribute("ONCLICK");
var _title = node.getAttribute("TOOLTIP");
var _alias = node.getAttribute("ALIAS");
var _bind = node.getAttribute("BIND");
this.b("th");
if(_id)this.a("id",_id);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_height)this.a("height",_height);
if(_width)this.a("width",_width);
if(_align)
this.a("align",_align);
else
this.a("align",this.params["defaultALIGN"]);
if(_valign)
this.a("valign",this.params["defaultVALIGN"]);
else
this.a("valign",_valign);
if(_colspan)this.a("colspan",_colspan);
if(_rowspan)this.a("rowspan",_rowspan);
if(_onmouseover)this.a("onmouseover",_onmouseover);
if(_onmouseout)this.a("onmouseout",_onmouseout);
if(_onclick)this.a("onclick",_onclick);
if(_title)this.a("title",_title);
var _text;
if(_bind)
_text = this.findData(_bind,_enum,_filter);
else
{
if(_alias)
_text = _alias;
else
_text = IXML.getText(node);
}
if(_text)this.result.WriteString(_text);
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
};
Transform.prototype.createHeader4 = function(node)
{
var _id = node.getAttribute("ID");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _text = IXML.getText(node);
this.b("h4");
if(_id)this.a("id",_id);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_text)this.result.WriteString(_text.xmlEncode());
this.e();
};
Transform.prototype.createDivision = function(node)
{
var _id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _height = node.getAttribute("HEIGHT");
var _width = node.getAttribute("WIDTH");
var _onmouseover = node.getAttribute("ONMOUSEOVER");
var _onmouseout = node.getAttribute("ONMOUSEOUT");
var _onclick = node.getAttribute("ONCLICK");
var _title = node.getAttribute("TOOLTIP");
this.b("div");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_height)this.a("height",_height);
if(_width)this.a("width",_width);
if(_title)this.a("title",_title);
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
};
Transform.prototype.createSpan = function(node)
{
var _data = (arguments[1])?arguments[1]:null;
var _row_pos = (arguments[2])?arguments[2]:null;
var _cell_pos = (arguments[3])?arguments[3]:null;
var _table_id = (arguments[4])?arguments[4]:null;
var _id;
if(_row_pos && _cell_pos && _table_id)
_id = "span_" + (_cell_pos-1) + "_" + (_row_pos-1) + "_" + _table_id;
else
_id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _height = node.getAttribute("HEIGHT");
var _width = node.getAttribute("WIDTH");
var _align = node.getAttribute("ALIGN");
var _title = node.getAttribute("TOOLTIP");
var _onclick = node.getAttribute("ONCLICK");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _type = node.getAttribute("TYPE");
var _default_value = node.getAttribute("DEFAULT");
var _filter = node.getAttribute("FILTER");
this.b("span");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_height)this.a("height",_height);
if(_width)this.a("width",_width);
if(_align)this.a("align",_align);
if(_title)this.a("title",_title);
if(_onclick)this.a("onclick",_onclick);
if(this.params["tableMode"]==1)
{
_text = IXML.getText(node);
if((null==_text || _text=="")&& null!=_default_value)
_text = _default_value;
}
else
{
if(_data)
{
if( _type)
{
if( _type.toLowerCase()=="bitmask")
{
var bmsk_id = node.getAttribute("BMSK_ID");
var rel_id = node.getAttribute("ID");
var delim = node.getAttribute("DELIMETER");
_text = this.findBitMaskData(null,Page.findNodeByUniqID(bmsk_id),(delim)?delim:"",rel_id,_data);
}
else
_text = this.findData(_bind,_enum,_filter,_type);
}
else
_text = _data;
}
else if(_bind)
_text = this.findData(_bind,_enum,_filter);
else
_text = IXML.getText(node);
}
if(_text)this.result.WriteString(_text.xmlEncode());
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
};
Transform.prototype.createInnerFrame = function(node)
{
var _id = node.getAttribute("ID");
var _src = node.getAttribute("SRC");
var _name = node.getAttribute("NAME");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _height = node.getAttribute("HEIGHT");
var _width = node.getAttribute("WIDTH");
var _border = node.getAttribute("BORDER");
this.b("iframe");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_src)this.a("src",_src);
if(_border)this.a("frameborder","yes");
else this.a("frameborder","no");
if(_width)this.a("width",_width);
else this.a("width","100%");
if(_height)this.a("height",_height);
else this.a("height","100%");
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
this.e();
};
Transform.prototype.createLink = function(node)
{
var _id = node.getAttribute("ID");
var _href = node.getAttribute("HREF");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _title = node.getAttribute("TOOLTIP");
var _enabled = node.getAttribute("ENABLED");
var _text = IXML.getText(node);
this.b("a");
if(_id)this.a("id",_id);
if(_title)this.a("title",_title);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_href)
this.a("href",_href);
else
this.a("href","javascript:void(0)");
if(_enabled=="false")this.a("disabled","true");
if(_text)this.result.WriteString(_text);
this.e();
};
Transform.prototype.createHR = function(node)
{
var _id = node.getAttribute("ID");
var _color = node.getAttribute("COLOR");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _size = node.getAttribute("SIZE");
var _width = node.getAttribute("WIDTH");
this.b("hr");
if(_id)this.a("id",_id);
if(_color)this.a("color",_color);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_size)this.a("size",_size);
if(_width)this.a("width",_width);
this.e();
};
Transform.prototype.createRadio = function(node)
{
var _name = node.getAttribute("NAME");
var _id = node.getAttribute("ID");
var _enabled = node.getAttribute("ENABLED");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _title = node.getAttribute("TOOLTIP");
var _onclick = node.getAttribute("ONCLICK");
var _checked = node.getAttribute("CHECKED");
var _checked_value = node.getAttribute("CHECKED_VALUE");
var _bind = node.getAttribute("BIND");
if(_bind && null==_checked_value)
{
this.b("span");
this.a("name","DiagnoseSpan");
this.a("style","display:none");
this.result.WriteString("radio requirement violation:when using attribute BIND, HECKED_VALUE are mandatory ");
this.e();
}
this.b("input");
this.a("type","radio");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_enabled=="false")this.a("disabled","true");
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_title)this.a("title",_title);
if(_onclick)this.a("onclick",_onclick);
if(_checked=="true")this.a("checked",_checked);
var _data;
if(_bind)
{
_data = this.findData(_bind,null,null);
if(_checked_value && _checked_value==_data)
{
this.a("checked","true");
this.a("value",_data);
}
}
this.e();
};
Transform.prototype.createBreak = function(node)
{
var _class = node.getAttribute("CLASS");
this.b("br");
if(_class)this.a("class",_class);
this.e();
};
Transform.prototype.createHidden = function(node, data)
{
var _id = node.getAttribute("ID");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _default_value = node.getAttribute("DEFAULT_VALUE");
var _txt;
this.b("input");
this.a("type","hidden");
if(_id)this.a("id",_id);
if(_default_value)
this.a("value",_default_value);
else{
if (IsUndefined(data))
{
if(_bind)
_txt = this.findData(_bind,_enum,null);
else
_txt = IXML.getText(node);
this.a("value",(null==_txt)?"":_txt.xmlEncode());
}
else
{
_txt = data;
this.a("value", _txt);
}
}
this.e();
};
Transform.prototype.createNOBR = function(node)
{
var _id = node.getAttribute("ID");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _filter = node.getAttribute("FILTER");
var childs = node.selectNodes("./*");
var _txt = IXML.getText(node);
this.b("nobr");
if(_id)this.a("id",_id);
if(childs.length>0)
{
this.result.WriteString((null==_txt)?"":_txt);
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
};
}
else{
if(this.params["tableMode"]==1)
_txt = IXML.getText(node);
else{
if(_bind)
_txt = this.findData(_bind,_enum,_filter);
}
this.result.WriteString((null==_txt)?"":_txt)
}
this.e();
};
Transform.prototype.createPassword = function(node)
{
var _id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _readonly = node.getAttribute("READONLY");
var _enabled = node.getAttribute("ENABLED");
var _maxlength = node.getAttribute("MAXLENGTH");
var _onchange = node.getAttribute("ONCHANGE");
var _onkeyup = node.getAttribute("ONKEYUP");
var _onkeydown = node.getAttribute("ONKEYDOWN");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _filter = node.getAttribute("FILTER");
var _submit = node.getAttribute("SUBMIT");
var _valid_type = node.getAttribute("VALID_TYPE");
this.b("input");
this.a("type","password");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_maxlength)this.a("maxlength",_maxlength);
if(_readonly)this.a("readonly",_readonly);
if(_enabled=="false")this.a("disabled","true");
if(_onkeyup)this.a("onkeyup",_onkeyup);
if(_onkeydown)this.a("onkeydown",_onkeydown);
if((_bind && _submit=="true") || _valid_type)
{
var evnt=(_onchange)?_onchange + ";" + this.createControlManager(node):this.createControlManager(node);
this.a("onchange",evnt);
}
else
{
if(_onchange)this.a("onchange",_onchange);
}
var _txt = IXML.getText(node);
if(_bind)
{
_txt = this.findData(_bind,_enum,_filter);
}
this.a("value",(null==_txt)?"":_txt.xmlEncode());
this.e();
};
Transform.prototype.createInputText = function(node)
{
try
{
var _data = (arguments[1])?arguments[1]:null;
var _row_pos = (arguments[2])?arguments[2]:null;
var _cell_pos = (arguments[3])?arguments[3]:null;
var _table_id = (arguments[4])?arguments[4]:null;
var _id;
if(_row_pos && _cell_pos && _table_id)
_id = "txt_" + (_cell_pos-1) + "_" + (_row_pos-1) + "_" + _table_id;
else
_id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _readonly = node.getAttribute("READONLY");
var _enabled = node.getAttribute("ENABLED");
var _maxlength = node.getAttribute("MAXLENGTH");
var _onchange = node.getAttribute("ONCHANGE");
var _onclick = node.getAttribute("ONCLICK");
var _onkeydown = node.getAttribute("ONKEYDOWN");
var _onkeyup = node.getAttribute("ONKEYUP");
var _onblur = node.getAttribute("ONBLUR");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _filter = node.getAttribute("FILTER");
var _submit = node.getAttribute("SUBMIT");
var _type = node.getAttribute("TYPE");
var _valid_type = node.getAttribute("VALID_TYPE");
var _default_value = node.getAttribute("DEFAULT_VALUE");
this.b("input");
this.a("type","text");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_maxlength)this.a("maxlength",_maxlength);
if(_readonly)this.a("readonly",_readonly);
if(_enabled=="false")this.a("disabled","true");
if(_onclick)this.a("onclick",_onclick);
if(_onkeydown)this.a("onkeydown",_onkeydown);
if(_onkeyup)this.a("onkeyup",_onkeyup);
if(_onblur)this.a("onblur",_onblur);
if((_bind && _submit=="true") || _valid_type)
{
var evnt=(_onchange)?_onchange + ";" + this.createControlManager(node):this.createControlManager(node);
this.a("onchange",evnt);
}
else
{
if(_onchange)this.a("onchange",_onchange);
}
var _txt;
if(this.params["tableMode"]==1)
{
_txt = IXML.getText(node);
if((null==_txt || _txt=="")&& null!=_default_value)
_txt = _default_value;
}
else
{
if(_data)
{
if( _type)
{
if( _type.toLowerCase()=="bitmask")
{
var bmsk_id = node.getAttribute("BMSK_ID");
var rel_id = node.getAttribute("ID");
var delim = node.getAttribute("DELIMETER");
_txt = this.findBitMaskData(null,Page.findNodeByUniqID(bmsk_id),(delim)?delim:"",rel_id,_data);
}
else
_txt = this.findData(_bind,_enum,_filter,_type);
}
else
_txt = _data;
}
else if(_bind)
{
_txt = this.findData(_bind,_enum,_filter,_type);
if (!_txt && null != _default_value)
_txt = _default_value;
}
else
_txt = IXML.getText(node);
}
this.a("value",(null==_txt)?"":_txt.xmlEncode());
this.e();
}
catch(e){}
};
Transform.prototype.createButton = function(node)
{
var _src = node.getAttribute("SRC");
var _id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _width = node.getAttribute("WIDTH");
var _height = node.getAttribute("HEIGHT");
var _title = node.getAttribute("TOOLTIP");
var _enabled = node.getAttribute("ENABLED");
var _onclick = node.getAttribute("ONCLICK");
var _src_over = node.getAttribute("SRC_OVER");
var _src_down = node.getAttribute("SRC_DOWN");
var _value = node.getAttribute("VALUE");
var _txt = IXML.getText(node);
var tag_name=(_src)?"img":"button";
this.b(tag_name);
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_src)this.a("src",_src);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_width)this.a("width",_width);
if(_height)this.a("height",_height);
if(_title)this.a("title",_title);
if(_enabled)this.a("disabled",_enabled);
if(_value)this.a("value",_value);
if(_onclick)this.a("onclick",_onclick);
if(_src_over)this.a("onmouseover","javascript:this.src='" + _src_over + "'");
if(_src_down)this.a("onmousedown","javascript:this.src='" + _src_down + "'");
if(_txt)
this.result.WriteString(_txt);
this.e();
};
Transform.prototype.createImage = function(node)
{
var _src = node.getAttribute("SRC");
var _id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _title = node.getAttribute("TOOLTIP");
var _enabled = node.getAttribute("ENABLED");
var _onclick = node.getAttribute("ONCLICK");
var _onmouseover = node.getAttribute("ONMOUSEOVER");
var _onmouseout = node.getAttribute("ONMOUSEOUT");
var _onmousedown = node.getAttribute("ONMOUSEDOWN");
this.b("img");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_src)this.a("src",_src);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_title)this.a("title",_title);
if(_enabled)this.a("disabled",_enabled);
if(_onclick)this.a("onclick",_onclick);
if(_onmouseover)this.a("onmouseover",_onmouseover);
if(_onmouseout)this.a("onmouseout",_onmouseout);
if(_onmousedown)this.a("onmousedown",_onmousedown);
this.e();
};
Transform.prototype.createCombobox = function(node)
{
var _data = (arguments[1])?arguments[1]:null;
var _row_pos = (arguments[2])?arguments[2]:null;
var _cell_pos = (arguments[3])?arguments[3]:null;
var _table_id = (arguments[4])?arguments[4]:null;
var _id;
if(_row_pos && _cell_pos && _table_id)
_id = "cmb_" + (_cell_pos-1) + "_" + (_row_pos-1) + "_" + _table_id;
else
_id = node.getAttribute("ID");
var _id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _size = node.getAttribute("SIZE");
var _width = node.getAttribute("WIDTH");
var _multiple = node.getAttribute("MULTIPLE");
var _title = node.getAttribute("TOOLTIP");
var _enabled = node.getAttribute("ENABLED");
var _onchange = node.getAttribute("ONCHANGE");
var _onclick = node.getAttribute("ONCLICK");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _filter = node.getAttribute("FILTER");
var _submit = node.getAttribute("SUBMIT");
var _type = node.getAttribute("TYPE");
var _valid_type = node.getAttribute("VALID_TYPE");
var _default_value = node.getAttribute("DEFAULT_VALUE");
var _load_option_text = node.getAttribute("LOAD_OPTION_TEXT");
var _load_option_value = node.getAttribute("LOAD_OPTION_VALUE");
this.b("select");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_width)this.a("width",_width);
if(_multiple =="true")this.a("multiple",_multiple);
if(_enabled =="false")this.a("disabled","true");
if(_size)this.a("size",_size);
if(_onclick)this.a("onclick",_onclick);
if((_bind && _submit=="true") || _valid_type)
{
var evnt=(_onchange)?_onchange + ";" + this.createControlManager(node):this.createControlManager(node);
this.a("onchange",evnt);
}
else
{
if(_onchange)this.a("onchange",_onchange);
}
var is_predefined_options = (node.selectNodes("./option") && node.selectNodes("./option")[0])?true:false;
var binded_value=null;
if(this.params["tableMode"]==1)
binded_value = node.getAttribute("VALUE");
else
{
if(_data)
binded_value = _data;
else if(_bind)
binded_value = this.findData(_bind,_enum,_filter);
}
if(null==binded_value && _default_value) binded_value = _default_value;
if(is_predefined_options)
{
var childs = node.selectNodes("./option");
for(var i=0;i<childs.length;i++)
{
this.createOption(childs[i],binded_value);
}
}
else
{
var options_text = this.input.selectNodes("//" + _load_option_text);
var options_value = (_load_option_value)?this.input.selectNodes("//" + _load_option_value):null;
if(_filter && options_text.length>0)
{
var last_pos = _bind.lastIndexOf("/");
xpath = _bind.substr(0,last_pos-1) + "[" + _filter + "]" + _bind.substr(last_pos);
options_text = this.input.selectNodes("//" + xpath);
}
if(options_text.length>0)
{
for(var j=0;j<options_text.length;j++)
{
this.b("option");
var _value="";
if(options_value && options_value[j])
{
_value = IXML.getText(options_value[j]);
if(binded_value == _value)
this.a("selected","true");
}
else
{
_value = IXML.getText(options_text[j]);
if(binded_value == _value)
this.a("selected","true");
}
this.a("value",_value.xmlEncode());
this.result.WriteString(IXML.getText(options_text[j]).xmlEncode());
this.e()
}
}
}
this.e();
};
Transform.prototype.createOption = function(node,selected_value)
{
var _txt = IXML.getText(node);
if (null==_txt)
_txt = "";
var _id = node.getAttribute("ID");
this.b("option");
if (selected_value == _txt)
this.a("selected","true");
this.a("value",node.getAttribute("VALUE"));
if (_id)
this.a("id",_id);
this.result.WriteString(_txt.xmlEncode());
this.e()
};
Transform.prototype.createCheckbox = function(node)
{
var _id ;
var _data = (arguments[1])?arguments[1]:null;
var _row_pos = (arguments[2])?arguments[2]:null;
var _cell_pos = (arguments[3])?arguments[3]:null;
var _table_id = (arguments[4])?arguments[4]:null;
var _id;
if(_row_pos && _cell_pos && _table_id)
_id = "chb_" + (_cell_pos-1) + "_" + (_row_pos-1) + "_" + _table_id;
else
_id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _title = node.getAttribute("TOOLTIP");
var _enabled = node.getAttribute("ENABLED");
var _onclick = node.getAttribute("ONCLICK");
var _title = node.getAttribute("TOOLTIP");
var _type = node.getAttribute("TYPE");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _filter = node.getAttribute("FILTER");
var _submit = node.getAttribute("SUBMIT");
var _valid_type = node.getAttribute("VALID_TYPE");
var _checked_value = node.getAttribute("CHECKED_VALUE");
var _unchecked_value = node.getAttribute("UNCHECKED_VALUE");
var _checked = node.getAttribute("CHECKED");
var _val=null;
if(this.params["tableMode"]==1)
{
_val = node.getAttribute("VALUE");;
}
else
{
if(_bind){
if(_data)
{
if( _type)
{
if( _type.toLowerCase()=="bitmask")
{
var bmsk_id = node.getAttribute("BMSK_ID");
var rel_id = node.getAttribute("ID");
var delim = node.getAttribute("DELIMETER");
_val = this.findBitMaskData(null,Page.findNodeByUniqID(bmsk_id),(delim)?delim:"",rel_id,_data);
}
else
_val = this.findData(_bind,_enum,_filter,_type);
}
else
_val = _data;
}
else
_val = this.findData(_bind,_enum,_filter);
}
}
this.b("input");
this.a("type","checkbox");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_title)this.a("title",_title);
if(_bind)this.a("bind",_bind);
if(_checked_value)this.a("checked_value",_checked_value);
if(_unchecked_value)this.a("unchecked_value",_unchecked_value);
if(_enabled=="false")this.a("disabled","true");
if(_checked=="true")this.a("checked","true");
if(_checked_value && (_checked_value==_val))
{
this.a("checked","true");
this.a("value",_val);
}
if((_bind && _submit=="true") || _valid_type)
{
var evnt=(_onclick)?_onclick + ";" + this.createControlManager(node):this.createControlManager(node);
this.a("onclick",evnt);
}
else if(_onclick)
this.a("onclick",_onclick);
this.e()
};
Transform.prototype.createFieldSet = function(node)
{
var _id = node.getAttribute("ID");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _align = node.getAttribute("ALIGN");
var childs = node.selectNodes("./*");
this.b("fieldset");
if(_id)this.a("id",_id);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_align)this.a("align",_align);
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
}
this.e();
};
Transform.prototype.createLegend = function(node)
{
var _id = node.getAttribute("ID");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _align = node.getAttribute("ALIGN");
var childs = node.selectNodes("./*");
this.b("legend");
if(_id)this.a("id",_id);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_align)this.a("align",_align);
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
}
this.e();
};
Transform.prototype.createUnderline = function(node)
{
var childs=node.selectNodes("./*");
var data = IXML.getText(node);
this.b("u");
if(null!=data)
this.result.WriteNode(data.toString());
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
}
this.e();
};
Transform.prototype.createBold = function(node)
{
var childs=node.selectNodes("./*");
var data = IXML.getText(node);
this.b("b");
if(null!=data)
this.result.WriteNode(data.toString());
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
}
this.e();
};
Transform.prototype.createInputFile = function(node)
{
var _id = node.getAttribute("ID");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _align = node.getAttribute("ALIGN");
var _valign = node.getAttribute("VALIGN");
var _width = node.getAttribute("WIDTH");
var _height = node.getAttribute("HEIGHT");
var _onfilterchange = node.getAttribute("ONFILTERCHANGE");
var _onclick = node.getAttribute("ONCLICK");
var _value = node.getAttribute("VALUE");
this.b("input");
this.a("type","file");
if(_id)this.a("id",_id);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_align)this.a("align",_align);
if(_valign)this.a("valign",_valign);
if(_width)this.a("width",_width);
if(_height)this.a("height",_height);
if(_onfilterchange)this.a("onfilterchange",_onfilterchange);
if(_onclick)this.a("onclick",_onclick);
if(_value)this.result.WriteString(IXML.getText(node));
this.e();
};
Transform.prototype.createRepeatedTable = function(node)
{
var _tblID = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _width = node.getAttribute("WIDTH");
var _height = node.getAttribute("HEIGHT");
var _cellpadding = node.getAttribute("CELLPADDING");
var _cellspacing = node.getAttribute("CELLSPACING");
var _border = node.getAttribute("BORDER");
var _bind = node.getAttribute("BIND");
var _object = node.getAttribute("OBJECT");
var section_name = "";
var tbl_tagname = "";
if(_bind){
var pos = _bind.indexOf("/");
section_name=(pos!=-1)?_bind.substr(0,pos):_bind;
tbl_tagname=(pos!=-1)?_bind.getLastNodeName(_bind):_bind;
}
this.b("div");
this.a("id","container".concat(_tblID));
this.b("table");
if(_tblID)this.a("id",_tblID);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_cellpadding)
this.a("cellpadding",_cellpadding);
else
this.a("cellpadding","0");
if(_cellspacing)
this.a("cellspacing",_cellspacing);
else
this.a("cellspacing","0");
if(_width)this.a("width",_width);
if(_height)this.a("height",_height);
if(_border)this.a("border",_border);
var rows_set = node.selectNodes("./*[name()!='thead']");
var caption_nodeset = node.selectNodes("./*[name()='caption']");
if(caption_nodeset.length>0)
{
var caption = caption_nodeset[0];
this.createTableCaption(caption);
}
var thead_nodeset = node.selectNodes("./*[name()='thead']");
if(thead_nodeset.length>0)
{
var thead = thead_nodeset[0];
this.createTableHeader(thead);
}
this.b("tbody");
for(var i=0;i<rows_set.length;i++)
{
if(rows_set[i].nodeName=="repeatedrow")
this.createRepeatedRow(rows_set[i],_tblID,_bind);
else if(rows_set[i].nodeName=="tr")
this.createTableRow(rows_set[i]);
}
this.e();
var tfoot_nodeset = node.selectNodes("./*[name()='tfoot']");
if(tfoot_nodeset.length > 0)
{
var tfoot = tfoot_nodeset[0];
this.createFooter(tfoot);
}
this.e();
this.e();
};
Transform.prototype.createRepeatedRow = function(node,tblID,tbl_bind)
{
var _class = node.getAttribute("CLASS");
var _class_odd = node.getAttribute("CLASS_ODD");
var _class_select = node.getAttribute("CLASS_SELECT");
var _style = node.getAttribute("STYLE");
var _onclick = node.getAttribute("ONCLICK");
var _onmouseover = node.getAttribute("ONMOUSEOVER");
var _onmouseout = node.getAttribute("ONMOUSEOUT");
var _bind = node.getAttribute("BIND");
var xpath = tbl_bind + "/" + _bind;
var data_rows = this.input.selectNodes("//" + xpath);
var repeatedcells = node.selectNodes("./repeatedcell");
if(data_rows.length==0)return;
var _id;
for(var i=0;i<data_rows.length;i++)
{
_id = "r".concat(i + "_" + tblID);
this.b("tr");
this.a("id",_id);
if(_class_odd)
{
if(i % 2 !=0)
this.a("class",_class_odd);
else
this.a("class",_class);
}
else
{
this.a("class",_class);
}
if(_onclick)this.a("onclick",_onclick);
if(_onmouseover)this.a("onmouseover",_onmouseover);
if(_onmouseout)this.a("onmouseout",_onmouseout);
for(var j=0;j<repeatedcells.length;j++)
{
this.createRepeatedCell(repeatedcells[j],tblID,xpath,(i+1),(j+1));
}
this.e();
}
};
Transform.prototype.createRepeatedCell = function(node,tblID,xpath,row_pos,cell_pos)
{
try
{
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _width = node.getAttribute("WIDTH");
var _onclick = node.getAttribute("ONCLICK");
var _onmouseover = node.getAttribute("ONMOUSEOVER");
var _onmouseout = node.getAttribute("ONMOUSEOUT");
var _bind = node.getAttribute("BIND");
var _filter = node.getAttribute("FILTER");
var _enum = node.getAttribute("ENUM");
var _type = node.getAttribute("TYPE");
var _delim = node.getAttribute("DELIMETER");
var _xpath="";
if(_bind){
if(_filter)
_xpath =xpath.concat("["+ row_pos +"][" + _filter + "]/" + _bind);
else
_xpath =xpath.concat("["+ row_pos +"]/" + _bind);
}
this.b("td");
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_width)this.a("width",_width);
if(_onclick)this.a("onclick",_onclick);
if(_onmouseover)this.a("onmouseover",_onmouseover);
if(_onmouseout)this.a("onmouseout",_onmouseout);
var _data="";
var childs;
if(_bind)
{
if(_type && _type=="bitmask"){
var bmsk_id = node.getAttribute("BMSK_ID");
var bmsk_node=Page.findNodeByUniqID(bmsk_id);
this.a("id","cell_" + cell_pos + "_" + row_pos + "_" + tblID);
_data = this.findBitMaskData(_xpath,bmsk_node,_delim);
}
else
_data = this.findData(_xpath,_enum);
if(null==_data)
_data="";
else
_data = _data.xmlEncode();
this.result.WriteString(_data.toString());
}
else
{
childs = node.selectNodes("./*");
var _ibind,_idata,_ienum,_ifilter,_ixpath="";
for(var j=0;j<childs.length;j++)
{
_ibind = childs[j].getAttribute("BIND");
_ienum = childs[j].getAttribute("ENUM");
_ifilter = childs[j].getAttribute("FILTER");
if(_ibind && null==childs[j].getAttribute("ONOBJECTINIT")){
if(_ifilter)
_ixpath =xpath.concat("["+ row_pos +"][" + _ifilter + "]/" + _ibind);
else
_ixpath =xpath.concat("["+ row_pos +"]/" + _ibind);
_idata = this.findData(_ixpath,_ienum);
switch(childs[j].nodeName.toLowerCase())
{
case "inputtext" : this.createInputText(childs[j],_idata,row_pos,cell_pos,tblID);break;
case "select":
case "combobox": this.createCombobox(childs[j],_idata,row_pos,cell_pos,tblID);break;
case "span": this.createSpan(childs[j],_idata,row_pos,cell_pos,tblID);break;
case "checkbox": this.createCheckbox(childs[j],_idata,row_pos,cell_pos,tblID);break;
case "hidden": this.createHidden(childs[j], _idata);break;
}
}
else
this.buildHTML(childs[j],[tblID,xpath,row_pos,cell_pos]);
}
}
this.e();
}
catch(e){}
};
Transform.prototype.createListHolder = function(node)
{
var _id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _size = node.getAttribute("SIZE");
var _width = node.getAttribute("WIDTH");
var _multiple = node.getAttribute("MULTIPLE");
var _title = node.getAttribute("TOOLTIP");
var _enabled = node.getAttribute("ENABLED");
var _onchange = node.getAttribute("ONCHANGE");
var _onclick = node.getAttribute("ONCLICK");
this.b("select");
if(_id)this.a("id",_id);
if(_name)
this.a("name",_name);
else
this.a("name",_id);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_size) this.a("size",_size);
if(_width) this.a("width",_width);
if(_multiple) this.a("multiple",_multiple);
if(_title) this.a("title",_title);
if(_enabled=="false") this.a("disabled","true");
if(_onchange) this.a("onchange",_onchange);
if(_onclick) this.a("onclick",_onclick);
this.e();
};
Transform.prototype.createPagerHolder = function(node)
{
var _id = node.getAttribute("ID");
var _class = node.getAttribute("CLASS");
this.b("table");
this.a("id",_id);
if(_class)this.a("class",_class);
this.b("tbody");
this.b("tr");
this.b("td");
this.e();
this.e();
this.e();
this.e();
};
Transform.prototype.createBitMaskHolder =function(node)
{
var childs = node.selectNodes("./*");
for(var i=0;i<childs.length;i++)
{
this.buildHTML(childs[i]);
}
};
Transform.prototype.findData = function(_bind,_enum,_filter)
{
var value = "";
var xpath = "//" + _bind;
var dataNodes,dataNode;
dataNodes = this.input.selectNodes(xpath);
dataNode = dataNodes[0];
if(_filter && dataNodes.length>1)
{
var last_pos = _bind.lastIndexOf("/");
xpath = _bind.substr(0,last_pos-1) + "[" + _filter + "]" + _bind.substr(last_pos);
dataNode = this.input.selectNodes(xpath)[0];
}
if(dataNode)
{
value = IXML.getText(dataNode);
if(_enum=="true")value = Page.getEnumData(dataNode.nodeName,value);
}
return value;
};
Transform.prototype.findBitMaskData=function(_xpath,bmsk_node,delim,rel_id)
{
var val = (_xpath)?this.findData(_xpath):(arguments[4])?arguments[4]:null;
if(null==val)return;
var len = val.length;
var i,bit;
var res="";
var bit_val="";
for(i=0;i<len;i++)
{
bit = val.charAt(i);
if(bit=="1")
{
bit_val = this.get_bitvalue(i,bmsk_node,rel_id);
if(null==bit_val)continue;
res=(res=="")?this.get_bitvalue(i,bmsk_node,rel_id):res + delim + this.get_bitvalue(i,bmsk_node,rel_id);
}
}
return res;
};
Transform.prototype.get_bitvalue = function(num,bmsk_node,rel_id)
{
var xpath = (rel_id)? "./bits/*[name()='bit" + num + "' and @RELATED_ID='" + rel_id + "']" :
"./bits/*[name()='bit" + num + "']";
var bit_node = bmsk_node.selectSingleNode(xpath);
if(null==bit_node)return null;
var bit_bind =(bit_node.attributes.getNamedItem("BIND"))?bit_node.getAttribute("BIND"):"";
var bit_data="";
if(bit_bind!="")
{
bit_data = IXML.getText($d("//" + bit_bind));
IXML.setText(bit_node,bit_data);
}
else
{
bit_data = IXML.getText(bit_node);
}
return bit_data;
};
Transform.prototype.createControlManager = function(node)
{
var _id = node.getAttribute("ID");
var _bind = (node.getAttribute("BIND_POST"))?node.getAttribute("BIND_POST"):node.getAttribute("BIND");
var _submit = (node.getAttribute("SUBMIT")=="true")?node.getAttribute("SUBMIT"):"false";
var _valid_type = (node.getAttribute("VALID_TYPE"))?node.getAttribute("VALID_TYPE"):"";
var _enum = (node.getAttribute("ENUM"))?node.getAttribute("ENUM"):"";
var _filter = (node.getAttribute("FILTER"))?node.getAttribute("FILTER"):"";
var _mandatory = (node.getAttribute("MANDATORY"))?node.getAttribute("MANDATORY"):"";
var _max_value = (node.getAttribute("MAX_VALUE"))?node.getAttribute("MAX_VALUE"):"";
var _min_value = (node.getAttribute("MIN_VALUE"))?node.getAttribute("MIN_VALUE"):"";
var _field_name = (node.getAttribute("FIELD_NAME"))?node.getAttribute("FIELD_NAME"):"";
var _event = "";
var _msg_id = (node.getAttribute("MSG_ID"))?node.getAttribute("MSG_ID"):"";
switch(node.nodeName)
{
case "inputtext":
case "combobox":
case "select": _event="change";break;
case "checkbox":_event="click";break;
}
var result = "ControlManager.create('" + _id + "','" + _bind + "','" + _enum + "','" + _valid_type + "','" + _event + "','" + _submit + "','" + _field_name + "','" + _mandatory + "','" + _min_value + "','" + _max_value + "','" + _filter + "','" + _msg_id + "')";
return result;
}
Class(BaseTable);
function BaseTable()
{
this.konstructor=function(){
this.masterNode;
this.tableID;
this.container;
this.templateNode;
this.bindingTablePath;
this.bindingRowPath;
this.dataSectionName;
this.xmlData;
this.xmlData_deleted;
this.data;
this.selectedRow;
this.url;
if(arguments.length>0){
if(typeof(arguments[0])=="object"){
this.masterNode = arguments[0];
this.tableID = this.masterNode.getAttribute("ID");
}
if(typeof(arguments[0])=="string"){
this.tableID = arguments[0];
this.masterNode = Page.findNodeByUniqID(this.tableID)
}
this.ID = this.tableID;
if(arguments[1] && typeof(arguments[1])=="string")
this.container = document.getElementById(arguments[1]);
else
this.container=IXML.getParentElement(document.getElementById(this.tableID));
if(this.masterNode.attributes.getNamedItem("BIND")){
this.bindingTablePath=this.masterNode.getAttribute("BIND");
this.setSectionName();
this.templateNode = $m("//TEMPLATE[@API='" + this.dataSectionName + "']");
}
else
{
if(this.masterNode.attributes.getNamedItem("SECTION_NAME"))
{
this.dataSectionName = this.masterNode.getAttribute("SECTION_NAME");
this.templateNode = $m("//TEMPLATE[@API='" + this.dataSectionName + "']");
}
}
if(this.masterNode.getAttribute("MULTISELECT")=="true")
this.isMultiSelect=true;
else
this.isMultiSelect=false;
if(this.masterNode.getAttribute("AUTOMATIC_SAVE")=="false")
this.automatic_save=false;
else
this.automatic_save=true;
var masterBindRow = this.masterNode.selectSingleNode("./*[@BIND!='']");
this.bindingRowPath=(masterBindRow)?masterBindRow.getAttribute("BIND"):"";
if(masterBindRow && masterBindRow.attributes.getNamedItem("CLASS_SELECTED"))
this.css_selectedRow = masterBindRow.getAttribute("CLASS_SELECTED");
if(masterBindRow && masterBindRow.attributes.getNamedItem("CLASS"))
this.css_row = masterBindRow.getAttribute("CLASS");
if(masterBindRow && masterBindRow.attributes.getNamedItem("CLASS_ODD"))
this.css_row_odd = masterBindRow.getAttribute("CLASS_ODD");
this.xmlData = IXML.getDomDocument();
this.xmlData_deleted=IXML.getDomDocument(null,"deletedData");
this.data=new Array();
this.selectedRow = new Array();
this.cntRows = 0;
this.message = "";
this.callback="";
this.url="";
}
this.XML=new XMLWriter();
};
this.getRelatedIDs = function(xpath)
{
if(null==this.relatedIDs)return;
var tNodeSet = this.masterNode.selectNodes(xpath);
var firstChild,relID="";
for(var i=0;i<tNodeSet.length;i++)
{
if(tNodeSet[i].attributes.getNamedItem("RELATED_ID"))
this.relatedIDs.push(tNodeSet[i].getAttribute("RELATED_ID").trim());
else
{
relID="";
firstChild = IXML.getChildElement(tNodeSet[i],1);
if(firstChild){
relID=(firstChild.attributes.getNamedItem("RELATED_ID"))? firstChild.getAttribute("RELATED_ID").trim():"";
}
this.relatedIDs.push(relID);
}
}
};
this.OnComplete = function(responseText,responseXML){} ;
this.get=function(url,callback,sender){
if(url.trim()=="")return;
var cbo = new CallBackObject(sender);
if(sender)
{
if(typeof(callback)== "string")
this.OnComplete = eval(callback);
else
this.OnComplete = callback;
}
else
{
if(typeof(callback)== "string")
cbo.OnComplete = eval(callback);
else
cbo.OnComplete = callback;
}
this.url = url;
cbo.DoCallBack(null,url,true,"GET");
};
this.post=function(posted_xml,async,action,callback)
{
if(PageManager.IS_MOCKUP) return;
var post_data;
var action = (null==action)?"wcd":action;
var async=(null==async)?true:async;
var sender=(null==arguments[4])?this:arguments[4];
var cbo = new CallBackObject(sender);
if(typeof(callback)=="string")
this.OnComplete = eval(callback);
else if (typeof callback == "function" )
this.OnComplete = callback;
else
this.OnComplete = this.complete_post;
post_data="<?xml version='1.0' encoding='utf-8'?>" + IXML.serialize(posted_xml);
if(_IXML_IS_IE && DEBUG==true ){
if(POST_XML_PATH!="")
Util.debug_saveXml(post_data,POST_XML_PATH);
}
cbo.DoCallBack(post_data,"wcd",async,"POST",action);
};
this.complete_post = function(responseText,responseXML)
{
var xml = IXML.getDomDocument();
if(responseText!="")
{
if(!Page.timeOutIdle(responseText))
{
try{
responseText = responseText.trim();
var xml_pos=responseText.indexOf("<?xml");
responseText=responseText.substr(xml_pos);
xml=(new DOMParser()).parseFromString(responseText, "text/xml");
}catch(e){
}
}
}
Page.checkValidResponse(xml);
if(this.wait != 'undefined')this.wait(true);
this.get(this.url,(this.callback=="")?null:this.callback,this)
};
this.updateEntry=function(arr_Entry,cssClass){};
this.setRowData=function(rowNode,arrData){
var cellsXml = rowNode.selectNodes("./td[@RELATED_ID]");
for(var i=0;i<cellsXml.length;i++)
{
var value=arrData[i];
if(value!=""){
if(cellsXml[i].attributes.getNamedItem("ENUM") && cellsXml[i].attributes.getNamedItem("BIND")){
var bind=cellsXml[i].getAttribute("BIND").trim();
var nodeName = bind.getLastNodeName();
value = this.getEnumValue(nodeName,arrData[i]);
cellsXml[i].setAttribute("VALUE",value)
}
else
cellsXml[i].setAttribute("VALUE",arrData[i]);
var childElement = IXML.getChildElement(cellsXml[i],1);
if(childElement){
switch(childElement.nodeName)
{
case "checkbox": break;
case "nobr":childElement.setAttribute("VALUE",value);
IXML.setText(childElement,arrData[i]);
break;
}
}
else
IXML.setText(cellsXml[i],arrData[i]);
}
}
};
this.restoreEntry = function(obj)
{
var row = IXML.getContainer(obj,"tr");
var restored_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(restored_row.getAttribute("RESTORED")=="1")
restored_row.removeAttribute("RESTORED");
else
{
restored_row.setAttribute("RESTORED","1");
if(restored_row.attributes.getNamedItem("UPDATED"))
restored_row.removeAttribute("UPDATED");
}
};
this.updateExists = function()
{
var xpath_update_rows = "//tr[@UPDATED=1]";
return this.xmlData.selectNodes(xpath_update_rows).length > 0 ;
};
this.getRowData = function(obj)
{
var row = IXML.getContainer(obj,"tr");
var rows_xpath = "//tr[@ID and contains(@ID,'r')]";
var dataRows = this.xmlData.selectNodes(rows_xpath);
var bIsSelected = this.is_selected(row.id);
if(bIsSelected)
this.unselectRow(row);
else
this.selectRow(row);
if(this.selectedRow.length==1)
this.updateRelatedFields(row.id);
else
this.resetRelatedFields(row.id);
this.setRowsCSS();
};
this.getRowPosition = function(xmlRows,row_id){
var pos = -1;
for(var i=0;i<xmlRows.length;i++)
{
if (xmlRows[i].getAttribute("ID")==row_id) return i;
}
return pos;
};
this.setRowsCSS=function()
{
var collRows = this.xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
var i;
for(i=0;i<collRows.length;i++)
{
if(this.css_row_odd){
if(i%2!=0)
collRows[i].setAttribute("CLASS",this.css_row_odd);
else
collRows[i].setAttribute("CLASS",this.css_row);
}
else
{
collRows[i].setAttribute("CLASS",this.css_row);
}
if(collRows[i].getAttribute("SELECTED")=="1"){
if(null!=this.css_selectedRow)
collRows[i].setAttribute("CLASS",this.css_selectedRow);
}
var id = collRows[i].getAttribute("ID");
if(document.getElementById(id))
document.getElementById(id).className = collRows[i].getAttribute("CLASS");
};
};
this.updateRelatedFields=function(selectedRowID)
{
var selectedRows_xpath = "//tr[@ID and contains(@ID,'r')and @SELECTED='1']";
var selectedRows = this.xmlData.selectNodes(selectedRows_xpath);
if(selectedRows.length==0)return;
var collCells =selectedRows[0].selectNodes("./*") ;
var contextNode = null;
for(var i=0;i<collCells.length;i++)
{
contextNode=null;
if(collCells[i].attributes.getNamedItem("RELATED_ID"))
{
contextNode = collCells[i];
}
else
{
var fChild = IXML.getChildElement(collCells[i],1);
if(fChild)contextNode = fChild;
}
if(null==contextNode)continue;
if(contextNode.attributes.getNamedItem("RELATED_ID"))
{
relatedID=contextNode.getAttribute("RELATED_ID");
switch(contextNode.nodeName)
{
case "combo" :
case "combobox" :
case "select" :
case "checkbox": data = contextNode.getAttribute("VALUE");break;
default: data = IXML.getText(contextNode);break;
}
if(contextNode.attributes.getNamedItem("BIND"))
bind = contextNode.getAttribute("BIND");
if(bind && contextNode.getAttribute("TYPE")=="bitmask")
{
var bmsk_id = contextNode.getAttribute("BMSK_ID");
var ind = BitMask.findIndex(bmsk_id);
BitMask.coll[ind][1].bmsk_data = contextNode.getAttribute("VALUE");
BitMask.coll[ind][1].translate(relatedID);
}
else
Util.setControlData(relatedID,data);
};
};
};
this.resetRelatedFields=function(selectedRowID)
{
var rowSet = this.xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
if(rowSet.length==0)return;
var collCells = rowSet[0].selectNodes("./*");
for(var i=0;i<collCells.length;i++)
{
if(collCells[i].attributes.getNamedItem("RELATED_ID") &&
collCells[i].getAttribute("RELATED_ID")!=""){
relatedID=collCells[i].getAttribute("RELATED_ID");
if(collCells[i].firstChild)
bool=(collCells[i].firstChild.nodeType==1)?true:false;
var default_value = collCells[i].getAttribute("DEFAULT_VALUE");
Util.resetControlData(relatedID,default_value);
};
};
};
this.transform=function()
{
if(this.container){
IXML.clearChildNodes(this.container);
Page.processor.setParameter("","tableMode","1");
this.container.innerHTML=Page.transform(this.xmlData);
Page.processor.setParameter("","tableMode","");
this.evalEvent("ONLOAD")
}
};
this.bind=function(clientXml,dataXml,action)
{
if(IXML.getChildElement(clientXml,1)==null)return;
var rows = this._getRowSet(action);
if(null==rows)
return;
else if(action==ACTION_DELETE)
{
if(null==dataXml)Page.dataXml_delete = IXML.getDomDocument(null,DATAROOT);
dataXml = Page.dataXml_delete;
var section_node;
var node_set = $dcol("//" + this.dataSectionName);
if(node_set.length>0)
section_node = node_set[0];
if(section_node){
IXML.appendChild(section_node,dataXml.selectSingleNode("//" + DATAROOT));
dataXml.selectSingleNode("//" + this.dataSectionName).setAttribute("action",ACTION_DELETE);
}
}
Page.createSectionXml(this.dataSectionName,dataXml,action);
var tableNodeName = this.bindingTablePath.getLastNodeName();
var tbl_xpath=(this.dataSectionName==tableNodeName)?"//" + tableNodeName + "[@action='" + action + "']":
"//" + this.dataSectionName + "[@action='" + action + "']" + "//" + tableNodeName;
var row_path = "//" + this.bindingTablePath + "/" + this.bindingRowPath;
var templateTblNode = (this.dataSectionName==tableNodeName)?this.templateNode:
this.templateNode.selectSingleNode(".//" + tableNodeName);
var tblDataNode =dataXml.selectSingleNode(tbl_xpath);
var sectionNode = dataXml.selectSingleNode("//" + this.dataSectionName);
var templateEntryNode = templateTblNode.selectSingleNode("./" + this.bindingRowPath);
this._buildDataXmlRows(rows,tblDataNode,templateEntryNode,action);
Page.setAlteredDataNodes(dataXml.selectSingleNode("//" + this.dataSectionName + "[@action='" + action + "']"),action);
};
this.save=function()
{
};
this.buildXmlTable=function(data)
{
try{
var collRows,row;
this.XML.BeginNode("ROOT");
this.XML.BeginNode("innertable");
this.serializeAttributes(this.masterNode.attributes);
collRows = this.masterNode.selectNodes("./*");
for(var i=0;i<collRows.length;i++)
{
row = collRows[i];
if(row.attributes.getNamedItem("BIND")&& row.getAttribute("BIND")!="")
{
if(this.data && this.data.length>0)
this.buildXmlRow(row)
}
else
{
this.XML.BeginNode(row.nodeName);
this.serializeAttributes(row.attributes);
this.serializeInnerNodes(row);
this.XML.EndNode();
}
}
this.XML.EndNode();
this.XML.Close();
this.xmlData = (new DOMParser()).parseFromString(this.XML.ToString(), "text/xml");
this.XML.Reset();
}
catch(e)
{
alert("**Error occured in BaseTable.prototype.buidXmlTable**" + e.description)
}
};
this.buildXmlRow=function(row)
{
if(this.css_row_odd){
row.removeAttribute("CLASS_ODD");
row.removeAttribute("CLASS");
}
var rtCells = row.selectNodes("./*");
for(var i=0;i<this.data.length;i++)
{
this.XML.BeginNode("tr");
this.serializeAttributes(row.attributes);
if(this.css_row_odd){
if(i%2!=0)
this.XML.Attrib("CLASS",this.css_row_odd );
else
this.XML.Attrib("CLASS",this.css_row );
}
this.XML.Attrib("ID","r" + i + "_" + this.tableID);
if(this.selectedRow[i] && this.selectedRow[i]==true)
this.XML.Attrib("SELECTED","1");
this.buildXmlCell(i,rtCells);
this.XML.EndNode();
if(this.cntRows!=null)this.cntRows++;
}
};
this.buildXmlCell=function(member,collCells)
{
var data = this.data[member];
var collInnerNodes,innerNode;
for(var i=0;i<collCells.length;i++)
{
var _bind = collCells[i].getAttribute("BIND");
var _enum = collCells[i].getAttribute("ENUM");
var _type = collCells[i].getAttribute("TYPE");
var _delim = collCells[i].getAttribute("DELIMETER");
this.XML.BeginNode("td");
this.serializeAttributes(collCells[i].attributes);
if(IXML.hasChildElements(collCells[i]))
this.buildXmlInnerElement(i,member,collCells[i],data[i]);
else
{
if(_bind!="" && _enum=="true")
{
var bind=_bind.trim();
var nodeName = _bind.getLastNodeName();
var val = this.getEnumValue(nodeName,data[i]);
var txt = this.getEnumData(nodeName,data[i]);
this.XML.Attrib("VALUE",val);
this.XML.WriteString(txt);
}
else if(_bind!="" && _type=="bitmask")
{
var data_translated=this.translate_bitmask(data[i],_delim,collCells[i]);
this.XML.Attrib("VALUE",data[i]);
this.XML.Attrib("ID","cell_" + i + "_" + member + "_" + this.tableID);
this.XML.WriteString(data_translated);
}
else
{
this.XML.Attrib("VALUE",data[i]);
this.XML.WriteString(data[i]);
}
}
this.XML.EndNode();
}
};
this.buildXmlInnerElement=function(cell_num,member,cell,data)
{
var collInnerNodes = cell.childNodes;
var innerElement,id_suffix,bind,_enum,nodeName,_type,val,_delim,txt,data_translated;
var row_num = member;
for(var i=0;i<collInnerNodes.length;i++)
{
if(collInnerNodes[i].nodeType!=1)continue;
innerElement = collInnerNodes[i];
bind = innerElement.getAttribute("BIND");
_enum = innerElement.getAttribute("ENUM");
_type = innerElement.getAttribute("TYPE");
_delim = innerElement.getAttribute("DELIMETER");
data_translated=null;
if(bind && bind!="")
{
nodeName = bind.trim().getLastNodeName();
if(_type=="bitmask")
{
data_translated = this.translate_bitmask(data,_delim,innerElement);
val=txt = data_translated;
}
else
{
val = this.getEnumValue(nodeName,data);
txt = this.getEnumData(nodeName,data);
}
}
this.XML.BeginNode(innerElement.nodeName);
this.serializeAttributes(innerElement.attributes,true);
id_suffix =cell_num + "_" + row_num + "_" + this.tableID;
switch(innerElement.nodeName)
{
case "checkbox":
if(null==innerElement.attributes.getNamedItem("ID")|| innerElement.attributes.getNamedItem("BMSK_ID"))
this.XML.Attrib("ID","chb_" + id_suffix);
if(bind && bind!=""){
this.XML.Attrib("CHECKED",(innerElement.getAttribute("CHECKED_VALUE")==val)?"true":"false");
}break;
case "inputtext":
if(null==innerElement.attributes.getNamedItem("ID")|| innerElement.attributes.getNamedItem("BMSK_ID"))
this.XML.Attrib("ID","txt_" + id_suffix);
if(bind && bind!=""){
this.XML.Attrib("VALUE",val);
this.XML.WriteString(txt);
}
break;
case "span":
if(null==innerElement.attributes.getNamedItem("ID")|| innerElement.attributes.getNamedItem("BMSK_ID"))
this.XML.Attrib("ID","span_" + id_suffix);
if(bind && bind!=""){
this.XML.Attrib("VALUE",val);
this.XML.WriteString(txt);
}
break;
case "combobox":
case "select" :
if(null==innerElement.attributes.getNamedItem("ID")|| innerElement.attributes.getNamedItem("BMSK_ID"))
this.XML.Attrib("ID","cmb_" + id_suffix);
if(bind && bind!=""){
this.XML.Attrib("VALUE",val);
} break;
case "image":
case "img":
if(null==innerElement.attributes.getNamedItem("ID"))
this.XML.Attrib("ID","img_" + id_suffix);
break;
case "hidden":
this.XML.Attrib("VALUE",val);
break;
}
this.serializeInnerNodes(innerElement);
this.XML.EndNode();
}
};
this.getEnumValue=function(name,v){
return Page.getEnumValue(name,v);
};
this.getEnumData = function(name,v){
return Page.getEnumData(name,v);
};
this.ifBitmaskType = function(xmlrow)
{
return xmlrow.selectNodes(".//*[@TYPE='bitmask']").length>0;
};
this.setBitmaskData = function(objFromRow,objNewRow,action)
{
var bmasknodes = objFromRow.selectNodes(".//*[@TYPE='bitmask']");
if(bmasknodes.length==0)return;
var bmsk_id,bind,collCells,data,id,ind,context_bit,bit_number,val,x,bExists=false;
var arr_bmsktypes = [];
var dataNode;
try
{
for(var i=0;i<bmasknodes.length;i++)
{
bmsk_id = bmasknodes[i].getAttribute("BMSK_ID");
bExists = false;
for (x in arr_bmsktypes)
{
if(arr_bmsktypes.length>0 && arr_bmsktypes[x]==bmsk_id)bExists=true
}
if(!bExists)arr_bmsktypes.push(bmsk_id);
}
if(arr_bmsktypes.length>0)
{
for(i=0;i<arr_bmsktypes.length;i++)
{
ind = BitMask.findIndex(arr_bmsktypes[i]);
BitMask.coll[ind][1].reset_mask();
BitMask.coll[ind][1].bind_set_RTCntrl(objFromRow,this);
dataNode =objNewRow.selectSingleNode(".//" + BitMask.coll[ind][1].xpath.getLastNodeName());
if(dataNode)
{
IXML.setText(dataNode,BitMask.coll[ind][1].new_bmsk_data);
Page.setAlteredDataNodes(dataNode,action);
}
}
}
}
catch(e){if(DEBUG)alert("Error: BaseTable.setBitmaskData** " + e.description )}
};
this.translate_bitmask = function(bmsk_data,delim,bmsk_cell)
{
if(null==delim)var delim=",";
var bmsk_id = bmsk_cell.getAttribute("BMSK_ID");
var ind = BitMask.findIndex(bmsk_id);
var rel_id = bmsk_cell.getAttribute("ID");
BitMask.coll[ind][1].bmsk_data = bmsk_data;
var len = bmsk_data.length;
var i,bit,val;
var res="";
for(i=0;i<len;i++)
{
bit = bmsk_data.charAt(i);
if(bit=="1")
{
val = this.get_bitvalue(i,BitMask.coll[ind][1].bits,rel_id);
if(val){res=(res=="")?this.get_bitvalue(i,BitMask.coll[ind][1].bits,rel_id):res + delim + this.get_bitvalue(i,BitMask.coll[ind][1].bits,rel_id);}
}
}
return res;
};
this.get_bitvalue = function(num,bits,rel_id)
{
var xpath=(rel_id)?"./*[name()='bit" + num + "' and @RELATED_ID='" + rel_id + "']":
"./*[name()='bit" + num + "']";
var bit_node = bits.selectSingleNode(xpath);
bit_data = (bit_node)?IXML.getText(bit_node):"";
return bit_data;
};
this.setSectionName=function()
{
this.dataSectionName =(this.bindingTablePath.search("/")!=-1)?
this.bindingTablePath.substr(0,this.bindingTablePath.indexOf("/")):
this.bindingTablePath;
};
this.selectRow=function(row,cssClass)
{
var _cssClass=(cssClass)?cssClass:this.css_selectedRow;
if(row.className)row.className=cssClass;
var xml_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(this.isMultiSelect)
{
this.selectedRow.push(row.id)
}
else
{
var dataRows = this.xmlData.selectNodes("//tr[@BIND and @SELECTED='1']");
this.selectedRow = [row.id];
IXML.removeAttribute(dataRows,"SELECTED");
}
if(xml_row) xml_row.setAttribute("SELECTED",1);
};
this.unselectRow=function(row,cssClass)
{
if(cssClass){if(row.className)row.className=cssClass;}
var xml_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(xml_row) xml_row.removeAttribute("SELECTED");
for(var i=0;i<this.selectedRow.length;i++)
{
if(this.selectedRow[i]==row.id)
this.selectedRow.splice(i,1);
}
};
this.selectAll=function(cssClass){
if(null==cssClass)var cssClass=this.css_selectedRow;
var tableNode = this.xmlData.selectSingleNode("//*[@ID='"+ this.tableID +"']");
var x_path= "//tr[@ID and contains(@ID,'r')]";
var collRows=tableNode.selectNodes(x_path);
while(this.selectedRow.length>0)this.selectedRow.pop();
for(var i=0;i<collRows.length;i++)
{
this.selectedRow.push(collRows[i].getAttribute("ID"));
collRows[i].setAttribute("SELECTED",1);
document.getElementById(collRows[i].getAttribute("ID")).className=cssClass;
var firstCell = IXML.getChildElement(collRows[i],1);
var firstChild = (firstCell)?IXML.getChildElement(firstCell,1):null;
if(firstChild){
var html_cntr = IXML.getChildElement(IXML.getChildElement(document.getElementById(collRows[i].getAttribute("ID")),1),1);
if(html_cntr.type.toLowerCase()=="checkbox")
html_cntr.checked=true;
}
}
};
this.unselectAll=function(cssClass){
if(null==cssClass)cssClass=this.css_row;
var tableNode = this.xmlData.selectSingleNode("//*[@ID='"+ this.tableID +"']");
var x_path= "//tr[@ID and contains(@ID,'r')]";
var collRows=tableNode.selectNodes(x_path);
var cntr;
for(var i=0;i<collRows.length;i++)
{
cntr = document.getElementById(collRows[i].getAttribute("ID"));
if(collRows[i].getAttribute("SELECTED")=="1")
{
this.selectedRow.pop();
collRows[i].removeAttribute("SELECTED");
}
if(cntr)
{
if(this.css_row_odd)
{
if(i%2!=0)
cntr.className=this.css_row_odd;
else
cntr.className=cssClass;
}
else
{
cntr.className=cssClass;
}
collRows[i].setAttribute("CLASS",cntr.className);
var firstCell = IXML.getChildElement(collRows[i],1);
var firstChild = (firstCell)?IXML.getChildElement(firstCell,1):null;
if(firstChild){
var html_cntr = IXML.getChildElement(IXML.getChildElement(document.getElementById(collRows[i].getAttribute("ID")),1),1);
if(html_cntr.type.toLowerCase()=="checkbox")
html_cntr.checked=false;
}
}
}
};
this.is_selected=function(row_id)
{
for(var i=0;i<this.selectedRow.length;i++)
{
if(row_id==this.selectedRow[i])
return true;
}
return false;
};
this.dispose=function(){
this.masterNode=null;
this.xmlData=null;
this.xmlData_deleted=null;
this.data=null;
this.container=null;
};
this.serializeAttributes=function(coll_attributes,bWithoutID){
var i;
var _bWithoutID =(bWithoutID)? bWithoutID:false;
for(i=0;i<coll_attributes.length;i++){
if(coll_attributes[i].nodeName=="ID" && _bWithoutID)continue;
this.XML.Attrib(coll_attributes[i].nodeName,coll_attributes[i].nodeValue);
}
};
this.serializeInnerNodes=function(node){
var i,childNode;
i=1;
var childNodes = node.selectNodes("./*");
if(childNodes.length>0){
childNode = IXML.getChildElement(node,i);
while(childNode){
this.XML.BeginNode(childNode.nodeName);
this.serializeAttributes(childNode.attributes);
this.serializeInnerNodes(childNode);
this.XML.EndNode();
i=i+1;
childNode = IXML.getChildElement(node,i);
};
}
else{
this.XML.WriteString(IXML.getText(node));
};
};
this.search=function(oSeek)
{
try{
var i;
var seekIndex=null;
var collCells =this.masterNode.selectNodes(".//*[@BIND]/*");
for(i=0;i<collCells.length;i++)
{
if(collCells[i].attributes.getNamedItem("BIND"))
{
if(collCells[i].getAttribute("BIND")==oSeek.searchTag)
{
seekIndex=i;break;
}
}
};
if(null!=seekIndex)
{
var searchValue =oSeek.search_value ;
if(searchValue.toLowerCase().indexOf("lag")==0)
searchValue =oSeek.search_value.toUpperCase();
var seekNode =this.xmlData.selectSingleNode("//tr[@BIND]/*[@BIND='" + oSeek.searchTag + "' and text()='" + searchValue + "']");
b_seek=(seekNode!=null);
if(b_seek)
{
var row_id = IXML.getParentElement(seekNode).getAttribute("ID");
var html_rows = this.container.getElementsByTagName("tr");
for(i=0;i<html_rows.length;i++)
{
if(html_rows[i].id==row_id)
{
html_rows[i].scrollIntoView();
html_rows[i].className = this.css_selectedRow;
if(arguments[1])
{
try{eval(arguments[1] + "(" + html_rows[i].id + ")")}catch(e){}
}
return true;
}
}
}
}
return false;
}
catch(e){
return false;
}
};
this.evalEvent = function(evnt)
{
var collEvnts = this.masterNode.selectNodes("descendant-or-self::*[@" + evnt.toUpperCase() + "]");
for(var i=0;i<collEvnts.length;i++)
{
try{
eval(collEvnts[i].getAttribute("ONLOAD"));
}catch(e){}
}
};
this.sort=function(col)
{
this.XML.Reset();
var sortArray = new Array();
var xmlRows = this.xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
var xmlTableNode =this.xmlData.selectSingleNode("//innertable");
var childs = xmlTableNode.selectNodes("./*");
var is_repeated = false;
var sortedRow;
var i;
for(i=0;i<xmlRows.length;i++)
{
sortArray.push(IXML.getChildElement(xmlRows[i],col).getAttribute("VALUE"));
}
if(this.sortingType=="0")
sortArray.sort(this.compareEntryAsc);
else
sortArray.sort(this.compareEntryDesc);
this.XML.BeginNode("ROOT");
this.XML.BeginNode("innertable");
this.serializeAttributes(xmlTableNode.attributes);
for(i=0;i<childs.length;i++)
{
if(childs[i].getAttribute("BIND")==null)
{
this.XML.BeginNode(childs[i].nodeName);
this.serializeAttributes(childs[i].attributes);
this.serializeInnerNodes(childs[i]);
this.XML.EndNode();
}
}
var j=0;
for( i=0;i<sortArray.length;i++)
{
var nodeSet = xmlTableNode.selectNodes("./tr[td[position()='" + col + "']/@VALUE='" + sortArray[i] + "']");
if (nodeSet.length==1) j=0;
sortedRow = nodeSet[j];
this.XML.BeginNode(sortedRow.nodeName);
this.serializeAttributes(sortedRow.attributes);
this.serializeInnerNodes(sortedRow);
this.XML.EndNode();
if (j==nodeSet.length-1)j=0;
else if (nodeSet.length>1) j++;
}
this.XML.EndNode();
this.XML.Close();
var tmpXml=IXML.getDomDocument();
tmpXml = (new DOMParser()).parseFromString(this.XML.ToString(), "text/xml");
this.xmlData = tmpXml;
this.XML.Reset();
};
this.compareEntryAsc=function(a,b)
{
if(a>b) return 1;
if(a<b) return -1;
return 0
};
this.compareEntryDesc=function(a,b)
{
if(a<b) return 1;
if(a>b) return -1;
return 0
};
this.getTypeSort=function(col){
var coll_sorted = this.xmlData.selectNodes("//innertable//*[@SORTING]");
var column_sorted = coll_sorted[col-1];
this.sortingType =column_sorted.getAttribute("SORTING");
if(this.sortingType=="0")
column_sorted.setAttribute("SORTING","1");
else
column_sorted.setAttribute("SORTING","0");
};
this.switchSortingControl=function(col)
{
var coll_sorted = this.xmlData.selectNodes("//innertable//*[@SORTING]");
var column_sorted = coll_sorted[col-1];
var xmlAscControl = column_sorted.selectSingleNode(".//*[contains(@ID,'SORT_ASC')]");
var xmlDescControl = column_sorted.selectSingleNode(".//*[contains(@ID,'SORT_DESC')]");
if(xmlAscControl && xmlDescControl)
{
if(this.sortingType=="0")
{
xmlAscControl.setAttribute("STYLE","display:block");
xmlDescControl.setAttribute("STYLE","display:none")
}
else
{
xmlAscControl.setAttribute("STYLE","display:none");
xmlDescControl.setAttribute("STYLE","display:block")
}
if (xmlAscControl.getAttribute("NAME"))
{
var nodeSet = this.xmlData.selectNodes(".//*[@NAME='" + xmlAscControl.getAttribute("NAME") + "']");
for (var i=0;i< nodeSet.length;i++)
{
if (nodeSet[i].getAttribute("ID")!= xmlAscControl.getAttribute("ID") && nodeSet[i].getAttribute("ID")!= xmlDescControl.getAttribute("ID"))
nodeSet[i].setAttribute("STYLE","display:none")
}
}
}
};
this.exists=function(arr_cellPos,arr_val){
var rowSet = this.xmlData.selectNodes("//tr[@ID and contains(@ID,'r')]");
for (var j=0 ; j<rowSet.length; j++)
{
if(rowSet[j].attributes.getNamedItem("SELECTED"))continue;
var arr_exists = new Array();
var cellXml;
for(var n=0;n<arr_cellPos.length;n++){
cellXml = rowSet[j].selectNodes("./td")[arr_cellPos[n]];
if(IXML.getChildElement(cellXml,1)){
var childCellXml = IXML.getChildElement(cellXml,1);
var data="";
switch (childCellXml.nodeName)
{
case "span":
case "nobr":
data=IXML.getText(childCellXml);
break;
case "input":
data = document.getElementById(rowSet[j].
getAttribute("ID").trim()).getElementsByTagName("td")[arr_cellPos[n]].
getElementsByTagName("input")[0].value;
break;
case "combobox":
data = document.getElementById(rowSet[j].getAttribute("ID").trim()).
getElementsByTagName("td")[arr_cellPos[n]].
getElementsByTagName("select")[0].value;
break;
default:
}
if(data==arr_val[n])
arr_exists.push(true);
}
else{
if(IXML.getText(rowSet[j].selectNodes("./td")[arr_cellPos[n]])==arr_val[n])
arr_exists.push(true);
};
}
if(arr_exists.length==arr_cellPos.length)
return true;
};
return false;
};
this.setDeletedAttribute = function(row)
{
var xml_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(xml_row.getAttribute("DELETED")=="1")
xml_row.removeAttribute("DELETED");
else
{
xml_row.setAttribute("DELETED","1");
if(xml_row.attributes.getNamedItem("UPDATED"))
xml_row.removeAttribute("UPDATED");
}
};
this._getRowSet = function(action)
{
var rowset = null;
if(action==ACTION_SET){
if(this.xmlData.selectNodes("//tr[@ADDED or @UPDATED]").length>0)
return this.xmlData.selectNodes("//tr[@ADDED or @UPDATED]");
}else if(action==ACTION_RESTORE){
if(this.xmlData.selectNodes("//tr[@RESTORED]").length>0)
return this.xmlData.selectNodes("//tr[@RESTORED]");
}else{
if(this.xmlData_deleted){
if(this.xmlData_deleted.selectNodes("//tr").length>0)
return this.xmlData_deleted.selectNodes("//tr");
}
}
return rowset;
};
this.fillNewRowXml = function(objFromRow,objNewRow,action){
var bind,cellXml,data,collCells,arr_data,contextNode;
var collXmlCells = objFromRow.selectNodes("./td");
for(var l=0;l<collXmlCells.length;l++)
{
contextNode=null;
if(collXmlCells[l].attributes.getNamedItem("BIND"))
contextNode = collXmlCells[l];
else
{
var firstChild = IXML.getChildElement(collXmlCells[l],1);
if(firstChild && firstChild.attributes.getNamedItem("BIND")&& null==firstChild.attributes.getNamedItem("ONOBJECTINIT"))
contextNode = firstChild;
}
if(contextNode)
{
bind=(contextNode.attributes.getNamedItem("BIND_POST"))?
contextNode.getAttribute("BIND_POST").trim():
contextNode.getAttribute("BIND").trim();
data = contextNode.getAttribute("VALUE").trim();
collCells =objNewRow.selectNodes(".//" + bind);
if(action==ACTION_SET)
{
if(contextNode.getAttribute("SUBMIT")=="true" || this.is_required(collCells[0]))
{
IXML.setText(collCells[0],data);
Page.setAlteredDataNodes(collCells[0],action);
}
}
else
{
IXML.setText(collCells[0],data);
Page.setAlteredDataNodes(collCells[0],action);
}
}
};
if(this.ifBitmaskType(objFromRow))
{
this.setBitmaskData(objFromRow,objNewRow,action);
}
};
this.unbind = function(arr_col,mode)
{
var xpath;
if(mode==1)
xpath = "//tr[@BIND and contains(@ID,'r')][position()=last()]";
else
xpath = "//tr[@BIND and contains(@ID,'r')and contains(@SELECTED,'1')]";;
var coll = this.xmlData.selectNodes(xpath);
if(coll.length==0)return;
var added_row = coll[0];
var cellNode;
for (var i=0;i<arr_col.length;i++)
{
cellNode=added_row.selectSingleNode("./*[" + arr_col[i]+ "]") ;
cellNode.removeAttribute("BIND");
}
};
this.getCountNewRows = function()
{
var rowset = this.xmlData.documentElement.selectNodes("//tr[@ADDED]");
return (rowset)?rowset.length:0;
};
this.count_selectedrows = function()
{
return this.selectedRow.length;
};
this.is_required = function(dataNode)
{
var tableNodeName = this.bindingTablePath.getLastNodeName();
var contextNode;
if(tableNodeName == this.dataSectionName)
contextNode = this.templateNode.selectSingleNode(".//" + this.bindingRowPath + "/" + dataNode.nodeName);
else
contextNode = this.templateNode.selectSingleNode(".//" + tableNodeName +"/" + this.bindingRowPath + "/" + dataNode.nodeName);
if(contextNode && contextNode.getAttribute("required")=="true")
return true;
else
return false;
};
this._buildDataXmlRows = function(rowset,tableNode,templRowXml,action)
{
var newRowDataXml,firstRow;
var nodeRowName = this.bindingRowPath.getLastNodeName();
for(var j=0;j<rowset.length;j++)
{
if(j==0)
{
newRowDataXml=tableNode.selectNodes("./" + this.bindingRowPath)[0];
firstRow = newRowDataXml;
}
else{
newRowDataXml = IXML.getDomDocument(null,nodeRowName).selectSingleNode("//" + nodeRowName);
IXML.copyChildNodes(templRowXml,newRowDataXml,true);
}
this.fillNewRowXml(rowset[j],newRowDataXml,action);
if(j!=0)
IXML.appendChild(newRowDataXml,IXML.getParentElement(firstRow))
}
Page.setAlteredDataNodes(firstRow,action);
};
this.onobjectsinit = function()
{
try{
var colObjects = this.masterNode.selectNodes(".//*[@ONOBJECTINIT]");
for(var i=0; i<colObjects.length;i++)
{
try{
eval(colObjects[i].getAttribute("ONOBJECTINIT"))
}catch(e){
}
}
}catch(e){}
};
this.onload = function()
{
try{
if(this.masterNode.attributes.getNamedItem("ONLOAD")){
try{
eval(this.masterNode.getAttribute("ONLOAD"));
}catch(e){}
}
}catch(e){}
};
this.getErrorMessage = function(related_id,mode)
{
var name="";
if(related_id)
{
var related_field = (mode==2)?this.xmlData.selectSingleNode(".//*[@ID='" + related_id + "']"):
Page.findNodeByUniqID(related_id);
if(related_field && related_field.attributes.getNamedItem("FIELD_NAME"))
name = related_field.getAttribute("FIELD_NAME");
}
return "Field " + name + " shouldn't be empty";
};
this.validRelatedFields=function()
{
ControlManager.VALIDATION_SUMMERY="";
var selectedRows = this.xmlData.selectNodes("//tr[@SELECTED='1']");
var node,mastercell;
for(i =0;i<this.relatedIDs.length;i++){
node = Page.findNodeByUniqID(this.relatedIDs[i]);
mastercell = this.masterNode.selectSingleNode(".//*[@RELATED_ID='" + this.relatedIDs[i] + "']");
if(null==node)continue;
if(node.attributes.getNamedItem("ID")&& (node.attributes.getNamedItem("VALID_TYPE")|| node.getAttribute("MANDATORY")=="1")){
if(selectedRows.length>1 && (mastercell && mastercell.getAttribute("READONLY")=="true"))continue;
ControlManager.create(node.getAttribute("ID"),
node.getAttribute("BIND"),
node.getAttribute("ENUM"),
node.getAttribute("VALID_TYPE"),
"save",
node.getAttribute("SUBMIT"),
node.getAttribute("FIELD_NAME"),
node.getAttribute("MANDATORY"),
node.getAttribute("MIN_VALUE"),
node.getAttribute("MAX_VALUE"),
node.getAttribute("FILTER"),
node.getAttribute("MSG_ID"));
};
};
if(ControlManager.VALIDATION_SUMMERY!=""){
if(!_IXML_IS_IE)
ControlManager.alert(j);
else
alert(ControlManager.VALIDATION_SUMMERY);
return false;
};
return true
};
this.validRepeatedCtr = function(ctr, node)
{
var oValidator = new Validator();
if (!oValidator.validate(ctr, node.getAttribute("VALID_TYPE"), node.getAttribute("FIELD_NAME"), node.getAttribute("MANDATORY"), node.getAttribute("MIN_VALUE"), node.getAttribute("MAX_VALUE"), node,node,node.getAttribute("MSG_ID")) )
{
alert (oValidator.errMsg );
return false;
}
return true;
};
this.setXmlInnerCtr = function(xmlCtr,val,text)
{
if (xmlCtr==null) return ;
switch(xmlCtr.nodeName)
{
case "td" :
{
IXML.setText(xmlCtr, text);
xmlCtr.setAttribute("VALUE", val);
};
break;
case "nobr" :
case "span" :
case "inputtext" :
{
xmlCtr.setAttribute("VALUE", val);
IXML.setText(xmlCtr, text);
break;
};
case "checkbox" :
{
xmlCtr.setAttribute("VALUE", val);
if(val && val == xmlCtr.getAttribute("CHECKED_VALUE"))
xmlCtr.setAttribute("CHECKED", "true");
else xmlCtr.removeAttribute("CHECKED");
break;
};
case "combobox" :
case "select" :
{
xmlCtr.setAttribute("VALUE", val);
break;
};
} ;
};
this.updateNodeFromRepeatedCtr = function(ctr)
{
try
{
var cell, cellIndex, row, cells, xmlRow, xmlCell, xmlCtr, val, text, bIdEmpty;
bIdEmpty = false;
cell = IXML.getContainer(ctr, 'TD');
row = IXML.getContainer(cell, 'TR');
cells = row.getElementsByTagName('TD');
for (var i = 0; i < cells.length; i ++ )
{
if (cells[i] == cell)
{
index = i;
break;
}
}
xmlRow = this.xmlData.selectSingleNode(".//tr[@ID='" + row.id + "']" );
xmlRow.setAttribute("UPDATED", "1");
xmlCell = xmlRow.selectNodes("./td")[index] ;
var coll = xmlCell.selectNodes("./*");
xmlCtr = coll[0];
for (var i = 0; i < coll.length; i ++ )
{
if (coll[i].getAttribute('BIND') || coll[i].getAttribute('BIND_POST'))
{
xmlCtr = coll[i];
break;
}
};
if (xmlCtr == null) return;
if (ctr.id == null || ctr.id == '')
{
ctr.id = 'WCG' + new Date().valueOf();
xmlCtr.setAttribute("ID", ctr.id );
bIdEmpty = true;
}
val = text = Util.getInputData([ctr.id])[0];
if(bIdEmpty)
{
ctr.id = '';
xmlCtr.removeAttribute("ID");
}
if (!this.validRepeatedCtr(ctr,xmlCtr)) return false;
if (xmlCtr.getAttribute("BIND"))
{
var bind = xmlCtr.getAttribute("BIND").trim();
val = this.getEnumValue((bind) ? bind.getLastNodeName() : "", val);
val = (val) ? val.toString() : "";
};
if(xmlCtr.getAttribute("MANDATORY") == "1" && val == "" )
{
this.message = this.getErrorMessage('The control ', (xmlCtr.nodeName != "td") ? 2 : 1);
alert(this.message);
this.message = "";
return false;
}
xmlCtr.setAttribute("SUBMIT", "true");
this.setXmlInnerCtr(xmlCtr,val,text) ;
return true;
}
catch(e)
{
if (DEBUG)
alert("error occured in RT.prototype.updateCellFromRepeatedCtr " + e.description);
return false;
}
};
};
var RT_MSG1="Need to select row";
var RT_MSG2="Please select an entry";
Class(RT).Extends(BaseTable);
function RT()
{
this.konstructor = function(master)
{
if (arguments.length>1) this.superclass(master,arguments[1] );
else this.superclass(master);
if(this.masterNode.attributes.getNamedItem("MULTIDELETE")){
this.container.onkeydown=function(evt){
evt = (evt) ? evt : ((event) ? event : null);
if (evt) {
this.isMultiDelete = true;
}};
this.container.onkeyup=function(evt){this.isMultiDelete = false};
}
this.relatedIDs = new Array();
this.getRelatedIDs(".//repeatedrow//repeatedcell");
this.setDataTable("./repeatedrow[@BIND]//repeatedcell");
this.buildXmlTable();
RT.activeID = this.tableID;
this.postedXml;
};
this.setDataTable = function(path)
{
if(null==path)path="./repeatedrow[@BIND]//repeatedcell";
var collMasterCells=this.masterNode.selectNodes(path);
var tblNodeName =this.bindingTablePath.getLastNodeName();
var sectionNode =$d("//" + this.dataSectionName);
var rows_path = (this.dataSectionName==tblNodeName)?"//" + tblNodeName + "//" + this.bindingRowPath:
"//" + this.dataSectionName + "//" + tblNodeName + "//" + this.bindingRowPath;
var collDataRows = $dcol(rows_path);
if(null==collDataRows || collDataRows.length==0){
while(this.data && this.data.length>0)this.data.pop();
return;
}
var cellData,arrData;
while(this.data.length>0)this.data.pop();
for(var i=0;i<collDataRows.length;i++)
{
if(arrData)arrData=null;
arrData=new Array();
for (var j = 0;j<collMasterCells.length;j++ )
{
cellData = this.getDataXml(collDataRows[i],j);
arrData.push(cellData.xmlEncode());
}
this.data.push(arrData);
}
};
this.getDataXml = function(rowDataNode,pos)
{
var destinationNode,destinationNodeData;
var str_result="";
var bind = "";
var contextNode = this.masterNode.selectNodes("./repeatedrow[@BIND]//repeatedcell")[pos];
if(contextNode && contextNode.attributes.getNamedItem("BIND"))
bind=contextNode.getAttribute("BIND");
else
{
var firstChild = IXML.getChildElement(contextNode,1);
if(firstChild){
bind=(firstChild.attributes.getNamedItem("BIND"))? firstChild.getAttribute("BIND"):"";
}
else
bind = "";
}
if(bind=="")return "";
try{
destinationNode = rowDataNode.selectSingleNode(".//" + bind);
destinationNodeData = IXML.getText(destinationNode,false);
if(destinationNodeData==null || destinationNodeData=='undefined' )
return "";
else
return destinationNodeData ;
}catch(e){return "";}
};
this.checkRowData = function(obj)
{
var row = IXML.getContainer(obj,"tr");
var selectedRows_xpath = "//tr[@ID and contains(@ID,'r')and @SELECTED='1']";
var selectedRows = this.xmlData.selectNodes(selectedRows_xpath);
if(!obj.checked)
{
var unselectedRow = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
unselectedRow.removeAttribute("SELECTED");
for(var i=0;i<this.selectedRow.length;i++)
{
if(this.selectedRow[i]==row.id)
this.selectedRow.splice(i,1);
}
if(this.selectedRow.length==1)
{
row_htm = document.getElementById(this.selectedRow[0]);
if(row_htm)this.getRowData(row_htm);
}
else
{
this.setRowsCSS();
this.resetRelatedFields(row.id);
}
}
else
{
this.resetRelatedFields(row.id);
this.getRowData(row);
}
};
this.updateEntry=function(arr_Entry,cssClass)
{
if(null==cssClass)cssClass=this.css_selectedRow;
var i;
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1']";
var rowSet = this.xmlData.documentElement.selectNodes(selectRows_xpath);
for(var i=0;i<rowSet.length;i++){
if(this.setRowData(rowSet[i],arr_Entry,"update")=="not-value")
return false;
if(null==rowSet[i].attributes.getNamedItem("ADDED") && null==rowSet[i].attributes.getNamedItem("RESTORED") )
rowSet[i].setAttribute("UPDATED","1");
};
return true;
};
this.addEntry=function(arrData)
{
var selectRows_xpath = "//tr[@ID and contains(@ID,'r')]";
var newRowXml=IXML.getDomDocument(null,'tr').selectSingleNode("//tr");
var attributes;
var rowSet = this.xmlData.selectNodes(selectRows_xpath);
if(rowSet && rowSet.length>0){
attributes=rowSet[rowSet.length-1].attributes;
for(var j=0;j<attributes.length;j++)newRowXml.setAttribute(attributes[j].nodeName,attributes[j].nodeValue);
if(newRowXml.attributes.getNamedItem("UPDATED"))newRowXml.removeAttribute("UPDATED");
if(newRowXml.attributes.getNamedItem("DELETED"))newRowXml.removeAttribute("DELETED");
if(newRowXml.attributes.getNamedItem("SELECTED"))newRowXml.removeAttribute("SELECTED");
if(newRowXml.attributes.getNamedItem("DISPLAY"))newRowXml.removeAttribute("DISPLAY");
IXML.copyChildNodes(rowSet[rowSet.length-1],newRowXml,false);
var newRowId = parseInt(newRowXml.getAttribute("ID").trim().substr(1),10)+1;
var cells = newRowXml.selectNodes("./*");
for(var j=0;j<cells.length;j++)
{
var fChild = IXML.getChildElement(cells[j],1);
if(fChild){
IXML.setText(fChild,"");
fChild.removeAttribute("VALUE");
fChild.removeAttribute("SUBMIT");
if(fChild.attributes.getNamedItem("ID"))
{
var oldID = fChild.getAttribute("ID");
if(oldID.indexOf(this.tableID)!=-1)
{
var nodeName = fChild.nodeName;
var sufix = j.toString().concat("_") + newRowId.toString().concat("_") + this.tableID;
var newID;
switch(nodeName)
{
case "checkbox": newID = "chb_" + sufix;break;
case "inputtext":newID = "txt_" + sufix;break;
case "span": newID = "span_" + sufix;break;
case "combobox":
case "select" : newID = "cmb_" + sufix;break;
case "image":
case "img": newID = "img_" + sufix;break;
}
fChild.setAttribute("ID",newID);
}
}
}
else{
IXML.setText(cells[j],"");
cells[j].removeAttribute("VALUE");
cells[j].removeAttribute("SUBMIT");
}
}
if(this.setRowData(newRowXml,arrData,"add")=="not-value")return false;
newRowXml.setAttribute("ADDED","1");
newRowXml.setAttribute("ID","r" + newRowId + "_" + this.tableID);
IXML.appendChild(newRowXml,this.xmlData.selectSingleNode("//innertable"));
this.cntRows++;
if(this.css_row_odd)
{
if((this.cntRows-1)%2!=0)
newRowXml.setAttribute("CLASS",this.css_row_odd);
else
newRowXml.setAttribute("CLASS",this.css_row);
}
}
else{
while(this.data.length>0)this.data.pop();
this.data.push(arrData);
this.buildXmlTable();
this.setRowsCSS();
var firstrow= this.xmlData.selectNodes(selectRows_xpath)[0];
if(this.setRowData(firstrow,arrData,"add")=="not-value")
{
IXML.getParentElement(firstrow).removeChild(firstrow);
return false;
}
firstrow.setAttribute("ADDED","1");
this.cntRows++;
}
return true;
};
this.deleteEntry=function()
{
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1']";
var rowSet = this.xmlData.selectNodes(selectRows_xpath);
var cellNode,id;
var removedRow,tableNode;
for(var i=0;i<rowSet.length;i++)
{
tableNode = this.xmlData.selectSingleNode("//innertable");
id = rowSet[i].getAttribute("ID").trim();
if(null==rowSet[i].attributes.getNamedItem("ADDED"))
{
removedRow = tableNode.removeChild(rowSet[i]);
this.xmlData_deleted.selectSingleNode("//deletedData").appendChild(removedRow);
}
else
removedRow = tableNode.removeChild(rowSet[i]);
if(this.data[i])this.data.splice(i,1);
if(this.cntRows>0)this.cntRows--;
if(this.selectedRow.length>0 && removedRow)
{
var deleted=false;
for(var k=0;k<this.selectedRow.length&&!deleted;k++)
{
if(this.selectedRow[k]==removedRow.getAttribute("ID"))
{
this.selectedRow.splice(k,1);
deleted=true;
}
}
}
}
if(this.css_row_odd)
this.setRowsCSS();
};
this.updateDeletedEntry = function(arr_Entry,cssClass)
{
var cellNode,id,i,removedRow,removedNode,attributes;
var arr_removedRows = new Array();
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1']";
var rowSet = this.xmlData.selectNodes(selectRows_xpath);
for(var i=0;i<rowSet.length;i++)
{
if(null==this.xmlData_deleted)this.xmlData_deleted=IXML.getDomDocument(null,"deletedData");
id = rowSet[i].getAttribute("ID").trim();
if(null==rowSet[i].attributes.getNamedItem("ADDED"))
{
removedRow=IXML.getDomDocument(null,'tr').selectSingleNode("//tr");
IXML.copyChildNodes(rowSet[i],removedRow);
attributes=rowSet[i].attributes;
for(var j=0;j<attributes.length;j++){
if(attributes[j].nodeName.toUpperCase()=="ID")arr_removedRows.push(attributes[j].nodeValue);
removedRow.setAttribute(attributes[j].nodeName,attributes[j].nodeValue);
}
IXML.appendChild(removedRow,this.xmlData_deleted.selectSingleNode("//deletedData"));
}
}
if(!this.updateEntry(arr_Entry,cssClass))
{
var deleted_node;
if(this.xmlData_deleted.selectSingleNode("//deletedData"))
{
var context;
for(var i=0;i<arr_removedRows.length;i++)
{
context=this.xmlData_deleted.selectSingleNode("//deletedData/tr[@ID='" + arr_removedRows[i] + "']");
if(context)
{
deleted_node = this.xmlData_deleted.selectSingleNode("//deletedData").removeChild(context);
delete deleted_node;
}
}
}
return false;
}
return true;
};
this.send = function()
{
if(PageManager.IS_MOCKUP)return;
this.url=(arguments[0])?arguments[0]:this.url;
this.callback=(arguments[1])?arguments[1]:this.callback;
this.postedXml = this.createPostXml();
var chunk_post;
if(Page.buildPostXml(this.postedXml)){
if(Page.validPostXml(this.postedXml))
{
if(this.isChunkPost(this.postedXml))
{
if(typeof ChunkPost != 'undefined')
{
chunk_post = new ChunkPost(this.postedXml,this,RT.MAX_COUNT_NODES);
chunk_post.start_post();
return;
}
else
{
if(DEBUG=="true")
alert("Core GUI diagnostic:The reference to ChunkPost.js file is missing");
}
}
else
this.post(this.postedXml);
}
else
{
this.get();
}
}
return true;
};
this.isChunkPost = function(xml)
{
var str = IXML.serialize(xml);
if(str.length >= RT.BUFFER_SIZE)return true;
var count_nodes=xml.selectNodes("//" + this.dataSectionName + "//descendant::*").length;
if(count_nodes>=RT.MAX_COUNT_NODES) return true;
return false;
};
this.createPostXml=function()
{
var xml_delete,new_section,section_nodes,action;
var root = IXML.getDomDocument(null,DATAROOT).selectSingleNode("//" + DATAROOT);
root.setAttribute("set","set");
if(Page.dataXml_delete)
{
xml_delete = Page.dataXml_delete.selectSingleNode("//" + this.dataSectionName);
if(xml_delete)
{
xml_delete.setAttribute("action",ACTION_DELETE);
root.appendChild(xml_delete);
root.setAttribute("set","delete");
}
}
section_nodes = $dcol("//" + this.dataSectionName);
for(var i=0;i<section_nodes.length;i++)
{
if(section_nodes[i].attributes.getNamedItem("set"))
{
insert_section = IXML.getDomDocument(null,this.dataSectionName).selectSingleNode("//" + this.dataSectionName);
IXML.copyChildNodes(section_nodes[i],insert_section);
action=(section_nodes[i].attributes.getNamedItem("action"))?action=section_nodes[i].getAttribute("action"):
action=ACTION_SET;
insert_section.setAttribute("action",action) ;
insert_section.setAttribute("set",action) ;
root.setAttribute("set",action) ;
IXML.appendChild(insert_section,root);
}
else
{
section_nodes[i].setAttribute("removed","true");
}
}
var removed_nodes = $dcol("//" + this.dataSectionName + "[@removed]");
if(removed_nodes.length > 0){
var parent = IXML.getParentElement(removed_nodes[0]);
for(var i=0;i<removed_nodes.length;i++){
parent.removeChild(removed_nodes[i]);
}
}
return root;
};
this.save = function()
{
if(PageManager.IS_MOCKUP)return;
var deletedXmlContainer = (Page.dataXml_delete)?Page.dataXml_delete.selectSingleNode("//" + DATAROOT):null;
this.bind(this.xmlData_deleted,deletedXmlContainer,ACTION_DELETE);
this.bind(this.xmlData,Page.dataXml,ACTION_RESTORE);
this.bind(this.xmlData,Page.dataXml,ACTION_SET);
};
this.setRowData = function(rowNode,arrData,mode)
{
var cellsXml = rowNode.selectNodes("./td");
var bUpdate;
for(var i=0;i<cellsXml.length;i++)
{
bUpdate = true;
var value=arrData[i];
if(mode=="update")
{
var is_allow_empty = cellsXml[i].getAttribute("IS_ALLOW_EMPTY");
if(value=="" && this.count_selectedrows()>1 && is_allow_empty!="true")
bUpdate=false;
if(cellsXml[i].getAttribute("READONLY")=="true")continue;
}
var contextNode=null;
if(cellsXml[i].attributes.getNamedItem("BIND"))
{
contextNode = cellsXml[i];
}
else
{
var firstChild=IXML.getChildElement(cellsXml[i],1);
if(firstChild && firstChild.attributes.getNamedItem("BIND")&& null==firstChild.attributes.getNamedItem("ONOBJECTINIT") )
contextNode = firstChild;
}
if(contextNode)
{
var rel_id = (contextNode.attributes.getNamedItem("RELATED_ID"))?
contextNode.getAttribute("RELATED_ID"):contextNode.getAttribute("ID");
var bind=contextNode.getAttribute("BIND").trim();
value = this.getEnumValue((bind)?bind.getLastNodeName():"",arrData[i]);
value = (value)?value.toString():"";
if(contextNode.getAttribute("MANDATORY")=="1" && value=="" && bUpdate)
{
this.message =this.getErrorMessage(rel_id,(contextNode.nodeName!="td")?2:1);
alert(this.message);
this.message = "";
return "not-value";
}
contextNode.setAttribute("SUBMIT","true");
switch(contextNode.nodeName)
{
case "td":if(bUpdate){IXML.setText(contextNode,arrData[i]);
contextNode.setAttribute("VALUE",value);}
break;
case "nobr":
case "span":
case "inputtext": if(bUpdate){contextNode.setAttribute("VALUE",value);
IXML.setText(contextNode,arrData[i]);};
break;
case "checkbox": if(bUpdate){contextNode.setAttribute("VALUE",value);
if(value && value==contextNode.getAttribute("CHECKED_VALUE"))
contextNode.setAttribute("CHECKED","true");
else contextNode.removeAttribute("CHECKED");};break;
case "hidden":
case "combobox":
case "select" : if(bUpdate){contextNode.setAttribute("VALUE",value);};break;
}
}
}
return true;
};
this.dispose = function(){
this.superclass();
this.relatedIDs=null;
this.postedXml = null;
};
this.cancel = function(){
this.konstructor(this.masterNode, this.container.id);
this.transform();
};
this.wait=function(bool)
{
Page.wait(bool);
};
this.get = function()
{
if(PageManager.IS_MOCKUP)return;
var url,callback,sender;
if(null==arguments[0])
{
if(this.url!="")
url=this.url;
else
return;
}
else
url = arguments[0];
if(arguments[1])
this.callback=arguments[1] ;
sender=(arguments[2])?arguments[2]:this;
var cbo = new CallBackObject(sender);
this.OnComplete = this.complete_get;
cbo.DoCallBack(null,url,true,"GET");
this.wait(true);
};
this.complete_get = function(responseText,responseXML)
{
this.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText))
{
var xml = IXML.getDomDocument();
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
if(null==IXML.getChildElement(xml,1))return;
if(xml.documentElement.selectSingleNode("//" + this.dataSectionName)){
var sectionNode_restored = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName + "[@action='restore']");
if(sectionNode_restored){
var removed=Page.dataXml.documentElement.removeChild(sectionNode_restored);
delete removed;
};
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
if(null==sectionNode)
{
Page.createSectionXml(this.dataSectionName,Page.dataXml,"");
sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
}
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + this.dataSectionName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
if(this.callback!=""){
var callback = this.callback;
this.callback = "";
}
this.konstructor(this.masterNode, this.container.id);
this.transform();
this.onobjectsinit();
this.onload();
if(callback)eval(callback);
}
}
}
};
this.OpenPopUp = function(width,height,name,bReplace,modal)
{
if(arguments.length<4) bReplace = false;
if(arguments.length<5) modal = true;
if(name.indexOf("update")!=-1)
if(this.selectedRow==null){alert(RT_MSG2);return;}
var popupSrc;
if($m("//popup[@ID='" + name + "']"))
popupSrc = $m("//popup[@ID='" + name + "']").getAttribute("SRC");
var s="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",top=50,left=50";
PopUpManager.open(popupSrc,name,s,bReplace,modal);
}
};
RT.activeID=null;
RT.collRT = new Array();
RT.callback="";
RT.BUFFER_SIZE = (typeof BUFFER_SIZE!='undefined')?BUFFER_SIZE:50000;
RT.MAX_COUNT_NODES = (typeof MAX_COUNT_NODES!='undefined')?MAX_COUNT_NODES:450;
RT.getRowData=function(obj,tblID)
{
RT.activeID=tblID;
var id=RT.findIndex(RT.activeID);
if(null==id)return;
if(RT.collRT==null)return;
RT.collRT[id][1].getRowData(obj);
};
RT.resetRelatedFields = function(tblID, wind)
{
var _rt = RT.getRTClass(wind);
if(tblID) _rt.activeID=tblID;
var id=_rt.findIndex(_rt.activeID);
if(null==id)return;
var rowSet = _rt.collRT[id][1].xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
if(rowSet.length>0)
{
var xmlRow =_rt.collRT[id][1].xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]")[0];
_rt.collRT[id][1].resetRelatedFields(xmlRow.getAttribute("ID"));
}
};
RT.updateRelatedFields = function(tblID, wind)
{
var _rt = RT.getRTClass(wind);
if (tblID)
_rt.activeID = tblID;
var id = _rt.findIndex(_rt.activeID);
if (null == id)
return;
var selectedRows = _rt.collRT[id][1].xmlData.selectNodes("//tr[@ID and contains(@ID,'r')and @SELECTED='1']");
if (selectedRows.length > 0)
{
if (opener && (wind == null || wind.document == null))
{
var row_path = "//tr[@ID='" + selectedRows[0].getAttribute("ID") + "']";
var collCells = _rt.collRT[id][1].xmlData.selectSingleNode(row_path).selectNodes("./*");
for (var i = 0; i < collCells.length; i ++)
{
if (collCells[i].attributes.getNamedItem("RELATED_ID"))
{
relatedID = collCells[i].getAttribute("RELATED_ID");
data = IXML.getText(collCells[i]);
Util.setControlData(relatedID, data);
}
else
{
var fChild = IXML.getChildElement(collCells[i],1);
if (fChild && fChild.attributes.getNamedItem("RELATED_ID"))
{
relatedID = fChild.getAttribute("RELATED_ID");
switch (fChild.nodeName)
{
case "inputtext":
case "span":
case "nobr":
data=IXML.getText(fChild);
break;
case "combo":
case "select":
case "hidden":
data = fChild.getAttribute("VALUE");
break;
}
Util.setControlData(relatedID, data);
}
}
}
}
else
_rt.collRT[id][1].updateRelatedFields(selectedRows[0].getAttribute("ID"));
}
};
RT.findIndex = function(tblID){
var id=null;
for(var i = 0;i<RT.collRT.length;i++){
if(RT.collRT[i][0]==tblID){
id=i;break;
}
}
return id;
};
RT.count_selectedrows = function(rt_id,wind)
{
var _rt = RT.getRTClass(wind);
var tbl_id = (rt_id)?rt_id:_rt.activeID;
var ind = _rt.findIndex(tbl_id);
return _rt.collRT[ind][1].selectedRow.length;
};
RT.get=function(url){
if(PageManager.IS_MOCKUP)return;
if(url && url!=""){
if(arguments[1])RT.callback = arguments[1];
var cbo = new CallBackObject();
cbo.OnComplete=RT.complete_get;
cbo.DoCallBack(null,url,true,"GET");
RT.wait(true);
}
};
RT.complete_get=function(responseText,responseXml){
Page.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText))
{
var xml = IXML.getDomDocument();
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
if(null==IXML.getChildElement(xml,1))return;
var id = RT.findIndex(RT.activeID);
if(id==null)return;
with(RT){
var apiName =collRT[id][1].dataSectionName;
if(xml.documentElement.selectSingleNode("//" + apiName)){
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + apiName);
if(null==sectionNode)
{
Page.createSectionXml(apiName,Page.dataXml,"");
sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + apiName);
}
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + apiName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + apiName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
collRT[id][1].konstructor(collRT[id][1].masterNode, collRT[id][1].container.id);
collRT[id][1].transform();
collRT[id][1].onobjectsinit();
collRT[id][1].onload();
if(RT.callback!=""){
eval(RT.callback);
RT.callback="";
}
};
};
};
};
};
RT.unbind = function(rt_id,arr_col,mode,wind)
{
var ind = RT.findIndex(rt_id);
var _rt = RT.getRTClass(wind);
_rt.collRT[ind][1].unbind(arr_col,mode);
};
RT.save = function()
{
if(PageManager.IS_MOCKUP)return;
try{
for(var i =0 ;i<RT.collRT.length;i++)
RT.collRT[i][1].save();
return true;
}
catch(e){
if(DEBUG==true)
alert("error occured in RT.save** " + e.description);
return false ;
}
};
RT.sort = function(tblID,col){
RT.activeID=tblID;
var id=RT.findIndex(RT.activeID);
if(null==id)return;
RT.collRT[id][1].getTypeSort(col);
RT.collRT[id][1].sort(col);
RT.collRT[id][1].switchSortingControl(col);
RT.collRT[id][1].setRowsCSS();
RT.collRT[id][1].transform();
};
RT.addEntry=function(wind){
var _rt = RT.getRTClass(wind);
var id = _rt.findIndex(_rt.activeID);
if(id==null)return false;
if(!RT.validRelatedFields(wind))return false;
if(!_rt.collRT[id][1].addEntry(Util.getInputData(_rt.collRT[id][1].relatedIDs)))return false;
if(!_rt.collRT[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)
_rt.collRT[id][1].unselectAll();
_rt.collRT[id][1].transform();
}
return true;
};
RT.restoreEntry = function(obj,tblID,wind)
{
var _rt = RT.getRTClass(wind);
_rt.activeID=tblID;
var id = _rt.findIndex(_rt.activeID);
if(null==id)return false;
_rt.collRT[id][1].restoreEntry(obj);
};
RT.updateEntry=function(wind){
var _rt = RT.getRTClass(wind);
var id = _rt.findIndex(_rt.activeID);
if(null==id)return false;
if(_rt.collRT[id][1].selectedRow.length==0){
if(RT_MSG1)alert(RT_MSG1);
return false;
}
if(!RT.validRelatedFields(wind))return false;
if(!_rt.collRT[id][1].updateEntry(Util.getInputData(_rt.collRT[id][1].relatedIDs))) return false;
if(!_rt.collRT[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)
_rt.collRT[id][1].unselectAll();
_rt.collRT[id][1].transform();
}
return true ;
};
RT.updateDeletedEntry = function(wind)
{
var _rt = RT.getRTClass(wind);
var id = _rt.findIndex(_rt.activeID);
if(null==id)return false;
if(_rt.collRT[id][1].selectedRow.length==0)
{
if(RT_MSG1)alert(RT_MSG1);
return false;
}
if(! RT.validRelatedFields(wind))return false;
if(!_rt.collRT[id][1].updateDeletedEntry(Util.getInputData(_rt.collRT[id][1].relatedIDs)))return false;
if(!_rt.collRT[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)
_rt.collRT[id][1].unselectAll();
_rt.collRT[id][1].transform();
}
return true ;
};
RT.deleteEntry=function(wind){
var _rt = RT.getRTClass(wind);
var id = _rt.findIndex(_rt.activeID);
if(id==null)return;
_rt.collRT[id][1].deleteEntry();
if(!_rt.collRT[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)
_rt.collRT[id][1].unselectAll();
_rt.collRT[id][1].transform();
}
return true;
};
RT.selectAll = function(tbl_id,css_class)
{
var cntr;
var ind = RT.findIndex(tbl_id);
if(ind==null)return;
RT.collRT[ind][1].selectAll(css_class);
};
RT.deselectAll = function(tbl_id)
{
var ind=(tbl_id)?RT.findIndex(tbl_id):RT.findIndex(RT.activeID);
if(ind==null)return;
RT.collRT[ind][1].unselectAll();
};
RT.OpenPopUp = function(width,height,name,tblID,bReplace,modal)
{
if (arguments.length<5) bReplace = false;
if (arguments.length<6) modal = true;
if (null==tblID) tblID = RT.activeID;
var ind = RT.findIndex(tblID);
if(null==ind)return;
if(name.indexOf("update")!=-1)
if(RT.collRT[ind][1].selectedRow==null){alert(RT_MSG2);return;}
var popUPXml = $m("//popup[@ID='" + name + "']");
if(popUPXml){
var s="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",top=50,left=50";
PopUpManager.open(popUPXml.getAttribute("SRC"),name,s,bReplace,modal)
}
};
RT.search = function(oSeek)
{
try{
var seekIndex;
var ind = RT.findIndex(oSeek.relatedID);
var collRepeatedCells =RT.collRT[ind][1].masterNode.selectNodes(".//repeatedcell");
for(var i=0;i<collRepeatedCells.length;i++)
{
if(collRepeatedCells[i].attributes.getNamedItem("BIND"))
{
if(collRepeatedCells[i].getAttribute("BIND")==oSeek.searchTag)
{
seekIndex=i;break;
}
}
};
if(seekIndex)
{
var seekNode =RT.collRT[ind][1].xmlData.selectSingleNode("//tr[@BIND]/*[@BIND='" + oSeek.searchTag + "' and text()='" + oSeek.search_value + "']");
b_seek=(seekNode!=null);
if(b_seek)
{
var row_id = IXML.getParentElement(seekNode).getAttribute("ID");
var html_rows = RT.collRT[ind][1].container.getElementsByTagName("tr");
for(var i=0;i<html_rows.length;i++)
{
if(html_rows[i].id==row_id)
{
html_rows[i].scrollIntoView();
html_rows[i].className = RT.collRT[ind][1].css_selectedRow;
if(arguments[1])
{
try{eval(arguments[1] + "(" + html_rows[i].id + ")")}catch(e){}
}
return true;
}
}
}
}
return false;
}
catch(e){
return false;
}
};
RT.exists = function(arr_cellPos,arr_ids,msg,wind){
var _rt = RT.getRTClass(wind);
var id = _rt.findIndex(_rt.activeID);
if(null==id)return;
if(_rt.collRT[id][1].exists(arguments[0],Util.getInputData(arguments[1])))
{
if(arguments[2])
alert(arguments[2]);
return true;
}
return false;
};
RT.send = function(url,callBack,wind)
{
if(PageManager.IS_MOCKUP)return;
var _rt = RT.getRTClass(wind);
var id = _rt.findIndex(_rt.activeID);
if(null==id)return;
var arg0 =(arguments[0])?arguments[0]:null;
var arg1 =(arguments[1])?arguments[1]:null;
_rt.collRT[id][1].send(arg0,arg1);
};
RT.cancel = function()
{
var ind = RT.findIndex(RT.activeID);
if(null==ind)return;
RT.collRT[ind][1].cancel();
};
RT.validRelatedFields=function(wind)
{
var _rt = RT.getRTClass(wind);
var id = _rt.findIndex(_rt.activeID);
if(null==id)return;
ControlManager.VALIDATION_SUMMERY="";
var selectedRows = _rt.collRT[id][1].xmlData.selectNodes("//tr[@SELECTED='1']");
var node,mastercell;
var j=0;
for(var i =0;i<_rt.collRT[id][1].relatedIDs.length;i++){
node = Page.findNodeByUniqID(_rt.collRT[id][1].relatedIDs[i]);
if(null==node)continue;
mastercell = _rt.collRT[id][1].masterNode.selectSingleNode(".//*[@RELATED_ID='" + _rt.collRT[id][1].relatedIDs[i] + "']");
if(node.attributes.getNamedItem("ID")&& (node.attributes.getNamedItem("VALID_TYPE")|| node.getAttribute("MANDATORY")=="1")){
if(selectedRows.length>1 && (mastercell && mastercell.getAttribute("READONLY")=="true"))continue;
j++ ;
ControlManager.create(node.getAttribute("ID"),
node.getAttribute("BIND"),
node.getAttribute("ENUM"),
node.getAttribute("VALID_TYPE"),
"save",
node.getAttribute("SUBMIT"),
node.getAttribute("FIELD_NAME"),
node.getAttribute("MANDATORY"),
node.getAttribute("MIN_VALUE"),
node.getAttribute("MAX_VALUE"),
node.getAttribute("FILTER"),
node.getAttribute("MSG_ID"));
};
};
if(ControlManager.VALIDATION_SUMMERY!=""){
if(!_IXML_IS_IE)
ControlManager.alert(j);
else
alert(ControlManager.VALIDATION_SUMMERY);
return false;
};
return true;
};
RT.wait = function(bool)
{
Page.wait(bool);
};
RT.getRTClass = function(wind)
{
var _rt = null;
if ((wind==null) || (wind && wind.document==null))
{
_rt =(opener)?opener.window.RT:window.RT;
}
else
{
_rt = wind.RT;
}
return _rt;
}
Class(PT).Extends(BaseTable);
PT.LAGNAME_PREFIX=(typeof LAGNAME_PREFIX!='undefined')?LAGNAME_PREFIX:"LAG";
function PT()
{
this.konstructor=function(master){
if(arguments.length>1)this.superclass(master,arguments[1]);
else this.superclass(master);
this.portsDataSource=oPolling.portsDataXml;
this.show_all = (this.masterNode.attributes.getNamedItem("SHOW_ALL"))?this.masterNode.getAttribute("SHOW_ALL"):"false";
this.show_lags = (this.masterNode.attributes.getNamedItem("SHOW_LAGS"))?this.masterNode.getAttribute("SHOW_LAGS"):"false";
this.relatedIDs = new Array();
this.binded_rows = new Array();
this.get_keys();
this.getRelatedIDs(".//portrow//portcell");
this.final_get="" ;
this.bLagsOnly=(this.masterNode.attributes.getNamedItem("LAGS_ONLY"))?this.masterNode.getAttribute("LAGS_ONLY"):"false";
this.bLagsOnly = (this.bLagsOnly=="true")?true:false;
};
this.getData = function()
{
this.setDataTable(".//portrow/portcell");
this.buildXmlTable();
};
this.show = function()
{
this.transform();
};
this.get_keys = function()
{
this.key_data_tag = this.masterNode.selectSingleNode(".//portcell[@KEY='true']").getAttribute("BIND");
this.key_port_tag = this.masterNode.selectSingleNode(".//portcell[@KEY='true']").getAttribute("PORT_BIND");
};
this.setDataTable = function(path)
{
if(null==path)path=".//portrow/portcell";
var collMasterCells=this.masterNode.selectNodes(path);
var collPorts;
var collLags;
var b_lagsonly = false;
if(oPolling.currentUnit=="1000")
{
collLags = new Array();
this.getCollectionLags(collLags);
if(oPolling.currentUnit=="1000")b_lagsonly = true;
}
else
{
if(true==this.bLagsOnly)
{
collLags = new Array();
this.getCollectionLags(collLags);
}
else
{
if(this.show_lags=="true")
{
collLags = new Array();
this.getCollectionLags(collLags);
}
collPorts = (this.show_all=="true")?oPolling.portsDataXml.selectNodes("//port"):
oPolling.getCollectionPortsPerUnit(oPolling.currentUnit);
}
}
var tblNodeName =this.bindingTablePath.getLastNodeName();
var sectionNode =$d("//" + this.dataSectionName);
var rows_path=(this.dataSectionName==tblNodeName)?"//" + tblNodeName + "//" + this.bindingRowPath:
"//" + this.dataSectionName + "//" + tblNodeName + "//" + this.bindingRowPath;
var collDataRows = $dcol(rows_path);
while(this.data && this.data.length>0)this.data.pop();
while(this.binded_rows && this.binded_rows.length>0)this.binded_rows.pop();
var j,port_bind,bind,rowData,key_val,val;
for(var i=0; collPorts && i<collPorts.length;i++)
{
rowData = [];
this.binded_rows.push(false);
key_val = IXML.getText(collPorts[i].selectSingleNode("./" + this.key_port_tag));
for(j=0;j<collMasterCells.length;j++)
{
port_bind = collMasterCells[j].getAttribute("PORT_BIND");
bind = collMasterCells[j].getAttribute("BIND");
val = (port_bind)?IXML.getText(collPorts[i].selectSingleNode(port_bind)):
(bind)?this.getPortDataXml(bind,key_val,i):"";
rowData.push(val.xmlEncode());
}
this.data.push(rowData);
}
if((collPorts && this.show_lags=="true") || b_lagsonly || this.bLagsOnly)
{
var ind=(b_lagsonly || this.bLagsOnly)?0:i;
var count = (b_lagsonly || this.bLagsOnly)?collLags.length : ind + parseInt(oPolling.NumberOfTrunks);
for(i=0; i<collLags.length;i++)
{
rowData = [];
this.binded_rows.push(false);
key_val = collLags[i][1];
for(j=0;j<collMasterCells.length;j++)
{
bind = collMasterCells[j].getAttribute("BIND");
port_bind = collMasterCells[j].getAttribute("PORT_BIND");
val = (port_bind)?key_val:(bind)?this.getPortDataXml(bind,key_val,ind):"";
rowData.push(val.xmlEncode());
}
this.data.push(rowData);
ind++;
}
}
};
this.getCollectionLags = function(arr)
{
var id;
for(var i=0;i<oPolling.NumberOfTrunks;i++)
{
id = parseInt(i+1);
arr.push([id,PT.LAGNAME_PREFIX + id]);
}
};
this.getPortDataXml = function(bind,key_val,pos)
{
var xpath_row = "//" + this.bindingTablePath + "/" + this.bindingRowPath + "[" + this.key_data_tag + "/text()='"+ key_val + "']";
var contextRow = $d(xpath_row);
if(null == contextRow) return "";
var contextData = IXML.getText(contextRow.selectSingleNode(".//" + bind));
this.binded_rows[pos]=true;
return contextData;
};
this.buildXmlRow=function(row)
{
var i;
if(this.css_row_odd){
row.removeAttribute("CLASS_ODD");
row.removeAttribute("CLASS");
}
var rtCells = row.selectNodes("./*");
for(i=0;i<this.data.length;i++)
{
this.XML.BeginNode("tr");
this.serializeAttributes(row.attributes);
if(this.css_row_odd){
if(i%2!=0)
this.XML.Attrib("CLASS",this.css_row_odd );
else
this.XML.Attrib("CLASS",this.css_row );
}
this.XML.Attrib("ID","r" + i + "_" + this.tableID);
if(this.selectedRow[i] && this.selectedRow[i]==true)
this.XML.Attrib("SELECTED","1");
if(this.binded_rows[i])
this.XML.Attrib("BINDED","" + this.binded_rows[i]) ;
this.buildXmlCell(i,rtCells);
this.XML.EndNode();
if(this.cntRows!=null)this.cntRows++;
}
};
this.restoreEntry = function(obj)
{
var row = IXML.getContainer(obj,"tr");
var restored_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(restored_row.getAttribute("RESTORED")=="1")
restored_row.removeAttribute("RESTORED");
else
{
restored_row.setAttribute("RESTORED","1");
if(restored_row.attributes.getNamedItem("UPDATED"))
restored_row.removeAttribute("UPDATED");
}
};
this.deleteEntry=function()
{
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1' and @BINDED]";
var rowSet = this.xmlData.selectNodes(selectRows_xpath);
var removedRow,tableNode,id;
for(var i=0;i<rowSet.length;i++)
{
tableNode = this.xmlData.selectSingleNode("//innertable");
id = rowSet[i].getAttribute("ID").trim();
removedRow = tableNode.removeChild(rowSet[i]);
if(null==rowSet[i].attributes.getNamedItem("ADDED"))
this.xmlData_deleted.selectSingleNode("//deletedData").appendChild(removedRow);
if(this.data[i])this.data.splice(i,1);
if(this.cntRows>0)this.cntRows--;
if(this.selectedRow.length>0 && removedRow)
{
var deleted=false;
for(var k=0;k<this.selectedRow.length&&!deleted;k++)
{
if(this.selectedRow[k]==removedRow.getAttribute("ID"))
{
this.selectedRow.splice(k,1);
deleted=true;
}
}
}
}
if(this.css_row_odd)
this.setRowsCSS();
};
this.updateDeletedEntry = function(arr_Entry,cssClass)
{
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1' and @BINDED]";
var rowSet = this.xmlData.selectNodes(selectRows_xpath);
var removedRow,attributes,ableNode,id;
for(var i=0;i<rowSet.length;i++)
{
if(null==this.xmlData_deleted)
this.xmlData_deleted=IXML.getDomDocument(null,"deletedData");
tableNode = this.xmlData.selectSingleNode("//innertable");
id = rowSet[i].getAttribute("ID").trim();
if(null==rowSet[i].attributes.getNamedItem("ADDED"))
{
removedRow=IXML.getDomDocument(null,'tr').selectSingleNode("//tr");
IXML.copyChildNodes(rowSet[i],removedRow);
attributes=rowSet[i].attributes;
for(var j=0;j<attributes.length;j++)
removedRow.setAttribute(attributes[j].nodeName,attributes[j].nodeValue);
this.xmlData_deleted.selectSingleNode("//deletedData").appendChild(removedRow);
}
else
{
removedRow = tableNode.removeChild(rowSet[i]);
if(this.data[i])this.data.splice(i,1);
if(this.cntRows>0)this.cntRows--;
if(this.selectedRow.length>0 && removedRow)
{
var deleted=false;
for(var k=0;k<this.selectedRow.length&&!deleted;k++)
{
if(this.selectedRow[k]==removedRow.getAttribute("ID"))
{
this.selectedRow.splice(k,1);
deleted=true;
}
}
}
removedRow=null;
}
}
this.updateEntry(arr_Entry,cssClass);
};
this.updateEntry=function(arr_Entry,cssClass)
{
if(null==cssClass)cssClass=this.css_selectedRow;
var i;
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1']";
var rowSet = this.xmlData.documentElement.selectNodes(selectRows_xpath);
for(i=0;i<rowSet.length;i++){
if(rowSet[i].attributes.getNamedItem("BINDED"))
{
if(this.setRowData(rowSet[i],arr_Entry,"update")=="not-value")
return false;
}
else
{
if(this.setRowData(rowSet[i],arr_Entry,"add")=="not-value")
return false;
else
rowSet[i].setAttribute("ADDED","1")
}
var _added =rowSet[i].attributes.getNamedItem("ADDED");
var _restored = rowSet[i].attributes.getNamedItem("RESTORED");
var _deleted = rowSet[i].attributes.getNamedItem("DELETED");
var _binded = rowSet[i].attributes.getNamedItem("BINDED");
if(null==_added && null==_restored && null==_deleted && _binded )
rowSet[i].setAttribute("UPDATED","1");
};
return true;
};
this.setRowData = function(rowNode,arrData,mode)
{
var cellsXml = rowNode.selectNodes("./td");
var bUpdate;
for(var i=0;i<cellsXml.length;i++)
{
bUpdate = true;
var value=arrData[i];
if(cellsXml[i].attributes.getNamedItem("PORT_BIND"))
bUpdate=false;
if(mode=="update")
{
var is_allow_empty = cellsXml[i].getAttribute("IS_ALLOW_EMPTY");
if(value=="" && this.count_selectedrows()>1 && is_allow_empty!="true")
bUpdate=false;
if(cellsXml[i].getAttribute("READONLY")=="true")continue;
}
var contextNode=null;
if(cellsXml[i].attributes.getNamedItem("BIND"))
{
contextNode = cellsXml[i];
}
else
{
var firstChild=IXML.getChildElement(cellsXml[i],1);
if(firstChild && firstChild.attributes.getNamedItem("BIND")&& null==firstChild.attributes.getNamedItem("ONOBJECTINIT") )
contextNode = firstChild;
}
if(contextNode)
{
var rel_id = (contextNode.attributes.getNamedItem("RELATED_ID"))?
contextNode.getAttribute("RELATED_ID"):contextNode.getAttribute("ID");
var bind=contextNode.getAttribute("BIND").trim();
value = this.getEnumValue((bind)? bind.getLastNodeName():"",arrData[i]);
value = (value) ? value.toString() : "";
if(contextNode.getAttribute("MANDATORY")=="1" && value=="" && bUpdate)
{
this.message =this.getErrorMessage(rel_id,(contextNode.nodeName!="td")?2:1);
alert(this.message);
this.message = "";
return "not-value";
}
contextNode.setAttribute("SUBMIT","true");
switch(contextNode.nodeName)
{
case "td":if(bUpdate){IXML.setText(contextNode,arrData[i]);
contextNode.setAttribute("VALUE",value);}
break;
case "nobr":
case "span":
case "inputtext": if(bUpdate){contextNode.setAttribute("VALUE",value);
IXML.setText(contextNode,arrData[i]);};
break;
case "checkbox": if(bUpdate){contextNode.setAttribute("VALUE",value);
if(value && value==contextNode.getAttribute("CHECKED_VALUE"))
contextNode.setAttribute("CHECKED","true");
else contextNode.removeAttribute("CHECKED");};break;
case "combobox":
case "select" : if(bUpdate){contextNode.setAttribute("VALUE",value);};break;
}
}
}
return true;
};
this.save = function()
{
if(PageManager.IS_MOCKUP)return;
var deletedXmlContainer = (Page.dataXml_delete)?Page.dataXml_delete.selectSingleNode("//" + DATAROOT):null;
this.bind(this.xmlData_deleted,deletedXmlContainer,ACTION_DELETE);
this.bind(this.xmlData,Page.dataXml,ACTION_RESTORE);
this.bind(this.xmlData,Page.dataXml,ACTION_SET);
};
this.complete_get = function(responseText,responseXML)
{
Page.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText)){
var xml = IXML.getDomDocument();
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
if(null==IXML.getChildElement(xml,1))return;
if(xml.documentElement.selectSingleNode("//" + this.dataSectionName)){
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
if(sectionNode) {
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + this.dataSectionName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
var _final=null;
if(this.final_get!=""){
_final = this.final_get;
this.final_get = "";
}
this.konstructor(this.masterNode, this.container.id);
this.getData();
this.show();
this.onobjectsinit();
this.onload();
if(_final)eval(_final);
}
}
}
}
};
this.OpenPopUp = function(width,height,name,tblID,bReplace,modal)
{
if (arguments.length<5) bReplace = false;
if (arguments.length<6) modal = true;
if(name.indexOf("update")!=-1)
if(this.selectedRow==null){alert(PT_MSG2);return;}
var popupXml=$m("//popup[@ID='" + name + "']");
if(popupXml){
var s="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",top=50,left=50";
PopUpManager.open(popupXml.getAttribute("SRC"),name,s,bReplace,modal);
};
};
this.cancel = function(){
this.konstructor(this.masterNode, this.container.id);
this.getData();
this.show();
};
this.dispose = function(){
this.superclass();
this.relatedIDs=null;
this.binded_rows = null;
this.show_lags = null;
this.show_all = null;
this.key_data_tag = null;
this.key_port_tag = null;
};
};
PT.activeID=null;
PT.coll = new Array();
PT.callback="";
PT.getRowData=function(obj,tblID)
{
PT.activeID=tblID;
var id=PT.findIndex(PT.activeID);
if(null==id)return;
if(PT.coll==null)return;
var row = IXML.getContainer(obj,"tr");
if(PT.coll[id][1].is_selected(row.id))
{
PT.coll[id][1].unselectRow(row);
if(PT.count_selectedrows(tblID)==1)
PT.updateRelatedFields(tblID);
else
PT.resetRelatedFields(tblID);
}
else
{
PT.coll[id][1].getRowData(row);
if(PT.count_selectedrows(tblID)>1)
PT.resetRelatedFields(tblID);
}
PT.coll[id][1].setRowsCSS();
};
PT.findIndex = function(tblID){
var id=null;
for(var i = 0;i<PT.coll.length;i++){
if(PT.coll[i][0]==tblID){
id=i;break;
}
}
return id;
};
PT.count_selectedrows = function(pt_id)
{
var _pt = window.PT;
if(opener){
_pt = opener.window.PT;
}
var tbl_id = (pt_id)?pt_id:_pt.activeID;
var ind = _pt.findIndex(tbl_id);
return _pt.coll[ind][1].selectedRow.length;
};
PT.updateRelatedFields=function(tblID)
{
var _pt = window.PT;
var id;
if(opener){
_pt = opener.window.PT;
}
if(tblID)
_pt.activeID=tblID;
id = _pt.findIndex(_pt.activeID);
if(null==id)return;
var selectedRows_xpath = "//tr[@ID and contains(@ID,'r')and @SELECTED='1']";
var selectedRows = _pt.coll[id][1].xmlData.selectNodes(selectedRows_xpath);
if(selectedRows.length>0)
{
if(opener)
{
var row_path = "//tr[@ID='" + selectedRows[0].getAttribute("ID") + "']";
var collCells = _pt.coll[id][1].xmlData.selectSingleNode(row_path).selectNodes("./*");
for(i=0;i<collCells.length;i++)
{
if(collCells[i].attributes.getNamedItem("RELATED_ID") &&
collCells[i].getAttribute("RELATED_ID")!=""){
relatedID=collCells[i].getAttribute("RELATED_ID");
if(collCells[i].firstChild)
bool=(collCells[i].firstChild.nodeType==1)?true:false;
data = IXML.getText(collCells[i],bool);
Util.setControlData(relatedID,data);
};
};
}
else
_pt.coll[id][1].updateRelatedFields();
}
};
PT.resetRelatedFields = function(tblID)
{
var _pt = window.PT;
if(opener)_pt = opener.window.PT;
if(tblID) _pt.activeID=tblID;
var id=_pt.findIndex(_pt.activeID);
if(null==id)return;
var rowSet = _pt.coll[id][1].xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
if(rowSet.length>0)
{
var xmlRow =_pt.coll[id][1].xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]")[0];
_pt.coll[id][1].resetRelatedFields(xmlRow.getAttribute("ID"));
}
};
PT.updateEntry=function(tblID){
var _pt = (opener)?opener.window.PT:window.PT;
var id = _pt.findIndex((tblID)?tblID:_pt.activeID);
if(null==id)return false;
if(_pt.coll[id][1].selectedRow.length==0){
if(PT_MSG1)alert(PT_MSG1);
return false;
}
if(!PT.validRelatedFields())return false;
if(! _pt.coll[id][1].updateEntry(Util.getInputData(_pt.coll[id][1].relatedIDs))) return false;
if(!_pt.coll[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)_pt.coll[id][1].unselectAll();
_pt.coll[id][1].transform();
}
return true ;
};
PT.updateDeletedEntry = function()
{
var _pt=(opener)?opener.window.PT:window.PT;
var id = _pt.findIndex(_pt.activeID);
if(null==id)return false;
if( _pt.coll[id][1].selectedRow.length==0){
if(PT_MSG1)alert(PT_MSG1);
return false;
}
if(!PT.validRelatedFields())return false;
if(!_pt.coll[id][1].updateDeletedEntry(Util.getInputData(_pt.coll[id][1].relatedIDs)))return false;
if(!_pt.coll[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)_pt.coll[id][1].unselectAll();
_pt.coll[id][1].transform();
}
return true ;
};
PT.deleteEntry=function()
{
var _pt = (opener)?opener.window.PT:window.PT;
var id = _pt.findIndex(_pt.activeID);
if(id==null)return;
_pt.coll[id][1].deleteEntry();
if(!_pt.coll[id][1].automatic_save || PageManager.IS_MOCKUP)_pt.coll[id][1].transform();
return true;
};
PT.restoreEntry = function(obj,tblID)
{
var _pt =(opener)?opener.window.PT:window.PT;
_pt.activeID=tblID;
var id = _pt.findIndex(_pt.activeID);
if(null==id)return false;
_pt.coll[id][1].restoreEntry(obj);
return true;
};
PT.unbind = function(pt_id,arr_col,mode)
{
var ind = PT.findIndex(pt_id);
var _pt = (opener)?opener.window.PT:window.PT;
_pt.coll[ind][1].unbind(arr_col,mode);
};
PT.OpenPopUp = function(width,height,name,tblID,bReplace,modal)
{
if (arguments.length<5) bReplace = false;
if (arguments.length<6) modal = true;
if (null==tblID) tblID = PT.activeID;
var ind = PT.findIndex(tblID);
if(null==ind)return;
if(name.indexOf("update")!=-1)
if(PT.coll[ind][1].selectedRow==null){alert(RT_MSG2);return;}
var popupSrc;
if($m("//popup[@ID='" + name + "']")){
popupSrc = $m("//popup[@ID='" + name + "']").getAttribute("SRC");
};
var s="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",top=50,left=50";
PopUpManager.open(popupSrc,name,s,bReplace,modal);
};
PT.save = function()
{
if(PageManager.IS_MOCKUP)return;
try{
for(var i =0 ;i<PT.coll.length;i++)
PT.coll[i][1].save();
return true;
}
catch(e){
if(DEBUG==true)
alert("error occured in PT.save** " + e.description);
return false ;
}
};
PT.search = function(oSeek)
{
try{
var seekIndex;
var ind = PT.findIndex(oSeek.relatedID);
var collRepeatedCells =PT.coll[ind][1].masterNode.selectNodes(".//portcell");
for(var i=0;i<collRepeatedCells.length;i++)
{
if(collRepeatedCells[i].attributes.getNamedItem("BIND"))
{
if(collRepeatedCells[i].getAttribute("BIND")==oSeek.searchTag)
{
seekIndex=i;break;
}
}
};
if(seekIndex)
{
var seekNode =PT.coll[ind][1].xmlData.selectSingleNode("//tr[@BIND]/*[@BIND='" + oSeek.searchTag + "' and text()='" + oSeek.search_value + "']");
b_seek=(seekNode!=null);
if(b_seek)
{
var row_id = IXML.getParentElement(seekNode).getAttribute("ID");
var html_rows = PT.coll[ind][1].container.getElementsByTagName("tr");
for(i=0;i<html_rows.length;i++)
{
if(html_rows[i].id==row_id)
{
html_rows[i].scrollIntoView();
html_rows[i].className = PT.coll[ind][1].css_selectedRow;
if(arguments[1])
{
try{eval(arguments[1] + "(" + html_rows[i].id + ")");}catch(e){}
}
return true;
}
}
}
}
return false;
}
catch(e){
return false;
}
};
PT.sort = function(tblID,col){
PT.activeID=tblID;
var id=PT.findIndex(PT.activeID);
if(null==id)return;
PT.coll[id][1].getTypeSort(col);
PT.coll[id][1].sort(col);
PT.coll[id][1].switchSortingControl(col);
PT.coll[id][1].setRowsCSS();
PT.coll[id][1].transform();
};
PT.selectAll = function(tbl_id,css_class)
{
var cntr;
var ind = PT.findIndex(tbl_id);
if(ind==null)return;
PT.coll[ind][1].selectAll(css_class);
};
PT.deselectAll = function(tbl_id)
{
var ind;
if(tbl_id)
ind = PT.findIndex(tbl_id);
else
ind = PT.findIndex(PT.activeID);
if(ind==null)return;
PT.coll[ind][1].unselectAll();
};
PT.exists = function(){
var _pt =(opener)?opener.window.PT:window.PT;
var id = _pt.findIndex(_pt.activeID);
if(null==id)return;
if(_pt.coll[id][1].exists(arguments[0],Util.getInputData(arguments[1])))
{
if(arguments[2])
alert(arguments[2]);
return true;
}
return false;
};
this.OnComplete = function(responseText,responseXML){};
PT.get=function(url){
if(PageManager.IS_MOCKUP)return;
var _pt =(opener)?opener.window.PT:window.PT;
var id = _pt.findIndex(_pt.activeID);
if(url && url!=""){
if(arguments[1])
_pt.coll[id][1].callback = arguments[1];
_pt.coll[id][1].get(url,_pt.coll[id][1].complete_get,
(arguments[2])?arguments[2]:_pt.coll[id][1]);
Page.wait(true);
}
};
PT.cancel = function()
{
var ind = PT.findIndex(PT.activeID);
if(null==ind)return;
PT.coll[ind][1].cancel();
};
PT.validRelatedFields=function()
{
var _pt = window.PT;
if(opener){
_pt = opener.window.PT;
}
var id = _pt.findIndex(_pt.activeID);
if(null==id)return;
ControlManager.VALIDATION_SUMMERY="";
var selectedRows = _pt.collPT[id][1].xmlData.selectNodes("//tr[@SELECTED='1']");
var node,mastercell;
for(i =0;i<_pt.collPT[id][1].relatedIDs.length;i++){
node = Page.findNodeByUniqID(_pt.collPT[id][1].relatedIDs[i]);
if(null==node)continue;
mastercell = _pt.collPT[id][1].masterNode.selectSingleNode(".//*[@RELATED_ID='" + _pt.collPT[id][1].relatedIDs[i] + "']");
if(node.attributes.getNamedItem("ID")&& (node.attributes.getNamedItem("VALID_TYPE")|| node.getAttribute("MANDATORY")=="1")){
if(selectedRows.length>1 && (mastercell && mastercell.getAttribute("READONLY")=="true"))continue;
ControlManager.create(node.getAttribute("ID"),
node.getAttribute("BIND"),
node.getAttribute("ENUM"),
node.getAttribute("VALID_TYPE"),
"save",
node.getAttribute("SUBMIT"),
node.getAttribute("FIELD_NAME"),
node.getAttribute("MANDATORY"),
node.getAttribute("MIN_VALUE"),
node.getAttribute("MAX_VALUE"),
node.getAttribute("FILTER"),
node.getAttribute("MSG_ID"));
};
};
if(ControlManager.VALIDATION_SUMMERY!=""){
if(!_IXML_IS_IE)
ControlManager.alert(j);
else
alert(ControlManager.VALIDATION_SUMMERY);
return false;
};
return true;
};
Class(portList);
function portList (id)
{
var getIndexInArray = function(arr,item){
if (arr==null || arr.length==0 ) return -1;
for (var i=0; i<arr.length;i++ ){
if (arr[i]==item)
return i;
};
return -1;
};
var parseRange = function(range, preffix,scope){
var firstIndex = range.substr(0, range.indexOf("-"));
var lastIndex = range.substr(range.indexOf("-") + 1);
firstIndex = eval (firstIndex * 1);
lastIndex = eval (lastIndex * 1);
for (var i = firstIndex; i <= lastIndex; i ++ ){
scope.interfaceArr.push(preffix + i);
}
};
this.konstructor = function(id,bind){
this.xpath="";
this.dataNode=null;
this.interfaceString="";
this.interfaceArr=[];
this.interfaceArrSet=[];
this.interfaceArrDeleted=[];
this.dataSectionName="";
this.delimeter=",";
this.url="";
if(id){
this.masterNode = Page.findNodeByUniqID(id);
attributes = this.masterNode.attributes;
this.id = id;
this.xpath = (attributes.getNamedItem("BIND"))?this.masterNode.getAttribute("BIND"):"";
}
if (bind)this.xpath = bind;
if(this.xpath!=""){
this.dataNode = $d(".//" + this.xpath);
this.setSectionName();
if (this.dataNode)
this.initInterfaceArr();
}
}
this.setSectionName=function(name){
if (name)
{
this.dataSectionName=name; return;
}
if(this.xpath=="")return;
this.dataSectionName =(this.xpath.search("/")!=-1)?
this.xpath.substr(0,this.xpath.indexOf("/")):
this.xpath;
};
this.setXpath=function(path){this.xpath=path;};
this.set_dataNode=function(node){
this.dataNode=node;
}
this.dispose = function()
{
this.interfaceArr = null;
this.interfaceArrSet = null;
this.interfaceArrDeleted = null;
this.dataNode = null;
}
this.get=function(url,callback,sender){
this.wait(true);
if(url)this.url=url.trim();
var cbo = new CallBackObject(sender);
if(sender && callback ){
if(typeof(callback)== "string")
this.OnComplete = eval(callback);
else
this.OnComplete = callback;
}else if(callback!=null){
if(typeof(callback)== "string")
cbo.OnComplete = eval(callback);
else
cbo.OnComplete = callback;
}else{
this.OnComplete = this.complete_get;
}
if (url==null || url=="" ){
url = "wcd?{" + this.dataSectionName + "}";
this.url = url;
}
cbo.DoCallBack(null,this.url,true,"GET");
};
this.OnComplete=function(responseText, responseXML){};
this.complete_get=function(responseText, responseXML){
this.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText)){
var xml = IXML.getDomDocument();
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
if(!IXML.hasChildElements(xml))return;
if(xml.documentElement.selectSingleNode("//" + this.dataSectionName)){
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
if(sectionNode){
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + this.dataSectionName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
this.konstructor(this.id,this.xpath);
}
if (!Page.dataXml_delete || !Page.dataXml_delete.documentElement ) return;
sectionNode = Page.dataXml_delete.documentElement.selectSingleNode("//" + this.dataSectionName);
if (sectionNode) {delete IXML.getParentElement(sectionNode).removeChild(sectionNode);}
}
}
}
};
this.addPort=function(ifName){
var index=-1;
index = getIndexInArray(this.interfaceArrDeleted,ifName);
if(index!=-1) this.interfaceArrDeleted.splice(index,1);
if (!this.portBelongs(ifName)){
index = getIndexInArray(this.interfaceArrSet,ifName);
if(index==-1)this.interfaceArrSet.push(ifName);
}
};
this.removePort=function(ifName){
var index=-1;
index = getIndexInArray(this.interfaceArrSet,ifName);
if(index!=-1) this.interfaceArrSet.splice(index,1);
if (this.portBelongs(ifName)){
index = getIndexInArray(this.interfaceArrDeleted,ifName);
if(index==-1)this.interfaceArrDeleted.push(ifName);
}
};
this.updatePort=function(){
};
this.portBelongs = function(ifName){
for (var i=0; i<this.interfaceArr.length;i++){
if (this.interfaceArr[i].trim().toLowerCase()==ifName.trim().toLowerCase())
return true;
}
return false;
};
this.save=function ()
{
var val;
val = this.interfaceArrSet.join(this.delimeter);
if (val.trim()!="")
{
Page.createSectionXml(this.dataSectionName,Page.dataXml,"set");
if (this.dataNode==null){
try{
this.dataNode = $d(".//" + this.xpath );
}catch(e){if(DEBUG)alert("error occured in save operation.Please check xpath fields***" + e.description);return;};
}
IXML.setText(this.dataNode,val);
Page.setAlteredDataNodes(this.dataNode,"set");
}
val = this.interfaceArrDeleted.join(this.delimeter);
if (val.trim()!="")
{
if(null==Page.dataXml_delete)Page.dataXml_delete = IXML.getDomDocument(null,DATAROOT);
Page.createSectionXml(this.dataSectionName,Page.dataXml_delete,"delete");
try{
var node = Page.dataXml_delete.selectSingleNode("//" + this.xpath );
}catch(e){if(DEBUG)alert("error occured in save operation.Please check xpath fields***" + e.description);return;};
IXML.setText(node,val);
Page.setAlteredDataNodes(node,"delete");
}
this.resetConfiguration();
};
this.resetConfiguration=function(){
this.interfaceArrSet = new Array();
this.interfaceArrDeleted = new Array();
}
this.initInterfaceArr = function(){
var headStr;
var tailStr;
var tmpArr;
var preffix;
var i = 0;
this.interfaceString = IXML.getText(this.dataNode) ;
tailStr = this.interfaceString;
var ind = tailStr.indexOf("(");
do
{
if (ind == - 1)
{
tmpArr = tailStr.split(this.delimeter);
for (i = 0; i < tmpArr.length; i ++ )
{
this.interfaceArr.push(tmpArr[i]);
}
}
else
{
headStr = tailStr.substr(0, ind);
tailStr = tailStr.substr(ind + 1);
tmpArr = headStr.split(this.delimeter);
preffix = tmpArr.pop();
for (i = 0; i < tmpArr.length; i ++ )
{
this.interfaceArr.push(tmpArr[i]);
}
headStr = tailStr.substr(0, tailStr.indexOf(")"));
tailStr = tailStr.substr(tailStr.indexOf(")") + 1);
tmpArr = headStr.split(this.delimeter);
for(i = 0; i < tmpArr.length; i ++ )
{
if (tmpArr[i].indexOf("-") != - 1)
{
parseRange(tmpArr[i], preffix, this);
}
else
{
this.interfaceArr.push(preffix + tmpArr[i]);
}
}
ind = tailStr.indexOf("(");
}
}
while(ind != - 1);
preffix = "";
tmpArr = tailStr.split(this.delimeter);
for (i = 1; i < tmpArr.length; i ++ )
{
if (tmpArr[i].indexOf("-") != - 1)
{
parseRange(tmpArr[i], preffix,this);
}
else
{
this.interfaceArr.push(preffix + tmpArr[i]);
}
}
};
this.union = function(pSet){
if(this.interfaceArr && pSet && pSet.interfaceArr )
this.interfaceArr=this.interfaceArr.concat(pSet.interfaceArr);
};
this.intersection = function(pSet){
var arr = new Array();
if(this.interfaceArr && pSet && pSet.interfaceArr )
for (var i=0;i< this.interfaceArr.length;i++)
{
if (pSet.portBelons(this.interfaceArr[i]) )
arr.push(this.interfaceArr[i]);
}
this.interfaceAr = arr;
};
this.wait = function(bool){Page.wait(bool);}
}
function portListIS() {
this.initInterfaceArr = function() {
this.interfaceString = IXML.getText(this.dataNode);
var ifRangeArr = this.interfaceString.split(/,\s*/);
var ifRange, ifType, firstIf, lastIf;
var rangeMatch = /^(.+?)(\d+)(\s*-\s*(\d+))?$/;
for (var i = 0; i < ifRangeArr.length; i ++) {
ifRange = ifRangeArr[i].match(rangeMatch);
if (!ifRange) continue;
ifType = ifRange[1];
firstIf = parseInt(ifRange[2], 10);
lastIf = parseInt(ifRange[4], 10) || firstIf;
if (firstIf > lastIf) continue;
for (var j = firstIf; j <= lastIf; j ++)
this.interfaceArr.push(ifType + j);
}
}
}
Class(portListIS).Extends(portList);
Class(BitMask);
function BitMask()
{
this.konstructor = function(id)
{
this.masterNode = Page.findNodeByUniqID(id);
attributes = this.masterNode.attributes;
this.id = id;
this.bmsk_data=null;
this.xpath = (attributes.getNamedItem("BIND"))?this.masterNode.getAttribute("BIND"):"";
if(this.xpath!="")
{
var bmsk_data_nodes = $col("//" + this.xpath);
if(bmsk_data_nodes.length==1)
this.bmsk_data = IXML.getText(bmsk_data_nodes[0]);
}
this.bmsk_coll = $col("//*[@TYPE='bitmask' and @BMSK_ID='" + this.id + "']");
this.bits = this.masterNode.selectSingleNode(".//bits");
this.new_bmsk_data;
this.reset_mask();
this.action = ACTION_SET;
this.setSectionName();
try{if(this.bmsk_data)this.bind_get()}catch(e){};
};
this.setSectionName = function()
{
if(this.xpath=="")return;
this.dataSectionName =(this.xpath.search("/")!=-1)?
this.xpath.substr(0,this.xpath.indexOf("/")):
this.xpath;
};
this.reset_mask = function()
{
var result="";
var len = this.bits.selectNodes("./*").length;
for(var i=0;i<len;i++)
{
result+="0";
}
this.new_bmsk_data = result.trim();
};
this.bind_get = function()
{
var tag_name
for(var i=0;i<this.bmsk_coll.length;i++)
{
if(this.bmsk_coll[i])
{
tag_name=this.bmsk_coll[i].nodeName;
switch(tag_name)
{
case "combobox":
this.set_combobox(this.bmsk_coll[i]);break;
case "checkbox":
this.set_checkbox(this.bmsk_coll[i]);break;
case "span":
this.set_span(this.bmsk_coll[i]);break;
case "td":
this.set_span(this.bmsk_coll[i]);break;
case "textarea":
this.set_span(this.bmsk_coll[i]);break;
case "inputtext":
this.set_span(this.bmsk_coll[i]);break;
}
}
}
};
this.get_bitvalue = function(num)
{
var bit_node = this.bits.selectSingleNode("./*[name()='bit" + num + "']");
var bit_bind =(bit_node.attributes.getNamedItem("BIND"))?bit_node.getAttribute("BIND"):"";
var bit_data="";
if(bit_bind!="")
{
bit_data = IXML.getText($d("//" + bit_bind));
IXML.setText(bit_node,bit_data);
}
else
{
bit_data = IXML.getText(bit_node);
}
return bit_data;
};
this.get_bitnumber = function(value)
{
var bit_node = this.bits.selectSingleNode("./*[text()='" + value + "']");
return (bit_node)?bit_node.nodeName.substr(3):"";
};
this.isRelatedControl = function(id,i)
{
var bit_node = this.bits.selectSingleNode("./*[name()='bit" + i + "']");
if(bit_node){
var related_id = bit_node.getAttribute("RELATED_ID");
if(related_id == id)return true;
}
return false;
};
this.set_combobox = function(node){
var control = document.getElementById(node.getAttribute("ID"));
if(null==control || null== this.bmsk_data)return;
var option,i,bmsk_data,len,bit,j;
bmsk_data=this.bmsk_data;
len = this.bmsk_data.length;
while(control.options.length>0)
control.options.remove(control.options.length-1);
for(i=0;i<len;i++)
{
bit = this.bmsk_data.substr(i,1);
if(bit=="1" && this.isRelatedControl(control.id,i))
{
option = new Option();
option.text = this.get_bitvalue(i);
option.value = i + "";
control.options.add(option);
}
};
};
this.set_checkbox = function(node)
{
var control = document.getElementById(node.getAttribute("ID"));
var context_bit = this.bits.selectSingleNode("./*[@RELATED_ID='" + node.getAttribute("ID") + "']");
var bit_number= (context_bit)?context_bit.nodeName.substr(3):null;
if(null==bit_number || null== this.bmsk_data)return;
var checked_value = (node.attributes.getNamedItem("CHECKED_VALUE"))?node.getAttribute("CHECKED_VALUE"):"";
var bit = this.bmsk_data.substr(bit_number,1);
var bmsk_value;
if(bit=="0")
{
control.checked=false;
}
else
{
bmsk_value = this.get_bitvalue(bit_number);
if(bmsk_value==checked_value)
control.checked=true;
}
};
this.set_span = function(node)
{
var bit_numbers;
var control = document.getElementById(node.getAttribute("ID"));
var context_bits = this.bits.selectNodes("./*[@RELATED_ID='" + node.getAttribute("ID") + "']");
if(context_bits.length==0 || null== this.bmsk_data)return;
if(context_bits.length==1)
bit_numbers = context_bits[0].nodeName.substr(3);
else
{
bit_numbers=new Array();
for(var i=0;i<context_bits.length;i++)
{
bit_numbers.push(context_bits[i].nodeName.substr(3));
}
}
var delimeter =(node.attributes.getNamedItem("DELIMETER"))?node.getAttribute("DELIMETER"):",";
var bit;
var inner_text=""
if(typeof bit_numbers == "object")
{
for(var i=0;i<bit_numbers.length;i++)
{
bit = this.bmsk_data.substr(bit_numbers[i],1);
if(bit=="1")
{
inner_text = (inner_text=="")?this.get_bitvalue(bit_numbers[i]):inner_text + delimeter + this.get_bitvalue(bit_numbers[i]);
}
}
}
else
{
bit = this.bmsk_data.substr(bit_numbers,1);
if(bit=="1")
inner_text = this.get_bitvalue(bit_numbers)
}
if(inner_text!="")Util.setControlData(control.id,inner_text)
};
this.bind_set = function()
{
var tag_name;
for(var i=0;i<this.bmsk_coll.length;i++)
{
if(this.bmsk_coll[i])
{
tag_name=this.bmsk_coll[i].nodeName;
switch(tag_name)
{
case "combobox" :this.bind_set_combobox(this.bmsk_coll[i]);break;
case "checkbox" :this.bind_set_checkbox(this.bmsk_coll[i]);break;
case "span" :this.bind_set_span(this.bmsk_coll[i]);break;
case "td" :this.bind_set_span(this.bmsk_coll[i]);break;
case "textarea" :this.bind_set_span(this.bmsk_coll[i]);break;
case "inputtext" :this.bind_set_span(this.bmsk_coll[i]);break;
}
}
}
};
this.bind_set_RTCntrl = function(rtBmskNode,rtObj)
{
for(var i=0;i<this.bmsk_coll.length;i++)
{
if(this.bmsk_coll[i])
{
tagName = this.bmsk_coll[i].nodeName;
switch(tagName)
{
case "combobox" :this.bind_repeated_combobox(this.bmsk_coll[i],rtBmskNode,rtObj);break;
case "checkbox" :this.bind_repeated_checkbox(this.bmsk_coll[i],rtBmskNode,rtObj);break;
default :this.bind_repeated_span(this.bmsk_coll[i],rtBmskNode,rtObj);
}
}
}
};
this.getCntrFromRT = function(contextXmlNode,rtXmlRow,oRT)
{
var cellPos,cntrID,rtXmlCell;
cntrID = contextXmlNode.getAttribute("ID");
var masterXmlRow = oRT.masterNode.selectSingleNode("./*[@BIND]");
var masterXmlCells = masterXmlRow.selectNodes("./*");
for(var i=0;i<masterXmlCells.length;i++){
if(masterXmlCells[i].selectSingleNode(".//*[@ID='" + cntrID + "']"))
cellPos = i;
}
if(cellPos){
var rtXmlCell = rtXmlRow.selectSingleNode("./*[position()=" + parseInt(cellPos+1) + "]");
if(rtXmlCell){
if(IXML.hasChildElements(rtXmlCell)){
rtXmlCntr = IXML.getChildElement(rtXmlCell,1);
return rtXmlCntr;
}
else
return rtXmlCell;
}
}
return null;
}
this.bind_repeated_combobox = function(node,rtXml,oRT)
{
control_xml = this.getCntrFromRT(node,rtXml,oRT);
if(control_xml)
{
var data,bit,tmp_bmsk,pos;
tmp_bmsk = this.new_bmsk_data;
var options=control_xml.selectNodes("./*");
for(var i=0;i<options.length;i++)
{
data = IXML.getText(options[i]);
bit = this.get_bitnumber(data);
if(bit!="" && this.isRelatedControl(node.getAttribute("ID"),i))
{
pos = parseInt(bit);
this.update_new_bitmsk_data(pos,tmp_bmsk)
tmp_bmsk = this.new_bmsk_data;
}
}
}
};
this.bind_repeated_checkbox = function(node,rtXml,oRT)
{
control_xml = this.getCntrFromRT(node,rtXml,oRT);
if(null==control)return;
var context_bit = this.bits.selectSingleNode("./*[@RELATED_ID='" + node.getAttribute("ID") + "']");
var bit_number= (context_bit)?context_bit.nodeName.substr(3):null;
if(null==bit_number)return;
var bChecked = (control_xml.getAttribute("CHECKED")=="true")?true:false;
if(bChecked)
{
tmp_bmsk = this.new_bmsk_data;
pos = parseInt(bit_number);
this.update_new_bitmsk_data(pos,tmp_bmsk)
}
};
this.bind_repeated_span = function(node,rtXml,oRT)
{
control_xml = this.getCntrFromRT(node,rtXml,oRT);
if(null==control_xml)return;
var context_bits = this.bits.selectNodes("./*[@RELATED_ID='" + node.getAttribute("ID") + "']");
if(context_bits.length==0)return;
var bits;
if(context_bits.length==1)
bits = context_bits[0].nodeName.substr(3);
else
{
bits=new Array();
for(var i=0;i<context_bits.length;i++)
{
bits.push(context_bits[i].nodeName.substr(3));
}
}
var values = IXML.getText(control_xml);
var inner_text = values;
if(null==inner_text)return;
var data,_bit;
var tmp_bmsk = this.new_bmsk_data;
if(typeof bits == "object")
{
var delimeter =(node.attributes.getNamedItem("DELIMETER"))?node.getAttribute("DELIMETER"):",";
var arr_text = inner_text.split(delimeter);
for(var i=0;i<arr_text.length;i++)
{
data = arr_text[i];
_bit = this.get_bitnumber(data);
pos = parseInt(_bit);
this.update_new_bitmsk_data(pos,tmp_bmsk);
tmp_bmsk = this.new_bmsk_data;
}
}
else
{
if(bits!="")
{
data = inner_text;
_bit = this.get_bitnumber(data);
pos = parseInt(_bit);
this.update_new_bitmsk_data(pos,tmp_bmsk);
}
}
};
this.bind_set_combobox=function(node)
{
var control = document.getElementById(node.getAttribute("ID"));
if(null==control)return;
var data,bit,tmp_bmsk,pos;
tmp_bmsk = this.new_bmsk_data;
for(var i=0;i<control.options.length;i++)
{
data = control.options[i].text;
bit = this.get_bitnumber(data);
if(bit!="" && this.isRelatedControl(control.id,i))
{
pos = parseInt(bit);
this.update_new_bitmsk_data(pos,tmp_bmsk)
tmp_bmsk = this.new_bmsk_data;
}
}
};
this.bind_set_checkbox=function(node)
{
var control = document.getElementById(node.getAttribute("ID"));
if(null==control)return;
var context_bit = this.bits.selectSingleNode("./*[@RELATED_ID='" + node.getAttribute("ID") + "']");
var bit_number= (context_bit)?context_bit.nodeName.substr(3):null;
if(null==bit_number)return;
if(control.checked)
{
tmp_bmsk = this.new_bmsk_data;
pos = parseInt(bit_number);
this.update_new_bitmsk_data(pos,tmp_bmsk)
}
};
this.bind_set_span=function(node)
{
var bit;
var control = document.getElementById(node.getAttribute("ID"));
if(null==control)return;
var context_bits = this.bits.selectNodes("./*[@RELATED_ID='" + node.getAttribute("ID") + "']");
if(context_bits.length==0)return;
if(context_bits.length==1)
bit = context_bits[0].nodeName.substr(3);
else
{
bit=new Array();
for(var i=0;i<context_bits.length;i++)
{
bit.push(context_bits[i].nodeName.substr(3));
}
}
var values = Util.getInputData([node.getAttribute("ID")]);
var inner_text = (values.length>0)?values[0]:null;
if(null==inner_text)return
var data;
var tmp_bmsk = this.new_bmsk_data;
if(typeof bit == "object")
{
var delimeter =(node.attributes.getNamedItem("DELIMETER"))?node.getAttribute("DELIMETER"):",";
var arr_text = inner_text.split(delimeter);
for(var i=0;i<arr_text.length;i++)
{
data = arr_text[i];
pos = parseInt(bit[i]);
this.update_new_bitmsk_data(pos,tmp_bmsk)
tmp_bmsk = this.new_bmsk_data;
}
}
else
{
if(bit!="")
{
data = inner_text;
pos = parseInt(bit-1);
this.update_new_bitmsk_data(pos,tmp_bmsk)
}
}
};
this.update_new_bitmsk_data = function(pos,prev_msk)
{
if(pos==0)
this.new_bmsk_data = "1" + prev_msk.substr(pos+1);
else if (pos==prev_msk.length-1)
this.new_bmsk_data = prev_msk.substr(0,pos) + "1";
else
this.new_bmsk_data=prev_msk.substr(0,pos)+ "1" + prev_msk.substr(pos+1);
};
this.updateSelect = function(id,txt,val)
{
var select = document.getElementById(id);
var b_exists = false
for(var i=0;i < select.options.length;i++){
if(select.options[i].text==txt){b_exists=true;break;}
}
if(!b_exists){select.options[i].add(new Option(txt,val))};
};
this.updateSpan = function(id,txt)
{
var span = document.getElementById(id);
var span_xml = Page.findNodeByUniqId(id);
var delim = (span_xml.getAttribute("DELIMETER"))?span_xml.getAttribute("DELIMETER"):",";
var innerText = IXML.getInnerText(span);
(innerText.trim()=="")?IXML.setInnerText(span,txt):IXML.setInnerText(span,delim + txt);
};
this.updateTextBox = function(id,txt)
{
var textbox = document.getElementById(id);
var textbox_xml = Page.findNodeByUniqId(id);
var delim = (textbox_xml.getAttribute("DELIMETER"))?textbox_xml.getAttribute("DELIMETER"):",";
textbox.value = (textbox.value.trim()=="")?txt:delim + textbox.value;
};
this.translate = function(relatedID)
{
var node = Page.findNodeByUniqID(relatedID);
if(null==node)return;
var tag_name = node.nodeName;
switch(tag_name)
{
case "combobox":
this.set_combobox(node);break;
case "checkbox":
this.set_checkbox(node);break;
case "span":
this.set_span(node);break;
case "td":
this.set_span(node);break;
case "textarea":
this.set_span(node);break;
case "inputtext":
this.set_span(node);break;
}
};
this.save = function()
{
if(null==this.bmsk_data)return;
this.bind_set();
if(this.new_bmsk_data == this.bmsk_data)return;
var dataXml;
if(this.action == ACTION_SET)
{
dataXml = $d("//" + DATAROOT);
Page.createSectionXml(this.dataSectionName,dataXml,this.action);
}
if(this.action == ACTION_DELETE)
{
if(null==Page.dataXml_delete)
Page.dataXml_delete = IXML.getDomDocument(null,DATAROOT);
dataXml = Page.dataXml_delete.selectSingleNode("//" + DATAROOT);
Page.createSectionXml(this.dataSectionName,dataXml,this.action);
}
var data_xpath = "//" + this.dataSectionName + "[@action='" + this.action + "']/" + this.xpath.tail("/");
var data_node = dataXml.selectSingleNode(data_xpath)
IXML.setText(data_node, this.new_bmsk_data);
Page.setAlteredDataNodes(data_node,this.action);
};
this.set_action=function(action)
{
this.action = action;
};
this.dispose = function()
{
this.masterNode=null;
this.bits=null;
this.bmsk_coll = null;
this.bmsk_data = null;
this.new_bmsk_data = null;
this.dataSectionName = null;
this.action = null;
};
}
BitMask.coll=[];
BitMask.findIndex = function(bmsk_id){
var id=null;
for(var i = 0;i<BitMask.coll.length;i++){
if(BitMask.coll[i][0]==bmsk_id){
id=i;break;
}
}
return id;
};
BitMask.save = function(){
if(PageManager.IS_MOCKUP)return;
for(var i=0;i<BitMask.coll.length;i++)
{
try{BitMask.coll[i][1].save()}catch(e){}
}
}
Class(List).Extends(BaseTable);
function List()
{
this.konstructor = function(id)
{
var masterNode = Page.findNodeByUniqID(id);
this.superclass(masterNode,id);
this.relatedIDs = new Array();
this.getRelatedIDs(".//list/listoption");
this.setDataTable();
this.buildXmlTable();
this.reload_html();
};
this.OnComplete = function(responseText,responseXML){
};
this.complete_get = function(responseText,responseXML)
{
var xml = IXML.getDomDocument();
if(responseText!="")
{
if(!Page.timeOutIdle(responseText))
{
var xml_pos=responseText.indexOf("<?xml");
if(xml_pos!=0)responseText=responseText.substr(xml_pos);
xml=(new DOMParser()).parseFromString(responseText, "text/xml");
}
}
if(null==IXML.getChildElement(xml,1))return;
var apiName =this.dataSectionName;
if(xml.selectSingleNode("//" + apiName)){
var sectionNode = $d("//" + apiName);
if(sectionNode) {
IXML.copyChildNodes(xml.selectSingleNode("//" + apiName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
}
}
this.reload_html();
};
this.reload_html = function()
{
var option_text,option_values;
var removed_option
while(this.container && this.container.options.length>0)
{
removed_option = this.container.options.remove(this.container.options.length-1);
delete removed_option;
}
var data = this.xmlData.selectSingleNode("./list")
if(data)
{
var text,value,coll;
coll = data.selectNodes("./*");
for(var i=0;i<coll.length;i++)
{
if(null==coll[i].attributes.getNamedItem("DELETED")){
text=IXML.getText(coll[i]);
value=coll[i].getAttribute("VALUE");
this.container.options.add(new Option(text,value));
}
}
}
};
this.getRowData=function(obj)
{
}
this.setDataTable = function()
{
var listNodeName =this.bindingTablePath.getLastNodeName();
var listNode;
var option_path="";
var sectionNode =$d("//" + this.dataSectionName);
if(this.dataSectionName==listNodeName){
option_path="//" + listNodeName + "//" + this.bindingRowPath;
listNode=sectionNode
}else{
option_path="//" + this.dataSectionName + "//" + listNodeName + "//" + this.bindingRowPath;
listNode=sectionNode.selectSingleNode(".//" + listNodeName);
}
var collDataOptions = $dcol(option_path);
while(this.data && this.data.length>0)this.data.pop();
while(this.binded_rows && this.binded_rows.length>0)this.binded_rows.pop();
var value_bind=this.masterNode.selectSingleNode("./listoption/value").getAttribute("BIND");
var text_bind=this.masterNode.selectSingleNode("./listoption/text").getAttribute("BIND");
if(null==value_bind)value_bind = text_bind;
var value,text;
for(var i=0; collDataOptions && i<collDataOptions.length;i++)
{
value = IXML.getText(collDataOptions[i].selectSingleNode("./" + value_bind ));
text = IXML.getText(collDataOptions[i].selectSingleNode("./" + text_bind ));
this.data.push([value.xmlEncode(),text.xmlEncode()]);
}
};
this.buildXmlTable=function()
{
try{
this.XML.BeginNode("list");
this.serializeAttributes(this.masterNode.attributes);
optionXml = this.masterNode.selectNodes("./*")[0];
if(this.data && this.data.length>0)
this.buildXmlRow(optionXml)
this.XML.EndNode();
this.XML.Close();
this.xmlData = (new DOMParser()).parseFromString(this.XML.ToString(), "text/xml");
this.XML.Reset();
}
catch(e)
{
if(DEBUG=="true")alert("**Error occured in List.prototype.buidXmlTable**" + e. description)
}
};
this.buildXmlRow=function(row)
{
var i
if(this.css_row_odd){
row.removeAttribute("CLASS_ODD");
row.removeAttribute("CLASS");
}
for(i=0;i<this.data.length;i++)
{
this.XML.BeginNode("option");
this.serializeAttributes(row.attributes);
this.XML.Attrib("ID","l" + i + "_" + this.tableID);
if(this.selectedRow[i] && this.selectedRow[i]==true)
this.XML.Attrib("SELECTED","1")
this.buildXmlCell(i);
this.XML.EndNode();
if(this.cntRows!=null)this.cntRows++;
}
};
this.buildXmlCell=function(member)
{
var i;
var data = this.data[member]
this.XML.Attrib("VALUE",data[0]);
this.XML.Attrib("BINDED","true");
this.XML.WriteString(data[1]);
};
this.addEntry = function(text,val)
{
var options_xml =this.xmlData.selectNodes("//option[text()='" + text + "']")
if(options_xml.length>0){
if(options_xml[0].getAttribute("DELETED")=="1"){
options_xml[0].removeAttribute("DELETED");
if(null==options_xml[0].getAttribute("BINDED"))
options_xml[0].setAttribute("ADDED","1")
this.container.options.add(new Option(text,val));
}
}
else{
var newOptionXml=IXML.getDomDocument(null,'option');
var newOptionNode = newOptionXml.selectSingleNode("//option")
newOptionNode.setAttribute("ADDED","1")
newOptionNode.setAttribute("VALUE",val + "");
IXML.setText(newOptionNode,text);
this.xmlData.selectSingleNode("//list").appendChild(newOptionNode);
this.container.options.add(new Option(text,val));
}
};
this.deleteEntry = function()
{
var xml_option,val;
var i=0;
var removedOption
for(i=0;i<this.container.options.length; i++)
{
if(this.container.options[i].selected){
text = this.container.options[i].text;
xml_option = this.xmlData.selectNodes("//option[text()='" + text + "']")[0];
if(xml_option.getAttribute("BINDED")=="true"){
removedOption = this.xmlData.selectSingleNode("//list").removeChild(xml_option);
removedOption.setAttribute("DELETED","1");
this.xmlData_deleted.selectSingleNode("//deletedData").appendChild(removedOption);
}
this.container.remove(i);
i--;
}
}
};
this.updateDeletedEntry = function(text,val)
{
this.deleteEntry();
this.addEntry(text,val);
};
this.save = function()
{
if(PageManager.IS_MOCKUP)return;
this.bind(this.xmlData_deleted,Page.dataXml_delete,ACTION_DELETE);
this.bind(this.xmlData,Page.dataXml,ACTION_SET);
};
this.fillNewRowXml = function(data_xml,newrow,action){
this.fillOptionXml(data_xml,newrow,action);
};
this.fillOptionXml=function(data_xml,newrow,action){
var bind,cellXml
var data_value = data_xml.getAttribute("VALUE").trim();
var data_text = IXML.getText(data_xml);
var bind_val = this.masterNode.selectSingleNode(".//value").getAttribute("BIND");
var bind_text = this.masterNode.selectSingleNode(".//text").getAttribute("BIND");
var valTags =newrow.selectNodes(".//" + bind_val);
var txtTags = newrow.selectNodes(".//" + bind_text);
if(valTags.length==1){
IXML.setText(valTags[0],data_value);
Page.setAlteredDataNodes(valTags[0],action);
};
if(txtTags.length==1){
IXML.setText(txtTags[0],data_text);
Page.setAlteredDataNodes(txtTags[0],action);
};
};
this.dispose = function()
{
this.superclass();
this.relatedIDs=null;
} ;
}
List.coll=[];
List.save = function(){
if(PageManager.IS_MOCKUP)return;
for(var i=0;i<List.coll.length;i++)
{
try{List.coll[i][1].save()}catch(e){}
}
}
List.findIndex = function(cmb_id){
var id=null;
for(var i = 0;i<List.coll.length;i++){
if(List.coll[i][0]==cmb_id){
id=i;break;
}
}
return id;
};
Class(Units);
var ALIAS_ALL = "All";
var ALIAS_LAGS = "LAGS";
var UNITID_TAG = "UnitID";
function Units(){
var args = arguments;
this.konstructor=function(id,containerID){
this.id = id;
this.masterNode=Page.findNodeByUniqID(this.id);
var attributes = this.masterNode.attributes;
if(containerID)
this.container=document.getElementById(arguments[1]);
else{
containerID = this.masterNode.getAttribute("CONTAINER_ID")
this.container=(containerID)?document.getElementById(containerID):null;
}
this.type=this.masterNode.getAttribute("TYPE");
if(this.masterNode.getAttribute("CLASS")!="")
this.cssClass=this.masterNode.getAttribute("CLASS");
if(attributes.getNamedItem("SHOW_ALL")&& this.masterNode.getAttribute("SHOW_ALL")=="true")
this.show_all=true;
else
this.show_all=false;
if(attributes.getNamedItem("SHOW_LAGS")&& this.masterNode.getAttribute("SHOW_LAGS")=="true")
this.show_lags=true;
else
this.show_lags=false;
if(attributes.getNamedItem("RELATED_ID") && this.masterNode.getAttribute("RELATED_ID")!="")
this.relatedID = this.masterNode.getAttribute("RELATED_ID");
if(attributes.getNamedItem("RELATED_OBJECT") && this.masterNode.getAttribute("RELATED_OBJECT")!="")
this.relatedObject = this.masterNode.getAttribute("RELATED_OBJECT");
if(attributes.getNamedItem("CALLBACK_FUNCTION")&& this.masterNode.getAttribute("CALLBACK_FUNCTION")!="")
this.fcallback = this.masterNode.getAttribute("CALLBACK_FUNCTION");
if(attributes.getNamedItem("FILTER_TAGS") && this.masterNode.getAttribute("FILTER_TAGS")!="")
this.filter_tags=this.masterNode.getAttribute("FILTER_TAGS").split(",")
this.currentUnit=oPolling.currentUnit ;
this.url = IXML.getText(this.masterNode);
};
this.build=function(){
switch(this.type)
{
case "link":
this.buildLinks();break;
case "combobox":
this.buildCombobox();break;
};
};
this.setActiveUnit=function(id){
this.activeUnitID=id;
};
this.getActiveUnit=function(){
return this.activeUnitID;
};
this.count=function(){
return oPolling.getCountUnits();
};
this.collUnits=function(){
return oPolling.getCollUnits();
};
this.getUrl=function(){
var _url = this.url;
var pos,pos_filter;
var rExpUnit = new RegExp("#" + UNITID_TAG + "#", "g");
if(this.filter_tags){
var i,pair,data;
for(i=0;i<this.filter_tags.length;i++)
{
pair =this.filter_tags[i].split(":");
if(pair && pair[1]){
data = Util.getInputData([pair[1]]);
if(pair[1]!="")
_url = _url.replace("#" + pair[0] + "#",data[0]);
}
};
};
if(this.show_all && this.currentUnit=="2000")
{
_url = _url.replace(/&UnitID=#UnitID#/g,"");
}
else if(this.show_lags && this.currentUnit=="1000")
{
_url = _url.replace(/&UnitID=#UnitID#/g,"");
pos_filter = _url.indexOf("&filter");
if(pos_filter!=-1)
{
_url = _url.substr(0,pos_filter)+ "&interfaceType=2" + _url.substr(pos_filter);
}
else
{
pos = _url.indexOf("}");
_url = _url.substr(0,pos) + "&interfaceType=2}";
}
}
else if (this.show_lags)
{
_url = _url.replace(rExpUnit,this.currentUnit);
pos_filter = _url.indexOf("&filter");
if(pos_filter!=-1)
{
_url = _url.substr(0,pos_filter)+ "&interfaceType=1" + _url.substr(pos_filter);
}
else
{
pos = _url.indexOf("}");
_url = _url.substr(0,pos) + "&interfaceType=1}";
}
}
else
_url = _url.replace(rExpUnit,this.currentUnit);
return _url;
};
this.buildLinks=function(){
var tbl_container = document.createElement("table");
tbl_container.style.width=this.masterNode.getAttribute("WIDTH");
tbl_container.valign = "middle"
if(this.masterNode.getAttribute("CLASS"))
tbl_container.className = this.masterNode.getAttribute("CLASS")
var tbody_container = document.createElement("tbody");
var row_container = document.createElement("tr");
if(this.masterNode.getAttribute("CLASS"))
row_container.className = this.masterNode.getAttribute("CLASS")
var td_container;
var link;
var collUnit = this.collUnits();
var _count = collUnit.length;
var i;
var u_id,u_node,span;
var _this= this;
for(i=0;i<_count;i++)
{
u_node = collUnit[i].selectSingleNode("./moduleNumber");
u_id = IXML.getText(collUnit[i].selectSingleNode('./moduleNumber'))
td_container=document.createElement("td");
link = document.createElement("a");
link.href ="javascript:void(0)"
if( this.currentUnit==u_id)
link.className ="hover"
span = document.createElement("span");
span.objID = this.id;
span.u_id = u_id;
this.attachEvent(span,"click","Units.setUnit")
IXML.setInnerText(span,IXML.getText(u_node))
link.appendChild(span)
td_container.appendChild(link);
row_container.appendChild(td_container);
tbody_container.appendChild(row_container);
};
if(this.show_lags){
td_container=document.createElement("td");
link = document.createElement("a");
link.href ="javascript:void(0)"
if( this.currentUnit=="1000")
link.className ="hover"
span = document.createElement("span");
span.objID = this.id;
span.u_id = "1000";
this.attachEvent(span,"click","Units.setUnit")
IXML.setInnerText(span,ALIAS_LAGS)
link.appendChild(span)
td_container.appendChild(link);
row_container.appendChild(td_container);
tbody_container.appendChild(row_container);
};
if(this.show_all){
td_container=document.createElement("td");
link = document.createElement("a");
link.href ="javascript:void(0)"
if( this.currentUnit=="2000")
link.className ="hover"
span = document.createElement("span");
span.objID = this.id;
span.u_id = "2000";
this.attachEvent(span,"click","Units.setUnit")
IXML.setInnerText(span,ALIAS_ALL)
link.appendChild(span)
td_container.appendChild(link);
row_container.appendChild(td_container);
tbody_container.appendChild(row_container);
};
tbl_container.appendChild(tbody_container);
if(this.container)
this.container.appendChild(tbl_container);
};
this.attachEvent=function(obj,evnt,handler)
{
if(window.addEventListener){
obj.addEventListener(evnt,eval(handler),false)
}
else{
obj.attachEvent("on" + evnt,eval(handler))
}
}
this.buildCombobox=function(){
var combo = document.createElement("select");
combo.style.width=this.masterNode.getAttribute("WIDTH");
combo.className = this.masterNode.getAttribute("CLASS");
var collUnit = this.collUnits();
var _count = collUnit.length;
var option,u_node,u_id;
for(var i=0;i<_count;i++)
{
u_node = collUnit[i].selectSingleNode("./moduleNumber");
u_id = IXML.getText(collUnit[i].selectSingleNode('./moduleNumber'))
option = new Option();
option.value = u_id;
option.text= u_id;
if( this.currentUnit==u_id)
{
option.selected=true;
}
combo.options.add(option);
}
if(this.show_all){
option = new Option();
option.value = "2000";
option.text= "2000";
if( this.currentUnit=="2000")
{
option.selected=true;
}
combo.options.add(option);
}
if(this.show_lags){
option = new Option();
option.value = "1000";
option.text= "1000";
if( this.currentUnit=="1000")
{
option.selected=true;
}
combo.options.add(option);
}
combo.objID = this.id;
combo.u_id = u_id;
this.attachEvent(combo,"change","Units.setUnit")
};
this.dispose = function()
{
this.url=null;
this.fcallback=null;
this.relatedObject=null;
this.relatedID = null;
this.show_lags=false;
this.show_all=false;
this.filter_tags = null;
};
};
Units.activeID;
Units.coll=[];
Units.getDataUnit=function(id)
{
if(PageManager.IS_MOCKUP)return;
var ind = Units.findActiveIndex(id);
var url = Units.coll[ind][1].getUrl();
try{
if(Units.coll[ind][1].relatedObject)
eval(Units.coll[ind][1].relatedObject).get(url);
else if(Units.coll[ind][1].relatedID)
eval(Units.coll[ind][1].relatedID).get(url);
}
catch(e){
}
};
Units.findActiveIndex=function(id){
var _ind=null;
for(var i = 0;i<Units.coll.length;i++){
if(Units.coll[i][0]==id){
_ind=i;break;
}
}
return _ind;
};
Units.setUnit=function(evt){
var e_out;
var ie_var = "srcElement";
var moz_var = "target";
var objID ;
var u_id;
evt[moz_var]? objID = evt[moz_var]["objID"] : objID = evt[ie_var]["objID"];
evt[moz_var]? u_id = evt[moz_var]["u_id"] : u_id = evt[ie_var]["u_id"];
var ind = Units.findActiveIndex(objID);
if(Units.coll[ind][1].type=="combobox")
{
var _evt=evt[moz_var]?evt[moz_var]:evt[ie_var];
u_id = _evt.value
}
if(u_id!="2000" && u_id!="1000")oPolling.currentUnit = u_id;
Units.coll[ind][1].currentUnit = u_id;
if(Units.coll[ind][1].fcallback)
eval(Units.coll[ind][1].fcallback);
};
Units.setInterfaceType = function(cntr_id)
{
if(document.getElementById(cntr_id))
{
if(oPolling.currentUnit=="1000")
{
document.getElementById(cntr_id).value="2"
}
else
{
document.getElementById(cntr_id).value="1"
}
}
}
function Polling()
{
this.masterType;
this.IpHostManagementIndex=100000;
this.defaultVlanId=1;
this.displayRouter;
this.NumberOfPorts = 0;
this.NumberOfTrunks = 0;
this.NumberOfModules;
this.maxPortsPerTrunk;
this.MaxNumberOfUnits;
this.maxVLANcount;
this.trunkFirstIndex= 0;
this.currentUnit =1;
this.MasterUnit=-1;
this.BackUpUnit=-1;
this.CurrentUnit=1;
this.NumberOfModules=1;
this.NumberOfStackUnits = 0;
this.isStack=false;
this.rateLimit;
this.oobFirstIndex;
this.oobNumOfPorts;
this.poeSupported;
this.portsDataXml;
this.modulesDataXml;
this.isFirstLoad=true;
this.NumberOfPortPerModuleArr=new Array();
this.StartingPortPerModuleArr = new Array();
this.TypePerModuleArr = new Array();
this.firstPresentModule=1;
this.interval=0
}
Polling.prototype.get_SiteMap = function(first)
{
if(null!=parent.modulesDataXml && this.isFirstLoad)
{
this.init() ;
var url = "SiteMap.xml"
Navigation.create(url);
this.isFirstLoad=false;
parent.oGW.initialized = true;
parent.oGW.loaded = false;
var LogOff_Reason = parent.get_cookie("LogOff_Reason");
var Last_Page = parent.get_cookie("Last_Page");
parent.firstLoad(first);
}
else
{
window.setTimeout("oPolling.get_SiteMap()",500)
}
}
Polling.prototype.init=function(){
this.MasterUnit=parent.MasterUnit;
this.BackUpUnit=parent.BackUpUnit;
this.masterType = parent.MasterType;
this.TypePerModuleArr = _top.TypePerModuleArr;
this.moduleType = (_top.TypePerModuleArr[1] && _top.TypePerModuleArr[1] != -1) ? _top.TypePerModuleArr[1] : _top.TypePerModuleArr[2];
this.modulesDataXml = parent.modulesDataXml;
this.portsDataXml = parent.portsDataXml
this.NumberOfPortPerModuleArr = parent.NumberOfPortPerModuleArr;
this.StartingPortPerModuleArr = parent.StartingPortPerModuleArr;
this.TypePerModuleArr = parent.TypePerModuleArr;
this.isStack = (parent.MasterUnit!=0);
this.displayRouter = parent.displayRouter ;
this.poeSupported = parent.poeSupported;
this.firstPresentModule = parent.firstPresentModule;
this.NumberOfPorts = parent.NumberOfPorts;
this.NumberOfTrunks = parent.NumberOfTrunks;
this.NumberOfModules = parent.NumberOfModules;
this.maxPortsPerTrunk = parent.maxPortsPerTrunk;
this.MaxNumberOfUnits = (parent.MaxNumberOfUnits==undefined)?0:parent.MaxNumberOfUnits;
this.trunkFirstIndex = parent.trunkFirstIndex;
this.rateLimit = parent.rateLimit;
this.IpHostManagementIndex = parent.IpHostManagementIndex ;
this.defaultVlanId = parent.defaultVlanId;
}
Polling.prototype.getNamePortByIndex=function(index){
var namePort=""
try{
namePort = IXML.getText(IXML.getChildElement(this.portsDataXml.
selectSingleNode("//port[ifIndex='" + index + "']"),2));
}
catch(e){
alert("element ifIndex with value - " + index + " isn't exists in xml document");
return;
}
return namePort;
};
Polling.prototype.getIfIndexByName = function(name){
var ifIndex="";
try{
ifIndex=IXML.getText(IXML.getChildElement(this.portsDataXml.
selectSingleNode("//port[portName='" + name + "']"),1));
}catch(e){
alert( "element portName with value - " + name + " isn't exists in xml document");
return;
}
return ifIndex;
};
Polling.prototype.getCollectionPortsPerUnit=function(unitID){
return this.portsDataXml.selectNodes("//port[relUnit='" + unitID + "']");
};
Polling.prototype.getCollectionExistingPorts = function()
{
return this.portsDataXml.selectNodes("//port");
}
Polling.prototype.getFirstIndex=function(nodeSet){
return IXML.getText(IXML.getChildElement(nodeSet[0],1));
};
Polling.prototype.getLastIndex = function(nodeSet){
return IXML.getText(IXML.getChildElement(nodeSet[nodeSet.length-1],1));
};
Polling.prototype.getCountUnitPortsPerType = function(_unit,type){
if(type=="eth"){
this.portsDataXml.
selectNodes("//port[relUnit/text()[.= '" + _unit + "'] and (swIfType/text()[.='1'] or swIfType/text()[.='2'])]").length;
}
else{
this.portsDataXml.
selectNodes("//port[relUnit/text()[.= '" + _unit + "'] and (swIfType/text()[.!='1'] or swIfType/text()[.!='2'])]").length;
}
};
Polling.prototype.getCollUnits=function()
{
return this.modulesDataXml.selectNodes("//modulesDataBase/module");
}
Polling.prototype.existsByName = function(port_name)
{
if(null==port_name) return true
if(this.portsDataXml.selectSingleNode("//port[portName/text()[.='" + port_name + "']]"))
return true;
else
return false;
}
Polling.prototype.existsByID = function(ifindex)
{
if(null==ifindex) return true
if(this.portsDataXml.selectSingleNode("//port[ifIndex/text()[.='" + ifindex + "']]"))
return true;
else
return false;
}
Polling.prototype.getUnitByPortName = function(name)
{
if(this.existsByName(name))
{
return IXML.getText(this.portsDataXml.selectSingleNode("//port[portName/text()[.='" + name + "']]").
selectSingleNode("./relUnit"));
}
else
return null;
}
Polling.prototype.getUnitByPortID = function(id)
{
if(this.existsByID(id))
{
return IXML.getText(this.portsDataXml.selectSingleNode("//port[ifIndex/text()[.='" + id + "']]").
selectSingleNode("./relUnit"));
}
else
return null;
};
Polling.prototype.getSpeedPortByIndex=function(index){
var ifSpeed=""
try{
ifSpeed = IXML.getText(IXML.getChildElement(this.portsDataXml.
selectSingleNode("//port[ifIndex='" + index + "']"),9));
}
catch(e){
alert("element ifIndex with value - " + index + " isn't exists in xml document");
return;
}
if (ifSpeed==10000000) ifSpeed = 1;
else if (ifSpeed==100000000) ifSpeed = 2;
else if (ifSpeed==1000000000) ifSpeed = 3;
else if (ifSpeed==10000000000) ifSpeed = 4;
else ifSpeed = 0;
return ifSpeed;
};
Polling.prototype.getPortStatus=function(index){
var operStatus="";
var suspendedStatus="";
try{
operStatus = IXML.getText(IXML.getChildElement(this.portsDataXml.
selectSingleNode("//port[ifIndex='" + index + "']"),10));
suspendedStatus = IXML.getText(IXML.getChildElement(this.portsDataXml.
selectSingleNode("//port[ifIndex='" + index + "']"),12));
}
catch(e){
alert("element ifIndex with value - " + index + " isn't exists in xml document");
return;
}
return ( operStatus == 1 ? "Up" : ( suspendedStatus == 1 ? "Suspended" : "Down"))
};
Polling.prototype.dispose=function(){
this.currentUnit = (this.isStack==true && this.MasterUnit>0)?this.MasterUnit:(this.isStack==true && this.BackUpUnit!=-1 )?
this.BackUpUnit:this.firstPresentModule;
};
function LoadDeviceName()
{
var projectName = "";
var deviceNameCntrl=document.getElementById("deviceName");
if(deviceNameCntrl)
deviceNameCntrl.innerHTML=projectName;
}
function disable(element,disableElem)
{
element.className=disableElem?"disableElement":"enableElement" ;
element.disabled=disableElem;
}
function selectOptionByText(selectObj,selectedText)
{
if(!selectObj)
{
return;
}
for(var i=0; i<selectObj.options.length; i++)
{
if(selectObj.options[i].text == selectedText)
{
selectObj.options[i].selected=true;
break;
}
}
}
function selectOptionByValue(selectObj,selectedValue)
{
for(var i=0; i<selectObj.options.length; i++)
{
if(selectObj.options[i].value==selectedValue)
{
selectObj.options[i].selected = true;
return true;
}
}
return false;
}
function getGWIfIndexByName(name)
{
var newName = getPortName(name);
var ifIndex="";
var collectionPorts = oPolling.getCollectionExistingPorts();
for(var i = 0 ; collectionPorts[i] != null ; i++ )
{
portIndex = IXML.getText( collectionPorts[i].selectSingleNode("./ifIndex") );
OldPortName =IXML.getText( collectionPorts[i].selectSingleNode("./portName") );
NewPortName = getPortName(OldPortName);
if (newName == NewPortName)
{
ifIndex = portIndex;
break;
}
}
return ifIndex;
}
function fillUnitsPerPort(i_ComboPortsID, i_ComboUnitsID,transType)
{
var comboObjectUnits = document.getElementById(i_ComboUnitsID);
var comboObjectPorts = document.getElementById(i_ComboPortsID);
if(comboObjectUnits == null || comboObjectPorts == null)
return;
var checkTransType = true;
if ((transType == null) || (typeof(transType) == "undefined") || (transType == ""))
checkTransType = false;
if(oPolling.isStack)
{
var collectionPorts = oPolling.getCollectionPortsPerUnit(comboObjectUnits.options[comboObjectUnits.selectedIndex].value.toString());
var value = null;
var text = null;
var option = null;
var trans = null;
comboObjectPorts.options.length = 0 ;
for(var i = 0 ; collectionPorts[i] != null ; i++ )
{
value=IXML.getText( collectionPorts[i].selectSingleNode("./ifIndex") );
text =IXML.getText( collectionPorts[i].selectSingleNode("./portName") );
trans=IXML.getText( collectionPorts[i].selectSingleNode("./transType") );
if ((!checkTransType) || ((checkTransType) && (transType.indexOf(trans) != -1)))
{
option = new Option(_top.getPortName(text,true),text);
comboObjectPorts.options.add(option);
}
}
}
else
{
fillAllPorts(i_ComboPortsID,transType);
}
}
function fillAllPorts(i_ComboPortsID,transType)
{
var checkTransType = true;
if ((transType == null) || (typeof(transType) == "undefined") || (transType == ""))
checkTransType = false;
var comboObjectPorts = document.getElementById(i_ComboPortsID);
var collectionPorts = oPolling.getCollectionExistingPorts();
var value = null;
var text = null;
var option = null;
var trans = null;
comboObjectPorts.options.length = 0 ;
for(var i = 0 ; collectionPorts[i] != null ; i++ )
{
value=IXML.getText( collectionPorts[i].selectSingleNode("./ifIndex") );
if(parseInt(value,10) >= parseInt(_top.trunkFirstIndex))continue;
if(_top.moduleNumPerPortArr[value] == "" || IsUndefined(_top.moduleNumPerPortArr[value]))continue;
text =IXML.getText( collectionPorts[i].selectSingleNode("./portName") );
trans=IXML.getText( collectionPorts[i].selectSingleNode("./transType") );
if ((!checkTransType) || ((checkTransType) && (transType.indexOf(trans) != -1)))
{
option = new Option(_top.getPortName(text,true),text);
comboObjectPorts.options.add(option);
}
}
}
function fillUnitsFromPolling(i_ComboID)
{
var collUnits = oPolling.getCollUnits();
var cntrl = document.getElementById(i_ComboID);
cntrl.options.length = 0;
var text,value,option;
for(var i = 0; i < collUnits.length; i++)
{
value = text = IXML.getText(collUnits[i].selectSingleNode("./moduleNumber"))
option = new Option(text,value);
cntrl.options.add(option);
}
}
function fillLagsProjectStyle(i_ComboID)
{
Util.fillLags(i_ComboID);
var comboObject = document.getElementById(i_ComboID);
for(var i = 0 ; comboObject.options[i] != null ; i++ )
{
if(comboObject.options[i].text.indexOf("LAG") != -1 )
{
comboObject.options[i].text = comboObject.options[i].text.substr(3);
}
}
}
function emptySelect(slct)
{
while(slct.options.length > 0)
slct.remove(0);
}
function gwReset()
{
}
function createPagerLinks(numberOfEntriesPerPage,objName,parentId,TotalEntries)
{
var numberOfPorts = (TotalEntries) ? parseInt(TotalEntries,10) : _top.NumberOfPortPerModuleArr[oPolling.currentUnit];
var text = 1;
var str ="";
var limit = text + parseInt(numberOfEntriesPerPage,10) - 1;
if (limit > numberOfPorts)
limit = numberOfPorts;
for (var i = 0; i < Math.ceil(numberOfPorts / numberOfEntriesPerPage); i++)
{
if (Math.ceil(numberOfPorts / numberOfEntriesPerPage) != 1)
{
if(i==0)
str += '<a class="selectedPagingLink" id="lnk'+i+'"'
else
str += '<a class="pagingLink" id="lnk'+i+'"'
str +=' href="javascript:void(0)" onclick="javascript:'+objName+'.DisplayGroup(' + text + ','+limit+','+true+');setLinkDecoration(\'lnk'+i+'\');top.currPageIndex='+(i+1)+'">[' + text + '-' + limit + ']</a>&nbsp;';
text += parseInt(numberOfEntriesPerPage,10);
limit = text + parseInt(numberOfEntriesPerPage,10) - 1;
if (limit > numberOfPorts)
limit = numberOfPorts;
}
}
document.getElementById(parentId).innerHTML = (str!="")?str:'<img SRC="../styling/images/empty.gif"/>';
}
function vlanCreator(pageObj, VlanTypeList)
{
this.pageObj = pageObj;
this.VLANArray = new Array();
this.VLANListCtrl;
this.VlanTypeList = 1;
if(VlanTypeList != null)
this.VlanTypeList = VlanTypeList;
this.setVLANArray = function()
{
var sectionName;
var VLANSectionField;
var AddDefaultVLAN = false;
switch(this.VlanTypeList)
{
case 1:
sectionName = './/VLANCurrentStatus';
VLANSectionField = './currentVLANs';
break;
case 2:
AddDefaultVLAN = true;
case 3:
sectionName = './/VLANGlobal';
VLANSectionField = './staticVLANs';
break;
default:
sectionName = './/VLANCurrentStatus';
VLANSectionField = './currentVLANs';
break;
}
var VLANStatusXML = Page.dataXml.selectSingleNode(sectionName);
if(VLANStatusXML == null)
return;
var currentVLANs = VLANStatusXML.selectSingleNode(VLANSectionField);
if(currentVLANs == null)
return;
currentVLANs = (currentVLANs)? IXML.getText(currentVLANs) : "";
if(AddDefaultVLAN && currentVLANs.length == 0)
{
AddDefaultVLAN = false;
this.VLANArray.push(_top.defaultVlanId);
}
var firstVLAN, lastVLAN;
var newOpt, newVal;
if(currentVLANs != "")
currentVLANs = currentVLANs.split(',');
for(var i=0; i<currentVLANs.length; i++)
{
startInd = currentVLANs[i].indexOf('-')
if(startInd != -1)
{
firstVLAN = parseInt(currentVLANs[i].substring(0,startInd),10);
lastVLAN = parseInt(currentVLANs[i].substring(startInd + 1),10);
if(AddDefaultVLAN && _top.defaultVlanId < firstVLAN)
{
AddDefaultVLAN = false;
this.VLANArray.push(_top.defaultVlanId);
}
for(var j = firstVLAN; j <= lastVLAN; j++)
this.VLANArray.push(j);
}
else
{
firstVLAN = parseInt(currentVLANs[i],10);
if(AddDefaultVLAN && _top.defaultVlanId < firstVLAN)
{
AddDefaultVLAN = false;
this.VLANArray.push(_top.defaultVlanId);
}
this.VLANArray.push(firstVLAN);
}
}
if(AddDefaultVLAN)
{
AddDefaultVLAN = false;
this.VLANArray.push(_top.defaultVlanId);
}
}
this.setVLANCombobox = function(VLANtdID, VLANListID, VLANListonChange, VLANListClass, selectedValue)
{
var ArrayLength = this.VLANArray.length;
var slctString = '<div class="overr"><select unselectable="on" id="' + VLANListID + '" class="' + VLANListClass + '" onChange="' + VLANListonChange + '">';
for(var i = 0; i < ArrayLength; i++)
{
newVal = this.VLANArray[i];
slctString = slctString + '<OPTION VALUE="' + newVal + '">' + newVal + '</OPTION>';
}
getElement(VLANtdID).innerHTML = slctString + '</select></div>';
/*@cc_on@if(@_jscript){checkStyleWidth(VLANListID)}@end@*/
this.VLANListCtrl = getElement(VLANListID);
if(selectedValue != null)
this.VLANListCtrl.value = selectedValue;
if(this.VLANListCtrl.length == 0)
this.VLANListCtrl.disabled = true;
}
this.setVLANComboboxByOption = function(VLANListCtrl, selectedValue)
{
if(typeof(VLANListCtrl) == 'string')
VLANListCtrl = getElement(VLANListCtrl);
this.VLANListCtrl = VLANListCtrl;
this.VLANListCtrl.options.length = 0;
var ArrayLength = this.VLANArray.length;
for(var i = 0; i < ArrayLength; i++)
{
newVal = this.VLANArray[i];
newOpt = new Option(newVal, newVal);
this.VLANListCtrl.options[i] = newOpt;
}
if(selectedValue != null)
this.VLANListCtrl.value = selectedValue;
if(this.VLANListCtrl.length == 0)
this.VLANListCtrl.disabled = true;
}
}
function some_function(){}
RT.selectRTRow = function(chk)
{
var id = RT.collRT[0][1].ID
RT.getRowData(IXML.getParentElement(IXML.getParentElement(chk)),id) ;
if(!RT.collRT[0][1].isMultiSelect)
{
var x_path= "//tr[@ID and contains(@ID,'r')]";
var collRows = RT.collRT[0][1].xmlData.selectNodes(x_path);
var cntr_row;
for(var i=0;i<collRows.length;i++ ){
cntr_row = document.getElementById(collRows[i].getAttribute("ID"))
var cntr = IXML.getChildElement(IXML.getChildElement(cntr_row,1),1);
if(cntr){
switch(cntr.type)
{
case "checkbox": cntr.checked=false;
}
};
}
chk.checked= true
}
};
RT.checkAll = function(id,css_class,ctr)
{
if (ctr.checked==true)
RT.selectAll(id,css_class);
else
RT.deselectAll(id,css_class);
};
Util.disabled=function(arr_RelatedID,bool)
{
var i,control
for(i=0;i<arr_RelatedID.length;i++)
{
control=document.getElementById(arr_RelatedID[i]);
if(control)
{
switch(control.type.toLowerCase())
{
case "text":
control.className=bool?"disableElement":"enableElement" ;
if(bool)
control.value="";
break;
case "select":
case "select-one":
if(bool)
control.selectedIndex=0;
}
control.disabled=bool;
}
}
}
Validator.prototype.customValidate = function(nodeForValid, xmlNode,field_name,val)
{
if(!xmlNode)return true;
var id = xmlNode.getAttribute("ID");
var ctr = document.getElementById(id) ;
var val = ctr.value;
var retVal=true;
var valid_type = xmlNode.getAttribute("VALID_TYPE");
this.errMsg="OID Subtree is not valid.";
switch(valid_type)
{
case "19":
if(!this.checkOid(val))
{
return false;
}
var regexp = /^\.?(1(\.(\d+|))*)$/
var result = regexp.test(val);
if (!result)
{
return false;
}
break;
case "20":
if(!this.checkUnicastIP(val))
{
this.errMsg=val+" is not a Unicast IP Address.";
return false;
}
break;
case "22":
if(!this.checkIP(val))
{
this.errMsg=val+" is not an IP Address.";
return false;
}
break;
case "23":
if(!this.checkOUI(val))
{
this.errMsg=val+ " is not a Prefix Mac address. Value must be 3 pairs of Hexa digits(0..9,a..f) separated by '-'.";
return false;
}
break;
case "24":
var specialCharsArr=new Array(
String.fromCharCode(169),
String.fromCharCode(174),
String.fromCharCode(64),
String.fromCharCode(60),
String.fromCharCode(62),
"&",
"%",
"#",
"$",
"^"
);
if(!this.checkSpecialChars(val,specialCharsArr))
{
this.errMsg="Field "+field_name+" should contain a valid string without special characters "+this.buildSpecialCharsList(specialCharsArr)+".";
return false;
}
break;
case "30":
case "31":
case "32":
case "33":
if(!this.checkIPv6(val,valid_type))return false;
break;
}
return true;
};
Validator.prototype.buildSpecialCharsList = function(specialCharsArr)
{
var list="(";
for(var i=0;i<specialCharsArr.length;i++)
list+=specialCharsArr[i]+",";
list=list.substr(0,list.length-1)+")";
return list;
}
Validator.prototype.checkSpecialChars = function(stringToCheck,specialCharsArr)
{
for (var i=0;i<specialCharsArr.length;i++)
{
if(stringToCheck.indexOf(specialCharsArr[i])>-1)
return false;
}
return true;
}
Validator.prototype.checkIPv6 = function(val,valid_type)
{
switch (valid_type)
{
case "30":
if(!this.checkIPv6General(val))return false;
break;
case "31":
if(!this.checkIPv6Local(val))return false;
break;
case "32":
if(!this.checkIPv6Global(val))return false;
break;
case "33":
if(!this.checkIPv6Multicast(val))return false;
break;
}
return true;
}
Validator.prototype.checkIPv6General = function(val)
{
val = this.changeIPv4ToHex(val);
for(var i=0;i<val.length;i++)
{
var x=val.charCodeAt(i);
if ( (x < 48) || ((x > 58) && (x < 65)) || ((x > 70) && (x < 97)) || (x > 102))
{
this.errMsg = 'Field ' + this.field_name + ' should contain only groups of up to 4 hexadecimal characters separated by ":" (IPv4 tunneling is also allowed)';
this.buildMessage();
return false;
}
}
var consecColonsChar=0;
for(i=0;i<val.length-1;i++)
{
if(val.charAt(i)==":")
{
if(val.charAt(i+1)==":")
consecColonsChar++;
}
}
if(consecColonsChar>1)
{
this.errMsg = 'Field ' + this.field_name + ' should not contain more than one appearance of "::"';
this.buildMessage();
return false;
}
val = this.addZeroGroups(val);
var valArr = val.split(":");
if(valArr.length!=8)
{
this.errMsg = 'Field ' + this.field_name + ' contains an invalid number of groups';
this.buildMessage();
return false;
}
for(i=0;i<valArr.length;i++)
{
if(valArr[i].length==0)
{
this.errMsg = 'Field ' + this.field_name + ' should not contain groups with empty value';
this.buildMessage();
return false;
}
if(valArr[i].length>4)
{
this.errMsg = 'Field ' + this.field_name + ' should contain only groups of up to 4 hexadecimal characters separated by ":" (IPv4 tunneling is also allowed)';
this.buildMessage();
return false;
}
}
return true;
}
Validator.prototype.checkIPv6Local = function(val)
{
if(!this.checkIPv6General(val))
return false;
val = this.changeIPv4ToHex(val);
val = this.addZeroGroups(val);
var valArr=val.split(":");
if(valArr[0].toLowerCase()!="fe80")
{
this.errMsg = 'Value in Group 1 in field ' + this.field_name + ' should be "fe80"';
this.buildMessage();
return false;
}
if(valArr[1]!=0 || valArr[2]!=0 || valArr[3]!=0)
{
this.errMsg = 'Value in Groups 2-4 in field ' + this.field_name + ' should be "0"';
this.buildMessage();
return false;
}
return true;
}
Validator.prototype.checkIPv6Multicast = function(val)
{
if(!this.checkIPv6General(val))
return false;
var valArr=val.split(":");
if(valArr[0].toLowerCase()<"ff")
{
this.errMsg = 'Value in Group 1 in field ' + this.field_name + ' should be "ff00" or higher';
this.buildMessage();
return false;
}
return true;
}
Validator.prototype.checkIPv6Global = function(val)
{
if(!this.checkIPv6General(val))
return false;
if(this.checkIPv6Local(val))
{
this.errMsg = 'Field ' + this.field_name + ' should not contain a link-local address'
this.buildMessage();
return false;
}
if(this.checkIPv6Multicast(val))
{
this.errMsg = 'Field ' + this.field_name + ' should contain a unicast address'
this.buildMessage();
return false;
}
return true;
}
Validator.prototype.addZeroGroups = function(val)
{
var i=val.indexOf("::"),j=0;
if(i==-1) return val;
var colonsNum=0;
for(;j<val.length;j++)
{
if(val.charAt(j)==":")
colonsNum++;
}
if(colonsNum>=9) return val;
if(colonsNum==8 && i!=val.length-2 && i!=0) return val;
var tempString="";
while(8-colonsNum++!=0)
tempString+=":0"
val = val.substring(0,i) + tempString + val.substring(i+1);
if(i==0)
val = "0:" + val.substring(1);
if(i==j-2)
val = val + "0";
return val;
}
Validator.prototype.changeIPv4ToHex = function(val)
{
var i=val.lastIndexOf(":")+1;
if(this.checkIP(val.substring(i)) && val.substring(i)!="")
val = val.substring(0,i) + "0:0";
return val;
}
Validator.prototype.checkOid = function(stringTocheck)
{
var OIDArr=stringTocheck.split(".");
for (var i=0; i<OIDArr.length; i++)
{
if (parseInt(OIDArr[i])>2147483647 || OIDArr[i]=="")
return false;
}
return true;
}
Validator.prototype.checkUnicastIP = function (stringToCheck)
{
if(stringToCheck=="") return true;
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(stringToCheck))return false;
else if(stringToCheck=="0.0.0.0")return false;
else
{
stringToCheck=stringToCheck.split(".")
if(stringToCheck[0]>223 || stringToCheck[0]<=0 || (stringToCheck[0].length>1 && stringToCheck[0].charAt(0)=="0") || stringToCheck[0]==127 )return false;
for(var i=1;i<4;i++)
if(stringToCheck[i]>255 || stringToCheck[i]<0 || (stringToCheck[i].length>1 && stringToCheck[i].charAt(0)=="0") )return false;
}
return true;
}
Validator.prototype.checkIP = function (stringToCheck)
{
if(stringToCheck=="") return true;
if(!/(^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)/.test(stringToCheck))return false;
stringToCheck=stringToCheck.split(".");
for(var i=0;i<4;i++)
if(stringToCheck[i]>255 || stringToCheck[i]<0 || (stringToCheck[i].length>1 && stringToCheck[i].charAt(0)=="0") )return false;
return true;
};
Validator.prototype.checkOUI = function (stringToCheck)
{
if( (!/(^[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}-[A-Fa-f0-9]{2}$)/.test(stringToCheck)))
{
return false;
}
return true;
};
PageManager.prototype.checkValidResponse = function (xml) {
var msg = "";
var severity = 1;
var pgMsgRes = 1;
var pgMsgDictIdArr;
if (_top.MACMULTICASTIPMULTICAST) {
pgMsgDictIdArr = ["", "2410018", "13000", "", ""];
}
else {
pgMsgDictIdArr = ["", "13095", "13000", "", ""];
};
var status = true;
if (xml && null == IXML.getChildElement(xml, 1))
{
if (null == xml)
{
msg = "XML receiving is failed.";
severity = 4;
pgMsgRes = 3;
}
status = false;
}
else
{
var actionStatusNode = xml.selectNodes("//ActionStatus")[0];
if (null == actionStatusNode )
{
msg = "XML is not well formed: ActionStatus section does not exist";
severity = 4;
pgMsgRes = 4;
this.status = -1;
this.wait(false);
status = false;
}
else if (IXML.getText(actionStatusNode.selectSingleNode(".//statusCode")) != 0)
{
this.status = IXML.getText(actionStatusNode.selectSingleNode(".//statusCode"));
msg = IXML.getText(actionStatusNode.selectSingleNode(".//statusString"));
var errValue = IXML.serialize(actionStatusNode);
var errMsgObj = ParseServerErrorMessages(errValue, "1");
severity = 4;
pgMsgRes = 0;
this.wait(false);
status = false;
}
else
{
switch (_top.STYLING.successMsgNS.msgType)
{
case 0:
msg = _top.STYLING.successMsg;
pgMsgRes = 2;
break;
case 1:
msg = _top.STYLING.successMsgNS.msgText.replace(/(?=<\/a>)/i, _top.STYLING.successMsgNS.linkText);
break;
}
}
}
_top.STYLING.successMsgNS.msgType = 1;
if (_top.STYLING.afterPOST.search(/:shown/) == -1)
{
if (!IsUndefined(oNavigator) && (oNavigator.get_Url(oNavigator.selectedTab).search(_top.STYLING.afterPOST) > 1))
{
AlterPageMessage(msg, severity, true);
if (pgMsgRes == 0)
pgMsgTknObj.setServerMessageToken("pageMessageLine0", errMsgObj.msgId, msg, errMsgObj.argArr);
else if (pgMsgRes == 1)
pgMsgTknObj.setToken("pageMessageLine0", pgMsgDictIdArr[pgMsgRes], [[TKN_CALLBACK, LocalizeSuccessMessageLink]]);
else if (pgMsgDictIdArr[pgMsgRes])
pgMsgTknObj.setToken("pageMessageLine0", pgMsgDictIdArr[pgMsgRes]);
_top.STYLING.afterPOST += ":shown";
}
else if (!IsUndefined(_top.modalWindow) && !_top.modalWindow.closed &&
_top.STYLING.afterPOST.search(_top.modalWindow.location.pathname) > -1)
{
_top.modalWindow.AlterPageMessage(msg, severity, true);
if (pgMsgRes == 0)
_top.modalWindow.pgMsgTknObj.setServerMessageToken("pageMessageLine0", errMsgObj.msgId, msg, errMsgObj.argArr);
else if (pgMsgRes == 1)
_top.modalWindow.pgMsgTknObj.setToken("pageMessageLine0", pgMsgDictIdArr[pgMsgRes], [[TKN_CALLBACK, LocalizeSuccessMessageLink]]);
else if (pgMsgDictIdArr[pgMsgRes])
_top.modalWindow.pgMsgTknObj.setToken("pageMessageLine0", pgMsgDictIdArr[pgMsgRes]);
ResizeWindow(_top.modalWindow);
_top.STYLING.afterPOST += ":shown";
if (_top.modalWindow.location.pathname.search(/GW[\\\/]PopUp\.htm/i) == -1 &&
_top.STYLING.alertBox.closeDialog)
{
_top.STYLING.alertBox.closeDialog = false;
_top.modalWindow.close();
}
}
else
{
AlterPageMessage(null, null, false);
pgMsgTknObj.removeToken("pageMessageLine0");
}
}
return status;
function LocalizeSuccessMessageLink() {
var linkText = pgMsgTknObj.getText("13096");
return pgMsgTknObj.successMsgLink.replace(/(?=<\/a>)/i, linkText);
}
}
PageManager.prototype.send = function (action,callback,sender)
{
if (PageManager.IS_MOCKUP) return;
var async=true;
var postedSet_xml,postedDelete_xml,posted_xml;
if (action && action!=ACTION_DELETE && action!=ACTION_SET)
{
postedSet_xml = $d("//" + DATAROOT);
if (this.buildPostXml(postedSet_xml))
{
if (this.validPostXml(postedSet_xml))
{
this.setSectionAction(postedSet_xml,action);
this.post(postedSet_xml,async,action,callback,sender);
}
else
{
this.wait(false);
closeUnchangedDialog();
}
oNavigator.navigate(oNavigator.selectedTab);
}
return;
}
posted_xml=this.joinXmlPost();
if(this.buildPostXml(posted_xml))
{
if(this.validPostXml(posted_xml))
this.post(posted_xml,async,action,callback,sender);
else
{
this.wait(false);
closeUnchangedDialog();
}
oNavigator.navigate(oNavigator.selectedTab);
}
function closeUnchangedDialog()
{
if (typeof _top.modalWindow != "undefined" && !_top.modalWindow.closed && _top.STYLING.alertBox.closeDialog)
{
_top.STYLING.alertBox.closeDialog = false;
_top.modalWindow.close();
}
}
}
PageManager.prototype.post = function(posted_xml,async,action,callback,sender)
{
if (PageManager.IS_MOCKUP)return;
var post_data;
var cbo = new CallBackObject((sender)?sender:null);
if (callback)
{
if (sender)
{
if (typeof(callback) == "string")
this.OnComplete = eval(callback);
else
this.OnComplete = callback;
}
else
cbo.OnComplete = eval(callback);
}
else
{
cbo.OnComplete=PageManager.cbo_Complete_Post;
this.wait(true);
}
post_data = "<?xml version='1.0' encoding='utf-8'?>" + IXML.serialize(posted_xml);
if (_IXML_IS_IE && DEBUG == true && POST_XML_PATH != "")
Util.debug_saveXml(post_data,POST_XML_PATH);
AlterAfterPostGW(true);
cbo.DoCallBack(post_data, this.setPostURL(), async, "POST", action);
this.dataXml_delete = null;
}
PageManager.prototype.complete = function()
{
try
{
_top.checkLogoutTimeout(true);
this.evalControlsEvent("onload");
this.updateXmlMaster();
this.initPageObjects();
if ((typeof RT != 'undefined' && RT.collRT.length > 0) || (opener && opener.RT.collRT.length > 0))
RT.updateRelatedFields();
this.evalMasterEvent("onload");
StylingInit();
}
catch(e)
{_top.MsgLog.addMsg(e.message, "Warning", e.name)}
newbodySize(document.getElementById('gwBody'),false)
}
RT.prototype.complete_get = function(responseText,responseXML)
{
_top.checkLogoutTimeout(true);
this.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText))
{
var xml = IXML.getDomDocument();
if(document.evaluate){
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
} else{
xml.loadXML(responseText);
}
if(null==IXML.getChildElement(xml,1))return;
if(xml.documentElement.selectSingleNode("//" + this.dataSectionName)){
var sectionNode_restored = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName + "[@action='restore']");
if(sectionNode_restored){
var removed=Page.dataXml.documentElement.removeChild(sectionNode_restored);
delete removed;
};
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
if(null==sectionNode)
{
Page.createSectionXml(this.dataSectionName,Page.dataXml,"");
sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
}
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + this.dataSectionName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
if(this.callback!=""){
var callback = this.callback;
this.callback = "";
}
this.konstructor(this.masterNode, this.container.id);
this.transform();
this.onobjectsinit();
this.onload();
if(callback)eval(callback);
}
}
}
StylingInit();
newbodySize(document.getElementById('gwBody'),false)
};
BaseTable.prototype.post=function(posted_xml,async,action,callback)
{
if(PageManager.IS_MOCKUP) return;
var post_data;
var action = (null==action)?"wcd":action;
var async=(null==async)?true:async;
var sender=(null==arguments[4])?this:arguments[4];
var cbo = new CallBackObject(sender);
if(typeof(callback)=="string")
this.OnComplete = eval(callback);
else if (typeof callback == "function" )
this.OnComplete = callback;
else
this.OnComplete = this.complete_post;
post_data="<?xml version='1.0' encoding='utf-8'?>" + IXML.serialize(posted_xml);
if(_IXML_IS_IE && DEBUG==true ){
if(POST_XML_PATH!="")
Util.debug_saveXml(post_data,POST_XML_PATH);
}
AlterAfterPostGW(true);
cbo.DoCallBack(post_data,"wcd",async,"POST",action);
};
PageManager.prototype.load_complete = function()
{
try
{
this.wait(false);
this.enumNode = $m("//ENUM");
this.translateEnumXmlToJs();
this.placeHolder.innerHTML = this.transform(this.masterXml);
setTimeout("Page.complete()", 50);
}
catch(e)
{
this.wait(false);
};
}
PageManager.prototype.translateEnumXmlToJs = function()
{
var that = this;
if (null == that.enumNode)
return;
var toVal, children, val, txt;
var enums = that.enumNode.selectNodes("./*");
for (var i = 0; i < enums.length; i ++)
{
children = enums[i].selectNodes("./*");
toVal = {};
for (var j = 0; j < children.length; j ++)
{
val = children[j].getAttribute("VALUE");
txt = IXML.getText(children[j]);
txt = _top.localization.lngMg.getText(txt);
toVal[val] = txt;
};
ReplaceEnum(enums[i].nodeName, toVal);
};
function ReplaceEnum(enumName, enumHash)
{
if (typeof that.enumToData == "undefined" || !that.enumToData)
that.enumToData = {};
that.enumToData[enumName] = {};
if (typeof that.enumToVal == "undefined" || !that.enumToVal)
that.enumToVal = {};
that.enumToVal[enumName] = {};
var str = "";
for (var val in enumHash)
{
str = enumHash[val].toString();
that.enumToData[enumName][val] = str;
that.enumToVal [enumName][str] = val;
}
}
}
PageManager.prototype.localize = function()
{
this.translateEnumXmlToJs();
for (var i = 0; i < RT.collRT.length; i ++)
UpdateRtEnums(i);
function UpdateRtEnums(idx)
{
var txt, node;
var xPath = "//*[@BIND and @ENUM='true']";
var len = RT.collRT[idx][1].xmlData.selectNodes(xPath).length;
for (var i = 0; i < len; i ++)
{
node = RT.collRT[idx][1].xmlData.selectNodes(xPath)[i];
txt = Page.getEnumData(node.getAttribute("BIND"), node.getAttribute("VALUE"));
IXML.setText(RT.collRT[idx][1].xmlData.selectNodes(xPath)[i], txt);
}
}
}
PageManager.prototype.finalizePost = function (responseText, responseXML)
{
var selectedUnit=oPolling.currentUnit
Page.wait(false);
Page.checkValidResponse(responseXML);
Page.dispose();
Page.reload();
if (window.opener) {
opener.Page.dispose();
opener.Page.reload();
}
oPolling.currentUnit=selectedUnit;
}
RT.localize = function(tblID, elemIdPrefix)
{
RT.activeID = tblID;
var idx = RT.findIndex(RT.activeID);
if (null == idx)
return false;
var id, elem, xPath, node, val, enumName, txt;
var bitMaskId, bitMaskNode, delimiter;
var i = 0;
while (!IsUndefOrNull(document.getElementById(elemIdPrefix + i + "_" + tblID)))
{
id = elemIdPrefix + i + "_" + tblID;
elem = document.getElementById(id);
xPath = "//*[@ID='" + id + "']";
node = RT.collRT[idx][1].xmlData.selectNodes(xPath)[0];
if (node.getAttribute("TYPE") == "bitmask")
{
bitMaskId = node.getAttribute("BMSK_ID");
delimiter = node.getAttribute("DELIMETER");
id = $m("//*[@BMSK_ID='" + bitMaskId + "']").getAttribute("ID");
bitMaskNode = Page.findNodeByUniqID(bitMaskId);
val = IXML.getText($dcol("//" + bitMaskNode.getAttribute("BIND"))[i]);
txt = Page.processor.findBitMaskData(null, bitMaskNode, delimiter, id, val);
}
else
{
val = node.getAttribute("VALUE");
enumName = node.getAttribute("BIND").replace(/^.*\//, "");
txt = Page.getEnumData(enumName, val);
}
elem.innerHTML = txt;
i ++;
}
}
Transform.prototype.get_bitvalue = function(num, bmsk_node, rel_id)
{
var xpath = "./bits/*[name()='bit" + num + "'";
if (rel_id)
xpath += " and @RELATED_ID='" + rel_id + "'";
xpath += "]";
var bit_node = bmsk_node.selectSingleNode(xpath);
if (null == bit_node)
return null;
var bit_bind = "";
if (bit_node.attributes.getNamedItem("BIND"))
bit_bind = bit_node.getAttribute("BIND");
var bit_data = "";
if (bit_bind != "")
{
bit_data = IXML.getText($d("//" + bit_bind));
IXML.setText(bit_node, bit_data);
}
else
{
bit_data = IXML.getText(bit_node);
bit_data = _top.localization.lngMg.getText(bit_data)
}
return bit_data;
};
PageManager.prototype.cboTimeout = {
timeout: 60,
dictId: 16008,
paramList: null
};
CallBackObject.prototype.DoCallBack= function(data,url,bAsync,method,action)
{
var i;
var theData = data;
var that = this;
var thePage = url;
if (this.XmlHttp)
{
if (this.XmlHttp.readyState == 4 || this.XmlHttp.readyState == 0)
{
this.XmlHttp.open(method, thePage, bAsync);
try{this.XmlHttp.responseType = 'msxml-document';}catch(e){}
this.XmlHttp.onreadystatechange = function() {that.ReadyStateChange();};
this.XmlHttp.setRequestHeader('Content-Type', 'data:text/xml;charset=utf-8');
if (action != null)
this.XmlHttp.setRequestHeader('QueryString', 'action=' + action);
this.XmlHttp.send(theData);
if (Page.cboTimeout.timeout) {
this.timeoutId = setTimeout(abortOnTimeout, Page.cboTimeout.timeout * 1000);
}
}
}
return;
function abortOnTimeout() {
Page.wait(false);
pgMsgTknObj.displayLocalizedPageMessage(null, Page.cboTimeout.dictId, 4, true, Page.cboTimeout.paramList);
that.XmlHttp.abort();
document.getElementById("xmlresult").innerHTML = "";
}
};
CallBackObject.prototype.OnAbort = function(){};
CallBackObject.prototype.ReadyStateChange = function()
{
if (this.XmlHttp.readyState == 1)
this.OnLoading();
else if (this.XmlHttp.readyState == 2)
this.OnLoaded();
else if (this.XmlHttp.readyState == 3)
this.OnInteractive();
else if (this.XmlHttp.readyState == 4)
{
clearTimeout(this.timeoutId);
Page.cboTimeout.timeout = 300;
Page.cboTimeout.dictId = 16008;
if (this.XmlHttp.status == 0)
this.OnAbort();
else if ((this.XmlHttp.status == 200 && this.XmlHttp.statusText == "OK") || _IXML_IS_MOZ)
{
if (this.sender)
{
this.sender.OnComplete(this.XmlHttp.responseText, this.XmlHttp.responseXML);
this.sender = null;
}
else
this.OnComplete(this.XmlHttp.responseText, this.XmlHttp.responseXML);
}
else
this.OnError(this.XmlHttp.status, this.XmlHttp.statusText, this.XmlHttp.responseText);
}
};
Navigation.localInformation_url = function()
{
var url="wcd?{file=/GW/LLDP/LLDPMEDInformationTable.xml}{LLDPGlobalAdvertisementStatus}{LLDPMEDAdvertisementInterfaceList";
if(oPolling.isStack)
{
var query = "&UnitID=" + Navigation.getCurrentUnit();
url += query;
url += "}{LLDPInterfaceList";
url += query;
url+="}{LLDPMEDInterfaceList";
url += query;
url+="}{LLDPMEDNeighborList";
url += query;
url+="}";
}
else
{
url+="}{LLDPInterfaceList}{LLDPMEDInterfaceList}{LLDPMEDNeighborList}";
}
return url;
}
Navigation.greenEthGreenEthernet_url = function()
{
if (_top.eeeSupported) {
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet.xml}{GreenEthGlobalSetting}{EEEGlobalSetting}{CableTestPortList&filter=(testType=4&&resultUnits=13)}";
if(oPolling.isStack)
{
var unitQuery = "&UnitID=" + _top.firstPresentModule;
url += "{EEEInterfaceList"+unitQuery+"}";
url += "{EEELLDPInterfaceList"+unitQuery+"}";
url += "{GreenEthSavingTypeList"+unitQuery+"}";
}
else
url += "{EEEInterfaceList}{EEELLDPInterfaceList}{GreenEthSavingTypeList}";
} else {
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet.xml}{GreenEthGlobalSetting}{CableTestPortList&filter=(testType=4&&resultUnits=13)}";
if(oPolling.isStack)
{
var unitQuery = "&UnitID=" + _top.firstPresentModule;
url += "{GreenEthSavingTypeList"+unitQuery+"}";
}
else
url += "{GreenEthSavingTypeList}";
}
return url;
}
Navigation.greenEthPortSettings_url = function()
{
if(_top.eeeSupported)
{
var url = (_top.shortReachSupported || oPolling.isStack)?"wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_PORTS_master.xml}{GreenEthGlobalSetting}{EEEGlobalSetting}{CableTestPortList&filter=(testType=4&&resultUnits=13)}":"wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_PORTS_FE_master.xml}{GreenEthGlobalSetting}{EEEGlobalSetting}";
if(oPolling.isStack)
{
var unitQuery = "&UnitID=" + _top.firstPresentModule;
url += "{EEEInterfaceList"+unitQuery+"}";
url += "{EEELLDPInterfaceList"+unitQuery+"}";
url += "{GreenEthSavingTypeList"+unitQuery+"}";
}
else
url += "{EEEInterfaceList}{EEELLDPInterfaceList}{GreenEthSavingTypeList}";
}
else
{
var url = (_top.shortReachSupported || oPolling.isStack)?"wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_PORTS_master.xml}{GreenEthGlobalSetting}{CableTestPortList&filter=(testType=4&&resultUnits=13)}":"wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_PORTS_FE_master.xml}{GreenEthGlobalSetting}";
if(oPolling.isStack)
{
var unitQuery = "&UnitID=" + _top.firstPresentModule;
url += "{GreenEthSavingTypeList"+unitQuery+"}";
}
else
url += "{GreenEthSavingTypeList}";
}
return url;
}
Navigation.greenEthProperties_url = function()
{
var url = "wcd?{file=/GW/Bridging/PortManagement/GreenEthernet_Props_master.xml}{GreenEthGlobalSetting}";
if(_top.eeeSupported)
url += "{EEEGlobalSetting}";
return url;
}
Navigation.localInformationDetails_url = function()
{
var firstPortNode = oPolling.getCollectionExistingPorts()[0];
var ifName = IXML.getText( firstPortNode.selectSingleNode("./portName") );
var url;
if(_top.eeeSupported)
url = "wcd?{file=/GW/LLDP/LLDPMEDPortSettingsDetails.xml}{LLDPMEDAdvertisementInterfaceList&interfaceName="+ifName+"}{LLDPGlobalAdvertisementStatus}{LLDPMEDInventories}{LLDPDot3AdvertisementInterfaceList&interfaceName="+ifName+"}{LLDPOverloadingGroupList&interfaceName="+ifName+"}{EEELLDPLocalInterfaceList&interfaceName="+ifName+"}{EEELLDPRemoteInterfaceList&interfaceName="+ifName+"}{EEELLDPInterfaceList&interfaceName="+ifName+"}{LLDPMEDNeighborList&filter=(interfaceName='"+ifName+"')}";
else
url = "wcd?{file=/GW/LLDP/LLDPMEDPortSettingsDetails.xml}{LLDPMEDAdvertisementInterfaceList&interfaceName="+ifName+"}{LLDPGlobalAdvertisementStatus}{LLDPMEDInventories}{LLDPDot3AdvertisementInterfaceList&interfaceName="+ifName+"}{LLDPOverloadingGroupList&interfaceName="+ifName+"}{LLDPMEDNeighborList&filter=(interfaceName='"+ifName+"')}";
return url;
}
Navigation.GVRP_URL = function()
{
var firstPortNode = oPolling.getCollectionExistingPorts()[0];
var ifName = IXML.getText( firstPortNode.selectSingleNode("./portName") );
var url = "wcd?{file=/GW/IfStats/gvrpStats.xml}{GVRPOperationStatistics&interfaceName="+ifName+"}{GVRPErrorStatistics&interfaceName="+ifName+"}{GVRPSetting&interfaceName="+ifName+"}";
return url;
}
Navigation.PVM_URL = function()
{
_top.PVMIFTYPE = 1;
var url="wcd?{file=/GW/VlanManagement/portToVLANMembership_m.xml}{VLANGlobal}{DfltVLANMembershipList}{Standard_802_1xGlobalSetting";
if(oPolling.isStack)
{
if(_top.productFamily != 1)
url += "}{Standard_802_1xInterfaceList&UnitID="+_top.firstPresentModule;
var query = "&interfaceType=1&UnitID="+_top.firstPresentModule;
url += "}{Standard802_3List";
url += query;
url+="}{VLANMembershipInterfaceList";
url += query;
url+="}{InternalVLANInterfaceList";
url += query;
url+="}{DfltVLANTagIfList";
url += query;
url+="}";
oPolling.currentUnit=_top.firstPresentModule;
}
else
{
if(_top.productFamily != 1)
url += "}{Standard_802_1xInterfaceList";
url+="}{Standard802_3List&interfaceType=1}{VLANMembershipInterfaceList&interfaceType=1}{DfltVLANTagIfList&interfaceType=1}{InternalVLANInterfaceList&interfaceType=1}";
}
return url;
}
Navigation.SPS_URL = function ()
{
var url="wcd?{file=/GW/Smartport/SmartportPortSettings.xml}{AutoSmartPortGlobalSetting}";
if(oPolling.isStack)
{
var query = "&UnitID=" + Navigation.getCurrentUnit();
url += "{AutoSmartPortInterfaceList" + query + "&interfaceType=1}";
url += "{Standard802_3List" + query + "}";
}
else
url += "{AutoSmartPortInterfaceList&interfaceType=1}{Standard802_3List}";
return url;
};
Navigation.buildScreenUrl = function (url)
{
if(oPolling.isStack)
{
var query = "&UnitID=" + Navigation.getCurrentUnit();
url = url + query + "}";
}
else
url = url + "}";
return url;
};
Navigation.getCurrentUnit = function()
{
for(var i=1;i<=oPolling.TypePerModuleArr.length;i++)
{
if(oPolling.TypePerModuleArr[i]!=-1)
return i;
}
return 1;
};
Class(CustomTransform).Extends(Transform);
function CustomTransform()
{
this.konstructor = function()
{
this.superclass();
};
this.buildHTML = function(node)
{
this.superclass(node);
var name = node.nodeName.toLowerCase();
switch(name)
{
case "checkboxcontrol" : this.createChkCntrl(node);break;
case "h2": this.createHeader2(node);break;
}
}
}
CustomTransform.prototype.createChkCntrl = function(node)
{
try
{
var _id = node.getAttribute("ID");
if(!_id)_id = "cb1";
var _onclick = node.getAttribute("ONCLICK");
this.result.BeginNode("table");
this.result.Attrib("id",_id + "_tbl");
this.result.BeginNode("tr");
this.result.BeginNode("td");
this.result.BeginNode("input");
this.result.Attrib("type", "checkbox");
if(_onclick)this.result.Attrib("onclick","javascript:"+_onclick);
this.result.Attrib("id", _id);
this.result.Attrib("name", _id);
this.result.EndNode();
this.result.BeginNode("label");
this.result.Attrib("for", _id);
this.result.EndNode();
this.result.EndNode();
this.result.BeginNode("td");
this.result.Attrib("class", "right");
this.result.Attrib("id", _id + "_lblWrapper");
this.result.EndNode();
this.result.EndNode();
this.result.EndNode();
}catch(e){if(DEBUG)alert("Error occurred in CustomTransform.createChkCntrl***" + e.description)}
}
CustomTransform.prototype.createHeader2 = function(node)
{
try
{
var _id = node.getAttribute("ID");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _text = IXML.getText(node);
this.b("h2");
if(_id)this.a("id",_id);
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_text)this.result.WriteString(_text.xmlEncode());
this.e();
}catch(e){if(DEBUG)alert("Error occurred in CustomTransform.createHeader2***" + e.description)}
};
Transform.prototype.createRadio = function(node)
{
var _name = node.getAttribute("NAME");
var _id = node.getAttribute("ID");
var _enabled = node.getAttribute("ENABLED");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _title = node.getAttribute("TOOLTIP");
var _onclick = node.getAttribute("ONCLICK");
var _checked = node.getAttribute("CHECKED");
var _checked_value = node.getAttribute("CHECKED_VALUE");
var _bind = node.getAttribute("BIND");
if(_bind && null==_checked_value)
{
this.b("span");
this.a("name","DiagnoseSpan");
this.a("style","display:none");
this.result.WriteString("radio requirement violation:when using attribute BIND, HECKED_VALUE are mandatory ");
this.e();
}
this.b("input");
this.a("type","radio");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_enabled=="false")this.a("disabled","true");
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_title)this.a("title",_title);
if(_onclick)this.a("onclick",_onclick);
if(_checked=="true")this.a("checked",_checked);
var _data;
if(_bind)
{
_data = this.findData(_bind,null,null);
if(_checked_value && _checked_value==_data)
{
this.a("checked","true");
this.a("value",_data);
}
}
this.e();
this.b("label");
this.a("for",_id);
this.e();
};
Transform.prototype.createCheckbox = function(node)
{
var _id ;
var _data = (arguments[1])?arguments[1]:null;
var _row_pos = (arguments[2])?arguments[2]:null;
var _cell_pos = (arguments[3])?arguments[3]:null;
var _table_id = (arguments[4])?arguments[4]:null;
var _id;
if(_row_pos && _cell_pos && _table_id)
_id = "chb_" + (_cell_pos-1) + "_" + (_row_pos-1) + "_" + _table_id;
else
_id = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _title = node.getAttribute("TOOLTIP");
var _enabled = node.getAttribute("ENABLED");
var _onclick = node.getAttribute("ONCLICK");
var _title = node.getAttribute("TOOLTIP");
var _type = node.getAttribute("TYPE");
var _bind = node.getAttribute("BIND");
var _enum = node.getAttribute("ENUM");
var _filter = node.getAttribute("FILTER");
var _submit = node.getAttribute("SUBMIT");
var _valid_type = node.getAttribute("VALID_TYPE");
var _checked_value = node.getAttribute("CHECKED_VALUE");
var _unchecked_value = node.getAttribute("UNCHECKED_VALUE");
var _checked = node.getAttribute("CHECKED");
var _val=null;
if(this.params["tableMode"]==1)
{
_val = node.getAttribute("VALUE");;
}
else
{
if(_bind){
if(_data)
{
if( _type)
{
if( _type.toLowerCase()=="bitmask")
{
var bmsk_id = node.getAttribute("BMSK_ID");
var rel_id = node.getAttribute("ID");
var delim = node.getAttribute("DELIMETER");
_val = this.findBitMaskData(null,Page.findNodeByUniqID(bmsk_id),(delim)?delim:"",rel_id,_data);
}
else
_val = this.findData(_bind,_enum,_filter,_type);
}
else
_val = _data;
}
else
_val = this.findData(_bind,_enum,_filter);
}
}
this.b("input");
this.a("type","checkbox");
if(_id)this.a("id",_id);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_title)this.a("title",_title);
if(_bind)this.a("bind",_bind);
if(_checked_value)this.a("checked_value",_checked_value);
if(_unchecked_value)this.a("unchecked_value",_unchecked_value);
if(_enabled=="false")this.a("disabled","true");
if(_checked=="true")this.a("checked","true");
if(_checked_value && (_checked_value==_val))
{
this.a("checked","true");
this.a("value",_val);
}
if((_bind && _submit=="true") || _valid_type)
{
var evnt=(_onclick)?_onclick + ";" + this.createControlManager(node):this.createControlManager(node);
this.a("onclick",evnt);
}
else if(_onclick)
this.a("onclick",_onclick);
this.e();
this.b("label");
this.a("for",_id);
this.e();
};
Transform.prototype.createTableCaption = function(node)
{
var _id = node.getAttribute("ID");
var _style = node.getAttribute("STYLE");
var _class = node.getAttribute("CLASS");
var _text = IXML.getText(node);
var _paging = node.getAttribute("PAGINATION");
this.b("caption");
if(_style)this.a("style",_style);
if(_class)this.a("class",_class);
if(_text)this.result.WriteString(_text.xmlEncode());
this.b("span");
if(_id)this.a("id",_id);
if(_top.isSafari)
this.a("class","tblNameSafari");
else
this.a("class","tblName");
this.result.XML.push("></"+this.result.Nodes.pop()+">");
this.result.State="";
if(_paging)
{
this.b("span");
this.a("id",_id+"_lblPaging");
this.a("class","pagination");
this.result.XML.push("></"+this.result.Nodes.pop()+">");
this.result.State="";
}
this.e();
};
CustomTransform.prototype.createScreenNamepop = function(node)
{
try
{
this.result.BeginNode("span");
this.result.Attrib("class","captionpop");
this.result.WriteString(IXML.getText(node));
this.result.EndNode();
}catch(e){if(DEBUG)alert("Error ocuured in CustomTransform.createScreenName***" + e.description)}
};
Transform.prototype.createRepeatedTable = function(node)
{
var _tblID = node.getAttribute("ID");
var _name = node.getAttribute("NAME");
var _class = node.getAttribute("CLASS");
var _style = node.getAttribute("STYLE");
var _width = node.getAttribute("WIDTH");
var _height = node.getAttribute("HEIGHT");
var _cellpadding = node.getAttribute("CELLPADDING");
var _cellspacing = node.getAttribute("CELLSPACING");
var _border = node.getAttribute("BORDER");
var _bind = node.getAttribute("BIND");
var _object = node.getAttribute("OBJECT");
var section_name = "";
var tbl_tagname = "";
if(_bind){
var pos = _bind.indexOf("/");
section_name=(pos!=-1)?_bind.substr(0,pos):_bind;
tbl_tagname=(pos!=-1)?_bind.getLastNodeName(_bind):_bind;
}
this.b("div");
this.a("id","container".concat(_tblID));
this.b("table");
if(_tblID)this.a("id",_tblID);
if(_name)this.a("name",_name);
if(_class)this.a("class",_class);
if(_style)this.a("style",_style);
if(_cellpadding)
this.a("cellpadding",_cellpadding);
else
this.a("cellpadding","0");
if(_cellspacing)
this.a("cellspacing",_cellspacing);
else
this.a("cellspacing","0");
if(_width)this.a("width",_width);
if(_height)this.a("height",_height);
if(_border)this.a("border",_border);
var rows_set = node.selectNodes("./*[name()!='thead']");
var caption_nodeset = node.selectNodes("./*[name()='caption']");
if(caption_nodeset.length>0)
{
var caption = caption_nodeset[0];
this.createTableCaption(caption);
}
var thead_nodeset = node.selectNodes("./*[name()='thead']");
if(thead_nodeset.length>0)
{
var thead = thead_nodeset[0];
this.createTableHeader(thead);
}
this.b("tbody");
for(var i=0;i<rows_set.length;i++)
{
if(rows_set[i].nodeName=="repeatedrow")
this.createRepeatedRow(rows_set[i],_tblID,_bind);
else if(rows_set[i].nodeName=="tr")
this.createTableRow(rows_set[i]);
}
this.e();
var tfoot_nodeset = node.selectNodes("./*[name()='tfoot']");
if(tfoot_nodeset.length > 0)
{
var tfoot = tfoot_nodeset[0];
this.createFooter(tfoot);
}
this.e();
this.e();
};
function eventOptions(el) {
var block = document.getElementById('forMoreOption');
var arrow = document.getElementById("arrow");
if (el.className == "active") {
el.className = "";
block.style.display = "none";
arrow.innerHTML = "&#9658;";
}
else if (el.className == "") {
el.className = "active";
block.style.display = "";
arrow.innerHTML = "&#9660;";
}
}
function getCSSRule(ruleName, deleteFlag) {
if (document.styleSheets) {
for (var j = 0; j < document.styleSheets.length; j++) {
var styleSheet = document.styleSheets[j];
var cssRule = false;
var x = 0;
do {
if (styleSheet.cssRules) {
cssRule = styleSheet.cssRules[x];
} else {
cssRule = styleSheet.rules[x];
}
if (cssRule) {
if (cssRule.selectorText == ruleName) {
if (deleteFlag) {
if (styleSheet.cssRules) {
styleSheet.deleteRule(x);
} else {
styleSheet.removeRule(x);
}
return true;
} else {
return cssRule;
}
}
}
x++;
} while (cssRule);
}
}
return false;
}
AddEvent(window, "load", LoadInit);
var isStylingFinished = false;
function LoadInit()
{
if (!window.tmpl)
StylingInit();
}
function StylingInit()
{
HandleTables();
HandleLabels();
HandleControls();
HandleDialog(self);
FinalizeStyling();
}
function FinalizeStyling()
{
document.body.style.cursor = "auto";
for (var i = 0, iMax = document.forms.length; i < iMax; i ++)
document.forms[i].style.cursor = "auto";
isStylingFinished = true;
}
function AddEvent(object, event, handler, capturing)
{
if (IsUndefOrNull(object))
return false;
if (IsUndefOrNull(capturing))
capturing = false;
if (object.attachEvent)
return object.attachEvent("on" + event, handler);
else if (object.addEventListener)
return object.addEventListener(event, handler, capturing);
else
return false;
}
function RemoveEvent(object, event, handler, capturing)
{
if (IsUndefOrNull(object))
return false;
if (IsUndefOrNull(capturing))
capturing = false;
if (object.detachEvent)
return object.detachEvent("on" + event, handler);
else if (object.removeEventListener)
return object.removeEventListener(event, handler, capturing);
else
return false;
}
function GetEvent(ev) {return (ev ? ev : window.event);}
function GetEventTarget(ev)
{
var e = GetEvent(ev);
if (e.target)
return e.target;
else if (e.srcElement)
return e.srcElement;
else
return null;
}
function GetEventKeyCode(ev)
{
var e = GetEvent(ev);
if (e.keyCode)
return e.keyCode;
else if (e.which)
return e.which;
else
return null;
}
function AppendAttribute(node, attrName, attrVal)
{
var attr = document.createAttribute(attrName);
attr.nodeValue = attrVal;
return node.setAttributeNode(attr);
}
function RemoveAttribute(node, attrName)
{
var attr = node.getAttributeNode(attrName);
if (IsUndefOrNull(attr))
return true;
else
return node.removeAttributeNode(attr);
}
function IsUndefOrNull(arg) {return (typeof(arg) == "undefined" || arg == null);}
function HasWord(str,word) {return (str.search(new RegExp("\\b"+word+"\\b")) != -1);}
function Consists(str,word) {return (str.search(new RegExp("^"+word+"$", "i")) != -1);}
function EncodeWindowName(str) {return (str + _top.STYLING.sessionId);}
function DecodeWindowName(str) {return (str.replace(_top.STYLING.sessionId, ""));}
function SetNormalClass(node) {if (node.className != "btn_disabled") node.className = "btn_normal";}
function SetHoverClass(node) {if (node.className != "btn_disabled") node.className = "btn_hover";}
function SetPressedClass(node) {if (node.className != "btn_disabled") node.className = "btn_pressed";}
function SetDefaultClass(node) {if (node.className != "btn_disabled") node.className = "btn_default";}
function AlterButtonDisabling(btnId, isDisabled, tooltip)
{
if (IsUndefOrNull(document.getElementById(btnId)))
return;
if (IsUndefOrNull(isDisabled))
isDisabled = true;
var btn = document.getElementById(btnId);
btn.parentNode.parentNode.parentNode.parentNode.className = (isDisabled) ? "btn_disabled" : "btn_normal";
if (isDisabled && !IsUndefOrNull(btn.href))
RemoveAttribute(btn, "href");
else
btn.href = "javascript:void(0)";
btn.title = IsUndefOrNull(tooltip) ? btn.innerHTML.replace(/\.{3}$/, "") : tooltip;
}
function _CreateButton(txt, onclick, id, width, isDefault, parentId)
{
if (IsUndefOrNull(isDefault))
isDefault = false;
var btnLiteral = "<table width=100 border=0 onmousedown='SetPressedClass(this)' onmouseup='SetHoverClass(this)'";
btnLiteral += " onmouseover='SetHoverClass(this)'";
if (!isDefault)
{
btnLiteral += " onmouseout='SetNormalClass(this)'";
btnLiteral += " class='btn_normal'";
}
else
{
btnLiteral += " onmouseout='SetDefaultClass(this)' class='btn_default'";
id = "defaultButton";
}
if (!IsUndefOrNull(onclick))
btnLiteral += " onclick=\"if(this.className!='btn_disabled' && isStylingFinished){"+onclick+"}; return false;\"";
var minWidth = _top.STYLING.buttons.getMinWidth();
if (IsUndefOrNull(width) || !Consists(typeof(width), "number") || width < minWidth)
width = minWidth;
btnLiteral += "><tbody><tr><td class='btnTD1' width='9'><img alt='' src='../styling/images/empty.gif' width='9' height='1' /></td>";
btnLiteral += "<td class='btnTD2' width='82'";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"_tdNode'";
btnLiteral += "'><a href='javascript:void(0)'";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"'";
if (IsUndefOrNull(txt))
txt = "";
btnLiteral += " title='"+txt.replace(/\.{3}$/, "")+"'>"+txt+"</a></td>";
btnLiteral += "<td class='btnTD3' width='9'><img alt='' src='../styling/images/empty.gif' width='9' height='1' /></td></tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(btnLiteral);
else
document.getElementById(parentId).innerHTML = btnLiteral;
if (isDefault)
document.onkeydown = CheckKeyPress;
return;
function CheckKeyPress(ev)
{
if (GetEventKeyCode(ev) == 13)
{
var target = GetEventTarget(ev);
if (IsUndefOrNull(target.tagName))
return false;
switch (target.tagName.toLowerCase())
{
case "a":
case "area":
case "button":
case "textarea":
break;
case "input":
if (IsUndefOrNull(target.type))
return false;
switch (target.type.toLowerCase())
{
case "button":
case "file":
case "image":
case "reset":
case "submit":
break;
default:
PressDefaultButton();
}
break;
default:
PressDefaultButton();
}
}
return true;
function PressDefaultButton()
{
var defBtn = document.getElementById("defaultButton");
if (defBtn)
defBtn.parentNode.parentNode.parentNode.parentNode.onclick();
}
}
}
function CreateButtonShort(txt, onclick, id, parentId)
{
var btnWidth = _top.STYLING.buttons.getShortWidth();
_CreateButton(txt, onclick, id, btnWidth, false, parentId);
}
function CreateButtonLong (txt, onclick, id, parentId) {
var btnWidth = _top.STYLING.buttons.getLongWidth();
_CreateButton(txt, onclick, id, btnWidth, false, parentId);
}
function CreateButtonShortDefault(txt, onclick, parentId)
{
var btnWidth = _top.STYLING.buttons.getShortWidth();
_CreateButton(txt, onclick, null, btnWidth, true, parentId);
}
function CreateButtonLongDefault (txt, onclick, parentId)
{
var btnWidth = _top.STYLING.buttons.getLongWidth();
_CreateButton(txt, onclick, null, btnWidth, true, parentId);
}
function CreateButtonApply(parentId)
{
CreateButtonShortDefault("Apply", "if(formSubmit()) {_top.STYLING.afterPOST=self.location.pathname; document.forms[0].submit();}", parentId);
}
function CreateButtonClose(id, parentId)
{
if (parent.document.getElementsByClassName("tbox").length) {
CreateButtonShort("Close", "ConfirmWindowClosing(true);", id, parentId);
} else{
CreateButtonShort("Close", "ConfirmWindowClosing(false);", id, parentId);
}
}
function CreateButtonReset(id, func, parentId)
{
if (IsUndefOrNull(func))
func = "";
CreateButtonShort("Reset", "ConfirmFormReset(" + func + ")", id, parentId);
}
function ConfirmWindowClosing(popOrNot) {
_top.uniq = true;
if (popOrNot) {
if (_top.isCloseSubPopup === true) {
if (this.innerWidth >= 600) {
var tmask = parent.document.getElementsByClassName("tmask")[0];
var tbox = parent.document.getElementsByClassName("tbox")[0];
_top.system_ipconf_arp_router_a = false;
}
else if (this.innerWidth < 600) {
var tmask = parent.document.getElementsByClassName("tmask")[1];
var tbox = parent.document.getElementsByClassName("tbox")[1];
_top.system_ipconf_arp_router_a = false;
}
}
else {
var tmask = parent.document.getElementsByClassName("tmask")[0];
var tbox = parent.document.getElementsByClassName("tbox")[0];
}
if (typeof tmask != "undefined" && tmask != null) {
var m = tmask;
m.parentElement.removeChild(m);
}
if (typeof tbox != "undefined" && tbox != null) {
var j = tbox;
j.parentElement.removeChild(j);
}
}
else {
var iframe = parent.document.getElementById("mainFrame");
iframe.src = iframe.src;
}
}
function ConfirmFormReset(func)
{
if (window.isSomeControlChanged)
{
_top.STYLING.alertBox.title = "Confirm Reset";
_top.STYLING.alertBox.msg = "Are you sure you want to reset all changes done on the page?";
_top.STYLING.alertBox.func = function(){ResetForm(func);};
OpenConfirmationDialog();
}
}
function ResetForm(func)
{
AlterPageMessage(null, null, false);
for (var i = 0, iMax = document.forms.length; i < iMax; i ++)
document.forms[i].reset();
if (iMax == 0)
{
if (!IsUndefOrNull(window.Page))
Page.load_complete();
else if (!IsUndefOrNull(window.tmpl))
{
showPageContent();
StylingInit();
}
return;
}
var selectCtrl;
for (var i in selectCtrlTableHash)
{
for (var j in selectCtrlTableHash[i].selectCtrlHash)
{
selectCtrl = selectCtrlTableHash[i].selectCtrlHash[j].selectNode;
selectCtrl.checked = false;
selectCtrl.onclick();
}
}
if (!IsUndefOrNull(func))
func();
for (var i in ctrlLblHash)
AlterContextMessage(ctrlLblHash[i].obj);
DsblEnblCtrlsLbls();
window.isSomeControlChanged = false;
}
function CreateLabel(txt, className, htmlFor, id, isRequired, parentId)
{
var lblLiteral = "<label";
if (!IsUndefOrNull(className) && className != "")
lblLiteral += " class='"+className+"'";
if (!IsUndefOrNull(htmlFor) && htmlFor != "")
lblLiteral += " for='"+htmlFor+"'";
lblLiteral += ">";
if (!IsUndefOrNull(isRequired) && isRequired == true)
{
lblLiteral += "<img alt='' src='../styling/images/empty.gif' width='15' height='10'";
if (!IsUndefOrNull(_top.STYLING.reqTooltip))
{
lblLiteral += " title='" + _top.STYLING.reqTooltip + "'";
if (!IsUndefOrNull(id) && id != "")
lblLiteral += " id='"+id+"_img'";
}
lblLiteral += " />";
}
lblLiteral += "<span";
if (!IsUndefOrNull(id) && id != "")
lblLiteral += " id='"+id+"'";
if (IsUndefOrNull(txt))
txt = "";
lblLiteral += ">"+txt+"</span>";
var execStatus = 0;
if (!IsUndefOrNull(className) && !IsUndefOrNull(_top.STYLING.separator) &&
(HasWord(className, "left") || HasWord(className, "topSingle") || HasWord(className, "topMulti")))
{
lblLiteral += "<span";
if (!IsUndefOrNull(id) && id != "")
lblLiteral += " id='"+id+"_separator'";
lblLiteral += ">"+_top.STYLING.separator+"</span>";
execStatus = 1;
}
lblLiteral += "</label>";
if (IsUndefOrNull(parentId)) {
document.write(lblLiteral);
}
else {
if (document.getElementById(parentId)){
document.getElementById(parentId).innerHTML = lblLiteral;
} else { }
}
return execStatus;
}
function CtrlElem(obj)
{
this.obj = (IsUndefOrNull(obj)) ? null : obj;
this.lblArr = new Array();
this.msgNode = null;
this.msgContainer = null;
}
CtrlElem.prototype.AddLabel = function(lblObj)
{
if (!Consists(typeof(lblObj), "object"))
return null;
return this.lblArr.push(lblObj);
}
CtrlElem.prototype.GetLblArrLen = function()
{
return this.lblArr.length;
}
CtrlElem.prototype.RepeatForEachLbl = function(callback)
{
for (var i = 0; i < this.lblArr.length; i ++)
callback(this.lblArr[i]);
}
CtrlElem.prototype.GetMsgNodeId = function()
{
return this.msgNode.id;
}
function GetContextMessageId(ctrlId) {
var t;
try {
t = ctrlLblHash[ctrlId].GetMsgNodeId();
}
catch (e) { t=false }
return t;
}
function HandleLabels()
{
ctrlLblHash = {};
var lblArr = document.getElementsByTagName("label");
var lblArrLen = lblArr.length;
var id, msgContainer;
var ctrlBlackList = new Array();
for (var i = 0; i < lblArrLen; i ++)
{
id = lblArr[i].htmlFor;
if (id == "" || !IsUndefOrNull(ctrlBlackList[id]))
continue;
if (!ctrlLblHash[id])
{
if (IsUndefOrNull(document.getElementById(id)))
{
ctrlBlackList[id] = true;
continue;
}
ctrlLblHash[id] = new CtrlElem(document.getElementById(id));
AddLblEventsHandler(ctrlLblHash[id].obj);
}
msgContainer = SearchContextMessagePlaceholder(lblArr[i]);
if (msgContainer != null)
{
ctrlLblHash[id].msgContainer = msgContainer;
ctrlLblHash[id].msgNode = lblArr[i];
}
else
{
ctrlLblHash[id].AddLabel(lblArr[i]);
}
}
return;
function SearchContextMessagePlaceholder(obj)
{
var tableNode = obj;
while (!Consists(tableNode.tagName, "table") && !Consists(tableNode.tagName, "html"))
tableNode = tableNode.parentNode;
if (Consists(tableNode.tagName, "table") && (HasWord(tableNode.className, "contextMessageRight") ||
HasWord(tableNode.className, "contextMessageTop")))
return tableNode;
else
return null;
}
function CheckRequired(ev)
{
var target = GetEventTarget(ev);
if (IsUndefOrNull(target.value))
return false;
if (target.value == "")
{
var msg = IsUndefOrNull(_top.STYLING.reqEmptyMsg) ? "" : _top.STYLING.reqEmptyMsg;
AlterContextMessage(target, true, msg);
}
else if (IsUndefOrNull(target.onblur))
AlterContextMessage(target);
return true;
}
}
function AddLblEventsHandler(obj)
{
var eventArr = ["blur", "change", "click", "dblclick", "focus", "keydown", "keypress", "keyup",
"mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "select"];
for (var i = 0; i < eventArr.length; i ++)
if (obj["on"+eventArr[i]] != undefined)
AddEvent(obj, eventArr[i], DsblEnblCtrlsLbls);
}
function DsblEnblCtrlsLbls()
{
for (var i in ctrlLblHash)
{
ctrlLblHash[i].RepeatForEachLbl(function(obj){obj.className = obj.className.replace(/\s*\bdisabled\b/g, "")});
ctrlLblHash[i].obj.className = ctrlLblHash[i].obj.className.replace(/\s*\bdisabled\b/g, "");
if (ctrlLblHash[i].obj.disabled || ctrlLblHash[i].obj.readonly)
{
ctrlLblHash[i].RepeatForEachLbl(function(obj){obj.className += " disabled"});
ctrlLblHash[i].obj.className += " disabled";
if (ctrlLblHash[i].msgNode != null)
AlterContextMessage(ctrlLblHash[i].obj);
}
}
var ctrlArrLen = ctrlArray.length;
for (var i = 0; i < ctrlArrLen; i++)
{
ctrlArray[i].className = ctrlArray[i].className.replace(/\s*\bdisabled\b/g, "");
if (ctrlArray[i].disabled || ctrlArray[i].readonly)
ctrlArray[i].className += " disabled";
}
}
function HandleTables()
{
if (HasWord(navigator.userAgent, "Safari") && !HasWord(navigator.userAgent, "Chrome"))
{
var captionArr = document.getElementsByTagName("caption");
for (var i = 0; i < captionArr.length; i++)
if (HasWord(captionArr[i].parentNode.className, "dataTable"))
{
captionArr[i].className += " safari";
if (captionArr[i].children[0])
captionArr[i].children[0].className += " safari";
}
}
var trArr = new Array();
var thArr = new Array();
var theadArr = document.getElementsByTagName("thead");
var rowSpanFirst = 1;
var rowSpanLast = 1;
for (var i = 0; i < theadArr.length; i ++)
if (HasWord(theadArr[i].parentNode.className, "dataTable"))
{
trArr = theadArr[i].getElementsByTagName("tr");
for (var j = 0; j < trArr.length; j ++)
{
thArr = trArr[j].getElementsByTagName("th");
for (var k = 0; k < thArr.length; k ++)
{
if (k == 0)
{
if (rowSpanFirst == 1)
{
rowSpanFirst = thArr[k].rowSpan;
}
else
rowSpanFirst --;
}
if (k == thArr.length - 1)
{
if (rowSpanLast == 1)
{
rowSpanLast = thArr[k].rowSpan;
}
else
rowSpanLast --;
}
}
}
}
var tbodyArr = document.getElementsByTagName("tbody");
var txtNode, tdNode, trNode;
var emptyTblTxt = IsUndefOrNull(_top.STYLING.emptyTbl) ? "" : _top.STYLING.emptyTbl;
var tableId;
for (var i = 0; i < tbodyArr.length; i ++)
if (HasWord(tbodyArr[i].parentNode.className, "dataTable"))
{
tableId = tbodyArr[i].parentNode.id;
trArr = tbodyArr[i].getElementsByTagName("tr");
if (trArr.length == 0)
{
txtNode = document.createTextNode(emptyTblTxt);
tdNode = document.createElement("td");
AppendAttribute(tdNode, "colspan", "100");
AppendAttribute(tdNode, "id", tableId + "_emptyCell");
tdNode.appendChild(txtNode);
trNode = document.createElement("tr");
trNode.appendChild(tdNode);
tbodyArr[i].appendChild(trNode);
if (document.getElementById(tableId + "_emptyCell"))
document.getElementById(tableId + "_emptyCell").setAttribute('colspan', '100');
}
else
for (var j = 0; j < trArr.length; j ++)
if (j % 2 != 0)
trArr[j].className += " evenTR";
}
}
function RowSelectCtrlColl(isMultiselect)
{
this.isMultiselect = (IsUndefOrNull(isMultiselect)) ? false : isMultiselect;
this.selectAllCtrl = null;
this.selectCtrlHash = {};
this.selectCtrlHashLength = 0;
this.selectedCount = 0;
this.disabledCount = 0;
this.isDisabledCounted = false;
this.selectedId = "";
}
RowSelectCtrlColl.prototype.AddCtrl = function(obj)
{
if (IsUndefOrNull(obj.tagName) || IsUndefOrNull(obj.id) || IsUndefOrNull(obj.parentNode))
return null;
var id = obj.id;
var rowSelCtrl = new RowSelectCtrl(obj);
if (id == "")
{
if (rowSelCtrl.rowNode.id == "")
return null;
else
id = obj.id = rowSelCtrl.rowNode.id + "_select";
if (obj.tagName == "INPUT" && (obj.type == "checkbox" || obj.type == "radio"))
document.getElementById(id).nextSibling.setAttribute("for",id);
}
this.selectCtrlHash[id] = rowSelCtrl;
this.selectCtrlHashLength ++;
if (obj.disabled || obj.style.display == "none")
{
obj.checked = false;
this.disabledCount ++;
}
else if (obj.checked)
{
this.selectedCount ++;
rowSelCtrl.rowNode.className += " selected";
}
return id;
}
RowSelectCtrlColl.prototype.GetRowNode = function(obj)
{
if (IsUndefOrNull(obj.id) || IsUndefOrNull(this.selectCtrlHash[obj.id]))
return null;
return this.selectCtrlHash[obj.id].rowNode;
}
RowSelectCtrlColl.prototype.AlterRowSelection = function(obj)
{
var rowSelCtrl = this.selectCtrlHash[obj.id];
var node = rowSelCtrl.selectNode;
var rowNode = rowSelCtrl.rowNode;
var wasChecked = rowSelCtrl.wasChecked;
if (this.isMultiselect)
{
if (node.checked && !wasChecked)
{
this.selectedCount ++;
rowSelCtrl.wasChecked = true;
rowNode.className += " selected";
}
else if (!node.checked && wasChecked)
{
this.selectedCount --;
rowSelCtrl.wasChecked = false;
rowNode.className = rowNode.className.replace(/\s*\bselected\b/g, "");
}
}
else if (node.checked)
{
if (this.selectedId != "")
{
var wasCheckedRow = this.selectCtrlHash[this.selectedId].rowNode;
wasCheckedRow.className = wasCheckedRow.className.replace(/\s*\bselected\b/g, "");
}
rowNode.className += " selected";
this.selectedId = node.id;
this.selectedCount = 1;
}
if (!this.isMultiselect || this.selectAllCtrl == null)
return;
if (this.selectCtrlHashLength == this.selectedCount + this.disabledCount)
{
if (this.selectCtrlHashLength != this.disabledCount)
this.selectAllCtrl.checked = true;
}
else
this.selectAllCtrl.checked = false;
}
RowSelectCtrlColl.prototype.AlterAllRowsSelection = function()
{
var node;
var selection = this.selectAllCtrl.checked;
if (!this.isDisabledCounted)
this.CountDisabledItems();
for (var i in this.selectCtrlHash)
{
node = this.selectCtrlHash[i].selectNode;
if (!node.disabled && node.style.display != "none")
{
node.checked = selection;
node.onclick();
}
}
}
RowSelectCtrlColl.prototype.CountDisabledItems = function()
{
this.disabledCount = 0;
for (var i in this.selectCtrlHash)
{
node = this.selectCtrlHash[i].selectNode;
if (node.disabled || node.style.display == "none")
this.disabledCount ++;
}
this.isDisabledCounted = true;
}
RowSelectCtrlColl.prototype.GetSelectedCtrlId = function()
{
for (var i in this.selectCtrlHash)
{
node = this.selectCtrlHash[i].selectNode;
if (node.checked && !node.disabled && node.style.display != "none")
return i;
}
return null;
}
function GetSelectedCtrlId(ctrlName)
{
return selectCtrlTableHash[ctrlName].GetSelectedCtrlId();
}
function GetSelectedCtrl(ctrlName)
{
return document.getElementById(selectCtrlTableHash[ctrlName].GetSelectedCtrlId());
}
function HideSelectedRows(ctrlName)
{
var rowHash = selectCtrlTableHash[ctrlName].selectCtrlHash;
for (var id in rowHash)
if (rowHash[id].selectNode.checked)
rowHash[id].rowNode.style.display = "none";
}
function RowSelectCtrl(selectNode)
{
this.selectNode = selectNode;
var trNode = selectNode;
while (!Consists(trNode.tagName, "tr") && !Consists(trNode.tagName, "html"))
trNode = trNode.parentNode;
this.rowNode = trNode;
this.wasChecked = selectNode.checked;
}
function HandleControls()
{
isSomeControlChanged = false;
selectCtrlTableHash = {};
ctrlArray = [];
var ctrlArr = document.getElementsByTagName("input");
var ctrlNameArr = new Array();
var ctrlName, ctrlOnclick, isMultiselect;
var isMSIE = HasWord(navigator.userAgent, "MSIE");
var isStandardMode = (document.compatMode == "CSS1Compat");
var chkClass = " checkbox";
var rdoClass = " radio";
var txtClass = " text";
if (isStandardMode)
{
document.body.style.overflow = "visible";
if (document.getElementsByTagName("html").length)
document.getElementsByTagName("html")[0].style.overflow = "auto";
chkClass = " checkboxStd";
rdoClass = " radioStd";
txtClass = " textStd";
}
for (var i = 0; i < ctrlArr.length; i ++)
{
if (ctrlArr[i].type == "hidden")
continue;
AddEvent(ctrlArr[i], "change", RegisterCtrlChange);
if (IsUndefOrNull(ctrlArr[i].id) || ctrlArr[i].id == "" || IsUndefOrNull(ctrlLblHash[ctrlArr[i].id]))
{
ctrlArray.push(ctrlArr[i]);
AddLblEventsHandler(ctrlArr[i]);
}
switch (ctrlArr[i].type)
{
case "checkbox":
ctrlArr[i].className += chkClass;
if (isMSIE & isStandardMode)
ctrlArr[i].style.marginBottom = "0px";
break;
case "radio":
ctrlArr[i].className += rdoClass;
if (isMSIE)
{
ctrlArr[i].style.width = "13px";
ctrlArr[i].style.height = "14px";
ctrlArr[i].style.marginLeft = "-1px";
if (isStandardMode)
{
ctrlArr[i].style.marginBottom = "0px";
ctrlArr[i].style.marginTop = "1px";
}
}
break;
case "file":
case "password":
case "text":
ctrlArr[i].className += txtClass;
if (isMSIE)
ctrlArr[i].style.margin = "-1px 0px";
break;
}
ctrlOnclick = (IsUndefOrNull(ctrlArr[i].onclick)) ? "" : ctrlArr[i].onclick.toString();
if (ctrlArr[i].name && (HasWord(ctrlOnclick, "AlterRowSelection") || HasWord(ctrlOnclick, "AlterAllRowsSelection")))
{
ctrlName = ctrlArr[i].name;
if (!HasWord(ctrlNameArr.join(" "), ctrlName))
{
ctrlNameArr.push(ctrlName);
isMultiselect = Consists(ctrlArr[i].getAttribute("type"), "checkbox");
selectCtrlTableHash[ctrlName] = new RowSelectCtrlColl(isMultiselect);
}
if (isMultiselect && HasWord(ctrlOnclick, "AlterAllRowsSelection"))
selectCtrlTableHash[ctrlName].selectAllCtrl = ctrlArr[i];
else
{
selectCtrlTableHash[ctrlName].AddCtrl(ctrlArr[i]);
ctrlArr[i].onclick();
}
}
}
var tblHash;
for (ctrlName in selectCtrlTableHash)
{
tblHash = selectCtrlTableHash[ctrlName];
if (tblHash.selectAllCtrl)
tblHash.selectAllCtrl.disabled = !(tblHash.selectCtrlHashLength - tblHash.disabledCount);
}
var tagNameArr = ["select", "textarea"];
var corrTextarea;
for (var i = 0; i < tagNameArr.length; i ++)
{
corrTextarea = (isMSIE && tagNameArr[i] == "textarea");
ctrlArr = document.getElementsByTagName(tagNameArr[i]);
for (var j = 0; j < ctrlArr.length; j ++)
{
AddEvent(ctrlArr[j], "change", RegisterCtrlChange);
if (IsUndefOrNull(ctrlArr[j].id) || ctrlArr[j].id == "" || IsUndefOrNull(ctrlLblHash[ctrlArr[j].id]))
{
ctrlArray.push(ctrlArr[j]);
AddLblEventsHandler(ctrlArr[j]);
}
if (corrTextarea)
ctrlArr[j].style.margin = "-1px 0px";
}
}
DsblEnblCtrlsLbls();
return;
function RegisterCtrlChange() {window.isSomeControlChanged = true;}
}
function AlterAllRowsSelection(selectNode)
{
selectCtrlTableHash[selectNode.name].AlterAllRowsSelection();
}
function AlterRowSelection(selectNode, btnDelId, btnEdtId)
{
var selectCtrlTable = selectCtrlTableHash[selectNode.name];
if (selectCtrlTable.selectAllCtrl && !selectCtrlTable.isDisabledCounted)
selectCtrlTable.CountDisabledItems();
selectCtrlTable.AlterRowSelection(selectNode);
AlterTableButtons(selectCtrlTable.selectedCount, btnDelId, btnEdtId);
}
function AlterTableButtons(selectedCount, btnDelId, btnEdtId)
{
var delDsbl = true;
var edtDsbl = true;
var delTooltip = null;
var edtTooltip = null;
if (selectedCount == 0)
{
delTooltip = IsUndefOrNull(_top.STYLING.delBtnNotSelect) ? null : _top.STYLING.delBtnNotSelect;
edtTooltip = IsUndefOrNull(_top.STYLING.edtBtnNotSelect) ? null : _top.STYLING.edtBtnNotSelect;
}
else if (selectedCount > 1)
{
delDsbl = false;
edtTooltip = IsUndefOrNull(_top.STYLING.edtBtnNotSingle) ? null : _top.STYLING.edtBtnNotSingle;
}
else
{
delDsbl = edtDsbl = false;
}
if(!IsUndefOrNull(btnDelId))
AlterButtonDisabling(btnDelId, delDsbl, delTooltip);
if(!IsUndefOrNull(btnEdtId))
AlterButtonDisabling(btnEdtId, edtDsbl, edtTooltip);
}
function OpenModalDialog(url, widthUD)
{
LINKSYS = {};
LINKSYS.box = function () {
var j, m, b, g, v, p = 0;
return {
show: function (o) {
v = { opacity: 70, close: 1, animate: 1, fixed: 1, mask: 1, maskid: '', boxid: '', topsplit: 2, url: 0, post: 0, height: 0, width: 0, html: 0, iframe: 0 };
for (s in o) { v[s] = o[s] }
if (!p) {
j = parent.document.createElement('div'); j.className = 'tbox';
p = parent.document.createElement('div'); p.className = 'tinner';
b = parent.document.createElement('div'); b.className = 'tcontent';
m = parent.document.createElement('div'); m.className = 'tmask';
g = parent.document.createElement('div'); g.className = 'tclose'; g.v = 0;
parent.document.body.appendChild(m); parent.document.body.appendChild(j); j.appendChild(p); p.appendChild(b);
m.onmousemove = freetime;
m.onkeypress = freetime;
g.onclick=LINKSYS.box.hide; window.onresize=LINKSYS.box.resize;
} else {
j.style.display = 'none'; clearTimeout(p.ah); if (g.v) { p.removeChild(g); g.v = 0 }
}
v.height = Math.ceil(v.width / 1.6);
p.id = v.boxid; m.id = v.maskid; j.style.position = v.fixed ? 'fixed' : 'absolute';
if (v.html && !v.animate) {
p.style.backgroundImage = 'none'; b.innerHTML = v.html; b.style.display = '';
p.style.width = v.width ? v.width + 'px' : 'auto'; p.style.height = v.height ? v.height + 'px' : 'auto'
} else {
b.style.display = 'none';
if (!v.animate && v.width && v.height) {
p.style.width = v.width + 'px'; p.style.height = v.height + 'px'
} else {
p.style.width = p.style.height = '100px';
}
}
if (v.mask) { this.mask(); this.alpha(m, 1, v.opacity) } else { this.alpha(j, 1, 100) }
if (v.autohide) { p.ah = setTimeout(LINKSYS.box.hide, 1000 * v.autohide) } else { parent.document.onkeyup = LINKSYS.box.esc }
},
fill: function (c, u, k, a, w, h) {
if (u) {
if (v.image) {
var i = new Image(); i.onload = function () { w = w || i.width; h = h || i.height; LINKSYS.box.psh(i, a, w, h) }; i.src = v.image
} else if (v.iframe) {
this.psh('<iframe name="popup_gw" src="' + v.iframe + '" width="' + v.width + '" onload="frame13(this);" frameborder="0" height="' + v.height + '"></iframe>', a, w, h)
} else {
var x = (document.evaluate) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
x.onreadystatechange = function () {
if (x.readyState == 4 && x.status == 200) { p.style.backgroundImage = ''; LINKSYS.box.psh(x.responseText, a, w, h) }
};
if (k) {
x.open('POST', c, true); x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); x.send(k)
} else {
x.open('GET', c, true); x.send(null)
}
}
} else {
this.psh(c, a, w, h)
}
},
psh: function (c, a, w, h) {
if (typeof c == 'object') { b.appendChild(c) } else { b.innerHTML = c }
var x = p.style.width, y = p.style.height;
if (!w || !h) {
p.style.width = w ? w + 'px' : ''; p.style.height = h ? h + 'px' : ''; b.style.display = '';
if (!h) { h = parseInt(b.offsetHeight) }
if (!w) { w = parseInt(b.offsetWidth) }
b.style.display = 'none'
}
p.style.width = x; p.style.height = y;
this.size(w, h, a)
},
esc: function (e) { e = e || window.event; if (e.keyCode == 27) { LINKSYS.box.hide() } },
hide: function () {
return false;
},
resize: function () { LINKSYS.box.pos(); LINKSYS.box.mask() },
mask: function () {
m.style.height = this.total(1) + 'px'; m.style.width = this.total(0) + 'px';
m.style.background = '#000';
m.style.opacity = '0.6';
m.style.filter = 'alpha(opacity=60)';
},
pos: function () {
j.style.margin = 'auto';
j.style.position = 'absolute';
j.style.top = '0';
j.style.left = '0';
j.style.right = '0';
j.style.bottom = '0';
j.style.border = "1px solid #FFFFFF";
j.style.width = v.width + 'px';
j.style.height = v.height + 'px';
},
alpha: function (e, d, a) {
clearInterval(e.ai);
if (d) { e.style.opacity = 0; e.style.filter = 'alpha(opacity=0)'; e.style.display = 'block'; LINKSYS.box.pos() }
e.ai = setInterval(function () { LINKSYS.box.ta(e, a, d) }, 20)
},
ta: function (e, a, d) {
var o = Math.round(e.style.opacity * 100);
if (o == a) {
clearInterval(e.ai);
if (d == -1) {
e.style.display = 'none';
e == j ? LINKSYS.box.alpha(m, -1, 0, 2) : b.innerHTML = p.style.backgroundImage = ''
} else {
if (e == m) {
this.alpha(j, 1, 100)
} else {
j.style.filter = '';
LINKSYS.box.fill(v.html || v.url, v.url || v.iframe || v.image, v.post, v.animate, v.width, v.height)
}
}
} else {
var n = a - Math.floor(Math.abs(a - o) * .5) * d;
e.style.opacity = n / 100; e.style.filter = 'alpha(opacity=' + n + ')'
}
},
size: function (w, h, a) {
if (a) {
clearInterval(p.si); var wd = parseInt(p.style.width) > w ? -1 : 1, hd = parseInt(p.style.height) > h ? -1 : 1;
p.si = setInterval(function () { LINKSYS.box.ts(w, wd, h, hd) }, 20)
} else {
p.style.backgroundImage = 'none'; if (v.close) { p.appendChild(g); g.v = 1 }
p.style.width = w + 'px'; p.style.height = h + 'px'; b.style.display = ''; this.pos();
if (v.openjs) { v.openjs() }
}
},
ts: function (w, wd, h, hd) {
var cw = parseInt(p.style.width), ch = parseInt(p.style.height);
if (cw == w && ch == h) {
clearInterval(p.si); p.style.backgroundImage = 'none'; b.style.display = 'block'; if (v.close) { p.appendChild(g); g.v = 1 }
if (v.openjs) { v.openjs() }
} else {
if (cw != w) { p.style.width = (w - Math.floor(Math.abs(w - cw) * .6) * wd) + 'px' }
if (ch != h) { p.style.height = (h - Math.floor(Math.abs(h - ch) * .6) * hd) + 'px' }
this.pos()
}
},
top: function () { return parent.document.documentElement.scrollTop || parent.document.body.scrollTop },
width: function () { return self.innerWidth || parent.document.documentElement.clientWidth || parent.document.body.clientWidth },
height: function () { return self.innerHeight || parent.document.documentElement.clientHeight || parent.document.body.clientHeight },
total: function (d) {
var b = parent.document.body, e = parent.document.documentElement;
return d ? Math.max(Math.max(b.scrollHeight, e.scrollHeight), Math.max(b.clientHeight, e.clientHeight)) :
Math.max(Math.max(b.scrollWidth, e.scrollWidth), Math.max(b.clientWidth, e.clientWidth))
}
}
} ();
var urlo = parent.document.getElementById('mainFrame').getAttribute('src').match('/\.+/'); urlo += url;
LINKSYS.box.show({iframe:urlo,boxid:'frameless',width:widthUD,fixed:false,maskid:'outerWindow',maskopacity:40,closejs:function(){}});
_top.urlo = urlo;
}
function OpenConfirmationDialog(widthUD, heightUD)
{
defaultModalWindowOpener("../styling/confirmBox.html", widthUD, heightUD);
}
function OpenConfirmationDialogOptional()
{
if (_top.STYLING.alertBox.noConfirmFuncHash[_top.STYLING.alertBox.func.toString()])
_top.STYLING.alertBox.func();
else
defaultModalWindowOpener("../styling/confirmBoxOpt.html");
}
function OpenNotificationDialog()
{
defaultModalWindowOpener("../styling/notifyBox.html");
}
function CloseModalDialog()
{
RemoveEvent(_top, "focus", MakeDialogOnTop);
RemoveEvent(_top.document.body, "click", MakeDialogOnTop);
if (typeof(opener.document) == "object")
RemoveEvent(opener.document, "keydown", ForbidKeyPressing);
RemoveEvent(_top.modalWindow, "unload", CloseModalDialog);
_top.document.getElementById("veil").style.display = "none";
}
function CloseAlertBox()
{
var err;
if (opener == opener.parent)
var anchor = opener;
else
var anchor = _top;
try
{
RemoveEvent(anchor, "focus", MakeAlertBoxOnTop);
RemoveEvent(anchor.document.body, "click", MakeAlertBoxOnTop);
RemoveEvent(opener.document, "keydown", ForbidKeyPressing);
anchor.document.getElementById("veil").style.display = "none";
}
catch(err)
{
if (!IsUndefOrNull(_top.MsgLog))
_top.MsgLog.addMsg("Exception is caught in CloseAlertBox(). Type: " + err.name +
". Message: " + err.message, "Warning", "Styling");
}
}
function MakeDialogOnTop()
{
if (typeof(_top.modalWindow) != "undefined" && !_top.modalWindow.closed)
_top.modalWindow.focus();
}
function ForbidKeyPressing(ev)
{
var e = GetEvent(ev);
if (e.stopPropagation)
e.stopPropagation();
else
e.cancelBubble = true;
if (e.preventDefault)
e.preventDefault();
else
e.returnValue = false;
return false;
}
function MakeAlertBoxOnTop()
{
if (typeof(_top) != "undefined" && typeof(_top.alertBox) != "undefined" && !_top.alertBox.closed)
_top.alertBox.focus();
}
function CloseAlertAndDialogBox()
{
if (!IsUndefOrNull(_top))
{
if (!IsUndefOrNull(_top.alertBox) && !_top.alertBox.closed)
_top.alertBox.close();
if (!IsUndefOrNull(_top.modalWindow) && !_top.modalWindow.closed)
_top.modalWindow.close();
}
}
function HandleDialog(win)
{
if (DecodeWindowName(win.name) != "modal" && DecodeWindowName(win.name) != "alertBox")
return;
if (DecodeWindowName(win.name) == "modal")
{
_top.document.getElementById("veil").style.display = "block";
AddEvent(_top, "focus", MakeDialogOnTop);
AddEvent(_top.document.body, "click", MakeDialogOnTop);
AddEvent(win, "unload", CloseModalDialog);
var veilNode = win.document.createElement("div");
AppendAttribute(veilNode, "id", "veil");
AppendAttribute(veilNode, "class", "veil");
win.document.body.appendChild(veilNode);
if (_top.STYLING.alertBox.closeDialog)
{
_top.STYLING.alertBox.closeDialog = false;
if ((IsUndefOrNull(_top.oGW) || !_top.oGW.isGWShown) && IsUndefOrNull(_top.mainFrame.tmpl))
_top.setTimeout("_top.mainFrame.location.reload(true)", 100);
win.close();
}
}
else if (DecodeWindowName(win.name) == "alertBox")
{
if (opener == opener.parent)
var anchor = opener;
else
var anchor = _top;
anchor.document.getElementById("veil").style.display = "block";
AddEvent(anchor, "focus", MakeAlertBoxOnTop);
AddEvent(anchor.document.body, "click", MakeAlertBoxOnTop);
AddEvent(win, "unload", CloseAlertBox);
}
try {
AddEvent(opener.document, "keydown", ForbidKeyPressing);
}
catch(err)
{
if (!IsUndefOrNull(_top.MsgLog))
_top.MsgLog.addMsg("Exception is caught in HandleDialog(). Type: " + err.name +
". Message: " + err.message, "Warning", "Styling");
}
ResizeWindow(win);
}
function ResizeWindow(win)
{
var maxWidth = Math.max(win.screen.availWidth - 100, 160);
var maxHeight = Math.max(win.screen.availHeight - 100, 100);
var minWidth = 0;
var minHeight = 0;
var formArr = win.document.forms;
var nodeArr = [];
var children, className;
if (formArr.length)
for (var i = 0; i < formArr.length; i ++)
AppendChildren(formArr[i]);
else if (!IsUndefOrNull(win.document.getElementById("popUpMainDiv")))
AppendChildren(win.document.getElementById("popUpMainDiv"));
else
return;
for (var i = 0; i < nodeArr.length; i ++)
{
if (nodeArr[i].clientWidth > minWidth)
minWidth = nodeArr[i].clientWidth;
minHeight += nodeArr[i].clientHeight;
className = nodeArr[i].className;
if (HasWord(className, "pageMessage") && nodeArr[i].clientHeight > 0)
minHeight += 30 - 8;
if (HasWord(className, "dialogButtons"))
minHeight += 10;
}
if (DecodeWindowName(win.name) == "alertBox")
{
minWidth += 30;
minHeight += 30;
}
else
{
minWidth += 16;
minHeight += 16;
}
minWidth += 16 + 2;
minHeight += 23 + 22 + 25 + 9 + 7 + 2 + 2 + 8;
var sizeRatio = 1.6;
if (minWidth / minHeight > sizeRatio)
minHeight = minWidth / sizeRatio;
else
minWidth = minHeight * sizeRatio;
win.resizeTo(Math.min(minWidth, maxWidth), Math.min(minHeight, maxHeight));
function AppendChildren(node)
{
children = node.childNodes;
for (var i = 0; i < children.length; i ++)
if (children[i].nodeType == 1 && Consists(children[i].nodeName, "table"))
nodeArr.push(children[i]);
}
}
function CreateContextMessage(htmlFor, id, isRight, parentId)
{
if (IsUndefOrNull(htmlFor))
return false;
if (IsUndefOrNull(isRight))
isRight = true;
var className = (isRight) ? "contextMessageRight" : "contextMessageTop";
var msgLiteral = "<table class='"+className+"'><tbody><tr>";
if (isRight)
{
msgLiteral += "<td><img src='../styling/images/red3angle_left.gif' width='18' height='16' /></td>";
msgLiteral += "<td><label for='"+htmlFor+"'"+AddId(id)+"></label></td>";
}
else
{
msgLiteral += "<td><label for='"+htmlFor+"'"+AddId(id)+"></label></td>";
msgLiteral += "</tr><tr>";
msgLiteral += "<td><img src='../styling/images/red3angle_down.gif' width='15' height='18' /></td>";
}
msgLiteral += "</tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(msgLiteral);
else
document.getElementById(parentId).innerHTML = msgLiteral;
return true;
function AddId(id)
{
if(!IsUndefOrNull(id) && id != "")
return " id='"+id+"'"
else
return "";
}
}
function AlterContextMessage(obj, isShown, msg)
{
if (IsUndefOrNull(obj) || IsUndefOrNull(obj.id) || obj.id == "")
return false;
if (IsUndefOrNull(isShown))
isShown = false;
if (IsUndefOrNull(msg))
msg = null;
if (IsUndefOrNull(ctrlLblHash[obj.id]) || ctrlLblHash[obj.id].msgNode == null)
return false;
var elem = ctrlLblHash[obj.id];
if (msg != null)
{
if (!IsUndefOrNull(elem.msgNode.textContent))
elem.msgNode.textContent = msg;
else if (!IsUndefOrNull(elem.msgNode.innerText))
elem.msgNode.innerText = msg;
}
elem.msgContainer.style.display = (isShown && !obj.disabled) ? "block" : "none";
if (isShown)
_top.STYLING.alertBox.closeDialog = false;
return true;
}
function CreatePageMessage(id, parentId)
{
if (IsUndefOrNull(id))
id = "";
var pgMsgLiteral = "<table class='pageMessage' id='pageMessageID'><tbody><tr><td style='width:1px;'><img id='pageImgID_0' alt='' /></td><td";
if (id != "")
pgMsgLiteral += " id='"+id+"'";
pgMsgLiteral += "></td></tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(pgMsgLiteral);
else
document.getElementById(parentId).innerHTML = pgMsgLiteral;
var msgContainer = null;
if (id != "")
msgContainer = document.getElementById(id).parentNode.parentNode.parentNode;
else
{
var tblArr = document.getElementsByTagName("table");
for (var i = 0; i < tblArr.length; i ++)
if (tblArr[i].className == "pageMessage")
{
msgContainer = tblArr[i];
break;
}
}
pageMessage = new PageMessage(msgContainer);
var execStatus = 0;
if (_top.STYLING.afterPOST == self.location.pathname)
{
var errArr = GetErrors();
var severity = 1;
var msg = "";
if (errArr.length)
{
msg = [];
for (i = 0; i < errArr.length; i ++)
msg[i] = errArr[i];
severity = 4;
execStatus = 1;
}
else
{
switch (_top.STYLING.successMsgNS.msgType)
{
case 0:
msg = _top.STYLING.successMsg;
break;
case 1:
msg = _top.STYLING.successMsgNS.msgText.replace(/(?=<\/a>)/i, _top.STYLING.successMsgNS.linkText);
break;
}
execStatus = 2;
}
pageMessage.ShowMessage(msg, severity);
}
_top.STYLING.afterPOST = "";
_top.STYLING.successMsgNS.msgType = 1;
if (execStatus == 1 && DecodeWindowName(name) == "modal")
_top.STYLING.alertBox.closeDialog = false;
return execStatus;
}
function AlterPageMessage(msg, severity, isShown)
{
if (IsUndefOrNull(pageMessage))
return;
if (IsUndefOrNull(isShown) || isShown)
{
pageMessage.ShowMessage(msg, severity);
if (severity != 1)
_top.STYLING.alertBox.closeDialog = false;
}
else
pageMessage.HideMessage();
}
function AppendPageMessage(msg)
{
if (IsUndefOrNull(pageMessage))
return;
return pageMessage.AppendMessage(msg);
}
function PageMessage(msgContainer)
{
if (IsUndefOrNull(msgContainer) || IsUndefOrNull(msgContainer.getElementsByTagName))
return;
this.msgContainer = msgContainer;
if (IsUndefOrNull(msgContainer.getElementsByTagName("img")[0]))
return;
this.imgNode = msgContainer.getElementsByTagName("img")[0];
if (IsUndefOrNull(msgContainer.getElementsByTagName("td")[1]))
return;
this.msgNode = msgContainer.getElementsByTagName("td")[1];
this.msgLineCount = 0;
}
PageMessage.prototype.ShowMessage = function(msg, severity)
{
severity = IsUndefOrNull(severity) ? 4 : severity;
var src = "", className = "", innerHtml = "";
var height = "32", width = "32";
var id = 'imgNodeIdStatus';
switch (severity)
{
case 1:
src = "success";
break;
case 2:
src = "information";
break;
case 3:
src = "warning";
break;
case 4:
src = "criticalerror";
className = "critical";
break;
}
src = "../styling/images/Status_" + src + "_icon.png";
this.imgNode.src = src;
this.imgNode.height = height;
this.imgNode.width = width;
this.imgNode.id = id;
this.msgNode.className = className;
DisplayTranslucentPNGInIE6(this.imgNode, src);
if (!IsUndefOrNull(msg))
{
if (!(msg instanceof Array))
msg = [msg];
for (var i = 0, iMax = msg.length; i < iMax; i ++)
innerHtml += "<div id='pageMessageLine" + i + "'>" + msg[i] + "</div>"
this.msgNode.innerHTML = innerHtml;
this.msgLineCount = iMax;
}
this.msgContainer.style.display = "block";
this.msgContainer.scrollIntoView(true);
}
PageMessage.prototype.HideMessage = function()
{
this.msgContainer.style.display = "none";
}
PageMessage.prototype.AppendMessage = function(msg)
{
var wrapNode = document.createElement("div");
var txtNode = document.createTextNode(msg || "");
wrapNode.setAttribute("id", "pageMessageLine" + this.msgLineCount);
wrapNode.appendChild(txtNode);
this.msgNode.appendChild(wrapNode);
this.msgContainer.scrollIntoView(true);
return this.msgLineCount ++;
}
function GetErrors()
{
var idx = 1;
var errArr = new Array();
var errTxt = "";
while (!IsUndefOrNull(document.getElementsByName("mibError?"+idx)[0]))
{
errTxt = document.getElementsByName("mibError?"+idx)[0].value;
errTxt = errTxt.replace(/.*?Diag=/, "");
errTxt = errTxt.replace(/'(localMsg.*)?$/, "");
errTxt = errTxt.replace(/<.*?>/g, "");
errTxt = errTxt.replace(/\s/g, " ");
var re = new RegExp(String.fromCharCode(160), "g");
errTxt = errTxt.replace(re, " ");
errArr.push(errTxt);
idx ++;
}
return errArr;
}
function AlterAfterPostGW(isSet)
{
if (IsUndefOrNull(isSet))
isSet = false;
var url = "";
if (isSet)
{
if (IsUndefOrNull(oNavigator) || IsUndefOrNull(_top.modalWindow) || _top.modalWindow.closed || !_top.modalWindow.pageMessage) {
if ((agent() == "IE 10" || agent() == "IE 9") && typeof _top[1].oNavigator == "undefined") {
if (!!_top[2].oNavigator) {
oNavigator = _top[2].oNavigator;
}
else { oNavigator = top.mainFrame_gw.oNavigator; };
}
url = oNavigator.get_Url(oNavigator.selectedTab);
var urlMatchArr = url.match(/{file=(.*?)}/);
if (urlMatchArr && urlMatchArr.length >= 2)
url = urlMatchArr[1];
}
else
url = _top.modalWindow.location.pathname;
}
_top.STYLING.afterPOST = url;
isSomeControlChanged = false;
if (!IsUndefOrNull(_top.modalWindow) && !_top.modalWindow.closed)
_top.modalWindow.isSomeControlChanged = false;
}
function DisplayTranslucentPNGInIE6(imgNode, src)
{
if (/MSIE 6\.0/.test(navigator.userAgent))
{
if (typeof imgNode == "string")
imgNode = document.getElementById(imgNode);
imgNode.src = "../styling/images/empty.gif";
imgNode.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
}
}
function NavigateFromSuccessMessage()
{
if (IsUndefOrNull(_top.modalWindow) || _top.modalWindow.closed)
_top.STYLING.successMsgNS.linkFunc();
else
{
_top.STYLING.alertBox.func = function(){
_top.modalWindow.close();
_top.STYLING.successMsgNS.linkFunc();
};
_top.STYLING.alertBox.title = "Confirm Dialog Box Closing";
_top.STYLING.alertBox.msg = "The dialog box will be closed in order to navigate by the link. Do you want to continue?";
OpenConfirmationDialog();
}
}
var TKN_CONST=1
var TKN_DICT_ITEM=2
var TKN_DATE_TIME=3
var TKN_DATE=4
var TKN_TIME=5
var TKN_NUMBER=6
var TKN_CALLBACK=7
var TKN_DATE_SHORT_TIME=8
var TKN_SHORT_TIME=9
function PageTokens(id,page)
{
this.id = id;
this.page = page;
this.error = null;
var pageTokenArr = new Array();
var localization = getTopApp().localization;
localization.addPage(this);
this.init = function(LangSelector)
{
var ret=true;
localization.fun="pageTokens.init";
if (localization.ENABLED){
translatePage();
if (LangSelector){
if (!LangSelector.placeHolderId||!document.getElementById(LangSelector.placeHolderId)) {
this.error = localization.trc.setError("LngSelParamErr");
return false;
}
ret=localization.createLangSelector(document.getElementById(LangSelector.placeHolderId),LangSelector);
this.error=(!ret)? localization.error : null;
}
}
return ret;
};
var Token = function (domId, dictId, dictObj, paramList)
{
this.id = domId;
this.dictId = dictId;
this.domObj = null;
this.dictObj = dictObj;
this.paramList = paramList;
this.attrList = null;
};
Token.prototype.translate = function()
{
var attrName="";
try {
localization.fun="Token.translate"+((this.id)?" ["+this.id+"]":"");
if (!this.domObj)
this.domObj=document.getElementById(this.id);
if ((!this.domObj)&&(!this.dictId)&&(this.paramList)) {
var tmp=localization.lngMg.getText(this.dictId,this.paramList);
return;
}
if (this.domObj){
if ((this.dictId)||(this.paramList))
updateDomObj(this.domObj,localization.lngMg.getText(this.dictId,this.paramList))
if (this.attrList) {
for (var attrName in this.attrList) {
localization.fun="Token.translate"+" ["+this.id+"."+attrName+"]";
var attrValue = localization.lngMg.getText(this.attrList[attrName].attrDictId, this.attrList[attrName].attrParamList);
this.domObj[attrName]=attrValue;
}
}
}
}
catch(err){
var errObj = localization.trc.setError("TknTransErr",[this.id+"."+attrName]);
}
};
Token.prototype.write = function() {
if (this.dictId!=null)
document.write(dictionaries.gettext(this.dictId,this.paramList));
};
this.setToken = function(domId, dictId, paramList)
{
var mess="";
var dictObj;
localization.page=this.page;
localization.fun="setToken ["+domId+"]";
if (!localization.ENABLED) return;
if (dictId) {
if (!localization.lngMg.isDictItemExist(dictId)) {
this.error = localization.trc.setError("DINotFound",[dictId]);
return false;
}
}
if (paramList) {
mess=CheckParamList(paramList);
if (mess!="") {
this.error = localization.trc.setError("TknParErr",[mess]);
return false;
}
}
var token = new Token(domId, dictId, dictObj, paramList);
pageTokenArr[domId]=token;
token.translate();
return true;
};
this.setServerMessageToken = function(domId,dictId,text,paramList)
{
var mess="";
var dictObj;
var patt0 = new RegExp("\\b\\d+[.,]?\\d*","g");
localization.page=this.page;
localization.fun="setServerMessageToken ["+domId+"]";
if (!localization.ENABLED) return;
if (!localization.lngMg.addDefaultDictionaryItem(dictId, text)) {
this.error = localization.error;
return false;
}
if (paramList) {
var paramType;
var tokenParamList = new Array();
for (var i=0; i<paramList.length; i++) {
paramType = TKN_CONST;
if (!isNaN(paramList[i]))
if (patt0.test(paramList[i]))
paramType = TKN_NUMBER;
var newParam = new Array();
newParam[0]= paramType;
newParam[1]=paramList[i];
tokenParamList[i]=newParam;
}
mess=CheckParamList(tokenParamList);
if (mess!="") {
this.error = localization.trc.setError("TknParErr",[mess]);
alert("mess="+mess);
return false;
}
}
else {
this.error = localization.trc.setError("TknParMiss");
return false;
}
var token = new Token(domId, dictId, dictObj, tokenParamList);
pageTokenArr[domId]=token;
token.translate();
return true;
};
this.setTokenAttribute = function(domId, attrName, dictId, paramList)
{
if (!localization.ENABLED) return;
localization.page=this.page;
localization.fun="setTokenAttribute ["+domId+"."+attrName+"]";
if (!pageTokenArr[domId]) {
this.error = localization.trc.setError("TknNotExist",[domId]);
return false;
}
if (dictId&&(!localization.lngMg.isDictItemExist(dictId))) {
this.error = localization.trc.setError("DINotFound",[dictId]);
return false;
}
if (paramList) {
mess=CheckParamList(paramList);
if (mess!="") {
this.error = localization.trc.setError("TknParErr",mess);
return false;
}
}
var token = pageTokenArr[domId];
if (!token.attrList)
token.attrList = new Array();
token.attrList[attrName]= new TokenAttribute(attrName, dictId, paramList);
if (token.domObj) {
try {
var attrValue = localization.lngMg.getText(dictId, paramList);
token.domObj[attrName]=attrValue;
}
catch(err){
this.error = localization.trc.setError("TknAttrTransErr");
return false;
}
}
return true;
};
var TokenAttribute = function (attrName, attrDictId, attrParamList)
{
this.attrName = attrName;
this.attrDictId = attrDictId;
this.attrParamList = attrParamList;
};
this.removeTokenAttribute = function(domId, attrName)
{
if (!localization.ENABLED) return;
localization.page=this.page;
localization.fun="removeTokenAttribute ["+domId+"."+attrName+"]";
if (!pageTokenArr[domId]) {
this.error = localization.trc.setError("TknNotExist",[domId]);
return false;
}
else {
var token = pageTokenArr[domId];
token.attrList[attrName]= null;
}
return true;
};
this.removeToken = function(domId) {
if (!localization.ENABLED) return;
pageTokenArr[domId]=null
};
this.translate = function(lngSelContainer) {
translatePage()
};
this.getDictItemSeverity = function(hashKey) {
return localization.lngMg.getDictItemSeverity(hashKey)
}
this.getActiveDateFormat = function() {
return localization.lngMg.getActiveDateFormat();
};
this.getActiveTimeFormat = function() {
return localization.lngMg.getActiveTimeFormat();
};
this.getActiveDateTimeFormat = function() {
return localization.lngMg.getActiveDateFormat()+" "+localization.lngMg.getActiveTimeFormat();
};
this.getActiveNumberFormat = function() {
return localization.lngMg.getActiveNumberFormat();
};
this.getLocalLangSysName = function() {
return localization.lngMg.getLocalLangSysName();
};
this.getActiveLangCode = function() {
return localization.lngMg.getActiveLangCode();
};
this.getActiveDecimalDelim = function() {
return localization.lngMg.getActiveDecimalDelim();
}
this.getActiveDigitGroupDelim = function() {
return localization.lngMg.getActiveDigitGroupDelim();
}
this.getActiveShortBtnPercentage = function() {
return localization.lngMg.getActiveShortBtnPercentage();
}
this.getActiveLongBtnPercentage = function() {
return localization.lngMg.getActiveLongBtnPercentage();
}
this.createDateObject = function(dateStr, dateFormat) {
return localization.lngMg.createDateObject(dateStr, dateFormat)
};
this.createNumberObject = function(paramValue) {
var ret=localization.lngMg.createNumberObject(paramValue)
if (!ret) this.error = localization.error;
return ret;
};
this.addDefaultDictionaryItem = function(itemId, itemText) {
localization.lngMg.addDefaultDictionaryItem(itemId, itemText);
};
this.langReload = function() {
localization.langReload();
};
this.getText = function(dictId, paramList) {
return localization.lngMg.getText(dictId, paramList);
};
this.destroy = function() {
if (!localization.ENABLED) return;
try {localization.removePage(this.id);}
catch(err){}
};
function CheckParamList(paramList) {
var arrTypes = new Array("","TKN_CONST","TKN_DICT_ITEM","TKN_DATE_TIME","TKN_DATE","TKN_TIME","TKN_NUMBER","TKN_CALLBACK","TKN_DATE_SHORT_TIME","TKN_SHORT_TIME");
var ok=true;
var mess="";
for (var i=0; i<paramList.length; i++) {
if (typeof(paramList[i][1])=='string')
paramList[i][1]=paramList[i][1].replace(/&nbsp;/g," ");
switch (paramList[i][0]) {
case TKN_CONST: {ok=(paramList[i][1]); break;}
case TKN_DICT_ITEM: {ok=(localization.lngMg.isDictItemExist(paramList[i][1])); break;}
case TKN_DATE_SHORT_TIME:
case TKN_SHORT_TIME:
case TKN_DATE_TIME:
case TKN_DATE:
case TKN_TIME: {
if (!(null!=paramList[i][1] && 'object'==typeof(paramList[i][1])))
paramList[i][1]=localization.lngMg.createDateObject(paramList[i][1],paramList[i][2]);
ok =((paramList[i][1])&&(!isNaN(paramList[i][1].getFullYear()))); break;
}
case TKN_NUMBER: {ok=(!isNaN(paramList[i][1])); break;}
case TKN_CALLBACK: {ok=('function'==typeof(paramList[i][1])||'object'==typeof(paramList[i][1]));break;}
default: {mess="Unknown parameter type"; break;}
}
if (!ok) {
mess="Invalid token parameter. Type: "+arrTypes[paramList[i][0]]+ ".Value: "+paramList[i][1]+ ".Type: "+typeof(paramList[i][1]);
break;
}
}
return mess;
}
function translatePage() {
for (var i in pageTokenArr)
if (pageTokenArr[i])
try {pageTokenArr[i].translate();}
catch(err){pageTokenArr[i]=null;};
}
function getTopApp() {
var _top = top;
if (_top.localization){
return _top;
}
if (opener) {
if (opener.top)
if (opener.top.localization)
return opener.top;
if (opener.opener) {
if (opener.opener.top)
if (opener.opener.top.localization)
return opener.opener.top;
if (opener.opener.opener) {
if (opener.opener.opener.top)
if (opener.opener.opener.top.localization)
return opener.opener.opener.top;
}
}
};
if (!(_top.localization)) {
for (var i=0; i<_top.frames.length; i++) {
if (_top.frames[i].localization){
_top = _top.frames[i];
break;
}
}
};
return _top;
}
function updateDomObj(domObj, tranStr)
{
if (domObj) {
domObj.innerHTML=tranStr;
}
}
};
function projTknObj(id, page)
{
this.tknObj = new PageTokens(id,page);
this.btnColl = new Array();
this.initButtonResize();
}
projTknObj.prototype.initButtonResize = function()
{
var tokenObj = this;
this.setTokenWithError("btnResizer",null,[[TKN_CALLBACK,function(){setButtonsSizeGeneral(tokenObj)}]]);
}
projTknObj.prototype.destroy = function()
{
this.tknObj.destroy();
}
projTknObj.prototype.langReload = function()
{
this.tknObj.langReload();
}
projTknObj.prototype.getLocalLangSysName = function()
{
return this.tknObj.getLocalLangSysName();
}
projTknObj.prototype.setServerMessageToken = function(domId,dictId,text,paramList)
{
return this.tknObj.setServerMessageToken(domId,dictId,text,paramList);
}
projTknObj.prototype.setToken = function(domId, dictId, paramList)
{
return this.tknObj.setToken(domId, dictId, paramList);
}
projTknObj.prototype.setTokenAttribute = function(domId, attrName, dictId, paramList)
{
this.tknObj.setTokenAttribute(domId, attrName, dictId, paramList);
}
projTknObj.prototype.getText = function(dictId, paramList)
{
return this.tknObj.getText(dictId, paramList);
}
projTknObj.prototype.init = function(lngSelContainer)
{
this.tknObj.init(lngSelContainer);
}
projTknObj.prototype.removeToken = function(domId)
{
this.tknObj.removeToken(domId);
}
projTknObj.prototype.removeTokenAttribute = function(domId, attrName)
{
this.tknObj.removeTokenAttribute(domId, attrName);
}
projTknObj.prototype.translate = function(lngSelContainer)
{
this.tknObj.translate(lngSelContainer);
}
projTknObj.prototype.getActiveDateFormat = function()
{
return this.tknObj.getActiveDateFormat();
}
projTknObj.prototype.getActiveTimeFormat = function()
{
return this.tknObj.getActiveTimeFormat();
}
projTknObj.prototype.getActiveDateTimeFormat = function()
{
return this.tknObj.getActiveDateTimeFormat();
}
projTknObj.prototype.getActiveNumberFormat = function()
{
return this.tknObj.getActiveNumberFormat();
}
projTknObj.prototype.getActiveDecimalDelim = function()
{
return this.tknObj.getActiveDecimalDelim();
}
projTknObj.prototype.getActiveDigitGroupDelim = function()
{
return this.tknObj.getActiveDigitGroupDelim();
}
projTknObj.prototype.getDictItemSeverity = function(hashKey)
{
return this.tknObj.getDictItemSeverity(hashKey);
}
projTknObj.prototype.createDateObject = function(dateStr, dateFormat)
{
return this.tknObj.createDateObject(dateStr, dateFormat);
}
projTknObj.prototype.createNumberObject = function(paramValue)
{
return this.tknObj.createNumberObject(paramValue);
}
var LEGAL_INTEGER_CHARS = "1234567890";
var LEGAL_IPv4_CHARS = "1234567890.";
var LEGAL_MAC_CHARS = "1234567890abcdefABCDEF:";
var LEGAL_HEX_CHARS = "1234567890abcdefABCDEF";
var LEGAL_IPv6_CHARS = "1234567890abcdefABCDEF:.";
var LEGAL_DOMAINNAME_CHARS = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-_";
var LEGAL_ALPHANUMERIC_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var LEGAL_SPECIAL_CHAR_VAR = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|} " + "\xA0";
var LEGAL_SPECIAL_CHAR = ":,./_-=;";
var LEGAL_SPECIAL_CHAR_DNS = ".-";
var ILLEGAL_ACL_NAME_CHARS = "#";
var DYN_LENGTH_DATE = 1;
var DYN_LENGTH_TIME = 2;
var DYN_LENGTH_DATETIME = 3;
var DYN_LENGTH_TIME_SHORT = 4;
var IS_ILLEGAL_CHARS = 5;
projTknObj.prototype.getShortButtonWidth = function()
{
return localization.lngMg.getActiveShortBtnPercentage() / 100 *
STYLING.buttons.getShortWidth() - STYLING.buttons.getMinWidth();
}
projTknObj.prototype.getLongButtonWidth = function()
{
return localization.lngMg.getActiveLongBtnPercentage() / 100 *
STYLING.buttons.getLongWidth() - STYLING.buttons.getMinWidth();
}
projTknObj.prototype.setButtonsSize = function()
{
for(var i = 0; i < this.btnColl.length; i++)
{
if(this.btnColl[i][1]=="long")
this.setTokenAttribute(this.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getLongButtonWidth().toString()]]);
else
this.setTokenAttribute(this.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getShortButtonWidth().toString()]]);
}
}
function setButtonsSizeGeneral(tokenObj)
{
for(var i = 0; i < tokenObj.btnColl.length; i++)
{
if(tokenObj.btnColl[i][1]=="long")
tokenObj.setTokenAttribute(tokenObj.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getLongButtonWidth().toString()]]);
else
tokenObj.setTokenAttribute(tokenObj.btnColl[i][0],"width",null,[[TKN_CONST,_top.pgTkn.getShortButtonWidth().toString()]]);
}
}
projTknObj.prototype.createLocalizedLabel = function(txt, className, htmlFor, id, isRequired, tokenID, paramList, parentId)
{
if(CreateLabel(txt, className, htmlFor, id, isRequired,parentId))
this.setTokenWithError(id+"_separator","10999");
this.setTokenWithError(id, tokenID, paramList);
if(isRequired)
{
this.setTokenWithError(id+"_img");
this.setTokenAttribute(id+"_img","title","10997");
}
}
projTknObj.prototype.createLocalizedRangeLabel = function(fromVal, toVal, lblId, dictId, parentId)
{
this.createLocalizedLabel("", "hint", "", lblId, false, dictId, [[TKN_NUMBER, fromVal],[TKN_NUMBER, toVal]], parentId);
}
projTknObj.prototype.createLocalizedRangeLabel2 = function(arrRange , lblId, dictId, parentId)
{
if (arrRange.length > 1)
{
if (!dictId)
dictId = "10720"
this.createLocalizedLabel("", "hint", "", lblId, false, dictId, [[TKN_NUMBER, arrRange[0][0]],[TKN_NUMBER, arrRange[0][1]],[TKN_NUMBER, arrRange[1][0]],[TKN_NUMBER, arrRange[1][1]]], parentId);
}
else
{
if (!dictId)
dictId = "10714"
this.createLocalizedLabel("", "hint", "", lblId, false, dictId, [[TKN_NUMBER, arrRange[0][0]],[TKN_NUMBER, arrRange[0][1]]], parentId);
}
}
projTknObj.prototype.CreateLocalizedButtonApply = function (id, parentId) {
id = "defaultButton";
this.CreateLocalizedButtonShortDefault("10004", "if(formSubmit()) {_top.STYLING.afterPOST=self.location.pathname;if(_top.timeSetAndLoad)startTimingPost();document.forms[0].submit();}", id, parentId);
this.setToken(id, "10004");
this.setTokenAttribute(id, "title", "10004");
addjQuery(true);
$(document).ready(function () {
try {
var text = self.location + '';
var url = '/Vmember/bridg_vlan_membership_m.htm'; var resalt = text.match(url);
var url1 = '/stp/bridg_spanTree_stp_properties_m.htm'; var resalt1 = text.match(url1);
var url2 = '/sysinfo/system_general_time_m.htm'; var resalt2 = text.match(url2);
}
catch (text) { }
if ((resalt1 != null)||(resalt1 != '')||(resalt1 != undefined)){return;}
if ((resalt2 != null)||(resalt2 != '')||(resalt2 != undefined)){return;}
if ((resalt == null)||(resalt == '')||(resalt == undefined)) {
try {
$('#defaultButton').focus();
$("#defaultButton").keyup(function (event) {
if ((event.keyCode == 13) || (event.which == 13)) {
$("#defaultButton").click();
}
});
}
catch ($) { }
}
});
}
projTknObj.prototype.CreateLocalizedButtonApplyNoSubmit = function(onclick, parentId)
{
var id = "defaultButton";
this.CreateLocalizedButtonShortDefault("10004",onclick, id, parentId);
this.setToken(id, "10004");
this.setTokenAttribute(id,"title","10004");
}
projTknObj.prototype.CreateLocalizedButtonClose = function(id, parentId)
{
if(!id)id = "closeButton";
if (parent.document.querySelectorAll(".tbox").length) {
CreateButtonShort("", "ConfirmWindowClosing(true);", id, parentId);
this.setToken(id, "10005");
this.setTokenAttribute(id,"title","10005");
} else{
CreateButtonShort("", "ConfirmWindowClosing(false);", id, parentId);
this.setToken(id, "10022");
this.setTokenAttribute(id,"title","10022");
}
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonShortDefault = function (tokenId, onclick, id, parentId) {
id = "defaultButton";
CreateButtonShortDefault("", onclick, parentId);
this.setToken(id, tokenId);
this.setTokenAttribute(id, "title", tokenId);
this.setToken(id + "_tdNode");
var btnArr = new Array(id + "_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id + "_tdNode", "width", null, [[TKN_CONST, _top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonShort = function(tokenId, onclick, id, parentId,titleTokenId)
{
CreateButtonShort("",onclick,id, parentId);
this.setToken(id, tokenId);
if(!titleTokenId) titleTokenId = tokenId;
this.setTokenAttribute(id,"title",titleTokenId);
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonLong = function(tokenId, onclick, id, parentId, titleTokenId)
{
CreateButtonLong("",onclick,id, parentId);
this.setToken(id, tokenId);
if(!titleTokenId) titleTokenId = tokenId;
this.setTokenAttribute(id,"title",titleTokenId);
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "long");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getLongButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedButtonLongDefault = function(tokenId, onclick, id, parentId)
{
id = "defaultButton";
CreateButtonLongDefault("",onclick,parentId);
this.setToken(id, tokenId);
this.setTokenAttribute(id,"title",tokenId);
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "long");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getLongButtonWidth()]]);
}
projTknObj.prototype.CreateLocalizedTableHeaderButton = function(tokenId, onclick, id, parentId)
{
CreateTableHeaderButton("",onclick,id,parentId);
this.setTokenWithError(id, tokenId);
this.setTokenAttribute(id,"title",tokenId);
}
projTknObj.prototype.CreateLocalizedButtonReset = function(id, func, parentId, tokenObjNameString)
{
if(!tokenObjNameString)tokenObjNameString = "pgTkn";
if(window.frameElement.id != "mainFrame_gw" && window.frameElement.id != "mainFrame"){
CreateButtonShort("", "LocalizedConfirmFormReset(" + func + "," + tokenObjNameString + ",true)", id, parentId);
this.setTokenWithError(id, "10005");
this.setTokenAttribute(id, "title", "10005");
} else {
CreateButtonShort("", "LocalizedConfirmFormReset(" + func + "," + tokenObjNameString + ",false)", id, parentId);
this.setTokenWithError(id, "10022");
this.setTokenAttribute(id, "title", "10022");
}
this.setToken(id+"_tdNode");
var btnArr = new Array(id+"_tdNode", "short");
this.btnColl.push(btnArr);
this.setTokenAttribute(id+"_tdNode", "width", null, [[TKN_CONST,_top.pgTkn.getShortButtonWidth()]]);
}
projTknObj.prototype.alterLocalizedContextMessage = function(cntrl, isShown, dictId, paramList)
{
AlterContextMessage(cntrl, isShown, "");
if(!this.setToken(GetContextMessageId(cntrl.id),dictId,paramList))
showLclErr(this.tknObj.error);
}
projTknObj.prototype.displayLocalizedPageMessage = function(msgElemId, dictId, severity, isShown, paramList)
{
var dispSeverity = parseInt(this.getDictItemSeverity(dictId),10);
if(dispSeverity == 0)dispSeverity = severity;
AlterPageMessage("", dispSeverity, isShown);
if(!this.setToken("pageMessageLine0",dictId,paramList))
showLclErr(this.tknObj.error);
}
projTknObj.prototype.AppendLocalizedPageMessage = function(dictId, paramList)
{
var msgCount = AppendPageMessage();
this.setTokenWithError("pageMessageLine" + msgCount, dictId, paramList);
}
projTknObj.prototype.openLocalizedConfirmationDialogUsingStringMsg = function(msgString, titleDictId, func)
{
_top.STYLING.alertBox.title = this.getText(titleDictId);
_top.STYLING.alertBox.msg = msgString;
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenConfirmationDialog();
}
projTknObj.prototype.openLocalizedConfirmationDialog = function(msgDictId, titleDictId, func, paramListMsg, paramListTitle, widthUD, heightUD)
{
_top.STYLING.alertBox.title = this.getText(titleDictId,paramListTitle);
_top.STYLING.alertBox.msg = this.getText(msgDictId,paramListMsg);
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenConfirmationDialog(widthUD, heightUD);
}
projTknObj.prototype.openLocalizedConfirmationDialogOptional = function(msgDictId, titleDictId, func)
{
_top.STYLING.alertBox.title = this.getText(titleDictId);
_top.STYLING.alertBox.msg = this.getText(msgDictId);
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenConfirmationDialogOptional();
}
projTknObj.prototype.openLocalizedNotifyDialog = function(msgDictId, titleDictId, func, severity, paramListMsg, paramListTitle)
{
_top.STYLING.alertBox.title = this.getText(titleDictId, paramListTitle);
_top.STYLING.alertBox.msg = this.getText(msgDictId, paramListMsg);
if(!severity)severity = 3;
_top.STYLING.alertBox.severity = severity;
if(typeof(func) == "function" || typeof(func) == "object")
_top.STYLING.alertBox.func = func;
else
_top.STYLING.alertBox.func = function(){eval(func)};
OpenNotificationDialog();
}
projTknObj.prototype.setTokenWithError = function(elementID, dicID, paramList)
{
if(!this.setToken(elementID, dicID, paramList))
showLclErr(this.tknObj.error);
}
projTknObj.prototype.setInterfaceNameToken = function(interfaceValue,targetCntrlId,isLong)
{
var formelem = document.forms[0];
var interfaceValue,interfaceText_ML;
var numOfPorts,numOfTrunks;
var dictID, paramList;
var numOfTrunks,numOfPorts;
if (_top)
{
numOfPorts = parseInt(_top.NumberOfPorts);
numOfTrunks = parseInt(_top.NumberOfTrunks);
}
if(interfaceValue>(parseInt(_top.trunkFirstIndex)+numOfTrunks-1))
{
if(_top && _top.oobNumOfPorts && _top.oobNumOfPorts>0 && interfaceValue>=_top.oobFirstIndex && interfaceValue<(_top.oobFirstIndex+_top.oobNumOfPorts))
{
if (_top && _top.oobNumOfPorts>1)
{
dictID = "10200";
paramList = [[TKN_NUMBER,(interfaceValue-_top.oobFirstIndex+1).toString()]];
}
else dictID = "10201";
}
else if(_top && _top.lbpNumOfPorts && _top.lbpNumOfPorts>0 && interfaceValue>=_top.lbpFirstIndex && interfaceValue<(_top.lbpFirstIndex+_top.lbpNumOfPorts))
{
if (_top && _top.lbpNumOfPorts>1)
{
dictID = "10202";
paramList = [[TKN_NUMBER,(interfaceValue-_top.lbpFirstIndex+1).toString()]];
}
else dictID = "10203";
}
else if (interfaceValue>=200000)
{
dictID = "10204";
paramList = [[TKN_NUMBER,(interfaceValue-200000+1).toString()]];
}
else if (interfaceValue>=100000)
{
dictID = "10205";
paramList = [[TKN_NUMBER,(interfaceValue-100000+1).toString()]];
}
}
else{
if(interfaceValue>=_top.trunkFirstIndex)
{
dictID = "10206";
paramList = [[TKN_NUMBER,(interfaceValue-parseInt(_top.trunkFirstIndex)+1).toString()]];
}
else
{
dictID = "";
paramList = [[TKN_CONST,getPortNameFromNumber(interfaceValue,isLong).toString()]];
}
}
this.setTokenWithError(targetCntrlId, dictID, paramList);
}
projTknObj.prototype.createLocalizedEnableControl =function(ctrlName, dicID, onClick,labelName, parentID)
{
if(parentID)
{
var htmlStr = "";
var tdID = ctrlName + "_tdLblCont";
htmlStr = htmlStr + ('<table><tr>');
htmlStr = htmlStr + ('<td><input type="checkbox" onclick="'+onClick+'" name="'+ctrlName+'" id="'+ctrlName+'"><label for="'+ctrlName+'"></label></td>');
htmlStr = htmlStr + ('<td class="right" id="'+tdID+'">');
htmlStr = htmlStr + ('</td>');
htmlStr = htmlStr + ('</tr></table>');
document.getElementById(parentID).innerHTML = htmlStr;
this.createLocalizedLabel("", "", ctrlName,labelName, false, dicID, null, tdID);
}
else
{
document.write('<table><tr>');
document.write('<td><input type="checkbox" onclick="'+onClick+'" name="'+ctrlName+'" id="'+ctrlName+'"><label for="'+ctrlName+'"></label></td>');
document.write('<td class="right">');
this.createLocalizedLabel("", "", ctrlName,labelName, false,dicID);
document.write('</td>');
document.write('</tr></table>');
}
}
projTknObj.prototype.createLocalizedFilterLabel=function (filterType, selectID, labelID, dictID, parentId)
{
if (!dictID) dictID = "10067";
if (!labelID) labelID="lblFilter"
if (!selectID) selectID="slctFilter";
var cntrlHTML = "";
switch (filterType)
{
case "1":
cntrlHTML +='<table><tr><td style="padding-right:0px;" id="tdLbl_'+labelID+'">';
cntrlHTML +='</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_Interface">';
cntrlHTML +='</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_EqualsTo">';
cntrlHTML +='</td></tr></table>';
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "left", selectID, labelID, false, "10060",null, "tdLbl_"+labelID);
this.createLocalizedLabel("", "filterFieldItalic", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
this.createLocalizedLabel("", "equals", selectID, labelID+"_EqualsTo", false, "10066", null, "tdLbl_"+labelID+"_EqualsTo");
break;
case "2":
cntrlHTML +='<span id="tdLbl_'+labelID+'_Interface"></span>';
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
break;
default:
break;
}
}
projTknObj.prototype.createLocalizedFilterLabelGW = function (filterType, selectID, labelID, parentID, dictID)
{
if (!dictID) dictID = "10067";
if (!labelID) labelID="lblFilter"
if (!selectID) selectID="slctFilter";
var cntrlHTML = "";
switch (filterType)
{
case "1":
cntrlHTML += ('<table><tr><td style="padding-right:0px;" id="tdLbl_'+labelID+'">');
cntrlHTML += ('</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_Interface">');
cntrlHTML += ('</td><td style="padding-right:0px;" id="tdLbl_'+labelID+'_EqualsTo">');
cntrlHTML += ('</td></tr></table>');
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "left", selectID, labelID, false, "10060", null, "tdLbl_"+labelID);
this.createLocalizedLabel("", "filterFieldItalic", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
this.createLocalizedLabel("", "equals", selectID, labelID+"_EqualsTo", false, "10066", null, "tdLbl_"+labelID+"_EqualsTo");
break;
case "2":
cntrlHTML +='<span id="tdLbl_'+labelID+'_Interface"></span>';
if (IsUndefOrNull(parentId))
document.write(cntrlHTML);
else
document.getElementById(parentId).innerHTML = cntrlHTML;
this.createLocalizedLabel("", "", selectID, labelID+"_Interface", false, dictID, null, "tdLbl_"+labelID+"_Interface");
break;
default:
break;
}
}
projTknObj.prototype.createLocalizedUpDown = function (onClickUp,onClickDown, idUp,idDown)
{
document.write('<table><tr><td>');
_CreateButtonNextBackTransfer(onClickUp, idUp, 24, null,"btnTransformUp");
document.write('</td></tr><tr><td class=transferBtnsSpacing>');
_CreateButtonNextBackTransfer(onClickDown, idDown, 24, null,"btnTransformDown");
document.write('</td></tr></table>');
this.setTokenWithError(idUp);
this.setTokenWithError(idDown);
this.setTokenAttribute(idUp,"title","10030");
this.setTokenAttribute(idDown,"title","10031");
}
projTknObj.prototype.createLocalizedTransBoxes = function (onClickAdd,onClickRemove, idAdd,idRemove)
{
document.write('<table><tr><td>');
_CreateButtonNextBackTransfer(onClickAdd, idAdd, 24, null,"btnTransformNext");
document.write('</td></tr><tr><td class=transferBtnsSpacing>');
_CreateButtonNextBackTransfer(onClickRemove, idRemove, 24, null,"btnTransformBack");
document.write('</td></tr></table>');
this.setTokenWithError(idAdd);
this.setTokenWithError(idRemove);
this.setTokenAttribute(idAdd,"title","10053");
this.setTokenAttribute(idRemove,"title","10054");
}
projTknObj.prototype.createLocalizedBackNext = function (onClickBack, onClickNext, idBack, idNext, parentId)
{
if (IsUndefOrNull(parentId))
{
document.write("<div align=right>")
document.write('<table style="text-align:right;"><tr><td>');
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, null,"btnBack");
document.write('</td><td>');
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, null,"btnNext");
document.write('</td></tr></table>');
document.write("</div>");
}
else
{
var btnLiteral = '<div align=right><table style="text-align:right;"><tr><td id="'+parentId+'_tdBtnBack">';
btnLiteral += '</td><td id="'+parentId+'_tdBtnNext">';
btnLiteral += '</td></tr></table></div>';
document.getElementById(parentId).innerHTML = btnLiteral;
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, parentId+"_tdBtnBack", "btnBack");
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, parentId+"_tdBtnNext", "btnNext");
}
this.setTokenWithError(idBack);
this.setTokenWithError(idNext);
this.setTokenAttribute(idBack,"title","10007");
this.setTokenAttribute(idNext,"title","10008");
}
projTknObj.prototype.createLocalizedBackNextWithPager = function (onClickBack, onClickNext, idBack, idNext,pageSize, totalRecordsCount,currPageNum,parentId)
{
var totalPagesCount = Math.ceil(totalRecordsCount / pageSize);
var currPageIndex = (IsUndefOrNull(currPageNum))?_top.currPageIndex:currPageNum;
if(totalPagesCount == 0) currPageIndex = 0;
if (IsUndefOrNull(parentId))
{
document.write("<div id='divPaging' align=right>")
document.write('<table style="text-align:right;"><tr><td>');
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, null,"btnBack");
document.write('</td><td>');
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, null,"btnNext");
document.write('</td></tr></table>');
document.write('</div><div id="divEmptyPaging" style="display:none"><img SRC="../styling/images/empty.gif"/></div>');
}
else
{
var btnLiteral = '<div id="divPaging" align=right><table style="text-align:right;"><tr><td id="'+parentId+'_tdBtnBack">';
btnLiteral += '</td>';
btnLiteral += '<td id="'+parentId+'_tdBtnNext">';
btnLiteral += '</td></tr></table></div><div id="divEmptyPaging" style="display:none"><img SRC="../styling/images/empty.gif"/></div>';
document.getElementById(parentId).innerHTML = btnLiteral;
_CreateButtonNextBackTransfer(onClickBack, idBack, 24, parentId+"_tdBtnBack", "btnBack");
_CreateButtonNextBackTransfer(onClickNext, idNext, 24, parentId+"_tdBtnNext", "btnNext");
}
this.setTokenWithError(idBack);
this.setTokenWithError(idNext);
this.setTokenAttribute(idBack,"title","10007");
this.setTokenAttribute(idNext,"title","10008");
if(totalPagesCount<2 && document.getElementById("divPaging"))
{
document.getElementById("divPaging").style.display="none";
document.getElementById("divEmptyPaging").style.display="";
}
}
projTknObj.prototype.createLocalizedGWPagingLables = function(header,id,pagingType,firstEntryInPage,lastRecord,entryNum,func)
{
var lblLiteral = "<label";
lblLiteral += " class='leftToCmb'>";
lblLiteral += "<span id='lblFirst'";
lblLiteral += "></span></label>";
lblLiteral +="<div class='overr'><select style='margin-top:1px' unselectable='on' id='recordFilter' NAME='recordFilter'";
if (!IsUndefOrNull(func))
{
lblLiteral +="onchange='top.currPageIndex=1;"+ func + "'"
}
lblLiteral +="></select></div>";
lblLiteral += "<label";
lblLiteral += " class='rightToCmb'>";
lblLiteral += "<span id='lblperPage'";
lblLiteral += "></span></label>";
document.getElementById(id+"_lblPaging").innerHTML = lblLiteral;
document.getElementById(id + "_lblPaging").style.marginRight = '100px';
buildComboOptions(this,pagingType);
this.setTokenWithError(id,header);
var slct=document.getElementById("recordFilter");
if (entryNum <= 10) {
slct.style.display = "none";
slct.parentNode.style.display = 'none';
return;
}
if (slct.length > 0) {
this.setTokenWithError("lblFirst", "10718", [[TKN_NUMBER, firstEntryInPage.toString()], [TKN_NUMBER, lastRecord.toString()], [TKN_NUMBER, entryNum.toString()]]);
this.setTokenWithError("lblperPage", "10079");
slct.selectedIndex = slct.length - 1 - getPagingSizeFromCookie(slct, null, pagingType);
_top.numberOfEntriesPerPage = slct.value;
}
}
projTknObj.prototype.createLocalizedRadiosControl = function(radioName)
{
var x=1;
document.write('<table>');
while (arguments[x])
{
document.write('<tr id="tr_'+arguments[x]+"_"+x+'">');
if (x==1)
{
document.write('<td>');
document.write('<input type="radio" checked name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="right">');
}
else
{
document.write('<td class="radioSpacing">');
document.write('<input type="radio" name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="radioSpacing right">');
}
this.createLocalizedLabel("", "", arguments[x],arguments[x+3], false,arguments[x+4],arguments[x+5]);
document.write('</td>');
document.write('</tr>');
x+=6;
}
document.write('</table>');
}
projTknObj.prototype.createLocalizedRadiosControlInLine = function(radioName)
{
var x=1;
document.write('<table>');
document.write('<tr id="tr_'+arguments[x]+"_"+x+'">');
while (arguments[x])
{
if (x==1)
{
document.write('<td>');
document.write('<input type="radio" checked name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="right">');
}
else
{
document.write('<td class="radioSpacing">');
document.write('<input type="radio" name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="radioSpacing right">');
}
this.createLocalizedLabel("", "", arguments[x],arguments[x+3], false,arguments[x+4],arguments[x+5]);
document.write('</td>');
x+=6;
}
document.write('</tr>');
document.write('</table>');
}
projTknObj.prototype.createLocalizedSelectControl = function(selectName)
{
var x = 1;
document.write('<table>');
document.write('<tr>');
while(arguments[x]) {
if (x==1)
{
document.write('<td>');
document.write('<input type="radio" checked name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="right">');
} else {
document.write('<td class="radioSpacing">');
document.write('<input type="radio" name="'+radioName+'" id="'+arguments[x]+'" onclick="'+arguments[x+2]+'" value="'+arguments[x+1]+'" ><label for="'+arguments[x]+'"></label>');
document.write('</td>');
document.write('<td class="radioSpacing right">');
}
this.createLocalizedLabel("", "", arguments[x],arguments[x+3], false,arguments[x+4],arguments[x+5]);
document.write('</td>');
x+=6;
}
document.write('</tr>');
document.write('<table>');
}
projTknObj.prototype.createLocalizedUnitSelector = function(slctId, existUnitCntrlName, existLAGsOnTable, parentID)
{
var cntrlHTML = "";
var ctrlTknArr = new Array();
var tknArr;
if(!existUnitCntrlName)
existUnitCntrlName = "rlPhdModuleIndex$select";
if(document.forms[0])
var unitCntrl = document.forms[0].elements[existUnitCntrlName];
else
unitCntrl = document.getElementById(existUnitCntrlName);
cntrlHTML += ("<div class='overr'><select unselectable='on' id='"+slctId+"' name='"+slctId+"' class=left>");
if(unitCntrl)
{
if(unitCntrl.options.length > 0)
{
for(var i = 0; i < unitCntrl.options.length; i++)
{
var unitNum = unitCntrl.options[i].text;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10063", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
else
{
var unitsArr=_top.globalPoller.data.dataBase.units.modulesDataBase[0].module;
if(!_top.isStandAlone && unitsArr.length >= 1)
{
for(var i = 0; i < unitsArr.length; i++)
{
var unitNum = unitsArr[i].moduleNumber[0].value;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10063", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
if(existLAGsOnTable)
{
cntrlHTML += ("<option id='"+slctId+"_opt_LAG' value='lag'></option>");
tknArr = new Array(slctId+"_opt_LAG","10064");
ctrlTknArr.push(tknArr);
}
cntrlHTML += ("</select></div>");
if(parentID)
document.getElementById(parentID).innerHTML = cntrlHTML;
else
document.write(cntrlHTML);
for(var i = 0; i < ctrlTknArr.length; i++)
{
if(ctrlTknArr[i].length == 3)
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1],ctrlTknArr[i][2]);
else
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1]);
}
}
projTknObj.prototype.createLocalizedUnitSelectorShort = function(slctId, existUnitCntrlName, existLAGsOnTable, parentID)
{
var cntrlHTML = "";
var ctrlTknArr = new Array();
var tknArr;
if(!existUnitCntrlName)
existUnitCntrlName = "rlPhdModuleIndex$select";
if(document.forms[0])
var unitCntrl = document.forms[0].elements[existUnitCntrlName];
else
unitCntrl = document.getElementById(existUnitCntrlName);
cntrlHTML += ("<div class='overr'><select unselectable='on' id='"+slctId+"' name='"+slctId+"' class=left>");
if(unitCntrl)
{
if(unitCntrl.options.length > 0)
{
for(var i = 0; i < unitCntrl.options.length; i++)
{
var unitNum = unitCntrl.options[i].text;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10077", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
else
{
var unitsArr=_top.globalPoller.data.dataBase.units.modulesDataBase[0].module;
if(!_top.isStandAlone && unitsArr.length >= 1)
{
for(var i = 0; i < unitsArr.length; i++)
{
var unitNum = unitsArr[i].moduleNumber[0].value;
var slotNum = _top.slotPerModuleArr[parseInt(unitNum,10)];
cntrlHTML += ("<option id='"+slctId+"_opt_"+i+"' value='"+unitNum+"'></option>");
tknArr = new Array(slctId+"_opt_"+i, "10077", [[TKN_NUMBER,unitNum],[TKN_NUMBER,slotNum.toString()]]);
ctrlTknArr.push(tknArr);
}
}
else
{
cntrlHTML += ("<option id='"+slctId+"_opt_0' value=" + _top.firstPresentModule +"></option>");
tknArr = new Array(slctId+"_opt_0","10062");
ctrlTknArr.push(tknArr);
}
}
if(existLAGsOnTable)
{
cntrlHTML += ("<option id='"+slctId+"_opt_LAG' value='lag'></option>");
tknArr = new Array(slctId+"_opt_LAG","10064");
ctrlTknArr.push(tknArr);
}
cntrlHTML += ("</select></div>");
if(parentID)
document.getElementById(parentID).innerHTML = cntrlHTML;
else
document.write(cntrlHTML);
for(var i = 0; i < ctrlTknArr.length; i++)
{
if(ctrlTknArr[i].length == 3)
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1],ctrlTknArr[i][2]);
else
this.setTokenWithError(ctrlTknArr[i][0],ctrlTknArr[i][1]);
}
}
function loseNumberingStyling(cntrl, tokenObj)
{
onfocusFunc = cntrl.onfocus;
cntrl.onfocus = null;
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
var newVal = tokenObj.createNumberObject(cntrl.value);
if(newVal)
cntrl.value = newVal;
setTimeout(function () {cntrl.select();}, 1);
setTimeout(function () {cntrl.onfocus = onfocusFunc}, 1);
}
function createLocalizedLabel(txt, className, htmlFor, id, isRequired, tokenID, paramList, parentID)
{
if(CreateLabel(txt, className, htmlFor, id, isRequired, parentID))
pgTkn.setToken(id+"_separator","10999");
if(tokenID)
pgTkn.setToken(id, tokenID, paramList);
}
function showLclErr(ErrObj)
{
if (ErrObj)
_top.MsgLog.addMsg("My Localization Error\nPage: "+ErrObj.page+".\nFunction: "+ErrObj.fun+"\nCode :"+ErrObj.code+"\n"+ErrObj.mess,"Warning");
}
function validateStringWithNoSpaces(id, e)
{
var ctrl = document.getElementById(id);
var keyChar, key;
if (window.event)
key = e.keyCode;
else
key = e.which;
var ctrlClicked = e.ctrlKey;
keyChar = String.fromCharCode(key);
if (key == 32)
return false;
else return true;
}
function validateLocalizedInput(id, e, maxLength, legalCharsString, isNumeric, tokenObj, extraParams)
{
var isLegalChars = true;
if(!legalCharsString)legalCharsString = "";
if(extraParams)
{
for(var i = 0; i < extraParams.length; i++)
{
switch(extraParams[i])
{
case IS_ILLEGAL_CHARS:
isLegalChars = false;
break;
case DYN_LENGTH_DATE:
maxLength = tokenObj.getActiveDateFormat().length;
break;
case DYN_LENGTH_TIME:
case DYN_LENGTH_TIME_SHORT:
var timeFormat = tokenObj.getActiveTimeFormat();
if(timeFormat.toLowerCase().indexOf("am/pm") != -1)
maxLength = timeFormat.length - 5;
else
maxLength = timeFormat.length - 2;
legalCharsString = LEGAL_INTEGER_CHARS;
for(var j = 0; j < timeFormat.length; j++)
{
if(legalCharsString.indexOf(timeFormat.charAt(j)) == -1)
{
legalCharsString = legalCharsString + timeFormat.charAt(j);
if(timeFormat.charAt(j) != timeFormat.charAt(j).toLowerCase())
legalCharsString = legalCharsString + timeFormat.charAt(j).toLowerCase();
else if(timeFormat.charAt(j) != timeFormat.charAt(j).toUpperCase())
legalCharsString = legalCharsString + timeFormat.charAt(j).toUpperCase();
}
}
break;
case DYN_LENGTH_DATETIME:
var dateTimeFormat = tokenObj.getActiveDateTimeFormat();
if(dateTimeFormat.toLowerCase().indexOf("am/pm") != -1)
maxLength = tokenObj.getActiveDateTimeFormat().length - 5;
else
maxLength = tokenObj.getActiveDateTimeFormat().length - 2;
break;
default:
break;
}
}
}
if(isNumeric)
noCountChars = tokenObj.getActiveDigitGroupDelim();
else
noCountChars = "";
var cntrl = document.getElementById(id);
var allLegalChars = legalCharsString + noCountChars;
var currLength = 0;
var keyChar, key;
if (window.event)
key = e.keyCode;
else
key = e.which;
var ctrlClicked = e.ctrlKey;
keyChar = String.fromCharCode(key);
if(key >= 8192 && key <= 10175)return false;
if (e.type != "paste")
{
if ((key==null) || (key==0) || (key==8) ||
(key==9) || (key==13) || (key==27) || ctrlClicked)
return true;
}
if(noCountChars)
{
for(var i = 0; i < cntrl.value.length; i++)
{
if(noCountChars.indexOf(cntrl.value.charAt(i)) == -1)
currLength++;
}
}
else
currLength = cntrl.value.length;
var selTxt = "";
if (window.getSelection)
{
selTxt = cntrl.value.substring(cntrl.selectionStart,cntrl.selectionEnd)
}
else if (document.getSelection)
selTxt = document.getSelection();
else if (document.selection)
selTxt = document.selection.createRange().text;
if(selTxt.length != 0 && allLegalChars == "")
return true;
if (e.type != "paste")
{
if(currLength >= maxLength && maxLength != -1 && noCountChars.indexOf(keyChar) == -1 && !doesStringOverlapExist(selTxt,legalCharsString))
return false;
}
else
{
var pasteText = "";
if (window.clipboardData)
pasteText += window.clipboardData.getData("Text");
if(currLength > maxLength - pasteText.length && maxLength != -1 && !doesStringOverlapExist(selTxt,legalCharsString))
return false;
}
if (isLegalChars)
{
if (e.type != "paste")
{
if(allLegalChars.indexOf(keyChar) != -1 || allLegalChars == "")
return true;
else
return false;
}
else
{
for (var i =0 ; i < pasteText.length ; i++)
{
keyChar = pasteText.charAt(i);
if (allLegalChars.indexOf(keyChar) == -1 && allLegalChars != "")
return false;
}
return true;
}
}
else
{
if (e.type != "paste")
{
if(legalCharsString.indexOf(keyChar) != -1 && legalCharsString != "")
return false;
else
return true;
}
else
{
for (var i =0 ; i < pasteText.length ; i++)
{
keyChar = pasteText.charAt(i);
if (legalCharsString.indexOf(keyChar) != -1 && legalCharsString != "")
return false;
}
return true;
}
}
}
projTknObj.prototype.setControlType = function(id, typeEnum)
{
var tokenObj = this;
var cntrl = document.getElementById(id);
var minLength = 0;
var maxLength = -1;
var legalCharactersString = "";
var extraLegalCharactersString = "";
var minVal, maxVal,minVal1,maxVal1;
var isRequired = false;
var isNumeric = false;
var isShort = false;
var validationFunc, validationTimeout;
var extraParams;
var extraFunction = null;
switch(typeEnum.toString())
{
case "1":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2].toString().length;
minVal = arguments[2];
}
if(arguments[3])
{
maxLength = (arguments[3].toString().length > maxLength) ? arguments[3].toString().length : maxLength;
maxVal = arguments[3];
}
legalCharactersString = LEGAL_INTEGER_CHARS;
this.setToken(cntrl.id);
validationFunc = function(){checkValidationRange(cntrl, minVal, maxVal, !isRequired, tokenObj);};
if (arguments[5]) validationTimeout=arguments[5];
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
isNumeric = true;
break;
case "2":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
cntrl.onkeyup = function(e){
if (window.event)
e = window.event;
else if (!e)
return true;
checkStringLength(cntrl,maxLength,tokenObj,e);
}
validationFunc = function(){checkValidationString(cntrl,!isRequired,maxLength,tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "3":
if(cntrl.size != 44)
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
var zeroesNotLegal = (arguments[3]) ? false : true;
validationFunc = function(){checkValidationIP(cntrl, zeroesNotLegal, !isRequired, tokenObj)};
}
else
validationFunc = function(){checkValidationIPFormatOnly(cntrl,!isRequired, tokenObj)};
if (arguments[5]) validationTimeout=arguments[5];
if (arguments[6]) extraFunction = arguments[6];
maxLength = 15;
legalCharactersString = LEGAL_IPv4_CHARS;
break;
case "4":
cntrl.size=44;
isRequired = (arguments[3]) ? true : false;
legalCharactersString = LEGAL_IPv6_CHARS;
maxLength = 45;
if(arguments[2] == "2")
validationFunc = function(){checkIPv6Global(cntrl, true, true, !isRequired, tokenObj)};
else if(arguments[2] == "3")
validationFunc = function(){checkIPv6Local(cntrl, true, !isRequired, tokenObj)};
else if(arguments[2] == "4")
validationFunc = function(){checkIPv6Unicast(cntrl, true, false, !isRequired, tokenObj)};
else
validationFunc = function(){checkIPv6General(cntrl, true, !isRequired, tokenObj)};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "5":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
var isMulticastLegal = (arguments[3]) ? true : false;
validationFunc = function(){checkValidationMAC(cntrl, !isRequired, isMulticastLegal, tokenObj)};
maxLength = 17;
legalCharactersString = LEGAL_MAC_CHARS;
if (arguments[4]) validationTimeout=arguments[4];
break;
case "6":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
extraParams = [DYN_LENGTH_DATE];
this.setToken(cntrl.id);
var minYear = arguments[4];
if(arguments[5])
{
var maxYear = arguments[5];
validationFunc = function(){checkValidationDate(cntrl, !isRequired, tokenObj,minYear,maxYear)};
}
else
{
validationFunc = function(){checkValidationDate(cntrl, !isRequired, tokenObj,minYear)};
}
if (arguments[3]) validationTimeout=arguments[3];
break;
case "7":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
isShort = (arguments[3]) ? true : false;
extraParams = [DYN_LENGTH_TIME];
this.setToken(cntrl.id);
validationFunc = function(){checkValidationTime(cntrl, !isRequired, tokenObj, isShort)};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "8":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
extraParams = [DYN_LENGTH_DATETIME];
this.setToken(cntrl.id);
validationFunc = function(){checkValidationDateTime(cntrl, !isRequired, tokenObj)};
if (arguments[3]) validationTimeout=arguments[3];
break;
case "9":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
legalCharactersString = LEGAL_IPv4_CHARS;
minVal = (arguments[2]) ? arguments[2] : "0";
maxVal = (arguments[3]) ? arguments[3] : "32";
maxLength = 15;
validationFunc = function(){checkValidationMaskWithRanges(cntrl, !isRequired, minVal, maxVal, tokenObj)};
if (arguments[5]) validationTimeout=arguments[5];
if (arguments[6]) extraFunction = arguments[6];
break;
case "10":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
var MibOidAddElementId = arguments[3];
var MibOidMaskElementId = arguments[4];
validationFunc = function(){isMibOidTextValid(!isRequired, document.getElementById(MibOidAddElementId), document.getElementById(MibOidMaskElementId), tokenObj)};
maxLength = 69;
legalCharactersString = LEGAL_IPv4_CHARS;
break;
case "11":
cntrl.size=20;
maxLength = 160;
validationFunc = function(){validateFilename(cntrl, maxLength, tokenObj)};
break;
case "12":
if(cntrl.size != 44)
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
ipFormat = (arguments[2]) ? arguments[2] : "1";
if(ipFormat == "1")
{
legalCharactersString = LEGAL_IPv4_CHARS;
maxLength = 15;
}
else if(ipFormat == "2")
{
legalCharactersString = LEGAL_IPv6_CHARS;
maxLength = 45;
}
if (arguments[3]) validationTimeout=arguments[3];
validationFunc = function(){checkMulticastIP(cntrl, ipFormat, !isRequired, tokenObj)};
break;
case "13":
cntrl.size = 20;
legalCharactersString = LEGAL_INTEGER_CHARS;
if (arguments[3]) validationTimeout=arguments[3];
var legalVals;
if(arguments[2] == "1")
{
maxLength = 3;
legalVals = [1,2,4,6,8,9,17,20,27,35,41,43,44,45,46,51,58,88,89,94,103,115,124,125];
}
else
{
maxLength = 3;
legalVals = [6, 17, 58];
}
validationFunc = function(){checkValidationSpecificValues(cntrl, legalVals, tokenObj, "12068")};
break;
case "14":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
var minHexVal = arguments[2];
var maxHexVal = arguments[3];
validationFunc = function(){checkValidationHexValueRange(cntrl, !isRequired, minHexVal,maxHexVal, tokenObj)};
maxLength = maxHexVal.length;
legalCharactersString = LEGAL_HEX_CHARS;
break;
case "15":
if(cntrl.size != 44)
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
var minOctet = arguments[2];
var maxOctet = arguments[3];
legalCharactersString = LEGAL_MAC_CHARS;
maxLength = (maxOctet * 2) + (maxOctet - 1);
validationFunc = function(){checkValidationOctetString(cntrl, minOctet, maxOctet, !isRequired, tokenObj)};
break;
case "16":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
var anyAllowed = (arguments[3]) ? true : false;
validationFunc = function(){checkValidationMACMulticast(cntrl, !isRequired, !anyAllowed, tokenObj)};
maxLength = 17;
legalCharactersString = LEGAL_MAC_CHARS;
if (arguments[3]) validationTimeout=arguments[3];
break;
case "17":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
validationFunc = function(){checkValidationStringWithNoSpaces(cntrl,!isRequired,maxLength,tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "18":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2].toString().length;
minVal = arguments[2];
}
if(arguments[3])
{
maxLength = (arguments[3].toString().length > maxLength) ? arguments[3].toString().length : maxLength;
maxVal = arguments[3];
}
legalCharactersString = LEGAL_INTEGER_CHARS;
this.setToken(cntrl.id);
validationFunc = function(){checkValidationRangeOut(cntrl, minVal, maxVal, !isRequired, tokenObj);};
if (arguments[5]) validationTimeout=arguments[5];
if (arguments[6]) extraFunction = arguments[6];
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
isNumeric = true;
break;
case "19":
cntrl.size=20;
isRequired = (arguments[2]) ? true : false;
validationFunc = function(){checkValidationNetworkIP(cntrl,!isRequired, tokenObj);};
break;
case "20":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
validationFunc = function(){checkValidationString(cntrl,!isRequired,maxLength,tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
break;
case "21":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_DOMAINNAME_CHARS;
legalChars = true;
validationFunc = function(){checkDomainValidation(cntrl,!isRequired,tokenObj);};
break;
case "22":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + "-";
legalChars = true;
validationFunc = function(){checkHostNameValidation(cntrl,!isRequired,maxLength,tokenObj);};
break;
case "23":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR;
legalChars = true;
validationFunc = function(){checkServerNameValidation(cntrl,!isRequired,maxLength,tokenObj);};
break;
case "24":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
maxLength = arguments[2];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
if (arguments[4]) validationTimeout=arguments[4];
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + LEGAL_SPECIAL_CHAR_VAR;
legalChars = true;
validationFunc = function(){checkACLNameValidation(cntrl,!isRequired,maxLength,tokenObj);};
break;
default:
return;
break;
case "25":
cntrl.size=20;
isRequired = (arguments[4]) ? true : false;
if(arguments[2])
{
minLength = arguments[2];
}
else
minLength = 0;
if(arguments[3])
{
maxLength = arguments[3];
cntrl.maxLength = maxLength;
}
else
maxLength = -1;
cntrl.onkeyup = function(e){
if (window.event)
e = window.event;
else if (!e)
return true;
checkStringLength(cntrl,maxLength,tokenObj,e);
}
validationFunc = function(){checkValidationStringMinMax(cntrl,!isRequired,minLength,maxLength,tokenObj);};
if (arguments[5]) validationTimeout=arguments[5];
break;
case "26":
cntrl.size=20;
isRequired = (arguments[3]) ? true : false;
if(arguments[2])
{
if (arguments[2].length == 1)
{
maxLength = arguments[2][0][0].toString().length;
minVal = arguments[2][0][0];
maxLength = (arguments[2][0][1].toString().length> maxLength) ? arguments[2][0][1].toString().length : maxLength;
maxVal = arguments[2][0][1];
}
else
{
maxLength = arguments[2][0][0].toString().length;
minVal = arguments[2][0][0];
maxLength = (arguments[2][0][1].toString().length> maxLength) ? arguments[2][0][1].toString().length : maxLength;
maxVal = arguments[2][0][1];
maxLength = arguments[2][1][0].toString().length;
minVal1 = arguments[2][1][0];
maxLength = (arguments[2][1][1].toString().length> maxLength) ? arguments[2][1][1].toString().length : maxLength;
maxVal1 = arguments[2][1][1];
}
}
legalCharactersString = LEGAL_INTEGER_CHARS;
this.setToken(cntrl.id);
validationFunc = function(){checkValidationRangeOut2(cntrl, [[minVal, maxVal],[minVal1,maxVal1]], !isRequired, tokenObj);};
if (arguments[4]) validationTimeout=arguments[4];
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
isNumeric = true;
break;
case "27":
cntrl.size=20;
if(arguments[2])
minVal = parseInt(arguments[2],10);
else
minVal = 1;
if(arguments[3])
maxVal = parseInt(arguments[3],10);
else
maxVal = _top.maxNumOfVLAN;
isRequired = (arguments[4]) ? true : false;
if(arguments[5] && (arguments[5]!=null) )
extraParams = arguments[5];
else
extraParams = [ ['VLAN'+minVal, minVal], ['VLAN'+maxVal, maxVal] ];
var isTextAllowed = (arguments[6]) ? true : false;
var singleVlanAppearance = (arguments[7]) ? true : false;
this.setToken(cntrl.id);
validationFunc = function()
{
return validateVLAN(cntrl, minVal, maxVal, extraParams, tokenObj,
isRequired, isTextAllowed, singleVlanAppearance);
};
if(isTextAllowed)
{
legalCharactersString = LEGAL_ALPHANUMERIC_CHARS + '-' + ',' + ' ';
isNumeric = false;
}
else
{
legalCharactersString = LEGAL_INTEGER_CHARS + '-' + ',' + ' ';
isNumeric = true;
}
if(isNumeric)
cntrl.onfocus = function(){loseNumberingStyling(cntrl,tokenObj);};
break;
case "28":
if(cntrl.size != 44)
cntrl.size=20;
var seperator = ( IsUndefOrNull(arguments[2]) || (arguments[2]=="") ) ? ";" : arguments[2].toString();
isRequired = (arguments[3]) ? true : false;
maxLength = (IsUndefOrNull(arguments[4]) || (arguments[4]=="") ) ? -1 : (15+seperator.length)*parseInt(arguments[4],10);
validationFunc = function()
{
checkValidationIPListFormatOnly(cntrl, seperator, !isRequired, tokenObj)
};
if (arguments[5]) validationTimeout = parseInt(arguments[5],10);
legalCharactersString = LEGAL_IPv4_CHARS + seperator;
break;
case "29":
if(cntrl.size != 44)
cntrl.size=20;
var seperator = ( IsUndefOrNull(arguments[2]) || (arguments[2]=="") ) ? ";" : arguments[2].toString();
isRequired = (arguments[3]) ? true : false;
maxLength = (IsUndefOrNull(arguments[4]) || (arguments[4]=="") ) ? -1 : (15+seperator.length)*parseInt(arguments[4],10);
validationFunc = function()
{
checkValidationIPMaskListFormatOnly(cntrl, seperator, !isRequired, tokenObj)
};
if (arguments[5]) validationTimeout = parseInt(arguments[5],10);
legalCharactersString = LEGAL_IPv4_CHARS + seperator;
break;
}
if (validationFunc)
{
if (validationTimeout)
cntrl.onblur = function()
{
window.setTimeout(function(){ validationFunc();if (extraFunction) extraFunction();},validationTimeout);
}
else
cntrl.onblur = function(){ validationFunc();if (extraFunction) extraFunction();}
}
if (typeEnum.toString()=="17")
{
cntrl.onkeypress = function(e)
{
if (window.event)
e = window.event;
else if (!e)
return true;
return validateStringWithNoSpaces(cntrl.id,e);
}
}
else
{
cntrl.onkeypress = function(e)
{
if (window.event)
e = window.event;
else if (!e)
return true;
return validateLocalizedInput(cntrl.id,e,maxLength,legalCharactersString,isNumeric,tokenObj,extraParams);
}
}
}
function clearLocalizedMessage(cntrl, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
AlterContextMessage(cntrl);
msgNodeId = GetContextMessageId(cntrl.id);
tokenObj.removeToken(msgNodeId);
}
function localizePageTitle(dictId, tokenObj)
{
if(!tokenObj && pgTkn)
tokenObj = pgTkn;
document.title=tokenObj.getText(dictId);
}
function convertReadOnlyNumbers(tokenObj)
{
var tagNameArray = new Array('td','th','span');
for(var j = 0; j < tagNameArray.length; j++)
{
var controlArray = document.getElementsByTagName(tagNameArray[j]);
for(var i = 0; i < controlArray.length; i++)
{
if(controlArray[i].className == "numConvert")
{
var currVal = parseInt(controlArray[i].innerHTML,10);
if(!tokenObj.setToken(controlArray[i].id,"",[[TKN_NUMBER,currVal]]))
showLclErr(tokenObj.tknObj.error);
}
}
}
}
function writeFormatted(value,tokenObj, typeParam, loopIndex, paramFormat, colspan, classes)
{
var colspanStr="";
var style="";
if (tokenObj ==undefined)
tokenObj=pgTkn;
style='Class="'+classes+'"';
if (colspan!=undefined && colspan!="")
{
colspanStr='colspan="'+colspan+'" ';
}
document.write("<td id=\"lblFormatted_"+loopIndex+"\" "+colspanStr+style+'></td>');
if (!tokenObj.setToken("lblFormatted_"+loopIndex, null, [[typeParam,value.toString(),paramFormat]]))
showLclErr(tokenObj.tknObj.error);
}
function writeFormattedNumber (value, tokenObj,loopIndex, colspan,classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' NumberCell';
}
writeFormatted(value,tokenObj,TKN_NUMBER,loopIndex,null,colspan, classes);
}
function writeFormattedDateTime (value, tokenObj,loopIndex, colspan, classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' StringCell';
}
writeFormatted(value,tokenObj,TKN_DATE_TIME,loopIndex,"DD-MMM-YYYY 24hh:mm:ss",colspan, classes);
}
function writeFormattedDate(value, tokenObj,loopIndex, colspan, classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' StringCell';
}
writeFormatted(value,tokenObj,TKN_DATE,loopIndex,"DD-MM-YYYY",colspan, classes);
}
function writeFormattedTime(value, tokenObj,loopIndex, colspan, classes)
{
if (classes == undefined ||
(classes.indexOf('EnumCell')==-1 && classes.indexOf('StringCell')==-1 && classes.indexOf('NumberCell')==-1))
{
classes+=' StringCell';
}
writeFormatted(value,tokenObj,TKN_TIME,loopIndex,"24hh:mm:ss",colspan, classes);
}
function WriteFormattedNumberInTextbox (value, tokenObj, id)
{
tokenObj.setToken(id);
tokenObj.setTokenAttribute(id,"value","",[[TKN_NUMBER,value.toString()]])
}
function WriteFormattedDateTimeInTextBox(value, tokenObj, id)
{
tokenObj.setToken(id);
tokenObj.setTokenAttribute(id,"value","",[[TKN_DATE_TIME,value.toString(),"DD-MM-YYYY 24hh:mm:ss"]])
}
function getLocalizedInterfaceName(fieldName, tokenObj, cntrlId, managementIfIndex, isLong)
{
if (tokenObj ==undefined)
{
tokenObj = pgTkn;
}
var v6IfName = getInterfaceName(fieldName, managementIfIndex, isLong);
if(v6IfName.toLowerCase().indexOf('vlan') != -1)
{
idNum = v6IfName.substring(5);
tokenObj.setToken(cntrlId,"10610",[[TKN_NUMBER,idNum]]);
}
else if(v6IfName.toLowerCase().indexOf('lag') != -1)
{
idNum = v6IfName.substring(4);
tokenObj.setToken(cntrlId,"10611",[[TKN_CONST,idNum]]);
}
else
{
idNum = v6IfName;
tokenObj.setToken(cntrlId,"",[[TKN_CONST,idNum]]);
}
}
function getLocalizedInterfaceNameByIndex(index, tokenObj, cntrlId, isLong)
{
if (tokenObj ==undefined)
{
tokenObj = pgTkn;
}
var v6IfName = getInterfaceNameByIndex(index, isLong);
if(v6IfName.toLowerCase().indexOf('vlan') != -1)
{
idNum = v6IfName.substring(5);
tokenObj.setToken(cntrlId,"10610",[[TKN_NUMBER,idNum]]);
}
else if(v6IfName.toLowerCase().indexOf('lag') != -1)
{
idNum = v6IfName.substring(4);
tokenObj.setToken(cntrlId,"10611",[[TKN_CONST,idNum]]);
}
else
{
idNum = v6IfName;
tokenObj.setToken(cntrlId,"",[[TKN_CONST,idNum]]);
}
}
function LocalizedConfirmFormReset(func, tokenObj, popOrNot) {
if (popOrNot) {
if (typeof parent.document.querySelectorAll(".tmask")[0] != "undefined" && parent.document.querySelectorAll(".tmask")[0] != null) {
var m = parent.document.querySelectorAll(".tmask")[0];
m.parentElement.removeChild(m);
}
if (typeof parent.document.querySelectorAll(".tbox")[0] != "undefined" && parent.document.querySelectorAll(".tbox")[0] != null) {
var j = parent.document.querySelectorAll(".tbox")[0];
j.parentElement.removeChild(j);
}
} else {
var iframe = parent.document.getElementById("mainFrame");
iframe.src = iframe.src;
}
if (window.isSomeControlChanged) {
try {
Page.reload();
} catch (Page) {
ResetCloseForm(func);
}
}
}
function ResetCloseForm(func)
{
AlterPageMessage(null, null, false);
for (var i = 0, iMax = document.forms.length; i < iMax; i ++)
document.forms[i].reset();
if (iMax == 0)
{
if (!IsUndefOrNull(window.Page))
Page.load_complete();
else if (!IsUndefOrNull(window.tmpl))
{
showPageContent();
StylingInit();
}
return;
}
var selectCtrl;
for (var i in selectCtrlTableHash)
{
for (var j in selectCtrlTableHash[i].selectCtrlHash)
{
selectCtrl = selectCtrlTableHash[i].selectCtrlHash[j].selectNode;
selectCtrl.checked = false;
selectCtrl.onclick();
}
}
if (!IsUndefOrNull(func))
func();
for (var i in ctrlLblHash)
AlterContextMessage(ctrlLblHash[i].obj);
DsblEnblCtrlsLbls();
window.isSomeControlChanged = false;
}
function resizeWindowAfterLangChange(win)
{
var frame = win.frames.mainFrame;
ResizeWindow(frame);
}
function calculateLocalizedStrLength(str)
{
var length=0;
var charCode;
for(var i=0;i<str.length;i++)
{
charCode=str.charCodeAt(i);
if ((charCode & 0xFC00) == 0xD800)
{
if ((str.charCodeAt(i+1) & 0xFC00) == 0xDC00)
charCode = ((charCode - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
}
if((charCode<=127)||(charCode==160))
length++;
else if(charCode<=2047)
length+=2;
else if(charCode<=65535)
length+=3;
else if(charCode<=1114111)
length+=4;
}
return length;
}
function _CreateButtonNextBackTransfer(onclick, id, width, parentId,btnClass)
{
var btnLiteral = "<table id='"+id+"_tbl' onmousedown='SetPressedClass(this)' onmouseup='SetHoverClass(this)'";
btnLiteral += " onmouseover='SetHoverClass(this)'";
btnLiteral += " onmouseout='SetNormalClass(this)'";
btnLiteral += " class='btn_normal'";
if (!IsUndefOrNull(onclick))
btnLiteral += " onclick=\"if(this.className!='btn_disabled'){"+onclick+"}\"";
if (IsUndefOrNull(width) || !Consists(typeof(width), "number") || width < 24)
width = 24;
btnLiteral += " width='"+width+"'";
btnLiteral += "><tbody><tr>";
btnLiteral += "<td class="+btnClass+" width='"+width+"' ";
if (!IsUndefOrNull(id) && id != "")
btnLiteral += " id='"+id+"'>";
btnLiteral +="</td>";
btnLiteral += "</td>";
btnLiteral += "</tr></tbody></table>";
if (IsUndefOrNull(parentId))
document.write(btnLiteral);
else
document.getElementById(parentId).innerHTML = btnLiteral;
function CheckKeyPress(ev)
{
if (GetEventKeyCode(ev) == 13)
{
var target = GetEventTarget(ev);
if (IsUndefOrNull(target.tagName))
return false;
switch (target.tagName.toLowerCase())
{
case "a":
case "area":
case "button":
case "textarea":
break;
case "input":
if (IsUndefOrNull(target.type))
return false;
switch (target.type.toLowerCase())
{
case "button":
case "file":
case "image":
case "reset":
case "submit":
break;
default:
PressDefaultButton();
}
break;
default:
PressDefaultButton();
}
}
return true;
}
}
projTknObj.prototype.AlterButtonBackNextTransDisabling= function (btnId, isDisabled, tooltip)
{
if (IsUndefOrNull(document.getElementById(btnId)))
return;
if (IsUndefOrNull(isDisabled))
isDisabled = true;
var btn = document.getElementById(btnId);
btn.parentNode.parentNode.parentNode.className = (isDisabled) ? "btn_disabled" : "btn_normal";
if (isDisabled && !IsUndefOrNull(btn.href))
RemoveAttribute(btn, "href");
else
btn.href = "javascript:void(0)";
}
projTknObj.prototype.successMsgLink = "<a href=\"javascript:NavigateFromSuccessMessageLocalized()\" class=\"onLight\"></a>";
function NavigateFromSuccessMessageLocalized(pgTknObj)
{
if (!pgTknObj) {
if(!IsUndefOrNull(window.pgTkn) && (!IsUndefOrNull(pgTkn.constructor)) && (pgTkn.constructor === projTknObj))
pgTknObj = pgTkn;
else {
for (var i in window)
if (!IsUndefOrNull(i.constructor) && (i.constructor === projTknObj)) {
pgTknObj = i;
break;
}
if (!pgTknObj) {
NavigateFromSuccessMessage();
return;
}
}
}
if (IsUndefOrNull(_top.modalWindow) || _top.modalWindow.closed)
_top.STYLING.successMsgNS.linkFunc();
else
pgTknObj.openLocalizedConfirmationDialog("15075", "15074", function(){_top.modalWindow.close();_top.STYLING.successMsgNS.linkFunc();})
}
Class(RT_BP).Extends(RT);
function RT_BP()
{
this.konstructor=function(master)
{
this.superclass(master);
};
this.unselect = function(chk)
{
var rows_xpath = "//tr[@ID and contains(@ID,'r')]";
var dataRows = this.xmlData.selectNodes(rows_xpath);
for(var i=0;i<dataRows.length;i++)
dataRows[i].removeAttribute("SELECTED");
}
this.selectRTBPRow = function(chk)
{
if(chk.type=="radio")
this.unselect();
var id = RT.collRT[0][1].ID;
var trElement=IXML.getParentElement(IXML.getParentElement(chk));
var row = IXML.getContainer(trElement,"tr");
var rows_xpath = "//tr[@ID and contains(@ID,'r')]";
var dataRows = this.xmlData.selectNodes(rows_xpath);
var xml_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(chk.checked==true)
{
xml_row.setAttribute("SELECTED",1);
}
else
{
if(xml_row == null) xml_row.setAttribute("SELECTED",0);
}
};
};
Class(interfaceSelector);
function interfaceSelector()
{
this.konstructor = function(id)
{
this.id= id;
this.masterNode = $m("//*[@ID='" + id + "']") ;
this.selectedEnum = interfaceSelector.SELECTED_ENUM;
this.initCtrs();
}
this.initCtrs = function()
{
this.intTypeCtr = getCtr(this.masterNode,'INT_TYPE_CTR');
this.unitsCtr = getCtr(this.masterNode,'UNITS_CTR');
this.intNameCtr = getCtr(this.masterNode,'INT_CTR');
this.portNameCtr = getCtr(this.masterNode,'PORTS_CTR');
this.lagNameCtr = getCtr(this.masterNode,'LAGS_CTR');
this.vlanIdCtr = getCtr(this.masterNode,'VLANS_CTR');
this.combinedCtrId = this.masterNode.getAttribute("COMBINED_CTR");
}
var getCtr = function(masterNode,ctr_type)
{
if (masterNode==null || ctr_type==null ) return null;
var id = masterNode.getAttribute(ctr_type);
if (!id) return null;
var el = getElement(id);
if (el && !el.type) return el;
if (el && el.type.toLowerCase()!="radio") return el;
if (el && el.name) id = el.name;
var coll = document.getElementsByName(id);
if (coll && coll.length==0) return null;
return coll;
}
this.getSelectedGlobalType = function()
{
if(this.combinedCtrId)
return this.getSelectedGlobalTypeSingleCntrl();
var tmpValue = null;
var val;
var selectedInt = this.getSelectedInterface();
var selectedUnit = this.getSelectedUnit();
var type = this.getSelectedType();
tmpValue = type;
if (tmpValue==null || tmpValue == interfaceSelector.SELECTED_ENUM.PORTS)
{
if (selectedUnit)
tmpValue = interfaceSelector.SELECTED_ENUM.UNIT ;
}
if (tmpValue == interfaceSelector.SELECTED_ENUM.LAGS)
{
if (selectedInt!=null)
return interfaceSelector.SELECTED_ENUM.SPC_LAG
else return interfaceSelector.SELECTED_ENUM.LAGS;
}
else if (tmpValue == interfaceSelector.SELECTED_ENUM.VLANS)
{
if (selectedInt!=null)
return interfaceSelector.SELECTED_ENUM.SPC_VLAN
else return interfaceSelector.SELECTED_ENUM.VLANS;
}
else if (tmpValue== interfaceSelector.SELECTED_ENUM.PORTS || tmpValue== interfaceSelector.SELECTED_ENUM.UNIT)
{
if (selectedInt!=null)
return interfaceSelector.SELECTED_ENUM.SPC_PORT
else return parseInt(tmpValue);
}
return interfaceSelector.SELECTED_ENUM.ALL;
}
this.getSelectedGlobalTypeSingleCntrl = function()
{
var ifSlctCtrl = getElement(this.combinedCtrId);
if(!ifSlctCtrl)return interfaceSelector.SELECTED_ENUM.PORTS;
if(ifSlctCtrl.options[ifSlctCtrl.selectedIndex].value == "lag")
return interfaceSelector.SELECTED_ENUM.LAGS;
else if(!oPolling.isStack)
return interfaceSelector.SELECTED_ENUM.PORTS;
else
return interfaceSelector.SELECTED_ENUM.UNIT;
}
this.getSelectedUnit = function()
{
if(this.combinedCtrId)
{
var ifSlctCtrl = getElement(this.combinedCtrId);
return ifSlctCtrl.options[ifSlctCtrl.selectedIndex].value;
}
if (oPolling && !oPolling.isStack) return null;
var val = null;
if (this.unitsCtr)
val = Util.getInputData([this.unitsCtr.id])[0];
if (val && val >0) return val
else return null;
}
this.getSelectedType = function()
{
if (this.intTypeCtr==null) return null;
if (this.intTypeCtr.length==null)
{
return Util.getInputData([this.intTypeCtr.id])[0];
}
else if (this.intTypeCtr[0].type && this.intTypeCtr[0].type.toLowerCase()=="radio")
{
for (var i=0;i< this.intTypeCtr.length;i++)
{
if( this.intTypeCtr[i].checked)
return this.intTypeCtr[i].value;
}
}
return null;
}
this.getInterfaceCtrsCount = function()
{
var coll = new Array();
if (this.portNameCtr) coll.push(this.portNameCtr);
if (this.lagNameCtr) coll.push(this.lagNameCtr);
if (this.vlanIdCtr) coll.push(this.vlanIdCtr);
return coll.length;
}
this.getSelectedInterface = function()
{
if (this.intNameCtr)
return Util.getInputData([this.intNameCtr.id])[0];
var type = this.getSelectedType();
if (type==null && this.getInterfaceCtrsCount()>1) return null;
if (this.portNameCtr && (type==null || type== this.selectedEnum.PORTS ) )
{
return Util.getInputData([this.portNameCtr.id])[0];
}
else if (this.lagNameCtr && (type==null || type== this.selectedEnum.LAGS ))
{
return Util.getInputData([this.lagNameCtr.id])[0];
}
else if (this.vlanIdCtr && (type==null || type== this.selectedEnum.VLANS ))
{
return Util.getInputData([this.vlanIdCtr.id])[0];
}
return null;
}
this.dispose = function(){}
this.save = function(){}
}
interfaceSelector.SELECTED_ENUM ={PORTS:1,LAGS:2, VLANS:3, ALL:15,UNIT:16,SPC_PORT:11,SPC_LAG:12,SPC_VLAN:13};
interfaceSelector.coll = new Array();
interfaceSelector.dispose=function()
{
while (interfaceSelector.coll.length>0)
{
var obj = interfaceSelector.coll.pop();
obj.dispose();
}
}
interfaceSelector.save = function()
{
}
interfaceSelector.getObjById = function(id)
{
for(var i=0; i< interfaceSelector.coll.length;i++)
{
if (interfaceSelector.coll[i][0]==id)
{
return interfaceSelector.coll[i][1] ;
}
}
return null;
}
interfaceSelector.create = function(id)
{
var obj = new interfaceSelector(id) ;
interfaceSelector.coll.push([id, obj]);
}
interfaceSelector.fillUnits= function(id,hideContainer)
{
var cmb = getElement(id) ;
var td;
if(cmb && cmb.tagName=="SELECT")
{
td = cmb.parentNode;
if (!oPolling.isStack && hideContainer )
{
td.style.display="none";
IXML.getContainer(cmb,"TD").style.display="none";
}
else
{
IXML.clearChildNodes(cmb);
for (var i=1; i< oPolling.TypePerModuleArr.length;i++)
{
if (oPolling.TypePerModuleArr[i]==-1) continue;
var opt = new Option();
opt.text = i;
opt.value =i;
cmb.options.add(opt);
}
}
}
}
Class(PLT).Extends(BaseTable);
PLT.LAGNAME_PREFIX=(typeof LAGNAME_PREFIX!='undefined')?LAGNAME_PREFIX:"LAG";
function PLT()
{
this.konstructor=function(master){
if(arguments.length>1)this.superclass(master,arguments[1]);
else this.superclass(master);
var sel = this.masterNode.getAttribute("INTERFACE_SELECTOR");
this.intSelector = (sel)?interfaceSelector.getObjById(sel):null;
this.relatedIDs = new Array();
this.binded_rows = new Array();
this.get_keys();
this.getRelatedIDs(".//portrow//portcell");
this.final_get="" ;
this.getSelectorFields();
this.portListColl = new Array();
this.initPortLists();
};
this.getSelectorFields = function()
{
if (this.intSelector)
{
var type = this.intSelector.getSelectedGlobalType();
switch(type)
{
case interfaceSelector.SELECTED_ENUM.ALL:
this.show_all = "true";
this.show_lags = "true";
this.bLagsOnly = false;
break;
case interfaceSelector.SELECTED_ENUM.PORTS:
this.show_all = "true";
this.show_lags = "false";
this.bLagsOnly = false;
break;
case interfaceSelector.SELECTED_ENUM.UNIT:
this.selectedUnit = this.intSelector.getSelectedUnit();
this.show_all = "false";
case interfaceSelector.SELECTED_ENUM.SPC_PORT:
this.show_all = "false";
this.show_lags = "false";
this.bLagsOnly = false;
break;
case interfaceSelector.SELECTED_ENUM.LAGS:
case interfaceSelector.SELECTED_ENUM.SPC_LAG:
this.show_all = "false";
this.show_lags = "true";
this.bLagsOnly = true;
break;
}
}
else
{
this.show_all = (this.masterNode.attributes.getNamedItem("SHOW_ALL"))?this.masterNode.getAttribute("SHOW_ALL"):"false";
this.show_lags = (this.masterNode.attributes.getNamedItem("SHOW_LAGS"))?this.masterNode.getAttribute("SHOW_LAGS"):"false";
this.bLagsOnly=(this.masterNode.attributes.getNamedItem("LAGS_ONLY"))?this.masterNode.getAttribute("LAGS_ONLY"):"false";
this.bLagsOnly = (this.bLagsOnly=="true")?true:false;
this.selectedUnit = oPolling.currentUnit;
}
}
this.getData = function()
{
this.setDataTable(".//portrow/portcell");
this.buildXmlTable();
};
this.show = function()
{
this.transform();
};
this.get_keys = function()
{
this.key_data_tag = this.masterNode.selectSingleNode(".//portcell[@KEY='true']").getAttribute("BIND");
this.key_port_tag = this.masterNode.selectSingleNode(".//portcell[@KEY='true']").getAttribute("PORT_BIND");
};
this.setDataTable = function(path)
{
if(null==path)path=".//portrow/portcell";
var collMasterCells=this.masterNode.selectNodes(path);
var collPorts;
var collLags;
var b_lagsonly = false;
if(oPolling.currentUnit=="1000")
{
collLags = new Array();
this.getCollectionLags(collLags);
b_lagsonly = true;
}
else
{
if(true==this.bLagsOnly)
{
collLags = new Array();
this.getCollectionLags(collLags);
}
else
{
if(this.show_lags=="true")
{
collLags = new Array();
this.getCollectionLags(collLags);
}
collPorts = (this.show_all=="true")?oPolling.portsDataXml.selectNodes("//port"):
oPolling.getCollectionPortsPerUnit(this.selectedUnit);
}
}
while(this.data && this.data.length>0)this.data.pop();
while(this.binded_rows && this.binded_rows.length>0)this.binded_rows.pop();
var j,port_bind,bind,rowData,key_val,val;
for(var i=0; collPorts && i<collPorts.length;i++)
{
rowData = [];
this.binded_rows.push(false);
key_val = IXML.getText(collPorts[i].selectSingleNode("./" + this.key_port_tag));
for(j=0;j<collMasterCells.length;j++)
{
port_bind = collMasterCells[j].getAttribute("PORT_BIND");
bind = collMasterCells[j].getAttribute("BIND");
val = (port_bind)?IXML.getText(collPorts[i].selectSingleNode(port_bind)):
(bind)?this.getPortDataXml(bind,key_val,i):this.handlePortList(collMasterCells[j],key_val);
rowData.push(val.xmlEncode());
}
this.data.push(rowData);
}
if((collPorts && this.show_lags=="true") || b_lagsonly || this.bLagsOnly)
{
var ind=(b_lagsonly || this.bLagsOnly)?0:i;
var count = (b_lagsonly || this.bLagsOnly)?collLags.length : ind + parseInt(oPolling.NumberOfTrunks);
for(i=0; i<collLags.length;i++)
{
rowData = [];
this.binded_rows.push(false);
key_val = collLags[i][1];
for(j=0;j<collMasterCells.length;j++)
{
bind = collMasterCells[j].getAttribute("BIND");
port_bind = collMasterCells[j].getAttribute("PORT_BIND");
val = (port_bind)?key_val:(bind)?this.getPortDataXml(bind,key_val,ind):this.handlePortList(collMasterCells[j],key_val);
rowData.push(val.xmlEncode());
}
this.data.push(rowData);
ind++;
}
}
};
this.handlePortList = function(masterCell,key_val)
{
var val = "";
if (masterCell==null) return val;
if (masterCell.getAttribute("TYPE")=="portList")
{
var pId = masterCell.getAttribute("PLIST_ID");
if (pId.trim()=="") return "";
var pList = this.getPortListById(pId) ;
if (pList==null) return "";
val = pList.translate(key_val);
}
return val;
}
this.getCollectionLags = function(arr)
{
var id;
for(var i=0;i<oPolling.NumberOfTrunks;i++)
{
id = parseInt(i+1);
arr.push([id,PLT.LAGNAME_PREFIX + id]);
}
};
this.getPortDataXml = function(bind,key_val,pos)
{
var xpath_row = "//" + this.bindingTablePath + "/" + this.bindingRowPath + "[" + this.key_data_tag + "/text()='"+ key_val + "']";
var contextRow = Page.dataXml.selectSingleNode(xpath_row);
if(null == contextRow) return "";
var contextData = IXML.getText(contextRow.selectSingleNode(".//" + bind));
this.binded_rows[pos]=true;
return contextData;
};
this.buildXmlRow=function(row)
{
var i;
if(this.css_row_odd){
row.removeAttribute("CLASS_ODD");
row.removeAttribute("CLASS");
}
var rtCells = row.selectNodes("./*");
for(i=0;i<this.data.length;i++)
{
this.XML.BeginNode("tr");
this.serializeAttributes(row.attributes);
if(this.css_row_odd){
if(i%2!=0)
this.XML.Attrib("CLASS",this.css_row_odd );
else
this.XML.Attrib("CLASS",this.css_row );
}
this.XML.Attrib("ID","r" + i + "_" + this.tableID);
if(this.selectedRow[i] && this.selectedRow[i]==true)
this.XML.Attrib("SELECTED","1");
if(this.binded_rows[i])
this.XML.Attrib("BINDED","" + this.binded_rows[i]) ;
this.buildXmlCell(i,rtCells);
this.XML.EndNode();
if(this.cntRows!=null)this.cntRows++;
}
};
this.restoreEntry = function(obj)
{
var row = IXML.getContainer(obj,"tr");
var restored_row = this.xmlData.selectSingleNode("//tr[@ID='" + row.id + "']");
if(restored_row.getAttribute("RESTORED")=="1")
restored_row.removeAttribute("RESTORED");
else
{
restored_row.setAttribute("RESTORED","1");
if(restored_row.attributes.getNamedItem("UPDATED"))
restored_row.removeAttribute("UPDATED");
}
};
this.deleteEntry=function()
{
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1' and @BINDED]";
var rowSet = this.xmlData.selectNodes(selectRows_xpath);
var removedRow,tableNode,id;
for(var i=0;i<rowSet.length;i++)
{
tableNode = this.xmlData.selectSingleNode("//innertable");
id = rowSet[i].getAttribute("ID").trim();
removedRow = tableNode.removeChild(rowSet[i]);
if(null==rowSet[i].attributes.getNamedItem("ADDED"))
this.xmlData_deleted.selectSingleNode("//deletedData").appendChild(removedRow);
if(this.data[i])this.data.splice(i,1);
if(this.cntRows>0)this.cntRows--;
if(this.selectedRow.length>0 && removedRow)
{
var deleted=false;
for(var k=0;k<this.selectedRow.length&&!deleted;k++)
{
if(this.selectedRow[k]==removedRow.getAttribute("ID"))
{
this.selectedRow.splice(k,1);
deleted=true;
}
}
}
}
if(this.css_row_odd)
this.setRowsCSS();
};
this.updateDeletedEntry = function(arr_Entry,cssClass)
{
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1' and @BINDED]";
var rowSet = this.xmlData.selectNodes(selectRows_xpath);
var removedRow,attributes,ableNode,id;
for(var i=0;i<rowSet.length;i++)
{
if(null==this.xmlData_deleted)
this.xmlData_deleted=IXML.getDomDocument(null,"deletedData");
tableNode = this.xmlData.selectSingleNode("//innertable");
id = rowSet[i].getAttribute("ID").trim();
if(null==rowSet[i].attributes.getNamedItem("ADDED"))
{
removedRow=IXML.getDomDocument(null,'tr').selectSingleNode("//tr");
IXML.copyChildNodes(rowSet[i],removedRow);
attributes=rowSet[i].attributes;
for(var j=0;j<attributes.length;j++)
removedRow.setAttribute(attributes[j].nodeName,attributes[j].nodeValue);
this.xmlData_deleted.selectSingleNode("//deletedData").appendChild(removedRow);
}
else
{
removedRow = tableNode.removeChild(rowSet[i]);
if(this.data[i])this.data.splice(i,1);
if(this.cntRows>0)this.cntRows--;
if(this.selectedRow.length>0 && removedRow)
{
var deleted=false;
for(var k=0;k<this.selectedRow.length&&!deleted;k++)
{
if(this.selectedRow[k]==removedRow.getAttribute("ID"))
{
this.selectedRow.splice(k,1);
deleted=true;
}
}
}
removedRow=null;
}
}
this.updateEntry(arr_Entry,cssClass);
};
this.updateEntry=function(arr_Entry,cssClass)
{
if(null==cssClass)cssClass=this.css_selectedRow;
var i;
var selectRows_xpath = "//tr[@ID and contains(@ID,'r') and @SELECTED='1']";
var rowSet = this.xmlData.documentElement.selectNodes(selectRows_xpath);
for(i=0;i<rowSet.length;i++){
if(rowSet[i].attributes.getNamedItem("BINDED"))
{
if(this.setRowData(rowSet[i],arr_Entry,"update")=="not-value")
return false;
}
else
{
if(this.setRowData(rowSet[i],arr_Entry,"add")=="not-value")
return false;
else
rowSet[i].setAttribute("ADDED","1")
}
var _added =rowSet[i].attributes.getNamedItem("ADDED");
var _restored = rowSet[i].attributes.getNamedItem("RESTORED");
var _deleted = rowSet[i].attributes.getNamedItem("DELETED");
var _binded = rowSet[i].attributes.getNamedItem("BINDED");
if(null==_added && null==_restored && null==_deleted && _binded )
rowSet[i].setAttribute("UPDATED","1");
};
return true;
};
this.cellHasBind = function(cell)
{
if (cell==null) return false;
if(cell.attributes.getNamedItem("BIND")) return true;
switch (cell.getAttribute("TYPE"))
{
case "portList":
return true;
break;
default:
return false;
}
};
this.updateByType = function(node,value,rowNode)
{
var type = node.getAttribute("TYPE");
if (type==null || type=="") return;
var ifName ;
var ifNode;
var pLst;
if (node.getAttribute("READONLY")=="true") return ;
switch (type)
{
case "portList":
var pID = node.getAttribute('PLIST_ID');
if (pID)
{
pLst = this.getPortListById(pID);
ifNode = rowNode.selectSingleNode(".//*[@PORT_BIND]");
if(ifNode) ifName = IXML.getText(ifNode);
if (pLst && ifName) pLst.updatePort(ifName,value);
}
break;
default:
return;
}
};
this.setRowData = function(rowNode,arrData,mode)
{
var cellsXml = rowNode.selectNodes("./td");
var bUpdate;
for(var i=0;i<cellsXml.length;i++)
{
bUpdate = true;
var value=arrData[i];
if(cellsXml[i].attributes.getNamedItem("PORT_BIND"))
bUpdate=false;
if(mode=="update")
{
var is_allow_empty = cellsXml[i].getAttribute("IS_ALLOW_EMPLTY");
if(value=="" && this.count_selectedrows()>1 && is_allow_empty!="true")
bUpdate=false;
if(cellsXml[i].getAttribute("READONLY")=="true")continue;
}
var contextNode=null;
if (this.cellHasBind(cellsXml[i]))
{
contextNode = cellsXml[i];
}
else
{
var firstChild=IXML.getChildElement(cellsXml[i],1);
if (this.cellHasBind(firstChild)&& null==firstChild.attributes.getNamedItem("ONOBJECTINIT") )
contextNode = firstChild;
}
if(contextNode)
{
var rel_id = (contextNode.attributes.getNamedItem("RELATED_ID"))?
contextNode.getAttribute("RELATED_ID"):contextNode.getAttribute("ID");
var bind=contextNode.getAttribute("BIND")
if (bind)
{
bind = bind.trim();
value = Util.getEnumValue((bind)? bind.getLastNodeName():"",arrData[i])
}
else
value = arrData[i];
if(contextNode.getAttribute("MANDATORY")=="1" && value=="" && bUpdate)
{
this.message =this.getErrorMessage(rel_id,(contextNode.nodeName!="td")?2:1);
alert(this.message);
this.message = "";
return "not-value";
}
contextNode.setAttribute("SUBMIT","true");
switch(contextNode.nodeName)
{
case "td":if(bUpdate){IXML.setText(contextNode,arrData[i]);
contextNode.setAttribute("VALUE",value);}
break;
case "nobr":
case "span":
case "inputtext": if(bUpdate){contextNode.setAttribute("VALUE",value);
IXML.setText(contextNode,arrData[i]);};
break;
case "checkbox": if(bUpdate){contextNode.setAttribute("VALUE",value);
if(value && value==contextNode.getAttribute("CHECKED_VALUE"))
contextNode.setAttribute("CHECKED","true");
else contextNode.removeAttribute("CHECKED");};break;
case "combobox":
case "select" : if(bUpdate){contextNode.setAttribute("VALUE",value);};break;
}
this.updateByType(contextNode,arrData[i],rowNode);
}
}
return true;
};
this.save = function()
{
if(PageManager.IS_MOCKUP)return;
var deletedXmlContainer = (Page.dataXml_delete)?Page.dataXml_delete.selectSingleNode("//" + DATAROOT):null;
if (this.bindingTablePath !=null && this.bindingTablePath!="")
{
this.bind(this.xmlData_deleted,deletedXmlContainer,ACTION_DELETE);
this.bind(this.xmlData,Page.dataXml,ACTION_RESTORE);
this.bind(this.xmlData,Page.dataXml,ACTION_SET);
}
var collSpecial = this.masterNode.selectNodes(".//*[@TYPE]");
for (var i=0; i<collSpecial.length;i++)
{
if (collSpecial[i].getAttribute("TYPE")=="portList" && collSpecial[i].getAttribute("PLIST_ID") )
{
var pList = this.getPortListById(collSpecial[i].getAttribute("PLIST_ID"));
pList.save();
};
};
};
this.send = function(action,callback,sender)
{
var doc = IXML.getDomDocument(null,DATAROOT).selectSingleNode("//" + DATAROOT);
var docDelete = IXML.getDomDocument(null,DATAROOT).selectSingleNode("//" + DATAROOT);
var sectionNode = (this.bindingTablePath&&this.bindingTablePath!='')?$d(".//" + this.bindingTablePath):null;
var sectionNodeDeleted = null;
if (Page.dataXml_delete)
sectionNodeDeleted = (this.bindingTablePath&&this.bindingTablePath!='')? Page.dataXml_delete.selectSingleNode("//" + this.bindingTablePath):null;
if (sectionNode)
{
IXML.appendChild (sectionNode,doc) ;
}
if (sectionNodeDeleted) IXML.appendChild(sectionNodeDeleted,docDelete) ;
var portLists = this.portListColl;
for (var i = 0; i< portLists.length;i++)
{
if (portLists[i].dataSectionName)
{
sectionNode = $d(".//" + portLists[i].dataSectionName) ;
if (sectionNode && doc.selectSingleNode(".//" + portLists[i].dataSectionName)==null )
IXML.appendChild(sectionNode,doc) ;
if (Page.dataXml_delete)
{
sectionNodeDeleted = Page.dataXml_delete.selectSingleNode(".//" + portLists[i].dataSectionName) ;
if (sectionNodeDeleted && docDelete.selectSingleNode(".//" + portLists[i].dataSectionName)==null)
IXML.appendChild(sectionNodeDeleted,docDelete) ;
}
}
}
Page.setSectionAction(doc,ACTION_SET);
Page.setSectionAction(docDelete,ACTION_DELETE);
IXML.copyChildNodes(doc,docDelete,true);
doc = docDelete;
if (doc.selectSingleNode(".//*[@set]"))
doc.selectSingleNode("//" + DATAROOT ).setAttribute("set","set");
if(Page.buildPostXml(doc)){
if(Page.validPostXml(doc))
this.post(doc,true,"set",this.cbo_Complete_Post,this);
else
{
this.wait(false);
this.get();
}
}
}
this.selectRowByInterfaceName = function(name)
{
var xmlRow = this.xmlData.selectSingleNode("//tr[./td[@PORT_BIND and ./text()='" + name + "']]")
var id = xmlRow.getAttribute("ID")
var row = document.getElementById(id)
if (row && row.tagName =="TR")
{
this.getRowData(row) ;
return;
}
if(this.isMultiSelect)
{
this.selectedRow.push(id)
}
else
{
var dataRows = this.xmlData.selectNodes("//tr[@BIND and @SELECTED='1']");
this.selectedRow = [id];
IXML.removeAttribute(dataRows,"SELECTED");
}
if(xmlRow) xmlRow.setAttribute("SELECTED",1);
}
this.cbo_Complete_Post=function(responseText,responseXML){
this.wait(false);
var xml=IXML.getDomDocument();
if(responseText!="")
{
if(!Page.timeOutIdle(responseText))
{
responseText = responseText.trim();
var xml_pos=responseText.indexOf("<?xml");
responseText=responseText.substr(xml_pos);
if(document.evaluate){
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
} else{
xml.loadXML(responseText);
}
}
}
if(xml.childNodes.length>0){
Page.checkValidResponse(xml);
this.get();
};
};
this.get=function(url,callback,sender){
this.wait(true);
var cbo = new CallBackObject(sender);
if(sender && callback )
{
if(typeof(callback)== "string")
this.OnComplete = eval(callback)
else
this.OnComplete = callback;
}
else if(callback!=null)
{
if(typeof(callback)== "string")
cbo.OnComplete = eval(callback)
else
cbo.OnComplete = callback;
}
else
{
this.OnComplete = this.complete_get;
sender = this;
}
if (url==null || url=="" )
{
var tailURL = "";
var params = this.getURLParamsStr();
var portListColl = this.portListColl;
for (var i=0;i<portListColl.length;i++)
{
if (portListColl[i].dataSectionName)
tailURL = tailURL + "{" + portListColl[i].dataSectionName +params+ "}" ;
}
var headStr = (this.dataSectionName)?"{" + this.dataSectionName + params + "}":"";
url = "wcd?" + headStr + tailURL;
}
cbo.set_sender(sender);
this.url = url;
cbo.DoCallBack(null,url,true,"GET");
};
this.getURLParamsStr = function()
{
var str= "";
this.getSelectorFields();
if (this.show_lags=="true" && this.bLagsOnly)
str = str + "&interfaceType=2";
else if (this.show_lags=="false")
str = str + "&interfaceType=1" ;
if (this.selectedUnit && this.selectedUnit!="")
str = str + "&UnitId=" + this.selectedUnit;
return str;
}
this.wait = function(bool)
{
Page.wait(bool);
}
this.complete_get = function(responseText,responseXML)
{
Page.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText)){
var xml = IXML.getDomDocument();
if(document.evaluate){
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
} else{
xml.loadXML(responseText);
}
if(null==IXML.getChildElement(xml,1))return;
if(xml.documentElement.selectSingleNode("//" + this.dataSectionName)){
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
if(sectionNode) {
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + this.dataSectionName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
}
}
var portListColl = this.portListColl;
for (var i=0;i<portListColl.length;i++)
{
if (portListColl[i].dataSectionName)
portListColl[i].complete_get(responseText,responseXML);
}
portListColl= null;
var _final=null;
if(this.final_get!=""){
_final = this.final_get;
this.final_get = "";
}
this.konstructor(this.masterNode, this.container.id);
this.getData();
this.show();
this.onobjectsinit();
if(_final)eval(_final);
}
}
};
this.OpenPopUp = function(width,height,name,tblID,bReplace,modal)
{
if (arguments.length<5) bReplace = false;
if (arguments.length<6) modal = true;
if(name.indexOf("update")!=-1)
if(this.selectedRow==null){alert(PLT_MSG2);return;}
var popupXml=Page.masterXml.selectSingleNode("//popup[@ID='" + name + "']");
if(popupXml){
var s="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",top=50,left=50";
PopUpManager.open(popupXml.getAttribute("SRC"),name,s,bReplace,modal);
};
};
this.cancel = function(){
this.konstructor(this.masterNode, this.container.id);
this.getData();
this.show();
};
this.dispose = function(){
this.superclass();
this.relatedIDs=null;
this.binded_rows = null;
this.show_lags = null;
this.show_all = null;
this.key_data_tag = null;
this.key_port_tag = null;
while( this.portListColl.length>0)
{
var p = this.portListColl.pop();
p.dispose();
delete p;
}
};
this.initPortLists = function(){
var innerNodes = this.masterNode.selectNodes(".//*[@TYPE='portList']");
for (var i=0;i< innerNodes.length;i++)
{
var id = innerNodes[i].getAttribute("PLIST_ID");
if (id && $m("//portlist[@ID='" + id + "']" ))
{
var pList = new portList1(id);
this.portListColl.push(pList);
}
}
};
this.getPortListById = function(id)
{
for (var i=0; i < this.portListColl.length; i++)
{
if (this.portListColl[i].id==id) return this.portListColl[i];
}
return null;
}
}
PLT.activeID=null;
PLT.coll = new Array();
PLT.callback="";
PLT.getRowData=function(obj,tblID)
{
PLT.activeID=tblID;
var id=PLT.findIndex(PLT.activeID);
if(null==id)return;
if(PLT.coll==null)return;
var row = IXML.getContainer(obj,"tr");
if(PLT.coll[id][1].is_selected(row.id))
{
PLT.coll[id][1].unselectRow(row);
if(PLT.count_selectedrows(tblID)==1)
PLT.updateRelatedFields(tblID);
else
PLT.resetRelatedFields(tblID);
}
else
{
PLT.coll[id][1].getRowData(row);
if(PLT.count_selectedrows(tblID)>1)
PLT.resetRelatedFields(tblID);
}
PLT.coll[id][1].setRowsCSS();
};
PLT.findIndex = function(tblID){
var id=null;
for(var i = 0;i<PLT.coll.length;i++){
if(PLT.coll[i][0]==tblID){
id=i;break;
}
}
return id;
};
PLT.count_selectedrows = function(pt_id)
{
var _pt = window.PLT;
if(opener){
_pt = opener.window.PLT;
}
var tbl_id = (pt_id)?pt_id:_pt.activeID;
var ind = _pt.findIndex(tbl_id);
return _pt.coll[ind][1].selectedRow.length;
};
PLT.updateRelatedFields=function(tblID)
{
var _pt = window.PLT;
var id;
if(opener){
_pt = opener.window.PLT;
}
if(tblID)
_pt.activeID=tblID;
id = _pt.findIndex(_pt.activeID);
if(null==id)return;
var selectedRows_xpath = "//tr[@ID and contains(@ID,'r')and @SELECTED='1']";
var selectedRows = _pt.coll[id][1].xmlData.selectNodes(selectedRows_xpath);
if(selectedRows.length>0)
{
if(opener)
{
var row_path = "//tr[@ID='" + selectedRows[0].getAttribute("ID") + "']";
var collCells = _pt.coll[id][1].xmlData.selectSingleNode(row_path).selectNodes("./*");
for(i=0;i<collCells.length;i++)
{
if(collCells[i].attributes.getNamedItem("RELATED_ID") &&
collCells[i].getAttribute("RELATED_ID")!=""){
relatedID=collCells[i].getAttribute("RELATED_ID");
if(collCells[i].firstChild)
bool=(collCells[i].firstChild.nodeType==1)?true:false;
data = IXML.getText(collCells[i],bool);
Util.setControlData(relatedID,data);
};
};
}
else
_pt.coll[id][1].updateRelatedFields();
}
};
PLT.resetRelatedFields = function(tblID)
{
var _pt = window.PLT;
if(opener)_pt = opener.window.PLT;
if(tblID) _pt.activeID=tblID;
var id=_pt.findIndex(_pt.activeID);
if(null==id)return;
var rowSet = _pt.coll[id][1].xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
if(rowSet.length>0)
{
var xmlRow =_pt.coll[id][1].xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]")[0];
_pt.coll[id][1].resetRelatedFields(xmlRow.getAttribute("ID"));
}
};
PLT.updateEntry=function(tblID){
var _pt = (opener)?opener.window.PLT:window.PLT;
var id = _pt.findIndex((tblID)?tblID:_pt.activeID);
if(null==id)return false;
if(_pt.coll[id][1].selectedRow.length==0){
if(PLT_MSG1)alert(PLT_MSG1);
return false;
}
if(!PLT.validRelatedFields())return false;
if(! _pt.coll[id][1].updateEntry(Util.getInputData(_pt.coll[id][1].relatedIDs))) return false;
if(!_pt.coll[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)_pt.coll[id][1].unselectAll();
_pt.coll[id][1].transform();
}
return true ;
};
PLT.updateDeletedEntry = function()
{
var _pt=(opener)?opener.window.PLT:window.PLT;
var id = _pt.findIndex(_pt.activeID);
if(null==id)return false;
if( _pt.coll[id][1].selectedRow.length==0){
if(PLT_MSG1)alert(PLT_MSG1);
return false;
}
if(!PLT.validRelatedFields())return false;
if(!_pt.coll[id][1].updateDeletedEntry(Util.getInputData(_pt.coll[id][1].relatedIDs)))return false;
if(!_pt.coll[id][1].automatic_save || PageManager.IS_MOCKUP)
{
if(PageManager.IS_MOCKUP)_pt.coll[id][1].unselectAll();
_pt.coll[id][1].transform();
}
return true ;
};
PLT.deleteEntry=function()
{
var _pt = (opener)?opener.window.PLT:window.PLT;
var id = _pt.findIndex(_pt.activeID);
if(id==null)return;
_pt.coll[id][1].deleteEntry();
if(!_pt.coll[id][1].automatic_save || PageManager.IS_MOCKUP)_pt.coll[id][1].transform();
return true;
};
PLT.restoreEntry = function(obj,tblID)
{
var _pt =(opener)?opener.window.PLT:window.PLT;
_pt.activeID=tblID;
var id = _pt.findIndex(_pt.activeID);
if(null==id)return false;
_pt.coll[id][1].restoreEntry(obj);
return true;
};
PLT.unbind = function(pt_id,arr_col,mode)
{
var ind = PLT.findIndex(pt_id);
var _pt = (opener)?opener.window.PLT:window.PLT;
_pt.coll[ind][1].unbind(arr_col,mode);
};
PLT.OpenPopUp = function(width,height,name,tblID,bReplace,modal)
{
if (arguments.length<5) bReplace = false;
if (arguments.length<6) modal = true;
if (null==tblID) tblID = PLT.activeID;
var ind = PLT.findIndex(tblID);
if(null==ind)return;
if(name.indexOf("update")!=-1)
if(PLT.coll[ind][1].selectedRow==null){alert(RT_MSG2);return;}
var popupSrc;
if(Page.masterXml.selectSingleNode("//popup[@ID='" + name + "']")){
popupSrc = Page.masterXml.selectSingleNode("//popup[@ID='" + name + "']").getAttribute("SRC");
};
var s="toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+width+",height="+height+",top=50,left=50";
PopUpManager.open(popupSrc,name,s,bReplace,modal);
};
PLT.save = function()
{
if(PageManager.IS_MOCKUP)return;
try{
for(var i =0 ;i<PLT.coll.length;i++)
PLT.coll[i][1].save();
return true;
}
catch(e){
if(DEBUG==true)
alert("error occured in PLT.save** " + e.description);
return false ;
}
};
PLT.search = function(oSeek)
{
try{
var seekIndex;
var ind = PLT.findIndex(oSeek.relatedID);
var collRepeatedCells =PLT.coll[ind][1].masterNode.selectNodes(".//portcell");
for(var i=0;i<collRepeatedCells.length;i++)
{
if(collRepeatedCells[i].attributes.getNamedItem("BIND"))
{
if(collRepeatedCells[i].getAttribute("BIND")==oSeek.searchTag)
{
seekIndex=i;break;
}
}
};
if(seekIndex)
{
var seekNode =PLT.coll[ind][1].xmlData.selectSingleNode("//tr[@BIND]/*[@BIND='" + oSeek.searchTag + "' and text()='" + oSeek.search_value + "']");
b_seek=(seekNode!=null);
if(b_seek)
{
var row_id = IXML.getParentElement(seekNode).getAttribute("ID");
var html_rows = PLT.coll[ind][1].container.getElementsByTagName("tr");
for(i=0;i<html_rows.length;i++)
{
if(html_rows[i].id==row_id)
{
html_rows[i].scrollIntoView();
html_rows[i].className = PLT.coll[ind][1].css_selectedRow;
if(arguments[1])
{
try{eval(arguments[1] + "(" + html_rows[i].id + ")");}catch(e){}
}
return true;
}
}
}
}
return false;
}
catch(e){
return false;
}
};
PLT.sort = function(tblID,col){
PLT.activeID=tblID;
var id=PLT.findIndex(PLT.activeID);
if(null==id)return;
PLT.coll[id][1].getTypeSort(col);
PLT.coll[id][1].sort(col);
PLT.coll[id][1].switchSortingControl(col);
PLT.coll[id][1].setRowsCSS();
PLT.coll[id][1].transform();
};
PLT.selectAll = function(tbl_id,css_class)
{
var cntr;
var ind = PLT.findIndex(tbl_id);
if(ind==null)return;
PLT.coll[ind][1].selectAll(css_class);
};
PLT.deselectAll = function(tbl_id)
{
var ind;
if(tbl_id)
ind = PLT.findIndex(tbl_id);
else
ind = PLT.findIndex(PLT.activeID);
if(ind==null)return;
PLT.coll[ind][1].unselectAll();
};
PLT.exists = function(){
var _pt =(opener)?opener.window.PLT:window.PLT;
var id = _pt.findIndex(_pt.activeID);
if(null==id)return;
if(_pt.coll[id][1].exists(arguments[0],Util.getInputData(arguments[1])))
{
if(arguments[2])
alert(arguments[2]);
return true;
}
return false;
};
this.OnComplete = function(responseText,responseXML){};
PLT.get=function(url){
if(PageManager.IS_MOCKUP)return;
var _pt =(opener)?opener.window.PLT:window.PLT;
var id = _pt.findIndex(_pt.activeID);
if(arguments[1])
_pt.coll[id][1].callback = arguments[1];
_pt.coll[id][1].get(url,_pt.coll[id][1].complete_get,
(arguments[2])?arguments[2]:_pt.coll[id][1]);
Page.wait(true);
};
PLT.cancel = function()
{
var ind = PLT.findIndex(PLT.activeID);
if(null==ind)return;
PLT.coll[ind][1].cancel();
};
PLT.validRelatedFields=function()
{
var _pt = window.PLT;
if(opener){
_pt = opener.window.PLT;
}
var id = _pt.findIndex(_pt.activeID);
if(null==id)return;
ControlManager.VALIDATION_SUMMERY="";
var selectedRows = _pt.coll[id][1].xmlData.selectNodes("//tr[@SELECTED='1']");
var node,mastercell;
for(i =0;i<_pt.coll[id][1].relatedIDs.length;i++){
node = Page.findNodeByUniqID(_pt.coll[id][1].relatedIDs[i]);
if(null==node)continue;
mastercell = _pt.coll[id][1].masterNode.selectSingleNode(".//*[@RELATED_ID='" + _pt.coll[id][1].relatedIDs[i] + "']");
if(node.attributes.getNamedItem("ID")&& (node.attributes.getNamedItem("VALID_TYPE")|| node.getAttribute("MANDATORY")=="1")){
if(selectedRows.length>1 && (mastercell && mastercell.getAttribute("READONLY")=="true"))continue;
ControlManager.create(node.getAttribute("ID"),
node.getAttribute("BIND"),
node.getAttribute("ENUM"),
node.getAttribute("VALID_TYPE"),
"save",
node.getAttribute("SUBMIT"),
node.getAttribute("FIELD_NAME"),
node.getAttribute("MANDATORY"),
node.getAttribute("MIN_VALUE"),
node.getAttribute("MAX_VALUE"),
node.getAttribute("FILTER"),
node.getAttribute("MSG_ID"));
};
};
if(ControlManager.VALIDATION_SUMMERY!=""){
if(!_IXML_IS_IE)
ControlManager.alert(j);
else
alert(ControlManager.VALIDATION_SUMMERY);
return false;
};
return true;
};
PLT.selectRow= function(row,ptID,cssClass)
{
row = IXML.getContainer(row,"TR");
var _pt = window.PLT;
if(opener){
_pt = opener.window.PLT;
}
_pt.activeID = ptID;
var id = _pt.findIndex(_pt.activeID);
if(null==id)return;
_pt.coll[id][1].selectRow(row,cssClass) ;
};
PLT.autoSelectRow = function(winName,tblId,interfaceCtr)
{
var win;
try
{
if(PopUpManager.windows)
for (var i=0; i< PopUpManager.windows.length;i++)
{
if (!PopUpManager.windows[i].closed && PopUpManager.windows[i].name == winName)
{
win = PopUpManager.windows[i];
var pltObj = PLT.getObjById(tblId);
var ifname = win.Util.getInputData([interfaceCtr])[0];
if (ifname)
pltObj.selectRowByInterfaceName(ifname);
return;
}
};
}
catch(e){};
}
var oPLT;
PLT.createPLTObjs=function(){
var ptObjects = $col("//*[@OBJECT='PLT']");
PLT.coll = new Array();
for(var i=0;i<ptObjects.length;i++)
{
if(PLT){
try{
oPLT = new PLT(ptObjects[i]);
oPLT.getData();oPLT.show();
PLT.coll.push([oPLT.tableID,oPLT]);
var length = PLT.coll.length;
PLT.coll[length-1][1].onobjectsinit();
Page.subscribe("oPLT","BaseTable");
}catch(e){
if (DEBUG) alert ("error in PLT.createPLTObjs " + e.description);
}
}
};
}
PLT.getObjById = function(id)
{
for (var i=0; i< PLT.coll.length;i++ )
{
if (PLT.coll[i][0]==id) return PLT.coll[i][1];
}
return null;
} ;
if (typeof(portList)!="undefined")
Class(portList1).Extends(portList);
function portList1 (id,bind)
{
this.konstructor = function(id,bind)
{
this.superclass(id,bind) ;
if (this.masterNode==null)return;
attributes = this.masterNode.attributes;
this.belongsValue = (attributes.getNamedItem("BELONGS_VALUE"))?this.masterNode.getAttribute("BELONGS_VALUE"):"";
this.notBelongsValue =(attributes.getNamedItem("NOT_BELONGS_VALUE"))?this.masterNode.getAttribute("NOT_BELONGS_VALUE"):"";
}
this.updatePort = function (ifName,val)
{
if (val ==this.belongsValue)
this.addPort(ifName)
else if (val ==this.notBelongsValue)
this.removePort(ifName);
};
this.translate = function(ifName){
if (this.portBelongs(ifName)){
if (this.belongsValue!="") return this.belongsValue
else return ifName;
}else{
if (this.notBelongsValue!="") return this.notBelongsValue
return "";
}
};
this.complete_get=function(responseText, responseXML){
this.wait(false);
if(responseText!=""){
if(!Page.timeOutIdle(responseText)){
var xml = IXML.getDomDocument();
if(document.evaluate){
xml = (new DOMParser()).parseFromString(responseText, "text/xml");
} else{
xml.loadXML(responseText);
}
if(!IXML.hasChildElements(xml))return;
if(xml.documentElement.selectSingleNode("//" + this.dataSectionName)){
var sectionNode = Page.dataXml.documentElement.selectSingleNode("//" + this.dataSectionName);
if(sectionNode){
IXML.copyChildNodes(xml.documentElement.selectSingleNode("//" + this.dataSectionName),sectionNode,false);
sectionNode.removeAttribute("set");
sectionNode.removeAttribute("action");
this.konstructor(this.id,this.xpath);
}
if (!Page.dataXml_delete || !Page.dataXml_delete.documentElement ) return;
sectionNode = Page.dataXml_delete.documentElement.selectSingleNode("//" + this.dataSectionName);
if (sectionNode) IXML.getParentElement(sectionNode).removeChild(sectionNode);
}
}
}
};
}
Class(PrevNextPaging);
function PrevNextPaging(){
this.konstructor=function(id,scope){
this.masterNode=Page.findNodeByUniqID(id);
this.type=this.masterNode.getAttribute("TYPE");
this.data = [];
if(this.firstEntryInPage!=0)
this.firstEntryInPage="1";
this.needUpdate=true;
if(this.type=="dynamic")
{
this.scope = scope;
this.pageSize=parseInt(top.numberOfEntriesPerPage)+1;
this.urlTemplate = IXML.getText(this.masterNode.selectSingleNode("./urlTemplate"));
this.urlCache=[];
}
else
{
var slct=document.getElementById("recordFilter");
if(this.needUpdate && slct!=null)
{
slct.selectedIndex = slct.length - 1 - getPagingSizeFromCookie(slct,null,this.type);
this.pageSize=slct.value;
this.needUpdate=false;
}
else
this.pageSize=parseInt(top.numberOfEntriesPerPage);
this.linksContainerId=this.masterNode.getAttribute("LINKS_CONTAINER_ID");
this.objName = null;
this.scope = null;
}
};
this.init=function(){
this.urlCache=[];
this.createUrl("");
};
this.getNext=function(){
}
this.getPrev=function(){
if(this.urlCache.length>1){
this.urlCache.pop();
this.scope.url=this.urlCache[this.urlCache.length-1];
this.firstEntryInPage-=parseInt(top.numberOfEntriesPerPage)
}else{
this.scope.url=this.urlCache[0];
}
this.scope.get();
};
this.createUrl=function(){
};
this.getCurrentUrl=function(){
this.scope.url=this.urlCache[this.urlCache.length-1];
};
this.getLastRecord=function(total){
var slct=document.getElementById("recordFilter");
if(this.needUpdate && slct!=null)
{
if(slct.length > 0)
slct.selectedIndex = slct.length - 1 - getPagingSizeFromCookie(slct,null,this.type);
this.needUpdate=false;
}
if (this.type.toLowerCase() == "dynamic")
var lastRecord=parseInt(this.firstEntryInPage,10) + parseInt(this.pageSize,10) - 2;
else
var lastRecord=parseInt(this.firstEntryInPage,10) + parseInt(this.pageSize,10) - 1;
if(lastRecord > total)
return total;
else
return lastRecord;
};
this.updateFirstRecordNum=function(total){
if (total==0)
this.firstEntryInPage=0;
else
this.firstEntryInPage=((this.urlCache.length-1)*(this.pageSize-1))+1;
}
this.pagingFilter=function(){
updatePagingCookie(this.type);
this.pageSize=top.numberOfEntriesPerPage+1;
this.firstEntryInPage = 1;
this.urlCache.length=0;
this.createUrl();
this.scope.url=this.urlCache[this.urlCache.length-1];
this.scope.get();
};
this.DisplayGroup=function(firstEntry,lastEntry,isFromLink){
if(this.scope==null)return;
if(firstEntry)
{
if(!isFromLink && top.currPageIndex!=1 && firstEntry==1)
{
var lnk=document.getElementById("lnk"+(top.currPageIndex-1));
try
{
lnk.click();
}
catch(ex)
{
lnk.onclick(lnk.onclick);
}
return;
}
else
this.firstEntryInPage=firstEntry;
}
var total = (this.data.length > 0) ? this.data.length : top.NumberOfPortPerModuleArr[oPolling.currentUnit];
var lastRecord=(lastEntry)?parseInt(lastEntry):(this.getLastRecord(total));
this.scope.pgTkn.setTokenWithError("lblFirst","10718",[[TKN_NUMBER,this.firstEntryInPage],[TKN_NUMBER,lastRecord],[TKN_NUMBER,total]]);
if (this.data.length > 0)
{
var html_row;
for(var i = 0; i < this.data.length; i++)
{
html_row = this.data[i];
if (html_row)
{
if((i+1)<this.firstEntryInPage || (i+1)>lastRecord)
html_row.style.display="none";
else
html_row.style.display="";
}
}
}
else
{
var rows = this.scope.xmlData.selectNodes("//tr[@BIND and contains(@ID,'r')]");
var row_id,html_row,entryId;
if(rows.length > 0)
{
for(var i = 0; i < rows.length; i++)
{
row_id = rows[i].getAttribute("ID");
html_row = document.getElementById(row_id);
if (html_row)
{
if((i+1)<this.firstEntryInPage || (i+1)>lastRecord)
html_row.style.display="none";
else
html_row.style.display="";
}
}
}
}
};
this.pagingFilterStatic=function(data){
if(this.objName==null || this.scope==null)return;
updatePagingCookie(this.type);
this.pageSize=top.numberOfEntriesPerPage;
var entryNum = null;
if (data)
{
this.data = data;
entryNum = this.data.length
}
createPagerLinks(this.pageSize,this.objName,this.linksContainerId,entryNum);
this.firstEntryInPage="1";
this.DisplayGroup()
};
this.getPageSize=function(namOfPorts,index){
var optArr;
if(namOfPorts>10 && namOfPorts<48)
optArr=[10,namOfPorts]
else if(namOfPorts>=48)
optArr=[10,26,namOfPorts]
else
return namOfPorts;
return optArr[optArr.length - 1 - index];
};
};
