
var boxes = document.querySelectorAll(".signup .container .gender .box")
var inputEmail = document.getElementById("email")
var inputPassword = document.getElementById("password")
var signupBtn = document.querySelector(".btn-submit")
var alertBox = document.querySelector(".alert")




var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}





signupBtn.addEventListener("click", function(e) {
    e.preventDefault();

 
    if (!inputEmail.value.trim() || !inputPassword.value.trim() ) {
        alert("Please Add Email, Password, or Gender");
    } else if (inputPassword.value.length < 8) {
        alert("Password should be at least 8 characters");
    } else {
        alert("Passed", "#4cd89d");
        addData(inputEmail.value, inputPassword.value);
        alert("you're seccasfully create your account move to login and visit ")
        setTimeout(function() {
            window.location.href = "./login.html";
        }, 1000);
    }
}) 





function addData(email, password, gender) {
    var userData = {
        email: email,
        password: password,
        gender: gender
    };

    var existingData = JSON.parse(localStorage.getItem("userData")) || [];

    existingData.push(userData);

    localStorage.setItem("userData", JSON.stringify(existingData));
}