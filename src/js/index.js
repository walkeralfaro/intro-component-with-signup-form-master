// Variables
const form = document.querySelector('.form');
const firstname = document.querySelector('#firstName');
const lastname = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener('submit', ( e ) => {
    checkInputs(firstname);
    checkInputs(lastname);
    checkInputs(password);
    checkEmail(email);

    setTimeout(() => {
        resetForm();
    }, 5000);

    e.preventDefault();
})

function checkInputs(input) {
    if(input.value.trim() === '') {
        const inputParent = input.parentElement;
        inputParent.classList.add('error');
        input.placeholder='';
    }
}

function checkEmail(input) {
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!er.test( input.value )) {
        const inputParent = input.parentElement;
        inputParent.classList.add('error');
        input.placeholder = "email@example.com"
    }
}

function resetForm() {
    form.reset();
    const inputParent = document.querySelectorAll('.error');
    for (let i = 0; i < inputParent.length; i++) {
        inputParent[i].classList.remove('error');
    }

    firstname.placeholder='First Name';
    lastname.placeholder='Last Name';
    email.placeholder='Email Address';
    password.placeholder='Password';
}