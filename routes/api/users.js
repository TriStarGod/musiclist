// import express from 'express';
const User = require('../../models/user');
const express = require('express');

const router = express.Router();

router.get('/list', (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      return res.send(err);
    }
    return res.json(users);
  });
});

module.exports = router;
