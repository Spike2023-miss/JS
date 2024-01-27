document.addEventListener('DOMContentLoaded', function () {
    // Chrome
    const chromeDiv = document.querySelector('.chrome');
    chromeDiv.style.backgroundImage = "url('img/chrome.png')";
    const chromeLink = document.querySelector('.chrome + a');
    chromeLink.textContent = 'Chrome';
    chromeLink.href = 'https://www.google.com/chrome/';
    chromeDiv.style.width = '100px';

    // Microsoft Edge
    const edgeDiv = document.querySelector('.edge');
    edgeDiv.style.backgroundImage = "url('img/edge.jpg')";
    const edgeLink = document.querySelector('.edge + a');
    edgeLink.textContent = 'Microsoft Edge';
    edgeLink.href = 'https://www.microsoft.com/edge';

    // Firefox
    const firefoxDiv = document.querySelector('.firefox');
    firefoxDiv.style.backgroundImage = "url('img/firefox.jpg')";
    const firefoxLink = document.querySelector('.firefox + a');
    firefoxLink.textContent = 'Firefox';
    firefoxLink.href = 'https://www.mozilla.org/firefox/';
});

// 2 przykład zadania.

// const imageElementsChrome = document.getElementsByClassName('chrome');
//
// imageElementsChrome[0].style.width = '100px';
//
// const imageElementsME = document.getElementsByClassName('edge');
//
// imageElementsME[0].style.backgroundImage = 'url(img/edge.jpg)';
//
// const imageElementsFirefox = document.getElementsByClassName('firefox');
//
// imageElementsFirefox[0].style.backgroundImage = 'url(img/firefox.jpg)';
//
// const linkElements = document.getElementsByTagName('a');
//
// linkElements[0].innerText = 'Chrome';
//
// linkElements[2].innerText = 'Firefox';
//
// linkElements[1].setAttribute('href', 'https://www.microsoft.com/pl-pl/edge/download?form=MA13FJ');
//
// linkElements[2].setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');

// 3 przykład zadania
// let chromeElement = document.querySelector('.chrome');
// chromeElement.style.width = '100px';
// let chromeLink = document.querySelector('.chrome + a');
// chromeLink.href = 'https://www.google.pl/chrome/browser/desktop/index.html';
// chromeLink.textContent = 'Google Chrome';
//
//
// let edgeElement = document.querySelector('.edge');
// edgeElement.style.backgroundImage = 'url("./img/edge.jpg")';
// let edgeLink = document.querySelector('.edge + a');
// edgeLink.href = 'https://www.microsoft.com/pl-pl/edge';
// edgeLink.textContent = 'Microsoft Edge';
//
//
// let firefoxElement = document.querySelector('.firefox');
// firefoxElement.style.backgroundImage = 'url(./img/firefox.jpg)';
// let firefoxLink = document.querySelector('.firefox + a');
// firefoxLink.href = 'https://www.mozilla.org/pl/firefox/new/';
// firefoxLink.textContent = 'Mozilla Firefox';