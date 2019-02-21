const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const ejs = require('ejs');

const app = express();
/*webpack*/
const webpack = require('webpack');
const webpack_dev_Config = require('./webpack.dev.config');
const webpack_pro_Config = require('./webpack.product.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

let webpackConfig = null;
let env =  process.env.NODE_ENV || 'development';
if(env === 'development'){
    webpackConfig = webpack_dev_Config;
}else {
    webpackConfig = webpack_pro_Config;
}
let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    quiet: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    reload: true,
    noInfo:false,
    stats: {
        colors: true,
        chunks: false
    }
}));
if(env === 'development'){
    app.use(webpackHotMiddleware(compiler));
}
//webpack end

// view engine setup
app.engine('html', ejs.__express);
app.set('views', path.join(__dirname, 'client', 'view'));
app.set('view engine', 'html');

const indexRouter = require('./server/routes/index');


app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
