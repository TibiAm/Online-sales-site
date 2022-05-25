var Login = document.getElementById("Login");
var Register = document.getElementById("Register");

var indicator = document.getElementById("Indicator");

function register(){
    Register.style.transform = "translateX(0px)";
    Login.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)"
}

function login(){
    Register.style.transform = "translateX(300px)";
    Login.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)"
}