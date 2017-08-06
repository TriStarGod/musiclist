// loading webserver modules
// import express from 'express';
// import path from 'path';
// // // import favicon from 'serve-favicon';
// import logger from 'morgan';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import passport from 'passport';
// // an approach for connecting express to our auth setup
// import { Strategy as LocalStrategy } from 'passport-local';

const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
// an approach for connecting express to our auth setup
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session')({
  secret: 'random secret', // save somewhere else; secret used to sign session requests to confirm that session requests are coming from the right place
  resave: false,
  saveUninitialized: false,
});
const User = require('./models/user');
// route files when a client requests a page
const index = require('./routes/index');
const api = require('./routes/api/index');
const users = require('./routes/api/users');

// instances of express server
const app = express();

// connect to mongoose
mongoose.connect('mongodb://localhost/musiclist');

// view engine setup - where its found and use view engine ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// configures webserver
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // more rebust logs for debugging in dev
// parse incoming data; uses middleware - software that transforms data before it reaches your code;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// security setup
// express session middleware with config
app.use(expressSession);

app.use(passport.initialize());
app.use(passport.session());

// server anything in the public folder
app.use(express.static(path.join(__dirname, 'public')));
// which route files to use
app.use('/', index);
app.use('/api', api);
app.use('/api/users', users);

// configure passport
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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
