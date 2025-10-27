document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for demo purposes
    if (username === "user" && password === "123") {
        window.location.href = "homepage.html"; // Redirect to homepage
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password!";
    }
});
