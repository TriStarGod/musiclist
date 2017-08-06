// loading webserver modules
// import express from 'express';
// import path from 'path';
// // import favicon from 'serve-favicon';
// import logger from 'morgan';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import passport from 'passport';
// // an approach for connecting express to our auth setup
// import { Strategy as LocalStrategy } from 'passport-local';
// import expressSession from 'express-session';

// // eslint-disable-next-line import/no-extraneous-dependencies
// import webpack from 'webpack';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import webpackDevMiddleware from 'webpack-dev-middleware';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from './webpack.config';

// import User from './models/user';
// import index from './routes/index';
// import api from './routes/api/index';
// import users from './routes/api/users';

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
const expressSession = require('express-session');
const User = require('./models/user');
// route files when a client requests a page
const index = require('./routes/index');
const api = require('./routes/api/index');
const users = require('./routes/api/users');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackDevMiddleware = require('webpack-dev-middleware');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
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
app.use(expressSession({
  secret: 'random secret', // save somewhere else; secret used to sign session requests to confirm that session requests are coming from the right place
  resave: false,
  saveUninitialized: false,
}));

// configure passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Webpack Server
// creates a webpack based on config
const webpackCompiler = webpack(webpackConfig);
// adds webpack as middleware
app.use(webpackDevMiddleware(webpackCompiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    hot: true,
    colors: true,
    chunks: true,
    'errors-only': true,
  },
}));
app.use(webpackHotMiddleware(webpackCompiler, {
  // eslint-disable-next-line no-console
  log: console.log,
}));

// server anything in the public folder
app.use(express.static(path.join(__dirname, 'public')));
// which route files to use
app.use('/api', api);
app.use('/api/users', users);
app.use('/*', index); // would make error handling useless

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
