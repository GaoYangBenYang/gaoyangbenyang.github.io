const e=JSON.parse(`{"key":"v-0f0bbd43","path":"/Blog/gorm%E4%B8%AD%E8%A1%A8%E5%90%8D%E8%87%AA%E5%8A%A8%E5%8A%A0s%E4%BD%BF%E7%94%A8%E5%A4%8D%E6%95%B0%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86.html","title":"gorm中表名自动加s使用复数问题处理","lang":"zh-CN","frontmatter":{"title":"gorm中表名自动加s使用复数问题处理","date":"2023-09-26T00:00:00.000Z","category":["gorm"],"tag":["问题分析"],"sticky":true,"star":true,"pageInfo":["Author","Date","ReadingTime","Word","Category","Tag"],"description":"在gorm配置文件中添加单数表名配置项 \\tdb, err := gorm.Open(mysql.New(mysql.Config{ \\t\\tDSN: config.Conf.MySQL.UserName+\\":\\"+config.Conf.MySQL.Password+\\"@tcp(\\"+config.Conf.MySQL.Address+\\")/\\"+config.Conf.MySQL.DBName+\\"?charset=utf8&amp;parseTime=True&amp;loc=Local\\", // DSN data source name \\t}), &amp;gorm.Config{ \\t\\tNamingStrategy: schema.NamingStrategy{ \\t\\t\\tSingularTable: true, // 使用单数表名 \\t\\t}, \\t})","head":[["meta",{"property":"og:url","content":"https://gaoyangbenyang.github.io/Blog/gorm%E4%B8%AD%E8%A1%A8%E5%90%8D%E8%87%AA%E5%8A%A8%E5%8A%A0s%E4%BD%BF%E7%94%A8%E5%A4%8D%E6%95%B0%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"GaoYang's blog"}],["meta",{"property":"og:title","content":"gorm中表名自动加s使用复数问题处理"}],["meta",{"property":"og:description","content":"在gorm配置文件中添加单数表名配置项 \\tdb, err := gorm.Open(mysql.New(mysql.Config{ \\t\\tDSN: config.Conf.MySQL.UserName+\\":\\"+config.Conf.MySQL.Password+\\"@tcp(\\"+config.Conf.MySQL.Address+\\")/\\"+config.Conf.MySQL.DBName+\\"?charset=utf8&amp;parseTime=True&amp;loc=Local\\", // DSN data source name \\t}), &amp;gorm.Config{ \\t\\tNamingStrategy: schema.NamingStrategy{ \\t\\t\\tSingularTable: true, // 使用单数表名 \\t\\t}, \\t})"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-18T14:45:00.000Z"}],["meta",{"property":"article:author","content":"高洋"}],["meta",{"property":"article:tag","content":"问题分析"}],["meta",{"property":"article:published_time","content":"2023-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-18T14:45:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"gorm中表名自动加s使用复数问题处理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-18T14:45:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"高洋\\",\\"url\\":\\"https://github.com/GaoYangBenYang\\",\\"email\\":\\"GaoYangBenYang@outlook.com\\"}]}"]]},"headers":[{"level":2,"title":"在gorm配置文件中添加单数表名配置项","slug":"在gorm配置文件中添加单数表名配置项","link":"#在gorm配置文件中添加单数表名配置项","children":[]}],"git":{"createdTime":1695793185000,"updatedTime":1702910700000,"contributors":[{"name":"GaoYang","email":"GaoYangBenYang@outlook.com","commits":3}]},"readingTime":{"minutes":0.38,"words":114},"filePathRelative":"Blog/gorm中表名自动加s使用复数问题处理.md","localizedDate":"2023年9月26日","excerpt":"<h2> 在gorm配置文件中添加单数表名配置项</h2>\\n<div class=\\"language-golang line-numbers-mode\\" data-ext=\\"golang\\"><pre class=\\"language-golang\\"><code>\\tdb, err := gorm.Open(mysql.New(mysql.Config{\\n\\t\\tDSN: config.Conf.MySQL.UserName+\\":\\"+config.Conf.MySQL.Password+\\"@tcp(\\"+config.Conf.MySQL.Address+\\")/\\"+config.Conf.MySQL.DBName+\\"?charset=utf8&amp;parseTime=True&amp;loc=Local\\", // DSN data source name\\n\\t}), &amp;gorm.Config{\\n\\t\\tNamingStrategy: schema.NamingStrategy{\\n\\t\\t\\tSingularTable: true, // 使用单数表名\\n\\t\\t},\\n\\t})\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
