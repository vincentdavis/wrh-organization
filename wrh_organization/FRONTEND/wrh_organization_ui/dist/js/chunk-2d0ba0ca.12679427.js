(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba0ca"],{"360a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"3"}},[a("b",[t._v("Filters")]),a("v-col",{staticClass:"ma-0 pa-0"},[a("v-text-field",{attrs:{label:"Club","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-col",{staticClass:"ma-0 pa-0"},[a("v-autocomplete",{attrs:{items:t.StateList,"hide-details":"",label:"Type"},model:{value:t.State,callback:function(e){t.State=e},expression:"State"}})],1)],1),a("v-col",{staticClass:"ma-0 pa-0 mt-3"},[a("div",{staticClass:"d-flex justify-space-between",attrs:{color:"#8a8d93",elevation:"0"}},[a("v-btn",{attrs:{color:"primary",outlined:""},on:{click:t.ClearFilter}},[t._v("Clear")]),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.getEvent(null)}}},[t._v("Search")])],1)])],1),a("v-col",{attrs:{cols:"12",sm:"9"}},[a("v-data-table",{staticClass:"elevation-1 mt-2",attrs:{loading:t.ClubLoader,dense:"","footer-props":{"items-per-page-options":[25]},headers:t.Eventheaders,items:t.Club.results,"item-key":"name",search:t.search,options:t.pagination_events,"server-items-length":t.totalCount},on:{"update:options":function(e){t.pagination_events=e}},scopedSlots:t._u([{key:"item.register_url",fn:function(e){var s=e.item;return[a("a",{attrs:{href:s.links.register_url}},[t._v("Go Ressiter")])]}},{key:"item.website_url",fn:function(e){var s=e.item;return[a("a",{attrs:{href:s.links.website_url}},[t._v("Go WebSite")])]}},{key:"item.labels",fn:function(e){var s=e.item;return t._l(s.labels,(function(e){return a("v-chip",{key:e,staticClass:"pl-1",attrs:{small:""}},[t._v(t._s(e))])}))}},{key:"body",fn:function(e){var s=e.items;return[a("tbody",[t._l(s,(function(e){return a("tr",{key:e.id},[a("td",[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"9"}},[a("h1",[t._v(t._s(e.club_name))]),a("div",{staticClass:"ml-2"},[t._v(" "+t._s(e.club_id)+" ")]),a("v-chip",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v("Teams :"+t._s(e.club_teams.length))]),a("v-chip",{staticClass:"ml-1",attrs:{color:"primary"}},[t._v(t._s(e.club_aff_type.aff_type_description))])],1)],1)],1)],1)],1)])})),0!=s.length||t.ClubLoader?t._e():a("tr",[a("center",[t._v("No receord found")])],1)],2)]}}])})],1)],1)],1)},n=[],i=a("3835"),r=a("b85c"),l=(a("ac1f"),a("841c"),a("d3b7"),a("ddb0"),a("bb36")),o={computed:{totalCount:function(){var t=25;return this.Club&&this.Club.pagination?this.Club.pagination.total:t}},data:function(){return{Club:[],DateRange:[],State:null,StateList:[],Labels:[],DisciplineList:[],pagination_events:{},search:"",ClubLoader:!1,Eventheaders:[{text:"Results:",value:"name"}],is_featured:!1,is_usac_sanctioned:!1}},mounted:function(){var t=this;l["a"].get("usacycling/club/list_type/").then((function(e){t.StateList=e.data}))},watch:{pagination_events:{handler:function(t){this.getEvent(t)},deep:!0}},methods:{ClearFilter:function(){this.State=null,this.search=null},FormURL:function(t,e){var a="",s=e;try{if(t&&t.sortBy.length>=1){var n,l=Object(r["a"])(t.sortBy.entries());try{for(l.s();!(n=l.n()).done;){var o=Object(i["a"])(n.value,2),c=o[0],u=o[1];t.sortDesc[c]?a+="&ordering=-"+u+"&":a+="&ordering="+u+"&"}}catch(d){l.e(d)}finally{l.f()}}return t&&(s+="&page="+t.page),this.State&&(s+="&club_aff_type__aff_type_description="+this.State),s+a}catch(d){return console.log(d),s}},getEvent:function(t){var e=this;this.Club=[],this.ClubLoader=!0,l["a"].get(this.FormURL(t,"usacycling/club/?")+"&search="+(this.search||"")).then((function(t){e.Club=t.data,e.ClubLoader=!1}))}}},c=o,u=a("2877"),d=a("6544"),v=a.n(d),f=a("c6a6"),p=a("8336"),b=a("b0af"),h=a("99d9"),_=a("cc20"),m=a("62ad"),C=a("8fea"),g=a("0fd9"),y=a("8654"),k=Object(u["a"])(c,s,n,!1,null,null,null);e["default"]=k.exports;v()(k,{VAutocomplete:f["a"],VBtn:p["a"],VCard:b["a"],VCardText:h["c"],VChip:_["a"],VCol:m["a"],VDataTable:C["a"],VRow:g["a"],VTextField:y["a"]})}}]);
//# sourceMappingURL=chunk-2d0ba0ca.12679427.js.map