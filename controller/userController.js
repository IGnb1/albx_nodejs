//用户的控制器
const model = require('../model/userModel');
function userLogin(req,res){
    // console.log(req.body);
    let obj = req.body;
    // console.log(obj)
    model.userLogin(obj.email,(err,data)=>{
        if(err){
            res.json({code:400,msg:'服务器异常'})
        }else{
            if(data){
                // console.log(data)
                if(data.password == obj.password){
                    //写入session状态保持
                    req.session.isLogin = 'true';
                    req.session.currentUser = data;
                    res.json({code:200,msg:'登录成功'})
                }else{
                    res.json({code: 400,msg:'密码错误'})
                }
            }else{
                res.json({code:400,msg:'请输入正确的邮箱'})
            }
        }
    })
}
let controller = {
    userLogin
}
module.exports = controller;