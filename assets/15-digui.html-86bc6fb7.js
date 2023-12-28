import{_ as n,o as s,c as a,a as e}from"./app-bb81f29b.js";const t={},p=e(`<h1 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>使用递归完成 <em>1</em> 到 <em>100</em> 的累加</li></ul><h2 id="递归-1" tabindex="-1"><a class="header-anchor" href="#递归-1" aria-hidden="true">#</a> 递归</h2><p><em>A recursive method is a method that calls itself.</em></p><p>递归调用是一种特殊的调用形式，指的是方法自己调用自己的形式。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-19-063739.png" alt="image-20211019143738665" style="zoom:50%;"><p>下面是一个递归的示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>function <span class="token function">neverEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;This is the method that never ends!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">neverEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>method</em> 会先输出 <em>This is the method that never ends!</em> 然后再调用自己，导致无限递归（<em>infinite recursion</em>）。当然这一般是我们需要避免的状况。</p><p>在进行递归操作的时候，我们需要满足以下几个条件：</p><ul><li>递归调用必须有结束条件</li><li>每次调用的时候都需要根据需求改变传递的参数内容</li></ul><p>下面是递归的一个示例，求某个数的阶乘。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>function <span class="token function">factorial</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> <span class="token function">factorial</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">factorial</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个递归的计算过程如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>===&gt; factorial(5)
===&gt; 5 * factorial(4)
===&gt; 5 * (4 * factorial(3))
===&gt; 5 * (4 * (3 * factorial(2)))
===&gt; 5 * (4 * (3 * (2 * factorial(1))))
===&gt; 5 * (4 * (3 * (2 * 1)))
===&gt; 5 * (4 * (3 * 2))
===&gt; 5 * (4 * 6)
===&gt; 5 * 24
===&gt; 120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-19-063535.png" alt="image-20211019143535293" style="zoom:50%;"><p>使用递归时需要注意如下事项：</p><ul><li><p>递归函数的优点是定义简单，逻辑清晰。理论上，所有的递归函数都可以用循环的方式来实现。</p></li><li><p>使用递归时需要注意防止栈溢出。在计算机中，函数调用是通过栈（<em>stack</em>）这种数据结构实现的，每当一个函数调用，栈就会加一层，每当函数返回，栈就会减一层。由于栈的大小不是无限的，所以递归调用的次数过多，会导致栈溢出。</p></li></ul><p>下面再来看几个递归的示例：</p><p>示例 <em>1</em>：使用递归来计算从 <em>x</em> 加到 <em>y</em> 的结果</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>function <span class="token function">calc</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">calc</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> j<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 <em>2</em>：使用递归来计算斐波那契数列</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>function <span class="token function">calc</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">calc</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">calc</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>使用递归完成 <em>1</em> 到 <em>100</em> 的累加</li></ul><blockquote><p>参考答案：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">calc</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> j<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5050</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>-<em>EOF</em>-</p>`,28),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","15-digui.html.vue"]]);export{r as default};
