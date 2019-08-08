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
let controller = {
    getAllCate
}
module.exports = controller;