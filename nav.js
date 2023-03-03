import {
  S as he,
  i as ve,
  s as pe,
  e as w,
  m as z,
  x as W,
  w as _e,
  c as H,
  a as k,
  q as M,
  d as O,
  z as Y,
  y as Se,
  b as I,
  H as fe,
  t as X,
  f as Te,
  u as f,
  A as Ee,
  l as U,
  F as J,
  C as Oe,
  D as Ie,
  E as we,
  r as He,
  o as ke,
  I as Re,
  h as ye,
} from "./chunks/index.eba22d21.js";
import { N as Ce, a as A, V as Ne } from "./chunks/NavItems.296dfce1.js";
/* empty css                                                 */
var Q =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ge = "Expected a function",
  de = 0 / 0,
  De = "[object Symbol]",
  Le = /^\s+|\s+$/g,
  Ae = /^[-+]0x[0-9a-f]+$/i,
  je = /^0b[01]+$/i,
  Be = /^0o[0-7]+$/i,
  Pe = parseInt,
  ze = typeof Q == "object" && Q && Q.Object === Object && Q,
  Me = typeof self == "object" && self && self.Object === Object && self,
  xe = ze || Me || Function("return this")(),
  Ve = Object.prototype,
  Ue = Ve.toString,
  Fe = Math.max,
  We = Math.min,
  ne = function () {
    return xe.Date.now();
  };
function Ye(e, n, t) {
  var g,
    a,
    d,
    r,
    c,
    u,
    h = 0,
    v = !1,
    T = !1,
    y = !0;
  if (typeof e != "function") throw new TypeError(ge);
  (n = be(n) || 0),
    Z(t) &&
      ((v = !!t.leading),
      (T = "maxWait" in t),
      (d = T ? Fe(be(t.maxWait) || 0, n) : d),
      (y = "trailing" in t ? !!t.trailing : y));
  function p(o) {
    var s = g,
      b = a;
    return (g = a = void 0), (h = o), (r = e.apply(b, s)), r;
  }
  function j(o) {
    return (h = o), (c = setTimeout(R, n)), v ? p(o) : r;
  }
  function C(o) {
    var s = o - u,
      b = o - h,
      D = n - s;
    return T ? We(D, d - b) : D;
  }
  function N(o) {
    var s = o - u,
      b = o - h;
    return u === void 0 || s >= n || s < 0 || (T && b >= d);
  }
  function R() {
    var o = ne();
    if (N(o)) return E(o);
    c = setTimeout(R, C(o));
  }
  function E(o) {
    return (c = void 0), y && g ? p(o) : ((g = a = void 0), r);
  }
  function B() {
    c !== void 0 && clearTimeout(c), (h = 0), (g = u = a = c = void 0);
  }
  function i() {
    return c === void 0 ? r : E(ne());
  }
  function l() {
    var o = ne(),
      s = N(o);
    if (((g = arguments), (a = this), (u = o), s)) {
      if (c === void 0) return j(u);
      if (T) return (c = setTimeout(R, n)), p(u);
    }
    return c === void 0 && (c = setTimeout(R, n)), r;
  }
  return (l.cancel = B), (l.flush = i), l;
}
function qe(e, n, t) {
  var g = !0,
    a = !0;
  if (typeof e != "function") throw new TypeError(ge);
  return (
    Z(t) &&
      ((g = "leading" in t ? !!t.leading : g),
      (a = "trailing" in t ? !!t.trailing : a)),
    Ye(e, n, {
      leading: g,
      maxWait: n,
      trailing: a,
    })
  );
}
function Z(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function Ge(e) {
  return !!e && typeof e == "object";
}
function Ke(e) {
  return typeof e == "symbol" || (Ge(e) && Ue.call(e) == De);
}
function be(e) {
  if (typeof e == "number") return e;
  if (Ke(e)) return de;
  if (Z(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Z(n) ? n + "" : n;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(Le, "");
  var t = je.test(e);
  return t || Be.test(e) ? Pe(e.slice(2), t ? 2 : 8) : Ae.test(e) ? de : +e;
}
var Xe = qe;
const { window: oe } = Re;
function Je(e) {
  let n,
    t,
    g,
    a,
    d,
    r = e[0] ? "Close" : "Menu",
    c,
    u,
    h,
    v = e[0] ? "\u2715" : "\u2193",
    T,
    y,
    p,
    j,
    C = e[3].number + "",
    N,
    R,
    E = e[3].title + "",
    B,
    i,
    l,
    o,
    s,
    b,
    D,
    L,
    $,
    q,
    ee,
    P,
    x,
    S,
    te,
    re;
  return (
    (x = new Ce({})),
    {
      c() {
        (n = w("nav")),
          (t = w("section")),
          (g = w("div")),
          (a = w("button")),
          (d = w("span")),
          (c = z(r)),
          (u = W()),
          (h = w("span")),
          (T = z(v)),
          (y = W()),
          (p = w("div")),
          (j = z("Part ")),
          (N = z(C)),
          (R = z(": ")),
          (B = z(E)),
          (i = W()),
          (l = w("div")),
          (o = w("button")),
          (s = z("\u25C4")),
          (D = W()),
          (L = w("button")),
          ($ = z("\u25BA")),
          (ee = W()),
          (P = w("div")),
          _e(x.$$.fragment),
          this.h();
      },
      l(m) {
        n = H(m, "NAV", {
          id: !0,
          class: !0,
        });
        var _ = k(n);
        t = H(_, "SECTION", {
          class: !0,
        });
        var V = k(t);
        g = H(V, "DIV", {
          class: !0,
        });
        var se = k(g);
        a = H(se, "BUTTON", {
          class: !0,
        });
        var G = k(a);
        d = H(G, "SPAN", {
          class: !0,
        });
        var ie = k(d);
        (c = M(ie, r)),
          ie.forEach(O),
          (u = Y(G)),
          (h = H(G, "SPAN", {
            class: !0,
          }));
        var ae = k(h);
        (T = M(ae, v)),
          ae.forEach(O),
          G.forEach(O),
          se.forEach(O),
          (y = Y(V)),
          (p = H(V, "DIV", {
            class: !0,
            style: !0,
          }));
        var F = k(p);
        (j = M(F, "Part ")),
          (N = M(F, C)),
          (R = M(F, ": ")),
          (B = M(F, E)),
          F.forEach(O),
          (i = Y(V)),
          (l = H(V, "DIV", {
            class: !0,
          }));
        var K = k(l);
        o = H(K, "BUTTON", {
          class: !0,
        });
        var ce = k(o);
        (s = M(ce, "\u25C4")),
          ce.forEach(O),
          (D = Y(K)),
          (L = H(K, "BUTTON", {
            class: !0,
          }));
        var le = k(L);
        ($ = M(le, "\u25BA")),
          le.forEach(O),
          K.forEach(O),
          V.forEach(O),
          (ee = Y(_)),
          (P = H(_, "DIV", {
            class: !0,
          }));
        var ue = k(P);
        Se(x.$$.fragment, ue), ue.forEach(O), _.forEach(O), this.h();
      },
      h() {
        I(d, "class", "nav-bar-menu-button-text svelte-1b8ak1z"),
          I(h, "class", "nav-bar-menu-button-icon svelte-1b8ak1z"),
          I(a, "class", "nav-bar-menu-button svelte-1b8ak1z"),
          I(g, "class", "nav-bar-menu-button-container svelte-1b8ak1z"),
          I(p, "class", "nav-bar-title svelte-1b8ak1z"),
          fe(p, "--percent", e[1]),
          I(o, "class", "nav-bar-left-button nav-bar-button svelte-1b8ak1z"),
          (o.disabled = b = e[2] === 0),
          I(L, "class", "nav-bar-right-button nav-bar-button svelte-1b8ak1z"),
          (L.disabled = q = e[2] === A.length - 1),
          I(l, "class", "nav-bar-button-wrapper svelte-1b8ak1z"),
          I(t, "class", "nav-bar svelte-1b8ak1z"),
          I(P, "class", "fixed-overlay-wrapper svelte-1b8ak1z"),
          X(P, "active", e[0]),
          I(n, "id", "nav-bar"),
          I(n, "class", "nav-wrapper svelte-1b8ak1z"),
          X(n, "pinned", e[5]);
      },
      m(m, _) {
        Te(m, n, _),
          f(n, t),
          f(t, g),
          f(g, a),
          f(a, d),
          f(d, c),
          f(a, u),
          f(a, h),
          f(h, T),
          f(t, y),
          f(t, p),
          f(p, j),
          f(p, N),
          f(p, R),
          f(p, B),
          f(t, i),
          f(t, l),
          f(l, o),
          f(o, s),
          f(l, D),
          f(l, L),
          f(L, $),
          f(n, ee),
          f(n, P),
          Ee(x, P, null),
          e[13](n),
          (S = !0),
          te ||
            ((re = [
              U(oe, "hashchange", e[10]),
              U(oe, "keydown", e[11]),
              U(oe, "scroll", Xe(e[9], Qe)),
              U(a, "click", e[6]),
              U(o, "click", e[8]),
              U(L, "click", e[7]),
            ]),
            (te = !0));
      },
      p(m, [_]) {
        (!S || _ & 1) && r !== (r = m[0] ? "Close" : "Menu") && J(c, r),
          (!S || _ & 1) && v !== (v = m[0] ? "\u2715" : "\u2193") && J(T, v),
          (!S || _ & 8) && C !== (C = m[3].number + "") && J(N, C),
          (!S || _ & 8) && E !== (E = m[3].title + "") && J(B, E),
          (!S || _ & 2) && fe(p, "--percent", m[1]),
          (!S || (_ & 4 && b !== (b = m[2] === 0))) && (o.disabled = b),
          (!S || (_ & 4 && q !== (q = m[2] === A.length - 1))) &&
            (L.disabled = q),
          (!S || _ & 1) && X(P, "active", m[0]),
          (!S || _ & 32) && X(n, "pinned", m[5]);
      },
      i(m) {
        S || (Oe(x.$$.fragment, m), (S = !0));
      },
      o(m) {
        Ie(x.$$.fragment, m), (S = !1);
      },
      d(m) {
        m && O(n), we(x), e[13](null), (te = !1), He(re);
      },
    }
  );
}
const Qe = 1;
function me(e) {
  const n = new URL(document.URL);
  (n.hash = e.href), (document.location.href = n);
}
function Ze(e, n, t) {
  let { menuOpen: a = !1 } = n,
    { percentScrolled: d = 0 } = n,
    { currentSectionIdx: r = 0 } = n,
    { currentSection: c = A[r] } = n,
    u = [],
    h,
    v = !1;
  function T() {
    t(0, (a = !a));
  }
  function y() {
    r < A.length - 1 && (t(2, (r += 1)), t(3, (c = A[r])), me(c));
  }
  function p() {
    r > 0 && (t(2, (r -= 1)), t(3, (c = A[r])), me(c));
  }
  function j() {
    if (!u && !r) return;
    const i = u[r];
    if (!i) return;
    const l = i.getBoundingClientRect().top + window.scrollY,
      o = document.documentElement.clientHeight * (1 - 0.4) + window.scrollY,
      { height: s } = document.body.getBoundingClientRect();
    let b = s - document.documentElement.clientHeight * 0.4;
    r + 1 < u.length &&
      (b = u[r + 1].getBoundingClientRect().top + window.scrollY),
      t(1, (d = ((o - l) / (b - l)).toFixed(2))),
      t(1, (d = Math.max(0, d) * 100)),
      d > 0 && !v && t(5, (v = !0)),
      (d > 100 || d < 0) && E(u);
  }
  function C(i) {
    const [l] = i;
    l.intersectionRatio === 0 && t(5, (v = !1)),
      l.intersectionRatio < 1 &&
      l.intersectionRatio > 0 &&
      l.boundingClientRect.top <= 0
        ? t(5, (v = !0))
        : (t(5, (v = !1)), t(0, (a = !1)));
  }
  function N() {
    setTimeout(() => {
      t(0, (a = !1));
    }, 500),
      setTimeout(() => {
        E(u);
      }, 500);
  }
  function R(i) {
    i.key === "End" && t(5, (v = !0)), i.key === "Home" && t(5, (v = !1));
  }
  function E(i) {
    const l = document.documentElement.clientHeight * 0.6 + window.scrollY,
      o = i.map((b) => b.getBoundingClientRect().top + window.scrollY);
    for (var s = o.length - 1; s >= 0; s--)
      if (l > o[s]) {
        t(2, (r = s)), t(3, (c = A[s]));
        break;
      }
    j();
  }
  ke(() => {
    u = Array.from(document.querySelectorAll("a.section")).filter((o) =>
      Ne.includes(o.id)
    );
    const i = new IntersectionObserver(C, {
      threshold: 1,
    });
    i.observe(h);
    const l = new IntersectionObserver(
      (o) => {
        o.forEach((s) => {
          const b = u.indexOf(s.target),
            D = window.innerHeight || document.documentElement.clientHeight;
          s.boundingClientRect.top > s.rootBounds.bottom &&
          s.boundingClientRect.top < D
            ? b > 0 && (t(2, (r = b - 1)), t(3, (c = A[r])))
            : s.isIntersecting && s.boundingClientRect.top > s.rootBounds.top
            ? (t(2, (r = b)), t(3, (c = A[r])))
            : s.isIntersecting && s.boundingClientRect.top < s.rootBounds.top;
        });
      },
      {
        rootMargin: `0px 0px -${0.4 * 100}% 0px`,
      }
    );
    return (
      u.forEach((o) => l.observe(o)),
      E(u),
      () => {
        u.forEach((o) => {
          l.unobserve(o);
        }),
          i.unobserve(h);
      }
    );
  });
  function B(i) {
    ye[i ? "unshift" : "push"](() => {
      (h = i), t(4, h);
    });
  }
  return (
    (e.$$set = (i) => {
      "menuOpen" in i && t(0, (a = i.menuOpen)),
        "percentScrolled" in i && t(1, (d = i.percentScrolled)),
        "currentSectionIdx" in i && t(2, (r = i.currentSectionIdx)),
        "currentSection" in i && t(3, (c = i.currentSection));
    }),
    [a, d, r, c, h, v, T, y, p, j, N, R, 0.4, B]
  );
}
class nt extends he {
  constructor(n) {
    super(),
      ve(this, n, Ze, Je, pe, {
        THRESHOLD: 12,
        menuOpen: 0,
        percentScrolled: 1,
        currentSectionIdx: 2,
        currentSection: 3,
      });
  }
  get THRESHOLD() {
    return this.$$.ctx[12];
  }
}
export { nt as default };
