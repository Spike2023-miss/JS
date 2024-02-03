// document.addEventListener('readystatechange', function() {
//     if (document.readyState === 'interactive') {
//         // Funkcja do ukrywania wszystkich obrazków oprócz podanego
//         function hideAllImagesExcept(imageAlt) {
//             const images = document.querySelectorAll('.page-header img');
//             images.forEach(function(image) {
//                 if (image.alt !== imageAlt) {
//                     image.style.display = 'none';
//                 }
//             });
//         }
//
//         // Funkcja do wyświetlania obrazka o podanym alt
//         function showImage(imageAlt) {
//             const selectedImage = document.querySelector(`img[alt="${imageAlt}"]`);
//             if (selectedImage) {
//                 selectedImage.style.display = 'block';
//             }
//         }
//
//         // Funkcja obsługująca kliknięcie przycisku
//         function handleClick(event) {
//             const select = document.querySelector('.form-control');
//             const selectedOption = select.value;
//
//             // Ukrywamy wszystkie obrazy
//             const images = document.querySelectorAll('.page-header img');
//             images.forEach(function(image) {
//                 image.style.display = 'none';
//             });
//
//             // Wyświetlamy tylko wybrany obrazek
//             showImage(selectedOption);
//
//             // Zapobiegamy domyślnemu zachowaniu przycisku
//             event.preventDefault();
//         }
//
//         // Początkowo ukrywamy wszystkie obrazy oprócz obrazka "Windows"
//         hideAllImagesExcept('Windows');
//
//         // Dodajemy nasłuchiwanie na kliknięcie przycisku
//         const button = document.querySelector('.btn');
//         button.addEventListener('click', handleClick);
//     }
// });

const images = document.querySelectorAll('img');
const select = document.querySelector('select');
const form = document.querySelector('form');

// select.addEventListener('change', handleChange);
form.addEventListener('submit', handleChange);

function checkImg(name) {
    images.forEach(function (img) {
        img.classList.add('d-none');

        if (name === img.alt) {
            img.classList.remove('d-none');
        }
    });
}

checkImg();

function handleChange(event) {
    event.preventDefault();

    checkImg(select.value);
}