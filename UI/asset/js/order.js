

/*
====================================================
SEND ALL ORDERED MEAL FOR DISPLAY
====================================================
*/

const sendallmeal = `https://food-is-ready.herokuapp.com/requestedmeal`;

fetch(sendallmeal, {
    method: "GET",
    headers: {
        "content-type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`

    },

}).then(res => res.json())
    .then(response => {
        console.log(response)
        let tot = document.querySelector('#total');
        const orederedCard = document.querySelector('#ordercard')
        let result = "";
        let total = 0;
        response.forEach(item => {

            result += `
          <div id="result">${item.mealname}</div>
            <div id="result">${item.price}</div>
            <div id="result">pending</div>
           
          `;
            let num = parseInt(item.price)
            total += num;
        });


        tot.innerHTML = "#" + ' ' + `${total}`;
        orederedCard.innerHTML = result;

    })

/*
====================================================
DISPLAY THE DATA OF THE USER THAT MADE THE OEDER
====================================================
*/

const orderDataUrl = `https://food-is-ready.herokuapp.com/userorder`;

fetch(orderDataUrl, {
    method: "GET",
    headers: {
        "content-type": "application/json",
        "x-access-token": `${localStorage.getItem("token")}`

    },
}).then(res => res.json())
    .then(data => {
       
        let userdata = document.querySelector('.requester');
        const datas = `
    <div id="request-data">
   <div class ="data"> Fullname : ${data[0].fullname}</div>
    <div class ="data"> Address : ${data[0].address}</div>
    <div class ="data">Phone   : ${data[0].phone}</div>
    <div class ="data">email   : ${data[0].email}</div>
    <div class ="data">LGA     :${data[0].lga}</div>
    </div>

    `
        userdata.innerHTML = datas

    });