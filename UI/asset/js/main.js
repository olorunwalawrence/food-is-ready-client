let btn = document.querySelector('button');
btn.addEventListener('click',fetchApi);
function fetchApi(){
    const data = {
        firstname:'olorunwa',
        lastname:'lawrence',
        username:'adelaja',
        email:'olorunwalawrence5@gmail.com',
        password:'loversolorunwa'
    }
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






