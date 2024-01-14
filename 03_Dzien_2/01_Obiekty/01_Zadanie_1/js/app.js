/*## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz obiekt `country`. Dopisz do niego następujące właściwości:

    * `capital` - string,
* `population` - number,
* `president` - string,
* `ministers` - tablica stringów

Wypisz w konsoli wszystkie właściwości.*/

const country = {
    capital: "Warszawa",
    population: 40000000,
    president: "Duda",
    ministers: [Kwaśniewski, Wałesa]
}

console.log(country.capital)
console.log(country["population"])

const presidentPropertyName = "president";
console.log(contry[presidentPropertyName]);

country.ministers.forEach(function (minister) {
    console.log(minister)
})
Object.entries(country).forEach(function (element) {
    console.log(element[0] + " ma wartość " + element[1]);
})

Object.values(country).forEach(function (value) {
    if (Array.isArray(value)) {
        value.forEach(function (el) {
            console.log(el)
        })
        return;
    }
    console.log(value)
})