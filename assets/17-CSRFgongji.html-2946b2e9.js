import{_ as t,o as e,c as r,a as d}from"./app-72013311.js";const a={},o=d('<h1 id="csrf-攻击" tabindex="-1"><a class="header-anchor" href="#csrf-攻击" aria-hidden="true">#</a> CSRF 攻击</h1><p>CSRF（Cross-site request forgery，跨站请求伪造）</p><p>它是指攻击者利用了用户的身份信息，执行了用户非本意的操作</p><p><img src="http://mdrs.yuanjin.tech/img/20211101145156.png" alt="image-20211101145156371"></p><h2 id="防御方式" tabindex="-1"><a class="header-anchor" href="#防御方式" aria-hidden="true">#</a> 防御方式</h2><table><thead><tr><th>防御手段</th><th>防御力</th><th>问题</th></tr></thead><tbody><tr><td>不使用 cookie</td><td>⭐️⭐️⭐️⭐️⭐️</td><td>兼容性略差<br>ssr 会遇到困难，但可解决</td></tr><tr><td>使用 sameSite</td><td>⭐️⭐️⭐️⭐️</td><td>兼容性差<br>容易挡住自己人</td></tr><tr><td>使用 csrf token</td><td>⭐️⭐️⭐️⭐️⭐️</td><td>获取到 token 后未进行操作仍然会被攻击</td></tr><tr><td>使用 referer 防护</td><td>⭐️⭐️</td><td>过去很常用，现在已经发现漏洞</td></tr></tbody></table><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><p>介绍 csrf 攻击</p><blockquote><p>CSRF 是跨站请求伪造，是一种挟制用户在当前已登录的 Web 应用上执行非本意的操作的攻击方法</p><p>它首先引导用户访问一个危险网站，当用户访问网站后，网站会发送请求到被攻击的站点，这次请求会携带用户的 cookie 发送，因此就利用了用户的身份信息完成攻击</p><p>防御 CSRF 攻击有多种手段：</p><ol><li>不使用 cookie</li><li>为表单添加校验的 token 校验</li><li>cookie 中使用 sameSite 字段</li><li>服务器检查 referer 字段</li></ol></blockquote>',9),i=[o];function c(s,h){return e(),r("div",null,i)}const l=t(a,[["render",c],["__file","17-CSRFgongji.html.vue"]]);export{l as default};
