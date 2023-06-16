const l=JSON.parse(`{"key":"v-9c59dd60","path":"/Language/Go%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97.html","title":"Go入门指南","lang":"zh-CN","frontmatter":{"title":"Go入门指南","icon":"golang","date":"2023-03-25T00:00:00.000Z","category":["Golang"],"tag":["基础"],"pageInfo":["Author","Date","ReadingTime","Word","Category","Tag"],"prev":"Go入门指南.md","next":"Go常用标准库.md","article":false,"timeline":false,"description":"前言 用更少的代码，更短的编译时间，创建运行更快的程序，享受更多的乐趣 对于学习 Go 编程语言的爱好者来说，这本书无疑是最适合你的一本书籍，这里包含了当前最全面的学习资源。本书通过对官方的在线文档、名人博客、书籍、相关文章以及演讲的资料收集和整理，并结合我自身在软件工程、编程语言和数据库开发的授课经验，将这些零碎的知识点组织成系统化的概念和技术分类来进行讲解。 随着软件规模的不断扩大，诸多的学者和谷歌的开发者们在公司内部的软件开发过程中开始经历大量的挫折，在诸多问题上都不能给出令人满意的解决方案，尤其是在使用 C++ 来开发大型的服务端软件时，情况更是不容乐观。由于二进制文件一般都是非常巨大的，因此需要耗费大量的时间在编译这些文件上，同时编程语言的设计思想也已经非常陈旧，这些情况都充分证明了现有的编程语言已不符合时下的生产环境。尽管硬件在过去的几十年中有了飞速的发展，但人们依旧没有找到机会去改变 C++ 在软件开发的重要地位，并在实际开发过程中忍受着它所带来的令人头疼的一些问题。因此学者们坐下来总结出了现在生产环境与软件开发之间的主要矛盾，并尝试设计一门全新的编程语言来解决这些问题。","head":[["meta",{"property":"og:url","content":"https://gaoyangbenyang.github.io/Language/Go%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97.html"}],["meta",{"property":"og:site_name","content":"GaoYang's blog"}],["meta",{"property":"og:title","content":"Go入门指南"}],["meta",{"property":"og:description","content":"前言 用更少的代码，更短的编译时间，创建运行更快的程序，享受更多的乐趣 对于学习 Go 编程语言的爱好者来说，这本书无疑是最适合你的一本书籍，这里包含了当前最全面的学习资源。本书通过对官方的在线文档、名人博客、书籍、相关文章以及演讲的资料收集和整理，并结合我自身在软件工程、编程语言和数据库开发的授课经验，将这些零碎的知识点组织成系统化的概念和技术分类来进行讲解。 随着软件规模的不断扩大，诸多的学者和谷歌的开发者们在公司内部的软件开发过程中开始经历大量的挫折，在诸多问题上都不能给出令人满意的解决方案，尤其是在使用 C++ 来开发大型的服务端软件时，情况更是不容乐观。由于二进制文件一般都是非常巨大的，因此需要耗费大量的时间在编译这些文件上，同时编程语言的设计思想也已经非常陈旧，这些情况都充分证明了现有的编程语言已不符合时下的生产环境。尽管硬件在过去的几十年中有了飞速的发展，但人们依旧没有找到机会去改变 C++ 在软件开发的重要地位，并在实际开发过程中忍受着它所带来的令人头疼的一些问题。因此学者们坐下来总结出了现在生产环境与软件开发之间的主要矛盾，并尝试设计一门全新的编程语言来解决这些问题。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-16T16:44:41.000Z"}],["meta",{"property":"article:author","content":"GaoYang"}],["meta",{"property":"article:tag","content":"基础"}],["meta",{"property":"article:published_time","content":"2023-03-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-16T16:44:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Go入门指南\\",\\"description\\":\\"前言 用更少的代码，更短的编译时间，创建运行更快的程序，享受更多的乐趣 对于学习 Go 编程语言的爱好者来说，这本书无疑是最适合你的一本书籍，这里包含了当前最全面的学习资源。本书通过对官方的在线文档、名人博客、书籍、相关文章以及演讲的资料收集和整理，并结合我自身在软件工程、编程语言和数据库开发的授课经验，将这些零碎的知识点组织成系统化的概念和技术分类来进行讲解。 随着软件规模的不断扩大，诸多的学者和谷歌的开发者们在公司内部的软件开发过程中开始经历大量的挫折，在诸多问题上都不能给出令人满意的解决方案，尤其是在使用 C++ 来开发大型的服务端软件时，情况更是不容乐观。由于二进制文件一般都是非常巨大的，因此需要耗费大量的时间在编译这些文件上，同时编程语言的设计思想也已经非常陈旧，这些情况都充分证明了现有的编程语言已不符合时下的生产环境。尽管硬件在过去的几十年中有了飞速的发展，但人们依旧没有找到机会去改变 C++ 在软件开发的重要地位，并在实际开发过程中忍受着它所带来的令人头疼的一些问题。因此学者们坐下来总结出了现在生产环境与软件开发之间的主要矛盾，并尝试设计一门全新的编程语言来解决这些问题。\\"}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"第 1 章：Go 语言的起源与发展","slug":"第-1-章-go-语言的起源与发展","link":"#第-1-章-go-语言的起源与发展","children":[{"level":3,"title":"1.1 起源与发展","slug":"_1-1-起源与发展","link":"#_1-1-起源与发展","children":[]},{"level":3,"title":"1.2 语言的主要特性与发展的环境和影响因素","slug":"_1-2-语言的主要特性与发展的环境和影响因素","link":"#_1-2-语言的主要特性与发展的环境和影响因素","children":[]}]},{"level":2,"title":"第 2 章：安装与运行环境","slug":"第-2-章-安装与运行环境","link":"#第-2-章-安装与运行环境","children":[{"level":3,"title":"2.1 平台与架构","slug":"_2-1-平台与架构","link":"#_2-1-平台与架构","children":[]},{"level":3,"title":"2.2 Go 环境变量","slug":"_2-2-go-环境变量","link":"#_2-2-go-环境变量","children":[]},{"level":3,"title":"2.3 在 Linux 上安装 Go","slug":"_2-3-在-linux-上安装-go","link":"#_2-3-在-linux-上安装-go","children":[]},{"level":3,"title":"2.4 在 Mac OS X 上安装 Go","slug":"_2-4-在-mac-os-x-上安装-go","link":"#_2-4-在-mac-os-x-上安装-go","children":[]},{"level":3,"title":"2.5 在 Windows 上安装 Go","slug":"_2-5-在-windows-上安装-go","link":"#_2-5-在-windows-上安装-go","children":[]},{"level":3,"title":"2.6 安装目录清单","slug":"_2-6-安装目录清单","link":"#_2-6-安装目录清单","children":[]},{"level":3,"title":"2.7 Go 运行时 (runtime)","slug":"_2-7-go-运行时-runtime","link":"#_2-7-go-运行时-runtime","children":[]},{"level":3,"title":"2.8 Go 解释器","slug":"_2-8-go-解释器","link":"#_2-8-go-解释器","children":[]}]},{"level":2,"title":"第 3 章：编辑器、集成开发环境与其它工具","slug":"第-3-章-编辑器、集成开发环境与其它工具","link":"#第-3-章-编辑器、集成开发环境与其它工具","children":[{"level":3,"title":"3.1 Go 开发环境的基本要求","slug":"_3-1-go-开发环境的基本要求","link":"#_3-1-go-开发环境的基本要求","children":[]},{"level":3,"title":"3.2 编辑器和集成开发环境","slug":"_3-2-编辑器和集成开发环境","link":"#_3-2-编辑器和集成开发环境","children":[]},{"level":3,"title":"3.3 调试器","slug":"_3-3-调试器","link":"#_3-3-调试器","children":[]},{"level":3,"title":"3.4 构建并运行 Go 程序","slug":"_3-4-构建并运行-go-程序","link":"#_3-4-构建并运行-go-程序","children":[]},{"level":3,"title":"3.5 格式化代码","slug":"_3-5-格式化代码","link":"#_3-5-格式化代码","children":[]},{"level":3,"title":"3.6 生成代码文档","slug":"_3-6-生成代码文档","link":"#_3-6-生成代码文档","children":[]},{"level":3,"title":"3.7 其它工具","slug":"_3-7-其它工具","link":"#_3-7-其它工具","children":[]},{"level":3,"title":"3.8 Go 性能说明","slug":"_3-8-go-性能说明","link":"#_3-8-go-性能说明","children":[]},{"level":3,"title":"3.9 与其它语言进行交互","slug":"_3-9-与其它语言进行交互","link":"#_3-9-与其它语言进行交互","children":[]}]},{"level":2,"title":"第 4 章：基本结构和基本数据类型","slug":"第-4-章-基本结构和基本数据类型","link":"#第-4-章-基本结构和基本数据类型","children":[{"level":3,"title":"4.1 文件名、关键字与标识符","slug":"_4-1-文件名、关键字与标识符","link":"#_4-1-文件名、关键字与标识符","children":[]},{"level":3,"title":"4.2 Go 程序的基本结构和要素","slug":"_4-2-go-程序的基本结构和要素","link":"#_4-2-go-程序的基本结构和要素","children":[]},{"level":3,"title":"4.3 常量","slug":"_4-3-常量","link":"#_4-3-常量","children":[]},{"level":3,"title":"4.4 变量","slug":"_4-4-变量","link":"#_4-4-变量","children":[]},{"level":3,"title":"4.5 基本类型和运算符","slug":"_4-5-基本类型和运算符","link":"#_4-5-基本类型和运算符","children":[]},{"level":3,"title":"4.6 字符串","slug":"_4-6-字符串","link":"#_4-6-字符串","children":[]},{"level":3,"title":"4.7 strings 和 strconv 包","slug":"_4-7-strings-和-strconv-包","link":"#_4-7-strings-和-strconv-包","children":[]},{"level":3,"title":"4.8 时间和日期","slug":"_4-8-时间和日期","link":"#_4-8-时间和日期","children":[]},{"level":3,"title":"4.9 指针","slug":"_4-9-指针","link":"#_4-9-指针","children":[]}]},{"level":2,"title":"第 5 章：控制结构","slug":"第-5-章-控制结构","link":"#第-5-章-控制结构","children":[{"level":3,"title":"5.1 if-else 结构","slug":"_5-1-if-else-结构","link":"#_5-1-if-else-结构","children":[]},{"level":3,"title":"5.2 测试多返回值函数的错误","slug":"_5-2-测试多返回值函数的错误","link":"#_5-2-测试多返回值函数的错误","children":[]},{"level":3,"title":"5.3 switch 结构","slug":"_5-3-switch-结构","link":"#_5-3-switch-结构","children":[]},{"level":3,"title":"5.4 for 结构","slug":"_5-4-for-结构","link":"#_5-4-for-结构","children":[]},{"level":3,"title":"5.5 break 与 continue","slug":"_5-5-break-与-continue","link":"#_5-5-break-与-continue","children":[]},{"level":3,"title":"5.6 标签与 goto","slug":"_5-6-标签与-goto","link":"#_5-6-标签与-goto","children":[]}]},{"level":2,"title":"第 6 章：函数 (function)","slug":"第-6-章-函数-function","link":"#第-6-章-函数-function","children":[{"level":3,"title":"6.1 介绍","slug":"_6-1-介绍","link":"#_6-1-介绍","children":[]},{"level":3,"title":"6.2 函数参数与返回值","slug":"_6-2-函数参数与返回值","link":"#_6-2-函数参数与返回值","children":[]},{"level":3,"title":"6.3 传递变长参数","slug":"_6-3-传递变长参数","link":"#_6-3-传递变长参数","children":[]},{"level":3,"title":"6.4 defer 和追踪","slug":"_6-4-defer-和追踪","link":"#_6-4-defer-和追踪","children":[]},{"level":3,"title":"6.5 内置函数","slug":"_6-5-内置函数","link":"#_6-5-内置函数","children":[]},{"level":3,"title":"6.6 递归函数","slug":"_6-6-递归函数","link":"#_6-6-递归函数","children":[]},{"level":3,"title":"6.7 将函数作为参数","slug":"_6-7-将函数作为参数","link":"#_6-7-将函数作为参数","children":[]},{"level":3,"title":"6.8 闭包","slug":"_6-8-闭包","link":"#_6-8-闭包","children":[]},{"level":3,"title":"6.9 应用闭包：将函数作为返回值","slug":"_6-9-应用闭包-将函数作为返回值","link":"#_6-9-应用闭包-将函数作为返回值","children":[]},{"level":3,"title":"6.10 使用闭包调试","slug":"_6-10-使用闭包调试","link":"#_6-10-使用闭包调试","children":[]},{"level":3,"title":"6.11 计算函数执行时间","slug":"_6-11-计算函数执行时间","link":"#_6-11-计算函数执行时间","children":[]},{"level":3,"title":"6.12 通过内存缓存来提升性能","slug":"_6-12-通过内存缓存来提升性能","link":"#_6-12-通过内存缓存来提升性能","children":[]}]},{"level":2,"title":"第 7 章：数组(array)与切片(slice)","slug":"第-7-章-数组-array-与切片-slice","link":"#第-7-章-数组-array-与切片-slice","children":[{"level":3,"title":"7.1 声明和初始化","slug":"_7-1-声明和初始化","link":"#_7-1-声明和初始化","children":[]},{"level":3,"title":"7.2 切片","slug":"_7-2-切片","link":"#_7-2-切片","children":[]},{"level":3,"title":"7.3 For-range 结构","slug":"_7-3-for-range-结构","link":"#_7-3-for-range-结构","children":[]},{"level":3,"title":"7.4 切片重组 (reslice)","slug":"_7-4-切片重组-reslice","link":"#_7-4-切片重组-reslice","children":[]},{"level":3,"title":"7.5 切片的复制与追加","slug":"_7-5-切片的复制与追加","link":"#_7-5-切片的复制与追加","children":[]},{"level":3,"title":"7.6 字符串、数组和切片的应用","slug":"_7-6-字符串、数组和切片的应用","link":"#_7-6-字符串、数组和切片的应用","children":[]}]},{"level":2,"title":"第 8 章：Map","slug":"第-8-章-map","link":"#第-8-章-map","children":[{"level":3,"title":"8.1 声明、初始化和 make","slug":"_8-1-声明、初始化和-make","link":"#_8-1-声明、初始化和-make","children":[]},{"level":3,"title":"8.2 测试键值对是否存在及删除元素","slug":"_8-2-测试键值对是否存在及删除元素","link":"#_8-2-测试键值对是否存在及删除元素","children":[]},{"level":3,"title":"8.3 for-range 的配套用法","slug":"_8-3-for-range-的配套用法","link":"#_8-3-for-range-的配套用法","children":[]},{"level":3,"title":"8.4 map 类型的切片","slug":"_8-4-map-类型的切片","link":"#_8-4-map-类型的切片","children":[]},{"level":3,"title":"8.5 map 的排序","slug":"_8-5-map-的排序","link":"#_8-5-map-的排序","children":[]},{"level":3,"title":"8.6 将 map 的键值对调","slug":"_8-6-将-map-的键值对调","link":"#_8-6-将-map-的键值对调","children":[]}]},{"level":2,"title":"第 9 章：包 (package)","slug":"第-9-章-包-package","link":"#第-9-章-包-package","children":[{"level":3,"title":"9.1 标准库","slug":"_9-1-标准库","link":"#_9-1-标准库","children":[]},{"level":3,"title":"9.2 regexp 包","slug":"_9-2-regexp-包","link":"#_9-2-regexp-包","children":[]},{"level":3,"title":"9.3 锁和 sync 包","slug":"_9-3-锁和-sync-包","link":"#_9-3-锁和-sync-包","children":[]},{"level":3,"title":"9.4 精密计算和 big 包","slug":"_9-4-精密计算和-big-包","link":"#_9-4-精密计算和-big-包","children":[]},{"level":3,"title":"9.5 自定义包和可见性","slug":"_9-5-自定义包和可见性","link":"#_9-5-自定义包和可见性","children":[]},{"level":3,"title":"9.6 为自定义包使用 godoc","slug":"_9-6-为自定义包使用-godoc","link":"#_9-6-为自定义包使用-godoc","children":[]},{"level":3,"title":"9.7 使用 go install 安装自定义包","slug":"_9-7-使用-go-install-安装自定义包","link":"#_9-7-使用-go-install-安装自定义包","children":[]},{"level":3,"title":"9.8 自定义包的目录结构、go install 和 go test","slug":"_9-8-自定义包的目录结构、go-install-和-go-test","link":"#_9-8-自定义包的目录结构、go-install-和-go-test","children":[]},{"level":3,"title":"9.9 通过 Git 打包和安装","slug":"_9-9-通过-git-打包和安装","link":"#_9-9-通过-git-打包和安装","children":[]},{"level":3,"title":"9.10 Go 的外部包和项目","slug":"_9-10-go-的外部包和项目","link":"#_9-10-go-的外部包和项目","children":[]},{"level":3,"title":"9.11 在 Go 程序中使用外部库","slug":"_9-11-在-go-程序中使用外部库","link":"#_9-11-在-go-程序中使用外部库","children":[]}]},{"level":2,"title":"第 10 章：结构体 (struct) 与方法 (method)","slug":"第-10-章-结构体-struct-与方法-method","link":"#第-10-章-结构体-struct-与方法-method","children":[{"level":3,"title":"10.1 结构体定义","slug":"_10-1-结构体定义","link":"#_10-1-结构体定义","children":[]},{"level":3,"title":"10.2 使用工厂方法创建结构体实例","slug":"_10-2-使用工厂方法创建结构体实例","link":"#_10-2-使用工厂方法创建结构体实例","children":[]},{"level":3,"title":"10.3 使用自定义包中的结构体","slug":"_10-3-使用自定义包中的结构体","link":"#_10-3-使用自定义包中的结构体","children":[]},{"level":3,"title":"10.4 带标签的结构体","slug":"_10-4-带标签的结构体","link":"#_10-4-带标签的结构体","children":[]},{"level":3,"title":"10.5 匿名字段和内嵌结构体","slug":"_10-5-匿名字段和内嵌结构体","link":"#_10-5-匿名字段和内嵌结构体","children":[]},{"level":3,"title":"10.6 方法","slug":"_10-6-方法","link":"#_10-6-方法","children":[]},{"level":3,"title":"10.7 类型的 String() 方法和格式化描述符","slug":"_10-7-类型的-string-方法和格式化描述符","link":"#_10-7-类型的-string-方法和格式化描述符","children":[]},{"level":3,"title":"10.8 垃圾回收和 SetFinalizer","slug":"_10-8-垃圾回收和-setfinalizer","link":"#_10-8-垃圾回收和-setfinalizer","children":[]}]},{"level":2,"title":"第 11 章：接口 (interface) 与反射 (reflection)","slug":"第-11-章-接口-interface-与反射-reflection","link":"#第-11-章-接口-interface-与反射-reflection","children":[]},{"level":2,"title":"11.9.1 概念","slug":"_11-9-1-概念","link":"#_11-9-1-概念","children":[]},{"level":2,"title":"11.9.2 构建通用类型或包含不同类型变量的数组","slug":"_11-9-2-构建通用类型或包含不同类型变量的数组","link":"#_11-9-2-构建通用类型或包含不同类型变量的数组","children":[]},{"level":2,"title":"11.9.3 复制数据切片至空接口切片","slug":"_11-9-3-复制数据切片至空接口切片","link":"#_11-9-3-复制数据切片至空接口切片","children":[]},{"level":2,"title":"11.9.4 通用类型的节点数据结构","slug":"_11-9-4-通用类型的节点数据结构","link":"#_11-9-4-通用类型的节点数据结构","children":[]},{"level":2,"title":"11.9.5 接口到接口","slug":"_11-9-5-接口到接口","link":"#_11-9-5-接口到接口","children":[]},{"level":2,"title":"11.10.1 方法和类型的反射","slug":"_11-10-1-方法和类型的反射","link":"#_11-10-1-方法和类型的反射","children":[]},{"level":2,"title":"11.10.2 通过反射修改（设置）值","slug":"_11-10-2-通过反射修改-设置-值","link":"#_11-10-2-通过反射修改-设置-值","children":[]},{"level":2,"title":"11.10.3 反射结构","slug":"_11-10-3-反射结构","link":"#_11-10-3-反射结构","children":[]},{"level":2,"title":"11.12.1 Go 的动态类型","slug":"_11-12-1-go-的动态类型","link":"#_11-12-1-go-的动态类型","children":[]},{"level":2,"title":"11.12.2 动态方法调用","slug":"_11-12-2-动态方法调用","link":"#_11-12-2-动态方法调用","children":[]},{"level":2,"title":"11.12.3 接口的提取","slug":"_11-12-3-接口的提取","link":"#_11-12-3-接口的提取","children":[]},{"level":2,"title":"11.12.4 显式地指明类型实现了某个接口","slug":"_11-12-4-显式地指明类型实现了某个接口","link":"#_11-12-4-显式地指明类型实现了某个接口","children":[]},{"level":2,"title":"11.12.5 空接口和函数重载","slug":"_11-12-5-空接口和函数重载","link":"#_11-12-5-空接口和函数重载","children":[]},{"level":2,"title":"11.12.6 接口的继承","slug":"_11-12-6-接口的继承","link":"#_11-12-6-接口的继承","children":[]},{"level":2,"title":"第 12 章：读写数据","slug":"第-12-章-读写数据","link":"#第-12-章-读写数据","children":[]},{"level":2,"title":"12.2.1 读文件","slug":"_12-2-1-读文件","link":"#_12-2-1-读文件","children":[]},{"level":2,"title":"12.2.2 compress 包：读取压缩文件","slug":"_12-2-2-compress-包-读取压缩文件","link":"#_12-2-2-compress-包-读取压缩文件","children":[]},{"level":2,"title":"12.2.3 写文件","slug":"_12-2-3-写文件","link":"#_12-2-3-写文件","children":[]},{"level":2,"title":"12.4.1 os 包","slug":"_12-4-1-os-包","link":"#_12-4-1-os-包","children":[]},{"level":2,"title":"12.4.2 flag 包","slug":"_12-4-2-flag-包","link":"#_12-4-2-flag-包","children":[{"level":3,"title":"反序列化：","slug":"反序列化","link":"#反序列化","children":[]},{"level":3,"title":"解码任意的数据：","slug":"解码任意的数据","link":"#解码任意的数据","children":[]},{"level":3,"title":"解码数据到结构","slug":"解码数据到结构","link":"#解码数据到结构","children":[]},{"level":3,"title":"编码和解码流","slug":"编码和解码流","link":"#编码和解码流","children":[]}]},{"level":2,"title":"第 13 章：错误处理与测试","slug":"第-13-章-错误处理与测试","link":"#第-13-章-错误处理与测试","children":[]},{"level":2,"title":"13.1.1 定义错误","slug":"_13-1-1-定义错误","link":"#_13-1-1-定义错误","children":[]},{"level":2,"title":"13.1.2 用 fmt 创建错误对象","slug":"_13-1-2-用-fmt-创建错误对象","link":"#_13-1-2-用-fmt-创建错误对象","children":[]},{"level":2,"title":"13.10.1 时间和内存消耗","slug":"_13-10-1-时间和内存消耗","link":"#_13-10-1-时间和内存消耗","children":[]},{"level":2,"title":"13.10.2 用 go test 调试","slug":"_13-10-2-用-go-test-调试","link":"#_13-10-2-用-go-test-调试","children":[]},{"level":2,"title":"13.10.3 用 pprof 调试","slug":"_13-10-3-用-pprof-调试","link":"#_13-10-3-用-pprof-调试","children":[]},{"level":2,"title":"第 14 章：协程 (goroutine) 与通道 (channel)","slug":"第-14-章-协程-goroutine-与通道-channel","link":"#第-14-章-协程-goroutine-与通道-channel","children":[]},{"level":2,"title":"14.1.1 什么是协程","slug":"_14-1-1-什么是协程","link":"#_14-1-1-什么是协程","children":[]},{"level":2,"title":"14.1.2 并发和并行的差异","slug":"_14-1-2-并发和并行的差异","link":"#_14-1-2-并发和并行的差异","children":[]},{"level":2,"title":"14.1.3 使用 GOMAXPROCS","slug":"_14-1-3-使用-gomaxprocs","link":"#_14-1-3-使用-gomaxprocs","children":[]},{"level":2,"title":"14.1.4 如何用命令行指定使用的核心数量","slug":"_14-1-4-如何用命令行指定使用的核心数量","link":"#_14-1-4-如何用命令行指定使用的核心数量","children":[]},{"level":2,"title":"14.1.5 Go 协程 (goroutines) 和协程 (coroutines)","slug":"_14-1-5-go-协程-goroutines-和协程-coroutines","link":"#_14-1-5-go-协程-goroutines-和协程-coroutines","children":[]},{"level":2,"title":"14.2.1 概念","slug":"_14-2-1-概念","link":"#_14-2-1-概念","children":[]},{"level":2,"title":"14.2.2 通信操作符 <-","slug":"_14-2-2-通信操作符","link":"#_14-2-2-通信操作符","children":[]},{"level":2,"title":"14.2.3 通道阻塞","slug":"_14-2-3-通道阻塞","link":"#_14-2-3-通道阻塞","children":[]},{"level":2,"title":"14.2.4 通过一个（或多个）通道交换数据进行协程同步。","slug":"_14-2-4-通过一个-或多个-通道交换数据进行协程同步。","link":"#_14-2-4-通过一个-或多个-通道交换数据进行协程同步。","children":[]},{"level":2,"title":"14.2.5 同步通道-使用带缓冲的通道","slug":"_14-2-5-同步通道-使用带缓冲的通道","link":"#_14-2-5-同步通道-使用带缓冲的通道","children":[]},{"level":2,"title":"14.2.6 协程中用通道输出结果","slug":"_14-2-6-协程中用通道输出结果","link":"#_14-2-6-协程中用通道输出结果","children":[]},{"level":2,"title":"14.2.7 信号量模式","slug":"_14-2-7-信号量模式","link":"#_14-2-7-信号量模式","children":[]},{"level":2,"title":"14.2.8 实现并行的 for 循环","slug":"_14-2-8-实现并行的-for-循环","link":"#_14-2-8-实现并行的-for-循环","children":[]},{"level":2,"title":"14.2.9 用带缓冲通道实现一个信号量","slug":"_14-2-9-用带缓冲通道实现一个信号量","link":"#_14-2-9-用带缓冲通道实现一个信号量","children":[]},{"level":2,"title":"14.2.10 给通道使用 for 循环","slug":"_14-2-10-给通道使用-for-循环","link":"#_14-2-10-给通道使用-for-循环","children":[]},{"level":2,"title":"14.2.11 通道的方向","slug":"_14-2-11-通道的方向","link":"#_14-2-11-通道的方向","children":[]},{"level":2,"title":"第 15 章：网络、模板与网页应用","slug":"第-15-章-网络、模板与网页应用","link":"#第-15-章-网络、模板与网页应用","children":[]},{"level":2,"title":"第 16 章：常见的陷阱与错误","slug":"第-16-章-常见的陷阱与错误","link":"#第-16-章-常见的陷阱与错误","children":[]},{"level":2,"title":"第 17 章：模式","slug":"第-17-章-模式","link":"#第-17-章-模式","children":[]},{"level":2,"title":"第 18 章：出于性能考虑的实用代码片段","slug":"第-18-章-出于性能考虑的实用代码片段","link":"#第-18-章-出于性能考虑的实用代码片段","children":[]},{"level":2,"title":"第 19 章：构建一个完整的应用程序","slug":"第-19-章-构建一个完整的应用程序","link":"#第-19-章-构建一个完整的应用程序","children":[]},{"level":2,"title":"第 20 章：Go 语言在 Google App Engine 的使用","slug":"第-20-章-go-语言在-google-app-engine-的使用","link":"#第-20-章-go-语言在-google-app-engine-的使用","children":[]},{"level":2,"title":"第 21 章：真实世界中 Go 的使用","slug":"第-21-章-真实世界中-go-的使用","link":"#第-21-章-真实世界中-go-的使用","children":[]}],"git":{"createdTime":1685261363000,"updatedTime":1686933881000,"contributors":[{"name":"GaoYang","email":"GaoYangBenYang@outlook.com","commits":14}]},"readingTime":{"minutes":429.17,"words":128751},"filePathRelative":"Language/Go入门指南.md","localizedDate":"2023年3月25日","excerpt":"<h2> 前言</h2>\\n<p>用更少的代码，更短的编译时间，创建运行更快的程序，享受更多的乐趣</p>\\n<p>对于学习 Go 编程语言的爱好者来说，这本书无疑是最适合你的一本书籍，这里包含了当前最全面的学习资源。本书通过对官方的在线文档、名人博客、书籍、相关文章以及演讲的资料收集和整理，并结合我自身在软件工程、编程语言和数据库开发的授课经验，将这些零碎的知识点组织成系统化的概念和技术分类来进行讲解。</p>\\n<p>随着软件规模的不断扩大，诸多的学者和谷歌的开发者们在公司内部的软件开发过程中开始经历大量的挫折，在诸多问题上都不能给出令人满意的解决方案，尤其是在使用 C++ 来开发大型的服务端软件时，情况更是不容乐观。由于二进制文件一般都是非常巨大的，因此需要耗费大量的时间在编译这些文件上，同时编程语言的设计思想也已经非常陈旧，这些情况都充分证明了现有的编程语言已不符合时下的生产环境。尽管硬件在过去的几十年中有了飞速的发展，但人们依旧没有找到机会去改变 C++ 在软件开发的重要地位，并在实际开发过程中忍受着它所带来的令人头疼的一些问题。因此学者们坐下来总结出了现在生产环境与软件开发之间的主要矛盾，并尝试设计一门全新的编程语言来解决这些问题。</p>","autoDesc":true}`);export{l as data};
