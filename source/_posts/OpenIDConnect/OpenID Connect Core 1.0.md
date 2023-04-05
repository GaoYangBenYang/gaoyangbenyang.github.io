---
title: OpenID Connect Core 1.0
date: 2023-04-5 14:44:06
author: GaoYang
img:
summary: 
categories:
- OpenID Connect
tags:
- OpenID Connect Core 1.0
---
# 摘要
OpenID Connect 1.0是OAuth 2.0协议之上的一个简单的身份层。它使客户端能够根据授权服务器执行的身份验证来验证最终用户的身份，并以可互操作和类似rest的方式获得关于最终用户的基本概要信息。

该规范定义了核心OpenID Connect功能:建立在OAuth 2.0之上的身份验证，并使用声明来传递有关最终用户的信息。它还描述了使用OpenID Connect的安全和隐私注意事项。


# 1.  简介
OpenID Connect 1.0是OAuth 2.0 [RFC6749]协议之上的一个简单的身份层。它使客户端能够根据授权服务器执行的身份验证来验证最终用户的身份，并以可互操作和类似rest的方式获得关于最终用户的基本概要信息。

OpenID Connect核心1.0规范定义了核心OpenID Connect功能:建立在OAuth 2.0之上的身份验证和使用声明来传递关于最终用户的信息。它还描述了使用OpenID Connect的安全和隐私注意事项。

作为背景，OAuth 2.0授权框架[RFC6749]和OAuth 2.0无记名令牌使用[RFC6750]规范为第三方应用程序提供了一个通用框架，以获取和使用对HTTP资源的有限访问。它们定义了获取和使用访问令牌访问资源的机制，但没有定义提供标识信息的标准方法。值得注意的是，如果不分析OAuth 2.0，它就无法提供关于最终用户身份验证的信息。读者应该熟悉这些规范。

OpenID Connect将身份验证实现为OAuth 2.0授权过程的扩展。客户端通过在授权请求中包含openid范围值来请求使用此扩展。关于执行身份验证的信息以JSON Web令牌(JWT) [JWT]形式返回，称为ID令牌(参见第2节)。实现OpenID连接的OAuth 2.0身份验证服务器也被称为OpenID提供者(OPs)。使用OpenID连接的OAuth 2.0客户端也被称为依赖方(RPs)。

本规范假设依赖方已经获得了关于OpenID提供者的配置信息，包括其授权端点和令牌端点位置。此信息通常通过发现获得，如OpenID Connect Discovery 1.0 [OpenID. net]中所述。或可通过其他机制获得。

同样，本规范假设依赖方已经获得了足够的凭据，并提供了使用OpenID提供者所需的信息。这通常是通过动态注册完成的，如OpenID连接动态客户端注册1.0 [OpenID.Discovery]，或可通过其他机制获得。
## 1.1.  需求、符号和约定
本文中关键字“必须”、“必须不”、“要求”、“应当”、“不应当”、“应该”、“不应该”、“建议”、“不建议”、“可能”和“可选”("MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL")的解释请参见RFC2119 [RFC2119]。

在本文档的.txt版本中，值被引用，以表明它们将被字面理解。在协议消息中使用这些值时，引号绝对不能用作值的一部分。在本文档的HTML版本中，使用这种固定宽度的字体来指示字面上的值。

在本规范中，JSON Web签名(JWS) [JWS]和JSON Web加密(JWE) [JWE]数据结构的所有使用都利用了JWS紧凑序列化或JWE紧凑序列化;没有使用JWS JSON Serialization和JWE JSON Serialization。

## 1.2.  术语

本规范使用OAuth 2.0 [RFC6749]定义的术语“访问令牌”、“授权代码”、“授权端点”、“授权授权”、“授权服务器”、“客户端”、“客户端认证”、“客户端标识符”、“授权类型”、“受保护资源”、“重定向URI”、“刷新令牌”、“资源所有者”、“资源服务器”、“响应类型”和“令牌端点”，术语“声明名称”、“声明值”、“JSON Web令牌(JWT)”、“JWT声明集”。和由JSON Web令牌(JWT) [JWT]定义的“嵌套JWT”，由JSON Web签名(JWS) [JWS]定义的术语“报头参数”和“JOSE报头”，由RFC2616 [RFC2616]定义的术语“用户代理”，以及由OAuth 2.0多响应类型编码实践[OAuth. responses]定义的术语“响应模式”。

本规范还定义了以下术语:

Authentication (身份验证)

&emsp;&emsp;用于在实体和所呈现的身份之间实现足够信任的绑定的过程。


Authentication Request (身份验证请求)

&emsp;&emsp;OAuth 2.0授权请求，使用OpenID连接定义的扩展参数和作用域，请求授权服务器(OpenID连接提供者[OpenID Connect Provider])对客户端(OpenID连接依赖方[OpenID Connect Relying Party])进行身份验证。


Authentication Context (身份验证上下文)

&emsp;&emsp;依赖方(Relying Party)在对身份验证响应(authentication response)作出授权决定之前可能需要的信息。该上下文可以包括但不限于实际使用的认证方法或保证级别，例如ISO/IEC 29115 [ISO29115]实体认证保证级别。


Authentication Context Class (认证上下文类)

&emsp;&emsp;在特定上下文中被认为彼此等效的一组身份验证方法或过程。


Authentication Context Class Reference (认证上下文类引用)

&emsp;&emsp;身份验证上下文类的标识符。


Authorization Code Flow (授权码流)

&emsp;&emsp;OAuth 2.0流程，其中授权码从授权端点返回，所有令牌从令牌端点返回。


Authorization Request (授权请求)

&emsp;&emsp;OAuth 2.0授权请求[RFC6749]定义。


Claim (索赔)

&emsp;&emsp;关于一个实体的断言信息。


Claim Type (索赔类型)

&emsp;&emsp;用于表示索赔值的语法。该规范定义了正常、聚合和分布式索赔类型。


Claims Provider (要求供应商)

&emsp;&emsp;可以返回关于实体的声明的服务器。


Credential (凭证)

&emsp;&emsp;作为使用身份或其他资源的权利的证据的数据。


End-User (终端用户)

&emsp;&emsp;人类的参与者。


Entity (实体)

&emsp;&emsp;事物:具有独立的、独特的存在并能在某一语境中被识别的事物.终端用户是实体的一个例子。


Essential Claim (基本要求)

&emsp;&emsp;客户端指定为确保最终用户请求的特定任务的顺利授权体验所必需的声明。



Hybrid Flow (混合流)

&emsp;&emsp;OAuth 2.0流程，其中从授权端点返回授权代码，从授权端点返回一些令牌，从令牌端点返回其他令牌。


ID Token (标识牌)

&emsp;&emsp;JSON Web令牌(JWT) [JWT]，包含关于身份验证事件的声明。它可能包含其他权利要求。


Identifier (标识符)

&emsp;&emsp;该值在特定上下文中唯一地表征一个实体。


Identity (身份)

&emsp;&emsp;与实体相关的属性集。


Implicit Flow (隐式流)

&emsp;&emsp;OAuth 2.0流，其中所有令牌都从授权端点返回，既不使用令牌端点也不使用授权代码。

发行人
Issuer

&emsp;&emsp;发布一组Claims的实体。
Entity that issues a set of Claims.

发行者标识符
Issuer Identifier

&emsp;&emsp;颁发者的可验证标识符。
Verifiable Identifier for an Issuer.

&emsp;&emsp;发布者标识符是一个大小写敏感的URL，使用https方案，包含方案、主机和可选的端口号和路径组件，没有查询或片段组件。
An Issuer Identifier is a case sensitive URL using the https scheme that contains scheme, host, and optionally, port number and path components and no query or fragment components.

消息
Message

&emsp;&emsp;OpenID依赖方和OpenID提供者之间的请求或响应。
Request or a response between an OpenID Relying Party and an OpenID Provider.

OpenID提供者(OP)
OpenID Provider (OP)

&emsp;&emsp;OAuth 2.0授权服务器，能够对最终用户进行身份验证，并向依赖方提供关于身份验证事件和最终用户的声明。
OAuth 2.0 Authorization Server that is capable of Authenticating the End-User and providing Claims to a Relying Party about the Authentication event and the End-User.

请求对象
Request Object

包含一组请求参数作为声明的JWT。
&emsp;&emsp;JWT that contains a set of request parameters as its Claims.

请求URI
Request URI

引用包含请求对象的资源的URL。
&emsp;&emsp;URL that references a resource containing a Request Object.

请求URI内容必须能被授权服务器检索到。
The Request URI contents MUST be retrievable by the Authorization Server.

成对假名标识符(PPID)
Pairwise Pseudonymous Identifier (PPID)

&emsp;&emsp;向依赖方标识实体的标识符，该标识符不能与实体在另一个依赖方的PPID相关联。
Identifier that identifies the Entity to a Relying Party that cannot be correlated with the Entity's PPID at another Relying Party.

个人身份资料(PII)
Personally Identifiable Information (PII)

&emsp;&emsp;(a)可用于识别与该等信息相关的自然人的信息，或(b)与该等信息相关的自然人直接或间接相关的信息。
Information that (a) can be used to identify the natural person to whom such information relates, or (b) is or might be directly or indirectly linked to a natural person to whom such information relates.

依赖方(RP)
Relying Party (RP)

&emsp;&emsp;OAuth 2.0客户端应用程序需要终端用户身份验证和来自OpenID提供者的声明。
OAuth 2.0 Client application requiring End-User Authentication and Claims from an OpenID Provider.

企业标识符
Sector Identifier

&emsp;&emsp;依赖方的组织使用的URL的主机组件，作为依赖方的成对主题标识符计算的输入。
Host component of a URL used by the Relying Party's organization that is an input to the computation of pairwise Subject Identifiers for that Relying Party.

自发OpenID提供者
Self-Issued OpenID Provider

&emsp;&emsp;发布自签名ID令牌的个人的、自托管的OpenID提供者。
Personal, self-hosted OpenID Provider that issues self-signed ID Tokens.

对象标识符
Subject Identifier

&emsp;&emsp;在颁发者中为最终用户在本地唯一且从未重新分配的标识符，该标识符将被客户端使用。
Locally unique and never reassigned identifier within the Issuer for the End-User, which is intended to be consumed by the Client.

用户信息端点
UserInfo Endpoint

&emsp;&emsp;受保护的资源，当客户端向其提供访问令牌时，返回有关由相应授权授予表示的最终用户的授权信息。
Protected Resource that, when presented with an Access Token by the Client, returns authorized information about the End-User represented by the corresponding Authorization Grant.

&emsp;&emsp;UserInfo端点URL必须使用https方案，并且可以包含端口、路径和查询参数组件。
The UserInfo Endpoint URL MUST use the https scheme and MAY contain port, path, and query parameter components.

验证
Validation

&emsp;&emsp;旨在建立一个结构的健全性或正确性的过程。
Process intended to establish the soundness or correctness of a construct.

验证
Verification

&emsp;&emsp;检验:旨在检验或证明事实或价值的真实性或准确性的过程
Process intended to test or prove the truth or accuracy of a fact or value.

自愿要求
Voluntary Claim

&emsp;&emsp;客户指定的声明对于最终用户要求的特定任务是有用的，但不是必要的。
Claim specified by the Client as being useful but not Essential for the specific task requested by the End-User.


## 1.3.  概述

# 2.  标识牌(ID Token)

# 3.身份验证

## 3.1.  使用授权代码流进行身份验证

### 3.1.1.  授权码流步骤

### 3.1.2.  授权端点

#### 3.1.2.1.  身份验证请求
#### 3.1.2.2.  验证请求验证
#### 3.1.2.3.  授权服务器对最终用户进行认证
#### 3.1.2.4.  授权服务器获得最终用户同意/授权
#### 3.1.2.5.  认证响应成功
#### 3.1.2.6.  认证错误响应
#### 3.1.2.7.  验证响应验证
### 3.1.3.  令牌端点
#### 3.1.3.1.  令牌的请求
#### 3.1.3.2.  令牌请求验证
#### 3.1.3.3.  Token成功响应
#### 3.1.3.4.  令牌错误响应
#### 3.1.3.5.  令牌响应验证
#### 3.1.3.6.  标识牌
#### 3.1.3.7.  ID令牌验证
#### 3.1.3.8.  访问令牌验证
## 3.2.  使用隐式流进行身份验证
### 3.2.1.  隐式流程步骤
### 3.2.2.  授权端点
#### 3.2.2.1.  身份验证请求
#### 3.2.2.2.  验证请求验证
#### 3.2.2.3.  授权服务器对最终用户进行认证
#### 3.2.2.4.  授权服务器获得最终用户同意/授权
#### 3.2.2.5.  认证响应成功
#### 3.2.2.6.  认证错误响应
#### 3.2.2.7.  重定向URI片段处理
#### 3.2.2.8.  验证响应验证
#### 3.2.2.9.  访问令牌验证
#### 3.2.2.10.  标识牌
#### 3.2.2.11.  ID令牌验证
## 3.3.  使用混合流进行身份验证
### 3.3.1.  混合流程步骤
### 3.3.2.  授权端点
#### 3.3.2.1.  身份验证请求
#### 3.3.2.2.  验证请求验证
#### 3.3.2.3.  授权服务器对最终用户进行认证
#### 3.3.2.4.  授权服务器获得最终用户同意/授权
#### 3.3.2.5.  认证响应成功
#### 3.3.2.6.  认证错误响应
#### 3.3.2.7.  重定向URI片段处理
#### 3.3.2.8.  验证响应验证
#### 3.3.2.9.  访问令牌验证
#### 3.3.2.10.  授权码验证
#### 3.3.2.11.  标识牌
#### 3.3.2.12.  ID令牌验证
### 3.3.3.  令牌端点
#### 3.3.3.1.  令牌的请求
#### 3.3.3.2.  令牌请求验证
#### 3.3.3.3.  Token成功响应
#### 3.3.3.4.  令牌错误响应
#### 3.3.3.5.  令牌响应验证
#### 3.3.3.6.  标识牌
#### 3.3.3.7.  ID令牌验证
#### 3.3.3.8.  访问令牌
#### 3.3.3.9.  访问令牌验证
# 4.  从第三方发起登录
# 5.  索赔
## 5.1.  标准要求
### 5.1.1.  解决索赔
### 5.1.2.  额外的要求
## 5.2.  索赔语言和脚本
## 5.3.  用户信息端点
### 5.3.1.  用户信息请求
### 5.3.2.  UserInfo成功响应
### 5.3.3.  UserInfo错误响应
### 5.3.4.  UserInfo响应验证
## 5.4.  使用范围值请求声明
## 5.5.  使用" Claims "请求参数请求索赔
### 5.5.1.  个别索偿申请
#### 5.5.1.1.  请求“acr”索赔
### 5.5.2.  个人索赔的语言和脚本
## 5.6.  索赔类型
### 5.6.1.  正常的索赔
### 5.6.2.  聚合和分布式索赔
#### 5.6.2.1.  综合申索的例子
#### 5.6.2.2.  分布式索赔示例
## 5.7.  索赔稳定性和唯一性
# 6.  将请求参数作为jwt传递
## 6.1.  按值传递请求对象
### 6.1.1.  使用" Request "请求参数请求
## 6.2.  通过引用传递请求对象
### 6.2.1.  URL引用请求对象
### 6.2.2.  使用“request_uri”请求参数请求
### 6.2.3.  授权服务器获取请求对象
### 6.2.4.  “request_uri”原理
## 6.3.  验证基于jwt的请求
### 6.3.1.  加密请求对象
### 6.3.2.  已签名请求对象
### 6.3.3.  请求参数组装和验证
# 7.  自发OpenID提供者
## 7.1.  自发OpenID提供者发现
## 7.2.  自发OpenID提供者注册
### 7.2.1.  使用“注册”请求参数提供信息
## 7.3.  自发OpenID提供者请求
## 7.4.  自发OpenID提供者响应
## 7.5.  自发ID令牌验证
# 8.  主题标识符类型
## 8.1.  成对标识算法
# 9.  客户端身份验证
# 10.   签名与加密
## 10.1.  签署
### 10.1.1.  旋转非对称签名密钥
## 10.2.  加密
### 10.2.1.