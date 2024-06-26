## 使用yaml.v2进行配置文件读取(只能读取yml)

### yaml配置文件

```yml
Application:
  Name: OpenIDProvider
  Host: localhost
  Port: 8000


MySQL:
  root: root
  password: 123456
  DBName: codefixer

Redis:
  Address: localhost:6379
  Password: ""
  DBName: 0
```

### 使用yaml.v2读取配置文件

```golang
package config

import (
	"io/ioutil"
	"log"

	"gopkg.in/yaml.v2"
)

func init() {
	yamlFile, err := ioutil.ReadFile("./config/config.yml")
	if err != nil {
		log.Println(err.Error())
	}
	err = yaml.Unmarshal(yamlFile, &Conf)
	if err != nil {
		log.Println(err.Error())
	}
}

//全局配置文件
var Conf *Config

type Config struct {
	Application Application `yaml:"Application"`
	MySQL MySQL `yaml:"MySQL"`
	Redis Redis `yaml:"Redis"`
	Kafka interface{} `yaml:"Kafka"`
	Log interface{} `yaml:"Log"`
	OpenIDProvider interface{} `yaml:"OpenIDProvider"`
}

type Application struct {
	Name string `yaml:"Name"`
	Host string `yaml:"Host"`
	Port string `yaml:"Port"`
}

type MySQL struct {
	Root string `yaml:"root"`
	Password string `yaml:"password"`
	DBName string `yaml:"DBName"`
}

type Redis struct {
	Address string `yaml:"Address"`
	Password string `yaml:"Password"`
	DBName int `yaml:"DBName"`
}

```

## 使用Viper读取配置文件(能从JSON、TOML、YAML、HCL、INI和Java properties文件中读取配置数据)

### yaml配置文件

```yml
Application:
  Name: OpenIDProvider
  Host: localhost
  Port: 8000


MySQL:
  root: root
  password: 123456
  DBName: codefixer

Redis:
  Address: localhost:6379
  Password: ""
  DBName: 0
```

### 使用yaml.v2读取配置文件

```golang
package config

import (
	"io/ioutil"
	"log"

	"github.com/spf13/viper"
)

func init() {
	viper.SetConfigType("yaml")
	viper.SetConfigFile("./config/config.yml")

	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println(err.Error())
	}
	err = viper.Unmarshal(&Conf)
	if err != nil {
		fmt.Println(err.Error())
	}
}

//全局配置文件
var Conf *Config

type Config struct {
	Application Application `yaml:"Application"`
	MySQL MySQL `yaml:"MySQL"`
	Redis Redis `yaml:"Redis"`
	Kafka interface{} `yaml:"Kafka"`
	Log interface{} `yaml:"Log"`
	OpenIDProvider interface{} `yaml:"OpenIDProvider"`
}

type Application struct {
	Name string `yaml:"Name"`
	Host string `yaml:"Host"`
	Port string `yaml:"Port"`
}

type MySQL struct {
	Root string `yaml:"root"`
	Password string `yaml:"password"`
	DBName string `yaml:"DBName"`
}

type Redis struct {
	Address string `yaml:"Address"`
	Password string `yaml:"Password"`
	DBName int `yaml:"DBName"`
}
```
