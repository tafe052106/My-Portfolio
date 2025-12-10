// script.js
// This script adds interactivity to your registration form.
// It validates user input and provides feedback before form submission.

// Wait for the DOM to load before running the script
window.addEventListener('DOMContentLoaded', function() {
    // Get references to form and input fields
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Create a div to show messages to the user
    const messageDiv = document.createElement('div');
    messageDiv.style.color = 'red';
    form.prepend(messageDiv);

    // Function to validate email format using regex
    function isValidEmail(email) {
        // Simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Listen for form submission
    form.addEventListener('submit', function(event) {
        // Clear previous messages
        messageDiv.textContent = '';

        // Get values
        const email = emailInput.value.trim();
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Validate email
        if (!isValidEmail(email)) {
            messageDiv.textContent = 'Please enter a valid email address.';
            event.preventDefault(); // Stop form submission
            return;
        }

        // Validate username (at least 3 characters)
        if (username.length < 3) {
            messageDiv.textContent = 'Username must be at least 3 characters.';
            event.preventDefault();
            return;
        }

        // Validate password (at least 6 characters)
        if (password.length < 6) {
            messageDiv.textContent = 'Password must be at least 6 characters.';
            event.preventDefault();
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            messageDiv.textContent = 'Passwords do not match.';
            event.preventDefault();
            return;
        }

        // If all validations pass, show a success message
        alert('Registration successful!');
        // Optionally, you can submit the form or reset it here
        // form.reset();
        // event.preventDefault(); // Uncomment to prevent actual submission
    });
});

/*
Explanation of the code:
- We wait for the page to load before accessing elements.
- We select the form and input fields using their IDs.
- We add a message div to display validation errors to the user.
- The isValidEmail function uses a regular expression to check email format.
- On form submission, we validate each field:
    - Email must be valid.
    - Username must be at least 3 characters.
    - Password must be at least 6 characters.
    - Password and confirm password must match.
- If any validation fails, we show an error and stop the form from submitting.
- If all is good, we show a success alert.
*/
