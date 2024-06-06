document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(el) {
        el.style.display = 'none';
    });

    let valid = true;


    // Email validation
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        const emailError = document.getElementById('emailError');
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(password)) {
        valid = false;
        const passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Password must be 6-20 characters long and contain at least one numeric digit, one uppercase, and one lowercase letter.';
        passwordError.style.display = 'block';
    }

    if (valid) {
        console.log('Form Values:');
        console.log('Email:', email);
        console.log('Password:', password);
    }
});



