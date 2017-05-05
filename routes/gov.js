var express = require('express');
var router = express.Router();
var db = require('../queries')

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('gov', { title: 'gov' }); 
});

router.patch('/', db.Addtodb);
/* GET home page. */



module.exports = router;