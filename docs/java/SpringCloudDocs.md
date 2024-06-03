## 1.SpringCloud简介

# Spring Cloud Alibaba

## 1.服务注册和配置 Nacos

## 负载均衡 Spring Cloud Ribbon

## 2.服务调用 Fegin(支持Ribbon)

## 3.服务容错 Sentinel

    隔离 超时 限流 熔断 降级

## 4.服务网关 Gateway

## 4.分布式事务 Seata

## 5.分布式消息 RocketMQ

## 6.异构服务 Sidecar

## 7.静态编译 GraalVM

### Spring Cloud Alibaba pom.xml配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.5</version>
    </parent>

    <groupId>com.gaoyang.marshall</groupId>
    <artifactId>marshall-api</artifactId>
    <version>0.0.1</version>

    <properties>
        <java.version>21</java.version>
    </properties>

    <packaging>pom</packaging>

    <modules>
        <module>marshall-common</module>
        <module>marshall-gateway</module>
        <module>marshall-service-user</module>
    </modules>

    <dependencyManagement>
        <dependencies>
            <!--版本管理-->
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>2022.0.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>2022.0.0.0</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <image>
                        <builder>paketobuildpacks/builder-jammy-base:latest</builder>
                    </image>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.gaoyang.marshall</groupId>
        <artifactId>marshall-api</artifactId>
        <version>0.0.1</version>
    </parent>

    <artifactId>marshall-service-user</artifactId>
    <version>0.0.1</version>

    <description>用户模块</description>

    <dependencies>

        <dependency>
            <groupId>com.gaoyang.marshall</groupId>
            <artifactId>marshall-common</artifactId>
            <version>0.0.1</version>
        </dependency>

        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
        <!--feign-->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-openfeign</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-loadbalancer</artifactId>
        </dependency>
        <!---->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>3.0.2</version>
        </dependency>
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <version>8.1.0</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.10</version>
        </dependency>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter-test</artifactId>
            <version>3.0.2</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.30</version>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>fastjson</artifactId>
            <version>2.0.32</version>
        </dependency>
    </dependencies>
</project>

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.gaoyang.marshall</groupId>
        <artifactId>marshall-api</artifactId>
        <version>0.0.1</version>
    </parent>
    <artifactId>marshall-gateway</artifactId>
    <version>0.0.1</version>
    <description>网关服务</description>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-gateway</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
        </dependency>
    </dependencies>

</project>

```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"
         xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-openfeign</artifactId>
        <version>4.0.4</version>
        <relativePath>..</relativePath>
    </parent>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
    <version>4.0.4</version>
    <name>Spring Cloud Starter OpenFeign</name>
    <description>Spring Cloud Starter OpenFeign</description>
    <url>https://projects.spring.io/spring-cloud</url>
    <organization>
        <name>Pivotal Software, Inc.</name>
        <url>https://www.spring.io</url>
    </organization>
    <licenses>
        <license>
            <name>Apache License, Version 2.0</name>
            <url>https://www.apache.org/licenses/LICENSE-2.0</url>
            <comments>Copyright 2014-2021 the original author or authors.

                Licensed under the Apache License, Version 2.0 (the "License");
                you may not use this file except in compliance with the License.
                You may obtain a copy of the License at

                https://www.apache.org/licenses/LICENSE-2.0

                Unless required by applicable law or agreed to in writing, software
                distributed under the License is distributed on an "AS IS" BASIS,
                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
                implied.

                See the License for the specific language governing permissions and
                limitations under the License.
            </comments>
        </license>
    </licenses>
    <developers>
        <developer>
            <id>dsyer</id>
            <name>Dave Syer</name>
            <email>dsyer at pivotal.io</email>
            <organization>Pivotal Software, Inc.</organization>
            <organizationUrl>https://www.spring.io</organizationUrl>
            <roles>
                <role>lead</role>
            </roles>
        </developer>
        <developer>
            <id>sgibb</id>
            <name>Spencer Gibb</name>
            <email>sgibb at pivotal.io</email>
            <organization>Pivotal Software, Inc.</organization>
            <organizationUrl>https://www.spring.io</organizationUrl>
            <roles>
                <role>lead</role>
            </roles>
        </developer>
        <developer>
            <id>mgrzejszczak</id>
            <name>Marcin Grzejszczak</name>
            <email>mgrzejszczak at pivotal.io</email>
            <organization>Pivotal Software, Inc.</organization>
            <organizationUrl>https://www.spring.io</organizationUrl>
            <roles>
                <role>developer</role>
            </roles>
        </developer>
        <developer>
            <id>rbaxter</id>
            <name>Ryan Baxter</name>
            <email>rbaxter at pivotal.io</email>
            <organization>Pivotal Software, Inc.</organization>
            <organizationUrl>https://www.spring.io</organizationUrl>
            <roles>
                <role>developer</role>
            </roles>
        </developer>
        <developer>
            <id>omaciaszeksharma</id>
            <name>Olga Maciaszek-Sharma</name>
            <email>omaciaszeksharma at pivotal.io</email>
            <organization>Pivotal Software, Inc.</organization>
            <organizationUrl>https://www.spring.io</organizationUrl>
            <roles>
                <role>developer</role>
            </roles>
        </developer>
    </developers>
    <scm>
        <connection>scm:git:git://github.com/spring-cloud/spring-cloud-openfeign.git/spring-cloud-starter-openfeign</connection>
        <developerConnection>scm:git:ssh://git@github.com/spring-cloud/spring-cloud-openfeign.git/spring-cloud-starter-openfeign
        </developerConnection>
        <url>https://github.com/spring-cloud/spring-cloud-openfeign</url>
    </scm>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter</artifactId>
            <version>4.0.4</version>
            <scope>compile</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-openfeign-core</artifactId>
            <version>4.0.4</version>
            <scope>compile</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-web</artifactId>
            <version>6.0.11</version>
            <scope>compile</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-commons</artifactId>
            <version>4.0.4</version>
            <scope>compile</scope>
        </dependency>
        <dependency>
            <groupId>io.github.openfeign</groupId>
            <artifactId>feign-core</artifactId>
            <version>12.4</version>
            <scope>compile</scope>
        </dependency>
        <dependency>
            <groupId>io.github.openfeign</groupId>
            <artifactId>feign-slf4j</artifactId>
            <version>12.4</version>
            <scope>compile</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-loadbalancer</artifactId>
            <version>4.0.4</version>
            <scope>compile</scope>
            <optional>true</optional>
        </dependency>
    </dependencies>
</project>

```

```yaml

server:
  port: 8081

spring:
  application:
    name: service-common
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 123456
    url: jdbc:mysql://localhost:3306/code_patch_common?
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
        username: nacos
        password: nacos
    sentinel:
      transport:
        port: 9999 #控制台交流端口
        dashboard: 127.0.0.1:8858 #控制台地址

#开启驼峰映射
mybatis:
  configuration:
    map-underscore-to-camel-case: true

```