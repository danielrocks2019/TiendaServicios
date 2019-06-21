var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

router.get('/', function(req, res, next) {
  res.status(200).json({
    msn: "bienvenido a la  api proyecto 2019"
  })
});
module.exports = router;
