const banner = document.querySelector(".ban");

function getClassInfo(element) {
    if (element) {
        return Array.from(element.classList);
    } else {
        return null;
    }
}

console.log(getClassInfo(banner));
xx