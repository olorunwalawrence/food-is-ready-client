const displaymeal = document.querySelector('#allcards');
const displaybasket = document.querySelector('.basket');
const mealUrl = "http://localhost:5000/getallmeal";
const requesturl ="http://localhost:5000/requestmeal";
const orderurl = "http://localhost:5000/order";
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

const addtocart = `http://localhost:5000/getameal/${id}`;

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
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            "x-access-token": `${localStorage.getItem('token')}`
        },
        body:JSON.stringify(data),

    }).then(resp => resp.json())
    .then(rest =>{
        location='order.html'
    }).catch(err =>{
        console.log(err.message)
    })

  }
  
  // ########################################################
//   function to close order modal
