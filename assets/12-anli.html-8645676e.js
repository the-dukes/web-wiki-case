import{_ as n,o as a,c as s,a as p}from"./app-7f983beb.js";const t={},l=p(`<h1 id="_12-实战案例" tabindex="-1"><a class="header-anchor" href="#_12-实战案例" aria-hidden="true">#</a> 12-实战案例</h1><h2 id="_1-动态时钟" tabindex="-1"><a class="header-anchor" href="#_1-动态时钟" aria-hidden="true">#</a> 1 动态时钟</h2><p>表盘 ， 刻度（大刻度，小刻度） ，表针（时针，分针，秒针）</p><p>表针需要不停的变动</p><ul><li>动画绘制</li><li>表针角度</li></ul><h2 id="_2-粒子烟花" tabindex="-1"><a class="header-anchor" href="#_2-粒子烟花" aria-hidden="true">#</a> 2 粒子烟花</h2><p>过程分 2 部分</p><ul><li><p>烟花升空</p><ul><li><p>由多个小球组成一个烟花升空拖尾的效果</p></li><li><p>每一个小球的半径依次减小</p></li><li><p>每一个小球的透明度依次变化，上升过程中，透明度整体还会变化</p><p>第一瞬间 10 个小球的透明度 分别是 1 0.99 0.98 ....</p><p>第二瞬间 10 个小球的透明度 分别是 0.5 0.49 0.48 ...</p></li></ul></li><li><p>烟花爆炸</p><ul><li>烟花主体消失</li><li>绘制一组小颗粒</li><li>沿着圆弧扩散</li></ul></li></ul><p>有的烟花处于升空状态，有的烟花处于爆炸状态，两个效果可以同时进行。</p><p>所以需要每一次都重新绘制。</p><p>涉及对象：</p><ul><li>烟花对象</li><li>小球对象，组成烟花主体</li><li>粒子对象，爆炸中的例子</li></ul><p>从升空到爆炸</p><ul><li><p>每隔一段时间，升空一个烟花</p></li><li><p>当屏幕中达到 3 个烟花时，最开始烟花就可以爆炸了</p></li><li><p>爆炸的时候，烟花主体消失（不再绘制）</p></li><li><p>绘制爆炸后产生的粒子（400,500），每次重新绘制的时候，改变其位置。</p></li></ul><h2 id="_3-贪吃蛇" tabindex="-1"><a class="header-anchor" href="#_3-贪吃蛇" aria-hidden="true">#</a> 3 贪吃蛇</h2><p>组成部分：</p><ul><li>棋盘</li><li>蛇（蛇头 + 身体）</li><li>食物</li></ul><p>提供 2 个画布，一个绘制棋牌（静态），一个绘制蛇 + 食物（动态）</p><p>绘制蛇</p><ul><li>将蛇设计成一个对象</li><li>设计一个矩形对象，表示蛇的组成，表示食物</li></ul><p>蛇(头)的移动</p><ul><li>注意方向</li><li>每绘制一个新位置，要将原来位置的图形删除掉。</li></ul><p>生成食物</p><ul><li><p>随机绘制一个矩形</p></li><li><p>确保在一个空白的位置 （没有蛇的位置）</p></li><li><p>设计： 定义一个对象，每一个格子的坐标作为 key，value 表示格子的占用状态 0 空闲， 1 占用</p><p>​ 每次绘制矩形的时候，将其格子设置为 1 ， 清除矩形的时候，将其格子设置为 0</p><p>​ 生成食物时，随机一个格子位置，判断其状态， 1 就重新随机，0 绘制食物。</p></li></ul><p>吃食物，身体变化，身体移动</p><ul><li>当蛇头坐标与食物坐标相撞时，表示吃到食物</li><li>吃到食物后，蛇的身体会边长，视觉效果上看就是后面身体的部分都没有变化，只有原来蛇头的位置加了一块身体，所以只需要在 body 的头部增加一个矩形，并绘制即可。</li><li>没有吃到事务，当蛇移动时，视觉效果上，最后一个位置的身体部分消失，在原来蛇头的位置增加了新的身体部分，其余部分没有变化。所以只需要将最后一个矩形移动到 body 的最前面并绘制即可。</li></ul><h2 id="_4-画图板" tabindex="-1"><a class="header-anchor" href="#_4-画图板" aria-hidden="true">#</a> 4 画图板</h2><p>线条绘制：</p><ul><li>多个点的连线</li><li>鼠标按下是起始点</li><li>鼠标移动，产生过程点</li><li>鼠标抬起，绘制结束。</li></ul><p>矩形绘制</p><ul><li>起始点， 宽高</li><li>鼠标按下，获得起始点</li><li>鼠标移动，产生过程点。</li><li>通过两点，可以计算宽高</li><li>矩形在绘制过程中，没有抬起鼠标，则还处于选择阶段，矩形没有确定。有一个拖拽的视觉效果</li><li>实际上是一个不断绘制的过程，此时存在一个问题： <ul><li>由于矩形会与其他图形产生覆盖， 如果删除之前绘制的矩形，也会将之前图形覆盖的部分也删除</li><li>为了提高性能，考虑使用 2 个画布。</li><li>在第一个画布中，绘制当前的这一个图形， 提起鼠标后，图形确定，再将其绘制到第二个画布上。</li></ul></li></ul><p>圆形绘制</p><ul><li><p>圆心点，半径</p></li><li><p>鼠标按下，获得起始点</p></li><li><p>鼠标移动，产生过程点</p></li><li><p>起始点 和 过程点，计算半径 和 圆心点</p></li><li><p>可能是正圆，也可能是椭圆。</p></li><li><p>原的拖拽绘制与矩形相同。</p></li></ul><p>填充：</p><ul><li>不是对某一个图形进行填充，而是对一块合围区域填充。</li><li>合围区域可能是有多个图形部分合围而成</li><li>难点：如何确定这个合围区域 。 可以通过像素操作来实现 <ul><li>以触发填充操作的那个点为基准</li><li>获得那个点的 rgba 值</li><li>然后向四周分散，一次找到四周所有的点， 与这个 rgba 比较，</li><li>完全相等，就实现颜色的变化，继续向四周扩散</li><li>不相等，说明已经到了一个边界，就不在继续发散了</li></ul></li></ul><p>橡皮擦：</p><ul><li>与刮刮乐实现过程相似</li><li>本质还是画线条</li><li>只不过与原图形的合成关系发生了变化。</li></ul><p>综上分析：</p><ul><li><p>目前需要 2 个画布。 一个体现绘制过程， 一个用来展示绘制结果</p></li><li><p>需要图形对象 ，包括多种类型（线条，矩形，圆形，橡皮擦）</p></li></ul><p>填充代码 1：递归（范围有限）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//改变当前点的颜色</span>
<span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//获得要改变这个点的原始颜色 (如何根据坐标点，获得其imageData中的显色位置)</span>
  <span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token function">point2Index</span><span class="token punctuation">(</span>imageData<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//判断这个原始颜色和基准颜色是否相同， 相同就改，不相同就结束了</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    baseImageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    baseImageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    baseImageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span>
    baseImageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//相等， 这个位置颜色可以改变</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    imageData<span class="token punctuation">.</span>data<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">;</span>

    <span class="token comment">//继续发散，再检查其四周</span>
    <span class="token function">change</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">change</span><span class="token punctuation">(</span>x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">change</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">change</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">//不相等，到达边界</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),i=[l];function e(o,c){return a(),s("div",null,i)}const k=n(t,[["render",e],["__file","12-anli.html.vue"]]);export{k as default};
