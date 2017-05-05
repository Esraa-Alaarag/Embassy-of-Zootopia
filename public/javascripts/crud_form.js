
let payLoad = document.querySelector('#payload');
//let baseURL = 'http://localhost:3000/embassy/information';
let govdb = 'https://nameless-hollows-47144.herokuapp.com/api/information';



function copytodb(e) {
e.preventDefault();  
  let Myobject;
  if (event.target.className.toLowerCase() === 'add') {
  let e_id = event.target.id;
    let id = e_id.split("_")[1];
  let string=govdb+"/"+id;
  var result=axios.get(string)
    .then(function(res) {
      let d = res.data.data;
    axios.patch('/gov', {
    "id": d.id,
    "ss" : d.ss,
    "first": d.first,
    "last": d.last,
    "gender": d.gender,
    "species": d.species,
    "height": d.height,
    "color": d.color,
    "occupation": d.occupation,
    "wanted": d.wanted,
    "city": d.city,
    "image": d.image
      })
     .then(function(res){
           if(res.data.status=='fail') {
            alert('nonono')
           }
     })
     console.log('222', res)
   })
    .catch(function(err) {
      return(err)
    })
    .catch(function(err) {
      return(err)
    })
}
}  



function readAllItems(e) {
  e.preventDefault();
  axios.get(govdb)
   .then(function(res){
    console.log(res.data.data.length);
      console.log(res.data.data);
      payLoad.innerHTML = "";
      res.data.data.forEach(function(d, c) {
        payLoad.innerHTML += 
        `<tr id=itemid_${d.ss}>
          <td id=item_${d.ss}>${d.id}</td> 
          <td id=ss_${d.ss}>${d.ss}</td> 
          <td id=first_${d.ss} >${d.first}</td> 
          <td id=last_${d.ss}>${d.last}</td> 
          <td id=gender_${d.ss}>${d.gender}</td> 
          <td id=species_${d.ss}>${d.species}</td> 
          <td id=height_${d.ss} >${d.height}</td> 
          <td id=color_${d.ss} >${d.color}</td>
          <td id=occupation_${d.ss} >${d.occupation}</td> 
          <td id=wanted_${d.ss} >${d.wanted}</td>
          <td id=address_${d.ss} >${d.city}</td>  
          <td>    
            <button type="button" id=view_${d.ss} data-toggle="modal" data-target="#myModal" class="view">🔍</button>
            <button type="button" id=add_${d.ss} class="add">➕</button>
          </td>
        </tr>`
      })
    })
    .catch(function(err) {
      console.log(err)
    })
}
// <td id=image_${d.id} >${d.image}</td>  
// function readItem(e) {
//   e.preventDefault();
//   console.log('read one item');
//   console.log(baseURL);
//   let e_id = event.target.id;
//     let id = e_id.split("_")[1];
//   let string=baseURL+"/"+id;
//   axios.get(string)
//     .then(function(res) {
//       datajob=res.data.data;
//       console.log(dataobj);
//       })
//     .catch(function(err) {
//       console.log(err)
//     })
// }

function viewperson(e) {
  e.preventDefault();  
  let Myobject;
  if (event.target.className.toLowerCase() === 'view') {
  console.log(govdb);
  let e_id = event.target.id;
  console.log(e_id);
    let id = e_id.split("_")[1];
  let string=govdb+"/"+id;
  axios.get(string)
    .then(function(res) {
      let d = res.data.data;
      console.log(d);
          $('.modal-header').html(`<div class="modal-header">
          <div id=title{d.ss}><h2>Name: ${d.first} ${d.last}</h2></div>
          <button type="button" class="close" data-dismiss="modal">&times;</button></div>`)
            $('.modal-body').html(`
          <div><img class="photoid" id=image_${d.ss} src="${d.image}" alt="photoid" height="200" width="200"> </div>
          <div id=item_${d.ss}><h4>ID:</h4> ${d.id}</div>
          <div id=ss_${d.ss}><h4>S.S:</h4> ${d.ss}</div> 
          <div id=gender_${d.ss}><h4>Gender:</h4> ${d.gender}</div>
          <div id=species_${d.ss}><h4>Species:</h4> ${d.species}</div> 
          <div id=height_${d.ss}><h4>height:</h4> ${d.height}</div>
          <div id=color_${d.ss}><h4>Hair Color:</h4> ${d.color}</div>
          <div id=occupation_${d.ss}><h4>Occupation:</h4> ${d.occupation}</div> 
          <div id=wanted_${d.ss}><h4>Wanted?</h4> ${d.wanted}</div>
          <div id=city${d.ss}><h4>Address:</h4> ${d.city}</div>`)
    })
    .catch(function(err) {
      console.log(err)
    })
}
}

// function deleteItem(e) {
//   e.preventDefault();
//   if (event.target.className.toLowerCase() === 'delete') {
//     console.log(event.target.id);
//     let e_id = event.target.id;
//     let id = e_id.split("_")[1];
//     console.log(id);
//     if(confirm(`Are you sure you want to delete item with the ID ${id}`)){
//   let string=baseURL+"/"+id;
//     console.log(string);
//     axios.delete(string).then(function(res) {
//     window.alert(`meal with ID ${id} was deleted successfully`);
//     readAllItems(e);
//   })
// .catch(function(err) {
//       console.log(err)
//     })}
// }
// }

//register event listeners
// document.getElementById('create_btn').addEventListener('click', createItem);
document.getElementById('readall_btn').addEventListener('click', readAllItems);
//document.getElementById('read_btn').addEventListener('click', readItem);
// document.getElementById('update_btn').addEventListener('click', updateItem);
 //$('.update').on('click',updateItem);
// $('.delete').on('click',deleteItem);




window.onload=readAllItems;
document.querySelectorAll('#payload')
  .forEach(function(c) {
    c.addEventListener('click', viewperson)
  })
document.querySelectorAll('#payload')
  .forEach(function(c) {
    c.addEventListener('click', copytodb)
  })

