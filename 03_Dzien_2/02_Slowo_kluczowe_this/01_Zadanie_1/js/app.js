// Stwórz obiekt car, utwórz dla niego odpowiednie właściwości i metody.
//
//     Właściwości:
// brand,
//     color,
//     numberOfKilometers (na początku 0).

let styczen;
const car = {
    brand: "Mercedes",
    color: "black",
    numberOfKilometers: 0,
    printCarInfo() {
        // const copy = Object.assign({}, this);
        // delete copy.printCarInfo;
        // delete copy.drive;
        // console.table(copy);
        console.log("===== Status pojazdu =====");
        console.log(`Ilość przejechanych kilemetrów: ${this.numberOfKilometers}`)
        console.log("===== Koniec wyświetlania =====");
    },
    drive(km) {
        this.numberOfKilometers += km;
    },

    carReviews: [styczen, luty, marzec],
    review(date) {
        this.carReviews.push(date);
    },
    printCarReviews() {
        console.log('wszystkie przeglady');
        this.carReviews.forEach(function (review) {
            console.log(review)
        })
    }
}

car.printCarInfo();
car.drive(100);
car.drive(10);
car.drive(1);

car.review("styczen");
car.review("luty");
car.review("marzec");

console.log("wszystkie przeglady", car.reviews());
