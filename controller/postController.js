const model = require('../model/postModel');
const moment = require('moment');

function getAllPost(req, res) {
    let obj = req.query;
    // console.log(obj);
    model.getAllPost(obj, (err, result) => {
        // console.log(result)
        if (err) {
            res.json({ code: 400, msg: '获取失败' })
        } else {
            // result.forEach(e => {
            //     e.created = moment(e.created).format('YYYY-MM-DD HH-mm-ss');
            // });
            // console.log(req.session)
            res.json({ code: 200, msg: '获取成功', data: result })
        }
    })
}
function addPost(req, res) {
    let obj = req.body;
    obj.views = 0;
    obj.likes = 0;
    obj.user_id = req.session.currentUser.id
    console.log(obj)
    // console.log(req.session)
    model.addPost(obj, (err) => {
        if (err) {
            console.log(err)
            res.json({ code: 400, msg: '数据新增失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据新增成功'
            })
        }
    })
}
function getPostById(req, res) {
    let id = req.query.id;
    // console.log(id)
    model.getPostById(id, (err, result) => {
        if (err) {
            res.json({ code: 400, msg: '获取失败' })
        } else {
            // console.log(result)
            result.created = moment(result.created).format('YYYY-MM-DDTHH:mm:ss');
            res.json({ code: 200, msg: '获取成功', data: result })
        }
    })
}
function editPostById(req, res) {
    let obj = req.body
    // console.log(obj)
    model.editPostById(obj, (err, result) => {
        if (err) {
            // console.log(err)
            res.json({ code: 400, msg: '数据修改失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据修改成功'
            })
        }
    })
}
function deletePostById(req, res) {
    let id = req.query.id;
    // console.log(obj)
    model.deletePostById(id, (err) => {
        if (err) {
            console.log(err)
            res.json({ code: 400, msg: '数据删除失败' })
        } else {
            res.json({
                code: 200,
                msg: '数据删除成功'
            })
        }
    })
}

let controller = {
    getAllPost, addPost, getPostById, editPostById, deletePostById
}
module.exports = controller;