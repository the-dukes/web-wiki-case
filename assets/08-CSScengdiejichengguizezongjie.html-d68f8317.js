import{_ as e,o as n,c as a,a as s}from"./app-b21c52a4.js";const t={},i=s(`<h1 id="_08-css-层叠继承规则总结" tabindex="-1"><a class="header-anchor" href="#_08-css-层叠继承规则总结" aria-hidden="true">#</a> 08-CSS 层叠继承规则总结</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>请简述一下 <em>CSS</em> 中的层叠规则</li></ul><h2 id="css-中的层叠继承规则" tabindex="-1"><a class="header-anchor" href="#css-中的层叠继承规则" aria-hidden="true">#</a> <em>CSS</em> 中的层叠继承规则</h2><p>在前面《<em>CSS</em>属性的计算过程》中，我们介绍了每一个元素都有都有所有的属性，每一个属性都会通过一系列的计算过程得到最终的值。</p><p>这里来回顾一下计算过程，大致有以下几个步骤：</p><ul><li>确定声明值</li><li>层叠冲突</li><li>使用继承</li><li>使用默认值</li></ul><p>其中的第二步和第三步层叠和继承会有一些需要注意的知识点，这里我们一起来看一下。</p><h2 id="层叠规则" tabindex="-1"><a class="header-anchor" href="#层叠规则" aria-hidden="true">#</a> 层叠规则</h2><p><em>CSS</em> 是 <em>Cascading Style Sheets</em> 的缩写，这暗示层叠（<em>cascade</em>）的概念是很重要的。</p><p>在最基本的层面上，它表明 <em>CSS</em> 规则的顺序很重要，但它比那更复杂。</p><p>什么选择器在层叠中胜出取决于三个因素（这些都是按重量级顺序排列的，前面的的一种会否决后一种）：</p><ul><li>重要性（<em>Importance</em>）</li><li>专用性（<em>Specificity</em>）</li><li>源代码次序（<em>Source order</em>）</li></ul><h3 id="重要性" tabindex="-1"><a class="header-anchor" href="#重要性" aria-hidden="true">#</a> 重要性</h3><p>在 <em>CSS</em> 中，有一个特别的语法可以让一条规则总是优先于其他规则： <em>!important</em> 。</p><p>知道 <em>!important</em> 存在是很有用的，这样当你在别人的代码中遇到它时，你就知道它是什么了。</p><p>但是！建议你千万不要使用它，除非你绝对必须使用它。您可能不得不使用它的一种情况是，当您在修改某个组件样式时，你不能编辑该组件核心的 <em>CSS</em> 模块，又或者你确实想要重写一种不能以其他方式覆盖的样式。</p><p>但是，如果你能避免的话，不要使用它。由于 <em>!important</em> 改变了层叠正常工作的方式，因此调试 <em>CSS</em> 问题，尤其是在大型样式表中，会变得非常困难。</p><h3 id="专用性" tabindex="-1"><a class="header-anchor" href="#专用性" aria-hidden="true">#</a> 专用性</h3><p>专用性基本上是衡量选择器的具体程度的一种方法，主要是指它能匹配多少元素。</p><p>元素选择器具有很低的专用性。类选择器具有更高的专用性，所以将战胜元素选择器。<em>ID</em> 选择器有甚至更高的专用性, 所以将战胜类选择器，战胜 <em>ID</em> 选择器的方法则是 <em>style</em> 中的样式或者 <em>!important</em>。</p><p>一个选择器具有的专用性的量可以用四种不同的值（或组件）来衡量的，它们可以被认为是千位，百位，十位和个位，在四个列中的四个简单数字：</p><ul><li>千位：如果声明是在 <em>style</em> 属性中该列加 <em>1</em> 分（这样的声明没有选择器，所以它们的专用性总是 <em>1000</em>）否则为 <em>0</em>。</li><li>百位：在整个选择器中每包含一个 <em>ID</em> 选择器就在该列中加 <em>1</em> 分。</li><li>十位：在整个选择器中每包含一个类选择器、属性选择器、或者伪类就在该列中加 <em>1</em> 分。</li><li>个位：在整个选择器中每包含一个元素选择器或伪元素就在该列中加 <em>1</em> 分。</li></ul><blockquote><p>注：通用选择器（*）, 复合选择器（+、&gt;、~、空格）和否定伪类（:not）在专用性中无影响。</p></blockquote><p>举个例子：</p><table><thead><tr><th><strong>选择器</strong></th><th>千位</th><th>百位</th><th>十位</th><th>个位</th><th>合计值</th></tr></thead><tbody><tr><td>h1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0001</td></tr><tr><td>#indentifier</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0100</td></tr><tr><td>h1 + p::first-letter</td><td>0</td><td>0</td><td>0</td><td>3</td><td>0003</td></tr><tr><td>li &gt; a[href*=” zh-CN”] &gt; .inline-warning</td><td>0</td><td>0</td><td>2</td><td>2</td><td>0022</td></tr><tr><td>没有选择器, 规则在一个元素的 <em>style</em> 属性里</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1000</td></tr></tbody></table><h3 id="源代码次序" tabindex="-1"><a class="header-anchor" href="#源代码次序" aria-hidden="true">#</a> 源代码次序</h3><p>如果多个相互竞争的选择器具有相同的重要性和专用性，那么第三个因素将帮助决定哪一个规则获胜，也就是说，选择哪一个选择器取决于源码顺序。</p><p>例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过有一点大家需要注意的是，当多个 <em>CSS</em> 规则匹配相同的元素时，它们都被应用到该元素中。只不过后面因为层叠规则被层叠掉了而已。打开 <em>Elements &gt; Styles</em> 我们就能看到：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-18-014022.png" alt="image-20210918094021662" style="zoom:50%;"><h2 id="继承规则" tabindex="-1"><a class="header-anchor" href="#继承规则" aria-hidden="true">#</a> 继承规则</h2><p>所谓继承，就是应用于某个元素的一些属性值将由该元素的子元素继承，而有些则不会。</p><p>究竟哪些属性能够被子元素继承，可以参阅：<em>https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference</em></p><p><em>CSS</em> 为处理继承提供了四种特殊的通用属性值：</p><ul><li><em>inherit</em>：该值将应用到选定元素的属性值设置为与其父元素一样。</li><li><em>initial</em>：该值将应用到选定元素的属性值设置为与浏览器默认样式表中该元素设置的值一样。如果浏览器默认样式表中没有设置值，并且该属性是自然继承的，那么该属性值就被设置为 <em>inherit</em>。</li><li><em>unset</em>：该值将属性重置为其自然值，即如果属性是自然继承的，那么它就表现得像 <em>inherit</em>，否则就是表现得像 <em>initial</em>。</li><li><em>revert</em>：如果当前的节点没有应用任何样式，则将该属性恢复到它所拥有的值。换句话说，属性值被设置成自定义样式所定义的属性（如果被设置）， 否则属性值被设置成用户代理的默认样式。</li></ul><blockquote><p>注： <em>initial</em> 和 <em>unset</em> 不被 <em>IE</em> 支持。</p></blockquote><p><strong>继承的就近原则</strong></p><p>由于属性值是由继承而来，所以属性值会继承离自己近的那个元素的属性。例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Lorem ipsum dolor sit amet.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.two</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.one</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，<em>two</em> 比 <em>one</em> 更加接近 <em>p</em>，所以最终采用的是 <em>two</em> 的 <em>color</em> 值。段落呈现蓝色。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>请简述一下 <em>CSS</em> 中的层叠规则</li></ul><blockquote><p>参考答案：</p><p><em>CSS</em> 中当属性值发生冲突时，通过层叠规则来计算出最终的属性值，层叠规则可以分为 <em>3</em> 块：</p><ul><li>重要性（<em>Importance</em>）：<em>!important</em> 设置该条属性值最重要，但是一般不推荐使用。</li><li>专用性（<em>Specificity</em>）：专用性主要是指它能匹配多少元素，匹配得越少专用性越高。</li><li>源代码次序（<em>Source order</em>）：在重要性和专用性都一致的情况下，属性值取决于源代码的先后顺序。</li></ul></blockquote><p>-<em>EOF</em>-</p>`,47),p=[i];function l(c,d){return n(),a("div",null,p)}const m=e(t,[["render",l],["__file","08-CSScengdiejichengguizezongjie.html.vue"]]);export{m as default};
