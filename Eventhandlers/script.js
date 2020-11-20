


const buttonColorBack = document.querySelector(".btn--change--background");
const buttonAlert = document.querySelector(".btn--alert");
const body = document.querySelector(".main-body");

const alertNotification = function(){
    alert("button clicked!");
}

const changeBackground = function(){
    body.classList.add("red-background");
}

const toggleColor = function(){
    body.classList.toggle("red-background");
}

buttonAlert.addEventListener("click", alertNotification);
buttonColorBack.addEventListener("click", toggleColor);


