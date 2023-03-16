(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2ecdf1e"],{"0e30":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title",{staticClass:"align-start pb-3 pt-5"},[s("span",[t._v("Upcoming Events")]),s("v-spacer"),s("v-btn",{attrs:{text:"",color:"info",to:{name:t.$rns.PUBLIC_EVENTS,query:{end_date__gte:t.today,organization:(t.apiParams||{}).organization}},"x-small":""}},[t._v("View All")])],1),s("v-divider"),s("v-card-text",[s("v-list",{staticClass:"pt-0"},[t._l(t.events,(function(e,i){return[s("v-list-item",{key:"li-"+e.id,class:"d-flex px-0 ",attrs:{to:{name:t.$rns.PUBLIC_EVENT_PROFILE,params:{record_id:e.id}}}},[s("v-avatar",{staticClass:"me-3",attrs:{size:"38"}},[s("v-img",{attrs:{src:e.logo||a("66cb")}})],1),s("v-list-item-content",[s("v-list-item-title",[s("a",{staticClass:"text-decoration-none",attrs:{href:"javascript:"}},[t._v(t._s(e.name))])]),s("v-list-item-subtitle",[s("v-icon",{attrs:{size:"14"}},[t._v(" "+t._s(t.icons.mdiMapMarker)+" ")]),t._v(" "+t._s(e.country||"")+t._s(e.state?", "+e.state:"")+t._s(e.city?", "+e.city:"")+" ")],1)],1),s("v-list-item-action",[s("v-list-item-action-text",[t._v(" "+t._s(t.$utils.formatDate(e.start_date,"MMM D, YYYY"))+" "),s("v-icon",{attrs:{size:"14"}},[t._v(" "+t._s(t.icons.mdiCalendarBlankOutline)+" ")])],1)],1)],1),i<t.events.length-1?s("v-divider",{key:"d-"+e.id}):t._e()]})),t.events&&t.events.length?t._e():s("v-list-item",{staticClass:"text-center"},[s("v-list-item-title",[t._v("No Event!")])],1)],2)],1)],1)},i=[],r=a("94ed"),n=a("cbec"),c=a("bb36"),o=a("ed09"),l=a("c1df"),d=a.n(l),u={props:{apiParams:{type:Object,required:!1}},setup:function(t){var e=Object(o["J"])(!1),a=Object(o["J"])([]),s=d()().format("YYYY-MM-DD"),i=function(){e.value=!0;var i=Object.assign({end_date__gte:s,page_size:5,order_by:"start_date,name"},t.apiParams);c["a"].get("cycling_org/event",{params:i}).then((function(t){e.value=!1,a.value=t.data.results}),(function(t){e.value=!1,Object(n["notifyDefaultServerError"])(t,!0)}))};return Object(o["A"])((function(){i()})),{events:a,today:s,icons:{mdiDotsVertical:r["V"],mdiCalendarBlankOutline:r["v"],mdiMapMarker:r["Jb"]}}}},v=u,m=a("2877"),_=a("6544"),f=a.n(_),p=a("8212"),g=a("8336"),b=a("b0af"),C=a("99d9"),h=a("ce7e"),x=a("132d"),O=a("adda"),A=a("8860"),y=a("da13"),V=a("1800"),I=a("5d23"),P=a("2fa4"),w=Object(m["a"])(v,s,i,!1,null,null,null);e["a"]=w.exports;f()(w,{VAvatar:p["a"],VBtn:g["a"],VCard:b["a"],VCardText:C["c"],VCardTitle:C["d"],VDivider:h["a"],VIcon:x["a"],VImg:O["a"],VList:A["a"],VListItem:y["a"],VListItemAction:V["a"],VListItemActionText:I["a"],VListItemContent:I["b"],VListItemSubtitle:I["c"],VListItemTitle:I["d"],VSpacer:P["a"]})},"23a7":function(t,e,a){},"48ee":function(t,e,a){"use strict";a("23a7")},6063:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"align-start pb-3 pt-5"},[a("span",[t._v("Recent Winners")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"info",to:{name:t.$rns.PUBLIC_RACE_RESULTS,query:{organization:(t.apiParams||{}).organization}},"x-small":""}},[t._v("View All")])],1),a("v-divider"),a("v-data-table",{staticClass:"table-rounded",attrs:{headers:t.tableColumns,items:t.raceResults,"item-key":"fullName","hide-default-footer":""},scopedSlots:t._u([{key:"item.rider",fn:function(e){var s=e.item;return[a("div",{staticClass:"d-flex align-center"},[a("v-avatar",{staticClass:"v-avatar-light-bg success--text",attrs:{color:"success",size:"30"}},[s._rider&&s._rider._user.avatar?a("v-img",{attrs:{src:s._rider._user.avatar}}):a("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.avatarText(s._rider?s._rider.first_name:s.more_data.first_name||"N/A"))+" ")])],1),a("div",{staticClass:"d-flex flex-column pl-1"},[s.rider?a("router-link",{tag:"a",staticClass:"font-weight-semibold text-truncate text-decoration-none",attrs:{to:{name:t.$rns.PUBLIC_RIDER_PROFILE,params:{record_id:s.rider}}}},[s._rider?a("v-icon",{attrs:{small:""}},[t._v(t._s(t.icons.mdiAccountCheck))]):t._e(),t._v(" "+t._s(t.displayRiderName(s))+" ")],1):a("span",{staticClass:"font-weight-semibold text-truncate text-decoration-none"},[t._v(" "+t._s(t.displayRiderName(s))+" ")])],1)],1)]}},{key:"item.race",fn:function(e){var s=e.item;return[a("div",{staticClass:"d-flex flex-column"},[a("span",{staticClass:"font-weight-semibold text-truncate"},[t._v(" "+t._s(s._race.name)+" ")]),a("span",{staticClass:"text-xs text-truncate"},[t._v(" "+t._s(s._race._event.name)+" ")])])]}},{key:"item.place",fn:function(e){var s=e.item;return["ok"==s.finish_status?[a("span",{staticClass:"font-weight-semibold"},[t._v(t._s(s.place||"N/A"))]),1==s.place?a("v-icon",{staticClass:"ml-1",attrs:{size:"20",color:"warning"}},[t._v(t._s(t.icons.mdiPodiumGold))]):t._e()]:a("v-chip",{attrs:{outlined:"",color:(t.$const.RACE_FINISH_STATUS_MAP[s.finish_status]||{}).css,small:""}},[t._v(" "+t._s((t.$const.RACE_FINISH_STATUS_MAP[s.finish_status]||{}).title||s.finish_status)+" ")])]}}])})],1)},i=[],r=(a("498a"),a("99af"),a("94ed")),n=a("ed09"),c=(a("c1df"),a("bb36")),o=a("cbec"),l=a("0e20"),d={props:{apiParams:{type:Object,required:!1}},setup:function(t){var e=Object(n["J"])([]),a=Object(n["J"])(!1),s=function(){a.value=!0;var s=Object.assign({exfields:"more_data",page_size:6,place:1,order_by:"-id"},t.apiParams);c["a"].get("cycling_org/race_result",{params:s}).then((function(t){a.value=!1,e.value=t.data.results}),(function(t){a.value=!1,Object(o["notifyDefaultServerError"])(t,!0)}))},i=function(t){var e="";return e=t._rider?"".concat(t._rider.first_name," ").concat(t._rider.last_name).trim():"".concat(t.more_data.first_name||""," ").concat(t.more_data.last_name||"").trim(),e||"N/A"};Object(n["A"])((function(){s()}));var d=[{text:"RIDER",value:"rider"},{text:"RACE",value:"race",cellClass:"race-td"},{text:"PLACE",value:"place"}];return{raceResults:e,tableColumns:d,avatarText:l["a"],displayRiderName:i,icons:{mdiAccountCheck:r["c"],mdiPodiumGold:r["Sb"]}}}},u=d,v=a("2877"),m=a("6544"),_=a.n(m),f=a("8212"),p=a("8336"),g=a("b0af"),b=a("99d9"),C=a("cc20"),h=a("8fea"),x=a("ce7e"),O=a("132d"),A=a("adda"),y=a("2fa4"),V=Object(v["a"])(u,s,i,!1,null,null,null);e["a"]=V.exports;_()(V,{VAvatar:f["a"],VBtn:p["a"],VCard:g["a"],VCardTitle:b["d"],VChip:C["a"],VDataTable:h["a"],VDivider:x["a"],VIcon:O["a"],VImg:A["a"],VSpacer:y["a"]})},"66cb":function(t,e,a){t.exports=a.p+"img/no-photo.401bd803.png"},"7b98":function(t,e,a){t.exports=a.p+"img/public-banner-bg-light.243fd9b5.jpeg"},"85ac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"public-home"},[t.defaultOrg?s("v-card",{staticClass:"banner mb-4"},[s("img",{staticClass:"white--text align-end banner-img",attrs:{src:t.$store.state.sitePrefs.site_ui__banner_image||a("7b98")}}),s("v-card-text",{staticClass:"position-relative"},[s("v-avatar",{staticClass:"avatar-center",attrs:{size:"60",color:"white"}},[s("v-img",{attrs:{src:t.appLogo}})],1),s("div",{staticClass:"text-center pt-6"},[s("p",{staticClass:"text-3xl font-weight-semibold primary--text mb-2"},[t._v(" "+t._s(t.appName)+" ")]),s("div",[s("v-btn",{staticClass:"action-btn ma-1",attrs:{outlined:"",color:"primary",to:{name:t.$rns.AUTH,query:{page:"Register"}},disabled:t.$store.getters.isAuthenticated}},[t._v(" Create a user account "),s("v-icon",{attrs:{right:""}},[t._v(t._s(t.icons.mdiAccount))])],1),s("v-btn",{staticClass:"action-btn ma-1",attrs:{outlined:"",color:"success",to:{name:t.$rns.PUBLIC_SIGNUP_AND_JOIN_ORG,params:{record_id:t.defaultOrg.id}}}},[t._v(" Join "+t._s(t.defaultOrg.name)+" "),s("v-icon",{attrs:{right:""}},[t._v(t._s(t.icons.mdiAccountPlus))])],1)],1),s("div",{staticClass:"mt-1"})])],1)],1):t._e(),s("v-row",[t.$store.state.sitePrefs.site_ui__home_information_board?s("v-col",{attrs:{cols:"12"}},[s("v-card",{staticClass:"d-flex"},[s("v-card-text",{staticClass:"ck-content",domProps:{innerHTML:t._s(t.$store.state.sitePrefs.site_ui__home_information_board)}})],1)],1):t._e(),s("v-col",{attrs:{cols:"12",md:"6"}},[s("organizations-widget",{staticClass:"home-widget"})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("upcoming-events-widget",{staticClass:"home-widget"})],1)],1)],1)},i=[],r=(a("b0c0"),a("6063")),n=a("0e30"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("a",{staticClass:"twitter-timeline text-decoration-none pl-2",attrs:{"data-height":"425","data-chrome":"transparent noborders","data-theme":t.$vuetify.theme.isDark?"dark":null,href:"https://twitter.com/BicycleColo"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary",size:"20",width:"3"}}),t._v(" Waiting for BicycleColo twitter ... ")],1)])},o=[],l=a("ed09"),d=a("cbec"),u={components:{},setup:function(){var t="twitter-wjs-"+Object(d["randomId"])();return Object(l["A"])((function(){Object(d["appendScriptToHeader"])(document,"https://platform.twitter.com/widgets.js",t)})),Object(l["w"])((function(){document.getElementById(t).remove()})),{}}},v=u,m=a("2877"),_=a("6544"),f=a.n(_),p=a("b0af"),g=a("490a"),b=Object(m["a"])(v,c,o,!1,null,null,null),C=b.exports;f()(b,{VCard:p["a"],VProgressCircular:g["a"]});var h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{staticClass:"align-start"},[a("span",[t._v("Organizations: Regional, Clubs, Promoters")])]),a("v-divider"),a("v-data-table",{staticClass:"table-rounded",attrs:{headers:t.tableColumns,items:t.organizations,"hide-default-footer":""},scopedSlots:t._u([{key:"item.type",fn:function(e){var s=e.item;return[a("v-chip",{class:"v-chip-light-bg "+(t.$const.ORGANIZATION_TYPE_MAP[s.type]||{}).css+"--text",attrs:{small:"",color:(t.$const.ORGANIZATION_TYPE_MAP[s.type]||{}).css}},[t._v(" "+t._s((t.$const.ORGANIZATION_TYPE_MAP[s.type]||{}).title||s.type)+" ")])]}},{key:"item.name",fn:function(e){var s=e.item;return[a("div",{staticClass:"d-flex align-center"},[a("v-avatar",{staticClass:"v-avatar-light-bg success--text",attrs:{color:"success",size:"30"}},[s.logo?a("v-img",{attrs:{src:s.logo}}):a("span",{staticClass:"font-weight-medium"},[t._v(" "+t._s(t.avatarText(s.name))+" ")])],1),a("div",{staticClass:"d-flex flex-column ms-3"},[a("router-link",{tag:"a",staticClass:"d-block text--success  font-weight-semibold text-truncate text-decoration-none",attrs:{to:{name:t.$rns.PUBLIC_ORG_PROFILE,params:{record_id:s.id}}}},[t._v(t._s(s.name)+" ")])],1)],1)]}},{key:"item.location",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.country||"")+t._s(a.state?", "+a.state:"")+t._s(a.city?", "+a.city:"")+" ")]}}])})],1)},x=[],O=(a("c1df"),a("bb36")),A=a("0e20"),y={setup:function(){var t=Object(l["J"])([]),e=Object(l["J"])(!1),a=function(){e.value=!0;var a={page_size:6,order_by:"-id"};O["a"].get("cycling_org/organization",{params:a}).then((function(a){e.value=!1,t.value=a.data.results}),(function(t){e.value=!1,Object(d["notifyDefaultServerError"])(t,!0)}))};Object(l["A"])((function(){a()}));var s=[{text:"NAME",value:"name"},{text:"TYPE",value:"type"},{text:"LOCATION",value:"location",sortable:!1}];return{organizations:t,tableColumns:s,avatarText:A["a"],icons:{}}}},V=y,I=a("8212"),P=a("99d9"),w=a("cc20"),j=a("8fea"),E=a("ce7e"),T=a("adda"),R=Object(m["a"])(V,h,x,!1,null,null,null),N=R.exports;f()(R,{VAvatar:I["a"],VCard:p["a"],VCardTitle:P["d"],VChip:w["a"],VDataTable:j["a"],VDivider:E["a"],VImg:T["a"]});var k=a("94ed"),L=a("2405"),S=a("a18c"),$=a("1dff"),z={components:{OrganizationsWidget:N,TwitterFeedsWidget:C,UpcomingEventsWidget:n["a"],RecentRaceResultsWidget:r["a"]},setup:function(){var t=Object(L["e"])(),e=t.router,a=Object(l["J"])(null),s=function(){O["a"].get("cycling_org/organization/default_org").then((function(t){a.value=t.data}),(function(t){Object(d["notifyDefaultServerError"])(t,!0)}))},i=function(){e.push({name:S["b"].DASHBOARD_ORGANIZATION_PROFILE,params:{record_id:a.value.id}})};return Object(l["A"])((function(){s()})),{defaultOrg:a,navigateToDefaultOrg:i,appLogo:$["a"].app.logo,appName:$["a"].app.name,appShortName:$["a"].app.shortName,icons:{mdiApps:k["n"],mdiAccount:k["a"],mdiAccountPlus:k["j"]}}}},D=z,M=(a("48ee"),a("8336")),B=a("62ad"),U=a("132d"),J=a("0fd9"),Y=Object(m["a"])(D,s,i,!1,null,"07f99782",null);e["default"]=Y.exports;f()(Y,{VAvatar:I["a"],VBtn:M["a"],VCard:p["a"],VCardText:P["c"],VCol:B["a"],VIcon:U["a"],VImg:T["a"],VRow:J["a"]})}}]);
//# sourceMappingURL=chunk-c2ecdf1e.999ee973.js.map