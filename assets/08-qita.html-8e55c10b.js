import{_ as a,r,o as s,c,b as e,d as o,e as i,a as n}from"./app-0e5daedb.js";const d={},l=n('<h1 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器" aria-hidden="true">#</a> 过滤器</h1><p>参见官网文档：https://cn.vuejs.org/v2/guide/filters.html</p><h1 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h1><p>参见官网文档：https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD</p><p>属性：</p><ul><li><code>$slots</code>：用于访问父组件传递的普通插槽中的 vnode</li><li><code>$scopedSlots</code>：用于访问父组件传递的所有用于生成 vnode 的函数（包括默认插槽在内）</li></ul><h1 id="内置组件-transition" tabindex="-1"><a class="header-anchor" href="#内置组件-transition" aria-hidden="true">#</a> 内置组件 Transition</h1><blockquote><p>官网详细文档：https://cn.vuejs.org/v2/guide/transitions.html</p></blockquote><h2 id="时机" tabindex="-1"><a class="header-anchor" href="#时机" aria-hidden="true">#</a> 时机</h2><p><code>Transition</code>组件会监控<code>slot</code>中<strong>唯一</strong>根元素的出现和消失，并会在其出现和消失时应用过渡效果</p><p>具体的监听内容是：</p><ul><li>它会对新旧两个虚拟节点进行对比，如果旧节点被销毁，则应用消失效果，如果新节点是新增的，则应用进入效果</li><li>如果不是上述情况，则它会对比新旧节点，观察其<code>v-show</code>是否变化，<code>true-&gt;false</code>应用消失效果，<code>false-&gt;true</code>应用进入效果</li></ul><h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2>',13),h=n("<p>类名规则：</p><ol><li>如果<code>transition</code>上没有定义<code>name</code>，则类名为<code>v-xxxx</code></li><li>如果<code>transition</code>上定义了<code>name</code>，则类名为<code>${name}-xxxx</code></li><li>如果指定了类名，直接使用指定的类名</li></ol>",2),p={href:"https://cn.vuejs.org/v2/guide/transitions.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D",target:"_blank",rel:"noopener noreferrer"},u=n('<p><strong>1. 进入效果</strong></p><p><img src="http://mdrs.yuanjin.tech/img/20210309212357.png" alt=""></p><p><strong>2. 消失效果</strong></p><p><img src="http://mdrs.yuanjin.tech/img/20210309213426.png" alt="image-20210309213426958"></p><h2 id="过渡组" tabindex="-1"><a class="header-anchor" href="#过渡组" aria-hidden="true">#</a> 过渡组</h2><p><code>Transision</code>可以监控其内部的<strong>单个 dom 元素</strong>的出现和消失，并为其附加样式</p><p>如果要监控一个 dom 列表，就需要使用<code>TransitionGroup</code>组件</p><p>它会对列表的新增元素应用<strong>进入效果</strong>，删除元素应用<strong>消失效果</strong>，对被移动的元素应用<code>v-move</code>样式</p><blockquote><p>被移动的元素之所以能够实现过渡效果，是因为<code>TransisionGroup</code>内部使用了 Flip 过渡方案</p></blockquote><h2 id="模式和环境变量" tabindex="-1"><a class="header-anchor" href="#模式和环境变量" aria-hidden="true">#</a> 模式和环境变量</h2>',10),g={href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F%E5%92%8C%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[e("img",{src:"http://mdrs.yuanjin.tech/img/20210323133209.png",alt:"image-20210323133209659"})],-1),m=e("p",null,[e("img",{src:"http://mdrs.yuanjin.tech/img/20210323134742.png",alt:"image-20210323134742034"})],-1),f=e("p",null,[o("vue-cli 在打包时，会将 p"),e("wbr"),o("rocess.env.XXX 进行替换")],-1),E=e("p",null,"关于环境变量如何定义：",-1),b=e("ol",null,[e("li",null,"首先读取当前机器的环境变量"),e("li",null,"读取.env 文件")],-1),v=e("h2",{id:"更多配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更多配置","aria-hidden":"true"},"#"),o(" 更多配置")],-1),x={href:"https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},j=n('<h1 id="vue-config-js" tabindex="-1"><a class="header-anchor" href="#vue-config-js" aria-hidden="true">#</a> vue.config.js</h1><ul><li>devServer</li><li>publicPath</li><li>outputDir</li><li>runtimeCompiler</li><li>transpileDependencies</li><li>configureWebpack</li><li>css.requireModuleExtension</li></ul><h1 id="babel-配置" tabindex="-1"><a class="header-anchor" href="#babel-配置" aria-hidden="true">#</a> babel 配置</h1><p>写到项目根目录下的<code>babel.config.js</code>中</p><h1 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h1><p>ESLint 可以通过 <code>.eslintrc</code> 或 <code>package.json</code> 中的 <code>eslintConfig</code> 字段来配置。</p><h1 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> postcss</h1><p>写到<code>postcss.config.js</code></p>',8);function k(A,B){const t=r("ExternalLinkIcon");return s(),c("div",null,[l,e("blockquote",null,[h,e("p",null,[o("指定类名见："),e("a",p,[o("自定义过渡类名"),i(t)])])]),u,e("p",null,[o("详见 vue-cli 官网"),e("a",g,[o("模式和环境变量"),i(t)])]),_,m,f,E,b,v,e("p",null,[o("所有配置参考："),e("a",x,[o("vue-cli 配置"),i(t)])]),j])}const q=a(d,[["render",k],["__file","08-qita.html.vue"]]);export{q as default};
