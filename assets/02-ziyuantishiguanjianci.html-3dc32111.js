import{_ as a,o as n,c as s,a as e}from"./app-b21c52a4.js";const t={},p=e(`<h1 id="资源提示关键词" tabindex="-1"><a class="header-anchor" href="#资源提示关键词" aria-hidden="true">#</a> 资源提示关键词</h1><p>在上一篇文章中，我们介绍了浏览器的渲染流程，这篇文章中，我们将重点聚焦在渲染阻塞上，来详细看一下渲染阻塞以及一些常见的解决方法。</p><p>本文主要包含以下内容：</p><ul><li>渲染阻塞回顾</li><li><em>defer</em> 和 <em>async</em></li><li><em>preload</em></li><li><em>prefetch</em></li><li><em>prerender</em></li><li><em>preconnect</em></li></ul><h2 id="渲染阻塞回顾" tabindex="-1"><a class="header-anchor" href="#渲染阻塞回顾" aria-hidden="true">#</a> 渲染阻塞回顾</h2><p>我们都知道，<em>HTML</em> 用于描述网页的整体结构。为了理解 <em>HTML</em>，浏览器必须将它转为自己能够理解的格式，也就是 <em>DOM</em>（文档对象模型）</p><p>浏览器引擎有一段特殊的代码，称为解析器，用于将数据从一种格式转换为另一种格式。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081458.png" alt="image-20211206161457653" style="zoom:50%;"><p>浏览器一点一点地构建 <em>DOM</em>。一旦第一块代码进来，它就会开始解析 <em>HTML</em>，将节点添加到树结构中。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081522.gif" alt="ezgif-2-2688553063"></p><p>构建出来的 <em>DOM</em> 对象，实际上有 <em>2</em> 个作用：</p><ul><li><p><em>HTML</em> 文档的结构以对象的方式体现出来，形成我们常说的 <em>DOM</em> 树</p></li><li><p>作为外界的接口供外界使用，例如 <em>JavaScript</em>。当我们调用诸如 <em>document.getElementById</em> 的方法时，返回的元素是一个 <em>DOM</em> 节点。每个 <em>DOM</em> 节点都有许多可以用来访问和更改它的函数，用户看到的内容也会相应地发生变化。</p></li></ul><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081639.gif" alt="ezgif-2-01a1ded8c4"></p><p><em>CSS</em> 样式会被映射为 <em>CSSOM</em>（ <em>CSS</em> 对象模型），它和 <em>DOM</em> 很相似，但是针对的是 <em>CSS</em> 而不是 <em>HTML</em>。</p><p>在构建 <em>CSSOM</em> 的时候，无法进行增量构建（不像构建 <em>DOM</em> 一样，解析到一个 <em>DOM</em> 节点就扔到 <em>DOM</em> 树结构里面），因为 <em>CSS</em> 规则是可以相互覆盖的，浏览器引擎需要经过复杂的计算才能弄清楚 <em>CSS</em> 代码如何应用于 <em>DOM</em>。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081700.png" alt="image-20211206161700033"></p><p>当浏览器正在构建 <em>DOM</em> 时，如果它遇到 <em>HTML</em> 中的 <code>&lt;script&gt;...&lt;/script&gt;</code> 标记，它必须立即执行它。如果脚本是外部的，则必须先下载脚本。</p><p>过去，为了执行脚本，必须暂停解析。解析会在 <em>JavaScript</em> 引擎执行完脚本中的代码后再次启动。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081717.png" alt="image-20211206161717368" style="zoom:50%;"><p>为什么解析必须停止呢？</p><p>原因很简单，这是因为 <em>Javascript</em> 脚本可以改变 <em>HTML</em> 以及根据 <em>HTML</em> 生成的 <em>DOM</em> 树结构。例如，脚本可以通过使用 <em>document.createElement( )</em> 来添加节点从而更改 <em>DOM</em> 结构。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081740.gif" alt="image"></p><p>这也是为什么我们建议将 <em>script</em> 标签写在 <em>body</em> 元素结束标签前面的原因。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- HTML Code --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span>
        JS Code...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scirpt</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们回头来看一下 <em>CSS</em> 是否会阻塞渲染。</p><p>看上去 <em>JavaScript</em> 会阻止解析，是因为它可以修改文档。那么 <em>CSS</em> 不能修改文档，所以它似乎没有理由阻止解析，对吧？</p><p>但是，如果脚本中需要获取一些尚未解析的样式信息怎么办？在 <em>JavaScript</em> 中完全可以访问到 <em>DOM</em> 节点的某些样式，或者使用 <em>JavaScript</em> 直接访问 <em>CSSOM</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081801.png" alt="image-20211206161801072" style="zoom:50%;"><p>因此，<em>CSS</em> 可能会根据文档中外部样式表和脚本的顺序阻止解析。如果在文档中的脚本之前放置了外部样式表，则 <em>DOM</em> 和 <em>CSSOM</em> 对象的构建可能会相互干扰。</p><p>当解析器到达一个脚本标签时，在 <em>JavaScript</em> 执行完成之前无法继续构建 <em>DOM</em>，然而如果这一段 <em>JavaScript</em> 中涉及到访问和使用 <em>CSSOM</em>，那么必须等待 <em>CSS</em> 文件被下载、解析并且 <em>CSSOM</em> 可用。如果 <em>CSSOM</em> 处于未可用状态，则会阻塞 <em>JavaScript</em> 的执行。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081819.png" alt="image-20211206161819188" style="zoom:50%;"><p>（上图中 <em>JavaScript</em> 的执行被 <em>CSS</em> 构建 <em>CSSOM</em> 的过程阻塞了）</p><p>另外，虽然 <em>CSS</em> 不会阻塞 <em>DOM</em> 的构建，但是也会阻塞渲染。</p><p>还记得我们前面有讲过要 <em>DOM</em> 树和 <em>CSSOM</em> 树都准备好，才会生成渲染树（ <em>Render Tree</em> ）么，浏览器在拥有 <em>DOM</em> 和 <em>CSSOM</em> 之前是不会显示任何内容。</p><p>这是因为没有 <em>CSS</em> 的页面通常无法使用。如果浏览器向你展示了一个没有 <em>CSS</em> 的凌乱页面，那么片刻之后就会进入一个有样式的页面，不断变化的内容和突然的视觉变化会给用户带来混乱的用户体验。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-06-081854.gif" alt="2021-11-22 15.59.41" style="zoom:50%;"><p>（这种糟糕的用户体验有一个名字，叫做“无样式内容闪现”，<em>Flash of Unstyled Content</em>，或者简称 <em>FOUC</em> ）</p><p>为了解决这些问题，所以我们需要尽快的交付 <em>CSS</em>。</p><p>这也解释了为什么“顶部样式，底部脚本”被称之为“最佳实践”。</p><p>随着现代浏览器的普及，浏览器为我们提供了更多强大的武器（资源提示关键词），合理利用，方可大幅提高页面加载速度。</p><h2 id="defer-和-async" tabindex="-1"><a class="header-anchor" href="#defer-和-async" aria-hidden="true">#</a> <em>defer</em> 和 <em>async</em></h2><p>现代浏览器引入了 <em>defer</em> 和 <em>async</em>。</p><p><em>async</em> 表示加载和渲染后续文档元素的过程将和 <em>script.js</em> 的加载与执行并行进行（异步）。也就是说下载 <em>JS</em> 文件的时候不会阻塞 <em>DOM</em> 树的构建，但是执行该 <em>JS</em> 代码会阻塞 <em>DOM</em> 树的构建。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">async</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>defer</em> 表示加载后续文档元素的过程将和 <em>script.js</em> 的加载并行进行（异步），但是 <em>script.js</em> 的执行要在所有元素解析完成之后，<em>DOMContentLoaded</em> 事件触发之前完成。也就是说，下载 <em>JS</em> 文件的时候不会阻塞 <em>DOM</em> 树的构建，然后等待 <em>DOM</em> 树构建完毕后再执行此 <em>JS</em> 文件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">defer</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myscript.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体加载瀑布图如下图所示：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-08-032125.png" alt="image-20211208112125053" style="zoom:90%;"><h2 id="preload" tabindex="-1"><a class="header-anchor" href="#preload" aria-hidden="true">#</a> <em>preload</em></h2><p><em>preload</em> 顾名思义就是一种预加载的方式，它通过声明向浏览器声明一个需要提前加载的资源，当资源真正被使用的时候立即执行，就无需等待网络的消耗。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style2.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main2.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style1.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>main1.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，会先加载 <em>style1.css</em> 和 <em>main1.js</em> 文件（但不会生效），在随后的页面渲染中，一旦需要使用它们，它们就会立即可用。</p><p>可以使用 <em>as</em> 来指定将要预加载的内容类型。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-08-032151.png" alt="image-20211208112151152"></p><p><em>preload</em> 指令的一些优点如下：</p><ul><li><p>允许浏览器设置资源优先级，从而允许 <em>Web</em> 开发人员优化某些资源的交付。</p></li><li><p>使浏览器能够确定资源类型，因此它可以判断将来是否可以重用相同的资源。</p></li><li><p>浏览器可以通过引用 <em>as</em> 属性中定义的内容来确定请求是否符合内容安全策略。</p></li><li><p>浏览器可以根据资源类型发送合适的 <em>Accept</em> 头（例如：<em>image/webp</em> ）</p></li></ul><h2 id="prefetch" tabindex="-1"><a class="header-anchor" href="#prefetch" aria-hidden="true">#</a> <em>prefetch</em></h2><p><em>prefetch</em> 是一种利用浏览器的空闲时间加载页面将来可能用到的资源的一种机制，通常可以用于加载非首页的其他页面所需要的资源，以便加快后续页面的首屏速度。</p><p><em>prefetch</em> 加载的资源可以获取非当前页面所需要的资源，并且将其放入缓存至少 <em>5</em> 分钟（无论资源是否可以缓存）。并且，当页面跳转时，未完成的 <em>prefetch</em> 请求不会被中断；</p><p>它的用法跟 <em>preload</em> 是一样的：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/style.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><em>DNS prefetching</em></strong></p><p><em>DNS prefetching</em> 允许浏览器在用户浏览时在后台对页面执行 <em>DNS</em> 查找。这最大限度地减少了延迟，因为一旦用户单击链接就已经进行了 <em>DNS</em> 查找。</p><p>通过将 <em>rel=&quot;dns-prefetch&quot;</em> 标记添加到链接属性，可以将 <em>DNS prefetching</em> 添加到特定 <em>URL</em>。建议在诸如 <em>Web</em> 字体、<em>CDN</em> 之类的东西上使用它。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Prefetch DNS for external assets --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dns-prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//fonts.googleapis.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dns-prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//www.google-analytics.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dns-prefetch<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.domain.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prerender" tabindex="-1"><a class="header-anchor" href="#prerender" aria-hidden="true">#</a> <em>prerender</em></h2><p><em>prerender</em> 与 <em>prefetch</em> 非常相似，<em>prerender</em> 同样也是会收集用户接下来可能会用到的资源。</p><p>不同之处在于 <em>prerender</em> 实际上是在后台渲染整个页面。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prerender<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.keycdn.com<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="preconnect" tabindex="-1"><a class="header-anchor" href="#preconnect" aria-hidden="true">#</a> <em>preconnect</em></h2><p>我们要讨论的最后一个资源提示是 <em>preconnect</em>。</p><p><em>preconnect</em> 指令允许浏览器在 <em>HTTP</em> 请求实际发送到服务器之前设置早期连接。</p><p>我们知道，浏览器要建立一个连接，一般需要经过 <em>DNS</em> 查找，<em>TCP</em> 三次握手和 <em>TLS</em> 协商（如果是 <em>https</em> 的话），这些过程都是需要相当的耗时的。所以 <em>preconnet</em>，就是一项使浏览器能够预先建立一个连接，等真正需要加载资源的时候就能够直接请求了。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-08-032217.png" alt="image-20211208112216614"></p><p>以下是为 <em>CDN URL</em> 启用 <em>preconnect</em> 的示例。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.domain.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preconnect<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的代码中，浏览器会进行以下步骤：</p><ul><li>解释 <em>href</em> 的属性值，判断是否是合法的 <em>URL</em>。如果是合法的 <em>URL</em>，然后继续判断 <em>URL</em> 的协议是否是 <em>http</em> 或者 <em>https</em>，如果不是合法的 <em>URL</em>，则结束处理。</li><li>如果当前页面 <em>host</em> 不同于 <em>href</em> 属性中的 <em>host</em>，那么将不会带上 <em>cookie</em>，如果希望带上 <em>cookie</em> 等信息，可以加上 <em>crossorign</em> 属性。</li></ul><hr><p>-<em>EOF</em>-</p>`,80),c=[p];function l(o,m){return n(),s("div",null,c)}const i=a(t,[["render",l],["__file","02-ziyuantishiguanjianci.html.vue"]]);export{i as default};
