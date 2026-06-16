// src/components/styles/notesToc.scss
var notesToc_default = "@media all and (max-width: 800px) {\n  .page > #quartz-body > :not(.sidebar.left:has(.notes-toc-explorer)) {\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body.lock-scroll > :not(.sidebar.left:has(.notes-toc-explorer)) {\n    transform: translateX(100dvw);\n    transition: transform 300ms ease-in-out;\n  }\n  .page > #quartz-body .sidebar.left:has(.notes-toc-explorer) {\n    box-sizing: border-box;\n    position: sticky;\n    background-color: var(--light);\n    padding: 1rem 0 1rem 0;\n    margin: 0;\n  }\n  .page > #quartz-body .hide-until-loaded ~ .notes-toc-content {\n    display: none;\n  }\n}\n\n.notes-toc-explorer {\n  display: flex;\n  flex-direction: column;\n  overflow-y: hidden;\n  min-height: 1.2rem;\n  flex: 0 1 auto;\n}\n.notes-toc-explorer.collapsed {\n  flex: 0 1 1.2rem;\n}\n.notes-toc-explorer.collapsed .fold {\n  transform: rotateZ(-90deg);\n}\n.notes-toc-explorer .fold {\n  margin-left: 0.5rem;\n  transition: transform 0.3s ease;\n  opacity: 0.8;\n}\n@media all and (max-width: 800px) {\n  .notes-toc-explorer {\n    order: -2;\n    height: initial;\n    overflow: hidden;\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n}\n.notes-toc-explorer button.mobile-toc-explorer {\n  display: none;\n}\n.notes-toc-explorer button.desktop-toc-explorer {\n  display: flex;\n}\n@media all and (max-width: 800px) {\n  .notes-toc-explorer button.mobile-toc-explorer {\n    display: flex;\n  }\n  .notes-toc-explorer button.desktop-toc-explorer {\n    display: none;\n  }\n}\n.notes-toc-explorer svg {\n  pointer-events: all;\n  transition: transform 0.35s ease;\n}\n.notes-toc-explorer svg > polyline {\n  pointer-events: none;\n}\n\n.notes-toc-explorer button.mobile-toc-explorer,\n.notes-toc-explorer button.desktop-toc-explorer {\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  padding: 0;\n  color: var(--dark);\n  align-items: center;\n}\n.notes-toc-explorer button.mobile-toc-explorer h2,\n.notes-toc-explorer button.desktop-toc-explorer h2 {\n  font-size: 0.85rem;\n  display: inline-block;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--gray);\n  font-weight: 600;\n}\n\n.notes-toc-content {\n  list-style: none;\n  overflow: hidden;\n  overflow-y: auto;\n  margin-top: 0.5rem;\n}\n.notes-toc-content ul {\n  list-style: none;\n  position: relative;\n  margin: 0.5rem 0;\n  padding: 0;\n}\n.notes-toc-content ul.notes-toc-ul {\n  overscroll-behavior: contain;\n}\n.notes-toc-content ul li {\n  margin: 0.25rem 0;\n}\n.notes-toc-content ul > li > a {\n  color: var(--dark);\n  opacity: 0.35;\n  text-decoration: none;\n  font-size: 0.9rem;\n  transition:\n    0.5s ease opacity,\n    0.3s ease color;\n}\n.notes-toc-content ul > li > a.in-view {\n  opacity: 0.75;\n}\n.notes-toc-content ul .depth-0 { padding-left: 0; }\n.notes-toc-content ul .depth-1 { padding-left: 1rem; }\n.notes-toc-content ul .depth-2 { padding-left: 2rem; }\n.notes-toc-content ul .depth-3 { padding-left: 3rem; }\n.notes-toc-content ul .depth-4 { padding-left: 4rem; }\n.notes-toc-content ul .depth-5 { padding-left: 5rem; }\n.notes-toc-content ul .depth-6 { padding-left: 6rem; }\n\n.notes-toc-overlay-heading {\n  display: none;\n}\n\n@media all and (max-width: 800px) {\n  .notes-toc-overlay-heading {\n    display: block;\n    font-size: 1rem;\n    margin: 0 0 1rem;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    color: var(--gray);\n  }\n}\n.notes-toc-content ul li > a {\n  color: var(--dark);\n  opacity: 0.75;\n  pointer-events: all;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n.notes-toc-content ul li > a:hover {\n  opacity: 1;\n  color: var(--tertiary);\n}\n\n@media all and (max-width: 800px) {\n  .notes-toc-explorer {\n    flex: 0 0 34px;\n  }\n  .notes-toc-explorer > .notes-toc-content {\n    transform: translateX(-100vw);\n    visibility: hidden;\n  }\n  .notes-toc-explorer.notes-toc-open > .notes-toc-content {\n    transform: translateX(0);\n    visibility: visible;\n  }\n  .notes-toc-explorer .notes-toc-content {\n    box-sizing: border-box;\n    z-index: 100;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin-top: 0;\n    background-color: var(--light);\n    max-width: 100vw;\n    width: 100vw;\n    overflow: hidden;\n    padding: 4rem 1rem 2rem 1rem;\n    height: 100dvh;\n    max-height: 100dvh;\n  }\n  .notes-toc-ready.notes-toc-explorer .notes-toc-content {\n    transition:\n      transform 200ms ease,\n      visibility 200ms ease;\n  }\n  .notes-toc-explorer .mobile-toc-explorer {\n    margin: 0;\n    padding: 5px;\n    z-index: 101;\n  }\n  .notes-toc-explorer .mobile-toc-explorer.hide-until-loaded {\n    display: none;\n  }\n  .notes-toc-explorer .mobile-toc-explorer .lucide-menu {\n    stroke: var(--darkgray);\n  }\n}\n\n@media all and (max-width: 800px) {\n  .mobile-no-scroll .notes-toc-content > .notes-toc-ul {\n    overscroll-behavior: contain;\n  }\n}\n";

// ../../../node_modules/preact/dist/preact.mjs
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d = Array.isArray;
function w(n2, l2) {
  for (var u3 in l2) n2[u3] = l2[u3];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function m(n2, t2, i2, r2, o2) {
  var e2 = { type: n2, props: t2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o2 ? ++u : o2, __i: -1, __u: 0 };
  return null == o2 && null != l.vnode && l.vnode(e2), e2;
}
function k(n2) {
  return n2.children;
}
function x(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (null == l2) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u3; l2 < n2.__k.length; l2++) if (null != (u3 = n2.__k[l2]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  if (n2.__P && n2.__d) {
    var u3 = n2.__v, t2 = u3.__e, i2 = [], r2 = [], o2 = w({}, u3);
    o2.__v = u3.__v + 1, l.vnode && l.vnode(o2), z(n2.__P, o2, u3, n2.__n, n2.__P.namespaceURI, 32 & u3.__u ? [t2] : null, i2, null == t2 ? S(u3) : t2, !!(32 & u3.__u), r2), o2.__v = u3.__v, o2.__.__k[o2.__i] = o2, V(i2, o2, r2), u3.__e = u3.__ = null, o2.__e != t2 && M(o2);
  }
}
function M(n2) {
  if (null != (n2 = n2.__) && null != n2.__c) return n2.__e = n2.__c.base = null, n2.__k.some(function(l2) {
    if (null != l2 && null != l2.__e) return n2.__e = n2.__c.base = l2.__e;
  }), M(n2);
}
function $(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !I.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)(I);
}
function I() {
  for (var n2, l2 = 1; i.length; ) i.length > l2 && i.sort(e), n2 = i.shift(), l2 = i.length, C(n2);
  I.__r = 0;
}
function P(n2, l2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
  var a2, h2, y2, d2, w2, g2, _, m2 = t2 && t2.__k || v, b = l2.length;
  for (f3 = A(u3, l2, m2, f3, b), a2 = 0; a2 < b; a2++) null != (y2 = u3.__k[a2]) && (h2 = -1 != y2.__i && m2[y2.__i] || p, y2.__i = a2, g2 = z(n2, y2, h2, i2, r2, o2, e2, f3, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && D(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), null == w2 && null != d2 && (w2 = d2), (_ = !!(4 & y2.__u)) || h2.__k === y2.__k ? f3 = H(y2, f3, n2, _) : "function" == typeof y2.type && void 0 !== g2 ? f3 = g2 : d2 && (f3 = d2.nextSibling), y2.__u &= -7);
  return u3.__e = w2, f3;
}
function A(n2, l2, u3, t2, i2) {
  var r2, o2, e2, f3, c2, s2 = u3.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0; r2 < i2; r2++) null != (o2 = l2[r2]) && "boolean" != typeof o2 && "function" != typeof o2 ? ("string" == typeof o2 || "number" == typeof o2 || "bigint" == typeof o2 || o2.constructor == String ? o2 = n2.__k[r2] = m(null, o2, null, null, null) : d(o2) ? o2 = n2.__k[r2] = m(k, { children: o2 }, null, null, null) : void 0 === o2.constructor && o2.__b > 0 ? o2 = n2.__k[r2] = m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : n2.__k[r2] = o2, f3 = r2 + h2, o2.__ = n2, o2.__b = n2.__b + 1, e2 = null, -1 != (c2 = o2.__i = T(o2, u3, f3, a2)) && (a2--, (e2 = u3[c2]) && (e2.__u |= 2)), null == e2 || null == e2.__v ? (-1 == c2 && (i2 > s2 ? h2-- : i2 < s2 && h2++), "function" != typeof o2.type && (o2.__u |= 4)) : c2 != f3 && (c2 == f3 - 1 ? h2-- : c2 == f3 + 1 ? h2++ : (c2 > f3 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2) for (r2 = 0; r2 < s2; r2++) null != (e2 = u3[r2]) && 0 == (2 & e2.__u) && (e2.__e == t2 && (t2 = S(e2)), E(e2, e2));
  return t2;
}
function H(n2, l2, u3, t2) {
  var i2, r2;
  if ("function" == typeof n2.type) {
    for (i2 = n2.__k, r2 = 0; i2 && r2 < i2.length; r2++) i2[r2] && (i2[r2].__ = n2, l2 = H(i2[r2], l2, u3, t2));
    return l2;
  }
  n2.__e != l2 && (t2 && (l2 && n2.type && !l2.parentNode && (l2 = S(n2)), u3.insertBefore(n2.__e, l2 || null)), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (null != l2 && 8 == l2.nodeType);
  return l2;
}
function T(n2, l2, u3, t2) {
  var i2, r2, o2, e2 = n2.key, f3 = n2.type, c2 = l2[u3], s2 = null != c2 && 0 == (2 & c2.__u);
  if (null === c2 && null == e2 || s2 && e2 == c2.key && f3 == c2.type) return u3;
  if (t2 > (s2 ? 1 : 0)) {
    for (i2 = u3 - 1, r2 = u3 + 1; i2 >= 0 || r2 < l2.length; ) if (null != (c2 = l2[o2 = i2 >= 0 ? i2-- : r2++]) && 0 == (2 & c2.__u) && e2 == c2.key && f3 == c2.type) return o2;
  }
  return -1;
}
function j(n2, l2, u3) {
  "-" == l2[0] ? n2.setProperty(l2, null == u3 ? "" : u3) : n2[l2] = null == u3 ? "" : "number" != typeof u3 || y.test(l2) ? u3 : u3 + "px";
}
function F(n2, l2, u3, t2, i2) {
  var r2, o2;
  n: if ("style" == l2) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t2 && (n2.style.cssText = t2 = ""), t2) for (l2 in t2) u3 && l2 in u3 || j(n2.style, l2, "");
    if (u3) for (l2 in u3) t2 && u3[l2] == t2[l2] || j(n2.style, l2, u3[l2]);
  }
  else if ("o" == l2[0] && "n" == l2[1]) r2 = l2 != (l2 = l2.replace(f, "$1")), o2 = l2.toLowerCase(), l2 = o2 in n2 || "onFocusOut" == l2 || "onFocusIn" == l2 ? o2.slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u3, u3 ? t2 ? u3.u = t2.u : (u3.u = c, n2.addEventListener(l2, r2 ? a : s, r2)) : n2.removeEventListener(l2, r2 ? a : s, r2);
  else {
    if ("http://www.w3.org/2000/svg" == i2) l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l2 && "height" != l2 && "href" != l2 && "list" != l2 && "form" != l2 && "tabIndex" != l2 && "download" != l2 && "rowSpan" != l2 && "colSpan" != l2 && "role" != l2 && "popover" != l2 && l2 in n2) try {
      n2[l2] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, "popover" == l2 && 1 == u3 ? "" : u3));
  }
}
function O(n2) {
  return function(u3) {
    if (this.l) {
      var t2 = this.l[u3.type + n2];
      if (null == u3.t) u3.t = c++;
      else if (u3.t < t2.u) return;
      return t2(l.event ? l.event(u3) : u3);
    }
  };
}
function z(n2, u3, t2, i2, r2, o2, e2, f3, c2, s2) {
  var a2, h2, p2, y2, _, m2, b, S2, C2, M2, $2, I2, A2, H2, L, T2 = u3.type;
  if (void 0 !== u3.constructor) return null;
  128 & t2.__u && (c2 = !!(32 & t2.__u), o2 = [f3 = u3.__e = t2.__e]), (a2 = l.__b) && a2(u3);
  n: if ("function" == typeof T2) try {
    if (S2 = u3.props, C2 = "prototype" in T2 && T2.prototype.render, M2 = (a2 = T2.contextType) && i2[a2.__c], $2 = a2 ? M2 ? M2.props.value : a2.__ : i2, t2.__c ? b = (h2 = u3.__c = t2.__c).__ = h2.__E : (C2 ? u3.__c = h2 = new T2(S2, $2) : (u3.__c = h2 = new x(S2, $2), h2.constructor = T2, h2.render = G), M2 && M2.sub(h2), h2.state || (h2.state = {}), h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), C2 && null == h2.__s && (h2.__s = h2.state), C2 && null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = w({}, h2.__s)), w(h2.__s, T2.getDerivedStateFromProps(S2, h2.__s))), y2 = h2.props, _ = h2.state, h2.__v = u3, p2) C2 && null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), C2 && null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
    else {
      if (C2 && null == T2.getDerivedStateFromProps && S2 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(S2, $2), u3.__v == t2.__v || !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(S2, h2.__s, $2)) {
        u3.__v != t2.__v && (h2.props = S2, h2.state = h2.__s, h2.__d = false), u3.__e = t2.__e, u3.__k = t2.__k, u3.__k.some(function(n3) {
          n3 && (n3.__ = u3);
        }), v.push.apply(h2.__h, h2._sb), h2._sb = [], h2.__h.length && e2.push(h2);
        break n;
      }
      null != h2.componentWillUpdate && h2.componentWillUpdate(S2, h2.__s, $2), C2 && null != h2.componentDidUpdate && h2.__h.push(function() {
        h2.componentDidUpdate(y2, _, m2);
      });
    }
    if (h2.context = $2, h2.props = S2, h2.__P = n2, h2.__e = false, I2 = l.__r, A2 = 0, C2) h2.state = h2.__s, h2.__d = false, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), v.push.apply(h2.__h, h2._sb), h2._sb = [];
    else do {
      h2.__d = false, I2 && I2(u3), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
    } while (h2.__d && ++A2 < 25);
    h2.state = h2.__s, null != h2.getChildContext && (i2 = w(w({}, i2), h2.getChildContext())), C2 && !p2 && null != h2.getSnapshotBeforeUpdate && (m2 = h2.getSnapshotBeforeUpdate(y2, _)), H2 = null != a2 && a2.type === k && null == a2.key ? q(a2.props.children) : a2, f3 = P(n2, d(H2) ? H2 : [H2], u3, t2, i2, r2, o2, e2, f3, c2, s2), h2.base = u3.__e, u3.__u &= -161, h2.__h.length && e2.push(h2), b && (h2.__E = h2.__ = null);
  } catch (n3) {
    if (u3.__v = null, c2 || null != o2) if (n3.then) {
      for (u3.__u |= c2 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
      o2[o2.indexOf(f3)] = null, u3.__e = f3;
    } else {
      for (L = o2.length; L--; ) g(o2[L]);
      N(u3);
    }
    else u3.__e = t2.__e, u3.__k = t2.__k, n3.then || N(u3);
    l.__e(n3, u3, t2);
  }
  else null == o2 && u3.__v == t2.__v ? (u3.__k = t2.__k, u3.__e = t2.__e) : f3 = u3.__e = B(t2.__e, u3, t2, i2, r2, o2, e2, c2, s2);
  return (a2 = l.diffed) && a2(u3), 128 & u3.__u ? void 0 : f3;
}
function N(n2) {
  n2 && (n2.__c && (n2.__c.__e = true), n2.__k && n2.__k.some(N));
}
function V(n2, u3, t2) {
  for (var i2 = 0; i2 < t2.length; i2++) D(t2[i2], t2[++i2], t2[++i2]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function q(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b > 0 ? n2 : d(n2) ? n2.map(q) : w({}, n2);
}
function B(u3, t2, i2, r2, o2, e2, f3, c2, s2) {
  var a2, h2, v2, y2, w2, _, m2, b = i2.props || p, k2 = t2.props, x2 = t2.type;
  if ("svg" == x2 ? o2 = "http://www.w3.org/2000/svg" : "math" == x2 ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), null != e2) {
    for (a2 = 0; a2 < e2.length; a2++) if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : 3 == w2.nodeType)) {
      u3 = w2, e2[a2] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x2) return document.createTextNode(k2);
    u3 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(t2, e2), c2 = false), e2 = null;
  }
  if (null == x2) b === k2 || c2 && u3.data == k2 || (u3.data = k2);
  else {
    if (e2 = e2 && n.call(u3.childNodes), !c2 && null != e2) for (b = {}, a2 = 0; a2 < u3.attributes.length; a2++) b[(w2 = u3.attributes[a2]).name] = w2.value;
    for (a2 in b) w2 = b[a2], "dangerouslySetInnerHTML" == a2 ? v2 = w2 : "children" == a2 || a2 in k2 || "value" == a2 && "defaultValue" in k2 || "checked" == a2 && "defaultChecked" in k2 || F(u3, a2, null, w2, o2);
    for (a2 in k2) w2 = k2[a2], "children" == a2 ? y2 = w2 : "dangerouslySetInnerHTML" == a2 ? h2 = w2 : "value" == a2 ? _ = w2 : "checked" == a2 ? m2 = w2 : c2 && "function" != typeof w2 || b[a2] === w2 || F(u3, a2, w2, b[a2], o2);
    if (h2) c2 || v2 && (h2.__html == v2.__html || h2.__html == u3.innerHTML) || (u3.innerHTML = h2.__html), t2.__k = [];
    else if (v2 && (u3.innerHTML = ""), P("template" == t2.type ? u3.content : u3, d(y2) ? y2 : [y2], t2, i2, r2, "foreignObject" == x2 ? "http://www.w3.org/1999/xhtml" : o2, e2, f3, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), null != e2) for (a2 = e2.length; a2--; ) g(e2[a2]);
    c2 || (a2 = "value", "progress" == x2 && null == _ ? u3.removeAttribute("value") : null != _ && (_ !== u3[a2] || "progress" == x2 && !_ || "option" == x2 && _ != b[a2]) && F(u3, a2, _, b[a2], o2), a2 = "checked", null != m2 && m2 != u3[a2] && F(u3, a2, m2, b[a2], o2));
  }
  return u3;
}
function D(n2, u3, t2) {
  try {
    if ("function" == typeof n2) {
      var i2 = "function" == typeof n2.__u;
      i2 && n2.__u(), i2 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t2);
  }
}
function E(n2, u3, t2) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current != n2.__e || D(i2, null, u3)), null != (i2 = n2.__c)) {
    if (i2.componentWillUnmount) try {
      i2.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k) for (r2 = 0; r2 < i2.length; r2++) i2[r2] && E(i2[r2], u3, t2 || "function" != typeof n2.type);
  t2 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function G(n2, l2, u3) {
  return this.constructor(n2, u3);
}
n = v.slice, l = { __e: function(n2, l2, u3, t2) {
  for (var i2, r2, o2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((r2 = i2.constructor) && null != r2.getDerivedStateFromError && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), o2 = i2.__d), o2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, x.prototype.setState = function(n2, l2) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, u3), this.props)), n2 && w(u3, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), $(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), $(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, I.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = O(false), a = O(true), h = 0;

// ../../../node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/MobileToc.tsx
var script = `
(function () {
  function handleNavOrRender() {
    var allTocs = document.querySelectorAll("div.notes-toc-explorer");
    for (var i = 0; i < allTocs.length; i++) {
      var toc = allTocs[i];
      // always start closed (no persisted state)
      toc.classList.remove("notes-toc-open");
      toc.classList.remove("collapsed");
      toc.setAttribute("aria-expanded", "true");
      document.documentElement.classList.remove("mobile-no-scroll");

      var cleanupHandlers = [];
      var isMobile = window.matchMedia("(max-width: 800px)").matches;

      var mobileBtn = toc.querySelector(".mobile-toc-explorer");
      if (mobileBtn) {
        mobileBtn.classList.remove("hide-until-loaded");
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { toc.classList.add("notes-toc-ready"); });
        });
        (function (btn, tocEl) {
          var handler = function () {
            var opened = tocEl.classList.toggle("notes-toc-open");
            tocEl.setAttribute("aria-expanded", opened ? "true" : "false");
            if (opened) document.documentElement.classList.add("mobile-no-scroll");
            else document.documentElement.classList.remove("mobile-no-scroll");
          };
          btn.addEventListener("click", handler);
          cleanupHandlers.push(function () { btn.removeEventListener("click", handler); });
        })(mobileBtn, toc);
      }

      var desktopBtn = toc.querySelector(".desktop-toc-explorer");
      if (desktopBtn) {
        (function (btn, tocEl) {
          var handler = function () {
            var collapsed = tocEl.classList.toggle("collapsed");
            tocEl.setAttribute("aria-expanded", collapsed ? "false" : "true");
          };
          btn.addEventListener("click", handler);
          cleanupHandlers.push(function () { btn.removeEventListener("click", handler); });
        })(desktopBtn, toc);
      }

      // tapping any link closes the mobile overlay
      var links = toc.querySelectorAll("a");
      for (var l = 0; l < links.length; l++) {
        (function (link, tocEl) {
          var linkHandler = function () {
            if (window.matchMedia("(max-width: 800px)").matches) {
              tocEl.classList.remove("notes-toc-open");
              tocEl.setAttribute("aria-expanded", "false");
              document.documentElement.classList.remove("mobile-no-scroll");
            }
          };
          link.addEventListener("click", linkHandler);
          cleanupHandlers.push(function () { link.removeEventListener("click", linkHandler); });
        })(links[l], toc);
      }

      if (typeof window !== "undefined" && window.addCleanup) {
        window.addCleanup(function () { cleanupHandlers.forEach(function (fn) { fn(); }); });
      }
    }

    // scroll-spy: highlight headings currently in view
    if (window.__notesTocObserver) window.__notesTocObserver.disconnect();
    var observer = new IntersectionObserver(function (entries) {
      for (var e = 0; e < entries.length; e++) {
        var entry = entries[e];
        var slug = entry.target.id;
        var links = document.querySelectorAll('a[data-for="' + slug + '"]');
        var windowHeight = entry.rootBounds ? entry.rootBounds.height : null;
        if (!windowHeight || !links.length) continue;
        if (entry.boundingClientRect.y < windowHeight) {
          for (var k = 0; k < links.length; k++) links[k].classList.add("in-view");
        } else {
          for (var k = 0; k < links.length; k++) links[k].classList.remove("in-view");
        }
      }
    });
    window.__notesTocObserver = observer;
    var headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
    headers.forEach(function (h) { observer.observe(h); });
  }

  document.addEventListener("nav", handleNavOrRender);
  document.addEventListener("render", handleNavOrRender);
})();
`;
var numTocs = 0;
var MobileToc = ({ fileData }) => {
  const toc = fileData.toc;
  if (!toc || toc.length === 0) return null;
  const id = `notes-toc-${numTocs++}`;
  return /* @__PURE__ */ u2("div", { class: "notes-toc-explorer", "aria-expanded": false, children: [
    /* @__PURE__ */ u2(
      "button",
      {
        type: "button",
        class: "notes-toc-toggle mobile-toc-explorer hide-until-loaded",
        "aria-controls": id,
        "aria-label": "Table of contents",
        children: /* @__PURE__ */ u2(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "lucide-menu",
            children: [
              /* @__PURE__ */ u2("line", { x1: 4, x2: 20, y1: 12, y2: 12 }),
              /* @__PURE__ */ u2("line", { x1: 4, x2: 20, y1: 6, y2: 6 }),
              /* @__PURE__ */ u2("line", { x1: 4, x2: 20, y1: 18, y2: 18 })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ u2(
      "button",
      {
        type: "button",
        class: "notes-toc-toggle title-button desktop-toc-explorer",
        "aria-expanded": true,
        children: [
          /* @__PURE__ */ u2("h2", { children: "Table of Contents" }),
          /* @__PURE__ */ u2(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "14",
              height: "14",
              viewBox: "5 8 14 8",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": 2,
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              class: "fold",
              children: /* @__PURE__ */ u2("polyline", { points: "6 9 12 15 18 9" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ u2("div", { id, class: "notes-toc-content", "aria-expanded": true, role: "group", children: [
      /* @__PURE__ */ u2("h2", { class: "notes-toc-overlay-heading", children: "Table of Contents" }),
      /* @__PURE__ */ u2("ul", { class: "overflow notes-toc-ul", children: [
        toc.map((entry) => /* @__PURE__ */ u2("li", { class: `depth-${entry.depth}`, children: /* @__PURE__ */ u2("a", { href: `#${entry.slug}`, "data-for": entry.slug, children: entry.text }) })),
        /* @__PURE__ */ u2("li", { class: "overflow-end" })
      ] })
    ] })
  ] });
};
MobileToc.css = notesToc_default;
MobileToc.afterDOMLoaded = script;
var MobileToc_default = (() => MobileToc);

// ../../../node_modules/github-slugger/index.js
var own = Object.hasOwnProperty;

// ../../../node_modules/@quartz-community/utils/dist/path.js
function simplifySlug(fp) {
  const res = stripSlashes(trimSuffix(fp, "index"), true);
  return res.length === 0 ? "/" : res;
}
function joinSegments(...args) {
  if (args.length === 0) {
    return "";
  }
  let joined = args.filter((segment) => segment !== "" && segment !== "/").map((segment) => stripSlashes(segment)).join("/");
  const first = args[0];
  const last = args[args.length - 1];
  if (first?.startsWith("/")) {
    joined = "/" + joined;
  }
  if (last?.endsWith("/")) {
    joined = joined + "/";
  }
  return joined;
}
function endsWith(s2, suffix) {
  return s2 === suffix || s2.endsWith("/" + suffix);
}
function trimSuffix(s2, suffix) {
  if (endsWith(s2, suffix)) {
    s2 = s2.slice(0, -suffix.length);
  }
  return s2;
}
function stripSlashes(s2, onlyStripPrefix) {
  if (s2.startsWith("/")) {
    s2 = s2.substring(1);
  }
  if (!onlyStripPrefix && s2.endsWith("/")) {
    s2 = s2.slice(0, -1);
  }
  return s2;
}
function pathToRoot(slug2) {
  let rootPath = slug2.split("/").filter((x2) => x2 !== "").slice(0, -1).map((_) => "..").join("/");
  if (rootPath.length === 0) {
    rootPath = ".";
  }
  return rootPath;
}
function resolveRelative(current, target) {
  const res = joinSegments(pathToRoot(current), simplifySlug(target));
  return res;
}

// src/components/styles/backlinks.scss
var backlinks_default = ".backlinks {\n  flex-direction: column;\n\n  & > h3 {\n    font-size: 1rem;\n    margin: 0;\n  }\n\n  & > ul.overflow {\n    list-style: none;\n    padding: 0;\n    margin: 0.5rem 0;\n    max-height: calc(100% - 2rem);\n    overscroll-behavior: contain;\n\n    & > li > a {\n      background-color: transparent;\n    }\n  }\n}\n";

// src/components/Backlinks.tsx
var defaultOptions = { hideWhenEmpty: true };
var listCount = 0;
var Backlinks_default = ((opts) => {
  const options = { ...defaultOptions, ...opts };
  const listId = `list-${listCount++}`;
  const Backlinks = ({
    fileData,
    allFiles,
    displayClass
  }) => {
    const slug2 = simplifySlug(fileData.slug);
    const backlinkFiles = allFiles.filter(
      (file) => file.unlisted !== true && file.links?.includes(slug2)
    );
    if (options.hideWhenEmpty && backlinkFiles.length === 0) return null;
    const classes = [displayClass, "backlinks"].filter(Boolean).join(" ");
    return /* @__PURE__ */ u2("div", { class: classes, children: [
      /* @__PURE__ */ u2("h3", { children: "Backlinks" }),
      /* @__PURE__ */ u2("ul", { class: "overflow", id: listId, children: [
        backlinkFiles.length > 0 ? backlinkFiles.map((f3) => /* @__PURE__ */ u2("li", { children: /* @__PURE__ */ u2(
          "a",
          {
            href: resolveRelative(fileData.slug, f3.slug),
            class: "internal",
            children: f3.frontmatter?.title
          }
        ) })) : /* @__PURE__ */ u2("li", { children: "No backlinks found" }),
        /* @__PURE__ */ u2("li", { class: "overflow-end" })
      ] })
    ] });
  };
  Backlinks.css = backlinks_default;
  Backlinks.afterDOMLoaded = `
document.addEventListener("nav", function () {
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var parentUl = entry.target.parentElement;
      if (!parentUl) continue;
      if (entry.isIntersecting) parentUl.classList.remove("gradient-active");
      else parentUl.classList.add("gradient-active");
    }
  });
  var ul = document.getElementById("${listId}");
  if (!ul) return;
  var end = ul.querySelector(".overflow-end");
  if (!end) return;
  observer.observe(end);
});
`;
  return Backlinks;
});
export {
  Backlinks_default as Backlinks,
  MobileToc_default as MobileToc
};
