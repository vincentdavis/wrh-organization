(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42da377c"],{"1e65":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("b",[t._v("Filters")]),a("v-col",{staticClass:"ma-0 pa-0"},[a("DateRangePicker",{ref:"daterangepicker",on:{dateselected:t.dateselected}})],1),a("v-col",{staticClass:"ma-0 pa-0"},[a("v-text-field",{attrs:{label:"Id, Name, City, Postal, Address","single-line":"","hide-details":""},model:{value:t.Eventsearch,callback:function(e){t.Eventsearch=e},expression:"Eventsearch"}})],1),a("v-col",{staticClass:"ma-0 pa-0"},[a("v-autocomplete",{attrs:{items:t.StateList,"hide-details":"",label:"State"},model:{value:t.State,callback:function(e){t.State=e},expression:"State"}})],1),a("v-col",{staticClass:"ma-0 pa-0"},[a("v-autocomplete",{attrs:{multiple:"",items:t.DisciplineList,"small-chips":"","hide-details":"",label:"Discipline"},model:{value:t.Labels,callback:function(e){t.Labels=e},expression:"Labels"}})],1),a("v-col",{staticClass:"ma-0 pa-0"},[a("v-checkbox",{attrs:{"hide-details":"",label:"Is Featured"},model:{value:t.is_featured,callback:function(e){t.is_featured=e},expression:"is_featured"}})],1),a("v-col",{staticClass:"ma-0 pa-0"},[a("v-checkbox",{attrs:{"hide-details":"",label:"Is USAC Sanctioned"},model:{value:t.is_usac_sanctioned,callback:function(e){t.is_usac_sanctioned=e},expression:"is_usac_sanctioned"}})],1),a("v-divider",{staticClass:"mt-2"}),a("v-col",{staticClass:"ma-0 pa-0 mt-3"},[a("div",{staticClass:"d-flex justify-space-between",attrs:{color:"#8a8d93",elevation:"0"}},[a("v-btn",{attrs:{color:"primary",outlined:""},on:{click:t.ClearFilter}},[t._v("Clear")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.getEvent(null)}}},[t._v("Search")])],1)])],1),a("v-col",{attrs:{cols:"12",sm:"9"}},[a("v-data-table",{staticClass:"elevation-1 mt-2",attrs:{loading:t.EventLoader,dense:"","footer-props":{"items-per-page-options":[25]},headers:t.Eventheaders,items:t.AcaEvent.results,"item-key":"name",search:t.Eventsearch,options:t.pagination_events,"server-items-length":t.totalCount},on:{"update:options":function(e){t.pagination_events=e}},scopedSlots:t._u([{key:"item.register_url",fn:function(e){var i=e.item;return[a("a",{attrs:{href:i.links.register_url}},[t._v("Go Ressiter")])]}},{key:"item.website_url",fn:function(e){var i=e.item;return[a("a",{attrs:{href:i.links.website_url}},[t._v("Go WebSite")])]}},{key:"item.labels",fn:function(e){var i=e.item;return t._l(i.labels,(function(e){return a("v-chip",{key:e,staticClass:"pl-1",attrs:{small:""}},[t._v(t._s(e))])}))}},{key:"body",fn:function(e){var i=e.items;return[a("tbody",[t._l(i,(function(e){return a("tr",{key:e.id},[a("td",[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("div",{staticClass:"my-3 text-subtitle-1"},[t._v(" "+t._s(new Date(e.start_date).toLocaleDateString("en-us",{month:"short",day:"numeric"}))+" -"+t._s(new Date(e.end_date).toLocaleDateString("en-us",{month:"short",day:"numeric"}))+" ")])]),a("v-col",{attrs:{cols:"12",sm:"9"}},[a("h1",[t._v(t._s(e.name))]),a("div",{staticClass:"ml-2"},[t._v(" "+t._s(e.dates[0].address.city)+", "+t._s(e.dates[0].address.state)+", "+t._s(e.dates[0].address.postal)+" ")]),t._l(e.labels,(function(e,i){return a("v-chip",{key:i,staticClass:"ml-1",attrs:{color:"primary"}},[t._v(t._s(e))])})),e.links.website_url?a("a",{staticClass:"ml-2",attrs:{href:e.links.website_url}},[t._v("Website")]):t._e(),e.links.register_url?a("a",{staticClass:"ml-2",attrs:{href:e.links.register_url}},[t._v("Register")]):t._e()],2)],1)],1)],1)],1)])})),0!=i.length||t.EventLoader?t._e():a("tr",[a("center",[t._v("No receord found")])],1)],2)]}}])})],1)],1)],1)},n=[],s=a("3835"),r=a("b85c"),l=(a("d3b7"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{"hide-details":"",label:"Date Range",readonly:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},"v-text-field",n,!1),i))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-date-picker",{attrs:{range:"","no-title":"",scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.ok(t.date)}}},[t._v(" OK ")])],1)],1)}),o=[],c={methods:{ok:function(t){this.$refs.menu.save(t),this.$emit("dateselected",t)}},data:function(){return{date:[],menu:!1,modal:!1,menu2:!1}}},u=c,d=a("2877"),h=a("6544"),v=a.n(h),p=a("8336"),f=a("2e4b"),m=a("e449"),b=a("2fa4"),_=a("8654"),g=Object(d["a"])(u,l,o,!1,null,null,null),k=g.exports;v()(g,{VBtn:p["a"],VDatePicker:f["a"],VMenu:m["a"],VSpacer:b["a"],VTextField:_["a"]});var y=a("bb36"),C={components:{DateRangePicker:k},computed:{totalCount:function(){var t=25;return this.AcaEvent&&this.AcaEvent.pagination?this.AcaEvent.pagination.total:t}},mounted:function(){var t=this;y["a"].get("/usacycling/address/list_state/").then((function(e){t.StateList=e.data})),y["a"].get("/usacycling/event/list_labels/").then((function(e){t.DisciplineList=e.data}))},data:function(){return{AcaEvent:[],DateRange:[],State:null,StateList:[],Labels:[],DisciplineList:[],pagination_events:{},Eventsearch:"",EventLoader:!1,Eventheaders:[{text:"Results:",value:"name"}],is_featured:!1,is_usac_sanctioned:!1}},watch:{pagination_events:{handler:function(t){this.getEvent(t)},deep:!0}},methods:{ClearFilter:function(){this.is_usac_sanctioned=!1,this.is_featured=!1,this.State=null,this.DateRange=[],this.Labels=null,this.Eventsearch=null,this.$refs.daterangepicker.date=[]},dateselected:function(t){this.DateRange=t},FormURL:function(t,e){var a="",i=e;try{if(t&&t.sortBy.length>=1){var n,l=Object(r["a"])(t.sortBy.entries());try{for(l.s();!(n=l.n()).done;){var o=Object(s["a"])(n.value,2),c=o[0],u=o[1];t.sortDesc[c]?a+="&order_by=-"+u+"&":a+="&order_by="+u+"&"}}catch(d){l.e(d)}finally{l.f()}}return t&&(i+="&page="+t.page),this.DateRange.length>=1&&(i+="&range_start="+this.DateRange[0]+"&range_end="+this.DateRange[1]),this.State&&(i+="&dates__address__state="+this.State),this.Labels&&(i+="&labels="+this.Labels),this.is_featured&&(i+="&is_featured="+this.is_featured),this.is_usac_sanctioned&&(i+="&is_usac_sanctioned="+this.is_usac_sanctioned),i+a}catch(d){return i}},getEvent:function(t){var e=this;this.AcaEvent=[],this.EventLoader=!0,y["a"].get(this.FormURL(t,"usacycling/event/?")+"&search="+(this.Eventsearch||"")).then((function(t){e.AcaEvent=t.data,e.EventLoader=!1}))}}},x=C,V=a("c6a6"),S=a("b0af"),E=a("99d9"),D=a("ac7c"),I=a("cc20"),L=a("62ad"),w=a("8fea"),A=a("ce7e"),R=a("0fd9"),$=Object(d["a"])(x,i,n,!1,null,null,null);e["default"]=$.exports;v()($,{VAutocomplete:V["a"],VBtn:p["a"],VCard:S["a"],VCardText:E["c"],VCheckbox:D["a"],VChip:I["a"],VCol:L["a"],VDataTable:w["a"],VDivider:A["a"],VRow:R["a"],VTextField:_["a"]})},5311:function(t,e,a){"use strict";var i=a("5607"),n=a("2b0e");e["a"]=n["default"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"6ca7":function(t,e,a){},ac7c:function(t,e,a){"use strict";var i=a("15fd"),n=a("5530"),s=(a("d401"),a("0d03"),a("d3b7"),a("25f0"),a("6ca7"),a("ec29"),a("9d26")),r=a("c37a"),l=a("fe09"),o=["title"];e["a"]=l["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(i["a"])(t,o));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";a.d(e,"b",(function(){return l}));a("277d"),a("45fc"),a("d3b7"),a("d401"),a("0d03"),a("25f0"),a("4de4");var i=a("c37a"),n=a("5311"),s=a("8547"),r=a("58df");function l(t){t.preventDefault()}e["a"]=Object(r["a"])(i["a"],n["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,a=this.internalValue;return this.isMultiple?!!Array.isArray(a)&&a.some((function(a){return t.valueComparator(a,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:l},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var i=a.length;a=a.filter((function(a){return!t.valueComparator(a,e)})),a.length===i&&a.push(e)}else a=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(a,e)?null:e:!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})}}]);
//# sourceMappingURL=chunk-42da377c.1863a393.js.map