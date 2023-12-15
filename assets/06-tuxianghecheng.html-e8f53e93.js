import{_ as n,o as s,c as a,a as t}from"./app-0e5daedb.js";const p="/web-wiki-case/assets/41-ab1f4249.png",e="/web-wiki-case/assets/42-1f98a40f.png",c="/web-wiki-case/assets/43-42d271be.png",o="/web-wiki-case/assets/44-9bfdb945.png",i={},l=t(`<h1 id="_06-图像合成" tabindex="-1"><a class="header-anchor" href="#_06-图像合成" aria-hidden="true">#</a> 06-图像合成</h1><p>将前后图形合成一个图形</p><p>使用 ctx.globalCompositeOperation 属性 设置合成机制。</p><p>需要在前后两个图形中间设置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//前(原)图形</span>
  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#f00&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span>globalCompositeOperation <span class="token operator">=</span> <span class="token string">&#39;???&#39;</span><span class="token punctuation">;</span>

  <span class="token comment">//后(新)图形</span>
  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#0f0&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-路径-形状-合成" tabindex="-1"><a class="header-anchor" href="#_1-路径-形状-合成" aria-hidden="true">#</a> 1 路径(形状)合成</h2><p>source-over : （默认）前后图形都展示， 重叠部分展示后面的图形。</p><p>source-in : 只展示后面的图形，展示与前面图形重叠的部分。</p><p>source-out：只展示后面的图形， 展示与前面图形不重叠的部分</p><p>source-atop: 展示前面的图形 和 后面的图形只展示与前面图形重叠的部分。</p><p>destination-系列(over,in,out,atop) 上述合成特点， 前后图形交换。</p><ul><li>以 destination-over 为例， 前面的图形，覆盖在后面的图形上。</li></ul><p>copy 后面图形的覆盖前面的图形 （前面的图形没了）</p><p>xor 展示前后两个图形非重叠的部分</p><img src="`+p+'" alt="1685592301532" style="zoom:50%;"><img src="'+e+'" alt="1685592421491" style="zoom:50%;"><img src="'+c+'" alt="1685592502213" style="zoom:50%;"><h2 id="_2-颜色合成" tabindex="-1"><a class="header-anchor" href="#_2-颜色合成" aria-hidden="true">#</a> 2 颜色合成</h2><p>关注的是颜色的混合， 图形的形状没有变化。</p><p>lighter 重叠部分的颜色相加</p><p>multiply 整体偏暗</p><p>screen 整体偏亮</p><p>darken 同一个像素的颜色， 取暗色，整体偏暗</p><p>lighten 同一个像素的颜色， 去亮色，整体偏亮</p><img src="'+o+'" alt="1685592591747" style="zoom:50%;"><h2 id="_3-刮刮乐效果" tabindex="-1"><a class="header-anchor" href="#_3-刮刮乐效果" aria-hidden="true">#</a> 3 刮刮乐效果</h2>',26),u=[l];function r(k,d){return s(),a("div",null,u)}const v=n(i,[["render",r],["__file","06-tuxianghecheng.html.vue"]]);export{v as default};
