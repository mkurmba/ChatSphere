const form = document.querySelector(".login form"),
continueBtn =  form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");


form.onsubmit = (e) =>{
    e.preventDefault(); //preventing form from submitting
}


continueBtn.onclick = ()=>{

    //lets start Ajax
    let xhr = new XMLHttpRequest(); // creating XML object 
    xhr.open("POST","php/login.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
                if(data == "success"){
                    window.location.href = "users.php";
                }else{
                    errorText.style.display = "block";
                    errorText.textContent = data;
                                       
                }
            }
        }
    }
    
    let formData = new FormData(form);
    xhr.send(formData);
}  