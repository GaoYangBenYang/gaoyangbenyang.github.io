## 打开配置文件
    
    sudo vim /etc/profile

## 添加环境配置

    #开启go mod包管理
    export GO111MODULE=on
    #修改go mod代理源
    export GOPROXY=https://goproxy.cn
    #其中GOPATH为go的工作目录，一般你的代码都在GOPATH/src目录下。
    export GOPATH=$HOME/gopath
    export GOROOT=/usr/local/go
    export PATH=$PATH:$GOROOT/bin:$GOPATH/bin

## 退出vim，更新文件

    source /etc/profile

## 检验go版本

    go version