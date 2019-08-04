//前端页面
function getIndex(req, res) {
    res.render('index');
}
function getDetail(req, res) {
    res.render('detail');
}
function getList(req, res) {
    res.render('list');
}
//后台管理页面
function getAdminIndex(req, res) {
    res.render('../views/admin/index.ejs');
}
function getAdminCategories(req, res) {
    res.render('../views/admin/categories.ejs');
}
function getAdminComments(req, res) {
    res.render('../views/admin/comments.ejs');
}
let controller = {
    //前端页面
    getIndex,
    getDetail,
    getList,
    //后台管理页面
    getAdminIndex,
    getAdminCategories,
    getAdminComments,
}
module.exports = controller;