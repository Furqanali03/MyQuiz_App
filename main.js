document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#loginForm');
    const registerForm = document.querySelector('#registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.querySelector('#loginEmail').value;
            const password = document.querySelector('#loginPassword').value;
            const users = JSON.parse(localStorage.getItem('users')) || [];

            const user = users.filter(user => user.email === email && user.password === password);

            if (user) {
                displayMessage('Login successful! Redirecting to next page...', 'success');
                setTimeout(() => {
                    window.location = 'quiz.html'; 
                }, 2000);
            } else {
                displayMessage('Invalid email or password', 'error');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.querySelector('#username').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;
            let users = JSON.parse(localStorage.getItem('users')) || [];

            const isUserExist = users.some(user => user.email === email || user.username === username);

            if (isUserExist) {
                displayMessage('User is already registered', 'error');
            } else {
                const newUser = { username, email, password };
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                displayMessage('Welcome to MyQuizApp! Registered successfully.', 'success');
                clearForm('registerForm');
            }
        });
    }

    function displayMessage(message, type) {
        const messageBox = document.querySelector('#message');
        messageBox.textContent = message;
        messageBox.className = `message ${type}`;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }

    function clearForm(formId) {
        document.querySelector(`#${formId}`).reset();
    }
});



