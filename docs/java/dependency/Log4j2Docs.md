---
layout: doc
sidebar: false
---

## 一、log4j2 概述

Apache Log4j 2是Log4j的升级版，相对于其前身Log4j提供了重大改进。它提供了Logback中可用的许多改进，同时修复了Logback架构中的一些固有问题。

## 二、Maven 依赖

```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
        <!--排除掉Logback日志框架-->
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```

## 三、log4j2.xml

> log4j2一般可以通过xml,json,yaml或者properties形式文件来实现。

### 3.1 滚动策略

1. 基于大小的滚动策略

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--status：是用于指定log4j的级别；monitorterval：是用于指定log4j自动重新检测读取配置内容的间隔时间，单位为秒（s），最小值为5秒。-->
<Configuration status="info" monitorInterval="30">
    <!--配置日志的路径-->
    <properties>
        <property name="LOG_HOME">${sys:user.home}/.jact/logs</property>
    </properties>
    <Appenders>
        <!--*********************文件日志***********************-->
        <!--all级别日志-->
        <RollingFile name="allFileAppender"
                     fileName="${LOG_HOME}/all/all.log"
                     filePattern="${LOG_HOME}/all/$${date:yyyy-MM}/all-%d{yyyy-MM-dd}-%i.log.gz">
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

    </Appenders>

    <Loggers>
        <!-- 根日志设置 -->
        <Root level="debug">
            <AppenderRef ref="allFileAppender" level="all"/>
        </Root>
    </Loggers>

</Configuration>
```

> 上述模板中，日志先写入logs/xxxxx/xxxxx.log中，每当文件大小达到100MB时或经过1天，
> 按照在logs/2020-09/目录下以xxxxx-2020-09-09-1.log.gz格式对该日志进行压缩重命名并归档
> ，并生成新的文件xxxxx.log进行日志写入。其中，filePattern属性的文件格式中%i就类似于一个整数计数器，
> 受到<DefaultRolloverStrategy max="10"/>控制，要特别注意的是：
> 当文件个数达到10个的时候会循环覆盖前面已归档的1-10个文件。
> 若不设置该参数，默认为7。

2. 基于时间间隔的滚动策略

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--status：是用于指定log4j的级别；monitorterval：是用于指定log4j自动重新检测读取配置内容的间隔时间，单位为秒（s），最小值为5秒。-->
<Configuration status="info" monitorInterval="30">
    <!--配置日志的路径-->
    <properties>
        <property name="LOG_HOME">${sys:user.home}/.jact/logs</property>
    </properties>
    <Appenders>
        <!--*********************文件日志***********************-->
        <!--all级别日志-->
        <RollingFile name="allFileAppender"
                     fileName="${LOG_HOME}/all/all.log"
                     filePattern="${LOG_HOME}/all/$${date:yyyy-MM}/all-%d{yyyy-MM-dd}-%i.log.gz">
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy interval="6" modulate="true"/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

    </Appenders>

    <Loggers>
        <!-- 根日志设置 -->
        <Root level="debug">
            <AppenderRef ref="allFileAppender" level="all"/>
        </Root>
    </Loggers>

</Configuration>
```

> 上述模板中，日志先写入logs/xxxxx/xxxxx.log中，每当文件的时间间隔到达6小时（由%d{yyyy-MM-dd-HH}决定，也可以设置成%d{yyyy-MM-dd-HH-mm}，则间隔为分钟级别），触发rollover操作。
> 如上配置设置好后，10点的日志开始重启服务，则从11点触发一次rollover操作，
> 生成2020-09-09-10.log.gz对该日志进行压缩重命名并归档，
> 并生成新的文件app.log进行日志写入；然后，每间隔6小时，则下一次是17点触发一次，
> 生成2020-09-09-17.log.gz对该日志进行压缩重命名并归档，并生成新的文件xxxxx.log进行日志写入。

3. 基于大小的滚动策略和基于时间间隔的滚动策略

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--status：是用于指定log4j的级别；monitorterval：是用于指定log4j自动重新检测读取配置内容的间隔时间，单位为秒（s），最小值为5秒。-->
<Configuration status="info" monitorInterval="30">
    <!--配置日志的路径-->
    <properties>
        <property name="LOG_HOME">${sys:user.home}/.jact/logs</property>
    </properties>
    <Appenders>
        <!--info级别日志-->
        <RollingFile name="infoFileAppender"
                     fileName="${LOG_HOME}/info/info.log"
                     filePattern="${LOG_HOME}/info/$${date:yyyy-MM}/info-%d{yyyy-MM-dd}-%i.log.gz">
            <Filters>
                <!--过滤掉warn及更高级别日志-->
                <ThresholdFilter level="warn" onMatch="DENY" onMismatch="NEUTRAL"/>
            </Filters>
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy interval="1" modulate="true"/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

    </Appenders>

    <Loggers>
        <!-- 根日志设置 -->
        <Root level="debug">
            <AppenderRef ref="infoFileAppender" level="info"/>
        </Root>
    </Loggers>

</Configuration>
```

> 上述模板中，日志先写入logs/app.log中，每当文件大小达到100MB或者当时间间隔到达6小时（由%d{yyyy-MM-dd-HH}决定），
> 触发rollover操作，按照在logs/2020-09/目录下以app-2020-09-09-1.log.gz格式对该日志进行压缩重命名并归档，
> 并生成新的文件app.log进行日志写入。

### 3.2 详细配置

1. 默认在src/main/resources目录下加入log4j2.xml配置文件对日志进行配置。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--status：是用于指定log4j的级别；monitorterval：是用于指定log4j自动重新检测读取配置内容的间隔时间，单位为秒（s），最小值为5秒。-->
<Configuration status="info" monitorInterval="30">
    <!--配置日志的路径-->
    <properties>
        <property name="LOG_HOME">${sys:user.home}/.jact/logs</property>
    </properties>
    <Appenders>
        <!--*********************控制台日志***********************-->
        <!--Console节点用于定义输出控制台的Appender。name：用于指定Appender的名称。target：用于指定输出目标，一般是SYSTEM_OUT或SYSTEM_ERR，默认是SYSTEM_OUT-->
        <Console name="consoleAppender" target="SYSTEM_OUT">
            <!--指定输出格式，不设置的话，默认为:%m%n-->
            <PatternLayout
                    pattern="%style{%d{ISO8601}}{bright,green} %highlight{%-5level} [%style{%t}{bright,blue}] %style{%C{}}{bright,yellow}: %msg%n%style{%throwable}{red}"
                    disableAnsi="false"
                    noConsoleNoAnsi="false"/>
        </Console>

        <!--*********************文件日志***********************-->
        <!--all级别日志-->
        <RollingFile name="allFileAppender"
                     fileName="${LOG_HOME}/all/all.log"
                     filePattern="${LOG_HOME}/all/$${date:yyyy-MM}/all-%d{yyyy-MM-dd}-%i.log.gz">
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

        <!--debug级别日志-->
        <RollingFile name="debugFileAppender"
                     fileName="${LOG_HOME}/debug/debug.log"
                     filePattern="${LOG_HOME}/debug/$${date:yyyy-MM}/debug-%d{yyyy-MM-dd}-%i.log.gz">
            <Filters>
                <!--过滤掉info及更高级别日志-->
                <ThresholdFilter level="info" onMatch="DENY" onMismatch="NEUTRAL"/>
            </Filters>
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

        <!--info级别日志-->
        <RollingFile name="infoFileAppender"
                     fileName="${LOG_HOME}/info/info.log"
                     filePattern="${LOG_HOME}/info/$${date:yyyy-MM}/info-%d{yyyy-MM-dd}-%i.log.gz">
            <Filters>
                <!--过滤掉warn及更高级别日志-->
                <ThresholdFilter level="warn" onMatch="DENY" onMismatch="NEUTRAL"/>
            </Filters>
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy interval="1" modulate="true"/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

        <!--warn级别日志-->
        <RollingFile name="warnFileAppender"
                     fileName="${LOG_HOME}/warn/warn.log"
                     filePattern="${LOG_HOME}/warn/$${date:yyyy-MM}/warn-%d{yyyy-MM-dd}-%i.log.gz">
            <Filters>
                <!--过滤掉error及更高级别日志-->
                <ThresholdFilter level="error" onMatch="DENY" onMismatch="NEUTRAL"/>
            </Filters>
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

        <!--error及更高级别日志-->
        <RollingFile name="errorFileAppender"
                     fileName="${LOG_HOME}/error/error.log"
                     filePattern="${LOG_HOME}/error/$${date:yyyy-MM}/error-%d{yyyy-MM-dd}-%i.log.gz">
            <!--设置日志格式-->
            <PatternLayout>
                <pattern>%d %p %C{} [%t] %m%n</pattern>
            </PatternLayout>
            <Policies>
                <!-- 设置日志文件切分参数 -->
                <!--<OnStartupTriggeringPolicy/>-->
                <!--设置日志基础文件大小，超过该大小就触发日志文件滚动更新-->
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <!--设置日志文件滚动更新的时间，依赖于文件命名filePattern的设置-->
                <TimeBasedTriggeringPolicy/>
            </Policies>
            <!--设置日志的文件个数上限，不设置默认为7个，超过大小后会被覆盖；依赖于filePattern中的%i-->
            <DefaultRolloverStrategy max="100"/>
        </RollingFile>

        <!--json格式error级别日志-->
        <RollingFile name="errorJsonAppender"
                     fileName="${LOG_HOME}/error/error-json.log"
                     filePattern="${LOG_HOME}/error/error-json-%d{yyyy-MM-dd}-%i.log.gz">
            <JSONLayout compact="true" eventEol="true" locationInfo="true"/>
            <Policies>
                <SizeBasedTriggeringPolicy size="100 MB"/>
                <TimeBasedTriggeringPolicy interval="1" modulate="true"/>
            </Policies>
        </RollingFile>

    </Appenders>

    <Loggers>
        <!-- 根日志设置 -->
        <Root level="debug">
            <AppenderRef ref="consoleAppender" level="off"/>
            <AppenderRef ref="allFileAppender" level="all"/>
            <AppenderRef ref="debugFileAppender" level="debug"/>
            <AppenderRef ref="infoFileAppender" level="info"/>
            <AppenderRef ref="warnFileAppender" level="warn"/>
            <AppenderRef ref="errorFileAppender" level="error"/>
            <AppenderRef ref="errorJsonAppender" level="error"/>
        </Root>

        <!--spring日志-->
        <Logger name="org.springframework" level="debug"/>
        <!--druid数据源日志-->
        <Logger name="druid.sql.Statement" level="debug"/>
        <!-- mybatis日志 -->
        <Logger name="com.mybatis" level="debug"/>
    </Loggers>

</Configuration>
```

2. 在application.yml中进行访问路径的配置。

```yaml
logging:
  config: classpath:log4j2.xml
```

