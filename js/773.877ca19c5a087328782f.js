(self.webpackChunk_redhat_cloud_services_access_requests_frontend=self.webpackChunk_redhat_cloud_services_access_requests_frontend||[]).push([[773],{17733:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(70885),r=n(92950),l=n.n(r),o=n(56976),c=n(51352),i=n(83215),s=n(45697),u=n.n(s),d=n(24874),m=function(e){var t=e.requestId,n=e.onClose,r=l().useState(!1),s=(0,a.Z)(r,2),u=s[0],m=s[1],p=(0,c.I0)();return l().createElement(o.Modal,{title:"Cancel request?",isOpen:!0,variant:"small",onClose:function(){return n(!1)},actions:[l().createElement(o.Button,{key:"confirm",variant:"danger",onClick:function(){m(!0),d.Z.patch("".concat("/api/rbac/v1","/cross-account-requests/").concat(t,"/"),{status:"cancelled"},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.errors&&e.errors.length>0)throw Error(e.errors.map((function(e){return e.detail})).join("\n"));p((0,i.wN)({variant:"success",title:"Request cancelled successfully"})),m(!1),n(!0)})).catch((function(e){p((0,i.wN)({variant:"danger",title:"There was an error cancelling your request",description:e.message})),m(!1),n(!0)}))}},"Yes, cancel"),l().createElement(o.Button,{key:"cancel",variant:"link",onClick:function(){return n(!1)}},"No, keep")]},"Request ",l().createElement("b",null,t)," will be withdrawn.",u&&l().createElement(o.Spinner,{size:"lg"}))};m.propTypes={requestId:u().string,onClose:u().func};const p=m},42863:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});var a=n(70885),r=n(92950),l=n.n(r),o=n(56976),c=n(34046),i=n(84564),s=n(80164),u=n(24432),d=n(51352),m=n(83215),p=n(31643),E=n(45697),f=n.n(E),g=n(24874),h="Customers will be able to see this information as part of your request",y={"first name":h,"last name":h,"account number":"This is the account number that you would like to receive read access to","access duration":"This is the time frame you would like to be granted read access to accounts","organization id":"This is the org id of the account that you would like to receive read access to"},b="Invalid Account number",v=function(e){return l().createElement(o.Popover,{bodyContent:l().createElement("p",null,y[e])},l().createElement("button",{type:"button","aria-label":"More info for ".concat(e),onClick:function(e){return e.preventDefault()},"aria-describedby":"form-name",className:"pf-c-form__group-label-help"},l().createElement(c.ZP,{noVerticalAlign:!0})))},S=new Date;S.setDate(S.getDate()-1);var T=new Date;T.setDate(T.getDate()+60);var C=function(e){return e.toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"})},k=function(e){var t=e.split("/");if(3!==t.length)return new Date;var n=t[0].padStart(2,"0"),a=t[1].padStart(2,"0"),r=t[2].padStart(4,"0");return new Date("".concat(r,"-").concat(n,"-").concat(a,"T00:00:00"))},w=function(e){var t=e.user,n=void 0===t?{}:t,r=e.targetAccount,c=e.setTargetAccount,i=e.targetOrg,s=e.setTargetOrg,d=e.start,m=e.setStart,p=e.end,E=e.setEnd,f=e.disableAccount,g=e.disableOrgId,h=e.isLoading,y=e.error,b=l().useState(),w=(0,a.Z)(b,2),x=w[0],Z=w[1],I=l().useState(y?"error":"default"),_=(0,a.Z)(I,2),q=_[0],A=_[1],D=l().useState(y?"error":"default"),N=(0,a.Z)(D,2),F=N[0],P=N[1],R=function(e){if((0,u.qb)(e)){if(e<S)return E(""),"Start date must be today or later";if(e>T)return E(""),"Start date must be within 60 days of today"}return""},B=function(e){if((0,u.qb)(x)&&x>e)return"End date must be after from date";var t=new Date(x);return t.setFullYear(t.getFullYear()+1),e>t?"Access duration may not be longer than one year":""};return l().createElement(o.Form,{onSubmit:function(e){return e.preventDefault()},isDisabled:h},l().createElement(o.Title,{headingLevel:"h2"},"Request details"),l().createElement(o.Split,{hasGutter:!0},l().createElement(o.SplitItem,{isFilled:!0},l().createElement(o.FormGroup,{label:"First name",labelIcon:v("first name")},l().createElement(o.TextInput,{id:"first-name",value:n.first_name,isDisabled:!0}))),l().createElement(o.SplitItem,{isFilled:!0},l().createElement(o.FormGroup,{label:"Last name",labelIcon:v("last name")},l().createElement(o.TextInput,{id:"last-name",value:n.last_name,isDisabled:!0})))),l().createElement(o.FormGroup,{label:"Account number",isRequired:!0,labelIcon:v("account number"),helperText:"Enter the account number you would like access to",helperTextInvalid:"Please enter a valid account number",validated:q},l().createElement(o.TextInput,{id:"account-number",value:r,onChange:function(e){c(e),A("default")},isRequired:!0,placeholder:"Example, 8675309",validated:q,isDisabled:f})),l().createElement(o.FormGroup,{label:"Organization id",isRequired:!0,labelIcon:v("organization id"),helperText:"Enter the organization id you would like access to",helperTextInvalid:"Please enter a valid organization id",validated:F},l().createElement(o.TextInput,{id:"org-id",value:i,onChange:function(e){s(e),P("default")},isRequired:!0,placeholder:"Example, 1234567",validated:F,isDisabled:g})),l().createElement(o.FormGroup,{label:"Access duration",isRequired:!0,labelIcon:v("access duration")},l().createElement(o.Split,null,l().createElement(o.SplitItem,null,l().createElement(o.DatePicker,{width:"300px","aria-label":"Start date",value:d,dateFormat:C,dateParse:k,placeholder:"mm/dd/yyyy",onChange:function(e,t){Z(new Date(t)),m(e),(0,u.qb)(t)&&!R(t)?(t.setDate(t.getDate()+7),E(C(t))):E("")},validators:[R]})),l().createElement(o.SplitItem,{style:{padding:"6px 12px 0 12px"}},"to"),l().createElement(o.SplitItem,null,l().createElement(o.DatePicker,{width:"300px","aria-label":"End date",value:p,dateFormat:C,dateParse:k,placeholder:"mm/dd/yyyy",onChange:function(e,t){B(t)?E(""):E(e)},validators:[B],rangeStart:d})))))};w.propTypes={user:f().any,targetAccount:f().any,setTargetAccount:f().any,targetOrg:f().any,setTargetOrg:f().any,start:f().any,setStart:f().any,end:f().any,setEnd:f().any,disableAccount:f().any,disableOrgId:f().any,isLoading:f().any,error:f().any};var x={paddingBottom:"16px"},Z=function(e){var t=e.targetAccount,n=e.start,a=e.end,r=e.roles,c=e.isLoading,s=e.error,u=e.onClose,d=null;if(c)d=l().createElement(o.EmptyState,null,l().createElement(o.EmptyStateIcon,{icon:function(){return l().createElement(o.Spinner,{size:"lg"})}}),l().createElement(o.Title,{headingLevel:"h2",size:"lg"},"Submitting access request"),l().createElement(o.Button,{variant:"link",onClick:u},"Close"));else if(s){var m=l().useContext(o.WizardContextConsumer);d=l().createElement(o.EmptyState,null,l().createElement(o.EmptyStateIcon,{icon:i.ZP,color:"#C9190B"}),l().createElement(o.Title,{headingLevel:"h2",size:"lg"},s.title),l().createElement(o.EmptyStateBody,null,s.description),s.title===b&&l().createElement(o.Button,{variant:"primary",onClick:function(){return m.goToStepById(1)}},"Return to Step 1"))}else d=l().createElement(l().Fragment,null,l().createElement(o.Title,{headingLevel:"h2",style:x},"Review details"),l().createElement("table",null,l().createElement("tr",null,l().createElement("td",{style:x},l().createElement("b",null,"Account number")),l().createElement("td",{style:x},t)),l().createElement("tr",null,l().createElement("td",{style:{paddingRight:"32px"}},l().createElement("b",null,"Access duration")),l().createElement("td",null)),l().createElement("tr",null,l().createElement("td",null,"From"),l().createElement("td",null,n)),l().createElement("tr",null,l().createElement("td",{style:x},"To"),l().createElement("td",{style:x},a)),l().createElement("tr",null,l().createElement("td",null,l().createElement("b",null,"Roles")),l().createElement("td",null,r[0])),r.slice(1).map((function(e){return l().createElement("tr",{key:e},l().createElement("td",null),l().createElement("td",null,e))}))));return l().createElement(l().Fragment,null,d)};Z.propTypes={targetAccount:f().any,start:f().any,end:f().any,roles:f().any,isLoading:f().any,error:f().any,onClose:f().any};var I=function(e){var t=e.requestId,n=e.variant,r=e.onClose,c="edit"===n,i=l().useState(!0),u=(0,a.Z)(i,2),E=u[0],f=u[1],h=l().useState(),y=(0,a.Z)(h,2),v=y[0],S=y[1],T=l().useState(),C=(0,a.Z)(T,2),k=C[0],x=C[1],I=l().useState(),_=(0,a.Z)(I,2),q=_[0],A=_[1],D=l().useState(),N=(0,a.Z)(D,2),F=N[0],P=N[1],R=l().useState(),B=(0,a.Z)(R,2),L=B[0],O=B[1],j=l().useState(),z=(0,a.Z)(j,2),G=z[0],M=z[1],Y=l().useState([]),H=(0,a.Z)(Y,2),V=H[0],W=H[1],J=l().useState(!1),Q=(0,a.Z)(J,2),U=Q[0],K=Q[1],X=l().useState(1),$=(0,a.Z)(X,2),ee=$[0],te=$[1],ne=(0,d.I0)(),ae=Boolean(q||L||G||V.length>0);l().useEffect((function(){var e=window.insights.chrome.auth.getUser(),n=c?g.Z.get("".concat("/api/rbac/v1","/cross-account-requests/").concat(t,"/"),{headers:{Accept:"application/json"}}):new Promise((function(e){return e(!0)}));Promise.all([e,n]).then((function(e){var n=(0,a.Z)(e,2),r=n[0],l=n[1];if(!(r&&r.identity&&r.identity.user))throw Error("Couldn't get current user. Make sure you're logged in");if(x(r.identity.user),c){if(l.errors)throw Error(l.errors.map((function(e){return e.detail})).join("\n"));if(!l||!l.target_account)throw Error("Could not fetch details for request ".concat(t));A(l.target_account),O(l.start_date),M(l.end_date),W(l.roles.map((function(e){return e.display_name}))),P(l.org_id)}f(!1)})).catch((function(e){ne((0,m.wN)({variant:"danger",title:"Could not load access request",description:e.message}))}))}),[]);var re=[q,L,G].every(Boolean),le=V.length>0,oe=[{id:1,name:"Request details",component:l().createElement(w,{user:k,targetAccount:q,setTargetAccount:A,targetOrg:F,setTargetOrg:P,start:L,setStart:O,end:G,setEnd:M,disableAccount:c,isLoading:E,error:v}),enableNext:re},{id:2,name:"Select roles",component:l().createElement(p.Z,{roles:V,setRoles:W}),enableNext:le,canJumpTo:re},{id:3,name:"Review details",component:l().createElement(Z,{targetAccount:q,start:L,end:G,roles:V,isLoading:E,error:v,setError:S,onClose:function(){return r(!1)}}),canJumpTo:re&&le,enableNext:!E,nextButtonText:"Finish"}],ce="".concat(n,"-request"),ie="".concat(n," request");return l().createElement(l().Fragment,null,l().createElement(o.Modal,{variant:"large",style:{height:"900px"},showClose:!1,hasNoBodyWrapper:!0,isOpen:!U,"aria-describedby":ie,"aria-labelledby":ce},l().createElement(o.Wizard,{titleId:ce,descriptionId:ie,title:(0,s.kC)(n)+" request",steps:oe,onClose:function(){return ae?K(!0):r(!1)},onSave:function(){f(!0);var e={target_account:q,start_date:L,end_date:G,target_org:F,roles:V};g.Z[c?"put":"post"]("".concat("/api/rbac/v1","/cross-account-requests/").concat(c?"/".concat(t,"/"):""),e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.errors&&e.errors.length>0)throw Error(e.errors[0].detail);ne((0,m.wN)({variant:"success",title:"".concat(c?"Edited":"Created"," access request"),description:e.request_id})),r(!0)})).catch((function(e){var t=/Account .* does not exist/.test(e.message);S({title:t?b:"Could not ".concat(n," access request"),description:t?"Please return to Step 1: Request details and input a new account number for your request.":e.message}),f(!1)}))},startAtStep:ee,onNext:function(e){var t=e.id;S(),te(t)},onBack:function(e){var t=e.id;S(),te(t)},onGoToStep:function(e){var t=e.id;S(),te(t)}})),U&&l().createElement(o.Modal,{title:"Exit request creation?",variant:"small",titleIconVariant:"warning",isOpen:!0,onClose:function(){return K(!1)},actions:[l().createElement(o.Button,{key:"confirm",variant:"primary",onClick:function(){return r(!1)}},"Exit"),l().createElement(o.Button,{key:"cancel",variant:"link",onClick:function(){return K(!1)}},"Stay")]},"All inputs will be discarded."))};I.propTypes={requestId:f().string,variant:f().any,onClose:f().func};const _=I},31643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var a=n(42982),r=n(70885),l=n(92950),o=n.n(l),c=n(56976),i=n(98975),s=n(8755),u=n(48794),d=n(80164),m=n(38296),p=n(51352),E=n(83215),f=n(45697),g=n.n(f),h=n(24874),y=[],b=[],v=function(e){var t=e.roles,n=e.setRoles,l=void 0===n,f=["Role name","Role description","Permissions"],v=o().useState(Array.from(y)),S=(0,r.Z)(v,2),T=S[0],C=S[1],k=o().useState(b),w=(0,r.Z)(k,2),x=w[0],Z=w[1];o().useEffect((function(){0!==y.length&&0!==b.length||h.Z.get("".concat("/api/rbac/v1","/roles/?limit=9999&order_by=display_name&add_fields=groups_in_count"),{headers:{Accept:"application/json"}}).then((function(e){var t=e.data;t.forEach((function(e){e.isExpanded=!1,e.permissions=e.accessCount})),y=t.map((function(e){return Object.assign({},e)})),C(t);var n=Array.from(t.map((function(e){return e.applications})).flat().reduce((function(e,t){return e.add(t),e}),new Set)).sort();b=n,Z(n)})).catch((function(e){return qe((0,E.wN)({variant:"danger",title:"Could not fetch roles list",description:e.message}))}))}),[]);var I=o().useState("name"),_=(0,r.Z)(I,2),q=_[0],A=_[1],D=o().useState("asc"),N=(0,r.Z)(D,2),F=N[0],P=N[1],R=function(e,t,n){A(t),P(n)},B=o().useState(!1),L=(0,r.Z)(B,2),O=L[0],j=L[1],z=o().useState(f[0]),G=(0,r.Z)(z,2),M=G[0],Y=G[1],H=o().useState(!1),V=(0,r.Z)(H,2),W=V[0],J=V[1],Q=o().useState([]),U=(0,r.Z)(Q,2),K=U[0],X=U[1],$=o().useState(""),ee=(0,r.Z)($,2),te=ee[0],ne=ee[1],ae=K.length>0||te,re="filter-application",le="Filter by application",oe=t.map((function(e){return e.display_name})),ce=T.filter((function(e){return!(K.length>0)||e.applications.find((function(e){return K.includes(e)}))})).filter((function(e){return e.name.toLowerCase().includes(te)})).filter((function(e){return!l||oe.includes(e.display_name)})),ie=o().useState(1),se=(0,r.Z)(ie,2),ue=se[0],de=se[1],me=o().useState(10),pe=(0,r.Z)(me,2),Ee=pe[0],fe=pe[1],ge=function(e){var t=e.id;return o().createElement(c.Pagination,{itemCount:ce.length,perPage:Ee,page:ue,onSetPage:function(e,t){return de(t)},id:"access-requests-roles-table-pagination-"+t,variant:t,onPerPageSelect:function(e,t){de(1),fe(t)},isCompact:"top"===t})};ge.propTypes={id:g().string};var he=ce.sort((function(e,t){return"number"==typeof e[q]?"asc"===F?e[q]-t[q]:t[q]-e[q]:"asc"===F?(e[q]+"").localeCompare(t[q]):(t[q]+"").localeCompare(e[q])})).slice((ue-1)*Ee,ue*Ee),ye=o().useState(!1),be=(0,r.Z)(ye,2),ve=be[0],Se=be[1],Te=t.length>0,Ce=!!Te&&null,ke=t.length===ce.length&&t.length>0||Ce,we=function(e,a,r){var l=he[r].display_name;n(a?t.concat(l):t.filter((function(e){return e!==l})))},xe=function(e,t){n(t?ce.map((function(e){return e.display_name})):[])},Ze=o().createElement(c.Button,{variant:"link",onClick:function(){X([]),ne("")}},"Clear filters"),Ie=l?null:o().createElement(c.Toolbar,{id:"access-requests-roles-table-toolbar"},o().createElement(c.ToolbarContent,null,o().createElement(c.ToolbarItem,null,o().createElement(c.Dropdown,{onSelect:function(){return Se(!ve)},position:"left",toggle:o().createElement(c.DropdownToggle,{splitButtonItems:[o().createElement(c.DropdownToggleCheckbox,{key:"a",id:"example-checkbox-2","aria-label":Te?"Deselect all":"Select all",isChecked:ke,onClick:function(){return xe(0,!Te)}})],onToggle:function(e){return Se(e)},isDisabled:0===T.length},0!==t.length&&o().createElement(o().Fragment,null,t.length," selected")),isOpen:ve,dropdownItems:[o().createElement(c.DropdownItem,{key:"0",onClick:function(){return xe(0,!1)}},"Select none (0 items)"),o().createElement(c.DropdownItem,{key:"1",onClick:function(){return n(t.concat(he.map((function(e){return e.display_name}))))}},"Select page (",Math.min(he.length,Ee)," items)"),o().createElement(c.DropdownItem,{key:"2",onClick:function(){return xe(0,!0)}},"Select all (",ce.length," items)")]})),o().createElement(c.ToolbarItem,null,o().createElement(c.InputGroup,null,o().createElement(c.Dropdown,{isOpen:O,onSelect:function(e){j(!1),Y(e.target.value),J(!1)},toggle:o().createElement(c.DropdownToggle,{onToggle:function(e){return j(e)}},o().createElement(s.ZP,null)," ",M),dropdownItems:["Role name","Application"].map((function(e){return o().createElement(c.DropdownItem,{key:e,value:e,component:"button"},(0,d.kC)(e))}))}),"Application"===M?o().createElement(o().Fragment,null,o().createElement("span",{id:re,hidden:!0},le),o().createElement(c.Select,{"aria-labelledby":re,variant:"checkbox","aria-label":"Select applications",onToggle:function(e){return J(e)},onSelect:function(e,t){K.includes(t)?X(K.filter((function(e){return e!==t}))):X([].concat((0,a.Z)(K),[t]))},isOpen:W,selections:K,isCheckboxSelectionBadgeHidden:!0,placeholderText:le,style:{maxHeight:"400px",overflowY:"auto"}},x.map((function(e){return o().createElement(c.SelectOption,{key:e,value:e},(0,d.kC)(e.replace(/-/g," ")))})))):o().createElement(c.TextInput,{name:"rolesSearch",id:"rolesSearch",type:"search",iconVariant:"search","aria-label":"Search input",placeholder:"Filter by role name",value:te,onChange:function(e){return ne(e)}}))),o().createElement(c.ToolbarItem,{variant:"pagination",align:{default:"alignRight"}},o().createElement(ge,{id:"top"}))),ae&&o().createElement(c.ToolbarContent,null,te&&o().createElement(c.ChipGroup,{categoryName:"Role name"},o().createElement(c.Chip,{onClick:function(){return ne("")}},te)),K.length>0&&o().createElement(c.ChipGroup,{categoryName:"Status"},K.map((function(e){return o().createElement(c.Chip,{key:e,onClick:function(){return X(K.filter((function(t){return t!==e})))}},e)}))),Ze)),_e=["Application","Resource type","Operation"],qe=(0,p.I0)(),Ae=o().createElement(i.TableComposable,{"aria-label":"My user access roles",variant:"compact"},o().createElement(i.Thead,null,o().createElement(i.Tr,null,!l&&o().createElement(i.Th,null),o().createElement(i.Th,{width:30,sort:{sortBy:{index:q,direction:F},onSort:R,columnIndex:"name"}},f[0]),o().createElement(i.Th,{width:50,sort:{sortBy:{index:q,direction:F},onSort:R,columnIndex:"description"}},f[1]),o().createElement(i.Th,{width:10,sort:{sortBy:{index:q,direction:F},onSort:R,columnIndex:"permissions"},modifier:"nowrap"},f[2]))),0===T.length&&(0,a.Z)(Array(Ee).keys()).map((function(e){return o().createElement(i.Tbody,{key:e},o().createElement(i.Tr,null,!l&&o().createElement(i.Td,null),f.map((function(e,t){return o().createElement(i.Td,{dataLabel:e,key:t},o().createElement("div",{style:{height:"22px"},className:"ins-c-skeleton ins-c-skeleton__md"}," "))}))))})),he.map((function(e,n){return o().createElement(i.Tbody,{key:n},o().createElement(i.Tr,null,!l&&o().createElement(i.Td,{select:{rowIndex:n,onSelect:we,isSelected:t.find((function(t){return t===e.display_name}))}}),o().createElement(i.Td,{dataLabel:f[0]},e.display_name),o().createElement(i.Td,{dataLabel:f[1],className:"pf-m-truncate"},o().createElement(c.Tooltip,{entryDelay:1e3,content:e.description},o().createElement("span",{className:"pf-m-truncate pf-c-table__text"},e.description))),o().createElement(i.Td,{dataLabel:f[2],className:(0,m.css)("pf-c-table__compound-expansion-toggle",e.isExpanded&&"pf-m-expanded")},o().createElement("button",{type:"button",className:"pf-c-table__button",onClick:function(){return function(e){e.isExpanded=!e.isExpanded,C((0,a.Z)(T)),e.access||h.Z.get("".concat("/api/rbac/v1","/roles/").concat(e.uuid,"/"),{headers:{Accept:"application/json"}}).then((function(t){e.access=t.access.map((function(e){return e.permission.split(":")})),C((0,a.Z)(T))})).catch((function(t){return qe((0,E.wN)({variant:"danger",title:"Could not fetch permission list for ".concat(e.name,"."),description:t.message}))}))}(e)}},e.permissions))),o().createElement(i.Tr,{isExpanded:e.isExpanded,borders:!1},!l&&o().createElement(i.Td,null),o().createElement(i.Td,{className:"pf-u-p-0",colSpan:3},o().createElement(i.TableComposable,{isCompact:!0,className:"pf-m-no-border-rows"},o().createElement(i.Thead,null,o().createElement(i.Tr,null,_e.map((function(e){return o().createElement(i.Th,{key:e},e)})))),o().createElement(i.Tbody,null,Array.isArray(e.access)?e.access.map((function(e){return o().createElement(i.Tr,{key:e.join(":")},o().createElement(i.Td,{dataLabel:_e[0]},e[0]),o().createElement(i.Td,{dataLabel:_e[1]},e[1]),o().createElement(i.Td,{dataLabel:_e[2]},e[2]))})):(0,a.Z)(Array(e.permissions).keys()).map((function(e){return o().createElement(i.Tr,{key:e},_e.map((function(e){return o().createElement(i.Td,{key:e,dataLabel:e},o().createElement("div",{style:{height:"22px"},className:"ins-c-skeleton ins-c-skeleton__sm"}," "))})))})))))))})),0===he.length&&ae&&o().createElement(i.Tr,null,o().createElement(i.Td,{colSpan:f.length},o().createElement(c.EmptyState,{variant:"small"},o().createElement(c.EmptyStateIcon,{icon:u.ZP}),o().createElement(c.Title,{headingLevel:"h2",size:"lg"},"No matching requests found"),o().createElement(c.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),Ze))));return o().createElement(o().Fragment,null,!l&&o().createElement(o().Fragment,null,o().createElement(c.Title,{headingLevel:"h2"},"Select roles"),o().createElement("p",null,"Select the roles you would like access to.")),Ie,Ae,l&&o().createElement(ge,{id:"bottom"}))};v.propTypes={roles:g().any,setRoles:g().any};const S=v},24874:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(96992),r=n.n(a),l=n(93619),o=n(1140),c=n(85118),i=r().create();i.interceptors.request.use(l.w5),i.interceptors.response.use(l.xH),i.interceptors.response.use(null,l.Di),i.interceptors.response.use(null,(function(e){var t=o.Z.getStore();throw e.response&&403===e.response.status&&t.dispatch({type:c.j,payload:403}),e})),i.interceptors.response.use(null,l.ub),i.interceptors.response.use(null,l.ud);const s=i},42027:(e,t,n)=>{"use strict";n.d(t,{m:()=>f,p:()=>g});var a=n(70885),r=n(92950),l=n.n(r),o=n(56976),c=n(51352),i=n(83215),s=n(76710),u=n(4145),d=n(80164),m=n(45697),p=n.n(m),E=n(24874);function f(e,t,n){var a=[];return"pending"===e&&(a.push({title:"Edit",onClick:function(){return n({type:"edit",requestId:t})}}),a.push({title:"Cancel",onClick:function(){return n({type:"cancel",requestId:t})}})),{items:a,disable:0===a.length}}function g(e){var t=e.requestId,n=e.status,r=e.hideActions,m=l().useState(n),p=(0,a.Z)(m,2),f=p[0],g=p[1],h=l().useState(!1),y=(0,a.Z)(h,2),b=y[0],v=y[1],S=l().useState(!1),T=(0,a.Z)(S,2),C=T[0],k=T[1],w=(0,c.I0)();function x(e){k(!0),E.Z.patch("".concat("/api/rbac/v1","/cross-account-requests/").concat(t,"/"),{status:e},{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){if(t.errors&&t.errors.length>0)throw Error(t.errors.map((function(e){return e.detail})).join("\n"));w((0,i.wN)({variant:"success",title:"Request ".concat(e," successfully")})),g(e),v(!1),k(!1)})).catch((function(t){w((0,i.wN)({variant:"danger",title:"There was an error ".concat("approved"===e?"approving":"denying"," your request"),description:t.message})),k(!1)}))}var Z=l().createElement(o.Label,(0,s.Q)(f),(0,d.kC)(f));return r?Z:l().createElement(l().Fragment,null,b||"pending"===f?l().createElement(l().Fragment,null,l().createElement(o.Button,{className:"pf-u-mr-md",isDisabled:C||"approved"===f,variant:"primary",onClick:function(){return x("approved")}},"Approve"),l().createElement(o.Button,{className:"pf-u-mr-md",isDisabled:C||"denied"===f,variant:"danger",onClick:function(){return x("denied")}},"Deny")):Z,["approved","denied"].includes(f)&&l().createElement(o.Button,{variant:"plain","aria-label":"Edit status",onClick:function(){return v(!b)}},l().createElement(u.ZP,null)))}g.propTypes={requestId:p().string,status:p().any,hideActions:p().any}},76710:(e,t,n)=>{"use strict";n.d(t,{Q:()=>u});var a=n(92950),r=n.n(a),l=n(35451),o=n(84564),c=n(3235),i=n(18802),s=n(75427);function u(e){var t=null,n=null;return"pending"===e?(t="blue",n=r().createElement(i.ZP,null)):"approved"===e?(t="green",n=r().createElement(l.ZP,null)):"denied"===e?(t="red",n=r().createElement(o.ZP,null)):"cancelled"===e?(t="orange",n=r().createElement(c.ZP,null)):"expired"===e&&(t="grey",n=r().createElement(s.ZP,null)),{color:t,icon:n}}},11452:()=>{},10497:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},28992:()=>{},90479:()=>{},78752:()=>{},36974:()=>{}}]);