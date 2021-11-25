(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[434,395],{20777:(e,t,n)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},21458:(e,t,n)=>{"use strict";n.d(t,{wN:()=>r,FV:()=>c,L1:()=>l});var a=n(17558),r=function(e){return{type:a.Dv,payload:e}},c=function(e){return{type:a.Kf,payload:e}},l=function(){return{type:a.wt}}},22081:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(92950),r=n.n(a),c=n(45697),l=n.n(c),o=n(51352),s=n(41387),u=n(334),i=n(85118),d={403:s.Z},m=function(e){var t=e.children,n=(0,o.v9)((function(e){return e.errorReducer.errorCode})),c=(0,u.useLocation)().pathname,l=(0,o.I0)();if((0,a.useEffect)((function(){n&&l({type:i.j,payload:void 0})}),[c]),n){var s=d[n];return r().createElement(s,{serviceName:"Access Requests"})}return t};m.propTypes={children:l().node.isRequired};const p=m},85118:(e,t,n)=>{"use strict";n.d(t,{j:()=>a});var a="API_ERROR"},42395:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(92950),r=n.n(a),c=n(51352),l=n(56976),o=n(87462),s=n(42982),u=n(70885),i=n(98975),d=n(17733),m=n(42863),p=n(80164),f=n(48794),E=n(8755),h=n(20777),g=n(83215),v=n(334),y=n(42027),b=n(45697),S=n.n(b),T=n(24874);function C(e){return e[0].toLowerCase()+e.substring(1)}var Z=["pending","approved","denied","cancelled","expired"],I=function(e){var t=e.isInternal,n=t?["Request ID","Account number","Start date","End date","Created","Status"]:["Request ID","First name","Last name","Start date","End date","Created","Decision"],a=r().useState(t?4:5),b=(0,u.Z)(a,2),I=b[0],q=b[1],_=r().useState("desc"),k=(0,u.Z)(_,2),P=k[0],w=k[1],L=function(e,t,n){q(t),w(n)},R=r().useState(1),x=(0,u.Z)(R,2),A=x[0],D=x[1],N=r().useState(20),B=(0,u.Z)(N,2),F=B[0],O=B[1],j=function(e){var t=e.id;return r().createElement(l.Pagination,{itemCount:Ce,perPage:F,page:A,onSetPage:function(e,t){return D(t)},id:"access-requests-table-pagination-"+t,variant:t,perPageOptions:[5,10,20,50].map((function(e){return{title:e,value:e}})),onPerPageSelect:function(e,t){D(1),O(t)},isCompact:"top"===t})};j.propTypes={id:S().string};var z,G,K,H,M,V=r().useState(!1),Y=(0,u.Z)(V,2),U=Y[0],W=Y[1],J=r().useState(n[t?1:6]),Q=(0,u.Z)(J,2),X=Q[0],$=Q[1],ee=r().useState(!1),te=(0,u.Z)(ee,2),ne=te[0],ae=te[1],re=r().useState([]),ce=(0,u.Z)(re,2),le=ce[0],oe=ce[1],se=r().useState(""),ue=(0,u.Z)(se,2),ie=ue[0],de=ue[1],me=r().useState(!1),pe=(0,u.Z)(me,2),fe=pe[0],Ee=pe[1],he=le.length>0||ie,ge=r().useState(!0),ve=(0,u.Z)(ge,2),ye=ve[0],be=ve[1],Se=r().useState(0),Te=(0,u.Z)(Se,2),Ce=Te[0],Ze=Te[1],Ie=r().useState([]),qe=(0,u.Z)(Ie,2),_e=qe[0],ke=qe[1],Pe=(0,c.I0)(),we=function(){be(!0);var e=new URL("".concat(window.location.origin).concat("/api/rbac/v1","/cross-account-requests/"));t&&e.searchParams.append("query_by","user_id"),e.searchParams.append("offset",(A-1)*F),e.searchParams.append("limit",F),ie&&e.searchParams.append("account",ie),le.length>0&&e.searchParams.append("status",le.join(","));var a="".concat("desc"===P?"-":"").concat(n[I].toLowerCase().replace(" ","_"));e.searchParams.append("order_by",a),T.Z.get(e.href,{headers:{Accept:"application/json"}}).then((function(e){Ze(e.meta.count),ke(e.data.map((function(e){return t?[e.request_id,e.target_account,e.start_date,e.end_date,e.created,e.status]:[e.request_id,e.first_name,e.last_name,e.start_date,e.end_date,e.created,e.status]}))),be(!1)})).catch((function(e){be(!1),Pe((0,g.wN)({variant:"danger",title:"Could not list access requests",description:e.message}))}))},Le=(z=ie,400,G=r().useState(z),H=(K=(0,u.Z)(G,2))[0],M=K[1],r().useEffect((function(){var e=setTimeout((function(){M(z)}),400);return function(){clearTimeout(e)}}),[z]),H);r().useEffect((function(){we()}),[Le,le,I,P,F,A]);var Re=r().useState({type:null}),xe=(0,u.Z)(Re,2),Ae=xe[0],De=xe[1],Ne=function(e){De({type:null}),e&&we()},Be=r().createElement(r().Fragment,null,"cancel"===Ae.type&&r().createElement(d.Z,{requestId:Ae.requestId,onClose:Ne}),["edit","create"].includes(Ae.type)&&r().createElement(m.Z,{variant:Ae.type,requestId:Ae.requestId,onClose:Ne})),Fe=t&&r().createElement(l.Button,{variant:"primary",onClick:function(){return De({type:"create"})}},"Create request");if(0===_e.length&&!ye&&!fe)return r().createElement(l.Bullseye,{style:{height:"auto"},className:"pf-u-mt-lg"},r().createElement(l.EmptyState,{variant:"large"},r().createElement(l.EmptyStateIcon,{icon:h.ZP}),r().createElement(l.Title,{headingLevel:"h3",size:"lg"},t?"No access requests":"You have no access requests"),r().createElement(l.EmptyStateBody,null,t?"Click the button below to create an access request.":"You have no pending Red Hat access requests."),Fe),Be);var Oe="filter-status",je="Filter by ".concat(C(n[n.length-1])),ze=r().createElement(l.Button,{variant:"link",onClick:function(){oe([]),de("")}},"Clear filters"),Ge=r().createElement(l.Toolbar,{id:"access-requests-table-toolbar"},r().createElement(l.ToolbarContent,null,r().createElement(l.ToolbarItem,null,r().createElement(l.InputGroup,null,r().createElement(l.Dropdown,{isOpen:U,onSelect:function(e){W(!1),$(e.target.value),ae(!1),Ee(!0)},toggle:r().createElement(l.DropdownToggle,{onToggle:function(e){return W(e)}},r().createElement(E.ZP,null)," ",X),dropdownItems:(t?[1,5]:[6]).map((function(e){return n[e]})).map((function(e){return r().createElement(l.DropdownItem,{key:e,value:e,component:"button"},(0,p.kC)(e))}))}),["Status","Decision"].includes(X)&&r().createElement(r().Fragment,null,r().createElement("span",{id:Oe,hidden:!0},je),r().createElement(l.Select,{"aria-labelledby":Oe,variant:"checkbox","aria-label":"Select statuses",onToggle:function(e){return ae(e)},onSelect:function(e,t){Ee(!0),le.includes(t)?oe(le.filter((function(e){return e!==t}))):oe([].concat((0,s.Z)(le),[t]))},isOpen:ne,selections:Array.from(le),isCheckboxSelectionBadgeHidden:!0,placeholderText:je},Z.map((function(e){return r().createElement(l.SelectOption,{key:e,value:e},(0,p.kC)(e))})))),"Account number"===X&&r().createElement("form",{style:{display:"flex"},onSubmit:function(e){return e.preventDefault()}},r().createElement(l.TextInput,{name:"".concat(X,"-filter"),id:"".concat(X,"-filter"),type:"search",iconVariant:"search",placeholder:"Filter by ".concat(C(X)),"aria-label":"".concat(X," search input"),value:ie,onChange:function(e){de(e),Ee(!0)}})))),r().createElement(l.ToolbarItem,null,Fe),r().createElement(l.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},r().createElement(j,{id:"top"}))),r().createElement(l.ToolbarContent,null,r().createElement(l.ChipGroup,{categoryName:"Status"},le.map((function(e){return r().createElement(l.Chip,{key:e,onClick:function(){return oe(le.filter((function(t){return t!==e})))}},e)}))),ie&&r().createElement(l.ChipGroup,{categoryName:"Account number"},r().createElement(l.Chip,{onClick:function(){return de("")}},ie)),he&&ze));function Ke(e){return t?0===e?30:15:[0,6].includes(e)?20:10}var He=(0,v.useRouteMatch)().url,Me=r().createElement(i.TableComposable,{"aria-label":"Access requests table",variant:"compact"},r().createElement(i.Thead,null,r().createElement(i.Tr,null,n.map((function(e,t){return r().createElement(i.Th,(0,o.Z)({key:t},!e.includes("name")&&"Decision"!==e&&{sort:{sortBy:{index:I,direction:P},onSort:L,columnIndex:t}},{width:Ke(t)}),e)})),t&&r().createElement(i.Th,null))),r().createElement(i.Tbody,null,ye?(0,s.Z)(Array(_e.length||F).keys()).map((function(e){return r().createElement(i.Tr,{key:e},n.map((function(e,t){return r().createElement(i.Td,{key:t,dataLabel:e},r().createElement("div",{style:{height:"30px"},className:"ins-c-skeleton ins-c-skeleton__md"}," "))})))})):_e.map((function(e,a){return r().createElement(i.Tr,{key:a},r().createElement(i.Td,{dataLabel:n[0]},r().createElement(v.Link,{to:"".concat(He).concat(He.endsWith("/")?"":"/").concat(e[0])},e[0])),r().createElement(i.Td,{dataLabel:n[1]},e[1]),r().createElement(i.Td,{dataLabel:n[2]},e[2]),r().createElement(i.Td,{dataLabel:n[3]},e[3]),r().createElement(i.Td,{dataLabel:n[4]},e[4]),t?r().createElement(i.Td,{dataLabel:n[5]},r().createElement(y.p,{requestId:e[0],status:e[5],onLabelClick:function(){return oe([].concat((0,s.Z)(le.filter((function(e){return e!==status}))),[status]))},hideActions:!0})):r().createElement(i.Td,{dataLabel:n[5]},e[5]),t?r().createElement(i.Td,{actions:(0,y.m)(e[5],e[0],De)}):r().createElement(i.Td,{dataLabel:n[6]},r().createElement(y.p,{requestId:e[0],status:e[6]})))})),0===_e.length&&he&&r().createElement(i.Tr,null,r().createElement(i.Td,{colSpan:n.length},r().createElement(l.EmptyState,{variant:"small"},r().createElement(l.EmptyStateIcon,{icon:f.ZP}),r().createElement(l.Title,{headingLevel:"h2",size:"lg"},"No matching requests found"),r().createElement(l.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),ze)))));return r().createElement(r().Fragment,null,Ge,Me,r().createElement(j,{id:"bottom"}),Be)};I.propTypes={isInternal:S().bool};const q=I;var _=n(1140),k=n(22081),P=function(e){var t=e.isInternal;return r().createElement(c.zt,{store:_.Z.getStore()},r().createElement(k.Z,null,r().createElement(l.PageSection,{variant:"light"},r().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-sm"},"Access Requests"),r().createElement("p",null,"Below is a list of all submitted requests for read only account access.")),r().createElement(l.PageSection,{padding:{default:"noPadding"}},r().createElement(q,{isInternal:t}))))};P.propTypes={isInternal:S().bool};const w=P},1140:(e,t,n)=>{"use strict";n.d(t,{g:()=>i,Z:()=>m});var a=n(92950),r=n(9036),c=n(84885),l=n(83215),o=n(4942),s=n(85118);const u=(0,o.Z)({},s.j,(function(e,t){return{errorCode:t.payload}}));var i=(0,a.createContext)({getRegistry:function(){}}),d=new r.ZP({},[(0,c.ZP)({errorTitleKey:["message"],errorDescriptionKey:["errors","stack"]})]);d.register({errorReducer:(0,r.Gg)(u),notifications:l.ee});const m=d},72307:(e,t,n)=>{"use strict";n.d(t,{I:()=>l});var a=n(6526),r=n(420);function c(e){void 0===e&&(e=a.E);var t=e===a.E?r.o:(0,r.f)(e);return function(){return t().dispatch}}var l=c()},45467:()=>{},65088:()=>{},34946:()=>{},30187:()=>{},81320:()=>{},66822:()=>{},314:()=>{},49854:()=>{}}]);
//# sourceMappingURL=../sourcemaps/434.553f60b0f96ee5c73626e921cbd38118.js.map