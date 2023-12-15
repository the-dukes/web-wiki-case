import{_ as e,o,c as d,a as c}from"./app-7f983beb.js";const p={},m=c('<blockquote><p>面试题：请你阐述一下对 vue 虚拟 dom 的理解</p></blockquote><ol><li><p>什么是虚拟 dom？</p><p>虚拟 dom 本质上就是一个普通的 JS 对象，用于描述视图的界面结构</p><p>在 vue 中，每个组件都有一个<code>render</code>函数，每个<code>render</code>函数都会返回一个虚拟 dom 树，这也就意味着每个组件都对应一棵虚拟 DOM 树</p><img src="http://mdrs.yuanjin.tech/img/20210225140726.png" alt="image-20210225140726003" style="zoom:30%;"></li><li><p>为什么需要虚拟 dom？</p><p>在<code>vue</code>中，渲染视图会调用<code>render</code>函数，这种渲染不仅发生在组件创建时，同时发生在视图依赖的数据更新时。如果在渲染时，直接使用真实<code>DOM</code>，由于真实<code>DOM</code>的创建、更新、插入等操作会带来大量的性能损耗，从而就会极大的降低渲染效率。</p><p>因此，<code>vue</code>在渲染时，使用虚拟 dom 来替代真实 dom，主要为解决渲染效率的问题。</p></li><li><p>虚拟 dom 是如何转换为真实 dom 的？</p><p>在一个组件实例首次被渲染时，它先生成虚拟 dom 树，然后根据虚拟 dom 树创建真实 dom，并把真实 dom 挂载到页面中合适的位置，此时，每个虚拟 dom 便会对应一个真实的 dom。</p><p>如果一个组件受响应式数据变化的影响，需要重新渲染时，它仍然会重新调用 render 函数，创建出一个新的虚拟 dom 树，用新树和旧树对比，通过对比，vue 会找到最小更新量，然后更新必要的虚拟 dom 节点，最后，这些更新过的虚拟节点，会去修改它们对应的真实 dom</p><p>这样一来，就保证了对真实 dom 达到最小的改动。</p><img src="http://mdrs.yuanjin.tech/img/20210225144108.png" alt="image-20210225144108143" style="zoom:33%;"></li><li><p>模板和虚拟 dom 的关系</p><p>vue 框架中有一个<code>compile</code>模块，它主要负责将模板转换为<code>render</code>函数，而<code>render</code>函数调用后将得到虚拟 dom。</p><p>编译的过程分两步：</p><ol><li>将模板字符串转换成为<code>AST</code></li><li>将<code>AST</code>转换为<code>render</code>函数</li></ol><p>如果使用传统的引入方式，则编译时间发生在组件第一次加载时，这称之为运行时编译。</p><p>如果是在<code>vue-cli</code>的默认配置下，编译发生在打包时，这称之为模板预编译。</p><p>编译是一个极其耗费性能的操作，预编译可以有效的提高运行时的性能，而且，由于运行的时候已不需要编译，<code>vue-cli</code>在打包时会排除掉<code>vue</code>中的<code>compile</code>模块，以减少打包体积</p><p>模板的存在，仅仅是为了让开发人员更加方便的书写界面代码</p><p><strong>vue 最终运行的时候，最终需要的是 render 函数，而不是模板，因此，模板中的各种语法，在虚拟 dom 中都是不存在的，它们都会变成虚拟 dom 的配置</strong></p></li></ol>',2),i=[m];function l(r,t){return o(),d("div",null,i)}const s=e(p,[["render",l],["__file","02-xuniDOMxiangjie.html.vue"]]);export{s as default};
