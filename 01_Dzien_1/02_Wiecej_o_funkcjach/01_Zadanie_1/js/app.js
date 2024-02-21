// 3 wersje pisania funkcji
// function add(value1, value2){
//  wersja 1

// function add(value1,value2){
// return value1,value2;

//wersja 2

// const add=function(value1,value2){
// return value1,value2;

//wersja 3
// const add=(value1,value2) => {
// return value1,value2;

//WYRAZENIE FUNKCYJNE (lepiej stosowac)

// const userName=function(name,surname){
//  console.log('nazwa uzytkownika to ${name} ${surname}')
// return '${name} ${surname}';
//};

//DEKLARACJA FUNKCJI (hoisting)+

// function userName(name,surname){
//  console.log('nazwa użytkownika to ${name} ${surname}')
// return '${name} ${surname}';
//}

//parametry sa na poczatku funkcji a argumenty na koncu
//callback - funkcja wywołania zwrotnego najpierw jest parametrem a pozniej argumentem
//funkcja wyższego rzedu jest to funkcja do ktorej przekazano inna funkcje w formie collbacku.
// Jezeli funkcja zawiera inna funkcje jest to funkcja wyzszego rzedu

function firstFunc() {
    const someInt = 1;

    function secondFunc() {
        console.log(someInt);

        const otherInt = 3;
    }

    secondFunc();
    // nie ma dostępu ponieważ funkcja otherInt jest funkcja lokalna zagniezdzona w funkcji globalnej
    console.log(someInt);
}

firstFunc();