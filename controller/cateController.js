const model = require('../model/cateModel')

function getAllCate(req, res) {
    model.getAllCate((err, data) => {
        if (err) {
            res.json({ code: 400, msg: '数据查询失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据查询成功',
                data
            })
        }
    })
}
function addCate(req, res) {
    let obj = req.body;
    console.log(obj)
    model.addCate(obj, (err, result) => {
        if (err) {
            res.json({ code: 400, msg: '数据新增失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据新增成功'
            })
        }
    })
}
function editCate(req, res) {
    let obj = req.body;
    model.editCate(obj, (err, result) => {
        if (err) {
            res.json({ code: 400, msg: '数据修改失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据修改成功'
            })
        }
    })
}
let controller = {
    getAllCate, addCate, editCate
}
module.exports = controller;