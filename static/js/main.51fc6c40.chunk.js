(this.webpackJsonpsapyr=this.webpackJsonpsapyr||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},32:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(7),i=c.n(n),r=(c(28),c(29),c(30),c(10)),l=c(11),d=c.n(l),o=c(13),j=(c(32),c(45)),u=c(46),b="UPDATE_USER",O="DELETE_USER",x="USER_LIST_REQUEST",h="USER_LIST_SUCCESS",p="USER_LIST_FAIL",f=function(e){return function(t){t({type:b,payload:e})}},m=c(9),v=c(1),y=function(e){var t=e.minfo,c=(e.index,e.id),a=Object(m.b)(),n=Object(s.useState)(!1),i=Object(r.a)(n,2),l=i[0],b=i[1],O=Object(s.useState)(t.name),x=Object(r.a)(O,2),h=x[0],p=x[1],y=Object(s.useState)(t.name),k=Object(r.a)(y,2),g=(k[0],k[1]),N=Object(s.useState)(t.email),S=Object(r.a)(N,2),w=S[0],C=S[1],E=Object(s.useState)(t.phone),I=Object(r.a)(E,2),T=I[0],U=I[1],_=Object(s.useState)(t.website),R=Object(r.a)(_,2),L=R[0],B=R[1],V=function(){b(!1)};function A(){return(A=Object(o.a)(d.a.mark((function e(){var t,s,n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:h,email:w,phone:T,website:L},s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("https://jsonplaceholder.typicode.com/users/".concat(c),s);case 4:return n=e.sent,e.next=7,n.json();case 7:i=e.sent,console.log("data",i),a(f({data:i})),b(!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{onClick:function(){return b(!0)},className:"card-link edit-icon",children:Object(v.jsx)("i",{class:"fas fa-edit"})}),Object(v.jsxs)(j.a,{show:l,onHide:V,children:[Object(v.jsx)(j.a.Header,{closeButton:!0,children:Object(v.jsx)(j.a.Title,{children:"Basic Modal"})}),Object(v.jsxs)(j.a.Body,{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(v.jsxs)("div",{className:"modal-body-div",style:{},children:[Object(v.jsx)("p",{className:"modal-text",children:"Name:"}),Object(v.jsx)("input",{name:"name",onChange:function(e){g(e.target.value),p(e.target.value)},type:"text",defaultValue:t.name})]}),Object(v.jsxs)("div",{className:"modal-body-div",children:[Object(v.jsx)("p",{className:"modal-text",children:"Email:"}),Object(v.jsx)("input",{name:"email",onChange:function(e){return C(e.target.value)},type:"text",defaultValue:t.email})]}),Object(v.jsxs)("div",{className:"modal-body-div",children:[Object(v.jsx)("p",{className:"modal-text",children:"Phone:"}),Object(v.jsx)("input",{name:"phone",onChange:function(e){return U(e.target.value)},type:"text",defaultValue:t.phone})]}),Object(v.jsxs)("div",{className:"modal-body-div",children:[Object(v.jsx)("p",{className:"modal-text",children:"Website:"}),Object(v.jsx)("input",{name:"website",onChange:function(e){return B(e.target.value)},type:"text",defaultValue:t.website})]})]}),Object(v.jsxs)(j.a.Footer,{children:[Object(v.jsx)(u.a,{variant:"secondary",onClick:V,children:"Close"}),Object(v.jsx)(u.a,{variant:"primary",onClick:function(){return A.apply(this,arguments)},children:"Save Changes"})]})]})]})},k=(c(40),function(e){var t=e.info,c=e.userIndex,a=Object(m.b)(),n=Object(m.c)((function(e){return e.users.userlist}))[c],i=Object(s.useState)(!1),l=Object(r.a)(i,2),d=l[0],o=l[1];return console.log("minfo",n),Object(v.jsx)("div",{className:"col-smd-6 col-md-6 my-4 ",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("img",{src:"https://avatars.dicebear.com/v2/avataaars/".concat(t.id,".svg?options[mood][]=happy"),alt:"resim",style:{width:"200px",alignSelf:"center"}}),Object(v.jsx)("div",{className:"card-body text-center",children:Object(v.jsx)("h5",{className:"card-title",children:t.name})}),Object(v.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(v.jsxs)("li",{className:"list-group-item",children:[" ",Object(v.jsx)("i",{class:"fa fa-envelope","aria-hidden":"true"})," ",t.email]}),Object(v.jsxs)("li",{className:"list-group-item",children:[Object(v.jsx)("i",{class:"fa fa-phone","aria-hidden":"true"})," ",t.phone]}),Object(v.jsxs)("li",{className:"list-group-item",children:[Object(v.jsx)("i",{class:"fa fa-globe","aria-hidden":"true"})," ",t.website]})]}),Object(v.jsxs)("div",{className:"d-flex justify-content-center card-body text-center",children:[Object(v.jsx)("button",{onClick:function(){o(!d)},className:"card-link  likeIcon",children:Object(v.jsx)("i",{style:{fontSize:"30px"},className:d?"fas fa-heart":"far fa-heart","aria-hidden":"true"})}),Object(v.jsx)(y,{id:t.id,minfo:n,index:c}),Object(v.jsx)("button",{onClick:function(){var e;a((e={id:t.id},function(t){t({type:O,payload:e})}))},className:"card-link trash-button",children:Object(v.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})})]})]})})}),g=(c(41),function(){return Object(v.jsxs)("div",{class:"sk-fading-circle",id:"sk-fading-circles",children:[Object(v.jsx)("div",{class:"sk-circle1 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle2 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle3 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle4 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle5 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle6 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle7 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle8 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle9 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle10 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle11 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle12 sk-circle"})]})});var N=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.users.userlist}));return Object(s.useEffect)((function(){e(function(){var e=Object(o.a)(d.a.mark((function e(t){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:x}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,t({type:h,payload:s}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Contacts"}),Object(v.jsx)("div",{className:"row",children:(null===t||void 0===t?void 0:t.length)>0?t.map((function(e,t){return Object(v.jsx)(k,{info:e,userIndex:t},e.id)})):Object(v.jsx)(g,{})})]})},S=c(12),w=c(22),C=c(19),E=Object(S.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userlist:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case h:return{loading:!1,userlist:t.payload};case p:return{loading:!1,error:t.payload};case b:console.log("das",t.payload);var c=e.userlist.map((function(e){return e.id===t.payload.data.id?t.payload.data:e}));return Object(C.a)(Object(C.a)({},e),{},{userlist:c});case O:var s=e.userlist.findIndex((function(e){return e.id==t.payload.id}));e.userlist.splice(s,1);return{userlist:e.userlist};default:return e}}}),I=Object(S.d)(E,Object(S.a)(w.a));i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(m.a,{store:I,children:Object(v.jsx)(N,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.51fc6c40.chunk.js.map