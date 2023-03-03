import {
  S as K,
  i as R,
  s as U,
  e as v,
  c as _,
  a as g,
  d as f,
  b as m,
  f as N,
  n as L,
  G as H,
  m as q,
  x as E,
  q as k,
  z as S,
  t as G,
  u as h,
} from "./index.eba22d21.js";
/* empty css                                          */ const M = [
    {
      title: "Ledgers, Bitcoin, Blockchains",
      number: "I",
      href: "#ledgers-bitcoin-blockchains",
      sections: [
        { title: "Life in Databases", href: "#life-in-databases" },
        {
          title: "What If You Don\u2019t Like It?",
          href: "#what-if-you-dont-like-it",
        },
        { title: "Digital Cash", href: "#digital-cash" },
      ],
    },
    {
      title: "What Does It Mean?",
      number: "II",
      href: "#what-does-it-mean",
      sections: [
        { title: "A Store of Value", href: "#a-store-of-value" },
        { title: "A Distributed Computer", href: "#a-distributed-computer" },
        { title: "A Slow Database", href: "#a-slow-database" },
        { title: "Web3", href: "#web3" },
        { title: "Uncensorable Ledgers", href: "#uncensorable-ledgers" },
        { title: "Digital Scarcity", href: "#digital-scarcity" },
      ],
    },
    {
      title: "The Crypto Financial System",
      number: "III",
      href: "#the-crypto-financial-system",
      sections: [
        {
          title: "Your Keys, Your Coins, Your Hard Drive in a Garbage Dump",
          href: "#keys-coins-drive-dump",
        },
        { title: "CeFi", href: "#cefi" },
        { title: "Stablecoins", href: "#stablecoins" },
        { title: "DeFi", href: "#defi" },
        { title: "Reinventing 2008", href: "#reinventing-2008" },
      ],
    },
    {
      title: "Trust, Money, Community",
      number: "IV",
      href: "#trust-money-community",
      sections: [
        { title: "Trust", href: "#trust" },
        { title: "Money", href: "#money" },
        { title: "Community", href: "#community" },
        { title: "Finance", href: "#finance" },
      ],
    },
  ],
  $ = [
    "ledgers-bitcoin-blockchains",
    "what-does-it-mean",
    "the-crypto-financial-system",
    "trust-money-community",
  ];
function O(r, t, s) {
  const e = r.slice();
  return (e[1] = t[s]), e;
}
function W(r, t, s) {
  const e = r.slice();
  return (e[4] = t[s]), e;
}
function B(r) {
  let t,
    s,
    e = r[4].title + "",
    l,
    c;
  return {
    c() {
      (t = v("li")), (s = v("a")), (l = q(e)), (c = E()), this.h();
    },
    l(a) {
      t = _(a, "LI", { class: !0 });
      var u = g(t);
      s = _(u, "A", { href: !0, class: !0 });
      var p = g(s);
      (l = k(p, e)), p.forEach(f), (c = S(u)), u.forEach(f), this.h();
    },
    h() {
      m(s, "href", r[4].href),
        m(s, "class", "svelte-a6jqfg"),
        m(t, "class", "item svelte-a6jqfg");
    },
    m(a, u) {
      N(a, t, u), h(t, s), h(s, l), h(t, c);
    },
    p: L,
    d(a) {
      a && f(t);
    },
  };
}
function z(r) {
  let t,
    s,
    e,
    l,
    c,
    a = r[1].number + "",
    u,
    p,
    y,
    I,
    T = r[1].title + "",
    j,
    C,
    d,
    V,
    D = r[1].sections,
    o = [];
  for (let n = 0; n < D.length; n += 1) o[n] = B(W(r, D, n));
  return {
    c() {
      (t = v("div")),
        (s = v("div")),
        (e = v("div")),
        (l = v("span")),
        (c = q("Part ")),
        (u = q(a)),
        (p = E()),
        (y = v("p")),
        (I = v("a")),
        (j = q(T)),
        (C = E()),
        (d = v("ol"));
      for (let n = 0; n < o.length; n += 1) o[n].c();
      (V = E()), this.h();
    },
    l(n) {
      t = _(n, "DIV", { class: !0 });
      var b = g(t);
      s = _(b, "DIV", { class: !0 });
      var i = g(s);
      e = _(i, "DIV", { class: !0 });
      var A = g(e);
      l = _(A, "SPAN", { class: !0 });
      var x = g(l);
      (c = k(x, "Part ")),
        x.forEach(f),
        (u = k(A, a)),
        A.forEach(f),
        (p = S(i)),
        (y = _(i, "P", { class: !0 }));
      var F = g(y);
      I = _(F, "A", { href: !0 });
      var P = g(I);
      (j = k(P, T)),
        P.forEach(f),
        F.forEach(f),
        (C = S(i)),
        (d = _(i, "OL", { type: !0, class: !0 }));
      var Y = g(d);
      for (let w = 0; w < o.length; w += 1) o[w].l(Y);
      Y.forEach(f), i.forEach(f), (V = S(b)), b.forEach(f), this.h();
    },
    h() {
      m(l, "class", "mobile-hint svelte-a6jqfg"),
        m(e, "class", "nav-item-number svelte-a6jqfg"),
        m(I, "href", r[1].href),
        m(y, "class", "nav-item-heading svelte-a6jqfg"),
        m(d, "type", "\u201CA\u201D"),
        m(d, "class", "svelte-a6jqfg"),
        G(d, "verbose", r[0]),
        m(s, "class", "nav-item-text svelte-a6jqfg"),
        m(t, "class", "nav-item svelte-a6jqfg");
    },
    m(n, b) {
      N(n, t, b),
        h(t, s),
        h(s, e),
        h(e, l),
        h(l, c),
        h(e, u),
        h(s, p),
        h(s, y),
        h(y, I),
        h(I, j),
        h(s, C),
        h(s, d);
      for (let i = 0; i < o.length; i += 1) o[i].m(d, null);
      h(t, V);
    },
    p(n, b) {
      if (b & 0) {
        D = n[1].sections;
        let i;
        for (i = 0; i < D.length; i += 1) {
          const A = W(n, D, i);
          o[i] ? o[i].p(A, b) : ((o[i] = B(A)), o[i].c(), o[i].m(d, null));
        }
        for (; i < o.length; i += 1) o[i].d(1);
        o.length = D.length;
      }
      b & 1 && G(d, "verbose", n[0]);
    },
    d(n) {
      n && f(t), H(o, n);
    },
  };
}
function J(r) {
  let t,
    s = M,
    e = [];
  for (let l = 0; l < s.length; l += 1) e[l] = z(O(r, s, l));
  return {
    c() {
      t = v("section");
      for (let l = 0; l < e.length; l += 1) e[l].c();
      this.h();
    },
    l(l) {
      t = _(l, "SECTION", { class: !0 });
      var c = g(t);
      for (let a = 0; a < e.length; a += 1) e[a].l(c);
      c.forEach(f), this.h();
    },
    h() {
      m(t, "class", "wrapper svelte-a6jqfg");
    },
    m(l, c) {
      N(l, t, c);
      for (let a = 0; a < e.length; a += 1) e[a].m(t, null);
    },
    p(l, [c]) {
      if (c & 1) {
        s = M;
        let a;
        for (a = 0; a < s.length; a += 1) {
          const u = O(l, s, a);
          e[a] ? e[a].p(u, c) : ((e[a] = z(u)), e[a].c(), e[a].m(t, null));
        }
        for (; a < e.length; a += 1) e[a].d(1);
        e.length = s.length;
      }
    },
    i: L,
    o: L,
    d(l) {
      l && f(t), H(e, l);
    },
  };
}
function Q(r, t, s) {
  let { verbose: e = !1 } = t;
  return (
    (r.$$set = (l) => {
      "verbose" in l && s(0, (e = l.verbose));
    }),
    [e]
  );
}
class ee extends K {
  constructor(t) {
    super(), R(this, t, Q, J, U, { verbose: 0 });
  }
}
export { ee as N, $ as V, M as a };
