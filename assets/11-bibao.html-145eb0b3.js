import{_ as n,o as s,c as a,a as e}from"./app-0e5daedb.js";const p={},t=e(`<h1 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>闭包是什么？闭包的应用场景有哪些？怎么销毁闭包？</li></ul><h2 id="什么是闭包" tabindex="-1"><a class="header-anchor" href="#什么是闭包" aria-hidden="true">#</a> 什么是闭包</h2><p>闭包，是 <em>JavaScript</em> 中一个非常重要的知识点，也是我们前端面试中较高几率被问到的知识点之一。</p><p>打开《<em>JavaScript</em> 高级程序设计》和《 <em>JavaScript</em> 权威指南》，会发现里面针对闭包的解释各执一词，在网络上搜索关于闭包的内容，也发现众说纷纭，这就导致了这个知识点本身显得有点神秘，甚至还有一点玄幻。</p><p>那么这个知识点真的有那么深奥么？</p><p>非也！其实要理解 <em>JavaScript</em> 中的闭包，非常容易，但是在此之前你需要先知道以下两个知识点：</p><ul><li><em>JavaScript</em> 中的作用域和作用域链</li><li><em>JavaScript</em> 中的垃圾回收</li></ul><p>这里我们来简单回顾一下这两个知识点：</p><p><strong>1. <em>JavaScript</em> 中的作用域和作用域链</strong></p><ul><li>作用域就是一个独立的地盘，让变量不会外泄、暴露出去，不同作用域下同名变量不会有冲突。</li><li>作用域在定义时就确定，并且不会改变。</li><li>如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。</li></ul><p><strong>2. <em>JavaScript</em> 中的垃圾回收</strong></p><ul><li><em>Javascript</em> 执行环境会负责管理代码执行过程中使用的内存，其中就涉及到一个垃圾回收机制</li><li>垃圾收集器会定期（周期性）找出那些不再继续使用的变量，只要该变量不再使用了，就会被垃圾收集器回收，然后释放其内存。如果该变量还在使用，那么就不会被回收。</li></ul><p><em>OK</em>，有了这 <em>2</em> 个知识点的铺垫后，接下来我们再来看什么是闭包。</p><blockquote><p>闭包不是一个具体的技术，而是一种现象，是指在定义函数时，周围环境中的信息可以在函数中使用。换句话说，执行函数时，只要在函数中使用了外部的数据，就创建了闭包。</p><p>而作用域链，正是实现闭包的手段。</p></blockquote><p>什么？只要在函数中使用了外部的数据，就创建了闭包？</p><p>真的是这样么？下面我们可以证明一下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-065017.png" alt="image-20211227145016552" style="zoom:50%;"><p>在上面的代码中，我们在函数 <em>a</em> 中定义了一个变量 <em>i</em>，然后打印这个 <em>i</em> 变量。对于 <em>a</em> 这个函数来讲，自己的函数作用域中存在 <em>i</em> 这个变量，所以我们在调试时可以看到 <em>Local</em> 中存在变量 <em>i</em>。</p><p>下面我们将上面的代码稍作修改，如下图：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-065522.png" alt="image-20211227145521272" style="zoom:50%;"><p>在上面的代码中，我们将声明 <em>i</em> 这个变量的动作放到了 <em>a</em> 函数外面，也就是说 <em>a</em> 函数在自己的作用域已经找不到这个 <em>i</em> 变量了，它会怎么办？</p><p>学习了作用域链的你肯定知道，它会顺着作用域链一层一层往外找。然而上面在介绍闭包时说过，如果出现了这种情况，也就是函数使用了外部的数据的情况，就会创建闭包。</p><p>仔细观察调试区域，我们会发现此时的 <em>i</em> 就放在 <em>Closure</em> 里面的，从而证实了我们前面的说法。</p><p>所以你看，闭包其实也没有那么难理解，当你觉得一个词对你来说特别难的时候，你还可以使用拆词法，这也是我比较推荐的屡试不爽的一种方法。</p><p>“闭”可以理解为“封闭，闭环”，“包”可以理解为“一个类似于包裹的空间”，因此闭包实际上可以看作是一个封闭的空间，那么这个空间用来干啥呢？实际上就是用来存储变量的。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-083947.png" alt="image-20211227163947135" style="zoom:50%;"><p>那么是一个函数下所有的变量声明都会被放入到闭包这个封闭的空间里面么？</p><p>倒也不是，放不放入到闭包中，要看其他地方有没有对这个变量进行引用，例如：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-084334.png" alt="image-20211227164333723"></p><p>在上面的代码中，函数 c 中一个变量都没有创建，却要打印 <em>i、j、k</em> 和 <em>x</em>，这些变量分别存在于 <em>a、b</em> 函数以及全局作用域中，因此创建了 <em>3</em> 个闭包，全局闭包里面存储了 <em>i</em> 的值，闭包 <em>a</em> 中存储了变量 <em>j</em> 和 <em>k</em> 的值，闭包 <em>b</em> 中存储了变量 <em>x</em> 的值。</p><p>但是你仔细观察，你就会发现函数 <em>b</em> 中的 <em>y</em> 变量并没有被放在闭包中，所以要不要放入闭包取决于该变量有没有被引用。</p><p>当然，此时的你可能会有这样的一个新问题，那么多闭包，那岂不是占用内存空间么？</p><p>实际上，如果是自动形成的闭包，是会被销毁掉的。例如：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-094043.png" alt="image-20211227174043786"></p><p>在上面的代码中，我们在第 <em>16</em> 行尝试打印输出变量 <em>k</em>，显然这个时候是会报错的，在第 <em>16</em> 行打一个断点调试就可以清楚的看到，此时已经没有任何闭包存在，垃圾回收器会自动回收没有引用的变量，不会有任何内存占用的情况。</p><p>当然，这里我指的是自动产生闭包的情况，关于闭包，有时我们需要根据需求手动的来制造一个闭包。</p><p>来看下面的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> food <span class="token operator">=</span> <span class="token string">&#39;鸡翅&#39;</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>food<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鸡翅</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>food<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，我们声明了一个名为 <em>eat</em> 的函数，并对它进行调用。</p><p><em>JavaScript</em> 引擎会创建一个 <em>eat</em> 函数的执行上下文，其中声明 <em>food</em> 变量并赋值。</p><p>当该方法执行完后，上下文被销毁，<em>food</em> 变量也会跟着消失。这是因为 <em>food</em> 变量属于 <em>eat</em> 函数的局部变量，它作用于 <em>eat</em> 函数中，会随着 <em>eat</em> 的执行上下文创建而创建，销毁而销毁。所以当我们再次打印 <em>food</em> 变量时，就会报错，告诉我们该变量不存在。</p><p>但是我们将此代码稍作修改：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> food <span class="token operator">=</span> <span class="token string">&#39;鸡翅&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>food<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> look <span class="token operator">=</span> <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">look</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鸡翅</span>
<span class="token function">look</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鸡翅</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<em>eat</em> 函数返回一个函数，并在这个内部函数中访问 <em>food</em> 这个局部变量。调用 <em>eat</em> 函数并将结果赋给 <em>look</em> 变量，这个 <em>look</em> 指向了 <em>eat</em> 函数中的内部函数，然后调用它，最终输出 <em>food</em> 的值。</p><p>为什么能访问到 <em>food</em>，原因很简单，上面我们说过，垃圾回收器只会回收没有被引用到的变量，但是一旦一个变量还被引用着的，垃圾回收器就不会回收此变量。在上面的示例中，照理说 <em>eat</em> 调用完毕 <em>food</em> 就应该被销毁掉，但是我们向外部返回了 <em>eat</em> 内部的匿名函数，而这个匿名函数有引用了 <em>food</em>，所以垃圾回收器是不会对其进行回收的，这也是为什么在外面调用这个匿名函数时，仍然能够打印出 <em>food</em> 变量的值。</p><p>至此，闭包的一个优点或者特点也就体现出来了，那就是：</p><ul><li>通过闭包可以让外部环境访问到函数内部的局部变量。</li><li>通过闭包可以让局部变量持续保存下来，不随着它的上下文环境一起销毁。</li></ul><p>通过此特性，我们可以解决一个全局变量污染的问题。早期在 <em>JavaScript</em> 还无法进行模块化的时候，在多人协作时，如果定义过多的全局变量 有可能造成全局变量命名冲突，使用闭包来解决功能对变量的调用将变量写到一个独立的空间里面，从而能够一定程度上解决全局变量污染的问题。</p><p>例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;GlobalName&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 全局变量</span>
<span class="token keyword">var</span> init <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;initName&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">callName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 打印 name</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 形成接口</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// initName</span>
<span class="token keyword">var</span> initSuper <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;initSuperName&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">callName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 打印 name</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 形成接口</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">initSuper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// initSuperName</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，在此小节的最后，我们来对闭包做一个小小的总结：</p><ul><li><p>闭包是一个封闭的空间，里面存储了在其他地方会引用到的该作用域的值，在 <em>JavaScript</em> 中是通过作用域链来实现的闭包。</p></li><li><p>只要在函数中使用了外部的数据，就创建了闭包，这种情况下所创建的闭包，我们在编码时是不需要去关心的。</p></li><li><p>我们还可以通过一些手段手动创建闭包，从而让外部环境访问到函数内部的局部变量，让局部变量持续保存下来，不随着它的上下文环境一起销毁。</p></li></ul><h2 id="闭包经典问题" tabindex="-1"><a class="header-anchor" href="#闭包经典问题" aria-hidden="true">#</a> 闭包经典问题</h2><p>聊完了闭包，接下来我们来看一个闭包的经典问题。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们预期的结果是过 <em>1</em> 秒后分别输出 <em>i</em> 变量的值为 <em>1，2，3</em>。但是，执行的结果是：<em>4，4，4</em>。</p><p>实际上，问题就出在闭包身上。你看，循环中的 <em>setTimeout</em> 访问了它的外部变量 <em>i</em>，形成闭包。</p><p>而 <em>i</em> 变量只有 <em>1</em> 个，所以循环 <em>3</em> 次的 <em>setTimeout</em> 中都访问的是同一个变量。循环到第 <em>4</em> 次，<em>i</em> 变量增加到 <em>4</em>，不满足循环条件，循环结束，代码执行完后上下文结束。但是，那 <em>3</em> 个 <em>setTimeout</em> 等 <em>1</em> 秒钟后才执行，由于闭包的原因，所以它们仍然能访问到变量 <em>i</em>，不过此时 <em>i</em> 变量值已经是 <em>4</em> 了。</p><p>要解决这个问题，我们可以让 <em>setTimeout</em> 中的匿名函数不再访问外部变量，而是访问自己内部的变量，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样 <em>setTimeout</em> 中就可以不用访问 <em>for</em> 循环声明的变量 <em>i</em> 了。而是采用调用函数传参的方式把变量 <em>i</em> 的值传给了 <em>setTimeout</em>，这样它们就不再创建闭包，因为在我自己的作用域里面能够找到 <em>i</em> 这个变量。</p><p>当然，解决这个问题还有个更简单的方法，就是使用 <em>ES6</em> 中的 <em>let</em> 关键字。</p><p>它声明的变量有块作用域，如果将它放在循环中，那么每次循环都会有一个新的变量 <em>i</em>，这样即使有闭包也没问题，因为每个闭包保存的都是不同的 <em>i</em> 变量，那么刚才的问题也就迎刃而解。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>闭包是什么？闭包的应用场景有哪些？怎么销毁闭包？</li></ul><blockquote><p>闭包是一个封闭的空间，里面存储了在其他地方会引用到的该作用域的值，在 <em>JavaScript</em> 中是通过作用域链来实现的闭包。</p><p>只要在函数中使用了外部的数据，就创建了闭包，这种情况下所创建的闭包，我们在编码时是不需要去关心的。</p><p>我们还可以通过一些手段手动创建闭包，从而让外部环境访问到函数内部的局部变量，让局部变量持续保存下来，不随着它的上下文环境一起销毁。</p><p>使用闭包可以解决一个全局变量污染的问题。</p><p>如果是自动产生的闭包，我们无需操心闭包的销毁，而如果是手动创建的闭包，可以把被引用的变量设置为 <em>null</em>，即手动清除变量，这样下次 <em>JavaScript</em> 垃圾回收器在进行垃圾回收时，发现此变量已经没有任何引用了，就会把设为 <em>null</em> 的量给回收了。</p></blockquote><hr><p>-<em>EOF</em>-</p>`,71),o=[t];function c(i,l){return s(),a("div",null,o)}const m=n(p,[["render",c],["__file","11-bibao.html.vue"]]);export{m as default};
