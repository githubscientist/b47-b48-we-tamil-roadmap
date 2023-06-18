// function prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
     console.log(`Hello, my name is ${this.name}`);
}

let person101 = new Person('Krish');

person101.greet();