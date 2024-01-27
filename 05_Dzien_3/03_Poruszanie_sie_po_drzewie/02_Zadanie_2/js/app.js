const buttons = document.querySelectorAll('a.btn');

buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});

function handleClick(event) {
    event.preventDefault();

    this.previousElementSibling.classList.toggle('hidden');
    // event.currentTarget.previousElementSibling.classList.toggle('d-none');
}
