// Global variables
const notif = document.querySelector('#alert');
const parent = document.querySelector('#parent');
const input = document.querySelector('#bID');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('btn').click();
    }
});

// Function for validating user input
const validateInput = () => {
    try {
        let input = document.querySelector('#bID').value;
        let inputRGX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let inputResult = inputRGX.test(input);
        if (inputResult == false) {
            return false;
        }
        return input;
    } catch (err) {
        console.log(err.message + ` ${err.stack}`);
    }
};

// Function for sending data to API
async function subscribeUser() {
    try {
        if (validateInput()) {
            notif.innerHTML =
                "<div class='alert alert-success' role='alert'>" +
                "Your email is valid</div>";
        } else {
            notif.innerHTML =
                "<div class='alert alert-danger' role='alert'>" +
                "Please input a valid email address</div>";
        }
    } catch (err) {
        notif.innerHTML =
            "<div class='alert alert-danger' role='alert'>" +
            "Please input a valid email address</div>";
        console.log(err.message);
    }
};


