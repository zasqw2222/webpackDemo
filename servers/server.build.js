/**
 * 开启服务
 */
'use strict';
const path = require('path');

const express = require('express');
const opn = require('opn');

const port = process.env.PORT || 3000;

let app = express();

// 设定静态目录
app.use(express.static(path.resolve(__dirname , '../dist')));
// 路由归属
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'))
})


// 启动监听端口打开浏览器
app.listen(port,function(err){
  if(err){
    console.log(err);
  }
  console.log("server started on port " + port);
  opn(`http://localhost:${port}`);
})
