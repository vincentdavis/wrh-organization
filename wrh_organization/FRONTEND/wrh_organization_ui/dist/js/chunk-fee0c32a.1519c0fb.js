(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fee0c32a"],{"119d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth-wrapper auth-v1"},[a("div",{staticClass:"auth-inner"},[a("v-slide-x-transition",{attrs:{"hide-on-leave":!0}},[a(e.activePage,{key:e.activePage,tag:"component",on:{"change-page":function(t){e.activePage=t}}})],1)],1)])},i=[],s=a("ed09"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"auth-card"},[a("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[a("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:{name:e.$rns.ROOT}}},[a("v-img",{staticClass:"me-3 ",attrs:{src:e.appLogo,"max-height":"100px","max-width":"100px",alt:"logo",contain:""}}),a("h2",{staticClass:"text-2xl font-weight-semibold"},[e._v(" "+e._s(e.appName)+" ")])],1)],1),a("v-card-text",[a("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[e._v(" Login & Authentication ")]),a("p",{staticClass:"mb-2"},[e._v(" Please sign-in to your account and start the adventure ")])]),a("v-card-text",[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.login()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Username",placeholder:"Username","hide-details":"",rules:[e.rules.required]},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}}),a("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Password",placeholder:"Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,"hide-details":"",rules:[e.rules.required]},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),a("div",{staticClass:"d-flex align-center justify-space-between flex-wrap"},[a("v-checkbox",{staticClass:"me-3 mt-1",attrs:{label:"Remember Me","hide-details":""}}),a("a",{staticClass:"mt-1",on:{click:function(t){return e.$emit("change-page","ForgotPassword")}}},[e._v(" Forgot Password? ")])],1),a("v-btn",{staticClass:"mt-6",attrs:{block:"",type:"submit",color:"primary",loading:e.logining,disabled:!e.formValid}},[e._v(" Login ")])],1)],1),a("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[a("span",{staticClass:"me-2"},[e._v(" New on our platform? ")]),a("a",{on:{click:function(t){return e.$emit("change-page","Register")}}},[e._v(" Create an account ")])]),a("v-card-text",{staticClass:"d-flex align-center mt-2"},[a("v-divider"),a("span",{staticClass:"mx-5"},[e._v("or")]),a("v-divider")],1),a("v-card-actions",{staticClass:"d-flex justify-center"},e._l(e.socialLink,(function(t){return a("v-btn",{key:t.icon,staticClass:"ms-1",attrs:{icon:""}},[a("v-icon",{attrs:{color:e.$vuetify.theme.dark?t.colorInDark:t.color}},[e._v(" "+e._s(t.icon)+" ")])],1)})),1)],1)},o=[],l=(a("2ca0"),a("b0c0"),a("94ed")),c=a("1dff"),d=a("7f98"),u=a("bb36"),m=a("4360"),f=a("cbec"),p=(a("d3e3"),a("2405")),g=a("a18c"),b={setup:function(){var e=Object(p["e"])(),t=e.router,a=e.route,r=Object(s["J"])(!1),i=Object(s["J"])(!1),n=Object(s["J"])(!1),o=Object(s["J"])({}),b=[{icon:l["cb"],color:"#4267b2",colorInDark:"#4267b2"},{icon:l["Xb"],color:"#1da1f2",colorInDark:"#1da1f2"},{icon:l["jb"],color:"#272727",colorInDark:"#fff"},{icon:l["lb"],color:"#db4437",colorInDark:"#db4437"}],v=function(){i.value=!0,u["a"].post("account/session",o.value).then((function(e){m["a"].commit("currentUser",e.data),i.value=!1;var r=(a.value.query.next||"").startsWith("/")?a.value.query.next:{name:a.value.query.next||g["b"].ROOT};t.push(r),Object(f["notifySuccess"])("Welcome to WRH!",5e3)}),(function(e){i.value=!1,Object(f["notifyDefaultServerError"])(e,!0)}))};return{isPasswordVisible:r,loginForm:o,socialLink:b,logining:i,formValid:n,login:v,rules:{required:d["d"],emailValidator:d["b"]},icons:{mdiEyeOutline:l["bb"],mdiEyeOffOutline:l["ab"]},appName:c["a"].app.name,appLogo:c["a"].app.logo}}},v=b,h=a("2877"),x=a("6544"),_=a.n(x),y=a("8336"),k=a("b0af"),w=a("99d9"),C=a("ac7c"),V=a("ce7e"),O=a("4bd4"),F=a("132d"),P=a("adda"),j=a("8654"),E=Object(h["a"])(v,n,o,!1,null,null,null),D=E.exports;_()(E,{VBtn:y["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VCheckbox:C["a"],VDivider:V["a"],VForm:O["a"],VIcon:F["a"],VImg:P["a"],VTextField:j["a"]});var $=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"auth-card"},[a("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[a("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:{name:e.$rns.ROOT}}},[a("v-img",{staticClass:"me-3 ",attrs:{src:e.appLogo,"max-height":"100px","max-width":"100px",alt:"logo",contain:""}}),a("h2",{staticClass:"text-2xl font-weight-semibold"},[e._v(" "+e._s(e.appName)+" ")])],1)],1),a("v-card-text",[a("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[e._v(" "+e._s(e.$store.state.sitePrefs.site_ui__signup_page_title||"Adventure starts here")+" ")]),a("p",{staticClass:"mb-2"},[e._v(" "+e._s(e.$store.state.sitePrefs.site_ui__signup_page_caption||"Make your bicycling races easy and fun!")+" ")])]),a("v-card-text",[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.register()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("v-text-field",{staticClass:"mb-3",attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"E-mail (Username)",placeholder:"E-mail (Username)","persistent-hint":"",hint:"The E-mail will be used as your username on the login",rules:[e.rules.required,e.rules.emailValidator],dense:""},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}}),a("v-text-field",{staticClass:"mb-3",attrs:{outlined:"","append-icon":e.icons.mdiEmailOutline,label:"Confirm E-mail",placeholder:"Enter E-mail again",rules:[e.rules.required,e.rules.emailValidator,e.rules.confirmedValidator(e.registerForm.confirm_email,e.registerForm.email,"The Confirm E-mail field confirmation does not match")],dense:""},model:{value:e.registerForm.confirm_email,callback:function(t){e.$set(e.registerForm,"confirm_email",t)},expression:"registerForm.confirm_email"}}),a("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"First Name",placeholder:"First Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.first_name,callback:function(t){e.$set(e.registerForm,"first_name",t)},expression:"registerForm.first_name"}}),a("v-text-field",{staticClass:"mb-3",attrs:{outlined:"",label:"Last Name",placeholder:"Last Name","hide-details":"",rules:[e.rules.required],dense:""},model:{value:e.registerForm.last_name,callback:function(t){e.$set(e.registerForm,"last_name",t)},expression:"registerForm.last_name"}}),a("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Password",placeholder:"Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,hint:"Password should contains at least 1 digit with min 8 chars","persistent-hint":"",rules:[e.rules.required],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),a("v-text-field",{attrs:{outlined:"",type:e.isPasswordVisible?"text":"password",label:"Confirm Password",placeholder:"Confirm Password","append-icon":e.isPasswordVisible?e.icons.mdiEyeOffOutline:e.icons.mdiEyeOutline,rules:[e.rules.required,e.rules.confirmedValidator(e.registerForm.confirm_password,e.registerForm.password)],dense:""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.registerForm.confirm_password,callback:function(t){e.$set(e.registerForm,"confirm_password",t)},expression:"registerForm.confirm_password"}}),a("v-select",{staticClass:"mb-3",attrs:{outlined:"",items:e.$const.GENDER_OPTIONS,"item-text":"title","item-value":"value",label:"Gender",dense:"","hide-details":"",rules:[e.rules.required]},model:{value:e.registerForm.gender,callback:function(t){e.$set(e.registerForm,"gender",t)},expression:"registerForm.gender"}}),a("v-menu",{ref:"birthDateMenuRef",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[a("v-text-field",e._g(e._b({staticClass:"mb-3",attrs:{label:"Birth Date","append-icon":e.icons.mdiCalendar,readonly:"",rules:[e.rules.required],outlined:"","hide-details":"",dense:""},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}},"v-text-field",i,!1),r))]}}]),model:{value:e.showBirthDateMenu,callback:function(t){e.showBirthDateMenu=t},expression:"showBirthDateMenu"}},[a("v-date-picker",{ref:"birthDatePickerRef",attrs:{"active-picker":e.birthDateActivePicker,max:(new Date).toISOString().slice(0,10),min:"1940-01-01",color:"primary"},on:{"update:activePicker":function(t){e.birthDateActivePicker=t},"update:active-picker":function(t){e.birthDateActivePicker=t},change:function(t){e.$refs.birthDateMenuRef.save(t)}},model:{value:e.registerForm.birth_date,callback:function(t){e.$set(e.registerForm,"birth_date",t)},expression:"registerForm.birth_date"}})],1),a("v-checkbox",{staticClass:"mt-1 agree-terms",attrs:{"hide-details":""},scopedSlots:e._u([{key:"label",fn:function(){return[a("span",{},[e._v("I agree to")])]},proxy:!0},{key:"append",fn:function(){return[a("v-btn",{staticClass:"pl-0 pr-1 pb-1",attrs:{text:"",color:"primary",link:"",small:""},on:{"!click":function(t){return e.$refs.termsOfServiceDialogRef.show()}}},[e._v(" privacy policy & terms ")])]},proxy:!0}]),model:{value:e.registerForm.agree_terms,callback:function(t){e.$set(e.registerForm,"agree_terms",t)},expression:"registerForm.agree_terms"}}),a("user-agrement-legal-waver-dialog",{ref:"uglw"}),e.turnstileSiteKey?a("turnstile-component",{ref:"turnstileCmpRef",attrs:{id:"signup-turnstile-widget",sitekey:e.turnstileSiteKey},on:{verify:e.onVerifyTurnstile,expire:function(t){return e.$refs.turnstileCmpRef.reset()},fail:e.onFailTurnstile,timeout:e.onFailTurnstile}}):e._e(),a("v-btn",{staticClass:"mt-6",attrs:{block:"",type:"submit",color:"primary",loading:e.registering,disabled:!e.registerForm.agree_terms||!e.$refs.uglw.agreementAccept||!e.registerForm.turnstile_token||!e.turnstileSiteKey||!e.formValid}},[e._v(" Sign Up ")])],1)],1),a("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[a("span",{staticClass:"me-2"},[e._v(" Already have an account? ")]),a("a",{on:{click:function(t){return e.$emit("change-page","Login")}}},[e._v(" Sign in instead ")])]),a("v-card-text",{staticClass:"d-flex align-center mt-2"},[a("v-divider"),a("span",{staticClass:"mx-5"},[e._v("or")]),a("v-divider")],1),a("v-card-actions",{staticClass:"d-flex justify-center"},e._l(e.socialLink,(function(t){return a("v-btn",{key:t.icon,staticClass:"ms-1",attrs:{icon:""}},[a("v-icon",{attrs:{color:e.$vuetify.theme.dark?t.colorInDark:t.color}},[e._v(" "+e._s(t.icon)+" ")])],1)})),1),a("terms-of-service-dialog",{ref:"termsOfServiceDialogRef"})],1)},S=[],T=(a("4795"),a("86fa")),L=a("631a"),R=a("6ba2"),q={components:{TurnstileComponent:R["a"],TermsOfServiceDialog:T["a"],UserAgrementLegalWaverDialog:L["a"]},setup:function(e,t){var a=Object(s["J"])(null),r=Object(s["J"])(!1),i=Object(s["J"])(!1),n=Object(s["J"])(!1),o=Object(s["J"])(!1),m=Object(s["J"])(null),p=Object(s["J"])({member:{country:"US"},turnstile_token:null}),g=[{icon:l["cb"],color:"#4267b2",colorInDark:"#4267b2"},{icon:l["Xb"],color:"#1da1f2",colorInDark:"#1da1f2"},{icon:l["jb"],color:"#272727",colorInDark:"#fff"},{icon:l["lb"],color:"#db4437",colorInDark:"#db4437"}],b=Object(s["J"])(null);Object(s["A"])((function(){v()})),Object(s["Y"])(o,(function(e){e&&setTimeout((function(){return a.value="YEAR"}))}));var v=function(){u["a"].get("cycling_org/global_conf/TURNSTILE_SITE_KEY").then((function(e){b.value=e.data}),(function(e){Object(f["notifyDefaultServerError"])(e,!0)}))},h=function(e){p.value.turnstile_token=e},x=function(){Object(f["notifyError"])("Something is wrong. refresh the page and try again!")},_=function(){i.value=!0,u["a"].post("cycling_org/users/registration",p.value).then((function(e){i.value=!1,Object(f["notifySuccess"])("You have to activate your account before login. Activation link sent to your email! please check your email.",0),t.emit("change-page","Login")}),(function(e){i.value=!1,Object(f["notifyDefaultServerError"])(e,!0)}))};return{birthDateActivePicker:a,isPasswordVisible:r,registerForm:p,socialLink:g,registering:i,formValid:n,showBirthDateMenu:o,birthDatePickerRef:m,register:_,turnstileSiteKey:b,onVerifyTurnstile:h,onFailTurnstile:x,rules:{required:d["d"],emailValidator:d["b"],confirmedValidator:d["a"]},icons:{mdiEyeOutline:l["bb"],mdiEyeOffOutline:l["ab"],mdiCalendar:l["u"],mdiPhoneOutline:l["Nb"],mdiEmailOutline:l["Y"]},appName:c["a"].app.name,appLogo:c["a"].app.logo}}},I=q,J=(a("ee4b"),a("2e4b")),A=a("e449"),N=a("b974"),B=Object(h["a"])(I,$,S,!1,null,null,null),M=B.exports;_()(B,{VBtn:y["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VCheckbox:C["a"],VDatePicker:J["a"],VDivider:V["a"],VForm:O["a"],VIcon:F["a"],VImg:P["a"],VMenu:A["a"],VSelect:N["a"],VTextField:j["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"auth-card"},[a("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[a("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:{name:e.$rns.ROOT}}},[a("v-img",{staticClass:"me-3 ",attrs:{src:e.appLogo,"max-height":"100px","max-width":"100px",alt:"logo",contain:""}}),a("h2",{staticClass:"text-2xl font-weight-semibold"},[e._v(" "+e._s(e.appName)+" ")])],1)],1),a("v-card-text",[a("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2"},[e._v(" Forgot Password? 🔒 ")]),a("p",{staticClass:"mb-2"},[e._v(" Enter your email and we'll send you instructions to reset your password ")])]),a("v-card-text",[a("v-form",{on:{submit:function(t){return t.preventDefault(),e.sendRecoverPassword()}},model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[a("v-text-field",{staticClass:"mb-4",attrs:{outlined:"",label:"E-mail",placeholder:"E-mail","hide-details":"",rules:[e.rules.required,e.rules.emailValidator]},model:{value:e.forgotForm.email,callback:function(t){e.$set(e.forgotForm,"email",t)},expression:"forgotForm.email"}}),a("v-btn",{staticClass:"mt-6",attrs:{block:"",type:"submit",color:"primary",loading:e.requesting,disabled:!e.formValid}},[e._v(" Send reset link ")])],1)],1),a("v-card-actions",{staticClass:"d-flex justify-center align-center"},[a("a",{staticClass:"d-flex align-center text-sm",on:{click:function(t){return e.$emit("change-page","Login")}}},[a("v-icon",{attrs:{size:"24",color:"primary"}},[e._v(" "+e._s(e.icons.mdiChevronLeft)+" ")]),a("span",[e._v("Back to login")])],1)])],1)},K=[],Y={setup:function(e,t){var a=Object(s["J"])(!1),r=Object(s["J"])(!1),i=Object(s["J"])(!1),n=Object(s["J"])({}),o=function(){r.value=!0,u["a"].post("cycling_org/users/registration/send_recover_password",n.value).then((function(e){r.value=!1,Object(f["notifySuccess"])("Reset password link sent to your email! please check your email."),t.emit("change-page","Login")}),(function(e){r.value=!1,Object(f["notifyDefaultServerError"])(e,!0)}))};return{isPasswordVisible:a,forgotForm:n,requesting:r,formValid:i,sendRecoverPassword:o,rules:{required:d["d"],emailValidator:d["b"]},icons:{mdiEyeOutline:l["bb"],mdiEyeOffOutline:l["ab"]},appName:c["a"].app.name,appLogo:c["a"].app.logo}}},W=Y,X=Object(h["a"])(W,U,K,!1,null,null,null),G=X.exports;_()(X,{VBtn:y["a"],VCard:k["a"],VCardActions:w["a"],VCardText:w["c"],VCardTitle:w["d"],VForm:O["a"],VIcon:F["a"],VImg:P["a"],VTextField:j["a"]});var z={components:{Register:M,Login:D,ForgotPassword:G},setup:function(){var e={Login:"Login",Register:"Register",ForgotPassword:"ForgotPassword"},t=Object(p["e"])(),a=t.route,r=Object(s["J"])("Login");return Object(s["A"])((function(){e[a.value.params.page]?r.value=e[a.value.params.page]||"Login":e[a.value.query.page]&&(r.value=e[a.value.query.page]||"Login")})),{activePage:r}}},H=z,Q=(a("5831"),a("0789")),Z=Object(h["a"])(H,r,i,!1,null,"0e250b06",null);t["default"]=Z.exports;_()(Z,{VSlideXTransition:Q["e"]})},"3ca36":function(e,t,a){},5831:function(e,t,a){"use strict";a("3ca36")},ee4b:function(e,t,a){"use strict";a("f2b7")},f2b7:function(e,t,a){}}]);
//# sourceMappingURL=chunk-fee0c32a.1519c0fb.js.map