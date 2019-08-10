const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'baixiu',
    dateStrings: true
})

function getAllPost(obj, callback) {
    // console.log(obj)
    let sql = `SELECT posts.*,users.nickname,categories.name 
                FROM posts 
                JOIN users on posts.user_id=users.id 
                JOIN categories on posts.category_id=categories.id 
                where 1=1 `;
    if (obj.cate && obj.cate != 'all') {
        sql += `and categories.id='${obj.cate}'`
    }
    if (obj.statu && obj.statu != 'all') {
        sql += ` and posts.status='${obj.statu}'`
    }

    sql += ` order by id DESC
            limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`;
    conn.query(sql, (err, result) => {
        // console.log(result)
        if (err) {
            callback(err);
        } else {
            sql = `SELECT COUNT(*) cou FROM posts 
                    join users on posts.user_id=users.id
                    JOIN categories on posts.category_id = categories.id
                    where 1=1 `;
            if (obj.cate && obj.cate != 'all') {
                sql += `and categories.id='${obj.cate}'`
            }
            if (obj.statu && obj.statu != 'all') {
                sql += ` and posts.status='${obj.statu}'`
            }
            conn.query(sql, (err1, res1) => {
                if (err1) {
                    callback(err1)
                } else {
                    callback(null, { data: result, cou: res1[0].cou });
                }
            })
        }
    })
}
function addPost(obj,callback){
    let sql = `insert into posts set ?`;
    conn.query(sql,obj,(err,result)=>{
        if(err){
            callback(err);
        }else{
            callback(null)
        }
    })
}
function getPostById(id,callback){
    let sql = 'SELECT * FROM posts where id='+id;
    conn.query(sql,(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(null,result[0])
        }
    })
}
function editPostById(obj,callback){
    let sql = `UPDATE posts set ? where id=?`;
    conn.query(sql,[obj,obj.id],(err,result)=>{
        if(err){
            callback(err)
        }else{
            callback(null,result);
        }
    })
}
let model = {
    getAllPost,addPost,getPostById,editPostById
}
module.exports = model;