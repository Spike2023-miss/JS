const first = document.querySelector('article.first');

if (first) {
    const h2 = first.querySelectorAll('h2');
    console.log('Liczba elementów h2 w tagu article o klasie "first":', h2.length);
} else {
    console.log('Nie znaleziono tagu article z klasą first.');
}