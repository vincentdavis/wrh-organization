(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb33b46"],{"07f0":function(e,t,a){"use strict";a("5f10")},"0fd9":function(e,t,a){"use strict";a("13d5"),a("14d9"),a("4b85");var i=a("2b0e"),s=a("d9f7"),n=a("80d2");const r=["sm","md","lg","xl"],l=["start","end","center"];function o(e,t){return r.reduce((a,i)=>(a[e+Object(n["G"])(i)]=t(),a),{})}const c=e=>[...l,"baseline","stretch"].includes(e),u=o("align",()=>({type:String,default:null,validator:c})),d=e=>[...l,"space-between","space-around"].includes(e),m=o("justify",()=>({type:String,default:null,validator:d})),p=e=>[...l,"space-between","space-around","stretch"].includes(e),b=o("alignContent",()=>({type:String,default:null,validator:p})),h={align:Object.keys(u),justify:Object.keys(m),alignContent:Object.keys(b)},f={align:"align",justify:"justify",alignContent:"align-content"};function g(e,t,a){let i=f[e];if(null!=a){if(t){const a=t.replace(e,"");i+="-"+a}return i+="-"+a,i.toLowerCase()}}const v=new Map;t["a"]=i["default"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...m,alignContent:{type:String,default:null,validator:p},...b},render(e,{props:t,data:a,children:i}){let n="";for(const s in t)n+=String(t[s]);let r=v.get(n);if(!r){let e;for(e in r=[],h)h[e].forEach(a=>{const i=t[a],s=g(e,a,i);s&&r.push(s)});r.push({"no-gutters":t.noGutters,"row--dense":t.dense,["align-"+t.align]:t.align,["justify-"+t.justify]:t.justify,["align-content-"+t.alignContent]:t.alignContent}),v.set(n,r)}return e(t.tag,Object(s["a"])(a,{staticClass:"row",class:r}),i)}})},1681:function(e,t,a){},"5f10":function(e,t,a){},"631a":function(e,t,a){"use strict";var i=a("8336"),s=a("b0af"),n=a("99d9"),r=a("ac7c"),l=a("169a"),o=a("ce7e"),c=a("a797"),u=a("490a"),d=a("2fa4"),m=a("3a2f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(l["a"],{attrs:{scrollable:"","max-width":"800px"},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,n=t.attrs;return[a(r["a"],{attrs:{rules:[e.rules.required]},scopedSlots:e._u([{key:"label",fn:function(){return[a("div",[e._v(" I accept the "),a(m["a"],{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){return[a(i["a"],e._g(e._b({staticClass:"pl-0 pr-1 pb-1",attrs:{text:"",color:"primary",link:"",small:""},on:{click:e.getAgreementText}},"v-btn",n,!1),s),[e._v(" Release Waiver ")])]}}],null,!0)},[e._v(" Agreement & Waiver ")])],1)]},proxy:!0}],null,!0),model:{value:e.agreementAccept,callback:function(t){e.agreementAccept=t},expression:"agreementAccept"}})]}}]),model:{value:e.isVisible,callback:function(t){e.isVisible=t},expression:"isVisible"}},[a(s["a"],[a(n["d"],{staticClass:"text-h5 grey lighten-2"},[e._v(" Agreement and Waiver ")]),a(n["c"],[a("div",{domProps:{innerHTML:e._s(e.userAgrement||"")}})]),a(o["a"]),a(n["a"],[a(d["a"]),a(i["a"],{attrs:{color:"error",outlined:""},on:{click:function(t){return e.hide()}}},[e._v("Close")])],1)],1),a(c["a"],{attrs:{value:e.loading,absolute:!0,opacity:"0.3"}},[a(u["a"],{attrs:{indeterminate:""}})],1)],1)},b=[],h=a("ed09"),f=a("bb36"),g=a("7f98"),v=a("cbec"),_={props:{userAgreementPropsText:{default:null}},setup(e,t){const a=Object(h["J"])(null),i=Object(h["J"])(!1),s=Object(h["J"])(!1),n=Object(h["J"])(!1),r=()=>{i.value=!1},l=()=>{e.userAgreementPropsText?a.value=e.userAgreementPropsText:o()},o=()=>{s.value=!0,f["a"].get("cycling_org/global_pref/site_ui__user_agreement_waver").then(e=>{s.value=!1,a.value=e.data},e=>{s.value=!0,Object(v["notifyDefaultServerError"])(e,!0)})};return{isVisible:i,loading:s,userAgrement:a,loaduserAgrement:o,agreementAccept:n,hide:r,getAgreementText:l,rules:{required:g["d"]}}}},y=_,x=a("2877"),k=Object(x["a"])(y,p,b,!1,null,"bf5d5508",null);t["a"]=k.exports},"6ba2":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"turnstileBoxRef",attrs:{id:"turnstile-box"}})},s=[],n=a("ed09"),r=Object(n["h"])({name:"TurnstileComponent",props:{sitekey:{type:String,required:!0}},emits:{verify:e=>null!==e&&""!==e,expire:null,fail:null,timeout:null},setup(e,t){const a=Object(n["J"])(null);window.onloadTurnstileCallback=()=>{i()},Object(n["A"])(()=>{if(window.turnstile)i();else{const e=document.createElement("script");e.src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback",e.async=!0,e.defer=!0,document.head.appendChild(e)}});const i=()=>{var i;null===(i=window.turnstile)||void 0===i||i.render("#"+a.value.id,{sitekey:e.sitekey,callback:e=>t.emit("verify",e),"expired-callback":()=>t.emit("expire"),"error-callback":()=>t.emit("fail"),"timeout-callback":()=>t.emit("timeout")})},s=()=>{var e;null===(e=window.turnstile)||void 0===e||e.reset("#"+a.value.id)};return{reset:s,turnstileBoxRef:a}}}),l=r,o=a("2877"),c=Object(o["a"])(l,i,s,!1,null,"19d06164",null);t["a"]=c.exports},"6ca7":function(e,t,a){},"6cb4":function(e,t,a){"use strict";a.r(t);var i=a("0798"),s=a("8212"),n=a("8336"),r=(a("7e58"),a("604c")),l=r["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return r["a"].options.computed.classes.call(this)}},methods:{genData:r["a"].options.methods.genData}}),o=a("a9ad"),c=a("58df"),u=Object(c["a"])(l,o["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...l.options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const e=this.setTextColor(this.color,{...l.options.methods.genData.call(this)});return this.group?e:this.setBackgroundColor(this.backgroundColor,e)}}}),d=a("b0af"),m=a("99d9"),p=a("cc20"),b=a("62ad"),h=a("2e4b"),f=a("ce7e"),g=a("4bd4"),v=a("132d"),_=a("adda"),y=a("e449"),x=a("0fd9"),k=a("b974"),C=a("2fa4"),w=a("8654"),F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.organization?a(d["a"],[a(m["d"],{staticClass:"headline",class:{"pt-1 pb-1":e.organization.logo}},[e._v(" "+e._s(e.alreadyJoined?"Re-Join":"Join")+" to "),a("span",{staticClass:"ml-2 font-weight-bold"},[e._v(" "+e._s(e.organization.name))]),a(C["a"]),e.organization.logo?a(s["a"],{staticClass:"avatar-center",attrs:{size:"60",color:"black"}},[a(_["a"],{attrs:{src:e.organization.logo}})],1):e._e()],1),a(f["a"]),a(g["a"],{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.onSubmit()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a(m["c"],[e.$store.getters.isAuthenticated?[a("h3",{staticClass:"mb-2"},[e._v(" 1. You Have an account on Bicycle Colorado. "),a(v["a"],{attrs:{color:"success"}},[e._v(e._s(e.icons.mdiAccountCheck))]),a("span",{staticClass:"caption"},[e._v(" (logged in by "),a("span",{staticClass:"primary--text font-weight-bold"},[e._v(e._s(e.$store.state.currentUser.username))]),e._v(") ")])],1)]:"sign-up"==e.accountMode?[a("h3",{staticClass:"mb-2"},[e._v(" 1. Sign up on Bicycle Colorado: "),a("span",{staticClass:"caption"},[e._v(" (already have an account? "),a("a",{attrs:{href:"javascript:"},on:{click:function(t){e.accountMode="sign-in",e.isPasswordVisible=!1}}},[e._v("Sign in")]),e._v(") ")])]),a(x["a"],[a(b["a"],{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a(w["a"],{attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"E-mail (Username)",placeholder:"E-mail (Username)","persistent-hint":"",hint:"The E-mail will be used as your username on the login",rules:[e.rules.required,e.rules.emailValidator],dense:""},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),a(b["a"],{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a(w["a"],{attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"Confirm E-mail",placeholder:"Enter E-mail again","persistent-hint":"",rules:[e.rules.required,e.rules.emailValidator,e.rules.confirmedValidator(e.registerForm.confirm_email,e.registerForm.email,"The Confirm E-mail field confirmation does not match")],dense:""},model:{value:e.registerForm.confirm_email,callback:function(t){e.$set(e.registerForm,"confirm_email",t)},expression:"registerForm.confirm_email"}})],1),a(b["a"],{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a(w["a"],{attrs:{outlined:"",label:"First Name",placeholder:"First Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.first_name,callback:function(t){e.$set(e.registerForm,"first_name",t)},expression:"registerForm.first_name"}})],1),a(b["a"],{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a(w["a"],{attrs:{outlined:"",label:"Last Name",placeholder:"Last Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.last_name,callback:function(t){e.$set(e.registerForm,"last_name",t)},expression:"registerForm.last_name"}})],1),a(b["a"],{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a(w["a"],{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Password",placeholder:"Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,hint:"Password should contains at least 1 digit with min 8 chars","persistent-hint":"",rules:[e.rules.required],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),a(b["a"],{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a(w["a"],{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Confirm Password",placeholder:"Confirm Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,rules:[e.rules.required,e.rules.confirmedValidator(e.registerForm.confirm_password,e.registerForm.password)],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.confirm_password,callback:function(t){e.$set(e.registerForm,"confirm_password",t)},expression:"registerForm.confirm_password"}})],1),a(b["a"],{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[a(k["a"],{attrs:{outlined:"",items:e.$const.GENDER_OPTIONS,"item-text":"title","item-value":"value",label:"Gender",dense:"","hide-details":"",rules:[e.rules.required]},model:{value:e.registerForm.gender,callback:function(t){e.$set(e.registerForm,"gender",t)},expression:"registerForm.gender"}})],1),a(b["a"],{attrs:{cols:"12",md:"6"}},[a(y["a"],{ref:"birthDateMenuRef",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[a(w["a"],e._g(e._b({attrs:{label:"Birth Date","append-icon":e.icons.mdiCalendar,readonly:"",rules:[e.rules.required],outlined:"","hide-details":"",dense:""},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}},"v-text-field",s,!1),i))]}}],null,!1,3701623122),model:{value:e.showBirthDateMenu,callback:function(t){e.showBirthDateMenu=t},expression:"showBirthDateMenu"}},[a(h["a"],{ref:"birthDatePickerRef",attrs:{"active-picker":e.birthDateActivePicker,max:(new Date).toISOString().slice(0,10),min:"1940-01-01",color:"primary"},on:{"update:activePicker":function(t){e.birthDateActivePicker=t},"update:active-picker":function(t){e.birthDateActivePicker=t},change:function(t){e.$refs.birthDateMenuRef.save(t)}},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}})],1)],1),a(b["a"],{attrs:{cols:"12",sm:"6"}},[a(w["a"],{staticClass:"mb-3",attrs:{outlined:"",label:"USAC License# (optional)",placeholder:"USAC License# (optional)","hide-details":"",rules:[],dense:""},model:{value:e.registerForm.member.usac_license_number,callback:function(t){e.$set(e.registerForm.member,"usac_license_number",t)},expression:"registerForm.member.usac_license_number"}})],1)],1)]:[a("h3",{staticClass:"mb-2"},[e._v(" 1. Sign in on Bicycle Colorado: "),a("span",{staticClass:"caption"},[e._v(" (don't have account? "),a("a",{attrs:{href:"javascript:"},on:{click:function(t){e.accountMode="sign-up",e.isPasswordVisible=!1}}},[e._v("Sign up")]),e._v(") ")])]),a(w["a"],{staticClass:"mb-2",attrs:{outlined:"",dense:"",label:"Username",placeholder:"Username","hide-details":"",rules:[e.rules.required]},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),a(w["a"],{staticClass:"mb-2",attrs:{outlined:"",dense:"",type:e.isPasswordVisible?"text":"password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,label:"Password",placeholder:"Password","hide-details":"",rules:[e.rules.required]},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),a(n["a"],{attrs:{block:"",type:"button",color:"primary",loading:e.logining},on:{click:function(t){return e.login()}}},[e._v(" Login ")])]],2),a(f["a"]),e.schema?a(m["c"],{class:{disabled:"sign-in"==e.accountMode}},[a("h3",{staticClass:"mb-2"},[e._v(" 2. Fill out organization form: ")]),a("member-fields-schema-cmp",{attrs:{schema:e.schema,"member-fields":e.memberFields}})],1):e._e(),a(f["a"]),a(m["c"],{class:{disabled:"sign-in"==e.accountMode}},[a("h3",{staticClass:"mb-2"},[e._v(" 3. Choose a membership plan: ")]),e.membershipPlans&&!e.membershipPlans.length?a(i["a"],{staticClass:"mt-2 text-center",attrs:{dense:"",text:"",color:"warning"}},[a("p",[e._v("No membership plan defined on this organiztion.")]),a("p",[e._v("You cannot join!")])]):e._e(),e.currentMembership&&e.currentMembership.is_admin?a(i["a"],{attrs:{dense:"",color:"error",text:""}},[a("p",{staticClass:"mb-1"},[e._v(" You are an "),a(p["a"],{attrs:{small:"",color:"info"}},[e._v("Admin")]),e._v(" member of this organization. ")],1),a("p",{staticClass:"mb-1"},[e._v("Your membership plan won't expire unless the organization drops your grant!")]),a("p",{staticClass:"mb-1"},[e._v(" You dont need to renew your membership! ")])]):e.alreadyJoined&&!e.currentMembership.is_admin?a(i["a"],{attrs:{dense:"",color:"info",text:""}},[a("p",{staticClass:"mb-1"},[e._v(" You have an "),e.currentMembership.is_expiring?a(p["a"],{attrs:{small:"",color:"warning"}},[e._v("Expiring")]):e._e(),e._v(" active plan. ")],1),a("p",{staticClass:"mb-1"},[e._v("Your plan date will be extended to the newly selected plan if you rejoin again.")]),a("p",{staticClass:"mb-1"},[e._v(" Your current plan expires on: "),a("strong",[e._v(e._s(e.currentMembership.exp_date?e.$utils.formatDate(e.currentMembership.exp_date,"MMM D, YYYY"):"Never!"))])])]):e._e(),a(x["a"],{staticClass:"mb-1"},e._l(e.membershipPlans||[],(function(t){return a(b["a"],{key:t.id,attrs:{cols:"12",md:"4"}},[a(d["a"],{class:{"selected-plan":e.selectedPlan&&e.selectedPlan.id==t.id},attrs:{elevation:e.selectedPlan&&e.selectedPlan.id==t.id?10:6,color:e.selectedPlan&&e.selectedPlan.id==t.id?"warning":"light"},on:{click:function(a){e.selectedPlan=t}}},[a(m["c"],[e.currentMembership&&e.currentMembership.membership_plan&&e.currentMembership.membership_plan.id==t.id?a(p["a"],{staticClass:"current-plan-label",attrs:{color:"info",label:"",small:""}},[e._v("Current")]):e._e(),a("div",{staticClass:"text-center"},[a("h1",{staticClass:"text-2xl font-weight-medium"},[e._v(" "+e._s((e.$const.ORGANIZATION_MEMBERSHIP_PLAN_MAP[t.period]||{}).title||t.period)+" ")]),a("p",[e._v(e._s(t.title||"-"))])]),a("div",{staticClass:"text-center"},[a("sup",{staticClass:"text-sm text-primary"},[e._v("$")]),a("span",{staticClass:"pricing-basic-value text-5xl primary--text font-weight-semibold"},[e._v(" "+e._s(t.price)+" ")])])],1)],1)],1)})),1)],1),a(m["c"],{class:{disabled:"sign-in"==e.accountMode}},[a("h5",{staticClass:"mb-2"},[e._v(" Support Bicycle Colorado events and advocacy by donating: ")]),a(x["a"],[a(b["a"],{attrs:{cols:"12"}},[a(w["a"],{attrs:{type:"number",label:"Donate value:",prefix:"$",min:"0",outlined:"",dense:"","hide-details":""},scopedSlots:e._u([{key:"append-outer",fn:function(){return[a(u,{ref:"donateBtnGroupRef",staticClass:"donate-btn-group",model:{value:e.donateValue,callback:function(t){e.donateValue=t},expression:"donateValue"}},e._l([5,10,20,50,100],(function(t){return a(n["a"],{key:t,staticClass:"donate-btn",attrs:{value:t,color:"success",outlined:""}},[e._v(" $"+e._s(t)+" ")])})),1)]},proxy:!0}],null,!1,2952392256),model:{value:e.donateValue,callback:function(t){e.donateValue=t},expression:"donateValue"}})],1)],1)],1),e.membershipPrice?a(m["c"],{class:{disabled:"sign-in"==e.accountMode}},[a(x["a"],{staticClass:"mb-1"},[a(b["a"],{attrs:{cols:"12"}},[a("h4",[e._v("You will be charged "),a("strong",{staticClass:"error--text"},[e._v("$"+e._s(e.membershipPrice))]),e._v(" to join this organization:")])])],1),e.stripePubKey?a("stripe-element-card",{ref:"cardPaymentRef",attrs:{pk:e.stripePubKey},on:{token:e.tokenCreated,error:function(t){return e.joining=!1},"element-ready":function(){return e.stripeElementIsReady=!0}}}):e._e()],1):e._e(),a(b["a"],{attrs:{cols:"12",md:"12"}},[a("user-agrement-legal-waver-dialog",{ref:"uglw",attrs:{userAgreementPropsText:e.organization.waiver_text}})],1),a(f["a"]),a(m["a"],[e.turnstileSiteKey?a("turnstile-component",{ref:"turnstileCmpRef",attrs:{id:"signup-and-join-turnstile-widget",sitekey:e.turnstileSiteKey},on:{verify:e.onVerifyTurnstile,expire:function(t){return e.$refs.turnstileCmpRef.reset()},fail:e.onFailTurnstile,timeout:e.onFailTurnstile}}):e._e(),a(C["a"]),a(n["a"],{attrs:{color:"secondary",outlined:"",to:{name:e.$rns.PUBLIC_ORG_PROFILE,params:{record_id:e.organization.id}}}},[e._v("Cancel")]),a(n["a"],{attrs:{type:"submit",color:"primary",loading:e.joining,disabled:!e.formValid||!!e.membershipPrice&&!e.stripeElementIsReady||!e.selectedPlan||"sign-in"==e.accountMode||!e.turnstileToken||e.currentMembership&&e.currentMembership.is_admin}},[e._v(" "+e._s(e.alreadyJoined?"Re-Join":"Join")+" ")])],1)],1)],1):e._e()],1)},O=[],j=(a("14d9"),a("94ed")),P=a("ed09"),S=a("bb36"),$=a("cbec"),E=a("7f98"),I=a("acaf"),V=a("2405"),A=a("4360"),D=a("a18c"),J=a("d3e3"),M=a("6ba2"),T=a("ac7c"),R=a("67b6"),q=a("43a6"),B=a("b73d"),z=a("a844"),G=a("c964"),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(x["a"],[e.schema.length?e._e():a(b["a"],{attrs:{cols:"12"}},[a("span",{staticClass:"caption"},[e._v("There is no form to fill out at this organization!")])]),e._l(e.schema,(function(t){return a(b["a"],{key:t.name,attrs:{cols:"12",md:"text"==t.type||t.choices&&t.choices.length>0?12:6}},[t.choices&&t.choices.length>0?[a("p",{staticClass:"caption mb-0"},[e._v(e._s(t.title)+":")]),t.multiple?a("div",{staticClass:"d-flex flex-wrap demo-space-x mt-0"},e._l(t.choices,(function(i,s){return a(T["a"],{key:s,staticClass:"mt-0 mb-0 pt-0",attrs:{label:i.title,value:i.value,"hide-details":""},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}})})),1):a(q["a"],{staticClass:"mt-0",attrs:{"hide-details":"",rules:t.required?[e.rules.required]:[]},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}},[a("div",{staticClass:"d-flex flex-wrap demo-space-x mt-0"},e._l(t.choices,(function(e,t){return a(R["a"],{key:t,staticClass:"mt-0 mb-0 pt-0",attrs:{label:e.title,value:e.value}})})),1)])]:"integer"==t.type||"float"==t.type||"number"==t.type?[a(w["a"],{attrs:{dense:"",label:t.title,type:"number",step:"integer"==t.type?1:"any",rules:t.required?[e.rules.required]:[]},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,e._n(a))},expression:"memberFields[f.name]"}})]:"percent"==t.type?[a(w["a"],{attrs:{dense:"",label:t.title,rules:t.required?[e.rules.required]:[],type:"number",suffix:"%",min:"0",max:"100"},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,e._n(a))},expression:"memberFields[f.name]"}})]:"boolean"==t.type?[a(B["a"],{staticClass:"pt-0 mt-1",attrs:{label:t.title,dense:""},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}})]:"date"==t.type||"time"==t.type?[a(y["a"],{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(i){var s=i.on,n=i.attrs;return[a(w["a"],e._g(e._b({staticClass:"pt-0 mt-0 mb-5",attrs:{label:t.title,rules:t.required?[e.rules.required]:[],"append-icon":"time"==t.type?e.icons.mdiClockOutline:e.icons.mdiCalendar,readonly:""},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}},"v-text-field",n,!1),s))]}}],null,!0),model:{value:e.uiFieldsData["menu__"+t.name],callback:function(a){e.$set(e.uiFieldsData,"menu__"+t.name,a)},expression:"uiFieldsData[`menu__${f.name}`]"}},["time"==t.type?a(G["a"],{attrs:{color:"primary"},on:{"click:minute":function(a){e.uiFieldsData["menu__"+t.name]=!1}},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}}):a(h["a"],{attrs:{color:"primary"},on:{input:function(a){e.uiFieldsData["menu__"+t.name]=!1}},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}})],1)]:"datetime"==t.type?[a("v-datetime-picker",{attrs:{label:t.title,"text-field-props":{appendIcon:e.icons.mdiCalendar,class:"pt-0 mt-0 mb-5",rules:t.required?[e.rules.required]:[]}},scopedSlots:e._u([{key:"dateIcon",fn:function(){return[a(v["a"],[e._v(e._s(e.icons.mdiCalendar))])]},proxy:!0},{key:"timeIcon",fn:function(){return[a(v["a"],[e._v(e._s(e.icons.mdiClock))])]},proxy:!0}],null,!0),model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}})]:"text"==t.type?[a(z["a"],{attrs:{dense:"",label:t.title,rules:t.required?[e.rules.required]:[],rows:"2"},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,a)},expression:"memberFields[f.name]"}})]:[a(w["a"],{attrs:{dense:"",label:t.title,rules:t.required?[e.rules.required]:[],type:"text"},model:{value:e.memberFields[t.name],callback:function(a){e.$set(e.memberFields,t.name,"string"===typeof a?a.trim():a)},expression:"memberFields[f.name]"}})]],2)}))],2)},Y=[],N={props:{memberFields:{type:Object,required:!0},schema:{type:Array,required:!0}},setup(e,t){return{rules:{required:E["d"],confirmedValidator:E["a"],emailValidator:E["b"]},icons:{mdiCalendar:j["u"]}}}},H=N,U=a("2877"),K=Object(U["a"])(H,L,Y,!1,null,"2599b936",null),W=K.exports,Z=a("631a"),Q={components:{MemberFieldsSchemaCmp:W,TurnstileComponent:M["a"],StripeElementCard:I["StripeElementCard"],UserAgrementLegalWaverDialog:Z["a"]},props:{},setup(e,t){const{route:a,router:i}=Object(V["e"])(),s=Object(P["J"])(!1),n=Object(P["J"])({}),r=Object(P["J"])(!1),l=Object(P["J"])(null),o=Object(P["J"])(null),c=Object(P["J"])(!1),u=Object(P["J"])({}),d=Object(P["J"])({}),m=Object(P["J"])(null),p=Object(P["J"])(null),b=Object(P["J"])(!1),h=Object(P["J"])(null),f=Object(P["J"])(null),g=Object(P["J"])(null),v=Object(P["J"])(null),_=Object(P["J"])(!1),y=Object(P["J"])({}),x=Object(P["J"])(null),k=Object(P["J"])(!1),C=Object(P["J"])("sign-up"),w=Object(P["J"])({}),F=Object(P["J"])({member:{}}),O=Object(P["J"])(null),I=Object(P["J"])(!1),M=Object(P["J"])(!1),T=a.value.params.record_id,R=Object(P["b"])(()=>1*((p.value||{}).price||0)+1*(f.value||0)),q=Object(P["b"])(()=>!!m.value&&!m.value.is_expired);Object(P["Y"])(r,e=>{e&&setTimeout(()=>l.value="YEAR")}),Object(P["A"])(()=>{B(),N(),W(),J["a"].on("user:change-state",L)}),Object(P["D"])(()=>{J["a"].off("user:change-state",L)});const B=()=>{S["a"].get("cycling_org/global_conf").then(e=>{O.value=e.data.TURNSTILE_SITE_KEY,g.value=e.data.STRIPE_PUBLISHABLE_KEY},e=>{Object($["notifyDefaultServerError"])(e,!0)})},z=e=>{n.value=e},G=()=>{Object($["notifyError"])("Something is wrong. refresh the page and try again!")},L=()=>{W()},Y=()=>{s.value=!0,S["a"].post("account/session",w.value).then(e=>{A["a"].commit("currentUser",e.data),s.value=!1,C.value=null,w.value={}},e=>{s.value=!1,Object($["notifyDefaultServerError"])(e,!0)})},N=()=>{let e={exfields:"member_fields_schema,membership_plans"};S["a"].get("cycling_org/organization/"+T,{params:e}).then(e=>{u.value=e.data,v.value=e.data.membership_plans||[],h.value=e.data.member_fields_schema||[],h.value.forEach(e=>{e.multiple&&Object(P["K"])(d.value,e.name,d.value[e.name]||[])})},e=>{Object($["notifyDefaultServerError"])(e,!0)})},H=()=>{R.value?(b.value=!0,x.value.submit()):U()},U=e=>{if(R.value&&!e)return Object($["notifyWarn"])("Payment is required!");if(!p.value)return Object($["notifyWarn"])("Select a membership plan!");b.value=!0;var t={turnstile_token:n.value,membership:{member_fields:d.value,token:e,plan_id:p.value.id,donation:f.value}};"sign-up"===C.value&&(t.register=F.value),S["a"].post(`cycling_org/organization/${T}/signup_and_join`,t).then(e=>{b.value=!1;var t=`You ${q.value?"Renewed membership":"Joined"} successfully.`;e.data._member._user.is_active||(t+="You must activate your account using the link sent to your email, before logging in."),Object($["notifySuccess"])(t,0),i.push({name:D["b"].PUBLIC_ORG_PROFILE,params:{record_id:T}})},e=>{b.value=!1,Object($["notifyDefaultServerError"])(e,!0)})},K=e=>{U(e.id)},W=()=>{if(!A["a"].getters.isAuthenticated)return m.value=null,void(d.value={});S["a"].get(`cycling_org/organization/${T}/join`).then(e=>{m.value=e.data,d.value=Object.assign({},d.value,m.value.member_fields)},e=>{404===e.response.status?m.value=null:Object($["notifyDefaultServerError"])(e,!0)})};return{turnstileToken:n,logining:s,showBirthDateMenu:r,birthDateActivePicker:l,birthDatePickerRef:o,accountMode:C,loginForm:w,registerForm:F,organization:u,joining:b,alreadyJoined:q,schema:h,membershipPlans:v,memberFields:d,uiFieldsData:y,cardPaymentRef:x,stripeElementIsReady:k,membershipPrice:R,stripePubKey:g,formValid:_,currentMembership:m,selectedPlan:p,donateValue:f,loadGlobalConfKeys:B,turnstileSiteKey:O,onVerifyTurnstile:z,onFailTurnstile:G,join:U,login:Y,onSubmit:H,loadOrganization:N,tokenCreated:K,isPasswordVisible:c,aggrementDialog:I,aggrementAccept:M,rules:{required:E["d"],confirmedValidator:E["a"],emailValidator:E["b"]},icons:{mdiLinkVariant:j["Bb"],mdiAlertOutline:j["m"],mdiLogin:j["Gb"],mdiClose:j["P"],mdiEyeOutline:j["cb"],mdiEyeOffOutline:j["bb"],mdiCalendar:j["u"],mdiPhoneOutline:j["Pb"],mdiEmailOutline:j["Z"],mdiAccountCheck:j["c"]}}}},X=Q,ee=(a("07f0"),Object(U["a"])(X,F,O,!1,null,"376f7d61",null));t["default"]=ee.exports},"7e58":function(e,t,a){},a844:function(e,t,a){"use strict";a("1681");var i=a("8654"),s=a("58df");const n=Object(s["a"])(i["a"]);t["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick(()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(a,t)+"px"},genInput(){const e=i["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){i["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},ac7c:function(e,t,a){"use strict";a("6ca7"),a("ec29");var i=a("9d26"),s=a("c37a"),n=a("fe09");t["a"]=n["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick(()=>this.inputIndeterminate=e)},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})}}]);
//# sourceMappingURL=chunk-2cb33b46.8d3d5d52.js.map