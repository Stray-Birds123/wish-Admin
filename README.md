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

这里由于愿望便签是js动态渲染出来的，所以要将数据传给JS，则需要先将数据渲染到页面上#container元素中的一个data-list属性上，然后用js获取后在进行渲染

下面的drug方法是拖拽方法

后台管理这几天
