"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{7753:function(n,t,e){e.d(t,{Ai:function(){return p},Hx:function(){return h},Tg:function(){return i},Y5:function(){return f},xc:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1044),o="https://api.themoviedb.org/3",s="332ebb0c59493b862a9beffecc6f1777",i=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/trending/movie/week?api_key=").concat(s));case 2:return t=n.sent,console.log(t.data.results),n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,console.log(e.data),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},8499:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,u=e(5861),o=e(885),s=e(4687),i=e.n(s),p=e(2791),f=e(7689),l=e(279),h=e(7753),v=e(1686),d=e.n(v),x=(e(5462),e(168)),m=e(3237),w=m.Z.ul(r||(r=(0,x.Z)(["\n  list-style: none;\n  padding: 0 10px;\n"]))),Z=m.Z.p(a||(a=(0,x.Z)(["\n  font-weight: 700;\n"]))),g=m.Z.h2(c||(c=(0,x.Z)(["\n  text-align: center;\n"]))),k=e(184),b=function(){var n=(0,p.useState)(null),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,p.useState)(null),c=(0,o.Z)(a,2),s=c[0],v=c[1],x=(0,p.useState)(!1),m=(0,o.Z)(x,2),b=m[0],y=m[1],_=(0,f.UO)().movieId;return(0,p.useEffect)((function(){var n=new AbortController,t=function(){var n=(0,u.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y(!0),n.prev=1,n.next=4,(0,h.Hx)(_);case 4:t=n.sent,r(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),v(n.t0.message);case 11:return n.prev=11,y(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}),[_]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(g,{children:"Reviews"}),b&&(0,k.jsx)(l.a,{}),s&&d().Notify.failure("Sorry, but something happened wrong: ".concat(s.message),{theme:"colored"}),e&&(0,k.jsx)(w,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,k.jsx)("li",{children:e?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Z,{children:["Author: ",e]}),(0,k.jsx)("p",{children:r})]}):"We don't hane any reviews for this movie"},t)}))})]})}}}]);
//# sourceMappingURL=499.2a7bb51e.chunk.js.map