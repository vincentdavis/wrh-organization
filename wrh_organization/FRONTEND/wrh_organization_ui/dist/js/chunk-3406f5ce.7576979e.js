(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3406f5ce"],{"3a2f":function(t,e,a){"use strict";var i=a("ade3"),n=(a("a9e3"),a("e25e"),a("9734"),a("4ad4")),o=a("a9ad"),s=a("16b7"),r=a("b848"),l=a("f573"),c=a("f2e7"),u=a("80d2"),d=a("d9bd"),v=a("58df");e["a"]=Object(v["a"])(o["a"],s["a"],r["a"],l["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!this.bottom&&!this.left&&!this.top&&!this.right,n=!1!==this.attach?e.offsetLeft:e.left,o=0;return this.top||this.bottom||i?o=n+e.width/2-a.width/2:(this.left||this.right)&&(o=n+(this.right?e.width:-a.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(o,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,a=t.content,i=!1!==this.attach?e.offsetTop:e.top,n=0;return this.top||this.bottom?n=i+(this.bottom?e.height:-a.height)+(this.bottom?10:-10):(this.left||this.right)&&(n=i+e.height/2-a.height/2),this.nudgeTop&&(n-=parseInt(this.nudgeTop)),this.nudgeBottom&&(n+=parseInt(this.nudgeBottom)),!1===this.attach&&(n+=this.pageYOffset),"".concat(this.calcYOverflow(n),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["h"])(this.maxWidth),minWidth:Object(u["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["u"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=n["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===u["z"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(i["a"])(t,this.contentClass,!0),Object(i["a"])(t,"menuable__content__active",this.isActive),Object(i["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"3ea3a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"3",sm:"6"}},[a("div",{staticClass:"d-flex align-center"},[t.showActions?a("v-btn",{staticClass:"mr-5",attrs:{small:"",color:"primary"},on:{click:function(e){return t.$emit("add-action-clicked")}}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(t.icons.mdiCalendarPlus))]),t._v(" New Event ")],1):t._e(),a("v-text-field",{staticClass:"me-3 search-input",attrs:{value:t.tableFiltering.search,dense:"",clearable:"","hide-details":"",placeholder:"Search ..."},on:{change:function(e){return t.$set(t.tableFiltering,"search",e)},"click:clear":function(e){return t.$set(t.tableFiltering,"search",null)}}})],1)]),a("v-col",{attrs:{cols:"12",md:"3",sm:"6"}},[a("v-autocomplete",{attrs:{dense:"",label:"Filter by Organization",items:t.organizations,"item-text":"name","item-value":"id","menu-props":{contentClass:"list-style"},loading:t.loadingOrganizations,"no-data-text":"No Organization Found!","hide-details":"",clearable:"","return-object":""},scopedSlots:t._u([{key:"item",fn:function(e){return[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-sm"},[t._v(" "+t._s(e.item.name)+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s((t.$const.ORGANIZATION_TYPE_MAP[e.item.type]||{}).title||e.item.type)+" ")])],1)]}}]),model:{value:t.tableFiltering.organization,callback:function(e){t.$set(t.tableFiltering,"organization",e)},expression:"tableFiltering.organization"}})],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"6"}},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"primary",dark:"",small:""}},"v-btn",n,!1),i),[t._v(" Filter by time period ")])]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){return t.filterByDate("today")}}},[a("v-list-item-title",[t._v("Today")])],1),a("v-list-item",{on:{click:function(e){return t.filterByDate("next_7_days")}}},[a("v-list-item-title",[t._v("Next 7 Days")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Custom:")])],1),a("v-list-item",{staticClass:"mt-2"},[a("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"pt-0 pb-0",attrs:{label:"From Date","hide-details":"",dense:"",readonly:"",clearable:""},model:{value:t.tableFiltering.start_date__gte,callback:function(e){t.$set(t.tableFiltering,"start_date__gte",e)},expression:"tableFiltering.start_date__gte"}},"v-text-field",n,!1),i))]}}]),model:{value:t.fromDateMenu,callback:function(e){t.fromDateMenu=e},expression:"fromDateMenu"}},[a("v-date-picker",{attrs:{color:"primary","no-title":""},on:{input:function(e){t.fromDateMenu=!1}},model:{value:t.tableFiltering.start_date__gte,callback:function(e){t.$set(t.tableFiltering,"start_date__gte",e)},expression:"tableFiltering.start_date__gte"}})],1),a("v-menu",{staticClass:"pl-2",attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-text-field",t._g(t._b({staticClass:"pt-0 pb-0",attrs:{label:"To Date","hide-details":"",dense:"",readonly:"",clearable:""},model:{value:t.tableFiltering.start_date__lte,callback:function(e){t.$set(t.tableFiltering,"start_date__lte",e)},expression:"tableFiltering.start_date__lte"}},"v-text-field",n,!1),i))]}}]),model:{value:t.toDateMenu,callback:function(e){t.toDateMenu=e},expression:"toDateMenu"}},[a("v-date-picker",{attrs:{color:"primary"},on:{input:function(e){t.toDateMenu=!1}},model:{value:t.tableFiltering.start_date__lte,callback:function(e){t.$set(t.tableFiltering,"start_date__lte",e)},expression:"tableFiltering.start_date__lte"}})],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"3",sm:"6"}}),a("v-col",{attrs:{cols:"12",md:"3",sm:"6"}})],1)],1),a("v-data-table",{staticClass:"text-no-wrap",attrs:{headers:t.tableColumns,items:t.records,options:t.tableOptions,"server-items-length":t.pagination.total,loading:t.loading,"footer-props":{"items-per-page-options":t.$const.DEFAULT_TABLE_PER_PAGE_OPTIONS,"show-current-page":!0,"show-first-last-page":!0}},on:{"update:options":[function(e){t.tableOptions=e},function(e){return t.loadRecords()}]},scopedSlots:t._u([{key:"item.name",fn:function(e){var i=e.item;return[a("a",{staticClass:"text-decoration-none",on:{click:function(e){return t.onClickName(i)}}},[a("div",{staticClass:"d-flex align-center"},[a("v-avatar",{staticClass:"v-avatar-light-bg success--text",attrs:{color:"success",size:"30"}},[i.logo?a("v-img",{attrs:{src:i.logo}}):t.$store.state.sitePrefs.site_ui__default_event_logo?a("v-img",{attrs:{src:t.$store.state.sitePrefs.site_ui__default_event_logo}}):a("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.avatarText(i.name))+" ")])],1),a("div",{staticClass:"d-flex flex-column pl-1"},[t._t("table-name-section",(function(){return[a("span",{staticClass:"font-weight-semibold text-truncate text-decoration-none"},[t._v(" "+t._s(i.name)+" ")])]}),{item:i}),t._t("table-org-section",(function(){return[i.organization?a("small",{staticClass:"text--secondary"},[t.organization&&i.organization!=t.organization.id?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-icon",t._g(t._b({attrs:{size:"14",color:"warning"}},"v-icon",n,!1),i),[t._v(t._s(t.icons.mdiShareVariant))])]}}],null,!0)},[a("span",[t._v("Shared with your organization!")])]):t._e(),t._v(" "+t._s(i._organization.name)+" ")],1):t._e()]}),{item:i})],2)],1)])]}},{key:"item.start_date",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$utils.formatDate(a.start_date,"MMM D, YYYY"))+" ")]}},{key:"item.end_date",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.$utils.formatDate(a.end_date,"MMM D, YYYY","-"))+" ")]}},{key:"item.location",fn:function(e){var i=e.item;return[a("span",{staticClass:"font-weight-medium"},[t._v(t._s(i.country||"")+t._s(i.state?", "+i.state:"")+t._s(i.city?", "+i.city:""))])]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-end justify-end"},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[t.organization&&t.organization.id!=i.organization?a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{icon:"",small:"",disabled:""}},"v-btn",o,!1),n),[a("v-icon",[t._v(t._s(t.icons.mdiShareVariant))])],1):a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("shared-orgs-action-clicked",i)}}},"v-btn",o,!1),n),[a("v-badge",{attrs:{overlap:"",color:"warning",content:Object.keys(i.shared_org_perms||{}).length,value:Object.keys(i.shared_org_perms||{}).length}},[a("v-icon",[t._v(t._s(t.icons.mdiShareVariant))])],1)],1)]}}],null,!0)},[a("span",[t._v("Share it with other organizations")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("edit-action-clicked",i)}}},"v-btn",o,!1),n),[a("v-icon",{attrs:{size:"18"}},[t._v(" "+t._s(t.icons.mdiPencilOutline)+" ")])],1)]}}],null,!0)},[a("span",[t._v("Edit")])])],1)]}}],null,!0)})],1)},n=[],o=a("53ca"),s=(a("ac1f"),a("1276"),a("accc"),a("0d03"),a("8a79"),a("a15b"),a("d81d"),a("99af"),a("7db0"),a("d3b7"),a("94ed")),r=a("ed09"),l=a("bb36"),c=a("0e20"),u=a("cbec"),d=a("2405"),v=a("a18c"),f=a("2ef0"),m=a.n(f),b={components:{},props:{organization:{type:Object,required:!1},eventListUrl:{type:String,default:"cycling_org/event"},apiParams:{type:Object,required:!1},showActions:{type:Boolean,default:!1}},setup:function(t,e){var a=Object(d["e"])(),i=a.route,n=a.router,f=Object(r["J"])([]),b=Object(r["J"])({total:0}),h=Object(r["J"])(!1),g=Object(r["J"])(!1),p=Object(r["J"])({}),_=Object(r["J"])(i.value.query||{}),y=Object(r["J"])([]),O=Object(r["J"])(),x=Object(r["J"])(),C=[{text:"#ID",value:"id",align:"start"},{text:"TITLE",value:"name"},{text:"START",value:"start_date"},{text:"END",value:"end_date"},{text:"LOCATION",value:"location"}];t.showActions&&C.push({text:"ACTIONS",value:"actions",align:"end",sortable:!1});var k=function(t){var e=(new Date).toISOString().split("T")[0];if("today"==t)_.value.start_date=e,_.value.end_date=e;else{var a=new Date((new Date).setDate((new Date).getDate()+7));_.value.start_date=e,_.value.end_date=a.toISOString().split("T")[0]}T(1)},T=function(e){e&&(p.value.page=e);var a=Object.assign({},_.value,t.apiParams,Object(u["refineVTableOptions"])(p.value));if(a.organization&&"object"===Object(o["a"])(a.organization)&&(a.organization=a.organization.id),(a.order_by||"").endsWith("location")){var i="-"===a.order_by[0]?"-":"";a.order_by=["country","city","state"].map((function(t){return"".concat(i).concat(t)})).join(",")}h.value=!0,l["a"].get(t.eventListUrl,{params:a}).then((function(t){h.value=!1,f.value=t.data.results,b.value=t.data.pagination}),(function(t){h.value=!1,Object(u["notifyDefaultServerError"])(t,!0)}))},w=function(){g.value=!0,l["a"].get("cycling_org/organization/",{params:{page_size:0}}).then((function(t){g.value=!1,y.value=t.data.results,i.value.query.organization&&(_.value.organization=m.a.find(y.value,{id:1*i.value.query.organization}))}),(function(t){g.value=!1,Object(u["notifyDefaultServerError"])(t,!0)}))},D=function(a){t.showActions?e.emit("edit-action-clicked",a):n.push({name:v["b"].PUBLIC_EVENT_PROFILE,params:{record_id:a.id}})};return Object(r["Y"])((function(){return _}),(function(t,e){T(1)}),{deep:!0}),Object(r["A"])((function(){w()})),Object(r["v"])((function(){_.value.start_date__gte=(new Date).toISOString().split("T")[0]})),{records:f,tableColumns:C,tableOptions:p,tableFiltering:_,filterByDate:k,loading:h,pagination:b,loadRecords:T,loadingOrganizations:g,organizations:y,avatarText:c["a"],onClickName:D,fromDateMenu:O,toDateMenu:x,icons:{mdiPencilOutline:s["Nb"],mdiCalendarPlus:s["y"],mdiShareVariant:s["Xb"]}}}},h=b,g=a("2877"),p=a("6544"),_=a.n(p),y=a("c6a6"),O=a("8212"),x=a("4ca6"),C=a("8336"),k=a("b0af"),T=a("99d9"),w=a("62ad"),D=a("8fea"),j=a("2e4b"),z=a("132d"),S=a("adda"),A=a("8860"),V=a("da13"),F=a("5d23"),I=a("e449"),L=a("0fd9"),$=a("8654"),E=a("3a2f"),M=Object(g["a"])(h,i,n,!1,null,"3371b277",null);e["a"]=M.exports;_()(M,{VAutocomplete:y["a"],VAvatar:O["a"],VBadge:x["a"],VBtn:C["a"],VCard:k["a"],VCardText:T["c"],VCol:w["a"],VDataTable:D["a"],VDatePicker:j["a"],VIcon:z["a"],VImg:S["a"],VList:A["a"],VListItem:V["a"],VListItemContent:F["b"],VListItemSubtitle:F["c"],VListItemTitle:F["d"],VMenu:I["a"],VRow:L["a"],VTextField:$["a"],VTooltip:E["a"]})},9520:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-tabs",{attrs:{grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[a("v-icon",[t._v(t._s(t.icons.mdiTable))]),t._v(" Table")],1),a("v-tab",[a("v-icon",[t._v(t._s(t.icons.mdiCalendar))]),t._v(" Calendar")],1)],1),a("v-tabs-items",{staticClass:"overflow-visible",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("events-table-widget")],1),a("v-tab-item",[a("events-calendar-widget")],1)],1)],1)},n=[],o=a("94ed"),s=a("4272"),r=a("3ea3a"),l=a("ed09"),c=a("2405"),u={components:{EventsTableWidget:r["a"],EventsCalendarWidget:s["a"]},props:{},setup:function(t,e){var a=Object(c["e"])(),i=a.route,n=Object(l["J"])(null);return Object(l["A"])((function(){var t=i.value.params.tab;void 0===t&&(t=i.value.query.tab||void 0),n.value=void 0!==t?1*t:0})),{tab:n,icons:{mdiCalendar:o["u"],mdiTable:o["ac"]}}}},d=u,v=a("2877"),f=a("6544"),m=a.n(f),b=a("b0af"),h=a("132d"),g=a("71a3"),p=a("c671"),_=a("fe57"),y=a("aac8"),O=Object(v["a"])(d,i,n,!1,null,null,null);e["default"]=O.exports;m()(O,{VCard:b["a"],VIcon:h["a"],VTab:g["a"],VTabItem:p["a"],VTabs:_["a"],VTabsItems:y["a"]})},9734:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3406f5ce.7576979e.js.map