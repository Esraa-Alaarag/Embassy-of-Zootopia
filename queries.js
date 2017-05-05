var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options)

var connectionString = 'postgres://localhost:5432/embassy';
var db = pgp(connectionString);

// var connectionString = 'postgres://localhost:5432/swapi_db';
// var db_swapi = pgp(connectionString);

function Addtodb(req,res, next) {
  //console.log("here we go again")
     //console.log("db", req.body)
     let body = req.body;
     //console.log("inside catch",body)
      var rrr= db.none('insert into information(id, ss, first, last, gender, species, height, color, occupation, wanted , image, city)' +
      'values(${id}, ${ss}, ${first}, ${last}, ${gender}, ${species}, ${height}, ${color}, ${occupation}, ${wanted},  ${image}, ${city})', body)

    // db_swapi.one('select * from characters where name = $1', req.body.name)
    //     .then(function(data){
    //       console.log("selecting one", data)
      .then(data => {
        console.log(req.body.id+'gooooooooooooooooood');// print error;
        res.status(200)
        .json({
          status:'success',
          data:data,
          message:"insert sucessfully"
        })

    })
    .catch(error => {
    console.log(req.body.id+'errorrrrrrrrrrrrrrrrrrrrr');// print error;
    res.json({
      foo: 123,
      status:'fail',
    })

    return false;
    });
  }

// function updateContact(req, res, next) {
// console.log(req.body)
//   db.none('update contacts set first=$1 where id=$2',
//  [req.body.first, parseInt(req.params.id)])
//   .then(function() {
//     res.status(200)
//     })
// }

// function createContact(req, res, next) {
//   console.log(req.body)
//   req.body.age = parseInt(req.body.age)
//   db.none('insert into contacts(first, last, age, sex)' +
//       'values(${first}, ${last}, ${age}, ${sex})',
//     req.body)

//     .catch(function (err) {
//        return next(err);
//      });
// }

// function getAllContacts(req, res, next){
//   db.any('select * from contacts')
//   .then(function(data){
//     console.log(data)
//     res.render( 'index', { title:"All Contacts", data:data })
//     })
// }

// function removeContact(req, res, next) {
//   console.log("inside removeContact", req.params.id)
//   let contactID = parseInt(req.params.id)
//   db.result('delete from contacts where id = $1', contactID)
// }

module.exports = {
  // createContact: createContact,
  // getAllContacts: getAllContacts,
  // removeContact: removeContact,
  // updateContact: updateContact,
  Addtodb: Addtodb,
}
