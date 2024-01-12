        $(document).ready(function() {
            $("#loginBtn").click(function() {
                var username = $("#username").val();
                var password = $("#password").val();
                var rememberMe = $("#rememberMe").prop("checked");

                // Store data in local storage
                localStorage.setItem("username", username); 
                console.log(username)
                localStorage.setItem("password", password);
                localStorage.setItem("rememberMe", rememberMe);
                window.location.href = "welcome.html";
            });
        });
//commit