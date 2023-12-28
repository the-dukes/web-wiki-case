import{_ as t,r as o,o as p,c,b as s,d as n,e as l,a}from"./app-bb81f29b.js";const i={},u=a(`<h1 id="let、var、const-的区别" tabindex="-1"><a class="header-anchor" href="#let、var、const-的区别" aria-hidden="true">#</a> <em>let、var、const</em> 的区别</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li><em>let const var</em> 的区别？什么是块级作用域？如何用？</li></ul><h2 id="声明变量关键字汇总" tabindex="-1"><a class="header-anchor" href="#声明变量关键字汇总" aria-hidden="true">#</a> 声明变量关键字汇总</h2><p>在 <em>JavaScript</em> 中，一共存在 <em>3</em> 种声明变量的方式：</p><ul><li><em>var</em></li><li><em>let</em></li><li><em>const</em></li></ul><p>之所以有 <em>3</em> 种方式，这是由于历史原因造成的。最初声明变量的关键字就是 <em>var</em>，但是为了解决作用域的问题，所以后面新增了 <em>let</em> 和 <em>const</em> 的方式。</p><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><p>首先我们来了解一下作用域。</p><p><em>ES5</em> 中的作用域有：全局作用域、函数作用域，<em>ES6</em> 中新增了块级作用域。块作用域由 { } 包括，<em>if</em> 语句和 <em>for</em> 语句里面的 { } 也属于块作用域。</p><p>关于作用域的更多内容，可以参阅《作用域和作用域链》章节。</p><h3 id="var-关键字" tabindex="-1"><a class="header-anchor" href="#var-关键字" aria-hidden="true">#</a> <em>var</em> 关键字</h3><ol><li>没有块级作用域的概念</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Global Scope</span>
<span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，在 <em>Global Scope</em>（全局作用域）中，且在 <em>Block Scope</em>（块级作用域） { } 中，<em>a</em> 输出结果为 <em>10</em>，由此可以看出 <em>var</em> 声明的变量不存在 <em>Block Scope</em> 的概念</p><ol start="2"><li>有全局作用域、函数作用域的概念</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Global Scope</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//Local Scope</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//20</span>
<span class="token punctuation">}</span>
<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: b is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，在 <em>Global Scope</em> 中用 <em>var</em> 声明了 <em>a</em>，在 <em>checkscope</em> 函数中的 <em>Local Scope</em>（本地作用域、函数作用域）中打印出了 <em>10</em>，但是在 <em>Global Scope</em> 中打印的变量 <em>b</em> 报错了。</p><ol start="3"><li>不初始化值默认为 <em>undefined</em></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Global Scope</span>
<span class="token keyword">var</span> a<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，在 <em>Global Scope</em> 中用 <em>var</em> 声明了 <em>a</em>，但没有初始化值，它的值默认为 <em>undefined</em>，这里是 <em>undefined</em> 是 <em>undefined</em> 类型，而不是字符串。</p><ol start="4"><li>存在变量提升</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Global Scope</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//Local Scope</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>
  <span class="token keyword">var</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，先打印了 <em>a</em>，然后用 <em>var</em> 声明变量 <em>a</em>。变量提升是因为 <em>js</em> 需要经历编译和执行阶段。而 <em>js</em> 在编译阶段的时候，会搜集所有的变量声明并且提前声明变量。</p><p>可以将这个过程形象地想象成所有的声明（变量）都会被“移动”到各自作用域的最顶端，这个过程被称为提升。</p><p>至于 <em>checkscope</em> 函数中的变量 <em>a</em> 为什么输出 <em>undefined</em>，可以参阅《作用域和作用域链》章节。</p><ol start="5"><li>全局作用域用 <em>var</em> 声明的变量会挂载到 <em>window</em> 对象下</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Global Scope</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，打印出了 <em>3</em> 个 <em>10</em>，访问 <em>a</em> 和 <em>window.a</em> 或是 <em>this.a</em> 都是等价的。</p><p>举个例子：比如我要访问 <em>location</em> 对象，使用 <em>location</em> 可以访问，使用 <em>window.location</em> 也可以访问，只不过 <em>window</em> 对象可以省略不写，就像 <em>new Array( )</em> 和 <em>new window.Array( )</em> 是等价的。</p><ol start="6"><li>同一作用域中允许重复声明</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Global Scope</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//20</span>

<span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">checkscope</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//Local Scope</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//20</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，在 <em>Global Scope</em> 中声明了 <em>2</em> 次 <em>a</em>，以最后一次声明有效，打印为 <em>20</em>。同理，在 <em>Local Scope</em> 也是一样的。</p><h3 id="let-关键字" tabindex="-1"><a class="header-anchor" href="#let-关键字" aria-hidden="true">#</a> <em>let</em> 关键字</h3><ol><li>有块级作用域的概念</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，打印 <em>a</em> 报错，说明存在 <em>Block Scope</em> 的概念。</p><ol start="2"><li>不存在变量提升</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: Cannot access &#39;a&#39; before initialization</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，打印 <em>a</em> 报错：无法在初始化之前访问。说明不存在变量提升。</p><ol start="3"><li>暂时性死区</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: Cannot access &#39;a&#39; before initialization</span>
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//TDZ开始</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//ReferenceError: Cannot access &#39;a&#39; before initialization</span>

  <span class="token keyword">let</span> a<span class="token punctuation">;</span> <span class="token comment">//TDZ结束</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//undefined</span>

  a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//123</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，使用 <em>let</em> 声明的变量 <em>a</em>，导致绑定这个块级作用域，所以在 <em>let</em> 声明变量前，打印的变量 <em>a</em> 报错。</p><p>这是因为使用 <em>let/const</em> 所声明的变量会存在暂时性死区。</p><p>什么叫做暂时性死区域呢？</p>`,45),m=s("em",null,"ES6",-1),d=s("em",null,"let/const",-1),r={href:"https://link.segmentfault.com/?enc=K6pZVwgVNQb0IBQ9LTOuJg%3D%3D.p07UoPCGl5RslJ9ZnW9Nr36NFqs2pU%2FnSfWZUPIH3S1TUXzWdj22pH0lUMFVGVUwJkDpSHrYe8uKlYek%2FK4HBDYkJhc%2Fe2xiWo5V6teR%2BXY%3D",target:"_blank",rel:"noopener noreferrer"},k=a(`<blockquote><p><em>The variables are created when their containing Lexical Environment is instantiated but may not be accessed inany way until the variable’s LexicalBinding is evaluated.</em></p></blockquote><p>翻译成人话就是：</p><blockquote><p>当程序的控制流程在新的作用域（<em>module、function</em> 或 <em>block</em> 作用域）进行实例化时，在此作用域中用 <em>let/const</em> 声明的变量会先在作用域中被创建出来，但因此时还未进行词法绑定，所以是不能被访问的，如果访问就会抛出错误。因此，在这运行流程进入作用域创建变量，到变量可以被访问之间的这一段时间，就称之为暂时死区。</p></blockquote><p>再简单理解就是：</p><blockquote><p><em>ES6</em> 规定，<em>let/const</em> 命令会使区块形成封闭的作用域。若在声明之前使用变量，就会报错。 总之，在代码块内，使用 <em>let/const</em> 命令声明变量之前，该变量都是不可用的。 这在语法上，称为 <strong>“暂时性死区”</strong>（ <em>temporal dead zone</em>，简称 <strong><em>TDZ</em></strong>）。</p></blockquote><p>其实上面不存在变量提升的例子中，其实也是暂时性死区，因为它有暂时性死区的概念，所以它压根就不存在变量提升了。</p><ol start="4"><li>同一块作用域中不允许重复声明</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> <span class="token constant">A</span><span class="token punctuation">;</span> <span class="token comment">//SyntaxError: Identifier &#39;A&#39; has already been declared</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  <span class="token keyword">var</span> <span class="token constant">A</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span> <span class="token comment">//SyntaxError: Identifier &#39;A&#39; has already been declared</span>
<span class="token punctuation">}</span>
<span class="token punctuation">{</span>
  <span class="token comment">//Block Scope</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> <span class="token constant">A</span><span class="token punctuation">;</span> <span class="token comment">//SyntaxError: Identifier &#39;A&#39; has already been declared</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="const-关键字" tabindex="-1"><a class="header-anchor" href="#const-关键字" aria-hidden="true">#</a> <em>const</em> 关键字</h3><ol><li>必须立即初始化，不能留到以后赋值</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Block Scope</span>
<span class="token keyword">const</span> a<span class="token punctuation">;</span> <span class="token comment">// SyntaxError: Missing initializer in const declaration }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，用 <em>const</em> 声明的变量 <em>a</em> 没有进行初始化，所以报错。</p><ol start="2"><li>常量的值不能改变</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//Block Scope</span>
<span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  a <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Assignment to constant variable</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，用 <em>const</em> 声明了变量 <em>a</em> 且初始化为 <em>10</em>，然后试图修改 <em>a</em> 的值，报错。</p><p><em>const</em> 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。</p><h3 id="特点总结" tabindex="-1"><a class="header-anchor" href="#特点总结" aria-hidden="true">#</a> 特点总结</h3><ul><li><em>var</em> 关键字</li></ul><ol><li>没有块级作用域的概念</li><li>有全局作用域、函数作用域的概念</li><li>不初始化值默认为 <em>undefined</em></li><li>存在变量提升</li><li>全局作用域用 <em>var</em> 声明的变量会挂载到 <em>window</em> 对象下</li><li>同一作用域中允许重复声明</li></ol><ul><li><em>let</em> 关键字</li></ul><ol><li>有块级作用域的概念</li><li>不存在变量提升</li><li>暂时性死区</li><li>同一块作用域中不允许重复声明</li></ol><ul><li><em>const</em> 关键字</li></ul><ol><li>与 <em>let</em> 特性一样，仅有 <em>2</em> 个差别</li><li>区别 1：必须立即初始化，不能留到以后赋值</li><li>区别 2：常量的值不能改变</li></ol><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li><em>let const var</em> 的区别？什么是块级作用域？如何用？</li></ul><blockquote><p>参考答案：</p><ol><li><em>var</em> 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问，有变量提升。</li><li><em>let</em> 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明。</li><li><em>const</em> 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改，无变量提升，不可以重复声明。</li></ol><p>最初在 <em>JS</em> 中作用域有：全局作用域、函数作用域。没有块作用域的概念。</p><p><em>ES6</em> 中新增了块级作用域。块作用域由 { } 包括，<em>if</em> 语句和 <em>for</em> 语句里面的 { } 也属于块作用域。</p><p>在以前没有块作用域的时候，在 <em>if</em> 或者 <em>for</em> 循环中声明的变量会泄露成全局变量，其次就是 { } 中的内层变量可能会覆盖外层变量。块级作用域的出现解决了这些问题。</p></blockquote><p>-<em>EOF</em>-</p>`,27);function v(b,h){const e=o("ExternalLinkIcon");return p(),c("div",null,[u,s("p",null,[m,n(" 标准中对 "),d,n(" 声明中的解释 "),s("a",r,[n("第 13 章"),l(e)]),n("，有如下一段文字：")]),k])}const g=t(i,[["render",v],["__file","01-let、var、constdequbie.html.vue"]]);export{g as default};
