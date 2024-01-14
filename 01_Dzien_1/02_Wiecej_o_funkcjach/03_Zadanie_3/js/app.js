function hello() {
    console.log(hello);
}

function hello1() {
    console.log(Witaj)
}

const array1 = [23, 2, 3, 1, 34, 8];
const array2 = array1.sort();
console.log(array2);
/* [1, 2, 23, 3, 34, 8] */

const arr = ["apple", "banana", "mango", "apple2"];

arr.sort(function (a, b) {
    return a.localeCompare(b)
})
console.log(arr)
