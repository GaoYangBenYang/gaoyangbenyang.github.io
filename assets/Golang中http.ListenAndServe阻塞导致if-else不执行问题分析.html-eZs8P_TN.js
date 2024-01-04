import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as d,c as t,b as e,d as n,e as a,a as i}from"./app-kwG1kbri.js";const o={},u=i(`<h2 id="问题代码" tabindex="-1"><a class="header-anchor" href="#问题代码" aria-hidden="true">#</a> 问题代码</h2><blockquote><p>简单的代码，你可能很难发现其中的错误：</p></blockquote><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>err := http.ListenAndServe(&quot;:8000&quot;, nil)
if err != nil {
  log.Println(&quot;ListenAndServe: &quot;, err)
} else {
  log.Println(&quot;服务器启动,监听8000端口: &quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理想运行：</p>`,4),v={href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"},c=e("li",null,[e("p",null,"如果启动失败就打印“ListenAndServe: + 错误信息”。逻辑很简单！看上去没有任何问题！！")],-1),m=i(`<p>实际运行:</p><ol><li><p>服务器启动失败，端口被占用，打印“ListenAndServe + 错误信息”。</p></li><li><p>服务启动成功，且 err==nil，log.Println(&quot;服务器启动,监听8000端口: &quot;) 这段代码不会执行。</p></li></ol><h2 id="问题原因" tabindex="-1"><a class="header-anchor" href="#问题原因" aria-hidden="true">#</a> 问题原因</h2><ol><li><p>http.ListenAndServe 方法执行如果异常，则会执行下面的if语句，打印“ListenAndServe: + 错误信息”。</p></li><li><p>如果服务启动成功， err==nil， goroutine 就会阻塞后续执行。也就是服务启动后，后面 if 整段代码都不会被执行！</p></li></ol><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><ol><li>开源项目基本都是只进行错误时的处理</li></ol><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>err := http.ListenAndServe(&quot;:8000&quot;, nil)
if err != nil {
  log.Println(&quot;ListenAndServe: &quot;, err)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>新建一个goroutine协程每秒ping一下服务端口</li></ol><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>go func() {
  for {
    time.Sleep(time.Second)
    log.Println(&quot;正在监听服务端口...&quot;)
    resp, err := http.Get(&quot;http://localhost:8000&quot;)
    if err != nil {
      log.Println(&quot;Failed:&quot;, err)
      continue
    }
    resp.Body.Close()
    if resp.StatusCode != http.StatusOK {
      log.Println(&quot;Not OK:&quot;, resp.StatusCode)
      continue
    }
    break
  }
  log.Println(&quot;服务器启动,监听8000端口:&quot;)
}()

err := http.ListenAndServe(&quot;:8000&quot;, nil)
if err != nil {
  log.Println(&quot;ListenAndServe: &quot;, err)
} else {
  log.Println(&quot;服务器启动,监听8000端口: &quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function b(g,p){const l=s("ExternalLinkIcon");return d(),t("div",null,[u,e("ol",null,[e("li",null,[e("p",null,[n("如果服务启动成功，打印“服务器启动,监听8000端口: ”，开始访问"),e("a",v,[n("http://localhost:8000"),a(l)]),n("。")])]),c]),m])}const q=r(o,[["render",b],["__file","Golang中http.ListenAndServe阻塞导致if-else不执行问题分析.html.vue"]]);export{q as default};
