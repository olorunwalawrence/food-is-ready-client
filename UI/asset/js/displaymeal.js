const displaymeal = document.querySelector('#allcards');
const displaybasket = document.querySelector('.basket');
const mealUrl = "https://food-is-ready.herokuapp.com/getallmeal";
const requesturl ="https://food-is-ready.herokuapp.com/requestmeal";
const orderurl = "https://food-is-ready.herokuapp.com/order";
// order meal function
const orderbtn = document.getElementById('orderbtn')
orderbtn.addEventListener('click',orderAmeal);

// #############################

fetch(mealUrl, {
    method: "GET",
    headers: {
        "content-type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`
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
            <button type="button" id="addtocart" onclick="addtocart(this, ${meals.mealid}),requestmeal(this)" data ='${JSON.stringify(meals)}'  class="request">Add to cart</button>
          </div>
        `
        })

        displaymeal.innerHTML = allMeal;
      

    })



function addtocart (self, id) {
  
    const getData = self.getAttribute('data')
    const requestData = JSON.parse(getData);
    // console.log(requestData)
    
    
    // const data = {
    //     mealname:requestData.mealname,
    //     price: requestData.price,
    // }

const addtocart = `https://food-is-ready.herokuapp.com/getameal/${id}`;

fetch(addtocart, {
    method:"GET",
    headers: {
        "content-type": "application/json",
    },
    
}).then(res => res.json())
    .then(response => {
        console.log(response)
        // let result = response.meal[0];
        document.location.reload();      
    })   
} 

 
// meal request function

function requestmeal(self) {
  
     const getData = self.getAttribute('data')
    const requestData = JSON.parse(getData);
    
    
    const data = {
        mealname:requestData.mealname,
        price:requestData.price
    }
    // console.log(requestData)
      
        fetch(requesturl, {
            method:'POST',
            headers:{
                "content-type": "application/json",
                "x-access-token": `${localStorage.getItem('token')}`
            },
            body:JSON.stringify(data),
    
        }).then(resp => resp.json())
        .then(result =>{
            console.log(result)
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



//   ###############################

// order meal functionality


function orderAmeal(e){
    e.preventDefault();
  
    let fullname = document.getElementById('fullname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let address = document.getElementById('address');
    let bstop = document.getElementById('bstop');
    let lga = document.getElementById('lga');
  
    const data ={
        fullname: fullname.value,
        email:email.value,
        phone:phone.value,
        address:address.value,
        bstop:bstop.value,
        lga:lga.value
    }


    fetch(orderurl, {
        method:'POST',
        headers:{
            "content-type": "application/json",
            "x-access-token": `${localStorage.getItem('token')}`
        },
        body:JSON.stringify(data),

    }).then(resp => resp.json())
    .then(result =>{
        console.log(result)
    }).catch(err =>{
        console.log(err.message)
    })
  }
  
  // ########################################################
//   function to close order modal