(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cff7edd"],{"3a2f":function(t,e,a){"use strict";a("9734");var i=a("4ad4"),n=a("a9ad"),s=a("16b7"),o=a("b848"),r=a("f573"),l=a("80d2"),c=a("d9bd"),d=a("58df");e["a"]=Object(d["a"])(n["a"],s["a"],o["a"],r["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,a=!this.bottom&&!this.left&&!this.top&&!this.right,i=!1!==this.attach?t.offsetLeft:t.left;let n=0;return this.top||this.bottom||a?n=i+t.width/2-e.width/2:(this.left||this.right)&&(n=i+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),this.calcXOverflow(n,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,a=!1!==this.attach?t.offsetTop:t.top;let i=0;return this.top||this.bottom?i=a+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(i=a+t.height/2-e.height/2),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),!1===this.attach&&(i+=this.pageYOffset),this.calcYOverflow(i)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(l["h"])(this.maxWidth),minWidth:Object(l["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(l["t"])(this,"activator",!0)&&Object(c["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=i["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===l["y"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"3ea3":function(t,e,a){"use strict";var i=a("c6a6"),n=a("8212"),s=a("4ca6"),o=a("8336"),r=a("b0af"),l=a("99d9"),c=a("62ad"),d=a("8fea"),u=a("2e4b"),h=a("132d"),g=a("adda"),v=a("5d23"),m=a("e449"),p=a("0fd9"),b=a("8654"),_=a("3a2f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(r["a"],[a(l["c"],[a(p["a"],[a(c["a"],{attrs:{cols:"12",md:"3",sm:"6"}},[a("div",{staticClass:"d-flex align-center"},[t.showActions?a(o["a"],{staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(e){return t.$emit("add-action-clicked")}}},[a(h["a"],{attrs:{left:""}},[t._v(t._s(t.icons.mdiCalendarPlus))]),t._v(" New Event ")],1):t._e(),a(b["a"],{staticClass:"me-3 search-input",attrs:{value:t.tableFiltering.search,dense:"",clearable:"","hide-details":"",placeholder:"Search ..."},on:{change:function(e){return t.$set(t.tableFiltering,"search",e)},"click:clear":function(e){return t.$set(t.tableFiltering,"search",null)}}})],1)]),a(c["a"],{attrs:{cols:"12",md:"3",sm:"6"}},[a(i["a"],{attrs:{dense:"",label:"Filter by Organization",items:t.organizations,"item-text":"name","item-value":"id","menu-props":{contentClass:"list-style"},loading:t.loadingOrganizations,"no-data-text":"No Organization Found!","hide-details":"",clearable:"","return-object":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a(v["b"],[a(v["d"],{staticClass:"text-sm"},[t._v(" "+t._s(e.item.name)+" ")]),a(v["c"],[t._v(" "+t._s((t.$const.ORGANIZATION_TYPE_MAP[e.item.type]||{}).title||e.item.type)+" ")])],1)]}}]),model:{value:t.tableFiltering.organization,callback:function(e){t.$set(t.tableFiltering,"organization",e)},expression:"tableFiltering.organization"}})],1),a(c["a"],{attrs:{cols:"12",md:"3",sm:"6"}},[a(m["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a(b["a"],t._g(t._b({staticClass:"pt-0 pb-0",attrs:{label:"From Date","hide-details":"",dense:"",readonly:"",clearable:""},model:{value:t.tableFiltering.start_date__gte,callback:function(e){t.$set(t.tableFiltering,"start_date__gte",e)},expression:"tableFiltering.start_date__gte"}},"v-text-field",n,!1),i))]}}]),model:{value:t.fromDateMenu,callback:function(e){t.fromDateMenu=e},expression:"fromDateMenu"}},[a(u["a"],{attrs:{color:"primary","no-title":""},on:{input:function(e){t.fromDateMenu=!1}},model:{value:t.tableFiltering.start_date__gte,callback:function(e){t.$set(t.tableFiltering,"start_date__gte",e)},expression:"tableFiltering.start_date__gte"}})],1)],1),a(c["a"],{attrs:{cols:"12",md:"3",sm:"6"}},[a(m["a"],{staticClass:"pl-2",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a(b["a"],t._g(t._b({staticClass:"pt-0 pb-0",attrs:{label:"To Date","hide-details":"",dense:"",readonly:"",clearable:""},model:{value:t.tableFiltering.start_date__lte,callback:function(e){t.$set(t.tableFiltering,"start_date__lte",e)},expression:"tableFiltering.start_date__lte"}},"v-text-field",n,!1),i))]}}]),model:{value:t.toDateMenu,callback:function(e){t.toDateMenu=e},expression:"toDateMenu"}},[a(u["a"],{attrs:{color:"primary"},on:{input:function(e){t.toDateMenu=!1}},model:{value:t.tableFiltering.start_date__lte,callback:function(e){t.$set(t.tableFiltering,"start_date__lte",e)},expression:"tableFiltering.start_date__lte"}})],1)],1)],1)],1),a(d["a"],{staticClass:"text-no-wrap",attrs:{headers:t.tableColumns,"sort-by":["start_date"],"sort-desc":[!1],items:t.records,options:t.tableOptions,"server-items-length":t.pagination.total,loading:t.loading,"footer-props":{"items-per-page-options":t.$const.DEFAULT_TABLE_PER_PAGE_OPTIONS,"show-current-page":!0,"show-first-last-page":!0}},on:{"update:options":[function(e){t.tableOptions=e},function(e){return t.loadRecords()}]},scopedSlots:t._u([{key:"item.name",fn:function(e){var i=e.item;return[a("a",{staticClass:"text-decoration-none",on:{click:function(e){return t.onClickName(i)}}},[a("div",{staticClass:"d-flex align-center"},[a(n["a"],{staticClass:"v-avatar-light-bg success--text",attrs:{color:"success",size:"30"}},[i.logo?a(g["a"],{attrs:{src:i.logo}}):t.$store.state.sitePrefs.site_ui__default_event_logo?a(g["a"],{attrs:{src:t.$store.state.sitePrefs.site_ui__default_event_logo}}):a("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.avatarText(i.name))+" ")])],1),a("div",{staticClass:"d-flex flex-column pl-1"},[t._t("table-name-section",(function(){return[a("span",{staticClass:"font-weight-semibold text-truncate text-decoration-none"},[t._v(" "+t._s(i.name)+" ")])]}),{item:i}),t._t("table-org-section",(function(){return[i.organization?a("small",{staticClass:"text--secondary"},[t.organization&&i.organization!=t.organization.id?a(_["a"],{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a(h["a"],t._g(t._b({attrs:{size:"14",color:"warning"}},"v-icon",n,!1),i),[t._v(t._s(t.icons.mdiShareVariant))])]}}],null,!0)},[a("span",[t._v("Shared with your organization!")])]):t._e(),t._v(" "+t._s(i._organization.name)+" ")],1):t._e()]}),{item:i})],2)],1)])]}},{key:"item.start_date",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$utils.formatDate(a.start_date,"MMM D, YYYY"))+" ")]}},{key:"item.end_date",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$utils.formatDate(a.end_date,"MMM D, YYYY","-"))+" ")]}},{key:"item.location",fn:function(e){var i=e.item;return[a("span",{staticClass:"font-weight-medium"},[t._v(t._s(i.country||"")+t._s(i.state?", "+i.state:"")+t._s(i.city?", "+i.city:""))])]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-end justify-end"},[a(_["a"],{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[t.organization&&t.organization.id!=i.organization?a(o["a"],t._g(t._b({staticClass:"mr-2",attrs:{icon:"",small:"",disabled:""}},"v-btn",r,!1),n),[a(h["a"],[t._v(t._s(t.icons.mdiShareVariant))])],1):a(o["a"],t._g(t._b({staticClass:"mr-2",attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("shared-orgs-action-clicked",i)}}},"v-btn",r,!1),n),[a(s["a"],{attrs:{overlap:"",color:"warning",content:Object.keys(i.shared_org_perms||{}).length,value:Object.keys(i.shared_org_perms||{}).length}},[a(h["a"],[t._v(t._s(t.icons.mdiShareVariant))])],1)],1)]}}],null,!0)},[a("span",[t._v("Share it with other organizations")])]),a(_["a"],{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a(o["a"],t._g(t._b({attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("edit-action-clicked",i)}}},"v-btn",s,!1),n),[a(h["a"],{attrs:{size:"18"}},[t._v(" "+t._s(t.icons.mdiPencilOutline)+" ")])],1)]}}],null,!0)},[a("span",[t._v("Edit")])])],1)]}}],null,!0)})],1)},y=[],O=(a("14d9"),a("94ed")),x=a("ed09"),C=a("bb36"),k=a("0e20"),w=a("cbec"),z=a("2405"),j=a("a18c"),T=a("2ef0"),A=a.n(T),D={components:{},props:{organization:{type:Object,required:!1},eventListUrl:{type:String,default:"cycling_org/event"},apiParams:{type:Object,required:!1},showActions:{type:Boolean,default:!1}},setup(t,e){const{route:a,router:i}=Object(z["e"])(),n=Object(x["J"])([]),s=Object(x["J"])({total:0}),o=Object(x["J"])(!1),r=Object(x["J"])(!1),l=Object(x["J"])({}),c=Object(x["J"])(a.value.query||{}),d=Object(x["J"])([]),u=Object(x["J"])(),h=Object(x["J"])(),g=[{text:"#ID",value:"id",align:"start"},{text:"TITLE",value:"name"},{text:"START",value:"start_date"},{text:"END",value:"end_date"},{text:"LOCATION",value:"location"}];t.showActions&&g.push({text:"ACTIONS",value:"actions",align:"end",sortable:!1});const v=e=>{e&&(l.value.page=e);const a=Object.assign({},c.value,t.apiParams,Object(w["refineVTableOptions"])(l.value));if(a.organization&&"object"===typeof a.organization&&(a.organization=a.organization.id),(a.order_by||"").endsWith("location")){var i="-"===a.order_by[0]?"-":"";a.order_by=["country","city","state"].map(t=>`${i}${t}`).join(",")}o.value=!0,C["a"].get(t.eventListUrl,{params:a}).then(t=>{o.value=!1,n.value=t.data.results,s.value=t.data.pagination},t=>{o.value=!1,Object(w["notifyDefaultServerError"])(t,!0)})},m=()=>{r.value=!0,C["a"].get("cycling_org/organization/",{params:{page_size:0}}).then(t=>{r.value=!1,d.value=t.data.results,a.value.query.organization&&(c.value.organization=A.a.find(d.value,{id:1*a.value.query.organization}))},t=>{r.value=!1,Object(w["notifyDefaultServerError"])(t,!0)})},p=a=>{t.showActions?e.emit("edit-action-clicked",a):i.push({name:j["b"].PUBLIC_EVENT_PROFILE,params:{record_id:a.id}})};return Object(x["Y"])(()=>c,(t,e)=>{v(1)},{deep:!0}),Object(x["A"])(()=>{m()}),{records:n,tableColumns:g,tableOptions:l,tableFiltering:c,loading:o,pagination:s,loadRecords:v,loadingOrganizations:r,organizations:d,avatarText:k["a"],onClickName:p,fromDateMenu:u,toDateMenu:h,icons:{mdiPencilOutline:O["Nb"],mdiCalendarPlus:O["y"],mdiShareVariant:O["Xb"]}}}},F=D,S=a("2877"),$=Object(S["a"])(F,f,y,!1,null,"c82c8f26",null);e["a"]=$.exports},9520:function(t,e,a){"use strict";a.r(e);var i=a("b0af"),n=a("132d"),s=a("71a3"),o=a("c671"),r=a("fe57"),l=a("aac8"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(i["a"],[a(r["a"],{attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a(s["a"],[a(n["a"],[t._v(t._s(t.icons.mdiTable))]),t._v(" Table")],1),a(s["a"],[a(n["a"],[t._v(t._s(t.icons.mdiCalendar))]),t._v(" Calendar")],1)],1),a(l["a"],{staticClass:"overflow-visible",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a(o["a"],[a("events-table-widget")],1),a(o["a"],[a("events-calendar-widget")],1)],1)],1)},d=[],u=a("94ed"),h=a("4272"),g=a("3ea3"),v=a("ed09"),m=a("2405"),p={components:{EventsTableWidget:g["a"],EventsCalendarWidget:h["a"]},props:{},setup(t,e){const{route:a}=Object(m["e"])(),i=Object(v["J"])(null);return Object(v["A"])(()=>{var t=a.value.params.tab;void 0===t&&(t=a.value.query.tab||void 0),i.value=void 0!==t?1*t:0}),{tab:i,icons:{mdiCalendar:u["u"],mdiTable:u["ac"]}}}},b=p,_=a("2877"),f=Object(_["a"])(b,c,d,!1,null,null,null);e["default"]=f.exports},9734:function(t,e,a){}}]);
//# sourceMappingURL=chunk-7cff7edd.ed496214.js.map