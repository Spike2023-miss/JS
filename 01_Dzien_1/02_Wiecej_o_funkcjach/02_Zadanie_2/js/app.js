function callOtherFunction(nameOfFunction) {
    console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

    const randomNumber1 = Math.random() * 20;
    const randomNumber2 = Math.random() * 10;
    nameOfFunction(randomNumber1, randomNumber2);
}

callOtherFunction(function (a, b) {
    console.log("Pierwsza liczba:", a);
    console.log("Druga liczba", b);
    console.log("Wynik", a + b);
});

callOtherFunction(function (c,d){
    console.log("liczba c", c);
    console.log("lioczba d", d);
    console.log("wynik", c-d);
})
callOtherFunction(function (g,f) {
    console.log("liczba g", g);
    console.log("liczba f", f);
    console.log("wynik", g * f);
})
