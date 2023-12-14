import{_ as n,o as a,c as s,a as t}from"./app-72013311.js";const e={},p=t(`<blockquote><p>面试题：请阐述一下 <code>v-model</code> 的原理</p></blockquote><p><code>v-model</code>即可以作用于表单元素，又可作用于自定义组件，无论是哪一种情况，它都是一个语法糖，最终会生成一个属性和一个事件</p><p><strong>当其作用于表单元素时</strong>，<code>vue</code>会根据作用的表单元素类型而生成合适的属性和事件。例如，作用于普通文本框的时候，它会生成<code>value</code>属性和<code>input</code>事件，而当其作用于单选框或多选框时，它会生成<code>checked</code>属性和<code>change</code>事件。</p><p><code>v-model</code>也可作用于自定义组件，<strong>当其作用于自定义组件时</strong>，默认情况下，它会生成一个<code>value</code>属性和<code>input</code>事件。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 等效于 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data=$event<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开发者可以通过组件的<code>model</code>配置来改变生成的属性和事件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Comp</span>
<span class="token keyword">const</span> Comp <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">prop</span><span class="token operator">:</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认为 value</span>
    <span class="token literal-property property">event</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认为 input</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- 等效于 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Comp</span> <span class="token attr-name">:number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data=$event<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),o=[p];function c(l,u){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","03-v-model.html.vue"]]);export{d as default};
