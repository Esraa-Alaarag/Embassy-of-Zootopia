
let payLoad = document.querySelector('#payload');
let govdb = 'https://nameless-hollows-47144.herokuapp.com/api/information';



function copytodb(e) {
e.preventDefault();  
  let Myobject;
  console.log(event.target.className.toLowerCase());
  console.log(event.target.id);
  if (event.target.className.toLowerCase() === 'add') {
  let e_id = event.target.id;
    let id = e_id.split("_")[1];
  let string=govdb+"/"+id;
  var result=axios.get(string)
    .then(function(res) {
      let d = res.data.data;
    axios.put('/gov', {
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
           if(res.data.status=='failed') 
            alert('record id:'+d.id+' already exist')
           else
            alert('record id:'+d.id+'was inserted successfully')
     })
     // console.log('222', res)
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
  //e.preventDefault();
  axios.get(govdb)
   .then(function(res){
    console.log(res.data.data.length);
      console.log(res.data.data);
      payLoad.innerHTML = "";
      res.data.data.forEach(function(d, c) {
        fillTable(d);
      })
    })
    .catch(function(err) {
      console.log(err)
    })
}


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
       $('.modal-header').html(`<button type="button" class="close" data-dismiss="modal">&times;</button></div>`);
      if(d.wanted==true){
            $('.modal-header').append(`<div class="alert alert-danger alert-dismissable fade in">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            <strong>Danger!</strong> This Person is <strong>Wanted !!!!</strong> follow Protocol.355 immediately</div>`)}

          $('.modal-header').append(`<h2>Name: ${d.first} ${d.last}</h2></div>`)
            
          $('.modal-body').html(`
          <div><img class="photoid" id=image_${d.ss} src="${d.image}" alt="photoid" height="200" width="auto"> </div>
          <div id=item_${d.ss}><h4>ID:</h4> ${d.id}</div>
          <div id=ss_${d.ss}><h4>S.S:</h4> ${d.ss}</div> 
          <div id=gender_${d.ss}><h4>Gender:</h4> ${d.gender}</div>
          <div id=species_${d.ss}><h4>Species:</h4> ${d.species}</div> 
          <div id=height_${d.ss}><h4>height:</h4> ${d.height}</div>
          <div id=color_${d.ss}><h4>Hair Color:</h4> ${d.color}</div>
          <div id=occupation_${d.ss}><h4>Occupation:</h4> ${d.occupation}</div> 
          <div id=wanted_${d.ss}><h4>Wanted?</h4> ${d.wanted}</div>
          <div id=city${d.ss}><h4>Address:</h4> ${d.city}</div>`)
           $('.add').attr('id',`add_${d.ss}`); 
    })
    .catch(function(err) {
      console.log(err)
    })
}
}

$('#displayone').on('change',function(e) {
  let val = $(this).val();
   console.log(val);
  let string=govdb+"/"+val;
  axios.get(string)
   .then(function(res){
    console.log(res.data.data.length);
      console.log(res.data.data);
      let d=res.data.data;
      payLoad.innerHTML = "";
      fillTable(d);
      payLoad.innerHTML += `<button type="button"  onClick="window.onload()">◀︎ Back to the Datbase</button>`
      $('#displayone').val(" ");
    })
    .catch(function(err) {
       payLoad.innerHTML = "";
       payLoad.innerHTML += `person with Social security #${val} is NOT FOUND<br>
       <button type="button"  onClick="window.onload()">◀︎ Back to the Datbase</button>`;
       $('#displayone').val(" ");
      console.log(err)
      return err;
    })
  
})

function fillTable(d)
{
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
}





document.getElementById('readall_btn').addEventListener('click', readAllItems);


window.onload=readAllItems;
document.querySelectorAll('#payload')
  .forEach(function(c) {
    c.addEventListener('click', viewperson)
  })

  $(document).on('click', '.add', function(event) {
    addEventListener('click', copytodb)
    })

