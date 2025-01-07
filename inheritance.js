function Person(name, age) {
    this.name = name;
    this.age = age;

    this.describe = function() {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;

    this.study = function() {
        return `${this.name} is studying for grade ${this.grade}.`;
    };
}

let student1 = new Student("John", 30, "A");

console.log(student1.describe());
console.log(student1.study());
