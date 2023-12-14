import{_ as n,o as s,c as a,a as e}from"./app-72013311.js";const o={},t=e(`<h1 id="_01-块级绑定" tabindex="-1"><a class="header-anchor" href="#_01-块级绑定" aria-hidden="true">#</a> 01-块级绑定</h1><h2 id="es5-声明变量的问题" tabindex="-1"><a class="header-anchor" href="#es5-声明变量的问题" aria-hidden="true">#</a> ES5 声明变量的问题?</h2><p><strong>使用 var 声明变量的问题？</strong></p><blockquote><p>允许重复的变量声明：导致数据被覆盖</p><p>变量提升：怪异的数据访问、闭包问题</p><p>全局变量挂载到全局对象：全局对象成员污染问题</p></blockquote><h2 id="es6-let-声明变量" tabindex="-1"><a class="header-anchor" href="#es6-let-声明变量" aria-hidden="true">#</a> ES6 let 声明变量</h2><h3 id="解决声明变量的问题" tabindex="-1"><a class="header-anchor" href="#解决声明变量的问题" aria-hidden="true">#</a> 解决声明变量的问题？</h3><p><strong>全局变量挂载到全局对象：全局对象成员污染问题？</strong></p><blockquote><p>let 声明的变量不会挂载到全局对象</p></blockquote><p><strong>允许重复的变量声明：导致数据被覆盖问题？</strong></p><blockquote><p>let 声明的变量，不允许当前作用域范围内重复声明</p><p>在块级作用域中用 let 定义的变量，在作用域外不能访问（花括号结束，销毁块级作用域）</p></blockquote><p><strong>变量提升：怪异的数据访问、闭包问题?</strong></p><ul><li>let 不会变量提升</li></ul><blockquote><p>使用 let 不会有变量提升，因此，不能在定义 let 变量之前使用它。</p><p>底层实现上，let 声明的变量实际上也会有提升，但是，提升后会将其放入到“暂时性死区”，如果访问的变量位于暂时性死区，则会报错：“<code>Cannot access &#39;a&#39; before initialization</code>”。</p><p>当代码运行到该变量的声明语句时，会将其从暂时性死区中移除。</p></blockquote><ul><li>循环中，会开启一个新的作用域</li></ul><blockquote><p>在循环中，用 let 声明的循环变量，会特殊处理，每次进入循环体，都会开启一个新的作用域，并且将循环变量绑定到该作用域（每次循环，使用的是一个全新的循环变量）。</p><p>在循环中使用 let 声明的循环变量，在循环结束后会销毁。</p></blockquote><h3 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h3><p>ES6 不仅引入 let 关键字用于解决变量声明的问题，同时引入了块级作用域的概念。</p><p><strong>块级作用域：</strong></p><blockquote><p>代码执行时遇到花括号，会创建一个块级作用域，花括号结束，销毁块级作用域。</p></blockquote><h2 id="es6-const-声明常量" tabindex="-1"><a class="header-anchor" href="#es6-const-声明常量" aria-hidden="true">#</a> ES6 const 声明常量</h2><p><strong>const:</strong></p><blockquote><p>const 和 let 完全相同。</p><p>区别在于用 const 声明的变量，必须在声明时赋值，而且不可以重新赋值。</p></blockquote><p><strong>在开发中，尽量使用 const 来声明变量，以保证变量的值不会随意篡改，原因如下：</strong></p><blockquote><p>根据经验，开发中的很多变量，都是不会更改，也不应该更改的。</p><p>后续的很多框架或者是第三方 JS 库，都要求数据不可变，使用常量可以一定程度上保证这一点。</p></blockquote><p><strong>注意的细节：</strong></p><ul><li>常量地址不可变</li></ul><blockquote><p>常量不可变，是指声明的常量的内存空间不可变，并不保证内存空间中的地址指向的其他空间不可变。</p></blockquote><ul><li>常量的命名</li></ul><blockquote><p><strong>特殊的常量：</strong></p><p>该常量从字面意义上，一定是不可变的，比如圆周率、月地距地或其他一些绝不可能变化的配置。通常，**该常量的名称全部使用大写，多个单词之间用下划线分割 <code>PI、MOON_EARTH_DISTANCE</code></p><p><strong>普通的常量：</strong></p><p>使用和之前一样的命名即可。</p></blockquote><ul><li>循环中</li></ul><blockquote><p>在 <code>for</code>循环中，循环变量不可以使用常量。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> i<span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>   <span class="token comment">// VM63604:1 Uncaught SyntaxError: Missing initializer in const declaration</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>for in</code> 循环中，可以使用常量。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;kevin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> prop <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34),p=[t];function c(l,i){return s(),a("div",null,p)}const u=n(o,[["render",c],["__file","01-kuaijibangding.html.vue"]]);export{u as default};
