const express = require('express');
const router = express.Router();

// GET, POST, PUT, DELETE
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList' });
});
const testJSON = [
  {
    name: 'John Smith',
    username: 'Cupcake'
  },
  {
    name: 'Jane Doe',
    username: 'Stinky'
  }
];
router.get('/sendjson', (req, res, next) => {
  res.json(testJSON);
});
module.exports = router;
