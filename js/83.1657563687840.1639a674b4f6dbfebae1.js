(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[83],{22081:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(92950),s=n.n(r),c=n(45697),i=n.n(c),o=n(28216),u=n(41387),a=n(334),l=n(85118),m={403:u.Z},d=function(e){var t=e.children,n=(0,o.v9)((function(e){return e.errorReducer.errorCode})),c=(0,a.useLocation)().pathname,i=(0,o.I0)();if((0,r.useEffect)((function(){n&&i({type:l.j,payload:void 0})}),[c]),n){var u=m[n];return s().createElement(u,{serviceName:"Access Requests"})}return t};d.propTypes={children:i().node.isRequired};const f=d},85118:(e,t,n)=>{"use strict";n.d(t,{j:()=>r});var r="API_ERROR"},49453:(e,t,n)=>{"use strict";n.r(t);var r=n(92950),s=n.n(r),c=n(12181),i=n.n(c),o=n(334),u=n(28216),a=n(1140),l=n(45697),m=n.n(l),d=n(70885),f=n(56976),v=(0,r.lazy)((function(){return Promise.all([n.e(432),n.e(313),n.e(773),n.e(395)]).then(n.bind(n,42395))})),h=(0,r.lazy)((function(){return Promise.all([n.e(432),n.e(313),n.e(773),n.e(20)]).then(n.bind(n,51020))})),E=function(){var e=(0,r.useContext)(a.g).getRegistry,t=(0,r.useState)(!0),n=(0,d.Z)(t,2),c=n[0],i=n[1];return(0,r.useEffect)((function(){insights.chrome.init(),Promise.resolve(insights.chrome.auth.getUser()).then((function(e){var t,n;i(null==e||null===(t=e.identity)||void 0===t||null===(n=t.user)||void 0===n?void 0:n.is_internal)}))})),s().createElement(r.Suspense,{fallback:s().createElement(f.Bullseye,null,s().createElement(f.Spinner,null))},!1,s().createElement(o.Switch,null,s().createElement(o.Route,{path:"/",exact:!0,component:function(){return s().createElement(v,{isInternal:c,getRegistry:e})}}),s().createElement(o.Route,{path:"/:requestId",exact:!0,component:function(){return s().createElement(h,{isInternal:c,getRegistry:e})}}),s().createElement(o.Route,null,s().createElement(o.Redirect,{to:"/"}))))},g=n(99913),p=n(22081),y=function(e){var t=e.basename,n=(0,o.useHistory)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("access-requests");var e=insights.chrome.on("APP_NAVIGATION",(function(e){var r,s;null!=e&&null!==(r=e.domEvent)&&void 0!==r&&r.href&&n.push(null==e||null===(s=e.domEvent)||void 0===s?void 0:s.href.replace(t),"")}));return function(){e()}}),[]),s().createElement(r.Fragment,null,s().createElement(g.ZP,null),s().createElement(p.Z,null,s().createElement(E,null)))};y.propTypes={basename:m().string.isRequired};const R=y;var _=(0,n(1284).eb)(window.location.pathname,3);const b=function(){return s().createElement(a.g.Provider,{value:{getRegistry:function(){return a.Z}}},s().createElement(u.zt,{store:a.Z.getStore()},s().createElement(o.BrowserRouter,{basename:_},s().createElement(R,{basename:_}))))};var Z=document.getElementById("root");i().render(s().createElement(b,null),Z,(function(){return Z.setAttribute("data-ouia-safe",!0)}))},1140:(e,t,n)=>{"use strict";n.d(t,{g:()=>l,Z:()=>d});var r=n(92950),s=n(9036),c=n(84885),i=n(83215),o=n(4942),u=n(85118);const a=(0,o.Z)({},u.j,(function(e,t){return{errorCode:t.payload}}));var l=(0,r.createContext)({getRegistry:function(){}}),m=new s.ZP({},[(0,c.ZP)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]})]);m.register({errorReducer:(0,s.Gg)(a),notifications:i.ee});const d=m},45467:()=>{},65088:()=>{},81754:()=>{},34946:()=>{},80598:()=>{},10108:()=>{},30187:()=>{},81320:()=>{},93398:()=>{},46928:()=>{},66822:()=>{},314:()=>{},49854:()=>{},74181:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/83.47471e477be8cd230debc8924e6c1e1e.js.map