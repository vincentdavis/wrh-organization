(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14d6a3f1"],{"35d8":function(e,a,t){"use strict";t("e922")},cb12:function(e,a,t){},e922:function(e,a,t){},ef44:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"rider-profile-view"}},[e.memberData.id?t("v-row",[t("v-col",{attrs:{cols:"12",md:"5",lg:"4"}},[t("profile-bio-panel",{attrs:{"member-data":e.memberData,"read-only":"","hidden-fields":{email:!0,phone:!0,height:!0,weight:!0,city:!0,address1:!0,address2:!0}}})],1),t("v-col",{attrs:{cols:"12",md:"7",lg:"8"}},[t("v-tabs",{staticClass:"rider-profile-tabs",attrs:{"show-arrows":""},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t("v-tab",[t("v-icon",{staticClass:"me-3",attrs:{size:"20"}},[e._v(e._s(e.icons.mdiFlagCheckered))]),t("span",[e._v("Race Results")])],1)],1),t("v-tabs-items",{staticClass:"mt-5 pa-1",attrs:{id:"rider-profile-tabs-content"},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t("v-tab-item",[t("rider-race-results-tab",{attrs:{"rider-id":e.$route.params.record_id}})],1)],1)],1)],1):e._e()],1)},s=[],i=t("ed09"),c=t("94ed"),n=t("768f"),o=t("82e0"),l=t("bb36"),d=t("cbec"),u=t("54d3"),b=t("2405"),m=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"rider-race-results-tab"},[t("race-results-cmp",{attrs:{"api-params":{rider:e.riderId},"hidden-columns":["rider"]}})],1)},f=[],p=t("5f47"),v={components:{RaceResultsCmp:p["a"]},props:{riderId:{required:!0}},setup:function(e,a){return{}}},h=v,w=(t("35d8"),t("2877")),_=Object(w["a"])(h,m,f,!1,null,null,null),g=_.exports,O={components:{RiderRaceResultsTab:g,ProfileOrganizationsTab:u["a"],ProfileOverviewTab:o["a"],ProfileBioPanel:n["a"]},setup:function(){var e=Object(b["e"])(),a=e.route,t=Object(i["J"])(null),r=Object(i["J"])({user:{}}),s=function(){l["a"].get("cycling_org/public/member/".concat(a.value.params.record_id),{params:{exfields:"summary"}}).then((function(e){r.value=e.data}),(function(e){Object(d["notifyDefaultServerError"])(e,!0)}))};return Object(i["A"])((function(){t.value=void 0!==a.value.params.tab?a.value.params.tab:0,s()})),{memberData:r,loadMemberData:s,tab:t,icons:{mdiAccountOutline:c["i"],mdiHomeAccount:c["ob"],mdiFlagCheckered:c["hb"]}}}},C=O,R=(t("fd39"),t("6544")),j=t.n(R),k=t("62ad"),T=t("132d"),V=t("0fd9"),x=t("71a3"),y=t("c671"),D=t("fe57"),I=t("aac8"),J=Object(w["a"])(C,r,s,!1,null,null,null);a["default"]=J.exports;j()(J,{VCol:k["a"],VIcon:T["a"],VRow:V["a"],VTab:x["a"],VTabItem:y["a"],VTabs:D["a"],VTabsItems:I["a"]})},fd39:function(e,a,t){"use strict";t("cb12")}}]);
//# sourceMappingURL=chunk-14d6a3f1.1666144c.js.map