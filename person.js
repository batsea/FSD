let Person = {
    name: "John",
    age: 20,
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    isAdult() {
        return this.age >= 18;
    }
};

Person.greet();
console.log(`Is adult: ${Person.isAdult()}`);
