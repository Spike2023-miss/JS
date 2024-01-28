// Na stronie znajduje się lista z wpisami i przycisk. Napisz taki event,
//     żeby po kliknięciu w przycisk z listy zostały usunięte wszystkie jej dzieci.
//     Element ul#list powinien pozostać na stronie.

const removeButton=document.querySelector("#remove");
const list=document.querySelector('#list');

removeButton.addEventListener("click", function (){
    const listItems= list.children;
    for (let i=listItems.length - 1; i >= 0; i--){
        list.removeChild(listItems[i]);
    }
});