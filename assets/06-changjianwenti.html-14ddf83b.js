import{_ as n,o as s,c as a,a as t}from"./app-0e5daedb.js";const e={},p=t(`<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><p>最后，我们总结一些移动端经常容易被问到的问题。</p><h3 id="_1-300ms-延迟问题" tabindex="-1"><a class="header-anchor" href="#_1-300ms-延迟问题" aria-hidden="true">#</a> 1. <em>300ms</em> 延迟问题</h3><blockquote><p><strong><em>300ms</em> 延迟问题产生原因？</strong></p><p>早在 2007 年初，苹果公司在发布首款 iPhone 前夕，遇到一个问题：当时的网站都是为大屏幕设备所设计的。于是苹果的工程师们做了一些约定，应对 iPhone 这种小屏幕浏览桌面端站点的问题。</p><p>这当中最出名的，当属双击缩放（ double tap to zoom ），这也是会有上述 300 毫秒延迟的主要原因。</p><p>双击缩放，顾名思义，即用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。 那么这和 300 毫秒延迟有什么联系呢？</p><p>假定这么一个场景： 用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。</p><p>鉴于 iPhone 的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，包括双击缩放，几乎现在所有的移动端浏览器都有这个功能。</p><p><strong>如何解决 <em>300ms</em> 延迟问题？</strong></p><p>方法一：禁止缩放（在 <em>meta</em> 标签中设置）</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user-scalable=no,initial-scale=1,maximun-scale=1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>页面不可缩放，这样双击缩放功能就没有意义了，此时浏览器可以禁用默认的双击缩放行为并且去掉 300ms 的点击延迟。 缺点：必须完全禁用缩放来达到目的，但是通常情况下，我们还是希望能通过双指来进行缩放的。</p><p>在 2014 年，从 Chrome32 开始 Google 已经解决这个 300ms 延迟问题，只要定义了 viewport 就不会有 300ms 延迟问题。</p><p>方法二：使用移动端专属的触摸事件 使用触摸事件的能够提高页面响应速度，带来更好的用户体验。</p></blockquote><h3 id="_2-点击穿透问题" tabindex="-1"><a class="header-anchor" href="#_2-点击穿透问题" aria-hidden="true">#</a> 2. 点击穿透问题</h3><blockquote><p><strong>点击穿透问题？</strong></p><p>所谓事件穿透，是移动端上面一个非常有名的 <em>Bug</em>，其出现场景为：有两层重叠的元素，上面的元素有 <em>touch</em> 事件（点击后要消失），下面是一个默认会触发 <em>click</em> 事件的元素（<em>a</em>、表单元素、带 <em>click</em> 事件的元素），此时点击上一层的元素，下一层也同样会被点击。</p><p><strong>如何解决点击穿透问题？</strong></p><p>通过 <em>e.preventDefault( )</em> 方法来阻止默认事件。</p></blockquote><h3 id="_3-解决-1px-问题" tabindex="-1"><a class="header-anchor" href="#_3-解决-1px-问题" aria-hidden="true">#</a> 3. 解决 <em>1px</em> 问题</h3><blockquote><p><strong>什么是 <em>1px</em> 问题？</strong></p><p>所谓 <em>1px</em> 问题，是因为设备像素和 <em>CSS</em> 像素并不是完全的 <em>1:1</em> 的关系，有可能能是 <em>1:2</em> 甚至是 <em>1:3</em>，因此我们按照以前在 PC 端的编程经验，书写 1px 可能会比实际的看着要粗一些。</p><p><strong><em>1px</em> 问题解决方案？</strong> 使用 <em>JavaScript</em> 计算 <em>rem</em> 基准值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">doc<span class="token punctuation">,</span> win<span class="token punctuation">,</span> designWidth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> html <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token punctuation">;</span> <span class="token comment">// 获取 html 根元素，一会儿要设置根元素的字体大小</span>
  <span class="token keyword">function</span> <span class="token function">refreshRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> width <span class="token operator">=</span> html<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span> <span class="token comment">// 获取 CSS 像素（设备的宽度）</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">&gt;=</span> designWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 说明设备宽度都已经大于设计稿，测量出来是多少就是多少</span>
      html<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token string">&#39;100px&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 计算比例</span>
      <span class="token comment">// 拿 iPhone6（375px） 375px/750px = 0.5 -&gt; 1/DPR</span>
      <span class="token comment">// 相当于现在每一列的宽度为 0.5px，相当于分成了 375px/0.5 = 750列</span>
      <span class="token comment">// 但是现在我们设置 font-size 为 0.5px 浏览器不允许设置这么小的，因此乘以一个 100</span>
      <span class="token comment">// 每一列的宽度就变为了 50px，375px/50 = 7.5列</span>
      <span class="token comment">// 假设设计稿量出来的是 375px-&gt;设备像素187.5px-&gt;187.5/50(每一列的宽度)-&gt;3.75(所占列数)-&gt;3.75rem</span>
      <span class="token comment">// 假设量出来是 100px -&gt; 1列</span>
      <span class="token comment">// 100px-&gt;50px/50px-&gt;1-&gt;1rem</span>
      html<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">*</span> <span class="token punctuation">(</span>width <span class="token operator">/</span> designWidth<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  doc<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> refreshRem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> window<span class="token punctuation">,</span> <span class="token number">750</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_4-移动端-app-有哪些类型-区别是什么" tabindex="-1"><a class="header-anchor" href="#_4-移动端-app-有哪些类型-区别是什么" aria-hidden="true">#</a> 4. 移动端 <em>APP</em> 有哪些类型，区别是什么？</h3><blockquote><p>移动端应用细分为三大类：<em>WebApp</em>、<em>NativeApp</em> 和 <em>HybridApp</em> WebApp、NativeApp 和 HybridApp 三类移动应用的特点：</p><ul><li>Web App 指的是移动端的 Web 浏览器，其实和 PC 端的 Web 浏览器没有任何区别，只不过 Web 浏览器所依附的操作系统不再是 Windows 和 Linux 了，而是 iOS 和 Android，Web App 采用的技术主要是，传统的 HTML、JavaScript、CSS 等 Web 技术栈，当然现在 HTML5 也得到了广泛的应用。另外，Web App 所访问的页面内容都是放在服务器端的，本质上就是 Web 网页，所以天生就是跨平台的。不能在商店中下载，只能在移动设备浏览器中打开</li><li>Native App 指的是移动端的原生应用，对于 Android 是 apk，对于 iOS 就是 ipa。Native App 是一种基于手机操作系统（iOS 和 Android），并使用原生程序编写运行的第三方应用程序，Native App 的开发，Android 使用的语言通常是 Java，iOS 使用的语言是 Objective-C。通常来说，Native App 可以提供比较好的用户体验以及性能，而且可以方便地操作手机本地资源，可在应用商店内进行下载，以 app 的形式打包</li><li>Hybrid App，俗称混血应用，是介于 Web App 和 Native App 两者之间的一种 App 形式，Hybrid App 利用了 Web App 和 Native App 的优点，通过一个原生实现的 Native Container 展示 HTML5 的页面。更通俗的讲法可以归结为，在原生移动应用中嵌入了 Webview，然后通过该 Webview 来访问网页，HybridApp 具有维护更新简单，用户体验优异以及较好的跨平台特性，是目前主流的移动应用开发模式，可在应用商店内进行下载，以 app 的形式打开</li></ul></blockquote><h3 id="_5-移动端的样式重置" tabindex="-1"><a class="header-anchor" href="#_5-移动端的样式重置" aria-hidden="true">#</a> 5. 移动端的样式重置</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>			移动端的样式重置
				1、禁止用户选中文字，安卓无效（在事件那章解决，包括长按的时候会出菜单，用阻止touchstart后的默认行为搞定）
					-webkit-user-select: none;
				2、禁止长按弹出系统菜单
					-webkit-touch-callout: none;
				3、去除android下a/button/input标签被点击时产生的边框 &amp; 去除ios下a标签被点击时产生的半透明灰色背景
					-webkit-tap-highlight-color: rgba(0,0,0,0);
				4、切换横竖屏或者用户自己通过浏览器设置的话，可以改变字体的大小(需要给body下的所有元素)
					-webkit-text-size-adjust: 100%;
				5、按钮在ios下都是圆角
					-webkit-appearance: none;	//button与input都会有个默认背景
					border-radius: 0;	//input有个默认圆角
				6、修改placeholder的样式
					input::-webkit-input-placeholder{
						color:#000;	//默认的样式
					}
					input:focus::-webkit-input-placeholder{
						color:#f00;	//点击后的样式
					}
				7、字体
					ios
						默认中文字体是Heiti SC
						默认英文字体是Helvetica
						默认数字字体是HelveticaNeue
						无微软雅黑字体
					android
						默认中文字体是Droidsansfallback
						默认英文和数字字体是Droid Sans
						无微软雅黑字体

					font-family: helvetica;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-固定定位问题" tabindex="-1"><a class="header-anchor" href="#_6-固定定位问题" aria-hidden="true">#</a> 6. 固定定位问题</h3><p>只会出现在苹果的系统当中，当页面中有一个固定定位的元素、和 input 元素时；</p><p>当点击 input 输入框时，会唤起系统当中的小键盘，当键盘出来之后，固定定位的元素的固定定位就会失效。</p><p>模拟器当中看不出问题，需要在真机中测试。</p><p><code>position: fixed</code> ， 在老版本的 Andriod 和 IOS4 之前的版本不支持。</p><p><strong>解决方案：</strong></p><ul><li>通过相对定位模拟固定定位</li></ul><p>使用系统的滚动条会出现该问题。</p><p>所以将需要滚动的内容，放到一个标签当中，标签设置 overflow: scroll 滚动。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scroll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">#scroll</span> <span class="token punctuation">{</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">positon</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> headerHeight<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> footerHeight<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 最大宽度；
  <span class="token property">--webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>   //滚动回弹效果
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过事件</li></ul>`,24),i=[p];function o(l,c){return s(),a("div",null,i)}const d=n(e,[["render",o],["__file","06-changjianwenti.html.vue"]]);export{d as default};