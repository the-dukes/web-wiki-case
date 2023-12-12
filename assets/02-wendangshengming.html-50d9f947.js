import{_ as e,o as m,c as s,a as t}from"./app-b21c52a4.js";const n={},a=t(`<h1 id="_02-文档声明" tabindex="-1"><a class="header-anchor" href="#_02-文档声明" aria-hidden="true">#</a> 02-文档声明</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>什么是<code>&lt;!DOCTYPE&gt;</code>？是否需要在 <em>HTML5</em> 中使用？</li><li>什么是严格模式与混杂模式？</li><li>列举几条怪异模式中的怪癖行为</li></ul><h2 id="文档声明概念" tabindex="-1"><a class="header-anchor" href="#文档声明概念" aria-hidden="true">#</a> 文档声明概念</h2><p><em>HTML</em> 文档通常以文档声明开始，该声明的作用是帮助浏览器确定其尝试解析和显示的 <em>HTML</em> 文档类型。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>文档声明必须是 <em>HTML</em> 文档的第一行、且顶格显示，对大小写不敏感。因为任何放在 <em>DOCTYPE</em> 前面的东西，比如批注或 <em>XML</em> 声明，会令 <em>IE9</em> 或更早期的浏览器触发怪异模式（后面的渲染模式会介绍）</p><p>文档声明并非一个 <em>HTML</em> 标签。它是一条“信息”，告知浏览器期望的文档类型。</p><p>那么说到文档类型，我们首先有必要先了解一下 <em>HTML</em> 的发展历史。如下图所示：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-020539.png" alt="image-20210907100539198"> <img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-020626.png" alt="image-20210907100626110"></p><p>可以看到，<em>HTML</em> 版本从最开始诞生到最新的 <em>HTML5</em>，中间经历了很多版本。</p><p>那不同的版本有啥区别么？当然有区别，比如一个最显著的区别就是支持的 <em>HTML</em> 元素不同。例如：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-021238.png" alt="image-20210907101237957"></p><blockquote><p>更多各版本所支持的不同 <em>HTML</em> 元素可以参阅：<em>https://www.w3school.com.cn/tags/html_ref_dtd.asp</em></p></blockquote><p>所以，你现在就知道为什么要书写文档声明了。原因是不同版本所支持的 <em>HTML</em> 元素类型是不同的，我需要告诉浏览器以哪一种文档类型方式来解析当前的这个 <em>HTML</em> 文件。</p><p>那么，最新的 <em>HTML5</em> 的文档类型倒是很简单，前面我们已经看到了</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么稍微老一点的版本，例如 <em>HTML4</em> 或 <em>XHTML</em> 的文档类型声明长啥样呢？</p><p>这里我们来看两个。</p><p><em><strong>HTML 4.01 Strict</strong></em></p><p>该 <em>DTD</em> 包含所有 <em>HTML</em> 元素和属性，但不包括展示性的和弃用的元素（比如 <em>font</em>）。不允许框架集（<em>Framesets</em>）。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/strict.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>HTML 4.01 Transitional</strong></em></p><p>该 <em>DTD</em> 包含所有 <em>HTML</em> 元素和属性，包括展示性的和弃用的元素（比如 <em>font</em>）。不允许框架集（<em>Framesets</em>）。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;</span> <span class="token string">&quot;http://www.w3.org/TR/html4/loose.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>更多不同文档类型的声明写法可以参阅：<em>https://www.w3school.com.cn/tags/tag_doctype.asp</em></p></blockquote><p>首先，给我们的第一直观感受，就是声明写得很长。</p><p>那么为什么会这么长呢？</p><p>原因很简单，<em>HTML5</em> 不需要引入 <em>DTD</em> 文件，而其他类型的文档声明是需要引入 <em>DTD</em> 的。</p><p>很好，一个新的名词出现了，<em>DTD</em>。</p><p>在早期的 <em>HTML</em> 版本，例如 <em>HTML 4.01</em> 中， 声明之所以要引用 <em>DTD</em>，是因为 <em>HTML 4.01</em> 基于 <em>SGML</em>。而 <em>DTD</em> 规定的是标记语言的规则，这样浏览器才能正确地呈现内容。</p><p>但是最新的 <em>HTML5</em> 不基于 <em>SGML</em>，所以不需要引用 <em>DTD</em>。</p><p>到这里估计有的小伙伴要懵圈了，怎么又冒出来一个 <em>SGML</em> ？？</p><p>是的，你没有看错，我们有：<em>SGML、HTML、XML、XHTML、HTML5</em></p><p>从这五者的名字中，我们都可以看到 “<em>ML</em>” 这两个字母，所以我们先从 “<em>ML</em>” 说起。</p><p>“<em>ML</em>”即 “<em>Markup language</em>(置标语言)”。</p><p>根据维基百科对其的解释，“<em>Markup language</em>” 是用标准的标记来解释纯文本文档的内容，从而提供关于文档结构或文档该如何渲染的信息。置标语言的发展可以用下图来表示：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-023423.png" alt="image-20210907103423285"></p><p><em>GML</em> 是第一代置标语言，使文档能明确将标示和内容分开，所有文件使用同样的标示方法。</p><p><em>SGML</em> 在 <em>GML</em> 的基础上进行整理，形成了一套非常严谨的文件描述方法。它的组成包括语法定义，<em>DTD</em>，文件实例三部分。<em>SGML</em> 因太严谨规范达 <em>500</em> 多页，故而不易学、不易用、难以实现，所以在它的基础上又发展出了其他的更易用的置标语言。</p><p><em>HTML</em> 抛弃了<em>SGML</em> 复杂庞大的缺点，继承了 <em>SGML</em> 的很多优点。<em>HTML</em> 最大的特点是简单性和跨平台性。它只使用了 <em>SGML</em> 中很少的一部分标记，例如 <em>HTML 4.0</em> 中只定义了 <em>70</em> 余种标记。为了便于在计算机上实现，<em>HTML</em> 规定的标记是固定的，即 <em>HTML</em> 语法是不可扩展的。</p><p>随着 <em>Web</em> 应用的不断发展，<em>HTML</em> 的局限性也越来越明显地显现了出来，如 <em>HTML</em> 无法描述数据、可读性差、搜索时间长等。人们又把目光转向 <em>SGML</em>，再次改造 <em>SGML</em> 使之适应现在的网络需求。<em>1998</em> 年 <em>2</em> 月 <em>10</em> 日，<em>W3C</em>(<em>World Wide Web Consortium</em>，万维网联盟)公布 <em>XML 1.0</em> 标准，<em>XML</em> 诞生了。很长一段时间，<em>XML</em> 都作为网络传输的标准数据格式。</p><p><em>XHTML</em> 的出现是因为当时的 <em>HTML</em> 语法要求比较松散，这样对网页编写者来说，比较方便，但对于机器来说，语言的语法越松散，处理起来就越困难，对于传统的计算机来说，还有能力兼容松散语法，但对于许多其他设备，比如手机，难度就比较大。因此产生了由 <em>DTD</em> 定义规则，语法要求更加严格的 <em>XHTML</em>。</p><blockquote><p><em>DTD</em> 教程可以参阅：<em>https://www.w3school.com.cn/dtd/index.asp</em></p></blockquote><p>最终，<em>HTML5</em> 是 <em>HTML</em> 的第五个修订版，该版本不在基于 <em>SGML</em> 了，所以也就不用再引入 <em>DTD</em> 声明了。</p><p><em>HTML5</em> 的出现，其主要的目标是将互联网语义化，以便更好地被人类和机器阅读，并同时提供更好地支持各种媒体的嵌入。</p><p>现在国内通常所说的 <em>H5</em> 开发，实际上是 <em>HTML5</em> 与 <em>CSS3</em> 及 <em>ES6</em> 的一个组合，大概可以用以下公式说明：<em>HTML5 ≈ HTML + CSS3 + ES6</em></p><h2 id="渲染模式" tabindex="-1"><a class="header-anchor" href="#渲染模式" aria-hidden="true">#</a> 渲染模式</h2><p>明白了文档类型声明的作用之后，接下来我们还需要看一个东西，那就是渲染模式。</p><p>浏览器渲染模式分为 <em>3</em> 种：</p><ul><li>怪癖模式（混杂模式）[<em>Quirks mode</em>]</li><li>严格模式（标准模式） [<em>Standars mode</em>]</li><li>几乎标准模式 [<em>Almost standards mode</em>]</li></ul><blockquote><p>之所以出现不同的渲染模式，是由于历史原因造成的。</p><p>当年 <em>Netscape4</em>（网景公司早期的浏览器）和 <em>IE4</em>（微软公司早期的浏览器）实现 <em>CSS</em> 机制时，没有遵循 <em>W3C</em> 提出的标准。<em>Netscape4</em> 提供了糟糕的支持，而 <em>IE4</em> 虽然接近标准，但依旧未能完全正确的支持标准。</p><p>所以，在 <em>W3C</em> 标准推出以前，浏览器在对页面的渲染上没有统一规范，产生了差异（<em>Quirks mode</em> 或者称为 <em>Compatibility Mode</em>）</p><p>为了保障自己的网站在各个浏览器上显示正确，网页开发者们不得不依据各个浏览器自身的规范来使用 <em>CSS</em>，因此大部分网站的 <em>CSS</em> 实现并不符合 <em>W3C</em> 规范的标准。</p><p><em>W3C</em> 标准推出后，浏览器渲染页面有了统一的标准（<em>Strict mode</em> 也有叫做 <em>Standars mode</em>）浏览器都开始采纳新标准，但存在一个问题就是如何保证旧的网页还能继续浏览，在标准出来以前，很多页面都是根据旧的渲染方法编写的，如果用的标准来渲染，将导致页面显示异常。</p><p>为保持浏览器渲染的兼容性，使以前的页面能够正常浏览，浏览器都保留了旧的渲染方法（如：微软的 <em>IE</em>）。这样浏览器渲染上就产生了 <em>Quircks mode</em> 和 <em>Standars mode</em>，两种渲染方法共存在一个浏览器上。混杂模式服务于旧式规则，而严格模式服务于标准规则。</p></blockquote><p>对于 <em>HTML</em> 文档来说，浏览器使用文档开头的 <em>DOCTYPE</em> 来决定用怪异模式处理或标准模式处理。</p><p>如果文档中没有 <em>DOCTYPE</em> 将触发文档的怪异模式。怪异模式最明显的影响是会触发怪异盒模型。</p><p>在 <em>DOCTYPE</em> 声明中，没有使用 <em>DTD</em> 声明或者使用 <em>HTML4</em> 以下的 <em>DTD</em> 声明时，基本所有的浏览器都是使用 <em>Quirks mode</em> 呈现，其他的则使用 <em>Standars mode</em> 解析。</p><p><strong>严格模式和怪异模式的部分渲染区别</strong></p><ol><li>盒模型的高宽包含内边距 <em>padding</em> 和边框 <em>border</em></li></ol><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-07-035904.png" alt="img"></p><p>在 <em>W3C</em> 标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在 <em>IE5.5</em> 及以下的浏览器及其他版本的 <em>Quirks</em> 模式下，<em>IE</em> 的宽度和高度还包含了 <em>padding</em> 和 <em>border</em>。</p><ol start="2"><li>可以设置行内元素的高宽</li></ol><p>在 <em>standards</em> 模式下，给 <em>span</em> 等行内元素设置 <em>wdith</em> 和 <em>height</em> 都不会生效，而在 <em>Quirks</em> 模式下，则会生效。</p><ol start="3"><li>可设置百分比的高度</li></ol><p>在 <em>standards</em> 模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置高度，子元素设置一个百分比的高度是无效的。</p><ol start="4"><li>用 <em>margin:0 auto</em> 设置水平居中在 <em>IE</em> 下会失效</li></ol><p>使用 <em>margin:0 auto</em> 在 <em>standards</em> 模式下可以使元素水平居中，但在 <em>Quirks</em> 模式下却会失效，<em>Quirks</em> 模式下的解决办法，用 <em>text-align</em> 属性：<em>body{text-align:center};#content{text-align:left}</em></p><ol start="5"><li><em>Quirks</em> 模式下设置图片的 <em>padding</em> 会失效</li><li><em>Quirks</em> 模式下 <em>Table</em> 中的字体属性不能继承上层的设置</li><li><em>Quirks</em> 模式下 <em>white-space:pre</em> 会失效</li></ol><blockquote><p>更多可以参阅 <em>MDN</em> 上对怪异模式和标准模式的解释：<em>https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode</em></p></blockquote><blockquote><p><em>MDN</em> 上还给出了不同模式在不同浏览器下的渲染区别（英文）：<em>https://hsivonen.fi/doctype/</em></p></blockquote><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>什么是<code>&lt;!DOCTYPE&gt;</code>？是否需要在 <em>HTML5</em> 中使用？</li></ul><blockquote><p>它是 <em>HTML</em> 的文档声明，通过它告诉浏览器，使用哪一个 <em>HTML</em> 版本标准解析文档。</p><p>在浏览器发展的历史中，<em>HTML</em> 出现过很多个版本，不同版本在元素、属性等书写格式上略有差异，如果不预先告诉浏览器，浏览器就不知道我们的文档标准是什么，在这种情况下，大部分浏览器将开启最大兼容模式来解析网页，我们称之为怪异模式。这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的 <em>bug</em>，所以文档声明是必须的。</p><p>而文档声明有多种书写格式，对应不同的 <em>HTML</em> 版本，<code>&lt;!DOCTYPE&gt;</code>这种书写是告诉浏览器，整个文档使用 <em>HTML5</em> 的标准进行解析。</p></blockquote><ul><li>什么是严格模式与混杂模式？</li></ul><blockquote><p>**严格模式：**又称标准模式，是指浏览器按照 <em>W3C</em> 标准解析代码。</p><p>**混杂模式：**又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。</p><p>**如何区分：**浏览器解析时到底使用严格模式还是混杂模式，与网页中的 <em>DTD</em> 直接相关。</p><ol><li>如果文档包含严格的 <em>DOCTYPE</em> ，那么它一般以严格模式呈现。<strong>（严格 <strong><em><strong>DTD</strong></em></strong> ——严格模式）</strong></li><li>包含过渡 <em>DTD</em> 和 <em>URI</em> 的 <em>DOCTYPE</em> ，也以严格模式呈现，但有过渡 <em>DTD</em> 而没有 <em>URI</em> （统一资源标识符，就是声明最后的地址）会导致页面以混杂模式呈现。<strong>（有 <strong><em><strong>URI</strong></em></strong> 的过渡 <strong><em><strong>DTD</strong></em></strong> ——严格模式；没有 <strong><em><strong>URI</strong></em></strong> 的过渡 <strong><em><strong>DTD</strong></em></strong> ——混杂模式）</strong></li><li><em>DOCTYPE</em> 不存在或形式不正确会导致文档以混杂模式呈现。<strong>（</strong><em><strong>DTD</strong></em>** 不存在或者格式不正确——混杂模式）**</li><li><em>HTML5</em> 没有 <em>DTD</em> ，因此也就没有严格模式与混杂模式的区别，<em>HTML5</em> 有相对宽松的语法，实现时，已经尽可能大的实现了向后兼容。<strong>（ <strong><em><strong>HTML5</strong></em></strong> 没有严格和混杂之分）</strong></li></ol><p>**意义：**严格模式与混杂模式存在的意义与其来源密切相关，如果说只存在严格模式，那么许多旧网站必然受到影响，如果只存在混杂模式，那么会回到当时浏览器大战时的混乱，每个浏览器都有自己的解析模式。</p></blockquote><ul><li>列举几条怪异模式中的怪癖行为</li></ul><blockquote><ol><li>宽高的算法与 <em>W3C</em> 盒模型不同</li><li>在表格中的字体样式不会继承</li><li>怪异模式下可以设置行内元素宽高</li><li>怪异模式下 <em>white-space:pre</em> 会失效</li></ol></blockquote>`,75),p=[a];function o(l,i){return m(),s("div",null,p)}const c=e(n,[["render",o],["__file","02-wendangshengming.html.vue"]]);export{c as default};
