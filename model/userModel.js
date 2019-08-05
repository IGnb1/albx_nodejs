//用户数据模型
const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'baixiu'
})
function userLogin(email,callback){
    let sql = `select * from users where \`email\`='${email}'`;
    conn.query(sql,(err,results)=>{
        // console.log(results)
        if(err){
            callback(err);
        }else{
            callback(null,results[0]);
        }
    })
}
let model = {
    userLogin
}
module.exports = model;