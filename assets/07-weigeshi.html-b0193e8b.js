import{_ as a,o as n,c as s,a as t}from"./app-f5385c67.js";const p={},e=t(`<h1 id="_07-微格式" tabindex="-1"><a class="header-anchor" href="#_07-微格式" aria-hidden="true">#</a> 07-微格式</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>知道什么是微格式吗？谈谈理解。在前端构建中应该考虑微格式吗？</li></ul><h2 id="微格式介绍" tabindex="-1"><a class="header-anchor" href="#微格式介绍" aria-hidden="true">#</a> 微格式介绍</h2><p>所谓微格式，是建立在已有的、被广泛采用的标准基础之上的一组简单的、开放的数据格式。</p><p>具体表现是把语义嵌入到 <em>HTML</em> 中，以便有助于分离式开发，并通过制定一些简单的约定，来兼顾 <em>HTML</em> 文档的人机可读性，相当于对 <em>Web</em> 网页进行了语义注解。</p><p><em>talk is cheap，show me code</em></p><p>以前我们是这样写一个链接到首页的代码的：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>”http://www.bbon.cn”</span><span class="token punctuation">&gt;</span></span>Web Design Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而现在我们要为这个代码元素 <em>a</em> 加上 <em>rel</em> 属性：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>”http://www.bbon.cn“</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>”homepage”</span><span class="token punctuation">&gt;</span></span>Web Design Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过上面的代码，我们可以发现，多了一个 <em>rel</em> 属性。这个 <em>rel=”home”</em> 属性显示链接的目标页面是该网站的首页。</p><p>通过为已有的链接元素添加语义化属性，就为这个链接添加了具体的结构和意义。</p><p>就这？</p><p><em>No、No、No</em>，我们再去微格式的官网瞅一瞅：<em>https://microformats.org/</em></p><p>官网对微格式是这么介绍的：</p><blockquote><p><em>Microformats are based on simple markup conventions that enable you to add meaningful structure to your web content.</em></p><p>微格式基于简单的标记约定，使您能够向 web 内容添加有意义的结构。</p><p><em>One of the key principles of microformats, is to privilege human readable content. This means that you should think first and foremost of your content design being readable and accessible to web viewers.</em></p><p>微格式的一个关键原则是赋予人类可读内容特权。这意味着您应该首先考虑内容设计的可读性和可访问性。</p><p><em>Using the most appropriate HTML elements and applying structured class names to your markup enables you to produce content that can be clearly understood by a human audience and also used in a structured way by automated programs and other online tools.</em></p><p>通过使用最合适的 HTML 元素并将结构化类名应用到标记中，您可以生成人类观众可以清楚理解的内容，并通过自动化程序和其他在线工具以结构化方式使用这些内容。</p><p><em>But the point is that you shouldn&#39;t have to go out of your way to produce such machine friendly markup - microformats make it easy to integrate this greater degree of structure into your websites, without the overhead of having to learn complicated new languages or formats.</em></p><p>但关键是，你不应该不遗余力地制作这样的机器友好型标记——微格式可以轻松地将这种更高程度的结构集成到你的网站中，而无需学习复杂的新语言或格式。</p></blockquote><p>正如前面所介绍的，微格式就是为了兼顾 <em>HTML</em> 文档的人机可读性，在标签中添加的语义注解。</p><p>那好，那么我们以后书写所有的 <em>HTML</em> 代码，都要这样书写注解么？</p><p>并不是，否则人都傻了。微格式一般用于标记人员、组织、事件、地点、博客帖子、产品、评论、简历、食谱等的 <em>HTML</em>。</p><p>例如：</p><blockquote><p><em>Mark-up your contact info with h-card, link to other profiles with rel=&quot;me&quot;</em></p><p>使用 <em>h-card</em> 标记您的联系信息，使用 <em>rel=“me”</em> 链接到其他个人资料</p><p><em>Mark-up your blog with h-entry.</em></p><p>用 <em>h-entry</em> 标记你的博客。</p></blockquote><p>这里我们以 <em>h-card</em> 为例。</p><p><em>h-card</em> 是一种微格式，用来发布个人，公司，组织，地点等详细的联系信息。 它可以使分析器（比如其他网站，<em>Firefox</em> 的 <em>Operator</em> 插件）获得详细的信息，并通过别的网站或者地图工具进行显示，或者载入到地址簿等其他程序。</p><p>例如，没有加入 <em>h-card</em> 微格式时，我们的 <em>HTML</em> 结构如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Joe Doe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>The Example Company<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>604-555-1234<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>http://example.com/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加入微格式后，成为：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vcard<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Joe Doe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>The Example Company<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>604-555-1234<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>http://example.com/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，正式名称（<em>class=”fn”</em>），组织（<em>class=”org”</em>），电话号码（<em>class=”tel”</em>）和 <em>url</em>（<em>class=”url”</em>）分别用相应的 <em>class</em> 标示。</p><p>同时，所有内容都包含在 <em>class=&quot;vcard&quot;</em> 里。</p><p>再例如，我们用一个维基媒体基金会的联系方式，来作为 <em>h-card</em> 微格式实例。</p><p>加入 <em>h-card</em> 微格式之前的信息内容如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Wikimedia Foundation Inc. 200 2nd Ave. South #358 St. Petersburg, FL 33701-4313 USA Phone: +1-727-231-0101 Email: info@wikimedia.org Fax: +1-727-258-0207
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>加入微格式后，成为：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vcard<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn org<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Wikimedia Foundation Inc.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>adr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>street-address<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>200 2nd Ave. South #358<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locality<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>St. Petersburg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>, <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>region<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>FL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>postal-code<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>33701-4313<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>country-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>USA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Phone: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1-727-231-0101<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>Email: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>email<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>info@wikimedia.org<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Fax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>+1-727-258-0207<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，正式名称（<em>class=”fn”</em>）和组织（<em>class=”org”</em>）写在了一个属性中，表示这是一个组织，而不是个人。</p><p>这个时候，有的小伙伴就要提问了，这些 <em>h-card</em> 里面的属性名是固定的么？</p><p>没错，常用的 <em>h-card</em> 属性还包括：<em>bday</em>（生日）、<em>email</em>（邮箱）、<em>tel</em>（电话）、<em>nickname</em>（昵称）等。</p><p>目前已具备完整规范的微格式还包括：<em>hCard、hCalendar、XOXO、XFN、VoteLinks</em> 和 <em>3</em> 个 “rel-” 的微格式：<em>rel- license、rel-nofollow</em> 和 <em>rel-tag</em>。</p><p>至于每一种微格式的规范（里面有哪些属性）是什么，我们可以在官网进行查阅。</p><p>例如： <em>h-card</em> 的规范就可以参阅：<em>https://microformats.org/wiki/h-card</em></p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>知道什么是微格式吗？谈谈理解。在前端构建中应该考虑微格式吗？</li></ul><blockquote><p>参考答案：</p><p>所谓微格式，是建立在已有的、被广泛采用的标准基础之上的一组简单的、开放的数据格式。</p><p>具体表现是把语义嵌入到 <em>HTML</em> 中，以便有助于分离式开发，并通过制定一些简单的约定，来兼顾 <em>HTML</em> 文档的人机可读性，相当于对 <em>Web</em> 网页进行了语义注解。</p><p>采用微格式的 <em>Web</em> 页面，在 <em>HTML</em> 文档中给一些标签增加一些属性，这些属性对信息的语义结构进行注解，有助于处理 <em>HTML</em> 文档的软件，更好的理解该 <em>HTML</em> 文档。</p><p><strong>在前端构建中微格式的意义</strong></p><p>微格式按照某种已有的被广泛应用的标准，通过对内容块的语义标记，可以让外部应用程序、聚合程序和搜索引擎能够做以下事情：</p><ol><li>在爬取 <em>Web</em> 内容时，能够更为准确地识别内容块的语义；</li><li>对内容进行操作，包括提供访问、校对，还可以将其转化成其他的相关格式，提供给外部程序和 Web 服务使用。</li></ol><p>总结： 微格式可以对网站进行 <em>SEO</em> 优化，如果需要可以考虑。</p></blockquote>`,44),o=[e];function c(l,u){return n(),s("div",null,o)}const k=a(p,[["render",c],["__file","07-weigeshi.html.vue"]]);export{k as default};
