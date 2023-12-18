---
title: gorm中表名自动加s使用复数问题处理
date: 2023-09-26
category:
  - gorm
tag:
  - 问题分析
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
pageInfo: ["Author","Date","ReadingTime","Word","Category","Tag"]

---

## 在gorm配置文件中添加单数表名配置项

```golang
	db, err := gorm.Open(mysql.New(mysql.Config{
		DSN: config.Conf.MySQL.UserName+":"+config.Conf.MySQL.Password+"@tcp("+config.Conf.MySQL.Address+")/"+config.Conf.MySQL.DBName+"?charset=utf8&parseTime=True&loc=Local", // DSN data source name
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true, // 使用单数表名
		},
	})
```