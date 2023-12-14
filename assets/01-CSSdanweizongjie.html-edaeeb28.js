import{_ as n,o as s,c as a,a as e}from"./app-72013311.js";const p={},t=e(`<h1 id="_01-css-单位总结" tabindex="-1"><a class="header-anchor" href="#_01-css-单位总结" aria-hidden="true">#</a> 01-CSS 单位总结</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li><em>px</em> 和 <em>em</em> 的区别</li></ul><h2 id="css-中的哪些单位" tabindex="-1"><a class="header-anchor" href="#css-中的哪些单位" aria-hidden="true">#</a> <em>CSS</em> 中的哪些单位</h2><p>首先，在 <em>CSS</em> 中，单位分为两大类，<strong>绝对长度单位</strong>和<strong>相对长度单位</strong>。</p><h3 id="绝对长度单位" tabindex="-1"><a class="header-anchor" href="#绝对长度单位" aria-hidden="true">#</a> 绝对长度单位</h3><p>我们先来说这个，绝对长度单位最好理解，和我们现实生活中是一样的。在我们现实生活中，常见的长度单位有米（<em>m</em>）、厘米（<em>cm</em>）、毫米（<em>mm</em>），每一种单位的长度都是固定，比如 <em>5cm</em>，你走到任何地方 <em>5cm</em> 的长度都是一致的</p><p>例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 5cm<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5cm<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们设置了盒子的宽高都是 <em>5cm</em>，这里用的就是绝对长度单位。</p><p>常见的绝对单位长度如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-073818.png" alt="image-20210914153818508" style="zoom:50%;"><p>这些值中的大多数在用于打印时比用于屏幕输出时更有用。例如，我们通常不会在屏幕上使用 <em>cm</em>。</p><p>惟一一个经常使用的值，估计就是 <em>px</em>(像素)。</p><h3 id="相对长度单位" tabindex="-1"><a class="header-anchor" href="#相对长度单位" aria-hidden="true">#</a> 相对长度单位</h3><p>相对长度单位相对于其他一些东西，比如父元素的字体大小，或者视图端口的大小。使用相对单位的好处是，经过一些仔细的规划，我们可以使文本或其他元素的大小与页面上的其他内容相对应。</p><p>下表列出了 <em>web</em> 开发中一些最有用的单位。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-074021.png" alt="image-20210914154021389"></p><p>上面的单位中，常用的有 <em>em、rem、vw、vh</em>，其中 <em>vw</em> 和 <em>vh</em> 代表的是视口的宽度和高度，例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50vw<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们设置了容器的宽度为 <em>50vw</em>，也就是占视口的一半，而高度我们设置的是 <em>100vh</em>，就是占满整个视图。</p><p>接下来来看一下 <em>em</em> 和 <em>rem</em>。</p><p><em>em</em> 和 <em>rem</em> 相对于 <em>px</em> 更具有灵活性，他们是相对长度单位，意思是长度不是定死了的，更适用于响应式布局。</p><p>对于 <em>em</em> 和 <em>rem</em> 的区别一句话概括：<strong><em>em</em> 相对于父元素，<em>rem</em> 相对于根元素。</strong></p><p>来看关于 <em>em</em> 和 <em>rem</em> 示例。</p><p><em>em</em> 示例</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  我是父元素div
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    我是子元素p
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>我是孙元素span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span> <span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> solid 1px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span> */
  <span class="token property">width</span><span class="token punctuation">:</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> solid 1px blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-14-075220.png" alt="image-20210914155219732" style="zoom:50%;"><p><em>rem</em> 示例</p><p><em>rem</em> 是全部的长度都相对于根元素，根元素是谁？</p><p>那就是 <em>html</em>元素。通常做法是给 <em>html</em> 元素设置一个字体大小，然后其他元素的长度单位就为 <em>rem</em>。</p><p>例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  我是父元素div
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    我是子元素p
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>我是孙元素span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 30rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 3
  <span class="token property">height</span><span class="token punctuation">:</span> 30rem<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 4rem<span class="token punctuation">;</span> <span class="token property">tline</span><span class="token punctuation">:</span> soli
  <span class="token property">outline</span><span class="token punctuation">:</span> solid 1px black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 15rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1
  <span class="token property">height</span><span class="token punctuation">:</span> 15rem<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token comment">/* 150px */</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> solid 1px red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">span</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 10rem<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 10rem<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> solid 1px blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以当用 <em>rem</em> 做响应式时，直接在媒体中改变 <em>html</em> 的 <em>font-size</em>，此时用 <em>rem</em> 作为单位的元素的大小都会相应改变，很方便。</p><p>看到这里我想大家都能够更深刻的体会了 <em>em</em> 和 <em>rem</em> 的区别了，其实就是参照物不同。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li><em>px</em> 和 <em>em</em> 的区别</li></ul><blockquote><p>参考答案：</p><p><em>px</em> 即 <em>pixel</em> 像素，是相对于屏幕分辨率而言的，是一个绝对单位，但是具有一定的相对性。因为在同一设备上每个设备像素所代表的物理长度是固定不变的（绝对性），但在不同设备间每个设备像素所代表的物理长度是可以变化的（相对性）。</p><p><em>em</em> 是相对长度单位，具体的大小要相对于父元素来计算，例如父元素的字体大小为 <em>40px</em>，那么子元素 <em>1em</em> 就代表字体大小和父元素一样为 <em>40px</em>，<em>0.5em</em> 就代表字体大小为父元素的一半即 <em>20px</em>。</p></blockquote>`,43),c=[t];function i(l,o){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","01-CSSdanweizongjie.html.vue"]]);export{d as default};
