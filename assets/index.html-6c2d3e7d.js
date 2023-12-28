import{_ as n,o as s,c as a,a as p}from"./app-bb81f29b.js";const e={},t=p(`<h1 id="云开发" tabindex="-1"><a class="header-anchor" href="#云开发" aria-hidden="true">#</a> 云开发</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>官方文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html</p><p>使用云开发，最大的好处就在于开发者<strong>无需搭建服务器</strong>。</p><p><strong>云开发模式和传统模式对比</strong></p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-02-063100.png" alt="云开发介绍"></p><p>传统开发模式，需要考虑：</p><ul><li>成本：需要维护服务器的成本，在维护服务器时涉及到大量的服务器相关的知识内容，并且在并发量大了之后，还需要考虑服务器的扩展问题</li><li>技术：对于单纯只会前端技术的人员来讲，还存在学习后端技术的成本</li></ul><p>在微信小程序的云开发中，提供了 3 个核心的技术</p><ul><li>云数据库</li><li>云存储</li><li>云函数</li></ul><p><strong>云数据库</strong></p><p>云端提供了一个数据库，开发人员在小程序端可以直接对云端数据库的数据做一个增删改查的操作</p><p>云端的数据库是一个类似于 MongoDB 的文档类型存储数据库，里面存储的是一条一条的文档（JSON 文档），对于前端开发人员来讲非常好理解</p><p><strong>云存储</strong></p><p>在开发项目的时候，经常会涉及到文件的存储。有了云存储之后，我们可以上传文件到云端，当然也可以下载和删除。并且云存储自带 CDN（内容分发系统）</p><p><strong>云函数</strong></p><p>提供了在云端服务器执行代码的能力。</p><p>假设我现在有一个函数，这个函数里面涉及到了大量的运算，比较耗时。现在有了云函数之后，你可以把这个耗时的函数放到云端的服务器执行，云端服务器执行完该函数后，将结果返回到小程序端。</p><p>因此在进行云函数的调用时，一定是异步的。</p><blockquote><p><code>Serverless</code> 就是指应用的开发不再需要考虑服务器这样的硬件基础设施，基于 <code>Serverless</code> 架构的应用主要依赖于像腾讯云这样的云服务商提供的后台服务。比如说无服务云函数、云数据库、对象存储服务等等。简单来说，相当于你现在要开个水果店卖水果，以前你还得要租店面，搞水电、装修门面。现在这些都不用了，你就在一个已经搭好各种各样设施的超市里，租一个已经帮你搞好门面的架子或者箱子，卖得好你就租大一点，卖不好就租小一点，随时随地随你的心意，非常灵活。</p></blockquote><p>官方有一篇介绍云开发的文章：https://cloud.tencent.com/developer/article/1345700</p><p>点击【云开发】，就会进入到云开发控制台</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-02-065015.png" alt="image-20230202145015394" style="zoom:50%;"><p>在云开发控制台中，有一个环境 ID，这个 ID 很重要，后面我们在初始化小程序的云服务时，需要填写该 ID</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-02-065146.png" alt="image-20230202145145958"></p><p>在最早期的时候，微信小程序所提供的云开发是免费的，按量收费。但是现在整个小程序云开发更新了，<strong>更新为按月收费</strong>，并且根据你使用的量的不同，费用也不同。</p><h2 id="云数据库" tabindex="-1"><a class="header-anchor" href="#云数据库" aria-hidden="true">#</a> 云数据库</h2><p>首先第一步，需要初始化云服务器</p><p>你需要拿到你的环境 ID，接下来需要在 app.js 中做初始化工作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化云服务</span>
    wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">env</span><span class="token operator">:</span> <span class="token string">&#39;cloud1-5gsobkys7eb1b3ef&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化完毕后，我们就可以使用云服务了（云数据库、云存储、云函数）</p><p>下面是在云数据库中增加数据的示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 获取云端的数据库实例</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">database</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先获取云端数据库的实例，接下来通过数据库实例获取集合</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 再从数据库中获取到集合（表）</span>
<span class="token keyword">const</span> students <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;students&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过集合调用相应的方法来进行增删改查，例如要增加一条记录，那就是调用 add 方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>students
  <span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="云存储" tabindex="-1"><a class="header-anchor" href="#云存储" aria-hidden="true">#</a> 云存储</h2><p>所谓云存储，就是指可以将文件存储到云端。</p><p>在小程序端可以分别调用 <code>wx.cloud.uploadFile</code> 和 <code>wx.cloud.downloadFile</code> 完成上传和下载云文件操作。</p><p>在使用组件的时候，可能会出现“代码依赖分析，无法被其他模块引用”，这里可以参阅：https://developers.weixin.qq.com/community/develop/article/doc/00020631afc6c8c6f62e7b91855c13?idescene=6</p><p>主要就是在 project.config.json 中加入如下两项配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">ignoreDevUnusedFiles</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">,</span>
<span class="token literal-property property">ignoreUploadUnusedFiles</span><span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在上传的时候，注意 cloudPath 有命名的限制，具体可以参阅：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/storage/naming.html</p><h2 id="云函数" tabindex="-1"><a class="header-anchor" href="#云函数" aria-hidden="true">#</a> 云函数</h2><p>所谓云函数，就是一段代码在云端执行，执行完毕后将执行的结果返回给本地。</p><p>在使用云函数的时候，分为两个步骤：</p><ul><li>本地编写云函数，上传到云端</li><li>本地调用云端的函数</li></ul><p><strong>上传云函数</strong></p><p>首先第一步，我们在 project.config.json 里面配置云函数的目录：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;cloudfunctionRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;functions/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在上面的代码中，我们指定云函数在根目录下的 functions 目录下面</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-03-061843.png" alt="image-20230203141842697"></p><p>接下来在 functions 下面创建对应的云函数目录，例如：</p><p>之后再在 calc 目录中创建对应的 js 文件，书写云函数对应的逻辑：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-03-063310.png" alt="image-20230203143309653" style="zoom:50%;"><blockquote><p>注意：在编写和调用云函数的时候，一定要注意这是一个异步的过程。</p></blockquote><p>在编写云函数的时候，需要使用到 wx-server-sdk 这个依赖，在终端中 cd 到云函数所在的目录（例如我们这里是 calc），然后首先进行 npm init -y 初始化操作，然后输入 npm i wx-server-sdk 安装该依赖。</p><p>云函数的传入参数有两个，一个是 <code>event</code> 对象，一个是 <code>context</code> 对象。<code>event</code> 指的是触发云函数的事件，当小程序端调用云函数时，<code>event</code> 就是小程序端调用云函数时传入的参数，外加后端自动注入的小程序用户的 openid 和小程序的 appid。<code>context</code> 对象包含了此处调用的调用信息和运行状态，可以用它来了解服务运行的情况。</p><p>现在我们的云函数就已经编写完毕了。</p><p>编写完毕后我们需要上传这个云函数到云端</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-03-063504.png" alt="image-20230203143504058" style="zoom:50%;"><p>上传云函数成功之后，可以在控制面板的【云函数】面板中看到刚才所上传的云函数。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2023-02-03-063731.png" alt="image-20230203143730905"></p><p><strong>本地调用云端的函数</strong></p><p>在本地，通过 wx.cloud.callFunction 来进行云函数的调用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 云函数名称</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 传给云函数的参数</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fail</span><span class="token operator">:</span> console<span class="token punctuation">.</span>error
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","index.html.vue"]]);export{r as default};