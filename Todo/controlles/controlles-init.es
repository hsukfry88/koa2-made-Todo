'use strict'
import koarouter from 'koa-router';
import co from 'co';
import render from 'koa-swig';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import convert from 'koa-convert';
import cobody from 'co-body';
import koamulter from 'koa-multer';
import IndexController from './IndexControll'

function init_router(app){
	//模版渲染引擎配置  --->config/viewset.es配置文件
	app.context.render = co.wrap(render({
	  root: path.join(__dirname+'./../', 'view'),
	  autoescape: true,
	  ext: 'html',
	}));
	//初始化控制器
	const Index=new IndexController();

	const router=koarouter();
	app.use(bodyParser());
	//初始化路由
	 router.get('/',Index.index());
	 router.get('/index.html',Index.index())
	 router.post('/getData',Index.getDate())
	 router.post('/deleData',Index.deletDate())
	 app
	 .use(convert(router.routes()))
   .use(convert(router.allowedMethods()));
}
export default init_router;
