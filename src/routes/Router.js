const express = require('express')
const route = express.Router()

route.get('/showvideo/:vinfoid',require('../controllers/frontController'))

module.exports = route