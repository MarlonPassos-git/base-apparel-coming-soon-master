function checkEmail(emailString) {
    const regexvalidateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexvalidateEmail.test(emailString);
}

function addEventEmailCheck(element) {
    element.addEventListener('keyup', (event) => {
        showErrorElements(event.target.value)
    });
    showErrorElements(element.value);
}

function showErrorElements(emailString) {
    if (!checkEmail(emailString)) {
        FORM_ERROR_ICON.style.display = 'grid';
        FORM_ERROR_TEXT.style.display = 'grid';

    } else {
        FORM_ERROR_ICON.style.display = 'none';
        FORM_ERROR_TEXT.style.display = 'none';
        FORM_ERROR_ICON.attributes
    }
}

const INPUT_EMAIL = document.querySelector('.form__email');
const BUTTON_SUBMIT = document.querySelector('.form__button');
const FORM_ERROR_ICON = document.querySelector('.form__error--icon');
const FORM_ERROR_TEXT = document.querySelector('.form__error--text');

BUTTON_SUBMIT.addEventListener('click', (event) => {
    addEventEmailCheck(INPUT_EMAIL)

    if (!checkEmail(INPUT_EMAIL.value)) {
        event.preventDefault();
    }
})