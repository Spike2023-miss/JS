// const button = document.querySelector("button");
// let clickCount = 0;
// function clickCounter(event) {
//     clickCount += 1;
//     console.log("Liczba kliknięć", clickCount);
// }
// button.addEventListener("click", clickCounter);


const button = document.querySelectorAll(".btn");
const counter = document.querySelector('.counter');

button.forEach(function (btn) {
    btn.addEventListener("click", function () {
        counter.innerText++;
    })
});