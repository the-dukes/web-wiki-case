import{_ as s,o as n,c as a,a as e}from"./app-0e5daedb.js";const t={},p=e(`<h1 id="_07-css-属性的计算过程" tabindex="-1"><a class="header-anchor" href="#_07-css-属性的计算过程" aria-hidden="true">#</a> 07-CSS 属性的计算过程</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>请简述 <em>CSS</em> 中属性的计算过程是怎样的</li></ul><h2 id="css-属性的计算过程" tabindex="-1"><a class="header-anchor" href="#css-属性的计算过程" aria-hidden="true">#</a> <em>CSS</em> 属性的计算过程</h2><p>首先，让我们从最简单的代码开始，例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>this is a test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面是一段很简单的代码，就一个段落，然后设置了一个颜色属性为红色。</p><p>那么，我们的这个段落真的就只有一个属性值 <em>color</em> 么？</p><p><em>no、no、no</em>，真实的情况是这个元素所有的属性都拥有，只不过有一组默认的属性值。例如：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-065854.png" alt="image-20210916145853445"></p><p>当我们打开浏览器控制台，来到 <em>Elements &gt; Computed</em> 面板，我们就会发现就算这么一个小小的 <em>p</em>，虽然我们只设置了一个 <em>color</em> 属性，但是其实它一个属性都没落下，每个属性都是有默认值。</p><p>所以这里我们要讨论一下这个属性值的计算过程是什么样子的。</p><p>总的来讲，属性值的计算方法有下面 <em>4</em> 种，这也是属性值的计算顺序：</p><ul><li>确定声明值</li><li>层叠冲突</li><li>使用继承</li><li>使用默认值</li></ul><p><strong>确定声明值</strong></p><p>当我们在样式表中对某一个元素书写样式声明时，这个声明就会被当作 <em>CSS</em> 的属性值。</p><p>举个例子：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的代码中，我们没有书写任何的 <em>CSS</em> 样式，所以这个时候就采用浏览器的默认样式</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-size</span><span class="token punctuation">:</span> 32px<span class="token punctuation">;</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>假设现在我们为这个 <em>h1</em> 设置一个样式：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这就是我们的作者样式，当作者样式和浏览器默认样式中的声明值有冲突时，会优先把作者样式中的声明值当作 <em>CSS</em> 的属性值。</p><p>而 <em>font-weight</em> 并没有和作者样式冲突，所以不受影响。</p><p><strong>层叠冲突</strong></p><p>当样式表声明值有冲突时，就会使用层叠规则来确定 <em>CSS</em> 的属性值</p><p>例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.test h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，两个选择器都选中了 <em>h1</em>，并且都设置了 <em>font-size</em> 属性值，同属于作者样式，这显然就属于层叠冲突了。</p><p>当发送层叠冲突时，这时就要根据选择器的权重值来计算究竟运用哪一条作者样式。</p><p>落败的作者样式在 <em>Elements&gt;Styles</em> 中会被划掉</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-16-071546.png" alt="image-20210916151546500" style="zoom:40%;"><p><strong>使用继承</strong></p><p>如果该条属性作者并没有设置，那么还不会着急去使用默认值，而是会去看一下能否继承到该属性值。例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>this is a test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们虽然没有在 <em>p</em> 段落上书写 <em>color</em> 属性，但是该属性能够从 <em>div</em> 上面继承而来，所以最终计算出来的值就是 <em>red</em></p><p><strong>使用默认值</strong></p><p>最终，如果没有作者样式，该属性值也无法继承而来，则会使用浏览器的默认样式。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>请简述 <em>CSS</em> 中属性的计算过程是怎样的</li></ul><blockquote><p>参考答案：</p><p>1.确定声明值：参考样式表中没有冲突的声明，作为 <em>CSS</em> 属性值</p><p>2.层叠冲突：对样式表有冲突的声明使用层叠规则，确定 <em>CSS</em> 属性值</p><p>3.使用继承：对仍然没有值的属性，若可以继承则继承父元素的值</p><p>4.使用默认值：对仍然没有值得属性，全部使用默认属性值</p></blockquote><p>-<em>EOF</em>-</p>`,45),l=[p];function c(i,o){return n(),a("div",null,l)}const d=s(t,[["render",c],["__file","07-CSSshuxingdejisuanguocheng.html.vue"]]);export{d as default};
