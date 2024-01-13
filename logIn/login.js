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
        // Redirect to the homePage 'jessem'
        window.location.href = "http://127.0.0.1:5501/step%20man/man.html"
      } else { 
        // if user put inccorect information that don't match the input of the signUp that he created it will be returned this
        alert("Untrouvable account. Please sign in.")
      }
    })
  })