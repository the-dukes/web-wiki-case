import{_ as e,o as t,c as o,a as c}from"./app-0e5daedb.js";const d={},p=c("<blockquote><p>面试题：computed 和 methods 有什么区别</p></blockquote><p><strong>标准而浅显的回答</strong></p><blockquote><ol><li>在使用时，computed 当做属性使用，而 methods 则当做方法调用</li><li>computed 可以具有 getter 和 setter，因此可以赋值，而 methods 不行</li><li>computed 无法接收多个参数，而 methods 可以</li><li>computed 具有缓存，而 methods 没有</li></ol></blockquote><p><strong>更接近底层原理的回答</strong></p><blockquote><p>vue 对 methods 的处理比较简单，只需要遍历 methods 配置中的每个属性，将其对应的函数使用 bind 绑定当前组件实例后复制其引用到组件实例中即可</p><p>而 vue 对 computed 的处理会稍微复杂一些。</p><p>当组件实例触发生命周期函数<code>beforeCreate</code>后，它会做一系列事情，其中就包括对 computed 的处理</p><p>它会遍历 computed 配置中的所有属性，为每一个属性创建一个 Watcher 对象，并传入一个函数，该函数的本质其实就是 computed 配置中的 getter，这样一来，getter 运行过程中就会收集依赖</p><p>但是和渲染函数不同，为计算属性创建的 Watcher 不会立即执行，因为要考虑到该计算属性是否会被渲染函数使用，如果没有使用，就不会得到执行。因此，在创建 Watcher 的时候，它使用了 lazy 配置，lazy 配置可以让 Watcher 不会立即执行。</p><p>收到<code>lazy</code>的影响，Watcher 内部会保存两个关键属性来实现缓存，一个是<code>value</code>，一个是<code>dirty</code></p><p><code>value</code>属性用于保存 Watcher 运行的结果，受<code>lazy</code>的影响，该值在最开始是<code>undefined</code></p><p><code>dirty</code>属性用于指示当前的<code>value</code>是否已经过时了，即是否为脏值，受<code>lazy</code>的影响，该值在最开始是<code>true</code></p><p>Watcher 创建好后，vue 会使用代理模式，将计算属性挂载到组件实例中</p><p>当读取计算属性时，vue 检查其对应的 Watcher 是否是脏值，如果是，则运行函数，计算依赖，并得到对应的值，保存在 Watcher 的 value 中，然后设置 dirty 为 false，然后返回。</p><p>如果 dirty 为 false，则直接返回 watcher 的 value</p><p>巧妙的是，在依赖收集时，被依赖的数据不仅会收集到计算属性的 Watcher，还会收集到组件的 Watcher</p><p>当计算属性的依赖变化时，会先触发计算属性的 Watcher 执行，此时，它只需设置<code>dirty</code>为 true 即可，不做任何处理。</p><p>由于依赖同时会收集到组件的 Watcher，因此组件会重新渲染，而重新渲染时又读取到了计算属性，由于计算属性目前已为 dirty，因此会重新运行 getter 进行运算</p><p>而对于计算属性的 setter，则极其简单，当设置计算属性时，直接运行 setter 即可</p></blockquote>",5),r=[p];function a(l,u){return t(),o("div",null,r)}const h=e(d,[["render",a],["__file","07-nibuzhidaodecomputed.html.vue"]]);export{h as default};