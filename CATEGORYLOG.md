##1.0 路由定义
路由分为两类：

- 1、加/admin前缀，负责管理后台数据
    + /admin/videoInfo          视频信息和介绍
    + /admin/videos:vinfoid     视频信息下的每个单独视频，vinfoid：视频信息id
    
   
- 2、不加/admin前缀的为前台页面
    + /index : 展示所有视频信息
    + /show:vinfoid :展示视频下的单独视频进行播放
    
    
##2.0  mongodb数据库设计
数据库名称：itcast


视频信息表
表名称:videoinfo

表结构：

    {
        name:"基础班12天",
        scope:"基础班阶段",
        keyword:"html css js"
    }

 表名称：videos
  
  表结构

      {
          vidwoinfoid: 'wdwer3232323',
          vname:"html基础第一天",
          src:'/uploaded/day01-01.mp4'
          notedata:'第一天的笔记'
      }
   
             
          