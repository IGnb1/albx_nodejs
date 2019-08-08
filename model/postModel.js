const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    dateStrings:true
})

function getAllPost(obj, callback) {
    let sql = `SELECT posts.*,users.nickname,categories.name 
                FROM posts 
                JOIN users on posts.user_id=users.id 
                JOIN categories on posts.category_id=categories.id
                order by id DESC
                limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;
    conn.query(sql, (err, result) => {
        if (err) {
            callback(err);
        } else {
            sql = `SELECT COUNT(*) cou FROM posts 
                    join users on posts.user_id=users.id
                    JOIN categories on posts.category_id = categories.id`;
            conn.query(sql,(err1,res1)=>{
                if(err1){
                    callback(err1)
                }else{
                    callback(null, {data:result,cou:res1[0].cou});
                }
            })  
        }
    })
}
let model = {
    getAllPost
}
module.exports = model;