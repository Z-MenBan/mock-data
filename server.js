// 引入 express 模块
import express from 'express';
import { getLocalhostIP } from './utils/common.js';
import { test } from './mock/index.js';


// 创建 express 实例
const app = express();
// 获取本地服务器的IP地址
const localhostIP = getLocalhostIP();
// 定义端口
const port = 8019;

// 设置公共文件目录
app.use(express.static('public'));

// 设置静态文件目录
app.use(express.static('assets'));

// 根目录
app.get('/', (req, res) => {
  res.send('Hello World!');
})

// 初次使用 mockjs
app.get('/test', (req, res) => {
  res.send(test());
})

// 监听端口
app.listen(port, () => {
  console.log(`Server is running on http://${localhostIP}:${port}`);
})