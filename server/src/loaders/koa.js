const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const indexRouter = require('../api/routes');

const router = new Router();

const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = { message: err.message || 'Unknown Error' };
    ctx.app.emit('error', err, ctx);
  }
};

const koa = async (app) => {
  app.use(bodyParser());
  app.use(logger());
  app.use(errorHandler);
  app.use(router.routes());
  app.use(router.allowedMethods());

  router.use('/', indexRouter.routes());
};

module.exports = koa;