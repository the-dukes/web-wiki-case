import{_ as n,o as s,c as a,a as t}from"./app-d6eaa58c.js";const p={},e=t(`<h1 id="_05-定位总结" tabindex="-1"><a class="header-anchor" href="#_05-定位总结" aria-hidden="true">#</a> 05-定位总结</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>介绍下 <em>positon</em> 属性</li><li><em>position</em> 有哪些值，各自的用法如何？</li><li>相对定位、绝对定位、固定定位的区别</li></ul><h2 id="css-中的定位" tabindex="-1"><a class="header-anchor" href="#css-中的定位" aria-hidden="true">#</a> <em>CSS</em> 中的定位</h2><p>经常有同学混淆定位与布局，两者傻傻分不清。</p><p>布局是针对整个页面来讲的，你采用什么布局，两栏布局、三栏布局，目标是整个页面。</p><p>而定位是针对某一个元素来讲的，把这个元素定位到什么位置。</p><p>目前在 <em>CSS</em> 中，有 <em>5</em> 种定位方案，分别是：</p><ul><li><em>static</em> 静态定位</li><li><em>relative</em> 相对定位</li><li><em>absolute</em> 绝对定位</li><li><em>fixed</em> 固定定位</li><li><em>sticky</em> 粘性定位</li></ul><p>下面我们依次来介绍这几种定位。</p><h3 id="static-静态定位" tabindex="-1"><a class="header-anchor" href="#static-静态定位" aria-hidden="true">#</a> <em>static</em> 静态定位</h3><p>所谓静态定位，就是我们的标准流。</p><p>在标准流里面，块级元素独占一行，内嵌元素共享一行。静态定位是 <em>HTML</em> 元素的默认值，静态定位的元素不会受到 <em>top，bottom，left，right</em> 的影响。</p><h3 id="relative-相对定位" tabindex="-1"><a class="header-anchor" href="#relative-相对定位" aria-hidden="true">#</a> <em>relative</em> 相对定位</h3><p>所谓相对定位，就是相对自己原来的位置进行定位。相对定位的最大特点就是不脱离标准流，相对于自己原来的位置上进行一定的偏移。</p><p>来看一个示例：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.two</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-022649.png" alt="image-20210916102648561" style="zoom:50%;"><p>可以看到，我们对 <em>two</em> 这个盒子设置了 <em>left</em> 值为 <em>50px</em>，<em>top</em> 值为 <em>50px</em>，而由于是相对这个位置进行偏移，所以 <em>two</em> 这个盒子向右下进行了移动。</p><p>使用相对定位的作用主要有两个：</p><ul><li>微调元素</li><li>做绝对定位的参考，子绝父相</li></ul><h3 id="absolute-绝对定位" tabindex="-1"><a class="header-anchor" href="#absolute-绝对定位" aria-hidden="true">#</a> <em>absolute</em> 绝对定位</h3><p>所谓绝对定位，就是相对于离自己最近的，并且定了位的元素进行偏移。使用了绝对定位后的盒子，会脱离标准流，如果设置了 <em>margin</em> 的值为 <em>auto</em>，则会失效。</p><p>下面是一个绝对定位的示例：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>one<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.two</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-022924.png" alt="image-20210916102923743" style="zoom:50%;"><p>在浏览器中可以看到，第 <em>3</em> 个 <em>div</em> 往上面移动了，从而证明了绝对定位是脱离标准流的。</p><p>绝对定位后的盒子，其 <em>display</em> 属性会变为 <em>block</em>，例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度一下<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器中的浏览效果如下：原本不能设置宽高的行内元素，在进行了绝对定位以后，<em>display</em> 属性变为了 <em>block</em>，所以可以设置宽高了。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023159.png" alt="image-20210916103159181" style="zoom:50%;"><p>这里要重点强调一下绝对定位的参考点问题。默认情况下，绝对定位的参考点，如果用 <em>top</em> 来进行描述，那么定位参考点就是页面的左上角，而不是浏览器的左上角，如下图：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023254.png" alt="image-20210916103254157" style="zoom:50%;"><p>如果是使用 <em>bottom</em> 来进行描述，那么就是浏览器首屏窗口尺寸，对应的页面左下角，如下图：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023329.png" alt="image-20210916103329049" style="zoom:50%;"><p>下面是一道爱立信 <em>2014</em> 年的校园春招题目，该题目就是考察关于绝对定位默认参考点的相关知识，如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023403.png" alt="image-20210916103403155" style="zoom:67%;"><p>该题目的答案如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023443.png" alt="image-20210916103442461" style="zoom:67%;"><p>上面介绍的是绝对定位里参考点的默认情况，但是这种情况一般使用得非常的少。更多的则是使用接下来我们将要介绍的参照标准。</p><p>前面我们在介绍相对定位的时候，有提到子绝父相这个名字。事实上，当我们对一个元素设置绝对定位的时候，往往会将它的父级元素设置为相对定位。</p><p>这样的好处在于该元素的父级元素没有脱离标准流，该元素将会以这个相对定位了的父元素作为参考点，在父元素的范围内进行移动，方便我们对元素的位置进行掌控。如下图：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023532.png" alt="image-20210916103531326" style="zoom:67%;"><p>在该图中，容器盒子设置为相对定位，红色盒子为绝对定位。红色盒子将无视父元素的 <em>padding</em> 区域，以父元素的 <em>border</em> <strong>内侧</strong>作为自己定位的参考点。</p><p>需要大家记住的是当父级元素出现有定位时，绝对定位的参考点永远都是<strong>离自己最近的，并且定了位的祖先元素的左上角</strong>，下面我们来举例子进行说明，如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>three<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.one</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.two</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.three</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器中的浏览效果如下：这里 <em>three</em> 盒子就是以 <em>two</em> 盒子的左上角作为的参考点</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023731.png" alt="image-20210916103730739" style="zoom:50%;"><p>如果我们对代码稍作修改，取消 <em>two</em> 盒子的定位，那么 <em>three</em> 盒子就会以 <em>one</em> 盒子的左上角来作为参考点，如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.two</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 50px 0 0 50px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 50px 0 0 50px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在浏览器中的浏览效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-023917.png" alt="image-20210916103916507" style="zoom:50%;"><h3 id="fixed-固定定位" tabindex="-1"><a class="header-anchor" href="#fixed-固定定位" aria-hidden="true">#</a> <em>fixed</em> 固定定位</h3><p>所谓固定定位，可以看作是一种特殊的绝对定位，所以自然而然固定定位也是会脱离标准流的。</p><p>固定定位的特点是相对于浏览器窗口进行定位的。</p><p>换句话说，对一个盒子进行固定定位以后，无论页面如何滚动，这个盒子的显示位置都是不会变化的。</p><p>固定定位在 <em>PC</em> 端中经常用于显示在页面中位置固定不变的页面 <em>header</em>，以及移动端中位置固定不变的 <em>header</em> 和 <em>footer</em>。</p><h3 id="sticky-粘性定位" tabindex="-1"><a class="header-anchor" href="#sticky-粘性定位" aria-hidden="true">#</a> <em>sticky</em> 粘性定位</h3><p>在 <em>CSS3</em> 中，新增了一种定位方式：<em>sticky</em>。</p><p><em>sticky</em>，中文的字面意思是“粘，粘贴”的意思，所以这种定位方式可以称之为粘性定位。</p><p>目前大部分浏览器都已经支持了这种定位方式。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-024626.png" alt="image-20210916104626067"></p><p>要设置一个元素的定位方式为粘性定位，首先需要将 <em>position</em> 属性设置为 <em>sticky</em>。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span> <span class="token comment">/* 设置定位方式为粘性定位 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来有如下几个需要注意的点：</p><ul><li>父元素的 <em>overflow</em> 必须是 <em>visible</em>，不能是 <em>hidden</em> 或者 <em>auto</em>，因为父节点定位设置为 <em>overflow:hidden</em> 则父容器无法进行滚动。</li><li>父元素的高度不能低于 <em>sticky</em> 元素的高度 。</li><li>如果父元素没有设置定位（<em>position:relative | absolute | fixed</em>），则相对于 <em>viewprot</em> 进行定位，否则以定位的父元素为参考点。</li><li>设置阀值：需要指定 <em>top</em>、<em>right</em>、<em>bottom</em> 或 <em>left</em> 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。并且 <em>top</em> 和 <em>bottom</em> 同时设置时，<em>top</em> 生效的优先级高；<em>left</em> 和 <em>right</em> 同时设置时，<em>left</em> 的优先级高。</li></ul><p>下面是一个粘性定位的示例：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>我是标题，题题，题，...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>导航A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>导航B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>导航C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    今晚的爱奇艺尖叫之夜中，唐嫣上台领取年度戏剧女艺人奖，主持人朱丹希望她分享婚后甜蜜，可唐嫣已经下台，引发网友质疑场面尴尬。刚刚，朱丹发文回应，表示唐嫣没有不礼貌，自己也没有尴尬。随后，唐嫣也评论：“美丽的误会”
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    韩寒：我的生活有两个节点，一个是出书，另一个就是写博客。出书让我有了收入，博客让我有了跟读者的连接。我从小就被贴过很多标签，每多一个标签就更接近真实的我。微博也一样，每一次更新都跟随着时代的风向，与时代同行。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    《游戏人生》作者榎宫祐 表示，近日有朋友想成为漫画家，过来找他商量。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    他：“漫画家相当于无职啊，月收入又低，如果请助手花费更大。”（为了让朋友知道现实，又不否定梦想的小心翼翼的说法）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    朋友：“可是我有一栋公寓用来收租唉......”<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span>
    他：“那你想怎么活就怎么活吧！” ​​​​
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    【湖北一小学三年级才教数学，校长回应争议：实验班的成绩远高于对比班】湖北赤壁一小学施行三年级才上数学课的教学设置，引起关注。该校校长表示，数学是一个抽象思维的功课，6岁的小孩是形象思维发展的最佳期，应该把数学往后移，按照知识发展规律。从三年级开始学数学，用3年时间学完原本5年的课程是可行的，并且经过3年的实验，实验班的成绩都要远高于对比班。
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    刘国梁：暮然回首这一路走来⋯⋯感恩国家队30年的培养，把我从一个13岁的孩子，培养成大满贯、总教练、再到乒协主席🏓️[心]感谢这么多年跟我一起努力征战国际赛场的教练员和运动员，是你们辛勤的付出取得的荣耀造就了今天的自己[抱抱][心]感动的是亿万国人和球迷粉丝，这么多年不离不弃的支持，才有了今日国乒的新辉煌。赢不狂.输不慌.陪国乒.战东京！
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 5000px<span class="token punctuation">;</span>
  <span class="token comment">/* 为了让页面可以滑动 */</span>
<span class="token punctuation">}</span>

<span class="token selector">nav</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span> <span class="token property">tify-content</span><span class="token punctuation">:</span> sta
  <span class="token property">top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token comment">/* 设置阀值，滚动到 top 值为 20px 的时候不再能够滚动*/</span>
<span class="token punctuation">}</span>

<span class="token selector">nav h3</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li><em>position</em> 有哪些值，各自的用法如何？</li></ul><blockquote><p>参考答案：</p><p>目前在 <em>CSS</em> 中，有 <em>5</em> 种定位方案，分别是：</p><ol><li><p><em>static</em>：该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。</p></li><li><p><em>relative</em>：相对定位的元素是在文档中的正常位置偏移给定的值，但是不影响其他元素的偏移。</p></li><li><p><em>absolute</em>：相对定位的元素并未脱离文档流，而绝对定位的元素则脱离了文档流。在布置文档流中其它元素时，绝对定位元素不占据空间。绝对定位元素相对于最近的非 <em>static</em> 祖先元素定位。</p></li><li><p><em>fixed</em>：固定定位与绝对定位相似，但元素的包含块为 <em>viewport</em> 视口。该定位方式常用于创建在滚动屏幕时仍固定在相同位置的元素。</p></li><li><p><em>sticky</em>：粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。</p></li></ol></blockquote><p>-<em>EOF</em>-</p>`,79),c=[e];function l(o,i){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","05-dingweizongjie.html.vue"]]);export{d as default};
