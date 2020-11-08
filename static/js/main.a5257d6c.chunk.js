(this["webpackJsonpdog-ear-client"]=this["webpackJsonpdog-ear-client"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(2),a=c.n(n),i=c(12),r=c.n(i),o=c(24),l=c(6),d=c(16),j=c.n(d),h=c(21),u=c.n(h),b=c(22),O=c.n(b),m=c(17),p=(c(23),c(18));c(45);p.initializeApp({apiKey:"AIzaSyD9SrA01N_4vLdkCLrddWlCGQl_ylIszaI",authDomain:"dog-ear-recipe-extension-4bfbf.firebaseapp.com",databaseURL:"https://dog-ear-recipe-extension-4bfbf.firebaseio.com",projectId:"dog-ear-recipe-extension-4bfbf",storageBucket:"dog-ear-recipe-extension-4bfbf.appspot.com",messagingSenderId:"147277096133",appId:"1:147277096133:web:6e74a347d42254b231bcac",measurementId:"G-5GEY75XZWH"});var x=p,g=x.firestore().collection("recipes");function f(e,t,c){switch(t){case"tags":g.doc(e).update({tags:x.firestore.FieldValue.arrayUnion(c)});break;case"notes":g.doc(e).update({notes:x.firestore.FieldValue.arrayUnion(c)})}}function v(e,t,c){switch(t){case"tags":g.doc(e).update({tags:x.firestore.FieldValue.arrayRemove(c)});break;case"notes":g.doc(e).update({notes:x.firestore.FieldValue.arrayRemove(c)})}}var N=function(e){var t=e.docID,c=e.title,a=e.imgSrc,i=e.author,r=e.description,o=e.timestamp,d=e.hasMade,j=e.notes,h=e.tags,b=e.url,p=Object(n.useState)(""),x=Object(l.a)(p,2),N=x[0],C=x[1],S=Object(n.useState)(""),k=Object(l.a)(S,2),E=k[0],T=k[1],w=Object(n.useState)(!1),D=Object(l.a)(w,2),I=D[0],y=D[1],M=function(e,c){switch(e.preventDefault(),y(!1),c){case"tags":var s=N;s.length&&(1===s.length?f(t,"tags",s):(s=s.split(",")).forEach((function(e){f(t,"tags",e)})),C(""));break;case"notes":if(E.length)E.split("\n\n").forEach((function(e){f(t,"notes",e)})),T("")}},A=function(e,c){e.preventDefault();var s=e.target.closest("li").textContent.slice(0,-1);switch(c){case"tags":v(t,"tags",s);break;case"notes":v(t,"notes",s)}};return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsxs)("div",{className:"card-top",children:[Object(s.jsx)("img",{src:a||"./graphics/default_image.jpg"}),Object(s.jsx)(m.a,{trigger:Object(s.jsx)("span",{className:"delete"}),modal:!0,children:function(e){return Object(s.jsxs)("div",{className:"modal",children:[Object(s.jsx)("button",{className:"close",onClick:e,children:"X"}),Object(s.jsx)("div",{className:"header",children:"Are You Sure that You Want to Delete this Recipe???"}),Object(s.jsx)("button",{className:"delete",onClick:function(){return e=t,void g.doc(e).delete();var e},children:"Delete this Recipe Entry"})]})}})]}),Object(s.jsxs)("div",{className:"card-bottom",children:[Object(s.jsxs)("div",{className:"title-wrapper",children:[Object(s.jsx)("h3",{children:c}),Object(s.jsxs)("div",{className:"checkbox-wrapper",children:[Object(s.jsx)("input",{type:"checkbox",className:"has-made",name:"has-made",value:d,onChange:function(){return console.log("click")},checked:d}),Object(s.jsx)("label",{htmlFor:"has-made",onClick:function(){return e=t,c=d,void g.doc(e).update({hasMade:!c});var e,c},children:"Cooked"})]})]}),Object(s.jsxs)("p",{children:["Author: ",Object(s.jsx)("strong",{children:Object(s.jsx)("em",{children:i.length?i:"No Assigned Author"})})]}),Object(s.jsx)("div",{className:"description",children:Object(s.jsx)(O.a,{lines:5,more:"Show more",less:"Show less",anchorClass:"description-anchor",expanded:!1,width:0,children:r})}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"tags-header",children:[Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Tagged As:"})}),I?Object(s.jsxs)("form",{onSubmit:function(e){return M(e,"tags")},children:[Object(s.jsx)("textarea",{name:"tags",placeholder:"Enter ',' separated tags",rows:"2",value:N,onChange:function(e){return C(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:N.length>0?"Submit":"Close"})]}):Object(s.jsx)("p",{className:"add",onClick:function(){return y(!0)},children:"+"})]}),h.length>0?Object(s.jsx)("ul",{className:"tags",children:h.map((function(e,c){return Object(s.jsxs)("li",{children:[e,Object(s.jsx)("div",{className:"delete-tag",onClick:function(e){return A(e,"tags")},children:Object(s.jsx)("span",{children:"x"})})]},t+c)}))}):Object(s.jsx)("p",{children:"This recipe has not been tagged yet"})]}),Object(s.jsx)("div",{children:Object(s.jsx)(m.a,{trigger:j.length>0?Object(s.jsx)("div",{className:"see-notes note",children:"See Notes"}):Object(s.jsx)("div",{className:"make-notes note",children:"Make a Note"}),modal:!0,children:function(e){return Object(s.jsxs)("div",{className:"modal notes-modal",children:[Object(s.jsx)("button",{className:"close",onClick:e,children:"X"}),Object(s.jsxs)("div",{className:"header",children:[c," Notes"]}),Object(s.jsx)("div",{className:"content",children:j.length>0?Object(s.jsx)("ol",{children:j.map((function(e){return Object(s.jsxs)("li",{children:[e,Object(s.jsx)("div",{className:"delete-note",onClick:function(e){return A(e,"notes")},children:Object(s.jsx)("span",{children:"x"})})]},e)}))}):Object(s.jsx)("p",{children:"There are no notes for this recipe yet."})}),Object(s.jsx)("div",{className:"actions",children:Object(s.jsxs)("form",{onSubmit:function(e){return M(e,"notes")},children:[Object(s.jsx)("textarea",{name:"notes",placeholder:"Add additional notes here.",rows:"5",value:E,onChange:function(e){return T(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Add Note"})]})})]})}})}),Object(s.jsx)("div",{className:"link",children:Object(s.jsx)("a",{href:b,target:"_blank",children:"Recipe Link"})}),Object(s.jsxs)("span",{className:"timestamp",children:["Saved On: ",u()(o).format("MMMM Do YYYY")]})]})]})};c(46);var C=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(l.a)(i,2),h=r[0],u=r[1],b=Object(n.useState)("TIME_DESC"),O=Object(l.a)(b,2),m=O[0],p=O[1],g=Object(n.useState)(""),f=Object(l.a)(g,2),v=f[0],C=f[1];Object(n.useEffect)((function(){var e,t=x.firestore().collection("recipes");return e=t.orderBy(S[m].column,S[m].direction).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())}));a(t),u(t),C("")})),function(){return e()}}),[m]),Object(n.useEffect)((function(){var e=v&&new RegExp("".concat(v),"gi"),t=c.filter((function(t){return!e||e.test(t.title)+e.test(t.author)+e.test(t.tags)}));u(t)}),[v]);var S={TIME_ASC:{column:"timestamp",direction:"asc"},TIME_DESC:{column:"timestamp",direction:"desc"},TITLE_ASC:{column:"title",direction:"asc"},TITLE_DESC:{column:"title",direction:"desc"},COOKED:{column:"hasMade",direction:"desc"},NOT_COOKED:{column:"hasMade",direction:"asc"}};return Object(s.jsxs)("div",{id:"options_page",children:[Object(s.jsxs)("header",{children:[Object(s.jsxs)("div",{className:"titles",children:[Object(s.jsx)("h1",{children:"Dog-Ear"}),Object(s.jsx)("h2",{children:"Recipe Repository"})]}),Object(s.jsx)("div",{className:"dog-image",children:Object(s.jsx)("img",{src:"./graphics/dog.png",alt:"Woof woof"})})]}),Object(s.jsx)("div",{className:"dropdown",children:Object(s.jsxs)("select",{value:m,onChange:function(e){return p(e.currentTarget.value)},children:[Object(s.jsx)("option",{value:"TIME_DESC",children:"Newest"}),Object(s.jsx)("option",{value:"TIME_ASC",children:"Oldest"}),Object(s.jsx)("option",{value:"TITLE_ASC",children:"Title A-Z"}),Object(s.jsx)("option",{value:"TITLE_DESC",children:"Title Z-A"}),Object(s.jsx)("option",{value:"COOKED",children:"Has Been Cooked"}),Object(s.jsx)("option",{value:"NOT_COOKED",children:"Has NOT Been Cooked"})]})}),Object(s.jsx)("div",{className:"search-wrapper",children:Object(s.jsx)("div",{className:"search",children:Object(s.jsx)("input",{type:"text",placeholder:"Search",value:v,onChange:function(e){return C(e.target.value)}})})}),Object(s.jsx)("div",{className:"card-container",children:Object(s.jsx)(d.ResponsiveMasonry,{columnsCountBreakPoints:{300:1,500:2,750:3,900:4},children:Object(s.jsx)(j.a,{gutter:"1em",children:h.map((function(e){return Object(s.jsx)(N,{docID:e.id,title:e.title,imgSrc:e.imgSrc,author:e.author,description:e.description,timestamp:e.timestamp,hasMade:e.hasMade,tags:e.tags,notes:e.notes,url:e.url},e.id)}))})})})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.a5257d6c.chunk.js.map