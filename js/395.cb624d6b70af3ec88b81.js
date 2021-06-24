(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[395],{2395:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var a=n(9661),r=n.n(a),c=n(2167),l=n(334),o=n(4092),s=n(7154),u=n.n(s),i=n(319),m=n.n(i),d=n(3038),p=n.n(d),E=n(3349),f=n(7733),h=n(2863),g=n(164),b=n(8794),y=n(8755),v=n(777),S=n(3215),T=n(2027),C=n(5697),_=n.n(C);function k(e){return e[0].toLowerCase()+e.substring(1)}var q=["pending","approved","denied","cancelled","expired"],I=function(e){var t=e.isInternal,n=t?["Request ID","Account number","Start date","End date","Created","Status"]:["Request ID","First name","Last name","Start date","End date","Created","Decision"],a=r().useState(t?4:5),s=p()(a,2),i=s[0],d=s[1],C=r().useState("desc"),I=p()(C,2),P=I[0],L=I[1],w=function(e,t,n){d(t),L(n)},R=r().useState(1),D=p()(R,2),x=D[0],A=D[1],N=r().useState(20),B=p()(N,2),F=B[0],Z=B[1],O=function(e){var t=e.id;return r().createElement(o.Pagination,{itemCount:Te,perPage:F,page:x,onSetPage:function(e,t){return A(t)},id:"access-requests-table-pagination-"+t,variant:t,perPageOptions:[5,10,20,50].map((function(e){return{title:e,value:e}})),onPerPageSelect:function(e,t){A(1),Z(t)}})};O.propTypes={id:_().string};var j,G,z,H,Y,M=r().useState(!1),U=p()(M,2),V=U[0],W=U[1],J=r().useState(n[t?1:6]),K=p()(J,2),Q=K[0],X=K[1],$=r().useState(!1),ee=p()($,2),te=ee[0],ne=ee[1],ae=r().useState([]),re=p()(ae,2),ce=re[0],le=re[1],oe=r().useState(""),se=p()(oe,2),ue=se[0],ie=se[1],me=r().useState(!1),de=p()(me,2),pe=de[0],Ee=de[1],fe=ce.length>0||ue,he=r().useState(!0),ge=p()(he,2),be=ge[0],ye=ge[1],ve=r().useState(0),Se=p()(ve,2),Te=Se[0],Ce=Se[1],_e=r().useState([]),ke=p()(_e,2),qe=ke[0],Ie=ke[1],Pe=(0,c.useDispatch)(),Le=function(){ye(!0);var e=new URL("".concat(window.location.origin).concat("/api/rbac/v1","/cross-account-requests/"));t&&e.searchParams.append("query_by","user_id"),e.searchParams.append("offset",(x-1)*F),e.searchParams.append("limit",F),ue&&e.searchParams.append("account",ue),ce.length>0&&e.searchParams.append("status",ce.join(","));var a="".concat("desc"===P?"-":"").concat(n[i].toLowerCase().replace(" ","_"));e.searchParams.append("order_by",a),fetch(e.href,{headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){Ce(e.meta.count),Ie(e.data.map((function(e){return t?[e.request_id,e.target_account,e.start_date,e.end_date,e.created,e.status]:[e.request_id,e.first_name,e.last_name,e.start_date,e.end_date,e.created,e.status]}))),ye(!1)})).catch((function(e){ye(!1),Pe((0,S.wN)({variant:"danger",title:"Could not list access requests",description:e.message}))}))},we=(j=ue,400,G=r().useState(j),H=(z=p()(G,2))[0],Y=z[1],r().useEffect((function(){var e=setTimeout((function(){Y(j)}),400);return function(){clearTimeout(e)}}),[j]),H);r().useEffect((function(){Le()}),[we,ce,i,P,F,x]);var Re=r().useState({type:null}),De=p()(Re,2),xe=De[0],Ae=De[1],Ne=function(e){Ae({type:null}),e&&Le()},Be=r().createElement(r().Fragment,null,"cancel"===xe.type&&r().createElement(f.Z,{requestId:xe.requestId,onClose:Ne}),["edit","create"].includes(xe.type)&&r().createElement(h.Z,{variant:xe.type,requestId:xe.requestId,onClose:Ne})),Fe=t&&r().createElement(o.Button,{variant:"primary",onClick:function(){return Ae({type:"create"})}},"Create request");if(0===qe.length&&!be&&!pe)return r().createElement(o.Bullseye,{style:{height:"auto"},className:"pf-u-mt-lg"},r().createElement(o.EmptyState,{variant:"large"},r().createElement(o.EmptyStateIcon,{icon:v.ZP}),r().createElement(o.Title,{headingLevel:"h3",size:"lg"},t?"No access requests":"You have no access requests"),r().createElement(o.EmptyStateBody,null,t?"Click the button below to create an access request.":"You have no pending Red Hat access requests."),Fe),Be);var Ze="filter-status",Oe="Filter by ".concat(k(n[n.length-1])),je=r().createElement(o.Button,{variant:"link",onClick:function(){le([]),ie("")}},"Clear filters"),Ge=r().createElement(o.Toolbar,{id:"access-requests-table-toolbar"},r().createElement(o.ToolbarContent,null,r().createElement(o.ToolbarItem,null,r().createElement(o.InputGroup,null,r().createElement(o.Dropdown,{isOpen:V,onSelect:function(e){W(!1),X(e.target.value),ne(!1),Ee(!0)},toggle:r().createElement(o.DropdownToggle,{onToggle:function(e){return W(e)}},r().createElement(y.ZP,null)," ",Q),dropdownItems:(t?[1,5]:[6]).map((function(e){return n[e]})).map((function(e){return r().createElement(o.DropdownItem,{key:e,value:e,component:"button"},(0,g.kC)(e))}))}),["Status","Decision"].includes(Q)&&r().createElement(r().Fragment,null,r().createElement("span",{id:Ze,hidden:!0},Oe),r().createElement(o.Select,{"aria-labelledby":Ze,variant:"checkbox","aria-label":"Select statuses",onToggle:function(e){return ne(e)},onSelect:function(e,t){ce.includes(t)?le(ce.filter((function(e){return e!==t}))):le([].concat(m()(ce),[t]))},isOpen:te,selections:Array.from(ce),isCheckboxSelectionBadgeHidden:!0,placeholderText:Oe},q.map((function(e){return r().createElement(o.SelectOption,{key:e,value:e},(0,g.kC)(e))})))),"Account number"===Q&&r().createElement("form",{style:{display:"flex"},onSubmit:function(e){return e.preventDefault()}},r().createElement(o.TextInput,{name:"".concat(Q,"-filter"),id:"".concat(Q,"-filter"),type:"search",iconVariant:"search",placeholder:"Filter by ".concat(k(Q)),"aria-label":"".concat(Q," search input"),value:ue,onChange:function(e){ie(e),Ee(!0)}})))),r().createElement(o.ToolbarItem,null,Fe),r().createElement(o.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},r().createElement(O,{id:"top"}))),r().createElement(o.ToolbarContent,null,r().createElement(o.ChipGroup,{categoryName:"Status"},ce.map((function(e){return r().createElement(o.Chip,{key:e,onClick:function(){return le(ce.filter((function(t){return t!==e})))}},e)}))),ue&&r().createElement(o.ChipGroup,{categoryName:"Account number"},r().createElement(o.Chip,{onClick:function(){return ie("")}},ue)),fe&&je));function ze(e){return t?0===e?30:15:[0,6].includes(e)?20:10}var He=(0,l.useRouteMatch)().url,Ye=r().createElement(E.TableComposable,{"aria-label":"Access requests table",variant:"compact"},r().createElement(E.Thead,null,r().createElement(E.Tr,null,n.map((function(e,t){return r().createElement(E.Th,u()({key:t},!e.includes("name")&&"Decision"!==e&&{sort:{sortBy:{index:i,direction:P},onSort:w,columnIndex:t}},{width:ze(t)}),e)})),t&&r().createElement(E.Th,null))),r().createElement(E.Tbody,null,be?m()(Array(qe.length||F).keys()).map((function(e){return r().createElement(E.Tr,{key:e},n.map((function(e,t){return r().createElement(E.Td,{key:t,dataLabel:e},r().createElement("div",{style:{height:"30px"},className:"ins-c-skeleton ins-c-skeleton__md"}," "))})))})):qe.map((function(e,a){return r().createElement(E.Tr,{key:a},r().createElement(E.Td,{dataLabel:n[0]},r().createElement(l.Link,{to:"".concat(He).concat(He.endsWith("/")?"":"/").concat(e[0])},e[0])),r().createElement(E.Td,{dataLabel:n[1]},e[1]),r().createElement(E.Td,{dataLabel:n[2]},e[2]),r().createElement(E.Td,{dataLabel:n[3]},e[3]),r().createElement(E.Td,{dataLabel:n[4]},e[4]),t?r().createElement(E.Td,{dataLabel:n[5]},r().createElement(T.p,{requestId:e[0],status:e[5],onLabelClick:function(){return le([].concat(m()(ce.filter((function(e){return e!==status}))),[status]))},hideActions:!0})):r().createElement(E.Td,{dataLabel:n[5]},e[5]),t?r().createElement(E.Td,{actions:(0,T.m)(e[5],e[0],Ae)}):r().createElement(E.Td,{dataLabel:n[6]},r().createElement(T.p,{requestId:e[0],status:e[6]})))})),0===qe.length&&fe&&r().createElement(E.Tr,null,r().createElement(E.Td,{colSpan:n.length},r().createElement(o.EmptyState,{variant:"small"},r().createElement(o.EmptyStateIcon,{icon:b.ZP}),r().createElement(o.Title,{headingLevel:"h2",size:"lg"},"No matching requests found"),r().createElement(o.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),je)))));return r().createElement(r().Fragment,null,Ge,Ye,r().createElement(O,{id:"bottom"}),Be)};I.propTypes={isInternal:_().bool};const P=I;var L=function(e){var t=e.getRegistry,n=e.isInternal;return r().createElement(c.Provider,{store:t().getStore()},r().createElement(o.PageSection,{variant:"light"},r().createElement(o.Title,{headingLevel:"h1",className:"pf-u-pb-sm"},"Access Requests"),r().createElement("p",null,"Below is a list of all submitted requests for read only account access.")),r().createElement(o.PageSection,{padding:{default:"noPadding"}},r().createElement(P,{isInternal:n})))};L.propTypes={getRegistry:_().func,isInternal:_().bool};const w=(0,l.withRouter)(L)}}]);
//# sourceMappingURL=../sourcemaps/395.bd64600ca5e2e562e331.js.map