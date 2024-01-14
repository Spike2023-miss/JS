function Calculator() {
    this.operations = [];
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
    this.operations.push(`dodawanie ${num1} i ${num2} dało wynik ${result}`);
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;
    this.operations.push(`mnożenie ${num1} z ${num2} dało wynik ${result}`);
    return result;
};

Calculator.prototype.subtract = function (num1, num2) {
    const result = num1 - num2;
    this.operations.push(`odejmowanie ${num1} z ${num2} dało wynik ${result}`);
    return result;
};

Calculator.prototype.divide = function (num1, num2) {
    if (num2 === 0) {
        throw new Error("Nie można dzielić przez O");
    }
    const result = num1 / num2;
    this.operations.push(`dzielenie ${num1} i ${num2} dało wynik ${result}`);
    return result;
};

Calculator.prototype.printOperations = function () {
    console.log(this.operations);
};

Calculator.prototype.clearOperations = function () {
    this.operations = [];
};


const calc = new Calculator();
calc.add(5, 3);
calc.multiply(2, 3);
calc.subtract(5, 3);
calc.divide(10, 2);
calc.printOperations();
calc.clearOperations();
calc.printOperations();

function Calculator() {
    this.operations = [];
}

Calculator.prototype.add = function (num1, num2) {
    const result = num1 + num2;
    this.operations.push(${num1} ${num2} ${result});
    return result;
};

Calculator.prototype.multiply = function (num1, num2) {
    const result = num1 * num2;
    this.operations.push( ${num1} ${num2} ${result});
    return result;
};

Calculator.prototype.subtract = function (num1, num2) {
    const result = num1 - num2;
    this.operations.push(${num1} ${num2} ${result});
    return result;
};

Calculator.prototype.divide = function (num1, num2) {
    if (num2 === 0) {
        throw new Error;
    }
    const result = num1 / num2;
    this.operations.push(${num1} ${num2} ${result});
    return result;
};

Calculator.prototype.printOperations = function () {
    console.log(this.operations);
};

Calculator.prototype.clearOperations = function () {
    this.operations = [];
};


const calc = new Calculator();
calc.add(5, 3);
calc.multiply(2, 3);
calc.subtract(5, 3);
calc.divide(10, 2);
calc.printOperations();
calc.clearOperations();
calc.printOperations();