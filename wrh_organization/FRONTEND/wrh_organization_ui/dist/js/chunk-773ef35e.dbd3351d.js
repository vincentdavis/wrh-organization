(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-773ef35e"],{"119d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"auth-wrapper auth-v1"},[i("div",{staticClass:"auth-inner"},[i("v-slide-x-transition",{attrs:{"hide-on-leave":!0}},[i(e.activePage,{key:e.activePage,tag:"component",on:{"change-page":function(t){e.activePage=t}}})],1)],1)])},r=[],n=i("ed09"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"auth-card"},[i("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[i("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:{name:e.$rns.ROOT}}},[i("v-img",{staticClass:"me-3 ",attrs:{src:e.appLogo,"max-height":"100px","max-width":"100px",alt:"logo",contain:""}}),i("h2",{staticClass:"text-2xl font-weight-semibold"},[e._v(" "+e._s(e.appName)+" ")])],1)],1),i("v-card-text",[i("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[e._v(" Login & Authentication ")]),i("p",{staticClass:"mb-2"},[e._v(" Please sign-in to your account and start the adventure ")])]),i("v-card-text",[i("v-form",{on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[i("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Username",placeholder:"Username","hide-details":"",rules:[e.rules.required]},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),i("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Password",placeholder:"Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,"hide-details":"",rules:[e.rules.required]},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),i("div",{staticClass:"d-flex align-center justify-space-between flex-wrap"},[i("v-checkbox",{staticClass:"me-3 mt-1",attrs:{label:"Remember Me","hide-details":""}}),i("a",{staticClass:"mt-1",on:{click:function(t){return e.$emit("change-page","ForgotPassword")}}},[e._v(" Forgot Password? ")])],1),i("v-btn",{staticClass:"mt-6",attrs:{block:"",type:"submit",color:"primary",loading:e.logining,disabled:!e.formValid}},[e._v(" Login ")])],1)],1),i("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[i("span",{staticClass:"me-2"},[e._v(" New on our platform? ")]),i("a",{on:{click:function(t){return e.$emit("change-page","Register")}}},[e._v(" Create an account ")])]),i("v-card-text",{staticClass:"d-flex align-center mt-2"},[i("v-divider"),i("span",{staticClass:"mx-5"},[e._v("or")]),i("v-divider")],1),i("v-card-actions",{staticClass:"d-flex justify-center"},e._l(e.socialLink,(function(t){return i("v-btn",{key:t.icon,staticClass:"ms-1",attrs:{icon:""}},[i("v-icon",{attrs:{color:e.$vuetify.theme.dark?t.colorInDark:t.color}},[e._v(" "+e._s(t.icon)+" ")])],1)})),1)],1)},o=[],l=(i("2ca0"),i("b0c0"),i("94ed")),c=i("1dff"),u=i("7f98"),d=i("bb36"),m=i("4360"),f=i("cbec"),p=(i("d3e3"),i("2405")),h=i("a18c"),v={setup:function(){var e=Object(p["e"])(),t=e.router,i=e.route,a=Object(n["J"])(!1),r=Object(n["J"])(!1),s=Object(n["J"])(!1),o=Object(n["J"])({}),v=[{icon:l["cb"],color:"#4267b2",colorInDark:"#4267b2"},{icon:l["Xb"],color:"#1da1f2",colorInDark:"#1da1f2"},{icon:l["jb"],color:"#272727",colorInDark:"#fff"},{icon:l["lb"],color:"#db4437",colorInDark:"#db4437"}],b=function(){r.value=!0,d["a"].post("account/session",o.value).then((function(e){m["a"].commit("currentUser",e.data),r.value=!1;var a=(i.value.query.next||"").startsWith("/")?i.value.query.next:{name:i.value.query.next||h["b"].ROOT};t.push(a),Object(f["notifySuccess"])("Welcome to WRH!",5e3)}),(function(e){r.value=!1,Object(f["notifyDefaultServerError"])(e,!0)}))};return{isPasswordVisible:a,loginForm:o,socialLink:v,logining:r,formValid:s,login:b,rules:{required:u["d"],emailValidator:u["b"]},icons:{mdiEyeOutline:l["bb"],mdiEyeOffOutline:l["ab"]},appName:c["a"].app.name,appLogo:c["a"].app.logo}}},b=v,g=i("2877"),x=i("6544"),y=i.n(x),k=i("8336"),_=i("b0af"),V=i("99d9"),w=i("ac7c"),C=i("ce7e"),O=i("4bd4"),F=i("132d"),j=i("adda"),E=i("8654"),$=Object(g["a"])(b,s,o,!1,null,null,null),P=$.exports;y()($,{VBtn:k["a"],VCard:_["a"],VCardActions:V["a"],VCardText:V["c"],VCardTitle:V["d"],VCheckbox:w["a"],VDivider:C["a"],VForm:O["a"],VIcon:F["a"],VImg:j["a"],VTextField:E["a"]});var D=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"auth-card"},[i("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[i("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:{name:e.$rns.ROOT}}},[i("v-img",{staticClass:"me-3 ",attrs:{src:e.appLogo,"max-height":"100px","max-width":"100px",alt:"logo",contain:""}}),i("h2",{staticClass:"text-2xl font-weight-semibold"},[e._v(" "+e._s(e.appName)+" ")])],1)],1),i("v-card-text",[i("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[e._v(" "+e._s(e.$store.state.sitePrefs.site_ui__signup_page_title||"Adventure starts here")+" ")]),i("p",{staticClass:"mb-2"},[e._v(" "+e._s(e.$store.state.sitePrefs.site_ui__signup_page_caption||"Make your bicycling races easy and fun!")+" ")])]),i("v-card-text",[i("v-form",{on:{submit:function(t){return t.preventDefault(),e.register()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[i("v-text-field",{staticClass:"mb-3",attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"E-mail (Username)",placeholder:"E-mail (Username)","persistent-hint":"",hint:"The E-mail will be used as your username on the login",rules:[e.rules.required,e.rules.emailValidator],dense:""},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}}),i("v-text-field",{staticClass:"mb-3",attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"Confirm E-mail",placeholder:"Enter E-mail again",rules:[e.rules.required,e.rules.emailValidator,e.rules.confirmedValidator(e.registerForm.confirm_email,e.registerForm.email,"The Confirm E-mail field confirmation does not match")],dense:""},model:{value:e.registerForm.confirm_email,callback:function(t){e.$set(e.registerForm,"confirm_email",t)},expression:"registerForm.confirm_email"}}),i("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"First Name",placeholder:"First Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.first_name,callback:function(t){e.$set(e.registerForm,"first_name",t)},expression:"registerForm.first_name"}}),i("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Last Name",placeholder:"Last Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.last_name,callback:function(t){e.$set(e.registerForm,"last_name",t)},expression:"registerForm.last_name"}}),i("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Password",placeholder:"Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,hint:"Password should contains at least 1 digit with min 8 chars","persistent-hint":"",rules:[e.rules.required],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),i("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Confirm Password",placeholder:"Confirm Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,rules:[e.rules.required,e.rules.confirmedValidator(e.registerForm.confirm_password,e.registerForm.password)],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.confirm_password,callback:function(t){e.$set(e.registerForm,"confirm_password",t)},expression:"registerForm.confirm_password"}}),i("v-select",{staticClass:"mb-3",attrs:{outlined:"",items:e.$const.GENDER_OPTIONS,"item-text":"title","item-value":"value",label:"Gender",dense:"","hide-details":"",rules:[e.rules.required]},model:{value:e.registerForm.gender,callback:function(t){e.$set(e.registerForm,"gender",t)},expression:"registerForm.gender"}}),i("v-menu",{ref:"birthDateMenuRef",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[i("v-text-field",e._g(e._b({staticClass:"mb-3",attrs:{label:"Birth Date","append-icon":e.icons.mdiCalendar,readonly:"",rules:[e.rules.required],outlined:"","hide-details":"",dense:""},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}},"v-text-field",r,!1),a))]}}]),model:{value:e.showBirthDateMenu,callback:function(t){e.showBirthDateMenu=t},expression:"showBirthDateMenu"}},[i("v-date-picker",{ref:"birthDatePickerRef",attrs:{"active-picker":e.birthDateActivePicker,max:(new Date).toISOString().slice(0,10),min:"1940-01-01",color:"primary"},on:{"update:activePicker":function(t){e.birthDateActivePicker=t},"update:active-picker":function(t){e.birthDateActivePicker=t},change:function(t){e.$refs.birthDateMenuRef.save(t)}},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}})],1),i("v-checkbox",{staticClass:"mt-1 agree-terms",attrs:{"hide-details":""},scopedSlots:e._u([{key:"label",fn:function(){return[i("span",{},[e._v("I agree to")])]},proxy:!0},{key:"append",fn:function(){return[i("v-btn",{staticClass:"pl-0 pr-1 pb-1",attrs:{text:"",color:"primary",link:"",small:""},on:{"!click":function(t){return e.$refs.termsOfServiceDialogRef.show()}}},[e._v(" privacy policy & terms ")])]},proxy:!0}]),model:{value:e.registerForm.agree_terms,callback:function(t){e.$set(e.registerForm,"agree_terms",t)},expression:"registerForm.agree_terms"}}),e.turnstileSiteKey?i("turnstile-component",{ref:"turnstileCmpRef",attrs:{id:"signup-turnstile-widget",sitekey:e.turnstileSiteKey},on:{verify:e.onVerifyTurnstile,expire:function(t){return e.$refs.turnstileCmpRef.reset()},fail:e.onFailTurnstile,timeout:e.onFailTurnstile}}):e._e(),i("v-btn",{staticClass:"mt-6",attrs:{block:"",type:"submit",color:"primary",loading:e.registering,disabled:!e.registerForm.agree_terms||!e.registerForm.turnstile_token||!e.turnstileSiteKey||!e.formValid}},[e._v(" Sign Up ")])],1)],1),i("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[i("span",{staticClass:"me-2"},[e._v(" Already have an account? ")]),i("a",{on:{click:function(t){return e.$emit("change-page","Login")}}},[e._v(" Sign in instead ")])]),i("v-card-text",{staticClass:"d-flex align-center mt-2"},[i("v-divider"),i("span",{staticClass:"mx-5"},[e._v("or")]),i("v-divider")],1),i("v-card-actions",{staticClass:"d-flex justify-center"},e._l(e.socialLink,(function(t){return i("v-btn",{key:t.icon,staticClass:"ms-1",attrs:{icon:""}},[i("v-icon",{attrs:{color:e.$vuetify.theme.dark?t.colorInDark:t.color}},[e._v(" "+e._s(t.icon)+" ")])],1)})),1),i("terms-of-service-dialog",{ref:"termsOfServiceDialogRef"})],1)},I=[],S=(i("4795"),i("86fa")),T=i("6ba2"),A={components:{TurnstileComponent:T["a"],TermsOfServiceDialog:S["a"]},setup:function(e,t){var i=Object(n["J"])(null),a=Object(n["J"])(!1),r=Object(n["J"])(!1),s=Object(n["J"])(!1),o=Object(n["J"])(!1),m=Object(n["J"])(null),p=Object(n["J"])({member:{country:"US"},turnstile_token:null}),h=[{icon:l["cb"],color:"#4267b2",colorInDark:"#4267b2"},{icon:l["Xb"],color:"#1da1f2",colorInDark:"#1da1f2"},{icon:l["jb"],color:"#272727",colorInDark:"#fff"},{icon:l["lb"],color:"#db4437",colorInDark:"#db4437"}],v=Object(n["J"])(null);Object(n["A"])((function(){b()})),Object(n["Y"])(o,(function(e){e&&setTimeout((function(){return i.value="YEAR"}))}));var b=function(){d["a"].get("cycling_org/global_conf/TURNSTILE_SITE_KEY").then((function(e){v.value=e.data}),(function(e){Object(f["notifyDefaultServerError"])(e,!0)}))},g=function(e){p.value.turnstile_token=e},x=function(){Object(f["notifyError"])("Something is wrong. refresh the page and try again!")},y=function(){r.value=!0,d["a"].post("cycling_org/users/registration",p.value).then((function(e){r.value=!1,Object(f["notifySuccess"])("You have to activate your account before login. Activation link sent to your email! please check your email.",0),t.emit("change-page","Login")}),(function(e){r.value=!1,Object(f["notifyDefaultServerError"])(e,!0)}))};return{birthDateActivePicker:i,isPasswordVisible:a,registerForm:p,socialLink:h,registering:r,formValid:s,showBirthDateMenu:o,birthDatePickerRef:m,register:y,turnstileSiteKey:v,onVerifyTurnstile:g,onFailTurnstile:x,rules:{required:u["d"],emailValidator:u["b"],confirmedValidator:u["a"]},icons:{mdiEyeOutline:l["bb"],mdiEyeOffOutline:l["ab"],mdiCalendar:l["u"],mdiPhoneOutline:l["Nb"],mdiEmailOutline:l["Y"]},appName:c["a"].app.name,appLogo:c["a"].app.logo}}},B=A,L=(i("f4aa"),i("2e4b")),R=i("e449"),q=i("b974"),J=Object(g["a"])(B,D,I,!1,null,null,null),N=J.exports;y()(J,{VBtn:k["a"],VCard:_["a"],VCardActions:V["a"],VCardText:V["c"],VCardTitle:V["d"],VCheckbox:w["a"],VDatePicker:L["a"],VDivider:C["a"],VForm:O["a"],VIcon:F["a"],VImg:j["a"],VMenu:R["a"],VSelect:q["a"],VTextField:E["a"]});var M=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{staticClass:"auth-card"},[i("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[i("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:{name:e.$rns.ROOT}}},[i("v-img",{staticClass:"me-3 ",attrs:{src:e.appLogo,"max-height":"100px","max-width":"100px",alt:"logo",contain:""}}),i("h2",{staticClass:"text-2xl font-weight-semibold"},[e._v(" "+e._s(e.appName)+" ")])],1)],1),i("v-card-text",[i("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[e._v(" Forgot Password? 🔒 ")]),i("p",{staticClass:"mb-2"},[e._v(" Enter your email and we'll send you instructions to reset your password ")])]),i("v-card-text",[i("v-form",{on:{submit:function(t){return t.preventDefault(),e.sendRecoverPassword()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[i("v-text-field",{staticClass:"mb-4",attrs:{outlined:"",label:"E-mail",placeholder:"E-mail","hide-details":"",rules:[e.rules.required,e.rules.emailValidator]},model:{value:e.forgotForm.email,callback:function(t){e.$set(e.forgotForm,"email",t)},expression:"forgotForm.email"}}),i("v-btn",{staticClass:"mt-6",attrs:{block:"",type:"submit",color:"primary",loading:e.requesting,disabled:!e.formValid}},[e._v(" Send reset link ")])],1)],1),i("v-card-actions",{staticClass:"d-flex justify-center align-center"},[i("a",{staticClass:"d-flex align-center text-sm",on:{click:function(t){return e.$emit("change-page","Login")}}},[i("v-icon",{attrs:{size:"24",color:"primary"}},[e._v(" "+e._s(e.icons.mdiChevronLeft)+" ")]),i("span",[e._v("Back to login")])],1)])],1)},U=[],K={setup:function(e,t){var i=Object(n["J"])(!1),a=Object(n["J"])(!1),r=Object(n["J"])(!1),s=Object(n["J"])({}),o=function(){a.value=!0,d["a"].post("cycling_org/users/registration/send_recover_password",s.value).then((function(e){a.value=!1,Object(f["notifySuccess"])("Reset password link sent to your email! please check your email."),t.emit("change-page","Login")}),(function(e){a.value=!1,Object(f["notifyDefaultServerError"])(e,!0)}))};return{isPasswordVisible:i,forgotForm:s,requesting:a,formValid:r,sendRecoverPassword:o,rules:{required:u["d"],emailValidator:u["b"]},icons:{mdiEyeOutline:l["bb"],mdiEyeOffOutline:l["ab"]},appName:c["a"].app.name,appLogo:c["a"].app.logo}}},z=K,Y=Object(g["a"])(z,M,U,!1,null,null,null),W=Y.exports;y()(Y,{VBtn:k["a"],VCard:_["a"],VCardActions:V["a"],VCardText:V["c"],VCardTitle:V["d"],VForm:O["a"],VIcon:F["a"],VImg:j["a"],VTextField:E["a"]});var X={components:{Register:N,Login:P,ForgotPassword:W},setup:function(){var e={Login:"Login",Register:"Register",ForgotPassword:"ForgotPassword"},t=Object(p["e"])(),i=t.route,a=Object(n["J"])("Login");return Object(n["A"])((function(){e[i.value.params.page]?a.value=e[i.value.params.page]||"Login":e[i.value.query.page]&&(a.value=e[i.value.query.page]||"Login")})),{activePage:a}}},G=X,H=(i("5831"),i("0789")),Q=Object(g["a"])(G,a,r,!1,null,"0e250b06",null);t["default"]=Q.exports;y()(Q,{VSlideXTransition:H["e"]})},"3ca36":function(e,t,i){},"4bd4":function(e,t,i){"use strict";var a=i("5530"),r=(i("caad"),i("2532"),i("07ac"),i("4de4"),i("d3b7"),i("4160"),i("159b"),i("4795"),i("7db0"),i("58df")),n=i("7e2b"),s=i("3206");t["a"]=Object(r["a"])(n["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,i=function(e){return e.$watch("hasError",(function(i){t.$set(t.errorBag,e._uid,i)}),{immediate:!0})},a={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(e._uid)||(a.valid=i(e)))})):a.valid=i(e),a},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var i=this.watchers.find((function(e){return e._uid===t._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots["default"])}})},5311:function(e,t,i){"use strict";var a=i("5607"),r=i("2b0e");t["a"]=r["default"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}})},5831:function(e,t,i){"use strict";i("3ca36")},"6ba2":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"turnstileBoxRef",attrs:{id:"turnstile-box"}})},r=[],n=i("ed09"),s=Object(n["h"])({name:"TurnstileComponent",props:{sitekey:{type:String,required:!0}},emits:{verify:function(e){return null!==e&&""!==e},expire:null,fail:null,timeout:null},setup:function(e,t){var i=Object(n["J"])(null);window.onloadTurnstileCallback=function(){a()},Object(n["A"])((function(){if(window.turnstile)a();else{var e=document.createElement("script");e.src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback",e.async=!0,e.defer=!0,document.head.appendChild(e)}}));var a=function(){var a;null===(a=window.turnstile)||void 0===a||a.render("#".concat(i.value.id),{sitekey:e.sitekey,callback:function(e){return t.emit("verify",e)},"expired-callback":function(){return t.emit("expire")},"error-callback":function(){return t.emit("fail")},"timeout-callback":function(){return t.emit("timeout")}})},r=function(){var e;null===(e=window.turnstile)||void 0===e||e.reset("#".concat(i.value.id))};return{reset:r,turnstileBoxRef:i}}}),o=s,l=i("2877"),c=Object(l["a"])(o,a,r,!1,null,"19d06164",null);t["a"]=c.exports},"6ca7":function(e,t,i){},8116:function(e,t,i){},ac7c:function(e,t,i){"use strict";var a=i("15fd"),r=i("5530"),n=(i("d401"),i("0d03"),i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),s=i("c37a"),o=i("fe09"),l=["title"];t["a"]=o["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var e=this.attrs$,t=(e.title,Object(a["a"])(e,l));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(r["a"])(Object(r["a"])({},t),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(e,t,i){},f4aa:function(e,t,i){"use strict";i("8116")},fe09:function(e,t,i){"use strict";i.d(t,"b",(function(){return o}));i("277d"),i("45fc"),i("d3b7"),i("d401"),i("0d03"),i("25f0"),i("4de4");var a=i("c37a"),r=i("5311"),n=i("8547"),s=i("58df");function o(e){e.preventDefault()}t["a"]=Object(s["a"])(a["a"],r["a"],n["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=a["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:o},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===a&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}})}}]);
//# sourceMappingURL=chunk-773ef35e.dbd3351d.js.map