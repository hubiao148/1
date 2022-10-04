# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
<<<<<<< HEAD
=======

- config // 全局配置文件

- mock // mock问价所在地 基于express

- public // 资源目录和一些无需打包的资源，比如标题图片

- dist // 项目build输出文件

- node_modules // 依赖包

- src //源码目录

  - layouts/index.js // 全局布局

  - models // 数据流

  - wrappers // 权限管理

  - pages // 页面目录，里面文件路由

    - .umi // dev临时目录，添加到.gitignore 因为每次都会发生变化

    - .umi-production // build临时目录会自动删除

    - document.ejs // 类似vue index.html

    - 404.jsx // 404页面

    - page1.jsx // 界面1
  
  - global.css // 全局样式

  - global.js // 可以在这导入 polyfill 
  
- .env环境变量


- 加密

 - 后端传过来的 Token 

    

>>>>>>> 8fefb8d141306e349e273ce11f46174e97a73e0d