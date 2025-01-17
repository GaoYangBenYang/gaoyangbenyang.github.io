## 前言

开发一个系统，必然面临权限控制的问题，即不同的用户具有不同的访问、操作、数据权限。

四种形成经典理论的权限控制模型有：

自主访问控制（DAC: Discretionary Access Control）

强制访问控制（MAC: Mandatory Access Control）

基于属性访问控制（ABAC: Attribute-Based Access Control）

基于角色访问控制（Role-Based Access Control），本文就将向大家介绍该权限模型。

相关术语:

`用户`：发起操作的主体；

`对象`：指操作所针对的客体对象，比如订单数据或图片文件；

`角色`：赋予用户某种身份；

`权限控制表(ACL: Access Control List)`：用来描述权限规则或用户和权限之间关系的数据表；

`权限(Permission)`：用来指代对某种对象的某一种操作，例如“添加文章的操作”；

`权限标识`：权限的代号，例如用“ARTICLE_ADD”来指代“添加文章”的操作权限。

## DAC权限模型简介

自主访问控制(DAC: Discretionary Access Control)模型，系统会识别用户，然后根据被操作对象(Subject)的权限控制列表(ACL: Access Control List)
或者权限控制矩阵(ACL: Access Control Matrix)
的信息来决定用户是否能对其进行哪些操作，例如读取或修改。而拥有对象权限的用户，又可以将该对象的权限分配给其他用户，所以称之为“自主(Discretionary)
”控制。

这种设计最常见的应用就是文件系统的权限设计，如微软的 NTFS。

DAC 最大的缺陷就是对权限控制比较分散，不便于管理，比如无法简单地对一组文件设置统一的权限并开放给指定的一群用户。

## MAC权限模型简介

强制访问控制模型(MAC: Mandatory Access Control)，MAC 是为了弥补 DAC 权限控制过于分散的问题而诞生的。在 MAC
的设计中，每一个对象都有一些权限标识，每个用户同样也会有一些权限标识，而用户能否对该对象进行操作取决于双方权限标识的关系，这个关系的判断通常是由系统硬性限制的。比如在影视作品中我们经常能看到特工在查询机密文件时，屏幕提示“无法访问，需要一级安全许可”。这个例子中，文件上就有“一级安全许可”的权限标识，而用户并不具有。

MAC 非常适合机密机构或者其他等级观念强烈的行业，但对于类似商业服务系统，则因为不够灵活而不能适用。

## ABAC权限模型简介

基于属性的访问控制模型(ABAC: Attribute-Based Access Control)，被一些人称为是权限系统设计的未来。

不同于常见的将用户通过某种方式关联到权限的方式，ABAC
则是通过动态计算一个或一组属性是否满足某种条件来进行授权判断（可以编写简单的逻辑）。属性通常来说分为四类：用户属性（如用户年龄），环境属性（如当前时间），操作属性（如读取）和对象属性（如一篇文章，又称资源属性），所以理论上能够实现非常灵活的权限控制，几乎能满足所有类型的需求。

例如：“允许所有班主任在上课时间自由进出校门”这条规则，其中，“班主任”是用户的角色属性，“上课时间”是环境属性，“进出”是操作属性，而“校门”就是对象属性了。为了便捷的执行规则设置和规则判断，ABAC
通常有配置文件(XML、YAML等)或 DSL 配合规则解析引擎使用。XACML(eXtensible Access Control Markup Language)是 ABAC 的一个实现，但是该设计过于复杂，故不做介绍。

既然 ABAC 这么好，那最流行的为什么还是 RBAC 呢？我认为主要还是因为大部分系统对权限控制并没有过多的需求，而且 ABAC 的管理相对来说太复杂了。Kubernetes
便因为 ABAC 太难用，在 1.8 版本里引入了 RBAC 的方案。

ABAC 有时也被称为 PBAC(Policy-Based Access Control)或 CBAC(Claims-Based Access Control)。

## RBAC权限模型简介

RBAC（Role-Based Access Control）中文全称是`基于角色的访问控制`
，是20世纪90年代研究出来的一种新模型，但其实在20世纪70年代的多用户计算时期，这种思想就已经被提出来，直到20世纪90年代中后期，RBAC才在研究团体中得到一些重视，并先后提出了许多类型的RBAC模型。其中以美国George
Mason大学信息安全技术实验室（LIST）提出的RBAC96模型最具有代表，并得到了普遍的公认。
在RBAC模型中，权限与角色相关联，不同的角色有不同的权限，用户通过被分配为不同的角色从而获得不同角色的权限，从而简化用户的权限管理。用户与角色关联后，同能进行自主授权和权限专营，必须通过角色来控制授权信息，实现访问控制。

### RBAC权限模型组成

在RBAC模型里面，有3个基础组成部分，分别是：`用户`、`角色`和`权限`。

RBAC通过定义角色的权限，并对用户授予某个角色从而来控制用户的权限，实现了用户和权限的逻辑分离（区别于ACL模型），极大地方便了权限的管理：

`User（用户）`：每个用户都有唯一的UID识别，并被授予不同的角色

`Role（角色）`：不同角色具有不同的权限

`Permission（权限）`：访问权限

`用户-角色映射`：用户和角色之间的映射关系

`角色-权限映射`：角色和权限之间的映射

![RBAC](/assets/blogs/基于角色访问控制模型/RBAC.png)

RBAC模型是RBAC机制的基本模型，又称为RBAC0(Core RBAC)，除此之外，还有一些在此基础上演化出来的模型，如角色分层模型RBAC1（Hierarchal
RBAC）、角色限制模型RBAC2（Constraint RBAC）和统一模型RBAC3（Combines RBAC）。

### 基本模型(RBAC0)

RBAC0，它是RBAC的核心，RBAC1、RBAC2、RBAC3都是先后在RBAC0上的扩展。RBAC0定义了能构成RBAC控制系统的最小的元素集合，RBAC0由四部分构成：

用户（User）

角色（Role）

会话（Session）

权限（Permission）

![RBAC0](/assets/blogs/基于角色访问控制模型/RBAC0.png)

### 角色分层模型(RBAC1)

基于RBAC0模型，引入了角色间的继承关系，即角色上有了上下级的区别。角色间的继承关系可分为一般继承关系和受限继承关系。一般继承关系仅要求角色继承关系是一个绝对偏序关系，允许角色间的多继承。而受限继承关系则进一步要求角色继承关系是一个树结构，实现角色间的单继承。这种模型适合于角色之间层次分明，可以给角色分组分层。

![RBAC1](/assets/blogs/基于角色访问控制模型/RBAC1.png)

### 角色限制模型(RBAC2)

RBAC2，基于RBAC0模型的基础上，进行了角色的访问控制。

RBAC2，它是RBAC的约束模型，RBAC2也是建立的RBAC0的基础之上的，在RBAC0基础上假如了约束的概念，主要引入了静态职责分离SSD(Static Separation of Duty)
和动态职责分离DSD(Dynamic Separation of Duty)。

SSD是用户和角色的指派阶段加入的，主要是对用户和角色有如下约束:

`互斥角色`：同一用户不能分配到一组互斥角色集合中的多个角色，互斥角色是指权限互相制约的两个角色。

`基数约束`：一个角色被分配的用户数量受限，它指的是有多少用户能拥有这个角色。

`先决条件约束`：指要想获得较高的权限，要首先拥有低一级的权限。

`运行时互斥`：例如，允许一个用户具有两个角色的成员资格，但在运行中不可同时激活这两个角色

![RBAC2](/assets/blogs/基于角色访问控制模型/RBAC2.png)

### 统一模型(RBAC3)

它包含了RBAC1和RBAC2，利用传递性，也把RBAC0包括在内，综合了RBAC0、RBAC1和RBAC2的所有特点

![RBAC3](/assets/blogs/基于角色访问控制模型/RBAC3.png)

#### 模型关键点

* 一个权限系统需要具备如下的几个关键要素：

  1.项目：对权限服务来说，一个项目，即为一个服务对象，不同项目间的权限数据是相互隔离的。

  2.权限点：业务系统定义的一个具体的权限，一般定义为一种动作，如：签约、审批、增、删、查、改等，都可以是一个权限点。权限点不直接分配给用户。

  3.角色：一定数量权限点的集合。权限分配的单位与载体,目的是隔离用户与权限点的逻辑关系。

  4.权限约束：对一个权限点的附加限制，可配置为权限点的数据范围或附加条件。

  5.角色属性：对一个角色的附加属性，如：虚拟角色。角色属性通过"全局权限点"实现。（业务系统可自行定义，自行解释角色属性）

  6.全局权限点：是一种特殊的权限点，角色关联全局权限点后，全局权限点约束的键、值将作为角色属性返回。

* 权限配置分类

  1.我们平时使用的权限其实是有分类的，大体上分为三类：页面权限、操作权限、数据权限。

## 利用RBAC模型进行权限体系的设计

首先是：用户、角色、权限。而权限，具体到某个软件来说，实际上包含三个方面：一个是页面权限，一个是操作权限，一个是数据权限。

![权限分类](/assets/blogs/基于角色访问控制模型/权限分类.png)

### RBAC权限体系精简设计(用户量小)

![RBAC权限体系精简设计](/assets/blogs/基于角色访问控制模型/RBAC权限体系精简设计.png)

1.账号表（account）
在我们的系统中，会有各种各样的登录方式，如手机号、邮箱地址、身份证号码和微信登录等。因此该表主要是用来记录每一种登录方式的信息，但不包含密码信息，因为各种登录方式都会使用同一个密码。每一条记录都会关联到唯一的一条用户记录。

```sql
CREATE TABLE `account`
(
    `id`        bigint(20)                                                   NOT NULL AUTO_INCREMENT COMMENT '账号ID',
    `user_id`   bigint(20)                                                   NULL DEFAULT NULL COMMENT '用户ID',
    `open_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci      NULL DEFAULT NULL COMMENT '登录账号,如手机号等',
    `category`  tinyint(1)                                                   NULL DEFAULT NULL COMMENT '账号类别',
    `created`   datetime(0)                                                  NULL DEFAULT NULL COMMENT '创建时间',
    `creator`   varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci       NULL DEFAULT NULL COMMENT '创建人',
    `edited`    datetime(0)                                                  NULL DEFAULT NULL COMMENT '修改时间',
    `editor`    varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '修改人',
    `deleted`   double(1, 0) UNSIGNED ZEROFILL                               NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `idx_member_id` (`user_id`) USING BTREE COMMENT '普通索引',
    CONSTRAINT `account_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '账号'
  ROW_FORMAT = Dynamic;
```

2.用户表（user）
主要是用来记录用户的基本信息和密码信息。其中禁用状态（state）主要是在后台管理控制非法用户使用系统；密码加盐（salt）则是用于给每个用户的登录密码加一把唯一的锁，即使公司加密公钥泄露后，也不会导致全部用户的密码泄露。

```sql
CREATE TABLE `user`
(
    `id`           bigint(20)                                              NOT NULL AUTO_INCREMENT COMMENT '用户ID',
    `state`        tinyint(1)                                              NULL DEFAULT NULL COMMENT '用户状态:0=正常,1=禁用',
    `name`         varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
    `head_img_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像图片地址',
    `mobile`       varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '手机号码',
    `salt`         varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '密码加盐',
    `password`     varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '登录密码',
    `created`      datetime(0)                                             NULL DEFAULT NULL COMMENT '创建时间',
    `creator`      varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '创建人',
    `edited`       datetime(0)                                             NULL DEFAULT NULL COMMENT '修改时间',
    `editor`       varchar(64) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '修改人',
    `deleted`      tinyint(1) UNSIGNED ZEROFILL                            NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '用户'
  ROW_FORMAT = Dynamic;
```

用户账号表（account）和用户表（user）组合在一起，就完成了用户账号模块的设计。如果还想再细分，则可以将两张表拆为以下三张表：

用户信息表（user）：只存储用户基本信息（不包括密码）

账号表（account）：只存储账号相关信息（如密码、注册来源、注册 IP，但不包括登录账号）

登录账号表（login_account）：用来存储每一种登录方式的信息（不包括密码信息）

当然，如果用户信息的字段太多，则可以适当拆分为多张不同领域的用户信息表，这里不再介绍。

3.权限表（permission）
有了用户之后，我们希望不同的用户能操作和查看不同的功能（如页面、菜单和按钮等）。因此需要定义一张表来存储权限相关的信息。包括权限之前还有父子关系，分配了父级后，应该拥有所有的子级权限。同时权限的信息也会分配至前端页面来控制，因此需要提供一个唯一标识（code），有人会问
id 不行吗？当然可以，只是我们的 ID 是自动生成，每个环境都不一样，重新生成后也不一样，因此才单独使用了一个字段来标识。

```sql
CREATE TABLE `permission`
(
    `id`        bigint(20)                                              NOT NULL AUTO_INCREMENT COMMENT '权限ID',
    `parent_id` bigint(20)                                              NULL DEFAULT NULL COMMENT '所属父级权限ID',
    `code`      varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限唯一CODE代码',
    `name`      varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限名称',
    `intro`     varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限介绍',
    `category`  tinyint(1)                                              NULL DEFAULT NULL COMMENT '权限类别',
    `uri`       bigint(20)                                              NULL DEFAULT NULL COMMENT 'URL规则',
    `created`   datetime(0)                                             NULL DEFAULT NULL COMMENT '创建时间',
    `creator`   varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '创建人',
    `edited`    datetime(0)                                             NULL DEFAULT NULL COMMENT '修改时间',
    `editor`    varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '修改人',
    `deleted`   tinyint(1) UNSIGNED ZEROFILL                            NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `parent_id` (`parent_id`) USING BTREE COMMENT '父级权限ID',
    INDEX `code` (`code`) USING BTREE COMMENT '权限CODE代码'
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '权限'
  ROW_FORMAT = Dynamic;
```

其实，再加一张 用户权限表（user_permission） 即可组成一个用户权限中心了，但这样做是不好的。比如我们设想：有 200 个权限点，1 亿个用户，每个人平均配置
100 个权限，则 user_permission 表将会有 100 亿条记录，而且每当我们新增 1 个权限点时，可能需要添加上亿条记录。简而言之会有以下弊端：

中间数据量庞大
新增或编辑时，操作数据量的数据量也是非常庞大
维护起来也很麻烦
因此，我们会引入一张角色表（role）来解决问题。

4.角色表（role）
为了解决维护起来方便，我们会对权限表中的记录进行分组，将相关的一些权限分配为同一组，称之为角色。角色表的作用是为了将零散的权限进行聚合，然后方便对相关的一组进行统一处理（即小范围批量处理）。该表的增加可谓是大大减少了上述维护困难的问题。

```sql
CREATE TABLE `role`
(
    `id`        bigint(20)                                              NOT NULL AUTO_INCREMENT COMMENT '角色ID',
    `parent_id` bigint(20)                                              NULL DEFAULT NULL COMMENT '所属父级角色ID',
    `code`      varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色唯一CODE代码',
    `name`      varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色名称',
    `intro`     varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色介绍',
    `created`   datetime(0)                                             NULL DEFAULT NULL COMMENT '创建时间',
    `creator`   varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '创建人',
    `edited`    datetime(0)                                             NULL DEFAULT NULL COMMENT '修改时间',
    `editor`    varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '修改人',
    `deleted`   tinyint(1) UNSIGNED ZEROFILL                            NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `parent_id` (`parent_id`) USING BTREE COMMENT '父级权限ID',
    INDEX `code` (`code`) USING BTREE COMMENT '权限CODE代码'
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '角色'
  ROW_FORMAT = Dynamic;
```

5.用户—角色表（user_role）
该表主要是用来存储每个用户拥有哪些角色。一般情况，每个用户只会有几个角色，因此数据量从 100 亿变成 10 亿或更少

```sql
CREATE TABLE `user_role`
(
    `id`      bigint(20)                                             NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `user_id` bigint(20)                                             NULL DEFAULT NULL COMMENT '用户ID',
    `role_id` bigint(20)                                             NULL DEFAULT NULL COMMENT '角色ID',
    `created` datetime(0)                                            NULL DEFAULT NULL COMMENT '创建时间',
    `creator` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人',
    `edited`  datetime(0)                                            NULL DEFAULT NULL COMMENT '修改时间',
    `editor`  varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '修改人',
    `deleted` tinyint(1) UNSIGNED ZEROFILL                           NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `member_id` (`user_id`) USING BTREE COMMENT '用户ID',
    INDEX `role_id` (`role_id`) USING BTREE COMMENT '角色ID',
    CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '用户角色'
  ROW_FORMAT = Dynamic;
```

6.角色 - 权限表（role_permission）
该表则是用来定义每个角色组中有哪些权限。该表的数量则更少（基本都在 1 万条以内）。

```sql
CREATE TABLE `role_permission`
(
    `id`            bigint(20)                                             NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `role_id`       bigint(20)                                             NULL DEFAULT NULL COMMENT '角色ID',
    `permission_id` bigint(20)                                             NULL DEFAULT NULL COMMENT '权限ID',
    `created`       datetime(0)                                            NULL DEFAULT NULL COMMENT '创建时间',
    `creator`       varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人',
    `edited`        datetime(0)                                            NULL DEFAULT NULL COMMENT '修改时间',
    `editor`        varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '修改人',
    `deleted`       tinyint(1) UNSIGNED ZEROFILL                           NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `role_id` (`role_id`) USING BTREE COMMENT '角色ID',
    INDEX `permission_id` (`permission_id`) USING BTREE COMMENT '权限ID',
    CONSTRAINT `role_permission_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `role_permission_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '角色权限'
  ROW_FORMAT = Dynamic;
```

总结一下，本节所说的精简版代表的是，能在线上运行的表设计（4 张实体表和 2 张中间表），虽然使用 account、user、permission、user_permission
也能用，但基本没人会这样来用的，因为对后期维护起来很麻烦，数据量也很庞大。

账号表（account）：记录登录账号信息

用户表（user）：记录用户基本信息和密码

权限表（permission）：记录权限信息

角色表（role）：记录角色信息，即定义权限组

用户—角色表（user_role）：记录每个用户拥有哪些角色信息

角色—权限表（role_permission）：记录每个角色拥有哪些权限信息

### RBAC权限体系完整设计(用户量大)

![RBAC权限体系完整设计](/assets/blogs/基于角色访问控制模型/RBAC权限体系完整设计.png)

1.用户组表（user_group）
上述虽然增加了角色表（role）后，把数据量从 100 亿降低至 10 亿，但 10 倍的数据量依然还是很多。而且大部分的用户（主体用户。如学生系统，学生就是主体）都会分配相同的角色组。用户组和角色组的区别：

角色组（role）：解决的是权限的分组，减少了权限的重复分配
用户组（user_group）：解决的是用户的分组，减少了用户的重复授权

```sql
CREATE TABLE `user_group`
(
    `id`        bigint(20)                                              NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `parent_id` bigint(20)                                              NULL DEFAULT NULL COMMENT '所属父级用户组ID',
    `name`      varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户组名称',
    `code`      varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户组CODE唯一代码',
    `intro`     varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户组介绍',
    `created`   datetime(0)                                             NULL DEFAULT NULL COMMENT '创建时间',
    `creator`   varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '创建人',
    `edited`    datetime(0)                                             NULL DEFAULT NULL COMMENT '修改时间',
    `editor`    varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci  NULL DEFAULT NULL COMMENT '修改人',
    `deleted`   tinyint(1) UNSIGNED ZEROFILL                            NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `parent_id` (`parent_id`) USING BTREE COMMENT '父级用户组ID',
    INDEX `code` (`code`) USING BTREE COMMENT '用户组CODE代码'
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '用户组'
  ROW_FORMAT = Dynamic;
```

2.用户组—用户表（user_group_user）
该表用来记录每个用户组下有哪些用户。

```sql
CREATE TABLE `user_group_user`
(
    `id`            bigint(20)                                             NOT NULL AUTO_INCREMENT COMMENT 'ID说',
    `user_group_id` bigint(20)                                             NULL DEFAULT NULL COMMENT '用户组ID',
    `user_id`       bigint(20)                                             NULL DEFAULT NULL COMMENT '用户ID',
    `created`       datetime(0)                                            NULL DEFAULT NULL COMMENT '创建时间',
    `creator`       varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人',
    `edited`        datetime(0)                                            NULL DEFAULT NULL COMMENT '修改时间',
    `editor`        varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '修改人',
    `deleted`       tinyint(1) UNSIGNED ZEROFILL                           NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `member_group_id` (`user_group_id`) USING BTREE COMMENT '用户组ID',
    INDEX `member_id` (`user_id`) USING BTREE COMMENT '用户ID',
    CONSTRAINT `user_group_user_ibfk_1` FOREIGN KEY (`user_group_id`) REFERENCES `user_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `user_group_user_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '用户组成员'
  ROW_FORMAT = Dynamic;
```

3.用户组—角色表（user_group_role）
该表用来记录每个用户组下拥有哪些用户角色。

```sql
CREATE TABLE `user_group_role`
(
    `id`            bigint(20)                                             NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `user_group_id` bigint(20)                                             NULL DEFAULT NULL COMMENT '用户组ID',
    `role_id`       bigint(20)                                             NULL DEFAULT NULL COMMENT '角色ID',
    `created`       datetime(0)                                            NULL DEFAULT NULL COMMENT '创建时间',
    `creator`       varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人',
    `edited`        datetime(0)                                            NULL DEFAULT NULL COMMENT '修改时间',
    `editor`        varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '修改人',
    `deleted`       tinyint(1) UNSIGNED ZEROFILL                           NULL DEFAULT 0 COMMENT '逻辑删除:0=未删除,1=已删除',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `member_group_id` (`user_group_id`) USING BTREE COMMENT '用户组ID',
    INDEX `role_id` (`role_id`) USING BTREE COMMENT '角色ID',
    CONSTRAINT `user_group_role_ibfk_1` FOREIGN KEY (`user_group_id`) REFERENCES `user_group` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    CONSTRAINT `user_group_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  CHARACTER SET = utf8
  COLLATE = utf8_general_ci COMMENT = '用户组角色'
  ROW_FORMAT = Dynamic;
```

每个系统主体用户，基本都占用了所有用户的 90% 以上（既包含用户，又包含商家的系统，用户和商家同时都是主题用户）。因此，每个用户注册时，基本只需要分配一条所属的用户组，即可完成角色权限的配置。这样处理后，数据量将从
10 亿下降至 1 亿多。同时也减少了用户注册时的需批量写入数量。

## RBAC权限模型优点

RBAC最大的优点之一是它提供了一种系统化的方法，用于定义和维护角色，使您能够仅根据用户需要一致地授予访问权限，从而降低数据泄露或数据丢失的风险。

但RBAC还有很多其他好处，包括：

* 通过根据人力资源属性自动为新员工分配访问权限来加速入职
* 简化IT管理工作，例如，通过在全球范围内跨多个平台和应用程序快速重新分配权限
* 改善对欧盟《一般数据保护规则》（GDPR）或美国《健康保险可移植性和责任法案》（HIPAA）等法规的遵守
* 通过为供应商和业务合作伙伴等外部用户提供预定义的角色来降低第三方风险
* 通过在角色更改时自动更新访问权限来维护“最低权限”的最佳实践
* 降低高级访问控制的成本，尤其是在大型复杂环境中

## RBAC权限模型缺陷

* 需要了解组织结构知识

没有一种一刀切的方法来定义角色。在决定如何对角色进行分类以及如何管理这些角色的访问权限时，组织必须跨部门协调。这需要清楚地了解组织的理想结构以及支持它的技术基础设施。

在大型或成长中的组织中，如果IT或安全经理需要在没有人力资源或执行决策者帮助的情况下定义角色，这可能是一项艰巨的任务，会变得更加困难。这种简化实施的常见尝试实际上使问题变得更糟，导致与公司更大的目标不一致。

* 需要深思熟虑的实施

分配角色可能是一项挑战。可能会出现很多问题，答案并不总是清晰的。例如：安全团队是否需要访问他们试图保护的数据，包含哪些访问权限（创建/读取/更新/删除）？是否应为用户分配部门之外的角色，以确保临时访问特权文件？

* 缺乏灵活性

RBAC以过于死板著称，这也难怪。组织成长，团队扩张，访问需求发生变化。在RBAC项目开始时定义的角色可能不再符合公司目标。

结果如何？人员的角色和权限级别可能不一致。例如，一个人可能被赋予过多的角色权限、分配过多的角色，或者两者兼而有之。虽然这些努力可能会起到快速修复的作用，但它们也会造成安全漏洞和法规遵从性挑战，从而打消了您最初实施RBAC的全部原因。

* 导致角色爆炸

一些团队试图通过定义越来越细粒度的角色、在出现新需求时创建临时角色，或将太多的角色分配给单个用户来回避上述问题。虽然这可能会在短期内缓解摩擦，但也会让RBAC变得混乱，难以管理。

这个问题通常被称为角色爆炸，是RBAC最常见的反对意见之一。当现实世界中的角色和访问需求与您的政策文件中概述的角色和访问需求不同时，甚至在很小的程度上也会出现这种情况。而作为临时解决方案创建的角色有时管理员可能会忘记或甚至故意选择保留这些角色，即使为其创建这些角色的人员离开或更换组织内的工作。结果是：特权蔓延和混乱。