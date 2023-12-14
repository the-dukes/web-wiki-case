import{_ as n,o as s,c as a,a as e}from"./app-72013311.js";const t={},p=e(`<h1 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li><em>use strict</em> 是什么意思 ? 使用它区别是什么？</li></ul><h2 id="什么是严格模式" tabindex="-1"><a class="header-anchor" href="#什么是严格模式" aria-hidden="true">#</a> 什么是严格模式</h2><p>严格模式是从 <em>ES5</em> 开始新增的一种方式，是采用具有限制性 <em>JavaScript</em> 变体的一种方式，从而使代码隐式地脱离“马虎模式/稀松模式/懒散模式“（<em>sloppy</em>）模式。</p><p>设立&quot;严格模式&quot;的目的，主要有以下几个：</p><ul><li>消除 <em>Javascript</em> 语法的一些不合理、不严谨之处，减少一些怪异行为;</li><li>消除代码运行的一些不安全之处，保证代码运行的安全；</li><li>提高编译器效率，增加运行速度；</li><li>为未来新版本的 <em>Javascript</em> 做好铺垫。</li></ul><p>“严格模式”体现了 <em>Javascript</em> 更合理、更安全、更严谨的发展方向，支持严格模式的浏览器有：<em>Internet Explorer 10 +、 Firefox 4+ Chrome 13+、 Safari 5.1+、 Opera 12+</em>。</p><p>在“严格模式下”，同样的代码，可能会有不一样的运行结果。一些在“正常模式”下可以运行的语句，在“严格模式”下将不能运行。</p><p>掌握这些内容，有助于更细致深入地理解 <em>Javascript</em>，让你变成一个更好的程序员。</p><h2 id="开启严格模式" tabindex="-1"><a class="header-anchor" href="#开启严格模式" aria-hidden="true">#</a> 开启严格模式</h2><p>进入“严格模式”的标志，是下面这行语句：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>老版本的浏览器会把它当作一行普通字符串，加以忽略。</p><p>“严格模式”有两种调用方法，适用于不同的场合。</p><p><strong>针对整个脚本文件</strong></p><p>将 <em>“use strict”</em> 放在脚本文件的第一行，则整个脚本都将以“严格模式”运行。</p><p>如果这行语句不在第一行，则无效，整个脚本以“正常模式”运行。如果不同模式的代码文件合并成一个文件，这一点需要特别注意。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是严格模式。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们第一行书写了 <em>“use strict”</em>，所以整个代码会进入到严格模式执行。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是严格模式。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;这是正常模式。&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码表示，一个网页中依次有两段 <em>Javascript</em> 代码。前一个 <em>script</em> 标签是严格模式，后一个不是。</p><p><strong>针对单个函数</strong></p><p>将 <em>“use strict”</em> 放在函数体的第一行，则整个函数以“严格模式”运行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">strict</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&#39;这是严格模式。&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">notStrict</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;这是正常模式。&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>脚本文件的变通写法</strong></p><p>因为第一种调用方法不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数之中。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">// some code here</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="严格模式和普通模式区别" tabindex="-1"><a class="header-anchor" href="#严格模式和普通模式区别" aria-hidden="true">#</a> 严格模式和普通模式区别</h2><p>接下来，我们就来看一下严格模式下对 <em>Javascript</em> 的语法和行为，都做了哪些改变。</p><p><strong>没有使用 <em>var</em> 声明的变量不能使用</strong></p><p>在普通模式下，我们可以使用一个未声明的变量，此时该变量会成为一个全局变量。但是这种使用方式在严格模式下会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// ReferenceError: a is not defined</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除变量和不存在的属性会报错</strong></p><p>在普通模式下，删除变量或者不允许删除的属性虽然也会失败，但是是“静默失败”，也就是说虽然失败了，但是不会给出任何提示。这样其实会产生很多隐藏问题，也给程序员的调错带来了难度。</p><p>在严格模式下则会保存，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> i<span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Delete of an unqualified identifier in strict mode.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数中相同的形参名会报错</strong></p><p>在普通模式下，函数中两个形参名相同也不会报错，只不过后面的形参所接收到的值会覆盖前面的同名形参。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是在严格模式下，相同的形参名会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: Duplicate parameter name not allowed in this context</span>
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对象不能有重名的属性</strong></p><p>正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 语法错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>禁止八进制表示法</strong></p><p>正常模式下，整数的第一位如果是 <em>0</em>，表示这是八进制数，比如 <em>010</em> 等于十进制的 <em>8</em>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">010</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>严格模式禁止这种表示法，整数第一位为 <em>0</em>，将报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">010</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Octal literals are not allowed in strict mode.</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>函数内部 <em>this</em> 值为 <em>undefined</em></strong></p><p>在普通模式下，函数中的 <em>this</em> 在以函数的形式被调用时，指向全局对象。而在严格模式中，得到的值为 <em>undefined</em>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
<span class="token punctuation">}</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创设 <em>eval</em> 作用域</strong></p><p>正常模式下，<em>Javascript</em> 语言有两种变量作用域（<em>scope</em>）：全局作用域和函数作用域。</p><p>严格模式创设了第三种作用域：<em>eval</em> 作用域。</p><p>正常模式下，<em>eval</em> 语句的作用域，取决于它处于全局作用域，还是处于函数作用域。</p><p>严格模式下，<em>eval</em> 语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于 <em>eval</em> 内部。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;var x = 5; x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>
console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>保留字</strong></p><p>为了向将来 <em>Javascript</em> 的新版本过渡，严格模式新增了一些保留字：<em>implements, interface, let, package, private, protected, public, static, yield</em>。使用这些词作为变量名将会报错。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token keyword">public</span> <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span><span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Unexpected strict mode reserved word</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">public</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于严格模式的内容，可以参阅 ：</p><p><em>MDN</em>：<em>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode</em></p><p>《<em>Javascript</em> 严格模式详解 <em>By</em> 阮一峰》：<em>http://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html</em></p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li><em>use strict</em> 是什么意思 ? 使用它区别是什么？</li></ul><blockquote><p>参考答案：</p><p><em>use strict</em> 代表开启严格模式，这种模式使得 <em>Javascript</em> 在更严格的条件下运行，实行更严格解析和错误处理。</p><p>开启“严格模式”的优点：</p><ul><li>消除 <em>Javascript</em> 语法的一些不合理、不严谨之处，减少一些怪异行为;</li><li>消除代码运行的一些不安全之处，保证代码运行的安全；</li><li>提高编译器效率，增加运行速度；</li><li>为未来新版本的 <em>Javascript</em> 做好铺垫。</li></ul><p>回答一些具体的严格模式下和普通模式之间的区别。</p></blockquote><p>-<em>EOF</em>-</p>`,69),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","19-yangemoshi.html.vue"]]);export{r as default};
