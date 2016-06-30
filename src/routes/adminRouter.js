const  express = require('express')

//0.0 加载控制器
const videoInfoCtrl = require('../controllers/admin/videoInfoController')
const videoFileCtrl = require('../controllers/admin/videoFileController')


//1.0 获取路由中间件
const adminRoute = express.Router();


function test(req,res,next){
    console.log('test...............')
   next()
}

//2.0 定义admin管理后台路由规则
//如果写了多个回调函数，如下写法，必须在test这个函数中调用next()方法才能进入videoInfoCtrl
//2.0.1 截获视频介绍信息列表
adminRoute.get('/videoInfo',test,videoInfoCtrl.list)
//新增
adminRoute.get('/videoInfo/add',videoInfoCtrl.add)
adminRoute.post('/videoInfo/add',videoInfoCtrl.addData)

//2.0.2 编辑数据
adminRoute.get('/videoInfo/edit/:id',videoInfoCtrl.findModel)
adminRoute.post('/videoInfo/edit',videoInfoCtrl.update)
//2.0.3 删除数据
adminRoute.get('/videoInfo/delete/:id',videoInfoCtrl.delete)

//3.0 视频文件维护路由
 
//3.0.2 视频上传
adminRoute.post('/videoFile',videoFileCtrl.uploadFile)

//3.0 将路由对象导出
module.exports = adminRoute