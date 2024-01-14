const person = {
    name: "Paulina",
    age: '18',
    sayHello() {
        console.log("Hello")
    },
    sayhello2: function () {
        console.log("Hello")
    }
}
console.log(person.name)
console.log(person.age)
console.log(person.sayHello())
console.log((person.sayhello2()))