const form = document.querySelector('form');

const team1 = document.querySelector('#team1');
const team2 = document.querySelector('#team2');
const points1 = document.querySelector('#points1');
const points2 = document.querySelector('#points2');

const toClone = document.querySelector('tbody tr');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const result = getDataFromForm(event.target);

    if (validateElement(result)) {
        addToTable(result);
    }

    clearForm(event.target);
}

function validateElement(elements) {
    team1.classList.remove('is-invalid');
    team2.classList.remove('is-invalid');
    points1.classList.remove('is-invalid');
    points2.classList.remove('is-invalid');

    console.log(elements);

    let error = false

    if (!elements.team1) {
        team1.classList.add('is-invalid');
        team1.nextElementSibling.innerText = 'Nie podano żadnej wartości';

        error = true
    }

    if (!elements.team2) {
        team2.classList.add('is-invalid');
        team2.nextElementSibling.innerText = 'Nie podano żadnej wartości';

        error = true
    }

    if (+elements.points1 < 0) {
        points1.classList.add('is-invalid');
        points1.nextElementSibling.innerText = 'Zła wartość';

        error = true
    }

    if (+elements.points2 < 0) {
        points2.classList.add('is-invalid');
        points2.nextElementSibling.innerText = 'Zła wartość';

        error = true
    }

    if (elements.team1 === elements.team2) {
        team1.classList.add('is-invalid');
        team2.classList.add('is-invalid');

        team1.nextElementSibling.innerText = 'Drużyny powinny mieć inne nazwy';
        team2.nextElementSibling.innerText = 'Drużyny powinny mieć inne nazwy';
        error = true
    }

    return !error;
}


function getDataFromForm(elements) {
    const result = {};

    for (let el of elements) {
        result[el.name] = el.value;
    }

    return result;
}

function addToTable(elements) {
    const copy = toClone.cloneNode(true);
    console.log(copy);
    copy.children[0].innerText = elements.team1;
    copy.children[1].innerText = elements.team2;
    copy.children[2].innerText = elements.points1 + ' - ' + elements.points2;

    toClone.parentElement.appendChild(copy);
}

function clearForm(elements) {
    for (let el of elements) {
        el.value = '';
    }
}