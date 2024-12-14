var logEmail = document.querySelector(".logEmail");
var logPass = document.querySelector(".logPass");
var logBtn = document.querySelector(".logbtn");



var allInfo = [];

if(localStorage.getItem("allInfo") != null){
    allInfo = JSON.parse(localStorage.getItem("allInfo"))
}

console.log(allInfo);

function logIn() {
    let emailExists = false; 
    let passwordCorrect = false; 

    for (let i = 0; i < allInfo.length; i++) {
        if (logEmail.value == allInfo[i].email) {
            emailExists = true; 
            if (logPass.value == allInfo[i].password) {
                passwordCorrect = true; 

                // Swap the user to the first position
                let temp = allInfo[0];
                allInfo[0] = allInfo[i];
                allInfo[i] = temp;

                
                localStorage.clear();
                localStorage.setItem("allInfo", JSON.stringify(allInfo));
                window.location.href = "./home.html";
                return; 
            }
        }
    }

    if (!emailExists) {
        document.querySelector(".email").classList.replace("d-none", "d-block");
        document.querySelector(".pass").classList.replace("d-block", "d-none");
    } else if (!passwordCorrect) {
        document.querySelector(".pass").classList.replace("d-none", "d-block");
        document.querySelector(".email").classList.replace("d-block", "d-none");
    }
}


logBtn.addEventListener("click", logIn)