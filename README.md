#NodeJS 项目
用到的技术和框架有：
    - 1、express
    - 2、mongodb
    - 3、bootstrap
    - 4、monggose 

##1.0 路由定义
路由分为两类：

- 1、加/admin前缀，负责管理后台数据
    + get /admin/videoInfo          视频信息和介绍
    + post /admin/videoInfo/add      新增视频信息
    + get /admin/videoInfo/edit/:id  编辑视频信息
    + post /admin/videoInfo/edit       获取post请求报文体中的数据更新到db中
    + get /admin/videoInfo/delete/:id  删除视频信息

    + get /admin/videoFile/：videoInfoID  打开视频上传页面，videoInfoID表示当前视频文件属于哪个视频的
    + post  /admin/videoFile              视频文件上传
    
- 2、不加/admin前缀的为前台页面
    + get /index                           展示所有视频信息
    + get /show:vinfoid                    展示视频下的单独视频进行播放
    
    
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
      
          