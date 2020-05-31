1.高并发测试
    --reuqest每个请求都不一样，只是在使用userService的set方法时，线程切换可能造成线程安全问题，userService是共享变量
2.redis搭建与测试
    --卸载服务：redis-server --service-uninstall
    --开启服务：redis-server --service-start
    --停止服务：redis-server --service-stop    
3.git提交代码步骤
    --git init 初始化
    --git remote add origin git@github.com:flora0103/example.git    //关联一个远程库命令
    --git add -A
    --git commit -m "提交代码描述"
    --git push -u origin master  提交代码
    --git clone git@github.com:lee-michelle/lemon.git
    -- 执行git remote add origin git@github.com:lee-michelle/ATCDemo.git时出现remote origin already exists.错误，执行git remote rm origin命令即可。
    --git branch 分支名，例如：git branch develop
    --git 如何把分支代码合并到master主分支上
        --1.首先切换到分支:  git checkout develop
        --2.使用git pull 把分支代码pull下来:git pull
        --3.切换到主分支:git checkout master
        --4.把分支的代码merge到主分支:git merge develop
        --5.git push推上去ok完成,现在 你自己分支的代码就合并到主分支上了 :git push
        
        
        