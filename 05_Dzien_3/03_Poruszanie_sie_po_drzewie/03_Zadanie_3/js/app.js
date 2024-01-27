const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});

function handleClick() {
    
    this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}