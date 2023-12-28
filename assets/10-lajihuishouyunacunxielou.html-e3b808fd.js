import{_ as n,o as a,c as s,a as e}from"./app-bb81f29b.js";const p={},t=e(`<h1 id="垃圾回收与内存泄漏" tabindex="-1"><a class="header-anchor" href="#垃圾回收与内存泄漏" aria-hidden="true">#</a> 垃圾回收与内存泄漏</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>请介绍一下 <em>JavaScript</em> 中的垃圾回收站机制</li></ul><h2 id="什么是内存泄露" tabindex="-1"><a class="header-anchor" href="#什么是内存泄露" aria-hidden="true">#</a> 什么是内存泄露</h2><p>程序的运行需要内存。只要程序提出要求，操作系统或者运行时（<em>runtime</em>）就必须供给内存。</p><p>对于持续运行的服务进程（<em>daemon</em>），必须及时释放不再用到的内存。否则，内存占用越来越高，轻则影响系统性能，重则导致进程崩溃。</p><p>也就是说，不再用到的内存，如果没有及时释放，就叫做内存泄漏（<em>memory leak</em>）。</p><h2 id="javascript-中的垃圾回收" tabindex="-1"><a class="header-anchor" href="#javascript-中的垃圾回收" aria-hidden="true">#</a> <em>JavaScript</em> 中的垃圾回收</h2><p>浏览器的 <em>Javascript</em> 具有自动垃圾回收机制（<em>GC</em>：<em>Garbage Collecation</em>），也就是说，执行环境会负责管理代码执行过程中使用的内存。其原理是：<strong>垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存</strong>。</p><p>但是这个过程不是实时的，因为其开销比较大并且 <em>GC</em> 时停止响应其他操作，所以垃圾回收器会按照固定的时间间隔周期性的执行。</p><p>不再使用的变量也就是生命周期结束的变量，当然只可能是局部变量，全局变量的生命周期直至浏览器卸载页面才会结束。局部变量只在函数的执行过程中存在，而在这个过程中会为局部变量在栈或堆上分配相应的空间，以存储它们的值，然后在函数中使用这些变量，直至函数结束，而闭包中由于内部函数的原因，外部函数并不能算是结束。</p><p>下面是一段示例代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们首先声明了两个函数，分别叫做 <em>fn1</em> 和 <em>fn2</em>。</p><p>当 <em>fn1</em> 被调用时，进入 <em>fn1</em> 的环境，会开辟一块内存存放对象 <em>{name: &#39;zhangsan&#39;, age: 10}</em>。而当调用结束后，出了 <em>fn1</em> 的环境，那么该块内存会被 <em>JavaScript</em> 引擎中的垃圾回收器自动释放；</p><p>在 <em>fn2</em> 被调用的过程中，返回的对象被全局变量 <em>b</em> 所指向，所以该块内存并不会被释放。</p><p>这里问题就出现了：到底哪个变量是没有用的？</p><p>所以垃圾收集器必须跟踪到底哪个变量没用，对于不再有用的变量打上标记，以备将来收回其内存。</p><p>用于标记的无用变量的策略可能因实现而有所区别，通常情况下有两种实现方式：<strong>标记清除</strong>和<strong>引用计数</strong>。</p><p>引用计数不太常用，标记清除较为常用。</p><h2 id="标记清除" tabindex="-1"><a class="header-anchor" href="#标记清除" aria-hidden="true">#</a> 标记清除</h2><p><em>JavaScript</em> 中最常用的垃圾回收方式就是标记清除。</p><p>当变量进入环境时，例如，在函数中声明一个变量，就将这个变量标记为“进入环境”。</p><p>从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。</p><p>而当变量离开环境时，则将其标记为“离开环境”。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 被标记 ，进入环境</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 被标记 ，进入环境</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行完毕 之后 a、b 又被标离开环境，被回收。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>垃圾回收器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。</p><p>然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。</p><p>最后，垃圾回收器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。</p><p>到目前为止，<em>IE9+、Firefox、Opera、Chrome、Safari</em> 的 <em>JS</em> 实现使用的都是标记清除的垃圾回收策略或类似的策略，只不过垃圾收集的时间间隔互不相同。</p><h2 id="引用计数" tabindex="-1"><a class="header-anchor" href="#引用计数" aria-hidden="true">#</a> 引用计数</h2><p>引用计数的含义是跟踪记录每个值被引用的次数。</p><p>当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是 <em>1</em>。如果同一个值又被赋给另一个变量，则该值的引用次数加 <em>1</em>。</p><p>相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 <em>1</em>。当这个值的引用次数变成 <em>0</em> 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。</p><p>这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为 <em>0</em> 的值所占用的内存。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// a 指向对象的引用次数为 1</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// a 指向对象的引用次数加 1，为 2</span>
  <span class="token keyword">var</span> c <span class="token operator">=</span> a<span class="token punctuation">;</span> <span class="token comment">// a 指向对象的引用次数再加 1，为 3</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// a 指向对象的引用次数减 1，为 2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Netscape Navigator3</em> 是最早使用引用计数策略的浏览器，但很快它就遇到一个严重的问题：<strong>循环引用</strong>。</p><p>循环引用指的是对象 <em>A</em> 中包含一个指向对象 B 的指针，而对象 <em>B</em> 中也包含一个指向对象 <em>A</em> 的引用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  a<span class="token punctuation">.</span>pro <span class="token operator">=</span> b<span class="token punctuation">;</span>
  b<span class="token punctuation">.</span>pro <span class="token operator">=</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码 <em>a</em> 和 <em>b</em> 的引用次数都是 <em>2</em>，<em>fn</em> 执行完毕后，两个对象都已经离开环境，在标记清除方式下是没有问题的，但是在引用计数策略下，因为 <em>a</em> 和 <em>b</em> 的引用次数不为 <em>0</em>，所以不会被垃圾回收器回收内存，如果 <em>fn</em> 函数被大量调用，就会造成内存泄露。在 <em>IE7</em> 与 <em>IE8</em> 上，内存直线上升。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>请介绍一下 <em>JavaScript</em> 中的垃圾回收站机制</li></ul><blockquote><p>参考答案：</p><p><em>JavaScript</em> 具有自动垃圾回收机制。垃圾收集器会按照固定的时间间隔周期性的执行。</p><p><em>JavaScript</em> 常见的垃圾回收方式：<strong>标记清除</strong>、<strong>引用计数</strong>方式。</p><p>1、标记清除方式：</p><ul><li><p>工作原理：当变量进入环境时，将这个变量标记为“进入环境”。当变量离开环境时，则将其标记为“离开环境”。标记“离开环境”的就回收内存。</p></li><li><p>工作流程：</p></li><li><p>垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记；</p></li><li><p>去掉环境中的变量以及被环境中的变量引用的变量的标记；</p></li><li><p>被加上标记的会被视为准备删除的变量；</p></li><li><p>垃圾回收器完成内存清理工作，销毁那些带标记的值并回收他们所占用的内存空间。</p></li></ul><p>2、引用计数方式：</p><ul><li><p>工作原理：跟踪记录每个值被引用的次数。</p></li><li><p>工作流程：</p></li><li><p>声明了一个变量并将一个引用类型的值赋值给这个变量，这个引用类型值的引用次数就是 <em>1</em>；</p></li><li><p>同一个值又被赋值给另一个变量，这个引用类型值的引用次数加 <em>1</em>；</p></li><li><p>当包含这个引用类型值的变量又被赋值成另一个值了，那么这个引用类型值的引用次数减 <em>1</em>；</p></li><li><p>当引用次数变成 <em>0</em> 时，说明没办法访问这个值了；</p></li><li><p>当垃圾收集器下一次运行时，它就会释放引用次数是 <em>0</em> 的值所占的内存。</p></li></ul></blockquote><p>-<em>EOF</em>-</p>`,44),o=[t];function c(i,l){return a(),s("div",null,o)}const u=n(p,[["render",c],["__file","10-lajihuishouyunacunxielou.html.vue"]]);export{u as default};
