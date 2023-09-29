/*! For license information please see 251.7fedaefc.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[251],{687:function(t,r,e){e.d(r,{Ph:function(){return u},jP:function(){return a},mU:function(){return c}});var n=e(861),o=e(243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",v="executing",d="completed",y={};function g(){}function m(){}function w(){}var x={};h(x,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(J([])));j&&j!==e&&n.call(j,c)&&(x=j);var L=w.prototype=g.prototype=Object.create(x);function Z(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=N(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function N(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,N(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function I(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function J(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=h(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,h(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},Z(E.prototype),h(E.prototype,u,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},Z(L),h(L,s,"Generator"),h(L,c,(function(){return this})),h(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=J,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:J(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}o.Z.defaults.baseURL="".concat("https://api.themoviedb.org/3");var a=function(){var t=(0,n.Z)(i().mark((function t(r,e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/trending/movie/week",{params:{language:"en-US",page:r},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks"},signal:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(i().mark((function t(r,e,n){var a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(r).concat(n),{params:{language:"en-US"},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks"},signal:e});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(r,e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("search/movie",{params:{language:"en-US",page:1,query:r},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmM5ODJjNmExZTMwMzFmNTE5NDVjMDFiZDk4NjUwNyIsInN1YiI6IjY0YmY2ZWEwYjMzMTZiMDBhYzk4ZDI1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.14kbQ7U7XqZ3AUqnZX3XhzlkyONwKQJVLVNg5piDXks"},signal:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}()},251:function(t,r,e){e.r(r),e.d(r,{default:function(){return O}});var n,o,i,a,c,u,s,h=e(861),l=e(439),f=e(689),p=e(87),v=e(791),d=e(687),y=e(168),g=e(867),m=g.ZP.div(n||(n=(0,y.Z)(["\n  margin: 0 auto;\n  max-width: 1660px;\n  padding: 0 30px;\n  padding-top: 20px;\n"]))),w=g.ZP.section(o||(o=(0,y.Z)(["\n  display: flex;\n  gap: 30px;\n  margin-top: 30px;\n"]))),x=g.ZP.h2(i||(i=(0,y.Z)(["\n  font-size: x-large;\n  font-weight: 600;\n  line-height: 1.3;\n"]))),b=g.ZP.p(a||(a=(0,y.Z)(["\n  margin-top: 10px;\n"]))),j=g.ZP.h3(c||(c=(0,y.Z)(["\n  font-size: large;\n  line-height: 1.3;\n  margin-top: 10px;\n"]))),L=g.ZP.section(u||(u=(0,y.Z)(["\n  align-items: center;\n  display: flex;\n  gap: 10px;\n  margin-top: 30px;\n"]))),Z=g.ZP.h3(s||(s=(0,y.Z)(["\n  font-size: large;\n  line-height: 1.3;\n"]))),E=e(706),k=e(820),N=e(184);function I(){I=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof y?r:y,a=Object.create(i.prototype),c=new _(n||[]);return o(a,"_invoke",{value:E(t,e,c)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var f="suspendedStart",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(J([])));b&&b!==e&&n.call(b,a)&&(w=b);var j=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function Z(t,r){function e(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function E(r,e,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=l(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=l(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function J(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return g.prototype=m,o(j,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},L(Z.prototype),s(Z.prototype,c,(function(){return this})),r.AsyncIterator=Z,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new Z(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=J,_.prototype={constructor:_,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:J(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),d}},r}var O=function(){var t,r,e=(0,f.UO)().movieId,n=(0,f.TH)(),o=(0,v.useRef)(),i=(0,v.useState)(""),a=(0,l.Z)(i,2),c=a[0],u=a[1],s=(0,v.useState)(""),y=(0,l.Z)(s,2),g=y[0],O=y[1],_=(0,v.useState)(0),J=(0,l.Z)(_,2),z=J[0],P=J[1],G=(0,v.useState)(""),T=(0,l.Z)(G,2),U=T[0],D=T[1],M=(0,v.useState)([]),Y=(0,l.Z)(M,2),S=Y[0],F=Y[1];return(0,v.useEffect)((function(){if(e){var t=function(){var t=(0,h.Z)(I().mark((function t(){var r,n;return I().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o.current=new AbortController,r=o.current.signal,t.next=5,(0,d.mU)(e,r,"");case 5:n=t.sent,u(n.poster_path),O(n.title),P(n.vote_average),D(n.overview),F(n.genres),t.next=15;break;case 13:t.prev=13,t.t0=t.catch(0);case 15:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return o.current.abort()}}}),[e]),(0,N.jsxs)(m,{children:[(0,N.jsx)(E.V,{to:null!==(t=null===n||void 0===n||null===(r=n.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/goit-react-hw-05-movies",children:(0,N.jsx)(k.kyg,{})}),(0,N.jsxs)(w,{children:[(0,N.jsx)("img",{width:"300px",height:"450px",src:c?"https://image.tmdb.org/t/p/w300".concat(c):"https://i.imgur.com/GhqsTtz.jpg",alt:g}),(0,N.jsxs)("div",{children:[(0,N.jsx)(x,{children:g}),(0,N.jsxs)(b,{children:["User Score: ",z," IMDb"]}),(0,N.jsx)(j,{children:"Overview"}),(0,N.jsx)(b,{children:U}),(0,N.jsx)(j,{children:"Genres"}),(0,N.jsx)(b,{children:S.map((function(t){return t.name})).join(" ")})]})]}),(0,N.jsxs)(L,{children:[(0,N.jsx)(Z,{children:"Additional information"}),(0,N.jsx)(p.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e,"/cast"),state:{from:n},children:"Cast"}),(0,N.jsx)(p.rU,{to:"/goit-react-hw-05-movies/movies/".concat(e,"/reviews"),state:{from:n},children:"Reviews"})]}),(0,N.jsx)(f.j3,{})]})}},706:function(t,r,e){e.d(r,{V:function(){return s},p:function(){return u}});var n,o,i=e(168),a=e(867),c=e(87),u=a.ZP.div(n||(n=(0,i.Z)(["\n  padding: 0 30px;\n  padding-top: 20px;\n  max-width: 1660px;\n  margin: 0 auto;\n"]))),s=(0,a.ZP)(c.rU)(o||(o=(0,i.Z)(["\n  display: inline-block;\n  background: transparent;\n  color: white;\n  background-color: #7f8ff4;\n  font: inherit;\n  border: 0;\n  outline: 0;\n  padding: 0;\n  transition: all 200ms ease-in;\n  cursor: pointer;\n  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  padding: 12px 36px;\n\n  :hover {\n    background: #7183f2;\n  }\n\n  :active {\n    background: #7f8ff4;\n    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);\n  }\n"])))}}]);
//# sourceMappingURL=251.7fedaefc.chunk.js.map