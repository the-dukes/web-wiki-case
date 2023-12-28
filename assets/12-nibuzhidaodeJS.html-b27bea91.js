import{_ as o,o as e,c as t,a as n}from"./app-bb81f29b.js";const c="/web-wiki-case/assets/js12-1-24244180.png",s="/web-wiki-case/assets/js12-2-7e825404.png",a="/web-wiki-case/assets/js12-3-f17225b8.png",p={},l=n('<h1 id="_12-你不知道的-js-之原理篇" tabindex="-1"><a class="header-anchor" href="#_12-你不知道的-js-之原理篇" aria-hidden="true">#</a> 12-你不知道的 JS 之原理篇</h1><p>ui 多线程-深入刨析 js 执行机制</p><h2 id="浏览器常驻的线程" tabindex="-1"><a class="header-anchor" href="#浏览器常驻的线程" aria-hidden="true">#</a> 浏览器常驻的线程</h2><blockquote><p>js 引擎线程 （解释执行 js 代码、用户输入、网络请求）。 GUI 线程 （绘制用户界面、与 js 主线程是互斥的）。</p></blockquote><blockquote><p>http 网络请求线程 （处理用户的 get、post 等请求，等返回结果后将回调函数推入任务队列）。</p></blockquote><blockquote><p>定时触发器线程 （setTimeout、setInterval 等待时间结束后把执行函数推入任务队列中）。</p></blockquote><blockquote><p>浏览器事件处理线程 （将 click、mouse 等交互事件发生后将这些事件放入事件队列中）。</p></blockquote><p>**GUI****主线程负责协调运转：**</p><p><img src="'+c+'" alt="image.png"></p><p>**JS**<strong>引擎线程和*</strong>*GUI**<strong>线程*</strong>*-****互斥：**</p><blockquote><p>JS 可以操作 DOM 元素，进而会影响到 GUI 的渲染结果，因此 JS 引擎线程与 GUI 渲染线程是互斥的。</p><p>也就是说当 JS 引擎线程处于运行状态时，GUI 渲染线程将处于冻结状态。</p></blockquote><h2 id="js-引擎线程-单线程" tabindex="-1"><a class="header-anchor" href="#js-引擎线程-单线程" aria-hidden="true">#</a> JS 引擎线程-单线程</h2><h3 id="单线程" tabindex="-1"><a class="header-anchor" href="#单线程" aria-hidden="true">#</a> 单线程</h3><blockquote><p>单线程-同一时间只能做一件事。</p></blockquote><p>JavaScript 是基于单线程运行的，同时又是可以异步执行的，一般来说这种既是单线程又是异步的语言都是基于事件来驱动的，恰好浏览器就给 JavaScript 提供了这么一个环境。</p><p><strong>导图：</strong></p><blockquote><p>同步和异步任务分别进入不同的执行&quot;场所&quot;，同步的进入主线程，异步的进入 Event Table 并注册函数。</p><p>当指定的事情完成时，Event Table 会将这个函数移入 Event Queue。</p><p>主线程内的任务执行完毕为空，会去 Event Queue 读取对应的函数，进入主线程执行。</p><p>上述过程会不断重复，也就是常说的 Event Loop(事件循环)。</p></blockquote><p><img src="'+s+`" alt="image.png"></p><h3 id="同步任务" tabindex="-1"><a class="header-anchor" href="#同步任务" aria-hidden="true">#</a> 同步任务</h3><blockquote><p>0.代码没有执行的时候，执行栈为空栈 1.foo 函数执行时，创建了一帧，这帧中包含了形参、局部变量（预编译过程），然后把这一帧压入栈中</p></blockquote><blockquote><p>2.然后执行 foo 函数内代码，执行 bar 函数</p></blockquote><blockquote><p>3.创建新帧，同样有形参、局部变量，压入栈中</p></blockquote><blockquote><p>4.bar 函数执行完毕，弹出栈</p></blockquote><blockquote><p>5.foo 函数执行完毕，弹出栈 6.执行栈为空 <strong>执行栈其实相当于**<strong>js*</strong>*主线程</strong></p></blockquote><pre><code>function foo (ot) {
	function bar (it) {
		console.log(it);
	}
	bar(20);
	console.log(ot);
}
foo(10);
</code></pre><h3 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h3><blockquote><p>Ajax 进入 Event Table，注册回调函数 success</p><p>执行 console.log(‘run’)</p></blockquote><blockquote><p>ajax 事件完成 http 网络请求线程把任务放入 Event Queue 中</p></blockquote><blockquote><p>主线程（调用栈）读取任务下执行 success 函数</p></blockquote><pre><code>$.ajax({
	url: ‘localhost:/js/demo.json’,
	data: {},
	success: function (data) {
		console.log(data);
	}
});
console.log(‘run’);
</code></pre><p><img src="`+a+`" alt="image.png"></p><p><strong>案例：定时器</strong></p><blockquote><p>setTimeout 的等待时间结束后并不是直接执行的而是先推入浏览器的一个任务队列，在同步队列结束后在依次调用任务队列中的任务。</p></blockquote><blockquote><p>setTimeout(function(){}, 0) Js 主线程中的执行栈为空时，0 毫秒实际上也达不到的，根据 HTML 标准，最低 4 毫秒。</p></blockquote><blockquote><p>setInterval 是每隔一段时间把任务放到 Event Queue 之中。</p></blockquote><pre><code>function test (num) {
	for (var i = 0; I &lt; num; i++) {
		console.log(i);
	}
}

setTimeout(function () {console.log(‘time’)}, 400);

outer(100000);

console.log(‘hello world’);
</code></pre><p>** **</p><p>**Js**<strong>执行机制*</strong>*-****多线程不好吗？**</p><blockquote><p>js 设计出来就是为了与用户交互，处理 DOM，假如 js 是多线程，同一时间一个线程想要修改 DOM，另一个线程想要删除 DOM，问题就变得复杂许多，浏览器不知道听谁的，如果引入“锁”的机制，这不就又回到了被其他语言尴尬的困境了吗。</p></blockquote><p><strong>大量数据操作怎么办？</strong></p><blockquote><p>单线程计算能力有限，大量数据需要计算渲染的话，我们可以配合后端进行操作，比如我们后期进阶班里降到的 VUE 与 nodejs 配合，也就是传说中的 SSR（服务端渲染）技术。</p></blockquote>`,41),r=[l];function u(i,b){return e(),t("div",null,r)}const h=o(p,[["render",u],["__file","12-nibuzhidaodeJS.html.vue"]]);export{h as default};
