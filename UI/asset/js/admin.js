const orderDataUrl = "https://food-is-ready.herokuapp.com/alluserorder";
let error = document.querySelector('.error')
const orderhistorys = document.querySelector('.orderhistorys');
const requestedMealTable = document.querySelector('.meals');

fetch(orderDataUrl, {
  method: "GET",
  headers: {
    "content-type": "application/json"

  },
}).then(res => res.json())
  .then(data => {

    console.log(data)
    let output = "";
    data.map(datas  => {
   
      output +=   `
      <table style="width:100%">
      <tr>
      <th>userid</th>
        <th>name</th>
        <th>PHone</th>
        <th>Address</th>
      </tr>
      <tr>
       <td>${datas.userid}</td>
        <td>${datas.fullname}</td>
        <td>${datas.phone}</td> 
        <td>${datas.address}</td>
      </tr>
    </table>
      `
    })
   
    orderhistorys .innerHTML = output;
  });


  /* =================================
    FETCH REQUESTed MEALS BY USER ID 
    USER
   ================================= */
   const requestedMeal = `https://food-is-ready.herokuapp.com/requestedmeals`;

  fetch(requestedMeal, {
    method: "GET",
    headers: {
      "content-type": "application/json",
  
    },
  }).then(res => res.json())
    .then(meals => {
      console.log(meals)
      let output = "";
      meals.map(meals  => {
     
        output +=   `
        <table style="width:100%">
        <tr>
    
          <th>userid</th>
          <th>mealname</th> 
          <th>price</th>
        
        </tr>
        <tr>
         <td>${meals.userid}</td>
          <td>${meals.mealname}</td>
          <td>${meals.price}</td>
        </tr>
      </table>
        `
      })
     
      requestedMealTable .innerHTML = output;

    });


 