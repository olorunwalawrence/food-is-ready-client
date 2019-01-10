let btn = document.querySelector('.login');
btn.addEventListener('click', fetchLogin);

function fetchLogin(e) {
    e.preventDefault();


    let email = document.getElementById('email');
    let password = document.getElementById('pword');

    const data = {
        email: email.value,
        password: password.value
    }

      const url = "https://food-is-ready.herokuapp.com/login";
  

    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": 'application/json',

        },

        body: JSON.stringify(data)
    }
    ).then(res => res.json())
        .then(response => {
            const error = document.querySelector('.error');
            error.textContent = response.message;

          if(response.success !== false){
            if(response.result.email =='olorunwalawrence5@gmail.com'){
                localStorage.setItem('token', `${response.result.token}`);
                
                location = 'adminDashboard.html'
              }else{
                localStorage.setItem('token', `${response.result.token}`);
                location = 'menu.html'
              }
          }

         
            
        }).catch(err => console.log(err))
}





