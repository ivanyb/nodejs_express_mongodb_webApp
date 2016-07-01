
//打开登录页面： get /account/login
exports.displayLoginPage = (req,res)=>{

	res.render('accounts/login',{})
}

//处理登录逻辑 post /account/login
exports.login = (req,res)=>{

	let userName = req.body.name
	let pwd = req.body.password


	res.set({
            "Content-Type":"text/html; charset=UTF-8"
        });

	if(userName === 'admin' && pwd === '123')
	{
		//将用户名保存到 req.session.username中，表示当前用户的状态为登录了
		req.session.username = userName

		res.end('<script>window.location="/admin/videoInfo"</script>')
	}else{
		res.end('<script>alert("用户名或者密码错误");window.location="/account/login"</script>')
	}
}
