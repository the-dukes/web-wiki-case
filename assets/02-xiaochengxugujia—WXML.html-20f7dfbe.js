import{_ as e,o as a,c as s,b as t,t as l,a as n}from"./app-bb81f29b.js";const i={},p=n(`<h1 id="_02-小程序的骨架—wxml" tabindex="-1"><a class="header-anchor" href="#_02-小程序的骨架—wxml" aria-hidden="true">#</a> 02-小程序的骨架—WXML</h1><h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2><p>基本语法和 vue 非常的类似：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token comment">// 获取应用实例</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view&gt;
  &lt;text&gt;我的名字是：{{name}}&lt;/text&gt;
&lt;/view&gt;
&lt;view&gt;
  &lt;text&gt;当前时间：{{time}}&lt;/text&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>undefined 值不会被输出到 wxml 中</p>`,6),d=n(`<p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>text<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> <span class="token string">&quot;Hello&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>text<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>text<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> a <span class="token operator">+</span> b <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>text<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="条件逻辑" tabindex="-1"><a class="header-anchor" href="#条件逻辑" aria-hidden="true">#</a> 条件逻辑</h2><p>基本上也就是和 vue 是相同的，只不过需要注意语法上面的区别。</p><ul><li>wx:if</li><li>wx:elif</li><li>wx:else</li></ul><p>例如：</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view wx:if=&quot;{{age &gt; 18}}&quot;&gt;
  &lt;text&gt;可以进入网吧&lt;/text&gt;
&lt;/view&gt;
&lt;view wx:elif=&quot;{{ age===18 }}&quot;&gt;
  &lt;text&gt;刚好到能够进入网吧的年龄&lt;/text&gt;
&lt;/view&gt;
&lt;view wx:else&gt;
  &lt;text&gt;不能进入网吧&lt;/text&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>block 有点类似于 vue 里面的 tempalte，表示要渲染的一整块内容。</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;block wx:if=&quot;{{age&gt;18}}&quot;&gt;
  &lt;view&gt;
    &lt;text&gt;{{ a &gt; b ? &quot;Hello&quot; : &quot;world&quot;}}&lt;/text&gt;
    &lt;text&gt;{{ a + b }}&lt;/text&gt;
  &lt;/view&gt;
  &lt;view&gt;
    &lt;text&gt;当前时间：{{time}}&lt;/text&gt;
  &lt;/view&gt;
&lt;/block&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2><p>基本上也是和 vue 是相同的，使用的是 wx:for</p><p>相比 v-for，在 wx:for 中已经将下标和迭代的元素变量默认确定好了，下标对应的是 index，迭代的每一项为 item</p><p>例如：</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view wx:for=&quot;{{fruits}}&quot; wx:key=&quot;index&quot;&gt;
  &lt;text&gt;{{index}}&lt;/text&gt; - &lt;text&gt;{{item}}&lt;/text&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">fruits</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;苹果&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;香蕉&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;哈密瓜&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，在进行列表渲染的时候，和 v-for 一样，也是需要添加 key，通过 wx:key</p><h2 id="定义模板和引入模板" tabindex="-1"><a class="header-anchor" href="#定义模板和引入模板" aria-hidden="true">#</a> 定义模板和引入模板</h2><p>定义模板通过 template，使用 name 来设置模板的名称，模板中可以使用猫须语法接收动态的数据</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;template name=&quot;msgItem&quot;&gt;
  &lt;view&gt;
    &lt;text&gt;{{index}} : {{ msg }}&lt;/text&gt;
    &lt;view&gt;Time : {{ time }}&lt;/view&gt;
  &lt;/view&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入模板的时候，可以使用 import 和 include</p><p>例如下面是使用 import 来引入模板</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;import src=&quot;../../templates/msgItem&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在使用的时候通过 is 属性来指定模板的名称，并且通过 data 属性来传入模板所需要的数据</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;template is=&quot;msgItem&quot; data=&quot;{{index : 1, msg: &#39;你好&#39;, time:&#39;2023.1.10&#39;}}&quot;&gt;&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意，在使用 import 引入模板的时候，有一个作用域相关的问题，详细请参阅文档。</p></blockquote><p>还可以 include 来引入模板，这种方式一般适用于静态模板，做的实际上就是一个简单的替换操作。</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view&gt;
  &lt;text&gt;这是一个头部&lt;/text&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view&gt;
  &lt;text&gt;这是一个页尾&lt;/text&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;include src=&quot;../../templates/header&quot;/&gt;

// ....

&lt;include src=&quot;../../templates/footer&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个 wxml 并不难，如果你有 vue 的编程经验，那么上手会更加轻松。</p><p>更多关于 wxml 的内容，请参阅：<em>https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=000ee2c29d4f805b0086a37a254c0a</em></p>`,31);function o(c,r){return a(),s("div",null,[p,t("p",null,"在猫须语法中（ "+l()+" ），是支持表达式的，这一点和 vue 也是相同的",1),d])}const v=e(i,[["render",o],["__file","02-xiaochengxugujia—WXML.html.vue"]]);export{v as default};
