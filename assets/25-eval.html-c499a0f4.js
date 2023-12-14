import{_ as n,o as a,c as s,a as e}from"./app-d6eaa58c.js";const t={},p=e(`<h1 id="eval" tabindex="-1"><a class="header-anchor" href="#eval" aria-hidden="true">#</a> <em>eval</em></h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li><em>JavaScript</em> 中的 <em>eval</em> 方法是啥？一般什么场景下使用？</li></ul><h2 id="关于-eval-你所需要知道的内容" tabindex="-1"><a class="header-anchor" href="#关于-eval-你所需要知道的内容" aria-hidden="true">#</a> 关于 <em>eval</em> 你所需要知道的内容</h2><h3 id="eval-的基本用法" tabindex="-1"><a class="header-anchor" href="#eval-的基本用法" aria-hidden="true">#</a> <em>eval</em> 的基本用法</h3><p>首先我们来看一下 <em>eval( )</em> 函数的基本用法。</p><p><em>eval( )</em> 函数接收一个字符串作为参数，该字符串一个表示 <em>JavaScript</em> 表达式、语句或一系列语句的字符串。表达式可以包含变量与已存在对象的属性。</p><p>示例如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;console.log(&quot;Hello!&quot;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello!</span>

<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    var a = 1;
    var b = 2;
    if(a &gt; b) {
        console.log(&#39;a &gt; b&#39;);
    } else {
        console.log(&#39;a&lt;b&#39;);
    }
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token function">eval</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a&lt;b</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4（ number 类型 ）</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [String: &#39;Hello&#39;]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码我们可以发现，<em>eval( )</em> 会将传入的字符串作为 <em>JavaScript</em> 来进行执行。</p><p>如果 <em>eval( )</em> 的参数不是字符串， <em>eval( )</em> 会将参数原封不动地返回。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果传入的字符串不是 <em>JavaScript</em> 代码，那么也会将此字符串原封不动的返回。例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Hello <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eval-作用域" tabindex="-1"><a class="header-anchor" href="#eval-作用域" aria-hidden="true">#</a> <em>eval</em> 作用域</h3><p><em>eval</em> 里面的代码在当前词法环境中执行，因此它可以看到外部变量：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;console.log(a)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它也可以改变外部变量：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;x = 10&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10, value modified</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在严格模式下， <em>eval</em> 有自己的词法环境。因此，在 <em>eval</em> 内部声明的函数和变量在外部不可见：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;let x = 5; function f() {}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined (no such variable)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有 <em>use strict</em>，<em>eval</em> 没有自己的词法环境，所以我们会在外面看到 <em>x</em> 和 <em>f</em> :</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;var x = 5; function f() {}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="永远不要使用-eval" tabindex="-1"><a class="header-anchor" href="#永远不要使用-eval" aria-hidden="true">#</a> 永远不要使用 <em>eval</em></h3><p>明白了 <em>eval( )</em> 函数的基本用法后，你心里一定会有这么一个疑问，那就是这玩意儿用来干嘛？</p><p>在现代编程中，<em>eval</em> 的使用非常谨慎。人们常说“ <em>eval is evil（eval 是邪恶的）</em> ”。</p><p>原因很简单：很久很久以前，<em>JavaScript</em> 是一种弱得多的语言，很多事情只能用 <em>eval</em> 来完成。但那段时间已经过去十年了。</p><p>现在，几乎没有理由使用 <em>eval</em>。如果有人使用了它，那么一个更好的选择是用现代语言结构或 <em>JavaScript</em> 模块替换它。</p><p>总结起来，有如下的理由让我们不要使用 <em>eval</em>：</p><ul><li><em>eval</em> 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果你用 <em>eval</em> 运行的字符串代码被恶意方（不怀好意的人）修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。（不安全）</li><li><em>eval</em> 通常比其他替代方法更慢，因为它必须调用 <em>JS</em> 解释器，而许多其他结构则可被现代 <em>JS</em> 引擎进行优化。使用 <em>eval</em> 往往比普通 <em>JavaScript</em> 代码慢几个数量级。（性能不好）</li><li>产生混乱的代码逻辑</li></ul><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li><em>JavaScript</em> 中的 <em>eval</em> 方法是啥？一般什么场景下使用？</li></ul><blockquote><p>参考答案：</p><p><em>eval</em> 是 <em>JavaScript</em> 中的一个全局函数，它将指定的字符串计算为 <em>JavaScript</em> 代码并执行它。</p><p>在现代 <em>JavaScript</em> 编程中，我们应该尽量避免使用 <em>eval</em>，之前所有使用 <em>eval</em> 的地方都有更好的方式来进行代替，所以在现代 <em>JavaScript</em> 编程中，<em>eval</em> 没有什么使用场景存在，也就是说，并不存在某些场景必须要使用 <em>eval</em> 才能实现的。</p></blockquote><p>-<em>EOF</em>-</p>`,34),c=[p];function l(o,i){return a(),s("div",null,c)}const r=n(t,[["render",l],["__file","25-eval.html.vue"]]);export{r as default};
