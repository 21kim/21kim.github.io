(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{144:function(e,a,t){e.exports=t(295)},149:function(e,a,t){},150:function(e,a,t){},295:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),s=t.n(l),o=(t(149),t(6)),m=t(11),c=(t(150),t(25)),i=t(299),u=t(300),p=t(303),d=t(97),E=t(304),h={labelCol:{span:8},wrapperCol:{span:16}},b={wrapperCol:{offset:8,span:16}},f=function(e){return r.a.createElement(i.a,Object.assign({},h,{name:"basic",initialValues:{remember:!0},onFinish:function(a){console.log("Success:",a),e.history.push("/home")},onFinishFailed:function(e){console.log("Failed:",e)}}),r.a.createElement(i.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},r.a.createElement(u.a,null)),r.a.createElement(i.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},r.a.createElement(u.a.Password,null)),r.a.createElement(i.a.Item,Object.assign({},b,{name:"remember",valuePropName:"checked"}),r.a.createElement(p.a,null,"Remember me")),r.a.createElement(i.a.Item,b,r.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Login"),r.a.createElement(c.a,{to:"/signup"},r.a.createElement(d.a,{type:"primary"},"Sign Up"))))},g=Object(o.f)((function(e){return r.a.createElement(E.a,null,r.a.createElement(f,e))})),w=(E.a.Header,function(e,a){a.router;return r.a.createElement("h1",null,"Hello world!")}),y=E.a.Header,v=E.a.Content,P=(E.a.Footer,function(){return r.a.createElement(E.a,{className:"App"},r.a.createElement(y,null,r.a.createElement(w,null)),r.a.createElement(v,null))}),I=t(33),k=t(70),j=t(298),F=t(301),x=t(302),O=(k.a.Option,j.a.Option,{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}}),q={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},C=function(){var e=i.a.useForm(),a=Object(I.a)(e,1)[0],t=Object(n.useState)([]),l=Object(I.a)(t,2),s=l[0];l[1],s.map((function(e){return{label:e,value:e}}));return r.a.createElement(i.a,Object.assign({},O,{form:a,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0}),r.a.createElement(i.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(u.a,null)),r.a.createElement(i.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},r.a.createElement(u.a.Password,null)),r.a.createElement(i.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(u.a.Password,null)),r.a.createElement(i.a.Item,{name:"nickname",label:r.a.createElement("span",null,"Nickname\xa0",r.a.createElement(F.a,{title:"What do you want others to call you?"},r.a.createElement(x.a,null))),rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]},r.a.createElement(u.a,null)),r.a.createElement(i.a.Item,{name:"residence",label:"Habitual Residence",rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]},r.a.createElement(u.a,null)),r.a.createElement(i.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},r.a.createElement(u.a,{style:{width:"100%"}})),r.a.createElement(i.a.Item,Object.assign({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,a){return a?Promise.resolve():Promise.reject("Should accept agreement")}}]},q),r.a.createElement(p.a,null,"I have read the ",r.a.createElement("a",{href:""},"agreement"))),r.a.createElement(i.a.Item,q,r.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Register"),r.a.createElement(c.a,{to:"/"},r.a.createElement(d.a,null,"Back"))))},N=function(){return r.a.createElement(E.a,null,r.a.createElement(C,null))},S=t(305),T=function(){var e=r.a.createElement(c.a,{to:"/"},r.a.createElement(d.a,{type:"primary"},"Back home"));return r.a.createElement(S.a,{status:"404",title:"Not Found",subTitle:"Sorry, the page you visited does not exist.",extra:e})},B=Object(m.a)(),H=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(o.b,{history:B},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:g}),r.a.createElement(o.a,{exact:!0,path:"/signup",component:N}),r.a.createElement(o.a,{exact:!0,path:"/home",component:P}),r.a.createElement(o.a,{component:T}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[144,1,2]]]);
//# sourceMappingURL=main.949ae480.chunk.js.map