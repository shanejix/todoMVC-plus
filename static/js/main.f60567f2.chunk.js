(this["webpackJsonphooks-todoapp"]=this["webpackJsonphooks-todoapp"]||[]).push([[0],{23:function(e,t,n){e.exports=n(35)},35:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),l=n.n(o),r=n(8),u=n(5),i=(n(28),function(){return c.a.createElement("footer",{className:"info"},c.a.createElement("p",null,"Double-click to edit a todo"),c.a.createElement("p",null,"Created by ",c.a.createElement("a",{href:"http://github.com/shanejixx"},"shane")),c.a.createElement("p",null,"Part of ",c.a.createElement("a",{href:"http://todomvc.com"},"TodoMVC")))}),s=n(6),m=n(17),d=n.n(m);function f(e,t){return Object(a.useCallback)((function(t){"Enter"===t.key&&(t.preventDefault(),e(t))}),t)}var b=n(10),p=n(21),E=n(20);function h(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return"".concat(e()).concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e(),"-").concat(e()).concat(e()).concat(e())}var g=function(e){return{done:!1,id:h(),label:(e||"").trim()}},v={deleteTodo:function(e,t){return e.filter((function(e){return e.id!==t}))},addTodo:function(e,t){return[g(t)].concat(Object(p.a)(e))},setDone:function(e,t,n){return e.map((function(e){return e.id===t?Object(b.a)({},e,{done:n}):e}))},setLabel:function(e,t,n){return e.map((function(e){return e.id===t?Object(b.a)({},e,{label:n}):e}))},toggleDone:function(e,t){return e.map((function(e){return e.id===t?Object(b.a)({},e,{done:!e.done}):e}))}},O=Object(E.a)(JSON.parse(localStorage.getItem("todos")||"[]"),v,(function(e){return localStorage.setItem("todos",JSON.stringify(e))})),j=n(22);function k(e){var t=e.todo,n=O((function(){return null})),o=Object(s.a)(n,2)[1],l=o.deleteTodo,r=o.setLabel,u=o.toggleDone,i=Object(a.useState)(!1),m=Object(s.a)(i,2),d=m[0],b=m[1],p=Object(a.useCallback)((function(){return l(t.id)}),[t.id]),E=Object(a.useCallback)((function(){return u(t.id)}),[t.id]),h=Object(a.useCallback)((function(e){return r(t.id,e.target.value)}),[t.id]),g=function(e,t){var n,a=[];return function(c){for(var o=arguments.length,l=new Array(o>1?o-1:0),r=1;r<o;r++)l[r-1]=arguments[r];a.push((new Date).getTime()),clearTimeout(n),n=setTimeout((function(){a.length>1&&a[a.length-1]-a[a.length-2]<250&&t?t.apply(void 0,[c].concat(l)):e&&e.apply(void 0,[c].concat(l)),a=[]}),250)}}(null,(function(){return b(!0)})),v=Object(a.useCallback)((function(){b(!1),r(t.id,t.label.trim())}),[t]),k=f(v,[t]),C=Object(a.useRef)();return Object(j.a)(C,v),c.a.createElement("li",{onClick:g,className:"".concat(d?"editing":""," ").concat(t.done?"completed":"")},c.a.createElement("div",{className:"view"},c.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.done,onChange:E,autoFocus:!0}),c.a.createElement("label",null,t.label),c.a.createElement("button",{className:"destroy",onClick:p})),d&&c.a.createElement("input",{ref:C,className:"edit",value:t.label,onChange:h,onKeyPress:k}))}var C=function(){var e=d()(),t=O(),n=Object(s.a)(t,2),o=n[0],l=n[1],u=l.addTodo,i=l.deleteTodo,m=l.setDone,b=Object(a.useMemo)((function(){return o.reduce((function(e,t){return e+(t.done?0:1)}),0)}),[o]),p=Object(a.useMemo)((function(){return e.match.params.filter?o.filter((function(t){return"active"===e.match.params.filter?!t.done:t.done})):o}),[o,e.match.params.filter]),E=Object(a.useMemo)((function(){return o.some((function(e){return e.done}))}),[o]),h=Object(a.useMemo)((function(){return p.every((function(e){return e.done}))}),[p]),g=Object(a.useCallback)((function(){p.forEach((function(e){return m(e.id,!h)}))}),[p,h]),v=Object(a.useCallback)((function(){o.forEach((function(e){e.done&&i(e.id)}))}),[o]),j=function(e){var t=Object(a.useState)(e||""),n=Object(s.a)(t,2),c=n[0],o=n[1];return[c,Object(a.useCallback)((function(e){o(e.target.value)})),o]}(),C=Object(s.a)(j,3),N=C[0],y=C[1],T=C[2],D=f((function(){N&&(u(N),T(""))}),[N]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"todos"),c.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",onKeyPress:D,value:N,onChange:y})),c.a.createElement("section",{className:"main"},c.a.createElement("input",{id:"toggle-all",type:"checkbox",className:"toggle-all",checked:h,onChange:g}),c.a.createElement("label",{htmlFor:"toggle-all"}),c.a.createElement("ul",{className:"todo-list"},p.map((function(e){return c.a.createElement(k,{key:e.id,todo:e})})))),c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},c.a.createElement("strong",null,b)," items left"),c.a.createElement("ul",{className:"filters"},c.a.createElement("li",null,c.a.createElement(r.b,{exact:!0,to:"/",activeClassName:"selected"},"All")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/active",activeClassName:"selected"},"Active")),c.a.createElement("li",null,c.a.createElement(r.b,{to:"/completed",activeClassName:"selected"},"Completed"))),E&&c.a.createElement("button",{className:"clear-completed",onClick:v},"Clear completed")))};var N=function(){return c.a.createElement(r.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"todoapp"},c.a.createElement(u.Route,{path:"/:filter?",component:C})),c.a.createElement(i,null)))};l.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f60567f2.chunk.js.map