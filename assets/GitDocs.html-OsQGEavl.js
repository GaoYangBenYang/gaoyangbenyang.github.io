import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as d}from"./app-HYQOxGkP.js";const a={},s=d(`<h2 id="_1-git简介" tabindex="-1"><a class="header-anchor" href="#_1-git简介" aria-hidden="true">#</a> 1.Git简介</h2><h2 id="_2-git结构及基础命令" tabindex="-1"><a class="header-anchor" href="#_2-git结构及基础命令" aria-hidden="true">#</a> 2.Git结构及基础命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>工作区（写代码）
== git add ==&gt; 暂存区（临时存储）
== git commit ==&gt; 本地区（历史版本） 
== git push ==&gt; 远程库（代码托管、本地维护）
== git clone ==&gt; 克隆远程库到本地 
== git pull ==》 拉取远程库到本地
== git fork ==》复制远程库
== git pull request ==&gt; 提交拉取请求给远程库 
== git merge ==&gt; 提交合并请求，审核通过进行合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-代码托管中心" tabindex="-1"><a class="header-anchor" href="#_3-代码托管中心" aria-hidden="true">#</a> 3.代码托管中心</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>》局域网
》》GitLab服务器

》外网
》》GitHub
》》码云
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-本地库初始化" tabindex="-1"><a class="header-anchor" href="#_4-本地库初始化" aria-hidden="true">#</a> 4.本地库初始化</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git init
效果：生成.git目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-设置签名" tabindex="-1"><a class="header-anchor" href="#_5-设置签名" aria-hidden="true">#</a> 5.设置签名</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>用户名：gy
Email地址: 111111111@qq.com 
项目级别/仓库级别：仅仅在当前本地范围内有效
	git config user.name &quot;xxx&quot;
	git config user.email &quot;xxx@qq.com&quot;
系统用户级别： 登录当前操作系统的作用范围
    git config user.name --global &quot;xxx&quot;
	git config user.email --global &quot;xxx@qq.com&quot;
优先级别：就近原则：项目级别优先于系统级别（必须两者其一）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-查看工作区、暂存区状态" tabindex="-1"><a class="header-anchor" href="#_6-查看工作区、暂存区状态" aria-hidden="true">#</a> 6.查看工作区、暂存区状态</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-将工作区的-新建-修改-添加到暂存区" tabindex="-1"><a class="header-anchor" href="#_7-将工作区的-新建-修改-添加到暂存区" aria-hidden="true">#</a> 7.将工作区的“新建/修改”添加到暂存区</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令: git add &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-将提交至暂存区的代码回退到工作区" tabindex="-1"><a class="header-anchor" href="#_8-将提交至暂存区的代码回退到工作区" aria-hidden="true">#</a> 8.将提交至暂存区的代码回退到工作区</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git rm --cached &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_9-暂存区的内容提交至本地库" tabindex="-1"><a class="header-anchor" href="#_9-暂存区的内容提交至本地库" aria-hidden="true">#</a> 9.暂存区的内容提交至本地库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git commit &lt;file&gt;
####填写提交信息#######
i
xxxxxxxx
:wq
###########

or

命令：git commit -m &quot;提交信息&quot; &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-提交本地库后修改文件后进行撤销操作" tabindex="-1"><a class="header-anchor" href="#_10-提交本地库后修改文件后进行撤销操作" aria-hidden="true">#</a> 10.提交本地库后修改文件后进行撤销操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git restore &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-修改文件后的提交操作" tabindex="-1"><a class="header-anchor" href="#_11-修改文件后的提交操作" aria-hidden="true">#</a> 11.修改文件后的提交操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git add  &lt;file&gt;  and/or  git commit &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_12-查看历史记录操作" tabindex="-1"><a class="header-anchor" href="#_12-查看历史记录操作" aria-hidden="true">#</a> 12.查看历史记录操作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>完整：
命令：git log
多屏显示：空格向下翻页 b向上翻页 q退出

简洁：
命令：git log --pretty=oneline

命令：git log --oneline
只显示当前版本后的记录操作

命令：git log reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-前进后退版本" tabindex="-1"><a class="header-anchor" href="#_13-前进后退版本" aria-hidden="true">#</a> 13.前进后退版本 -------------------</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>基于索引值操作
git reset --hard [局部索引值]

使用^符号,只能后退（一个^符号表示退一步）
后退一步： git reset --hard HEAD^
后退二步： git reset --hard HEAD^^

使用~符号，只能后退（补上^符号的缺陷）
后退N步： git reset --hard HEAD~N
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-reset命令的三个参数" tabindex="-1"><a class="header-anchor" href="#_14-reset命令的三个参数" aria-hidden="true">#</a> 14.reset命令的三个参数</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>--soft 
仅仅在本地库移动HEAD指针

--mixed
在本地库移动HEAD指针
重置暂存区

--hard
在本地库中移动HEAD指针
重置暂存区
重置工作区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-删除文件并找回" tabindex="-1"><a class="header-anchor" href="#_15-删除文件并找回" aria-hidden="true">#</a> 15.删除文件并找回</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前提：删除前，文件存在时的状态提交到本地库
操作：git reset --hard [指针位置]
    删除操作已经提交到本地库：指针位置指向历史记录
    删除操作尚未提交到本地库：指针位置使用HEAD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-比较文件差异" tabindex="-1"><a class="header-anchor" href="#_16-比较文件差异" aria-hidden="true">#</a> 16.比较文件差异</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git diff HEAD [文件名]
    将工作区中的文件与暂存区进行比较
        
git diff HEAD [本地库中的历史版本][文件名]
    将工作区的文件和本地库历史记录进行比较

git diff HEAD
    比较多个文件 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_17-查看分支" tabindex="-1"><a class="header-anchor" href="#_17-查看分支" aria-hidden="true">#</a> 17.查看分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git branch -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_18-创建分支" tabindex="-1"><a class="header-anchor" href="#_18-创建分支" aria-hidden="true">#</a> 18.创建分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git branch &lt;分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_19-切换分支" tabindex="-1"><a class="header-anchor" href="#_19-切换分支" aria-hidden="true">#</a> 19.切换分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git checkout &lt;分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_20-合并分支" tabindex="-1"><a class="header-anchor" href="#_20-合并分支" aria-hidden="true">#</a> 20.合并分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git merge hot_fix
**必须先切换到要合并的分支上面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_21-仓库地址备忘录查看" tabindex="-1"><a class="header-anchor" href="#_21-仓库地址备忘录查看" aria-hidden="true">#</a> 21.仓库地址备忘录查看</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git remote -v
添加：git remote add origin xxxxxxxxxxxxxx
                    《别名》《地址》
删除：git remote remove origin xxxxxxxxxxxxxx
                        《别名》《地址》
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-推送远程库" tabindex="-1"><a class="header-anchor" href="#_22-推送远程库" aria-hidden="true">#</a> 22.推送远程库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>命令：git push origin master

        **报错：fatal: unable to access &#39;https://github.com/gaoyang0514/JavaBase.git/&#39;: OpenSSL SSL_read: Connection was aborted, errno 10053
        **原因：服务器的SSL证书没有经过第三方机构的签署
        **解决方式：全局使用 
            git config --global http.sslVerify &quot;false&quot; 
            git config --global https.sslVerify &quot;false&quot; 
            命令，然后在cd到对应目录push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_23-远程库拉取" tabindex="-1"><a class="header-anchor" href="#_23-远程库拉取" aria-hidden="true">#</a> 23.远程库拉取</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pull = fetch + merge
            
抓取：不更改本地，可以先进行查看，确定后再merge    
命令：git fetch origin master
                &lt;远程地址别名&gt; &lt;远程分支名&gt;	

合并：更改本地
命令：git merge origin/master
                &lt;远程地址别名&gt;/&lt;远程分支名&gt;	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_24-解决冲突" tabindex="-1"><a class="header-anchor" href="#_24-解决冲突" aria-hidden="true">#</a> 24.解决冲突</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>注意：如果不是基于GitHub远程库的最新版所做的修改，不能推送，必须先拉取。
     如果拉取下来后如果进去冲突状态，则按照“分支冲突解决”，操作解决即可。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_25-跨团队协作" tabindex="-1"><a class="header-anchor" href="#_25-跨团队协作" aria-hidden="true">#</a> 25.跨团队协作</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>复制远程库：
命令：git fork 

申请合并远程库
命令：git pull request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_26-github-dns" tabindex="-1"><a class="header-anchor" href="#_26-github-dns" aria-hidden="true">#</a> 26.Github DNS</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#GitHub:
140.82.112.3 github.com
140.82.112.4 github.com
140.82.113.3 github.com
140.82.113.4 github.com
140.82.114.3 github.com
140.82.114.4 github.com

140.82.112.25 alive.github.com
140.82.112.26 alive.github.com
140.82.113.25 alive.github.com
140.82.113.26 alive.github.com
140.82.114.25 alive.github.com
140.82.114.26 alive.github.com

140.82.112.5 api.github.com
140.82.112.6 api.github.com
140.82.113.5 api.github.com
140.82.113.6 api.github.com
140.82.114.5 api.github.com
140.82.114.6 api.github.com


140.82.112.21 collector.github.com
140.82.112.22 collector.github.com
140.82.113.21 collector.github.com
140.82.113.22 collector.github.com
140.82.114.21 collector.github.com
140.82.114.22 collector.github.com


140.82.112.3 gist.github.com
140.82.112.4 gist.github.com
140.82.113.3 gist.github.com
140.82.113.4 gist.github.com
140.82.114.3 gist.github.com
140.82.114.4 gist.github.com

185.199.108.154 github.githubassets.com
185.199.109.154 github.githubassets.com
185.199.110.154 github.githubassets.com
185.199.111.154 github.githubassets.com

185.199.108.133 github.Githubusercontent.com
185.199.109.133 github.Githubusercontent.com
185.199.110.133 github.Githubusercontent.com
185.199.111.133 github.Githubusercontent.com

185.199.108.133 raw.githubusercontent.com
185.199.109.133 raw.githubusercontent.com
185.199.110.133 raw.githubusercontent.com
185.199.111.133 raw.githubusercontent.com

185.199.108.133 avatars.githubusercontent.com
185.199.109.133 avatars.githubusercontent.com
185.199.110.133 avatars.githubusercontent.com
185.199.111.133 avatars.githubusercontent.com

185.199.108.133 user-images.githubusercontent.com
185.199.109.133 user-images.githubusercontent.com
185.199.110.133 user-images.githubusercontent.com
185.199.111.133 user-images.githubusercontent.com

185.199.108.133 camo.githubusercontent.com
185.199.109.133 camo.githubusercontent.com
185.199.110.133 camo.githubusercontent.com
185.199.111.133 camo.githubusercontent.com

185.199.108.133 objects.githubusercontent.com
185.199.109.133 objects.githubusercontent.com
185.199.110.133 objects.githubusercontent.com
185.199.111.133 objects.githubusercontent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),l=[s];function t(r,c){return i(),n("div",null,l)}const m=e(a,[["render",t],["__file","GitDocs.html.vue"]]);export{m as default};
