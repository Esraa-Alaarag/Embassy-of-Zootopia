// selecting the where I wan to display my information
let payLoad = document.querySelector('#payload');
// this line was modified for the secuirty issue 
// it was before baseURL = ‘//localhost:3000/embassy’; then I had mix contecnt http https problem
let baseURL = '//young-badlands-16070.herokuapp.com/embassy/';
// let govdb = 'https://nameless-hollows-47144.herokuapp.com/api/information';


// this function delete a record by calling axios delete
function deleteItem(e) {
  if (event.target.className.toLowerCase() === 'delete') {
    // every id was seperated by _ss# so I can catch it later
    let e_ss = event.target.id;
    let ss = e_ss.split("_")[1];
    console.log(ss);
    if(confirm(`Are you sure you want to delete person with the Social security number of ${ss}`)){
    let string=baseURL+"/"+ss;
    console.log(string);
    axios.delete(string).then(function(res) {
    window.alert(`person with ss ${ss} was deleted successfully`);
    window.location.reload()
  })
.catch(function(err) {
      console.log(err)
    })}
}
}

// this function call get to render every thing inside html partial display page directly
function readAllItems(e) {
  //e.preventDefault();
  console.log("here I'm getting")
  axios.get(baseURL)
   .then(function(res){
      console.log(res.data);
      // payLoad.innerHTML = "";
      // res.data.data.forEach(function(d, c) {
 
      
    })
    .catch(function(err) {
      console.log(err)
    })
}



$('.input_date').on('focusout',function() {
  console.log("Editing");
  let id = $(this).attr('id').split("_")
  let val = $(this).val(); 
  let field=id[0];
  let ss=id[1];
  console.log(field);
  console.log(ss);
   let string=baseURL+"/"+ss;
var obj = {};
obj[field] = val;
obj[ss]=ss;
console.log(obj)
  axios.patch(string ,{ obj})
  .catch(function (err) {
       return next(err);
     });
  window.location.reload()
})



$('.input_item').on('change',function() {
  console.log("Editing");
  let id = $(this).attr('id').split("_")
  let val = $(this).val(); 
  let field=id[0];
  let ss=id[1];
  console.log(field);
  console.log(ss);
   let string=baseURL+"/"+ss;
var obj = {};
obj[field] = val;
obj[ss]=ss;
console.log(obj)
  axios.patch(string ,{ obj})
  .catch(function (err) {
       return next(err);
     });
  window.location.reload()
})


function viewpicture(e) {
  if (event.target.className.toLowerCase() === 'picture') {
    let e_ss = event.target.id;
    let ss = e_ss.split("_")[1];
          let first=$(`#first_${ss}`).text();
          console.log("first"+first)
          let last=$(`#last_${ss}`).text();
          console.log(last);
          // let image=document.getElementsByTagName('img').getAttribute("id");
          let image=$(`#image_${ss}`).text();
            console.log(image);
          console.log(image);
          $('.modal-header').html(`<button type="button" class="close" data-dismiss="modal">&times;</button></div>`);
          $('.modal-header').append(`<h2>Name: ${first} ${last}</h2></div>`)
            
          $('.modal-body').html(`
          <div><img class="photo"  src="${image}"> </div>`);
          
    }
}





//register event listeners
// document.getElementById('create_btn').addEventListener('click', createItem);
// document.getElementById('readall_btn').addEventListener('click', readAllItems);
//document.getElementById('read_btn').addEventListener('click', readItem);
// document.getElementById('update_btn').addEventListener('click', updateItem);
 //$('.update').on('click',updateItem);
// $('.delete').on('click',deleteItem);




window.onload=readAllItems;
// document.querySelectorAll('#payload')
//   .forEach(function(c) {
//     c.addEventListener('click', viewperson)
//   })

  $('#payload').on('click', '.delete', function(){
    addEventListener('click', deleteItem)
});
  $('#payload').on('click', '.picture', function(){
    addEventListener('click', viewpicture)
});

//   $( ".add" ).click(function() {
//   addEventListener('click', copytodb)
// });

  // $(document).on('click', '.add', function(event) {
  //   addEventListener('click', copytodb)
  //   })

