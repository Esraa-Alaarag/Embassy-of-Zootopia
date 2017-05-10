var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/queries')


// get the applicant API
router.get('/:ss', db.getpassstatus); 



module.exports = router;