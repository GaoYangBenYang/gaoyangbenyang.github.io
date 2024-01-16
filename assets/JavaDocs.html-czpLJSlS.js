import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-Pua7-NH6.js";const e={},p=t(`<h2 id="_1-java简介" tabindex="-1"><a class="header-anchor" href="#_1-java简介" aria-hidden="true">#</a> 1. Java简介</h2><h2 id="java-swing-jfilechooser-文件选择器" tabindex="-1"><a class="header-anchor" href="#java-swing-jfilechooser-文件选择器" aria-hidden="true">#</a> *. Java Swing JFileChooser(文件选择器)</h2><h3 id="_1-常用api" tabindex="-1"><a class="header-anchor" href="#_1-常用api" aria-hidden="true">#</a> *.1 常用API</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 实例化</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打开确认按钮文本是“打开”的文件选择器</span>
fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//打开确认按钮文本是“保存”的文件选择器</span>
fileChooser<span class="token punctuation">.</span><span class="token function">showSaveDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 拿到文件系统</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置过滤器</span>
<span class="token class-name">FileNameExtensionFilter</span> fileNameExtensionFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileNameExtensionFilter</span><span class="token punctuation">(</span><span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;txt&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;exe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 修改为英文 </span>
<span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token function">setDefaultLocale</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置当前工作目录为桌面</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setCurrentDirectory</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置标头</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setDialogTitle</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置文件选择类型</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileSelectionMode</span><span class="token punctuation">(</span><span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">FILES_AND_DIRECTORIES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置多文件选择模式</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setMultiSelectionEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 移除所有文件过滤模式</span>
fileChooser<span class="token punctuation">.</span><span class="token function">removeChoosableFileFilter</span><span class="token punctuation">(</span>fileChooser<span class="token punctuation">.</span><span class="token function">getAcceptAllFileFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 添加文件过滤</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileFilter</span><span class="token punctuation">(</span>fileNameExtensionFilter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 拿到操作结果</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 判断操作结果</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">APPROVE_OPTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 打印所选文件路径</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;path: &quot;</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>fileChooser<span class="token punctuation">.</span><span class="token function">getSelectedFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-设置默认打开的路径为桌面" tabindex="-1"><a class="header-anchor" href="#_2-设置默认打开的路径为桌面" aria-hidden="true">#</a> *.2 设置默认打开的路径为桌面</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * JFileChooser fileChooser = new JFileChooser()，这个括号里面是可以传路径参数的
 */</span>
<span class="token comment">//直接传参</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span>fsv<span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//间接参数</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setCurrentDirectory</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-拿到选择的文件路径" tabindex="-1"><a class="header-anchor" href="#_3-拿到选择的文件路径" aria-hidden="true">#</a> *.3 拿到选择的文件路径</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * JFileChooser 的返回值，代表着不同的状态，例如：用户点了取消按钮或者打开/保存。
 * 所以比较返回值即可，加入下面这两行，即可拿到当前状态：
 * int result = fileChooser.showOpenDialog(null);
 * if(result == JFileChooser.APPROVE_OPTION)
 * 加入下面这一行，即可拿到路径：
 * fileChooser.getSelectedFile().getAbsolutePath()
 */</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">APPROVE_OPTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;path: &quot;</span> <span class="token operator">+</span> fileChooser<span class="token punctuation">.</span><span class="token function">getSelectedFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-如何选择文件夹" tabindex="-1"><a class="header-anchor" href="#_4-如何选择文件夹" aria-hidden="true">#</a> *.4 如何选择文件夹</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * fileChooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
 * 上面这行是JFileChooser 的选择类型样例：它的选择类型有基本的三种：文件、文件夹、文件和文件夹。
 */</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileSelectionMode</span><span class="token punctuation">(</span><span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">DIRECTORIES_ONLY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">APPROVE_OPTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;path: &quot;</span> <span class="token operator">+</span> fileChooser<span class="token punctuation">.</span><span class="token function">getSelectedFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-如何过滤文件" tabindex="-1"><a class="header-anchor" href="#_5-如何过滤文件" aria-hidden="true">#</a> *.5 如何过滤文件</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 写一个过滤器
 * FileNameExtensionFilter fileFilter = new FileNameExtensionFilter (“exe file”,“exe”);
 * 添加这个过滤器
 * fileChooser.setFileFilter(fileFilter);
 */</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileSelectionMode</span><span class="token punctuation">(</span><span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">FILES_ONLY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileNameExtensionFilter</span>  fileFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileNameExtensionFilter</span> <span class="token punctuation">(</span><span class="token string">&quot;*.png&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileFilter</span><span class="token punctuation">(</span>fileFilter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">APPROVE_OPTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;path: &quot;</span> <span class="token operator">+</span> fileChooser<span class="token punctuation">.</span><span class="token function">getSelectedFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-如何将页面修改为英文" tabindex="-1"><a class="header-anchor" href="#_6-如何将页面修改为英文" aria-hidden="true">#</a> *.6 如何将页面修改为英文</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * JFileChooser.setDefaultLocale(Locale.US);
 */</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token function">setDefaultLocale</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileSelectionMode</span><span class="token punctuation">(</span><span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">FILES_ONLY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">FileNameExtensionFilter</span>  fileFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileNameExtensionFilter</span> <span class="token punctuation">(</span><span class="token string">&quot;*.png&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileFilter</span><span class="token punctuation">(</span>fileFilter<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">APPROVE_OPTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;path: &quot;</span> <span class="token operator">+</span> fileChooser<span class="token punctuation">.</span><span class="token function">getSelectedFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAbsolutePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-如何选择多个文件" tabindex="-1"><a class="header-anchor" href="#_7-如何选择多个文件" aria-hidden="true">#</a> *.7 如何选择多个文件</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * fileChooser.setMultiSelectionEnabled(true);
 */</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token function">setDefaultLocale</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setFileSelectionMode</span><span class="token punctuation">(</span><span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">FILES_ONLY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setMultiSelectionEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">APPROVE_OPTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;path: &quot;</span> <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>fileChooser<span class="token punctuation">.</span><span class="token function">getSelectedFiles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-如何去掉所有文件选项" tabindex="-1"><a class="header-anchor" href="#_8-如何去掉所有文件选项" aria-hidden="true">#</a> *.8 如何去掉所有文件选项</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * fileChooser.removeChoosableFileFilter(fileChooser.getAcceptAllFileFilter());
 */</span>
<span class="token class-name">FileSystemView</span> fsv <span class="token operator">=</span> <span class="token class-name">FileSystemView</span><span class="token punctuation">.</span><span class="token function">getFileSystemView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token function">setDefaultLocale</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token constant">US</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JFileChooser</span> fileChooser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">removeChoosableFileFilter</span><span class="token punctuation">(</span>fileChooser<span class="token punctuation">.</span><span class="token function">getAcceptAllFileFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
fileChooser<span class="token punctuation">.</span><span class="token function">setCurrentDirectory</span><span class="token punctuation">(</span>fsv<span class="token punctuation">.</span><span class="token function">getHomeDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> result <span class="token operator">=</span> fileChooser<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">==</span> <span class="token class-name">JFileChooser</span><span class="token punctuation">.</span><span class="token constant">APPROVE_OPTION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;path: &quot;</span> <span class="token operator">+</span> fileChooser<span class="token punctuation">.</span><span class="token function">getSelectedFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jdk21" tabindex="-1"><a class="header-anchor" href="#jdk21" aria-hidden="true">#</a> *. JDK21</h2><h3 id="_1-虚拟线程" tabindex="-1"><a class="header-anchor" href="#_1-虚拟线程" aria-hidden="true">#</a> *.1 虚拟线程</h3>`,20),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","JavaDocs.html.vue"]]);export{r as default};
