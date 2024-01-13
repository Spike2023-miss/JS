function print2DArray(array) {
    array.forEach(function (el2) {
        el2.forEach(function (el1) {
            console.log(el1);
        })
    })
}

let array2D = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];
print2DArray(array2D);