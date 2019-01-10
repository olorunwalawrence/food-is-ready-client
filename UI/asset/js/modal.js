let button = document.getElementById('add');

button.addEventListener('click', displaymodal)

let clbtn = document.getElementById('close');
clbtn.addEventListener('click', closeModal );


function displaymodal(){
    // e.preventDefault();
    document.getElementById("form").style.display = "block";
    document.getElementById('bkdrp').style.display="block";
}



function closeModal(){
    // e.preventDefault();
    document.getElementById("form").style.display = "none";
    document.getElementById('bkdrp').style.display="none";
};



// pick the value of the image file and set it to the value of the the image div

let uploadedFile = document.querySelector('input[type="file"]');
   function previewFile(){
       var preview = document.querySelector('#mealimage img'); //selects the query named img
       let file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

    //    console.log(preview);
     reader.onloadend = function () {
        console.log(reader);
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

uploadedFile.addEventListener('change', previewFile);


