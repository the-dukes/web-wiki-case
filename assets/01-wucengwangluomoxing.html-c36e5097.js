import{_ as a,o as e,c as t,a as n}from"./app-7f983beb.js";const p={},i=n('<h1 id="五层网络模型" tabindex="-1"><a class="header-anchor" href="#五层网络模型" aria-hidden="true">#</a> 五层网络模型</h1><p><img src="http://mdrs.yuanjin.tech/img/20211008163417.png" alt="image-20211008163417521"></p><h2 id="数据的封装和解封装" tabindex="-1"><a class="header-anchor" href="#数据的封装和解封装" aria-hidden="true">#</a> 数据的封装和解封装</h2><p><img src="http://mdrs.yuanjin.tech/img/20211008163458.png" alt="image-20211008163458168"></p><h2 id="四层、五层、七层" tabindex="-1"><a class="header-anchor" href="#四层、五层、七层" aria-hidden="true">#</a> 四层、五层、七层</h2><p><img src="http://mdrs.yuanjin.tech/img/20211008164017.png" alt="image-20211008164017299"></p><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><p>说说网络的五层模型</p><blockquote><p>参考答案：</p><p>从上到下分别为：应用层、传输层、网络层、数据链路层、物理层。在发送消息时，消息从上到下进行打包，每一层会在上一层基础上加包，而接受消息时，从下到上进行解包，最终得到原始信息。</p><p>其中：</p><p>应用层主要面向互联网中的应用场景，比如网页、邮件、文件中心等等，它的代表协议有 http、smtp、pop3、ftp、DNS 等等</p><p>传输层主要面向传输过程，比如 TCP 协议是为了保证可靠的传输，而 UDP 协议则是一种无连接的广播，它们提供了不同的传输方式</p><p>网络层主要解决如何定位目标以及如何寻找最优路径的问题，比如 IP 等等</p><p>数据链路层的作用是将数据在一个子网（广播域）内有效传输，MAC 地址、交换机都是属于该层的</p><p>物理层是要解决二进制数据到信号之间的互转问题，集线器、双绞线、同轴电缆等都是属于盖层的设备</p></blockquote>',9),r=[i];function h(c,d){return e(),t("div",null,r)}const s=a(p,[["render",h],["__file","01-wucengwangluomoxing.html.vue"]]);export{s as default};
