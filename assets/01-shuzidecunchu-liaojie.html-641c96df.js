import{_ as e,o as a,c as i,a as d}from"./app-d6eaa58c.js";const n={},s=d(`<h1 id="_01-数字的存储-了解" tabindex="-1"><a class="header-anchor" href="#_01-数字的存储-了解" aria-hidden="true">#</a> 01-数字的存储-了解</h1><h2 id="数字的存储" tabindex="-1"><a class="header-anchor" href="#数字的存储" aria-hidden="true">#</a> 数字的存储</h2><p><strong>在对精度要求很高的系统中，或要对小数的运算结果进行比较时，需要特别谨慎。</strong></p><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><ol><li>JS 中的小数运算是精确的吗？</li></ol><p>不一定。</p><ol><li>JS 中的整数运算是精确的吗？</li></ol><p>不一定。</p><ol><li>JS 中表示的整数是连续的吗？</li></ol><p>不是，当 JS 的数字很大的时候，不再连续。</p><ol><li>JS 中表示的最大数字是多少？</li></ol><p>最大连续整数：<code>9007199254740991</code>。</p><ol><li>JS 中能表示的数字的有效位数是多少？</li></ol><p>16 ~ 17。</p><h3 id="二进制" tabindex="-1"><a class="header-anchor" href="#二进制" aria-hidden="true">#</a> 二进制</h3><p>现实世界中：十进制，10 个数字，逢十进一</p><p>计算机世界中：二进制，2 个数字，逢二进一</p><p>二进制 -&gt; 十进制</p><p>1101 -&gt; $1_2^3 + 1_2^2 + 0_2^1 + 1_2^0 = 13$</p><p>11.01 -&gt; $1_2^1 + 1_2^0 + 0_2^{-1} + 1_2^{-2} = 3.25$</p><p>十进制 -&gt; 二进制</p><p>13 -&gt; 1101</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>13 / 2  商 6    余  1
6  / 2  商 3    余  0
3  / 2  商 1    余  1
1  / 2  商 0    余  1
余数从下往上看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.25 -&gt; 11.01</p><p>整数部分一样</p><p>小数部分</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.25 * 2    0.5     整数部分：0
0.5  * 2    1.0     整数部分：1
整数部分从上往下看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="为什么-js-的小数运算不精确" tabindex="-1"><a class="header-anchor" href="#为什么-js-的小数运算不精确" aria-hidden="true">#</a> 为什么 JS 的小数运算不精确</h3><p>十进制的小数，转换为二进制后，可能是无限小数，但是计算机对数字的存储能力有限，因此会丢失一些数据。</p><p>十进制数 0.3 -&gt; 0.010011001100110011001.....</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0.3*2   0.6     0
0.6*2   1.2     1
0.2*2   0.4     0
0.4*2   0.8     0
0.8*2   1.6     1
0.6*2   1.2     1
0.2*2   0.4     0
......
整数部分从上往下看
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js-如何存储数字" tabindex="-1"><a class="header-anchor" href="#js-如何存储数字" aria-hidden="true">#</a> JS 如何存储数字</h3><p>整数法、浮点法</p><p>JS 中，存储的所有数字，都按照浮点法存放。</p><p>浮点法存放的数字，叫做浮点数（float），浮点数分为单精度和双精度。</p><p>JS 中，使用双精度存放浮点数，IEEE 754。</p><p><strong>存放方式</strong></p><p>JS 在计算机中，给每个数字开辟一块内存空间，尺寸固定为 64 位</p><blockquote><p>在计算机中，位（bit）是最小的存储单位，简称为 bit</p><p>1 byte = 8 bit</p><p>1 KB = 1024 byte</p><p>1 MB = 1024 KB</p><p>1 GB = 1024 MB</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[第1段][第2段][第3段]
第1段：1位，表示符号位，如果为1，是负数，如果为0，是正数
第2段：11位，表示指数位，这里的指数是2为底的指数，而不是10
第3段：52位，表示有效数字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0     1000 0000 011    1111 0000 0000 0000....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相当于： $1.1111 * 2 ^ {1027 - 1023} $</p><p><strong>特殊情况</strong></p><ol><li><p>指数为 0，尾数为 0，表示数字 0</p></li><li><p>符号为 0，指数为 2047，尾数为 0，表示正无穷</p><p>Infinity: 0 11111111111 00000000000...</p></li><li><p>符号为 1，指数为 2047，尾数为 0，表示负无穷</p><p>-Infinity: 1 11111111111 00000000000...</p></li><li><p>指数为 2047，尾数不为 0，表示 NaN</p><p>NaN: 1 11111111111 01001010000...</p></li></ol><p><strong>一个正常的数字，指数部分最多是 2046</strong></p><h3 id="能表示的最大数字" tabindex="-1"><a class="header-anchor" href="#能表示的最大数字" aria-hidden="true">#</a> 能表示的最大数字</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 11111111110 1111111111.........
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相当于： $1.1111111111... * 2 ^ 1023 $</p><h3 id="能表示的最大的安全整数" tabindex="-1"><a class="header-anchor" href="#能表示的最大的安全整数" aria-hidden="true">#</a> 能表示的最大的安全整数</h3><p>安全数字：从 1 开始到该数字，均是连续的整数，并且该数字的下一个整数是存在的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0 xxxxx 1111111111....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相当于： $2^53 - 1$</p><p>下一位： $2^53$ <code>0 xxxxx 0000000000000</code></p><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> 位运算</h2><p>将一个整数的二进制格式进行运算</p><p>js 中，如果对一个数据进行位运算，它首先会将其转换为一个整数，并且按照 32 位的整数二进制排列</p><p>举例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2.7-&gt;2-&gt;00000000000000000000000000000010NaN-&gt;0Infinity-&gt;0-Infinity-&gt;0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="与运算" tabindex="-1"><a class="header-anchor" href="#与运算" aria-hidden="true">#</a> 与运算</h3><p>符号：&amp;</p><p>写法：整数 1 &amp; 整数 2</p><p>将两个整数每一位进行比较，如果都为 1，结果为 1，否则结果为 0.</p><h3 id="或运算" tabindex="-1"><a class="header-anchor" href="#或运算" aria-hidden="true">#</a> 或运算</h3><p>符号：|</p><p>写法：整数 1 | 整数 2</p><p>将两个整数每一位进行比较，如果都为 0，结果为 0，否则结果为 1.</p><h3 id="否-非-运算" tabindex="-1"><a class="header-anchor" href="#否-非-运算" aria-hidden="true">#</a> 否（非）运算</h3><p>符号：~</p><p>写法：~整数</p><p>将该整数按位取反</p><p><strong>负数的存储方式</strong></p><p>-1</p><p>真码：1000 0000 0000 0000 0000 0000 0000 0001</p><p>反码：1111 1111 1111 1111 1111 1111 1111 1110 真码取反</p><p>补码：1111 1111 1111 1111 1111 1111 1111 1111 反码加 1 最终的存储方案</p><p>取反的快速运算：-数字 - 1</p><p>JS 中最快速的取整的方式：<code>~~整数</code></p><h3 id="异或运算" tabindex="-1"><a class="header-anchor" href="#异或运算" aria-hidden="true">#</a> 异或运算</h3><p>符号：^</p><p>写法：数字 1 ^ 数字 2</p><p>将数字 1 和数字 2 按位比较，不同取 1，相同取 0</p><h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h3><p>位的叠加（开关）</p><h3 id="位移运算" tabindex="-1"><a class="header-anchor" href="#位移运算" aria-hidden="true">#</a> 位移运算</h3><p>左位移： &lt;&lt;</p><p>写法： 数字 1 &lt;&lt; 数字 2 结果： 数字 1 * 2 ^ 数字 2</p><p>将数字 1 的二进制（除符号之外，左移动数字 2 的次数）</p><p>右位移：&gt;&gt;</p><p>写法： 数字 1 &gt;&gt; 数字 2 结果： 整数(数字 1 / 2 ^ 数字 2)</p><p>全右位移：&gt;&gt;&gt;</p><p>与右位移的区别，在于全右位移会导致符号位跟着位移。</p>`,92),p=[s];function r(l,t){return a(),i("div",null,p)}const h=e(n,[["render",r],["__file","01-shuzidecunchu-liaojie.html.vue"]]);export{h as default};
