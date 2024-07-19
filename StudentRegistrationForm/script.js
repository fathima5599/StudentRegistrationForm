document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let dob = document.getElementById('dob').value;
    let gender = document.getElementById('gender').value;
    let address = document.getElementById('address').value;

    let message = `Registration Successful!<br>
                   Name: ${firstName} ${lastName}<br>
                   Email: ${email}<br>
                   Phone: ${phone}<br>
                   Date of Birth: ${dob}<br>
                   Gender: ${gender}<br>
                   Address: ${address}`;

    document.getElementById('message').innerHTML = message;
});
