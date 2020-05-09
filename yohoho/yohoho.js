/**
 * mainloop.js 1.0.3-20170529
 *
 * @author Isaac Sukin (http://www.isaacsukin.com/)
 * @license MIT
 */
!function(a){function b(a){if(x=q(b),!(a<e+l)){for(d+=a-e,e=a,t(a,d),a>i+h&&
(f=g*j*1e3/(a-i)+(1-g)*f,i=a,j=0),j++,k=0;d>=c;)if(u(c),d-=c,++k>=240)
{o=!0;break}v(d/c),w(f,o),o=!1}}var
c=1e3/60,d=0,e=0,f=60,g=.9,h=1e3,i=0,j=0,k=0,l=0,m=!1,n=!1,o=!1,p="object"==typeof
window?window:a,q=p.requestAnimationFrame||function(){var a=Date.now(),b,d;return
function(e){return b=Date.now(),d=Math.max(0,c-(b-a)),a=b+d,setTimeout(function()
{e(b+d)},d)}}(),r=p.cancelAnimationFrame||clearTimeout,s=function()
{},t=s,u=s,v=s,w=s,x;a.MainLoop={getSimulationTimestep:function(){return
c},setSimulationTimestep:function(a){return c=a,this},getFPS:function(){return
f},getMaxAllowedFPS:function(){return 1e3/l},setMaxAllowedFPS:function(a)
{return"undefined"==typeof a&&(a=1/0),0===a?
this.stop():l=1e3/a,this},resetFrameDelta:function(){var a=d;return
d=0,a},setBegin:function(a){return t=a||t,this},setUpdate:function(a){return
u=a||u,this},setDraw:function(a){return v=a||v,this},setEnd:function(a){return
w=a||w,this},start:function(){return n||(n=!0,x=q(function(a)
{v(1),m=!0,e=a,i=a,j=0,x=q(b)})),this},stop:function(){return
m=!1,n=!1,r(x),this},isRunning:function(){return m}},"function"==typeof
define&&define.amd?define(a.MainLoop):"object"==typeof
module&&null!==module&&"object"==typeof module.exports&&(module.exports=a.MainLoop)}
(this);
//# sourceMappingURL=mainloop.min.js.map
/*!
 * pixi.js - v4.8.7
 * Compiled Fri, 22 Mar 2019 16:20:41 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof
module)module.exports=t();else if("function"==typeof
define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?
window:"undefined"!=typeof global?global:"undefined"!=typeof self?
self:this,e.PIXI=t()}}(function(){var t;return function(){function t(e,r,n){function
i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return
u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw
h.code="MODULE_NOT_FOUND",h}var l=r[s]={exports:{}};e[s]
[0].call(l.exports,function(t){var r=e[s][1][t];return
i(r||t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof
require&&require,s=0;s<n.length;s++)i(n[s]);return i}return t}()({1:[function(t,e,r)
{"use strict";"use restrict";function n(t){var e=32;return t&=-t,t&&e--,65535&t&&(e-
=16),16711935&t&&(e-=8),252645135&t&&(e-=4),858993459&t&&(e-=2),1431655765&t&&(e-
=1),e}r.INT_BITS=32,r.INT_MAX=2147483647,r.INT_MIN=-1<<31,r.sign=function(t)
{return(t>0)-(t<0)},r.abs=function(t){var e=t>>31;return(t^e)-e},r.min=function(t,e)
{return e^(t^e)&-(t<e)},r.max=function(t,e){return t^(t^e)&-
(t<e)},r.isPow2=function(t){return!(t&t-1||!t)},r.log2=function(t){var e,r;return e=
(t>65535)<<4,t>>>=e,r=(t>255)<<3,t>>>=r,e|=r,r=(t>15)<<2,t>>>=r,e|=r,r=(t>3)
<<1,t>>>=r,(e|=r)|t>>1},r.log10=function(t){return t>=1e9?9:t>=1e8?8:t>=1e7?
7:t>=1e6?6:t>=1e5?5:t>=1e4?4:t>=1e3?3:t>=100?2:t>=10?1:0},r.popCount=function(t)
{return t-=t>>>1&1431655765,16843009*((t=(858993459&t)+(t>>>2&858993459))+
(t>>>4)&252645135)>>>24},r.countTrailingZeros=n,r.nextPow2=function(t){return
t+=0===t,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,
(t|=t>>>16)+1},r.prevPow2=function(t){return t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,
5/9/20, 12:55 PM
Page 1 of 181
(t|=t>>>16)-(t>>>1)},r.parity=function(t){return
t^=t>>>16,t^=t>>>8,t^=t>>>4,27030>>>(t&=15)&1};var i=new Array(256);!function(t)
{for(var e=0;e<256;++e){var r=e,n=e,i=7;for(r>>>=1;r;r>>>=1)n<<=1,n|=1&r,--
i;t[e]=n<<i&255}}(i),r.reverse=function(t){return i[255&t]<<24|i[t>>>8&255]
<<16|i[t>>>16&255]<<8|i[t>>>24&255]},r.interleave2=function(t,e){return
t&=65535,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&
(t|t<<1),e&=65535,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&
(e|e<<2),e=1431655765&(e|e<<1),t|e<<1},r.deinterleave2=function(t,e){return
t=t>>>e&1431655765,t=858993459&(t|t>>>1),t=252645135&(t|t>>>2),t=16711935&(t|t>>>4),
(t=65535&(t|t>>>16))<<16>>16},r.interleave3=function(t,e,r){return
t&=1023,t=4278190335&(t|t<<16),t=251719695&(t|t<<8),t=3272356035&
(t|t<<4),t=1227133513&(t|t<<2),e&=1023,e=4278190335&(e|e<<16),e=251719695&
(e|e<<8),e=3272356035&(e|e<<4),e=1227133513&(e|e<<2),t|=e<<1,r&=1023,r=4278190335&
(r|r<<16),r=251719695&(r|r<<8),r=3272356035&(r|r<<4),r=1227133513&
(r|r<<2),t|r<<2},r.deinterleave3=function(t,e){return
t=t>>>e&1227133513,t=3272356035&(t|t>>>2),t=251719695&(t|t>>>4),t=4278190335&
(t|t>>>8),(t=1023&(t|t>>>16))<<22>>22},r.nextCombination=function(t){var e=t|t1;return e+1|(~e&-~e)-1>>>n(t)+1}},{}],2:[function(t,e,r){"use strict";function
n(t,e,r){r=r||2;var n=e&&e.length,o=n?e[0]*r:t.length,a=i(t,0,o,r,!0),u=
[];if(!a||a.next===a.prev)return u;var h,l,d,f,p,v,g;if(n&&
(a=c(t,e,a,r)),t.length>80*r){h=d=t[0],l=f=t[1];for(var
y=r;y<o;y+=r)p=t[y],v=t[y+1],p<h&&(h=p),v<l&&(l=v),p>d&&(d=p),v>f&&
(f=v);g=Math.max(d-h,f-l),g=0!==g?1/g:0}return s(a,u,r,h,l,g),u}function
i(t,e,r,n,i){var o,s;if(i===A(t,e,r,n)>0)for(o=e;o<r;o+=n)s=P(o,t[o],t[o+1],s);else
for(o=r-n;o>=e;o-=n)s=P(o,t[o],t[o+1],s);return s&&T(s,s.next)&&
(C(s),s=s.next),s}function o(t,e){if(!t)return t;e||(e=t);var
r,n=t;do{if(r=!1,n.steiner||!T(n,n.next)&&0!==x(n.prev,n,n.next))n=n.next;else{if(C(
n),(n=e=n.prev)===n.next)break;r=!0}}while(r||n!==e);return e}function
s(t,e,r,n,i,c,d){if(t){!d&&c&&v(t,n,i,c);for(var
f,p,g=t;t.prev!==t.next;)if(f=t.prev,p=t.next,c?
u(t,n,i,c):a(t))e.push(f.i/r),e.push(t.i/r),e.push(p.i/r),C(t),t=p.next,g=p.next;els
e if((t=p)===g){d?1===d?
(t=h(t,e,r),s(t,e,r,n,i,c,2)):2===d&&l(t,e,r,n,i,c):s(o(t),e,r,n,i,c,1);break}}}func
tion a(t){var e=t.prev,r=t,n=t.next;if(x(e,r,n)>=0)return!1;for(var
i=t.next.next;i!==t.prev;)
{if(_(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&x(i.prev,i,i.next)>=0)return!1;i=i.next}retu
rn!0}function u(t,e,r,n){var i=t.prev,o=t,s=t.next;if(x(i,o,s)>=0)return!1;for(var
a=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?
o.y:s.y,h=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,l=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?
o.y:s.y,c=y(a,u,e,r,n),d=y(h,l,e,r,n),f=t.prevZ,p=t.nextZ;f&&f.z>=c&&p&&p.z<=d;)
{if(f!==t.prev&&f!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&x(f.prev,f,f.next)>=
0)return!1;if(f=f.prevZ,p!==t.prev&&p!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,p.x,p.y)&&
x(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;f&&f.z>=c;)
{if(f!==t.prev&&f!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&x(f.prev,f,f.next)>=
0)return!1;f=f.prevZ}for(;p&&p.z<=d;)
{if(p!==t.prev&&p!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,p.x,p.y)&&x(p.prev,p,p.next)>=
0)return!1;p=p.nextZ}return!0}function h(t,e,r){var n=t;do{var
i=n.prev,o=n.next.next;!T(i,o)&&w(i,n,n.next,o)&&S(i,o)&&S(o,i)&&
(e.push(i.i/r),e.push(n.i/r),e.push(o.i/r),C(n),C(n.next),n=t=o),n=n.next}while(n!==
t);return n}function l(t,e,r,n,i,a){var u=t;do{for(var h=u.next.next;h!==u.prev;)
{if(u.i!==h.i&&b(u,h)){var l=M(u,h);return
u=o(u,u.next),l=o(l,l.next),s(u,e,r,n,i,a),void
s(l,e,r,n,i,a)}h=h.next}u=u.next}while(u!==t)}function c(t,e,r,n){var s,a,u,h,l,c=
[];for(s=0,a=e.length;s<a;s++)u=e[s]*n,h=s<a-1?
e[s+1]*n:t.length,l=i(t,u,h,n,!1),l===l.next&&
(l.steiner=!0),c.push(m(l));for(c.sort(d),s=0;s<c.length;s++)f(c[s],r),r=o(r,r.next)
;return r}function d(t,e){return t.x-e.x}function f(t,e){if(e=p(t,e)){var
r=M(e,t);o(r,r.next)}}function p(t,e){var
r,n=e,i=t.x,o=t.y,s=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){var a=n.x+(on.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=i&&a>s){if(s=a,a===i){if(o===n.y)return
5/9/20, 12:55 PM
Page 2 of 181
n;if(o===n.next.y)return n.next}r=n.x<n.next.x?
n:n.next}}n=n.next}while(n!==e);if(!r)return null;if(i===s)return r.prev;var
u,h=r,l=r.x,c=r.y,d=1/0;for(n=r.next;n!==h;)i>=n.x&&n.x>=l&&i!==n.x&&_(o<c?
i:s,o,l,c,o<c?s:i,o,n.x,n.y)&&((u=Math.abs(o-n.y)/(i-n.x))
<d||u===d&&n.x>r.x)&&S(n,t)&&(r=n,d=u),n=n.next;return r}function v(t,e,r,n){var
i=t;do{null===i.z&&
(i.z=y(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.n
extZ=null,i.prevZ=null,g(i)}function g(t){var
e,r,n,i,o,s,a,u,h=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,n=r,a=0,e=0;e<h&&
(a++,n=n.nextZ);e++);for(u=h;a>0||u>0&&n;)0!==a&&(0===u||!n||r.z<=n.z)?
(i=r,r=r.nextZ,a--):(i=n,n=n.nextZ,u--),o?
o.nextZ=i:t=i,i.prevZ=o,o=i;r=n}o.nextZ=null,h*=2}while(s>1);return t}function
y(t,e,r,n,i){return t=32767*(t-r)*i,e=32767*(e-n)*i,t=16711935&(t|t<<8),t=252645135&
(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&
(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function m(t){var
e=t,r=t;do{e.x<r.x&&(r=e),e=e.next}while(e!==t);return r}function _(t,e,r,n,i,o,s,a)
{return(i-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(n-a)-(r-s)*(e-a)>=0&&(r-s)*(o-a)-(i-s)*(na)>=0}function b(t,e){return
t.next.i!==e.i&&t.prev.i!==e.i&&!E(t,e)&&S(t,e)&&S(e,t)&&O(t,e)}function x(t,e,r)
{return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function T(t,e){return
t.x===e.x&&t.y===e.y}function w(t,e,r,n){return!!
(T(t,e)&&T(r,n)||T(t,n)&&T(r,e))||x(t,e,r)>0!=x(t,e,n)>0&&x(r,n,t)>0!=x(r,n,e)>0}fun
ction E(t,e){var
r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&w(r,r.next,t,e))retu
rn!0;r=r.next}while(r!==t);return!1}function S(t,e){return x(t.prev,t,t.next)<0?
x(t,e,t.next)>=0&&x(t,t.prev,e)>=0:x(t,e,t.prev)<0||x(t,t.next,e)<0}function O(t,e)
{var r=t,n=!1,i=(t.x+e.x)/2,o=
(t.y+e.y)/2;do{r.y>o!=r.next.y>o&&r.next.y!==r.y&&i<(r.next.x-r.x)*(or.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==t);return n}function M(t,e){var
r=new R(t.i,t.x,t.y),n=new R(e.i,e.x,e.y),i=t.next,o=e.prev;return
t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function
P(t,e,r,n){var i=new R(t,e,r);return n?
(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function C(t)
{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&
(t.nextZ.prevZ=t.prevZ)}function R(t,e,r)
{this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=nul
l,this.nextZ=null,this.steiner=!1}function A(t,e,r,n){for(var i=0,o=e,s=rn;o<r;o+=n)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return
i}e.exports=n,e.exports.default=n,n.deviation=function(t,e,r,n){var
i=e&&e.length,o=i?e[0]*r:t.length,s=Math.abs(A(t,0,o,r));if(i)for(var
a=0,u=e.length;a<u;a++){var h=e[a]*r,l=a<u-1?e[a+1]*r:t.length;s-
=Math.abs(A(t,h,l,r))}var c=0;for(a=0;a<n.length;a+=3){var
d=n[a]*r,f=n[a+1]*r,p=n[a+2]*r;c+=Math.abs((t[d]-t[p])*(t[f+1]-t[d+1])-(t[d]-t[f])*
(t[p+1]-t[d+1]))}return 0===s&&0===c?0:Math.abs((c-s)/s)},n.flatten=function(t)
{for(var e=t[0][0].length,r={vertices:[],holes:
[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var
s=0;s<e;s++)r.vertices.push(t[i][o][s]);i>0&&(n+=t[i1].length,r.holes.push(n))}return r}},{}],3:[function(t,e,r){"use strict";function
n(){}function i(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o()
{this._events=new n,this._eventsCount=0}var
s=Object.prototype.hasOwnProperty,a="~";Object.create&&
(n.prototype=Object.create(null),(new n).__proto__||
(a=!1)),o.prototype.eventNames=function(){var t,e,r=
[];if(0===this._eventsCount)return r;for(e in t=this._events)s.call(t,e)&&r.push(a?
e.slice(1):e);return Object.getOwnPropertySymbols?
r.concat(Object.getOwnPropertySymbols(t)):r},o.prototype.listeners=function(t,e){var
r=a?
a+t:t,n=this._events[r];if(e)return!!n;if(!n)return[];if(n.fn)return[n.fn];for(var
i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return
s},o.prototype.emit=function(t,e,r,n,i,o){var s=a?
5/9/20, 12:55 PM
Page 3 of 181
a+t:t;if(!this._events[s])return!1;var
u,h,l=this._events[s],c=arguments.length;if(l.fn)
{switch(l.once&&this.removeListener(t,l.fn,void 0,!0),c){case 1:return
l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return
l.fn.call(l.context,e,r),!0;case 4:return l.fn.call(l.context,e,r,n),!0;case
5:return l.fn.call(l.context,e,r,n,i),!0;case 6:return
l.fn.call(l.context,e,r,n,i,o),!0}for(h=1,u=new Array(c-1);h<c;h++)u[h1]=arguments[h];l.fn.apply(l.context,u)}else{var
d,f=l.length;for(h=0;h<f;h++)switch(l[h].once&&this.removeListener(t,l[h].fn,void
0,!0),c){case 1:l[h].fn.call(l[h].context);break;case
2:l[h].fn.call(l[h].context,e);break;case
3:l[h].fn.call(l[h].context,e,r);break;case
4:l[h].fn.call(l[h].context,e,r,n);break;default:if(!u)for(d=1,u=new Array(c1);d<c;d++)u[d1]=arguments[d];l[h].fn.apply(l[h].context,u)}}return!0},o.prototype.on=function(t,e
,r){var n=new i(e,r||this),o=a?a+t:t;return this._events[o]?this._events[o].fn?
this._events[o]=[this._events[o],n]:this._events[o].push(n):
(this._events[o]=n,this._eventsCount++),this},o.prototype.once=function(t,e,r){var
n=new i(e,r||this,!0),o=a?a+t:t;return this._events[o]?this._events[o].fn?
this._events[o]=[this._events[o],n]:this._events[o].push(n):
(this._events[o]=n,this._eventsCount++),this},o.prototype.removeListener=function(t,
e,r,i){var o=a?a+t:t;if(!this._events[o])return this;if(!e)return 0==--
this._eventsCount?this._events=new n:delete this._events[o],this;var
s=this._events[o];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||(0==--
this._eventsCount?this._events=new n:delete this._events[o]);else{for(var u=0,h=
[],l=s.length;u<l;u++)
(s[u].fn!==e||i&&!s[u].once||r&&s[u].context!==r)&&h.push(s[u]);h.length?
this._events[o]=1===h.length?h[0]:h:0==--this._eventsCount?this._events=new n:delete
this._events[o]}return this},o.prototype.removeAllListeners=function(t){var e;return
t?(e=a?a+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new n:delete
this._events[e])):(this._events=new
n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.
addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return
this},o.prefixed=a,o.EventEmitter=o,void 0!==e&&(e.exports=o)},{}],4:
[function(e,r,n){!function(e){function n(t,e){return t.test(e)}function i(t){var
e=t||("undefined"!=typeof navigator?navigator.userAgent:""),r=e.split("[FBAN");void
0!==r[1]&&(e=r[0]),void 0!==(r=e.split("Twitter"))[1]&&(e=r[0]);var i={apple:
{phone:n(o,e)&&!n(d,e),ipod:n(s,e),tablet:!n(o,e)&&n(a,e)&&!n(d,e),device:
(n(o,e)||n(s,e)||n(a,e))&&!n(d,e)},amazon:
{phone:n(l,e),tablet:!n(l,e)&&n(c,e),device:n(l,e)||n(c,e)},android:
{phone:!n(d,e)&&n(l,e)||!n(d,e)&&n(u,e),tablet:!n(d,e)&&!n(l,e)&&!n(u,e)&&
(n(c,e)||n(h,e)),device:!n(d,e)&&(n(l,e)||n(c,e)||n(u,e)||n(h,e))},windows:
{phone:n(d,e),tablet:n(f,e),device:n(d,e)||n(f,e)},other:
{blackberry:n(p,e),blackberry10:n(v,e),opera:n(g,e),firefox:n(m,e),chrome:n(y,e),dev
ice:n(p,e)||n(v,e)||n(g,e)||n(m,e)||n(y,e)}};return
i.any=i.apple.device||i.android.device||i.windows.device||i.other.device,i.phone=i.a
pple.phone||i.android.phone||i.windows.phone,i.tablet=i.apple.tablet||i.android.tabl
et||i.windows.tablet,i}var
o=/iPhone/i,s=/iPod/i,a=/iPad/i,u=/\bAndroid(?:.+)Mobile\b/i,h=/Android/i,l=/\bAndro
id(?:.+)SD4930UR\b/i,c=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,d=/Windows
Phone/i,f=/\bWindows(?:.+)ARM\b/i,p=/BlackBerry/i,v=/BB10/i,g=/Opera
Mini/i,y=/\b(CriOS|Chrome)(?:.+)Mobile/i,m=/\Mobile(?:.+)Firefox\b/i;void
0!==r&&r.exports&&"undefined"==typeof window?r.exports=i:void
0!==r&&r.exports&&"undefined"!=typeof window?r.exports=i():"function"==typeof
t&&t.amd?t([],e.isMobile=i()):e.isMobile=i()}(this)},{}],5:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function i(t,e){return t._head?
(t._tail._next=e,e._prev=t._tail,t._tail=e):
(t._head=e,t._tail=e),e._owner=t,e}Object.defineProperty(r,"__esModule",
{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var
5/9/20, 12:55 PM
Page 4 of 181
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),s=function(){function t(e,r,i){void 0===r&&
(r=!1),n(this,t),this._fn=e,this._once=r,this._thisArg=i,this._next=this._prev=this.
_owner=null}return o(t,[{key:"detach",value:function(){return null!==this._owner&&
(this._owner.detach(this),!0)}}]),t}(),a=function(){function t()
{n(this,t),this._head=this._tail=void 0}return o(t,[{key:"handlers",value:function()
{var t=!(arguments.length<=0||void
0===arguments[0])&&arguments[0],e=this._head;if(t)return!!e;for(var r=
[];e;)r.push(e),e=e._next;return r}},{key:"has",value:function(t){if(!(t instanceof
s))throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding
object.");return t._owner===this}},{key:"dispatch",value:function(){var
t=this._head;if(!t)return!1;for(;t;)t._once&&this.detach(t),t._fn.apply(t._thisArg,a
rguments),t=t._next;return!0}},{key:"add",value:function(t){var
e=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if("function"!=typeof
t)throw new Error("MiniSignal#add(): First arg must be a Function.");return
i(this,new s(t,!1,e))}},{key:"once",value:function(t){var
e=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if("function"!=typeof
t)throw new Error("MiniSignal#once(): First arg must be a Function.");return
i(this,new s(t,!0,e))}},{key:"detach",value:function(t){if(!(t instanceof s))throw
new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding
object.");return t._owner!==this?this:(t._prev&&(t._prev._next=t._next),t._next&&
(t._next._prev=t._prev),t===this._head?(this._head=t._next,null===t._next&&
(this._tail=null)):t===this._tail&&
(this._tail=t._prev,this._tail._next=null),t._owner=null,this)}},
{key:"detachAll",value:function(){var t=this._head;if(!t)return
this;for(this._head=this._tail=null;t;)t._owner=null,t=t._next;return this}}]),t}
();a.MiniSignalBinding=s,r.default=a,e.exports=r.default},{}],6:[function(t,e,r)
{"use strict";function n(t){if(null===t||void 0===t)throw new
TypeError("Object.assign cannot be called with null or undefined");return
Object(t)}var
i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.
propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new
String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var
e=
{},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPrope
rtyNames(e).map(function(t){return e[t]}).join(""))return!1;var n=
{};return"abcdefghijklmnopqrst".split("").forEach(function(t)
{n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t
){return!1}}()?Object.assign:function(t,e){for(var
r,a,u=n(t),h=1;h<arguments.length;h++){r=Object(arguments[h]);for(var l in
r)o.call(r,l)&&(u[l]=r[l]);if(i){a=i(r);for(var c=0;c<a.length;c++)s.call(r,a[c])&&
(u[a[c]]=r[a[c]])}}return u}},{}],7:[function(t,e,r){"use
strict";e.exports=function(t,e){e=e||{};for(var r={key:
["source","protocol","authority","userInfo","user","password","host","port","relativ
e","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)
([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::
([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?
(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)
(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?
#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#
(.*))?)/}},n=r.parser[e.strictMode?"strict":"loose"].exec(t),i={},o=14;o--
;)i[r.key[o]]=n[o]||"";return i[r.q.name]=
{},i[r.key[12]].replace(r.q.parser,function(t,e,n){e&&(i[r.q.name][e]=n)}),i}},
{}],8:[function(t,e,r){(function(t){function e(t,e){for(var r=0,n=t.length-1;n>=0;n-
-){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&
(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e)
{if(t.filter)return t.filter(e);for(var r=
[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var i=/^(\/?|)([\s\S]*?)
((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return
5/9/20, 12:55 PM
Page 5 of 181
i.exec(t).slice(1)};r.resolve=function(){for(var r="",i=!1,o=arguments.length1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new
TypeError("Arguments to path.resolve must be strings");s&&
(r=s+"/"+r,i="/"===s.charAt(0))}return r=e(n(r.split("/"),function(t)
{return!!t}),!i).join("/"),(i?"/":"")+r||"."},r.normalize=function(t){var
i=r.isAbsolute(t),o="/"===s(t,-1);return t=e(n(t.split("/"),function(t)
{return!!t}),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),
(i?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function()
{var t=Array.prototype.slice.call(arguments,0);return r.normalize(n(t,function(t,e)
{if("string"!=typeof t)throw new TypeError("Arguments to path.join must be
strings");return t}).join("/"))},r.relative=function(t,e){function n(t){for(var
e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?
[]:t.slice(e,r-e+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var
i=n(t.split("/")),o=n(e.split("/")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if
(i[u]!==o[u]){a=u;break}for(var h=[],u=a;u<i.length;u++)h.push("..");return
h=h.concat(o.slice(a)),h.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t)
{var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length1)),r+n):"."},r.basename=function(t,e){var r=o(t)[2];return
e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.lengthe.length)),r},r.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?
function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&
(e=t.length+e),t.substr(e,r)}}).call(this,t("_process"))},{_process:26}],9:
[function(t,e,r){var n=new ArrayBuffer(0),i=function(t,e,r,i)
{this.gl=t,this.buffer=t.createBuffer(),this.type=e||t.ARRAY_BUFFER,this.drawType=i|
|t.STATIC_DRAW,this.data=n,r&&this.upload(r),this._updateID=0};i.prototype.upload=fu
nction(t,e,r){r||this.bind();var
n=this.gl;t=t||this.data,e=e||0,this.data.byteLength>=t.byteLength?
n.bufferSubData(this.type,e,t):n.bufferData(this.type,t,this.drawType),this.data=t},
i.prototype.bind=function()
{this.gl.bindBuffer(this.type,this.buffer)},i.createVertexBuffer=function(t,e,r)
{return new i(t,t.ARRAY_BUFFER,e,r)},i.createIndexBuffer=function(t,e,r){return new
i(t,t.ELEMENT_ARRAY_BUFFER,e,r)},i.create=function(t,e,r,n){return new
i(t,e,r,n)},i.prototype.destroy=function()
{this.gl.deleteBuffer(this.buffer)},e.exports=i},{}],10:[function(t,e,r){var
n=t("./GLTexture"),i=function(t,e,r)
{this.gl=t,this.framebuffer=t.createFramebuffer(),this.stencil=null,this.texture=nul
l,this.width=e||100,this.height=r||100};i.prototype.enableTexture=function(t){var
e=this.gl;this.texture=t||new
n(e),this.texture.bind(),this.bind(),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_AT
TACHMENT0,e.TEXTURE_2D,this.texture.texture,0)},i.prototype.enableStencil=function()
{if(!this.stencil){var
t=this.gl;this.stencil=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this
.stencil),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDE
RBUFFER,this.stencil),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,this.widt
h,this.height)}},i.prototype.clear=function(t,e,r,n){this.bind();var
i=this.gl;i.clearColor(t,e,r,n),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)},i.pr
ototype.bind=function(){var
t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer)},i.prototype.unbind=func
tion(){var
t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null)},i.prototype.resize=function(t,e)
{var
r=this.gl;this.width=t,this.height=e,this.texture&&this.texture.uploadData(null,t,e)
,this.stencil&&
(r.bindRenderbuffer(r.RENDERBUFFER,this.stencil),r.renderbufferStorage(r.RENDERBUFFE
R,r.DEPTH_STENCIL,t,e))},i.prototype.destroy=function(){var
t=this.gl;this.texture&&this.texture.destroy(),t.deleteFramebuffer(this.framebuffer)
,this.gl=null,this.stencil=null,this.texture=null},i.createRGBA=function(t,e,r,o)
{var s=n.fromData(t,null,e,r);s.enableNearestScaling(),s.enableWrapClamp();var a=new
i(t,e,r);return a.enableTexture(s),a.unbind(),a},i.createFloat32=function(t,e,r,o)
{var s=new n.fromData(t,o,e,r);s.enableNearestScaling(),s.enableWrapClamp();var
5/9/20, 12:55 PM
Page 6 of 181
a=new i(t,e,r);return a.enableTexture(s),a.unbind(),a},e.exports=i},
{"./GLTexture":12}],11:[function(t,e,r){var
n=t("./shader/compileProgram"),i=t("./shader/extractAttributes"),o=t("./shader/extra
ctUniforms"),s=t("./shader/setPrecision"),a=t("./shader/generateUniformAccessObject"
),u=function(t,e,r,u,h){this.gl=t,u&&
(e=s(e,u),r=s(r,u)),this.program=n(t,e,r,h),this.attributes=i(t,this.program),this.u
niformData=o(t,this.program),this.uniforms=a(t,this.uniformData)};u.prototype.bind=f
unction(){return
this.gl.useProgram(this.program),this},u.prototype.destroy=function()
{this.attributes=null,this.uniformData=null,this.uniforms=null,this.gl.deleteProgram
(this.program)},e.exports=u},
{"./shader/compileProgram":17,"./shader/extractAttributes":19,"./shader/extractUnifo
rms":20,"./shader/generateUniformAccessObject":21,"./shader/setPrecision":25}],12:
[function(t,e,r){var n=function(t,e,r,n,i)
{this.gl=t,this.texture=t.createTexture(),this.mipmap=!1,this.premultiplyAlpha=!1,th
is.width=e||-1,this.height=r||-1,this.format=n||t.RGBA,this.type=i||t.UNSIGNED_BYTE}
;n.prototype.upload=function(t){this.bind();var
e=this.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha);var
r=t.videoWidth||t.width,n=t.videoHeight||t.height;n!==this.height||r!==this.width?
e.texImage2D(e.TEXTURE_2D,0,this.format,this.format,this.type,t):e.texSubImage2D(e.T
EXTURE_2D,0,0,0,this.format,this.type,t),this.width=r,this.height=n};var
i=!1;n.prototype.uploadData=function(t,e,r){this.bind();var n=this.gl;if(t
instanceof Float32Array){if(!i){if(!n.getExtension("OES_texture_float"))throw new
Error("floating point textures not available");i=!0}this.type=n.FLOAT}else
this.type=this.type||n.UNSIGNED_BYTE;n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
this.premultiplyAlpha),e!==this.width||r!==this.height?
n.texImage2D(n.TEXTURE_2D,0,this.format,e,r,0,this.format,this.type,t||null):n.texSu
bImage2D(n.TEXTURE_2D,0,0,0,e,r,this.format,this.type,t||null),this.width=e,this.hei
ght=r},n.prototype.bind=function(t){var e=this.gl;void
0!==t&&e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)},n.pro
totype.unbind=function(){var
t=this.gl;t.bindTexture(t.TEXTURE_2D,null)},n.prototype.minFilter=function(t){var
e=this.gl;this.bind(),this.mipmap?
e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?
e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_NEAREST):e.texParameteri(e.TEXTURE_2D,e.TEXT
URE_MIN_FILTER,t?e.LINEAR:e.NEAREST)},n.prototype.magFilter=function(t){var
e=this.gl;this.bind(),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t?
e.LINEAR:e.NEAREST)},n.prototype.enableMipmap=function(){var
t=this.gl;this.bind(),this.mipmap=!0,t.generateMipmap(t.TEXTURE_2D)},n.prototype.ena
bleLinearScaling=function()
{this.minFilter(!0),this.magFilter(!0)},n.prototype.enableNearestScaling=function()
{this.minFilter(!1),this.magFilter(!1)},n.prototype.enableWrapClamp=function(){var
t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)
,t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},n.prototype.enableW
rapRepeat=function(){var
t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texP
arameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)},n.prototype.enableWrapMirrorRepea
t=function(){var
t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.MIRRORED_REPEA
T),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.MIRRORED_REPEAT)},n.prototype.des
troy=function(){this.gl.deleteTexture(this.texture)},n.fromSource=function(t,e,r)
{var i=new n(t);return
i.premultiplyAlpha=r||!1,i.upload(e),i},n.fromData=function(t,e,r,i){var o=new
n(t);return o.uploadData(e,r,i),o},e.exports=n},{}],13:[function(t,e,r){function
n(t,e){if(this.nativeVaoExtension=null,n.FORCE_NATIVE||
(this.nativeVaoExtension=t.getExtension("OES_vertex_array_object")||t.getExtension("
MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object")),thi
s.nativeState=e,this.nativeVaoExtension)
{this.nativeVao=this.nativeVaoExtension.createVertexArrayOES();var
r=t.getParameter(t.MAX_VERTEX_ATTRIBS);this.nativeState={tempAttribState:new
5/9/20, 12:55 PM
Page 7 of 181
Array(r),attribState:new Array(r)}}this.gl=t,this.attributes=
[],this.indexBuffer=null,this.dirty=!1}var
i=t("./setVertexAttribArrays");n.prototype.constructor=n,e.exports=n,n.FORCE_NATIVE=
!1,n.prototype.bind=function(){if(this.nativeVao)
{if(this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.dirty)return
this.dirty=!1,this.activate(),this;this.indexBuffer&&this.indexBuffer.bind()}else
this.activate();return this},n.prototype.unbind=function(){return
this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(null),this},n.prototype.a
ctivate=function(){for(var t=this.gl,e=null,r=0;r<this.attributes.length;r++){var
n=this.attributes[r];e!==n.buffer&&
(n.buffer.bind(),e=n.buffer),t.vertexAttribPointer(n.attribute.location,n.attribute.
size,n.type||t.FLOAT,n.normalized||!1,n.stride||0,n.start||0)}return
i(t,this.attributes,this.nativeState),this.indexBuffer&&this.indexBuffer.bind(),this
},n.prototype.addAttribute=function(t,e,r,n,i,o){return
this.attributes.push({buffer:t,attribute:e,location:e.location,type:r||this.gl.FLOAT
,normalized:n||!1,stride:i||0,start:o||0}),this.dirty=!0,this},n.prototype.addIndex=
function(t){return
this.indexBuffer=t,this.dirty=!0,this},n.prototype.clear=function(){return
this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.attr
ibutes.length=0,this.indexBuffer=null,this},n.prototype.draw=function(t,e,r){var
n=this.gl;return this.indexBuffer?
n.drawElements(t,e||this.indexBuffer.data.length,n.UNSIGNED_SHORT,2*
(r||0)):n.drawArrays(t,r,e||this.getSize()),this},n.prototype.destroy=function()
{this.gl=null,this.indexBuffer=null,this.attributes=null,this.nativeState=null,this.
nativeVao&&this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao),this.nativeV
aoExtension=null,this.nativeVao=null},n.prototype.getSize=function(){var
t=this.attributes[0];return t.buffer.data.length/(t.stride/4||t.attribute.size)}},
{"./setVertexAttribArrays":16}],14:[function(t,e,r){var n=function(t,e){var
r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e);if(!r)throw new
Error("This browser does not support webGL. Try using the canvas renderer");return
r};e.exports=n},{}],15:[function(t,e,r){var n=
{createContext:t("./createContext"),setVertexAttribArrays:t("./setVertexAttribArrays
"),GLBuffer:t("./GLBuffer"),GLFramebuffer:t("./GLFramebuffer"),GLShader:t("./GLShade
r"),GLTexture:t("./GLTexture"),VertexArrayObject:t("./VertexArrayObject"),shader:t("
./shader")};void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof window&&
(window.PIXI=window.PIXI||{},window.PIXI.glCore=n)},
{"./GLBuffer":9,"./GLFramebuffer":10,"./GLShader":11,"./GLTexture":12,"./VertexArray
Object":13,"./createContext":14,"./setVertexAttribArrays":16,"./shader":22}],16:
[function(t,e,r){var n=function(t,e,r){var n;if(r){var
i=r.tempAttribState,o=r.attribState;for(n=0;n<i.length;n++)i[n]=!1;for(n=0;n<e.lengt
h;n++)i[e[n].attribute.location]=!0;for(n=0;n<o.length;n++)o[n]!==i[n]&&
(o[n]=i[n],r.attribState[n]?
t.enableVertexAttribArray(n):t.disableVertexAttribArray(n))}else
for(n=0;n<e.length;n++){var
s=e[n];t.enableVertexAttribArray(s.attribute.location)}};e.exports=n},{}],17:
[function(t,e,r){var n=function(t,e,r,n){var
o=i(t,t.VERTEX_SHADER,e),s=i(t,t.FRAGMENT_SHADER,r),a=t.createProgram();if(t.attachS
hader(a,o),t.attachShader(a,s),n)for(var u in
n)t.bindAttribLocation(a,n[u],u);return
t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)||(console.error("Pixi.js
Error: Could not initialize
shader."),console.error("gl.VALIDATE_STATUS",t.getProgramParameter(a,t.VALIDATE_STAT
US)),console.error("gl.getError()",t.getError()),""!==t.getProgramInfoLog(a)&&consol
e.warn("Pixi.js Warning:
gl.getProgramInfoLog()",t.getProgramInfoLog(a)),t.deleteProgram(a),a=null),t.deleteS
hader(o),t.deleteShader(s),a},i=function(t,e,r){var n=t.createShader(e);return
t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:
(console.log(t.getShaderInfoLog(n)),null)};e.exports=n},{}],18:[function(t,e,r){var
n=function(t,e){switch(t){case"float":return 0;case"vec2":return new
Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new
5/9/20, 12:55 PM
Page 8 of 181
Float32Array(4*e);case"int":case"sampler2D":return 0;case"ivec2":return new
Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new
Int32Array(4*e);case"bool":return!1;case"bvec2":return i(2*e);case"bvec3":return
i(3*e);case"bvec4":return i(4*e);case"mat2":return new
Float32Array([1,0,0,1]);case"mat3":return new
Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new
Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},i=function(t){for(var e=new
Array(t),r=0;r<e.length;r++)e[r]=!1;return e};e.exports=n},{}],19:[function(t,e,r)
{var n=t("./mapType"),i=t("./mapSize"),o=function(t,e){for(var r=
{},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),a=0;a<o;a++){var
u=t.getActiveAttrib(e,a),h=n(t,u.type);r[u.name]=
{type:h,size:i(h),location:t.getAttribLocation(e,u.name),pointer:s}}return
r},s=function(t,e,r,n)
{gl.vertexAttribPointer(this.location,this.size,t||gl.FLOAT,e||!1,r||0,n||0)};e.expo
rts=o},{"./mapSize":23,"./mapType":24}],20:[function(t,e,r){var
n=t("./mapType"),i=t("./defaultValue"),o=function(t,e){for(var r=
{},o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),s=0;s<o;s++){var
a=t.getActiveUniform(e,s),u=a.name.replace(/\[.*?\]/,""),h=n(t,a.type);r[u]=
{type:h,size:a.size,location:t.getUniformLocation(e,u),value:i(h,a.size)}}return
r};e.exports=o},{"./defaultValue":18,"./mapType":24}],21:[function(t,e,r){function
n(t,e){return function(r){this.data[t].value=r;var
n=this.data[t].location;1===e.size?a[e.type](this.gl,n,r):u[e.type]
(this.gl,n,r)}}function i(t,e){for(var r=e,n=0;n<t.length-1;n++){var i=r[t[n]]||
{data:{}};r[t[n]]=i,r=i}return r}var o=function(t,e){var r={data:{}};r.gl=t
;for(var o=Object.keys(e),a=0;a<o.length;a++){var
u=o[a],h=u.split("."),l=h[h.length1],c=i(h,r),d=e[u];c.data[l]=d,c.gl=t,Object.defineProperty(c,l,
{get:s(l),set:n(l,d)})}return r},s=function(t){return function(){return
this.data[t].value}},a={float:function(t,e,r){t.uniform1f(e,r)},vec2:function(t,e,r)
{t.uniform2f(e,r[0],r[1])},vec3:function(t,e,r)
{t.uniform3f(e,r[0],r[1],r[2])},vec4:function(t,e,r)
{t.uniform4f(e,r[0],r[1],r[2],r[3])},int:function(t,e,r)
{t.uniform1i(e,r)},ivec2:function(t,e,r)
{t.uniform2i(e,r[0],r[1])},ivec3:function(t,e,r)
{t.uniform3i(e,r[0],r[1],r[2])},ivec4:function(t,e,r)
{t.uniform4i(e,r[0],r[1],r[2],r[3])},bool:function(t,e,r)
{t.uniform1i(e,r)},bvec2:function(t,e,r)
{t.uniform2i(e,r[0],r[1])},bvec3:function(t,e,r)
{t.uniform3i(e,r[0],r[1],r[2])},bvec4:function(t,e,r)
{t.uniform4i(e,r[0],r[1],r[2],r[3])},mat2:function(t,e,r)
{t.uniformMatrix2fv(e,!1,r)},mat3:function(t,e,r)
{t.uniformMatrix3fv(e,!1,r)},mat4:function(t,e,r)
{t.uniformMatrix4fv(e,!1,r)},sampler2D:function(t,e,r){t.uniform1i(e,r)}},u=
{float:function(t,e,r){t.uniform1fv(e,r)},vec2:function(t,e,r)
{t.uniform2fv(e,r)},vec3:function(t,e,r){t.uniform3fv(e,r)},vec4:function(t,e,r)
{t.uniform4fv(e,r)},int:function(t,e,r){t.uniform1iv(e,r)},ivec2:function(t,e,r)
{t.uniform2iv(e,r)},ivec3:function(t,e,r){t.uniform3iv(e,r)},ivec4:function(t,e,r)
{t.uniform4iv(e,r)},bool:function(t,e,r){t.uniform1iv(e,r)},bvec2:function(t,e,r)
{t.uniform2iv(e,r)},bvec3:function(t,e,r){t.uniform3iv(e,r)},bvec4:function(t,e,r)
{t.uniform4iv(e,r)},sampler2D:function(t,e,r){t.uniform1iv(e,r)}};e.exports=o},
{}],22:[function(t,e,r){e.exports=
{compileProgram:t("./compileProgram"),defaultValue:t("./defaultValue"),extractAttrib
utes:t("./extractAttributes"),extractUniforms:t("./extractUniforms"),generateUniform
AccessObject:t("./generateUniformAccessObject"),setPrecision:t("./setPrecision"),map
Size:t("./mapSize"),mapType:t("./mapType")}},
{"./compileProgram":17,"./defaultValue":18,"./extractAttributes":19,"./extractUnifor
ms":20,"./generateUniformAccessObject":21,"./mapSize":23,"./mapType":24,"./setPrecis
ion":25}],23:[function(t,e,r){var n=function(t){return i[t]},i=
{float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,bool:1,bvec2:2,bvec3:3,b
vec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};e.exports=n},{}],24:[function(t,e,r){var
5/9/20, 12:55 PM
Page 9 of 181
n=function(t,e){if(!i){var r=Object.keys(o);i={};for(var n=0;n<r.length;++n){var
s=r[n];i[t[s]]=o[s]}}return i[e]},i=null,o=
{FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_V
EC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC
3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SA
MPLER_2D:"sampler2D"};e.exports=n},{}],25:[function(t,e,r){var n=function(t,e)
{return"precision"!==t.substring(0,9)?"precision "+e+" float;\n"+t:t};e.exports=n},
{}],26:[function(t,e,r){function n(){throw new Error("setTimeout has not been
defined")}function i(){throw new Error("clearTimeout has not been defined")}function
o(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return
c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return
c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function s(t)
{if(d===clearTimeout)return clearTimeout(t);if((d===i||!d)&&clearTimeout)return
d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return
d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){g&&p&&(g=!1,p.length?
v=p.concat(v):y=-1,v.length&&u())}function u(){if(!g){var t=o(a);g=!0;for(var
e=v.length;e;){for(p=v,v=
[];++y<e;)p&&p[y].run();y=-1,e=v.length}p=null,g=!1,s(t)}}function h(t,e)
{this.fun=t,this.array=e}function l(){}var c,d,f=e.exports={};!function()
{try{c="function"==typeof setTimeout?setTimeout:n}catch(t)
{c=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(t){d=i}}();var p,v=
[],g=!1,y=-1;f.nextTick=function(t){var e=new Array(arguments.length1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r1]=arguments[r];v.push(new h(t,e)),1!==v.length||g||o(u)},h.prototype.run=function()
{this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=
[],f.version="",f.versions=
{},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l
,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(t)
{return[]},f.binding=function(t){throw new Error("process.binding is not
supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new
Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],27:
[function(e,r,n){(function(e){!function(i){function o(t){throw new
RangeError(L[t])}function s(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return
n}function a(t,e){var r=t.split("@"),n="";return r.length>1&&
(n=r[0]+"@",t=r[1]),t=t.replace(D,"."),n+s(t.split("."),e).join(".")}function u(t)
{for(var e,r,n=[],i=0,o=t.length;i<o;)e=t.charCodeAt(i++),e>=55296&&e<=56319&&i<o?
(r=t.charCodeAt(i++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):
(n.push(e),i--)):n.push(e);return n}function h(t){return s(t,function(t){var
e="";return t>65535&&(t-
=65536,e+=k(t>>>10&1023|55296),t=56320|1023&t),e+=k(t)}).join("")}function l(t)
{return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:w}function c(t,e){return t+22+75*
(t<26)-((0!=e)<<5)}function d(t,e,r){var n=0;for(t=r?
B(t/M):t>>1,t+=B(t/e);t>N*S>>1;n+=w)t=B(t/N);return B(n+(N+1)*t/(t+O))}function f(t)
{var e,r,n,i,s,a,u,c,f,p,v=[],g=t.length,y=0,m=C,_=P;for(r=t.lastIndexOf(R),r<0&&
(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&o("notbasic"),v.push(t.charCodeAt(n));for(i=r>0?r+1:0;i<g;)
{for(s=y,a=1,u=w;i>=g&&o("invalid-input"),c=l(t.charCodeAt(i++)),(c>=w||c>B((Ty)/a))&&o("overflow"),y+=c*a,f=u<=_?E:u>=_+S?S:u-_,!(c<f);u+=w)p=wf,a>B(T/p)&&o("overflow"),a*=p;e=v.length+1,_=d(y-s,e,0==s),B(y/e)>Tm&&o("overflow"),m+=B(y/e),y%=e,v.splice(y++,0,m)}return h(v)}function p(t){var
e,r,n,i,s,a,h,l,f,p,v,g,y,m,_,b=[];for(t=u(t),g=t.length,e=C,r=0,s=P,a=0;a<g;++a)
(v=t[a])<128&&b.push(k(v));for(n=i=b.length,i&&b.push(R);n<g;){for(h=T,a=0;a<g;++a)
(v=t[a])>=e&&v<h&&(h=v);for(y=n+1,h-e>B((T-r)/y)&&o("overflow"),r+=(he)*y,e=h,a=0;a<g;++a)if(v=t[a],v<e&&++r>T&&o("overflow"),v==e){for(l=r,f=w;p=f<=s?
E:f>=s+S?S:f-s,!(l<p);f+=w)_=l-p,m=wp,b.push(k(c(p+_%m,0))),l=B(_/m);b.push(k(c(l,0))),s=d(r,y,n==i),r=0,++n}++r,++e}ret
urn b.join("")}function v(t){return a(t,function(t){return A.test(t)?
f(t.slice(4).toLowerCase()):t})}function g(t){return a(t,function(t){return
I.test(t)?"xn--"+p(t):t})}var y="object"==typeof
n&&n&&!n.nodeType&&n,m="object"==typeof r&&r&&!r.nodeType&&r,_="object"==typeof
5/9/20, 12:55 PM
Page 10 of 181
e&&e;_.global!==_&&_.window!==_&&_.self!==_||(i=_);var
b,x,T=2147483647,w=36,E=1,S=26,O=38,M=700,P=72,C=128,R="-",A=/^xn--/,I=/[^\x20-
\x7E]/,D=/[\x2E\u3002\uFF0E\uFF61]/g,L={overflow:"Overflow: input needs wider
integers to process","not-basic":"Illegal input >= 0x80 (not a basic code
point)","invalid-input":"Invalid input"},N=wE,B=Math.floor,k=String.fromCharCode;if(b={version:"1.4.1",ucs2:
{decode:u,encode:h},decode:f,encode:p,toASCII:g,toUnicode:v},"function"==typeof
t&&"object"==typeof t.amd&&t.amd)t("punycode",function(){return b});else
if(y&&m)if(r.exports==y)m.exports=b;else for(x in b)b.hasOwnProperty(x)&&
(y[x]=b[x]);else i.punycode=b}(this)}).call(this,"undefined"!=typeof global?
global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],28:
[function(t,e,r){"use strict";function n(t,e){return
Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,o)
{e=e||"&",r=r||"=";var s={};if("string"!=typeof t||0===t.length)return s;var
a=/\+/g;t=t.split(e);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var
h=t.length;u>0&&h>u&&(h=u);for(var l=0;l<h;++l){var
c,d,f,p,v=t[l].replace(a,"%20"),g=v.indexOf(r);g>=0?
(c=v.substr(0,g),d=v.substr(g+1)):
(c=v,d=""),f=decodeURIComponent(c),p=decodeURIComponent(d),n(s,f)?i(s[f])?
s[f].push(p):s[f]=[s[f],p]:s[f]=p}return s};var i=Array.isArray||function(t){return"
[object Array]"===Object.prototype.toString.call(t)}},{}],29:[function(t,e,r){"use
strict";function n(t,e){if(t.map)return t.map(e);for(var r=
[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=function(t){switch(typeof t)
{case"string":return t;case"boolean":return t?"true":"false";case"number":return
isFinite(t)?t:"";default:return""}};e.exports=function(t,e,r,a){return
e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(s(t),function(s){var
a=encodeURIComponent(i(s))+r;return o(t[s])?n(t[s],function(t){return
a+encodeURIComponent(i(t))}).join(e):a+encodeURIComponent(i(t[s]))}).join(e):a?
encodeURIComponent(i(a))+r+encodeURIComponent(i(t)):""};var
o=Array.isArray||function(t){return"[object
Array]"===Object.prototype.toString.call(t)},s=Object.keys||function(t){var e=
[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},
{}],30:[function(t,e,r){"use
strict";r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},
{"./decode":28,"./encode":29}],31:[function(t,e,r){"use
strict";e.exports=function(t,e,r){var n,i=t.length;if(!(e>=i||0===r)){r=e+r>i?ie:r;var o=i-r;for(n=e;n<o;++n)t[n]=t[n+r];t.length=o}}},{}],32:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0,r.Loader=void 0;var o="function"==typeof
Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t)
{return t&&"function"==typeof
Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function()
{function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("mini-signals"),u=n(a),h=t("parseuri"),l=n(h),c=t("./async"),d=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}(c),f=t("./Resource"),p=/(#[\w-]+)?
$/,v=r.Loader=function(){function t(){var e=this,r=arguments.length>0&&void
0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:10;i(this,t),this.baseUrl=r,this.progress=0,this.loading=!1,this.defaul
tQueryString="",this._beforeMiddleware=[],this._afterMiddleware=
[],this._resourcesParsing=[],this._boundLoadResource=function(t,r){return
e._loadResource(t,r)},this._queue=d.queue(this._boundLoadResource,n),this._queue.pau
se(),this.resources={},this.onProgress=new u.default,this.onError=new
u.default,this.onLoad=new u.default,this.onStart=new u.default,this.onComplete=new
u.default;for(var
o=0;o<t._defaultBeforeMiddleware.length;++o)this.pre(t._defaultBeforeMiddleware[o]);
5/9/20, 12:55 PM
Page 11 of 181
for(var
s=0;s<t._defaultAfterMiddleware.length;++s)this.use(t._defaultAfterMiddleware[s])}re
turn t.prototype.add=function(t,e,r,n){if(Array.isArray(t)){for(var
i=0;i<t.length;++i)this.add(t[i]);return this}if("object"===(void
0===t?"undefined":o(t))&&
(n=e||t.callback||t.onComplete,r=t,e=t.url,t=t.name||t.key||t.url),"string"!=typeof
e&&(n=r,r=e,e=t),"string"!=typeof e)throw new Error("No url passed to add resource
to loader.");if("function"==typeof r&&(n=r,r=null),this.loading&&
(!r||!r.parentResource))throw new Error("Cannot add resources while the loader is
running.");if(this.resources[t])throw new Error('Resource named "'+t+'" already
exists.');if(e=this._prepareUrl(e),this.resources[t]=new
f.Resource(t,e,r),"function"==typeof
n&&this.resources[t].onAfterMiddleware.once(n),this.loading){for(var
s=r.parentResource,a=
[],u=0;u<s.children.length;++u)s.children[u].isComplete||a.push(s.children[u]);var
h=s.progressChunk*
(a.length+1),l=h/(a.length+2);s.children.push(this.resources[t]),s.progressChunk=l;f
or(var
c=0;c<a.length;++c)a[c].progressChunk=l;this.resources[t].progressChunk=l}return
this._queue.push(this.resources[t]),this},t.prototype.pre=function(t){return
this._beforeMiddleware.push(t),this},t.prototype.use=function(t){return
this._afterMiddleware.push(t),this},t.prototype.reset=function()
{this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var t in
this.resources){var
e=this.resources[t];e._onLoadBinding&&e._onLoadBinding.detach(),e.isLoading&&e.abort
()}return this.resources={},this},t.prototype.load=function(t){if("function"==typeof
t&&this.onComplete.once(t),this.loading)return
this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var
e=this._queue._tasks.length,r=100/e,n=0;n<this._queue._tasks.length;++n)this._queue.
_tasks[n].data.progressChunk=r;this._onStart(),this._queue.resume()}return
this},t.prototype._prepareUrl=function(t){var e=(0,l.default)(t,
{strictMode:!0}),r=void 0;if(r=e.protocol||!e.path||0===t.indexOf("//")?
t:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length1&&"/"!==t.charAt(0)?this.baseUrl+"/"+t:this.baseUrl+t,this.defaultQueryString){var
n=p.exec(r)[0];r=r.substr(0,r.length-n.length),-1!==r.indexOf("?")?
r+="&"+this.defaultQueryString:r+="?"+this.defaultQueryString,r+=n}return
r},t.prototype._loadResource=function(t,e){var
r=this;t._dequeue=e,d.eachSeries(this._beforeMiddleware,function(e,n)
{e.call(r,t,function(){n(t.isComplete?{}:null)})},function(){t.isComplete?
r._onLoad(t):
(t._onLoadBinding=t.onComplete.once(r._onLoad,r),t.load())},!0)},t.prototype._onStar
t=function()
{this.progress=0,this.loading=!0,this.onStart.dispatch(this)},t.prototype._onComplet
e=function()
{this.progress=100,this.loading=!1,this.onComplete.dispatch(this,this.resources)},t.
prototype._onLoad=function(t){var
e=this;t._onLoadBinding=null,this._resourcesParsing.push(t),t._dequeue(),d.eachSerie
s(this._afterMiddleware,function(r,n){r.call(e,t,n)},function()
{t.onAfterMiddleware.dispatch(t),e.progress=Math.min(100,e.progress+t.progressChunk)
,e.onProgress.dispatch(e,t),t.error?
e.onError.dispatch(t.error,e,t):e.onLoad.dispatch(e,t),e._resourcesParsing.splice(e.
_resourcesParsing.indexOf(t),1),e._queue.idle()&&0===e._resourcesParsing.length&&e._
onComplete()},!0)},s(t,[{key:"concurrency",get:function(){return
this._queue.concurrency},set:function(t){this._queue.concurrency=t}}]),t}
();v._defaultBeforeMiddleware=[],v._defaultAfterMiddleware=[],v.pre=function(t)
{return v._defaultBeforeMiddleware.push(t),v},v.use=function(t){return
v._defaultAfterMiddleware.push(t),v}},{"./Resource":33,"./async":34,"minisignals":5,"parse-uri":7}],33:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(){}function s(t,e,r)
5/9/20, 12:55 PM
Page 12 of 181
{e&&0===e.indexOf(".")&&(e=e.substring(1)),e&&(t[e]=r)}function a(t){return
t.toString().replace("object ","")}r.__esModule=!0,r.Resource=void 0;var
u=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("parse-uri"),l=n(h),c=t("minisignals"),d=n(c),f=!(!window.XDomainRequest||"withCredentials"in new
XMLHttpRequest),p=null,v=r.Resource=function(){function t(e,r,n)
{if(i(this,t),"string"!=typeof e||"string"!=typeof r)throw new Error("Both name and
url are required for constructing a resource.");n=n||
{},this._flags=0,this._setFlag(t.STATUS_FLAGS.DATA_URL,0===r.indexOf("data:")),this.
name=e,this.url=r,this.extension=this._getExtension(),this.data=null,this.crossOrigi
n=!0===n.crossOrigin?"anonymous":n.crossOrigin,this.timeout=n.timeout||0,this.loadTy
pe=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.meta
data||{},this.error=null,this.xhr=null,this.children=
[],this.type=t.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=o,this._onLoadBinding
=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundO
nError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),th
is._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError
.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAb
ort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this
.onStart=new d.default,this.onProgress=new d.default,this.onComplete=new
d.default,this.onAfterMiddleware=new d.default}return
t.setExtensionLoadType=function(e,r)
{s(t._loadTypeMap,e,r)},t.setExtensionXhrType=function(e,r)
{s(t._xhrTypeMap,e,r)},t.prototype.complete=function()
{this._clearEvents(),this._finish()},t.prototype.abort=function(e){if(!this.error)
{if(this.error=new Error(e),this._clearEvents(),this.xhr)this.xhr.abort();else
if(this.xdr)this.xdr.abort();else
if(this.data)if(this.data.src)this.data.src=t.EMPTY_GIF;else
for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish(
)}},t.prototype.load=function(e){var r=this;if(!this.isLoading)
{if(this.isComplete)return void(e&&setTimeout(function(){return
e(r)},1));switch(e&&this.onComplete.once(e),this._setFlag(t.STATUS_FLAGS.LOADING,!0)
,this.onStart.dispatch(this),!1!==this.crossOrigin&&"string"==typeof
this.crossOrigin||
(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case
t.LOAD_TYPE.IMAGE:this.type=t.TYPE.IMAGE,this._loadElement("image");break;case
t.LOAD_TYPE.AUDIO:this.type=t.TYPE.AUDIO,this._loadSourceElement("audio");break;case
t.LOAD_TYPE.VIDEO:this.type=t.TYPE.VIDEO,this._loadSourceElement("video");break;case
t.LOAD_TYPE.XHR:default:f&&this.crossOrigin?
this._loadXdr():this._loadXhr()}}},t.prototype._hasFlag=function(t){return 0!=
(this._flags&t)},t.prototype._setFlag=function(t,e){this._flags=e?
this._flags|t:this._flags&~t},t.prototype._clearEvents=function()
{clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&
(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventL
istener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this
._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComp
lete,!1)),this.xhr&&(this.xhr.removeEventListener?
(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEvent
Listener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",
this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgr
ess,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):
(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onl
oad=null))},t.prototype._finish=function(){if(this.isComplete)throw new
Error("Complete called again for an already completed
resource.");this._setFlag(t.STATUS_FLAGS.COMPLETE,!0),this._setFlag(t.STATUS_FLAGS.L
OADING,!1),this.onComplete.dispatch(this)},t.prototype._loadElement=function(t)
{this.metadata.loadElement?this.data=this.metadata.loadElement:"image"===t&&void
0!==window.Image?this.data=new
5/9/20, 12:55 PM
Page 13 of 181
Image:this.data=document.createElement(t),this.crossOrigin&&
(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||
(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),t
his.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener(
"progress",this._boundOnProgress,!1),this.timeout&&
(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},t.prototype._loa
dSourceElement=function(t){if(this.metadata.loadElement?
this.data=this.metadata.loadElement:"audio"===t&&void 0!==window.Audio?this.data=new
Audio:this.data=document.createElement(t),null===this.data)return void
this.abort("Unsupported element: "+t);if(this.crossOrigin&&
(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCo
coonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else
if(Array.isArray(this.url))for(var
e=this.metadata.mimeType,r=0;r<this.url.length;++r)this.data.appendChild(this._creat
eSource(t,this.url[r],Array.isArray(e)?e[r]:e));else{var
n=this.metadata.mimeType;this.data.appendChild(this._createSource(t,this.url,Array.i
sArray(n)?
n[0]:n))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEven
tListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this.
_boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete
,!1),this.data.load(),this.timeout&&
(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},t.prototype._loa
dXhr=function(){"string"!=typeof this.xhrType&&
(this.xhrType=this._determineXhrType());var e=this.xhr=new
XMLHttpRequest;e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===t.XHR
_RESPONSE_TYPE.JSON||this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT?
e.responseType=t.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListen
er("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTi
meout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("p
rogress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1
),e.send()},t.prototype._loadXdr=function(){"string"!=typeof this.xhrType&&
(this.xhrType=this._determineXhrType());var t=this.xhr=new
XDomainRequest;t.timeout=this.timeout||5e3,t.onerror=this._boundXhrOnError,t.ontimeo
ut=this._boundXhrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXh
rOnLoad,t.open("GET",this.url,!0),setTimeout(function(){return
t.send()},1)},t.prototype._createSource=function(t,e,r){r||
(r=t+"/"+this._getExtension(e));var n=document.createElement("source");return
n.src=e,n.type=r,n},t.prototype._onError=function(t){this.abort("Failed to load
element using: "+t.target.nodeName)},t.prototype._onProgress=function(t)
{t&&t.lengthComputable&&this.onProgress.dispatch(this,t.loaded/t.total)},t.prototype
._onTimeout=function(){this.abort("Load timed
out.")},t.prototype._xhrOnError=function(){var t=this.xhr;this.abort(a(t)+" Request
failed. Status: "+t.status+', text:
"'+t.statusText+'"')},t.prototype._xhrOnTimeout=function(){var
t=this.xhr;this.abort(a(t)+" Request timed
out.")},t.prototype._xhrOnAbort=function(){var t=this.xhr;this.abort(a(t)+" Request
was aborted by the user.")},t.prototype._xhrOnLoad=function(){var
e=this.xhr,r="",n=void 0===e.status?
200:e.status;if(""!==e.responseType&&"text"!==e.responseType&&void
0!==e.responseType||(r=e.responseText),0===n&&
(r.length>0||e.responseType===t.XHR_RESPONSE_TYPE.BUFFER)?n=200:1223===n&&
(n=204),2!=(n/100|0))return void this.abort("["+e.status+"] "+e.statusText+":
"+e.responseURL);if(this.xhrType===t.XHR_RESPONSE_TYPE.TEXT)this.data=r,this.type=t.
TYPE.TEXT;else
if(this.xhrType===t.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(r),this.type=t.T
YPE.JSON}catch(t){return void this.abort("Error trying to parse loaded json:
"+t)}else if(this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT)try{if(window.DOMParser)
{var i=new DOMParser;this.data=i.parseFromString(r,"text/xml")}else{var
o=document.createElement("div");o.innerHTML=r,this.data=o}this.type=t.TYPE.XML}catch
(t){return void this.abort("Error trying to parse loaded xml: "+t)}else
5/9/20, 12:55 PM
Page 14 of 181
this.data=e.response||r;this.complete()},t.prototype._determineCrossOrigin=function(
t,e)
{if(0===t.indexOf("data:"))return"";if(window.origin!==window.location.origin)return
"anonymous";e=e||window.location,p||(p=document.createElement("a")),p.href=t,t=
(0,l.default)(p.href,{strictMode:!0});var
r=!t.port&&""===e.port||t.port===e.port,n=t.protocol?t.protocol+":":"";return
t.host===e.hostname&&r&&n===e.protocol?"":"anonymous"},t.prototype._determineXhrType
=function(){return
t._xhrTypeMap[this.extension]||t.XHR_RESPONSE_TYPE.TEXT},t.prototype._determineLoadT
ype=function(){return
t._loadTypeMap[this.extension]||t.LOAD_TYPE.XHR},t.prototype._getExtension=function(
){var t=this.url,e="";if(this.isDataUrl){var
r=t.indexOf("/");e=t.substring(r+1,t.indexOf(";",r))}else{var
n=t.indexOf("?"),i=t.indexOf("#"),o=Math.min(n>-1?n:t.length,i>-1?
i:t.length);t=t.substring(0,o),e=t.substring(t.lastIndexOf(".")+1)}return
e.toLowerCase()},t.prototype._getMimeFromXhrType=function(e){switch(e){case
t.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case
t.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case
t.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case
t.XHR_RESPONSE_TYPE.JSON:return"application/json";case
t.XHR_RESPONSE_TYPE.DEFAULT:case
t.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},u(t,
[{key:"isDataUrl",get:function(){return this._hasFlag(t.STATUS_FLAGS.DATA_URL)}},
{key:"isComplete",get:function(){return this._hasFlag(t.STATUS_FLAGS.COMPLETE)}},
{key:"isLoading",get:function(){return this._hasFlag(t.STATUS_FLAGS.LOADING)}}]),t}
();v.STATUS_FLAGS={NONE:0,DATA_URL:1,COMPLETE:2,LOADING:4},v.TYPE=
{UNKNOWN:0,JSON:1,XML:2,IMAGE:3,AUDIO:4,VIDEO:5,TEXT:6},v.LOAD_TYPE=
{XHR:1,IMAGE:2,AUDIO:3,VIDEO:4},v.XHR_RESPONSE_TYPE=
{DEFAULT:"text",BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json",TEX
T:"text"},v._loadTypeMap=
{gif:v.LOAD_TYPE.IMAGE,png:v.LOAD_TYPE.IMAGE,bmp:v.LOAD_TYPE.IMAGE,jpg:v.LOAD_TYPE.I
MAGE,jpeg:v.LOAD_TYPE.IMAGE,tif:v.LOAD_TYPE.IMAGE,tiff:v.LOAD_TYPE.IMAGE,webp:v.LOAD
_TYPE.IMAGE,tga:v.LOAD_TYPE.IMAGE,svg:v.LOAD_TYPE.IMAGE,"svg+xml":v.LOAD_TYPE.IMAGE,
mp3:v.LOAD_TYPE.AUDIO,ogg:v.LOAD_TYPE.AUDIO,wav:v.LOAD_TYPE.AUDIO,mp4:v.LOAD_TYPE.VI
DEO,webm:v.LOAD_TYPE.VIDEO},v._xhrTypeMap=
{xhtml:v.XHR_RESPONSE_TYPE.DOCUMENT,html:v.XHR_RESPONSE_TYPE.DOCUMENT,htm:v.XHR_RESP
ONSE_TYPE.DOCUMENT,xml:v.XHR_RESPONSE_TYPE.DOCUMENT,tmx:v.XHR_RESPONSE_TYPE.DOCUMENT
,svg:v.XHR_RESPONSE_TYPE.DOCUMENT,tsx:v.XHR_RESPONSE_TYPE.DOCUMENT,gif:v.XHR_RESPONS
E_TYPE.BLOB,png:v.XHR_RESPONSE_TYPE.BLOB,bmp:v.XHR_RESPONSE_TYPE.BLOB,jpg:v.XHR_RESP
ONSE_TYPE.BLOB,jpeg:v.XHR_RESPONSE_TYPE.BLOB,tif:v.XHR_RESPONSE_TYPE.BLOB,tiff:v.XHR
_RESPONSE_TYPE.BLOB,webp:v.XHR_RESPONSE_TYPE.BLOB,tga:v.XHR_RESPONSE_TYPE.BLOB,json:
v.XHR_RESPONSE_TYPE.JSON,text:v.XHR_RESPONSE_TYPE.TEXT,txt:v.XHR_RESPONSE_TYPE.TEXT,
ttf:v.XHR_RESPONSE_TYPE.BUFFER,otf:v.XHR_RESPONSE_TYPE.BUFFER},v.EMPTY_GIF="data:ima
ge/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",void
0!==e&&(e.exports.default=v)},{"mini-signals":5,"parse-uri":7}],34:[function(t,e,r)
{"use strict";function n(){}function i(t,e,r,n){var i=0,o=t.length;!function s(a)
{if(a||i===o)return void(r&&r(a));n?setTimeout(function()
{e(t[i++],s)},1):e(t[i++],s)}()}function o(t){return function(){if(null===t)throw
new Error("Callback was already called.");var
e=t;t=null,e.apply(this,arguments)}}function s(t,e){function r(t,e,r)
{if(null!=r&&"function"!=typeof r)throw new Error("task callback must be a
function");if(a.started=!0,null==t&&a.idle())return void setTimeout(function()
{return a.drain()},1);var i={data:t,callback:"function"==typeof r?r:n};e?
a._tasks.unshift(i):a._tasks.push(i),setTimeout(function(){return
a.process()},1)}function i(t){return function(){s-
=1,t.callback.apply(t,arguments),null!=arguments[0]&&a.error(arguments[0],t.data),s<
=a.concurrencya.buffer&&a.unsaturated(),a.idle()&&a.drain(),a.process()}}if(null==e)e=1;else
if(0===e)throw new Error("Concurrency must not be zero");var s=0,a={_tasks:
[],concurrency:e,saturated:n,unsaturated:n,buffer:e/4,empty:n,drain:n,error:n,starte
5/9/20, 12:55 PM
Page 15 of 181
d:!1,paused:!1,push:function(t,e){r(t,!1,e)},kill:function()
{s=0,a.drain=n,a.started=!1,a._tasks=[]},unshift:function(t,e)
{r(t,!0,e)},process:function(){for(;!a.paused&&s<a.concurrency&&a._tasks.length;)
{var
e=a._tasks.shift();0===a._tasks.length&&a.empty(),s+=1,s===a.concurrency&&a.saturate
d(),t(e.data,o(i(e)))}},length:function(){return a._tasks.length},running:function()
{return s},idle:function(){return a._tasks.length+s===0},pause:function()
{!0!==a.paused&&(a.paused=!0)},resume:function(){if(!1!==a.paused)
{a.paused=!1;for(var t=1;t<=a.concurrency;t++)a.process()}}};return
a}r.__esModule=!0,r.eachSeries=i,r.queue=s},{}],35:[function(t,e,r){"use
strict";function n(t){for(var e="",r=0;r<t.length;){for(var n=[0,0,0],o=
[0,0,0,0],s=0;s<n.length;++s)r<t.length?
n[s]=255&t.charCodeAt(r++):n[s]=0;o[0]=n[0]>>2,o[1]=(3&n[0])<<4|n[1]>>4,o[2]=
(15&n[1])<<2|n[2]>>6,o[3]=63&n[2];switch(r-(t.length-1)){case
2:o[3]=64,o[2]=64;break;case 1:o[3]=64}for(var
a=0;a<o.length;++a)e+=i.charAt(o[a])}return e}r.__esModule=!0,r.encodeBinary=n;var
i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";void 0!==e&&
(e.exports.default=n)},{}],36:[function(t,e,r){"use strict";var
n=t("./Loader").Loader,i=t("./Resource").Resource,o=t("./async"),s=t("./b64");n.Reso
urce=i,n.async=o,n.encodeBinary=s,n.base64=s,e.exports=n,e.exports.Loader=n,e.export
s.default=n},{"./Loader":32,"./Resource":33,"./async":34,"./b64":35}],37:
[function(t,e,r){"use strict";function n(){return function(t,e){if(!t.data)return
void
e();if(t.xhr&&t.xhrType===i.Resource.XHR_RESPONSE_TYPE.BLOB)if(window.Blob&&"string"
!=typeof t.data){if(0===t.data.type.indexOf("image")){var
r=s.createObjectURL(t.data);return t.blob=t.data,t.data=new
Image,t.data.src=r,t.type=i.Resource.TYPE.IMAGE,void(t.data.onload=function()
{s.revokeObjectURL(r),t.data.onload=null,e()})}}else{var
n=t.xhr.getResponseHeader("content-type");if(n&&0===n.indexOf("image"))return
t.data=new Image,t.data.src="data:"+n+";base64,"+(0,o.encodeBinary)
(t.xhr.responseText),t.type=i.Resource.TYPE.IMAGE,void(t.data.onload=function()
{t.data.onload=null,e()})}e()}}r.__esModule=!0,r.blobMiddlewareFactory=n;var
i=t("../../Resource"),o=t("../../b64"),s=window.URL||window.webkitURL},
{"../../Resource":33,"../../b64":35}],38:[function(t,e,r){"use strict";function n()
{this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,t
his.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null
,this.path=null,this.href=null}function i(t,e,r){if(t&&h.isObject(t)&&t instanceof
n)return t;var i=new n;return i.parse(t,e,r),i}function o(t){return h.isString(t)&&
(t=i(t)),t instanceof n?t.format():n.prototype.format.call(t)}function s(t,e){return
i(t,!1,!0).resolve(e)}function a(t,e){return t?i(t,!1,!0).resolveObject(e):e}var
u=t("punycode"),h=t("./util");r.parse=i,r.resolve=s,r.resolveObject=a,r.format=o,r.U
rl=n;var l=/^([a-z0-9.+-]+:)/i,c=/:[0-9]*$/,d=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?
$/,f=["<",">",'"',"`"," ","\r","\n","\t"],p=["{","}","|","\\","^","`"].concat(f),v=
["'"].concat(p),g=["%","/","?",";","#"].concat(v),y=["/","?","#"],m=/^[+a-z0-9A-Z_-]
{0,63}$/,_=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,b={javascript:!0,"javascript:":!0},x=
{javascript:!0,"javascript:":!0},T=
{http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:
":!0,"file:":!0},w=t("querystring");n.prototype.parse=function(t,e,r)
{if(!h.isString(t))throw new TypeError("Parameter 'url' must be a string, not
"+typeof t);var
n=t.indexOf("?"),i=-1!==n&&n<t.indexOf("#")?"?":"#",o=t.split(i),s=/\\/g;o[0]=o[0].r
eplace(s,"/"),t=o.join(i);var a=t;if(a=a.trim(),!r&&1===t.split("#").length){var
c=d.exec(a);if(c)return this.path=a,this.href=a,this.pathname=c[1],c[2]?
(this.search=c[2],this.query=e?
w.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query=
{}),this}var f=l.exec(a);if(f){f=f[0];var
p=f.toLowerCase();this.protocol=p,a=a.substr(f.length)}if(r||f||a.match(/^\/\/[^@\/]
+@[^@\/]+/)){var E="//"===a.substr(0,2);!E||f&&x[f]||
(a=a.substr(2),this.slashes=!0)}if(!x[f]&&(E||f&&!T[f])){for(var
S=-1,O=0;O<y.length;O++){var M=a.indexOf(y[O]);-1!==M&&(-1===S||M<S)&&(S=M)}var
5/9/20, 12:55 PM
Page 16 of 181
P,C;C=-1===S?a.lastIndexOf("@"):a.lastIndexOf("@",S),-1!==C&&
(P=a.slice(0,C),a=a.slice(C+1),this.auth=decodeURIComponent(P)),S=-1;for(var
O=0;O<g.length;O++){var M=a.indexOf(g[O]);-1!==M&&(-1===S||M<S)&&(S=M)}-1===S&&
(S=a.length),this.host=a.slice(0,S),a=a.slice(S),this.parseHost(),this.hostname=this
.hostname||"";var R="
["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var
A=this.hostname.split(/\./),O=0,I=A.length;O<I;O++){var D=A[O];if(D&&!D.match(m))
{for(var L="",N=0,B=D.length;N<B;N++)D.charCodeAt(N)>127?
L+="x":L+=D[N];if(!L.match(m)){var k=A.slice(0,O),F=A.slice(O+1),j=D.match(_);j&&
(k.push(j[1]),F.unshift(j[2])),F.length&&
(a="/"+F.join(".")+a),this.hostname=k.join(".");break}}}
this.hostname.length>255?
this.hostname="":this.hostname=this.hostname.toLowerCase(),R||
(this.hostname=u.toASCII(this.hostname));var
U=this.port?":"+this.port:"",X=this.hostname||"";this.host=X+U,this.href+=this.host,
R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&
(a="/"+a))}if(!b[p])for(var O=0,I=v.length;O<I;O++){var G=v[O];if(-1!==a.indexOf(G))
{var W=encodeURIComponent(G);W===G&&(W=escape(G)),a=a.split(G).join(W)}}var
H=a.indexOf("#");-1!==H&&(this.hash=a.substr(H),a=a.slice(0,H));var
Y=a.indexOf("?");if(-1!==Y?(this.search=a.substr(Y),this.query=a.substr(Y+1),e&&
(this.query=w.parse(this.query)),a=a.slice(0,Y)):e&&(this.search="",this.query=
{}),a&&(this.pathname=a),T[p]&&this.hostname&&!this.pathname&&
(this.pathname="/"),this.pathname||this.search){var
U=this.pathname||"",V=this.search||"";this.path=U+V}return
this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&
(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var
e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?
i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"
["+this.hostname+"]"),this.port&&
(i+=":"+this.port)),this.query&&h.isObject(this.query)&&Object.keys(this.query).leng
th&&(o=w.stringify(this.query));var s=this.search||o&&"?"+o||"";return
e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||T[e])&&!1!==i?(i="//"+
(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&
(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,function(t){return
encodeURIComponent(t)}),s=s.replace("#","%23"),e+i+r+s+n},n.prototype.resolve=functi
on(t){return
this.resolveObject(i(t,!1,!0)).format()},n.prototype.resolveObject=function(t)
{if(h.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new
n,i=Object.keys(this),o=0;o<i.length;o++){var
s=i[o];r[s]=this[s]}if(r.hash=t.hash,""===t.href)return
r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var
a=Object.keys(t),u=0;u<a.length;u++){var l=a[u];"protocol"!==l&&(r[l]=t[l])}return
T[r.protocol]&&r.hostname&&!r.pathname&&
(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol)
{if(!T[t.protocol]){for(var c=Object.keys(t),d=0;d<c.length;d++){var
f=c[d];r[f]=t[f]}return
r.href=r.format(),r}if(r.protocol=t.protocol,t.host||x[t.protocol])r.pathname=t.path
name;else{for(var p=(t.pathname||"").split("/");p.length&&!
(t.host=p.shift()););t.host||(t.host=""),t.hostname||
(t.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join
("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostnam
e=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var
v=r.pathname||"",g=r.search||"";r.path=v+g}return
r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var
y=r.pathname&&"/"===r.pathname.charAt(0),m=t.host||t.pathname&&"/"===t.pathname.char
At(0),_=m||y||r.host&&t.pathname,b=_,w=r.pathname&&r.pathname.split("/")||
[],p=t.pathname&&t.pathname.split("/")||[],E=r.protocol&&!T[r.protocol];if(E&&
(r.hostname="",r.port=null,r.host&&(""===w[0]?
w[0]=r.host:w.unshift(r.host)),r.host="",t.protocol&&
(t.hostname=null,t.port=null,t.host&&(""===p[0]?
5/9/20, 12:55 PM
Page 17 of 181
p[0]=t.host:p.unshift(t.host)),t.host=null),_=_&&
(""===p[0]||""===w[0])),m)r.host=t.host||""===t.host?
t.host:r.host,r.hostname=t.hostname||""===t.hostname?
t.hostname:r.hostname,r.search=t.search,r.query=t.query,w=p;else if(p.length)w||(w=
[]),w.pop(),w=w.concat(p),r.search=t.search,r.query=t.query;else
if(!h.isNullOrUndefined(t.search)){if(E){r.hostname=r.host=w.shift();var S=!!
(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&
(r.auth=S.shift(),r.host=r.hostname=S.shift())}return
r.search=t.search,r.query=t.query,h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=
(r.pathname?r.pathname:"")+(r.search?
r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?
r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var O=w.slice(-1)[0],M=
(r.host||t.host||w.length>1)&&("."===O||".."===O)||""===O,P=0,C=w.length;C>=0;C--
)O=w[C],"."===O?w.splice(C,1):".."===O?(w.splice(C,1),P++):P&&(w.splice(C,1),P--
);if(!_&&!b)for(;P--
;P)w.unshift("..");!_||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),M&&"/"!=
=w.join("/").substr(-1)&&w.push("");var
R=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(E){r.hostname=r.host=R?"":w.length?
w.shift():"";var S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&
(r.auth=S.shift(),r.host=r.hostname=S.shift())}return
_=_||r.host&&w.length,_&&!R&&w.unshift(""),w.length?r.pathname=w.join("/"):
(r.pathname=null,r.path=null),h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=
(r.pathname?r.pathname:"")+(r.search?
r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format()
,r},n.prototype.parseHost=function(){var t=this.host,e=c.exec(t);e&&
(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&
(this.hostname=t)}},{"./util":39,punycode:27,querystring:30}],39:[function(t,e,r)
{"use strict";e.exports={isString:function(t){return"string"==typeof
t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t)
{return null===t},isNullOrUndefined:function(t){return null==t}}},{}],40:
[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var o=t("../core"),s=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(o),a=t("ismobilejs"),u=n(a),h=t("./accessibleTarget"),l=n(h);s.utils.mixins.delayMi
xin(s.DisplayObject.prototype,l.default);var c=100,d=0,f=0,p=2,v=function(){function
t(e)
{i(this,t),!u.default.tablet&&!u.default.phone||navigator.isCocoonJS||this.createTou
chHook();var
r=document.createElement("div");r.style.width=c+"px",r.style.height=c+"px",r.style.p
osition="absolute",r.style.top=d+"px",r.style.left=f+"px",r.style.zIndex=p,this.div=
r,this.pool=[],this.renderId=0,this.debug=!1,this.renderer=e,this.children=
[],this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bi
nd(this),this.isActive=!1,this.isMobileAccessabillity=!1,window.addEventListener("ke
ydown",this._onKeyDown,!1)}return t.prototype.createTouchHook=function(){var
t=this,e=document.createElement("button");e.style.width="1px",e.style.height="1px",e
.style.position="absolute",e.style.top="-1000px",e.style.left="-1000px",e.style.zInd
ex=2,e.style.backgroundColor="#FF0000",e.title="HOOK
DIV",e.addEventListener("focus",function()
{t.isMobileAccessabillity=!0,t.activate(),document.body.removeChild(e)}),document.bo
dy.appendChild(e)},t.prototype.activate=function(){this.isActive||
(this.isActive=!0,window.document.addEventListener("mousemove",this._onMouseMove,!0)
,window.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrend
er",this.update,this),this.renderer.view.parentNode&&this.renderer.view.parentNode.a
ppendChild(this.div))},t.prototype.deactivate=function()
{this.isActive&&!this.isMobileAccessabillity&&
(this.isActive=!1,window.document.removeEventListener("mousemove",this._onMouseMove,
!0),window.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postren
der",this.update),this.div.parentNode&&this.div.parentNode.removeChild(this.div))},t
5/9/20, 12:55 PM
Page 18 of 181
.prototype.updateAccessibleObjects=function(t){if(t.visible)
{t.accessible&&t.interactive&&
(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);for(var
e=t.children,r=0;r<e.length;r++)this.updateAccessibleObjects(e[r])}},t.prototype.upd
ate=function(){if(this.renderer.renderingToScreen)
{this.updateAccessibleObjects(this.renderer._lastObjectRendered);var
t=this.renderer.view.getBoundingClientRect(),e=t.width/this.renderer.width,r=t.heigh
t/this.renderer.height,n=this.div;n.style.left=t.left+"px",n.style.top=t.top+"px",n.
style.width=this.renderer.width+"px",n.style.height=this.renderer.height+"px";for(va
r i=0;i<this.children.length;i++){var
o=this.children[i];if(o.renderId!==this.renderId)o._accessibleActive=!1,s.utils.remo
veItems(this.children,i,1),this.div.removeChild(o._accessibleDiv),this.pool.push(o._
accessibleDiv),o._accessibleDiv=null,i-
-,0===this.children.length&&this.deactivate();else{n=o._accessibleDiv;var
a=o.hitArea,u=o.worldTransform;o.hitArea?(n.style.left=
(u.tx+a.x*u.a)*e+"px",n.style.top=
(u.ty+a.y*u.d)*r+"px",n.style.width=a.width*u.a*e+"px",n.style.height=a.height*u.d*r
+"px"):
(a=o.getBounds(),this.capHitArea(a),n.style.left=a.x*e+"px",n.style.top=a.y*r+"px",n
.style.width=a.width*e+"px",n.style.height=a.height*r+"px",n.title!==o.accessibleTit
le&&null!==o.accessibleTitle&&(n.title=o.accessibleTitle),n.getAttribute("arialabel")!==o.accessibleHint&&null!==o.accessibleHint&&n.setAttribute("arialabel",o.accessibleHint))}}this.renderId++}},t.prototype.capHitArea=function(t)
{t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&
(t.height+=t.y,t.y=0),t.x+t.width>this.renderer.width&&(t.width=this.renderer.widtht.x),t.y+t.height>this.renderer.height&&(t.height=this.renderer.heightt.y)},t.prototype.addChild=function(t){var e=this.pool.pop();e||
(e=document.createElement("button"),e.style.width=c+"px",e.style.height=c+"px",e.sty
le.backgroundColor=this.debug?"rgba(255,0,0,0.5)":"transparent",e.style.position="ab
solute",e.style.zIndex=p,e.style.borderStyle="none",navigator.userAgent.toLowerCase(
).indexOf("chrome")>-1?e.setAttribute("aria-live","off"):e.setAttribute("arialive","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("ariarelevant","additions"):e.setAttribute("ariarelevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventLis
tener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusO
ut.bind(this))),t.accessibleTitle&&null!==t.accessibleTitle?
e.title=t.accessibleTitle:t.accessibleHint&&null!==t.accessibleHint||
(e.title="displayObject
"+t.tabIndex),t.accessibleHint&&null!==t.accessibleHint&&e.setAttribute("arialabel",t.accessibleHint),t._accessibleActive=!0,t._accessibleDiv=e,e.displayObject=t
,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIn
dex=t.tabIndex},t.prototype._onClick=function(t){var
e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"click",e
.eventData)},t.prototype._onFocus=function(t){t.target.getAttribute("arialive","off")||t.target.setAttribute("aria-live","assertive");var
e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"mouseove
r",e.eventData)},t.prototype._onFocusOut=function(t){t.target.getAttribute("arialive","off")||t.target.setAttribute("aria-live","polite");var
e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"mouseout
",e.eventData)},t.prototype._onKeyDown=function(t)
{9===t.keyCode&&this.activate()},t.prototype._onMouseMove=function(t)
{0===t.movementX&&0===t.movementY||this.deactivate()},t.prototype.destroy=function()
{this.div=null;for(var
t=0;t<this.children.length;t++)this.children[t].div=null;window.document.removeEvent
Listener("mousemove",this._onMouseMove,!0),window.removeEventListener("keydown",this
._onKeyDown),this.pool=null,this.children=null,this.renderer=null},t}
();r.default=v,s.WebGLRenderer.registerPlugin("accessibility",v),s.CanvasRenderer.re
gisterPlugin("accessibility",v)},
{"../core":65,"./accessibleTarget":41,ismobilejs:4}],41:[function(t,e,r){"use
strict";r.__esModule=!0,r.default=
5/9/20, 12:55 PM
Page 19 of 181
{accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive
:!1,_accessibleDiv:!1}},{}],42:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}r.__esModule=!0;var
i=t("./accessibleTarget");Object.defineProperty(r,"accessibleTarget",
{enumerable:!0,get:function(){return n(i).default}});var
o=t("./AccessibilityManager");Object.defineProperty(r,"AccessibilityManager",
{enumerable:!0,get:function(){return n(o).default}})},
{"./AccessibilityManager":40,"./accessibleTarget":41}],43:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var o=function(){function t(t,e){for(var
r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),s=t("./autoDetectRenderer"),a=t("./display/Container"),u=n(a),h=t("./ticker"),l=t
("./settings"),c=n(l),d=t("./const"),f=function(){function t(e,r,n,o,a)
{i(this,t),"number"==typeof e&&
(e=Object.assign({width:e,height:r||c.default.RENDER_OPTIONS.height,forceCanvas:!!o,
sharedTicker:!!a},n)),this._options=e=Object.assign({autoStart:!0,sharedTicker:!1,fo
rceCanvas:!1,sharedLoader:!1},e),this.renderer=(0,s.autoDetectRenderer)
(e),this.stage=new u.default,this._ticker=null,this.ticker=e.sharedTicker?
h.shared:new h.Ticker,e.autoStart&&this.start()}return t.prototype.render=function()
{this.renderer.render(this.stage)},t.prototype.stop=function()
{this._ticker.stop()},t.prototype.start=function()
{this._ticker.start()},t.prototype.destroy=function(t,e){if(this._ticker){var
r=this._ticker;this.ticker=null,r.destroy()}this.stage.destroy(e),this.stage=null,th
is.renderer.destroy(t),this.renderer=null,this._options=null},o(t,
[{key:"ticker",set:function(t)
{this._ticker&&this._ticker.remove(this.render,this),this._ticker=t,t&&t.add(this.re
nder,this,d.UPDATE_PRIORITY.LOW)},get:function(){return this._ticker}},
{key:"view",get:function(){return this.renderer.view}},{key:"screen",get:function()
{return this.renderer.screen}}]),t}();r.default=f},
{"./autoDetectRenderer":45,"./const":46,"./display/Container":48,"./settings":101,".
/ticker":121}],44:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}function i(t,e)
{if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e)
{if(t instanceof Array){if("precision"!==t[0].substring(0,9)){var
r=t.slice(0);return r.unshift("precision "+e+" float;"),r}}else
if("precision"!==t.trim().substring(0,9))return"precision "+e+" float;\n"+t;return
t}r.__esModule=!0;var a=t("pixi-gl-core"),u=t("./settings"),h=function(t){return
t&&t.__esModule?t:{default:t}}(u),l=function(t){function e(r,o,a,u,l){return
n(this,e),i(this,t.call(this,r,s(o,l||h.default.PRECISION_VERTEX),s(a,l||h.default.P
RECISION_FRAGMENT),void 0,u))}return o(e,t),e}(a.GLShader);r.default=l},
{"./settings":101,"pixi-gl-core":15}],45:[function(t,e,r){"use strict";function n(t)
{return t&&t.__esModule?t:{default:t}}function i(t,e,r,n){var
i=t&&t.forceCanvas;return void 0!==n&&(i=n),!i&&s.isWebGLSupported()?new
l.default(t,e,r):new u.default(t,e,r)}r.__esModule=!0,r.autoDetectRenderer=i;var
o=t("./utils"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var
r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(o),a=t("./renderers/canvas/CanvasRenderer"),u=n(a),h=t("./renderers/webgl/WebGLRend
erer"),l=n(h)},
{"./renderers/canvas/CanvasRenderer":77,"./renderers/webgl/WebGLRenderer":84,"./util
s":125}],46:[function(t,e,r){"use
strict";r.__esModule=!0;r.VERSION="4.8.7",r.PI_2=2*Math.PI,r.RAD_TO_DEG=180/Math.PI,
5/9/20, 12:55 PM
Page 20 of 181
r.DEG_TO_RAD=Math.PI/180,r.RENDERER_TYPE={UNKNOWN:0,WEBGL:1,CANVAS:2},r.BLEND_MODES=
{NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR
_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,C
OLOR:15,LUMINOSITY:16,NORMAL_NPM:17,ADD_NPM:18,SCREEN_NPM:19},r.DRAW_MODES=
{POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN
:6},r.SCALE_MODES={LINEAR:0,NEAREST:1},r.WRAP_MODES=
{CLAMP:0,REPEAT:1,MIRRORED_REPEAT:2},r.GC_MODES=
{AUTO:0,MANUAL:1},r.URL_FILE_EXTENSION=/\.(\w{3,4})(?:$|\?
|#)/i,r.DATA_URI=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;
(base64))?,(.*)/i,r.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)
(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))
[^>]*>/i,r.SHAPES={POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},r.PRECISION=
{LOW:"lowp",MEDIUM:"mediump",HIGH:"highp"},r.TRANSFORM_MODE=
{STATIC:0,DYNAMIC:1},r.TEXT_GRADIENT=
{LINEAR_VERTICAL:0,LINEAR_HORIZONTAL:1},r.UPDATE_PRIORITY=
{INTERACTION:50,HIGH:25,NORMAL:0,LOW:-25,UTILITY:-50}},{}],47:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=t("../math"),o=function(){function t()
{n(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null}
return t.prototype.isEmpty=function(){return
this.minX>this.maxX||this.minY>this.maxY},t.prototype.clear=function()
{this.updateID++,this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},t.protot
ype.getRectangle=function(t){return this.minX>this.maxX||this.minY>this.maxY?
i.Rectangle.EMPTY:(t=t||new
i.Rectangle(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxXthis.minX,t.height=this.maxY-this.minY,t)},t.prototype.addPoint=function(t)
{this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.
min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},t.prototype.addQuad=function(t
){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY,o=t[0],s=t[1];e=o<e?o:e,r=s<r?
s:r,n=o>n?o:n,i=s>i?s:i,o=t[2],s=t[3],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?
s:i,o=t[4],s=t[5],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[6],s=t[7],e=o<e?
o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?
s:i,this.minX=e,this.minY=r,this.maxX=n,this.maxY=i},t.prototype.addFrame=function(t
,e,r,n,i){var
o=t.worldTransform,s=o.a,a=o.b,u=o.c,h=o.d,l=o.tx,c=o.ty,d=this.minX,f=this.minY,p=t
his.maxX,v=this.maxY,g=s*e+u*r+l,y=a*e+h*r+c;d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?
y:v,g=s*n+u*r+l,y=a*n+h*r+c,d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?
y:v,g=s*e+u*i+l,y=a*e+h*i+c,d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?
y:v,g=s*n+u*i+l,y=a*n+h*i+c,d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?
y:v,this.minX=d,this.minY=f,this.maxX=p,this.maxY=v},t.prototype.addVertices=functio
n(t,e,r,n){for(var
i=t.worldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=this.minX,d=this.minY,f=t
his.maxX,p=this.maxY,v=r;v<n;v+=2){var
g=e[v],y=e[v+1],m=o*g+a*y+h,_=u*y+s*g+l;c=m<c?m:c,d=_<d?_:d,f=m>f?m:f,p=_>p?
_:p}this.minX=c,this.minY=d,this.maxX=f,this.maxY=p},t.prototype.addBounds=function(
t){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY;this.minX=t.minX<e?
t.minX:e,this.minY=t.minY<r?t.minY:r,this.maxX=t.maxX>n?t.maxX:n,this.maxY=t.maxY>i?
t.maxY:i},t.prototype.addBoundsMask=function(t,e){var r=t.minX>e.minX?
t.minX:e.minX,n=t.minY>e.minY?t.minY:e.minY,i=t.maxX<e.maxX?
t.maxX:e.maxX,o=t.maxY<e.maxY?t.maxY:e.maxY;if(r<=i&&n<=o){var
s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?
n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t.prototype.addBoundsArea=function(t,e)
{var r=t.minX>e.x?t.minX:e.x,n=t.minY>e.y?t.minY:e.y,i=t.maxX<e.x+e.width?
t.maxX:e.x+e.width,o=t.maxY<e.y+e.height?t.maxY:e.y+e.height;if(r<=i&&n<=o){var
s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?
n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t}();r.default=o},{"../math":70}],48:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
5/9/20, 12:55 PM
Page 21 of 181
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),a=t("../utils"),u=t("./DisplayObject"),h=function(t){return t&&t.__esModule?t:
{default:t}}(u),l=function(t){function e(){n(this,e);var
r=i(this,t.call(this));return r.children=[],r}return
o(e,t),e.prototype.onChildrenChange=function(){},e.prototype.addChild=function(t)
{var e=arguments.length;if(e>1)for(var r=0;r<e;r++)this.addChild(arguments[r]);else
t.parent&&t.parent.removeChild(t),t.parent=this,t.transform._parentID=-1,this.childr
en.push(t),this._boundsID++,this.onChildrenChange(this.children.length1),t.emit("added",this);return t},e.prototype.addChildAt=function(t,e)
{if(e<0||e>this.children.length)throw new Error(t+"addChildAt: The index "+e+"
supplied is out of bounds "+this.children.length);return
t.parent&&t.parent.removeChild(t),t.parent=this,t.transform._parentID=-1,this.childr
en.splice(e,0,t),this._boundsID++,this.onChildrenChange(e),t.emit("added",this),t},e
.prototype.swapChildren=function(t,e){if(t!==e){var
r=this.getChildIndex(t),n=this.getChildIndex(e);this.children[r]=e,this.children[n]=
t,this.onChildrenChange(r<n?r:n)}},e.prototype.getChildIndex=function(t){var
e=this.children.indexOf(t);if(-1===e)throw new Error("The supplied DisplayObject
must be a child of the caller");return e},e.prototype.setChildIndex=function(t,e)
{if(e<0||e>=this.children.length)throw new Error("The index "+e+" supplied is out of
bounds "+this.children.length);var r=this.getChildIndex(t);(0,a.removeItems)
(this.children,r,1),this.children.splice(e,0,t),this.onChildrenChange(e)},e.prototyp
e.getChildAt=function(t){if(t<0||t>=this.children.length)throw new
Error("getChildAt: Index ("+t+") does not exist.");return
this.children[t]},e.prototype.removeChild=function(t){var
e=arguments.length;if(e>1)for(var
r=0;r<e;r++)this.removeChild(arguments[r]);else{var
n=this.children.indexOf(t);if(-1===n)return
null;t.parent=null,t.transform._parentID=-1,(0,a.removeItems)
(this.children,n,1),this._boundsID++,this.onChildrenChange(n),t.emit("removed",this)
}return t},e.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return
e.parent=null,e.transform._parentID=-1,(0,a.removeItems)
(this.children,t,1),this._boundsID++,this.onChildrenChange(t),e.emit("removed",this)
,e},e.prototype.removeChildren=function(){var t=arguments.length>0&&void
0!==arguments[0]?arguments[0]:0,e=arguments[1],r=t,n="number"==typeof e?
e:this.children.length,i=n-r,o=void 0;if(i>0&&i<=n)
{o=this.children.splice(r,i);for(var
s=0;s<o.length;++s)o[s].parent=null,o[s].transform&&
(o[s].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var
a=0;a<o.length;++a)o[a].emit("removed",this);return
o}if(0===i&&0===this.children.length)return[];throw new RangeError("removeChildren:
numeric values are outside the acceptable
range.")},e.prototype.updateTransform=function()
{this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAl
pha=this.alpha*this.parent.worldAlpha;for(var t=0,e=this.children.length;t<e;++t)
{var
r=this.children[t];r.visible&&r.updateTransform()}},e.prototype.calculateBounds=func
tion(){this._bounds.clear(),this._calculateBounds();for(var
t=0;t<this.children.length;t++){var e=this.children[t];e.visible&&e.renderable&&
(e.calculateBounds(),e._mask?
(e._mask.calculateBounds(),this._bounds.addBoundsMask(e._bounds,e._mask._bounds)):e.
filterArea?
this._bounds.addBoundsArea(e._bounds,e.filterArea):this._bounds.addBounds(e._bounds)
)}this._lastBoundsID=this._boundsID},e.prototype._calculateBounds=function()
5/9/20, 12:55 PM
Page 22 of 181
{},e.prototype.renderWebGL=function(t){if(this.visible&&!
(this.worldAlpha<=0)&&this.renderable)if(this._mask||this._filters)this.renderAdvanc
edWebGL(t);else{this._renderWebGL(t);for(var
e=0,r=this.children.length;e<r;++e)this.children[e].renderWebGL(t)}},e.prototype.ren
derAdvancedWebGL=function(t){t.flush();var e=this._filters,r=this._mask;if(e)
{this._enabledFilters||(this._enabledFilters=
[]),this._enabledFilters.length=0;for(var
n=0;n<e.length;n++)e[n].enabled&&this._enabledFilters.push(e[n]);this._enabledFilter
s.length&&t.filterManager.pushFilter(this,this._enabledFilters)}r&&t.maskManager.pus
hMask(this,this._mask),this._renderWebGL(t);for(var
i=0,o=this.children.length;i<o;i++)this.children[i].renderWebGL(t);t.flush(),r&&t.ma
skManager.popMask(this,this._mask),e&&this._enabledFilters&&this._enabledFilters.len
gth&&t.filterManager.popFilter()},e.prototype._renderWebGL=function(t)
{},e.prototype._renderCanvas=function(t){},e.prototype.renderCanvas=function(t)
{if(this.visible&&!(this.worldAlpha<=0)&&this.renderable)
{this._mask&&t.maskManager.pushMask(this._mask),this._renderCanvas(t);for(var
e=0,r=this.children.length;e<r;++e)this.children[e].renderCanvas(t);this._mask&&t.ma
skManager.popMask(t)}},e.prototype.destroy=function(e)
{t.prototype.destroy.call(this);var r="boolean"==typeof e?
e:e&&e.children,n=this.removeChildren(0,this.children.length);if(r)for(var
i=0;i<n.length;++i)n[i].destroy(e)},s(e,[{key:"width",get:function(){return
this.scale.x*this.getLocalBounds().width},set:function(t){var
e=this.getLocalBounds().width;this.scale.x=0!==e?t/e:1,this._width=t}},
{key:"height",get:function(){return
this.scale.y*this.getLocalBounds().height},set:function(t){var
e=this.getLocalBounds().height;this.scale.y=0!==e?t/e:1,this._height=t}}]),e}
(h.default);r.default=l,l.prototype.containerUpdateTransform=l.prototype.updateTrans
form},{"../utils":125,"./DisplayObject":49}],49:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),u=t("eventemitter3"),h=n(u),l=t("../const"),c=t("../settings"),d=n(c),f=t("./Tran
sformStatic"),p=n(f),v=t("./Transform"),g=n(v),y=t("./Bounds"),m=n(y),_=t("../math")
,b=function(t){function e(){i(this,e);var
r=o(this,t.call(this)),n=d.default.TRANSFORM_MODE===l.TRANSFORM_MODE.STATIC?
p.default:g.default;return r.tempDisplayObjectParent=null,r.transform=new
n,r.alpha=1,r.visible=!0,r.renderable=!0,r.parent=null,r.worldAlpha=1,r.filterArea=n
ull,r._filters=null,r._enabledFilters=null,r._bounds=new
m.default,r._boundsID=0,r._lastBoundsID=-1,r._boundsRect=null,r._localBoundsRect=nul
l,r._mask=null,r._destroyed=!1,r}return
s(e,t),e.prototype.updateTransform=function()
{this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*th
is.parent.worldAlpha,this._bounds.updateID++},e.prototype._recursivePostUpdateTransf
orm=function(){this.parent?
(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.par
ent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transfo
rm)},e.prototype.getBounds=function(t,e){return t||(this.parent?
(this._recursivePostUpdateTransform(),this.updateTransform()):
(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null))
,this._boundsID!==this._lastBoundsID&&this.calculateBounds(),e||(this._boundsRect||
(this._boundsRect=new
5/9/20, 12:55 PM
Page 23 of 181
_.Rectangle),e=this._boundsRect),this._bounds.getRectangle(e)},e.prototype.getLocalB
ounds=function(t){var
e=this.transform,r=this.parent;this.parent=null,this.transform=this._tempDisplayObje
ctParent.transform,t||(this._localBoundsRect||(this._localBoundsRect=new
_.Rectangle),t=this._localBoundsRect);var n=this.getBounds(!1,t);return
this.parent=r,this.transform=e,n},e.prototype.toGlobal=function(t,e){return
arguments.length>2&&void 0!==arguments[2]&&arguments[2]||
(this._recursivePostUpdateTransform(),this.parent?
this.displayObjectUpdateTransform():
(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.
parent=null)),this.worldTransform.apply(t,e)},e.prototype.toLocal=function(t,e,r,n)
{return e&&(t=e.toGlobal(t,r,n)),n||
(this._recursivePostUpdateTransform(),this.parent?
this.displayObjectUpdateTransform():
(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.
parent=null)),this.worldTransform.applyInverse(t,r)},e.prototype.renderWebGL=functio
n(t){},e.prototype.renderCanvas=function(t){},e.prototype.setParent=function(t)
{if(!t||!t.addChild)throw new Error("setParent: Argument must be a
Container");return t.addChild(this),t},e.prototype.setTransform=function(){var
t=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?
arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?
arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?
arguments[6]:0,a=arguments.length>7&&void 0!==arguments[7]?
arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;return
this.position.x=t,this.position.y=e,this.scale.x=r||1,this.scale.y=n||1,this.rotatio
n=i,this.skew.x=o,this.skew.y=s,this.pivot.x=a,this.pivot.y=u,this},e.prototype.dest
roy=function()
{this.removeAllListeners(),this.parent&&this.parent.removeChild(this),this.transform
=null,this.parent=null,this._bounds=null,this._currentBounds=null,this._mask=null,th
is.filterArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!
0},a(e,[{key:"_tempDisplayObjectParent",get:function(){return
null===this.tempDisplayObjectParent&&(this.tempDisplayObjectParent=new
e),this.tempDisplayObjectParent}},{key:"x",get:function(){return
this.position.x},set:function(t){this.transform.position.x=t}},
{key:"y",get:function(){return this.position.y},set:function(t)
{this.transform.position.y=t}},{key:"worldTransform",get:function(){return
this.transform.worldTransform}},{key:"localTransform",get:function(){return
this.transform.localTransform}},{key:"position",get:function(){return
this.transform.position},set:function(t){this.transform.position.copy(t)}},
{key:"scale",get:function(){return this.transform.scale},set:function(t)
{this.transform.scale.copy(t)}},{key:"pivot",get:function(){return
this.transform.pivot},set:function(t){this.transform.pivot.copy(t)}},
{key:"skew",get:function(){return this.transform.skew},set:function(t)
{this.transform.skew.copy(t)}},{key:"rotation",get:function(){return
this.transform.rotation},set:function(t){this.transform.rotation=t}},
{key:"worldVisible",get:function(){var
t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}},
{key:"mask",get:function(){return this._mask},set:function(t){this._mask&&
(this._mask.renderable=!0,this._mask.isMask=!1),this._mask=t,this._mask&&
(this._mask.renderable=!1,this._mask.isMask=!0)}},{key:"filters",get:function()
{return this._filters&&this._filters.slice()},set:function(t)
{this._filters=t&&t.slice()}}]),e}
(h.default);r.default=b,b.prototype.displayObjectUpdateTransform=b.prototype.updateT
ransform},
{"../const":46,"../math":70,"../settings":101,"./Bounds":47,"./Transform":50,"./Tran
sformStatic":52,eventemitter3:3}],50:[function(t,e,r){"use strict";function n(t,e)
5/9/20, 12:55 PM
Page 24 of 181
{if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}
function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised -
super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?
t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super
expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function
t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),a=t("../math"),u=t("./TransformBase"),h=function(t){return t&&t.__esModule?t:
{default:t}}(u),l=function(t){function e(){n(this,e);var
r=i(this,t.call(this));return r.position=new a.Point(0,0),r.scale=new
a.Point(1,1),r.skew=new a.ObservablePoint(r.updateSkew,r,0,0),r.pivot=new
a.Point(0,0),r._rotation=0,r._cx=1,r._sx=0,r._cy=0,r._sy=1,r}return
o(e,t),e.prototype.updateSkew=function()
{this._cx=Math.cos(this._rotation+this.skew._y),this._sx=Math.sin(this._rotation+thi
s.skew._y),this._cy=-Math.sin(this._rotationthis.skew._x),this._sy=Math.cos(this._rotationthis.skew._x)},e.prototype.updateLocalTransform=function(){var
t=this.localTransform;t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._
cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-
(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-
(this.pivot.x*t.b+this.pivot.y*t.d)},e.prototype.updateTransform=function(t){var
e=this.localTransform;e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._
cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-
(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-
(this.pivot.x*e.b+this.pivot.y*e.d);var
r=t.worldTransform,n=this.worldTransform;n.a=e.a*r.a+e.b*r.c,n.b=e.a*r.b+e.b*r.d,n.c
=e.c*r.a+e.d*r.c,n.d=e.c*r.b+e.d*r.d,n.tx=e.tx*r.a+e.ty*r.c+r.tx,n.ty=e.tx*r.b+e.ty*
r.d+r.ty,this._worldID++},e.prototype.setFromMatrix=function(t)
{t.decompose(this)},s(e,[{key:"rotation",get:function(){return
this._rotation},set:function(t){this._rotation=t,this.updateSkew()}}]),e}
(h.default);r.default=l},{"../math":70,"./TransformBase":51}],51:[function(t,e,r)
{"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call
a class as a function")}r.__esModule=!0;var i=t("../math"),o=function(){function t()
{n(this,t),this.worldTransform=new i.Matrix,this.localTransform=new
i.Matrix,this._worldID=0,this._parentID=0}return
t.prototype.updateLocalTransform=function()
{},t.prototype.updateTransform=function(t){var
e=t.worldTransform,r=this.worldTransform,n=this.localTransform;r.a=n.a*e.a+n.b*e.c,r
.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.
tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._worldID++},t}
();r.default=o,o.prototype.updateWorldTransform=o.prototype.updateTransform,o.IDENTI
TY=new o},{"../math":70}],52:[function(t,e,r){"use strict";function n(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),a=t("../math"),u=t("./TransformBase"),h=function(t){return t&&t.__esModule?t:
{default:t}}(u),l=function(t){function e(){n(this,e);var
5/9/20, 12:55 PM
Page 25 of 181
r=i(this,t.call(this));return r.position=new
a.ObservablePoint(r.onChange,r,0,0),r.scale=new
a.ObservablePoint(r.onChange,r,1,1),r.pivot=new
a.ObservablePoint(r.onChange,r,0,0),r.skew=new
a.ObservablePoint(r.updateSkew,r,0,0),r._rotation=0,r._cx=1,r._sx=0,r._cy=0,r._sy=1,
r._localID=0,r._currentLocalID=0,r}return o(e,t),e.prototype.onChange=function()
{this._localID++},e.prototype.updateSkew=function()
{this._cx=Math.cos(this._rotation+this.skew._y),this._sx=Math.sin(this._rotation+thi
s.skew._y),this._cy=-Math.sin(this._rotationthis.skew._x),this._sy=Math.cos(this._rotationthis.skew._x),this._localID++},e.prototype.updateLocalTransform=function(){var
t=this.localTransform;this._localID!==this._currentLocalID&&
(t.a=this._cx*this.scale._x,t.b=this._sx*this.scale._x,t.c=this._cy*this.scale._y,t.
d=this._sy*this.scale._y,t.tx=this.position._x-
(this.pivot._x*t.a+this.pivot._y*t.c),t.ty=this.position._y-
(this.pivot._x*t.b+this.pivot._y*t.d),this._currentLocalID=this._localID,this._paren
tID=-1)},e.prototype.updateTransform=function(t){var
e=this.localTransform;if(this._localID!==this._currentLocalID&&
(e.a=this._cx*this.scale._x,e.b=this._sx*this.scale._x,e.c=this._cy*this.scale._y,e.
d=this._sy*this.scale._y,e.tx=this.position._x-
(this.pivot._x*e.a+this.pivot._y*e.c),e.ty=this.position._y-
(this.pivot._x*e.b+this.pivot._y*e.d),this._currentLocalID=this._localID,this._paren
tID=-1),this._parentID!==t._worldID){var
r=t.worldTransform,n=this.worldTransform;n.a=e.a*r.a+e.b*r.c,n.b=e.a*r.b+e.b*r.d,n.c
=e.c*r.a+e.d*r.c,n.d=e.c*r.b+e.d*r.d,n.tx=e.tx*r.a+e.ty*r.c+r.tx,n.ty=e.tx*r.b+e.ty*
r.d+r.ty,this._parentID=t._worldID,this._worldID++}},e.prototype.setFromMatrix=funct
ion(t){t.decompose(this),this._localID++},s(e,[{key:"rotation",get:function(){return
this._rotation},set:function(t){this._rotation!==t&&
(this._rotation=t,this.updateSkew())}}]),e}(h.default);r.default=l},
{"../math":70,"./TransformBase":51}],53:[function(t,e,r){"use strict";function n(t)
{return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../display/Container"),u=n(a),h=t("../textures/RenderTexture"),l=n(h),c=t("../t
extures/Texture"),d=n(c),f=t("./GraphicsData"),p=n(f),v=t("../sprites/Sprite"),g=n(v
),y=t("../math"),m=t("../utils"),_=t("../const"),b=t("../display/Bounds"),x=n(b),T=t
("./utils/bezierCurveTo"),w=n(T),E=t("../renderers/canvas/CanvasRenderer"),S=n(E),O=
void 0,M=new y.Matrix,P=new y.Point,C=new Float32Array(4),R=new
Float32Array(4),A=function(t){function e(){var r=arguments.length>0&&void
0!==arguments[0]&&arguments[0];i(this,e);var n=o(this,t.call(this));return
n.fillAlpha=1,n.lineWidth=0,n.nativeLines=r,n.lineColor=0,n.lineAlignment=.5,n.graph
icsData=
[],n.tint=16777215,n._prevTint=16777215,n.blendMode=_.BLEND_MODES.NORMAL,n.currentPa
th=null,n._webGL={},n.isMask=!1,n.boundsPadding=0,n._localBounds=new
x.default,n.dirty=0,n.fastRectDirty=-1,n.clearDirty=0,n.boundsDirty=-1,n.cachedSprit
eDirty=!1,n._spriteRect=null,n._fastRect=!1,n._prevRectTint=null,n._prevRectFillColo
r=null,n}return s(e,t),e.prototype.clone=function(){var t=new
e;t.renderable=this.renderable,t.fillAlpha=this.fillAlpha,t.lineWidth=this.lineWidth
,t.lineColor=this.lineColor,t.lineAlignment=this.lineAlignment,t.tint=this.tint,t.bl
endMode=this.blendMode,t.isMask=this.isMask,t.boundsPadding=this.boundsPadding,t.dir
ty=0,t.cachedSpriteDirty=this.cachedSpriteDirty;for(var
r=0;r<this.graphicsData.length;++r)t.graphicsData.push(this.graphicsData[r].clone())
;return t.currentPath=t.graphicsData[t.graphicsData.length1],t.updateLocalBounds(),t},e.prototype._quadraticCurveLength=function(t,e,r,n,i,o)
{var s=t-2*r+i,a=e-2*n+o,u=2*r-2*t,h=2*n-2*e,l=4*(s*s+a*a),c=4*
5/9/20, 12:55 PM
Page 26 of 181
(s*u+a*h),d=u*u+h*h,f=2*Math.sqrt(l+c+d),p=Math.sqrt(l),v=2*l*p,g=2*Math.sqrt(d),y=c
/p;return(v*f+p*c*(f-g)+(4*d*lc*c)*Math.log((2*p+y+f)/(y+g)))/(4*v)},e.prototype._bezierCurveLength=function(t,e,r
,n,i,o,s,a){for(var
u=0,h=0,l=0,c=0,d=0,f=0,p=0,v=0,g=0,y=0,m=0,_=t,b=e,x=1;x<=10;++x)h=x/10,l=h*h,c=l*h
,d=1-h,f=d*d,p=f*d,v=p*t+3*f*h*r+3*d*l*i+c*s,g=p*e+3*f*h*n+3*d*l*o+c*a,y=_-v,m=bg,_=v,b=g,u+=Math.sqrt(y*y+m*m);return u},e.prototype._segmentsCount=function(t){var
r=Math.ceil(t/e.CURVES.maxLength);return r<e.CURVES.minSegments?
r=e.CURVES.minSegments:r>e.CURVES.maxSegments&&
(r=e.CURVES.maxSegments),r},e.prototype.lineStyle=function(){var
t=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:.5;if(this.lineWidth=t,this.lineColor=e,this.lineAlpha=r,this.lineAlign
ment=n,this.currentPath)if(this.currentPath.shape.points.length){var i=new
y.Polygon(this.currentPath.shape.points.slice(-2));i.closed=!1,this.drawShape(i)}els
e
this.currentPath.lineWidth=this.lineWidth,this.currentPath.lineColor=this.lineColor,
this.currentPath.lineAlpha=this.lineAlpha,this.currentPath.lineAlignment=this.lineAl
ignment;return this},e.prototype.moveTo=function(t,e){var r=new
y.Polygon([t,e]);return
r.closed=!1,this.drawShape(r),this},e.prototype.lineTo=function(t,e){var
r=this.currentPath.shape.points,n=r[r.length-2],i=r[r.length-1];return
n===t&&i===e||
(r.push(t,e),this.dirty++),this},e.prototype.quadraticCurveTo=function(t,r,n,i)
{this.currentPath?0===this.currentPath.shape.points.length&&
(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var
o=this.currentPath.shape.points,s=0,a=0;0===o.length&&this.moveTo(0,0);for(var
u=o[o.length-2],h=o[o.length-1],l=e.CURVES.adaptive?
this._segmentsCount(this._quadraticCurveLength(u,h,t,r,n,i)):20,c=1;c<=l;++c){var
d=c/l;s=u+(t-u)*d,a=h+(r-h)*d,o.push(s+(t+(n-t)*d-s)*d,a+(r+(i-r)*d-a)*d)}return
this.dirty++,this},e.prototype.bezierCurveTo=function(t,r,n,i,o,s){this.currentPath?
0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=
[0,0]):this.moveTo(0,0);var a=this.currentPath.shape.points,u=a[a.length2],h=a[a.length-1];a.length-=2;var l=e.CURVES.adaptive?
this._segmentsCount(this._bezierCurveLength(u,h,t,r,n,i,o,s)):20;return(0,w.default)
(u,h,t,r,n,i,o,s,l,a),this.dirty++,this},e.prototype.arcTo=function(t,e,r,n,i)
{this.currentPath?
0===this.currentPath.shape.points.length&&this.currentPath.shape.points.push(t,e):th
is.moveTo(t,e);var o=this.currentPath.shape.points,s=o[o.length-2],a=o[o.length1],u=a-e,h=s-t,l=n-e,c=r-t,d=Math.abs(u*c-h*l);if(d<1e-8||0===i)o[o.length2]===t&&o[o.length-1]===e||o.push(t,e);else{var
f=u*u+h*h,p=l*l+c*c,v=u*l+h*c,g=i*Math.sqrt(f)/d,y=i*Math.sqrt(p)/d,m=g*v/f,_=y*v/p,
b=g*c+y*h,x=g*l+y*u,T=h*(y+m),w=u*(y+m),E=c*(g+_),S=l*(g+_),O=Math.atan2(w-x,Tb),M=Math.atan2(S-x,E-b);this.arc(b+t,x+e,i,O,M,h*l>c*u)}return
this.dirty++,this},e.prototype.arc=function(t,r,n,i,o){var
s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(i===o)return
this;!s&&o<=i?o+=_.PI_2:s&&i<=o&&(i+=_.PI_2);var a=o-i,u=e.CURVES.adaptive?
this._segmentsCount(Math.abs(a)*n):40*Math.ceil(Math.abs(a)/_.PI_2);if(0===a)return
this;var h=t+Math.cos(i)*n,l=r+Math.sin(i)*n,c=this.currentPath?
this.currentPath.shape.points:null;if(c){var d=Math.abs(c[c.length-2]-
h),f=Math.abs(c[c.length-1]-l);d<.001&&f<.001||c.push(h,l)}else
this.moveTo(h,l),c=this.currentPath.shape.points;for(var
p=a/(2*u),v=2*p,g=Math.cos(p),y=Math.sin(p),m=u-1,b=m%1/m,x=0;x<=m;++x){var
T=x+b*x,w=p+i+v*T,E=Math.cos(w),S=-Math.sin(w);c.push((g*E+y*S)*n+t,(g*-
S+y*E)*n+r)}return this.dirty++,this},e.prototype.beginFill=function(){var
t=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return
this.filling=!0,this.fillColor=t,this.fillAlpha=e,this.currentPath&&this.currentPath
5/9/20, 12:55 PM
Page 27 of 181
.shape.points.length<=2&&
(this.currentPath.fill=this.filling,this.currentPath.fillColor=this.fillColor,this.c
urrentPath.fillAlpha=this.fillAlpha),this},e.prototype.endFill=function(){return
this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},e.prototype.drawRect=func
tion(t,e,r,n){return this.drawShape(new
y.Rectangle(t,e,r,n)),this},e.prototype.drawRoundedRect=function(t,e,r,n,i){return
this.drawShape(new
y.RoundedRectangle(t,e,r,n,i)),this},e.prototype.drawCircle=function(t,e,r){return
this.drawShape(new y.Circle(t,e,r)),this},e.prototype.drawEllipse=function(t,e,r,n)
{return this.drawShape(new
y.Ellipse(t,e,r,n)),this},e.prototype.drawPolygon=function(t){var e=t,r=!0;if(e
instanceof y.Polygon&&(r=e.closed,e=e.points),!Array.isArray(e)){e=new
Array(arguments.length);for(var n=0;n<e.length;++n)e[n]=arguments[n]}var i=new
y.Polygon(e);return
i.closed=r,this.drawShape(i),this},e.prototype.drawStar=function(t,e,r,n,i){var
o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;i=i||n/2;for(var
s=-1*Math.PI/2+o,a=2*r,u=_.PI_2/a,h=[],l=0;l<a;l++){var c=l%2?
i:n,d=l*u+s;h.push(t+c*Math.cos(d),e+c*Math.sin(d))}return
this.drawPolygon(h)},e.prototype.clear=function()
{return(this.lineWidth||this.filling||this.graphicsData.length>0)&&
(this.lineWidth=0,this.lineAlignment=.5,this.filling=!1,this.boundsDirty=-1,this.can
vasTintDirty=-1,this.dirty++,this.clearDirty++,this.graphicsData.length=0),this.curr
entPath=null,this._spriteRect=null,this},e.prototype.isFastRect=function(){return
1===this.graphicsData.length&&this.graphicsData[0].shape.type===_.SHAPES.RECT&&!this
.graphicsData[0].lineWidth},e.prototype._renderWebGL=function(t)
{this.dirty!==this.fastRectDirty&&
(this.fastRectDirty=this.dirty,this._fastRect=this.isFastRect()),this._fastRect?
this._renderSpriteRect(t):
(t.setObjectRenderer(t.plugins.graphics),t.plugins.graphics.render(this))},e.prototy
pe._renderSpriteRect=function(t){var e=this.graphicsData[0].shape;this._spriteRect||
(this._spriteRect=new g.default(new d.default(d.default.WHITE)));var
r=this._spriteRect,n=this.graphicsData[0].fillColor;if(16777215===this.tint)r.tint=n
;else if(this.tint!==this._prevRectTint||n!==this._prevRectFillColor){var i=C,o=R;
(0,m.hex2rgb)(n,i),(0,m.hex2rgb)
(this.tint,o),i[0]*=o[0],i[1]*=o[1],i[2]*=o[2],r.tint=(0,m.rgb2hex)
(i),this._prevRectTint=this.tint,this._prevRectFillColor=n}r.alpha=this.graphicsData
[0].fillAlpha,r.worldAlpha=this.worldAlpha*r.alpha,r.blendMode=this.blendMode,r._tex
ture._frame.width=e.width,r._texture._frame.height=e.height,r.transform.worldTransfo
rm=this.transform.worldTransform,r.anchor.set(-e.x/e.width,-
e.y/e.height),r._onAnchorUpdate(),r._renderWebGL(t)},e.prototype._renderCanvas=funct
ion(t)
{!0!==this.isMask&&t.plugins.graphics.render(this)},e.prototype._calculateBounds=fun
ction(){this.boundsDirty!==this.dirty&&
(this.boundsDirty=this.dirty,this.updateLocalBounds(),this.cachedSpriteDirty=!0);var
t=this._localBounds;this._bounds.addFrame(this.transform,t.minX,t.minY,t.maxX,t.maxY
)},e.prototype.containsPoint=function(t)
{this.worldTransform.applyInverse(t,P);for(var
e=this.graphicsData,r=0;r<e.length;++r){var n=e[r];if(n.fill&&
(n.shape&&n.shape.contains(P.x,P.y))){if(n.holes)for(var i=0;i<n.holes.length;i++)
{var
o=n.holes[i];if(o.contains(P.x,P.y))return!1}return!0}}return!1},e.prototype.updateL
ocalBounds=function(){var
t=1/0,e=-1/0,r=1/0,n=-1/0;if(this.graphicsData.length)for(var
i=0,o=0,s=0,a=0,u=0,h=0;h<this.graphicsData.length;h++){var
l=this.graphicsData[h],c=l.type,d=l.lineWidth,f=l.lineAlignment,p=d*f;if(i=l.shape,c
===_.SHAPES.RECT||c===_.SHAPES.RREC)o=i.x-p,s=i.yp,a=i.width+2*p,u=i.height+2*p,t=o<t?o:t,e=o+a>e?o+a:e,r=s<r?s:r,n=s+u>n?s+u:n;else
if(c===_.SHAPES.CIRC)o=i.x,s=i.y,a=i.radius+p,u=i.radius+p,t=o-a<t?o-a:t,e=o+a>e?
o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else
if(c===_.SHAPES.ELIP)o=i.x,s=i.y,a=i.width+p,u=i.height+p,t=o-a<t?o-a:t,e=o+a>e?
5/9/20, 12:55 PM
Page 28 of 181
o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else for(var
v=i.points,g=0,y=0,m=0,b=0,x=0,T=0,w=0,E=0,S=0;S+2<v.length;S+=2)o=v[S],s=v[S+1],g=v
[S+2],y=v[S+3],m=Math.abs(g-o),b=Math.abs(y-s),u=2*p,(a=Math.sqrt(m*m+b*b))<1e-9||
(x=(u/a*b+m)/2,T=(u/a*m+b)/2,w=(g+o)/2,E=(y+s)/2,t=w-x<t?w-x:t,e=w+x>e?w+x:e,r=ET<r?E-T:r,n=E+T>n?E+T:n)}else t=0,e=0,r=0,n=0;var
O=this.boundsPadding;this._localBounds.minX=tO,this._localBounds.maxX=e+O,this._localBounds.minY=rO,this._localBounds.maxY=n+O},e.prototype.drawShape=function(t)
{this.currentPath&&this.currentPath.shape.points.length<=2&&this.graphicsData.pop(),
this.currentPath=null;var e=new
p.default(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha
,this.filling,this.nativeLines,t,this.lineAlignment);return
this.graphicsData.push(e),e.type===_.SHAPES.POLY&&
(e.shape.closed=e.shape.closed,this.currentPath=e),this.dirty++,e},e.prototype.gener
ateCanvasTexture=function(t){var e=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:1,r=this.getLocalBounds(),n=l.default.create(r.width,r.height,t,e);O||
(O=new
S.default),this.transform.updateLocalTransform(),this.transform.localTransform.copy(
M),M.invert(),M.tx-=r.x,M.ty-=r.y,O.render(this,n,!0,M);var
i=d.default.fromCanvas(n.baseTexture._canvasRenderTarget.canvas,t,"graphics");return
i.baseTexture.resolution=e,i.baseTexture.update(),i},e.prototype.closePath=function(
){var t=this.currentPath;return
t&&t.shape&&t.shape.close(),this},e.prototype.addHole=function(){var
t=this.graphicsData.pop();return
this.currentPath=this.graphicsData[this.graphicsData.length1],this.currentPath.addHole(t.shape),this.currentPath=null,this},e.prototype.destroy
=function(e){t.prototype.destroy.call(this,e);for(var
r=0;r<this.graphicsData.length;++r)this.graphicsData[r].destroy();for(var n in
this._webGL)for(var
i=0;i<this._webGL[n].data.length;++i)this._webGL[n].data[i].destroy();this._spriteRe
ct&&this._spriteRect.destroy(),this.graphicsData=null,this.currentPath=null,this._we
bGL=null,this._localBounds=null},e}
(u.default);r.default=A,A._SPRITE_TEXTURE=null,A.CURVES=
{adaptive:!1,maxLength:10,minSegments:8,maxSegments:2048}},
{"../const":46,"../display/Bounds":47,"../display/Container":48,"../math":70,"../ren
derers/canvas/CanvasRenderer":77,"../sprites/Sprite":102,"../textures/RenderTexture"
:113,"../textures/Texture":115,"../utils":125,"./GraphicsData":54,"./utils/bezierCur
veTo":56}],54:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var
i=function(){function t(e,r,i,o,s,a,u,h,l)
{n(this,t),this.lineWidth=e,this.lineAlignment=l,this.nativeLines=u,this.lineColor=r
,this.lineAlpha=i,this._lineTint=r,this.fillColor=o,this.fillAlpha=s,this._fillTint=
o,this.fill=a,this.holes=[],this.shape=h,this.type=h.type}return
t.prototype.clone=function(){return new
t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fi
ll,this.nativeLines,this.shape,this.lineAlignment)},t.prototype.addHole=function(t)
{this.holes.push(t)},t.prototype.destroy=function()
{this.shape=null,this.holes=null},t}();r.default=i},{}],55:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var
i=t("../../renderers/canvas/CanvasRenderer"),o=function(t){return t&&t.__esModule?t:
{default:t}}(i),s=t("../../const"),a=function(){function t(e)
{n(this,t),this.renderer=e}return t.prototype.render=function(t){var
e=this.renderer,r=e.context,n=t.worldAlpha,i=t.transform.worldTransform,o=e.resoluti
on;r.setTransform(i.a*o,i.b*o,i.c*o,i.d*o,i.tx*o,i.ty*o),t.canvasTintDirty===t.dirty
&&t._prevTint===t.tint||this.updateGraphicsTint(t),e.setBlendMode(t.blendMode);for(v
ar a=0;a<t.graphicsData.length;a++){var
u=t.graphicsData[a],h=u.shape,l=u._fillTint,c=u._lineTint;if(r.lineWidth=u.lineWidth
,u.type===s.SHAPES.POLY){r.beginPath();var d=h.points,f=u.holes,p=void 0,v=void
0;r.moveTo(d[0],d[1]);for(var
5/9/20, 12:55 PM
Page 29 of 181
g=2;g<d.length;g+=2)r.lineTo(d[g],d[g+1]);if(h.closed&&r.closePath(),f.length>0)
{p=0;for(var y=0;y<d.length;y+=2)p+=d[y]*d[y+3]-d[y+1]*d[y+2];for(var
m=0;m<f.length;m++){d=f[m].points,v=0;for(var _=0;_<d.length;_+=2)v+=d[_]*d[_+3]-
d[_+1]*d[_+2];if(r.moveTo(d[0],d[1]),v*p<0)for(var
b=2;b<d.length;b+=2)r.lineTo(d[b],d[b+1]);else for(var x=d.length-2;x>=2;x-
=2)r.lineTo(d[x],d[x+1]);f[m].closed&&r.closePath()}}u.fill&&
(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+
(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&
(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+
(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===s.SHAPES.RECT)
(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+
("00000"+
(0|l).toString(16)).substr(-6),r.fillRect(h.x,h.y,h.width,h.height)),u.lineWidth&&
(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+
(0|c).toString(16)).substr(-6),r.strokeRect(h.x,h.y,h.width,h.height));else
if(u.type===s.SHAPES.CIRC)r.beginPath(),r.arc(h.x,h.y,h.radius,0,2*Math.PI),r.closeP
ath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+
(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&
(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+
(0|c).toString(16)).substr(-6),r.stroke());else if(u.type===s.SHAPES.ELIP){var
T=2*h.width,w=2*h.height,E=h.x-T/2,S=h.y-w/2;r.beginPath();var
O=T/2*.5522848,M=w/2*.5522848,P=E+T,C=S+w,R=E+T/2,A=S+w/2;r.moveTo(E,A),r.bezierCurv
eTo(E,A-M,R-O,S,R,S),r.bezierCurveTo(R+O,S,P,AM,P,A),r.bezierCurveTo(P,A+M,R+O,C,R,C),r.bezierCurveTo(RO,C,E,A+M,E,A),r.closePath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+
("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&
(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+
(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===s.SHAPES.RREC){var
I=h.x,D=h.y,L=h.width,N=h.height,B=h.radius,k=Math.min(L,N)/2|0;B=B>k?
k:B,r.beginPath(),r.moveTo(I,D+B),r.lineTo(I,D+NB),r.quadraticCurveTo(I,D+N,I+B,D+N),r.lineTo(I+LB,D+N),r.quadraticCurveTo(I+L,D+N,I+L,D+NB),r.lineTo(I+L,D+B),r.quadraticCurveTo(I+L,D,I+LB,D),r.lineTo(I+B,D),r.quadraticCurveTo(I,D,I,D+B),r.closePath(),
(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+
("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&
(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+
(0|c).toString(16)).substr(-6),r.stroke())}}},t.prototype.updateGraphicsTint=functio
n(t){t._prevTint=t.tint,t.canvasTintDirty=t.dirty;for(var e=(t.tint>>16&255)/255,r=
(t.tint>>8&255)/255,n=(255&t.tint)/255,i=0;i<t.graphicsData.length;++i){var
o=t.graphicsData[i],s=0|o.fillColor,a=0|o.lineColor;o._fillTint=
((s>>16&255)/255*e*255<<16)+((s>>8&255)/255*r*255<<8)+(255&s)/255*n*255,o._lineTint=
((a>>16&255)/255*e*255<<16)+((a>>8&255)/255*r*255<<8)+
(255&a)/255*n*255}},t.prototype.renderPolygon=function(t,e,r)
{r.moveTo(t[0],t[1]);for(var
n=1;n<t.length/2;++n)r.lineTo(t[2*n],t[2*n+1]);e&&r.closePath()},t.prototype.destroy
=function(){this.renderer=null},t}
();r.default=a,o.default.registerPlugin("graphics",a)},
{"../../const":46,"../../renderers/canvas/CanvasRenderer":77}],56:[function(t,e,r)
{"use strict";function n(t,e,r,n,i,o,s,a,u){var h=arguments.length>9&&void
0!==arguments[9]?arguments[9]:[],l=0,c=0,d=0,f=0,p=0;h.push(t,e);for(var
v=1,g=0;v<=u;++v)g=v/u,l=1-
g,c=l*l,d=c*l,f=g*g,p=f*g,h.push(d*t+3*c*g*r+3*l*f*i+p*s,d*e+3*c*g*n+3*l*f*o+p*a);re
turn h}r.__esModule=!0,r.default=n},{}],57:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw
new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
5/9/20, 12:55 PM
Page 30 of 181
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../../utils"),u=t("../../const"),h=t("../../renderers/webgl/utils/ObjectRendere
r"),l=n(h),c=t("../../renderers/webgl/WebGLRenderer"),d=n(c),f=t("./WebGLGraphicsDat
a"),p=n(f),v=t("./shaders/PrimitiveShader"),g=n(v),y=t("./utils/buildPoly"),m=n(y),_
=t("./utils/buildRectangle"),b=n(_),x=t("./utils/buildRoundedRectangle"),T=n(x),w=t(
"./utils/buildCircle"),E=n(w),S=function(t){function e(r){i(this,e);var
n=o(this,t.call(this,r));return n.graphicsDataPool=
[],n.primitiveShader=null,n.gl=r.gl,n.CONTEXT_UID=0,n}return
s(e,t),e.prototype.onContextChange=function()
{this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.primitiveS
hader=new g.default(this.gl)},e.prototype.destroy=function()
{l.default.prototype.destroy.call(this);for(var
t=0;t<this.graphicsDataPool.length;++t)this.graphicsDataPool[t].destroy();this.graph
icsDataPool=null},e.prototype.render=function(t){var e=this.renderer,r=e.gl,n=void
0,i=t._webGL[this.CONTEXT_UID];i&&t.dirty===i.dirty||
(this.updateGraphics(t),i=t._webGL[this.CONTEXT_UID]);var
o=this.primitiveShader;e.bindShader(o),e.state.setBlendMode(t.blendMode);for(var
s=0,u=i.data.length;s<u;s++){n=i.data[s];var
h=n.shader;e.bindShader(h),h.uniforms.translationMatrix=t.transform.worldTransform.t
oArray(!0),h.uniforms.tint=(0,a.hex2rgb)
(t.tint),h.uniforms.alpha=t.worldAlpha,e.bindVao(n.vao),n.nativeLines?
r.drawArrays(r.LINES,0,n.points.length/6):n.vao.draw(r.TRIANGLE_STRIP,n.indices.leng
th)}},e.prototype.updateGraphics=function(t){var
e=this.renderer.gl,r=t._webGL[this.CONTEXT_UID];if(r||(r=t._webGL[this.CONTEXT_UID]=
{lastIndex:0,data:
[],gl:e,clearDirty:-1,dirty:-1}),r.dirty=t.dirty,t.clearDirty!==r.clearDirty)
{r.clearDirty=t.clearDirty;for(var
n=0;n<r.data.length;n++)this.graphicsDataPool.push(r.data[n]);r.data.length=0,r.last
Index=0}for(var i=void 0,o=void 0,s=r.lastIndex;s<t.graphicsData.length;s++){var
a=t.graphicsData[s];i=this.getWebGLData(r,0),a.nativeLines&&a.lineWidth&&
(o=this.getWebGLData(r,0,!0),r.lastIndex++),a.type===u.SHAPES.POLY&&(0,m.default)
(a,i,o),a.type===u.SHAPES.RECT?(0,b.default)
(a,i,o):a.type===u.SHAPES.CIRC||a.type===u.SHAPES.ELIP?(0,E.default)
(a,i,o):a.type===u.SHAPES.RREC&&(0,T.default)
(a,i,o),r.lastIndex++}this.renderer.bindVao(null);for(var
h=0;h<r.data.length;h++)i=r.data[h],i.dirty&&i.upload()},e.prototype.getWebGLData=fu
nction(t,e,r){var n=t.data[t.data.length1];return(!n||n.nativeLines!==r||n.points.length>32e4)&&
(n=this.graphicsDataPool.pop()||new
p.default(this.renderer.gl,this.primitiveShader,this.renderer.state.attribsState),n.
nativeLines=r,n.reset(e),t.data.push(n)),n.dirty=!0,n},e}
(l.default);r.default=S,d.default.registerPlugin("graphics",S)},
{"../../const":46,"../../renderers/webgl/WebGLRenderer":84,"../../renderers/webgl/ut
ils/ObjectRenderer":94,"../../utils":125,"./WebGLGraphicsData":58,"./shaders/Primiti
veShader":59,"./utils/buildCircle":60,"./utils/buildPoly":62,"./utils/buildRectangle
":63,"./utils/buildRoundedRectangle":64}],58:[function(t,e,r){"use strict";function
n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=t("pixi-gl-core"),o=function(t){return
t&&t.__esModule?t:{default:t}}(i),s=function(){function t(e,r,i)
{n(this,t),this.gl=e,this.color=[0,0,0],this.points=[],this.indices=
[],this.buffer=o.default.GLBuffer.createVertexBuffer(e),this.indexBuffer=o.default.G
LBuffer.createIndexBuffer(e),this.dirty=!0,this.nativeLines=!1,this.glPoints=null,th
is.glIndices=null,this.shader=r,this.vao=new
o.default.VertexArrayObject(e,i).addIndex(this.indexBuffer).addAttribute(this.buffer
,r.attributes.aVertexPosition,e.FLOAT,!1,24,0).addAttribute(this.buffer,r.attributes
.aColor,e.FLOAT,!1,24,8)}return t.prototype.reset=function()
{this.points.length=0,this.indices.length=0},t.prototype.upload=function()
{this.glPoints=new
Float32Array(this.points),this.buffer.upload(this.glPoints),this.glIndices=new
5/9/20, 12:55 PM
Page 31 of 181
Uint16Array(this.indices),this.indexBuffer.upload(this.glIndices),this.dirty=!1},t.p
rototype.destroy=function()
{this.color=null,this.points=null,this.indices=null,this.vao.destroy(),this.buffer.d
estroy(),this.indexBuffer.destroy(),this.gl=null,this.buffer=null,this.indexBuffer=n
ull,this.glPoints=null,this.glIndices=null},t}();r.default=s},{"pixi-glcore":15}],59:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}function i(t,e)
{if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("../../../Shader"),a=function(t){return t&&t.__esModule?t:{default:t}}
(s),u=function(t){function e(r){return n(this,e),i(this,t.call(this,r,["attribute
vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3
translationMatrix;","uniform mat3 projectionMatrix;","uniform float alpha;","uniform
vec3 tint;","varying vec4 vColor;","void main(void){"," gl_Position =
vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0,
1.0);"," vColor = aColor * vec4(tint * alpha, alpha);","}"].join("\n"),["varying
vec4 vColor;","void main(void){"," gl_FragColor =
vColor;","}"].join("\n")))}return o(e,t),e}(a.default);r.default=u},
{"../../../Shader":44}],60:[function(t,e,r){"use strict";function n(t,e,r){var
n=t.shape,i=n.x,u=n.y,h=void 0,l=void 0;if(t.type===s.SHAPES.CIRC?
(h=n.radius,l=n.radius):(h=n.width,l=n.height),0!==h&&0!==l){var
c=Math.floor(30*Math.sqrt(n.radius))||Math.floor(15*Math.sqrt(n.width+n.height)),d=2
*Math.PI/c;if(t.fill){var f=(0,a.hex2rgb)
(t.fillColor),p=t.fillAlpha,v=f[0]*p,g=f[1]*p,y=f[2]*p,m=e.points,_=e.indices,b=m.le
ngth/6;_.push(b);for(var
x=0;x<c+1;x++)m.push(i,u,v,g,y,p),m.push(i+Math.sin(d*x)*h,u+Math.cos(d*x)*l,v,g,y,p
),_.push(b++,b++);_.push(b-1)}if(t.lineWidth){var T=t.points;t.points=[];for(var
w=0;w<c;w++)t.points.push(i+Math.sin(d*-w)*h,u+Math.cos(d*-
w)*l);t.points.push(t.points[0],t.points[1]),(0,o.default)
(t,e,r),t.points=T}}}r.__esModule=!0,r.default=n;var
i=t("./buildLine"),o=function(t){return t&&t.__esModule?t:{default:t}}
(i),s=t("../../../const"),a=t("../../../utils")},
{"../../../const":46,"../../../utils":125,"./buildLine":61}],61:[function(t,e,r)
{"use strict";function n(t,e){var r=t.points;if(0!==r.length){var n=new
o.Point(r[0],r[1]),i=new o.Point(r[r.length-2],r[r.length1]);if(n.x===i.x&&n.y===i.y){r=r.slice(),r.pop(),r.pop(),i=new o.Point(r[r.length2],r[r.length-1]);var a=i.x+.5*(n.x-i.x),u=i.y+.5*(n.yi.y);r.unshift(a,u),r.push(a,u)}var
h=e.points,l=e.indices,c=r.length/2,d=r.length,f=h.length/6,p=t.lineWidth/2,v=
(0,s.hex2rgb)
(t.lineColor),g=t.lineAlpha,y=v[0]*g,m=v[1]*g,_=v[2]*g,b=r[0],x=r[1],T=r[2],w=r[3],E
=0,S=0,O=-(x-w),M=b-T,P=0,C=0,R=0,A=0,I=Math.sqrt(O*O+M*M);O/=I,M/=I,O*=p,M*=p;var
D=t.lineAlignment,L=2*(1-D),N=2*D;h.push(b-O*L,xM*L,y,m,_,g),h.push(b+O*N,x+M*N,y,m,_,g);for(var B=1;B<c-1;++B){b=r[2*(B-1)],x=r[2*
(B-1)+1],T=r[2*B],w=r[2*B+1],E=r[2*(B+1)],S=r[2*(B+1)+1],O=-(x-w),M=bT,I=Math.sqrt(O*O+M*M),O/=I,M/=I,O*=p,M*=p,P=-(w-S),C=TE,I=Math.sqrt(P*P+C*C),P/=I,C/=I,P*=p,C*=p;var k=-M+x-(-M+w),F=-O+T-(-O+b),j=(-O+b)*
(-M+w)-(-O+T)*(-M+x),U=-C+S-(-C+w),X=-P+T-(-P+E),G=(-P+E)*(-C+w)-(-P+T)*(-
C+S),W=k*X-U*F;if(Math.abs(W)<.1)W+=10.1,h.push(T-O*L,wM*L,y,m,_,g),h.push(T+O*N,w+M*N,y,m,_,g);else{var H=(F*G-X*j)/W,Y=(U*j-k*G)/W;(H-T)*
(H-T)+(Y-w)*(Y-w)>196*p*p?(R=O-P,A=MC,I=Math.sqrt(R*R+A*A),R/=I,A/=I,R*=p,A*=p,h.push(T-R*L,wA*L),h.push(y,m,_,g),h.push(T+R*N,w+A*N),h.push(y,m,_,g),
h.push(T-R*N*L,w-A*L),h.push(y,m,_,g),d++):(h.push(T+(H-T)*L,w+(Yw)*L),h.push(y,m,_,g),h.push(T-(H-T)*N,w-(Y-w)*N),h.push(y,m,_,g))}}b=r[2*(c2)],x=r[2*(c-2)+1],T=r[2*(c-1)],w=r[2*(c-1)+1],O=-(x-w),M=b5/9/20, 12:55 PM
Page 32 of 181
T,I=Math.sqrt(O*O+M*M),O/=I,M/=I,O*=p,M*=p,h.push(T-O*L,wM*L),h.push(y,m,_,g),h.push(T+O*N,w+M*N),h.push(y,m,_,g),l.push(f);for(var
V=0;V<d;++V)l.push(f++);l.push(f-1)}}function i(t,e){var
r=0,n=t.points;if(0!==n.length){var i=e.points,o=n.length/2,a=(0,s.hex2rgb)
(t.lineColor),u=t.lineAlpha,h=a[0]*u,l=a[1]*u,c=a[2]*u;for(r=1;r<o;r++){var d=n[2*
(r-1)],f=n[2*(r1)+1],p=n[2*r],v=n[2*r+1];i.push(d,f),i.push(h,l,c,u),i.push(p,v),i.push(h,l,c,u)}}}
r.__esModule=!0,r.default=function(t,e,r){t.nativeLines?i(t,r):n(t,e)};var
o=t("../../../math"),s=t("../../../utils")},
{"../../../math":70,"../../../utils":125}],62:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r)
{t.points=t.shape.points.slice();var n=t.points;if(t.fill&&n.length>=6){for(var i=
[],o=t.holes,u=0;u<o.length;u++){var
l=o[u];i.push(n.length/2),n=n.concat(l.points)}var
c=e.points,d=e.indices,f=n.length/2,p=(0,a.hex2rgb)
(t.fillColor),v=t.fillAlpha,g=p[0]*v,y=p[1]*v,m=p[2]*v,_=(0,h.default)
(n,i,2);if(!_)return;for(var
b=c.length/6,x=0;x<_.length;x+=3)d.push(_[x]+b),d.push(_[x]+b),d.push(_[x+1]+b),d.pu
sh(_[x+2]+b),d.push(_[x+2]+b);for(var
T=0;T<f;T++)c.push(n[2*T],n[2*T+1],g,y,m,v)}t.lineWidth>0&&(0,s.default)
(t,e,r)}r.__esModule=!0,r.default=i;var
o=t("./buildLine"),s=n(o),a=t("../../../utils"),u=t("earcut"),h=n(u)},
{"../../../utils":125,"./buildLine":61,earcut:2}],63:[function(t,e,r){"use
strict";function n(t,e,r){var n=t.shape,i=n.x,a=n.y,u=n.width,h=n.height;if(t.fill)
{var l=(0,s.hex2rgb)
(t.fillColor),c=t.fillAlpha,d=l[0]*c,f=l[1]*c,p=l[2]*c,v=e.points,g=e.indices,y=v.le
ngth/6;v.push(i,a),v.push(d,f,p,c),v.push(i+u,a),v.push(d,f,p,c),v.push(i,a+h),v.pus
h(d,f,p,c),v.push(i+u,a+h),v.push(d,f,p,c),g.push(y,y,y+1,y+2,y+3,y+3)}if(t.lineWidt
h){var m=t.points;t.points=[i,a,i+u,a,i+u,a+h,i,a+h,i,a],(0,o.default)
(t,e,r),t.points=m}}r.__esModule=!0,r.default=n;var i=t("./buildLine"),o=function(t)
{return t&&t.__esModule?t:{default:t}}(i),s=t("../../../utils")},
{"../../../utils":125,"./buildLine":61}],64:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r){var
n=t.shape,i=n.x,o=n.y,a=n.width,h=n.height,d=n.radius,f=[];if(f.push(i+d,o),s(i+ad,o,i+a,o,i+a,o+d,f),s(i+a,o+h-d,i+a,o+h,i+a-d,o+h,f),s(i+d,o+h,i,o+h,i,o+hd,f),s(i,o+d,i,o,i+d+1e-10,o,f),t.fill){for(var p=(0,c.hex2rgb)
(t.fillColor),v=t.fillAlpha,g=p[0]*v,y=p[1]*v,m=p[2]*v,_=e.points,b=e.indices,x=_.le
ngth/6,T=(0,u.default)
(f,null,2),w=0,E=T.length;w<E;w+=3)b.push(T[w]+x),b.push(T[w]+x),b.push(T[w+1]+x),b.
push(T[w+2]+x),b.push(T[w+2]+x);for(var
S=0,O=f.length;S<O;S++)_.push(f[S],f[++S],g,y,m,v)}if(t.lineWidth){var
M=t.points;t.points=f,(0,l.default)(t,e,r),t.points=M}}function o(t,e,r){return t+
(e-t)*r}function s(t,e,r,n,i,s){for(var a=arguments.length>6&&void 0!==arguments[6]?
arguments[6]:
[],u=a,h=0,l=0,c=0,d=0,f=0,p=0,v=0,g=0;v<=20;++v)g=v/20,h=o(t,r,g),l=o(e,n,g),c=o(r,
i,g),d=o(n,s,g),f=o(h,c,g),p=o(l,d,g),u.push(f,p);return
u}r.__esModule=!0,r.default=i;var
a=t("earcut"),u=n(a),h=t("./buildLine"),l=n(h),c=t("../../../utils")},
{"../../../utils":125,"./buildLine":61,earcut:2}],65:[function(t,e,r){"use
strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return
e.default=t,e}function i(t){return t&&t.__esModule?t:
{default:t}}r.__esModule=!0,r.autoDetectRenderer=r.Application=r.Filter=r.SpriteMask
Filter=r.Quad=r.RenderTarget=r.ObjectRenderer=r.WebGLManager=r.Shader=r.CanvasRender
Target=r.TextureUvs=r.VideoBaseTexture=r.BaseRenderTexture=r.RenderTexture=r.BaseTex
ture=r.TextureMatrix=r.Texture=r.Spritesheet=r.CanvasGraphicsRenderer=r.GraphicsRend
erer=r.GraphicsData=r.Graphics=r.TextMetrics=r.TextStyle=r.Text=r.SpriteRenderer=r.C
anvasTinter=r.CanvasSpriteRenderer=r.Sprite=r.TransformBase=r.TransformStatic=r.Tran
sform=r.Container=r.DisplayObject=r.Bounds=r.glCore=r.WebGLRenderer=r.CanvasRenderer
=r.ticker=r.utils=r.settings=void 0;var
5/9/20, 12:55 PM
Page 33 of 181
o=t("./const");Object.keys(o).forEach(function(t)
{"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,
{enumerable:!0,get:function(){return o[t]}})});var
s=t("./math");Object.keys(s).forEach(function(t)
{"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,
{enumerable:!0,get:function(){return s[t]}})});var a=t("pixi-glcore");Object.defineProperty(r,"glCore",{enumerable:!0,get:function(){return
i(a).default}});var u=t("./display/Bounds");Object.defineProperty(r,"Bounds",
{enumerable:!0,get:function(){return i(u).default}});var
h=t("./display/DisplayObject");Object.defineProperty(r,"DisplayObject",
{enumerable:!0,get:function(){return i(h).default}});var
l=t("./display/Container");Object.defineProperty(r,"Container",
{enumerable:!0,get:function(){return i(l).default}});var
c=t("./display/Transform");Object.defineProperty(r,"Transform",
{enumerable:!0,get:function(){return i(c).default}});var
d=t("./display/TransformStatic");Object.defineProperty(r,"TransformStatic",
{enumerable:!0,get:function(){return i(d).default}});var
f=t("./display/TransformBase");Object.defineProperty(r,"TransformBase",
{enumerable:!0,get:function(){return i(f).default}});var
p=t("./sprites/Sprite");Object.defineProperty(r,"Sprite",
{enumerable:!0,get:function(){return i(p).default}});var
v=t("./sprites/canvas/CanvasSpriteRenderer");Object.defineProperty(r,"CanvasSpriteRe
nderer",{enumerable:!0,get:function(){return i(v).default}});var
g=t("./sprites/canvas/CanvasTinter");Object.defineProperty(r,"CanvasTinter",
{enumerable:!0,get:function(){return i(g).default}});var
y=t("./sprites/webgl/SpriteRenderer");Object.defineProperty(r,"SpriteRenderer",
{enumerable:!0,get:function(){return i(y).default}});var
m=t("./text/Text");Object.defineProperty(r,"Text",{enumerable:!0,get:function()
{return i(m).default}});var
_=t("./text/TextStyle");Object.defineProperty(r,"TextStyle",
{enumerable:!0,get:function(){return i(_).default}});var
b=t("./text/TextMetrics");Object.defineProperty(r,"TextMetrics",
{enumerable:!0,get:function(){return i(b).default}});var
x=t("./graphics/Graphics");Object.defineProperty(r,"Graphics",
{enumerable:!0,get:function(){return i(x).default}});var
T=t("./graphics/GraphicsData");Object.defineProperty(r,"GraphicsData",
{enumerable:!0,get:function(){return i(T).default}});var
w=t("./graphics/webgl/GraphicsRenderer");Object.defineProperty(r,"GraphicsRenderer",
{enumerable:!0,get:function(){return i(w).default}});var
E=t("./graphics/canvas/CanvasGraphicsRenderer");Object.defineProperty(r,"CanvasGraph
icsRenderer",{enumerable:!0,get:function(){return i(E).default}});var
S=t("./textures/Spritesheet");Object.defineProperty(r,"Spritesheet",
{enumerable:!0,get:function(){return i(S).default}});var
O=t("./textures/Texture");Object.defineProperty(r,"Texture",
{enumerable:!0,get:function(){return i(O).default}});var
M=t("./textures/TextureMatrix");Object.defineProperty(r,"TextureMatrix",
{enumerable:!0,get:function(){return i(M).default}});var
P=t("./textures/BaseTexture");Object.defineProperty(r,"BaseTexture",
{enumerable:!0,get:function(){return i(P).default}});var
C=t("./textures/RenderTexture");Object.defineProperty(r,"RenderTexture",
{enumerable:!0,get:function(){return i(C).default}});var
R=t("./textures/BaseRenderTexture");Object.defineProperty(r,"BaseRenderTexture",
{enumerable:!0,get:function(){return i(R).default}});var
A=t("./textures/VideoBaseTexture");Object.defineProperty(r,"VideoBaseTexture",
{enumerable:!0,get:function(){return i(A).default}});var
I=t("./textures/TextureUvs");Object.defineProperty(r,"TextureUvs",
{enumerable:!0,get:function(){return i(I).default}});var
D=t("./renderers/canvas/utils/CanvasRenderTarget");Object.defineProperty(r,"CanvasRe
nderTarget",{enumerable:!0,get:function(){return i(D).default}});var
L=t("./Shader");Object.defineProperty(r,"Shader",{enumerable:!0,get:function()
5/9/20, 12:55 PM
Page 34 of 181
{return i(L).default}});var
N=t("./renderers/webgl/managers/WebGLManager");Object.defineProperty(r,"WebGLManager
",{enumerable:!0,get:function(){return i(N).default}});var
B=t("./renderers/webgl/utils/ObjectRenderer");Object.defineProperty(r,"ObjectRendere
r",{enumerable:!0,get:function(){return i(B).default}});var
k=t("./renderers/webgl/utils/RenderTarget");Object.defineProperty(r,"RenderTarget",
{enumerable:!0,get:function(){return i(k).default}});var
F=t("./renderers/webgl/utils/Quad");Object.defineProperty(r,"Quad",
{enumerable:!0,get:function(){return i(F).default}});var
j=t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");Object.defineProperty(r
,"SpriteMaskFilter",{enumerable:!0,get:function(){return i(j).default}});var
U=t("./renderers/webgl/filters/Filter");Object.defineProperty(r,"Filter",
{enumerable:!0,get:function(){return i(U).default}});var
X=t("./Application");Object.defineProperty(r,"Application",
{enumerable:!0,get:function(){return i(X).default}});var
G=t("./autoDetectRenderer");Object.defineProperty(r,"autoDetectRenderer",
{enumerable:!0,get:function(){return G.autoDetectRenderer}});var
W=t("./utils"),H=n(W),Y=t("./ticker"),V=n(Y),z=t("./settings"),q=i(z),K=t("./rendere
rs/canvas/CanvasRenderer"),Z=i(K),J=t("./renderers/webgl/WebGLRenderer"),Q=i(J);r.se
ttings=q.default,r.utils=H,r.ticker=V,r.CanvasRenderer=Z.default,r.WebGLRenderer=Q.d
efault},
{"./Application":43,"./Shader":44,"./autoDetectRenderer":45,"./const":46,"./display/
Bounds":47,"./display/Container":48,"./display/DisplayObject":49,"./display/Transfor
m":50,"./display/TransformBase":51,"./display/TransformStatic":52,"./graphics/Graphi
cs":53,"./graphics/GraphicsData":54,"./graphics/canvas/CanvasGraphicsRenderer":55,".
/graphics/webgl/GraphicsRenderer":57,"./math":70,"./renderers/canvas/CanvasRenderer"
:77,"./renderers/canvas/utils/CanvasRenderTarget":79,"./renderers/webgl/WebGLRendere
r":84,"./renderers/webgl/filters/Filter":86,"./renderers/webgl/filters/spriteMask/Sp
riteMaskFilter":89,"./renderers/webgl/managers/WebGLManager":93,"./renderers/webgl/u
tils/ObjectRenderer":94,"./renderers/webgl/utils/Quad":95,"./renderers/webgl/utils/R
enderTarget":96,"./settings":101,"./sprites/Sprite":102,"./sprites/canvas/CanvasSpri
teRenderer":103,"./sprites/canvas/CanvasTinter":104,"./sprites/webgl/SpriteRenderer"
:106,"./text/Text":108,"./text/TextMetrics":109,"./text/TextStyle":110,"./textures/B
aseRenderTexture":111,"./textures/BaseTexture":112,"./textures/RenderTexture":113,".
/textures/Spritesheet":114,"./textures/Texture":115,"./textures/TextureMatrix":116,"
./textures/TextureUvs":117,"./textures/VideoBaseTexture":118,"./ticker":121,"./utils
":125,"pixi-gl-core":15}],66:[function(t,e,r){"use strict";function n(t){return t<0?
-1:t>0?1:0}r.__esModule=!0;var i=t("./Matrix"),o=function(t){return t&&t.__esModule?
t:{default:t}}(i),s=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],a=
[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],u=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],h=
[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],l=[],c=[];!function(){for(var t=0;t<16;t++)
{var e=[];c.push(e);for(var r=0;r<16;r++)for(var
i=n(s[t]*s[r]+u[t]*a[r]),d=n(a[t]*s[r]+h[t]*a[r]),f=n(s[t]*u[r]+u[t]*h[r]),p=n(a[t]*
u[r]+h[t]*h[r]),v=0;v<16;v++)if(s[v]===i&&a[v]===d&&u[v]===f&&h[v]===p)
{e.push(v);break}}for(var g=0;g<16;g++){var y=new
o.default;y.set(s[g],a[g],u[g],h[g],0,0),l.push(y)}}();var d=
{E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MIRROR_HORIZONTAL:12,uX:funct
ion(t){return s[t]},uY:function(t){return a[t]},vX:function(t){return
u[t]},vY:function(t){return h[t]},inv:function(t){return 8&t?15&t:7&-
t},add:function(t,e){return c[t][e]},sub:function(t,e){return c[t]
[d.inv(e)]},rotate180:function(t){return 4^t},isVertical:function(t){return 2==
(3&t)},byDirection:function(t,e){return 2*Math.abs(t)<=Math.abs(e)?e>=0?
d.S:d.N:2*Math.abs(e)<=Math.abs(t)?t>0?d.E:d.W:e>0?t>0?d.SE:d.SW:t>0?
d.NE:d.NW},matrixAppendRotationInv:function(t,e){var r=arguments.length>2&&void
0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:0,i=l[d.inv(e)];i.tx=r,i.ty=n,t.append(i)}};r.default=d},
{"./Matrix":67}],67:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var
i=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
5/9/20, 12:55 PM
Page 35 of 181
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("./Point"),s=function(t){return
t&&t.__esModule?t:{default:t}}(o),a=t("../const"),u=function(){function t(){var
e=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:1,s=arguments.length>4&&void 0!==arguments[4]?
arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?
arguments[5]:0;n(this,t),this.a=e,this.b=r,this.c=i,this.d=o,this.tx=s,this.ty=a,thi
s.array=null}return t.prototype.fromArray=function(t)
{this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},t.protot
ype.set=function(t,e,r,n,i,o){return
this.a=t,this.b=e,this.c=r,this.d=n,this.tx=i,this.ty=o,this},t.prototype.toArray=fu
nction(t,e){this.array||(this.array=new Float32Array(9));var r=e||this.array;return
t?
(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=thi
s.ty,r[8]=1):
(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[
7]=0,r[8]=1),r},t.prototype.apply=function(t,e){e=e||new s.default;var
r=t.x,n=t.y;return
e.x=this.a*r+this.c*n+this.tx,e.y=this.b*r+this.d*n+this.ty,e},t.prototype.applyInve
rse=function(t,e){e=e||new s.default;var r=1/(this.a*this.d+this.c*-
this.b),n=t.x,i=t.y;return e.x=this.d*r*n+-this.c*r*i+(this.ty*this.cthis.tx*this.d)*r,e.y=this.a*r*i+-this.b*r*n+(-
this.ty*this.a+this.tx*this.b)*r,e},t.prototype.translate=function(t,e){return
this.tx+=t,this.ty+=e,this},t.prototype.scale=function(t,e){return
this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},t.prototype.rota
te=function(t){var e=Math.cos(t),r=Math.sin(t),n=this.a,i=this.c,o=this.tx;return
this.a=n*e-this.b*r,this.b=n*r+this.b*e,this.c=i*ethis.d*r,this.d=i*r+this.d*e,this.tx=o*ethis.ty*r,this.ty=o*r+this.ty*e,this},t.prototype.append=function(t){var
e=this.a,r=this.b,n=this.c,i=this.d;return
this.a=t.a*e+t.b*n,this.b=t.a*r+t.b*i,this.c=t.c*e+t.d*n,this.d=t.c*r+t.d*i,this.tx=
t.tx*e+t.ty*n+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this},t.prototype.setTransform=f
unction(t,e,r,n,i,o,s,a,u){return
this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(sa)*o,this.d=Math.cos(s-a)*o,this.tx=t-(r*this.a+n*this.c),this.ty=e-
(r*this.b+n*this.d),this},t.prototype.prepend=function(t){var
e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var
r=this.a,n=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=n*t.a+this.
d*t.c,this.d=n*t.b+this.d*t.d}return
this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},t.prototype.deco
mpose=function(t){var e=this.a,r=this.b,n=this.c,i=this.d,o=-Math.atan2(-
n,i),s=Math.atan2(r,e),u=Math.abs(o+s);return u<1e-5||Math.abs(a.PI_2-u)<1e-5?
(t.rotation=s,t.skew.x=t.skew.y=0):
(t.rotation=0,t.skew.x=o,t.skew.y=s),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqr
t(n*n+i*i),t.position.x=this.tx,t.position.y=this.ty,t},t.prototype.invert=function(
){var t=this.a,e=this.b,r=this.c,n=this.d,i=this.tx,o=t*n-e*r;return
this.a=n/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-n*i)/o,this.ty=-
(t*this.ty-e*i)/o,this},t.prototype.identity=function(){return
this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},t.prototype.clone=func
tion(){var e=new t;return
e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},t.prototype
.copy=function(t){return
t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i(t,null,
[{key:"IDENTITY",get:function(){return new t}},{key:"TEMP_MATRIX",get:function()
{return new t}}]),t}();r.default=u},{"../const":46,"./Point":69}],68:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function()
5/9/20, 12:55 PM
Page 36 of 181
{function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,r){var
i=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:0;n(this,t),this._x=i,this._y=o,this.cb=e,this.scope=r}return
t.prototype.clone=function(){var e=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:null;return new
t(e||this.cb,r||this.scope,this._x,this._y)},t.prototype.set=function(t,e){var
r=t||0,n=e||(0!==e?r:0);this._x===r&&this._y===n||
(this._x=r,this._y=n,this.cb.call(this.scope))},t.prototype.copy=function(t)
{this._x===t.x&&this._y===t.y||
(this._x=t.x,this._y=t.y,this.cb.call(this.scope))},t.prototype.equals=function(t)
{return t.x===this._x&&t.y===this._y},i(t,[{key:"x",get:function(){return
this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))}},
{key:"y",get:function(){return this._y},set:function(t){this._y!==t&&
(this._y=t,this.cb.call(this.scope))}}]),t}();r.default=o},{}],69:[function(t,e,r)
{"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call
a class as a function")}r.__esModule=!0;var i=function(){function t(){var
e=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0;n(this,t),this.x=e,this.y=r}return t.prototype.clone=function()
{return new t(this.x,this.y)},t.prototype.copy=function(t)
{this.set(t.x,t.y)},t.prototype.equals=function(t){return
t.x===this.x&&t.y===this.y},t.prototype.set=function(t,e){this.x=t||0,this.y=e||
(0!==e?this.x:0)},t}();r.default=i},{}],70:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var
i=t("./Point");Object.defineProperty(r,"Point",{enumerable:!0,get:function(){return
n(i).default}});var
o=t("./ObservablePoint");Object.defineProperty(r,"ObservablePoint",
{enumerable:!0,get:function(){return n(o).default}});var
s=t("./Matrix");Object.defineProperty(r,"Matrix",{enumerable:!0,get:function()
{return n(s).default}});var a=t("./GroupD8");Object.defineProperty(r,"GroupD8",
{enumerable:!0,get:function(){return n(a).default}});var
u=t("./shapes/Circle");Object.defineProperty(r,"Circle",
{enumerable:!0,get:function(){return n(u).default}});var
h=t("./shapes/Ellipse");Object.defineProperty(r,"Ellipse",
{enumerable:!0,get:function(){return n(h).default}});var
l=t("./shapes/Polygon");Object.defineProperty(r,"Polygon",
{enumerable:!0,get:function(){return n(l).default}});var
c=t("./shapes/Rectangle");Object.defineProperty(r,"Rectangle",
{enumerable:!0,get:function(){return n(c).default}});var
d=t("./shapes/RoundedRectangle");Object.defineProperty(r,"RoundedRectangle",
{enumerable:!0,get:function(){return n(d).default}})},
{"./GroupD8":66,"./Matrix":67,"./ObservablePoint":68,"./Point":69,"./shapes/Circle":
71,"./shapes/Ellipse":72,"./shapes/Polygon":73,"./shapes/Rectangle":74,"./shapes/Rou
ndedRectangle":75}],71:[function(t,e,r){"use strict";function n(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=t("./Rectangle"),o=function(t){return
t&&t.__esModule?t:{default:t}}(i),s=t("../../const"),a=function(){function t(){var
e=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:0;n(this,t),this.x=e,this.y=r,this.radius=i,this.type=s.SHAPES.CIRC}ret
urn t.prototype.clone=function(){return new
t(this.x,this.y,this.radius)},t.prototype.contains=function(t,e)
{if(this.radius<=0)return!1;var r=this.radius*this.radius,n=this.x-t,i=this.ye;return n*=n,i*=i,n+i<=r},t.prototype.getBounds=function(){return new
5/9/20, 12:55 PM
Page 37 of 181
o.default(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)},t}
();r.default=a},{"../../const":46,"./Rectangle":74}],72:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=t("./Rectangle"),o=function(t){return
t&&t.__esModule?t:{default:t}}(i),s=t("../../const"),a=function(){function t(){var
e=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:0;n(this,t),this.x=e,this.y=r,this.width=i,this.height=o,this.type=s.SH
APES.ELIP}return t.prototype.clone=function(){return new
t(this.x,this.y,this.width,this.height)},t.prototype.contains=function(t,e)
{if(this.width<=0||this.height<=0)return!1;var r=(t-this.x)/this.width,n=(ethis.y)/this.height;return r*=r,n*=n,r+n<=1},t.prototype.getBounds=function(){return
new o.default(this.x-this.width,this.y-this.height,this.width,this.height)},t}
();r.default=a},{"../../const":46,"./Rectangle":74}],73:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=t("../Point"),o=function(t){return
t&&t.__esModule?t:{default:t}}(i),s=t("../../const"),a=function(){function t()
{for(var
e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];if(n(this,t),Array.isArr
ay(r[0])&&(r=r[0]),r[0]instanceof o.default){for(var a=
[],u=0,h=r.length;u<h;u++)a.push(r[u].x,r[u].y);r=a}this.closed=!0,this.points=r,thi
s.type=s.SHAPES.POLY}return t.prototype.clone=function(){return new
t(this.points.slice())},t.prototype.close=function(){var
t=this.points;t[0]===t[t.length-2]&&t[1]===t[t.length1]||t.push(t[0],t[1])},t.prototype.contains=function(t,e){for(var
r=!1,n=this.points.length/2,i=0,o=n-1;i<n;o=i++){var
s=this.points[2*i],a=this.points[2*i+1],u=this.points[2*o],h=this.points[2*o+1];a>e!
=h>e&&t<(e-a)/(h-a)*(u-s)+s&&(r=!r)}return r},t}();r.default=a},
{"../../const":46,"../Point":69}],74:[function(t,e,r){"use strict";function n(t,e)
{if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=function(){function t(t,e){for(var
r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../../const"),s=function(){function t(){var
e=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:0;n(this,t),this.x=Number(e),this.y=Number(r),this.width=Number(i),this
.height=Number(s),this.type=o.SHAPES.RECT}return t.prototype.clone=function(){return
new t(this.x,this.y,this.width,this.height)},t.prototype.copy=function(t){return
this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},t.prototype.cont
ains=function(t,e){return!(this.width<=0||this.height<=0)&&
(t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height)},t.prototype.pad=f
unction(t,e){t=t||0,e=e||(0!==e?t:0),this.x-=t,this.y-
=e,this.width+=2*t,this.height+=2*e},t.prototype.fit=function(t){var
e=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),n=Math.max(this.y,t
.y),i=Math.min(this.y+this.height,t.y+t.height);this.x=e,this.width=Math.max(re,0),this.y=n,this.height=Math.max(i-n,0)},t.prototype.enlarge=function(t){var
e=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),n=Math.min(this.y,t
.y),i=Math.max(this.y+this.height,t.y+t.height);this.x=e,this.width=re,this.y=n,this.height=i-n},t.prototype.ceil=function(){var
t=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:.001,r=Math.ceil((this.x+this.widthe)*t)/t,n=Math.ceil((this.y+this.heighte)*t)/t;this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.wid
5/9/20, 12:55 PM
Page 38 of 181
th=r-this.x,this.height=n-this.y},i(t,[{key:"left",get:function(){return this.x}},
{key:"right",get:function(){return this.x+this.width}},{key:"top",get:function()
{return this.y}},{key:"bottom",get:function(){return this.y+this.height}}],
[{key:"EMPTY",get:function(){return new t(0,0,0,0)}}]),t}();r.default=s},
{"../../const":46}],75:[function(t,e,r){"use strict";function n(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=t("../../const"),o=function(){function t(){var
e=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?
arguments[4]:20;n(this,t),this.x=e,this.y=r,this.width=o,this.height=s,this.radius=a
,this.type=i.SHAPES.RREC}return t.prototype.clone=function(){return new
t(this.x,this.y,this.width,this.height,this.radius)},t.prototype.contains=function(t
,e)
{if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=th
is.y&&e<=this.y+this.height){if(e>=this.y+this.radius&&e<=this.y+this.heightthis.radius||t>=this.x+this.radius&&t<=this.x+this.width-this.radius)return!0;var
r=t-(this.x+this.radius),n=e-
(this.y+this.radius),i=this.radius*this.radius;if(r*r+n*n<=i)return!0;if((r=t-
(this.x+this.width-this.radius))*r+n*n<=i)return!0;if(n=e-(this.y+this.heightthis.radius),r*r+n*n<=i)return!0;if((r=t-
(this.x+this.radius))*r+n*n<=i)return!0}return!1},t}();r.default=o},
{"../../const":46}],76:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),u=t("../utils"),h=t("../math"),l=t("../const"),c=t("../settings"),d=n(c),f=t("../
display/Container"),p=n(f),v=t("../textures/RenderTexture"),g=n(v),y=t("eventemitter
3"),m=n(y),_=new h.Matrix,b=function(t){function e(r,n,s,a){i(this,e);var
c=o(this,t.call(this));return(0,u.sayHello)(r),"number"==typeof n&&
(n=Object.assign({width:n,height:s||d.default.RENDER_OPTIONS.height},a)),n=Object.as
sign({},d.default.RENDER_OPTIONS,n),c.options=n,c.type=l.RENDERER_TYPE.UNKNOWN,c.scr
een=new
h.Rectangle(0,0,n.width,n.height),c.view=n.view||document.createElement("canvas"),c.
resolution=n.resolution||d.default.RESOLUTION,c.transparent=n.transparent,c.autoResi
ze=n.autoResize||!1,c.blendModes=null,c.preserveDrawingBuffer=n.preserveDrawingBuffe
r,c.clearBeforeRender=n.clearBeforeRender,c.roundPixels=n.roundPixels,c._backgroundC
olor=0,c._backgroundColorRgba=
[0,0,0,0],c._backgroundColorString="#000000",c.backgroundColor=n.backgroundColor||c.
_backgroundColor,c._tempDisplayObjectParent=new
p.default,c._lastObjectRendered=c._tempDisplayObjectParent,c}return
s(e,t),e.prototype.resize=function(t,e)
{this.screen.width=t,this.screen.height=e,this.view.width=t*this.resolution,this.vie
w.height=e*this.resolution,this.autoResize&&
(this.view.style.width=t+"px",this.view.style.height=e+"px")},e.prototype.generateTe
xture=function(t,e,r,n){n=n||t.getLocalBounds();var
i=g.default.create(0|n.width,0|n.height,e,r);return _.tx=-n.x,_.ty=-
n.y,this.render(t,i,!1,_,!!t.parent),i},e.prototype.destroy=function(t)
{t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view),this.type=l.RE
5/9/20, 12:55 PM
Page 39 of 181
NDERER_TYPE.UNKNOWN,this.view=null,this.screen=null,this.resolution=0,this.transpare
nt=!1,this.autoResize=!1,this.blendModes=null,this.options=null,this.preserveDrawing
Buffer=!1,this.clearBeforeRender=!1,this.roundPixels=!1,this._backgroundColor=0,this
._backgroundColorRgba=null,this._backgroundColorString=null,this._tempDisplayObjectP
arent=null,this._lastObjectRendered=null},a(e,[{key:"width",get:function(){return
this.view.width}},{key:"height",get:function(){return this.view.height}},
{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(t)
{this._backgroundColor=t,this._backgroundColorString=(0,u.hex2string)(t),
(0,u.hex2rgb)(t,this._backgroundColorRgba)}}]),e}(m.default);r.default=b},
{"../const":46,"../display/Container":48,"../math":70,"../settings":101,"../textures
/RenderTexture":113,"../utils":125,eventemitter3:3}],77:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../SystemRenderer"),u=n(a),h=t("./utils/CanvasMaskManager"),l=n(h),c=t("./utils
/CanvasRenderTarget"),d=n(c),f=t("./utils/mapCanvasBlendModesToPixi"),p=n(f),v=t("..
/../utils"),g=t("../../const"),y=t("../../settings"),m=n(y),_=function(t){function
e(r,n,s){i(this,e);var a=o(this,t.call(this,"Canvas",r,n,s));return
a.type=g.RENDERER_TYPE.CANVAS,a.rootContext=a.view.getContext("2d",
{alpha:a.transparent}),a.context=a.rootContext,a.refresh=!0,a.maskManager=new
l.default(a),a.smoothProperty="imageSmoothingEnabled",a.rootContext.imageSmoothingEn
abled||(a.rootContext.webkitImageSmoothingEnabled?
a.smoothProperty="webkitImageSmoothingEnabled":a.rootContext.mozImageSmoothingEnable
d?a.smoothProperty="mozImageSmoothingEnabled":a.rootContext.oImageSmoothingEnabled?
a.smoothProperty="oImageSmoothingEnabled":a.rootContext.msImageSmoothingEnabled&&
(a.smoothProperty="msImageSmoothingEnabled")),a.initPlugins(),a.blendModes=
(0,p.default)
(),a._activeBlendMode=null,a.renderingToScreen=!1,a.resize(a.options.width,a.options
.height),a}return s(e,t),e.prototype.render=function(t,e,r,n,i){if(this.view)
{this.renderingToScreen=!e,this.emit("prerender");var o=this.resolution;e?
(e=e.baseTexture||e,e._canvasRenderTarget||(e._canvasRenderTarget=new
d.default(e.width,e.height,e.resolution),e.source=e._canvasRenderTarget.canvas,e.val
id=!0),this.context=e._canvasRenderTarget.context,this.resolution=e._canvasRenderTar
get.resolution):this.context=this.rootContext;var s=this.context;if(e||
(this._lastObjectRendered=t),!i){var
a=t.parent,u=this._tempDisplayObjectParent.transform.worldTransform;n?
(n.copy(u),this._tempDisplayObjectParent.transform._worldID=-1):u.identity(),t.paren
t=this._tempDisplayObjectParent,t.updateTransform(),t.parent=a}s.save(),s.setTransfo
rm(1,0,0,1,0,0),s.globalAlpha=1,this._activeBlendMode=g.BLEND_MODES.NORMAL,s.globalC
ompositeOperation=this.blendModes[g.BLEND_MODES.NORMAL],navigator.isCocoonJS&&this.v
iew.screencanvas&&(s.fillStyle="black",s.clear()),
(void 0!==r?r:this.clearBeforeRender)&&this.renderingToScreen&&(this.transparent?
s.clearRect(0,0,this.width,this.height):
(s.fillStyle=this._backgroundColorString,s.fillRect(0,0,this.width,this.height)));va
r
h=this.context;this.context=s,t.renderCanvas(this),this.context=h,s.restore(),this.r
esolution=o,this.emit("postrender")}},e.prototype.clear=function(t){var
e=this.context;t=t||this._backgroundColorString,!this.transparent&&t?
(e.fillStyle=t,e.fillRect(0,0,this.width,this.height)):e.clearRect(0,0,this.width,th
is.height)},e.prototype.setBlendMode=function(t){this._activeBlendMode!==t&&
(this._activeBlendMode=t,this.context.globalCompositeOperation=this.blendModes[t])},
e.prototype.destroy=function(e)
{this.destroyPlugins(),t.prototype.destroy.call(this,e),this.context=null,this.refre
sh=!0,this.maskManager.destroy(),this.maskManager=null,this.smoothProperty=null},e.p
rototype.resize=function(e,r)
5/9/20, 12:55 PM
Page 40 of 181
{t.prototype.resize.call(this,e,r),this.smoothProperty&&
(this.rootContext[this.smoothProperty]=m.default.SCALE_MODE===g.SCALE_MODES.LINEAR)}
,e.prototype.invalidateBlendMode=function()
{this._activeBlendMode=this.blendModes.indexOf(this.context.globalCompositeOperation
)},e}(u.default);r.default=_,v.pluginTarget.mixin(_)},
{"../../const":46,"../../settings":101,"../../utils":125,"../SystemRenderer":76,"./u
tils/CanvasMaskManager":78,"./utils/CanvasRenderTarget":79,"./utils/mapCanvasBlendMo
desToPixi":81}],78:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var
i=t("../../../const"),o=function(){function t(e){n(this,t),this.renderer=e}return
t.prototype.pushMask=function(t){var e=this.renderer;e.context.save();var
r=t.alpha,n=t.transform.worldTransform,i=e.resolution;e.context.setTransform(n.a*i,n
.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),t._texture||
(this.renderGraphicsShape(t),e.context.clip()),t.worldAlpha=r},t.prototype.renderGra
phicsShape=function(t){var e=this.renderer.context,r=t.graphicsData.length;if(0!==r)
{e.beginPath();for(var n=0;n<r;n++){var
o=t.graphicsData[n],s=o.shape;if(o.type===i.SHAPES.POLY){var
a=s.points,u=o.holes,h=void 0,l=void 0;e.moveTo(a[0],a[1]);for(var
c=2;c<a.length;c+=2)e.lineTo(a[c],a[c+1]);if(a[0]===a[a.length2]&&a[1]===a[a.length-1]&&e.closePath(),u.length>0){h=0;for(var
d=0;d<a.length;d+=2)h+=a[d]*a[d+3]-a[d+1]*a[d+2];for(var f=0;f<u.length;f++)
{a=u[f].points,l=0;for(var p=0;p<a.length;p+=2)l+=a[p]*a[p+3]-
a[p+1]*a[p+2];if(e.moveTo(a[0],a[1]),l*h<0)for(var
v=2;v<a.length;v+=2)e.lineTo(a[v],a[v+1]);else for(var g=a.length-2;g>=2;g-
=2)e.lineTo(a[g],a[g+1])}}}else
if(o.type===i.SHAPES.RECT)e.rect(s.x,s.y,s.width,s.height),e.closePath();else
if(o.type===i.SHAPES.CIRC)e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath();else
if(o.type===i.SHAPES.ELIP){var y=2*s.width,m=2*s.height,_=s.x-y/2,b=s.ym/2,x=y/2*.5522848,T=m/2*.5522848,w=_+y,E=b+m,S=_+y/2,O=b+m/2;e.moveTo(_,O),e.bezier
CurveTo(_,O-T,S-x,b,S,b),e.bezierCurveTo(S+x,b,w,OT,w,O),e.bezierCurveTo(w,O+T,S+x,E,S,E),e.bezierCurveTo(Sx,E,_,O+T,_,O),e.closePath()}else if(o.type===i.SHAPES.RREC){var
M=s.x,P=s.y,C=s.width,R=s.height,A=s.radius,I=Math.min(C,R)/2|0;A=A>I?
I:A,e.moveTo(M,P+A),e.lineTo(M,P+RA),e.quadraticCurveTo(M,P+R,M+A,P+R),e.lineTo(M+CA,P+R),e.quadraticCurveTo(M+C,P+R,M+C,P+RA),e.lineTo(M+C,P+A),e.quadraticCurveTo(M+C,P,M+CA,P),e.lineTo(M+A,P),e.quadraticCurveTo(M,P,M,P+A),e.closePath()}}}},t.prototype.pop
Mask=function(t)
{t.context.restore(),t.invalidateBlendMode()},t.prototype.destroy=function(){},t}
();r.default=o},{"../../../const":46}],79:[function(t,e,r){"use strict";function
n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=function(){function t(t,e){for(var
r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../../../settings"),s=function(t){return
t&&t.__esModule?t:{default:t}}(o),a=function(){function t(e,r,i)
{n(this,t),this.canvas=document.createElement("canvas"),this.context=this.canvas.get
Context("2d"),this.resolution=i||s.default.RESOLUTION,this.resize(e,r)}return
t.prototype.clear=function()
{this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width
,this.canvas.height)},t.prototype.resize=function(t,e)
{this.canvas.width=t*this.resolution,this.canvas.height=e*this.resolution},t.prototy
pe.destroy=function(){this.context=null,this.canvas=null},i(t,
[{key:"width",get:function(){return this.canvas.width},set:function(t)
{this.canvas.width=t}},{key:"height",get:function(){return
this.canvas.height},set:function(t){this.canvas.height=t}}]),t}();r.default=a},
{"../../../settings":101}],80:[function(t,e,r){"use strict";function n(t){var
e=document.createElement("canvas");e.width=6,e.height=1;var
5/9/20, 12:55 PM
Page 41 of 181
r=e.getContext("2d");return r.fillStyle=t,r.fillRect(0,0,6,1),e}function i()
{if("undefined"==typeof document)return!1;var
t=n("#ff00ff"),e=n("#ffff00"),r=document.createElement("canvas");r.width=6,r.height=
1;var
i=r.getContext("2d");i.globalCompositeOperation="multiply",i.drawImage(t,0,0),i.draw
Image(e,2,0);var o=i.getImageData(2,0,1,1);if(!o)return!1;var s=o.data;return
255===s[0]&&0===s[1]&&0===s[2]}r.__esModule=!0,r.default=i},{}],81:[function(t,e,r)
{"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:[];return(0,s.default)()?(t[i.BLEND_MODES.NORMAL]="sourceover",t[i.BLEND_MODES.ADD]="lighter",t[i.BLEND_MODES.MULTIPLY]="multiply",t[i.BLEND_
MODES.SCREEN]="screen",t[i.BLEND_MODES.OVERLAY]="overlay",t[i.BLEND_MODES.DARKEN]="d
arken",t[i.BLEND_MODES.LIGHTEN]="lighten",t[i.BLEND_MODES.COLOR_DODGE]="colordodge",t[i.BLEND_MODES.COLOR_BURN]="color-burn",t[i.BLEND_MODES.HARD_LIGHT]="hardlight",t[i.BLEND_MODES.SOFT_LIGHT]="softlight",t[i.BLEND_MODES.DIFFERENCE]="difference",t[i.BLEND_MODES.EXCLUSION]="exclusio
n",t[i.BLEND_MODES.HUE]="hue",t[i.BLEND_MODES.SATURATION]="saturate",t[i.BLEND_MODES
.COLOR]="color",t[i.BLEND_MODES.LUMINOSITY]="luminosity"):
(t[i.BLEND_MODES.NORMAL]="sourceover",t[i.BLEND_MODES.ADD]="lighter",t[i.BLEND_MODES.MULTIPLY]="sourceover",t[i.BLEND_MODES.SCREEN]="source-over",t[i.BLEND_MODES.OVERLAY]="sourceover",t[i.BLEND_MODES.DARKEN]="source-over",t[i.BLEND_MODES.LIGHTEN]="sourceover",t[i.BLEND_MODES.COLOR_DODGE]="sourceover",t[i.BLEND_MODES.COLOR_BURN]="source-over",t[i.BLEND_MODES.HARD_LIGHT]="sourceover",t[i.BLEND_MODES.SOFT_LIGHT]="source-over",t[i.BLEND_MODES.DIFFERENCE]="sourceover",t[i.BLEND_MODES.EXCLUSION]="source-over",t[i.BLEND_MODES.HUE]="sourceover",t[i.BLEND_MODES.SATURATION]="source-over",t[i.BLEND_MODES.COLOR]="sourceover",t[i.BLEND_MODES.LUMINOSITY]="sourceover"),t[i.BLEND_MODES.NORMAL_NPM]=t[i.BLEND_MODES.NORMAL],t[i.BLEND_MODES.ADD_NPM]=
t[i.BLEND_MODES.ADD],t[i.BLEND_MODES.SCREEN_NPM]=t[i.BLEND_MODES.SCREEN],t}r.__esMod
ule=!0,r.default=n;var
i=t("../../../const"),o=t("./canUseNewCanvasBlendModes"),s=function(t){return
t&&t.__esModule?t:{default:t}}(o)},
{"../../../const":46,"./canUseNewCanvasBlendModes":80}],82:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var
i=t("../../const"),o=t("../../settings"),s=function(t){return t&&t.__esModule?t:
{default:t}}(o),a=function(){function t(e)
{n(this,t),this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=s.default.GC_
MAX_IDLE,this.checkCountMax=s.default.GC_MAX_CHECK_COUNT,this.mode=s.default.GC_MODE
}return t.prototype.update=function()
{this.count++,this.mode!==i.GC_MODES.MANUAL&&++this.checkCount>this.checkCountMax&&
(this.checkCount=0,this.run())},t.prototype.run=function(){for(var
t=this.renderer.textureManager,e=t._managedTextures,r=!1,n=0;n<e.length;n++){var
i=e[n];!i._glRenderTargets&&this.count-i.touched>this.maxIdle&&
(t.destroyTexture(i,!0),e[n]=null,r=!0)}if(r){for(var
o=0,s=0;s<e.length;s++)null!==e[s]&&
(e[o++]=e[s]);e.length=o}},t.prototype.unload=function(t){var
e=this.renderer.textureManager;t._texture&&t._texture._glRenderTargets&&e.destroyTex
ture(t._texture,!0);for(var r=t.children.length-1;r>=0;r--
)this.unload(t.children[r])},t}();r.default=a},
{"../../const":46,"../../settings":101}],83:[function(t,e,r){"use strict";function
n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=t("pixi-glcore"),o=t("../../const"),s=t("./utils/RenderTarget"),a=function(t){return
t&&t.__esModule?t:{default:t}}(s),u=t("../../utils"),h=function(){function t(e)
{n(this,t),this.renderer=e,this.gl=e.gl,this._managedTextures=[]}return
t.prototype.bindTexture=function(){},t.prototype.getTexture=function()
{},t.prototype.updateTexture=function(t,e){var
r=this.gl,n=!!t._glRenderTargets;if(!t.hasLoaded)return null;var
s=this.renderer.boundTextures;if(void 0===e){e=0;for(var
5/9/20, 12:55 PM
Page 42 of 181
u=0;u<s.length;++u)if(s[u]===t){e=u;break}}s[e]=t,r.activeTexture(r.TEXTURE0+e);var
h=t._glTextures[this.renderer.CONTEXT_UID];if(h)n?
t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width,t.height):h.upload(t.so
urce);else{if(n){var l=new
a.default(this.gl,t.width,t.height,t.scaleMode,t.resolution);l.resize(t.width,t.heig
ht),t._glRenderTargets[this.renderer.CONTEXT_UID]=l,h=l.texture,this.renderer._activ
eRenderTarget.root||this.renderer._activeRenderTarget.frameBuffer.bind()}else h=new
i.GLTexture(this.gl,null,null,null,null),h.bind(e),h.premultiplyAlpha=!0,h.upload(t.
source);t._glTextures[this.renderer.CONTEXT_UID]=h,t.on("update",this.updateTexture,
this),t.on("dispose",this.destroyTexture,this),this._managedTextures.push(t),t.isPow
erOfTwo?(t.mipmap&&h.enableMipmap(),t.wrapMode===o.WRAP_MODES.CLAMP?
h.enableWrapClamp():t.wrapMode===o.WRAP_MODES.REPEAT?
h.enableWrapRepeat():h.enableWrapMirrorRepeat()):h.enableWrapClamp(),t.scaleMode===o
.SCALE_MODES.NEAREST?h.enableNearestScaling():h.enableLinearScaling()}return
h},t.prototype.destroyTexture=function(t,e){if(t=t.baseTexture||t,t.hasLoaded){var
r=this.renderer,n=r.CONTEXT_UID,i=t._glTextures,o=t._glRenderTargets;if(i[n]&&
(r.unbindTexture(t),i[n].destroy(),t.off("update",this.updateTexture,this),t.off("di
spose",this.destroyTexture,this),delete i[n],!e)){var
s=this._managedTextures.indexOf(t);-1!==s&&(0,u.removeItems)
(this._managedTextures,s,1)}o&&o[n]&&
(r._activeRenderTarget===o[n]&&r.bindRenderTarget(r.rootRenderTarget),o[n].destroy()
,delete o[n])}},t.prototype.removeAll=function(){for(var
t=0;t<this._managedTextures.length;++t){var
e=this._managedTextures[t];e._glTextures[this.renderer.CONTEXT_UID]&&delete
e._glTextures[this.renderer.CONTEXT_UID]}},t.prototype.destroy=function(){for(var
t=0;t<this._managedTextures.length;++t){var
e=this._managedTextures[t];this.destroyTexture(e,!0),e.off("update",this.updateTextu
re,this),e.off("dispose",this.destroyTexture,this)}this._managedTextures=null},t}
();r.default=h},{"../../const":46,"../../utils":125,"./utils/RenderTarget":96,"pixigl-core":15}],84:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?
t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call
a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../SystemRenderer"),u=n(a),h=t("./managers/MaskManager"),l=n(h),c=t("./managers
/StencilManager"),d=n(c),f=t("./managers/FilterManager"),p=n(f),v=t("./utils/RenderT
arget"),g=n(v),y=t("./utils/ObjectRenderer"),m=n(y),_=t("./TextureManager"),b=n(_),x
=t("../../textures/BaseTexture"),T=n(x),w=t("./TextureGarbageCollector"),E=n(w),S=t(
"./WebGLState"),O=n(S),M=t("./utils/mapWebGLDrawModesToPixi"),P=n(M),C=t("./utils/va
lidateContext"),R=n(C),A=t("../../utils"),I=t("pixi-glcore"),D=n(I),L=t("../../const"),N=0,B=function(t){function e(r,n,s){i(this,e);var
a=o(this,t.call(this,"WebGL",r,n,s));return a.legacy=a.options.legacy,a.legacy&&
(D.default.VertexArrayObject.FORCE_NATIVE=!0),a.type=L.RENDERER_TYPE.WEBGL,a.handleC
ontextLost=a.handleContextLost.bind(a),a.handleContextRestored=a.handleContextRestor
ed.bind(a),a.view.addEventListener("webglcontextlost",a.handleContextLost,!1),a.view
.addEventListener("webglcontextrestored",a.handleContextRestored,!1),a._contextOptio
ns=
{alpha:a.transparent,antialias:a.options.antialias,premultipliedAlpha:a.transparent&
&"notMultiplied"!==a.transparent,stencil:!0,preserveDrawingBuffer:a.options.preserve
DrawingBuffer,powerPreference:a.options.powerPreference},a._backgroundColorRgba[3]=a
.transparent?0:1,a.maskManager=new l.default(a),a.stencilManager=new
d.default(a),a.emptyRenderer=new
m.default(a),a.currentRenderer=a.emptyRenderer,a.textureManager=null,a.filterManager
=null,a.initPlugins(),a.options.context&&(0,R.default)
(a.options.context),a.gl=a.options.context||D.default.createContext(a.view,a._contex
tOptions),a.CONTEXT_UID=N++,a.state=new
5/9/20, 12:55 PM
Page 43 of 181
O.default(a.gl),a.renderingToScreen=!0,a.boundTextures=null,a._activeShader=null,a._
activeVao=null,a._activeRenderTarget=null,a._initContext(),a.drawModes=(0,P.default)
(a.gl),a._nextTextureLocation=0,a.setBlendMode(0),a}return
s(e,t),e.prototype._initContext=function(){var
t=this.gl;t.isContextLost()&&t.getExtension("WEBGL_lose_context")&&t.getExtension("W
EBGL_lose_context").restoreContext();var
e=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this._activeShader=null,this._activeVao=
null,this.boundTextures=new Array(e),this.emptyTextures=new
Array(e),this._unknownBoundTextures=!1,this.textureManager=new
b.default(this),this.filterManager=new p.default(this),this.textureGC=new
E.default(this),this.state.resetToDefault(),this.rootRenderTarget=new
g.default(t,this.width,this.height,null,this.resolution,!0),this.rootRenderTarget.cl
earColor=this._backgroundColorRgba,this.bindRenderTarget(this.rootRenderTarget);var
r=new D.default.GLTexture.fromData(t,null,1,1),n={_glTextures:
{}};n._glTextures[this.CONTEXT_UID]={};for(var i=0;i<e;i++){var o=new
T.default;o._glTextures[this.CONTEXT_UID]=r,this.boundTextures[i]=n,this.emptyTextur
es[i]=o,this.bindTexture(null,i)}this.emit("context",t),this.resize(this.screen.widt
h,this.screen.height)},e.prototype.render=function(t,e,r,n,i)
{if(this.renderingToScreen=!e,this.emit("prerender"),this.gl&&!this.gl.isContextLost
()){if(this._nextTextureLocation=0,e||(this._lastObjectRendered=t),!i){var
o=t.parent;t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=o}thi
s.bindRenderTexture(e,n),this.currentRenderer.start(),(void 0!==r?
r:this.clearBeforeRender)&&this._activeRenderTarget.clear(),t.renderWebGL(this),this
.currentRenderer.flush(),this.textureGC.update(),this.emit("postrender")}},e.prototy
pe.setObjectRenderer=function(t){this.currentRenderer!==t&&
(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},e
.prototype.flush=function()
{this.setObjectRenderer(this.emptyRenderer)},e.prototype.resize=function(t,e)
{u.default.prototype.resize.call(this,t,e),this.rootRenderTarget.resize(t,e),this._a
ctiveRenderTarget===this.rootRenderTarget&&
(this.rootRenderTarget.activate(),this._activeShader&&
(this._activeShader.uniforms.projectionMatrix=this.rootRenderTarget.projectionMatrix
.toArray(!0)))},e.prototype.setBlendMode=function(t)
{this.state.setBlendMode(t)},e.prototype.clear=function(t)
{this._activeRenderTarget.clear(t)},e.prototype.setTransform=function(t)
{this._activeRenderTarget.transform=t},e.prototype.clearRenderTexture=function(t,e)
{var r=t.baseTexture,n=r._glRenderTargets[this.CONTEXT_UID];return
n&&n.clear(e),this},e.prototype.bindRenderTexture=function(t,e){var r=void 0;if(t)
{var
n=t.baseTexture;n._glRenderTargets[this.CONTEXT_UID]||this.textureManager.updateText
ure(n,0),this.unbindTexture(n),r=n._glRenderTargets[this.CONTEXT_UID],r.setFrame(t.f
rame)}else r=this.rootRenderTarget;return
r.transform=e,this.bindRenderTarget(r),this},e.prototype.bindRenderTarget=function(t
){return t!==this._activeRenderTarget&&
(this._activeRenderTarget=t,t.activate(),this._activeShader&&
(this._activeShader.uniforms.projectionMatrix=t.projectionMatrix.toArray(!0)),this.s
tencilManager.setMaskStack(t.stencilMaskStack)),this},e.prototype.bindShader=functio
n(t,e){return this._activeShader!==t&&(this._activeShader=t,t.bind(),!1!==e&&
(t.uniforms.projectionMatrix=this._activeRenderTarget.projectionMatrix.toArray(!0)))
,this},e.prototype.bindTexture=function(t,e,r)
{if(t=t||this.emptyTextures[e],t=t.baseTexture||t,t.touched=this.textureGC.count,r)e
=e||0;else{for(var
n=0;n<this.boundTextures.length;n++)if(this.boundTextures[n]===t)return n;void
0===e&&
(this._nextTextureLocation++,this._nextTextureLocation%=this.boundTextures.length,e=
this.boundTextures.length-this._nextTextureLocation-1)}var
i=this.gl,o=t._glTextures[this.CONTEXT_UID];return o?
(this.boundTextures[e]=t,i.activeTexture(i.TEXTURE0+e),i.bindTexture(i.TEXTURE_2D,o.
texture)):this.textureManager.updateTexture(t,e),e},e.prototype.unbindTexture=functi
on(t){var e=this.gl;if(t=t.baseTexture||t,this._unknownBoundTextures)
5/9/20, 12:55 PM
Page 44 of 181
{this._unknownBoundTextures=!1;for(var
r=0;r<this.boundTextures.length;r++)this.boundTextures[r]===this.emptyTextures[r]&&
(e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_2D,this.emptyTextures[r]._glT
extures[this.CONTEXT_UID].texture))}for(var
n=0;n<this.boundTextures.length;n++)this.boundTextures[n]===t&&
(this.boundTextures[n]=this.emptyTextures[n],e.activeTexture(e.TEXTURE0+n),e.bindTex
ture(e.TEXTURE_2D,this.emptyTextures[n]._glTextures[this.CONTEXT_UID].texture));retu
rn this},e.prototype.createVao=function(){return new
D.default.VertexArrayObject(this.gl,this.state.attribState)},e.prototype.bindVao=fun
ction(t){return this._activeVao===t?this:(t?
t.bind():this._activeVao&&this._activeVao.unbind(),this._activeVao=t,this)},e.protot
ype.reset=function()
{this.setObjectRenderer(this.emptyRenderer),this.bindVao(null),this._activeShader=nu
ll,this._activeRenderTarget=this.rootRenderTarget,this._unknownBoundTextures=!0;for(
var
t=0;t<this.boundTextures.length;t++)this.boundTextures[t]=this.emptyTextures[t];retu
rn
this.rootRenderTarget.activate(),this.state.resetToDefault(),this},e.prototype.handl
eContextLost=function(t)
{t.preventDefault()},e.prototype.handleContextRestored=function()
{this.textureManager.removeAll(),this.filterManager.destroy(!0),this._initContext()}
,e.prototype.destroy=function(e)
{this.destroyPlugins(),this.view.removeEventListener("webglcontextlost",this.handleC
ontextLost),this.view.removeEventListener("webglcontextrestored",this.handleContextR
estored),this.textureManager.destroy(),t.prototype.destroy.call(this,e),this.uid=0,t
his.maskManager.destroy(),this.stencilManager.destroy(),this.filterManager.destroy()
,this.maskManager=null,this.filterManager=null,this.textureManager=null,this.current
Renderer=null,this.handleContextLost=null,this.handleContextRestored=null,this._cont
extOptions=null,this.gl.useProgram(null),this.gl.getExtension("WEBGL_lose_context")&
&this.gl.getExtension("WEBGL_lose_context").loseContext(),this.gl=null},e}
(u.default);r.default=B,A.pluginTarget.mixin(B)},
{"../../const":46,"../../textures/BaseTexture":112,"../../utils":125,"../SystemRende
rer":76,"./TextureGarbageCollector":82,"./TextureManager":83,"./WebGLState":85,"./ma
nagers/FilterManager":90,"./managers/MaskManager":91,"./managers/StencilManager":92,
"./utils/ObjectRenderer":94,"./utils/RenderTarget":96,"./utils/mapWebGLDrawModesToPi
xi":99,"./utils/validateContext":100,"pixi-gl-core":15}],85:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var
i=t("./utils/mapWebGLBlendModesToPixi"),o=function(t){return t&&t.__esModule?t:
{default:t}}(i),s=function(){function t(e){n(this,t),this.activeState=new
Uint8Array(16),this.defaultState=new
Uint8Array(16),this.defaultState[0]=1,this.stackIndex=0,this.stack=
[],this.gl=e,this.maxAttribs=e.getParameter(e.MAX_VERTEX_ATTRIBS),this.attribState=
{tempAttribState:new Array(this.maxAttribs),attribState:new
Array(this.maxAttribs)},this.blendModes=(0,o.default)
(e),this.nativeVaoExtension=e.getExtension("OES_vertex_array_object")||e.getExtensio
n("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object")}r
eturn t.prototype.push=function(){var t=this.stack[this.stackIndex];t||
(t=this.stack[this.stackIndex]=new Uint8Array(16)),++this.stackIndex;for(var
e=0;e<this.activeState.length;e++)t[e]=this.activeState[e]},t.prototype.pop=function
(){var t=this.stack[--
this.stackIndex];this.setState(t)},t.prototype.setState=function(t)
{this.setBlend(t[0]),this.setDepthTest(t[1]),this.setFrontFace(t[2]),this.setCullFac
e(t[3]),this.setBlendMode(t[4])},t.prototype.setBlend=function(t){t=t?
1:0,this.activeState[0]!==t&&(this.activeState[0]=t,this.gl[t?"enable":"disable"]
(this.gl.BLEND))},t.prototype.setBlendMode=function(t){if(t!==this.activeState[4])
{this.activeState[4]=t;var e=this.blendModes[t];2===e.length?
this.gl.blendFunc(e[0],e[1]):this.gl.blendFuncSeparate(e[0],e[1],e[2],e[3])}},t.prot
otype.setDepthTest=function(t){t=t?1:0,this.activeState[1]!==t&&
(this.activeState[1]=t,this.gl[t?"enable":"disable"]
5/9/20, 12:55 PM
Page 45 of 181
(this.gl.DEPTH_TEST))},t.prototype.setCullFace=function(t){t=t?
1:0,this.activeState[3]!==t&&(this.activeState[3]=t,this.gl[t?"enable":"disable"]
(this.gl.CULL_FACE))},t.prototype.setFrontFace=function(t){t=t?
1:0,this.activeState[2]!==t&&
(this.activeState[2]=t,this.gl.frontFace(this.gl[t?"CW":"CCW"]))},t.prototype.resetA
ttributes=function(){for(var
t=0;t<this.attribState.tempAttribState.length;t++)this.attribState.tempAttribState[t
]=0;for(var
e=0;e<this.attribState.attribState.length;e++)this.attribState.attribState[e]=0;for(
var
r=1;r<this.maxAttribs;r++)this.gl.disableVertexAttribArray(r)},t.prototype.resetToDe
fault=function()
{this.nativeVaoExtension&&this.nativeVaoExtension.bindVertexArrayOES(null),this.rese
tAttributes();for(var
t=0;t<this.activeState.length;++t)this.activeState[t]=32;this.gl.pixelStorei(this.gl
.UNPACK_FLIP_Y_WEBGL,!1),this.setState(this.defaultState)},t}();r.default=s},
{"./utils/mapWebGLBlendModesToPixi":98}],86:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw
new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function()
{function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),s=t("./extractUniformsFromSrc"),a=n(s),u=t("../../../utils"),h=t("../../../const"
),l=t("../../../settings"),c=n(l),d={},f=function(){function t(e,r,n)
{i(this,t),this.vertexSrc=e||t.defaultVertexSrc,this.fragmentSrc=r||t.defaultFragmen
tSrc,this._blendMode=h.BLEND_MODES.NORMAL,this.uniformData=n||(0,a.default)
(this.vertexSrc,this.fragmentSrc,"projectionMatrix|uSampler"),this.uniforms=
{};for(var o in
this.uniformData)this.uniforms[o]=this.uniformData[o].value,this.uniformData[o].type
&&(this.uniformData[o].type=this.uniformData[o].type.toLowerCase());this.glShaders=
{},d[this.vertexSrc+this.fragmentSrc]||(d[this.vertexSrc+this.fragmentSrc]=(0,u.uid)
()),this.glShaderKey=d[this.vertexSrc+this.fragmentSrc],this.padding=4,this.resoluti
on=c.default.FILTER_RESOLUTION,this.enabled=!0,this.autoFit=!0}return
t.prototype.apply=function(t,e,r,n,i){t.applyFilter(this,e,r,n)},o(t,
[{key:"blendMode",get:function(){return this._blendMode},set:function(t)
{this._blendMode=t}}],[{key:"defaultVertexSrc",get:function(){return["attribute vec2
aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3
projectionMatrix;","uniform mat3 filterMatrix;","varying vec2
vTextureCoord;","varying vec2 vFilterCoord;","void main(void){"," gl_Position =
vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","
vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0) ).xy;"," vTextureCoord
= aTextureCoord ;","}"].join("\n")}},{key:"defaultFragmentSrc",get:function()
{return["varying vec2 vTextureCoord;","varying vec2 vFilterCoord;","uniform
sampler2D uSampler;","uniform sampler2D filterSampler;","void main(void){"," vec4
masky = texture2D(filterSampler, vFilterCoord);"," vec4 sample =
texture2D(uSampler, vTextureCoord);"," vec4 color;"," if(mod(vFilterCoord.x,
1.0) > 0.5)"," {"," color = vec4(1.0, 0.0, 0.0, 1.0);"," }"," else","
{"," color = vec4(0.0, 1.0, 0.0, 1.0);"," }"," gl_FragColor = mix(sample,
masky, 0.5);"," gl_FragColor *= sample.a;","}"].join("\n")}}]),t}();r.default=f},
{"../../../const":46,"../../../settings":101,"../../../utils":125,"./extractUniforms
FromSrc":87}],87:[function(t,e,r){"use strict";function n(t,e,r){var
n=i(t),o=i(e);return Object.assign(n,o)}function i(t){for(var e=new
RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"),r={},n=void
0,i=t.replace(/\s+/g," ").split(/\s*;\s*/),o=0;o<i.length;o++){var
s=i[o].trim();if(s.indexOf("uniform")>-1){var u=s.split("
"),h=u[1],l=u[2],c=1;l.indexOf("[")>-1&&(n=l.split(/\
[|]/),l=n[0],c*=Number(n[1])),l.match(e)||(r[l]=
{value:a(h,c),name:l,type:h})}}return r}r.__esModule=!0,r.default=n;var o=t("pixigl-core"),s=function(t){return t&&t.__esModule?t:{default:t}}
5/9/20, 12:55 PM
Page 46 of 181
(o),a=s.default.shader.defaultValue},{"pixi-gl-core":15}],88:[function(t,e,r){"use
strict";function n(t,e,r){var n=t.identity();return
n.translate(e.x/r.width,e.y/r.height),n.scale(r.width,r.height),n}function i(t,e,r)
{var n=t.identity();n.translate(e.x/r.width,e.y/r.height);var
i=r.width/e.width,o=r.height/e.height;return n.scale(i,o),n}function o(t,e,r,n){var
i=n._texture.orig,o=t.set(r.width,0,0,r.height,e.x,e.y),a=n.worldTransform.copy(s.Ma
trix.TEMP_MATRIX);return
a.invert(),o.prepend(a),o.scale(1/i.width,1/i.height),o.translate(n.anchor.x,n.ancho
r.y),o}r.__esModule=!0,r.calculateScreenSpaceMatrix=n,r.calculateNormalizedScreenSpa
ceMatrix=i,r.calculateSpriteMatrix=o;var s=t("../../../math")},
{"../../../math":70}],89:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../Filter"),u=n(a),h=t("../../../../math"),l=
(t("path"),t("../../../../textures/TextureMatrix")),c=n(l),d=function(t){function
e(r){i(this,e);var n=new h.Matrix,s=o(this,t.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying
vec2 vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix
* vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n vTextureCoord = aTextureCoord;\n
vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0) ).xy;\n}\n","varying vec2
vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform
sampler2D mask;\nuniform float alpha;\nuniform vec4 maskClamp;\n\nvoid
main(void)\n{\n float clip = step(3.5,\n step(maskClamp.x, vMaskCoord.x)
+\n step(maskClamp.y, vMaskCoord.y) +\n step(vMaskCoord.x,
maskClamp.z) +\n step(vMaskCoord.y, maskClamp.w));\n\n vec4 original =
texture2D(uSampler, vTextureCoord);\n vec4 masky = texture2D(mask,
vMaskCoord);\n\n original *= (masky.r * masky.a * alpha * clip);\n\n
gl_FragColor = original;\n}\n"));return
r.renderable=!1,s.maskSprite=r,s.maskMatrix=n,s}return
s(e,t),e.prototype.apply=function(t,e,r,n){var
i=this.maskSprite,o=this.maskSprite.texture;o.valid&&(o.transform||(o.transform=new
c.default(o,0)),o.transform.update(),this.uniforms.mask=o,this.uniforms.otherMatrix=
t.calculateSpriteMatrix(this.maskMatrix,i).prepend(o.transform.mapCoord),this.unifor
ms.alpha=i.worldAlpha,this.uniforms.maskClamp=o.transform.uClampFrame,t.applyFilter(
this,e,r,n))},e}(u.default);r.default=d},
{"../../../../math":70,"../../../../textures/TextureMatrix":116,"../Filter":86,path:
8}],90:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}function i(t,e){if(!t)throw new ReferenceError("this hasn't been
initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw
new TypeError("Cannot call a class as a function")}r.__esModule=!0;var
a=t("./WebGLManager"),u=n(a),h=t("../utils/RenderTarget"),l=n(h),c=t("../utils/Quad"
),d=n(c),f=t("../../../math"),p=t("../../../Shader"),v=n(p),g=t("../filters/filterTr
ansforms"),y=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r
in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(g),m=t("bit-twiddle"),_=n(m),b=function(){function t()
{s(this,t),this.renderTarget=null,this.target=null,this.resolution=1,this.sourceFram
e=new f.Rectangle,this.destinationFrame=new f.Rectangle,this.filters=[]}return
t.prototype.clear=function()
5/9/20, 12:55 PM
Page 47 of 181
{this.filters=null,this.target=null,this.renderTarget=null},t}(),x=function(t)
{function e(r){s(this,e);var n=i(this,t.call(this,r));return
n.gl=n.renderer.gl,n.quad=new d.default(n.gl,r.state.attribState),n.shaderCache=
{},n.pool={},n.filterData=null,n.managedFilters=
[],n.renderer.on("prerender",n.onPrerender,n),n._screenWidth=r.view.width,n._screenH
eight=r.view.height,n}return o(e,t),e.prototype.pushFilter=function(t,e){var
r=this.renderer,n=this.filterData;if(!n)
{n=this.renderer._activeRenderTarget.filterStack;var i=new
b;i.sourceFrame=i.destinationFrame=this.renderer._activeRenderTarget.size,i.renderTa
rget=r._activeRenderTarget,this.renderer._activeRenderTarget.filterData=n=
{index:0,stack:[i]},this.filterData=n}var
o=n.stack[++n.index],s=n.stack[0].destinationFrame;o||(o=n.stack[n.index]=new b);var
a=t.filterArea&&0===t.filterArea.x&&0===t.filterArea.y&&t.filterArea.width===r.scree
n.width&&t.filterArea.height===r.screen.height,u=e[0].resolution,h=0|e[0].padding,l=
a?r.screen:t.filterArea||t.getBounds(!0),c=o.sourceFrame,d=o.destinationFrame;c.x=
(l.x*u|0)/u,c.y=(l.y*u|0)/u,c.width=(l.width*u|0)/u,c.height=(l.height*u|0)/u,a||
(n.stack[0].renderTarget.transform||e[0].autoFit&&c.fit(s),c.pad(h)),d.width=c.width
,d.height=c.height;var
f=this.getPotRenderTarget(r.gl,c.width,c.height,u);o.target=t,o.filters=e,o.resoluti
on=u,o.renderTarget=f,f.setFrame(d,c),r.bindRenderTarget(f),f.clear()},e.prototype.p
opFilter=function(){var t=this.filterData,e=t.stack[t.index1],r=t.stack[t.index];this.quad.map(r.renderTarget.size,r.sourceFrame).upload();var
n=r.filters;if(1===n.length)n[0].apply(this,r.renderTarget,e.renderTarget,!1,r),this
.freePotRenderTarget(r.renderTarget);else{var
i=r.renderTarget,o=this.getPotRenderTarget(this.renderer.gl,r.sourceFrame.width,r.so
urceFrame.height,r.resolution);o.setFrame(r.destinationFrame,r.sourceFrame),o.clear(
);var s=0;for(s=0;s<n.length-1;++s){n[s].apply(this,i,o,!0,r);var
a=i;i=o,o=a}n[s].apply(this,i,e.renderTarget,!1,r),this.freePotRenderTarget(i),this.
freePotRenderTarget(o)}r.clear(),0===--t.index&&
(this.filterData=null)},e.prototype.applyFilter=function(t,e,r,n){
var i=this.renderer,o=i.gl,s=t.glShaders[i.CONTEXT_UID];s||(t.glShaderKey?
(s=this.shaderCache[t.glShaderKey])||(s=new
v.default(this.gl,t.vertexSrc,t.fragmentSrc),t.glShaders[i.CONTEXT_UID]=this.shaderC
ache[t.glShaderKey]=s,this.managedFilters.push(t)):(s=t.glShaders[i.CONTEXT_UID]=new
v.default(this.gl,t.vertexSrc,t.fragmentSrc),this.managedFilters.push(t)),i.bindVao(
null),this.quad.initVao(s)),i.bindVao(this.quad.vao),i.bindRenderTarget(r),n&&
(o.disable(o.SCISSOR_TEST),i.clear(),o.enable(o.SCISSOR_TEST)),r===i.maskManager.sci
ssorRenderTarget&&i.maskManager.pushScissorMask(null,i.maskManager.scissorData),i.bi
ndShader(s);var
a=this.renderer.emptyTextures[0];this.renderer.boundTextures[0]=a,this.syncUniforms(
s,t),i.state.setBlendMode(t.blendMode),o.activeTexture(o.TEXTURE0),o.bindTexture(o.T
EXTURE_2D,e.texture.texture),this.quad.vao.draw(this.renderer.gl.TRIANGLES,6,0),o.bi
ndTexture(o.TEXTURE_2D,a._glTextures[this.renderer.CONTEXT_UID].texture)},e.prototyp
e.syncUniforms=function(t,e){var r=e.uniformData,n=e.uniforms,i=1,o=void
0;if(t.uniforms.filterArea){o=this.filterData.stack[this.filterData.index];var
s=t.uniforms.filterArea;s[0]=o.renderTarget.size.width,s[1]=o.renderTarget.size.heig
ht,s[2]=o.sourceFrame.x,s[3]=o.sourceFrame.y,t.uniforms.filterArea=s}if(t.uniforms.f
ilterClamp){o=o||this.filterData.stack[this.filterData.index];var
a=t.uniforms.filterClamp;a[0]=0,a[1]=0,a[2]=(o.sourceFrame.width1)/o.renderTarget.size.width,a[3]=(o.sourceFrame.height1)/o.renderTarget.size.height,t.uniforms.filterClamp=a}for(var u in
r)if(t.uniforms.data[u]){var h=r[u].type;if("sampler2d"===h&&0!==n[u])
{if(n[u].baseTexture)t.uniforms[u]=this.renderer.bindTexture(n[u].baseTexture,i);els
e{t.uniforms[u]=i;var
l=this.renderer.gl;this.renderer.boundTextures[i]=this.renderer.emptyTextures[i],l.a
ctiveTexture(l.TEXTURE0+i),n[u].texture.bind()}i++}else if("mat3"===h)void
0!==n[u].a?t.uniforms[u]=n[u].toArray(!0):t.uniforms[u]=n[u];else
if("vec2"===h)if(void 0!==n[u].x){var c=t.uniforms[u]||new
Float32Array(2);c[0]=n[u].x,c[1]=n[u].y,t.uniforms[u]=c}else
t.uniforms[u]=n[u];else"float"===h?t.uniforms.data[u].value!==r[u]&&
5/9/20, 12:55 PM
Page 48 of 181
(t.uniforms[u]=n[u]):t.uniforms[u]=n[u]}},e.prototype.getRenderTarget=function(t,e)
{var
r=this.filterData.stack[this.filterData.index],n=this.getPotRenderTarget(this.render
er.gl,r.sourceFrame.width,r.sourceFrame.height,e||r.resolution);return
n.setFrame(r.destinationFrame,r.sourceFrame),n},e.prototype.returnRenderTarget=funct
ion(t)
{this.freePotRenderTarget(t)},e.prototype.calculateScreenSpaceMatrix=function(t){var
e=this.filterData.stack[this.filterData.index];return
y.calculateScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size)},e.prototype.calcu
lateNormalizedScreenSpaceMatrix=function(t){var
e=this.filterData.stack[this.filterData.index];return
y.calculateNormalizedScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size,e.destina
tionFrame)},e.prototype.calculateSpriteMatrix=function(t,e){var
r=this.filterData.stack[this.filterData.index];return
y.calculateSpriteMatrix(t,r.sourceFrame,r.renderTarget.size,e)},e.prototype.destroy=
function(){var t=arguments.length>0&&void
0!==arguments[0]&&arguments[0],e=this.renderer,r=this.managedFilters;e.off("prerende
r",this.onPrerender,this);for(var
n=0;n<r.length;n++)t||r[n].glShaders[e.CONTEXT_UID].destroy(),delete
r[n].glShaders[e.CONTEXT_UID];this.shaderCache={},t?this.pool=
{}:this.emptyPool()},e.prototype.getPotRenderTarget=function(t,e,r,n){var
i="screen";e*=n,r*=n,e===this._screenWidth&&r===this._screenHeight||
(e=_.default.nextPow2(e),r=_.default.nextPow2(r),i=(65535&e)
<<16|65535&r),this.pool[i]||(this.pool[i]=[]);var o=this.pool[i].pop();if(!o){var
s=this.renderer.boundTextures[0];t.activeTexture(t.TEXTURE0),o=new
l.default(t,e,r,null,1),t.bindTexture(t.TEXTURE_2D,s._glTextures[this.renderer.CONTE
XT_UID].texture)}return
o.resolution=n,o.defaultFrame.width=o.size.width=e/n,o.defaultFrame.height=o.size.he
ight=r/n,o.filterPoolKey=i,o},e.prototype.emptyPool=function(){for(var t in
this.pool){var e=this.pool[t];if(e)for(var
r=0;r<e.length;r++)e[r].destroy(!0)}this.pool=
{}},e.prototype.freePotRenderTarget=function(t)
{this.pool[t.filterPoolKey].push(t)},e.prototype.onPrerender=function()
{if(this._screenWidth!==this.renderer.view.width||this._screenHeight!==this.renderer
.view.height)
{this._screenWidth=this.renderer.view.width,this._screenHeight=this.renderer.view.he
ight;var t=this.pool.screen;if(t)for(var
e=0;e<t.length;e++)t[e].destroy(!0);this.pool.screen=[]}},e}
(u.default);r.default=x},
{"../../../Shader":44,"../../../math":70,"../filters/filterTransforms":88,"../utils/
Quad":95,"../utils/RenderTarget":96,"./WebGLManager":93,"bit-twiddle":1}],91:
[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("./WebGLManager"),u=n(a),h=t("../filters/spriteMask/SpriteMaskFilter"),l=n(h),c=
function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return
n.scissor=!1,n.scissorData=null,n.scissorRenderTarget=null,n.enableScissor=!0,n.alph
aMaskPool=[],n.alphaMaskIndex=0,n}return s(e,t),e.prototype.pushMask=function(t,e)
{if(e.texture)this.pushSpriteMask(t,e);else
if(this.enableScissor&&!this.scissor&&this.renderer._activeRenderTarget.root&&!this.
renderer.stencilManager.stencilMaskStack.length&&e.isFastRect()){var
r=e.worldTransform,n=Math.atan2(r.b,r.a);n=Math.round(n*(180/Math.PI)),n%90?
this.pushStencilMask(e):this.pushScissorMask(t,e)}else
this.pushStencilMask(e)},e.prototype.popMask=function(t,e){e.texture?
5/9/20, 12:55 PM
Page 49 of 181
this.popSpriteMask(t,e):this.enableScissor&&!this.renderer.stencilManager.stencilMas
kStack.length?
this.popScissorMask(t,e):this.popStencilMask(t,e)},e.prototype.pushSpriteMask=functi
on(t,e){var r=this.alphaMaskPool[this.alphaMaskIndex];r||
(r=this.alphaMaskPool[this.alphaMaskIndex]=[new
l.default(e)]),r[0].resolution=this.renderer.resolution,r[0].maskSprite=e;var
n=t.filterArea;t.filterArea=e.getBounds(!0),this.renderer.filterManager.pushFilter(t
,r),t.filterArea=n,this.alphaMaskIndex++},e.prototype.popSpriteMask=function()
{this.renderer.filterManager.popFilter(),this.alphaMaskIndex--
},e.prototype.pushStencilMask=function(t)
{this.renderer.currentRenderer.stop(),this.renderer.stencilManager.pushStencil(t)},e
.prototype.popStencilMask=function()
{this.renderer.currentRenderer.stop(),this.renderer.stencilManager.popStencil()},e.p
rototype.pushScissorMask=function(t,e){e.renderable=!0;var
r=this.renderer._activeRenderTarget,n=e.getBounds();n.fit(r.size),e.renderable=!1,th
is.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);var
i=this.renderer.resolution;this.renderer.gl.scissor(n.x*i,(r.root?r.size.height-n.yn.height:n.y)*i,n.width*i,n.height*i),this.scissorRenderTarget=r,this.scissorData=e,
this.scissor=!0},e.prototype.popScissorMask=function()
{this.scissorRenderTarget=null,this.scissorData=null,this.scissor=!1;var
t=this.renderer.gl;t.disable(t.SCISSOR_TEST)},e}(u.default);r.default=c},
{"../filters/spriteMask/SpriteMaskFilter":89,"./WebGLManager":93}],92:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("./WebGLManager"),a=function(t){return t&&t.__esModule?t:{default:t}}
(s),u=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return
o.stencilMaskStack=null,o}return o(e,t),e.prototype.setMaskStack=function(t)
{this.stencilMaskStack=t;var e=this.renderer.gl;0===t.length?
e.disable(e.STENCIL_TEST):e.enable(e.STENCIL_TEST)},e.prototype.pushStencil=function
(t)
{this.renderer.setObjectRenderer(this.renderer.plugins.graphics),this.renderer._acti
veRenderTarget.attachStencilBuffer();var
e=this.renderer.gl,r=this.stencilMaskStack.length;0===r&&e.enable(e.STENCIL_TEST),th
is.stencilMaskStack.push(t),e.colorMask(!1,!1,!1,!1),e.stencilFunc(e.EQUAL,r,this._g
etBitwiseMask()),e.stencilOp(e.KEEP,e.KEEP,e.INCR),this.renderer.plugins.graphics.re
nder(t),this._useCurrent()},e.prototype.popStencil=function()
{this.renderer.setObjectRenderer(this.renderer.plugins.graphics);var
t=this.renderer.gl,e=this.stencilMaskStack.pop();0===this.stencilMaskStack.length?
(t.disable(t.STENCIL_TEST),t.clear(t.STENCIL_BUFFER_BIT),t.clearStencil(0)):
(t.colorMask(!1,!1,!1,!1),t.stencilOp(t.KEEP,t.KEEP,t.DECR),this.renderer.plugins.gr
aphics.render(e),this._useCurrent())},e.prototype._useCurrent=function(){var
t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.stencilMaskSt
ack.length,this._getBitwiseMask()),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e.prototype._g
etBitwiseMask=function()
{return(1<<this.stencilMaskStack.length)-1},e.prototype.destroy=function()
{a.default.prototype.destroy.call(this),this.stencilMaskStack.stencilStack=null},e}
(a.default);r.default=u},{"./WebGLManager":93}],93:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=function(){function t(e)
{n(this,t),this.renderer=e,this.renderer.on("context",this.onContextChange,this)}ret
urn t.prototype.onContextChange=function(){},t.prototype.destroy=function()
{this.renderer.off("context",this.onContextChange,this),this.renderer=null},t}
();r.default=i},{}],94:[function(t,e,r){"use strict";function n(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
5/9/20, 12:55 PM
Page 50 of 181
i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("../managers/WebGLManager"),a=function(t){return t&&t.__esModule?t:{default:t}}
(s),u=function(t){function e(){return
n(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.start=function()
{},e.prototype.stop=function(){this.flush()},e.prototype.flush=function()
{},e.prototype.render=function(t){},e}(a.default);r.default=u},
{"../managers/WebGLManager":93}],95:[function(t,e,r){"use strict";function n(t)
{return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("pixi-glcore"),s=n(o),a=t("../../../utils/createIndicesForQuads"),u=n(a),h=function()
{function t(e,r){i(this,t),this.gl=e,this.vertices=new
Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new
Float32Array([0,0,1,0,1,1,0,1]),this.interleaved=new Float32Array(16);for(var
n=0;n<4;n++)this.interleaved[4*n]=this.vertices[2*n],this.interleaved[4*n+1]=this.ve
rtices[2*n+1],this.interleaved[4*n+2]=this.uvs[2*n],this.interleaved[4*n+3]=this.uvs
[2*n+1];this.indices=(0,u.default)
(1),this.vertexBuffer=s.default.GLBuffer.createVertexBuffer(e,this.interleaved,e.STA
TIC_DRAW),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(e,this.indices,e.STA
TIC_DRAW),this.vao=new s.default.VertexArrayObject(e,r)}return
t.prototype.initVao=function(t)
{this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer,t.attrib
utes.aVertexPosition,this.gl.FLOAT,!1,16,0).addAttribute(this.vertexBuffer,t.attribu
tes.aTextureCoord,this.gl.FLOAT,!1,16,8)},t.prototype.map=function(t,e){var
r=0,n=0;return
this.uvs[0]=r,this.uvs[1]=n,this.uvs[2]=r+e.width/t.width,this.uvs[3]=n,this.uvs[4]=
r+e.width/t.width,this.uvs[5]=n+e.height/t.height,this.uvs[6]=r,this.uvs[7]=n+e.heig
ht/t.height,r=e.x,n=e.y,this.vertices[0]=r,this.vertices[1]=n,this.vertices[2]=r+e.w
idth,this.vertices[3]=n,this.vertices[4]=r+e.width,this.vertices[5]=n+e.height,this.
vertices[6]=r,this.vertices[7]=n+e.height,this},t.prototype.upload=function()
{for(var
t=0;t<4;t++)this.interleaved[4*t]=this.vertices[2*t],this.interleaved[4*t+1]=this.ve
rtices[2*t+1],this.interleaved[4*t+2]=this.uvs[2*t],this.interleaved[4*t+3]=this.uvs
[2*t+1];return
this.vertexBuffer.upload(this.interleaved),this},t.prototype.destroy=function(){var
t=this.gl;t.deleteBuffer(this.vertexBuffer),t.deleteBuffer(this.indexBuffer)},t}
();r.default=h},{"../../../utils/createIndicesForQuads":123,"pixi-gl-core":15}],96:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var
i=t("../../../math"),o=t("../../../const"),s=t("../../../settings"),a=function(t)
{return t&&t.__esModule?t:{default:t}}(s),u=t("pixi-gl-core"),h=function(){function
t(e,r,s,h,l,c)
{n(this,t),this.gl=e,this.frameBuffer=null,this.texture=null,this.clearColor=
[0,0,0,0],this.size=new
i.Rectangle(0,0,1,1),this.resolution=l||a.default.RESOLUTION,this.projectionMatrix=n
ew i.Matrix,this.transform=null,this.frame=null,this.defaultFrame=new
i.Rectangle,this.destinationFrame=null,this.sourceFrame=null,this.stencilBuffer=null
,this.stencilMaskStack=
[],this.filterData=null,this.filterPoolKey="",this.scaleMode=void 0!==h?
h:a.default.SCALE_MODE,this.root=c||!1,this.root?(this.frameBuffer=new
u.GLFramebuffer(e,100,100),this.frameBuffer.framebuffer=null):
(this.frameBuffer=u.GLFramebuffer.createRGBA(e,100,100),this.scaleMode===o.SCALE_MOD
ES.NEAREST?
this.frameBuffer.texture.enableNearestScaling():this.frameBuffer.texture.enableLinea
rScaling(),this.texture=this.frameBuffer.texture),this.setFrame(),this.resize(r,s)}r
eturn t.prototype.clear=function(t){var
5/9/20, 12:55 PM
Page 51 of 181
e=t||this.clearColor;this.frameBuffer.clear(e[0],e[1],e[2],e[3])},t.prototype.attach
StencilBuffer=function()
{this.root||this.frameBuffer.enableStencil()},t.prototype.setFrame=function(t,e)
{this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=
e||this.sourceFrame||this.destinationFrame},t.prototype.activate=function(){var
t=this.gl;this.frameBuffer.bind(),this.calculateProjection(this.destinationFrame,thi
s.sourceFrame),this.transform&&this.projectionMatrix.append(this.transform),this.des
tinationFrame!==this.sourceFrame?
(t.enable(t.SCISSOR_TEST),t.scissor(0|this.destinationFrame.x,0|this.destinationFram
e.y,this.destinationFrame.width*this.resolution|0,this.destinationFrame.height*this.
resolution|0)):t.disable(t.SCISSOR_TEST),t.viewport(0|this.destinationFrame.x,0|this
.destinationFrame.y,this.destinationFrame.width*this.resolution|0,this.destinationFr
ame.height*this.resolution|0)},t.prototype.calculateProjection=function(t,e){var
r=this.projectionMatrix;e=e||t,r.identity(),this.root?
(r.a=1/t.width*2,r.d=-1/t.height*2,r.tx=-1-e.x*r.a,r.ty=1-e.y*r.d):
(r.a=1/t.width*2,r.d=1/t.height*2,r.tx=-1-e.x*r.a,r.ty=-1-
e.y*r.d)},t.prototype.resize=function(t,e)
{if(t|=0,e|=0,this.size.width!==t||this.size.height!==e)
{this.size.width=t,this.size.height=e,this.defaultFrame.width=t,this.defaultFrame.he
ight=e,this.frameBuffer.resize(t*this.resolution,e*this.resolution);var
r=this.frame||this.size;this.calculateProjection(r)}},t.prototype.destroy=function()
{this.frameBuffer.stencil&&this.gl.deleteRenderbuffer(this.frameBuffer.stencil),this
.frameBuffer.destroy(),this.frameBuffer=null,this.texture=null},t}();r.default=h},
{"../../../const":46,"../../../math":70,"../../../settings":101,"pixi-glcore":15}],97:[function(t,e,r){"use strict";function n(t,e){var r=!e;if(r){var
n=document.createElement("canvas");n.width=1,n.height=1,e=s.default.createContext(n)
}for(var o=e.createShader(e.FRAGMENT_SHADER);;){var
u=a.replace(/%forloop%/gi,i(t));if(e.shaderSource(o,u),e.compileShader(o),e.getShade
rParameter(o,e.COMPILE_STATUS))break;t=t/2|0}return
r&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").loseCo
ntext(),t}function i(t){for(var e="",r=0;r<t;++r)r>0&&(e+="\nelse "),r<t-1&&
(e+="if(test == "+r+".0){}");return e}r.__esModule=!0,r.default=n;var o=t("pixi-glcore"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=["precision mediump
float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor =
vec4(0.0);","}"].join("\n")},{"pixi-gl-core":15}],98:[function(t,e,r){"use
strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:
[];return e[i.BLEND_MODES.NORMAL]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.ADD]=
[t.ONE,t.DST_ALPHA],e[i.BLEND_MODES.MULTIPLY]=
[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SCREEN]=
[t.ONE,t.ONE_MINUS_SRC_COLOR],e[i.BLEND_MODES.OVERLAY]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DARKEN]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LIGHTEN]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_DODGE]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_BURN]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HARD_LIGHT]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SOFT_LIGHT]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DIFFERENCE]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.EXCLUSION]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HUE]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SATURATION]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LUMINOSITY]=
[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.NORMAL_NPM]=
[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.ADD_
NPM]=[t.SRC_ALPHA,t.DST_ALPHA,t.ONE,t.DST_ALPHA],e[i.BLEND_MODES.SCREEN_NPM]=
[t.SRC_ALPHA,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_COLOR],e}r.__esModule=!0,r.
default=n;var i=t("../../../const")},{"../../../const":46}],99:[function(t,e,r){"use
strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:
{};return
5/9/20, 12:55 PM
Page 52 of 181
e[i.DRAW_MODES.POINTS]=t.POINTS,e[i.DRAW_MODES.LINES]=t.LINES,e[i.DRAW_MODES.LINE_LO
OP]=t.LINE_LOOP,e[i.DRAW_MODES.LINE_STRIP]=t.LINE_STRIP,e[i.DRAW_MODES.TRIANGLES]=t.
TRIANGLES,e[i.DRAW_MODES.TRIANGLE_STRIP]=t.TRIANGLE_STRIP,e[i.DRAW_MODES.TRIANGLE_FA
N]=t.TRIANGLE_FAN,e}r.__esModule=!0,r.default=n;var i=t("../../../const")},
{"../../../const":46}],100:[function(t,e,r){"use strict";function n(t)
{t.getContextAttributes().stencil||console.warn("Provided WebGL context does not
have a stencil buffer, masks may not render
correctly")}r.__esModule=!0,r.default=n},{}],101:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var
i=t("./utils/maxRecommendedTextures"),o=n(i),s=t("./utils/canUploadSameBuffer"),a=n(
s);r.default=
{TARGET_FPMS:.06,MIPMAP_TEXTURES:!0,RESOLUTION:1,FILTER_RESOLUTION:1,SPRITE_MAX_TEXT
URES:(0,o.default)(32),SPRITE_BATCH_SIZE:4096,RETINA_PREFIX:/@([0-
9\.]+)x/,RENDER_OPTIONS:
{view:null,antialias:!1,forceFXAA:!1,autoResize:!1,transparent:!1,backgroundColor:0,
clearBeforeRender:!0,preserveDrawingBuffer:!1,roundPixels:!1,width:800,height:600,le
gacy:!1},TRANSFORM_MODE:0,GC_MODE:0,GC_MAX_IDLE:3600,GC_MAX_CHECK_COUNT:600,WRAP_MOD
E:0,SCALE_MODE:0,PRECISION_VERTEX:"highp",PRECISION_FRAGMENT:"mediump",CAN_UPLOAD_SA
ME_BUFFER:(0,a.default)(),MESH_CANVAS_PADDING:0}},
{"./utils/canUploadSameBuffer":122,"./utils/maxRecommendedTextures":127}],102:
[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function
t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),u=t("../math"),h=t("../utils"),l=t("../const"),c=t("../textures/Texture"),d=n(c),
f=t("../display/Container"),p=n(f),v=new u.Point,g=function(t){function e(r)
{i(this,e);var n=o(this,t.call(this));return n._anchor=new
u.ObservablePoint(n._onAnchorUpdate,n,r?r.defaultAnchor.x:0,r?
r.defaultAnchor.y:0),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=
null,n.tint=16777215,n.blendMode=l.BLEND_MODES.NORMAL,n.shader=null,n.cachedTint=167
77215,n.texture=r||d.default.EMPTY,n.vertexData=new
Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transf
ormTrimmedID=-1,n._textureTrimmedID=-1,n.pluginName="sprite",n}return
s(e,t),e.prototype._onTextureUpdate=function()
{this._textureID=-1,this._textureTrimmedID=-1,this.cachedTint=16777215,this._width&&
(this.scale.x=(0,h.sign)
(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=
(0,h.sign)
(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=
function()
{this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=fun
ction()
{if(this._transformID!==this.transform._worldID||this._textureID!==this._texture._up
dateID)
{this._transformID=this.transform._worldID,this._textureID=this._texture._updateID;v
ar
t=this._texture,e=this.transform.worldTransform,r=e.a,n=e.b,i=e.c,o=e.d,s=e.tx,a=e.t
y,u=this.vertexData,h=t.trim,l=t.orig,c=this._anchor,d=0,f=0,p=0,v=0;h?(f=h.xc._x*l.width,d=f+h.width,v=h.y-c._y*l.height,p=v+h.height):(f=-
c._x*l.width,d=f+l.width,v=-
c._y*l.height,p=v+l.height),u[0]=r*f+i*v+s,u[1]=o*v+n*f+a,u[2]=r*d+i*v+s,u[3]=o*v+n*
5/9/20, 12:55 PM
Page 53 of 181
d+a,u[4]=r*d+i*p+s,u[5]=o*p+n*d+a,u[6]=r*f+i*p+s,u[7]=o*p+n*f+a}},e.prototype.calcul
ateTrimmedVertices=function(){if(this.vertexTrimmedData)
{if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===thi
s._texture._updateID)return}else this.vertexTrimmedData=new
Float32Array(8);this._transformTrimmedID=this.transform._worldID,this._textureTrimme
dID=this._texture._updateID;var
t=this._texture,e=this.vertexTrimmedData,r=t.orig,n=this._anchor,i=this.transform.wo
rldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=-n._x*r.width,d=c+r.width,f=-
n._y*r.height,p=f+r.height;e[0]=o*c+a*f+h,e[1]=u*f+s*c+l,e[2]=o*d+a*f+h,e[3]=u*f+s*d
+l,e[4]=o*d+a*p+h,e[5]=u*p+s*d+l,e[6]=o*c+a*p+h,e[7]=u*p+s*c+l},e.prototype._renderW
ebGL=function(t)
{this.calculateVertices(),t.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[
this.pluginName].render(this)},e.prototype._renderCanvas=function(t)
{t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function()
{var
t=this._texture.trim,e=this._texture.orig;!t||t.width===e.width&&t.height===e.height
?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):
(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.pr
ototype.getLocalBounds=function(e){return 0===this.children.length?
(this._bounds.minX=this._texture.orig.width*-
this._anchor._x,this._bounds.minY=this._texture.orig.height*-
this._anchor._y,this._bounds.maxX=this._texture.orig.width*(1-
this._anchor._x),this._bounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||
(this._localBoundsRect||(this._localBoundsRect=new
u.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getL
ocalBounds.call(this,e)},e.prototype.containsPoint=function(t)
{this.worldTransform.applyInverse(t,v);var
e=this._texture.orig.width,r=this._texture.orig.height,n=-e*this.anchor.x,i=0;return
v.x>=n&&v.x<n+e&&(i=-
r*this.anchor.y,v.y>=i&&v.y<i+r)},e.prototype.destroy=function(e)
{if(t.prototype.destroy.call(this,e),this._texture.off("update",this._onTextureUpdat
e,this),this._anchor=null,"boolean"==typeof e?e:e&&e.texture){var
r="boolean"==typeof e?
e:e&&e.baseTexture;this._texture.destroy(!!r)}this._texture=null,this.shader=null},e
.from=function(t){return new e(d.default.from(t))},e.fromFrame=function(t){var
r=h.TextureCache[t];if(!r)throw new Error('The frameId "'+t+'" does not exist in the
texture cache');return new e(r)},e.fromImage=function(t,r,n){return new
e(d.default.fromImage(t,r,n))},a(e,[{key:"width",get:function(){return
Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var e=(0,h.sign)
(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t}},
{key:"height",get:function(){return
Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var e=(0,h.sign)
(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t}},
{key:"anchor",get:function(){return this._anchor},set:function(t)
{this._anchor.copy(t)}},{key:"tint",get:function(){return
this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(65280&t)+((255&t)
<<16)}},{key:"texture",get:function(){return this._texture},set:function(t)
{this._texture!==t&&
(this._texture=t||d.default.EMPTY,this.cachedTint=16777215,this._textureID=-1,this._
textureTrimmedID=-1,t&&(t.baseTexture.hasLoaded?
this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}}]),e}
(p.default);r.default=g},
{"../const":46,"../display/Container":48,"../math":70,"../textures/Texture":115,"../
utils":125}],103:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?
t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call
a class as a function")}r.__esModule=!0;var
o=t("../../renderers/canvas/CanvasRenderer"),s=n(o),a=t("../../const"),u=t("../../ma
th"),h=t("./CanvasTinter"),l=n(h),c=new u.Matrix,d=function(){function t(e)
{i(this,t),this.renderer=e}return t.prototype.render=function(t){var
e=t._texture,r=this.renderer,n=e._frame.width,i=e._frame.height,o=t.transform.worldT
5/9/20, 12:55 PM
Page 54 of 181
ransform,s=0,h=0;if(!(e.orig.width<=0||e.orig.height<=0)&&e.baseTexture.source&&
(r.setBlendMode(t.blendMode),e.valid)){r.context.globalAlpha=t.worldAlpha;var
d=e.baseTexture.scaleMode===a.SCALE_MODES.LINEAR;r.smoothProperty&&r.context[r.smoot
hProperty]!==d&&(r.context[r.smoothProperty]=d),e.trim?(s=e.trim.width/2+e.trim.xt.anchor.x*e.orig.width,h=e.trim.height/2+e.trim.y-t.anchor.y*e.orig.height):(s=(.5-
t.anchor.x)*e.orig.width,h=(.5-t.anchor.y)*e.orig.height),e.rotate&&
(o.copy(c),o=c,u.GroupD8.matrixAppendRotationInv(o,e.rotate,s,h),s=0,h=0),s-=n/2,h-
=i/2,r.roundPixels?
(r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution|0,o.ty*r.resolution|0),s|=
0,h|=0):r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution,o.ty*r.resolution);
var f=e.baseTexture.resolution;16777215!==t.tint?
(t.cachedTint===t.tint&&t.tintedTexture.tintId===t._texture._updateID||
(t.cachedTint=t.tint,t.tintedTexture=l.default.getTintedTexture(t,t.tint)),r.context
.drawImage(t.tintedTexture,0,0,n*f,i*f,s*r.resolution,h*r.resolution,n*r.resolution,
i*r.resolution)):r.context.drawImage(e.baseTexture.source,e._frame.x*f,e._frame.y*f,
n*f,i*f,s*r.resolution,h*r.resolution,n*r.resolution,i*r.resolution)}},t.prototype.d
estroy=function(){this.renderer=null},t}
();r.default=d,s.default.registerPlugin("sprite",d)},
{"../../const":46,"../../math":70,"../../renderers/canvas/CanvasRenderer":77,"./Canv
asTinter":104}],104:[function(t,e,r){"use strict";r.__esModule=!0;var
n=t("../../utils"),i=t("../../renderers/canvas/utils/canUseNewCanvasBlendModes"),o=f
unction(t){return t&&t.__esModule?t:{default:t}}(i),s=
{getTintedTexture:function(t,e){var r=t._texture;e=s.roundColor(e);var n="#"+
("00000"+(0|e).toString(16)).substr(-6);r.tintCache=r.tintCache||{};var
i=r.tintCache[n],o=void 0;if(i){if(i.tintId===r._updateID)return
r.tintCache[n];o=r.tintCache[n]}else
o=s.canvas||document.createElement("canvas");if(s.tintMethod(r,e,o),o.tintId=r._upda
teID,s.convertTintToImage){var a=new Image;a.src=o.toDataURL(),r.tintCache[n]=a}else
r.tintCache[n]=o,s.canvas=null;return o},tintWithMultiply:function(t,e,r){var
n=r.getContext("2d"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.w
idth*=o,i.height*=o,r.width=Math.ceil(i.width),r.height=Math.ceil(i.height),n.save()
,n.fillStyle="#"+("00000"+
(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOpe
ration="multiply",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.wi
dth,i.height),n.globalCompositeOperation="destinationatop",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height
),n.restore()},tintWithOverlay:function(t,e,r){var
n=r.getContext("2d"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.w
idth*=o,i.height*=o,r.width=Math.ceil(i.width),r.height=Math.ceil(i.height),n.save()
,n.globalCompositeOperation="copy",n.fillStyle="#"+("00000"+
(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOpe
ration="destinationatop",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height
),n.restore()},tintWithPerPixel:function(t,e,r){var
i=r.getContext("2d"),o=t._frame.clone(),s=t.baseTexture.resolution;o.x*=s,o.y*=s,o.w
idth*=s,o.height*=s,r.width=Math.ceil(o.width),r.height=Math.ceil(o.height),i.save()
,i.globalCompositeOperation="copy",i.drawImage(t.baseTexture.source,o.x,o.y,o.width,
o.height,0,0,o.width,o.height),i.restore();for(var a=(0,n.hex2rgb)
(e),u=a[0],h=a[1],l=a[2],c=i.getImageData(0,0,o.width,o.height),d=c.data,f=0;f<d.len
gth;f+=4)d[f+0]*=u,d[f+1]*=h,d[f+2]*=l;i.putImageData(c,0,0)},roundColor:function(t)
{var e=s.cacheStepsPerColorChannel,r=(0,n.hex2rgb)(t);return
r[0]=Math.min(255,r[0]/e*e),r[1]=Math.min(255,r[1]/e*e),r[2]=Math.min(255,r[2]/e*e),
(0,n.rgb2hex)(r)},cacheStepsPerColorChannel:8,convertTintToImage:!1,canUseMultiply:
(0,o.default)(),tintMethod:0};s.tintMethod=s.canUseMultiply?
s.tintWithMultiply:s.tintWithPerPixel,r.default=s},
{"../../renderers/canvas/utils/canUseNewCanvasBlendModes":80,"../../utils":125}],105
:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function()
{function t(e){n(this,t),this.vertices=new ArrayBuffer(e),this.float32View=new
Float32Array(this.vertices),this.uint32View=new Uint32Array(this.vertices)}return
5/9/20, 12:55 PM
Page 55 of 181
t.prototype.destroy=function()
{this.vertices=null,this.positions=null,this.uvs=null,this.colors=null},t}
();r.default=i},{}],106:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../../renderers/webgl/utils/ObjectRenderer"),u=n(a),h=t("../../renderers/webgl/
WebGLRenderer"),l=n(h),c=t("../../utils/createIndicesForQuads"),d=n(c),f=t("./genera
teMultiTextureShader"),p=n(f),v=t("../../renderers/webgl/utils/checkMaxIfStatmentsIn
Shader"),g=n(v),y=t("./BatchBuffer"),m=n(y),_=t("../../settings"),b=n(_),x=t("../../
utils"),T=t("pixi-gl-core"),w=n(T),E=t("bit-twiddle"),S=n(E),O=0,M=0,P=function(t)
{function e(r){i(this,e);var n=o(this,t.call(this,r))
;n.vertSize=5,n.vertByteSize=4*n.vertSize,n.size=b.default.SPRITE_BATCH_SIZE,n.buffe
rs=[];for(var s=1;s<=S.default.nextPow2(n.size);s*=2)n.buffers.push(new
m.default(4*s*n.vertByteSize));n.indices=(0,d.default)
(n.size),n.shader=null,n.currentIndex=0,n.groups=[];for(var
a=0;a<n.size;a++)n.groups[a]={textures:[],textureCount:0,ids:
[],size:0,start:0,blend:0};return n.sprites=[],n.vertexBuffers=[],n.vaos=
[],n.vaoMax=2,n.vertexCount=0,n.renderer.on("prerender",n.onPrerender,n),n}return
s(e,t),e.prototype.onContextChange=function(){var
t=this.renderer.gl;this.renderer.legacy?this.MAX_TEXTURES=1:
(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),b.default.SPRI
TE_MAX_TEXTURES),this.MAX_TEXTURES=(0,g.default)(this.MAX_TEXTURES,t)),this.shader=
(0,p.default)
(t,this.MAX_TEXTURES),this.indexBuffer=w.default.GLBuffer.createIndexBuffer(t,this.i
ndices,t.STATIC_DRAW),this.renderer.bindVao(null);for(var
e=this.shader.attributes,r=0;r<this.vaoMax;r++){var
n=this.vertexBuffers[r]=w.default.GLBuffer.createVertexBuffer(t,null,t.STREAM_DRAW),
i=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(n,e.aVertexPosit
ion,t.FLOAT,!1,this.vertByteSize,0).addAttribute(n,e.aTextureCoord,t.UNSIGNED_SHORT,
!0,this.vertByteSize,8).addAttribute(n,e.aColor,t.UNSIGNED_BYTE,!0,this.vertByteSize
,12);e.aTextureId&&i.addAttribute(n,e.aTextureId,t.FLOAT,!1,this.vertByteSize,16),th
is.vaos[r]=i}this.vao=this.vaos[0],this.currentBlendMode=99999,this.boundTextures=ne
w Array(this.MAX_TEXTURES)},e.prototype.onPrerender=function()
{this.vertexCount=0},e.prototype.render=function(t)
{this.currentIndex>=this.size&&this.flush(),t._texture._uvs&&
(this.sprites[this.currentIndex++]=t)},e.prototype.flush=function()
{if(0!==this.currentIndex){var
t=this.renderer.gl,e=this.MAX_TEXTURES,r=S.default.nextPow2(this.currentIndex),n=S.d
efault.log2(r),i=this.buffers[n],o=this.sprites,s=this.groups,a=i.float32View,u=i.ui
nt32View,h=this.boundTextures,l=this.renderer.boundTextures,c=this.renderer.textureG
C.count,d=0,f=void 0,p=void 0,v=1,g=0,y=s[0],m=void 0,_=void
0,T=x.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha?1:0]
[o[0].blendMode];y.textureCount=0,y.start=0,y.blend=T,O++;var E=void
0;for(E=0;E<e;++E){var P=l[E];P._enabled!==O?
(h[E]=P,P._virtalBoundId=E,P._enabled=O):h[E]=this.renderer.emptyTextures[E]}for(O++
,E=0;E<this.currentIndex;++E){var C=o[E];o[E]=null,f=C._texture.baseTexture;var
R=x.premultiplyBlendMode[Number(f.premultipliedAlpha)][C.blendMode];if(T!==R&&
(T=R,p=null,g=e,O++),p!==f&&(p=f,f._enabled!==O)){if(g===e&&(O++,y.size=Ey.start,g=0,y=s[v++],y.blend=T,y.textureCount=0,y.start=E),f.touched=c,-1===f._virta
lBoundId)for(var A=0;A<e;++A){var I=(A+M)%e,D=h[I];if(D._enabled!==O)
{M++,D._virtalBoundId=-1,f._virtalBoundId=I,h[I]=f;break}}f._enabled=O,y.textureCoun
t++,y.ids[g]=f._virtalBoundId,y.textures[g++]=f}if(m=C.vertexData,_=C._texture._uvs.
uvsUint32,this.renderer.roundPixels){var L=this.renderer.resolution;a[d]=
(m[0]*L|0)/L,a[d+1]=(m[1]*L|0)/L,a[d+5]=(m[2]*L|0)/L,a[d+6]=(m[3]*L|0)/L,a[d+10]=
5/9/20, 12:55 PM
Page 56 of 181
(m[4]*L|0)/L,a[d+11]=(m[5]*L|0)/L,a[d+15]=(m[6]*L|0)/L,a[d+16]=(m[7]*L|0)/L}else
a[d]=m[0],a[d+1]=m[1],a[d+5]=m[2],a[d+6]=m[3],a[d+10]=m[4],a[d+11]=m[5],a[d+15]=m[6]
,a[d+16]=m[7];u[d+2]=_[0],u[d+7]=_[1],u[d+12]=_[2],u[d+17]=_[3];var
N=Math.min(C.worldAlpha,1),B=N<1&&f.premultipliedAlpha?(0,x.premultiplyTint)
(C._tintRGB,N):C._tintRGB+
(255*N<<24);u[d+3]=u[d+8]=u[d+13]=u[d+18]=B,a[d+4]=a[d+9]=a[d+14]=a[d+19]=f._virtalB
oundId,d+=20}if(y.size=Ey.start,b.default.CAN_UPLOAD_SAME_BUFFER)this.vertexBuffers[this.vertexCount].upload
(i.vertices,0,!0);else{if(this.vaoMax<=this.vertexCount){this.vaoMax++;var
k=this.shader.attributes,F=this.vertexBuffers[this.vertexCount]=w.default.GLBuffer.c
reateVertexBuffer(t,null,t.STREAM_DRAW),j=this.renderer.createVao().addIndex(this.in
dexBuffer).addAttribute(F,k.aVertexPosition,t.FLOAT,!1,this.vertByteSize,0).addAttri
bute(F,k.aTextureCoord,t.UNSIGNED_SHORT,!0,this.vertByteSize,8).addAttribute(F,k.aCo
lor,t.UNSIGNED_BYTE,!0,this.vertByteSize,12);k.aTextureId&&j.addAttribute(F,k.aTextu
reId,t.FLOAT,!1,this.vertByteSize,16),this.vaos[this.vertexCount]=j}this.renderer.bi
ndVao(this.vaos[this.vertexCount]),this.vertexBuffers[this.vertexCount].upload(i.ver
tices,0,!1),this.vertexCount++}for(E=0;E<e;++E)l[E]._virtalBoundId=-1;for(E=0;E<v;++
E){for(var
U=s[E],X=U.textureCount,G=0;G<X;G++)p=U.textures[G],l[U.ids[G]]!==p&&this.renderer.b
indTexture(p,U.ids[G],!0),p._virtalBoundId=-1;this.renderer.state.setBlendMode(U.ble
nd),t.drawElements(t.TRIANGLES,6*U.size,t.UNSIGNED_SHORT,6*U.start*2)}this.currentIn
dex=0}},e.prototype.start=function()
{this.renderer.bindShader(this.shader),b.default.CAN_UPLOAD_SAME_BUFFER&&
(this.renderer.bindVao(this.vaos[this.vertexCount]),this.vertexBuffers[this.vertexCo
unt].bind())},e.prototype.stop=function()
{this.flush()},e.prototype.destroy=function(){for(var
e=0;e<this.vaoMax;e++)this.vertexBuffers[e]&&this.vertexBuffers[e].destroy(),this.va
os[e]&&this.vaos[e].destroy();this.indexBuffer&&this.indexBuffer.destroy(),this.rend
erer.off("prerender",this.onPrerender,this),t.prototype.destroy.call(this),this.shad
er&&
(this.shader.destroy(),this.shader=null),this.vertexBuffers=null,this.vaos=null,this
.indexBuffer=null,this.indices=null,this.sprites=null;for(var
r=0;r<this.buffers.length;++r)this.buffers[r].destroy()},e}
(u.default);r.default=P,l.default.registerPlugin("sprite",P)},
{"../../renderers/webgl/WebGLRenderer":84,"../../renderers/webgl/utils/ObjectRendere
r":94,"../../renderers/webgl/utils/checkMaxIfStatmentsInShader":97,"../../settings":
101,"../../utils":125,"../../utils/createIndicesForQuads":123,"./BatchBuffer":105,".
/generateMultiTextureShader":107,"bit-twiddle":1,"pixi-gl-core":15}],107:
[function(t,e,r){"use strict";function n(t,e){var
r=a;r=r.replace(/%count%/gi,e),r=r.replace(/%forloop%/gi,i(e));for(var n=new
s.default(t,"precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying
float vTextureId;\n\nvoid main(void){\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n vTextureCoord = aTextureCoord;\n
vTextureId = aTextureId;\n vColor = aColor;\n}\n",r),o=
[],u=0;u<e;u++)o[u]=u;return n.bind(),n.uniforms.uSamplers=o,n}function i(t){var
e="";e+="\n",e+="\n";for(var r=0;r<t;r++)r>0&&(e+="\nelse "),r<t-1&&
(e+="if(vTextureId < "+r+".5)"),e+="\n{",e+="\n\tcolor = texture2D(uSamplers["+r+"],
vTextureCoord);",e+="\n}";return e+="\n",e+="\n"}r.__esModule=!0,r.default=n;var
o=t("../../Shader"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=
(t("path"),["varying vec2 vTextureCoord;","varying vec4 vColor;","varying float
vTextureId;","uniform sampler2D uSamplers[%count%];","void main(void){","vec4
color;","%forloop%","gl_FragColor = color * vColor;","}"].join("\n"))},
{"../../Shader":44,path:8}],108:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
5/9/20, 12:55 PM
Page 57 of 181
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),u=t("../sprites/Sprite"),h=n(u),l=t("../textures/Texture"),c=n(l),d=t("../math"),
f=t("../utils"),p=t("../const"),v=t("../settings"),g=n(v),y=t("./TextStyle"),m=n(y),
_=t("./TextMetrics"),b=n(_),x=t("../utils/trimCanvas"),T=n(x),w=
{texture:!0,children:!1,baseTexture:!0},E=function(t){function e(r,n,s)
{i(this,e),s=s||document.createElement("canvas"),s.width=3,s.height=3;var
a=c.default.fromCanvas(s,g.default.SCALE_MODE,"text");a.orig=new
d.Rectangle,a.trim=new d.Rectangle;var u=o(this,t.call(this,a));return
c.default.addToCache(u._texture,u._texture.baseTexture.textureCacheIds[0]),u.canvas=
s,u.context=u.canvas.getContext("2d"),u.resolution=g.default.RESOLUTION,u._text=null
,u._style=null,u._styleListener=null,u._font="",u.text=r,u.style=n,u.localStyleID=-1
,u}return s(e,t),e.prototype.updateText=function(t){var
e=this._style;if(this.localStyleID!==e.styleID&&
(this.dirty=!0,this.localStyleID=e.styleID),this.dirty||!t)
{this._font=this._style.toFontString();var
r=this.context,n=b.default.measureText(this._text,this._style,this._style.wordWrap,t
his.canvas),i=n.width,o=n.height,s=n.lines,a=n.lineHeight,u=n.lineWidths,h=n.maxLine
Width,l=n.fontProperties;this.canvas.width=Math.ceil((Math.max(1,i)+2*e.padding)*thi
s.resolution),this.canvas.height=Math.ceil((Math.max(1,o)+2*e.padding)*this.resoluti
on),r.scale(this.resolution,this.resolution),r.clearRect(0,0,this.canvas.width,this.
canvas.height),r.font=this._font,r.strokeStyle=e.stroke,r.lineWidth=e.strokeThicknes
s,r.textBaseline=e.textBaseline,r.lineJoin=e.lineJoin,r.miterLimit=e.miterLimit;var
c=void 0,d=void 0;if(e.dropShadow)
{r.fillStyle=e.dropShadowColor,r.globalAlpha=e.dropShadowAlpha,r.shadowBlur=e.dropSh
adowBlur,e.dropShadowBlur>0&&(r.shadowColor=e.dropShadowColor);for(var
f=Math.cos(e.dropShadowAngle)*e.dropShadowDistance,p=Math.sin(e.dropShadowAngle)*e.d
ropShadowDistance,v=0;v<s.length;v++)c=e.strokeThickness/2,d=e.strokeThickness/2+v*a
+l.ascent,"right"===e.align?c+=h-u[v]:"center"===e.align&&(c+=(h-u[v])/2),e.fill&&
(this.drawLetterSpacing(s[v],c+f+e.padding,d+p+e.padding),e.stroke&&e.strokeThicknes
s&&
(r.strokeStyle=e.dropShadowColor,this.drawLetterSpacing(s[v],c+f+e.padding,d+p+e.pad
ding,!0),r.strokeStyle=e.stroke))}r.shadowBlur=0,r.globalAlpha=1,r.fillStyle=this._g
enerateFillStyle(e,s);for(var
g=0;g<s.length;g++)c=e.strokeThickness/2,d=e.strokeThickness/2+g*a+l.ascent,"right"=
==e.align?c+=h-u[g]:"center"===e.align&&(c+=(hu[g])/2),e.stroke&&e.strokeThickness&&this.drawLetterSpacing(s[g],c+e.padding,d+e.pa
dding,!0),e.fill&&this.drawLetterSpacing(s[g],c+e.padding,d+e.padding);this.updateTe
xture()}},e.prototype.drawLetterSpacing=function(t,e,r){var
n=arguments.length>3&&void
0!==arguments[3]&&arguments[3],i=this._style,o=i.letterSpacing;if(0===o)return
void(n?this.context.strokeText(t,e,r):this.context.fillText(t,e,r));for(var
s=String.prototype.split.call(t,""),a=e,u=0,h="";u<t.length;)h=s[u++],n?
this.context.strokeText(h,a,r):this.context.fillText(h,a,r),a+=this.context.measureT
ext(h).width+o},e.prototype.updateTexture=function(){var
t=this.canvas;if(this._style.trim){var e=(0,T.default)(t);e.data&&
(t.width=e.width,t.height=e.height,this.context.putImageData(e.data,0,0))}var
r=this._texture,n=this._style,i=n.trim?
0:n.padding,o=r.baseTexture;o.hasLoaded=!0,o.resolution=this.resolution,o.realWidth=
t.width,o.realHeight=t.height,o.width=t.width/this.resolution,o.height=t.height/this
.resolution,r.trim.width=r._frame.width=t.width/this.resolution,r.trim.height=r._fra
me.height=t.height/this.resolution,r.trim.x=-i,r.trim.y=-
i,r.orig.width=r._frame.width-2*i,r.orig.height=r._frame.height2*i,this._onTextureUpdate(),o.emit("update",o),this.dirty=!1},e.prototype.renderWebG
L=function(e){this.resolution!==e.resolution&&
5/9/20, 12:55 PM
Page 58 of 181
(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype.renderW
ebGL.call(this,e)},e.prototype._renderCanvas=function(e)
{this.resolution!==e.resolution&&
(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._render
Canvas.call(this,e)},e.prototype.getLocalBounds=function(e){return
this.updateText(!0),t.prototype.getLocalBounds.call(this,e)},e.prototype._calculateB
ounds=function()
{this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)}
,e.prototype._onStyleChange=function()
{this.dirty=!0},e.prototype._generateFillStyle=function(t,e)
{if(!Array.isArray(t.fill))return t.fill;if(navigator.isCocoonJS)return
t.fill[0];var r=void 0,n=void 0,i=void 0,o=void
0,s=this.canvas.width/this.resolution,a=this.canvas.height/this.resolution,u=t.fill.
slice(),h=t.fillGradientStops.slice();if(!h.length)for(var
l=u.length+1,c=1;c<l;++c)h.push(c/l);if(u.unshift(t.fill[0]),h.unshift(0),u.push(t.f
ill[t.fill.length1]),h.push(1),t.fillGradientType===p.TEXT_GRADIENT.LINEAR_VERTICAL)
{r=this.context.createLinearGradient(s/2,0,s/2,a),n=
(u.length+1)*e.length,i=0;for(var d=0;d<e.length;d++){i+=1;for(var
f=0;f<u.length;f++)o="number"==typeof h[f]?
h[f]/e.length+d/e.length:i/n,r.addColorStop(o,u[f]),i++}}else{r=this.context.createL
inearGradient(0,a/2,s,a/2),n=u.length+1,i=1;for(var
v=0;v<u.length;v++)o="number"==typeof h[v]?
h[v]:i/n,r.addColorStop(o,u[v]),i++}return r},e.prototype.destroy=function(e)
{"boolean"==typeof e&&(e=
{children:e}),e=Object.assign({},w,e),t.prototype.destroy.call(this,e),this.context=
null,this.canvas=null,this._style=null},a(e,[{key:"width",get:function(){return
this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t)
{this.updateText(!0);var e=(0,f.sign)
(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t}},
{key:"height",get:function(){return
this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t
){this.updateText(!0);var e=(0,f.sign)
(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t}},
{key:"style",get:function(){return this._style},set:function(t){t=t||{},t instanceof
m.default?this._style=t:this._style=new
m.default(t),this.localStyleID=-1,this.dirty=!0}},{key:"text",get:function(){return
this._text},set:function(t){t=String(""===t||null===t||void 0===t?"
":t),this._text!==t&&(this._text=t,this.dirty=!0)}}]),e}(h.default);r.default=E},
{"../const":46,"../math":70,"../settings":101,"../sprites/Sprite":102,"../textures/T
exture":115,"../utils":125,"../utils/trimCanvas":130,"./TextMetrics":109,"./TextStyl
e":110}],109:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var
i=function(){function t(e,r,i,o,s,a,u,h,l)
{n(this,t),this.text=e,this.style=r,this.width=i,this.height=o,this.lines=s,this.lin
eWidths=a,this.lineHeight=u,this.maxLineWidth=h,this.fontProperties=l}return
t.measureText=function(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?
arguments[3]:t._canvas;n=void 0===n||null===n?r.wordWrap:n;var
o=r.toFontString(),s=t.measureFont(o),a=i.getContext("2d");a.font=o;for(var u=n?
t.wordWrap(e,r,i):e,h=u.split(/(?:\r\n|\r|\n)/),l=new
Array(h.length),c=0,d=0;d<h.length;d++){var f=a.measureText(h[d]).width+
(h[d].length-1)*r.letterSpacing;l[d]=f,c=Math.max(c,f)}var
p=c+r.strokeThickness;r.dropShadow&&(p+=r.dropShadowDistance);var
v=r.lineHeight||s.fontSize+r.strokeThickness,g=Math.max(v,s.fontSize+r.strokeThickne
ss)+(h.length-1)*(v+r.leading);return r.dropShadow&&(g+=r.dropShadowDistance),new
t(e,r,p,g,h,l,v+r.leading,c,s)},t.wordWrap=function(e,r){for(var
n=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:t._canvas,i=n.getContext("2d"),o=0,s="",a="",u=
{},h=r.letterSpacing,l=r.whiteSpace,c=t.collapseSpaces(l),d=t.collapseNewlines(l),f=
!c,p=r.wordWrapWidth+h,v=t.tokenize(e),g=0;g<v.length;g++){var
5/9/20, 12:55 PM
Page 59 of 181
y=v[g];if(t.isNewline(y)){if(!d){a+=t.addLine(s),f=!c,s="",o=0;continue}y=" "}if(c)
{var m=t.isBreakingSpace(y),_=t.isBreakingSpace(s[s.length-1]);if(m&&_)continue}var
b=t.getFromCache(y,h,u,i);if(b>p)if(""!==s&&
(a+=t.addLine(s),s="",o=0),t.canBreakWords(y,r.breakWords))for(var
x=y.split(""),T=0;T<x.length;T++){for(var w=x[T],E=1;x[T+E];){var
S=x[T+E],O=w[w.length1];if(t.canBreakChars(O,S,y,T,r.breakWords))break;w+=S,E++}T+=w.length-1;var
M=t.getFromCache(w,h,u,i);M+o>p&&
(a+=t.addLine(s),f=!1,s="",o=0),s+=w,o+=M}else{s.length>0&&
(a+=t.addLine(s),s="",o=0);var P=g===v.length1;a+=t.addLine(y,!P),f=!1,s="",o=0}else b+o>p&&(f=!1,a+=t.addLine(s),s="",o=0),
(s.length>0||!t.isBreakingSpace(y)||f)&&(s+=y,o+=b)}return
a+=t.addLine(s,!1)},t.addLine=function(e){var r=!(arguments.length>1&&void
0!==arguments[1])||arguments[1];return e=t.trimRight(e),e=r?
e+"\n":e},t.getFromCache=function(t,e,r,n){var i=r[t];if(void 0===i){var
o=t.length*e;i=n.measureText(t).width+o,r[t]=i}return
i},t.collapseSpaces=function(t){return"normal"===t||"preline"===t},t.collapseNewlines=function(t)
{return"normal"===t},t.trimRight=function(e){if("string"!=typeof e)return"";for(var
r=e.length-1;r>=0;r--){var
n=e[r];if(!t.isBreakingSpace(n))break;e=e.slice(0,-1)}return
e},t.isNewline=function(e){return"string"==typeof
e&&t._newlines.indexOf(e.charCodeAt(0))>=0},t.isBreakingSpace=function(e)
{return"string"==typeof
e&&t._breakingSpaces.indexOf(e.charCodeAt(0))>=0},t.tokenize=function(e){var r=
[],n="";if("string"!=typeof e)return r;for(var i=0;i<e.length;i++){var
o=e[i];t.isBreakingSpace(o)||t.isNewline(o)?(""!==n&&
(r.push(n),n=""),r.push(o)):n+=o}return""!==n&&r.push(n),r},t.canBreakWords=function
(t,e){return e},t.canBreakChars=function(t,e,r,n,i)
{return!0},t.measureFont=function(e){if(t._fonts[e])return t._fonts[e];var r=
{},n=t._canvas,i=t._context;i.font=e;var
o=t.METRICS_STRING+t.BASELINE_SYMBOL,s=Math.ceil(i.measureText(o).width),a=Math.ceil
(i.measureText(t.BASELINE_SYMBOL).width),u=2*a;a=a*t.BASELINE_MULTIPLIER|0,n.width=s
,n.height=u,i.fillStyle="#f00",i.fillRect(0,0,s,u),i.font=e,i.textBaseline="alphabet
ic",i.fillStyle="#000",i.fillText(o,0,a);var
h=i.getImageData(0,0,s,u).data,l=h.length,c=4*s,d=0,f=0,p=!1;for(d=0;d<a;++d)
{for(var v=0;v<c;v+=4)if(255!==h[f+v]){p=!0;break}if(p)break;f+=c}for(r.ascent=ad,f=l-c,p=!1,d=u;d>a;--d){for(var g=0;g<c;g+=4)if(255!==h[f+g])
{p=!0;break}if(p)break;f-=c}return r.descent=da,r.fontSize=r.ascent+r.descent,t._fonts[e]=r,r},t.clearMetrics=function(){var
e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e?delete
t._fonts[e]:t._fonts={}},t}();r.default=i;var
o=document.createElement("canvas");o.width=o.height=10,i._canvas=o,i._context=o.getC
ontext("2d"),i._fonts={},i.METRICS_STRING="|
Ã‰q",i.BASELINE_SYMBOL="M",i.BASELINE_MULTIPLIER=1.4,i._newlines=
[10,13],i._breakingSpaces=
[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288]},{}],110:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t){return"number"==typeof
t?(0,l.hex2string)(t):("string"==typeof t&&0===t.indexOf("0x")&&
(t=t.replace("0x","#")),t)}function o(t){if(Array.isArray(t)){for(var
e=0;e<t.length;++e)t[e]=i(t[e]);return t}return i(t)}function s(t,e)
{if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t.length!==e.length)return!1;fo
r(var r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}function a(t,e,r){for(var
n in r)Array.isArray(e[n])?t[n]=e[n].slice():t[n]=e[n]}r.__esModule=!0;var
u=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("../const"),l=t("../utils"),c=
{align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/
5/9/20, 12:55 PM
Page 60 of 181
6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGra
dientType:h.TEXT_GRADIENT.LINEAR_VERTICAL,fillGradientStops:
[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight
:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stro
ke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",word
Wrap:!1,wordWrapWidth:100,leading:0},d=["serif","sansserif","monospace","cursive","fantasy","system-ui"],f=function(){function t(e)
{n(this,t),this.styleID=0,this.reset(),a(this,e,e)}return
t.prototype.clone=function(){var e={};return a(e,this,c),new
t(e)},t.prototype.reset=function(){a(this,c,c)},t.prototype.toFontString=function()
{var t="number"==typeof this.fontSize?
this.fontSize+"px":this.fontSize,e=this.fontFamily;Array.isArray(this.fontFamily)||
(e=this.fontFamily.split(","));for(var r=e.length-1;r>=0;r--){var
n=e[r].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&d.indexOf(n)<0&&
(n='"'+n+'"'),e[r]=n}return this.fontStyle+" "+this.fontVariant+"
"+this.fontWeight+" "+t+" "+e.join(",")},u(t,[{key:"align",get:function(){return
this._align},set:function(t){this._align!==t&&(this._align=t,this.styleID++)}},
{key:"breakWords",get:function(){return this._breakWords},set:function(t)
{this._breakWords!==t&&(this._breakWords=t,this.styleID++)}},
{key:"dropShadow",get:function(){return this._dropShadow},set:function(t)
{this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)}},
{key:"dropShadowAlpha",get:function(){return this._dropShadowAlpha},set:function(t)
{this._dropShadowAlpha!==t&&(this._dropShadowAlpha=t,this.styleID++)}},
{key:"dropShadowAngle",get:function(){return this._dropShadowAngle},set:function(t)
{this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)}},
{key:"dropShadowBlur",get:function(){return this._dropShadowBlur},set:function(t)
{this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)}},
{key:"dropShadowColor",get:function(){return this._dropShadowColor},set:function(t)
{var e=o(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)}},
{key:"dropShadowDistance",get:function(){return
this._dropShadowDistance},set:function(t){this._dropShadowDistance!==t&&
(this._dropShadowDistance=t,this.styleID++)}},{key:"fill",get:function(){return
this._fill},set:function(t){var e=o(t);this._fill!==e&&
(this._fill=e,this.styleID++)}},{key:"fillGradientType",get:function(){return
this._fillGradientType},set:function(t){this._fillGradientType!==t&&
(this._fillGradientType=t,this.styleID++)}},{key:"fillGradientStops",get:function()
{return this._fillGradientStops},set:function(t){s(this._fillGradientStops,t)||
(this._fillGradientStops=t,this.styleID++)}},{key:"fontFamily",get:function(){return
this._fontFamily},set:function(t){this.fontFamily!==t&&
(this._fontFamily=t,this.styleID++)}},{key:"fontSize",get:function(){return
this._fontSize},set:function(t){this._fontSize!==t&&
(this._fontSize=t,this.styleID++)}},{key:"fontStyle",get:function(){return
this._fontStyle},set:function(t){this._fontStyle!==t&&
(this._fontStyle=t,this.styleID++)}},{key:"fontVariant",get:function(){return
this._fontVariant},set:function(t){this._fontVariant!==t&&
(this._fontVariant=t,this.styleID++)}},{key:"fontWeight",get:function(){return
this._fontWeight},set:function(t){this._fontWeight!==t&&
(this._fontWeight=t,this.styleID++)}},{key:"letterSpacing",get:function(){return
this._letterSpacing},set:function(t){this._letterSpacing!==t&&
(this._letterSpacing=t,this.styleID++)}},{key:"lineHeight",get:function(){return
this._lineHeight},set:function(t){this._lineHeight!==t&&
(this._lineHeight=t,this.styleID++)}},{key:"leading",get:function(){return
this._leading},set:function(t){this._leading!==t&&
(this._leading=t,this.styleID++)}},{key:"lineJoin",get:function(){return
this._lineJoin},set:function(t){this._lineJoin!==t&&
(this._lineJoin=t,this.styleID++)}},{key:"miterLimit",get:function(){return
this._miterLimit},set:function(t){this._miterLimit!==t&&
(this._miterLimit=t,this.styleID++)}},{key:"padding",get:function(){return
this._padding},set:function(t){this._padding!==t&&
(this._padding=t,this.styleID++)}},{key:"stroke",get:function(){return
5/9/20, 12:55 PM
Page 61 of 181
this._stroke},set:function(t){var e=o(t);this._stroke!==e&&
(this._stroke=e,this.styleID++)}},{key:"strokeThickness",get:function(){return
this._strokeThickness},set:function(t){this._strokeThickness!==t&&
(this._strokeThickness=t,this.styleID++)}},{key:"textBaseline",get:function(){return
this._textBaseline},set:function(t){this._textBaseline!==t&&
(this._textBaseline=t,this.styleID++)}},{key:"trim",get:function(){return
this._trim},set:function(t){this._trim!==t&&(this._trim=t,this.styleID++)}},
{key:"whiteSpace",get:function(){return this._whiteSpace},set:function(t)
{this._whiteSpace!==t&&(this._whiteSpace=t,this.styleID++)}},
{key:"wordWrap",get:function(){return this._wordWrap},set:function(t)
{this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)}},
{key:"wordWrapWidth",get:function(){return this._wordWrapWidth},set:function(t)
{this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)}}]),t}
();r.default=f},{"../const":46,"../utils":125}],111:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("./BaseTexture"),u=n(a),h=t("../settings"),l=n(h),c=function(t){function e(){var
r=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:100,s=arguments[2],a=arguments[3];i(this,e);var
u=o(this,t.call(this,null,s));return
u.resolution=a||l.default.RESOLUTION,u.width=Math.ceil(r),u.height=Math.ceil(n),u.re
alWidth=u.width*u.resolution,u.realHeight=u.height*u.resolution,u.scaleMode=void
0!==s?s:l.default.SCALE_MODE,u.hasLoaded=!0,u._glRenderTargets=
{},u._canvasRenderTarget=null,u.valid=!1,u}return
s(e,t),e.prototype.resize=function(t,e)
{t=Math.ceil(t),e=Math.ceil(e),t===this.width&&e===this.height||
(this.valid=t>0&&e>0,this.width=t,this.height=e,this.realWidth=this.width*this.resol
ution,this.realHeight=this.height*this.resolution,this.valid&&this.emit("update",thi
s))},e.prototype.destroy=function()
{t.prototype.destroy.call(this,!0),this.renderer=null},e}(u.default);r.default=c},
{"../settings":101,"./BaseTexture":112}],112:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw
new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../utils"),u=t("../settings"),h=n(u),l=t("eventemitter3"),c=n(l),d=t("../utils/
determineCrossOrigin"),f=n(d),p=t("bit-twiddle"),v=n(p),g=function(t){function
e(r,n,s){i(this,e);var u=o(this,t.call(this));return u.uid=(0,a.uid)
(),u.touched=0,u.resolution=s||h.default.RESOLUTION,u.width=100,u.height=100,u.realW
idth=100,u.realHeight=100,u.scaleMode=void 0!==n?
n:h.default.SCALE_MODE,u.hasLoaded=!1,u.isLoading=!1,u.source=null,u.origSource=null
,u.imageType=null,u.sourceScale=1,u.premultipliedAlpha=!0,u.imageUrl=null,u.isPowerO
fTwo=!1,u.mipmap=h.default.MIPMAP_TEXTURES,u.wrapMode=h.default.WRAP_MODE,u._glTextu
res={},u._enabled=0,u._virtalBoundId=-1,u._destroyed=!1,u.textureCacheIds=
[],r&&u.loadSource(r),u}return s(e,t),e.prototype.update=function()
{"svg"!==this.imageType&&
(this.realWidth=this.source.naturalWidth||this.source.videoWidth||this.source.width,
this.realHeight=this.source.naturalHeight||this.source.videoHeight||this.source.heig
ht,this._updateDimensions()),this.emit("update",this)},e.prototype._updateDimensions
5/9/20, 12:55 PM
Page 62 of 181
=function()
{this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resoluti
on,this.isPowerOfTwo=v.default.isPow2(this.realWidth)&&v.default.isPow2(this.realHei
ght)},e.prototype.loadSource=function(t){var
e=this.isLoading;this.hasLoaded=!1,this.isLoading=!1,e&&this.source&&
(this.source.onload=null,this.source.onerror=null);var
r=!this.source;if(this.source=t,
(t.src&&t.complete||t.getContext)&&t.width&&t.height)this._updateImageType(),"svg"==
=this.imageType?
this._loadSvgSource():this._sourceLoaded(),r&&this.emit("loaded",this);else
if(!t.getContext){this.isLoading=!0;var n=this;if(t.onload=function()
{if(n._updateImageType(),t.onload=null,t.onerror=null,n.isLoading)
{if(n.isLoading=!1,n._sourceLoaded(),"svg"===n.imageType)return void
n._loadSvgSource();n.emit("loaded",n)}},t.onerror=function()
{t.onload=null,t.onerror=null,n.isLoading&&
(n.isLoading=!1,n.emit("error",n))},t.complete&&t.src)
{if(t.onload=null,t.onerror=null,"svg"===n.imageType)return void
n._loadSvgSource();this.isLoading=!1,t.width&&t.height?
(this._sourceLoaded(),e&&this.emit("loaded",this)):e&&this.emit("error",this)}}},e.p
rototype._updateImageType=function(){if(this.imageUrl){var t=(0,a.decomposeDataUri)
(this.imageUrl),e=void 0;if(t&&"image"===t.mediaType){var r=t.subType.split("+")
[0];if(!(e=(0,a.getUrlFileExtension)("."+r)))throw new Error("Invalid image type in
data URI.")}else(e=(0,a.getUrlFileExtension)(this.imageUrl))||
(e="png");this.imageType=e}},e.prototype._loadSvgSource=function()
{if("svg"===this.imageType){var t=(0,a.decomposeDataUri)(this.imageUrl);t?
this._loadSvgSourceUsingDataUri(t):this._loadSvgSourceUsingXhr()}},e.prototype._load
SvgSourceUsingDataUri=function(t){var e=void 0;if("base64"===t.encoding)
{if(!atob)throw new Error("Your browser doesn't support base64
conversions.");e=atob(t.data)}else
e=t.data;this._loadSvgSourceUsingString(e)},e.prototype._loadSvgSourceUsingXhr=funct
ion(){var t=this,e=new XMLHttpRequest;e.onload=function()
{if(e.readyState!==e.DONE||200!==e.status)throw new Error("Failed to load SVG using
XHR.");t._loadSvgSourceUsingString(e.response)},e.onerror=function(){return
t.emit("error",t)},e.open("GET",this.imageUrl,!0),e.send()},e.prototype._loadSvgSour
ceUsingString=function(t){var r=(0,a.getSvgSize)
(t),n=r.width,i=r.height;if(!n||!i)throw new Error("The SVG image must have width
and height defined (in pixels), canvas API needs
them.");this.realWidth=Math.round(n*this.sourceScale),this.realHeight=Math.round(i*t
his.sourceScale),this._updateDimensions();var
o=document.createElement("canvas");o.width=this.realWidth,o.height=this.realHeight,o
._pixiId="canvas_"+(0,a.uid)
(),o.getContext("2d").drawImage(this.source,0,0,n,i,0,0,this.realWidth,this.realHeig
ht),this.origSource=this.source,this.source=o,e.addToCache(this,o._pixiId),this.isLo
ading=!1,this._sourceLoaded(),this.emit("loaded",this)},e.prototype._sourceLoaded=fu
nction(){this.hasLoaded=!0,this.update()},e.prototype.destroy=function()
{this.imageUrl&&(delete
a.TextureCache[this.imageUrl],this.imageUrl=null,navigator.isCocoonJS||
(this.source.src="")),this.source=null,this.dispose(),e.removeFromCache(this),this.t
extureCacheIds=null,this._destroyed=!0},e.prototype.dispose=function()
{this.emit("dispose",this)},e.prototype.updateSourceImage=function(t)
{this.source.src=t,this.loadSource(this.source)},e.fromImage=function(t,r,n,i){var
o=a.BaseTextureCache[t];if(!o){var s=new Image;void 0===r&&0!==t.indexOf("data:")?
s.crossOrigin=(0,f.default)(t):r&&(s.crossOrigin="string"==typeof r?
r:"anonymous"),o=new e(s,n),o.imageUrl=t,i&&(o.sourceScale=i),o.resolution=
(0,a.getResolutionOfUrl)(t),s.src=t,e.addToCache(o,t)}return
o},e.fromCanvas=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:"canvas";t._pixiId||(t._pixiId=n+"_"+(0,a.uid)());var
i=a.BaseTextureCache[t._pixiId];return i||(i=new
e(t,r),e.addToCache(i,t._pixiId)),i},e.from=function(t,r,n){if("string"==typeof
t)return e.fromImage(t,void 0,r,n);if(t instanceof HTMLImageElement){var
5/9/20, 12:55 PM
Page 63 of 181
i=t.src,o=a.BaseTextureCache[i];return o||(o=new e(t,r),o.imageUrl=i,
n&&(o.sourceScale=n),o.resolution=(0,a.getResolutionOfUrl)
(i),e.addToCache(o,i)),o}return t instanceof HTMLCanvasElement?
e.fromCanvas(t,r):t},e.addToCache=function(t,e){e&&
(-1===t.textureCacheIds.indexOf(e)&&t.textureCacheIds.push(e),a.BaseTextureCache[e]=
t)},e.removeFromCache=function(t){if("string"==typeof t){var
e=a.BaseTextureCache[t];if(e){var r=e.textureCacheIds.indexOf(t);return
r>-1&&e.textureCacheIds.splice(r,1),delete a.BaseTextureCache[t],e}}else
if(t&&t.textureCacheIds){for(var n=0;n<t.textureCacheIds.length;++n)delete
a.BaseTextureCache[t.textureCacheIds[n]];return t.textureCacheIds.length=0,t}return
null},e}(c.default);r.default=g},
{"../settings":101,"../utils":125,"../utils/determineCrossOrigin":124,"bittwiddle":1,eventemitter3:3}],113:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("./BaseRenderTexture"),u=n(a),h=t("./Texture"),l=n(h),c=function(t){function
e(r,n){i(this,e);var s=null;if(!(r instanceof u.default)){var
a=arguments[1],h=arguments[2],l=arguments[3],c=arguments[4];console.warn("Please use
RenderTexture.create("+a+", "+h+") instead of the ctor
directly."),s=arguments[0],n=null,r=new u.default(a,h,l,c)}var
d=o(this,t.call(this,r,n));return
d.legacyRenderer=s,d.valid=!0,d._updateUvs(),d}return
s(e,t),e.prototype.resize=function(t,e,r)
{t=Math.ceil(t),e=Math.ceil(e),this.valid=t>0&&e>0,this._frame.width=this.orig.width
=t,this._frame.height=this.orig.height=e,r||this.baseTexture.resize(t,e),this._updat
eUvs()},e.create=function(t,r,n,i){return new e(new u.default(t,r,n,i))},e}
(l.default);r.default=c},{"./BaseRenderTexture":111,"./Texture":115}],114:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function()
{function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../"),s=t("../utils"),a=function(){function
t(e,r){var i=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:null;n(this,t),this.baseTexture=e,this.textures={},this.animations=
{},this.data=r,this.resolution=this._updateResolution(i||this.baseTexture.imageUrl),
this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchI
ndex=0,this._callback=null}return i(t,null,[{key:"BATCH_SIZE",get:function(){return
1e3}}]),t.prototype._updateResolution=function(t){var e=this.data.meta.scale,r=
(0,s.getResolutionOfUrl)(t,null);return null===r&&(r=void 0!==e?
parseFloat(e):1),1!==r&&
(this.baseTexture.resolution=r,this.baseTexture.update()),r},t.prototype.parse=funct
ion(e){this._batchIndex=0,this._callback=e,this._frameKeys.length<=t.BATCH_SIZE?
(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextB
atch()},t.prototype._processFrames=function(e){for(var
r=e,n=t.BATCH_SIZE,i=this.baseTexture.sourceScale;r-e<n&&r<this._frameKeys.length;)
{var s=this._frameKeys[r],a=this._frames[s],u=a.frame;if(u){var
h=null,l=null,c=!1!==a.trimmed&&a.sourceSize?a.sourceSize:a.frame,d=new
o.Rectangle(0,0,Math.floor(c.w*i)/this.resolution,Math.floor(c.h*i)/this.resolution)
;h=a.rotated?new
o.Rectangle(Math.floor(u.x*i)/this.resolution,Math.floor(u.y*i)/this.resolution,Math
.floor(u.h*i)/this.resolution,Math.floor(u.w*i)/this.resolution):new
o.Rectangle(Math.floor(u.x*i)/this.resolution,Math.floor(u.y*i)/this.resolution,Math
.floor(u.w*i)/this.resolution,Math.floor(u.h*i)/this.resolution),!1!==a.trimmed&&a.s
5/9/20, 12:55 PM
Page 64 of 181
priteSourceSize&&(l=new
o.Rectangle(Math.floor(a.spriteSourceSize.x*i)/this.resolution,Math.floor(a.spriteSo
urceSize.y*i)/this.resolution,Math.floor(u.w*i)/this.resolution,Math.floor(u.h*i)/th
is.resolution)),this.textures[s]=new o.Texture(this.baseTexture,h,d,l,a.rotated?
2:0,a.anchor),o.Texture.addToCache(this.textures[s],s)}r++}},t.prototype._processAni
mations=function(){var t=this.data.animations||{};for(var e in t)
{this.animations[e]=[];for(var r=t[e],n=Array.isArray(r),i=0,r=n?
r:r[Symbol.iterator]();;){var o;if(n)
{if(i>=r.length)break;o=r[i++]}else{if(i=r.next(),i.done)break;o=i.value}var
s=o;this.animations[e].push(this.textures[s])}}},t.prototype._parseComplete=function
(){var
t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)},
t.prototype._nextBatch=function(){var
e=this;this._processFrames(this._batchIndex*t.BATCH_SIZE),this._batchIndex++,setTime
out(function(){e._batchIndex*t.BATCH_SIZE<e._frameKeys.length?e._nextBatch():
(e._processAnimations(),e._parseComplete())},0)},t.prototype.destroy=function(){var
t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(var e in
this.textures)this.textures[e].destroy();this._frames=null,this._frameKeys=null,this
.data=null,this.textures=null,t&&this.baseTexture.destroy(),this.baseTexture=null},t
}();r.default=a},{"../":65,"../utils":125}],115:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t)
{t.destroy=function(){},t.on=function(){},t.once=function(){},t.emit=function()
{}}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),h=t("./BaseTexture"),l=n(h),c=t("./VideoBaseTexture"),d=n(c),f=t("./TextureUvs"),
p=n(f),v=t("eventemitter3"),g=n(v),y=t("../math"),m=t("../utils"),_=t("../settings")
,b=n(_),x=function(t){function e(r,n,s,a,u,h){i(this,e);var
l=o(this,t.call(this));if(l.noFrame=!1,n||(l.noFrame=!0,n=new
y.Rectangle(0,0,1,1)),r instanceof e&&
(r=r.baseTexture),l.baseTexture=r,l._frame=n,l.trim=a,l.valid=!1,l.requiresUpdate=!1
,l._uvs=null,l.orig=s||n,l._rotate=Number(u||0),!0===u)l._rotate=2;else
if(l._rotate%2!=0)throw new Error("attempt to use diamond-shaped UVs. If you are
sure, set rotation manually");return r.hasLoaded?(l.noFrame&&(n=new
y.Rectangle(0,0,r.width,r.height),r.on("update",l.onBaseTextureUpdated,l)),l.frame=n
):r.once("loaded",l.onBaseTextureLoaded,l),l.defaultAnchor=h?new
y.Point(h.x,h.y):new y.Point(0,0),l._updateID=0,l.transform=null,l.textureCacheIds=
[],l}return s(e,t),e.prototype.update=function()
{this.baseTexture.update()},e.prototype.onBaseTextureLoaded=function(t)
{this._updateID++,this.noFrame?this.frame=new
y.Rectangle(0,0,t.width,t.height):this.frame=this._frame,this.baseTexture.on("update
",this.onBaseTextureUpdated,this),this.emit("update",this)},e.prototype.onBaseTextur
eUpdated=function(t)
{this._updateID++,this._frame.width=t.width,this._frame.height=t.height,this.emit("u
pdate",this)},e.prototype.destroy=function(t){this.baseTexture&&(t&&
(m.TextureCache[this.baseTexture.imageUrl]&&e.removeFromCache(this.baseTexture.image
Url),this.baseTexture.destroy()),this.baseTexture.off("update",this.onBaseTextureUpd
ated,this),this.baseTexture.off("loaded",this.onBaseTextureLoaded,this),this.baseTex
ture=null),this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=
!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function()
{return new
e(this.baseTexture,this.frame,this.orig,this.trim,this.rotate,this.defaultAnchor)},e
5/9/20, 12:55 PM
Page 65 of 181
.prototype._updateUvs=function(){this._uvs||(this._uvs=new
p.default),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++}
,e.fromImage=function(t,r,n,i){var o=m.TextureCache[t];return o||(o=new
e(l.default.fromImage(t,r,n,i)),e.addToCache(o,t)),o},e.fromFrame=function(t){var
e=m.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the
texture cache');return e},e.fromCanvas=function(t,r){var n=arguments.length>2&&void
0!==arguments[2]?arguments[2]:"canvas";return new
e(l.default.fromCanvas(t,r,n))},e.fromVideo=function(t,r,n,i){return"string"==typeof
t?e.fromVideoUrl(t,r,n,i):new
e(d.default.fromVideo(t,r,i))},e.fromVideoUrl=function(t,r,n,i){return new
e(d.default.fromUrl(t,r,n,i))},e.from=function(t){if("string"==typeof t){var
r=m.TextureCache[t];if(!r){return null!==t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/)?
e.fromVideoUrl(t):e.fromImage(t)}return r}return t instanceof HTMLImageElement?new
e(l.default.from(t)):t instanceof HTMLCanvasElement?
e.fromCanvas(t,b.default.SCALE_MODE,"HTMLCanvasElement"):t instanceof
HTMLVideoElement?e.fromVideo(t):t instanceof l.default?new
e(t):t},e.fromLoader=function(t,r,n){var i=new l.default(t,void 0,
(0,m.getResolutionOfUrl)(r)),o=new e(i);return i.imageUrl=r,n||
(n=r),l.default.addToCache(o.baseTexture,n),e.addToCache(o,n),n!==r&&
(l.default.addToCache(o.baseTexture,r),e.addToCache(o,r)),o},e.addToCache=function(t
,e){e&&
(-1===t.textureCacheIds.indexOf(e)&&t.textureCacheIds.push(e),m.TextureCache[e]=t)},
e.removeFromCache=function(t){if("string"==typeof t){var e=m.TextureCache[t];if(e)
{var r=e.textureCacheIds.indexOf(t);return
r>-1&&e.textureCacheIds.splice(r,1),delete m.TextureCache[t],e}}else
if(t&&t.textureCacheIds){for(var
n=0;n<t.textureCacheIds.length;++n)m.TextureCache[t.textureCacheIds[n]]===t&&delete
m.TextureCache[t.textureCacheIds[n]];return t.textureCacheIds.length=0,t}return
null},u(e,[{key:"frame",get:function(){return this._frame},set:function(t)
{this._frame=t,this.noFrame=!1;var
e=t.x,r=t.y,n=t.width,i=t.height,o=e+n>this.baseTexture.width,s=r+i>this.baseTexture
.height;if(o||s){var a=o&&s?"and":"or",u="X: "+e+" + "+n+" = "+(e+n)+" >
"+this.baseTexture.width,h="Y: "+r+" + "+i+" = "+(r+i)+" >
"+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside
the base Texture dimensions: "+u+" "+a+"
"+h)}this.valid=n&&i&&this.baseTexture.hasLoaded,this.trim||this.rotate||
(this.orig=t),this.valid&&this._updateUvs()}},{key:"rotate",get:function(){return
this._rotate},set:function(t){this._rotate=t,this.valid&&this._updateUvs()}},
{key:"width",get:function(){return this.orig.width}},{key:"height",get:function()
{return this.orig.height}}]),e}(g.default);r.default=x,x.EMPTY=new x(new
l.default),a(x.EMPTY),a(x.EMPTY.baseTexture),x.WHITE=function(){var
t=document.createElement("canvas");t.width=10,t.height=10;var
e=t.getContext("2d");return e.fillStyle="white",e.fillRect(0,0,10,10),new x(new
l.default(t))}(),a(x.WHITE),a(x.WHITE.baseTexture)},
{"../math":70,"../settings":101,"../utils":125,"./BaseTexture":112,"./TextureUvs":11
7,"./VideoBaseTexture":118,eventemitter3:3}],116:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var
r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../math/Matrix"),s=function(t){return
t&&t.__esModule?t:{default:t}}(o),a=new s.default,u=function(){function t(e,r)
{n(this,t),this._texture=e,this.mapCoord=new s.default,this.uClampFrame=new
Float32Array(4),this.uClampOffset=new
Float32Array(2),this._lastTextureID=-1,this.clampOffset=0,this.clampMargin=void
0===r?.5:r}return t.prototype.multiplyUvs=function(t,e){void 0===e&&(e=t);for(var
r=this.mapCoord,n=0;n<t.length;n+=2){var
i=t[n],o=t[n+1];e[n]=i*r.a+o*r.c+r.tx,e[n+1]=i*r.b+o*r.d+r.ty}return
e},t.prototype.update=function(t){var
5/9/20, 12:55 PM
Page 66 of 181
e=this._texture;if(!e||!e.valid)return!1;if(!t&&this._lastTextureID===e._updateID)re
turn!1;this._lastTextureID=e._updateID;var r=e._uvs;this.mapCoord.set(r.x1-
r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);var n=e.orig,i=e.trim;i&&
(a.set(n.width/i.width,0,0,n.height/i.height,-i.x/i.width,-
i.y/i.height),this.mapCoord.append(a));var
o=e.baseTexture,s=this.uClampFrame,u=this.clampMargin/o.resolution,h=this.clampOffse
t;return s[0]=(e._frame.x+u+h)/o.width,s[1]=(e._frame.y+u+h)/o.height,s[2]=
(e._frame.x+e._frame.width-u+h)/o.width,s[3]=(e._frame.y+e._frame.heightu+h)/o.height,this.uClampOffset[0]=h/o.realWidth,this.uClampOffset[1]=h/o.realHeight
,!0},i(t,[{key:"texture",get:function(){return this._texture},set:function(t)
{this._texture=t,this._lastTextureID=-1}}]),t}();r.default=u},
{"../math/Matrix":67}],117:[function(t,e,r){"use strict";function n(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=t("../math/GroupD8"),o=function(t){return
t&&t.__esModule?t:{default:t}}(i),s=function(){function t()
{n(this,t),this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,thi
s.y3=1,this.uvsUint32=new Uint32Array(4)}return t.prototype.set=function(t,e,r){var
n=e.width,i=e.height;if(r){var
s=t.width/2/n,a=t.height/2/i,u=t.x/n+s,h=t.y/i+a;r=o.default.add(r,o.default.NW),thi
s.x0=u+s*o.default.uX(r),this.y0=h+a*o.default.uY(r),r=o.default.add(r,2),this.x1=u+
s*o.default.uX(r),this.y1=h+a*o.default.uY(r),r=o.default.add(r,2),this.x2=u+s*o.def
ault.uX(r),this.y2=h+a*o.default.uY(r),r=o.default.add(r,2),this.x3=u+s*o.default.uX
(r),this.y3=h+a*o.default.uY(r)}else this.x0=t.x/n,this.y0=t.y/i,this.x1=
(t.x+t.width)/n,this.y1=t.y/i,this.x2=(t.x+t.width)/n,this.y2=
(t.y+t.height)/i,this.x3=t.x/n,this.y3=(t.y+t.height)/i;this.uvsUint32[0]=
(65535&Math.round(65535*this.y0))
<<16|65535&Math.round(65535*this.x0),this.uvsUint32[1]=
(65535&Math.round(65535*this.y1))
<<16|65535&Math.round(65535*this.x1),this.uvsUint32[2]=
(65535&Math.round(65535*this.y2))
<<16|65535&Math.round(65535*this.x2),this.uvsUint32[3]=
(65535&Math.round(65535*this.y3))<<16|65535&Math.round(65535*this.x3)},t}
();r.default=s},{"../math/GroupD8":66}],118:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw
new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e)
{if(!e){var
r=t.split("?").shift().toLowerCase();e="video/"+r.substr(r.lastIndexOf(".")+1)}var
n=document.createElement("source");return n.src=t,n.type=e,n}r.__esModule=!0;var
u=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),h=t("./BaseTexture"),l=n(h),c=t("../utils"),d=t("../ticker"),f=t("../const"),p=t(
"../utils/determineCrossOrigin"),v=n(p),g=function(t){function e(r,n){var s=!
(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(i(this,e),!r)throw new
Error("No video source element specified.");
(r.readyState===r.HAVE_ENOUGH_DATA||r.readyState===r.HAVE_FUTURE_DATA)&&r.width&&r.h
eight&&(r.complete=!0);var a=o(this,t.call(this,r,n));return
a.width=r.videoWidth,a.height=r.videoHeight,a._autoUpdate=!0,a._isAutoUpdating=!1,a.
autoPlay=s,a.update=a.update.bind(a),a._onCanPlay=a._onCanPlay.bind(a),r.addEventLis
tener("play",a._onPlayStart.bind(a)),r.addEventListener("pause",a._onPlayStop.bind(a
)),a.hasLoaded=!1,a.__loaded=!1,a._isSourceReady()?a._onCanPlay():
(r.addEventListener("canplay",a._onCanPlay),r.addEventListener("canplaythrough",a._o
nCanPlay)),a}return s(e,t),e.prototype._isSourcePlaying=function(){var
5/9/20, 12:55 PM
Page 67 of 181
t=this.source;return
t.currentTime>0&&!1===t.paused&&!1===t.ended&&t.readyState>2},e.prototype._isSourceR
eady=function(){return
3===this.source.readyState||4===this.source.readyState},e.prototype._onPlayStart=fun
ction(){this.hasLoaded||this._onCanPlay(),!this._isAutoUpdating&&this.autoUpdate&&
(d.shared.add(this.update,this,f.UPDATE_PRIORITY.HIGH),this._isAutoUpdating=!0)},e.p
rototype._onPlayStop=function(){this._isAutoUpdating&&
(d.shared.remove(this.update,this),this._isAutoUpdating=!1)},e.prototype._onCanPlay=
function(){this.hasLoaded=!0,this.source&&
(this.source.removeEventListener("canplay",this._onCanPlay),this.source.removeEventL
istener("canplaythrough",this._onCanPlay),this.width=this.source.videoWidth,this.hei
ght=this.source.videoHeight,this.__loaded||
(this.__loaded=!0,this.emit("loaded",this)),this._isSourcePlaying()?
this._onPlayStart():this.autoPlay&&this.source.play())},e.prototype.destroy=function
()
{this._isAutoUpdating&&d.shared.remove(this.update,this),this.source&&this.source._p
ixiId&&(l.default.removeFromCache(this.source._pixiId),delete
this.source._pixiId,this.source.pause(),this.source.src="",this.source.load()),t.pro
totype.destroy.call(this)},e.fromVideo=function(t,r,n){t._pixiId||
(t._pixiId="video_"+(0,c.uid)());var i=c.BaseTextureCache[t._pixiId];return i||
(i=new e(t,r,n),l.default.addToCache(i,t._pixiId)),i},e.fromUrl=function(t,r,n,i)
{var o=document.createElement("video");o.setAttribute("webkitplaysinline",""),o.setAttribute("playsinline","");var s=Array.isArray(t)?
t[0].src||t[0]:t.src||t;if(void 0===n&&0!==s.indexOf("data:")?o.crossOrigin=
(0,v.default)(s):n&&(o.crossOrigin="string"==typeof n?
n:"anonymous"),Array.isArray(t))for(var
u=0;u<t.length;++u)o.appendChild(a(t[u].src||t[u],t[u].mime));else
o.appendChild(a(s,t.mime));return o.load(),e.fromVideo(o,r,i)},u(e,
[{key:"autoUpdate",get:function(){return this._autoUpdate},set:function(t)
{t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isAutoUpdating?
(d.shared.remove(this.update,this),this._isAutoUpdating=!1):this._autoUpdate&&!this.
_isAutoUpdating&&
(d.shared.add(this.update,this,f.UPDATE_PRIORITY.HIGH),this._isAutoUpdating=!0))}}])
,e}(l.default);r.default=g,g.fromUrls=g.fromUrl},
{"../const":46,"../ticker":121,"../utils":125,"../utils/determineCrossOrigin":124,".
/BaseTexture":112}],119:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function()
{function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),s=t("../settings"),a=n(s),u=t("../const"),h=t("./TickerListener"),l=n(h),c=functi
on(){function t(){var e=this;i(this,t),this._head=new
l.default(null,null,1/0),this._requestId=null,this._maxElapsedMS=100,this.autoStart=
!1,this.deltaTime=1,this.elapsedMS=1/a.default.TARGET_FPMS,this.lastTime=-1,this.spe
ed=1,this.started=!1,this._tick=function(t){e._requestId=null,e.started&&
(e.update(t),e.started&&null===e._requestId&&e._head.next&&
(e._requestId=requestAnimationFrame(e._tick)))}}return
t.prototype._requestIfNeeded=function(){null===this._requestId&&this._head.next&&
(this.lastTime=performance.now(),this._requestId=requestAnimationFrame(this._tick))}
,t.prototype._cancelIfNeeded=function(){null!==this._requestId&&
(cancelAnimationFrame(this._requestId),this._requestId=null)},t.prototype._startIfPo
ssible=function(){this.started?
this._requestIfNeeded():this.autoStart&&this.start()},t.prototype.add=function(t,e)
{var r=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:u.UPDATE_PRIORITY.NORMAL;return this._addListener(new
l.default(t,e,r))},t.prototype.addOnce=function(t,e){var r=arguments.length>2&&void
0!==arguments[2]?arguments[2]:u.UPDATE_PRIORITY.NORMAL;return this._addListener(new
l.default(t,e,r,!0))},t.prototype._addListener=function(t){var
5/9/20, 12:55 PM
Page 68 of 181
e=this._head.next,r=this._head;if(e){for(;e;){if(t.priority>e.priority)
{t.connect(r);break}r=e,e=e.next}t.previous||t.connect(r)}else t.connect(r);return
this._startIfPossible(),this},t.prototype.remove=function(t,e){for(var
r=this._head.next;r;)r=r.match(t,e)?r.destroy():r.next;return
this._head.next||this._cancelIfNeeded(),this},t.prototype.start=function()
{this.started||
(this.started=!0,this._requestIfNeeded())},t.prototype.stop=function()
{this.started&&
(this.started=!1,this._cancelIfNeeded())},t.prototype.destroy=function()
{this.stop();for(var
t=this._head.next;t;)t=t.destroy(!0);this._head.destroy(),this._head=null},t.prototy
pe.update=function(){var t=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:performance.now(),e=void 0;if(t>this.lastTime){e=this.elapsedMS=tthis.lastTime,e>this._maxElapsedMS&&
(e=this._maxElapsedMS),this.deltaTime=e*a.default.TARGET_FPMS*this.speed;for(var
r=this._head,n=r.next;n;)n=n.emit(this.deltaTime);r.next||this._cancelIfNeeded()}els
e this.deltaTime=this.elapsedMS=0;this.lastTime=t},o(t,[{key:"FPS",get:function()
{return 1e3/this.elapsedMS}},{key:"minFPS",get:function(){return
1e3/this._maxElapsedMS},set:function(t){var
e=Math.min(Math.max(0,t)/1e3,a.default.TARGET_FPMS);this._maxElapsedMS=1/e}}]),t}
();r.default=c},{"../const":46,"../settings":101,"./TickerListener":120}],120:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function()
{function t(e){var r=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:0,o=arguments.length>3&&void
0!==arguments[3]&&arguments[3];n(this,t),this.fn=e,this.context=r,this.priority=i,th
is.once=o,this.next=null,this.previous=null,this._destroyed=!1}return
t.prototype.match=function(t,e){return
e=e||null,this.fn===t&&this.context===e},t.prototype.emit=function(t){this.fn&&
(this.context?this.fn.call(this.context,t):this.fn(t));var e=this.next;return
this.once&&this.destroy(!0),this._destroyed&&
(this.next=null),e},t.prototype.connect=function(t){this.previous=t,t.next&&
(t.next.previous=this),this.next=t.next,t.next=this},t.prototype.destroy=function()
{var t=arguments.length>0&&void
0!==arguments[0]&&arguments[0];this._destroyed=!0,this.fn=null,this.context=null,thi
s.previous&&(this.previous.next=this.next),this.next&&
(this.next.previous=this.previous);var e=this.next;return this.next=t?
null:e,this.previous=null,e},t}();r.default=i},{}],121:[function(t,e,r){"use
strict";r.__esModule=!0,r.Ticker=r.shared=void 0;var n=t("./Ticker"),i=function(t)
{return t&&t.__esModule?t:{default:t}}(n),o=new
i.default;o.autoStart=!0,o.destroy=function(){},r.shared=o,r.Ticker=i.default},
{"./Ticker":119}],122:[function(t,e,r){"use strict";function n(){return!
(!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))}r.__esModule=!0,
r.default=n},{}],123:[function(t,e,r){"use strict";function n(t){for(var e=6*t,r=new
Uint16Array(e),n=0,i=0;n<e;n+=6,i+=4)r[n+0]=i+0,r[n+1]=i+1,r[n+2]=i+2,r[n+3]=i+0,r[n
+4]=i+2,r[n+5]=i+3;return r}r.__esModule=!0,r.default=n},{}],124:[function(t,e,r)
{"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:window.location;if(0===t.indexOf("data:"))return"";e=e||window.location
,s||(s=document.createElement("a")),s.href=t,t=o.default.parse(s.href);var
r=!t.port&&""===e.port||t.port===e.port;return
t.hostname===e.hostname&&r&&t.protocol===e.protocol?"":"anonymous"}r.__esModule=!0,r
.default=n;var i=t("url"),o=function(t){return t&&t.__esModule?t:{default:t}}
(i),s=void 0},{url:38}],125:[function(t,e,r){"use strict";function n(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return
e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o()
{return++U}function s(t,e){return e=e||[],e[0]=(t>>16&255)/255,e[1]=
(t>>8&255)/255,e[2]=(255&t)/255,e}function a(t){return t=t.toString(16),"#"+
(t="000000".substr(0,6-t.length)+t)}function u(t){return(255*t[0]<<16)+(255*t[1]
5/9/20, 12:55 PM
Page 69 of 181
<<8)+(255*t[2]|0)}function h(t,e){var r=S.default.RETINA_PREFIX.exec(t);return r?
parseFloat(r[1]):void 0!==e?e:1}function l(t){var
e=w.DATA_URI.exec(t);if(e)return{mediaType:e[1]?e[1].toLowerCase():void
0,subType:e[2]?e[2].toLowerCase():void 0,charset:e[3]?e[3].toLowerCase():void
0,encoding:e[4]?e[4].toLowerCase():void 0,data:e[5]}}function c(t){var
e=w.URL_FILE_EXTENSION.exec(t);if(e)return e[1].toLowerCase()}function d(t){var
e=w.SVG_SIZE.exec(t),r={};return e&&
(r[e[1]]=Math.round(parseFloat(e[3])),r[e[5]]=Math.round(parseFloat(e[7]))),r}functi
on f(){X=!0}function p(t){if(!X)
{if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var e=["\n %c %c %c
PixiJS "+w.VERSION+" - âœ° "+t+" âœ° %c %c http://www.pixijs.com/ %c %c â™¥%câ™¥
%câ™¥ \n\n","background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px
0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5;
padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5;
padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424;
background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px
0;"];window.console.log.apply(console,e)}else
window.console&&window.console.log("PixiJS "+w.VERSION+" - "+t+" -
http://www.pixijs.com/");X=!0}}function v(){var t=
{stencil:!0,failIfMajorPerformanceCaveat:!0};try{if(!window.WebGLRenderingContext)re
turn!1;var
e=document.createElement("canvas"),r=e.getContext("webgl",t)||e.getContext("experime
ntal-webgl",t),n=!(!r||!r.getContextAttributes().stencil);if(r){var
i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch(t)
{return!1}}function g(t){return 0===t?0:t<0?-1:1}function y(){var t=void 0;for(t in
G)G[t].destroy();for(t in W)W[t].destroy()}function m(){var t=void 0;for(t in
G)delete G[t];for(t in W)delete W[t]}function _(t,e){return H[e?1:0][t]}function
b(t,e){if(1===e)return(255*e<<24)+t;if(0===e)return 0;var
r=t>>16&255,n=t>>8&255,i=255&t;return r=r*e+.5|0,n=n*e+.5|0,i=i*e+.5|0,(255*e<<24)+
(r<<16)+(n<<8)+i}function x(t,e,r,n){return r=r||new Float32Array(4),n||void 0===n?
(r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e):
(r[0]=t[0],r[1]=t[1],r[2]=t[2]),r[3]=e,r}function T(t,e,r,n){return r=r||new
Float32Array(4),r[0]=(t>>16&255)/255,r[1]=(t>>8&255)/255,r[2]=(255&t)/255,(n||void
0===n)&&
(r[0]*=e,r[1]*=e,r[2]*=e),r[3]=e,r}r.__esModule=!0,r.premultiplyBlendMode=r.BaseText
ureCache=r.TextureCache=r.earcut=r.mixins=r.pluginTarget=r.EventEmitter=r.removeItem
s=r.isMobile=void
0,r.uid=o,r.hex2rgb=s,r.hex2string=a,r.rgb2hex=u,r.getResolutionOfUrl=h,r.decomposeD
ataUri=l,r.getUrlFileExtension=c,r.getSvgSize=d,r.skipHello=f,r.sayHello=p,r.isWebGL
Supported=v,r.sign=g,r.destroyTextureCache=y,r.clearTextureCache=m,r.correctBlendMod
e=_,r.premultiplyTint=b,r.premultiplyRgba=x,r.premultiplyTintToRgba=T;var
w=t("../const"),E=t("../settings"),S=i(E),O=t("eventemitter3"),M=i(O),P=t("./pluginT
arget"),C=i(P),R=t("./mixin"),A=n(R),I=t("ismobilejs"),D=n(I),L=t("remove-arrayitems"),N=i(L),B=t("./mapPremultipliedBlendModes"),k=i(B),F=t("earcut"),j=i(F),U=0,X
=!1;r.isMobile=D,r.removeItems=N.default,r.EventEmitter=M.default,r.pluginTarget=C.d
efault,r.mixins=A,r.earcut=j.default;var
G=r.TextureCache=Object.create(null),W=r.BaseTextureCache=Object.create(null),H=r.pr
emultiplyBlendMode=(0,k.default)()},
{"../const":46,"../settings":101,"./mapPremultipliedBlendModes":126,"./mixin":128,".
/pluginTarget":129,earcut:2,eventemitter3:3,ismobilejs:4,"remove-arrayitems":31}],126:[function(t,e,r){"use strict";function n(){for(var t=[],e=
[],r=0;r<32;r++)t[r]=r,e[r]=r;t[i.BLEND_MODES.NORMAL_NPM]=i.BLEND_MODES.NORMAL,t[i.B
LEND_MODES.ADD_NPM]=i.BLEND_MODES.ADD,t[i.BLEND_MODES.SCREEN_NPM]=i.BLEND_MODES.SCRE
EN,e[i.BLEND_MODES.NORMAL]=i.BLEND_MODES.NORMAL_NPM,e[i.BLEND_MODES.ADD]=i.BLEND_MOD
ES.ADD_NPM,e[i.BLEND_MODES.SCREEN]=i.BLEND_MODES.SCREEN_NPM;var n=[];return
n.push(e),n.push(t),n}r.__esModule=!0,r.default=n;var i=t("../const")},
{"../const":46}],127:[function(t,e,r){"use strict";function n(t){return
o.default.tablet||o.default.phone?4:t}r.__esModule=!0,r.default=n;var
i=t("ismobilejs"),o=function(t){return t&&t.__esModule?t:{default:t}}(i)},
{ismobilejs:4}],128:[function(t,e,r){"use strict";function n(t,e){if(t&&e)for(var
5/9/20, 12:55 PM
Page 70 of 181
r=Object.keys(e),n=0;n<r.length;++n){var
i=r[n];Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}}function
i(t,e){s.push(t,e)}function o(){for(var
t=0;t<s.length;t+=2)n(s[t],s[t+1]);s.length=0}r.__esModule=!0,r.mixin=n,r.delayMixin
=i,r.performMixins=o;var s=[]},{}],129:[function(t,e,r){"use strict";function n(t)
{t.__plugins={},t.registerPlugin=function(e,r)
{t.__plugins[e]=r},t.prototype.initPlugins=function(){this.plugins=this.plugins||
{};for(var e in t.__plugins)this.plugins[e]=new t.__plugins[e]
(this)},t.prototype.destroyPlugins=function(){for(var t in
this.plugins)this.plugins[t].destroy(),this.plugins[t]=null;this.plugins=null}}r.__e
sModule=!0,r.default={mixin:function(t){n(t)}}},{}],130:[function(t,e,r){"use
strict";function n(t){var
e=t.width,r=t.height,n=t.getContext("2d"),i=n.getImageData(0,0,e,r),o=i.data,s=o.len
gth,a={top:null,left:null,right:null,bottom:null},u=null,h=void 0,l=void 0,c=void
0;for(h=0;h<s;h+=4)0!==o[h+3]&&(l=h/4%e,c=~~(h/4/e),null===a.top&&
(a.top=c),null===a.left?a.left=l:l<a.left&&(a.left=l),null===a.right?
a.right=l+1:a.right<l&&(a.right=l+1),null===a.bottom?a.bottom=c:a.bottom<c&&
(a.bottom=c));return null!==a.top&&(e=a.right-a.left,r=a.bottoma.top+1,u=n.getImageData(a.left,a.top,e,r)),
{height:r,width:e,data:u}}r.__esModule=!0,r.default=n},{}],131:[function(t,e,r){"use
strict";function n(t){if(!o[t]){var e=(new Error).stack;void 0===e?
console.warn("Deprecation Warning: ",t):
(e=e.split("\n").splice(3).join("\n"),console.groupCollapsed?
(console.groupCollapsed("%cDeprecation Warning:
%c%s","color:#614108;background:#fffbe6","fontweight:normal;color:#614108;background:#fffbe6",t),console.warn(e),console.groupEnd(
)):(console.warn("Deprecation Warning: ",t),console.warn(e))),o[t]=!0}}function i(t)
{var
e=t.mesh,r=t.particles,i=t.extras,o=t.filters,s=t.prepare,a=t.loaders,u=t.interactio
n;Object.defineProperties(t,{SpriteBatch:{get:function(){throw new
ReferenceError("SpriteBatch does not exist any more, please use the new
ParticleContainer instead.")}},AssetLoader:{get:function(){throw new
ReferenceError("The loader system was overhauled in PixiJS v3, please see the new
PIXI.loaders.Loader class.")}},Stage:{get:function(){return n("You do not need to
use a PIXI Stage any more, you can simply render any
container."),t.Container}},DisplayObjectContainer:{get:function(){return
n("DisplayObjectContainer has been shortened to Container, please use Container from
now on."),t.Container}},Strip:{get:function(){return n("The Strip class has been
renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now
on."),e.Mesh}},Rope:{get:function(){return n("The Rope class has been moved to
mesh.Rope, please use mesh.Rope from now on."),e.Rope}},ParticleContainer:
{get:function(){return n("The ParticleContainer class has been moved to
particles.ParticleContainer, please use particles.ParticleContainer from now
on."),r.ParticleContainer}},MovieClip:{get:function(){
return n("The MovieClip class has been moved to extras.AnimatedSprite, please use
extras.AnimatedSprite."),i.AnimatedSprite}},TilingSprite:{get:function(){return
n("The TilingSprite class has been moved to extras.TilingSprite, please use
extras.TilingSprite from now on."),i.TilingSprite}},BitmapText:{get:function()
{return n("The BitmapText class has been moved to extras.BitmapText, please use
extras.BitmapText from now on."),i.BitmapText}},blendModes:{get:function(){return
n("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now
on."),t.BLEND_MODES}},scaleModes:{get:function(){return n("The scaleModes has been
moved to SCALE_MODES, please use SCALE_MODES from now
on."),t.SCALE_MODES}},BaseTextureCache:{get:function(){return n("The
BaseTextureCache class has been moved to utils.BaseTextureCache, please use
utils.BaseTextureCache from now on."),t.utils.BaseTextureCache}},TextureCache:
{get:function(){return n("The TextureCache class has been moved to
utils.TextureCache, please use utils.TextureCache from now
on."),t.utils.TextureCache}},math:{get:function(){return n("The math namespace is
deprecated, please access members already accessible on PIXI."),t}},AbstractFilter:
5/9/20, 12:55 PM
Page 71 of 181
{get:function(){return n("AstractFilter has been renamed to Filter, please use
PIXI.Filter"),t.Filter}},TransformManual:{get:function(){return n("TransformManual
has been renamed to TransformBase, please update your pixispine"),t.TransformBase}},TARGET_FPMS:{get:function(){return n("PIXI.TARGET_FPMS has
been deprecated, please use
PIXI.settings.TARGET_FPMS"),t.settings.TARGET_FPMS},set:function(e)
{n("PIXI.TARGET_FPMS has been deprecated, please use
PIXI.settings.TARGET_FPMS"),t.settings.TARGET_FPMS=e}},FILTER_RESOLUTION:
{get:function(){return n("PIXI.FILTER_RESOLUTION has been deprecated, please use
PIXI.settings.FILTER_RESOLUTION"),t.settings.FILTER_RESOLUTION},set:function(e)
{n("PIXI.FILTER_RESOLUTION has been deprecated, please use
PIXI.settings.FILTER_RESOLUTION"),t.settings.FILTER_RESOLUTION=e}},RESOLUTION:
{get:function(){return n("PIXI.RESOLUTION has been deprecated, please use
PIXI.settings.RESOLUTION"),t.settings.RESOLUTION},set:function(e){n("PIXI.RESOLUTION
has been deprecated, please use
PIXI.settings.RESOLUTION"),t.settings.RESOLUTION=e}},MIPMAP_TEXTURES:{get:function()
{return n("PIXI.MIPMAP_TEXTURES has been deprecated, please use
PIXI.settings.MIPMAP_TEXTURES"),t.settings.MIPMAP_TEXTURES},set:function(e)
{n("PIXI.MIPMAP_TEXTURES has been deprecated, please use
PIXI.settings.MIPMAP_TEXTURES"),t.settings.MIPMAP_TEXTURES=e}},SPRITE_BATCH_SIZE:
{get:function(){return n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use
PIXI.settings.SPRITE_BATCH_SIZE"),t.settings.SPRITE_BATCH_SIZE},set:function(e)
{n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use
PIXI.settings.SPRITE_BATCH_SIZE"),t.settings.SPRITE_BATCH_SIZE=e}},SPRITE_MAX_TEXTUR
ES:{get:function(){return n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please
use
PIXI.settings.SPRITE_MAX_TEXTURES"),t.settings.SPRITE_MAX_TEXTURES},set:function(e)
{n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use
PIXI.settings.SPRITE_MAX_TEXTURES"),t.settings.SPRITE_MAX_TEXTURES=e}},RETINA_PREFIX
:{get:function(){return n("PIXI.RETINA_PREFIX has been deprecated, please use
PIXI.settings.RETINA_PREFIX"),t.settings.RETINA_PREFIX},set:function(e)
{n("PIXI.RETINA_PREFIX has been deprecated, please use
PIXI.settings.RETINA_PREFIX"),t.settings.RETINA_PREFIX=e}},DEFAULT_RENDER_OPTIONS:
{get:function(){return n("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please
use PIXI.settings.DEFAULT_RENDER_OPTIONS"),t.settings.RENDER_OPTIONS}}});for(var h=
[{parent:"TRANSFORM_MODE",target:"TRANSFORM_MODE"},
{parent:"GC_MODES",target:"GC_MODE"},{parent:"WRAP_MODES",target:"WRAP_MODE"},
{parent:"SCALE_MODES",target:"SCALE_MODE"},
{parent:"PRECISION",target:"PRECISION_FRAGMENT"}],l=0;l<h.length;l++)!function(e)
{var r=h[e];Object.defineProperty(t[r.parent],"DEFAULT",{get:function(){return
n("PIXI."+r.parent+".DEFAULT has been deprecated, please use
PIXI.settings."+r.target),t.settings[r.target]},set:function(e)
{n("PIXI."+r.parent+".DEFAULT has been deprecated, please use
PIXI.settings."+r.target),t.settings[r.target]=e}})}
(l);Object.defineProperties(t.settings,{PRECISION:{get:function(){return
n("PIXI.settings.PRECISION has been deprecated, please use
PIXI.settings.PRECISION_FRAGMENT"),t.settings.PRECISION_FRAGMENT},set:function(e)
{n("PIXI.settings.PRECISION has been deprecated, please use
PIXI.settings.PRECISION_FRAGMENT"),t.settings.PRECISION_FRAGMENT=e}}}),i.AnimatedSpr
ite&&Object.defineProperties(i,{MovieClip:{get:function(){return n("The MovieClip
class has been renamed to AnimatedSprite, please use AnimatedSprite from now
on."),i.AnimatedSprite}}}),i&&Object.defineProperties(i,{TextureTransform:
{get:function(){return n("The TextureTransform class has been renamed to
TextureMatrix, please use PIXI.TextureMatrix from now
on."),t.TextureMatrix}}}),t.DisplayObject.prototype.generateTexture=function(t,e,r)
{return n("generateTexture has moved to the renderer, please use
renderer.generateTexture(displayObject)"),t.generateTexture(this,e,r)},t.Graphics.pr
ototype.generateTexture=function(t,e){return n("graphics generate texture has moved
to the renderer. Or to render a graphics to a texture using canvas please use
generateCanvasTexture"),this.generateCanvasTexture(t,e)},t.GroupD8.isSwapWidthHeight
5/9/20, 12:55 PM
Page 72 of 181
=function(e){return n("GroupD8.isSwapWidthHeight was renamed to
GroupD8.isVertical"),t.GroupD8.isVertical(e)},t.RenderTexture.prototype.render=funct
ion(t,e,r,i){this.legacyRenderer.render(t,this,r,e,!i),n("RenderTexture.render is
now deprecated, please use renderer.render(displayObject,
renderTexture)")},t.RenderTexture.prototype.getImage=function(t){return
n("RenderTexture.getImage is now deprecated, please use
renderer.extract.image(target)"),this.legacyRenderer.extract.image(t)},t.RenderTextu
re.prototype.getBase64=function(t){return n("RenderTexture.getBase64 is now
deprecated, please use
renderer.extract.base64(target)"),this.legacyRenderer.extract.base64(t)},t.RenderTex
ture.prototype.getCanvas=function(t){return n("RenderTexture.getCanvas is now
deprecated, please use
renderer.extract.canvas(target)"),this.legacyRenderer.extract.canvas(t)},t.RenderTex
ture.prototype.getPixels=function(t){return n("RenderTexture.getPixels is now
deprecated, please use
renderer.extract.pixels(target)"),this.legacyRenderer.pixels(t)},t.Sprite.prototype.
setTexture=function(t){this.texture=t,n("setTexture is now deprecated, please use
the texture property, e.g : sprite.texture = texture;")},i.BitmapText&&
(i.BitmapText.prototype.setText=function(t){this.text=t,n("setText is now
deprecated, please use the text property, e.g : myBitmapText.text = 'my
text';")}),t.Text.prototype.setText=function(t){this.text=t,n("setText is now
deprecated, please use the text property, e.g : myText.text = 'my
text';")},t.Text.calculateFontProperties=function(e){return
n("Text.calculateFontProperties is now deprecated, please use the
TextMetrics.measureFont"),t.TextMetrics.measureFont(e)},Object.defineProperties(t.Te
xt,{fontPropertiesCache:{get:function(){return n("Text.fontPropertiesCache is
deprecated"),t.TextMetrics._fonts}},fontPropertiesCanvas:{get:function(){return
n("Text.fontPropertiesCanvas is
deprecated"),t.TextMetrics._canvas}},fontPropertiesContext:{get:function(){return
n("Text.fontPropertiesContext is
deprecated"),t.TextMetrics._context}}}),t.Text.prototype.setStyle=function(t)
{this.style=t,n("setStyle is now deprecated, please use the style property, e.g :
myText.style = style;")},t.Text.prototype.determineFontProperties=function(e){return
n("determineFontProperties is now deprecated, please use TextMetrics.measureFont
method"),t.TextMetrics.measureFont(e)},t.Text.getFontStyle=function(e){return
n("getFontStyle is now deprecated, please use TextStyle.toFontString()
instead"),e=e||{},e instanceof t.TextStyle||(e=new
t.TextStyle(e)),e.toFontString()},Object.defineProperties(t.TextStyle.prototype,
{font:{get:function(){n("text style property 'font' is now deprecated, please use
the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties
from now on");var t="number"==typeof this._fontSize?
this._fontSize+"px":this._fontSize;return this._fontStyle+" "+this._fontVariant+"
"+this._fontWeight+" "+t+" "+this._fontFamily},set:function(t){n("text style
property 'font' is now deprecated, please use the
'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from
now on"),t.indexOf("italic")>1?this._fontStyle="italic":t.indexOf("oblique")>-1?
this._fontStyle="oblique":this._fontStyle="normal",t.indexOf("small-caps")>-1?
this._fontVariant="small-caps":this._fontVariant="normal";var e=t.split("
"),r=-1;this._fontSize=26;for(var i=0;i<e.length;++i)if(e[i].match(/(px|pt|em|%)/))
{r=i,this._fontSize=e[i];break}this._fontWeight="normal";for(var
o=0;o<r;++o)if(e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)
/)){this._fontWeight=e[o];break}if(r>-1&&r<e.length-1){this._fontFamily="";for(var
s=r+1;s<e.length;++s)this._fontFamily+=e[s]+"
";this._fontFamily=this._fontFamily.slice(0,-1)}else
this._fontFamily="Arial";this.styleID++}}}),t.Texture.prototype.setFrame=function(t)
{this.frame=t,n("setFrame is now deprecated, please use the frame property, e.g:
myTexture.frame = frame;")},t.Texture.addTextureToCache=function(e,r)
{t.Texture.addToCache(e,r),n("Texture.addTextureToCache is deprecated, please use
Texture.addToCache from now on.")},t.Texture.removeTextureFromCache=function(e)
{return n("Texture.removeTextureFromCache is deprecated, please use
5/9/20, 12:55 PM
Page 73 of 181
Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not
automatically its BaseTexture from the BaseTextureCache. For that, use
BaseTexture.removeFromCache"),t.BaseTexture.removeFromCache(e),t.Texture.removeFromC
ache(e)},Object.defineProperties(o,{AbstractFilter:{get:function(){return
n("AstractFilter has been renamed to Filter, please use
PIXI.Filter"),t.AbstractFilter}},SpriteMaskFilter:{get:function(){return
n("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter
from now on."),t.SpriteMaskFilter}},VoidFilter:{get:function(){return n("VoidFilter
has been renamed to AlphaFilter, please use
PIXI.filters.AlphaFilter"),o.AlphaFilter}}}),t.utils.uuid=function(){return
n("utils.uuid() is deprecated, please use utils.uid() from now
on."),t.utils.uid()},t.utils.canUseNewCanvasBlendModes=function(){return
n("utils.canUseNewCanvasBlendModes() is deprecated, please use
CanvasTinter.canUseMultiply from now on"),t.CanvasTinter.canUseMultiply};var
c=!0;if(Object.defineProperty(t.utils,"_saidHello",{set:function(t){t&&
(n("PIXI.utils._saidHello is deprecated, please use
PIXI.utils.skipHello()"),this.skipHello()),c=t},get:function(){return
c}}),s.BasePrepare&&(s.BasePrepare.prototype.register=function(t,e){return
n("renderer.plugins.prepare.register is now deprecated, please use
renderer.plugins.prepare.registerFindHook &
renderer.plugins.prepare.registerUploadHook"),t&&this.registerFindHook(t),e&&this.re
gisterUploadHook(e),this}),s.canvas&&Object.defineProperty(s.canvas,"UPLOADS_PER_FRA
ME",{set:function(){n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please
set renderer.plugins.prepare.limiter.maxItemsPerFrame on your
renderer")},get:function(){return n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been
removed. Please use
renderer.plugins.prepare.limiter"),NaN}}),s.webgl&&Object.defineProperty(s.webgl,"UP
LOADS_PER_FRAME",{set:function(){n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been
removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your
renderer")},get:function(){return n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been
removed. Please use renderer.plugins.prepare.limiter"),NaN}}),a.Loader){var
d=a.Resource,f=a.Loader;Object.defineProperties(d.prototype,{isJson:{get:function()
{return n("The isJson property is deprecated, please use `resource.type ===
Resource.TYPE.JSON`."),this.type===d.TYPE.JSON}},isXml:{get:function(){return n("The
isXml property is deprecated, please use `resource.type ===
Resource.TYPE.XML`."),this.type===d.TYPE.XML}},isImage:{get:function(){return n("The
isImage property is deprecated, please use `resource.type ===
Resource.TYPE.IMAGE`."),this.type===d.TYPE.IMAGE}},isAudio:{get:function(){return
n("The isAudio property is deprecated, please use `resource.type ===
Resource.TYPE.AUDIO`."),this.type===d.TYPE.AUDIO}},isVideo:{get:function(){return
n("The isVideo property is deprecated, please use `resource.type ===
Resource.TYPE.VIDEO`."),this.type===d.TYPE.VIDEO}}}),Object.defineProperties(f.proto
type,{before:{get:function(){return n("The before() method is deprecated, please use
pre()."),this.pre}},after:{get:function(){return n("The after() method is
deprecated, please use
use()."),this.use}}})}u.interactiveTarget&&Object.defineProperty(u.interactiveTarget
,"defaultCursor",{set:function(t){n("Property defaultCursor has been replaced with
'cursor'. "),this.cursor=t},get:function(){return n("Property defaultCursor has been
replaced with 'cursor'. "),this.cursor}}),u.InteractionManager&&
(Object.defineProperty(u.InteractionManager,"defaultCursorStyle",{set:function(t)
{n("Property defaultCursorStyle has been replaced with 'cursorStyles.default'.
"),this.cursorStyles.default=t},get:function(){return n("Property defaultCursorStyle
has been replaced with 'cursorStyles.default'.
"),this.cursorStyles.default}}),Object.defineProperty(u.InteractionManager,"currentC
ursorStyle",{set:function(t){n("Property currentCursorStyle has been removed.See the
currentCursorMode property, which works
differently."),this.currentCursorMode=t},get:function(){return n("Property
currentCursorStyle has been removed.See the currentCursorMode property, which works
differently."),this.currentCursorMode}}))}r.__esModule=!0,r.default=i;var o={}},
{}],132:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
5/9/20, 12:55 PM
Page 74 of 181
TypeError("Cannot call a class as a function")}r.__esModule=!0;var
i=t("../../core"),o=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}(i),s=new o.Rectangle,a=function(){function t(e)
{n(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function(t){var
e=new Image;return e.src=this.base64(t),e},t.prototype.base64=function(t){return
this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var
e=this.renderer,r=void 0,n=void 0,i=void 0,a=void 0;t&&(a=t instanceof
o.RenderTexture?t:e.generateTexture(t)),a?
(r=a.baseTexture._canvasRenderTarget.context,n=a.baseTexture._canvasRenderTarget.res
olution,i=a.frame):
(r=e.rootContext,n=e.resolution,i=s,i.width=this.renderer.width,i.height=this.render
er.height);var u=i.width*n,h=i.height*n,l=new
o.CanvasRenderTarget(u,h,1),c=r.getImageData(i.x*n,i.y*n,u,h);return
l.context.putImageData(c,0,0),l.canvas},t.prototype.pixels=function(t){var
e=this.renderer,r=void 0,n=void 0,i=void 0,a=void 0;return t&&(a=t instanceof
o.RenderTexture?t:e.generateTexture(t)),a?
(r=a.baseTexture._canvasRenderTarget.context,n=a.baseTexture._canvasRenderTarget.res
olution,i=a.frame):
(r=e.rootContext,i=s,i.width=e.width,i.height=e.height),r.getImageData(0,0,i.width*n
,i.height*n).data},t.prototype.destroy=function()
{this.renderer.extract=null,this.renderer=null},t}
();r.default=a,o.CanvasRenderer.registerPlugin("extract",a)},{"../../core":65}],133:
[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}r.__esModule=!0;var
i=t("./webgl/WebGLExtract");Object.defineProperty(r,"webgl",
{enumerable:!0,get:function(){return n(i).default}});var
o=t("./canvas/CanvasExtract");Object.defineProperty(r,"canvas",
{enumerable:!0,get:function(){return n(o).default}})},
{"./canvas/CanvasExtract":132,"./webgl/WebGLExtract":134}],134:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=t("../../core"),o=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(i),s=new o.Rectangle,a=function(){function t(e)
{n(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function(t){var
e=new Image;return e.src=this.base64(t),e},t.prototype.base64=function(t){return
this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var
e=this.renderer,r=void 0,n=void 0,i=void 0,a=!1,u=void 0,h=!1;t&&(t instanceof
o.RenderTexture?u=t:(u=this.renderer.generateTexture(t),h=!0)),u?
(r=u.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=u.fram
e,a=!1):
(r=this.renderer.rootRenderTarget,n=r.resolution,a=!0,i=s,i.width=r.size.width,i.hei
ght=r.size.height);var l=i.width*n,c=i.height*n,d=new
o.CanvasRenderTarget(l,c,1);if(r){e.bindRenderTarget(r);var f=new
Uint8Array(4*l*c),p=e.gl;p.readPixels(i.x*n,i.y*n,l,c,p.RGBA,p.UNSIGNED_BYTE,f);var
v=d.context.getImageData(0,0,l,c);v.data.set(f),d.context.putImageData(v,0,0),a&&
(d.context.scale(1,-1),d.context.drawImage(d.canvas,0,-c))}return
h&&u.destroy(!0),d.canvas},t.prototype.pixels=function(t){var e=this.renderer,r=void
0,n=void 0,i=void 0,a=void 0,u=!1;t&&(t instanceof o.RenderTexture?a=t:
(a=this.renderer.generateTexture(t),u=!0)),a?
(r=a.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=a.fram
e):
(r=this.renderer.rootRenderTarget,n=r.resolution,i=s,i.width=r.size.width,i.height=r
.size.height);var h=i.width*n,l=i.height*n,c=new Uint8Array(4*h*l);if(r)
{e.bindRenderTarget(r);var
d=e.gl;d.readPixels(i.x*n,i.y*n,h,l,d.RGBA,d.UNSIGNED_BYTE,c)}return
u&&a.destroy(!0),c},t.prototype.destroy=function()
{this.renderer.extract=null,this.renderer=null},t}
();r.default=a,o.WebGLRenderer.registerPlugin("extract",a)},{"../../core":65}],135:
5/9/20, 12:55 PM
Page 75 of 181
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(a),h=function(t){function e(r,o){n(this,e);var s=i(this,t.call(this,r[0]instanceof
u.Texture?r[0]:r[0].texture));return
s._textures=null,s._durations=null,s.textures=r,s._autoUpdate=!1!==o,s.animationSpee
d=1,s.loop=!0,s.updateAnchor=!1,s.onComplete=null,s.onFrameChange=null,s.onLoop=null
,s._currentTime=0,s.playing=!1,s}return o(e,t),e.prototype.stop=function()
{this.playing&&
(this.playing=!1,this._autoUpdate&&u.ticker.shared.remove(this.update,this))},e.prot
otype.play=function(){this.playing||
(this.playing=!0,this._autoUpdate&&u.ticker.shared.add(this.update,this,u.UPDATE_PRI
ORITY.HIGH))},e.prototype.gotoAndStop=function(t){this.stop();var
e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture()}
,e.prototype.gotoAndPlay=function(t){var
e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture(),
this.play()},e.prototype.update=function(t){var
e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var
n=this._currentTime%1*this._durations[this.currentFrame];for(n+=e/60*1e3;n<0;)this._
currentTime--,n+=this._durations[this.currentFrame];var
i=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTim
e);n>=this._durations[this.currentFrame];)n-
=this._durations[this.currentFrame]*i,this._currentTime+=i;this._currentTime+=n/this
._durations[this.currentFrame]}else
this._currentTime+=e;this._currentTime<0&&!this.loop?
(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._te
xtures.length&&!this.loop?(this.gotoAndStop(this._textures.length1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&
(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r?
this.onLoop():this.animationSpeed<0&&this.currentFrame>r&&this.onLoop()),this.update
Texture())},e.prototype.updateTexture=function()
{this._texture=this._textures[this.currentFrame],this._textureID=-1,this.cachedTint=
16777215,this.updateAnchor&&this._anchor.copy(this._texture.defaultAnchor),this.onFr
ameChange&&this.onFrameChange(this.currentFrame)},e.prototype.destroy=function(e)
{this.stop(),t.prototype.destroy.call(this,e)},e.fromFrames=function(t){for(var r=
[],n=0;n<t.length;++n)r.push(u.Texture.fromFrame(t[n]));return new
e(r)},e.fromImages=function(t){for(var r=
[],n=0;n<t.length;++n)r.push(u.Texture.fromImage(t[n]));return new e(r)},s(e,
[{key:"totalFrames",get:function(){return this._textures.length}},
{key:"textures",get:function(){return this._textures},set:function(t)
{if(t[0]instanceof
u.Texture)this._textures=t,this._durations=null;else{this._textures=
[],this._durations=[];for(var
e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)
}this.gotoAndStop(0),this.updateTexture()}},{key:"currentFrame",get:function(){var
t=Math.floor(this._currentTime)%this._textures.length;return t<0&&
(t+=this._textures.length),t}}]),e}(u.Sprite);r.default=h},{"../core":65}],136:
[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
5/9/20, 12:55 PM
Page 76 of 181
class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function
t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../core"),h=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(u),l=t("../core/math/ObservablePoint"),c=n(l),d=t("../core/utils"),f=t("../core/set
tings"),p=n(f),v=function(t){function e(r){var n=arguments.length>1&&void
0!==arguments[1]?arguments[1]:{};i(this,e);var s=o(this,t.call(this));return
s._textWidth=0,s._textHeight=0,s._glyphs=[],s._font={tint:void 0!==n.tint?
n.tint:16777215,align:n.align||"left",name:null,size:0},s.font=n.font,s._text=r,s._m
axWidth=0,s._maxLineHeight=0,s._letterSpacing=0,s._anchor=new c.default(function()
{s.dirty=!0},s,0,0),s.dirty=!1,s.updateText(),s}return
s(e,t),e.prototype.updateText=function(){for(var
t=e.fonts[this._font.name],r=this._font.size/t.size,n=new h.Point,i=[],o=
[],s=this.text.replace(/(?:\r\n|\r)/g,"\n"),a=s.length,u=this._maxWidth*t.size/this.
_font.size,l=null,c=0,d=0,f=0,p=-1,v=0,g=0,y=0,m=0;m<a;m++){var
_=s.charCodeAt(m),b=s.charAt(m);if(/(?:\s)/.test(b)&&(p=m,v=c),"\r"!==b&&"\n"!==b)
{var x=t.chars[_];x&&(l&&x.kerning[l]&&
(n.x+=x.kerning[l]),i.push({texture:x.texture,line:f,charCode:_,position:new
h.Point(n.x+x.xOffset+this._letterSpacing/2,n.y+x.yOffset)}),n.x+=x.xAdvance+this._l
etterSpacing,c=n.x,y=Math.max(y,x.yOffset+x.texture.height),l=_,-1!==p&&u>0&&n.x>u&&
(++g,h.utils.removeItems(i,1+p-g,1+mp),m=p,p=-1,o.push(v),d=Math.max(d,v),f++,n.x=0,n.y+=t.lineHeight,l=null))}else
o.push(c),d=Math.max(d,c),++f,++g,n.x=0,n.y+=t.lineHeight,l=null}var
T=s.charAt(s.length-1);"\r"!==T&&"\n"!==T&&(/(?:\s)/.test(T)&&
(c=v),o.push(c),d=Math.max(d,c));for(var w=[],E=0;E<=f;E++){var
S=0;"right"===this._font.align?S=d-o[E]:"center"===this._font.align&&(S=(do[E])/2),w.push(S)}for(var O=i.length,M=this.tint,P=0;P<O;P++){var
C=this._glyphs[P];C?C.texture=i[P].texture:(C=new
h.Sprite(i[P].texture),this._glyphs.push(C)),C.position.x=
(i[P].position.x+w[i[P].line])*r,C.position.y=i[P].position.y*r,C.scale.x=C.scale.y=
r,C.tint=M,C.parent||this.addChild(C)}for(var
R=O;R<this._glyphs.length;++R)this.removeChild(this._glyphs[R]);if(this._textWidth=d
*r,this._textHeight=
(n.y+t.lineHeight)*r,0!==this.anchor.x||0!==this.anchor.y)for(var
A=0;A<O;A++)this._glyphs[A].x-=this._textWidth*this.anchor.x,this._glyphs[A].y-
=this._textHeight*this.anchor.y;this._maxLineHeight=y*r},e.prototype.updateTransform
=function()
{this.validate(),this.containerUpdateTransform()},e.prototype.getLocalBounds=functio
n(){return
this.validate(),t.prototype.getLocalBounds.call(this)},e.prototype.validate=function
(){this.dirty&&(this.updateText(),this.dirty=!1)},e.registerFont=function(t,r){var
n={},i=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")
[0],s=t.getElementsByTagName("page"),a=(0,d.getResolutionOfUrl)
(s[0].getAttribute("file"),p.default.RESOLUTION),u=
{};n.font=i.getAttribute("face"),n.size=parseInt(i.getAttribute("size"),10),n.lineHe
ight=parseInt(o.getAttribute("lineHeight"),10)/a,n.chars={},r instanceof h.Texture&&
(r=[r]);for(var l=0;l<s.length;l++){var
c=s[l].getAttribute("id"),f=s[l].getAttribute("file");u[c]=r instanceof Array?
r[l]:r[f]}for(var v=t.getElementsByTagName("char"),g=0;g<v.length;g++){var
y=v[g],m=parseInt(y.getAttribute("id"),10),_=y.getAttribute("page")||0,b=new
h.Rectangle(parseInt(y.getAttribute("x"),10)/a+u[_].frame.x/a,parseInt(y.getAttribut
5/9/20, 12:55 PM
Page 77 of 181
e("y"),10)/a+u[_].frame.y/a,parseInt(y.getAttribute("width"),10)/a,parseInt(y.getAtt
ribute("height"),10)/a);n.chars[m]=
{xOffset:parseInt(y.getAttribute("xoffset"),10)/a,yOffset:parseInt(y.getAttribute("y
offset"),10)/a,xAdvance:parseInt(y.getAttribute("xadvance"),10)/a,kerning:
{},texture:new h.Texture(u[_].baseTexture,b),page:_}}for(var
x=t.getElementsByTagName("kerning"),T=0;T<x.length;T++){var
w=x[T],E=parseInt(w.getAttribute("first"),10)/a,S=parseInt(w.getAttribute("second"),
10)/a,O=parseInt(w.getAttribute("amount"),10)/a;n.chars[S]&&
(n.chars[S].kerning[E]=O)}return e.fonts[n.font]=n,n},a(e,
[{key:"tint",get:function(){return this._font.tint},set:function(t)
{this._font.tint="number"==typeof t&&t>=0?t:16777215,this.dirty=!0}},
{key:"align",get:function(){return this._font.align},set:function(t)
{this._font.align=t||"left",this.dirty=!0}},{key:"anchor",get:function(){return
this._anchor},set:function(t){"number"==typeof t?
this._anchor.set(t):this._anchor.copy(t)}},{key:"font",get:function(){return
this._font},set:function(t){t&&("string"==typeof t?(t=t.split("
"),this._font.name=1===t.length?t[0]:t.slice(1).join("
"),this._font.size=t.length>=2?parseInt(t[0],10):e.fonts[this._font.name].size):
(this._font.name=t.name,this._font.size="number"==typeof t.size?
t.size:parseInt(t.size,10)),this.dirty=!0)}},{key:"text",get:function(){return
this._text},set:function(t){t=t.toString()||" ",this._text!==t&&
(this._text=t,this.dirty=!0)}},{key:"maxWidth",get:function(){return
this._maxWidth},set:function(t){this._maxWidth!==t&&
(this._maxWidth=t,this.dirty=!0)}},{key:"maxLineHeight",get:function(){return
this.validate(),this._maxLineHeight}},{key:"textWidth",get:function(){return
this.validate(),this._textWidth}},{key:"letterSpacing",get:function(){return
this._letterSpacing},set:function(t){this._letterSpacing!==t&&
(this._letterSpacing=t,this.dirty=!0)}},{key:"textHeight",get:function(){return
this.validate(),this._textHeight}}]),e}(h.Container);r.default=v,v.fonts={}},
{"../core":65,"../core/math/ObservablePoint":68,"../core/settings":101,"../core/util
s":125}],137:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}function i(t,e)
{if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(a),h=t("../core/sprites/canvas/CanvasTinter"),l=function(t){return t&&t.__esModule?
t:{default:t}}(h),c=new u.Point,d=function(t){function e(r){var
o=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:100,s=arguments.length>2&&void 0!==arguments[2]?
arguments[2]:100;n(this,e);var a=i(this,t.call(this,r));return a.tileTransform=new
u.TransformStatic,a._width=o,a._height=s,a._canvasPattern=null,a.uvTransform=r.trans
form||new
u.TextureMatrix(r),a.pluginName="tilingSprite",a.uvRespectAnchor=!1,a}return
o(e,t),e.prototype._onTextureUpdate=function(){this.uvTransform&&
(this.uvTransform.texture=this._texture),this.cachedTint=16777215},e.prototype._rend
erWebGL=function(t){var e=this._texture;e&&e.valid&&
(this.tileTransform.updateLocalTransform(),this.uvTransform.update(),t.setObjectRend
erer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototy
pe._renderCanvas=function(t){var e=this._texture;if(e.baseTexture.hasLoaded){var
r=t.context,n=this.worldTransform,i=t.resolution,o=2===e.rotate,s=e.baseTexture,a=s.
resolution,h=this.tilePosition.x/this.tileScale.x%e.orig.width*a,c=this.tilePosition
5/9/20, 12:55 PM
Page 78 of 181
.y/this.tileScale.y%e.orig.height*a;if(this._textureID!==this._texture._updateID||th
is.cachedTint!==this.tint){this._textureID=this._texture._updateID;var d=new
u.CanvasRenderTarget(e.orig.width,e.orig.height,a);if(16777215!==this.tint)this.tint
edTexture=l.default.getTintedTexture(this,this.tint),d.context.drawImage(this.tinted
Texture,0,0);else{var
f=e._frame.x*a,p=e._frame.y*a,v=e._frame.width*a,g=e._frame.height*a,y=(e.trim?
e.trim.width:e.orig.width)*a,m=(e.trim?e.trim.height:e.orig.height)*a,_=(e.trim?
e.trim.x:0)*a,b=(e.trim?e.trim.y:0)*a;o?(d.context.rotate(-
Math.PI/2),d.context.translate(-m,0),d.context.drawImage(s.source,f,p,v,g,-
b,_,m,y)):d.context.drawImage(s.source,f,p,v,g,_,b,y,m)}this.cachedTint=this.tint,th
is._canvasPattern=d.context.createPattern(d.canvas,"repeat")}r.globalAlpha=this.worl
dAlpha,r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),t.setBlendMode(this.ble
ndMode),r.fillStyle=this._canvasPattern,r.scale(this.tileScale.x/a,this.tileScale.y/
a);var x=this.anchor.x*-this._width*a,T=this.anchor.y*-
this._height*a;this.uvRespectAnchor?(r.translate(h,c),r.fillRect(-h+x,-
c+T,this._width/this.tileScale.x*a,this._height/this.tileScale.y*a)):
(r.translate(h+x,c+T),r.fillRect(-h,-
c,this._width/this.tileScale.x*a,this._height/this.tileScale.y*a))}},e.prototype._ca
lculateBounds=function(){var t=this._width*-this._anchor._x,e=this._height*-
this._anchor._y,r=this._width*(1-this._anchor._x),n=this._height*(1-
this._anchor._y);this._bounds.addFrame(this.transform,t,e,r,n)},e.prototype.getLocal
Bounds=function(e){return 0===this.children.length?(this._bounds.minX=this._width*-
this._anchor._x,
this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-
this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||
(this._localBoundsRect||(this._localBoundsRect=new
u.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getL
ocalBounds.call(this,e)},e.prototype.containsPoint=function(t)
{this.worldTransform.applyInverse(t,c);var e=this._width,r=this._height,n=-
e*this.anchor._x;if(c.x>=n&&c.x<n+e){var i=-
r*this.anchor._y;if(c.y>=i&&c.y<i+r)return!0}return!1},e.prototype.destroy=function(
e)
{t.prototype.destroy.call(this,e),this.tileTransform=null,this.uvTransform=null},e.f
rom=function(t,r,n){return new e(u.Texture.from(t),r,n)},e.fromFrame=function(t,r,n)
{var i=u.utils.TextureCache[t];if(!i)throw new Error('The frameId "'+t+'" does not
exist in the texture cache '+this);return new
e(i,r,n)},e.fromImage=function(t,r,n,i,o){return new
e(u.Texture.fromImage(t,i,o),r,n)},s(e,[{key:"clampMargin",get:function(){return
this.uvTransform.clampMargin},set:function(t)
{this.uvTransform.clampMargin=t,this.uvTransform.update(!0)}},
{key:"tileScale",get:function(){return this.tileTransform.scale},set:function(t)
{this.tileTransform.scale.copy(t)}},{key:"tilePosition",get:function(){return
this.tileTransform.position},set:function(t){this.tileTransform.position.copy(t)}},
{key:"width",get:function(){return this._width},set:function(t){this._width=t}},
{key:"height",get:function(){return this._height},set:function(t)
{this._height=t}}]),e}(u.Sprite);r.default=d},
{"../core":65,"../core/sprites/canvas/CanvasTinter":104}],138:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}var
o=t("../core"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var
r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(o),a=t("../core/textures/Texture"),u=n(a),h=t("../core/textures/BaseTexture"),l=n(h
),c=t("../core/utils"),d=s.DisplayObject,f=new
s.Matrix;d.prototype._cacheAsBitmap=!1,d.prototype._cacheData=!1;var p=function t()
{i(this,t),this.textureCacheId=null,this.originalRenderWebGL=null,this.originalRende
rCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this
.originalUpdateTransform=null,this.originalHitTest=null,this.originalDestroy=null,th
is.originalMask=null,this.originalFilterArea=null,this.sprite=null};Object.definePro
perties(d.prototype,{cacheAsBitmap:{get:function(){return
this._cacheAsBitmap},set:function(t){if(this._cacheAsBitmap!==t)
5/9/20, 12:55 PM
Page 79 of 181
{this._cacheAsBitmap=t;var e=void 0;t?(this._cacheData||(this._cacheData=new
p),e=this._cacheData,e.originalRenderWebGL=this.renderWebGL,e.originalRenderCanvas=t
his.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateB
ounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDe
stroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._m
ask,e.originalFilterArea=this.filterArea,this.renderWebGL=this._renderCachedWebGL,th
is.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):
(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.renderWebGL=e.o
riginalRenderWebGL,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.o
riginalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.o
riginalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.o
riginalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)
}}}}),d.prototype._renderCachedWebGL=function(t)
{!this.visible||this.worldAlpha<=0||!this.renderable||
(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.tra
nsform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sp
rite._renderWebGL(t))},d.prototype._initCachedDisplayObject=function(t)
{if(!this._cacheData||!this._cacheData.sprite){var
e=this.alpha;this.alpha=1,t.currentRenderer.flush();var
r=this.getLocalBounds().clone();if(this._filters&&this._filters.length){var
n=this._filters[0].padding;r.pad(n)}r.ceil(s.settings.RESOLUTION);var
i=t._activeRenderTarget,o=t.filterManager.filterStack,a=s.RenderTexture.create(r.wid
th,r.height),h="cacheAsBitmap_"+(0,c.uid)
();this._cacheData.textureCacheId=h,l.default.addToCache(a.baseTexture,h),u.default.
addToCache(a,h);var d=f;d.tx=-r.x,d.ty=-
r.y,this.transform.worldTransform.identity(),this.renderWebGL=this._cacheData.origin
alRenderWebGL,t.render(this,a,!0,d,!0),t.bindRenderTarget(i),t.filterManager.filterS
tack=o,this.renderWebGL=this._renderCachedWebGL,this.updateTransform=this.displayObj
ectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBou
nds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null;var p=new
s.Sprite(a);p.transform.worldTransform=this.transform.worldTransform,p.anchor.x=-
r.x/r.width,p.anchor.y=-
r.y/r.height,p.alpha=e,p._bounds=this._bounds,this._cacheData.sprite=p,this.transfor
m._parentID=-1,this.parent?this.updateTransform():
(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),thi
s.containsPoint=p.containsPoint.bind(p)}},d.prototype._renderCachedCanvas=function(t
){!this.visible||this.worldAlpha<=0||!this.renderable||
(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.world
Alpha,this._cacheData.sprite._renderCanvas(t))},d.prototype._initCachedDisplayObject
Canvas=function(t){if(!this._cacheData||!this._cacheData.sprite){var
e=this.getLocalBounds(),r=this.alpha;this.alpha=1;var
n=t.context;e.ceil(s.settings.RESOLUTION);var
i=s.RenderTexture.create(e.width,e.height),o="cacheAsBitmap_"+(0,c.uid)
();this._cacheData.textureCacheId=o,l.default.addToCache(i.baseTexture,o),u.default.
addToCache(i,o);var a=f;this.transform.localTransform.copy(a),a.invert(),a.tx-
=e.x,a.ty-
=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,i,!0,a,!1)
,t.context=n,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.di
splayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.get
LocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null;var
h=new
s.Sprite(i);h.transform.worldTransform=this.transform.worldTransform,h.anchor.x=-
e.x/e.width,h.anchor.y=-
e.y/e.height,h.alpha=r,h._bounds=this._bounds,this._cacheData.sprite=h,this.transfor
m._parentID=-1,this.parent?this.updateTransform():
(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),thi
s.containsPoint=h.containsPoint.bind(h)}},d.prototype._calculateCachedBounds=functio
n()
{this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worl
dID,this._cacheData.sprite._calculateBounds(),this._lastBoundsID=this._boundsID},d.p
5/9/20, 12:55 PM
Page 80 of 181
rototype._getCachedLocalBounds=function(){return
this._cacheData.sprite.getLocalBounds()},d.prototype._destroyCachedDisplayObject=fun
ction()
{this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,l.default.r
emoveFromCache(this._cacheData.textureCacheId),u.default.removeFromCache(this._cache
Data.textureCacheId),this._cacheData.textureCacheId=null},d.prototype._cacheAsBitmap
Destroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)}},
{"../core":65,"../core/textures/BaseTexture":112,"../core/textures/Texture":115,"../
core/utils":125}],139:[function(t,e,r){"use strict";var n=t("../core"),i=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(n);i.DisplayObject.prototype.name=null,i.Container.prototype.getChildByName=functio
n(t){for(var e=0;e<this.children.length;e++)if(this.children[e].name===t)return
this.children[e];return null}},{"../core":65}],140:[function(t,e,r){"use strict";var
n=t("../core"),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var
r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(n);i.DisplayObject.prototype.getGlobalPosition=function(){var
t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new
i.Point,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return
this.parent?this.parent.toGlobal(this.position,t,e):
(t.x=this.position.x,t.y=this.position.y),t}},{"../core":65}],141:[function(t,e,r)
{"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}r.__esModule=!0,r.BitmapText=r.TilingSpriteRenderer=r.TilingSprite=r.Ani
matedSprite=void 0;var
i=t("./AnimatedSprite");Object.defineProperty(r,"AnimatedSprite",
{enumerable:!0,get:function(){return n(i).default}});var
o=t("./TilingSprite");Object.defineProperty(r,"TilingSprite",
{enumerable:!0,get:function(){return n(o).default}});var
s=t("./webgl/TilingSpriteRenderer");Object.defineProperty(r,"TilingSpriteRenderer",
{enumerable:!0,get:function(){return n(s).default}});var
a=t("./BitmapText");Object.defineProperty(r,"BitmapText",
{enumerable:!0,get:function(){return
n(a).default}}),t("./cacheAsBitmap"),t("./getChildByName"),t("./getGlobalPosition")}
,
{"./AnimatedSprite":135,"./BitmapText":136,"./TilingSprite":137,"./cacheAsBitmap":13
8,"./getChildByName":139,"./getGlobalPosition":140,"./webgl/TilingSpriteRenderer":14
2}],142:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("../../core"),a=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}(s),u=t("../../core/const"),h=(t("path"),new
a.Matrix),l=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return
o.shader=null,o.simpleShader=null,o.quad=null,o}return
o(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new
a.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3
translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid
main(void)\n{\n gl_Position = vec4((projectionMatrix * translationMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n vTextureCoord = (uTransform *
vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\n\nuniform
sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4
uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n vec2 coord =
mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n coord =
(uMapCoord * vec3(coord, 1.0)).xy;\n coord = clamp(coord, uClampFrame.xy,
5/9/20, 12:55 PM
Page 81 of 181
uClampFrame.zw);\n\n vec4 sample = texture2D(uSampler, coord);\n gl_FragColor
= sample * uColor;\n}\n"),this.simpleShader=new a.Shader(t,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3
uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n gl_Position =
vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0,
1.0);\n\n vTextureCoord = (uTransform * vec3(aTextureCoord,
1.0)).xy;\n}\n","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform
vec4 uColor;\n\nvoid main(void)\n{\n vec4 sample = texture2D(uSampler,
vTextureCoord);\n gl_FragColor = sample *
uColor;\n}\n"),this.renderer.bindVao(null),this.quad=new
a.Quad(t,this.renderer.state.attribState),this.quad.initVao(this.shader)},e.prototyp
e.render=function(t){var e=this.renderer,r=this.quad;e.bindVao(r.vao);var
n=r.vertices;n[0]=n[6]=t._width*-t.anchor.x,n[1]=n[3]=t._height*-
t.anchor.y,n[2]=n[4]=t._width*(1-t.anchor.x),n[5]=n[7]=t._height*(1-
t.anchor.y),t.uvRespectAnchor&&(n=r.uvs,n[0]=n[6]=-t.anchor.x,n[1]=n[3]=-
t.anchor.y,n[2]=n[4]=1-t.anchor.x,n[5]=n[7]=1-t.anchor.y),r.upload();var
i=t._texture,o=i.baseTexture,s=t.tileTransform.localTransform,l=t.uvTransform,c=o.is
PowerOfTwo&&i.frame.width===o.width&&i.frame.height===o.height;c&&
(o._glTextures[e.CONTEXT_UID]?
c=o.wrapMode!==u.WRAP_MODES.CLAMP:o.wrapMode===u.WRAP_MODES.CLAMP&&
(o.wrapMode=u.WRAP_MODES.REPEAT));var d=c?
this.simpleShader:this.shader;e.bindShader(d);var
f=i.width,p=i.height,v=t._width,g=t._height;h.set(s.a*f/v,s.b*f/g,s.c*p/v,s.d*p/g,s.
tx/v,s.ty/g),h.invert(),c?h.prepend(l.mapCoord):
(d.uniforms.uMapCoord=l.mapCoord.toArray(!0),d.uniforms.uClampFrame=l.uClampFrame,d.
uniforms.uClampOffset=l.uClampOffset),d.uniforms.uTransform=h.toArray(!0),d.uniforms
.uColor=a.utils.premultiplyTintToRgba(t.tint,t.worldAlpha,d.uniforms.uColor,o.premul
tipliedAlpha),d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),d.
uniforms.uSampler=e.bindTexture(i),e.setBlendMode(a.utils.correctBlendMode(t.blendMo
de,o.premultipliedAlpha)),r.vao.draw(this.renderer.gl.TRIANGLES,6,0)},e}
(a.ObjectRenderer);r.default=l,a.WebGLRenderer.registerPlugin("tilingSprite",l)},
{"../../core":65,"../../core/const":46,path:8}],143:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function
t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=
(t("path"),function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:1;n(this,e);var o=i(this,t.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform sampler2D
uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n gl_FragColor =
texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n"));return
o.alpha=r,o.glShaderKey="alpha",o}return o(e,t),s(e,[{key:"alpha",get:function()
{return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t}}]),e}
(u.Filter));r.default=h},{"../../core":65,path:8}],144:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
5/9/20, 12:55 PM
Page 82 of 181
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(u),l=t("./BlurXFilter"),c=n(l),d=t("./BlurYFilter"),f=n(d),p=function(t){function
e(r,n,s,a){i(this,e);var u=o(this,t.call(this));return u.blurXFilter=new
c.default(r,n,s,a),u.blurYFilter=new
f.default(r,n,s,a),u.padding=0,u.resolution=s||h.settings.RESOLUTION,u.quality=n||4,
u.blur=r||8,u}return s(e,t),e.prototype.apply=function(t,e,r){var
n=t.getRenderTarget(!0);this.blurXFilter.apply(t,e,n,!0),this.blurYFilter.apply(t,n,
r,!1),t.returnRenderTarget(n)},a(e,[{key:"blur",get:function(){return
this.blurXFilter.blur},set:function(t)
{this.blurXFilter.blur=this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this
.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},
{key:"quality",get:function(){return this.blurXFilter.quality},set:function(t)
{this.blurXFilter.quality=this.blurYFilter.quality=t}},{key:"blurX",get:function()
{return this.blurXFilter.blur},set:function(t)
{this.blurXFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength)
,Math.abs(this.blurYFilter.strength))}},{key:"blurY",get:function(){return
this.blurYFilter.blur},set:function(t)
{this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength)
,Math.abs(this.blurYFilter.strength))}},{key:"blendMode",get:function(){return
this.blurYFilter._blendMode},set:function(t){this.blurYFilter._blendMode=t}}]),e}
(h.Filter);r.default=p},
{"../../core":65,"./BlurXFilter":145,"./BlurYFilter":146}],145:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(u),l=t("./generateBlurVertSource"),c=n(l),d=t("./generateBlurFragSource"),f=n(d),p=
t("./getMaxBlurKernelSize"),v=n(p),g=function(t){function e(r,n,s,a)
{i(this,e),a=a||5;var u=(0,c.default)(a,!0),l=(0,f.default)
(a),d=o(this,t.call(this,u,l));return
d.resolution=s||h.settings.RESOLUTION,d._quality=0,d.quality=n||4,d.strength=r||8,d.
firstRun=!0,d}return s(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun)
{var i=t.renderer.gl,o=(0,v.default)(i);this.vertexSrc=(0,c.default)
(o,!0),this.fragmentSrc=(0,f.default)
(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.width*
(r.size.width/e.size.width),this.uniforms.strength*=this.strength,this.uniforms.stre
ngth/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var
s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++)
{t.applyFilter(this,a,u,!0);var
5/9/20, 12:55 PM
Page 83 of 181
l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},a(e,
[{key:"blur",get:function(){return this.strength},set:function(t)
{this.padding=2*Math.abs(t),this.strength=t}},{key:"quality",get:function(){return
this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}
(h.Filter);r.default=g},
{"../../core":65,"./generateBlurFragSource":147,"./generateBlurVertSource":148,"./ge
tMaxBlurKernelSize":149}],146:[function(t,e,r){"use strict";function n(t){return
t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(u),l=t("./generateBlurVertSource"),c=n(l),d=t("./generateBlurFragSource"),f=n(d),p=
t("./getMaxBlurKernelSize"),v=n(p),g=function(t){function e(r,n,s,a)
{i(this,e),a=a||5;var u=(0,c.default)(a,!1),l=(0,f.default)
(a),d=o(this,t.call(this,u,l));return
d.resolution=s||h.settings.RESOLUTION,d._quality=0,d.quality=n||4,d.strength=r||8,d.
firstRun=!0,d}return s(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun)
{var i=t.renderer.gl,o=(0,v.default)(i);this.vertexSrc=(0,c.default)
(o,!1),this.fragmentSrc=(0,f.default)
(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.height*
(r.size.height/e.size.height),this.uniforms.strength*=this.strength,this.uniforms.st
rength/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var
s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++)
{t.applyFilter(this,a,u,!0);var
l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},a(e,
[{key:"blur",get:function(){return this.strength},set:function(t)
{this.padding=2*Math.abs(t),this.strength=t}},{key:"quality",get:function(){return
this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}
(h.Filter);r.default=g},
{"../../core":65,"./generateBlurFragSource":147,"./generateBlurVertSource":148,"./ge
tMaxBlurKernelSize":149}],147:[function(t,e,r){"use strict";function n(t){for(var
e=i[t],r=e.length,n=o,s="",a="gl_FragColor += texture2D(uSampler,
vBlurTexCoords[%index%]) * %value%;",u=void 0,h=0;h<t;h++){var
l=a.replace("%index%",h);u=h,h>=r&&(u=t-h1),l=l.replace("%value%",e[u]),s+=l,s+="\n"}return
n=n.replace("%blur%",s),n=n.replace("%size%",t)}r.__esModule=!0,r.default=n;var i=
{5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:
[.028532,.067234,.124009,.179044,.20236],11:
[.0093,.028002,.065984,.121703,.175713,.198596],13:
[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},o=["varying vec2
vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","
gl_FragColor = vec4(0.0);"," %blur%","}"].join("\n")},{}],148:[function(t,e,r)
{"use strict";function n(t,e){var r=Math.ceil(t/2),n=i,o="",s=void
0;s=e?"vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength,
0.0);":"vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% *
strength);";for(var a=0;a<t;a++){var
u=s.replace("%index%",a);u=u.replace("%sampleIndex%",a-(r1)+".0"),o+=u,o+="\n"}return
n=n.replace("%blur%",o),n=n.replace("%size%",t)}r.__esModule=!0,r.default=n;var i=
5/9/20, 12:55 PM
Page 84 of 181
["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform float
strength;","uniform mat3 projectionMatrix;","varying vec2
vBlurTexCoords[%size%];","void main(void)","{","gl_Position = vec4((projectionMatrix
* vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);","%blur%","}"].join("\n")},{}],149:
[function(t,e,r){"use strict";function n(t){for(var
e=t.getParameter(t.MAX_VARYING_VECTORS),r=15;r>e;)r-=2;return
r}r.__esModule=!0,r.default=n},{}],150:[function(t,e,r){"use strict";function n(t,e)
{if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been
initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function
t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=
(t("path"),function(t){function e(){n(this,e);var r=i(this,t.call(this,"attribute
vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n
vec4 c = texture2D(uSampler, vTextureCoord);\n\n if (uAlpha == 0.0) {\n
gl_FragColor = c;\n return;\n }\n\n // Un-premultiply alpha before
applying the color matrix. See issue #3539.\n if (c.a > 0.0) {\n c.rgb /=
c.a;\n }\n\n vec4 result;\n\n result.r = (m[0] * c.r);\n result.r +=
(m[1] * c.g);\n result.r += (m[2] * c.b);\n result.r += (m[3] *
c.a);\n result.r += m[4];\n\n result.g = (m[5] * c.r);\n result.g
+= (m[6] * c.g);\n result.g += (m[7] * c.b);\n result.g += (m[8] *
c.a);\n result.g += m[9];\n\n result.b = (m[10] * c.r);\n result.b
+= (m[11] * c.g);\n result.b += (m[12] * c.b);\n result.b += (m[13] *
c.a);\n result.b += m[14];\n\n result.a = (m[15] * c.r);\n result.a
+= (m[16] * c.g);\n result.a += (m[17] * c.b);\n result.a += (m[18] *
c.a);\n result.a += m[19];\n\n vec3 rgb = mix(c.rgb, result.rgb,
uAlpha);\n\n // Premultiply alpha again.\n rgb *= result.a;\n\n
gl_FragColor = vec4(rgb, result.a);\n}\n"));return r.uniforms.m=
[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],r.alpha=1,r}return
o(e,t),e.prototype._loadMatrix=function(t){var e=arguments.length>1&&void
0!==arguments[1]&&arguments[1],r=t;e&&
(this._multiply(r,this.uniforms.m,t),r=this._colorMatrix(r)),this.uniforms.m=r},e.pr
ototype._multiply=function(t,e,r){return
t[0]=e[0]*r[0]+e[1]*r[5]+e[2]*r[10]+e[3]*r[15],t[1]=e[0]*r[1]+e[1]*r[6]+e[2]*r[11]+e
[3]*r[16],t[2]=e[0]*r[2]+e[1]*r[7]+e[2]*r[12]+e[3]*r[17],t[3]=e[0]*r[3]+e[1]*r[8]+e[
2]*r[13]+e[3]*r[18],t[4]=e[0]*r[4]+e[1]*r[9]+e[2]*r[14]+e[3]*r[19]+e[4],t[5]=e[5]*r[
0]+e[6]*r[5]+e[7]*r[10]+e[8]*r[15],t[6]=e[5]*r[1]+e[6]*r[6]+e[7]*r[11]+e[8]*r[16],t[
7]=e[5]*r[2]+e[6]*r[7]+e[7]*r[12]+e[8]*r[17],t[8]=e[5]*r[3]+e[6]*r[8]+e[7]*r[13]+e[8
]*r[18],t[9]=e[5]*r[4]+e[6]*r[9]+e[7]*r[14]+e[8]*r[19]+e[9],t[10]=e[10]*r[0]+e[11]*r
[5]+e[12]*r[10]+e[13]*r[15],t[11]=e[10]*r[1]+e[11]*r[6]+e[12]*r[11]+e[13]*r[16],t[12
]=e[10]*r[2]+e[11]*r[7]+e[12]*r[12]+e[13]*r[17],t[13]=e[10]*r[3]+e[11]*r[8]+e[12]*r[
13]+e[13]*r[18],t[14]=e[10]*r[4]+e[11]*r[9]+e[12]*r[14]+e[13]*r[19]+e[14],t[15]=e[15
]*r[0]+e[16]*r[5]+e[17]*r[10]+e[18]*r[15],t[16]=e[15]*r[1]+e[16]*r[6]+e[17]*r[11]+e[
18]*r[16],t[17]=e[15]*r[2]+e[16]*r[7]+e[17]*r[12]+e[18]*r[17],t[18]=e[15]*r[3]+e[16]
*r[8]+e[17]*r[13]+e[18]*r[18],t[19]=e[15]*r[4]+e[16]*r[9]+e[17]*r[14]+e[18]*r[19]+e[
19],t},e.prototype._colorMatrix=function(t){var e=new Float32Array(t);return
e[4]/=255,e[9]/=255,e[14]/=255,e[19]/=255,e},e.prototype.brightness=function(t,e)
5/9/20, 12:55 PM
Page 85 of 181
{var r=
[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.greysca
le=function(t,e){var r=
[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.blackAn
dWhite=function(t){var e=
[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototyp
e.hue=function(t,e){t=(t||0)/180*Math.PI;var
r=Math.cos(t),n=Math.sin(t),i=Math.sqrt,o=1/3,s=i(o),a=r+(1-r)*o,u=o*(1-r)-s*n,h=o*
(1-r)+s*n,l=o*(1-r)+s*n,c=r+o*(1-r),d=o*(1-r)-s*n,f=o*(1-r)-s*n,p=o*(1-r)+s*n,v=r+o*
(1-r),g=
[a,u,h,0,0,l,c,d,0,0,f,p,v,0,0,0,0,0,1,0];this._loadMatrix(g,e)},e.prototype.contras
t=function(t,e){var r=(t||0)+1,n=-.5*(r-1),i=
[r,0,0,0,n,0,r,0,0,n,0,0,r,0,n,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.saturat
e=function(){var t=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:0,e=arguments[1],r=2*t/3+1,n=-.5*(r-1),i=
[r,n,n,0,0,n,r,n,0,0,n,n,r,0,0,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.desatur
ate=function(){this.saturate(-1)},e.prototype.negative=function(t){var e=
[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.sepi
a=function(t){var e=
[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0
,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.technicolor=function(t){var e=
[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.30
87833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.2311033
77548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._
loadMatrix(e,t)},e.prototype.polaroid=function(t){var e=
[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._
loadMatrix(e,t)},e.prototype.toBGR=function(t){var e=
[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.kodachr
ome=function(t){var e=
[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.164
04339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.1678601
0706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this
._loadMatrix(e,t)},e.prototype.browni=function(t){var e=
[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.03770
3249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128
153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._
loadMatrix(e,t)},e.prototype.vintage=function(t){var e=
[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.025783
97704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.04660555567827
19,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMat
rix(e,t)},e.prototype.colorTone=function(t,e,r,n,i)
{t=t||.2,e=e||.15,r=r||16770432,n=n||3375104;var o=(r>>16&255)/255,s=
(r>>8&255)/255,a=(255&r)/255,u=(n>>16&255)/255,h=(n>>8&255)/255,l=(255&n)/255,c=
[.3,.59,.11,0,0,o,s,a,t,0,u,h,l,e,0,o-u,s-h,al,0,0];this._loadMatrix(c,i)},e.prototype.night=function(t,e){t=t||.1;var r=[-2*t,-
t,0,0,0,-
t,0,t,0,0,0,t,2*t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.predator=functio
n(t,e){var r=
[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977
783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.31613504
8866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.80444
59223747253*t,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.lsd=function(t){var e=
[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.protot
ype.reset=function(){var t=
[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},s(e,
[{key:"matrix",get:function(){return this.uniforms.m},set:function(t)
{this.uniforms.m=t}},{key:"alpha",get:function(){return this.uniforms.uAlpha},
set:function(t){this.uniforms.uAlpha=t}}]),e}
(u.Filter));r.default=h,h.prototype.grayscale=h.prototype.greyscale},
{"../../core":65,path:8}],151:[function(t,e,r){"use strict";function n(t,e){if(!(t
5/9/20, 12:55 PM
Page 86 of 181
instanceof e))throw new TypeError("Cannot call a class as a function")}function
i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=
(t("path"),function(t){function e(r,o){n(this,e);var s=new
u.Matrix;r.renderable=!1;var a=i(this,t.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2
vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n gl_Position =
vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vFilterCoord
= ( filterMatrix * vec3( aTextureCoord, 1.0) ).xy;\n vTextureCoord =
aTextureCoord;\n}","varying vec2 vFilterCoord;\nvarying vec2
vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform
sampler2D mapSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nvoid
main(void)\n{\n vec4 map = texture2D(mapSampler, vFilterCoord);\n\n map -= 0.5;\n
map.xy *= scale / filterArea.xy;\n\n gl_FragColor = texture2D(uSampler,
clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy,
filterClamp.zw));\n}\n"));return
a.maskSprite=r,a.maskMatrix=s,a.uniforms.mapSampler=r._texture,a.uniforms.filterMatr
ix=s,a.uniforms.scale={x:1,y:1},null!==o&&void 0!==o||(o=20),a.scale=new
u.Point(o,o),a}return o(e,t),e.prototype.apply=function(t,e,r)
{this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite)
,this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y,t.applyFilter
(this,e,r)},s(e,[{key:"map",get:function(){return
this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t}}]),e}
(u.Filter));r.default=h},{"../../core":65,path:8}],152:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("../../core"),a=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}(s),u=(t("path"),function(t){function e(){return
n(this,e),i(this,t.call(this,"\nattribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying
vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2
v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord(
vec2 coord )\n{\n coord *= filterArea.xy;\n coord += filterArea.zw;\n\n
return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n coord -= filterArea.zw;\n
coord /= filterArea.xy;\n\n return coord;\n}\n\nvoid texcoords(vec2 fragCoord,
vec2 resolution,\n out vec2 v_rgbNW, out vec2 v_rgbNE,\n
out vec2 v_rgbSW, out vec2 v_rgbSE,\n out vec2 v_rgbM) {\n vec2
inverseVP = 1.0 / resolution.xy;\n v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) *
inverseVP;\n v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n v_rgbSW =
(fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n v_rgbSE = (fragCoord + vec2(1.0,
1.0)) * inverseVP;\n v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void)
{\n\n gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0,
5/9/20, 12:55 PM
Page 87 of 181
1.0);\n\n vTextureCoord = aTextureCoord;\n\n vec2 fragCoord = vTextureCoord *
filterArea.xy;\n\n texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW,
v_rgbSE, v_rgbM);\n}",'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2
v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2
vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic
FXAA implementation based on the code on geeks3d.com with the\n modification that
the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n
From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by
Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and
binary forms, with or without\n modification, are permitted provided that the
following conditions are\n met:\n \n * Redistributions of source code must retain
the above copyright\n notice, this list of conditions and the following
disclaimer.\n \n * Redistributions in binary form must reproduce the above\n
copyright notice, this list of conditions and the following\n disclaimer in the
documentation and/or other materials provided\n with the distribution.\n \n * The
names of the contributors may not be used to endorse or\n promote products derived
from this software without specific\n prior written permission.\n \n THIS SOFTWARE
IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN
(1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL (1.0 /
8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX
8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can
be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n
vec2 v_rgbNW, vec2 v_rgbNE,\n vec2 v_rgbSW, vec2 v_rgbSE,\n vec2
v_rgbM) {\n vec4 color;\n mediump vec2 inverseVP = vec2(1.0 / resolution.x,
1.0 / resolution.y);\n vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n vec3 rgbNE
= texture2D(tex, v_rgbNE).xyz;\n vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n
vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n vec4 texColor = texture2D(tex,
v_rgbM);\n vec3 rgbM = texColor.xyz;\n vec3 luma = vec3(0.299, 0.587,
0.114);\n float lumaNW = dot(rgbNW, luma);\n float lumaNE = dot(rgbNE,
luma);\n float lumaSW = dot(rgbSW, luma);\n float lumaSE = dot(rgbSE, luma);\n
float lumaM = dot(rgbM, luma);\n float lumaMin = min(lumaM, min(min(lumaNW,
lumaNE), min(lumaSW, lumaSE)));\n float lumaMax = max(lumaM, max(max(lumaNW,
lumaNE), max(lumaSW, lumaSE)));\n \n mediump vec2 dir;\n dir.x = -((lumaNW
+ lumaNE) - (lumaSW + lumaSE));\n dir.y = ((lumaNW + lumaSW) - (lumaNE +
lumaSE));\n \n float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n
(0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n \n float rcpDirMin = 1.0 /
(min(abs(dir.x), abs(dir.y)) + dirReduce);\n dir = min(vec2(FXAA_SPAN_MAX,
FXAA_SPAN_MAX),\n max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n
dir * rcpDirMin)) * inverseVP;\n \n vec3 rgbA = 0.5 * (\n
texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n
texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n vec3 rgbB
= rgbA * 0.5 + 0.25 * (\n texture2D(tex,
fragCoord * inverseVP + dir * -0.5).xyz +\n
texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n \n float lumaB =
dot(rgbB, luma);\n if ((lumaB < lumaMin) || (lumaB > lumaMax))\n color =
vec4(rgbA, texColor.a);\n else\n color = vec4(rgbB, texColor.a);\n
return color;\n}\n\nvoid main() {\n\n vec2 fragCoord = vTextureCoord *
filterArea.xy;\n\n vec4 color;\n\n color = fxaa(uSampler, fragCoord,
filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n gl_FragColor =
color;\n}\n'))}return o(e,t),e}(a.Filter));r.default=u},
{"../../core":65,path:8}],153:[function(t,e,r){"use strict";function n(t){return
5/9/20, 12:55 PM
Page 88 of 181
t&&t.__esModule?t:{default:t}}r.__esModule=!0;var
i=t("./fxaa/FXAAFilter");Object.defineProperty(r,"FXAAFilter",
{enumerable:!0,get:function(){return n(i).default}});var
o=t("./noise/NoiseFilter");Object.defineProperty(r,"NoiseFilter",
{enumerable:!0,get:function(){return n(o).default}});var
s=t("./displacement/DisplacementFilter");Object.defineProperty(r,"DisplacementFilter
",{enumerable:!0,get:function(){return n(s).default}});var
a=t("./blur/BlurFilter");Object.defineProperty(r,"BlurFilter",
{enumerable:!0,get:function(){return n(a).default}});var
u=t("./blur/BlurXFilter");Object.defineProperty(r,"BlurXFilter",
{enumerable:!0,get:function(){return n(u).default}});var
h=t("./blur/BlurYFilter");Object.defineProperty(r,"BlurYFilter",
{enumerable:!0,get:function(){return n(h).default}});var
l=t("./colormatrix/ColorMatrixFilter");Object.defineProperty(r,"ColorMatrixFilter",
{enumerable:!0,get:function(){return n(l).default}});var
c=t("./alpha/AlphaFilter");Object.defineProperty(r,"AlphaFilter",
{enumerable:!0,get:function(){return n(c).default}})},
{"./alpha/AlphaFilter":143,"./blur/BlurFilter":144,"./blur/BlurXFilter":145,"./blur/
BlurYFilter":146,"./colormatrix/ColorMatrixFilter":150,"./displacement/DisplacementF
ilter":151,"./fxaa/FXAAFilter":152,"./noise/NoiseFilter":154}],154:[function(t,e,r)
{"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call
a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function
t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=
(t("path"),function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?
arguments[0]:.5,o=arguments.length>1&&void 0!==arguments[1]?
arguments[1]:Math.random();n(this,e);var s=i(this,t.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","precision highp float;\n\nvarying vec2
vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float
uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n return
fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n
vec4 color = texture2D(uSampler, vTextureCoord);\n float randomValue =
rand(gl_FragCoord.xy * uSeed);\n float diff = (randomValue - 0.5) * uNoise;\n\n
// Un-premultiply alpha before applying the color matrix. See issue #3539.\n if
(color.a > 0.0) {\n color.rgb /= color.a;\n }\n\n color.r += diff;\n
color.g += diff;\n color.b += diff;\n\n // Premultiply alpha again.\n
color.rgb *= color.a;\n\n gl_FragColor = color;\n}\n"));return
s.noise=r,s.seed=o,s}return o(e,t),s(e,[{key:"noise",get:function(){return
this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t}},
{key:"seed",get:function(){return this.uniforms.uSeed},set:function(t)
{this.uniforms.uSeed=t}}]),e}(u.Filter));r.default=h},{"../../core":65,path:8}],155:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function()
{function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../core"),s=function(t)
5/9/20, 12:55 PM
Page 89 of 181
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(o),a=function(){function t(){n(this,t),this.global=new
s.Point,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary
=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=
0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tange
ntialPressure=0}return t.prototype.getLocalPosition=function(t,e,r){return
t.worldTransform.applyInverse(r||this.global,e)},t.prototype.copyEvent=function(t)
{t.isPrimary&&
(this.isPrimary=!0),this.button=t.button,this.buttons=Number.isInteger(t.buttons)?
t.buttons:t.which,this.width=t.width,this.height=t.height,this.tiltX=t.tiltX,this.ti
ltY=t.tiltY,this.pointerType=t.pointerType,this.pressure=t.pressure,this.rotationAng
le=t.rotationAngle,this.twist=t.twist||0,this.tangentialPressure=t.tangentialPressur
e||0},t.prototype.reset=function(){this.isPrimary=!1},i(t,
[{key:"pointerId",get:function(){return this.identifier}}]),t}();r.default=a},
{"../core":65}],156:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof
e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var
i=function(){function t()
{n(this,t),this.stopped=!1,this.target=null,this.currentTarget=null,this.type=null,t
his.data=null}return t.prototype.stopPropagation=function()
{this.stopped=!0},t.prototype.reset=function()
{this.stopped=!1,this.currentTarget=null,this.target=null},t}();r.default=i},
{}],157:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a="function"==typeof
Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t)
{return t&&"function"==typeof
Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof
t},u=t("../core"),h=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}
(u),l=t("./InteractionData"),c=n(l),d=t("./InteractionEvent"),f=n(d),p=t("./Interact
ionTrackingData"),v=n(p),g=t("eventemitter3"),y=n(g),m=t("./interactiveTarget"),_=n(
m);h.utils.mixins.delayMixin(h.DisplayObject.prototype,_.default);var b=1,x=
{target:null,data:{global:null}},T=function(t){function e(r,n){i(this,e);var
s=o(this,t.call(this));return n=n||{},s.renderer=r,s.autoPreventDefault=void
0===n.autoPreventDefault||n.autoPreventDefault,s.interactionFrequency=n.interactionF
requency||10,s.mouse=new
c.default,s.mouse.identifier=b,s.mouse.global.set(-999999),s.activeInteractionData=
{},s.activeInteractionData[b]=s.mouse,s.interactionDataPool=[],s.eventData=new
f.default,s.interactionDOMElement=null,s.moveWhenInside=!1,s.eventsAdded=!1,s.mouseO
verRenderer=!1,s.supportsTouchEvents="ontouchstart"in
window,s.supportsPointerEvents=!!window.PointerEvent,s.onPointerUp=s.onPointerUp.bin
d(s),s.processPointerUp=s.processPointerUp.bind(s),s.onPointerCancel=s.onPointerCanc
el.bind(s),s.processPointerCancel=s.processPointerCancel.bind(s),s.onPointerDown=s.o
nPointerDown.bind(s),s.processPointerDown=s.processPointerDown.bind(s),s.onPointerMo
ve=s.onPointerMove.bind(s),s.processPointerMove=s.processPointerMove.bind(s),s.onPoi
nterOut=s.onPointerOut.bind(s),s.processPointerOverOut=s.processPointerOverOut.bind(
s),s.onPointerOver=s.onPointerOver.bind(s),s.cursorStyles=
{default:"inherit",pointer:"pointer"},s.currentCursorMode=null,s.cursor=null,s._temp
Point=new
h.Point,s.resolution=1,s.setTargetElement(s.renderer.view,s.renderer.resolution),s}r
eturn s(e,t),e.prototype.hitTest=function(t,e){return
x.target=null,x.data.global=t,e||
5/9/20, 12:55 PM
Page 90 of 181
(e=this.renderer._lastObjectRendered),this.processInteractive(x,e,null,!0),x.target}
,e.prototype.setTargetElement=function(t){var e=arguments.length>1&&void
0!==arguments[1]?
arguments[1]:1;this.removeEvents(),this.interactionDOMElement=t,this.resolution=e,th
is.addEvents()},e.prototype.addEvents=function(){this.interactionDOMElement&&
(h.ticker.shared.add(this.update,this,h.UPDATE_PRIORITY.INTERACTION),window.navigato
r.msPointerEnabled?(this.interactionDOMElement.style["-ms-contentzooming"]="none",this.interactionDOMElement.style["-ms-touchaction"]="none"):this.supportsPointerEvents&&
(this.interactionDOMElement.style["touchaction"]="none"),this.supportsPointerEvents?
(window.document.addEventListener("pointermove",this.onPointerMove,!0),this.interact
ionDOMElement.addEventListener("pointerdown",this.onPointerDown,!0),this.interaction
DOMElement.addEventListener("pointerleave",this.onPointerOut,!0),this.interactionDOM
Element.addEventListener("pointerover",this.onPointerOver,!0),window.addEventListene
r("pointercancel",this.onPointerCancel,!0),window.addEventListener("pointerup",this.
onPointerUp,!0)):
(window.document.addEventListener("mousemove",this.onPointerMove,!0),this.interactio
nDOMElement.addEventListener("mousedown",this.onPointerDown,!0),this.interactionDOME
lement.addEventListener("mouseout",this.onPointerOut,!0),this.interactionDOMElement.
addEventListener("mouseover",this.onPointerOver,!0),window.addEventListener("mouseup
",this.onPointerUp,!0)),this.supportsTouchEvents&&
(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,!0),thi
s.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,!0),this
.interactionDOMElement.addEventListener("touchend",this.onPointerUp,!0),this.interac
tionDOMElement.addEventListener("touchmove",this.onPointerMove,!0)),this.eventsAdded
=!0)},e.prototype.removeEvents=function(){this.interactionDOMElement&&
(h.ticker.shared.remove(this.update,this),window.navigator.msPointerEnabled?
(this.interactionDOMElement.style["-ms-contentzooming"]="",this.interactionDOMElement.style["-ms-touchaction"]=""):this.supportsPointerEvents&&(this.interactionDOMElement.style["touchaction"]=""),this.supportsPointerEvents?
(window.document.removeEventListener("pointermove",this.onPointerMove,!0),this.inter
actionDOMElement.removeEventListener("pointerdown",this.onPointerDown,!0),this.inter
actionDOMElement.removeEventListener("pointerleave",this.onPointerOut,!0),this.inter
actionDOMElement.removeEventListener("pointerover",this.onPointerOver,!0),window.rem
oveEventListener("pointercancel",this.onPointerCancel,!0),window.removeEventListener
("pointerup",this.onPointerUp,!0)):
(window.document.removeEventListener("mousemove",this.onPointerMove,!0),this.interac
tionDOMElement.removeEventListener("mousedown",this.onPointerDown,!0),this.interacti
onDOMElement.removeEventListener("mouseout",this.onPointerOut,!0),this.interactionDO
MElement.removeEventListener("mouseover",this.onPointerOver,!0),window.removeEventLi
stener("mouseup",this.onPointerUp,!0)),this.supportsTouchEvents&&
(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,!0),
this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,!0
),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,!0),thi
s.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,!0)),this
.interactionDOMElement=null,this.eventsAdded=!1)},e.prototype.update=function(t)
{if(this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&
(this._deltaTime=0,this.interactionDOMElement)){if(this.didMove)return
void(this.didMove=!1);this.cursor=null;for(var e in
this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(e)){var
r=this.activeInteractionData[e];if(r.originalEvent&&"touch"!==r.pointerType){var
n=this.configureInteractionEventForDOMEvent(this.eventData,r.originalEvent,r);this.p
rocessInteractive(n,this.renderer._lastObjectRendered,this.processPointerOverOut,!0)
}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t)
{if(t=t||"default",this.currentCursorMode!==t){this.currentCursorMode=t;var
e=this.cursorStyles[t];if(e)switch(void 0===e?"undefined":a(e))
{case"string":this.interactionDOMElement.style.cursor=e;break;case"function":e(t);br
eak;case"object":Object.assign(this.interactionDOMElement.style,e)}else"string"!=typ
5/9/20, 12:55 PM
Page 91 of 181
eof t||Object.prototype.hasOwnProperty.call(this.cursorStyles,t)||
(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,e
,r){r.stopped||(r.currentTarget=t,r.type=e,t.emit(e,r),t[e]&&t[e]
(r))},e.prototype.mapPositionToPoint=function(t,e,r){var n=void
0;n=this.interactionDOMElement.parentElement?
this.interactionDOMElement.getBoundingClientRect():{x:0,y:0,width:0,height:0};var
i=navigator.isCocoonJS?this.resolution:1/this.resolution;t.x=(e-n.left)*
(this.interactionDOMElement.width/n.width)*i,t.y=(r-n.top)*
(this.interactionDOMElement.height/n.height)*i},e.prototype.processInteractive=funct
ion(t,e,r,n,i){if(!e||!e.visible)return!1;var o=t.data.global;i=e.interactive||i;var
s=!1,a=i,u=!0;if(e.hitArea?(n&&
(e.worldTransform.applyInverse(o,this._tempPoint),e.hitArea.contains(this._tempPoint
.x,this._tempPoint.y)?s=!0:(n=!1,u=!1)),a=!1):e._mask&&n&&
(e._mask.containsPoint(o)||(n=!1,u=!1)),u&&e.interactiveChildren&&e.children)for(var
h=e.children,l=h.length-1;l>=0;l--){var
c=h[l],d=this.processInteractive(t,c,r,n,a);if(d){if(!c.parent)continue;a=!1,d&&
(t.target&&(n=!1),s=!0)}}return i&&
(n&&!t.target&&!e.hitArea&&e.containsPoint&&e.containsPoint(o)&&
(s=!0),e.interactive&&(s&&!t.target&&
(t.target=e),r&&r(t,e,!!s))),s},e.prototype.onPointerDown=function(t)
{if(!this.supportsTouchEvents||"touch"!==t.pointerType){var
e=this.normalizeToPointerData(t);this.autoPreventDefault&&e[0].isNormalized&&t.preve
ntDefault();for(var r=e.length,n=0;n<r;n++){var
i=e[n],o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForD
OMEvent(this.eventData,i,o);if(s.data.originalEvent=t,this.processInteractive(s,this
.renderer._lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",s)
,"touch"===i.pointerType)this.emit("touchstart",s);else
if("mouse"===i.pointerType||"pen"===i.pointerType){var
a=2===i.button;this.emit(a?"rightdown":"mousedown",this.eventData)}}}},e.prototype.p
rocessPointerDown=function(t,e,r){var
n=t.data,i=t.data.identifier;if(r)if(e.trackedPointers[i]||(e.trackedPointers[i]=new
v.default(i)),this.dispatchEvent(e,"pointerdown",t),"touch"===n.pointerType)this.dis
patchEvent(e,"touchstart",t);else if("mouse"===n.pointerType||"pen"===n.pointerType)
{var o=2===n.button;o?
e.trackedPointers[i].rightDown=!0:e.trackedPointers[i].leftDown=!0,this.dispatchEven
t(e,o?"rightdown":"mousedown",t)}},e.prototype.onPointerComplete=function(t,e,r)
{for(var
n=this.normalizeToPointerData(t),i=n.length,o=t.target!==this.interactionDOMElement?
"outside":"",s=0;s<i;s++){var
a=n[s],u=this.getInteractionDataForPointerId(a),h=this.configureInteractionEventForD
OMEvent(this.eventData,a,u);if(h.data.originalEvent=t,this.processInteractive(h,this
.renderer._lastObjectRendered,r,e||!o),this.emit(e?"pointercancel":"pointerup"+o,h),
"mouse"===a.pointerType||"pen"===a.pointerType){var
l=2===a.button;this.emit(l?"rightup"+o:"mouseup"+o,h)}else"touch"===a.pointerType&&
(this.emit(e?"touchcancel":"touchend"+o,h),this.releaseInteractionDataForPointerId(a
.pointerId,u))}},e.prototype.onPointerCancel=function(t)
{this.supportsTouchEvents&&"touch"===t.pointerType||this.onPointerComplete(t,!0,this
.processPointerCancel)},e.prototype.processPointerCancel=function(t,e){var
r=t.data,n=t.data.identifier;void 0!==e.trackedPointers[n]&&(delete
e.trackedPointers[n],this.dispatchEvent(e,"pointercancel",t),"touch"===r.pointerType
&&this.dispatchEvent(e,"touchcancel",t))},e.prototype.onPointerUp=function(t)
{this.supportsTouchEvents&&"touch"===t.pointerType||this.onPointerComplete(t,!1,this
.processPointerUp)},e.prototype.processPointerUp=function(t,e,r){var
n=t.data,i=t.data.identifier,o=e.trackedPointers[i],s="touch"===n.pointerType,a="mou
se"===n.pointerType||"pen"===n.pointerType,u=!1;if(a){var
h=2===n.button,l=v.default.FLAGS,c=h?l.RIGHT_DOWN:l.LEFT_DOWN,d=void
0!==o&&o.flags&c;r?(this.dispatchEvent(e,h?"rightup":"mouseup",t),d&&
(this.dispatchEvent(e,h?"rightclick":"click",t),u=!0)):d&&this.dispatchEvent(e,h?"ri
ghtupoutside":"mouseupoutside",t),o&&(h?o.rightDown=!1:o.leftDown=!1)}r?
(this.dispatchEvent(e,"pointerup",t),s&&this.dispatchEvent(e,"touchend",t),o&&
5/9/20, 12:55 PM
Page 92 of 181
(a&&!u||this.dispatchEvent(e,"pointertap",t),s&&
(this.dispatchEvent(e,"tap",t),o.over=!1))):o&&
(this.dispatchEvent(e,"pointerupoutside",t),s&&this.dispatchEvent(e,"touchendoutside
",t)),o&&o.none&&delete e.trackedPointers[i]},e.prototype.onPointerMove=function(t)
{if(!this.supportsTouchEvents||"touch"!==t.pointerType){var
e=this.normalizeToPointerData(t);"mouse"!==e[0].pointerType&&"pen"!==e[0].pointerTyp
e||(this.didMove=!0,this.cursor=null);for(var r=e.length,n=0;n<r;n++){var
i=e[n],o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForD
OMEvent(this.eventData,i,o);s.data.originalEvent=t;var
a="touch"!==i.pointerType||this.moveWhenInside;this.processInteractive(s,this.render
er._lastObjectRendered,this.processPointerMove,a),this.emit("pointermove",s),"touch"
===i.pointerType&&this.emit("touchmove",s),"mouse"!==i.pointerType&&"pen"!==i.pointe
rType||this.emit("mousemove",s)}"mouse"===e[0].pointerType&&this.setCursorMode(this.
cursor)}},e.prototype.processPointerMove=function(t,e,r){var
n=t.data,i="touch"===n.pointerType,o="mouse"===n.pointerType||"pen"===n.pointerType;
o&&this.processPointerOverOut(t,e,r),this.moveWhenInside&&!r||
(this.dispatchEvent(e,"pointermove",t),i&&this.dispatchEvent(e,"touchmove",t),o&&thi
s.dispatchEvent(e,"mousemove",t))},e.prototype.onPointerOut=function(t)
{if(!this.supportsTouchEvents||"touch"!==t.pointerType){var
e=this.normalizeToPointerData(t),r=e[0];"mouse"===r.pointerType&&
(this.mouseOverRenderer=!1,this.setCursorMode(null));var
n=this.getInteractionDataForPointerId(r),i=this.configureInteractionEventForDOMEvent
(this.eventData,r,n);i.data.originalEvent=r,this.processInteractive(i,this.renderer.
_lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",i),"mouse"
===r.pointerType||"pen"===r.pointerType?
this.emit("mouseout",i):this.releaseInteractionDataForPointerId(n.identifier)}},e.pr
ototype.processPointerOverOut=function(t,e,r){var
n=t.data,i=t.data.identifier,o="mouse"===n.pointerType||"pen"===n.pointerType,s=e.tr
ackedPointers[i];r&&!s&&(s=e.trackedPointers[i]=new v.default(i)),void 0!==s&&
(r&&this.mouseOverRenderer?(s.over||
(s.over=!0,this.dispatchEvent(e,"pointerover",t),o&&this.dispatchEvent(e,"mouseover"
,t)),o&&null===this.cursor&&(this.cursor=e.cursor)):s.over&&
(s.over=!1,this.dispatchEvent(e,"pointerout",this.eventData),o&&this.dispatchEvent(e
,"mouseout",t),s.none&&delete
e.trackedPointers[i]))},e.prototype.onPointerOver=function(t){var
e=this.normalizeToPointerData(t),r=e[0],n=this.getInteractionDataForPointerId(r),i=t
his.configureInteractionEventForDOMEvent(this.eventData,r,n);i.data.originalEvent=r,
"mouse"===r.pointerType&&
(this.mouseOverRenderer=!0),this.emit("pointerover",i),"mouse"!==r.pointerType&&"pen
"!==r.pointerType||this.emit("mouseover",i)},e.prototype.getInteractionDataForPointe
rId=function(t){var e=t.pointerId,r=void 0;return e===b||"mouse"===t.pointerType?
r=this.mouse:this.activeInteractionData[e]?r=this.activeInteractionData[e]:
(r=this.interactionDataPool.pop()||new
c.default,r.identifier=e,this.activeInteractionData[e]=r),r.copyEvent(t),r},e.protot
ype.releaseInteractionDataForPointerId=function(t){var
e=this.activeInteractionData[t];e&&(delete
this.activeInteractionData[t],e.reset(),this.interactionDataPool.push(e))},e.prototy
pe.configureInteractionEventForDOMEvent=function(t,e,r){return
t.data=r,this.mapPositionToPoint(r.global,e.clientX,e.clientY),navigator.isCocoonJS&
&"touch"===e.pointerType&&
(r.global.x=r.global.x/this.resolution,r.global.y=r.global.y/this.resolution),"touch
"===e.pointerType&&
(e.globalX=r.global.x,e.globalY=r.global.y),r.originalEvent=e,t.reset(),t},e.prototy
pe.normalizeToPointerData=function(t){var e=[];if(this.supportsTouchEvents&&t
instanceof TouchEvent)for(var r=0,n=t.changedTouches.length;r<n;r++){var
i=t.changedTouches[r];void 0===i.button&&(i.button=t.touches.length?1:0),void
0===i.buttons&&(i.buttons=t.touches.length?1:0),void 0===i.isPrimary&&
(i.isPrimary=1===t.touches.length&&"touchstart"===t.type),void 0===i.width&&
(i.width=i.radiusX||1),void 0===i.height&&(i.height=i.radiusY||1),void 0===i.tiltX&&
(i.tiltX=0),void 0===i.tiltY&&(i.tiltY=0),void 0===i.pointerType&&
5/9/20, 12:55 PM
Page 93 of 181
(i.pointerType="touch"),void 0===i.pointerId&&(i.pointerId=i.identifier||0),void
0===i.pressure&&(i.pressure=i.force||.5),void 0===i.twist&&(i.twist=0),void
0===i.tangentialPressure&&(i.tangentialPressure=0),void 0===i.layerX&&
(i.layerX=i.offsetX=i.clientX),void 0===i.layerY&&
(i.layerY=i.offsetY=i.clientY),i.isNormalized=!0,e.push(i)}else!(t instanceof
MouseEvent)||this.supportsPointerEvents&&t instanceof window.PointerEvent?e.push(t):
(void 0===t.isPrimary&&(t.isPrimary=!0),void 0===t.width&&(t.width=1),void
0===t.height&&(t.height=1),void 0===t.tiltX&&(t.tiltX=0),void 0===t.tiltY&&
(t.tiltY=0),void 0===t.pointerType&&(t.pointerType="mouse"),void 0===t.pointerId&&
(t.pointerId=b),void 0===t.pressure&&(t.pressure=.5),void 0===t.twist&&
(t.twist=0),void 0===t.tangentialPressure&&
(t.tangentialPressure=0),t.isNormalized=!0,e.push(t));return
e},e.prototype.destroy=function()
{this.removeEvents(),this.removeAllListeners(),this.renderer=null,this.mouse=null,th
is.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.proce
ssPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCa
ncel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointer
Move=null,
this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.
_tempPoint=null},e}
(y.default);r.default=T,h.WebGLRenderer.registerPlugin("interaction",T),h.CanvasRend
erer.registerPlugin("interaction",T)},
{"../core":65,"./InteractionData":155,"./InteractionEvent":156,"./InteractionTrackin
gData":158,"./interactiveTarget":160,eventemitter3:3}],158:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var
r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e)
{n(this,t),this._pointerId=e,this._flags=t.FLAGS.NONE}return
t.prototype._doSet=function(t,e){this._flags=e?this._flags|t:this._flags&~t},i(t,
[{key:"pointerId",get:function(){return this._pointerId}},
{key:"flags",get:function(){return this._flags},set:function(t){this._flags=t}},
{key:"none",get:function(){return this._flags===this.constructor.FLAGS.NONE}},
{key:"over",get:function(){return 0!=
(this._flags&this.constructor.FLAGS.OVER)},set:function(t)
{this._doSet(this.constructor.FLAGS.OVER,t)}},{key:"rightDown",get:function(){return
0!=(this._flags&this.constructor.FLAGS.RIGHT_DOWN)},set:function(t)
{this._doSet(this.constructor.FLAGS.RIGHT_DOWN,t)}},{key:"leftDown",get:function()
{return 0!=(this._flags&this.constructor.FLAGS.LEFT_DOWN)},set:function(t)
{this._doSet(this.constructor.FLAGS.LEFT_DOWN,t)}}]),t}
();r.default=o,o.FLAGS=Object.freeze({NONE:0,OVER:1,LEFT_DOWN:2,RIGHT_DOWN:4})},
{}],159:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}r.__esModule=!0;var
i=t("./InteractionData");Object.defineProperty(r,"InteractionData",
{enumerable:!0,get:function(){return n(i).default}});var
o=t("./InteractionManager");Object.defineProperty(r,"InteractionManager",
{enumerable:!0,get:function(){return n(o).default}});var
s=t("./interactiveTarget");Object.defineProperty(r,"interactiveTarget",
{enumerable:!0,get:function(){return n(s).default}});var
a=t("./InteractionTrackingData");Object.defineProperty(r,"InteractionTrackingData",
{enumerable:!0,get:function(){return n(a).default}});var
u=t("./InteractionEvent");Object.defineProperty(r,"InteractionEvent",
{enumerable:!0,get:function(){return n(u).default}})},
{"./InteractionData":155,"./InteractionEvent":156,"./InteractionManager":157,"./Inte
ractionTrackingData":158,"./interactiveTarget":160}],160:[function(t,e,r){"use
strict";r.__esModule=!0,r.default=
{interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode()
{return"pointer"===this.cursor},set buttonMode(t){t?
5/9/20, 12:55 PM
Page 94 of 181
this.cursor="pointer":"pointer"===this.cursor&&(this.cursor=null)},cursor:null,get
trackedPointers(){return void 0===this._trackedPointers&&(this._trackedPointers=
{}),this._trackedPointers},_trackedPointers:void 0}},{}],161:[function(t,e,r){"use
strict";function n(t,e)
{t.bitmapFont=a.BitmapText.registerFont(t.data,e)}r.__esModule=!0,r.parse=n,r.defaul
t=function(){return function(t,e){if(!t.data||t.type!==s.Resource.TYPE.XML)return
void
e();if(0===t.data.getElementsByTagName("page").length||0===t.data.getElementsByTagNa
me("info").length||null===t.data.getElementsByTagName("info")
[0].getAttribute("face"))return void e();var
r=t.isDataUrl?"":o.dirname(t.url);t.isDataUrl&&("."===r&&
(r=""),this.baseUrl&&r&&"/"===this.baseUrl.charAt(this.baseUrl.length-1)&&(r+="/")),
(r=r.replace(this.baseUrl,""))&&"/"!==r.charAt(r.length-1)&&(r+="/");for(var
i=t.data.getElementsByTagName("page"),a={},u=function(r)
{a[r.metadata.pageFile]=r.texture,Object.keys(a).length===i.length&&
(n(t,a),e())},h=0;h<i.length;++h){var l=i[h].getAttribute("file"),c=r+l,d=!1;for(var
f in this.resources){var p=this.resources[f];if(p.url===c)
{p.metadata.pageFile=l,p.texture?u(p):p.onAfterMiddleware.add(u),d=!0;break}}if(!d)
{var v=
{crossOrigin:t.crossOrigin,loadType:s.Resource.LOAD_TYPE.IMAGE,metadata:Object.assig
n({pageFile:l},t.metadata.imageMetadata),parentResource:t};this.add(c,v,u)}}}};var
i=t("path"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r
in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(i),s=t("resource-loader"),a=t("../extras")},{"../extras":141,path:8,"resourceloader":36}],162:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?
t:
{default:t}}r.__esModule=!0,r.shared=r.Resource=r.textureParser=r.getResourcePath=r.
spritesheetParser=r.parseBitmapFontData=r.bitmapFontParser=r.Loader=void 0;var
i=t("./bitmapFontParser");Object.defineProperty(r,"bitmapFontParser",
{enumerable:!0,get:function(){return
n(i).default}}),Object.defineProperty(r,"parseBitmapFontData",
{enumerable:!0,get:function(){return i.parse}});var
o=t("./spritesheetParser");Object.defineProperty(r,"spritesheetParser",
{enumerable:!0,get:function(){return
n(o).default}}),Object.defineProperty(r,"getResourcePath",
{enumerable:!0,get:function(){return o.getResourcePath}});var
s=t("./textureParser");Object.defineProperty(r,"textureParser",
{enumerable:!0,get:function(){return n(s).default}});var a=t("resourceloader");Object.defineProperty(r,"Resource",{enumerable:!0,get:function(){return
a.Resource}});var
u=t("../core/Application"),h=n(u),l=t("./loader"),c=n(l);r.Loader=c.default;var
d=new c.default;d.destroy=function(){},r.shared=d;var
f=h.default.prototype;f._loader=null,Object.defineProperty(f,"loader",
{get:function(){if(!this._loader){var t=this._options.sharedLoader;this._loader=t?
d:new c.default}return
this._loader}}),f._parentDestroy=f.destroy,f.destroy=function(t,e){this._loader&&
(this._loader.destroy(),this._loader=null),this._parentDestroy(t,e)}},
{"../core/Application":43,"./bitmapFontParser":161,"./loader":163,"./spritesheetPars
er":164,"./textureParser":165,"resource-loader":36}],163:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("resource-loader"),u=n(a),h=t("resourceloader/lib/middlewares/parsing/blob"),l=t("eventemitter3"),c=n(l),d=t("./texturePars
er"),f=n(d),p=t("./spritesheetParser"),v=n(p),g=t("./bitmapFontParser"),y=n(g),m=fun
5/9/20, 12:55 PM
Page 95 of 181
ction(t){function e(r,n){i(this,e);var
s=o(this,t.call(this,r,n));c.default.call(s);for(var
a=0;a<e._pixiMiddleware.length;++a)s.use(e._pixiMiddleware[a]());return
s.onStart.add(function(t){return s.emit("start",t)}),s.onProgress.add(function(t,e)
{return s.emit("progress",t,e)}),s.onError.add(function(t,e,r){return
s.emit("error",t,e,r)}),s.onLoad.add(function(t,e){return
s.emit("load",t,e)}),s.onComplete.add(function(t,e){return
s.emit("complete",t,e)}),s}return s(e,t),e.addPixiMiddleware=function(t)
{e._pixiMiddleware.push(t)},e.prototype.destroy=function()
{this.removeAllListeners(),this.reset()},e}(u.default);r.default=m;for(var _ in
c.default.prototype)m.prototype[_]=c.default.prototype[_];m._pixiMiddleware=
[h.blobMiddlewareFactory,f.default,v.default,y.default];var
b=u.default.Resource;b.setExtensionXhrType("fnt",b.XHR_RESPONSE_TYPE.DOCUMENT)},
{"./bitmapFontParser":161,"./spritesheetParser":164,"./textureParser":165,eventemitt
er3:3,"resource-loader":36,"resource-loader/lib/middlewares/parsing/blob":37}],164:
[function(t,e,r){"use strict";function n(t,e){return t.isDataUrl?
t.data.meta.image:s.default.resolve(t.url.replace(e,""),t.data.meta.image)}r.__esMod
ule=!0,r.default=function(){return function(t,e){var
r=t.name+"_image";if(!t.data||t.type!==i.Resource.TYPE.JSON||!t.data.frames||this.re
sources[r])return void e();var o=
{crossOrigin:t.crossOrigin,metadata:t.metadata.imageMetadata,parentResource:t},s=n(t
,this.baseUrl);this.add(r,s,o,function(r){if(r.error)return void e(r.error);var
n=new a.Spritesheet(r.texture.baseTexture,t.data,t.url);n.parse(function()
{t.spritesheet=n,t.textures=n.textures,e()})})}},r.getResourcePath=n;var
i=t("resource-loader"),o=t("url"),s=function(t){return t&&t.__esModule?t:
{default:t}}(o),a=t("../core")},{"../core":65,"resource-loader":36,url:38}],165:
[function(t,e,r){"use strict";r.__esModule=!0,r.default=function(){return
function(t,e){t.data&&t.type===n.Resource.TYPE.IMAGE&&
(t.texture=o.default.fromLoader(t.data,t.url,t.name)),e()}};var n=t("resourceloader"),i=t("../core/textures/Texture"),o=function(t){return t&&t.__esModule?t:
{default:t}}(i)},{"../core/textures/Texture":115,"resource-loader":36}],166:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(a),h=t("../core/textures/Texture"),l=function(t){return t&&t.__esModule?t:
{default:t}}(h),c=new u.Point,d=new u.Polygon,f=function(t){function e(r,o,s,a,h)
{n(this,e);var c=i(this,t.call(this));return
c._texture=r||l.default.EMPTY,c.uvs=s||new
Float32Array([0,0,1,0,1,1,0,1]),c.vertices=o||new
Float32Array([0,0,100,0,100,100,0,100]),c.indices=a||new
Uint16Array([0,1,3,2]),c.dirty=0,c.indexDirty=0,c.vertexDirty=0,c.autoUpdate=!0,c.bl
endMode=u.BLEND_MODES.NORMAL,c.canvasPadding=u.settings.MESH_CANVAS_PADDING,c.drawMo
de=h||e.DRAW_MODES.TRIANGLE_MESH,c.shader=null,c.tintRgb=new
Float32Array([1,1,1]),c._glDatas={},c._uvTransform=new
u.TextureMatrix(c._texture),c.uploadUvTransform=!1,c.pluginName="mesh",c}return
o(e,t),e.prototype._renderWebGL=function(t)
{this.refresh(),t.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.plugi
nName].render(this)},e.prototype._renderCanvas=function(t)
{this.refresh(),t.plugins[this.pluginName].render(this)},e.prototype._onTextureUpdat
5/9/20, 12:55 PM
Page 96 of 181
e=function()
{this._uvTransform.texture=this._texture,this.refresh()},e.prototype.multiplyUvs=fun
ction()
{this.uploadUvTransform||this._uvTransform.multiplyUvs(this.uvs)},e.prototype.refres
h=function(t)
{this.autoUpdate&&this.vertexDirty++,this._uvTransform.update(t)&&this._refresh()},e
.prototype._refresh=function(){},e.prototype._calculateBounds=function()
{this._bounds.addVertices(this.transform,this.vertices,0,this.vertices.length)},e.pr
ototype.containsPoint=function(t)
{if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,
c);for(var
r=this.vertices,n=d.points,i=this.indices,o=this.indices.length,s=this.drawMode===e.
DRAW_MODES.TRIANGLES?3:1,a=0;a+2<o;a+=s){var
u=2*i[a],h=2*i[a+1],l=2*i[a+2];if(n[0]=r[u],n[1]=r[u+1],n[2]=r[h],n[3]=r[h+1],n[4]=r
[l],n[5]=r[l+1],d.contains(c.x,c.y))return!0}return!1},e.prototype.destroy=function(
e){for(var r in this._glDatas){var n=this._glDatas[r];n.destroy?n.destroy():
(n.vertexBuffer&&(n.vertexBuffer.destroy(),n.vertexBuffer=null),n.indexBuffer&&
(n.indexBuffer.destroy(),n.indexBuffer=null),n.uvBuffer&&
(n.uvBuffer.destroy(),n.uvBuffer=null),n.vao&&
(n.vao.destroy(),n.vao=null))}this._glDatas=null,t.prototype.destroy.call(this,e)},s
(e,[{key:"texture",get:function(){return this._texture},set:function(t)
{this._texture!==t&&(this._texture=t,t&&(t.baseTexture.hasLoaded?
this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}},
{key:"tint",get:function(){return u.utils.rgb2hex(this.tintRgb)},set:function(t)
{this.tintRgb=u.utils.hex2rgb(t,this.tintRgb)}}]),e}
(u.Container);r.default=f,f.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1}},
{"../core":65,"../core/textures/Texture":115}],167:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=function(){function t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}
(),u=t("./Plane"),h=n(u),l=t("../core/sprites/canvas/CanvasTinter"),c=n(l),d=10,f=fu
nction(t){function e(r,n,s,a,u){i(this,e);var h=o(this,t.call(this,r,4,4));return
h._origWidth=r.orig.width,h._origHeight=r.orig.height,h._width=h._origWidth,h._heigh
t=h._origHeight,h._leftWidth=void 0!==n?n:d,h._rightWidth=void 0!==a?
a:d,h._topHeight=void 0!==s?s:d,h._bottomHeight=void 0!==u?
u:d,h._cachedTint=16777215,h._tintedTexture=null,h._canvasUvs=null,h.refresh(!0),h}r
eturn s(e,t),e.prototype.updateHorizontalVertices=function(){var
t=this.vertices,e=this._topHeight+this._bottomHeight,r=this._height>e?
1:this._height/e;t[9]=t[11]=t[13]=t[15]=this._topHeight*r,t[17]=t[19]=t[21]=t[23]=th
is._heightthis._bottomHeight*r,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVertica
lVertices=function(){var
t=this.vertices,e=this._leftWidth+this._rightWidth,r=this._width>e?
1:this._width/e;t[2]=t[10]=t[18]=t[26]=this._leftWidth*r,t[4]=t[12]=t[20]=t[28]=this
._widththis._rightWidth*r,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._renderCanvas=fun
ction(t){var
e=t.context,r=this.worldTransform,n=t.resolution,i=16777215!==this.tint,o=this._text
ure;i&&this._cachedTint!==this.tint&&
(this._cachedTint=this.tint,this._tintedTexture=c.default.getTintedTexture(this,this
.tint));var s=i?this._tintedTexture:o.baseTexture.source;this._canvasUvs||
5/9/20, 12:55 PM
Page 97 of 181
(this._canvasUvs=[0,0,0,0,0,0,0,0]);var a=this.vertices,u=this._canvasUvs,h=i?
0:o.frame.x,l=i?
0:o.frame.y,d=h+o.frame.width,f=l+o.frame.height;u[0]=h,u[1]=h+this._leftWidth,u[2]=
d-this._rightWidth,u[3]=d,u[4]=l,u[5]=l+this._topHeight,u[6]=fthis._bottomHeight,u[7]=f;for(var
p=0;p<8;p++)u[p]*=o.baseTexture.resolution;e.globalAlpha=this.worldAlpha,t.setBlendM
ode(this.blendMode),t.roundPixels?
e.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.tx*n|0,r.ty*n|0):e.setTransform(r.a*n,r.b*n
,r.c*n,r.d*n,r.tx*n,r.ty*n);for(var v=0;v<3;v++)for(var g=0;g<3;g++){var
y=2*g+8*v,m=Math.max(1,u[g+1]-u[g]),_=Math.max(1,u[v+5]-
u[v+4]),b=Math.max(1,a[y+10]-a[y]),x=Math.max(1,a[y+11]-
a[y+1]);e.drawImage(s,u[g],u[v+4],m,_,a[y],a[y+1],b,x)}},e.prototype._refresh=functi
on(){t.prototype._refresh.call(this);var
e=this.uvs,r=this._texture;this._origWidth=r.orig.width,this._origHeight=r.orig.heig
ht;var
n=1/this._origWidth,i=1/this._origHeight;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]
=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1,e[2]=e[10]=e[18]=e[26]=n*this.
_leftWidth,e[4]=e[12]=e[20]=e[28]=1-
n*this._rightWidth,e[9]=e[11]=e[13]=e[15]=i*this._topHeight,e[17]=e[19]=e[21]=e[23]=
1-
i*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),t
his.dirty++,this.multiplyUvs()},a(e,[{key:"width",get:function(){return
this._width},set:function(t){this._width=t,this._refresh()}},
{key:"height",get:function(){return this._height},set:function(t)
{this._height=t,this._refresh()}},{key:"leftWidth",get:function(){return
this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()}},
{key:"rightWidth",get:function(){return this._rightWidth},set:function(t)
{this._rightWidth=t,this._refresh()}},{key:"topHeight",get:function(){return
this._topHeight},set:function(t){this._topHeight=t,this._refresh()}},
{key:"bottomHeight",get:function(){return this._bottomHeight},set:function(t)
{this._bottomHeight=t,this._refresh()}}]),e}(h.default);r.default=f},
{"../core/sprites/canvas/CanvasTinter":104,"./Plane":168}],168:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("./Mesh"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t)
{function e(r,o,s){n(this,e);var u=i(this,t.call(this,r));return
u._ready=!0,u.verticesX=o||10,u.verticesY=s||10,u.drawMode=a.default.DRAW_MODES.TRIA
NGLES,u.refresh(),u}return o(e,t),e.prototype._refresh=function(){for(var
t=this._texture,e=this.verticesX*this.verticesY,r=[],n=[],i=[],o=
[],s=this.verticesX-1,a=this.verticesY-1,u=t.width/s,h=t.height/a,l=0;l<e;l++){var
c=l%this.verticesX,d=l/this.verticesX|0;r.push(c*u,d*h),i.push(c/s,d/a)}for(var
f=s*a,p=0;p<f;p++){var v=p%s,g=p/s|0,y=g*this.verticesX+v,m=g*this.verticesX+v+1,_=
(g+1)*this.verticesX+v,b=
(g+1)*this.verticesX+v+1;o.push(y,m,_),o.push(m,b,_)}this.vertices=new
Float32Array(r),this.uvs=new Float32Array(i),this.colors=new
Float32Array(n),this.indices=new
Uint16Array(o),this.dirty++,this.indexDirty++,this.multiplyUvs()},e.prototype._onTex
tureUpdate=function()
{a.default.prototype._onTextureUpdate.call(this),this._ready&&this.refresh()},e}
(a.default);r.default=u},{"./Mesh":166}],169:[function(t,e,r){"use strict";function
n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been
initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
5/9/20, 12:55 PM
Page 98 of 181
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("./Mesh"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t)
{function e(r,o){n(this,e);var s=i(this,t.call(this,r));return
s.points=o,s.vertices=new Float32Array(4*o.length),s.uvs=new
Float32Array(4*o.length),s.colors=new Float32Array(2*o.length),s.indices=new
Uint16Array(2*o.length),s.autoUpdate=!0,s.refresh(),s}return
o(e,t),e.prototype._refresh=function(){var t=this.points;if(!
(t.length<1)&&this._texture._uvs){this.vertices.length/4!==t.length&&
(this.vertices=new Float32Array(4*t.length),this.uvs=new
Float32Array(4*t.length),this.colors=new Float32Array(2*t.length),this.indices=new
Uint16Array(2*t.length));var
e=this.uvs,r=this.indices,n=this.colors;e[0]=0,e[1]=0,e[2]=0,e[3]=1,n[0]=1,n[1]=1,r[
0]=0,r[1]=1;for(var i=t.length,o=1;o<i;o++){var s=4*o,a=o/(i1);e[s]=a,e[s+1]=0,e[s+2]=a,e[s+3]=1,s=2*o,n[s]=1,n[s+1]=1,s=2*o,r[s]=s,r[s+1]=s+1}t
his.dirty++,this.indexDirty++,this.multiplyUvs(),this.refreshVertices()}},e.prototyp
e.refreshVertices=function(){var t=this.points;if(!(t.length<1))for(var
e=t[0],r=void 0,n=0,i=0,o=this.vertices,s=t.length,a=0;a<s;a++){var
u=t[a],h=4*a;r=a<t.length-1?t[a+1]:u,i=-(r.x-e.x),n=r.y-e.y;var l=10*(1-a/(s1));l>1&&(l=1);var
c=Math.sqrt(n*n+i*i),d=this._texture.height/2;n/=c,i/=c,n*=d,i*=d,o[h]=u.x+n,o[h+1]=
u.y+i,o[h+2]=u.x-n,o[h+3]=u.y-i,e=u}},e.prototype.updateTransform=function()
{this.autoUpdate&&this.refreshVertices(),this.containerUpdateTransform()},e}
(a.default);r.default=u},{"./Mesh":166}],170:[function(t,e,r){"use strict";function
n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var i=t("../../core"),o=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(i),s=t("../Mesh"),a=function(t){return t&&t.__esModule?t:{default:t}}
(s),u=function(){function t(e){n(this,t),this.renderer=e}return
t.prototype.render=function(t){var
e=this.renderer,r=e.context,n=t.worldTransform,i=e.resolution;e.roundPixels?
r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i|0,n.ty*i|0):r.setTransform(n.a*i,n.b*i
,n.c*i,n.d*i,n.tx*i,n.ty*i),e.context.globalAlpha=t.worldAlpha,e.setBlendMode(t.blen
dMode),t.drawMode===a.default.DRAW_MODES.TRIANGLE_MESH?
this._renderTriangleMesh(t):this._renderTriangles(t)},t.prototype._renderTriangleMes
h=function(t){for(var e=t.vertices.length/2,r=0;r<e-2;r++){var
n=2*r;this._renderDrawTriangle(t,n,n+2,n+4)}},t.prototype._renderTriangles=function(
t){for(var e=t.indices,r=e.length,n=0;n<r;n+=3){var
i=2*e[n],o=2*e[n+1],s=2*e[n+2];this._renderDrawTriangle(t,i,o,s)}},t.prototype._rend
erDrawTriangle=function(t,e,r,n){var
i=this.renderer.context,o=t.uvs,s=t.vertices,a=t._texture;if(a.valid){var
u=a.baseTexture,h=u.source,l=u.width,c=u.height,d=void 0,f=void 0,p=void 0,v=void
0,g=void 0,y=void 0;if(t.uploadUvTransform){var m=t._uvTransform.mapCoord;d=
(o[e]*m.a+o[e+1]*m.c+m.tx)*u.width,f=(o[r]*m.a+o[r+1]*m.c+m.tx)*u.width,p=
(o[n]*m.a+o[n+1]*m.c+m.tx)*u.width,v=(o[e]*m.b+o[e+1]*m.d+m.ty)*u.height,g=
(o[r]*m.b+o[r+1]*m.d+m.ty)*u.height,y=(o[n]*m.b+o[n+1]*m.d+m.ty)*u.height}else
d=o[e]*u.width,f=o[r]*u.width,p=o[n]*u.width,v=o[e+1]*u.height,g=o[r+1]*u.height,y=o
[n+1]*u.height;var
_=s[e],b=s[r],x=s[n],T=s[e+1],w=s[r+1],E=s[n+1],S=t.canvasPadding/this.renderer.reso
lution;if(S>0){var
O=S/Math.abs(t.worldTransform.a),M=S/Math.abs(t.worldTransform.d),P=(_+b+x)/3,C=
(T+w+E)/3,R=_-P,A=T-C,I=Math.sqrt(R*R+A*A);_=P+R/I*(I+O),T=C+A/I*(I+M),R=b-P,A=wC,I=Math.sqrt(R*R+A*A),b=P+R/I*(I+O),w=C+A/I*(I+M),R=x-P,A=EC,I=Math.sqrt(R*R+A*A),x=P+R/I*(I+O),E=C+A/I*
(I+M)}i.save(),i.beginPath(),i.moveTo(_,T),i.lineTo(b,w),i.lineTo(x,E),i.closePath()
,i.clip();var D=d*g+v*p+f*y-g*p-v*f-d*y,L=_*g+v*x+b*y-g*x-v*b-_*y,N=d*b+_*p+f*x-b*p-
_*f-d*x,B=d*g*x+v*b*p+_*f*y-_*g*p-v*f*x-d*b*y,k=T*g+v*E+w*y-g*E-v*w5/9/20, 12:55 PM
Page 99 of 181
T*y,F=d*w+T*p+f*E-w*p-T*f-d*E,j=d*g*E+v*w*p+T*f*y-T*g*p-v*f*Ed*w*y;i.transform(L/D,k/D,N/D,F/D,B/D,j/D),i.drawImage(h,0,0,l*u.resolution,c*u.reso
lution,0,0,l,c),i.restore(),this.renderer.invalidateBlendMode()}},t.prototype.render
MeshFlat=function(t){var
e=this.renderer.context,r=t.vertices,n=r.length/2;e.beginPath();for(var i=1;i<n2;++i){var
o=2*i,s=r[o],a=r[o+1],u=r[o+2],h=r[o+3],l=r[o+4],c=r[o+5];e.moveTo(s,a),e.lineTo(u,h
),e.lineTo(l,c)}e.fillStyle="#FF0000",e.fill(),e.closePath()},t.prototype.destroy=fu
nction(){this.renderer=null},t}
();r.default=u,o.CanvasRenderer.registerPlugin("mesh",u)},
{"../../core":65,"../Mesh":166}],171:[function(t,e,r){"use strict";function n(t)
{return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var
i=t("./Mesh");Object.defineProperty(r,"Mesh",{enumerable:!0,get:function(){return
n(i).default}});var
o=t("./webgl/MeshRenderer");Object.defineProperty(r,"MeshRenderer",
{enumerable:!0,get:function(){return n(o).default}});var
s=t("./canvas/CanvasMeshRenderer");Object.defineProperty(r,"CanvasMeshRenderer",
{enumerable:!0,get:function(){return n(s).default}});var
a=t("./Plane");Object.defineProperty(r,"Plane",{enumerable:!0,get:function(){return
n(a).default}});var
u=t("./NineSlicePlane");Object.defineProperty(r,"NineSlicePlane",
{enumerable:!0,get:function(){return n(u).default}});var
h=t("./Rope");Object.defineProperty(r,"Rope",{enumerable:!0,get:function(){return
n(h).default}})},
{"./Mesh":166,"./NineSlicePlane":167,"./Plane":168,"./Rope":169,"./canvas/CanvasMesh
Renderer":170,"./webgl/MeshRenderer":172}],172:[function(t,e,r){"use
strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t
instanceof e))throw new TypeError("Cannot call a class as a function")}function
o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't
been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}(a),h=t("pixi-glcore"),l=n(h),c=t("../Mesh"),d=n(c),f=(t("path"),u.Matrix.IDENTITY),p=function(t)
{function e(r){i(this,e);var n=o(this,t.call(this,r));return n.shader=null,n}return
s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new
u.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3
translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid
main(void)\n{\n gl_Position = vec4((projectionMatrix * translationMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n vTextureCoord = (uTransform *
vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\nuniform vec4
uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n gl_FragColor =
texture2D(uSampler, vTextureCoord) * uColor;\n}\n")},e.prototype.render=function(t)
{var e=this.renderer,r=e.gl,n=t._texture;if(n.valid){var
i=t._glDatas[e.CONTEXT_UID];i||(e.bindVao(null),i=
{shader:this.shader,vertexBuffer:l.default.GLBuffer.createVertexBuffer(r,t.vertices,
r.STREAM_DRAW),uvBuffer:l.default.GLBuffer.createVertexBuffer(r,t.uvs,r.STREAM_DRAW)
,indexBuffer:l.default.GLBuffer.createIndexBuffer(r,t.indices,r.STATIC_DRAW),vao:nul
l,dirty:t.dirty,indexDirty:t.indexDirty,vertexDirty:t.vertexDirty},i.vao=new
l.default.VertexArrayObject(r).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer,i
.shader.attributes.aVertexPosition,r.FLOAT,!1,8,0).addAttribute(i.uvBuffer,i.shader.
attributes.aTextureCoord,r.FLOAT,!1,8,0),t._glDatas[e.CONTEXT_UID]=i),e.bindVao(i.va
o),t.dirty!==i.dirty&&
(i.dirty=t.dirty,i.uvBuffer.upload(t.uvs)),t.indexDirty!==i.indexDirty&&
(i.indexDirty=t.indexDirty,i.indexBuffer.upload(t.indices)),t.vertexDirty!==i.vertex
5/9/20, 12:55 PM
Page 100 of 181
Dirty&&
(i.vertexDirty=t.vertexDirty,i.vertexBuffer.upload(t.vertices)),e.bindShader(i.shade
r),i.shader.uniforms.uSampler=e.bindTexture(n),e.state.setBlendMode(u.utils.correctB
lendMode(t.blendMode,n.baseTexture.premultipliedAlpha)),i.shader.uniforms.uTransform
&&(t.uploadUvTransform?
i.shader.uniforms.uTransform=t._uvTransform.mapCoord.toArray(!0):i.shader.uniforms.u
Transform=f.toArray(!0)),i.shader.uniforms.translationMatrix=t.worldTransform.toArra
y(!0),i.shader.uniforms.uColor=u.utils.premultiplyRgba(t.tintRgb,t.worldAlpha,i.shad
er.uniforms.uColor,n.baseTexture.premultipliedAlpha);var
o=t.drawMode===d.default.DRAW_MODES.TRIANGLE_MESH?
r.TRIANGLE_STRIP:r.TRIANGLES;i.vao.draw(o,t.indices.length,0)}},e}
(u.ObjectRenderer);r.default=p,u.WebGLRenderer.registerPlugin("mesh",p)},
{"../../core":65,"../Mesh":166,path:8,"pixi-gl-core":15}],173:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function
t(t,e){for(var r=0;r<e.length;r++){var
n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return
r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(a),h=t("../core/utils"),l=function(t){function e(){var r=arguments.length>0&&void
0!==arguments[0]?arguments[0]:1500,o=arguments[1],s=arguments.length>2&&void
0!==arguments[2]?arguments[2]:16384,a=arguments.length>3&&void
0!==arguments[3]&&arguments[3];n(this,e);var h=i(this,t.call(this));return s>16384&&
(s=16384),s>r&&(s=r),h._properties=
[!1,!0,!1,!1,!1],h._maxSize=r,h._batchSize=s,h._glBuffers={},h._bufferUpdateIDs=
[],h._updateID=0,h.interactiveChildren=!1,h.blendMode=u.BLEND_MODES.NORMAL,h.autoRes
ize=a,h.roundPixels=!0,h.baseTexture=null,h.setProperties(o),h._tint=0,h.tintRgb=new
Float32Array(4),h.tint=16777215,h}return
o(e,t),e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in
t||"scale"in
t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in
t?!!t.position:this._properties[1],this._properties[2]="rotation"in
t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in
t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in
t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function()
{this.displayObjectUpdateTransform()},e.prototype.renderWebGL=function(t){var
e=this;this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable&&
(this.baseTexture||
(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.hasLoaded||
this.baseTexture.once("update",function(){return
e.onChildrenChange(0)})),t.setObjectRenderer(t.plugins.particle),t.plugins.particle.
render(this))},e.prototype.onChildrenChange=function(t){for(var
e=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<e;)this._bufferUpdateID
s.push(0);this._bufferUpdateIDs[e]=++this._updateID},e.prototype.renderCanvas=functi
on(t){if(this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable)
{var
e=t.context,r=this.worldTransform,n=!0,i=0,o=0,s=0,a=0;t.setBlendMode(this.blendMode
),e.globalAlpha=this.worldAlpha,this.displayObjectUpdateTransform();for(var
u=0;u<this.children.length;++u){var h=this.children[u];if(h.visible){var
l=h._texture.frame;if(e.globalAlpha=this.worldAlpha*h.alpha,h.rotation%
(2*Math.PI)==0)n&&
(e.setTransform(r.a,r.b,r.c,r.d,r.tx*t.resolution,r.ty*t.resolution),n=!1),i=h.ancho
5/9/20, 12:55 PM
Page 101 of 181
r.x*(-l.width*h.scale.x)+h.position.x+.5,o=h.anchor.y*(-
l.height*h.scale.y)+h.position.y+.5,s=l.width*h.scale.x,a=l.height*h.scale.y;else{n|
|(n=!0),h.displayObjectUpdateTransform();var c=h.worldTransform;t.roundPixels?
e.setTransform(c.a,c.b,c.c,c.d,c.tx*t.resolution|0,c.ty*t.resolution|0):e.setTransfo
rm(c.a,c.b,c.c,c.d,c.tx*t.resolution,c.ty*t.resolution),i=h.anchor.x*-
l.width+.5,o=h.anchor.y*-l.height+.5,s=l.width,a=l.height}var
d=h._texture.baseTexture.resolution;e.drawImage(h._texture.baseTexture.source,l.x*d,
l.y*d,l.width*d,l.height*d,i*t.resolution,o*t.resolution,s*t.resolution,a*t.resoluti
on)}}}},e.prototype.destroy=function(e){if(t.prototype.destroy.call(this,e),
this._buffers)for(var
r=0;r<this._buffers.length;++r)this._buffers[r].destroy();this._properties=null,this
._buffers=null,this._bufferUpdateIDs=null},s(e,[{key:"tint",get:function(){return
this._tint},set:function(t){this._tint=t,(0,h.hex2rgb)(t,this.tintRgb)}}]),e}
(u.Container);r.default=l},{"../core":65,"../core/utils":125}],174:[function(t,e,r)
{"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var
i=t("./ParticleContainer");Object.defineProperty(r,"ParticleContainer",
{enumerable:!0,get:function(){return n(i).default}});var
o=t("./webgl/ParticleRenderer");Object.defineProperty(r,"ParticleRenderer",
{enumerable:!0,get:function(){return n(o).default}})},
{"./ParticleContainer":173,"./webgl/ParticleRenderer":176}],175:[function(t,e,r)
{"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e)
{if(!(t instanceof e))throw new TypeError("Cannot call a class as a
function")}r.__esModule=!0;var o=t("pixi-glcore"),s=n(o),a=t("../../core/utils/createIndicesForQuads"),u=n(a),h=function()
{function t(e,r,n,o){i(this,t),this.gl=e,this.size=o,this.dynamicProperties=
[],this.staticProperties=[];for(var s=0;s<r.length;++s){var a=r[s];a=
{attribute:a.attribute,size:a.size,uploadFunction:a.uploadFunction,unsignedByte:a.un
signedByte,offset:a.offset},n[s]?
this.dynamicProperties.push(a):this.staticProperties.push(a)}this.staticStride=0,thi
s.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStri
de=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.
_updateID=0,this.initBuffers()}return t.prototype.initBuffers=function(){var
t=this.gl,e=0;this.indices=(0,u.default)
(this.size),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(t,this.indices,t.S
TATIC_DRAW),this.dynamicStride=0;for(var r=0;r<this.dynamicProperties.length;++r)
{var n=this.dynamicProperties[r];n.offset=e,e+=n.size,this.dynamicStride+=n.size}var
i=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new
Float32Array(i),this.dynamicDataUint32=new
Uint32Array(i),this.dynamicBuffer=s.default.GLBuffer.createVertexBuffer(t,i,t.STREAM
_DRAW);var o=0;this.staticStride=0;for(var a=0;a<this.staticProperties.length;++a)
{var h=this.staticProperties[a];h.offset=o,o+=h.size,this.staticStride+=h.size}var
l=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new
Float32Array(l),this.staticDataUint32=new
Uint32Array(l),this.staticBuffer=s.default.GLBuffer.createVertexBuffer(t,l,t.STATIC_
DRAW),this.vao=new s.default.VertexArrayObject(t).addIndex(this.indexBuffer);for(var
c=0;c<this.dynamicProperties.length;++c){var
d=this.dynamicProperties[c];d.unsignedByte?
this.vao.addAttribute(this.dynamicBuffer,d.attribute,t.UNSIGNED_BYTE,!0,4*this.dynam
icStride,4*d.offset):this.vao.addAttribute(this.dynamicBuffer,d.attribute,t.FLOAT,!1
,4*this.dynamicStride,4*d.offset)}for(var f=0;f<this.staticProperties.length;++f)
{var p=this.staticProperties[f];p.unsignedByte?
this.vao.addAttribute(this.staticBuffer,p.attribute,t.UNSIGNED_BYTE,!0,4*this.static
Stride,4*p.offset):this.vao.addAttribute(this.staticBuffer,p.attribute,t.FLOAT,!1,4*
this.staticStride,4*p.offset)}},t.prototype.uploadDynamic=function(t,e,r){for(var
n=0;n<this.dynamicProperties.length;n++){var
i=this.dynamicProperties[n];i.uploadFunction(t,e,r,i.unsignedByte?
this.dynamicDataUint32:this.dynamicData,this.dynamicStride,i.offset)}this.dynamicBuf
fer.upload()},t.prototype.uploadStatic=function(t,e,r){for(var
n=0;n<this.staticProperties.length;n++){var
i=this.staticProperties[n];i.uploadFunction(t,e,r,i.unsignedByte?
5/9/20, 12:55 PM
Page 102 of 181
this.staticDataUint32:this.staticData,this.staticStride,i.offset)}this.staticBuffer.
upload()},t.prototype.destroy=function()
{this.dynamicProperties=null,this.dynamicBuffer.destroy(),this.dynamicBuffer=null,th
is.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.stat
icBuffer.destroy(),this.staticBuffer=null,this.staticData=null,this.staticDataUint32
=null},t}();r.default=h},{"../../core/utils/createIndicesForQuads":123,"pixi-glcore":15}],176:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:
{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}
(a),h=t("./ParticleShader"),l=n(h),c=t("./ParticleBuffer"),d=n(c),f=t("../../core/ut
ils"),p=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return
n.shader=null,n.indexBuffer=null,n.properties=null,n.tempMatrix=new
u.Matrix,n.CONTEXT_UID=0,n}return s(e,t),e.prototype.onContextChange=function(){var
t=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.shader=new
l.default(t),this.properties=
[{attribute:this.shader.attributes.aVertexPosition,size:2,uploadFunction:this.upload
Vertices,offset:0},
{attribute:this.shader.attributes.aPositionCoord,size:2,uploadFunction:this.uploadPo
sition,offset:0},
{attribute:this.shader.attributes.aRotation,size:1,uploadFunction:this.uploadRotatio
n,offset:0},
{attribute:this.shader.attributes.aTextureCoord,size:2,uploadFunction:this.uploadUvs
,offset:0},
{attribute:this.shader.attributes.aColor,size:1,unsignedByte:!0,uploadFunction:this.
uploadTint,offset:0}]},e.prototype.start=function()
{this.renderer.bindShader(this.shader)},e.prototype.render=function(t){var
e=t.children,r=t._maxSize,n=t._batchSize,i=this.renderer,o=e.length;if(0!==o){o>r&&
(o=r);var s=t._glBuffers[i.CONTEXT_UID];s||
(s=t._glBuffers[i.CONTEXT_UID]=this.generateBuffers(t));var
a=e[0]._texture.baseTexture;this.renderer.setBlendMode(u.utils.correctBlendMode(t.bl
endMode,a.premultipliedAlpha));var
h=i.gl,l=t.worldTransform.copy(this.tempMatrix);l.prepend(i._activeRenderTarget.proj
ectionMatrix),this.shader.uniforms.projectionMatrix=l.toArray(!0),this.shader.unifor
ms.uColor=u.utils.premultiplyRgba(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor
,a.premultipliedAlpha),this.shader.uniforms.uSampler=i.bindTexture(a);for(var
c=!1,d=0,f=0;d<o;d+=n,f+=1){var p=o-d;if(p>n&&(p=n),f>=s.length)
{if(!t.autoResize)break;s.push(this._generateOneMoreBuffer(t))}var
v=s[f];v.uploadDynamic(e,d,p);var g=t._bufferUpdateIDs[f]||0;c=c||v._updateID<g,c&&
(v._updateID=t._updateID,v.uploadStatic(e,d,p)),i.bindVao(v.vao),v.vao.draw(h.TRIANG
LES,6*p)}}},e.prototype.generateBuffers=function(t){for(var e=this.renderer.gl,r=
[],n=t._maxSize,i=t._batchSize,o=t._properties,s=0;s<n;s+=i)r.push(new
d.default(e,this.properties,o,i));return
r},e.prototype._generateOneMoreBuffer=function(t){var
e=this.renderer.gl,r=t._batchSize,n=t._properties;return new
d.default(e,this.properties,n,r)},e.prototype.uploadVertices=function(t,e,r,n,i,o)
{for(var s=0,a=0,u=0,h=0,l=0;l<r;++l){var
c=t[e+l],d=c._texture,f=c.scale.x,p=c.scale.y,v=d.trim,g=d.orig;v?(a=v.xc.anchor.x*g.width,s=a+v.width,h=v.y-c.anchor.y*g.height,u=h+v.height):(s=g.width*
(1-c.anchor.x),a=g.width*-c.anchor.x,u=g.height*(1-c.anchor.y),h=g.height*-
c.anchor.y),n[o]=a*f,n[o+1]=h*p,n[o+i]=s*f,n[o+i+1]=h*p,n[o+2*i]=s*f,n[o+2*i+1]=u*p,
n[o+3*i]=a*f,n[o+3*i+1]=u*p,o+=4*i}},e.prototype.uploadPosition=function(t,e,r,n,i,o
5/9/20, 12:55 PM
Page 103 of 181
){for(var s=0;s<r;s++){var
a=t[e+s].position;n[o]=a.x,n[o+1]=a.y,n[o+i]=a.x,n[o+i+1]=a.y,n[o+2*i]=a.x,n[o+2*i+1
]=a.y,n[o+3*i]=a.x,n[o+3*i+1]=a.y,o+=4*i}},e.prototype.uploadRotation=function(t,e,r
,n,i,o){for(var s=0;s<r;s++){var
a=t[e+s].rotation;n[o]=a,n[o+i]=a,n[o+2*i]=a,n[o+3*i]=a,o+=4*i}},e.prototype.uploadU
vs=function(t,e,r,n,i,o){for(var s=0;s<r;++s){var a=t[e+s]._texture._uvs;a?
(n[o]=a.x0,n[o+1]=a.y0,n[o+i]=a.x1,n[o+i+1]=a.y1,n[o+2*i]=a.x2,n[o+2*i+1]=a.y2,n[o+3
*i]=a.x3,n[o+3*i+1]=a.y3,o+=4*i):
(n[o]=0,n[o+1]=0,n[o+i]=0,n[o+i+1]=0,n[o+2*i]=0,n[o+2*i+1]=0,n[o+3*i]=0,n[o+3*i+1]=0
,o+=4*i)}},e.prototype.uploadTint=function(t,e,r,n,i,o){for(var s=0;s<r;++s){var
a=t[e+s],u=a._texture.baseTexture.premultipliedAlpha,h=a.alpha,l=h<1&&u?
(0,f.premultiplyTint)(a._tintRGB,h):a._tintRGB+
(255*h<<24);n[o]=l,n[o+i]=l,n[o+2*i]=l,n[o+3*i]=l,o+=4*i}},e.prototype.destroy=funct
ion()
{this.renderer.gl&&this.renderer.gl.deleteBuffer(this.indexBuffer),t.prototype.destr
oy.call(this),this.shader.destroy(),this.indices=null,this.tempMatrix=null},e}
(u.ObjectRenderer);r.default=p,u.WebGLRenderer.registerPlugin("particle",p)},
{"../../core":65,"../../core/utils":125,"./ParticleBuffer":175,"./ParticleShader":17
7}],177:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var
s=t("../../core/Shader"),a=function(t){return t&&t.__esModule?t:{default:t}}
(s),u=function(t){function e(r){return n(this,e),i(this,t.call(this,r,["attribute
vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4
aColor;","attribute vec2 aPositionCoord;","attribute float aRotation;","uniform mat3
projectionMatrix;","uniform vec4 uColor;","varying vec2 vTextureCoord;","varying
vec4 vColor;","void main(void){"," float x = (aVertexPosition.x) * cos(aRotation)
- (aVertexPosition.y) * sin(aRotation);"," float y = (aVertexPosition.x) *
sin(aRotation) + (aVertexPosition.y) * cos(aRotation);"," vec2 v = vec2(x, y);","
v = v + aPositionCoord;"," gl_Position = vec4((projectionMatrix * vec3(v,
1.0)).xy, 0.0, 1.0);"," vTextureCoord = aTextureCoord;"," vColor = aColor *
uColor;","}"].join("\n"),["varying vec2 vTextureCoord;","varying vec4
vColor;","uniform sampler2D uSampler;","void main(void){"," vec4 color =
texture2D(uSampler, vTextureCoord) * vColor;"," gl_FragColor =
color;","}"].join("\n")))}return o(e,t),e}(a.default);r.default=u},
{"../../core/Shader":44}],178:[function(t,e,r){"use strict";Math.sign||
(Math.sign=function(t){return t=Number(t),0===t||isNaN(t)?t:t>0?1:-1})},{}],179:
[function(t,e,r){"use strict";Number.isInteger||(Number.isInteger=function(t)
{return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t})},{}],180:
[function(t,e,r){"use strict";var n=t("object-assign"),i=function(t){return
t&&t.__esModule?t:{default:t}}(n);Object.assign||(Object.assign=i.default)},
{"object-assign":6}],181:[function(t,e,r){"use
strict";t("./Object.assign"),t("./requestAnimationFrame"),t("./Math.sign"),t("./Numb
er.isInteger"),window.ArrayBuffer||(window.ArrayBuffer=Array),window.Float32Array||
(window.Float32Array=Array),window.Uint32Array||
(window.Uint32Array=Array),window.Uint16Array||(window.Uint16Array=Array)},
{"./Math.sign":178,"./Number.isInteger":179,"./Object.assign":180,"./requestAnimatio
nFrame":182}],182:[function(t,e,r){(function(t){"use
strict";if(Date.now&&Date.prototype.getTime||(Date.now=function(){return(new
Date).getTime()}),!t.performance||!t.performance.now){var
e=Date.now();t.performance||(t.performance={}),t.performance.now=function(){return
Date.now()-e}}for(var r=Date.now(),n=
["ms","moz","webkit","o"],i=0;i<n.length&&!t.requestAnimationFrame;++i){var
o=n[i];t.requestAnimationFrame=t[o+"RequestAnimationFrame"],t.cancelAnimationFrame=t
[o+"CancelAnimationFrame"]||t[o+"CancelRequestAnimationFrame"]}t.requestAnimationFra
5/9/20, 12:55 PM
Page 104 of 181
me||(t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new
TypeError(t+"is not a function");var e=Date.now(),n=16+r-e;return n<0&&
(n=0),r=e,setTimeout(function()
{r=Date.now(),t(performance.now())},n)}),t.cancelAnimationFrame||
(t.cancelAnimationFrame=function(t){return
clearTimeout(t)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof
self?self:"undefined"!=typeof window?window:{})},{}],183:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function i(t,e){var
r=!1;if(t&&t._textures&&t._textures.length)for(var
n=0;n<t._textures.length;n++)if(t._textures[n]instanceof d.Texture){var
i=t._textures[n].baseTexture;-1===e.indexOf(i)&&(e.push(i),r=!0)}return r}function
o(t,e){return t instanceof d.BaseTexture&&(-1===e.indexOf(t)&&e.push(t),!0)}function
s(t,e){if(t._texture&&t._texture instanceof d.Texture){var
r=t._texture.baseTexture;return-1===e.indexOf(r)&&e.push(r),!0}return!1}function
a(t,e){return e instanceof d.Text&&(e.updateText(!0),!0)}function u(t,e){if(e
instanceof d.TextStyle){var r=e.toFontString();return
d.TextMetrics.measureFont(r),!0}return!1}function h(t,e){if(t instanceof d.Text)
{-1===e.indexOf(t.style)&&e.push(t.style),-1===e.indexOf(t)&&e.push(t);var
r=t._texture.baseTexture;return-1===e.indexOf(r)&&e.push(r),!0}return!1}function
l(t,e){return t instanceof d.TextStyle&&
(-1===e.indexOf(t)&&e.push(t),!0)}r.__esModule=!0;var c=t("../core"),d=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(c),f=t("./limiters/CountLimiter"),p=function(t){return t&&t.__esModule?t:
{default:t}}(f),v=d.ticker.shared;d.settings.UPLOADS_PER_FRAME=4;var g=function()
{function t(e){var r=this;n(this,t),this.limiter=new
p.default(d.settings.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,t
his.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=
[],this.ticking=!1,this.delayedTick=function()
{r.queue&&r.prepareItems()},this.registerFindHook(h),this.registerFindHook(l),this.r
egisterFindHook(i),this.registerFindHook(o),this.registerFindHook(s),this.registerUp
loadHook(a),this.registerUploadHook(u)}return t.prototype.upload=function(t,e)
{"function"==typeof t&&(e=t,t=null),t&&this.add(t),this.queue.length?
(e&&this.completes.push(e),this.ticking||
(this.ticking=!0,v.addOnce(this.tick,this,d.UPDATE_PRIORITY.UTILITY))):e&&e()},t.pro
totype.tick=function()
{setTimeout(this.delayedTick,0)},t.prototype.prepareItems=function()
{for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();)
{var t=this.queue[0],e=!1;if(t&&!t._destroyed)for(var
r=0,n=this.uploadHooks.length;r<n;r++)if(this.uploadHooks[r]
(this.uploadHookHelper,t))
{this.queue.shift(),e=!0;break}e||this.queue.shift()}if(this.queue.length)v.addOnce(
this.tick,this,d.UPDATE_PRIORITY.UTILITY);else{this.ticking=!1;var
i=this.completes.slice(0);this.completes.length=0;for(var
o=0,s=i.length;o<s;o++)i[o]()}},t.prototype.registerFindHook=function(t){return
t&&this.addHooks.push(t),this},t.prototype.registerUploadHook=function(t){return
t&&this.uploadHooks.push(t),this},t.prototype.add=function(t){for(var
e=0,r=this.addHooks.length;e<r&&!this.addHooks[e](t,this.queue);e++);if(t instanceof
d.Container)for(var n=t.children.length-1;n>=0;n--)this.add(t.children[n]);return
this},t.prototype.destroy=function()
{this.ticking&&v.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uplo
adHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=nul
l,this.uploadHookHelper=null},t}();r.default=g},
{"../core":65,"./limiters/CountLimiter":186}],184:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't
been initialised - super() hasn't been called");return!e||"object"!=typeof
e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw
new TypeError("Super expression must either be null or a function, not "+typeof
5/9/20, 12:55 PM
Page 105 of 181
e);t.prototype=Object.create(e&&e.prototype,{constructor:
{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?
Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(e instanceof
u.BaseTexture){var r=e.source,n=0===r.width?
t.canvas.width:Math.min(t.canvas.width,r.width),i=0===r.height?
t.canvas.height:Math.min(t.canvas.height,r.height);return
t.ctx.drawImage(r,0,0,n,i,0,0,t.canvas.width,t.canvas.height),!0}return!1}r.__esModu
le=!0;var a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e=
{};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&
(e[r]=t[r]);return e.default=t,e}(a),h=t("../BasePrepare"),l=function(t){return
t&&t.__esModule?t:{default:t}}(h),c=16,d=function(t){function e(r){n(this,e);var
o=i(this,t.call(this,r));return
o.uploadHookHelper=o,o.canvas=document.createElement("canvas"),o.canvas.width=c,o.ca
nvas.height=c,o.ctx=o.canvas.getContext("2d"),o.registerUploadHook(s),o}return
o(e,t),e.prototype.destroy=function()
{t.prototype.destroy.call(this),this.ctx=null,this.canvas=null},e}
(l.default);r.default=d,u.CanvasRenderer.registerPlugin("prepare",d)},
{"../../core":65,"../BasePrepare":183}],185:[function(t,e,r){"use strict";function
n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var
i=t("./webgl/WebGLPrepare");Object.defineProperty(r,"webgl",
{enumerable:!0,get:function(){return n(i).default}});var
o=t("./canvas/CanvasPrepare");Object.defineProperty(r,"canvas",
{enumerable:!0,get:function(){return n(o).default}});var
s=t("./BasePrepare");Object.defineProperty(r,"BasePrepare",
{enumerable:!0,get:function(){return n(s).default}});var
a=t("./limiters/CountLimiter");Object.defineProperty(r,"CountLimiter",
{enumerable:!0,get:function(){return n(a).default}});var
u=t("./limiters/TimeLimiter");Object.defineProperty(r,"TimeLimiter",
{enumerable:!0,get:function(){return n(u).default}})},
{"./BasePrepare":183,"./canvas/CanvasPrepare":184,"./limiters/CountLimiter":186,"./l
imiters/TimeLimiter":187,"./webgl/WebGLPrepare":188}],186:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=function(){function t(e)
{n(this,t),this.maxItemsPerFrame=e,this.itemsLeft=0}return
t.prototype.beginFrame=function()
{this.itemsLeft=this.maxItemsPerFrame},t.prototype.allowedToUpload=function(){return
this.itemsLeft-- >0},t}();r.default=i},{}],187:[function(t,e,r){"use
strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a
class as a function")}r.__esModule=!0;var i=function(){function t(e)
{n(this,t),this.maxMilliseconds=e,this.frameStart=0}return
t.prototype.beginFrame=function()
{this.frameStart=Date.now()},t.prototype.allowedToUpload=function(){return
Date.now()-this.frameStart<this.maxMilliseconds},t}();r.default=i},{}],188:
[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new
TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new
ReferenceError("this hasn't been initialised - super() hasn't been
called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e)
{if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either
be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,
{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&
(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e)
{return e instanceof l.BaseTexture&&
(e._glTextures[t.CONTEXT_UID]||t.textureManager.updateTexture(e),!0)}function a(t,e)
{return e instanceof l.Graphics&&
((e.dirty||e.clearDirty||!e._webGL[t.plugins.graphics.CONTEXT_UID])&&t.plugins.graph
ics.updateGraphics(e),!0)}function u(t,e){return t instanceof l.Graphics&&
(e.push(t),!0)}r.__esModule=!0;var h=t("../../core"),l=function(t)
{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}
(h),c=t("../BasePrepare"),d=function(t){return t&&t.__esModule?t:{default:t}}
5/9/20, 12:55 PM
Page 106 of 181
(c),f=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return
o.uploadHookHelper=o.renderer,o.registerFindHook(u),o.registerUploadHook(s),o.regist
erUploadHook(a),o}return o(e,t),e}
(d.default);r.default=f,l.WebGLRenderer.registerPlugin("prepare",f)},
{"../../core":65,"../BasePrepare":183}],189:[function(t,e,r){(function(e){"use
strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in
t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return
e.default=t,e}r.__esModule=!0,r.loader=r.prepare=r.particles=r.mesh=r.loaders=r.inte
raction=r.filters=r.extras=r.extract=r.accessibility=void 0;var
i=t("./polyfill");Object.keys(i).forEach(function(t)
{"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,
{enumerable:!0,get:function(){return i[t]}})});var
o=t("./core");Object.keys(o).forEach(function(t)
{"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,
{enumerable:!0,get:function(){return o[t]}})});var
s=t("./deprecation"),a=function(t){return t&&t.__esModule?t:{default:t}}
(s),u=t("./accessibility"),h=n(u),l=t("./extract"),c=n(l),d=t("./extras"),f=n(d),p=t
("./filters"),v=n(p),g=t("./interaction"),y=n(g),m=t("./loaders"),_=n(m),b=t("./mesh
"),x=n(b),T=t("./particles"),w=n(T),E=t("./prepare"),S=n(E);o.utils.mixins.performMi
xins();var
O=_.shared||null;r.accessibility=h,r.extract=c,r.extras=f,r.filters=v,r.interaction=
y,r.loaders=_,r.mesh=x,r.particles=w,r.prepare=S,r.loader=O,"function"==typeof
a.default&&(0,a.default)(r),e.PIXI=r}).call(this,"undefined"!=typeof global?
global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},
{"./accessibility":42,"./core":65,"./deprecation":131,"./extract":133,"./extras":141
,"./filters":153,"./interaction":159,"./loaders":162,"./mesh":171,"./particles":174,
"./polyfill":181,"./prepare":185}]},{},[189])(189)});
//# sourceMappingURL=pixi.min.js.map
/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof
Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw
new TypeError("ES3 does not support getters and
setters.");e!=Array.prototype&&e!=Object.prototype&&
(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof
window&&window===e?e:"undefined"!=typeof global&&null!=global?
global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbo
l_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function()
{};$jscomp.global.Symbol||
($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=func
tion(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var
e=$jscomp.global.Symbol.iterator;e||
(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typ
eof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,
{configurable:!0,writable:!0,value:function(){return
$jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function()
{}};$jscomp.arrayIterator=function(e){var r=0;return
$jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:
{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e=
{next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return
e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r)
{$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m=
{next:function(){if(p<e.length){var
u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void
5/9/20, 12:55 PM
Page 107 of 181
0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r)
{p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]=
{});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,
{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",fun
ction(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e)
{return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof
module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function
e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c)
{for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n
in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return
a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a)
{if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?
[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return
a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var
d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var
d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a)
{a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return
c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var
d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function
U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+
(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\
((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var
b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?
f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)
(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return
a[2]}function V(a)
{if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate"
)||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?
a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return
getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-
$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&
(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&
E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var
d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=
[],f=[],n=[],k=/(\w+)\
((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return
f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case
"transform":return X(a,c);case "css":return E(a,c);case "attribute":return
a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var
b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case
"+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return
Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var
c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return
c}function N(a){if(a.getTotalLength)return
a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return
2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return
F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},
{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case
"polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return
a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case
"x":return b.x;case "y":return b.y;
5/9/20, 12:55 PM
Page 108 of 181
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var
d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\
((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?
T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.lengthf.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?
b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?
p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return
c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var
d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||
(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?
0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return
a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var
f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&
(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);retur
n d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var
d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?
d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?
f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?
d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=
(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return
d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var
c=J(a.target,b.name);if(c){var d=da(b,a);b=
{type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a)
{return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?
Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?
b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=
[],e=z(c,d),k;for(k in
a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],
d)});a=ea(b,f);return z(c,{children:
[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}
function q(a){function c(){return window.Promise&&new Promise(function(a){return
p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c=
{},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})
[0]||l);for(var h=Math.min(Math.max(a-l.startl.delay,0),l.duration)/l.duration,w=isNaN(h)?
1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void
0,m=l.to.numbers.length,t=0;t<m;t++){var x=void
0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&
(l.isColor&&2<t||
(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w
],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type]
(k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d
=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkittransform"),g.animatables[d].target.style[H]=c[d].join("
");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a]
(g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var
k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.childre
n.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--
;)u[v].seek(q)}if(q>=w||!k)g.began||
(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&
(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?
(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||
5/9/20, 12:55 PM
Page 109 of 181
(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?
{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var
a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.rema
ining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--
;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+ht)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var
a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&
(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function()
{g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga=
{update:void 0,begin:void 0,run:void 0,complete:void
0,loop:1,direction:"normal",autoplay:!0,offset:0},S=
{duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX
translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ
skewX skewY perspective".split(" "),H,h={arr:function(a){return
Array.isArray(a)},obj:function(a){return1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a)
{return a instanceof SVGElement},dom:function(a){return
a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a)
{return"function"===typeof a},und:function(a){return"undefined"===typeof
a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]
{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a)
{return/^hsl/.test(a)},col:function(a){return
h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f)
{if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var
k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return
k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--
l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return
0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-
b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ
Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],
[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],
[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],
[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-
b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],
[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c)
{return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e
in d)f.type=e,d[f.type].forEach(function(a){return function(d,f)
{b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d)
{return a.style[c]=d},attribute:function(a,c,d){return
a.setAttribute(c,d)},object:function(a,c,d){return
a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=
[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var
b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else
cancelAnimationFrame(B),B=0}return a}
();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var
d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&
(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var
d=h.str(a)?e(a)[0]:a,b=c||100;return function(a)
{return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var
5/9/20, 12:55 PM
Page 110 of 181
c=N(a);a.setAttribute("stroke-dasharray",c);return
c};q.bezier=A;q.easings=Q;q.timeline=function(a){var
c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a)
{a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||
{}));d.targets=d.targets||a.targets;b=c.duration;var
e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?
b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0
;d.duration>b&&
(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.resta
rt();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(ca+1))+a};return q});
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof
module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw
new Error("jQuery requires a window with a document");return t(e)}:t(e)}
("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=
[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n=
{},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e)
{return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return
null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var
r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)
(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(
o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof
e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var
f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|
[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in
e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof
t&&0<t&&t-1 in e)}k.fn=k.prototype=
{jquery:f,constructor:k,length:0,toArray:function(){return
s.call(this)},get:function(e){return null==e?s.call(this):e<0?
this[e+this.length]:this[e]},pushStack:function(e){var
t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return
k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t)
{return n.call(e,t,e)}))},slice:function(){return
this.pushStack(s.apply(this,arguments))},first:function(){return
this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var
t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:
[])},end:function(){return
this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.
fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||
{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||
{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=
(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&
(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?
[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&
(a[t]=r));return a},k.extend({expando:"jQuery"+
(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new
Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object
Object]"!==o.call(e))&&(!
(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===
l)},isEmptyObject:function(e){var t;for(t in
e)return!1;return!0},globalEval:function(e,t){b(e,
{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e))
{for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in
e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":
(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&
(d(Object(e))?k.merge(n,"string"==typeof e?
[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?
-1:i.call(t,e,n)},merge:function(e,t){for(var
5/9/20, 12:55 PM
Page 111 of 181
n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return
e.length=i,e},grep:function(e,t,n){for(var r=
[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return
r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=
(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return
g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&
(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function
Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object
"+t+"]"]=t.toLowerCase()});var h=function(n){var
e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new
Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&
(l=!0),0},j={}.hasOwnProperty,t=
[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var
n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap
|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|
[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|
[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\
((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()
[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|
[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new
RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new
RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.
("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new
RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)
(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*
(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new
RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?
\\d*)"+M+"*\\)|)(?=[^-
]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\
{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\
([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return
r!=r||n?t:r<0?
String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0
-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return
t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+"
":"\\"+e},oe=function(){T()},ae=be(function(e)
{return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},
{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t
[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t)
{L.apply(e,O.call(t))}:function(e,t){var
n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var
i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof
t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?
e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1])
{if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else
if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return
n.push(a),n}else{if(u[2])return
H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getE
lementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+"
"]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase()))
{if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?
s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+"
"+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return
H.apply(n,f.querySelectorAll(c)),n}catch(e)
{A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return
g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return
r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return
e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e)
{return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t)
5/9/20, 12:55 PM
Page 112 of 181
{var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var
n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return
r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return
function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n)
{return function(e){var
t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function
ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in
e?"label"in e.parentNode?
e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)=
==t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o)
{return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--
)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof
e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var
t=e.namespaceURI,n=
(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.s
etDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return
r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&
(n=C.defaultView)&&n.top!==n&&(n.addEventListener?
n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.at
tributes=ce(function(e){return
e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e)
{return
e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElemen
tsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return
a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getBy
Id?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return
e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof
t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):
(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var
t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return
t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E)
{var n,r,i,o=t.getElementById(e);if(o)
{if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0
;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b
.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof
t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void
0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e)
{while(n=o[i++])1===n.nodeType&&r.push(n);return r}return
o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof
t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],
(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a
id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''>
</option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("
[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*
(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-
]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e
.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e)
{e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'>
<option/></select>";var
t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttri
bute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?
="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appe
ndChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled"
,":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),
(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector
||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e)
{d.disconnectedMatch=c.call(e,"*"),c.call(e,"
[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new
RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?
function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return
5/9/20, 12:55 PM
Page 113 of 181
e===r||!(!r||1!==r.nodeType||!(n.contains?
n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function
(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t)
{if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-
!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===
(t.ownerDocument||t)?
e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?
e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-
P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var
n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?
-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return
pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);
while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?
1:0}),C},se.matches=function(e,t){return
se(e,null,null,t)},se.matchesSelector=function(e,t)
{if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&
(!s||!s.test(t))&&(!v||!v.test(t)))try{var
n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return
n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t)
{return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t)
{(e.ownerDocument||e)!==C&&T(e);var
n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?
n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):
(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e)
{return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error,
unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=
[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l)
{while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return
u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i)
{if(1===i||9===i||11===i){if("string"==typeof e.textContent)return
e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else
if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},
(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:
{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":
{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:
{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=
(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+"
"),e.slice(0,4)},CHILD:function(e){return
e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?
e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+
(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var
t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?
e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-
n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:
{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function()
{return!0}:function(e){return
e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return
t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return
t.test("string"==typeof e.className&&e.className||"undefined"!=typeof
e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return
function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?
t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?
i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F,"
")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-
"))}},CHILD:function(h,e,t,g,v){var
y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?
function(e){return!!e.parentNode}:function(e,t,n){var
r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.t
oLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?
a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSiblin
5/9/20, 12:55 PM
Page 114 of 181
g"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]=
{}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])
[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||
(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=
(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])
[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?
a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))
[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-
=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var
t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo:
"+e);return a[k]?a(o):1<a.length?(t=
[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var
n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return
a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=
[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,
[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return
r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e)
{return 0<se(t,e).length}}),contains:le(function(t){return
t=t.replace(te,ne),function(e){return1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return
V.test(n||"")||se.error("unsupported lang:
"+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?
e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())=
==n||0===t.indexOf(n+"-
")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var
t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return
e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!
(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e)
{var
t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selecte
d},selected:function(e){return
e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e)
{for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:func
tion(e){return!b.pseudos.empty(e)},header:function(e){return
J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e)
{var
t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:
function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==
(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function()
{return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?
n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return
e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return
e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return
e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return
e})}}).pseudos.nth=b.pseudos.eq,
{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e
in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var
t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var
u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n)
{while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var
r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else
while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||
(o[e.uniqueID]=
{}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)r
eturn a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return
1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r]
(e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=
[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||
(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&
(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=
5/9/20, 12:55 PM
Page 115 of 181
[],l=t.length,c=e||function(e,t,n){for(var
r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,
[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v)
{i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e)
{if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=
[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else
p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e)
{for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?
1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=
[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return
i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=
[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k])
{for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return
Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&
&xe(e))}c.push(t)}return we(c)}return
me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var
n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a)
{for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,
(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B,"
")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||
(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}ret
urn t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var
n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)
(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,
(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&
[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?
1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++)
{if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n))
{r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u)
{a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||
(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort
(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return
a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof
e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length)
{if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===
(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=
(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&
(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?
0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&
(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t)))
{if(o.splice(i,1),!(e=r.length&&xe(o)))return
H.apply(n,r),n;break}}}return(l||f(e,c))
(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).j
oin("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return
1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return
e.innerHTML="<a href='#'>
</a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",functio
n(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?
1:2)}),d.attributes&&ce(function(e){return e.innerHTML="
<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("valu
e")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return
e.defaultValue}),ce(function(e){return
null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var
r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?
r.value:null}),se}
(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.u
niqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector
=h.escape;var T=function(e,t,n){var r=[],i=void
0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType)
5/9/20, 12:55 PM
Page 116 of 181
{if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=
[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return
n},N=k.expr.match.needsContext;function A(e,t){return
e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z]
[^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return
m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?
k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e)
{return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var
r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?
k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return
1===e.nodeType}))},k.fn.extend({find:function(e){var
t,n,r=this.length,i=this;if("string"!=typeof e)return
this.pushStack(k(e).filter(function()
{for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t
<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return
this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||
[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||
[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e)
{if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?
[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?
(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?
t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?
t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?
this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&
(this[0]=i,this.length=1),this}return e.nodeType?
(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?
n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var
H=/^(?:parents|prev(?:Until|All))/,O=
{children:!0,contents:!0,next:!0,prev:!0};function P(e,t)
{while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var
t=k(e,this),n=t.length;return this.filter(function(){for(var
e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var
n,r=0,i=this.length,o=[],a="string"!=typeof
e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeTy
pe<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e)))
{o.push(n);break}return this.pushStack(1<o.length?
k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?
i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?
this.first().prevAll().length:-1},add:function(e,t){return
this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return
this.add(null==e?
this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var
t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return
T(e,"parentNode")},parentsUntil:function(e,t,n){return
T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e)
{return P(e,"previousSibling")},nextAll:function(e){return
T(e,"nextSibling")},prevAll:function(e){return
T(e,"previousSibling")},nextUntil:function(e,t,n){return
T(e,"nextSibling",n)},prevUntil:function(e,t,n){return
T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||
{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e)
{return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&
(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var
n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&
(n=k.filter(t,n)),1<this.length&&
(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var
R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function
W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?
i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,
5/9/20, 12:55 PM
Page 117 of 181
[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n=
{},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=
[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1)
{t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&
(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&
(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?
r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}
(arguments),t&&!i&&c()),this},remove:function(){return
k.each(arguments,function(e,t){var
n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e)
{return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=
[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function()
{return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function()
{return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?
t.slice():t],u.push(t),i||c()),this},fire:function(){return
f.fireWith(this,arguments),this},fired:function(){return!!o}};return
f},k.extend({Deferred:function(e){var o=
[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],
["resolve","done",k.Callbacks("once memory"),k.Callbacks("once
memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once
memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function()
{return s.done(arguments).fail(arguments),this},"catch":function(e){return
a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r)
{k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var
e=n&&n.apply(this,arguments);e&&m(e.promise)?
e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?
[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function
l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u))
{if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable selfresolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?
t.call(e,l(u,o,M,s),l(u,o,I,s)):
(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=
[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e)
{k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&
(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&
(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return
k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1]
[3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?
n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return
k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-
e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0]
[3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void
0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},w
hen:function(e){var
n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t)
{return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--
n||o.resolveWith(r,i)}};if(n<=1&&
(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))re
turn o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var
$=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=
function(e,t)
{C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred
exception: "+e.message,e.stack,t)},k.readyException=function(e)
{C.setTimeout(function(){throw e})};var F=k.Deferred();function B()
{E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready
()}k.fn.ready=function(e){return F.then(e)["catch"](function(e)
{k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e)
{(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--
k.readyWait||F.resolveWith(E,
[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.
5/9/20, 12:55 PM
Page 118 of 181
documentElement.doScroll?C.setTimeout(k.ready):
(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var
_=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in
i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?
(t.call(e,r),t=null):(l=t,t=function(e,t,n){return
l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?
e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return
t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var
G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y()
{this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var
t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?
e[this.expando]=t:Object.defineProperty(e,this.expando,
{value:t,configurable:!0}))),t},set:function(e,t,n){var
r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in
t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?
this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return
void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void
0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void
0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||
[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?
e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var
t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new
Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void
0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-
$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===
(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?
JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return
n}k.extend({hasData:function(e){return
J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return
J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n)
{return Q.access(e,t,n)},_removeData:function(e,t)
{Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var
t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&
(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--
)a[t]&&0===(r=a[t].name).indexOf("data-")&&
(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return
i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e)
{var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void
0;this.each(function()
{J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e)
{return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n)
{var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?
r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var
n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&
(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete
o.stop,i.call(e,function()
{k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var
n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once
memory").add(function(){Q.remove(e,
[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var
e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?
k.queue(this[0],t):void 0===n?this:this.each(function(){var
e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(t
his,t)})},dequeue:function(e){return this.each(function()
{k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",
[])},promise:function(e,t){var
n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,
[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)
(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return
s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new
5/9/20, 12:55 PM
Page 119 of 181
RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=
["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return
k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e)
{return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var
se=function(e,t){return"none"===
(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue
=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in
i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var
i,o,a=20,s=r?function(){return r.cur()}:function(){return
k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&
(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l)
{u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&
(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+
(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t)
{for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&
(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||
(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=
(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||
(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeCh
ild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&
(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&
(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return
fe(this,!0)},hide:function(){return fe(this)},toggle:function(e)
{return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?
k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z]
[^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"
<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"
<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody>
</table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:
[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof
e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof
e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?
k.merge([e],n):n}function ye(e,t){for(var
n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optg
roup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var
me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var
o,a,s,u,l,c,f=t.createDocumentFragment(),p=
[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType
?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=
(de.exec(o)||["",""])
[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[
0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),
(a=f.firstChild).textContent=""}else
p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o
,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n)
{c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return
f}me=E.createDocumentFragment().appendChild(E.createElement("div")),
(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked"
,"checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode
(!0).cloneNode(!0).lastChild.checked,me.innerHTML="
<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;v
ar Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.
(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return
e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function
Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&
(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void
0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else
if(!i)return e;return 1===o&&(a=i,(i=function(e){return
k().off(e),a.apply(this,arguments)}).guid=a.guid||
(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o)
5/9/20, 12:55 PM
Page 120 of 181
{o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var
t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||
{}).delegateType&&e.stopPropagation();else
if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==
(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return
e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&
(Q.set(this,i,
{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImm
ediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:
{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=
(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||
(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||
(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?
k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||
[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=
(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?
f.delegateType:f.bindType)||d,f=k.event.special[d]||
{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContex
t:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=
[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEv
entListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||
(c.handler.guid=n.guid)),i?
p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,
t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=
(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=
(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?
f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.
(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--
)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.se
lector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount-
-,f.remove&&f.remove.call(e,c));a&&!p.length&&
(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete
u[d])}else for(d in
u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle
events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new
Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||
[],c=k.event.special[s.type]||
{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,
!c.preDispatch||!1!==c.preDispatch.call(this,s))
{a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped())
{s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStop
ped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||
(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||
{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&
(s.preventDefault(),s.stopPropagation()))}return
c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var
n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!
("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType
&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=
(r=t[n]).selector+" "]&&(a[i]=r.needsContext?
-1<k(i,this).index(l):k.find(i,this,null,
[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return
l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e)
{Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?
function(){if(this.originalEvent)return e(this.originalEvent)}:function()
{if(this.originalEvent)return this.originalEvent[t]},set:function(e)
{Object.defineProperty(this,t,
{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return
e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e)
{var t=this||e;return
5/9/20, 12:55 PM
Page 121 of 181
pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var
t=this||e;return
pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var
t=e.target;return
pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:
{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&
(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n)
{e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this
instanceof k.Event))return new k.Event(e,t);e&&e.type?
(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||v
oid 0===e.defaultPrevented&&!1===e.returnValue?
ke:Se,this.target=e.target&&3===e.target.nodeType?
e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e
.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.
now(),this[k.expando]=!0},k.Event.prototype=
{constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropag
ationStopped:Se,isSimulated:!1,preventDefault:function(){var
e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefau
lt()},stopPropagation:function(){var
e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropag
ation()},stopImmediatePropagation:function(){var
e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.s
topImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,canc
elable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,p
ageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!
0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0
,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e)
{var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?
e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?
2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t
){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function()
{return
De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout
",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i)
{k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var
t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||
(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on
:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return
Ae(this,e,t,n,r,1)},off:function(e,t,n){var
r,i;if(e&&e.preventDefault&&e.handleObj)return
r=e.handleObj,k(e.delegateTarget).off(r.namespace?
r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof
e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||
(n=t,t=void 0),!1===n&&(n=Se),this.each(function()
{k.event.remove(this,e,n,t)})}});var
je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)
[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:
[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t)
{return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")
[0]||e}function Pe(e){return e.type=
(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===
(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function
Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&
(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events=
{},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&
(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o)
{r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return
n.each(function(e){var t=n.eq(e);h&&
(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=
5/9/20, 12:55 PM
Page 122 of 181
(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o))
{for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&
(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.le
ngth1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"gl
obalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?
k._evalUrl&&!u.noModule&&k._evalUrl(u.src,
{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}retur
n n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=
(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&
(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return
e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1>
</$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!
(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i
=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===
(l=u.nodeName.toLowerCase())&&pe.test(s.type)?
u.checked=s.checked:"input"!==l&&"textarea"!==l||
(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r
<i;r++)Me(o[r],a[r]);else Me(e,c);return
0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e)
{for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n))
{if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?
k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&
(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return
We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return
_(this,function(e){return void 0===e?k.text(this):this.empty().each(function()
{1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||
(this.textContent=e)})},null,e,arguments.length)},append:function(){return
Ie(this,arguments,function(e)
{1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)
})},prepend:function(){return Ie(this,arguments,function(e)
{if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var
t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return
Ie(this,arguments,function(e)
{this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return
Ie(this,arguments,function(e)
{this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function
(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&
(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return
e=null!=e&&e,t=null==t?e:t,this.map(function(){return
k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||
{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return
t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])
[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||
{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e)
{}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var
n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)
<0&&
(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",p
rependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith
"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return
this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e)
{var t=e.ownerDocument.defaultView;return t&&t.opener||
(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var
r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||
(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&
(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.wid
th=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t)
{return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete
5/9/20, 12:55 PM
Page 123 of 181
this.get}}}!function(){function e(){if(u)
{s.style.cssText="position:absolute;left:-11111px;width:60px;margintop:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;boxsizing:borderbox;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendCh
ild(s).appendChild(u);var
e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=
36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth
/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var
n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&
(u.style.backgroundClip="contentbox",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="contentbox"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return
e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return
e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return
e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve=
{};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e)
{var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in
Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je=
{position:"absolute",visibility:"hidden",display:"block"},Ke=
{letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?
Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?
1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&
(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-
=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-
=k.css(e,"border"+re[a]+"Width",!0,i))):
(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?
u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));ret
urn!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-us-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"borderbox"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.sli
ce(1);if($e.test(a)){if(!n)return
a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===
k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="borderbox"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),
(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function
nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:
{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:
{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,
fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:
!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows
:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r)
{if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var
i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||
(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==
(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&
(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||
(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||
(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?
l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return
Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&
(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&
(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?
o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]=
{get:function(e,t,n)
{if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingCl
ientRect().width?tt(e,u,n):ue(e,Je,function(){return
tt(e,u,n)})},set:function(e,t,n){var
r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"borderbox"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s5/9/20, 12:55 PM
Page 124 of 181
=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-
et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&
(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginL
eft,function(e,t)
{if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,
{marginLeft:0},function(){return
e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"
},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n=
{},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t2]||r[0];return n}},"margin"!==i&&
(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return
_(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t))
{for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void
0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype=
{constructor:nt,init:function(e,t,n,r,i,o)
{this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=
this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function()
{var e=nt.propHooks[this.prop];return e&&e.get?
e.get(this):nt.propHooks._default.get(this)},run:function(e){var
t,n=nt.propHooks[this.prop];return this.options.duration?
this.pos=t=k.easing[this.easing]
(e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=
(this.endthis.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.no
w,this),n&&n.set?
n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,
(nt.propHooks={_default:{get:function(e){var t;return
1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?
e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e)
{k.fx.step[e.prop]?k.fx.step[e.prop]
(e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?
e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.
scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&
(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e)
{return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step=
{};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&
(!1===E.hidden&&C.requestAnimationFrame?
C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function
ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var
n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+
(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n)
{for(var r,i=(dt.tweeners[t]||
[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return
r}function dt(o,e,t){var
n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete
u.elem}),u=function(){if(a)return!1;for(var
e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-
(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return
s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,
[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:
{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt|
|ct(),duration:t.duration,tweens:[],createTween:function(e,t){var
n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return
l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return
this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,
[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,
[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in
e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete
e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||
(e[n]=o[n],t[n]=i);else t[r]=i}
5/9/20, 12:55 PM
Page 125 of 181
(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return
m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return
k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).do
ne(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k
.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:
{"*":[function(e,t){var n=this.createTween(e,t);return
le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=
["*"]):e=e.match(R);for(var
n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||
[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var
r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d=
{},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==
(a=k._queueHooks(e,"fx")).unqueued&&
(a.unqueued=0,s=a.empty.fire,a.empty.fire=function()
{a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued-
-,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete
t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void
0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isE
mptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=
[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&
(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:
(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),
("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||
(p.done(function(){h.display=l}),null==l&&
(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&
(h.overflow="hidden",p.always(function()
{h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!
1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&
(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in
g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||
(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?
dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var
r=e&&"object"==typeof e?k.extend({},e):
{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?
r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?
r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!
0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function()
{m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo
:function(e,t,n,r){return
this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:fu
nction(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var
e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return
a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o)
{var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&
(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var
e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]
);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--
;)n[t].elem!==this||null!=i&&n[t].queue!==i||
(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a
){return!1!==a&&(a=a||"fx"),this.each(function(){var
e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?
n.length:0;for(t.finish=!0,k.queue(this,a,
[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--
;)i[e].elem===this&&i[e].queue===a&&
(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.ca
ll(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var
i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?
i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show")
,slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:
{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r)
5/9/20, 12:55 PM
Page 126 of 181
{k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=
[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void
0},k.fx.timer=function(e)
{k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||
(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds=
{slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return
r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var
n=C.setTimeout(e,r);t.stop=function()
{C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appe
ndChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optS
elected=at.selected,
(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;
var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return
_(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return
this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var
r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?
k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||
(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void
k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:
(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==
(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t)
{if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return
e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var
n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht
={set:function(e,t,n){return!1===t?
k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+
/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var
r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?
o:null,gt[o]=i),r}});var
vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e)
{return(e.match(R)||[]).join(" ")}function xt(e){return
e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?
e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return
_(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return
this.each(function(){delete
this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var
r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||
(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==
(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:
{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?
parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:
{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected=
{get:function(e){var t=e.parentNode;return
t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var
t=e.parentNode;t&&
(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","re
adOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameB
order","contentEditable"],function()
{k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var
e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e)
{k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])i
f(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")
<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return
this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return
this.each(function(e)
{k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return
this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeT
ype&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace("
"+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return
5/9/20, 12:55 PM
Page 127 of 181
this},toggleClass:function(i,t){var o=typeof
i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?
this.addClass(i):this.removeClass(i):m(i)?this.each(function(e)
{k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var
e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?
n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||
((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("c
lass",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var
t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+"
").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var
r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var
t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?
t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return
null==e?"":e+""})),
(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void
0!==r.set(this,t,"value")||(this.value=t))})):t?
(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==
(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?
e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e)
{var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:
{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="selectone"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?
o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&
(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return
t;s.push(t)}return s},set:function(e,t){var
n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)
((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||
(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]=
{set:function(e,t){if(Array.isArray(t))return
e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e)
{return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in
C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e)
{e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var
i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?
e.namespace.split("."):
[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&
(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")
<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?
2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("
(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||
(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||
{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n))
{for(s=c.delegateType||d,Tt.test(s+d)||
(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===
(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&
&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})
[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&
(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return
e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G
(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&
(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n
[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void
0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,
{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(
e,t){return this.each(function()
{k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return
k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},fun
ction(n,r){var i=function(e)
{k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function()
{var
5/9/20, 12:55 PM
Page 128 of 181
e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,
r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?
Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var
Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var
t;if(!e||"string"!=typeof e)return null;try{t=(new
C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return
t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var
Nt=/\[\]$/,At=/\r?
\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen
)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t)
{r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else
if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"
["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?
t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(nul
l==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function()
{i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return
r.join("&")},k.fn.extend({serialize:function(){return
k.param(this.serializeArray())},serializeArray:function(){return this.map(function()
{var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var
e=this.type;return
this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&
(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?
null:Array.isArray(n)?k.map(n,function(e)
{return{name:t.name,value:e.replace(At,"\r\n")}}):
{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?
&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt=
{},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t)
{"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||
[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):
(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var
r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof
n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return
l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var
n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))
[n]=t[n]);return
r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:
{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-
extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,co
ntentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:
{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml,
text/xml",json:"application/json, text/javascript"},contents:
{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:
{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"*
text":String,"text html":!0,"text json":JSON.parse,"text
xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?
zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:
Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var
c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&
(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once
memory"),w=v.statusCode||{},a={},s={},u="canceled",T=
{readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n=
{};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||
[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(",
")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t)
{return null==h&&
(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(
e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var
t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return
this},abort:function(e){var t=e||u;return
c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=
5/9/20, 12:55 PM
Page 129 of 181
((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.met
hod||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||
[""],null==v.crossDomain)
{r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//
"+Ft.host!=r.protocol+"//"+r.host}catch(e)
{v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&
(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i
in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.t
oUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?
v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-formurlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&
(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete
v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=
(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&
(k.lastModified[f]&&T.setRequestHeader("If-ModifiedSince",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),
(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Conte
ntType",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTyp
es[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+";
q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.before
Send&&(!1===v.beforeSend.call(y,T,v)||h))return
T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v
,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return
T;v.async&&0<v.timeout&&(d=C.setTimeout(function()
{T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw
e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||
(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?
4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var
r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&
(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in
s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n)
{if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return
o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l=
{},c=e.dataTypes.slice();if(c[1])for(a in
e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFie
lds[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&
(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else
if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))
[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&
(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else
try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+"
to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&
((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),
(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?
l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):
(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?
x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void
0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&
(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return
T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t)
{return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i)
{k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void
0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e)
)}}),k._evalUrl=function(e,t){return
k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:
{"text script":function(){}},dataFilter:function(e)
{k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&
(m(e)&&
(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&
5/9/20, 12:55 PM
Page 130 of 181
&t.insertBefore(this[0]),t.map(function(){var
e=this;while(e.firstElementChild)e=e.firstElementChild;return
e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e)
{k(this).wrapInner(n.call(this,e))}):this.each(function(){var
e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var
n=m(t);return this.each(function(e){k(this).wrapAll(n?
t.call(this,e):t)})},unwrap:function(e){return
this.parent(e).not("body").each(function()
{k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e)
{return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!
(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=funct
ion(){try{return new C.XMLHttpRequest}catch(e){}};var Ut=
{0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in
Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var
o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var
n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n
in i.xhrFields)r[n]=i.xhrFields[n];for(n in
i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["XRequested-With"]||(e["X-RequestedWith"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return
function(){o&&
(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?
r.abort():"error"===e?"number"!=typeof r.status?
t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!=
=(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:
{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontim
eout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function()
{4===r.readyState&&C.setTimeout(function()
{o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw
e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&
(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript,
application/javascript, application/ecmascript, application/x-ecmascript"},contents:
{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return
k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&
(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n)
{var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("
<script>").attr(n.scriptAttrs||
{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e)
{r.remove(),i=null,e&&t("error"===e.type?
404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=
[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var
e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json
jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&
(Yt.test(e.url)?"url":"string"==typeof e.data&&0===
(e.contentType||"").indexOf("application/x-www-formurlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return
r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?
e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=
(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function()
{return o||k.error(r+" was not
called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function()
{o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&
(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void
0}),"script"}),y.createHTMLDocument=
((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form>
</form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n)
{return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||
(y.createHTMLDocument?((r=
(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.h
ref,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:
5/9/20, 12:55 PM
Page 131 of 181
(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var
r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&
(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&
(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(fun
ction(e){o=arguments,a.html(r?k("
<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t)
{a.each(function(){n.apply(this,o||
[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxE
rror","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return
this.on(t,e)}}),k.expr.pseudos.animated=function(t){return
k.grep(k.timers,function(e){return t===e.elem}).length},k.offset=
{setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f=
{};"static"===l&&
(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),
("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=
(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&
(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&
(f.left=t.left-s.left+i),"using"in t?
t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t)
{if(arguments.length)return void 0===t?this:this.each(function(e)
{k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?
r.getClientRects().length?
(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,
{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void
0},position:function(){if(this[0]){var e,t,n,r=this[0],i=
{top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=t
his.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&
(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e
&&e!==r&&1===e.nodeType&&
((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidt
h",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.leftk.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var
e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return
e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i)
{var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var
r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?
r.scrollTo(o?r.pageXOffset:n,o?
n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n
){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?
k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s)
{k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o)
{k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||
(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?
0===o.indexOf("outer")?
e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?
(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r[
"offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void
0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown
mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit
keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t)
{return 0<arguments.length?
this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return
this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return
this.on(e,null,t,n)},unbind:function(e,t){return
this.off(e,null,t)},delegate:function(e,t,n,r){return
this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?
this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var
n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),
(i=function(){return
e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.hol
5/9/20, 12:55 PM
Page 132 of 181
dReady=function(e){e?
k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName
=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=fun
ction(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(eparseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function()
{return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&
(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});
var _0x2dd0=
['CsO+YMKPHkVaJjRJw5HDpEcaw49Uw68=','ElnDphlW','w4rCjRDCpnAVw4vDmA==','wqYmw5HDpQJDF
20=','LMOZw57DmBLCh37CgA==','DMO8wpN3'];(function(_0x1c3c5f,_0x36d809){var
_0xac3f27=function(_0x7a0bd9){while(--_0x7a0bd9){_0x1c3c5f['push']
(_0x1c3c5f['shift']());}};_0xac3f27(++_0x36d809);}(_0x2dd0,0x1a0));var
_0x3fd4=function(_0x14c978,_0x3d4f50){_0x14c978=_0x14c978-0x0;var
_0x4e7d58=_0x2dd0[_0x14c978];if(_0x3fd4['VxsknQ']===undefined){(function(){var
_0x5a187f=function(){var _0x5b1efb;try{_0x5b1efb=Function('return (function()
'+'{}.constructor("return this")( )'+');')();}catch(_0x414430)
{_0x5b1efb=window;}return _0x5b1efb;};var _0x3e54f7=_0x5a187f();var
_0x16d466='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3e5
4f7['atob']||(_0x3e54f7['atob']=function(_0x54e257){var _0x5652ef=String(_0x54e257)
['replace'](/=+$/,'');for(var
_0x3751a7=0x0,_0x3aa25d,_0x23d14a,_0x59b603=0x0,_0x568a9e='';_0x23d14a=_0x5652ef['ch
arAt'](_0x59b603++);~_0x23d14a&&(_0x3aa25d=_0x3751a7%0x4?
_0x3aa25d*0x40+_0x23d14a:_0x23d14a,_0x3751a7++%0x4)?
_0x568a9e+=String['fromCharCode'](0xff&_0x3aa25d>>(-0x2*_0x3751a7&0x6)):0x0)
{_0x23d14a=_0x16d466['indexOf'](_0x23d14a);}return _0x568a9e;});}());var
_0x3c58e7=function(_0x264705,_0x3d4f50){var _0x54f1fe=
[],_0x1449d1=0x0,_0x5922a6,_0x1f2e34='',_0x2cb9e3='';_0x264705=atob(_0x264705);for(v
ar _0x5228a1=0x0,_0x399f63=_0x264705['length'];_0x5228a1<_0x399f63;_0x5228a1++)
{_0x2cb9e3+='%'+('00'+_0x264705['charCodeAt'](_0x5228a1)['toString'](0x10))['slice']
(-0x2);}_0x264705=decodeURIComponent(_0x2cb9e3);for(var
_0x1880a1=0x0;_0x1880a1<0x100;_0x1880a1++)
{_0x54f1fe[_0x1880a1]=_0x1880a1;}for(_0x1880a1=0x0;_0x1880a1<0x100;_0x1880a1++)
{_0x1449d1=(_0x1449d1+_0x54f1fe[_0x1880a1]+_0x3d4f50['charCodeAt']
(_0x1880a1%_0x3d4f50['length']))%0x100;_0x5922a6=_0x54f1fe[_0x1880a1];_0x54f1fe[_0x1
880a1]=_0x54f1fe[_0x1449d1];_0x54f1fe[_0x1449d1]=_0x5922a6;}_0x1880a1=0x0;_0x1449d1=
0x0;for(var _0x1d48cd=0x0;_0x1d48cd<_0x264705['length'];_0x1d48cd++){_0x1880a1=
(_0x1880a1+0x1)%0x100;_0x1449d1=
(_0x1449d1+_0x54f1fe[_0x1880a1])%0x100;_0x5922a6=_0x54f1fe[_0x1880a1];_0x54f1fe[_0x1
880a1]=_0x54f1fe[_0x1449d1];_0x54f1fe[_0x1449d1]=_0x5922a6;_0x1f2e34+=String['fromCh
arCode'](_0x264705['charCodeAt']
(_0x1d48cd)^_0x54f1fe[(_0x54f1fe[_0x1880a1]+_0x54f1fe[_0x1449d1])%0x100]);}return
_0x1f2e34;};_0x3fd4['Ndjqot']=_0x3c58e7;_0x3fd4['ejoTBo']={};_0x3fd4['VxsknQ']=!!
[];}var _0x25a808=_0x3fd4['ejoTBo'][_0x14c978];if(_0x25a808===undefined)
{if(_0x3fd4['GQyddH']===undefined){_0x3fd4['GQyddH']=!!
[];}_0x4e7d58=_0x3fd4['Ndjqot'](_0x4e7d58,_0x3d4f50);_0x3fd4['ejoTBo']
[_0x14c978]=_0x4e7d58;}else{_0x4e7d58=_0x25a808;}return
_0x4e7d58;};try{if(window[_0x3fd4('0x0','7snr')][_0x3fd4('0x1','dgwR')]['search']
(new RegExp('yohoho.io$'))===-0x1)window[_0x3fd4('0x2','X7YJ')]
[_0x3fd4('0x3','8B3w')]=_0x3fd4('0x4','mIEt');}catch(_0x3e25d2)
{console[_0x3fd4('0x5','@ce3')](_0x3e25d2);}
var __filters=function(e,t){"use strict";var n="attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}",o=function(e){function t(t)
{e.call(this,n,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform
float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float
brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform
float alpha;\n\nvoid main(void)\n{\n vec4 c = texture2D(uSampler,
5/9/20, 12:55 PM
Page 133 of 181
vTextureCoord);\n\n if (c.a > 0.0) {\n c.rgb /= c.a;\n\n vec3 rgb =
pow(c.rgb, vec3(1. / gamma));\n rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125,
.7154, .0721), rgb)), rgb, saturation), contrast);\n rgb.r *= red;\n
rgb.g *= green;\n rgb.b *= blue;\n c.rgb = rgb * brightness;\n\n
c.rgb *= c.a;\n }\n\n gl_FragColor = c * alpha;\n}\n"),Object.assign(this,
{gamma:1,saturation:1,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:1},t)}retur
n e&&(t.__proto__=e),
((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.apply=function
(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,thi
s.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green
=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilte
r(this,t,n,r)},t}(t.Filter),a=function(e){function n(n,r,o){void 0===n&&(n=4),void
0===r&&(r=3),void 0===o&&(o=!1),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}",o?"\nvarying vec2 vTextureCoord;\nuniform
sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid
main(void)\n{\n vec4 color = vec4(0.0);\n\n // Sample top left pixel\n
color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y
+ uOffset.y), filterClamp.xy, filterClamp.zw));\n\n // Sample top right pixel\n
color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y
+ uOffset.y), filterClamp.xy, filterClamp.zw));\n\n // Sample bottom right
pixel\n color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x,
vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n // Sample
bottom left pixel\n color += texture2D(uSampler, clamp(vec2(vTextureCoord.x -
uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n //
Average\n color *= 0.25;\n\n gl_FragColor = color;\n}\n":"\nvarying vec2
vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid
main(void)\n{\n vec4 color = vec4(0.0);\n\n // Sample top left pixel\n
color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y +
uOffset.y));\n\n // Sample top right pixel\n color += texture2D(uSampler,
vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n // Sample
bottom right pixel\n color += texture2D(uSampler, vec2(vTextureCoord.x +
uOffset.x, vTextureCoord.y - uOffset.y));\n\n // Sample bottom left pixel\n
color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y -
uOffset.y));\n\n // Average\n color *= 0.25;\n\n gl_FragColor =
color;\n}"),this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new
t.Point,this.pixelSize=1,this._clamp=o,this._kernels=null,Array.isArray(n)?
this.kernels=n:(this._blur=n,this.quality=r)}e&&(n.__proto__=e);var r={kernels:
{configurable:!0},clamp:{configurable:!0},pixelSize:{configurable:!0},quality:
{configurable:!0},blur:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r){var
o,i=this.pixelSize.x/t.size.width,l=this.pixelSize.y/t.size.height;if(1===this._qual
ity||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms
.uOffset[1]=o*l,e.applyFilter(this,t,n,r);else{for(var
s,a=e.getRenderTarget(!0),u=t,c=a,f=this._quality1,h=0;h<f;h++)o=this._kernels[h]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffs
et[1]=o*l,e.applyFilter(this,u,c,!0),s=u,u=c,c=s;o=this._kernels[f]+.5,this.uniforms
.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,n,r),e.returnRende
rTarget(a)}},n.prototype._generateKernels=function(){var
e=this._blur,t=this._quality,n=[e];if(0<e)for(var r=e,o=e/t,i=1;i<t;i++)r-
=o,n.push(r);this._kernels=n},r.kernels.get=function(){return
this._kernels},r.kernels.set=function(e){Array.isArray(e)&&0<e.length?
(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):
(this._kernels=[0],this._quality=1)},r.clamp.get=function(){return
this._clamp},r.pixelSize.set=function(e){"number"==typeof e?
(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?
5/9/20, 12:55 PM
Page 134 of 181
(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof t.Point?
(this._pixelSize.x=e.x,this._pixelSize.y=e.y):
(this._pixelSize.x=1,this._pixelSize.y=1)},r.pixelSize.get=function(){return
this._pixelSize},r.quality.get=function(){return
this._quality},r.quality.set=function(e)
{this._quality=Math.max(1,Math.round(e)),this._generateKernels()},r.blur.get=functio
n(){return this._blur},r.blur.set=function(e)
{this._blur=e,this._generateKernels()},Object.defineProperties(n.prototype,r),n}
(t.Filter),u=n,f=function(e){function t(t){void 0===t&&
(t=.5),e.call(this,u,"\nuniform sampler2D uSampler;\nvarying vec2
vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n vec4 color =
texture2D(uSampler, vTextureCoord);\n\n // A simple & fast algorithm for getting
brightness.\n // It's inaccuracy , but good enought for this feature.\n float
_max = max(max(color.r, color.g), color.b);\n float _min = min(min(color.r,
color.g), color.b);\n float brightness = (_max + _min) * 0.5;\n\n
if(brightness > threshold) {\n gl_FragColor = color;\n } else {\n
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n }\n}\n"),this.threshold=t}e&&
(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n=
{threshold:{configurable:!0}};return n.threshold.get=function(){return
this.uniforms.threshold},n.threshold.set=function(e)
{this.uniforms.threshold=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),p=function(e){function n(n){e.call(this,u,"uniform sampler2D
uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform
float bloomScale;\nuniform float brightness;\n\nvoid main() {\n vec4 color =
texture2D(uSampler, vTextureCoord);\n color.rgb *= brightness;\n vec4
bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n
bloomColor.rgb *= bloomScale;\n gl_FragColor = color +
bloomColor;\n}\n"),"number"==typeof n&&(n=
{threshold:n}),n=Object.assign({threshold:.5,bloomScale:1,brightness:1,kernels:null,
blur:8,quality:4,pixelSize:1,resolution:t.settings.RESOLUTION},n),this.bloomScale=n.
bloomScale,this.brightness=n.brightness;var
r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._extractFilter=ne
w f(n.threshold),this._extractFilter.resolution=s,this._blurFilter=r?new a(r):new
a(o,i),this.pixelSize=l,this.resolution=s}e&&(n.__proto__=e);var r={resolution:
{configurable:!0},threshold:{configurable:!0},kernels:{configurable:!0},blur:
{configurable:!0},quality:{configurable:!0},pixelSize:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r,o){var
i=e.getRenderTarget(!0);this._extractFilter.apply(e,t,i,!0,o);var
l=e.getRenderTarget(!0);this._blurFilter.apply(e,i,l,!0,o),this.uniforms.bloomScale=
this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=
l,e.applyFilter(this,t,n,r),e.returnRenderTarget(l),e.returnRenderTarget(i)},r.resol
ution.get=function(){return this._resolution},r.resolution.set=function(e)
{this._resolution=e,this._extractFilter&&
(this._extractFilter.resolution=e),this._blurFilter&&
(this._blurFilter.resolution=e)},r.threshold.get=function(){return
this._extractFilter.threshold},r.threshold.set=function(e)
{this._extractFilter.threshold=e},r.kernels.get=function(){return
this._blurFilter.kernels},r.kernels.set=function(e)
{this._blurFilter.kernels=e},r.blur.get=function(){return
this._blurFilter.blur},r.blur.set=function(e)
{this._blurFilter.blur=e},r.quality.get=function(){return
this._blurFilter.quality},r.quality.set=function(e)
{this._blurFilter.quality=e},r.pixelSize.get=function(){return
this._blurFilter.pixelSize},r.pixelSize.set=function(e)
{this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}
(t.Filter),g=function(e){function t(t){void 0===t&&(t=8),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
5/9/20, 12:55 PM
Page 135 of 181
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform vec4
filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord(
vec2 coord )\n{\n coord *= filterArea.xy;\n coord += filterArea.zw;\n\n
return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n coord -= filterArea.zw;\n
coord /= filterArea.xy;\n\n return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2
size)\n{\n return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord,
vec2 size)\n{\n return mod( coord , size) / size;\n}\n\nfloat character(float n,
vec2 p)\n{\n p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n if (clamp(p.x, 0.0, 4.0)
== p.x)\n {\n if (clamp(p.y, 0.0, 4.0) == p.y)\n {\n if
(int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n }\n }\n
return 0.0;\n}\n\nvoid main()\n{\n vec2 coord = mapCoord(vTextureCoord);\n\n
// get the rounded color..\n vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n
pixCoord = unmapCoord(pixCoord);\n\n vec4 color = texture2D(uSampler,
pixCoord);\n\n // determine the character to use\n float gray = (color.r +
color.g + color.b) / 3.0;\n\n float n = 65536.0; // .\n if (gray
> 0.2) n = 65600.0; // :\n if (gray > 0.3) n = 332772.0; // *\n if (gray
> 0.4) n = 15255086.0; // o\n if (gray > 0.5) n = 23385164.0; // &\n if (gray
> 0.6) n = 15252014.0; // 8\n if (gray > 0.7) n = 13199452.0; // @\n if (gray
> 0.8) n = 11512810.0; // #\n\n // get the mod..\n vec2 modd = getMod(coord,
vec2(pixelSize));\n\n gl_FragColor = color * character( n, vec2(-1.0) + modd *
2.0);\n\n}\n"),this.size=t}e&&(t.__proto__=e),
(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n={size:
{configurable:!0}};return n.size.get=function(){return
this.uniforms.pixelSize},n.size.set=function(e)
{this.uniforms.pixelSize=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),y=function(e){function n(t){void 0===t&&(t={}),e.call(this,"attribute
vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2
vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform
float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform
float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid
main(void) {\n vec2 transform = vec2(1.0 / filterArea) * vec2(transformX,
transformY);\n vec4 color = texture2D(uSampler, vTextureCoord);\n float light
= texture2D(uSampler, vTextureCoord - transform).a;\n float shadow =
texture2D(uSampler, vTextureCoord + transform).a;\n\n color.rgb = mix(color.rgb,
lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n color.rgb =
mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n
gl_FragColor = vec4(color.rgb * color.a,
color.a);\n}\n"),this.uniforms.lightColor=new
Float32Array(3),this.uniforms.shadowColor=new
Float32Array(3),t=Object.assign({rotation:45,thickness:2,lightColor:16777215,lightAl
pha:.7,shadowColor:0,shadowAlpha:.7},t),this.rotation=t.rotation,this.thickness=t.th
ickness,this.lightColor=t.lightColor,this.lightAlpha=t.lightAlpha,this.shadowColor=t
.shadowColor,this.shadowAlpha=t.shadowAlpha}e&&(n.__proto__=e);var r={rotation:
{configurable:!0},thickness:{configurable:!0},lightColor:
{configurable:!0},lightAlpha:{configurable:!0},shadowColor:
{configurable:!0},shadowAlpha:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype._updateTransform=function()
{this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transf
ormY=this._thickness*Math.sin(this._angle)},r.rotation.get=function(){return
this._angle/t.DEG_TO_RAD},r.rotation.set=function(e)
{this._angle=e*t.DEG_TO_RAD,this._updateTransform()},r.thickness.get=function()
{return this._thickness},r.thickness.set=function(e)
{this._thickness=e,this._updateTransform()},r.lightColor.get=function(){return
t.utils.rgb2hex(this.uniforms.lightColor)},r.lightColor.set=function(e)
{t.utils.hex2rgb(e,this.uniforms.lightColor)},r.lightAlpha.get=function(){return
this.uniforms.lightAlpha},r.lightAlpha.set=function(e)
5/9/20, 12:55 PM
Page 136 of 181
{this.uniforms.lightAlpha=e},r.shadowColor.get=function(){return
t.utils.rgb2hex(this.uniforms.shadowColor)},r.shadowColor.set=function(e)
{t.utils.hex2rgb(e,this.uniforms.shadowColor)},r.shadowAlpha.get=function(){return
this.uniforms.shadowAlpha},r.shadowAlpha.set=function(e)
{this.uniforms.shadowAlpha=e},Object.defineProperties(n.prototype,r),n}
(t.Filter),b=t.filters,_=b.BlurXFilter,C=b.BlurYFilter,S=b.AlphaFilter,F=function(e)
{function n(n,r,o,i){var l,s;void 0===n&&(n=2),void 0===r&&(r=4),void 0===o&&
(o=t.settings.RESOLUTION),void 0===i&&(i=5),e.call(this),"number"==typeof n?s=l=n:n
instanceof t.Point?(l=n.x,s=n.y):Array.isArray(n)&&
(l=n[0],s=n[1]),this.blurXFilter=new _(l,r,o,i),this.blurYFilter=new
C(s,r,o,i),this.blurYFilter.blendMode=t.BLEND_MODES.SCREEN,this.defaultFilter=new
S}e&&(n.__proto__=e);var r={blur:{configurable:!0},blurX:{configurable:!0},blurY:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n){var
r=e.getRenderTarget(!0);this.defaultFilter.apply(e,t,n),this.blurXFilter.apply(e,t,r
),this.blurYFilter.apply(e,r,n),e.returnRenderTarget(r)},r.blur.get=function()
{return this.blurXFilter.blur},r.blur.set=function(e)
{this.blurXFilter.blur=this.blurYFilter.blur=e},r.blurX.get=function(){return
this.blurXFilter.blur},r.blurX.set=function(e)
{this.blurXFilter.blur=e},r.blurY.get=function(){return
this.blurYFilter.blur},r.blurY.set=function(e)
{this.blurYFilter.blur=e},Object.defineProperties(n.prototype,r),n}
(t.Filter),w=function(e){function t(t,n,r){e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","uniform float radius;\nuniform float
strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2
vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2
dimensions;\n\nvoid main()\n{\n vec2 coord = vTextureCoord * filterArea.xy;\n
coord -= center * dimensions.xy;\n float distance = length(coord);\n if
(distance < radius) {\n float percent = distance / radius;\n if
(strength > 0.0) {\n coord *= mix(1.0, smoothstep(0.0, radius / distance,
percent), strength * 0.75);\n } else {\n coord *= mix(1.0,
pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n
}\n }\n coord += center * dimensions.xy;\n coord /= filterArea.xy;\n
vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n vec4 color =
texture2D(uSampler, clampedCoord);\n if (coord != clampedCoord) {\n color
*= max(0.0, 1.0 - length(coord - clampedCoord));\n }\n\n gl_FragColor =
color;\n}\n"),this.uniforms.dimensions=new Float32Array(2),this.center=t||
[.5,.5],this.radius="number"==typeof n?n:100,this.strength="number"==typeof r?
r:1}e&&(t.__proto__=e);var n={radius:{configurable:!0},strength:
{configurable:!0},center:
{configurable:!0}};return((t.prototype=Object.create(e&&e.prototype)).constructor=t)
.prototype.apply=function(e,t,n,r)
{this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourc
eFrame.height,e.applyFilter(this,t,n,r)},n.radius.get=function(){return
this.uniforms.radius},n.radius.set=function(e)
{this.uniforms.radius=e},n.strength.get=function(){return
this.uniforms.strength},n.strength.set=function(e)
{this.uniforms.strength=e},n.center.get=function(){return
this.uniforms.center},n.center.set=function(e)
{this.uniforms.center=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),O=function(e){function n(t,n,r){void 0===n&&(n=!1),void 0===r&&
(r=1),e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float
5/9/20, 12:55 PM
Page 137 of 181
_size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float
_sliceInnerSize;\nvoid main() {\n vec4 color = texture2D(uSampler,
vTextureCoord.xy);\n\n vec4 adjusted;\n if (color.a > 0.0) {\n
color.rgb /= color.a;\n float innerWidth = _size - 1.0;\n float
zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n float zSlice1 =
min(zSlice0 + 1.0, innerWidth);\n float xOffset = _slicePixelSize * 0.5 +
color.r * _sliceInnerSize;\n float s0 = xOffset + (zSlice0 * _sliceSize);\n
float s1 = xOffset + (zSlice1 * _sliceSize);\n float yOffset = _sliceSize *
0.5 + color.g * (1.0 - _sliceSize);\n vec4 slice0Color = texture2D(colorMap,
vec2(s0,yOffset));\n vec4 slice1Color = texture2D(colorMap,
vec2(s1,yOffset));\n float zOffset = fract(color.b * innerWidth);\n
adjusted = mix(slice0Color, slice1Color, zOffset);\n\n color.rgb *=
color.a;\n }\n gl_FragColor = vec4(mix(color, adjusted, _mix).rgb,
color.a);\n\n}"),this._size=0,this._sliceSize=0,this._slicePixelSize=0,this._sliceIn
nerSize=0,this._scaleMode=null,this._nearest=!1,this.nearest=n,this.mix=r,this.color
Map=t}e&&(n.__proto__=e);var r={colorSize:{configurable:!0},colorMap:
{configurable:!0},nearest:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r)
{this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},r.colorSize.get=function()
{return this._size},r.colorMap.get=function(){return
this._colorMap},r.colorMap.set=function(e){e instanceof t.Texture||
(e=t.Texture.from(e)),e&&e.baseTexture&&
(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=!1,this._size=e.height
,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._
sliceInnerSize=this._slicePixelSize*(this._size1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.unif
orms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceI
nnerSize,this.uniforms.colorMap=e),this._colorMap=e},r.nearest.get=function(){return
this._nearest},r.nearest.set=function(e){this._nearest=e,this._scaleMode=e?
t.SCALE_MODES.NEAREST:t.SCALE_MODES.LINEAR;var n=this._colorMap;n&&n.baseTexture&&
(n.baseTexture._glTextures=
{},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=!1,n._updateID++,n.b
aseTexture.emit("update",n.baseTexture))},n.prototype.updateColorMap=function(){var
e=this._colorMap;e&&e.baseTexture&&
(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},n.protot
ype.destroy=function(t)
{this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},Object.de
fineProperties(n.prototype,r),n}(t.Filter),R=function(e){function n(t,n,r){void
0===t&&(t=16711680),void 0===n&&(n=0),void 0===r&&(r=.4),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float
epsilon;\nvoid main(void) {\n vec4 currentColor = texture2D(uSampler,
vTextureCoord);\n vec3 colorDiff = originalColor - (currentColor.rgb /
max(currentColor.a, 0.0000000001));\n float colorDistance = length(colorDiff);\n
float doReplace = step(colorDistance, epsilon);\n gl_FragColor =
vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace),
currentColor.a);\n}\n"),this.uniforms.originalColor=new
Float32Array(3),this.uniforms.newColor=new
Float32Array(3),this.originalColor=t,this.newColor=n,this.epsilon=r}e&&
(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n;var r=
{originalColor:{configurable:!0},newColor:{configurable:!0},epsilon:
{configurable:!0}};return r.originalColor.set=function(e){var
n=this.uniforms.originalColor;"number"==typeof e?
(t.utils.hex2rgb(e,n),this._originalColor=e):
(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._originalColor=t.utils.rgb2hex(n))},r.originalCo
lor.get=function(){return this._originalColor},r.newColor.set=function(e){var
5/9/20, 12:55 PM
Page 138 of 181
n=this.uniforms.newColor;"number"==typeof e?(t.utils.hex2rgb(e,n),this._newColor=e):
(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._newColor=t.utils.rgb2hex(n))},r.newColor.get=fu
nction(){return this._newColor},r.epsilon.set=function(e)
{this.uniforms.epsilon=e},r.epsilon.get=function(){return
this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}
(t.Filter),k=function(e){function t(t,n,r){void 0===n&&(n=200),void 0===r&&
(r=200),e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","precision mediump float;\n\nvarying mediump vec2
vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform
float matrix[9];\n\nvoid main(void)\n{\n vec4 c11 = texture2D(uSampler,
vTextureCoord - texelSize); // top left\n vec4 c12 = texture2D(uSampler,
vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n vec4 c13 =
texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y -
texelSize.y)); // top right\n\n vec4 c21 = texture2D(uSampler,
vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n vec4 c22 =
texture2D(uSampler, vTextureCoord); // mid center\n vec4 c23 = texture2D(uSampler,
vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n vec4 c31 =
texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y +
texelSize.y)); // bottom left\n vec4 c32 = texture2D(uSampler,
vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n vec4 c33
= texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n gl_FragColor
=\n c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n c21 *
matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n c31 * matrix[6] + c32 *
matrix[7] + c33 * matrix[8];\n\n gl_FragColor.a =
c22.a;\n}\n"),this.uniforms.texelSize=new Float32Array(2),this.uniforms.matrix=new
Float32Array(9),void 0!==t&&(this.matrix=t),this.width=n,this.height=r}e&&
(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n=
{matrix:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};return
n.matrix.get=function(){return this.uniforms.matrix},n.matrix.set=function(e){var
t=this;e.forEach(function(e,n){return
t.uniforms.matrix[n]=e})},n.width.get=function(){return
1/this.uniforms.texelSize[0]},n.width.set=function(e)
{this.uniforms.texelSize[0]=1/e},n.height.get=function(){return
1/this.uniforms.texelSize[1]},n.height.set=function(e)
{this.uniforms.texelSize[1]=1/e},Object.defineProperties(t.prototype,n),t}
(t.Filter),B=function(e){function t(){e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2
vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n float lum =
length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n gl_FragColor = vec4(1.0,
1.0, 1.0, 1.0);\n\n if (lum < 1.00)\n {\n if (mod(gl_FragCoord.x +
gl_FragCoord.y, 10.0) == 0.0)\n {\n gl_FragColor = vec4(0.0, 0.0,
0.0, 1.0);\n }\n }\n\n if (lum < 0.75)\n {\n if
(mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n {\n
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n }\n }\n\n if (lum < 0.50)\n
{\n if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n {\n
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n }\n }\n\n if (lum < 0.3)\n
{\n if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n {\n
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n }\n }\n}\n")}return e&&
(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t}
(t.Filter),N=function(e){function t(t){e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
5/9/20, 12:55 PM
Page 139 of 181
uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float
SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform
float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform
float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float
vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform
float time;\n\nfloat rand(vec2 co) {\n return fract(sin(dot(co.xy, vec2(12.9898,
78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n vec2 pixelCoord =
vTextureCoord.xy * filterArea.xy;\n vec2 coord = pixelCoord / dimensions;\n\n
vec2 dir = vec2(coord - vec2(0.5, 0.5));\n\n float _c = curvature > 0. ?
curvature : 1.;\n float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c +
0.935 * _c) : 1.;\n vec2 uv = dir * k;\n\n gl_FragColor = texture2D(uSampler,
vTextureCoord);\n vec3 rgb = gl_FragColor.rgb;\n\n\n if (noise > 0.0 &&
noiseSize > 0.0)\n {\n pixelCoord.x = floor(pixelCoord.x / noiseSize);\n
pixelCoord.y = floor(pixelCoord.y / noiseSize);\n float _noise =
rand(pixelCoord * noiseSize * seed) - 0.5;\n rgb += _noise * noise;\n
}\n\n if (lineWidth > 0.0) {\n float v = (verticalLine ? uv.x *
dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n
float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n rgb *= j;\n
float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y +
.5) * dimensions.y, 4.);\n rgb *= 0.99 + ceil(segment) * 0.015;\n }\n\n
if (vignetting > 0.0)\n {\n float outter = SQRT_2 - vignetting * SQRT_2;\n
float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur *
SQRT_2), 0.0, 1.0);\n rgb *= darker + (1.0 - darker) * (1.0 -
vignettingAlpha);\n }\n\n gl_FragColor.rgb =
rgb;\n}\n"),this.uniforms.dimensions=new
Float32Array(2),this.time=0,this.seed=0,Object.assign(this,
{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0
,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},t)}e&&(t.__proto__=e);var
n={curvature:{configurable:!0},lineWidth:{configurable:!0},lineContrast:
{configurable:!0},verticalLine:{configurable:!0},noise:{configurable:!0},noiseSize:
{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:
{configurable:!0},vignettingBlur:
{configurable:!0}};return((t.prototype=Object.create(e&&e.prototype)).constructor=t)
.prototype.apply=function(e,t,n,r)
{this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourc
eFrame.height,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilte
r(this,t,n,r)},n.curvature.set=function(e)
{this.uniforms.curvature=e},n.curvature.get=function(){return
this.uniforms.curvature},n.lineWidth.set=function(e)
{this.uniforms.lineWidth=e},n.lineWidth.get=function(){return
this.uniforms.lineWidth},n.lineContrast.set=function(e)
{this.uniforms.lineContrast=e},n.lineContrast.get=function(){return
this.uniforms.lineContrast},n.verticalLine.set=function(e)
{this.uniforms.verticalLine=e},n.verticalLine.get=function(){return
this.uniforms.verticalLine},n.noise.set=function(e)
{this.uniforms.noise=e},n.noise.get=function(){return
this.uniforms.noise},n.noiseSize.set=function(e)
{this.uniforms.noiseSize=e},n.noiseSize.get=function(){return
this.uniforms.noiseSize},n.vignetting.set=function(e)
{this.uniforms.vignetting=e},n.vignetting.get=function(){return
this.uniforms.vignetting},n.vignettingAlpha.set=function(e)
{this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return
this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e)
{this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return
this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}
(t.Filter),K=function(e){function t(t,n){void 0===t&&(t=1),void 0===n&&
(n=5),e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
5/9/20, 12:55 PM
Page 140 of 181
aTextureCoord;\n}","precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying
vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform
float angle;\nuniform float scale;\n\nfloat pattern()\n{\n float s = sin(angle), c
= cos(angle);\n vec2 tex = vTextureCoord * filterArea.xy;\n vec2 point = vec2(\n
c * tex.x - s * tex.y,\n s * tex.x + c * tex.y\n ) * scale;\n return
(sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n vec4 color =
texture2D(uSampler, vTextureCoord);\n float average = (color.r + color.g +
color.b) / 3.0;\n gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()),
color.a);\n}\n"),this.scale=t,this.angle=n}e&&(t.__proto__=e),
(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n={scale:
{configurable:!0},angle:{configurable:!0}};return n.scale.get=function(){return
this.uniforms.scale},n.scale.set=function(e)
{this.uniforms.scale=e},n.angle.get=function(){return
this.uniforms.angle},n.angle.set=function(e)
{this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),U=function(e){function n(n){n&&n.constructor!==Object&&
(console.warn("DropShadowFilter now uses options instead of (rotation, distance,
blur, color, alpha)"),n={rotation:n},void 0!==arguments[1]&&
(n.distance=arguments[1]),void 0!==arguments[2]&&(n.blur=arguments[2]),void
0!==arguments[3]&&(n.color=arguments[3]),void 0!==arguments[4]&&
(n.alpha=arguments[4])),n=Object.assign({rotation:45,distance:5,color:0,alpha:.5,sha
dowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:t.settings.RESOLUTIO
N},n),e.call(this);var
r=n.kernels,o=n.blur,i=n.quality,l=n.pixelSize,s=n.resolution;this._tintFilter=new
t.Filter("attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform
mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform float alpha;\nuniform vec3 color;\nvoid main(void){\n vec4
sample = texture2D(uSampler, vTextureCoord);\n\n // Un-premultiply alpha before
applying the color\n if (sample.a > 0.0) {\n sample.rgb /= sample.a;\n
}\n\n // Premultiply alpha again\n sample.rgb = color.rgb * sample.a;\n\n
// alpha user alpha\n sample *= alpha;\n\n gl_FragColor =
sample;\n}"),this._tintFilter.uniforms.color=new
Float32Array(4),this._tintFilter.resolution=s,this._blurFilter=r?new a(r):new
a(o,i),this.pixelSize=l,this.resolution=s,this.targetTransform=new t.Matrix;var
u=n.shadowOnly,c=n.rotation,f=n.distance,h=n.alpha,p=n.color;this.shadowOnly=u,this.
rotation=c,this.distance=f,this.alpha=h,this.color=p,this._updatePadding()}e&&
(n.__proto__=e);var r={resolution:{configurable:!0},distance:
{configurable:!0},rotation:{configurable:!0},alpha:{configurable:!0},color:
{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:
{configurable:!0},pixelSize:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r){var
o=e.getRenderTarget();o.transform=this.targetTransform,this._tintFilter.apply(e,t,o,
!0),o.transform=null,this._blurFilter.apply(e,o,n,r),!0!==this.shadowOnly&&e.applyFi
lter(this,t,n,!1),e.returnRenderTarget(o)},n.prototype._updatePadding=function()
{this.padding=this.distance+2*this.blur},n.prototype._updateTargetTransform=function
()
{this.targetTransform.tx=this.distance*Math.cos(this.angle),this.targetTransform.ty=
this.distance*Math.sin(this.angle)},r.resolution.get=function(){return
this._resolution},r.resolution.set=function(e){this._resolution=e,this._tintFilter&&
(this._tintFilter.resolution=e),this._blurFilter&&
(this._blurFilter.resolution=e)},r.distance.get=function(){return
this._distance},r.distance.set=function(e)
{this._distance=e,this._updatePadding(),this._updateTargetTransform()},r.rotation.ge
t=function(){return this.angle/t.DEG_TO_RAD},r.rotation.set=function(e)
{this.angle=e*t.DEG_TO_RAD,this._updateTargetTransform()},r.alpha.get=function()
{return this._tintFilter.uniforms.alpha},r.alpha.set=function(e)
{this._tintFilter.uniforms.alpha=e},r.color.get=function(){return
5/9/20, 12:55 PM
Page 141 of 181
t.utils.rgb2hex(this._tintFilter.uniforms.color)},r.color.set=function(e)
{t.utils.hex2rgb(e,this._tintFilter.uniforms.color)},r.kernels.get=function(){return
this._blurFilter.kernels},r.kernels.set=function(e)
{this._blurFilter.kernels=e},r.blur.get=function(){return
this._blurFilter.blur},r.blur.set=function(e)
{this._blurFilter.blur=e,this._updatePadding()},r.quality.get=function(){return
this._blurFilter.quality},r.quality.set=function(e)
{this._blurFilter.quality=e},r.pixelSize.get=function(){return
this._blurFilter.pixelSize},r.pixelSize.set=function(e)
{this._blurFilter.pixelSize=e},Object.defineProperties(n.prototype,r),n}
(t.Filter),H=function(e){function t(t){void 0===t&&(t=5),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2
vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4
filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 /
filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -=
texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor +=
texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb =
vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler,
vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha,
alpha);\n}\n"),this.strength=t}e&&(t.__proto__=e),
(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n={strength:
{configurable:!0}};return n.strength.get=function(){return
this.uniforms.strength},n.strength.set=function(e)
{this.uniforms.strength=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),ee=function(e){function n(n){void 0===n&&(n={}),e.call(this,"attribute
vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","// precision highp float;\n\nvarying vec2
vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform
vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform
sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform
float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2
red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst
int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR =
4;\n\nvoid main(void)\n{\n vec2 coord = (vTextureCoord * filterArea.xy) /
dimensions;\n\n if (coord.x > 1.0 || coord.y > 1.0) {\n return;\n }\n\n
float cx = coord.x - 0.5;\n float cy = (coord.y - 0.5) * aspect;\n float ny =
(-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n // displacementMap: repeat\n
// ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n // displacementMap:
mirror\n ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n vec4 dc =
texture2D(displacementMap, vec2(0.5, ny));\n\n float displacement = (dc.r - dc.g)
* (offset / filterArea.x);\n\n coord = vTextureCoord + vec2(cosDir *
displacement, sinDir * displacement * aspect);\n\n if (fillMode == CLAMP) {\n
coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n } else {\n if(
coord.x > filterClamp.z ) {\n if (fillMode == ORIGINAL) {\n
gl_FragColor = texture2D(uSampler, vTextureCoord);\n return;\n
} else if (fillMode == LOOP) {\n coord.x -= filterClamp.z;\n
} else if (fillMode == MIRROR) {\n coord.x = filterClamp.z * 2.0 -
coord.x;\n } else {\n gl_FragColor = vec4(0., 0., 0.,
0.);\n return;\n }\n } else if( coord.x <
filterClamp.x ) {\n if (fillMode == ORIGINAL) {\n
gl_FragColor = texture2D(uSampler, vTextureCoord);\n return;\n
} else if (fillMode == LOOP) {\n coord.x += filterClamp.z;\n
} else if (fillMode == MIRROR) {\n coord.x *= -filterClamp.z;\n
} else {\n gl_FragColor = vec4(0., 0., 0., 0.);\n
return;\n }\n }\n\n if( coord.y > filterClamp.w ) {\n
5/9/20, 12:55 PM
Page 142 of 181
if (fillMode == ORIGINAL) {\n gl_FragColor = texture2D(uSampler,
vTextureCoord);\n return;\n } else if (fillMode == LOOP)
{\n coord.y -= filterClamp.w;\n } else if (fillMode ==
MIRROR) {\n coord.y = filterClamp.w * 2.0 - coord.y;\n }
else {\n gl_FragColor = vec4(0., 0., 0., 0.);\n
return;\n }\n } else if( coord.y < filterClamp.y ) {\n
if (fillMode == ORIGINAL) {\n gl_FragColor = texture2D(uSampler,
vTextureCoord);\n return;\n } else if (fillMode == LOOP)
{\n coord.y += filterClamp.w;\n } else if (fillMode ==
MIRROR) {\n coord.y *= -filterClamp.w;\n } else {\n
gl_FragColor = vec4(0., 0., 0., 0.);\n return;\n }\n
}\n }\n\n gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed *
0.4) / filterArea.xy).r;\n gl_FragColor.g = texture2D(uSampler, coord + green *
(1.0 - seed * 0.3) / filterArea.xy).g;\n gl_FragColor.b = texture2D(uSampler,
coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n gl_FragColor.a =
texture2D(uSampler, coord).a;\n}\n"),this.uniforms.dimensions=new
Float32Array(2),n=Object.assign({slices:5,offset:100,direction:0,fillMode:0,average:
!1,seed:0,red:[0,0],green:[0,0],blue:
[0,0],minSize:8,sampleSize:512},n),this.direction=n.direction,this.red=n.red,this.gr
een=n.green,this.blue=n.blue,this.offset=n.offset,this.fillMode=n.fillMode,this.aver
age=n.average,this.seed=n.seed,this.minSize=n.minSize,this.sampleSize=n.sampleSize,t
his._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.heigh
t=this.sampleSize,this.texture=t.Texture.fromCanvas(this._canvas,t.SCALE_MODES.NEARE
ST),this._slices=0,this.slices=n.slices}e&&(n.__proto__=e);var r={sizes:
{configurable:!0},offsets:{configurable:!0},slices:{configurable:!0},direction:
{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r){var
o=t.sourceFrame.width,i=t.sourceFrame.height;this.uniforms.dimensions[0]=o,this.unif
orms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.seed=this.seed,this.unif
orms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,
r)},n.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average)
{for(var o=this._slices,i=1,l=0;l<t;l++){var s=i/(o-l),a=Math.max(s*
(1-.6*Math.random()),r);i-=e[l]=a}e[t]=i}else{for(var
u=1,c=Math.sqrt(1/this._slices),f=0;f<t;f++){var h=Math.max(c*u*Math.random(),r);u-
=e[f]=h}e[t]=u}this.shuffle()},n.prototype.shuffle=function(){for(var
e=this._sizes,t=this._slices-1;0<t;t--){var
n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},n.prototype._randomizeOffsets=functio
n(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?
-1:1)},n.prototype.refresh=function()
{this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},n.prototype.redraw=f
unction(){var
e,t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8
,t);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var
l=this._sizes[i]*t,s=0<e?e:0,a=e<0?-e:0;r.fillStyle="rgba("+s+", "+a+", 0,
1)",r.fillRect(0,o>>0,t,1+l>>0),o+=l}n.baseTexture.update(),this.uniforms.displaceme
ntMap=n},r.sizes.set=function(e){for(var
t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},r.sizes.get=funct
ion(){return this._sizes},r.offsets.set=function(e){for(var
t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},r.offsets.get=f
unction(){return this._offsets},r.slices.get=function(){return
this._slices},r.slices.set=function(e){this._slices!==e&&
(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new
Float32Array(e),this._offsets=this.uniforms.slicesOffset=new
Float32Array(e),this.refresh())},r.direction.get=function(){return
this._direction},r.direction.set=function(e){if(this._direction!==e){var n=
(this._direction=e)*t.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosD
ir=Math.cos(n)}},r.red.get=function(){return
this.uniforms.red},r.red.set=function(e){this.uniforms.red=e},r.green.get=function()
5/9/20, 12:55 PM
Page 143 of 181
{return this.uniforms.green},r.green.set=function(e)
{this.uniforms.green=e},r.blue.get=function(){return
this.uniforms.blue},r.blue.set=function(e)
{this.uniforms.blue=e},n.prototype.destroy=function()
{this.texture.destroy(!0),this.texture=null,this._canvas=null,this.red=null,this.gre
en=null,this.blue=null,this._sizes=null,this._offsets=null},Object.defineProperties(
n.prototype,r),n}
(t.Filter);ee.TRANSPARENT=0,ee.ORIGINAL=1,ee.LOOP=2,ee.CLAMP=3,ee.MIRROR=4;var
re=function(e){function n(t,n,r,o,i){void 0===t&&(t=10),void 0===n&&(n=4),void
0===r&&(r=0),void 0===o&&(o=16777215),void 0===i&&(i=.1),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nvarying vec4
vColor;\n\nuniform sampler2D uSampler;\n\nuniform float distance;\nuniform float
outerStrength;\nuniform float innerStrength;\nuniform vec4 glowColor;\nuniform vec4
filterArea;\nuniform vec4 filterClamp;\nconst float PI =
3.14159265358979323846264;\n\nvoid main(void) {\n vec2 px = vec2(1.0 /
filterArea.x, 1.0 / filterArea.y);\n vec4 ownColor = texture2D(uSampler,
vTextureCoord);\n vec4 curColor;\n float totalAlpha = 0.0;\n float
maxTotalAlpha = 0.0;\n float cosAngle;\n float sinAngle;\n vec2
displaced;\n for (float angle = 0.0; angle <= PI * 2.0; angle += %QUALITY_DIST%)
{\n cosAngle = cos(angle);\n sinAngle = sin(angle);\n for (float
curDistance = 1.0; curDistance <= %DIST%; curDistance++) {\n displaced.x =
vTextureCoord.x + cosAngle * curDistance * px.x;\n displaced.y =
vTextureCoord.y + sinAngle * curDistance * px.y;\n curColor =
texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n
totalAlpha += (distance - curDistance) * curColor.a;\n maxTotalAlpha +=
(distance - curDistance);\n }\n }\n maxTotalAlpha = max(maxTotalAlpha,
0.0001);\n\n ownColor.a = max(ownColor.a, 0.0001);\n ownColor.rgb =
ownColor.rgb / ownColor.a;\n float outerGlowAlpha = (totalAlpha / maxTotalAlpha)
* outerStrength * (1. - ownColor.a);\n float innerGlowAlpha = ((maxTotalAlpha -
totalAlpha) / maxTotalAlpha) * innerStrength * ownColor.a;\n float resultAlpha =
(ownColor.a + outerGlowAlpha);\n gl_FragColor = vec4(mix(mix(ownColor.rgb,
glowColor.rgb, innerGlowAlpha / ownColor.a), glowColor.rgb, outerGlowAlpha /
resultAlpha) * resultAlpha, resultAlpha);\n}\n".replace(/%QUALITY_DIST%/gi,""+
(1/i/t).toFixed(7)).replace(/%DIST%/gi,""+t.toFixed(7))),this.uniforms.glowColor=new
Float32Array([0,0,0,1]),this.distance=t,this.color=o,this.outerStrength=n,this.inner
Strength=r}e&&(n.__proto__=e),
(n.prototype=Object.create(e&&e.prototype)).constructor=n;var r={color:
{configurable:!0},distance:{configurable:!0},outerStrength:
{configurable:!0},innerStrength:{configurable:!0}};return r.color.get=function()
{return t.utils.rgb2hex(this.uniforms.glowColor)},r.color.set=function(e)
{t.utils.hex2rgb(e,this.uniforms.glowColor)},r.distance.get=function(){return
this.uniforms.distance},r.distance.set=function(e)
{this.uniforms.distance=e},r.outerStrength.get=function(){return
this.uniforms.outerStrength},r.outerStrength.set=function(e)
{this.uniforms.outerStrength=e},r.innerStrength.get=function(){return
this.uniforms.innerStrength},r.innerStrength.set=function(e)
{this.uniforms.innerStrength=e},Object.defineProperties(n.prototype,r),n}
(t.Filter),se=function(e){function n(n){e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2
light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float
gain;\nuniform float lacunarity;\nuniform float time;\n\n${perlin}\n\nvoid
main(void) {\n vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n
float d;\n\n if (parallel) {\n float _cos = light.x;\n float _sin =
5/9/20, 12:55 PM
Page 144 of 181
light.y;\n d = (_cos * coord.x) + (_sin * coord.y * aspect);\n } else {\n
float dx = coord.x - light.x / dimensions.x;\n float dy = (coord.y - light.y
/ dimensions.y) * aspect;\n float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n
d = dy / dis;\n }\n\n vec3 dir = vec3(d, d, 0.0);\n\n float noise =
turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0),
lacunarity, gain);\n noise = mix(noise, 0.0, 0.3);\n //fade vertically.\n
vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n mist.a = 1.0;\n\n
gl_FragColor = texture2D(uSampler, vTextureCoord) +
mist;\n}\n".replace("${perlin}","vec3 mod289(vec3 x)\n{\n return x - floor(x *
(1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n return x - floor(x * (1.0 /
289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n return mod289(((x * 34.0) + 1.0) *
x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n return 1.79284291400159 -
0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n return t * t * t * (t * (t * 6.0
- 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P,
vec3 rep)\n{\n vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n
vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n Pi0 =
mod289(Pi0);\n Pi1 = mod289(Pi1);\n vec3 Pf0 = fract(P); // Fractional part
for interpolation\n vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n
vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n vec4 iy = vec4(Pi0.yy, Pi1.yy);\n
vec4 iz0 = Pi0.zzzz;\n vec4 iz1 = Pi1.zzzz;\n vec4 ixy = permute(permute(ix) +
iy);\n vec4 ixy0 = permute(ixy + iz0);\n vec4 ixy1 = permute(ixy + iz1);\n
vec4 gx0 = ixy0 * (1.0 / 7.0);\n vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) -
0.5;\n gx0 = fract(gx0);\n vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n
vec4 sz0 = step(gz0, vec4(0.0));\n gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n gy0
-= sz0 * (step(0.0, gy0) - 0.5);\n vec4 gx1 = ixy1 * (1.0 / 7.0);\n vec4 gy1 =
fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n gx1 = fract(gx1);\n vec4 gz1 =
vec4(0.5) - abs(gx1) - abs(gy1);\n vec4 sz1 = step(gz1, vec4(0.0));\n gx1 -=
sz1 * (step(0.0, gx1) - 0.5);\n gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n vec3
g000 = vec3(gx0.x, gy0.x, gz0.x);\n vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n
vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n
vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n
vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n
vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100),
dot(g110, g110)));\n g000 *= norm0.x;\n g010 *= norm0.y;\n g100 *=
norm0.z;\n g110 *= norm0.w;\n vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001),
dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n g001 *= norm1.x;\n g011
*= norm1.y;\n g101 *= norm1.z;\n g111 *= norm1.w;\n float n000 = dot(g000,
Pf0);\n float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n float n010 = dot(g010,
vec3(Pf0.x, Pf1.y, Pf0.z));\n float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n
float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n float n101 = dot(g101, vec3(Pf1.x,
Pf0.y, Pf1.z));\n float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n float n111 =
dot(g111, Pf1);\n vec3 fade_xyz = fade(Pf0);\n vec4 n_z = mix(vec4(n000, n100,
n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n vec2 n_yz = mix(n_z.xy,
n_z.zw, fade_xyz.y);\n float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n return
2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n
float sum = 0.0;\n float sc = 1.0;\n float totalgain = 1.0;\n for (float i
= 0.0; i < 6.0; i++)\n {\n sum += totalgain * pnoise(P * sc, rep);\n
sc *= lacunarity;\n totalgain *= gain;\n }\n return
abs(sum);\n}\n")),this.uniforms.dimensions=new Float32Array(2),"number"==typeof n&&
(console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity,
time)"),n={angle:n},void 0!==arguments[1]&&(n.gain=arguments[1]),void
0!==arguments[2]&&(n.lacunarity=arguments[2]),void 0!==arguments[3]&&
(n.time=arguments[3])),n=Object.assign({angle:30,gain:.5,lacunarity:2.5,time:0,paral
lel:!0,center:[0,0]},n),this._angleLight=new
t.Point,this.angle=n.angle,this.gain=n.gain,this.lacunarity=n.lacunarity,this.parall
el=n.parallel,this.center=n.center,this.time=n.time}e&&(n.__proto__=e);var r={angle:
{configurable:!0},gain:{configurable:!0},lacunarity:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r){var
o=t.sourceFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?
5/9/20, 12:55 PM
Page 145 of 181
this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dime
nsions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.tim
e=this.time,e.applyFilter(this,t,n,r)},r.angle.get=function(){return
this._angle},r.angle.set=function(e){var n=
(this._angle=e)*t.DEG_TO_RAD;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.
sin(n)},r.gain.get=function(){return this.uniforms.gain},r.gain.set=function(e)
{this.uniforms.gain=e},r.lacunarity.get=function(){return
this.uniforms.lacunarity},r.lacunarity.set=function(e)
{this.uniforms.lacunarity=e},Object.defineProperties(n.prototype,r),n}
(t.Filter),ce=function(e){function n(n,r,o){void 0===n&&(n=[0,0]),void 0===r&&
(r=5),void 0===o&&(o=0),e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int
uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n//
Notice:\n// the perfect way:\n// int kernelSize = min(uKernelSize,
MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost
always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n vec4 color =
texture2D(uSampler, vTextureCoord);\n\n if (uKernelSize == 0)\n {\n
gl_FragColor = color;\n return;\n }\n\n vec2 velocity = uVelocity /
filterArea.xy;\n float offset = -uOffset / length(uVelocity) - 0.5;\n int k =
uKernelSize - 1;\n\n for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n if
(i == k) {\n break;\n }\n vec2 bias = velocity * (float(i)
/ float(k) + offset);\n color += texture2D(uSampler, vTextureCoord + bias);\n
}\n gl_FragColor = color / float(uKernelSize);\n}\n"),this.uniforms.uVelocity=new
Float32Array(2),this._velocity=new
t.ObservablePoint(this.velocityChanged,this),this.velocity=n,this.kernelSize=r,this.
offset=o}e&&(n.__proto__=e);var r={velocity:{configurable:!0},offset:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r){var
o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?
this.kernelSize:0,e.applyFilter(this,t,n,r)},r.velocity.set=function(e)
{Array.isArray(e)?this._velocity.set(e[0],e[1]):(e instanceof t.Point||e instanceof
t.ObservablePoint)&&this._velocity.copy(e)},r.velocity.get=function(){return
this._velocity},n.prototype.velocityChanged=function()
{this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._veloci
ty.y},r.offset.set=function(e){this.uniforms.uOffset=e},r.offset.get=function()
{return this.uniforms.uOffset},Object.defineProperties(n.prototype,r),n}
(t.Filter),pe=function(e){function n(t,n,r){void 0===n&&(n=.05),void 0===r&&
(r=null),r=r||t.length,e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS =
%maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3
targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n gl_FragColor =
texture2D(uSampler, vTextureCoord);\n\n float alpha = gl_FragColor.a;\n if
(alpha < 0.0001)\n {\n return;\n }\n\n vec3 color = gl_FragColor.rgb /
alpha;\n\n for(int i = 0; i < MAX_COLORS; i++)\n {\n vec3 origColor =
originalColors[i];\n if (origColor.r < 0.0)\n {\n break;\n }\n
vec3 colorDiff = origColor - color;\n if (length(colorDiff) < epsilon)\n
{\n vec3 targetColor = targetColors[i];\n gl_FragColor =
vec4((targetColor + colorDiff) * alpha, alpha);\n return;\n }\n
}\n}\n".replace(/%maxColors%/g,r)),this.epsilon=n,this._maxColors=r,this._replacemen
ts=null,this.uniforms.originalColors=new
Float32Array(3*r),this.uniforms.targetColors=new
Float32Array(3*r),this.replacements=t}e&&(n.__proto__=e),
5/9/20, 12:55 PM
Page 146 of 181
(n.prototype=Object.create(e&&e.prototype)).constructor=n;var r={replacements:
{configurable:!0},maxColors:{configurable:!0},epsilon:{configurable:!0}};return
r.replacements.set=function(e){var
n=this.uniforms.originalColors,r=this.uniforms.targetColors,o=e.length;if(o>this._ma
xColors)throw"Length of replacements ("+o+") exceeds the maximum colors length
("+this._maxColors+")";n[3*o]=-1;for(var i=0;i<o;i++){var
l=e[i],s=l[0];"number"==typeof s?
s=t.utils.hex2rgb(s):l[0]=t.utils.rgb2hex(s),n[3*i]=s[0],n[3*i+1]=s[1],n[3*i+2]=s[2]
;var a=l[1];"number"==typeof a?
a=t.utils.hex2rgb(a):l[1]=t.utils.rgb2hex(a),r[3*i]=a[0],r[3*i+1]=a[1],r[3*i+2]=a[2]
}this._replacements=e},r.replacements.get=function(){return
this._replacements},n.prototype.refresh=function()
{this.replacements=this._replacements},r.maxColors.get=function(){return
this._maxColors},r.epsilon.set=function(e)
{this.uniforms.epsilon=e},r.epsilon.get=function(){return
this.uniforms.epsilon},Object.defineProperties(n.prototype,r),n}
(t.Filter),ge=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,"attribute
vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float
sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float
scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float
vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform
float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 /
255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n return
fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3
src, vec3 dst)\n{\n // if (dst <= 0.5) then: 2 * src * dst\n // if (dst > 0.5)
then: 1 - 2 * (1 - dst) * (1 - src)\n return vec3((dst.x <= 0.5) ? (2.0 * src.x *
dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n (dst.y <=
0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n
(dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 -
src.z)));\n}\n\n\nvoid main()\n{\n gl_FragColor = texture2D(uSampler,
vTextureCoord);\n vec3 color = gl_FragColor.rgb;\n\n if (sepia > 0.0)\n {\n
float gray = (color.x + color.y + color.z) / 3.0;\n vec3 grayscale =
vec3(gray);\n\n color = Overlay(SEPIA_RGB, grayscale);\n\n color =
grayscale + sepia * (color - grayscale);\n }\n\n vec2 coord = vTextureCoord *
filterArea.xy / dimensions.xy;\n\n if (vignetting > 0.0)\n {\n float
outter = SQRT_2 - vignetting * SQRT_2;\n vec2 dir = vec2(vec2(0.5, 0.5) -
coord);\n dir.y *= dimensions.y / dimensions.x;\n float darker =
clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0,
1.0);\n color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n
}\n\n if (scratchDensity > seed && scratch != 0.0)\n {\n float phase =
seed * 256.0;\n float s = mod(floor(phase), 2.0);\n float dist = 1.0 /
scratchDensity;\n float d = distance(coord, vec2(seed * dist, abs(s - seed *
dist)));\n if (d < seed * 0.6 + 0.4)\n {\n highp float
period = scratchDensity * 10.0;\n\n float xx = coord.x * period +
phase;\n float aa = abs(mod(xx, 0.5) * 4.0);\n float bb =
mod(floor(xx / 0.5), 2.0);\n float yy = (1.0 - bb) * aa + bb * (2.0 -
aa);\n\n float kk = 2.0 * period;\n float dw = scratchWidth /
dimensions.x * (0.75 + seed);\n float dh = dw * kk;\n\n float
tine = (yy - (2.0 - dh));\n\n if (tine > 0.0) {\n float
_sign = sign(scratch);\n\n tine = s * tine / period + scratch +
0.1;\n tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign *
0.5);\n\n color.rgb *= tine;\n }\n }\n }\n\n
if (noise > 0.0 && noiseSize > 0.0)\n {\n vec2 pixelCoord =
vTextureCoord.xy * filterArea.xy;\n pixelCoord.x = floor(pixelCoord.x /
noiseSize);\n pixelCoord.y = floor(pixelCoord.y / noiseSize);\n //
vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed *
5/9/20, 12:55 PM
Page 147 of 181
512.0);\n // float _noise = snoise(d) * 0.5;\n float _noise =
rand(pixelCoord * noiseSize * seed) - 0.5;\n color += _noise * noise;\n
}\n\n gl_FragColor.rgb = color;\n}\n"),this.uniforms.dimensions=new
Float32Array(2),"number"==typeof t?
(this.seed=t,t=null):this.seed=n,Object.assign(this,
{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignettin
g:.3,vignettingAlpha:1,vignettingBlur:.3},t)}e&&(t.__proto__=e);var n={sepia:
{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},scratch:
{configurable:!0},scratchDensity:{configurable:!0},scratchWidth:
{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:
{configurable:!0},vignettingBlur:
{configurable:!0}};return((t.prototype=Object.create(e&&e.prototype)).constructor=t)
.prototype.apply=function(e,t,n,r)
{this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourc
eFrame.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},n.sepia.set=fu
nction(e){this.uniforms.sepia=e},n.sepia.get=function(){return
this.uniforms.sepia},n.noise.set=function(e)
{this.uniforms.noise=e},n.noise.get=function(){return
this.uniforms.noise},n.noiseSize.set=function(e)
{this.uniforms.noiseSize=e},n.noiseSize.get=function(){return
this.uniforms.noiseSize},n.scratch.set=function(e)
{this.uniforms.scratch=e},n.scratch.get=function(){return
this.uniforms.scratch},n.scratchDensity.set=function(e)
{this.uniforms.scratchDensity=e},n.scratchDensity.get=function(){return
this.uniforms.scratchDensity},n.scratchWidth.set=function(e)
{this.uniforms.scratchWidth=e},n.scratchWidth.get=function(){return
this.uniforms.scratchWidth},n.vignetting.set=function(e)
{this.uniforms.vignetting=e},n.vignetting.get=function(){return
this.uniforms.vignetting},n.vignettingAlpha.set=function(e)
{this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return
this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e)
{this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return
this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}
(t.Filter),ye=function(e){function n(t,r,o){void 0===t&&(t=1),void 0===r&&(r=0),void
0===o&&(o=.1);var i=Math.max(o*n.MAX_SAMPLES,n.MIN_SAMPLES),l=
(2*Math.PI/i).toFixed(7);e.call(this,"attribute vec2 aVertexPosition;\nattribute
vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4
filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid
main(void) {\n vec4 ownColor = texture2D(uSampler, vTextureCoord);\n vec4
curColor;\n float maxAlpha = 0.;\n vec2 displaced;\n for (float angle = 0.;
angle <= DOUBLE_PI; angle += ${angleStep}) {\n displaced.x = vTextureCoord.x
+ thickness.x * cos(angle);\n displaced.y = vTextureCoord.y + thickness.y *
sin(angle);\n curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy,
filterClamp.zw));\n maxAlpha = max(maxAlpha, curColor.a);\n }\n float
resultAlpha = max(maxAlpha, ownColor.a);\n gl_FragColor = vec4((ownColor.rgb +
outlineColor.rgb * (1. - ownColor.a)) * resultAlpha,
resultAlpha);\n}\n".replace(/\$\{angleStep\}/,l)),this.uniforms.thickness=new
Float32Array([0,0]),this.thickness=t,this.uniforms.outlineColor=new
Float32Array([0,0,0,1]),this.color=r,this.quality=o}e&&(n.__proto__=e);var r={color:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r)
{this.uniforms.thickness[0]=this.thickness/t.size.width,this.uniforms.thickness[1]=t
his.thickness/t.size.height,e.applyFilter(this,t,n,r)},r.color.get=function(){return
t.utils.rgb2hex(this.uniforms.outlineColor)},r.color.set=function(e)
{t.utils.hex2rgb(e,this.uniforms.outlineColor)},Object.defineProperties(n.prototype,
r),n}(t.Filter);ye.MIN_SAMPLES=1,ye.MAX_SAMPLES=100;var Ce=function(e){function t(t)
5/9/20, 12:55 PM
Page 148 of 181
{void 0===t&&(t=10),e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","precision mediump float;\n\nvarying vec2
vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4
filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n coord *= filterArea.xy;\n
coord += filterArea.zw;\n\n return coord;\n}\n\nvec2 unmapCoord( vec2 coord
)\n{\n coord -= filterArea.zw;\n coord /= filterArea.xy;\n\n return
coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size )
* size;\n}\n\nvoid main(void)\n{\n vec2 coord = mapCoord(vTextureCoord);\n\n
coord = pixelate(coord, size);\n\n coord = unmapCoord(coord);\n\n gl_FragColor
= texture2D(uSampler, coord);\n}\n"),this.size=t}e&&(t.__proto__=e),
(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n={size:
{configurable:!0}};return n.size.get=function(){return
this.uniforms.size},n.size.set=function(e){"number"==typeof e&&(e=
[e,e]),this.uniforms.size=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),ze=function(e){function t(t,n,r,o){void 0===t&&(t=0),void 0===n&&(n=
[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2
uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int
MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n vec4 color = texture2D(uSampler,
vTextureCoord);\n\n if (uKernelSize == 0)\n {\n gl_FragColor = color;\n
return;\n }\n\n float aspect = filterArea.y / filterArea.x;\n vec2 center =
uCenter.xy / filterArea.xy;\n float gradient = uRadius / filterArea.x * 0.3;\n
float radius = uRadius / filterArea.x - gradient * 0.5;\n int k = uKernelSize -
1;\n\n vec2 coord = vTextureCoord;\n vec2 dir = vec2(center - coord);\n
float dist = length(vec2(dir.x, dir.y * aspect));\n\n float radianStep =
uRadian;\n if (radius >= 0.0 && dist > radius) {\n float delta = dist -
radius;\n float gap = gradient;\n float scale = 1.0 - abs(delta /
gap);\n if (scale <= 0.0) {\n gl_FragColor = color;\n
return;\n }\n radianStep *= scale;\n }\n radianStep /=
float(k);\n\n float s = sin(radianStep);\n float c = cos(radianStep);\n
mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n for(int i = 0; i <
MAX_KERNEL_SIZE - 1; i++) {\n if (i == k) {\n break;\n
}\n\n coord -= center;\n coord.y *= aspect;\n coord =
rotationMatrix * coord;\n coord.y /= aspect;\n coord += center;\n\n
vec4 sample = texture2D(uSampler, coord);\n\n // switch to pre-multiplied
alpha to correctly blur transparent images\n // sample.rgb *= sample.a;\n\n
color += sample;\n }\n\n gl_FragColor = color /
float(uKernelSize);\n}\n"),this._angle=0,this.angle=t,this.center=n,this.kernelSize=
r,this.radius=o}e&&(t.__proto__=e);var n={angle:{configurable:!0},center:
{configurable:!0},radius:
{configurable:!0}};return((t.prototype=Object.create(e&&e.prototype)).constructor=t)
.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=0!==this._angle?
this.kernelSize:0,e.applyFilter(this,t,n,r)},n.angle.set=function(e)
{this._angle=e,this.uniforms.uRadian=e*Math.PI/180},n.angle.get=function(){return
this._angle},n.center.get=function(){return
this.uniforms.uCenter},n.center.set=function(e)
{this.uniforms.uCenter=e},n.radius.get=function(){return
this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&
(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),Te=function(e){function t(t){e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
5/9/20, 12:55 PM
Page 149 of 181
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2
dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2
amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float
time;\n\nfloat rand(vec2 co) {\n return fract(sin(dot(co.xy, vec2(12.9898,
78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n vec2 pixelCoord =
vTextureCoord.xy * filterArea.xy;\n vec2 coord = pixelCoord / dimensions;\n\n
if (coord.y < boundary) {\n gl_FragColor = texture2D(uSampler,
vTextureCoord);\n return;\n }\n\n float k = (coord.y - boundary) / (1.
- boundary + 0.0001);\n float areaY = boundary * dimensions.y / filterArea.y;\n
float v = areaY + areaY - vTextureCoord.y;\n float y = mirror ? v :
vTextureCoord.y;\n\n float _amplitude = ((amplitude.y - amplitude.x) * k +
amplitude.x ) / filterArea.x;\n float _waveLength = ((waveLength.y -
waveLength.x) * k + waveLength.x) / filterArea.y;\n float _alpha = (alpha.y -
alpha.x) * k + alpha.x;\n\n float x = vTextureCoord.x + cos(v * 6.28 /
_waveLength - time) * _amplitude;\n x = clamp(x, filterClamp.x,
filterClamp.z);\n\n vec4 color = texture2D(uSampler, vec2(x, y));\n\n
gl_FragColor = color * _alpha;\n}\n"),this.uniforms.amplitude=new
Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new
Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,
{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:
[1,1],time:0},t)}e&&(t.__proto__=e);var n={mirror:{configurable:!0},boundary:
{configurable:!0},amplitude:{configurable:!0},waveLength:{configurable:!0},alpha:
{configurable:!0}};return((t.prototype=Object.create(e&&e.prototype)).constructor=t)
.prototype.apply=function(e,t,n,r)
{this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourc
eFrame.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.mirror.set=f
unction(e){this.uniforms.mirror=e},n.mirror.get=function(){return
this.uniforms.mirror},n.boundary.set=function(e)
{this.uniforms.boundary=e},n.boundary.get=function(){return
this.uniforms.boundary},n.amplitude.set=function(e)
{this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},n.amplitude.get=fu
nction(){return this.uniforms.amplitude},n.waveLength.set=function(e)
{this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},n.waveLength.get
=function(){return this.uniforms.waveLength},n.alpha.set=function(e)
{this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},n.alpha.get=function()
{return this.uniforms.alpha},Object.defineProperties(t.prototype,n),t}
(t.Filter),Pe=function(e){function t(t,n,r){void 0===t&&(t=[-10,0]),void 0===n&&(n=
[0,10]),void 0===r&&(r=[0,0]),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","precision mediump float;\n\nvarying vec2
vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform
vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n
gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n
gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n
gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n
gl_FragColor.a = texture2D(uSampler,
vTextureCoord).a;\n}\n"),this.red=t,this.green=n,this.blue=r}e&&(t.__proto__=e),
(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n={red:
{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return
n.red.get=function(){return this.uniforms.red},n.red.set=function(e)
{this.uniforms.red=e},n.green.get=function(){return
this.uniforms.green},n.green.set=function(e)
{this.uniforms.green=e},n.blue.get=function(){return
this.uniforms.blue},n.blue.set=function(e)
{this.uniforms.blue=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),je=function(e){function t(t,n,r){void 0===t&&(t=[0,0]),void 0===n&&(n=
{}),void 0===r&&(r=0),e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
5/9/20, 12:55 PM
Page 150 of 181
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2
center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float
power;\nuniform float brightness;\nuniform float speed;\nuniform float
radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n
float halfWavelength = wavelength * 0.5 / filterArea.x;\n float maxRadius =
radius / filterArea.x;\n float currentRadius = time * speed / filterArea.x;\n\n
float fade = 1.0;\n\n if (maxRadius > 0.0) {\n if (currentRadius >
maxRadius) {\n gl_FragColor = texture2D(uSampler, vTextureCoord);\n
return;\n }\n fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n
}\n\n vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n dir.y *=
filterArea.y / filterArea.x;\n float dist = length(dir);\n\n if (dist <= 0.0
|| dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength)
{\n gl_FragColor = texture2D(uSampler, vTextureCoord);\n return;\n
}\n\n vec2 diffUV = normalize(dir);\n\n float diff = (dist - currentRadius) /
halfWavelength;\n\n float p = 1.0 - pow(abs(diff), 2.0);\n\n // float powDiff
= diff * pow(p, 2.0) * ( amplitude * fade );\n float powDiff = 1.25 * sin(diff *
PI) * p * ( amplitude * fade );\n\n vec2 offset = diffUV * powDiff /
filterArea.xy;\n\n // Do clamp :\n vec2 coord = vTextureCoord + offset;\n
vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n vec4 color =
texture2D(uSampler, clampedCoord);\n if (coord != clampedCoord) {\n color
*= max(0.0, 1.0 - length(coord - clampedCoord));\n }\n\n // No clamp :\n //
gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n color.rgb *= 1.0
+ (brightness - 1.0) * p * fade;\n\n gl_FragColor =
color;\n}\n"),this.center=t,Array.isArray(n)&&(console.warn("Deprecated Warning:
ShockwaveFilter params Array has been changed to options Object."),n=
{}),n=Object.assign({amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n
),this.amplitude=n.amplitude,this.wavelength=n.wavelength,this.brightness=n.brightne
ss,this.speed=n.speed,this.radius=n.radius,this.time=r}e&&(t.__proto__=e);var n=
{center:{configurable:!0},amplitude:{configurable:!0},wavelength:
{configurable:!0},brightness:{configurable:!0},speed:{configurable:!0},radius:
{configurable:!0}};return((t.prototype=Object.create(e&&e.prototype)).constructor=t)
.prototype.apply=function(e,t,n,r)
{this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.center.get=function()
{return this.uniforms.center},n.center.set=function(e)
{this.uniforms.center=e},n.amplitude.get=function(){return
this.uniforms.amplitude},n.amplitude.set=function(e)
{this.uniforms.amplitude=e},n.wavelength.get=function(){return
this.uniforms.wavelength},n.wavelength.set=function(e)
{this.uniforms.wavelength=e},n.brightness.get=function(){return
this.uniforms.brightness},n.brightness.set=function(e)
{this.uniforms.brightness=e},n.speed.get=function(){return
this.uniforms.speed},n.speed.set=function(e)
{this.uniforms.speed=e},n.radius.get=function(){return
this.uniforms.radius},n.radius.set=function(e)
{this.uniforms.radius=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),Ie=function(e){function n(t,n,r){void 0===n&&(n=0),void 0===r&&
(r=1),e.call(this,"attribute vec2 aVertexPosition;\nattribute vec2
aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2
vTextureCoord;\n\nvoid main(void)\n{\n gl_Position = vec4((projectionMatrix *
vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n vTextureCoord =
aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2
dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n vec4 diffuseColor =
texture2D(uSampler, vTextureCoord);\n vec2 lightCoord = (vTextureCoord *
filterArea.xy) / dimensions;\n vec4 light = texture2D(uLightmap, lightCoord);\n
vec3 ambient = ambientColor.rgb * ambientColor.a;\n vec3 intensity = ambient +
5/9/20, 12:55 PM
Page 151 of 181
light.rgb;\n vec3 finalColor = diffuseColor.rgb * intensity;\n gl_FragColor =
vec4(finalColor, diffuseColor.a);\n}\n"),this.uniforms.dimensions=new
Float32Array(2),this.uniforms.ambientColor=new
Float32Array([0,0,0,r]),this.texture=t,this.color=n}e&&(n.__proto__=e);var r=
{texture:{configurable:!0},color:{configurable:!0},alpha:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.apply=function(e,t,n,r)
{this.uniforms.dimensions[0]=t.sourceFrame.width,this.uniforms.dimensions[1]=t.sourc
eFrame.height,e.applyFilter(this,t,n,r)},r.texture.get=function(){return
this.uniforms.uLightmap},r.texture.set=function(e)
{this.uniforms.uLightmap=e},r.color.set=function(e){var
n=this.uniforms.ambientColor;"number"==typeof e?
(t.utils.hex2rgb(e,n),this._color=e):
(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],this._color=t.utils.rgb2hex(n))},r.color.ge
t=function(){return this._color},r.alpha.get=function(){return
this.uniforms.ambientColor[3]},r.alpha.set=function(e)
{this.uniforms.ambientColor[3]=e},Object.defineProperties(n.prototype,r),n}
(t.Filter),Xe=function(e){function n(n,r,o,i){void 0===n&&(n=100),void 0===r&&
(r=600),void 0===o&&(o=null),void 0===i&&(i=null),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform sampler2D
uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2
start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat
random(vec3 scale, float seed)\n{\n return fract(sin(dot(gl_FragCoord.xyz + seed,
scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n vec4 color =
vec4(0.0);\n float total = 0.0;\n\n float offset = random(vec3(12.9898,
78.233, 151.7182), 0.0);\n vec2 normal = normalize(vec2(start.y - end.y, end.x -
start.x));\n float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize
- start, normal)) / gradientBlur) * blur;\n\n for (float t = -30.0; t <= 30.0;
t++)\n {\n float percent = (t + offset - 0.5) / 30.0;\n float
weight = 1.0 - abs(percent);\n vec4 sample = texture2D(uSampler,
vTextureCoord + delta / texSize * percent * radius);\n sample.rgb *=
sample.a;\n color += sample * weight;\n total += weight;\n }\n\n
color /= total;\n color.rgb /= color.a + 0.00001;\n\n gl_FragColor =
color;\n}\n"),this.uniforms.blur=n,this.uniforms.gradientBlur=r,this.uniforms.start=
o||new t.Point(0,window.innerHeight/2),this.uniforms.end=i||new
t.Point(600,window.innerHeight/2),this.uniforms.delta=new
t.Point(30,30),this.uniforms.texSize=new
t.Point(window.innerWidth,window.innerHeight),this.updateDelta()}e&&
(n.__proto__=e);var r={blur:{configurable:!0},gradientBlur:{configurable:!0},start:
{configurable:!0},end:
{configurable:!0}};return((n.prototype=Object.create(e&&e.prototype)).constructor=n)
.prototype.updateDelta=function()
{this.uniforms.delta.x=0,this.uniforms.delta.y=0},r.blur.get=function(){return
this.uniforms.blur},r.blur.set=function(e)
{this.uniforms.blur=e},r.gradientBlur.get=function(){return
this.uniforms.gradientBlur},r.gradientBlur.set=function(e)
{this.uniforms.gradientBlur=e},r.start.get=function(){return
this.uniforms.start},r.start.set=function(e)
{this.uniforms.start=e,this.updateDelta()},r.end.get=function(){return
this.uniforms.end},r.end.set=function(e)
{this.uniforms.end=e,this.updateDelta()},Object.defineProperties(n.prototype,r),n}
(t.Filter),qe=function(e){function t(){e.apply(this,arguments)}return e&&
(t.__proto__=e),
((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.updateDelta=fu
nction(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.ythis.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.d
elta.y=t/n},t}(Xe),Ne=function(e){function t(){e.apply(this,arguments)}return e&&
5/9/20, 12:55 PM
Page 152 of 181
(t.__proto__=e),
((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.updateDelta=fu
nction(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.ythis.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-
t/n,this.uniforms.delta.y=e/n},t}(Xe),We=function(e){function t(t,n,r,o){void
0===t&&(t=100),void 0===n&&(n=600),void 0===r&&(r=null),void 0===o&&
(o=null),e.call(this),this.tiltShiftXFilter=new
qe(t,n,r,o),this.tiltShiftYFilter=new Ne(t,n,r,o)}e&&(t.__proto__=e);var n={blur:
{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:
{configurable:!0}};return((t.prototype=Object.create(e&&e.prototype)).constructor=t)
.prototype.apply=function(e,t,n){var
r=e.getRenderTarget(!0);this.tiltShiftXFilter.apply(e,t,r),this.tiltShiftYFilter.app
ly(e,r,n),e.returnRenderTarget(r)},n.blur.get=function(){return
this.tiltShiftXFilter.blur},n.blur.set=function(e)
{this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},n.gradientBlur.get=functio
n(){return this.tiltShiftXFilter.gradientBlur},n.gradientBlur.set=function(e)
{this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},n.start.ge
t=function(){return this.tiltShiftXFilter.start},n.start.set=function(e)
{this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},n.end.get=function()
{return this.tiltShiftXFilter.end},n.end.set=function(e)
{this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},Object.defineProperties(t.pr
ototype,n),t}(t.Filter),Ye=function(e){function t(t,n,r){void 0===t&&(t=200),void
0===n&&(n=4),void 0===r&&(r=20),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform sampler2D
uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2
offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n coord *=
filterArea.xy;\n coord += filterArea.zw;\n\n return coord;\n}\n\nvec2
unmapCoord( vec2 coord )\n{\n coord -= filterArea.zw;\n coord /=
filterArea.xy;\n\n return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n coord -=
offset;\n\n float dist = length(coord);\n\n if (dist < radius)\n {\n
float ratioDist = (radius - dist) / radius;\n float angleMod = ratioDist *
ratioDist * angle;\n float s = sin(angleMod);\n float c =
cos(angleMod);\n coord = vec2(coord.x * c - coord.y * s, coord.x * s +
coord.y * c);\n }\n\n coord += offset;\n\n return coord;\n}\n\nvoid
main(void)\n{\n\n vec2 coord = mapCoord(vTextureCoord);\n\n coord =
twist(coord);\n\n coord = unmapCoord(coord);\n\n gl_FragColor =
texture2D(uSampler, coord );\n\n}\n"),this.radius=t,this.angle=n,this.padding=r}e&&
(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n=
{offset:{configurable:!0},radius:{configurable:!0},angle:{configurable:!0}};return
n.offset.get=function(){return this.uniforms.offset},n.offset.set=function(e)
{this.uniforms.offset=e},n.radius.get=function(){return
this.uniforms.radius},n.radius.set=function(e)
{this.uniforms.radius=e},n.angle.get=function(){return
this.uniforms.angle},n.angle.set=function(e)
{this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}
(t.Filter),Ze=function(e){function t(t,n,r,o){void 0===t&&(t=.1),void 0===n&&(n=
[0,0]),void 0===r&&(r=0),void 0===o&&(o=-1),e.call(this,"attribute vec2
aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3
projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n
gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n
vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D
uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float
uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float
MAX_KERNEL_SIZE = 32.0;\n\n// author: http://byteblacksmith.com/improvements-to-thecanonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float
seed) {\n const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n highp
float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n return
5/9/20, 12:55 PM
Page 153 of 181
fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n float minGradient =
uInnerRadius * 0.3;\n float innerRadius = (uInnerRadius + minGradient * 0.5) /
filterArea.x;\n\n float gradient = uRadius * 0.3;\n float radius = (uRadius -
gradient * 0.5) / filterArea.x;\n\n float countLimit = MAX_KERNEL_SIZE;\n\n
vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n float dist =
length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n float strength =
uStrength;\n\n float delta = 0.0;\n float gap;\n if (dist < innerRadius)
{\n delta = innerRadius - dist;\n gap = minGradient;\n } else if
(radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n delta
= dist - radius;\n gap = gradient;\n }\n\n if (delta > 0.0) {\n
float normalCount = gap / filterArea.x;\n delta = (normalCount - delta) /
normalCount;\n countLimit *= delta;\n strength *= delta;\n if
(countLimit < 1.0)\n {\n gl_FragColor = texture2D(uSampler,
vTextureCoord);\n return;\n }\n }\n\n // randomize the
lookup values to hide the fixed number of samples\n float offset =
rand(vTextureCoord, 0.0);\n\n float total = 0.0;\n vec4 color = vec4(0.0);\n\n
dir *= strength;\n\n for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n
float percent = (t + offset) / MAX_KERNEL_SIZE;\n float weight = 4.0 *
(percent - percent * percent);\n vec2 p = vTextureCoord + dir * percent;\n
vec4 sample = texture2D(uSampler, p);\n\n // switch to pre-multiplied alpha
to correctly blur transparent images\n // sample.rgb *= sample.a;\n\n
color += sample * weight;\n total += weight;\n\n if (t > countLimit)
{\n break;\n }\n }\n\n color /= total;\n // switch back
from pre-multiplied alpha\n // color.rgb /= color.a + 0.00001;\n\n
gl_FragColor =
color;\n}\n"),this.center=n,this.strength=t,this.innerRadius=r,this.radius=o}e&&
(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t;var n=
{center:{configurable:!0},strength:{configurable:!0},innerRadius:
{configurable:!0},radius:{configurable:!0}};return n.center.get=function(){return
this.uniforms.uCenter},n.center.set=function(e)
{this.uniforms.uCenter=e},n.strength.get=function(){return
this.uniforms.uStrength},n.strength.set=function(e)
{this.uniforms.uStrength=e},n.innerRadius.get=function(){return
this.uniforms.uInnerRadius},n.innerRadius.set=function(e)
{this.uniforms.uInnerRadius=e},n.radius.get=function(){return
this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&
(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}
(t.Filter);return
e.AdjustmentFilter=o,e.AdvancedBloomFilter=p,e.AsciiFilter=g,e.BevelFilter=y,e.Bloom
Filter=F,e.BulgePinchFilter=w,e.ColorMapFilter=O,e.ColorReplaceFilter=R,e.Convolutio
nFilter=k,e.CrossHatchFilter=B,e.CRTFilter=N,e.DotFilter=K,e.DropShadowFilter=U,e.Em
bossFilter=H,e.GlitchFilter=ee,e.GlowFilter=re,e.GodrayFilter=se,e.KawaseBlurFilter=
a,e.MotionBlurFilter=ce,e.MultiColorReplaceFilter=pe,e.OldFilmFilter=ge,e.OutlineFil
ter=ye,e.PixelateFilter=Ce,e.RadialBlurFilter=ze,e.ReflectionFilter=Te,e.RGBSplitFil
ter=Pe,e.ShockwaveFilter=je,e.SimpleLightmapFilter=Ie,e.TiltShiftFilter=We,e.TiltShi
ftAxisFilter=Xe,e.TiltShiftXFilter=qe,e.TiltShiftYFilter=Ne,e.TwistFilter=Ye,e.ZoomB
lurFilter=Ze,e}({},PIXI);Object.assign(PIXI.filters,this?this.__filters:__filters);
//# sourceMappingURL=node_modules/pixi-filters/dist/pixi-filters.js.map
!function(e,t){"object"==typeof exports&&"object"==typeof module?
module.exports=t():"function"==typeof define&&define.amd?
define([],t):"object"==typeof exports?exports.Warp=t():e.Warp=t()}
("undefined"!=typeof self?self:this,function(){return e=[function(e,t,r){"use
strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(t,r)
{if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(e,t)
{var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=
(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e)
{a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}
(t,r);throw new TypeError("Invalid attempt to destructure non-iterable
instance")};t.getSegmentSchema=function(e){return
u[e.toLowerCase()]},t.isDrawingSegment=function(e){return
5/9/20, 12:55 PM
Page 154 of 181
f.test(e.type)},t.createLineSegment=function(e){var t={relative:!1};switch(e.length)
{case 2:t.type="l";break;case 3:t.type="q";break;case
4:t.type="c";break;default:return!1}for(var r=1;r<e.length;r++){var n=(r<e.length-1?
r:y.length)-1,a=l(y[n],2),i=a[0],o=a[1];t[i]=e[r][0],t[o]=e[r][1],2<e[r].length&&
(t.extended=t.extended||{},t.extended[n]=e[r].slice(2))}return
t},t.joinSegments=function(e,t)
{if(e.type!==t.type||e.relative!==t.relative)return!1;var r=function(e,t,r){if(e&&t)
{for(var n=
[],a=Math.min(e.length,t.length),i=0;i<a;i++)n.push((e[i]+t[i])/2);y.extended[r]=n}}
,n=t.type,a=t.relative,i=t.x,o=t.y,l=!!e.extended&&!!t.extended,u={},y=
{type:n,relative:a,x:i,y:o,extended:u};switch(n){case"l":break;case"q":y.x1=
(e.x1+t.x1)/2,y.y1=
(e.y1+t.y1)/2,l&&r(e.extended[0],t.extended[0],0);break;case"c":y.x1=
(e.x1+e.x2)/2,y.y1=(e.y1+e.y2)/2,y.x2=(t.x1+t.x2)/2,y.y2=(t.y1+t.y2)/2,l&&
(r(e.extended[0],e.extended[1],0),r(t.extended[0],t.extended[1],1));break;default:re
turn!1}return t.extended&&t.extended[2]&&(u[2]=t.extended[2]),y};var u={m:
["x","y"],z:[],l:["x","y"],h:["x"],v:["y"],c:["x1","y1","x2","y2","x","y"],s:
["x2","y2","x","y"],q:["x1","y1","x","y"],t:["x","y"],a:
["rx","ry","xRotation","largeArc","sweep","x","y"]},y=t.pointGroups=[["x1","y1"],
["x2","y2"],["x","y"]],f=/[lhvcsqta]/},function(e,t,r){"use strict";function n(e)
{if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return
r}return Array.from(e)}Object.defineProperty(t,"__esModule",
{value:!0}),t.default=function(e,t){for(var r=[],a=0;a<e.length;a++){var
o=t(JSON.parse(JSON.stringify(e[a])),a,e,r);Array.isArray(o)?
r.push.apply(r,n(o)):o&&r.push(o)}return r}},function(e,t,r){"use
strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var
t=[],r=void 0;for(i.lastIndex=0;r=i.exec(e);){var n=r[1].toLowerCase(),l=
(r[2].match(o)||[]).map(parseFloat),u=n===r[1],y=(0,a.getSegmentSchema)
(n);if(l.length<y.length)throw new Error('Malformed path data: type "'+n+'" has
'+l.length+" arguments, expected "+scheme.length);if(0<y.length)
{if(l.length%y.length!=0)throw new Error('Malformed path data: type "'+n+'" has
'+l.length+" arguments, "+l.length%y.length+" too many");for(var
f=0;f<l.length/y.length;f++){for(var c=
{type:n,relative:u},v=0;v<y.length;v++)c[y[v]]=l[f*y.length+v];t.push(c)}}else
t.push({type:n,relative:u})}return t};var a=r(0),i=/([mzlhvcsqta])
([^mzlhvcsqta]*)/gi,o=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi},function(e,t,r){"use
strict";Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof
Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e)
{return e&&"function"==typeof
Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof
e};t.default=function(e){var t=1<arguments.length&&void 0!==arguments[1]?
arguments[1]:2,r=!1,n=Math.pow(10,t);return e.map(function(e){var t=[],o=e.relative?
e.type:e.type.toUpperCase(),l=r!==o,u=(0,i.getSegmentSchema)(e.type);l&&
(t.push(o),r=o);var y=!0,f=!1,c=void 0;try{for(var v,p=u[Symbol.iterator]();!(y=
(v=p.next()).done);y=!0){var d=e[v.value],h=void 0;switch(void
0===d?"undefined":a(d)){case"boolean":h=0|d;break;case"number":h=
(d*n|0)/n;break;default:throw new Error("Invalid path data")}l||t.push("
"),t.push(h),l=!1}}catch(e)
{f=!0,c=e}finally{try{!y&&p.return&&p.return()}finally{if(f)throw c}}return
t.join("")}).join("")};var i=r(0)},function(e,t,r){"use strict";function i(e,t,r)
{e.setAttribute(t,r)}Object.defineProperty(t,"__esModule",
{value:!0}),t.createElement=function(e){var t=1<arguments.length&&void
0!==arguments[1]?arguments[1]:
{},r=document.createElementNS("http://www.w3.org/2000/svg",e),n=!0,a=!1,o=void
0;try{for(var l,u=Object.keys(t)[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var
y=l.value;i(r,y,t[y])}}catch(e)
{a=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(a)throw o}}return
r},t.getProperty=function(e,t){return e[t]instanceof SVGAnimatedLength?
e[t].baseVal.value:e.getAttribute(t)},t.setProperty=i},function(e,t,r){"use
strict";function n(e){for(var t=1<arguments.length&&void 0!==arguments[1]?
5/9/20, 12:55 PM
Page 155 of 181
arguments[1]:.5,r=[],n=[],a=[e];a.length<e.length;){for(var i=a[a.length-1],o=
[],l=1;l<i.length;l++){for(var u=i[l-1],y=i[l],f=
[],c=Math.max(u.length,y.length),v=0;v<c;v++){var p=u[v]||0,s=y[v]||0;f.push(p+(sp)*t)}o.push(f)}a.push(o)}for(var d=0;d<a.length;d++)r.push(a[d]
[0]),n.push(a[a.length-1-d][d]);return[r,n]}function i(e){for(var
t=e[0],r=e[e.length-1],n=0,a=0;a<t.length;a++){var i=r[a]-
t[a];n+=Math.pow(i,2)}return Math.sqrt(n)}Object.defineProperty(t,"__esModule",
{value:!0}),t.split=n,t.until=function(e,t){for(var r=2<arguments.length&&void
0!==arguments[2]?arguments[2]:i,a=[e],o=[];0<a.length;){var
l=a.pop();if(r(l)>t)for(var u=n(l),y=u.length-1;0<=y;y--)a.push(u[y]);else
o.push(l)}return o},t.euclideanDistance=i},function(e,t,r){"use strict";var
a=function(e){return e&&e.__esModule?e:{default:e}}
(r(7));e.exports=a.default},function(e,t,r){"use strict";function n(e){return
e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var
t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return
Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=function()
{function e(e,t){for(var r=0;r<t.length;r++){var
n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&
(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return
r&&e(t.prototype,r),n&&e(t,n),t}}
(),l=r(8),u=r(4),f=n(r(2)),v=n(r(3)),p=r(5),d=n(r(15)),x=n(r(16)),m=n(r(17)),b=funct
ion(){function e(t){var r=1<arguments.length&&void 0!==arguments[1]?
arguments[1]:"q";(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot
call a class as a function")})(this,e),this.element=t,(0,l.shapesToPaths)(t),
(0,l.preparePaths)(t,r);var
n=Array.from(t.querySelectorAll("path"));this.paths=n.map(function(e){var t=
(0,u.getProperty)(e,"d");return{pathElement:e,pathData:(0,f.default)(t)}})}return
o(e,[{key:"update",value:function(){var e=!0,t=!1,r=void 0;try{for(var
n,a=this.paths[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var
i=n.value,o=i.pathElement,l=i.pathData,y=(0,v.default)(l);(0,u.setProperty)
(o,"d",y)}}catch(e){t=!0,r=e}finally{try{!e&&a.return&&a.return()}finally{if(t)throw
r}}}},{key:"transform",value:function(e){e=Array.isArray(e)?e:[e];var
t=!0,r=!1,n=void 0;try{for(var a,i=this.paths[Symbol.iterator]();!(t=
(a=i.next()).done);t=!0){var o=a.value;o.pathData=(0,d.default)
(o.pathData,e)}}catch(e)
{r=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(r)throw
n}}this.update()}},{key:"interpolate",value:function(e){function t(t){var n=
[t[0].slice(0,2),t[t.length-1].slice(0,2)],a=(0,p.euclideanDistance)(n);return
r=r||e<a,a}var r=!1,n=!0,a=!1,i=void 0;try{for(var o,l=this.paths[Symbol.iterator]
();!(n=(o=l.next()).done);n=!0){var u=o.value;u.pathData=(0,x.default)
(u.pathData,e,t)}}catch(e)
{a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}},
{key:"extrapolate",value:function(e){function t(t){var n=
[t[0].slice(0,2),t[t.length-1].slice(0,2)],a=(0,p.euclideanDistance)(n);return
r=r||a<=e,a}var r=!1,n=!0,a=!1,i=void 0;try{for(var o,l=this.paths[Symbol.iterator]
();!(n=(o=l.next()).done);n=!0){var u=o.value;u.pathData=(0,m.default)
(u.pathData,e,t)}}catch(e)
{a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}},
{key:"preInterpolate",value:function(e,t){function r(e){var r=
[e[0].slice(0,2),e[e.length-1].slice(0,2)],a=(0,p.euclideanDistance)(r);return
n=n||t<a,a}var n=!1,i=!0,o=!1,l=void 0;try{for(var u,y=this.paths[Symbol.iterator]
();!(i=(u=y.next()).done);i=!0){var f=u.value,c=(0,d.default)(f.pathData,function(t)
{var r=e(t.slice(0,2));return r.push.apply(r,a(t)),r}),v=(0,x.default)
(c,t,r);f.pathData=(0,d.default)(v,function(e){return e.slice(2)})}}catch(e)
{o=!0,l=e}finally{try{!i&&y.return&&y.return()}finally{if(o)throw l}}return n}},
{key:"preExtrapolate",value:function(e,t){function r(e){var r=
[e[0].slice(0,2),e[e.length-1].slice(0,2)],a=(0,p.euclideanDistance)(r);return
n=n||a<=t,a}var n=!1,i=!0,o=!1,l=void 0;try{for(var u,y=this.paths[Symbol.iterator]
();!(i=(u=y.next()).done);i=!0){var f=u.value,c=(0,d.default)(f.pathData,function(t)
{var r=e(t.slice(0,2));return r.push.apply(r,a(t)),r}),v=(0,m.default)
5/9/20, 12:55 PM
Page 156 of 181
(c,t,r);f.pathData=(0,d.default)(v,function(e){return e.slice(2)})}}catch(e)
{o=!0,l=e}finally{try{!i&&y.return&&y.return()}finally{if(o)throw l}}return n}}]),e}
();t.default=b},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:
{default:e}}function a(e){if(Array.isArray(e)){for(var
t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return
Array.from(e)}Object.defineProperty(t,"__esModule",
{value:!0}),t.shapesToPaths=function(e){var t={line:function(e){return
M.line((0,_.getProperty)(e,"x1"),(0,_.getProperty)(e,"y1"),(0,_.getProperty)
(e,"x2"),(0,_.getProperty)(e,"y2"))},polyline:function(e){return
M.polyline.apply(M,a(e.points))},polygon:function(e){return
M.polygon.apply(M,a(e.points))},rect:function(e){return
M.rectangle((0,_.getProperty)(e,"x"),(0,_.getProperty)(e,"y"),(0,_.getProperty)
(e,"width"),(0,_.getProperty)(e,"height"),(0,_.getProperty)(e,"rx"),
(0,_.getProperty)(e,"ry"))},ellipse:function(e){return M.ellipse((0,_.getProperty)
(e,"cx"),(0,_.getProperty)(e,"cy"),(0,_.getProperty)(e,"rx"),(0,_.getProperty)
(e,"ry"))},circle:function(e){return M.circle((0,_.getProperty)(e,"cx"),
(0,_.getProperty)(e,"cy"),(0,_.getProperty)
(e,"r"))}},r=e.querySelectorAll(Object.keys(t).join(",")),n=!0,i=!1,o=void
0;try{for(var l,u=r[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var
y=l.value,c=y.tagName.toLowerCase();if(c in t){var v=t[c](y),s={d:(0,f.default)
(v)},d=!0,h=!1,x=void 0;try{for(var g,m=Array.from(y.attributes)[Symbol.iterator]
();!(d=(g=m.next()).done);d=!0){var
b=g.value,N=b.nodeName,w=b.nodeValue;/^(x|y|x1|y1|x2|y2|width|height|r|rx|ry|cx|cy|p
oints|d)$/.test(N)||(s[N]=w)}}catch(e)
{h=!0,x=e}finally{try{!d&&m.return&&m.return()}finally{if(h)throw x}}var P=
(0,_.createElement)("path",s);y.parentNode.replaceChild(P,y)}}}catch(e)
{i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw
o}}},t.preparePaths=function(e){var t=1<arguments.length&&void 0!==arguments[1]?
arguments[1]:"q",r=Array.from(e.querySelectorAll("path")),n=!0,a=!1,i=void
0;try{for(var o,l=r[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var y=o.value,c=
(0,_.getProperty)(y,"d"),p=(0,u.default)(c);p=(0,v.default)(p,(0,s.default)()),p=
(0,v.default)(p,(0,h.default)()),p=(0,v.default)(p,(0,g.default)()),p=(0,v.default)
(p,(0,b.default)(t)),p=(0,v.default)(p,(0,w.default)()),c=(0,f.default)(p),
(0,_.setProperty)(y,"d",c)}}catch(e)
{a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}};var
u=n(r(2)),f=n(r(3)),v=n(r(1)),s=n(r(9)),h=n(r(10)),g=n(r(11)),b=n(r(12)),w=n(r(13)),
M=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in
e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}
(r(14)),_=r(4)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",
{value:!0}),t.default=function(){var e=["x","x1","x2"],t=
["y","y1","y2"],r=0,n=0,i=NaN,o=NaN;return function(l){if(isNaN(i)&&
(0,a.isDrawingSegment)(l)&&(i=r,o=n),"z"!==l.type||isNaN(i)||
(r=i,n=o,o=i=NaN),l.relative){var u=!0,y=!1,f=void 0;try{for(var
c,v=e[Symbol.iterator]();!(u=(c=v.next()).done);u=!0){var p=c.value;p in l&&
(l[p]+=r)}}catch(e){y=!0,f=e}finally{try{!u&&v.return&&v.return()}finally{if(y)throw
f}}var s=!0,d=!1,h=void 0;try{for(var x,g=t[Symbol.iterator]();!(s=
(x=g.next()).done);s=!0){var m=x.value;m in l&&(l[m]+=n)}}catch(e)
{d=!0,h=e}finally{try{!s&&g.return&&g.return()}finally{if(d)throw
h}}l.relative=!1}return r="x"in l?l.x:r,n="y"in l?l.y:n,"m"===l.type&&
(i=r,o=n),l}};var a=r(0)},function(e,t,r){"use
strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var
e=0,t=0,r=NaN,n=NaN,a=NaN,i=NaN,o=NaN,l=NaN;return function(u)
{if(isNaN(r)&&"m"!==u.type)throw new Error('Transform path error: path must start
with "moveto"');return"s"===u.type&&(a=isNaN(a)?e:a,i=isNaN(i)?t:i,u.type="c",u.x1=
(u.relative?1:2)*e-a,u.y1=(u.relative?1:2)*t-i),i="c"===u.type?(a=(u.relative?
e:0)+u.x2,(u.relative?t:0)+u.y2):a=NaN,"t"===u.type&&(o=isNaN(o)?e:o,l=isNaN(l)?
t:l,u.type="q",u.x1=(u.relative?1:2)*e-o,u.y1=(u.relative?1:2)*t-l),l="q"===u.type?
(o=(u.relative?e:0)+u.x1,(u.relative?t:0)+u.y1):o=NaN,"z"===u.type&&
(e=r,t=n),e="x"in u?(u.relative?e:0)+u.x:e,t="y"in u?(u.relative?
t:0)+u.y:t,"m"===u.type&&(r=e,n=t),u}}},function(e,t,r){"use
5/9/20, 12:55 PM
Page 157 of 181
strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var
e=0,t=0,r=NaN,n=NaN;return function(a){if(isNaN(r)&&"m"!==a.type)throw new
Error('Transform path error: path must start with "moveto"');switch(a.type)
{case"h":a.type="l",a.y=a.relative?0:t;break;case"v":a.type="l",a.x=a.relative?
0:e;break;case"z":a.type="l",a.x=r-(a.relative?e:0),a.y=n-(a.relative?
t:0);break;case"a":0!==a.rx&&0!==a.ry||(a.type="l",delete a.rx,delete a.ry,delete
a.xRotation,delete a.largeArc,delete a.sweep)}return e=(a.relative?e:0)+a.x,t=
(a.relative?t:0)+a.y,"m"===a.type&&(r=e,n=t),a}}},function(e,t,r){"use
strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var
e=0<arguments.length&&void 0!==arguments[0]?
arguments[0]:"q",t=0,r=0,n=NaN,i=NaN;return function(o){if(isNaN(n)&&
(0,a.isDrawingSegment)(o.type)&&(n=t,i=r),"z"!==o.type||isNaN(n)||
(t=n,r=i,i=n=NaN),"l"===o.type){var l=o.relative?0:t,u=o.relative?
0:r;switch(o.type=e){case"q":o.x1=(l+o.x)/2,o.y1=(u+o.y)/2;break;case"c":var y=(o.xl)/3,f=(o.y-u)/3;o.x1=l+y,o.y1=u+f,o.x2=l+2*y,o.y2=u+2*f;break;default:throw new
Error('Invalid curve type "'+e+'"')}}return t="x"in o?(o.relative?t:0)+o.x:t,r="y"in
o?(o.relative?r:0)+o.y:r,"m"===o.type&&(n=t,i=r),o}};var a=r(0)},function(e,t,r)
{"use strict";function a(e,t,r,n,a,o,l,u,y)
{if(e===u&&t===y)return[];if(!r&&!n)return[{type:"l",x:u,y:y}];var
f=Math.sin(a*Math.PI/180),c=Math.cos(a*Math.PI/180),v=c*(e-u)/2+f*(t-y)/2,p=-f*(eu)/2+c*(t-y)/2,s=r*r,d=n*n,h=v*v,x=p*p,g=0,m=s*d-s*x-d*h;if(m<0){var b=Math.sqrt(1-
m/(s*d));r*=b,n*=b}else g=(o&&l||!o&&!l?-1:1)*Math.sqrt(m/(s*x+d*h));var
N=g*r*p/n,w=-g*n*v/r,P=c*N-f*w+(e+u)/2,M=f*N+c*w+(t+y)/2,_=i(1,0,(v-N)/r,(pw)/n),A=i((v-N)/r,(p-w)/n,(-v-N)/r,(-p-w)/n);!l&&0<A?A-=2*Math.PI:l&&A<0&&
(A+=2*Math.PI);for(var S=
[],j=Math.ceil(Math.abs(A/(Math.PI/2))),O=A/j,k=8/3*Math.sin(O/4)*Math.sin(O/4)/Math
.sin(O/2),D=0;D<j;D++){var
q=Math.cos(_),E=Math.sin(_),I=_+O,z=Math.cos(I),R=Math.sin(I),T=c*r*zf*n*R+P,C=f*r*z+c*n*R+M,G=k*(-c*r*E-f*n*q),L=k*(-f*r*E+c*n*q),V=k*(c*r*R+f*n*z),J=k*
(f*r*Rc*n*z);S.push({type:"c",x:T,y:C,x1:e+G,y1:t+L,x2:T+V,y2:C+J}),_=I,e=T,t=C}return
S}function i(e,t,r,n){var a=Math.atan2(t,e),i=Math.atan2(n,r);return a<=i?ia:2*Math.PI-(a-i)}Object.defineProperty(t,"__esModule",
{value:!0}),t.default=function(){var e=0,t=0,r=NaN,n=NaN;return function(i){var
l=i;if(isNaN(r)&&(0,o.isDrawingSegment)(i.type)&&(r=e,n=t),"z"!==i.type||isNaN(r)||
(e=r,t=n,n=r=NaN),"a"===i.type){var x=a(i.relative?0:e,i.relative?
0:t,i.rx,i.ry,i.xRotation,i.largeArc,i.sweep,i.x,i.y),g=0,m=0,b=!0,N=!1,w=void
0;try{for(var P,M=x[Symbol.iterator]();!(b=(P=M.next()).done);b=!0){var
_=P.value;_.relative=i.relative,i.relative&&"c"===_.type&&(_.x-=g,_.x1-=g,_.x2-
=g,_.y-=m,_.y1-=m,_.y2-=m),g=_.x,m=_.y}}catch(e)
{N=!0,w=e}finally{try{!b&&M.return&&M.return()}finally{if(N)throw w}}l=x}return
e="x"in i?(i.relative?e:0)+i.x:e,t="y"in i?(i.relative?t:0)+i.y:t,"m"===i.type&&
(r=e,n=t),l}};var o=r(0)},function(e,t,r){"use strict";function a(){for(var
e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return
t.map(function(e,t)
{return{type:0===t?"m":"l",relative:!1,x:e.x||e[0],y:e.y||e[1]}})}function
l(e,t,r,n){return[{type:"m",relative:!1,x:e,y:t-n},
{type:"a",relative:!1,rx:r,ry:n,xRotation:0,largeArc:!1,sweep:!0,x:e,y:t+n},
{type:"a",relative:!1,rx:r,ry:n,xRotation:0,largeArc:!1,sweep:!0,x:e,y:tn}]}Object.defineProperty(t,"__esModule",{value:!0}),t.line=function(e,t,r,n)
{return[{type:"m",relative:!1,x:e,y:t},
{type:"l",relative:!1,x:r,y:n}]},t.polyline=a,t.polygon=function(){var
e=a.apply(void 0,arguments);return
e.append({type:"z",relative:!1}),e},t.rectangle=function(e,t,r,n){var
a=4<arguments.length&&void 0!==arguments[4]?
arguments[4]:0,i=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;return
0<a||0<i?[{type:"m",relative:!1,x:e+(a=a||i),y:t},{type:"h",relative:!1,x:e+r-a},
{type:"a",relative:!1,rx:a,ry:i=i||a,xRotation:0,largeArc:!1,sweep:!0,x:e+r,y:t+i},
{type:"v",relative:!1,y:t+n-i},
{type:"a",relative:!1,rx:a,ry:i,xRotation:0,largeArc:!1,sweep:!0,x:e+r-a,y:t+n},
5/9/20, 12:55 PM
Page 158 of 181
{type:"h",relative:!1,x:e+a},
{type:"a",relative:!1,rx:a,ry:i,xRotation:0,largeArc:!1,sweep:!0,x:e,y:t+n-i},
{type:"v",relative:!1,y:t+i},
{type:"a",relative:!1,rx:a,ry:i,xRotation:0,largeArc:!1,sweep:!0,x:e+a,y:t}]:
[{type:"m",relative:!1,x:e,y:t},{type:"h",relative:!1,x:e+r},
{type:"v",relative:!1,y:t+n},{type:"h",relative:!1,x:e},
{type:"v",relative:!1,y:t}]},t.ellipse=l,t.circle=function(e,t,r){return
l(e,t,r,r)}},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var
t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return
Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(t,r)
{if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(e,t)
{var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=
(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e)
{a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}
(t,r);throw new TypeError("Invalid attempt to destructure non-iterable
instance")};t.default=function(e,t){return(0,l.default)(e,function(e){for(var
r=0;r<u.pointGroups.length;r++){var a=i(u.pointGroups[r],2),o=a[0],l=a[1];if(o in
e&&l in e){var y=(e.extended?e.extended[r]:null)||[],f=
[e[o],e[l]].concat(n(y)),c=t.reduce(function(e,t){return
t(e)},f);if(c.length<2)throw new Error("Transformer must return at least 2
points");e[o]=c[0],e[l]=c[1],2<c.length&&(e.extended=e.extended||
{},e.extended[r]=c.slice(2))}}return e})};var l=function(e){return e&&e.__esModule?
e:{default:e}}(r(1)),u=r(0)},function(e,t,r){"use strict";function n(e)
{if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return
r}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var
i=function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return
function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=
(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e)
{a=!0,i=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw i}}return r}
(t,r);throw new TypeError("Invalid attempt to destructure non-iterable
instance")};t.default=function(e,t,r){var a=[];return(0,l.default)(e,function(e){var
o=e;if(f.test(e.type)){for(var l=[a],c=0;c<y.pointGroups.length;c++){var
v=i(y.pointGroups[c],2),p=v[0],s=v[1];if(p in e&&s in e){var d=(e.extended?
e.extended[c]:null)||[],h=[e[p],e[s]].concat(n(d));l.push(h)}}var x=(0,u.until)
(l,t,r);1<x.length&&(o=x.map(function(e){return(0,y.createLineSegment)
(e)}))}if("x"in e&&"y"in e){var g=(e.extended?e.extended[2]:null)||[],m=
[e.x,e.y].concat(n(g));a=m}return o})};var l=function(e){return e&&e.__esModule?e:
{default:e}}(r(1)),u=r(5),y=r(0),f=/[lqc]/},function(e,t,r){"use
strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r)
{return(0,i.default)(e,function(e,n,a,i){if(1<n){var u=i[i.length-1],y=i[i.length2];if(l.test(e.type)&&u.type===e.type){var f=[[y.x,y.y],[e.x,e.y]];if(r(f)<=t){var
c=(0,o.joinSegments)(u,e);if(c)return i[i.length-1]=c,!1}}}return e})};var
i=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),o=r(0),l=/[lqc]/}],r=
{},t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,
{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?
function(){return e.default}:function(){return e};return
t.d(r,"a",r),r},t.o=function(e,t){return
Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6);function t(n)
{if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return
e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var e,r});
//# sourceMappingURL=node_modules/warpjs/dist/warp.js.map
"use strict";var yohoho=function(){var
r,i,t,n,o="https://s.yohoho.io",a=!1,d=!1,h=!1,P=!1,x=2.5,b=Math.PI/16,M=.05,s=5,S=2
0,C=!1,c=!0,E=10,f=Math.PI/2,k=Math.PI,g=.2,m=!1,u=10,p=50,l=!1,T=!1,B=!1,w=2,I=0,X=
.9,L=1.1,H=!1;S=10,P=B=T=l=m=!(c=!(C=h=!(M=0))),k=Math.PI+Math.PI/4;var
R,O,A,D,F,N,W,z,G,K,_,Y,q,V,U,j,J,Z,v,Q,$,ee,te,ne,ie,oe,ae,re,de,le,he,se=1,ce=!
(H=!0),ge=!0,me=0,ue=0,pe=0,ye={},fe={},we={},Ie=
{},ve=0,xe=0,be=0,Me=0,ke=0,Pe=0,Se=0,Ce=0,Ee=0,Te=0,Be=0,Xe=0,Le=
(I=10,"n/a"),He="n/a",Re=0,Oe=11,Ae=.5,De=3*Ae,Fe=
{},Ne=-1,We=0,ze=-1!==document.referrer.indexOf("kongregate.com"),Ge=-1!==document.r
5/9/20, 12:55 PM
Page 159 of 181
eferrer.indexOf("newgrounds.com"),Ke=-1!==document.referrer.indexOf("crazygames.com"
)||-1!==document.referrer.indexOf("speelspelletjes.nl")||-1!==document.referrer.inde
xOf("gioca.re")||-1!==document.referrer.indexOf("
onlinegame.co.id")||-1!==document.referrer.indexOf("1001juegos.com")||-1!==document.
referrer.indexOf("crazygames.fr")||-1!==document.referrer.indexOf("crazygames.ru")||
-1!==document.referrer.indexOf("crazygames.com.br"),_e=-1!==document.referrer.indexO
f("pacogames.com")||-1!==document.referrer.indexOf("gamearter.com");var e,Ye=
(e=document.createElement("canvas").getContext("2d"),
(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixel
Ratio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRat
io||1));var qe,Ve=(qe={dpi:96,dpcm:96/2.54},{dppx:Ue,dpi:function(){return
Ue()*qe.dpi},dpcm:function(){return Ue()*qe.dpcm}}).dpcm();function Ue()
{return"undefined"==typeof window?
0:+window.devicePixelRatio||Math.sqrt(screen.deviceXDPI*screen.deviceYDPI)/qe.dpi||0
}function je(e){se=e;try{"undefined"!=typeof
Storage&&localStorage.setItem("quality",e)}catch(e){}O&&
(O.resolution=se*Ye,O.rootRenderTarget&&
(O.rootRenderTarget.resolution=se*Ye),nn())}var Je=!1;var Ze,Qe=
(Ze=navigator.userAgent||navigator.vendor||window.opera,!
(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fenn
ec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge
|maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?
|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.
(browser|link)|vodafone|wap|windows
ce|xda|xiino|android|ipad|playbook|silk/i.test(Ze)&&!/1207|6310|6590|3gso|4thp|50[1-
6]i|770s|802s|a wa|abac|ac(er|oo|s\-
)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r
|s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-
(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-
|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-
d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1
u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-
|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-
(20|go|ma)|i230|iac( |\-
|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt(
|\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[aw])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-
cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v
)|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-
|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\
-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-
a|qc(07|12|21|32|60|\-[2-7]|i\-
)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-
)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-
|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v
)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-
mo|to(pl|sh)|ts(70|m\-
|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-
v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g
|nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-
/i.test(Ze.substr(0,4)))||"MacIntel"===navigator.platform&&void
0!==navigator.maxTouchPoints&&1<navigator.maxTouchPoints),$e=-1!==navigator.userAgen
t.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.user
Agent.indexOf("Chromium"),et=Qe&&$e;function tt(){if(0==
(R=document.getElementById("username").value.substring(0,14)).length&&
(R="You"),pe++,"undefined"!=typeof
Storage)try{localStorage.setItem("gamesStarted",pe),"You"!=R&&localStorage.setItem("
username",R)}catch(e){console.log(e)}Bt(),_i(),"undefined"!=typeof
PokiSDK&&PokiSDK.gameplayStart()}function nt(){Qe&&!et&&
(document.body.requestFullscreen?
5/9/20, 12:55 PM
Page 160 of 181
document.body.requestFullscreen():document.body.mozRequestFullScreen?
document.body.mozRequestFullScreen():document.body.webkitRequestFullscreen?
document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT):document.body.ms
RequestFullscreen&&document.body.msRequestFullscreen()),it=0;var e=function()
{if("undefined"!=typeof PokiSDK)return!0;var e=(new Date).getTime();return 8==Oe?
e<Re||12e4<=e-Re:Ke?e<Re||18e4<=e-Re:pe%2==1}();e&&function()
{try{if(at=!0,"undefined"!=typeof PokiSDK)PokiSDK.commercialBreak().then(rt);else
if(window.famobi)window.famobi.showAd(rt),"undefined"!=typeof
gtag&&gtag("event","ShowFamobiVideo",
{event_category:"Ads"});else{if("undefined"==typeof
aiptag||!aiptag.cmd.player.push)return at=!1;aiptag.cmd.player.push(function()
{adplayer.startPreRoll()}),document.getElementById("yohohoio_300x250").style.display="none"}return!0}catch(e){return console.error(e),at=!1}}
()?"undefined"!=typeof gtag&&gtag("event","StartGame",
{event_category:"Click",event_label:"VideoAd",abBotSkillLevel:Oe,adBlockDetected:Je,
standaloneNavigator:!0===window.navigator.standalone,webglGPU:He,initialRef:Le}):
(tt(),"undefined"!=typeof gtag&&gtag("event","StartGame",
{event_category:"Click",event_label:e?"VideoAdBlocked":"NoVideoAd",abBotSkillLevel:O
e,adBlockDetected:Je,standaloneNavigator:!0===window.navigator.standalone,webglGPU:H
e,initialRef:Le}))}var it=0;var ot,at=!1;function rt(){at&&(at=!1,0==it?
tt():doRespawn(),document.getElementById("yohohoio_300x250").style.display="block",Re=(new
Date).getTime(),localStorage.setItem("lastVideoAdEndedTime",Re))}function dt(e,t)
{return ot&&ot.width==e&&ot.height==t||
((ot=document.createElement("canvas")).width=e,ot.height=t),ot}var lt={};function
ht(e,t){if(lt[e.textureCacheIds[0]+"-"+t])var n=lt[e.textureCacheIds[0]+"-
"+t];else{var i=t,o=t;e.width>e.height&&(o=t/e.width*e.height),e.width<e.height&&
(i=t/e.height*e.width);var
a=dt(i,o);a.getContext("2d").drawImage(e.baseTexture.source,e.orig.x,e.orig.y,e.orig
.width,e.orig.height,0,0,i,o);n=a.toDataURL("image/png");lt[e.textureCacheIds[0]+"-
"+t]=n}var r=document.createElement("img");return
r.src=n,r.style.position="absolute",r}function st(e,t){if(st[e.textureCacheIds[0]+"-
"+t])var n=st[e.textureCacheIds[0]+"-"+t];else{var
i=t,o=t/e.width*e.height,a=dt(i,o);a.getContext("2d").drawImage(e.baseTexture.source
,e.orig.x,e.orig.y,e.orig.width,e.orig.height,0,0,i,o);n=a.toDataURL("image/png");st
[e.textureCacheIds[0]+"-"+t]=n}var r=document.createElement("img");return
r.src=n,r.style.position="absolute",r}var ct=
[1,.8,.8,.8,.8,.9,.8,1.1,1,1,.9,.8,1,.9,.8,1,.9,1,1,.9,.8,.8,.8,.9,1,.9,1,.9,.8,.9,.
9,.9,.9,.9,.9,.9];function gt(e,t,n){var i=Ie[e];mt[i]||(i=1);var
o=i,a=document.createElement("div");a.style.position="relative",a.style.display="inl
ine-block",a.style.width=t+"px",a.style.height=t+"px";(h=j["p"+i+"c"]).height;var
r=.9*t,d=.9*t;h.width>h.height?r=d/h.width*h.height:d=r/h.height*h.width,n||
(r*=ct[i],d*=ct[i]);var l=ht(h,Math.max(d,r));l.style.left=t*
(1-.9)/2+"px",l.style.top=t*
(1-.9)/2+"px",l.style.width=Math.floor(d)+"px",l.style.height=Math.floor(r)+"px";var
h,s=278/h.height,c=312/h.height,g=
(h=j["p"+o+"w"]).height/427*r*s*1.6,m=g/h.height*h.width,u=ht(h,g);u.style.width=Mat
h.floor(m)+"px",u.style.height=Math.floor(g)+"px";var p=f+k;return
u.style.transformOrigin=100*mt[o].anchor[0]+"%
"+100*mt[o].anchor[1]+"%",u.style.transform="rotate("+p+"rad)
scaleX(-1)",u.style.left=t*(1-.9)/2+d/2-
(mt[o].anchor[0]*m+mt[o].anchor[1]*g)/Math.sqrt(2)/2+"px",u.style.top=t*
(1-.9)/2+r/2-
g*mt[o].anchor[1]+Math.min(d,r)/2*c+"px",a.appendChild(u),a.appendChild(l),a}var mt=
{1:{anchor:[59/115,49/427],handShift:35/427,polygon:
[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},2:{anchor:
[59/115,49/427],handShift:340/427,polygon:[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},3:
{anchor:[59/115,49/427],handShift:340/427,polygon:
[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},4:{anchor:
[59/115,49/427],handShift:340/427,polygon:[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},5:
5/9/20, 12:55 PM
Page 161 of 181
{anchor:[59/115,49/427],handShift:340/427,polygon:
[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},6:{anchor:
[59/115,49/427],handShift:340/427,polygon:[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},7:
{anchor:[59/115,49/427],handShift:340/427,polygon:
[.15,.3,.35,.95,.95,.95,.7,.3,.15,.3]},8:{anchor:
[59/115,49/427],handShift:340/427,polygon:[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},9:
{anchor:[59/115,49/427],handShift:340/427,polygon:
[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},10:{anchor:
[59/115,58/427],handShift:340/427,polygon:[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},11:
{anchor:[59/115,67/477],handShift:340/427,polygon:
[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},12:{anchor:
[59/115,87/449],handShift:340/427,polygon:[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},13:
{anchor:[59/115,123/447],handShift:340/427,polygon:
[.3,.3,.3,.95,.7,.95,.7,.3,.3,.3]},14:{anchor:
[59/115,49/427],handShift:340/427,polygon:[.25,.3,.4,.95,.95,.95,.7,.3,.25,.3]},15:
{anchor:[59/115,49/427],handShift:340/427,polygon:
[.3,.3,.4,.98,.9,.98,.7,.3,.3,.3]},16:{anchor:
[59/115,123/539],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},17:
{anchor:[59/115,137/554],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},18:{anchor:
[59/115,155/600],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},19:
{anchor:[59/115,49/427],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},20:{anchor:
[59/115,84/485],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},21:
{anchor:[59/115,213/589],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},22:{anchor:
[59/115,69/423],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},23:
{anchor:[59/115,215/581],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},24:{anchor:
[59/115,131/455],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},25:
{anchor:[59/115,112/481],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},26:{anchor:
[108/204,160/492],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},27:
{anchor:[59/115,142/527],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},28:{anchor:
[59/115,100/497],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},29:
{anchor:[59/115,59/415],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},30:{anchor:
[59/115,139/462],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},31:
{anchor:[59/115,199/713],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},32:{anchor:
[59/115,83/449],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},33:
{anchor:[59/115,141/544],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},34:{anchor:
[59/115,160/487],handShift:340/427,polygon:[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]},35:
{anchor:[59/115,152/600],handShift:340/427,polygon:
[.3,.3,.3,.99,.7,.99,.7,.3,.3,.3]}};function ut(e){var t=Ie[e];mt[t]||(t=1);var
n=t,i=new PIXI.Container,o=new
PIXI.Sprite(j["p"+t+"c"]),a=o.texture.height/312;o.height=312/278*ie*2*a,o.width=o.h
eight/o.texture.height*o.texture.width,o.anchor.set(.5,.5),i.addChild(o),i.base=o;va
r r=new PIXI.Text(we[e]?we[e]:"",
{fontFamily:"Nunito",fontWeight:"bold",fontSize:Math.round(Math.min(window.innerHeig
ht,window.innerWidth)/30),fill:4473924,align:"center"});r.anchor.set(.5),r.scale.set
(1/A.scale.x),K.addChild(r),i.usernameText=r;var d=new
PIXI.Sprite(j["p"+n+"w"]),l=d.texture.height/427;d.height=l*ie*2*1.6,d.width=d.heigh
t/d.texture.height*d.texture.width,i.weapon=d,i.weaponScale=1/a;var h=new
PIXI.Container;if(h.pivot.set(mt[n].anchor[0],mt[n].anchor[1]),h.addChild(d),Y.addCh
ild(h),i.weaponContainer=h,i.weaponId=n,pt(i),i.sx=0,i.sy=0,i.name=name,i.playerId=e
,Fe[e]=i,q.addChild(i),i.attacking=!1,i.boosting=!1,i.moving=!1,i.ghosts=
[],i.lastGhostTurn=0,i.foodEaten=0,i.score=0,i.kills=0,i.lastKillTime=0,i.killCountI
5/9/20, 12:55 PM
Page 162 of 181
nARow=0,i.weaponDamage=mi[Ie[e]],i.fuel=B?0:100,i.gameStart=(new
Date).getTime(),i.weaponState=0,i.weaponRotation=f,i.targetRotation=0,i.oldPosition=
new PIXI.Point,e==Ne&&(i.weaponContainer.filters=[new
PIXI.filters.GlowFilter(10/1024*window.innerHeight,0,0,2913791,.5)]),!(O instanceof
PIXI.CanvasRenderer)){var s=new
PIXI.mesh.NineSlicePlane(j.box9filled,1*j.box9filled.width/8,j.box9filled.height/2,7
*j.box9filled.width/8,j.box9filled.height/2);s.tint=16717089,s.alpha=.5,s.height=.3*
ie,s.width=s.height/s.texture.height*s.texture.width,_.addChild(s);var c=new
PIXI.Graphics;c.beginFill(),c.drawRect(0,0,s.width,s.height),c.endFill(),s.addChild(
c),(s.mask=c).width=1*c.parent.width;var g=new
PIXI.mesh.NineSlicePlane(j.box9,1*j.box9.width/8,j.box9.height/2,7*j.box9.width/8,j.
box9.height/2);g.tint=16717089,g.height=s.height,g.width=s.width,_.addChild(g),i.bar
=s,i.barFrame=g,i.barMask=c}return
i.health=ci[Ie[e]],i.maxHealth=ci[Ie[e]],i}function pt(e)
{e.debugPoly&&e.weaponContainer.removeChild(e.debugPoly);var t=new
PIXI.Graphics;t.lineStyle(.01,16711680);for(var n=
[],i=mt[e.weaponId].polygon,o=0;o<i.length/2;o++)n.push(i[2*o+0]*e.weapon.width),n.p
ush(i[2*o+1]*e.weapon.height);t.drawPolygon(n),t.closePath(),
(e.debugPoly=t).visible=!1,e.weaponContainer.addChild(t)}function yt(e){var
t=3;if(e.foodEaten<5e3){var n=e.foodEaten/5e3;if(t=1*Math.pow(1-n,3)+9*Math.pow(1-
n,2)*n+9*Math.pow(n,2)*(1-n)+3*Math.pow(n,3),0<I){var i=2/I;t=1+Math.floor((t1)/i)*i}}e.scale.set(t),e.bar&&e.bar.scale.set(t),e.barFrame&&e.barFrame.scale.set(t
),e.weaponContainer.scale.set(t),P&&0==e.weaponState&&
(e.weaponContainer.scale.x*=-1),pt(e),e.weaponContainer.pivot.set(mt[e.weaponId].anc
hor[0]*e.weaponContainer.width/e.weaponContainer.scale.x,mt[e.weaponId].anchor[1]*e.
weaponContainer.height/e.weaponContainer.scale.y),e.playerId!=We&&e.playerId!=Ne||nn
(void 0,!0)}function ft(e,t){var n=new PIXI.Sprite(j["pet-
"+e]);n.petId=e,n.width=1.8*ie,n.height=n.width*n.texture.height/n.texture.width,n.a
nchor.set(.5),-1!=[3,4,5,8].indexOf(e)?Y.addChildAt(n,0):V.addChildAt(n,0);var
i=Math.random()*Math.PI*2;n.x=Fe[t].x+Math.cos(i)*ie*18,n.y=Fe[t].y+Math.sin(i)*ie*1
8,n.rotation=i+Math.PI,n.targetOnPlayer=Math.random()*Math.PI*2,n.targetOnPlayerDire
ction=Math.random()<.5?-1:1,Fe[t].pet=n}function wt(e){var
t=fe[e];z.removeChild(t);var n=t.foodValue;It(t.x,t.y,n),fe.splice(e,1)}function
It(e,t,n){for(var i=[];0<n;){if(100<n){var o=50;(a=new
PIXI.Sprite(j.coins_b)).width=.8}else if(50<n){o=25;(a=new
PIXI.Sprite(j.coins_m)).width=.4*1.5}else{var a;o=Math.min(n,5);(a=new
PIXI.Sprite(j.coins_s)).width=.4}a.isDeathFood=!0,a.foodValue=o,n-
=a.foodValue,a.position.set(e,t),a.height=a.width,a.anchor.set(.5),W.addChild(a);var
r=Math.random()*Math.PI*2,d=ie+Math.random()*ie*2;anime({targets:a,x:
[e,Math.max(0,Math.min(oe,e+Math.cos(r)*d))],y:
[t,Math.max(0,Math.min(ae,t+Math.sin(r)*d))],easing:"easeOutCubic",duration:500,comp
lete:function(e){return function(){ye.push(e),te.add(e,e)}}(a)}),i.push(a)}return
i}function vt(e){for(var t=0;t<100;){var
n=Math.random()*oe,i=Math.random()*ae;if(ie<=n&&ie<=i&&n<=oe-ie&&i<=ae-ie){for(var
o=!0,a=0;a<Fe.length;a++){if(Fe[a])if(Math.sqrt(Math.pow(n-Fe[a].x,2)+Math.pow(iFe[a].y,2))+Fe[a].width/2<e)
{o=!1;break}}if(o)return{x:n,y:i}}t++}return{x:n,y:i}}var xt,bt,Mt,kt=[],Pt=
["PewDiePie","VanossGaming","markiplier","jacksepticeye","DanTDM","H2ODelirious","SS
unee","kwebbelkop","Guava Juice","JellyYT","Reaction
Time","Daithi","JeromeASF","Enes
Batur","DashieGames","Slogomanify","Lachlan","BasicallyIDoWrk","ArcadeGo","Moo","Mas
terv","Bodil40","Godenot","Jumbo","ZerkaaPlays","Daz Games","Gizzy Gazza","Edho
Zell","GameMixTreize","Galadon
Gaming","draegast","DownRangeGaming","iRaphahell","Blitz","LazarBeam","Vicio","Vikks
ta","PUMBA","TARGET","Game
Time","Farod","Double","Sirius","Baxtrix","Entak","MrMEOLA","GrayStillPlays","Crysta
l","HobbyPig","Slither
MasterSp","jolate","Smash","Godzilla","BubbleBALZ","DadouGaming","SB737","Tempest","
Tiar","Pine","Yhiita","AsumaCC","iXPLODE","RoYaL","Enigma","Slith","iStealth","Apote
xt","Bang","Arena Closer","Sinbadx","NATION","CookieGuy","iHASYOUi","JUST. iO","La
5/9/20, 12:55 PM
Page 163 of 181
Flame","Laim","Fady","SICKmania","SkylentGames","Hectic","AfterZGamer49","Apinity","
Baer","Lucky Bisht","Arctic","LeeZY","JellyfishPlays","duckio","Corrupt X","Julian
tudio","Quixy","Cryptic","BOB
XIII","Fortish","PANDA","Topi","Durf","Truebizcuit","LightThief","Snapwing
Falcon","FeZTivAL","GoldMindNugget","Saengio","eXistenZ","DopeMope","iZinc","Pidyoha
go","Catapilla","ThoriumHD","bacter.io","Alpha Hero","Nerd Playz_Carbon","Cacti
Fin"];function St(){if(Math.random()<.1){var
e=Math.floor(Math.random()*Pt.length);return
Pt[e]}e=Math.floor(Math.random()*kt.length);return kt[e]}var Ct=0,Et=!1,Tt=
[];function Bt(e){for(var t in anime.running)try{anime.running[t].pause()}catch(e)
{console.error(e)}D.removeChildren(),F.removeChildren(),N.removeChildren(),V.removeC
hildren(),W.removeChildren(),z.removeChildren(),G.removeChildren(),Y.removeChildren(
),K.removeChildren(),_.removeChildren(),q.removeChildren(),U.removeChildren(),void
0,kn=[],Fe=[],ye=[],fe=[],Tt=[],We=Ne=xe=0,ae=oe=50,ie=.3,de=(re=12)/16*9;var
n=Ln(hi),i=50;11<=Oe?(oe=ae=[10,50,50,60,70,80,90,100][n],i=
[10,50,50,60,70,80,90,100][n]):(5==n?oe=ae=100:3<=n&&(oe=ae=80),5==n?i=100:3<=n&&
(i=80)),1==Oe?(1==n&&(X=.7,L=.9),2==n&&(X=.8,L=1)):-1!=
[2,3,4,5,6,7,8,9,10,11].indexOf(Oe)&&(1==n&&(X=.6,L=.8),2==n&&(X=.7,L=.9)),3<=n&&
(7<=Oe?(3==n&&(X=.8,L=1),4==n&&(X=.9,L=1.1),5<=n&&(X=1,L=1.2)):(X=1,L=1.2)),
(4==Oe||6==Oe||7<=Oe)&&(C=!1),5==Oe&&(C=3<=n),Jn=1,Qn=Zn=0,Hn&&Hn.clear(),Rn&&
(Rn.clear(),Rn.visible=!0),On&&On.clear(),An&&(An.clear(),An.visible=!0);var
o=Ln(hi),a=new
PIXI.Graphics;a.beginFill(16046768),a.drawRect(0,0,oe,ae),D.addChild(a);var
r=3*Ae;if(2==o&&(r=.4*oe),4!=o&&((Mt=new
PIXI.extras.TilingSprite(j["04g"])).position.set(r,r),Mt.width=oe-2*r,Mt.height=ae2*r,Mt.tileScale.set(1/Mt.width/8*300*oe/50,1/Mt.height/8*300*oe/50),D.addChild(Mt))
,1==o)for(t=1;t<100;t++){(l=new
PIXI.Sprite(j.rocks)).width=1.5*ie,l.height=l.width/l.texture.width*l.texture.height
,l.position.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),N.addChild(l)}if(2==o)for(t=1;t<200;t++){(l=new
PIXI.Sprite(j.shells)).width=1.5*ie,l.height=l.width/l.texture.width*l.texture.heigh
t,l.position.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}if(2==o){for(t=1;t<10;t++){(l=new PIXI.Sprite(j["palms2-"+
(Math.random()
<.5?"1":"2")])).width=12*ie,l.height=l.width/l.texture.width*l.texture.height,l.posi
tion.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),V.addChild(l)}for(t=1;t<10;t++){(l=new PIXI.Sprite(j["palms2-"+
(Math.random()
<.5?"1":"2")])).width=12*ie,l.height=l.width/l.texture.width*l.texture.height,l.posi
tion.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),V.addChild(l)}}else if(4!=o&&6!=o&&7!=o)for(t=1;t<(5==o?250:20);t++){var
d=1==o?"palms2-":"palms-";(l=new PIXI.Sprite(j[d+(Math.random()
<.5?"1":"2")])).width=12*ie,l.height=l.width/l.texture.width*l.texture.height,l.posi
tion.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),V.addChild(l)}if(3==o)for(t=1;t<20;t++){(l=new
PIXI.Sprite(j.stonehead)).width=6*ie,l.height=l.width/l.texture.width*l.texture.heig
ht,l.position.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),N.addChild(l)}if(4==o){(l=new PIXI.Sprite(j["largeship"])).width=20*ie,l.height=l.width/l.texture.width*l.texture.height,l.position.se
t(r,ae-r-l.height),N.addChild(l);for(t=1;t<40;t++){(l=new
PIXI.Sprite(j.crabs)).width=3*ie,l.height=l.width/l.texture.width*l.texture.height,l
.position.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}for(t=1;t<40;t++){(l=new
PIXI.Sprite(j.debris)).width=5*ie,l.height=l.width/l.texture.width*l.texture.height,
l.position.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}for(t=1;t<100;t++){(l=new PIXI.Sprite(j["bush-"+
(Math.random()
<.5?"1":"2")])).width=4*ie,l.height=l.width/l.texture.width*l.texture.height,l.posit
ion.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}}if(5==o){(l=new
5/9/20, 12:55 PM
Page 164 of 181
PIXI.Sprite(j.temple)).anchor.set(.5),l.width=25*ie,l.height=l.width/l.texture.width
*l.texture.height,l.position.set(oe/2,ae/2),N.addChild(l);for(t=1;t<500;t++){(l=new
PIXI.Sprite(j["bush-"+(Math.random()
<.5?"1":"2")])).width=4*ie,l.height=l.width/l.texture.width*l.texture.height,l.posit
ion.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}for(t=1;t<30;t++){(l=new PIXI.Sprite(j["ruins-
"+Math.ceil(3*Math.random())])).width=10*ie,l.height=l.width/l.texture.width*l.textu
re.height,l.position.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}}if(6==o){(l=new
PIXI.Sprite(j.volcano)).anchor.set(.42,.4),l.width=40*ie,l.height=l.width/l.texture.
width*l.texture.height,l.position.set(oe/2,ae/2),N.addChild(l);for(t=1;t<50;t++)
{(l=new
PIXI.Sprite(j.vsplash)).width=10*ie,l.height=l.width/l.texture.width*l.texture.heigh
t,l.position.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}for(t=1;t<200;t++){(l=new PIXI.Sprite(j["bush-"+
(Math.random()
<.5?"1":"2")])).width=4*ie,l.height=l.width/l.texture.width*l.texture.height,l.posit
ion.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}for(t=1;t<25;t++){d="palms-";(l=new PIXI.Sprite(j[d+
(Math.random()
<.5?"1":"2")])).width=12*ie,l.height=l.width/l.texture.width*l.texture.height,l.posi
tion.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),V.addChild(l)}for(t=1;t<100;t++){d="palms3-";(l=new PIXI.Sprite(j[d+
(Math.random()
<.5?"1":"2")])).width=12*ie,l.height=l.width/l.texture.width*l.texture.height,l.posi
tion.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),V.addChild(l)}}if(7==o){for(t=1;t<100;t++){(l=new
PIXI.Sprite(j.rocks)).width=1.5*ie,l.height=l.width/l.texture.width*l.texture.height
,l.position.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),N.addChild(l)}for(t=1;t<200;t++){(l=new PIXI.Sprite(j["bush-"+(Math.random()
<.5?"1":"2")])).width=4*ie,l.height=l.width/l.texture.width*l.texture.height,l.posit
ion.set(Math.random()*(oe-l.width),Math.random()*(ael.height)),N.addChild(l)}for(t=1;t<100;t++){var l;d="palms-";(l=new PIXI.Sprite(j[d+
(Math.random()
<.5?"1":"2")])).width=12*ie,l.height=l.width/l.texture.width*l.texture.height,l.posi
tion.set(r+Math.random()*(oe-l.width-2*r),r+Math.random()*(ae-l.height2*r)),V.addChild(l)}for(t=1;t<40;t++){var h=Math.random()<.5?"1":"2",s=new
PIXI.Sprite(j["house"+h+"-b"]);s.anchor.set(.5),s.width=ie*(1==h?
12:15),s.height=s.width/s.texture.width*s.texture.height,s.position.set(r+Math.rando
m()*(oe-s.width-2*r),r+Math.random()*(ae-s.height-2*r)),N.addChild(s);var c=new
PIXI.Sprite(j["house"+h+"-
t"]);c.anchor.set(.5),c.width=s.width,c.height=s.height,c.position.set(s.x,s.y),V.ad
dChild(c),Tt.push(c)}}try{A.setTransform();var g=new
PIXI.Graphics;g.beginFill(1289136),g.drawRect(-De,-
De,oe+2*De,ae+2*De),D.addChildAt(g,0),A.position.set(De,De);var
m=PIXI.RenderTexture.create(A.width,A.height,PIXI.settings.SCALE_MODE,256/(oe+2*De))
;O.render(A,m),j.minimap=m,D.removeChild(g),A.setTransform()}catch(e){}te=new
sn(oe,ae,1),ne=new sn(oe,ae,1),we[Ne]=R,Ie[Ne]=J;var u=100,p=34;switch(n){case
2:u=150,p=50;break;case 3:u=200,p=67;break;case 4:u=250,p=84;break;case
5:u=300,p=100;break;case 6:u=350,p=117;break;case
7:u=400,p=134}Ct=i;for(t=1;t<i;t++){we[t]=St(),Ie[t]=ki(n),ut(t);var
y=vt(10*ie);if(Fe[t].x=y.x,Fe[t].y=y.y,ne.add(Fe[t],Fe[t].position),H?
Fe[t].foodEaten=Math.floor(5e3/i):
(Fe[t].score=Math.floor(6e3*Math.random())+100,Fe[t].foodEaten=Fe[t].score/5),Fe[t].
moving=!0,yt(Fe[t]),Fe[t].health=u,Fe[t].maxHealth=u,Fe[t].weaponDamage=p,13==Oe&&n>
=xi[0]){Math.random()<[0,0,1,2,3,5,8,10]
[n]/100&&ft(Math.ceil(9*Math.random()),t)}}var f,w,I,v,x,b=0,M=0,k=-1!=
[2,3,4,5,6,7,8,9,10,11].indexOf(Oe)?0:.1;if(11<=Oe)b=[0,0,.05,.1,.15,.2,.25,.3]
[n],k=[0,0,.05,.1,.2,.3,.4,.5][n],M=[0,0,0,0,0,.05,.05,.05][n];else switch(n){case
5:b=-1!=[6,7,8,9,10].indexOf(Oe)?.3:.4,k=-1!=
5/9/20, 12:55 PM
Page 165 of 181
[6,7,8,9,10].indexOf(Oe)?.4:.5,M=.05;break;case 4:b=-1!=
[6,7,8,9,10].indexOf(Oe)?.2:.3,k=-1!=[6,7,8,9,10].indexOf(Oe)?.3:.4;break;case
3:b=-1!=[6,7,8,9,10].indexOf(Oe)?.1:.2,k=-1!=
[6,7,8,9,10].indexOf(Oe)?.2:.3;break;case 2:b=-1!=
[6,7,8,9,10].indexOf(Oe)?.05:.1,k=-1!=
[2,3,4].indexOf(Oe)?.1:.2}for(t=1;t<=i*b;t++)Fe[t].level=1;for(t=1;t<=i*M;t++)Fe[t].
level=2;for(t=1;t<=i*k;t++)Fe[t].canCharge=!0;if(ut(Ne),H&&
(Fe[Ne].foodEaten=0),yt(Fe[Ne]),Et=e)Fe[Ne].x=-1e3,Fe[Ne].y=-1e3,Fe[Ne].dead=!0;else
{anime({targets:Fe[Ne].usernameText,delay:5e3,duration:1e3,alpha:0,easing:"linear"})
;y=vt(20*ie);Fe[Ne].x=y.x,Fe[Ne].y=y.y,ne.add(Fe[Ne],Fe[Ne].position),13==Oe&&0!=Z&&
ft(Z,Ne)}We=0,clearInterval(xt),clearTimeout(bt),e&&(bt=setTimeout(function()
{Bt(!0)},6e4));for(t=0;t<400;t++)f=5,w=void 0,w=new
PIXI.Sprite(j.coins_s),I=vt(2*ie),w.position.set(I.x,I.y),w.width=.4,w.height=.4,w.a
nchor.set(.5),W.addChild(w),w.foodValue=f||5,ye.push(w),te.add(w,w);for(t=0;t<10;t++
)v=void 0,v=new
PIXI.Sprite(j.chest),x=vt(4*ie),v.position.set(x.x,x.y),v.width=3*ie,v.height=v.widt
h/v.texture.width*v.texture.height,v.anchor.set(.5),z.addChild(v),v.foodValue=100,fe
.push(v);ge=e,nn(),MainLoop.start(),ce=!0,O.view.style.display="block",document.getE
lementById("play-button").style.display="block",document.getElementById("playspinner").style.display="none",e||
(document.getElementById("homepage").style.display="none",Ot(),"undefined"!=typeof
PokiSDK&&PokiSDK.destroyAd(document.getElementById("banner-on-homepage")))}var
Xt,Lt,Ht,Rt=0;function Ot(){for(var e=[],t=0;t<Fe.length;t++){var
n=Fe[t];if(!n.dead){for(var
i=0;i<e.length&&e[i].foodEaten>n.foodEaten;)i++;e.splice(i,0,n)}}Rt=e.length,qt.text
=Rt}function At(e){if(ce&&(me=e.clientX,ue=e.clientY,Fe[Ne])){var t=Math.atan2(uewindow.innerHeight/2,mewindow.innerWidth/2);Fe[Ne].targetRotation=t,Math.sqrt(Math.pow(uewindow.innerHeight/2,2)+Math.pow(mewindow.innerWidth/2,2))/A.scale.x*A.transform.scale.x<window.innerHeight/18?
Fe[Ne].moving=!1:Fe[Ne].moving=!0}}function Dt(e){if(ce){var t=(new
Date).getTime(),n=Math.min(1*Ve,Math.min(window.innerHeight,window.innerWidth)/5);if
("touchend"===e.type||"touchcancel"===e.type)for(var
i=0;i<e.changedTouches.length;i++){var
o=e.changedTouches[i];Xt&&Xt.identifier==o.identifier?
(Fe[Ne].moving=!1,Q.visible=!1,$.visible=!1,Xt=null,l||B&&
(Fe[Ne].charging=!1,In(Fe[Ne]))):Ht&&Ht.identifier==o.identifier&&(l&&B&&
(Fe[Ne].charging=!1,In(Fe[Ne])),Ht=null)}else
if("touchstart"===e.type)for(i=0;i<e.changedTouches.length;i++)
{o=e.changedTouches[i];
({clientX:o.clientX,clientY:o.clientY,identifier:o.identifier}).time=t,Xt?(Ht=
{clientX:o.clientX,clientY:o.clientY,identifier:o.identifier},l&&(B?
Fe[Ne].charging=!0:In(Fe[Ne]))):(Xt=
{clientX:o.clientX,clientY:o.clientY,identifier:o.identifier},Q.width=n,Q.height=n,Q
.x=Xt.clientX,Q.y=Xt.clientY,$.width=n/2,$.height=n/2,$.x=Xt.clientX,$.y=Xt.clientY,
Q.visible=!0,$.visible=!0,l||(B?Fe[Ne].charging=!0:In(Fe[Ne])))}else
if("touchmove"===e.type)for(i=0;i<e.changedTouches.length;i++)
{o=e.changedTouches[i];if(Xt&&o.identifier==Xt.identifier&&Fe[Ne]){Lt=
{clientX:o.clientX,clientY:o.clientY,identifier:o.identifier},$.x=Lt.clientX,$.y=Lt.
clientY;var a=Math.sqrt(Math.pow(Lt.clientX-Xt.clientX,2)+Math.pow(Lt.clientYXt.clientY,2));if(.2*n<=a){var r=Math.atan2(Lt.clientY-Xt.clientY,Lt.clientXXt.clientX);Fe[Ne].targetRotation=r,Fe[Ne].moving=!0,.4*n<=a&&
($.x=Q.x+Math.cos(r)*n*.4,$.y=Q.y+Math.sin(r)*n*.4,Xt.clientX=o.clientX+Math.cos(r+M
ath.PI)*Math.min(a,n),Xt.clientY=o.clientY+Math.sin(r+Math.PI)*Math.min(a,n),Q.x=Xt.
clientX,Q.y=Xt.clientY)}}}e.preventDefault()}}function Ft(e){ce&&(0==e.button?B?
Fe[Ne].charging=!0:In(Fe[Ne]):e.button,e.preventDefault())}function Nt(e){ce&&
(0==e.button?B&&(Fe[Ne].charging=!1,In(Fe[Ne])):e.button)}var
Wt,zt,Gt,Kt,_t,Yt,qt,Vt,Ut,jt,Jt,Zt=[!1,!1,!1,!1];function Qt()
{if(Zt[0]||Zt[1]||Zt[2]||Zt[3]){var e=0,t=0;Zt[0]?t-=1:Zt[1]&&(t+=1),Zt[2]?e-
=1:Zt[3]&&(e+=1);var n=Math.atan2(t,e);Fe[Ne].moving&&Fe[Ne].rotation==n||
5/9/20, 12:55 PM
Page 166 of 181
(Fe[Ne].moving=!0,Fe[Ne].targetRotation=n)}else Fe[Ne].moving=!1}function $t(e)
{if(ce){var t=void
0!==e.code;if(t&&"KeyW"==e.code||!t&&87==e.keyCode||38==e.keyCode)Zt[0]=!0,Qt();else
if(t&&"KeyS"==e.code||!t&&83==e.keyCode||40==e.keyCode)Zt[1]=!0,Qt();else
if(t&&"KeyA"==e.code||!t&&65==e.keyCode||37==e.keyCode)Zt[2]=!0,Qt();else
if(t&&"KeyD"==e.code||!t&&68==e.keyCode||39==e.keyCode)Zt[3]=!0,Qt();else
if(t&&"Space"==e.code||!t&&32==e.keyCode)B?Fe[Ne].charging=!0:In(Fe[Ne]);else if(!
(9==e.keyCode||65<=e.keyCode&&e.keyCode<=90||60==e.keyCode))return}}function en(e)
{if(ce){var t=void
0!==e.code;if(t&&"KeyW"==e.code||!t&&87==e.keyCode||38==e.keyCode)Zt[0]=!1,Qt();else
if(t&&"KeyS"==e.code||!t&&83==e.keyCode||40==e.keyCode)Zt[1]=!1,Qt();else
if(t&&"KeyA"==e.code||!t&&65==e.keyCode||37==e.keyCode)Zt[2]=!1,Qt();else
if(t&&"KeyD"==e.code||!t&&68==e.keyCode||39==e.keyCode)Zt[3]=!1,Qt();else
if(t&&"Space"==e.code||!t&&32==e.keyCode)B&&
(Fe[Ne].charging=!1,In(Fe[Ne]));else{}0}}function tn(e){}function nn(e,t)
{t||O.resize(window.innerWidth,window.innerHeight),le=re,he=de,window.innerHeight>wi
ndow.innerWidth&&(le=de,he=re);var n=window.innerWidth/window.innerHeight;le<he*n?
he=le/n:le=he*n;var i=Fe[We]||Fe[Ne];if(i){le*=.2*(i.scale.x-1)+1,he*=.2*(i.scale.y1)+1;var o=i.x-le/2,a=i.yhe/2,r=window.innerWidth/le,d=window.innerHeight/he;A.setTransform(-o*r,-
a*d,r,d,0,0,0,0,0)}F.removeChildren();for(var
l=Ae,h=Math.floor(window.innerWidth/l/r)+2,s=Math.floor(window.innerHeight/l/d)+2,c=
0;c<=h;c++){(g=new
PIXI.Sprite(j.gridpixel)).width=1/r,g.height=s*l,g.x=c*l,g.y=0,F.addChild(g)}for(c=0
;c<=s;c++){var g;(g=new
PIXI.Sprite(j.gridpixel)).width=h*l,g.height=1/d,g.x=0,g.y=c*l,F.addChild(g)}for(c=0
;c<K.children.length;c++)K.children[c]!=ee&&K.children[c].scale.set(1/A.scale.x),K.c
hildren[c].style&&
(K.children[c].style.fontSize=Math.round(Math.min(window.innerHeight,window.innerWid
th)/30));if(!t&&Fe[Ne]){Wt&&U.removeChild(Wt),(Wt=new
PIXI.Sprite(j.minimap)).width=.25*Math.min(window.innerWidth,window.innerHeight),Wt.
height=Wt.width,Wt.anchor.set(1,0),Wt.position.set(window.innerWidth-.01*Math.min(wi
ndow.innerWidth,window.innerHeight),.01*Math.min(window.innerWidth,window.innerHeigh
t)),U.addChild(Wt);var m=De/(oe+2*De),u=Wt.width*(1-2*m)/oe,p=new
PIXI.Graphics;p.beginFill(16777215,1),p.drawRect(0,0,Wt.width,Wt.height),p.endFill()
,p.position.set(Wt.x-Wt.width,Wt.y),An&&U.removeChild(An);var y=new PIXI.Graphics;
(An=y).scale.set(u,u),y.position.set(Wt.xWt.width+Wt.width*m,Wt.y+Wt.height*m),An.mask=p,U.addChild(An),On&&U.removeChild(On)
,(y=new PIXI.Graphics).alpha=.6,(On=y).position.set(Wt.xWt.width+Wt.width*m,Wt.y+Wt.height*m),y.scale.set(u,u),On.mask=p,U.addChild(On),zt&&
U.removeChild(zt),(zt=new
PIXI.Sprite(j.circle)).anchor.set(.5),zt.width=zt.height=.025*Wt.width,zt.position.s
et(Wt.xWt.width/2,Wt.y+Wt.height/2),U.addChild(zt),Gn(Yn,Un),Kn(qn,jn),Gt&&U.removeChild(Gt
),Gt=new PIXI.Container,(Kt=new PIXI.Sprite(j["icon-fog1"])).width=Kt.height=.1*Wt.height,Gt.addChild(Kt),(_t=new PIXI.Text("0:15",
{fontFamily:"Nunito",fontWeight:"bold",fontSize:.8*Kt.height,fill:16777215,align:"ce
nter"})).position.set(Kt.x+1.2*Kt.width,Kt.y),Gt.addChild(_t),(Yt=new
PIXI.Sprite(j["iconplayer"])).width=Yt.height=Kt.height,Yt.position.set(_t.x+_t.width+Kt.width,_t.y),Gt
.addChild(Yt),(qt=new PIXI.Text("100",
{fontFamily:"Nunito",fontWeight:"bold",fontSize:.8*Kt.height,fill:16777215,align:"ce
nter"})).position.set(Yt.x+1.2*Yt.width,Yt.y),Gt.addChild(qt),(Vt=new
PIXI.Sprite(j["iconkill"])).width=Vt.height=Kt.height,Vt.position.set(qt.x+qt.width+Kt.width,qt.y),Gt.a
ddChild(Vt),(Ut=new PIXI.Text("99",
{fontFamily:"Nunito",fontWeight:"bold",fontSize:.8*Kt.height,fill:16777215,align:"ce
nter"})).position.set(Vt.x+1.2*Vt.width,Vt.y),Gt.addChild(Ut),Gt.position.set(Wt.xWt.width,Wt.y+1.025*Wt.height),U.addChild(Gt),Kt.texture=j[0==Jn?"icon-fog-1":"iconfog-2"],_t.text="0:"+(9<Zn?
5/9/20, 12:55 PM
Page 167 of 181
Math.ceil(Zn):"0"+Math.ceil(Zn)),qt.text=Rt,Ut.text=Fe[Ne].kills,jt&&U.removeChild(j
t),(jt=new
PIXI.Sprite(j.coins_m)).width=jt.height=.2*Wt.height,jt.position.set(.01*window.inne
rWidth,.01*window.innerHeight),U.addChild(jt),Jt&&U.removeChild(Jt),(Jt=new
PIXI.Text("100",
{fontFamily:"Nunito",fontWeight:"bold",fontSize:.8*jt.height,fill:16777215,align:"ce
nter"})).anchor.set(.5),Jt.position.set(jt.x+1.2*jt.width+Jt.width/2,jt.y+Jt.height/
2),U.addChild(Jt),Gt.visible=!ge,Wt.visible=!ge,zt.visible=!ge,On.visible=!ge,An.vis
ible=!ge,jt.visible=!ge,Jt.visible=!ge,void 0!==j&&(Ei(!0),Ci())}_i()}var
on,an,rn=0,dn=0;function ln(e,t,n,i){var o=new PIXI.Text(e,
{fontFamily:"Nunito",fontWeight:"bold",fontSize:Math.round(Math.min(window.innerHeig
ht,window.innerWidth)/20),fill:t||56576,align:"center"});o.anchor.set(.5),o.position
.set(window.innerWidth/2,window.innerHeight*(i?.4:.2)),U.addChild(o);var
a=anime({targets:o,easing:"linear",alpha:[1,0],y:window.innerHeight*
(i?.3:.1),duration:2e3,complete:function(){U.removeChild(o)}});return
n&&anime({targets:o.scale,x:[.5,1],y:
[.5,1],easing:"easeOutBack",duration:500}),a}function hn(){}function sn(e,t,n)
{this.gridSize=n;var i=Math.ceil((e+1)/n),o=Math.ceil((t+1)/n);this.grid=[];for(var
a=0;a<i;a++){this.grid[a]=[];for(var r=0;r<o;r++)this.grid[a][r]=[]}}function
cn(e,t,n,i,o){var a=(n.x-e.x)*(t.x-e.x)+(n.y-e.y)*(t.y-e.y),r=e.dst(t);a/=r*r;var
d=new PIXI.Point;if(a<0)d.set(e.x,e.y);else if(1<a)d.set(t.x,t.y);else{var l=new
PIXI.Point(t.x,t.y).sub(e);d.set(e.x,e.y),d.add(l.scl(a))}return(r=d.dst(n))<i?
(o.set(d.x,d.y),o.sub(n).nor(),i-r):1/0}function gn(e,t,n){for(var
i=e.x,o=e.y,a=t.x,r=t.y,d=n.length,l=n[d-1].x,h=n[d-1].y,s=0;s<d;s++){var
c=n[s].x,g=n[s].y,m=(g-h)*(a-i)-(c-l)*(r-o);if(0!=m){var u=o-h,p=i-l,y=((c-l)*u-(gh)*p)/m;if(0<=y&&y<=1){var f=((a-i)*u-(ro)*p)/m;if(0<=f&&f<=1)return!0}}l=c,h=g}return!1}function mn(e,t){for(var n=e-t;n<-
Math.PI;)n+=2*Math.PI;for(;n>Math.PI;)n-=2*Math.PI;return n}function un(e,t,n,i){var
o=new
PIXI.Sprite(j.dead);o.width=i.width,o.height=i.width/o.texture.width*o.texture.heigh
t,o.x=e,o.y=t,o.rotation=n,o.anchor.set(.5),G.addChild(o),anime({targets:o,alpha:
[1,0],easing:"easeInQuint",duration:5e3,complete:function()
{G.removeChild(o)}})}function pn(e){for(var
t=null,n=Number.MAX_VALUE,i=Math.ceil(re/ne.gridSize),o=ne.getAllInRange(e,i,i),a=0;
a<o.length;a++)if(o[a]!=e&&!o[a].dead){var r=o[a],d=Math.pow(e.xr.x,2)+Math.pow(e.y-r.y,2);d<n&&(n=d,t=r)}return t}function yn(e,t){for(var n=void
0,i=Number.MAX_VALUE,o=te.getAllInRange(e,t,t),a=o.length-1;0<=a;a--){var
r=e.position.dst2(o[a].position);r<i&&(i=r,n=o[a])}return n}function fn(e)
{if(e.position.dst2(Yn)<=Un*Un)return!0;var t=new
PIXI.Point(Math.cos(e.targetRotation),Math.sin(e.targetRotation)).add(e.position),n=
function(e,t,n,i){var o=t.x-e.x,a=t.y-e.y,r=n.x-e.x,d=n.y-e.y,l=o*o+a*a,h=
(o*r+a*d)/l,s=h*h-(r*r+d*d-i*i)/l;if(!(s<0)){var c=Math.sqrt(s),g=-h+c,m=-h-c,u=new
PIXI.Point(e.x-o*g,e.y-a*g);if(0==s)return u;var p=new PIXI.Point(e.x-o*m,e.ya*m);return e.dst2(u)<t.dst2(p)?u:p}}
(e.position,t,Yn,Un);return!!n&&Math.abs(mn(Math.atan2(n.y-e.y,n.xe.x),e.targetRotation))<Math.PI/4}function wn(e){if(e.playerId!=Ne||!ge)
{if(e.oldPosition.set(e.position.x,e.position.y),void 0!==e.knockingTime&&xee.knockingTime>E&&(delete e.knockingTime,delete e.knockingDir),void
0!==e.knockingTime)e.x+=1/60*s*e.scale.x*Math.cos(e.knockingDir),e.y+=1/60*s*e.scale
.x*Math.sin(e.knockingDir);else if(e.attacking&&B){if(.2<e.fuel/100&&(Se.attackTurnsLeft)/S<=e.fuel/100&&
(e.x+=1/60*u*Math.cos(e.rotation),e.y+=1/60*u*Math.sin(e.rotation),2<=xee.lastGhostTurn)){var t=new
PIXI.Sprite(e.base.texture);t.width=e.base.width*e.scale.x,t.height=e.base.height*e.
scale.y,t.x=e.x,t.y=e.y,t.rotation=e.rotation,t.anchor.set(e.base.anchor.x,e.base.an
chor.y),t.tint=e.base.tint,G.addChild(t),e.ghosts.push(t),t.alpha=.5,e.lastGhostTurn
=xe,t.turn=xe}}else
if(e.attacking&&m&&e.fuel>=p)e.x+=1/60*u*Math.cos(e.rotation),e.y+=1/60*u*Math.sin(e
.rotation);else if(!e.attacking&&e.moving){var n=!m&&e.boosting&&1<e.fuel?
1.5:1;e.x+=1/60*x*n*Math.cos(e.rotation),e.y+=1/60*x*n*Math.sin(e.rotation)}if(e.x<i
5/9/20, 12:55 PM
Page 168 of 181
e&&(e.x=ie),e.y<ie&&(e.y=ie),e.x>=oe-ie&&(e.x=oe-ie),e.y>=ae-ie&&(e.y=aeie),B&&!e.attacking&&e.charging&&
(e.fuel=Math.min(100,e.fuel+w)),e.attacking)if(e.attackTurnsLeft-
-,e.attackTurnsLeft<0)e.attacking=!1,e.recoveringAttack=!1,e.weaponState=1==e.weapon
State?0:1,P&&(e.weaponContainer.scale.x*=-1),B?e.fuel=0:m&&e.fuel>=p&&(e.fuel-
=p);else{h?e.weaponRotation+=e.weaponState?g:-g:
(e.weaponRotation+=e.attackTurnsLeft<S/2?g:-
g,e.recoveringAttack=c&&e.attackTurnsLeft<S/2);var
i=Fe[We]||Fe[Ne];if(i==e||e.position.dst2(i)<re*re){for(var o=
[],a=e.weaponContainer,r=0;r<1;r++){var d=new
PIXI.Sprite(e.weapon.texture);d.width=ie,d.height=d.width/d.texture.width*d.texture.
height,d.width=e.weaponContainer.width,d.height=e.weaponContainer.height,d.anchor.se
t(e.weaponContainer.pivot.x,e.weaponContainer.pivot.y),d.rotation=e.rotation+e.weapo
nRotation+k,d.alpha=.2;e.weaponContainer.height;0,d.position.set(a.x+0*Math.cos(e.ro
tation+e.weaponRotation-k),a.y+0*Math.sin(e.rotation+e.weaponRotationk)),_.addChild(d),o.push(d)}anime({targets:o,easing:"linear",duration:200,alpha:0,co
mplete:function(){for(var
e=0;e<o.length;e++)_.removeChild(o[e])}})}}if(!e.attacking&&void
0!==e.targetRotation&&e.rotation!=e.targetRotation){var
l=mn(e.targetRotation,e.rotation);e.rotation+=0<M?l*M:Math.max(-
b,Math.min(b,l))}!e.attacking&&e.attackPending&&In(e),ne.update(e,e.oldPosition,e.po
sition)}}function In(e){var t=void
0!==e.targetRotation&&Math.abs(mn(e.targetRotation,e.rotation))>b;e.attacking||t?
e.attackPending=!0:(e.attacking=!0,e.attackTurnsLeft=S,delete
e.attackPending)}function vn(){try{an&&!an.completed&&an.pause()}catch(e)
{console.error(e)}var t=!1;an=anime({targets:Jt.scale,x:[1,1.3,1],y:
[1,1.3,1],easing:"linear",duration:200,update:function(e){!t&&50<=e.progress&&
(t=!0,Jt.text=Fe[Ne].foodEaten,Jt.position.set(jt.x+1.2*jt.width+Jt.width/Jt.scale.x
/2,jt.y+Jt.height/Jt.scale.y/2))}})}function xn(e){for(var
t=Math.pow(2*ie*e.scale.x,2),n=te.getAllInRange(e,1,1),i=n.length-1;0<=i;i--){var
o=n[i];Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2)<t&&(anime({targets:o,x:
[o.x,e.x+Math.cos(e.rotation)*ie*e.scale.x],y:
[o.y,e.y+Math.sin(e.rotation)*ie*e.scale.x],duration:100,easing:"linear",complete:fu
nction(n,i){return function()
{W.removeChild(n),i.foodEaten+=n.foodValue,i.score+=n.foodValue,B||
(i.fuel=Math.min(100,i.fuel+10)),i.playerId==Ne&&vn();var
e,t=i.scale.x;yt(i),i.playerId==Ne&&0<I&&t!=i.scale.x&&((e=(new Date).getTime())-
rn<1e3?(dn++,on.restart(),on.animations[0].animatable.target.text="Size UP +"+dn):
(on=ln("Size UP +1",16777215,!0,!0),dn=1),rn=e)}}
(o,e)}),ye.splice(ye.indexOf(o),1),te.remove(o,o),o.isDeathFood||0)}}function bn(n)
{n.base.tint=16711680,anime({targets:n.base,duration:500,easing:"easeInQuad",update:
function(e){var t=255*e.progress/100;n.base.tint=(255<<16)+
(t<<8)+t},complete:function(){n.base.tint=16777215}})}function Mn(n,i){var
e=Fe[We]||Fe[Ne];if(Math.pow(n-e.x,2)+Math.pow(i-e.y,2)<re*re)for(var t=0;t<15;t++)
{!function(){var e=new
PIXI.Sprite(j.spark),t=Math.random()*Math.PI*2;e.width=1*ie,e.height=e.width/e.textu
re.width*e.texture.height,e.rotation=t,e.position.set(n,i),e.anchor.set(.5),e.tint=1
6777215,q.addChild(e),anime({targets:e,easing:"easeOutQuad",x:n+Math.cos(t)*ie,y:i+M
ath.sin(t)*ie,alpha:{value:0,easing:"easeInQuad"},duration:400,complete:function()
{q.removeChild(e)}})}()}}sn.prototype.add=function(e,t)
{this.grid[Math.floor(t.x/this.gridSize)]
[Math.floor(t.y/this.gridSize)].push(e)},sn.prototype.remove=function(e,t){var
n=this.grid[Math.floor(t.x/this.gridSize)]
[Math.floor(t.y/this.gridSize)],i=n.indexOf(e);0<=i&&n.splice(i,1)},sn.prototype.upd
ate=function(e,t,n){var
i=Math.floor(t.x/this.gridSize),o=Math.floor(t.y/this.gridSize),a=Math.floor(n.x/thi
s.gridSize),r=Math.floor(n.y/this.gridSize);if(i!=a||o!=r){var d=this.grid[i]
[o],l=d.indexOf(e);0<=l&&d.splice(l,1),this.grid[a]
[r].push(e)}},sn.prototype.getAllInRange=function(e,t,n){for(var i=
[],o=Math.floor(e.x/this.gridSize),a=Math.floor(e.y/this.gridSize),r=-
5/9/20, 12:55 PM
Page 169 of 181
t;r<=t;r++)for(var d=-
n;d<=n;d++)0<=o+r&&o+r<this.grid.length&&0<=a+d&&a+d<this.grid[0].length&&Array.prot
otype.push.apply(i,this.grid[o+r][a+d]);return
i},PIXI.ObservablePoint.prototype.dst=function(e){var t=e.x-this.x,n=e.ythis.y;return Math.sqrt(t*t+n*n)},PIXI.ObservablePoint.prototype.dst2=function(e)
{var t=e.x-this.x,n=e.y-this.y;return
t*t+n*n},PIXI.ObservablePoint.prototype.sub=function(e){return this.x-=e.x,this.y-
=e.y,this},PIXI.ObservablePoint.prototype.add=function(e){return
this.x+=e.x,this.y+=e.y,this},PIXI.ObservablePoint.prototype.scl=function(e){return
this.x*=e,this.y*=e,this},PIXI.ObservablePoint.prototype.len=function(e){return
Math.sqrt(this.x*this.x+this.y*this.y)},PIXI.ObservablePoint.prototype.len2=function
(e){return
this.x*this.x+this.y*this.y},PIXI.ObservablePoint.prototype.nor=function(){var
e=this.len2();return 0==e||1==e?
this:this.scl(1/Math.sqrt(e))},PIXI.ObservablePoint.prototype.cpy=function(){return
new PIXI.Point(this.x,this.y)},PIXI.ObservablePoint.prototype.rotate90=function(e)
{var t=this.x;return 0<=e?(this.x=-this.y,this.y=t):(this.x=this.y,y=-
t),this},PIXI.ObservablePoint.prototype.dot=function(e){return
this.x*e.x+this.y*e.y},PIXI.Point.prototype.dst=PIXI.ObservablePoint.prototype.dst,P
IXI.Point.prototype.dst2=PIXI.ObservablePoint.prototype.dst2,PIXI.Point.prototype.su
b=PIXI.ObservablePoint.prototype.sub,PIXI.Point.prototype.add=PIXI.ObservablePoint.p
rototype.add,PIXI.Point.prototype.scl=PIXI.ObservablePoint.prototype.scl,PIXI.Point.
prototype.len=PIXI.ObservablePoint.prototype.len,PIXI.Point.prototype.len2=PIXI.Obse
rvablePoint.prototype.len2,PIXI.Point.prototype.nor=PIXI.ObservablePoint.prototype.n
or,PIXI.Point.prototype.cpy=PIXI.ObservablePoint.prototype.cpy,PIXI.Point.prototype.
rotate90=PIXI.ObservablePoint.prototype.rotate90,PIXI.Point.prototype.dot=PIXI.Obser
vablePoint.prototype.dot;var kn=[];function Pn(){!function(){var e=(new
Date).getTime();if(xe%8==0)for(var t=0;t<Fe.length;t++)if(t!=Ne&&!Fe[t].dead){var
n=Fe[t],i=null;if((!n.lastBoostActing||3e3<e-n.lastBoostActing)&&
(n.lastBoostActing=e,n.attackDistance=Math.random()*(LX)+X),2!=n.level||ge)if(1==n.level)(i=pn(n))&&(n.targetRotation=Math.atan2(i.yn.y,i.x-n.x));else if(n.position.dst2(Yn)<=Un*Un){var
o=yn(n,4);if(o)n.targetFood!==o&&(n.targetRotation=Math.atan2(o.y-n.y,o.xn.x)+Math.random()*Math.PI/8-Math.PI/16),n.targetFood=o;else if(Math.random()
<.1||!fn(n))for(;n.targetRotation=Math.random()*Math.PI*2,!fn(n););else
n.x<=2*ie&&Math.cos(n.targetRotation)<0||n.y<=2*ie&&Math.sin(n.targetRotation)
<0||n.x>=oe-2*ie&&0<Math.cos(n.targetRotation)||n.y>=ae2*ie&&0<Math.sin(n.targetRotation)?
n.targetRotation=Math.random()*Math.PI*2:n.targetRotation+=Math.random()*Math.PI/8-
Math.PI/16}else for(;n.targetRotation=Math.random()*Math.PI*2,!fn(n););else
n.targetRotation=Math.atan2(Fe[Ne].y-n.y,Fe[Ne].x-n.x);if(n.canCharge&&
(n.charging&&80<=n.fuel&&Math.random()<.1?
(n.charging=!1,In(n)):!n.charging&&Math.random()<.1&&(n.charging=!0)),!n.attacking)
{if(i||(i=pn(n)),!i)continue;(i.playerId!=Ne||!ge)&&i.position.dst(n.position)
<n.attackDistance*(i.width/2+n.width/2+n.weaponContainer.height*(1-27/205))&&
(n.charging=!1,In(n))}}}();(new Date).getTime(),new PIXI.Point,new PIXI.Point,new
PIXI.Point;for(var e,t,n={},i=!1,o=0;o<Fe.length;o++)
{20<(I=Fe[o]).ghosts.length&&40<xe-I.ghosts[0].turn&&
(G.removeChild(I.ghosts[0]),I.ghosts.splice(0,1));for(var a=0;a<I.ghosts.length;a++)
{var r=I.ghosts[a];r.alpha=(1-(xe-r.turn)/40)/2}if(!n[o]&&!I.dead&&
(wn(I),!ge||o!=Ne))if(xn(I),void 0,t=(e=I).position.dst2(Yn)>Un*Un,(e.isInFog=t)?
e.lastFogEntry?180<xe-e.lastFogEntry&&(e.lastFogEntry=xe,e.health-
=.1*e.maxHealth,e.barMask&&
(e.barMask.width=e.health/e.maxHealth*e.barMask.parent.width),0<e.health&&bn(e)):e.l
astFogEntry=xe:e.lastFogEntry=0,I.health<=0)n[o]=!0,un(I.x,I.y,I.rotation,I),It(I.x,
I.y,H?I.foodEaten:Math.max(5,Math.floor(I.score/40)));else{var
d=I.weaponContainer;d.position.set(I.x+Math.cos(I.rotation+I.weaponRotation)*Math.mi
n(I.width,I.height)/2*I.weaponScale,I.y+Math.sin(I.rotation+I.weaponRotation)*Math.m
in(I.width,I.height)/2*I.weaponScale),d.rotation=I.rotation+I.weaponRotation+k,
(I.visible||I.weaponContainer.filters)&&(I.visible?I.fuel<15?
5/9/20, 12:55 PM
Page 170 of 181
I.weaponContainer.filters=null:(I.weaponContainer.filters||
(I.weaponContainer.filters=[new
PIXI.filters.GlowFilter(10/1024*window.innerHeight,0,0,2913791,.5)]),I.fuel<100?
I.weaponContainer.filters[0].outerStrength=20*I.fuel/100:I.weaponContainer.filters[0
].outerStrength=12+8*Math.random()):I.weaponContainer.filters=null);var l=
[],h=mt[I.weaponId].polygon;d.updateTransform();for(a=0;a<h.length/2;a++){var s=new
PIXI.Point(h[2*a+0]*I.weapon.width,h[2*a+1]*I.weapon.height);d.localTransform.apply(
s,s),l.push(s)}I.realPoly=l}}for(var o in function(e){for(var t=new
PIXI.Point,n=0;n<Fe.length;n++)if(!e[n]&&!Fe[n].dead){var
i=Fe[n];if((!ge||n!=Ne)&&i.attacking&&!i.recoveringAttack){for(var
o=i.realPoly,a=Math.ceil(3*
(ie+2*ie*1.6/i.weaponScale)/ne.gridSize),r=ne.getAllInRange(i,a,a),d=0;d<r.length;d+
+)if(r[d]!=i&&!e[r[d].playerId]&&!Fe[n].dead){var l=r[d];if(!(xe-l.knockingTime<=E))
{var
h=ie*l.scale.x+l.weapon.height*l.weaponContainer.scale.y+ie*i.scale.x+i.weapon.heigh
t*i.weaponContainer.scale.y,s=Math.pow(h,2);if(Math.abs(i.x-l.x)<=h&&Math.abs(i.yl.y)<=h)if(Math.pow(i.x-l.x,2)+Math.pow(i.y-l.y,2)<s){for(var c=0;c<o.length-1;c++)
{var g=cn(o[c],o[c+1],l.position,ie*l.scale.x*.8,t);if(isFinite(g)){if(l.health-=B?
Math.max(i.weaponDamage,i.fuel*i.weaponDamage/mi[1]):i.weaponDamage,l.barMask&&
(l.barMask.width=l.health/l.maxHealth*l.barMask.parent.width),0<l.health)l.knockingT
ime=xe,l.knockingDir=Math.atan2(l.y-i.y,l.xi.x),bn(l);else{e[r[d].playerId]=!0,i.kills++,i.score+=100,un(l.x,l.y,l.rotation,l),
l.killerId=n;var m=(new Date).getTime();m-i.lastKillTime<3e3?
i.killCountInARow++:i.killCountInARow=1,i.lastKillTime=m;var
u=0;if(2<=i.killCountInARow){var p=10*(i.killCountInARow-1);i.score+=p}else
Math.abs(mn(i.rotation,l.rotation))<Math.PI/8&&
(u=20,i.score+=u);if(n==Ne&&1<=i.killCountInARow){var y="x"+i.killCountInARow+"
Supernatural Kill!!!";switch(i.killCountInARow){case 1:y="You killed
"+we[l.playerId]+"!";break;case 2:y="Double Kill!";break;case 3:y="Triple
Kill!";break;case 3:y="x"+i.killCountInARow+" Mega Kill!";break;case
4:y="x"+i.killCountInARow+" Epic Kill!";break;case 5:y="x"+i.killCountInARow+"
Insane Kill!";break;case 6:y="x"+i.killCountInARow+" Legendary
Kill!"}ln(y,16717089,!0),Ut.text=Fe[Ne].kills}if(H){var
f=It(l.x,l.y,l.foodEaten);2==Rt&&(kn=f)}else
It(l.x,l.y,Math.max(5,Math.floor(l.score/40)))}break}}if(C&&!e[r[d].playerId]&&
(!l.attacking||l.playerId>n)){var w=o[o.length-1];for(c=0;c<o.length;c++){var
I=o[c];if(gn(w,I,l.realPoly)){i.knockingTime=xe,i.knockingDir=Math.atan2(i.yl.y,i.x-l.x),l.knockingTime=xe,l.knockingDir=i.knockingDir+Math.PI,T||(i.attacking&&
(i.attackTurnsLeft=S-i.attackTurnsLeft,i.weaponState=1==i.weaponState?0:1,P&&
(i.weaponContainer.scale.x*=-1)),l.attacking&&(l.attackTurnsLeft=Sl.attackTurnsLeft,l.weaponState=1==l.weaponState?0:1,P&&
(l.weaponContainer.scale.x*=-1))),Mn((w.x+I.x)/2,(w.y+I.y)/2);break}w=I}}}}}var
v=2*ie+ie*i.scale.x+i.weapon.height*i.weaponContainer.scale.y,x=Math.pow(v,2);for(d=
0;d<fe.length;d++){var b=fe[d];if(Math.abs(i.x-b.x)<=v&&Math.abs(i.y-b.y)
<=v)if(Math.pow(i.x-b.x,2)+Math.pow(i.y-b.y,2)<x){var M=b.position,k=[{x:M.xb.width/2,y:M.y-b.height/2},{x:M.x+b.width/2,y:M.y-b.height/2},
{x:M.x+b.width/2,y:M.y+b.height/2},{x:M.xb.width/2,y:M.y+b.height/2}];for(c=0;c<o.length-1;c++)if(gn(o[c],o[c+1],k))
{0,wt(d);break}}}}}}(n),Fe)if(Fe[o].pet){var c=
(I=Fe[o]).pet,g=I.position.dst(c),m=x;if(!I.dead&&1<Rt){I.moving&&(g<6*ie&&
(m*=.4+g/(6*ie)*.6),8*ie<g&&(m*=1.2)),g<2*ie&&I.health<I.maxHealth&&(m=.4*x);var
u=I.position.cpy();if(I.health==I.maxHealth){var p=4*ie;xe%300==0&&
(c.targetOnPlayerDirection=Math.random()<.5?
-1:1),c.targetOnPlayer+=m/p/60*c.targetOnPlayerDirection,u.x+=Math.cos(c.targetOnPla
yer)*p,u.y+=Math.sin(c.targetOnPlayer)*p}if(g>ie*(I.health<I.maxHealth?1:3)){var
y=mn(Math.atan2(u.y-c.y,u.x-c.x),c.rotation);c.rotation+=0<M?y*M:Math.max(-
b,Math.min(b,y))}if(g<1*ie&&I.health<I.maxHealth&&!I.isInFog&&
(I.health+=vi[ve]/60,I.health>I.maxHealth&&(I.health=I.maxHealth),I.barMask&&
(I.barMask.width=I.health/I.maxHealth*I.barMask.parent.width),xe%6==0)){var f=new
PIXI.Sprite(j.heart),w=Mi[c.petId];f.tint=w[Math.floor(Math.random()*w.length)],f.wi
5/9/20, 12:55 PM
Page 171 of 181
dth=ie/2,f.height=f.width/f.texture.width*f.texture.height,f.anchor.set(.5),f.positi
on.set(c.x+ie*Math.random()-ie/2,c.y+ie*Math.random()-
ie/2),q.addChild(f),anime({targets:f,x:f.x+ie*Math.random()*2-ie,y:f.y-5*ie,alpha:
{value:0,easing:"easeInQuad"},easing:"linear",duration:1e3,complete:function()
{q.removeChild(f)}})}}c.x+=Math.cos(c.rotation)*m*1/60,c.y+=Math.sin(c.rotation)*m*1
/60}for(var o in n){var I;if(i=!0,
(I=Fe[o]).dead=!0,ne.remove(I,I.position),o==Ne)ge=!0,I.visible=!1,I.weapon.visible=
!1,I.usernameText.visible=!1,I.bar&&(I.bar.visible=!1),I.barFrame&&
(I.barFrame.visible=!1),I.killerId?Nn(I.killerId):Nn(0),Cn(I);else{if(We==o&&
(We=I.killerId,nn()),H)I.x=-1e4,I.y=-1e4;else{Math.random()<.25&&
(we[o]=St()),I.usernameText.text=we[o];do{var v=vt(8*ie)}while(Math.abs(v.xFe[Ne].x)<=le+ie&&Math.abs(v.y-Fe[Ne].y)
<=he+ie);I.x=v.x,I.y=v.y}I.score=0,I.foodEaten=0,!ge&&Fe[Ne].hasCrown&&Math.random()
<.1&&(I.level=2)}}i&&Ot(),ge||1!=Rt||En()}var Sn=!1;function Cn(e,t)
{t&&Xe++,be=e.kills,Se=e.foodEaten,Ee=Math.floor(((new Date).getTime()-
e.gameStart)/1e3),Me<be&&(Me=be),Pe<Se&&(Pe=Se),Te<Ee&&
(Te=Ee),ke+=be,Ce+=Se,Be+=Ee,zn();try{localStorage.setItem("lastKills",be),localStor
age.setItem("lastScore",Se),localStorage.setItem("lastGameTime",Ee),localStorage.set
Item("bestKills",Me),localStorage.setItem("bestScore",Pe),localStorage.setItem("best
GameTime",Te),localStorage.setItem("totalKills",ke),localStorage.setItem("totalScore
",Ce),localStorage.setItem("totalGameTime",Be),localStorage.setItem("totalWins",Xe)}
catch(e){}try{"undefined"!=typeof
aiptag&&aiptag.cmd&&aiptag.cmd.display&&setTimeout(function()
{549<window.innerHeight&&(Sn?aiptag.cmd.display.push(function()
{aipDisplayTag.refresh("yohoho-io_970x250")}):aiptag.cmd.display.push(function()
{aipDisplayTag.display("yohoho-io_970x250")}),Sn=!0),
(900<window.innerWidth&&300<window.innerHeight||"ipadpromo"==document.getElementById("homepage").className)&&aiptag.cmd.display.push(func
tion(){aipDisplayTag.refresh("yohoho-io_300x250")}),document.getElementById("banneron-end-popup").style.visibility="visible"},2e3)}catch(e){console.error(e)}}function
En(){ge=!0,setTimeout(function(){for(var e=Fe[Ne],t=0;t<kn.length;t++){var
n=kn[t];anime({targets:n,x:[n.x,e.x+Math.cos(e.rotation)*ie*e.scale.x],y:
[n.y,e.y+Math.sin(e.rotation)*ie*e.scale.x],duration:100,easing:"linear",complete:fu
nction(e,t){return function()
{W.removeChild(e),t.foodEaten+=e.foodValue,t.score+=e.foodValue,t.playerId==Ne&&vn()
;t.scale.x;yt(t)}}(n,e)})}Cn(Fe[Ne],!0)},500),setTimeout(function(){Fn("Yo ho ho!
They all feed the fish!"),"undefined"!=typeof PokiSDK&&PokiSDK.happyTime(1)},10<=Oe?
1e3:500),10<=Oe&&(function(){Ti=new
PIXI.Container;window.innerWidth,window.innerHeight;for(var
e=.05*window.innerWidth,t=.12*window.innerWidth,n=-Math.PI/2,i=nMath.PI/8,o=n+Math.PI/8,a=0;a<150;a++){var r=new
PIXI.Sprite(j.confetti),d=window.innerHeight/40*Oi(.66,1.33);r.size=d,r.width=d,r.he
ight=d/2,r.x=a<75?.25*window.innerWidth:.75*window.innerWidth,r.y=window.innerHeight
;var l=Math.random()*(o-i)+i+(a<75?0:0*-Math.PI/2),h=Math.random()*(te)+e;r.sx=Math.cos(l)*h,r.sy=Math.sin(l)*h,r.tint=Di(),r.r=d,r.d=150*Math.random()+1
1,r.tilt=Math.floor(33*Math.random())-11,r.tiltAngleIncremental=.07*Math.random()+.0
5,r.tiltAngle=0,r.anchor.set(.5),Ti.addChild(r)}clearInterval(Bi),Bi=setInterval(fun
ction(){for(var e=0;e<Ti.children.length;e++){var
t=Ti.children[e];t.x+=t.sx,t.y+=t.sy,t.sx*=.9,t.sy*=.9,t.tiltAngle+=t.tiltAngleIncre
mental,t.y+=(Math.cos(t.d)+3+t.r/2)/2,t.tilt=15*Math.sin(t.tiltAnglee/3),t.rotation=t.tilt/30+Math.PI/2,t.width=t.size*
(.8*Math.abs(Math.sin(t.tiltAngle))+.2),t.height=t.size/2*
(.8*Math.abs(Math.cos(t.tiltAngle))+.2)}},20)}(),setTimeout(function()
{clearInterval(Bi),Ti=null},5e3))}var Tn=
["","Tortuga","Beach","Easter","Wreck","Aztec","Volcano","Village",""],Bn=
[0,200,1600,4200,8300,1e6],Xn=[0,140,700,2100,4400,7600,13500,1e6];function Ln(e)
{for(var t=0;t<Bn.length;t++)if(e<Bn[t])return t;return Bn.length+1}var
Hn,Rn,On,An,Dn=["Shiver me timbers!","Dead men tell no tales...","No prey, no
pay...","Sink me!"];function Fn(e){document.getElementById("endresult").innerHTML=e,document.getElementById("end-time").innerHTML=function(){var
5/9/20, 12:55 PM
Page 172 of 181
e=xe/60,t=Math.floor(e/60),n=Math.floor(e%60);return 1<t?t+" mins "+n+"s":1==t?t+"
min "+n+"s":n+"s"}(),document.getElementById("endrank").innerHTML="#"+Rt,document.getElementById("endkills").innerHTML=Fe[Ne].kills,document.getElementById("endcoins").innerHTML=Fe[Ne].foodEaten,document.getElementById("end-bootycoins").innerHTML=li,document.getElementById("endquote").innerHTML="&quot;"+Dn[Math.floor(Math.random()*Dn.length)]+"&quot;";var
i=Math.floor(Fe[Ne].foodEaten),n=100*(1-(Rt-1)/Ct);3==Oe&&(n=200*(1-(Rt1)/Ct)),11<=Oe&&(n=140*(1-(Rt-1)/Ct));var
o=Ln(hi),a=Ln(hi+n);document.getElementById("end-currentleague").innerHTML=Tn[o],document.getElementById("end-nextleague").innerHTML=Tn[o+1],document.getElementById("end-xpline").style.opacity=0,setTimeout(function(){document.getElementById("continuebutton")&&(document.getElementById("continuebutton").style.visibility="hidden",setTimeout(function()
{document.getElementById("continuebutton").style.visibility="visible"},3500)),document.getElementById("endpopup").style.display="block",We=Fe[Fe[Ne].killerId]&&!Fe[Fe[Ne].killerId].dead?
Fe[Ne].killerId:Ne,nn(),"undefined"!=typeof gtag&&(gtag("set",{page_path:"/endpopup"}),gtag("event","page_view",{playerXP:hi+n})),setTimeout(function(){var t=(new
Date).getTime(),n=setInterval(function(){var e=(new Date).getTime()-t;e<1e3?
document.getElementById("end-booty-coins").innerHTML=Math.floor(li+i*e/1e3):
(clearInterval(n),li+=i,document.getElementById("end-bootycoins").innerHTML=li)},20);anime({targets:"#end-bootycoins",duration:150,loop:7,easing:"linear",scale:[1,1.2],complete:function()
{document.getElementById("end-booty-coins").style.transform=""}})},500);var t=(hiBn[o-1])/(Bn[o]-Bn[o-1])*100;document.getElementById("end-xp-barvalue").style.width=t+"%",anime({targets:"#end-xp-line",opacity:
[0,1],delay:2e3,duration:200,easing:"linear"}),setTimeout(function(){var e=o==a?
(hi+n-Bn[o-1])/(Bn[o]-Bn[o-1])*100:100;anime({targets:"#end-xp-bar-value",width:
[t+"%",e+"%"],easing:"linear",duration:1e3,complete:function(){if(hi+=n,o!=a)
{document.getElementById("end-currentleague").innerHTML=Tn[a],document.getElementById("end-nextleague").innerHTML=Tn[a+1];var e=(hi-Bn[a-1])/(Bn[a]-Bn[a1])*100;anime({targets:"#end-xp-bar-value",width:
["0%",e+"%"],easing:"linear",duration:500})}Yi()}})},2500)},1e3);try{localStorage.se
tItem("coinsOwned",li+i),localStorage.setItem("playerXP",hi+n)}catch(e)
{}"undefined"!=typeof PokiSDK&&
(PokiSDK.gameplayStop(),728<=window.innerWidth&&PokiSDK.displayAd(document.getElemen
tById("banner-on-endpopup"),"728x90"),728<=window.innerWidth&&PokiSDK.displayAd(document.getElementById(
"banner-on-homepage"),"728x90"))}function Nn(e){Fn(e?'Ye have been killed by <span
class="killer">'+we[e]+"</span>":"Ye died in the "+(12==Oe?"high tide":"toxic
storm"))}function Wn(e){var
t=Math.floor(e/60),n=Math.floor(e%60),i=Math.floor(t/60),o="";return 0<i&&(o+=i+"h
"),0<(t=Math.floor(t%60))&&(o+=t+"m "),o+=n+"s"}function zn()
{document.getElementById("last-kills").innerHTML=be,document.getElementById("bestkills").innerHTML=Me,document.getElementById("totalkills").innerHTML=ke,document.getElementById("lastscore").innerHTML=Se,document.getElementById("bestscore").innerHTML=Pe,document.getElementById("totalscore").innerHTML=Ce,document.getElementById("last-gametime").innerHTML=Wn(Ee),document.getElementById("best-gametime").innerHTML=Wn(Te),document.getElementById("total-gametime").innerHTML=Wn(Be),document.getElementById("total-wins").innerHTML=Xe}function
Gn(e,t){Hn?(i=Hn).clear():((i=new
PIXI.Graphics).alpha=.6,Hn=i,A.addChild(Hn));i.beginFill(12==Oe?
4021759:16711680,1);var n=Math.max(0,t-Math.max(oe,ae)/2);if(i.moveTo(-n-2*re,-n2*de).lineTo(n+oe+2*re,-n-2*de).lineTo(n+oe+2*re,n+ae+2*de).lineTo(-n2*re,n+ae+2*de),i.moveTo(e.x-t,e.y).arcTo(e.x-t,e.y-t,e.x,e.y-t,t).arcTo(e.x+t,e.y5/9/20, 12:55 PM
Page 173 of 181
t,e.x+t,e.y,t).arcTo(e.x+t,e.y+t,e.x,e.y+t,t).arcTo(e.x-t,e.y+t,e.xt,e.y,t).addHole(),On){var i;(i=On).clear(),i.beginFill(12==Oe?
4021759:16711680,1);n=Math.max(0,t-Math.max(oe,ae)/2);i.moveTo(-n-2*re,-n2*de).lineTo(n+oe+2*re,-n-2*de).lineTo(n+oe+2*re,n+ae+2*de).lineTo(-n2*re,n+ae+2*de),i.moveTo(e.x-t,e.y).arcTo(e.x-t,e.y-t,e.x,e.y-t,t).arcTo(e.x+t,e.yt,e.x+t,e.y,t).arcTo(e.x+t,e.y+t,e.x,e.y+t,t).arcTo(e.x-t,e.y+t,e.xt,e.y,t).addHole()}}function Kn(e,t){if(Rn){(n=Rn).clear()}else{var n=new
PIXI.Graphics;Rn=n,A.addChildAt(Rn,A.children.indexOf(W))}n.lineStyle(ie/10,0,.5,.5)
,n.drawCircle(e.x,e.y,t),An&&
((n=An).clear(),n.lineStyle(ie/1,0,.5,.5),n.drawCircle(e.x,e.y,t))}var _n,Yn=new
PIXI.Point,qn=new PIXI.Point,Vn=new PIXI.Point,Un=0,jn=0,Jn=1,Zn=0,Qn=0,$n=
[{delay:0,radiusAtEnd:.75,duration:0},{delay:15,radiusAtEnd:.5,duration:10},
{delay:15,radiusAtEnd:.375,duration:10},{delay:15,radiusAtEnd:.25,duration:10},
{delay:15,radiusAtEnd:.125,duration:10},{delay:15,radiusAtEnd:.0625,duration:10},
{delay:15,radiusAtEnd:.03125,duration:10},
{delay:15,radiusAtEnd:.015625,duration:10}];function ei(e){(new
Date).getTime();if(ce&&(xe++,Pn()),0<(Zn-=e/1e3))_t.text="0:"+(9<Zn?
Math.ceil(Zn):"0"+Math.ceil(Zn)),1==Jn&&(Yn.add(Vn),Gn(Yn,Un-=_n));else
if(Zn<-1e3)_t.text="0:00",Rn.visible=!1,An.visible=!1;else{if(1==Jn)if(Qn<$n.length)
{Un=$n[Qn].radiusAtEnd*oe,0==Qn?Yn.set(oe/2,ae/2):Yn.set(qn.x,qn.y),Zn=Qn<$n.length1?$n[++Qn].delay:-99999999,jn=$n[Qn].radiusAtEnd*oe;var t=Unjn,n=Math.random()*Math.PI*2,i=Math.random()*t;qn.set(Yn.x+Math.cos(n)*i,Yn.y+Math.s
in(n)*i),Vn=qn.cpy().sub(Yn).scl(1/$n[Qn].duration/60),_n=(Unjn)/$n[Qn].duration/60,Gn(Yn,Un),Kn(qn,jn)}else _n=0,Vn.set(0,0);else
Zn=$n[Qn].duration;Jn=0==Jn?1:0,Kt.texture=j[0==Jn?"icon-fog-1":"icon-fog2"],_t.text="0:"+(9<Zn?Math.ceil(Zn):"0"+Math.ceil(Zn)),0<xe&&!Et&&function(e,t){t||
(t=3e3),(e=new PIXI.Text(e,
{fontFamily:"Nunito",fontWeight:"bold",fontSize:Math.round(Math.min(window.innerHeig
ht,window.innerWidth)/30),fill:4473924,align:"center"})).anchor.set(.5,0),e.position
.set(window.innerWidth/2,-
e.height),U.addChild(e),anime({targets:e,easing:"linear",alpha:
[0,1],y:.01*window.innerHeight,duration:200,complete:function()
{setTimeout(function(){anime({targets:e,easing:"linear",alpha:[1,0],y:-
e.height,duration:200,complete:function(){U.removeChild(e)}})},t)}})}((12==Oe?"High
tide":"Poison gas")+(1==Jn?" is advancing":" advances in "+Math.ceil(Zn)+"
seconds"))}}function ti(){var e=null;0<We&&(e=Fe[We]),e||Et||ge||(e=Fe[Ne]),!e&&Et&&
(e={x:oe/2,y:ae/2}),e||(e=Fe[Ne]);var t=e.x,n=e.y;if(e){var i=t-le/2,o=nhe/2;if(A.position.set(-i*A.scale.x,-
o*A.scale.y),F.position.set(Math.floor(i/Ae)*Ae,Math.floor(o/Ae)*Ae),F.x<0&&
(F.x=0),F.y<0&&(F.y=0),F.x+F.width>oe&&(F.x=oe-F.width),F.y+F.height>ae&&(F.y=aeF.height),zt){var a=De/(oe+2*De);zt.position.set(Wt.x-Wt.width+Wt.width*a+Wt.width*
(1-2*a)*t/oe,Wt.y+Wt.height*a+Wt.height*(1-2*a)*n/ae)}}for(var
r=0;r<ye.length;r++)ye[r].visible=Math.abs(e.x-ye[r].x)<1.5*le&&Math.abs(e.yye[r].y)<1.5*he;for(var d=0;d<Fe.length;d++)d!=Ne&&
(Fe[d].visible=!Fe[d].dead&&Math.abs(e.x-Fe[d].x)<1.5*le&&Math.abs(e.y-Fe[d].y)
<1.5*he,Fe[d].usernameText.visible=Fe[d].visible,Fe[d].weaponContainer.visible=Fe[d]
.visible),Fe[d].usernameText.position.set(Fe[d].position.x,Fe[d].position.yFe[d].height/2-ie),Fe[d].bar&&Fe[d].bar.position.set(Fe[d].position.xFe[d].bar.width*Fe[d].bar.scale.x/2,Fe[d].position.y+Fe[d].height/2+Fe[d].bar.height
),Fe[d].barFrame&&Fe[d].barFrame.position.set(Fe[d].bar.x,Fe[d].bar.y),Fe[d].hasCrow
n&&ee.position.set(Fe[d].x,Fe[d].y-.5*ie-Fe[d].height/2);for(r=0;r<Tt.length;r++)
{var l=Tt[r],h=l.position.dst2(e),s=Math.max(l.width,l.height)/2;l.alpha=s*s<h?
1:0}O.render(A),O.render(U,void 0,!1),Ti&&O.render(Ti,void 0,!1)}var
ni=60,ii=0;function oi(e,t){t&&(console.log("panic: simulation is too late, droping
updates"),MainLoop.resetFrameDelta()),ni<xe&&(ni+=++ii<10?
600:3600,Math.round(e))}var ai=[],ri=[],di=[],li=0,hi=0;function si(e)
{for(;e.firstChild;)e.removeChild(e.firstChild)}var ci=
[0,100,115,135,150,165,185,205,225,240,260,275,300,315,335,355,375,390,410,430,450],
gi=
[0,102,114,126,138,150,165,180,195,210,225,240,255,270,285,300,315,330,345,360,375,3
5/9/20, 12:55 PM
Page 174 of 181
90,405,420,435,450,465,480,495,510,525,540,555,570,585,600],mi=
[0,34,39,45,50,56,62,68,75,81,87,93,100,106,112,118,125,131,137,143,150],ui=
[0,34,38,42,46,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,135,140,145
,150,155,160,165,170,175,180,185,190,195,200],pi=
[0,300,800,1500,2500,3e3,6e3,9e3,12e3,13e3,14e3,15e3,16e3,17e3,18e3,19e3,2e4,21e3,22
e3,23e3,24e3],yi=
[0,100,150,200,250,300,1e3,1500,2e3,2500,3e3,4e3,5e3,6e3,7e3,8e3,9e3,11e3,13e3,15e3,
17e3,2e4,22e3,24e3,26e3,28e3,31e3,34e3,37e3,4e4,43e3,48e3,53e3,58e3,63e3,68e3],fi=
[0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5],wi=
[0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7],Ii=
[0,1e4,1e4,15e3,15e3,15e3,2e4,2e4,2e4,3e4],vi=
[11,13,15,17,19,21,23,25,27,29,31,33,35,37,39],xi=
[2,2,2,3,3,4,4,4,5,5,6,6,6,7,7,7],bi=
[1e3,2e3,3e3,5e3,7e3,9e3,13e3,17e3,22e3,26e3,31e3,37e3,43e3,53e3,63e3],Mi={1:
[8515059,1768075,1536767,16121670,456957,16760324],2:
[16661552,27595,16757019,12845060,16706063,16741998],3:
[16661552,11756336,16567452,9705982,10825281,16741998],4:
[3487029,10921638,8421504,9267122,2171169,16741998],5:
[16723817,4338099,9575423,13893817,7274452,11836670],6:
[16684812,7970302,16704021,6514643,50388,7274452],7:
[16714273,3750201,7500400,0,6424064,11974326],8:
[16730394,14811150,16726043,9127680,16711904,15311015],9:
[16726043,15047169,16730394,16702012,16765953,14811150]};function ki(e){if(11<=Oe)
{var t=[1,2,3,4,5];switch(e){case 2:t=[4,5,6,7,8,9];break;case 3:t=
[9,10,11,12,13,14];break;case 4:t=[14,15,16,17,18,19];break;case 5:t=
[19,20,21,22,23,24];break;case 6:t=[24,25,26,27,28,29];break;case 7:t=
[29,30,31,32,33,34,35]}}else{t=[1,2,3,4];switch(e){case 2:t=[3,4,5,6,7,8];break;case
3:t=[7,8,9,10,11,12];break;case 4:t=[11,12,13,14,15,16];break;case 5:t=
[15,16,17,18,19,20]}}return t[Math.floor(Math.random()*t.length)]}var
Pi=$e,Si=0;function Ci(){si(document.getElementById("skinlist")),si(document.getElementById("pet-list"));var
e=Math.floor(Math.min(.14*window.innerHeight,.08*window.innerWidth)),t=window.innerW
idth>window.innerHeight?7:5;5==t&&window.innerWidth<=450&&
(t=4),7==t&&window.innerWidth<=680&&(t=5);var n=0;
(f=document.createElement("div")).className="line",document.getElementById("skinlist").appendChild(f);var i=!1,o=1,a=fi.length-1;if(Pi){Si<0&&(Si=0);var r=
(fi.length-1)/t-2;r<Si&&(Si=r),o=1+Si*t,a=2*t,document.getElementById("skinlist").style.height="auto",document.getElementById("skinlist").style.overflowY="auto",document.getElementById("arrowup").className=0==Si?"disabled":"",document.getElementById("arrowdown").className=Si==r?"disabled":""}for(var d=o;d<o+a;d++){var
l=-1===ri.indexOf(d),h=fi[d]<=Ln(hi);if(t<=n)
(f=document.createElement("div")).className="line",document.getElementById("skinlist").appendChild(f),n=0;
(w=document.createElement("div")).style.width=e+"px",w.style.height=e+"px",w.classNa
me="card"+(d==J?" selected":"")+(l?et?" locked-nogreyscale":"
locked":""),h&&w.addEventListener("click",function(e){return function(){Hi(e)}}
(d)),Ie[-1]=d;(new Date).getTime();var s=gt(-1,e);(new
Date).getTime();w.appendChild(s);var
c=document.createElement("div");c.className="power-barframe",w.appendChild(c);var
g=document.createElement("div");g.className="power-bar",c.appendChild(g);var
m=document.createElement("div");if(m.className="power-bartext",m.innerHTML="POWER",c.appendChild(m),g.style.height=mi[d]/mi[mi.length1]*100+"%",h){if(l){u=document.createElement("div"),p=pi[d];u.className="button
unlock"+(li<p?" disabled":""),p<=li&&(i=!0),1e3<p&&(p=p/1e3+"k"),u.innerHTML=p+'
<img src="img/coins_m.png">',w.appendChild(u),
(v=document.createElement("div")).className="lock",w.appendChild(v)}}else{var
u=document.createElement("div"),p=pi[d];u.className="button unlock disabled
smalltext",u.innerHTML=Tn[fi[d]]+" island",w.appendChild(u),
(v=document.createElement("div")).className="lock",w.appendChild(v)}f.appendChild(w)
5/9/20, 12:55 PM
Page 175 of 181
,n++}document.getElementById("skin-list").style.minWidth=48+
(.04*window.innerHeight+16+e)*t+"px",document.getElementById("new-skinavail").style.display=i?"block":"none";e=Math.min(.2*window.innerHeight,.15*window.i
nnerWidth),n=0;
(f=document.createElement("div")).className="line",document.getElementById("petlist").appendChild(f);for(var y=1;y<=9;y++){var f;l=-1===di.indexOf(y),h=!0;if(5<=n)
(f=document.createElement("div")).className="line",document.getElementById("petlist").appendChild(f),n=0;var w,I=j["pet-
"+y];if((w=document.createElement("div")).style.width=Math.floor(e)+"px",w.style.hei
ght=Math.floor(e/I.width*I.height)+"px",w.className="card"+(y==Z?" selected":"")+
(l?" locked":""),h&&w.addEventListener("click",function(e){return function(){Ri(e)}}
(y)),(s=st(I,e)).style.position="",w.appendChild(s),h){if(l)
{u=document.createElement("div"),p=Ii[y];u.className="button unlock"+(li<p?"
disabled":""),p<=li&&(i=!0),1e3<p&&(p=p/1e3+"k"),u.innerHTML=p+' <img
src="img/coins_m.png">',w.appendChild(u),
(v=document.createElement("div")).className="lock",w.appendChild(v)}}else{var
v,u=document.createElement("div"),p=Ii[d];u.className="button unlock disabled
smalltext",u.innerHTML=Tn[fi[d]]+" island",w.appendChild(u),
(v=document.createElement("div")).className="lock",w.appendChild(v)}f.appendChild(w)
,n++}document.getElementById("pet-list").style.minWidth=48+5*
(16+e)+"px",document.getElementById("skin-popup-label")&&
(document.getElementById("skin-popuplabel").style.fontSize=window.innerWidth>window.innerHeight?"4vh":"4vw"),document.ge
tElementById("skin-button-char")&&(document.getElementById("skin-buttonchar").style.fontSize=window.innerWidth>window.innerHeight?"4vh":"4vw"),document.get
ElementById("skin-button-pet")&&(document.getElementById("skin-buttonpet").style.fontSize=window.innerWidth>window.innerHeight?"4vh":"4vw",document.getEl
ementById("skin-button-pet").style.display=13==Oe&&Ln(hi)>=xi[0]?"inlineblock":"none",document.getElementById("pet-level").innerHTML=(0==Z?0:vi[ve])+"
Health Points/s",ve+1<xi.length&&Ln(hi)<xi[ve+1]||0==di.length?
(document.getElementById("pet-upgrade-button").innerHTML="Upgrade Not
Available",document.getElementById("pet-upgrade-button").className="button
disabled"):ve+1<bi.length?(document.getElementById("pet-upgrade-button").innerHTML="
<span>Upgrade for "+bi[ve+1]+' </span><img src="img/coins_m.png">',li<bi[ve+1]?
document.getElementById("pet-upgrade-button").className="button
disabled":document.getElementById("pet-upgrade-button").className="button"):
(document.getElementById("pet-upgrade-button").innerHTML="Fully
upgraded",document.getElementById("pet-upgrade-button").className="button
disabled"))}function Ei(e){e&&(document.getElementById("skin-homepagecanvas").innerHTML=""),Ie[-1]=J;var
t=gt(-1,Math.min(68,.2*window.innerHeight),!0);document.getElementById("skinhomepage-canvas").appendChild(t),ai=[t]}var Ti,Bi,Xi=0;function Li(e)
{Xi=e,document.getElementById("skin-button-char").className=0==Xi?"button
red":"button black",document.getElementById("skin-buttonpet").className=1==Xi?"button red":"button black",document.getElementById("skinlist").style.display=0==Xi?"block":"none",document.getElementById("petblock").style.display=1==Xi?"block":"none",13!=Oe&&document.getElementById("skinbutton-char")&&(document.getElementById("skin-buttonchar").className=""),document.getElementById("arrow-up")&&Pi&&
(document.getElementById("arrowup").style.display=0==Xi?"block":"none",document.getElementById("arrowdown").style.display=0==Xi?"block":"none")}function Hi(e){if(-1===ri.indexOf(e)){var
t=pi[e];if(li<t)return void alert("You don't own enough coins to unlock this
character");li-
=t,ri.push(e);try{localStorage.setItem("unlockedSkins",JSON.stringify(ri)),localStor
age.setItem("coinsOwned",li)}catch(e){}document.getElementById("skin-popupbooty").innerHTML=li,document.getElementById("homepagebooty").innerHTML=li}J=e;for(var n=0;n<1;n++){Ie[-1]=e;var
i=ai[n],o=gt(-1,i.offsetWidth);i.parentNode.replaceChild(o,i),ai[n]=o}if("undefined"
!=typeof Storage)try{localStorage.setItem("playerSkin",J)}catch(e)
5/9/20, 12:55 PM
Page 176 of 181
{console.log(e)}Ci()}function Ri(e){if(-1===di.indexOf(e)){var
t=Ii[e];if(li<t)return void alert("You don't own enough coins to unlock this
pet");li-
=t,di.push(e);try{localStorage.setItem("unlockedPets",JSON.stringify(di)),localStora
ge.setItem("coinsOwned",li)}catch(e){}document.getElementById("skin-popupbooty").innerHTML=li,document.getElementById("homepagebooty").innerHTML=li}if(Z=e,"undefined"!=typeof
Storage)try{localStorage.setItem("playerPet",Z)}catch(e)
{console.log(e)}Ci()}function Oi(e,t){return e+Math.random()*(t-e)}function Ai(e,t)
{return e+Math.floor(Math.random()*(t-e))}function Di(){return(Ai(30,255)<<16)+
(Ai(30,230)<<8)+Ai(30,230)}function Fi(){if(r=null,"undefined"!=typeof
Storage)try{localStorage.removeItem("sessionId")}catch(e){console.log(e)}}function
Ni(){gapi.auth2.getAuthInstance().signOut().then(function(){console.log("User signed
out from google."),a=!1,Fi()})}function Wi(e){console.log("Facebook login
status",e),a||("connected"===e.status?
(d=!0,t=e.authResponse.accessToken,FB.api("/me?
fields=picture,email&redirect=false",function(e){e&&e.picture&&e.picture.data&&
(n=e.picture.data.url),Gi()})):(d&&Fi(),d=!1))}function zi(){var n=new
XMLHttpRequest;n.onreadystatechange=function()
{if(4==n.readyState&&200==n.status)if(-1!=n.responseText.indexOf("ERROR"))console.er
ror("loginOnServer returned ERROR"),Ki();else{var
e=n.responseText.split("\n");r=e[0];var t=e[1];if(qi||t&&(e[2]&&0<e[2].length?
function(e)
{if(!e||0==e.length)return;try{e=JSON.parse(e);pe=e.gamesStarted,li=e.coinsOwned,J=e
.playerSkin,Z=e.playerPet,hi=e.playerXP,ri=e.unlockedSkins,di=e.unlockedPets,ve=e.pl
ayerPetLevel,Ee=e.lastGameTime,be=e.lastKills,Se=e.lastScore,Be=e.totalGameTime,ke=e
.totalKills,Xe=e.totalWins||0,Ce=e.totalScore,Te=e.bestGameTime,Me=e.bestKills,Pe=e.
bestScore,Oe=e.abBotSkillLevel,document.getElementById("homepageleague").innerHTML=Tn[Ln(hi)],document.getElementById("homepagebooty").innerHTML=li,zn(),void 0!==j&&(Ei(!0),Ci())}catch(e){console.error(e)}}
(e[2]):Yi()),"undefined"!=typeof
Storage)try{localStorage.setItem("sessionId",r)}catch(e)
{console.log(e)}}},n.onerror=function(e){console.error("loginOnServer
error"),Ki()},n.open("POST",o+"/login?s="+(r||"")+(a?"&a=1":"")+
(!a&&d?"&a=2":"")+"&app="+(document.getElementById("privacy-policycheckbox").checked?1:0)+"&ecs="+(document.getElementById("emailing-consentcheckbox").checked?
1:0)+"&ect="+encodeURIComponent(document.getElementById("emailing-consenttext").innerHTML),!0),a?n.send(i):d?n.send(t):n.send(null)}function Gi()
{document.getElementById("loginpopup").style.display="none",document.getElementById("unconnectedblock").style.display="none",document.getElementById("connectedblock").style.display="block",document.getElementById("profilepicture").src=n,zi()}function Ki(){return
a&&Ni(),d&&FB.logout(Wi),document.getElementById("connectedblock").style.display="none",!(document.getElementById("unconnectedblock").style.display="block")}function _i()
{try{et&&Qe&&768==window.screen.width&&1024==window.screen.height&&
(document.getElementById("homepage").className=0==window.orientation&&2<pe?"ipadpromo":"")}catch(e){console.error(e)}}function Yi(){if(a||d){var e=
{gamesStarted:pe,coinsOwned:li,playerSkin:J,playerPet:Z,playerXP:hi,unlockedSkins:ri
,unlockedPets:di,playerPetLevel:ve,lastGameTime:Ee,lastKills:be,lastScore:Se,totalGa
meTime:Be,totalKills:ke,totalScore:Ce,totalWins:Xe,bestGameTime:Te,bestKills:Me,best
Score:Pe,abBotSkillLevel:Oe},t=new XMLHttpRequest;t.onreadystatechange=function()
{4==t.readyState&&t.status},t.onerror=function(e){console.error("save progress
error")},t.open("POST",o+"/save?s="+(r||""),!0),t.send(JSON.stringify(e))}}var
qi=!1;function Vi(){try{"?restart"==window.location.search&&(window.confirm("Would
you like to restart your progress? (you will lose all progress, characters, pets,
stats and coins)")&&
(localStorage.clear(),qi=!0),history.replaceState("",document.title,window.location.
5/9/20, 12:55 PM
Page 177 of 181
pathname))}catch(e){console.error(e)}void
0!==document.body&&document.body||console.error("document.body is
null","readyState=",document.readyState),"undefined"!=typeof Raven&&Raven.config&&"?
noraven"!=window.location.search&&Raven.config("http://fea4c3954e94455eb751f21cd24e5
809@sentry.yohoho.io/11",{whitelistUrls:
["yohoho.js"]}).install();try{"undefined"!=typeof
aiptag&&null!=document.getElementById("banner-onhomepage").offsetParent&&aiptag.cmd.display.push(function()
{aipDisplayTag.display("yohoho-io_300x250")})}catch(e){console.error(e)}try{var
e=localStorage.getItem("quality");e&&je(e)}catch(e)
{console.error(e)}try{"undefined"!=typeof Storage&&
(localStorage.getItem("username")&&
(document.getElementById("username").value=localStorage.getItem("username")),localSt
orage.getItem("sessionId")&&(r=localStorage.getItem("sessionId")))}catch(e)
{console.error(e)}PIXI.ticker.shared.stop();PIXI.utils.isWebGLSupported()||document.
getElementById("no-webgl-popup")&&(document.getElementById("no-webglpopup").style.display="block"),(O=PIXI.autoDetectRenderer(256,256,
{antialias:!0,transparent:!1,resolution:se*Ye})).plugins.interaction&&
(O.plugins.interaction.destroy(),O.plugins.interaction=null),O.view.addEventListener
("touchstart",Dt,!0),O.view.addEventListener("touchmove",Dt,!0),O.view.addEventListe
ner("touchend",Dt,!0),O.view.addEventListener("touchcancel",Dt,!0),window.addEventLi
stener("resize",nn,!0),window.addEventListener("mousemove",At,!0),O.view.addEventLis
tener("mousedown",Ft,!0),O.view.tabindex=1,window.addEventListener("mouseup",Nt,!0),
window.addEventListener("wheel",tn,!0),window.addEventListener("keydown",$t,!0),wind
ow.addEventListener("keyup",en,!0),window.oncontextmenu=function()
{return!1},O.view.style.display="none",O.backgroundColor=1289136,O.view.style.positi
on="fixed",O.view.style.top=0,O.view.style.left=0,O.autoResize=!0,void
0!==document.body&&null!==document.body||console.error("document.body is
null","readyState=",document.readyState),document.body.appendChild(O.view),A=new
PIXI.Container,D=new PIXI.Container,A.addChild(D),F=new
PIXI.Container,A.addChild(F),N=new PIXI.Container,A.addChild(N),G=new
PIXI.Container,A.addChild(G),W=new PIXI.Container,A.addChild(W),z=new
PIXI.Container,A.addChild(z),K=new PIXI.Container,A.addChild(K),_=new
PIXI.Container,A.addChild(_),Y=new PIXI.Container,A.addChild(Y),q=new
PIXI.Container,A.addChild(q),V=new PIXI.Container,A.addChild(V),U=new
PIXI.Container,v=new
PIXI.Container,MainLoop.setBegin(hn).setUpdate(ei).setDraw(ti).setEnd(oi),PIXI.loade
r.add("spritesheet","img/spritesheet4-.json").add("spritesheet2","img/spritesheet4-
2.json").add("spritesheet3","img/spritesheet4-
3.json").add("spritesheet4","img/spritesheet4-
4.json").add("01g","img/01g.jpg").add("02g","img/02g.jpg").add("03g","img/03g.jpg").
add("04g","img/04g.jpg").add("05g","img/05g.jpg").add("minimap","img/minimap.png").a
dd("flag","img/flag.svg.raw").add("ndata").load(function(e,t){for(var n in
console.log("Resources loaded"),t)if(t[n].error){console.error("error loading
asset",t[n].error),alert("Error loading game images, please reload the page. Clear
your browser cache if this happens repeatedly."),t[n].error;break}for(var i in void
0===(j=t.spritesheet.textures)&&(console.error("textures are
invalid",t["img/spritesheet.json"]),alert("Error loading game images, please reload
the page. Clear your browser cache if this happens
repeatedly.")),PIXI.loader.resources.spritesheet2.textures)j[i]=PIXI.loader.resource
s.spritesheet2.textures[i];for(var i in
PIXI.loader.resources.spritesheet3.textures)j[i]=PIXI.loader.resources.spritesheet3.
textures[i];for(var i in
PIXI.loader.resources.spritesheet4.textures)j[i]=PIXI.loader.resources.spritesheet4.
textures[i];if(j["01g"]=t["01g"].texture,j["02g"]=t["02g"].texture,j["03g"]=t["03g"]
.texture,j["04g"]=t["04g"].texture,j["05g"]=t["05g"].texture,j.minimap=t.minimap.tex
ture,kt=t.ndata.data.split(/\r?\n/),function()
{if(PIXI.loader.resources.flag&&!Qe)try{document.getElementById("flag").innerHTML=PI
XI.loader.resources.flag.data,setTimeout(function(){var
e=document.getElementById("flag").getElementsByTagName("svg")[0],t=new
5/9/20, 12:55 PM
Page 178 of 181
Warp(e);t.interpolate(256),t.transform(function(e){return[e[0],e[1],e[1]]});var
n=0,i=function(){ce&&!Et||(t.transform(function(e)
{return[e[0],e[2]+8*Math.sin(e[0]/64+n),e[2]]}),n+=.05),requestAnimationFrame(i)};i(
)})}catch(e){console.error(e)}}(),document.getElementById("homepageloading").style.display="none",document.getElementById("homepageloaded").style.display="block",(Q=new
PIXI.Sprite(j.circle)).visible=!1,Q.tint=0,Q.alpha=.1,Q.anchor.set(.5),($=new
PIXI.Sprite(j.circle)).visible=!1,$.tint=0,$.alpha=.3,$.anchor.set(.5),v.addChild(Q)
,v.addChild($),Bt(!0),Qe&&document.getElementById("cross-promo")&&
(document.getElementById("cross-promo").style.display="none"),
(ze||Ge||_e||Ke)&&document.getElementById("portal-button")&&
(document.getElementById("portalbutton").style.display="none"),Ke)try{document.getElementById("crosspromo").getElementsByTagName("a")[0].href="https://www.crazygames.com/game/copterio"}catch(e){console.error(e)}if(document.getElementById("skin-editor")){var
o="";for(var a in j)o+='<option name="'+a+'">'+a+"
</option>";document.getElementById("skin-editor-gamesprites").innerHTML=o,document.getElementById("skin-editorinput2").addEventListener("change",function(){var e=document.getElementById("skineditor-input2").files[0],n=new FileReader;n.onload=function(){var
e="data:image/png;base64,"+btoa(String.fromCharCode.apply(null,new
Uint8Array(n.result))),t=document.createElement("img");t.src=e,j[document.getElement
ById("skin-editor-gamesprites").value]=PIXI.Texture.fromImage(t.src),document.getElementById("skin-editorinput2").value=""},n.readAsArrayBuffer(e)})}});try{if("undefined"!=typeof Storage)
{pe=localStorage.getItem("gamesStarted")||0,li=parseInt(localStorage.getItem("coinsO
wned"))||0,hi=parseInt(localStorage.getItem("playerXP"))||0,be=parseInt(localStorage
.getItem("lastKills"))||0,Me=parseInt(localStorage.getItem("bestKills"))||0,ke=parse
Int(localStorage.getItem("totalKills"))||0,Se=parseInt(localStorage.getItem("lastSco
re"))||0,Pe=parseInt(localStorage.getItem("bestScore"))||0,Ce=parseInt(localStorage.
getItem("totalScore"))||0,Ee=parseInt(localStorage.getItem("lastGameTime"))||0,Te=pa
rseInt(localStorage.getItem("bestGameTime"))||0,Be=parseInt(localStorage.getItem("to
talGameTime"))||0,Xe=parseInt(localStorage.getItem("totalWins"))||0,J=localStorage.g
etItem("playerSkin")||1,Z=localStorage.getItem("playerPet")||0,ve=parseInt(localStor
age.getItem("playerPetLevel"))||0,Re=parseInt(localStorage.getItem("lastVideoAdEnded
Time"))||0,Le=localStorage.getItem("initialRef")||"";try{ri=
[1],localStorage.getItem("unlockedSkins")&&
(ri=JSON.parse(localStorage.getItem("unlockedSkins")))}catch(e){ri=[1]}try{di=
[],localStorage.getItem("unlockedPets")&&
(di=JSON.parse(localStorage.getItem("unlockedPets")))}catch(e){di=
[]}if(localStorage.getItem("abBotSkillLevel"))Oe=parseInt(localStorage.getItem("abBo
tSkillLevel")),-1!==[1,2,3,4,5,6,7,8,9,10,11,12].indexOf(Oe)&&
(Oe=13,localStorage.setItem("abBotSkillLevel",Oe));else{var t=
[13];Oe=t[Math.floor(Math.random()*t.length)],localStorage.setItem("abBotSkillLevel"
,Oe)}"?version-10"==window.location.search&&10!=Oe?(alert("Switching to version
10"),localStorage.setItem("abBotSkillLevel",10),document.location.href="/"):"?
version-11"==window.location.search&&11!=Oe&&(alert("Switching to version
11"),localStorage.setItem("abBotSkillLevel",11),document.location.href="/");try{if(0
==Le.length){if(!document.referrer||document.referrer.match(/\/yohoho\.io\/?/))
{if(Le="direct",0<location.search.length){var n=new
URLSearchParams(location.search);n.has("ref")&&(Le=n.get("ref"))}}else{var
i=document.referrer.split("/")[2].split(".");Le="co"==i[i.length2]||"com"==i[i.length-2]?
i.slice(-3).join("."):i.slice(-2).join(".")}localStorage.setItem("initialRef",Le)}}c
atch(e){console.error(e)}}}catch(e){console.log(e)}9==Oe&&(l=!1),11<=Oe&&
(Bn=Xn,mi=ui,ci=gi,pi=yi,fi=wi),l||(document.getElementById("mobilecontrols").innerHTML="Mobile: tap to attack, tap and hold to move"),Qe?
document.getElementById("desktopcontrols").style.display="none":document.getElementById("mobilecontrols").style.display="none",document.getElementById("homepage5/9/20, 12:55 PM
Page 179 of 181
league").innerHTML=Tn[Ln(hi)],document.getElementById("homepagebooty").innerHTML=li,et&&!window.navigator.standalone&&pe<10&&
(document.getElementById("ios-fspopup").style.display="block"),_i();try{"undefined"!=typeof aiptag&&"ipadpromo"==document.getElementById("homepage").className&&aiptag.cmd.display.push(funct
ion(){aipDisplayTag.display("yohoho-io_300x250")})}catch(e)
{console.error(e)}zn(),Je=function(){var
e=!1,t=document.createElement("div");if(t.setAttribute("class","pub_300x250
pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-adlinks"),t.setAttribute("style","width: 1px ! important; height: 1px !important;
position: absolute !important; left: -10000px !important; top: -1000px
!important;"),window.document.body.appendChild(t),null!==window.document.body.getAtt
ribute("abp")||null===t.offsetParent||0==t.offsetHeight||0==t.offsetLeft||0==t.offse
tTop||0==t.offsetWidth||0==t.clientHeight||0==t.clientWidth)e=!0;else if(void
0!==window.getComputedStyle){var
n=window.getComputedStyle(t,null);!n||"none"!=n.getPropertyValue("display")&&"hidden
"!=n.getPropertyValue("visibility")||(e=!0)}return
window.document.body.removeChild(t),e}
();try{(navigator.language.startsWith("ru")||navigator.language.startsWith("uk"))&&
(document.getElementById("portal-button").getElementsByTagName("a")
[0].href="http://vseigru.net",document.getElementById("portalbutton").getElementsByTagName("a")[0].innerHTML="More Games")}catch(e)
{console.error(e)}"undefined"!=typeof
FBInstant&&FBInstant.startGameAsync().then(function()
{FBInstant.context.getID(),FBInstant.context.getType(),FBInstant.player.getName(),FB
Instant.player.getPhoto(),FBInstant.player.getID();game.start(),document.getElementB
yId("username").value=FBInstant.player.getName()});try{var
o=O.view.getContext("webgl"),a=o.getExtension("WEBGL_debug_renderer_info");He=o.getP
arameter(a.UNMASKED_VENDOR_WEBGL)+" |
"+o.getParameter(a.UNMASKED_RENDERER_WEBGL)}catch(e)
{console.error(e)}}"undefined"!=typeof FBInstant?
FBInstant.initializeAsync().then(function(){PIXI.loader.onProgress.add(function(e)
{FBInstant.setLoadingProgress(e.progress)}),Vi()}):"loading"!==document.readyState?
Vi():document.addEventListener("DOMContentLoaded",Vi,!1),window.addEventListener("be
foreunload",function(e){});var Ui={clickPlay:function()
{-1!=document.referrer.indexOf("yohoho-io.com")&&
(window.top.location.href="https://yohoho.io"),nt()},videoEnded:rt,setQuality:je,cho
oseSkin:function(){document.getElementById("skin-popupbooty").innerHTML=li,document.getElementById("skinpopup").style.display="block",Li(0)},closeSkinSelector:function()
{document.getElementById("skinpopup").style.display="none"},switchSkinCategory:Li,upgradePet:function()
{if(ve+1<bi.length){var e=bi[ve+1];if(li<e)return void alert("You don't own enough
coins to upgrade your pet");li-
=e,ve++;try{localStorage.setItem("playerPetLevel",ve),localStorage.setItem("coinsOwn
ed",li)}catch(e){}document.getElementById("skin-popupbooty").innerHTML=li,document.getElementById("homepagebooty").innerHTML=li}Ci()},skinPage:function(e)
{Si+=e,Ci()},backToHomepage:function(){document.getElementById("homepageleague").innerHTML=Tn[Ln(hi)],document.getElementById("homepagebooty").innerHTML=li,document.getElementById("endpopup").style.display="none",document.getElementById("homepage").style.display="bloc
k",document.getElementById("banner-on-endpopup").style.visibility="hidden",Bt(!0),"undefined"!=typeof gtag&&gtag("set",
{page_path:"/"}),"undefined"!=typeof
PokiSDK&&PokiSDK.destroyAd(document.getElementById("banner-on-endpopup"))},onGoogleSignIn:function(e){if(!d){var
t=e.getBasicProfile();a=!0,i=e.getAuthResponse().id_token,n=t.getImageUrl(),Gi()}},g
oogleSignOut:Ni,onFacebookLoginStatus:Wi,logout:Ki,clickGoogleLogin:function()
{document.getElementById("privacy-policy-checkbox").checked?
5/9/20, 12:55 PM
Page 180 of 181
document.getElementsByClassName("g-signin2")[0].children[0].click():alert("You must
accept the privacy policy")},clickFacebookLogin:function()
{document.getElementById("privacy-policy-checkbox").checked?FB.login(Wi,
{scope:"email"}):alert("You must accept the privacy
policy")},showLoginPopup:function(){document.getElementById("loginpopup").style.display="block",void 0!==window.gapi&&void 0!==window.gapi.auth2||
(document.getElementById("google-login-button").innerHTML='<div class="blocked">Your
browser is blocking social media icons. Disable this feature to login in with
Google.</div>')}};return Ui}
();try{-1===window.location.hostname.search(/yohoho\.io$/)&&
(window.location.href="https://yohoho.io")}catch(e){console.error(e)}
//# sourceMappingURL=yohoho.js.map
