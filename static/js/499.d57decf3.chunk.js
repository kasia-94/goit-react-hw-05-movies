"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{7753:function(n,t,e){e.d(t,{Ai:function(){return p},Hx:function(){return v},Tg:function(){return i},Y5:function(){return f},xc:function(){return h}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1044),o="https://api.themoviedb.org/3",s="332ebb0c59493b862a9beffecc6f1777",i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8499:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,c=e(5861),u=e(885),o=e(4687),s=e.n(o),i=e(2791),p=e(7689),f=e(279),h=e(7753),v=e(7596),l=(e(5462),e(168)),d=e(3237),m=d.Z.ul(r||(r=(0,l.Z)(["\n  list-style: none;\n"]))),x=d.Z.p(a||(a=(0,l.Z)(["\n  font-weight: 700;\n"]))),w=e(184),k=function(){var n=(0,i.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,i.useState)(null),o=(0,u.Z)(a,2),l=o[0],d=o[1],k=(0,i.useState)(!1),Z=(0,u.Z)(k,2),b=Z[0],y=Z[1],g=(0,p.UO)().movieId;return(0,i.useEffect)((function(){var n=new AbortController,t=function(){var n=(0,c.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,(0,h.Hx)(g);case 4:t=n.sent,r(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d(n.t0.message);case 11:return n.prev=11,y(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}),[g]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h2",{children:"Reviews"}),b&&(0,w.jsx)(f.a,{}),l&&v.Am.error("Sorry, but something happened wrong: ".concat(l.message),{theme:"colored"}),e&&(0,w.jsx)(m,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,w.jsx)("li",{children:e?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(x,{children:["Author: ",e]}),(0,w.jsx)("p",{children:r})]}):"We don't hane any reviews for this movie"},t)}))})]})}}}]);
//# sourceMappingURL=499.d57decf3.chunk.js.map