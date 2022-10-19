/*!
   JW Player version 8.25.6
   Copyright (c) 2022, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.25.6/notice.txt
*/!function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return v}});var n=function(){function e(e){this.nodeType=e.toUpperCase(),this.childNodes=[],this.style={}}var t=e.prototype;return t.addEventListener=function(e){console.error("[polyfill] addEventListener:",e)},t.removeEventListener=function(e){console.error("[polyfill] removeEventListener:",e)},t.contains=function(){return!1},t.querySelector=function(e){return console.error("[polyfill] querySelector:",e),null},t.appendChild=function(e){return console.error("[polyfill] appendChild:",e),this.childNodes.push(e),!0},t.insertBefore=function(e,t){console.error("[polyfill] insertBefore:",e);var n=this.childNodes.indexOf(t);return t>-1&&this.childNodes.splice(n,0,e),!0},t.load=function(){},t.canPlayType=function(e){return console.error("[polyfill] canPlayType:",e),!0},t.getAttribute=function(e){return console.error("[polyfill] getAttribute:",e),this[e]},t.setAttribute=function(e,t){console.error("[polyfill] setAttribute:",e,t),this[e]=t},t.removeAttribute=function(e){console.error("[polyfill] removeAttribute:",e),delete this[e]},e}();globalThis.APP_HOSTNAME||console.error('"APP_HOSTNAME" global is undefined in JSContext. Set "APP_HOSTNAME" to the current application package name, namespace or website domain. location.host, hostname, origin and href are set based on this and used for analytics.');var o=globalThis.APP_HOSTNAME||"com.jwplayer.js-context",r={ancestorOrigins:void 0,origin:"file://"+o,protocol:"file:",hash:"",host:o,hostname:o,port:"",pathname:"",search:"",href:"file://"+o},i=function(){function e(){this.head=new n("head"),this.body=new n("body"),this.location=r,this.origin="",this.ownerDocument=null,this.referrer="",this.styleSheets=[]}var t=e.prototype;return t.querySelector=function(e){return console.error("[polyfill] querySelector:",e),null},t.querySelectorAll=function(e){return console.error("[polyfill] querySelectorAll:",e),null},t.elementFromPoint=function(e,t){return console.error("[polyfill] elementFromPoint:",e,t),null},t.getElementById=function(e){return console.error("[polyfill] getElementById:",e),null},t.getElementsByTagName=function(e){return console.error("[polyfill] getElementsByTagName:",e),"head"===e?[l.head]:[]},t.getElementsByTagNameNS=function(e,t){},t.createElement=function(e,t){return console.error("[polyfill] createElement:",e),new n(e)},t.createTextNode=function(e){return console.error("[polyfill] createTextNode:",e),new n(e)},t.addEventListener=function(e,t,n){console.error("[polyfill] addEventListener:",e,t)},t.removeEventListener=function(e,t,n){console.error("[polyfill] removeEventListener:",e,t)},e}(),l=new i;globalThis.DEVICE_NAME||console.error('"DEVICE_NAME" global is undefined in JSContext. Set "DEVICE_NAME" to the current device type "iPhone", "iPad", "iPod touch" or "AppleTV" so that the correct useragent can be constructed.'),globalThis.OS_NAME||console.error('"OS_NAME" global is undefined in JSContext. Set "OS_NAME" to the current user agent OS name "iPhone OS" or "OS" so that the correct useragent can be constructed.'),globalThis.OS_VERSION||console.error('"OS_VERSION" global is undefined in JSContext. Set "OS_VERSION" to the current OS version such as "13_3_1" so that the correct useragent can be constructed.'),globalThis.JWP_SDK_VERSION||console.error('"JWP_SDK_VERSION" global is undefined in JSContext. Set "JWP_SDK_VERSION" to the current SDK version such as "4.0.0" so that the correct useragent can be constructed.'),globalThis.LANGUAGE_CODE||console.error('"LANGUAGE_CODE" global is undefined in JSContext. Set "LANGUAGE_CODE" to the current system language, such as "en_US", so that the headless player can set navigator.language.');var s="Mozilla",a="5.0 ("+(globalThis.DEVICE_OS||"iPhone")+"; CPU "+(globalThis.OS_NAME||"iPhone OS")+" "+(globalThis.OS_VERSION||"13_3_1")+" like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13T534YI JWPlayer/"+(globalThis.JWP_SDK_VERSION||"4.0.0-0"),c=globalThis.LANGUAGE_CODE||"en-US",u={appCodeName:s,appName:"Netscape",appVersion:a,cookieEnabled:!1,doNotTrack:null,language:c,languages:[c],onLine:!0,platform:"",userAgent:"Mozilla/"+a,vendor:"JW Player"};function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var f=function(){function e(e,t){this.src_="",this.width=e||0,this.height=t||0,this.complete=!1}return d(e,[{key:"src",get:function(){return this.src_},set:function(e){this.src_=e}}]),e}(),g=new Map,p=function(){function e(){}var t=e.prototype;return t.getItem=function(e){var t=String(e);return g.has(e)?String(g.get(t)):null},t.setItem=function(e,t){g.set(String(e),String(t))},t.removeItem=function(e){g.delete(e)},t.clear=function(){g.clear()},t.key=function(e){if(0===arguments.length)throw new TypeError("Not enough arguments to Storage.key.");return Array.from(g.keys())[e]},d(e,[{key:"length",get:function(){return g.size}}]),e}(),y=new p,m=new Proxy(y,{set:function(e,t,n){return p.prototype.hasOwnProperty(t)?y[t]=n:y.setItem(t,n),!0},get:function(e,t){return p.prototype.hasOwnProperty(t)?y[t]:g.has(t)?y.getItem(t):void 0}});var N=function(){function e(){}return e.prototype.parseFromString=function(e,t){var n=globalThis.XMLParser.parseFromString(e);return n&&n.length?new S(n[0]):null},e}(),S=function(){function e(t,n){var o=this,r=t.nodeName,i=t.nodeAttributeArray,l=void 0===i?[]:i,s=t.nodeChildArray,a=t.nodeContent,c=t.nodeOuterXML;this.ownerDocument=new Document,this.rootNode=n,this.outerHTML=c,r?(this.nodeName=this.tagName=r,this.nodeType=1):(this.nodeName="#cdata-section",this.nodeType=4),this.attr=l.reduce((function(e,t){return e[t.attributeName]=t.nodeContent,e}),{}),s&&(this.childNds=s.map((function(t){return new e(t,n||o)}))),a?this.textContent=a:this.childNds?this.textContent=this.childNds.reduce((function(e,t){return e?t.textContent?e+t.textContent:e:t.textContent}),null):this.textContent=null}var t=e.prototype;return t.getAttribute=function(e){return this.attr[e]||null},t.getElementsByTagName=function(e){var t=[];return this.tagName===e&&t.push(this),this.childNds?[].concat.apply(t,this.childNds.map((function(t){return t.getElementsByTagName(e)}))):t},t.lookupNamespaceURI=function(e){},t.querySelector=function(e){return"Ad"===e?this.getElementsByTagName(e)[0]:("parsererror"!==e&&console.error('XML querySelector("'+e+'") not implemented'),null)},d(e,[{key:"documentElement",get:function(){return this.rootNode||this}},{key:"firstChild",get:function(){return this.childNds&&this.childNds.length?this.childNds[0]:null}},{key:"lastChild",get:function(){return this.childNds&&this.childNds.length?this.childNds[this.childNds.length-1]:null}},{key:"childNodes",get:function(){return this.childNds||[]}}]),e}(),E=globalThis,b=globalThis;b.Document=i,b.document=l,b.location=r,b.navigator=u,b.top=E,b.Image=f,b.localStorage=m,b.addEventListener=l.addEventListener,b.removeEventListener=l.removeEventListener,b.atob=function(e){var t=e.replace(/=+$/,""),n="";if(t.length%4==1)throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,r=0,i=0,l=0;o=t.charAt(l++);~o&&(i=r%4?64*i+o:o,r++%4)?n+=String.fromCharCode(255&i>>(-2*r&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return n},b.setTimeout=function(e,t){return globalThis.NativeTimer.setTimeout(e,t)},b.clearTimeout=function(e){globalThis.NativeTimer.clearTimeout(e)},b.DOMParser=N;var v=b;window["jscontext.polyfill"]=t.default}();
