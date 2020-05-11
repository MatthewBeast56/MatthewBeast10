// ticalccontroller-lib.js 8.14 Tue Oct 15 2019 09:23:07 GMT-0700 (Pacific Daylight Time)

!function(t,e){t.TIControllerAPI=e()}(this,function(){var t,e,o;return function(i){function n(t,e){return v.call(t,e)}function r(t,e){var o,i,n,r,a,s,c,l,p,u,d=e&&e.split("/"),h=_.map,f=h&&h["*"]||{};if(t&&"."===t.charAt(0))if(e){for(d=d.slice(0,d.length-1),t=d.concat(t.split("/")),l=0;l<t.length;l+=1)if(u=t[l],"."===u)t.splice(l,1),l-=1;else if(".."===u){if(1===l&&(".."===t[2]||".."===t[0]))break;l>0&&(t.splice(l-1,2),l-=2)}t=t.join("/")}else 0===t.indexOf("./")&&(t=t.substring(2));if((d||f)&&h){for(o=t.split("/"),l=o.length;l>0;l-=1){if(i=o.slice(0,l).join("/"),d)for(p=d.length;p>0;p-=1)if(n=h[d.slice(0,p).join("/")],n&&(n=n[i])){r=n,a=l;break}if(r)break;!s&&f&&f[i]&&(s=f[i],c=l)}!r&&s&&(r=s,a=c),r&&(o.splice(0,a,r),t=o.join("/"))}return t}function a(t,e){return function(){return h.apply(i,I.call(arguments,0).concat([t,e]))}}function s(t){return function(e){return r(e,t)}}function c(t){return function(e){y[t]=e}}function l(t){if(n(g,t)){var e=g[t];delete g[t],b[t]=!0,d.apply(i,e)}if(!n(y,t)&&!n(b,t))throw new Error("No "+t);return y[t]}function p(t){var e,o=t?t.indexOf("!"):-1;return o>-1&&(e=t.substring(0,o),t=t.substring(o+1,t.length)),[e,t]}function u(t){return function(){return _&&_.config&&_.config[t]||{}}}var d,h,f,m,y={},g={},_={},b={},v=Object.prototype.hasOwnProperty,I=[].slice;f=function(t,e){var o,i=p(t),n=i[0];return t=i[1],n&&(n=r(n,e),o=l(n)),n?t=o&&o.normalize?o.normalize(t,s(e)):r(t,e):(t=r(t,e),i=p(t),n=i[0],t=i[1],n&&(o=l(n))),{f:n?n+"!"+t:t,n:t,pr:n,p:o}},m={require:function(t){return a(t)},exports:function(t){var e=y[t];return"undefined"!=typeof e?e:y[t]={}},module:function(t){return{id:t,uri:"",exports:y[t],config:u(t)}}},d=function(t,e,o,r){var s,p,u,d,h,_,v=[];if(r=r||t,"function"==typeof o){for(e=!e.length&&o.length?["require","exports","module"]:e,h=0;h<e.length;h+=1)if(d=f(e[h],r),p=d.f,"require"===p)v[h]=m.require(t);else if("exports"===p)v[h]=m.exports(t),_=!0;else if("module"===p)s=v[h]=m.module(t);else if(n(y,p)||n(g,p)||n(b,p))v[h]=l(p);else{if(!d.p)throw new Error(t+" missing "+p);d.p.load(d.n,a(r,!0),c(p),{}),v[h]=y[p]}u=o.apply(y[t],v),t&&(s&&s.exports!==i&&s.exports!==y[t]?y[t]=s.exports:u===i&&_||(y[t]=u))}else t&&(y[t]=o)},t=e=h=function(t,e,o,n,r){return"string"==typeof t?m[t]?m[t](e):l(f(t,e).f):(t.splice||(_=t,e.splice?(t=e,e=o,o=null):t=i),e=e||function(){},"function"==typeof o&&(o=n,n=r),n?d(i,t,e,o):setTimeout(function(){d(i,t,e,o)},4),h)},h.config=function(t){return _=t,_.deps&&h(_.deps,_.callback),h},o=function(t,e,o){e.splice||(o=e,e=[]),n(y,t)||n(g,t)||(g[t]=[t,e,o])},o.amd={jQuery:!0}}(),o("almond",function(){}),o("texasinstruments/TICalc",[],function(){var t=function(){this._template="<div id='calculatorDiv' class='calculatorDiv' style='position:fixed; top:120px; left:50%; z-index:1040;' tabIndex=0></div>",this._calc={},this._render()};t.prototype.monitorDeepZoom=function(){$(document).on("deepZoomLevel.enter deepZoomLevel.exit",$.proxy(this._handleDeepZoomStatusChange,this)),$(document).trigger("deepZoomLayer.getStatus",$.proxy(this._handleDeepZoomStatus,this))},t.prototype._handleDeepZoomStatusChange=function(t){"enter"===t.namespace?this._deepZoomHide():"exit"===t.namespace&&this._enableDraggable()},t.prototype._handleDeepZoomStatus=function(t){t&&this._doDeepZoomCoupling()},t.prototype._doDeepZoomCoupling=function(){var t=$("[toolId="+this._toolId+"]").attr("data-original-title");$(document).trigger("deepZoomLayer.setCoupling",{title:t,html:"#calculatorDiv",hideCallback:$.proxy(this._deepZoomHide,this),specialCare:$.proxy(this.onRenderDeepZoom,this)})},t.prototype.onRenderDeepZoom=function(){this.focus(),this._disableDraggable()},t.prototype._deepZoomHide=function(){$(document).trigger("toolClosed",this._toolId)},t.prototype.focus=function(){$("#calculatorDiv").focus()},t.prototype._render=function(){"undefined"!=typeof $("#calculatorDiv").data("ui-draggable")&&this._disableInteraction(),0===$("head + body > #calculatorDiv").length&&(window.app&&TN8.usecalcs?$("body").append(this._template):0===$("#tn8-aslvideo").length?$("#lastTabbable").before(this._template):$("#tn8-aslvideo").before(this._template)),$("#calculatorDiv").draggable({drag:t.prototype._contain,stop:t.prototype._contain}),t.prototype._startListening(),$(document).trigger("tn.TICalculatorOpened",[this.name])},t.prototype._startListening=function(){$(document).off("do.disableInteraction",$.proxy(t.prototype._disableInteraction,this)).on("do.disableInteraction",$.proxy(t.prototype._disableInteraction,this)),$(document).off("do.enableInteraction",$.proxy(t.prototype._enableInteraction,this)).on("do.enableInteraction",$.proxy(t.prototype._enableInteraction,this))},t.prototype._disableInteraction=function(){this._disableDraggable()},t.prototype._enableInteraction=function(){this._enableDraggable()},t.prototype._enableDraggable=function(){$("#calculatorDiv").draggable()&&$("#calculatorDiv").draggable("enable")},t.prototype._disableDraggable=function(){$("#calculatorDiv").draggable()&&$("#calculatorDiv").draggable("disable")},t.prototype._resetDisplay=function(t,e){$("#calculatorDiv").html("<div class='displayDiv' id='displayDiv'><canvas id='display' class='display' width='"+t+"' height='"+e+"'></canvas></div></div>")},t.prototype.remove=function(){$(document).off("deepZoomLevel.enter deepZoomLevel.exit",$.proxy(this._handleDeepZoomStatusChange,this)),$(document).off("do.disableInteraction",t.prototype._disableInteraction),$(document).off("do.enableInteraction",t.prototype._enableInteraction),$("#calculatorDiv").draggable("destroy"),this._calc.killInstance&&this._calc.killInstance(),t.prototype._removeDragUtilHandlers()},t.prototype.show=function(){this._calc.showCalculator(),t.prototype._addDragUtilHandlers(),t.prototype._center(),this._enableDraggable(),$("#calculatorDiv").focus().trigger("mouseup"),$(document).trigger("tn.TICalculatorOpened",[this.name])},t.prototype.hide=function(){t.prototype._removeDragUtilHandlers(),this._calc.hideCalculator&&this._calc.hideCalculator(),$(document).trigger("tn.TICalculatorClosed",[this.name])},t.prototype.reset=function(){this._calc.resetEmulator()},t.prototype._getViewportSize=function(){return{width:Math.round(Math.max(document.documentElement.clientWidth,window.innerWidth||0)),height:Math.round(Math.max(document.documentElement.clientHeight,window.innerHeight||0))}},t.prototype._normalize=function(t,e,o){return t<e?t=e:t>o&&(t=o),t},t.prototype._center=function(){var e=$("#calculatorDiv"),o=t.prototype._getViewportSize();e.css({"z-index":1040,left:Math.max(o.width/2-e.outerWidth()/2,0),top:Math.max(o.height/2-e.outerHeight()/2,0)})},t.prototype._contain=function(e,o){var i=t.prototype._getContainmentDetails();o?(o.position.left=t.prototype._normalize(o.position.left,i.left,i.right),o.position.top=t.prototype._normalize(o.position.top,i.top,i.bottom)):(i.calc.css("left",t.prototype._normalize(parseInt(i.calc.css("left"),0),i.left,i.right)),i.calc.css("top",t.prototype._normalize(parseInt(i.calc.css("top"),0),i.top,i.bottom)))},t.prototype._getContainmentDetails=function(){var e=$("#calculatorDiv"),o=e.outerWidth(),i=(e.outerHeight(),t.prototype._getViewportSize()),n=100;return{calc:e,viewport:i,remaining:n,left:Math.round(n-o),top:0,right:Math.round(i.width-n),bottom:Math.round(i.height-n)}},t.prototype._debounce=function(t,e,o){var i;return function(){var n=this,r=arguments,a=function(){i=null,o||t.apply(n,r)},s=o&&!i;clearTimeout(i),i=setTimeout(a,e),s&&t.apply(n,r)}};var e=100;return t.prototype._onResize=t.prototype._debounce(function(){t.prototype._contain()},e),t.prototype._addDragUtilHandlers=function(){$(window).off("resize",t.prototype._onResize).on("resize",t.prototype._onResize)},t.prototype._removeDragUtilHandlers=function(){$(window).off("resize",t.prototype._onResize)},t.prototype._addId=function(t){$("#calculatorDiv").addClass(t)},t.prototype._onDetectLoadComplete=function(e){t.prototype._addId(e),t.prototype._addDragUtilHandlers(),t.prototype._center(),t.prototype._accessibilitySetup()},t.prototype._accessibilitySetup=function(t){$("#calculatorDiv").attr("aria-label",$("#"+$("#calculatorDiv").attr("aria-describedby")).html()),$("#calculatorDiv").removeAttr("aria-describedby")},t}),o("texasinstruments/TI30",["texasinstruments/TICalc"],function(t){var e=function(){return this.readyEvent="ti30calc.ready",this.name="TI30",this._toolId=16,t.call(this),this};return e.prototype=$.extend(!0,{},t.prototype),e.prototype.onInitialized=function(){this.resize(),this._onDetectLoadComplete(this.name),$(document).trigger(this.readyEvent)},e.prototype.resize=function(){this._calc.resize("width: 308px"),this._calc.resize("height: 595px")},e.prototype.initialize=function(t){var e="";window.app&&(e=document.location.origin+"/public/javascripts/"),$.ajax({url:TN8.baseUrl+e+"texasinstruments/js/ti30mv-min.js",dataType:"script",timeout:15e3,cache:t}).done(function(){this._resetDisplay(192,75);var t={elementId:"calculatorDiv",ROMLocation:TN8.baseUrl+e+"texasinstruments/bin/ti30mv.h84state",FaceplateLocation:TN8.baseUrl+e+"texasinstruments/images/TI30XS_touch.svg",KeyMappingFile:"",KeyHistBufferLength:"10",AngleMode:"RAD",DisplayMode:"MATHPRINT",accessibility:{tabOrder:0,screenReaderAria:!0},onInitialized:$.proxy(this.onInitialized,this)};this._calc=new TI30(t),this._calc.errorHandler=$.proxy(this.errorHandlerTI30,this)}.bind(this)).fail(function(t,e,o){$(document).trigger("ti.calc.destroy"),$(document).trigger("ti.calc.resetBtn"),window.TN8&&window.TN8.throw("Failure to load ti30mv-min.js: "+o,3004)})},e.prototype.errorHandlerTI30=function(){$(document).trigger("ti.calc.resetBtn"),this._calc={},TN8.throw("Failed to load TI-30 Calculator",TN8.errorType.TI30_LOAD_ERROR)},e}),o("texasinstruments/TI84",["texasinstruments/TICalc"],function(t){var e=function(){return this.readyEvent="ti84calc.ready",this.name="TI84",this._toolId=13,t.call(this),this};return e.prototype=$.extend(!0,{},t.prototype),e.prototype.onInitialized=function(){this.checkScreenSize(),this._onDetectLoadComplete(this.name),$(document).trigger(this.readyEvent)},e.prototype.checkScreenSize=function(){(window.app||!TestEngine._isAppMode())&&$(window).height()<690?this.resizeSmall():this.resizeNormal()},e.prototype.resizeNormal=function(){this._calc.resize("width: 303px"),this._calc.resize("height: 690px")},e.prototype.resizeSmall=function(){this._calc.resize("width: 227px"),this._calc.resize("height: 518px")},e.prototype.initialize=function(t){var e="";window.app&&(e=document.location.origin+"/public/javascripts/"),$.ajax({url:TN8.baseUrl+e+"texasinstruments/js/ti84p-min.js",dataType:"script",timeout:15e3,cache:t}).done(function(){this._resetDisplay(288,192);var t={elementId:"calculatorDiv",ROMLocation:TN8.baseUrl+e+"texasinstruments/bin/No_Apps.h84statej",FaceplateLocation:TN8.baseUrl+e+"texasinstruments/images/TI84SE_touch.svg",KeyMappingFile:"",KeyHistBufferLength:"10",AngleMode:"RAD",DisplayMode:"MATHPRINT",accessibility:{tabOrder:0,screenReaderAria:!0},onInitialized:$.proxy(this.onInitialized,this)};this._calc=new TI84PCE(t),this._calc.errorHandler=$.proxy(this.errorHandlerTI84CE,this)}.bind(this)).fail(function(t,e,o){$(document).trigger("ti.calc.destroy"),$(document).trigger("ti.calc.resetBtn"),window.TN8&&window.TN8.throw("Failure to load ti84p-min.js: "+o,3004)})},e.prototype.errorHandlerTI84CE=function(){$(document).trigger("ti.calc.resetBtn"),this._calc={},TN8.throw("Failed to load TI-84CE Calculator",TN8.errorType.TI84_LOAD_ERROR)},e}),o("texasinstruments/TI108",["texasinstruments/TICalc"],function(t){var e=function(){return this.readyEvent="ti108calc.ready",this.name="TI108",this._toolId=17,t.call(this),this};return e.prototype=$.extend(!0,{},t.prototype),e.prototype.onInitialized=function(){this.resize(),this._onDetectLoadComplete(this.name),$(document).trigger(this.readyEvent)},e.prototype.resize=function(){this._calc.resize("width: 245px"),this._calc.resize("height: 369px")},e.prototype.initialize=function(t){var e="";window.app&&(e=document.location.origin+"/public/javascripts/"),$.ajax({url:TN8.baseUrl+e+"texasinstruments/js/ti108-min.js",dataType:"script",timeout:15e3,cache:t}).done(function(){this._resetDisplay(128,20);var t={elementId:"calculatorDiv",ROMLocation:TN8.baseUrl+e+"texasinstruments/bin/ti108.h84state",FaceplateLocation:TN8.baseUrl+e+"texasinstruments/images/TI108_touch.svg",KeyMappingFile:"",KeyHistBufferLength:"10",accessibility:{tabOrder:0,screenReaderAria:!0},onInitialized:$.proxy(this.onInitialized,this)};this._calc=new TI108(t),this._calc.errorHandler=$.proxy(this.errorHandlerTI108,this)}.bind(this)).fail(function(t,e,o){$(document).trigger("ti.calc.destroy"),$(document).trigger("ti.calc.resetBtn"),window.TN8&&window.TN8.throw("Failure to load ti108-min.js: "+o,3004)})},e.prototype.errorHandlerTI108=function(){$(document).trigger("ti.calc.resetBtn"),this._calc={},TN8.throw("Failed to load TI-108 Calculator",TN8.errorType.TI108_LOAD_ERROR)},e}),o("texasinstruments/main",["texasinstruments/TI30","texasinstruments/TI84","texasinstruments/TI108"],function(t,e,o){"use strict";return{createToolController:function(){return{TI30:t,TI84:e,TI108:o}}}}),e("texasinstruments/main")});
