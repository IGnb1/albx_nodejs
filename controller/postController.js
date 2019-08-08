const model = require('../model/postModel');
const moment = require('moment');

function getAllPost(req,res){
    let obj = req.query;
    // console.log(obj);
    model.getAllPost(obj,(err,result)=>{
        // console.log(result)
        if(err){
            res.json({code:400,msg:'获取失败'})
        }else{
            // result.forEach(e => {
            //     e.created = moment(e.created).format('YYYY-MM-DD HH-mm-ss');
            // });
            res.json({code:200,msg:'获取成功',data:result})
        }
    })
}
let controller = {
    getAllPost
}
module.exports = controller;