var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/queries')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('gov', { title: 'Zootopia Government DataBase' }); 
});

router.put('/', db.Addtodb);
/* GET home page. */



module.exports = router;