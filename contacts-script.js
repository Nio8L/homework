let submitButton = document.getElementById("submit");
let submitMessage = document.getElementById("confirmation");  
let errorMessage = document.getElementById("error");

submitMessage.style.display = "none";
errorMessage.style.display = "none";

function hideMessage(message){
     message.style.display = "none";
}

function revealMessage(message){
    message.style.display = "block";
}

submitButton.onclick = function(){
    if(document.getElementById("name").value == "" ||
       document.getElementById("name2").value == "" ||
       document.getElementById("subject").value == "" ||
       document.getElementById("mail").value == "" ||
       document.getElementById("phone").value == ""){
        revealMessage(errorMessage);
        setTimeout(hideMessage, 2000, errorMessage);
    }else{
      document.getElementById("name").value = "";
      document.getElementById("name2").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("mail").value = "";
      document.getElementById("phone").value = "";


      revealMessage(submitMessage);
      setTimeout(hideMessage, 2000, submitMessage);
  }
}
