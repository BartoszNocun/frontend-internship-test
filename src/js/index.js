/* Here goes your JS code */
const btnShow = document.querySelector('#show-popup-form');
const btnClose = document.querySelector('#close-popup-form');
const popup = document.querySelector('.popup');

const form = document.querySelector('.popup__form');
const inputEmail = form.querySelector('input[name=email]');
const inputPassword = form.querySelector('input[name=password]');
const inputCheckbox = form.querySelector('input[name=terms]');

btnShow.addEventListener('click', function () {
    popup.classList.add('popup--active');
    btnShow.classList.add('btn-main--hide');
});

btnClose.addEventListener('click', function () {
    popup.classList.remove('popup--active');
    btnShow.classList.remove('btn-main--hide');
});


function testEmail(field) {
    const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

    if (!reg.test(field.value)) {
        const emaildError = document.createElement('p');
        emaildError.classList.add('popup__error-msg');
        emaildError.innerText = "Please enter a valid e-mail.";
        field.classList.add('error-border');
        document.querySelector('.popup__row-email').appendChild(emaildError);
    }
}

function testPassword(field, minLen, maxLen) {
    let errorMsg;

    if (field.value.length < minLen) {
        errorMsg = `Password requires ${minLen} characters minimum`;
    } else if (field.value.length > maxLen) {
        errorMsg = `Password requires ${maxLen} characters maximum`;
    } else if (/[ ]/.test(field.value) === true) {
        errorMsg = `Your password can't contain spaces.`;
    }

    if (errorMsg) {
        const passwordError = document.createElement('p');
        passwordError.classList.add('popup__error-msg');
        passwordError.innerText = errorMsg;
        field.classList.add('error-border');
        document.querySelector('.popup__row-password').appendChild(passwordError);
    }
}

function testCheckbox(field) {
    if (!field.checked) {
        const checkboxError = document.createElement('p');
        checkboxError.classList.add('popup__error-msg');
        checkboxError.innerText = "Please accept terms & conditions!";
        field.classList.add('error-border');
        document.querySelector('.popup__row-checkbox').appendChild(checkboxError);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();

    let errorsMsg = document.querySelectorAll('.popup__error-msg');
    let errorsBorder = document.querySelectorAll('.error-border');
    if (errorsMsg.length > 0) {
        errorsMsg.forEach(e => {
            e.parentElement.removeChild(e);
        })
        errorsBorder.forEach(e => {
            e.classList.remove('error-border');
        })
    }

    testPassword(inputPassword, 5, 25);
    testEmail(inputEmail);
    testCheckbox(inputCheckbox);
})