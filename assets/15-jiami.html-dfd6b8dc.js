import{_ as a,o as e,c as i,a as t}from"./app-72013311.js";const h={},p=t('<h1 id="加密" tabindex="-1"><a class="header-anchor" href="#加密" aria-hidden="true">#</a> 加密</h1><h2 id="加密算法的分类" tabindex="-1"><a class="header-anchor" href="#加密算法的分类" aria-hidden="true">#</a> 加密算法的分类</h2><h2 id="对称加密" tabindex="-1"><a class="header-anchor" href="#对称加密" aria-hidden="true">#</a> 对称加密</h2><img src="http://mdrs.yuanjin.tech/img/20211021150521.png" alt="image-20211021150521718" style="zoom:50%;" align="left"><p>常见算法：DES、3DES、TDEA、Blowfish、RC5、IDEA</p><p>优点：加密、解密速度快，适合对大数据量进行加密</p><p>缺点：在网络中需要分发密钥，增加了密钥被窃取的风险</p><h2 id="非对称加密" tabindex="-1"><a class="header-anchor" href="#非对称加密" aria-hidden="true">#</a> 非对称加密</h2><img src="http://mdrs.yuanjin.tech/img/20211021151158.png" alt="image-20211021151158130" style="zoom:50%;" align="left"><p>常见算法：RSA、Rabin、DSA、ECC、Elgamal、D-H</p><p>优点：安全（私钥仅被一方保存，不用于网络传输）</p><p>缺点：仅能一方进行解密</p><h2 id="摘要-哈希-散列" tabindex="-1"><a class="header-anchor" href="#摘要-哈希-散列" aria-hidden="true">#</a> 摘要/哈希/散列</h2><img src="http://mdrs.yuanjin.tech/img/20211021151642.png" alt="image-20211021151642105" style="zoom:50%;" align="left"><p>常见算法：MD4、MD5、SHA1</p><p>优点：密文占用空间小（定长的短字符串）；难以被破解</p><p>缺点：无法解密</p><h2 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><p>对称加密，非对称加密，摘要的概念，请解释一下</p><blockquote><p>参考答案：</p><p>密钥</p><p>密钥是一种参数，它是在明文转换为密文或将密文转换为明文的算法中输入的参数。密钥分为对称密钥与非对称密钥，分别应用在对称加密和非对称加密上。</p><p>对称加密</p><p>对称加密又叫做私钥加密，即信息的发送方和接收方使用同一个密钥去加密和解密数据。对称加密的特点是算法公开、加密和解密速度快，适合于对大数据量进行加密，常见的对称加密算法有 DES、3DES、TDEA、Blowfish、RC5 和 IDEA。</p><p>非对称加密</p><p>非对称加密也叫做公钥加密。非对称加密与对称加密相比，其安全性更好。对称加密的通信双方使用相同的密钥，如果一方的密钥遭泄露，那么整个通信就会被破解。而非对称加密使用一对密钥，即公钥和私钥，且二者成对出现。私钥被自己保存，不能对外泄露。公钥指的是公共的密钥，任何人都可以获得该密钥。用公钥或私钥中的任何一个进行加密，用另一个进行解密。</p><p>摘要</p><p>摘要算法又称哈希/散列算法。它通过一个函数，把任意长度的数据转换为一个长度固定的数据串（通常用 16 进制的字符串表示）。算法不可逆。</p></blockquote>',20),r=[p];function n(d,c){return e(),i("div",null,r)}const o=a(h,[["render",n],["__file","15-jiami.html.vue"]]);export{o as default};
