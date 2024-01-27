const first= document
    .querySelector(".first")
    .firstElementChild
    .children[2]
console.log(first.dataset.answer);

const second = document
    .querySelector("#second")
    .parentElement
    .children[3]
console.log(second.dataset.answer);

const temp=document
    .querySelector("[data-ex=third]")
    .parentElement
    .parentElement
    .lastElementChild
    .firstElementChild
    .children;

const index = Math.floor(temp.length / 2);

const third = temp[index];

console.log(third.dataset.answer);

const forth = document
    .querySelector('.forth')
    .parentElement
    .querySelector('article > p:nth-of-type(2)');

console.log(forth.dataset.answer);
