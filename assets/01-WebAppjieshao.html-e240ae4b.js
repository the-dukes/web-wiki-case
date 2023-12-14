import{_ as i,r as a,o as d,c as r,b as e,e as p,a as t}from"./app-d6eaa58c.js";const o={},s=t('<h1 id="_01-webapp-介绍" tabindex="-1"><a class="header-anchor" href="#_01-webapp-介绍" aria-hidden="true">#</a> 01- <em>WebApp</em> 介绍</h1><p>本文主要包含以下内容：</p><ul><li>什么是 <em>WebApp</em></li><li><em>WebApp</em> 的优缺点</li><li>开发 <em>WebApp</em> 需要哪些技术</li></ul><h2 id="什么是-webapp" tabindex="-1"><a class="header-anchor" href="#什么是-webapp" aria-hidden="true">#</a> 什么是 <em>WebApp</em></h2><p>在早期功能机时代，根本不存在什么手机应用的概念。基本上就是你买一个手机，这个手机上面有什么功能，你就用什么功能。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034244.png" alt="image-20220222114244141" style="zoom:50%;"><p>后面慢慢的新款诺基亚手机，提出了扩展手机应用的概念，除了出厂时手机里面内置的功能以外，用户还可以通过网络下载其他的手机应用。</p><p>不过那个时期大多以游戏为主，数量也非常的有限，并且还是按照机型进行区分，一部分机型可以安装某个应用，一部分机型不可以安装。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034307.png" alt="image-20220222114307559" style="zoom:50%;"><p>后来，智能手机时代来临，<em>IOS</em> 和 <em>Andriod</em> 两大阵营各自占领了半壁江山，手机也演变成了以应用（<em>Application</em>）为主的形态，包括之前大家所熟悉的“电话”、“短信”、“电话簿”等功能，在智能手机中都是以应用的形式存在。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034325.png" alt="image-20220222114325328" style="zoom:50%;"><p>刚开始的时候智能手机的应用倒也不多，但是智能手机非常机智的提供了一个叫应用市场的平台，允许第三方开发者开发手机应用发布到应用市场上面。</p><p>这就带来了一个良好的循环。因为应用市场上有琳琅满目的应用，所以用户愿意用，渐渐用户越来越多；因为用户越来越多，就会让更多的开发者加入进来，为 <em>IOS</em> 和 <em>Andriod</em> 系统开发手机应用，从而使得应用越来越多。</p><p>早期要开发手机应用，需要<strong>根据不同的手机系统使用不同的技术来开发</strong>。</p><p>例如如果是开发 <em>IOS</em> 应用，早期是使用 <em>Objective-c</em>，后来苹果推出了自家的 <em>Swift</em> 语言，成为了开发 <em>IOS</em> 应用的标准语言。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034408.png" alt="image-20220222114407748" style="zoom:50%;"><p>而如果是开发 <em>Andriod</em> 应用，早期是使用 <em>Java</em> 来进行开发，后面 <em>JetBrains</em> 推出了 <em>Kotlin</em>，被称之为 <em>Android</em> 世界的 <em>Swift</em>。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034430.png" alt="image-20220222114430152" style="zoom:50%;"><p>使用这些技术所开发的手机应用，我们称之为原生应用（<em>Native App</em>）。</p><p>无论从性能和体验上来讲，都是最好的，唯一的缺点就是成本比较高，因为现在 <em>IOS</em> 和 <em>Andriod</em> 的使用人群都很多，导致一个公司如果想要推出一个产品，需要找两拨人开发两份。</p><p>另外，对于原生应用来讲，不管使用什么技术，都和我们前端是无关的。我们前端是一个使用 <em>HTML、CSS</em> 和 <em>JavaScript</em> 技术的 <em>Coder</em>，哪会掺合这些东西。</p><p>那么究竟是什么让我们前端工程师也能在开发手机应用的事情上插上一腿呢？</p><p>没错，那就是浏览器。智能手机上面有各种各样的应用，自然少不了浏览器。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034452.png" alt="image-20220222114451575" style="zoom:50%;"><p>实际上最初在诺基亚时代，手机上就已经提供了浏览器了，不过最初在手机上使用浏览器来浏览网页的体验并不好。</p><p>因为早期的网页是采用多页的形式，每点击一个地方就会导致页面整体刷新，而那个年代网速又慢，基本上你点击一个链接后可以放下手机去泡杯茶什么的，之后新的网页就打开了。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034514.png" alt="image-20220222114514282" style="zoom:50%;"><p>后来有一些在当时来说性能很好的手机，能够直接通过手机浏览器打开 <em>PC</em> 端的网页。但是这看上去很不错，实际的体验也很糟糕，因为直接将 <em>PC</em> 端的网页搬到手机上，文字会显得非常非常小。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034531.png" alt="image-20220222114531339" style="zoom:50%;"><p>到了 <em>2012</em> 年左右，随着智能手机时代的来临，使用手机浏览器浏览网页的体验才逐步上升。</p><p>伴随着 <em>HTML5</em>、<em>CSS3</em> 的推出，<em>SPA</em>（<em>Single Page Application</em>）开发模式的流行，<em>4G</em> 通信技术的出现，一个网站给用户带来的用户体验越来越好，让人愈发的感觉像是在使用一个手机应用，而非是一个网站。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034549.png" alt="image-20220222114548575" style="zoom:50%;"><p>因此现在所说的 <em>WebApp</em>，总结起来就是移动端的网站或 <em>H5</em> 应用，说白了就是特定运行在移动端浏览器上的网站应用。</p><p>因为 <em>SPA</em> 开发模式的出现，整个网页只有一个页面，所以给人的感觉像是一个应用一样，从而出现了 <em>WebApp</em> 的说法。另外由于现在开发一个 <em>Web</em> 网站一般都使用 <em>HTML5、CSS3</em> 等新的技术，因此 <em>WebApp</em> 又被称之为 <em>H5</em> 应用。</p><h2 id="webapp-的优缺点" tabindex="-1"><a class="header-anchor" href="#webapp-的优缺点" aria-hidden="true">#</a> <em>WebApp</em> 的优缺点</h2><p>接下来我们来看一下 <em>WebApp</em> 相较于原生应用的优缺点。</p><h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h3><ol><li><p>开发成本低，可以跨平台，调试方便，开发速度最快</p><p><em>WebApp</em> 一般只需要一个前端人员开发出一套代码，然后即可应用于各大主流浏览器（特殊情况可以代码进行下兼容），没有新的学习成本，而且可以直接在浏览器中调试。</p></li><li><p>维护成本低</p><p>同上，如果代码合理，只需要一名前端就可以维护多个 <em>WebApp</em>。</p></li><li><p>更新最为快速</p><p>由于 <em>WebApp</em> 资源是直接部署在服务器端的，所以只需要替换服务器端的文件，用户访问是就已经更新了（当然需要解决一些缓存问题）。</p></li><li><p>无需安装 <em>App</em>，不会占用手机内存</p><p>通过浏览器即可访问，无需安装，用户就会比较愿意去用。</p></li></ol><h3 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h3><ol><li><p>性能低，用户体验差</p><p>由于是直接通过的浏览器访问，所以无法使用原生的 <em>API</em>，操作体验不好。</p></li><li><p>依赖于网络，页面访问速度慢，耗费流量</p><p><em>WebApp</em> 每次访问都需要去服务端加载资源访问，所以必须依赖于网络，而且网速慢时访问速度很不理想，特别是在移动端，如果网站优化不好会无故消耗大量流量。</p></li><li><p>功能受限，大量功能无法实现</p><p>只能使用 <em>HTML5</em> 的一些特殊 <em>API</em>，无法调用原生 <em>API</em>，所以很多功能存在无法实现情况。</p></li><li><p>临时性入口，用户留存率低</p><p>这既是它的优点，也是缺点，优点是无需安装，缺点是用完后有时候很难再找到，或者说很难专门为某个 <em>WebApp</em> 留存一个入口，导致用户很难再次使用。</p></li></ol><h2 id="开发-webapp-需要哪些技术" tabindex="-1"><a class="header-anchor" href="#开发-webapp-需要哪些技术" aria-hidden="true">#</a> 开发 <em>WebApp</em> 需要哪些技术</h2><p>既然开发 <em>WebApp</em> 使用的就是前端技术，那么自然就离不开我们前端的三驾马车。</p><ul><li><em>HTML</em></li><li><em>CSS</em></li><li><em>JS</em></li></ul><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034613.png" alt="image-20220222114613073" style="zoom:50%;"><p>当然前面也说了，之所以称之为 <em>WebApp</em>，离不开单页应用的开发模式。现在开发单页应用有非常成熟的框架，例如：<em>Angular、React、Vue</em></p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034635.png" alt="image-20220222114635235" style="zoom:50%;"><p>那么，既然开发 <em>WebApp</em> 用到的就是咱们的前端技术，那么是不是意味着就不需要学习其他任何知识了呢？</p><p>其实也不是。虽然主要使用的是前端技术，但是对比以前开发 <em>PC</em> 端网页，会有如下的区别：</p><ol><li><p>系统</p><ul><li><em>PC</em>：<em>Windows/Mac</em>（区别不大）</li><li>移动端：<em>ios/Android/Windows</em>（有区别）</li></ul></li><li><p>浏览器</p><ul><li><em>PC</em>：区别很大</li><li>移动端：区别不大</li></ul></li><li><p>分辨率（尺寸）</p><ul><li><em>PC</em>：有区别</li><li>移动端：区别很大</li></ul></li></ol><p>因此在开发 <em>WebApp</em> 的时候，我们主要需要解决的有以下几方面的问题：</p><ul><li>适配</li><li>响应式</li><li><em>H5</em> 调用原生接口</li><li>兼容性</li></ul><p>这些问题是在开发 <em>WebApp</em> 时比较典型的问题，也是我们后面章节主要要讲解的知识点。</p><hr><p>-<em>EOF</em>-</p><h1 id="_2-webview-介绍" tabindex="-1"><a class="header-anchor" href="#_2-webview-介绍" aria-hidden="true">#</a> 2. <em>WebView</em> 介绍</h1><p>在前面我们已经介绍了什么是 <em>WebApp</em>，简单来讲就是移动端的网站或 <em>H5</em> 应用。那么既然是一个 <em>Web</em> 网站，必然就是使用浏览器来打开。但是只能用浏览器打开么？</p><p>举个例子，现在国内很流行扫码打开一个应用或者小程序，例如有下面的一个二维码：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034812.png" alt="image-20220222114812180" style="zoom:50%;"><p>那么大家一般都习惯使用微信上面的扫一扫功能来扫码，之后在微信中打开的页面如下：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034834.png" alt="image-20220222114833333" style="zoom:50%;"><p>实际上，除了可以使用微信扫一扫以外，凡是手机中具备扫一扫功能的应用，都能打开此页面。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034855.png" alt="image-20220222114854631"></p><p>正如上图所示，我分别使用百度、抖音、微信、支付宝以及手机默认浏览器都打开了此页面。</p><p>百度和默认浏览器自不用说，因为这两个本身就是浏览器，用浏览器打开网页没什么稀奇的，但是微信、支付宝、抖音这些应用为什么也能打开此页面呢？</p><p>这就不得不提我们这篇文章的主角 <em>WebView</em> 了。本文主要介绍什么是 <em>WebView</em>，并不会涉及到具体的编码，大家可以放心食用。</p><ul><li><em>WebView</em> 介绍</li><li><em>WebView</em> 常见使用场景</li></ul><h2 id="webview-介绍" tabindex="-1"><a class="header-anchor" href="#webview-介绍" aria-hidden="true">#</a> <em>WebView</em> 介绍</h2><p><em>WebView</em> 是一种嵌入式浏览器，原生应用可以用它来展示网络内容。</p><p>我们都知道浏览器是什么，它是让我们可以浏览网页的独立应用：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-034925.png" alt="image-20220222114924513" style="zoom:50%;"><p>而如果你把浏览器想象成两部分，那么一部分是 <em>UI</em>（地址栏，导航栏按钮等），其它部分是把标记跟代码转换成我们可见和可交互视图的浏览器引擎。</p><p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035102.png" alt="image-20220222115102001"></p><p><em>WebView</em> 就是浏览器引擎部分，你可以像插入 <em>iframe</em> 一样将 <em>Webview</em> 插入到你的原生应用中，并且编程化的告诉它将会加载什么网页内容。这样我们可以用它来作为我们原生 <em>app</em> 的视觉部分。当你使用原生应用时，<em>WebView</em> 可能只是被隐藏在普通的原生 <em>UI</em> 元素中，你甚至用不到注意到它。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035122.png" alt="image-20220222115121519" style="zoom:50%;"><p>运行在你的 <em>WebView</em> 中的 <em>JavaScript</em> 有能力调用原生的系统 <em>API</em>。这意味着你不必受到 <em>Web</em> 代码通常必须遵守的传统浏览器安全沙箱的限制。</p><p>下图解释了使这样成为可能的架构差异：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035143.png" alt="image-20220222115143384" style="zoom:50%;"><p><em>Web</em> 代码和原生应用代码相互通信。这种沟通通常称为 <em>bridge</em>。</p><p>通过上图我们可以看到 <em>bridge</em> 可视化为 <em>Native Bridge</em> 和 <em>JavaScript Bridge</em> 的一部分。正因为 <em>bridge</em> 的存在，我们所编写的 <em>JavaScript</em> 不仅可以在 <em>WebView</em> 中运行，还可以调用原生 <em>API</em> 帮助我们的应用更深入地集成酷炫的系统级功能，如传感器，存储，日历/联系人等。</p><h2 id="webview-常见使用场景" tabindex="-1"><a class="header-anchor" href="#webview-常见使用场景" aria-hidden="true">#</a> <em>WebView</em> 常见使用场景</h2><p>现在我们已经了解了 <em>WebView</em> 的概况以及他们所拥有的一些强大作用，接下来我们来看一下 <em>WebView</em> 的使用场景。</p><h3 id="app-内置浏览器" tabindex="-1"><a class="header-anchor" href="#app-内置浏览器" aria-hidden="true">#</a> <em>App</em> 内置浏览器</h3><p><em>WebView</em> 最常见的用途之一是显示链接的内容。</p><p>在移动设备上启动浏览器，将用户从一个应用切换到另一个应用，操作完成后再返回原本的应用，这样的操作体验相当的糟糕。<em>WebView</em> 通过在应用本身内完全加载链接的内容来很好地解决这个问题。</p><p>这也解释了为什么上面提到的抖音、微信、支付宝都可以打开那个页面。</p><h3 id="广告" tabindex="-1"><a class="header-anchor" href="#广告" aria-hidden="true">#</a> 广告</h3><p>广告仍然是原生应用最流行的赚钱方式之一。这些广告大部分是如何投放的？答案是通过 <em>WebView</em> 提供的 <em>Web</em> 内容：</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035208.png" alt="image-20220222115208421" style="zoom:50%;"><h3 id="混合开发-hybrid-app" tabindex="-1"><a class="header-anchor" href="#混合开发-hybrid-app" aria-hidden="true">#</a> 混合开发（<em>Hybrid App</em>）</h3><p>到目前为止，我们一直在将 <em>WebView</em> 视为舞台上的次要支持角色，并由原生应用和其他原生 <em>UI</em> 元素完全支配。</p><p>但是近年来出现了一种新的开发模式，叫做混合开发（<em>Hybrid App</em>）。这种开发模式介于 <em>WebApp</em> 和 <em>NativeApp</em> 这两者之间的 <em>App</em> 开发技术，兼具“<em>Native App</em> 良好交互体验的优势”和“<em>WebApp</em> 跨平台开发的优势”。其原理就是原生客户端的壳 <em>WebView</em>，里面是 <em>HTML5</em> 的网页。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035228.png" alt="image-20220222115228652" style="zoom:50%;"><p>混合应用很受欢迎有如下的原因：</p><ol><li><p>开发成本较低，可以跨平台，调试方便</p><p><em>Hybrid</em> 模式下，由原生提供统一的 <em>API</em> 给 <em>JS</em> 调用，实际的主要逻辑由 <em>HTML</em> 和 <em>JS</em> 来完成，而由于最终是放在 <em>WebView</em> 中显示的，所以只需要写一套代码即可，达到跨平台效果，另外也可以直接在浏览器中调试，很为方便。</p><p>最重要的是只需要一个前端人员稍微学习下 <em>JS API</em> 的调用即可，无需两个独立的原生人员</p><p>一般 <em>Hybrid</em> 中的跨平台最少可以跨三个平台：<em>Android、iOS</em> 和普通 <em>Webkit</em> 浏览器</p></li><li><p>维护成本低，功能可复用</p><p>同上，如果代码合理，只需要一名前端就可以维护多个 <em>app</em>，而且很多功能还可以互相复用。</p></li><li><p>更新较为自由</p><p>虽然没有 <em>WebApp</em> 更新那么快速，但是 <em>Hybrid</em> 中也可以通过原生提供 <em>api</em> 进行资源主动下载，达到只更新资源文件，不更新 <em>apk(ipa)</em> 的效果。</p></li></ol><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035255.png" alt="image-20220222115255033" style="zoom:50%;"><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035306.png" alt="image-20220222115306789" style="zoom:50%;"><p>现在国内外也有很多将 <em>WebApp</em> 打包成 <em>Hybrid App</em> 的应用技术，例如：</p>',97),l={href:"https://cordova.apache.org/",target:"_blank",rel:"noopener noreferrer"},n=e("em",null,"Cordova",-1),c={href:"https://dcloud.io/",target:"_blank",rel:"noopener noreferrer"},h=e("em",null,"DCloud",-1),b={href:"https://www.apicloud.com/",target:"_blank",rel:"noopener noreferrer"},g=e("em",null,"API Cloud",-1),u=t('<h3 id="桌面应用扩展" tabindex="-1"><a class="header-anchor" href="#桌面应用扩展" aria-hidden="true">#</a> 桌面应用扩展</h3><p><em>WebView</em> 的使用场景不仅仅只是在移动端应用上面，许多桌面应用也可以使用 <em>WebView</em> 来扩展自己的功能。由于 <em>Web</em> 技术的简单性和强大性，很多加载和扩展项通常选择以 <em>HTML、CSS</em> 和 <em>JavaScript</em> 技术而非 <em>C++、C#</em> 来进行构建。</p><p>下面以 <em>Microsoft Office</em> 为例，我们可以针对某一个特殊的词使用维基百科进行查询。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035325.png" alt="image-20220222115325430" style="zoom:50%;"><p>而这里的维基百科内容就是通过 <em>WebView</em> 显示出来的。</p><img src="https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2022-02-22-035343.png" alt="image-20220222115342513" style="zoom:50%;"><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>目前为止，我们就已经介绍了 <em>3</em> 种移动端开发的方式了。这里我们以表格的形式做一个总结：</p><table><thead><tr><th></th><th><em>Native App</em></th><th><em>Web App</em></th><th><em>Hybrid App</em></th></tr></thead><tbody><tr><td>原生功能体验</td><td>优秀</td><td>一般</td><td>良好</td></tr><tr><td>渲染性能</td><td>非常快</td><td>一般</td><td>良好</td></tr><tr><td>是否支持设备底层访问</td><td>支持</td><td>不支持</td><td>支持</td></tr><tr><td>网络要求</td><td>支持离线</td><td>依赖网络</td><td>支持离线(资源存本地情况)</td></tr><tr><td>更新复杂度</td><td>高(几乎总是通过应用商店更新)</td><td>低(服务器端直接更新)</td><td>较低(可以进行资源包更新)</td></tr><tr><td>编程语言</td><td><em>Android(Java) iOS(OC/Swift)</em></td><td><em>js+html+css3</em></td><td><em>js+html+css3</em></td></tr><tr><td>社区资源</td><td>丰富(<em>Android、iOS</em> 单独学习)</td><td>丰富(大量前端资源)</td><td>有局限(不同的 <em>Hybrid</em> 相互独立)</td></tr><tr><td>上手难度</td><td>难(不同平台需要单独学习)</td><td>简单(写一次，支持不同平台访问)</td><td>简单(写一次，运行任何平台)</td></tr><tr><td>开发周期</td><td>长</td><td>短</td><td>较短</td></tr><tr><td>开发成本</td><td>昂贵</td><td>便宜</td><td>较为便宜</td></tr><tr><td>跨平台</td><td>不跨平台</td><td>所有浏览器</td><td>可以打包到不同的平台</td></tr><tr><td><em>APP</em> 发布</td><td><em>App Store</em></td><td><em>Web</em> 服务器</td><td><em>App Store</em></td></tr></tbody></table><p>-<em>EOF</em>-</p>',10);function y(A,W){const m=a("ExternalLinkIcon");return d(),r("div",null,[s,e("ul",null,[e("li",null,[e("a",l,[n,p(m)])]),e("li",null,[e("a",c,[h,p(m)])]),e("li",null,[e("a",b,[g,p(m)])])]),u])}const x=i(o,[["render",y],["__file","01-WebAppjieshao.html.vue"]]);export{x as default};
