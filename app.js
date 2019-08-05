//搭建服务器
const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
});
//静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine', 'ejs');
//设置获取页面的路径
app.set('/views', __dirname + '/views');
app.use(router);
