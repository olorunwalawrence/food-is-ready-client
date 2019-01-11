let btn = document.getElementById('addmeal');
btn.addEventListener('click', fetchmeal);

/*
====================================================
ADMIN ADD MEAL FUNCTIONALITY
====================================================
*/
function fetchmeal(e) {
    e.preventDefault();

    let mealname = document.getElementById('mealname');
    let price = document.getElementById('price');
    let image = document.querySelector('input[type="file"]');
    let description = document.getElementById('description');

    const data = {
        mealname: mealname.value,
        price: price.value,
        image: image.value,
        description: description.value
    }

    const url = "https://food-is-ready.herokuapp.com/createmeal";
   

    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "x-access-token": `${localStorage.getItem("token")}`
            
        },

        body: JSON.stringify(data)
    }
    ).then(res => res.json())
        .then((response) => {
            console.log(response);
        }).catch(err => console.log(err.message))
    
}








