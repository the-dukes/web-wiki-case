import{_ as a,o as s,c as n,a as e}from"./app-0e5daedb.js";const t={},p=e(`<h1 id="断点续传、断点下载" tabindex="-1"><a class="header-anchor" href="#断点续传、断点下载" aria-hidden="true">#</a> 断点续传、断点下载</h1><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><p>若要实现下载时的断点续传，首先，服务器在响应时，要在头中加入下面的字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept-Ranges: bytes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个字段是向客户端表明：我这个文件可以支持传输部分数据，你只需要告诉我你需要的是哪一部分的数据即可，单位是字节</p><p>此时，某些支持断点续传的客户端，比如迅雷，它就可以在请求时，告诉服务器需要的数据范围。具体做法是在请求头中加入下面的字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>range: bytes=0-5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>客户端告诉服务器：请给我传递 0-5000 字节范围内的数据即可，无须传输全部数据</p><p>完整流程如下</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> head请求，询问文件信息
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> Content-Disposition,Accept-Ranges,Content-Length
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> Range<span class="token operator">:</span>bytes=0-500
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 0-500字节的数据
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> Range<span class="token operator">:</span>bytes=501-1000
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 501-1000字节的数据
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> ...
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> ...
客户端<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 将碎片信息组装成完整文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上传" tabindex="-1"><a class="header-anchor" href="#上传" aria-hidden="true">#</a> 上传</h2><p>整体来说，实现断点上传的主要思路就是把要上传的文件切分为多个小的数据块然后进行上传</p><p><img src="http://mdrs.yuanjin.tech/img/20210918140242.png" alt="image-20210918140242356"></p><p>虽然分片上传的整体思路一致，但它没有一个统一的、具体的标准，因此需要根据具体的业务场景制定自己的标准。</p><p>由于标准的不同，这也就意味着分片上传需要自行编写代码实现。</p><p>下面用一种极其简易的流程实现分片上传</p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
<span class="token keyword">Note left of</span> 客户端<span class="token operator">:</span> 用户选择文件
<span class="token keyword">Note left of</span> 客户端<span class="token operator">:</span> 将文件分割为多个分片
<span class="token keyword">Note left of</span> 客户端<span class="token operator">:</span> 得到文件的MD5和每个分片的MD5
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 文件MD5、后缀、分片顺序、每个分片MD5
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 文件还剩哪些分片没有上传？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 还需要上传的分片MD5
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 上传一个分片
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 文件还剩哪些分片没有上传？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 还需要上传的分片MD5
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 上传一个分片
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 文件还剩哪些分片没有上传？
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 还需要上传的分片MD5
客户端<span class="token arrow operator">-&gt;&gt;</span>服务器<span class="token operator">:</span> 上传一个分片
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 所有分片已上传
<span class="token keyword">Note right of</span> 服务器<span class="token operator">:</span> 合并所有分片成完整的文件
服务器<span class="token arrow operator">-&gt;&gt;</span>客户端<span class="token operator">:</span> 文件的访问地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例服务器" tabindex="-1"><a class="header-anchor" href="#示例服务器" aria-hidden="true">#</a> 示例服务器</h2><h3 id="下载-1" tabindex="-1"><a class="header-anchor" href="#下载-1" aria-hidden="true">#</a> 下载</h3><p>http://localhost:8000/download/Wallpaper1.jpg</p><p>http://localhost:8000/download/Wallpaper2.jpg</p><p>http://localhost:8000/download/Wallpaper3.jpg</p><p>http://localhost:8000/download/Wallpaper4.jpg</p><p>http://localhost:8000/download/Wallpaper5.jpg</p><p>http://localhost:8000/download/Wallpaper6.jpg</p><p>http://localhost:8000/download/Wallpaper7.jpg</p><p>http://localhost:8000/download/Wallpaper8.jpg</p><p>http://localhost:8000/download/Wallpaper9.jpg</p><p>http://localhost:8000/download/Wallpaper10.jpg</p><h3 id="上传-1" tabindex="-1"><a class="header-anchor" href="#上传-1" aria-hidden="true">#</a> 上传</h3><h4 id="文件信息协商" tabindex="-1"><a class="header-anchor" href="#文件信息协商" aria-hidden="true">#</a> 文件信息协商</h4><p><strong>请求路径</strong>：/api/upload/handshake</p><p><strong>请求方法</strong>：POST</p><p><strong>字段</strong>：</p><table><thead><tr><th>字段名</th><th>含义</th><th>是否必须</th></tr></thead><tbody><tr><td>fileId</td><td>文件的 MD5 编码</td><td>是</td></tr><tr><td>ext</td><td>文件的后缀，例如：.jpg</td><td>是</td></tr><tr><td>chunkIds</td><td>文件分片的编号数组，每个编号是一个 MD5 编码</td><td>是</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>可能的响应</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8000/upload/a32d18.jpg&#39;</span> <span class="token comment">// 服务器已有该文件，无须上传</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;md5-1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;md5-2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;md5-5&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 服务器还需要上传的分片</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可能发生的失败响应</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
	<span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;请携带文件编号&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分片上传" tabindex="-1"><a class="header-anchor" href="#分片上传" aria-hidden="true">#</a> 分片上传</h4><p><strong>请求路径</strong>：/api/upload</p><p><strong>请求方法</strong>：POST</p><p><strong>字段</strong>：</p><table><thead><tr><th>字段名</th><th>含义</th><th>是否必须</th></tr></thead><tbody><tr><td>file</td><td>分片的二进制数据</td><td>是</td></tr><tr><td>chunkId</td><td>分片的 MD5 编码</td><td>是</td></tr><tr><td>fileId</td><td>分片所属文件的 MD5 编码</td><td>是</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>上传成功的响应</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;md5-2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;md5-5&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 服务器还需要上传的分片</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可能发生的失败响应</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
	<span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;请携带文件编号&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,49),r=[p];function o(l,d){return s(),n("div",null,r)}const c=a(t,[["render",o],["__file","21-duandianxuchuan.html.vue"]]);export{c as default};
