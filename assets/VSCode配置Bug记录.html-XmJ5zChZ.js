import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-A3J5386m.js";const t={},o=e(`<h2 id="c-language-c-dev-kit-extension-插件自动下载runtime" tabindex="-1"><a class="header-anchor" href="#c-language-c-dev-kit-extension-插件自动下载runtime" aria-hidden="true">#</a> C# Language &amp; c# Dev Kit Extension 插件自动下载runtime</h2><h3 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h3><blockquote><p>手动安装SDK,指向本地SDK</p></blockquote><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3><blockquote><ol><li>在setting中搜索 配置项 existingDotnetPath 进入setting.json中</li><li>添加 指定哪几个扩展需要指向本地的sdk</li></ol></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;dotnetAcquisitionExtension.existingDotnetPath&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;extensionId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ms-dotnettools.csharp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Development\\\\dotnet\\\\dotnet.exe&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;extensionId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ms-dotnettools.csdevkit&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:\\\\Development\\\\dotnet\\\\dotnet.exe&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[o];function p(c,l){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","VSCode配置Bug记录.html.vue"]]);export{d as default};
