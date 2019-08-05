//搭建服务器
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
});
app.use(session(
    {
        // 加盐
        secret: 'my_albx_35',//相当于一个加密密钥，值可以是任意字符串
        resave: false,//强制session保存到session store中,不管Session有没有更新，都强制保存
        saveUninitialiazed: false //强制没有‘初始化’的session保存到storage中
    }
))
//静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
//设置获取页面的路径
app.set('/views', __dirname + '/views');
app.use(function (req, res, next) {
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1){
        next();
    }else{
        res.redirect('/admin/login')
    }
})
app.use(router);
