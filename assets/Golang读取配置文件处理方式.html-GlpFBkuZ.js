import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as i,a}from"./app-LgBlSZ3f.js";const e={},l=a(`<h2 id="使用yaml-v2进行配置文件读取-只能读取yml" tabindex="-1"><a class="header-anchor" href="#使用yaml-v2进行配置文件读取-只能读取yml" aria-hidden="true">#</a> 使用yaml.v2进行配置文件读取(只能读取yml)</h2><h3 id="yaml配置文件" tabindex="-1"><a class="header-anchor" href="#yaml配置文件" aria-hidden="true">#</a> yaml配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Application</span><span class="token punctuation">:</span>
  <span class="token key atrule">Name</span><span class="token punctuation">:</span> OpenIDProvider
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">8000</span>


<span class="token key atrule">MySQL</span><span class="token punctuation">:</span>
  <span class="token key atrule">root</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> codefixer

<span class="token key atrule">Redis</span><span class="token punctuation">:</span>
  <span class="token key atrule">Address</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用yaml-v2读取配置文件" tabindex="-1"><a class="header-anchor" href="#使用yaml-v2读取配置文件" aria-hidden="true">#</a> 使用yaml.v2读取配置文件</h3><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>package config

import (
	&quot;io/ioutil&quot;
	&quot;log&quot;

	&quot;gopkg.in/yaml.v2&quot;
)

func init() {
	yamlFile, err := ioutil.ReadFile(&quot;./config/config.yml&quot;)
	if err != nil {
		log.Println(err.Error())
	}
	err = yaml.Unmarshal(yamlFile, &amp;Conf)
	if err != nil {
		log.Println(err.Error())
	}
}

//全局配置文件
var Conf *Config

type Config struct {
	Application Application \`yaml:&quot;Application&quot;\`
	MySQL MySQL \`yaml:&quot;MySQL&quot;\`
	Redis Redis \`yaml:&quot;Redis&quot;\`
	Kafka interface{} \`yaml:&quot;Kafka&quot;\`
	Log interface{} \`yaml:&quot;Log&quot;\`
	OpenIDProvider interface{} \`yaml:&quot;OpenIDProvider&quot;\`
}

type Application struct {
	Name string \`yaml:&quot;Name&quot;\`
	Host string \`yaml:&quot;Host&quot;\`
	Port string \`yaml:&quot;Port&quot;\`
}

type MySQL struct {
	Root string \`yaml:&quot;root&quot;\`
	Password string \`yaml:&quot;password&quot;\`
	DBName string \`yaml:&quot;DBName&quot;\`
}

type Redis struct {
	Address string \`yaml:&quot;Address&quot;\`
	Password string \`yaml:&quot;Password&quot;\`
	DBName int \`yaml:&quot;DBName&quot;\`
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用viper读取配置文件-能从json、toml、yaml、hcl、ini和java-properties文件中读取配置数据" tabindex="-1"><a class="header-anchor" href="#使用viper读取配置文件-能从json、toml、yaml、hcl、ini和java-properties文件中读取配置数据" aria-hidden="true">#</a> 使用Viper读取配置文件(能从JSON、TOML、YAML、HCL、INI和Java properties文件中读取配置数据)</h2><h3 id="yaml配置文件-1" tabindex="-1"><a class="header-anchor" href="#yaml配置文件-1" aria-hidden="true">#</a> yaml配置文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">Application</span><span class="token punctuation">:</span>
  <span class="token key atrule">Name</span><span class="token punctuation">:</span> OpenIDProvider
  <span class="token key atrule">Host</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">Port</span><span class="token punctuation">:</span> <span class="token number">8000</span>


<span class="token key atrule">MySQL</span><span class="token punctuation">:</span>
  <span class="token key atrule">root</span><span class="token punctuation">:</span> root
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">123456</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> codefixer

<span class="token key atrule">Redis</span><span class="token punctuation">:</span>
  <span class="token key atrule">Address</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">6379</span>
  <span class="token key atrule">Password</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">DBName</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用yaml-v2读取配置文件-1" tabindex="-1"><a class="header-anchor" href="#使用yaml-v2读取配置文件-1" aria-hidden="true">#</a> 使用yaml.v2读取配置文件</h3><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>package config

import (
	&quot;io/ioutil&quot;
	&quot;log&quot;

	&quot;github.com/spf13/viper&quot;
)

func init() {
	viper.SetConfigType(&quot;yaml&quot;)
	viper.SetConfigFile(&quot;./config/config.yml&quot;)

	err := viper.ReadInConfig()
	if err != nil {
		fmt.Println(err.Error())
	}
	err = viper.Unmarshal(&amp;Conf)
	if err != nil {
		fmt.Println(err.Error())
	}
}

//全局配置文件
var Conf *Config

type Config struct {
	Application Application \`yaml:&quot;Application&quot;\`
	MySQL MySQL \`yaml:&quot;MySQL&quot;\`
	Redis Redis \`yaml:&quot;Redis&quot;\`
	Kafka interface{} \`yaml:&quot;Kafka&quot;\`
	Log interface{} \`yaml:&quot;Log&quot;\`
	OpenIDProvider interface{} \`yaml:&quot;OpenIDProvider&quot;\`
}

type Application struct {
	Name string \`yaml:&quot;Name&quot;\`
	Host string \`yaml:&quot;Host&quot;\`
	Port string \`yaml:&quot;Port&quot;\`
}

type MySQL struct {
	Root string \`yaml:&quot;root&quot;\`
	Password string \`yaml:&quot;password&quot;\`
	DBName string \`yaml:&quot;DBName&quot;\`
}

type Redis struct {
	Address string \`yaml:&quot;Address&quot;\`
	Password string \`yaml:&quot;Password&quot;\`
	DBName int \`yaml:&quot;DBName&quot;\`
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[l];function d(r,u){return s(),i("div",null,t)}const v=n(e,[["render",d],["__file","Golang读取配置文件处理方式.html.vue"]]);export{v as default};
