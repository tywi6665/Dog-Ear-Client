(this["webpackJsonpdog-ear-client"]=this["webpackJsonpdog-ear-client"]||[]).push([[0],{100:function(e,t){},103:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(2),n=c.n(s),r=c(22),i=c.n(r),l=c(13),o=c(3),d=c(46),j=c.n(d),h=c(47),b=c.n(h),u=c(29),O=c(30),p=c.n(O),x=(c(49),c(31));c(73);x.initializeApp({apiKey:"AIzaSyD9SrA01N_4vLdkCLrddWlCGQl_ylIszaI",authDomain:"dog-ear-recipe-extension-4bfbf.firebaseapp.com",databaseURL:"https://dog-ear-recipe-extension-4bfbf.firebaseio.com",projectId:"dog-ear-recipe-extension-4bfbf",storageBucket:"dog-ear-recipe-extension-4bfbf.appspot.com",messagingSenderId:"147277096133",appId:"1:147277096133:web:6e74a347d42254b231bcac",measurementId:"G-5GEY75XZWH"});var m=x,g=m.firestore().collection("recipes");function f(e,t,c){switch(t){case"tags":g.doc(e).update({tags:m.firestore.FieldValue.arrayUnion(c)});break;case"notes":g.doc(e).update({notes:m.firestore.FieldValue.arrayUnion(c)})}}function v(e,t,c){switch(t){case"tags":g.doc(e).update({tags:m.firestore.FieldValue.arrayRemove(c)});break;case"notes":g.doc(e).update({notes:m.firestore.FieldValue.arrayRemove(c)})}}function N(e,t){g.doc(e).update({hasMade:!t})}var C=function(e){var t=e.docID,c=e.title,n=e.imgSrc,r=e.author,i=e.rating,l=e.description,d=e.timestamp,h=e.hasMade,O=e.notes,x=e.tags,m=e.tagsList,C=e.url,k=Object(s.useState)(""),S=Object(o.a)(k,2),y=S[0],E=S[1],R=Object(s.useState)(""),w=Object(o.a)(R,2),T=w[0],A=w[1],D=Object(s.useState)(""),I=Object(o.a)(D,2),_=I[0],M=I[1],F=Object(s.useState)(!1),H=Object(o.a)(F,2),L=H[0],Y=H[1],B=Object(s.useState)(!1),K=Object(o.a)(B,2),U=K[0],G=K[1],P=Object(s.useState)(i),V=Object(o.a)(P,2),W=V[0],Z=V[1],z=Object(s.useState)(1),X=Object(o.a)(z,2),J=X[0],Q=X[1],q=function(){return[G(!1),Q(1)]},$=function(e,c){switch(e.preventDefault(),Y(!1),A(""),c){case"tags":var a=y;a.length&&(1===a.length?f(t,"tags",a):(a=a.split(",")).forEach((function(e){f(t,"tags",e)})),E(""));break;case"notes":if(_.length)_.split("\n\n").forEach((function(e){f(t,"notes",e)})),M("")}},ee=function(e,c){e.preventDefault();var a=e.target.closest("li").textContent.slice(0,-1);switch(c){case"tags":v(t,"tags",a);break;case"notes":v(t,"notes",a)}},te=function(e){Z(e),function(e,t){g.doc(e).update({rating:t})}(t,e)};return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card-top",children:[Object(a.jsx)("img",{src:n||"./graphics/default_image.jpg",onClick:function(){return G((function(e){return!e}))}}),Object(a.jsx)(u.a,{trigger:Object(a.jsx)("span",{className:"delete"}),modal:!0,children:function(e){return Object(a.jsxs)("div",{className:"delete-modal",children:[Object(a.jsx)("button",{className:"close",onClick:e,children:"X"}),Object(a.jsx)("div",{className:"header",children:"Are You Sure that You Want to Delete this Recipe???"}),Object(a.jsx)("button",{className:"delete",onClick:function(){return e=t,void g.doc(e).delete();var e},children:"Delete this Recipe Entry"})]})}})]}),Object(a.jsxs)("div",{className:"card-bottom",children:[Object(a.jsxs)("div",{className:"title-wrapper",children:[Object(a.jsx)("h4",{onClick:function(){return G((function(e){return!e}))},children:c}),Object(a.jsxs)("div",{className:"rating-hasMade",children:[Object(a.jsx)("div",{className:"rating",children:Object(a.jsx)(p.a,{rating:W,starRatedColor:"#f04a26",starEmptyColor:"#808080",changeRating:te,numberOfStars:5,starDimension:"22px",starSpacing:"2px",name:"rating"})}),Object(a.jsxs)("div",{className:"has-made",children:[Object(a.jsx)("input",{type:"checkbox",className:"check",name:"check",value:h,onChange:function(){return console.log("click")},checked:h}),Object(a.jsx)("label",{htmlFor:"check",onClick:function(){return N(t,h)},children:"Cooked"})]})]})]}),Object(a.jsxs)("div",{className:"link-wrapper",children:[Object(a.jsx)("div",{className:"link",children:Object(a.jsx)("a",{href:C,target:"_blank",children:"Recipe Link"})}),Object(a.jsxs)("span",{className:"timestamp",children:["Saved On: ",j()(d).format("MMMM Do YYYY")]})]})]}),Object(a.jsx)(u.a,{open:U,closeOnDocumentClick:!0,onClose:q,children:Object(a.jsx)("div",{className:"modal recipe-modal",children:Object(a.jsx)("div",{className:"recipe-modal-central",children:Object(a.jsxs)("div",{className:"recipe-modal-inner",children:[Object(a.jsx)("button",{className:"close",onClick:q,children:"X"}),Object(a.jsx)("div",{className:"modal-img",children:Object(a.jsx)("div",{className:"modal-img-back",children:Object(a.jsx)("img",{src:n||"./graphics/default_image.jpg"})})}),Object(a.jsx)("div",{className:"modal-info",children:Object(a.jsxs)("div",{className:"modal-info-inner",children:[Object(a.jsx)("div",{className:"modal-info-inner-tabs",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{className:1===J?"active":"",onClick:function(){return Q(1)},children:Object(a.jsx)("h4",{children:"INFO"})}),Object(a.jsx)("li",{className:2===J?"active":"",onClick:function(){return Q(2)},children:Object(a.jsx)("h4",{children:"TAGS/NOTES"})}),Object(a.jsx)("li",{children:Object(a.jsx)("h4",{children:Object(a.jsx)("a",{href:C,target:"_blank",children:"GO TO RECIPE"})})})]})}),Object(a.jsx)("div",{className:"modal-info-text",children:1===J?[Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("h2",{children:c})}),Object(a.jsx)("div",{className:"title",children:Object(a.jsxs)("p",{children:["Author: ",Object(a.jsx)("strong",{children:Object(a.jsx)("em",{children:r.length?r:"No Assigned Author"})})]})}),Object(a.jsxs)("div",{className:"rating-hasMade",children:[Object(a.jsxs)("div",{className:"rating",children:[Object(a.jsx)(p.a,{rating:W,starRatedColor:"#f04a26",starEmptyColor:"#808080",changeRating:te,numberOfStars:5,starDimension:"25px",starSpacing:"3px",name:"rating"}),Object(a.jsx)("button",{onClick:function(){return te(0)},children:"Reset"})]}),Object(a.jsxs)("div",{className:"has-made",children:[Object(a.jsx)("input",{type:"checkbox",className:"check",name:"check",value:h,onChange:function(){return console.log("click")},checked:h}),Object(a.jsx)("label",{htmlFor:"check",onClick:function(){return N(t,h)},children:"Cooked"})]})]}),Object(a.jsx)("div",{className:l?"description":"description description-em",children:Object(a.jsx)(b.a,{lines:5,more:"Show more",less:"Show less",anchorClass:"description-anchor",expanded:!1,width:0,children:l||"There is no description for this recipe."})})]})]:[Object(a.jsxs)("div",{className:"tags-wrapper",children:[Object(a.jsxs)("div",{className:"tags-header",children:[Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"Tagged As:"})}),L?Object(a.jsxs)("form",{onSubmit:function(e){return $(e,"tags")},children:[Object(a.jsxs)("div",{className:"inner-form",children:[Object(a.jsx)("textarea",{name:"tags",placeholder:"Enter ',' delimited tags",rows:"2",value:y,onChange:function(e){return E(e.target.value)}}),Object(a.jsxs)("select",{value:T,onChange:function(e){return t=e.currentTarget.value,A(t),void(0===y.length?E(t):E(y+","+t));var t},children:[Object(a.jsx)("option",{value:"",disabled:!0,children:"Quick Add Tags"}),m.map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},e+t)}))]})]}),Object(a.jsx)("button",{type:"submit",children:y.length>0?"Submit":"Close"})]}):Object(a.jsx)("p",{className:"add",onClick:function(){return Y(!0)},children:"+"})]}),x.length>0?Object(a.jsx)("ul",{className:"tags",children:x.map((function(e,c){return Object(a.jsxs)("li",{children:[e,Object(a.jsx)("div",{className:"delete-tag",onClick:function(e){return ee(e,"tags")},children:Object(a.jsx)("span",{children:"x"})})]},t+c)}))}):Object(a.jsx)("p",{children:Object(a.jsx)("em",{children:"This recipe has not been tagged yet"})}),Object(a.jsxs)("div",{className:"notes-wrapper",children:[Object(a.jsx)("div",{className:"notes",children:O.length>0?Object(a.jsx)("ol",{children:O.map((function(e){return Object(a.jsxs)("li",{children:[e,Object(a.jsx)("div",{className:"delete-note",onClick:function(e){return ee(e,"notes")},children:Object(a.jsx)("span",{children:"x"})})]},e)}))}):Object(a.jsx)("p",{children:Object(a.jsx)("em",{children:"There are no notes for this recipe yet."})})}),Object(a.jsx)("div",{className:"add-notes",children:Object(a.jsxs)("form",{onSubmit:function(e){return $(e,"notes")},children:[Object(a.jsx)("textarea",{name:"notes",placeholder:"Add additional notes here.",rows:"3",value:_,onChange:function(e){return M(e.target.value)}}),Object(a.jsx)("button",{type:"submit",children:"Add Note"})]})})]})]})]})]})})]})})})})]})},k=c(50),S=function(e){var t=e.childRef,c=e.text,n=e.type,r=e.placeholder,i=e.children,d=e.parent,j=Object(k.a)(e,["childRef","text","type","placeholder","children","parent"]),h=Object(s.useState)(!1),b=Object(o.a)(h,2),u=b[0],O=b[1];Object(s.useEffect)((function(){t&&t.current&&!0===u&&t.current.focus()}),[u,t]);return Object(a.jsx)("section",Object(l.a)(Object(l.a)({},j),{},{children:u?Object(a.jsx)("div",{onBlur:function(){return O(!1)},onKeyDown:function(e){return function(e,t){var c=e.key;console.log(c);var a=["Escape","Tab"],s=[].concat(a,["Enter"]);("textarea"===t&&a.indexOf(c)>-1||"textarea"!==t&&s.indexOf(c)>-1)&&O(!1)}(e,n)},children:i}):Object(a.jsx)("div",{onClick:function(){return O(!0)},children:"options_page"===d?Object(a.jsx)("p",{className:"add",children:"+"}):Object(a.jsx)("span",{children:c||r})})}))},y=function(e){var t=e.recipe,c=e.url,n=e.setRecipe,r=e.setIsOverlay,i=e.setUrl,l=Object(s.useState)(t.title),d=Object(o.a)(l,2),j=d[0],h=d[1],b=Object(s.useState)(t.imgSrc),u=Object(o.a)(b,2),O=u[0],p=u[1],x=Object(s.useState)(t.description),g=Object(o.a)(x,2),f=g[0],v=g[1],N=Object(s.useState)(t.author),C=Object(o.a)(N,2),k=C[0],y=C[1],E=Object(s.useState)(0),R=Object(o.a)(E,2),w=R[0],T=(R[1],Object(s.useState)(t.tags)),A=Object(o.a)(T,2),D=A[0],I=A[1],_=Object(s.useState)(""),M=Object(o.a)(_,2),F=M[0],H=M[1],L=Object(s.useState)(!1),Y=Object(o.a)(L,2),B=Y[0],K=Y[1],U=Object(s.useRef)();return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-top",children:O?Object(a.jsx)("img",{src:O}):Object(a.jsx)(S,{text:O,placeholder:'Right click on image, and click "copy image address". Paste address here.',childRef:U,type:"textarea",children:Object(a.jsx)("textarea",{ref:U,name:"image source",placeholder:'Right click on image, and click "copy image address". Paste address here.',rows:"5",value:O,onChange:function(e){return p(e.target.value)}})})}),Object(a.jsxs)("div",{className:"card-bottom",children:[Object(a.jsxs)("div",{className:"title-wrapper",children:[Object(a.jsx)("h3",{children:"Title:"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"has-made",children:"Has Made:"}),Object(a.jsx)("input",{type:"checkbox",id:"has-made",name:"has-made",value:B,onClick:function(){return K(!B)}})]})]}),Object(a.jsx)(S,{text:j,placeholder:"Click Here to Add Recipe Title",childRef:U,type:"textarea",children:Object(a.jsx)("textarea",{ref:U,name:"title",placeholder:"Click Here to Add Recipe Title",rows:"5",value:j,onChange:function(e){return h(e.target.value)}})}),Object(a.jsx)("h3",{children:"Author:"}),Object(a.jsx)(S,{text:k,placeholder:"Click Here to Add Recipe Author",childRef:U,type:"textarea",children:Object(a.jsx)("textarea",{ref:U,name:"author",placeholder:"Click Here to Add Recipe Author",rows:"5",value:k,onChange:function(e){return y(e.target.value)}})}),Object(a.jsxs)("div",{className:"description",children:[Object(a.jsx)("h3",{children:"Description:"}),Object(a.jsx)(S,{text:f,placeholder:"Click Here to Add Recipe Description",childRef:U,type:"textarea",children:Object(a.jsx)("textarea",{ref:U,name:"description",placeholder:"Click Here to Add Recipe Description",rows:"5",value:f,onChange:function(e){return v(e.target.value)}})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Tagged As:"}),Object(a.jsx)(S,{text:D.join(","),placeholder:"Click Here to Add Recipe Tags",childRef:U,type:"textarea",children:Object(a.jsx)("textarea",{ref:U,name:"tags",placeholder:"Enter ',' separated tags here",rows:"5",value:D.join(","),onChange:function(e){return function(e){var t=e.split(",");I(t)}(e.target.value)}})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Additional Notes:"}),Object(a.jsx)(S,{text:F,placeholder:"Click Here to Add Additional Notes",childRef:U,type:"textarea",children:Object(a.jsx)("textarea",{ref:U,name:"notes",placeholder:"Add additional notes here.",rows:"10",value:F,onChange:function(e){return H(e.target.value)}})})]}),Object(a.jsx)("div",{className:"link",children:Object(a.jsx)("button",{onClick:function(){var e;e=F.length>0?F.split("\n\n"):[],m.firestore().collection("recipes").add({title:j,imgSrc:O,author:k,rating:w,description:f,timestamp:Date.now(),tags:D,hasMade:B,notes:e,url:c}),n({}),r(!1),i("")},children:"Create Entry"})})]})]})},E=(c(74),c(48)),R=c.n(E);var w=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)([]),i=Object(o.a)(r,2),d=i[0],j=i[1],h=Object(s.useState)([]),b=Object(o.a)(h,2),u=b[0],O=b[1],p=Object(s.useState)("TIME_DESC"),x=Object(o.a)(p,2),g=x[0],f=x[1],v=Object(s.useState)(""),N=Object(o.a)(v,2),k=N[0],S=N[1],E=Object(s.useState)(!0),w=Object(o.a)(E,2),T=w[0],A=(w[1],Object(s.useState)("")),D=Object(o.a)(A,2),I=D[0],_=D[1],M=Object(s.useState)(!1),F=Object(o.a)(M,2),H=F[0],L=F[1],Y=Object(s.useState)({}),B=Object(o.a)(Y,2),K=B[0],U=B[1];Object(s.useEffect)((function(){var e,t=m.firestore().collection("recipes");return e=t.orderBy(G[g].column,G[g].direction).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(l.a)({id:e.id},e.data())}));n(t),j(t),S("")})),function(){return e()}}),[g]),Object(s.useEffect)((function(){var e=[];c.forEach((function(t){t.tags.forEach((function(t){var c=t.toLowerCase().trim();e.includes(c)||e.push(c)}))})),O(e.sort())}),[c]),Object(s.useEffect)((function(){var e=k&&new RegExp("".concat(k),"gi"),t=c.filter((function(t){return!e||e.test(t.title)+e.test(t.author)+e.test(t.tags)}));j(t)}),[k]);var G={TIME_ASC:{column:"timestamp",direction:"asc"},TIME_DESC:{column:"timestamp",direction:"desc"},TITLE_ASC:{column:"title",direction:"asc"},TITLE_DESC:{column:"title",direction:"desc"},COOKED:{column:"hasMade",direction:"desc"},NOT_COOKED:{column:"hasMade",direction:"asc"}},P=function(e){e.preventDefault(),function(){L(!0);var e=R()("https://still-hamlet-76887.herokuapp.com/?EIO=3&transport=polling");e.on("connect",(function(){e.emit("from_client",I)})),e.on("from_server",(function(e){console.log("Connection to server established.",e),U(null===e?{title:"",imgSrc:"",author:"",description:"",tags:[],notes:[]}:e)}))}()};return Object(a.jsxs)("div",{id:"client_page",children:[Object(a.jsx)("div",{className:"overlay",style:H&&I.length?{display:"block"}:{display:"none"},children:T&&I&&H?Object(a.jsx)("div",{className:"entry_popup",children:Object.keys(K).length?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("header",{className:"popup-header",children:[Object(a.jsx)("div",{className:"back",children:Object(a.jsx)("button",{onClick:function(){return L(!1),U({}),void _("")}})}),Object(a.jsx)("h3",{children:Object(a.jsx)("em",{children:"Example Recipe Entry:"})})]}),Object(a.jsx)(y,{recipe:K,url:I,setRecipe:U,setIsOverlay:L,setUrl:_},K.id)]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"dog-loader",children:[Object(a.jsx)("div",{className:"dog-head",children:Object(a.jsx)("img",{src:"http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png"})}),Object(a.jsx)("div",{className:"dog-body"})]}),Object(a.jsx)("p",{className:"dog-loader-p",children:Object(a.jsx)("em",{children:"Scraping data..."})})]})}):Object(a.jsx)(a.Fragment,{})}),Object(a.jsxs)("header",{className:"page-header",children:[Object(a.jsxs)("div",{className:"titles",children:[Object(a.jsx)("h1",{children:"Dog-Ear"}),Object(a.jsx)("h2",{children:"Recipe Repository"})]}),Object(a.jsx)("div",{className:"dog-image",children:Object(a.jsx)("img",{src:"./graphics/dog.png",alt:"Woof woof"})})]}),Object(a.jsxs)("div",{className:"interaction-wrapper",children:[Object(a.jsxs)("div",{className:"search-sort",children:[Object(a.jsx)("div",{className:"dropdown",children:Object(a.jsxs)("select",{value:g,onChange:function(e){return f(e.currentTarget.value)},children:[Object(a.jsx)("option",{value:"TIME_DESC",children:"Newest"}),Object(a.jsx)("option",{value:"TIME_ASC",children:"Oldest"}),Object(a.jsx)("option",{value:"TITLE_ASC",children:"Title A-Z"}),Object(a.jsx)("option",{value:"TITLE_DESC",children:"Title Z-A"}),Object(a.jsx)("option",{value:"COOKED",children:"Has Been Cooked"}),Object(a.jsx)("option",{value:"NOT_COOKED",children:"Has NOT Been Cooked"})]})}),Object(a.jsx)("div",{className:"search-wrapper",children:Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("input",{type:"search",placeholder:"Search",value:k,onChange:function(e){return S(e.target.value)}}),Object(a.jsx)("span",{className:"cancel",onClick:function(){return S("")},children:"x"})]})})]}),Object(a.jsx)("div",{className:"scrape-wrapper",children:Object(a.jsx)("div",{className:"scrape",children:Object(a.jsxs)("form",{onSubmit:function(e){return P(e)},children:[Object(a.jsx)("label",{htmlFor:"#scrape-input",children:"Create New Recipe Entry:"}),Object(a.jsx)("input",{type:"text",className:"scrape-text",id:"scrape-input",placeholder:"Paste URL Here",value:I,onChange:function(e){return _(e.target.value)}}),Object(a.jsx)("input",{className:"scrape-submit",type:"submit",value:"Submit",disabled:!I.length})]})})})]}),Object(a.jsx)("div",{className:"card-container",children:d.map((function(e){return Object(a.jsx)(C,{docID:e.id,title:e.title,imgSrc:e.imgSrc,author:e.author,rating:e.rating,description:e.description,timestamp:e.timestamp,hasMade:e.hasMade,tags:e.tags,tagsList:u,notes:e.notes,url:e.url},e.id)}))})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))},74:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.7a1d9a65.chunk.js.map