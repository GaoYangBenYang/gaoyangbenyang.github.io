import{_ as e,X as n,Y as a,a1 as t}from"./framework-e0039b7c.js";const i={},o=t(`<h2 id="在gorm配置文件中添加单数表名配置项" tabindex="-1"><a class="header-anchor" href="#在gorm配置文件中添加单数表名配置项" aria-hidden="true">#</a> 在gorm配置文件中添加单数表名配置项</h2><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>	db, err := gorm.Open(mysql.New(mysql.Config{
		DSN: config.Conf.MySQL.UserName+&quot;:&quot;+config.Conf.MySQL.Password+&quot;@tcp(&quot;+config.Conf.MySQL.Address+&quot;)/&quot;+config.Conf.MySQL.DBName+&quot;?charset=utf8&amp;parseTime=True&amp;loc=Local&quot;, // DSN data source name
	}), &amp;gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true, // 使用单数表名
		},
	})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),s=[o];function r(d,c){return n(),a("div",null,s)}const m=e(i,[["render",r],["__file","gorm中表名自动加s使用复数问题处理.html.vue"]]);export{m as default};
