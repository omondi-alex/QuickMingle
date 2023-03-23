// This code is not needed for the home page of QuickMingle
// It can be used to add functionality to the form or other parts of the app

//signUp and Login
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    // Call a backend API to verify the credentials and log the user in
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('U tried submitting the form')
    const fullname = signupForm.fullname.value;
    const email = signupForm.email.value;
    const username = signupForm.username.value;
    const password = signupForm.password.value;
    // Call a backend API to create a new user account
});





//Login

function login() {
    // get the values of the username and password input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // validate the username and password (e.g. check against a database)
    if (username === "example" && password === "password") {
        // if the username and password are valid, redirect to the home page
        window.location.href = "home.html";
    } else {
        // if the username and password are not valid, display an error message
        alert("Invalid username or password.");
    }
}


// Check if the user is logged in or not
if (!isLoggedIn()) {
    // If the user is not logged in, redirect to login page
    window.location.replace("/login");
} else {
    // If the user is logged in, show the home page
    showHomePage();
}


// Get the logout button element
const logoutBtn = document.getElementById("logout-btn");

// Add a click event listener to the logout button
logoutBtn.addEventListener("click", function(e) {
    // Prevent the default behavior of the button
    e.preventDefault();

    // Show a confirmation dialog
    const confirmLogout = confirm("Are you sure you want to logout?");

    // If the user confirms logout, redirect to logout endpoint
    if (confirmLogout) {
        window.location.replace("/logout");
    }
});



// Get the login form element
// const loginForm = document.getElementById("login-form");

// Add a submit event listener to the login form
loginForm.addEventListener("submit", function(e) {
    // Prevent the default behavior of the form
    e.preventDefault();

    // Get the username and password input fields
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Get the values entered by the user
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Send an Ajax request to the server to authenticate the user
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/login");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function() {
        if (xhr.status === 200) {
            // If the login is successful, redirect to the home page
            window.location.replace("/home");
        } else {
            // If the login fails, show an error message
            const errorMessage = document.getElementById("error-message");
            errorMessage.textContent = "Invalid username or password. Please try again.";
            errorMessage.style.display = "block";
        }
    };
    const formData = "username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password);
    xhr.send(formData);
});




//profile creation 
function createProfile() {
    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const bio = document.getElementById('bio').value;

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set the request URL and method
    xhr.open('POST', '/api/profiles', true);

    // Set the request headers
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', `Bearer ${localStorage.getItem('token')}`);

    // Set the callback function for when the request completes
    xhr.onload = function() {
        if (xhr.status === 201) {
            // Profile created successfully
            const profile = JSON.parse(xhr.responseText);
            console.log(profile);
        } else {
            // Error creating profile
            console.error(xhr.statusText);
        }
    };

    // Send the request with the form data as a JSON object
    xhr.send(JSON.stringify({ name, email, password, bio }));
}