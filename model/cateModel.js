const conn = require('../utils/myconn')

function getAllCate(callback) {
    let sql = `SELECT * from categories`
    conn.query(sql, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result)
        }
    })
}
function addCate(obj, callback) {
    let sql = `INSERT INTO categories set ?`;
    conn.query(sql, [obj], (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}
function editCate(obj, callback) {
    let sql = `UPDATE categories set ? WHERE \`id\` =?`;
    conn.query(sql,[obj,obj.id],(err,result)=>{
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}
let model = {
    getAllCate, addCate, editCate
}
module.exports = model;