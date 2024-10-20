document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signupForm");

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    form.addEventListener("submit", handleSubmit);

    function handleSubmit(event) {
      event.preventDefault(); 

      // Clear previous error messages
      clearErrors();

      let isValid = true;

      // Perform validation
      if (!validateUsername(username.value)) isValid = false;
      if (!validateEmail(email.value)) isValid = false;
      if (!validatePassword(password.value)) isValid = false;
      if (!validateConfirmPassword(password.value, confirmPassword.value)) isValid = false;

      // If all validations pass, submit the form
      if (isValid) {
        console.log("Form submitted");
        console.log("Username:", username.value, "Email:", email.value, "Password:", password.value);
      }
    }

    // Clear all error messages
    function clearErrors() {
      document.getElementById("usernameError").textContent = "";
      document.getElementById("usernameError").style.display = "none"; // Hide again after clearing

      document.getElementById("emailError").textContent = "";
      document.getElementById("emailError").style.display = "none";

      document.getElementById("passwordError").textContent = "";
      document.getElementById("passwordError").style.display = "none";

      document.getElementById("confirmPasswordError").textContent = "";
      document.getElementById("confirmPasswordError").style.display = "none";
    }

    // Validate username
    function validateUsername(username) {
      if (username === "") {
        showError("usernameError", "Username is required");
        return false;
      } else if (username.toLowerCase() === username) {
        showError("usernameError", "Username must be in uppercase");
        return false;
      }
      return true;
    }

    // Validate email
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        showError("emailError", "Email is required");
        return false;
      } else if (!emailPattern.test(email)) {
        showError("emailError", "Email is invalid");
        return false;
      }
      return true;
    }

    // Validate password
    function validatePassword(password) {
      if (password === "") {
        showError("passwordError", "Password is required");
        return false;
      } else if (password.length < 6) {
        showError("passwordError", "Password must be at least 6 characters long");
        return false;
      }
      return true;
    }

    // Validate confirm password
    function validateConfirmPassword(password, confirmPassword) {
      if (confirmPassword === "") {
        showError("confirmPasswordError", "Confirm password is required");
        return false;
      } else if (password !== confirmPassword) {
        showError("confirmPasswordError", "Passwords do not match");
        return false;
      }
      return true;
    }

    // Display the error message and show the element
    function showError(id, message) {
      const errorElement = document.getElementById(id);
      errorElement.textContent = message;
      errorElement.style.display = "block"; // Show the error message
    }
});
