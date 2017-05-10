var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/queries')
/* GET home page. */


// /* GET embassy database . */
router.get('/', db.getAllContacts); 
// delete applicant
router.delete('/:ss', db.removeContact);
// add more information to the applicant
router.patch('/:ss', db.updateContact);



module.exports = router;