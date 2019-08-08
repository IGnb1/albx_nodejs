const conn = require('../utils/myconn')

function getAllCate(callback){
    let sql = `SELECT * from categories`
    conn.query(sql,(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(null,result)
        }
    })
}
let model = {
    getAllCate
}
module.exports = model;