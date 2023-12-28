import{_ as a,o as e,c as n,a as s}from"./app-bb81f29b.js";const t={},p=s(`<h1 id="_06-iframe" tabindex="-1"><a class="header-anchor" href="#_06-iframe" aria-hidden="true">#</a> 06-iframe</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li><em>iframe</em> 框架有哪些优缺点？</li><li><em>iframe</em> 用来干什么的</li></ul><h2 id="iframe-介绍" tabindex="-1"><a class="header-anchor" href="#iframe-介绍" aria-hidden="true">#</a> <em>iframe</em> 介绍</h2><p><em>iframe</em> 称之为嵌入式框架，嵌入式框架可以把一个完整的网页内容嵌入到现有的网页中。</p><p>下面是一个 <em>iframe</em> 的简单示例：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>iframe 示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://juejin.cn/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-09-011259.png" alt="image-20210909091258084"></p><p>可以看到，在当前的网页，又嵌入了一个其他页面。</p><p>那么这在实际开发中有啥意义呢？</p><p>实际上，在早期的时候， <em>iframe</em> 在开发中用得很多。使用 <em>iframe</em> 可以很方便的制作一个页面的公共部分，例如导航栏。</p><p>现在仍然能够找到使用 <em>iframe</em> 的网站（大多是旧的项目）</p><p>例如 <em>W3C school</em>：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-09-015133.png" alt="image-20210909095133166"></p><p>再比如邮箱：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-09-09-014911.png" alt="image-20210909094911187"></p><p>但是随着 <em>Ajax</em> 的出现，<em>iframe</em> 用得越来越少了。现在在某些特定的场景还能见到，比如模拟窗口，邮箱或者 <em>HTML</em> 在线编辑器等。</p><p>究其原因，是因为 <em>iframe</em> 有种种不便，比如一个直观的问题就是 <em>iframe</em> 的自适应高度，这是处理起来比较麻烦的问题，随便百度下都是一大串的代码。</p><p>另外还有个重大的缺点，那就是搜索引擎的“爬虫”程序无法解读这种页面，当“爬虫”遇到多个页面嵌套的网页时只看到框架却找不到链接，然后认定此网站是死站点并离开。这对于 <em>SEO</em> 来讲无疑是毁灭性的打击。并且使用大量的 <em>iframe</em> 标签也会稀释你该页面的关键词密度并对其产生影响。</p><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li><em>iframe</em> 用来干什么的？有哪些优缺点？</li></ul><blockquote><p>参考答案：</p><p><em>iframe</em> 也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入在现有的网页中。</p><p><strong>优点</strong></p><ul><li>重载页面时不需要重载整个页面，只需要重载页面中的一个框架页(减少了数据的传输，增加了网页下载速度)</li><li>方便制作导航栏</li></ul><p><strong>缺点</strong></p><ul><li>会产生很多页面，不容易管理</li><li>调用外部页面，需要额外调用 <em>CSS</em>，给页面带来额外的请求次数</li><li>会阻塞页面的加载，<em>window</em> 的 <em>onload</em> 事件需要在所有 <em>iframe</em> 加载完毕后(包含里面的元素)才会触发</li><li>浏览器的后退按钮无效</li><li>无法被一些搜索引擎索引到</li><li>多数小型的移动设备（<em>PDA</em> 手机）无法完全显示框架</li></ul><p>由于上面诸多缺点，因此不符合标准网页设计的理念，已经被标准网页设计抛弃，目前框架的所有优点完全可以使用 <em>Ajax</em> 实现，因此已经没有必要使用 <em>iframe</em> 框架了。</p></blockquote>`,23),i=[p];function l(m,c){return e(),n("div",null,i)}const r=a(t,[["render",l],["__file","06-iframe.html.vue"]]);export{r as default};
