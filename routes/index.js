var express = require('express');
var USER = require('../database/user');
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

//crud para usuarios
router.post('/user', (req,res)=>{
  var params = req.body;
  params["register"] = new Date();
  var user = new USER(params);
  user.save().then(()=>{
    res.status(200).json({
      msn: "usuario creado"
    })
  });
});
module.exports = router;
