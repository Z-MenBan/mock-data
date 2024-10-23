# mock-data
创建本地服务器 使用Mock.js模拟数据
自定义接口 获取随机数据

# 项目启动
- 安装依赖  npm install
- 运行项目  npm run dev
- 复制控制台输出地址访问

# 使用步骤
- 在mock/api.js文件中编写自己想要的函数返回，调用medium.js封装好的方法，可关键字查找（eg:数据类型）
- 如果simple.js和medium.js封装不足，可自己封装

# 待解决
1. 需要不需要配置默认属性，例如code、msg
2. 重复简单封装也没有必要（simple.js、medium.js）
3. 没有对用户输入做判断

# 目标
- 不需要编写代码生成用户想要的API

# 项目感谢
- Mock.js
- express.js
- Lorem Picsum