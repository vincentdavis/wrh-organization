(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a93f138e"],{"0e30":function(t,e,a){"use strict";var s=a("8212"),i=a("8336"),n=a("b0af"),r=a("99d9"),o=a("ce7e"),l=a("132d"),c=a("adda"),d=a("8860"),u=a("da13"),p=a("1800"),h=a("5d23"),m=a("2fa4"),v=function(){var t=this,e=t.$createElement,v=t._self._c||e;return v(n["a"],[v(r["d"],{staticClass:"align-start pb-3 pt-5"},[v("span",[t._v("Upcoming Events")]),v(m["a"]),v(i["a"],{attrs:{text:"",color:"info",to:{name:t.$rns.PUBLIC_EVENTS,query:{end_date__gte:t.today,organization:(t.apiParams||{}).organization}},"x-small":""}},[t._v("View All")])],1),v(o["a"]),v(r["c"],[v(d["a"],{staticClass:"pt-0"},[t._l(t.events,(function(e,i){return[v(u["a"],{key:"li-"+e.id,class:"d-flex px-0 ",attrs:{to:{name:t.$rns.PUBLIC_EVENT_PROFILE,params:{record_id:e.id}}}},[v(s["a"],{staticClass:"me-3",attrs:{size:"38"}},[v(c["a"],{attrs:{src:e.logo||a("66cb")}})],1),v(h["b"],[v(h["d"],[v("a",{staticClass:"text-decoration-none",attrs:{href:"javascript:"}},[t._v(t._s(e.name))])]),v(h["c"],[v(l["a"],{attrs:{size:"14"}},[t._v(" "+t._s(t.icons.mdiMapMarker)+" ")]),t._v(" "+t._s(e.country||"")+t._s(e.state?", "+e.state:"")+t._s(e.city?", "+e.city:"")+" ")],1)],1),v(p["a"],[v(h["a"],[t._v(" "+t._s(t.$utils.formatDate(e.start_date,"MMM D, YYYY"))+" "),v(l["a"],{attrs:{size:"14"}},[t._v(" "+t._s(t.icons.mdiCalendarBlankOutline)+" ")])],1)],1)],1),i<t.events.length-1?v(o["a"],{key:"d-"+e.id}):t._e()]})),t.events&&t.events.length?t._e():v(u["a"],{staticClass:"text-center"},[v(h["d"],[t._v("No Event!")])],1)],2)],1)],1)},_=[],g=a("94ed"),f=a("cbec"),b=a("bb36"),C=a("ed09"),y=a("c1df"),x=a.n(y),O={props:{apiParams:{type:Object,required:!1}},setup(t){const e=Object(C["J"])(!1),a=Object(C["J"])([]),s=x()().format("YYYY-MM-DD"),i=()=>{e.value=!0;const i=Object.assign({end_date__gte:s,page_size:5,order_by:"start_date,name"},t.apiParams);b["a"].get("cycling_org/event",{params:i}).then(t=>{e.value=!1,a.value=t.data.results},t=>{e.value=!1,Object(f["notifyDefaultServerError"])(t,!0)})};return Object(C["A"])(()=>{i()}),{events:a,today:s,icons:{mdiDotsVertical:g["V"],mdiCalendarBlankOutline:g["v"],mdiMapMarker:g["Jb"]}}}},w=O,A=a("2877"),j=Object(A["a"])(w,v,_,!1,null,null,null);e["a"]=j.exports},"2c64":function(t,e,a){},"3a2f":function(t,e,a){"use strict";a("9734");var s=a("4ad4"),i=a("a9ad"),n=a("16b7"),r=a("b848"),o=a("f573"),l=a("80d2"),c=a("d9bd"),d=a("58df");e["a"]=Object(d["a"])(i["a"],n["a"],r["a"],o["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,a=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let i=0;return this.top||this.bottom||a?i=s+t.width/2-e.width/2:(this.left||this.right)&&(i=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(i-=parseInt(this.nudgeLeft)),this.nudgeRight&&(i+=parseInt(this.nudgeRight)),this.calcXOverflow(i,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,a=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=a+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=a+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),this.calcYOverflow(s)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(l["h"])(this.maxWidth),minWidth:Object(l["h"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(l["t"])(this,"activator",!0)&&Object(c["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===l["y"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"3d86":function(t,e,a){},"43a6":function(t,e,a){"use strict";a("ec29"),a("3d86");var s=a("c37a"),i=a("604c"),n=a("58df");const r=Object(n["a"])(i["a"],s["a"]);e["a"]=r.extend({name:"v-radio-group",provide(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},methods:{genDefaultSlot(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},s["a"].options.methods.genDefaultSlot.call(this))},genInputSlot(){const t=s["a"].options.methods.genInputSlot.call(this);return delete t.data.on.click,t},genLabel(){const t=s["a"].options.methods.genLabel.call(this);return t?(t.data.attrs.id=this.computedId,delete t.data.attrs.for,t.tag="legend",t):null},onClick:i["a"].options.methods.onClick},render(t){const e=s["a"].options.render.call(this,t);return this._b(e.data,"div",this.attrs$),e}})},4463:function(t,e,a){"use strict";a.r(e);var s=a("8212"),i=a("8336"),n=a("b0af"),r=a("99d9"),o=a("cc20"),l=a("62ad"),c=a("ce7e"),d=a("132d"),u=a("adda"),p=a("0fd9"),h=function(){var t=this,e=t.$createElement,h=t._self._c||e;return h("div",{attrs:{id:"public-org-profile-view"}},[t.event.id?h(p["a"],[h(l["a"],{attrs:{md:"12",sm:"12",cols:"12"}},[h(n["a"],{staticClass:"banner"},[h("img",{staticClass:"white--text align-end banner-img",attrs:{src:t.event.prefs.banner_image||t.$store.state.sitePrefs.site_ui__default_event_banner_image||a("7b98")}}),h(r["c"],{staticClass:"position-relative"},[h(s["a"],{staticClass:"avatar-center",attrs:{size:"60",color:"white"}},[h(u["a"],{attrs:{src:t.event.logo||a("66cb")}})],1),h("div",{staticClass:"d-flex justify-space-between flex-wrap pt-12"},[h("div",{staticClass:"me-2 mb-2"},[h("h2",{staticClass:"pt-0 px-0"},[t._v(" "+t._s(t.event.name)+" ")]),t.event.organization?h("h3",{staticClass:"pt-0 pb-1 px-0 text-caption"},[t._v(" "+t._s(t.event._organization.name)+" ")]):t._e(),h(r["b"],{staticClass:"text-xs pa-0"},[h(d["a"],{staticClass:"mr-1",attrs:{size:"15"}},[t._v(t._s(t.icons.mdiCalendar))]),h("span",[t._v(t._s(t.$utils.formatDate(t.event.start_date,"MMM D, YYYY")))]),t.event.end_date?h("span",[t._v(" - "+t._s(t.$utils.formatDate(t.event.end_date,"MMM D, YYYY")))]):t._e(),h(i["a"],{staticClass:"ml-2",attrs:{rounded:"","x-small":"",text:"",title:"",target:"__blank__",href:"/feed/calendar/ics?event_id="+t.event.id}},[h(d["a"],{attrs:{small:""}},[t._v(t._s(t.icons.mdiCalendar))]),t._v(" Add To Calendar")],1)],1),h(r["b"],{staticClass:"text-xs pa-0 pt-1"},[h(d["a"],{staticClass:"mr-1",attrs:{size:"15"}},[t._v(t._s(t.icons.mdiMapMarker))]),h("span",[t._v(t._s(t.event.country||"")+t._s(t.event.state?", "+t.event.state:"")+t._s(t.event.city?", "+t.event.city:""))])],1),h("div",{staticClass:"mt-1 text-caption"},[h(o["a"],{attrs:{color:"primary",small:""}},[t._v("USAC Permitted")]),t.event.permit_no?h(o["a"],{staticClass:"ml-1",attrs:{color:"primary",small:""}},[t._v("Permit #: "),h("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.event.permit_no))])]):t._e(),h(o["a"],{staticClass:"ml-1",attrs:{color:"primary",small:""}},[t._v("Featured Event")])],1)],1),h("div",{staticClass:"d-flex me-8 mb-4"},[h(s["a"],{staticClass:"v-avatar-light-bg primary--text me-3",attrs:{size:"40",rounded:"",color:"primary"}},[h(d["a"],{attrs:{color:"primary",size:"22"}},[t._v(" "+t._s(t.icons.mdiBike)+" ")])],1),h("div",[h("h3",{staticClass:"text-xl font-weight-medium mb-n1"},[t._v(" "+t._s(t.event.summary.races_count||0)+" ")]),h("span",[t._v("Races")])])],1),h("div",{staticClass:"d-flex mb-4 me-4"},[h(s["a"],{staticClass:"v-avatar-light-bg primary--text me-3",attrs:{size:"40",rounded:"",color:"primary"}},[h(d["a"],{attrs:{color:"primary",size:"22"}},[t._v(" "+t._s(t.icons.mdiBikeFast)+" ")])],1),h("div",[h("h3",{staticClass:"text-xl font-weight-medium mb-n1"},[t._v(" "+t._s(t.event.summary.race_series_count||0)+" ")]),h("span",[t._v("Race Series")])])],1)]),h("div",{staticClass:"mt-4"},[h("div",{domProps:{innerHTML:t._s(t.event.description)}})]),h("div",{staticClass:"d-flex justify-space-between flex-wrap align-center mt-8 pa-0"},[h("div",[h(d["a"],{staticClass:"me-1",attrs:{size:"20"}},[t._v(" "+t._s(t.icons.mdiWeb)+" ")]),t.event.website?h("a",{staticClass:"font-weight-medium text-sm me-4 text-decoration-none",attrs:{href:t.event.website,target:"_blank"}},[t._v(" "+t._s(t.event.website)+" ")]):h("span",{staticClass:"text-sm me-4"},[t._v("-")])],1),h("div",[h(d["a"],{staticClass:"me-1",attrs:{size:"20"}},[t._v(" "+t._s(t.icons.mdiWeb)+" ")]),t.event.registration_website?h("a",{staticClass:"font-weight-medium text-sm me-4 text-decoration-none",attrs:{href:t.event.registration_website,target:"_blank"}},[t._v(" "+t._s(t.event.registration_website)+" ")]):h("span",{staticClass:"text-sm me-4"},[t._v("-")])],1),h("div",[h(d["a"],{staticClass:"me-1",attrs:{size:"20"}},[t._v(" "+t._s(t.icons.mdiEmail)+" ")]),t.event.organizer_email?h("a",{staticClass:"font-weight-medium text-sm me-4 text-decoration-none",attrs:{href:"mailto:"+t.event.organizer_email,target:"_blank"}},[t._v(" "+t._s(t.event.organizer_email)+" ")]):h("span",{staticClass:"text-sm me-4"},[t._v("-")])],1)])],1),t.event.prefs.information_board_content?[h(c["a"]),h(r["c"],{staticClass:"ck-content",domProps:{innerHTML:t._s(t.event.prefs.information_board_content)}})]:t._e(),t.event.attachments&&t.event.attachments.length?[h(c["a"]),h(r["c"],[h("h3",{staticClass:"mb-2"},[t._v("File Attachments:")]),h(p["a"],t._l(t.event.attachments,(function(e){return h(l["a"],{key:e.id,staticClass:"pa-1",attrs:{cols:"12",sm:"6",md:"4"}},[h(i["a"],{attrs:{plain:"",href:e.file,target:"_blank",color:"primary"}},[t._v(" "+t._s(e.title||e.file_name)+" "),h(d["a"],{attrs:{right:""}},[t._v(t._s(t.icons.mdiDownload))])],1)],1)})),1)],1)]:t._e()],2)],1),h(l["a"],{attrs:{cols:"12",md:"6"}},[h(n["a"],[h(r["d"],{staticClass:"align-start pb-3 pt-5"},[t._v("Event Location")]),h(c["a"]),h(r["c"],{staticClass:"pa-1"},[t.gmapApiKey?h("GoogleMap",{staticClass:"gmap-widget",attrs:{"api-key":t.gmapApiKey,latitude:t.event.location_lat,longitude:t.event.location_lon,readonly:""},on:{"update:latitude":function(e){return t.$set(t.event,"location_lat",e)},"update:longitude":function(e){return t.$set(t.event,"location_lon",e)}}}):t._e()],1)],1)],1),h(l["a"],{attrs:{cols:"12",md:"6"}},[h("event-races-widget",{staticClass:"home-widget",attrs:{event:t.event}})],1),h(l["a"],{attrs:{cols:"12",md:"6"}},[h("event-race-series-widget",{staticClass:"home-widget",attrs:{event:t.event}})],1)],1):t._e()],1)},m=[],v=a("ed09"),_=a("94ed"),g=a("bb36"),f=a("cbec"),b=(a("ac43"),a("a926")),C=a("2405"),y=a("6063"),x=a("0e30"),O=a("8fea"),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(n["a"],[a(r["d"],{staticClass:"align-start pb-3 pt-5"},[a("span",[t._v("Race List")])]),a(c["a"]),a(O["a"],{staticClass:"text-no-wrap",attrs:{headers:t.tableColumns,items:t.races,options:t.tableOptions,"server-items-length":t.pagination.total,loading:t.loading,"footer-props":{"items-per-page-options":t.$const.DEFAULT_TABLE_PER_PAGE_OPTIONS,"show-current-page":!0,"show-first-last-page":!0}},on:{"update:options":[function(e){t.tableOptions=e},function(e){return t.loadRaces()}]},scopedSlots:t._u([{key:"item.name",fn:function(e){var s=e.item;return[a("span",{staticClass:"text-truncate font-weight-semibold"},[t._v(" "+t._s(s.name)+" ")])]}},{key:"item.start_datetime",fn:function(e){var s=e.item;return[s.start_datetime?[a("span",{staticClass:"pr-1"},[t._v(t._s(t.$utils.formatDate(s.start_datetime,"MMM D, YYYY")))]),a("span",{staticClass:"text-caption"},[t._v(t._s(t.$utils.formatDate(s.start_datetime,"HH:mm")))])]:a("span",[t._v("-")])]}}])})],1)},A=[],j=(a("c1df"),a("0e20")),S={props:{event:{type:Object,required:!0}},setup(t){const e=Object(v["J"])([]),a=Object(v["J"])({total:0}),s=Object(v["J"])(!1),i=Object(v["J"])({}),n=Object(v["J"])({}),r=r=>{r&&(i.value.page=r);const o=Object.assign({event:t.event.id},n.value,Object(f["refineVTableOptions"])(i.value));s.value=!0,g["a"].get("cycling_org/race/",{params:o}).then(t=>{s.value=!1,e.value=t.data.results,a.value=t.data.pagination},t=>{s.value=!1,Object(f["notifyDefaultServerError"])(t,!0)})};Object(v["A"])(()=>{r()});const o=[{text:"#ID",value:"id",align:"start"},{text:"NAME",value:"name"},{text:"STARTED AT",value:"start_datetime"}];return{races:e,tableOptions:i,tableFiltering:n,loading:s,pagination:a,tableColumns:o,avatarText:j["a"],loadRaces:r,icons:{mdiAccountCheck:_["c"],mdiPodiumGold:_["Sb"]}}}},E=S,k=a("2877"),$=Object(k["a"])(E,w,A,!1,null,null,null),D=$.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(n["a"],[a(r["d"],{staticClass:"align-start pb-3 pt-5"},[a("span",[t._v("Race-Series List")])]),a(c["a"]),a(O["a"],{staticClass:"text-no-wrap",attrs:{headers:t.tableColumns,items:t.raceSeries,options:t.tableOptions,"server-items-length":t.pagination.total,loading:t.loading,"footer-props":{"items-per-page-options":t.$const.DEFAULT_TABLE_PER_PAGE_OPTIONS,"show-current-page":!0,"show-first-last-page":!0}},on:{"update:options":[function(e){t.tableOptions=e},function(e){return t.loadRaceSeries()}]},scopedSlots:t._u([{key:"item.name",fn:function(e){var s=e.item;return[a("span",{staticClass:"text-truncate font-weight-semibold"},[t._v(" "+t._s(s.name)+" ")])]}},{key:"item.start_datetime",fn:function(e){var s=e.item;return[s.start_datetime?[a("span",{staticClass:"pr-1"},[t._v(t._s(t.$utils.formatDate(s.start_datetime,"MMM D, YYYY")))]),a("span",{staticClass:"text-caption"},[t._v(t._s(t.$utils.formatDate(s.start_datetime,"HH:mm")))])]:a("span",[t._v("-")])]}}])})],1)},R=[],T={props:{event:{type:Object,required:!0}},setup(t){const e=Object(v["J"])([]),a=Object(v["J"])({total:0}),s=Object(v["J"])(!1),i=Object(v["J"])({}),n=Object(v["J"])({}),r=r=>{r&&(i.value.page=r);const o=Object.assign({event:t.event.id,fields:"id,name,start_datetime"},n.value,Object(f["refineVTableOptions"])(i.value));s.value=!0,g["a"].get("cycling_org/race_series/",{params:o}).then(t=>{s.value=!1,e.value=t.data.results,a.value=t.data.pagination},t=>{s.value=!1,Object(f["notifyDefaultServerError"])(t,!0)})};Object(v["A"])(()=>{r()});const o=[{text:"#ID",value:"id",align:"start"},{text:"NAME",value:"name"},{text:"STARTED AT",value:"start_datetime"}];return{raceSeries:e,tableOptions:i,tableFiltering:n,loading:s,pagination:a,tableColumns:o,avatarText:j["a"],loadRaceSeries:r,icons:{mdiAccountCheck:_["c"],mdiPodiumGold:_["Sb"]}}}},M=T,B=Object(k["a"])(M,I,R,!1,null,null,null),L=B.exports,V=a("6ba0"),z={components:{EventRaceSeriesWidget:L,EventRacesWidget:D,UpcomingEventsWidget:x["a"],RecentRaceResultsWidget:y["a"],OrganizationRaceResultsTab:b["a"],GoogleMap:V["a"]},setup(){const{route:t}=Object(C["e"])(),e=Object(v["J"])(null),a=Object(v["J"])(null),s=Object(v["J"])({}),i=t.value.params.record_id,n=()=>{g["a"].get("cycling_org/global_conf/GOOGLE_MAP_API_TOKEN").then(t=>{a.value=t.data},t=>{Object(f["notifyDefaultServerError"])(t,!0)})},r=()=>{g["a"].get("cycling_org/event/"+i,{params:{exfields:"summary,attachments"}}).then(t=>{const e=t.data;e.summary||(e.summary={}),s.value=e},t=>{Object(f["notifyDefaultServerError"])(t,!0)})};return Object(v["A"])(()=>{e.value=void 0!==t.value.params.tab?t.value.params.tab:0,r(),n()}),{event:s,loadEvent:r,tab:e,gmapApiKey:a,icons:{mdiFlagCheckered:_["ib"],mdiAccountPlus:_["j"],mdiOfficeBuildingCog:_["Mb"],mdiAccountMultipleOutline:_["h"],mdiBike:_["r"],mdiBikeFast:_["s"],mdiEmail:_["Y"],mdiPhone:_["Ob"],mdiCalendar:_["u"],mdiMapMarker:_["Jb"],mdiWeb:_["ec"],mdiDownload:_["W"]}}}},P=z,Y=(a("ea41"),Object(k["a"])(P,h,m,!1,null,null,null));e["default"]=Y.exports},"4bd4":function(t,e,a){"use strict";a("14d9");var s=a("58df"),i=a("7e2b"),n=a("3206");e["a"]=Object(s["a"])(i["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5311:function(t,e,a){"use strict";a("14d9");var s=a("5607"),i=a("2b0e");e["a"]=i["default"].extend({name:"rippleable",directives:{ripple:s["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},6063:function(t,e,a){"use strict";var s=a("8212"),i=a("8336"),n=a("b0af"),r=a("99d9"),o=a("cc20"),l=a("8fea"),c=a("ce7e"),d=a("132d"),u=a("adda"),p=a("2fa4"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(n["a"],[a(r["d"],{staticClass:"align-start pb-3 pt-5"},[a("span",[t._v("Recent Winners")]),a(p["a"]),a(i["a"],{attrs:{text:"",color:"info",to:{name:t.$rns.PUBLIC_RACE_RESULTS,query:{organization:(t.apiParams||{}).organization}},"x-small":""}},[t._v("View All")])],1),a(c["a"]),a(l["a"],{staticClass:"table-rounded",attrs:{headers:t.tableColumns,items:t.raceResults,"item-key":"fullName","hide-default-footer":""},scopedSlots:t._u([{key:"item.rider",fn:function(e){var i=e.item;return[a("div",{staticClass:"d-flex align-center"},[a(s["a"],{staticClass:"v-avatar-light-bg success--text",attrs:{color:"success",size:"30"}},[i._rider&&i._rider._user.avatar?a(u["a"],{attrs:{src:i._rider._user.avatar}}):a("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.avatarText(i._rider?i._rider.first_name:i.more_data.first_name||"N/A"))+" ")])],1),a("div",{staticClass:"d-flex flex-column pl-1"},[i.rider?a("router-link",{tag:"a",staticClass:"font-weight-semibold text-truncate text-decoration-none",attrs:{to:{name:t.$rns.PUBLIC_RIDER_PROFILE,params:{record_id:i.rider}}}},[i._rider?a(d["a"],{attrs:{small:""}},[t._v(t._s(t.icons.mdiAccountCheck))]):t._e(),t._v(" "+t._s(t.displayRiderName(i))+" ")],1):a("span",{staticClass:"font-weight-semibold text-truncate text-decoration-none"},[t._v(" "+t._s(t.displayRiderName(i))+" ")])],1)],1)]}},{key:"item.race",fn:function(e){var s=e.item;return[a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-semibold text-truncate"},[t._v(" "+t._s(s._race.name)+" ")]),a("span",{staticClass:"text-xs text-truncate"},[t._v(" "+t._s(s._race._event.name)+" ")])])]}},{key:"item.place",fn:function(e){var s=e.item;return["ok"==s.finish_status?[a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(s.place||"N/A"))]),1==s.place?a(d["a"],{staticClass:"ml-1",attrs:{size:"20",color:"warning"}},[t._v(t._s(t.icons.mdiPodiumGold))]):t._e()]:a(o["a"],{attrs:{outlined:"",color:(t.$const.RACE_FINISH_STATUS_MAP[s.finish_status]||{}).css,small:""}},[t._v(" "+t._s((t.$const.RACE_FINISH_STATUS_MAP[s.finish_status]||{}).title||s.finish_status)+" ")])]}}])})],1)},m=[],v=a("94ed"),_=a("ed09"),g=(a("c1df"),a("bb36")),f=a("cbec"),b=a("0e20"),C={props:{apiParams:{type:Object,required:!1}},setup(t){const e=Object(_["J"])([]),a=Object(_["J"])(!1),s=()=>{a.value=!0;const s=Object.assign({exfields:"more_data",page_size:6,place:1,order_by:"-id"},t.apiParams);g["a"].get("cycling_org/race_result",{params:s}).then(t=>{a.value=!1,e.value=t.data.results},t=>{a.value=!1,Object(f["notifyDefaultServerError"])(t,!0)})},i=t=>{var e="";return e=t._rider?`${t._rider.first_name} ${t._rider.last_name}`.trim():`${t.more_data.first_name||""} ${t.more_data.last_name||""}`.trim(),e||"N/A"};Object(_["A"])(()=>{s()});const n=[{text:"RIDER",value:"rider"},{text:"RACE",value:"race",cellClass:"race-td"},{text:"PLACE",value:"place"}];return{raceResults:e,tableColumns:n,avatarText:b["a"],displayRiderName:i,icons:{mdiAccountCheck:v["c"],mdiPodiumGold:v["Sb"]}}}},y=C,x=a("2877"),O=Object(x["a"])(y,h,m,!1,null,null,null);e["a"]=O.exports},"67b6":function(t,e,a){"use strict";a("2c64");var s=a("ba87"),i=a("9d26"),n=a("c37a"),r=a("7e2b"),o=a("a9ad"),l=a("4e82"),c=a("5311"),d=a("7560"),u=a("fe09"),p=a("80d2"),h=a("58df"),m=a("d9f7");const v=Object(h["a"])(r["a"],o["a"],c["a"],Object(l["a"])("radioGroup"),d["a"]);e["a"]=v.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:()=>({isFocused:!1}),computed:{classes(){return{"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused,...this.themeClasses,...this.groupClasses}},computedColor(){if(!this.isDisabled)return u["a"].options.computed.computedColor.call(this)},computedIcon(){return this.isActive?this.onIcon:this.offIcon},computedId(){return n["a"].options.computed.computedId.call(this)},hasLabel:n["a"].options.computed.hasLabel,hasState(){return(this.radioGroup||{}).hasState},isDisabled(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-"+this.radioGroup._uid},rippleState(){return u["a"].options.computed.rippleState.call(this)},validationState(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput(t){return u["a"].options.methods.genInput.call(this,"radio",t)},genLabel(){return this.hasLabel?this.$createElement(s["a"],{on:{click:u["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(p["s"])(this,"label")||this.label):null},genRadio(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput({name:this.computedName,value:this.value,...e}),this.genRipple(this.setTextColor(this.rippleState))])},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onChange(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:()=>{}},render(t){const e={staticClass:"v-radio",class:this.classes,on:Object(m["c"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return t("div",e,[this.genRadio(),this.genLabel()])}})},"69e7":function(t,e,a){"use strict";a("966b")},"6ba0":function(t,e,a){"use strict";var s=a("c6a6"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gmap-container"},[t.readonly?t._e():a(s["a"],{staticClass:"mb-1",attrs:{outlined:"",dense:"",items:t.searchResult,clerable:"",name:"address","search-input":t.search,label:"Locate Address",placeholder:"Locate Address",autocomplete:"off","item-text":"formatted_address","return-object":"","hide-details":""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:t.selectAddress},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),a("GmapMap",{style:t.mapStyle,attrs:{center:{lat:t.latitude||0,lng:t.longitude||0},zoom:7}},[a("GmapMarker",{attrs:{position:{lat:t.latitude||0,lng:t.longitude||0},draggable:!t.readonly},on:{dragend:function(e){return t.updateCoordinates({lat:e.latLng.lat(),lng:e.latLng.lng()})}}})],1)],1)},n=[],r=a("ebfd"),o=a.n(r),l=a("ed09"),c=a("cbec"),d=a("b9ee");const{googleMapsApiInitializer:u}=d["c"];window.getGoogleMapsAPI=d["b"];var p={props:{latitude:{type:Number,default:0},longitude:{type:Number,default:0},readonly:{type:Boolean,default:!1},apiKey:{type:String,required:!0},mapStyle:{default:"width: auto; height: 360px"}},emits:{"update:latitude":null,"update:longitude":null},setup(t,e){const a=Object(l["J"])(null),s=Object(l["J"])(null),i=Object(l["J"])([]);Object(l["Y"])(a,t=>{p(t)}),Object(l["A"])(()=>{u({key:t.apiKey,libraries:"places"},!1),setTimeout(r,300)});const n=t=>{e.emit("update:latitude",t.lat),e.emit("update:longitude",t.lng)},r=e=>{t.readonly||!e&&t.latitude&&t.longitude||o.a.getLocation({}).then(t=>{n({lat:t.lat,lng:t.lng})})},d=()=>{s.value&&(n({lat:s.value.geometry.location.lat,lng:s.value.geometry.location.lng}),Object(l["t"])(()=>{s.value=null}))},p=e=>{if(!e)return;let a="https://maps.googleapis.com/maps/api/geocode/json?key="+t.apiKey+"&address=";fetch(a+e).then(t=>t.json()).then(t=>{i.value=t.results}).catch(t=>{Object(c["notifyDefaultServerError"])(t)})};return{search:a,address:s,searchResult:i,selectAddress:d,getCurrentLocation:r,updateCoordinates:n}}},h=p,m=(a("69e7"),a("2877")),v=Object(m["a"])(h,i,n,!1,null,"114172e9",null);e["a"]=v.exports},"966b":function(t,e,a){},9734:function(t,e,a){},b87d:function(t,e,a){},ea41:function(t,e,a){"use strict";a("b87d")},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a.d(e,"b",(function(){return o}));a("14d9");var s=a("c37a"),i=a("5311"),n=a("8547"),r=a("58df");function o(t){t.preventDefault()}e["a"]=Object(r["a"])(s["a"],i["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-a93f138e.9d55ee41.js.map