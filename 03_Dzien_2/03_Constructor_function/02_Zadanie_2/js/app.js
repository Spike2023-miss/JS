const Robot = function (name) {
    this.name = name;
    this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newName) {
    console.log("Robot " + this.name + " changes name to " + newName);
    this.name = newName;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

const zbigniew = new Robot("zbigniew");
zbigniew.sayHi('pawel')
zbigniew.fixIt();
zbigniew.sayHi("pawel")
zbigniew.changeName('zofia');
zofia.sayHi('pawel');