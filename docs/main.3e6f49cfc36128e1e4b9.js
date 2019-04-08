!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";e.__esModule=!0;var i=function(){function t(t,e,n){this.r=t,this.g=e,this.b=n}return t.prototype.dim=function(t){return this.each(function(e){return Math.floor(e*(t/100))}),this},t.prototype.fadeTo=function(t,e){this.to=t,this.from=this.copy(),this.steps=e,this.stepIndex=0},t.prototype.stepFade=function(){for(var t=["r","g","b"],e=0,n=t.length;e<n;e++){var i=t[e],o=this.from[i],r=this.to[i],s=Math.abs(o-r)/this.steps*this.stepIndex;this[i]=o>r?Math.round(o-s):Math.round(o+s)}this.stepIndex++,this.stepIndex>=this.steps&&(this.to=this.from=void 0)},t.prototype.fading=function(){return this.to instanceof t},t.prototype.copy=function(){return new t(this.r,this.g,this.b)},t.prototype.each=function(t){for(var e=["r","g","b"],n=0,i=e.length;n<i;n++)this[e[n]]=t(this[e[n]])},t.wheel=function(e){return(e=255-e)<85?new t(255-3*e,0,3*e):e<170?new t(0,3*(e-=85),255-3*e):new t(3*(e-=170),255-3*e,0)},t.sineTable=[128,131,134,137,140,143,146,149,152,155,158,162,165,167,170,173,176,179,182,185,188,190,193,196,198,201,203,206,208,211,213,215,218,220,222,224,226,228,230,232,234,235,237,238,240,241,243,244,245,246,248,249,250,250,251,252,253,253,254,254,254,255,255,255,255,255,255,255,254,254,254,253,253,252,251,250,250,249,248,246,245,244,243,241,240,238,237,235,234,232,230,228,226,224,222,220,218,215,213,211,208,206,203,201,198,196,193,190,188,185,182,179,176,173,170,167,165,162,158,155,152,149,146,143,140,137,134,131,128,124,121,118,115,112,109,106,103,100,97,93,90,88,85,82,79,76,73,70,67,65,62,59,57,54,52,49,47,44,42,40,37,35,33,31,29,27,25,23,21,20,18,17,15,14,12,11,10,9,7,6,5,5,4,3,2,2,1,1,1,0,0,0,0,0,0,0,1,1,1,2,2,3,4,5,5,6,7,9,10,11,12,14,15,17,18,20,21,23,25,27,29,31,33,35,37,40,42,44,47,49,52,54,57,59,62,65,67,70,73,76,79,82,85,88,90,93,97,100,103,106,109,112,115,118,121,124],t.gammaTable=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,13,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,24,24,25,25,26,27,27,28,29,29,30,31,31,32,33,34,34,35,36,37,38,38,39,40,41,42,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,68,69,70,71,72,73,75,76,77,78,80,81,82,84,85,86,88,89,90,92,93,94,96,97,99,100,102,103,105,106,108,109,111,112,114,115,117,119,120,122,124,125,127,129,130,132,134,136,137,139,141,143,145,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,191,193,195,197,199,202,204,206,209,211,213,215,218,220,223,225,227,230,232,235,237,240,242,245,247,250,252,255],t}();e.default=i},function(t,e,n){"use strict";e.__esModule=!0;var i=n(2),o=n(4);n(5);var r=new i.default(15,3);document.body.appendChild(r.el);var s=new o.default(15,3);window.requestAnimationFrame(function t(e){window.requestAnimationFrame(t),r.update(s),r.render()})},function(t,e,n){"use strict";e.__esModule=!0;var i=n(3),o=n(0),r=(function(){}(),function(){function t(t,e,n,r){void 0===t&&(t=15),void 0===e&&(e=3),void 0===n&&(n=30),void 0===r&&(r=28),this.rowCount=t,this.colCount=e,this.fps=n,this.size=r,this.el=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.el.id="main",this.el.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),this.el.setAttribute("height",t*r+"px"),this.el.setAttribute("width",e*r+"px"),this.pixels=[];for(var s=0;s<t;s++){for(var u=[],l=0;l<e;l++){var a=l*r,h=s*r,f=new i.default(a,h,r);this.el.appendChild(f.el),u.push({rect:f,color:new o.default(34,34,34)})}this.pixels.push(u)}this.duration=Math.floor(1e3/n)}return t.prototype.update=function(t){t.update(),this.loop(function(e,n,i){i.color=t.draw(e,n,i.color)})},t.prototype.render=function(){this.loop(function(t,e,n){n.rect.fill(n.color)})},t.prototype.ready=function(t){var e=t-this.lastTime+this.delta;return e>this.duration&&(this.delta=e%Math.floor(this.duration),this.lastTime=t,!0)},t.prototype.loop=function(t){for(var e=this.rowCount,n=this.colCount,i=this.pixels,o=0;o<e;o++)for(var r=0;r<n;r++){t(o,r,i[o][r])}},t}());e.default=r},function(t,e,n){"use strict";e.__esModule=!0;var i=function(){function t(t,e,n){this.x=t,this.y=e,this.size=n,this.el=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.el.setAttributeNS(null,"x",t.toString()),this.el.setAttributeNS(null,"y",e.toString()),this.el.setAttributeNS(null,"height",n.toString()),this.el.setAttributeNS(null,"width",n.toString())}return t.prototype.fill=function(t){this.el.setAttributeNS(null,"style","fill: rgb("+t.r+","+t.g+","+t.b+");")},t}();e.default=i},function(t,e,n){"use strict";e.__esModule=!0;var i=n(0),o=function(){return function(t){void 0===t&&(t=!1),this.active=t}}(),r=function(){function t(t,e){this.rowCount=t,this.colCount=e,this.frameIndex=0,this.frames=7,this.speed=10,this.speedIndex=0,this.state=[];for(var n=0;n<t;n++){for(var r=[],s=0;s<e;s++){var u=new o;u.color=new i.default(34,34,34),r.push(u)}this.state.push(r)}}return t.prototype.update=function(){this.speedIndex++,this.speedIndex>this.speed&&(this.speedIndex=0,this.frameIndex++,this.frameIndex>9&&(this.frameIndex=0))},t.prototype.draw=function(t,e,n){var o=this.state[t][e];if(0===this.speedIndex){if(o.active)return o.active=!1,o.color.fadeTo(new i.default(34,34,34),72),o.color;if(e===this.frameIndex)return o.active=!0,o.color=new i.default(255,0,144)}return o.color instanceof i.default&&o.color.fading()?(o.color.stepFade(),o.color):n},t}();e.default=r},function(t,e,n){}]);