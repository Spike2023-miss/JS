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

const person1 = {
    name: "Damian",
    age: "2",
    sayHello1: function () {
        console.log('Hello Damian')
    }
}
console.log(person1.name)
console.log(person1.age)
console.log(person1.sayHello1())