const btn = document.querySelector('#remove');

btn.addEventListener('click', function() {
    this.remove();
})

// 2 rozwiazanie zadania 
const button = document.querySelector('#remove');

button.addEventListener('click', function(e) {
    e.target.remove();
})