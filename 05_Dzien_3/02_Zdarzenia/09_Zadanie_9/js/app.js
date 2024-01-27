function updateWindowSize() {
    const windowWidthElement = document.getElementById('windowWidth');
    const windowHeightElement = document.getElementById('windowHeight');

    windowWidthElement.innerText = window.innerWidth + 'px';
    windowHeightElement.innerText = window.innerHeight + 'px';
}

updateWindowSize();
window.addEventListener('resize', updateWindowSize);

