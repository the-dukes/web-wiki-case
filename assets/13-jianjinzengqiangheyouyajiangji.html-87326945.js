import{_ as n,o as s,c as a,a as e}from"./app-bb81f29b.js";const t={},i=e(`<h1 id="_13-渐进增强和优雅降级" tabindex="-1"><a class="header-anchor" href="#_13-渐进增强和优雅降级" aria-hidden="true">#</a> 13-渐进增强和优雅降级</h1><h2 id="经典真题" tabindex="-1"><a class="header-anchor" href="#经典真题" aria-hidden="true">#</a> 经典真题</h2><ul><li>说说渐进增强和优雅降级?</li><li>你能描述一下渐进增强和优雅降级之间的不同吗?</li></ul><h2 id="渐进增强和优雅降级" tabindex="-1"><a class="header-anchor" href="#渐进增强和优雅降级" aria-hidden="true">#</a> 渐进增强和优雅降级</h2><p>渐进增强，英语全称 <em>progressive enhancement</em>，指的是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。</p><p>优雅降级，英语全称 <em>graceful degradation</em>，一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。</p><p>这两个概念其实并不是一个新的概念，就是以前提到的&quot;向上兼容&quot;和&quot;向下兼容&quot;。渐进增强相当于向上兼容，优雅降级相当于向下兼容。向下兼容指的是高版本支持低版本，或者说后期开发的版本能兼容早期开发的版本。</p><p>在确定用户群体的前提下，渐进增强：针对低版本浏览器进行页面构建，保证基本功能，再针对高级浏览器进行效果、交互等改进和追加功能，达到更好的用户体验。</p><p>优雅降级：一开始就构建完整的功能，再针对低版本浏览器进行兼容。</p><p>区别：优雅降级是从复杂的现状开始并试图减少用户体验的供给，而渐进增强则是从一个基础的、能够起到作用的版本开始再不断扩充，以适应未来环境的需要。</p><p>例如看下面这两段代码的书写顺序，看上去只是书写顺序的不同，实则表示了我们开发的着重点：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.transition</span> <span class="token punctuation">{</span>
  <span class="token comment">/*渐进增强写法*/</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
  <span class="token property">-moz-transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
  <span class="token property">-o-transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.transition</span> <span class="token punctuation">{</span>
  <span class="token comment">/*优雅降级写法*/</span>
  <span class="token property">-o-transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
  <span class="token property">-moz-transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
  <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> all 0.5s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前缀 <em>CSS3</em>（-webkit-、-moz-、-o-）和正常 <em>CSS3</em> 在浏览器中的支持情况是这样的：</p><ol><li><strong>很久以前</strong>：浏览器前缀 <em>CSS3</em> 和正常 <em>CSS3</em> 都不支持</li><li><strong>不久之前</strong>：浏览器<strong>只支持</strong>前缀 <em>CSS3</em>，<strong>不支持</strong>正常 <em>CSS3</em></li><li><strong>现在</strong>：浏览器<strong>既支持</strong>前缀 <em>CSS3</em>，<strong>又支持</strong>正常 <em>CSS3</em></li><li><strong>未来</strong>：浏览器<strong>不支持</strong>前缀 <em>CSS3</em>，<strong>仅支持</strong>正常 <em>CSS3</em></li></ol><p>渐进增强的写法，优先考虑老版本浏览器的可用性，最后才考虑新版本的可用性。在时期 <em>3</em> 前缀 <em>CSS3</em> 和正常 <em>CSS3</em> 都可用的情况下，正常 <em>CSS3</em> 会覆盖前缀 <em>CSS3</em>。</p><p>优雅降级的写法，优先考虑新版本浏览器的可用性，最后才考虑老版本的可用性。在时期 <em>3</em> 前缀 <em>CSS3</em> 和正常 <em>CSS3</em> 都可用的情况下，前缀 <em>CSS3</em> 会覆盖正常的 <em>CSS3</em>。</p><p>绝大多少的大公司都是采用渐进增强的方式，因为业务优先，提升用户体验永远不会排在最前面。</p><ul><li><p>例如新浪微博网站这样亿级用户的网站，前端的更新绝不可能追求某个特效而不考虑低版本用户是否可用。一定是确保低版本到高版本的可访问性再渐进增强。</p></li><li><p>如果开发的是一面面向青少面的软件或网站，你明确这个群体的人总是喜欢尝试新鲜事物，喜欢炫酷的特效，喜欢把软件更新至最新版本，这种情况再考虑优雅降级。</p></li></ul><h2 id="真题解答" tabindex="-1"><a class="header-anchor" href="#真题解答" aria-hidden="true">#</a> 真题解答</h2><ul><li>说说渐进增强和优雅降级?</li></ul><blockquote><p>参考答案：</p><p>渐进增强，英语全称 <em>progressive enhancement</em>，指的是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。</p><p>优雅降级，英语全称 <em>graceful degradation</em>，一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。</p></blockquote><p>-<em>EOF</em>-</p>`,22),p=[i];function o(l,c){return s(),a("div",null,p)}const u=n(t,[["render",o],["__file","13-jianjinzengqiangheyouyajiangji.html.vue"]]);export{u as default};
