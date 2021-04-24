// 引入后端模块
const express = require('express');
// 创建服务器
const app = express();
// 接受home请求
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
})
app.get('/home/multidata', (req, res) => {
    console.log(req.url);
    res.send({ name: '三笠' });
});
// 监听端口
app.listen(8080, () => {
    console.log('8080 is start successful');
})