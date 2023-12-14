import{_ as n,o as s,c as a,a as t}from"./app-d6eaa58c.js";const p="/web-wiki-case/assets/45-9767e693.png",c="/web-wiki-case/assets/46-8aee16ce.png",o="/web-wiki-case/assets/47-f4b0df56.png",e={},u=t(`<h1 id="_07-颜色渐变" tabindex="-1"><a class="header-anchor" href="#_07-颜色渐变" aria-hidden="true">#</a> 07-颜色渐变</h1><h2 id="_1-线性渐变" tabindex="-1"><a class="header-anchor" href="#_1-线性渐变" aria-hidden="true">#</a> 1 线性渐变</h2><p>使用 ctx.createLinearGradient( x0 , y0 , x1 , y1) 方法创建一个线性渐变的对象 CanvasGradient</p><ul><li><p>x0,y0 和 x1,y1 是两个点， 会按照两点的连线方向渐变 (横向，纵向，斜向)</p></li><li><p>注意：渐变中的两个点是基于坐标系的，需要考虑渐变区域与图形区域关系</p></li></ul><p>使用 gradient.addColorStop(% , color) 方法设置渐变过程中每一部分的颜色。</p><p>设置 ctx.fillStyle = gradient , ctx.strokeStyle = gradient ;</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createLinearGradient</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;#f00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">&#39;#0f0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;#00f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果渐变区域与图形区域相同，则显示完整渐变效果</p><p>如果渐变区域比图形区域大，则图形显示对应区域的渐变效果</p><p>如果渐变区域比图形区域小， 图形范围的两侧就是渐变两侧的颜色。</p></blockquote><img src="`+p+`" alt="1685610796218" style="zoom:50%;"><h2 id="_2-径向渐变" tabindex="-1"><a class="header-anchor" href="#_2-径向渐变" aria-hidden="true">#</a> 2 径向渐变</h2><p>使用 ctx.createRadialGradient(x1 , y1 , r1 , x2 ,y2 , r2) 方法，创建径向渐变对象</p><ul><li><p>x1,y1, r1 表示渐变开始的圆</p></li><li><p>x2,y2,r2 表示渐变结束的圆</p></li><li><p>注意：一般都是一个大圆，一个小圆才会有效果</p><p>​ 小圆一定要在大圆内，否则会出现意想不到的效果。</p></li><li><p>注意：小圆以里， 大圆以外的范围就是渐变的两端的颜色</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createRadialGradient</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;#f00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;#ff0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+c+`" alt="1685612171636" style="zoom:50%;"><h2 id="_3-锥形渐变" tabindex="-1"><a class="header-anchor" href="#_3-锥形渐变" aria-hidden="true">#</a> 3 锥形渐变</h2><p>使用 ctx.createConicGradient(angle,x , y ) 方法 创建一个锥形渐变对象</p><ul><li><p>x y 圆心点</p></li><li><p>angle 起始角度， 默认 0° 角是三点钟方向。 angle = 90° 从六点钟方向开始旋转。</p></li><li><p>注意：angle 传参时使用的是角度对应的弧度值。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> gradient <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">createConicGradient</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;#f00&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">,</span> <span class="token string">&#39;#ff0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token string">&#39;#0f0&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">0.75</span><span class="token punctuation">,</span> <span class="token string">&#39;#0ff&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  gradient<span class="token punctuation">.</span><span class="token function">addColorStop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;#00f&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> gradient<span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">&#39;#fff&#39;</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+'" alt="1685613069138" style="zoom:50%;">',19),l=[u];function i(k,r){return s(),a("div",null,l)}const v=n(e,[["render",i],["__file","07-yansejianbian.html.vue"]]);export{v as default};
