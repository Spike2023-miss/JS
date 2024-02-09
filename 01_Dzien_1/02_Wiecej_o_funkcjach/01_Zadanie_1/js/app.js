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


function firstFunc() {
    const someInt = 1;

    function secondFunc() {
        console.log(someInt);

        const otherInt = 3;
    }

    secondFunc();
    // nie ma dostępu ponieważ funkcja otherInt jest funkcja lokalna zagniezdzona w funkcji globalnej
    console.log(otherInt);
}

firstFunc();