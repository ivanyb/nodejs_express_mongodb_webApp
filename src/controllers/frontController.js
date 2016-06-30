const mongoose =require('mongoose')

const vinfoModel = mongoose.model('videoInfo')

module.exports = (req,res)=>{ 

    //获取视频vinfoid
	let vid = req.params.vinfoid

	//获取id对于数据对象
	vinfoModel.findOne({"_id":vid},(err,data)=>{
		res.render('showvideo',data)
	})
}