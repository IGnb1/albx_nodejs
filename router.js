const express = require('express');
const router = express.Router();
const controller = require('./controller/pageController');
const userController = require('./controller/userController');
const postController = require('./controller/postController');
const cateController = require('./controller/cateController');
const uploadController = require('./controller/uploadController');

router
    //前台页面
    .get('/', controller.getIndex)
    .get('/detail', controller.getDetail)
    .get('/list', controller.getList)
    //后台管理页面
    .get('/admin',controller.getAdminIndex)
    .get('/admin/categories',controller.getAdminCategories)
    .get('/admin/comments',controller.getAdminComments)
    .get('/admin/login',controller.getAdminLogin)
    .get('/admin/nav-menus',controller.getAdminNavMenus)
    .get('/admin/password-reset',controller.getAdminPasswordReset)
    .get('/admin/post-add',controller.getAdminPostAdd)
    .get('/admin/posts',controller.getAdminPosts)
    .get('/admin/profile',controller.getAdminProfile)
    .get('/admin/settings',controller.getAdminSettings)
    .get('/admin/slides',controller.getAdminSlides)
    .get('/admin/users',controller.getAdminUsers)
    //业务处理路由
    .post('/login',userController.userLogin)
    .get('/getAllPost',postController.getAllPost)
    .get('/getAllCate',cateController.getAllCate)
    .post('/uploadImg',uploadController.uploadImg)
    .post('/addPost',postController.addPost)
    .get('/getPostById',postController.getPostById)
    .post('/editPostById',postController.editPostById)
module.exports = router;