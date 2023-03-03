function T() {}
function q(e) {
  return e();
}
function j() {
  return Object.create(null);
}
function $(e) {
  e.forEach(q);
}
function P(e) {
  return typeof e == "function";
}
function le(e, n) {
  return e != e
    ? n == n
    : e !== n || (e && typeof e == "object") || typeof e == "function";
}
let p;
function re(e, n) {
  return p || (p = document.createElement("a")), (p.href = n), e === p.href;
}
function k(e) {
  return Object.keys(e).length === 0;
}
let b = !1;
function z() {
  b = !0;
}
function D() {
  b = !1;
}
function F(e, n, t, i) {
  for (; e < n; ) {
    const a = e + ((n - e) >> 1);
    t(a) <= i ? (e = a + 1) : (n = a);
  }
  return e;
}
function H(e) {
  if (e.hydrate_init) return;
  e.hydrate_init = !0;
  let n = e.childNodes;
  if (e.nodeName === "HEAD") {
    const l = [];
    for (let c = 0; c < n.length; c++) {
      const f = n[c];
      f.claim_order !== void 0 && l.push(f);
    }
    n = l;
  }
  const t = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  t[0] = -1;
  let a = 0;
  for (let l = 0; l < n.length; l++) {
    const c = n[l].claim_order,
      f =
        (a > 0 && n[t[a]].claim_order <= c
          ? a + 1
          : F(1, a, (m) => n[t[m]].claim_order, c)) - 1;
    i[l] = t[f] + 1;
    const s = f + 1;
    (t[s] = l), (a = Math.max(s, a));
  }
  const u = [],
    r = [];
  let o = n.length - 1;
  for (let l = t[a] + 1; l != 0; l = i[l - 1]) {
    for (u.push(n[l - 1]); o >= l; o--) r.push(n[o]);
    o--;
  }
  for (; o >= 0; o--) r.push(n[o]);
  u.reverse(), r.sort((l, c) => l.claim_order - c.claim_order);
  for (let l = 0, c = 0; l < r.length; l++) {
    for (; c < u.length && r[l].claim_order >= u[c].claim_order; ) c++;
    const f = c < u.length ? u[c] : null;
    e.insertBefore(r[l], f);
  }
}
function I(e, n) {
  if (b) {
    for (
      H(e),
        (e.actual_end_child === void 0 ||
          (e.actual_end_child !== null &&
            e.actual_end_child.parentNode !== e)) &&
          (e.actual_end_child = e.firstChild);
      e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

    )
      e.actual_end_child = e.actual_end_child.nextSibling;
    n !== e.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== e) &&
        e.insertBefore(n, e.actual_end_child)
      : (e.actual_end_child = n.nextSibling);
  } else (n.parentNode !== e || n.nextSibling !== null) && e.appendChild(n);
}
function ce(e, n, t) {
  b && !t
    ? I(e, n)
    : (n.parentNode !== e || n.nextSibling != t) &&
      e.insertBefore(n, t || null);
}
function G(e) {
  e.parentNode.removeChild(e);
}
function ae(e, n) {
  for (let t = 0; t < e.length; t += 1) e[t] && e[t].d(n);
}
function W(e) {
  return document.createElement(e);
}
function J(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function B(e) {
  return document.createTextNode(e);
}
function oe() {
  return B(" ");
}
function ue(e, n, t, i) {
  return e.addEventListener(n, t, i), () => e.removeEventListener(n, t, i);
}
function se(e, n, t) {
  t == null
    ? e.removeAttribute(n)
    : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function K(e) {
  return Array.from(e.childNodes);
}
function Q(e) {
  e.claim_info === void 0 &&
    (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function L(e, n, t, i, a = !1) {
  Q(e);
  const u = (() => {
    for (let r = e.claim_info.last_index; r < e.length; r++) {
      const o = e[r];
      if (n(o)) {
        const l = t(o);
        return (
          l === void 0 ? e.splice(r, 1) : (e[r] = l),
          a || (e.claim_info.last_index = r),
          o
        );
      }
    }
    for (let r = e.claim_info.last_index - 1; r >= 0; r--) {
      const o = e[r];
      if (n(o)) {
        const l = t(o);
        return (
          l === void 0 ? e.splice(r, 1) : (e[r] = l),
          a
            ? l === void 0 && e.claim_info.last_index--
            : (e.claim_info.last_index = r),
          o
        );
      }
    }
    return i();
  })();
  return (
    (u.claim_order = e.claim_info.total_claimed),
    (e.claim_info.total_claimed += 1),
    u
  );
}
function M(e, n, t, i) {
  return L(
    e,
    (a) => a.nodeName === n,
    (a) => {
      const u = [];
      for (let r = 0; r < a.attributes.length; r++) {
        const o = a.attributes[r];
        t[o.name] || u.push(o.name);
      }
      u.forEach((r) => a.removeAttribute(r));
    },
    () => i(n)
  );
}
function fe(e, n, t) {
  return M(e, n, t, W);
}
function de(e, n, t) {
  return M(e, n, t, J);
}
function R(e, n) {
  return L(
    e,
    (t) => t.nodeType === 3,
    (t) => {
      const i = "" + n;
      if (t.data.startsWith(i)) {
        if (t.data.length !== i.length) return t.splitText(i.length);
      } else t.data = i;
    },
    () => B(n),
    !0
  );
}
function _e(e) {
  return R(e, " ");
}
function he(e, n) {
  (n = "" + n), e.wholeText !== n && (e.data = n);
}
function me(e, n, t, i) {
  t === null
    ? e.style.removeProperty(n)
    : e.style.setProperty(n, t, i ? "important" : "");
}
function pe(e, n, t) {
  e.classList[t ? "add" : "remove"](n);
}
let h;
function _(e) {
  h = e;
}
function V() {
  if (!h) throw new Error("Function called outside component initialization");
  return h;
}
function ye(e) {
  V().$$.on_mount.push(e);
}
const d = [],
  C = [],
  g = [],
  v = [],
  X = Promise.resolve();
let E = !1;
function Y() {
  E || ((E = !0), X.then(O));
}
function N(e) {
  g.push(e);
}
function ge(e) {
  v.push(e);
}
const w = new Set();
let y = 0;
function O() {
  const e = h;
  do {
    for (; y < d.length; ) {
      const n = d[y];
      y++, _(n), Z(n.$$);
    }
    for (_(null), d.length = 0, y = 0; C.length; ) C.pop()();
    for (let n = 0; n < g.length; n += 1) {
      const t = g[n];
      w.has(t) || (w.add(t), t());
    }
    g.length = 0;
  } while (d.length);
  for (; v.length; ) v.pop()();
  (E = !1), w.clear(), _(e);
}
function Z(e) {
  if (e.fragment !== null) {
    e.update(), $(e.before_update);
    const n = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, n),
      e.after_update.forEach(N);
  }
}
const x = new Set();
let U;
function ee(e, n) {
  e && e.i && (x.delete(e), e.i(n));
}
function xe(e, n, t, i) {
  if (e && e.o) {
    if (x.has(e)) return;
    x.add(e),
      U.c.push(() => {
        x.delete(e), i && (t && e.d(1), i());
      }),
      e.o(n);
  } else i && i();
}
const $e =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function be(e, n, t) {
  const i = e.$$.props[n];
  i !== void 0 && ((e.$$.bound[i] = t), t(e.$$.ctx[i]));
}
function we(e) {
  e && e.c();
}
function ve(e, n) {
  e && e.l(n);
}
function ne(e, n, t, i) {
  const { fragment: a, on_mount: u, on_destroy: r, after_update: o } = e.$$;
  a && a.m(n, t),
    i ||
      N(() => {
        const l = u.map(q).filter(P);
        r ? r.push(...l) : $(l), (e.$$.on_mount = []);
      }),
    o.forEach(N);
}
function te(e, n) {
  const t = e.$$;
  t.fragment !== null &&
    ($(t.on_destroy),
    t.fragment && t.fragment.d(n),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function ie(e, n) {
  e.$$.dirty[0] === -1 && (d.push(e), Y(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Ee(e, n, t, i, a, u, r, o = [-1]) {
  const l = h;
  _(e);
  const c = (e.$$ = {
    fragment: null,
    ctx: null,
    props: u,
    update: T,
    not_equal: a,
    bound: j(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (l ? l.$$.context : [])),
    callbacks: j(),
    dirty: o,
    skip_bound: !1,
    root: n.target || l.$$.root,
  });
  r && r(c.root);
  let f = !1;
  if (
    ((c.ctx = t
      ? t(e, n.props || {}, (s, m, ...S) => {
          const A = S.length ? S[0] : m;
          return (
            c.ctx &&
              a(c.ctx[s], (c.ctx[s] = A)) &&
              (!c.skip_bound && c.bound[s] && c.bound[s](A), f && ie(e, s)),
            m
          );
        })
      : []),
    c.update(),
    (f = !0),
    $(c.before_update),
    (c.fragment = i ? i(c.ctx) : !1),
    n.target)
  ) {
    if (n.hydrate) {
      z();
      const s = K(n.target);
      c.fragment && c.fragment.l(s), s.forEach(G);
    } else c.fragment && c.fragment.c();
    n.intro && ee(e.$$.fragment),
      ne(e, n.target, n.anchor, n.customElement),
      D(),
      O();
  }
  _(l);
}
class Ne {
  $destroy() {
    te(this, 1), (this.$destroy = T);
  }
  $on(n, t) {
    const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return (
      i.push(t),
      () => {
        const a = i.indexOf(t);
        a !== -1 && i.splice(a, 1);
      }
    );
  }
  $set(n) {
    this.$$set &&
      !k(n) &&
      ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
  }
}
export {
  ne as A,
  ge as B,
  ee as C,
  xe as D,
  te as E,
  he as F,
  ae as G,
  me as H,
  $e as I,
  Ne as S,
  K as a,
  se as b,
  fe as c,
  G as d,
  W as e,
  ce as f,
  P as g,
  C as h,
  Ee as i,
  re as j,
  J as k,
  ue as l,
  B as m,
  T as n,
  ye as o,
  de as p,
  R as q,
  $ as r,
  le as s,
  pe as t,
  I as u,
  be as v,
  we as w,
  oe as x,
  ve as y,
  _e as z,
};
