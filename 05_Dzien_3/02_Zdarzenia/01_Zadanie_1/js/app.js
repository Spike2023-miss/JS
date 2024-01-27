// const btn = document.querySelector("#click");
//
// btn.addEventListener("click", handleClick);
//
// function handleClick(event) {
//     this.innerText = +this.innerText + 1;
//     console.log(this);
// }
//
// function handleClick(event) {
//     const count = +this.innerText + 1;
//     this.innerText = +this.innerText + 1;
//     console.log(this);
// }

const parents = document.querySelectorAll('.parent');

parents.forEach(function (parent) {
    parent.addEventListener('mouseenter', handleVisible);
    parent.addEventListener('mouseleave', handleHide);
});

function handleVisible(event) {
    event.target.querySelector('.children').style.display = 'block';
}

function handleHide(event) {
    event.target.querySelector('.children').style.display = 'none';
}