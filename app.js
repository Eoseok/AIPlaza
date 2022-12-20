var createError = require('http-errors');
var express = require('express');
require('dotenv').config() // .env 파일 사용

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
// get MongoDB driver connection
const dbo = require('./routes/database/conn');

// Get Routers
var indexRouter = require('./routes/index')
var filemanagementRouter = require('./routes/api/file-management')
var servicemanagementRouter = require('./routes/api/service-management')

var app = express();
app.use(cors()) // cors 허용 : 모두

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/service-management',userRouter);
app.use('/file-management', filemanagementRouter);
app.use('/service-management',servicemanagementRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
