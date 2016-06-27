const mongoose =require('mongoose')
//只要当model在启动的时候有注册，这里可以直接获取到
const videoInfoModel =  mongoose.model('videoInfo')

//1.0 获取列表
exports.list = (req,res)=>{

    //查找mongodb中的videoInfos表中的所有数据
     videoInfoModel.find({},(err,data)=>{
         if(err)
         {
             console.log(err);
             throw err;
         }
         res.render('admin/index',{title:'学习资源管理',videoArr:data})
    })
}

//2.0 编辑数据时根据id获取老数据 ,url: get /admin/videoInfo/edit:id
exports.findModel = (req,res)=>{

    let id = req.params.id;
    videoInfoModel.findOne({"_id":id},(err,data)=>{
        res.set({
            "Content-Type":"application/json; charset=UTF-8"
        });
        res.end(data ?data.toString():"没有数据");
    })


}

