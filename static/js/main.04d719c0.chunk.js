(this.webpackJsonp21november=this.webpackJsonp21november||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),o=n(11),i=n.n(o),s=(n(35),n.p,n(36),n(30)),u=n(4),d=n(6),p=n(7),l=p.a.div(r||(r=Object(d.a)(["\n  text-align: center;\n  width: 30%;\n  padding: 15px;\n  border: 3px solid red;\n  margin: 20px 0;\n  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);\n  color: white;\n  transition: all .5s ease-in-out;\n  cursor: pointer;\n  &:hover{\n    transform: scale(1.050);\n    border-radius: 10px;\n    background: linear-gradient(to right, #00b09b, #96c93d);\n\n    button{\n    &:hover{\n      border-radius: 5px;\n      transform: scale(0.90);\n    }\n  }\n  }\n\n  button{\n    color: red;\n    background: black;\n    border: 0;\n    padding: 10px 15px;\n    margin: 10px auto ;\n    transition: all .5s ease-in-out;\n    cursor: pointer;\n    margin: auto 10px;\n    \n  };\n\n"]))),b=n(3),f=n.n(b),O=n(1);var h,j,g=function(e){var t=e.id,n=e.name,r=e.price,c=e.description,a=e.setUpdateData;return Object(O.jsxs)(l,{children:["name: ",n," ",Object(O.jsx)("br",{}),"price: ",r," ",Object(O.jsx)("br",{}),"description: ",c," ",Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){return function(e){f.a.delete("https://ibs-school.herokuapp.com/api/v1/for-developer/product/"+e).then((function(){console.log("deleted")})).catch((function(){console.log("error")}))}(t)},children:"delete"}),Object(O.jsx)("button",{onClick:function(){return a({edit:!0,data:{id:t,name:n,price:r,description:c}})},children:"update"})]})},v=function(){return function(e){e({type:"GET_PRODUCT_LOADING"}),f.a.get("https://ibs-school.herokuapp.com/api/v1/for-developer/product").then((function(t){e({type:"GET_PRODUCT_SUCCESS",payload:t.data})})).catch((function(){e({type:"GET_PRODUCT_ERROR"})}))}},D=p.a.div(h||(h=Object(d.a)(["\n  width: 1100px;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n"]))),x=p.a.form(j||(j=Object(d.a)(["\n  width: 400px;\n  margin: auto;\n  padding: 15px;\n  border: 1px solid lightgrey;\n  input,\n  textarea,\n  button {\n    padding: 5px;\n    width: 100%;\n    margin: 5px 0;\n  }\n"])));var m=function(){var e=Object(c.useState)({edit:!1,data:{}}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(u.b)(),o=Object(u.c)((function(e){return e.getProduct})),i=Object(u.c)((function(e){return e.addProduct})),d=Object(u.c)((function(e){return e.updateProduct}));return Object(c.useEffect)((function(){a(v())}),[]),Object(c.useEffect)((function(){var e=setInterval((function(){console.log("This will run every second!"),a(v())}),1e3);return function(){return clearInterval(e)}}),[]),Object(c.useEffect)((function(){(i.success||d.success||d.error)&&a(v())}),[i.success,d.success,d.error]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(x,{onSubmit:n.edit?function(e){e.preventDefault();var t=e.target,c=t.name.value,o=t.price.value,i=t.description.value;if(""!==c&&""!==o&&""!==i){var s={id:n.data.id,data:{name:c,price:o,description:i}};a(function(e){return function(t){t({type:"UPDATE_PRODUCT_LOADING"}),f.a.put("https://ibs-school.herokuapp.com/api/v1/for-developer/product/${data.id}",e.data).then((function(){t({type:"UPDATE_PRODUCT_SUCCESS"})})).catch((function(){t({type:"UPDATE_PRODUCT_ERROR"})}))}}(s)),e.target.reset(),r({edit:!1,data:{}})}}:function(e){e.preventDefault();var t=e.target,n=t.name.value,r=t.price.value,c=t.description.value;""!==n&&""!==r&&""!==c&&(a(function(e){return function(t){t({type:"ADD_PRODUCT_LOADING"}),f.a.post("https://ibs-school.herokuapp.com/api/v1/for-developer/product",e).then((function(){t({type:"ADD_PRODUCT_SUCCESS"})})).catch((function(){t({type:"ADD_PRODUCT_ERROR"})}))}}({name:n,price:r,description:c})),e.target.reset())},children:[Object(O.jsx)("input",{type:"text",name:"name",placeholder:"name",defaultValue:n.edit?n.data.name:""}),Object(O.jsx)("input",{type:"number",name:"price",placeholder:"price",defaultValue:n.edit?n.data.price:""}),Object(O.jsx)("textarea",{name:"description",placeholder:"description",rows:"5",defaultValue:n.edit?n.data.description:""}),Object(O.jsx)("button",{children:n.edit?"Update":"Submit"})]}),Object(O.jsx)(D,{children:o.success.map((function(e,t){var n=e.id,c=e.name,a=e.price,o=e.description;return Object(O.jsx)(g,{id:n,name:c,price:a,description:o,setUpdateData:r},n)}))})]})};var R=function(){return Object(O.jsx)("div",{children:Object(O.jsx)(m,{})})};var _=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(R,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},T=n(8),U=n(28),P=n.n(U),E=n(29),S={loading:!1,error:!1,success:[]},y={loading:!1,error:!1,success:!1},A={loading:!1,error:!1,success:!1},w=Object(T.b)({getProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PRODUCT_LOADING":return{loading:!0,error:!1,success:e.success};case"GET_PRODUCT_SUCCESS":return{loading:!1,error:!1,success:t.payload};case"GET_PRODUCT_ERROR":return{loading:!1,error:!0,success:[]};default:return e}},addProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT_LOADING":return{loading:!0,error:!1,success:!1};case"ADD_PRODUCT_SUCCESS":return{loading:!1,error:!1,success:!0};case"ADD_PRODUCT_ERROR":return{loading:!1,error:!0,success:!1};default:return e}},updateProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCT_LOADING":return{loading:!0,error:!1,success:!1};case"UPDATE_PRODUCT_SUCCESS":return{loading:!1,error:!1,success:!0};case"UPDATE_PRODUCT_ERROR":return{loading:!1,error:!0,success:!1};default:return e}}}),k=Object(T.c)(w,Object(T.a)(E.a,P.a));i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(u.a,{store:k,children:Object(O.jsx)(_,{})})}),document.getElementById("root")),C()}},[[61,1,2]]]);
//# sourceMappingURL=main.04d719c0.chunk.js.map