function Tree(type) {
    this.type = type;
}

const sosna = new Tree("sosna");
console.log(sosna.type);

const świerk= new Tree("świerk");
console.log(świerk.type);

const dąb= new Tree("dąb");
console.log(dąb.type);

class LateBloomer {
    bloom() {
        // Declare bloom after a delay of 1 second
        setTimeout(() => this.declare(), 1000);
    }
}
//
// function User(newName) {
//     this.name = newName ;
// }
//
// User.prototype.type = "basic";
//
// User.prototype.saySomething = function() {
//     console.log("Hi " + this.name);
// }
//
// const user1 = new User("Ala");
// const user2 = new User("Janek");
// console.log(user1.saySomething());//Hi Ala
// console.log(user2.saySomething());//Hi Janek