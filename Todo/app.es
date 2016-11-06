"use strict"
import babel from 'babel-polyfill';    
import Koa from 'koa';
import router from './controlles/controlles-init';
import conf from './config/conf.js';
import Static from 'koa-static';
import path from 'path';
import convert from 'koa-convert';
import bodyparser from 'koa-bodyparser';
import swig from 'koa-swig';


const app = new Koa();

//配置静态资源
app.use(convert(Static(path.join(__dirname+'/public'))));
//app.use(koabody());

//调用路由
router(app);
app.listen(conf.get('port'));
export default app;