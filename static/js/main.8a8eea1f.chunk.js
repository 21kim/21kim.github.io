(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports={wrapper:"App_wrapper__1ck-_",alert:"App_alert__2OwWU","alert-danger":"App_alert-danger__1MRlj",container:"App_container__Kqg8y"}},155:function(e,t,n){},161:function(e,t,n){},163:function(e,t,n){e.exports={container:"MockPage_container__21xvE",mainContainer:"MockPage_mainContainer__1Du07"}},165:function(e,t,n){e.exports={wrapper:"LoginPage_wrapper__2Crma",container:"LoginPage_container__2FMC0",login:"LoginPage_login__2y0I9"}},176:function(e,t,n){e.exports=n(330)},185:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(25),s=n(30),l=Object(s.a)(),u=n(49),m=n(127),p=n(153),h={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR",WARNING:"ALERT_WARNING"},E={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",RESET_PASSWORD_REQUEST:"USERS_RESET_PASSWORD_REQUEST",RESET_PASSWORD_SUCCESS:"USERS_RESET_PASSWORD_SUCCESS",RESET_PASSWORD_FAILURE:"USERS_RESET_PASSWORD_FAILURE",SET_TOKENS:"USERS_SET_TOKENS",REGISTER_REQUEST:"USERS_REGISTER_REQUEST",REGISTER_SUCCESS:"USERS_REGISTER_SUCCESS",REGISTER_FAILURE:"USERS_REGISTER_FAILURE",REFRESH_REQUEST:"USERS_REFRESH_REQUEST",REFRESH_SUCCESS:"USERS_REFRESH_SUCCESS",REFRESH_FAILURE:"USERS_REFRESH_FAILURE",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE"},g="WINDOW_RESIZE",d={GET_MATCH_REQUEST:"GET_MATCH_REQUEST",GET_MATCH_SUCCESS:"GET_MATCH_SUCCESS",GET_MATCH_FAILURE:"GET_MATCH_FAILURE"},f=JSON.parse(localStorage.getItem("user")),S=f?{loggedIn:!0,user:f}:{};var y={};var _=n(43),R={height:0,width:0};var v=Object(u.c)({authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case E.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case E.LOGIN_FAILURE:case E.LOGOUT:return{};case E.REFRESH_REQUEST:return{loggingIn:!0,user:t.user};case E.REFRESH_SUCCESS:return{loggedIn:!0,user:t.user};case E.REFRESH_FAILURE:return{};case E.REGISTER_REQUEST:return{loggingIn:!0,user:t.user};case E.REGISTER_SUCCESS:return{loggedIn:!0,user:t.user};case E.REGISTER_FAILURE:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.GETALL_REQUEST:return{loading:!0};case E.GETALL_SUCCESS:return{items:t.users};case E.GETALL_FAILURE:return{error:t.error};default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.SUCCESS:return{type:"success",message:t.message};case h.ERROR:return{type:"error",message:t.message};case h.WARNING:return{type:"warning",message:t.message};case h.CLEAR:return{};default:return e}},resetPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.RESET_PASSWORD_REQUEST:return{resettingIn:!0,user:t.user};case E.RESET_PASSWORD_SUCCESS:return{resettedIn:!0,user:t.user};case E.RESET_PASSWORD_FAILURE:case E.LOGOUT:return{};default:return e}},environment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(_.a)({},e,{height:t.height,width:t.width});default:return e}},match:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.GET_MATCH_REQUEST:return{loading:!0};case d.GET_MATCH_SUCCESS:return{items:t.match};case d.GET_MATCH_FAILURE:return{error:t.error};default:return e}}}),b=n(77),C=n(102);var O={success:function(e){return{type:h.SUCCESS,message:e}},error:function(e){return{type:h.ERROR,message:e}},clear:function(){return{type:h.CLEAR}},warning:function(e){return{type:h.WARNING,message:e}}},T={appName:"Medical Mavericks",apiUrl:"http://0.0.0.0:5000",imageUrl:"http://0.0.0.0",debug:!1,production:!0};function U(){localStorage.removeItem("user")}function I(e){return e.text().then(function(t){var n=t&&JSON.parse(t);if(!e.ok){401===e.status&&U();var a=n&&n.message||e.statusText;return Promise.reject(a)}return n})}T.production&&(T.appName="Starter",T.apiUrl="",T.imageUrl="",T.debug=!1);var w={login:function(e,t){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})};return fetch("".concat(T.apiUrl,"/api/auth/login"),n).then(I).then(function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data})},logout:U,getAll:function(){var e={method:"GET",headers:N()};return fetch("".concat(T.apiUrl,"/api/users"),e).then(I)},resetPassword:function(e,t,n){var a={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t,secretKey:n})};return fetch("".concat(T.apiUrl,"/api/users"),a).then(I).then(function(e){return e.data})},register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(T.apiUrl,"/api/auth/register"),t).then(I).then(function(e){return e.data})},refresh:function(){var e={method:"POST",headers:x()};return fetch("".concat(T.apiUrl,"/api/auth/refresh"),e).then(I).then(function(e){return e.data})}};var L={login:function(e,t){return function(n){var a;n((a={email:e},{type:E.LOGIN_REQUEST,user:a})),w.login(e,t).then(function(e){n(function(e){return{type:E.LOGIN_SUCCESS,user:e}}(e)),l.push("/")},function(e){n(function(e){return{type:E.LOGIN_FAILURE,error:e}}(e)),n(O.error(e))})}},logout:function(){return w.logout(),{type:E.LOGOUT}},getAll:function(){return function(e){e({type:E.GETALL_REQUEST}),w.getAll().then(function(t){return e(function(e){return{type:E.GETALL_SUCCESS,users:e}}(JSON.parse(t)))},function(t){return e(function(e){return{type:E.GETALL_FAILURE,error:e}}(t))})}},resetPassword:function(e,t,n){return function(a){var r;a((r={email:e},{type:E.RESET_PASSWORD_REQUEST,user:r})),w.resetPassword(e,t,n).then(function(e){a(function(e){return{type:E.RESET_PASSWORD_SUCCESS,user:e}}(e)),l.push("/login")},function(e){a(function(e){return{type:E.RESET_PASSWORD_FAILURE,error:e}}(e)),a(O.error(e))})}},register:function(e){return function(t){var n,a=e.email;t((n={email:a},{type:E.REGISTER_REQUEST,user:n})),w.register(e).then(function(e){t(function(e){return{type:E.REGISTER_SUCCESS,user:e}}(e)),l.push("/login")},function(e){t(function(e){return{type:E.REGISTER_FAILURE,error:e}}(e)),t(O.error(e))})}},refresh:function(){return function(e){var t=JSON.parse(localStorage.getItem("user"));return e({type:E.REFRESH_REQUEST}),new Promise(function(n,a){w.refresh().then(function(a){(t=JSON.parse(localStorage.getItem("user")))&&(t.token=a.token,localStorage.setItem("user",JSON.stringify(t))),e(function(e){return{type:E.REFRESH_SUCCESS,user:e}}(t)),n(a)},function(t){e(function(e){return{type:E.REFRESH_FAILURE,error:e}}(t)),e(O.error(t)),a(t)})})}}},A=function(e,t){return{type:g,height:e,width:t}};function j(){return function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){if("function"===typeof a)return a(t,n);var r=a.promise,i=a.types,o=Object(C.a)(a,["promise","types"]);if(!r)return e(a);var c=Object(b.a)(i,3),s=c[0],l=c[1],u=c[2];e(Object(_.a)({},o,{type:s}));var m=Promise.resolve(),p=n().authentication.user||{},h=p.token,E=p.refresh;if(h){var g=function(e){var t={};return t.raw=e,t.header=JSON.parse(window.atob(e.split(".")[0])),t.payload=JSON.parse(window.atob(e.split(".")[1])),t}(h),d=(new Date).getTime()/1e3|300;m=E&&d>g.payload.exp?e(L.refresh()).then(function(){return r(o)}):r(o)}else{if(!E)return e(Object(_.a)({},o,{type:u}));m=e(L.refresh()).then(function(){return r(o)})}return m.then(function(t){return e(Object(_.a)({},o,{result:t,type:l}))},function(t){return e(O.error(t)),e(Object(_.a)({},o,{error:t,type:u}))}).catch(function(t){console.error("MIDDLEWARE ERROR:",t),e(Object(_.a)({},o,{error:t,type:u}))}),m}}}}var k=Object(p.createLogger)(),P=Object(u.d)(v,T.debug?Object(u.a)(j(),m.a,k):Object(u.a)(j(),m.a)),N=function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Token "+e.token}:{}},x=function(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.refresh?{Authorization:"Bearer "+e.refresh}:{}},G=(n(185),n(12)),F=n(13),W=n(14),D=n(15),H=n(5),Q=n(154),q=n.n(Q),M=n(20),V=function(e){var t=e.component,n=Object(C.a)(e,["component"]);return r.a.createElement(M.b,Object.assign({},n,{render:function(e){return localStorage.getItem("user")?r.a.createElement(t,e):r.a.createElement(M.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},J=n(335),B=n(7),K=n(31),z=n(28),Z=n.n(z),$=n(155),X=n.n($);function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(H.a)(e);if(t){var r=Object(H.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(D.a)(this,n)}}var ee=Z.a.bind(X.a),te=J.a.SubMenu,ne=J.a.ItemGroup,ae=function(e){Object(W.a)(n,e);var t=Y(n);function n(e){var a;return Object(G.a)(this,n),(a=t.call(this,e)).handleClick=function(e){"logo"!==e.key&&a.setState({current:e.key})},a.state={current:""},a}return Object(F.a)(n,[{key:"render",value:function(){return r.a.createElement(J.a,{className:ee("navContainer"),onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(J.a.Item,{className:ee("logo"),key:"logo"},r.a.createElement(K.a,{to:"/"},r.a.createElement(B.a,{type:"menu"}))),r.a.createElement(te,{className:ee("settings"),title:r.a.createElement(B.a,{type:"setting"})},r.a.createElement(ne,{title:"User"},r.a.createElement(J.a.Item,{key:""},r.a.createElement(K.a,{to:"/settings"},"Settings")),r.a.createElement(J.a.Item,{key:"setting:logout"},r.a.createElement(K.a,{to:"/login"},"Logout")))),r.a.createElement(J.a.Item,{className:ee("userInfo"),key:"userInfo",disabled:!0},r.a.createElement("span",{className:ee("username")},"\xa0\xa0 | \xa0\xa0",r.a.createElement(B.a,{type:"user"}),this.props.user&&this.props.user.name)))}}]),n}(r.a.Component);var re=Object(c.b)(function(e){var t=e.authentication;return{authentication:t,user:t.user}},{})(ae),ie=n(161),oe=n.n(ie),ce=Z.a.bind(oe.a);var se=Object(c.b)(function(e){})(function(e){return r.a.createElement("div",{className:ce("main-sider")})}),le=n(162),ue=Object(le.a)(function(e){return e.authentication.loggedIn},function(e){return e.authentication.user},function(e,t){return Boolean(e&&t)}),me=Object(c.b)(function(e){return{user:(e.authentication||{}).user,isAuthenticated:ue(e)}})(function(e){return r.a.createElement(re,e)}),pe=n(163),he=n.n(pe),Ee=(n(238),n(171)),ge=n(331),de=n(338),fe=Z.a.bind(he.a),Se=(ge.a.Header,ge.a.Content);ge.a.Sider;var ye=Object(c.b)(function(e){var t=e.authentication;return{authentication:t,user:t.user}},{_initEnvironment:function(){return function(e){e(A(window.innerHeight,window.innerWidth)),window.onresize=function(){e(A(window.innerHeight,window.innerWidth))}}},refresh:L.refresh})(function(e){var t=Object(a.useState)(),n=Object(b.a)(t,2),i=(n[0],n[1],Object(a.useState)(!0)),o=Object(b.a)(i,2),c=o[0],s=o[1];return(0,e._initEnvironment)(),r.a.createElement("div",{className:fe("container")},r.a.createElement(ge.a,null,r.a.createElement(me,null),r.a.createElement(se,null),r.a.createElement(Se,null,r.a.createElement(Ee.a,{id:"map",options:{center:new window.daum.maps.LatLng(36.176134,127.986741),level:10}}))),r.a.createElement(de.a,{title:"Incoming Meetings",visible:c,onOk:function(){return s(!1)},onCancel:function(){return s(!1)}},r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents...")))}),_e=n(336),Re=n(51),ve=n(165),be=n.n(ve),Ce=n(64),Oe=n(17),Te=n(337),Ue=n(339),Ie=n(332),we=n(98),Le=n.n(we);function Ae(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(H.a)(e);if(t){var r=Object(H.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(D.a)(this,n)}}var je=Z.a.bind(Le.a),ke=function(e){Object(W.a)(n,e);var t=Ae(n);function n(e){var a;return Object(G.a)(this,n),(a=t.call(this,e)).props.logout(),a.state={username:"",password:"",submitted:!1},a.handleChange=a.handleChange.bind(Object(Oe.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(Oe.a)(a)),a}return Object(F.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(Ce.a)({},n,a))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0}),this.props.form.validateFields(function(e){if(!e){var n=t.state,a=n.email,r=n.password;a&&r&&t.props.login(a,r)}})}},{key:"render",value:function(){var e=this.props.loggingIn,t=this.props.form.getFieldDecorator;return r.a.createElement(_e.a,{onSubmit:this.handleSubmit,className:je("login-form")},r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},t("email",{rules:[{required:!0,message:"Please input your username!"}]})(r.a.createElement(Te.a,{name:"email",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},t("password",{rules:[{required:!0,message:"Please input your Password!"}]})(r.a.createElement(Te.a,{name:"password",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),r.a.createElement(_e.a.Item,null,t("remember",{valuePropName:"checked",initialValue:!0})(r.a.createElement(Ue.a,{className:je("remember")},"Remember me")),r.a.createElement(Re.a,{type:"primary",htmlType:"submit",style:{marginTop:"0"},className:je("login-button")},"Log in"),r.a.createElement(K.a,{className:je("signup-button"),to:"/register"},"Sign up"),r.a.createElement(K.a,{className:je("forgot-button"),to:"/forgot",disabled:!0},"Forgot?")),e&&r.a.createElement(Ie.a,null))}}]),n}(r.a.Component);var Pe=Object(c.b)(function(e){return{loggingIn:e.authentication.loggingIn}},{logout:L.logout,login:L.login})(ke),Ne=n(340),xe=n(333),Ge=n(334);function Fe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(H.a)(e);if(t){var r=Object(H.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(D.a)(this,n)}}var We=Z.a.bind(Le.a),De=Ne.a.Step,He=function(e){Object(W.a)(n,e);var t=Fe(n);function n(e){var a;return Object(G.a)(this,n),(a=t.call(this,e)).validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.state={current_step:0,name:"",email:"",password:"",submitted:!1},a.handleChange=a.handleChange.bind(Object(Oe.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(Oe.a)(a)),a}return Object(F.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(Ce.a)({},n,a)),console.log(n,a),console.log(this.state)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({submitted:!0}),this.props.form.validateFields(function(e){if(!e){var n=t.props.dispatch,a=t.state;a?n(L.register(a)):alert("cannot dispatch the request: parameter is missing")}})}},{key:"compareToFirstPassword",value:function(e,t,n){var a=this.props.form;t&&t!==a.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()}},{key:"validate_step_one",value:function(){}},{key:"validate_step_two",value:function(){}},{key:"validate_step_three",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.loggingIn,n=this.props.form.getFieldDecorator;return r.a.createElement("div",null,r.a.createElement(Ne.a,{current:this.state.current_step,onChange:function(t){return e.setState({current_step:t})},style:{margin:"0 0 12px 0"}},r.a.createElement(De,{key:1,title:"Basic"}),r.a.createElement(De,{key:2,title:"Parent"}),r.a.createElement(De,{key:3,title:"Child"})),0===this.state.current_step&&r.a.createElement(_e.a,{className:We("login-form")},r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("email",{rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"The input is not valid E-mail!"}],initialValue:this.state.email})(r.a.createElement(Te.a,{name:"email",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uc774\uba54\uc77c"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("password",{rules:[{required:!0,message:"Please input your Password!"}],initialValue:this.state.password})(r.a.createElement(Te.a,{name:"password",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\ube44\ubc00\ubc88\ud638"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 12px 0"}},n("confirm_password",{rules:[{required:!0,message:"Please input your Password!"},{validator:this.compareToFirstPassword}],initialValue:this.state.confirm_password})(r.a.createElement(Te.a,{name:"confirm_password",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\ube44\ubc00\ubc88\ud638 \ud655\uc778"})))),1===this.state.current_step&&r.a.createElement(_e.a,null,r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("parent name",{rules:[{required:!0,message:"Please input your name!"}],initialValue:this.state.parent_name})(r.a.createElement(Te.a,{name:"parent_name",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\ubcf4\ud638\uc790 \uc774\ub984"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("parent gender",{rules:[{required:!0,message:"Please input your gender!"}],initialValue:this.state.parent_gender})(r.a.createElement(Te.a,{name:"parent_gender",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\ubcf4\ud638\uc790 \uc131\ubcc4"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("parent birthdate",{rules:[{required:!0,message:"Please input your birthdate!"}],initialValue:this.state.parent_birthdate})(r.a.createElement(Te.a,{name:"parent_birthdate",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"clock-circle",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\ubcf4\ud638\uc790 \uc0dd\ub144\uc6d4\uc77c"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("phone number",{rules:[{required:!0,message:"Please input your phone number!"}],initialValue:this.state.phone})(r.a.createElement(Te.a,{name:"phone",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"phone",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\ud734\ub300\uc804\ud654"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("address",{rules:[{required:!0,message:"Please input your address!"}],initialValue:this.state.address})(r.a.createElement(Te.a,{name:"address",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"environment",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uc8fc\uc18c"})))),2===this.state.current_step&&r.a.createElement(_e.a,null,r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("child name",{rules:[{required:!0,message:"Please input your name!"}],initialValue:this.state.child_name})(r.a.createElement(Te.a,{name:"child_name",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uc544\uc774 \uc774\ub984"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("child gender",{rules:[{required:!0,message:"Please input your gender!"}],initialValue:this.state.child_gender})(r.a.createElement(Te.a,{name:"child_gender",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uc131\ubcc4"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("child birthdate",{rules:[{required:!0,message:"Please input your birthdate!"}],initialValue:this.state.child_birthdate})(r.a.createElement(Te.a,{name:"child_birthdate",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"clock-circle",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uc0dd\ub144\uc6d4\uc77c"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("height",{rules:[{required:!0,message:"Please input your height!"}],initialValue:this.state.child_height})(r.a.createElement(Te.a,{name:"child_height",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uc2e0\uc7a5"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("weight",{rules:[{required:!0,message:"Please input your weight!"}],initialValue:this.state.child_weight})(r.a.createElement(Te.a,{name:"child_weight",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\uccb4\uc911"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("developmental_age",{rules:[{required:!0,message:"Please input developmental age of the child!"}],initialValue:this.state.child_developmental_age})(r.a.createElement(Te.a,{name:"child_developmental_age",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\ubc1c\ub2ec\uc5f0\ub839"}))),r.a.createElement(_e.a.Item,{style:{margin:"0 0 6px 0"}},n("child_remark",{rules:[{required:!0,message:"Please input your weight!"}],initialValue:this.state.child_remark})(r.a.createElement(Te.a,{name:"child_remark",onChange:this.handleChange,prefix:r.a.createElement(B.a,{type:"",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\ud2b9\uc774\uc0ac\ud56d"}))),t&&r.a.createElement(Ie.a,null)),r.a.createElement(xe.a,{type:"flex",justify:"space-between",style:{margin:"0 0 12px 0"}},r.a.createElement(Ge.a,{span:6},r.a.createElement(K.a,{to:"/login"},r.a.createElement(Re.a,{type:"danger",onClick:function(){}},"Back"))),this.state.current_step>0&&r.a.createElement(Ge.a,{span:6},r.a.createElement(Re.a,{onClick:function(){return e.setState({current_step:e.state.current_step-1})}},"Prev")),this.state.current_step<2&&r.a.createElement(Ge.a,{span:6},r.a.createElement(Re.a,{onClick:function(){return e.setState({current_step:e.state.current_step+1})}},"Next")),2===this.state.current_step&&r.a.createElement(Ge.a,{span:6},r.a.createElement(Re.a,{type:"primary",onClick:this.handleSubmit},"Submit"))))}}]),n}(r.a.Component);var Qe=Object(c.b)(function(e){return{loggingIn:e.authentication.loggingIn}})(He);function qe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(H.a)(e);if(t){var r=Object(H.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(D.a)(this,n)}}var Me=Z.a.bind(be.a),Ve=function(e){Object(W.a)(n,e);var t=qe(n);function n(e){var a;return Object(G.a)(this,n),(a=t.call(this,e)).state={isLoginPage:"/login"===l.location.pathname,isRegisterPage:"/register"===l.location.pathname},a.WrappedLoginForm=_e.a.create()(Pe),a.WrappedRegisterForm=_e.a.create()(Qe),a}return Object(F.a)(n,[{key:"render",value:function(){var e=this.WrappedLoginForm,t=this.WrappedRegisterForm;return r.a.createElement("div",{className:Me("wrapper")},r.a.createElement("div",{className:Me("container")},this.state.isLoginPage&&r.a.createElement("div",{className:Me("login")},r.a.createElement("h2",null,"IBM Hackathon - ",r.a.createElement("br",null),r.a.createElement("strong",null,T.appName)),r.a.createElement(e,null),r.a.createElement(K.a,{to:"/mock-home"},r.a.createElement(Re.a,{type:"primary"},"see mock-up home"))),this.state.isRegisterPage&&r.a.createElement("div",{className:Me("login")},r.a.createElement("h2",null,"IBM Hackathon - ",r.a.createElement("br",null),r.a.createElement("strong",null,T.appName)),r.a.createElement(t,null))))}}]),n}(r.a.Component),Je=n(341);function Be(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(H.a)(e);if(t){var r=Object(H.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(D.a)(this,n)}}var Ke=Z.a.bind(q.a),ze=function(e){Object(W.a)(n,e);var t=Be(n);function n(e){var a;Object(G.a)(this,n);var r=(a=t.call(this,e)).props.dispatch;return l.listen(function(){r(O.clear())}),a}return Object(F.a)(n,[{key:"render",value:function(){var e=this.props.alert;return r.a.createElement("div",{className:Ke("wrapper")},e.message&&r.a.createElement(Je.a,{banner:!0,message:e.message,type:e.type}),r.a.createElement(M.c,{history:l},r.a.createElement("div",{className:Ke("container")},r.a.createElement(V,{exact:!0,path:"/",component:Ve}),r.a.createElement(M.b,{exact:!0,path:"/login",component:Ve}),r.a.createElement(M.b,{exact:!0,path:"/register",component:Ve}),r.a.createElement(M.b,{exact:!0,path:"/mock-home",component:ye}))))}}]),n}(r.a.Component);var Ze=Object(c.b)(function(e){return{alert:e.alert}})(ze),$e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Xe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!==n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(c.a,{store:P},r.a.createElement(Ze,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");$e?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!==a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Xe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Xe(t,e)})}}()},98:function(e,t,n){e.exports={"login-form":"LoginForm_login-form__25tC_","forgot-button":"LoginForm_forgot-button__1QGT1","login-button":"LoginForm_login-button__3tRfK","signup-button":"LoginForm_signup-button__12iqb",remember:"LoginForm_remember__1y2py"}}},[[176,1,2]]]);