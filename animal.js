class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

let animal = new Animal();
let dog = new Dog();

animal.speak();
dog.speak();
