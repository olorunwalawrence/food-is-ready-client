


let btn = document.getElementById('addmeal');
btn.addEventListener('click', fetchmeal);


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


    const url = "http://localhost:5000/createmeal";

    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": 'application/json',
            "x-access-token": `${localStorage.getItem("token")}`
        },

        body: JSON.stringify(data)
    }
    ).then(res => res.json())
        .then((response) => {
            console.log(response);
            // location = 'meal.html'
        }).catch(err => console.log(err))
    document.getElementById("form").style.display = "none";
    document.getElementById('bkdrp').style.display = "none";
}




    
            // console.log(allMeal)

// const addd = document.getElementById('addmeal');
// addd.addEventListener('click', addmeal);

// function addmeal() {
//     const markup = `

//     `;
//     document.getElementById('right').innerHTML = markup;

//     document.getElementById("form").style.display = "none";
//     document.getElementById('bkdrp').style.display = "none";
// }





