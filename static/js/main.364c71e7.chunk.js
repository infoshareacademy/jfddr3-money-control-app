(this["webpackJsonpmoney-control"]=this["webpackJsonpmoney-control"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(95),n(135)),s=n(59),j=n(3);var d,u,b,l,p,O=n(33),h=n.n(O),m=n(45),x=n(18),g=n(25),f=n(14),v=n(22),y=n(20),w=n(139),S=n(146),C=n(145),k=n(140),A=n(141),I=n(57),E=n.n(I),T=n(29),U=n(66),F=(n(108),n(101),n(107),U.a.initializeApp({apiKey:"AIzaSyB8mOz9VkGizAZvyZCWOnMyDhETCi8o5WE",authDomain:"moneycontrol-eed33.firebaseapp.com",projectId:"moneycontrol-eed33",storageBucket:"moneycontrol-eed33.appspot.com",messagingSenderId:"176388755167",appId:"1:176388755167:web:cfff45c60f74d7a322a36a"})),P=F.firestore(),q=F.auth(),D=(F.storage(),{entries:P.collection("entries"),formatDoc:function(e){return Object(T.a)({id:e.id},e.data())},getCurrentTimestamp:U.a.firestore.FieldValue.serverTimestamp}),W=Object(a.createContext)();function z(){return Object(a.useContext)(W)}function B(e){var t=e.children,n=Object(a.useState)(),r=Object(x.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!0),s=Object(x.a)(o,2),d=s[0],u=s[1];Object(a.useEffect)((function(){return q.onAuthStateChanged((function(e){i(e),u(!1)}))}),[]);var b={currentUser:c,signUp:function(e,t){return q.createUserWithEmailAndPassword(e,t)},signIn:function(e,t){return q.signInWithEmailAndPassword(e,t)},signOut:function(){return q.signOut()}};return Object(j.jsx)(W.Provider,{value:b,children:!d&&t})}var L,G,M,N,J,V=Object(y.a)(w.a)(d||(d=Object(g.a)(["\n  margin: 10px;\n  background-color: #156a77;\n"]))),Z=Object(y.a)(S.a)(u||(u=Object(g.a)(["\n  background-color: #156a77;\n"]))),K=Object(y.a)(C.a)(b||(b=Object(g.a)(["\n  margin: 1rem;\n  width: '25ch';\n"]))),H=Object(y.a)(k.a)(l||(l=Object(g.a)(["\n  padding: 20px;\n  height: 50vh;\n  width: 280px;\n  margin: 20px auto;\n"]))),Q=y.a.p(p||(p=Object(g.a)(["\n  color: red;\n"]))),R=function(){var e=z().signIn,t=Object(a.useState)(""),n=Object(x.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(x.a)(i,2),d=o[0],u=o[1],b=Object(f.g)();function l(){return(l=Object(m.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,c(""),u(!0),t.next=6,e(n.target.email.value,n.target.password.value);case 6:b.push("/"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),c("Failed to sign in"),u(!1);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return Object(j.jsx)(A.a,{align:"center",children:Object(j.jsxs)(H,{elevation:10,children:[Object(j.jsxs)(A.a,{align:"center",children:[Object(j.jsx)(Z,{children:Object(j.jsx)(E.a,{})}),Object(j.jsx)(s.a,{variant:"h4",children:"Sign In"})]}),r&&Object(j.jsx)(Q,{children:r}),Object(j.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(j.jsx)(K,{id:"email",name:"email",label:"E-mail",variant:"outlined",helperText:"",required:!0}),Object(j.jsx)(K,{id:"password",name:"password",label:"Password",variant:"outlined",type:"password",required:!0}),Object(j.jsxs)(A.a,{children:[Object(j.jsx)(V,{type:"submit",variant:"contained",color:"primary",disabled:d,children:"Sign In"}),Object(j.jsxs)(s.a,{children:["Need an account? ",Object(j.jsx)(v.b,{to:"/signup",children:"Sign Up"})]})]})]})]})})},X=Object(y.a)(w.a)(L||(L=Object(g.a)(["\n  margin: 10px;\n  background-color: #156a77;\n"]))),Y=Object(y.a)(S.a)(G||(G=Object(g.a)(["\n  background-color: #156a77;\n"]))),$=Object(y.a)(C.a)(M||(M=Object(g.a)(["\n  margin: 1rem;\n  width: '25ch';\n"]))),_=Object(y.a)(k.a)(N||(N=Object(g.a)(["\n  padding: 20px;\n  height: 50vh;\n  width: 280px;\n  margin: 20px auto;\n"]))),ee=y.a.p(J||(J=Object(g.a)(["\n  color: red;\n"]))),te=function(){var e=z().signUp,t=Object(a.useState)(""),n=Object(x.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(""),o=Object(x.a)(i,2),d=o[0],u=o[1],b=Object(a.useState)(!1),l=Object(x.a)(b,2),p=l[0],O=l[1],g=Object(f.g)();function y(e){return w.apply(this,arguments)}function w(){return(w=Object(m.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),u(""),n.target.password.value===n.target.passwordConfirm.value){t.next=4;break}return t.abrupt("return",u("Passwords do not match"));case 4:return t.prev=4,c(""),O(!0),t.next=9,e(n.target.email.value,n.target.password.value);case 9:g.push("/"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(4),c("Failed to create an account"),O(!1);case 16:case"end":return t.stop()}}),t,null,[[4,12]])})))).apply(this,arguments)}return Object(j.jsx)(A.a,{align:"center",children:Object(j.jsxs)(_,{elevation:10,children:[Object(j.jsxs)(A.a,{align:"center",children:[Object(j.jsx)(Y,{children:Object(j.jsx)(E.a,{})}),Object(j.jsx)(s.a,{variant:"h4",children:"Sign Up"})]}),r&&Object(j.jsx)(ee,{children:r}),Object(j.jsxs)("form",{onSubmit:y,children:[Object(j.jsx)($,{id:"email",name:"email",label:"E-mail",variant:"outlined",helperText:"",type:"email",required:!0}),Object(j.jsx)($,{id:"password",name:"password",label:"Password",variant:"outlined",type:"password",required:!0,helperText:d,error:!!d}),Object(j.jsx)($,{id:"password-confirm",name:"passwordConfirm",label:"Password Confirmation",variant:"outlined",type:"password",required:!0,helperText:d,error:!!d}),Object(j.jsxs)(A.a,{children:[Object(j.jsx)(X,{type:"submit",variant:"contained",color:"primary",onSubmit:y,disabled:p,children:"Sign Up"}),Object(j.jsxs)(s.a,{children:["Already have an account? ",Object(j.jsx)(v.b,{to:"/signin",children:"Sign In"})]})]})]})]})})},ne=n(142),ae=n(143),re=n(144),ce=n(84),ie=n.n(ce),oe=n(70),se=n.n(oe),je=Object(y.a)(ne.a)((function(e){return{color:e.color}})),de=function(e){var t=e.entry;return Object(j.jsxs)(ae.a,{divider:!0,children:[Object(j.jsx)(ne.a,{children:t.category}),Object(j.jsx)(ne.a,{children:t.note}),Object(j.jsx)(ne.a,{children:t.date}),Object(j.jsxs)(je,{color:"income"===t.type?"green":"red",children:[t.amount," PLN"]}),"income"===t.type?Object(j.jsx)(re.a,{component:v.b,color:"primary",to:{pathname:"/add-entry",state:{entry:t,operation:"Update",type:"income",options:["Work","Gifts","Other"]}},children:Object(j.jsx)(se.a,{})}):Object(j.jsx)(re.a,{component:v.b,color:"primary",to:{pathname:"/add-entry",state:{entry:t,operation:"Update",type:"expense",options:["Food","Transport","Accomodation","Entertainment","Other"]}},children:Object(j.jsx)(se.a,{})}),Object(j.jsx)(re.a,{onClick:function(){D.entries.doc(t.id).delete()},children:Object(j.jsx)(ie.a,{color:"secondary"})})]})},ue=function(e){var t=e.entries;return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)(de,{entry:e},e.id)}))})};var be,le=function(){var e=Object(a.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],c=z(),i=c.currentUser,d=c.signOut,u=Object(f.g)(),b=Object(a.useState)([]),l=Object(x.a)(b,2),p=l[0],O=l[1];function g(){return(g=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,d();case 4:u.push("/signin"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){return D.entries.where("userId","==",i.uid).onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push(Object(T.a)(Object(T.a)({},e.data()),{},{id:e.id}))})),O(t)}))}),[i.uid]),Object(j.jsxs)(o.a,{children:[n&&Object(j.jsx)("p",{children:n}),Object(j.jsx)(s.a,{children:"MockDashboard"}),Object(j.jsxs)(s.a,{children:["Welcome: ",i.email]}),Object(j.jsx)(w.a,{variant:"contained",color:"primary",onClick:function(){return g.apply(this,arguments)},children:"wyloguj"}),Object(j.jsx)(ue,{entries:p}),Object(j.jsx)("div",{children:Object(j.jsx)(v.b,{to:{pathname:"/add-entry",state:{operation:"Add",type:"income",options:["Work","Gifts","Other"]}},children:"Add Income"})}),Object(j.jsx)(v.b,{to:{pathname:"/add-entry",state:{operation:"Add",type:"expense",options:["Food","Transport","Accomodation","Entertainment","Other"]}},children:"Add Expense"})]})},pe=y.a.form(be||(be=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Oe=function(){var e=z().currentUser,t=Object(f.h)(),n=Object(f.g)(),r=Object(a.useState)("Add"===t.state.operation?"0":t.state.entry.category),c=Object(x.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)("Add"===t.state.operation?"":t.state.entry.note),d=Object(x.a)(s,2),u=d[0],b=d[1],l=Object(a.useState)("Add"===t.state.operation?"":t.state.entry.amount),p=Object(x.a)(l,2),O=p[0],h=p[1],m=Object(a.useState)("Add"===t.state.operation?"":t.state.entry.date),g=Object(x.a)(m,2),y=g[0],w=g[1];return Object(j.jsxs)("section",{children:[Object(j.jsxs)("h3",{children:[t.state.operation," ",t.state.type]}),Object(j.jsxs)(pe,{onSubmit:"Add"===t.state.operation?function(a){a.preventDefault(),D.entries.add({userId:e.uid,createdAt:D.getCurrentTimestamp(),type:t.state.type,date:a.target.date.value,amount:a.target.amount.value,note:a.target.note.value,category:a.target.category.value}),n.push("/")}:function(e){e.preventDefault(),D.entries.doc(t.state.entry.id).set(Object(T.a)(Object(T.a)({},t.state.entry),{},{category:i,note:u,amount:O,date:y})),n.push("/")},children:[Object(j.jsx)("input",{type:"date",name:"date",required:!0,value:y,onChange:function(e){w(e.target.value)}}),Object(j.jsx)("input",{type:"number",placeholder:"Amount",name:"amount",required:!0,min:"0",value:O,onChange:function(e){h(e.target.value)}}),Object(j.jsx)("input",{type:"text",placeholder:"Note",name:"note",maxLength:"20",required:!0,value:u,onChange:function(e){b(e.target.value)}}),Object(j.jsxs)("select",{value:i,onChange:function(e){o(e.target.value)},name:"category",required:!0,children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"--Category--"}),t.state.options.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}))]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]}),Object(j.jsx)(v.b,{to:"/",children:"Cancel"})]})},he=n(85),me=["component"];function xe(e){var t=e.component,n=Object(he.a)(e,me),a=z().currentUser;return Object(j.jsx)(f.b,Object(T.a)(Object(T.a)({},n),{},{render:function(e){return a?Object(j.jsx)(t,Object(T.a)({},e)):Object(j.jsx)(f.a,{to:"/signin"})}}))}var ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,148)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v.a,{basename:"/jfddr3-money-control-app",children:Object(j.jsx)(f.d,{children:Object(j.jsxs)(B,{children:[Object(j.jsx)(xe,{exact:!0,path:"/",component:le}),Object(j.jsx)(xe,{exact:!0,path:"/add-entry",component:Oe}),Object(j.jsx)(f.b,{path:"/signup",component:te}),Object(j.jsx)(f.b,{path:"/signin",component:R})]})})})}),document.getElementById("root")),ge()},95:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.364c71e7.chunk.js.map