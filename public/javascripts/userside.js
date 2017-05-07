
let payLoad = document.querySelector('#payload');
let baseURL = 'http://localhost:3000/userdb';
// let govdb = 'https://nameless-hollows-47144.herokuapp.com/api/information';


function readAllItems(e) {
  //e.preventDefault();
  console.log("here I'm getting")
  axios.get(baseURL)
   .then(function(res){
    
    })
    .catch(function(err) {
      console.log(err)
    })
}