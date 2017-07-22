var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/queries')

/* GET government database page. */

router.get('/', function(req, res, next) {
  res.render('gov', { title: 'Zootopia Government Database' }); 
});

// add a record to the embassy database
router.put('/', db.Addtodb);



module.exports = router;