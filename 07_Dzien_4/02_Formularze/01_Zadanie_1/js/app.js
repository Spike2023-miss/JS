const input = document.querySelector('#test');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const successMessage = document.querySelector('#success-message');
const errorMessage = document.querySelector('#error-message');

// nameInput.disabled = true;
// surnameInput.disabled = true;

const emailInput = document.querySelector('#email');
const form = document.querySelector('form');

input.addEventListener('input', handleChange);

function handleChange(event) {
    emailInput.value = event.target.value + '@example.com';
    if (event.target.value.length > 3) {
        nameInput.disabled = false;
        surnameInput.disabled = false;
    } else {
        nameInput.disabled = true;
        surnameInput.disabled = true;
    }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    toogleSuccessMessage();
    toogleErrorMessage();

    const result = serializeData(event.target);
    const errors = [];

    if (!validateEmail(result.email)) {
        errors.push('Email musi posiadać znak @,');
    }

    if (result.name.length <= 2) {
        errors.push('Twoje imię jest za krótkie,');
    }

    if (result.surname.length <= 2) {
        errors.push('Twoje nazwisko jest za krótkie,');
    }

    if (!result.pass1 || result.pass1 !== result.pass2) {
        errors.push('Hasła nie są takie same lub puste,');
    }

    if (!result.agree) {
        errors.push('Musisz zaakceptować warunki.');
    }

    if (errors.length) {
        toogleErrorMessage(errors);

        return;
    }

    toogleSuccessMessage(true);
    clearForm(event.target);
}

function clearForm(elements) {
    for (let el of elements) {
        const prop = el.type === 'checkbox' ? 'checked' : 'value';
        el[prop] = prop === 'checked' ? false : '';
    }
}

function serializeData(elements) {
    const result = {};
    for (let el of elements) {
        // const value = el.type === 'checkbox' ? el.checked : el.value;
        let value = el.value;
        if (el.type === 'checkbox') {
            value = el.checked;
        }
        result[el.name] = value;
    }

    return result;
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function toogleSuccessMessage(mode) {
    if (mode) {
        successMessage.classList.remove('d-none');
        successMessage.innerHTML = 'Formularz wysłany!.';

        return;
    }

    successMessage.classList.add('d-none');
}

function toogleErrorMessage(errors) {
    if (errors && errors.length) {
        errorMessage.classList.remove('d-none');
        errorMessage.innerHTML = '';

        errors.forEach(function (err) {
            const p = document.createElement('p');
            p.innerText = err;

            errorMessage.appendChild(p);
        });

        return;
    }

    errorMessage.classList.add('d-none');
}