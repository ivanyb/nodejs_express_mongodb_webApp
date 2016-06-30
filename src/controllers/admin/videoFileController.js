const mongoose = require('mongoose')
const videoInfoModel =  mongoose.model('videoInfo')

const formidable = require('formidable')
const path = require('path')
const fs = require('fs')

//上传文件
exports.uploadFile = (req,res) =>{

  var form = new formidable.IncomingForm();
 
  form.uploadDir =path.join(__dirname,'../../../upload/vides/'); //设置文件保存路径
  form.keepExtensions = true; //true：带文件扩展名存储  false:不带扩展名存储

 	   res.set({
            "Content-Type":"text/html; charset=UTF-8"
        });
  
    form.parse(req, function(err, fields, files) {
     
     var extName = path.extname(files.mp4file.name);
     var newFileName = Math.random()+extName;

     //将视频文件名称修改成newPath
     var oldPath = files.mp4file.path;
     var newPath = path.join(form.uploadDir,newFileName);
	 fs.renameSync(oldPath,newPath);

     //更新数据库表videoInfos中的src字段值
     var dataID = fields.id;
     videoInfoModel.update({"_id":dataID},{"src":newFileName},{},(err)=>{
     	if(err)throw err
     		console.log('上传成功')
     });

    });
    res.end('alert("上传成功");window.location="/admin/videoInfo";');
 // res.end('<script>alert("上传成功");window.location="/admin/videoInfo";</script>');
}