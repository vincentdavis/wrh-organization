(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6418f4e6","chunk-9673ce86"],{1077:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"widget-rider-profile"},[t("public-rider-profile")],1)},s=[],i=t("ef44"),l={components:{PublicRiderProfile:i["default"]},setup(){return{}}},c=l,n=t("2877"),d=Object(n["a"])(c,r,s,!1,null,null,null);a["default"]=d.exports},"35d8":function(e,a,t){"use strict";t("e922")},cb12:function(e,a,t){},e922:function(e,a,t){},ef44:function(e,a,t){"use strict";t.r(a);var r=t("62ad"),s=t("132d"),i=t("0fd9"),l=t("71a3"),c=t("c671"),n=t("fe57"),d=t("aac8"),u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"rider-profile-view"}},[e.memberData.id?t(i["a"],[t(r["a"],{attrs:{cols:"12",md:"5",lg:"4"}},[t("profile-bio-panel",{attrs:{"member-data":e.memberData,"read-only":"","hidden-fields":{email:!0,phone:!0,height:!0,weight:!0,city:!0,address1:!0,address2:!0}}})],1),t(r["a"],{attrs:{cols:"12",md:"7",lg:"8"}},[t(n["a"],{staticClass:"rider-profile-tabs",attrs:{"show-arrows":""},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t(l["a"],[t(s["a"],{staticClass:"me-3",attrs:{size:"20"}},[e._v(e._s(e.icons.mdiFlagCheckered))]),t("span",[e._v("Race Results")])],1)],1),t(d["a"],{staticClass:"mt-5 pa-1",attrs:{id:"rider-profile-tabs-content"},model:{value:e.tab,callback:function(a){e.tab=a},expression:"tab"}},[t(c["a"],[t("rider-race-results-tab",{attrs:{"rider-id":e.$route.params.record_id}})],1)],1)],1)],1):e._e()],1)},o=[],b=t("ed09"),f=t("94ed"),m=t("768f"),p=t("82e0"),v=t("bb36"),h=t("cbec"),_=t("54d3"),w=t("2405"),g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"rider-race-results-tab"},[t("race-results-cmp",{attrs:{"api-params":{rider:e.riderId},"hidden-columns":["rider"]}})],1)},O=[],j=t("5f47"),k={components:{RaceResultsCmp:j["a"]},props:{riderId:{required:!0}},setup(e,a){return{}}},C=k,R=(t("35d8"),t("2877")),x=Object(R["a"])(C,g,O,!1,null,null,null),P=x.exports,y={components:{RiderRaceResultsTab:P,ProfileOrganizationsTab:_["a"],ProfileOverviewTab:p["a"],ProfileBioPanel:m["a"]},setup(){const{route:e}=Object(w["e"])(),a=Object(b["J"])(null),t=Object(b["J"])({user:{}}),r=()=>{v["a"].get("cycling_org/public/member/"+e.value.params.record_id,{params:{exfields:"summary"}}).then(e=>{t.value=e.data},e=>{Object(h["notifyDefaultServerError"])(e,!0)})};return Object(b["A"])(()=>{a.value=void 0!==e.value.params.tab?e.value.params.tab:0,r()}),{memberData:t,loadMemberData:r,tab:a,icons:{mdiAccountOutline:f["i"],mdiHomeAccount:f["qb"],mdiFlagCheckered:f["ib"]}}}},D=y,E=(t("fd39"),Object(R["a"])(D,u,o,!1,null,null,null));a["default"]=E.exports},fd39:function(e,a,t){"use strict";t("cb12")}}]);
//# sourceMappingURL=chunk-6418f4e6.d3f5cc5b.js.map