"use strict";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginForm").addEventListener("submit", saveData);
});

function saveData(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    if(user_records.some((v)=>{
        return v.email == email && v.password == password
    })){
        alert("Login Successfull!")
        let current_user=user_records.filter((v)=>{
            return v.email == email && v.password == password
        })[0]

        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);
        console.log('redirect');
        window.location.href="index.html";
    }
    else{
        alert("Login Failed");
    }
}