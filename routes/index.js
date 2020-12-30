var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/index');

router.get('/',IndexController.getList)//定义首页路由

router.post('/add',IndexController.add);//定义表单提交路由

module.exports = router

