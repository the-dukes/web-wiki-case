import{_ as t,o as n,c as a,a as s}from"./app-b21c52a4.js";const e={},p=s(`<h1 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h1><h2 id="同源策略-1" tabindex="-1"><a class="header-anchor" href="#同源策略-1" aria-hidden="true">#</a> 同源策略</h2><p>浏览器有一个重要的安全策略，称之为「同源策略」</p><p>其中，$源=协议+主机+端口$，两个源相同，称之为同源，两个源不同，称之为跨源或跨域</p><p>比如：</p><table><thead><tr><th>源 1</th><th>源 2</th><th>是否同源</th></tr></thead><tbody><tr><td>http://www.baidu.com</td><td>http://www.baidu.com/news</td><td>✅</td></tr><tr><td>https://www.baidu.com</td><td>http://www.baidu.com</td><td>❌</td></tr><tr><td>http://localhost:5000</td><td>http://localhost:7000</td><td>❌</td></tr><tr><td>http://localhost:5000</td><td>http://127.0.0.1:5000</td><td>❌</td></tr><tr><td>http://www.baidu.com</td><td>http://baidu.com</td><td>❌</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>同源策略是指，若页面的源和页面运行过程中加载的源不一致时，出于安全考虑，浏览器会对跨域的资源访问进行一些限制</strong></p><p><img src="http://mdrs.yuanjin.tech/img/20210916104747.png" alt="image-20210916104747296"></p><p>同源策略对 ajax 的跨域限制的最为<em>凶狠</em>，默认情况下，它不允许 ajax 访问跨域资源</p><p><img src="http://mdrs.yuanjin.tech/img/20210916105741.png" alt="image-20210916105741041"></p><p>所以，我们通常所说的跨域问题，就是同源策略对 ajax 产生的影响</p><p>有多种方式解决跨域问题，常见的有：</p><ul><li><strong>代理</strong>，常用</li><li><strong>CORS</strong>，常用</li><li>JSONP</li></ul><p>无论使用哪一种方式，都是要让浏览器知道，我这次跨域请求的是自己人，就不要拦截了。</p><h2 id="跨域、代理" tabindex="-1"><a class="header-anchor" href="#跨域、代理" aria-hidden="true">#</a> 跨域、代理</h2><p><strong>对于前端开发而言</strong>，大部分的跨域问题，都是通过代理解决的</p><p><strong>代理适用的场景是：生产环境不发生跨域，但开发环境发生跨域</strong></p><p>因此，只需要在开发环境使用代理解决跨域即可，这种代理又称之为开发代理</p><p><img src="http://mdrs.yuanjin.tech/img/20210916125008.png" alt="image-20210916125008693"></p><p>在实际开发中，只需要对开发服务器稍加配置即可完成</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// vue 的开发服务器代理配置</span>
<span class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 配置开发服务器</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 配置代理</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 若请求路径以 /api 开头</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://dev.taobao.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 将其转发到 http://dev.taobao.com</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),o=[p];function i(r,c){return n(),a("div",null,o)}const l=t(e,[["render",i],["__file","09-tongyuancelue.html.vue"]]);export{l as default};
