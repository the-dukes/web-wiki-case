import{_ as c,o as t,c as a,b as o,d as e}from"./app-d6eaa58c.js";const s={},i=o("h1",{id:"cookie-和-strorage",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#cookie-和-strorage","aria-hidden":"true"},"#"),e(" cookie 和 strorage")],-1),r=o("p",null,"cookie/sessionStorage/localStorage 的区别",-1),l=o("blockquote",null,[o("p",null,"参考答案："),o("p",null,"cookie、sessionStorage、localStorage 都是保存本地数据的方式"),o("p",null,[e("其中，cookie 兼容性较好，所有浏览器均支持。浏览器针对 cookie 会有一些默认行为，比如当响应头中出现"),o("code",null,"set-cookie"),e("字段时，浏览器会自动保存 cookie 的值；再比如，浏览器发送请求时，会附带匹配的 cookie 到请求头中。这些默认行为，使得 cookie 长期以来担任着维持登录状态的责任。与此同时，也正是因为浏览器的默认行为，给了恶意攻击者可乘之机，CSRF 攻击就是一个典型的利用 cookie 的攻击方式。虽然 cookie 不断的改进，但前端仍然需要另一种更加安全的保存数据的方式")]),o("p",null,"HTML5 新增了 sessionStorage 和 localStorage，前者用于保存会话级别的数据，后者用于更持久的保存数据。浏览器针对它们没有任何默认行为，这样一来，就把保存数据、读取数据的工作交给了前端开发者，这就让恶意攻击者难以针对登录状态进行攻击。 cookie 的大小是有限制的，一般浏览器会限制同一个域下的 cookie 总量为 4M，而 sessionStorage 和 localStorage 则没有限制 cookie 会与 domain、path 关联，而 sessionStorage 和 localStorage 只与 domain 关联")],-1),n=[i,r,l];function k(_,d){return t(),a("div",null,n)}const h=c(s,[["render",k],["__file","13-cookiehestrorage.html.vue"]]);export{h as default};
