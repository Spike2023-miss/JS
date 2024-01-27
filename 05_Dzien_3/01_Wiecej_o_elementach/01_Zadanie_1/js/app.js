const listElements = document.querySelectorAll('.exercise li');

console.log(listElements);

// listElements.forEach(function (li, index) {
// 	const i = index + 1;
// 	if (i % 2 === 0) {
// 		li.style.backgroundColor = '#9e9e9e';
// 	}

// 	if (i === 5) {
// 		li.classList.add('big');
// 	}

// 	if (i % 3 === 0) {
// 		li.style.textDecoration = 'underline';
// 	}
// });

listElements.forEach(function (li, index) {
    if (index % 2 !== 0) {
        li.style.backgroundColor = '#9e9e9e';
    }

    if (index + 1 === 5) {
        li.classList.add('big');
    }

    if (index % 3 === 2) {
        li.style.textDecoration = 'underline';
    }
});