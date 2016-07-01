#NodeJS 项目
用到的模块有：

    - 1、express 用来实现项目的web服务，路由功能，静态模块 地址： https://github.com/expressjs/express
            它的很多常用的中间件可以在这个网址找到：http://www.expressjs.com.cn/resources/middleware.html

    - 2、mongodb  : 一个NoSql数据库，用来存储数据用 地址：https://docs.mongodb.com/manual/support/
    - 3、monggose ：一个提供了MongoDB地相映射的Node.js库：http://mongoosejs.com/docs/guide.html
    - 4、bootstrap ：前端框架，布局使用   https://getbootstrap.com/
    - 5、body-parse：一个解析请求报文体数据的Node.js库  https://github.com/expressjs/body-parser
    - 6、formidable：我们用它来实现上传文件功能   https://github.com/felixge/node-formidable
    - 7、express-session：用来做用户的状态管理（登录了可以访问页面，没有登录不能访问页面）
                            地址： https://github.com/expressjs/session
                            

##1.0 路由定义
路由分为两类：

- 1、加/admin前缀，负责管理后台数据
    + get /admin/videoInfo          视频信息和介绍
    + post /admin/videoInfo/add      新增视频信息
    + get /admin/videoInfo/edit/:id  编辑视频信息
    + post /admin/videoInfo/edit       获取post请求报文体中的数据更新到db中
    + get /admin/videoInfo/delete/:id  删除视频信息

    + post  /admin/videoFile           视频文件上传
    
- 2、不加/admin前缀的为前台页面
    + get /showvideo/:vinfoid           展示视频下的单独视频进行播放
    
- 3、登录模块
    + get /account/login                打开登录页面
    + post /account/login               处理登录请求


##2.0  mongodb数据库设计
数据库名称：itcast


视频信息表
表名称:videoinfo

表结构：

    {
        name:"基础班12天",
        scope:"基础班阶段",
        keyword:"html css js"，
        src:'/uploaded/day01-01.mp4'
        notedata:'第一天的笔记'
    }
      
          