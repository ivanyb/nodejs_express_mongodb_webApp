const mongoose = require('mongoose')

const schema = require('../mongo_schema/videoInfoSchema')

const model = mongoose.model('videoInfo',schema)

module.exports = model