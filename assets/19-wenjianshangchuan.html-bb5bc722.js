import{_ as n,o as a,c as s,a as e}from"./app-d6eaa58c.js";const t={},r=e(`<h1 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h1><h2 id="文件上传的消息格式" tabindex="-1"><a class="header-anchor" href="#文件上传的消息格式" aria-hidden="true">#</a> 文件上传的消息格式</h2><p>文件上传的本质仍然是一个数据提交，无非就是数据量大一些而已</p><p>在实践中，人们逐渐的形成了一种共识，我们自行规定，文件上传默认使用下面的请求格式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST 上传地址 HTTP/1.1
其他请求头
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name=&quot;avatar&quot;; filename=&quot;小仙女.jpg&quot;
Content-Type: image/jpeg

(文件二进制数据)
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name=&quot;username&quot;

admin
----WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name=&quot;password&quot;

123123
----WebKitFormBoundary7MA4YWxkTrZu0gW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>除非接口文档特别说明，文件上传一般使用 POST 请求</li><li>接口文档中会规定上传地址，一般一个站点会有一个统一的上传地址</li><li>除非接口文档特别说明，<code>content-type: multipart/form-data</code>，浏览器会自动分配一个定界符<code>boundary</code></li><li>请求体的格式是一个被定界符<code>boundary</code>分割的消息，每个分割区域本质就是一个键值对</li><li>除了键值对外，<code>multipart/form-data</code>允许添加其他额外信息，比如文件数据区域，一般会把文件在本地的名称和文件 MIME 类型告诉服务器</li></ul><h2 id="文件上传的实现" tabindex="-1"><a class="header-anchor" href="#文件上传的实现" aria-hidden="true">#</a> 文件上传的实现</h2><p>在现代的网页交互中，带表单的文件上传通常使用下面的方式实现</p><p><img src="http://mdrs.yuanjin.tech/img/20210917132919.png" alt="文件上传逻辑"></p><blockquote><p>后端开发服务器：http://localhost:8000</p></blockquote><h3 id="接口示例" tabindex="-1"><a class="header-anchor" href="#接口示例" aria-hidden="true">#</a> 接口示例</h3><h3 id="统一上传接口" tabindex="-1"><a class="header-anchor" href="#统一上传接口" aria-hidden="true">#</a> 统一上传接口</h3><p><strong>请求路径</strong>：/api/upload</p><p><strong>请求方法</strong>：POST</p><p><strong>字段名</strong>：file</p><p><strong>尺寸限制</strong>：1M</p><p><strong>支持的文件后缀</strong>：.jpg, .jpeg, .gif, .png, .bmp, .webp</p><p><strong>上传成功的响应</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8000/upload/a32d18.jpg&#39;</span> <span class="token comment">// 访问路径</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可能发生的失败响应</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
	<span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;文件超过了限制&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">403</span><span class="token punctuation">,</span>
	<span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;无效的文件类型&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户注册接口" tabindex="-1"><a class="header-anchor" href="#用户注册接口" aria-hidden="true">#</a> 用户注册接口</h3><p><strong>请求路径</strong>：/api/user/reg</p><p><strong>请求方法</strong>：POST</p><p><strong>支持消息类型</strong>：</p><ol><li>x-www-form-urlencoded</li><li>json</li></ol><p><strong>字段</strong>：</p><table><thead><tr><th>字段名</th><th>含义</th><th>是否必须</th></tr></thead><tbody><tr><td>username</td><td>账号</td><td>是</td></tr><tr><td>password</td><td>密码</td><td>是</td></tr><tr><td>avatar</td><td>头像</td><td>是</td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>注册成功的响应</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;monica&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">avatar</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:8000/upload/a234wq1.jpg&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),p=[r];function i(o,l){return a(),s("div",null,p)}const c=n(t,[["render",i],["__file","19-wenjianshangchuan.html.vue"]]);export{c as default};
