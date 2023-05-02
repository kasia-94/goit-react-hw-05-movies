"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{2606:function(n,e,t){t.d(e,{W:function(){return i}});var r,a=t(168),i=t(3237).Z.div(r||(r=(0,a.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  padding: 0px 5px;\n\n  @media screen and (min-width: 320px) {\n    width: 300px;\n    padding: 0 10px;\n  }\n\n  @media screen and (min-width: 480px) {\n    width: 460px;\n    padding: 0 10px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 728px;\n    padding: 0 20px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1140px;\n  }\n"])))},7753:function(n,e,t){t.d(e,{Ai:function(){return d},Hx:function(){return h},Tg:function(){return u},Y5:function(){return p},xc:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1044),o="https://api.themoviedb.org/3",s="332ebb0c59493b862a9beffecc6f1777",u=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(o,"/trending/movie/week?api_key=").concat(s));case 2:return e=n.sent,console.log(e.data.results),n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,console.log(t.data),n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9257:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,i,c,o,s,u=t(5861),d=t(885),p=t(4687),l=t.n(p),h=t(2791),f=t(7689),x=t(7753),m=t(1686),v=t.n(m),w=(t(5462),t(279)),g=t(168),Z=t(3237),j=t(6731),k=Z.Z.div(r||(r=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),b=Z.Z.img(a||(a=(0,g.Z)(["\n  width: 100%;\n  height: 100%;\n\n  @media screen and (min-width: 768px) {\n    width: 350px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 450px;\n  }\n"]))),y=Z.Z.div(i||(i=(0,g.Z)([""]))),_=Z.Z.ul(c||(c=(0,g.Z)(["\n  list-style: none;\n"]))),S=(0,Z.Z)(j.OL)(o||(o=(0,g.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n  text-decoration: none;\n  transition: 250ms color ease;\n\n  :hover,\n  :focus {\n    color: #14299b;\n  }\n  &.active {\n    color: #14299b;\n  }\n"]))),P=(0,Z.Z)(j.rU)(s||(s=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  margin: 10px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 250ms color ease;\n\n  :hover {\n    color: #3f51b5;\n  }\n"]))),C=t(8617),A=t(2606),H=t(184),O=function(){var n,e=(0,h.useState)(null),t=(0,d.Z)(e,2),r=t[0],a=t[1],i=(0,h.useState)(null),c=(0,d.Z)(i,2),o=c[0],s=c[1],p=(0,h.useState)(!1),m=(0,d.Z)(p,2),g=m[0],Z=m[1],j=(0,h.useState)(""),O=(0,d.Z)(j,2),T=O[0],U=O[1],Y=(0,f.UO)().movieId,z=(0,f.TH)();return(0,h.useEffect)((function(){var n,e;""===T&&U(null!==(n=null===(e=z.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/Home")}),[T,z]),(0,h.useEffect)((function(){var n=new AbortController,e=function(){var n=(0,u.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,x.Y5)(Y);case 4:e=n.sent,a(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),s(n.t0.message);case 11:return n.prev=11,Z(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return e(),function(){n.abort()}}),[Y]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(P,{to:T,children:[(0,H.jsx)(C.jTe,{size:"24"}),(0,H.jsx)("span",{children:"Go back"})]}),o&&v().Notify.failure("Sorry, but something happened wrong: ".concat(o.message),{theme:"colored"}),r&&(0,H.jsxs)(A.W,{children:[(0,H.jsxs)(k,{children:[r.poster_path?(0,H.jsx)(b,{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title}):(0,H.jsx)(b,{src:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png",alt:r.title}),(0,H.jsxs)(y,{children:[(0,H.jsxs)("h1",{children:[r.title," (",(n=r.release_date,new Date(n).getFullYear()),")"]}),(0,H.jsxs)("p",{children:["User Score: ",Math.round(10*r.vote_average),"%"]}),(0,H.jsx)("h2",{children:"Overview"}),(0,H.jsx)("p",{children:r.overview}),(0,H.jsx)("h2",{children:"Genres"}),(0,H.jsx)("p",{children:r.genres.map((function(n){return n.name})).join(" - ")})]})]}),(0,H.jsxs)("div",{children:[(0,H.jsx)("h2",{children:"Additional information"}),(0,H.jsxs)(_,{children:[(0,H.jsx)("li",{children:(0,H.jsx)(S,{to:"cast",state:{id:Y},children:"Cast"})}),(0,H.jsx)("li",{children:(0,H.jsx)(S,{to:"reviews",state:{id:Y},children:"Reviews"})})]})]})]}),g&&(0,H.jsx)(w.a,{}),(0,H.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=257.19f86960.chunk.js.map