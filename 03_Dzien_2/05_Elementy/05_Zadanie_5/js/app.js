const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");

function getTags(elements) {
    const tagsArray = Array.from(elements).map(function (el) {
        return el.tagName
    })
    return tagsArray;
}

console.log(getTags(childElements));
