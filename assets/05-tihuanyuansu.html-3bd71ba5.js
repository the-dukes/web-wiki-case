import{_ as e,o as a,c as i,a as m}from"./app-0e5daedb.js";const l={},t=m('<h1 id="_05-替换元素" tabindex="-1"><a class="header-anchor" href="#_05-替换元素" aria-hidden="true">#</a> 05-替换元素</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>什么是可替换元素，什么是非可替换元素，它们各自有什么特点？</li></ul><h2 id="什么是替换元素" tabindex="-1"><a class="header-anchor" href="#什么是替换元素" aria-hidden="true">#</a> 什么是替换元素</h2><p>所谓可替换元素（<em>replaced element</em>），是指一些展现效果不由 <em>CSS</em> 来控制的元素。这些元素是一种外部对象，它们外观的渲染，是独立于 <em>CSS</em> 的。</p><p>简单来说，它们的内容不受当前文档的样式的影响。<em>CSS</em> 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。某些可替换元素，例如 <code>&lt;iframe&gt;</code> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。</p><p>与替换元素相对应的，就是非替换元素，顾名思义就是那些样式完全由 <em>CSS</em> 来控制的元素，例如 <em>p，h1 ～ h6</em> 等。</p><blockquote><p>更多可替换元素内容可以参阅 <em>MDN</em>：<em>https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element</em></p></blockquote><h2 id="常见的替换元素" tabindex="-1"><a class="header-anchor" href="#常见的替换元素" aria-hidden="true">#</a> 常见的替换元素</h2><ul><li>图片标签 <em>img</em></li><li>内联框架 <em>iframe</em></li><li>音频视频标签</li></ul><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>什么是可替换元素，什么是非可替换元素，它们各自有什么特点？</li></ul><blockquote><p>可替换元素是指这样一种元素，它在页面中的大部分展现效果不由 <em>CSS</em> 决定。</p><p>比如 <em>img</em> 元素就是一个可替换元素，它在页面中显示出的效果主要取决于你连接的是什么图片，图片是什么它就展示什么，<em>CSS</em> 虽然可以控制图片的尺寸位置，但永远无法控制图片本身。</p><p>再比如，<em>select</em> 元素也是一个典型的可替换元素，它在页面上呈现的是用户操作系统上的下拉列表样式，因此，它的展现效果是由操作系统决定的。所以，同一个 <em>select</em> 元素，放到不同操作系统的电脑上会呈现不同的外观。</p><p><em>img、video、audio</em>、大部分表单元素都属于可替换元素。</p><p>非可替换元素就是指的普通元素，它具体在页面上呈现什么，完全由 <em>CSS</em> 来决定。</p></blockquote>',13),r=[t];function h(d,c){return a(),i("div",null,r)}const n=e(l,[["render",h],["__file","05-tihuanyuansu.html.vue"]]);export{n as default};
