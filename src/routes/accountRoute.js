const express = require('express')

const route = express.Router()

const accountCtrl = require('../controllers/account/accountController')

//展示登录页面
route.get('/account/login',accountCtrl.displayLoginPage)

//检查登录信息
route.post('/account/login',accountCtrl.login)

module.exports = route
