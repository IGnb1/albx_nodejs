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
function getAdminLogin(req,res){
    res.render('../views/admin/login.ejs');
}
function getAdminNavMenus(req,res){
    res.render('../views/admin/nav-menus.ejs');
}
function getAdminPasswordReset(req,res){
    res.render('../views/admin/password-reset.ejs');
}
function getAdminPostAdd(req,res){
    res.render('../views/admin/post-add.ejs');
}
function getAdminPosts(req,res){
    res.render('../views/admin/posts.ejs');
}
function getAdminProfile(req,res){
    res.render('../views/admin/profile.ejs');
}
function getAdminSettings(req,res){
    res.render('../views/admin/settings.ejs');
}
function getAdminSlides(req,res){
    res.render('../views/admin/slides.ejs');
}
function getAdminUsers(req,res){
    res.render('../views/admin/users.ejs');
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
    getAdminLogin,
    getAdminNavMenus,
    getAdminPasswordReset,
    getAdminPostAdd,
    getAdminPosts,
    getAdminProfile,
    getAdminSettings,
    getAdminSlides,
    getAdminUsers
}
module.exports = controller;