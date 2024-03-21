$(document).ready(function() {
  $("#register-btn").click(function(e) {
      e.preventDefault(); // Prevent default form submission
      
      // Get form data
      var username = $("#username").val();
      var password = $("#password").val();
      var confirmPassword = $("#confirm-password").val();
      var email = $("#email").val();

      // Validate password match
      if (password !== confirmPassword) {
          $("#message").html("<div class='error'>Passwords do not match.</div>");
          return;
      }

      // AJAX request to register.php
      $.ajax({
          type: "POST",
          url: "./php/register.php",
          data: {
              username: username,
              password: password,
              email: email,
          },
          success: function(response) {
              if (response === "success") {
                  // Registration successful, redirect to login page
                  window.location.href = "./login.html";
              } else {
                  // Display error message
                  $("#message").html("<div class='error'>" + response + "</div>");
              }
          },
          error: function(xhr, status, error) {
              $("#message").html("<div class='error'>Error: " + xhr.responseText + "</div>");
          }
      });
  });
});
