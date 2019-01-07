const requestedUrl = 'https://food-is-ready.herokuapp.com/requestedmeal';
const modal = document.getElementById("myModal");
const foodOrder = document.getElementById("placeOrder");

const requestedmeal = () => {
  fetch(requestedUrl, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "x-access-token": `${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      let allMeal = "";
      result.map(req => {
        allMeal += `
          <div class="cards" id="olo">
            <div class="containers">
           
           <p id="para"> ${req.mealname}: ${req.price}</p> 
           <a onClick ='deleteRequest(${
             req.requestid
           })' class="cancel">cancel request</a>     
            </div> 
           
          </div>
        `;
      });

      const requestTable = document.querySelector("#requestTable");
      requestTable.innerHTML = allMeal;
    });
};
requestedmeal();

/*
====================================================
DELETE A MEAL REQUEST
====================================================
*/

const deleteRequest = requestid => {
  const deleteUrl = `http://localhost:5000/deleterequested/${requestid}`;
  fetch(deleteUrl, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "x-access-token": `${localStorage.getItem("token")}`
    }
  })
    .then(res => {
      res.json();
    })
    .then(del => {
      location.reload();
    });
};

/*
====================================================
ADD EVENT LISTENER TO MADAL
====================================================
*/
foodOrder.addEventListener("click", orderDisplay);

function orderDisplay() {
  modal.style.display = "block";
}
/*
====================================================
WHEN A USER CLICKS ON THE <SPAN> X, CLOSE THE MODAL
====================================================
*/

const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
};

/*
====================================================
WHEN A USER CLICK THE ORDERBTN CLOSE THE MODDAL ALSO
====================================================
*/
const orderbtns = document.querySelector(".orderbtns");
console.log(orderbtns)
orderbtns.onclick = function(){
  modal.style.display = "none";
};

/*
====================================================
FOOD ORDER FUNTIONALITY
====================================================
*/

const order = () => {
  let ord = document.getElementById("placeOrder");
};
