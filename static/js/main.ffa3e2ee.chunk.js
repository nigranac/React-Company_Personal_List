(this.webpackJsonpsapyr=this.webpackJsonpsapyr||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},32:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(7),i=c.n(n),r=(c(28),c(29),c(30),c(10)),l=c(12),d=c.n(l),j=c(14),o=(c(32),c(45)),u=c(46),b="UPDATE_USER",O="DELETE_USER",x="USER_LIST_REQUEST",h="USER_LIST_SUCCESS",p="USER_LIST_FAIL",f=function(e){return function(t){t({type:b,payload:e})}},m=c(9),v=c(1),y=function(e){var t=e.info,c=(e.index,e.id),a=Object(m.b)(),n=Object(s.useState)(!1),i=Object(r.a)(n,2),l=i[0],b=i[1],O=Object(s.useState)(t.name),x=Object(r.a)(O,2),h=x[0],p=x[1],y=Object(s.useState)(t.email),k=Object(r.a)(y,2),g=k[0],N=k[1],S=Object(s.useState)(t.phone),w=Object(r.a)(S,2),C=w[0],E=w[1],I=Object(s.useState)(t.website),T=Object(r.a)(I,2),U=T[0],_=T[1],R=function(){b(!1)};function L(){return(L=Object(j.a)(d.a.mark((function e(){var t,s,n,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:h,email:g,phone:C,website:U},s={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},e.next=4,fetch("https://jsonplaceholder.typicode.com/users/".concat(c),s);case 4:return n=e.sent,e.next=7,n.json();case 7:i=e.sent,a(f({data:i})),b(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{onClick:function(){return b(!0)},className:"card-link edit-icon",children:Object(v.jsx)("i",{class:"fas fa-edit"})}),Object(v.jsxs)(o.a,{show:l,onHide:R,children:[Object(v.jsx)(o.a.Header,{closeButton:!0,children:Object(v.jsx)(o.a.Title,{children:"Basic Modal"})}),Object(v.jsxs)(o.a.Body,{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(v.jsxs)("div",{className:"modal-body-div",style:{},children:[Object(v.jsx)("p",{className:"modal-text",children:"Name:"}),Object(v.jsx)("input",{name:"name",onChange:function(e){p(e.target.value)},type:"text",defaultValue:t.name})]}),Object(v.jsxs)("div",{className:"modal-body-div",children:[Object(v.jsx)("p",{className:"modal-text",children:"Email:"}),Object(v.jsx)("input",{name:"email",onChange:function(e){return N(e.target.value)},type:"text",defaultValue:t.email})]}),Object(v.jsxs)("div",{className:"modal-body-div",children:[Object(v.jsx)("p",{className:"modal-text",children:"Phone:"}),Object(v.jsx)("input",{name:"phone",onChange:function(e){return E(e.target.value)},type:"text",defaultValue:t.phone})]}),Object(v.jsxs)("div",{className:"modal-body-div",children:[Object(v.jsx)("p",{className:"modal-text",children:"Website:"}),Object(v.jsx)("input",{name:"website",onChange:function(e){return _(e.target.value)},type:"text",defaultValue:t.website})]})]}),Object(v.jsxs)(o.a.Footer,{children:[Object(v.jsx)(u.a,{variant:"secondary",onClick:R,children:"Close"}),Object(v.jsx)(u.a,{variant:"primary",onClick:function(){return L.apply(this,arguments)},children:"Save Changes"})]})]})]})},k=(c(40),function(e){var t=e.info,c=e.userIndex,a=Object(m.b)(),n=Object(s.useState)(!1),i=Object(r.a)(n,2),l=i[0],d=i[1];return Object(v.jsx)("div",{className:"col-smd-6 col-md-6 my-4 ",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsx)("img",{src:"https://avatars.dicebear.com/v2/avataaars/".concat(t.id,".svg?options[mood][]=happy"),alt:"resim",style:{width:"200px",alignSelf:"center"}}),Object(v.jsx)("div",{className:"card-body text-center",children:Object(v.jsx)("h5",{className:"card-title",children:t.name})}),Object(v.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(v.jsxs)("li",{className:"list-group-item",children:[" ",Object(v.jsx)("i",{class:"fa fa-envelope","aria-hidden":"true"})," ",t.email]}),Object(v.jsxs)("li",{className:"list-group-item",children:[Object(v.jsx)("i",{class:"fa fa-phone","aria-hidden":"true"})," ",t.phone]}),Object(v.jsxs)("li",{className:"list-group-item",children:[Object(v.jsx)("i",{class:"fa fa-globe","aria-hidden":"true"})," ",t.website]})]}),Object(v.jsxs)("div",{className:"d-flex justify-content-center card-body text-center",children:[Object(v.jsx)("button",{onClick:function(){d(!l)},className:"card-link  likeIcon",children:Object(v.jsx)("i",{style:{fontSize:"30px"},className:l?"fas fa-heart":"far fa-heart","aria-hidden":"true"})}),Object(v.jsx)(y,{id:t.id,info:t,index:c}),Object(v.jsx)("button",{onClick:function(){var e;a((e={id:t.id},function(t){t({type:O,payload:e})}))},className:"card-link trash-button",children:Object(v.jsx)("i",{class:"fa fa-trash","aria-hidden":"true"})})]})]})})}),g=(c(41),function(){return Object(v.jsxs)("div",{class:"sk-fading-circle",id:"sk-fading-circles",children:[Object(v.jsx)("div",{class:"sk-circle1 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle2 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle3 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle4 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle5 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle6 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle7 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle8 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle9 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle10 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle11 sk-circle"}),Object(v.jsx)("div",{class:"sk-circle12 sk-circle"})]})});var N=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e.users.userlist}));return Object(s.useEffect)((function(){e(function(){var e=Object(j.a)(d.a.mark((function e(t){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:x}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return c=e.sent,e.next=7,c.json();case 7:s=e.sent,t({type:h,payload:s}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"Contacts"}),Object(v.jsx)("div",{className:"row",children:(null===t||void 0===t?void 0:t.length)>0?t.map((function(e,t){return Object(v.jsx)(k,{info:e,userIndex:t},e.id)})):Object(v.jsx)(g,{})})]})},S=c(11),w=c(22),C=c(13),E=Object(S.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userlist:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case h:return{loading:!1,userlist:t.payload};case p:return{loading:!1,error:t.payload};case b:var c=e.userlist.map((function(e){return e.id===t.payload.data.id?t.payload.data:e}));return Object(C.a)(Object(C.a)({},e),{},{userlist:c});case O:var s=e.userlist.filter((function(e){return e.id!==t.payload.id}));return Object(C.a)(Object(C.a)({},e),{},{userlist:s});default:return e}}}),I=Object(S.d)(E,Object(S.a)(w.a));i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(m.a,{store:I,children:Object(v.jsx)(N,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ffa3e2ee.chunk.js.map