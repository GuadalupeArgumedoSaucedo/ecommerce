"use strict";
function saveData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user_records = JSON.parse(localStorage.getItem("users")) || [];
    if(user_records.some((v)=>{
        return v.email == email && v.password == password
    })){
        alert("Login Successfull")
        let current_user=user_records.filter((v)=>{
            return v.email == email && v.password == password
        })[0]

        localStorage.setItem("name",current_user.name);
        localStorage.setItem("email",current_user.email);
        window.location.href="profile.html";
        
    }
    else{
        alert("Login Fall");
    }


}