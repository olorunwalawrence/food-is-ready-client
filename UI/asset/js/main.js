let btn = document.querySelector('button');
btn.addEventListener('click', fetchApi);
function fetchApi() {
    const data = {
        firstname: document.getElementsByName('firstname'),
        lastname: document.getElementsByName('lastname'),
        username: document.getElementsByName('username'),
        email: document.getElementsByName('email'),
        password: document.getElementsByName('password'),
        confirm: document.getElementsByName('confirm-password')
    }
    let pass = document.getElementsByName('password').values;
    let confirm = document.getElementsByName('confirm-password').values;

    if (pass !== confirm) {
        window.alert('your password do not match')
    } else {

        fetch("https://food-is-ready.herokuapp.com/create", {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },

            body: JSON.stringify(data)
        }
        ).then(res => res.json())
            .then(response => {
                console.log(response)
            }).catch(err => console.log(err.message))
    }
}





