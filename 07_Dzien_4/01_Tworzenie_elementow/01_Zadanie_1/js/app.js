const items = ['Paweł', 'Asia', 'Ania', 'Paulina'];

// #region definicja elementów
const addButton = document.querySelector('.btn-success');
const addRowButton = document.querySelector('#add');
// const deleteBtns = document.querySelectorAll('.deleteBtn');
const tbody = document.querySelector('tbody');
// #endregion

//#region addEventListeners
addButton.addEventListener('click', handleAdd);
addRowButton.addEventListener('click', handleClone);
// deleteBtns.forEach(function (button) {
// 	button.addEventListener('click', handleDelete);
// });
tbody.addEventListener('click', handleDelete);
//#endregion

//#region Add list
function handleAdd() {
    const ul = document.createElement('ul');
    ul.classList.add('list-group');

    items.forEach(function (name) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerText = name;

        ul.appendChild(li);
    });

    const main = document.querySelector('main');
    const table = document.querySelector('table');

    main.insertBefore(ul, table);
}

//#endregion

//#region Clone
function handleClone() {
    const tr = document.querySelector('tbody tr');
    const toClone = tr.cloneNode(true);

    tr.parentElement.appendChild(toClone);
}

//#endregion

// #region Delete
function handleDelete(event) {
    if (event.target.closest('.deleteBtn')) {
        event.target.closest('tr').remove();
    }
}

// #endregion