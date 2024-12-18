---
title: git 操作指南
---

![](https://cdn.nlark.com/yuque/0/2023/png/21869871/1703235944713-d5786012-d606-435b-8f6d-786451c90be1.png)

# <font style="color:rgb(25, 27, 31);">git常用命令笔记</font>

## <font style="color:rgb(25, 27, 31);">基础配置</font>

### <font style="color:rgb(25, 27, 31);">配置远程仓库的ssh key</font>

<font style="color:rgb(25, 27, 31);">在本机创建ssh key</font>

```plain
# 运行后按enter使用默认值
ssh-keygen -t rsa -C "自己的邮箱地址"
```

<font style="color:rgb(25, 27, 31);">获取ssh key的公钥</font>

```plain
cat ~/.ssh/id_rsa.pub
```

<font style="color:rgb(25, 27, 31);">复制上面命令显示的公钥，到远程仓库的ssh key里。请完整拷贝从ssh-到你的用户名和主机名为止的内容。</font>

### <font style="color:rgb(25, 27, 31);">.gitignore</font>

<font style="color:rgb(25, 27, 31);">项目根目录新建.gitignore文件，并把不想用git跟踪的文件写进去。如果你在.gitignore里写某个文件之前已经commit并push上去了，可以参考下面</font>**<font style="color:rgb(25, 27, 31);">删除信息</font>**<font style="color:rgb(25, 27, 31);">那一节的内容。</font>

## <font style="color:rgb(25, 27, 31);">查看信息</font>

### <font style="color:rgb(25, 27, 31);">查看历史commit信息</font>

<font style="color:rgb(25, 27, 31);">查看历史commit注释和commit_id</font>

```plain
git log
```

### <font style="color:rgb(25, 27, 31);">查看某个文件历史commit信息</font>

<font style="color:rgb(25, 27, 31);">查看指定文件所有历史commit信息</font>

```plain
git log -p -- <file-path>
```

<font style="color:rgb(77, 77, 77);">每次提交中具体修改了哪些文件</font>

```plain
git log --name-status -- <file-path>
```

<font style="color:rgb(77, 77, 77);">每次提交中简要信息</font>

```plain
git log --oneline -- <file-path>
```

### <font style="color:rgb(25, 27, 31);">查看当前的状态</font>

```plain
git status
```

### <font style="color:rgb(25, 27, 31);">查看文件修改</font>

```plain
# 查看这个文件的修改记录，默认显示整个文件
git blame <filename>

# 可以通过参数 -L <start>,<end>来检查需要修改的某几行
git blame <filename> -L 10,50 //查看第10~50行的修改记录
```

### <font style="color:rgb(25, 27, 31);">查看两个版本之间改动细节</font>

```plain
git diff <commit-id-1>  <commit-id-2>
```

### <font style="color:rgb(25, 27, 31);">查看两个版本之间改动文件列表名,不展示细节</font>

```plain
git diff --name-status <commit-id-1>  <commit-id-2>
```

### **<font style="color:rgb(25, 27, 31);">Git 对比两个版本间某一个文件的变化</font>**

```plain
# 先列出两个版本间发生更改的文件列表
git diff <commit-id-1>  <commit-id-2> --stat --name-only

# 查看指定文件在两个版本间发生的变更
git diff <commit-id-1>  <commit-id-2> -- <filename>

# 更直观地查看
git difftool <commit-id-1>  <commit-id-2> -- <filename>
```

### <font style="color:rgb(25, 27, 31);">查看可引用的历史版本记录</font>

<font style="color:rgb(25, 27, 31);">git log命令是显示当前的HEAD和它的祖先，递归是沿着当前指针的父亲，父亲的父亲，……，这样的原则。</font>

<font style="color:rgb(25, 27, 31);">使用git reflog命令，可查看到所有历史版本信息。由于查看所有历史版本信息的目的，大多是为了进行版本回退或恢复操作所使用，从中找到所需的commit索引，所以该命令被命名为reflog，即：引用日志。</font>

```plain
git reflog
```

## <font style="color:rgb(25, 27, 31);">添加信息</font>

<font style="color:rgb(25, 27, 31);">最简单最常用的命令</font>

```plain
# 添加某个文件的更改
git add filepath

# 添加所有更改，注意是否配置好.gitignore，否则会把原本不想用git管理的文件也添加进去
git add --all

git commit -m '这里写commit注释'

git commit -am '添加所有更改并提交注释'

git push # 如果设置了远程仓库的话
```

## <font style="color:rgb(25, 27, 31);">删除信息</font>

### <font style="color:rgb(25, 27, 31);">当文件未使用git add缓存时</font>

<font style="color:rgb(25, 27, 31);">使用git checkout --filepath，注意中间有--，否则就成了切换分支了。</font>

```plain
git checkout --filepath
```

<font style="color:rgb(25, 27, 31);">如果要放弃所有文件的修改，可以使用下面的命令。此命令用来放弃所有没加入缓存区的修改（内容修改与整个文件删除），需要注意的是，不会删除刚新建的文件，因为刚新建的文件还没有加入到git的管理系统中，所以对git是未知的。</font>

```plain
git checkout .
```

### <font style="color:rgb(25, 27, 31);">已使用git add缓存代码，未使用git commit</font>

<font style="color:rgb(25, 27, 31);">使用git reset HEAD filepath</font>

```plain
git reset HEAD filepath
```

<font style="color:rgb(25, 27, 31);">如果要放弃所有文件的修改，就不要后面的文件路径了。此命令用来清除git对于文件修改的缓存，相当于撤销了git add 命令的工作。使用本命令后，本地的修改不会消失，而是回到了未使用git add 缓存代码时的状态。如果要继续删除修改，则使用git checkout --filepath的方法。</font>

```plain
git reset HEAD
```

### <font style="color:rgb(25, 27, 31);">已经用git commit 提交了代码</font>

<font style="color:rgb(25, 27, 31);">回退到上一次commit的状态</font>

```plain
git reset --hard HEAD^
```

<font style="color:rgb(25, 27, 31);">回退到任意版本，使用git log查看提交历史和对应的commit_id</font>

```plain
git reset --hard <commit-id>
```

### <font style="color:rgb(25, 27, 31);">在使用.gitignore文件后如何删除远程仓库中以前上传的此类文件而保留本地文件</font>

<font style="color:rgb(25, 27, 31);">在使用git和github的时候，如果之前没有写.gitignore文件，上传了一些没必要的文件，后来在添加了.gitignore文件后，想要删除远程仓库里的这些文件同时保留本地的文件。这时不能直接用"git rm directory"，因为这样会删除本地仓库的文件。</font>

<font style="color:rgb(25, 27, 31);">可以这样做</font>

```bash
git rm -r --cached directory
git commit -m 'update'
git push
```

## <font style="color:rgb(25, 27, 31);">分支</font>

### <font style="color:rgb(25, 27, 31);">查看现有分支</font>

```plain
git branch
```

### <font style="color:rgb(25, 27, 31);">新建分支</font>

```plain
git branch <new-branch>
```

### <font style="color:rgb(25, 27, 31);">新建分支并切换到该分支</font>

```plain
# 默认的git checkout -b命令会从当前所在的HEAD指针所指的分支来派生出新建的分支
git checkout -b ＜new-branch＞

# 从指定的existing-branch分支派生创建了一个名为new-branch的新分支。
git checkout -b ＜new-branch＞ ＜existing-branch＞
```

### <font style="color:rgb(25, 27, 31);">切换分支</font>

```plain
git checkout <branchname>
```

### <font style="color:rgb(25, 27, 31);">切换远程分支</font>

```plain
# 为了能够checkout出某一个远程仓库的分支，我们需要先fetch那个仓库的内容。
git fetch --all
# 像checkout本地分支一样checkout出这个远程分支（需要用较新版本的git）
git checkout ＜remotebranch＞
```

### <font style="color:rgb(25, 27, 31);">新建本地分支，切换分支并且拉取远程分支的最新commit</font>

```plain
git checkout -b ＜branchname＞ <origin/branchname>
```

### <font style="color:rgb(25, 27, 31);">新建本地分支并重置为远程分支的最新commit</font>

```plain
git checkout -b ＜branchname＞
git reset --hard origin/＜branchname＞
```

### <font style="color:rgb(25, 27, 31);">删除本地分支</font>

```plain
git branch -d ＜branchname＞
```

### <font style="color:rgb(77, 77, 77);">强制</font><font style="color:rgb(25, 27, 31);">删除本地未合并分支</font>

```plain
git branch -D ＜branchname＞
```

### <font style="color:rgb(77, 77, 77);"></font><font style="color:rgb(25, 27, 31);">删除</font>**<font style="color:rgba(0, 0, 0, 0.75);">远程分支</font>**

```plain
git push origin --delete ＜branchname＞
```

### <font style="color:rgb(25, 27, 31);">推送本地分支到</font>**<font style="color:rgba(0, 0, 0, 0.75);">远程分支</font>**

```plain
git push origin ＜branchname＞
// 推送到远程仓库的不同分支
git push origin <local_branch_name>:<remote_branch_name>
```

## 文件比对

### 查看本地文件修改

```plain
git diff
```

比对本地分支与远程分支

```plain
git fetch origin master
git diff origin/master master
```

## 贮藏/储藏

### <font style="color:rgb(25, 27, 31);">贮藏更改</font>

<font style="color:rgb(25, 27, 31);">我们可以通过以下命令</font>**<font style="color:rgb(25, 27, 31);">贮藏更改的文件</font>**<font style="color:rgb(25, 27, 31);">，暂时保存工作目录中的修改，并将其存储在一个临时位置，以便稍后再次恢复。</font>

```plain
git stash [save "贮藏描述"] [-u]
```

- `<font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);">save "贮藏描述"</font>`<font style="color:rgb(25, 27, 31);">（可选）：指定贮藏文件的描述。</font>
- `<font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);">-u</font>`<font style="color:rgb(25, 27, 31);">（可选）：指定贮藏包括未</font>[<font style="color:rgb(25, 27, 31);">跟踪文件</font>](https://zhida.zhihu.com/search?q=%E8%B7%9F%E8%B8%AA%E6%96%87%E4%BB%B6&zhida_source=entity&is_preview=1)<font style="color:rgb(25, 27, 31);">的更改。</font>

![](https://cdn.nlark.com/yuque/0/2024/webp/21869871/1724834244894-30c7561b-0047-4054-9119-16a1fbd5df23.webp)

### <font style="color:rgb(25, 27, 31);">查看贮藏列表</font>

<font style="color:rgb(25, 27, 31);">，这个命令将显示所有贮藏的详细信息，包括每个贮藏的唯一</font>[<font style="color:rgb(25, 27, 31);">标识符</font>](https://zhida.zhihu.com/search?q=%E6%A0%87%E8%AF%86%E7%AC%A6&zhida_source=entity&is_preview=1)<font style="color:rgb(25, 27, 31);">、贮藏时的提交信息以及可能提供的描述。。</font>

```plain
git stash list
```

![](https://cdn.nlark.com/yuque/0/2024/webp/21869871/1724834245116-56f41436-0ef2-4de6-9561-4b7803c61342.webp)

### <font style="color:rgb(25, 27, 31);">删除所有贮藏</font>

<font style="color:rgb(25, 27, 31);">我们可以通过以下命令</font>**<font style="color:rgb(25, 27, 31);">删除所有贮藏</font>**<font style="color:rgb(25, 27, 31);">，执行此命令将清除所有当前存储的贮藏，因此请确保您不再需要这些贮藏中的任何更改。</font>

```plain
git stash clear
```

![](https://cdn.nlark.com/yuque/0/2024/webp/21869871/1724834245163-2f6e5c06-8b67-4964-b943-a5580fd5d88e.webp)

### <font style="color:rgb(25, 27, 31);">删除指定贮藏</font>

<font style="color:rgb(25, 27, 31);">我们可以通过以下命令</font>**<font style="color:rgb(25, 27, 31);">删除指定的贮藏</font>**<font style="color:rgb(25, 27, 31);">，通过提供</font>`<font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);"><stash标识符></font>`<font style="color:rgb(25, 27, 31);">，您可以精确地指定要删除的贮藏，而不会影响其他贮藏的状态。</font>

```plain
git stash drop <stash标识符>
```

- `<font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);"><stash标识符></font>`<font style="color:rgb(25, 27, 31);">（必须）：指定需要删除的贮藏标识符。</font>

![](https://cdn.nlark.com/yuque/0/2024/webp/21869871/1724834245164-db1f3c21-5115-4a1a-8e34-14705baefc8b.webp)

### <font style="color:rgb(25, 27, 31);">应用贮藏</font>

<font style="color:rgb(25, 27, 31);">我们可以通过以下命令</font>**<font style="color:rgb(25, 27, 31);">应用贮藏</font>**<font style="color:rgb(25, 27, 31);">，该命令可以帮助你恢复之前贮藏的更改，而不会删除贮藏记录。</font>

```plain
git stash apply <stash标识符>
```

- `<font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);"><stash标识符></font>`<font style="color:rgb(25, 27, 31);">（可选）：指定需要应用的贮藏标识符，如果不指定则应用最近一次贮藏。</font>

![](https://cdn.nlark.com/yuque/0/2024/webp/21869871/1724834245153-aa17d940-0d66-4f50-aa76-26b707d5e6cb.webp)

### <font style="color:rgb(25, 27, 31);">应用后删除贮藏</font>

<font style="color:rgb(25, 27, 31);">我们可以通过以下命令</font>**<font style="color:rgb(25, 27, 31);">应用后删除贮藏</font>**<font style="color:rgb(25, 27, 31);">，该命令可以帮助你恢复之前贮藏的更改，并在应用后立即删除贮藏记录。</font>

```plain
git stash pop <stash标识符>
```

- `<font style="color:rgb(25, 27, 31);background-color:rgb(248, 248, 250);"><stash标识符></font>`<font style="color:rgb(25, 27, 31);">（可选）：指定需要应用的贮藏标识符，如果不指定则应用最近一次贮藏。</font>

![](https://cdn.nlark.com/yuque/0/2024/webp/21869871/1724834246058-a25efa36-bc39-416f-95d5-1d4f9d52f5bf.webp)

## <font style="color:rgb(25, 27, 31);">参考资料</font>

[Git - Book (git-scm.com)](https://link.zhihu.com/?target=https%3A//git-scm.com/book/zh/v2)
