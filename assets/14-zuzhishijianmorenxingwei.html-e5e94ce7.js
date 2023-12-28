import{_ as n,o as a,c as s,a as e}from"./app-bb81f29b.js";const t={},p=e(`<h1 id="阻止事件默认行为" tabindex="-1"><a class="header-anchor" href="#阻止事件默认行为" aria-hidden="true">#</a> 阻止事件默认行为</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>如何阻止默认事件？</li></ul><h2 id="什么是默认行为" tabindex="-1"><a class="header-anchor" href="#什么是默认行为" aria-hidden="true">#</a> 什么是默认行为</h2><p>所谓默认行为，一般是指 <em>HTML</em> 元素所自带的行为。例如点击一个 <em>a</em> 元素表示的是跳转：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度一下<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的代码中，设置了 <em>a</em> 元素的 <em>href</em> 属性指向百度，当用户点击该 <em>a</em> 元素时，就会跳转至百度。</p><p>在例如：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的代码中我们书写了一个 <em>form</em> 元素，该元素有一个 <em>action</em> 属性，指的是表单内容要提交的地址。而当用户点击表单元素中嵌套的提交按钮时，就会进行一个默认的提交操作。</p><p>这些，就是 <em>HTML</em> 元素中的默认行为。</p><p>但是有些时候，我们是不需要这些默认行为的，例如，用户在填写了一个表单后，提交信息时我们采用 <em>ajax</em> 来异步发送到服务器，此时就不需要表单 <em>form</em> 元素默认的提交跳转这个行为了。</p><p>所以此时，我们就需要阻止默认行为。</p><h2 id="阻止默认行为的方式汇总" tabindex="-1"><a class="header-anchor" href="#阻止默认行为的方式汇总" aria-hidden="true">#</a> 阻止默认行为的方式汇总</h2><p>下面我们来对阻止默认行为的方式进行一个总结。</p><p><strong>（1）<em>cancelable</em> 属性</strong></p><p>首先要介绍的是 <em>cancelable</em> 属性，该属性返回一个布尔值，表示事件是否可以取消。</p><p>该属性为只读属性。返回 <em>true</em> 时，表示可以取消。否则，表示不可取消。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.baidu.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>百度<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
test<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  test<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> event<span class="token punctuation">.</span>cancelable<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们为 <em>a</em> 元素绑定了一个点击事件，点击之后通过 <em>event</em> 对象的 <em>cancelable</em> 属性来查看该元素的默认行为是否能阻止。</p><p>最终返回的是 <em>true</em>，说明是能够阻止的。</p><p><strong>（2）<em>preventDefault</em> 方法</strong></p><p><em>preventDefault</em> 方法是 <em>DOM</em> 中最常见，也是最标准的取消浏览器默认行为的方式，无返回值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
test<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们仍然是通过 <em>event</em> 对象来调用的 <em>preventDefault</em> 方法，从而阻止了 <em>a</em> 元素的默认跳转行为。</p><p><strong>（3）<em>returnValue</em> 属性</strong></p><p>这种方式使用的人比较少，知道这种方式的人也比较少。</p><p>首先 <em>returnValue</em> 是一个 <em>event</em> 对象上面的属性。该属性可读可写，默认值是 <em>true</em>，将其设置为 <em>false</em> 就可以取消事件的默认行为，与 <em>preventDefault</em> 方法的作用相同。</p><p>该属性最早是在 <em>IE</em> 的事件对象中，实现了这种取消默认行为的方式，但是现在大多数浏览器都实现了该方式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
test<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（4）<em>return false</em></strong></p><p><em>return false</em> 是一条语句，该语句写在事件处理函数中也可以阻止默认行为。</p><p>但是需要注意的是，如果该条语句写在 <em>jQuery</em> 代码中，能够同时阻止默认行为和阻止冒泡，但是在原生 <em>JavaScript</em> 中只能阻止默认行为。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
test<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（5）<em>defaultPrevented</em> 方法</strong></p><p><em>defaultPrevented</em> 属性也是 <em>event</em> 对象上面的一个属性。该属性表示默认行为是否被阻止，返回 <em>true</em> 表示被阻止，返回 <em>false</em> 表示未被阻止。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> test <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
test<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 采用两种不同的方式来阻止浏览器默认行为，这是为了照顾其兼容性</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>preventDefault<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 将是否阻止默认行为的结果赋值给 &lt;a&gt; 标签的文本内容</span>
  test<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> event<span class="token punctuation">.</span>defaultPrevented<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们点击 <em>a</em> 元素时，使用 <em>preventDefault</em> 方法阻止了浏览器默认行为。</p><p>之后访问 <em>event.defaultPrevented</em> 属性会得到 <em>true</em>，说明默认行为已经被阻止。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>如何阻止默认事件？</li></ul><blockquote><p>参考答案：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 方法一：全支持</span>
event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 方法二：该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。</span>
event<span class="token punctuation">.</span>returnValue <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">// 方法三：不建议滥用，jQuery 中可以同时阻止冒泡和默认事件</span>
<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>-<em>EOF</em>-</p>`,44),c=[p];function o(l,u){return a(),s("div",null,c)}const r=n(t,[["render",o],["__file","14-zuzhishijianmorenxingwei.html.vue"]]);export{r as default};
