(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-301d500c"],{"0fd9":function(e,t,i){"use strict";var a=i("ade3"),n=i("5530"),s=(i("13d5"),i("d3b7"),i("caad"),i("2532"),i("99af"),i("b64b"),i("ac1f"),i("5319"),i("4ec9"),i("3ca3"),i("ddb0"),i("4160"),i("159b"),i("4b85"),i("2b0e")),r=i("d9f7"),o=i("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(e,t){return l.reduce((function(i,a){return i[e+Object(o["H"])(a)]=t(),i}),{})}var d=function(e){return[].concat(c,["baseline","stretch"]).includes(e)},m=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(e){return[].concat(c,["space-between","space-around"]).includes(e)},h=u("justify",(function(){return{type:String,default:null,validator:p}})),b=function(e){return[].concat(c,["space-between","space-around","stretch"]).includes(e)},f=u("alignContent",(function(){return{type:String,default:null,validator:b}})),v={align:Object.keys(m),justify:Object.keys(h),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function _(e,t,i){var a=g[e];if(null!=i){if(t){var n=t.replace(e,"");a+="-".concat(n)}return a+="-".concat(i),a.toLowerCase()}}var y=new Map;t["a"]=s["default"].extend({name:"v-row",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},m),{},{justify:{type:String,default:null,validator:p}},h),{},{alignContent:{type:String,default:null,validator:b}},f),render:function(e,t){var i=t.props,n=t.data,s=t.children,o="";for(var l in i)o+=String(i[l]);var c=y.get(o);return c||function(){var e,t;for(t in c=[],v)v[t].forEach((function(e){var a=i[e],n=_(t,e,a);n&&c.push(n)}));c.push((e={"no-gutters":i.noGutters,"row--dense":i.dense},Object(a["a"])(e,"align-".concat(i.align),i.align),Object(a["a"])(e,"justify-".concat(i.justify),i.justify),Object(a["a"])(e,"align-content-".concat(i.alignContent),i.alignContent),e)),y.set(o,c)}(),e(i.tag,Object(r["a"])(n,{staticClass:"row",class:c}),s)}})},1681:function(e,t,i){},"216e":function(e,t,i){},"2c64":function(e,t,i){},"3d86":function(e,t,i){},"43a6":function(e,t,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("ec29"),i("3d86"),i("c37a")),s=i("604c"),r=i("58df"),o=Object(r["a"])(s["a"],n["a"]);t["a"]=o.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},n["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var e=n["a"].options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel:function(){var e=n["a"].options.methods.genLabel.call(this);return e?(e.data.attrs.id=this.computedId,delete e.data.attrs["for"],e.tag="legend",e):null},onClick:s["a"].options.methods.onClick},render:function(e){var t=n["a"].options.render.call(this,e);return this._b(t.data,"div",this.attrs$),t}})},"67b6":function(e,t,i){"use strict";var a=i("15fd"),n=i("5530"),s=(i("b0c0"),i("2c64"),i("ba87")),r=i("9d26"),o=i("c37a"),l=i("7e2b"),c=i("a9ad"),u=i("4e82"),d=i("5311"),m=i("7560"),p=i("fe09"),h=i("80d2"),b=i("58df"),f=i("d9f7"),v=["title"],g=Object(b["a"])(l["a"],c["a"],d["a"],Object(u["a"])("radioGroup"),m["a"]);t["a"]=g.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return p["a"].options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return o["a"].options.computed.computedId.call(this)},hasLabel:o["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return p["a"].options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(e){return p["a"].options.methods.genInput.call(this,"radio",e)},genLabel:function(){return this.hasLabel?this.$createElement(s["a"],{on:{click:p["b"]},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(h["t"])(this,"label")||this.label):null},genRadio:function(){var e=this.attrs$,t=(e.title,Object(a["a"])(e,v));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(r["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(n["a"])({name:this.computedName,value:this.value},t)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(e){var t={staticClass:"v-radio",class:this.classes,on:Object(f["c"])({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}};return e("div",t,[this.genRadio(),this.genLabel()])}})},"6c24":function(e,t,i){"use strict";i("216e")},"6cb4":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.organization?i("v-card",[i("v-card-title",{staticClass:"headline",class:{"pt-1 pb-1":e.organization.logo}},[e._v(" "+e._s(e.alreadyJoined?"Re-Join":"Join")+" to "),i("span",{staticClass:"ml-2 font-weight-bold"},[e._v(" "+e._s(e.organization.name))]),i("v-spacer"),e.organization.logo?i("v-avatar",{staticClass:"avatar-center",attrs:{size:"60",color:"black"}},[i("v-img",{attrs:{src:e.organization.logo}})],1):e._e()],1),i("v-divider"),i("v-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.onSubmit()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[i("v-card-text",[e.$store.getters.isAuthenticated?[i("h3",{staticClass:"mb-2"},[e._v(" 1. You Have an account on WRH. "),i("v-icon",{attrs:{color:"success"}},[e._v(e._s(e.icons.mdiAccountCheck))]),i("span",{staticClass:"caption"},[e._v(" (logged in by "),i("span",{staticClass:"primary--text font-weight-bold"},[e._v(e._s(e.$store.state.currentUser.username))]),e._v(") ")])],1)]:"sign-up"==e.accountMode?[i("h3",{staticClass:"mb-2"},[e._v(" 1. Sign up on WRH: "),i("span",{staticClass:"caption"},[e._v(" (already have an account? "),i("a",{attrs:{href:"javascript:"},on:{click:function(t){e.accountMode="sign-in",e.isPasswordVisible=!1}}},[e._v("Sign in")]),e._v(") ")])]),i("v-row",[i("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"E-mail (Username)",placeholder:"E-mail (Username)","persistent-hint":"",hint:"The E-mail will be used as your username on the login",rules:[e.rules.required,e.rules.emailValidator],dense:""},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}})],1),i("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"Confirm E-mail",placeholder:"Enter E-mail again","persistent-hint":"",rules:[e.rules.required,e.rules.emailValidator,e.rules.confirmedValidator(e.registerForm.confirm_email,e.registerForm.email,"The Confirm E-mail field confirmation does not match")],dense:""},model:{value:e.registerForm.confirm_email,callback:function(t){e.$set(e.registerForm,"confirm_email",t)},expression:"registerForm.confirm_email"}})],1),i("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"First Name",placeholder:"First Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.first_name,callback:function(t){e.$set(e.registerForm,"first_name",t)},expression:"registerForm.first_name"}})],1),i("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"Last Name",placeholder:"Last Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.last_name,callback:function(t){e.$set(e.registerForm,"last_name",t)},expression:"registerForm.last_name"}})],1),i("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Password",placeholder:"Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,hint:"Password should contains at least 1 digit with min 8 chars","persistent-hint":"",rules:[e.rules.required],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),i("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[i("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Confirm Password",placeholder:"Confirm Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,rules:[e.rules.required,e.rules.confirmedValidator(e.registerForm.confirm_password,e.registerForm.password)],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.confirm_password,callback:function(t){e.$set(e.registerForm,"confirm_password",t)},expression:"registerForm.confirm_password"}})],1),i("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[i("v-select",{attrs:{outlined:"",items:e.$const.GENDER_OPTIONS,"item-text":"title","item-value":"value",label:"Gender",dense:"","hide-details":"",rules:[e.rules.required]},model:{value:e.registerForm.gender,callback:function(t){e.$set(e.registerForm,"gender",t)},expression:"registerForm.gender"}})],1),i("v-col",{attrs:{cols:"12",md:"6"}},[i("v-menu",{ref:"birthDateMenuRef",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("v-text-field",e._g(e._b({attrs:{label:"Birth Date","append-icon":e.icons.mdiCalendar,readonly:"",rules:[e.rules.required],outlined:"","hide-details":"",dense:""},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}},"v-text-field",n,!1),a))]}}],null,!1,3701623122),model:{value:e.showBirthDateMenu,callback:function(t){e.showBirthDateMenu=t},expression:"showBirthDateMenu"}},[i("v-date-picker",{ref:"birthDatePickerRef",attrs:{"active-picker":e.birthDateActivePicker,max:(new Date).toISOString().slice(0,10),min:"1940-01-01",color:"primary"},on:{"update:activePicker":function(t){e.birthDateActivePicker=t},"update:active-picker":function(t){e.birthDateActivePicker=t},change:function(t){e.$refs.birthDateMenuRef.save(t)}},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}})],1)],1)],1)]:[i("h3",{staticClass:"mb-2"},[e._v(" 1. Sign in on WRH: "),i("span",{staticClass:"caption"},[e._v(" (don't have account? "),i("a",{attrs:{href:"javascript:"},on:{click:function(t){e.accountMode="sign-up",e.isPasswordVisible=!1}}},[e._v("Sign up")]),e._v(") ")])]),i("v-text-field",{staticClass:"mb-2",attrs:{outlined:"",dense:"",label:"Username",placeholder:"Username","hide-details":"",rules:[e.rules.required]},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),i("v-text-field",{staticClass:"mb-2",attrs:{outlined:"",dense:"",type:e.isPasswordVisible?"text":"password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,label:"Password",placeholder:"Password","hide-details":"",rules:[e.rules.required]},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),i("v-btn",{attrs:{block:"",type:"button",color:"primary",loading:e.logining},on:{click:function(t){return e.login()}}},[e._v(" Login ")])]],2),i("v-divider"),e.schema?i("v-card-text",{class:{disabled:"sign-in"==e.accountMode}},[i("h3",{staticClass:"mb-2"},[e._v(" 2. Fill out organization form: ")]),i("member-fields-schema-cmp",{attrs:{schema:e.schema,"member-fields":e.memberFields}})],1):e._e(),i("v-divider"),i("v-card-text",{class:{disabled:"sign-in"==e.accountMode}},[i("h3",{staticClass:"mb-2"},[e._v(" 3. Choose a membership plan: ")]),e.membershipPlans&&!e.membershipPlans.length?i("v-alert",{staticClass:"mt-2 text-center",attrs:{dense:"",text:"",color:"warning"}},[i("p",[e._v("No membership plan defined on this organiztion.")]),i("p",[e._v("You cannot join!")])]):e._e(),e.currentMembership&&e.currentMembership.is_admin?i("v-alert",{attrs:{dense:"",color:"error",text:""}},[i("p",{staticClass:"mb-1"},[e._v(" You are an "),i("v-chip",{attrs:{small:"",color:"info"}},[e._v("Admin")]),e._v(" member of this organization. ")],1),i("p",{staticClass:"mb-1"},[e._v("Your membership plan won't expire unless the organization drops your grant!")]),i("p",{staticClass:"mb-1"},[e._v(" You dont need to renew your membership! ")])]):e.alreadyJoined&&!e.currentMembership.is_admin?i("v-alert",{attrs:{dense:"",color:"info",text:""}},[i("p",{staticClass:"mb-1"},[e._v(" You have an "),e.currentMembership.is_expiring?i("v-chip",{attrs:{small:"",color:"warning"}},[e._v("Expiring")]):e._e(),e._v(" active plan. ")],1),i("p",{staticClass:"mb-1"},[e._v("Your plan date will be extended to the newly selected plan if you rejoin again.")]),i("p",{staticClass:"mb-1"},[e._v(" Your current plan expires on: "),i("strong",[e._v(e._s(e.currentMembership.exp_date?e.$utils.formatDate(e.currentMembership.exp_date,"MMM D, YYYY"):"Never!"))])])]):e._e(),i("v-row",{staticClass:"mb-1"},e._l(e.membershipPlans||[],(function(t){return i("v-col",{key:t.id,attrs:{cols:"12",md:"4"}},[i("v-card",{class:{"selected-plan":e.selectedPlan&&e.selectedPlan.id==t.id},attrs:{elevation:e.selectedPlan&&e.selectedPlan.id==t.id?10:6,color:e.selectedPlan&&e.selectedPlan.id==t.id?"warning":"light"},on:{click:function(i){e.selectedPlan=t}}},[i("v-card-text",[e.currentMembership&&e.currentMembership.membership_plan&&e.currentMembership.membership_plan.id==t.id?i("v-chip",{staticClass:"current-plan-label",attrs:{color:"info",label:"",small:""}},[e._v("Current")]):e._e(),i("div",{staticClass:"text-center"},[i("h1",{staticClass:"text-2xl font-weight-medium"},[e._v(" "+e._s((e.$const.ORGANIZATION_MEMBERSHIP_PLAN_MAP[t.period]||{}).title||t.period)+" ")]),i("p",[e._v(e._s(t.title||"-"))])]),i("div",{staticClass:"text-center"},[i("sup",{staticClass:"text-sm text-primary"},[e._v("$")]),i("span",{staticClass:"pricing-basic-value text-5xl primary--text font-weight-semibold"},[e._v(" "+e._s(t.price)+" ")])])],1)],1)],1)})),1)],1),i("v-card-text",{class:{disabled:"sign-in"==e.accountMode}},[i("h5",{staticClass:"mb-2"},[e._v(" Please donate to support this We Race Here project and Bicycle Colorado: ")]),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{attrs:{type:"number",label:"Donate value:",prefix:"$",min:"0",outlined:"",dense:"","hide-details":""},scopedSlots:e._u([{key:"append-outer",fn:function(){return[i("v-btn-toggle",{ref:"donateBtnGroupRef",staticClass:"donate-btn-group",model:{value:e.donateValue,callback:function(t){e.donateValue=t},expression:"donateValue"}},e._l([5,10,20,50,100],(function(t){return i("v-btn",{key:t,staticClass:"donate-btn",attrs:{value:t,color:"success",outlined:""}},[e._v(" $"+e._s(t)+" ")])})),1)]},proxy:!0}],null,!1,2952392256),model:{value:e.donateValue,callback:function(t){e.donateValue=t},expression:"donateValue"}})],1)],1)],1),e.membershipPrice?i("v-card-text",{class:{disabled:"sign-in"==e.accountMode}},[i("v-row",{staticClass:"mb-1"},[i("v-col",{attrs:{cols:"12"}},[i("h4",[e._v("You will be charged "),i("strong",{staticClass:"error--text"},[e._v("$"+e._s(e.membershipPrice))]),e._v(" to join this organization:")])])],1),e.stripePubKey?i("stripe-element-card",{ref:"cardPaymentRef",attrs:{pk:e.stripePubKey},on:{token:e.tokenCreated,error:function(t){return e.joining=!1},"element-ready":function(){return e.stripeElementIsReady=!0}}}):e._e()],1):e._e(),i("v-col",{attrs:{cols:"12",md:"12"}},[i("user-agrement-legal-waver-dialog",{ref:"uglw",attrs:{userAgreementPropsText:e.organization.waiver_text}})],1),i("v-divider"),i("v-card-actions",[e.turnstileSiteKey?i("turnstile-component",{ref:"turnstileCmpRef",attrs:{id:"signup-and-join-turnstile-widget",sitekey:e.turnstileSiteKey},on:{verify:e.onVerifyTurnstile,expire:function(t){return e.$refs.turnstileCmpRef.reset()},fail:e.onFailTurnstile,timeout:e.onFailTurnstile}}):e._e(),i("v-spacer"),i("v-btn",{attrs:{color:"secondary",outlined:"",to:{name:e.$rns.PUBLIC_ORG_PROFILE,params:{record_id:e.organization.id}}}},[e._v("Cancel")]),i("v-btn",{attrs:{type:"submit",color:"primary",loading:e.joining,disabled:!e.formValid||!!e.membershipPrice&&!e.stripeElementIsReady||!e.selectedPlan||"sign-in"==e.accountMode||!e.turnstileToken||e.currentMembership&&e.currentMembership.is_admin}},[e._v(" "+e._s(e.alreadyJoined?"Re-Join":"Join")+" ")])],1)],1)],1):e._e()],1)},n=[],s=(i("4795"),i("4160"),i("d3b7"),i("159b"),i("b0c0"),i("94ed")),r=i("ed09"),o=i("bb36"),l=i("cbec"),c=i("7f98"),u=i("acaf"),d=i("2405"),m=i("4360"),p=i("a18c"),h=i("d3e3"),b=i("6ba2"),f=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",[e.schema.length?e._e():i("v-col",{attrs:{cols:"12"}},[i("span",{staticClass:"caption"},[e._v("There is no form to fill out at this organization!")])]),e._l(e.schema,(function(t){return i("v-col",{key:t.name,attrs:{cols:"12",md:"text"==t.type||t.choices&&t.choices.length>0?12:6}},[t.choices&&t.choices.length>0?[i("p",{staticClass:"caption mb-0"},[e._v(e._s(t.title)+":")]),t.multiple?i("div",{staticClass:"d-flex flex-wrap demo-space-x mt-0"},e._l(t.choices,(function(a,n){return i("v-checkbox",{key:n,staticClass:"mt-0 mb-0 pt-0",attrs:{label:a.title,value:a.value,"hide-details":""},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}})})),1):i("v-radio-group",{staticClass:"mt-0",attrs:{"hide-details":"",rules:t.required?[e.rules.required]:[]},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}},[i("div",{staticClass:"d-flex flex-wrap demo-space-x mt-0"},e._l(t.choices,(function(e,t){return i("v-radio",{key:t,staticClass:"mt-0 mb-0 pt-0",attrs:{label:e.title,value:e.value}})})),1)])]:"integer"==t.type||"float"==t.type||"number"==t.type?[i("v-text-field",{attrs:{dense:"",label:t.title,type:"number",step:"integer"==t.type?1:"any",rules:t.required?[e.rules.required]:[]},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,e._n(i))},expression:"memberFields[f.name]"}})]:"percent"==t.type?[i("v-text-field",{attrs:{dense:"",label:t.title,rules:t.required?[e.rules.required]:[],type:"number",suffix:"%",min:"0",max:"100"},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,e._n(i))},expression:"memberFields[f.name]"}})]:"boolean"==t.type?[i("v-switch",{staticClass:"pt-0 mt-1",attrs:{label:t.title,dense:""},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}})]:"date"==t.type||"time"==t.type?[i("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(a){var n=a.on,s=a.attrs;return[i("v-text-field",e._g(e._b({staticClass:"pt-0 mt-0 mb-5",attrs:{label:t.title,rules:t.required?[e.rules.required]:[],"append-icon":"time"==t.type?e.icons.mdiClockOutline:e.icons.mdiCalendar,readonly:""},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}},"v-text-field",s,!1),n))]}}],null,!0),model:{value:e.uiFieldsData["menu__"+t.name],callback:function(i){e.$set(e.uiFieldsData,"menu__"+t.name,i)},expression:"uiFieldsData[`menu__${f.name}`]"}},["time"==t.type?i("v-time-picker",{attrs:{color:"primary"},on:{"click:minute":function(i){e.uiFieldsData["menu__"+t.name]=!1}},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}}):i("v-date-picker",{attrs:{color:"primary"},on:{input:function(i){e.uiFieldsData["menu__"+t.name]=!1}},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}})],1)]:"datetime"==t.type?[i("v-datetime-picker",{attrs:{label:t.title,"text-field-props":{appendIcon:e.icons.mdiCalendar,class:"pt-0 mt-0 mb-5",rules:t.required?[e.rules.required]:[]}},scopedSlots:e._u([{key:"dateIcon",fn:function(){return[i("v-icon",[e._v(e._s(e.icons.mdiCalendar))])]},proxy:!0},{key:"timeIcon",fn:function(){return[i("v-icon",[e._v(e._s(e.icons.mdiClock))])]},proxy:!0}],null,!0),model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}})]:"text"==t.type?[i("v-textarea",{attrs:{dense:"",label:t.title,rules:t.required?[e.rules.required]:[],rows:"2"},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,i)},expression:"memberFields[f.name]"}})]:[i("v-text-field",{attrs:{dense:"",label:t.title,rules:t.required?[e.rules.required]:[],type:"text"},model:{value:e.memberFields[t.name],callback:function(i){e.$set(e.memberFields,t.name,"string"===typeof i?i.trim():i)},expression:"memberFields[f.name]"}})]],2)}))],2)},v=[],g={props:{memberFields:{type:Object,required:!0},schema:{type:Array,required:!0}},setup:function(e,t){return{rules:{required:c["d"],confirmedValidator:c["a"],emailValidator:c["b"]},icons:{mdiCalendar:s["u"]}}}},_=g,y=i("2877"),x=i("6544"),w=i.n(x),C=i("ac7c"),O=i("62ad"),k=i("2e4b"),j=i("132d"),F=i("e449"),S=i("67b6"),P=i("43a6"),V=i("0fd9"),$=i("b73d"),E=i("8654"),D=i("a844"),I=i("c964"),R=Object(y["a"])(_,f,v,!1,null,"2599b936",null),M=R.exports;w()(R,{VCheckbox:C["a"],VCol:O["a"],VDatePicker:k["a"],VIcon:j["a"],VMenu:F["a"],VRadio:S["a"],VRadioGroup:P["a"],VRow:V["a"],VSwitch:$["a"],VTextField:E["a"],VTextarea:D["a"],VTimePicker:I["a"]});var T=i("631a"),J={components:{MemberFieldsSchemaCmp:M,TurnstileComponent:b["a"],StripeElementCard:u["StripeElementCard"],UserAgrementLegalWaverDialog:T["a"]},props:{},setup:function(e,t){var i=Object(d["e"])(),a=i.route,n=i.router,u=Object(r["J"])(!1),b=Object(r["J"])({}),f=Object(r["J"])(!1),v=Object(r["J"])(null),g=Object(r["J"])(null),_=Object(r["J"])(!1),y=Object(r["J"])({}),x=Object(r["J"])({}),w=Object(r["J"])(null),C=Object(r["J"])(null),O=Object(r["J"])(!1),k=Object(r["J"])(null),j=Object(r["J"])(null),F=Object(r["J"])(null),S=Object(r["J"])(null),P=Object(r["J"])(!1),V=Object(r["J"])({}),$=Object(r["J"])(null),E=Object(r["J"])(!1),D=Object(r["J"])("sign-up"),I=Object(r["J"])({}),R=Object(r["J"])({}),M=Object(r["J"])(null),T=Object(r["J"])(!1),J=Object(r["J"])(!1),B=a.value.params.record_id,A=Object(r["b"])((function(){return 1*((C.value||{}).price||0)+1*(j.value||0)})),G=Object(r["b"])((function(){return!!w.value&&!w.value.is_expired}));Object(r["Y"])(f,(function(e){e&&setTimeout((function(){return v.value="YEAR"}))})),Object(r["A"])((function(){q(),Y(),Z(),h["a"].on("user:change-state",N)})),Object(r["D"])((function(){h["a"].off("user:change-state",N)}));var q=function(){o["a"].get("cycling_org/global_conf").then((function(e){M.value=e.data.TURNSTILE_SITE_KEY,F.value=e.data.STRIPE_PUBLISHABLE_KEY}),(function(e){Object(l["notifyDefaultServerError"])(e,!0)}))},z=function(e){b.value=e},L=function(){Object(l["notifyError"])("Something is wrong. refresh the page and try again!")},N=function(){Z()},H=function(){u.value=!0,o["a"].post("account/session",I.value).then((function(e){m["a"].commit("currentUser",e.data),u.value=!1,D.value=null,I.value={}}),(function(e){u.value=!1,Object(l["notifyDefaultServerError"])(e,!0)}))},Y=function(){var e={exfields:"member_fields_schema,membership_plans"};o["a"].get("cycling_org/organization/".concat(B),{params:e}).then((function(e){y.value=e.data,S.value=e.data.membership_plans||[],k.value=e.data.member_fields_schema||[],k.value.forEach((function(e){e.multiple&&Object(r["K"])(x.value,e.name,x.value[e.name]||[])}))}),(function(e){Object(l["notifyDefaultServerError"])(e,!0)}))},K=function(){A.value?(O.value=!0,$.value.submit()):U()},U=function(e){if(A.value&&!e)return Object(l["notifyWarn"])("Payment is required!");if(!C.value)return Object(l["notifyWarn"])("Select a membership plan!");O.value=!0;var t={turnstile_token:b.value,membership:{member_fields:x.value,token:e,plan_id:C.value.id,donation:j.value}};"sign-up"===D.value&&(t.register=R.value),o["a"].post("cycling_org/organization/".concat(B,"/signup_and_join"),t).then((function(e){O.value=!1;var t="You ".concat(G.value?"Renewed membership":"Joined"," successfully.");e.data._member._user.is_active||(t+="You must activate your account using the link sent to your email, before logging in."),Object(l["notifySuccess"])(t,0),n.push({name:p["b"].PUBLIC_ORG_PROFILE,params:{record_id:B}})}),(function(e){O.value=!1,Object(l["notifyDefaultServerError"])(e,!0)}))},W=function(e){U(e.id)},Z=function(){if(!m["a"].getters.isAuthenticated)return w.value=null,void(x.value={});o["a"].get("cycling_org/organization/".concat(B,"/join")).then((function(e){w.value=e.data,x.value=Object.assign({},x.value,w.value.member_fields)}),(function(e){404===e.response.status?w.value=null:Object(l["notifyDefaultServerError"])(e,!0)}))};return{turnstileToken:b,logining:u,showBirthDateMenu:f,birthDateActivePicker:v,birthDatePickerRef:g,accountMode:D,loginForm:I,registerForm:R,organization:y,joining:O,alreadyJoined:G,schema:k,membershipPlans:S,memberFields:x,uiFieldsData:V,cardPaymentRef:$,stripeElementIsReady:E,membershipPrice:A,stripePubKey:F,formValid:P,currentMembership:w,selectedPlan:C,donateValue:j,loadGlobalConfKeys:q,turnstileSiteKey:M,onVerifyTurnstile:z,onFailTurnstile:L,join:U,login:H,onSubmit:K,loadOrganization:Y,tokenCreated:W,isPasswordVisible:_,aggrementDialog:T,aggrementAccept:J,rules:{required:c["d"],confirmedValidator:c["a"],emailValidator:c["b"]},icons:{mdiLinkVariant:s["Bb"],mdiAlertOutline:s["m"],mdiLogin:s["Gb"],mdiClose:s["P"],mdiEyeOutline:s["cb"],mdiEyeOffOutline:s["bb"],mdiCalendar:s["u"],mdiPhoneOutline:s["Pb"],mdiEmailOutline:s["Z"],mdiAccountCheck:s["c"]}}}},B=J,A=(i("6c24"),i("0798")),G=i("8212"),q=i("8336"),z=i("5530"),L=(i("7e58"),i("604c")),N=L["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return L["a"].options.computed.classes.call(this)}},methods:{genData:L["a"].options.methods.genData}}),H=i("a9ad"),Y=i("58df"),K=Object(Y["a"])(N,H["a"]).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return Object(z["a"])(Object(z["a"])({},N.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var e=this.setTextColor(this.color,Object(z["a"])({},N.options.methods.genData.call(this)));return this.group?e:this.setBackgroundColor(this.backgroundColor,e)}}}),U=i("b0af"),W=i("99d9"),Z=i("cc20"),Q=i("ce7e"),X=i("4bd4"),ee=i("adda"),te=i("b974"),ie=i("2fa4"),ae=Object(y["a"])(B,a,n,!1,null,"62fe3996",null);t["default"]=ae.exports;w()(ae,{VAlert:A["a"],VAvatar:G["a"],VBtn:q["a"],VBtnToggle:K,VCard:U["a"],VCardActions:W["a"],VCardText:W["c"],VCardTitle:W["d"],VChip:Z["a"],VCol:O["a"],VDatePicker:k["a"],VDivider:Q["a"],VForm:X["a"],VIcon:j["a"],VImg:ee["a"],VMenu:F["a"],VRow:V["a"],VSelect:te["a"],VSpacer:ie["a"],VTextField:E["a"]})},"7e58":function(e,t,i){},"9d01":function(e,t,i){},a844:function(e,t,i){"use strict";var a=i("5530"),n=(i("a9e3"),i("acd8"),i("e25e"),i("4795"),i("1681"),i("8654")),s=i("58df"),r=Object(s["a"])(n["a"]);t["a"]=r.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var i;e?t.calculateInputHeight():null==(i=t.$refs.input)||i.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"}},genInput:function(){var e=n["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){n["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},b73d:function(e,t,i){"use strict";var a=i("15fd"),n=i("5530"),s=(i("0481"),i("4069"),i("ec29"),i("9d01"),i("fe09")),r=i("c37a"),o=i("c3f0"),l=i("0789"),c=i("490a"),u=i("80d2"),d=["title"];t["a"]=s["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var e=this.attrs$,t=(e.title,Object(a["a"])(e,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(n["a"])(Object(n["a"])({},this.attrs),t)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(n["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(c["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===u["z"].left&&this.isActive||e.keyCode===u["z"].right&&!this.isActive)&&this.onChange()}}})}}]);
//# sourceMappingURL=chunk-301d500c.63dd1e83.js.map