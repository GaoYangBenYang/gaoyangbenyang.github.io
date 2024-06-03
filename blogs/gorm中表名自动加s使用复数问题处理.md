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