---
layout: doc
sidebar: false
---

## 1 介绍

JSON Web Token，简称 JWT（"jot"），是在空间受限的环境中安全传递请求的标准。它已进入所有主要的网络框架。简洁、紧凑和可用性是其架构的主要特点。尽管更复杂的系统仍在使用，但
JWT 的应用范围非常广泛。在这本小手册中，我们将介绍 JWT 架构最重要的方面，包括其二进制表示法和用于构建 JWT 的算法，同时还将介绍 JWT 在行业中的常用方法。

### 1.1 什么是JSON Web Token?

JSON Web Token的外观如下（为便于阅读插入了换行符）

    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.
    TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ

虽然这看起来像胡言乱语，它实际上是一个非常紧凑的，一系列Claims的打印表示，连同Signatures以验证其真实性。

```json
{
  "alg": "HS256",
  "typ": "JWT"
}

{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}

```

Claims是对某一方或某一对象的定义或断言。其中一些声明及其含义是JWT规范的一部分。其他由用户定义。JWT
背后的神奇之处在于，它将某些在某些常见操作中非常有用的声明标准化了。例如，这些常见操作之一是确定某些当事人的身份。因此，JWT
中的一个标准说法是sub(subject),我们将在第3章深入探讨每种标准claims。
JWT 的另一个关键点是可以对其进行Signatures,使用JSON Web Signatures(JWS,RFC 75156)对它们进行Signatures或使用JSON Web Encryption(JWE, RFC
75167)对它们进行加密的可能性。jwt与JWS和JWE一起，为许多不同的问题提供了强大、安全的解决方案。

## 1.2 它解决了什么问题?

虽然 JWT 的主要目的是在双方之间传输请求，但可以说其中最重要的方面是以一种简单、可选择验证或加密的容器格式的形式进行标准化工作。过去，人们曾私下或公开地实施过针对同一问题的特别解决方案。此外，还有一些较早的标准，用于建立对某些当事人的声明。JWT
带来的是一种简单、实用的标准容器格式。
虽然目前给出的定义有点抽象，但不难想象它们可以如何使用：登录系统（当然也可能有其他用途）。我们将在第 2 章中进一步探讨实际应用。其中一些应用包括:
• Authentication
• Authorization
• Federated identity
• Client-side sessions (“stateless” sessions)
• Client-side secrets

## 2 实际应用(大致翻译未完成)

在深入了解 JWT 的结构和构造之前，我们先来看看几个实际应用。本章将让您了解目前业界常用的基于 JWT
的解决方案的复杂性（或简单性）。为方便起见，所有代码均可从[公共存储库](https://github.com/auth0/jwt-handbook-samples)
中获取。请注意，以下演示并非用于生产。测试用例、日志记录和安全最佳实践都是生产就绪代码所必需的。这些示例仅用于教育目的,因此保持简单扼要。

### 2.1 Client-side/Stateless Sessions

所谓的Stateless Sessions实际上只不过是客户端数据。这种应用的关键在于使用Signatures和可能的加密来验证和保护会话内容。客户端数据容易被篡改。因此，后端必须非常小心地处理这些数据。

JWT 通过 JWS 和 JWE 可以提供各种类型的Signatures和加密。Signatures用于验证数据是否被篡改。加密有助于保护数据不被第三方读取

大多数情况下，Sessions只需要Signatures。换句话说，当存储在其中的数据被第三方读取时，没有任何安全或隐私问题。通常可以由第三方安全地阅读的权利要求的一个常见示例是sub要求(
“subject”)。主题声明通常将一方识别为另一方(想想用户id或电子邮件)。这并不要求声明是唯一的。换句话说，可能需要额外的声明来唯一地标识用户。这是留给用户决定的。
一个可能不宜公开的权利要求可能是代表用户购物车的 "物品 "权利要求。购物车中可能装满了用户即将购买的物品，因此与用户的会话相关联。如果这些物品存储在未加密的
JWT 中，第三方（客户端脚本）可能会获取这些物品，从而引发隐私问题。

## 3 JSON Web Token 详解

如第 1 章所述，所有 JWT 都由三个不同的元素构成：头、有效载荷和Signatures/加密数据。前两个元素是具有特定结构的 JSON
对象。第三个元素取决于用于Signatures或加密的算法，如果是未加密的 JWT，则省略。JWT 可以用一种称为 JWS/JWE 紧凑序列化的紧凑表示法进行编码。
> JWS 和 JWE 规范定义了第三种序列化格式，即 JSON 序列化，这是一种非紧凑型表示法，允许在同一个 JWT 中使用多个Signatures或接收方。第 4 章和第 5
> 章对此有详细解释。

紧凑型序列化是对前两个 JSON 元素（标头和有效载荷）的 UTF-8 字节以及Signatures或加密数据（本身不是 JSON 对象）的 Base64 URL 安全编码。这些数据也是
Base64-URL 编码。这三个元素之间用点（"."）隔开。
> JWT 使用对 URL 安全的 Base64 编码变体。这种编码基本上是用 "+"和"/"字符分别代替"-"和"_"字符。同时也去掉了填充。这种变体被称为 base64url
> 。请注意，本文档中所有对 Base64 编码的引用都是指这种变体。

生成的序列是一个可打印的字符串，如下所示（为了便于阅读，插入了换行符）：

```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

请注意分隔 JWT 三个元素的圆点（按顺序：报头、有效载荷和Signatures）。

在本例中，解码后的报文头(header)为:

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

解码后的有效载荷(payload)为:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

而验证Signatures所需的密钥(secret)是保密的。

### 3.1 The Header

每个 JWT 都带有一个header（也称为 JOSE header），其中包含对自身的声明。这些声明确定了所使用的算法、JWT 是否已Signatures或加密，以及一般情况下如何解析
JWT 的其余部分。
根据有关 JWT 的类型，标头中可能有更多字段是必填的。例如，加密 JWT 包含密钥加密和内容加密所用加密算法的信息。未加密的 JWT 则没有这些字段。
未加密 JWT header的唯一强制声明是算法声明：

* alg：用于签署或解密此 JWT 的主要算法。

对于未加密的 JWT，该声明的值必须设为 none。

可选的header声明包括 typ 和 cty 声明：

* typ：JWT 本身的媒体类型。该参数仅用于帮助 JWT 与携带 JOSE header 的其他对象混合使用。实际上，这种情况很少发生。如果存在，则应将其设置为 JWT 的值
* cty：内容类型。大多数 JWT 的有效载荷(payload)都包含特定声明和任意数据。在这种情况下，不得设置内容类型声明。对于有效载荷本(payload)身就是 JWT（嵌套
  JWT）的情况，则必须存在该声明并携带 JWT 值。这就告诉实现者需要进一步处理嵌套的 JWT。嵌套 JWT 很少见，因此头中很少会出现 cty 声明。

因此，对于未加密的 JWT header 的内容很简单：

```json
{
  "alg": "none"
}
```

编码为:
> eyJhbGciOiJub25lIn0
>> 可以在标头中添加用户定义的附加声明。这通常用处有限，除非在解密前的加密 JWT 中需要某些特定于用户的元数据。

### 3.2 The Payload

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

有效载荷(Payload)通常是添加用户数据的元素。此外，规范中定义的某些声明也可能出现在其中。与标头(Header)一样，有效载荷(Payload)也是一个 JSON
对象。尽管特定声明有明确的含义，但没有任何声明是强制性的。JWT 规范规定，实施不理解的主张应被忽略。具有特定含义的声明称为注册声明。

#### 3.2.1 Registered Claims

- iss：来自单词 issuer。一个区分大小写的字符串或 URI，用于唯一标识 JWT 的签发方。它的解释与应用程序有关（没有管理签发方的中央机构）。
- sub：来自 subject（主题）一词。一个区分大小写的字符串或 URI，用于唯一标识该 JWT 所含信息的相关方。换句话说，该 JWT 中包含的权利要求是关于该方的声明。JWT
  规范规定，在签发方的上下文中，该权利要求必须是唯一的，如果无法做到这一点，则必须是全球唯一的。该声明的处理与应用程序有关。
- aud：来自 audience 一词。可以是单个区分大小写的字符串或 URI，也可以是此类值的数组，用于唯一标识此 JWT 的预期收件人。换句话说，当出现这种说法时，读取此
  JWT 中数据的一方必须在 aud 说法中找到自己或忽略 JWT 中包含的数据。与 iss 和 sub 权利要求一样，该权利要求也是针对特定应用的。
- exp：取自 expiration（时间）一词。一个代表特定日期和时间的数字，格式为 POSIX 所定义的 "自纪元起的秒数"。这一说法设定了该 JWT
  被视为无效的确切时间。某些实现可能会允许时钟之间存在一定的偏差（认为 JWT 在过期日期后的几分钟内有效）。
- nbf：从非之前（时间）开始。与 exp 声明相反。根据 POSIX 的定义，以 "自纪元起的秒数 "格式表示特定日期和时间的数字。该声明设定了该 JWT
  被视为有效的确切时间。当前时间和日期必须等于或晚于该日期和时间。某些实现可能允许一定的偏差。
- iat：来自发布时间（时间）。代表该 JWT 发布的具体日期和时间的数字（格式与 exp 和 nbf 相同）。
- jti：来自 JWT ID。代表此 JWT 唯一标识符的字符串。该标识可用于区分具有其他类似内容的 JWT（例如防止重放）。能否保证唯一性取决于实施。

您可能已经注意到，所有名称都很短。这符合设计要求之一：使 JWT 尽可能小。
> 字符串或 URI：根据 JWT 规范，URI 被解释为包含:字符的任何字符串。有效值的提供取决于实现。

### 3.2.2 Public and Private Claims

所有不属于已注册Claims部分的Claims都属于私人Claims或公共Claims。

- 私人Claims：是由 JWT 用户（消费者和生产者）定义的要求。换句话说，这些是用于特定情况的特殊要求。因此，必须注意防止碰撞。

- 公共Claims：是指在[IANA JSON Web Token Claims](https://tools.ietf.org/html/rfc7519#section-10.1)
  注册（用户可在此注册其Claims，从而防止碰撞）注册的Claims，或使用抗碰撞名称（例如，在名称前加上命名空间）命名的权利要求。

实际上，大多数申请要么是注册申请，要么是私人申请。一般来说，大多数 JWT 的发布都有特定的目的和明确的潜在用户。这样，挑选抗碰撞名称的工作就变得简单了。

正如在 JSON 解析规则中一样，重复请求（重复的 JSON 键）的处理方法是只保留最后出现的有效请求。JWT 规范还允许实现将重复声明的 JWT
视为无效。在实践中，如果您不确定将处理您的 JWT 的实现，请注意避免重复声明。

### 3.3 不安全的JWT

根据我们目前所学到的知识，可以构建不安全的 JWT。这是最简单的 JWT，由一个简单（通常是静态）的标头组成：

```json
{
  "alg": "none"
}
```

和用户定义的有效载荷。例如

```json
{
  "sub": "user123",
  "session": "ch72gsb320000udocl363eofy",
  "name": "Pretty Name",
  "lastpage": "/views/settings"
}
```

由于没有Signatures或加密，该 JWT 编码为简单的两个元素（为便于阅读插入了换行符）：

```json
eyJhbGciOiJub25lIn0.
eyJzdWIiOiJ1c2VyMTIzIiwic2Vzc2lvbiI6ImNoNzJnc2IzMjAwMDB1ZG9jbDM2M
2VvZnkiLCJuYW1lIjoiUHJldHR5IE5hbWUiLCJsYXN0cGFnZSI6Ii92aWV3cy9zZXR0aW5ncyJ9.
```

像上图这样不安全的 JWT 可能适合客户端使用。例如，如果Session ID
是一个难以猜测的数字，而其余数据仅用于客户端构建视图，那么使用Signatures就是多余的。单页面网络应用程序可以使用这些数据为用户构建一个具有 "
漂亮 "名称的视图，而不会在用户被重定向到上次访问的页面时对后台造成影响。即使恶意用户修改了这些数据，也不会得到任何好处。
> 注意紧凑表示法中的尾点（.）。由于没有Signatures，它只是一个空字符串。但仍添加了点。

但实际上，不安全的 JWT 并不多见。

### 3.4 编码不安全的JWT

要从header和payload的 JSON 版本得出紧凑的表示，请执行以下步骤：

1. 将header作为其 UTF-8 表示形式的字节数组。JWT 规范不要求在编码前对 JSON 进行精简或去除无意义的字符（如空白）。
2. 使用 Base64-URL 算法对字节数组进行编码，去掉尾部的等号 (=)。
3. 将payload作为其 UTF-8 表示形式的字节数组。JWT 规范不要求在编码前对 JSON 进行精简或去除无意义字符（如空白）。
4. 使用 Base64-URL 算法对字节数组进行编码，去掉尾部的等号 (=)。
5. 将生成的字符串连接起来，首先是header，然后是"."字符，最后是payload。

在编码之前，必须对header和payload进行验证（验证是否存在所需的Claims以及是否正确使用了每项Claims）。

### 3.5 解码不安全的JWT

要从紧凑的序列化形式得到 JSON 表示形式，请执行以下步骤：

1. 找到第一个句点". "字符。
2. 使用 Base64-URL 算法解码字符串。结果就是 JWT header。
3. 取步骤 1 中句号之后的字符串。
4. 使用 Base64-URL 算法对字符串进行解码。结果就是 JWT payload。

可以根据需要添加空白，对生成的 JSON 字符串进行 "修饰"。

## 4 JSON Web Signatures

JSON Web Signatures可能是 JWT 最有用的功能。通过将简单的数据格式与一系列定义明确的Signatures算法相结合，JWT 正迅速成为客户端与中间人之间安全共享数据的理想格式。

Signatures的目的是让一方或多方确定 JWT 的真实性。这里的真实性是指 JWT 中包含的数据未被篡改。换句话说，任何可以进行Signatures检查的一方都可以信赖
JWT 提供的内容。需要强调的是，Signatures并不能阻止其他方读取 JWT 中的内容。这正是加密的目的所在，我们将在第 5 章的后面部分谈到这一点。

检查 JWT Signatures的过程称为验证或验证令牌。当header和payload中指定的所有限制都得到满足时，该令牌就被认为是有效的。这是 JWT 的一个非常重要的方面：实现者必须检查
JWT，直至其header和payload（以及用户要求的任何内容）都符合要求为止。因此，即使 JWT 没有Signatures（如果header的算法声明设置为none），它也可能被认为是有效的。此外，即使
JWT 具有有效Signatures，也可能因其他原因而被视为无效（例如，根据过期声明，它可能已经过期）。针对已签名 JWT 的一种常见攻击方式是剥离签名，然后更改标头，使其成为不安全的
JWT。用户有责任确保根据自己的要求验证 JWT

### 4.1 已签名 JWT 的结构

我们在第 3 章中介绍了 JWT 的结构。在此，我们将对其进行回顾，并特别注意其签名组件
已签名的 JWT 由三个元素组成：header、payload和signature（为便于阅读插入了换行符）：

```json
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.
TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

解码和解码前两个元素（header和payload）的过程与不安全的 JWT 相同。算法和示例代码见第 3 章末尾。

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

不过，已签名的 JWT 还带有一个附加元素：signature。该元素出现在紧凑序列化形式中最后一个点（.）之后。根据 JWS
规范，有多种类型的签名算法可供选择，因此这些八进制数的解释方式也各不相同。JWS 规范要求所有符合该规范的实现都必须支持一种算法：

* 使用 SHA-256 的 HMAC，在 JWA 规范中称为 HS256

该规范还定义了一系列推荐算法:

* 使用 SHA-256 的 RSASSA PKCS1 v1.5，在 JWA 规范中称为 RS256。
* ECDSA 使用 P-256 和 SHA-256，在 JWA 规范中称为 ES256。
  > JWA 是 JSON Web 算法规范，RFC 75182

第 7 章将详细介绍这些算法。在本章中，我们将重点讨论这些算法的实际使用问题.

规范支持的其他可选算法包括:

* HS384、HS512：HS256 算法的 SHA-384 和 SHA-512 变体。
* RS384、RS512：RS256 算法的 SHA-384 和 SHA-512 变体。
* ES384、ES512：ES256 算法的 SHA-384 和 SHA-512 变体。
* PS256、PS384、PS512：RSASSA-PSS + MGF1 与 SHA256/384/512 变体。

从本质上讲，这些都是所需和推荐的三种主要算法的变体。这些缩写词的含义将在第 7 章中更加清晰。

### 4.1.1 紧凑序列化算法概述

为了从总体上讨论这些算法，让我们先在 JavaScript环境中定义一些函数：

* base64：使用 Base64-URL 算法接收一个八进制数组并返回一个新的八进制数组的函数。
* utf8：该函数接收任意编码的文本，并返回UTF-8编码的八进制数组。
* JSON.stringify：一个接收 JavaScript 对象并将其序列化为字符串形式（JSON）的函数。
* sha256：该函数使用 SHA-256 算法获取一个八进制数组并返回一个新的八进制数组。
* hmac：该函数使用 HMAC 算法，接收一个 SHA 函数、一个八进制数组和一个密文，并返回一个新的八进制数组。
* rsassa：使用 RSASSA 算法，获取 SHA 函数、八进制数组和私钥并返回新八进制数组的函数。

适用于基于 HMAC 的签名算法：

```javascript
const encodedHeader = base64(utf8(JSON.stringify(header)));
const encodedPayload = base64(utf8(JSON.stringify(payload)));
const signature = base64(hmac(`${encodedHeader}.${encodedPayload}`,
    secret, sha256));
const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;
```

对于公钥签名算法：

```javascript
const encodedHeader = base64(utf8(JSON.stringify(header)));
const encodedPayload = base64(utf8(JSON.stringify(payload)));
const signature = base64(rsassa(`${encodedHeader}.${encodedPayload}`,
    privateKey, sha256));
const jwt = `${encodedHeader}.${encodedPayload}.${signature}`;
```

![]()
这些算法的全部细节见第 7 章。

### 4.1.2 签名算法的实用性

所有签名算法的目的都是一样的：提供一种方法来确定 JWT 所含数据的真实性。它们的实现方式各有不同。
密钥散列消息验证码（HMAC）是一种使用加密散列函数将特定有效载荷与秘密结合起来的算法。其结果是，只有在生成方和验证方都知道秘密的情况下，才能使用该代码验证信息。换句话说，HMAC
允许通过共享秘密来验证信息。
HS256 是最常用的 JWT 签名算法，其中使用的加密散列函数是 SHA-256。第 7 章将详细解释
SHA-256。加密散列函数接收任意长度的信息，并产生固定长度的输出。相同的信息将始终产生相同的输出。散列函数的加密部分确保从函数输出中恢复原始信息在数学上是不可行的。因此，加密散列函数是一种单向函数，可用于识别信息而无需实际共享信息。信息的细微变化（例如一个字节）都会产生完全不同的输出。
RSASSA 是 RSA 算法 （在第 7 章中解释）的一种变体，适用于签名。RSA
是一种公钥算法。公钥算法生成两个密钥：一个公钥和一个私钥。在这种特定的算法变体中，私人密钥既可用于创建签名信息，也可用于验证其真实性。而公钥只能用来验证信息的真实性。因此，这种方案允许一对多信息的安全分发。接收方可以通过保存一份与信息相关的公开密钥副本来验证信息的真实性，但不能用它创建新信息。这与
HMAC 等共享密钥签名方案有不同的使用场景。使用 HMAC +
SHA-256，任何可以验证信息的一方也可以创建新信息。例如，如果合法用户变成了恶意用户，他或她就可以修改信息而不被其他方察觉。而使用公钥方案，恶意用户只能拥有自己的公钥，因此无法用它创建新的签名信息。
![]()

公钥加密允许其他使用场景。例如，使用同一种 RSA 算法的变体，就可以用公钥加密信息。只有使用私人密钥才能解密这些信息。这样就可以构建一个多对一的安全通信通道。这种变体用于加密
JWT，在***<div id="chapter5"></div>***
椭圆曲线数字签名算法（ECDSA）是 RSA 的替代算法。该算法也生成一对公钥和私钥，但其背后的数学原理不同。与 RSA 相比，ECDSA 算法对硬件的要求更低，但却能提供类似的安全保证。
我们将在第 7 章详细研究这些算法。

### 4.1.3  JWS Header Claims

JWS 允许在特殊用例中强制标头携带更多声明。例如，对于公钥签名算法，就有可能将公钥的 URL 嵌入到声明中。下面是 JWS 标记可用的已注册标头声明列表。所有这些权利要求都是不安全
JWT 可用权利要求的补充，可根据已签名 JWT 的使用方式选择是否使用。