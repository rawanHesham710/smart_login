var nameInput = document.querySelector(".name")
var signEmailInput = document.querySelector(".signEmail")
var signPassword = document.querySelector(".signPass")
var signButton = document.querySelector(".signbtn")

var allInfo = []; 



//email validation
function emailValid(){
    emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailRegex.test(signEmailInput.value)){
        document.querySelector(".namevalid").classList.replace("d-block" , "d-none")
        return true;
    }
    document.querySelector(".namevalid").classList.replace("d-none" , "d-block")
    return false
}

signEmailInput.addEventListener("input" , emailValid)

//password validation
function passValid(){
    passRegex = /^[A-Z][a-zA-Z0-9!@#$%^&*()]{5,}$/
    if(passRegex.test(signPassword.value)){
        document.querySelector(".passValid").classList.replace("d-block","d-none");
        return true;
    }
    document.querySelector(".passValid").classList.replace("d-none","d-block");
    return false;
}


signPassword.addEventListener("input" ,passValid );


if(localStorage.getItem("allInfo") != null){
    allInfo = JSON.parse(localStorage.getItem("allInfo"))
}

function exsitEmail(){
    for(var i = 0; i < allInfo.length; i++){
        if(signEmailInput.value == allInfo[i].email){
         document.querySelector(".existEmail").classList.replace("d-none" , "d-block")
            return false
        }
    }
    document.querySelector(".existEmail").classList.replace("d-block", "d-none")
    
    
    return true
}
function getInfo(){
    if(emailValid() && passValid() && exsitEmail()){
        document.querySelector(".signReq").classList.replace("d-block", "d-none")
        
       var  logInfo = {
            name: nameInput.value,
            email: signEmailInput.value,
            password:signPassword.value
        }

        allInfo.push(logInfo);
        localStorage.setItem("allInfo" , JSON.stringify(allInfo));
        window.location.href = './index.html';
    }
    else{
        if(exsitEmail()){
            document.querySelector(".signReq").classList.replace("d-none", "d-block")

        }
    }
  
}

signButton.addEventListener("click" , getInfo)

