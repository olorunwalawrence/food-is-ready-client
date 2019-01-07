const logout = document.querySelector('#logout');


// const url = "http://localhost:5000/allorderedmeal";

// ######################
// display all ordered meal


const user = {

  logoutUser() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('email');
    window.location.replace('index.html');
  }
};

logout.addEventListener('click', user.logoutUser);


// responsive navigation function
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//get the names of the customer that made order for meal functionality

// fetch(url, {
//   method: "GET",
//   headers: {
//     "content-type": "application/json",
//     "x-access-token": `${localStorage.getItem("token")}`
//   }
// }).then(res => res.json())
//   .then(orderedmeals => {
//     let result = "";
//     orderedmeals.map(ordered => {
//       result = `
//             <div id="result">${ordered.fullname}</div>
//             <div id="result">2</div>
//             <div id="result">3</div>
//   `;

  
//     })
//     console.log(orderedmeals)
//   })




