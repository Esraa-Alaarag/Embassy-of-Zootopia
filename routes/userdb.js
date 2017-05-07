var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/queries')
/* GET home page. */

// SWAPI ROUTES
// router.patch('/swapi', db.swapiAdd)
// /* GET home page. */
router.get('/:ss', db.getpassstatus); 



module.exports = router;