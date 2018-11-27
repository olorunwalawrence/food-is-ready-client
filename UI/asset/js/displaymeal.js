const displaymeal = document.querySelector('#allcards');
const displaybasket = document.querySelector('.basket');

const mealUrl = "http://localhost:5000/getallmeal";
const requesturl ="http://localhost:5000/requestmeal";

fetch(mealUrl, {
    method: "GET",
    headers: {
        "content-type": "application/json",
        // "x-access-token": `${localStorage.getItem("token")}`
    }
}).then(res => res.json())
    .then((meal) => {

        let allMeal = "";
        meal.map(meals => {
           
            allMeal +=
                `
          <div class="cards">
          <img src= "" alt="Avatar"> 
            <div class="containers">
            <h4> price: ${meals.price}</h4> 

            <p> Meal Name:${meals.mealname}</p>   
            <p>Descriptions: ${meals.description}</p>   
            </div> 
            <div onclick="addtocart(this, ${meals.mealid}" class="request">Add to cart</div>
          </div>
        `
        })

        displaymeal.innerHTML = allMeal;

    })



function addtocart (e, id,request) {
    // e.preventDdefault();

const addtocart = `http://localhost:5000/getameal/${id}`;

fetch(addtocart, {
    method:"GET",
    headers: {
        "content-type": "application/json",
    },

}).then(res => res.json())
    .then(response => {
        console.log(response.meal[0]);
    })   
} 


 
function requestmeal() {
  
    fetch(requesturl, {
        method:'POST',
        headers:{
            "content-type":"application.json",
        }

    }).then(resp =>{
        // console.log(resp)
    })
} 

// navbar -responsiveness

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



