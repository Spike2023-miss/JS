function distFromAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avarage = sum / arr.length;

    console.log(sum, avarage);

    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
        arr2.push(Math.abs(arr[i] - avarage));
    }
    return arr2;
}

//
// function distFromAverage(arr) {
//     const avg = arr.reduce(function (prev, curr) {
//     }) / arr.length
//
//     return arr.map(function (el) {
//         return Math.abs(el - avg)
//     })
//
// }

console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7]));