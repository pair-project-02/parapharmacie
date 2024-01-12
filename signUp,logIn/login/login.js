document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault()
  
      // Get user input
      var usernameInput = document.getElementById("username").value
      var passwordInput = document.getElementById("password").value
  
      // Check if the user exists in localStorage
      var existingData = JSON.parse(localStorage.getItem("userData")) || []
  
      var userData = existingData.find(user => user.email === usernameInput)
  
      if (userData && userData.password === passwordInput) {
        alert("Successfully connected!");
        // Redirect to the homePage but i don't have it for now
        window.location.href = "./welcome.html"
      } else { 
        // if user put inccorect information that don't match the input of the signUp that he created it will be returned this
        alert("Untrouvable account. Please sign in.")
      }
    })
  })