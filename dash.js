fetch("https://jsonplaceholder.typicode.com/users")

.then((apidata)=>{

 return apidata.json();

}).then((datas)=>{
  console.log(datas[0].username);

  let  table="";

  datas.map((values)=>{
    console.log("values",values);

table +=`<tr>

<td> ${values.id}</td>
<td> ${values.name}</td>
<td> ${values.username}</td>
<td> ${values.email}</td>
<td> ${values.address.street}</td>
<td> ${values.address.suite}</td>
<td> ${values.address.city}</td>
<td> ${values.address.zipcode}</td>
<td> ${values.address.geo.lat}</td>
<td> ${values.address.geo.lng}</td>
<td> ${values.phone}</td>
<td> ${values.website}</td>
<td> ${values.company.name}</td>
<td> ${values.company.catchPhrase}</td>
<td> <button class="btn1" type="button onclick="onedit(this)">Edit</button> <button class="btn2" type="button value="delete" onclick="ondel(this)">Delete</button></td>



</tr>`

  });
  document.getElementById("tablecontent").innerHTML=table;
})


 myFunction=() =>{
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input1");
  filter = input.value.toUpperCase();
  table = document.getElementById("tbl");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


onformsubmit=()=>{
  resetform();
  onedit();
}


function resetform(){
  document.getElementById('name').value="";
  document.getElementById('uname').value="";
  document.getElementById('email').value="";
  document.getElementById('num').value="";
  
}


function onedit(td){
 Row =td.parentNode.parentNode.rowIndex;
  console.log(Row);
  document.getElementById('name').value=selectedRow.cell[1].innerHTML;
  document.getElementById('uname').value=selectedRow.cell[2].innerHTML;
  document.getElementById('email').value=selectedRow.cell[3].innerHTML;
  document.getElementById('num').value=selectedRow.cell[10].innerHTML;
  
}

// function update(){
//   selectedRow.cell[1].innerHTML=
//   selectedRow.cell[2].innerHTML
//   selectedRow.cell[3].innerHTML
//   selectedRow.cell[4].innerHTML
// }