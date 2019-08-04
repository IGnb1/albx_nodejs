const express = require('express');
const router = express.Router();
const controller = require('./controller/pageController');

router
    //前台页面
    .get('/', controller.getIndex)
    .get('/detail', controller.getDetail)
    .get('/list', controller.getList)
    //后台管理页面
    .get('/admin',controller.getAdminIndex)
    .get('/admin/categories',controller.getAdminCategories)
    .get('/admin/comments',controller.getAdminComments)
module.exports = router;