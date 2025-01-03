// Example JavaScript for form validation (if needed)
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demonstration

    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!username || !password) {
        alert('Please fill in both fields');
    } else {
        alert('Login successful');
    }
});