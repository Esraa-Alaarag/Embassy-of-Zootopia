var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/queries')
/* GET home page. */

// SWAPI ROUTES
// router.patch('/swapi', db.swapiAdd)
// /* GET home page. */
router.get('/', db.getAllContacts); 
router.delete('/:ss', db.removeContact);
router.patch('/:ss', db.updateContact);



module.exports = router;