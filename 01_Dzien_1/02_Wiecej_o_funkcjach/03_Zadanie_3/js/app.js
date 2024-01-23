// function sayHello(hello) {
//     const add = "hello";
// }


// 3 sposoby zapisywania funkcji!!!!!!!!!!

// sayHello();
greet1()
function greet1() {
    console.log("hello");
}

const greet2 = function (){
    console.log("Hello!");
}


const greet3= () => {
    console.log("Witaj")
}

greet1()
greet2()
greet3()

// 1. różnica
// function greet1() {} - zadziała wszedzie i przed funkcją i po funkcji
//const greet2 = function () {} - zadziała tylko po funkcji
// const greet3= () => {} - zadziała tylko po funkcji
// 2. róznica
// function greet1() {} - tworzy kontekst
//const greet2 = function () {} - tworzy kontekst
// const greet3= () => {} - nie tworzy kontekstu


// }
// function multiply(a , b){
//     return a*b;
// }
// // 10 i 4 to argumenty funkcji
// // podczas jej wywołania
// let result = multiply(10,4);
// console.log("result",result);

//
// const array1 = [23, 2, 3, 1, 34, 8];
// const array2 = array1.sort();
// console.log(array2);
// /* [1, 2, 23, 3, 34, 8] */
//
// const arr = ["apple", "banana", "mango", "apple2"];
//
// arr.sort(function (a, b) {
//     return a.localeCompare(b)
// })
// console.log(arr)
