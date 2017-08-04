// loading webserver modules
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// route files when a client requests a page
const index = require('./routes/index');
const api = require('./routes/api/index');
// instances of express server
const app = express();

// view engine setup - where its found and use view engine ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// configures webserver
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // more rebust logs for debugging in dev
// parse incoming data; uses middleware - software that transforms data before it reaches your code;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// server anything in the public folder
app.use(express.static(path.join(__dirname, 'public')));
// which route files to use
app.use('/', index);
app.use('/api', api);
// catch 404 and forward to error handler; inline middleware;
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
