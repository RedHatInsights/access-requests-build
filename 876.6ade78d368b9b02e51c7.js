(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[876],{777:(e,t,a)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=a(5183).createIcon(t.lb),t.ZP=t.wl},9876:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q});var n=a(3297),r=a.n(n),c=a(5399),l=a(3004),s=a(319),u=a.n(s),o=a(3038),i=a.n(o),m=a(6401),d=a(7733),p=a(2863),E=a(164),f=a(8794),h=a(8755),b=a(777),g=a(9971),v=a(3215),S=a(2027),y=["pending","approved","denied","cancelled","expired"],C=function(e){var t=e.isInternal,a=t?["Request ID","Account number","Start date","End date","Created","Status"]:["Request ID","First name","Last name","Start date","End date","Created","Decision"],n=r().useState(4),s=i()(n,2),o=s[0],C=s[1],T=r().useState("desc"),q=i()(T,2),_=q[0],k=q[1],I=function(e,t,a){C(t),k(a)},P=r().useState(1),w=i()(P,2),L=w[0],N=w[1],x=r().useState(10),D=i()(x,2),R=D[0],B=D[1],F=function(e){var t=e.id;return r().createElement(l.Pagination,{itemCount:ye,perPage:R,page:L,onSetPage:function(e,t){return N(t)},id:"access-requests-table-pagination-"+t,variant:t,onPerPageSelect:function(e,t){return B(t)}})},A=r().useState(!1),G=i()(A,2),Z=G[0],z=G[1],O=r().useState(t?a[0]:a[1]),V=i()(O,2),j=V[0],H=V[1],Y=r().useState(!1),M=i()(Y,2),U=M[0],J=M[1],K=r().useState([]),Q=i()(K,2),W=Q[0],X=Q[1],$=r().useState(""),ee=i()($,2),te=ee[0],ae=ee[1],ne=r().useState(""),re=i()(ne,2),ce=re[0],le=re[1],se=r().useState(""),ue=i()(se,2),oe=ue[0],ie=ue[1],me=r().useState(""),de=i()(me,2),pe=de[0],Ee=de[1],fe=r().useState(!0),he=i()(fe,2),be=he[0],ge=he[1],ve=r().useState(0),Se=i()(ve,2),ye=Se[0],Ce=Se[1],Te=r().useState([]),qe=i()(Te,2),_e=qe[0],ke=qe[1],Ie=(0,g.useDispatch)(),Pe=function(){ge(!0);var e=new URL("".concat(window.location.origin).concat("/api/rbac/v1","/cross-account-requests/"));t&&e.searchParams.append("query_by","user_id"),e.searchParams.append("offset",(L-1)*R),e.searchParams.append("limit",R),oe&&e.searchParams.append("first_name",oe),pe&&e.searchParams.append("last_name",pe),te&&e.searchParams.append("id",te),ce&&e.searchParams.append("account_number",ce),W.length>0&&e.searchParams.append("status",W.join(",")),e.searchParams.append("sort_by",a[o].toLowerCase()),e.searchParams.append("sort_direction",_),fetch(e.href).then((function(e){return e.json()})).then((function(e){Ce(e.meta.count),ke(e.data.map((function(e){return t?[e.request_id,e.target_account,e.start_date,e.end_date,e.created,e.status]:[e.request_id,e.first_name,e.last_name,e.start_date,e.end_date,e.created,e.status]}))),ge(!1)})).catch((function(e){ge(!1),Ie((0,v.wN)({variant:"danger",title:"Could not list access requests",description:e.message}))}))};r().useEffect((function(){Pe()}),[oe,pe,te,ce,W,o,_,R,L]);var we=r().useState({type:null}),Le=i()(we,2),Ne=Le[0],xe=Le[1],De=function(e){xe({type:null}),e&&Pe()},Re=r().createElement(r().Fragment,null,"cancel"===Ne.type&&r().createElement(d.Z,{requestId:Ne.requestId,onClose:De}),["edit","create"].includes(Ne.type)&&r().createElement(p.Z,{variant:Ne.type,requestId:Ne.requestId,onClose:De})),Be=t&&r().createElement(l.Button,{variant:"primary",onClick:function(){return xe({type:"create"})}},"Create request");if(0===_e.length)return r().createElement(l.Bullseye,{style:{height:"auto"},className:"pf-u-mt-lg"},be?r().createElement(l.Spinner,{size:"xl"}):r().createElement(l.EmptyState,{variant:"large"},r().createElement(l.EmptyStateIcon,{icon:b.ZP}),r().createElement(l.Title,{headingLevel:"h3",size:"lg"},t?"No access requests":"You have no access requests"),r().createElement(l.EmptyStateBody,null,t?"Click the button below to create an access request.":"You have no pending Red Hat access requests."),Be),Re);var Fe="filter-status",Ae="Filter by ".concat(a[a.length-1].toLowerCase()),Ge=function(e){var t=e.colName,a=e.value,n=e.setValue,c=r().useState(a),s=i()(c,2),u=s[0],o=s[1];return r().createElement("form",{style:{display:"flex"},onSubmit:function(e){e.preventDefault(),n(u)}},r().createElement(l.TextInput,{name:"".concat(t,"-filter"),id:"".concat(t,"-filter"),type:"search",placeholder:"Filter by ".concat(t),"aria-label":"".concat(t," search input"),value:u,onChange:function(e){return o(e)}}),r().createElement(l.Button,{variant:"control",type:"submit","aria-label":"Search button for ".concat(t," filter")},r().createElement(f.ZP,null)))},Ze=r().createElement(l.Toolbar,{id:"access-requests-table-toolbar"},r().createElement(l.ToolbarContent,null,r().createElement(l.ToolbarItem,null,r().createElement(l.InputGroup,null,r().createElement(l.Dropdown,{isOpen:Z,onSelect:function(e){z(!1),H(e.target.value),J(!1)},toggle:r().createElement(l.DropdownToggle,{onToggle:function(e){return z(e)}},r().createElement(h.ZP,null)," ",j),dropdownItems:(t?[0,1,5]:[1,2,6]).map((function(e){return a[e]})).map((function(e){return r().createElement(l.DropdownItem,{key:e,value:e,component:"button"},(0,E.kC)(e))}))}),["Status","Decision"].includes(j)&&r().createElement(r().Fragment,null,r().createElement("span",{id:Fe,hidden:!0},Ae),r().createElement(l.Select,{"aria-labelledby":Fe,variant:"checkbox","aria-label":"Select statuses",onToggle:function(e){return J(e)},onSelect:function(e,t){W.includes(t)?X(W.filter((function(e){return e!==t}))):X([].concat(u()(W),[t]))},isOpen:U,selections:Array.from(W),isCheckboxSelectionBadgeHidden:!0,placeholderText:Ae},y.map((function(e){return r().createElement(l.SelectOption,{key:e,value:e},(0,E.kC)(e))})))),"First name"===j&&r().createElement(Ge,{colName:j,value:oe,setValue:ie}),"Last name"===j&&r().createElement(Ge,{colName:j,value:pe,setValue:Ee}),"Request ID"===j&&r().createElement(Ge,{colName:j,value:te,setValue:ae}),"Account number"===j&&r().createElement(Ge,{colName:j,value:ce,setValue:le}))),r().createElement(l.ToolbarItem,null,Be),r().createElement(l.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},r().createElement(F,{id:"top"}))),r().createElement(l.ToolbarContent,null,r().createElement(l.ChipGroup,{categoryName:"Status"},W.map((function(e){return r().createElement(l.Chip,{key:e,onClick:function(){return X(W.filter((function(t){return t!==e})))}},e)}))),oe&&r().createElement(l.ChipGroup,{categoryName:"First name"},r().createElement(l.Chip,{onClick:function(){return ie("")}},oe)),pe&&r().createElement(l.ChipGroup,{categoryName:"Last name"},r().createElement(l.Chip,{onClick:function(){return Ee("")}},pe)),te&&r().createElement(l.ChipGroup,{categoryName:"Request ID"},r().createElement(l.Chip,{onClick:function(){return ae("")}},te)),ce&&r().createElement(l.ChipGroup,{categoryName:"Account number"},r().createElement(l.Chip,{onClick:function(){return le("")}},ce)),(W.length>0||te||ce)&&r().createElement(l.Button,{variant:"link",onClick:function(){X([]),ae(""),le("")}},"Clear filters")));function ze(e){return t?0===e?30:15:[0,6].includes(e)?20:10}var Oe=r().createElement(m.TableComposable,{"aria-label":"Access requests table",variant:"compact"},r().createElement(m.Thead,null,r().createElement(m.Tr,null,a.map((function(e,t){return r().createElement(m.Th,{key:t,sort:{sortBy:{index:o,direction:_},onSort:I,columnIndex:t},width:ze(t)},e)})),t&&r().createElement(m.Th,null))),r().createElement(m.Tbody,null,be?r().createElement(m.Tr,{colSpan:6},r().createElement(l.Bullseye,null,r().createElement(l.Spinner,{size:"xl"}))):_e.map((function(e,n){return r().createElement(m.Tr,{key:n},r().createElement(m.Td,{dataLabel:a[0]},r().createElement(c.Link,{to:"/".concat(e[0])},e[0])),r().createElement(m.Td,{dataLabel:a[1]},e[1]),r().createElement(m.Td,{dataLabel:a[2]},e[2]),r().createElement(m.Td,{dataLabel:a[3]},e[3]),r().createElement(m.Td,{dataLabel:a[4]},e[4]),t?r().createElement(m.Td,{dataLabel:a[5]},r().createElement(S.p,{requestId:e[0],status:e[5],onLabelClick:function(){return X([].concat(u()(W.filter((function(e){return e!==status}))),[status]))},hideActions:!0})):r().createElement(m.Td,{dataLabel:a[5]},e[5]),t?r().createElement(m.Td,{actions:(0,S.m)(e[5],e[0],xe)}):r().createElement(m.Td,{dataLabel:a[6]},r().createElement(S.p,{requestId:e[0],status:e[6]})))}))));return r().createElement(r().Fragment,null,Ze,Oe,r().createElement(F,{id:"bottom"}),Re)};C.displayName="AccessRequestsTable";const T=C,q=(0,c.withRouter)((function(e){var t=e.isInternal;return r().createElement(r().Fragment,null,r().createElement(l.PageSection,{variant:"light"},r().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-sm"},"Access Requests"),r().createElement("p",null,"Below is a list of all submitted requests for read only account access.")),r().createElement(l.PageSection,{padding:{default:"noPadding"}},r().createElement(T,{isInternal:t})))}))}}]);
//# sourceMappingURL=876.6ade78d368b9b02e51c7.js.map