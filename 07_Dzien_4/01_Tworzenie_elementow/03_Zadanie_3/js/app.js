// Na stronie przypisanej do zadania znajduje się lista i przycisk.
// Dopisz odpowiednie eventy do nich w taki sposób, żeby po kliknięciu w przycisk dodał się nowy element do listy.
// Element powinien mieć w sobie informacje na temat tego, ile elementów jest w liście w chwili jego dodania.

const addButton = document.querySelector("#add");
const menuList = document.querySelector("#menu");
let numberOfElements = 1;

addButton.addEventListener('click', function() {
    
    const newListItem = menuList.firstElementChild.cloneNode(true);
    newListItem.textContent = 'Element ' + (numberOfElements + 1) + ' - w chwili dodania było ' + numberOfElements + ' elementów';
    menuList.appendChild(newListItem);
    numberOfElements++;
});

