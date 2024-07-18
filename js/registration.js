"use strict";

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerForm").addEventListener("submit", saveData);
});

function saveData(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("rePassword").value;

    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records.some(v => v.email === email)) {
        alert("Duplicate Data");
    } else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password,
            "repassword": rePassword
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("User registered successfully!");
        window.location.href="login.html";
    }
}