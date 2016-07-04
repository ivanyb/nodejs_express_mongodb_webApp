
var env = process.env.NODE_ENV
console.log(env)

if(env==='dev')
{
	//加载开发环境的js
	require('./src/app.js')
}else{
	//加载生产环境的js
	require('./dist/app.js')
}