const express = require('express');

const router = express.Router();

// GET, POST, PUT, DELETE
/* GET home page. */
// for path /, req (request), res (result), next
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MusicList Alpha' });
});
// const testJSON = [
//   {
//     name: 'John Smith',
//     username: 'Cupcake'
//   },
//   {
//     name: 'Jane Doe',
//     username: 'Stinky'
//   }
// ];
// router.get('/sendjson', (req, res, next) => {
//   res.json(testJSON);
// });
module.exports = router;
