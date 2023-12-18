const e=JSON.parse(`{"key":"v-679a1799","path":"/TheWayToProgress/JWT%E6%89%8B%E5%86%8Cv0.14.1.html","title":"","lang":"zh-CN","frontmatter":{"description":"1 介绍 JSON Web Token，简称 JWT（\\"jot\\"），是在空间受限的环境中安全传递请求的标准。它已进入所有主要的网络框架。简洁、紧凑和可用性是其架构的主要特点。尽管更复杂的系统仍在使用，但 JWT 的应用范围非常广泛。在这本小手册中，我们将介绍 JWT 架构最重要的方面，包括其二进制表示法和用于构建 JWT 的算法，同时还将介绍 JWT 在行业中的常用方法。 1.1 什么是JSON Web Token? JSON Web Token的外观如下（为便于阅读插入了换行符） eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9. TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ","head":[["meta",{"property":"og:url","content":"https://gaoyangbenyang.github.io/TheWayToProgress/JWT%E6%89%8B%E5%86%8Cv0.14.1.html"}],["meta",{"property":"og:site_name","content":"GaoYang's blog"}],["meta",{"property":"og:description","content":"1 介绍 JSON Web Token，简称 JWT（\\"jot\\"），是在空间受限的环境中安全传递请求的标准。它已进入所有主要的网络框架。简洁、紧凑和可用性是其架构的主要特点。尽管更复杂的系统仍在使用，但 JWT 的应用范围非常广泛。在这本小手册中，我们将介绍 JWT 架构最重要的方面，包括其二进制表示法和用于构建 JWT 的算法，同时还将介绍 JWT 在行业中的常用方法。 1.1 什么是JSON Web Token? JSON Web Token的外观如下（为便于阅读插入了换行符） eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9. eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9. TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-12T14:38:03.000Z"}],["meta",{"property":"article:author","content":"高洋"}],["meta",{"property":"article:modified_time","content":"2023-10-12T14:38:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-12T14:38:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"高洋\\",\\"url\\":\\"https://github.com/GaoYangBenYang\\",\\"email\\":\\"GaoYangBenYang@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"1 介绍","slug":"_1-介绍","link":"#_1-介绍","children":[{"level":3,"title":"1.1 什么是JSON Web Token?","slug":"_1-1-什么是json-web-token","link":"#_1-1-什么是json-web-token","children":[]}]},{"level":2,"title":"1.2 它解决了什么问题?","slug":"_1-2-它解决了什么问题","link":"#_1-2-它解决了什么问题","children":[]},{"level":2,"title":"2 实际应用(大致翻译未完成)","slug":"_2-实际应用-大致翻译未完成","link":"#_2-实际应用-大致翻译未完成","children":[{"level":3,"title":"2.1 Client-side/Stateless Sessions","slug":"_2-1-client-side-stateless-sessions","link":"#_2-1-client-side-stateless-sessions","children":[]}]},{"level":2,"title":"3 JSON Web Token 详解","slug":"_3-json-web-token-详解","link":"#_3-json-web-token-详解","children":[{"level":3,"title":"3.1 The Header","slug":"_3-1-the-header","link":"#_3-1-the-header","children":[]},{"level":3,"title":"3.2 The Payload","slug":"_3-2-the-payload","link":"#_3-2-the-payload","children":[]},{"level":3,"title":"3.2.2 Public and Private Claims","slug":"_3-2-2-public-and-private-claims","link":"#_3-2-2-public-and-private-claims","children":[]},{"level":3,"title":"3.3 不安全的JWT","slug":"_3-3-不安全的jwt","link":"#_3-3-不安全的jwt","children":[]},{"level":3,"title":"3.4 编码不安全的JWT","slug":"_3-4-编码不安全的jwt","link":"#_3-4-编码不安全的jwt","children":[]},{"level":3,"title":"3.5 解码不安全的JWT","slug":"_3-5-解码不安全的jwt","link":"#_3-5-解码不安全的jwt","children":[]}]},{"level":2,"title":"4 JSON Web Signatures","slug":"_4-json-web-signatures","link":"#_4-json-web-signatures","children":[{"level":3,"title":"4.1 已签名 JWT 的结构","slug":"_4-1-已签名-jwt-的结构","link":"#_4-1-已签名-jwt-的结构","children":[]},{"level":3,"title":"4.1.1 紧凑序列化算法概述","slug":"_4-1-1-紧凑序列化算法概述","link":"#_4-1-1-紧凑序列化算法概述","children":[]},{"level":3,"title":"4.1.2 签名算法的实用性","slug":"_4-1-2-签名算法的实用性","link":"#_4-1-2-签名算法的实用性","children":[]},{"level":3,"title":"4.1.3  JWS Header Claims","slug":"_4-1-3-jws-header-claims","link":"#_4-1-3-jws-header-claims","children":[]}]}],"git":{"createdTime":1697121483000,"updatedTime":1697121483000,"contributors":[{"name":"GaoYang","email":"GaoYangBenYang@outlook.com","commits":1}]},"readingTime":{"minutes":18.85,"words":5654},"filePathRelative":"TheWayToProgress/JWT手册v0.14.1.md","localizedDate":"2023年10月12日","excerpt":"<h2> 1 介绍</h2>\\n<p>JSON Web Token，简称 JWT（\\"jot\\"），是在空间受限的环境中安全传递请求的标准。它已进入所有主要的网络框架。简洁、紧凑和可用性是其架构的主要特点。尽管更复杂的系统仍在使用，但 JWT 的应用范围非常广泛。在这本小手册中，我们将介绍 JWT 架构最重要的方面，包括其二进制表示法和用于构建 JWT 的算法，同时还将介绍 JWT 在行业中的常用方法。</p>\\n<h3> 1.1 什么是JSON Web Token?</h3>\\n<p>JSON Web Token的外观如下（为便于阅读插入了换行符）</p>\\n<pre><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.\\neyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.\\nTJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\\n</code></pre>","autoDesc":true}`);export{e as data};
