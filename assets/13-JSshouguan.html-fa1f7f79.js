import{_ as a,r,o as i,c as d,b as t,d as e,e as n,a as p}from"./app-b21c52a4.js";const c="/assets/js13-1-1159487e.png",s="/assets/js13-2-c14851c4.png",l={},h=t("h1",{id:"_13-bom",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_13-bom","aria-hidden":"true"},"#"),e(" 13-BOM")],-1),u={href:"https://www.w3school.com.cn/jsref/dom_obj_window.asp",target:"_blank",rel:"noopener noreferrer"},g=p(`<h2 id="什么是-bom" tabindex="-1"><a class="header-anchor" href="#什么是-bom" aria-hidden="true">#</a> 什么是 BOM？</h2><p>BOM 是 browser object model 的缩写，简称浏览器对象模型。</p><p>主要处理浏览器窗口（window）和框架（iframe），描述了与浏览器进行交互的方法和接口，可以对浏览器窗口进行访问和操作，不过通常浏览器特定的 JavaScript 扩展都被看做 BOM 的一部分。</p><p><strong>扩展如下：</strong></p><blockquote><p>1.弹出新的浏览器窗口 2.移动、关闭浏览器窗口以及调整窗口大小 3.提供 Web 浏览器详细信息的定位对象 4.提供用户屏幕分辨率详细信息的屏幕对象</p><p>5.对 cookie 的支持</p><p>6.IE 扩展了 BOM，加入了 ActiveXObject 类，可以通过 JavaScript 实例化 ActiveX 对象</p></blockquote><h2 id="bom-核心-window" tabindex="-1"><a class="header-anchor" href="#bom-核心-window" aria-hidden="true">#</a> BOM 核心 window</h2><p>window 对象是 BOM 的顶层(核心)对象，玩转 BOM，就是玩转 window 的属性和方法。</p><p>Window 对象它具有双重角色，既是通过 js 访问浏览器窗口的一个接口，又是一个全局对象。这意味着在网页中定义的任何对象，变量和函数，都是 window 的属性。</p><h2 id="bom-的组成" tabindex="-1"><a class="header-anchor" href="#bom-的组成" aria-hidden="true">#</a> BOM 的组成</h2><p>Window： JavaScript 层级中的顶层对象表示浏览器窗口。</p><p>Navigator：包含客户端浏览器的信息。</p><p>History： 包含了浏览器窗口访问过的 URL。</p><p>Location： 包含了当前 URL 的信息。</p><p>Screen： 包含客户端显示屏的信息。兼容性太差，用的很少。</p><h1 id="bom-对象" tabindex="-1"><a class="header-anchor" href="#bom-对象" aria-hidden="true">#</a> BOM 对象</h1><h2 id="window" tabindex="-1"><a class="header-anchor" href="#window" aria-hidden="true">#</a> Window</h2><p>Window： JavaScript 层级中的顶层对象表示浏览器窗口。</p><h3 id="window-对象属性" tabindex="-1"><a class="header-anchor" href="#window-对象属性" aria-hidden="true">#</a> window 对象属性</h3><p>history</p><p>对 History 对象的只读引用。请参数 History 对象。</p><p>innerheight</p><p>返回窗口的文档显示区的高度。</p><p>innerwidth</p><p>返回窗口的文档显示区的宽度。</p><p>location</p><p>用于窗口或框架的 Location 对象。请参阅 Location 对象。</p><p>Navigator</p><p>对 Navigator 对象的只读引用。请参数 Navigator 对象。</p><p>pageXOffset</p><p>设置或返回当前页面相对于窗口显示区左上角的 X 位置。</p><p>pageYOffset</p><p>设置或返回当前页面相对于窗口显示区左上角的 Y 位置。</p><p>parent</p><p>返回父窗口。</p><p>Screen</p><p>对 Screen 对象的只读引用。请参数 Screen 对象。</p><p>top</p><p>返回最顶层的先辈窗口。</p><p>screenLeft screenTop screenX screenY</p><p>只读整数。声明了窗口的左上角在屏幕上的的 x 坐标和 y 坐标。IE、Safari、Chrome 和 Opera 支持 screenLeft 和 screenTop，而 Chrome、Firefox 和 Safari 支持 screenX 和 screenY。</p><h3 id="window-对象方法" tabindex="-1"><a class="header-anchor" href="#window-对象方法" aria-hidden="true">#</a> window 对象方法</h3><p>alert()</p><p>显示带有一段消息和一个确认按钮的警告框。</p><p>clearInterval()</p><p>取消由 setInterval() 设置的 timeout。</p><p>clearTimeout()</p><p>取消由 setTimeout() 方法设置的 timeout。</p><p>close()</p><p>关闭浏览器窗口。</p><p>confirm()</p><p>显示带有一段消息以及确认按钮和取消按钮的对话框。返回值：true,false</p><p>open()</p><p>打开一个新的浏览器窗口或查找一个已命名的窗口。window.open(URL,name,features,replace)</p><p>prompt()</p><p>显示可提示用户输入的对话框。</p><p>scrollBy()</p><p>按照指定的像素值来滚动内容。</p><p>scrollTo()</p><p>把内容滚动到指定的坐标。</p><p>setInterval()</p><p>按照指定的周期(以毫秒计)来调用函数或计算表达式。</p><p>setTimeout()</p><p>在指定的毫秒数后调用函数或计算表达式。</p><p>**案例：**图片懒加载模拟。</p><pre><code>&lt;body&gt;
    &lt;div style=&quot;width: 200px; height: 200px; background-color: #f40; opacity: 0.3; margin: 1000px auto;&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
        // offsetTop    元素距顶部
        // window.pageYoffset   纵向滚动距离
        // window.innerHeight   可视区高度
        var oDiv = document.getElementsByTagName(&#39;div&#39;)[0];

        document.addEventListener(&#39;scroll&#39;,demo);
        function demo() {
            if ( oDiv.offsetTop &lt;= window.pageYOffset + window.innerHeight) {
                var timer = setInterval(function() {
                    if (oDiv.style.opacity == &#39;1&#39;) {
                        clearInterval(timer);
                    } else {
                        oDiv.style.opacity = parseFloat(oDiv.style.opacity) + 0.01;
                        console.log(oDiv.style.opacity);
                    }
                },90)
            } else {
                oDiv.style.opacity = 0.3;
            }
        }
    &lt;/script&gt;
&lt;/body&gt;
</code></pre><p><strong>案例：open()</strong></p><blockquote><p>返回值 wIndow。</p></blockquote><pre><code>// 新弹出窗口
window.open(&#39;https://www.baidu.com&#39;,&#39;duyi&#39;,&#39;width=400,height=200&#39;);

// 新标签打开
window.open(&#39;https://www.baidu.com&#39;);
</code></pre><h2 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> Navigator</h2><h2 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h2><h3 id="history-对象属性、方法" tabindex="-1"><a class="header-anchor" href="#history-对象属性、方法" aria-hidden="true">#</a> History 对象属性、方法</h3><p>length</p><p>返回浏览器历史列表中的 URL 数量。</p><p>back()</p><p>加载 history 列表中的前一个 URL。</p><p>forward()</p><p>加载 history 列表中的下一个 URL。</p><p>go()</p><p>加载 history 列表中的某个具体页面。</p><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> Location</h2><pre><code>//url

//协议
// https://

// //域名
// www.baidu.com:443
// //路径
// /s

// //参数
// ?ie=utf-8&amp;f=8&amp;rsv_bp=0&amp;rsv_idx=1&amp;tn=baidu&amp;wd=nba&amp;rsv_pq=b07bc8ac00008677&amp;rsv_t=6332vNWuKAWk0z%2Be3i0Us%2Fy57isnFUgi5BkSHV66DDbmlHqv%2B4z3clPFJwY&amp;rqlang=cn&amp;rsv_enter=1&amp;rsv_sug3=3&amp;rsv_sug1=3&amp;rsv_sug7=100&amp;rsv_sug2=0&amp;inputT=448&amp;rsv_sug4=448
// //锚点
// #dasdas
</code></pre><h3 id="location-对象属性" tabindex="-1"><a class="header-anchor" href="#location-对象属性" aria-hidden="true">#</a> Location 对象属性</h3><p>hash</p><p>设置或返回从井号 (#) 开始的 URL(锚)。</p><p>host</p><p>设置或返回主机名和当前 URL 的端口号。</p><p>href</p><p>设置或返回完整的 URL。</p><p>pathname</p><p>设置或返回当前 URL 的路径部分。</p><p>protocol</p><p>设置或返回当前 URL 的协议。</p><p>search</p><p>设置或返回从问号 (?) 开始的 URL(查询部分)。</p><h3 id="location-对象方法" tabindex="-1"><a class="header-anchor" href="#location-对象方法" aria-hidden="true">#</a> Location 对象方法</h3>`,95),m={href:"https://www.w3school.com.cn/jsref/met_loc_assign.asp",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.w3school.com.cn/jsref/met_loc_reload.asp",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.w3school.com.cn/jsref/met_loc_replace.asp",target:"_blank",rel:"noopener noreferrer"},f=p('<h2 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> Screen</h2><h3 id="screen-对象属性" tabindex="-1"><a class="header-anchor" href="#screen-对象属性" aria-hidden="true">#</a> Screen 对象属性</h3><p>assign()</p><p>加载新的文档。</p><p>reload(‘force’)</p><p>重新加载当前文档。参数可选，不填或填 false 则取浏览器缓存的文档</p><p>replace()</p><p>用新的文档替换当前文档。</p><h1 id="浏览器基本组成" tabindex="-1"><a class="header-anchor" href="#浏览器基本组成" aria-hidden="true">#</a> 浏览器基本组成</h1><p><strong>浏览器请求页面大致经历了哪些过程?</strong></p><blockquote><ol><li><p>发送 url：DNS 查询，请求 IP 地址</p></li><li><p>TCP 三次握手</p></li><li><p>服务器响应内容</p></li><li><p>按照成哥讲的 js 时间线理解 js 解析执行的过程就好</p></li><li><p>渲染页面： DOM 树 CSSDOM 树，生成 RENDER 树，布局，渲染</p></li><li><p>TCP 四次挥手</p></li></ol></blockquote><p><strong>浏览器基本组成：</strong></p><blockquote><ol><li>用户界面</li><li>浏览器引擎</li><li>渲染引擎：(html、css 渲染）</li><li>网络</li><li>UI 后端</li><li>Js 引擎：</li><li>数据存储：提供持久化缓存。</li></ol></blockquote><p><img src="'+c+'" alt="image.png"></p><h1 id="渲染引擎-渲染模式" tabindex="-1"><a class="header-anchor" href="#渲染引擎-渲染模式" aria-hidden="true">#</a> 渲染引擎-渲染模式</h1><p><strong>渲染引擎，渲染过程？</strong></p><blockquote><p>渲染引擎:</p><p>其职责就是渲染，即在浏览器窗口中显示所请求的内容。 过程：解析 html 从而构建 DOM 树-&gt;CSS Rule 树-&gt;构建 Render 树-&gt;布局 Render 树-&gt;绘制 Render 树。</p></blockquote><p><img src="'+s+`" alt="image.png"></p><p><strong>渲染模式的历史意义？</strong></p><p>在多年以前（IE6 诞生以前），各浏览器都处于各自比较封闭的发展中（基本没有兼容性可谈）。</p><p>随着 WEB 的发展，兼容性问题的解决越来越显得迫切，随即，各浏览器厂商发布了按照标准模式（遵循各厂商制定的统一标准）工作的浏览器，比如 IE6 就是其中之一。</p><p>但是考虑到以前建设的网站并不支持标准模式，所以各浏览器在加入标准模式的同时也保留了混杂模式（即以前那种未按照统一标准工作的模式，也叫怪异模式）。</p><p><strong>渲染模式如何控制？</strong></p><blockquote><p>三种标准模式的写法。</p></blockquote><pre><code>1.&lt;!DOCTYPE html&gt;

2.&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01//EN&quot; &quot;http://www.w3.org/TR/html4/strict.dtd&quot;&gt;

3.&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;
</code></pre><h1 id="查漏补缺" tabindex="-1"><a class="header-anchor" href="#查漏补缺" aria-hidden="true">#</a> 查漏补缺</h1><h2 id="label-标签" tabindex="-1"><a class="header-anchor" href="#label-标签" aria-hidden="true">#</a> Label 标签</h2><p>绑定在一起，一体化。</p><p>**案例：**绑定 label 和 input，点击文字获得焦点。</p><pre><code>&lt;body&gt;
    &lt;label for=&quot;demo&quot;&gt;username&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;demo&quot;&gt;
&lt;/body&gt;
</code></pre><h2 id="属性和特性" tabindex="-1"><a class="header-anchor" href="#属性和特性" aria-hidden="true">#</a> 属性和特性</h2><p>属性包含特性。</p><blockquote><p>特性：type、value、id、class。DOM 对象 === input 一一映射关系，可以通过<code>domEle.prop</code>访问。</p><p>属性：data。自定义的。<code>domEle.prop</code>获取不到，只能通过<code>getAttribute()</code>获取。</p><p>通过<code>setAttriute()</code>设置的属性，只能通过<code>getAttribute()</code>获取。</p></blockquote><pre><code>&lt;body&gt;
    &lt;input type=&quot;text&quot; value=&quot;aaa&quot; id=&quot;demo&quot; data=&quot;duyi&quot; ss=&quot;ss&quot;&gt;
    &lt;script&gt;
        var oInput = document.getElementsByTagName(&#39;input&#39;)[0];
        // DOM 对象 === input 一一映射关系，可以通过domEle.prop访问。
        console.log(oInput);
        console.log(oInput.type);
        console.log(oInput.value);
        console.log(oInput.id);

        // 自定义的。domEle.prop 获取不到
        console.log(oInput.data);       // undefined

        // setAttribute() 设置的属性只能通过getAttribute()获取
        oInput.setAttribute(&#39;oSet&#39;,&#39;oSet&#39;);
        console.log(oInput.oSet);                   // undefined
        console.log(oInput.getAttribute(&#39;oSet&#39;));

    &lt;/script&gt;
&lt;/body&gt;
</code></pre><h2 id="图片预加载和懒加载" tabindex="-1"><a class="header-anchor" href="#图片预加载和懒加载" aria-hidden="true">#</a> 图片预加载和懒加载</h2><p>懒加载：按需加载。到那再加载。</p><p>预加载：提前加载。加载完成才显示。</p><p>**案例：**预加载</p><pre><code>&lt;body&gt;
    &lt;div id=&quot;demo&quot; style=&quot;width: 400px;height: 400px;border: 1px solid #ccc;&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
        var oDiv = document.getElementById(&#39;demo&#39;);
        // var oImg = document.crateElement(&#39;img&#39;);
        var oImg = new Image();
        oImg.src = &#39;http://i2.wp.com/clutch.hk/wp-content/uploads/2015/05/hawks-cavaliers-g1.jpg?resize=1200%2C788&#39;
        // 图片加载完成，才展示
        oImg.onload = function() {
            oDiv.appendChild(this);
        }
    &lt;/script&gt;
&lt;/body&gt;
</code></pre><p>**案例：**淘宝图片预加载+懒加载</p><blockquote><p>**懒加载：**监控滑轮事件，不断判断当前的位置</p><p>到达位置时，采取**预加载：**图片加载完成后， 把图片正式的添加到页面之中。</p></blockquote><pre><code>&lt;body style=&quot;height: 2000px;&quot;&gt;
    &lt;div id=&#39;wrapper&#39; style=&quot;position: absolute; top: 1500px;&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
        var wrapper = document.getElementById(&#39;wrapper&#39;);

        // 1. 淘宝 图片预加载+懒加载
        // 将预加载函数定义在div元素的原型上
        HTMLDivElement.prototype.checkSelf = function() {
            if ( !this.lock) {
                if (this.offsetTop &lt; window.pageYOffset + window.innerHeight) {
                    // 加锁，防止加载多张图片
                    this.lock = true;

                    // 延时1000ms显示，不延时1000，加载完成即立即显示。
                    console.log(&#39;开始预加载。。。&#39;);
                    setTimeout(function() {
                        var oImg = new Image();
                        oImg.src = &#39;http://i2.wp.com/clutch.hk/wp-content/uploads/2015/05/hawks-cavaliers-g1.jpg?resize=1200%2C788&#39;;
                        // img 预加载完成，div添加
                        oImg.onload = function() {
                            wrapper.appendChild(this);
                        }
                    },1000)
                }
            }
        }

        // 滚动事件
        window.onscroll = function() {
            wrapper.checkSelf();
        }
    &lt;/script&gt;
&lt;/body&gt;
</code></pre><h2 id="math-random-应用" tabindex="-1"><a class="header-anchor" href="#math-random-应用" aria-hidden="true">#</a> Math.random() 应用</h2><blockquote><p><code>[0,1)</code> 区间。</p></blockquote><pre><code>				// 取12-36的随机数
        //  12-36     36-12=24   24 * Math.random() -&gt; [0, 24)  再加 12
				12 + 24 * Math.random() -&gt; [12, 36)
</code></pre><h2 id="文档碎片-虚拟-dom" tabindex="-1"><a class="header-anchor" href="#文档碎片-虚拟-dom" aria-hidden="true">#</a> 文档碎片-虚拟 DOM</h2><blockquote><p><strong>1.文档碎片：</strong></p><p><code>docuemnt.createDocumentFragment();</code> 集中操作减少布局计算（重排）和绘制次数（重绘）。后期并不常用，效率低。</p><p><strong>2.字符串拼接：</strong></p><p>字符串拼接的方式，<code>innerHTML = htmlStr;</code> 当前阶段建议使用。</p></blockquote><blockquote><p><strong>3.虚拟 DOM：</strong></p><p>操作 DOM 成本高，所以可以采用虚拟 DOM 来搞定。</p></blockquote><p><strong>文档碎片：</strong></p><pre><code>var oF = document.createDocumentFragment();
var oUl =
 for (var i = 0 ;i &lt; 10; i ++） {
      var newLi = document.createElement(&#39;li&#39;);
			newLi.innerText = i + &#39;&#39;;
		  oF.appendChild(newLi);		// 缓存起来。

      }
  oUl .appdendChild(oF);
</code></pre><p><strong>字符串拼接：</strong></p><blockquote><p>innerHTML()。</p></blockquote><pre><code>var htmlStr = &#39;&#39;;
var oUl =
 for (var i = 0 ;i &lt; 10; i ++） {
      htmlStr += &#39;&lt;li&gt;&#39; + i + &#39;&lt;/li&#39;;

      }
oUl.innerHTML = htmlstr;
</code></pre><p><strong>虚拟 DOM：</strong></p><blockquote><p>后期源码阶段。</p></blockquote><h2 id="断点调试" tabindex="-1"><a class="header-anchor" href="#断点调试" aria-hidden="true">#</a> 断点调试</h2><blockquote><p><code>debugger</code></p></blockquote>`,57);function v(q,_){const o=r("ExternalLinkIcon");return i(),d("div",null,[h,t("p",null,[t("a",u,[e("https://www.w3school.com.cn/jsref/dom_obj_window.asp"),n(o)])]),g,t("p",null,[e("属性描述"),t("a",m,[e("assign()"),n(o)]),e("加载新的文档。"),t("a",w,[e("reload()"),n(o)]),e("重新加载当前文档。"),t("a",b,[e("replace()"),n(o)]),e("用新的文档替换当前文档。")]),f])}const k=a(l,[["render",v],["__file","13-JSshouguan.html.vue"]]);export{k as default};
