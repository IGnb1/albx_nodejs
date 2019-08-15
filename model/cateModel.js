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
    conn.query(sql, [obj, obj.id], (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null, result);
        }
    })
}
//删除分类
function delCateById(obj, callback) {
    let sql = `DELETE FROM categories WHERE \`id\`=${obj.id}`;
    conn.query(sql, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })
}
//批量删除
function delAnyCateById(obj, callback) {
    let sql = `DELETE FROM categories where \`id\` in (${obj.obj})`;
    conn.query(sql, (err, result) => {
        if (err) {
            callback(err)
        } else {
            callback(null)
        }
    })

}
let model = {
    getAllCate, addCate, editCate, delCateById, delAnyCateById
}
module.exports = model;