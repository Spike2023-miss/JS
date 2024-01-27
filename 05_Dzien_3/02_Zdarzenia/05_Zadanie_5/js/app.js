// const btns = document.querySelectorAll(".btn");
// const counters = document.querySelectorAll(".counter");
// for(let i = 0; i<3; i++){
//     btns[i].addEventListener("click", function(){
//         counters[i].innerText ++;
//     });
// }
// prawidłowa odpowiedz przesłana przez Pawła

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach(function (section) {
        section.addEventListener('click', function (event) {
            if (event.target.tagName === 'BUTTON') {
                const counter = section.querySelector('.counter');
                counter.textContent = +counter.textContent + 1;
            }
        });
    });
});