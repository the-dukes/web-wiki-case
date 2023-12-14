import{_ as e,o as a,c as t,a as i}from"./app-d6eaa58c.js";const r={},n=i('<h1 id="xss-攻击" tabindex="-1"><a class="header-anchor" href="#xss-攻击" aria-hidden="true">#</a> XSS 攻击</h1><p>XSS（Cross Site Scripting，跨站脚本攻击），是指攻击者利用站点的漏洞，在表单提交时，在表单内容中加入一些恶意脚本，当其他正常用户浏览页面，而页面中刚好出现攻击者的恶意脚本时，脚本被执行，从而使得页面遭到破坏，或者用户信息被窃取。</p><img src="http://mdrs.yuanjin.tech/img/20211102135438.png" alt="image-20211102135438219" style="zoom:50%;" align="left"><h2 id="防御方式" tabindex="-1"><a class="header-anchor" href="#防御方式" aria-hidden="true">#</a> 防御方式</h2><p>服务器端对用户提交的内容进行过滤或编码</p><ul><li>过滤：去掉一些危险的标签，去掉一些危险的属性</li><li>编码：对危险的标签进行 HTML 实体编码</li></ul><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><p>介绍 XSS 攻击</p><blockquote><p>参考答案：</p><p>XSS 是指跨站脚本攻击。攻击者利用站点的漏洞，在表单提交时，在表单内容中加入一些恶意脚本，当其他正常用户浏览页面，而页面中刚好出现攻击者的恶意脚本时，脚本被执行，从而使得页面遭到破坏，或者用户信息被窃取。</p><p>要防范 XSS 攻击，需要在服务器端过滤脚本代码，将一些危险的元素和属性去掉或对元素进行 HTML 实体编码。</p></blockquote>',9),s=[n];function c(o,h){return a(),t("div",null,s)}const d=e(r,[["render",c],["__file","18-XSSgongji.html.vue"]]);export{d as default};
