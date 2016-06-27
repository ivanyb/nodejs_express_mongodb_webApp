const  express = require('express')

//0.0 加载控制器
const videoInfoCtrl = require('../controllers/admin/videoInfoController')

//1.0 获取路由中间件
const adminRoute = express.Router();


function test(req,res,next){
    console.log('test................')
   next()
}

//2.0 定义admin管理后台路由规则
//如果写了多个回调函数，如下写法，必须在test这个函数中调用next()方法才能进入videoInfoCtrl
//截获视频介绍信息列表
adminRoute.get('/videoInfo',test,videoInfoCtrl.list)

adminRoute.get('/videoInfo/edit/:id',test,videoInfoCtrl.findModel)

module.exports = adminRoute