import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,e}from"./app-ZYtVDEki.js";const i={},l=e(`<h2 id="_1-docker简介" tabindex="-1"><a class="header-anchor" href="#_1-docker简介" aria-hidden="true">#</a> 1. Docker简介</h2><h2 id="docker-开启远程tcp连接" tabindex="-1"><a class="header-anchor" href="#docker-开启远程tcp连接" aria-hidden="true">#</a> * Docker 开启远程TCP连接</h2><h3 id="_1-修改docker-service配置文件" tabindex="-1"><a class="header-anchor" href="#_1-修改docker-service配置文件" aria-hidden="true">#</a> *.1 修改docker.service配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /lib/systemd/system/docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-修改execstart-xxxxxxxxx配置" tabindex="-1"><a class="header-anchor" href="#_2-修改execstart-xxxxxxxxx配置" aria-hidden="true">#</a> *.2 修改ExecStart=xxxxxxxxx配置</h3><blockquote><p>在-H fd:// 后添加-H tcp://0.0.0.0:2375，然后保存退出0.0.0.0 是允许所有IP可访问，2375是默认端口，不是固定的，都可以按需修改</p></blockquote><h3 id="_3-重载配置" tabindex="-1"><a class="header-anchor" href="#_3-重载配置" aria-hidden="true">#</a> *.3 重载配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload          <span class="token comment"># 重新加载守护进程配置</span>
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>			  <span class="token comment"># 重启 docker 服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-连接wsl环境下的docker" tabindex="-1"><a class="header-anchor" href="#_4-连接wsl环境下的docker" aria-hidden="true">#</a> *.4 连接WSL环境下的Docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ip addr看看wsl ip地址</span>
<span class="token comment"># 通过 wsl ip地址：2375进行tcp远程连接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker镜像上传github" tabindex="-1"><a class="header-anchor" href="#docker镜像上传github" aria-hidden="true">#</a> * Docker镜像上传Github</h2><ol><li><p>登录 :</p><p>您可以使用 docker 登录命令，通过 Docker 向 GitHub Packages 验证。</p><p>为确保凭据安全，建议将个人访问令牌保存在您计算机上的本地文件中，然后使用 Docker 的 --password-stdin 标志从本地文件读取您的令牌。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>token<span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token function">docker</span> login ghcr.io <span class="token parameter variable">-u</span> <span class="token punctuation">[</span>GithubName<span class="token punctuation">]</span> --password-stdin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>上传镜像:</p><p>1.准备镜像(最后面有个.)将 OWNER 替换为拥有仓库的用户或组织帐户的名称(使用小 写)，将 REPOSITORY 替换为包含项目的仓库的名称，将 IMAGE_NAME 替换为包或映像的名称，将 VERSION 替换为构建时的包版本。 而 VERSION 使用构建时的软件包版本。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> ghcr.io/OWNER/REPOSITORY<span class="token punctuation">(</span>可不写<span class="token punctuation">)</span>/IMAGE_NAME:VERSION <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.使用 docker images 确定 docker 映像的名称和 ID。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.使用 Docker 映像 ID 标记 docker 映像.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> tag IMAGE_ID:VERSION ghcr.io/OWNER/REPOSITORY<span class="token punctuation">(</span>可不写<span class="token punctuation">)</span>/IMAGE_NAME:VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.上传</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> push ghcr.io/OWNER/REPOSITORY<span class="token punctuation">(</span>可不写<span class="token punctuation">)</span>/IMAGE_NAME:VERSION
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>下载镜像:</p><p>您可以使用 docker pull 命令从 GitHub Packages 安装 Docker 映像，将 OWNER 替换为拥有仓库的 用户或组织帐户的名称，将 REPOSITORY 替换为包含项目的仓库的名称，将 IMAGE_NAME 替换为包或映 像的名称，并将 TAG_NAME 替换为要安装的映像的标记。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull ghcr.io/OWNER/REPOSITORY<span class="token punctuation">(</span>可不写<span class="token punctuation">)</span>/IMAGE_NAME:TAG_NAME 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="docker-配置本地开发环境" tabindex="-1"><a class="header-anchor" href="#docker-配置本地开发环境" aria-hidden="true">#</a> * Docker 配置本地开发环境</h2><h3 id="_1-mysql" tabindex="-1"><a class="header-anchor" href="#_1-mysql" aria-hidden="true">#</a> *.1 MySQL</h3><ol><li>拉取官方镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull mysql       <span class="token comment"># 拉取最新版mysql镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建主机挂载文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录 -p 递归创建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/gaoyang/docker/mysql/<span class="token punctuation">{</span>conf,logs,data<span class="token punctuation">}</span>
<span class="token comment"># 创建文件</span>
<span class="token function">touch</span> /home/gaoyang/docker/mysql/conf/my.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token comment">#指定端口映射，格式为：主机(宿主)端口:容器端口</span>
<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
<span class="token comment">#为容器指定一个名称</span>
<span class="token parameter variable">--name</span> mysql <span class="token punctuation">\\</span>
<span class="token comment">#设置环境变量 root账户密码</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token comment">#将配置文件夹挂载到主机</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/mysql/conf/my.cnf:/etc/mysql/my.cnf <span class="token punctuation">\\</span>
<span class="token comment">#将日志文件夹挂载到主机</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/mysql/logs:/var/log/mysql <span class="token punctuation">\\</span>
<span class="token comment">#将mysql储存文件夹挂载到主机</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/mysql/data:/var/lib/mysql <span class="token punctuation">\\</span>
<span class="token comment">#后台运行容器，并返回容器ID</span>
<span class="token parameter variable">-d</span> mysql:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>检查容器是否正确运行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-redis" tabindex="-1"><a class="header-anchor" href="#_2-redis" aria-hidden="true">#</a> *.2 Redis</h3><ol><li>拉取官方镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis       <span class="token comment"># 拉取最新版redis镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建主机挂载文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录 -p 递归创建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/gaoyang/docker/redis/<span class="token punctuation">{</span>conf,data<span class="token punctuation">}</span>
<span class="token comment"># 创建文件</span>
<span class="token function">touch</span> /home/gaoyang/docker/redis/conf/redis.cnf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> redis <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/redis/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>检查容器是否正确运行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-rabbitmq" tabindex="-1"><a class="header-anchor" href="#_3-rabbitmq" aria-hidden="true">#</a> *.3 RabbitMQ</h3><ol><li>拉取官方镜像(包含web控制界面的)</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull rabbitmq:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建主机挂载文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录 -p 递归创建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/gaoyang/docker/rabbitmq/<span class="token punctuation">{</span>data,conf,log<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改log目录权限</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> /home/gaoyang/docker/rabbitmq/log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>创建容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> rabbitmq <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>admin <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span>admin <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/rabbitmq/data:/var/lib/rabbitmq <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/rabbitmq/conf:/etc/rabbitmq <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/rabbitmq/log:/var/log/rabbitmq <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> rabbitmq:3.9.29-management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>开启web控制台</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> rabbitmq <span class="token function">bash</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>检查容器是否正确运行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-nacos" tabindex="-1"><a class="header-anchor" href="#_4-nacos" aria-hidden="true">#</a> *.4 Nacos</h3><ol><li>拉取官方镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull nacos/nacos-server       <span class="token comment">#拉取最新版镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建主机挂载文件（开发环境可不挂载）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建目录 -p 递归创建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/gaoyang/docker/nacos/<span class="token punctuation">{</span>conf,logs<span class="token punctuation">}</span>
<span class="token comment">#创建文件</span>
<span class="token function">touch</span> /home/gaoyang/docker/nacos/conf/application.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建容器,2.x版本后增加了 grpc 通信并且增加nacos的集群端口上下偏移1000，创建容器时除了 8848 还需要把 9848 也暴露出来</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> nacos <span class="token punctuation">\\</span>
<span class="token comment">#Jraft请求服务端端口，用于处理服务端间的Raft相关请求</span>
<span class="token comment">#-p 7848:7848</span>
<span class="token comment">#主端口，客户端、控制台及OpenAPI所使用的HTTP端口</span>
<span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token punctuation">\\</span>
<span class="token comment">#客户端gRPC请求服务端端口，用于客户端向服务端发起连接和请求</span>
<span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token punctuation">\\</span>
<span class="token comment">#服务端gRPC请求服务端端口，用于服务间同步等</span>
<span class="token comment">#-p 9849:9849</span>
<span class="token comment">#9849 和 7848 端口为服务端之间的通信端口，请勿暴露到外部网络环境和客户端测</span>
<span class="token comment">#-e SPRING_DATASOURCE_PLATFORM=mysql </span>
<span class="token comment">#-e MYSQL_SERVICE_HOST=localhost </span>
<span class="token comment">#-e MYSQL_SERVICE_PORT=3306 </span>
<span class="token comment">#-e MYSQL_SERVICE_USER=root </span>
<span class="token comment">#-e MYSQL_SERVICE_PASSWORD=123456 </span>
<span class="token comment">#-e MYSQL_SERVICE_DB_NAME=nacos </span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">JVM_XMS</span><span class="token operator">=</span>256m <span class="token punctuation">\\</span>  <span class="token comment">#jvm启动时分配的内存</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">JVM_XMX</span><span class="token operator">=</span>256m <span class="token punctuation">\\</span>  <span class="token comment">#为jvm运行过程中分配的最大内存</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token punctuation">\\</span>  <span class="token comment">#单机模式</span>
<span class="token comment">#一下四个环境变量使用鉴权必须都配置</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_CACHE_ENABLE</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>  <span class="token comment">#开启权限系统</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_IDENTITY_KEY</span><span class="token operator">=</span>admin <span class="token punctuation">\\</span>    <span class="token comment">#不配置nacos报错  配置了不生效 账号还是nacos(真离谱)</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_IDENTITY_VALUE</span><span class="token operator">=</span>admin <span class="token punctuation">\\</span>  <span class="token comment">#不配置nacos报错  配置了不生效 密码还是nacos(真离谱)</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_TOKEN</span><span class="token operator">=</span>SecretKey012345678901234567890123456789012345678901234567890123456789 <span class="token punctuation">\\</span>
<span class="token comment">#-v /home/gaoyang/docker/nacos/logs:/home/nacos/logs</span>
<span class="token parameter variable">-d</span> nacos/nacos-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> nacos <span class="token parameter variable">-p</span> <span class="token number">8848</span>:8848 <span class="token parameter variable">-p</span> <span class="token number">9848</span>:9848 <span class="token parameter variable">-e</span> <span class="token assign-left variable">JVM_XMS</span><span class="token operator">=</span>256m <span class="token parameter variable">-e</span> <span class="token assign-left variable">JVM_XMX</span><span class="token operator">=</span>256m <span class="token parameter variable">-e</span> <span class="token assign-left variable">MODE</span><span class="token operator">=</span>standalone <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_CACHE_ENABLE</span><span class="token operator">=</span>true <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_IDENTITY_KEY</span><span class="token operator">=</span>admin <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_IDENTITY_VALUE</span><span class="token operator">=</span>admin <span class="token parameter variable">-e</span> <span class="token assign-left variable">NACOS_AUTH_TOKEN</span><span class="token operator">=</span>SecretKey012345678901234567890123456789012345678901234567890123456789 <span class="token parameter variable">-d</span> nacos/nacos-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>进入nacos容器，进入conf目录</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nacos <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> conf/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>修改配置文件</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">nacos.core.auth.enabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>重启nacos容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart nacos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>检查容器是否正确运行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-sentinel" tabindex="-1"><a class="header-anchor" href="#_5-sentinel" aria-hidden="true">#</a> *.5 Sentinel</h3><ol><li>拉取官方镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull bladex/sentinel-dashboard <span class="token comment">#拉取最新版镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>创建容器</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> Sentinel <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8719</span>:8719 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">8858</span>:8858 <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> bladex/sentinel-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>检查容器是否正确运行</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-elasticsearch-有问题-待处理" tabindex="-1"><a class="header-anchor" href="#_6-elasticsearch-有问题-待处理" aria-hidden="true">#</a> *.6 Elasticsearch(有问题，待处理)</h3><ol><li><p>Elasticsearch简介</p><p>Elasticsearch是位于Elastic Stack核心的分布式搜索和分析引擎。</p><p>Logstash和Beats有助于收集、聚合和丰富数据，并将其存储在Elasticsearch中。</p><p>Kibana使您能够交互式地探索、可视化和共享对数据的见解，并管理和监视堆栈。</p><p>Elasticsearch是索引、搜索和分析魔术发生的地方。</p><p>Elasticsearch为所有类型的数据提供近乎实时的搜索和分析。无论您是结构化还是非结构化文本、数字数据还是地理空间数据，Elasticsearch都可以以一种支持快速搜索的方式有效地存储和索引它。您可以远远超出简单的数据检索和汇总信息，从而发现数据中的趋势和模式。随着数据和查询量的增长，Elasticsearch的分布式特性使您的部署能够无缝地随之增长。</p><p>虽然不是每个问题都是搜索问题，但Elasticsearch提供了在各种用例中处理数据的速度和灵活性:</p><ul><li>在应用程序或网站中添加搜索框</li><li>存储和分析日志、度量和安全事件数据</li><li>使用机器学习实时自动模拟数据的行为</li><li>使用Elasticsearch作为矢量数据库来创建、存储和搜索矢量嵌入</li><li>使用Elasticsearch作为存储引擎自动化业务工作流</li><li>使用Elasticsearch作为地理信息系统(GIS)管理、整合和分析空间信息</li><li>使用Elasticsearch作为生物信息学研究工具存储和处理遗传数据</li></ul><p>我们不断地被人们使用搜索的新奇方式所震撼。但是，无论您的用例与其中一个类似，还是您正在使用Elasticsearch来解决新问题，您在Elasticsearch中处理数据，文档和索引的方式都是相同的</p></li><li><p>单节点Elasticsearch集群安装</p><ul><li>创建网络<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#保证Kibana容器和Elasticsearch容器在同一网络中实现互联</span>
<span class="token function">docker</span> network create elastic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>下载官方镜像<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull docker.elastic.co/elasticsearch/elasticsearch:8.11.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>创建挂载文件<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录 -p 递归创建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/gaoyang/docker/elasticsearch/<span class="token punctuation">{</span>data,plugins<span class="token punctuation">}</span>
<span class="token comment">#修改权限</span>
<span class="token function">chmod</span> <span class="token number">777</span> /home/gaoyang/docker/elasticsearch/data
<span class="token function">chmod</span> <span class="token number">777</span> /home/gaoyang/docker/elasticsearch/plugins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>启动容器，复制生成的密码和注册令牌，首次启动 Elasticsearch 时，生成的用户密码和 Kibana 注册令牌将输出到终端，记得保存。<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run 
<span class="token parameter variable">--name</span> elasticsearch 
<span class="token parameter variable">--net</span> elastic 
<span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 
<span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 
<span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> 
<span class="token parameter variable">-e</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms512m -Xmx512m&quot;</span>
<span class="token parameter variable">-v</span> /home/gaoyang/docker/elasticsearch/data:/usr/share/elasticsearch/data
<span class="token parameter variable">-v</span> /home/gaoyang/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins
<span class="token parameter variable">-d</span> docker.elastic.co/elasticsearch/elasticsearch:8.11.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>查看容器是否正常运行<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>Kibana(Elastic的用户界面)安装</p><ul><li>下载官方镜像<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull docker.elastic.co/kibana/kibana:8.11.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>创建挂载文件<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建目录 -p 递归创建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/gaoyang/docker/kibana/<span class="token punctuation">{</span>data,config<span class="token punctuation">}</span>
<span class="token comment">#修改权限</span>
<span class="token function">chmod</span> <span class="token number">777</span> /home/gaoyang/docker/kibana/data
<span class="token function">chmod</span> <span class="token number">777</span> /home/gaoyang/docker/kibana/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>启动容器<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run
<span class="token parameter variable">--name</span> kibana 
<span class="token parameter variable">--network</span> elastic
<span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://elasticsearch:9200
<span class="token parameter variable">-v</span> /home/gaoyang/docker/kibana/data:/usr/share/kibana/data
<span class="token parameter variable">-v</span> /home/gaoyang/docker/kibana/plugins:/usr/share/kibana/plugins
<span class="token parameter variable">-d</span> kibana:8.6.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>查看容器是否正常运行<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li><li><p>生成登录kibana的令牌(有问题 第一次能出现 之后就报错)</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> elasticsearch /bin/bash
<span class="token comment"># 关闭安全验证</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;xpack.security.enabled: false&#39;</span> <span class="token operator">&gt;&gt;</span> config/elasticsearch.yml
<span class="token comment">## 开启安全注册</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;xpack.security.enrollment.enabled: true&#39;</span> <span class="token operator">&gt;&gt;</span> config/elasticsearch.yml
<span class="token comment">## 开启transport SSL验证</span>
<span class="token comment">#echo &#39;xpack.security.transport.ssl.enabled: true&#39; &gt;&gt; config/elasticsearch.yml</span>
<span class="token comment">#echo &#39;xpack.security.transport.ssl.verification_mode: certificate&#39; &gt;&gt; config/elasticsearch.yml</span>
<span class="token comment">#echo &#39;xpack.security.transport.ssl.keystore.path: certs/elastic-certificates.p12&#39; &gt;&gt; config/elasticsearch.yml</span>
<span class="token comment">#echo &#39;xpack.security.transport.ssl.truststore.path: certs/elastic-certificates.p12&#39; &gt;&gt; config/elasticsearch.yml</span>
<span class="token comment">## 开启HTTP SSL验证</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;xpack.security.http.ssl.enabled: true&#39;</span> <span class="token operator">&gt;&gt;</span> config/elasticsearch.yml
<span class="token comment">#echo &#39;xpack.security.http.ssl.keystore.path: certs/elastic-certificates.p12&#39; &gt;&gt; config/elasticsearch.yml</span>
<span class="token comment">#echo &#39;xpack.security.http.ssl.truststore.path: certs/elastic-certificates.p12&#39; &gt;&gt; config/elasticsearch.yml</span>
<span class="token comment">#echo &#39;xpack.security.http.ssl.client_authentication: optional&#39; &gt;&gt; config/elasticsearch.yml</span>
<span class="token comment">## 开启PKI 身份验证</span>
<span class="token comment">#echo &#39;xpack.security.authc.realms.pki.pki1.order: 1&#39; &gt;&gt; config/elasticsearch.yml</span>

<span class="token comment"># 生成令牌 令牌有30分钟有效期</span>
bin/elasticsearch-create-enrollment-token <span class="token parameter variable">--scope</span> kibana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.kibana验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入kibana容器中</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> kibana /bin/bash
<span class="token comment"># 执行生成验证码命令</span>
bin/kibana-verification-code 
<span class="token comment"># 获得的验证码输入之前页面中</span>
Your verification code is: <span class="token number">788</span> <span class="token number">373</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>重置密码 登录elasticsearch</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入elastic容器中</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> elasticsearch /bin/bash
<span class="token comment"># 重置密码</span>
bin/elasticsearch-reset-password <span class="token parameter variable">--username</span> elastic <span class="token parameter variable">-i</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75),c=[l];function t(r,o){return s(),n("div",null,c)}const u=a(i,[["render",t],["__file","DockerDocs.html.vue"]]);export{u as default};