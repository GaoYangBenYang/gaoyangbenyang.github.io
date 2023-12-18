import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as p,a as t,b as e,d as a,e as s}from"./app-FQ8p5nYn.js";const r="/assets/blog/JSONWebToken基本概念/jwt01.png",c="/assets/blog/JSONWebToken基本概念/jwt02.png",d={},u=s(`<h2 id="_1-摘要" tabindex="-1"><a class="header-anchor" href="#_1-摘要" aria-hidden="true">#</a> 1. 摘要</h2><p>JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案，本文介绍它的原理，用法和详细的数据结构。</p><h2 id="_2-jwt的定义" tabindex="-1"><a class="header-anchor" href="#_2-jwt的定义" aria-hidden="true">#</a> 2. JWT的定义</h2><p>Json web token（JWT）是为了网络应用环境间传递声明而执行的一种基于JSON的开发标准（RFC 7519），该token被设计为紧凑且安全的，特别适用于分布式站点的单点登陆（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。</p><p>什么情况下使用JWT比较适合？</p><p>授权：这是最常见的使用场景，解决单点登录问题。因为JWT使用起来轻便，开销小，服务端不用记录用户状态信息（无状态），所以使用比较广泛；</p><p>信息交换：JWT是在各个服务之间安全传输信息的好方法。因为JWT可以签名，例如，使用公钥/私钥对儿 - 可以确定请求方是合法的。此外，由于使用标头和有效负载计算签名，还可以验证内容是否未被篡改。</p><h2 id="_3-jwt的原理和流程" tabindex="-1"><a class="header-anchor" href="#_3-jwt的原理和流程" aria-hidden="true">#</a> 3. JWT的原理和流程</h2><h3 id="_3-1-跨域认证的问题" tabindex="-1"><a class="header-anchor" href="#_3-1-跨域认证的问题" aria-hidden="true">#</a> 3.1 跨域认证的问题</h3><p>互联网服务离不开用户认证。一般流程是下面这样：</p><ol><li>用户向服务器发送用户名和密码。</li><li>服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。</li><li>服务器向用户返回一个 session_id，写入用户的 Cookie。</li><li>用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。</li><li>服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。</li></ol><p>这种模式的问题在于，扩展性（scaling）不好。单机当然没有问题，如果是服务器集群，或者是跨域的服务导向架构，就要求 session 数据共享，每台服务器都能够读取 session。</p><p>举例来说，A 网站和 B 网站是同一家公司的关联服务。现在要求，用户只要在其中一个网站登录，再访问另一个网站就会自动登录，请问怎么实现？</p><p>一种解决方案是 session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。</p><p>另一种方案是服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表。</p><h3 id="_3-2-jwt-的原理" tabindex="-1"><a class="header-anchor" href="#_3-2-jwt-的原理" aria-hidden="true">#</a> 3.2 JWT 的原理</h3><p>JWT 的原理是，服务器认证以后，生成一个 JSON 对象，发回给用户，就像下面这样。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;姓名&quot;</span><span class="token operator">:</span> <span class="token string">&quot;张三&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;角色&quot;</span><span class="token operator">:</span> <span class="token string">&quot;管理员&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;到期时间&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023年9月28日0点0分&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以后，用户与服务端通信的时候，都要发回这个 JSON 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名。</p><p>服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。</p><p>区别:</p><ol><li>session 存储在服务端占用服务器资源，而 JWT 存储在客户端</li><li>session 存储在 Cookie 中，存在伪造跨站请求伪造攻击的风险</li><li>session 只存在一台服务器上，那么下次请求就必须请求这台服务器，不利于分布式应用</li><li>存储在客户端的 JWT 比存储在服务端的 session 更具有扩展性</li></ol><h3 id="_3-3-jwt的认证流程图" tabindex="-1"><a class="header-anchor" href="#_3-3-jwt的认证流程图" aria-hidden="true">#</a> 3.3 JWT的认证流程图</h3><figure><img src="`+r+'" alt="JWT的认证流程图" tabindex="0" loading="lazy"><figcaption>JWT的认证流程图</figcaption></figure><p>流程说明：</p><ol><li>浏览器发起请求登陆，携带用户名和密码；</li><li>服务端验证身份，根据算法，将用户标识符打包生成 token,</li><li>服务器返回JWT信息给浏览器，JWT不包含敏感信息；</li><li>浏览器发起请求获取用户资料，把刚刚拿到的 token一起发送给服务器；</li><li>服务器发现数据中有 token，验明正身；</li><li>服务器返回该用户的用户资料；</li></ol><h3 id="_3-4-jwt的6个优缺点" tabindex="-1"><a class="header-anchor" href="#_3-4-jwt的6个优缺点" aria-hidden="true">#</a> 3.4 JWT的6个优缺点</h3><ol><li>JWT默认不加密，但可以加密。生成原始令牌后，可以使用改令牌再次对其进行加密。</li><li>当JWT未加密方法是，一些私密数据无法通过JWT传输。</li><li>JWT不仅可用于认证，还可用于信息交换。善用JWT有助于减少服务器请求数据库的次数。</li><li>JWT的最大缺点是服务器不保存会话状态，所以在使用期间不可能取消令牌或更改令牌的权限。也就是说，一旦JWT签发，在有效期内将会一直有效。</li><li>JWT本身包含认证信息，因此一旦信息泄露，任何人都可以获得令牌的所有权限。为了减少盗用，JWT的有效期不宜设置太长。对于某些重要操作，用户在使用时应该每次都进行进行身份验证。</li><li>为了减少盗用和窃取，JWT不建议使用HTTP协议来传输代码，而是使用加密的HTTPS协议进行传输。</li></ol><h2 id="_4-jwt的数据结构" tabindex="-1"><a class="header-anchor" href="#_4-jwt的数据结构" aria-hidden="true">#</a> 4. JWT的数据结构</h2><h3 id="_4-1-jwt消息构成" tabindex="-1"><a class="header-anchor" href="#_4-1-jwt消息构成" aria-hidden="true">#</a> 4.1 JWT消息构成</h3><p>一个token分3部分，按顺序:</p><blockquote><p>头部（header)<br> 载荷（payload)<br> 签证（signature)</p></blockquote><p>JWT对象为一个很长的字符串，字符之间通过&quot;.&quot;分隔符分为三个子串。注意JWT对象为一个长字串，各字串之间也没有换行符，一般格式为：xxxxx.yyyyy.zzzzz 。</p><blockquote><p>例如 yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</p></blockquote><figure><img src="'+c+`" alt="JWT的认证流程图" tabindex="0" loading="lazy"><figcaption>JWT的认证流程图</figcaption></figure><h3 id="_4-2-头部-header" tabindex="-1"><a class="header-anchor" href="#_4-2-头部-header" aria-hidden="true">#</a> 4.2 头部（header)</h3><p>JWT的头部承载两部分信息：</p><ul><li>声明类型，这里是jwt</li><li>声明加密的算法 通常直接使用 HMAC SHA256</li></ul><p>JWT里验证和签名使用的算法，可选择下面的：</p><table><thead><tr><th style="text-align:left;">JWS</th><th style="text-align:left;">算法名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">HS256</td><td style="text-align:left;">HMAC256</td><td style="text-align:left;">HMAC with SHA-256</td></tr><tr><td style="text-align:left;">HS384</td><td style="text-align:left;">HMAC384</td><td style="text-align:left;">HMAC with SHA-384</td></tr><tr><td style="text-align:left;">HS384</td><td style="text-align:left;">HMAC512</td><td style="text-align:left;">HMAC with SHA-512</td></tr><tr><td style="text-align:left;">RS256</td><td style="text-align:left;">RSA256</td><td style="text-align:left;">RSASSA-PKCS1-v1_5 with SHA-256</td></tr><tr><td style="text-align:left;">RS384</td><td style="text-align:left;">RSA384</td><td style="text-align:left;">RSASSA-PKCS1-v1_5 with SHA-384</td></tr><tr><td style="text-align:left;">RS512</td><td style="text-align:left;">RSA512</td><td style="text-align:left;">RSASSA-PKCS1-v1_5 with SHA-512</td></tr><tr><td style="text-align:left;">ES256</td><td style="text-align:left;">ECDSA256</td><td style="text-align:left;">ECDSA with curve P-256 and SHA-256</td></tr><tr><td style="text-align:left;">ES384</td><td style="text-align:left;">ECDSA384</td><td style="text-align:left;">ECDSA with curve P-384 and SHA-384</td></tr><tr><td style="text-align:left;">ES512</td><td style="text-align:left;">ECDSA512</td><td style="text-align:left;">ECDSA with curve P-521 and SHA-512</td></tr></tbody></table><p>JWT的头部描述JWT元数据的JSON对象参考：<br> {<br> &quot;alg&quot;: &quot;HS256&quot;,<br> &quot;typ&quot;: &quot;JWT&quot;<br> }</p><h3 id="_4-3-载荷-payload" tabindex="-1"><a class="header-anchor" href="#_4-3-载荷-payload" aria-hidden="true">#</a> 4.3 载荷（payload)</h3><p>Payload 部分也是一个 JSON 对象，用来存放实际需要传递的数据。JWT 规定了7个官方字段，供选用。</p><blockquote><p>iss (issuer)：签发人</p></blockquote><blockquote><p>exp (expiration time)：过期时间</p></blockquote><blockquote><p>sub (subject)：主题</p></blockquote><blockquote><p>aud (audience)：受众</p></blockquote><blockquote><p>nbf (Not Before)：生效时间</p></blockquote><blockquote><p>iat (Issued At)：签发时间</p></blockquote><blockquote><p>jti (JWT ID)：编号</p></blockquote><p>除以上默认字段外，我们还可以自定义私有字段，如下例：<br> {<br> &quot;sub&quot;: &quot;1234567890&quot;,<br> &quot;name&quot;: &quot;chongchong&quot;,<br> &quot;admin&quot;: true<br> }</p><p>注意，JWT 默认是不加密的，任何人都可以读到，所以不要把秘密信息放在这个部分。<br> 这个 JSON 对象也要使用 Base64URL 算法转成字符串。</p><p>代码样例如下:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token constant">JWT</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withHeader</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span> <span class="token comment">// header</span>
                <span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">&quot;iss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Service&quot;</span><span class="token punctuation">)</span> <span class="token comment">// payload</span>
                <span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">&quot;aud&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;APP&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">withIssuedAt</span><span class="token punctuation">(</span>iatDate<span class="token punctuation">)</span> <span class="token comment">// sign time</span>
                <span class="token punctuation">.</span><span class="token function">withExpiresAt</span><span class="token punctuation">(</span>expiresDate<span class="token punctuation">)</span> <span class="token comment">// expire time</span>
                <span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cy&quot;</span><span class="token punctuation">)</span> <span class="token comment">// payload</span>
                <span class="token punctuation">.</span><span class="token function">withClaim</span><span class="token punctuation">(</span><span class="token string">&quot;user_id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-签名-signature" tabindex="-1"><a class="header-anchor" href="#_4-4-签名-signature" aria-hidden="true">#</a> 4.4 签名（signature)</h3><p>Signature 部分是对前两部分的签名，防止数据篡改。<br> 首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名。</p><blockquote><p>HMACSHA256( base64UrlEncode(header) + &quot;.&quot; + base64UrlEncode(payload), secret)</p></blockquote><p>算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用&quot;点&quot;（.）分隔，就构成整个JWT对象TOKEN， 就可以返回给用户。</p><h4 id="_4-4-1-base64url算法" tabindex="-1"><a class="header-anchor" href="#_4-4-1-base64url算法" aria-hidden="true">#</a> 4.4.1 Base64URL算法</h4>`,59),h=t("br",null,null,-1),J={href:"http://api.example.com/?token=xxx%EF%BC%89%E3%80%82Base64",target:"_blank",rel:"noopener noreferrer"},k=t("h3",{id:"_4-5-jwt的用法",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_4-5-jwt的用法","aria-hidden":"true"},"#"),e(" 4.5 JWT的用法")],-1),W=t("p",null,[e("客户端接收服务器返回的JWT，将其存储在Cookie或localStorage中。"),t("br"),e(" 此后，客户端将在与服务器交互中都会带JWT。如果将它存储在Cookie中，就可以自动发送，但是不会跨域，因此一般是将它放入HTTP请求的Header中的Authorization字段中。")],-1),b=t("blockquote",null,[t("p",null,"Authorization: Bearer <token>")],-1),_=t("p",null,"当跨域时，也可以将JWT被放置于POST请求的数据主体中。",-1),S=t("h2",{id:"_5-jwt、jws、jwe的区别",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_5-jwt、jws、jwe的区别","aria-hidden":"true"},"#"),e(" 5. JWT、JWS、JWE的区别")],-1),g=t("li",null,[t("p",null,"JWT(JSON Web Tokens)，jwt长度较小，且可以使用URL传输(URL safe)。不想cookies只能在web环境起作用。 JWT可以同时使用在web环境和RESTfull的接口。")],-1),T=t("li",null,[t("p",null,"对于开发者来说，JWT与另外两种相近的标准:JWS(JSON Web Signature)、JWE(JSON Web Encryption)，容易引起混乱。")],-1),f={href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"},x=t("br",null,null,-1),q=t("p",null,"简单来说，JWTs表现为一组被编码为JWS and/or JWE结构的JSON object的声明(Claim).",-1),y=t("p",null,"换言之，一组JWT声明(就是表现为JSON格式的Claims)被通过JWS结构或者JWE结构(或者同时使用两种)发送，决定于你如何去实现它。所以，当你发送JWT给别人是，它实际上是一个JWT荷载或者JWE荷载。JWS荷载更加常用。",-1),m=s("<li><p>关于JWS<br> 顾名思义，JWS模式对这个内容进行了数字化签名。这个内容被用来存放JWT的声明.服务端签名出JWT并且发送到客户端，并在用户成功认证后进行应答。服务器期望客户端在下次请求的时候将JWS作为请求的一部分，发送回服务端。</p><p>如果我们处理的客户端是欺骗者怎么办呢？这就是签名(signature)需要出场的地方了。签名携带了完整的可验证的信息。换句话说，服务器可以确认，接收到的JWT声明里的JWS是没有经过欺骗客户端、中间者进行修改的。<br> 服务端通过验证消息的签名来确保客户端没有修改声明。如果服务端检测到任何修改，可以采取适当的动作(拒绝这次请求或者锁定客户端之类的)。<br> 客户端同样可以验证签名，为了做到这点，客户端也需要服务端的secret(密钥)(如果这个JWT签名是HMAC算法),或者需要服务端对公钥(如果这个WJT是数字化签名)。<br> 特别注意：对于JWS，荷载(声明部分)没有进行加密，所以，不要发送任何敏感信息。</p></li><li><p>关于JWE<br> JWE模式会对内容加密，而不是签名。JWT的声明会被加密。因此JWE带来了保密性。JWE可以被签名并附在JWS里。这样的话就可以同时加密和签名。因此得到了保密性(Confidentiality)、完整性(Integrity)、可认证(Authentication)。</p></li><li><p>那么对于客户端，如何分辨JWS或者JWE呢？<br> JWS的Header与JWE的Header是不同的，可以通过检查“alg”Header参数的值来区分。如果这个值表现为一个数字签名或者MAC的算法，或者是”none“，则它是一个JWS。<br> 如果它表现为一个 Key Encryption, Key Wrapping, Direct Key Agreement, Key Agreement with Key Wrapping, or Direct Encryption algorithm。则它是一个JWE。<br> 还可以通过Header里的“enc”(encryption algorithm)是否存在来判断，如果&quot;enc&quot;这个成员存在的话说明是JWE，否则的话就是JWS.</p></li>",3);function w(A,v){const n=i("ExternalLinkIcon");return l(),p("div",null,[u,t("p",null,[e("前面提到，Header 和 Payload 串型化的算法是 Base64URL。这个算法跟 Base64 算法基本类似，但有一些小的不同。"),h,e(" JWT 作为一个令牌（token），有些场合可能会放到 URL（比如 "),t("a",J,[e("api.example.com/?token=xxx）。Base64"),a(n)]),e(" 有三个字符+、/和=，在 URL 里面有特殊含义，所以要被替换掉：=被省略、+替换成-，/替换成_ 。这就是 Base64URL 算法。")]),k,W,b,_,S,t("ol",null,[g,T,t("li",null,[t("p",null,[e("关于JWT的描述，可以参考RFC7519("),t("a",f,[e("https://tools.ietf.org/html/rfc7519"),a(n)]),e(")的描述:"),x,e(" **JSON Web Token (JWT) **是一个间接地、URL安全的，表现为一组声明，可以在双方之间进行传输。一个JWT的声明，是指经过编码后的一个JSON对象，这个JSON对象可以是一个JSON Web Signature(JWS)结构的荷载(payload)，或者是一个JSON Web Encryption(JWE)结构的明文。允许使用声明进行数字签名，或者通过一个Message Authentication Code(MAC)进行完整性保护可选择是否加密。")]),q,y]),m])])}const E=o(d,[["render",w],["__file","JSON Web Token(JWT)基本概念.html.vue"]]);export{E as default};
