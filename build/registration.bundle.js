webpackJsonp([1],{117:function(e,t,r){"use strict";function s(e){r(128)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(129),n=r(130),i=r(11),o=s,u=i(a.a,n.a,!1,o,null,null);t.default=u.exports},128:function(e,t){},129:function(e,t,r){"use strict";var s=r(17),a=r.n(s),n=r(10);t.a={name:"userRegistrationView",data:function(){return{user:{username:"",password:"",email:""},error:null}},computed:a()({},Object(n.c)(["getUser"]),{registrationUser:function(){return this.getUser}}),methods:a()({},Object(n.b)(["postUser"]),{registration:function(){var e=this;this.postUser(this.user).then(function(t){e.$router.push({path:"/"})},function(t){e.error=t})},back:function(){this.$router.push({path:"/"})}})}},130:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"container"},[r("h1",[e._v("Welcome")]),e._v(" "),r("form",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],attrs:{type:"text",placeholder:"Username",name:"username",id:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"Password",name:"password",id:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text",placeholder:"Email",name:"email",id:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),r("button",{attrs:{type:"button",id:"login-button"},on:{click:e.registration}},[e._v("Sign up")]),e._v(" "),r("button",{staticClass:"second-button",attrs:{type:"button",id:"second-button"},on:{click:e.back}},[e._v("Back")]),e._v(" "),null!==e.error?r("div",{staticClass:"error"},[e._v(e._s(e.error.rawMessage))]):e._e()])]),e._v(" "),e._m(0,!1,!1)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"bg-bubbles"},[r("li"),e._v(" "),r("li"),e._v(" "),r("li"),e._v(" "),r("li"),e._v(" "),r("li"),e._v(" "),r("li"),e._v(" "),r("li"),e._v(" "),r("li"),e._v(" "),r("li"),e._v(" "),r("li")])}],n={render:s,staticRenderFns:a};t.a=n}});