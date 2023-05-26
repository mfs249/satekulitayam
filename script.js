function validatePassword(event) {
  event.preventDefault(); // Prevent form submission

  var password = document.getElementById("passwordInput").value;

  if (password === "kopisusu") {
    alert("Correct password! Access granted.");

    // Redirect the user to the WordPress page
    window.location.href = "https://medium.com/@glngdayu/alocaway-local-transportation-partner-59dac86afc43"; // Replace with your actual WordPress page URL
  } else {
    alert("Incorrect password! Please try again.");
    // Add code here to handle incorrect password scenario
  }
}
