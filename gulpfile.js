 var gulp = require('gulp')

 var uglify = require('gulp-uglify')//uglify 组件（用于压缩 JS）
 var babel =require('gulp-babel') // 将es6代码转换成es5代码
 var concat = require('gulp-concat') //将多个js文件合并成一个js文件

 var gulpCopy = require('gulp-copy')// 拷贝文件

 //压缩src目录中的所有 js文件输出到dist目录中
 gulp.task('task1',function(){

  /*注意：gulp.src('src/routes/*.js',{ base: 'src' }) 后面加了 {base:"src"} 
	  在调用dest的时候会将压缩后的js生成到 dist/routes下
	  如果不加 base所有js直接生成在dist文件夹中


	  将src中的所有.js文件先通过.pipe(babel()) 将es6代码转换成es5代码
	  再通过.pipe(uglify()) 压缩所有js文件中的代码
	  再通过.pipe(gulp.dest('dist'))将最终处理好的js代码 输出到dist文件夹中的对应目录的js文件中
  */
 	gulp.src(['src/controllers/*.js'
 			,'src/controllers/*/*.js'
 			,'src/model/*.js'
 			,'src/mongo_schema/*.js'
 			,'src/routes/*.js'
 			,'src/*.js'
 			],{ base: 'src' })
 		.pipe(babel())
 		.pipe(uglify()) //如果js文件有es6语法，那么不将其现状成es5写法的时候，调用这个方法会报错，在调用之前，必须先调用.pipe(babel()) 进行转换
 		//.pipe(concat('all.js')) //将所有js文件合并成一个新的all.js文件 ,这里不合并了，会报错
 		.pipe(gulp.dest('dist')) //输出到dist文件夹中


 	console.log('1.0 js压缩完毕，自动输出到了dist文件夹中')
 })

//拷贝src/views下的所有html到 dist/views下
/*
	{prefix:1} 一个整数 表示忽略'./src/views/*.html'中的src路径

 */
 gulp.task('copy',function(){
 	
    gulp.src(['./src/views/*.html','./src/views/*/*.html'])
      .pipe(gulpCopy('./dist', {prefix:1})) 
      // .pipe(gulp.dest('dist'))

    console.log('2.0 拷贝html完毕')  
 })
 

 gulp.task('default',["copy","task1"],function(){


 	console.log('3.0 defalut')
 })

