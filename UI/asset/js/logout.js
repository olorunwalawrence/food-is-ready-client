const logout = document.querySelector('#logout');


const url = "http://localhost:5000/allorderedmeal";

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

/*
====================================
CLOSE MODAL FUNCTION

==================================== */



