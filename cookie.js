const express = require('express');
const queryString = require('querystring');
// const session = require('express-session');
const app = express();
app.listen(8080, () => {
    console.log('http://127.0.0.1:8080')
})
app.use('/', (req, res) => {
    let cookie = req.headers.cookie;
    // console.log(cookie)
    let obj = queryString.parse(cookie)
    // console.log(obj)
    if (obj.isLogin && obj.isLogin == 'true') {
        res.end('welcome back')
    } else {
        res.writeHead(200, {
            "Content-Type": 'text/html;charset:utf-8',
            'Set-Cookie': 'isLogin=true'
        })
        res.end('first come');
    }



})