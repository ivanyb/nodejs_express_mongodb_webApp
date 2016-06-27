const path = require('path')

//1.0 导入express,和 xtemplate模板的包装框架xtpl
const  express = require('express')
const xtpl = require('xtpl')

//2.0 创建express的application 对象
const  app = express()

//2.0 设置静态模块
app.use(express.static(path.join(__dirname,'statics')))
app.use(express.static(path.join(__dirname,'bowerlib')))


//3.0 设置app视图的目录和视图引擎
app.set('views',path.join(__dirname,'views'))

app.set('view engine','html')
app.engine('html',xtpl.renderFile)

//4.0 设置路由
// app.get('/VideoInfo',(req,res)=>{
//     res.render('admin/index',{title:'学习资源管理'})
// })
app.get('/admin/videoInfo',require('./src/controllers/admin/videoInfoController'));

//5.0 开启web服务器的监听
app.listen(8000,function () {
    console.log('服务器启动,, 请访问: http://localhost:8000')
})