const mongoose =require('mongoose')

//只要当model在启动的时候有注册，这里可以直接获取到
const videoInfoModel =  mongoose.model('videoInfo')

//1.0 获取列表
exports.list = (req,res)=>{

    //查找mongodb中的videoInfos表中的所有数据
     videoInfoModel.find({},(err,data)=>{
         if(err)
         {
             throw err;
         }
         res.render('admin/index',{title:'学习资源管理',videoArr:data})
    })
}

//新增数据
exports.add = (req,res) =>{
    res.end('add page')
}
exports.addData = (req,res)=>{
    // let vinfo = new videoInfoModel({
    //     name : req.body.name,
    //     scope : req.body.scope,
    //     keyword : req.body.keyword,
    //     src : req.body.src,
    //     notedata : req.body.notedata
    // });

    videoInfoModel.create({
        name : req.body.name,
        scope : req.body.scope,
        keyword : req.body.keyword,
        src : req.body.src,
        notedata : req.body.notedata
    },(err)=>{
        res.set({
            "Content-Type":"application/json; charset=UTF-8"
        });
        res.end(JSON.stringify({status:1,message:"数据新增成功"}));
    })
}

//2.0 编辑数据时根据id获取老数据 ,url: get /admin/videoInfo/edit:id
exports.findModel = (req,res)=>{

    let id = req.params.id;
    videoInfoModel.findOne({"_id":id},(err,data)=>{
        if(err) throw err
        res.set({
            "Content-Type":"application/json; charset=UTF-8"
        });
        res.end(data ?data.toString():"没有数据");
    })
}
//3.0 更新数据:post请求
exports.update = (req,res)=>{
    console.log(req.body )
    let id = req.body.id
    let name = req.body.name
    let scope = req.body.scope
    let keyword = req.body.keyword
    let src = req.body.src
    let notedata = req.body.notedata

    videoInfoModel.update({"_id":id},{
        name : name,
        scope : scope,
        keyword : keyword,
        src : src,
        notedata : notedata
    },{},(err)=>{
        if(err) throw err

        res.set({
            "Content-Type":"application/json; charset=UTF-8"
        });
        res.end(JSON.stringify({status:1,message:"数据更新成功"}));
        
    })
}

//4.0 删除数据
exports.delete = (req,res)=>{
    let id = req.params.id;
    videoInfoModel.remove({"_id":id},(err)=>{
        if(err)
        {
            throw err;
        }
        res.set({
            "Content-Type":"application/json; charset=UTF-8"
        });
         res.end(JSON.stringify({status:1,message:"数据删除成功"}));
  
    })
}

