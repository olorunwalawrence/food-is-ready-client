let sbtn = document.querySelector('.btn');
sbtn.addEventListener('click', fetchSignup);
const error = document.querySelector('.error');

function fetchSignup(e) {
    e.preventDefault();

    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let uname = document.getElementById('uname');
    let email = document.getElementById('email');
    let password = document.getElementById('pword');
    // let  consfirm-password= document.getElementById('cpword');

    const data = {
        firstname: fname.value,
        lastname: lname.value,
        username: uname.value,
        email: email.value,
        password: password.value
    }


    const url = "https://food-is-ready.herokuapp.com/signup";
    // const url = "http://localhost:5000/signup";

    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },

        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(response => {
            error.textContent = response.message;
            console.log(response.user.email)
            if(response.user.email =='olorunwalawrence5@gmail.com'){
                localStorage.setItem('token', `${response.user.token}`);
                location = 'adminDashboard.html'
              }else{
                localStorage.setItem('token', `${response.user.token}`);
                location = 'menu.html'
              }
          
       
        }).catch((err) =>{
           
        })
}