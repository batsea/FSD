function Student(name, grade) {
    this.name = name;
    this.grade = grade;

    this.study = function() {
        console.log(`${this.name} is studying.`);
    };

    this.getGrade = function() {
        return this.grade;
    };
}

let student1 = new Student("Alice", "A");
let student2 = new Student("Bob", "B");

student1.study();
console.log(`${student1.name}'s grade: ${student1.getGrade()}`);

student2.study();
console.log(`${student2.name}'s grade: ${student2.getGrade()}`);
