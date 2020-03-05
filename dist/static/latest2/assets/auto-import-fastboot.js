(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[0],{1280:function(t,e,n){n(1290).__DEV__
var i=n(1332),r=n(1288),a=n(1308),o=n(1294),s=n(1321),l=n(1307),u=n(1346),h=n(1354),c=n(1325),f=n(1416),d=n(1417),p=n(1419),g=n(1300),m=n(1355),v=n(1356),y=n(1357),x=n(1292),_=n(1289),b=n(1328).throttle,w=n(1421),S=n(1422),M=n(1424),T=n(1425),k=n(1426),D=n(1427)
n(1428)
var C=r.assert,A=r.each,I=r.isFunction,O=r.isObject,P=g.parseClassType,L=1e3,E=3e3,R={PROCESSOR:{FILTER:L,STATISTIC:5e3},VISUAL:{LAYOUT:1e3,GLOBAL:2e3,CHART:E,COMPONENT:4e3,BRUSH:5e3}},N="__flagInMainProcess",z="__optionUpdated",B=/^[a-zA-Z0-9_]+$/
function F(t){return function(e,n,i){e=e&&e.toLowerCase(),l.prototype[t].call(this,e,n,i)}}function H(){l.call(this)}function V(t,e,n){n=n||{},"string"==typeof e&&(e=ht[e]),this.id,this.group,this._dom=t
var a=this._zr=i.init(t,{renderer:n.renderer||"canvas",devicePixelRatio:n.devicePixelRatio,width:n.width,height:n.height})
this._throttledZrFlush=b(r.bind(a.flush,a),17),(e=r.clone(e))&&d(e,!0),this._theme=e,this._chartsViews=[],this._chartsMap={},this._componentsViews=[],this._componentsMap={},this._coordSysMgr=new c
var o=this._api=function(t){var e=t._coordSysMgr
return r.extend(new h(t),{getCoordinateSystems:r.bind(e.getCoordinateSystems,e),getComponentByElement:function(e){for(;e;){var n=e.__ecComponentInfo
if(null!=n)return t._model.getComponent(n.mainType,n.index)
e=e.parent}}})}(this)
function u(t,e){return t.__prio-e.__prio}s(ut,u),s(ot,u),this._scheduler=new T(this,o,ot,ut),l.call(this),this._messageCenter=new H,this._initEvents(),this.resize=r.bind(this.resize,this),this._pendingActions=[],a.animation.on("frame",this._onframe,this),function(t,e){t.on("rendered",function(){e.trigger("rendered"),!t.animation.isFinished()||e[z]||e._scheduler.unfinished||e._pendingActions.length||e.trigger("finished")})}(a,this),r.setAsPrimitive(this)}H.prototype.on=F("on"),H.prototype.off=F("off"),H.prototype.one=F("one"),r.mixin(H,l)
var W=V.prototype
function Y(t,e,n){var i,r=this._model,a=this._coordSysMgr.getCoordinateSystems()
e=_.parseFinder(r,e)
for(var o=0;o<a.length;o++){var s=a[o]
if(s[t]&&null!=(i=s[t](r,e,n)))return i}}W._onframe=function(){if(!this._disposed){var t=this._scheduler
if(this[z]){var e=this[z].silent
this[N]=!0,G(this),U.update.call(this),this[N]=!1,this[z]=!1,$.call(this,e),Z.call(this,e)}else if(t.unfinished){var n=1,i=this._model,r=this._api
t.unfinished=!1
do{var a=+new Date
t.performSeriesTasks(i),t.performDataProcessorTasks(i),q(this,i),t.performVisualTasks(i),tt(this,this._model,r,"remain"),n-=+new Date-a}while(n>0&&t.unfinished)
t.unfinished||this._zr.flush()}}},W.getDom=function(){return this._dom},W.getZr=function(){return this._zr},W.setOption=function(t,e,n){var i
if(O(e)&&(n=e.lazyUpdate,i=e.silent,e=e.notMerge),this[N]=!0,!this._model||e){var r=new f(this._api),a=this._theme,o=this._model=new u(null,null,a,r)
o.scheduler=this._scheduler,o.init(null,null,a,r)}this._model.setOption(t,st),n?(this[z]={silent:i},this[N]=!1):(G(this),U.update.call(this),this._zr.flush(),this[z]=!1,this[N]=!1,$.call(this,i),Z.call(this,i))},W.setTheme=function(){console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")},W.getModel=function(){return this._model},W.getOption=function(){return this._model&&this._model.getOption()},W.getWidth=function(){return this._zr.getWidth()},W.getHeight=function(){return this._zr.getHeight()},W.getDevicePixelRatio=function(){return this._zr.painter.dpr||window.devicePixelRatio||1},W.getRenderedCanvas=function(t){if(o.canvasSupported)return(t=t||{}).pixelRatio=t.pixelRatio||1,t.backgroundColor=t.backgroundColor||this._model.get("backgroundColor"),this._zr.painter.getRenderedCanvas(t)},W.getSvgDataUrl=function(){if(o.svgSupported){var t=this._zr,e=t.storage.getDisplayList()
return r.each(e,function(t){t.stopAnimation(!0)}),t.painter.pathToDataUrl()}},W.getDataURL=function(t){var e=(t=t||{}).excludeComponents,n=this._model,i=[],r=this
A(e,function(t){n.eachComponent({mainType:t},function(t){var e=r._componentsMap[t.__viewId]
e.group.ignore||(i.push(e),e.group.ignore=!0)})})
var a="svg"===this._zr.painter.getType()?this.getSvgDataUrl():this.getRenderedCanvas(t).toDataURL("image/"+(t&&t.type||"png"))
return A(i,function(t){t.group.ignore=!1}),a},W.getConnectedDataURL=function(t){if(o.canvasSupported){var e=this.group,n=Math.min,a=Math.max
if(dt[e]){var s=1/0,l=1/0,u=-1/0,h=-1/0,c=[],f=t&&t.pixelRatio||1
r.each(ft,function(i,o){if(i.group===e){var f=i.getRenderedCanvas(r.clone(t)),d=i.getDom().getBoundingClientRect()
s=n(d.left,s),l=n(d.top,l),u=a(d.right,u),h=a(d.bottom,h),c.push({dom:f,left:d.left,top:d.top})}})
var d=(u*=f)-(s*=f),p=(h*=f)-(l*=f),g=r.createCanvas()
g.width=d,g.height=p
var m=i.init(g)
return A(c,function(t){var e=new x.Image({style:{x:t.left*f-s,y:t.top*f-l,image:t.dom}})
m.add(e)}),m.refreshImmediately(),g.toDataURL("image/"+(t&&t.type||"png"))}return this.getDataURL(t)}},W.convertToPixel=r.curry(Y,"convertToPixel"),W.convertFromPixel=r.curry(Y,"convertFromPixel"),W.containPixel=function(t,e){var n,i=this._model
return t=_.parseFinder(i,t),r.each(t,function(t,i){i.indexOf("Models")>=0&&r.each(t,function(t){var r=t.coordinateSystem
if(r&&r.containPoint)n|=!!r.containPoint(e)
else if("seriesModels"===i){var a=this._chartsMap[t.__viewId]
a&&a.containPoint&&(n|=a.containPoint(e,t))}},this)},this),!!n},W.getVisual=function(t,e){var n=this._model,i=(t=_.parseFinder(n,t,{defaultMainType:"series"})).seriesModel.getData(),r=t.hasOwnProperty("dataIndexInside")?t.dataIndexInside:t.hasOwnProperty("dataIndex")?i.indexOfRawIndex(t.dataIndex):null
return null!=r?i.getItemVisual(r,e):i.getVisual(e)},W.getViewOfComponentModel=function(t){return this._componentsMap[t.__viewId]},W.getViewOfSeriesModel=function(t){return this._chartsMap[t.__viewId]}
var U={prepareAndUpdate:function(t){G(this),U.update.call(this,t)},update:function(t){var e=this._model,n=this._api,i=this._zr,r=this._coordSysMgr,s=this._scheduler
if(e){s.restoreData(e,t),s.performSeriesTasks(e),r.create(e,n),s.performDataProcessorTasks(e,t),q(this,e),r.update(e,n),J(e),s.performVisualTasks(e,t),Q(this,e,n,t)
var l=e.get("backgroundColor")||"transparent"
if(o.canvasSupported)i.setBackgroundColor(l)
else{var u=a.parse(l)
l=a.stringify(u,"rgb"),0===u[3]&&(l="transparent")}et(e,n)}},updateTransform:function(t){var e=this._model,n=this,i=this._api
if(e){var a=[]
e.eachComponent(function(r,o){var s=n.getViewOfComponentModel(o)
if(s&&s.__alive)if(s.updateTransform){var l=s.updateTransform(o,e,i,t)
l&&l.update&&a.push(s)}else a.push(s)})
var o=r.createHashMap()
e.eachSeries(function(r){var a=n._chartsMap[r.__viewId]
if(a.updateTransform){var s=a.updateTransform(r,e,i,t)
s&&s.update&&o.set(r.uid,1)}else o.set(r.uid,1)}),J(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0,dirtyMap:o}),tt(n,e,i,t,o),et(e,this._api)}},updateView:function(t){var e=this._model
e&&(y.markUpdateMethod(t,"updateView"),J(e),this._scheduler.performVisualTasks(e,t,{setDirty:!0}),Q(this,this._model,this._api,t),et(e,this._api))},updateVisual:function(t){U.update.call(this,t)},updateLayout:function(t){U.update.call(this,t)}}
function G(t){var e=t._model,n=t._scheduler
n.restorePipelines(e),n.prepareStageTasks(),K(t,"component",e,n),K(t,"chart",e,n),n.plan()}function j(t,e,n,i,a){var o=t._model
if(i){var s={}
s[i+"Id"]=n[i+"Id"],s[i+"Index"]=n[i+"Index"],s[i+"Name"]=n[i+"Name"]
var l={mainType:i,query:s}
a&&(l.subType=a)
var u=n.excludeSeriesId
null!=u&&(u=r.createHashMap(_.normalizeToArray(u))),o&&o.eachComponent(l,function(e){u&&null!=u.get(e.id)||h(t["series"===i?"_chartsMap":"_componentsMap"][e.__viewId])},t)}else A(t._componentsViews.concat(t._chartsViews),h)
function h(i){i&&i.__alive&&i[e]&&i[e](i.__model,o,t._api,n)}}function q(t,e){var n=t._chartsMap,i=t._scheduler
e.eachSeries(function(t){i.updateStreamModes(t,n[t.__viewId])})}function X(t,e){var n=t.type,i=t.escapeConnect,a=rt[n],o=a.actionInfo,s=(o.update||"update").split(":"),l=s.pop()
s=null!=s[0]&&P(s[0]),this[N]=!0
var u=[t],h=!1
t.batch&&(h=!0,u=r.map(t.batch,function(e){return(e=r.defaults(r.extend({},e),t)).batch=null,e}))
var c,f=[],d="highlight"===n||"downplay"===n
A(u,function(t){(c=(c=a.action(t,this._model,this._api))||r.extend({},t)).type=o.event||c.type,f.push(c),d?j(this,l,t,"series"):s&&j(this,l,t,s.main,s.sub)},this),"none"===l||d||s||(this[z]?(G(this),U.update.call(this,t),this[z]=!1):U[l].call(this,t)),c=h?{type:o.event||n,escapeConnect:i,batch:f}:f[0],this[N]=!1,!e&&this._messageCenter.trigger(c.type,c)}function $(t){for(var e=this._pendingActions;e.length;){var n=e.shift()
X.call(this,n,t)}}function Z(t){!t&&this.trigger("updated")}function K(t,e,n,i){for(var r="component"===e,a=r?t._componentsViews:t._chartsViews,o=r?t._componentsMap:t._chartsMap,s=t._zr,l=t._api,u=0;u<a.length;u++)a[u].__alive=!1
function h(t){var e="_ec_"+t.id+"_"+t.type,u=o[e]
if(!u){var h=P(t.type);(u=new(r?v.getClass(h.main,h.sub):y.getClass(h.sub))).init(n,l),o[e]=u,a.push(u),s.add(u.group)}t.__viewId=u.__id=e,u.__alive=!0,u.__model=t,u.group.__ecComponentInfo={mainType:t.mainType,index:t.componentIndex},!r&&i.prepareView(u,t,n,l)}for(r?n.eachComponent(function(t,e){"series"!==t&&h(e)}):n.eachSeries(h),u=0;u<a.length;){var c=a[u]
c.__alive?u++:(!r&&c.renderTask.dispose(),s.remove(c.group),c.dispose(n,l),a.splice(u,1),delete o[c.__id],c.__id=c.group.__ecComponentInfo=null)}}function J(t){t.clearColorPalette(),t.eachSeries(function(t){t.clearColorPalette()})}function Q(t,e,n,i){!function(t,e,n,i,r){A(t._componentsViews,function(t){var r=t.__model
t.render(r,e,n,i),it(r,t)})}(t,e,n,i),A(t._chartsViews,function(t){t.__alive=!1}),tt(t,e,n,i),A(t._chartsViews,function(t){t.__alive||t.remove(e,n)})}function tt(t,e,n,i,r){var a,s=t._scheduler
e.eachSeries(function(e){var n=t._chartsMap[e.__viewId]
n.__alive=!0
var o=n.renderTask
s.updatePayload(o,i),r&&r.get(e.uid)&&o.dirty(),a|=o.perform(s.getPerformArgs(o)),n.group.silent=!!e.get("silent"),it(e,n),function(t,e){var n=t.get("blendMode")||null
e.group.traverse(function(t){t.isGroup||t.style.blend!==n&&t.setStyle("blend",n),t.eachPendingDisplayable&&t.eachPendingDisplayable(function(t){t.setStyle("blend",n)})})}(e,n)}),s.unfinished|=a,function(t,e){var n=t.storage,i=0
n.traverse(function(t){t.isGroup||i++}),i>e.get("hoverLayerThreshold")&&!o.node&&n.traverse(function(t){t.isGroup||(t.useHoverLayer=!0)})}(t._zr,e),S(t._zr.dom,e)}function et(t,e){A(lt,function(n){n(t,e)})}W.resize=function(t){this._zr.resize(t)
var e=this._model
if(this._loadingFX&&this._loadingFX.resize(),e){var n=e.resetOption("media"),i=t&&t.silent
this[N]=!0,n&&G(this),U.update.call(this),this[N]=!1,$.call(this,i),Z.call(this,i)}},W.showLoading=function(t,e){if(O(t)&&(e=t,t=""),t=t||"default",this.hideLoading(),ct[t]){var n=ct[t](this._api,e),i=this._zr
this._loadingFX=n,i.add(n)}},W.hideLoading=function(){this._loadingFX&&this._zr.remove(this._loadingFX),this._loadingFX=null},W.makeActionFromEvent=function(t){var e=r.extend({},t)
return e.type=at[t.type],e},W.dispatchAction=function(t,e){O(e)||(e={silent:!!e}),rt[t.type]&&this._model&&(this[N]?this._pendingActions.push(t):(X.call(this,t,e.silent),e.flush?this._zr.flush(!0):!1!==e.flush&&o.browser.weChat&&this._throttledZrFlush(),$.call(this,e.silent),Z.call(this,e.silent)))},W.appendData=function(t){var e=t.seriesIndex
this.getModel().getSeriesByIndex(e).appendData(t),this._scheduler.unfinished=!0},W.on=F("on"),W.off=F("off"),W.one=F("one")
var nt=["click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","globalout","contextmenu"]
function it(t,e){var n=t.get("z"),i=t.get("zlevel")
e.group.traverse(function(t){"group"!==t.type&&(null!=n&&(t.z=n),null!=i&&(t.zlevel=i))})}W._initEvents=function(){A(nt,function(t){this._zr.on(t,function(e){var n,i=this.getModel(),a=e.target
if("globalout"===t)n={}
else if(a&&null!=a.dataIndex){var o=a.dataModel||i.getSeriesByIndex(a.seriesIndex)
n=o&&o.getDataParams(a.dataIndex,a.dataType)||{}}else a&&a.eventData&&(n=r.extend({},a.eventData))
n&&(n.event=e,n.type=t,this.trigger(t,n))},this)},this),A(at,function(t,e){this._messageCenter.on(e,function(t){this.trigger(e,t)},this)},this)},W.isDisposed=function(){return this._disposed},W.clear=function(){this.setOption({series:[]},!0)},W.dispose=function(){if(!this._disposed){this._disposed=!0,_.setAttribute(this.getDom(),mt,"")
var t=this._api,e=this._model
A(this._componentsViews,function(n){n.dispose(e,t)}),A(this._chartsViews,function(n){n.dispose(e,t)}),this._zr.dispose(),delete ft[this.id]}},r.mixin(V,l)
var rt={},at={},ot=[],st=[],lt=[],ut=[],ht={},ct={},ft={},dt={},pt=new Date-0,gt=new Date-0,mt="_echarts_instance_",vt={}
function yt(t){dt[t]=!1}var xt=yt
function _t(t){return ft[_.getAttribute(t,mt)]}function bt(t,e){ht[t]=e}function wt(t){st.push(t)}function St(t,e){kt(ot,t,e,L)}function Mt(t,e,n){"function"==typeof e&&(n=e,e="")
var i=O(t)?t.type:[t,t={event:e}][0]
t.event=(t.event||i).toLowerCase(),e=t.event,C(B.test(i)&&B.test(e)),rt[i]||(rt[i]={action:n,actionInfo:t}),at[e]=i}function Tt(t,e){kt(ut,t,e,E,"visual")}function kt(t,e,n,i,r){(I(e)||O(e))&&(n=e,e=i)
var a=T.wrapStageHandler(n,r)
return a.__prio=e,a.__raw=n,t.push(a),a}function Dt(t,e){ct[t]=e}Tt(2e3,w),wt(d),St(5e3,p),Dt("default",M),Mt({type:"highlight",event:"highlight",update:"highlight"},r.noop),Mt({type:"downplay",event:"downplay",update:"downplay"},r.noop),bt("light",k),bt("dark",D),e.version="4.1.0",e.dependencies={zrender:"4.0.4"},e.PRIORITY=R,e.init=function(t,e,n){var i=_t(t)
if(i)return i
var r=new V(t,e,n)
return r.id="ec_"+pt++,ft[r.id]=r,_.setAttribute(t,mt,r.id),function(t){var e="__connectUpdateStatus"
function n(t,n){for(var i=0;i<t.length;i++)t[i][e]=n}A(at,function(i,r){t._messageCenter.on(r,function(i){if(dt[t.group]&&0!==t[e]){if(i&&i.escapeConnect)return
var r=t.makeActionFromEvent(i),a=[]
A(ft,function(e){e!==t&&e.group===t.group&&a.push(e)}),n(a,0),A(a,function(t){1!==t[e]&&t.dispatchAction(r)}),n(a,2)}})})}(r),r},e.connect=function(t){if(r.isArray(t)){var e=t
t=null,A(e,function(e){null!=e.group&&(t=e.group)}),t=t||"g_"+gt++,A(e,function(e){e.group=t})}return dt[t]=!0,t},e.disConnect=yt,e.disconnect=xt,e.dispose=function(t){"string"==typeof t?t=ft[t]:t instanceof V||(t=_t(t)),t instanceof V&&!t.isDisposed()&&t.dispose()},e.getInstanceByDom=_t,e.getInstanceById=function(t){return ft[t]},e.registerTheme=bt,e.registerPreprocessor=wt,e.registerProcessor=St,e.registerPostUpdate=function(t){lt.push(t)},e.registerAction=Mt,e.registerCoordinateSystem=function(t,e){c.register(t,e)},e.getCoordinateSystemDimensions=function(t){var e=c.get(t)
if(e)return e.getDimensionsInfo?e.getDimensionsInfo():e.dimensions.slice()},e.registerLayout=function(t,e){kt(ut,t,e,1e3,"layout")},e.registerVisual=Tt,e.registerLoading=Dt,e.extendComponentModel=function(t){return g.extend(t)},e.extendComponentView=function(t){return v.extend(t)},e.extendSeriesModel=function(t){return m.extend(t)},e.extendChartView=function(t){return y.extend(t)},e.setCanvasCreator=function(t){r.$override("createCanvas",t)},e.registerMap=function(t,e,n){e.geoJson&&!e.features&&(n=e.specialAreas,e=e.geoJson),"string"==typeof e&&(e="undefined"!=typeof JSON&&JSON.parse?JSON.parse(e):new Function("return ("+e+");")()),vt[t]={geoJson:e,specialAreas:n}},e.getMap=function(t){return vt[t]},e.dataTool={}
var Ct=n(1429)
!function(){for(var t in Ct)Ct.hasOwnProperty(t)&&(e[t]=Ct[t])}()},1288:function(t,e){var n={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},i={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},r=Object.prototype.toString,a=Array.prototype,o=a.forEach,s=a.filter,l=a.slice,u=a.map,h=a.reduce,c={}
function f(t){if(null==t||"object"!=typeof t)return t
var e=t,a=r.call(t)
if("[object Array]"===a){if(!M(t)){e=[]
for(var o=0,s=t.length;o<s;o++)e[o]=f(t[o])}}else if(i[a]){if(!M(t)){var l=t.constructor
if(t.constructor.from)e=l.from(t)
else for(e=new l(t.length),o=0,s=t.length;o<s;o++)e[o]=f(t[o])}}else if(!n[a]&&!M(t)&&!w(t))for(var u in e={},t)t.hasOwnProperty(u)&&(e[u]=f(t[u]))
return e}function d(t,e,n){if(!_(e)||!_(t))return n?f(e):t
for(var i in e)if(e.hasOwnProperty(i)){var r=t[i],a=e[i]
!_(a)||!_(r)||x(a)||x(r)||w(a)||w(r)||b(a)||b(r)||M(a)||M(r)?!n&&i in t||(t[i]=f(e[i])):d(r,a,n)}return t}function p(t,e,n){for(var i in e)e.hasOwnProperty(i)&&(n?null!=e[i]:null==t[i])&&(t[i]=e[i])
return t}var g,m=function(){return c.createCanvas()}
function v(t,e,n){if(t&&e)if(t.forEach&&t.forEach===o)t.forEach(e,n)
else if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i,t)
else for(var a in t)t.hasOwnProperty(a)&&e.call(n,t[a],a,t)}function y(t,e){var n=l.call(arguments,2)
return function(){return t.apply(e,n.concat(l.call(arguments)))}}function x(t){return"[object Array]"===r.call(t)}function _(t){var e=typeof t
return"function"===e||!!t&&"object"==e}function b(t){return!!n[r.call(t)]}function w(t){return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument}c.createCanvas=function(){return document.createElement("canvas")}
var S="__ec_primitive__"
function M(t){return t[S]}function T(t){var e=x(t),n=this
function i(t,i){e?n.set(t,i):n.set(i,t)}t instanceof T?t.each(i):t&&v(t,i)}T.prototype={constructor:T,get:function(t){return this.hasOwnProperty(t)?this[t]:null},set:function(t,e){return this[t]=e},each:function(t,e){for(var n in void 0!==e&&(t=y(t,e)),this)this.hasOwnProperty(n)&&t(this[n],n)},removeKey:function(t){delete this[t]}},e.$override=function(t,e){"createCanvas"===t&&(g=null),c[t]=e},e.clone=f,e.merge=d,e.mergeAll=function(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)n=d(n,t[i],e)
return n},e.extend=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t},e.defaults=p,e.createCanvas=m,e.getContext=function(){return g||(g=m().getContext("2d")),g},e.indexOf=function(t,e){if(t){if(t.indexOf)return t.indexOf(e)
for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n}return-1},e.inherits=function(t,e){var n=t.prototype
function i(){}for(var r in i.prototype=e.prototype,t.prototype=new i,n)t.prototype[r]=n[r]
t.prototype.constructor=t,t.superClass=e},e.mixin=function(t,e,n){p(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,n)},e.isArrayLike=function(t){if(t)return"string"!=typeof t&&"number"==typeof t.length},e.each=v,e.map=function(t,e,n){if(t&&e){if(t.map&&t.map===u)return t.map(e,n)
for(var i=[],r=0,a=t.length;r<a;r++)i.push(e.call(n,t[r],r,t))
return i}},e.reduce=function(t,e,n,i){if(t&&e){if(t.reduce&&t.reduce===h)return t.reduce(e,n,i)
for(var r=0,a=t.length;r<a;r++)n=e.call(i,n,t[r],r,t)
return n}},e.filter=function(t,e,n){if(t&&e){if(t.filter&&t.filter===s)return t.filter(e,n)
for(var i=[],r=0,a=t.length;r<a;r++)e.call(n,t[r],r,t)&&i.push(t[r])
return i}},e.find=function(t,e,n){if(t&&e)for(var i=0,r=t.length;i<r;i++)if(e.call(n,t[i],i,t))return t[i]},e.bind=y,e.curry=function(t){var e=l.call(arguments,1)
return function(){return t.apply(this,e.concat(l.call(arguments)))}},e.isArray=x,e.isFunction=function(t){return"function"==typeof t},e.isString=function(t){return"[object String]"===r.call(t)},e.isObject=_,e.isBuiltInObject=b,e.isTypedArray=function(t){return!!i[r.call(t)]},e.isDom=w,e.eqNaN=function(t){return t!=t},e.retrieve=function(t){for(var e=0,n=arguments.length;e<n;e++)if(null!=arguments[e])return arguments[e]},e.retrieve2=function(t,e){return null!=t?t:e},e.retrieve3=function(t,e,n){return null!=t?t:null!=e?e:n},e.slice=function(){return Function.call.apply(l,arguments)},e.normalizeCssArray=function(t){if("number"==typeof t)return[t,t,t,t]
var e=t.length
return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t},e.assert=function(t,e){if(!t)throw new Error(e)},e.trim=function(t){return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},e.setAsPrimitive=function(t){t[S]=!0},e.isPrimitive=M,e.createHashMap=function(t){return new T(t)},e.concatArray=function(t,e){for(var n=new t.constructor(t.length+e.length),i=0;i<t.length;i++)n[i]=t[i]
var r=t.length
for(i=0;i<e.length;i++)n[i+r]=e[i]
return n},e.noop=function(){}},1289:function(t,e,n){var i=n(1288),r=i.each,a=i.isObject,o=i.isArray,s="series\0"
function l(t){return t instanceof Array?t:null==t?[]:[t]}function u(t){return a(t)&&t.id&&0===(t.id+"").indexOf("\0_ec_\0")}var h=0
function c(t,e){return t&&t.hasOwnProperty(e)}e.normalizeToArray=l,e.defaultEmphasis=function(t,e,n){if(t){t[e]=t[e]||{},t.emphasis=t.emphasis||{},t.emphasis[e]=t.emphasis[e]||{}
for(var i=0,r=n.length;i<r;i++){var a=n[i]
!t.emphasis[e].hasOwnProperty(a)&&t[e].hasOwnProperty(a)&&(t.emphasis[e][a]=t[e][a])}}},e.TEXT_STYLE_OPTIONS=["fontStyle","fontWeight","fontSize","fontFamily","rich","tag","color","textBorderColor","textBorderWidth","width","height","lineHeight","align","verticalAlign","baseline","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY","textShadowColor","textShadowBlur","textShadowOffsetX","textShadowOffsetY","backgroundColor","borderColor","borderWidth","borderRadius","padding"],e.getDataItemValue=function(t){return!a(t)||o(t)||t instanceof Date?t:t.value},e.isDataItemOption=function(t){return a(t)&&!(t instanceof Array)},e.mappingToExists=function(t,e){e=(e||[]).slice()
var n=i.map(t||[],function(t,e){return{exist:t}})
return r(e,function(t,i){if(a(t)){for(var r=0;r<n.length;r++)if(!n[r].option&&null!=t.id&&n[r].exist.id===t.id+"")return n[r].option=t,void(e[i]=null)
for(r=0;r<n.length;r++){var o=n[r].exist
if(!(n[r].option||null!=o.id&&null!=t.id||null==t.name||u(t)||u(o)||o.name!==t.name+""))return n[r].option=t,void(e[i]=null)}}}),r(e,function(t,e){if(a(t)){for(var i=0;i<n.length;i++){var r=n[i].exist
if(!n[i].option&&!u(r)&&null==t.id){n[i].option=t
break}}i>=n.length&&n.push({option:t})}}),n},e.makeIdAndName=function(t){var e=i.createHashMap()
r(t,function(t,n){var i=t.exist
i&&e.set(i.id,t)}),r(t,function(t,n){var r=t.option
i.assert(!r||null==r.id||!e.get(r.id)||e.get(r.id)===t,"id duplicates: "+(r&&r.id)),r&&null!=r.id&&e.set(r.id,t),!t.keyInfo&&(t.keyInfo={})}),r(t,function(t,n){var i=t.exist,r=t.option,o=t.keyInfo
if(a(r)){if(o.name=null!=r.name?r.name+"":i?i.name:s+n,i)o.id=i.id
else if(null!=r.id)o.id=r.id+""
else{var l=0
do{o.id="\0"+o.name+"\0"+l++}while(e.get(o.id))}e.set(o.id,t)}})},e.isNameSpecified=function(t){var e=t.name
return!(!e||!e.indexOf(s))},e.isIdInner=u,e.compressBatches=function(t,e){var n={},i={}
return r(t||[],n),r(e||[],i,n),[a(n),a(i)]
function r(t,e,n){for(var i=0,r=t.length;i<r;i++)for(var a=t[i].seriesId,o=l(t[i].dataIndex),s=n&&n[a],u=0,h=o.length;u<h;u++){var c=o[u]
s&&s[c]?s[c]=null:(e[a]||(e[a]={}))[c]=1}}function a(t,e){var n=[]
for(var i in t)if(t.hasOwnProperty(i)&&null!=t[i])if(e)n.push(+i)
else{var r=a(t[i],!0)
r.length&&n.push({seriesId:i,dataIndex:r})}return n}},e.queryDataIndex=function(t,e){return null!=e.dataIndexInside?e.dataIndexInside:null!=e.dataIndex?i.isArray(e.dataIndex)?i.map(e.dataIndex,function(e){return t.indexOfRawIndex(e)}):t.indexOfRawIndex(e.dataIndex):null!=e.name?i.isArray(e.name)?i.map(e.name,function(e){return t.indexOfName(e)}):t.indexOfName(e.name):void 0},e.makeInner=function(){var t="__\0ec_inner_"+h+++"_"+Math.random().toFixed(5)
return function(e){return e[t]||(e[t]={})}},e.parseFinder=function(t,e,n){if(i.isString(e)){var a={}
a[e+"Index"]=0,e=a}var o=n&&n.defaultMainType
!o||c(e,o+"Index")||c(e,o+"Id")||c(e,o+"Name")||(e[o+"Index"]=0)
var s={}
return r(e,function(r,a){if(r=e[a],"dataIndex"!==a&&"dataIndexInside"!==a){var o=a.match(/^(\w+)(Index|Id|Name)$/)||[],l=o[1],u=(o[2]||"").toLowerCase()
if(!(!l||!u||null==r||"index"===u&&"none"===r||n&&n.includeMainTypes&&i.indexOf(n.includeMainTypes,l)<0)){var h={mainType:l}
"index"===u&&"all"===r||(h[u]=r)
var c=t.queryComponents(h)
s[l+"Models"]=c,s[l+"Model"]=c[0]}}else s[a]=r}),s},e.setAttribute=function(t,e,n){t.setAttribute?t.setAttribute(e,n):t[e]=n},e.getAttribute=function(t,e){return t.getAttribute?t.getAttribute(e):t[e]}},1290:function(t,e,n){(function(t){var n
"undefined"!=typeof window?n=window.__DEV__:void 0!==t&&(n=t.__DEV__),void 0===n&&(n=!0)
var i=n
e.__DEV__=i}).call(this,n(28))},1291:function(t,e){var n="undefined"==typeof Float32Array?Array:Float32Array
function i(t){return Math.sqrt(a(t))}var r=i
function a(t){return t[0]*t[0]+t[1]*t[1]}var o=a
function s(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}var l=s
function u(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])}var h=u
e.create=function(t,e){var i=new n(2)
return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i},e.copy=function(t,e){return t[0]=e[0],t[1]=e[1],t},e.clone=function(t){var e=new n(2)
return e[0]=t[0],e[1]=t[1],e},e.set=function(t,e,n){return t[0]=e,t[1]=n,t},e.add=function(t,e,n){return t[0]=e[0]+n[0],t[1]=e[1]+n[1],t},e.scaleAndAdd=function(t,e,n,i){return t[0]=e[0]+n[0]*i,t[1]=e[1]+n[1]*i,t},e.sub=function(t,e,n){return t[0]=e[0]-n[0],t[1]=e[1]-n[1],t},e.len=i,e.length=r,e.lenSquare=a,e.lengthSquare=o,e.mul=function(t,e,n){return t[0]=e[0]*n[0],t[1]=e[1]*n[1],t},e.div=function(t,e,n){return t[0]=e[0]/n[0],t[1]=e[1]/n[1],t},e.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},e.scale=function(t,e,n){return t[0]=e[0]*n,t[1]=e[1]*n,t},e.normalize=function(t,e){var n=i(e)
return 0===n?(t[0]=0,t[1]=0):(t[0]=e[0]/n,t[1]=e[1]/n),t},e.distance=s,e.dist=l,e.distanceSquare=u,e.distSquare=h,e.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},e.lerp=function(t,e,n,i){return t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t},e.applyTransform=function(t,e,n){var i=e[0],r=e[1]
return t[0]=n[0]*i+n[2]*r+n[4],t[1]=n[1]*i+n[3]*r+n[5],t},e.min=function(t,e,n){return t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t},e.max=function(t,e,n){return t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t}},1292:function(t,e,n){var i=n(1288),r=n(1390),a=n(1308),o=n(1301),s=n(1291),l=n(1295),u=n(1335),h=n(1343)
e.Image=h
var c=n(1313)
e.Group=c
var f=n(1397)
e.Text=f
var d=n(1398)
e.Circle=d
var p=n(1399)
e.Sector=p
var g=n(1400)
e.Ring=g
var m=n(1401)
e.Polygon=m
var v=n(1404)
e.Polyline=v
var y=n(1405)
e.Rect=y
var x=n(1406)
e.Line=x
var _=n(1407)
e.BezierCurve=_
var b=n(1408)
e.Arc=b
var w=n(1409)
e.CompoundPath=w
var S=n(1410)
e.LinearGradient=S
var M=n(1411)
e.RadialGradient=M
var T=n(1296)
e.BoundingRect=T
var k=n(1412)
e.IncrementalDisplayable=k
var D=Math.round,C=Math.max,A=Math.min,I={}
function O(t,e,n,i){var a=r.createFromString(t,e),o=a.getBoundingRect()
return n&&("center"===i&&(n=P(n,o)),E(a,n)),a}function P(t,e){var n,i=e.width/e.height,r=t.height*i
return n=r<=t.width?t.height:(r=t.width)/i,{x:t.x+t.width/2-r/2,y:t.y+t.height/2-n/2,width:r,height:n}}var L=r.mergePath
function E(t,e){if(t.applyTransform){var n=t.getBoundingRect().calculateTransform(e)
t.applyTransform(n)}}function R(t,e,n){var i=D(2*t)
return(i+D(e))%2==0?i/2:(i+(n?1:-1))/2}function N(t){return null!=t&&"none"!=t}function z(t){return"string"==typeof t?a.lift(t,-.1):t}function B(t){if(t.__hoverStlDirty){var e=t.style.stroke,n=t.style.fill,i=t.__hoverStl
i.fill=i.fill||(N(n)?z(n):null),i.stroke=i.stroke||(N(e)?z(e):null)
var r={}
for(var a in i)null!=i[a]&&(r[a]=t.style[a])
t.__normalStl=r,t.__hoverStlDirty=!1}}function F(t){if(!t.__isHover){if(B(t),t.useHoverLayer)t.__zr&&t.__zr.addHover(t,t.__hoverStl)
else{var e=t.style,n=e.insideRollbackOpt
n&&function(t){var e=t.insideRollback
e&&(t.textFill=e.textFill,t.textStroke=e.textStroke,t.textStrokeWidth=e.textStrokeWidth)}(e),e.extendFrom(t.__hoverStl),n&&(J(e,e.insideOriginalTextPosition,n),null==e.textFill&&(e.textFill=n.autoColor)),t.dirty(!1),t.z2+=1}t.__isHover=!0}}function H(t){if(t.__isHover){var e=t.__normalStl
t.useHoverLayer?t.__zr&&t.__zr.removeHover(t):(e&&t.setStyle(e),t.z2-=1),t.__isHover=!1}}function V(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&F(t)}):F(t)}function W(t){"group"===t.type?t.traverse(function(t){"group"!==t.type&&H(t)}):H(t)}function Y(t,e){t.__hoverStl=t.hoverStyle||e||{},t.__hoverStlDirty=!0,t.__isHover&&B(t)}function U(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&V(this)}function G(t){this.__hoverSilentOnTouch&&t.zrByTouch||!this.__isEmphasis&&W(this)}function j(){this.__isEmphasis=!0,V(this)}function q(){this.__isEmphasis=!1,W(this)}function X(t,e,n,r,a){return $(t,e,r,a),n&&i.extend(t,n),t.host&&t.host.dirty&&t.host.dirty(!1),t}function $(t,e,n,r){if((n=n||I).isRectText){var a=e.getShallow("position")||(r?null:"inside")
"outside"===a&&(a="top"),t.textPosition=a,t.textOffset=e.getShallow("offset")
var o=e.getShallow("rotate")
null!=o&&(o*=Math.PI/180),t.textRotation=o,t.textDistance=i.retrieve2(e.getShallow("distance"),r?null:5)}var s,l=e.ecModel,u=l&&l.option.textStyle,h=function(t){for(var e;t&&t!==t.ecModel;){var n=(t.option||I).rich
if(n)for(var i in e=e||{},n)n.hasOwnProperty(i)&&(e[i]=1)
t=t.parentModel}return e}(e)
if(h)for(var c in s={},h)if(h.hasOwnProperty(c)){var f=e.getModel(["rich",c])
Z(s[c]={},f,u,n,r)}return t.rich=s,Z(t,e,u,n,r,!0),n.forceRich&&!n.textStyle&&(n.textStyle={}),t}function Z(t,e,n,r,a,o){if(n=!a&&n||I,t.textFill=K(e.getShallow("color"),r)||n.color,t.textStroke=K(e.getShallow("textBorderColor"),r)||n.textBorderColor,t.textStrokeWidth=i.retrieve2(e.getShallow("textBorderWidth"),n.textBorderWidth),!a){if(o){var s=t.textPosition
t.insideRollback=J(t,s,r),t.insideOriginalTextPosition=s,t.insideRollbackOpt=r}null==t.textFill&&(t.textFill=r.autoColor)}t.fontStyle=e.getShallow("fontStyle")||n.fontStyle,t.fontWeight=e.getShallow("fontWeight")||n.fontWeight,t.fontSize=e.getShallow("fontSize")||n.fontSize,t.fontFamily=e.getShallow("fontFamily")||n.fontFamily,t.textAlign=e.getShallow("align"),t.textVerticalAlign=e.getShallow("verticalAlign")||e.getShallow("baseline"),t.textLineHeight=e.getShallow("lineHeight"),t.textWidth=e.getShallow("width"),t.textHeight=e.getShallow("height"),t.textTag=e.getShallow("tag"),o&&r.disableBox||(t.textBackgroundColor=K(e.getShallow("backgroundColor"),r),t.textPadding=e.getShallow("padding"),t.textBorderColor=K(e.getShallow("borderColor"),r),t.textBorderWidth=e.getShallow("borderWidth"),t.textBorderRadius=e.getShallow("borderRadius"),t.textBoxShadowColor=e.getShallow("shadowColor"),t.textBoxShadowBlur=e.getShallow("shadowBlur"),t.textBoxShadowOffsetX=e.getShallow("shadowOffsetX"),t.textBoxShadowOffsetY=e.getShallow("shadowOffsetY")),t.textShadowColor=e.getShallow("textShadowColor")||n.textShadowColor,t.textShadowBlur=e.getShallow("textShadowBlur")||n.textShadowBlur,t.textShadowOffsetX=e.getShallow("textShadowOffsetX")||n.textShadowOffsetX,t.textShadowOffsetY=e.getShallow("textShadowOffsetY")||n.textShadowOffsetY}function K(t,e){return"auto"!==t?t:e&&e.autoColor?e.autoColor:null}function J(t,e,n){var i,r=n.useInsideStyle
return null==t.textFill&&!1!==r&&(!0===r||n.isRectText&&e&&"string"==typeof e&&e.indexOf("inside")>=0)&&(i={textFill:null,textStroke:t.textStroke,textStrokeWidth:t.textStrokeWidth},t.textFill="#fff",null==t.textStroke&&(t.textStroke=n.autoColor,null==t.textStrokeWidth&&(t.textStrokeWidth=2))),i}function Q(t,e,n,i,r,a){if("function"==typeof r&&(a=r,r=null),i&&i.isAnimationEnabled()){var o=t?"Update":"",s=i.getShallow("animationDuration"+o),l=i.getShallow("animationEasing"+o),u=i.getShallow("animationDelay"+o)
"function"==typeof u&&(u=u(r,i.getAnimationDelayParams?i.getAnimationDelayParams(e,r):null)),"function"==typeof s&&(s=s(r)),s>0?e.animateTo(n,s,u||0,l,a,!!a):(e.stopAnimation(),e.attr(n),a&&a())}else e.stopAnimation(),e.attr(n),a&&a()}function tt(t,e,n,i,r){Q(!0,t,e,n,i,r)}function et(t,e,n){return e&&!i.isArrayLike(e)&&(e=u.getLocalTransform(e)),n&&(e=o.invert([],e)),s.applyTransform([],t,e)}e.extendShape=function(t){return l.extend(t)},e.extendPath=function(t,e){return r.extendFromString(t,e)},e.makePath=O,e.makeImage=function(t,e,n){var i=new h({style:{image:t,x:e.x,y:e.y,width:e.width,height:e.height},onload:function(t){if("center"===n){var r={width:t.width,height:t.height}
i.setStyle(P(e,r))}}})
return i},e.mergePath=L,e.resizePath=E,e.subPixelOptimizeLine=function(t){var e=t.shape,n=t.style.lineWidth
return D(2*e.x1)===D(2*e.x2)&&(e.x1=e.x2=R(e.x1,n,!0)),D(2*e.y1)===D(2*e.y2)&&(e.y1=e.y2=R(e.y1,n,!0)),t},e.subPixelOptimizeRect=function(t){var e=t.shape,n=t.style.lineWidth,i=e.x,r=e.y,a=e.width,o=e.height
return e.x=R(e.x,n,!0),e.y=R(e.y,n,!0),e.width=Math.max(R(i+a,n,!1)-e.x,0===a?0:1),e.height=Math.max(R(r+o,n,!1)-e.y,0===o?0:1),t},e.subPixelOptimize=R,e.setHoverStyle=function(t,e,n){t.__hoverSilentOnTouch=n&&n.hoverSilentOnTouch,"group"===t.type?t.traverse(function(t){"group"!==t.type&&Y(t,e)}):Y(t,e),t.on("mouseover",U).on("mouseout",G),t.on("emphasis",j).on("normal",q)},e.setLabelStyle=function(t,e,n,r,a,o,s){var l,u=(a=a||I).labelFetcher,h=a.labelDataIndex,c=a.labelDimIndex,f=n.getShallow("show"),d=r.getShallow("show");(f||d)&&(u&&(l=u.getFormattedLabel(h,"normal",null,c)),null==l&&(l=i.isFunction(a.defaultText)?a.defaultText(h,a):a.defaultText))
var p=f?l:null,g=d?i.retrieve2(u?u.getFormattedLabel(h,"emphasis",null,c):null,l):null
null==p&&null==g||(X(t,n,o,a),X(e,r,s,a,!0)),t.text=p,e.text=g},e.setTextStyle=X,e.setText=function(t,e,n){var i,r={isRectText:!0}
!1===n?i=!0:r.autoColor=n,$(t,e,r,i),t.host&&t.host.dirty&&t.host.dirty(!1)},e.getFont=function(t,e){var n=e||e.getModel("textStyle")
return i.trim([t.fontStyle||n&&n.getShallow("fontStyle")||"",t.fontWeight||n&&n.getShallow("fontWeight")||"",(t.fontSize||n&&n.getShallow("fontSize")||12)+"px",t.fontFamily||n&&n.getShallow("fontFamily")||"sans-serif"].join(" "))},e.updateProps=tt,e.initProps=function(t,e,n,i,r){Q(!1,t,e,n,i,r)},e.getTransform=function(t,e){for(var n=o.identity([]);t&&t!==e;)o.mul(n,t.getLocalTransform(),n),t=t.parent
return n},e.applyTransform=et,e.transformDirection=function(t,e,n){var i=0===e[4]||0===e[5]||0===e[0]?1:Math.abs(2*e[4]/e[0]),r=0===e[4]||0===e[5]||0===e[2]?1:Math.abs(2*e[4]/e[2]),a=["left"===t?-i:"right"===t?i:0,"top"===t?-r:"bottom"===t?r:0]
return a=et(a,e,n),Math.abs(a[0])>Math.abs(a[1])?a[0]>0?"right":"left":a[1]>0?"bottom":"top"},e.groupTransition=function(t,e,n,r){if(t&&e){var a=function(t){var e={}
return t.traverse(function(t){!t.isGroup&&t.anid&&(e[t.anid]=t)}),e}(t)
e.traverse(function(t){if(!t.isGroup&&t.anid){var e=a[t.anid]
if(e){var i=o(t)
t.attr(o(e)),tt(t,i,n,t.dataIndex)}}})}function o(t){var e={position:s.clone(t.position),rotation:t.rotation}
return t.shape&&(e.shape=i.extend({},t.shape)),e}},e.clipPointsByRect=function(t,e){return i.map(t,function(t){var n=t[0]
n=C(n,e.x),n=A(n,e.x+e.width)
var i=t[1]
return i=C(i,e.y),[n,i=A(i,e.y+e.height)]})},e.clipRectByRect=function(t,e){var n=C(t.x,e.x),i=A(t.x+t.width,e.x+e.width),r=C(t.y,e.y),a=A(t.y+t.height,e.y+e.height)
if(i>=n&&a>=r)return{x:n,y:r,width:i-n,height:a-r}},e.createIcon=function(t,e,n){var r=(e=i.extend({rectHover:!0},e)).style={strokeNoScale:!0}
if(n=n||{x:-1,y:-1,width:2,height:2},t)return 0===t.indexOf("image://")?(r.image=t.slice(8),i.defaults(r,n),new h(e)):O(t.replace("path://",""),e,n,"center")}},1293:function(t,e,n){var i=n(1288),r=/^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/
function a(t){return Math.floor(Math.log(t)/Math.LN10)}e.linearMap=function(t,e,n,i){var r=e[1]-e[0],a=n[1]-n[0]
if(0===r)return 0===a?n[0]:(n[0]+n[1])/2
if(i)if(r>0){if(t<=e[0])return n[0]
if(t>=e[1])return n[1]}else{if(t>=e[0])return n[0]
if(t<=e[1])return n[1]}else{if(t===e[0])return n[0]
if(t===e[1])return n[1]}return(t-e[0])/r*a+n[0]},e.parsePercent=function(t,e){switch(t){case"center":case"middle":t="50%"
break
case"left":case"top":t="0%"
break
case"right":case"bottom":t="100%"}return"string"==typeof t?function(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}(t).match(/%$/)?parseFloat(t)/100*e:parseFloat(t):null==t?NaN:+t},e.round=function(t,e,n){return null==e&&(e=10),e=Math.min(Math.max(0,e),20),t=(+t).toFixed(e),n?t:+t},e.asc=function(t){return t.sort(function(t,e){return t-e}),t},e.getPrecision=function(t){if(t=+t,isNaN(t))return 0
for(var e=1,n=0;Math.round(t*e)/e!==t;)e*=10,n++
return n},e.getPrecisionSafe=function(t){var e=t.toString(),n=e.indexOf("e")
if(n>0){var i=+e.slice(n+1)
return i<0?-i:0}var r=e.indexOf(".")
return r<0?0:e.length-1-r},e.getPixelPrecision=function(t,e){var n=Math.log,i=Math.LN10,r=Math.floor(n(t[1]-t[0])/i),a=Math.round(n(Math.abs(e[1]-e[0]))/i),o=Math.min(Math.max(-r+a,0),20)
return isFinite(o)?o:20},e.getPercentWithPrecision=function(t,e,n){if(!t[e])return 0
var r=i.reduce(t,function(t,e){return t+(isNaN(e)?0:e)},0)
if(0===r)return 0
for(var a=Math.pow(10,n),o=i.map(t,function(t){return(isNaN(t)?0:t)/r*a*100}),s=100*a,l=i.map(o,function(t){return Math.floor(t)}),u=i.reduce(l,function(t,e){return t+e},0),h=i.map(o,function(t,e){return t-l[e]});u<s;){for(var c=Number.NEGATIVE_INFINITY,f=null,d=0,p=h.length;d<p;++d)h[d]>c&&(c=h[d],f=d);++l[f],h[f]=0,++u}return l[e]/a},e.MAX_SAFE_INTEGER=9007199254740991,e.remRadian=function(t){var e=2*Math.PI
return(t%e+e)%e},e.isRadianAroundZero=function(t){return t>-1e-4&&t<1e-4},e.parseDate=function(t){if(t instanceof Date)return t
if("string"==typeof t){var e=r.exec(t)
if(!e)return new Date(NaN)
if(e[8]){var n=+e[4]||0
return"Z"!==e[8].toUpperCase()&&(n-=e[8].slice(0,3)),new Date(Date.UTC(+e[1],+(e[2]||1)-1,+e[3]||1,n,+(e[5]||0),+e[6]||0,+e[7]||0))}return new Date(+e[1],+(e[2]||1)-1,+e[3]||1,+e[4]||0,+(e[5]||0),+e[6]||0,+e[7]||0)}return null==t?new Date(NaN):new Date(Math.round(t))},e.quantity=function(t){return Math.pow(10,a(t))},e.nice=function(t,e){var n=a(t),i=Math.pow(10,n),r=t/i
return t=(e?r<1.5?1:r<2.5?2:r<4?3:r<7?5:10:r<1?1:r<2?2:r<3?3:r<5?5:10)*i,n>=-20?+t.toFixed(n<0?-n:0):t},e.reformIntervals=function(t){t.sort(function(t,e){return function t(e,n,i){return e.interval[i]<n.interval[i]||e.interval[i]===n.interval[i]&&(e.close[i]-n.close[i]==(i?-1:1)||!i&&t(e,n,1))}(t,e,0)?-1:1})
for(var e=-1/0,n=1,i=0;i<t.length;){for(var r=t[i].interval,a=t[i].close,o=0;o<2;o++)r[o]<=e&&(r[o]=e,a[o]=o?1:1-n),e=r[o],n=a[o]
r[0]===r[1]&&a[0]*a[1]!=1?t.splice(i,1):i++}return t},e.isNumeric=function(t){return t-parseFloat(t)>=0}},1294:function(t,e){var n="object"==typeof wx&&"function"==typeof wx.getSystemInfoSync?{browser:{},os:{},node:!1,wxa:!0,canvasSupported:!0,svgSupported:!1,touchEventsSupported:!0}:"undefined"==typeof document&&"undefined"!=typeof self?{browser:{},os:{},node:!1,worker:!0,canvasSupported:!0}:"undefined"==typeof navigator?{browser:{},os:{},node:!0,worker:!1,canvasSupported:!0,svgSupported:!0}:function(t){var e={},n=t.match(/Firefox\/([\d.]+)/),i=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/.+?rv:(([\d.]+))/),r=t.match(/Edge\/([\d.]+)/),a=/micromessenger/i.test(t)
return n&&(e.firefox=!0,e.version=n[1]),i&&(e.ie=!0,e.version=i[1]),r&&(e.edge=!0,e.version=r[1]),a&&(e.weChat=!0),{browser:e,os:{},node:!1,canvasSupported:!!document.createElement("canvas").getContext,svgSupported:"undefined"!=typeof SVGRect,touchEventsSupported:"ontouchstart"in window&&!e.ie&&!e.edge,pointerEventsSupported:"onpointerdown"in window&&(e.edge||e.ie&&e.version>=11)}}(navigator.userAgent)
t.exports=n},1295:function(t,e,n){var i=n(1315),r=n(1288),a=n(1316),o=n(1391),s=n(1341).prototype.getCanvasPattern,l=Math.abs,u=new a(!0)
function h(t){i.call(this,t),this.path=null}h.prototype={constructor:h,type:"path",__dirtyPath:!0,strokeContainThreshold:5,brush:function(t,e){var n,i=this.style,r=this.path||u,a=i.hasStroke(),o=i.hasFill(),l=i.fill,h=i.stroke,c=o&&!!l.colorStops,f=a&&!!h.colorStops,d=o&&!!l.image,p=a&&!!h.image
i.bind(t,this,e),this.setTransform(t),this.__dirty&&(c&&(n=n||this.getBoundingRect(),this._fillGradient=i.getGradient(t,l,n)),f&&(n=n||this.getBoundingRect(),this._strokeGradient=i.getGradient(t,h,n))),c?t.fillStyle=this._fillGradient:d&&(t.fillStyle=s.call(l,t)),f?t.strokeStyle=this._strokeGradient:p&&(t.strokeStyle=s.call(h,t))
var g=i.lineDash,m=i.lineDashOffset,v=!!t.setLineDash,y=this.getGlobalScale()
r.setScale(y[0],y[1]),this.__dirtyPath||g&&!v&&a?(r.beginPath(t),g&&!v&&(r.setLineDash(g),r.setLineDashOffset(m)),this.buildPath(r,this.shape,!1),this.path&&(this.__dirtyPath=!1)):(t.beginPath(),this.path.rebuildPath(t)),o&&r.fill(t),g&&v&&(t.setLineDash(g),t.lineDashOffset=m),a&&r.stroke(t),g&&v&&t.setLineDash([]),null!=i.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))},buildPath:function(t,e,n){},createPathProxy:function(){this.path=new a},getBoundingRect:function(){var t=this._rect,e=this.style,n=!t
if(n){var i=this.path
i||(i=this.path=new a),this.__dirtyPath&&(i.beginPath(),this.buildPath(i,this.shape,!1)),t=i.getBoundingRect()}if(this._rect=t,e.hasStroke()){var r=this._rectWithStroke||(this._rectWithStroke=t.clone())
if(this.__dirty||n){r.copy(t)
var o=e.lineWidth,s=e.strokeNoScale?this.getLineScale():1
e.hasFill()||(o=Math.max(o,this.strokeContainThreshold||4)),s>1e-10&&(r.width+=o/s,r.height+=o/s,r.x-=o/s/2,r.y-=o/s/2)}return r}return t},contain:function(t,e){var n=this.transformCoordToLocal(t,e),i=this.getBoundingRect(),r=this.style
if(t=n[0],e=n[1],i.contain(t,e)){var a=this.path.data
if(r.hasStroke()){var s=r.lineWidth,l=r.strokeNoScale?this.getLineScale():1
if(l>1e-10&&(r.hasFill()||(s=Math.max(s,this.strokeContainThreshold)),o.containStroke(a,s/l,t,e)))return!0}if(r.hasFill())return o.contain(a,t,e)}return!1},dirty:function(t){null==t&&(t=!0),t&&(this.__dirtyPath=t,this._rect=null),this.__dirty=!0,this.__zr&&this.__zr.refresh(),this.__clipTarget&&this.__clipTarget.dirty()},animateShape:function(t){return this.animate("shape",t)},attrKV:function(t,e){"shape"===t?(this.setShape(e),this.__dirtyPath=!0,this._rect=null):i.prototype.attrKV.call(this,t,e)},setShape:function(t,e){var n=this.shape
if(n){if(r.isObject(t))for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])
else n[t]=e
this.dirty(!0)}return this},getLineScale:function(){var t=this.transform
return t&&l(t[0]-1)>1e-10&&l(t[3]-1)>1e-10?Math.sqrt(l(t[0]*t[3]-t[2]*t[1])):1}},h.extend=function(t){var e=function(e){h.call(this,e),t.style&&this.style.extendFrom(t.style,!1)
var n=t.shape
if(n){this.shape=this.shape||{}
var i=this.shape
for(var r in n)!i.hasOwnProperty(r)&&n.hasOwnProperty(r)&&(i[r]=n[r])}t.init&&t.init.call(this,e)}
for(var n in r.inherits(e,h),t)"style"!==n&&"shape"!==n&&(e.prototype[n]=t[n])
return e},r.inherits(h,i)
var c=h
t.exports=c},1296:function(t,e,n){var i=n(1291),r=n(1301),a=i.applyTransform,o=Math.min,s=Math.max
function l(t,e,n,i){n<0&&(t+=n,n=-n),i<0&&(e+=i,i=-i),this.x=t,this.y=e,this.width=n,this.height=i}l.prototype={constructor:l,union:function(t){var e=o(t.x,this.x),n=o(t.y,this.y)
this.width=s(t.x+t.width,this.x+this.width)-e,this.height=s(t.y+t.height,this.y+this.height)-n,this.x=e,this.y=n},applyTransform:function(){var t=[],e=[],n=[],i=[]
return function(r){if(r){t[0]=n[0]=this.x,t[1]=i[1]=this.y,e[0]=i[0]=this.x+this.width,e[1]=n[1]=this.y+this.height,a(t,t,r),a(e,e,r),a(n,n,r),a(i,i,r),this.x=o(t[0],e[0],n[0],i[0]),this.y=o(t[1],e[1],n[1],i[1])
var l=s(t[0],e[0],n[0],i[0]),u=s(t[1],e[1],n[1],i[1])
this.width=l-this.x,this.height=u-this.y}}}(),calculateTransform:function(t){var e=this,n=t.width/e.width,i=t.height/e.height,a=r.create()
return r.translate(a,a,[-e.x,-e.y]),r.scale(a,a,[n,i]),r.translate(a,a,[t.x,t.y]),a},intersect:function(t){if(!t)return!1
t instanceof l||(t=l.create(t))
var e=this,n=e.x,i=e.x+e.width,r=e.y,a=e.y+e.height,o=t.x,s=t.x+t.width,u=t.y,h=t.y+t.height
return!(i<o||s<n||a<u||h<r)},contain:function(t,e){return t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height},clone:function(){return new l(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height},plain:function(){return{x:this.x,y:this.y,width:this.width,height:this.height}}},l.create=function(t){return new l(t.x,t.y,t.width,t.height)}
var u=l
t.exports=u},1297:function(t,e,n){var i=n(1288),r=n(1302),a=n(1293),o=i.normalizeCssArray,s=/([&<>"'])/g,l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}
function u(t){return null==t?"":(t+"").replace(s,function(t,e){return l[e]})}var h=["a","b","c","d","e","f","g"],c=function(t,e){return"{"+t+(null==e?"":e)+"}"}
function f(t,e){return"0000".substr(0,e-(t+="").length)+t}var d=r.truncateText,p=r.getBoundingRect
e.addCommas=function(t){return isNaN(t)?"-":(t=(t+"").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")},e.toCamelCase=function(t,e){return t=(t||"").toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}),e&&t&&(t=t.charAt(0).toUpperCase()+t.slice(1)),t},e.normalizeCssArray=o,e.encodeHTML=u,e.formatTpl=function(t,e,n){i.isArray(e)||(e=[e])
var r=e.length
if(!r)return""
for(var a=e[0].$vars||[],o=0;o<a.length;o++){var s=h[o]
t=t.replace(c(s),c(s,0))}for(var l=0;l<r;l++)for(var f=0;f<a.length;f++){var d=e[l][a[f]]
t=t.replace(c(h[f],l),n?u(d):d)}return t},e.formatTplSimple=function(t,e,n){return i.each(e,function(e,i){t=t.replace("{"+i+"}",n?u(e):e)}),t},e.getTooltipMarker=function(t,e){var n=(t=i.isString(t)?{color:t,extraCssText:e}:t||{}).color,r=t.type
return e=t.extraCssText,n?"subItem"===r?'<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:'+u(n)+";"+(e||"")+'"></span>':'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+u(n)+";"+(e||"")+'"></span>':""},e.formatTime=function(t,e,n){"week"!==t&&"month"!==t&&"quarter"!==t&&"half-year"!==t&&"year"!==t||(t="MM-dd\nyyyy")
var i=a.parseDate(e),r=n?"UTC":"",o=i["get"+r+"FullYear"](),s=i["get"+r+"Month"]()+1,l=i["get"+r+"Date"](),u=i["get"+r+"Hours"](),h=i["get"+r+"Minutes"](),c=i["get"+r+"Seconds"](),d=i["get"+r+"Milliseconds"]()
return t.replace("MM",f(s,2)).replace("M",s).replace("yyyy",o).replace("yy",o%100).replace("dd",f(l,2)).replace("d",l).replace("hh",f(u,2)).replace("h",u).replace("mm",f(h,2)).replace("m",h).replace("ss",f(c,2)).replace("s",c).replace("SSS",f(d,3))},e.capitalFirst=function(t){return t?t.charAt(0).toUpperCase()+t.substr(1):t},e.truncateText=d,e.getTextRect=p},1298:function(t,e,n){var i=n(1288),r=n(1294),a=n(1289).makeInner,o=n(1299),s=o.enableClassExtend,l=o.enableClassCheck,u=n(1387),h=n(1388),c=n(1389),f=n(1413),d=i.mixin,p=a()
function g(t,e,n){this.parentModel=e,this.ecModel=n,this.option=t}function m(t,e,n){for(var i=0;i<e.length&&(!e[i]||null!=(t=t&&"object"==typeof t?t[e[i]]:null));i++);return null==t&&n&&(t=n.get(e)),t}function v(t,e){var n=p(t).getParent
return n?n.call(t,e):t.parentModel}g.prototype={constructor:g,init:null,mergeOption:function(t){i.merge(this.option,t,!0)},get:function(t,e){return null==t?this.option:m(this.option,this.parsePath(t),!e&&v(this,t))},getShallow:function(t,e){var n=this.option,i=null==n?n:n[t],r=!e&&v(this,t)
return null==i&&r&&(i=r.getShallow(t)),i},getModel:function(t,e){var n
return new g(null==t?this.option:m(this.option,t=this.parsePath(t)),e=e||(n=v(this,t))&&n.getModel(t),this.ecModel)},isEmpty:function(){return null==this.option},restoreData:function(){},clone:function(){return new(0,this.constructor)(i.clone(this.option))},setReadOnly:function(t){},parsePath:function(t){return"string"==typeof t&&(t=t.split(".")),t},customizeGetParent:function(t){p(this).getParent=t},isAnimationEnabled:function(){if(!r.node){if(null!=this.option.animation)return!!this.option.animation
if(this.parentModel)return this.parentModel.isAnimationEnabled()}}},s(g),l(g),d(g,u),d(g,h),d(g,c),d(g,f)
var y=g
t.exports=y},1299:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=".",a="___EC__COMPONENT__CONTAINER___"
function o(t){var e={main:"",sub:""}
return t&&(t=t.split(r),e.main=t[0]||"",e.sub=t[1]||""),e}var s=0
function l(t,e){var n=i.slice(arguments,2)
return this.superClass.prototype[e].apply(t,n)}function u(t,e,n){return this.superClass.prototype[e].apply(t,n)}e.parseClassType=o,e.enableClassExtend=function(t,e){t.$constructor=t,t.extend=function(t){var e=this,n=function(){t.$constructor?t.$constructor.apply(this,arguments):e.apply(this,arguments)}
return i.extend(n.prototype,t),n.extend=this.extend,n.superCall=l,n.superApply=u,i.inherits(n,this),n.superClass=e,n}},e.enableClassCheck=function(t){var e=["__\0is_clz",s++,Math.random().toFixed(3)].join("_")
t.prototype[e]=!0,t.isInstance=function(t){return!(!t||!t[e])}},e.enableClassManagement=function(t,e){e=e||{}
var n={}
if(t.registerClass=function(t,e){return e&&(function(t){i.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t),'componentType "'+t+'" illegal')}(e),(e=o(e)).sub?e.sub!==a&&((function(t){var e=n[t.main]
return e&&e[a]||((e=n[t.main]={})[a]=!0),e}(e))[e.sub]=t):n[e.main]=t),t},t.getClass=function(t,e,i){var r=n[t]
if(r&&r[a]&&(r=e?r[e]:null),i&&!r)throw new Error(e?"Component "+t+"."+(e||"")+" not exists. Load it first.":t+".type should be specified.")
return r},t.getClassesByMainType=function(t){t=o(t)
var e=[],r=n[t.main]
return r&&r[a]?i.each(r,function(t,n){n!==a&&e.push(t)}):e.push(r),e},t.hasClass=function(t){return t=o(t),!!n[t.main]},t.getAllClassMainTypes=function(){var t=[]
return i.each(n,function(e,n){t.push(n)}),t},t.hasSubTypes=function(t){t=o(t)
var e=n[t.main]
return e&&e[a]},t.parseClassType=o,e.registerWhenExtend){var r=t.extend
r&&(t.extend=function(e){var n=r.call(this,e)
return t.registerClass(n,e.type)})}return t},e.setReadOnly=function(t,e){}},1300:function(t,e,n){var i=n(1288),r=n(1298),a=n(1317),o=n(1299),s=o.enableClassManagement,l=o.parseClassType,u=n(1289).makeInner,h=n(1304),c=n(1414),f=u(),d=r.extend({type:"component",id:"",name:"",mainType:"",subType:"",componentIndex:0,defaultOption:null,ecModel:null,dependentModels:[],uid:null,layoutMode:null,$constructor:function(t,e,n,i){r.call(this,t,e,n,i),this.uid=a.getUID("ec_cpt_model")},init:function(t,e,n,i){this.mergeDefaultAndTheme(t,n)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,r=n?h.getLayoutParams(t):{},a=e.getTheme()
i.merge(t,a.get(this.mainType)),i.merge(t,this.getDefaultOption()),n&&h.mergeLayoutParam(t,r,n)},mergeOption:function(t,e){i.merge(this.option,t,!0)
var n=this.layoutMode
n&&h.mergeLayoutParam(this.option,t,n)},optionUpdated:function(t,e){},getDefaultOption:function(){var t=f(this)
if(!t.defaultOption){for(var e=[],n=this.constructor;n;){var r=n.prototype.defaultOption
r&&e.push(r),n=n.superClass}for(var a={},o=e.length-1;o>=0;o--)a=i.merge(a,e[o],!0)
t.defaultOption=a}return t.defaultOption},getReferringComponents:function(t){return this.ecModel.queryComponents({mainType:t,index:this.get(t+"Index",!0),id:this.get(t+"Id",!0)})}})
s(d,{registerWhenExtend:!0}),a.enableSubTypeDefaulter(d),a.enableTopologicalTravel(d,function(t){var e=[]
return i.each(d.getClassesByMainType(t),function(t){e=e.concat(t.prototype.dependencies||[])}),e=i.map(e,function(t){return l(t).main}),"dataset"!==t&&i.indexOf(e,"dataset")<=0&&e.unshift("dataset"),e}),i.mixin(d,c)
var p=d
t.exports=p},1301:function(t,e){var n="undefined"==typeof Float32Array?Array:Float32Array
function i(){var t=new n(6)
return r(t),t}function r(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function a(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}e.create=i,e.identity=r,e.copy=a,e.mul=function(t,e,n){var i=e[0]*n[0]+e[2]*n[1],r=e[1]*n[0]+e[3]*n[1],a=e[0]*n[2]+e[2]*n[3],o=e[1]*n[2]+e[3]*n[3],s=e[0]*n[4]+e[2]*n[5]+e[4],l=e[1]*n[4]+e[3]*n[5]+e[5]
return t[0]=i,t[1]=r,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t},e.translate=function(t,e,n){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4]+n[0],t[5]=e[5]+n[1],t},e.rotate=function(t,e,n){var i=e[0],r=e[2],a=e[4],o=e[1],s=e[3],l=e[5],u=Math.sin(n),h=Math.cos(n)
return t[0]=i*h+o*u,t[1]=-i*u+o*h,t[2]=r*h+s*u,t[3]=-r*u+h*s,t[4]=h*a+u*l,t[5]=h*l-u*a,t},e.scale=function(t,e,n){var i=n[0],r=n[1]
return t[0]=e[0]*i,t[1]=e[1]*r,t[2]=e[2]*i,t[3]=e[3]*r,t[4]=e[4]*i,t[5]=e[5]*r,t},e.invert=function(t,e){var n=e[0],i=e[2],r=e[4],a=e[1],o=e[3],s=e[5],l=n*o-a*i
return l?(l=1/l,t[0]=o*l,t[1]=-a*l,t[2]=-i*l,t[3]=n*l,t[4]=(i*s-o*r)*l,t[5]=(a*r-n*s)*l,t):null},e.clone=function(t){var e=i()
return a(e,t),e}},1302:function(t,e,n){var i=n(1296),r=n(1322),a=n(1288),o=a.getContext,s=a.extend,l=a.retrieve2,u=a.retrieve3,h=a.trim,c={},f=0,d=5e3,p=/\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,g="12px sans-serif",m={}
function v(t,e){var n=t+":"+(e=e||g)
if(c[n])return c[n]
for(var i=(t+"").split("\n"),r=0,a=0,o=i.length;a<o;a++)r=Math.max(T(i[a],e).width,r)
return f>d&&(f=0,c={}),f++,c[n]=r,r}function y(t,e,n){return"right"===n?t-=e:"center"===n&&(t-=e/2),t}function x(t,e,n){return"middle"===n?t-=e/2:"bottom"===n&&(t-=e),t}function _(t,e,n,i,r){if(!e)return""
var a=(t+"").split("\n")
r=b(e,n,i,r)
for(var o=0,s=a.length;o<s;o++)a[o]=w(a[o],r)
return a.join("\n")}function b(t,e,n,i){(i=s({},i)).font=e,n=l(n,"..."),i.maxIterations=l(i.maxIterations,2)
var r=i.minChar=l(i.minChar,0)
i.cnCharWidth=v("国",e)
var a=i.ascCharWidth=v("a",e)
i.placeholder=l(i.placeholder,"")
for(var o=t=Math.max(0,t-1),u=0;u<r&&o>=a;u++)o-=a
var h=v(n)
return h>o&&(n="",h=0),o=t-h,i.ellipsis=n,i.ellipsisWidth=h,i.contentWidth=o,i.containerWidth=t,i}function w(t,e){var n=e.containerWidth,i=e.font,r=e.contentWidth
if(!n)return""
var a=v(t,i)
if(a<=n)return t
for(var o=0;;o++){if(a<=r||o>=e.maxIterations){t+=e.ellipsis
break}var s=0===o?S(t,r,e.ascCharWidth,e.cnCharWidth):a>0?Math.floor(t.length*r/a):0
a=v(t=t.substr(0,s),i)}return""===t&&(t=e.placeholder),t}function S(t,e,n,i){for(var r=0,a=0,o=t.length;a<o&&r<e;a++){var s=t.charCodeAt(a)
r+=0<=s&&s<=127?n:i}return a}function M(t){return v("国",t)}function T(t,e){return m.measureText(t,e)}function k(t,e,n,i){null!=t&&(t+="")
var r=M(e),a=t?t.split("\n"):[],o=a.length*r,s=o
if(n&&(s+=n[0]+n[2]),t&&i){var l=i.outerHeight,u=i.outerWidth
if(null!=l&&s>l)t="",a=[]
else if(null!=u)for(var h=b(u-(n?n[1]+n[3]:0),e,i.ellipsis,{minChar:i.minChar,placeholder:i.placeholder}),c=0,f=a.length;c<f;c++)a[c]=w(a[c],h)}return{lines:a,height:o,outerHeight:s,lineHeight:r}}function D(t,e){var n={lines:[],width:0,height:0}
if(null!=t&&(t+=""),!t)return n
for(var i,a=p.lastIndex=0;null!=(i=p.exec(t));){var o=i.index
o>a&&C(n,t.substring(a,o)),C(n,i[2],i[1]),a=p.lastIndex}a<t.length&&C(n,t.substring(a,t.length))
var s=n.lines,h=0,c=0,f=[],d=e.textPadding,g=e.truncate,m=g&&g.outerWidth,y=g&&g.outerHeight
d&&(null!=m&&(m-=d[1]+d[3]),null!=y&&(y-=d[0]+d[2]))
for(var x=0;x<s.length;x++){for(var b=s[x],w=0,S=0,T=0;T<b.tokens.length;T++){var k=(z=b.tokens[T]).styleName&&e.rich[z.styleName]||{},D=z.textPadding=k.textPadding,A=z.font=k.font||e.font,I=z.textHeight=l(k.textHeight,M(A))
if(D&&(I+=D[0]+D[2]),z.height=I,z.lineHeight=u(k.textLineHeight,e.textLineHeight,I),z.textAlign=k&&k.textAlign||e.textAlign,z.textVerticalAlign=k&&k.textVerticalAlign||"middle",null!=y&&h+z.lineHeight>y)return{lines:[],width:0,height:0}
z.textWidth=v(z.text,A)
var O=k.textWidth,P=null==O||"auto"===O
if("string"==typeof O&&"%"===O.charAt(O.length-1))z.percentWidth=O,f.push(z),O=0
else{if(P){O=z.textWidth
var L=k.textBackgroundColor,E=L&&L.image
E&&(E=r.findExistImage(E),r.isImageReady(E)&&(O=Math.max(O,E.width*I/E.height)))}var R=D?D[1]+D[3]:0
O+=R
var N=null!=m?m-S:null
null!=N&&N<O&&(!P||N<R?(z.text="",z.textWidth=O=0):(z.text=_(z.text,N-R,A,g.ellipsis,{minChar:g.minChar}),z.textWidth=v(z.text,A),O=z.textWidth+R))}S+=z.width=O,k&&(w=Math.max(w,z.lineHeight))}b.width=S,b.lineHeight=w,h+=w,c=Math.max(c,S)}for(n.outerWidth=n.width=l(e.textWidth,c),n.outerHeight=n.height=l(e.textHeight,h),d&&(n.outerWidth+=d[1]+d[3],n.outerHeight+=d[0]+d[2]),x=0;x<f.length;x++){var z,B=(z=f[x]).percentWidth
z.width=parseInt(B,10)/100*c}return n}function C(t,e,n){for(var i=""===e,r=e.split("\n"),a=t.lines,o=0;o<r.length;o++){var s=r[o],l={styleName:n,text:s,isLineHolder:!s&&!i}
if(o)a.push({tokens:[l]})
else{var u=(a[a.length-1]||(a[0]={tokens:[]})).tokens,h=u.length
1===h&&u[0].isLineHolder?u[0]=l:(s||!h||i)&&u.push(l)}}}m.measureText=function(t,e){var n=o()
return n.font=e||g,n.measureText(t)},e.DEFAULT_FONT=g,e.$override=function(t,e){m[t]=e},e.getWidth=v,e.getBoundingRect=function(t,e,n,r,a,o,s){return o?function(t,e,n,r,a,o,s){var l=D(t,{rich:o,truncate:s,font:e,textAlign:n,textPadding:a}),u=l.outerWidth,h=l.outerHeight,c=y(0,u,n),f=x(0,h,r)
return new i(c,f,u,h)}(t,e,n,r,a,o,s):function(t,e,n,r,a,o){var s=k(t,e,a,o),l=v(t,e)
a&&(l+=a[1]+a[3])
var u=s.outerHeight,h=y(0,l,n),c=x(0,u,r),f=new i(h,c,l,u)
return f.lineHeight=s.lineHeight,f}(t,e,n,r,a,s)},e.adjustTextX=y,e.adjustTextY=x,e.adjustTextPositionOnRect=function(t,e,n){var i=e.x,r=e.y,a=e.height,o=e.width,s=a/2,l="left",u="top"
switch(t){case"left":i-=n,r+=s,l="right",u="middle"
break
case"right":i+=n+o,r+=s,u="middle"
break
case"top":i+=o/2,r-=n,l="center",u="bottom"
break
case"bottom":i+=o/2,r+=a+n,l="center"
break
case"inside":i+=o/2,r+=s,l="center",u="middle"
break
case"insideLeft":i+=n,r+=s,u="middle"
break
case"insideRight":i+=o-n,r+=s,l="right",u="middle"
break
case"insideTop":i+=o/2,r+=n,l="center"
break
case"insideBottom":i+=o/2,r+=a-n,l="center",u="bottom"
break
case"insideTopLeft":i+=n,r+=n
break
case"insideTopRight":i+=o-n,r+=n,l="right"
break
case"insideBottomLeft":i+=n,r+=a-n,u="bottom"
break
case"insideBottomRight":i+=o-n,r+=a-n,l="right",u="bottom"}return{x:i,y:r,textAlign:l,textVerticalAlign:u}},e.truncateText=_,e.getLineHeight=M,e.measureText=T,e.parsePlainText=k,e.parseRichText=D,e.makeFont=function(t){var e=(t.fontSize||t.fontFamily)&&[t.fontStyle,t.fontWeight,(t.fontSize||12)+"px",t.fontFamily||"sans-serif"].join(" ")
return e&&h(e)||t.textFont||t.font}},1303:function(t,e,n){var i=n(1291),r=i.create,a=i.distSquare,o=Math.pow,s=Math.sqrt,l=1e-8,u=s(3),h=1/3,c=r(),f=r(),d=r()
function p(t){return t>-l&&t<l}function g(t){return t>l||t<-l}function m(t,e,n,i,r){var a=1-r
return a*a*(a*t+3*r*e)+r*r*(r*i+3*a*n)}function v(t,e,n,i){var r=1-i
return r*(r*t+2*i*e)+i*i*n}e.cubicAt=m,e.cubicDerivativeAt=function(t,e,n,i,r){var a=1-r
return 3*(((e-t)*a+2*(n-e)*r)*a+(i-n)*r*r)},e.cubicRootAt=function(t,e,n,i,r,a){var l=i+3*(e-n)-t,c=3*(n-2*e+t),f=3*(e-t),d=t-r,g=c*c-3*l*f,m=c*f-9*l*d,v=f*f-3*c*d,y=0
if(p(g)&&p(m))p(c)?a[0]=0:(A=-f/c)>=0&&A<=1&&(a[y++]=A)
else{var x=m*m-4*g*v
if(p(x)){var _=m/g,b=-_/2;(A=-c/l+_)>=0&&A<=1&&(a[y++]=A),b>=0&&b<=1&&(a[y++]=b)}else if(x>0){var w=s(x),S=g*c+1.5*l*(-m+w),M=g*c+1.5*l*(-m-w);(A=(-c-((S=S<0?-o(-S,h):o(S,h))+(M=M<0?-o(-M,h):o(M,h))))/(3*l))>=0&&A<=1&&(a[y++]=A)}else{var T=(2*g*c-3*l*m)/(2*s(g*g*g)),k=Math.acos(T)/3,D=s(g),C=Math.cos(k),A=(-c-2*D*C)/(3*l),I=(b=(-c+D*(C+u*Math.sin(k)))/(3*l),(-c+D*(C-u*Math.sin(k)))/(3*l))
A>=0&&A<=1&&(a[y++]=A),b>=0&&b<=1&&(a[y++]=b),I>=0&&I<=1&&(a[y++]=I)}}return y},e.cubicExtrema=function(t,e,n,i,r){var a=6*n-12*e+6*t,o=9*e+3*i-3*t-9*n,l=3*e-3*t,u=0
if(p(o))g(a)&&(c=-l/a)>=0&&c<=1&&(r[u++]=c)
else{var h=a*a-4*o*l
if(p(h))r[0]=-a/(2*o)
else if(h>0){var c,f=s(h),d=(-a-f)/(2*o);(c=(-a+f)/(2*o))>=0&&c<=1&&(r[u++]=c),d>=0&&d<=1&&(r[u++]=d)}}return u},e.cubicSubdivide=function(t,e,n,i,r,a){var o=(e-t)*r+t,s=(n-e)*r+e,l=(i-n)*r+n,u=(s-o)*r+o,h=(l-s)*r+s,c=(h-u)*r+u
a[0]=t,a[1]=o,a[2]=u,a[3]=c,a[4]=c,a[5]=h,a[6]=l,a[7]=i},e.cubicProjectPoint=function(t,e,n,i,r,o,l,u,h,p,g){var v,y,x,_,b,w=.005,S=1/0
c[0]=h,c[1]=p
for(var M=0;M<1;M+=.05)f[0]=m(t,n,r,l,M),f[1]=m(e,i,o,u,M),(_=a(c,f))<S&&(v=M,S=_)
S=1/0
for(var T=0;T<32&&!(w<1e-4);T++)y=v-w,x=v+w,f[0]=m(t,n,r,l,y),f[1]=m(e,i,o,u,y),_=a(f,c),y>=0&&_<S?(v=y,S=_):(d[0]=m(t,n,r,l,x),d[1]=m(e,i,o,u,x),b=a(d,c),x<=1&&b<S?(v=x,S=b):w*=.5)
return g&&(g[0]=m(t,n,r,l,v),g[1]=m(e,i,o,u,v)),s(S)},e.quadraticAt=v,e.quadraticDerivativeAt=function(t,e,n,i){return 2*((1-i)*(e-t)+i*(n-e))},e.quadraticRootAt=function(t,e,n,i,r){var a=t-2*e+n,o=2*(e-t),l=t-i,u=0
if(p(a))g(o)&&(c=-l/o)>=0&&c<=1&&(r[u++]=c)
else{var h=o*o-4*a*l
if(p(h))(c=-o/(2*a))>=0&&c<=1&&(r[u++]=c)
else if(h>0){var c,f=s(h),d=(-o-f)/(2*a);(c=(-o+f)/(2*a))>=0&&c<=1&&(r[u++]=c),d>=0&&d<=1&&(r[u++]=d)}}return u},e.quadraticExtremum=function(t,e,n){var i=t+n-2*e
return 0===i?.5:(t-e)/i},e.quadraticSubdivide=function(t,e,n,i,r){var a=(e-t)*i+t,o=(n-e)*i+e,s=(o-a)*i+a
r[0]=t,r[1]=a,r[2]=s,r[3]=s,r[4]=o,r[5]=n},e.quadraticProjectPoint=function(t,e,n,i,r,o,l,u,h){var p,g=.005,m=1/0
c[0]=l,c[1]=u
for(var y=0;y<1;y+=.05)f[0]=v(t,n,r,y),f[1]=v(e,i,o,y),(w=a(c,f))<m&&(p=y,m=w)
m=1/0
for(var x=0;x<32&&!(g<1e-4);x++){var _=p-g,b=p+g
f[0]=v(t,n,r,_),f[1]=v(e,i,o,_)
var w=a(f,c)
if(_>=0&&w<m)p=_,m=w
else{d[0]=v(t,n,r,b),d[1]=v(e,i,o,b)
var S=a(d,c)
b<=1&&S<m?(p=b,m=S):g*=.5}}return h&&(h[0]=v(t,n,r,p),h[1]=v(e,i,o,p)),s(m)}},1304:function(t,e,n){var i=n(1288),r=n(1296),a=n(1293).parsePercent,o=n(1297),s=i.each,l=["left","right","top","bottom","width","height"],u=[["width","left","right"],["height","top","bottom"]]
function h(t,e,n,i,r){var a=0,o=0
null==i&&(i=1/0),null==r&&(r=1/0)
var s=0
e.eachChild(function(l,u){var h,c,f=l.position,d=l.getBoundingRect(),p=e.childAt(u+1),g=p&&p.getBoundingRect()
if("horizontal"===t){var m=d.width+(g?-g.x+d.x:0);(h=a+m)>i||l.newline?(a=0,h=m,o+=s+n,s=d.height):s=Math.max(s,d.height)}else{var v=d.height+(g?-g.y+d.y:0);(c=o+v)>r||l.newline?(a+=s+n,o=0,c=v,s=d.width):s=Math.max(s,d.width)}l.newline||(f[0]=a,f[1]=o,"horizontal"===t?a=h+n:o=c+n)})}var c=h,f=i.curry(h,"vertical"),d=i.curry(h,"horizontal")
function p(t,e,n){n=o.normalizeCssArray(n||0)
var i=e.width,s=e.height,l=a(t.left,i),u=a(t.top,s),h=a(t.right,i),c=a(t.bottom,s),f=a(t.width,i),d=a(t.height,s),p=n[2]+n[0],g=n[1]+n[3],m=t.aspect
switch(isNaN(f)&&(f=i-h-g-l),isNaN(d)&&(d=s-c-p-u),null!=m&&(isNaN(f)&&isNaN(d)&&(m>i/s?f=.8*i:d=.8*s),isNaN(f)&&(f=m*d),isNaN(d)&&(d=f/m)),isNaN(l)&&(l=i-h-f-g),isNaN(u)&&(u=s-c-d-p),t.left||t.right){case"center":l=i/2-f/2-n[3]
break
case"right":l=i-f-g}switch(t.top||t.bottom){case"middle":case"center":u=s/2-d/2-n[0]
break
case"bottom":u=s-d-p}l=l||0,u=u||0,isNaN(f)&&(f=i-g-l-(h||0)),isNaN(d)&&(d=s-p-u-(c||0))
var v=new r(l+n[3],u+n[0],f,d)
return v.margin=n,v}function g(t,e){return e&&t&&s(l,function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t}e.LOCATION_PARAMS=l,e.HV_NAMES=u,e.box=c,e.vbox=f,e.hbox=d,e.getAvailableSize=function(t,e,n){var i=e.width,r=e.height,s=a(t.x,i),l=a(t.y,r),u=a(t.x2,i),h=a(t.y2,r)
return(isNaN(s)||isNaN(parseFloat(t.x)))&&(s=0),(isNaN(u)||isNaN(parseFloat(t.x2)))&&(u=i),(isNaN(l)||isNaN(parseFloat(t.y)))&&(l=0),(isNaN(h)||isNaN(parseFloat(t.y2)))&&(h=r),n=o.normalizeCssArray(n||0),{width:Math.max(u-s-n[1]-n[3],0),height:Math.max(h-l-n[0]-n[2],0)}},e.getLayoutRect=p,e.positionElement=function(t,e,n,a,o){var s=!o||!o.hv||o.hv[0],l=!o||!o.hv||o.hv[1],u=o&&o.boundingMode||"all"
if(s||l){var h
if("raw"===u)h="group"===t.type?new r(0,0,+e.width||0,+e.height||0):t.getBoundingRect()
else if(h=t.getBoundingRect(),t.needLocalTransform()){var c=t.getLocalTransform();(h=h.clone()).applyTransform(c)}e=p(i.defaults({width:h.width,height:h.height},e),n,a)
var f=t.position,d=s?e.x-h.x:0,g=l?e.y-h.y:0
t.attr("position","raw"===u?[d,g]:[f[0]+d,f[1]+g])}},e.sizeCalculable=function(t,e){return null!=t[u[e][0]]||null!=t[u[e][1]]&&null!=t[u[e][2]]},e.mergeLayoutParam=function(t,e,n){!i.isObject(n)&&(n={})
var r=n.ignoreSize
!i.isArray(r)&&(r=[r,r])
var a=l(u[0],0),o=l(u[1],1)
function l(n,i){var a={},o=0,l={},u=0
if(s(n,function(e){l[e]=t[e]}),s(n,function(t){h(e,t)&&(a[t]=l[t]=e[t]),c(a,t)&&o++,c(l,t)&&u++}),r[i])return c(e,n[1])?l[n[2]]=null:c(e,n[2])&&(l[n[1]]=null),l
if(2!==u&&o){if(o>=2)return a
for(var f=0;f<n.length;f++){var d=n[f]
if(!h(a,d)&&h(t,d)){a[d]=t[d]
break}}return a}return l}function h(t,e){return t.hasOwnProperty(e)}function c(t,e){return null!=t[e]&&"auto"!==t[e]}function f(t,e,n){s(t,function(t){e[t]=n[t]})}f(u[0],t,a),f(u[1],t,o)},e.getLayoutParams=function(t){return g({},t)},e.copyLayoutParams=g},1305:function(t,e,n){var i=n(1288),r=i.each,a=i.isString
function o(t,e){return!!e&&e===t.getCalculationInfo("stackedDimension")}e.enableDataStack=function(t,e,n){var i,o,s,l,u=(n=n||{}).byIndex,h=n.stackedCoordDimension,c=!(!t||!t.get("stack"))
if(r(e,function(t,n){a(t)&&(e[n]=t={name:t}),c&&!t.isExtraCoord&&(u||i||!t.ordinalMeta||(i=t),o||"ordinal"===t.type||"time"===t.type||h&&h!==t.coordDim||(o=t))}),!o||u||i||(u=!0),o){s="__\0ecstackresult",l="__\0ecstackedover",i&&(i.createInvertedIndices=!0)
var f=o.coordDim,d=o.type,p=0
r(e,function(t){t.coordDim===f&&p++}),e.push({name:s,coordDim:f,coordDimIndex:p,type:d,isExtraCoord:!0,isCalculationCoord:!0}),p++,e.push({name:l,coordDim:l,coordDimIndex:p,type:d,isExtraCoord:!0,isCalculationCoord:!0})}return{stackedDimension:o&&o.name,stackedByDimension:i&&i.name,isStackedByIndex:u,stackedOverDimension:l,stackResultDimension:s}},e.isDimensionStacked=o,e.getStackedDimension=function(t,e){return o(t,e)?t.getCalculationInfo("stackResultDimension"):e}},1306:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=n(1432),a=n(1330),o=n(1319),s=n(1293),l=n(1433),u=l.prepareLayoutBarSeries,h=l.makeColumnLayout,c=l.retrieveColumnLayout,f=n(1296)
function d(t,e){var n,r,a,o=t.type,l=e.getMin(),f=e.getMax(),d=null!=l,p=null!=f,g=t.getExtent()
"ordinal"===o?n=e.getCategories().length:(r=e.get("boundaryGap"),i.isArray(r)||(r=[r||0,r||0]),"boolean"==typeof r[0]&&(r=[0,0]),r[0]=s.parsePercent(r[0],1),r[1]=s.parsePercent(r[1],1),a=g[1]-g[0]||Math.abs(g[0])),null==l&&(l="ordinal"===o?n?0:NaN:g[0]-r[0]*a),null==f&&(f="ordinal"===o?n?n-1:NaN:g[1]+r[1]*a),"dataMin"===l?l=g[0]:"function"==typeof l&&(l=l({min:g[0],max:g[1]})),"dataMax"===f?f=g[1]:"function"==typeof f&&(f=f({min:g[0],max:g[1]})),(null==l||!isFinite(l))&&(l=NaN),(null==f||!isFinite(f))&&(f=NaN),t.setBlank(i.eqNaN(l)||i.eqNaN(f)||"ordinal"===o&&!t.getOrdinalMeta().categories.length),e.getNeedCrossZero()&&(l>0&&f>0&&!d&&(l=0),l<0&&f<0&&!p&&(f=0))
var m=e.ecModel
if(m&&"time"===o){var v,y=u("bar",m)
if(i.each(y,function(t){v|=t.getBaseAxis()===e.axis}),v){var x=h(y),_=function(t,e,n,r){var a=n.axis.getExtent(),o=a[1]-a[0],s=c(r,n.axis)
if(void 0===s)return{min:t,max:e}
var l=1/0
i.each(s,function(t){l=Math.min(t.offset,l)})
var u=-1/0
i.each(s,function(t){u=Math.max(t.offset+t.width,u)}),l=Math.abs(l),u=Math.abs(u)
var h=l+u,f=e-t,d=f/(1-(l+u)/o)-f
return{min:t-=d*(l/h),max:e+=d*(u/h)}}(l,f,e,x)
l=_.min,f=_.max}}return[l,f]}function p(t){var e=t.getLabelModel().get("formatter"),n="category"===t.type?t.scale.getExtent()[0]:null
return"string"==typeof e?e=function(t){return function(e){return t.replace("{value}",null!=e?e:"")}}(e):"function"==typeof e?function(i,r){return null!=n&&(r=i-n),e(g(t,i),r)}:function(e){return t.scale.getLabel(e)}}function g(t,e){return"category"===t.type?t.scale.getLabel(e):e}function m(t,e){var n=e*Math.PI/180,i=t.plain(),r=i.width,a=i.height,o=r*Math.cos(n)+a*Math.sin(n),s=r*Math.sin(n)+a*Math.cos(n)
return new f(i.x,i.y,o,s)}n(1434),n(1435),e.getScaleExtent=d,e.niceScaleExtent=function(t,e){var n=d(t,e),i=null!=e.getMin(),r=null!=e.getMax(),a=e.get("splitNumber")
"log"===t.type&&(t.base=e.get("logBase"))
var o=t.type
t.setExtent(n[0],n[1]),t.niceExtent({splitNumber:a,fixMin:i,fixMax:r,minInterval:"interval"===o||"time"===o?e.get("minInterval"):null,maxInterval:"interval"===o||"time"===o?e.get("maxInterval"):null})
var s=e.get("interval")
null!=s&&t.setInterval&&t.setInterval(s)},e.createScaleByModel=function(t,e){if(e=e||t.get("type"))switch(e){case"category":return new r(t.getOrdinalMeta?t.getOrdinalMeta():t.getCategories(),[1/0,-1/0])
case"value":return new a
default:return(o.getClass(e)||a).create(t)}},e.ifAxisCrossZero=function(t){var e=t.scale.getExtent(),n=e[0],i=e[1]
return!(n>0&&i>0||n<0&&i<0)},e.makeLabelFormatter=p,e.getAxisRawValue=g,e.estimateLabelUnionRect=function(t){var e=t.model,n=t.scale
if(e.get("axisLabel.show")&&!n.isBlank()){var i,r,a="category"===t.type,o=n.getExtent()
r=a?n.count():(i=n.getTicks()).length
var s,l=t.getLabelModel(),u=p(t),h=1
r>40&&(h=Math.ceil(r/40))
for(var c=0;c<r;c+=h){var f=u(i?i[c]:o[0]+c),d=m(l.getTextRect(f),l.get("rotate")||0)
s?s.union(d):s=d}return s}}},1307:function(t,e){var n=Array.prototype.slice,i=function(){this._$handlers={}}
i.prototype={constructor:i,one:function(t,e,n){var i=this._$handlers
if(!e||!t)return this
i[t]||(i[t]=[])
for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this
return i[t].push({h:e,one:!0,ctx:n||this}),this},on:function(t,e,n){var i=this._$handlers
if(!e||!t)return this
i[t]||(i[t]=[])
for(var r=0;r<i[t].length;r++)if(i[t][r].h===e)return this
return i[t].push({h:e,one:!1,ctx:n||this}),this},isSilent:function(t){var e=this._$handlers
return e[t]&&e[t].length},off:function(t,e){var n=this._$handlers
if(!t)return this._$handlers={},this
if(e){if(n[t]){for(var i=[],r=0,a=n[t].length;r<a;r++)n[t][r].h!=e&&i.push(n[t][r])
n[t]=i}n[t]&&0===n[t].length&&delete n[t]}else delete n[t]
return this},trigger:function(t){if(this._$handlers[t]){var e=arguments,i=e.length
i>3&&(e=n.call(e,1))
for(var r=this._$handlers[t],a=r.length,o=0;o<a;){switch(i){case 1:r[o].h.call(r[o].ctx)
break
case 2:r[o].h.call(r[o].ctx,e[1])
break
case 3:r[o].h.call(r[o].ctx,e[1],e[2])
break
default:r[o].h.apply(r[o].ctx,e)}r[o].one?(r.splice(o,1),a--):o++}}return this},triggerWithContext:function(t){if(this._$handlers[t]){var e=arguments,i=e.length
i>4&&(e=n.call(e,1,e.length-1))
for(var r=e[e.length-1],a=this._$handlers[t],o=a.length,s=0;s<o;){switch(i){case 1:a[s].h.call(r)
break
case 2:a[s].h.call(r,e[1])
break
case 3:a[s].h.call(r,e[1],e[2])
break
default:a[s].h.apply(r,e)}a[s].one?(a.splice(s,1),o--):s++}}return this}}
var r=i
t.exports=r},1308:function(t,e,n){var i={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]}
function r(t){return(t=Math.round(t))<0?0:t>255?255:t}function a(t){return t<0?0:t>1?1:t}function o(t){return t.length&&"%"===t.charAt(t.length-1)?r(parseFloat(t)/100*255):r(parseInt(t,10))}function s(t){return t.length&&"%"===t.charAt(t.length-1)?a(parseFloat(t)/100):a(parseFloat(t))}function l(t,e,n){return n<0?n+=1:n>1&&(n-=1),6*n<1?t+(e-t)*n*6:2*n<1?e:3*n<2?t+(e-t)*(2/3-n)*6:t}function u(t,e,n){return t+(e-t)*n}function h(t,e,n,i,r){return t[0]=e,t[1]=n,t[2]=i,t[3]=r,t}function c(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}var f=new(n(1337))(20),d=null
function p(t,e){d&&c(d,e),d=f.put(t,d||e.slice())}function g(t,e){if(t){e=e||[]
var n=f.get(t)
if(n)return c(e,n)
var r,a=(t+="").replace(/ /g,"").toLowerCase()
if(a in i)return c(e,i[a]),p(t,e),e
if("#"===a.charAt(0))return 4===a.length?(r=parseInt(a.substr(1),16))>=0&&r<=4095?(h(e,(3840&r)>>4|(3840&r)>>8,240&r|(240&r)>>4,15&r|(15&r)<<4,1),p(t,e),e):void h(e,0,0,0,1):7===a.length?(r=parseInt(a.substr(1),16))>=0&&r<=16777215?(h(e,(16711680&r)>>16,(65280&r)>>8,255&r,1),p(t,e),e):void h(e,0,0,0,1):void 0
var l=a.indexOf("("),u=a.indexOf(")")
if(-1!==l&&u+1===a.length){var d=a.substr(0,l),g=a.substr(l+1,u-(l+1)).split(","),v=1
switch(d){case"rgba":if(4!==g.length)return void h(e,0,0,0,1)
v=s(g.pop())
case"rgb":return 3!==g.length?void h(e,0,0,0,1):(h(e,o(g[0]),o(g[1]),o(g[2]),v),p(t,e),e)
case"hsla":return 4!==g.length?void h(e,0,0,0,1):(g[3]=s(g[3]),m(g,e),p(t,e),e)
case"hsl":return 3!==g.length?void h(e,0,0,0,1):(m(g,e),p(t,e),e)
default:return}}h(e,0,0,0,1)}}function m(t,e){var n=(parseFloat(t[0])%360+360)%360/360,i=s(t[1]),a=s(t[2]),o=a<=.5?a*(i+1):a+i-a*i,u=2*a-o
return h(e=e||[],r(255*l(u,o,n+1/3)),r(255*l(u,o,n)),r(255*l(u,o,n-1/3)),1),4===t.length&&(e[3]=t[3]),e}function v(t,e,n){if(e&&e.length&&t>=0&&t<=1){n=n||[]
var i=t*(e.length-1),o=Math.floor(i),s=Math.ceil(i),l=e[o],h=e[s],c=i-o
return n[0]=r(u(l[0],h[0],c)),n[1]=r(u(l[1],h[1],c)),n[2]=r(u(l[2],h[2],c)),n[3]=a(u(l[3],h[3],c)),n}}var y=v
function x(t,e,n){if(e&&e.length&&t>=0&&t<=1){var i=t*(e.length-1),o=Math.floor(i),s=Math.ceil(i),l=g(e[o]),h=g(e[s]),c=i-o,f=b([r(u(l[0],h[0],c)),r(u(l[1],h[1],c)),r(u(l[2],h[2],c)),a(u(l[3],h[3],c))],"rgba")
return n?{color:f,leftIndex:o,rightIndex:s,value:i}:f}}var _=x
function b(t,e){if(t&&t.length){var n=t[0]+","+t[1]+","+t[2]
return"rgba"!==e&&"hsva"!==e&&"hsla"!==e||(n+=","+t[3]),e+"("+n+")"}}e.parse=g,e.lift=function(t,e){var n=g(t)
if(n){for(var i=0;i<3;i++)n[i]=e<0?n[i]*(1-e)|0:(255-n[i])*e+n[i]|0,n[i]>255?n[i]=255:t[i]<0&&(n[i]=0)
return b(n,4===n.length?"rgba":"rgb")}},e.toHex=function(t){var e=g(t)
if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1)},e.fastLerp=v,e.fastMapToColor=y,e.lerp=x,e.mapToColor=_,e.modifyHSL=function(t,e,n,i){if(t=g(t))return t=function(t){if(t){var e,n,i=t[0]/255,r=t[1]/255,a=t[2]/255,o=Math.min(i,r,a),s=Math.max(i,r,a),l=s-o,u=(s+o)/2
if(0===l)e=0,n=0
else{n=u<.5?l/(s+o):l/(2-s-o)
var h=((s-i)/6+l/2)/l,c=((s-r)/6+l/2)/l,f=((s-a)/6+l/2)/l
i===s?e=f-c:r===s?e=1/3+h-f:a===s&&(e=2/3+c-h),e<0&&(e+=1),e>1&&(e-=1)}var d=[360*e,n,u]
return null!=t[3]&&d.push(t[3]),d}}(t),null!=e&&(t[0]=function(t){return(t=Math.round(t))<0?0:t>360?360:t}(e)),null!=n&&(t[1]=s(n)),null!=i&&(t[2]=s(i)),b(m(t),"rgba")},e.modifyAlpha=function(t,e){if((t=g(t))&&null!=e)return t[3]=a(e),b(t,"rgba")},e.stringify=b},1309:function(t,e,n){var i=n(1307)
e.Dispatcher=i
var r=n(1294),a="undefined"!=typeof window&&!!window.addEventListener,o=/^(?:mouse|pointer|contextmenu|drag|drop)|click/
function s(t,e,n,i){return n=n||{},i||!r.canvasSupported?l(t,e,n):r.browser.firefox&&null!=e.layerX&&e.layerX!==e.offsetX?(n.zrX=e.layerX,n.zrY=e.layerY):null!=e.offsetX?(n.zrX=e.offsetX,n.zrY=e.offsetY):l(t,e,n),n}function l(t,e,n){var i=function(t){return t.getBoundingClientRect?t.getBoundingClientRect():{left:0,top:0}}(t)
n.zrX=e.clientX-i.left,n.zrY=e.clientY-i.top}var u=a?function(t){t.preventDefault(),t.stopPropagation(),t.cancelBubble=!0}:function(t){t.returnValue=!1,t.cancelBubble=!0}
e.clientToLocal=s,e.normalizeEvent=function(t,e,n){if(null!=(e=e||window.event).zrX)return e
var i=e.type
if(i&&i.indexOf("touch")>=0){var r="touchend"!=i?e.targetTouches[0]:e.changedTouches[0]
r&&s(t,r,e,n)}else s(t,e,e,n),e.zrDelta=e.wheelDelta?e.wheelDelta/120:-(e.detail||0)/3
var a=e.button
return null==e.which&&void 0!==a&&o.test(e.type)&&(e.which=1&a?1:2&a?3:4&a?2:0),e},e.addEventListener=function(t,e,n){a?t.addEventListener(e,n):t.attachEvent("on"+e,n)},e.removeEventListener=function(t,e,n){a?t.removeEventListener(e,n):t.detachEvent("on"+e,n)},e.stop=u,e.notLeftMouse=function(t){return t.which>1}},1310:function(t,e,n){var i=n(1288),r=i.createHashMap,a=i.isTypedArray,o=n(1299).enableClassCheck,s=n(1311),l=s.SOURCE_FORMAT_ORIGINAL,u=s.SERIES_LAYOUT_BY_COLUMN,h=s.SOURCE_FORMAT_UNKNOWN,c=s.SOURCE_FORMAT_TYPED_ARRAY,f=s.SOURCE_FORMAT_KEYED_COLUMNS
function d(t){this.fromDataset=t.fromDataset,this.data=t.data||(t.sourceFormat===f?{}:[]),this.sourceFormat=t.sourceFormat||h,this.seriesLayoutBy=t.seriesLayoutBy||u,this.dimensionsDefine=t.dimensionsDefine,this.encodeDefine=t.encodeDefine&&r(t.encodeDefine),this.startIndex=t.startIndex||0,this.dimensionsDetectCount=t.dimensionsDetectCount}d.seriesDataToSource=function(t){return new d({data:t,sourceFormat:a(t)?c:l,fromDataset:!1})},o(d)
var p=d
t.exports=p},1311:function(t,e){e.SOURCE_FORMAT_ORIGINAL="original",e.SOURCE_FORMAT_ARRAY_ROWS="arrayRows",e.SOURCE_FORMAT_OBJECT_ROWS="objectRows",e.SOURCE_FORMAT_KEYED_COLUMNS="keyedColumns",e.SOURCE_FORMAT_UNKNOWN="unknown",e.SOURCE_FORMAT_TYPED_ARRAY="typedArray",e.SERIES_LAYOUT_BY_COLUMN="column",e.SERIES_LAYOUT_BY_ROW="row"},1312:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=(i.isTypedArray,i.extend),a=(i.assert,i.each),o=i.isObject,s=n(1289),l=s.getDataItemValue,u=s.isDataItemOption,h=n(1293).parseDate,c=n(1310),f=n(1311),d=f.SOURCE_FORMAT_TYPED_ARRAY,p=f.SOURCE_FORMAT_ARRAY_ROWS,g=f.SOURCE_FORMAT_ORIGINAL,m=f.SOURCE_FORMAT_OBJECT_ROWS
function v(t,e){c.isInstance(t)||(t=c.seriesDataToSource(t)),this._source=t
var n=this._data=t.data,i=t.sourceFormat
i===d&&(this._offset=0,this._dimSize=e,this._data=n)
var a=x[i===p?i+"_"+t.seriesLayoutBy:i]
r(this,a)}var y=v.prototype
y.pure=!1,y.persistent=!0,y.getSource=function(){return this._source}
var x={arrayRows_column:{pure:!0,count:function(){return Math.max(0,this._data.length-this._source.startIndex)},getItem:function(t){return this._data[t+this._source.startIndex]},appendData:w},arrayRows_row:{pure:!0,count:function(){var t=this._data[0]
return t?Math.max(0,t.length-this._source.startIndex):0},getItem:function(t){t+=this._source.startIndex
for(var e=[],n=this._data,i=0;i<n.length;i++){var r=n[i]
e.push(r?r[t]:null)}return e},appendData:function(){throw new Error('Do not support appendData when set seriesLayoutBy: "row".')}},objectRows:{pure:!0,count:_,getItem:b,appendData:w},keyedColumns:{pure:!0,count:function(){var t=this._source.dimensionsDefine[0].name,e=this._data[t]
return e?e.length:0},getItem:function(t){for(var e=[],n=this._source.dimensionsDefine,i=0;i<n.length;i++){var r=this._data[n[i].name]
e.push(r?r[t]:null)}return e},appendData:function(t){var e=this._data
a(t,function(t,n){for(var i=e[n]||(e[n]=[]),r=0;r<(t||[]).length;r++)i.push(t[r])})}},original:{count:_,getItem:b,appendData:w},typedArray:{persistent:!1,pure:!0,count:function(){return this._data?this._data.length/this._dimSize:0},getItem:function(t,e){t-=this._offset,e=e||[]
for(var n=this._dimSize*t,i=0;i<this._dimSize;i++)e[i]=this._data[n+i]
return e},appendData:function(t){this._data=t},clean:function(){this._offset+=this.count(),this._data=null}}}
function _(){return this._data.length}function b(t){return this._data[t]}function w(t){for(var e=0;e<t.length;e++)this._data.push(t[e])}var S={arrayRows:M,objectRows:function(t,e,n,i){return null!=n?t[i]:t},keyedColumns:M,original:function(t,e,n,i){var r=l(t)
return null!=n&&r instanceof Array?r[n]:r},typedArray:M}
function M(t,e,n,i){return null!=n?t[n]:t}var T={arrayRows:k,objectRows:function(t,e,n,i){return D(t[e],this._dimensionInfos[e])},keyedColumns:k,original:function(t,e,n,i){var r=t&&(null==t.value?t:t.value)
return!this._rawData.pure&&u(t)&&(this.hasItemOption=!0),D(r instanceof Array?r[i]:r,this._dimensionInfos[e])},typedArray:function(t,e,n,i){return t[i]}}
function k(t,e,n,i){return D(t[i],this._dimensionInfos[e])}function D(t,e){var n=e&&e.type
if("ordinal"===n){var i=e&&e.ordinalMeta
return i?i.parseAndCollect(t):t}return"time"===n&&"number"!=typeof t&&null!=t&&"-"!==t&&(t=+h(t)),null==t||""===t?NaN:+t}e.DefaultDataProvider=v,e.defaultDimValueGetters=T,e.retrieveRawValue=function(t,e,n){if(t){var i=t.getRawDataItem(e)
if(null!=i){var r,a,o=t.getProvider().getSource().sourceFormat,s=t.getDimensionInfo(n)
return s&&(r=s.name,a=s.index),S[o](i,e,a,r)}}},e.retrieveRawAttr=function(t,e,n){if(t){var i=t.getProvider().getSource().sourceFormat
if(i===g||i===m){var r=t.getRawDataItem(e)
return i!==g||o(r)||(r=null),r?r[n]:void 0}}}},1313:function(t,e,n){var i=n(1288),r=n(1334),a=n(1296),o=function(t){for(var e in t=t||{},r.call(this,t),t)t.hasOwnProperty(e)&&(this[e]=t[e])
this._children=[],this.__storage=null,this.__dirty=!0}
o.prototype={constructor:o,isGroup:!0,type:"group",silent:!1,children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},childOfName:function(t){for(var e=this._children,n=0;n<e.length;n++)if(e[n].name===t)return e[n]},childCount:function(){return this._children.length},add:function(t){return t&&t!==this&&t.parent!==this&&(this._children.push(t),this._doAdd(t)),this},addBefore:function(t,e){if(t&&t!==this&&t.parent!==this&&e&&e.parent===this){var n=this._children,i=n.indexOf(e)
i>=0&&(n.splice(i,0,t),this._doAdd(t))}return this},_doAdd:function(t){t.parent&&t.parent.remove(t),t.parent=this
var e=this.__storage,n=this.__zr
e&&e!==t.__storage&&(e.addToStorage(t),t instanceof o&&t.addChildrenToStorage(e)),n&&n.refresh()},remove:function(t){var e=this.__zr,n=this.__storage,r=this._children,a=i.indexOf(r,t)
return a<0?this:(r.splice(a,1),t.parent=null,n&&(n.delFromStorage(t),t instanceof o&&t.delChildrenFromStorage(n)),e&&e.refresh(),this)},removeAll:function(){var t,e,n=this._children,i=this.__storage
for(e=0;e<n.length;e++)t=n[e],i&&(i.delFromStorage(t),t instanceof o&&t.delChildrenFromStorage(i)),t.parent=null
return n.length=0,this},eachChild:function(t,e){for(var n=this._children,i=0;i<n.length;i++){var r=n[i]
t.call(e,r,i)}return this},traverse:function(t,e){for(var n=0;n<this._children.length;n++){var i=this._children[n]
t.call(e,i),"group"===i.type&&i.traverse(t,e)}return this},addChildrenToStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e]
t.addToStorage(n),n instanceof o&&n.addChildrenToStorage(t)}},delChildrenFromStorage:function(t){for(var e=0;e<this._children.length;e++){var n=this._children[e]
t.delFromStorage(n),n instanceof o&&n.delChildrenFromStorage(t)}},dirty:function(){return this.__dirty=!0,this.__zr&&this.__zr.refresh(),this},getBoundingRect:function(t){for(var e=null,n=new a(0,0,0,0),i=t||this._children,r=[],o=0;o<i.length;o++){var s=i[o]
if(!s.ignore&&!s.invisible){var l=s.getBoundingRect(),u=s.getLocalTransform(r)
u?(n.copy(l),n.applyTransform(u),(e=e||n.clone()).union(n)):(e=e||l.clone()).union(l)}}return e||n}},i.inherits(o,r)
var s=o
t.exports=s},1314:function(t,e){var n=1
"undefined"!=typeof window&&(n=Math.max(window.devicePixelRatio||1,1))
var i=n
e.debugMode=0,e.devicePixelRatio=i},1315:function(t,e,n){var i=n(1288),r=n(1339),a=n(1334),o=n(1383)
function s(t){for(var e in t=t||{},a.call(this,t),t)t.hasOwnProperty(e)&&"style"!==e&&(this[e]=t[e])
this.style=new r(t.style,this),this._rect=null,this.__clipPaths=[]}s.prototype={constructor:s,type:"displayable",__dirty:!0,invisible:!1,z:0,z2:0,zlevel:0,draggable:!1,dragging:!1,silent:!1,culling:!1,cursor:"pointer",rectHover:!1,progressive:!1,incremental:!1,inplace:!1,beforeBrush:function(t){},afterBrush:function(t){},brush:function(t,e){},getBoundingRect:function(){},contain:function(t,e){return this.rectContain(t,e)},traverse:function(t,e){t.call(e,this)},rectContain:function(t,e){var n=this.transformCoordToLocal(t,e)
return this.getBoundingRect().contain(n[0],n[1])},dirty:function(){this.__dirty=!0,this._rect=null,this.__zr&&this.__zr.refresh()},animateStyle:function(t){return this.animate("style",t)},attrKV:function(t,e){"style"!==t?a.prototype.attrKV.call(this,t,e):this.style.set(e)},setStyle:function(t,e){return this.style.set(t,e),this.dirty(!1),this},useStyle:function(t){return this.style=new r(t,this),this.dirty(!1),this}},i.inherits(s,a),i.mixin(s,o)
var l=s
t.exports=l},1316:function(t,e,n){var i=n(1303),r=n(1291),a=n(1347),o=n(1296),s=n(1314).devicePixelRatio,l={M:1,L:2,C:3,Q:4,A:5,Z:6,R:7},u=[],h=[],c=[],f=[],d=Math.min,p=Math.max,g=Math.cos,m=Math.sin,v=Math.sqrt,y=Math.abs,x="undefined"!=typeof Float32Array,_=function(t){this._saveData=!t,this._saveData&&(this.data=[]),this._ctx=null}
_.prototype={constructor:_,_xi:0,_yi:0,_x0:0,_y0:0,_ux:0,_uy:0,_len:0,_lineDash:null,_dashOffset:0,_dashIdx:0,_dashSum:0,setScale:function(t,e){this._ux=y(1/s/t)||0,this._uy=y(1/s/e)||0},getContext:function(){return this._ctx},beginPath:function(t){return this._ctx=t,t&&t.beginPath(),t&&(this.dpr=t.dpr),this._saveData&&(this._len=0),this._lineDash&&(this._lineDash=null,this._dashOffset=0),this},moveTo:function(t,e){return this.addData(l.M,t,e),this._ctx&&this._ctx.moveTo(t,e),this._x0=t,this._y0=e,this._xi=t,this._yi=e,this},lineTo:function(t,e){var n=y(t-this._xi)>this._ux||y(e-this._yi)>this._uy||this._len<5
return this.addData(l.L,t,e),this._ctx&&n&&(this._needsDash()?this._dashedLineTo(t,e):this._ctx.lineTo(t,e)),n&&(this._xi=t,this._yi=e),this},bezierCurveTo:function(t,e,n,i,r,a){return this.addData(l.C,t,e,n,i,r,a),this._ctx&&(this._needsDash()?this._dashedBezierTo(t,e,n,i,r,a):this._ctx.bezierCurveTo(t,e,n,i,r,a)),this._xi=r,this._yi=a,this},quadraticCurveTo:function(t,e,n,i){return this.addData(l.Q,t,e,n,i),this._ctx&&(this._needsDash()?this._dashedQuadraticTo(t,e,n,i):this._ctx.quadraticCurveTo(t,e,n,i)),this._xi=n,this._yi=i,this},arc:function(t,e,n,i,r,a){return this.addData(l.A,t,e,n,n,i,r-i,0,a?0:1),this._ctx&&this._ctx.arc(t,e,n,i,r,a),this._xi=g(r)*n+t,this._yi=m(r)*n+t,this},arcTo:function(t,e,n,i,r){return this._ctx&&this._ctx.arcTo(t,e,n,i,r),this},rect:function(t,e,n,i){return this._ctx&&this._ctx.rect(t,e,n,i),this.addData(l.R,t,e,n,i),this},closePath:function(){this.addData(l.Z)
var t=this._ctx,e=this._x0,n=this._y0
return t&&(this._needsDash()&&this._dashedLineTo(e,n),t.closePath()),this._xi=e,this._yi=n,this},fill:function(t){t&&t.fill(),this.toStatic()},stroke:function(t){t&&t.stroke(),this.toStatic()},setLineDash:function(t){if(t instanceof Array){this._lineDash=t,this._dashIdx=0
for(var e=0,n=0;n<t.length;n++)e+=t[n]
this._dashSum=e}return this},setLineDashOffset:function(t){return this._dashOffset=t,this},len:function(){return this._len},setData:function(t){var e=t.length
this.data&&this.data.length==e||!x||(this.data=new Float32Array(e))
for(var n=0;n<e;n++)this.data[n]=t[n]
this._len=e},appendPath:function(t){t instanceof Array||(t=[t])
for(var e=t.length,n=0,i=this._len,r=0;r<e;r++)n+=t[r].len()
for(x&&this.data instanceof Float32Array&&(this.data=new Float32Array(i+n)),r=0;r<e;r++)for(var a=t[r].data,o=0;o<a.length;o++)this.data[i++]=a[o]
this._len=i},addData:function(t){if(this._saveData){var e=this.data
this._len+arguments.length>e.length&&(this._expandData(),e=this.data)
for(var n=0;n<arguments.length;n++)e[this._len++]=arguments[n]
this._prevCmd=t}},_expandData:function(){if(!(this.data instanceof Array)){for(var t=[],e=0;e<this._len;e++)t[e]=this.data[e]
this.data=t}},_needsDash:function(){return this._lineDash},_dashedLineTo:function(t,e){var n,i,r=this._dashSum,a=this._dashOffset,o=this._lineDash,s=this._ctx,l=this._xi,u=this._yi,h=t-l,c=e-u,f=v(h*h+c*c),g=l,m=u,y=o.length
for(a<0&&(a=r+a),g-=(a%=r)*(h/=f),m-=a*(c/=f);h>0&&g<=t||h<0&&g>=t||0==h&&(c>0&&m<=e||c<0&&m>=e);)g+=h*(n=o[i=this._dashIdx]),m+=c*n,this._dashIdx=(i+1)%y,h>0&&g<l||h<0&&g>l||c>0&&m<u||c<0&&m>u||s[i%2?"moveTo":"lineTo"](h>=0?d(g,t):p(g,t),c>=0?d(m,e):p(m,e))
h=g-t,c=m-e,this._dashOffset=-v(h*h+c*c)},_dashedBezierTo:function(t,e,n,r,a,o){var s,l,u,h,c,f=this._dashSum,d=this._dashOffset,p=this._lineDash,g=this._ctx,m=this._xi,y=this._yi,x=i.cubicAt,_=0,b=this._dashIdx,w=p.length,S=0
for(d<0&&(d=f+d),d%=f,s=0;s<1;s+=.1)l=x(m,t,n,a,s+.1)-x(m,t,n,a,s),u=x(y,e,r,o,s+.1)-x(y,e,r,o,s),_+=v(l*l+u*u)
for(;b<w&&!((S+=p[b])>d);b++);for(s=(S-d)/_;s<=1;)h=x(m,t,n,a,s),c=x(y,e,r,o,s),b%2?g.moveTo(h,c):g.lineTo(h,c),s+=p[b]/_,b=(b+1)%w
b%2!=0&&g.lineTo(a,o),l=a-h,u=o-c,this._dashOffset=-v(l*l+u*u)},_dashedQuadraticTo:function(t,e,n,i){var r=n,a=i
n=(n+2*t)/3,i=(i+2*e)/3,t=(this._xi+2*t)/3,e=(this._yi+2*e)/3,this._dashedBezierTo(t,e,n,i,r,a)},toStatic:function(){var t=this.data
t instanceof Array&&(t.length=this._len,x&&(this.data=new Float32Array(t)))},getBoundingRect:function(){u[0]=u[1]=c[0]=c[1]=Number.MAX_VALUE,h[0]=h[1]=f[0]=f[1]=-Number.MAX_VALUE
for(var t=this.data,e=0,n=0,i=0,s=0,d=0;d<t.length;){var p=t[d++]
switch(1==d&&(i=e=t[d],s=n=t[d+1]),p){case l.M:e=i=t[d++],n=s=t[d++],c[0]=i,c[1]=s,f[0]=i,f[1]=s
break
case l.L:a.fromLine(e,n,t[d],t[d+1],c,f),e=t[d++],n=t[d++]
break
case l.C:a.fromCubic(e,n,t[d++],t[d++],t[d++],t[d++],t[d],t[d+1],c,f),e=t[d++],n=t[d++]
break
case l.Q:a.fromQuadratic(e,n,t[d++],t[d++],t[d],t[d+1],c,f),e=t[d++],n=t[d++]
break
case l.A:var v=t[d++],y=t[d++],x=t[d++],_=t[d++],b=t[d++],w=t[d++]+b,S=(t[d++],1-t[d++])
1==d&&(i=g(b)*x+v,s=m(b)*_+y),a.fromArc(v,y,x,_,b,w,S,c,f),e=g(w)*x+v,n=m(w)*_+y
break
case l.R:i=e=t[d++],s=n=t[d++]
var M=t[d++],T=t[d++]
a.fromLine(i,s,i+M,s+T,c,f)
break
case l.Z:e=i,n=s}r.min(u,u,c),r.max(h,h,f)}return 0===d&&(u[0]=u[1]=h[0]=h[1]=0),new o(u[0],u[1],h[0]-u[0],h[1]-u[1])},rebuildPath:function(t){for(var e,n,i,r,a,o,s=this.data,u=this._ux,h=this._uy,c=this._len,f=0;f<c;){var d=s[f++]
switch(1==f&&(e=i=s[f],n=r=s[f+1]),d){case l.M:e=i=s[f++],n=r=s[f++],t.moveTo(i,r)
break
case l.L:a=s[f++],o=s[f++],(y(a-i)>u||y(o-r)>h||f===c-1)&&(t.lineTo(a,o),i=a,r=o)
break
case l.C:t.bezierCurveTo(s[f++],s[f++],s[f++],s[f++],s[f++],s[f++]),i=s[f-2],r=s[f-1]
break
case l.Q:t.quadraticCurveTo(s[f++],s[f++],s[f++],s[f++]),i=s[f-2],r=s[f-1]
break
case l.A:var p=s[f++],v=s[f++],x=s[f++],_=s[f++],b=s[f++],w=s[f++],S=s[f++],M=s[f++],T=x>_?x:_,k=x>_?1:x/_,D=x>_?_/x:1,C=b+w
Math.abs(x-_)>.001?(t.translate(p,v),t.rotate(S),t.scale(k,D),t.arc(0,0,T,b,C,1-M),t.scale(1/k,1/D),t.rotate(-S),t.translate(-p,-v)):t.arc(p,v,T,b,C,1-M),1==f&&(e=g(b)*x+p,n=m(b)*_+v),i=g(C)*x+p,r=m(C)*_+v
break
case l.R:e=i=s[f],n=r=s[f+1],t.rect(s[f++],s[f++],s[f++],s[f++])
break
case l.Z:t.closePath(),i=e,r=n}}}},_.CMD=l
var b=_
t.exports=b},1317:function(t,e,n){var i=n(1288),r=n(1299).parseClassType,a=0
e.getUID=function(t){return[t||"",a++,Math.random().toFixed(5)].join("_")},e.enableSubTypeDefaulter=function(t){var e={}
return t.registerSubTypeDefaulter=function(t,n){t=r(t),e[t.main]=n},t.determineSubType=function(n,i){var a=i.type
if(!a){var o=r(n).main
t.hasSubTypes(n)&&e[o]&&(a=e[o](i))}return a},t},e.enableTopologicalTravel=function(t,e){function n(t,e){return t[e]||(t[e]={predecessor:[],successor:[]}),t[e]}t.topologicalTravel=function(t,r,a,o){if(t.length){var s=function(t){var r={},a=[]
return i.each(t,function(o){var s=n(r,o),l=function(t,e){var n=[]
return i.each(t,function(t){i.indexOf(e,t)>=0&&n.push(t)}),n}(s.originalDeps=e(o),t)
s.entryCount=l.length,0===s.entryCount&&a.push(o),i.each(l,function(t){i.indexOf(s.predecessor,t)<0&&s.predecessor.push(t)
var e=n(r,t)
i.indexOf(e.successor,t)<0&&e.successor.push(o)})}),{graph:r,noEntryList:a}}(r),l=s.graph,u=s.noEntryList,h={}
for(i.each(t,function(t){h[t]=!0});u.length;){var c=u.pop(),f=l[c],d=!!h[c]
d&&(a.call(o,c,f.originalDeps.slice()),delete h[c]),i.each(f.successor,d?g:p)}i.each(h,function(){throw new Error("Circle dependency may exists")})}function p(t){l[t].entryCount--,0===l[t].entryCount&&u.push(t)}function g(t){h[t]=!0,p(t)}}}},1318:function(t,e,n){n(1290).__DEV__
var i=n(1289),r=i.makeInner,a=i.getDataItemValue,o=n(1353).getCoordSysDefineBySeries,s=n(1288),l=s.createHashMap,u=s.each,h=s.map,c=s.isArray,f=s.isString,d=s.isObject,p=s.isTypedArray,g=s.isArrayLike,m=s.extend,v=(s.assert,n(1310)),y=n(1311),x=y.SOURCE_FORMAT_ORIGINAL,_=y.SOURCE_FORMAT_ARRAY_ROWS,b=y.SOURCE_FORMAT_OBJECT_ROWS,w=y.SOURCE_FORMAT_KEYED_COLUMNS,S=y.SOURCE_FORMAT_UNKNOWN,M=y.SOURCE_FORMAT_TYPED_ARRAY,T=y.SERIES_LAYOUT_BY_ROW,k=r()
function D(t){if(t){var e=l()
return h(t,function(t,n){if(null==(t=m({},d(t)?t:{name:t})).name)return t
t.name+="",null==t.displayName&&(t.displayName=t.name)
var i=e.get(t.name)
return i?t.name+="-"+i.count++:e.set(t.name,{count:1}),t})}}function C(t,e,n,i){if(null==i&&(i=1/0),e===T)for(var r=0;r<n.length&&r<i;r++)t(n[r]?n[r][0]:null,r)
else{var a=n[0]||[]
for(r=0;r<a.length&&r<i;r++)t(a[r],r)}}function A(t,e,n,i,r,o){var s,l
if(p(t))return!1
if(i&&(l=i[o],l=d(l)?l.name:l),e===_)if(n===T){for(var u=t[o],h=0;h<(u||[]).length&&h<5;h++)if(null!=(s=y(u[r+h])))return s}else for(h=0;h<t.length&&h<5;h++){var g=t[r+h]
if(g&&null!=(s=y(g[o])))return s}else if(e===b){if(!l)return
for(h=0;h<t.length&&h<5;h++)if((m=t[h])&&null!=(s=y(m[l])))return s}else if(e===w){if(!l)return
if(!(u=t[l])||p(u))return!1
for(h=0;h<u.length&&h<5;h++)if(null!=(s=y(u[h])))return s}else if(e===x)for(h=0;h<t.length&&h<5;h++){var m=t[h],v=a(m)
if(!c(v))return!1
if(null!=(s=y(v[o])))return s}function y(t){return(null==t||!isFinite(t)||""===t)&&(!(!f(t)||"-"===t)||void 0)}return!1}e.detectSourceFormat=function(t){var e=t.option.source,n=S
if(p(e))n=M
else if(c(e))for(var i=0,r=e.length;i<r;i++){var a=e[i]
if(null!=a){if(c(a)){n=_
break}if(d(a)){n=b
break}}}else if(d(e)){for(var o in e)if(e.hasOwnProperty(o)&&g(e[o])){n=w
break}}else if(null!=e)throw new Error("Invalid data")
k(t).sourceFormat=n},e.getSource=function(t){return k(t).source},e.resetSourceDefaulter=function(t){k(t).datasetMap=l()},e.prepareSource=function(t){var e=t.option,n=e.data,i=p(n)?M:x,r=!1,s=e.seriesLayoutBy,h=e.sourceHeader,g=e.dimensions,m=function(t){var e=t.option
if(!e.data)return t.ecModel.getComponent("dataset",e.datasetIndex||0)}(t)
if(m){var y=m.option
n=y.source,i=k(m).sourceFormat,r=!0,s=s||y.seriesLayoutBy,null==h&&(h=y.sourceHeader),g=g||y.dimensions}var S=function(t,e,n,i,r){if(!t)return{dimensionsDefine:D(r)}
var o,s,l,h
if(e===_)"auto"===i||null==i?C(function(t){null!=t&&"-"!==t&&(f(t)?null==s&&(s=1):s=0)},n,t,10):s=i?1:0,r||1!==s||(r=[],C(function(t,e){r[e]=null!=t?t:""},n,t)),o=r?r.length:n===T?t.length:t[0]?t[0].length:null
else if(e===b)r||(r=function(t){for(var e,n=0;n<t.length&&!(e=t[n++]););if(e){var i=[]
return u(e,function(t,e){i.push(e)}),i}}(t),l=!0)
else if(e===w)r||(r=[],l=!0,u(t,function(t,e){r.push(e)}))
else if(e===x){var p=a(t[0])
o=c(p)&&p.length||1}return l&&u(r,function(t,e){"name"===(d(t)?t.name:t)&&(h=e)}),{startIndex:s,dimensionsDefine:D(r),dimensionsDetectCount:o,potentialNameDimIndex:h}}(n,i,s,h,g),I=e.encode
!I&&m&&(I=function(t,e,n,i,r,a){var s=o(t),h={},c=[],f=[],d=t.subType,p=l(["pie","map","funnel"]),g=l(["line","bar","pictorialBar","scatter","effectScatter","candlestick","boxplot"])
if(s&&null!=g.get(d)){var m=t.ecModel,v=k(m).datasetMap,y=e.uid+"_"+r,x=v.get(y)||v.set(y,{categoryWayDim:1,valueWayDim:0})
u(s.coordSysDims,function(t){if(null==s.firstCategoryDimIndex){var e=x.valueWayDim++
h[t]=e,f.push(e)}else if(s.categoryAxisMap.get(t))h[t]=0,c.push(0)
else{e=x.categoryWayDim++
h[t]=e,f.push(e)}})}else if(null!=p.get(d)){for(var _,b=0;b<5&&null==_;b++)A(n,i,r,a.dimensionsDefine,a.startIndex,b)||(_=b)
if(null!=_){h.value=_
var w=a.potentialNameDimIndex||Math.max(_-1,0)
f.push(w),c.push(w)}}return c.length&&(h.itemName=c),f.length&&(h.seriesName=f),h}(t,m,n,i,s,S)),k(t).source=new v({data:n,fromDataset:r,seriesLayoutBy:s,sourceFormat:i,dimensionsDefine:S.dimensionsDefine,startIndex:S.startIndex,dimensionsDetectCount:S.dimensionsDetectCount,encodeDefine:I})},e.guessOrdinal=function(t,e){return A(t.data,t.sourceFormat,t.seriesLayoutBy,t.dimensionsDefine,t.startIndex,e)}},1319:function(t,e,n){var i=n(1299)
function r(t){this._setting=t||{},this._extent=[1/0,-1/0],this._interval=0,this.init&&this.init.apply(this,arguments)}r.prototype.parse=function(t){return t},r.prototype.getSetting=function(t){return this._setting[t]},r.prototype.contain=function(t){var e=this._extent
return t>=e[0]&&t<=e[1]},r.prototype.normalize=function(t){var e=this._extent
return e[1]===e[0]?.5:(t-e[0])/(e[1]-e[0])},r.prototype.scale=function(t){var e=this._extent
return t*(e[1]-e[0])+e[0]},r.prototype.unionExtent=function(t){var e=this._extent
t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1])},r.prototype.unionExtentFromData=function(t,e){this.unionExtent(t.getApproximateExtent(e))},r.prototype.getExtent=function(){return this._extent.slice()},r.prototype.setExtent=function(t,e){var n=this._extent
isNaN(t)||(n[0]=t),isNaN(e)||(n[1]=e)},r.prototype.isBlank=function(){return this._isBlank},r.prototype.setBlank=function(t){this._isBlank=t},r.prototype.getLabel=null,i.enableClassExtend(r),i.enableClassManagement(r,{registerWhenExtend:!0})
var a=r
t.exports=a},1321:function(t,e){var n=7
function i(t,e,n,i){var r=e+1
if(r===n)return 1
if(i(t[r++],t[e])<0){for(;r<n&&i(t[r],t[r-1])<0;)r++
!function(t,e,n){for(n--;e<n;){var i=t[e]
t[e++]=t[n],t[n--]=i}}(t,e,r)}else for(;r<n&&i(t[r],t[r-1])>=0;)r++
return r-e}function r(t,e,n,i,r){for(i===e&&i++;i<n;i++){for(var a,o=t[i],s=e,l=i;s<l;)r(o,t[a=s+l>>>1])<0?l=a:s=a+1
var u=i-s
switch(u){case 3:t[s+3]=t[s+2]
case 2:t[s+2]=t[s+1]
case 1:t[s+1]=t[s]
break
default:for(;u>0;)t[s+u]=t[s+u-1],u--}t[s]=o}}function a(t,e,n,i,r,a){var o=0,s=0,l=1
if(a(t,e[n+r])>0){for(s=i-r;l<s&&a(t,e[n+r+l])>0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s),o+=r,l+=r}else{for(s=r+1;l<s&&a(t,e[n+r-l])<=0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s)
var u=o
o=r-l,l=r-u}for(o++;o<l;){var h=o+(l-o>>>1)
a(t,e[n+h])>0?o=h+1:l=h}return l}function o(t,e,n,i,r,a){var o=0,s=0,l=1
if(a(t,e[n+r])<0){for(s=r+1;l<s&&a(t,e[n+r-l])<0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s)
var u=o
o=r-l,l=r-u}else{for(s=i-r;l<s&&a(t,e[n+r+l])>=0;)o=l,(l=1+(l<<1))<=0&&(l=s)
l>s&&(l=s),o+=r,l+=r}for(o++;o<l;){var h=o+(l-o>>>1)
a(t,e[n+h])<0?l=h:o=h+1}return l}function s(t,e){var i,r,s=n,l=0
t.length
var u=[]
function h(h){var c=i[h],f=r[h],d=i[h+1],p=r[h+1]
r[h]=f+p,h===l-3&&(i[h+1]=i[h+2],r[h+1]=r[h+2]),l--
var g=o(t[d],t,c,f,0,e)
c+=g,0!=(f-=g)&&0!==(p=a(t[c+f-1],t,d,p,p-1,e))&&(f<=p?function(i,r,l,h){var c=0
for(c=0;c<r;c++)u[c]=t[i+c]
var f=0,d=l,p=i
if(t[p++]=t[d++],0!=--h)if(1!==r){for(var g,m,v,y=s;;){g=0,m=0,v=!1
do{if(e(t[d],u[f])<0){if(t[p++]=t[d++],m++,g=0,0==--h){v=!0
break}}else if(t[p++]=u[f++],g++,m=0,1==--r){v=!0
break}}while((g|m)<y)
if(v)break
do{if(0!==(g=o(t[d],u,f,r,0,e))){for(c=0;c<g;c++)t[p+c]=u[f+c]
if(p+=g,f+=g,(r-=g)<=1){v=!0
break}}if(t[p++]=t[d++],0==--h){v=!0
break}if(0!==(m=a(u[f],t,d,h,0,e))){for(c=0;c<m;c++)t[p+c]=t[d+c]
if(p+=m,d+=m,0==(h-=m)){v=!0
break}}if(t[p++]=u[f++],1==--r){v=!0
break}y--}while(g>=n||m>=n)
if(v)break
y<0&&(y=0),y+=2}if((s=y)<1&&(s=1),1===r){for(c=0;c<h;c++)t[p+c]=t[d+c]
t[p+h]=u[f]}else{if(0===r)throw new Error
for(c=0;c<r;c++)t[p+c]=u[f+c]}}else{for(c=0;c<h;c++)t[p+c]=t[d+c]
t[p+h]=u[f]}else for(c=0;c<r;c++)t[p+c]=u[f+c]}(c,f,d,p):function(i,r,l,h){var c=0
for(c=0;c<h;c++)u[c]=t[l+c]
var f=i+r-1,d=h-1,p=l+h-1,g=0,m=0
if(t[p--]=t[f--],0!=--r)if(1!==h){for(var v=s;;){var y=0,x=0,_=!1
do{if(e(u[d],t[f])<0){if(t[p--]=t[f--],y++,x=0,0==--r){_=!0
break}}else if(t[p--]=u[d--],x++,y=0,1==--h){_=!0
break}}while((y|x)<v)
if(_)break
do{if(0!=(y=r-o(u[d],t,i,r,r-1,e))){for(r-=y,m=1+(p-=y),g=1+(f-=y),c=y-1;c>=0;c--)t[m+c]=t[g+c]
if(0===r){_=!0
break}}if(t[p--]=u[d--],1==--h){_=!0
break}if(0!=(x=h-a(t[f],u,0,h,h-1,e))){for(h-=x,m=1+(p-=x),g=1+(d-=x),c=0;c<x;c++)t[m+c]=u[g+c]
if(h<=1){_=!0
break}}if(t[p--]=t[f--],0==--r){_=!0
break}v--}while(y>=n||x>=n)
if(_)break
v<0&&(v=0),v+=2}if((s=v)<1&&(s=1),1===h){for(m=1+(p-=r),g=1+(f-=r),c=r-1;c>=0;c--)t[m+c]=t[g+c]
t[p]=u[d]}else{if(0===h)throw new Error
for(g=p-(h-1),c=0;c<h;c++)t[g+c]=u[c]}}else{for(m=1+(p-=r),g=1+(f-=r),c=r-1;c>=0;c--)t[m+c]=t[g+c]
t[p]=u[d]}else for(g=p-(h-1),c=0;c<h;c++)t[g+c]=u[c]}(c,f,d,p))}i=[],r=[],this.mergeRuns=function(){for(;l>1;){var t=l-2
if(t>=1&&r[t-1]<=r[t]+r[t+1]||t>=2&&r[t-2]<=r[t]+r[t-1])r[t-1]<r[t+1]&&t--
else if(r[t]>r[t+1])break
h(t)}},this.forceMergeRuns=function(){for(;l>1;){var t=l-2
t>0&&r[t-1]<r[t+1]&&t--,h(t)}},this.pushRun=function(t,e){i[l]=t,r[l]=e,l+=1}}t.exports=function(t,e,n,a){n||(n=0),a||(a=t.length)
var o=a-n
if(!(o<2)){var l=0
if(o<32)r(t,n,a,n+(l=i(t,n,a,e)),e)
else{var u=new s(t,e),h=function(t){for(var e=0;t>=32;)e|=1&t,t>>=1
return t+e}(o)
do{if((l=i(t,n,a,e))<h){var c=o
c>h&&(c=h),r(t,n,n+c,n+l,e),l=c}u.pushRun(n,l),u.mergeRuns(),o-=l,n+=l}while(0!==o)
u.forceMergeRuns()}}}},1322:function(t,e,n){var i=new(n(1337))(50)
function r(){var t=this.__cachedImgObj
this.onload=this.__cachedImgObj=null
for(var e=0;e<t.pending.length;e++){var n=t.pending[e],i=n.cb
i&&i(this,n.cbPayload),n.hostEl.dirty()}t.pending.length=0}function a(t){return t&&t.width&&t.height}e.findExistImage=function(t){if("string"==typeof t){var e=i.get(t)
return e&&e.image}return t},e.createOrUpdateImage=function(t,e,n,o,s){if(t){if("string"==typeof t){if(e&&e.__zrImageSrc===t||!n)return e
var l=i.get(t),u={hostEl:n,cb:o,cbPayload:s}
return l?!a(e=l.image)&&l.pending.push(u):(!e&&(e=new Image),e.onload=r,i.put(t,e.__cachedImgObj={image:e,pending:[u]}),e.src=e.__zrImageSrc=t),e}return t}return e},e.isImageReady=a},1323:function(t,e,n){var i=n(1288)
t.exports=function(t){for(var e=0;e<t.length;e++)t[e][1]||(t[e][1]=t[e][0])
return function(e,n,r){for(var a={},o=0;o<t.length;o++){var s=t[o][1]
if(!(n&&i.indexOf(n,s)>=0||r&&i.indexOf(r,s)<0)){var l=e.getShallow(s)
null!=l&&(a[t[o][0]]=l)}}return a}}},1324:function(t,e){var n=function(t){this.colorStops=t||[]}
n.prototype={constructor:n,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}}
var i=n
t.exports=i},1325:function(t,e,n){var i=n(1288),r={}
function a(){this._coordinateSystems=[]}a.prototype={constructor:a,create:function(t,e){var n=[]
i.each(r,function(i,r){var a=i.create(t,e)
n=n.concat(a||[])}),this._coordinateSystems=n},update:function(t,e){i.each(this._coordinateSystems,function(n){n.update&&n.update(t,e)})},getCoordinateSystems:function(){return this._coordinateSystems.slice()}},a.register=function(t,e){r[t]=e},a.get=function(t){return r[t]}
var o=a
t.exports=o},1326:function(t,e,n){var i=n(1288),r=(i.assert,i.isArray)
function a(t){t=t||{},this._reset=t.reset,this._plan=t.plan,this._count=t.count,this._onDirty=t.onDirty,this._dirty=!0,this.context}n(1290).__DEV__
var o=a.prototype
o.perform=function(t){var e,n=this._upstream,i=t&&t.skip
if(this._dirty&&n){var a=this.context
a.data=a.outputData=n.context.outputData}this.__pipeline&&(this.__pipeline.currentTask=this),this._plan&&!i&&(e=this._plan(this.context))
var o,s=f(this._modBy),u=this._modDataCount||0,h=f(t&&t.modBy),c=t&&t.modDataCount||0
function f(t){return!(t>=1)&&(t=1),t}s===h&&u===c||(e="reset"),(this._dirty||"reset"===e)&&(this._dirty=!1,o=function(t,e){var n,i
t._dueIndex=t._outputDueEnd=t._dueEnd=0,t._settedOutputEnd=null,!e&&t._reset&&((n=t._reset(t.context))&&n.progress&&(i=n.forceFirstProgress,n=n.progress),r(n)&&!n.length&&(n=null)),t._progress=n,t._modBy=t._modDataCount=null
var a=t._downstream
return a&&a.dirty(),i}(this,i)),this._modBy=h,this._modDataCount=c
var d=t&&t.step
if(this._dueEnd=n?n._outputDueEnd:this._count?this._count(this.context):1/0,this._progress){var p=this._dueIndex,g=Math.min(null!=d?this._dueIndex+d:1/0,this._dueEnd)
if(!i&&(o||p<g)){var m=this._progress
if(r(m))for(var v=0;v<m.length;v++)l(this,m[v],p,g,h,c)
else l(this,m,p,g,h,c)}this._dueIndex=g
var y=null!=this._settedOutputEnd?this._settedOutputEnd:g
this._outputDueEnd=y}else this._dueIndex=this._outputDueEnd=null!=this._settedOutputEnd?this._settedOutputEnd:this._dueEnd
return this.unfinished()}
var s=function(){var t,e,n,i,r,a={reset:function(l,u,h,c){e=l,t=u,n=h,i=c,r=Math.ceil(i/n),a.next=n>1&&i>0?s:o}}
return a
function o(){return e<t?e++:null}function s(){var a=e%r*n+Math.ceil(e/r),o=e>=t?null:a<i?a:e
return e++,o}}()
function l(t,e,n,i,r,a){s.reset(n,i,r,a),t._callingProgress=e,t._callingProgress({start:n,end:i,count:i-n,next:s.next},t.context)}o.dirty=function(){this._dirty=!0,this._onDirty&&this._onDirty(this.context)},o.unfinished=function(){return this._progress&&this._dueIndex<this._dueEnd},o.pipe=function(t){(this._downstream!==t||this._dirty)&&(this._downstream=t,t._upstream=this,t.dirty())},o.dispose=function(){this._disposed||(this._upstream&&(this._upstream._downstream=null),this._downstream&&(this._downstream._upstream=null),this._dirty=!1,this._disposed=!0)},o.getUpstream=function(){return this._upstream},o.getDownstream=function(){return this._downstream},o.setOutputEnd=function(t){this._outputDueEnd=this._settedOutputEnd=t},e.createTask=function(t){return new a(t)}},1327:function(t,e,n){var i=n(1289).makeInner
t.exports=function(){var t=i()
return function(e){var n=t(e),i=e.pipelineContext,r=n.large,a=n.progressiveRender,o=n.large=i.large,s=n.progressiveRender=i.progressiveRender
return!!(r^o||a^s)&&"reset"}}},1328:function(t,e){var n="\0__throttleOriginMethod",i="\0__throttleRate",r="\0__throttleType"
function a(t,e,n){var i,r,a,o,s,l=0,u=0,h=null
function c(){u=(new Date).getTime(),h=null,t.apply(a,o||[])}e=e||0
var f=function(){i=(new Date).getTime(),a=this,o=arguments
var t=s||e,f=s||n
s=null,r=i-(f?l:u)-t,clearTimeout(h),f?h=setTimeout(c,t):r>=0?c():h=setTimeout(c,-r),l=i}
return f.clear=function(){h&&(clearTimeout(h),h=null)},f.debounceNextCall=function(t){s=t},f}e.throttle=a,e.createOrUpdate=function(t,e,o,s){var l=t[e]
if(l){var u=l[n]||l,h=l[r]
if(l[i]!==o||h!==s){if(null==o||!s)return t[e]=u;(l=t[e]=a(u,o,"debounce"===s))[n]=u,l[r]=s,l[i]=o}return l}},e.clear=function(t,e){var i=t[e]
i&&i[n]&&(t[e]=i[n])}},1329:function(t,e,n){var i=n(1288),r=i.each,a=i.createHashMap,o=(i.assert,n(1290).__DEV__,a(["tooltip","label","itemName","itemId","seriesName"]))
e.OTHER_DIMENSIONS=o,e.summarizeDimensions=function(t){var e={},n=e.encode={},i=a(),s=[],l=[]
r(t.dimensions,function(e){var r=t.getDimensionInfo(e),a=r.coordDim
if(a){var u=n[a]
n.hasOwnProperty(a)||(u=n[a]=[]),u[r.coordDimIndex]=e,r.isExtraCoord||(i.set(a,1),function(t){return!("ordinal"===t||"time"===t)}(r.type)&&(s[0]=e)),r.defaultTooltip&&l.push(e)}o.each(function(t,e){var i=n[e]
n.hasOwnProperty(e)||(i=n[e]=[])
var a=r.otherDims[e]
null!=a&&!1!==a&&(i[a]=r.name)})})
var u=[],h={}
i.each(function(t,e){var i=n[e]
h[e]=i[0],u=u.concat(i)}),e.dataDimsOnCoord=u,e.encodeFirstDimNotExtra=h
var c=n.label
c&&c.length&&(s=c.slice())
var f=n.tooltip
return f&&f.length?l=f.slice():l.length||(l=s.slice()),n.defaultedLabel=s,n.defaultedTooltip=l,e},e.getDimensionTypeByAxis=function(t){return"category"===t?"ordinal":"time"===t?"time":"float"}},1330:function(t,e,n){var i=n(1293),r=n(1297),a=n(1319),o=n(1363),s=i.round,l=a.extend({type:"interval",_interval:0,_intervalPrecision:2,setExtent:function(t,e){var n=this._extent
isNaN(t)||(n[0]=parseFloat(t)),isNaN(e)||(n[1]=parseFloat(e))},unionExtent:function(t){var e=this._extent
t[0]<e[0]&&(e[0]=t[0]),t[1]>e[1]&&(e[1]=t[1]),l.prototype.setExtent.call(this,e[0],e[1])},getInterval:function(){return this._interval},setInterval:function(t){this._interval=t,this._niceExtent=this._extent.slice(),this._intervalPrecision=o.getIntervalPrecision(t)},getTicks:function(){return o.intervalScaleGetTicks(this._interval,this._extent,this._niceExtent,this._intervalPrecision)},getLabel:function(t,e){if(null==t)return""
var n=e&&e.precision
return null==n?n=i.getPrecisionSafe(t)||0:"auto"===n&&(n=this._intervalPrecision),t=s(t,n,!0),r.addCommas(t)},niceTicks:function(t,e,n){t=t||5
var i=this._extent,r=i[1]-i[0]
if(isFinite(r)){r<0&&(r=-r,i.reverse())
var a=o.intervalScaleNiceTicks(i,t,e,n)
this._intervalPrecision=a.intervalPrecision,this._interval=a.interval,this._niceExtent=a.niceTickExtent}},niceExtent:function(t){var e=this._extent
if(e[0]===e[1])if(0!==e[0]){var n=e[0]
t.fixMax?e[0]-=n/2:(e[1]+=n/2,e[0]-=n/2)}else e[1]=1
var i=e[1]-e[0]
isFinite(i)||(e[0]=0,e[1]=1),this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval)
var r=this._interval
t.fixMin||(e[0]=s(Math.floor(e[0]/r)*r)),t.fixMax||(e[1]=s(Math.ceil(e[1]/r)*r))}})
l.create=function(){return new l}
var u=l
t.exports=u},1331:function(t,e,n){var i=n(1288),r=n(1292),a=n(1296),o=r.extendShape({type:"triangle",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2
t.moveTo(n,i-a),t.lineTo(n+r,i+a),t.lineTo(n-r,i+a),t.closePath()}}),s=r.extendShape({type:"diamond",shape:{cx:0,cy:0,width:0,height:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=e.width/2,a=e.height/2
t.moveTo(n,i-a),t.lineTo(n+r,i),t.lineTo(n,i+a),t.lineTo(n-r,i),t.closePath()}}),l=r.extendShape({type:"pin",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,r=e.width/5*3,a=Math.max(r,e.height),o=r/2,s=o*o/(a-o),l=i-a+o+s,u=Math.asin(s/o),h=Math.cos(u)*o,c=Math.sin(u),f=Math.cos(u),d=.6*o,p=.7*o
t.moveTo(n-h,l+s),t.arc(n,l,o,Math.PI-u,2*Math.PI+u),t.bezierCurveTo(n+h-c*d,l+s+f*d,n,i-p,n,i),t.bezierCurveTo(n,i-p,n-h+c*d,l+s+f*d,n-h,l+s),t.closePath()}}),u=r.extendShape({type:"arrow",shape:{x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.height,i=e.width,r=e.x,a=e.y,o=i/3*2
t.moveTo(r,a),t.lineTo(r+o,a+n),t.lineTo(r,a+n/4*3),t.lineTo(r-o,a+n),t.lineTo(r,a),t.closePath()}}),h={line:r.Line,rect:r.Rect,roundRect:r.Rect,square:r.Rect,circle:r.Circle,diamond:s,pin:l,arrow:u,triangle:o},c={line:function(t,e,n,i,r){r.x1=t,r.y1=e+i/2,r.x2=t+n,r.y2=e+i/2},rect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i},roundRect:function(t,e,n,i,r){r.x=t,r.y=e,r.width=n,r.height=i,r.r=Math.min(n,i)/4},square:function(t,e,n,i,r){var a=Math.min(n,i)
r.x=t,r.y=e,r.width=a,r.height=a},circle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.r=Math.min(n,i)/2},diamond:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i},pin:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},arrow:function(t,e,n,i,r){r.x=t+n/2,r.y=e+i/2,r.width=n,r.height=i},triangle:function(t,e,n,i,r){r.cx=t+n/2,r.cy=e+i/2,r.width=n,r.height=i}},f={}
i.each(h,function(t,e){f[e]=new t})
var d=r.extendShape({type:"symbol",shape:{symbolType:"",x:0,y:0,width:0,height:0},beforeBrush:function(){var t=this.style
"pin"===this.shape.symbolType&&"inside"===t.textPosition&&(t.textPosition=["50%","40%"],t.textAlign="center",t.textVerticalAlign="middle")},buildPath:function(t,e,n){var i=e.symbolType,r=f[i]
"none"!==e.symbolType&&(r||(r=f[i="rect"]),c[i](e.x,e.y,e.width,e.height,r.shape),r.buildPath(t,r.shape,n))}})
function p(t,e){if("image"!==this.type){var n=this.style,i=this.shape
i&&"line"===i.symbolType?n.stroke=t:this.__isEmptyBrush?(n.stroke=t,n.fill=e||"#fff"):(n.fill&&(n.fill=t),n.stroke&&(n.stroke=t)),this.dirty(!1)}}e.createSymbol=function(t,e,n,i,o,s,l){var u,h=0===t.indexOf("empty")
return h&&(t=t.substr(5,1).toLowerCase()+t.substr(6)),(u=0===t.indexOf("image://")?r.makeImage(t.slice(8),new a(e,n,i,o),l?"center":"cover"):0===t.indexOf("path://")?r.makePath(t.slice(7),{},new a(e,n,i,o),l?"center":"cover"):new d({shape:{symbolType:t,x:e,y:n,width:i,height:o}})).__isEmptyBrush=h,u.setColor=p,u.setColor(s),u}},1332:function(t,e,n){var i=n(1333),r=n(1294),a=n(1288),o=n(1375),s=n(1377),l=n(1381),u=n(1384),h=n(1385),c=!r.canvasSupported,f={canvas:l},d={},p=function(t,e,n){n=n||{},this.dom=e,this.id=t
var i=this,l=new s,d=n.renderer
if(c){if(!f.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8")
d="vml"}else d&&f[d]||(d="canvas")
var p=new f[d](e,l,n,t)
this.storage=l,this.painter=p
var g=r.node||r.worker?null:new h(p.getViewportRoot())
this.handler=new o(l,p,g,p.root),this.animation=new u({stage:{update:a.bind(this.flush,this)}}),this.animation.start(),this._needsRefresh
var m=l.delFromStorage,v=l.addToStorage
l.delFromStorage=function(t){m.call(l,t),t&&t.removeSelfFromZr(i)},l.addToStorage=function(t){v.call(l,t),t.addSelfToZr(i)}}
p.prototype={constructor:p,getId:function(){return this.id},add:function(t){this.storage.addRoot(t),this._needsRefresh=!0},remove:function(t){this.storage.delRoot(t),this._needsRefresh=!0},configLayer:function(t,e){this.painter.configLayer&&this.painter.configLayer(t,e),this._needsRefresh=!0},setBackgroundColor:function(t){this.painter.setBackgroundColor&&this.painter.setBackgroundColor(t),this._needsRefresh=!0},refreshImmediately:function(){this._needsRefresh=!1,this.painter.refresh(),this._needsRefresh=!1},refresh:function(){this._needsRefresh=!0},flush:function(){var t
this._needsRefresh&&(t=!0,this.refreshImmediately()),this._needsRefreshHover&&(t=!0,this.refreshHoverImmediately()),t&&this.trigger("rendered")},addHover:function(t,e){this.painter.addHover&&(this.painter.addHover(t,e),this.refreshHover())},removeHover:function(t){this.painter.removeHover&&(this.painter.removeHover(t),this.refreshHover())},clearHover:function(){this.painter.clearHover&&(this.painter.clearHover(),this.refreshHover())},refreshHover:function(){this._needsRefreshHover=!0},refreshHoverImmediately:function(){this._needsRefreshHover=!1,this.painter.refreshHover&&this.painter.refreshHover()},resize:function(t){t=t||{},this.painter.resize(t.width,t.height),this.handler.resize()},clearAnimation:function(){this.animation.clear()},getWidth:function(){return this.painter.getWidth()},getHeight:function(){return this.painter.getHeight()},pathToImage:function(t,e){return this.painter.pathToImage(t,e)},setCursorStyle:function(t){this.handler.setCursorStyle(t)},findHover:function(t,e){return this.handler.findHover(t,e)},on:function(t,e,n){this.handler.on(t,e,n)},off:function(t,e){this.handler.off(t,e)},trigger:function(t,e){this.handler.trigger(t,e)},clear:function(){this.storage.delRoot(),this.painter.clear()},dispose:function(){var t
this.animation.stop(),this.clear(),this.storage.dispose(),this.painter.dispose(),this.handler.dispose(),this.animation=this.storage=this.painter=this.handler=null,t=this.id,delete d[t]}},e.version="4.0.4",e.init=function(t,e){var n=new p(i(),t,e)
return d[n.id]=n,n},e.dispose=function(t){if(t)t.dispose()
else{for(var e in d)d.hasOwnProperty(e)&&d[e].dispose()
d={}}return this},e.getInstance=function(t){return d[t]},e.registerPainter=function(t,e){f[t]=e}},1333:function(t,e){var n=2311
t.exports=function(){return n++}},1334:function(t,e,n){var i=n(1333),r=n(1307),a=n(1335),o=n(1378),s=n(1288),l=function(t){a.call(this,t),r.call(this,t),o.call(this,t),this.id=t.id||i()}
l.prototype={type:"element",name:"",__zr:null,ignore:!1,clipPath:null,isGroup:!1,drift:function(t,e){switch(this.draggable){case"horizontal":e=0
break
case"vertical":t=0}var n=this.transform
n||(n=this.transform=[1,0,0,1,0,0]),n[4]+=t,n[5]+=e,this.decomposeTransform(),this.dirty(!1)},beforeUpdate:function(){},afterUpdate:function(){},update:function(){this.updateTransform()},traverse:function(t,e){},attrKV:function(t,e){if("position"===t||"scale"===t||"origin"===t){if(e){var n=this[t]
n||(n=this[t]=[]),n[0]=e[0],n[1]=e[1]}}else this[t]=e},hide:function(){this.ignore=!0,this.__zr&&this.__zr.refresh()},show:function(){this.ignore=!1,this.__zr&&this.__zr.refresh()},attr:function(t,e){if("string"==typeof t)this.attrKV(t,e)
else if(s.isObject(t))for(var n in t)t.hasOwnProperty(n)&&this.attrKV(n,t[n])
return this.dirty(!1),this},setClipPath:function(t){var e=this.__zr
e&&t.addSelfToZr(e),this.clipPath&&this.clipPath!==t&&this.removeClipPath(),this.clipPath=t,t.__zr=e,t.__clipTarget=this,this.dirty(!1)},removeClipPath:function(){var t=this.clipPath
t&&(t.__zr&&t.removeSelfFromZr(t.__zr),t.__zr=null,t.__clipTarget=null,this.clipPath=null,this.dirty(!1))},addSelfToZr:function(t){this.__zr=t
var e=this.animators
if(e)for(var n=0;n<e.length;n++)t.animation.addAnimator(e[n])
this.clipPath&&this.clipPath.addSelfToZr(t)},removeSelfFromZr:function(t){this.__zr=null
var e=this.animators
if(e)for(var n=0;n<e.length;n++)t.animation.removeAnimator(e[n])
this.clipPath&&this.clipPath.removeSelfFromZr(t)}},s.mixin(l,o),s.mixin(l,a),s.mixin(l,r)
var u=l
t.exports=u},1335:function(t,e,n){var i=n(1301),r=n(1291),a=i.identity,o=5e-5
function s(t){return t>o||t<-o}var l=function(t){(t=t||{}).position||(this.position=[0,0]),null==t.rotation&&(this.rotation=0),t.scale||(this.scale=[1,1]),this.origin=this.origin||null},u=l.prototype
u.transform=null,u.needLocalTransform=function(){return s(this.rotation)||s(this.position[0])||s(this.position[1])||s(this.scale[0]-1)||s(this.scale[1]-1)},u.updateTransform=function(){var t=this.parent,e=t&&t.transform,n=this.needLocalTransform(),r=this.transform
n||e?(r=r||i.create(),n?this.getLocalTransform(r):a(r),e&&(n?i.mul(r,t.transform,r):i.copy(r,t.transform)),this.transform=r,this.invTransform=this.invTransform||i.create(),i.invert(this.invTransform,r)):r&&a(r)},u.getLocalTransform=function(t){return l.getLocalTransform(this,t)},u.setTransform=function(t){var e=this.transform,n=t.dpr||1
e?t.setTransform(n*e[0],n*e[1],n*e[2],n*e[3],n*e[4],n*e[5]):t.setTransform(n,0,0,n,0,0)},u.restoreTransform=function(t){var e=t.dpr||1
t.setTransform(e,0,0,e,0,0)}
var h=[]
u.decomposeTransform=function(){if(this.transform){var t=this.parent,e=this.transform
t&&t.transform&&(i.mul(h,t.invTransform,e),e=h)
var n=e[0]*e[0]+e[1]*e[1],r=e[2]*e[2]+e[3]*e[3],a=this.position,o=this.scale
s(n-1)&&(n=Math.sqrt(n)),s(r-1)&&(r=Math.sqrt(r)),e[0]<0&&(n=-n),e[3]<0&&(r=-r),a[0]=e[4],a[1]=e[5],o[0]=n,o[1]=r,this.rotation=Math.atan2(-e[1]/r,e[0]/n)}},u.getGlobalScale=function(){var t=this.transform
if(!t)return[1,1]
var e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),n=Math.sqrt(t[2]*t[2]+t[3]*t[3])
return t[0]<0&&(e=-e),t[3]<0&&(n=-n),[e,n]},u.transformCoordToLocal=function(t,e){var n=[t,e],i=this.invTransform
return i&&r.applyTransform(n,n,i),n},u.transformCoordToGlobal=function(t,e){var n=[t,e],i=this.transform
return i&&r.applyTransform(n,n,i),n},l.getLocalTransform=function(t,e){a(e=e||[])
var n=t.origin,r=t.scale||[1,1],o=t.rotation||0,s=t.position||[0,0]
return n&&(e[4]-=n[0],e[5]-=n[1]),i.scale(e,e,r),o&&i.rotate(e,e,o),n&&(e[4]+=n[0],e[5]+=n[1]),e[4]+=s[0],e[5]+=s[1],e}
var c=l
t.exports=c},1336:function(t,e,n){var i=n(1379),r=n(1308),a=n(1288).isArrayLike,o=Array.prototype.slice
function s(t,e){return t[e]}function l(t,e,n){t[e]=n}function u(t,e,n){return(e-t)*n+t}function h(t,e,n){return n>.5?e:t}function c(t,e,n,i,r){var a=t.length
if(1==r)for(var o=0;o<a;o++)i[o]=u(t[o],e[o],n)
else{var s=a&&t[0].length
for(o=0;o<a;o++)for(var l=0;l<s;l++)i[o][l]=u(t[o][l],e[o][l],n)}}function f(t,e,n){var i=t.length,r=e.length
if(i!==r)if(i>r)t.length=r
else for(var a=i;a<r;a++)t.push(1===n?e[a]:o.call(e[a]))
var s=t[0]&&t[0].length
for(a=0;a<t.length;a++)if(1===n)isNaN(t[a])&&(t[a]=e[a])
else for(var l=0;l<s;l++)isNaN(t[a][l])&&(t[a][l]=e[a][l])}function d(t,e,n){if(t===e)return!0
var i=t.length
if(i!==e.length)return!1
if(1===n){for(var r=0;r<i;r++)if(t[r]!==e[r])return!1}else{var a=t[0].length
for(r=0;r<i;r++)for(var o=0;o<a;o++)if(t[r][o]!==e[r][o])return!1}return!0}function p(t,e,n,i,r,a,o,s,l){var u=t.length
if(1==l)for(var h=0;h<u;h++)s[h]=g(t[h],e[h],n[h],i[h],r,a,o)
else{var c=t[0].length
for(h=0;h<u;h++)for(var f=0;f<c;f++)s[h][f]=g(t[h][f],e[h][f],n[h][f],i[h][f],r,a,o)}}function g(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e)
return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}function m(t){if(a(t)){var e=t.length
if(a(t[0])){for(var n=[],i=0;i<e;i++)n.push(o.call(t[i]))
return n}return o.call(t)}return t}function v(t){return t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1]),t[2]=Math.floor(t[2]),"rgba("+t.join(",")+")"}function y(t,e,n,o,s,l){var m=t._getter,y=t._setter,x="spline"===e,_=o.length
if(_){var b,w=o[0].value,S=a(w),M=!1,T=!1,k=S?function(t){var e=o[o.length-1].value
return a(e&&e[0])?2:1}():0
o.sort(function(t,e){return t.time-e.time}),b=o[_-1].time
for(var D=[],C=[],A=o[0].value,I=!0,O=0;O<_;O++){D.push(o[O].time/b)
var P=o[O].value
if(S&&d(P,A,k)||!S&&P===A||(I=!1),A=P,"string"==typeof P){var L=r.parse(P)
L?(P=L,M=!0):T=!0}C.push(P)}if(l||!I){var E=C[_-1]
for(O=0;O<_-1;O++)S?f(C[O],E,k):!isNaN(C[O])||isNaN(E)||T||M||(C[O]=E)
S&&f(m(t._target,s),E,k)
var R,N,z,B,F,H=0,V=0
if(M)var W=[0,0,0,0]
var Y=new i({target:t._target,life:b,loop:t._loop,delay:t._delay,onframe:function(t,e){var n
if(e<0)n=0
else if(e<V){for(n=Math.min(H+1,_-1);n>=0&&!(D[n]<=e);n--);n=Math.min(n,_-2)}else{for(n=H;n<_&&!(D[n]>e);n++);n=Math.min(n-1,_-2)}H=n,V=e
var i=D[n+1]-D[n]
if(0!==i)if(R=(e-D[n])/i,x)if(z=C[n],N=C[0===n?n:n-1],B=C[n>_-2?_-1:n+1],F=C[n>_-3?_-1:n+2],S)p(N,z,B,F,R,R*R,R*R*R,m(t,s),k)
else{if(M)r=p(N,z,B,F,R,R*R,R*R*R,W,1),r=v(W)
else{if(T)return h(z,B,R)
r=g(N,z,B,F,R,R*R,R*R*R)}y(t,s,r)}else if(S)c(C[n],C[n+1],R,m(t,s),k)
else{var r
if(M)c(C[n],C[n+1],R,W,1),r=v(W)
else{if(T)return h(C[n],C[n+1],R)
r=u(C[n],C[n+1],R)}y(t,s,r)}},ondestroy:n})
return e&&"spline"!==e&&(Y.easing=e),Y}}}var x=function(t,e,n,i){this._tracks={},this._target=t,this._loop=e||!1,this._getter=n||s,this._setter=i||l,this._clipCount=0,this._delay=0,this._doneList=[],this._onframeList=[],this._clipList=[]}
x.prototype={when:function(t,e){var n=this._tracks
for(var i in e)if(e.hasOwnProperty(i)){if(!n[i]){n[i]=[]
var r=this._getter(this._target,i)
if(null==r)continue
0!==t&&n[i].push({time:0,value:m(r)})}n[i].push({time:t,value:e[i]})}return this},during:function(t){return this._onframeList.push(t),this},pause:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].pause()
this._paused=!0},resume:function(){for(var t=0;t<this._clipList.length;t++)this._clipList[t].resume()
this._paused=!1},isPaused:function(){return!!this._paused},_doneCallback:function(){this._tracks={},this._clipList.length=0
for(var t=this._doneList,e=t.length,n=0;n<e;n++)t[n].call(this)},start:function(t,e){var n,i=this,r=0,a=function(){--r||i._doneCallback()}
for(var o in this._tracks)if(this._tracks.hasOwnProperty(o)){var s=y(this,t,a,this._tracks[o],o,e)
s&&(this._clipList.push(s),r++,this.animation&&this.animation.addClip(s),n=s)}if(n){var l=n.onframe
n.onframe=function(t,e){l(t,e)
for(var n=0;n<i._onframeList.length;n++)i._onframeList[n](t,e)}}return r||this._doneCallback(),this},stop:function(t){for(var e=this._clipList,n=this.animation,i=0;i<e.length;i++){var r=e[i]
t&&r.onframe(this._target,1),n&&n.removeClip(r)}e.length=0},delay:function(t){return this._delay=t,this},done:function(t){return t&&this._doneList.push(t),this},getClips:function(){return this._clipList}}
var _=x
t.exports=_},1337:function(t,e){var n=function(){this.head=null,this.tail=null,this._len=0},i=n.prototype
i.insert=function(t){var e=new r(t)
return this.insertEntry(e),e},i.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},i.remove=function(t){var e=t.prev,n=t.next
e?e.next=n:this.head=n,n?n.prev=e:this.tail=e,t.next=t.prev=null,this._len--},i.len=function(){return this._len},i.clear=function(){this.head=this.tail=null,this._len=0}
var r=function(t){this.value=t,this.next,this.prev},a=function(t){this._list=new n,this._map={},this._maxSize=t||10,this._lastRemovedEntry=null},o=a.prototype
o.put=function(t,e){var n=this._list,i=this._map,a=null
if(null==i[t]){var o=n.len(),s=this._lastRemovedEntry
if(o>=this._maxSize&&o>0){var l=n.head
n.remove(l),delete i[l.key],a=l.value,this._lastRemovedEntry=l}s?s.value=e:s=new r(e),s.key=t,n.insertEntry(s),i[t]=s}return a},o.get=function(t){var e=this._map[t],n=this._list
if(null!=e)return e!==n.tail&&(n.remove(e),n.insertEntry(e)),e.value},o.clear=function(){this._list.clear(),this._map={}}
var s=a
t.exports=s},1338:function(t,e,n){var i=n(1314).debugMode,r=function(){}
1===i?r=function(){for(var t in arguments)throw new Error(arguments[t])}:i>1&&(r=function(){for(var t in arguments)console.log(arguments[t])})
var a=r
t.exports=a},1339:function(t,e,n){var i=n(1340),r=[["shadowBlur",0],["shadowOffsetX",0],["shadowOffsetY",0],["shadowColor","#000"],["lineCap","butt"],["lineJoin","miter"],["miterLimit",10]],a=function(t,e){this.extendFrom(t,!1),this.host=e}
for(var o=a.prototype={constructor:a,host:null,fill:"#000",stroke:null,opacity:1,lineDash:null,lineDashOffset:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,lineWidth:1,strokeNoScale:!1,text:null,font:null,textFont:null,fontStyle:null,fontWeight:null,fontSize:null,fontFamily:null,textTag:null,textFill:"#000",textStroke:null,textWidth:null,textHeight:null,textStrokeWidth:0,textLineHeight:null,textPosition:"inside",textRect:null,textOffset:null,textAlign:null,textVerticalAlign:null,textDistance:5,textShadowColor:"transparent",textShadowBlur:0,textShadowOffsetX:0,textShadowOffsetY:0,textBoxShadowColor:"transparent",textBoxShadowBlur:0,textBoxShadowOffsetX:0,textBoxShadowOffsetY:0,transformText:!1,textRotation:0,textOrigin:null,textBackgroundColor:null,textBorderColor:null,textBorderWidth:0,textBorderRadius:0,textPadding:null,rich:null,truncate:null,blend:null,bind:function(t,e,n){for(var a=n&&n.style,o=!a,s=0;s<r.length;s++){var l=r[s],u=l[0];(o||this[u]!==a[u])&&(t[u]=i(t,u,this[u]||l[1]))}if((o||this.fill!==a.fill)&&(t.fillStyle=this.fill),(o||this.stroke!==a.stroke)&&(t.strokeStyle=this.stroke),(o||this.opacity!==a.opacity)&&(t.globalAlpha=null==this.opacity?1:this.opacity),(o||this.blend!==a.blend)&&(t.globalCompositeOperation=this.blend||"source-over"),this.hasStroke()){var h=this.lineWidth
t.lineWidth=h/(this.strokeNoScale&&e&&e.getLineScale?e.getLineScale():1)}},hasFill:function(){var t=this.fill
return null!=t&&"none"!==t},hasStroke:function(){var t=this.stroke
return null!=t&&"none"!==t&&this.lineWidth>0},extendFrom:function(t,e){if(t)for(var n in t)!t.hasOwnProperty(n)||!0!==e&&(!1===e?this.hasOwnProperty(n):null==t[n])||(this[n]=t[n])},set:function(t,e){"string"==typeof t?this[t]=e:this.extendFrom(t,!0)},clone:function(){var t=new this.constructor
return t.extendFrom(this,!0),t},getGradient:function(t,e,n){for(var i=("radial"===e.type?function(t,e,n){var i=n.width,r=n.height,a=Math.min(i,r),o=null==e.x?.5:e.x,s=null==e.y?.5:e.y,l=null==e.r?.5:e.r
return e.global||(o=o*i+n.x,s=s*r+n.y,l*=a),t.createRadialGradient(o,s,0,o,s,l)}:function(t,e,n){var i=null==e.x?0:e.x,r=null==e.x2?1:e.x2,a=null==e.y?0:e.y,o=null==e.y2?0:e.y2
return e.global||(i=i*n.width+n.x,r=r*n.width+n.x,a=a*n.height+n.y,o=o*n.height+n.y),i=isNaN(i)?0:i,r=isNaN(r)?1:r,a=isNaN(a)?0:a,o=isNaN(o)?0:o,t.createLinearGradient(i,a,r,o)})(t,e,n),r=e.colorStops,a=0;a<r.length;a++)i.addColorStop(r[a].offset,r[a].color)
return i}},s=0;s<r.length;s++){var l=r[s]
l[0]in o||(o[l[0]]=l[1])}a.getGradient=o.getGradient
var u=a
t.exports=u},1340:function(t,e){var n={shadowBlur:1,shadowOffsetX:1,shadowOffsetY:1,textShadowBlur:1,textShadowOffsetX:1,textShadowOffsetY:1,textBoxShadowBlur:1,textBoxShadowOffsetX:1,textBoxShadowOffsetY:1}
t.exports=function(t,e,i){return n.hasOwnProperty(e)?i*t.dpr:i}},1341:function(t,e){var n=function(t,e){this.image=t,this.repeat=e,this.type="pattern"}
n.prototype.getCanvasPattern=function(t){return t.createPattern(this.image,this.repeat||"repeat")}
var i=n
t.exports=i},1342:function(t,e){var n="undefined"!=typeof window&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(t){setTimeout(t,16)}
t.exports=n},1343:function(t,e,n){var i=n(1315),r=n(1296),a=n(1288),o=n(1322)
function s(t){i.call(this,t)}s.prototype={constructor:s,type:"image",brush:function(t,e){var n=this.style,i=n.image
n.bind(t,this,e)
var r=this._image=o.createOrUpdateImage(i,this._image,this,this.onload)
if(r&&o.isImageReady(r)){var a=n.x||0,s=n.y||0,l=n.width,u=n.height,h=r.width/r.height
if(null==l&&null!=u?l=u*h:null==u&&null!=l?u=l/h:null==l&&null==u&&(l=r.width,u=r.height),this.setTransform(t),n.sWidth&&n.sHeight){var c=n.sx||0,f=n.sy||0
t.drawImage(r,c,f,n.sWidth,n.sHeight,a,s,l,u)}else if(n.sx&&n.sy){var d=l-(c=n.sx),p=u-(f=n.sy)
t.drawImage(r,c,f,d,p,a,s,l,u)}else t.drawImage(r,a,s,l,u)
null!=n.text&&(this.restoreTransform(t),this.drawRectText(t,this.getBoundingRect()))}},getBoundingRect:function(){var t=this.style
return this._rect||(this._rect=new r(t.x||0,t.y||0,t.width||0,t.height||0)),this._rect}},a.inherits(s,i)
var l=s
t.exports=l},1344:function(t,e,n){var i=n(1288),r=i.retrieve2,a=i.retrieve3,o=i.each,s=i.normalizeCssArray,l=i.isString,u=i.isObject,h=n(1302),c=n(1345),f=n(1322),d=n(1340),p={left:1,right:1,center:1},g={top:1,bottom:1,middle:1}
function m(t){if(t){t.font=h.makeFont(t)
var e=t.textAlign
"middle"===e&&(e="center"),t.textAlign=null==e||p[e]?e:"left"
var n=t.textVerticalAlign||t.textBaseline
"center"===n&&(n="middle"),t.textVerticalAlign=null==n||g[n]?n:"top",t.textPadding&&(t.textPadding=s(t.textPadding))}}function v(t,e,n,i,r){if(n&&e.textRotation){var a=e.textOrigin
"center"===a?(i=n.width/2+n.x,r=n.height/2+n.y):a&&(i=a[0]+n.x,r=a[1]+n.y),t.translate(i,r),t.rotate(-e.textRotation),t.translate(-i,-r)}}function y(t,e,n,i,o,s,l,u){var c=i.rich[n.styleName]||{},f=n.textVerticalAlign,d=s+o/2
"top"===f?d=s+n.height/2:"bottom"===f&&(d=s+o-n.height/2),!n.isLineHolder&&x(c)&&_(t,e,c,"right"===u?l-n.width:"center"===u?l-n.width/2:l,d-n.height/2,n.width,n.height)
var p=n.textPadding
p&&(l=D(l,u,p),d-=n.height/2-p[2]-n.textHeight/2),S(e,"shadowBlur",a(c.textShadowBlur,i.textShadowBlur,0)),S(e,"shadowColor",c.textShadowColor||i.textShadowColor||"transparent"),S(e,"shadowOffsetX",a(c.textShadowOffsetX,i.textShadowOffsetX,0)),S(e,"shadowOffsetY",a(c.textShadowOffsetY,i.textShadowOffsetY,0)),S(e,"textAlign",u),S(e,"textBaseline","middle"),S(e,"font",n.font||h.DEFAULT_FONT)
var g=M(c.textStroke||i.textStroke,v),m=T(c.textFill||i.textFill),v=r(c.textStrokeWidth,i.textStrokeWidth)
g&&(S(e,"lineWidth",v),S(e,"strokeStyle",g),e.strokeText(n.text,l,d)),m&&(S(e,"fillStyle",m),e.fillText(n.text,l,d))}function x(t){return t.textBackgroundColor||t.textBorderWidth&&t.textBorderColor}function _(t,e,n,i,r,a,o){var s=n.textBackgroundColor,h=n.textBorderWidth,d=n.textBorderColor,p=l(s)
if(S(e,"shadowBlur",n.textBoxShadowBlur||0),S(e,"shadowColor",n.textBoxShadowColor||"transparent"),S(e,"shadowOffsetX",n.textBoxShadowOffsetX||0),S(e,"shadowOffsetY",n.textBoxShadowOffsetY||0),p||h&&d){e.beginPath()
var g=n.textBorderRadius
g?c.buildPath(e,{x:i,y:r,width:a,height:o,r:g}):e.rect(i,r,a,o),e.closePath()}if(p)S(e,"fillStyle",s),e.fill()
else if(u(s)){var m=s.image;(m=f.createOrUpdateImage(m,null,t,b,s))&&f.isImageReady(m)&&e.drawImage(m,i,r,a,o)}h&&d&&(S(e,"lineWidth",h),S(e,"strokeStyle",d),e.stroke())}function b(t,e){e.image=t}function w(t,e,n){var i=e.x||0,r=e.y||0,a=e.textAlign,o=e.textVerticalAlign
if(n){var s=e.textPosition
if(s instanceof Array)i=n.x+k(s[0],n.width),r=n.y+k(s[1],n.height)
else{var l=h.adjustTextPositionOnRect(s,n,e.textDistance)
i=l.x,r=l.y,a=a||l.textAlign,o=o||l.textVerticalAlign}var u=e.textOffset
u&&(i+=u[0],r+=u[1])}return{baseX:i,baseY:r,textAlign:a,textVerticalAlign:o}}function S(t,e,n){return t[e]=d(t,e,n),t[e]}function M(t,e){return null==t||e<=0||"transparent"===t||"none"===t?null:t.image||t.colorStops?"#000":t}function T(t){return null==t||"none"===t?null:t.image||t.colorStops?"#000":t}function k(t,e){return"string"==typeof t?t.lastIndexOf("%")>=0?parseFloat(t)/100*e:parseFloat(t):t}function D(t,e,n){return"right"===e?t-n[1]:"center"===e?t+n[3]/2-n[1]/2:t+n[3]}e.normalizeTextStyle=function(t){return m(t),o(t.rich,m),t},e.renderText=function(t,e,n,i,r){i.rich?function(t,e,n,i,r){var a=t.__textCotentBlock
a&&!t.__dirty||(a=t.__textCotentBlock=h.parseRichText(n,i)),function(t,e,n,i,r){var a=n.width,o=n.outerWidth,s=n.outerHeight,l=i.textPadding,u=w(0,i,r),c=u.baseX,f=u.baseY,d=u.textAlign,p=u.textVerticalAlign
v(e,i,r,c,f)
var g=h.adjustTextX(c,o,d),m=h.adjustTextY(f,s,p),b=g,S=m
l&&(b+=l[3],S+=l[0])
var M=b+a
x(i)&&_(t,e,i,g,m,o,s)
for(var T=0;T<n.lines.length;T++){for(var k,D=n.lines[T],C=D.tokens,A=C.length,I=D.lineHeight,O=D.width,P=0,L=b,E=M,R=A-1;P<A&&(!(k=C[P]).textAlign||"left"===k.textAlign);)y(t,e,k,i,I,S,L,"left"),O-=k.width,L+=k.width,P++
for(;R>=0&&"right"===(k=C[R]).textAlign;)y(t,e,k,i,I,S,E,"right"),O-=k.width,E-=k.width,R--
for(L+=(a-(L-b)-(M-E)-O)/2;P<=R;)y(t,e,k=C[P],i,I,S,L+k.width/2,"center"),L+=k.width,P++
S+=I}}(t,e,a,i,r)}(t,e,n,i,r):function(t,e,n,i,r){var a=S(e,"font",i.font||h.DEFAULT_FONT),o=i.textPadding,s=t.__textCotentBlock
s&&!t.__dirty||(s=t.__textCotentBlock=h.parsePlainText(n,a,o,i.truncate))
var l=s.outerHeight,u=s.lines,c=s.lineHeight,f=w(0,i,r),d=f.baseX,p=f.baseY,g=f.textAlign,m=f.textVerticalAlign
v(e,i,r,d,p)
var y=h.adjustTextY(p,l,m),b=d,k=y,C=x(i)
if(C||o){var A=h.getWidth(n,a)
o&&(A+=o[1]+o[3])
var I=h.adjustTextX(d,A,g)
C&&_(t,e,i,I,y,A,l),o&&(b=D(d,g,o),k+=o[0])}S(e,"textAlign",g||"left"),S(e,"textBaseline","middle"),S(e,"shadowBlur",i.textShadowBlur||0),S(e,"shadowColor",i.textShadowColor||"transparent"),S(e,"shadowOffsetX",i.textShadowOffsetX||0),S(e,"shadowOffsetY",i.textShadowOffsetY||0),k+=c/2
var O=i.textStrokeWidth,P=M(i.textStroke,O),L=T(i.textFill)
P&&(S(e,"lineWidth",O),S(e,"strokeStyle",P)),L&&S(e,"fillStyle",L)
for(var E=0;E<u.length;E++)P&&e.strokeText(u[E],b,k),L&&e.fillText(u[E],b,k),k+=c}(t,e,n,i,r)},e.getStroke=M,e.getFill=T,e.needDrawText=function(t,e){return null!=t&&(t||e.textBackgroundColor||e.textBorderWidth&&e.textBorderColor||e.textPadding)}},1345:function(t,e){e.buildPath=function(t,e){var n,i,r,a,o,s=e.x,l=e.y,u=e.width,h=e.height,c=e.r
u<0&&(s+=u,u=-u),h<0&&(l+=h,h=-h),"number"==typeof c?n=i=r=a=c:c instanceof Array?1===c.length?n=i=r=a=c[0]:2===c.length?(n=r=c[0],i=a=c[1]):3===c.length?(n=c[0],i=a=c[1],r=c[2]):(n=c[0],i=c[1],r=c[2],a=c[3]):n=i=r=a=0,n+i>u&&(n*=u/(o=n+i),i*=u/o),r+a>u&&(r*=u/(o=r+a),a*=u/o),i+r>h&&(i*=h/(o=i+r),r*=h/o),n+a>h&&(n*=h/(o=n+a),a*=h/o),t.moveTo(s+n,l),t.lineTo(s+u-i,l),0!==i&&t.arc(s+u-i,l+i,i,-Math.PI/2,0),t.lineTo(s+u,l+h-r),0!==r&&t.arc(s+u-r,l+h-r,r,0,Math.PI/2),t.lineTo(s+a,l+h),0!==a&&t.arc(s+a,l+h-a,a,Math.PI/2,Math.PI),t.lineTo(s,l+n),0!==n&&t.arc(s+n,l+n,n,Math.PI,1.5*Math.PI)}},1346:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=i.each,a=i.filter,o=i.map,s=i.isArray,l=i.indexOf,u=i.isObject,h=i.isString,c=i.createHashMap,f=i.assert,d=i.clone,p=i.merge,g=i.extend,m=i.mixin,v=n(1289),y=n(1298),x=n(1300),_=n(1415),b=n(1352),w=n(1318).resetSourceDefaulter,S="\0_ec_inner",M=y.extend({init:function(t,e,n,i){n=n||{},this.option=null,this._theme=new y(n),this._optionManager=i},setOption:function(t,e){f(!(S in t),"please use chart.getOption()"),this._optionManager.setOption(t,e),this.resetOption(null)},resetOption:function(t){var e=!1,n=this._optionManager
if(!t||"recreate"===t){var i=n.mountOption("recreate"===t)
this.option&&"recreate"!==t?(this.restoreData(),this.mergeOption(i)):function(t){t=t,this.option={},this.option[S]=1,this._componentsMap=c({series:[]}),this._seriesIndices,this._seriesIndicesMap,function(t,e){var n=t.color&&!t.colorLayer
r(e,function(e,i){"colorLayer"===i&&n||x.hasClass(i)||("object"==typeof e?t[i]=t[i]?p(t[i],e,!1):d(e):null==t[i]&&(t[i]=e))})}(t,this._theme.option),p(t,_,!1),this.mergeOption(t)}.call(this,i),e=!0}if("timeline"!==t&&"media"!==t||this.restoreData(),!t||"recreate"===t||"timeline"===t){var a=n.getTimelineOption(this)
a&&(this.mergeOption(a),e=!0)}if(!t||"recreate"===t||"media"===t){var o=n.getMediaOption(this,this._api)
o.length&&r(o,function(t){this.mergeOption(t,e=!0)},this)}return e},mergeOption:function(t){var e=this.option,n=this._componentsMap,i=[]
w(this),r(t,function(t,n){null!=t&&(x.hasClass(n)?n&&i.push(n):e[n]=null==e[n]?d(t):p(e[n],t,!0))}),x.topologicalTravel(i,x.getAllClassMainTypes(),function(i,a){var o=v.normalizeToArray(t[i]),l=v.mappingToExists(n.get(i),o)
v.makeIdAndName(l),r(l,function(t,e){var n=t.option
u(n)&&(t.keyInfo.mainType=i,t.keyInfo.subType=function(t,e,n){return e.type?e.type:n?n.subType:x.determineSubType(t,e)}(i,n,t.exist))})
var h=function(t,e){s(e)||(e=e?[e]:[])
var n={}
return r(e,function(e){n[e]=(t.get(e)||[]).slice()}),n}(n,a)
e[i]=[],n.set(i,[]),r(l,function(t,r){var a=t.exist,o=t.option
if(f(u(o)||a,"Empty component definition"),o){var s=x.getClass(i,t.keyInfo.subType,!0)
if(a&&a instanceof s)a.name=t.keyInfo.name,a.mergeOption(o,this),a.optionUpdated(o,!1)
else{var l=g({dependentModels:h,componentIndex:r},t.keyInfo)
a=new s(o,this,this,l),g(a,l),a.init(o,this,this,l),a.optionUpdated(null,!0)}}else a.mergeOption({},this),a.optionUpdated({},!1)
n.get(i)[r]=a,e[i][r]=a.option},this),"series"===i&&T(this,n.get("series"))},this),this._seriesIndicesMap=c(this._seriesIndices=this._seriesIndices||[])},getOption:function(){var t=d(this.option)
return r(t,function(e,n){if(x.hasClass(n)){for(var i=(e=v.normalizeToArray(e)).length-1;i>=0;i--)v.isIdInner(e[i])&&e.splice(i,1)
t[n]=e}}),delete t[S],t},getTheme:function(){return this._theme},getComponent:function(t,e){var n=this._componentsMap.get(t)
if(n)return n[e||0]},queryComponents:function(t){var e=t.mainType
if(!e)return[]
var n,i=t.index,r=t.id,u=t.name,h=this._componentsMap.get(e)
if(!h||!h.length)return[]
if(null!=i)s(i)||(i=[i]),n=a(o(i,function(t){return h[t]}),function(t){return!!t})
else if(null!=r){var c=s(r)
n=a(h,function(t){return c&&l(r,t.id)>=0||!c&&t.id===r})}else if(null!=u){var f=s(u)
n=a(h,function(t){return f&&l(u,t.name)>=0||!f&&t.name===u})}else n=h.slice()
return k(n,t)},findComponents:function(t){var e=t.query,n=t.mainType,i=function(t){var e=n+"Index",i=n+"Id",r=n+"Name"
return!t||null==t[e]&&null==t[i]&&null==t[r]?null:{mainType:n,index:t[e],id:t[i],name:t[r]}}(e)
return function(e){return t.filter?a(e,t.filter):e}(k(i?this.queryComponents(i):this._componentsMap.get(n),t))},eachComponent:function(t,e,n){var i=this._componentsMap
if("function"==typeof t)n=e,e=t,i.each(function(t,i){r(t,function(t,r){e.call(n,i,t,r)})})
else if(h(t))r(i.get(t),e,n)
else if(u(t)){var a=this.findComponents(t)
r(a,e,n)}},getSeriesByName:function(t){var e=this._componentsMap.get("series")
return a(e,function(e){return e.name===t})},getSeriesByIndex:function(t){return this._componentsMap.get("series")[t]},getSeriesByType:function(t){var e=this._componentsMap.get("series")
return a(e,function(e){return e.subType===t})},getSeries:function(){return this._componentsMap.get("series").slice()},getSeriesCount:function(){return this._componentsMap.get("series").length},eachSeries:function(t,e){r(this._seriesIndices,function(n){var i=this._componentsMap.get("series")[n]
t.call(e,i,n)},this)},eachRawSeries:function(t,e){r(this._componentsMap.get("series"),t,e)},eachSeriesByType:function(t,e,n){r(this._seriesIndices,function(i){var r=this._componentsMap.get("series")[i]
r.subType===t&&e.call(n,r,i)},this)},eachRawSeriesByType:function(t,e,n){return r(this.getSeriesByType(t),e,n)},isSeriesFiltered:function(t){return null==this._seriesIndicesMap.get(t.componentIndex)},getCurrentSeriesIndices:function(){return(this._seriesIndices||[]).slice()},filterSeries:function(t,e){T(this,a(this._componentsMap.get("series"),t,e))},restoreData:function(t){var e=this._componentsMap
T(this,e.get("series"))
var n=[]
e.each(function(t,e){n.push(e)}),x.topologicalTravel(n,x.getAllClassMainTypes(),function(n,i){r(e.get(n),function(e){("series"!==n||!function(t,e){if(e){var n=e.seiresIndex,i=e.seriesId,r=e.seriesName
return null!=n&&t.componentIndex!==n||null!=i&&t.id!==i||null!=r&&t.name!==r}}(e,t))&&e.restoreData()})})}})
function T(t,e){t._seriesIndicesMap=c(t._seriesIndices=o(e,function(t){return t.componentIndex})||[])}function k(t,e){return e.hasOwnProperty("subType")?a(t,function(t){return t.subType===e.subType}):t}m(M,b)
var D=M
t.exports=D},1347:function(t,e,n){var i=n(1291),r=n(1303),a=Math.min,o=Math.max,s=Math.sin,l=Math.cos,u=2*Math.PI,h=i.create(),c=i.create(),f=i.create(),d=[],p=[]
e.fromPoints=function(t,e,n){if(0!==t.length){var i,r=t[0],s=r[0],l=r[0],u=r[1],h=r[1]
for(i=1;i<t.length;i++)r=t[i],s=a(s,r[0]),l=o(l,r[0]),u=a(u,r[1]),h=o(h,r[1])
e[0]=s,e[1]=u,n[0]=l,n[1]=h}},e.fromLine=function(t,e,n,i,r,s){r[0]=a(t,n),r[1]=a(e,i),s[0]=o(t,n),s[1]=o(e,i)},e.fromCubic=function(t,e,n,i,s,l,u,h,c,f){var g,m=r.cubicExtrema,v=r.cubicAt,y=m(t,n,s,u,d)
for(c[0]=1/0,c[1]=1/0,f[0]=-1/0,f[1]=-1/0,g=0;g<y;g++){var x=v(t,n,s,u,d[g])
c[0]=a(x,c[0]),f[0]=o(x,f[0])}for(y=m(e,i,l,h,p),g=0;g<y;g++){var _=v(e,i,l,h,p[g])
c[1]=a(_,c[1]),f[1]=o(_,f[1])}c[0]=a(t,c[0]),f[0]=o(t,f[0]),c[0]=a(u,c[0]),f[0]=o(u,f[0]),c[1]=a(e,c[1]),f[1]=o(e,f[1]),c[1]=a(h,c[1]),f[1]=o(h,f[1])},e.fromQuadratic=function(t,e,n,i,s,l,u,h){var c=r.quadraticExtremum,f=r.quadraticAt,d=o(a(c(t,n,s),1),0),p=o(a(c(e,i,l),1),0),g=f(t,n,s,d),m=f(e,i,l,p)
u[0]=a(t,s,g),u[1]=a(e,l,m),h[0]=o(t,s,g),h[1]=o(e,l,m)},e.fromArc=function(t,e,n,r,a,o,d,p,g){var m=i.min,v=i.max,y=Math.abs(a-o)
if(y%u<1e-4&&y>1e-4)return p[0]=t-n,p[1]=e-r,g[0]=t+n,void(g[1]=e+r)
if(h[0]=l(a)*n+t,h[1]=s(a)*r+e,c[0]=l(o)*n+t,c[1]=s(o)*r+e,m(p,h,c),v(g,h,c),(a%=u)<0&&(a+=u),(o%=u)<0&&(o+=u),a>o&&!d?o+=u:a<o&&d&&(a+=u),d){var x=o
o=a,a=x}for(var _=0;_<o;_+=Math.PI/2)_>a&&(f[0]=l(_)*n+t,f[1]=s(_)*r+e,m(p,f,p),v(g,f,g))}},1348:function(t,e){var n=2*Math.PI
e.normalizeRadian=function(t){return(t%=n)<0&&(t+=n),t}},1349:function(t,e){t.exports=function(t,e,n,i,r,a){if(a>e&&a>i||a<e&&a<i)return 0
if(i===e)return 0
var o=i<e?1:-1,s=(a-e)/(i-e)
1!==s&&0!==s||(o=i<e?.5:-.5)
var l=s*(n-t)+t
return l===r?1/0:l>r?o:0}},1350:function(t,e,n){var i=n(1294),r=[["shadowBlur",0],["shadowColor","#000"],["shadowOffsetX",0],["shadowOffsetY",0]]
t.exports=function(t){return i.browser.ie&&i.browser.version>=11?function(){var e,n=this.__clipPaths,i=this.style
if(n)for(var a=0;a<n.length;a++){var o=n[a],s=o&&o.shape,l=o&&o.type
if(s&&("sector"===l&&s.startAngle===s.endAngle||"rect"===l&&(!s.width||!s.height))){for(var u=0;u<r.length;u++)r[u][2]=i[r[u][0]],i[r[u][0]]=r[u][1]
e=!0
break}}if(t.apply(this,arguments),e)for(u=0;u<r.length;u++)i[r[u][0]]=r[u][2]}:t}},1351:function(t,e,n){var i=n(1402),r=n(1403)
e.buildPath=function(t,e,n){var a=e.points,o=e.smooth
if(a&&a.length>=2){if(o&&"spline"!==o){var s=r(a,o,n,e.smoothConstraint)
t.moveTo(a[0][0],a[0][1])
for(var l=a.length,u=0;u<(n?l:l-1);u++){var h=s[2*u],c=s[2*u+1],f=a[(u+1)%l]
t.bezierCurveTo(h[0],h[1],c[0],c[1],f[0],f[1])}}else{"spline"===o&&(a=i(a,n)),t.moveTo(a[0][0],a[0][1]),u=1
for(var d=a.length;u<d;u++)t.lineTo(a[u][0],a[u][1])}n&&t.closePath()}}},1352:function(t,e,n){var i=n(1289),r=i.makeInner,a=i.normalizeToArray,o=r(),s={clearColorPalette:function(){o(this).colorIdx=0,o(this).colorNameMap={}},getColorFromPalette:function(t,e,n){var i=o(e=e||this),r=i.colorIdx||0,s=i.colorNameMap=i.colorNameMap||{}
if(s.hasOwnProperty(t))return s[t]
var l=a(this.get("color",!0)),u=this.get("colorLayer",!0),h=null!=n&&u?function(t,e){for(var n=t.length,i=0;i<n;i++)if(t[i].length>e)return t[i]
return t[n-1]}(u,n):l
if((h=h||l)&&h.length){var c=h[r]
return t&&(s[t]=c),i.colorIdx=(r+1)%h.length,c}}}
t.exports=s},1353:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=i.createHashMap,a=(i.retrieve,i.each),o={cartesian2d:function(t,e,n,i){var r=t.getReferringComponents("xAxis")[0],a=t.getReferringComponents("yAxis")[0]
e.coordSysDims=["x","y"],n.set("x",r),n.set("y",a),s(r)&&(i.set("x",r),e.firstCategoryDimIndex=0),s(a)&&(i.set("y",a),e.firstCategoryDimIndex=1)},singleAxis:function(t,e,n,i){var r=t.getReferringComponents("singleAxis")[0]
e.coordSysDims=["single"],n.set("single",r),s(r)&&(i.set("single",r),e.firstCategoryDimIndex=0)},polar:function(t,e,n,i){var r=t.getReferringComponents("polar")[0],a=r.findAxisModel("radiusAxis"),o=r.findAxisModel("angleAxis")
e.coordSysDims=["radius","angle"],n.set("radius",a),n.set("angle",o),s(a)&&(i.set("radius",a),e.firstCategoryDimIndex=0),s(o)&&(i.set("angle",o),e.firstCategoryDimIndex=1)},geo:function(t,e,n,i){e.coordSysDims=["lng","lat"]},parallel:function(t,e,n,i){var r=t.ecModel,o=r.getComponent("parallel",t.get("parallelIndex")),l=e.coordSysDims=o.dimensions.slice()
a(o.parallelAxisIndex,function(t,a){var o=r.getComponent("parallelAxis",t),u=l[a]
n.set(u,o),s(o)&&null==e.firstCategoryDimIndex&&(i.set(u,o),e.firstCategoryDimIndex=a)})}}
function s(t){return"category"===t.get("type")}e.getCoordSysDefineBySeries=function(t){var e=t.get("coordinateSystem"),n={coordSysName:e,coordSysDims:[],axisMap:r(),categoryAxisMap:r()},i=o[e]
if(i)return i(t,n,n.axisMap,n.categoryAxisMap),n}},1354:function(t,e,n){var i=n(1288),r=["getDom","getZr","getWidth","getHeight","getDevicePixelRatio","dispatchAction","isDisposed","on","off","getDataURL","getConnectedDataURL","getModel","getOption","getViewOfComponentModel","getViewOfSeriesModel"]
t.exports=function(t){i.each(r,function(e){this[e]=i.bind(t[e],t)},this)}},1355:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=n(1294),a=n(1297),o=a.formatTime,s=a.encodeHTML,l=a.addCommas,u=a.getTooltipMarker,h=n(1289),c=n(1300),f=n(1352),d=n(1420),p=n(1304),g=p.getLayoutParams,m=p.mergeLayoutParam,v=n(1326).createTask,y=n(1318),x=y.prepareSource,_=y.getSource,b=n(1312).retrieveRawValue,w=h.makeInner(),S=c.extend({type:"series.__base__",seriesIndex:0,coordinateSystem:null,defaultOption:null,legendDataProvider:null,visualColorAccessPath:"itemStyle.color",layoutMode:null,init:function(t,e,n,i){this.seriesIndex=this.componentIndex,this.dataTask=v({count:T,reset:k}),this.dataTask.context={model:this},this.mergeDefaultAndTheme(t,n),x(this)
var r=this.getInitialData(t,n)
C(r,this),this.dataTask.context.data=r,w(this).dataBeforeProcessed=r,M(this)},mergeDefaultAndTheme:function(t,e){var n=this.layoutMode,r=n?g(t):{},a=this.subType
c.hasClass(a)&&(a+="Series"),i.merge(t,e.getTheme().get(this.subType)),i.merge(t,this.getDefaultOption()),h.defaultEmphasis(t,"label",["show"]),this.fillDataTextStyle(t.data),n&&m(t,r,n)},mergeOption:function(t,e){t=i.merge(this.option,t,!0),this.fillDataTextStyle(t.data)
var n=this.layoutMode
n&&m(this.option,t,n),x(this)
var r=this.getInitialData(t,e)
C(r,this),this.dataTask.dirty(),this.dataTask.context.data=r,w(this).dataBeforeProcessed=r,M(this)},fillDataTextStyle:function(t){if(t&&!i.isTypedArray(t))for(var e=["show"],n=0;n<t.length;n++)t[n]&&t[n].label&&h.defaultEmphasis(t[n],"label",e)},getInitialData:function(){},appendData:function(t){this.getRawData().appendData(t.data)},getData:function(t){var e=I(this)
if(e){var n=e.context.data
return null==t?n:n.getLinkedData(t)}return w(this).data},setData:function(t){var e=I(this)
if(e){var n=e.context
n.data!==t&&e.modifyOutputEnd&&e.setOutputEnd(t.count()),n.outputData=t,e!==this.dataTask&&(n.data=t)}w(this).data=t},getSource:function(){return _(this)},getRawData:function(){return w(this).dataBeforeProcessed},getBaseAxis:function(){var t=this.coordinateSystem
return t&&t.getBaseAxis&&t.getBaseAxis()},formatTooltip:function(t,e,n){var r=this.getData(),a=r.mapDimension("defaultedTooltip",!0),c=a.length,f=this.getRawValue(t),d=i.isArray(f),p=r.getItemVisual(t,"color")
i.isObject(p)&&p.colorStops&&(p=(p.colorStops[0]||{}).color),p=p||"transparent"
var g=c>1||d&&!c?function(n){var h=i.reduce(n,function(t,e,n){var i=r.getDimensionInfo(n)
return t|(i&&!1!==i.tooltip&&null!=i.displayName)},0),c=[]
function f(t,n){var i=r.getDimensionInfo(n)
if(i&&!1!==i.otherDims.tooltip){var a=i.type,f=u({color:p,type:"subItem"}),d=(h?f+s(i.displayName||"-")+": ":"")+s("ordinal"===a?t+"":"time"===a?e?"":o("yyyy/MM/dd hh:mm:ss",t):l(t))
d&&c.push(d)}}return a.length?i.each(a,function(e){f(b(r,t,e),e)}):i.each(n,f),(h?"<br/>":"")+c.join(h?"<br/>":", ")}(f):function(t){return s(l(t))}(c?b(r,t,a[0]):d?f[0]:f),m=u(p),v=r.getName(t),y=this.name
return h.isNameSpecified(this)||(y=""),y=y?s(y)+(e?": ":"<br/>"):"",e?m+y+g:y+m+(v?s(v)+": "+g:g)},isAnimationEnabled:function(){if(r.node)return!1
var t=this.getShallow("animation")
return t&&this.getData().count()>this.getShallow("animationThreshold")&&(t=!1),t},restoreData:function(){this.dataTask.dirty()},getColorFromPalette:function(t,e,n){var i=this.ecModel,r=f.getColorFromPalette.call(this,t,e,n)
return r||(r=i.getColorFromPalette(t,e,n)),r},coordDimToDataDim:function(t){return this.getRawData().mapDimension(t,!0)},getProgressive:function(){return this.get("progressive")},getProgressiveThreshold:function(){return this.get("progressiveThreshold")},getAxisTooltipData:null,getTooltipPosition:null,pipeTask:null,preventIncremental:null,pipelineContext:null})
function M(t){var e=t.name
h.isNameSpecified(t)||(t.name=function(t){var e=t.getRawData(),n=e.mapDimension("seriesName",!0),r=[]
return i.each(n,function(t){var n=e.getDimensionInfo(t)
n.displayName&&r.push(n.displayName)}),r.join(" ")}(t)||e)}function T(t){return t.model.getRawData().count()}function k(t){var e=t.model
return e.setData(e.getRawData().cloneShallow()),D}function D(t,e){t.end>e.outputData.count()&&e.model.getRawData().cloneShallow(e.outputData)}function C(t,e){i.each(t.CHANGABLE_METHODS,function(n){t.wrapMethod(n,i.curry(A,e))})}function A(t){var e=I(t)
e&&e.setOutputEnd(this.count())}function I(t){var e=(t.ecModel||{}).scheduler,n=e&&e.getPipeline(t.uid)
if(n){var i=n.currentTask
if(i){var r=i.agentStubMap
r&&(i=r.get(t.uid))}return i}}i.mixin(S,d),i.mixin(S,f)
var O=S
t.exports=O},1356:function(t,e,n){var i=n(1313),r=n(1317),a=n(1299),o=function(){this.group=new i,this.uid=r.getUID("viewComponent")},s=o.prototype={constructor:o,init:function(t,e){},render:function(t,e,n,i){},dispose:function(){}}
s.updateView=s.updateLayout=s.updateVisual=function(t,e,n,i){},a.enableClassExtend(o),a.enableClassManagement(o,{registerWhenExtend:!0})
var l=o
t.exports=l},1357:function(t,e,n){var i=n(1288).each,r=n(1313),a=n(1317),o=n(1299),s=n(1289),l=n(1326).createTask,u=n(1327),h=s.makeInner(),c=u()
function f(){this.group=new r,this.uid=a.getUID("viewChart"),this.renderTask=l({plan:m,reset:v}),this.renderTask.context={view:this}}f.prototype={type:"chart",init:function(t,e){},render:function(t,e,n,i){},highlight:function(t,e,n,i){g(t.getData(),i,"emphasis")},downplay:function(t,e,n,i){g(t.getData(),i,"normal")},remove:function(t,e){this.group.removeAll()},dispose:function(){},incrementalPrepareRender:null,incrementalRender:null,updateTransform:null}
var d=f.prototype
function p(t,e){if(t&&(t.trigger(e),"group"===t.type))for(var n=0;n<t.childCount();n++)p(t.childAt(n),e)}function g(t,e,n){var r=s.queryDataIndex(t,e)
null!=r?i(s.normalizeToArray(r),function(e){p(t.getItemGraphicEl(e),n)}):t.eachItemGraphicEl(function(t){p(t,n)})}function m(t){return c(t.model)}function v(t){var e=t.model,n=t.ecModel,i=t.api,r=t.payload,a=e.pipelineContext.progressiveRender,o=t.view,s=r&&h(r).updateMethod,l=a?"incrementalPrepareRender":s&&o[s]?s:"render"
return"render"!==l&&o[l](e,n,i,r),y[l]}d.updateView=d.updateLayout=d.updateVisual=function(t,e,n,i){this.render(t,e,n,i)},o.enableClassExtend(f,["dispose"]),o.enableClassManagement(f,{registerWhenExtend:!0}),f.markUpdateMethod=function(t,e){h(t).updateMethod=e}
var y={incrementalPrepareRender:{progress:function(t,e){e.view.incrementalRender(t,e.model,e.ecModel,e.api,e.payload)}},render:{forceFirstProgress:!0,progress:function(t,e){e.view.render(e.model,e.ecModel,e.api,e.payload)}}},x=f
t.exports=x},1358:function(t,e,n){var i=n(1288),r=n(1359),a=n(1360),o=n(1311).SOURCE_FORMAT_ORIGINAL,s=n(1329).getDimensionTypeByAxis,l=n(1289).getDataItemValue,u=n(1325),h=n(1353).getCoordSysDefineBySeries,c=n(1310),f=n(1305).enableDataStack
t.exports=function(t,e,n){n=n||{},c.isInstance(t)||(t=c.seriesDataToSource(t))
var d,p=e.get("coordinateSystem"),g=u.get(p),m=h(e)
m&&(d=i.map(m.coordSysDims,function(t){var e={name:t},n=m.axisMap.get(t)
if(n){var i=n.get("type")
e.type=s(i)}return e})),d||(d=g&&(g.getDimensionsInfo?g.getDimensionsInfo():g.dimensions.slice())||["x","y"])
var v,y,x=a(t,{coordDimensions:d,generateCoord:n.generateCoord})
m&&i.each(x,function(t,e){var n=t.coordDim,i=m.categoryAxisMap.get(n)
i&&(null==v&&(v=e),t.ordinalMeta=i.getOrdinalMeta()),null!=t.otherDims.itemName&&(y=!0)}),y||null==v||(x[v].otherDims.itemName=0)
var _=f(e,x),b=new r(x,e)
b.setCalculationInfo(_)
var w=null!=v&&function(t){if(t.sourceFormat===o){var e=function(t){for(var e=0;e<t.length&&null==t[e];)e++
return t[e]}(t.data||[])
return null!=e&&!i.isArray(l(e))}}(t)?function(t,e,n,i){return i===v?n:this.defaultDimValueGetter(t,e,n,i)}:null
return b.hasItemOption=!1,b.initData(t,null,w),b}},1359:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=n(1298),a=n(1431),o=n(1310),s=n(1312),l=s.defaultDimValueGetters,u=s.DefaultDataProvider,h=n(1329).summarizeDimensions,c=i.isObject,f="e\0\0",d={float:"undefined"==typeof Float64Array?Array:Float64Array,int:"undefined"==typeof Int32Array?Array:Int32Array,ordinal:Array,number:Array,time:Array},p="undefined"==typeof Uint32Array?Array:Uint32Array,g="undefined"==typeof Uint16Array?Array:Uint16Array
function m(t){return t._rawCount>65535?p:g}function v(t){var e=t.constructor
return e===Array?t.slice():new e(t)}var y=["hasItemOption","_nameList","_idList","_invertedIndicesMap","_rawData","_chunkSize","_chunkCount","_dimValueGetter","_count","_rawCount","_nameDimIdx","_idDimIdx"],x=["_extent","_approximateExtent","_rawExtent"]
function _(t,e){i.each(y.concat(e.__wrappedMethods||[]),function(n){e.hasOwnProperty(n)&&(t[n]=e[n])}),t.__wrappedMethods=e.__wrappedMethods,i.each(x,function(n){t[n]=i.clone(e[n])}),t._calculationInfo=i.extend(e._calculationInfo)}var b=function(t,e){t=t||["x","y"]
for(var n={},r=[],a={},o=0;o<t.length;o++){var s=t[o]
i.isString(s)&&(s={name:s})
var l=s.name
s.type=s.type||"float",s.coordDim||(s.coordDim=l,s.coordDimIndex=0),s.otherDims=s.otherDims||{},r.push(l),n[l]=s,s.index=o,s.createInvertedIndices&&(a[l]=[])}this.dimensions=r,this._dimensionInfos=n,this.hostModel=e,this.dataType,this._indices=null,this._count=0,this._rawCount=0,this._storage={},this._nameList=[],this._idList=[],this._optionModels=[],this._visual={},this._layout={},this._itemVisuals=[],this.hasItemVisual={},this._itemLayouts=[],this._graphicEls=[],this._chunkSize=1e5,this._chunkCount=0,this._rawData,this._rawExtent={},this._extent={},this._approximateExtent={},this._dimensionsSummary=h(this),this._invertedIndicesMap=a,this._calculationInfo={}},w=b.prototype
function S(t,e,n){var i
if(null!=e){var r=t._chunkSize,a=Math.floor(n/r),o=n%r,s=t.dimensions[e],l=t._storage[s][a]
if(l){i=l[o]
var u=t._dimensionInfos[s].ordinalMeta
u&&u.categories.length&&(i=u.categories[i])}}return i}function M(t){return t}function T(t){return t<this._count&&t>=0?this._indices[t]:-1}function k(t,e){var n=t._idList[e]
return null==n&&(n=S(t,t._idDimIdx,e)),null==n&&(n=f+e),n}function D(t){return i.isArray(t)||(t=[t]),t}function C(t,e){var n=t.dimensions,r=new b(i.map(n,t.getDimensionInfo,t),t.hostModel)
_(r,t)
for(var a=r._storage={},o=t._storage,s=0;s<n.length;s++){var l=n[s]
o[l]&&(i.indexOf(e,l)>=0?(a[l]=A(o[l]),r._rawExtent[l]=[1/0,-1/0],r._extent[l]=null):a[l]=o[l])}return r}function A(t){for(var e=new Array(t.length),n=0;n<t.length;n++)e[n]=v(t[n])
return e}w.type="list",w.hasItemOption=!0,w.getDimension=function(t){return isNaN(t)||(t=this.dimensions[t]||t),t},w.getDimensionInfo=function(t){return this._dimensionInfos[this.getDimension(t)]},w.getDimensionsOnCoord=function(){return this._dimensionsSummary.dataDimsOnCoord.slice()},w.mapDimension=function(t,e){var n=this._dimensionsSummary
if(null==e)return n.encodeFirstDimNotExtra[t]
var i=n.encode[t]
return!0===e?(i||[]).slice():i&&i[e]},w.initData=function(t,e,n){(o.isInstance(t)||i.isArrayLike(t))&&(t=new u(t,this.dimensions.length)),this._rawData=t,this._storage={},this._indices=null,this._nameList=e||[],this._idList=[],this._nameRepeatCount={},n||(this.hasItemOption=!1),this.defaultDimValueGetter=l[this._rawData.getSource().sourceFormat],this._dimValueGetter=n=n||this.defaultDimValueGetter,this._rawExtent={},this._initDataFromProvider(0,t.count()),t.pure&&(this.hasItemOption=!1)},w.getProvider=function(){return this._rawData},w.appendData=function(t){var e=this._rawData,n=this.count()
e.appendData(t)
var i=e.count()
e.persistent||(i+=n),this._initDataFromProvider(n,i)},w._initDataFromProvider=function(t,e){if(!(t>=e)){for(var n,r=this._chunkSize,a=this._rawData,o=this._storage,s=this.dimensions,l=s.length,u=this._dimensionInfos,h=this._nameList,c=this._idList,f=this._rawExtent,g=this._nameRepeatCount={},m=this._chunkCount,v=m-1,y=0;y<l;y++){f[A=s[y]]||(f[A]=[1/0,-1/0])
var x=u[A]
0===x.otherDims.itemName&&(n=this._nameDimIdx=y),0===x.otherDims.itemId&&(this._idDimIdx=y)
var _=d[x.type]
o[A]||(o[A]=[])
var b=o[A][v]
if(b&&b.length<r){for(var w=new _(Math.min(e-v*r,r)),S=0;S<b.length;S++)w[S]=b[S]
o[A][v]=w}for(var M=m*r;M<e;M+=r)o[A].push(new _(Math.min(e-M,r)))
this._chunkCount=o[A].length}for(var T=new Array(l),k=t;k<e;k++){T=a.getItem(k,T)
var D=Math.floor(k/r),C=k%r
for(M=0;M<l;M++){var A,I=o[A=s[M]][D],O=this._dimValueGetter(T,A,k,M)
I[C]=O
var P=f[A]
O<P[0]&&(P[0]=O),O>P[1]&&(P[1]=O)}if(!a.pure){var L=h[k]
if(T&&null==L)if(null!=T.name)h[k]=L=T.name
else if(null!=n){var E=s[n],R=o[E][D]
if(R){L=R[C]
var N=u[E].ordinalMeta
N&&N.categories.length&&(L=N.categories[L])}}var z=null==T?null:T.id
null==z&&null!=L&&(g[L]=g[L]||0,z=L,g[L]>0&&(z+="__ec__"+g[L]),g[L]++),null!=z&&(c[k]=z)}}!a.persistent&&a.clean&&a.clean(),this._rawCount=this._count=e,this._extent={},function(t){var e=t._invertedIndicesMap
i.each(e,function(n,i){var r=t._dimensionInfos[i].ordinalMeta
if(r){n=e[i]=new p(r.categories.length)
for(var a=0;a<n.length;a++)n[a]=NaN
for(a=0;a<t._count;a++)n[t.get(i,a)]=a}})}(this)}},w.count=function(){return this._count},w.getIndices=function(){var t=this._indices
if(t){var e=t.constructor,n=this._count
if(e===Array){r=new e(n)
for(var i=0;i<n;i++)r[i]=t[i]}else r=new e(t.buffer,0,n)}else{var r=new(e=m(this))(this.count())
for(i=0;i<r.length;i++)r[i]=i}return r},w.get=function(t,e){if(!(e>=0&&e<this._count))return NaN
var n=this._storage
if(!n[t])return NaN
e=this.getRawIndex(e)
var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize
return n[t][i][r]},w.getByRawIndex=function(t,e){if(!(e>=0&&e<this._rawCount))return NaN
var n=this._storage[t]
if(!n)return NaN
var i=Math.floor(e/this._chunkSize),r=e%this._chunkSize
return n[i][r]},w._getFast=function(t,e){var n=Math.floor(e/this._chunkSize),i=e%this._chunkSize
return this._storage[t][n][i]},w.getValues=function(t,e){var n=[]
i.isArray(t)||(e=t,t=this.dimensions)
for(var r=0,a=t.length;r<a;r++)n.push(this.get(t[r],e))
return n},w.hasValue=function(t){for(var e=this._dimensionsSummary.dataDimsOnCoord,n=this._dimensionInfos,i=0,r=e.length;i<r;i++)if("ordinal"!==n[e[i]].type&&isNaN(this.get(e[i],t)))return!1
return!0},w.getDataExtent=function(t){t=this.getDimension(t)
var e=[1/0,-1/0]
if(!this._storage[t])return e
var n,i=this.count()
if(!this._indices)return this._rawExtent[t].slice()
if(n=this._extent[t])return n.slice()
for(var r=(n=e)[0],a=n[1],o=0;o<i;o++){var s=this._getFast(t,this.getRawIndex(o))
s<r&&(r=s),s>a&&(a=s)}return n=[r,a],this._extent[t]=n,n},w.getApproximateExtent=function(t){return t=this.getDimension(t),this._approximateExtent[t]||this.getDataExtent(t)},w.setApproximateExtent=function(t,e){e=this.getDimension(e),this._approximateExtent[e]=t.slice()},w.getCalculationInfo=function(t){return this._calculationInfo[t]},w.setCalculationInfo=function(t,e){c(t)?i.extend(this._calculationInfo,t):this._calculationInfo[t]=e},w.getSum=function(t){var e=0
if(this._storage[t])for(var n=0,i=this.count();n<i;n++){var r=this.get(t,n)
isNaN(r)||(e+=r)}return e},w.getMedian=function(t){var e=[]
this.each(t,function(t,n){isNaN(t)||e.push(t)})
var n=[].concat(e).sort(function(t,e){return t-e}),i=this.count()
return 0===i?0:i%2==1?n[(i-1)/2]:(n[i/2]+n[i/2-1])/2},w.rawIndexOf=function(t,e){var n=(t&&this._invertedIndicesMap[t])[e]
return null==n||isNaN(n)?-1:n},w.indexOfName=function(t){for(var e=0,n=this.count();e<n;e++)if(this.getName(e)===t)return e
return-1},w.indexOfRawIndex=function(t){if(!this._indices)return t
if(t>=this._rawCount||t<0)return-1
var e=this._indices,n=e[t]
if(null!=n&&n<this._count&&n===t)return t
for(var i=0,r=this._count-1;i<=r;){var a=(i+r)/2|0
if(e[a]<t)i=a+1
else{if(!(e[a]>t))return a
r=a-1}}return-1},w.indicesOfNearest=function(t,e,n){var i=[]
if(!this._storage[t])return i
null==n&&(n=1/0)
for(var r=Number.MAX_VALUE,a=-1,o=0,s=this.count();o<s;o++){var l=e-this.get(t,o),u=Math.abs(l)
l<=n&&u<=r&&((u<r||l>=0&&a<0)&&(r=u,a=l,i.length=0),i.push(o))}return i},w.getRawIndex=M,w.getRawDataItem=function(t){if(this._rawData.persistent)return this._rawData.getItem(this.getRawIndex(t))
for(var e=[],n=0;n<this.dimensions.length;n++){var i=this.dimensions[n]
e.push(this.get(i,t))}return e},w.getName=function(t){var e=this.getRawIndex(t)
return this._nameList[e]||S(this,this._nameDimIdx,e)||""},w.getId=function(t){return k(this,this.getRawIndex(t))},w.each=function(t,e,n,r){"use strict"
if(this._count){"function"==typeof t&&(r=n,n=e,e=t,t=[]),n=n||r||this
for(var a=(t=i.map(D(t),this.getDimension,this)).length,o=0;o<this.count();o++)switch(a){case 0:e.call(n,o)
break
case 1:e.call(n,this.get(t[0],o),o)
break
case 2:e.call(n,this.get(t[0],o),this.get(t[1],o),o)
break
default:for(var s=0,l=[];s<a;s++)l[s]=this.get(t[s],o)
l[s]=o,e.apply(n,l)}}},w.filterSelf=function(t,e,n,r){"use strict"
if(this._count){"function"==typeof t&&(r=n,n=e,e=t,t=[]),n=n||r||this,t=i.map(D(t),this.getDimension,this)
for(var a=this.count(),o=new(m(this))(a),s=[],l=t.length,u=0,h=t[0],c=0;c<a;c++){var f,d=this.getRawIndex(c)
if(0===l)f=e.call(n,c)
else if(1===l){var p=this._getFast(h,d)
f=e.call(n,p,c)}else{for(var g=0;g<l;g++)s[g]=this._getFast(h,d)
s[g]=c,f=e.apply(n,s)}f&&(o[u++]=d)}return u<a&&(this._indices=o),this._count=u,this._extent={},this.getRawIndex=this._indices?T:M,this}},w.selectRange=function(t){"use strict"
if(this._count){var e=[]
for(var n in t)t.hasOwnProperty(n)&&e.push(n)
var i=e.length
if(i){var r=this.count(),a=new(m(this))(r),o=0,s=e[0],l=t[s][0],u=t[s][1],h=!1
if(!this._indices){var c=0
if(1===i){for(var f=this._storage[e[0]],d=0;d<this._chunkCount;d++)for(var p=f[d],g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++)((w=p[v])>=l&&w<=u||isNaN(w))&&(a[o++]=c),c++
h=!0}else if(2===i){f=this._storage[s]
var y=this._storage[e[1]],x=t[e[1]][0],_=t[e[1]][1]
for(d=0;d<this._chunkCount;d++){p=f[d]
var b=y[d]
for(g=Math.min(this._count-d*this._chunkSize,this._chunkSize),v=0;v<g;v++){var w=p[v],S=b[v];(w>=l&&w<=u||isNaN(w))&&(S>=x&&S<=_||isNaN(S))&&(a[o++]=c),c++}}h=!0}}if(!h)if(1===i)for(v=0;v<r;v++){var k=this.getRawIndex(v);((w=this._getFast(s,k))>=l&&w<=u||isNaN(w))&&(a[o++]=k)}else for(v=0;v<r;v++){var D=!0
for(k=this.getRawIndex(v),d=0;d<i;d++){var C=e[d];((w=this._getFast(n,k))<t[C][0]||w>t[C][1])&&(D=!1)}D&&(a[o++]=this.getRawIndex(v))}return o<r&&(this._indices=a),this._count=o,this._extent={},this.getRawIndex=this._indices?T:M,this}}},w.mapArray=function(t,e,n,i){"use strict"
"function"==typeof t&&(i=n,n=e,e=t,t=[]),n=n||i||this
var r=[]
return this.each(t,function(){r.push(e&&e.apply(this,arguments))},n),r},w.map=function(t,e,n,r){"use strict"
n=n||r||this
var a=C(this,t=i.map(D(t),this.getDimension,this))
a._indices=this._indices,a.getRawIndex=a._indices?T:M
for(var o=a._storage,s=[],l=this._chunkSize,u=t.length,h=this.count(),c=[],f=a._rawExtent,d=0;d<h;d++){for(var p=0;p<u;p++)c[p]=this.get(t[p],d)
c[u]=d
var g=e&&e.apply(n,c)
if(null!=g){"object"!=typeof g&&(s[0]=g,g=s)
for(var m=this.getRawIndex(d),v=Math.floor(m/l),y=m%l,x=0;x<g.length;x++){var _=t[x],b=g[x],w=f[_],S=o[_]
S&&(S[v][y]=b),b<w[0]&&(w[0]=b),b>w[1]&&(w[1]=b)}}}return a},w.downSample=function(t,e,n,i){for(var r=C(this,[t]),a=r._storage,o=[],s=Math.floor(1/e),l=a[t],u=this.count(),h=this._chunkSize,c=r._rawExtent[t],f=new(m(this))(u),d=0,p=0;p<u;p+=s){s>u-p&&(s=u-p,o.length=s)
for(var g=0;g<s;g++){var v=this.getRawIndex(p+g),y=Math.floor(v/h),x=v%h
o[g]=l[y][x]}var _=n(o),b=this.getRawIndex(Math.min(p+i(o,_)||0,u-1)),w=b%h
l[Math.floor(b/h)][w]=_,_<c[0]&&(c[0]=_),_>c[1]&&(c[1]=_),f[d++]=b}return r._count=d,r._indices=f,r.getRawIndex=T,r},w.getItemModel=function(t){var e=this.hostModel
return new r(this.getRawDataItem(t),e,e&&e.ecModel)},w.diff=function(t){var e=this
return new a(t?t.getIndices():[],this.getIndices(),function(e){return k(t,e)},function(t){return k(e,t)})},w.getVisual=function(t){var e=this._visual
return e&&e[t]},w.setVisual=function(t,e){if(c(t))for(var n in t)t.hasOwnProperty(n)&&this.setVisual(n,t[n])
else this._visual=this._visual||{},this._visual[t]=e},w.setLayout=function(t,e){if(c(t))for(var n in t)t.hasOwnProperty(n)&&this.setLayout(n,t[n])
else this._layout[t]=e},w.getLayout=function(t){return this._layout[t]},w.getItemLayout=function(t){return this._itemLayouts[t]},w.setItemLayout=function(t,e,n){this._itemLayouts[t]=n?i.extend(this._itemLayouts[t]||{},e):e},w.clearItemLayouts=function(){this._itemLayouts.length=0},w.getItemVisual=function(t,e,n){var i=this._itemVisuals[t],r=i&&i[e]
return null!=r||n?r:this.getVisual(e)},w.setItemVisual=function(t,e,n){var i=this._itemVisuals[t]||{},r=this.hasItemVisual
if(this._itemVisuals[t]=i,c(e))for(var a in e)e.hasOwnProperty(a)&&(i[a]=e[a],r[a]=!0)
else i[e]=n,r[e]=!0},w.clearAllVisual=function(){this._visual={},this._itemVisuals=[],this.hasItemVisual={}}
var I=function(t){t.seriesIndex=this.seriesIndex,t.dataIndex=this.dataIndex,t.dataType=this.dataType}
w.setItemGraphicEl=function(t,e){var n=this.hostModel
e&&(e.dataIndex=t,e.dataType=this.dataType,e.seriesIndex=n&&n.seriesIndex,"group"===e.type&&e.traverse(I,e)),this._graphicEls[t]=e},w.getItemGraphicEl=function(t){return this._graphicEls[t]},w.eachItemGraphicEl=function(t,e){i.each(this._graphicEls,function(n,i){n&&t&&t.call(e,n,i)})},w.cloneShallow=function(t){if(!t){var e=i.map(this.dimensions,this.getDimensionInfo,this)
t=new b(e,this.hostModel)}if(t._storage=this._storage,_(t,this),this._indices){var n=this._indices.constructor
t._indices=new n(this._indices)}else t._indices=null
return t.getRawIndex=t._indices?T:M,t},w.wrapMethod=function(t,e){var n=this[t]
"function"==typeof n&&(this.__wrappedMethods=this.__wrappedMethods||[],this.__wrappedMethods.push(t),this[t]=function(){var t=n.apply(this,arguments)
return e.apply(this,[t].concat(i.slice(arguments)))})},w.TRANSFERABLE_METHODS=["cloneShallow","downSample","map"],w.CHANGABLE_METHODS=["filterSelf","selectRange"]
var O=b
t.exports=O},1360:function(t,e,n){var i=n(1361)
t.exports=function(t,e){return i((e=e||{}).coordDimensions||[],t,{dimsDef:e.dimensionsDefine||t.dimensionsDefine,encodeDef:e.encodeDefine||t.encodeDefine,dimCount:e.dimensionsCount,generateCoord:e.generateCoord,generateCoordCount:e.generateCoordCount})}},1361:function(t,e,n){var i=n(1288),r=i.createHashMap,a=i.each,o=i.isString,s=i.defaults,l=i.extend,u=i.isObject,h=i.clone,c=n(1289).normalizeToArray,f=n(1318).guessOrdinal,d=n(1310),p=n(1329).OTHER_DIMENSIONS
function g(t,e,n){if(n||null!=e.get(t)){for(var i=0;null!=e.get(t+i);)i++
t+=i}return e.set(t,!0),t}t.exports=function(t,e,n){d.isInstance(e)||(e=d.seriesDataToSource(e)),n=n||{},t=(t||[]).slice()
for(var i=(n.dimsDef||[]).slice(),m=r(n.encodeDef),v=r(),y=r(),x=[],_=function(t,e,n,i){var r=Math.max(t.dimensionsDetectCount||1,e.length,n.length,i||0)
return a(e,function(t){var e=t.dimsDef
e&&(r=Math.max(r,e.length))}),r}(e,t,i,n.dimCount),b=0;b<_;b++){var w=i[b]=l({},u(i[b])?i[b]:{name:i[b]}),S=w.name,M=x[b]={otherDims:{}}
null!=S&&null==v.get(S)&&(M.name=M.displayName=S,v.set(S,b)),null!=w.type&&(M.type=w.type),null!=w.displayName&&(M.displayName=w.displayName)}m.each(function(t,e){t=c(t).slice()
var n=m.set(e,[])
a(t,function(t,i){o(t)&&(t=v.get(t)),null!=t&&t<_&&(n[i]=t,k(x[t],e,i))})})
var T=0
function k(t,e,n){null!=p.get(e)?t.otherDims[e]=n:(t.coordDim=e,t.coordDimIndex=n,y.set(e,!0))}a(t,function(t,e){var n,i,r
if(o(t))n=t,t={}
else{n=t.name
var l=t.ordinalMeta
t.ordinalMeta=null,(t=h(t)).ordinalMeta=l,i=t.dimsDef,r=t.otherDims,t.name=t.coordDim=t.coordDimIndex=t.dimsDef=t.otherDims=null}var f=c(m.get(n))
if(!f.length)for(var d=0;d<(i&&i.length||1);d++){for(;T<x.length&&null!=x[T].coordDim;)T++
T<x.length&&f.push(T++)}a(f,function(e,a){var o=x[e]
if(k(s(o,t),n,a),null==o.name&&i){var l=i[a]
!u(l)&&(l={name:l}),o.name=o.displayName=l.name,o.defaultTooltip=l.defaultTooltip}r&&s(o.otherDims,r)})})
var D=n.generateCoord,C=n.generateCoordCount,A=null!=C
C=D?C||1:0
for(var I=D||"value",O=0;O<_;O++)null==(M=x[O]=x[O]||{}).coordDim&&(M.coordDim=g(I,y,A),M.coordDimIndex=0,(!D||C<=0)&&(M.isExtraCoord=!0),C--),null==M.name&&(M.name=g(M.coordDim,v)),null==M.type&&f(e,O,M.name)&&(M.type="ordinal")
return x}},1362:function(t,e,n){var i=n(1288),r=i.createHashMap,a=i.isObject,o=i.map
function s(t){this.categories=t.categories||[],this._needCollect=t.needCollect,this._deduplication=t.deduplication,this._map}s.createByAxisModel=function(t){var e=t.option,n=e.data,i=n&&o(n,h)
return new s({categories:i,needCollect:!i,deduplication:!1!==e.dedplication})}
var l=s.prototype
function u(t){return t._map||(t._map=r(t.categories))}function h(t){return a(t)&&null!=t.value?t.value:t+""}l.getOrdinal=function(t){return u(this).get(t)},l.parseAndCollect=function(t){var e,n=this._needCollect
if("string"!=typeof t&&!n)return t
if(n&&!this._deduplication)return e=this.categories.length,this.categories[e]=t,e
var i=u(this)
return null==(e=i.get(t))&&(n?(e=this.categories.length,this.categories[e]=t,i.set(t,e)):e=NaN),e}
var c=s
t.exports=c},1363:function(t,e,n){var i=n(1293),r=i.round
function a(t){return i.getPrecisionSafe(t)+2}function o(t,e,n){t[e]=Math.max(Math.min(t[e],n[1]),n[0])}function s(t,e){!isFinite(t[0])&&(t[0]=e[0]),!isFinite(t[1])&&(t[1]=e[1]),o(t,0,e),o(t,1,e),t[0]>t[1]&&(t[0]=t[1])}e.intervalScaleNiceTicks=function(t,e,n,o){var l={},u=t[1]-t[0],h=l.interval=i.nice(u/e,!0)
null!=n&&h<n&&(h=l.interval=n),null!=o&&h>o&&(h=l.interval=o)
var c=l.intervalPrecision=a(h)
return s(l.niceTickExtent=[r(Math.ceil(t[0]/h)*h,c),r(Math.floor(t[1]/h)*h,c)],t),l},e.getIntervalPrecision=a,e.fixExtent=s,e.intervalScaleGetTicks=function(t,e,n,i){var a=[]
if(!t)return a
e[0]<n[0]&&a.push(e[0])
for(var o=n[0];o<=n[1]&&(a.push(o),(o=r(o+t,i))!==a[a.length-1]);)if(a.length>1e4)return[]
return e[1]>(a.length?a[a.length-1]:n[1])&&a.push(e[1]),a}},1364:function(t,e,n){var i=n(1288),r=(n(1306),{getMin:function(t){var e=this.option,n=t||null==e.rangeStart?e.min:e.rangeStart
return this.axis&&null!=n&&"dataMin"!==n&&"function"!=typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getMax:function(t){var e=this.option,n=t||null==e.rangeEnd?e.max:e.rangeEnd
return this.axis&&null!=n&&"dataMax"!==n&&"function"!=typeof n&&!i.eqNaN(n)&&(n=this.axis.scale.parse(n)),n},getNeedCrossZero:function(){var t=this.option
return null==t.rangeStart&&null==t.rangeEnd&&!t.scale},getCoordSysModel:i.noop,setRange:function(t,e){this.option.rangeStart=t,this.option.rangeEnd=e},resetRange:function(){this.option.rangeStart=this.option.rangeEnd=null}})
t.exports=r},1365:function(t,e,n){var i=n(1288),r=i.each,a=i.map,o=n(1293),s=o.linearMap,l=o.getPixelPrecision,u=n(1439),h=u.createAxisTicks,c=u.createAxisLabels,f=u.calculateCategoryInterval,d=[0,1],p=function(t,e,n){this.dim=t,this.scale=e,this._extent=n||[0,0],this.inverse=!1,this.onBand=!1}
function g(t,e){var n=(t[1]-t[0])/e/2
t[0]+=n,t[1]-=n}p.prototype={constructor:p,contain:function(t){var e=this._extent,n=Math.min(e[0],e[1]),i=Math.max(e[0],e[1])
return t>=n&&t<=i},containData:function(t){return this.contain(this.dataToCoord(t))},getExtent:function(){return this._extent.slice()},getPixelPrecision:function(t){return l(t||this.scale.getExtent(),this._extent)},setExtent:function(t,e){var n=this._extent
n[0]=t,n[1]=e},dataToCoord:function(t,e){var n=this._extent,i=this.scale
return t=i.normalize(t),this.onBand&&"ordinal"===i.type&&g(n=n.slice(),i.count()),s(t,d,n,e)},coordToData:function(t,e){var n=this._extent,i=this.scale
this.onBand&&"ordinal"===i.type&&g(n=n.slice(),i.count())
var r=s(t,n,d,e)
return this.scale.scale(r)},pointToData:function(t,e){},getTicksCoords:function(t){var e=(t=t||{}).tickModel||this.getTickModel(),n=h(this,e),i=n.ticks,o=a(i,function(t){return{coord:this.dataToCoord(t),tickValue:t}},this),s=e.get("alignWithLabel")
return function(t,e,n,i,a){var o=e.length
if(t.onBand&&!i&&o){var s,l=t.getExtent()
if(1===o)e[0].coord=l[0],s=e[1]={coord:l[0]}
else{var u=e[1].coord-e[0].coord
r(e,function(t){t.coord-=u/2
var e=e||0
e%2>0&&(t.coord-=u/(2*(e+1)))}),s={coord:e[o-1].coord+u},e.push(s)}var h=l[0]>l[1]
c(e[0].coord,l[0])&&(a?e[0].coord=l[0]:e.shift()),a&&c(l[0],e[0].coord)&&e.unshift({coord:l[0]}),c(l[1],s.coord)&&(a?s.coord=l[1]:e.pop()),a&&c(s.coord,l[1])&&e.push({coord:l[1]})}function c(t,e){return h?t>e:t<e}}(this,o,n.tickCategoryInterval,s,t.clamp),o},getViewLabels:function(){return c(this).labels},getLabelModel:function(){return this.model.getModel("axisLabel")},getTickModel:function(){return this.model.getModel("axisTick")},getBandWidth:function(){var t=this._extent,e=this.scale.getExtent(),n=e[1]-e[0]+(this.onBand?1:0)
0===n&&(n=1)
var i=Math.abs(t[1]-t[0])
return Math.abs(i)/n},isHorizontal:null,getRotate:null,calculateCategoryInterval:function(){return f(this)}}
var m=p
t.exports=m},1375:function(t,e,n){var i=n(1288),r=n(1291),a=n(1376),o=n(1307),s="silent"
function l(){}l.prototype.dispose=function(){}
var u=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],h=function(t,e,n,i){o.call(this),this.storage=t,this.painter=e,this.painterRoot=i,n=n||new l,this.proxy=null,this._hovered={},this._lastTouchMoment,this._lastX,this._lastY,a.call(this),this.setHandlerProxy(n)}
function c(t,e,n){if(t[t.rectHover?"rectContain":"contain"](e,n)){for(var i,r=t;r;){if(r.clipPath&&!r.clipPath.contain(e,n))return!1
r.silent&&(i=!0),r=r.parent}return!i||s}return!1}h.prototype={constructor:h,setHandlerProxy:function(t){this.proxy&&this.proxy.dispose(),t&&(i.each(u,function(e){t.on&&t.on(e,this[e],this)},this),t.handler=this),this.proxy=t},mousemove:function(t){var e=t.zrX,n=t.zrY,i=this._hovered,r=i.target
r&&!r.__zr&&(r=(i=this.findHover(i.x,i.y)).target)
var a=this._hovered=this.findHover(e,n),o=a.target,s=this.proxy
s.setCursor&&s.setCursor(o?o.cursor:"default"),r&&o!==r&&this.dispatchToElement(i,"mouseout",t),this.dispatchToElement(a,"mousemove",t),o&&o!==r&&this.dispatchToElement(a,"mouseover",t)},mouseout:function(t){this.dispatchToElement(this._hovered,"mouseout",t)
var e,n=t.toElement||t.relatedTarget
do{n=n&&n.parentNode}while(n&&9!=n.nodeType&&!(e=n===this.painterRoot))
!e&&this.trigger("globalout",{event:t})},resize:function(t){this._hovered={}},dispatch:function(t,e){var n=this[t]
n&&n.call(this,e)},dispose:function(){this.proxy.dispose(),this.storage=this.proxy=this.painter=null},setCursorStyle:function(t){var e=this.proxy
e.setCursor&&e.setCursor(t)},dispatchToElement:function(t,e,n){var i=(t=t||{}).target
if(!i||!i.silent){for(var r="on"+e,a=function(t,e,n){return{type:t,event:n,target:e.target,topTarget:e.topTarget,cancelBubble:!1,offsetX:n.zrX,offsetY:n.zrY,gestureEvent:n.gestureEvent,pinchX:n.pinchX,pinchY:n.pinchY,pinchScale:n.pinchScale,wheelDelta:n.zrDelta,zrByTouch:n.zrByTouch,which:n.which}}(e,t,n);i&&(i[r]&&(a.cancelBubble=i[r].call(i,a)),i.trigger(e,a),i=i.parent,!a.cancelBubble););a.cancelBubble||(this.trigger(e,a),this.painter&&this.painter.eachOtherLayer(function(t){"function"==typeof t[r]&&t[r].call(t,a),t.trigger&&t.trigger(e,a)}))}},findHover:function(t,e,n){for(var i=this.storage.getDisplayList(),r={x:t,y:e},a=i.length-1;a>=0;a--){var o
if(i[a]!==n&&!i[a].ignore&&(o=c(i[a],t,e))&&(!r.topTarget&&(r.topTarget=i[a]),o!==s)){r.target=i[a]
break}}return r}},i.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){h.prototype[t]=function(e){var n=this.findHover(e.zrX,e.zrY),i=n.target
if("mousedown"===t)this._downEl=i,this._downPoint=[e.zrX,e.zrY],this._upEl=i
else if("mouseup"===t)this._upEl=i
else if("click"===t){if(this._downEl!==this._upEl||!this._downPoint||r.dist(this._downPoint,[e.zrX,e.zrY])>4)return
this._downPoint=null}this.dispatchToElement(n,t,e)}}),i.mixin(h,o),i.mixin(h,a)
var f=h
t.exports=f},1376:function(t,e){function n(){this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this),this.on("globalout",this._dragEnd,this)}function i(t,e){return{target:t,topTarget:e&&e.topTarget}}n.prototype={constructor:n,_dragStart:function(t){var e=t.target
e&&e.draggable&&(this._draggingTarget=e,e.dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(i(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget
if(e){var n=t.offsetX,r=t.offsetY,a=n-this._x,o=r-this._y
this._x=n,this._y=r,e.drift(a,o,t),this.dispatchToElement(i(e,t),"drag",t.event)
var s=this.findHover(n,r,e).target,l=this._dropTarget
this._dropTarget=s,e!==s&&(l&&s!==l&&this.dispatchToElement(i(l,t),"dragleave",t.event),s&&s!==l&&this.dispatchToElement(i(s,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget
e&&(e.dragging=!1),this.dispatchToElement(i(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(i(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}}
var r=n
t.exports=r},1377:function(t,e,n){var i=n(1288),r=n(1294),a=n(1313),o=n(1321)
function s(t,e){return t.zlevel===e.zlevel?t.z===e.z?t.z2-e.z2:t.z-e.z:t.zlevel-e.zlevel}var l=function(){this._roots=[],this._displayList=[],this._displayListLen=0}
l.prototype={constructor:l,traverse:function(t,e){for(var n=0;n<this._roots.length;n++)this._roots[n].traverse(t,e)},getDisplayList:function(t,e){return e=e||!1,t&&this.updateDisplayList(e),this._displayList},updateDisplayList:function(t){this._displayListLen=0
for(var e=this._roots,n=this._displayList,i=0,a=e.length;i<a;i++)this._updateAndAddDisplayable(e[i],null,t)
n.length=this._displayListLen,r.canvasSupported&&o(n,s)},_updateAndAddDisplayable:function(t,e,n){if(!t.ignore||n){t.beforeUpdate(),t.__dirty&&t.update(),t.afterUpdate()
var i=t.clipPath
if(i){e=e?e.slice():[]
for(var r=i,a=t;r;)r.parent=a,r.updateTransform(),e.push(r),a=r,r=r.clipPath}if(t.isGroup){for(var o=t._children,s=0;s<o.length;s++){var l=o[s]
t.__dirty&&(l.__dirty=!0),this._updateAndAddDisplayable(l,e,n)}t.__dirty=!1}else t.__clipPaths=e,this._displayList[this._displayListLen++]=t}},addRoot:function(t){t.__storage!==this&&(t instanceof a&&t.addChildrenToStorage(this),this.addToStorage(t),this._roots.push(t))},delRoot:function(t){if(null==t){for(var e=0;e<this._roots.length;e++){var n=this._roots[e]
n instanceof a&&n.delChildrenFromStorage(this)}return this._roots=[],this._displayList=[],void(this._displayListLen=0)}if(t instanceof Array){e=0
for(var r=t.length;e<r;e++)this.delRoot(t[e])}else{var o=i.indexOf(this._roots,t)
o>=0&&(this.delFromStorage(t),this._roots.splice(o,1),t instanceof a&&t.delChildrenFromStorage(this))}},addToStorage:function(t){return t&&(t.__storage=this,t.dirty(!1)),this},delFromStorage:function(t){return t&&(t.__storage=null),this},dispose:function(){this._renderList=this._roots=null},displayableSortFunc:s}
var u=l
t.exports=u},1378:function(t,e,n){var i=n(1336),r=n(1338),a=n(1288),o=a.isString,s=a.isFunction,l=a.isObject,u=a.isArrayLike,h=a.indexOf,c=function(){this.animators=[]}
c.prototype={constructor:c,animate:function(t,e){var n,a=!1,o=this,s=this.__zr
if(t){var l=t.split("."),u=o
a="shape"===l[0]
for(var c=0,f=l.length;c<f;c++)u&&(u=u[l[c]])
u&&(n=u)}else n=o
if(n){var d=o.animators,p=new i(n,e)
return p.during(function(t){o.dirty(a)}).done(function(){d.splice(h(d,p),1)}),d.push(p),s&&s.animation.addAnimator(p),p}r('Property "'+t+'" is not existed in element '+o.id)},stopAnimation:function(t){for(var e=this.animators,n=e.length,i=0;i<n;i++)e[i].stop(t)
return e.length=0,this},animateTo:function(t,e,n,i,r,a){o(n)?(r=i,i=n,n=0):s(i)?(r=i,i="linear",n=0):s(n)?(r=n,n=0):s(e)?(r=e,e=500):e||(e=500),this.stopAnimation(),this._animateToShallow("",this,t,e,n)
var l=this.animators.slice(),u=l.length
function h(){--u||r&&r()}u||r&&r()
for(var c=0;c<l.length;c++)l[c].done(h).start(i,a)},_animateToShallow:function(t,e,n,i,r){var a={},o=0
for(var s in n)if(n.hasOwnProperty(s))if(null!=e[s])l(n[s])&&!u(n[s])?this._animateToShallow(t?t+"."+s:s,e[s],n[s],i,r):(a[s]=n[s],o++)
else if(null!=n[s])if(t){var h={}
h[t]={},h[t][s]=n[s],this.attr(h)}else this.attr(s,n[s])
return o>0&&this.animate(t,!1).when(null==i?500:i,a).delay(r||0),this}}
var f=c
t.exports=f},1379:function(t,e,n){var i=n(1380)
function r(t){this._target=t.target,this._life=t.life||1e3,this._delay=t.delay||0,this._initialized=!1,this.loop=null!=t.loop&&t.loop,this.gap=t.gap||0,this.easing=t.easing||"Linear",this.onframe=t.onframe,this.ondestroy=t.ondestroy,this.onrestart=t.onrestart,this._pausedTime=0,this._paused=!1}r.prototype={constructor:r,step:function(t,e){if(this._initialized||(this._startTime=t+this._delay,this._initialized=!0),this._paused)this._pausedTime+=e
else{var n=(t-this._startTime-this._pausedTime)/this._life
if(!(n<0)){n=Math.min(n,1)
var r=this.easing,a="string"==typeof r?i[r]:r,o="function"==typeof a?a(n):n
return this.fire("frame",o),1==n?this.loop?(this.restart(t),"restart"):(this._needsRemove=!0,"destroy"):null}}},restart:function(t){var e=(t-this._startTime-this._pausedTime)%this._life
this._startTime=t-e+this.gap,this._pausedTime=0,this._needsRemove=!1},fire:function(t,e){this[t="on"+t]&&this[t](this._target,e)},pause:function(){this._paused=!0},resume:function(){this._paused=!1}}
var a=r
t.exports=a},1380:function(t,e){var n={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1
return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4)*.5+1)},backIn:function(t){var e=1.70158
return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158
return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095
return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-n.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*n.bounceIn(2*t):.5*n.bounceOut(2*t-1)+.5}},i=n
t.exports=i},1381:function(t,e,n){var i=n(1314).devicePixelRatio,r=n(1288),a=n(1338),o=n(1296),s=n(1321),l=n(1382),u=n(1342),h=n(1343),c=n(1294)
function f(t){return parseInt(t,10)}var d=new o(0,0,0,0),p=new o(0,0,0,0),g=function(t,e,n){this.type="canvas"
var a=!t.nodeName||"CANVAS"===t.nodeName.toUpperCase()
this._opts=n=r.extend({},n||{}),this.dpr=n.devicePixelRatio||i,this._singleCanvas=a,this.root=t
var o=t.style
o&&(o["-webkit-tap-highlight-color"]="transparent",o["-webkit-user-select"]=o["user-select"]=o["-webkit-touch-callout"]="none",t.innerHTML=""),this.storage=e
var s=this._zlevelList=[],u=this._layers={}
if(this._layerConfig={},this._needsManuallyCompositing=!1,a){var h=t.width,c=t.height
null!=n.width&&(h=n.width),null!=n.height&&(c=n.height),this.dpr=n.devicePixelRatio||1,t.width=h*this.dpr,t.height=c*this.dpr,this._width=h,this._height=c
var f=new l(t,this,this.dpr)
f.__builtin__=!0,f.initContext(),u[314159]=f,f.zlevel=314159,s.push(314159),this._domRoot=t}else{this._width=this._getSize(0),this._height=this._getSize(1)
var d=this._domRoot=function(t,e){var n=document.createElement("div")
return n.style.cssText=["position:relative","overflow:hidden","width:"+t+"px","height:"+e+"px","padding:0","margin:0","border-width:0"].join(";")+";",n}(this._width,this._height)
t.appendChild(d)}this._hoverlayer=null,this._hoverElements=[]}
g.prototype={constructor:g,getType:function(){return"canvas"},isSingleCanvas:function(){return this._singleCanvas},getViewportRoot:function(){return this._domRoot},getViewportRootOffset:function(){var t=this.getViewportRoot()
if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},refresh:function(t){var e=this.storage.getDisplayList(!0),n=this._zlevelList
this._redrawId=Math.random(),this._paintList(e,t,this._redrawId)
for(var i=0;i<n.length;i++){var r=n[i],a=this._layers[r]
if(!a.__builtin__&&a.refresh){var o=0===i?this._backgroundColor:null
a.refresh(o)}}return this.refreshHover(),this},addHover:function(t,e){if(!t.__hoverMir){var n=new t.constructor({style:t.style,shape:t.shape})
n.__from=t,t.__hoverMir=n,n.setStyle(e),this._hoverElements.push(n)}},removeHover:function(t){var e=t.__hoverMir,n=this._hoverElements,i=r.indexOf(n,e)
i>=0&&n.splice(i,1),t.__hoverMir=null},clearHover:function(t){for(var e=this._hoverElements,n=0;n<e.length;n++){var i=e[n].__from
i&&(i.__hoverMir=null)}e.length=0},refreshHover:function(){var t=this._hoverElements,e=t.length,n=this._hoverlayer
if(n&&n.clear(),e){s(t,this.storage.displayableSortFunc),n||(n=this._hoverlayer=this.getLayer(1e5))
var i={}
n.ctx.save()
for(var r=0;r<e;){var a=t[r],o=a.__from
o&&o.__zr?(r++,o.invisible||(a.transform=o.transform,a.invTransform=o.invTransform,a.__clipPaths=o.__clipPaths,this._doPaintEl(a,n,!0,i))):(t.splice(r,1),o.__hoverMir=null,e--)}n.ctx.restore()}},getHoverLayer:function(){return this.getLayer(1e5)},_paintList:function(t,e,n){if(this._redrawId===n){e=e||!1,this._updateLayerStatus(t)
var i=this._doPaintList(t,e)
if(this._needsManuallyCompositing&&this._compositeManually(),!i){var r=this
u(function(){r._paintList(t,e,n)})}}},_compositeManually:function(){var t=this.getLayer(314159).ctx,e=this._domRoot.width,n=this._domRoot.height
t.clearRect(0,0,e,n),this.eachBuiltinLayer(function(i){i.virtual&&t.drawImage(i.dom,0,0,e,n)})},_doPaintList:function(t,e){for(var n=[],i=0;i<this._zlevelList.length;i++){var a=this._zlevelList[i];(l=this._layers[a]).__builtin__&&l!==this._hoverlayer&&(l.__dirty||e)&&n.push(l)}for(var o=!0,s=0;s<n.length;s++){var l,u=(l=n[s]).ctx,h={}
u.save()
var f=e?l.__startIndex:l.__drawIndex,d=!e&&l.incremental&&Date.now,p=d&&Date.now(),g=l.zlevel===this._zlevelList[0]?this._backgroundColor:null
if(l.__startIndex===l.__endIndex)l.clear(!1,g)
else if(f===l.__startIndex){var m=t[f]
m.incremental&&m.notClear&&!e||l.clear(!1,g)}-1===f&&(console.error("For some unknown reason. drawIndex is -1"),f=l.__startIndex)
for(var v=f;v<l.__endIndex;v++){var y=t[v]
if(this._doPaintEl(y,l,e,h),y.__dirty=!1,d&&Date.now()-p>15)break}l.__drawIndex=v,l.__drawIndex<l.__endIndex&&(o=!1),h.prevElClipPaths&&u.restore(),u.restore()}return c.wxa&&r.each(this._layers,function(t){t&&t.ctx&&t.ctx.draw&&t.ctx.draw()}),o},_doPaintEl:function(t,e,n,i){var r=e.ctx,a=t.transform
if((e.__dirty||n)&&!t.invisible&&0!==t.style.opacity&&(!a||a[0]||a[3])&&(!t.culling||!function(t,e,n){return d.copy(t.getBoundingRect()),t.transform&&d.applyTransform(t.transform),p.width=e,p.height=n,!d.intersect(p)}(t,this._width,this._height))){var o=t.__clipPaths
i.prevElClipPaths&&!function(t,e){if(t==e)return!1
if(!t||!e||t.length!==e.length)return!0
for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!0}(o,i.prevElClipPaths)||(i.prevElClipPaths&&(e.ctx.restore(),i.prevElClipPaths=null,i.prevEl=null),o&&(r.save(),function(t,e){for(var n=0;n<t.length;n++){var i=t[n]
i.setTransform(e),e.beginPath(),i.buildPath(e,i.shape),e.clip(),i.restoreTransform(e)}}(o,r),i.prevElClipPaths=o)),t.beforeBrush&&t.beforeBrush(r),t.brush(r,i.prevEl||null),i.prevEl=t,t.afterBrush&&t.afterBrush(r)}},getLayer:function(t,e){this._singleCanvas&&!this._needsManuallyCompositing&&(t=314159)
var n=this._layers[t]
return n||((n=new l("zr_"+t,this,this.dpr)).zlevel=t,n.__builtin__=!0,this._layerConfig[t]&&r.merge(n,this._layerConfig[t],!0),e&&(n.virtual=e),this.insertLayer(t,n),n.initContext()),n},insertLayer:function(t,e){var n=this._layers,i=this._zlevelList,r=i.length,o=null,s=-1,l=this._domRoot
if(n[t])a("ZLevel "+t+" has been used already")
else if(function(t){return!!t&&(!!t.__builtin__||"function"==typeof t.resize&&"function"==typeof t.refresh)}(e)){if(r>0&&t>i[0]){for(s=0;s<r-1&&!(i[s]<t&&i[s+1]>t);s++);o=n[i[s]]}if(i.splice(s+1,0,t),n[t]=e,!e.virtual)if(o){var u=o.dom
u.nextSibling?l.insertBefore(e.dom,u.nextSibling):l.appendChild(e.dom)}else l.firstChild?l.insertBefore(e.dom,l.firstChild):l.appendChild(e.dom)}else a("Layer of zlevel "+t+" is not valid")},eachLayer:function(t,e){var n,i,r=this._zlevelList
for(i=0;i<r.length;i++)n=r[i],t.call(e,this._layers[n],n)},eachBuiltinLayer:function(t,e){var n,i,r,a=this._zlevelList
for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__&&t.call(e,n,i)},eachOtherLayer:function(t,e){var n,i,r,a=this._zlevelList
for(r=0;r<a.length;r++)i=a[r],(n=this._layers[i]).__builtin__||t.call(e,n,i)},getLayers:function(){return this._layers},_updateLayerStatus:function(t){function e(t){i&&(i.__endIndex!==t&&(i.__dirty=!0),i.__endIndex=t)}if(this.eachBuiltinLayer(function(t,e){t.__dirty=t.__used=!1}),this._singleCanvas)for(var n=1;n<t.length;n++)if((o=t[n]).zlevel!==t[n-1].zlevel||o.incremental){this._needsManuallyCompositing=!0
break}var i=null,r=0
for(n=0;n<t.length;n++){var o,s,l=(o=t[n]).zlevel
o.incremental?((s=this.getLayer(l+.001,this._needsManuallyCompositing)).incremental=!0,r=1):s=this.getLayer(l+(r>0?.01:0),this._needsManuallyCompositing),s.__builtin__||a("ZLevel "+l+" has been used by unkown layer "+s.id),s!==i&&(s.__used=!0,s.__startIndex!==n&&(s.__dirty=!0),s.__startIndex=n,s.incremental?s.__drawIndex=-1:s.__drawIndex=n,e(n),i=s),o.__dirty&&(s.__dirty=!0,s.incremental&&s.__drawIndex<0&&(s.__drawIndex=n))}e(n),this.eachBuiltinLayer(function(t,e){!t.__used&&t.getElementCount()>0&&(t.__dirty=!0,t.__startIndex=t.__endIndex=t.__drawIndex=0),t.__dirty&&t.__drawIndex<0&&(t.__drawIndex=t.__startIndex)})},clear:function(){return this.eachBuiltinLayer(this._clearLayer),this},_clearLayer:function(t){t.clear()},setBackgroundColor:function(t){this._backgroundColor=t},configLayer:function(t,e){if(e){var n=this._layerConfig
n[t]?r.merge(n[t],e,!0):n[t]=e
for(var i=0;i<this._zlevelList.length;i++){var a=this._zlevelList[i]
if(a===t||a===t+.01){var o=this._layers[a]
r.merge(o,n[t],!0)}}}},delLayer:function(t){var e=this._layers,n=this._zlevelList,i=e[t]
i&&(i.dom.parentNode.removeChild(i.dom),delete e[t],n.splice(r.indexOf(n,t),1))},resize:function(t,e){if(this._domRoot.style){var n=this._domRoot
n.style.display="none"
var i=this._opts
if(null!=t&&(i.width=t),null!=e&&(i.height=e),t=this._getSize(0),e=this._getSize(1),n.style.display="",this._width!=t||e!=this._height){for(var a in n.style.width=t+"px",n.style.height=e+"px",this._layers)this._layers.hasOwnProperty(a)&&this._layers[a].resize(t,e)
r.each(this._progressiveLayers,function(n){n.resize(t,e)}),this.refresh(!0)}this._width=t,this._height=e}else{if(null==t||null==e)return
this._width=t,this._height=e,this.getLayer(314159).resize(t,e)}return this},clearLayer:function(t){var e=this._layers[t]
e&&e.clear()},dispose:function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},getRenderedCanvas:function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[314159].dom
var e=new l("image",this,t.pixelRatio||this.dpr)
if(e.initContext(),e.clear(!1,t.backgroundColor||this._backgroundColor),t.pixelRatio<=this.dpr){this.refresh()
var n=e.dom.width,i=e.dom.height,r=e.ctx
this.eachLayer(function(t){t.__builtin__?r.drawImage(t.dom,0,0,n,i):t.renderToCanvas&&(e.ctx.save(),t.renderToCanvas(e.ctx),e.ctx.restore())})}else for(var a={},o=this.storage.getDisplayList(!0),s=0;s<o.length;s++){var u=o[s]
this._doPaintEl(u,e,!0,a)}return e.dom},getWidth:function(){return this._width},getHeight:function(){return this._height},_getSize:function(t){var e=this._opts,n=["width","height"][t],i=["clientWidth","clientHeight"][t],r=["paddingLeft","paddingTop"][t],a=["paddingRight","paddingBottom"][t]
if(null!=e[n]&&"auto"!==e[n])return parseFloat(e[n])
var o=this.root,s=document.defaultView.getComputedStyle(o)
return(o[i]||f(s[n])||f(o.style[n]))-(f(s[r])||0)-(f(s[a])||0)|0},pathToImage:function(t,e){e=e||this.dpr
var n=document.createElement("canvas"),i=n.getContext("2d"),r=t.getBoundingRect(),a=t.style,o=a.shadowBlur*e,s=a.shadowOffsetX*e,l=a.shadowOffsetY*e,u=a.hasStroke()?a.lineWidth:0,c=Math.max(u/2,-s+o),f=Math.max(u/2,s+o),d=Math.max(u/2,-l+o),p=Math.max(u/2,l+o),g=r.width+c+f,m=r.height+d+p
n.width=g*e,n.height=m*e,i.scale(e,e),i.clearRect(0,0,g,m),i.dpr=e
var v={position:t.position,rotation:t.rotation,scale:t.scale}
t.position=[c-r.x,d-r.y],t.rotation=0,t.scale=[1,1],t.updateTransform(),t&&t.brush(i)
var y=new h({style:{x:0,y:0,image:n}})
return null!=v.position&&(y.position=t.position=v.position),null!=v.rotation&&(y.rotation=t.rotation=v.rotation),null!=v.scale&&(y.scale=t.scale=v.scale),y}}
var m=g
t.exports=m},1382:function(t,e,n){var i=n(1288),r=n(1314).devicePixelRatio,a=n(1339),o=n(1341)
function s(){return!1}function l(t,e,n){var r=i.createCanvas(),a=e.getWidth(),o=e.getHeight(),s=r.style
return s&&(s.position="absolute",s.left=0,s.top=0,s.width=a+"px",s.height=o+"px",r.setAttribute("data-zr-dom-id",t)),r.width=a*n,r.height=o*n,r}var u=function(t,e,n){var a
n=n||r,"string"==typeof t?a=l(t,e,n):i.isObject(t)&&(t=(a=t).id),this.id=t,this.dom=a
var o=a.style
o&&(a.onselectstart=s,o["-webkit-user-select"]="none",o["user-select"]="none",o["-webkit-touch-callout"]="none",o["-webkit-tap-highlight-color"]="rgba(0,0,0,0)",o.padding=0,o.margin=0,o["border-width"]=0),this.domBack=null,this.ctxBack=null,this.painter=e,this.config=null,this.clearColor=0,this.motionBlur=!1,this.lastFrameAlpha=.7,this.dpr=n}
u.prototype={constructor:u,__dirty:!0,__used:!1,__drawIndex:0,__startIndex:0,__endIndex:0,incremental:!1,getElementCount:function(){return this.__endIndex-this.__startIndex},initContext:function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},createBackBuffer:function(){var t=this.dpr
this.domBack=l("back-"+this.id,this.painter,t),this.ctxBack=this.domBack.getContext("2d"),1!=t&&this.ctxBack.scale(t,t)},resize:function(t,e){var n=this.dpr,i=this.dom,r=i.style,a=this.domBack
r&&(r.width=t+"px",r.height=e+"px"),i.width=t*n,i.height=e*n,a&&(a.width=t*n,a.height=e*n,1!=n&&this.ctxBack.scale(n,n))},clear:function(t,e){var n,i=this.dom,r=this.ctx,s=i.width,l=i.height,u=(e=e||this.clearColor,this.motionBlur&&!t),h=this.lastFrameAlpha,c=this.dpr
if(u&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(i,0,0,s/c,l/c)),r.clearRect(0,0,s,l),e&&"transparent"!==e&&(e.colorStops?(n=e.__canvasGradient||a.getGradient(r,e,{x:0,y:0,width:s,height:l}),e.__canvasGradient=n):e.image&&(n=o.prototype.getCanvasPattern.call(e,r)),r.save(),r.fillStyle=n||e,r.fillRect(0,0,s,l),r.restore()),u){var f=this.domBack
r.save(),r.globalAlpha=h,r.drawImage(f,0,0,s,l),r.restore()}}}
var h=u
t.exports=h},1383:function(t,e,n){var i=n(1344),r=new(n(1296)),a=function(){}
a.prototype={constructor:a,drawRectText:function(t,e){var n=this.style
e=n.textRect||e,this.__dirty&&i.normalizeTextStyle(n,!0)
var a=n.text
if(null!=a&&(a+=""),i.needDrawText(a,n)){t.save()
var o=this.transform
n.transformText?this.setTransform(t):o&&(r.copy(e),r.applyTransform(o),e=r),i.renderText(this,t,a,n,e),t.restore()}}}
var o=a
t.exports=o},1384:function(t,e,n){var i=n(1288),r=n(1309).Dispatcher,a=n(1342),o=n(1336),s=function(t){t=t||{},this.stage=t.stage||{},this.onframe=t.onframe||function(){},this._clips=[],this._running=!1,this._time,this._pausedTime,this._pauseStart,this._paused=!1,r.call(this)}
s.prototype={constructor:s,addClip:function(t){this._clips.push(t)},addAnimator:function(t){t.animation=this
for(var e=t.getClips(),n=0;n<e.length;n++)this.addClip(e[n])},removeClip:function(t){var e=i.indexOf(this._clips,t)
e>=0&&this._clips.splice(e,1)},removeAnimator:function(t){for(var e=t.getClips(),n=0;n<e.length;n++)this.removeClip(e[n])
t.animation=null},_update:function(){for(var t=(new Date).getTime()-this._pausedTime,e=t-this._time,n=this._clips,i=n.length,r=[],a=[],o=0;o<i;o++){var s=n[o],l=s.step(t,e)
l&&(r.push(l),a.push(s))}for(o=0;o<i;)n[o]._needsRemove?(n[o]=n[i-1],n.pop(),i--):o++
for(i=r.length,o=0;o<i;o++)a[o].fire(r[o])
this._time=t,this.onframe(e),this.trigger("frame",e),this.stage.update&&this.stage.update()},_startLoop:function(){var t=this
this._running=!0,a(function e(){t._running&&(a(e),!t._paused&&t._update())})},start:function(){this._time=(new Date).getTime(),this._pausedTime=0,this._startLoop()},stop:function(){this._running=!1},pause:function(){this._paused||(this._pauseStart=(new Date).getTime(),this._paused=!0)},resume:function(){this._paused&&(this._pausedTime+=(new Date).getTime()-this._pauseStart,this._paused=!1)},clear:function(){this._clips=[]},isFinished:function(){return!this._clips.length},animate:function(t,e){var n=new o(t,(e=e||{}).loop,e.getter,e.setter)
return this.addAnimator(n),n}},i.mixin(s,r)
var l=s
t.exports=l},1385:function(t,e,n){var i=n(1309),r=i.addEventListener,a=i.removeEventListener,o=i.normalizeEvent,s=n(1288),l=n(1307),u=n(1294),h=n(1386),c=["click","dblclick","mousewheel","mouseout","mouseup","mousedown","mousemove","contextmenu"],f=["touchstart","touchend","touchmove"],d={pointerdown:1,pointerup:1,pointermove:1,pointerout:1},p=s.map(c,function(t){var e=t.replace("mouse","pointer")
return d[e]?e:t})
function g(t){return"mousewheel"===t&&u.browser.firefox?"DOMMouseScroll":t}function m(t,e,n){var i=t._gestureMgr
"start"===n&&i.clear()
var r=i.recognize(e,t.handler.findHover(e.zrX,e.zrY,null).target,t.dom)
if("end"===n&&i.clear(),r){var a=r.type
e.gestureEvent=a,t.handler.dispatchToElement({target:r.target},a,r.event)}}function v(t){t._touching=!0,clearTimeout(t._touchTimer),t._touchTimer=setTimeout(function(){t._touching=!1},700)}var y={mousemove:function(t){t=o(this.dom,t),this.trigger("mousemove",t)},mouseout:function(t){var e=(t=o(this.dom,t)).toElement||t.relatedTarget
if(e!=this.dom)for(;e&&9!=e.nodeType;){if(e===this.dom)return
e=e.parentNode}this.trigger("mouseout",t)},touchstart:function(t){(t=o(this.dom,t)).zrByTouch=!0,this._lastTouchMoment=new Date,m(this,t,"start"),y.mousemove.call(this,t),y.mousedown.call(this,t),v(this)},touchmove:function(t){(t=o(this.dom,t)).zrByTouch=!0,m(this,t,"change"),y.mousemove.call(this,t),v(this)},touchend:function(t){(t=o(this.dom,t)).zrByTouch=!0,m(this,t,"end"),y.mouseup.call(this,t),+new Date-this._lastTouchMoment<300&&y.click.call(this,t),v(this)},pointerdown:function(t){y.mousedown.call(this,t)},pointermove:function(t){x(t)||y.mousemove.call(this,t)},pointerup:function(t){y.mouseup.call(this,t)},pointerout:function(t){x(t)||y.mouseout.call(this,t)}}
function x(t){var e=t.pointerType
return"pen"===e||"touch"===e}function _(t){function e(e,n){s.each(e,function(e){r(t,g(e),n._handlers[e])},n)}l.call(this),this.dom=t,this._touching=!1,this._touchTimer,this._gestureMgr=new h,this._handlers={},function(t){s.each(f,function(e){t._handlers[e]=s.bind(y[e],t)}),s.each(p,function(e){t._handlers[e]=s.bind(y[e],t)}),s.each(c,function(e){t._handlers[e]=function(t,e){return function(){if(!e._touching)return t.apply(e,arguments)}}(y[e],t)})}(this),u.pointerEventsSupported?e(p,this):(u.touchEventsSupported&&e(f,this),e(c,this))}s.each(["click","mousedown","mouseup","mousewheel","dblclick","contextmenu"],function(t){y[t]=function(e){e=o(this.dom,e),this.trigger(t,e)}})
var b=_.prototype
b.dispose=function(){for(var t=c.concat(f),e=0;e<t.length;e++){var n=t[e]
a(this.dom,g(n),this._handlers[n])}},b.setCursor=function(t){this.dom.style&&(this.dom.style.cursor=t||"default")},s.mixin(_,l)
var w=_
t.exports=w},1386:function(t,e,n){var i=n(1309),r=function(){this._track=[]}
function a(t){var e=t[1][0]-t[0][0],n=t[1][1]-t[0][1]
return Math.sqrt(e*e+n*n)}r.prototype={constructor:r,recognize:function(t,e,n){return this._doTrack(t,e,n),this._recognize(t)},clear:function(){return this._track.length=0,this},_doTrack:function(t,e,n){var r=t.touches
if(r){for(var a={points:[],touches:[],target:e,event:t},o=0,s=r.length;o<s;o++){var l=r[o],u=i.clientToLocal(n,l,{})
a.points.push([u.zrX,u.zrY]),a.touches.push(l)}this._track.push(a)}},_recognize:function(t){for(var e in o)if(o.hasOwnProperty(e)){var n=o[e](this._track,t)
if(n)return n}}}
var o={pinch:function(t,e){var n=t.length
if(n){var i=(t[n-1]||{}).points,r=(t[n-2]||{}).points||i
if(r&&r.length>1&&i&&i.length>1){var o=a(i)/a(r)
!isFinite(o)&&(o=1),e.pinchScale=o
var s=function(t){return[(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2]}(i)
return e.pinchX=s[0],e.pinchY=s[1],{type:"pinch",target:t[0].target,event:e}}}}},s=r
t.exports=s},1387:function(t,e,n){var i=n(1323)([["lineWidth","width"],["stroke","color"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),r={getLineStyle:function(t){var e=i(this,t),n=this.getLineDash(e.lineWidth)
return n&&(e.lineDash=n),e},getLineDash:function(t){null==t&&(t=1)
var e=this.get("type"),n=Math.max(t,2),i=4*t
return"solid"===e||null==e?null:"dashed"===e?[i,i]:[n,n]}}
t.exports=r},1388:function(t,e,n){var i=n(1323)([["fill","color"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["opacity"],["shadowColor"]]),r={getAreaStyle:function(t,e){return i(this,t,e)}}
t.exports=r},1389:function(t,e,n){var i=n(1302),r=n(1292),a=["textStyle","color"],o={getTextColor:function(t){var e=this.ecModel
return this.getShallow("color")||(!t&&e?e.get(a):null)},getFont:function(){return r.getFont({fontStyle:this.getShallow("fontStyle"),fontWeight:this.getShallow("fontWeight"),fontSize:this.getShallow("fontSize"),fontFamily:this.getShallow("fontFamily")},this.ecModel)},getTextRect:function(t){return i.getBoundingRect(t,this.getFont(),this.getShallow("align"),this.getShallow("verticalAlign")||this.getShallow("baseline"),this.getShallow("padding"),this.getShallow("rich"),this.getShallow("truncateText"))}}
t.exports=o},1390:function(t,e,n){var i=n(1295),r=n(1316),a=n(1396),o=["m","M","l","L","v","V","h","H","z","Z","c","C","q","Q","t","T","s","S","a","A"],s=Math.sqrt,l=Math.sin,u=Math.cos,h=Math.PI,c=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1])},f=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(c(t)*c(e))},d=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(f(t,e))}
function p(t,e,n,i,r,a,o,c,p,g,m){var v=p*(h/180),y=u(v)*(t-n)/2+l(v)*(e-i)/2,x=-1*l(v)*(t-n)/2+u(v)*(e-i)/2,_=y*y/(o*o)+x*x/(c*c)
_>1&&(o*=s(_),c*=s(_))
var b=(r===a?-1:1)*s((o*o*(c*c)-o*o*(x*x)-c*c*(y*y))/(o*o*(x*x)+c*c*(y*y)))||0,w=b*o*x/c,S=b*-c*y/o,M=(t+n)/2+u(v)*w-l(v)*S,T=(e+i)/2+l(v)*w+u(v)*S,k=d([1,0],[(y-w)/o,(x-S)/c]),D=[(y-w)/o,(x-S)/c],C=[(-1*y-w)/o,(-1*x-S)/c],A=d(D,C)
f(D,C)<=-1&&(A=h),f(D,C)>=1&&(A=0),0===a&&A>0&&(A-=2*h),1===a&&A<0&&(A+=2*h),m.addData(g,M,T,o,c,k,A,v,a)}function g(t,e){var n=function(t){if(!t)return[]
var e,n=t.replace(/-/g," -").replace(/  /g," ").replace(/ /g,",").replace(/,,/g,",")
for(e=0;e<o.length;e++)n=n.replace(new RegExp(o[e],"g"),"|"+o[e])
var i,a=n.split("|"),s=0,l=0,u=new r,h=r.CMD
for(e=1;e<a.length;e++){var c,f=a[e],d=f.charAt(0),g=0,m=f.slice(1).replace(/e,-/g,"e-").split(",")
m.length>0&&""===m[0]&&m.shift()
for(var v=0;v<m.length;v++)m[v]=parseFloat(m[v])
for(;g<m.length&&!isNaN(m[g])&&!isNaN(m[0]);){var y,x,_,b,w,S,M,T=s,k=l
switch(d){case"l":s+=m[g++],l+=m[g++],c=h.L,u.addData(c,s,l)
break
case"L":s=m[g++],l=m[g++],c=h.L,u.addData(c,s,l)
break
case"m":s+=m[g++],l+=m[g++],c=h.M,u.addData(c,s,l),d="l"
break
case"M":s=m[g++],l=m[g++],c=h.M,u.addData(c,s,l),d="L"
break
case"h":s+=m[g++],c=h.L,u.addData(c,s,l)
break
case"H":s=m[g++],c=h.L,u.addData(c,s,l)
break
case"v":l+=m[g++],c=h.L,u.addData(c,s,l)
break
case"V":l=m[g++],c=h.L,u.addData(c,s,l)
break
case"C":c=h.C,u.addData(c,m[g++],m[g++],m[g++],m[g++],m[g++],m[g++]),s=m[g-2],l=m[g-1]
break
case"c":c=h.C,u.addData(c,m[g++]+s,m[g++]+l,m[g++]+s,m[g++]+l,m[g++]+s,m[g++]+l),s+=m[g-2],l+=m[g-1]
break
case"S":y=s,x=l
var D=u.len(),C=u.data
i===h.C&&(y+=s-C[D-4],x+=l-C[D-3]),c=h.C,T=m[g++],k=m[g++],s=m[g++],l=m[g++],u.addData(c,y,x,T,k,s,l)
break
case"s":y=s,x=l,D=u.len(),C=u.data,i===h.C&&(y+=s-C[D-4],x+=l-C[D-3]),c=h.C,T=s+m[g++],k=l+m[g++],s+=m[g++],l+=m[g++],u.addData(c,y,x,T,k,s,l)
break
case"Q":T=m[g++],k=m[g++],s=m[g++],l=m[g++],c=h.Q,u.addData(c,T,k,s,l)
break
case"q":T=m[g++]+s,k=m[g++]+l,s+=m[g++],l+=m[g++],c=h.Q,u.addData(c,T,k,s,l)
break
case"T":y=s,x=l,D=u.len(),C=u.data,i===h.Q&&(y+=s-C[D-4],x+=l-C[D-3]),s=m[g++],l=m[g++],c=h.Q,u.addData(c,y,x,s,l)
break
case"t":y=s,x=l,D=u.len(),C=u.data,i===h.Q&&(y+=s-C[D-4],x+=l-C[D-3]),s+=m[g++],l+=m[g++],c=h.Q,u.addData(c,y,x,s,l)
break
case"A":_=m[g++],b=m[g++],w=m[g++],S=m[g++],M=m[g++],p(T=s,k=l,s=m[g++],l=m[g++],S,M,_,b,w,c=h.A,u)
break
case"a":_=m[g++],b=m[g++],w=m[g++],S=m[g++],M=m[g++],p(T=s,k=l,s+=m[g++],l+=m[g++],S,M,_,b,w,c=h.A,u)}}"z"!==d&&"Z"!==d||(c=h.Z,u.addData(c)),i=c}return u.toStatic(),u}(t)
return(e=e||{}).buildPath=function(t){if(t.setData)t.setData(n.data),(e=t.getContext())&&t.rebuildPath(e)
else{var e=t
n.rebuildPath(e)}},e.applyTransform=function(t){a(n,t),this.dirty(!0)},e}e.createFromString=function(t,e){return new i(g(t,e))},e.extendFromString=function(t,e){return i.extend(g(t,e))},e.mergePath=function(t,e){for(var n=[],r=t.length,a=0;a<r;a++){var o=t[a]
o.path||o.createPathProxy(),o.__dirtyPath&&o.buildPath(o.path,o.shape,!0),n.push(o.path)}var s=new i(e)
return s.createPathProxy(),s.buildPath=function(t){t.appendPath(n)
var e=t.getContext()
e&&t.rebuildPath(e)},s}},1391:function(t,e,n){var i=n(1316),r=n(1392),a=n(1393),o=n(1394),s=n(1395),l=n(1348).normalizeRadian,u=n(1303),h=n(1349),c=i.CMD,f=2*Math.PI,d=1e-4,p=[-1,-1,-1],g=[-1,-1]
function m(){var t=g[0]
g[0]=g[1],g[1]=t}function v(t,e,n,i,r,a,o,s,l,h){if(h>e&&h>i&&h>a&&h>s||h<e&&h<i&&h<a&&h<s)return 0
var c=u.cubicRootAt(e,i,a,s,h,p)
if(0===c)return 0
for(var f,d,v=0,y=-1,x=0;x<c;x++){var _=p[x],b=0===_||1===_?.5:1
u.cubicAt(t,n,r,o,_)<l||(y<0&&(y=u.cubicExtrema(e,i,a,s,g),g[1]<g[0]&&y>1&&m(),f=u.cubicAt(e,i,a,s,g[0]),y>1&&(d=u.cubicAt(e,i,a,s,g[1]))),2==y?_<g[0]?v+=f<e?b:-b:_<g[1]?v+=d<f?b:-b:v+=s<d?b:-b:_<g[0]?v+=f<e?b:-b:v+=s<f?b:-b)}return v}function y(t,e,n,i,r,a,o,s){if(s>e&&s>i&&s>a||s<e&&s<i&&s<a)return 0
var l=u.quadraticRootAt(e,i,a,s,p)
if(0===l)return 0
var h=u.quadraticExtremum(e,i,a)
if(h>=0&&h<=1){for(var c=0,f=u.quadraticAt(e,i,a,h),d=0;d<l;d++){var g=0===p[d]||1===p[d]?.5:1
u.quadraticAt(t,n,r,p[d])<o||(p[d]<h?c+=f<e?g:-g:c+=a<f?g:-g)}return c}return g=0===p[0]||1===p[0]?.5:1,u.quadraticAt(t,n,r,p[0])<o?0:a<e?g:-g}function x(t,e,n,i,r,a,o,s){if((s-=e)>n||s<-n)return 0
var u=Math.sqrt(n*n-s*s)
p[0]=-u,p[1]=u
var h=Math.abs(i-r)
if(h<1e-4)return 0
if(h%f<1e-4){i=0,r=f
var c=a?1:-1
return o>=p[0]+t&&o<=p[1]+t?c:0}a?(u=i,i=l(r),r=l(u)):(i=l(i),r=l(r)),i>r&&(r+=f)
for(var d=0,g=0;g<2;g++){var m=p[g]
if(m+t>o){var v=Math.atan2(s,m)
c=a?1:-1,v<0&&(v=f+v),(v>=i&&v<=r||v+f>=i&&v+f<=r)&&(v>Math.PI/2&&v<1.5*Math.PI&&(c=-c),d+=c)}}return d}function _(t,e,n,i,l){for(var u=0,f=0,p=0,g=0,m=0,_=0;_<t.length;){var b=t[_++]
switch(b===c.M&&_>1&&(n||(u+=h(f,p,g,m,i,l))),1==_&&(g=f=t[_],m=p=t[_+1]),b){case c.M:f=g=t[_++],p=m=t[_++]
break
case c.L:if(n){if(r.containStroke(f,p,t[_],t[_+1],e,i,l))return!0}else u+=h(f,p,t[_],t[_+1],i,l)||0
f=t[_++],p=t[_++]
break
case c.C:if(n){if(a.containStroke(f,p,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],e,i,l))return!0}else u+=v(f,p,t[_++],t[_++],t[_++],t[_++],t[_],t[_+1],i,l)||0
f=t[_++],p=t[_++]
break
case c.Q:if(n){if(o.containStroke(f,p,t[_++],t[_++],t[_],t[_+1],e,i,l))return!0}else u+=y(f,p,t[_++],t[_++],t[_],t[_+1],i,l)||0
f=t[_++],p=t[_++]
break
case c.A:var w=t[_++],S=t[_++],M=t[_++],T=t[_++],k=t[_++],D=t[_++],C=(t[_++],1-t[_++]),A=Math.cos(k)*M+w,I=Math.sin(k)*T+S
_>1?u+=h(f,p,A,I,i,l):(g=A,m=I)
var O=(i-w)*T/M+w
if(n){if(s.containStroke(w,S,T,k,k+D,C,e,O,l))return!0}else u+=x(w,S,T,k,k+D,C,O,l)
f=Math.cos(k+D)*M+w,p=Math.sin(k+D)*T+S
break
case c.R:if(g=f=t[_++],m=p=t[_++],A=g+t[_++],I=m+t[_++],n){if(r.containStroke(g,m,A,m,e,i,l)||r.containStroke(A,m,A,I,e,i,l)||r.containStroke(A,I,g,I,e,i,l)||r.containStroke(g,I,g,m,e,i,l))return!0}else u+=h(A,m,A,I,i,l),u+=h(g,I,g,m,i,l)
break
case c.Z:if(n){if(r.containStroke(f,p,g,m,e,i,l))return!0}else u+=h(f,p,g,m,i,l)
f=g,p=m}}return n||function(t,e){return Math.abs(t-e)<d}(p,m)||(u+=h(f,p,g,m,i,l)||0),0!==u}e.contain=function(t,e,n){return _(t,0,!1,e,n)},e.containStroke=function(t,e,n,i){return _(t,e,!0,n,i)}},1392:function(t,e){e.containStroke=function(t,e,n,i,r,a,o){if(0===r)return!1
var s,l=r
if(o>e+l&&o>i+l||o<e-l&&o<i-l||a>t+l&&a>n+l||a<t-l&&a<n-l)return!1
if(t===n)return Math.abs(a-t)<=l/2
var u=(s=(e-i)/(t-n))*a-o+(t*i-n*e)/(t-n)
return u*u/(s*s+1)<=l/2*l/2}},1393:function(t,e,n){var i=n(1303)
e.containStroke=function(t,e,n,r,a,o,s,l,u,h,c){if(0===u)return!1
var f=u
return!(c>e+f&&c>r+f&&c>o+f&&c>l+f||c<e-f&&c<r-f&&c<o-f&&c<l-f||h>t+f&&h>n+f&&h>a+f&&h>s+f||h<t-f&&h<n-f&&h<a-f&&h<s-f)&&i.cubicProjectPoint(t,e,n,r,a,o,s,l,h,c,null)<=f/2}},1394:function(t,e,n){var i=n(1303).quadraticProjectPoint
e.containStroke=function(t,e,n,r,a,o,s,l,u){if(0===s)return!1
var h=s
return!(u>e+h&&u>r+h&&u>o+h||u<e-h&&u<r-h&&u<o-h||l>t+h&&l>n+h&&l>a+h||l<t-h&&l<n-h&&l<a-h)&&i(t,e,n,r,a,o,l,u,null)<=h/2}},1395:function(t,e,n){var i=n(1348).normalizeRadian,r=2*Math.PI
e.containStroke=function(t,e,n,a,o,s,l,u,h){if(0===l)return!1
var c=l
u-=t,h-=e
var f=Math.sqrt(u*u+h*h)
if(f-c>n||f+c<n)return!1
if(Math.abs(a-o)%r<1e-4)return!0
if(s){var d=a
a=i(o),o=i(d)}else a=i(a),o=i(o)
a>o&&(o+=r)
var p=Math.atan2(h,u)
return p<0&&(p+=r),p>=a&&p<=o||p+r>=a&&p+r<=o}},1396:function(t,e,n){var i=n(1316),r=n(1291).applyTransform,a=i.CMD,o=[[],[],[]],s=Math.sqrt,l=Math.atan2
t.exports=function(t,e){var n,i,u,h,c,f=t.data,d=a.M,p=a.C,g=a.L,m=a.R,v=a.A,y=a.Q
for(u=0,h=0;u<f.length;){switch(n=f[u++],h=u,i=0,n){case d:case g:i=1
break
case p:i=3
break
case y:i=2
break
case v:var x=e[4],_=e[5],b=s(e[0]*e[0]+e[1]*e[1]),w=s(e[2]*e[2]+e[3]*e[3]),S=l(-e[1]/w,e[0]/b)
f[u]*=b,f[u++]+=x,f[u]*=w,f[u++]+=_,f[u++]*=b,f[u++]*=w,f[u++]+=S,f[u++]+=S,h=u+=2
break
case m:M[0]=f[u++],M[1]=f[u++],r(M,M,e),f[h++]=M[0],f[h++]=M[1],M[0]+=f[u++],M[1]+=f[u++],r(M,M,e),f[h++]=M[0],f[h++]=M[1]}for(c=0;c<i;c++){var M;(M=o[c])[0]=f[u++],M[1]=f[u++],r(M,M,e),f[h++]=M[0],f[h++]=M[1]}}}},1397:function(t,e,n){var i=n(1315),r=n(1288),a=n(1302),o=n(1344),s=function(t){i.call(this,t)}
s.prototype={constructor:s,type:"text",brush:function(t,e){var n=this.style
this.__dirty&&o.normalizeTextStyle(n,!0),n.fill=n.stroke=n.shadowBlur=n.shadowColor=n.shadowOffsetX=n.shadowOffsetY=null
var i=n.text
null!=i&&(i+=""),n.bind(t,this,e),o.needDrawText(i,n)&&(this.setTransform(t),o.renderText(this,t,i,n),this.restoreTransform(t))},getBoundingRect:function(){var t=this.style
if(this.__dirty&&o.normalizeTextStyle(t,!0),!this._rect){var e=t.text
null!=e?e+="":e=""
var n=a.getBoundingRect(t.text+"",t.font,t.textAlign,t.textVerticalAlign,t.textPadding,t.rich)
if(n.x+=t.x||0,n.y+=t.y||0,o.getStroke(t.textStroke,t.textStrokeWidth)){var i=t.textStrokeWidth
n.x-=i/2,n.y-=i/2,n.width+=i,n.height+=i}this._rect=n}return this._rect}},r.inherits(s,i)
var l=s
t.exports=l},1398:function(t,e,n){var i=n(1295).extend({type:"circle",shape:{cx:0,cy:0,r:0},buildPath:function(t,e,n){n&&t.moveTo(e.cx+e.r,e.cy),t.arc(e.cx,e.cy,e.r,0,2*Math.PI,!0)}})
t.exports=i},1399:function(t,e,n){var i=n(1295),r=n(1350),a=i.extend({type:"sector",shape:{cx:0,cy:0,r0:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},brush:r(i.prototype.brush),buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r0||0,0),a=Math.max(e.r,0),o=e.startAngle,s=e.endAngle,l=e.clockwise,u=Math.cos(o),h=Math.sin(o)
t.moveTo(u*r+n,h*r+i),t.lineTo(u*a+n,h*a+i),t.arc(n,i,a,o,s,!l),t.lineTo(Math.cos(s)*r+n,Math.sin(s)*r+i),0!==r&&t.arc(n,i,r,s,o,l),t.closePath()}})
t.exports=a},1400:function(t,e,n){var i=n(1295).extend({type:"ring",shape:{cx:0,cy:0,r:0,r0:0},buildPath:function(t,e){var n=e.cx,i=e.cy,r=2*Math.PI
t.moveTo(n+e.r,i),t.arc(n,i,e.r,0,r,!1),t.moveTo(n+e.r0,i),t.arc(n,i,e.r0,0,r,!0)}})
t.exports=i},1401:function(t,e,n){var i=n(1295),r=n(1351),a=i.extend({type:"polygon",shape:{points:null,smooth:!1,smoothConstraint:null},buildPath:function(t,e){r.buildPath(t,e,!0)}})
t.exports=a},1402:function(t,e,n){var i=n(1291).distance
function r(t,e,n,i,r,a,o){var s=.5*(n-t),l=.5*(i-e)
return(2*(e-n)+s+l)*o+(-3*(e-n)-2*s-l)*a+s*r+e}t.exports=function(t,e){for(var n=t.length,a=[],o=0,s=1;s<n;s++)o+=i(t[s-1],t[s])
var l=o/2
for(l=l<n?n:l,s=0;s<l;s++){var u,h,c,f=s/(l-1)*(e?n:n-1),d=Math.floor(f),p=f-d,g=t[d%n]
e?(u=t[(d-1+n)%n],h=t[(d+1)%n],c=t[(d+2)%n]):(u=t[0===d?d:d-1],h=t[d>n-2?n-1:d+1],c=t[d>n-3?n-1:d+2])
var m=p*p,v=p*m
a.push([r(u[0],g[0],h[0],c[0],p,m,v),r(u[1],g[1],h[1],c[1],p,m,v)])}return a}},1403:function(t,e,n){var i=n(1291),r=i.min,a=i.max,o=i.scale,s=i.distance,l=i.add,u=i.clone,h=i.sub
t.exports=function(t,e,n,i){var c,f,d,p,g=[],m=[],v=[],y=[]
if(i){d=[1/0,1/0],p=[-1/0,-1/0]
for(var x=0,_=t.length;x<_;x++)r(d,d,t[x]),a(p,p,t[x])
r(d,d,i[0]),a(p,p,i[1])}for(x=0,_=t.length;x<_;x++){var b=t[x]
if(n)c=t[x?x-1:_-1],f=t[(x+1)%_]
else{if(0===x||x===_-1){g.push(u(t[x]))
continue}c=t[x-1],f=t[x+1]}h(m,f,c),o(m,m,e)
var w=s(b,c),S=s(b,f),M=w+S
0!==M&&(w/=M,S/=M),o(v,m,-w),o(y,m,S)
var T=l([],b,v),k=l([],b,y)
i&&(a(T,T,d),r(T,T,p),a(k,k,d),r(k,k,p)),g.push(T),g.push(k)}return n&&g.push(g.shift()),g}},1404:function(t,e,n){var i=n(1295),r=n(1351),a=i.extend({type:"polyline",shape:{points:null,smooth:!1,smoothConstraint:null},style:{stroke:"#000",fill:null},buildPath:function(t,e){r.buildPath(t,e,!1)}})
t.exports=a},1405:function(t,e,n){var i=n(1295),r=n(1345),a=i.extend({type:"rect",shape:{r:0,x:0,y:0,width:0,height:0},buildPath:function(t,e){var n=e.x,i=e.y,a=e.width,o=e.height
e.r?r.buildPath(t,e):t.rect(n,i,a,o),t.closePath()}})
t.exports=a},1406:function(t,e,n){var i=n(1295).extend({type:"line",shape:{x1:0,y1:0,x2:0,y2:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,o=e.percent
0!==o&&(t.moveTo(n,i),o<1&&(r=n*(1-o)+r*o,a=i*(1-o)+a*o),t.lineTo(r,a))},pointAt:function(t){var e=this.shape
return[e.x1*(1-t)+e.x2*t,e.y1*(1-t)+e.y2*t]}})
t.exports=i},1407:function(t,e,n){var i=n(1295),r=n(1291),a=n(1303),o=a.quadraticSubdivide,s=a.cubicSubdivide,l=a.quadraticAt,u=a.cubicAt,h=a.quadraticDerivativeAt,c=a.cubicDerivativeAt,f=[]
function d(t,e,n){var i=t.cpx2,r=t.cpy2
return null===i||null===r?[(n?c:u)(t.x1,t.cpx1,t.cpx2,t.x2,e),(n?c:u)(t.y1,t.cpy1,t.cpy2,t.y2,e)]:[(n?h:l)(t.x1,t.cpx1,t.x2,e),(n?h:l)(t.y1,t.cpy1,t.y2,e)]}var p=i.extend({type:"bezier-curve",shape:{x1:0,y1:0,x2:0,y2:0,cpx1:0,cpy1:0,percent:1},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.x1,i=e.y1,r=e.x2,a=e.y2,l=e.cpx1,u=e.cpy1,h=e.cpx2,c=e.cpy2,d=e.percent
0!==d&&(t.moveTo(n,i),null==h||null==c?(d<1&&(o(n,l,r,d,f),l=f[1],r=f[2],o(i,u,a,d,f),u=f[1],a=f[2]),t.quadraticCurveTo(l,u,r,a)):(d<1&&(s(n,l,h,r,d,f),l=f[1],h=f[2],r=f[3],s(i,u,c,a,d,f),u=f[1],c=f[2],a=f[3]),t.bezierCurveTo(l,u,h,c,r,a)))},pointAt:function(t){return d(this.shape,t,!1)},tangentAt:function(t){var e=d(this.shape,t,!0)
return r.normalize(e,e)}})
t.exports=p},1408:function(t,e,n){var i=n(1295).extend({type:"arc",shape:{cx:0,cy:0,r:0,startAngle:0,endAngle:2*Math.PI,clockwise:!0},style:{stroke:"#000",fill:null},buildPath:function(t,e){var n=e.cx,i=e.cy,r=Math.max(e.r,0),a=e.startAngle,o=e.endAngle,s=e.clockwise,l=Math.cos(a),u=Math.sin(a)
t.moveTo(l*r+n,u*r+i),t.arc(n,i,r,a,o,!s)}})
t.exports=i},1409:function(t,e,n){var i=n(1295),r=i.extend({type:"compound",shape:{paths:null},_updatePathDirty:function(){for(var t=this.__dirtyPath,e=this.shape.paths,n=0;n<e.length;n++)t=t||e[n].__dirtyPath
this.__dirtyPath=t,this.__dirty=this.__dirty||t},beforeBrush:function(){this._updatePathDirty()
for(var t=this.shape.paths||[],e=this.getGlobalScale(),n=0;n<t.length;n++)t[n].path||t[n].createPathProxy(),t[n].path.setScale(e[0],e[1])},buildPath:function(t,e){for(var n=e.paths||[],i=0;i<n.length;i++)n[i].buildPath(t,n[i].shape,!0)},afterBrush:function(){for(var t=this.shape.paths||[],e=0;e<t.length;e++)t[e].__dirtyPath=!1},getBoundingRect:function(){return this._updatePathDirty(),i.prototype.getBoundingRect.call(this)}})
t.exports=r},1410:function(t,e,n){var i=n(1288),r=n(1324),a=function(t,e,n,i,a,o){this.x=null==t?0:t,this.y=null==e?0:e,this.x2=null==n?1:n,this.y2=null==i?0:i,this.type="linear",this.global=o||!1,r.call(this,a)}
a.prototype={constructor:a},i.inherits(a,r)
var o=a
t.exports=o},1411:function(t,e,n){var i=n(1288),r=n(1324),a=function(t,e,n,i,a){this.x=null==t?.5:t,this.y=null==e?.5:e,this.r=null==n?.5:n,this.type="radial",this.global=a||!1,r.call(this,i)}
a.prototype={constructor:a},i.inherits(a,r)
var o=a
t.exports=o},1412:function(t,e,n){var i=n(1288).inherits,r=n(1315),a=n(1296)
function o(t){r.call(this,t),this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.notClear=!0}o.prototype.incremental=!0,o.prototype.clearDisplaybles=function(){this._displayables=[],this._temporaryDisplayables=[],this._cursor=0,this.dirty(),this.notClear=!1},o.prototype.addDisplayable=function(t,e){e?this._temporaryDisplayables.push(t):this._displayables.push(t),this.dirty()},o.prototype.addDisplayables=function(t,e){e=e||!1
for(var n=0;n<t.length;n++)this.addDisplayable(t[n],e)},o.prototype.eachPendingDisplayable=function(t){for(var e=this._cursor;e<this._displayables.length;e++)t&&t(this._displayables[e])
for(e=0;e<this._temporaryDisplayables.length;e++)t&&t(this._temporaryDisplayables[e])},o.prototype.update=function(){this.updateTransform()
for(var t=this._cursor;t<this._displayables.length;t++)(e=this._displayables[t]).parent=this,e.update(),e.parent=null
for(t=0;t<this._temporaryDisplayables.length;t++){var e;(e=this._temporaryDisplayables[t]).parent=this,e.update(),e.parent=null}},o.prototype.brush=function(t,e){for(var n=this._cursor;n<this._displayables.length;n++)(i=this._displayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,n===this._cursor?null:this._displayables[n-1]),i.afterBrush&&i.afterBrush(t)
for(this._cursor=n,n=0;n<this._temporaryDisplayables.length;n++){var i;(i=this._temporaryDisplayables[n]).beforeBrush&&i.beforeBrush(t),i.brush(t,0===n?null:this._temporaryDisplayables[n-1]),i.afterBrush&&i.afterBrush(t)}this._temporaryDisplayables=[],this.notClear=!0}
var s=[]
o.prototype.getBoundingRect=function(){if(!this._rect){for(var t=new a(1/0,1/0,-1/0,-1/0),e=0;e<this._displayables.length;e++){var n=this._displayables[e],i=n.getBoundingRect().clone()
n.needLocalTransform()&&i.applyTransform(n.getLocalTransform(s)),t.union(i)}this._rect=t}return this._rect},o.prototype.contain=function(t,e){var n=this.transformCoordToLocal(t,e)
if(this.getBoundingRect().contain(n[0],n[1]))for(var i=0;i<this._displayables.length;i++)if(this._displayables[i].contain(t,e))return!0
return!1},i(o,r)
var l=o
t.exports=l},1413:function(t,e,n){var i=n(1323)([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"],["textPosition"],["textAlign"]]),r={getItemStyle:function(t,e){var n=i(this,t,e),r=this.getBorderLineDash()
return r&&(n.lineDash=r),n},getBorderLineDash:function(){var t=this.get("borderType")
return"solid"===t||null==t?null:"dashed"===t?[5,5]:[1,1]}}
t.exports=r},1414:function(t,e){t.exports={getBoxLayoutParams:function(){return{left:this.get("left"),top:this.get("top"),right:this.get("right"),bottom:this.get("bottom"),width:this.get("width"),height:this.get("height")}}}},1415:function(t,e){var n=""
"undefined"!=typeof navigator&&(n=navigator.platform||"")
var i={color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],gradientColor:["#f6efa6","#d88273","#bf444c"],textStyle:{fontFamily:n.match(/^Win/)?"Microsoft YaHei":"sans-serif",fontSize:12,fontStyle:"normal",fontWeight:"normal"},blendMode:null,animation:"auto",animationDuration:1e3,animationDurationUpdate:300,animationEasing:"exponentialOut",animationEasingUpdate:"cubicOut",animationThreshold:2e3,progressiveThreshold:3e3,progressive:400,hoverLayerThreshold:3e3,useUTC:!1}
t.exports=i},1416:function(t,e,n){var i=n(1288),r=n(1289),a=n(1300),o=i.each,s=i.clone,l=i.map,u=i.merge,h=/^(min|max)?(.+)$/
function c(t){this._api=t,this._timelineOptions=[],this._mediaList=[],this._mediaDefault,this._currentMediaIndices=[],this._optionBackup,this._newBaseOption}function f(t,e,n){var r={width:e,height:n,aspectratio:e/n},a=!0
return i.each(t,function(t,e){var n=e.match(h)
if(n&&n[1]&&n[2]){var i=n[1],o=n[2].toLowerCase();(function(t,e,n){return"min"===i?t>=e:"max"===i?t<=e:t===e})(r[o],t)||(a=!1)}}),a}c.prototype={constructor:c,setOption:function(t,e){t&&i.each(r.normalizeToArray(t.series),function(t){t&&t.data&&i.isTypedArray(t.data)&&i.setAsPrimitive(t.data)}),t=s(t,!0)
var n=this._optionBackup,h=function(t,e,n){var r,a,s=[],l=[],u=t.timeline
if(t.baseOption&&(a=t.baseOption),(u||t.options)&&(a=a||{},s=(t.options||[]).slice()),t.media){a=a||{}
var h=t.media
o(h,function(t){t&&t.option&&(t.query?l.push(t):r||(r=t))})}return a||(a=t),a.timeline||(a.timeline=u),o([a].concat(s).concat(i.map(l,function(t){return t.option})),function(t){o(e,function(e){e(t,n)})}),{baseOption:a,timelineOptions:s,mediaDefault:r,mediaList:l}}.call(this,t,e,!n)
this._newBaseOption=h.baseOption,n?(function(t,e){o(e=e||{},function(e,n){if(null!=e){var i=t[n]
if(a.hasClass(n)){e=r.normalizeToArray(e),i=r.normalizeToArray(i)
var o=r.mappingToExists(i,e)
t[n]=l(o,function(t){return t.option&&t.exist?u(t.exist,t.option,!0):t.exist||t.option})}else t[n]=u(i,e,!0)}})}(n.baseOption,h.baseOption),h.timelineOptions.length&&(n.timelineOptions=h.timelineOptions),h.mediaList.length&&(n.mediaList=h.mediaList),h.mediaDefault&&(n.mediaDefault=h.mediaDefault)):this._optionBackup=h},mountOption:function(t){var e=this._optionBackup
return this._timelineOptions=l(e.timelineOptions,s),this._mediaList=l(e.mediaList,s),this._mediaDefault=s(e.mediaDefault),this._currentMediaIndices=[],s(t?e.baseOption:this._newBaseOption)},getTimelineOption:function(t){var e,n=this._timelineOptions
if(n.length){var i=t.getComponent("timeline")
i&&(e=s(n[i.getCurrentIndex()],!0))}return e},getMediaOption:function(t){var e=this._api.getWidth(),n=this._api.getHeight(),i=this._mediaList,r=this._mediaDefault,a=[],o=[]
if(!i.length&&!r)return o
for(var u=0,h=i.length;u<h;u++)f(i[u].query,e,n)&&a.push(u)
return!a.length&&r&&(a=[-1]),a.length&&!function(t,e){return t.join(",")===e.join(",")}(a,this._currentMediaIndices)&&(o=l(a,function(t){return s(-1===t?r.option:i[t].option)})),this._currentMediaIndices=a,o}}
var d=c
t.exports=d},1417:function(t,e,n){var i=n(1288),r=i.each,a=i.isArray,o=i.isObject,s=n(1418),l=n(1289).normalizeToArray
function u(t){r(h,function(e){e[0]in t&&!(e[1]in t)&&(t[e[1]]=t[e[0]])})}var h=[["x","left"],["y","top"],["x2","right"],["y2","bottom"]],c=["grid","geo","parallel","legend","toolbox","title","visualMap","dataZoom","timeline"]
t.exports=function(t,e){s(t,e),t.series=l(t.series),r(t.series,function(t){if(o(t)){var e=t.type
if("pie"!==e&&"gauge"!==e||null!=t.clockWise&&(t.clockwise=t.clockWise),"gauge"===e){var n=function(t,e){e=e.split(",")
for(var n=t,i=0;i<e.length&&null!=(n=n&&n[e[i]]);i++);return n}(t,"pointer.color")
null!=n&&function(t,e,n,i){e=e.split(",")
for(var r,a=t,o=0;o<e.length-1;o++)null==a[r=e[o]]&&(a[r]={}),a=a[r]
null==a[e[o]]&&(a[e[o]]=n)}(t,"itemStyle.normal.color",n)}u(t)}}),t.dataRange&&(t.visualMap=t.dataRange),r(c,function(e){var n=t[e]
n&&(a(n)||(n=[n]),r(n,function(t){u(t)}))})}},1418:function(t,e,n){var i=n(1288),r=n(1289),a=i.each,o=i.isObject,s=["areaStyle","lineStyle","nodeStyle","linkStyle","chordStyle","label","labelLine"]
function l(t){var e=t&&t.itemStyle
if(e)for(var n=0,r=s.length;n<r;n++){var a=s[n],o=e.normal,l=e.emphasis
o&&o[a]&&(t[a]=t[a]||{},t[a].normal?i.merge(t[a].normal,o[a]):t[a].normal=o[a],o[a]=null),l&&l[a]&&(t[a]=t[a]||{},t[a].emphasis?i.merge(t[a].emphasis,l[a]):t[a].emphasis=l[a],l[a]=null)}}function u(t,e,n){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var r=t[e].normal,a=t[e].emphasis
r&&(n?(t[e].normal=t[e].emphasis=null,i.defaults(t[e],r)):t[e]=r),a&&(t.emphasis=t.emphasis||{},t.emphasis[e]=a)}}function h(t){u(t,"itemStyle"),u(t,"lineStyle"),u(t,"areaStyle"),u(t,"label"),u(t,"labelLine"),u(t,"upperLabel"),u(t,"edgeLabel")}function c(t,e){var n=o(t)&&t[e],i=o(n)&&n.textStyle
if(i)for(var a=0,s=r.TEXT_STYLE_OPTIONS.length;a<s;a++)e=r.TEXT_STYLE_OPTIONS[a],i.hasOwnProperty(e)&&(n[e]=i[e])}function f(t){t&&(h(t),c(t,"label"),t.emphasis&&c(t.emphasis,"label"))}function d(t){return i.isArray(t)?t:t?[t]:[]}function p(t){return(i.isArray(t)?t[0]:t)||{}}t.exports=function(t,e){a(d(t.series),function(t){o(t)&&function(t){if(o(t)){l(t),h(t),c(t,"label"),c(t,"upperLabel"),c(t,"edgeLabel"),t.emphasis&&(c(t.emphasis,"label"),c(t.emphasis,"upperLabel"),c(t.emphasis,"edgeLabel")),(n=t.markPoint)&&(l(n),f(n)),(r=t.markLine)&&(l(r),f(r))
var e=t.markArea
e&&f(e)
var n,r,a=t.data
if("graph"===t.type){a=a||t.nodes
var s=t.links||t.edges
if(s&&!i.isTypedArray(s))for(var d=0;d<s.length;d++)f(s[d])
i.each(t.categories,function(t){h(t)})}if(a&&!i.isTypedArray(a))for(d=0;d<a.length;d++)f(a[d])
if((n=t.markPoint)&&n.data){var p=n.data
for(d=0;d<p.length;d++)f(p[d])}if((r=t.markLine)&&r.data){var g=r.data
for(d=0;d<g.length;d++)i.isArray(g[d])?(f(g[d][0]),f(g[d][1])):f(g[d])}"gauge"===t.type?(c(t,"axisLabel"),c(t,"title"),c(t,"detail")):"treemap"===t.type?(u(t.breadcrumb,"itemStyle"),i.each(t.levels,function(t){h(t)})):"tree"===t.type&&h(t.leaves)}}(t)})
var n=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","parallelAxis","radar"]
e&&n.push("valueAxis","categoryAxis","logAxis","timeAxis"),a(n,function(e){a(d(t[e]),function(t){t&&(c(t,"axisLabel"),c(t.axisPointer,"label"))})}),a(d(t.parallel),function(t){var e=t&&t.parallelAxisDefault
c(e,"axisLabel"),c(e&&e.axisPointer,"label")}),a(d(t.calendar),function(t){u(t,"itemStyle"),c(t,"dayLabel"),c(t,"monthLabel"),c(t,"yearLabel")}),a(d(t.radar),function(t){c(t,"name")}),a(d(t.geo),function(t){o(t)&&(f(t),a(d(t.regions),function(t){f(t)}))}),a(d(t.timeline),function(t){f(t),u(t,"label"),u(t,"itemStyle"),u(t,"controlStyle",!0)
var e=t.data
i.isArray(e)&&i.each(e,function(t){i.isObject(t)&&(u(t,"label"),u(t,"itemStyle"))})}),a(d(t.toolbox),function(t){u(t,"iconStyle"),a(t.feature,function(t){u(t,"iconStyle")})}),c(p(t.axisPointer),"label"),c(p(t.tooltip).axisPointer,"label")}},1419:function(t,e,n){var i=n(1288),r=i.createHashMap,a=i.each
function o(t){a(t,function(e,n){var i=[],r=[NaN,NaN],a=[e.stackResultDimension,e.stackedOverDimension],o=e.data,s=e.isStackedByIndex,l=o.map(a,function(a,l,u){var h,c,f=o.get(e.stackedDimension,u)
if(isNaN(f))return r
s?c=o.getRawIndex(u):h=o.get(e.stackedByDimension,u)
for(var d=NaN,p=n-1;p>=0;p--){var g=t[p]
if(s||(c=g.data.rawIndexOf(g.stackedByDimension,h)),c>=0){var m=g.data.getByRawIndex(g.stackResultDimension,c)
if(f>=0&&m>0||f<=0&&m<0){f+=m,d=m
break}}}return i[0]=f,i[1]=d,i})
o.hostModel.setData(l),e.data=l})}t.exports=function(t){var e=r()
t.eachSeries(function(t){var n=t.get("stack")
if(n){var i=e.get(n)||e.set(n,[]),r=t.getData(),a={stackResultDimension:r.getCalculationInfo("stackResultDimension"),stackedOverDimension:r.getCalculationInfo("stackedOverDimension"),stackedDimension:r.getCalculationInfo("stackedDimension"),stackedByDimension:r.getCalculationInfo("stackedByDimension"),isStackedByIndex:r.getCalculationInfo("isStackedByIndex"),data:r,seriesModel:t}
if(!a.stackedDimension||!a.isStackedByIndex&&!a.stackedByDimension)return
i.length&&r.setCalculationInfo("stackedOnSeries",i[i.length-1].seriesModel),i.push(a)}}),e.each(o)}},1420:function(t,e,n){var i=n(1312).retrieveRawValue,r=n(1297),a=r.getTooltipMarker,o=r.formatTpl,s=/\{@(.+?)\}/g,l={getDataParams:function(t,e){var n=this.getData(e),i=this.getRawValue(t,e),r=n.getRawIndex(t),o=n.getName(t),s=n.getRawDataItem(t),l=n.getItemVisual(t,"color")
return{componentType:this.mainType,componentSubType:this.subType,seriesType:"series"===this.mainType?this.subType:null,seriesIndex:this.seriesIndex,seriesId:this.id,seriesName:this.name,name:o,dataIndex:r,data:s,dataType:e,value:i,color:l,marker:a(l),$vars:["seriesName","name","value"]}},getFormattedLabel:function(t,e,n,r,a){e=e||"normal"
var l=this.getData(n),u=l.getItemModel(t),h=this.getDataParams(t,n)
null!=r&&h.value instanceof Array&&(h.value=h.value[r])
var c=u.get("normal"===e?[a||"label","formatter"]:[e,a||"label","formatter"])
return"function"==typeof c?(h.status=e,c(h)):"string"==typeof c?o(c,h).replace(s,function(e,n){var r=n.length
return"["===n.charAt(0)&&"]"===n.charAt(r-1)&&(n=+n.slice(1,r-1)),i(l,t,n)}):void 0},getRawValue:function(t,e){return i(this.getData(e),t)},formatTooltip:function(){}}
t.exports=l},1421:function(t,e,n){var i=n(1324),r={createOnAllSeries:!0,performRawSeries:!0,reset:function(t,e){var n=t.getData(),r=(t.visualColorAccessPath||"itemStyle.color").split("."),a=t.get(r)||t.getColorFromPalette(t.name,null,e.getSeriesCount())
if(n.setVisual("color",a),!e.isSeriesFiltered(t))return"function"!=typeof a||a instanceof i||n.each(function(e){n.setItemVisual(e,"color",a(t.getDataParams(e)))}),{dataEach:n.hasItemOption?function(t,e){var n=t.getItemModel(e).get(r,!0)
null!=n&&t.setItemVisual(e,"color",n)}:null}}}
t.exports=r},1422:function(t,e,n){var i=n(1288),r=n(1423),a=n(1312).retrieveRawValue
t.exports=function(t,e){var n=e.getModel("aria")
if(n.get("show"))if(n.get("description"))t.setAttribute("aria-label",n.get("description"))
else{var o=0
e.eachSeries(function(t,e){++o},this)
var s,l=n.get("data.maxCount")||10,u=n.get("series.maxCount")||10,h=Math.min(o,u)
if(!(o<1)){var c=function(){var t=e.getModel("title").option
return t&&t.length&&(t=t[0]),t&&t.text}()
s=c?d(p("general.withTitle"),{title:c}):p("general.withoutTitle")
var f=[]
s+=d(p(o>1?"series.multiple.prefix":"series.single.prefix"),{seriesCount:o}),e.eachSeries(function(t,e){if(e<h){var n,i=t.get("name"),s="series."+(o>1?"multiple":"single")+"."
n=d(n=p(i?s+"withName":s+"withoutName"),{seriesId:t.seriesIndex,seriesName:t.get("name"),seriesType:function(t){return r.series.typeNames[t]||"自定义图"}(t.subType)})
var u=t.getData()
window.data=u,u.count()>l?n+=d(p("data.partialData"),{displayCnt:l}):n+=p("data.allData")
for(var c=[],g=0;g<u.count();g++)if(g<l){var m=u.getName(g),v=a(u,g)
c.push(d(p(m?"data.withName":"data.withoutName"),{name:m,value:v}))}n+=c.join(p("data.separator.middle"))+p("data.separator.end"),f.push(n)}}),s+=f.join(p("series.multiple.separator.middle"))+p("series.multiple.separator.end"),t.setAttribute("aria-label",s)}}function d(t,e){if("string"!=typeof t)return t
var n=t
return i.each(e,function(t,e){n=n.replace(new RegExp("\\{\\s*"+e+"\\s*\\}","g"),t)}),n}function p(t){var e=n.get(t)
if(null==e){for(var i=t.split("."),a=r.aria,o=0;o<i.length;++o)a=a[i[o]]
return a}return e}}},1423:function(t,e){t.exports={toolbox:{brush:{title:{rect:"矩形选择",polygon:"圈选",lineX:"横向选择",lineY:"纵向选择",keep:"保持选择",clear:"清除选择"}},dataView:{title:"数据视图",lang:["数据视图","关闭","刷新"]},dataZoom:{title:{zoom:"区域缩放",back:"区域缩放还原"}},magicType:{title:{line:"切换为折线图",bar:"切换为柱状图",stack:"切换为堆叠",tiled:"切换为平铺"}},restore:{title:"还原"},saveAsImage:{title:"保存为图片",lang:["右键另存为图片"]}},series:{typeNames:{pie:"饼图",bar:"柱状图",line:"折线图",scatter:"散点图",effectScatter:"涟漪散点图",radar:"雷达图",tree:"树图",treemap:"矩形树图",boxplot:"箱型图",candlestick:"K线图",k:"K线图",heatmap:"热力图",map:"地图",parallel:"平行坐标图",lines:"线图",graph:"关系图",sankey:"桑基图",funnel:"漏斗图",gauge:"仪表盘图",pictorialBar:"象形柱图",themeRiver:"主题河流图",sunburst:"旭日图"}},aria:{general:{withTitle:"这是一个关于“{title}”的图表。",withoutTitle:"这是一个图表，"},series:{single:{prefix:"",withName:"图表类型是{seriesType}，表示{seriesName}。",withoutName:"图表类型是{seriesType}。"},multiple:{prefix:"它由{seriesCount}个图表系列组成。",withName:"第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",withoutName:"第{seriesId}个系列是一个{seriesType}，",separator:{middle:"；",end:"。"}}},data:{allData:"其数据是——",partialData:"其中，前{displayCnt}项是——",withName:"{name}的数据是{value}",withoutName:"{value}",separator:{middle:"，",end:""}}}}},1424:function(t,e,n){var i=n(1288),r=n(1292),a=Math.PI
t.exports=function(t,e){e=e||{},i.defaults(e,{text:"loading",color:"#c23531",textColor:"#000",maskColor:"rgba(255, 255, 255, 0.8)",zlevel:0})
var n=new r.Rect({style:{fill:e.maskColor},zlevel:e.zlevel,z:1e4}),o=new r.Arc({shape:{startAngle:-a/2,endAngle:-a/2+.1,r:10},style:{stroke:e.color,lineCap:"round",lineWidth:5},zlevel:e.zlevel,z:10001}),s=new r.Rect({style:{fill:"none",text:e.text,textPosition:"right",textDistance:10,textFill:e.textColor},zlevel:e.zlevel,z:10001})
o.animateShape(!0).when(1e3,{endAngle:3*a/2}).start("circularInOut"),o.animateShape(!0).when(1e3,{startAngle:3*a/2}).delay(300).start("circularInOut")
var l=new r.Group
return l.add(o),l.add(s),l.add(n),l.resize=function(){var e=t.getWidth()/2,i=t.getHeight()/2
o.setShape({cx:e,cy:i})
var r=o.shape.r
s.setShape({x:e-r,y:i-r,width:2*r,height:2*r}),n.setShape({x:0,y:0,width:t.getWidth(),height:t.getHeight()})},l.resize(),l}},1425:function(t,e,n){var i=n(1288),r=i.each,a=i.map,o=(i.isArray,i.isFunction),s=i.createHashMap,l=i.noop,u=n(1326).createTask,h=n(1317).getUID,c=n(1346),f=n(1354),d=n(1289).normalizeToArray
function p(t,e,n,i){this.ecInstance=t,this.api=e,this.unfinished,n=this._dataProcessorHandlers=n.slice(),i=this._visualHandlers=i.slice(),this._allHandlers=n.concat(i),this._stageTaskMap=s()}var g=p.prototype
function m(t,e,n,i,a){var o
function s(t,e){return t.setDirty&&(!t.dirtyMap||t.dirtyMap.get(e.__pipeline.id))}a=a||{},r(e,function(e,r){if(!a.visualType||a.visualType===e.visualType){var l=t._stageTaskMap.get(e.uid),u=l.seriesTaskMap,h=l.overallTask
if(h){var c,f=h.agentStubMap
f.each(function(t){s(a,t)&&(t.dirty(),c=!0)}),c&&h.dirty(),v(h,i)
var d=t.getPerformArgs(h,a.block)
f.each(function(t){t.perform(d)}),o|=h.perform(d)}else u&&u.each(function(r,l){s(a,r)&&r.dirty()
var u=t.getPerformArgs(r,a.block)
u.skip=!e.performRawSeries&&n.isSeriesFiltered(r.context.model),v(r,i),o|=r.perform(u)})}}),t.unfinished|=o}g.restoreData=function(t,e){t.restoreData(e),this._stageTaskMap.each(function(t){var e=t.overallTask
e&&e.dirty()})},g.getPerformArgs=function(t,e){if(t.__pipeline){var n=this._pipelineMap.get(t.__pipeline.id),i=n.context,r=!e&&n.progressiveEnabled&&(!i||i.progressiveRender)&&t.__idxInPipeline>n.blockIndex?n.step:null,a=i&&i.modDataCount
return{step:r,modBy:null!=a?Math.ceil(a/r):null,modDataCount:a}}},g.getPipeline=function(t){return this._pipelineMap.get(t)},g.updateStreamModes=function(t,e){var n=this._pipelineMap.get(t.uid),i=t.getData().count(),r=n.progressiveEnabled&&e.incrementalPrepareRender&&i>=n.threshold,a=t.get("large")&&i>=t.get("largeThreshold"),o="mod"===t.get("progressiveChunkMode")?i:null
t.pipelineContext=n.context={progressiveRender:r,modDataCount:o,large:a}},g.restorePipelines=function(t){var e=this,n=e._pipelineMap=s()
t.eachSeries(function(t){var i=t.getProgressive(),r=t.uid
n.set(r,{id:r,head:null,tail:null,threshold:t.getProgressiveThreshold(),progressiveEnabled:i&&!(t.preventIncremental&&t.preventIncremental()),blockIndex:-1,step:Math.round(i||700),count:0}),D(e,t,t.dataTask)})},g.prepareStageTasks=function(){var t=this._stageTaskMap,e=this.ecInstance.getModel(),n=this.api
r(this._allHandlers,function(i){var a=t.get(i.uid)||t.set(i.uid,[])
i.reset&&function(t,e,n,i,r){var a=n.seriesTaskMap||(n.seriesTaskMap=s()),o=e.seriesType,l=e.getTargetSeries
function h(n){var o=n.uid,s=a.get(o)||a.set(o,u({plan:w,reset:S,count:k}))
s.context={model:n,ecModel:i,api:r,useClearVisual:e.isVisual&&!e.isLayout,plan:e.plan,reset:e.reset,scheduler:t},D(t,n,s)}e.createOnAllSeries?i.eachRawSeries(h):o?i.eachRawSeriesByType(o,h):l&&l(i,r).each(h)
var c=t._pipelineMap
a.each(function(t,e){c.get(e)||(t.dispose(),a.removeKey(e))})}(this,i,a,e,n),i.overallReset&&function(t,e,n,i,a){var o=n.overallTask=n.overallTask||u({reset:y})
o.context={ecModel:i,api:a,overallReset:e.overallReset,scheduler:t}
var l=o.agentStubMap=o.agentStubMap||s(),h=e.seriesType,c=e.getTargetSeries,f=!0,d=e.modifyOutputEnd
function p(e){var n=e.uid,i=l.get(n)
i||(i=l.set(n,u({reset:x,onDirty:b})),o.dirty()),i.context={model:e,overallProgress:f,modifyOutputEnd:d},i.agent=o,i.__block=f,D(t,e,i)}h?i.eachRawSeriesByType(h,p):c?c(i,a).each(p):(f=!1,r(i.getSeries(),p))
var g=t._pipelineMap
l.each(function(t,e){g.get(e)||(t.dispose(),o.dirty(),l.removeKey(e))})}(this,i,a,e,n)},this)},g.prepareView=function(t,e,n,i){var r=t.renderTask,a=r.context
a.model=e,a.ecModel=n,a.api=i,r.__block=!t.incrementalPrepareRender,D(this,e,r)},g.performDataProcessorTasks=function(t,e){m(this,this._dataProcessorHandlers,t,e,{block:!0})},g.performVisualTasks=function(t,e,n){m(this,this._visualHandlers,t,e,n)},g.performSeriesTasks=function(t){var e
t.eachSeries(function(t){e|=t.dataTask.perform()}),this.unfinished|=e},g.plan=function(){this._pipelineMap.each(function(t){var e=t.tail
do{if(e.__block){t.blockIndex=e.__idxInPipeline
break}e=e.getUpstream()}while(e)})}
var v=g.updatePayload=function(t,e){"remain"!==e&&(t.context.payload=e)}
function y(t){t.overallReset(t.ecModel,t.api,t.payload)}function x(t,e){return t.overallProgress&&_}function _(){this.agent.dirty(),this.getDownstream().dirty()}function b(){this.agent&&this.agent.dirty()}function w(t){return t.plan&&t.plan(t.model,t.ecModel,t.api,t.payload)}function S(t){t.useClearVisual&&t.data.clearAllVisual()
var e=t.resetDefines=d(t.reset(t.model,t.ecModel,t.api,t.payload))
return e.length>1?a(e,function(t,e){return T(e)}):M}var M=T(0)
function T(t){return function(e,n){var i=n.data,r=n.resetDefines[t]
if(r&&r.dataEach)for(var a=e.start;a<e.end;a++)r.dataEach(i,a)
else r&&r.progress&&r.progress(e,i)}}function k(t){return t.data.count()}function D(t,e,n){var i=e.uid,r=t._pipelineMap.get(i)
!r.head&&(r.head=n),r.tail&&r.tail.pipe(n),r.tail=n,n.__idxInPipeline=r.count++,n.__pipeline=r}p.wrapStageHandler=function(t,e){return o(t)&&(t={overallReset:t,seriesType:function(t){C=null
try{t(A,I)}catch(t){}return C}(t)}),t.uid=h("stageHandler"),e&&(t.visualType=e),t}
var C,A={},I={}
function O(t,e){for(var n in e.prototype)t[n]=l}O(A,c),O(I,f),A.eachSeriesByType=A.eachRawSeriesByType=function(t){C=t},A.eachComponent=function(t){"series"===t.mainType&&t.subType&&(C=t.subType)}
var P=p
t.exports=P},1426:function(t,e){var n=["#37A2DA","#32C5E9","#67E0E3","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#E062AE","#E690D1","#e7bcf3","#9d96f5","#8378EA","#96BFFF"],i={color:n,colorLayer:[["#37A2DA","#ffd85c","#fd7b5f"],["#37A2DA","#67E0E3","#FFDB5C","#ff9f7f","#E062AE","#9d96f5"],["#37A2DA","#32C5E9","#9FE6B8","#FFDB5C","#ff9f7f","#fb7293","#e7bcf3","#8378EA","#96BFFF"],n]}
t.exports=i},1427:function(t,e){var n=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],i={color:n,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:"#eee"},crossStyle:{color:"#eee"}}},legend:{textStyle:{color:"#eee"}},textStyle:{color:"#eee"},title:{textStyle:{color:"#eee"}},toolbox:{iconStyle:{normal:{borderColor:"#eee"}}},dataZoom:{textStyle:{color:"#eee"}},visualMap:{textStyle:{color:"#eee"}},timeline:{lineStyle:{color:"#eee"},itemStyle:{normal:{color:n[1]}},label:{normal:{textStyle:{color:"#eee"}}},controlStyle:{normal:{color:"#eee",borderColor:"#eee"}}},timeAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},logAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},valueAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},categoryAxis:{axisLine:{lineStyle:{color:"#eee"}},axisTick:{lineStyle:{color:"#eee"}},axisLabel:{textStyle:{color:"#eee"}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:"#eee"}}},line:{symbol:"circle"},graph:{color:n},gauge:{title:{textStyle:{color:"#eee"}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}}
i.categoryAxis.splitLine.show=!1
var r=i
t.exports=r},1428:function(t,e,n){var i=n(1300),r=n(1356),a=n(1318).detectSourceFormat,o=n(1311).SERIES_LAYOUT_BY_COLUMN
i.extend({type:"dataset",defaultOption:{seriesLayoutBy:o,sourceHeader:null,dimensions:null,source:null},optionUpdated:function(){a(this)}}),r.extend({type:"dataset"})},1429:function(t,e,n){var i=n(1332)
e.zrender=i
var r=n(1301)
e.matrix=r
var a=n(1291)
e.vector=a
var o=n(1288),s=n(1308)
e.color=s
var l=n(1292)
e.graphic=l
var u=n(1293)
e.number=u
var h=n(1297)
e.format=h
var c=n(1328)
c.throttle,e.throttle=c.throttle
var f=n(1430)
e.helper=f
var d=n(1436)
e.parseGeoJSON=d
var p=n(1359)
e.List=p
var g=n(1298)
e.Model=g
var m=n(1365)
e.Axis=m
var v=n(1294)
e.env=v
var y=d,x={}
o.each(["map","each","filter","indexOf","inherits","reduce","filter","bind","curry","isArray","isString","isObject","isFunction","extend","defaults","clone","merge"],function(t){x[t]=o[t]}),e.parseGeoJson=y,e.util=x},1430:function(t,e,n){var i=n(1288),r=n(1358),a=n(1306),o=n(1364),s=n(1298),l=n(1304)
l.getLayoutRect,e.getLayoutRect=l.getLayoutRect
var u=n(1305),h=u.enableDataStack,c=u.isDimensionStacked,f=u.getStackedDimension,d=n(1361)
e.completeDimensions=d
var p=n(1360)
e.createDimensions=p
var g=n(1331)
e.createSymbol=g.createSymbol
var m={isDimensionStacked:c,enableDataStack:h,getStackedDimension:f}
e.createList=function(t){return r(t.getSource(),t)},e.dataStack=m,e.createScale=function(t,e){var n=e
s.isInstance(e)||(n=new s(e),i.mixin(n,o))
var r=a.createScaleByModel(n)
return r.setExtent(t[0],t[1]),a.niceScaleExtent(r,n),r},e.mixinAxisModelCommonMethods=function(t){i.mixin(t,o)}},1431:function(t,e){function n(t){return t}function i(t,e,i,r,a){this._old=t,this._new=e,this._oldKeyGetter=i||n,this._newKeyGetter=r||n,this.context=a}function r(t,e,n,i,r){for(var a=0;a<t.length;a++){var o="_ec_"+r[i](t[a],a),s=e[o]
null==s?(n.push(o),e[o]=a):(s.length||(e[o]=s=[s]),s.push(a))}}i.prototype={constructor:i,add:function(t){return this._add=t,this},update:function(t){return this._update=t,this},remove:function(t){return this._remove=t,this},execute:function(){var t=this._old,e=this._new,n={},i=[],a=[]
for(r(t,{},i,"_oldKeyGetter",this),r(e,n,a,"_newKeyGetter",this),o=0;o<t.length;o++)null!=(l=n[s=i[o]])?((h=l.length)?(1===h&&(n[s]=null),l=l.unshift()):n[s]=null,this._update&&this._update(l,o)):this._remove&&this._remove(o)
for(var o=0;o<a.length;o++){var s=a[o]
if(n.hasOwnProperty(s)){var l
if(null==(l=n[s]))continue
if(l.length)for(var u=0,h=l.length;u<h;u++)this._add&&this._add(l[u])
else this._add&&this._add(l)}}}}
var a=i
t.exports=a},1432:function(t,e,n){var i=n(1288),r=n(1319),a=n(1362),o=r.prototype,s=r.extend({type:"ordinal",init:function(t,e){t&&!i.isArray(t)||(t=new a({categories:t})),this._ordinalMeta=t,this._extent=e||[0,t.categories.length-1]},parse:function(t){return"string"==typeof t?this._ordinalMeta.getOrdinal(t):Math.round(t)},contain:function(t){return t=this.parse(t),o.contain.call(this,t)&&null!=this._ordinalMeta.categories[t]},normalize:function(t){return o.normalize.call(this,this.parse(t))},scale:function(t){return Math.round(o.scale.call(this,t))},getTicks:function(){for(var t=[],e=this._extent,n=e[0];n<=e[1];)t.push(n),n++
return t},getLabel:function(t){if(!this.isBlank())return this._ordinalMeta.categories[t]},count:function(){return this._extent[1]-this._extent[0]+1},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},getOrdinalMeta:function(){return this._ordinalMeta},niceTicks:i.noop,niceExtent:i.noop})
s.create=function(){return new s}
var l=s
t.exports=l},1433:function(t,e,n){var i=n(1288),r=n(1293).parsePercent,a=n(1305).isDimensionStacked,o=n(1327),s="__ec_stack_",l="undefined"!=typeof Float32Array?Float32Array:Array
function u(t){return t.get("stack")||s+t.seriesIndex}function h(t){return t.dim+t.index}function c(t,e){var n=[]
return e.eachSeriesByType(t,function(t){m(t)&&!v(t)&&n.push(t)}),n}function f(t){var e=[]
return i.each(t,function(t){var n=t.getData(),i=t.coordinateSystem.getBaseAxis(),a=i.getExtent(),o="category"===i.type?i.getBandWidth():Math.abs(a[1]-a[0])/n.count(),s=r(t.get("barWidth"),o),l=r(t.get("barMaxWidth"),o),c=t.get("barGap"),f=t.get("barCategoryGap")
e.push({bandWidth:o,barWidth:s,barMaxWidth:l,barGap:c,barCategoryGap:f,axisKey:h(i),stackId:u(t)})}),d(e)}function d(t){var e={}
i.each(t,function(t,n){var i=t.axisKey,r=t.bandWidth,a=e[i]||{bandWidth:r,remainedWidth:r,autoWidthCount:0,categoryGap:"20%",gap:"30%",stacks:{}},o=a.stacks
e[i]=a
var s=t.stackId
o[s]||a.autoWidthCount++,o[s]=o[s]||{width:0,maxWidth:0}
var l=t.barWidth
l&&!o[s].width&&(o[s].width=l,l=Math.min(a.remainedWidth,l),a.remainedWidth-=l)
var u=t.barMaxWidth
u&&(o[s].maxWidth=u)
var h=t.barGap
null!=h&&(a.gap=h)
var c=t.barCategoryGap
null!=c&&(a.categoryGap=c)})
var n={}
return i.each(e,function(t,e){n[e]={}
var a=t.stacks,o=t.bandWidth,s=r(t.categoryGap,o),l=r(t.gap,1),u=t.remainedWidth,h=t.autoWidthCount,c=(u-s)/(h+(h-1)*l)
c=Math.max(c,0),i.each(a,function(t,e){var n=t.maxWidth
n&&n<c&&(n=Math.min(n,u),t.width&&(n=Math.min(n,t.width)),u-=n,t.width=n,h--)}),c=(u-s)/(h+(h-1)*l),c=Math.max(c,0)
var f,d=0
i.each(a,function(t,e){t.width||(t.width=c),f=t,d+=t.width*(1+l)}),f&&(d-=f.width*l)
var p=-d/2
i.each(a,function(t,i){n[e][i]=n[e][i]||{offset:p,width:t.width},p+=t.width*(1+l)})}),n}function p(t,e,n){if(t&&e){var i=t[h(e)]
return null!=i&&null!=n&&(i=i[u(n)]),i}}var g={seriesType:"bar",plan:o(),reset:function(t){if(m(t)&&v(t)){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),r=n.getOtherAxis(i),a=e.mapDimension(r.dim),o=e.mapDimension(i.dim),s=r.isHorizontal(),u=s?0:1,h=p(f([t]),i,t).width
return h>.5||(h=.5),{progress:function(t,e){for(var c,f=new l(2*t.count),d=[],p=[],g=0;null!=(c=t.next());)p[u]=e.get(a,c),p[1-u]=e.get(o,c),d=n.dataToPoint(p,null,d),f[g++]=d[0],f[g++]=d[1]
e.setLayout({largePoints:f,barWidth:h,valueAxisStart:y(i,r,!1),valueAxisHorizontal:s})}}}}}
function m(t){return t.coordinateSystem&&"cartesian2d"===t.coordinateSystem.type}function v(t){return t.pipelineContext&&t.pipelineContext.large}function y(t,e,n){return i.indexOf(t.getAxesOnZeroOf(),e)>=0||n?e.toGlobalCoord(e.dataToCoord(0)):e.getGlobalExtent()[0]}e.getLayoutOnAxis=function(t){var e=[],n=t.axis
if("category"===n.type){for(var r=n.getBandWidth(),a=0;a<t.count;a++)e.push(i.defaults({bandWidth:r,axisKey:"axis0",stackId:s+a},t))
var o=d(e),l=[]
for(a=0;a<t.count;a++){var u=o.axis0[s+a]
u.offsetCenter=u.offset+u.width/2,l.push(u)}return l}},e.prepareLayoutBarSeries=c,e.makeColumnLayout=f,e.retrieveColumnLayout=p,e.layout=function(t,e){var n=c(t,e),r=f(n),o={},s={}
i.each(n,function(t){var e=t.getData(),n=t.coordinateSystem,i=n.getBaseAxis(),l=u(t),c=r[h(i)][l],f=c.offset,d=c.width,p=n.getOtherAxis(i),g=t.get("barMinHeight")||0
o[l]=o[l]||[],s[l]=s[l]||[],e.setLayout({offset:f,size:d})
for(var m=e.mapDimension(p.dim),v=e.mapDimension(i.dim),x=a(e,m),_=p.isHorizontal(),b=y(i,p,x),w=0,S=e.count();w<S;w++){var M=e.get(m,w),T=e.get(v,w)
if(!isNaN(M)){var k,D,C,A,I,O=M>=0?"p":"n",P=b
x&&(o[l][T]||(o[l][T]={p:b,n:b}),P=o[l][T][O]),_?(k=P,D=(I=n.dataToPoint([M,T]))[1]+f,C=I[0]-b,A=d,Math.abs(C)<g&&(C=(C<0?-1:1)*g),x&&(o[l][T][O]+=C)):(k=(I=n.dataToPoint([T,M]))[0]+f,D=P,C=d,A=I[1]-b,Math.abs(A)<g&&(A=(A<=0?-1:1)*g),x&&(o[l][T][O]+=A)),e.setItemLayout(w,{x:k,y:D,width:C,height:A})}}},this)},e.largeLayout=g},1434:function(t,e,n){var i=n(1288),r=n(1293),a=n(1297),o=n(1363),s=n(1330),l=s.prototype,u=Math.ceil,h=Math.floor,c=s.extend({type:"time",getLabel:function(t){var e=this._stepLvl,n=new Date(t)
return a.formatTime(e[0],n,this.getSetting("useUTC"))},niceExtent:function(t){var e=this._extent
if(e[0]===e[1]&&(e[0]-=864e5,e[1]+=864e5),e[1]===-1/0&&e[0]===1/0){var n=new Date
e[1]=+new Date(n.getFullYear(),n.getMonth(),n.getDate()),e[0]=e[1]-864e5}this.niceTicks(t.splitNumber,t.minInterval,t.maxInterval)
var i=this._interval
t.fixMin||(e[0]=r.round(h(e[0]/i)*i)),t.fixMax||(e[1]=r.round(u(e[1]/i)*i))},niceTicks:function(t,e,n){t=t||10
var i=this._extent,a=i[1]-i[0],s=a/t
null!=e&&s<e&&(s=e),null!=n&&s>n&&(s=n)
var l=f.length,c=function(t,e,n,i){for(;n<i;){var r=n+i>>>1
t[r][1]<e?n=r+1:i=r}return n}(f,s,0,l),d=f[Math.min(c,l-1)],p=d[1]
if("year"===d[0]){var g=a/p
p*=r.nice(g/t,!0)}var m=this.getSetting("useUTC")?0:60*new Date(+i[0]||+i[1]).getTimezoneOffset()*1e3,v=[Math.round(u((i[0]-m)/p)*p+m),Math.round(h((i[1]-m)/p)*p+m)]
o.fixExtent(v,i),this._stepLvl=d,this._interval=p,this._niceExtent=v},parse:function(t){return+r.parseDate(t)}})
i.each(["contain","normalize"],function(t){c.prototype[t]=function(e){return l[t].call(this,this.parse(e))}})
var f=[["hh:mm:ss",1e3],["hh:mm:ss",5e3],["hh:mm:ss",1e4],["hh:mm:ss",15e3],["hh:mm:ss",3e4],["hh:mm\nMM-dd",6e4],["hh:mm\nMM-dd",3e5],["hh:mm\nMM-dd",6e5],["hh:mm\nMM-dd",9e5],["hh:mm\nMM-dd",18e5],["hh:mm\nMM-dd",36e5],["hh:mm\nMM-dd",72e5],["hh:mm\nMM-dd",216e5],["hh:mm\nMM-dd",432e5],["MM-dd\nyyyy",864e5],["MM-dd\nyyyy",1728e5],["MM-dd\nyyyy",2592e5],["MM-dd\nyyyy",3456e5],["MM-dd\nyyyy",432e6],["MM-dd\nyyyy",5184e5],["week",6048e5],["MM-dd\nyyyy",864e6],["week",12096e5],["week",18144e5],["month",26784e5],["week",36288e5],["month",53568e5],["week",36288e5],["quarter",8208e6],["month",107136e5],["month",13392e6],["half-year",16416e6],["month",214272e5],["month",26784e6],["year",32832e6]]
c.create=function(t){return new c({useUTC:t.ecModel.get("useUTC")})}
var d=c
t.exports=d},1435:function(t,e,n){var i=n(1288),r=n(1319),a=n(1293),o=n(1330),s=r.prototype,l=o.prototype,u=a.getPrecisionSafe,h=a.round,c=Math.floor,f=Math.ceil,d=Math.pow,p=Math.log,g=r.extend({type:"log",base:10,$constructor:function(){r.apply(this,arguments),this._originalScale=new o},getTicks:function(){var t=this._originalScale,e=this._extent,n=t.getExtent()
return i.map(l.getTicks.call(this),function(i){var r=a.round(d(this.base,i))
return r=i===e[0]&&t.__fixMin?m(r,n[0]):r,i===e[1]&&t.__fixMax?m(r,n[1]):r},this)},getLabel:l.getLabel,scale:function(t){return t=s.scale.call(this,t),d(this.base,t)},setExtent:function(t,e){var n=this.base
t=p(t)/p(n),e=p(e)/p(n),l.setExtent.call(this,t,e)},getExtent:function(){var t=this.base,e=s.getExtent.call(this)
e[0]=d(t,e[0]),e[1]=d(t,e[1])
var n=this._originalScale,i=n.getExtent()
return n.__fixMin&&(e[0]=m(e[0],i[0])),n.__fixMax&&(e[1]=m(e[1],i[1])),e},unionExtent:function(t){this._originalScale.unionExtent(t)
var e=this.base
t[0]=p(t[0])/p(e),t[1]=p(t[1])/p(e),s.unionExtent.call(this,t)},unionExtentFromData:function(t,e){this.unionExtent(t.getApproximateExtent(e))},niceTicks:function(t){t=t||10
var e=this._extent,n=e[1]-e[0]
if(!(n===1/0||n<=0)){var i=a.quantity(n)
for(t/n*i<=.5&&(i*=10);!isNaN(i)&&Math.abs(i)<1&&Math.abs(i)>0;)i*=10
var r=[a.round(f(e[0]/i)*i),a.round(c(e[1]/i)*i)]
this._interval=i,this._niceExtent=r}},niceExtent:function(t){l.niceExtent.call(this,t)
var e=this._originalScale
e.__fixMin=t.fixMin,e.__fixMax=t.fixMax}})
function m(t,e){return h(t,u(e))}i.each(["contain","normalize"],function(t){g.prototype[t]=function(e){return e=p(e)/p(this.base),s[t].call(this,e)}}),g.create=function(){return new g}
var v=g
t.exports=v},1436:function(t,e,n){var i=n(1288),r=n(1437)
function a(t,e,n){for(var i=[],r=e[0],a=e[1],o=0;o<t.length;o+=2){var s=t.charCodeAt(o)-64,l=t.charCodeAt(o+1)-64
s=s>>1^-(1&s),l=l>>1^-(1&l),r=s+=r,a=l+=a,i.push([s/n,l/n])}return i}t.exports=function(t){return function(t){if(!t.UTF8Encoding)return t
var e=t.UTF8Scale
null==e&&(e=1024)
for(var n=t.features,i=0;i<n.length;i++)for(var r=n[i].geometry,o=r.coordinates,s=r.encodeOffsets,l=0;l<o.length;l++){var u=o[l]
if("Polygon"===r.type)o[l]=a(u,s[l],e)
else if("MultiPolygon"===r.type)for(var h=0;h<u.length;h++){var c=u[h]
u[h]=a(c,s[l][h],e)}}t.UTF8Encoding=!1}(t),i.map(i.filter(t.features,function(t){return t.geometry&&t.properties&&t.geometry.coordinates.length>0}),function(t){var e=t.properties,n=t.geometry,a=n.coordinates,o=[]
"Polygon"===n.type&&o.push({type:"polygon",exterior:a[0],interiors:a.slice(1)}),"MultiPolygon"===n.type&&i.each(a,function(t){t[0]&&o.push({type:"polygon",exterior:t[0],interiors:t.slice(1)})})
var s=new r(e.name,o,e.cp)
return s.properties=e,s})}},1437:function(t,e,n){var i=n(1296),r=n(1347),a=n(1291),o=n(1438)
function s(t,e,n){if(this.name=t,this.geometries=e,n)n=[n[0],n[1]]
else{var i=this.getBoundingRect()
n=[i.x+i.width/2,i.y+i.height/2]}this.center=n}s.prototype={constructor:s,properties:null,getBoundingRect:function(){var t=this._rect
if(t)return t
for(var e=Number.MAX_VALUE,n=[e,e],o=[-e,-e],s=[],l=[],u=this.geometries,h=0;h<u.length;h++)if("polygon"===u[h].type){var c=u[h].exterior
r.fromPoints(c,s,l),a.min(n,n,s),a.max(o,o,l)}return 0===h&&(n[0]=n[1]=o[0]=o[1]=0),this._rect=new i(n[0],n[1],o[0]-n[0],o[1]-n[1])},contain:function(t){var e=this.getBoundingRect(),n=this.geometries
if(!e.contain(t[0],t[1]))return!1
t:for(var i=0,r=n.length;i<r;i++)if("polygon"===n[i].type){var a=n[i].exterior,s=n[i].interiors
if(o.contain(a,t[0],t[1])){for(var l=0;l<(s?s.length:0);l++)if(o.contain(s[l]))continue t
return!0}}return!1},transformTo:function(t,e,n,r){var o=this.getBoundingRect(),s=o.width/o.height
n?r||(r=n/s):n=s*r
for(var l=new i(t,e,n,r),u=o.calculateTransform(l),h=this.geometries,c=0;c<h.length;c++)if("polygon"===h[c].type){for(var f=h[c].exterior,d=h[c].interiors,p=0;p<f.length;p++)a.applyTransform(f[p],f[p],u)
for(var g=0;g<(d?d.length:0);g++)for(p=0;p<d[g].length;p++)a.applyTransform(d[g][p],d[g][p],u)}(o=this._rect).copy(l),this.center=[o.x+o.width/2,o.y+o.height/2]}}
var l=s
t.exports=l},1438:function(t,e,n){var i=n(1349),r=1e-8
function a(t,e){return Math.abs(t-e)<r}e.contain=function(t,e,n){var r=0,o=t[0]
if(!o)return!1
for(var s=1;s<t.length;s++){var l=t[s]
r+=i(o[0],o[1],l[0],l[1],e,n),o=l}var u=t[0]
return a(o[0],u[0])&&a(o[1],u[1])||(r+=i(o[0],o[1],u[0],u[1],e,n)),0!==r}},1439:function(t,e,n){var i=n(1288),r=n(1302),a=n(1289).makeInner,o=n(1306).makeLabelFormatter,s=a()
function l(t,e){var n,r=u(t,"labels"),a=p(e)
return h(r,a)||c(r,a,{labels:i.isFunction(a)?d(t,a):f(t,n="auto"===a?function(t){var e=s(t).autoInterval
return null!=e?e:s(t).autoInterval=t.calculateCategoryInterval()}(t):a),labelCategoryInterval:n})}function u(t,e){return s(t)[e]||(s(t)[e]=[])}function h(t,e){for(var n=0;n<t.length;n++)if(t[n].key===e)return t[n].value}function c(t,e,n){return t.push({key:e,value:n}),n}function f(t,e,n){var i=o(t),r=t.scale,a=r.getExtent(),s=t.getLabelModel(),l=[],u=Math.max((e||0)+1,1),h=a[0],c=r.count()
0!==h&&u>1&&c/u>2&&(h=Math.round(Math.ceil(h/u)*u))
var f=s.get("showMinLabel"),d=s.get("showMaxLabel")
f&&h!==a[0]&&g(a[0])
for(var p=h;p<=a[1];p+=u)g(p)
function g(t){l.push(n?t:{formattedLabel:i(t),rawLabel:r.getLabel(t),tickValue:t})}return d&&p!==a[1]&&g(a[1]),l}function d(t,e,n){var r=t.scale,a=o(t),s=[]
return i.each(r.getTicks(),function(t){var i=r.getLabel(t)
e(t,i)&&s.push(n?t:{formattedLabel:a(t),rawLabel:i,tickValue:t})}),s}function p(t){var e=t.get("interval")
return null==e?"auto":e}e.createAxisLabels=function(t){return"category"===t.type?function(t){var e=t.getLabelModel(),n=l(t,e)
return!e.get("show")||t.scale.isBlank()?{labels:[],labelCategoryInterval:n.labelCategoryInterval}:n}(t):function(t){var e=t.scale.getTicks(),n=o(t)
return{labels:i.map(e,function(e,i){return{formattedLabel:n(e,i),rawLabel:t.scale.getLabel(e),tickValue:e}})}}(t)},e.createAxisTicks=function(t,e){return"category"===t.type?function(t,e){var n,r,a=u(t,"ticks"),o=p(e),s=h(a,o)
if(s)return s
if(e.get("show")&&!t.scale.isBlank()||(n=[]),i.isFunction(o))n=d(t,o,!0)
else if("auto"===o){var g=l(t,t.getLabelModel())
r=g.labelCategoryInterval,n=i.map(g.labels,function(t){return t.tickValue})}else n=f(t,r=o,!0)
return c(a,o,{ticks:n,tickCategoryInterval:r})}(t,e):{ticks:t.scale.getTicks()}},e.calculateCategoryInterval=function(t){var e=function(t){var e=t.getLabelModel()
return{axisRotate:t.getRotate?t.getRotate():t.isHorizontal&&!t.isHorizontal()?90:0,labelRotate:e.get("rotate")||0,font:e.getFont()}}(t),n=o(t),i=(e.axisRotate-e.labelRotate)/180*Math.PI,a=t.scale,l=a.getExtent(),u=a.count()
if(l[1]-l[0]<1)return 0
var h=1
u>40&&(h=Math.max(1,Math.floor(u/40)))
for(var c=l[0],f=t.dataToCoord(c+1)-t.dataToCoord(c),d=Math.abs(f*Math.cos(i)),p=Math.abs(f*Math.sin(i)),g=0,m=0;c<=l[1];c+=h){var v,y,x=r.getBoundingRect(n(c),e.font,"center","top")
v=1.3*x.width,y=1.3*x.height,g=Math.max(g,v,7),m=Math.max(m,y,7)}var _=g/d,b=m/p
isNaN(_)&&(_=1/0),isNaN(b)&&(b=1/0)
var w=Math.max(0,Math.floor(Math.min(_,b))),S=s(t.model),M=S.lastAutoInterval,T=S.lastTickCount
return null!=M&&null!=T&&Math.abs(M-w)<=1&&Math.abs(T-u)<=1&&M>w?w=M:(S.lastTickCount=u,S.lastAutoInterval=w),w}}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[1],{1320:function(t,e,n){var i=n(1288),r=n(1298),a=i.each,o=i.curry
function s(t,e){return"all"===t||i.isArray(t)&&i.indexOf(t,e)>=0||t===e}function l(t){var e=(t.ecModel.getComponent("axisPointer")||{}).coordSysAxesInfo
return e&&e.axesInfo[h(t)]}function u(t){return!!t.get("handle.show")}function h(t){return t.type+"||"+t.id}e.collect=function(t,e){var n={axesInfo:{},seriesInvolved:!1,coordSysAxesInfo:{},coordSysMap:{}}
return function(t,e,n){var l=e.getComponent("tooltip"),c=e.getComponent("axisPointer"),f=c.get("link",!0)||[],d=[]
a(n.getCoordinateSystems(),function(n){if(n.axisPointerEnabled){var p=h(n.model),g=t.coordSysAxesInfo[p]={}
t.coordSysMap[p]=n
var m=n.model.getModel("tooltip",l)
if(a(n.getAxes(),o(_,!1,null)),n.getTooltipAxes&&l&&m.get("show")){var v="axis"===m.get("trigger"),y="cross"===m.get("axisPointer.type"),x=n.getTooltipAxes(m.get("axisPointer.axis"));(v||y)&&a(x.baseAxes,o(_,!y||"cross",v)),y&&a(x.otherAxes,o(_,"cross",!1))}}function _(o,l,p){var v=p.model.getModel("axisPointer",c),y=v.get("show")
if(y&&("auto"!==y||o||u(v))){null==l&&(l=v.get("triggerTooltip"))
var x=(v=o?function(t,e,n,o,s,l){var u=m.getModel("axisPointer"),h={}
a(["type","snap","lineStyle","shadowStyle","label","animation","animationDurationUpdate","animationEasingUpdate","z"],function(t){h[t]=i.clone(u.get(t))}),h.snap="category"!==t.type&&!!l,"cross"===u.get("type")&&(h.type="line")
var c=h.label||(h.label={})
if(null==c.show&&(c.show=!1),"cross"===s){var f=u.get("label.show")
if(c.show=null==f||f,!l){var d=h.lineStyle=u.get("crossStyle")
d&&i.defaults(c,d.textStyle)}}return t.model.getModel("axisPointer",new r(h,n,o))}(p,0,c,e,o,l):v).get("snap"),_=h(p.model),b=l||x||"category"===p.type,w=t.axesInfo[_]={key:_,axis:p,coordSys:n,axisPointerModel:v,triggerTooltip:l,involveSeries:b,snap:x,useHandle:u(v),seriesModels:[]}
g[_]=w,t.seriesInvolved|=b
var S=function(t,e){for(var n=e.model,i=e.dim,r=0;r<t.length;r++){var a=t[r]||{}
if(s(a[i+"AxisId"],n.id)||s(a[i+"AxisIndex"],n.componentIndex)||s(a[i+"AxisName"],n.name))return r}}(f,p)
if(null!=S){var M=d[S]||(d[S]={axesInfo:{}})
M.axesInfo[_]=w,M.mapper=f[S].mapper,w.linkGroup=M}}}})}(n,t,e),n.seriesInvolved&&function(t,e){e.eachSeries(function(e){var n=e.coordinateSystem,i=e.get("tooltip.trigger",!0),r=e.get("tooltip.show",!0)
n&&"none"!==i&&!1!==i&&"item"!==i&&!1!==r&&!1!==e.get("axisPointer.show",!0)&&a(t.coordSysAxesInfo[h(n.model)],function(t){var i=t.axis
n.getAxis(i.dim)===i&&(t.seriesModels.push(e),null==t.seriesDataCount&&(t.seriesDataCount=0),t.seriesDataCount+=e.getData().count())})},this)}(n,t),n},e.fixValue=function(t){var e=l(t)
if(e){var n=e.axisPointerModel,i=e.axis.scale,r=n.option,a=n.get("status"),o=n.get("value")
null!=o&&(o=i.parse(o))
var s=u(n)
null==a&&(r.status=s?"show":"hide")
var h=i.getExtent().slice()
h[0]>h[1]&&h.reverse(),(null==o||o>h[1])&&(o=h[1]),o<h[0]&&(o=h[0]),r.value=o,s&&(r.status=e.axis.scale.isBlank()?"hide":"show")}},e.getAxisInfo=l,e.getAxisPointerModel=function(t){var e=l(t)
return e&&e.axisPointerModel},e.makeKey=h},1369:function(t,e,n){var i=n(1288),r=i.retrieve,a=i.defaults,o=i.extend,s=i.each,l=n(1297),u=n(1292),h=n(1298),c=n(1293),f=c.isRadianAroundZero,d=c.remRadian,p=n(1331).createSymbol,g=n(1301),m=n(1291).applyTransform,v=Math.PI
function y(t){var e={componentType:t.mainType}
return e[t.mainType+"Index"]=t.componentIndex,e}var x=function(t,e){this.opt=e,this.axisModel=t,a(e,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0}),this.group=new u.Group
var n=new u.Group({position:e.position.slice(),rotation:e.rotation})
n.updateTransform(),this._transform=n.transform,this._dumbGroup=n}
x.prototype={constructor:x,hasBuilder:function(t){return!!_[t]},add:function(t){_[t].call(this)},getGroup:function(){return this.group}}
var _={axisLine:function(){var t=this.opt,e=this.axisModel
if(e.get("axisLine.show")){var n=this.axisModel.axis.getExtent(),i=this._transform,r=[n[0],0],a=[n[1],0]
i&&(m(r,r,i),m(a,a,i))
var l=o({lineCap:"round"},e.getModel("axisLine.lineStyle").getLineStyle())
this.group.add(new u.Line(u.subPixelOptimizeLine({anid:"line",shape:{x1:r[0],y1:r[1],x2:a[0],y2:a[1]},style:l,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1})))
var h=e.get("axisLine.symbol"),c=e.get("axisLine.symbolSize"),f=e.get("axisLine.symbolOffset")||0
if("number"==typeof f&&(f=[f,f]),null!=h){"string"==typeof h&&(h=[h,h]),"string"!=typeof c&&"number"!=typeof c||(c=[c,c])
var d=c[0],g=c[1]
s([{rotate:t.rotation+Math.PI/2,offset:f[0],r:0},{rotate:t.rotation-Math.PI/2,offset:f[1],r:Math.sqrt((r[0]-a[0])*(r[0]-a[0])+(r[1]-a[1])*(r[1]-a[1]))}],function(e,n){if("none"!==h[n]&&null!=h[n]){var i=p(h[n],-d/2,-g/2,d,g,l.stroke,!0),a=e.r+e.offset,o=[r[0]+a*Math.cos(t.rotation),r[1]-a*Math.sin(t.rotation)]
i.attr({rotation:e.rotate,position:o,silent:!0}),this.group.add(i)}},this)}}},axisTickLabel:function(){var t=this.axisModel,e=this.opt,n=function(t,e,n){var i=e.axis
if(e.get("axisTick.show")&&!i.scale.isBlank()){for(var r=e.getModel("axisTick"),o=r.getModel("lineStyle"),s=r.get("length"),l=i.getTicksCoords(),h=[],c=[],f=t._transform,d=[],p=0;p<l.length;p++){var g=l[p].coord
h[0]=g,h[1]=0,c[0]=g,c[1]=n.tickDirection*s,f&&(m(h,h,f),m(c,c,f))
var v=new u.Line(u.subPixelOptimizeLine({anid:"tick_"+l[p].tickValue,shape:{x1:h[0],y1:h[1],x2:c[0],y2:c[1]},style:a(o.getLineStyle(),{stroke:e.get("axisLine.lineStyle.color")}),z2:2,silent:!0}))
t.group.add(v),d.push(v)}return d}}(this,t,e)
!function(t,e,n){var i=t.get("axisLabel.showMinLabel"),r=t.get("axisLabel.showMaxLabel")
n=n||[]
var a=(e=e||[])[0],o=e[1],s=e[e.length-1],l=e[e.length-2],u=n[0],h=n[1],c=n[n.length-1],f=n[n.length-2]
!1===i?(S(a),S(u)):M(a,o)&&(i?(S(o),S(h)):(S(a),S(u))),!1===r?(S(s),S(c)):M(l,s)&&(r?(S(l),S(f)):(S(s),S(c)))}(t,function(t,e,n){var i=e.axis
if(r(n.axisLabelShow,e.get("axisLabel.show"))&&!i.scale.isBlank()){var a=e.getModel("axisLabel"),o=a.get("margin"),l=i.getViewLabels(),c=(r(n.labelRotate,a.get("rotate"))||0)*v/180,f=b(n.rotation,c,n.labelDirection),d=e.getCategories(!0),p=[],g=w(e),m=e.get("triggerEvent")
return s(l,function(r,s){var l=r.tickValue,c=r.formattedLabel,v=r.rawLabel,x=a
d&&d[l]&&d[l].textStyle&&(x=new h(d[l].textStyle,a,e.ecModel))
var _=x.getTextColor()||e.get("axisLine.lineStyle.color"),b=[i.dataToCoord(l),n.labelOffset+n.labelDirection*o],w=new u.Text({anid:"label_"+l,position:b,rotation:f.rotation,silent:g,z2:10})
u.setTextStyle(w.style,x,{text:c,textAlign:x.getShallow("align",!0)||f.textAlign,textVerticalAlign:x.getShallow("verticalAlign",!0)||x.getShallow("baseline",!0)||f.textVerticalAlign,textFill:"function"==typeof _?_("category"===i.type?v:"value"===i.type?l+"":l,s):_}),m&&(w.eventData=y(e),w.eventData.targetType="axisLabel",w.eventData.value=v),t._dumbGroup.add(w),w.updateTransform(),p.push(w),t.group.add(w),w.decomposeTransform()}),p}}(this,t,e),n)},axisName:function(){var t=this.opt,e=this.axisModel,n=r(t.axisName,e.get("name"))
if(n){var i,a,s=e.get("nameLocation"),h=t.nameDirection,c=e.getModel("nameTextStyle"),p=e.get("nameGap")||0,g=this.axisModel.axis.getExtent(),m=g[0]>g[1]?-1:1,x=["start"===s?g[0]-m*p:"end"===s?g[1]+m*p:(g[0]+g[1])/2,T(s)?t.labelOffset+h*p:0],_=e.get("nameRotate")
null!=_&&(_=_*v/180),T(s)?i=b(t.rotation,null!=_?_:t.rotation,h):(i=function(t,e,n,i){var r,a,o=d((_||0)-t.rotation),s=i[0]>i[1],l="start"===e&&!s||"start"!==e&&s
return f(o-v/2)?(a=l?"bottom":"top",r="center"):f(o-1.5*v)?(a=l?"top":"bottom",r="center"):(a="middle",r=o<1.5*v&&o>v/2?l?"left":"right":l?"right":"left"),{rotation:o,textAlign:r,textVerticalAlign:a}}(t,s,0,g),null!=(a=t.axisNameAvailableWidth)&&(a=Math.abs(a/Math.sin(i.rotation)),!isFinite(a)&&(a=null)))
var S=c.getFont(),M=e.get("nameTruncate",!0)||{},k=M.ellipsis,D=r(t.nameTruncateMaxWidth,M.maxWidth,a),C=null!=k&&null!=D?l.truncateText(n,D,S,k,{minChar:2,placeholder:M.placeholder}):n,A=e.get("tooltip",!0),I=e.mainType,O={componentType:I,name:n,$vars:["name"]}
O[I+"Index"]=e.componentIndex
var P=new u.Text({anid:"name",__fullText:n,__truncatedText:C,position:x,rotation:i.rotation,silent:w(e),z2:1,tooltip:A&&A.show?o({content:n,formatter:function(){return n},formatterParams:O},A):null})
u.setTextStyle(P.style,c,{text:C,textFont:S,textFill:c.getTextColor()||e.get("axisLine.lineStyle.color"),textAlign:i.textAlign,textVerticalAlign:i.textVerticalAlign}),e.get("triggerEvent")&&(P.eventData=y(e),P.eventData.targetType="axisName",P.eventData.name=n),this._dumbGroup.add(P),P.updateTransform(),this.group.add(P),P.decomposeTransform()}}},b=x.innerTextLayout=function(t,e,n){var i,r,a=d(e-t)
return f(a)?(r=n>0?"top":"bottom",i="center"):f(a-v)?(r=n>0?"bottom":"top",i="center"):(r="middle",i=a>0&&a<v?n>0?"right":"left":n>0?"left":"right"),{rotation:a,textAlign:i,textVerticalAlign:r}}
function w(t){var e=t.get("tooltip")
return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)}function S(t){t&&(t.ignore=!0)}function M(t,e,n){var i=t&&t.getBoundingRect().clone(),r=e&&e.getBoundingRect().clone()
if(i&&r){var a=g.identity([])
return g.rotate(a,a,-t.rotation),i.applyTransform(g.mul([],a,t.getLocalTransform())),r.applyTransform(g.mul([],a,e.getLocalTransform())),i.intersect(r)}}function T(t){return"middle"===t||"center"===t}var k=x
t.exports=k},1370:function(t,e,n){n(1290).__DEV__
var i=n(1280),r=n(1320),a=i.extendComponentView({type:"axis",_axisPointer:null,axisPointerClass:null,render:function(t,e,n,i){this.axisPointerClass&&r.fixValue(t),a.superApply(this,"render",arguments),o(this,t,e,n,i,!0)},updateAxisPointer:function(t,e,n,i,r){o(this,t,e,n,i,!1)},remove:function(t,e){var n=this._axisPointer
n&&n.remove(e),a.superApply(this,"remove",arguments)},dispose:function(t,e){s(this,e),a.superApply(this,"dispose",arguments)}})
function o(t,e,n,i,o,l){var u=a.getAxisPointerClass(t.axisPointerClass)
if(u){var h=r.getAxisPointerModel(e)
h?(t._axisPointer||(t._axisPointer=new u)).render(e,h,i,l):s(t,i)}}function s(t,e,n){var i=t._axisPointer
i&&i.dispose(e,n),t._axisPointer=null}var l=[]
a.registerAxisPointerClass=function(t,e){l[t]=e},a.getAxisPointerClass=function(t){return t&&l[t]}
var u=a
t.exports=u},1371:function(t,e,n){var i=n(1288)
e.layout=function(t,e,n){n=n||{}
var r=t.coordinateSystem,a=e.axis,o={},s=a.getAxesOnZeroOf()[0],l=a.position,u=s?"onZero":l,h=a.dim,c=r.getRect(),f=[c.x,c.x+c.width,c.y,c.y+c.height],d={left:0,right:1,top:0,bottom:1,onZero:2},p=e.get("offset")||0,g="x"===h?[f[2]-p,f[3]+p]:[f[0]-p,f[1]+p]
if(s){var m=s.toGlobalCoord(s.dataToCoord(0))
g[d.onZero]=Math.max(Math.min(m,g[1]),g[0])}o.position=["y"===h?g[d[u]]:f[0],"x"===h?g[d[u]]:f[3]],o.rotation=Math.PI/2*("x"===h?0:1),o.labelDirection=o.tickDirection=o.nameDirection={top:-1,bottom:1,left:-1,right:1}[l],o.labelOffset=s?g[d[l]]-g[d.onZero]:0,e.get("axisTick.inside")&&(o.tickDirection=-o.tickDirection),i.retrieve(n.labelInside,e.get("axisLabel.inside"))&&(o.labelDirection=-o.labelDirection)
var v=e.get("axisLabel.rotate")
return o.labelRotate="top"===u?-v:v,o.z2=1,o}}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[4],{1281:function(t,e,n){var i,r
void 0===(r="function"==typeof(i=function(t){"use strict"
var e=function(){function t(){this.VERSION="2.0.3",this.ansi_colors=[[{rgb:[0,0,0],class_name:"ansi-black"},{rgb:[187,0,0],class_name:"ansi-red"},{rgb:[0,187,0],class_name:"ansi-green"},{rgb:[187,187,0],class_name:"ansi-yellow"},{rgb:[0,0,187],class_name:"ansi-blue"},{rgb:[187,0,187],class_name:"ansi-magenta"},{rgb:[0,187,187],class_name:"ansi-cyan"},{rgb:[255,255,255],class_name:"ansi-white"}],[{rgb:[85,85,85],class_name:"ansi-bright-black"},{rgb:[255,85,85],class_name:"ansi-bright-red"},{rgb:[0,255,0],class_name:"ansi-bright-green"},{rgb:[255,255,85],class_name:"ansi-bright-yellow"},{rgb:[85,85,255],class_name:"ansi-bright-blue"},{rgb:[255,85,255],class_name:"ansi-bright-magenta"},{rgb:[85,255,255],class_name:"ansi-bright-cyan"},{rgb:[255,255,255],class_name:"ansi-bright-white"}]],this.htmlFormatter={transform:function(t,e){var n=t.text
if(0===n.length)return n
if(e._escape_for_html&&(n=e.old_escape_for_html(n)),!t.bright&&null===t.fg&&null===t.bg)return n
var i=[],r=[],a=t.fg,o=t.bg
null===a&&t.bright&&(a=e.ansi_colors[1][7]),e._use_classes?(a&&("truecolor"!==a.class_name?r.push(a.class_name+"-fg"):i.push("color:rgb("+a.rgb.join(",")+")")),o&&("truecolor"!==o.class_name?r.push(o.class_name+"-bg"):i.push("background-color:rgb("+o.rgb.join(",")+")"))):(a&&i.push("color:rgb("+a.rgb.join(",")+")"),o&&i.push("background-color:rgb("+o.rgb+")"))
var s="",l=""
return r.length&&(s=' class="'+r.join(" ")+'"'),i.length&&(l=' style="'+i.join(";")+'"'),"<span"+s+l+">"+n+"</span>"},compose:function(t,e){return t.join("")}},this.textFormatter={transform:function(t,e){return t.text},compose:function(t,e){return t.join("")}},this.setup_256_palette(),this._use_classes=!1,this._escape_for_html=!0,this.bright=!1,this.fg=this.bg=null,this._buffer=""}return Object.defineProperty(t.prototype,"use_classes",{get:function(){return this._use_classes},set:function(t){this._use_classes=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"escape_for_html",{get:function(){return this._escape_for_html},set:function(t){this._escape_for_html=t},enumerable:!0,configurable:!0}),t.prototype.setup_256_palette=function(){var t=this
this.palette_256=[],this.ansi_colors.forEach(function(e){e.forEach(function(e){t.palette_256.push(e)})})
for(var e=[0,95,135,175,215,255],n=0;n<6;++n)for(var i=0;i<6;++i)for(var r=0;r<6;++r){var a={rgb:[e[n],e[i],e[r]],class_name:"truecolor"}
this.palette_256.push(a)}for(var o=8,s=0;s<24;++s,o+=10){var l={rgb:[o,o,o],class_name:"truecolor"}
this.palette_256.push(l)}},t.prototype.old_escape_for_html=function(t){return t.replace(/[&<>]/gm,function(t){return"&"===t?"&amp;":"<"===t?"&lt;":">"===t?"&gt;":void 0})},t.prototype.old_linkify=function(t){return t.replace(/(https?:\/\/[^\s]+)/gm,function(t){return'<a href="'+t+'">'+t+"</a>"})},t.prototype.detect_incomplete_ansi=function(t){return!/.*?[\x40-\x7e]/.test(t)},t.prototype.detect_incomplete_link=function(t){for(var e=!1,n=t.length-1;n>0;n--)if(/\s|\x1B/.test(t[n])){e=!0
break}if(!e)return/(https?:\/\/[^\s]+)/.test(t)?0:-1
var i=t.substr(n+1,4)
return 0===i.length?-1:0==="http".indexOf(i)?n+1:void 0},t.prototype.ansi_to=function(t,e){var n=this._buffer+t
this._buffer=""
var i=n.split(/\x1B\[/)
1===i.length&&i.push(""),this.handle_incomplete_sequences(i)
for(var r=this.with_state(i.shift()),a=new Array(i.length),o=0,s=i.length;o<s;++o)a[o]=e.transform(this.process_ansi(i[o]),this)
return r.text.length>0&&a.unshift(e.transform(r,this)),e.compose(a,this)},t.prototype.ansi_to_html=function(t){return this.ansi_to(t,this.htmlFormatter)},t.prototype.ansi_to_text=function(t){return this.ansi_to(t,this.textFormatter)},t.prototype.with_state=function(t){return{bright:this.bright,fg:this.fg,bg:this.bg,text:t}},t.prototype.handle_incomplete_sequences=function(t){var e=t[t.length-1]
e.length>0&&this.detect_incomplete_ansi(e)?(this._buffer="["+e,t.pop(),t.push("")):(""===e.slice(-1)&&(this._buffer="",console.log("raw",t),t.pop(),t.push(e.substr(0,e.length-1)),console.log(t),console.log(e)),2===t.length&&""===t[1]&&""===t[0].slice(-1)&&(this._buffer="",e=t.shift(),t.unshift(e.substr(0,e.length-1))))},t.prototype.process_ansi=function(t){this._sgr_regex||(this._sgr_regex=((i=["\n            ^                           # beginning of line\n            ([!<-?]?)             # a private-mode char (!, <, =, >, ?)\n            ([d;]*)                    # any digits or semicolons\n            ([ -/]?               # an intermediate modifier\n            [@-~])                # the command\n            ([sS]*)                   # any text following this CSI sequence\n          "]).raw=["\n            ^                           # beginning of line\n            ([!\\x3c-\\x3f]?)             # a private-mode char (!, <, =, >, ?)\n            ([\\d;]*)                    # any digits or semicolons\n            ([\\x20-\\x2f]?               # an intermediate modifier\n            [\\x40-\\x7e])                # the command\n            ([\\s\\S]*)                   # any text following this CSI sequence\n          "],function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
var i=t.raw[0].replace(/^\s+|\s+\n|\s+#[\s\S]+?\n/gm,"")
return new RegExp(i,"m")}(i)))
var e=t.match(this._sgr_regex)
if(!e)return this.with_state(t)
var n=e[4]
if(""!==e[1]||"m"!==e[3])return this.with_state(n)
for(var i,r=e[2].split(";");r.length>0;){var a=r.shift(),o=parseInt(a,10)
if(isNaN(o)||0===o)this.fg=this.bg=null,this.bright=!1
else if(1===o)this.bright=!0
else if(22===o)this.bright=!1
else if(39===o)this.fg=null
else if(49===o)this.bg=null
else if(o>=30&&o<38){var s=this.bright?1:0
this.fg=this.ansi_colors[s][o-30]}else if(o>=90&&o<98)this.fg=this.ansi_colors[1][o-90]
else if(o>=40&&o<48)this.bg=this.ansi_colors[0][o-40]
else if(o>=100&&o<108)this.bg=this.ansi_colors[1][o-100]
else if((38===o||48===o)&&r.length>0){var l=38===o,u=r.shift()
if("5"===u&&r.length>0){var h=parseInt(r.shift(),10)
h>=0&&h<=255&&(l?this.fg=this.palette_256[h]:this.bg=this.palette_256[h])}if("2"===u&&r.length>2){var c=parseInt(r.shift(),10),f=parseInt(r.shift(),10),d=parseInt(r.shift(),10)
if(c>=0&&c<=255&&f>=0&&f<=255&&d>=0&&d<=255){var p={rgb:[c,f,d],class_name:"truecolor"}
l?this.fg=p:this.bg=p}}}}return this.with_state(n)},t}()
Object.defineProperty(t,"__esModule",{value:!0}),t.default=e})?i.apply(e,[e]):i)||(t.exports=r)}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[5],{1287:function(t,e,n){var i=void 0!==typeof JSON?JSON:n(1470),r=n(1473),a=n(1474),o=n(1475)
e.quote=function(t){return r(t,function(t){return t&&"object"==typeof t?t.op.replace(/(.)/g,"\\$1"):/["\s]/.test(t)&&!/'/.test(t)?"'"+t.replace(/(['\\])/g,"\\$1")+"'":/["'\s]/.test(t)?'"'+t.replace(/(["\\$`!])/g,"\\$1")+'"':String(t).replace(/([#!"$&'()*,:;<=>?@\[\\\]^`{|}])/g,"\\$1")}).join(" ")}
for(var s="(?:"+["\\|\\|","\\&\\&",";;","\\|\\&","[&;()|<>]"].join("|")+")",l="",u=0;u<4;u++)l+=(Math.pow(16,8)*Math.random()).toString(16)
e.parse=function(t,e,n){var u=function(t,e,n){var o=new RegExp(["("+s+")",'((\\\\[\'"|&;()<> \\t]|[^\\s\'"|&;()<> \\t])+|"((\\\\"|[^"])*?)"|'+"'((\\\\'|[^'])*?)')*"].join("|"),"g"),u=a(t.match(o),Boolean),h=!1
return u?(e||(e={}),n||(n={}),r(u,function(t,r){if(!h){if(RegExp("^"+s+"$").test(t))return{op:t}
for(var a=n.escape||"\\",o=!1,c=!1,f="",d=!1,p=0,g=t.length;p<g;p++){var m=t.charAt(p)
if(d=d||!o&&("*"===m||"?"===m),c)f+=m,c=!1
else if(o)m===o?o=!1:"'"==o?f+=m:m===a?(p+=1,f+='"'===(m=t.charAt(p))||m===a||"$"===m?m:a+m):f+="$"===m?v():m
else if('"'===m||"'"===m)o=m
else{if(RegExp("^"+s+"$").test(m))return{op:t}
if(RegExp("^#$").test(m))return h=!0,f.length?[f,{comment:t.slice(p+1)+u.slice(r+1).join(" ")}]:[{comment:t.slice(p+1)+u.slice(r+1).join(" ")}]
m===a?c=!0:f+="$"===m?v():m}}return d?{op:"glob",pattern:f}:f}function v(){var n,r
if(p+=1,"{"===t.charAt(p)){if(p+=1,"}"===t.charAt(p))throw new Error("Bad substitution: "+t.substr(p-2,3))
if((n=t.indexOf("}",p))<0)throw new Error("Bad substitution: "+t.substr(p))
r=t.substr(p,n-p),p=n}else/[*@#?$!_\-]/.test(t.charAt(p))?(r=t.charAt(p),p+=1):(n=t.substr(p).match(/[^\w\d_]/))?(r=t.substr(p,n.index),p+=n.index-1):(r=t.substr(p),p=t.length)
return function(t,n,r){var a="function"==typeof e?e(r):e[r]
return void 0===a&&(a=""),"object"==typeof a?""+l+i.stringify(a)+l:""+a}(0,0,r)}}).reduce(function(t,e){return void 0===e?t:t.concat(e)},[])):[]}(t,e,n)
return"function"!=typeof e?u:o(u,function(t,e){if("object"==typeof e)return t.concat(e)
var n=e.split(RegExp("("+l+".*?"+l+")","g"))
return 1===n.length?t.concat(n[0]):t.concat(r(a(n,Boolean),function(t){return RegExp("^"+l).test(t)?i.parse(t.split(l)[1]):t}))},[])}},1470:function(t,e,n){e.parse=n(1471),e.stringify=n(1472)},1471:function(t,e){var n,i,r,a,o={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},s=function(t){throw{name:"SyntaxError",message:t,at:n,text:r}},l=function(t){return t&&t!==i&&s("Expected '"+t+"' instead of '"+i+"'"),i=r.charAt(n),n+=1,i},u=function(){var t,e=""
for("-"===i&&(e="-",l("-"));i>="0"&&i<="9";)e+=i,l()
if("."===i)for(e+=".";l()&&i>="0"&&i<="9";)e+=i
if("e"===i||"E"===i)for(e+=i,l(),"-"!==i&&"+"!==i||(e+=i,l());i>="0"&&i<="9";)e+=i,l()
if(t=+e,isFinite(t))return t
s("Bad number")},h=function(){var t,e,n,r=""
if('"'===i)for(;l();){if('"'===i)return l(),r
if("\\"===i)if(l(),"u"===i){for(n=0,e=0;e<4&&(t=parseInt(l(),16),isFinite(t));e+=1)n=16*n+t
r+=String.fromCharCode(n)}else{if("string"!=typeof o[i])break
r+=o[i]}else r+=i}s("Bad string")},c=function(){for(;i&&i<=" ";)l()}
a=function(){switch(c(),i){case"{":return function(){var t,e={}
if("{"===i){if(l("{"),c(),"}"===i)return l("}"),e
for(;i;){if(t=h(),c(),l(":"),Object.hasOwnProperty.call(e,t)&&s('Duplicate key "'+t+'"'),e[t]=a(),c(),"}"===i)return l("}"),e
l(","),c()}}s("Bad object")}()
case"[":return function(){var t=[]
if("["===i){if(l("["),c(),"]"===i)return l("]"),t
for(;i;){if(t.push(a()),c(),"]"===i)return l("]"),t
l(","),c()}}s("Bad array")}()
case'"':return h()
case"-":return u()
default:return i>="0"&&i<="9"?u():function(){switch(i){case"t":return l("t"),l("r"),l("u"),l("e"),!0
case"f":return l("f"),l("a"),l("l"),l("s"),l("e"),!1
case"n":return l("n"),l("u"),l("l"),l("l"),null}s("Unexpected '"+i+"'")}()}},t.exports=function(t,e){var o
return r=t,n=0,i=" ",o=a(),c(),i&&s("Syntax error"),"function"==typeof e?function t(n,i){var r,a,o=n[i]
if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(void 0!==(a=t(o,r))?o[r]=a:delete o[r])
return e.call(n,i,o)}({"":o},""):o}},1472:function(t,e){var n,i,r,a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"}
function s(t){return a.lastIndex=0,a.test(t)?'"'+t.replace(a,function(t){var e=o[t]
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}t.exports=function(t,e,a){var o
if(n="",i="","number"==typeof a)for(o=0;o<a;o+=1)i+=" "
else"string"==typeof a&&(i=a)
if(r=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify")
return function t(e,a){var o,l,u,h,c,f=n,d=a[e]
switch(d&&"object"==typeof d&&"function"==typeof d.toJSON&&(d=d.toJSON(e)),"function"==typeof r&&(d=r.call(a,e,d)),typeof d){case"string":return s(d)
case"number":return isFinite(d)?String(d):"null"
case"boolean":case"null":return String(d)
case"object":if(!d)return"null"
if(n+=i,c=[],"[object Array]"===Object.prototype.toString.apply(d)){for(h=d.length,o=0;o<h;o+=1)c[o]=t(o,d)||"null"
return u=0===c.length?"[]":n?"[\n"+n+c.join(",\n"+n)+"\n"+f+"]":"["+c.join(",")+"]",n=f,u}if(r&&"object"==typeof r)for(h=r.length,o=0;o<h;o+=1)"string"==typeof(l=r[o])&&(u=t(l,d))&&c.push(s(l)+(n?": ":":")+u)
else for(l in d)Object.prototype.hasOwnProperty.call(d,l)&&(u=t(l,d))&&c.push(s(l)+(n?": ":":")+u)
return u=0===c.length?"{}":n?"{\n"+n+c.join(",\n"+n)+"\n"+f+"}":"{"+c.join(",")+"}",n=f,u}}("",{"":t})}},1473:function(t,e){t.exports=function(t,e){if(t.map)return t.map(e)
for(var i=[],r=0;r<t.length;r++){var a=t[r]
n.call(t,r)&&i.push(e(a,r,t))}return i}
var n=Object.prototype.hasOwnProperty},1474:function(t,e){t.exports=function(t,e){if(t.filter)return t.filter(e)
for(var i=[],r=0;r<t.length;r++)n.call(t,r)&&e(t[r],r,t)&&i.push(t[r])
return i}
var n=Object.prototype.hasOwnProperty},1475:function(t,e){var n=Object.prototype.hasOwnProperty
t.exports=function(t,e,i){var r=arguments.length>=3
if(r&&t.reduce)return t.reduce(e,i)
if(t.reduce)return t.reduce(e)
for(var a=0;a<t.length;a++)n.call(t,a)&&(r?i=e(i,t[a],a):(i=t[a],r=!0))
return i}}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[7],{1283:function(t,e,n){var i=n(1280)
n(1440),n(1441)
var r=n(1446),a=n(1447),o=n(1448)
n(1449),i.registerVisual(r("line","circle","line")),i.registerLayout(a("line")),i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC,o("line"))},1366:function(t,e,n){var i=n(1288),r=n(1331).createSymbol,a=n(1292),o=n(1293).parsePercent,s=n(1443).getDefaultLabel
function l(t,e,n){a.Group.call(this),this.updateData(t,e,n)}var u=l.prototype,h=l.getSymbolSize=function(t,e){var n=t.getItemVisual(e,"symbolSize")
return n instanceof Array?n.slice():[+n,+n]}
function c(t){return[t[0]/2,t[1]/2]}function f(t,e){this.parent.drift(t,e)}u._createSymbol=function(t,e,n,i,a){this.removeAll()
var o=e.getItemVisual(n,"color"),s=r(t,-1,-1,2,2,o,a)
s.attr({z2:100,culling:!0,scale:c(i)}),s.drift=f,this._symbolType=t,this.add(s)},u.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(t)},u.getSymbolPath=function(){return this.childAt(0)},u.getScale=function(){return this.childAt(0).scale},u.highlight=function(){this.childAt(0).trigger("emphasis")},u.downplay=function(){this.childAt(0).trigger("normal")},u.setZ=function(t,e){var n=this.childAt(0)
n.zlevel=t,n.z=e},u.setDraggable=function(t){var e=this.childAt(0)
e.draggable=t,e.cursor=t?"move":"pointer"},u.updateData=function(t,e,n){this.silent=!1
var i=t.getItemVisual(e,"symbol")||"circle",r=t.hostModel,o=h(t,e),s=i!==this._symbolType
if(s){var l=t.getItemVisual(e,"symbolKeepAspect")
this._createSymbol(i,t,e,o,l)}else(u=this.childAt(0)).silent=!1,a.updateProps(u,{scale:c(o)},r,e)
if(this._updateCommon(t,e,o,n),s){var u=this.childAt(0),f=n&&n.fadeIn,d={scale:u.scale.slice()}
f&&(d.style={opacity:u.style.opacity}),u.scale=[0,0],f&&(u.style.opacity=0),a.initProps(u,d,r,e)}this._seriesModel=r}
var d=["itemStyle"],p=["emphasis","itemStyle"],g=["label"],m=["emphasis","label"]
u._updateCommon=function(t,e,n,r){var l=this.childAt(0),u=t.hostModel,h=t.getItemVisual(e,"color")
"image"!==l.type&&l.useStyle({strokeNoScale:!0})
var f=r&&r.itemStyle,v=r&&r.hoverItemStyle,y=r&&r.symbolRotate,x=r&&r.symbolOffset,_=r&&r.labelModel,b=r&&r.hoverLabelModel,w=r&&r.hoverAnimation,S=r&&r.cursorStyle
if(!r||t.hasItemOption){var M=r&&r.itemModel?r.itemModel:t.getItemModel(e)
f=M.getModel(d).getItemStyle(["color"]),v=M.getModel(p).getItemStyle(),y=M.getShallow("symbolRotate"),x=M.getShallow("symbolOffset"),_=M.getModel(g),b=M.getModel(m),w=M.getShallow("hoverAnimation"),S=M.getShallow("cursor")}else v=i.extend({},v)
var T=l.style
l.attr("rotation",(y||0)*Math.PI/180||0),x&&l.attr("position",[o(x[0],n[0]),o(x[1],n[1])]),S&&l.attr("cursor",S),l.setColor(h,r&&r.symbolInnerColor),l.setStyle(f)
var k=t.getItemVisual(e,"opacity")
null!=k&&(T.opacity=k)
var D=t.getItemVisual(e,"liftZ"),C=l.__z2Origin
null!=D?null==C&&(l.__z2Origin=l.z2,l.z2+=D):null!=C&&(l.z2=C,l.__z2Origin=null)
var A=r&&r.useNameLabel
a.setLabelStyle(T,v,_,b,{labelFetcher:u,labelDataIndex:e,defaultText:function(e,n){return A?t.getName(e):s(t,e)},isRectText:!0,autoColor:h}),l.off("mouseover").off("mouseout").off("emphasis").off("normal"),l.hoverStyle=v,a.setHoverStyle(l)
var I=c(n)
if(w&&u.isAnimationEnabled()){var O=function(){if(!this.incremental){var t=I[1]/I[0]
this.animateTo({scale:[Math.max(1.1*I[0],I[0]+3),Math.max(1.1*I[1],I[1]+3*t)]},400,"elasticOut")}},P=function(){this.incremental||this.animateTo({scale:I},400,"elasticOut")}
l.on("mouseover",O).on("mouseout",P).on("emphasis",O).on("normal",P)}},u.fadeOut=function(t,e){var n=this.childAt(0)
this.silent=n.silent=!0,(!e||!e.keepLabel)&&(n.style.text=null),a.updateProps(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,t)},i.inherits(l,a.Group)
var v=l
t.exports=v},1367:function(t,e,n){var i=n(1305).isDimensionStacked,r=n(1288).map
e.prepareDataCoordInfo=function(t,e,n){var a,o=t.getBaseAxis(),s=t.getOtherAxis(o),l=function(t,e){var n=0,i=s.scale.getExtent()
return"start"===e?n=i[0]:"end"===e?n=i[1]:i[0]>0?n=i[0]:i[1]<0&&(n=i[1]),n}(0,n),u=o.dim,h=s.dim,c=e.mapDimension(h),f=e.mapDimension(u),d="x"===h||"radius"===h?1:0,p=r(t.dimensions,function(t){return e.mapDimension(t)}),g=e.getCalculationInfo("stackResultDimension")
return(a|=i(e,p[0]))&&(p[0]=g),(a|=i(e,p[1]))&&(p[1]=g),{dataDimsForPoint:p,valueStart:l,valueAxisDim:h,baseAxisDim:u,stacked:!!a,valueDim:c,baseDim:f,baseDataOffset:d,stackedOverDimension:e.getCalculationInfo("stackedOverDimension")}},e.getStackedOnPoint=function(t,e,n,i){var r=NaN
t.stacked&&(r=n.get(n.getCalculationInfo("stackedOverDimension"),i)),isNaN(r)&&(r=t.valueStart)
var a=t.baseDataOffset,o=[]
return o[a]=n.get(t.baseDim,i),o[1-a]=r,e.dataToPoint(o)}},1368:function(t,e,n){var i=n(1288),r=n(1300),a=n(1455),o=n(1364),s=r.extend({type:"cartesian2dAxis",axis:null,init:function(){s.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){s.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){s.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}})
function l(t,e){return e.type||(e.data?"category":"value")}i.merge(s.prototype,o)
var u={offset:0}
a("x",s,l,u),a("y",s,l,u)
var h=s
t.exports=h},1440:function(t,e,n){n(1290).__DEV__
var i=n(1358),r=n(1355).extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(t,e){return i(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}})
t.exports=r},1441:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=n(1442),a=n(1366),o=n(1444),s=n(1292),l=n(1289),u=n(1445),h=u.Polyline,c=u.Polygon,f=n(1357),d=n(1293).round,p=n(1367),g=p.prepareDataCoordInfo,m=p.getStackedOnPoint
function v(t,e){if(t.length===e.length){for(var n=0;n<t.length;n++){var i=t[n],r=e[n]
if(i[0]!==r[0]||i[1]!==r[1])return}return!0}}function y(t){return"number"==typeof t?t:t?.5:0}function x(t){var e=t.getGlobalExtent()
if(t.onBand){var n=t.getBandWidth()/2-1,i=e[1]>e[0]?1:-1
e[0]+=i*n,e[1]-=i*n}return e}function _(t,e,n,i){return"polar"===t.type?function(t,e,n,i){var r=t.getAngleAxis(),a=t.getRadiusAxis().getExtent().slice()
a[0]>a[1]&&a.reverse()
var o=r.getExtent(),l=Math.PI/180
n&&(a[0]-=.5,a[1]+=.5)
var u=new s.Sector({shape:{cx:d(t.cx,1),cy:d(t.cy,1),r0:d(a[0],1),r:d(a[1],1),startAngle:-o[0]*l,endAngle:-o[1]*l,clockwise:r.inverse}})
return e&&(u.shape.endAngle=-o[0]*l,s.initProps(u,{shape:{endAngle:-o[1]*l}},i)),u}(t,e,n,i):function(t,e,n,i){var r=x(t.getAxis("x")),a=x(t.getAxis("y")),o=t.getBaseAxis().isHorizontal(),l=Math.min(r[0],r[1]),u=Math.min(a[0],a[1]),h=Math.max(r[0],r[1])-l,c=Math.max(a[0],a[1])-u
if(n)l-=.5,h+=.5,u-=.5,c+=.5
else{var f=i.get("lineStyle.width")||2,d=i.get("clipOverflow")?f/2:Math.max(h,c)
o?(u-=d,c+=2*d):(l-=d,h+=2*d)}var p=new s.Rect({shape:{x:l,y:u,width:h,height:c}})
return e&&(p.shape[o?"width":"height"]=0,s.initProps(p,{shape:{width:h,height:c}},i)),p}(t,e,n,i)}function b(t,e,n){for(var i=e.getBaseAxis(),r="x"===i.dim||"radius"===i.dim?0:1,a=[],o=0;o<t.length-1;o++){var s=t[o+1],l=t[o]
a.push(l)
var u=[]
switch(n){case"end":u[r]=s[r],u[1-r]=l[1-r],a.push(u)
break
case"middle":var h=(l[r]+s[r])/2,c=[]
u[r]=c[r]=h,u[1-r]=l[1-r],c[1-r]=s[1-r],a.push(u),a.push(c)
break
default:u[r]=l[r],u[1-r]=s[1-r],a.push(u)}}return t[o]&&a.push(t[o]),a}function w(t,e,n){var r=t.get("showAllSymbol"),o="auto"===r
if(!r||o){var s=n.getAxesByScale("ordinal")[0]
if(s&&(!o||!function(t,e){var n=t.getExtent(),i=Math.abs(n[1]-n[0])/t.scale.count()
isNaN(i)&&(i=0)
for(var r=e.count(),o=Math.max(1,Math.round(r/5)),s=0;s<r;s+=o)if(1.5*a.getSymbolSize(e,s)[t.isHorizontal()?1:0]>i)return!1
return!0}(s,e))){var l=e.mapDimension(s.dim),u={}
return i.each(s.getViewLabels(),function(t){u[t.tickValue]=1}),function(t){return!u.hasOwnProperty(e.get(l,t))}}}}var S=f.extend({type:"line",init:function(){var t=new s.Group,e=new r
this.group.add(e.group),this._symbolDraw=e,this._lineGroup=t},render:function(t,e,n){var r=t.coordinateSystem,a=this.group,o=t.getData(),l=t.getModel("lineStyle"),u=t.getModel("areaStyle"),h=o.mapArray(o.getItemLayout),c="polar"===r.type,f=this._coordSys,d=this._symbolDraw,p=this._polyline,x=this._polygon,S=this._lineGroup,M=t.get("animation"),T=!u.isEmpty(),k=u.get("origin"),D=function(t,e,n){if(!n.valueDim)return[]
for(var i=[],r=0,a=e.count();r<a;r++)i.push(m(n,t,e,r))
return i}(r,o,g(r,o,k)),C=t.get("showSymbol"),A=C&&!c&&w(t,o,r),I=this._data
I&&I.eachItemGraphicEl(function(t,e){t.__temp&&(a.remove(t),I.setItemGraphicEl(e,null))}),C||d.remove(),a.add(S)
var O=!c&&t.get("step")
p&&f.type===r.type&&O===this._step?(T&&!x?x=this._newPolygon(h,D,r,M):x&&!T&&(S.remove(x),x=this._polygon=null),S.setClipPath(_(r,!1,!1,t)),C&&d.updateData(o,{isIgnore:A,clipShape:_(r,!1,!0,t)}),o.eachItemGraphicEl(function(t){t.stopAnimation(!0)}),v(this._stackedOnPoints,D)&&v(this._points,h)||(M?this._updateAnimation(o,D,r,n,O,k):(O&&(h=b(h,r,O),D=b(D,r,O)),p.setShape({points:h}),x&&x.setShape({points:h,stackedOnPoints:D})))):(C&&d.updateData(o,{isIgnore:A,clipShape:_(r,!1,!0,t)}),O&&(h=b(h,r,O),D=b(D,r,O)),p=this._newPolyline(h,r,M),T&&(x=this._newPolygon(h,D,r,M)),S.setClipPath(_(r,!0,!1,t)))
var P=function(t,e){var n=t.getVisual("visualMeta")
if(n&&n.length&&t.count()&&"cartesian2d"===e.type){for(var r,a,o=n.length-1;o>=0;o--){var l=n[o].dimension,u=t.dimensions[l],h=t.getDimensionInfo(u)
if("x"===(r=h&&h.coordDim)||"y"===r){a=n[o]
break}}if(a){var c=e.getAxis(r),f=i.map(a.stops,function(t){return{coord:c.toGlobalCoord(c.dataToCoord(t.value)),color:t.color}}),d=f.length,p=a.outerColors.slice()
d&&f[0].coord>f[d-1].coord&&(f.reverse(),p.reverse())
var g=f[0].coord-10,m=f[d-1].coord+10,v=m-g
if(v<.001)return"transparent"
i.each(f,function(t){t.offset=(t.coord-g)/v}),f.push({offset:d?f[d-1].offset:.5,color:p[1]||"transparent"}),f.unshift({offset:d?f[0].offset:.5,color:p[0]||"transparent"})
var y=new s.LinearGradient(0,0,0,0,f,!0)
return y[r]=g,y[r+"2"]=m,y}}}(o,r)||o.getVisual("color")
p.useStyle(i.defaults(l.getLineStyle(),{fill:"none",stroke:P,lineJoin:"bevel"}))
var L=t.get("smooth")
if(L=y(t.get("smooth")),p.setShape({smooth:L,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")}),x){var E=o.getCalculationInfo("stackedOnSeries"),R=0
x.useStyle(i.defaults(u.getAreaStyle(),{fill:P,opacity:.7,lineJoin:"bevel"})),E&&(R=y(E.get("smooth"))),x.setShape({smooth:L,stackedOnSmooth:R,smoothMonotone:t.get("smoothMonotone"),connectNulls:t.get("connectNulls")})}this._data=o,this._coordSys=r,this._stackedOnPoints=D,this._points=h,this._step=O,this._valueOrigin=k},dispose:function(){},highlight:function(t,e,n,i){var r=t.getData(),o=l.queryDataIndex(r,i)
if(!(o instanceof Array)&&null!=o&&o>=0){var s=r.getItemGraphicEl(o)
if(!s){var u=r.getItemLayout(o)
if(!u)return;(s=new a(r,o)).position=u,s.setZ(t.get("zlevel"),t.get("z")),s.ignore=isNaN(u[0])||isNaN(u[1]),s.__temp=!0,r.setItemGraphicEl(o,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else f.prototype.highlight.call(this,t,e,n,i)},downplay:function(t,e,n,i){var r=t.getData(),a=l.queryDataIndex(r,i)
if(null!=a&&a>=0){var o=r.getItemGraphicEl(a)
o&&(o.__temp?(r.setItemGraphicEl(a,null),this.group.remove(o)):o.downplay())}else f.prototype.downplay.call(this,t,e,n,i)},_newPolyline:function(t){var e=this._polyline
return e&&this._lineGroup.remove(e),e=new h({shape:{points:t},silent:!0,z2:10}),this._lineGroup.add(e),this._polyline=e,e},_newPolygon:function(t,e){var n=this._polygon
return n&&this._lineGroup.remove(n),n=new c({shape:{points:t,stackedOnPoints:e},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(t,e,n,i,r,a){var l=this._polyline,u=this._polygon,h=t.hostModel,c=o(this._data,t,this._stackedOnPoints,e,this._coordSys,n,this._valueOrigin,a),f=c.current,d=c.stackedOnCurrent,p=c.next,g=c.stackedOnNext
r&&(f=b(c.current,n,r),d=b(c.stackedOnCurrent,n,r),p=b(c.next,n,r),g=b(c.stackedOnNext,n,r)),l.shape.__points=c.current,l.shape.points=f,s.updateProps(l,{shape:{points:p}},h),u&&(u.setShape({points:f,stackedOnPoints:d}),s.updateProps(u,{shape:{points:p,stackedOnPoints:g}},h))
for(var m=[],v=c.status,y=0;y<v.length;y++)if("="===v[y].cmd){var x=t.getItemGraphicEl(v[y].idx1)
x&&m.push({el:x,ptIdx:y})}l.animators&&l.animators.length&&l.animators[0].during(function(){for(var t=0;t<m.length;t++)m[t].el.attr("position",l.shape.__points[m[t].ptIdx])})},remove:function(t){var e=this.group,n=this._data
this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(t,i){t.__temp&&(e.remove(t),n.setItemGraphicEl(i,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}})
t.exports=S},1442:function(t,e,n){var i=n(1292),r=n(1366),a=n(1288).isObject
function o(t){this.group=new i.Group,this._symbolCtor=t||r}var s=o.prototype
function l(t,e,n,i){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(i.isIgnore&&i.isIgnore(n))&&!(i.clipShape&&!i.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function u(t){return null==t||a(t)||(t={isIgnore:t}),t||{}}function h(t){var e=t.hostModel
return{itemStyle:e.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:e.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:e.get("symbolRotate"),symbolOffset:e.get("symbolOffset"),hoverAnimation:e.get("hoverAnimation"),labelModel:e.getModel("label"),hoverLabelModel:e.getModel("emphasis.label"),cursorStyle:e.get("cursor")}}s.updateData=function(t,e){e=u(e)
var n=this.group,r=t.hostModel,a=this._data,o=this._symbolCtor,s=h(t)
a||n.removeAll(),t.diff(a).add(function(i){var r=t.getItemLayout(i)
if(l(t,r,i,e)){var a=new o(t,i,s)
a.attr("position",r),t.setItemGraphicEl(i,a),n.add(a)}}).update(function(u,h){var c=a.getItemGraphicEl(h),f=t.getItemLayout(u)
l(t,f,u,e)?(c?(c.updateData(t,u,s),i.updateProps(c,{position:f},r)):(c=new o(t,u)).attr("position",f),n.add(c),t.setItemGraphicEl(u,c)):n.remove(c)}).remove(function(t){var e=a.getItemGraphicEl(t)
e&&e.fadeOut(function(){n.remove(e)})}).execute(),this._data=t},s.isPersistent=function(){return!0},s.updateLayout=function(){var t=this._data
t&&t.eachItemGraphicEl(function(e,n){var i=t.getItemLayout(n)
e.attr("position",i)})},s.incrementalPrepareUpdate=function(t){this._seriesScope=h(t),this._data=null,this.group.removeAll()},s.incrementalUpdate=function(t,e,n){function i(t){t.isGroup||(t.incremental=t.useHoverLayer=!0)}n=u(n)
for(var r=t.start;r<t.end;r++){var a=e.getItemLayout(r)
if(l(e,a,r,n)){var o=new this._symbolCtor(e,r,this._seriesScope)
o.traverse(i),o.attr("position",a),this.group.add(o),e.setItemGraphicEl(r,o)}}},s.remove=function(t){var e=this.group,n=this._data
n&&t?n.eachItemGraphicEl(function(t){t.fadeOut(function(){e.remove(t)})}):e.removeAll()}
var c=o
t.exports=c},1443:function(t,e,n){var i=n(1312).retrieveRawValue
e.getDefaultLabel=function(t,e){var n=t.mapDimension("defaultedLabel",!0),r=n.length
if(1===r)return i(t,e,n[0])
if(r){for(var a=[],o=0;o<n.length;o++){var s=i(t,e,n[o])
a.push(s)}return a.join(" ")}}},1444:function(t,e,n){var i=n(1367),r=i.prepareDataCoordInfo,a=i.getStackedOnPoint
t.exports=function(t,e,n,i,o,s,l,u){for(var h=function(t,e){var n=[]
return e.diff(t).add(function(t){n.push({cmd:"+",idx:t})}).update(function(t,e){n.push({cmd:"=",idx:e,idx1:t})}).remove(function(t){n.push({cmd:"-",idx:t})}).execute(),n}(t,e),c=[],f=[],d=[],p=[],g=[],m=[],v=[],y=r(o,e,l),x=r(s,t,u),_=0;_<h.length;_++){var b=h[_],w=!0
switch(b.cmd){case"=":var S=t.getItemLayout(b.idx),M=e.getItemLayout(b.idx1);(isNaN(S[0])||isNaN(S[1]))&&(S=M.slice()),c.push(S),f.push(M),d.push(n[b.idx]),p.push(i[b.idx1]),v.push(e.getRawIndex(b.idx1))
break
case"+":var T=b.idx
c.push(o.dataToPoint([e.get(y.dataDimsForPoint[0],T),e.get(y.dataDimsForPoint[1],T)])),f.push(e.getItemLayout(T).slice()),d.push(a(y,o,e,T)),p.push(i[T]),v.push(e.getRawIndex(T))
break
case"-":T=b.idx
var k=t.getRawIndex(T)
k!==T?(c.push(t.getItemLayout(T)),f.push(s.dataToPoint([t.get(x.dataDimsForPoint[0],T),t.get(x.dataDimsForPoint[1],T)])),d.push(n[T]),p.push(a(x,s,t,T)),v.push(k)):w=!1}w&&(g.push(b),m.push(m.length))}m.sort(function(t,e){return v[t]-v[e]})
var D=[],C=[],A=[],I=[],O=[]
for(_=0;_<m.length;_++)T=m[_],D[_]=c[T],C[_]=f[T],A[_]=d[T],I[_]=p[T],O[_]=g[T]
return{current:D,next:C,stackedOnCurrent:A,stackedOnNext:I,status:O}}},1445:function(t,e,n){var i=n(1295),r=n(1291),a=n(1350),o=r.min,s=r.max,l=r.scaleAndAdd,u=r.copy,h=[],c=[],f=[]
function d(t){return isNaN(t[0])||isNaN(t[1])}function p(t,e,n,i,a,p,g,m,v,y,x){return"none"!==y&&y?function(t,e,n,i,r,a,o,s,l,h,p){for(var g=0,m=n,v=0;v<i;v++){var y=e[m]
if(m>=r||m<0)break
if(d(y)){if(p){m+=a
continue}break}if(m===n)t[a>0?"moveTo":"lineTo"](y[0],y[1])
else if(l>0){var x=e[g],_="y"===h?1:0,b=(y[_]-x[_])*l
u(c,x),c[_]=x[_]+b,u(f,y),f[_]=y[_]-b,t.bezierCurveTo(c[0],c[1],f[0],f[1],y[0],y[1])}else t.lineTo(y[0],y[1])
g=m,m+=a}return v}.apply(this,arguments):function(t,e,n,i,a,p,g,m,v,y,x){for(var _=0,b=n,w=0;w<i;w++){var S=e[b]
if(b>=a||b<0)break
if(d(S)){if(x){b+=p
continue}break}if(b===n)t[p>0?"moveTo":"lineTo"](S[0],S[1]),u(c,S)
else if(v>0){var M=b+p,T=e[M]
if(x)for(;T&&d(e[M]);)T=e[M+=p]
var k=.5,D=e[_]
if(!(T=e[M])||d(T))u(f,S)
else{var C,A
if(d(T)&&!x&&(T=S),r.sub(h,T,D),"x"===y||"y"===y){var I="x"===y?0:1
C=Math.abs(S[I]-D[I]),A=Math.abs(S[I]-T[I])}else C=r.dist(S,D),A=r.dist(S,T)
l(f,S,h,-v*(1-(k=A/(A+C))))}o(c,c,m),s(c,c,g),o(f,f,m),s(f,f,g),t.bezierCurveTo(c[0],c[1],f[0],f[1],S[0],S[1]),l(c,S,h,v*k)}else t.lineTo(S[0],S[1])
_=b,b+=p}return w}.apply(this,arguments)}function g(t,e){var n=[1/0,1/0],i=[-1/0,-1/0]
if(e)for(var r=0;r<t.length;r++){var a=t[r]
a[0]<n[0]&&(n[0]=a[0]),a[1]<n[1]&&(n[1]=a[1]),a[0]>i[0]&&(i[0]=a[0]),a[1]>i[1]&&(i[1]=a[1])}return{min:e?n:i,max:e?i:n}}var m=i.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:a(i.prototype.brush),buildPath:function(t,e){var n=e.points,i=0,r=n.length,a=g(n,e.smoothConstraint)
if(e.connectNulls){for(;r>0&&d(n[r-1]);r--);for(;i<r&&d(n[i]);i++);}for(;i<r;)i+=p(t,n,i,r,r,1,a.min,a.max,e.smooth,e.smoothMonotone,e.connectNulls)+1}}),v=i.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:a(i.prototype.brush),buildPath:function(t,e){var n=e.points,i=e.stackedOnPoints,r=0,a=n.length,o=e.smoothMonotone,s=g(n,e.smoothConstraint),l=g(i,e.smoothConstraint)
if(e.connectNulls){for(;a>0&&d(n[a-1]);a--);for(;r<a&&d(n[r]);r++);}for(;r<a;){var u=p(t,n,r,a,a,1,s.min,s.max,e.smooth,o,e.connectNulls)
p(t,i,r+u-1,u,a,-1,l.min,l.max,e.stackedOnSmooth,o,e.connectNulls),r+=u+1,t.closePath()}}})
e.Polyline=m,e.Polygon=v},1446:function(t,e){t.exports=function(t,e,n){return{seriesType:t,performRawSeries:!0,reset:function(t,i,r){var a=t.getData(),o=t.get("symbol")||e,s=t.get("symbolSize"),l=t.get("symbolKeepAspect")
if(a.setVisual({legendSymbol:n||o,symbol:o,symbolSize:s,symbolKeepAspect:l}),!i.isSeriesFiltered(t)){var u="function"==typeof s
return{dataEach:a.hasItemOption||u?function(e,n){if("function"==typeof s){var i=t.getRawValue(n),r=t.getDataParams(n)
e.setItemVisual(n,"symbolSize",s(i,r))}if(e.hasItemOption){var a=e.getItemModel(n),o=a.getShallow("symbol",!0),l=a.getShallow("symbolSize",!0),u=a.getShallow("symbolKeepAspect",!0)
null!=o&&e.setItemVisual(n,"symbol",o),null!=l&&e.setItemVisual(n,"symbolSize",l),null!=u&&e.setItemVisual(n,"symbolKeepAspect",u)}}:null}}}}}},1447:function(t,e,n){var i=n(1288).map,r=n(1327),a=n(1305).isDimensionStacked
t.exports=function(t){return{seriesType:t,plan:r(),reset:function(t){var e=t.getData(),n=t.coordinateSystem,r=t.pipelineContext.large
if(n){var o=i(n.dimensions,function(t){return e.mapDimension(t)}).slice(0,2),s=o.length,l=e.getCalculationInfo("stackResultDimension")
return a(e,o[0])&&(o[0]=l),a(e,o[1])&&(o[1]=l),s&&{progress:function(t,e){for(var i=t.end-t.start,a=r&&new Float32Array(i*s),l=t.start,u=0,h=[],c=[];l<t.end;l++){var f
if(1===s){var d=e.get(o[0],l)
f=!isNaN(d)&&n.dataToPoint(d,null,c)}else{d=h[0]=e.get(o[0],l)
var p=h[1]=e.get(o[1],l)
f=!isNaN(d)&&!isNaN(p)&&n.dataToPoint(h,null,c)}r?(a[u++]=f?f[0]:NaN,a[u++]=f?f[1]:NaN):e.setItemLayout(l,f&&f.slice()||[NaN,NaN])}r&&e.setLayout("symbolPoints",a)}}}}}}},1448:function(t,e){var n={average:function(t){for(var e=0,n=0,i=0;i<t.length;i++)isNaN(t[i])||(e+=t[i],n++)
return 0===n?NaN:e/n},sum:function(t){for(var e=0,n=0;n<t.length;n++)e+=t[n]||0
return e},max:function(t){for(var e=-1/0,n=0;n<t.length;n++)t[n]>e&&(e=t[n])
return isFinite(e)?e:NaN},min:function(t){for(var e=1/0,n=0;n<t.length;n++)t[n]<e&&(e=t[n])
return isFinite(e)?e:NaN},nearest:function(t){return t[0]}},i=function(t,e){return Math.round(t.length/2)}
t.exports=function(t){return{seriesType:t,modifyOutputEnd:!0,reset:function(t,e,r){var a=t.getData(),o=t.get("sampling"),s=t.coordinateSystem
if("cartesian2d"===s.type&&o){var l,u=s.getBaseAxis(),h=s.getOtherAxis(u),c=u.getExtent(),f=c[1]-c[0],d=Math.round(a.count()/f)
d>1&&("string"==typeof o?l=n[o]:"function"==typeof o&&(l=o),l&&t.setData(a.downSample(a.mapDimension(h.dim),1/d,l,i)))}}}}},1449:function(t,e,n){var i=n(1280),r=n(1288),a=n(1292)
n(1450),n(1457),i.extendComponentView({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new a.Rect({shape:t.coordinateSystem.getRect(),style:r.defaults({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),i.registerPreprocessor(function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})})},1450:function(t,e,n){n(1290).__DEV__
var i=n(1288),r=i.isObject,a=i.each,o=i.map,s=i.indexOf,l=(i.retrieve,n(1304).getLayoutRect),u=n(1306),h=u.createScaleByModel,c=u.ifAxisCrossZero,f=u.niceScaleExtent,d=u.estimateLabelUnionRect,p=n(1451),g=n(1453),m=n(1325),v=n(1305).getStackedDimension
function y(t,e,n){return t.getCoordSysModel()===e}function x(t,e,n){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,n),this.model=t}n(1454)
var _=x.prototype
function b(t,e,n){n.getAxesOnZeroOf=function(){return i?[i]:[]}
var i,r=t[e],a=n.model,o=a.get("axisLine.onZero"),s=a.get("axisLine.onZeroAxisIndex")
if(o)if(null==s){for(var l in r)if(r.hasOwnProperty(l)&&w(r[l])){i=r[l]
break}}else w(r[s])&&(i=r[s])}function w(t){return t&&"category"!==t.type&&"time"!==t.type&&c(t)}_.type="grid",_.axisPointerEnabled=!0,_.getRect=function(){return this._rect},_.update=function(t,e){var n=this._axesMap
this._updateScale(t,this.model),a(n.x,function(t){f(t.scale,t.model)}),a(n.y,function(t){f(t.scale,t.model)}),a(n.x,function(t){b(n,"y",t)}),a(n.y,function(t){b(n,"x",t)}),this.resize(this.model,e)},_.resize=function(t,e,n){var i=l(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()})
this._rect=i
var r=this._axesList
function o(){a(r,function(t){var e=t.isHorizontal(),n=e?[0,i.width]:[0,i.height],r=t.inverse?1:0
t.setExtent(n[r],n[1-r]),function(t,e){var n=t.getExtent(),i=n[0]+n[1]
t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return i-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return i-t+e}}(t,e?i.x:i.y)})}o(),!n&&t.get("containLabel")&&(a(r,function(t){if(!t.model.get("axisLabel.inside")){var e=d(t)
if(e){var n=t.isHorizontal()?"height":"width",r=t.model.get("axisLabel.margin")
i[n]-=e[n]+r,"top"===t.position?i.y+=e.height+r:"left"===t.position&&(i.x+=e.width+r)}}}),o())},_.getAxis=function(t,e){var n=this._axesMap[t]
if(null!=n){if(null==e)for(var i in n)if(n.hasOwnProperty(i))return n[i]
return n[e]}},_.getAxes=function(){return this._axesList.slice()},_.getCartesian=function(t,e){if(null!=t&&null!=e){var n="x"+t+"y"+e
return this._coordsMap[n]}r(t)&&(e=t.yAxisIndex,t=t.xAxisIndex)
for(var i=0,a=this._coordsList;i<a.length;i++)if(a[i].getAxis("x").index===t||a[i].getAxis("y").index===e)return a[i]},_.getCartesians=function(){return this._coordsList.slice()},_.convertToPixel=function(t,e,n){var i=this._findConvertTarget(t,e)
return i.cartesian?i.cartesian.dataToPoint(n):i.axis?i.axis.toGlobalCoord(i.axis.dataToCoord(n)):null},_.convertFromPixel=function(t,e,n){var i=this._findConvertTarget(t,e)
return i.cartesian?i.cartesian.pointToData(n):i.axis?i.axis.coordToData(i.axis.toLocalCoord(n)):null},_._findConvertTarget=function(t,e){var n,i,r=e.seriesModel,a=e.xAxisModel||r&&r.getReferringComponents("xAxis")[0],o=e.yAxisModel||r&&r.getReferringComponents("yAxis")[0],l=e.gridModel,u=this._coordsList
return r?(n=r.coordinateSystem,s(u,n)<0&&(n=null)):a&&o?n=this.getCartesian(a.componentIndex,o.componentIndex):a?i=this.getAxis("x",a.componentIndex):o?i=this.getAxis("y",o.componentIndex):l&&l.coordinateSystem===this&&(n=this._coordsList[0]),{cartesian:n,axis:i}},_.containPoint=function(t){var e=this._coordsList[0]
if(e)return e.containPoint(t)},_._initCartesian=function(t,e,n){var i={left:!1,right:!1,top:!1,bottom:!1},r={x:{},y:{}},o={x:0,y:0}
if(e.eachComponent("xAxis",s("x"),this),e.eachComponent("yAxis",s("y"),this),!o.x||!o.y)return this._axesMap={},void(this._axesList=[])
function s(e){return function(n,a){if(y(n,t)){var s=n.get("position")
"x"===e?"top"!==s&&"bottom"!==s&&i[s="bottom"]&&(s="top"===s?"bottom":"top"):"left"!==s&&"right"!==s&&i[s="left"]&&(s="left"===s?"right":"left"),i[s]=!0
var l=new g(e,h(n),[0,0],n.get("type"),s),u="category"===l.type
l.onBand=u&&n.get("boundaryGap"),l.inverse=n.get("inverse"),n.axis=l,l.model=n,l.grid=this,l.index=a,this._axesList.push(l),r[e][a]=l,o[e]++}}}this._axesMap=r,a(r.x,function(e,n){a(r.y,function(i,r){var a="x"+n+"y"+r,o=new p(a)
o.grid=this,o.model=t,this._coordsMap[a]=o,this._coordsList.push(o),o.addAxis(e),o.addAxis(i)},this)},this)},_._updateScale=function(t,e){function n(t,e,n){a(t.mapDimension(e.dim,!0),function(n){e.scale.unionExtentFromData(t,v(t,n))})}a(this._axesList,function(t){t.scale.setExtent(1/0,-1/0)}),t.eachSeries(function(i){if(T(i)){var r=M(i,t),a=r[0],o=r[1]
if(!y(a,e)||!y(o,e))return
var s=this.getCartesian(a.componentIndex,o.componentIndex),l=i.getData(),u=s.getAxis("x"),h=s.getAxis("y")
"list"===l.type&&(n(l,u),n(l,h))}},this)},_.getTooltipAxes=function(t){var e=[],n=[]
return a(this.getCartesians(),function(i){var r=null!=t&&"auto"!==t?i.getAxis(t):i.getBaseAxis(),a=i.getOtherAxis(r)
s(e,r)<0&&e.push(r),s(n,a)<0&&n.push(a)}),{baseAxes:e,otherAxes:n}}
var S=["xAxis","yAxis"]
function M(t,e){return o(S,function(e){return t.getReferringComponents(e)[0]})}function T(t){return"cartesian2d"===t.get("coordinateSystem")}x.create=function(t,e){var n=[]
return t.eachComponent("grid",function(i,r){var a=new x(i,t,e)
a.name="grid_"+r,a.resize(i,e,!0),i.coordinateSystem=a,n.push(a)}),t.eachSeries(function(t){if(T(t)){var e=M(t),n=e[0],i=e[1],r=n.getCoordSysModel().coordinateSystem
t.coordinateSystem=r.getCartesian(n.componentIndex,i.componentIndex)}}),n},x.dimensions=x.prototype.dimensions=p.prototype.dimensions,m.register("cartesian2d",x)
var k=x
t.exports=k},1451:function(t,e,n){var i=n(1288),r=n(1452)
function a(t){r.call(this,t)}a.prototype={constructor:a,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),n=this.getAxis("y")
return e.contain(e.toLocalCoord(t[0]))&&n.contain(n.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,n){var i=this.getAxis("x"),r=this.getAxis("y")
return(n=n||[])[0]=i.toGlobalCoord(i.dataToCoord(t[0])),n[1]=r.toGlobalCoord(r.dataToCoord(t[1])),n},clampData:function(t,e){var n=this.getAxis("x").scale,i=this.getAxis("y").scale,r=n.getExtent(),a=i.getExtent(),o=n.parse(t[0]),s=i.parse(t[1])
return(e=e||[])[0]=Math.min(Math.max(Math.min(r[0],r[1]),o),Math.max(r[0],r[1])),e[1]=Math.min(Math.max(Math.min(a[0],a[1]),s),Math.max(a[0],a[1])),e},pointToData:function(t,e){var n=this.getAxis("x"),i=this.getAxis("y")
return(e=e||[])[0]=n.coordToData(n.toLocalCoord(t[0])),e[1]=i.coordToData(i.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")}},i.inherits(a,r)
var o=a
t.exports=o},1452:function(t,e,n){var i=n(1288)
function r(t){return this._axes[t]}var a=function(t){this._axes={},this._dimList=[],this.name=t||""}
a.prototype={constructor:a,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return i.map(this._dimList,r,this)},getAxesByScale:function(t){return t=t.toLowerCase(),i.filter(this.getAxes(),function(e){return e.scale.type===t})},addAxis:function(t){var e=t.dim
this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var n=this._dimList,i=t instanceof Array?[]:{},r=0;r<n.length;r++){var a=n[r],o=this._axes[a]
i[a]=o[e](t[a])}return i}}
var o=a
t.exports=o},1453:function(t,e,n){var i=n(1288),r=n(1365),a=function(t,e,n,i,a){r.call(this,t,e,n),this.type=i||"value",this.position=a||"bottom"}
a.prototype={constructor:a,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position
return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent()
return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},i.inherits(a,r)
var o=a
t.exports=o},1454:function(t,e,n){n(1368)
var i=n(1300).extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}})
t.exports=i},1455:function(t,e,n){var i=n(1288),r=n(1456),a=n(1300),o=n(1304),s=o.getLayoutParams,l=o.mergeLayoutParam,u=n(1362),h=["value","category","time","log"]
t.exports=function(t,e,n,o){i.each(h,function(a){e.extend({type:t+"Axis."+a,mergeDefaultAndTheme:function(e,r){var o=this.layoutMode,u=o?s(e):{},h=r.getTheme()
i.merge(e,h.get(a+"Axis")),i.merge(e,this.getDefaultOption()),e.type=n(t,e),o&&l(e,u,o)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=u.createByAxisModel(this))},getCategories:function(t){var e=this.option
if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:i.mergeAll([{},r[a+"Axis"],o],!0)})}),a.registerSubTypeDefaulter(t+"Axis",i.curry(n,t))}},1456:function(t,e,n){var i=n(1288),r={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},a={}
a.categoryAxis=i.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},r),a.valueAxis=i.merge({boundaryGap:[0,0],splitNumber:5},r),a.timeAxis=i.defaults({scale:!0,min:"dataMin",max:"dataMax"},a.valueAxis),a.logAxis=i.defaults({scale:!0,logBase:10},a.valueAxis)
var o=a
t.exports=o},1457:function(t,e,n){n(1368),n(1458)},1458:function(t,e,n){var i=n(1288),r=n(1292),a=n(1369),o=n(1370),s=n(1371),l=["axisLine","axisTickLabel","axisName"],u=["splitArea","splitLine"],h=o.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,n,o){this.group.removeAll()
var c=this._axisGroup
if(this._axisGroup=new r.Group,this.group.add(this._axisGroup),t.get("show")){var f=t.getCoordSysModel(),d=s.layout(f,t),p=new a(t,d)
i.each(l,p.add,p),this._axisGroup.add(p.getGroup()),i.each(u,function(e){t.get(e+".show")&&this["_"+e](t,f)},this),r.groupTransition(c,this._axisGroup,t),h.superCall(this,"render",t,e,n,o)}},remove:function(){this._splitAreaColors=null},_splitLine:function(t,e){var n=t.axis
if(!n.scale.isBlank()){var a=t.getModel("splitLine"),o=a.getModel("lineStyle"),s=o.get("color")
s=i.isArray(s)?s:[s]
for(var l=e.coordinateSystem.getRect(),u=n.isHorizontal(),h=0,c=n.getTicksCoords({tickModel:a}),f=[],d=[],p=o.getLineStyle(),g=0;g<c.length;g++){var m=n.toGlobalCoord(c[g].coord)
u?(f[0]=m,f[1]=l.y,d[0]=m,d[1]=l.y+l.height):(f[0]=l.x,f[1]=m,d[0]=l.x+l.width,d[1]=m)
var v=h++%s.length,y=c[g].tickValue
this._axisGroup.add(new r.Line(r.subPixelOptimizeLine({anid:null!=y?"line_"+c[g].tickValue:null,shape:{x1:f[0],y1:f[1],x2:d[0],y2:d[1]},style:i.defaults({stroke:s[v]},p),silent:!0})))}}},_splitArea:function(t,e){var n=t.axis
if(!n.scale.isBlank()){var a=t.getModel("splitArea"),o=a.getModel("areaStyle"),s=o.get("color"),l=e.coordinateSystem.getRect(),u=n.getTicksCoords({tickModel:a,clamp:!0})
if(u.length){var h=s.length,c=this._splitAreaColors,f=i.createHashMap(),d=0
if(c)for(var p=0;p<u.length;p++){var g=c.get(u[p].tickValue)
if(null!=g){d=(g+(h-1)*p)%h
break}}var m=n.toGlobalCoord(u[0].coord),v=o.getAreaStyle()
for(s=i.isArray(s)?s:[s],p=1;p<u.length;p++){var y,x,_,b,w=n.toGlobalCoord(u[p].coord)
n.isHorizontal()?(y=m,x=l.y,_=w-y,b=l.height,m=y+_):(y=l.x,x=m,_=l.width,m=x+(b=w-x))
var S=u[p-1].tickValue
null!=S&&f.set(S,d),this._axisGroup.add(new r.Rect({anid:null!=S?"area_"+S:null,shape:{x:y,y:x,width:_,height:b},style:i.defaults({fill:s[d]},v),silent:!0})),d=(d+1)%h}this._splitAreaColors=f}}}})
h.extend({type:"xAxis"}),h.extend({type:"yAxis"})}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[8],{1284:function(t,e,n){var i=n(1280)
n(1459),n(1465),n(1466),i.registerAction({type:"showTip",event:"showTip",update:"tooltip:manuallyShowTip"},function(){}),i.registerAction({type:"hideTip",event:"hideTip",update:"tooltip:manuallyHideTip"},function(){})},1372:function(t,e,n){var i=n(1288),r=n(1289)
t.exports=function(t,e){var n,a=[],o=t.seriesIndex
if(null==o||!(n=e.getSeriesByIndex(o)))return{point:[]}
var s=n.getData(),l=r.queryDataIndex(s,t)
if(null==l||l<0||i.isArray(l))return{point:[]}
var u=s.getItemGraphicEl(l),h=n.coordinateSystem
if(n.getTooltipPosition)a=n.getTooltipPosition(l)||[]
else if(h&&h.dataToPoint)a=h.dataToPoint(s.getValues(i.map(h.dimensions,function(t){return s.mapDimension(t)}),l,!0))||[]
else if(u){var c=u.getBoundingRect().clone()
c.applyTransform(u.transform),a=[c.x+c.width/2,c.y+c.height/2]}return{point:a,el:u}}},1373:function(t,e,n){var i=n(1288),r=n(1294),a=(0,n(1289).makeInner)(),o=i.each
function s(t,e,n){t.handler("leave",null,n)}function l(t,e,n,i){e.handler(t,n,i)}e.register=function(t,e,n){if(!r.node){var u=e.getZr()
a(u).records||(a(u).records={}),function(t,e){function n(n,i){t.on(n,function(n){var r=function(t){var e={showTip:[],hideTip:[]},n=function(i){var r=e[i.type]
r?r.push(i):(i.dispatchAction=n,t.dispatchAction(i))}
return{dispatchAction:n,pendings:e}}(e)
o(a(t).records,function(t){t&&i(t,n,r.dispatchAction)}),function(t,e){var n,i=t.showTip.length,r=t.hideTip.length
i?n=t.showTip[i-1]:r&&(n=t.hideTip[r-1]),n&&(n.dispatchAction=null,e.dispatchAction(n))}(r.pendings,e)})}a(t).initialized||(a(t).initialized=!0,n("click",i.curry(l,"click")),n("mousemove",i.curry(l,"mousemove")),n("globalout",s))}(u,e),(a(u).records[t]||(a(u).records[t]={})).handler=n}},e.unregister=function(t,e){if(!r.node){var n=e.getZr();(a(n).records||{})[t]&&(a(n).records[t]=null)}}},1374:function(t,e,n){var i=n(1288),r=n(1292),a=n(1302),o=n(1297),s=n(1301),l=n(1306),u=n(1369)
function h(t,e,n,i,r){var s=c(n.get("value"),e.axis,e.ecModel,n.get("seriesDataIndices"),{precision:n.get("label.precision"),formatter:n.get("label.formatter")}),l=n.getModel("label"),u=o.normalizeCssArray(l.get("padding")||0),h=l.getFont(),f=a.getBoundingRect(s,h),d=r.position,p=f.width+u[1]+u[3],g=f.height+u[0]+u[2],m=r.align
"right"===m&&(d[0]-=p),"center"===m&&(d[0]-=p/2)
var v=r.verticalAlign
"bottom"===v&&(d[1]-=g),"middle"===v&&(d[1]-=g/2),function(t,e,n,i){var r=i.getWidth(),a=i.getHeight()
t[0]=Math.min(t[0]+e,r)-e,t[1]=Math.min(t[1]+n,a)-n,t[0]=Math.max(t[0],0),t[1]=Math.max(t[1],0)}(d,p,g,i)
var y=l.get("backgroundColor")
y&&"auto"!==y||(y=e.get("axisLine.lineStyle.color")),t.label={shape:{x:0,y:0,width:p,height:g,r:l.get("borderRadius")},position:d.slice(),style:{text:s,textFont:h,textFill:l.getTextColor(),textPosition:"inside",fill:y,stroke:l.get("borderColor")||"transparent",lineWidth:l.get("borderWidth")||0,shadowBlur:l.get("shadowBlur"),shadowColor:l.get("shadowColor"),shadowOffsetX:l.get("shadowOffsetX"),shadowOffsetY:l.get("shadowOffsetY")},z2:10}}function c(t,e,n,r,a){t=e.scale.parse(t)
var o=e.scale.getLabel(t,{precision:a.precision}),s=a.formatter
if(s){var u={value:l.getAxisRawValue(e,t),seriesData:[]}
i.each(r,function(t){var e=n.getSeriesByIndex(t.seriesIndex),i=t.dataIndexInside,r=e&&e.getDataParams(i)
r&&u.seriesData.push(r)}),i.isString(s)?o=s.replace("{value}",o):i.isFunction(s)&&(o=s(u))}return o}function f(t,e,n){var i=s.create()
return s.rotate(i,i,n.rotation),s.translate(i,i,n.position),r.applyTransform([t.dataToCoord(e),(n.labelOffset||0)+(n.labelDirection||1)*(n.labelMargin||0)],i)}e.buildElStyle=function(t){var e,n=t.get("type"),i=t.getModel(n+"Style")
return"line"===n?(e=i.getLineStyle()).fill=null:"shadow"===n&&((e=i.getAreaStyle()).stroke=null),e},e.buildLabelElOption=h,e.getValueLabel=c,e.getTransformedPosition=f,e.buildCartesianSingleLabelElOption=function(t,e,n,i,r,a){var o=u.innerTextLayout(n.rotation,0,n.labelDirection)
n.labelMargin=r.get("label.margin"),h(e,i,r,a,{position:f(i.axis,t,n),align:o.textAlign,verticalAlign:o.textVerticalAlign})},e.makeLineShape=function(t,e,n){return{x1:t[n=n||0],y1:t[1-n],x2:e[n],y2:e[1-n]}},e.makeRectShape=function(t,e,n){return{x:t[n=n||0],y:t[1-n],width:e[n],height:e[1-n]}},e.makeSectorShape=function(t,e,n,i,r,a){return{cx:t,cy:e,r0:n,r:i,startAngle:r,endAngle:a,clockwise:!0}}},1459:function(t,e,n){var i=n(1280),r=n(1288),a=n(1320),o=n(1460)
n(1461),n(1462),n(1463),i.registerPreprocessor(function(t){if(t){(!t.axisPointer||0===t.axisPointer.length)&&(t.axisPointer={})
var e=t.axisPointer.link
e&&!r.isArray(e)&&(t.axisPointer.link=[e])}}),i.registerProcessor(i.PRIORITY.PROCESSOR.STATISTIC,function(t,e){t.getComponent("axisPointer").coordSysAxesInfo=a.collect(t,e)}),i.registerAction({type:"updateAxisPointer",event:"updateAxisPointer",update:":updateAxisPointer"},o)},1460:function(t,e,n){var i=n(1288),r=n(1289).makeInner,a=n(1320),o=n(1372),s=i.each,l=i.curry,u=r()
function h(t,e,n,r,a){var o=t.axis
if(!o.scale.isBlank()&&o.containData(e))if(t.involveSeries){var l=function(t,e){var n=e.axis,i=n.dim,r=t,a=[],o=Number.MAX_VALUE,l=-1
return s(e.seriesModels,function(e,u){var h,c,f=e.getData().mapDimension(i,!0)
if(e.getAxisTooltipData){var d=e.getAxisTooltipData(f,t,n)
c=d.dataIndices,h=d.nestestValue}else{if(!(c=e.getData().indicesOfNearest(f[0],t,"category"===n.type?.5:null)).length)return
h=e.getData().get(f[0],c[0])}if(null!=h&&isFinite(h)){var p=t-h,g=Math.abs(p)
g<=o&&((g<o||p>=0&&l<0)&&(o=g,l=p,r=h,a.length=0),s(c,function(t){a.push({seriesIndex:e.seriesIndex,dataIndexInside:t,dataIndex:e.getData().getRawIndex(t)})}))}}),{payloadBatch:a,snapToValue:r}}(e,t),u=l.payloadBatch,h=l.snapToValue
u[0]&&null==a.seriesIndex&&i.extend(a,u[0]),!r&&t.snap&&o.containData(h)&&null!=h&&(e=h),n.showPointer(t,e,u,a),n.showTooltip(t,l,h)}else n.showPointer(t,e)}function c(t,e,n,i){t[e.key]={value:n,payloadBatch:i}}function f(t,e,n,i){var r=n.payloadBatch,o=e.axis,s=o.model,l=e.axisPointerModel
if(e.triggerTooltip&&r.length){var u=e.coordSys.model,h=a.makeKey(u),c=t.map[h]
c||(c=t.map[h]={coordSysId:u.id,coordSysIndex:u.componentIndex,coordSysType:u.type,coordSysMainType:u.mainType,dataByAxis:[]},t.list.push(c)),c.dataByAxis.push({axisDim:o.dim,axisIndex:s.componentIndex,axisType:s.type,axisId:s.id,value:i,valueLabelOpt:{precision:l.get("label.precision"),formatter:l.get("label.formatter")},seriesDataIndices:r.slice()})}}function d(t){var e=t.axis.model,n={},i=n.axisDim=t.axis.dim
return n.axisIndex=n[i+"AxisIndex"]=e.componentIndex,n.axisName=n[i+"AxisName"]=e.name,n.axisId=n[i+"AxisId"]=e.id,n}function p(t){return!t||null==t[0]||isNaN(t[0])||null==t[1]||isNaN(t[1])}t.exports=function(t,e,n){var r=t.currTrigger,a=[t.x,t.y],g=t,m=t.dispatchAction||i.bind(n.dispatchAction,n),v=e.getComponent("axisPointer").coordSysAxesInfo
if(v){p(a)&&(a=o({seriesIndex:g.seriesIndex,dataIndex:g.dataIndex},e).point)
var y=p(a),x=g.axesInfo,_=v.axesInfo,b="leave"===r||p(a),w={},S={},M={list:[],map:{}},T={showPointer:l(c,S),showTooltip:l(f,M)}
s(v.coordSysMap,function(t,e){var n=y||t.containPoint(a)
s(v.coordSysAxesInfo[e],function(t,e){var i=t.axis,r=function(t,e){for(var n=0;n<(t||[]).length;n++){var i=t[n]
if(e.axis.dim===i.axisDim&&e.axis.model.componentIndex===i.axisIndex)return i}}(x,t)
if(!b&&n&&(!x||r)){var o=r&&r.value
null!=o||y||(o=i.pointToData(a)),null!=o&&h(t,o,T,!1,w)}})})
var k={}
return s(_,function(t,e){var n=t.linkGroup
n&&!S[e]&&s(n.axesInfo,function(e,i){var r=S[i]
if(e!==t&&r){var a=r.value
n.mapper&&(a=t.axis.scale.parse(n.mapper(a,d(e),d(t)))),k[t.key]=a}})}),s(k,function(t,e){h(_[e],t,T,!0,w)}),function(t,e,n){var i=w.axesInfo=[]
s(e,function(e,n){var r=e.axisPointerModel.option,a=t[n]
a?(!e.useHandle&&(r.status="show"),r.value=a.value,r.seriesDataIndices=(a.payloadBatch||[]).slice()):!e.useHandle&&(r.status="hide"),"show"===r.status&&i.push({axisDim:e.axis.dim,axisIndex:e.axis.model.componentIndex,value:r.value})})}(S,_),function(t,e,n,i){if(!p(e)&&t.list.length){var r=((t.list[0].dataByAxis[0]||{}).seriesDataIndices||[])[0]||{}
i({type:"showTip",escapeConnect:!0,x:e[0],y:e[1],tooltipOption:n.tooltipOption,position:n.position,dataIndexInside:r.dataIndexInside,dataIndex:r.dataIndex,seriesIndex:r.seriesIndex,dataByCoordSys:t.list})}else i({type:"hideTip"})}(M,a,t,m),function(t,e,n){var r=n.getZr(),a=u(r).axisPointerLastHighlights||{},o=u(r).axisPointerLastHighlights={}
s(t,function(t,e){var n=t.axisPointerModel.option
"show"===n.status&&s(n.seriesDataIndices,function(t){var e=t.seriesIndex+" | "+t.dataIndex
o[e]=t})})
var l=[],h=[]
i.each(a,function(t,e){!o[e]&&h.push(t)}),i.each(o,function(t,e){!a[e]&&l.push(t)}),h.length&&n.dispatchAction({type:"downplay",escapeConnect:!0,batch:h}),l.length&&n.dispatchAction({type:"highlight",escapeConnect:!0,batch:l})}(_,0,n),w}}},1461:function(t,e,n){var i=n(1280).extendComponentModel({type:"axisPointer",coordSysAxesInfo:null,defaultOption:{show:"auto",triggerOn:null,zlevel:0,z:50,type:"line",snap:!1,triggerTooltip:!0,value:null,status:null,link:[],animation:null,animationDurationUpdate:200,lineStyle:{color:"#aaa",width:1,type:"solid"},shadowStyle:{color:"rgba(150,150,150,0.3)"},label:{show:!0,formatter:null,precision:"auto",margin:3,color:"#fff",padding:[5,7,5,7],backgroundColor:"auto",borderColor:null,borderWidth:0,shadowBlur:3,shadowColor:"#aaa"},handle:{show:!1,icon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",size:45,margin:50,color:"#333",shadowBlur:3,shadowColor:"#aaa",shadowOffsetX:0,shadowOffsetY:2,throttle:40}}})
t.exports=i},1462:function(t,e,n){var i=n(1280),r=n(1373),a=i.extendComponentView({type:"axisPointer",render:function(t,e,n){var i=e.getComponent("tooltip"),a=t.get("triggerOn")||i&&i.get("triggerOn")||"mousemove|click"
r.register("axisPointer",n,function(t,e,n){"none"!==a&&("leave"===t||a.indexOf(t)>=0)&&n({type:"updateAxisPointer",currTrigger:t,x:e&&e.offsetX,y:e&&e.offsetY})})},remove:function(t,e){r.unregister(e.getZr(),"axisPointer"),a.superApply(this._model,"remove",arguments)},dispose:function(t,e){r.unregister("axisPointer",e),a.superApply(this._model,"dispose",arguments)}}),o=a
t.exports=o},1463:function(t,e,n){var i=n(1292),r=n(1464),a=n(1374),o=n(1371),s=n(1370),l=r.extend({makeElOption:function(t,e,n,i,r){var s=n.axis,l=s.grid,c=i.get("type"),f=u(l,s).getOtherAxis(s).getGlobalExtent(),d=s.toGlobalCoord(s.dataToCoord(e,!0))
if(c&&"none"!==c){var p=a.buildElStyle(i),g=h[c](s,d,f,p)
g.style=p,t.graphicKey=g.type,t.pointer=g}var m=o.layout(l.model,n)
a.buildCartesianSingleLabelElOption(e,t,m,n,i,r)},getHandleTransform:function(t,e,n){var i=o.layout(e.axis.grid.model,e,{labelInside:!1})
return i.labelMargin=n.get("handle.margin"),{position:a.getTransformedPosition(e.axis,t,i),rotation:i.rotation+(i.labelDirection<0?Math.PI:0)}},updateHandleTransform:function(t,e,n,i){var r=n.axis,a=r.grid,o=r.getGlobalExtent(!0),s=u(a,r).getOtherAxis(r).getGlobalExtent(),l="x"===r.dim?0:1,h=t.position
h[l]+=e[l],h[l]=Math.min(o[1],h[l]),h[l]=Math.max(o[0],h[l])
var c=(s[1]+s[0])/2,f=[c,c]
return f[l]=h[l],{position:h,rotation:t.rotation,cursorPoint:f,tooltipOption:[{verticalAlign:"middle"},{align:"center"}][l]}}})
function u(t,e){var n={}
return n[e.dim+"AxisIndex"]=e.index,t.getCartesian(n)}var h={line:function(t,e,n,r){var o=a.makeLineShape([e,n[0]],[e,n[1]],c(t))
return i.subPixelOptimizeLine({shape:o,style:r}),{type:"Line",shape:o}},shadow:function(t,e,n,i){var r=Math.max(1,t.getBandWidth()),o=n[1]-n[0]
return{type:"Rect",shape:a.makeRectShape([e-r/2,n[0]],[r,o],c(t))}}}
function c(t){return"x"===t.dim?0:1}s.registerAxisPointerClass("CartesianAxisPointer",l)
var f=l
t.exports=f},1464:function(t,e,n){var i=n(1288),r=n(1299),a=n(1292),o=n(1320),s=n(1309),l=n(1328),u=(0,n(1289).makeInner)(),h=i.clone,c=i.bind
function f(){}function d(t,e,n,r){(function t(e,n){if(i.isObject(e)&&i.isObject(n)){var r=!0
return i.each(n,function(n,i){r=r&&t(e[i],n)}),!!r}return e===n})(u(n).lastProp,r)||(u(n).lastProp=r,e?a.updateProps(n,r,t):(n.stopAnimation(),n.attr(r)))}function p(t,e){t[e.get("label.show")?"show":"hide"]()}function g(t){return{position:t.position.slice(),rotation:t.rotation||0}}function m(t,e,n){var i=e.get("z"),r=e.get("zlevel")
t&&t.traverse(function(t){"group"!==t.type&&(null!=i&&(t.z=i),null!=r&&(t.zlevel=r),t.silent=n)})}f.prototype={_group:null,_lastGraphicKey:null,_handle:null,_dragging:!1,_lastValue:null,_lastStatus:null,_payloadInfo:null,animationThreshold:15,render:function(t,e,n,r){var o=e.get("value"),s=e.get("status")
if(this._axisModel=t,this._axisPointerModel=e,this._api=n,r||this._lastValue!==o||this._lastStatus!==s){this._lastValue=o,this._lastStatus=s
var l=this._group,u=this._handle
if(!s||"hide"===s)return l&&l.hide(),void(u&&u.hide())
l&&l.show(),u&&u.show()
var h={}
this.makeElOption(h,o,t,e,n)
var c=h.graphicKey
c!==this._lastGraphicKey&&this.clear(n),this._lastGraphicKey=c
var f=this._moveAnimation=this.determineAnimation(t,e)
if(l){var p=i.curry(d,e,f)
this.updatePointerEl(l,h,p,e),this.updateLabelEl(l,h,p,e)}else l=this._group=new a.Group,this.createPointerEl(l,h,t,e),this.createLabelEl(l,h,t,e),n.getZr().add(l)
m(l,e,!0),this._renderHandle(o)}},remove:function(t){this.clear(t)},dispose:function(t){this.clear(t)},determineAnimation:function(t,e){var n=e.get("animation"),i=t.axis,r="category"===i.type,a=e.get("snap")
if(!a&&!r)return!1
if("auto"===n||null==n){var s=this.animationThreshold
if(r&&i.getBandWidth()>s)return!0
if(a){var l=o.getAxisInfo(t).seriesDataCount,u=i.getExtent()
return Math.abs(u[0]-u[1])/l>s}return!1}return!0===n},makeElOption:function(t,e,n,i,r){},createPointerEl:function(t,e,n,i){var r=e.pointer
if(r){var o=u(t).pointerEl=new a[r.type](h(e.pointer))
t.add(o)}},createLabelEl:function(t,e,n,i){if(e.label){var r=u(t).labelEl=new a.Rect(h(e.label))
t.add(r),p(r,i)}},updatePointerEl:function(t,e,n){var i=u(t).pointerEl
i&&(i.setStyle(e.pointer.style),n(i,{shape:e.pointer.shape}))},updateLabelEl:function(t,e,n,i){var r=u(t).labelEl
r&&(r.setStyle(e.label.style),n(r,{shape:e.label.shape,position:e.label.position}),p(r,i))},_renderHandle:function(t){if(!this._dragging&&this.updateHandleTransform){var e,n=this._axisPointerModel,r=this._api.getZr(),o=this._handle,u=n.getModel("handle"),h=n.get("status")
if(!u.get("show")||!h||"hide"===h)return o&&r.remove(o),void(this._handle=null)
this._handle||(e=!0,o=this._handle=a.createIcon(u.get("icon"),{cursor:"move",draggable:!0,onmousemove:function(t){s.stop(t.event)},onmousedown:c(this._onHandleDragMove,this,0,0),drift:c(this._onHandleDragMove,this),ondragend:c(this._onHandleDragEnd,this)}),r.add(o)),m(o,n,!1),o.setStyle(u.getItemStyle(null,["color","borderColor","borderWidth","opacity","shadowColor","shadowBlur","shadowOffsetX","shadowOffsetY"]))
var f=u.get("size")
i.isArray(f)||(f=[f,f]),o.attr("scale",[f[0]/2,f[1]/2]),l.createOrUpdate(this,"_doDispatchAxisPointer",u.get("throttle")||0,"fixRate"),this._moveHandleToValue(t,e)}},_moveHandleToValue:function(t,e){d(this._axisPointerModel,!e&&this._moveAnimation,this._handle,g(this.getHandleTransform(t,this._axisModel,this._axisPointerModel)))},_onHandleDragMove:function(t,e){var n=this._handle
if(n){this._dragging=!0
var i=this.updateHandleTransform(g(n),[t,e],this._axisModel,this._axisPointerModel)
this._payloadInfo=i,n.stopAnimation(),n.attr(g(i)),u(n).lastProp=null,this._doDispatchAxisPointer()}},_doDispatchAxisPointer:function(){if(this._handle){var t=this._payloadInfo,e=this._axisModel
this._api.dispatchAction({type:"updateAxisPointer",x:t.cursorPoint[0],y:t.cursorPoint[1],tooltipOption:t.tooltipOption,axesInfo:[{axisDim:e.axis.dim,axisIndex:e.componentIndex}]})}},_onHandleDragEnd:function(t){if(this._dragging=!1,this._handle){var e=this._axisPointerModel.get("value")
this._moveHandleToValue(e),this._api.dispatchAction({type:"hideTip"})}},getHandleTransform:null,updateHandleTransform:null,clear:function(t){this._lastValue=null,this._lastStatus=null
var e=t.getZr(),n=this._group,i=this._handle
e&&n&&(this._lastGraphicKey=null,n&&e.remove(n),i&&e.remove(i),this._group=null,this._handle=null,this._payloadInfo=null)},doClear:function(){},buildLabel:function(t,e,n){return{x:t[n=n||0],y:t[1-n],width:e[n],height:e[1-n]}}},f.prototype.constructor=f,r.enableClassExtend(f)
var v=f
t.exports=v},1465:function(t,e,n){var i=n(1280).extendComponentModel({type:"tooltip",dependencies:["axisPointer"],defaultOption:{zlevel:0,z:8,show:!0,showContent:!0,trigger:"item",triggerOn:"mousemove|click",alwaysShowContent:!1,displayMode:"single",confine:!1,showDelay:0,hideDelay:100,transitionDuration:.4,enterable:!1,backgroundColor:"rgba(50,50,50,0.7)",borderColor:"#333",borderRadius:4,borderWidth:0,padding:5,extraCssText:"",axisPointer:{type:"line",axis:"auto",animation:"auto",animationDurationUpdate:200,animationEasingUpdate:"exponentialOut",crossStyle:{color:"#999",width:1,type:"dashed",textStyle:{}}},textStyle:{color:"#fff",fontSize:14}}})
t.exports=i},1466:function(t,e,n){var i=n(1280),r=n(1288),a=n(1294),o=n(1467),s=n(1297),l=n(1293),u=n(1292),h=n(1372),c=n(1304),f=n(1298),d=n(1373),p=n(1306),g=n(1374),m=r.bind,v=r.each,y=l.parsePercent,x=new u.Rect({shape:{x:-1,y:-1,width:2,height:2}}),_=i.extendComponentView({type:"tooltip",init:function(t,e){if(!a.node){var n=new o(e.getDom(),e)
this._tooltipContent=n}},render:function(t,e,n){if(!a.node&&!a.wxa){this.group.removeAll(),this._tooltipModel=t,this._ecModel=e,this._api=n,this._lastDataByCoordSys=null,this._alwaysShowContent=t.get("alwaysShowContent")
var i=this._tooltipContent
i.update(),i.setEnterable(t.get("enterable")),this._initGlobalListener(),this._keepShow()}},_initGlobalListener:function(){var t=this._tooltipModel.get("triggerOn")
d.register("itemTooltip",this._api,m(function(e,n,i){"none"!==t&&(t.indexOf(e)>=0?this._tryShow(n,i):"leave"===e&&this._hide(i))},this))},_keepShow:function(){var t=this._tooltipModel,e=this._ecModel,n=this._api
if(null!=this._lastX&&null!=this._lastY&&"none"!==t.get("triggerOn")){var i=this
clearTimeout(this._refreshUpdateTimeout),this._refreshUpdateTimeout=setTimeout(function(){i.manuallyShowTip(t,e,n,{x:i._lastX,y:i._lastY})})}},manuallyShowTip:function(t,e,n,i){if(i.from!==this.uid&&!a.node){var r=w(i,n)
this._ticket=""
var o=i.dataByCoordSys
if(i.tooltip&&null!=i.x&&null!=i.y){var s=x
s.position=[i.x,i.y],s.update(),s.tooltip=i.tooltip,this._tryShow({offsetX:i.x,offsetY:i.y,target:s},r)}else if(o)this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,event:{},dataByCoordSys:i.dataByCoordSys,tooltipOption:i.tooltipOption},r)
else if(null!=i.seriesIndex){if(this._manuallyAxisShowTip(t,e,n,i))return
var l=h(i,e),u=l.point[0],c=l.point[1]
null!=u&&null!=c&&this._tryShow({offsetX:u,offsetY:c,position:i.position,target:l.el,event:{}},r)}else null!=i.x&&null!=i.y&&(n.dispatchAction({type:"updateAxisPointer",x:i.x,y:i.y}),this._tryShow({offsetX:i.x,offsetY:i.y,position:i.position,target:n.getZr().findHover(i.x,i.y).target,event:{}},r))}},manuallyHideTip:function(t,e,n,i){var r=this._tooltipContent
!this._alwaysShowContent&&this._tooltipModel&&r.hideLater(this._tooltipModel.get("hideDelay")),this._lastX=this._lastY=null,i.from!==this.uid&&this._hide(w(i,n))},_manuallyAxisShowTip:function(t,e,n,i){var r=i.seriesIndex,a=i.dataIndex,o=e.getComponent("axisPointer").coordSysAxesInfo
if(null!=r&&null!=a&&null!=o){var s=e.getSeriesByIndex(r)
if(s&&"axis"===(t=b([s.getData().getItemModel(a),s,(s.coordinateSystem||{}).model,t])).get("trigger"))return n.dispatchAction({type:"updateAxisPointer",seriesIndex:r,dataIndex:a,position:i.position}),!0}},_tryShow:function(t,e){var n=t.target
if(this._tooltipModel){this._lastX=t.offsetX,this._lastY=t.offsetY
var i=t.dataByCoordSys
i&&i.length?this._showAxisTooltip(i,t):n&&null!=n.dataIndex?(this._lastDataByCoordSys=null,this._showSeriesItemTooltip(t,n,e)):n&&n.tooltip?(this._lastDataByCoordSys=null,this._showComponentItemTooltip(t,n,e)):(this._lastDataByCoordSys=null,this._hide(e))}},_showOrMove:function(t,e){var n=t.get("showDelay")
e=r.bind(e,this),clearTimeout(this._showTimout),n>0?this._showTimout=setTimeout(e,n):e()},_showAxisTooltip:function(t,e){var n=this._ecModel,i=this._tooltipModel,a=[e.offsetX,e.offsetY],o=[],l=[],u=b([e.tooltipOption,i])
v(t,function(t){v(t.dataByAxis,function(t){var e=n.getComponent(t.axisDim+"Axis",t.axisIndex),i=t.value,a=[]
if(e&&null!=i){var u=g.getValueLabel(i,e.axis,n,t.seriesDataIndices,t.valueLabelOpt)
r.each(t.seriesDataIndices,function(r){var o=n.getSeriesByIndex(r.seriesIndex),s=r.dataIndexInside,h=o&&o.getDataParams(s)
h.axisDim=t.axisDim,h.axisIndex=t.axisIndex,h.axisType=t.axisType,h.axisId=t.axisId,h.axisValue=p.getAxisRawValue(e.axis,i),h.axisValueLabel=u,h&&(l.push(h),a.push(o.formatTooltip(s,!0)))})
var h=u
o.push((h?s.encodeHTML(h)+"<br />":"")+a.join("<br />"))}})},this),o.reverse(),o=o.join("<br /><br />")
var h=e.position
this._showOrMove(u,function(){this._updateContentNotChangedOnAxis(t)?this._updatePosition(u,h,a[0],a[1],this._tooltipContent,l):this._showTooltipContent(u,o,l,Math.random(),a[0],a[1],h)})},_showSeriesItemTooltip:function(t,e,n){var i=this._ecModel,r=e.seriesIndex,a=i.getSeriesByIndex(r),o=e.dataModel||a,s=e.dataIndex,l=e.dataType,u=o.getData(),h=b([u.getItemModel(s),o,a&&(a.coordinateSystem||{}).model,this._tooltipModel]),c=h.get("trigger")
if(null==c||"item"===c){var f=o.getDataParams(s,l),d=o.formatTooltip(s,!1,l),p="item_"+o.name+"_"+s
this._showOrMove(h,function(){this._showTooltipContent(h,d,f,p,t.offsetX,t.offsetY,t.position,t.target)}),n({type:"showTip",dataIndexInside:s,dataIndex:u.getRawIndex(s),seriesIndex:r,from:this.uid})}},_showComponentItemTooltip:function(t,e,n){var i=e.tooltip
"string"==typeof i&&(i={content:i,formatter:i})
var r=new f(i,this._tooltipModel,this._ecModel),a=r.get("content"),o=Math.random()
this._showOrMove(r,function(){this._showTooltipContent(r,a,r.get("formatterParams")||{},o,t.offsetX,t.offsetY,t.position,e)}),n({type:"showTip",from:this.uid})},_showTooltipContent:function(t,e,n,i,r,a,o,l){if(this._ticket="",t.get("showContent")&&t.get("show")){var u=this._tooltipContent,h=t.get("formatter")
o=o||t.get("position")
var c=e
if(h&&"string"==typeof h)c=s.formatTpl(h,n,!0)
else if("function"==typeof h){var f=m(function(e,i){e===this._ticket&&(u.setContent(i),this._updatePosition(t,o,r,a,u,n,l))},this)
this._ticket=i,c=h(n,i,f)}u.setContent(c),u.show(t),this._updatePosition(t,o,r,a,u,n,l)}},_updatePosition:function(t,e,n,i,a,o,s){var l=this._api.getWidth(),u=this._api.getHeight()
e=e||t.get("position")
var h=a.getSize(),f=t.get("align"),d=t.get("verticalAlign"),p=s&&s.getBoundingRect().clone()
if(s&&p.applyTransform(s.transform),"function"==typeof e&&(e=e([n,i],o,a.el,p,{viewSize:[l,u],contentSize:h.slice()})),r.isArray(e))n=y(e[0],l),i=y(e[1],u)
else if(r.isObject(e)){e.width=h[0],e.height=h[1]
var g=c.getLayoutRect(e,{width:l,height:u})
n=g.x,i=g.y,f=null,d=null}else if("string"==typeof e&&s){var m=function(t,e,n){var i=n[0],r=n[1],a=0,o=0,s=e.width,l=e.height
switch(t){case"inside":a=e.x+s/2-i/2,o=e.y+l/2-r/2
break
case"top":a=e.x+s/2-i/2,o=e.y-r-5
break
case"bottom":a=e.x+s/2-i/2,o=e.y+l+5
break
case"left":a=e.x-i-5,o=e.y+l/2-r/2
break
case"right":a=e.x+s+5,o=e.y+l/2-r/2}return[a,o]}(e,p,h)
n=m[0],i=m[1]}else n=(m=function(t,e,n,i,r,a,o){var s=S(n),l=s.width,u=s.height
return null!=a&&(t+l+a>i?t-=l+a:t+=a),null!=o&&(e+u+o>r?e-=u+o:e+=o),[t,e]}(n,i,a.el,l,u,f?null:20,d?null:20))[0],i=m[1]
f&&(n-=M(f)?h[0]/2:"right"===f?h[0]:0),d&&(i-=M(d)?h[1]/2:"bottom"===d?h[1]:0),t.get("confine")&&(n=(m=function(t,e,n,i,r){var a=S(n),o=a.width,s=a.height
return t=Math.min(t+o,i)-o,e=Math.min(e+s,r)-s,[t=Math.max(t,0),e=Math.max(e,0)]}(n,i,a.el,l,u))[0],i=m[1]),a.moveTo(n,i)},_updateContentNotChangedOnAxis:function(t){var e=this._lastDataByCoordSys,n=!!e&&e.length===t.length
return n&&v(e,function(e,i){var r=e.dataByAxis||{},a=(t[i]||{}).dataByAxis||[];(n&=r.length===a.length)&&v(r,function(t,e){var i=a[e]||{},r=t.seriesDataIndices||[],o=i.seriesDataIndices||[];(n&=t.value===i.value&&t.axisType===i.axisType&&t.axisId===i.axisId&&r.length===o.length)&&v(r,function(t,e){var i=o[e]
n&=t.seriesIndex===i.seriesIndex&&t.dataIndex===i.dataIndex})})}),this._lastDataByCoordSys=t,!!n},_hide:function(t){this._lastDataByCoordSys=null,t({type:"hideTip",from:this.uid})},dispose:function(t,e){a.node||a.wxa||(this._tooltipContent.hide(),d.unregister("itemTooltip",e))}})
function b(t){for(var e=t.pop();t.length;){var n=t.pop()
n&&(f.isInstance(n)&&(n=n.get("tooltip",!0)),"string"==typeof n&&(n={formatter:n}),e=new f(n,e,e.ecModel))}return e}function w(t,e){return t.dispatchAction||r.bind(e.dispatchAction,e)}function S(t){var e=t.clientWidth,n=t.clientHeight
if(document.defaultView&&document.defaultView.getComputedStyle){var i=document.defaultView.getComputedStyle(t)
i&&(e+=parseInt(i.paddingLeft,10)+parseInt(i.paddingRight,10)+parseInt(i.borderLeftWidth,10)+parseInt(i.borderRightWidth,10),n+=parseInt(i.paddingTop,10)+parseInt(i.paddingBottom,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10))}return{width:e,height:n}}function M(t){return"center"===t||"middle"===t}t.exports=_},1467:function(t,e,n){var i=n(1288),r=n(1308),a=n(1309),o=n(1294),s=n(1297),l=i.each,u=s.toCamelCase,h=["","-webkit-","-moz-","-o-"]
function c(t,e){if(o.wxa)return null
var n=document.createElement("div"),i=this._zr=e.getZr()
this.el=n,this._x=e.getWidth()/2,this._y=e.getHeight()/2,t.appendChild(n),this._container=t,this._show=!1,this._hideTimeout
var r=this
n.onmouseenter=function(){r._enterable&&(clearTimeout(r._hideTimeout),r._show=!0),r._inContent=!0},n.onmousemove=function(e){if(e=e||window.event,!r._enterable){var n=i.handler
a.normalizeEvent(t,e,!0),n.dispatch("mousemove",e)}},n.onmouseleave=function(){r._enterable&&r._show&&r.hideLater(r._hideDelay),r._inContent=!1}}c.prototype={constructor:c,_enterable:!0,update:function(){var t=this._container,e=t.currentStyle||document.defaultView.getComputedStyle(t),n=t.style
"absolute"!==n.position&&"absolute"!==e.position&&(n.position="relative")},show:function(t){clearTimeout(this._hideTimeout)
var e=this.el
e.style.cssText="position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;"+function(t){var e=[],n=t.get("transitionDuration"),a=t.get("backgroundColor"),c=t.getModel("textStyle"),f=t.get("padding")
return n&&e.push(function(t){var e="left "+n+"s cubic-bezier(0.23, 1, 0.32, 1),top "+n+"s cubic-bezier(0.23, 1, 0.32, 1)"
return i.map(h,function(t){return t+"transition:"+e}).join(";")}()),a&&(o.canvasSupported?e.push("background-Color:"+a):(e.push("background-Color:#"+r.toHex(a)),e.push("filter:alpha(opacity=70)"))),l(["width","color","radius"],function(n){var i="border-"+n,r=u(i),a=t.get(r)
null!=a&&e.push(i+":"+a+("color"===n?"":"px"))}),e.push(function(t){var e=[],n=t.get("fontSize"),i=t.getTextColor()
return i&&e.push("color:"+i),e.push("font:"+t.getFont()),n&&e.push("line-height:"+Math.round(3*n/2)+"px"),l(["decoration","align"],function(n){var i=t.get(n)
i&&e.push("text-"+n+":"+i)}),e.join(";")}(c)),null!=f&&e.push("padding:"+s.normalizeCssArray(f).join("px ")+"px"),e.join(";")+";"}(t)+";left:"+this._x+"px;top:"+this._y+"px;"+(t.get("extraCssText")||""),e.style.display=e.innerHTML?"block":"none",this._show=!0},setContent:function(t){this.el.innerHTML=null==t?"":t},setEnterable:function(t){this._enterable=t},getSize:function(){var t=this.el
return[t.clientWidth,t.clientHeight]},moveTo:function(t,e){var n,i=this._zr
i&&i.painter&&(n=i.painter.getViewportRootOffset())&&(t+=n.offsetLeft,e+=n.offsetTop)
var r=this.el.style
r.left=t+"px",r.top=e+"px",this._x=t,this._y=e},hide:function(){this.el.style.display="none",this._show=!1},hideLater:function(t){!this._show||this._inContent&&this._enterable||(t?(this._hideDelay=t,this._show=!1,this._hideTimeout=setTimeout(i.bind(this.hide,this),t)):this.hide())},isShow:function(){return this._show}}
var f=c
t.exports=f}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[10],{1286:function(t,e,n){if(!i||!r)var i=n(367),r=n(1468);(function(){var t=function(t){if(t.length<2)return i()._locale.ordinal(t)
var e=t.pop()
return t.join(", ")+" and "+i()._locale.ordinal(e)},n=function(t,e){return"dow"==e?i().day(t-1).format("ddd"):"mon"==e?i().month(t-1).format("MMM"):void 0},a=function(t,e){if(t.length<2)return n(""+t[0],e)
for(var i,r=""+t.pop(),a="",o=0;i=t[o];o++)a.length>0&&(a+=", "),a+=n(i,e)
return a+" and "+n(r,e)},o=function(t){return t<10?"0"+t:t},s=function(t,e){var n=r.parse.cron(t,e)
return r.schedule(n).next()},l=null!=e?e:window.prettyCron={}
l.toString=function(e,n){return function(e){var n="Every "
if(e.h&&e.m&&e.h.length<=2&&e.m.length<=2){for(var i=[],r=0;r<e.h.length;r++)for(var s=0;s<e.m.length;s++)i.push(o(e.h[r])+":"+o(e.m[s]))
if(i.length<2)n=i[0]
else{var l=i.pop()
n=i.join(", ")+" and "+l}e.d||e.D||(n+=" every day")}else e.h?e.m?n+=t(e.m)+" minute past the "+t(e.h)+" hour":n+="minute of "+t(e.h)+" hour":e.m?1==e.m.length&&0==e.m[0]?n+="hour, on the hour":n+=t(e.m)+" minute past every hour":n+="minute"
return e.D&&(n+=" on the "+t(e.D),e.M||(n+=" of every month")),e.d&&(e.D?n+=" and every ":n+=" on ",n+=a(e.d,"dow")),e.M&&(n+=" in "+a(e.M,"mon")),n}(r.parse.cron(e,n).schedules[0])},l.getNext=function(t,e){return i(s(t,e)).calendar()},l.getNextDate=s}).call(this)},1468:function(t,e,n){(function(e){var i=["document","window","later"],r={}
i.forEach(function(t){t in e&&(r[t]=e[t])}),n(1469),t.exports=later,i.forEach(function(t){t in r?e[t]=r[t]:delete e[t]})}).call(this,n(28))},1469:function(t,e){later=function(){"use strict"
var t={version:"1.2.0"}
return Array.prototype.indexOf||(Array.prototype.indexOf=function(t){if(null==this)throw new TypeError
var e=Object(this),n=e.length>>>0
if(0===n)return-1
var i=0
if(arguments.length>1&&((i=Number(arguments[1]))!=i?i=0:0!=i&&i!=1/0&&i!=-1/0&&(i=(i>0||-1)*Math.floor(Math.abs(i)))),i>=n)return-1
for(var r=i>=0?i:Math.max(n-Math.abs(i),0);r<n;r++)if(r in e&&e[r]===t)return r
return-1}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),t.array={},t.array.sort=function(t,e){t.sort(function(t,e){return+t-+e}),e&&0===t[0]&&t.push(t.shift())},t.array.next=function(t,e,n){for(var i,r=0!==n[0],a=0,o=e.length-1;o>-1;--o){if((i=e[o])===t)return i
if(!(i>t||0===i&&r&&n[1]>t))break
a=o}return e[a]},t.array.nextInvalid=function(t,e,n){for(var i=n[0],r=n[1],a=e.length,o=0===e[a-1]&&0!==i?r:0,s=t,l=e.indexOf(t),u=s;s===(e[l]||o);)if(++s>r&&(s=i),++l===a&&(l=0),s===u)return
return s},t.array.prev=function(t,e,n){for(var i,r=e.length,a=0!==n[0],o=r-1,s=0;s<r;s++){if((i=e[s])===t)return i
if(!(i<t||0===i&&a&&n[1]<t))break
o=s}return e[o]},t.array.prevInvalid=function(t,e,n){for(var i=n[0],r=n[1],a=e.length,o=0===e[a-1]&&0!==i?r:0,s=t,l=e.indexOf(t),u=s;s===(e[l]||o);)if(--s<i&&(s=r),-1==--l&&(l=a-1),s===u)return
return s},t.day=t.D={name:"day",range:86400,val:function(e){return e.D||(e.D=t.date.getDate.call(e))},isValid:function(e,n){return t.D.val(e)===(n||t.D.extent(e)[1])},extent:function(e){if(e.DExtent)return e.DExtent
var n=t.M.val(e),i=t.DAYS_IN_MONTH[n-1]
return 2===n&&366===t.dy.extent(e)[1]&&(i+=1),e.DExtent=[1,i]},start:function(e){return e.DStart||(e.DStart=t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e)))},end:function(e){return e.DEnd||(e.DEnd=t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e)))},next:function(e,n){n=n>t.D.extent(e)[1]?1:n
var i=t.date.nextRollover(e,n,t.D,t.M),r=t.D.extent(i)[1]
return n=n>r?1:n||r,t.date.next(t.Y.val(i),t.M.val(i),n)},prev:function(e,n){var i=t.date.prevRollover(e,n,t.D,t.M),r=t.D.extent(i)[1]
return t.date.prev(t.Y.val(i),t.M.val(i),n>r?r:n||r)}},t.dayOfWeekCount=t.dc={name:"day of week count",range:604800,val:function(e){return e.dc||(e.dc=Math.floor((t.D.val(e)-1)/7)+1)},isValid:function(e,n){return t.dc.val(e)===n||0===n&&t.D.val(e)>t.D.extent(e)[1]-7},extent:function(e){return e.dcExtent||(e.dcExtent=[1,Math.ceil(t.D.extent(e)[1]/7)])},start:function(e){return e.dcStart||(e.dcStart=t.date.next(t.Y.val(e),t.M.val(e),Math.max(1,7*(t.dc.val(e)-1)+1||1)))},end:function(e){return e.dcEnd||(e.dcEnd=t.date.prev(t.Y.val(e),t.M.val(e),Math.min(7*t.dc.val(e),t.D.extent(e)[1])))},next:function(e,n){n=n>t.dc.extent(e)[1]?1:n
var i=t.date.nextRollover(e,n,t.dc,t.M)
n=n>t.dc.extent(i)[1]?1:n
var r=t.date.next(t.Y.val(i),t.M.val(i),0===n?t.D.extent(i)[1]-6:1+7*(n-1))
return r.getTime()<=e.getTime()?(i=t.M.next(e,t.M.val(e)+1),t.date.next(t.Y.val(i),t.M.val(i),0===n?t.D.extent(i)[1]-6:1+7*(n-1))):r},prev:function(e,n){var i=t.date.prevRollover(e,n,t.dc,t.M),r=t.dc.extent(i)[1]
return n=n>r?r:n||r,t.dc.end(t.date.prev(t.Y.val(i),t.M.val(i),1+7*(n-1)))}},t.dayOfWeek=t.dw=t.d={name:"day of week",range:86400,val:function(e){return e.dw||(e.dw=t.date.getDay.call(e)+1)},isValid:function(e,n){return t.dw.val(e)===(n||7)},extent:function(){return[1,7]},start:function(e){return t.D.start(e)},end:function(e){return t.D.end(e)},next:function(e,n){return n=n>7?1:n||7,t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e)+(n-t.dw.val(e))+(n<=t.dw.val(e)?7:0))},prev:function(e,n){return n=n>7?7:n||7,t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e)+(n-t.dw.val(e))+(n>=t.dw.val(e)?-7:0))}},t.dayOfYear=t.dy={name:"day of year",range:86400,val:function(e){return e.dy||(e.dy=Math.ceil(1+(t.D.start(e).getTime()-t.Y.start(e).getTime())/t.DAY))},isValid:function(e,n){return t.dy.val(e)===(n||t.dy.extent(e)[1])},extent:function(e){var n=t.Y.val(e)
return e.dyExtent||(e.dyExtent=[1,n%4?365:366])},start:function(e){return t.D.start(e)},end:function(e){return t.D.end(e)},next:function(e,n){n=n>t.dy.extent(e)[1]?1:n
var i=t.date.nextRollover(e,n,t.dy,t.Y),r=t.dy.extent(i)[1]
return n=n>r?1:n||r,t.date.next(t.Y.val(i),t.M.val(i),n)},prev:function(e,n){var i=t.date.prevRollover(e,n,t.dy,t.Y),r=t.dy.extent(i)[1]
return n=n>r?r:n||r,t.date.prev(t.Y.val(i),t.M.val(i),n)}},t.hour=t.h={name:"hour",range:3600,val:function(e){return e.h||(e.h=t.date.getHour.call(e))},isValid:function(e,n){return t.h.val(e)===n},extent:function(){return[0,23]},start:function(e){return e.hStart||(e.hStart=t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e),t.h.val(e)))},end:function(e){return e.hEnd||(e.hEnd=t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e),t.h.val(e)))},next:function(e,n){n=n>23?0:n
var i=t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e)+(n<=t.h.val(e)?1:0),n)
return!t.date.isUTC&&i.getTime()<=e.getTime()&&(i=t.date.next(t.Y.val(i),t.M.val(i),t.D.val(i),n+1)),i},prev:function(e,n){return n=n>23?23:n,t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e)+(n>=t.h.val(e)?-1:0),n)}},t.minute=t.m={name:"minute",range:60,val:function(e){return e.m||(e.m=t.date.getMin.call(e))},isValid:function(e,n){return t.m.val(e)===n},extent:function(t){return[0,59]},start:function(e){return e.mStart||(e.mStart=t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e),t.h.val(e),t.m.val(e)))},end:function(e){return e.mEnd||(e.mEnd=t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e),t.h.val(e),t.m.val(e)))},next:function(e,n){var i=t.m.val(e),r=t.s.val(e),a=n>59?60-i:n<=i?60-i+n:n-i,o=new Date(e.getTime()+a*t.MIN-r*t.SEC)
return!t.date.isUTC&&o.getTime()<=e.getTime()&&(o=new Date(e.getTime()+(a+120)*t.MIN-r*t.SEC)),o},prev:function(e,n){return n=n>59?59:n,t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e),t.h.val(e)+(n>=t.m.val(e)?-1:0),n)}},t.month=t.M={name:"month",range:2629740,val:function(e){return e.M||(e.M=t.date.getMonth.call(e)+1)},isValid:function(e,n){return t.M.val(e)===(n||12)},extent:function(){return[1,12]},start:function(e){return e.MStart||(e.MStart=t.date.next(t.Y.val(e),t.M.val(e)))},end:function(e){return e.MEnd||(e.MEnd=t.date.prev(t.Y.val(e),t.M.val(e)))},next:function(e,n){return n=n>12?1:n||12,t.date.next(t.Y.val(e)+(n>t.M.val(e)?0:1),n)},prev:function(e,n){return n=n>12?12:n||12,t.date.prev(t.Y.val(e)-(n>=t.M.val(e)?1:0),n)}},t.second=t.s={name:"second",range:1,val:function(e){return e.s||(e.s=t.date.getSec.call(e))},isValid:function(e,n){return t.s.val(e)===n},extent:function(){return[0,59]},start:function(t){return t},end:function(t){return t},next:function(e,n){var i=t.s.val(e),r=n>59?60-i:n<=i?60-i+n:n-i,a=new Date(e.getTime()+r*t.SEC)
return!t.date.isUTC&&a.getTime()<=e.getTime()&&(a=new Date(e.getTime()+(r+7200)*t.SEC)),a},prev:function(e,n,i){return n=n>59?59:n,t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e),t.h.val(e),t.m.val(e)+(n>=t.s.val(e)?-1:0),n)}},t.time=t.t={name:"time",range:1,val:function(e){return e.t||(e.t=3600*t.h.val(e)+60*t.m.val(e)+t.s.val(e))},isValid:function(e,n){return t.t.val(e)===n},extent:function(){return[0,86399]},start:function(t){return t},end:function(t){return t},next:function(e,n){n=n>86399?0:n
var i=t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e)+(n<=t.t.val(e)?1:0),0,0,n)
return!t.date.isUTC&&i.getTime()<e.getTime()&&(i=t.date.next(t.Y.val(i),t.M.val(i),t.D.val(i),t.h.val(i),t.m.val(i),n+7200)),i},prev:function(e,n){return n=n>86399?86399:n,t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e)+(n>=t.t.val(e)?-1:0),0,0,n)}},t.weekOfMonth=t.wm={name:"week of month",range:604800,val:function(e){return e.wm||(e.wm=(t.D.val(e)+(t.dw.val(t.M.start(e))-1)+(7-t.dw.val(e)))/7)},isValid:function(e,n){return t.wm.val(e)===(n||t.wm.extent(e)[1])},extent:function(e){return e.wmExtent||(e.wmExtent=[1,(t.D.extent(e)[1]+(t.dw.val(t.M.start(e))-1)+(7-t.dw.val(t.M.end(e))))/7])},start:function(e){return e.wmStart||(e.wmStart=t.date.next(t.Y.val(e),t.M.val(e),Math.max(t.D.val(e)-t.dw.val(e)+1,1)))},end:function(e){return e.wmEnd||(e.wmEnd=t.date.prev(t.Y.val(e),t.M.val(e),Math.min(t.D.val(e)+(7-t.dw.val(e)),t.D.extent(e)[1])))},next:function(e,n){n=n>t.wm.extent(e)[1]?1:n
var i=t.date.nextRollover(e,n,t.wm,t.M),r=t.wm.extent(i)[1]
return n=n>r?1:n||r,t.date.next(t.Y.val(i),t.M.val(i),Math.max(1,7*(n-1)-(t.dw.val(i)-2)))},prev:function(e,n){var i=t.date.prevRollover(e,n,t.wm,t.M),r=t.wm.extent(i)[1]
return n=n>r?r:n||r,t.wm.end(t.date.next(t.Y.val(i),t.M.val(i),Math.max(1,7*(n-1)-(t.dw.val(i)-2))))}},t.weekOfYear=t.wy={name:"week of year (ISO)",range:604800,val:function(e){if(e.wy)return e.wy
var n=t.dw.next(t.wy.start(e),5),i=t.dw.next(t.Y.prev(n,t.Y.val(n)-1),5)
return e.wy=1+Math.ceil((n.getTime()-i.getTime())/t.WEEK)},isValid:function(e,n){return t.wy.val(e)===(n||t.wy.extent(e)[1])},extent:function(e){if(e.wyExtent)return e.wyExtent
var n=t.dw.next(t.wy.start(e),5),i=t.dw.val(t.Y.start(n)),r=t.dw.val(t.Y.end(n))
return e.wyExtent=[1,5===i||5===r?53:52]},start:function(e){return e.wyStart||(e.wyStart=t.date.next(t.Y.val(e),t.M.val(e),t.D.val(e)-(t.dw.val(e)>1?t.dw.val(e)-2:6)))},end:function(e){return e.wyEnd||(e.wyEnd=t.date.prev(t.Y.val(e),t.M.val(e),t.D.val(e)+(t.dw.val(e)>1?8-t.dw.val(e):0)))},next:function(e,n){n=n>t.wy.extent(e)[1]?1:n
var i=t.dw.next(t.wy.start(e),5),r=t.date.nextRollover(i,n,t.wy,t.Y)
1!==t.wy.val(r)&&(r=t.dw.next(r,2))
var a=t.wy.extent(r)[1],o=t.wy.start(r)
return n=n>a?1:n||a,t.date.next(t.Y.val(o),t.M.val(o),t.D.val(o)+7*(n-1))},prev:function(e,n){var i=t.dw.next(t.wy.start(e),5),r=t.date.prevRollover(i,n,t.wy,t.Y)
1!==t.wy.val(r)&&(r=t.dw.next(r,2))
var a=t.wy.extent(r)[1],o=t.wy.end(r)
return n=n>a?a:n||a,t.wy.end(t.date.next(t.Y.val(o),t.M.val(o),t.D.val(o)+7*(n-1)))}},t.year=t.Y={name:"year",range:31556900,val:function(e){return e.Y||(e.Y=t.date.getYear.call(e))},isValid:function(e,n){return t.Y.val(e)===n},extent:function(){return[1970,2099]},start:function(e){return e.YStart||(e.YStart=t.date.next(t.Y.val(e)))},end:function(e){return e.YEnd||(e.YEnd=t.date.prev(t.Y.val(e)))},next:function(e,n){return n>t.Y.val(e)&&n<=t.Y.extent()[1]?t.date.next(n):t.NEVER},prev:function(e,n){return n<t.Y.val(e)&&n>=t.Y.extent()[0]?t.date.prev(n):t.NEVER}},t.fullDate=t.fd={name:"full date",range:1,val:function(t){return t.fd||(t.fd=t.getTime())},isValid:function(e,n){return t.fd.val(e)===n},extent:function(){return[0,3250368e7]},start:function(t){return t},end:function(t){return t},next:function(e,n){return t.fd.val(e)<n?new Date(n):t.NEVER},prev:function(e,n){return t.fd.val(e)>n?new Date(n):t.NEVER}},t.modifier={},t.modifier.after=t.modifier.a=function(t,e){var n=e[0]
return{name:"after "+t.name,range:(t.extent(new Date)[1]-n)*t.range,val:t.val,isValid:function(t,e){return this.val(t)>=n},extent:t.extent,start:t.start,end:t.end,next:function(e,i){return i!=n&&(i=t.extent(e)[0]),t.next(e,i)},prev:function(e,i){return i=i===n?t.extent(e)[1]:n-1,t.prev(e,i)}}},t.modifier.before=t.modifier.b=function(t,e){var n=e[e.length-1]
return{name:"before "+t.name,range:t.range*(n-1),val:t.val,isValid:function(t,e){return this.val(t)<n},extent:t.extent,start:t.start,end:t.end,next:function(e,i){return i=i===n?t.extent(e)[0]:n,t.next(e,i)},prev:function(e,i){return i=i===n?n-1:t.extent(e)[1],t.prev(e,i)}}},t.compile=function(e){var n,i=[],r=0
for(var a in e){var o=a.split("_"),s=o[0],l=o[1],u=e[a],h=l?t.modifier[l](t[s],u):t[s]
i.push({constraint:h,vals:u}),r++}return i.sort(function(t,e){var n=t.constraint.range,i=e.constraint.range
return i<n?-1:i>n?1:0}),n=i[r-1].constraint,{start:function(e,a){for(var o,s=a,l=t.array[e],u=1e3;u--&&!o&&s;){o=!0
for(var h=0;h<r;h++){var c=i[h].constraint,f=c.val(s),d=c.extent(s),p=l(f,i[h].vals,d)
if(!c.isValid(s,p)){s=c[e](s,p),o=!1
break}}}return s!==t.NEVER&&(s="next"===e?n.start(s):n.end(s)),s},end:function(e,n){for(var a,o=t.array[e+"Invalid"],s="next"===e?function(t,e){return t.getTime()>e.getTime()}:function(t,e){return e.getTime()>t.getTime()},l=r-1;l>=0;l--){var u,h=i[l].constraint,c=h.val(n),f=h.extent(n),d=o(c,i[l].vals,f)
void 0!==d&&(!(u=h[e](n,d))||a&&!s(a,u)||(a=u))}return a},tick:function(e,i){return new Date("next"===e?n.end(i).getTime()+t.SEC:n.start(i).getTime()-t.SEC)},tickStart:function(t){return n.start(t)}}},t.schedule=function(e){if(!e)throw new Error("Missing schedule definition.")
if(!e.schedules)throw new Error("Definition must include at least one schedule.")
for(var n=[],i=e.schedules.length,r=[],a=e.exceptions?e.exceptions.length:0,o=0;o<i;o++)n.push(t.compile(e.schedules[o]))
for(var s=0;s<a;s++)r.push(t.compile(e.exceptions[s]))
function l(e,i,o,s,l){var x,_,b,w=v(e),S=i,M=1e3,T=[],k=[],D=[],C="next"===e,A=C?0:1,I=C?1:0
if(!(o=o?new Date(o):new Date)||!o.getTime())throw new Error("Invalid start date.")
for(function(t,e,n,i){for(var r=0,a=e.length;r<a;r++)n[r]=e[r].start(t,i)}(e,n,T,o),function(e,n,i,r){v(e)
for(var a=0,o=n.length;a<o;a++){var s=n[a].start(e,r)
i[a]=s?[s,n[a].end(e,s)]:t.NEVER}}(e,r,k,o);M--&&S&&(x=y(T,w))&&(!s||!w(x,s));)if(a&&(c(e,r,k,x),_=p(e,k,x)))h(e,n,T,_)
else{if(l){var O=g(k,w)
_=m(e,n,T,x,O)
var P=C?[new Date(Math.max(o,x)),_?new Date(s?Math.min(_,s):_):void 0]:[_?new Date(s?Math.max(s,_.getTime()+t.SEC):_.getTime()+t.SEC):void 0,new Date(Math.min(o,x.getTime()+t.SEC))]
if(b&&P[A].getTime()===b[I].getTime()?(b[I]=P[I],S++):(b=P,D.push(b)),!_)break
h(e,n,T,_)}else D.push(C?new Date(Math.max(o,x)):d(n,T,x,s)),f(e,n,T,x)
S--}for(var L=0,E=D.length;L<E;L++){var R=D[L]
D[L]="[object Array]"===Object.prototype.toString.call(R)?[u(R[0]),u(R[1])]:u(R)}return 0===D.length?t.NEVER:1===i?D[0]:D}function u(t){if(t instanceof Date&&!isNaN(t.valueOf()))return new Date(t)}function h(t,e,n,i){for(var r=v(t),a=0,o=e.length;a<o;a++)n[a]&&!r(n[a],i)&&(n[a]=e[a].start(t,i))}function c(e,n,i,r){for(var a=v(e),o=0,s=n.length;o<s;o++)if(i[o]&&!a(i[o][0],r)){var l=n[o].start(e,r)
i[o]=l?[l,n[o].end(e,l)]:t.NEVER}}function f(t,e,n,i){for(var r=0,a=e.length;r<a;r++)n[r]&&n[r].getTime()===i.getTime()&&(n[r]=e[r].start(t,e[r].tick(t,i)))}function d(t,e,n,i){for(var r,a=0,o=e.length;a<o;a++)if(e[a]&&e[a].getTime()===n.getTime()){var s=t[a].tickStart(n)
if(i&&s<i)return i;(!r||s>r)&&(r=s)}return r}function p(t,e,n){for(var i,r=v(t),a=0,o=e.length;a<o;a++){var s=e[a]
!s||r(s[0],n)||s[1]&&!r(s[1],n)||i&&!r(s[1],i)||(i=s[1])}return i}function g(t,e){for(var n,i=0,r=t.length;i<r;i++)!t[i]||n&&!e(n,t[i][0])||(n=t[i][0])
return n}function m(t,e,n,i,r){for(var a,o=v(t),s=0,l=e.length;s<l;s++){var u=n[s]
if(u&&u.getTime()===i.getTime()){var h=e[s].end(t,u)
if(r&&(!h||o(h,r)))return r
a&&!o(h,a)||(a=h)}}return a}function v(t){return"next"===t?function(t,e){return!e||t.getTime()>e.getTime()}:function(t,e){return!t||e.getTime()>t.getTime()}}function y(t,e){for(var n=t[0],i=1,r=t.length;i<r;i++)t[i]&&e(n,t[i])&&(n=t[i])
return n}return{isValid:function(e){return l("next",1,e,e)!==t.NEVER},next:function(t,e,n){return l("next",t||1,e,n)},prev:function(t,e,n){return l("prev",t||1,e,n)},nextRange:function(t,e,n){return l("next",t||1,e,n,!0)},prevRange:function(t,e,n){return l("prev",t||1,e,n,!0)}}},t.setTimeout=function(e,n){var i,r=t.schedule(n)
return e&&function t(){var n=Date.now(),a=r.next(2,n)
if(a[0]){var o=a[0].getTime()-n
o<1e3&&(o=a[1]?a[1].getTime()-n:1e3),i=o<2147483647?setTimeout(e,o):setTimeout(t,2147483647)}else i=void 0}(),{isDone:function(){return!i},clear:function(){clearTimeout(i)}}},t.setInterval=function(e,n){if(e){var i=t.setTimeout(function a(){r||(e(),i=t.setTimeout(a,n))},n),r=i.isDone()
return{isDone:function(){return i.isDone()},clear:function(){r=!0,i.clear()}}}},t.date={},t.date.timezone=function(e){t.date.build=e?function(t,e,n,i,r,a){return new Date(t,e,n,i,r,a)}:function(t,e,n,i,r,a){return new Date(Date.UTC(t,e,n,i,r,a))}
var n=e?"get":"getUTC",i=Date.prototype
t.date.getYear=i[n+"FullYear"],t.date.getMonth=i[n+"Month"],t.date.getDate=i[n+"Date"],t.date.getDay=i[n+"Day"],t.date.getHour=i[n+"Hours"],t.date.getMin=i[n+"Minutes"],t.date.getSec=i[n+"Seconds"],t.date.isUTC=!e},t.date.UTC=function(){t.date.timezone(!1)},t.date.localTime=function(){t.date.timezone(!0)},t.date.UTC(),t.SEC=1e3,t.MIN=60*t.SEC,t.HOUR=60*t.MIN,t.DAY=24*t.HOUR,t.WEEK=7*t.DAY,t.DAYS_IN_MONTH=[31,28,31,30,31,30,31,31,30,31,30,31],t.NEVER=0,t.date.next=function(e,n,i,r,a,o){return t.date.build(e,void 0!==n?n-1:0,void 0!==i?i:1,r||0,a||0,o||0)},t.date.nextRollover=function(e,n,i,r){var a=i.val(e),o=i.extent(e)[1]
return(n||o)<=a||n>o?new Date(r.end(e).getTime()+t.SEC):r.start(e)},t.date.prev=function(e,n,i,r,a,o){var s=arguments.length
return n=s<2?11:n-1,i=s<3?t.D.extent(t.date.next(e,n+1))[1]:i,r=s<4?23:r,a=s<5?59:a,o=s<6?59:o,t.date.build(e,n,i,r,a,o)},t.date.prevRollover=function(t,e,n,i){return e>=n.val(t)||!e?i.start(i.prev(t,i.val(t)-1)):i.start(t)},t.parse={},t.parse.cron=function(t,e){var n={JAN:1,FEB:2,MAR:3,APR:4,MAY:5,JUN:6,JUL:7,AUG:8,SEP:9,OCT:10,NOV:11,DEC:12,SUN:1,MON:2,TUE:3,WED:4,THU:5,FRI:6,SAT:7},i={"* * * * * *":"0/1 * * * * *","@YEARLY":"0 0 1 1 *","@ANNUALLY":"0 0 1 1 *","@MONTHLY":"0 0 1 * *","@WEEKLY":"0 0 * * 0","@DAILY":"0 0 * * *","@HOURLY":"0 * * * *"},r={s:[0,0,59],m:[1,0,59],h:[2,0,23],D:[3,1,31],M:[4,1,12],Y:[6,1970,2099],d:[5,1,7,1]}
function a(t,e,i){return isNaN(t)?n[t]||null:Math.min(+t+(e||0),i||9999)}function o(t,e,n,i,r){var a=n
for(t[e]||(t[e]=[]);a<=i;)t[e].indexOf(a)<0&&t[e].push(a),a+=r||1
t[e].sort(function(t,e){return t-e})}function s(t,e,n,i){(e.d&&!e.dc||e.dc&&e.dc.indexOf(i)<0)&&(t.push(function(t){var e,n={}
for(e in t)"dc"!==e&&"d"!==e&&(n[e]=t[e].slice(0))
return n}(e)),e=t[t.length-1]),o(e,"d",n,n),o(e,"dc",i,i)}function l(t,e,i,r,l,u){var h,c,f=e.schedules,d=f[f.length-1]
"L"===t&&(t=r-1),null!==(h=a(t,u,l))?o(d,i,h,h):null!==(h=a(t.replace("W",""),u,l))?function(t,e,i){var r={},a={}
1===i?(o(e,"D",1,3),o(e,"d",n.MON,n.FRI),o(r,"D",2,2),o(r,"d",n.TUE,n.FRI),o(a,"D",3,3),o(a,"d",n.TUE,n.FRI)):(o(e,"D",i-1,i+1),o(e,"d",n.MON,n.FRI),o(r,"D",i-1,i-1),o(r,"d",n.MON,n.THU),o(a,"D",i+1,i+1),o(a,"d",n.TUE,n.FRI)),t.exceptions.push(r),t.exceptions.push(a)}(e,d,h):null!==(h=a(t.replace("L",""),u,l))?s(f,d,h,r-1):2===(c=t.split("#")).length?s(f,d,h=a(c[0],u,l),a(c[1])):function(t,e,n,i,r,s){var l=t.split("/"),u=+l[1],h=l[0]
if("*"!==h&&"0"!==h){var c=h.split("-")
i=a(c[0],s,r),r=a(c[1],s,r)||r}o(e,n,i,r,u)}(t,d,i,r,l,u)}function u(t){return t.indexOf("#")>-1||t.indexOf("L")>0}function h(t,e){return u(t)&&!u(e)?1:t-e}var c=function(t){var e=t.toUpperCase()
return i[e]||e}(t)
return function(t){var e,n,i,a,o={schedules:[{}],exceptions:[]},s=t.replace(/(\s)+/g," ").split(" ")
for(e in r)if((i=s[(n=r[e])[0]])&&"*"!==i&&"?"!==i){var u,c=(a=i.split(",").sort(h)).length
for(u=0;u<c;u++)l(a[u],o,e,n[1],n[2],n[3])}return o}(e?c:"0 "+c)},t.parse.recur=function(){var e,n,i,r,a,o,s,l,u,h=[],c=[],f=h
function d(t,h,c){if(t=a?t+"_"+a:t,e||(f.push({}),e=f[0]),e[t]||(e[t]=[]),n=e[t],r){for(i=[],l=h;l<=c;l+=r)i.push(l)
u={n:t,x:r,c:n.length,m:c}}var d=(i=o?[h]:s?[c]:i).length
for(l=0;l<d;l+=1){var p=i[l]
n.indexOf(p)<0&&n.push(p)}i=r=a=o=s=0}return{schedules:h,exceptions:c,on:function(){return i=arguments[0]instanceof Array?arguments[0]:arguments,this},every:function(t){return r=t||1,this},after:function(t){return a="a",i=[t],this},before:function(t){return a="b",i=[t],this},first:function(){return o=1,this},last:function(){return s=1,this},time:function(){for(var t=0,e=i.length;t<e;t++){var n=i[t].split(":")
n.length<3&&n.push(0),i[t]=3600*+n[0]+60*+n[1]+ +n[2]}return d("t"),this},second:function(){return d("s",0,59),this},minute:function(){return d("m",0,59),this},hour:function(){return d("h",0,23),this},dayOfMonth:function(){return d("D",1,s?0:31),this},dayOfWeek:function(){return d("d",1,7),this},onWeekend:function(){return i=[1,7],this.dayOfWeek()},onWeekday:function(){return i=[2,3,4,5,6],this.dayOfWeek()},dayOfWeekCount:function(){return d("dc",1,s?0:5),this},dayOfYear:function(){return d("dy",1,s?0:366),this},weekOfMonth:function(){return d("wm",1,s?0:5),this},weekOfYear:function(){return d("wy",1,s?0:53),this},month:function(){return d("M",1,12),this},year:function(){return d("Y",1970,2450),this},fullDate:function(){for(var t=0,e=i.length;t<e;t++)i[t]=i[t].getTime()
return d("fd"),this},customModifier:function(e,n){if(!t.modifier[e])throw new Error("Custom modifier "+e+" not recognized!")
return a=e,i=arguments[1]instanceof Array?arguments[1]:[arguments[1]],this},customPeriod:function(e){var n=t[e]
if(!n)throw new Error("Custom time period "+e+" not recognized!")
return d(e,n.extent(new Date)[0],n.extent(new Date)[1]),this},startingOn:function(t){return this.between(t,u.m)},between:function(t,n){return e[u.n]=e[u.n].splice(0,u.c),r=u.x,d(u.n,t,n),this},and:function(){return e=f[f.push({})-1],this},except:function(){return f=c,e=null,this}}},t.parse.text=function(e){var n,i=t.parse.recur,r=0,a="",o={eof:/^$/,rank:/^((\d\d\d\d)|([2-5]?1(st)?|[2-5]?2(nd)?|[2-5]?3(rd)?|(0|[1-5]?[4-9]|[1-5]0|1[1-3])(th)?))\b/,time:/^((([0]?[1-9]|1[0-2]):[0-5]\d(\s)?(am|pm))|(([0]?\d|1\d|2[0-3]):[0-5]\d))\b/,dayName:/^((sun|mon|tue(s)?|wed(nes)?|thu(r(s)?)?|fri|sat(ur)?)(day)?)\b/,monthName:/^(jan(uary)?|feb(ruary)?|ma((r(ch)?)?|y)|apr(il)?|ju(ly|ne)|aug(ust)?|oct(ober)?|(sept|nov|dec)(ember)?)\b/,yearIndex:/^(\d\d\d\d)\b/,every:/^every\b/,after:/^after\b/,before:/^before\b/,second:/^(s|sec(ond)?(s)?)\b/,minute:/^(m|min(ute)?(s)?)\b/,hour:/^(h|hour(s)?)\b/,day:/^(day(s)?( of the month)?)\b/,dayInstance:/^day instance\b/,dayOfWeek:/^day(s)? of the week\b/,dayOfYear:/^day(s)? of the year\b/,weekOfYear:/^week(s)?( of the year)?\b/,weekOfMonth:/^week(s)? of the month\b/,weekday:/^weekday\b/,weekend:/^weekend\b/,month:/^month(s)?\b/,year:/^year(s)?\b/,between:/^between (the)?\b/,start:/^(start(ing)? (at|on( the)?)?)\b/,at:/^(at|@)\b/,and:/^(,|and\b)/,except:/^(except\b)/,also:/(also)\b/,first:/^(first)\b/,last:/^last\b/,in:/^in\b/,of:/^of\b/,onthe:/^on the\b/,on:/^on\b/,through:/(-|^(to|through)\b)/},s={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12,sun:1,mon:2,tue:3,wed:4,thu:5,fri:6,sat:7,"1st":1,fir:1,"2nd":2,sec:2,"3rd":3,thi:3,"4th":4,for:4}
function l(t,e,n,i){return{startPos:t,endPos:e,text:n,type:i}}function u(t){var e,n,i,o,s,u,h=t instanceof Array?t:[t],c=/\s+/
for(h.push(c),s=r;!e||e.type===c;){u=-1,n=a.substring(s),e=l(s,s,a.split(c)[0])
var f,d=h.length
for(f=0;f<d;f++)(i=(o=h[f]).exec(n))&&0===i.index&&i[0].length>u&&(e=l(s,s+(u=i[0].length),n.substring(0,u),o))
e.type===c&&(s=e.endPos)}return e}function h(t){var e=u(t)
return r=e.endPos,e}function c(t){for(var e=+y(t),n=m(o.through)?+y(t):e,i=[],r=e;r<=n;r++)i.push(r)
return i}function f(t){for(var e=c(t);m(o.and);)e=e.concat(c(t))
return e}function d(t){var e,n,i,r
m(o.weekend)?t.on(s.sun,s.sat).dayOfWeek():m(o.weekday)?t.on(s.mon,s.tue,s.wed,s.thu,s.fri).dayOfWeek():(e=y(o.rank),t.every(e),n=g(t),m(o.start)?(e=y(o.rank),t.startingOn(e),v(n.type)):m(o.between)&&(i=y(o.rank),m(o.and)&&(r=y(o.rank),t.between(i,r))))}function p(t){m(o.first)?t.first():m(o.last)?t.last():t.on(f(o.rank)),g(t)}function g(t){var e=v([o.second,o.minute,o.hour,o.dayOfYear,o.dayOfWeek,o.dayInstance,o.day,o.month,o.year,o.weekOfMonth,o.weekOfYear])
switch(e.type){case o.second:t.second()
break
case o.minute:t.minute()
break
case o.hour:t.hour()
break
case o.dayOfYear:t.dayOfYear()
break
case o.dayOfWeek:t.dayOfWeek()
break
case o.dayInstance:t.dayOfWeekCount()
break
case o.day:t.dayOfMonth()
break
case o.weekOfMonth:t.weekOfMonth()
break
case o.weekOfYear:t.weekOfYear()
break
case o.month:t.month()
break
case o.year:t.year()
break
default:n=r}return e}function m(t){var e=u(t).type===t
return e&&h(t),e}function v(t){var e=h(t)
return e.type?e.text=function(t,e){var n=t
switch(e){case o.time:var i=t.split(/(:|am|pm)/),r="pm"===i[3]&&i[0]<12?parseInt(i[0],10)+12:i[0],a=i[2].trim()
n=(1===r.length?"0":"")+r+":"+a
break
case o.rank:n=parseInt(/^\d+/.exec(t)[0],10)
break
case o.monthName:case o.dayName:n=s[t.substring(0,3)]}return n}(e.text,t):n=r,e}function y(t){return v(t).text}return function(t){r=0,a=t,n=-1
for(var e=i();r<a.length&&n<0;)switch(v([o.every,o.after,o.before,o.onthe,o.on,o.of,o.in,o.at,o.and,o.except,o.also]).type){case o.every:d(e)
break
case o.after:void 0!==u(o.time).type?(e.after(y(o.time)),e.time()):(e.after(y(o.rank)),g(e))
break
case o.before:void 0!==u(o.time).type?(e.before(y(o.time)),e.time()):(e.before(y(o.rank)),g(e))
break
case o.onthe:p(e)
break
case o.on:e.on(f(o.dayName)).dayOfWeek()
break
case o.of:e.on(f(o.monthName)).month()
break
case o.in:e.on(f(o.yearIndex)).year()
break
case o.at:for(e.on(y(o.time)).time();m(o.and);)e.on(y(o.time)).time()
break
case o.and:break
case o.also:e.and()
break
case o.except:e.except()
break
default:n=r}return{schedules:e.schedules,exceptions:e.exceptions,error:n}}(e.toLowerCase())},t}()}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[11],{1282:function(t,e,n){t.exports=function(){"use strict"
var t=Object.freeze||function(t){return t},e=t(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),n=t(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),i=t(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),r=t(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),a=t(["#text"]),o=Object.freeze||function(t){return t},s=o(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),l=o(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),u=o(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),h=o(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),c=Object.hasOwnProperty,f=Object.setPrototypeOf,d=("undefined"!=typeof Reflect&&Reflect).apply
function p(t,e){f&&f(t,null)
for(var n=e.length;n--;){var i=e[n]
if("string"==typeof i){var r=i.toLowerCase()
r!==i&&(Object.isFrozen(e)||(e[n]=r),i=r)}t[i]=!0}return t}function g(t){var e={},n=void 0
for(n in t)d(c,t,[n])&&(e[n]=t[n])
return e}d||(d=function(t,e,n){return t.apply(e,n)})
var m=Object.seal||function(t){return t},v=m(/\{\{[\s\S]*|[\s\S]*\}\}/gm),y=m(/<%[\s\S]*|[\s\S]*%>/gm),x=m(/^data-[\-\w.\u00B7-\uFFFF]/),_=m(/^aria-[\-\w]+$/),b=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),w=m(/^(?:\w+script|data):/i),S=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
function T(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e]
return n}return Array.from(t)}var k=("undefined"!=typeof Reflect&&Reflect).apply,D=Array.prototype.slice,C=Object.freeze
k||(k=function(t,e,n){return t.apply(e,n)})
return function t(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"undefined"==typeof window?null:window,c=function(e){return t(e)}
if(c.version="1.0.11",c.removed=[],!o||!o.document||9!==o.document.nodeType)return c.isSupported=!1,c
var f=o.document,d=!1,m=!1,A=o.document,I=o.DocumentFragment,O=o.HTMLTemplateElement,P=o.Node,L=o.NodeFilter,E=o.NamedNodeMap,R=void 0===E?o.NamedNodeMap||o.MozNamedAttrMap:E,N=o.Text,z=o.Comment,B=o.DOMParser,F=o.TrustedTypes
if("function"==typeof O){var H=A.createElement("template")
H.content&&H.content.ownerDocument&&(A=H.content.ownerDocument)}var V=function(t,e){if("object"!==(void 0===t?"undefined":M(t))||"function"!=typeof t.createPolicy)return null
var n=null
e.currentScript&&e.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=e.currentScript.getAttribute("data-tt-policy-suffix"))
var i="dompurify"+(n?"#"+n:"")
try{return t.createPolicy(i,{createHTML:function(t){return t}})}catch(t){return console.warn("TrustedTypes policy "+i+" could not be created."),null}}(F,f),W=V?V.createHTML(""):"",Y=A,U=Y.implementation,G=Y.createNodeIterator,j=Y.getElementsByTagName,q=Y.createDocumentFragment,X=f.importNode,$={}
c.isSupported=U&&void 0!==U.createHTMLDocument&&9!==A.documentMode
var Z=v,K=y,J=x,Q=_,tt=w,et=S,nt=b,it=null,rt=p({},[].concat(T(e),T(n),T(i),T(r),T(a))),at=null,ot=p({},[].concat(T(s),T(l),T(u),T(h))),st=null,lt=null,ut=!0,ht=!0,ct=!1,ft=!1,dt=!1,pt=!1,gt=!1,mt=!1,vt=!1,yt=!1,xt=!1,_t=!0,bt=!0,wt=!1,St={},Mt=p({},["audio","head","math","script","style","template","svg","video"]),Tt=p({},["audio","video","img","source","image"]),kt=null,Dt=p({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ct=null,At=A.createElement("form"),It=function(t){Ct&&Ct===t||(t&&"object"===(void 0===t?"undefined":M(t))||(t={}),it="ALLOWED_TAGS"in t?p({},t.ALLOWED_TAGS):rt,at="ALLOWED_ATTR"in t?p({},t.ALLOWED_ATTR):ot,kt="ADD_URI_SAFE_ATTR"in t?p({},t.ADD_URI_SAFE_ATTR):Dt,st="FORBID_TAGS"in t?p({},t.FORBID_TAGS):{},lt="FORBID_ATTR"in t?p({},t.FORBID_ATTR):{},St="USE_PROFILES"in t&&t.USE_PROFILES,ut=!1!==t.ALLOW_ARIA_ATTR,ht=!1!==t.ALLOW_DATA_ATTR,ct=t.ALLOW_UNKNOWN_PROTOCOLS||!1,ft=t.SAFE_FOR_JQUERY||!1,dt=t.SAFE_FOR_TEMPLATES||!1,pt=t.WHOLE_DOCUMENT||!1,vt=t.RETURN_DOM||!1,yt=t.RETURN_DOM_FRAGMENT||!1,xt=t.RETURN_DOM_IMPORT||!1,mt=t.FORCE_BODY||!1,_t=!1!==t.SANITIZE_DOM,bt=!1!==t.KEEP_CONTENT,wt=t.IN_PLACE||!1,nt=t.ALLOWED_URI_REGEXP||nt,dt&&(ht=!1),yt&&(vt=!0),St&&(it=p({},[].concat(T(a))),at=[],!0===St.html&&(p(it,e),p(at,s)),!0===St.svg&&(p(it,n),p(at,l),p(at,h)),!0===St.svgFilters&&(p(it,i),p(at,l),p(at,h)),!0===St.mathMl&&(p(it,r),p(at,u),p(at,h))),t.ADD_TAGS&&(it===rt&&(it=g(it)),p(it,t.ADD_TAGS)),t.ADD_ATTR&&(at===ot&&(at=g(at)),p(at,t.ADD_ATTR)),t.ADD_URI_SAFE_ATTR&&p(kt,t.ADD_URI_SAFE_ATTR),bt&&(it["#text"]=!0),pt&&p(it,["html","head","body"]),it.table&&p(it,["tbody"]),C&&C(t),Ct=t)},Ot=function(t){c.removed.push({element:t})
try{t.parentNode.removeChild(t)}catch(e){t.outerHTML=W}},Pt=function(t,e){try{c.removed.push({attribute:e.getAttributeNode(t),from:e})}catch(t){c.removed.push({attribute:null,from:e})}e.removeAttribute(t)},Lt=function(t){var e=void 0,n=void 0
if(mt)t="<remove></remove>"+t
else{var i=t.match(/^[\s]+/);(n=i&&i[0])&&(t=t.slice(n.length))}if(d)try{e=(new B).parseFromString(t,"text/html")}catch(t){}if(m&&p(st,["title"]),!e||!e.documentElement){var r=(e=U.createHTMLDocument("")).body
r.parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=V?V.createHTML(t):t}return n&&e.body.insertBefore(A.createTextNode(n),e.body.childNodes[0]||null),j.call(e,pt?"html":"body")[0]}
c.isSupported&&(function(){try{Lt('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(d=!0)}catch(t){}}(),function(){try{Lt("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(m=!0)}catch(t){}}())
var Et=function(t){return G.call(t.ownerDocument||t,t,L.SHOW_ELEMENT|L.SHOW_COMMENT|L.SHOW_TEXT,function(){return L.FILTER_ACCEPT},!1)},Rt=function(t){return"object"===(void 0===P?"undefined":M(P))?t instanceof P:t&&"object"===(void 0===t?"undefined":M(t))&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Nt=function(t,e,n){$[t]&&$[t].forEach(function(t){t.call(c,e,n,Ct)})},zt=function(t){var e=void 0
if(Nt("beforeSanitizeElements",t,null),function(t){return!(t instanceof N||t instanceof z||"string"==typeof t.nodeName&&"string"==typeof t.textContent&&"function"==typeof t.removeChild&&t.attributes instanceof R&&"function"==typeof t.removeAttribute&&"function"==typeof t.setAttribute)}(t))return Ot(t),!0
var n=t.nodeName.toLowerCase()
if(Nt("uponSanitizeElement",t,{tagName:n,allowedTags:it}),!it[n]||st[n]){if(bt&&!Mt[n]&&"function"==typeof t.insertAdjacentHTML)try{var i=t.innerHTML
t.insertAdjacentHTML("AfterEnd",V?V.createHTML(i):i)}catch(t){}return Ot(t),!0}return"noscript"===n&&t.innerHTML.match(/<\/noscript/i)?(Ot(t),!0):"noembed"===n&&t.innerHTML.match(/<\/noembed/i)?(Ot(t),!0):(!ft||t.firstElementChild||t.content&&t.content.firstElementChild||!/</g.test(t.textContent)||(c.removed.push({element:t.cloneNode()}),t.innerHTML?t.innerHTML=t.innerHTML.replace(/</g,"&lt;"):t.innerHTML=t.textContent.replace(/</g,"&lt;")),dt&&3===t.nodeType&&(e=(e=(e=t.textContent).replace(Z," ")).replace(K," "),t.textContent!==e&&(c.removed.push({element:t.cloneNode()}),t.textContent=e)),Nt("afterSanitizeElements",t,null),!1)},Bt=function(t,e,n){if(_t&&("id"===e||"name"===e)&&(n in A||n in At))return!1
if(ht&&J.test(e));else if(ut&&Q.test(e));else{if(!at[e]||lt[e])return!1
if(kt[e]);else if(nt.test(n.replace(et,"")));else if("src"!==e&&"xlink:href"!==e||"script"===t||0!==n.indexOf("data:")||!Tt[t])if(ct&&!tt.test(n.replace(et,"")));else if(n)return!1}return!0},Ft=function(t){var e=void 0,n=void 0,i=void 0,r=void 0,a=void 0
Nt("beforeSanitizeAttributes",t,null)
var o=t.attributes
if(o){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:at}
for(a=o.length;a--;){var l=e=o[a],u=l.name,h=l.namespaceURI
if(n=e.value.trim(),i=u.toLowerCase(),s.attrName=i,s.attrValue=n,s.keepAttr=!0,Nt("uponSanitizeAttribute",t,s),n=s.attrValue,"name"===i&&"IMG"===t.nodeName&&o.id)r=o.id,o=k(D,o,[]),Pt("id",t),Pt(u,t),o.indexOf(r)>a&&t.setAttribute("id",r.value)
else{if("INPUT"===t.nodeName&&"type"===i&&"file"===n&&s.keepAttr&&(at[i]||!lt[i]))continue
"id"===u&&t.setAttribute(u,""),Pt(u,t)}if(s.keepAttr){dt&&(n=(n=n.replace(Z," ")).replace(K," "))
var f=t.nodeName.toLowerCase()
if(Bt(f,i,n))try{h?t.setAttributeNS(h,u,n):t.setAttribute(u,n),c.removed.pop()}catch(t){}}}Nt("afterSanitizeAttributes",t,null)}},Ht=function t(e){var n=void 0,i=Et(e)
for(Nt("beforeSanitizeShadowDOM",e,null);n=i.nextNode();)Nt("uponSanitizeShadowNode",n,null),zt(n)||(n.content instanceof I&&t(n.content),Ft(n))
Nt("afterSanitizeShadowDOM",e,null)}
return c.sanitize=function(t,e){var n=void 0,i=void 0,r=void 0,a=void 0,s=void 0
if(t||(t="\x3c!--\x3e"),"string"!=typeof t&&!Rt(t)){if("function"!=typeof t.toString)throw new TypeError("toString is not a function")
if("string"!=typeof(t=t.toString()))throw new TypeError("dirty is not a string, aborting")}if(!c.isSupported){if("object"===M(o.toStaticHTML)||"function"==typeof o.toStaticHTML){if("string"==typeof t)return o.toStaticHTML(t)
if(Rt(t))return o.toStaticHTML(t.outerHTML)}return t}if(gt||It(e),c.removed=[],wt);else if(t instanceof P)1===(i=(n=Lt("\x3c!--\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName?n=i:"HTML"===i.nodeName?n=i:n.appendChild(i)
else{if(!vt&&!dt&&!pt&&-1===t.indexOf("<"))return V?V.createHTML(t):t
if(!(n=Lt(t)))return vt?null:W}n&&mt&&Ot(n.firstChild)
for(var l=Et(wt?t:n);r=l.nextNode();)3===r.nodeType&&r===a||zt(r)||(r.content instanceof I&&Ht(r.content),Ft(r),a=r)
if(a=null,wt)return t
if(vt){if(yt)for(s=q.call(n.ownerDocument);n.firstChild;)s.appendChild(n.firstChild)
else s=n
return xt&&(s=X.call(f,s,!0)),s}var u=pt?n.outerHTML:n.innerHTML
return dt&&(u=(u=u.replace(Z," ")).replace(K," ")),V?V.createHTML(u):u},c.setConfig=function(t){It(t),gt=!0},c.clearConfig=function(){Ct=null,gt=!1},c.isValidAttribute=function(t,e,n){Ct||It({})
var i=t.toLowerCase(),r=e.toLowerCase()
return Bt(i,r,n)},c.addHook=function(t,e){"function"==typeof e&&($[t]=$[t]||[],$[t].push(e))},c.removeHook=function(t){$[t]&&$[t].pop()},c.removeHooks=function(t){$[t]&&($[t]=[])},c.removeAllHooks=function(){$={}},c}()}()}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[12],{1285:function(t,e,n){(function(e){!function(e){"use strict"
var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:g,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:g,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:g,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/}
function i(t){this.tokens=[],this.tokens.links={},this.options=t||v.defaults,this.rules=n.normal,this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,n.def=c(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=c(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=c(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",n.html=c(n.html).replace("comment",/<!--[\s\S]*?-->/).replace("closed",/<(tag)[\s\S]+?<\/\1>/).replace("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,n._tag).getRegex(),n.paragraph=c(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag","<"+n._tag).getRegex(),n.blockquote=c(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=m({},n),n.gfm=m({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=c(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=m({},n.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),i.rules=n,i.lex=function(t,e){return new i(e).lex(t)},i.prototype.lex=function(t){return t=t.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(t,!0)},i.prototype.token=function(t,e){var i,r,a,o,s,l,u,h,c,f,d
for(t=t.replace(/^ +$/gm,"");t;)if((a=this.rules.newline.exec(t))&&(t=t.substring(a[0].length),a[0].length>1&&this.tokens.push({type:"space"})),a=this.rules.code.exec(t))t=t.substring(a[0].length),a=a[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?a:a.replace(/\n+$/,"")})
else if(a=this.rules.fences.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"code",lang:a[2],text:a[3]||""})
else if(a=this.rules.heading.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"heading",depth:a[1].length,text:a[2]})
else if(e&&(a=this.rules.nptable.exec(t))){for(t=t.substring(a[0].length),l={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null
for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].split(/ *\| */)
this.tokens.push(l)}else if(a=this.rules.hr.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"hr"})
else if(a=this.rules.blockquote.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"blockquote_start"}),a=a[0].replace(/^ *> ?/gm,""),this.token(a,e),this.tokens.push({type:"blockquote_end"})
else if(a=this.rules.list.exec(t)){for(t=t.substring(a[0].length),d=(o=a[2]).length>1,this.tokens.push({type:"list_start",ordered:d,start:d?+o:""}),i=!1,f=(a=a[0].match(this.rules.item)).length,h=0;h<f;h++)u=(l=a[h]).length,~(l=l.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(u-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+u+"}","gm"),"")),this.options.smartLists&&h!==f-1&&(o===(s=n.bullet.exec(a[h+1])[0])||o.length>1&&s.length>1||(t=a.slice(h+1).join("\n")+t,h=f-1)),r=i||/\n\n(?!\s*$)/.test(l),h!==f-1&&(i="\n"===l.charAt(l.length-1),r||(r=i)),this.tokens.push({type:r?"loose_item_start":"list_item_start"}),this.token(l,!1),this.tokens.push({type:"list_item_end"})
this.tokens.push({type:"list_end"})}else if(a=this.rules.html.exec(t))t=t.substring(a[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===a[1]||"script"===a[1]||"style"===a[1]),text:a[0]})
else if(e&&(a=this.rules.def.exec(t)))t=t.substring(a[0].length),a[3]&&(a[3]=a[3].substring(1,a[3].length-1)),c=a[1].toLowerCase(),this.tokens.links[c]||(this.tokens.links[c]={href:a[2],title:a[3]})
else if(e&&(a=this.rules.table.exec(t))){for(t=t.substring(a[0].length),l={type:"table",header:a[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:a[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:a[3].replace(/(?: *\| *)?\n$/,"").split("\n")},h=0;h<l.align.length;h++)/^ *-+: *$/.test(l.align[h])?l.align[h]="right":/^ *:-+: *$/.test(l.align[h])?l.align[h]="center":/^ *:-+ *$/.test(l.align[h])?l.align[h]="left":l.align[h]=null
for(h=0;h<l.cells.length;h++)l.cells[h]=l.cells[h].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)
this.tokens.push(l)}else if(a=this.rules.lheading.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"heading",depth:"="===a[2]?1:2,text:a[1]})
else if(e&&(a=this.rules.paragraph.exec(t)))t=t.substring(a[0].length),this.tokens.push({type:"paragraph",text:"\n"===a[1].charAt(a[1].length-1)?a[1].slice(0,-1):a[1]})
else if(a=this.rules.text.exec(t))t=t.substring(a[0].length),this.tokens.push({type:"text",text:a[0]})
else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))
return this.tokens}
var r={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:g,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:g,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/}
function a(t,e){if(this.options=e||v.defaults,this.links=t,this.rules=r.normal,this.renderer=this.options.renderer||new o,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.")
this.options.gfm?this.options.breaks?this.rules=r.breaks:this.rules=r.gfm:this.options.pedantic&&(this.rules=r.pedantic)}function o(t){this.options=t||{}}function s(){}function l(t){this.tokens=[],this.token=null,this.options=t||v.defaults,this.options.renderer=this.options.renderer||new o,this.renderer=this.options.renderer,this.renderer.options=this.options}function u(t,e){return t.replace(e?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function h(t){return t.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(t,e){return"colon"===(e=e.toLowerCase())?":":"#"===e.charAt(0)?"x"===e.charAt(1)?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""})}function c(t,e){return t=t.source,e=e||"",{replace:function(e,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),t=t.replace(e,n),this},getRegex:function(){return new RegExp(t,e)}}}function f(t,e){return d[" "+t]||(/^[^:]+:\/*[^/]*$/.test(t)?d[" "+t]=t+"/":d[" "+t]=t.replace(/[^/]*$/,"")),t=d[" "+t],"//"===e.slice(0,2)?t.replace(/:[\s\S]*/,":")+e:"/"===e.charAt(0)?t.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+e:t+e}r._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,r._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,r.autolink=c(r.autolink).replace("scheme",r._scheme).replace("email",r._email).getRegex(),r._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,r._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,r.link=c(r.link).replace("inside",r._inside).replace("href",r._href).getRegex(),r.reflink=c(r.reflink).replace("inside",r._inside).getRegex(),r.normal=m({},r),r.pedantic=m({},r.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),r.gfm=m({},r.normal,{escape:c(r.escape).replace("])","~|])").getRegex(),url:c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",r._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(r.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),r.breaks=m({},r.gfm,{br:c(r.br).replace("{2,}","*").getRegex(),text:c(r.gfm.text).replace("{2,}","*").getRegex()}),a.rules=r,a.output=function(t,e,n){return new a(e,n).output(t)},a.prototype.output=function(t){for(var e,n,i,r,a="";t;)if(r=this.rules.escape.exec(t))t=t.substring(r[0].length),a+=r[1]
else if(r=this.rules.autolink.exec(t))t=t.substring(r[0].length),i="@"===r[2]?"mailto:"+(n=u(this.mangle(r[1]))):n=u(r[1]),a+=this.renderer.link(i,null,n)
else if(this.inLink||!(r=this.rules.url.exec(t))){if(r=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(r[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(r[0])&&(this.inLink=!1),t=t.substring(r[0].length),a+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):u(r[0]):r[0]
else if(r=this.rules.link.exec(t))t=t.substring(r[0].length),this.inLink=!0,a+=this.outputLink(r,{href:r[2],title:r[3]}),this.inLink=!1
else if((r=this.rules.reflink.exec(t))||(r=this.rules.nolink.exec(t))){if(t=t.substring(r[0].length),e=(r[2]||r[1]).replace(/\s+/g," "),!(e=this.links[e.toLowerCase()])||!e.href){a+=r[0].charAt(0),t=r[0].substring(1)+t
continue}this.inLink=!0,a+=this.outputLink(r,e),this.inLink=!1}else if(r=this.rules.strong.exec(t))t=t.substring(r[0].length),a+=this.renderer.strong(this.output(r[2]||r[1]))
else if(r=this.rules.em.exec(t))t=t.substring(r[0].length),a+=this.renderer.em(this.output(r[2]||r[1]))
else if(r=this.rules.code.exec(t))t=t.substring(r[0].length),a+=this.renderer.codespan(u(r[2].trim(),!0))
else if(r=this.rules.br.exec(t))t=t.substring(r[0].length),a+=this.renderer.br()
else if(r=this.rules.del.exec(t))t=t.substring(r[0].length),a+=this.renderer.del(this.output(r[1]))
else if(r=this.rules.text.exec(t))t=t.substring(r[0].length),a+=this.renderer.text(u(this.smartypants(r[0])))
else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else r[0]=this.rules._backpedal.exec(r[0])[0],t=t.substring(r[0].length),"@"===r[2]?i="mailto:"+(n=u(r[0])):(n=u(r[0]),i="www."===r[1]?"http://"+n:n),a+=this.renderer.link(i,null,n)
return a},a.prototype.outputLink=function(t,e){var n=u(e.href),i=e.title?u(e.title):null
return"!"!==t[0].charAt(0)?this.renderer.link(n,i,this.output(t[1])):this.renderer.image(n,i,u(t[1]))},a.prototype.smartypants=function(t){return this.options.smartypants?t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):t},a.prototype.mangle=function(t){if(!this.options.mangle)return t
for(var e,n="",i=t.length,r=0;r<i;r++)e=t.charCodeAt(r),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";"
return n},o.prototype.code=function(t,e,n){if(this.options.highlight){var i=this.options.highlight(t,e)
null!=i&&i!==t&&(n=!0,t=i)}return e?'<pre><code class="'+this.options.langPrefix+u(e,!0)+'">'+(n?t:u(t,!0))+"\n</code></pre>\n":"<pre><code>"+(n?t:u(t,!0))+"\n</code></pre>"},o.prototype.blockquote=function(t){return"<blockquote>\n"+t+"</blockquote>\n"},o.prototype.html=function(t){return t},o.prototype.heading=function(t,e,n){return"<h"+e+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+t+"</h"+e+">\n"},o.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},o.prototype.list=function(t,e,n){var i=e?"ol":"ul"
return"<"+i+(e&&1!==n?' start="'+n+'"':"")+">\n"+t+"</"+i+">\n"},o.prototype.listitem=function(t){return"<li>"+t+"</li>\n"},o.prototype.paragraph=function(t){return"<p>"+t+"</p>\n"},o.prototype.table=function(t,e){return"<table>\n<thead>\n"+t+"</thead>\n<tbody>\n"+e+"</tbody>\n</table>\n"},o.prototype.tablerow=function(t){return"<tr>\n"+t+"</tr>\n"},o.prototype.tablecell=function(t,e){var n=e.header?"th":"td"
return(e.align?"<"+n+' style="text-align:'+e.align+'">':"<"+n+">")+t+"</"+n+">\n"},o.prototype.strong=function(t){return"<strong>"+t+"</strong>"},o.prototype.em=function(t){return"<em>"+t+"</em>"},o.prototype.codespan=function(t){return"<code>"+t+"</code>"},o.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},o.prototype.del=function(t){return"<del>"+t+"</del>"},o.prototype.link=function(t,e,n){if(this.options.sanitize){try{var i=decodeURIComponent(h(t)).replace(/[^\w:]/g,"").toLowerCase()}catch(t){return n}if(0===i.indexOf("javascript:")||0===i.indexOf("vbscript:")||0===i.indexOf("data:"))return n}this.options.baseUrl&&!p.test(t)&&(t=f(this.options.baseUrl,t))
var r='<a href="'+t+'"'
return e&&(r+=' title="'+e+'"'),r+">"+n+"</a>"},o.prototype.image=function(t,e,n){this.options.baseUrl&&!p.test(t)&&(t=f(this.options.baseUrl,t))
var i='<img src="'+t+'" alt="'+n+'"'
return e&&(i+=' title="'+e+'"'),i+(this.options.xhtml?"/>":">")},o.prototype.text=function(t){return t},s.prototype.strong=s.prototype.em=s.prototype.codespan=s.prototype.del=s.prototype.text=function(t){return t},s.prototype.link=s.prototype.image=function(t,e,n){return""+n},s.prototype.br=function(){return""},l.parse=function(t,e){return new l(e).parse(t)},l.prototype.parse=function(t){this.inline=new a(t.links,this.options),this.inlineText=new a(t.links,m({},this.options,{renderer:new s})),this.tokens=t.reverse()
for(var e="";this.next();)e+=this.tok()
return e},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var t=this.token.text;"text"===this.peek().type;)t+="\n"+this.next().text
return this.inline.output(t)},l.prototype.tok=function(){switch(this.token.type){case"space":return""
case"hr":return this.renderer.hr()
case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,h(this.inlineText.output(this.token.text)))
case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)
case"table":var t,e,n,i,r="",a=""
for(n="",t=0;t<this.token.header.length;t++)n+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]})
for(r+=this.renderer.tablerow(n),t=0;t<this.token.cells.length;t++){for(e=this.token.cells[t],n="",i=0;i<e.length;i++)n+=this.renderer.tablecell(this.inline.output(e[i]),{header:!1,align:this.token.align[i]})
a+=this.renderer.tablerow(n)}return this.renderer.table(r,a)
case"blockquote_start":for(a="";"blockquote_end"!==this.next().type;)a+=this.tok()
return this.renderer.blockquote(a)
case"list_start":a=""
for(var o=this.token.ordered,s=this.token.start;"list_end"!==this.next().type;)a+=this.tok()
return this.renderer.list(a,o,s)
case"list_item_start":for(a="";"list_item_end"!==this.next().type;)a+="text"===this.token.type?this.parseText():this.tok()
return this.renderer.listitem(a)
case"loose_item_start":for(a="";"list_item_end"!==this.next().type;)a+=this.tok()
return this.renderer.listitem(a)
case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text)
return this.renderer.html(l)
case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text))
case"text":return this.renderer.paragraph(this.parseText())}}
var d={},p=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
function g(){}function m(t){for(var e,n,i=1;i<arguments.length;i++)for(n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t}function v(t,e,n){if(null==t)throw new Error("marked(): input parameter is undefined or null")
if("string"!=typeof t)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected")
if(n||"function"==typeof e){n||(n=e,e=null)
var r,a,o=(e=m({},v.defaults,e||{})).highlight,s=0
try{r=i.lex(t,e)}catch(t){return n(t)}a=r.length
var h=function(t){if(t)return e.highlight=o,n(t)
var i
try{i=l.parse(r,e)}catch(e){t=e}return e.highlight=o,t?n(t):n(null,i)}
if(!o||o.length<3)return h()
if(delete e.highlight,!a)return h()
for(;s<r.length;s++)!function(t){"code"!==t.type?--a||h():o(t.text,t.lang,function(e,n){return e?h(e):null==n||n===t.text?--a||h():(t.text=n,t.escaped=!0,void(--a||h()))})}(r[s])}else try{return e&&(e=m({},v.defaults,e)),l.parse(i.lex(t,e),e)}catch(t){if(t.message+="\nPlease report this to https://github.com/markedjs/marked.",(e||v.defaults).silent)return"<p>An error occurred:</p><pre>"+u(t.message+"",!0)+"</pre>"
throw t}}g.exec=g,v.options=v.setOptions=function(t){return m(v.defaults,t),v},v.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new o,xhtml:!1,baseUrl:null},v.Parser=l,v.parser=l.parse,v.Renderer=o,v.TextRenderer=s,v.Lexer=i,v.lexer=i.lex,v.InlineLexer=a,v.inlineLexer=a.output,v.parse=v,t.exports=v}(this||"undefined"!=typeof window&&window)}).call(this,n(28))}}])

//# sourceMappingURL=auto-import-fastboot.map