import{_ as n,o as s,c as a,a as e}from"./app-bb81f29b.js";const t={},p=e(`<h1 id="_02-递归-预编译" tabindex="-1"><a class="header-anchor" href="#_02-递归-预编译" aria-hidden="true">#</a> 02-递归，预编译</h1><h2 id="js-运行三部曲" tabindex="-1"><a class="header-anchor" href="#js-运行三部曲" aria-hidden="true">#</a> js 运行三部曲</h2><ol><li>语法分析：扫描但不执行</li><li>预编译</li><li>解释执行</li></ol><h2 id="预编译" tabindex="-1"><a class="header-anchor" href="#预编译" aria-hidden="true">#</a> 预编译</h2><p>预编译发生在<strong>函数执行的前一刻</strong>。解决执行顺序问题 。</p><h3 id="预编译前奏" tabindex="-1"><a class="header-anchor" href="#预编译前奏" aria-hidden="true">#</a> 预编译前奏</h3><p><strong>函数声明整体提升：</strong></p><p>函数不管写到哪里，都会被提到逻辑的最前面。</p><p><strong>变量声明提升：</strong></p><ul><li>变量 声明提升</li></ul><p>把 var a 提升到最前面。</p><ul><li>var a = 123;这是变量声明再赋值</li></ul><p>变量声明提升是把他拆分成 <code>var a; a = 123;</code>然后把 var a 提升到最前面。</p><p><strong>案例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>例：
function test(){
    console.log(‘a’);
}
test();     // 上面能执行

例：
test();     // 也能执行，因为有预编译的存在
function test(){
    console.log(‘a’);
}

例：
var a=123;
console.log(a);
答案：123

例：
console.log(a);
var a=123;
答案undefined

例:
console.log(a); // 会报错
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>imply global 暗示全局变量：</strong></p><ul><li>即任何变量，如果变量未经声明就赋值，此变量就为全局对象(就是 window)所有</li><li>全局对象是 window</li><li>一切声明的全局变量，全是 window 的属性</li><li>window 就是全局的域</li></ul><h3 id="预编译-1" tabindex="-1"><a class="header-anchor" href="#预编译-1" aria-hidden="true">#</a> 预编译</h3><p><strong>案例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//function a() {}</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
  <span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span>
  <span class="token keyword">var</span> <span class="token function-variable function">b</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//function() {}</span>
  <span class="token keyword">function</span> <span class="token function">d</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过程：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>这个例子的形参是（a），变量声明也是a上面的例子按四部曲变化如下:
1.找形参和变量声明，将变量和形参（a）名作为AO属性名，值为undefined，AO{
a : undefined,
b : undefined,
}
2.（把实参值传到形参里）AO{
a : 1,
b : undefined,
}
functiona () {}和functiond () {}都是函数声明，但是varb=function (){}不是。AO{
a : functiona () {},
b : undefined,
d : functiond () {}
}
执行第一行console.log(a);时，用的是AO{
a : functiona () {},
b : undefined,
d : functiond () {}
}
执行vara=123;改变的是AO{
a : 123,
b : undefined,
d : functiond () {}
}
在b=function (){}时AO{
a : 123,
b : function () {},
d : functiond () {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数预编译" tabindex="-1"><a class="header-anchor" href="#函数预编译" aria-hidden="true">#</a> 函数预编译</h3><p><strong>（函数）预编译的四部曲：</strong></p><ol><li>创建 <strong>AO 对象</strong> Activation Object(执行期上下文，作用是理解的作用域，函数产生 的执行空间库)</li><li>找 <strong>形参和变量声明，将变量和形参名作为 AO 属性</strong> 名，值为 <code>undefined</code> 相当于 <code>AO{ a : undefined, b : undefined }</code></li><li>将<strong>实参值和形参统一</strong>（把实参值传到形参里）</li><li>在函数体里面找<strong>函数声明</strong>，值赋予函数体 （先看自己的 AO，再看全局的 GO）</li></ol><p><strong>案例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> c<span class="token punctuation">;</span>
  a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
  b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">function</span> <span class="token function">d</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过程：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>答题过程：1.创建AO对象，AO{
}
2.找形参和变量声明，将变量和形参名作为AO属性名，值为undefined, AO{
a : undefined,
b : undefined,
c : undefined}
3.将实参值和形参统一（把实参值传到形参里）, AO{
a : 1,
b : undefined,
c : undefined}
4.在函数体里面找函数声明，值赋予函数体，函数声明functionb(){}和functiond(){}，AO{
a : 1,
b : functionb(){},
c : undefined,
d : functiond(){}
}
执行console.log(a);答案是1执行c=0;变AO{
a : 1,
b : functionb(){},
c : 0,
d : functiond(){}
}
varc不用管，因为c已经在AO里面了执行a=3;改AO{
a : 3,
b : functionb(){},
c : 0,
d : functiond(){}
}
执行b=2;改AO{
a : 3,
b : 2,
c : 0,
d : functiond(){}
}
执行console.log(b);答案是2functionb () {}和functiond(){}已经提过了，不用管执行console.log(b);答案是2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局预编译" tabindex="-1"><a class="header-anchor" href="#全局预编译" aria-hidden="true">#</a> 全局预编译</h3><p><strong>案例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>例：console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
答案 <span class="token keyword">undefined</span>

例：console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
答案 <span class="token function">functiona</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>全局的预编译三部曲：</strong></p><blockquote><p><code>GO === window</code>， GO 和 window 是一个东西。</p><p>任何全局变量都是 window 上的属性。</p><p>一个变量 <code>没有声明就赋值，也归 window</code>所有，就是在 GO 里面预编译。</p></blockquote><ol><li>生成了一个 GO 的对象 Global Object（window 就是 GO）</li><li>找<strong>变量声明，将变量作为 GO 属性名</strong>，值为 undefined</li><li>找<strong>函数声明</strong>，值赋予函数体</li></ol><p><strong>案例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>


答案过程：
<span class="token number">1.</span>生成<span class="token constant">GO</span>：<span class="token constant">GO</span>：<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token number">2.</span>找变量声明：
<span class="token constant">GO</span><span class="token punctuation">{</span>
<span class="token literal-property property">a</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span>

<span class="token number">3.</span>找函数声明：
<span class="token constant">GO</span><span class="token punctuation">{</span>
<span class="token function-variable function">a</span> <span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">a</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token number">4.</span> 执行：console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function a (){}</span>
执行<span class="token keyword">var</span> a<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>变
<span class="token constant">GO</span><span class="token punctuation">{</span><span class="token literal-property property">a</span> <span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例：暗示全局变量</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>例：
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a<span class="token operator">=</span>b<span class="token operator">=</span><span class="token number">123</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

答案：a是<span class="token keyword">undefined</span>，b是<span class="token number">123</span>

<span class="token constant">GO</span>：<span class="token punctuation">{</span>
<span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 执行，生成<span class="token constant">AO</span>：<span class="token constant">AO</span><span class="token punctuation">{</span>
<span class="token literal-property property">a</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span>

b 未经声明就赋值，归<span class="token constant">GO</span>所有，在<span class="token constant">GO</span>里预编译：<span class="token constant">GO</span><span class="token punctuation">{</span>
<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token function">functiontest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token literal-property property">b</span> <span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>先生成 GO 还是 AO?</strong></p><p>先执行全局，先生成 GO，在执行 test 的前一刻生成 AO 在几层嵌套关系，近的优先，从近的到远的，有 AO 就看 AO，AO 没有才看 GO</p><p><strong>案例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">test</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// function test() {}</span>
  <span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token number">234</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 234</span>
  <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过程：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token number">1.</span>生成<span class="token constant">GO</span>：
    <span class="token constant">GO</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">test</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">test</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>  <span class="token punctuation">}</span>     <span class="token comment">// undefined --&gt; function test(test) {}}</span>

    <span class="token number">2.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>执行前生成<span class="token constant">AO</span>：<span class="token constant">AO</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">test</span><span class="token operator">:</span>  <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>  <span class="token comment">// undefined --&gt; 1 --&gt;  function test() {}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>案例：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>global<span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// undefined，自己AO有global，在自己AO里找</span>
global<span class="token operator">=</span><span class="token number">200</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>global<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 200</span>
<span class="token keyword">var</span> global<span class="token operator">=</span><span class="token number">300</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> global<span class="token punctuation">;</span>


<span class="token constant">GO</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
<span class="token literal-property property">fn</span><span class="token operator">:</span> <span class="token function">functionfn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>执行前，生成<span class="token constant">AO</span>：<span class="token punctuation">{</span>
<span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><p>在 if 里面定义函数声明 function 是不允许的。</p>`,49),i=[p];function c(o,l){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","02-digui，yubianyi.html.vue"]]);export{d as default};
