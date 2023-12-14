import{_ as s,o as e,c as a,a as n}from"./app-72013311.js";const o={},p=n(`<blockquote><p>WebSocket 协议（rfc6455）原文地址：</p><p>https://datatracker.ietf.org/doc/html/rfc6455</p></blockquote><h1 id="实时场景的旧处理方案" tabindex="-1"><a class="header-anchor" href="#实时场景的旧处理方案" aria-hidden="true">#</a> 实时场景的旧处理方案</h1><p>考虑网页中的以下场景：</p><ul><li>股票 K 线图</li><li>聊天</li><li>警报、重要通知</li><li>余座</li><li>抢购页面的库存</li><li>......</li></ul><p>上述场景有一个共同特点——<strong>实时性</strong></p><p>这种对实时性有要求的页面，会带来一些问题</p><p>比如下面的聊天场景</p><p><img src="http://mdrs.yuanjin.tech/img/20211028160932.png" alt="image-20211028160932756"></p><p>由于 HTTP 协议是请求-响应模式，请求必须在前，响应必须在后，这就导致了服务器无法「主动」的把消息告诉客户端。</p><p>开发者想了很多办法来解决这一问题</p><p>当然终极解决方案自然是 WebSocket，但了解过去的一些做法、参观前辈们经历的痛苦还是有益的。</p><h2 id="短轮询-short-polling" tabindex="-1"><a class="header-anchor" href="#短轮询-short-polling" aria-hidden="true">#</a> 短轮询 short polling</h2><p>短轮询是一种「话痨式」的方式</p><p>客户端每隔一小段时间就向服务器请求一次，询问有没有新消息</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 有新消息吗？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 没
<span class="token keyword">Note over</span> 客户端,服务器<span class="token operator">:</span> 一段时间后...
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 有新消息吗？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 没
<span class="token keyword">Note over</span> 客户端,服务器<span class="token operator">:</span> 一段时间后...
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 有新消息吗？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 有，user1对你说：你好
<span class="token keyword">Note over</span> 客户端,服务器<span class="token operator">:</span> 一段时间后...
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 有新消息吗？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 没
<span class="token keyword">Note over</span> 客户端,服务器<span class="token operator">:</span> 一段时间后...
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 有新消息吗？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 没
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现短轮询是非常简单的，客户端只需要设置一个计时器不断发送请求即可</p><p>这种方案的缺陷是非常明显的：</p><ul><li>会产生大量无意义的请求</li><li>会频繁打开关闭连接</li><li>实时性并不高</li></ul><h2 id="长轮询-long-polling" tabindex="-1"><a class="header-anchor" href="#长轮询-long-polling" aria-hidden="true">#</a> 长轮询 long polling</h2><p>我们的前辈在有限的条件下，充分发挥智慧，来解决短轮询的问题，于是演化为<strong>长轮询</strong></p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
客户端<span class="token arrow operator">-&gt;&gt;</span>+服务器<span class="token operator">:</span> 有新消息吗？
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 没有消息不会响应
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 一段时间后...
服务器<span class="token arrow operator">-&gt;&gt;</span>-客户端<span class="token operator">:</span> user1对你说：你好
客户端<span class="token arrow operator">-&gt;&gt;</span>+服务器<span class="token operator">:</span> 有新消息吗？
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 没有消息不会响应
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 一段时间后...
服务器<span class="token arrow operator">-&gt;&gt;</span>-客户端<span class="token operator">:</span> user1对你说：你吃了没
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> ......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>长轮询有效的解决了「话痨问题」，让每一次请求和响应都是有意义的</p><p>但长轮询仍然存在问题：</p><ul><li><p>客户端长时间收不到响应会导致超时，从而主动断开和服务器的连接</p><blockquote><p>这种情况是可以处理的，但 ajax 请求因为超时而结束时，立即重新发送请求到服务器</p><p>虽然这种做法会让之前的请求变得无意义，但毕竟比短轮询好多了</p></blockquote></li><li><p>由于客户端可能「过早的」请求了服务器，服务器不得不挂起这个请求直到新消息的出现。这会让服务器长时间的占用资源却没什么实际的事情可做。</p></li></ul><h1 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h1><p>伴随着 HTML5 出现的 WebSocket，从<strong>协议</strong>上赋予了服务器主动推送消息的能力</p><img src="http://mdrs.yuanjin.tech/img/20211028171840.png" alt="image-20211028171840145" style="zoom:50%;" align="left"><p>从上图可以看出：</p><ul><li>WebSocket 也是建立在 TCP 协议之上的，利用的是 TCP 全双工通信的能力</li><li>使用 WebSocket，会经历两个阶段：握手阶段、通信阶段</li></ul><p>虽然优于轮询方案，但 WebSocket 仍然是有缺点的：</p><ul><li><p>兼容性</p><p>WebSocket 是 HTML5 新增的内容，因此古董版本的浏览器并不支持</p></li><li><p>维持 TCP 连接需要耗费资源</p><p>对于那些消息量少的场景，维持 TCP 连接确实会造成资源的浪费</p><blockquote><p>为了充分利用 TCP 连接的资源，在使用了 WebSocket 的页面，可以放弃 ajax，都用 WebSocket 进行通信，当然这会带来程序设计上的一些问题，需要权衡。</p></blockquote></li></ul><h2 id="握手" tabindex="-1"><a class="header-anchor" href="#握手" aria-hidden="true">#</a> 握手</h2><blockquote><p>WebSocket 协议是一个高扩展性的协议，详细内容会比较复杂，这里仅讲解面试中会问到的握手协议</p></blockquote><p>当客户端需要和服务器使用 WebSocket 进行通信时，首先会使用<strong>HTTP 协议</strong>完成一次特殊的请求-响应，这一次请求-响应就是<strong>WebSocket 握手</strong></p><p>在握手阶段，首先由客户端向服务器发送一个请求，请求地址格式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用HTTP</span>
ws://mysite.com/path
<span class="token comment"># 使用HTTPS</span>
wss://mysite.com/path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求头如下：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">Connection</span><span class="token punctuation">:</span> Upgrade <span class="token comment">/* 嘿，后续咱们别用HTTP了，升级吧 */</span>
<span class="token property">Upgrade</span><span class="token punctuation">:</span> websocket <span class="token comment">/* 我们把后续的协议升级为websocket */</span>
<span class="token property">Sec-WebSocket-Version</span><span class="token punctuation">:</span> 13 <span class="token comment">/* websocket协议版本就用13好吗？ */</span>
<span class="token property">Sec-WebSocket-Key</span><span class="token punctuation">:</span> YWJzZmFkZmFzZmRhYw== <span class="token comment">/* 暗号：天王盖地虎 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器如果同意，就应该响应下面的消息</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>HTTP/1.1 101 Switching Protocols <span class="token comment">/* 换，马上换协议 */</span>
<span class="token property">Connection</span><span class="token punctuation">:</span> Upgrade <span class="token comment">/* 协议升级了 */</span>
<span class="token property">Upgrade</span><span class="token punctuation">:</span> websocket <span class="token comment">/* 升级到websocket */</span>
<span class="token property">Sec-WebSocket-Accept</span><span class="token punctuation">:</span> ZzIzMzQ1Z2V3NDUyMzIzNGVy <span class="token comment">/* 暗号：小鸡炖蘑菇 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>握手完成，后续消息收发不再使用 HTTP，任何一方都可以主动发消息给对方</strong></p><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><ol><li><p>webSocket 协议是什么，能简述一下吗？</p><blockquote><p>参考答案：</p><p>websocket 协议 HTML5 带来的新协议，相对于 http，它是一个持久连接的协议，它利用 http 协议完成握手，然后通过 TCP 连接通道发送消息，使用 websocket 协议可以实现服务器主动推送消息。</p><p>首先，客户端若要发起 websocket 连接，首先必须向服务器发送 http 请求以完成握手，请求行中的 path 需要使用<code>ws:</code>开头的地址，请求头中要分别加入<code>upgrade、connection、Sec-WebSocket-Key、Sec-WebSocket-Version</code>标记</p><p>然后，服务器收到请求后，发现这是一个 websocket 协议的握手请求，于是响应行中包含<code>Switching Protocols</code>，同时响应头中包含<code>upgrade、connection、Sec-WebSocket-Accept</code>标记</p><p>当客户端收到响应后即可完成握手，随后使用建立的 TCP 连接直接发送和接收消息。</p></blockquote></li><li><p>webSocket 与传统的 http 有什么优势</p><blockquote><p>参考答案：</p><p>当页面中需要观察实时数据的变化（比如聊天、k 线图）时，过去我们往往使用两种方式完成</p><p>第一种是短轮询，即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据</p><p>第二种是长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。</p><p>无论是哪一种方式，都暴露了 http 协议的弱点，即响应必须在请求之后发生，服务器是被动的，无法主动推送消息。而让客户端不断的发起请求又白白的占用了资源。</p><p>websocket 的出现就是为了解决这个问题，它利用 http 协议完成握手之后，就可以与服务器建立持久的连接，服务器可以在任何需要的时候，主动推送消息给客户端，这样占用的资源最少，同时实时性也最高。</p></blockquote></li><li><p>前端如何实现即时通讯？</p><blockquote><p>参考答案：</p><ol><li>短轮询。即客户端每隔一段时间就向服务器发送消息，询问有没有新的数据</li><li>长轮询，发起一次请求询问服务器，服务器可以将该请求挂起，等到有新消息时再进行响应。响应后，客户端立即又发起一次请求，重复整个流程。</li><li>websocket，握手完毕后会建立持久性的连接通道，随后服务器可以在任何时候推送新消息给客户端</li></ol></blockquote></li></ol>`,43),t=[p];function r(l,c){return e(),a("div",null,t)}const d=s(o,[["render",r],["__file","08-WebSocket.html.vue"]]);export{d as default};
