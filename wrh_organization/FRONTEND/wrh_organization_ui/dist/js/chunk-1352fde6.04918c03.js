(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1352fde6","chunk-14d6a3f1"],{1077:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"widget-rider-profile"},[a("public-rider-profile")],1)},i=[],s=a("ef44"),n={components:{PublicRiderProfile:s["default"]},setup:function(){return{}}},c=n,l=a("2877"),o=Object(l["a"])(c,r,i,!1,null,null,null);t["default"]=o.exports},"35d8":function(e,t,a){"use strict";a("e922")},cb12:function(e,t,a){},e922:function(e,t,a){},ef44:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"rider-profile-view"}},[e.memberData.id?a("v-row",[a("v-col",{attrs:{cols:"12",md:"5",lg:"4"}},[a("profile-bio-panel",{attrs:{"member-data":e.memberData,"read-only":"","hidden-fields":{email:!0,phone:!0,height:!0,weight:!0,city:!0,address1:!0,address2:!0}}})],1),a("v-col",{attrs:{cols:"12",md:"7",lg:"8"}},[a("v-tabs",{staticClass:"rider-profile-tabs",attrs:{"show-arrows":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab",[a("v-icon",{staticClass:"me-3",attrs:{size:"20"}},[e._v(e._s(e.icons.mdiFlagCheckered))]),a("span",[e._v("Race Results")])],1)],1),a("v-tabs-items",{staticClass:"mt-5 pa-1",attrs:{id:"rider-profile-tabs-content"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",[a("rider-race-results-tab",{attrs:{"rider-id":e.$route.params.record_id}})],1)],1)],1)],1):e._e()],1)},i=[],s=a("ed09"),n=a("94ed"),c=a("768f"),l=a("82e0"),o=a("bb36"),u=a("cbec"),d=a("54d3"),b=a("2405"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rider-race-results-tab"},[a("race-results-cmp",{attrs:{"api-params":{rider:e.riderId},"hidden-columns":["rider"]}})],1)},m=[],p=a("5f47"),v={components:{RaceResultsCmp:p["a"]},props:{riderId:{required:!0}},setup:function(e,t){return{}}},h=v,w=(a("35d8"),a("2877")),_=Object(w["a"])(h,f,m,!1,null,null,null),g=_.exports,O={components:{RiderRaceResultsTab:g,ProfileOrganizationsTab:d["a"],ProfileOverviewTab:l["a"],ProfileBioPanel:c["a"]},setup:function(){var e=Object(b["e"])(),t=e.route,a=Object(s["J"])(null),r=Object(s["J"])({user:{}}),i=function(){o["a"].get("cycling_org/public/member/".concat(t.value.params.record_id),{params:{exfields:"summary"}}).then((function(e){r.value=e.data}),(function(e){Object(u["notifyDefaultServerError"])(e,!0)}))};return Object(s["A"])((function(){a.value=void 0!==t.value.params.tab?t.value.params.tab:0,i()})),{memberData:r,loadMemberData:i,tab:a,icons:{mdiAccountOutline:n["i"],mdiHomeAccount:n["ob"],mdiFlagCheckered:n["hb"]}}}},C=O,R=(a("fd39"),a("6544")),j=a.n(R),k=a("62ad"),T=a("132d"),V=a("0fd9"),x=a("71a3"),P=a("c671"),y=a("fe57"),D=a("aac8"),I=Object(w["a"])(C,r,i,!1,null,null,null);t["default"]=I.exports;j()(I,{VCol:k["a"],VIcon:T["a"],VRow:V["a"],VTab:x["a"],VTabItem:P["a"],VTabs:y["a"],VTabsItems:D["a"]})},fd39:function(e,t,a){"use strict";a("cb12")}}]);
//# sourceMappingURL=chunk-1352fde6.04918c03.js.map