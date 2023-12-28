import{_ as e,o as i,c as a,a as o}from"./app-bb81f29b.js";const d={},c=o('<h1 id="域名和-dns" tabindex="-1"><a class="header-anchor" href="#域名和-dns" aria-hidden="true">#</a> 域名和 DNS</h1><h2 id="域名" tabindex="-1"><a class="header-anchor" href="#域名" aria-hidden="true">#</a> 域名</h2><p>域名 👉 <code>www.baidu.com</code></p><p>域名的作用是帮助人类记忆网站地址，有了域名，就不用去记 IP 地址了</p><p>域名的类型有以下几种：</p><ul><li>根域名：<code>.</code></li><li>顶级域名：<code>.cn .com .net .us .uk .org ... </code></li><li>二级域名：<code>.com .gov .org .edu 自定义 baidu jd taobao ...</code></li><li>三级域名：<code>自定义 www.baidu.com www.jd.com www.taobao.com</code></li><li>四级域名：<code>自定义 www.pku.edu.cn mail.internal.jd.com</code></li></ul><p>一般来说，购买二级域名后，三级、四级域名都是可以免费自定义的</p><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><p>域名虽然有助于记忆，但是网络传输和域名没有半毛钱关系</p><p><strong>网络传输必须依靠 IP</strong></p><p>所以，必须有一个东西，能够将域名转换成 IP 地址，这个东西就是 DNS 服务器，翻译成 IP 地址的过程称之为<strong>域名解析</strong></p><img src="http://mdrs.yuanjin.tech/img/20211027164448.png" alt="image-20211027164448706" style="zoom:50%;" align="left"><p>全世界认可的 DNS 服务器一共有三种，外加一种局部使用的本地 DNS 服务器，一共四种。</p><img src="http://mdrs.yuanjin.tech/img/20211027170039.png" alt="image-20211027170039192" style="zoom:50%;" align="left"><p>为了使得解析速度更快、查询的节点更少，上述每个节点都可能设置高速缓存来加速解析</p><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><p>请简述域名解析过程（百度）</p><blockquote><p>参考答案：</p><ol><li>查找本机 hosts 文件中是否有解析记录，如果有，直接使用</li><li>查找本地域名服务器中是否有解析记录，如果有，直接使用</li><li>查询根域名服务器，得到顶级域名服务器 ip</li><li>查询顶级域名服务器中是否有解析记录，如果有，直接使用</li><li>根据顶级域名服务器反馈的 ip，查询权限域名服务器，如果有解析记录，直接使用</li><li>如果以上都找不到，域名解析失败</li></ol><p>本机和域名服务器一般都会有高速缓存，它存在的目的是为了减少查询次数和时间</p></blockquote>',18),l=[c];function t(n,r){return i(),a("div",null,l)}const h=e(d,[["render",t],["__file","04-yumingheDNS.html.vue"]]);export{h as default};
