## demo  

### 安装  
根目录下 ` npm install `  安装所需的所有依赖

### 使用 

#### 开发模式
` npm run dev `  运行开发模式 
#### 文件打包 
` npm run build ` 进行生产打包  
#### 生产打包并运行服务器 
` npm run ser`  

### 目录结构  

```
├── README.md //说明文件
├── dist //生产目录
│   ├── 1.7be7b.chunk.js
│   ├── 2.835bc.chunk.js
│   ├── 3.dfce4.chunk.js
│   ├── css
│   │   ├── app.21cc6eecc9f7a884be969e138c0260a7.min.css
│   │   └── app.6a077cb0c2f228ba6250053c52f13acf.min.css
│   ├── images
│   │   └── hines121200035.19b9b4a.jpg
│   ├── index.html //主入口index
│   └── js
│       ├── app.303a6.js
│       └── vendor.9bf90.js
├── doc //文档
├── lib //外部工具、公共样式、公共方法
│   ├── index.scss
│   └── utility.js
├── package.json //pa
├── servers // 开启服务配置目录
│   ├── server.build.js
│   └── server.dev.js
├── src //源码目录
│   ├── App.jsx
│   ├── components //公共组件
│   │   ├── Header
│   │   ├── Home
│   │   └── Sidebar
│   ├── css
│   │   ├── antd.min.css
│   │   └── antd.min.css.map
│   ├── images
│   │   ├── 1.jpg
│   │   ├── FinixxContentLiBGClick.jpg
│   │   ├── hines121200035.jpg
│   │   └── timg.jpg
│   ├── index.js
│   └── routes //路由目录
│       ├── M1
│       ├── M2
│       └── index.js //主文件
├── tpl //打包用模板
│   └── tpl.html
├── webpack.config.dev.js // 开发配置文件
└── webpack.config.prod.js //生产配置文件
```




