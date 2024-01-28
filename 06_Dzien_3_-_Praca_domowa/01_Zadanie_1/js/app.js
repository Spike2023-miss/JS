// Na stronie znajduje się sekcja z dwoma elementami article. W każdym artykule znajdują się elementy h2, a oraz div o klasie content, który jest ukryty w CSS (klasa d-none).

// Twoim zadaniem jest:

// ustawienie na pierwszym linku eventu, który spowoduje, że kiedy użytkownik w niego kliknie pokaże się element o klasie content (należący do tego artykułu).
// ustawienie na drugim linku eventu, który spowoduje, że kiedy użytkownik na niego najedzie pokaże się element o klasie content (należący do tego artykułu).

const btns = document.querySelectorAll('.btn');

const handleToggle = event => {
    event.currentTarget.nextElementSibling.classList.toggle('d-none');
    // this.nextElementSibling.classList.toggle('d-none');
};

btns[0].addEventListener('click', handleToggle);
btns[1].addEventListener('mouseenter', handleToggle);
btns[1].addEventListener('mouseleave', handleToggle);

// function handleToggle(event) {
// 	// event.currentTarget.nextElementSibling.classList.toggle('d-none');
// 	this.nextElementSibling.classList.toggle('d-none');
// }
