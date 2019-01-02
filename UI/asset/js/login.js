let btn = document.querySelector('.login');
btn.addEventListener('click', fetchLogin);

function fetchLogin(e) {
    e.preventDefault();


    let email = document.getElementById('email');
    let password = document.getElementById('pword');
    // let  consfirm-password= document.getElementById('cpword');

    const data = {
        email: email.value,
        password: password.value
    }

    const url = "http://localhost:5000/login";

    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": 'application/json',
            // "x-access-token": `${localStorage.getItem("token")}`
        },

        body: JSON.stringify(data)
    }
    ).then(res => res.json())
        .then(response => {
          console.log(response);
          if(response.success !== false){
            if(response.result.email =='olorunwalawrence5@gmail.com'){
                localStorage.setItem('token', `${response.result.token}`);
                
                location = 'adminDashboard.html'
              }else{
                localStorage.setItem('token', `${response.result.token}`);
                location = 'menu.html'
              }
          }else{
             console.log(response.message) 
          }

         
            
        }).catch(err => console.log(err))
}

