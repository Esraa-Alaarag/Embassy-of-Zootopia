var promise = require('bluebird');
var options = { promiseLib: promise };

var pgp = require('pg-promise')(options)

var connectionString = 'postgres://localhost:5432/embassy';
var db = pgp(connectionString);


function Addtodb(req,res, next) {
     let body = req.body;
      var rrr= db.none('insert into information(id, ss, first, last, gender, species, height, color, occupation, wanted , image, city)' +
      'values(${id}, ${ss}, ${first}, ${last}, ${gender}, ${species}, ${height}, ${color}, ${occupation}, ${wanted},  ${image}, ${city})', body)

      .then(data => {
        console.log('record with id:'+req.body.id+' was inserted successfully');// print error;
        res.status(200)
        .json({
          status:'success',
          data:data,
          message:"inserted sucessfully"
        })
    })
    .catch(error => {
    console.log('record with id:'+req.body.id+' already exist');// print error;
    res.json({
      status:'failed',
      message:'already exist'
    })

    return false;
    });
  }

function updateContact(req, res, next) {
let  field=Object.keys(req.body.obj)[1];
let ss=req.params.ss;
let val=req.body.obj[field];
console.log(field);
console.log(val);
console.log(ss)
var size = Object.keys(req.body.obj).length;
console.log(size);
db.none(`update information set ${field}=$1 where ss=$2`,
 [val, ss])
  .then(function() {
    res.status(200)
    console.log('record with ss:'+req.params.ss+' was updated sucessfully')
    })
  .catch(error => {
    console.log('updating record with ss:'+req.params.ss+' was failed');// print error;
    res.json({
      status:'failed',
      message:'error'
    })

    return false;
    });
}

function getAllContacts(req, res, next){
  db.any('select * from information order by ss')
  .then(function(data){
    console.log(data);
    res.render( 'embassy', { title:"my embassy", data:data })
    res.status(200)
    console.log('getting all the data was sucessful')
    })
    .catch(error => {
    console.log('error');// print error;
    res.json({
      status:'failed',
      message:'already exist'
    })

    return false;
    });  
}

function getpassstatus(req, res, next){
  let contactss = parseInt(req.params.ss)
  db.one('select status , startdate , finishdate from information where ss= $1',contactss )
    .then(function(data) {
     res.json(data);
    console.log('Getting user`s passport information was sucessful');
    })
    .catch(error => {
    console.log('error');// print error;
    res.json({
      status:'failed',
      message:'This user is not exist or You Entered Wrong social security number click back and try Again'
    })

    return false;
    });  
}












function removeContact(req, res, next) {
  console.log("inside removeContact", req.params.ss)
  let contactss = parseInt(req.params.ss)
  console.log(contactss)
   db.result('delete from information where ss = $1', contactss)
   .then(function(data){
    console.log(data)
    res.status(200)
    .json({
          status:'success',
          data:data,
          message:"deleted sucessfully"
        })
    })
    .catch(error => {
    console.log('record with ss:'+req.params.ss+' was not deleted');// print error;
    res.json({
      status:'failed',
      message:'already exist'
    })

    return false;
    });
}

module.exports = {
  getAllContacts: getAllContacts,
  removeContact: removeContact,
  updateContact: updateContact,
  Addtodb: Addtodb,
  getpassstatus:getpassstatus,
}
