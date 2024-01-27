// const element = document.querySelector("#box");
//
// function cursorPosition(event) {
//     console.log("Położenie lokalne: " + event.clientX + "px, " + event.clientY + "px");
//     console.log("Położenie globalne: " + event.offsetX + "px, " + event.offsetY + "px");
//     console.log("");
// }
//
// element.addEventListener('mousemove', cursorPosition);


// powinno wiświetlac sie teraz w html dzieki slowie innerText!
const element = document.querySelector("#box");

function cursorPosition(event) {
    document.querySelector('#globalX').innerText = event.clientX;
    document.querySelector('#globalY').innerText = event.clientY;
    document.querySelector('#localX').innerText = event.offsetX;
    document.querySelector('#localY').innerText = event.offsetX;

}
// Prawidłowa wersja ale nie dziala w html
//
// element.addEventListener("mousemove", cursorPosition);
//
// const element = document.querySelector("#box");
//
// function cursorPosition(event){
//     console.log("położenie globalne:" + event.offsetX + "px,"+ event.offsetY + "px");
//     console.log("położenie lokalne:" + event.clientX + "px,"+ event.clientY + "px");
//     console.log("");
// }
//
// element.addEventListener("mousemove", cursorPosition);