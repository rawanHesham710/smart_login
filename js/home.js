var showName = document.querySelector(".inner")

var outBtn = document.querySelector(".outBtn")
if(localStorage.getItem("allInfo") != null){
    allInfo = JSON.parse(localStorage.getItem("allInfo"))
}

showName.innerHTML = `<h1>Welcome ${allInfo[0].name} </h1>`

outBtn.addEventListener("click", function(){
    window.location.href = "./index.html";
})