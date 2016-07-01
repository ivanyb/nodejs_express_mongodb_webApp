const path = require('path')

const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost/itcast'
mongoose.connect(dbUrl)

//1.0 导入express,和 xtemplate模板的包装框架xtpl
const  express = require('express')
const xtpl = require('xtpl')



//2.0 创建express的application 对象          
const  app = express()

//2.0.0 加载model,一定是放在加载路由模块require('./src/routes/xxxx')之前
require('./src/model/videoInfo')

//加载session,用来管理用户的会话
var session = require('express-session')
app.use(session({
  secret: 'itcast_resouce',
  resave: false, //为今后准备的参数默认是true，官方文档建议使用false
  saveUninitialized: true
}))

//截获 /admin 下面的所有请求，在他们执行之前先执行这个处理函数，其他请求不处理
// app.use((req,res,next)=>{}) 这种写法是截获所有请求
app.use('/admin',(req,res,next)=>{

	let session = req.session || {}
	if(!session.username){
		res.set({"Content-Type":"text/html;charset=utf-8"})
		res.end("<script>alert('您还未登录，点击确定跳转到登录页');window.location='/account/login'</script>");
		return; 
	}
	
	//继续执行
	next();
});

//加载中间件 
//导入body-parser 实现通过req.body 获取post请求报文体中的数据
const bodyParser = require('body-parser')
app.use(bodyParser())

//2.0.1 加载路由对象
const  adminRouter = require('./src/routes/adminRouter')
const forntRouter = require('./src/routes/Router')
const accountRouter = require('./src/routes/accountRoute')

//2.0.2 设置静态模块
app.use(express.static(path.join(__dirname,'statics')))
app.use(express.static(path.join(__dirname,'bowerlib')))
app.use(express.static(path.join(__dirname,'upload')))


//3.0 设置app视图的目录和视图引擎
app.set('views',path.join(__dirname,'views'))

app.set('view engine','html')
app.engine('html',xtpl.renderFile)

//4.0 设置路由
// app.get('/VideoInfo',(req,res)=>{
//     res.render('admin/index',{title:'学习资源管理'})
// })
// app.get('/admin/videoInfo',require('./src/controllers/admin/videoInfoController'));
app.use('/admin',adminRouter)
app.use('/',forntRouter)
app.use('/',accountRouter)

//统一错误捕获:函数的四个参数一定要写全，顺序也要写对，一个都不能少
app.use(function(err, req, res, next) {
  console.error('出错了--->'+err.stack);
  res.status(500).end('出错了，请联系管理员');
});

//5.0 开启web服务器的监听
app.listen(8000,function () {
    console.log('服务器启动,, 请访问: http://localhost:8000')
})