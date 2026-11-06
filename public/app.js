// Get the forms
const loginForm = document.getElementById('application-form');
const registerForm = document.getElementById('registration-form');


// for Login    
if (loginForm) {

    loginForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const Email = document.getElementById("Email").value;
        const password = document.getElementById("password").value;

        console.log("Email: " + Email);

        const message = document.getElementById('message');

        message.textContent = 'Login submitted successfully!';
        message.style.color = 'green';

    });

}


// for Registration
if (registerForm) {

    registerForm.addEventListener('submit', function(event) {

        event.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const Email = document.getElementById("email").value;
        const studentnumber = document.getElementById("studentnumber").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        const message = document.getElementById('message');

        if (password !== confirmPassword) {

            message.textContent = 'Passwords do not match!';
            message.style.color = 'red';

            return;
        }

        console.log("Full Name: " + fullname);
        console.log("Email: " + Email);
        console.log("Student Number: " + studentnumber);

        message.textContent = 'Registration submitted successfully!';
        message.style.color = 'green';

        registerForm.reset();

    });

}