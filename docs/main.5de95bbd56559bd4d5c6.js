!function(e){function t(t){for(var i,s,a=t[0],l=t[1],c=t[2],h=0,f=[];h<a.length;h++)s=a[h],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(u&&u(t);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={0:0},r=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=i);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+""+({1:"modal"}[e]||e)+"."+{1:"19a83a174cc2bbade167"}[e]+".js"}(e);var l=new Error;r=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,n[1](l)}o[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;r.push([17,2]),n()}({16:function(e,t){var n=0;!function e(){var t,i=document.getElementsByClassName("testimonial-slider");for(t=0;t<i.length;t++)i[t].style.opacity="0";++n>i.length&&(n=1);i[n-1].style.opacity="1",setTimeout(e,2500)}()},17:function(e,t,n){"use strict";n.r(t);n(5),n(6);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu--is-visible"),this.menuIcon.classList.toggle("site-header__menu-icon__close-x")}}])&&i(t.prototype,n),o&&i(t,o),e}(),r=n(1),s=n.n(r),a=n(0),l=n.n(a);function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tresholdPercent=n,this.itemsToReveal=t,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=s()(this.calcCaller,200).bind(this),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",l()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(t){0==t.isReveald&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().top/this.browserHeight*100<this.tresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isReveald=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isReveald=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&c(t.prototype,n),i&&c(t,i),e}();function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.headlineAbout=document.querySelector(".headline--about"),this.headlineVision=document.querySelector(".headline--vision"),this.contentAbout=document.querySelector("#content-box--about"),this.contentVision=document.querySelector("#content-box--vision"),this.events(),this.activeAbout()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.headlineAbout.addEventListener("click",(function(){return e.activeAbout()})),this.headlineVision.addEventListener("click",(function(){return e.activeVision()}))}},{key:"activeAbout",value:function(){this.headlineAbout.classList.add("headline--active"),this.headlineVision.classList.remove("headline--active"),this.contentAbout.classList.add("active"),this.contentVision.classList.remove("active")}},{key:"activeVision",value:function(){this.headlineAbout.classList.remove("headline--active"),this.headlineVision.classList.add("headline--active"),this.contentVision.classList.add("active"),this.contentAbout.classList.remove("active")}}])&&h(t.prototype,n),i&&h(t,i),e}();n(16);function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.counters=document.querySelectorAll(".counter"),this.speed=800,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=s()(this.calcCaller,200).bind(this),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",l()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.counters.forEach((function(t){0==t.isReveald&&e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().top/this.browserHeight*100<95&&(this.counter(),e.isReveald=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.counters.forEach((function(e){e.isReveald=!1})),this.counters[this.counters.length-1].isLastItem=!0}},{key:"counter",value:function(){var e=this;this.counters.forEach((function(t){!function n(){var i=+t.getAttribute("data-target"),o=+t.innerText,r=i/e.speed;o<i&&(t.innerText=Math.ceil(o+r),setTimeout(n,1))}()}))}}])&&d(t.prototype,n),i&&d(t,i),e}();function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p,b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.servicesItem=document.querySelectorAll(".services__item"),this.events()}var t,n,i;return t=e,(n=[{key:"events",value:function(){var e=this;this.servicesItem.forEach((function(t){t.addEventListener("click",(function(){t.classList.toggle("active-item"),e.siblings=e.getSiblings(t),e.siblings.forEach((function(e){e.classList.remove("active-item")}))}))}))}},{key:"getSiblings",value:function(e){var t=[];if(!e.parentNode)return t;for(var n=e.parentNode.firstChild;n;)1===n.nodeType&&n!==e&&t.push(n),n=n.nextSibling;return t}}])&&m(t.prototype,n),i&&m(t,i),e}();new o,new f,new b,new v;new u(document.querySelectorAll(".services__item"),90),document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===p?n.e(1).then(n.bind(null,18)).then((function(e){p=new e.default,setTimeout((function(){return p.openTheModal()}),20)})).catch((function(){return console.log("There was a problem.")})):p.openTheModal()}))}))},5:function(e,t,n){}});