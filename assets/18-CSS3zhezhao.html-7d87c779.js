import{_ as s,o as n,c as a,a as e}from"./app-f5385c67.js";const p={},t=e(`<h1 id="_18-css3-遮罩" tabindex="-1"><a class="header-anchor" href="#_18-css3-遮罩" aria-hidden="true">#</a> 18-CSS3 遮罩</h1><p>本文主要包含以下内容：</p><ul><li><em>CSS3</em> 遮罩介绍</li><li>遮罩各属性介绍</li></ul><h2 id="css3-遮罩介绍" tabindex="-1"><a class="header-anchor" href="#css3-遮罩介绍" aria-hidden="true">#</a> <em>CSS3</em> 遮罩介绍</h2><p><em>CSS mask</em> 遮罩属性的历史非常久远了，远到比 <em>CSS3 border-radius</em> 等属性还要久远，最早是出现在 <em>Safari</em> 浏览器上的，差不多可以追溯到 <em>2009</em> 年。</p><p>不过那个时候，遮罩只能作为实验性的属性，做一些特效使用。毕竟那个年代还是 <em>IE</em> 浏览器的时代，属性虽好，但价值有限。</p><p>但是如今情况却大有变化，除了 <em>IE</em> 浏览器不支持，<em>Firefox、Chrome、Edge</em> 以及移动端等都已经全线支持，其实际应用价值已不可同日而语。</p><p>尤其 <em>Firefox</em> 浏览器，从版本 <em>53</em> 开始，已经全面支持了 <em>CSS3 mask</em> 属性。并且 <em>mask</em> 属性规范已经进入候选推荐规范之列，会说以后进入既定规范标准已经是板上钉钉的事情，大家可以放心学习，将来必有用处。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-145725.png" alt="image-20211025225724975"></p><p>（图为 <em>caniuse</em> 上各浏览器对 <em>CSS mask</em> 的支持情况）</p><h2 id="快速入门示例" tabindex="-1"><a class="header-anchor" href="#快速入门示例" aria-hidden="true">#</a> 快速入门示例</h2><p>下面，我们来看一个 <em>CSS mask</em> 的快速入门示例。</p><p>首先需要准备两张图片，图片素材如下：</p><p>一张 <em>jpg</em> 图片：<em>zelda.jpg</em></p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151154.png" alt="image-20211025231154694" style="zoom:50%;"><p>一张 <em>png</em> 图片：<em>mask.png</em>，该 <em>png</em> 图片背景为透明（这里划重点）</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151236.png" alt="image-20211025231236440" style="zoom:50%;"><p>接下来准备我们的测试目录：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151518.png" alt="image-20211025231518012" style="zoom:50%;"><p><em>index.html</em> 代码如下：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mask<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 50px auto<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./zelda.jpg&#39;</span><span class="token punctuation">)</span></span> no-repeat center/cover<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*  
  虽然 .mask 和 div 都是选择中的相同的元素
  这里为了单独观察 mask 相关设置，
  和 mask 不相关的属性设置放入到了 div 选择器中 
*/</span>
<span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们为 <em>div</em> 设置了一个铺满整个盒子的背景图，然后为该盒子设置了遮罩效果。由于 <em>mask.png</em> 无法占满整个盒子，所以出现了重复的效果，<strong><em>mask.png</em> 遮罩图片透明的部分不会显示底部图片的信息，而非透明部分则会显示底层图片信息</strong>。</p><p>效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-25-151805.png" alt="image-20211025231804573" style="zoom:50%;"><p>除了设置透明的 <em>png</em> 图片，还可以设置透明的渐变。例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>transparent 10%<span class="token punctuation">,</span> white<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们设置了一个从上到下的线性透明渐变，效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-013708.png" alt="image-20211026093708467" style="zoom:50%;"><p>可以看到，无论是设置图片还是渐变，一定要有透明的部分，否则无法起到遮罩的效果，例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们设置的是一个红到蓝的渐变，没有任何的透明部分，所以遮罩层不会起作用，底图会原封不动的显示出来。</p><h2 id="遮罩各属性介绍" tabindex="-1"><a class="header-anchor" href="#遮罩各属性介绍" aria-hidden="true">#</a> 遮罩各属性介绍</h2><p>在上面的快速入门示例中，我们用到的是 <em>mask-image</em> 属性，但是除了该属性外，<em>CSS mask</em> 还有很多其他的属性，如下：</p><ul><li><em>mask-image</em></li><li><em>mask-mode</em></li><li><em>mask-repeat</em></li><li><em>mask-position</em></li><li><em>mask-clip</em></li><li><em>mask-origin</em></li><li><em>mask-size</em></li><li><em>mask-type</em></li><li><em>mask-composite</em></li></ul><p>下面我们来针对每个属性进行介绍。</p><h4 id="mask-image" tabindex="-1"><a class="header-anchor" href="#mask-image" aria-hidden="true">#</a> <em>mask-image</em></h4><p>该属性在上面的快速入门示例中我们已经体验过了，默认值为 <em>none</em>，表示没有遮罩图片。</p><p>可以设置的值为透明图片，或透明渐变。</p><h4 id="mask-repeat" tabindex="-1"><a class="header-anchor" href="#mask-repeat" aria-hidden="true">#</a> <em>mask-repeat</em></h4><p>表示遮罩层是否允许重复，默认值为 <em>repeat</em> 允许重复，可选值与 <em>background-repeat</em> 相同。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们设置遮罩层的重复行为是 <em>x、y</em> 轴都不重复，效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-015113.png" alt="image-20211026095112536" style="zoom:50%;"><p>（红框是为了表示整张图片的大小，并非浏览器实际显示情况）</p><h4 id="mask-position" tabindex="-1"><a class="header-anchor" href="#mask-position" aria-hidden="true">#</a> <em>mask-position</em></h4><p>该属性用于设置遮罩层的位置，默认值为<em>0 0</em> 在最左上角，可选值与 <em>background-position</em> 相同。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-015730.png" alt="image-20211026095730053" style="zoom:50%;"><p>（红框是为了表示整张图片的大小，并非浏览器实际显示情况）</p><h4 id="mask-size" tabindex="-1"><a class="header-anchor" href="#mask-size" aria-hidden="true">#</a> <em>mask-size</em></h4><p>该属性用于设置遮罩层的大小，默认值为 <em>auto</em>，可选值与 <em>background-size</em> 相同，如下表：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-021622.png" alt="image-20211026101622232" style="zoom:50%;"><p>例如：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-size</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-021901.png" alt="image-20211026101900926"></p><p>（红框是为了表示整张图片的大小，并非浏览器实际显示情况）</p><h4 id="mask-origin" tabindex="-1"><a class="header-anchor" href="#mask-origin" aria-hidden="true">#</a> <em>mask-origin</em></h4><p>默认值为 <em>border-box</em>，可选值与 <em>background-origin</em> 相同，可以设置如下的属性值：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-020115.png" alt="image-20211026100114147" style="zoom:50%;"><p>下面为了显示其效果，我们需要稍微对其他样式做一些改变，如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 50px auto<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./zelda.jpg&#39;</span><span class="token punctuation">)</span></span> no-repeat center/cover<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 100px solid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*  
虽然 .mask 和 div 都是选择中的相同的元素
这里为了单独观察 mask 相关设置，
和 mask 不相关的属性设置放入到了 div 选择器中 
*/</span>
<span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们为该 <em>div</em> 设置了一个宽度为 <em>100px</em> 的 <em>border</em>，由于 <em>mask-origin</em> 的默认值为 <em>border-box</em>，所以我们可以看到如下的效果：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-020928.png" alt="image-20211026100927087"></p><p>（红框是为了表示整张图片的大小，并非浏览器实际显示情况）</p><p>此时如果设置 <em>mask-origin</em> 的值为 <em>centent-box</em>，遮罩层图像就会相对于内容框来定位。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-origin</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-021239.png" alt="image-20211026101238881"></p><p>（外层的黑框表示该 <em>div</em> 的 <em>border</em>，红框表示该 <em>div</em> 的内容区域，并非浏览器实际显示情况）</p><h4 id="mask-clip" tabindex="-1"><a class="header-anchor" href="#mask-clip" aria-hidden="true">#</a> <em>mask-clip</em></h4><p>默认值为 <em>border-box</em>，可选值与 <em>background-clip</em> 相同，可以设置如下属性值：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-025300.png" alt="image-20211026105259969" style="zoom:50%;"><p>我们同样为 <em>div</em> 设置一个宽度为 <em>100px</em> 的 <em>border</em>，由于默认值为 <em>border-box</em>，所以我们看到的效果如下：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-025412.png" alt="image-20211026100927087"></p><p>（红框是为了表示整张图片的大小，并非浏览器实际显示情况）</p><p>接下来设置 <em>mask-clip</em> 为 <em>content-box</em></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 <em>mask-origin</em> 默认值为 <em>border-box</em>，所以遮罩层以边框盒来定位，之后我们设置了 <em>mask-clip</em> 为 <em>content-box</em>，表示以内容框来进行裁剪。效果如下：</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-025533.png" alt="image-20211026105532851"></p><p>（外层的黑框表示该 <em>div</em> 的 <em>border</em>，红框表示该 <em>div</em> 的内容区域，并非浏览器实际显示情况）</p><h4 id="mask-mode" tabindex="-1"><a class="header-anchor" href="#mask-mode" aria-hidden="true">#</a> <em>mask-mode</em></h4><p><em>mask-mode</em> 属性默认值为 <em>match-source</em>，作用是根据资源的类型自动采用合适的遮罩模式。</p><p>例如，如果遮罩效果使用的是 <em>SVG</em> 中的 &lt;<em>mask</em>&gt; 元素，则此时的 <em>mask-mode</em> 属性的值为 <em>luminance</em>，表示基于亮度来判断是否要进行遮罩。</p><p>如果是其他场景，则计算值是 <em>alpha</em>，表示基于透明度判断是否要进行遮罩。</p><p>因此 <em>mask-mode</em> 可选值为 <em>alpha、luminance、match-source</em>。</p><p>使用搜索引擎搜索遮罩素材的时候，往往搜索的结果都是白底的 <em>JPG</em> 图片，因此使用默认的遮罩模式是没有预期的遮罩效果的。此时就非常适合设置遮罩模式为 <em>luminance</em>。</p><p>另外，目前仅 <em>Firefox</em> 浏览器支持 <em>mask-mode</em> 属性，<em>Chrome</em> 浏览器并不提供支持，但是可以使用非标准的 <em>mask-source-type</em> 属性来进行替代（没有私有前缀）。</p><p>下面来看一个简单的示例。首先我们需要扩充我们的遮罩素材，准备了一张 <em>mask2.jpg</em> 的遮罩图片，该素材首先是 <em>jpg</em> 格式的，其次并没有透明区域，仅有一些白底区域。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-032617.png" alt="image-20211026112617175" style="zoom:50%;"><p>接下来设置如下的代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.mask</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-mask-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;./mask2.jpg&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-repeat</span><span class="token punctuation">:</span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">-webkit-mask-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">mask-mode</span><span class="token punctuation">:</span> luminance<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，我们设置 <em>mask-mode</em> 的值为 <em>luminance</em>，表示基于亮度来判断是否进行遮罩。</p><p>在 <em>Firefox</em> 浏览器中的效果如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-10-26-032916.png" alt="image-20211026112915034" style="zoom:50%;"><p>（红框是为了表示整张图片的大小，并非浏览器实际显示情况）</p><h4 id="mask-type" tabindex="-1"><a class="header-anchor" href="#mask-type" aria-hidden="true">#</a> <em>mask-type</em></h4><p><em>mask-type</em> 属性的功能和 <em>mask-mode</em> 属性类似，都是设置不同的遮罩模式，但还是有一个很大的区别，就是 <em>mask-type</em> 属性只能作用于 <em>SVG</em> 元素上，因为其本质上是由 <em>SVG</em> 属性演变而来的，<em>Chrome</em> 等浏览器也都支持该属性。而 <em>mask-mode</em> 是一个针对所有元素类型的 <em>CSS</em> 属性，<em>Chrome</em> 等浏览器并不支持该属性，目前仅只有 <em>Firefox</em> 浏览器对其提供支持。</p><p>由于 <em>mask-type</em> 属性只能作用于 <em>SVG</em> 元素上，因此默认值表现为 <em>SVG</em> 元素默认遮罩模式，也就是默认值是 <em>luminance</em> 亮度遮罩模式。如果需要支持透明度遮罩模式，可以这么设置：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">mask-type</span><span class="token punctuation">:</span> alpha<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="mask-composite" tabindex="-1"><a class="header-anchor" href="#mask-composite" aria-hidden="true">#</a> <em>mask-composite</em></h4><p><em>mask-composite</em> 属性表示同时使用多张图片进行遮罩时的合成方式。默认值为 <em>add</em>，可选值为 <em>add、subtract、intersect、exclude</em>。</p><ul><li><em>mask-composite: add</em>：表示遮罩累加，这是默认值</li><li><em>mask-composite: subtract</em>：表示遮罩相减，也就是遮罩图片重合的区域不显示，这就意味着，遮罩层图片越多，遮罩区域越小。</li><li><em>mask-composite: intersect</em>：表示遮罩相交，也就是遮罩图片重合的区域才显示遮罩。</li><li><em>mask-composite: exclude</em>：表示遮罩排除，也就是遮罩图片重合的区域会被当作透明。</li></ul><p>-<em>EOF</em>-</p>`,106),i=[t];function c(o,l){return n(),a("div",null,i)}const u=s(p,[["render",c],["__file","18-CSS3zhezhao.html.vue"]]);export{u as default};
