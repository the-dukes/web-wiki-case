import{_ as t,r as e,o as c,c as o,e as l,w as p,a as u,b as n,d as s}from"./app-7f983beb.js";const i={},k=u('<h1 id="_11-状态存储与重置" tabindex="-1"><a class="header-anchor" href="#_11-状态存储与重置" aria-hidden="true">#</a> 11-状态存储与重置</h1><p>使用 ctx.save() 和 ctx.restore() 两个方法实现绘制状态的存储和重置。</p><p>绘制状态：</p><ul><li>描边样式，填充样式</li><li>线条样式</li><li>文本样式</li><li>裁剪</li><li>合成</li><li>图像变换</li></ul><p>每次调用 ctx.save()方法，都会将之前设置的状态存储起来(存入栈中)</p><p>可以调用多次 save 方法，将多个状态按照顺序存入栈中。</p><p>每次调用 ctx.restore()方法，会重置状态。所谓的重置状态，就是将当前状态从栈中移除（删除），恢复到上一次的状态。</p><p>save 和 restore 不是必须的，可以手动按照逻辑，恢复上一次的状态。</p>',8),r=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("canvas")]),s(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cvs"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("400"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("canvas")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" cvs "),n("span",{class:"token operator"},"="),s(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cvs'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(" ctx "),n("span",{class:"token operator"},"="),s(" cvs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//填充一个红色的矩形"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'#0f0'"),n("span",{class:"token punctuation"},";"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//填充一个蓝色的圆"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"save"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ctx`),n("span",{class:"token punctuation"},"."),s("fillStyle "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'#00f'"),n("span",{class:"token punctuation"},";"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"beginPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"arc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"PI"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"//填充一个红色的矩形"),s(`
`),n("span",{class:"token comment"},"//ctx.fillStyle = '#f00'; //逻辑上恢复状态"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"restore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//通过restore方法恢复状态"),s(`
ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"150"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function d(b,v){const a=e("CodeDemo");return c(),o("div",null,[k,l(a,{id:"code-demo-53",type:"normal",code:"eJyrVsooyc1RslKySU7MK0ssVshMsY1RSi4rjlFSyEjNTM8oAXJNDAxilOxs9CFK7GLylHSUsoqBmpLz84pLFICqFWwVUvKTS3NT80r00lNLXHNSQUynSs8UDXWgtLqmdUweVHFJBVAxUAykzjk/ryS1okRD3SgFrCQmT1//6cLVT1tbn+xoeLJj1fNdi150bno+q+X5/JVP9y4CmlFSoVecWJaqATYQyEnLzMkJLqnMSQUaqq5skGagDpVISk3PzAtILMlAURqUmlyiYaCjAESmYIzN1heT50JsfTqnjbCVBmm4rUwsStYwNABahCCAyBeoRC/AU0FLwQjZTLAugiGgr4/phjQDoLcV9PVfNux+sW/ikx1dzxoXPV3S+7xr27OGRogFRanFJflFIE+A1c16sb8dKvRs2s5nm6di6oAHlyEopCAE1BcghyrVAgBrmeRR"},{default:p(()=>[r,m]),_:1})])}const x=t(i,[["render",d],["__file","11-zhuangtaicunchuyuzhongzhi.html.vue"]]);export{x as default};
