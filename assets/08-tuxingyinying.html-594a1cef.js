import{_ as n,o as s,c as a,a as t}from"./app-7f983beb.js";const p="/web-wiki-case/assets/48-13ce418a.png",c={},o=t(`<h1 id="_08-图形阴影" tabindex="-1"><a class="header-anchor" href="#_08-图形阴影" aria-hidden="true">#</a> 08-图形阴影</h1><p>ctx.shadowBlur 设置模糊程度， 数字越大，越模糊</p><p>ctx.shadowColor 设置阴影颜色</p><p>ctx.shadowOffsetX , ctx.shadowOffsetY 设置阴影的偏移量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span>shadowColor <span class="token operator">=</span> <span class="token string">&#39;#ff0&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>shadowBlur <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#f00&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+p+'" alt="1685690368804" style="zoom:50%;">',6),e=[o];function i(u,l){return s(),a("div",null,e)}const k=n(c,[["render",i],["__file","08-tuxingyinying.html.vue"]]);export{k as default};