import{_ as t,r as o,o as c,c as l,b as n,d as s,e,a as p}from"./app-f5385c67.js";const i={},u=p(`<h1 id="使用-key" tabindex="-1"><a class="header-anchor" href="#使用-key" aria-hidden="true">#</a> 使用 key</h1><p>对于通过循环生成的列表，应给每个列表项一个稳定且唯一的 key，这有利于在列表变动时，尽量少的删除、新增、改动元素</p><h1 id="使用冻结的对象" tabindex="-1"><a class="header-anchor" href="#使用冻结的对象" aria-hidden="true">#</a> 使用冻结的对象</h1><p>冻结的对象不会被响应化。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getDatas</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="使用函数式组件" tabindex="-1"><a class="header-anchor" href="#使用函数式组件" aria-hidden="true">#</a> 使用函数式组件</h1>`,6),r={href:"https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"},d=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template functional<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>NormalComp<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> props<span class="token punctuation">.</span>count <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="使用计算属性" tabindex="-1"><a class="header-anchor" href="#使用计算属性" aria-hidden="true">#</a> 使用计算属性</h1><p>如果模板中某个数据会使用多次，并且该数据是通过计算得到的，使用计算属性以缓存它们</p><h1 id="非实时绑定的表单项" tabindex="-1"><a class="header-anchor" href="#非实时绑定的表单项" aria-hidden="true">#</a> 非实时绑定的表单项</h1><p>当使用<code>v-model</code>绑定一个表单项时，当用户改变表单项的状态时，也会随之改变数据，从而导致<code>vue</code>发生重渲染（<code>rerender</code>），这会带来一些性能的开销。</p><p>特别是当用户改变表单项时，页面有一些动画正在进行中，由于 JS 执行线程和浏览器渲染线程是互斥的，最终会导致动画出现卡顿。</p><p>我们可以通过使用<code>lazy</code>或不使用<code>v-model</code>的方式解决该问题，但要注意，这样可能会导致在某一个时间段内数据和表单项的值是不一致的。</p><h1 id="保持对象引用稳定" tabindex="-1"><a class="header-anchor" href="#保持对象引用稳定" aria-hidden="true">#</a> 保持对象引用稳定</h1><p>在绝大部分情况下，<code>vue</code>触发<code>rerender</code>的时机是其依赖的数据发生<strong>变化</strong></p><p>若数据没有发生变化，哪怕给数据重新赋值了，<code>vue</code>也是不会做出任何处理的</p><p>下面是<code>vue</code>判断数据<strong>没有变化</strong>的源码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// value 为旧值， newVal 为新值</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>newVal <span class="token operator">===</span> value <span class="token operator">||</span> <span class="token punctuation">(</span>newVal <span class="token operator">!==</span> newVal <span class="token operator">&amp;&amp;</span> value <span class="token operator">!==</span> value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，如果需要，只要能保证组件的依赖数据不发生变化，组件就不会重新渲染。</p><p>对于原始数据类型，保持其值不变即可</p><p>对于对象类型，保持其引用不变即可</p><p>从另一方面来说，由于可以通过保持属性引用稳定来避免子组件的重渲染，那么我们应该细分组件来尽量避免多余的渲染</p><h1 id="使用-v-show-替代-v-if" tabindex="-1"><a class="header-anchor" href="#使用-v-show-替代-v-if" aria-hidden="true">#</a> 使用 v-show 替代 v-if</h1><p>对于频繁切换显示状态的元素，使用 v-show 可以保证虚拟 dom 树的稳定，避免频繁的新增和删除元素，特别是对于那些内部包含大量 dom 元素的节点，这一点极其重要</p><p>关键字：频繁切换显示状态、内部包含大量 dom 元素</p><h1 id="使用延迟装载-defer" tabindex="-1"><a class="header-anchor" href="#使用延迟装载-defer" aria-hidden="true">#</a> 使用延迟装载（defer）</h1><p>首页白屏时间主要受到两个因素的影响：</p><ul><li><p>打包体积过大</p><p>巨型包需要消耗大量的传输时间，导致 JS 传输完成前页面只有一个<code>&lt;div&gt;</code>，没有可显示的内容</p></li><li><p>需要立即渲染的内容太多</p><p>JS 传输完成后，浏览器开始执行 JS 构造页面。</p><p>但可能一开始要渲染的组件太多，不仅 JS 执行的时间很长，而且执行完后浏览器要渲染的元素过多，从而导致页面白屏</p></li></ul><p>打包体积过大需要自行优化打包体积，本节不予讨论</p><p>本节仅讨论渲染内容太多的问题。</p><p>一个可行的办法就是<strong>延迟装载组件</strong>，让组件按照指定的先后顺序依次一个一个渲染出来。</p><blockquote><p>延迟装载是一个思路，本质上就是利用<code>requestAnimationFrame</code>事件分批渲染内容，它的具体实现多种多样。</p></blockquote><h1 id="使用-keep-alive" tabindex="-1"><a class="header-anchor" href="#使用-keep-alive" aria-hidden="true">#</a> 使用 keep-alive</h1><blockquote><p>面试题：请阐述 keep-alive 组件的作用和原理</p></blockquote><p>keep-alive 组件是 vue 的内置组件，用于缓存内部组件实例。这样做的目的在于，keep-alive 内部的组件切回时，不用重新创建组件实例，而直接使用缓存中的实例，一方面能够避免创建组件带来的开销，另一方面可以保留组件的状态。</p><p>keep-alive 具有 include 和 exclude 属性，通过它们可以控制哪些组件进入缓存。另外它还提供了 max 属性，通过它可以设置最大缓存数，当缓存的实例超过该数时，vue 会移除最久没有使用的组件缓存。</p><p>受 keep-alive 的影响，其内部所有嵌套的组件都具有两个生命周期钩子函数，分别是<code>activated</code>和<code>deactivated</code>，它们分别在组件激活和失活时触发。第一次<code>activated</code>触发是在<code>mounted</code>之后</p><p>在具体的实现上，keep-alive 在内部维护了一个 key 数组和一个缓存对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// keep-alive 内部的声明周期函数</span>
<span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>keys <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>key 数组记录目前缓存的组件 key 值，如果组件没有指定 key 值，则会为其自动生成一个唯一的 key 值</p><p>cache 对象以 key 值为键，vnode 为值，用于缓存组件对应的虚拟 DOM</p><p>在 keep-alive 的渲染函数中，其基本逻辑是判断当前渲染的 vnode 是否有对应的缓存，如果有，从缓存中读取到对应的组件实例；如果没有则将其缓存。</p><p>当缓存数量超过 max 数值时，keep-alive 会移除掉 key 数组的第一个元素</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> slot <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">;</span> <span class="token comment">// 获取默认插槽</span>
  <span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token function">getFirstComponentChild</span><span class="token punctuation">(</span>slot<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 得到插槽中的第一个组件的vnode</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">getComponentName</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>componentOptions<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取组件名字</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> cache<span class="token punctuation">,</span> keys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 获取当前的缓存对象和key数组</span>
  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token operator">...</span><span class="token punctuation">;</span> <span class="token comment">// 获取组件的key值，若没有，会按照规则自动生成</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 有缓存</span>
    <span class="token comment">// 重用组件实例</span>
    vnode<span class="token punctuation">.</span>componentInstance <span class="token operator">=</span> cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>componentInstance
    <span class="token function">remove</span><span class="token punctuation">(</span>keys<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 删除key</span>
    <span class="token comment">// 将key加入到数组末尾，这样是为了保证最近使用的组件在数组中靠后，反之靠前</span>
    keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 无缓存，进行缓存</span>
    cache<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> vnode
    keys<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">&amp;&amp;</span> keys<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 超过最大缓存数量，移除第一个key对应的缓存</span>
      <span class="token function">pruneCacheEntry</span><span class="token punctuation">(</span>cache<span class="token punctuation">,</span> keys<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_vnode<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> vnode<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="长列表优化" tabindex="-1"><a class="header-anchor" href="#长列表优化" aria-hidden="true">#</a> 长列表优化</h1>`,39),k={href:"https://github.com/Akryum/vue-virtual-scroller",target:"_blank",rel:"noopener noreferrer"};function v(m,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("参见"),n("a",r,[s("函数式组件"),e(a)])]),d,n("p",null,[n("a",k,[s("vue-virtual-scroller"),e(a)])])])}const y=t(i,[["render",v],["__file","09-youhua.html.vue"]]);export{y as default};
