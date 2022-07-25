"use strict";(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[174],{51020:(e,t,l)=>{l.r(t),l.d(t,{default:()=>y});var n=l(87462),a=l(93433),r=l(29439),c=l(92950),s=l.n(c),u=l(56976),i=l(80164),m=l(334),o=l(28216),d=l(83215),E=l(31643),g=l(17733),f=l(479),p=l(76710),b=l(42027),h=l(45697),_=l.n(h),I=l(24874),q=function(e){var t=e.isInternal,l=s().useState(),c=(0,r.Z)(l,2),h=c[0],_=c[1],q=(0,m.useParams)().requestId,v=(0,o.I0)();s().useEffect((function(){I.Z.get("".concat("/api/rbac/v1","/cross-account-requests/").concat(q,"/").concat(t?"?query_by=user_id":"?query_by=target_account"),{headers:{Accept:"application/json"}}).then((function(e){if(e.errors)throw Error(e.errors.map((function(e){return e.detail})).join("\n"));_(e)})).catch((function(e){v((0,d.wN)({variant:"danger",title:"Could not load access request",description:e.message}))}))}),[]);var y=s().useState({type:null}),x=(0,r.Z)(y,2),C=x[0],S=x[1],w=function(){return S({type:null})},k=(0,b.m)(h&&h.status,q,S),F=s().useState(!1),R=(0,r.Z)(F,2),T=R[0],Z=R[1],z=[].concat((0,a.Z)(t?["request_id","target_account"]:["first_name","last_name"]),["start_date","end_date","created"]);return s().createElement(s().Fragment,null,s().createElement(u.PageSection,{variant:"light"},s().createElement(u.Breadcrumb,null,s().createElement(u.BreadcrumbItem,{render:function(){return s().createElement(m.Link,{to:t?"/":"/access-requests"},!t&&"Red Hat ","Access Requests")}}),s().createElement(u.BreadcrumbItem,null,q)),s().createElement(u.Flex,{direction:{default:"column",md:"row"}},s().createElement(u.FlexItem,{grow:{default:"grow"}},s().createElement(u.Title,{headingLevel:"h1",size:"2xl",className:"pf-u-pt-md"},q)),t&&k.items.length>0&&s().createElement(u.FlexItem,{alignSelf:{default:"alignRight"}},s().createElement(u.Dropdown,{position:"right",toggle:s().createElement(u.KebabToggle,{onToggle:function(){return Z(!T)},id:"actions-toggle"}),isOpen:T,isPlain:!0,dropdownItems:k.items.map((function(e){var t=e.title,l=e.onClick;return s().createElement(u.DropdownItem,{key:t,component:"button",onClick:l},t)})),isDisabled:k.disable})))),s().createElement(u.PageSection,null,s().createElement(u.Flex,{spaceItems:{xl:"spaceItemsLg"},direction:{default:"column",lg:"row"}},s().createElement(u.FlexItem,{flex:{default:"flex_1"},alignSelf:{default:"alignSelfStretch"}},s().createElement(u.Card,{ouiaId:"request-details",style:{height:"100%"}},s().createElement(u.CardTitle,null,s().createElement(u.Title,{headingLevel:"h2",size:"xl"},"Request details")),s().createElement(u.CardBody,null,h?s().createElement(s().Fragment,null,s().createElement("div",{className:"pf-u-pb-md"},t?s().createElement("div",null,s().createElement("label",null,s().createElement("b",null,"Request status")),s().createElement("br",null),s().createElement(u.Label,(0,n.Z)({className:"pf-u-mt-sm"},(0,p.Q)(h.status)),(0,i.kC)(h.status))):s().createElement(s().Fragment,null,s().createElement("label",null,s().createElement("b",null,"Request decision")),s().createElement("br",null),s().createElement(b.p,{requestId:q,status:h.status}))),z.map((function(e,t){return s().createElement("div",{className:"pf-u-pb-md",key:t},s().createElement("label",null,s().createElement("b",null,(0,i.kC)(e.replace(/_/g," ").replace("id","ID")))),s().createElement("br",null),s().createElement("div",null,h[e]))}))):s().createElement(u.Spinner,{size:"xl"})))),s().createElement(u.FlexItem,{flex:{default:"flex_3"},grow:{default:"grow"},alignSelf:{default:"alignSelfStretch"}},s().createElement(u.Card,{ouiaId:"request-roles",style:{height:"100%"}},s().createElement(u.CardTitle,null,s().createElement(u.Title,{headingLevel:"h2",size:"xl"},"Roles requested")),s().createElement(u.CardBody,null,h?s().createElement(E.Z,{roles:h.roles}):s().createElement(u.Spinner,{size:"xl"})))))),"cancel"===C.type&&s().createElement(g.Z,{requestId:q,onClose:w}),"edit"===C.type&&s().createElement(f.Z,{variant:"edit",requestId:q,onClose:w}))},v=function(e){var t=e.getRegistry,l=e.isInternal;return s().createElement(o.zt,{store:t().getStore()},s().createElement(q,{isInternal:l}))};v.propTypes={getRegistry:_().func,isInternal:_().bool},q.propTypes={isInternal:_().bool};const y=v}}]);
//# sourceMappingURL=../sourcemaps/174.9f223a57294f2d589af43811eb5c615c.js.map