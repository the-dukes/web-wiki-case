import{_ as n,o as s,c as a,a as t}from"./app-0e5daedb.js";const p={},e=t(`<h1 id="_07-小程序中的网络请求" tabindex="-1"><a class="header-anchor" href="#_07-小程序中的网络请求" aria-hidden="true">#</a> 07-小程序中的网络请求</h1><p>在小程序中，使用 wx.request( ) 这个方法来发送网路请求，整个请求的方式和 jQuery 里面的 $.ajax 方法是非常相似的。</p><p>在 wx.request( ) 这个方法中，接收一个配置对象，该配置对象中能够配置的项目如下表：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-12-020112.png" alt="image-20230112100111671" style="zoom:50%;"><h2 id="关于服务器接口" tabindex="-1"><a class="header-anchor" href="#关于服务器接口" aria-hidden="true">#</a> 关于服务器接口</h2><p>有关服务器接口的配置，需要满足以下两点：</p><ul><li>要求必须要是 https 接口</li><li>https 接口对应的域名还必须要在小程序管理平台进行配置</li></ul><p>【开发】-【开发管理】-【开发设置】下面有一个【服务器域名】，在这个位置进行配置</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-12-020716.png" alt="image-20230112100715734" style="zoom:50%;"><p><strong>我如果是开发环境怎么办？</strong></p><p>在开发环境下，因为开发阶段的服务器接口还没部署到现网的域名下，所以我们可以选择不校验 HTTPS 证书，具体的方式如下图所示：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-12-021116.png" alt="image-20230112101115812" style="zoom:50%;"><h2 id="向服务器传递参数" tabindex="-1"><a class="header-anchor" href="#向服务器传递参数" aria-hidden="true">#</a> 向服务器传递参数</h2><p>一般来讲，用得比较多的有 GET 和 POST 请求</p><ul><li>GET <ul><li>可以放在 URL 后面（URL 长度有限制，并且还会做一次 URL 的 encode）</li><li>也可以放在 data 配置项目里面</li></ul></li><li>POST <ul><li>只能放在 data 里面</li></ul></li></ul><p>综上所述，建议就把数据放在 data 里面</p><h2 id="收到回包" tabindex="-1"><a class="header-anchor" href="#收到回包" aria-hidden="true">#</a> 收到回包</h2><p>只要收到了服务器返回的信息，都会进入到 success 的回调函数，然后我们再在 success 回调函数中根据服务器返回的内容来做下一步操作。</p><p>接下来，我们来看一个具体例子</p><p>到时候大家会拿到一个名为 server 的服务器代码，大家拿到后，首先使用 npm i 安装依赖包，安装完成后，使用 npm start 启动这个服务器即可。该服务器默认监听 3000 端口，该服务器提供两个接口：</p><ul><li>/ ：这是 GET 请求，服务器端会返回 {name : &quot;zhangsan&quot;, age : 18}</li><li>/abc：这是一个 POST 请求，服务器端会返回 {name : &quot;lisi&quot;, age : 20}</li></ul><p>当你安装了依赖包，使用 npm start 启动服务器后，看到下面的画面说明服务器已经启动成功</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-01-12-023354.png" alt="image-20230112103354180" style="zoom:50%;"><p>接下来在小程序端通过 wx.request 进行请求的发送，代码片段如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 向服务器发送 Get 请求</span>
<span class="token function">sendGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">loginId</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>loginId<span class="token punctuation">,</span>
      <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>password
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 向服务器发送 Post 请求</span>
  <span class="token function">sendPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000/abc&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span> <span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">loginId</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>loginId<span class="token punctuation">,</span>
        <span class="token literal-property property">password</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>password
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用技巧" tabindex="-1"><a class="header-anchor" href="#使用技巧" aria-hidden="true">#</a> 使用技巧</h2><p>一般来讲，在发送请求的时候，有三点可以优化：</p><ul><li>和服务器通信的过程中，需要显示一个 loading 框 <ul><li>wx.showLoading( )：显示 loading 框</li><li>wx.hideLoading( )：隐藏 loading 框</li></ul></li><li>设置超时时间 <ul><li>在 app.json 中设置 networkTimeout</li></ul></li><li>如果处理失败，需要显示一个提示 <ul><li>wx.showToast( )</li></ul></li></ul><p>本节课结束之后，请通读官方文档对应的：<em>https://developers.weixin.qq.com/ebook?action=get_post_info&amp;docid=000ee27c9c8d98ab0086788fa5b00a#_ftn3</em></p>`,29),o=[e];function i(l,c){return s(),a("div",null,o)}const r=n(p,[["render",i],["__file","07-xiaochengxuzhongdewangluoqingqiu.html.vue"]]);export{r as default};