(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b4a39768"],{"3a2f":function(t,e,i){"use strict";var n=i("ade3"),a=(i("a9e3"),i("e25e"),i("9734"),i("4ad4")),s=i("a9ad"),o=i("16b7"),r=i("b848"),l=i("f573"),c=i("f2e7"),u=i("80d2"),d=i("d9bd"),h=i("58df");e["a"]=Object(h["a"])(s["a"],o["a"],r["a"],l["a"],c["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?e.offsetLeft:e.left,s=0;return this.top||this.bottom||n?s=a+e.width/2-i.width/2:(this.left||this.right)&&(s=a+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(s,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,a=0;return this.top||this.bottom?a=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=n+e.height/2-i.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),!1===this.attach&&(a+=this.pageYOffset),"".concat(this.calcYOverflow(a),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(u["h"])(this.maxWidth),minWidth:Object(u["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(u["u"])(this,"activator",!0)&&Object(d["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=a["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")}),e.keydown=function(e){e.keyCode===u["z"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},5311:function(t,e,i){"use strict";var n=i("5607"),a=i("2b0e");e["a"]=a["default"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"5f47":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[i("v-autocomplete",{attrs:{dense:"",label:"Filter by Event",items:t.events,"item-text":"name","item-value":"id","hide-details":"","search-input":t.eventSearchInput,loading:t.findingEvents,"no-data-text":"No Result Found! Type here to Search event","menu-props":{contentClass:"list-style"},"return-object":"",clearable:""},on:{"update:searchInput":function(e){t.eventSearchInput=e},"update:search-input":function(e){t.eventSearchInput=e}},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("span",{staticClass:"d-block font-weight-medium text-truncate"},[t._v(" "+t._s(e.item.name)+" ")])]}},{key:"item",fn:function(e){return[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-sm"},[t._v(" "+t._s(e.item.name)+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.$utils.formatDate(e.item.start_date,"MMM D, YYYY"))+" - "+t._s(t.$utils.formatDate(e.item.end_date,"MMM D, YYYY"))+" ")])],1)]}}]),model:{value:t.selectedEvent,callback:function(e){t.selectedEvent=e},expression:"selectedEvent"}})],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[i("v-autocomplete",{attrs:{disabled:!t.selectedEvent,dense:"",label:"Filter by Race",items:t.races,"item-text":"name","item-value":"id","menu-props":{contentClass:"list-style"},loading:t.loadingRaces,"no-data-text":"No Race Found!","hide-details":"",clearable:"","return-object":""},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-sm"},[t._v(" "+t._s(e.item.name)+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.$utils.formatDate(e.item.start_datetime))+" ")])],1)]}}]),model:{value:t.selectedRace,callback:function(e){t.selectedRace=e},expression:"selectedRace"}})],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[i("v-autocomplete",{attrs:{dense:"",label:"Filter by Organization",items:t.organizations,"item-text":"name","item-value":"id","menu-props":{contentClass:"list-style"},loading:t.loadingOrganizations,"no-data-text":"No Organization Found!","hide-details":"",clearable:"","return-object":""},scopedSlots:t._u([{key:"item",fn:function(e){return[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-sm"},[t._v(" "+t._s(e.item.name)+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s((t.$const.ORGANIZATION_TYPE_MAP[e.item.type]||{}).title||e.item.type)+" ")])],1)]}}]),model:{value:t.tableFiltering.organization,callback:function(e){t.$set(t.tableFiltering,"organization",e)},expression:"tableFiltering.organization"}})],1),i("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[i("div",{staticClass:"d-flex align-center"},[i("v-text-field",{staticClass:"me-3 search-input",attrs:{value:t.tableFiltering.search,dense:"",clearable:"","hide-details":"",placeholder:"Search ..."},on:{change:function(e){return t.$set(t.tableFiltering,"search",e)},"click:clear":function(e){return t.$set(t.tableFiltering,"search",null)}}})],1)]),i("v-col",{attrs:{cols:"12",md:"4",sm:"6"}},[i("v-checkbox",{staticClass:"mt-0",attrs:{"hide-details":"",label:"Include DNS/DNF?"},model:{value:t.tableFiltering.include_dns_dnf,callback:function(e){t.$set(t.tableFiltering,"include_dns_dnf",e)},expression:"tableFiltering.include_dns_dnf"}})],1)],1)],1),i("v-data-table",{staticClass:"text-no-wrap",attrs:{headers:t.tableColumns,items:t.records,options:t.tableOptions,"server-items-length":t.pagination.total,loading:t.loading,"footer-props":{"items-per-page-options":t.$const.DEFAULT_TABLE_PER_PAGE_OPTIONS,"show-current-page":!0,"show-first-last-page":!0}},on:{"update:options":[function(e){t.tableOptions=e},function(e){return t.loadRecords()}]},scopedSlots:t._u([{key:"item.rider",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-center"},[i("v-avatar",{staticClass:"v-avatar-light-bg success--text",attrs:{color:"success",size:"30"}},[n._rider&&n._rider._user.avatar?i("v-img",{attrs:{src:n._rider._user.avatar}}):i("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.avatarText(n._rider?n._rider.first_name:n.more_data.first_name||"N/A"))+" ")])],1),i("div",{staticClass:"d-flex flex-column pl-1"},[n.rider?i("router-link",{tag:"a",staticClass:"font-weight-semibold text-truncate text-decoration-none",attrs:{to:t.getRiderRoute(n.rider)}},[n._rider?i("v-icon",{attrs:{small:""}},[t._v(t._s(t.icons.mdiAccountCheck))]):t._e(),t._v(" "+t._s(t.displayRiderName(n))+" ")],1):i("span",{staticClass:"font-weight-semibold text-truncate text-decoration-none"},[t._v(" "+t._s(t.displayRiderName(n))+" ")])],1)],1)]}},{key:"item.race",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex flex-column"},[i("span",{staticClass:"font-weight-semibold text-truncate"},[t._v(" "+t._s(n._race.name)+" ")]),i("span",{staticClass:"text-xs text-truncate"},[t._v(" "+t._s(n._race._event.name)+" ")])])]}},{key:"item.create_datetime",fn:function(e){var n=e.item;return[i("span",{staticClass:"pr-1"},[t._v(t._s(t.$utils.formatDate(n.create_datetime,"M/D/YY")))]),i("span",{staticClass:"text-caption"},[t._v(t._s(t.$utils.formatDate(n.create_datetime,"HH:mm")))])]}},{key:"item.place",fn:function(e){var n=e.item;return["ok"==n.finish_status?[i("span",{staticClass:"font-weight-semibold"},[t._v(t._s(n.place||"N/A"))]),1==n.place?i("v-icon",{staticClass:"ml-1",attrs:{size:"20",color:"warning"}},[t._v(t._s(t.icons.mdiPodiumGold))]):t._e()]:i("v-chip",{attrs:{outlined:"",color:(t.$const.RACE_FINISH_STATUS_MAP[n.finish_status]||{}).css,small:""}},[t._v(" "+t._s((t.$const.RACE_FINISH_STATUS_MAP[n.finish_status]||{}).title||n.finish_status)+" ")])]}},{key:"item.actions",fn:function(e){var n=e.item;return[i("div",{staticClass:"d-flex align-end justify-end"},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:"",small:""},on:{click:function(e){return t.$refs.formDialogRef.show(n)}}},"v-btn",s,!1),a),[i("v-icon",{attrs:{size:"18"}},[t._v(" "+t._s(t.icons.mdiPencilOutline)+" ")])],1)]}}],null,!0)},[i("span",[t._v("Edit")])])],1)]}}])})],1)},a=[],s=i("53ca"),o=(i("4de4"),i("d3b7"),i("c740"),i("498a"),i("99af"),i("7db0"),i("94ed")),r=i("ed09"),l=i("bb36"),c=i("cbec"),u=i("0e20"),d=i("2ef0"),h=i.n(d),v=i("2405"),f=i("a18c"),p={components:{},props:{apiParams:{type:Object,required:!1},hiddenColumns:{type:Array,required:!1},riderRoute:{type:String,default:f["b"].PUBLIC_RIDER_PROFILE}},setup:function(t,e){var i=Object(v["e"])(),n=i.route,a=Object(r["J"])([]),d=Object(r["J"])({total:0}),f=Object(r["J"])(!1),p=Object(r["J"])(!1),m=Object(r["J"])(!1),b=Object(r["J"])({}),g=Object(r["J"])(n.value.query||{}),_=[{text:"#ID",value:"id",align:"start"},{text:"RIDER",value:"rider"},{text:"RACE",value:"race",cellClass:"race-td"},{text:"PLACE",value:"place"},{text:"CREATED AT",value:"create_datetime"}].filter((function(e){return(t.hiddenColumns||[]).findIndex((function(t){return e.value===t}))<0})),C=Object(r["J"])([]),x=Object(r["J"])([]),y=Object(r["J"])([]),O=Object(r["J"])(""),A=Object(r["J"])(null),I=Object(r["J"])(null),k=Object(r["J"])(!1);Object(r["Y"])(O,(function(){S(O.value)})),Object(r["Y"])(A,(function(){I.value=null,E(1),V()})),Object(r["Y"])(I,(function(t){t&&(b.value.sortBy=["place"]),E(1)}));var j=function(t){k.value?C.value=[]:(k.value=!0,l["a"].get("cycling_org/event/",{params:{search:t}}).then((function(t){k.value=!1,C.value=t.data.results}),(function(t){k.value=!1,Object(c["notifyDefaultServerError"])(t,!0)})))},S=h.a.debounce(j,500),R=function(t){var e="";return e=t._rider?"".concat(t._rider.first_name," ").concat(t._rider.last_name).trim():"".concat(t.more_data.first_name||""," ").concat(t.more_data.last_name||"").trim(),e||"N/A"},E=function(e){e&&(b.value.page=e);var i=Object.assign({exfields:"more_data"},g.value,t.apiParams,Object(c["refineVTableOptions"])(b.value));i.include_dns_dnf||(i.finish_status="ok"),delete i.include_dns_dnf,I.value?i.race=I.value.id:A.value&&(i.event=A.value.id),f.value=!0,i.organization&&"object"===Object(s["a"])(i.organization)&&(i.organization=i.organization.id),l["a"].get("cycling_org/race_result/",{params:i}).then((function(t){f.value=!1,a.value=t.data.results,d.value=t.data.pagination}),(function(t){f.value=!1,Object(c["notifyDefaultServerError"])(t,!0)}))},V=function(){A.value?(p.value=!0,l["a"].get("cycling_org/race/",{params:{event:A.value.id,page_size:0}}).then((function(t){p.value=!1,x.value=t.data.results}),(function(t){p.value=!1,Object(c["notifyDefaultServerError"])(t,!0)}))):x.value=[]},D=function(){m.value=!0,l["a"].get("cycling_org/organization/",{params:{page_size:0}}).then((function(t){m.value=!1,y.value=t.data.results,n.value.query.organization&&(g.value.organization=h.a.find(y.value,{id:1*n.value.query.organization}))}),(function(t){m.value=!1,Object(c["notifyDefaultServerError"])(t,!0)}))},w=function(e){return t.riderRoute?{name:t.riderRoute,params:{record_id:e}}:{}};return Object(r["Y"])((function(){return g}),(function(t,e){E(1)}),{deep:!0}),Object(r["A"])((function(){D()})),{records:a,eventSearchInput:O,events:C,races:x,organizations:y,selectedEvent:A,selectedRace:I,findEvents:j,findEventsDebounce:S,findingEvents:k,displayRiderName:R,tableColumns:_,tableOptions:b,tableFiltering:g,loading:f,loadingRaces:p,loadingOrganizations:m,pagination:d,avatarText:u["a"],getRiderRoute:w,loadRecords:E,loadRaces:V,icons:{mdiPencilOutline:o["Lb"],mdiEyeOutline:o["bb"],mdiAccountGroupOutline:o["g"],mdiAccountMultipleOutline:o["h"],mdiClose:o["O"],mdiCheck:o["B"],mdiInformationOutline:o["wb"],mdiRefresh:o["Tb"],mdiAccountCheck:o["c"],mdiFileExcelOutline:o["fb"],mdiPodiumGold:o["Qb"]}}}},m=p,b=i("2877"),g=i("6544"),_=i.n(g),C=i("c6a6"),x=i("8212"),y=i("8336"),O=i("b0af"),A=i("99d9"),I=i("ac7c"),k=i("cc20"),j=i("62ad"),S=i("8fea"),R=i("132d"),E=i("adda"),V=i("5d23"),D=i("0fd9"),w=i("8654"),T=i("3a2f"),F=Object(b["a"])(m,n,a,!1,null,"65320110",null);e["a"]=F.exports;_()(F,{VAutocomplete:C["a"],VAvatar:x["a"],VBtn:y["a"],VCard:O["a"],VCardText:A["c"],VCheckbox:I["a"],VChip:k["a"],VCol:j["a"],VDataTable:S["a"],VIcon:R["a"],VImg:E["a"],VListItemContent:V["b"],VListItemSubtitle:V["c"],VListItemTitle:V["d"],VRow:D["a"],VTextField:w["a"],VTooltip:T["a"]})},"6ca7":function(t,e,i){},9734:function(t,e,i){},ac7c:function(t,e,i){"use strict";var n=i("15fd"),a=i("5530"),s=(i("d401"),i("0d03"),i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),o=i("c37a"),r=i("fe09"),l=["title"];e["a"]=r["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(n["a"])(t,l));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(t,e,i){},ec37:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("race-results-cmp")},a=[],s=i("5f47"),o={components:{RaceResultsCmp:s["a"]},props:{},setup:function(t,e){return{}}},r=o,l=i("2877"),c=Object(l["a"])(r,n,a,!1,null,null,null);e["default"]=c.exports},fe09:function(t,e,i){"use strict";i.d(e,"b",(function(){return r}));i("277d"),i("45fc"),i("d3b7"),i("d401"),i("0d03"),i("25f0"),i("4de4");var n=i("c37a"),a=i("5311"),s=i("8547"),o=i("58df");function r(t){t.preventDefault()}e["a"]=Object(o["a"])(n["a"],a["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=n["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:r},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:r},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===n&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-b4a39768.ed915ec0.js.map