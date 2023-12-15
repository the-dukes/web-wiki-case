import{_ as n,o as a,c as s,a as t}from"./app-7f983beb.js";const e={},i=t(`<h1 id="_04-用户交互核心—事件" tabindex="-1"><a class="header-anchor" href="#_04-用户交互核心—事件" aria-hidden="true">#</a> 04-用户交互核心—事件</h1><blockquote><p>在文档的开篇，提到了【渲染层】和【逻辑层】，关于这一部分知识我们会在后面第四章【小程序架构篇】进行介绍。</p></blockquote><p><strong>快速入门示例</strong></p><p>通过 bind + 事件类型，例如下面的 bindtap 就是绑定了一个 tap 类型的事件</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view class=&quot;test&quot; bindtap=&quot;tapHandle&quot;&gt;
  &lt;text class=&quot;abc&quot;&gt;this is a test&lt;/text&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来在 Page 构造函数中，书写对应的事件处理函数。</p><p>在事件处理函数中，会自动传入一个参数，该参数就是事件对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 事件处理函数</span>
  <span class="token comment">// 会自动传入一个参数，该参数为此次事件对应的事件对象</span>
  <span class="token function">tapHandle</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;你触发了点击事件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事件类型</strong></p><p>在上面的示例中，我们绑定的是一个 tap 事件，它是在点击的时候触发。</p><p>具体有的事情，如下表所示：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-11-020549.png" alt="image-20230111100549023" style="zoom:45%;"><p>更多的事件类型，请参阅官方文档：<em>https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=000846df9a03909b0086a50025180a</em></p><p>longtap 和 longpress 的区别在于，如果同时还绑定了 tap 事件，那么 longpress 并不会再次触发 tap 事件，而 longtap 则会再次触发 tap 事件。</p><p><strong>事件对象</strong></p><p>我们在前面的例子中，看到了事件对象会自动传入到事件处理函数。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-11-020834.png" alt="image-20230111100833539" style="zoom:50%;"><p>我们先来看 detail，这个可以获取一些额外的信息：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-11-021214.png" alt="image-20230111101214305" style="zoom:50%;"><p>target 和 currentTarget：</p><ul><li>currentTarget：为当前事件所绑定的组件</li><li>target：则是触发该事件的源头组件。</li></ul><p>示例如下：</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view class=&quot;outter&quot; bindtap=&quot;tapHandle2&quot; data-id=&quot;outter&quot;&gt;
  &lt;view class=&quot;innter&quot; data-id=&quot;innter&quot;&gt;&lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">tapHandle2</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;target: &quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;currentTarget: &quot;</span><span class="token punctuation">,</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-11-022258.png" alt="image-20230111102258282" style="zoom:50%;"><p><strong>事件冒泡以及阻止冒泡</strong></p><p>首先，在小程序中的事件，如果是采用的 bind 进行的绑定，会和 DOM 的事件流一样，有一个事件冒泡的行为：</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view class=&quot;outter&quot; bindtap=&quot;outtertap&quot; data-id=&quot;outter&quot;&gt;
  &lt;view class=&quot;innter&quot; data-id=&quot;innter&quot; bindtap=&quot;innertap&quot;&gt;&lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">outtertap</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;触发了 outter 事件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">innertap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;触发了 inner 事件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，如果我们针对 inner 进行点击，那么，事件会一直向上冒泡，outter 组件的 tap 事件也会触发。</p><p>可以通过 catch 来绑定事件，使用 catch 绑定的事件，不会向上冒泡。</p><p>示例如下：</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view class=&quot;outter&quot; bindtap=&quot;outtertap&quot; data-id=&quot;outter&quot;&gt;
  &lt;view class=&quot;middle&quot; catchtap=&quot;middletap&quot; data-id=&quot;middle&quot;&gt;
    &lt;view class=&quot;inner&quot; data-id=&quot;inner&quot; bindtap=&quot;innertap&quot;&gt;&lt;/view&gt;
  &lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">outtertap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;触发了 outter 事件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">middletap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;触发了 middle 事件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token function">innertap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;触发了 inner 事件&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，因为 inner 是使用 bind 来绑定的，所以会向上冒泡，触发 middle 的 tap 事件，但是 middle 绑定 tap 事件的时候，使用的是 catch 来绑定，catch 会阻止冒泡。</p><p><strong>事件捕获</strong></p><p>从基础哭 1.5.0 开始，bind 和事件类型之间可以加一个冒号</p><p>例如以前是 bindtap=&quot;事件处理函数&quot;，就可以写作 bind:tap=&quot;事件处理函数&quot;</p><p>如果想要使用事件捕获，可以通过 capture-bind 来绑定事件，示例代码如下：</p><div class="language-wxml line-numbers-mode" data-ext="wxml"><pre class="language-wxml"><code>&lt;view class=&quot;outter&quot; capture-bind:tap=&quot;outtertap&quot; data-id=&quot;outter&quot;&gt;
  &lt;view class=&quot;middle&quot; capture-bind:tap=&quot;middletap&quot; data-id=&quot;middle&quot;&gt;
    &lt;view class=&quot;inner&quot; data-id=&quot;inner&quot; capture-bind:tap=&quot;innertap&quot;&gt;&lt;/view&gt;
  &lt;/view&gt;
&lt;/view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这节课结束之后，请通读官方文档对应的：<em>https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=000846df9a03909b0086a50025180a</em></p>`,42),p=[i];function o(c,u){return a(),s("div",null,p)}const d=n(e,[["render",o],["__file","04-yonghujiaohuhexin—shijian.html.vue"]]);export{d as default};
