(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[252],{4685:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>U});var n=r(7154),i=r.n(n),o=r(4575),s=r.n(o),a=r(3913),c=r.n(a),u=r(1506),l=r.n(u),f=r(2205),d=r.n(f),p=r(8585),m=r.n(p),y=r(9754),v=r.n(y),g=r(9713),h=r.n(g),O=r(9661),b=r.n(O),D=r(5293),E=r(2167),w=r(5697),P=r.n(w),j=r(1458),N=r(6479),I=r.n(N),T=r(3547),S=r(8774),R=r(8340),_=r(6715),C=r(6438);var A=function(e){d()(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var i=v()(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return m()(this,e)});function o(e){var t;return s()(this,o),t=n.call(this,e),h()(l()(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),h()(l()(t),"setDismissTimeout",(function(){t.props.dismissable||(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),h()(l()(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind(l()(t)),t.setDismissTimeout(),t}return c()(o,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,r=e.dismissable,n=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,s=e.requestId,a=I()(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId"]);return b().createElement(T.b,i()({className:"notification-item",title:n&&n.replace(/<\/?[^>]+(>|$)/g,"")},a,{actionClose:r?b().createElement(_.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},b().createElement(C.ZP,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&b().createElement(S.D,null,b().createElement(R.x,{component:R.q.small},"Tracking Id: ",o)),s&&b().createElement(S.D,null,b().createElement(R.x,{component:R.q.small},"Request Id: ",s)))}}]),o}(O.Component);A.propTypes={dismissable:P().bool,onDismiss:P().func.isRequired,id:P().string.isRequired,variant:P().string.isRequired,title:P().string.isRequired,description:P().node,dismissDelay:P().number,requestId:P().string,sentryId:P().string},A.defaultProps={dismissDelay:5e3};const q=A;var k=r(2203),x=r(2394),F=r(7173),K=r(1070),L=r(8140),Z=r(6050),M=function(e){var t=e.page,r=e.onSetPage,n=e.onClearAll,i=e.count;return b().createElement(k.Z,{className:"notification-item"},b().createElement(x.e,null,b().createElement(L.a,null,b().createElement(Z.Z,null,b().createElement(F.zx,{variant:F.Wu.link,className:"ins-c-pagination__clear-all",onClick:n},"Clear all")),b().createElement(Z.Z,null,b().createElement(K.t,{itemCount:i,variant:K.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:r})))))};M.propTypes={count:P().number,page:P().number,onSetPage:P().func,onClearAll:P().func},M.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const $=M;var V=function(e){d()(o,e);var t,r,n=(t=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v()(t);if(r){var i=v()(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return m()(this,e)});function o(){var e;s()(this,o);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),h()(l()(e),"state",{page:1}),h()(l()(e),"onSetPage",(function(t,r){e.setState({page:r})})),e}return c()(o,[{key:"render",value:function(){var e=this.state.page,t=this.props,r=t.notifications,n=t.removeNotification,o=t.rootId,s=t.onClearAll,a=r&&r.length<=5?r:r&&r.slice(5*(e-1),5*e);return!r||Array.isArray(r)&&0===r.length?null:(0,D.createPortal)(b().createElement("div",{className:"notifications-portal"},r&&r.length>5&&b().createElement($,{onSetPage:this.onSetPage,count:r.length,page:e,onClearAll:s}),a.map((function(e){return b().createElement(q,i()({onDismiss:n,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),o}(O.Component);V.propTypes={notifications:P().arrayOf(P().shape({id:P().string.isRequired,title:P().string.isRequired,variant:P().string.isRequired,description:P().node,dismissable:P().bool})),removeNotification:P().func.isRequired,onClearAll:P().func};const U=(0,E.connect)((function(e,t){var r=e.notifications;return{notifications:t.notifications||r}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,j.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,j.L1)())}}}))(V)},4885:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>m});var n=r(9713),i=r.n(n),o=r(7361),s=r.n(o),a=r(8721),c=r.n(a),u=r(1458);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e,t,r){if("string"==typeof e)return{title:"Error",description:e};var n=t;Array.isArray(t)&&(n=t.find((function(t){return c()(e,t)})));var i=r;return Array.isArray(r)&&(i=r.find((function(t){return c()(e,t)}))),{title:s()(e,n)||"Error",description:s()(e,i),sentryId:e&&e.sentryId,requestId:e&&e.requestId}},p=function(e){var t=e.isRejected,r=e.hasCustomNotification,n=e.noErrorOverride,i=e.dispatchDefaultFailure;return t&&!r&&!n&&i};const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1},r=f({},t,{},e),n=function(e){return e.match(new RegExp("^.*".concat(r.pendingSuffix,"$")))},i=function(e){return e.match(new RegExp("^.*".concat(r.fulfilledSuffix,"$")))},o=function(e){return e.match(new RegExp("^.*".concat(r.rejectedSuffix,"$")))},a={dismissable:!r.autoDismiss,dismissDelay:r.dismissDelay};return function(e){var t=e.dispatch;return function(e){return function(l){var m=l.meta,y=l.type;if(m&&m.notifications){var v=m.notifications;n(y)&&v.pending?t((0,u.wN)(f({},a,{},v.pending))):i(y)&&v.fulfilled?t((0,u.wN)(f({},a,{},v.fulfilled))):o(y)&&v.rejected&&t((0,u.wN)(f({},a,{},v.rejected,{sentryId:l.payload&&l.payload.sentryId,requestId:l.payload&&l.payload.requestId})))}if(p({isRejected:o(y),hasCustomNotification:m&&m.notifications&&m.notifications.rejected,noErrorOverride:m&&m.noError,dispatchDefaultFailure:r.dispatchDefaultFailure}))if(r.useStatusText)t((0,u.wN)(f({variant:"danger",dismissable:!0},d(l.payload,r.errorTitleKey,"statusText"))));else{var g=Array.isArray(r.errorNamespaceKey)&&r.errorNamespaceKey.find((function(e){return c()(l.payload,e)}));g?s()(l.payload,g).map((function(e){t((0,u.wN)(f({variant:"danger",dismissable:!0},d(e,r.errorTitleKey,r.errorDescriptionKey))))})):Array.isArray(l.payload)?l.payload.map((function(e){t((0,u.wN)(f({variant:"danger",dismissable:!0},d(e,r.errorTitleKey,r.errorDescriptionKey))))})):t((0,u.wN)(f({variant:"danger",dismissable:!0},d(l.payload,r.errorTitleKey,r.errorDescriptionKey))))}e(l)}}}}},7558:(e,t,r)=>{"use strict";r.d(t,{Dv:()=>i,Kf:()=>o,wt:()=>s});var n="@@INSIGHTS-CORE/NOTIFICATIONS/",i="".concat(n,"ADD_NOTIFICATION"),o="".concat(n,"REMOVE_NOTIFICATION"),s="".concat(n,"CLEAR_NOTIFICATIONS")},1458:(e,t,r)=>{"use strict";r.d(t,{wN:()=>i,FV:()=>o,L1:()=>s});var n=r(7558),i=function(e){return{type:n.Dv,payload:e}},o=function(e){return{type:n.Kf,payload:e}},s=function(){return{type:n.wt}}},3215:(e,t,r)=>{"use strict";r.d(t,{wN:()=>i.wN,ee:()=>m});var n=r(7558),i=r(1458),o=r(9713),s=r.n(o),a=r(319),c=r.n(a);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t){var r=t.payload;return[].concat(c()(e),[l({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},r)])},d=function(e,t){var r=t.payload,n=e.findIndex((function(e){return e.id===r}));return[].concat(c()(e.slice(0,n)),c()(e.slice(n+1)))},p=[];const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.Dv:return f(e,t);case n.Kf:return d(e,t);case n.wt:return[];default:return e}}},8546:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>g});var n=r(3038),i=r.n(n),o=r(319),s=r.n(o),a=r(4575),c=r.n(a),u=r(3913),l=r.n(u),f=r(9713),d=r.n(f),p=r(3);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){d()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.compose;c()(this,e);var i=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n;this.store=(0,p.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,i(p.applyMiddleware.apply(void 0,s()(r)))),this.reducers={}}return l()(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=y({},this.reducers,{},e),this.store.replaceReducer((0,p.combineReducers)(y({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var r=i()(t,2),n=r[0],o=r[1];return y({},e,d()({},n,o))}),{}),t.store.replaceReducer((0,p.combineReducers)(y({},t.reducers)))}}}]),e}();new v;const g=v},1284:(e,t,r)=>{"use strict";var n=r(5318);t.eb=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r="/",n=e.replace(/(#|\?).*/,"").split("/");return n.shift(),"beta"===n[0]&&(n.shift(),r="/beta/"),(0,i.default)(new Array(t)).reduce((function(e,r,i){return"".concat(e).concat(n[i]||"").concat(i<t-1?"/":"")}),r)};n(r(8)),n(r(9713)),n(r(3038));var i=n(r(319));n(r(2492)),n(r(7523))}}]);
//# sourceMappingURL=../sourcemaps/rhcsVendor.76ca0016ef33b34012d7.js.map