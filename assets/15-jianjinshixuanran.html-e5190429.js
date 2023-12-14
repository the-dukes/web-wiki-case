import{_ as e,o as a,c as n,a as r}from"./app-72013311.js";const i={},p=r('<h1 id="_15-渐进式渲染" tabindex="-1"><a class="header-anchor" href="#_15-渐进式渲染" aria-hidden="true">#</a> 15-渐进式渲染</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>什么是渐进式渲染 ？</li></ul><h2 id="渐进式渲染" tabindex="-1"><a class="header-anchor" href="#渐进式渲染" aria-hidden="true">#</a> 渐进式渲染</h2><p>渐进式渲染，英文全称 <em>progressive rendering</em>，也被称之为惰性渲染，指的是为了提高用户感知的加载速度，以尽快的速度来呈现页面的技术。</p><p>在以前互联网带宽较小的时期，这种技术更为普遍。如今，移动终端的盛行，而移动网络往往不稳定，渐进式渲染在现代前端开发中仍然有用武之地。</p><p>有一点需要弄明白的是，这不是指的某一项技术，而是各种技术的一种集合。</p><p>例如：</p><p><strong>骨架屏</strong></p><p>在加载网络数据时，为了提升用户体验，通常会使用一个转圈圈的 <em>loading</em> 动画，或者使用 <em>Skeleton Screen</em> 占位。相比与 <em>loading</em> 动画，<em>Skeleton Screen</em> 的效果要更生动</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-13-081721.png" alt="image-20210913161720022" style="zoom:50%;"><p><strong>图片懒加载</strong></p><p>所谓图片懒加载，顾名思义，就是先加载部分图片，剩余的图片等到需要的时候再加载。这在电商网站中尤其常见。</p><p>比如一个电商网站，首屏通常会有很多的数据，清晰度较高的 <em>banner</em> 或轮播。页面非首屏部分会员很多商品夹杂着大量的图片。这是时候选择懒加载以保证首屏的流畅十分重要。</p><p><strong>图片占位符</strong></p><p>在网页加载的时候，某些图片还在请求中或者还未请求，这个时候就先找一个临时代替的图像，放在最终图像的位置上，但是这只是临时替代的图形，当图片数据准备好以后，会重新渲染真正的图形数据。</p><p><strong>拆分网页资源</strong></p><p>大部分用户不会用到一个网站的所有页面，但我们通常的做法却是把所有的功能都打包进一个很大的文件里面。一个 <em>bundle.js</em> 文件的大小可能会有几 <em>M</em>，一个打包后的 <em>style.css</em> 会包含网站的一切样式，从 <em>CSS</em> 结构定义到网站在各个版本的样式：移动端、平板、桌面、打印版等等。</p><p>但用户并不是一开始就需要所有的资源，所有我们可以对资源进行拆分，首先加载那些关键的资源，其他的资源等到需要的时候再去加载它。</p><p>更多的关于渐进式渲染的内容，可以参阅 <em>MDN</em>：<em>https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps/Loading</em></p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>什么是渐进式渲染 ？</li></ul><blockquote><p>参考答案：</p><p>渐进式渲染，英文全称 <em>progressive rendering</em>，也被称之为惰性渲染，指的是为了提高用户感知的加载速度，以尽快的速度来呈现页面的技术。但是这并不是某一项技术的特指，而是一系列技术的集合。</p><p>例如：</p><ul><li>骨架屏</li><li>图片懒加载</li><li>图片占位符</li><li>资源拆分</li></ul></blockquote><p>-<em>EOF</em>-</p>',24),s=[p];function o(t,l){return a(),n("div",null,s)}const c=e(i,[["render",o],["__file","15-jianjinshixuanran.html.vue"]]);export{c as default};
