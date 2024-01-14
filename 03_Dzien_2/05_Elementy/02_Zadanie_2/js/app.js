const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");


console.log('home:', home);

console.log('children:', children);

for (let i = 0; i < children.length; i++) {
    const element = children[i];
    console.log(`Tag: ${element.tagName}, Klasa: ${element.className}`);
}

console.log('ban:', ban);

console.log('someBlocks:', someBlocks);

for (let i = 0; i < someBlocks.length; i++) {

    const block = someBlocks[i];
    console.log(`Tag: ${block.tagName}, Klasa: ${block.className}`);

}

console.log('listElements:', listElements);

for (let i = 0; i < listElements.length; i++) {

    const liElement = listElements[i];
    console.log(`Tag: ${liElement.tagName}, Klasa: ${liElement.className}`);

}