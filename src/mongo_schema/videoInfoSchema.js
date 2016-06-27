const  mongoose = require('mongoose')

//定义videoInfos表的结构
var schema = new mongoose.Schema({
    name: String,
    scope: String,
    keyword: String,
    src:String,
    notedata:String
})

module.exports = schema;
