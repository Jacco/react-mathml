(this.webpackJsonpequations=this.webpackJsonpequations||[]).push([[0],{13:function(e,t,n){e.exports=n(22)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=(n(18),n(19),n(20),n(1)),i=n(3),u=n(8),p=n(5),s=n(11),m=n.n(s),d=n(2),h=r.a.createContext({path:"",onClick:function(){},registerActions:function(){},unregisterActions:function(){}}),b={type:"cn",idx:2,children:["1"],attributes:{type:"integer"}},y={type:"cn",idx:2,children:["0"],attributes:{type:"integer"}},f=n(4),E=function(e){var t;if("cn"===e.type&&"rational"===(null===(t=e.attributes)||void 0===t?void 0:t.type)){var n=Object(o.a)(e.children,3);n[0],n[1],n[2];e=Object(d.b)(e,"children.0",(parseInt(e.children[0])+parseInt(e.children[2])).toString())}return e},x=function(e){var t;if("cn"===e.type&&"rational"===(null===(t=e.attributes)||void 0===t?void 0:t.type)){var n=Object(o.a)(e.children,3);n[0],n[1],n[2];e=Object(d.b)(e,"children.0",(parseInt(e.children[0])-parseInt(e.children[2])).toString())}return e},j=r.a.forwardRef((function(e,t){var n=e.expr,c=e.path,l=Object(f.a)(e,["expr","path"]),i=Object(a.useContext)(h),u=i.registerActions,p=i.unregisterActions;Object(a.useEffect)((function(){var e={"+":E,"-":x};return u(c,e),function(){return p(c,e)}}),[u,p,c]);var s=Object(o.a)(n,3),m=s[0],d=(s[1],s[2]);return r.a.createElement("mjx-mfrac",{ref:t,space:"4"},r.a.createElement("mjx-frac",{type:"d"},r.a.createElement("mjx-num",null,r.a.createElement("mjx-nstrut",null),r.a.createElement(O,Object.assign({expr:[m],path:"".concat(c,".[rat].0")},l))),r.a.createElement("mjx-dbox",null,r.a.createElement("mjx-dtable",null,r.a.createElement("mjx-line",{type:"d"}),r.a.createElement("mjx-row",null,r.a.createElement("mjx-den",null,r.a.createElement("mjx-dstrut",null),r.a.createElement(O,Object.assign({expr:[d],path:"".concat(c,".[rat].2")},l)),"                            "))))))})),g=function(e){var t;return"cn"===e.type&&"integer"===(null===(t=e.attributes)||void 0===t?void 0:t.type)&&(e=Object(d.b)(e,"children.0",(parseInt(e.children[0])+1).toString())),"string"===typeof e&&(e=(parseInt(e)+1).toString()),e},v=function(e){var t;return"cn"===e.type&&"integer"===(null===(t=e.attributes)||void 0===t?void 0:t.type)&&(e=Object(d.b)(e,"children.0",(parseInt(e.children[0])-1).toString())),"string"===typeof e&&(e=(parseInt(e)-1).toString()),e},O=r.a.forwardRef((function(e,t){var n=e.expr,c=(e.p,e.path),l=Object(f.a)(e,["expr","p","path"]),i=Object(a.useContext)(h),u=i.registerActions,s=i.unregisterActions;Object(a.useEffect)((function(){var e={"+":g,"-":v};return u(c,e),function(){return s(c,e)}}),[c,u,s]);var m=c.startsWith(i.selectedPath);console.log("Number debug",n);var d=Object(o.a)(n,1)[0];return"string"===typeof d?r.a.createElement("mjx-mn",Object.assign({},l,{ref:t,onClick:function(){return i.onClick(c)},style:{backgroundColor:m?"red":"transparent"}}),Object(p.a)(d).map((function(e,t){return r.a.createElement("mjx-c",{key:t,class:"mjx-c".concat(e.charCodeAt(0).toString(16).toUpperCase())})}))):r.a.createElement("div",null,"MathNumber unknown ",JSON.stringify(n))})),k=function(e){return e={type:"apply",idx:e.idx,children:[{type:"divide",idx:0},e=Object(d.b)(e,"idx",1),Object(i.a)(Object(i.a)({},b),{},{idx:2})]}},C=r.a.forwardRef((function(e,t){var n=e.type,c=e.path,l=Object(f.a)(e,["type","path"]),o=Object(a.useContext)(h),i=o.registerActions,u=o.unregisterActions;return Object(a.useEffect)((function(){var e={"/":k};return i(c,e),function(){return u(c,e)}}),[i,u,c]),"rational"===n?r.a.createElement(j,Object.assign({ref:t,type:n,path:c},l)):r.a.createElement(O,Object.assign({ref:t,type:n,path:c},l))})),S={x:"1D465",a:"1D44E",b:"1D44F",c:"1D450"},w=r.a.forwardRef((function(e,t){var n=e.expr,c=e.path,l=e.onClick,o=Object(f.a)(e,["expr","path","onClick"]),i=Object(a.useContext)(h),u=S[n],p=c.startsWith(i.selectedPath);return console.log("*** Variable path",p),console.log("path",c),console.log("sel ",i.selectedPath),r.a.createElement("mjx-mo",Object.assign({ref:t,onClick:function(){return l(c)}},o,{style:{backgroundColor:p?"red":"transparent"}}),u?r.a.createElement("mjx-c",{class:"mjx-c".concat(u," TEX-I")}):n)})),A=function(e){var t=e.children,n=e.path;return console.log("Operator path",n),r.a.createElement("mjx-mo",{space:"4"},r.a.createElement("mjx-c",{class:"mjx-c".concat(t.charCodeAt(0).toString(16).toUpperCase())}))},P=function(e){var t=e.expr,n=e.openSymbol,a=e.closeSymbol;return r.a.createElement("mfenced",{openSymbol:n,closeSymbol:a},t.map((function(e,t){return r.a.createElement(W,{key:t,p:0,expr:e})})))},N=function(e){var t=e.expr,n=e.useBrackets,a=e.priority,c=e.symbol,l=e.path,o=e.onClick,i=e.opPath;return r.a.createElement("mjx-mrow",null,n&&r.a.createElement(A,null,"("),t.reduce((function(e,t,n){return n&&e.push(r.a.createElement(A,{key:"o-".concat(n),path:"".concat(l,".[op-").concat(c(t),"].0")},c(t))),t&&e.push(r.a.createElement(W,{key:"a-".concat(n),p:a,expr:t,path:"".concat(l,".[op-").concat(i,"].").concat(t.idx),onClick:o})),e}),[]),n&&r.a.createElement(A,null,")"))},I=function(e){var t=e.expr,n=e.newPriority,a=e.oldPriority,c=e.symbol,l=e.path,o=e.onClick,i=e.opPath;return r.a.createElement(N,{useBrackets:n<a||n===a&&"-"===c(),level:n,symbol:c,expr:t,path:l,onClick:o,opPath:i})},R={eq:function(e){var t=e.expr,n=e.priority,a=e.path,c=e.onClick;return console.log("Equation path",a),r.a.createElement(N,{useBrackets:n>1,level:n,symbol:function(){return"="},expr:t,path:a,onClick:c,opPath:"="})},divide:function(e){var t=e.expr,n=e.priority,a=e.path,c=e.onClick;console.log("Division path",a);var l=Object(o.a)(t,2),i=l[0],u=l[1];return r.a.createElement("mjx-mfrac",{space:"4"},r.a.createElement("mjx-frac",{type:"d"},r.a.createElement("mjx-num",null,r.a.createElement("mjx-nstrut",null),r.a.createElement(W,{p:n,expr:i,path:"".concat(a,".[div].").concat(i.idx),onClick:c})),r.a.createElement("mjx-dbox",null,r.a.createElement("mjx-dtable",null,r.a.createElement("mjx-line",{type:"d"}),r.a.createElement("mjx-row",null,r.a.createElement("mjx-den",null,r.a.createElement("mjx-dstrut",null),r.a.createElement(W,{p:n,expr:u,path:"".concat(a,".[div].").concat(u.idx),onClick:c})))))))},times:function(e){var t=e.expr,n=e.priority,a=e.path,c=e.onClick;return r.a.createElement(N,{useBrackets:n>3,level:n,symbol:function(e){return"cn"===e.type?"\xd7":"\u2062"},expr:t,path:a,onClick:c,opPath:"*"})},minus:function(e){var t=e.expr,n=e.priority,a=e.path,c=e.onClick;console.log("Subtraction",t);var l=t.length,o=1===l?5:2;return r.a.createElement(I,{newPriority:o,oldPriority:n,symbol:function(){return"\u2212"},expr:1===l?[void 0,t[0]]:t,path:a,onClick:c,opPath:"-"})},plus:function(e){var t=e.expr,n=e.priority,a=e.path,c=e.onClick;return r.a.createElement("mjx-mrow",null,n>2&&r.a.createElement(A,null,"("),t.reduce((function(e,t,n){var l="".concat(a,".[add].").concat(t.idx);if(n>0){var o=t.children||[];"cn"===t.type&&!o.length&&Number(t.textContent)<0?(e.push(r.a.createElement(A,{key:"op-".concat(n),path:"".concat(l,".0")},"\u2212")),e.push(r.a.createElement("mjx-mn",{key:"n-".concat(n)},Number(t.textContent)))):"apply"===t.type&&2===o.length&&"minus"===o[0].type?(e.push(r.a.createElement(A,{key:"op-".concat(n),path:"".concat(l,".0")},"\u2212")),e.push(r.a.createElement(W,{key:"a-".concat(n),priority:3,expr:o[1],path:l}))):"apply"===t.type&&o.length>2&&"times"===o[0].type&&"cn"===o[1].type&&Number(o[1].textContent)<0?(e.push(r.a.createElement(A,{key:"op-".concat(n),path:"".concat(l,".0")},"\u2212")),o[1].textContent=-Number(o[1].textContent),e.push(r.a.createElement(W,{key:"a-".concat(n),priority:3,expr:t,path:l}))):(e.push(r.a.createElement(A,{key:"op-".concat(n),path:"".concat(l,".0")},"+")),e.push(r.a.createElement(W,{key:"a-".concat(n),priority:3,expr:t,path:l,onClick:c})))}else e.push(r.a.createElement(W,{key:"a-".concat(n),priority:3,expr:t,path:l,onClick:c}));return e}),[]),n>2&&r.a.createElement(A,null,")"))},root:function(e){var t=e.expr,n=e.params,a=e.path,c=e.onClick;return 0===n.length||"degree"===n[0].type&&"2"===n[0].textContent?r.a.createElement("mjx-msqrt",{space:"3"},r.a.createElement("mjx-sqrt",null,r.a.createElement("mjx-surd",null,r.a.createElement(A,{path:"".concat(a,".[root].0")},"\u221a")),r.a.createElement("mjx-box",null,r.a.createElement(W,{priority:0,expr:t,path:"".concat(a,".[root]"),onClick:c})))):r.a.createElement("div",null,"Other root")},power:function(e){var t=e.expr,n=e.priority,c=(e.params,e.path),l=e.onClick,i=Object(o.a)(t,2),u=i[0],p=i[1],s=Object(a.useState)("0"),m=Object(o.a)(s,2),d=m[0],h=m[1],b=Object(a.useState)(null),y=Object(o.a)(b,2),f=y[0],E=y[1],x=Object(a.useState)(null),j=Object(o.a)(x,2),g=j[0],v=j[1],O=Object(a.useCallback)((function(e){v(e)}),[]),k=Object(a.useCallback)((function(e){E(e)}),[]);return Object(a.useEffect)((function(){f&&g&&h("".concat(f.getBoundingClientRect().height-g.getBoundingClientRect().height,"px"))}),[f,g]),r.a.createElement("mjx-msup",null,r.a.createElement(W,{ref:k,priority:n,expr:u,path:"".concat(c,".[pwr].").concat(u.idx),onClick:l}),r.a.createElement("mjx-script",{style:{verticalAlign:d}},r.a.createElement(W,{ref:O,priority:n,size:"s",expr:p,path:"".concat(c,".[pwr].").concat(p.idx),onClick:l})))}},T={apply:function(e){var t=e.expr,n=e.priority,a=e.path,c=e.onClick,l=null,o=[],i=[],u=[];if(t.forEach((function(e){if("string"!==typeof e){var t=e.type;"bvar"===t?i.push(e):"condition"===t||"degree"===t||"logbase"===t||"lowlimit"===t||"uplimit"===t||"interval"===t&&!o.length||"domainofapplication"===t?u.push(e):null===l?l=e:o.push(e)}})),l){var p=l.type;p="csymbol"===p?l.textContent:p;var s=R[p];return s?("minus"===p&&console.log("minus",o,t),r.a.createElement(s,{priority:n,params:u,expr:o,path:"".concat(a),onClick:c})):r.a.createElement("mjx-mrow",null,t?r.a.createElement(W,{p:0,expr:{first:l}}):r.a.createElement("mjx-mi",null,p),r.a.createElement(A,null,"\u2061"),r.a.createElement(P,{openSymbol:"(",closeSymbol:")",expr:o}))}return r.a.createElement("mjx-mrow",null)},ci:w,cn:C},q=r.a.forwardRef((function(e,t){var n=e.expr,a=e.priority,c=e.path,l=e.onClick,o=Object(f.a)(e,["expr","priority","path","onClick"]);if(!n)return null;if("string"!==typeof n){if(Array.isArray(n))return n.map((function(e,t){return r.a.createElement(q,{key:t,p:a,expr:e,path:"".concat(c,".").concat(e.idx),onClick:l})}));var i=n.type,u=T[i];return u?r.a.createElement(u,Object.assign({expr:n.children,priority:a,ref:t,path:"".concat(c),onClick:l},n.attributes?n.attributes:void 0,o)):n.children&&0===n.children.length?r.a.createElement("mjx-mi",null,i):r.a.createElement("div",null,"what now ",i," ",JSON.stringify(n))}return n})),W=q,B=function(e,t){return t=t.split(/\[[^\]]+\]/g).join("children").substr(5),Object(d.a)(e,t)},D=function(e,t,n){return t=t.split(/\[[^\]]+\]/g).join("children").substr(5),Object(d.b)(e,t,n)},J=1,M={},X=function(e){var t=e.children,n=Object(a.useState)((J++).toString()),c=Object(o.a)(n,1)[0],l=Object(a.useState)({}),s=Object(o.a)(l,2),f=s[0],E=s[1],x=Object(a.useState)(""),j=Object(o.a)(x,2),g=j[0],v=j[1],O=Object(a.useState)({}),k=Object(o.a)(O,2),C=k[0],S=k[1];r.a.Children.only(t);Object(a.useEffect)((function(){!function(){var e=m.a.renderToString(t),n=(new DOMParser).parseFromString(e,"text/xml");n=n.querySelector("math");var a={type:"root"};n.childNodes.forEach((function(e){return function e(t,n){if(1===t.nodeType){var a={type:t.localName};n.children=n.children||[],n.children.push(a),a.idx=n.children.length-1,t.attributes.length>0&&(console.log("attributes",t.attributes),a.attributes=Object.assign.apply(Object,[{}].concat(Object(p.a)(Array.from(t.attributes,(function(e){var t=e.name,n=e.value;return Object(u.a)({},t,n)})))))),t.childNodes&&t.childNodes.forEach((function(t){e(t,a)}))}else 3===t.nodeType?(n.children=n.children||[],n.children.push(t.textContent)):console.log("not found!",t)}(e,a)})),E(a.children),console.log("matchExpr",a.children)}()}),[t]);var w=Object(a.useCallback)((function(e){console.log("onClick",e),v(e)}),[v]),A=Object(a.useCallback)(function(e){return function(t,n){M[e]=M[e]||{},M[e][t]=M[e][t]||{},M[e][t]=Object(i.a)(Object(i.a)({},M[e][t]),n)}}(c),[c]),P=Object(a.useCallback)(function(e){return function(t,n){Object.keys(n).forEach((function(n){delete M[e][t][n]}))}}(c),[c]);return Object(a.useEffect)((function(){S({onClick:w,selectedPath:g,registerActions:A,unregisterActions:P}),console.log("CTX SET")}),[c,w,g,A,P]),r.a.createElement("div",{tabIndex:"0",onKeyDown:function(e){if(console.log(M[c][g]),M[c],M[c][g]&&M[c][g][e.key]){console.log("ACTIONS",M[c],g,M[c][g]);var t=B(f,g);(t=M[c][g][e.key](t))&&E(D(f,g,t))}else if(27===e.keyCode){var n=g.split(".").slice(0,-2).join(".");v(n)}else if(39===e.keyCode){var a=g.split(/\[[^\]]+\]/g).join("children").substr(5).split("."),r=parseInt(a[a.length-1])+1;a=a.slice(0,-1).join("."),Object(d.a)(f,a).some((function(e){return e.idx===r}))&&v(g.split(".").slice(0,-1).join(".")+"."+r)}else if(37===e.keyCode){var l=g.split(/\[[^\]]+\]/g).join("children").substr(5).split("."),o=parseInt(l[l.length-1])-1;if(o>0)l=l.slice(0,-1).join("."),Object(d.a)(f,l).some((function(e){return e.idx===o}))&&v(g.split(".").slice(0,-1).join(".")+"."+o)}else if("+"===e.key){var u=B(f,g);if("apply"===u.type||"ci"===u.type){var p={type:"apply",idx:u.idx,children:[{type:"plus",idx:0},u=Object(d.b)(u,"idx",1),Object(i.a)(Object(i.a)({},y),{},{idx:2})]};E(D(f,g,p))}}else if("^"===e.key){var s=B(f,g),m={type:"apply",idx:s.idx,children:[{type:"power",idx:0},s=Object(d.b)(s,"idx",1),Object(i.a)(Object(i.a)({},b),{},{idx:2})]};E(D(f,g,m))}else if("*"===e.key){var h=B(f,g),x={type:"apply",idx:h.idx,children:[{type:"times",idx:0},h=Object(d.b)(h,"idx",1),Object(i.a)(Object(i.a)({},b),{},{idx:2})]};E(D(f,g,x))}else 83===e.keyCode||(console.log("KEYCODE",e.key),console.log(e))}},r.a.createElement("mjx-container",{jax:"CHTML",display:"true"},r.a.createElement("mjx-math",{display:"true",class:"MJX-TEX"},r.a.createElement(h.Provider,{value:C},r.a.createElement(W,{expr:f,priotiry:0,path:"math",onClick:function(e){console.log("onClick",e),v(e)}})))),r.a.createElement("button",{onClick:function(){var e=g.split(/\[[^\]]+\]/g).join("children").substr(5);e=e.split(".").slice(0,-1).join(".");var t=Object(d.a)(f,e),n=[t[0]].concat(Object(p.a)(t.slice(1).reverse()));n.forEach((function(e,t){return e.idx=t})),E(Object(d.b)(f,e,n))}},"SWAP sel"),r.a.createElement("button",{onClick:function(){var e=f[0].children;f[0]={type:"apply",children:[e[0],e[2],e[1]]},E(Object(p.a)(f))}},"SWAP div"))};var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Play with mathematical formula"),r.a.createElement(X,null,r.a.createElement("math",{display:"block"},r.a.createElement("apply",null,r.a.createElement("eq",null),r.a.createElement("ci",null,"x"),r.a.createElement("apply",null,r.a.createElement("divide",null),r.a.createElement("apply",null,r.a.createElement("plus",null),r.a.createElement("apply",null,r.a.createElement("minus",null),r.a.createElement("ci",null,"b")),r.a.createElement("apply",null,r.a.createElement("root",null,r.a.createElement("degree",null,"2")),r.a.createElement("apply",null,r.a.createElement("minus",null),r.a.createElement("apply",null,r.a.createElement("power",null),r.a.createElement("ci",null,"b"),r.a.createElement("cn",{type:"integer"},"2")),r.a.createElement("apply",null,r.a.createElement("times",null),r.a.createElement("cn",{type:"integer"},"4"),r.a.createElement("ci",null,"a"),r.a.createElement("ci",null,"c"))))),r.a.createElement("apply",null,r.a.createElement("times",null),r.a.createElement("cn",{type:"rational"},"2",r.a.createElement("sep",null),"3"),r.a.createElement("ci",null,"a")))))),r.a.createElement(X,null,r.a.createElement("math",null,r.a.createElement("apply",null,r.a.createElement("eq",null),r.a.createElement("ci",null,"x"),r.a.createElement("cn",{type:"integer"},"0")))),r.a.createElement("pre",{style:{textAlign:"left"}},"\n          SWAP sel is currently broken\n\n          Selecting parts\n          - red is selected\n          - mouse click to select numbers or symbols\n\n          Navigation\n          - ESC to select parent of current selection\n          - RIGHT ARROW select next child of current selection\n          - LEFT ARROW select\n\n          Changing math\n          - +/- on number (rational or natural)\n\n          Refactor\n          - ^ on natural number or symbol raise to power 1\n          - / on number divide by 1\n          - + on non number add 0\n          - * multiply by 1")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.8ef4f3b7.chunk.js.map