(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[803],{6246:(e,t,n)=>{"use strict";n.r(t);var r=n(3297),c=n.n(r),a=n(6638),o=n.n(a),s=n(319),u=n.n(s),l=n(5399),i=n(9971),m=n(8546),d=n(4885),h=n(3215),f=new m.ZP({},[(0,d.ZP)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]})]);f.register({notifications:h.ee});const p=f.getStore();var E=n(3004),_=(0,r.lazy)((function(){return Promise.all([n.e(432),n.e(50),n.e(871)]).then(n.bind(n,3871))})),v=(0,r.lazy)((function(){return Promise.all([n.e(50),n.e(20)]).then(n.bind(n,1020))})),b=function(e){var t=e.match;return c().createElement(v,{requestId:t.params.requestId,canApprove:!1})},g=function(){return c().createElement(r.Suspense,{fallback:c().createElement(E.Bullseye,null,c().createElement(E.Spinner,null))},c().createElement(l.Switch,null,c().createElement(l.Route,{path:"/",exact:!0,component:_}),c().createElement(l.Route,{path:"/:requestId",exact:!0,component:b}),c().createElement(l.Route,null,c().createElement(l.Redirect,{to:"/"}))))},w=n(9601);const y=(0,l.withRouter)((0,i.connect)()((function(e){return(0,r.useEffect)((function(){return insights.chrome.init(),insights.chrome.identifyApp("access-requests"),insights.chrome.on("APP_NAVIGATION",(function(e){return undefined.props.history.push("/".concat(e.navId))}))}),[]),c().createElement(r.Fragment,null,c().createElement(w.ZP,null),c().createElement(g,{childProps:e}))})));function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="/",r=e.replace(/(#|\?).*/,"").split("/");return r.shift(),"beta"===r[0]&&(r.shift(),n="/beta/"),u()(new Array(t)).reduce((function(e,n,c){return"".concat(e).concat(r[c]||"").concat(c<t-1?"/":"")}),n)}const A=function(){return c().createElement(i.Provider,{store:p},c().createElement(l.BrowserRouter,{basename:P(window.location.pathname)},c().createElement(y,null)))};var I=document.getElementById("root");o().render(c().createElement(A,null),I,(function(){return I.setAttribute("data-ouia-safe",!0)}))}}]);
//# sourceMappingURL=803.797c233423960342cbb5.js.map