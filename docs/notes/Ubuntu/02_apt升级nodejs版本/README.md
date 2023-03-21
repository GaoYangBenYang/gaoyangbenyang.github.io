 - 查看当前 nodejs 的版本
  
    node -v

 - 首先下载 n 这个用于更新 node 版本的工具

    sudo npm install n -g

 - 然后通过 n 这个工具下载 nodejs 的最新稳定版本

    sudo n stable

 - 下载完成后 如果发现 node -v 仍然是之前的版本，根据不同的 shell 版本执行 hash -r 或者 rehash 即可

    hash -r

 - 查看版本更新