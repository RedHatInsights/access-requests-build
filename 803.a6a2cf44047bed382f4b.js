(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[803],{6246:(e,t,n)=>{"use strict";n.r(t);var r=n(3297),c=n.n(r),a=n(6638),s=n.n(a),o=n(319),u=n.n(o),l=n(5399),i=n(9971),m=n(8546),d=n(4885),f=n(3215),h=new m.ZP({},[(0,d.ZP)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]})]);h.register({notifications:f.ee});const p=h.getStore();var E=n(3038),_=n.n(E),v=n(3004),b=(0,r.lazy)((function(){return Promise.all([n.e(432),n.e(508),n.e(395)]).then(n.bind(n,2395))})),g=(0,r.lazy)((function(){return Promise.all([n.e(432),n.e(508),n.e(20)]).then(n.bind(n,1020))})),w=function(){var e=c().useState(!0),t=_()(e,2),n=t[0];return t[1],c().createElement(r.Suspense,{fallback:c().createElement(v.Bullseye,null,c().createElement(v.Spinner,null))},!1,c().createElement(l.Switch,null,c().createElement(l.Route,{path:"/",exact:!0,component:function(){return c().createElement(b,{isInternal:n})}}),c().createElement(l.Route,{path:"/:requestId",exact:!0,component:function(e){var t=e.match;return c().createElement(g,{requestId:t.params.requestId,isInternal:n})}}),c().createElement(l.Route,null,c().createElement(l.Redirect,{to:"/"}))))},y=n(9601);const I=(0,l.withRouter)((0,i.connect)()((function(e){return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp("access-requests"),insights.chrome.on("APP_NAVIGATION",(function(e){return undefined.props.history.push("/".concat(e.navId))}))}),[]),c().createElement(r.Fragment,null,c().createElement(y.ZP,null),c().createElement(w,{childProps:e}))})));function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="/",r=e.replace(/(#|\?).*/,"").split("/");return r.shift(),"beta"===r[0]&&(r.shift(),n="/beta/"),u()(new Array(t)).reduce((function(e,n,c){return"".concat(e).concat(r[c]||"").concat(c<t-1?"/":"")}),n)}const k=function(){return c().createElement(i.Provider,{store:p},c().createElement(l.BrowserRouter,{basename:P(window.location.pathname)},c().createElement(I,null)))};var q=document.getElementById("root");s().render(c().createElement(k,null),q,(function(){return q.setAttribute("data-ouia-safe",!0)}))}}]);
//# sourceMappingURL=803.a6a2cf44047bed382f4b.js.map