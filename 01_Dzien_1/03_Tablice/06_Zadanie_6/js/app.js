function getEvenAverage(array) {
    
    const bar = array.filter(function (element,) {
        return element % 2 === 0;
    });
    console.log(bar);

    if (bar.length === 0) {
        return "null"
    }


    return result = bar.reduce(function (prev, curr) {
        return prev + curr;
    }) / bar.length

}

console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));
