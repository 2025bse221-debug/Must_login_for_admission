// Get the forms
const applicationForm = document.getElementById('application-form');
const registerForm = document.getElementById('registration-form');


// Application Form
if (applicationForm) {

    applicationForm.addEventListener('submit', function(event) {

        const fullName = document.getElementById("fullName").value;

        const email = document.getElementById("email").value;

        const programme = document.getElementById("programme").value;

        console.log("Full Name: " + fullName);
        console.log("Email: " + email);
        console.log("Programme: " + programme);

    });

}


// Registration Form
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