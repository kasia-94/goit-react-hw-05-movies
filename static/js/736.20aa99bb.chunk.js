"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{7753:function(e,t,n){n.d(t,{Ai:function(){return p},Hx:function(){return v},Tg:function(){return i},Y5:function(){return f},xc:function(){return h}});var r=n(5861),a=n(4687),c=n.n(a),u=n(1044),o="https://api.themoviedb.org/3",s="332ebb0c59493b862a9beffecc6f1777",i=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ZP.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2736:function(e,t,n){n.r(t);var r=n(5861),a=n(885),c=n(4687),u=n.n(c),o=n(2791),s=n(7689),i=n(4585),p=n(7753),f=n(7596),h=(n(5462),n(184));t.default=function(){var e=(0,o.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,o.useState)(null),l=(0,a.Z)(v,2),d=l[0],m=l[1],x=(0,o.useState)(!1),w=(0,a.Z)(x,2),k=w[0],b=w[1],y=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var e=new AbortController,t=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,p.Hx)(y);case 4:t=e.sent,c(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(e.t0.message);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return t(),function(){e.abort()}}),[y]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Reviews"}),k&&(0,h.jsx)(i.a,{}),d&&f.Am.error("Sorry, but something happened wrong: ".concat(d.message),{theme:"colored"}),n&&(0,h.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,h.jsx)("li",{children:n?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("p",{children:["Author: ",n]}),(0,h.jsx)("p",{children:r})]}):"We don't hane any reviews for this movie"},t)}))})]})}}}]);
//# sourceMappingURL=736.20aa99bb.chunk.js.map