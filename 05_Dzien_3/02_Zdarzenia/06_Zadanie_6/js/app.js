const boxes = document.querySelectorAll(".box");
function randomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
} 
boxes.forEach(function (box) {
    box.addEventListener("click", function (event) {
        this.style.backgroundColor = randomColor();
    });
})
