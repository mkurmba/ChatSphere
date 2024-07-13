const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e) =>{
    e.preventDefault(); //preventing form from submitting
}
sendBtn.onclick = ()=>{
    //lets start Ajax
    let xhr = new XMLHttpRequest(); // creating XML object 
    xhr.open("POST","php/insert-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value= ""; // once the message  is inserted into database then leave the inputField blank 
            }
        }
    }
    
    let formData = new FormData(form);
    xhr.send(formData);
}   

chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}


setInterval(()=>{
    //lets start Ajax
    let xhr = new XMLHttpRequest(); // creating XML object 
    xhr.open("POST","php/get-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){
                    scrollToBottom();
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}, 500);//this function will run frequently after 500ss


function scrollToBottom(){
    chatBox.scrollTo = chatBox.scrollHeight;

}