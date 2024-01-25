// const interval = setInterval(function () {
//     console.log('Wygenerowano z setInterval');
// }, 10000);
//
// const timeout = setTimeout(function () {
//       console.log('JavaScript Rules');
// }, 4000);
/**
 * // zadania przykladowe
 * const x = 10;
 * const y = 20;
 *
 * if (x > y) {
 *     console.log("x jest wieksze od y");
 * } else {
 *     console.log("y jest wieksze od x");
 * }
 *
 * let topSpeed = 350;
 *
 * switch (topSpeed) {
 *     case 100:
 *         console.log("mała prędkość");
 *         break;
 *
 *     case 150:
 *         console.log("duza predkosc");
 *         break;
 *     case 300:
 *     case 330:
 *         console.log("powyzej 300");
 *         break;
 *     default:
 *         console.log("Brak info");
 * }
 * // zmienna temperature, wartośći 10,20
 * //zimno, goraco
 *
 * let temperature = 10
 *
 * // petle
 *
 * // while
 *
 * let i = 0
 *
 * while (i < 5) {
 *     console.log("wartość i", i);
 *     i = i + 1
 * }
 * console.log('koniec pętli');
 *
 * // do while
 *
 * let a = 4
 *
 * do {
 *     console.log("wartość a", a)
 *     a = a - 1;
 * } while (a > 0)
 *
 * console.log("koniec petli do while")
 *
 * // for
 *
 * // inkrementacja b++ to samo co b= b+1
 * for (let b = 0; b < 3; b++) {
 *     console.log("wartość b", b)
 * }
 * console.log("koniec pętli for");
 *
 // *dekrementacja
 * for (let c = 4; c >= 0; c--) {
 *     console.log("wartość c", c)
 * }
 * console.log("koniec petli for")
 *
 * for (let number= -2; number<= -2; number ++){
 *
 * }
 *
 * //funkcja
 *
 * function add(a , b){
 *     let c =  a + b;
 *     console.log("wynik:", c)
 * }
 * add(8 +3);
 * add (10 +10);
 *
 * let x= 10;
 * let y = 20;
 * if (x< y){
 *     add (x, y);
 * }
 * // definicja funkcji
 * // nazwa funkcji multiply
 * // parametry funkcji: a oraz b
 *
 * function multiply(a , b){
 *     return a*b;
 * }
 * // 10 i 4 to argumenty funkcji
 * // podczas jej wywołania
 * let result = multiply(10,4);
 * console.log("result",result);
 *
 * // wyrażenie funkcyjne-function expression
 * let division = function (a,b){
 *     return a/b;
 * }
 *
 * let divisionResult = division(100 , 3);
 * console.log("wynik dzielenia:", divisionResult);
 *
 * let data = 55; //zmienna globalna
 *
 * function test(){
 *     let text = "hello"; // zmienna lokalna- ma wiekszy piorytet
 *     console.log("wartość data:", data);
 *     console.log("wartosc text", test);
 * }
 * test();
 * console.log(test);
 *
 *
 * // funkcja substract - odejmowania
 * function substract(a, b) {
 *     return a - b;
 * }
 *
 * console.log("wynik odejmowania", substract(10, 7));
 *
 * // funkcja do obliczenia wartosci bezwzglednej dla -2 zwraca 2 dla 2 zwraca 2
 *
 * function abs(a) {
 *     if (a < 0) return -a;//return zawsze kończy działanie funkcji
 *     return a;
 * }
 *
 * console.log("wartosc bezwzględna:", abs(-3));
 */
// const timeoutID = setTimeout(function () {
//     console.log("Zadziałam za 5 sekund!");
// }, 5000);
//
// const timeoutID = setTimeout(function () {
//     console.log("Zadziałam za 5 sekund!");
// }, 5000);    /* 5s */
//
// clearTimeout(timeoutID);

// const intervalID = setInterval(function () {
//     console.log("Działam co sekundę!");
// }, 1000);
//
// const intervalID = setInterval(function () {
//     console.log("Działam co sekundę!");
// }, 1000);    /* 1s */
//
// clearInterval(intervalID);


// 3 sposoby zapisywania funkcji!!!!!!!!!!

// sayHello();
// 1 przykład:
// greet1()
// function greet1() {
//     console.log("hello");
// }
// 2 przykład:
// const greet2 = function (){
//     console.log("Hello!");
// }
//
// 3 przykład:
// const greet3= () => {
//     console.log("Witaj")
// }
//
// greet1()
// greet2()
// greet3()

// 1. różnica
// function greet1() {} - zadziała wszedzie i przed funkcją i po funkcji
//const greet2 = function () {} - zadziała tylko po funkcji
// const greet3= () => {} - zadziała tylko po funkcji
// 2. róznica
// function greet1() {} - tworzy kontekst
//const greet2 = function () {} - tworzy kontekst
// const greet3= () => {} - nie tworzy kontekstu