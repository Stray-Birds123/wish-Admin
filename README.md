# wish-Admin
创建项目 
随便找个文件夹命令行输入 express wish

code .指令打开开发工具vscode

依次安装五个依赖包
npm install art-template -S express-art-template -S async -S mysql2 -S sequelize -S


完成安装

更换模板引擎

添加路由
本项目需要新增下面两个路由
1.首页路由
2.提交表单处理路由
添加完后如下

在跟目录下新增一个contrallers目录并建立 index,js文件，将路由的方法放在其中
common.js和index.js都是新建的文件里面暂时没有东西

将路由真正的处理方法发在controllers目录中，将针对首页的路由处理放在controllers目录中的index.js中

新增constant常量

为了方便管理值，在项目的更目录下创建一个constant目录，用来存放项目中会用到的常量
 
干到这里突然发现把依赖包安装上一个目录了
两种方法 
重新进入目录安装  npm install art-template -S express-art-template -S async -S mysql2 -S sequelize -S

或者直接把它两拖进来就行（不建议原配置文件json中没有你安装过的依赖包记录）如下红框的都没有所以你最好重新安装

新增配置文件
创建一个config.js
暂时只是数据库基础配置

新增数据库配置文件db.js
用来存放Sequelize的实例化对象


新增model文件（数据库映射文件）
新建一个models目录用来存放model文件在里面新建wish.js文件，用来对应创建mysql数据表wish

现在基本配置基本完成开始将前端的页面放入项目中进行页面的渲染 

前端index.html样式

* {
    margin: 0;
    padding: 0;
  }
  
  body {
    background: linear-gradient(rgb(50, 220, 135), rgb(113, 143, 226));
    font-family: '微软雅黑', sans-serif;
    font-size: 16px;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  
  .title {
    margin: 30px;
    text-align: center;
    font-size: 56px;
    font-weight: normal;
  }
  
  .item {
    width: 200px;
    height: 200px;
    line-height: 30px;
    border-bottom-left-radius: 20px 500px;
    border-bottom-right-radius: 500px 30px;
    border-top-right-radius: 5px 100px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
  }
  #container{
    height:520px;
  }
  #container p {
    margin: 10px;
    overflow: hidden;
    word-wrap: break-word;
    line-height: 1.5;
  }
  
  #container a {
    text-decoration: none;
    position: absolute;
    left: 150px;
    bottom: 18px;
    color: red;
    font-size: 14px;
  }
  
  .input, .submit {
    border: 0;
    border-radius: 5px;
    display: block;
    height: 30px;
    padding: 0 20px;
    line-height: 30px;
    width: 300px;
    margin: 10px auto;
    font-size: 20px;
    box-sizing: border-box;
  }
这里由于愿望便签是js动态渲染出来的，所以要将数据传给JS，则需要先将数据渲染到页面上#container元素中的一个data-list属性上，然后用js获取后在进行渲染

下面的drug方法是拖拽方法
