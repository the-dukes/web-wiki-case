import{_ as n,o as s,c as a,a as e}from"./app-bb81f29b.js";const t={},p=e(`<h1 id="_08-小程序中的本地存储" tabindex="-1"><a class="header-anchor" href="#_08-小程序中的本地存储" aria-hidden="true">#</a> 08-小程序中的本地存储</h1><p>微信小程序中的本地存储基本上也和 localStorage 是类似的，分为读和写：</p><ul><li>wx.getStorage（异步）</li><li>wx.getStorageSync（同步）</li><li>wx.setStorage（异步）</li><li>wx.setStorageSync（同步）</li></ul><p><strong>读取数据</strong></p><p>异步的读取，接收一个配置对象，对象里面首先有 key，表示你要读取哪一个数据，因为是异步，所以读取到的数据会传给 success 回调函数，如果读取失败，那么会触发 fail 回调函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span> <span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 读取成功后的回调</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 读取失败时的回调</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同步的读取，直接将读取到的值取出来使用即可：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> value <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>写入数据</strong></p><p>写入实际上也很简单，首先我们来看一下异步写入，使用到的是 wx.setStorage</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">setStorage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span> <span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span> <span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span> <span class="token comment">// 要写入的数据</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 写入成功后的回调</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 写入失败时的回调</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是同步写入，传入两个参数，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从 2.21.3 版本开始，往本地存储写入数据时，可以进行一个加密的操作，只需要配置 encrypt 为 true 即可。</p><p>但是有一些注意事项：</p><ul><li>只有异步的存储支持加密（因为加密的时候，回调耗时会增加，所以只能采用异步的方式）</li><li>如果进行了加密存储，在获取数据的时候，同样需要将 encrypt 设置为 true 进行解密</li><li>因为加密后字符串的长度会膨胀，所以每个 key 最大存储的长度变为了 0.7MB，最大的存储上线由之前的 10MB 变为了 7.1MB</li></ul><p><strong>缓存限制和隔离</strong></p><ul><li>不同小程序的本地缓存空间是分开的，即便是同一个小程序，但是不同的用户之间，也是分开的</li><li>每个小程序的缓存空间的上限为 10M，如果超过了 10M 再往缓存里面写入，就会触发 fail 的回调</li></ul><p>除了上面介绍到的获取和设置本地数据，常用还有：</p><ul><li>wx.removeStorage：从本地缓存中移除指定 key。</li><li>wx.removeStorageSync：上面方法的同步版本</li><li>wx.clearStorage：清空整个本地存储</li><li>wx.clearStorageSync：上面方法的同步版本</li></ul><p>本节课结束后，请通读官方文档对应的：<em>https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=000a2c7c9f4a981b0086bd31e5b40a</em></p><p>特别是是官方文档举了两个使用本地存储的需求案例：</p><ul><li>利用本地缓存提前渲染界面</li><li>缓存用户登录态 SessionId</li></ul>`,23),c=[p];function i(o,l){return s(),a("div",null,c)}const r=n(t,[["render",i],["__file","08-xiaochengxuzhongdebendicunchu.html.vue"]]);export{r as default};
