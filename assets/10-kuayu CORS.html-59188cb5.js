import{_ as n,o as s,c as a,a as e}from"./app-7f983beb.js";const t={},i=e(`<h1 id="cors" tabindex="-1"><a class="header-anchor" href="#cors" aria-hidden="true">#</a> CORS</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><code>CORS</code>是基于<code>http1.1</code>的一种跨域解决方案，它的全称是<strong>C</strong>ross-<strong>O</strong>rigin <strong>R</strong>esource <strong>S</strong>haring，跨域资源共享。</p><p>它的总体思路是：<strong>如果浏览器要跨域访问服务器的资源，需要获得服务器的允许</strong></p><p><img src="http://mdrs.yuanjin.tech/img/image-20200421152122793.png" alt="image-20200421152122793"></p><p>而要知道，一个请求可以附带很多信息，从而会对服务器造成不同程度的影响</p><p>比如有的请求只是获取一些新闻，有的请求会改动服务器的数据</p><p>针对不同的请求，CORS 规定了三种不同的交互模式，分别是：</p><ul><li><strong>简单请求</strong></li><li><strong>需要预检的请求</strong></li><li><strong>附带身份凭证的请求</strong></li></ul><p>这三种模式从上到下层层递进，请求可以做的事越来越多，要求也越来越严格。</p><p>下面分别说明三种请求模式的具体规范。</p><h2 id="简单请求" tabindex="-1"><a class="header-anchor" href="#简单请求" aria-hidden="true">#</a> 简单请求</h2><p>当浏览器端运行了一段 ajax 代码（无论是使用 XMLHttpRequest 还是 fetch api），浏览器会首先判断它属于哪一种请求模式</p><h2 id="简单请求的判定" tabindex="-1"><a class="header-anchor" href="#简单请求的判定" aria-hidden="true">#</a> 简单请求的判定</h2><p>当请求<strong>同时满足</strong>以下条件时，浏览器会认为它是一个简单请求：</p><ol><li><strong>请求方法属于下面的一种：</strong><ul><li>get</li><li>post</li><li>head</li></ul></li><li><strong>请求头仅包含安全的字段，常见的安全字段如下：</strong><ul><li><code>Accept</code></li><li><code>Accept-Language</code></li><li><code>Content-Language</code></li><li><code>Content-Type</code></li><li><code>DPR</code></li><li><code>Downlink</code></li><li><code>Save-Data</code></li><li><code>Viewport-Width</code></li><li><code>Width</code></li></ul></li><li><strong>请求头如果包含<code>Content-Type</code>，仅限下面的值之一：</strong><ul><li><code>text/plain</code></li><li><code>multipart/form-data</code></li><li><code>application/x-www-form-urlencoded</code></li></ul></li></ol><p>如果以上三个条件同时满足，浏览器判定为简单请求。</p><p>下面是一些例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 简单请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://crossdomain.com/api/news&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 请求方法不满足要求，不是简单请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://crossdomain.com/api/news&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 加入了额外的请求头，不是简单请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://crossdomain.com/api/news&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 简单请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://crossdomain.com/api/news&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// content-type不满足要求，不是简单请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://crossdomain.com/api/news&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="简单请求的交互规范" tabindex="-1"><a class="header-anchor" href="#简单请求的交互规范" aria-hidden="true">#</a> 简单请求的交互规范</h2><p>当浏览器判定某个<strong>ajax 跨域请求</strong>是<strong>简单请求</strong>时，会发生以下的事情</p><ol><li><strong>请求头中会自动添加<code>Origin</code>字段</strong></li></ol><p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 简单请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://crossdomain.com/api/news&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>请求发出后，请求头会是下面的格式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>GET /api/news/ HTTP/1.1
Host: crossdomain.com
Connection: keep-alive
...
Referer: http://my.com/index.html
Origin: http://my.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到最后一行没，<code>Origin</code>字段会告诉服务器，是哪个源地址在跨域请求</p><ol start="2"><li><strong>服务器响应头中应包含<code>Access-Control-Allow-Origin</code></strong></li></ol><p>当服务器收到请求后，如果允许该请求跨域访问，需要在响应头中添加<code>Access-Control-Allow-Origin</code>字段</p><p>该字段的值可以是：</p><ul><li>*：表示我很开放，什么人我都允许访问</li><li>具体的源：比如<code>http://my.com</code>，表示我就允许你访问</li></ul><blockquote><p>实际上，这两个值对于客户端<code>http://my.com</code>而言，都一样，因为客户端才不会管其他源服务器允不允许，就关心自己是否被允许</p><p>当然，服务器也可以维护一个可被允许的源列表，如果请求的<code>Origin</code>命中该列表，才响应<code>*</code>或具体的源</p><p><strong>为了避免后续的麻烦，强烈推荐响应具体的源</strong></p></blockquote><p>假设服务器做出了以下的响应：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
Date: Tue, 21 Apr 2020 08:03:35 GMT
...
Access-Control-Allow-Origin: http://my.com
...

消息体中的数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当浏览器看到服务器允许自己访问后，高兴的像一个两百斤的孩子，于是，它就把响应顺利的交给 js，以完成后续的操作</p><p>下图简述了整个交互过程</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200421162846480.png" alt="image-20200421162846480"></p><h2 id="需要预检的请求" tabindex="-1"><a class="header-anchor" href="#需要预检的请求" aria-hidden="true">#</a> 需要预检的请求</h2><p>简单的请求对服务器的威胁不大，所以允许使用上述的简单交互即可完成。</p><p>但是，如果浏览器不认为这是一种简单请求，就会按照下面的流程进行：</p><ol><li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li><li><strong>服务器允许</strong></li><li><strong>浏览器发送真实请求</strong></li><li><strong>服务器完成真实的响应</strong></li></ol><p>比如，在页面<code>http://my.com/index.html</code>中有以下代码造成了跨域</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 需要预检的请求</span>
<span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://crossdomain.com/api/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token comment">// post 请求</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置请求头</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;袁小进&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置请求体</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浏览器发现它不是一个简单请求，则会按照下面的流程与服务器交互</p><ol><li><strong>浏览器发送预检请求，询问服务器是否允许</strong></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>OPTIONS /api/user HTTP/1.1
Host: crossdomain.com
...
Origin: http://my.com
Access-Control-Request-Method: POST
Access-Control-Request-Headers: a, b, content-type
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，这并非我们想要发出的真实请求，请求中不包含我们的请求头，也没有消息体。</p><p>这是一个预检请求，它的目的是询问服务器，是否允许后续的真实请求。</p><p>预检请求<strong>没有请求体</strong>，它包含了后续真实请求要做的事情</p><p>预检请求有以下特征：</p><ul><li>请求方法为<code>OPTIONS</code></li><li>没有请求体</li><li>请求头中包含 <ul><li><code>Origin</code>：请求的源，和简单请求的含义一致</li><li><code>Access-Control-Request-Method</code>：后续的真实请求将使用的请求方法</li><li><code>Access-Control-Request-Headers</code>：后续的真实请求会改动的请求头</li></ul></li></ul><ol start="2"><li><strong>服务器允许</strong></li></ol><p>服务器收到预检请求后，可以检查预检请求中包含的信息，如果允许这样的请求，需要响应下面的消息格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
Date: Tue, 21 Apr 2020 08:03:35 GMT
...
Access-Control-Allow-Origin: http://my.com
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: a, b, content-type
Access-Control-Max-Age: 86400
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于预检请求，不需要响应任何的消息体，只需要在响应头中添加：</p><ul><li><code>Access-Control-Allow-Origin</code>：和简单请求一样，表示允许的源</li><li><code>Access-Control-Allow-Methods</code>：表示允许的后续真实的请求方法</li><li><code>Access-Control-Allow-Headers</code>：表示允许改动的请求头</li><li><code>Access-Control-Max-Age</code>：告诉浏览器，多少秒内，对于同样的请求源、方法、头，都不需要再发送预检请求了</li></ul><ol start="3"><li><strong>浏览器发送真实请求</strong></li></ol><p>预检被服务器允许后，浏览器就会发送真实请求了，上面的代码会发生下面的请求数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /api/user HTTP/1.1
Host: crossdomain.com
Connection: keep-alive
...
Referer: http://my.com/index.html
Origin: http://my.com

{&quot;name&quot;: &quot;袁小进&quot;, &quot;age&quot;: 18 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>服务器响应真实请求</strong></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HTTP/1.1 200 OK
Date: Tue, 21 Apr 2020 08:03:35 GMT
...
Access-Control-Allow-Origin: http://my.com
...

添加用户成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，当完成预检之后，后续的处理与简单请求相同</p><p>下图简述了整个交互过程</p><p><img src="http://mdrs.yuanjin.tech/img/image-20200421165913320.png" alt="image-20200421165913320"></p><h2 id="附带身份凭证的请求" tabindex="-1"><a class="header-anchor" href="#附带身份凭证的请求" aria-hidden="true">#</a> 附带身份凭证的请求</h2><p>默认情况下，ajax 的跨域请求并不会附带 cookie，这样一来，某些需要权限的操作就无法进行</p><p>不过可以通过简单的配置就可以实现附带 cookie</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// xhr</span>
<span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

<span class="token comment">// fetch api</span>
<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token string">&#39;include&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一来，该跨域的 ajax 请求就是一个<em>附带身份凭证的请求</em></p><p>当一个请求需要附带 cookie 时，无论它是简单请求，还是预检请求，都会在请求头中添加<code>cookie</code>字段</p><p>而服务器响应时，需要明确告知客户端：服务器允许这样的凭据</p><p>告知的方式也非常的简单，只需要在响应头中添加：<code>Access-Control-Allow-Credentials: true</code>即可</p><p>对于一个附带身份凭证的请求，若服务器没有明确告知，浏览器仍然视为跨域被拒绝。</p><p>另外要特别注意的是：<strong>对于附带身份凭证的请求，服务器不得设置 <code>Access-Control-Allow-Origin 的值为*</code></strong>。这就是为什么不推荐使用*的原因</p><h2 id="一个额外的补充" tabindex="-1"><a class="header-anchor" href="#一个额外的补充" aria-hidden="true">#</a> 一个额外的补充</h2><p>在跨域访问时，JS 只能拿到一些最基本的响应头，如：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。</p><p><code>Access-Control-Expose-Headers</code>头让服务器把允许浏览器访问的头放入白名单，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Access-Control-Expose-Headers: authorization, a, b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样 JS 就能够访问指定的响应头了。</p>`,79),o=[i];function p(l,c){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","10-kuayu CORS.html.vue"]]);export{d as default};
