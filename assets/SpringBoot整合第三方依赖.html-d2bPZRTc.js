import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as r,b as e,d as n,e as o,a as l}from"./app-PmcSwjuV.js";const c={},d=e("h2",{id:"springboot整合swagger3-openapi",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#springboot整合swagger3-openapi","aria-hidden":"true"},"#"),n(" SpringBoot整合Swagger3(OpenAPI)")],-1),p={href:"https://springdoc.org/",target:"_blank",rel:"noopener noreferrer"},u=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        &lt;dependency&gt;
            &lt;groupId&gt;org.springdoc&lt;/groupId&gt;
            &lt;artifactId&gt;springdoc-openapi-starter-webmvc-ui&lt;/artifactId&gt;
            &lt;version&gt;2.3.0&lt;/version&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加配置文件</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">springdoc</span><span class="token punctuation">:</span>
  <span class="token key atrule">api-docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /swagger
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(v,m){const a=t("ExternalLinkIcon");return i(),r("div",null,[d,e("ol",null,[e("li",null,[n("导入Maven依赖,官网地址："),e("a",p,[n("Springdoc"),o(a)])])]),u])}const k=s(c,[["render",g],["__file","SpringBoot整合第三方依赖.html.vue"]]);export{k as default};
