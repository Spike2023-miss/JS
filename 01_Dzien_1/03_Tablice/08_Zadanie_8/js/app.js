function addArrays(arr1, arr2) {
    const maxLength = Math.max(arr1.length, arr2.length);

    let arraySum = [];
    for (let i = 0; i < maxLength; i++) {
        let elementSum = (arr1[i] || 0) + (arr2[i] || 0);
        arraySum.push(elementSum);
    }
    return arraySum;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let sum = addArrays(arr1, arr2);

console.log("Wynik dodawania tablic arr1 i arr2: " + sum);
