import{_ as e,o,c as t,a as n}from"./app-b21c52a4.js";const r="/assets/js8-1-63a21a08.png",a="/assets/js8-2-6533b303.png",d="/assets/js8-3-a0bba708.png",c={},p=n('<h1 id="_08-dom-基本操作" tabindex="-1"><a class="header-anchor" href="#_08-dom-基本操作" aria-hidden="true">#</a> 08-DOM 基本操作</h1><p>从 dom 开始，我们所学的一切系统给我们<strong>生成的成组的东西，基本上都是类数组。</strong></p><p>大部分都是类数组——方法类操作。</p><p>**dom 树：**文档中不同的节点形成的树形结构</p><h2 id="dom-选择器" tabindex="-1"><a class="header-anchor" href="#dom-选择器" aria-hidden="true">#</a> DOM 选择器</h2><h3 id="getelementbyid" tabindex="-1"><a class="header-anchor" href="#getelementbyid" aria-hidden="true">#</a> getElementById()</h3><blockquote><p>元素 id 在 Ie8 以下的浏览器，不区分 id 大小写，而且也返回匹配 name 属性的元素，通过 id 标识我们来选择这个元素，一一对应。</p></blockquote><h3 id="getelementsbytagname" tabindex="-1"><a class="header-anchor" href="#getelementsbytagname" aria-hidden="true">#</a> getElementsByTagName()</h3><blockquote><p>标签名，这是一个类数组，最主流的用法，<strong>常用。</strong></p></blockquote><h3 id="getelementbyname" tabindex="-1"><a class="header-anchor" href="#getelementbyname" aria-hidden="true">#</a> getElementByName()</h3><blockquote><p>IE 不支持。</p><p>需注意，只有部分标签 name 可生效(表单，表单 元素，img，iframe)，不是在所有的浏览器都能用——<strong>开发一般不用</strong></p></blockquote><h3 id="getelementsbyclassname" tabindex="-1"><a class="header-anchor" href="#getelementsbyclassname" aria-hidden="true">#</a> getElementsByClassName()</h3><blockquote><p>类名 -&gt;缺点: ie8 和 ie8 以下的 ie 版本中没有，可 以多个 class 一起，不是所有浏览器都能用。</p></blockquote><h3 id="queryselector-queryselectorall" tabindex="-1"><a class="header-anchor" href="#queryselector-queryselectorall" aria-hidden="true">#</a> querySelector()/.querySelectorAll()</h3><blockquote><p>参数为 css 选择器。</p><p>在 IE7 及以下的版本中没有。</p><p>选择出来的元素<strong>不是实时的（是静态的）是副本，<strong>所以</strong>一般不用</strong>。</p></blockquote><h1 id="节点类型" tabindex="-1"><a class="header-anchor" href="#节点类型" aria-hidden="true">#</a> 节点类型</h1><h2 id="遍历节点树" tabindex="-1"><a class="header-anchor" href="#遍历节点树" aria-hidden="true">#</a> 遍历节点树</h2><p>灵活，兼容好，所有浏览器都支持。</p><p><strong>parentNode：</strong></p><p>父节点 (最顶端的 parentNode 为#document);</p><p><strong>childNodes：</strong></p><blockquote><p>子节点们(直接的节点数)，返回所有的类型的节点。</p><p><strong>节点类型：</strong></p><p>后面的数字是调用 nodeType 返回的数字。</p><p>元素节点 —— 1 属性节点 —— 2 节点 —— 3 注释节点 —— 8document —— 9DocumentFragment —— 11</p></blockquote><p><strong>firstChild：</strong></p><p>第一个子节点</p><p><strong>lastChild：</strong></p><p>最后一个子节点</p><p><strong>nextSibling：</strong></p><p>后一个兄弟节点</p><p><strong>previousSibling ：</strong></p><p>前一个兄弟节点</p><h2 id="基于元素节点树的遍历" tabindex="-1"><a class="header-anchor" href="#基于元素节点树的遍历" aria-hidden="true">#</a> 基于元素节点树的遍历</h2><p>不含文本节点。</p><p>除 children 外，其余 ie9 及以下不兼容。</p><p><strong>parentElement：</strong></p><p>返回当前元素的父元素节点 (IE9 不兼容)</p><p><strong>children:</strong></p><p>只返回当前元素的元素子节点。<strong>常用</strong>。</p><p><strong>firstElementChild：</strong></p><p>返回第一个元素子节点（IE9 不兼容）。</p><p><strong>lastElementChild：</strong></p><p>返回最后一个元素子节点（IE9 不兼容）。</p><p><strong>nextElementSibling/previousElementSibling:</strong></p><p>返回后一个/前一个兄弟元素节点（IE9 不兼容）。</p><h2 id="节点的四个属性" tabindex="-1"><a class="header-anchor" href="#节点的四个属性" aria-hidden="true">#</a> 节点的四个属性</h2><p><strong>nodeName:</strong></p><blockquote><p>元素的标签名，以大写形式表示，只读。</p></blockquote><p><strong>nodeValue:</strong></p><blockquote><p>Text 节点或 Comment 节点才有的文本属性，可读写。</p></blockquote><p><strong>nodeType:</strong></p><blockquote><p>该节点的类型，只读。<strong>常用</strong>。</p><p><strong>节点类型：</strong></p></blockquote><blockquote><p>后面的数字是调用 nodeType 返回的数字。</p><p>元素节点 —— 1 属性节点 —— 2</p></blockquote><blockquote><p>节点 —— 3</p></blockquote><blockquote><p>注释节点 —— 8</p></blockquote><blockquote><p>document —— 9</p></blockquote><blockquote><p>DocumentFragment —— 11</p></blockquote><p><strong>attributes:</strong></p><blockquote><p>ELement 节点的属性集合。</p></blockquote><h2 id="_2-4-node-haschildnodes" tabindex="-1"><a class="header-anchor" href="#_2-4-node-haschildnodes" aria-hidden="true">#</a> 2.4 Node.hasChildNodes()</h2><p>判断有没有子节点。返回值：true、false。</p><h1 id="_15-dom-继承树-dom-基本操作" tabindex="-1"><a class="header-anchor" href="#_15-dom-继承树-dom-基本操作" aria-hidden="true">#</a> 15-dom 继承树，dom 基本操作</h1><h1 id="_1-dom-继承树" tabindex="-1"><a class="header-anchor" href="#_1-dom-继承树" aria-hidden="true">#</a> 1 DOM 继承树</h1><p><strong>DOM 接口：</strong></p><p><img src="'+r+'" alt="image.png"></p><p><code>**Document**</code><strong>和</strong><code>**document的**</code><strong>关系？</strong></p><blockquote><p><code>document </code>继承自 <code>HTMLDocument.prototype</code>。<code>HTMLDocument.prototype</code>继承自 <code>Document.prototype</code> 。</p><p><code>document --&gt; HTMLDocument.prototype --&gt; Document.prototype</code></p></blockquote><p><img src="'+a+'" alt="image.png"></p><p><strong>看看每层返回的值？</strong><img src="'+d+'" alt="image.png"></p><h1 id="dom-基本操作" tabindex="-1"><a class="header-anchor" href="#dom-基本操作" aria-hidden="true">#</a> DOM 基本操作</h1><h2 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h2><p><strong>getElementById()：</strong></p><blockquote><p>定义在 <code>Document.prototype</code> 上，即 <code>Element</code> 节点上不能使用。</p></blockquote><p><strong>getElementsByName()：</strong></p><blockquote><p>定义在 <code>HTMLDocument.prototype</code>上，即非 html 中的 document 以外不能使用(<code>xml document,Element无法</code>使用)</p></blockquote><p><strong>getElementsByTagName():</strong></p><blockquote><p>定义在 <code>Document.prototype</code> 和<code>Element.prototype</code> 上。</p><p>开发中，经常利用先选择的父级，在他父级里面再次选什么元素来定位一个元素。</p></blockquote><p><strong>HTMLDocument.prototype():</strong></p><blockquote><p>定义了一些常用的属性，body，head 分别指代 HTML 文档中的<code>&lt;body&gt;&lt;head&gt;</code>标签。</p></blockquote><p><strong>Document.prototype()：</strong></p><blockquote><p>定义了 documentElement 属性，指代文档的根元素，在 HTML 文档中，总是指代<code>&lt;html&gt;</code>元素。</p></blockquote><p><strong>Document、Element 均能使用：</strong></p><blockquote><p>getElementsByClassName、querySelectorAll、querySelector 在 Document、Element 类中均有定义。</p></blockquote><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2><blockquote><p><code>document.createElement();</code> &gt; <code>document.createTextNode();``document.createComment();``document.createDocumentFragment()</code></p></blockquote><h2 id="插" tabindex="-1"><a class="header-anchor" href="#插" aria-hidden="true">#</a> 插</h2><blockquote><p><code>PARENTNODE.appendChild();</code> 剪切操作,可以操作已有的元素。</p><p><code>PARENTNODE.insertBefore(a,b);</code> 把 a 插到 b 之前。</p></blockquote><h2 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h2><blockquote><p><code>parent.removeChild();</code> // 被剪切出去了。</p><p><code>child.remove();</code> //自尽，完全删除。无参数，无返回值：undefined。</p></blockquote><h2 id="替换" tabindex="-1"><a class="header-anchor" href="#替换" aria-hidden="true">#</a> 替换</h2><blockquote><p><code>parent.replaceChild(new, origin);</code></p></blockquote><h1 id="element-节点" tabindex="-1"><a class="header-anchor" href="#element-节点" aria-hidden="true">#</a> Element 节点</h1><h2 id="一些属性" tabindex="-1"><a class="header-anchor" href="#一些属性" aria-hidden="true">#</a> 一些属性</h2><blockquote><p>innerHTML：可取，可写，可赋值。</p><p>innerText：可取，可赋值（火狐不兼容）</p></blockquote><pre><code>div.innerHTML=“123”;       // 是覆盖div.innerHTML+=&#39;456&#39;// 可赋值，可写值的才能+=\n</code></pre><h2 id="一些方法" tabindex="-1"><a class="header-anchor" href="#一些方法" aria-hidden="true">#</a> 一些方法</h2><blockquote><p>ele.setAttribute(); 设置</p><p>ele.getAttrbute(); 取值</p></blockquote>',95),s=[p];function l(h,i){return o(),t("div",null,s)}const m=e(c,[["render",l],["__file","08-dom.html.vue"]]);export{m as default};
