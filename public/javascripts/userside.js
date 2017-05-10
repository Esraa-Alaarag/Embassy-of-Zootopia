// this file get displayed in userdb.ejs and works as API for the applicant webpage
// get the data from the your local database
let baseURL = '//localhost:3000/userdb';


function readAllItems(e) {
	axios.get(baseURL)
  	.then(function(res){
    	console.log(res)
 	})
    .catch(function(err){
    	console.log(err)
    })
}