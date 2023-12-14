import{_ as n,o as s,c as e,a}from"./app-d6eaa58c.js";const i={},l=a(`<h1 id="_16-css-渲染性能优化" tabindex="-1"><a class="header-anchor" href="#_16-css-渲染性能优化" aria-hidden="true">#</a> 16-CSS 渲染性能优化</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>总结一下如何提升或者优化 <em>CSS</em> 的渲染性能</li></ul><h2 id="css-渲染性能优化" tabindex="-1"><a class="header-anchor" href="#css-渲染性能优化" aria-hidden="true">#</a> <em>CSS</em> 渲染性能优化</h2><p>很多人往往不重视性能优化这一块，觉得功能做出来就行了。</p><p>诚然，在软件开发过程中，功能确实是优先要考虑的，但是当功能完善后，接下来就需要考虑性能问题了。</p><p>我们可以从两个方面来看性能优化的意义：</p><ol><li>用户角度 网站优化能够让页面加载得更快，响应更加及时，极大提升用户体验。</li><li>服务商角度 优化会减少页面资源请求数，减小请求资源所占带宽大小，从而节省可观的带宽资源。</li></ol><p>网站优化的目标就是减少网站加载时间，提高响应速度。</p><p>那么网站加载速度和用户体验又有着怎样的关系呢？我们来看下面这张图：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-041118.png" alt="image-20210916121117684" style="zoom:50%;"><p><em>Google</em> 和亚马逊的研究表明，<em>Google</em> 页面加载的时间从 <em>0.4</em> 秒提升到 <em>0.9</em> 秒导致丢失了 <em>20%</em> 流量和广告收入，对于亚马逊，页面加载时间每增加 <em>100ms</em> 就意味着 <em>1%</em> 的销售额损失。</p><p>可见，页面的加载速度对于用户有着至关重要的影响。</p><p>一个好的交互效果可能是这样的：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-041314.png" alt="image-20210916121313325" style="zoom:50%;"><p>当然，性能优化是来自方方面面的。</p><p>这里我们主要来看 <em>CSS</em> 方面能够进行哪些性能优化。</p><p>1.使用 <code>id selector</code> 非常的高效。在使用 <code>id selector</code> 的时候需要注意一点：因为 <code>id</code> 是唯一的，所以不需要既指定 <code>id</code> 又指定 <code>tagName</code>：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Bad  */</span>
<span class="token selector">p#id1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* Good  */</span>
<span class="token selector">#id1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.避免深层次的 <code>node</code> ，譬如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Bad  */</span>
<span class="token selector">div &gt; div &gt; div &gt; p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Good  */</span>
<span class="token selector">p-class</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.不要使用 <code>attribute selector</code>，如：p[att1=”val1”]。这样的匹配非常慢。更不要这样写：<code>p[id=&quot;id1&quot;]</code>。这样将 <code>id selector</code> 退化成 <code>attribute selector</code>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* Bad  */</span>
<span class="token selector">p[id=&#39;jartto&#39;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p[class=&#39;blog&#39;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* Good  */</span>
<span class="token selector">#jartto</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.blog</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.通常将浏览器前缀置于前面，将标准样式属性置于最后，类似：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.foo</span> <span class="token punctuation">{</span>
  <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里推荐参阅 <em>CSS</em> 规范-优化方案：<em>http://nec.netease.com/standard/css-optimize.html</em></p><p>5.遵守 <em>CSSLint</em> 规则</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>font-faces        　　　　  　　　不能使用超过5个web字体
import        　　　　　　　 　　  禁止使用@import
regex-selectors        　　　　  禁止使用属性选择器中的正则表达式选择器
universal-selector    　　 　　  禁止使用通用选择器*
unqualified-attributes    　　　禁止使用不规范的属性选择器
zero-units            　　 　　　0后面不要加单位
overqualified-elements    　　　使用相邻选择器时，不要使用不必要的选择器
shorthand        　　　　　　　　 简写样式属性
duplicate-background-images    相同的url在样式表中不超过一次
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多的 <em>CSSLint</em> 规则可以参阅：<em>https://github.com/CSSLint/csslint</em></p><p>6.不要使用 <code>@import</code></p><p>使用 <code>@import</code> 引入 <code>CSS</code> 会影响浏览器的并行下载。使用 <code>@import</code> 引用的 <code>CSS</code> 文件只有在引用它的那个 <code>CSS</code> 文件被下载、解析之后，浏览器才会知道还有另外一个 <code>CSS</code> 需要下载，这时才去下载，然后下载后开始解析、构建 <code>Render Tree</code> 等一系列操作。</p><p>多个 <code>@import</code> 会导致下载顺序紊乱。在 <code>IE</code> 中，<code>@import</code> 会引发资源文件的下载顺序被打乱，即排列在 <code>@import</code> 后面的 <code>JS</code> 文件先于 <code>@import</code> 下载，并且打乱甚至破坏 <code>@import</code> 自身的并行下载。</p><p>7.避免过分重排（<em>Reflow</em>） 所谓重排就是浏览器重新计算布局位置与大小。常见的重排元素：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>width
height
padding
margin
display
border-width
border
top
position
font-size
float
text-align
overflow-y
font-weight
overflow
left
font-family
line-height
vertical-align
right
clear
white-space
bottom
min-height
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.依赖继承。如果某些属性可以继承，那么自然没有必要在写一遍。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>总结一下如何提升或者优化 <em>CSS</em> 的渲染性能</li></ul><blockquote><p>参考答案：</p><p><em>CSS</em> 渲染性能的优化来自方方面面，这里列举一些常见的方式：</p><ol><li>使用 <em>id</em> 选择器非常高效，因为 <em>id</em> 是唯一的</li><li>避免深层次的选择器嵌套</li><li>尽量避免使用属性选择器，因为匹配速度慢</li><li>使用渐进增强的方案</li><li>遵守 <em>CSSLint</em> 规则</li><li>不要使用 <code>@import</code></li><li>避免过分重排（<em>Reflow</em>）</li><li>依赖继承</li><li>值缩写</li><li>避免耗性能的属性</li><li>背景图优化合并</li><li>文件压缩</li></ol></blockquote><p>-<em>EOF</em>-</p>`,39),c=[l];function d(o,t){return s(),e("div",null,c)}const r=n(i,[["render",d],["__file","16-CSSxuanranxingnenyouhua.html.vue"]]);export{r as default};
