import{_ as n,o as s,c as a,a as t}from"./app-bb81f29b.js";const p={},e=t(`<h1 id="_02-居中方式总结" tabindex="-1"><a class="header-anchor" href="#_02-居中方式总结" aria-hidden="true">#</a> 02-居中方式总结</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>怎么让一个 <em>div</em> 水平垂直居中</li></ul><h2 id="盒子居中" tabindex="-1"><a class="header-anchor" href="#盒子居中" aria-hidden="true">#</a> 盒子居中</h2><p>首先题目问到了如何进行居中，那么居中肯定分 <em>2</em> 个方向，一个是水平方向，一个是垂直方向。</p><h3 id="水平方向居中" tabindex="-1"><a class="header-anchor" href="#水平方向居中" aria-hidden="true">#</a> 水平方向居中</h3><p>水平方向居中很简单，有 <em>2</em> 种常见的方式：</p><ol><li><p>设置盒子 <em>margin : 0 auto</em>：这种居中方式的原理在于设置 <em>margin-left</em> 为 <em>auto</em> 时，<em>margin-left</em> 就会被设置为能有多大就设置多大，所以盒子会跑到最右边，而设置 <em>margin-right</em> 为 <em>auto</em> 时，同理盒子就会跑到最左边。所以，当我们设置左右的 <em>margin</em> 都是 <em>auto</em> 的时候，盒子就跑到了中间，从而形成了水平居中。</p></li><li><p>第二种常见的方式就是通过 <em>display : flex</em> 设置盒子的外层盒子是一个弹性盒，然后通过 <em>justify-content : center</em> 使得内部的盒子居中。</p></li></ol><h3 id="垂直方向居中" tabindex="-1"><a class="header-anchor" href="#垂直方向居中" aria-hidden="true">#</a> 垂直方向居中</h3><p>关于盒子的垂直方向居中，方法就比较多了，这里介绍几种：</p><ol><li>通过 <em>verticle-align:middle</em> 实现垂直居中</li></ol><p>通过 <em>vertical-align:middle</em> 实现垂直居中是最常使用的方法，但是有一点需要格外注意，<em>vertical</em> 生效的前提是元素的 <em>display：inline-block</em>。并且在使用 <em>vertical-align:middle</em> 的时候需要一个兄弟元素做参照物，让它垂直于兄弟元素的中心点。<em>vertical-align</em> 对齐的方法是<strong>寻找兄弟元素中最高的元素</strong>作为参考。</p><p>代码示例如下：</p><div class="container"><div class="item"></div><div class="brotherBox"></div></div><ol start="2"><li>通过伪元素 :<em>before</em> 实现垂直居中</li></ol><p>平白无故添加一个无意义的参考元素不怎么好，我们可以去除作为参考的兄弟元素，转为给父元素添加一个伪元素，如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container::before</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>通过绝对定位实现垂直居中</li></ol><p>这种方式需要设置父元素为相对定位，子元素为绝对定位，然后配合 <em>margin-left</em> 为负的盒子高度一半来实现垂直居中</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>通过 <em>transform</em> 实现垂直居中</li></ol><p>可以通过定位配合 <em>transform</em> 也可以实现垂直居中</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-50px<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>使用弹性盒子居中</li></ol><p>通过设置父元素为弹性盒子，然后使用 <em>justify-content: center</em> 和 <em>align-items: center</em> 来设置内部盒子水平垂直居中</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.item</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是比较常见的盒子居中的解决方案，当然目前来讲最推荐的就是使用弹性盒子，这是目前最常用的一种方式，也是最推荐的一种方式。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>怎么让一个 <em>div</em> 水平垂直居中</li></ul><blockquote><p>参考答案：</p><ol><li>通过 <em>verticle-align:middle</em> 实现垂直居中</li><li>通过父元素设置伪元素 :<em>before</em> ，然后设置子元素 <em>verticle-align:middle</em> 实现垂直居中</li><li>通过绝对定位实现垂直居中</li><li>通过 <em>transform</em> 实现垂直居中</li><li>使用弹性盒子居中</li></ol></blockquote>`,34),l=[e];function c(i,o){return s(),a("div",null,l)}const r=n(p,[["render",c],["__file","02-jizhongfangshizongjie.html.vue"]]);export{r as default};
